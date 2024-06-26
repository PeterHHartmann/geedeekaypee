'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export function ResizeWrapper({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const ToggleButton = ({ ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button
            {...rest}
            className=
            'flex rounded-full w-7 h-7 aspect-square justify-center items-center bg-indigo-600 text-slate-50 border-1 border-indigo-600 hover:bg-indigo-500 hover:border-indigo-500'
        >
            {isOpen
                ? <MinusIcon className='w-4' />
                : <PlusIcon className='w-4' />
            }
        </button>
    );

    if (!isOpen) {
        return (
            <div className='sticky top-[64px]'>
                <ToggleButton onClick={() => setIsOpen(true)} />
            </div>
        );
    }

    return (
        <div
            className={clsx(
                'sticky z-10 top-[72px] iso basis-1/4 rounded-md h-fit justify-center gap-6 bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800 mr-3 md:mr-4',
            )}
        >
            <div className='flex flex-wrap justify-center items-center border-b-1 border-slate-300 dark:border-slate-700 p-3 mb-3 w-full'>
                <header className={clsx(
                    'w-8/12',
                    {
                        'ml-auto': children !== undefined
                    }
                )}>
                    <h2 className='text-2xl text-center'>Main Roster</h2>
                </header>
                <div className='flex w-2/12 my-2 sm:my-0 justify-end'>
                    <ToggleButton onClick={() => setIsOpen(false)} />
                </div>
            </div>
            {children}
        </div>
    );

}