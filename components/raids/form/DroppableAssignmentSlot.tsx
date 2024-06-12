'use client';

import { DraggableCharacterRow } from '@/components/raids/form/DraggableCharacterRow';
import { CharacterRow } from '@/components/roster/CharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type Props = {
    id: string;
    character: RosterCharacter | null;
    groupIndex: number;
    rowIndex: number;
};

export function DroppableAssignmentSlot({ id, character, groupIndex, rowIndex }: Props) {

    const { isOver, setNodeRef } = useDroppable({
        id: `${id}_droppable`,
        data: {
            index: rowIndex
        }
    });

    return (
        <div
            ref={setNodeRef}
            className={clsx(
                'h-[40px] overflow-clip border-b-1 border-slate-600 w-full',
                {
                    'bg-transparent': isOver == false,
                    'bg-slate-600': isOver == true
                }
            )}
        >
            {character
                ?
                <>
                    <input
                        type='hidden'
                        name={`raid_assignment_${groupIndex}_${rowIndex}`}
                        value={character.id || undefined}
                    />
                    <DraggableCharacterRow character={character} id={`${id}_draggable`} index={rowIndex}>
                        <CharacterRow character={character} className='border-transparent' />
                    </DraggableCharacterRow>
                </>
                : null
            }
        </div>
    );
};