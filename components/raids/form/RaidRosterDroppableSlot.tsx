'use client';

import { CharacterRowDraggable } from '@/components/raids/form/CharacterRowDraggable';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CLASS_BG_COLOR } from '@/lib/constants';

type Props = {
    id: string;
    mainRoster: RosterCharacter[];
    character: RosterCharacter | null;
    index: number;
    removeHandler: (index: number) => void;
};

export function RaidRosterDroppableSlot({
    id,
    character,
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
            {character
                ?
                <div className={`flex justify-center items-center w-full h-full ${CLASS_BG_COLOR[character.class_name]}`}>
                    <input
                        type='hidden'
                        name={`raidroster_${index}`}
                        value={character.id || undefined}
                    />
                    <CharacterRowDraggable character={character} id={`${id}_draggable`} index={index}>
                        <CharacterInfo character={character} />
                    </CharacterRowDraggable>
                    <button className='flex p-2 justify-center items-center text-slate-950' onClick={() => removeHandler(index)}>
                        <XMarkIcon className='w-5' />
                    </button>
                </div>
                : null
            }
        </div>
    );
};