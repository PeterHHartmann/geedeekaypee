import { AddCharacterForm } from '@/components/main-roster/AddCharacterForm';
import { MainRosterList } from '@/components/main-roster/MainRosterList';
import { fetchCharClasses, fetchCharSpecs, fetchCharRolesPerClass } from '@/lib/actions';
import { SHIMMER } from '@/lib/constants';
import { Suspense } from 'react';

export default async function MainRosterPage() {
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allCharRoles = await fetchCharRolesPerClass();

    return (
        <>
            <div className='my-2 justify-center' >
                <AddCharacterForm charClasses={allCharClasses} charRoles={allCharRoles} charSpecs={allCharSpecs} />
            </div>
            <div className='relative bg-slate-500 dark:bg-slate-800 rounded-md border-1 border-slate-700 overflow-clip'>
                <Suspense fallback={<div className={`grid grid-flow-row rounded-md h-screen max-h-[500px] xl:max-h-[750px] overflow-y-scroll divide-y divide-solid divide-slate-600 dark:divide-slate-700 ${SHIMMER}`}></div>}>
                    <ul className='grid grid-flow-row rounded-md h-fit max-h-[500px] xl:max-h-[720px] overflow-y-scroll divide-y divide-solid divide-slate-600 dark:divide-slate-700'>
                        <MainRosterList />
                    </ul>
                </Suspense>
            </div>
        </>
    );
}