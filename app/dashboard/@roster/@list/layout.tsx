import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RosterListLayout({ children }: Props) {

    return (
        <div className='relative bg-slate-700 dark:bg-slate-800 rounded-md border-1 border-slate-700 overflow-clip'>
            <div className='rounded-md h-fit max-h-[500px] xl:max-h-[750px] overflow-y-scroll'>
                {children}
            </div>
        </div>
    );
}