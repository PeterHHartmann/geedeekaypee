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
        <div className='flex flex-col flex-wrap max-h-[700px] gap-3 px-2 overflow-x-auto'>
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