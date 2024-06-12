import type { RosterCharacter } from '@/lib/definitions';
import { useDraggable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

type Props = {
    character: RosterCharacter;
    children?: ReactNode;
    id: string,
    index: number;
};

export function DraggableRosterSlot({ children, character, id, index }: Props) {
    const {
        setNodeRef,
        listeners,
        attributes
    } = useDraggable({
        id: id,
        data: {
            character: character,
            index: index
        }
    });

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            {children}
        </div>
    );

}