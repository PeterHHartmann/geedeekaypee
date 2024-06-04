'use client';

import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export function AddRaidForm({ children }: Props) {
    return (
        <form>
            <fieldset>
                <div className='w-full'>
                    <label className="mb-3 mt-5 block font-semibold" htmlFor='name'>Raid Name</label>
                    <div className="relative">
                        <input
                            className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                            type='text'
                            name='name'
                            placeholder='Enter the name of the character'
                            required
                        />
                    </div>
                </div>


            </fieldset>
        </form>
    );
}