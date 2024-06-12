'use client';

import { DroppableAssignmentSlot } from '@/components/raids/form/DroppableAssignmentSlot';
import type { RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useMemo } from 'react';

type Props = {
    groupIndex: number,
    assignmentGroup: RaidTemplateAssignment[][];
    roster: (RosterCharacter | null)[];
    mainRoster: RosterCharacter[];
};

export function AssignmentListGroup({ groupIndex, assignmentGroup, roster, mainRoster }: Props) {

    const assignedCharacters = useMemo(() => {
        const slots: { assignment: RaidTemplateAssignment | null, character: RosterCharacter | null; }[] = Array.from(Array(assignmentGroup.length), () => ({ assignment: null, character: null }));
        assignmentGroup.forEach((slot, slotIndex) => slot
            .forEach((assignment) => {
                slots[slotIndex].assignment = assignment;
                if (slots[slotIndex].character == null) {
                    const requirements = {
                        class_id: assignment.class_id,
                        role_id: assignment.role_id,
                        spec_id: assignment.spec_id
                    };
                    const foundCharacterIndex = roster.findIndex((char) => {
                        if (!char) {
                            return false;
                        }
                        const class_matches = !requirements.class_id || (char.class_id == requirements.class_id);
                        const role_matches = !requirements.role_id || (char.role_id == requirements.role_id);
                        const spec_matches = !requirements.spec_id || (char.spec_id == requirements.spec_id);
                        return class_matches && role_matches && spec_matches;
                    });
                    if (foundCharacterIndex >= 0) {
                        slots[slotIndex] = { assignment: assignment, character: roster[foundCharacterIndex] };
                        roster.splice(foundCharacterIndex, 1);
                    }
                }
            }));
        return slots;
    }, [assignmentGroup, roster]);

    const groupName = useMemo(() => assignmentGroup[0][0].name, [assignmentGroup]);

    return (
        <div
            className='grid grid-flow-row bg-slate-700 divide-y-1 divide-slate-600 rounded-md border-1 border-slate-600 shadow-md shadow-slate-800'
        >
            <header className='bg-slate-800/50 py-1'>
                <h3 className='text-lg text-semibold text-center text-white'>
                    {groupName}
                </h3>
            </header>
            {assignedCharacters.map((assigned, rowIndex) => (
                <div key={`assignment-group-${groupIndex}-row-${rowIndex}`} className='flex divide-x-1 divide-slate-600'>
                    <div className='flex w-9 justify-center items-center p-2 text-white bg-slate-800/25'>
                        <p>
                            {`${rowIndex + 1}`}
                        </p>
                    </div>
                    <div className='flex flex-grow'>
                        {assigned.assignment
                            ? <DroppableAssignmentSlot mainRoster={mainRoster} id={`${groupIndex}-${rowIndex}-assignment-row`} initial={assigned.character} groupIndex={groupIndex} rowIndex={rowIndex} />
                            : null
                        }
                    </div>
                </div>
            ))}

        </div>
    );
}