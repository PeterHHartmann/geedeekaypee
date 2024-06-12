'use client';

import { DroppableAssignmentSlot } from '@/components/raids/form/DroppableAssignmentSlot';
import type { RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useDndMonitor } from '@dnd-kit/core';
import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from 'react';

type Props = {
    groupIndex: number,
    assignmentGroup: RaidTemplateAssignment[][];
    roster: (RosterCharacter | null)[];
    hasEdited: boolean;
    setHasEdited: Dispatch<SetStateAction<boolean>>;
};

export function AssignmentListGroup({ groupIndex, assignmentGroup, roster, hasEdited, setHasEdited }: Props) {

    const groupName = useMemo(() => assignmentGroup[0][0].name, [assignmentGroup]);

    const [assignedList, setAssignedList] = useState<(RosterCharacter | null)[]>();

    useEffect(() => {
        if (!hasEdited) {
            const slots: (RosterCharacter | null)[] = Array.from(Array(assignmentGroup.length), () => null);
            const roster_copy = roster.slice(0);
            assignmentGroup.forEach((slot, slotIndex) => slot
                .forEach((assignment) => {
                    if (slots[slotIndex] == null) {
                        const requirements = {
                            class_id: assignment.class_id,
                            role_id: assignment.role_id,
                            spec_id: assignment.spec_id
                        };
                        const foundCharacterIndex = roster_copy.findIndex((char) => {
                            if (!char) {
                                return false;
                            }
                            const class_matches = !requirements.class_id || (char.class_id == requirements.class_id);
                            const role_matches = !requirements.role_id || (char.role_id == requirements.role_id);
                            const spec_matches = !requirements.spec_id || (char.spec_id == requirements.spec_id);
                            return class_matches && role_matches && spec_matches;
                        });
                        if (foundCharacterIndex >= 0) {
                            slots[slotIndex] = roster_copy[foundCharacterIndex];
                            roster_copy.splice(foundCharacterIndex, 1);
                        }
                    }
                }));
            setAssignedList(slots);
        }
    }, [hasEdited, roster, assignmentGroup]);

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            if (!over || !over.id.toString().includes(`assignment-group${groupIndex}`)) {
                return;
            }
            if (!assignedList) {
                return;
            }
            const newAssigned = assignedList.slice(0);

            const activeData = active.data.current;
            const overData = over.data.current;
            if (!activeData || !overData) {
                return;
            }

            const overIndex: number = overData.index;
            const isFromOwnGroup = active.id.toString().includes(`assignment-group${groupIndex}`);

            //Dragged from the roster in the form
            if (isFromOwnGroup) {
                const activeIndex: number = activeData.index;
                const oldChar = newAssigned[overIndex];
                const newChar = newAssigned[activeIndex];
                newAssigned[overIndex] = newChar;
                newAssigned[activeIndex] = oldChar;
                setAssignedList(newAssigned);
                return;
            }

            const isFromRaidRoster = active.id.toString().includes('roster-row-draggable');

            //Dragged from main roster on the left side
            if (isFromRaidRoster) {
                const activeChar = activeData.character;
                //if character is already in the list
                newAssigned[overIndex] = activeChar;
                setAssignedList(newAssigned);
                setHasEdited(true);
                return;
            }
        },
    });

    return (
        <div
            className='grid grid-flow-row bg-slate-700 divide-y-1 divide-slate-600 rounded-md border-1 border-slate-600 shadow-md shadow-slate-800'
        >
            <header className='bg-slate-800/50 py-1'>
                <h3 className='text-lg text-semibold text-center text-white'>
                    {groupName}
                </h3>
            </header>
            {assignedList && assignedList.map((assigned, rowIndex) => (
                <div key={`assignment-group-${groupIndex}-row-${rowIndex}`} className='flex divide-x-1 divide-slate-600'>
                    <div className='flex w-9 justify-center items-center p-2 text-white bg-slate-800/25'>
                        <p>
                            {`${rowIndex + 1}`}
                        </p>
                    </div>
                    <div className='flex flex-grow'>
                        <DroppableAssignmentSlot id={`assignment-group${groupIndex}-row${rowIndex}`} character={assigned} groupIndex={groupIndex} rowIndex={rowIndex} />
                    </div>
                </div>
            ))}
        </div>
    );
}