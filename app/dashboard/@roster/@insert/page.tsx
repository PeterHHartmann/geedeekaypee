import { CharacterClassSelect } from '@/app/ui/roster/class-select';
import { CharacterRoleSelect } from '@/app/ui/roster/role-select';
import { InsertCharacterForm } from '@/app/ui/roster/roster-form';

export default function NewRosterCharacterPartial() {
    return (
        <InsertCharacterForm>
            <CharacterClassSelect />
            <CharacterRoleSelect />
        </InsertCharacterForm>
    );
}