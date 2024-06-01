import { CharacterClassIcon } from '@/components/CharacterClassIcon';
import { CharacterRoleIcon } from '@/components/CharacterRoleIcon';
import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CLASS_TEXT_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import type { ReactNode } from 'react';

type Props = {
    character: RosterCharacter;
    children?: ReactNode;
};

export function RosterCharacter({ children, character }: Props) {
    return (
        <div className={`
        flex flex-nowrap items-center gap-1 
        ${RosterCharacterSkeleton}
        `}>
            <div className='flex items-center h-full gap-1 px-2'>
                <CharacterRoleIcon role_name={character.role_name} />
                <CharacterClassIcon name={character.class_name} />
                <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            </div>
            {children}
            {/* <SlidingToolbarLeft>
                <EditCharacterForm character={character} />
                <DeleteCharacterForm character={character} />
            </SlidingToolbarLeft> */}
        </div>
    );
}

export const RosterCharacterSkeleton = 'w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-600 dark:hover:bg-slate-700';
