'use client';

import { Button } from '@/components/Button';
import { SelectInput } from '@/components/form/select-input';
import { SortableList } from '@/components/raids/form/SortableCharacterList';
import type { Raid, RaidTemplate, RosterCharacter } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    characters: RosterCharacter[];
    raid_templates: RaidTemplate[];
};

export function AddRaidForm({ children, characters, raid_templates, }: Props) {

    const [currentRaid, setCurrentRaid] = useState<RaidTemplate>(raid_templates[0]);
    const [currentGroup, setGroup] = useState<RosterCharacter[]>();

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
            setCurrentRaid(foundTemplate);
        }
    }

    useEffect(() => {


    }, [currentRaid]);

    return (
        <form className='w-full'>
            <div className='flex justify-between w-full'>
                <fieldset className='bg-indigo-300'>
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
                        value={currentRaid.id}
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
                <div>
                    <div className='mb-4'>
                        <SortableList size={2} uid='two-row' characters={characters} initial={[characters[0], characters[2]]} />
                    </div>
                    <div>
                        <SortableList size={5} uid='five-row' characters={characters} />
                    </div>
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
}