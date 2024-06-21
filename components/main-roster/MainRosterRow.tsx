'use client';
import type { RosterCharacter } from '@/lib/definitions';
import { useDraggable, type DraggableAttributes } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import type { ReactNode } from 'react';


type Props = {
    children: ReactNode;
    character: RosterCharacter;
    draggable?: boolean;
};

export function MainRosterRow({
    children,
    character,
    draggable
}: Props) {

    const {
        setNodeRef,
        listeners,
        attributes
    } = useDraggable({
        id: `draggableRosterCharacter-${character.id}`,
        data: {
            character: character
        }
    });

    return (
        <Container
            setNodeRef={draggable ? setNodeRef : undefined}
            attributes={draggable ? attributes : undefined}
            listeners={draggable ? listeners : undefined}
        >
            {children}
        </Container>
    );

}

type ContainerProps = {
    children: ReactNode;
    setNodeRef?: (element: HTMLElement | null) => void;
    attributes?: DraggableAttributes;
    listeners?: SyntheticListenerMap | undefined;
};

function Container({ children, setNodeRef, attributes, listeners }: ContainerProps) {
    return (
        <div
            className='flex w-full h-full'
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            {children}
        </div>
    );
}