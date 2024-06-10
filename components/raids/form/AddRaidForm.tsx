'use client';

import { Button } from '@/components/Button';
import { FormErrors } from '@/components/form/form-error';
import { SelectInput } from '@/components/form/select-input';
import { SortableRosterList } from '@/components/raids/form/SortableRosterList';
import { insertRaidEvent } from '@/lib/actions';
import type { RaidTemplate, RaidTemplatePositions, RosterCharacter } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef, useState, type ChangeEvent, type MouseEvent, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    children?: ReactNode;
    mainRoster: RosterCharacter[];
    raidTemplates: RaidTemplate[];
    templatePositions: RaidTemplatePositions;
};

export function AddRaidForm({ children, mainRoster, raidTemplates, templatePositions }: Props) {

    const [state, formAction] = useFormState(insertRaidEvent, { success: false });

    const [currentTemplate, setCurrentTemplate] = useState<RaidTemplate>(raidTemplates[0]);
    const createEmptyRoster = useCallback((): (RosterCharacter | null)[] => {
        return Array.from(Array(currentTemplate.size), () => null);
    }, [currentTemplate]);

    const [roster, setRoster] = useState<(RosterCharacter | null)[]>(createEmptyRoster());

    function getDefaultDate() {
        const currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 3);
        const date = currentTime.toISOString().substring(0, 10);
        return date;
    };

    function handleSelectRaid(event: ChangeEvent<HTMLSelectElement>) {
        const newTemplateId = event.target.value;
        const foundTemplate = raidTemplates.find((template) => template.id == newTemplateId);
        if (foundTemplate) {
            setCurrentTemplate(foundTemplate);
        }
    }

    // function handleSaveDraftClicked(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    //     setIsDraft(1);
    // }

    useEffect(() => {
        if (mainRoster.length) {
            const roster_copy = mainRoster.slice(0);
            const newRoster = createEmptyRoster();
            //fill newRoster with characters that matches the requirements for each numeric position in the roster
            templatePositions[currentTemplate.id].forEach((prio) => {
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

            //fill newRoster with remaining characters if not full
            const containsNull = newRoster.includes(null);
            if (containsNull) {
                newRoster.forEach((item, index) => {
                    if (!item) {
                        newRoster[index] = roster_copy.splice(0, 1)[0];
                        return;
                    }
                });
            }
            return setRoster(newRoster);
        }
    }, [currentTemplate, templatePositions, mainRoster, createEmptyRoster]);

    return (
        <form className='w-full' action={formAction}>
            <div className='flex flex-wrap gap-4 pb-4 justify-between w-full'>
                <fieldset className='bg-indigo-300 w-full'>
                    <div className='w-full'>
                        <label className="my-3 block font-semibold" htmlFor='title'>Title</label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='text'
                                name='title'
                                placeholder='Enter the title of the event'
                                defaultValue={'Test Title'}
                                required
                            />
                        </div>
                    </div>
                    <SelectInput
                        name='raid_template_id'
                        label='Raid Template'
                        value={currentTemplate.id}
                        onChange={handleSelectRaid}
                    >
                        {raidTemplates.map((template) => (
                            <option
                                key={`raid-option-${template.id}`}
                                value={template.id}
                            >
                                {`${template.name}`}
                            </option>
                        ))}
                    </SelectInput>
                    <div className='w-full'>
                        <label className="my-3 block font-semibold" htmlFor='date'>Date</label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='date'
                                name='date'
                                defaultValue={getDefaultDate()}
                                placeholder='Enter the title of the event'
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className="my-3 block font-semibold" htmlFor='time'>Time</label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='time'
                                name='time'
                                defaultValue={'00:00:00'}
                                placeholder='Enter the title of the event'
                                required
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full'>
                        <label className="my-3 block font-semibold" htmlFor='is_public'>This event is public</label>
                        <div className="relative">
                            <input
                                type='checkbox'
                                name='is_public'
                            />
                        </div>
                    </div>
                </fieldset>
                <div className='w-full'>
                    <input type='hidden' name='roster_length' value={roster.length} />
                    <SortableRosterList mainRoster={mainRoster} roster={roster} setRoster={setRoster} />
                </div>
            </div>
            <FormErrors result={state} />
            <div className='flex justify-center gap-2'>
                <Button className='w-6/12'>
                    <EyeIcon className='w-6' />
                    <p>Save</p>
                </Button>
            </div>
        </form>
    );
};