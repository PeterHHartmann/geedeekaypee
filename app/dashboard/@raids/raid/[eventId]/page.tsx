import { auth } from '@/auth';
import { Button } from '@/components/Button';
import { RaidsHeader } from '@/components/raids/RaidsHeader';
import { RaidEventEditForm } from '@/components/raids/form/RaidEventEditForm';
import {
    fetchMainRoster,
    fetchRaidEvent,
    fetchRaidEventAssignments,
    fetchRaidEventRoster,
    fetchRaidTemplateSingle
} from '@/lib/actions';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
    params: { eventId: string; };
};

export default async function RaidEventEditPage({ params }: Props) {
    const session = await auth();
    const mainRoster = await fetchMainRoster(session?.user?.email);
    const raidEvent = await fetchRaidEvent(params.eventId);
    const raidTemplate = await fetchRaidTemplateSingle(raidEvent.raid_template_id);
    const raidEventRoster = await fetchRaidEventRoster(raidEvent.id);
    const raidEventAssignments = await fetchRaidEventAssignments(raidEvent.id);

    return (
        <>
            <RaidsHeader title={`Edit Raid: ${raidEvent.title}`}>
                <div className='w-full sm:w-3/12 my-2 sm:my-0'>
                    <Link href='/dashboard'>
                        <Button className='w-6/12 ml-auto'>
                            <ChevronLeftIcon className='w-6' />
                            <p>Back</p>
                        </Button>
                    </Link>
                </div>
            </RaidsHeader>
            <RaidEventEditForm raidEvent={raidEvent} raidTemplate={raidTemplate} mainRoster={mainRoster} eventRoster={raidEventRoster} eventAssignments={raidEventAssignments} />
        </>
    );
}