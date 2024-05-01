'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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
        }
    } catch (error) {
        console.log(error);
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
    try {
        const token = await getBnetAccessToken();
        const response = await fetch('https://eu.api.blizzard.com/data/wow/playable-class/index?:region=eu&namespace=static-classic-eu&locale=en_US', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.classes;

        } else {
            console.log(response.status);
        }

    } catch (error) {

    }
}