import { Button } from '@/components/Button';
import { RaidsHeader } from '@/components/raids/RaidsHeader';
import { RaidsNav } from '@/components/raids/RaidsNav';
import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchMainRoster, fetchRaidTemplates, fetchRaidTemplatePositions } from '@/lib/actions';
import { ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function NewRaidPage() {
    const roster = await fetchMainRoster();
    const raidTemplates = await fetchRaidTemplates();
    const raidTemplatePositions = await fetchRaidTemplatePositions();

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
            <AddRaidForm mainRoster={roster} raidTemplates={raidTemplates} templatePositions={raidTemplatePositions}>
            </AddRaidForm>
        </>
    );
}