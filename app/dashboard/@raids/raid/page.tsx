import { Button } from '@/components/Button';
import { RaidsHeader } from '@/components/raids/RaidsHeader';
import { RaidEventAddForm } from '@/components/raids/form/RaidEventAddForm';
import { fetchMainRoster, fetchRaidTemplates } from '@/lib/actions';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function NewRaidPage() {
    const main_roster = await fetchMainRoster();
    const raidTemplates = await fetchRaidTemplates();

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
            <RaidEventAddForm mainRoster={main_roster} raidTemplates={raidTemplates}>
            </RaidEventAddForm>
        </>
    );
}