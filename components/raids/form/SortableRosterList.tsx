'use client';

import { DroppableCharacterSlot } from '@/components/raids/form/DroppableCharacterSlot';
import type { RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import React, { useCallback, type Dispatch, type SetStateAction } from 'react';

type Props = {
    mainRoster: RosterCharacter[];
    roster: (RosterCharacter | null)[];
    setRoster: Dispatch<SetStateAction<(RosterCharacter | null)[]>>;
};

export function SortableRosterList({
    roster,
    mainRoster,
    setRoster
}: Props) {

    const divideRosterColumns = useCallback((): (RosterCharacter | null)[][] => {
        let result = [];
        const columnSize = 5;
        for (let i = 0;i < roster.length;i += 5) {
            result.push(roster.slice(i, i + columnSize));
        }
        return result;
    }, [roster]);

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            if (!over) {
                return;
            }
            const newRoster = roster.slice(0);
            const isFromMainRoster = active.id.toString().includes('draggableRosterCharacter');
            const isFromForm = active.id.toString().includes('roster-row-draggable');
            const activeData = active.data.current;
            if (!activeData) {
                return;
            }
            const activeChar: RosterCharacter = activeData.character;

            const overData = over.data.current;
            if (!overData) {
                return;
            }
            const overIndex: number = overData.index;

            //Dragged from the roster in the form
            if (isFromForm) {
                const activeIndex: number = activeData.index;
                const oldChar = newRoster[overIndex];
                const newChar = newRoster[activeIndex];
                newRoster[overIndex] = newChar;
                newRoster[activeIndex] = oldChar;
                setRoster(newRoster);
                return;
            }

            //Dragged from main roster on the left side
            if (isFromMainRoster) {
                const duplicateIndex = roster.findIndex((char) => (char !== null && char.id == activeChar.id));

                //if character is already in the list
                if (duplicateIndex >= 0) {
                    if (newRoster[overIndex] !== null) {
                        newRoster[duplicateIndex] = newRoster[overIndex];
                    } else {
                        newRoster[duplicateIndex] = null;
                    }
                }
                newRoster[overIndex] = activeChar;
                setRoster(newRoster);
                return;
            }

        },
    });

    return (
        <div className='grid grid-flow-column grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 rounded-md overflow-clip sm:divide-x divide-solid divide-slate-600 border-1 border-slate-600 shadow-md shadow-slate-800'>
            {divideRosterColumns().map((column, col_index) => (
                <div key={`roster-col${col_index}`} className='flex sm:flex-col outline outline-1 outline-slate-400 sm:outline-none'>
                    <div className='w-[15%] sm:w-full bg-slate-800 p-1 border-b-1 border-slate-600'>
                        <h3 className='text-center flex justify-center items-center text-white'>
                            <span className='hidden sm:block'>{`Group ${col_index + 1}`}</span>
                            <span className='block sm:hidden'>{`G${col_index + 1}`}</span>
                        </h3>
                    </div>
                    <div className='w-full bg-slate-700'>
                        {column.map((row, row_index) => (
                            <DroppableCharacterSlot key={`${col_index}-${row_index}-roster-row`} id={`${col_index}-${row_index}-roster-row`} mainRoster={mainRoster} initial={row} index={(col_index * 5) + row_index} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
