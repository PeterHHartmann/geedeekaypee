'use client';

import { DroppableAssignmentSlot } from '@/components/raids/form/DroppableAssignmentSlot';
import type { RaidEventAssignment, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type Props = {
    groupIndex: number,
    assignmentGroup: RaidTemplateAssignment[][];
    raidRoster: (RosterCharacter | null)[];
    savedAssignments?: RaidEventAssignment[];
    allAssignedChars: (RosterCharacter | null)[][];
    setAllAssignedChars: Dispatch<SetStateAction<(RosterCharacter | null)[][] | undefined>>;
};

export function RaidAssignmentGroup({ groupIndex, assignmentGroup, raidRoster, savedAssignments, allAssignedChars, setAllAssignedChars }: Props) {

    const groupName = assignmentGroup[0][0].name;
    const [hasRemoved, setHasRemoved] = useState<boolean>(false);

    function handleRemove(index: number) {
        const roster_copy = allAssignedChars.slice(0);
        roster_copy[groupIndex][index] = null;
        setHasRemoved(true);
        setAllAssignedChars(roster_copy);
    }

    useEffect(() => {
        if (!hasRemoved) {
            const allAssignedCharsForGroup = allAssignedChars[groupIndex].slice(0);
            allAssignedCharsForGroup.forEach((currentAssigned, rowIndex) => {
                if (currentAssigned !== null) {
                    const raidRosterCopy = raidRoster.slice(0);
                    if (!raidRosterCopy.includes(currentAssigned)) {
                        allAssignedCharsForGroup[rowIndex] = null;
                    }
                } else {
                    const elligible: { newChar: RosterCharacter | null, prio: number | null; } = {
                        newChar: null,
                        prio: null,
                    };
                    raidRoster.forEach((rosterChar, rosterCharIndex) => {
                        if (rosterChar !== null) {
                            if (!allAssignedCharsForGroup.includes(rosterChar)) {
                                const meetsReqs = assignmentGroup[rowIndex].find((require) => {
                                    const class_matches = !require.class_id || (rosterChar.class_id == require.class_id);
                                    const role_matches = !require.role_id || (rosterChar.role_id == require.role_id);
                                    const spec_matches = !require.spec_id || (rosterChar.spec_id == require.spec_id);
                                    return class_matches && role_matches && spec_matches;
                                });
                                if (meetsReqs) {
                                    const currentPrio = meetsReqs.priority;
                                    if (!elligible.prio
                                        || (elligible.prio > currentPrio)
                                    ) {
                                        elligible.prio = currentPrio;
                                        elligible.newChar = rosterChar;
                                    }
                                }
                            }
                        }
                    });
                    if (elligible.newChar && elligible.prio) {
                        allAssignedCharsForGroup[rowIndex] = elligible.newChar;
                    }
                }
                if (savedAssignments && currentAssigned === null) {
                    const foundAssignedForThisSlot = savedAssignments.find((assignment) => assignment.assignment_group == groupIndex && assignment.position == rowIndex);
                    if (foundAssignedForThisSlot) {
                        const savedAssigned = raidRoster.find((rosterChar) => rosterChar && rosterChar.id === foundAssignedForThisSlot.raid_roster_id);
                        if (savedAssigned) {
                            allAssignedCharsForGroup[rowIndex] = savedAssigned;
                        }
                    }
                }
            });
            if (allAssignedCharsForGroup.toString() !== allAssignedChars[groupIndex].toString()) {
                const allAssignedCharsCopy = allAssignedChars.slice(0);
                allAssignedCharsCopy[groupIndex] = allAssignedCharsForGroup;
                setAllAssignedChars(allAssignedCharsCopy);
            }
        }
    }, [hasRemoved, allAssignedChars, assignmentGroup, groupIndex, raidRoster, savedAssignments, setAllAssignedChars]);

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            if (!over || !over.id.toString().includes(`assignment-group${groupIndex}-row`)) {
                return;
            }
            const newAssigned = allAssignedChars.slice(0);

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
                setAllAssignedChars(newAssigned);
                return;
            }

            const isFromRaidRoster = active.id.toString().includes('roster-row_draggable');

            //Dragged from main roster on the left side
            if (isFromRaidRoster) {
                const activeChar = activeData.character;
                //if character is already in the list
                newAssigned[groupIndex][overIndex] = activeChar;
                setAllAssignedChars(newAssigned);
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
            {allAssignedChars[groupIndex].map((assigned, rowIndex) => (
                <div key={`assignment-group-${groupIndex}-row-${rowIndex}`} className='flex divide-x-1 divide-slate-600 dark:divide-slate-700'>
                    <div className='flex min-w-10 max-w-10 justify-center items-center p-2 dark:bg-slate-800/25'>
                        <p>
                            {`${rowIndex + 1}`}
                        </p>
                    </div>
                    <div className='flex flex-grow w-full'>
                        <DroppableAssignmentSlot
                            id={`assignment-group${groupIndex}-row${rowIndex}`}
                            groupIndex={groupIndex}
                            rowIndex={rowIndex}
                            character={assigned}
                            removeHandler={handleRemove}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}