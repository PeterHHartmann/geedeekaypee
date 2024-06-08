'use client';

import { Button } from '@/components/Button';
import { SelectInput } from '@/components/form/select-input';
import { SortableRosterList } from '@/components/raids/form/SortableRosterList';
import type { Raid, RaidTemplate, RaidTemplatePositions, RosterCharacter } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    main_roster: RosterCharacter[];
    raid_templates: RaidTemplate[];
    template_positions: RaidTemplatePositions;
};

export function AddRaidForm({ children, main_roster, raid_templates, template_positions }: Props) {

    const [currentTemplate, setCurrentTemplate] = useState<RaidTemplate>(raid_templates[0]);
    const [roster, setRoster] = useState<RosterCharacter[]>();

    function getDefaultDate() {
        const currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 3);
        const date = currentTime.toISOString().substring(0, 10);
        return date;
    };

    function handleSelectRaid(e: ChangeEvent<HTMLSelectElement>) {
        const newTemplateId = e.target.value;
        const foundTemplate = raid_templates.find((template) => template.id == newTemplateId);
        if (foundTemplate) {
            setCurrentTemplate(foundTemplate);
        }
    }

    useEffect(() => {
        const roster_copy = main_roster.slice();
        const newRoster: RosterCharacter[] = [];
        template_positions[currentTemplate.id].forEach((prio) => {
            const found = roster_copy.find((char) => (
                prio.class_id == char.class_id
                && prio.role_id == char.role_id
                && prio.spec_id == char.spec_id
            ));
            if (!newRoster[prio.position - 1]) {
                if (found) {
                    const index = roster_copy.indexOf(found);
                    roster_copy.splice(index, 1);
                    newRoster.push(found);
                }
            }
        });

        // console.log('roster copy length end:', roster_copy.length);
        // console.log('new roster', newRoster);
        setRoster(newRoster);
    }, [currentTemplate, template_positions, main_roster]);

    return (
        <form className='w-full'>
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
                                required
                            />
                        </div>
                    </div>
                    <SelectInput
                        name='raid'
                        label='Raid'
                        value={currentTemplate.id}
                        onChange={handleSelectRaid}
                    >
                        {raid_templates.map((template) => (
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
                </fieldset>
                <div className='w-full' suppressHydrationWarning>
                    <SortableRosterList size={currentTemplate.size} allCharacters={main_roster} initial={roster} />
                </div>
            </div>
            <div className='flex justify-between gap-2'>
                <Button className='w-6/12'>
                    <EyeSlashIcon className='w-6' />
                    <p>Save as draft</p>
                </Button>
                <Button className='w-6/12'>
                    <EyeIcon className='w-6' />
                    <p>Publish</p>
                </Button>
            </div>
        </form>
    );
};