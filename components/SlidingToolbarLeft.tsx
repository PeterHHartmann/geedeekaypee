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
            'flex h-7 justify-center items-center gap-[.25rem] rounded-full ml-auto border-1',
            {
                'border-transparent': isOpen == false,
                'border-primary-950 dark:border-primary-50': isOpen == true
            }
        )}
        >
            {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-center items-center p-1 rounded-full hover:bg-primary-950 hover:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-950'> */}
            <ToolbarButton
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    'transition-transform border-1',
                    {
                        'rotate-180': isOpen == true,
                        'hover:border-primary-950 dark:hover:border-primary-50': isOpen == false
                    }
                )}
            >
                <ChevronLeftIcon className='w-5 translate-x-[-0.1rem]' />
            </ToolbarButton>
            {/* </button> */}
            {isOpen
                ? children
                : null
            }
        </div>
    );
}

type ToolbarButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
};

export function ToolbarButton({ children, className, ...rest }: ToolbarButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                //border-1 border-transparent hover:border-primary-950 dark:hover:border-primary-50
                //outline outline-1 outline-transparent hover:outline-primary-950 dark:hover:outline-primary-50
                'flex h-full aspect-square justify-center items-center p-1 rounded-full object-fill border-1 border-transparent hover:bg-primary-950 hover:border-primary-950 hover:text-primary-50 dark:hover:bg-primary-50 dark:hover:border-primary-50 dark:hover:text-primary-950',
                className
            )}
        >
            {children}
        </button>
    );
}