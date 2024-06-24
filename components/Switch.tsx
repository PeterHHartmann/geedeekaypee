
'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import React, { useEffect, useState, type ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    isOn: boolean;
};

export function ThemeSwitch({ children, isOn, ...rest }: Props) {
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
            {...rest}
            className={containerStyle}
        >
            <div className={'flex justify-center items-center h-full aspect-square rounded-full bg-slate-50 dark:bg-indigo-700 transition-margin dark:ml-6'}>
                {children}
            </div>
        </button>
    );
}