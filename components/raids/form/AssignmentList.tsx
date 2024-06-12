'use client';

import { AssignmentListGroup } from '@/components/raids/form/AssignmentListGroup';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import type { RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';

type Props = {
    mainRoster: RosterCharacter[];
    roster: (RosterCharacter | null)[];
    currentTemplate: RaidTemplate;
};

export function AssignmentList({
    mainRoster,
    roster,
    currentTemplate
}: Props) {

    const { data: assignmentGroups, isLoading } = useQuery({
        queryKey: [currentTemplate.id, roster, `raid_template_assignments`],
        queryFn: async ({}) => {
            const templateAssignments = await fetchAssignmentsForRaidTemplate(currentTemplate.id);
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

    if (isLoading) {
        return (
            <div className={`h-[780px] w-[780px] ${SHIMMER}`}></div>
        );
    }

    if (!assignmentGroups) {
        return null;
    }

    return (
        <div className='grid grid-flow-row gap-3'>
            {assignmentGroups.map((assignmentGroup, groupIndex) => (
                <AssignmentListGroup key={`assignment-group-${groupIndex}`} groupIndex={groupIndex} assignmentGroup={assignmentGroup} roster={roster.slice(0)} mainRoster={mainRoster} />
            ))}
        </div>
    );
}
