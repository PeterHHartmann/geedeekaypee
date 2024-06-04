import { AddCharacterForm } from '@/components/roster/AddCharacterForm';
import { RosterList } from '@/components/roster/RosterList';
import { fetchCharacterClasses, fetchRolesForCharacterClasses } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import { Suspense } from 'react';

export default async function RosterPage() {
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();

    return (
        <>
            <div className='my-2 justify-center' >
                <AddCharacterForm characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
            </div>
            <div className='relative bg-slate-700 dark:bg-slate-800 rounded-md border-1 border-slate-700 overflow-clip'>
                <Suspense fallback={<div className={`rounded-md h-screen max-h-[500px] xl:max-h-[750px] overflow-y-scroll ${SHIMMER}`}></div>}>
                    <div className='rounded-md h-fit max-h-[500px] xl:max-h-[750px] overflow-y-scroll'>
                        <RosterList />
                        {/* {characterRoster.map((character) =>
                            <RosterCharacter key={`roster-character-${character.id}`} character={character}>
                                <SlidingToolbarLeft>
                                    <EditCharacterForm character={character} characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
                                    <DeleteCharacterForm character={character} />
                                </SlidingToolbarLeft>
                            </RosterCharacter>
                        )} */}
                    </div>
                </Suspense>
            </div>
        </>
    );
}