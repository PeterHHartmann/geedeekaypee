'use client';

import { Button } from '@/components/Button';
import { SelectInput } from '@/components/form/select-input';
import { SortableList } from '@/components/raids/form/SortableCharacterList';
import type { RosterCharacter } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    characters: RosterCharacter[];
};

export function AddRaidForm({ children, characters }: Props) {

    function getDefaultDate() {
        const currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 3);
        const date = currentTime.toISOString().substring(0, 10);
        return date;
    };

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
                    <SelectInput name='raid' label='Raid'>
                        <option>ICC</option>
                        <option>RS</option>
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