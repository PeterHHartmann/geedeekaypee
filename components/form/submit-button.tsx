'use client';
import { Button } from '@/components/Button';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useFormStatus } from 'react-dom';

type Props = PropsWithChildren & {
    className?: string;
};

export function SubmitButton({ children, className }: Props) {
    const { pending } = useFormStatus();

    return (
        <Button className={clsx(
            'flex w-full justify-center items-center',
            { 'hover:bg-slate-950 hover:text-white dark:hover:bg-slate-50 dark:hover:text-slate-950': pending == true },
            className
        )}>
            {pending == true
                ? <ArrowPathIcon className='w-6 animate-spin' />
                : <>{children}</>
            }
        </Button>
    );
}