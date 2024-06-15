'use client';

import { DraggableCharacterRow } from '@/components/raids/form/DraggableCharacterRow';
import { CharacterRow } from '@/components/roster/CharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';

type Props = {
    id: string;
    mainRoster: RosterCharacter[];
    initial: RosterCharacter | null;
    index: number;
};

export function DroppableRosterSlot({ id, initial, index }: Props) {

    const { isOver, setNodeRef } = useDroppable({
        id: `${id}_droppable`,
        data: {
            index: index
        }
    });

    return (
        <div
            ref={setNodeRef}
            className={clsx(
                'h-[40px] overflow-clip border-b-1 border-slate-600',
                {
                    'bg-transparent': isOver == false,
                    'bg-slate-600': isOver == true
                }
            )}
        >
            {initial
                ?
                <>
                    <input
                        type='hidden'
                        name={`raidroster_${index}`}
                        value={initial.id || undefined}
                    />
                    <DraggableCharacterRow character={initial} id={`${id}_draggable`} index={index}>
                        <CharacterRow character={initial} className='border-transparent' />
                    </DraggableCharacterRow>
                </>
                : null
            }
        </div>
    );
};