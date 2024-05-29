import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    insert: ReactNode;
};

export default function RosterLayout({ children, list, insert }: Props) {
    return (
        <>
            <div className='p-3 rounded-xl bg-primary-150 dark:bg-primary-850 sm:w-6/12 md:w-5/12 xl:w-4/12 max-w-2xl justify-center gap-6 border-1 border-primary-800 outline-2 outline-primary-50'>
                {children}
                {list}
                {insert}
            </div>
        </>
    );
}