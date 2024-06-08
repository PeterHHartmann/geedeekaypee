'use client';

import { CharacterRow } from '@/components/roster/CharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { DndContext, useDndMonitor, useDroppable } from "@dnd-kit/core";
import clsx from 'clsx';
import { FC, useEffect, useState } from "react";

type DroppableProp = {
    id: string;
    characters: RosterCharacter[];
    initial: RosterCharacter | undefined;
};

export const DroppableCharacterSlot: FC<DroppableProp> = ({ id, characters, initial }) => {

    const [droppedCharacter, setDroppedCharacter] = useState<RosterCharacter>();

    useEffect(() => {
        if (initial) {
            const found = characters.find(({ id }) => id == initial.id);
            if (found) {
                setDroppedCharacter(found);
            }
        }
    }, [initial, characters]);

    const { isOver, setNodeRef } = useDroppable({
        id: id
    });

    useDndMonitor({
        onDragEnd(event) {
            if (isOver == true) {
                const active = event.active;
                if (active.id.toString().includes('draggableRosterCharacter')) {
                    const current = active.data.current;
                    if (current) {
                        const found = characters.find(({ id }) => id == current.character.id);
                        if (found) {
                            setDroppedCharacter(found);
                        }
                    }
                }
            }
        }
    });

    return (
        <DndContext>
            <div
                ref={setNodeRef}
                className={clsx(
                    'h-[40px] overflow-x-auto border-1 rounded-md overflow-clip',
                    {
                        'bg-slate-700': isOver == false,
                        'bg-slate-600': isOver == true
                    }
                )}
            >
                {droppedCharacter
                    ? <CharacterRow character={droppedCharacter} />
                    : null
                }
            </div>
        </DndContext>
    );
};