'use client';

import { CharacterRow } from '@/components/roster/CharacterRow';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import type { RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Props = {
    mainRoster: RosterCharacter[];
    roster: (RosterCharacter | null)[];
    currentTemplate: RaidTemplate;
};

export function Assignments({
    mainRoster,
    roster,
    currentTemplate
}: Props) {

    const [assignments, setAssignments] = useState<{ name: string, character: RosterCharacter | null; }[][]>();

    const { data: templateAssignments, status } = useQuery({
        queryKey: [`raid_template_assignments`, currentTemplate.id, roster],
        queryFn: async () => {
            const data = await fetchAssignmentsForRaidTemplate(currentTemplate.id);
            return data;
        },
    });

    useEffect(() => {

        if (templateAssignments && templateAssignments.length && roster) {

            const newAssignments = templateAssignments.reduce<{ name: string, character: RosterCharacter | null; }[][]>((acc, assignment) => {
                const groupIndex = assignment.assignment_group - 1;
                const positionIndex = assignment.position - 1;
                if (!acc[groupIndex]) {
                    acc[groupIndex] = [];
                }
                acc[groupIndex][positionIndex] = { name: `${assignment.name} #${assignment.position}`, character: null };
                return acc;
            }, []);

            const availableAssignments = templateAssignments.reduce<RaidTemplateAssignment[][][]>((acc, assignment) => {
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

            availableAssignments.forEach((group, groupIndex) => {
                let roster_copy = roster.slice(0);
                group.forEach((position, positionIndex) => {
                    position.forEach((priority) => {
                        if (newAssignments[groupIndex][positionIndex].character == null) {
                            const requirements = {
                                class_id: priority.class_id,
                                role_id: priority.role_id,
                                spec_id: priority.spec_id
                            };
                            const foundCharacterIndex = roster_copy.findIndex((char) => {
                                if (
                                    char &&
                                    (char.class_id == requirements.class_id || char.class_id == null) &&
                                    (char.role_id == requirements.role_id || char.class_id == null) &&
                                    (char.spec_id == requirements.spec_id || char.class_id == null)
                                ) {
                                    return true;
                                }
                                return false;
                            });
                            if (foundCharacterIndex >= 0) {
                                newAssignments[groupIndex][positionIndex].character = roster_copy[foundCharacterIndex];
                                roster_copy.splice(foundCharacterIndex, 1);
                            }
                        }
                    });
                });
            });
            setAssignments(newAssignments);
        }
    }, [roster, templateAssignments, currentTemplate]);

    return (
        <div className='w-min-4/12 rounded-md bg-slate-700 p-4'>
            <div className='grid grid-flow-row gap-4'>
                {assignments ?
                    <>{assignments.map((group, index) => (
                        <div
                            key={`assignment-group-${index}`}
                            className='grid grid-flow-row bg-slate-700 divide-y-1 divide-slate-600 rounded-md border-1 border-slate-600 shadow-md shadow-slate-800'
                        >
                            <>
                                {group.map((assignment, aIndex) => (
                                    <div key={`assignment-group-${index}-row-${aIndex}`} className='grid grid-flow-col grid-cols-2 divide-x-1 divide-slate-600'>
                                        <div className='flex items-center p-2'>
                                            <p className='text-nowrap'>
                                                {assignment.name}
                                            </p>
                                        </div>
                                        <div className='flex'>
                                            {assignment.character
                                                ? <CharacterRow character={assignment.character} />
                                                : <p>none</p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </>
                        </div>
                    ))}</>
                    : null}
                <h1>YO</h1>
                <h2>{status}</h2>
            </div>
        </div>
    );
}