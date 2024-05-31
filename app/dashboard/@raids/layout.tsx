import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    add_raid: ReactNode;
};

export default function RaidsLayout({ children, add_raid }: Props) {
    return (
        <div className='rounded-md w-full bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            <div className='flex flex-wrap items-center border-b-1 border-slate-300 dark:border-slate-700 p-3'>
                <h2 className='text-2xl text-center w-full md:w-6/12 ml-auto'>Raids</h2>
                <div className='w-full md:w-3/12 my-2 md:my-0'>
                    {add_raid}
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 p-3'>
                {children}
            </div>
        </div>
    );
}