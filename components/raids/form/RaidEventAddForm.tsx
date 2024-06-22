'use client';

import { FormErrors } from '@/components/form/form-error';
import { SubmitButton } from '@/components/form/submit-button';
import { RaidAssignments } from '@/components/raids/form/RaidAssignments';
import { RaidRoster } from '@/components/raids/form/RaidRoster';
import { fetchRosterPositionsForRaidTemplate, insertRaidEvent } from '@/lib/actions';
import type { RaidTemplate, RaidTemplateRosterPosition, RosterCharacter } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, MapPinIcon, MegaphoneIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, type ChangeEvent, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    children?: ReactNode;
    mainRoster: RosterCharacter[];
    raidTemplates: RaidTemplate[];
    defaultRaidTemplatePositions: RaidTemplateRosterPosition[];
};

export function RaidEventAddForm({ mainRoster, raidTemplates, defaultRaidTemplatePositions }: Props) {

    const [state, formAction] = useFormState(insertRaidEvent, { success: false });
    const router = useRouter();

    const [currentTemplate, setCurrentTemplate] = useState<RaidTemplate>(raidTemplates[0]);
    const createEmptyRoster = useCallback((): (RosterCharacter | null)[] => {
        return Array.from(Array(currentTemplate.size), () => null);
    }, [currentTemplate]);

    const [roster, setRoster] = useState<(RosterCharacter | null)[]>(createEmptyRoster());

    const { data: templatePositions } = useQuery({
        queryKey: [currentTemplate.id, 'raid_template_positions'],
        queryFn: async ({ queryKey: [templateId] }) => {
            const result = await fetchRosterPositionsForRaidTemplate(templateId);
            return result;
        },
        placeholderData: defaultRaidTemplatePositions
    });

    function getDefaultDate() {
        const currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 3);
        const date = currentTime.toISOString().substring(0, 10);
        return date;
    };

    function handleSelectedTemplate(event: ChangeEvent<HTMLSelectElement>) {
        const newTemplateId = event.target.value;
        const foundTemplate = raidTemplates.find((template) => template.id == newTemplateId);
        if (foundTemplate) {
            setCurrentTemplate(foundTemplate);
        }
    }

    useEffect(() => {
        if (mainRoster.length && templatePositions) {
            const roster_copy = mainRoster.slice(0);
            const newRoster = createEmptyRoster();

            //fill newRoster with characters that matches the requirements for each numeric position in the roster
            templatePositions.forEach((prio) => {
                const found = roster_copy.find((char) => (
                    prio.class_id == char.class_id
                    && prio.role_id == char.role_id
                    && prio.spec_id == char.spec_id
                ));
                if (!newRoster[prio.position - 1]) {
                    if (found) {
                        const index = roster_copy.indexOf(found);
                        roster_copy.splice(index, 1);
                        newRoster[prio.position - 1] = found;
                    }
                }
            });

            return setRoster(newRoster);
        }
    }, [currentTemplate, templatePositions, mainRoster, createEmptyRoster]);

    useEffect(() => {
        if (state?.success) {
            router.push('/dashboard');
        }
    }, [state, router]);

    return (
        <form className='w-full' action={formAction}>
            <div className='flex flex-wrap gap-3 pb-4 justify-between w-full'>
                <fieldset className='w-full p-4 rounded-md bg-slate-200/75 dark:bg-slate-700/50 shadow-md'>
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
                                defaultValue={'19:00'}
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
                            value={currentTemplate.id}
                            onChange={handleSelectedTemplate}
                        >
                            {raidTemplates.map((template) => (
                                <option
                                    key={`raid-option-${template.id}`}
                                    value={template.id}
                                >
                                    {`${template.name}`}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset className='w-full h-auto rounded-md bg-slate-200/75 dark:bg-slate-700/75 overflow-clip shadow-md'>
                    <header className='flex justify-center gap-1 p-3 shadow-md bg-slate-200/50 dark:bg-slate-800/75'>
                        <UserIcon className='w-5' />
                        <h2 className='text-lg text-center'>
                            Raid Roster
                        </h2>
                    </header>
                    <RaidRoster mainRoster={mainRoster} roster={roster} setRoster={setRoster} />
                </fieldset>
                <div className='flex gap-3 w-full pb-4'>
                    <fieldset className='w-1/4 rounded-md bg-slate-200/75 dark:bg-slate-700/75 overflow-clip shadow-md'>
                        <header className='flex gap-1 justify-center p-3 bg-slate-200 dark:bg-slate-800/50 shadow-md'>
                            <MegaphoneIcon className='w-5' />
                            <h2 className='text-lg text-center'>Assignments</h2>
                        </header>
                        <div className='py-2 max-h-[448px] md:max-h-[748px] overflow-y-auto overflow-x-clip'>
                            <RaidAssignments roster={roster} currentTemplate={currentTemplate} />
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