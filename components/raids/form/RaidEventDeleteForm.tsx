'use client';

import { CloseButton } from '@/components/Modal';
import { FormErrors } from '@/components/form/form-error';
import { SubmitButton } from '@/components/form/submit-button';
import { deleteRaidEvent } from '@/lib/actions';
import type { RaidEvent } from '@/lib/definitions';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    raidEvent: RaidEvent;
    children: ReactNode;
};

export function RaidEventDeleteForm({ children, raidEvent }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(deleteRaidEvent, { success: false });

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                {children}
            </button>
            {isOpen
                ? <div
                    className='flex w-full h-full absolute inset-0 items-center justify-center z-40 backdrop-blur-sm '
                >
                    <div
                        className='
                        bg-slate-50 
                        dark:bg-slate-800 
                        border-1 
                        border-slate-900 
                        dark:border-slate-700
                        w-full
                        h-full
                        rounded-xl px-2 md:px-8 
                        pt-2 
                        md:pt-4 
                        pb-8 
                        shadow-lg 
                        text-slate-950 
                        dark:text-white
                        '
                    >
                        <div className='flex gap-4 justify-between border-b-1 dark:border-slate-700 pb-2 md:h-[3.5rem] items-center mb-2'>
                            <h1 className='text-2xl font-medium'>
                                Delete Raid
                            </h1>
                            <CloseButton onClick={() => setIsOpen(false)} />
                        </div>

                        <div className='border-b-1 dark:border-slate-700 pb-2'>
                            <h2>Are you sure you want to delete {raidEvent.title}?</h2>
                        </div>

                        <div className='mt-4'>
                            <form action={formAction}>
                                <input type="hidden" name="event_id" value={raidEvent.id} />
                                <FormErrors result={state} />
                                <SubmitButton>
                                    <TrashIcon className='w-6' />
                                    <p className='text-lg'>Confirm</p>
                                </SubmitButton>
                            </form>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );

}