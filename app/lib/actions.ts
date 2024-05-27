'use server';

import type { CharacterClass, CharacterRole, RosterCharacter } from '@/app/lib/definitions';
import { capitalize } from '@/app/lib/utils';
import { auth, signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError, type User } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function authenticate(
    prevState: string | undefined,
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

export async function getBnetAccessToken() {
    const client_id = process.env.BNET_CLIENT_ID;
    const client_secret = process.env.BNET_CLIENT_SECRET;
    try {
        const response = await fetch('https://eu.battle.net/oauth/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.access_token;
        } else {
            throw new Error(`Failed to fetch Bnet Access Token: ${response.status}`,);
        }

    } catch (error) {
        throw error;
    }
}

export async function getPlayableRaces() {
    try {
        const token = await getBnetAccessToken();
        const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-race/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.races;
        } else {
            console.log(response.status);
        }

    } catch (error) {

    }
}

export async function getPlayableClasses() {
    const token = await getBnetAccessToken();
    try {
        const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-class/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            return data.classes;

        } else {
            throw new Error(`Failed to fetch Playable Classes: ${response.status}`);
        }

    } catch (error) {
        throw new Error("error");
    }
}

export async function getWowIcon() {
    const token = await getBnetAccessToken();
    try {
        const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-class/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    } catch (error) {

    }
}

export async function fetchCharacterRoster(user_email: User['email']) {
    if (user_email) {
        try {
            const data = await sql<RosterCharacter>
                `SELECT 
                characters.id, 
                characters.name,
                characters.created_at,
                character_classes.name AS class_name,
                character_roles.name AS role_name
                FROM characters
                INNER JOIN character_classes ON characters.class_id = character_classes.id 
                INNER JOIN character_roles ON characters.role_id = character_roles.id
                WHERE characters.user_email = ${user_email}
                ORDER BY created_at ASC;
                `;
            return data.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch character roster.');
        }
    } else {
        throw new Error('Cannot fetch character roster, no user email supplied');
    }
};

export async function fetchCharacterClasses() {
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

export async function fetchCharacterRoles() {
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

type InsertCharacterResult = {
    success: boolean;
    message?: string;
} | undefined;

export async function insertCharacter(
    prevState: InsertCharacterResult,
    formData: FormData
) {
    const session = await auth();
    const user = session!.user!;

    const rawData = {
        name: formData.get('name'),
        class_id: formData.get('class_id'),
        role_id: formData.get('role_id'),
    };

    const schema = z.object({
        name: z.string()
            .min(2, 'Name must contain at least 2 characters')
            .max(12, 'Name must contain at most 24 characters')
            .transform(capitalize),
        class_id: z.string(),
        role_id: z.string()
    });

    const parsed = schema.safeParse(rawData);
    const data = parsed.data;
    if (!parsed.success) {
        const errorMessages = parsed.error.issues.map((issue) => issue.message);
        return { success: false, messages: errorMessages };
    }
    try {
        await sql<RosterCharacter>
            `INSERT INTO characters (name, class_id, role_id, user_email)
            VALUES (${parsed.data.name}, ${parsed.data.class_id}, ${parsed.data.role_id}, ${user.email});
            `;
        revalidatePath('/dashboard/@roster');
        return { success: true };
    } catch (error) {
        return { success: false, messages: ['Failed to create character'] };
    }
}