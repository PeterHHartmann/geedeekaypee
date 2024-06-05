'use client';

import { CharacterRow } from '@/components/roster/CharacterRow';
import type { RosterCharacter } from '@/lib/definitions';
import { DndContext, DragOverlay, type DragStartEvent } from '@dnd-kit/core';
import { useState, type ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode; }) {
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
        <DndContext onDragStart={handleDragStart}>
            {children}
            <DragOverlay className='rounded-md overflow-clip cursor-grabbing'>
                {draggedCharacter
                    ? <CharacterRow character={draggedCharacter} />
                    : null
                }
            </DragOverlay>
        </DndContext>
    );
}