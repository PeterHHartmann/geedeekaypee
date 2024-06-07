'use client';

import { DroppableCharacterSlot } from '@/components/raids/form/DroppableCharacterSlot';
import type { RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import React, { useMemo, useState, type ReactNode } from 'react';

type Props = {
    size: number;
    uid: string;
    initial?: RosterCharacter[];
    characters: RosterCharacter[];
};

type ListItem = {
    id: string,
    character: RosterCharacter | undefined;
};

export function SortableList({
    size,
    uid,
    initial,
    characters,
}: Props) {

    function createEmptyItems(uid: string, length: number) {
        return Array.from(({ length }), (_, index) => ({ id: `${uid}-${index + 1}`, character: undefined }));
    }

    const initialItems = useMemo(() => {
        if (initial) {
            const result = initial.map<ListItem>((character, index) => ({ id: `${uid}-${index + 1}`, character: character }));
            return result;
        }
    }, [uid, initial]);

    const [items, setItems] = useState(initialItems || createEmptyItems(uid, size));

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            const activeId = active.id;

            if (activeId.toString().includes(uid) && over) {
                if (activeId !== over.id) {
                    setItems((items) => {
                        const oldIndex = items.findIndex(({ id }) => id == activeId);
                        const newIndex = items.findIndex(({ id }) => id == over.id);
                        return arrayMove(items, oldIndex, newIndex);
                    });
                }
            }
        },
    });

    return (
        <div className='rounded-md overflow-clip'>
            <SortableContext
                items={items}
            >
                {items.map(({ id, character }) => (
                    <SortableItem key={id} id={id}>
                        <DroppableCharacterSlot id={id} characters={characters} initial={character} />
                    </SortableItem>
                ))}
            </SortableContext>
        </div>
    );
}

type ItemProps = {
    id: string;
    children: ReactNode;
};

export function SortableItem({ id, children }: ItemProps) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={clsx(
                'w-[250px] min-h-[38px] overflow-x-auto'
            )}
        >
            {children}
        </div>
    );
}