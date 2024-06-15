'use client';

import { FormErrors } from '@/components/form/form-error';
import { SubmitButton } from '@/components/form/submit-button';
import { AssignmentList } from '@/components/raids/form/AssignmentList';
import { SortableRosterList } from '@/components/raids/form/SortableRosterList';
import { updateRaidEvent } from '@/lib/actions';
import type { RaidEvent, RaidEventAssignment, RaidEventRosterPosition, RaidTemplate, RosterCharacter } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, MapPinIcon, MegaphoneIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    children?: ReactNode;
    raidEvent: RaidEvent;
    mainRoster: RosterCharacter[];
    raidTemplate: RaidTemplate;
    eventRoster: RaidEventRosterPosition[];
    eventAssignments: RaidEventAssignment[];
};

export function RaidEventEditForm({ children, raidEvent, mainRoster, raidTemplate, eventRoster, eventAssignments }: Props) {

    const [state, formAction] = useFormState(updateRaidEvent, { success: false });
    const router = useRouter();

    const createEmptyRoster = useCallback((): (RosterCharacter | null)[] => {
        return Array.from(Array(raidTemplate.size), () => null);
    }, [raidTemplate]);

    const [roster, setRoster] = useState<(RosterCharacter | null)[]>(createEmptyRoster());

    function getDefaultDate() {
        const currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 3);
        const date = currentTime.toISOString().substring(0, 10);
        return date;
    };

    useEffect(() => {
        if (eventRoster.length) {
            const newRoster = createEmptyRoster();
            eventRoster.forEach((rosterPos) => {
                const found = mainRoster.find((character) => character.id == rosterPos.main_roster_id);
                if (found) {
                    newRoster[rosterPos.position] = found;
                }
            });
            setRoster(newRoster);
        }
    }, [eventRoster, createEmptyRoster, mainRoster]);

    useEffect(() => {
        if (state?.success) {
            router.push('/dashboard');
        }
    }, [state, router]);

    return (
        <form className='w-full' action={formAction}>
            <input type='hidden' name='raid_event_id' value={raidEvent.id} />
            <div className='flex flex-wrap gap-4 pb-4 justify-between w-full'>
                <fieldset className='w-full p-4 rounded-md dark:bg-slate-700'>
                    <div className='w-full'>
                        <label className="flex gap-1 mb-1 font-semibold" htmlFor='title'>
                            <TagIcon className='w-5' />
                            <p>Title</p>
                        </label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-950 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='text'
                                name='title'
                                defaultValue={raidEvent.title}
                                placeholder='Enter the title of the event'
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className="flex gap-1 mb-1 mt-2 font-semibold" htmlFor='date'>
                            <CalendarIcon className='w-5' />
                            <p>Date</p>
                        </label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-950 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='date'
                                name='date'
                                defaultValue={getDefaultDate()}
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className="flex gap-1 mb-1 mt-2 font-semibold" htmlFor='time'>
                            <ClockIcon className='w-5' />
                            <p>Time</p>
                        </label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-950 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='time'
                                name='time'
                                defaultValue={'00:00:00'}
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className="flex gap-1 mb-1 mt-2 font-semibold" htmlFor='visibility'>
                            <EyeIcon className='w-5' />
                            <p>Visibility</p>
                        </label>
                        <select
                            name={'visibility'}
                            className='w-full rounded-md border-1 border-slate-950 dark:border-slate-600 py-[9px] px-5 text-sm outline-2 placeholder:text-slate-500'
                            defaultValue={raidEvent.is_public ? 'public' : ''}
                        >
                            <option value={''}>Draft</option>
                            <option value={'public'}>Public</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="flex gap-1 mb-1 mt-2 font-semibold" htmlFor={'raid_template_id'}>
                            <MapPinIcon className='w-5' />
                            <p>Raid Template</p>
                        </label>
                        <select
                            name={'raid_template_id'}
                            className='w-full rounded-md border-1 border-slate-950 dark:border-slate-600 py-[9px] px-5 text-sm outline-2 placeholder:text-slate-500'
                            defaultValue={raidTemplate.id}
                        >
                            <option
                                value={raidTemplate.id}
                            >
                                {raidTemplate.name}
                            </option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className='w-full h-auto rounded-md bg-slate-200/75 dark:bg-slate-700/50 overflow-clip shadow-md'>
                    <header className='flex justify-center gap-1 p-3 shadow-md bg-slate-200/50 dark:bg-slate-600/50'>
                        <UserIcon className='w-5' />
                        <h2 className='text-lg text-center'>
                            Raid Roster
                        </h2>
                    </header>
                    <div className='p-3'>
                        <SortableRosterList mainRoster={mainRoster} roster={roster} setRoster={setRoster} />
                    </div>
                </fieldset>
                <div className='flex gap-4 w-full pb-4'>
                    <fieldset className='w-1/4 rounded-md bg-slate-200/75 dark:bg-slate-700/50 overflow-clip shadow-md'>
                        <header className='flex gap-1 justify-center p-3 bg-slate-200 dark:bg-slate-600/50 shadow-md'>
                            <MegaphoneIcon className='w-5' />
                            <h2 className='text-lg text-center'>Assignments</h2>
                        </header>
                        <div className='py-2 pl-2 pr-1 max-h-[448px] md:max-h-[748px] overflow-y-auto overflow-x-clip'>
                            <AssignmentList roster={roster} currentTemplate={raidTemplate} savedAssignment={eventAssignments} />
                        </div>
                    </fieldset>
                    <fieldset className='w-full h-[800px] bg-slate-700/50 rounded-md shadow-md'>

                    </fieldset>
                </div>
            </div>
            <FormErrors result={state} />
            <div className='flex justify-center gap-2'>
                <SubmitButton className='w-6/12'>
                    <EyeIcon className='w-6' />
                    <p>Save</p>
                </SubmitButton>
            </div>
        </form>
    );
};