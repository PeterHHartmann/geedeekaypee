'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export function SlidingToolbarLeft({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={clsx(
            'flex justify-center items-center gap-1 bg-transparent py-1 rounded-full ml-auto',
            {
                'px-2 border-1 border-primary-600': isOpen == true,
                'border-1 border-transparent': isOpen == false
            }
        )}
        >
            <button className='flex justify-center items-center p-1 w-auto h-auto aspect-square rounded-full hover:bg-primary-50 hover:text-primary-950'>
                <ChevronLeftIcon onClick={() => setIsOpen(!isOpen)} className={clsx(
                    'w-6 transition-transform translate-x-[-0.125rem]',
                    { 'rotate-180 translate-x-[0.125rem]': isOpen == true }
                )} />
            </button>
            {isOpen
                ? children
                : null
            }
        </div>
    );
}