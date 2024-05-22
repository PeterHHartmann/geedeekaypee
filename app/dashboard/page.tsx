import { Button } from '@/app/ui/button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';
import RosterCharacter from '@/app/ui/roster-character';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'User dashboard for managing roster and upcoming raids',
};

export default async function Page() {
    const roster_characters = [
        { id: 1, name: 'Thaldrion', classId: 5, roleList: [{ id: 1, name: 'Dps' }, { id: 2, name: 'Tank' }] },
        { id: 2, name: 'Zarathor', classId: 1, roleList: [{ id: 2, name: 'Tank' }] },
        { id: 3, name: 'Elunara', classId: 6, roleList: [{ id: 3, name: 'Heal' }] },
        { id: 4, name: 'Grommashar', classId: 7, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 5, name: 'Sylverwind', classId: 3, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
        { id: 6, name: 'Danathos', classId: 4, roleList: [{ id: 1, name: 'Dps' }] },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center px-2 py-1 h-full md:px-6">
            <div id='dashboard-container' className='flex flex-col align-center bg-primary-850 w-full h-full rounded-xl md:px-10 py-6'>
                <h1 className='mx-auto text-3xl mb-4'>Dashboard</h1>
                <div className='flex flex-col sm:flex-row gap-1 md:gap-6'>
                    <div className='p-6 rounded-xl bg-primary-800 md:w-96 md:max-w-96 justify-center gap-6'>
                        <div className='border-b-2 border-primary-600 mb-4'>
                            <h2 className='text-2xl mb-2 mx-auto w-min'>Roster</h2>
                        </div>
                        <div className='bg-primary-750 pt-1 rounded-xl max-h-[400px] md:max-h-[600px] overflow-y-auto'>
                            {roster_characters.map((player, index) =>
                                <RosterCharacter key={`roster-character-${index}`} character={player} />
                            )}
                        </div>
                        <div className='pt-1 mt-2 justify-center'>
                            <Button className='w-full'>
                                <PlusCircleIcon className='w-6 ml-auto' />
                                <p className="hidden md:block mr-auto">Add character</p>
                            </Button>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-primary-800 w-full'>
                        <div className='flex items-center border-b-2 border-primary-600 mb-4 pb-2'>
                            <h2 className='text-2xl mx-auto w-min'>Raids</h2>
                            <Button>
                                <PlusCircleIcon className='w-6' />
                                <p className="hidden md:block">New Raid</p>
                            </Button>
                        </div>
                        <div id='your raids'>
                            <div>raid 1</div>
                            <div>raid 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
