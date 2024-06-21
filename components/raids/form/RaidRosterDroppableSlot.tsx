'use client';

import { CharacterRowDraggable } from '@/components/raids/form/CharacterRowDraggable';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
    id: string;
    mainRoster: RosterCharacter[];
    initial: RosterCharacter | null;
    index: number;
    removeHandler: (index: number) => void;
};

export function RaidRosterDroppableSlot({
    id,
    initial,
    index,
    removeHandler
}: Props) {

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
                'h-[40px] overflow-clip',
                {
                    'bg-transparent': isOver == false,
                    'bg-slate-700': isOver == true
                }
            )}
        >
            {initial
                ?
                <div className='flex justify-center items-center w-full h-full'>
                    <input
                        type='hidden'
                        name={`raidroster_${index}`}
                        value={initial.id || undefined}
                    />
                    <CharacterRowDraggable character={initial} id={`${id}_draggable`} index={index}>
                        <CharacterInfo character={initial} />
                    </CharacterRowDraggable>
                    <button className='flex p-2 justify-center items-center text-slate-400' onClick={() => removeHandler(index)}>
                        <XMarkIcon className='w-5' />
                    </button>
                </div>
                : null
            }
        </div>
    );
};