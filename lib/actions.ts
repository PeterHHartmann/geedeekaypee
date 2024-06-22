'use server';
import 'server-only';
import type { CharClass, CharRoleOptionsForClasses, CharRole, ClassTalentSpec, ServerMutationResult, RosterCharacter, RaidVariant, RaidTemplate, RaidTemplateRosterPosition, RaidTemplateRosterPositions, RaidEvent, RaidEventRosterPosition, RaidTemplateAssignment, RaidEventAssignment } from '@/lib/definitions';
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
        const data = await sql<ClassTalentSpec>
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
            console.log('main_roster_chars fetch not cached for user:', user);

            try {
                const data = await sql<RosterCharacter>
                    `SELECT 
                        main_roster_chars.id, 
                        main_roster_chars.name,
                        main_roster_chars.created_at,
                        main_roster_chars.class_id,
                        char_classes.name AS class_name,
                        main_roster_chars.spec_id,
                        class_talent_specs.name as spec_name,
                        main_roster_chars.role_id,
                        char_roles.name AS role_name
                    FROM main_roster_chars
                    INNER JOIN char_classes ON main_roster_chars.class_id = char_classes.id
                    INNER JOIN class_talent_specs ON main_roster_chars.spec_id = class_talent_specs.id
                    INNER JOIN char_roles ON main_roster_chars.role_id = char_roles.id
                    WHERE main_roster_chars.user_email = ${user.email}
                    ORDER BY char_roles.created_at ASC, char_classes.created_at, class_talent_specs.created_at ASC
                    ;`;
                return data.rows;
            } catch (error) {
                console.log(error);
                throw new Error('Failed to fetch main roster.');
            }
        },
        [`mainrosters[${user.email}]`],
        {
            tags: [`mainrosters[${user.email}]`],
            revalidate: 3600
        }
    )();
};

export async function insertMainRosterChar(
    _prevState: ServerMutationResult,
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
            `INSERT INTO main_roster_chars (name, class_id, spec_id, role_id, user_email)
            VALUES (${parsed.data.name}, ${parsed.data.class_id}, ${parsed.data.spec_id},${parsed.data.role_id}, ${user.email})
            ;`;
        revalidateTag(`mainrosters[${user.email}]`);
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to insert new character to main roster'] };
    }
}

export async function updateMainRosterChar(
    _prevState: ServerMutationResult,
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
            `UPDATE main_roster_chars
            SET name = ${parsed.data.name}, class_id = ${parsed.data.class_id}, spec_id = ${parsed.data.spec_id}, role_id = ${parsed.data.role_id}
            WHERE id = ${parsed.data.character_id} 
            AND user_email = ${user.email}
            ;`;
        revalidateTag(`mainrosters[${user.email}]`);
        return { success: true };
    } catch (error) {
        console.log(error);

        return { success: false, messages: ['Failed to update character'] };
    }
}

export async function deleteMainRosterChar(
    _prevState: ServerMutationResult,
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
                `DELETE FROM main_roster_chars
                WHERE id = ${parsed.data.id} 
                AND user_email = ${user.email}
                ;`;
            revalidateTag(`mainrosters[${user.email}]`);
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
                raid_templates.raid_variant_id,
                raid_templates.name,
                raid_templates.size,
                raid_templates.difficulty,
                raid_variants.name AS raid_variant_name
            FROM raid_templates
            INNER JOIN raid_variants ON raid_variants.id = raid_templates.raid_variant_id
            ORDER BY raid_templates.created_at ASC
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid_variants.');
    }
}

export async function fetchDefaultRaidTemplate() {
    try {
        const data = await sql<RaidTemplate>
            `SELECT
                raid_templates.id,
                raid_templates.raid_variant_id,
                raid_templates.name,
                raid_templates.size,
                raid_templates.difficulty,
                raid_variants.name AS raid_variant_name
            FROM raid_templates
            INNER JOIN raid_variants ON raid_variants.id = raid_templates.raid_variant_id
            ORDER BY raid_templates.created_at ASC
            LIMIT 1
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid_variants.');
    }
}

export const fetchRosterPositionsForRaidTemplate = unstable_cache(
    async (raid_template_id: RaidTemplate['id']) => {
        const data = await sql<RaidTemplateRosterPosition>
            `SELECT * 
            FROM raid_template_roster_positions
            WHERE raid_template_id = ${raid_template_id}
            ORDER BY priority ASC, position ASC
            ;`;
        return data.rows;
    },
    ['raidtemplateRosterPositions'],
    {
        revalidate: 3600
    }
);

export async function fetchRaidEvents() {
    const session = await auth();
    const user = session!.user;

    if (!user) throw new Error('Cannot fetch main roster: User is not logged in');

    return await unstable_cache(
        async () => {
            console.log('raid_events fetch not cached for user:', user);
            try {
                const data = await sql<RaidEvent>
                    `SELECT 
                        raid_events.id,
                        raid_events.raid_template_id,
                        raid_events.title,
                        raid_events.date,
                        raid_events.time,
                        raid_events.is_public,
                        raid_templates.raid_variant_id AS raid_variant_id
                    FROM raid_events
                    INNER JOIN raid_templates ON raid_events.raid_template_id = raid_templates.id
                    WHERE user_email = ${user.email}
                    ORDER BY raid_events.created_at DESC
                    ;`;
                return data.rows;
            } catch (error) {
                console.log(error);
                throw new Error('Failed to fetch raid_events.');
            }
        },
        [`raidevents[${user.email}]`],
        {
            tags: [`raidevents[${user.email}]`],
            revalidate: 3600
        }
    )();
}

export async function fetchRaidTemplateSingle(raid_template_id: RaidTemplate['id']) {
    try {
        const data = await sql<RaidTemplate>
            `SELECT
                raid_templates.id,
                raid_templates.raid_variant_id,
                raid_templates.name,
                raid_templates.size,
                raid_templates.difficulty,
                raid_variants.name AS raid_variant_name
            FROM raid_templates
            INNER JOIN raid_variants ON raid_variants.id = raid_templates.raid_variant_id
            WHERE raid_templates.id = ${raid_template_id}
            ;`;
        return data.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid_variants.');
    }
}

export async function fetchRaidEvent(eventId: RaidEvent['id']) {
    try {
        const data = await sql<RaidEvent>
            `SELECT 
                raid_events.id,
                raid_events.raid_template_id,
                raid_events.title,
                raid_events.date,
                raid_events.time,
                raid_events.is_public,
                raid_templates.raid_variant_id AS raid_variant_id
            FROM raid_events
            INNER JOIN raid_templates ON raid_events.raid_template_id = raid_templates.id
            WHERE raid_events.id = ${eventId}
            ;`;
        return data.rows[0];
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid event.');
    }
}

export async function fetchRaidEventRoster(eventId: RaidEvent['id']) {
    try {
        const data = await sql<RaidEventRosterPosition>
            `SELECT * FROM raid_event_roster_chars
            WHERE raid_event_id = ${eventId}
            ;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid event roster.');
    }
}

export async function fetchRaidEventAssignments(eventId: RaidEvent['id']) {
    try {
        const data = await sql<RaidEventAssignment>
            `SELECT 
                raid_event_assignments.id,
                raid_event_assignments.raid_event_id,
                raid_event_assignments.assignment_group,
                raid_event_assignments.position,
                raid_event_assignments.raid_roster_id,
                raid_event_roster_chars.main_roster_id AS raid_roster_id
            FROM raid_event_assignments
            INNER JOIN raid_event_roster_chars ON raid_event_assignments.raid_roster_id = raid_event_roster_chars.id
            WHERE raid_event_assignments.raid_event_id = ${eventId}
            ;`;
        console.log(data.rows);

        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch raid event roster.');
    }
}

export async function insertRaidEvent(
    _prevState: ServerMutationResult,
    formData: FormData
): Promise<ServerMutationResult> {
    const session = await auth();
    const user = session!.user;

    if (!user) {
        throw new Error('Failed to update character: No User found');
    }

    let raid_roster: { character_id: FormDataEntryValue, position: number; }[] = [];
    let raid_assignements: { character_id: FormDataEntryValue, position: number, group: number; }[] = [];
    formData.forEach((value, key) => {
        if (key.includes('raidroster') && value) {
            const position = parseInt(key.split('_')[1], 10);
            raid_roster.push({ character_id: value, position: position });
        }
        if (key.includes('raidassignment') && value) {
            const split = key.split('_');
            const group = parseInt(split[1], 10);
            const position = parseInt(split[2], 10);
            raid_assignements.push({ character_id: value, position: position, group: group });
        }
    });

    const rawData = {
        raid_template_id: formData.get('raid_template_id'),
        title: formData.get('title'),
        date: formData.get('date'),
        time: formData.get('time') + ':00',
        visibility: formData.get('visibility') ? true : false,
        raid_roster: raid_roster,
        raid_assignements: raid_assignements
    };

    const rosterPositionsSchema = z.object({
        character_id: z.string().uuid(),
        position: z.number()
    });

    const raidAssignmentSchema = z.object({
        character_id: z.string().uuid(),
        position: z.number(),
        group: z.number()
    });

    const fullSchema = z.object({
        raid_template_id: z.string().uuid(),
        title: z.string()
            .min(2, 'Title must contain at least 2 characters')
            .max(24, 'Title must contain at most 24 characters')
            .transform(capitalize),
        date: z.string().date(),
        time: z.string().time(),
        visibility: z.boolean(),
        raid_roster: z.array(rosterPositionsSchema),
        raid_assignements: z.array(raidAssignmentSchema)
    });

    const validations = fullSchema.safeParse(rawData);

    if (!validations.success) {
        const errorMessages = validations.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }
    try {
        const data = validations.data;
        const result = await sql<RaidEvent>
            `INSERT INTO raid_events (user_email, raid_template_id, title, date, time, is_public)
            VALUES (${user.email}, ${data.raid_template_id}, ${data.title}, ${data.date}, ${data.time}, ${data.visibility})
            RETURNING id
            ;`;
        const insertedRaidEvent = result.rows[0];

        const insertedRaidRosterRows = await Promise.all(
            data.raid_roster.map(async (raid_roster_char) => {
                const created = await sql<{ id: string, main_roster_id: string; }>
                    `INSERT INTO raid_event_roster_chars (raid_event_id, position, main_roster_id)
                    VALUES (${insertedRaidEvent.id}, ${raid_roster_char.position}, ${raid_roster_char.character_id})
                    RETURNING id, main_roster_id
                ;`;
                return created.rows[0];
            })
        );

        const new_raid_assignments = data.raid_assignements.map((current) => {
            const raid_roster_row = insertedRaidRosterRows.find((raid_roster_char) => current.character_id == raid_roster_char.main_roster_id);
            return { ...current, raid_roster_id: raid_roster_row?.id || null };
        });

        const insertedAssignmentRows = await Promise.all(
            new_raid_assignments.map(async (assigned_char) => {
                await sql<RaidEventAssignment>
                    `INSERT INTO raid_event_assignments (raid_event_id, assignment_group, position, raid_roster_id)
                    VALUES (${insertedRaidEvent.id}, ${assigned_char.group}, ${assigned_char.position}, ${assigned_char.raid_roster_id})
                    ;`;
            })
        );

        revalidateTag(`raidevents[${user.email}]`);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, messages: ['Failed to save raid event. Please try again later'] };
    }
}

export async function updateRaidEvent(
    _prevState: ServerMutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user;

    if (!user) {
        throw new Error('Failed to update character: No User found');
    }

    let raid_roster: { character_id: FormDataEntryValue, position: number; }[] = [];
    let raid_assignements: { character_id: FormDataEntryValue, position: number, group: number; }[] = [];
    formData.forEach((value, key) => {
        if (key.includes('raidroster') && value) {
            const position = parseInt(key.split('_')[1], 10);
            raid_roster.push({ character_id: value, position: position });
        }
        if (key.includes('raidassignment') && value) {
            const split = key.split('_');
            const group = parseInt(split[1], 10);
            const position = parseInt(split[2], 10);
            raid_assignements.push({ character_id: value, position: position, group: group });
        }
    });

    const rawData = {
        raid_event_id: formData.get('raid_event_id'),
        raid_template_id: formData.get('raid_template_id'),
        title: formData.get('title'),
        date: formData.get('date'),
        time: formData.get('time') + ':00',
        visibility: formData.get('visibility') ? true : false,
        raid_roster: raid_roster,
        raid_assignements: raid_assignements
    };

    const rosterPositionsSchema = z.object({
        character_id: z.string().uuid(),
        position: z.number()
    });

    const raidAssignmentSchema = z.object({
        character_id: z.string().uuid(),
        position: z.number(),
        group: z.number()
    });

    const fullSchema = z.object({
        raid_event_id: z.string().uuid(),
        raid_template_id: z.string().uuid(),
        title: z.string()
            .min(2, 'Title must contain at least 2 characters')
            .max(24, 'Title must contain at most 24 characters')
            .transform(capitalize),
        date: z.string().date(),
        time: z.string().time(),
        visibility: z.boolean(),
        raid_roster: z.array(rosterPositionsSchema),
        raid_assignements: z.array(raidAssignmentSchema)
    });

    const validations = fullSchema.safeParse(rawData);

    if (!validations.success) {
        const errorMessages = validations.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }

    const data = validations.data;
    try {
        await sql<RaidEvent>
            `UPDATE raid_events 
            SET 
                user_email = ${user.email}, 
                raid_template_id = ${data.raid_template_id}, 
                title = ${data.title}, 
                date = ${data.date}, 
                time = ${data.time}, 
                is_public = ${data.visibility}
            WHERE id = ${data.raid_event_id}
            AND user_email = ${user.email}
            ;`;

        await sql`DELETE FROM raid_event_roster_chars
        WHERE raid_event_id = ${data.raid_event_id}
        ;`;

        const insertedRaidRosterRows = await Promise.all(
            data.raid_roster.map(async (raid_roster_char) => {
                const created = await sql<{ id: string, main_roster_id: string; }>
                    `INSERT INTO raid_event_roster_chars (raid_event_id, position, main_roster_id)
                    VALUES (${data.raid_event_id}, ${raid_roster_char.position}, ${raid_roster_char.character_id})
                    RETURNING id, main_roster_id
                ;`;
                return created.rows[0];
            })
        );

        const new_raid_assignments = data.raid_assignements.map((current) => {
            const raid_roster_row = insertedRaidRosterRows.find((raid_roster_char) => current.character_id == raid_roster_char.main_roster_id);
            return { ...current, raid_roster_id: raid_roster_row?.id || null };
        });

        const insertedAssignmentRows = await Promise.all(
            new_raid_assignments.map(async (assigned_char) => {
                await sql<RaidEventAssignment>
                    `INSERT INTO raid_event_assignments (raid_event_id, assignment_group, position, raid_roster_id)
                    VALUES (${data.raid_event_id}, ${assigned_char.group}, ${assigned_char.position}, ${assigned_char.raid_roster_id})
                    ;`;
            })
        );

        revalidateTag(`raidevents[${user.email}]`);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, messages: ['Failed to update raid event'] };
    }
}

export async function deleteRaidEvent(
    _prevState: ServerMutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user;
    if (!user) throw new Error('Cannot delete raid event: User is not logged in');

    const rawData = {
        event_id: formData.get('event_id')
    };

    const schema = z.object({
        event_id: z.string().uuid()
    });

    const validations = schema.safeParse(rawData);

    if (!validations.success) {
        const errorMessages = validations.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }
    const data = validations.data;
    try {
        await sql<RaidEvent>
            `DELETE FROM raid_events
            WHERE id = ${data.event_id}
            AND user_email = ${user.email}
        ;`;
        revalidateTag(`raidevents[${user.email}]`);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, messages: ['Failed to delete raid event. Please try again later'] };
    }
}

export const fetchAssignmentsForRaidTemplate = unstable_cache(
    async (raid_template_id: RaidTemplate['id']) => {
        try {
            const raw = await sql<RaidTemplateAssignment>
                `SELECT * 
                    FROM raid_template_assignments
                    WHERE raid_template_id = ${raid_template_id}
                    ORDER BY assignment_group ASC, priority ASC, position ASC
                    ;`;
            return raw.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch raid template assignments. Please try again later');
        }
    },
    ['raidtemplateAssignments'],
    {
        revalidate: 3600
    }
);

export async function fetchFake() {
    return 'yo';
}