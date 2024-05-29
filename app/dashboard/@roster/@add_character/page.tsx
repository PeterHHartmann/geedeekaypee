import { AddCharacterForm } from '@/app/_ui/roster/AddCharacterForm';
import { fetchRolesForCharacterClasses, fetchCharacterClasses } from '@/app/_lib/actions';

export default async function AddCharacterSection() {
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();
    return (
        <AddCharacterForm characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
    );
}