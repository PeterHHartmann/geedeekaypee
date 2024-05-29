'use client';

import { LoadingSpinner } from '@/app/_ui/loading-spinner';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className='flex w-14 h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]'>
                <div className='flex justify-center items-center h-full aspect-square rounded-full transition-transform ease-in-out duration-200 ml-0 bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-50 dark:translate-x-[1.5rem]'>
                    <LoadingSpinner size='xsm' />
                </div>
            </button>
        );
    }

    return (
        <button
            onClick={resolvedTheme == 'light' ? () => setTheme('dark') : () => setTheme('light')}
            className='flex w-14 h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]'
        >
            <div className='flex justify-center items-center h-full aspect-square rounded-full transition-transform ease-in-out duration-200 ml-0 bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-50 dark:translate-x-[1.5rem]'>
                {resolvedTheme == 'light'
                    ? <SunIcon className='w-5' />
                    : <MoonIcon className='w-5' />
                }
            </div>
        </button>
    );
}