import { RaidAssignmentGroup } from '@/components/raids/form/RaidAssignmentGroup';
import type { RaidEventAssignment, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { type Dispatch, type SetStateAction } from 'react';

type Props = {
    raidRoster: (RosterCharacter | null)[];
    savedAssignments?: RaidEventAssignment[];
    allAssignedChars: (RosterCharacter | null)[][];
    setAllAssignedChars: Dispatch<SetStateAction<(RosterCharacter | null)[][] | undefined>>;
    assignmentRequirementGroups: RaidTemplateAssignment[][][];
};

export function MainAssignments({
    raidRoster,
    savedAssignments,
    allAssignedChars,
    setAllAssignedChars,
    assignmentRequirementGroups
}: Props) {

    return (
        <div className='grid grid-flow-row gap-3'>
            {allAssignedChars.map((assignedCharGroup, groupIndex) => (
                <RaidAssignmentGroup
                    key={`assignment-group-${groupIndex}`}
                    groupIndex={groupIndex}
                    assignmentGroup={assignmentRequirementGroups[groupIndex]}
                    raidRoster={raidRoster}
                    savedAssignments={savedAssignments}
                    allAssignedChars={allAssignedChars}
                    setAllAssignedChars={setAllAssignedChars}
                />
            ))}
        </div>
    );
}