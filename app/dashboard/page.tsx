import { Button } from '@/app/ui/button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';
import { RosterCharacter } from '@/app/ui/roster-character';
import { auth } from '@/auth';
import { fetchCharacterRoster } from '@/app/lib/actions';
import { InsertCharacterForm } from '@/app/ui/roster/roster-form';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'User dashboard for managing roster and upcoming raids',
};

export default async function Page() {
    return (
        <h1 className='mx-auto text-3xl mb-4'>Dashboard</h1>
    );
}
