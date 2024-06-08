'use client';

import { CharRoleIcon } from '@/components/icon/CharRoleIcon';
import { CharTalentSpecIcon } from '@/components/icon/CharTalentSpecIcon';
import { CLASS_TEXT_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import type { ReactNode } from 'react';

type Props = {
    character: RosterCharacter;
    children?: ReactNode;
};

export function CharacterRow({ children, character }: Props) {
    return (
        <li className={`
        flex flex-nowrap w-full items-center gap-1 
        ${RosterCharacterSkeleton}
        `}>
            <div className='flex items-center h-full gap-1 px-2'>
                <CharRoleIcon role_name={character.role_name} />
                <CharTalentSpecIcon class_name={character.class_name} spec_name={character.spec_name} />
                <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            </div>
            {children}
        </li>
    );
}

export const RosterCharacterSkeleton = 'w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-600 dark:hover:bg-slate-700';
