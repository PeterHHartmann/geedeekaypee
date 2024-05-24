import { CLASS_TEXT_COLOR } from '@/app/lib/constants';
import type { RosterCharacter } from '@/app/lib/definitions';
import { CharacterClassIcon } from '@/app/ui/character-class-icon';
import { CharacterRoleIcon } from '@/app/ui/character-role-icon';

type Props = {
    character: RosterCharacter;
};

export function RosterCharacter({ character }: Props) {
    return (
        <div className='flex gap-1 mb-1 pb-1 px-1 border-b-2 border-primary-700 object-cover w-full'>
            <CharacterRoleIcon role_name={character.role_name} />
            <CharacterClassIcon class_name={character.class_name} />
            <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
        </div>
    );
}