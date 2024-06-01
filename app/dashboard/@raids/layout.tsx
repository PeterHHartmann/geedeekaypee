import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    add_raid: ReactNode;
};

export default function RaidsLayout({ children, list, add_raid }: Props) {
    return (
        <section className='rounded-md w-full bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            <div className='flex flex-wrap items-center border-b-1 border-slate-300 dark:border-slate-700 p-3'>
                <header className='w-full sm:w-6/12 ml-auto'>
                    {children}
                </header>
                <div className='w-full sm:w-3/12 my-2 sm:my-0'>
                    {add_raid}
                </div>
            </div>
            {list}
        </section>
    );
}