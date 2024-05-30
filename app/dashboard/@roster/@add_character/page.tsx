import { AddCharacterForm } from '@/components/roster/AddCharacterForm';
import { fetchRolesForCharacterClasses, fetchCharacterClasses } from '@/lib/actions';
import { sleep } from '@/lib/utils';

export default async function AddCharacterSection() {
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();
    await sleep(5000);
    return (
        <AddCharacterForm characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
    );
}