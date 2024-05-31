import { AddCharacterForm } from '@/components/roster/AddCharacterForm';
import { fetchRolesForCharacterClasses, fetchCharacterClasses } from '@/lib/actions';

export default async function AddCharacterSection() {
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();
    return (
        <AddCharacterForm characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
    );
}