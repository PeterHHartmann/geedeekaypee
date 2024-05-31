import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RosterListLayout({ children }: Props) {
    return (
        <div className='relative bg-slate-700 dark:bg-slate-800 rounded-md border-1 border-slate-700 overflow-clip'>
            <div className='rounded-md max-h-[400px] md:max-h-[800px] md:min-h-[800px] overflow-y-scroll'>
                {children}
            </div>
        </div>
    );
}