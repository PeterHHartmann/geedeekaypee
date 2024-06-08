'use client';

import { CharRoleIcon } from '@/components/icon/CharRoleIcon';
import { CharTalentSpecIcon } from '@/components/icon/CharTalentSpecIcon';
import { CLASS_TEXT_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import { useDraggable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

type Props = {
    character: RosterCharacter;
    children?: ReactNode;
    id: string,
    index: number;
};

export function CharacterRowDraggable({ children, character, id }: Props) {

    const {
        setNodeRef,
        listeners,
        attributes
    } = useDraggable({
        id: id,
        data: {
            character: character
        }
    });

    return (
        <li className={`
        flex flex-nowrap items-center gap-1 
        ${RosterCharacterSkeleton}
        `}>
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                className='flex items-center h-full gap-1 px-2'
            >
                <CharRoleIcon role_name={character.role_name} />
                <CharTalentSpecIcon class_name={character.class_name} spec_name={character.spec_name} />
                <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            </div>
            {children}
        </li>
    );
}

const RosterCharacterSkeleton = 'w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-600 dark:hover:bg-slate-700';