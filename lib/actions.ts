'use server';
import 'server-only';
import type { CharacterClass, CharacterClassRoleOptions, CharacterRole, CharacterSpecialization, MutationResult, RosterCharacter } from '@/lib/definitions';
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
        const data = await sql<CharacterClass>
            `SELECT * 
            FROM character_classes`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character classes.');
    }
}

export async function fetchCharSpecs() {
    try {
        const data = await sql<CharacterSpecialization>
            `SELECT * 
            FROM class_specs`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character specializations.');
    }
}

export async function fetchCharRoles() {
    try {
        const data = await sql<CharacterRole>
            `SELECT *
            FROM character_roles
            ORDER BY character_roles.name ASC;`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch character roles.');
    }
}

export async function fetchCharRolesPerClass(): Promise<CharacterClassRoleOptions> {
    try {
        const data = await sql<{
            class_id: CharacterClass['id'],
            class_name: CharacterClass['name'],
            role_id: CharacterRole['id'],
            role_name: CharacterRole['name'];
        }>
            `SELECT 
                character_class_roles.class_id,
                character_classes.name as class_name,
                character_class_roles.role_id,
                character_roles.name AS role_name
            FROM character_class_roles
            INNER JOIN character_roles ON character_class_roles.role_id = character_roles.id
            INNER JOIN character_classes ON character_class_roles.class_id = character_classes.id;
        `;
        const classesWithAvailableRoles = data.rows.reduce<CharacterClassRoleOptions>
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

export async function fetchCharacters() {
    const session = await auth();
    const user = session!.user;

    if (!user) throw new Error('Fetch characters: No User found');

    return await unstable_cache(
        async () => {
            console.log('not cached:', user);

            try {
                const data = await sql<RosterCharacter>
                    `SELECT 
                characters.id, 
                characters.name,
                characters.created_at,
                characters.class_id,
                character_classes.name AS class_name,
                characters.spec_id,
                class_specs.name as spec_name,
                characters.role_id,
                character_roles.name AS role_name
                FROM characters
                INNER JOIN character_classes ON characters.class_id = character_classes.id
                INNER JOIN class_specs ON characters.spec_id = class_specs.id
                INNER JOIN character_roles ON characters.role_id = character_roles.id
                WHERE characters.user_email = ${user.email}
                ORDER BY created_at ASC;
                `;
                return data.rows;
            } catch (error) {
                console.log(error);
                throw new Error('Failed to fetch character roster.');
            }
        },
        [`characters[${user.email}]`],
        {
            tags: [`characters[${user.email}]`],
            revalidate: 3600
        }
    )();
};

export async function insertCharacter(
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
            `INSERT INTO characters (name, class_id, spec_id, role_id, user_email)
            VALUES (${parsed.data.name}, ${parsed.data.class_id}, ${parsed.data.spec_id},${parsed.data.role_id}, ${user.email});
            `;
        revalidateTag(`characters[${user.email}]`);
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to create character'] };
    }
}

export async function updateCharacter(
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
            `UPDATE characters
            SET name = ${parsed.data.name}, class_id = ${parsed.data.class_id}, spec_id = ${parsed.data.spec_id}, role_id = ${parsed.data.role_id}
            WHERE id = ${parsed.data.character_id} AND user_email = ${user.email};
            `;
        revalidateTag(`characters[${user.email}]`);
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to edit character'] };
    }
}

export async function deleteCharacter(
    _prevState: MutationResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user!;

    if (!user) {
        throw new Error('Failed to delete character: No User found');
    }

    const rawData = {
        id: formData.get('character_id')
    };

    const schema = z.object({ id: z.string() });
    const parsed = schema.safeParse(rawData);
    if (parsed.success) {
        try {
            await sql<RosterCharacter>
                `DELETE FROM characters 
                WHERE id = ${parsed.data.id}
                `;
            revalidateTag(`characters[${user.email}]`);
            return { success: true };
        } catch (error) {
            console.log(error);
            return { success: false, messages: ['Failed to create character'] };
        }
    } else {
        return { success: false, messages: ['Failed to create character'] };
    }
}

// export async function getBnetAccessToken() {
//     const client_id = process.env.BNET_CLIENT_ID;
//     const client_secret = process.env.BNET_CLIENT_SECRET;
//     try {
//         const response = await fetch('https://eu.battle.net/oauth/token?grant_type=client_credentials', {
//             method: 'POST',
//             headers: {
//                 Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             return data.access_token;
//         } else {
//             throw new Error(`Failed to fetch Bnet Access Token: ${response.status}`,);
//         }

//     } catch (error) {
//         throw error;
//     }
// }

// export async function getPlayableRaces() {
//     try {
//         const token = await getBnetAccessToken();
//         const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-race/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             return data.races;
//         } else {
//             console.log(response.status);
//         }

//     } catch (error) {

//     }
// }

// export async function getPlayableClasses() {
//     const token = await getBnetAccessToken();
//     try {
//         const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-class/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);

//             return data.classes;

//         } else {
//             throw new Error(`Failed to fetch Playable Classes: ${response.status}`);
//         }

//     } catch (error) {
//         throw new Error("error");
//     }
// }

// export async function getWowIcon() {
//     const token = await getBnetAccessToken();
//     try {
//         const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-class/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         });
//     } catch (error) {

//     }
// }