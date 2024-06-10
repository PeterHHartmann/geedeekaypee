import { RaidCard, RaidCardSkeleton } from '@/components/raids/RaidCard';
import { fetchRaidEvents } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import { Suspense } from 'react';

export async function RaidEventsList() {
    const raidEvents = await fetchRaidEvents();

    return (
        <>
            {raidEvents.map((raidEvent) => (
                <Suspense key={`raidevent-card-${raidEvent.id}`} fallback={<div className={`${RaidCardSkeleton} ${SHIMMER}`}></div>}>
                    <RaidCard
                        raidEvent={raidEvent}
                    />
                </Suspense>
            ))}
        </>
    );
}