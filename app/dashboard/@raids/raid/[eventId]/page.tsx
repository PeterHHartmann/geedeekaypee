import { Button } from '@/components/Button';
import { RaidsHeader } from '@/components/raids/RaidsHeader';
import { fetchRaidEvent } from '@/lib/actions';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
    params: { eventId: string; };
};

export default async function RaidEventEditPage({ params }: Props) {

    const raidEvent = await fetchRaidEvent(params.eventId);

    return (
        <>
            <RaidsHeader title='New Raid'>
                <div className='w-full sm:w-3/12 my-2 sm:my-0'>
                    <Link href='/dashboard'>
                        <Button className='w-6/12 ml-auto'>
                            <ChevronLeftIcon className='w-6' />
                            <p>Back</p>
                        </Button>
                    </Link>
                </div>
            </RaidsHeader>
            <div><h1>YO {}</h1></div>
        </>
    );
}