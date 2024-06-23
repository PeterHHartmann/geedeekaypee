'use client';

import { DroppableNew } from '@/components/raids/form/DroppableNew';
import type { RaidEventAssignment, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import { useMemo, type Dispatch, type SetStateAction } from 'react';

type Props = {
    groupIndex: number,
    assignmentGroup: RaidTemplateAssignment[][];
    raidRoster: (RosterCharacter | null)[];
    savedAssignments?: RaidEventAssignment[];
    assignedChars: (RosterCharacter | null)[][];
    setAssignedChars: Dispatch<SetStateAction<(RosterCharacter | null)[][] | undefined>>;
};

export function RaidAssignmentGroup({ groupIndex, assignmentGroup, raidRoster, savedAssignments, assignedChars, setAssignedChars }: Props) {

    const groupName = assignmentGroup[0][0].name;

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            if (!over || !over.id.toString().includes(`assignment-group${groupIndex}-row`)) {
                return;
            }
            const newAssigned = assignedChars.slice(0);

            const activeData = active.data.current;
            const overData = over.data.current;
            if (!activeData || !overData) {
                return;
            }

            const overIndex: number = overData.index;
            const isFromOwnGroup = active.id.toString().includes(`assignment-group${groupIndex}-row`);

            //Dragged from the roster in the form
            if (isFromOwnGroup) {
                if (over.id.toString().split('_')[0] == active.id.toString().split('_')[0]) {
                    return;
                }
                const activeIndex: number = activeData.index;
                const oldChar = newAssigned[groupIndex][overIndex];
                const newChar = newAssigned[groupIndex][activeIndex];
                newAssigned[groupIndex][overIndex] = newChar;
                newAssigned[groupIndex][activeIndex] = oldChar;
                setAssignedChars(newAssigned);
                return;
            }

            const isFromRaidRoster = active.id.toString().includes('roster-row_draggable');

            //Dragged from main roster on the left side
            if (isFromRaidRoster) {
                const activeChar = activeData.character;
                //if character is already in the list
                newAssigned[groupIndex][overIndex] = activeChar;
                setAssignedChars(newAssigned);
                return;
            }
        },
    });

    return (
        <div
            className='grid grid-flow-row bg-slate-200 dark:bg-slate-800/50 divide-y-1 divide-slate-600 dark:divide-slate-700 rounded-md shadow-md shadow-slate-400 dark:shadow-slate-800 overflow-clip'
        >
            <header className='bg-slate-300/50 dark:bg-slate-800/50 py-1'>
                <h3 className='text-lg text-semibold text-center'>
                    {groupName}
                </h3>
            </header>
            {assignedChars[groupIndex].map((assigned, rowIndex) => (
                <div key={`assignment-group-${groupIndex}-row-${rowIndex}`} className='flex divide-x-1 divide-slate-600 dark:divide-slate-700'>
                    <div className='flex min-w-10 max-w-10 justify-center items-center p-2 dark:bg-slate-800/25'>
                        <p>
                            {`${rowIndex + 1}`}
                        </p>
                    </div>
                    <div className='flex flex-grow w-full'>
                        <DroppableNew
                            id={`assignment-group${groupIndex}-row${rowIndex}`}
                            groupIndex={groupIndex}
                            rowIndex={rowIndex}
                            requirements={assignmentGroup[rowIndex]}
                            currentSlot={assigned}
                            allAssignedSlots={assignedChars}
                            setAllAssignedSlots={setAssignedChars}
                            raidRoster={raidRoster}
                            savedAssignments={savedAssignments}
                        />
                        {/* <DroppableAssignmentSlot id={`assignment-group${index}-row${rowIndex}`} character={assigned} groupIndex={index} rowIndex={rowIndex} /> */}
                    </div>
                </div>
            ))}
        </div>
    );

    // return (
    //     <div
    //         className='grid grid-flow-row bg-slate-200 dark:bg-slate-800/50 divide-y-1 divide-slate-600 dark:divide-slate-700 rounded-md shadow-md shadow-slate-400 dark:shadow-slate-800 overflow-clip'
    //     >
    //         <header className='bg-slate-300/50 dark:bg-slate-800/50 py-1'>
    //             <h3 className='text-lg text-semibold text-center'>
    //                 {groupName}
    //             </h3>
    //         </header>
    //         {assignedList && assignedList.map((assigned, rowIndex) => (
    //             <div key={`assignment-group-${groupIndex}-row-${rowIndex}`} className='flex divide-x-1 divide-slate-600 dark:divide-slate-700'>
    //                 <div className='flex min-w-10 max-w-10 justify-center items-center p-2 dark:bg-slate-800/25'>
    //                     <p>
    //                         {`${rowIndex + 1}`}
    //                     </p>
    //                 </div>
    //                 <div className='flex flex-grow w-full'>
    //                     <DroppableAssignmentSlot id={`assignment-group${groupIndex}-row${rowIndex}`} character={assigned} groupIndex={groupIndex} rowIndex={rowIndex} />
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
}