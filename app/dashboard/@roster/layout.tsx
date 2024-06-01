import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    add_character: ReactNode;
};

export default function RosterLayout({ children, list, add_character }: Props) {
    return (
        <div className='basis-1/4 rounded-md justify-center gap-6 bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            {children}
            <div className='px-3 pb-3'>
                {add_character}
                {list}
            </div>
        </div>
    );
}