import { Button } from '@/components/Button';
import { XCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
    headerText: string;
    subHeaderText?: string;
};

export function Modal({ children, isOpen, setIsOpen, className, headerText, subHeaderText }: Props) {

    if (!isOpen) {
        return null;
    }

    return (
        <div className='flex fixed justify-center z-50 w-full h-full backdrop-blur-sm inset-0' onClick={() => setIsOpen(false)}>
            <div className={clsx(
                'bg-slate-50 dark:bg-slate-800 border-1 border-slate-900 dark:border-slate-700 mx-1 md:mx-auto mt-20 sm:mt-40 md:mt-60 mb-auto rounded-xl px-2 md:px-8 pt-2 md:pt-4 pb-8 shadow-lg text-slate-950 dark:text-white',
                className)}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex gap-4 justify-between border-b-1 dark:border-slate-700 pb-2 md:h-[3.5rem] items-center mb-2'>
                    <h1 className='text-2xl font-medium'>{headerText}</h1>
                    <CloseButton onClick={() => setIsOpen(false)} />
                </div>
                {subHeaderText
                    && <div className='border-b-1 dark:border-slate-700 pb-2'>
                        <h2>{subHeaderText}</h2>
                    </div>
                }
                <div className='mt-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function CloseButton({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button
            {...rest}
            className={clsx(
                'p-1 md:p-1 md:px-1 md:flex md:justify-center aspect-square',
                className
            )}
        >
            <XCircleIcon className='w-8' />
        </Button>
    );
}