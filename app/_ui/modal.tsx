import { CloseButton } from '@/app/_ui/close-button';
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
        <div className='flex fixed justify-center z-10 w-full h-full backdrop-blur-sm inset-0' onClick={() => setIsOpen(false)}>
            <div className={clsx(
                'bg-primary-150 dark:bg-primary-800 border-1 border-primary-900 dark:border-primary-700 mx-1 md:mx-auto mt-20 sm:mt-40 md:mt-60 mb-auto rounded-xl px-2 md:px-8 pt-2 md:pt-4 pb-8',
                className)}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex gap-4 justify-between border-b-1 dark:border-primary-700 pb-2 md:h-[3.5rem] items-center mb-2'>
                    <h1 className='text-2xl font-medium'>{headerText}</h1>
                    <CloseButton onClick={() => setIsOpen(false)} />
                </div>
                {subHeaderText
                    && <div className='border-b-1 dark:border-primary-700 pb-2'>
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

// md: w - 9 / 12 lg: w - 4 / 12;