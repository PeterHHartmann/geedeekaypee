'use server';

import type { RosterCharacter } from '@/app/lib/definitions';
import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError, type User } from 'next-auth';

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
                WHERE characters.user_email = ${user_email};
                `;
            // const data = await sql<RosterCharacter>
            //     `SELECT *
            //     FROM characters 
            //     WHERE characters.user_email = ${user_email};
            // `;
            console.log('character roster size', data.rowCount);
            return data.rows;
        } catch (error) {
            console.log(error);

            throw new Error('Failed to fetch character roster.');
        }
    } else {
        throw new Error('Cannot fetch character roster, no user email supplied');
    }
};