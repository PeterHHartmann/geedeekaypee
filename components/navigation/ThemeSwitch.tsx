'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerStyle = 'flex w-14 h-8 bg-indigo-700 text-indigo-700 dark:bg-slate-50 dark:text-white rounded-full p-[0.15rem]';
    const buttonStyle = 'flex justify-center items-center h-full aspect-square rounded-full bg-slate-50 dark:bg-slate-900 transition-margin dark:ml-6';

    if (!mounted) {
        return (
            <button className={containerStyle}>
                <div className={buttonStyle}>
                    <LoadingSpinner size='xsm' />
                </div>
            </button>
        );
    }

    return (
        <button
            onClick={resolvedTheme == 'light' ? () => setTheme('dark') : () => setTheme('light')}
            className={containerStyle}
        >
            <div className={'flex justify-center items-center h-full aspect-square rounded-full bg-slate-50 dark:bg-indigo-700 transition-margin dark:ml-6'}>
                {resolvedTheme == 'light'
                    ? <SunIcon className='w-5' />
                    : <MoonIcon className='w-5' />
                }
            </div>
        </button>
    );
}