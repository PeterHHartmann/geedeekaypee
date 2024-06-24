import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
    title: string;
    children?: ReactNode;
};

export function RaidsHeader({ children, title }: Props) {
    return (
        <div className='flex flex-wrap justify-center items-center border-b-1 border-slate-300 dark:border-slate-700 p-3 mb-3 w-full'>
            <header className={clsx(
                'w-full sm:w-6/12',
                {
                    'ml-auto': children !== undefined
                }
            )}>
                <h2 className='text-2xl text-center'>{title}</h2>
            </header>
            {children}
        </div>
    );
}