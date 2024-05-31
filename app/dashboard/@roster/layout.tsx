import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    add_character: ReactNode;
};

export default function RosterLayout({ children, list, add_character }: Props) {
    return (
        <div className='rounded-md w-full md:w-5/12 xl:w-4/12 max-w-2xl justify-center gap-6 bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            {children}
            <div className='p-3'>
                {add_character}
                {list}
            </div>
        </div>
    );
}