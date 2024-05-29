import { InsertCharacterForm } from '@/app/_ui/roster/insert-character-form';
import { fetchRolesForCharacterClasses, fetchCharacterClasses } from '@/app/_lib/actions';

export default async function NewRosterCharacterPartial() {
    const all_classes = await fetchCharacterClasses();
    const all_roles_for_classes = await fetchRolesForCharacterClasses();
    return (
        <InsertCharacterForm all_character_classes={all_classes} all_roles_for_classes={all_roles_for_classes} />
    );
}