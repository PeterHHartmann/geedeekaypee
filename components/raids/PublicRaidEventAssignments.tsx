'use server';

import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { fetchAssignmentsForRaidTemplate, fetchRaidEventAssignments } from '@/lib/actions';
import type { RaidEvent, RaidTemplate, RosterCharacter } from '@/lib/definitions';
import { MegaphoneIcon } from '@heroicons/react/24/outline';

type Props = {
    raidEvent: RaidEvent,
    raidTemplate: RaidTemplate;
    raidRoster: (RosterCharacter | null)[];
};

export async function PublicRaidEventAssignments({
    raidEvent,
    raidTemplate,
    raidRoster,
}: Props) {
    const raidTemplateAssignments = await fetchAssignmentsForRaidTemplate(raidTemplate.id);
    const raidEventAssignments = await fetchRaidEventAssignments(raidEvent.id);

    const raidAssignements = raidTemplateAssignments.reduce<{ [key: string]: (RosterCharacter | null)[]; }>((acc, assignment) => {
        const groupName = assignment.name;
        const groupIndex = assignment.assignment_group - 1;
        const positionIndex = assignment.position - 1;
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        if (!acc[groupName][positionIndex]) {
            const assignedCharForPosition = raidEventAssignments.find((assignedChar) =>
                assignedChar.assignment_group == groupIndex
                && assignedChar.position == positionIndex
            );
            if (assignedCharForPosition) {
                const raidRosterChar = raidRoster.find((raidRosterChar) => raidRosterChar && raidRosterChar.id == assignedCharForPosition.raid_roster_id);
                if (raidRosterChar) {
                    acc[groupName][positionIndex] = raidRosterChar;
                }
            } else {
                acc[groupName][positionIndex] = null;
            }
        }
        return acc;
    }, {});

    return (
        <section className='w-4/12 rounded-md bg-slate-200/50 dark:bg-slate-700/75 overflow-clip shadow-md'>
            <header className='flex gap-1 justify-center p-3 bg-slate-200/75 dark:bg-slate-700/75 shadow-md'>
                <MegaphoneIcon className='w-5' />
                <h2 className='text-lg text-center'>Assignments</h2>
            </header>
            <div className='grid grid-flow-row gap-2 py-2 max-h-[800px] overflow-y-auto rounded-md overflow-clip divide-slate-600 shadow-md'>
                {Object.entries(raidAssignements).map(([groupName, groupCharacters]) => (
                    <ul
                        key={`raidAssignmentGroup-${groupName}`}
                        className='grid grid-flow-row overflow-y-auto h-min list-none bg-slate-200 dark:bg-slate-800/50 divide-y-1 divide-slate-600 dark:divide-slate-700 rounded-md shadow-md shadow-slate-400 dark:shadow-slate-800 overflow-clip'
                    >
                        <header className='bg-slate-300/50 dark:bg-slate-800/50 py-1'>
                            <h3 className='text-lg text-semibold text-center'>
                                {groupName}
                            </h3>
                        </header>
                        {groupCharacters.map((character, rowIndex) => (
                            <li
                                key={`assignmentGroup-${groupName}-assignmentRow-${rowIndex}`}
                                className='flex list-none divide-x-1 divide-slate-600 dark:divide-slate-700'
                            >
                                <div className='flex min-w-10 max-w-10 justify-center items-center p-2 dark:bg-slate-800/25'>
                                    <p>
                                        {`${rowIndex + 1}`}
                                    </p>
                                </div>
                                <div className='flex w-full h-[40px] overflow-clip justify-center items-center'>
                                    {character
                                        ? <CharacterInfo character={character} />
                                        : null
                                    }
                                </div>

                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
};