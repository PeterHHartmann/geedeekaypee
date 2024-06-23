'use client';

import { RaidAssignmentGroup } from '@/components/raids/form/RaidAssignmentGroup';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import type { RaidEventAssignment, RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';

type Props = {
    roster: (RosterCharacter | null)[];
    currentTemplate: RaidTemplate;
    savedAssignment?: RaidEventAssignment[];
};

export function RaidAssignments({
    roster,
    currentTemplate,
    savedAssignment
}: Props) {

    const { data: assignmentGroups, isLoading } = useQuery({
        queryKey: [currentTemplate.id, `raid_template_assignments`],
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

    if (isLoading) {
        return (
            <div className={`h-[780px] w-auto ${SHIMMER}`}></div>
        );
    }

    if (!assignmentGroups) {
        return null;
    }

    return (
        <div className='flex gap-3 w-full pb-4'>
            <fieldset className='w-1/4 rounded-md bg-slate-200/75 dark:bg-slate-700/75 overflow-clip shadow-md'>
                <header className='flex gap-1 justify-center p-3 bg-slate-200 dark:bg-slate-800/50 shadow-md'>
                    <MegaphoneIcon className='w-5' />
                    <h2 className='text-lg text-center'>Assignments</h2>
                </header>
                <div className='py-2 max-h-[448px] md:max-h-[748px] overflow-y-auto overflow-x-clip'>
                    <div className='grid grid-flow-row gap-3'>
                        {assignmentGroups.map((assignmentGroup, groupIndex) => (
                            <RaidAssignmentGroup key={`assignment-group-${groupIndex}`} groupIndex={groupIndex} assignmentGroup={assignmentGroup} roster={roster} savedAssignments={savedAssignment} />
                        ))}
                    </div>
                </div>
            </fieldset>
            <fieldset className='w-full h-[800px] bg-slate-700/50 rounded-md shadow-md'>

            </fieldset>
        </div>
    );
}
