import { RaidEventsList } from '@/components/raids/RaidEventsList';
import { SHIMMER } from '@/lib/constants';
import { Suspense } from 'react';

export default async function RaidsPage() {
    return (
        <Suspense fallback={<div className={`w-full h-[500px] lg:h-[780px] rounded-md ${SHIMMER}`}></div>}>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                <RaidEventsList />
            </div>
        </Suspense>
    );
}