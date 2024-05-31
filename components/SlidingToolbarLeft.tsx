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
            'flex h-7 justify-center items-center gap-[.25rem] rounded-full ml-auto border-1 text-white',
            {
                'border-transparent': isOpen == false,
                'border-slate-50': isOpen == true
            }
        )}
        >
            <ToolbarButton
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    'transition-transform border-1',
                    {
                        'rotate-180': isOpen == true,
                        'hover:border-slate-50': isOpen == false
                    }
                )}
            >
                <ChevronLeftIcon className='w-5 translate-x-[-0.1rem]' />
            </ToolbarButton>
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
                'flex h-full aspect-square justify-center items-center p-1 rounded-full object-fill border-1 border-transparent hover:bg-slate-50 hover:border-slate-50 hover:text-slate-950',
                className
            )}
        >
            {children}
        </button>
    );
}