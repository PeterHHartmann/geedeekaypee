'use client';

import { FormErrors } from '@/components/form/FormErrors';
import { InputField } from '@/components/form/InputField';
import { SelectField } from '@/components/form/SelectField';
import { SubmitButton } from '@/components/form/submit-button';
import { RaidAssignments } from '@/components/raids/form/RaidAssignments';
import { RaidRoster } from '@/components/raids/form/RaidRoster';
import { updateRaidEvent } from '@/lib/actions';
import type { RaidEvent, RaidEventAssignment, RaidEventRosterPosition, RaidTemplate, RosterCharacter } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
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

    const initialDate = useMemo(() => {
        const formatted = new Date(raidEvent.date).toISOString().substring(0, 10);
        return formatted;
    }, [raidEvent]);

    const initialTime = useMemo(() => {
        const formatted = raidEvent.time.substring(0, 5);
        return formatted;
    }, [raidEvent]);

    const createEmptyRoster = useCallback((): (RosterCharacter | null)[] => {
        return Array.from(Array(raidTemplate.size), () => null);
    }, [raidTemplate]);

    const [roster, setRoster] = useState<(RosterCharacter | null)[]>(createEmptyRoster());

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
                <fieldset className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-4  w-full p-4 rounded-md bg-slate-200/75 dark:bg-slate-700/50 shadow-md'>
                    <InputField
                        id='title'
                        placeholder='Enter the title of the event'
                        type='text'
                        defaultValue={raidEvent.title}
                        required
                        label={
                            <>
                                <TagIcon className='w-5' />
                                <p>Title</p>
                            </>
                        }
                    />
                    <SelectField
                        id='raid_template_id'
                        defaultValue={raidTemplate.id}
                        label={
                            <>
                                <MapPinIcon className='w-5' />
                                <p>Raid Template</p>
                            </>
                        }
                    >
                        <option
                            value={raidTemplate.id}
                        >
                            {raidTemplate.name}
                        </option>
                    </SelectField>
                    <SelectField
                        id='visibility'
                        defaultValue={raidEvent.is_public ? 'public' : ''}
                        label={
                            <>
                                <EyeIcon className='w-5' />
                                <p>Visibility</p>
                            </>
                        }
                    >
                        <option value={''}>Draft</option>
                        <option value={'public'}>Public</option>
                    </SelectField>
                    <InputField
                        id='date'
                        type='date'
                        defaultValue={initialDate}
                        required
                        label={
                            <>
                                <CalendarIcon className='w-5' />
                                <p>Date</p>
                            </>
                        }
                    />
                    <InputField
                        id='time'
                        type='time'
                        defaultValue={initialTime}
                        required
                        label={
                            <>
                                <ClockIcon className='w-5' />
                                <p>Time</p>
                            </>
                        }
                    />
                </fieldset>
                <RaidRoster mainRoster={mainRoster} roster={roster} setRoster={setRoster} />
                <RaidAssignments raidRoster={roster} currentTemplate={raidTemplate} savedAssignments={eventAssignments} />
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