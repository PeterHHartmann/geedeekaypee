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
                {/* <div className='w-full sm:w-3/12 my-2 sm:my-0'>
                <Link href={'/dashboard/new_raid'} className='w-full'>
                        <Button className='w-full'>
                            <PlusCircleIcon className='w-6' />
                            <p>New Raid</p>
                        </Button>
                    </Link>
                </div> */}
                <RaidsNav />
            </div>
            <Suspense fallback={
                <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-3 m-3 overflow-y-scroll max-h-[500px] lg:max-h-[780px] lg:min-h-[780px] ${SHIMMER} rounded-md`}></div>}>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 m-3 overflow-y-scroll max-h-[500px] lg:max-h-[780px] lg:min-h-[780px]'>
                    {children}
                </div>
            </Suspense>
        </section>
    );
}