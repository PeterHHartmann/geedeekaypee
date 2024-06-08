'use server';
import 'server-only';
import type { CharClass, CharRoleOptionsForClasses, CharRole, CharSpec, MutationResult, RosterCharacter, Raid, RaidTemplate, RaidTemplatePosition } from '@/lib/definitions';
import { capitalize } from '@/lib/utils';
import { auth, signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError } from 'next-auth';
import { revalidateTag, unstable_cache } from 'next/cache';
import { z } from 'zod';

export async function authenticate(
    _prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function fetchCharClasses() {
    try {
        const data = await sql<CharClass>
            `SELECT * 
            FROM char_classes
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character classes.');
    }
}

export async function fetchCharSpecs() {
    try {
        const data = await sql<CharSpec>
            `SELECT * 
            FROM class_talent_specs
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character specializations.');
    }
}

export async function fetchCharRoles() {
    try {
        const data = await sql<CharRole>
            `SELECT *
            FROM char_roles
            ORDER BY char_roles.name ASC
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character roles.');
    }
}

export async function fetchCharRolesPerClass(): Promise<CharRoleOptionsForClasses> {
    try {
        const data = await sql<{
            class_id: CharClass['id'],
            class_name: CharClass['name'],
            role_id: CharRole['id'],
            role_name: CharRole['name'];
        }>
            `SELECT 
                char_class_roles.class_id,
                char_classes.name as class_name,
                char_class_roles.role_id,
                char_roles.name AS role_name
            FROM char_class_roles
            INNER JOIN char_roles ON char_class_roles.role_id = char_roles.id
            INNER JOIN char_classes ON char_class_roles.class_id = char_classes.id
            ;`;
        const classesWithAvailableRoles = data.rows.reduce<CharRoleOptionsForClasses>
            ((acc, row) => {
                if (!acc[row.class_id]) {
                    acc[row.class_id] = [{ role_id: row.role_id, role_name: row.role_name }];
                } else {
                    acc[row.class_id].push({ role_id: row.role_id, role_name: row.role_name });
                }
                return acc;
            }, {});

        return classesWithAvailableRoles;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch filtered character roles');
    }
}

export async function fetchMainRoster() {
    const session = await auth();
    const user = session!.user;

    if (!user) throw new Error('Cannot fetch main roster: User is not logged in');

    return await unstable_cache(
        async () => {
            console.log('characters fetch not cached for user:', user);

            try {
                const data = await sql<RosterCharacter>
                    `SELECT 
                        main_roster.id, 
                        main_roster.name,
                        main_roster.created_at,
                        main_roster.class_id,
                        char_classes.name AS class_name,
                        main_roster.spec_id,
                        class_talent_specs.name as spec_name,
                        main_roster.role_id,
                        char_roles.name AS role_name
                    FROM main_roster
                    INNER JOIN char_classes ON main_roster.class_id = char_classes.id
                    INNER JOIN class_talent_specs ON main_roster.spec_id = class_talent_specs.id
                    INNER JOIN char_roles ON main_roster.role_id = char_roles.id
                    WHERE main_roster.user_email = ${user.email}
                    ORDER BY char_roles.created_at ASC, char_classes.created_at, class_talent_specs.created_at ASC
                    ;`;
                return data.rows;
            } catch (error) {
                console.log(error);
                throw new Error('Failed to fetch main roster.');
            }
        },
        [`mainroster[${user.email}]`],
        {
            tags: [`mainroster[${user.email}]`],
            revalidate: 3600
        }
    )();
};

export async function insertMainRosterChar(
    _prevState: MutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user;

    if (!user) {
        throw new Error('Failed to insert character: No User found');
    }

    const rawData = {
        name: formData.get('name'),
        class_id: formData.get('class_id'),
        spec_id: formData.get('spec_id'),
        role_id: formData.get('role_id'),
    };

    const schema = z.object({
        name: z.string()
            .min(2, 'Name must contain at least 2 characters')
            .max(12, 'Name must contain at most 24 characters')
            .transform(capitalize),
        class_id: z.string(),
        spec_id: z.string(),
        role_id: z.string()
    });

    const parsed = schema.safeParse(rawData);
    if (!parsed.success) {
        const errorMessages = parsed.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }
    try {
        await sql<RosterCharacter>
            `INSERT INTO main_roster (name, class_id, spec_id, role_id, user_email)
            VALUES (${parsed.data.name}, ${parsed.data.class_id}, ${parsed.data.spec_id},${parsed.data.role_id}, ${user.email})
            ;`;
        revalidateTag(`mainroster[${user.email}]`);
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to insert new character to main roster'] };
    }
}

export async function updateMainRosterChar(
    _prevState: MutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user;

    if (!user) {
        throw new Error('Failed to update character: No User found');
    }

    const rawData = {
        character_id: formData.get('character_id'),
        name: formData.get('name'),
        class_id: formData.get('class_id'),
        spec_id: formData.get('spec_id'),
        role_id: formData.get('role_id'),
    };

    const schema = z.object({
        character_id: z.string(),
        name: z.string()
            .min(2, 'Name must contain at least 2 characters')
            .max(12, 'Name must contain at most 24 characters')
            .transform(capitalize),
        class_id: z.string(),
        spec_id: z.string(),
        role_id: z.string()
    });

    const parsed = schema.safeParse(rawData);

    if (!parsed.success) {
        const errorMessages = parsed.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }

    try {
        await sql<RosterCharacter>
            `UPDATE main_roster
            SET name = ${parsed.data.name}, class_id = ${parsed.data.class_id}, spec_id = ${parsed.data.spec_id}, role_id = ${parsed.data.role_id}
            WHERE id = ${parsed.data.character_id} 
            AND user_email = ${user.email}
            ;`;
        revalidateTag(`mainroster[${user.email}]`);
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to update character'] };
    }
}

export async function deleteMainRosterChar(
    _prevState: MutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user!;

    if (!user) {
        throw new Error('Failed to delete character from roster: No User found');
    }

    const rawData = {
        id: formData.get('character_id')
    };

    const schema = z.object({ id: z.string() });
    const parsed = schema.safeParse(rawData);
    if (parsed.success) {
        try {
            await sql<RosterCharacter>
                `DELETE FROM main_roster
                WHERE id = ${parsed.data.id} 
                AND user_email = ${user.email}
                ;`;
            revalidateTag(`mainroster[${user.email}]`);
            return { success: true };
        } catch (error) {
            console.log(error);
            return { success: false, messages: ['Failed to delete character from roster'] };
        }
    } else {
        return { success: false, messages: ['Failed to create character from roster'] };
    }
}

export async function fetchRaidTemplates() {
    try {
        const data = await sql<RaidTemplate>
            `SELECT
                raid_templates.id,
                raid_templates.raid_id,
                raid_templates.name,
                raid_templates.size,
                raid_templates.difficulty,
                raids.name AS raid_name
            FROM raid_templates
            INNER JOIN raids ON raids.id = raid_templates.raid_id
            ORDER BY raid_templates.created_at DESC
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raids.');
    }
}

export async function fetchRaidTemplatePositions(template_id: RaidTemplate['id']) {
    try {
        const data = await sql<RaidTemplatePosition>
            `SELECT * 
            FROM raid_template_positions
            WHERE template_id = ${template_id}
            ORDER BY position ASC
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid template positions.');
    }
}