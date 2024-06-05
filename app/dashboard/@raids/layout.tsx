import { Button } from '@/components/Button';
import { RaidsNav } from '@/components/raids/RaidsNav';
import { SHIMMER } from '@/lib/constants';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default async function RaidsLayout({ children }: Props) {

    return (
        <section className='rounded-md w-full bg-slate-100 dark:bg-slate-800 border-1 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200 dark:shadow-slate-800'>
            <div className='flex flex-wrap items-center border-b-1 border-slate-300 dark:border-slate-700 p-3'>
                <header className='w-full sm:w-6/12 ml-auto'>
                    <h2 className='text-2xl text-center'>Raids</h2>
                </header>
                <RaidsNav />
            </div>
            <Suspense fallback={
                <div className={`w-full overflow-y-scroll max-h-[500px] lg:max-h-[780px] lg:min-h-[780px] p-3 ${SHIMMER} rounded-md`}></div>}>
                <div className='w-full overflow-y-scroll max-h-[500px] lg:max-h-[780px] lg:min-h-[780px] p-3'>
                    {children}
                </div>
            </Suspense>
        </section>
    );
}