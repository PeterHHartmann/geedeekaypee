'use client';

import { DraggableCharacterRow } from '@/components/raids/form/DraggableCharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { CharacterInfo } from '@/components/main-roster/CharacterInfo';

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
                        name={`raidassignment_${groupIndex}_${rowIndex}`}
                        value={character.id || undefined}
                    />
                    <DraggableCharacterRow character={character} id={`${id}_draggable`} index={rowIndex}>
                        <CharacterInfo character={character} />
                    </DraggableCharacterRow>
                </>
                : null
            }
        </div>
    );
};