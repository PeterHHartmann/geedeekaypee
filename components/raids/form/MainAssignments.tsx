import { RaidAssignmentGroup } from '@/components/raids/form/RaidAssignmentGroup';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import type { RaidEventAssignment, RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';
import { useEffect, type Dispatch, type SetStateAction } from 'react';

type Props = {
    raidRoster: (RosterCharacter | null)[];
    currentTemplateId: RaidTemplate['id'];
    savedAssignments?: RaidEventAssignment[];
    allAssignedChars: (RosterCharacter | null)[][] | undefined;
    setAllAssignedChars: Dispatch<SetStateAction<(RosterCharacter | null)[][] | undefined>>;
};

export function MainAssignments({
    raidRoster,
    currentTemplateId,
    savedAssignments,
    allAssignedChars,
    setAllAssignedChars,
}: Props) {

    const { data: assignmentRequirementGroups, isLoading } = useQuery({
        queryKey: [currentTemplateId, `raid_template_assignments`],
        queryFn: async ({ queryKey: [templateId] }) => {
            const templateAssignments = await fetchAssignmentsForRaidTemplate(templateId);
            if (templateAssignments.length) {
                const dividedIntoGroups = templateAssignments.reduce<RaidTemplateAssignment[][][]>((acc, assignment) => {
                    const groupIndex = assignment.assignment_group - 1;
                    const positionIndex = assignment.position - 1;
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    if (!acc[groupIndex][positionIndex]) {
                        acc[groupIndex][positionIndex] = [assignment];
                    } else {
                        acc[groupIndex][positionIndex].push(assignment);
                    }
                    return acc;
                }, []);
                return dividedIntoGroups;
            }
        },
    });

    useEffect(() => {
        if (!allAssignedChars && assignmentRequirementGroups) {
            const assignedChars: (RosterCharacter | null)[][] = assignmentRequirementGroups.map((group) => {
                const positions = group.map(() => null);
                return positions;
            });
            if (savedAssignments) {
                savedAssignments.forEach((assignment) => {
                    const foundRaidRosterChar = raidRoster.find((char) => char && char.id == assignment.raid_roster_id);
                    if (foundRaidRosterChar) {
                        assignedChars[assignment.assignment_group][assignment.position] = foundRaidRosterChar;
                    }
                });
            }
            console.log(assignedChars);

            setAllAssignedChars(assignedChars);
        }
    }, [assignmentRequirementGroups, allAssignedChars, setAllAssignedChars, savedAssignments, raidRoster]);

    if (isLoading) {
        return (
            <div className={`h-[780px] w-auto ${SHIMMER}`}></div>
        );
    }

    if (!assignmentRequirementGroups || !allAssignedChars) {
        return null;
    }

    return (
        <div className='grid grid-flow-row gap-3'>
            {allAssignedChars.map((assignedCharGroup, groupIndex) => (
                <RaidAssignmentGroup
                    key={`assignment-group-${groupIndex}`}
                    groupIndex={groupIndex}
                    assignmentGroup={assignmentRequirementGroups[groupIndex]}
                    raidRoster={raidRoster}
                    savedAssignments={savedAssignments}
                    assignedChars={allAssignedChars}
                    setAssignedChars={setAllAssignedChars}
                />
            ))}
        </div>
    );
}