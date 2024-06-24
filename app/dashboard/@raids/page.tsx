import { Button } from '@/components/Button';
import { RaidsHeader } from '@/components/raids/RaidsHeader';
import { RaidEventsList } from '@/components/raids/RaidEventsList';
import { SHIMMER } from '@/lib/constants';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function RaidsPage() {
    return (
        <>
            <RaidsHeader title='Raids'>
                <div className='w-full sm:w-3/12 my-2 sm:my-0'>
                    <Link href={'/dashboard/raid'} className='w-full'>
                        <Button className='w-full'>
                            <PlusCircleIcon className='w-6' />
                            <p>New Raid</p>
                        </Button>
                    </Link>
                </div>
            </RaidsHeader>
            <Suspense fallback={<div className={`w-full h-auto rounded-md ${SHIMMER}`}></div>}>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <RaidEventsList />
                </div>
            </Suspense>
        </>
    );
}