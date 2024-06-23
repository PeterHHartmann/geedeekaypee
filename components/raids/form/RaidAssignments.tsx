'use client';

import { MainAssignments } from '@/components/raids/form/MainAssignments';
import { RaidAssignmentGroup } from '@/components/raids/form/RaidAssignmentGroup';
import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import type { RaidEventAssignment, RaidTemplate, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Props = {
    raidRoster: (RosterCharacter | null)[];
    currentTemplate: RaidTemplate;
    savedAssignments?: RaidEventAssignment[];
};

export function RaidAssignments({
    raidRoster,
    currentTemplate,
    savedAssignments
}: Props) {

    const [allAssignedChars, setAllAssignedChars] = useState<(RosterCharacter | null)[][]>();

    return (
        <div className='flex gap-3 w-full pb-4'>
            <fieldset className='w-1/4 rounded-md bg-slate-200/75 dark:bg-slate-700/75 overflow-clip shadow-md'>
                <header className='flex gap-1 justify-center p-3 bg-slate-200 dark:bg-slate-800/50 shadow-md'>
                    <MegaphoneIcon className='w-5' />
                    <h2 className='text-lg text-center'>Assignments</h2>
                </header>
                <div className='py-2 max-h-[448px] md:max-h-[748px] overflow-y-auto overflow-x-clip'>
                    <MainAssignments raidRoster={raidRoster} currentTemplateId={currentTemplate.id} allAssignedChars={allAssignedChars} setAllAssignedChars={setAllAssignedChars} savedAssignments={savedAssignments} />
                </div>
            </fieldset>
            <fieldset className='w-full h-[800px] bg-slate-700/50 rounded-md shadow-md'>

            </fieldset>
        </div>
    );
}
