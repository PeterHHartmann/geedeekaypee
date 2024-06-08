'use client';

import { DroppableCharacterSlot } from '@/components/raids/form/DroppableCharacterSlot';
import type { RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useEffect, useId, useState, type ReactNode } from 'react';
import { randomBytes } from 'crypto';

type Props = {
    size: number;
    initial: RosterCharacter[] | undefined;
    allCharacters: RosterCharacter[];
};

type Row = {
    id: string,
    character: RosterCharacter | undefined;
};

export function SortableRosterList({
    size,
    initial,
    allCharacters,
}: Props) {
    const context_id = useId();
    const identifier = 'sortable-character';
    const [rows, setRows] = useState<Row[]>(createEmptyItems(size));

    function createEmptyItems(length: number): Row[] {
        return Array.from(({ length }), (_, index) => ({ id: `${identifier}-${randomBytes(16).toString('hex')}-${index}`, character: undefined }));
    }

    useEffect(() => {
        if (initial) {
            const newRows: Row[] = createEmptyItems(size);
            initial.forEach((character, index) => {
                newRows[index].character = character;
            });
            setRows(newRows);
        }
    }, [initial, size]);

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            const activeId = active.id;

            if (activeId.toString().includes(identifier) && over) {
                if (activeId !== over.id) {
                    const current = rows.slice();
                    const oldIndex = current.findIndex(({ id }) => id == activeId);
                    const newIndex = current.findIndex(({ id }) => id == over.id);
                    const newRows = arrayMove(current, oldIndex, newIndex);
                    setRows(newRows);
                }
            }
        },
    });

    return (
        <div className='grid grid-flow-col grid-rows-5 grid-cols-5 gap-1 rounded-md overflow-clip'>
            <SortableContext
                id={context_id}
                items={rows}
            >
                {rows.map(({ id, character }, index) => (
                    <SortableRosterRow key={id} id={id}>
                        <input type='hidden' value={character?.id || ''} name={`raid-roster-${index}`} />
                        <DroppableCharacterSlot id={id} characters={allCharacters} initial={character} />
                    </SortableRosterRow>
                ))}
            </SortableContext>
        </div>
    );
}

type ItemProps = {
    id: string;
    children: ReactNode;
};

export function SortableRosterRow({ id, children }: ItemProps) {

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
        >
            {children}
        </div>
    );
}