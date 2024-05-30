import { CharacterClassIcon } from '@/components/CharacterClassIcon';
import { CharacterRoleIcon } from '@/components/CharacterRoleIcon';
import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CLASS_TEXT_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';

export function RosterCharacter({ character }: {
    character: RosterCharacter;
}) {
    return (
        <div className={`flex flex-nowrap items-center gap-1 ${RosterCharacterSkeleton}`}>
            <CharacterRoleIcon role_name={character.role_name} />
            <CharacterClassIcon name={character.class_name} />
            <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            <SlidingToolbarLeft>
                <EditCharacterForm />
                <DeleteCharacterForm character={character} />
            </SlidingToolbarLeft>
        </div>
    );
}

export const RosterCharacterSkeleton = 'object-cover w-full h-[2.375rem] px-1 py-1 border-b-[1px] border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-750';
