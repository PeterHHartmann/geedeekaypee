import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    add_character: ReactNode;
};

export default async function RosterLayout({ children }: Props) {
    return (
        <div className='basis-1/4 rounded-md justify-center gap-6 bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            <div className='border-b-1 border-slate-300 dark:border-slate-700 p-2'>
                <h2 className='text-2xl mx-auto text-center'>Roster</h2>
            </div>
            <div className='px-3 pb-3'>
                {children}
            </div>
        </div>
    );
}