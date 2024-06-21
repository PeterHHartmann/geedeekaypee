'use client';

import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import type { RosterCharacter } from '@/lib/definitions';
import { DndContext, DragOverlay, type DragStartEvent } from '@dnd-kit/core';
import { useId, useState, type ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode; }) {
    const dnd_id = useId();

    const [draggedCharacter, setDraggedCharacter] = useState<RosterCharacter | undefined>(undefined);

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;

        const current = active.data.current;

        if (current) {
            const draggedCharacter = current.character;
            if (draggedCharacter) {
                setDraggedCharacter(draggedCharacter as RosterCharacter);
            } else {
                setDraggedCharacter(undefined);
            }
        }
    }

    return (
        <DndContext onDragStart={handleDragStart} id={dnd_id}>
            {children}
            <DragOverlay className='flex px-2 rounded-md overflow-clip cursor-grabbing opacity-75 bg-slate-800'>
                {draggedCharacter
                    ? <CharacterInfo character={draggedCharacter} />
                    : null
                }
            </DragOverlay>
        </DndContext>
    );
}