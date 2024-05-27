'use client';
import { TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

export function DeleteControl() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className={clsx(
                'flex justify-between items-center p-1 w-auto h-auto aspect-square rounded-full hover:bg-primary-50 hover:text-primary-950',
                { 'bg-primary-50 text-primary-950': isOpen == true }
            )}>
                <TrashIcon className='w-6 ' />
            </button>
        </div>
    );
}