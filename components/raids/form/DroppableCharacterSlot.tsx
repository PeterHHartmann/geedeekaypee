'use client';

import { DraggableCharacterSlot } from '@/components/raids/form/DraggableCharacterSlot';
import { CharacterRow } from '@/components/roster/CharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { FC } from "react";

type DroppableProp = {
    id: string;
    mainRoster: RosterCharacter[];
    initial: RosterCharacter | null;
    index: number;
};

export const DroppableCharacterSlot: FC<DroppableProp> = ({ id, mainRoster, initial, index }) => {

    const { isOver, setNodeRef } = useDroppable({
        id: `${id}-droppable`,
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
                    'bg-slate-600': isOver == true
                }
            )}
        >
            {initial
                ? <DraggableCharacterSlot character={initial} id={`${id}-draggable`} index={index}>
                    <CharacterRow character={initial} />
                </DraggableCharacterSlot>
                : null
            }
        </div>
    );
};