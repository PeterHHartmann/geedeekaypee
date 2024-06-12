'use client';

import { SubmitButton } from '@/components/form/submit-button';
import { SortableRosterList } from '@/components/raids/form/SortableRosterList';
import type { RaidEvent, RaidEventRosterPosition, RaidTemplate, RosterCharacter } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, MapPinIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState, type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    raidEvent: RaidEvent;
    mainRoster: RosterCharacter[];
    raidTemplate: RaidTemplate;
    eventRoster: RaidEventRosterPosition[];
};

export function RaidEventEditForm({ children, raidEvent, mainRoster, raidTemplate, eventRoster }: Props) {

    // const [state, formAction] = useFormState(updateRaidEvent, { success: false });

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
            console.log('we got here');

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

    return (
        <form className='w-full'>
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
                                defaultValue={raidTemplate.id}
                            >
                                {raidTemplate.name}
                            </option>
                        </select>
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
                </fieldset>
                <div className='w-full h-auto rounded-md dark:bg-slate-700 p-4'>
                    <header className='flex justify-center gap-1 mb-4'>
                        <UserIcon className='w-5' />
                        <h2 className='font-semibold text-lg text-center'>
                            Raid Roster
                        </h2>
                    </header>
                    <div>
                        <SortableRosterList mainRoster={mainRoster} roster={roster} setRoster={setRoster} />
                    </div>
                </div>
            </div>
            {/* <FormErrors result={state} /> */}
            <div className='flex justify-center gap-2'>
                <SubmitButton className='w-6/12'>
                    <EyeIcon className='w-6' />
                    <p>Save</p>
                </SubmitButton>
            </div>
        </form>
    );
};