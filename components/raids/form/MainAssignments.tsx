import { RaidAssignmentGroup } from '@/components/raids/form/RaidAssignmentGroup';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import type { RaidEventAssignment, RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, type Dispatch, type SetStateAction } from 'react';

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