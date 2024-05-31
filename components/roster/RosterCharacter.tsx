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
        <div className={`
        flex flex-nowrap items-center gap-1 
        w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700
        `}>
            <div className='flex items-center h-full gap-1 px-2'>
                <CharacterRoleIcon role_name={character.role_name} />
                <CharacterClassIcon name={character.class_name} />
                <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            </div>
            <SlidingToolbarLeft>
                <EditCharacterForm character={character} />
                <DeleteCharacterForm character={character} />
            </SlidingToolbarLeft>
        </div>
    );
}

export const RosterCharacterSkeleton = 'object-cover w-full h-[2.375rem] px-1 py-1 border-b-[1px] border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';
