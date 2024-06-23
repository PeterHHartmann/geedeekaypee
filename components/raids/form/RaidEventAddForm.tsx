'use client';

import { FormErrors } from '@/components/form/FormErrors';
import { InputField } from '@/components/form/InputField';
import { SelectField } from '@/components/form/SelectField';
import { SubmitButton } from '@/components/form/submit-button';
import { RaidAssignments } from '@/components/raids/form/RaidAssignments';
import { RaidRoster } from '@/components/raids/form/RaidRoster';
import { fetchAssignmentsForRaidTemplate, fetchRosterPositionsForRaidTemplate, insertRaidEvent } from '@/lib/actions';
import type { RaidTemplate, RaidTemplateAssignment, RaidTemplateRosterPosition, RosterCharacter } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline';
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

    const [raidRoster, setRaidRoster] = useState<(RosterCharacter | null)[]>(createEmptyRoster());

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
        if (mainRoster && mainRoster.length && templatePositions) {
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

            return setRaidRoster(newRoster);
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
                <fieldset className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-4  w-full p-4 rounded-md bg-slate-200/75 dark:bg-slate-700/50 shadow-md'>
                    <InputField
                        id='title'
                        placeholder='Enter the title of the event'
                        type='text'
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
                        onChange={handleSelectedTemplate}
                        label={
                            <>
                                <MapPinIcon className='w-5' />
                                <p>Raid Template</p>
                            </>
                        }
                    >
                        {raidTemplates.map((template) => (
                            <option
                                key={`raid-option-${template.id}`}
                                value={template.id}
                            >
                                {`${template.name}`}
                            </option>
                        ))}
                    </SelectField>
                    <SelectField
                        id='visibility'
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
                        defaultValue={getDefaultDate()}
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
                        defaultValue={'19:00'}
                        required
                        label={
                            <>
                                <ClockIcon className='w-5' />
                                <p>Time</p>
                            </>
                        }
                    />
                </fieldset>
                <RaidRoster mainRoster={mainRoster} roster={raidRoster} setRoster={setRaidRoster} />
                <RaidAssignments raidRoster={raidRoster} currentTemplate={currentTemplate} />
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