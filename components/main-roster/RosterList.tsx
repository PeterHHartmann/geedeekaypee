'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/main-roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/main-roster/EditCharacterForm';
import { fetchCharClasses, fetchMainRoster, fetchCharRolesPerClass, fetchCharSpecs } from '@/lib/actions';
import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { MainRosterRow } from '@/components/main-roster/MainRosterRow';

type Props = {
    draggable?: boolean;
};

export async function RosterList({ draggable }: Props) {
    const charRoster = await fetchMainRoster();
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allRoleOptions = await fetchCharRolesPerClass();

    return (
        <>
            {charRoster.map((character) => (
                <li
                    key={`mainroster-row-${character.id}`}
                    className='flex flex-nowrap items-center gap-1 w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-600 dark:hover:bg-slate-700 pr-2'
                >
                    <MainRosterRow character={character} draggable={draggable}>
                        <CharacterInfo character={character} />
                    </MainRosterRow>
                    <SlidingToolbarLeft>
                        <DeleteCharacterForm character={character} />
                        <EditCharacterForm character={character} charClasses={allCharClasses} charSpecs={allCharSpecs} charRoles={allRoleOptions} />
                    </SlidingToolbarLeft>
                </li>
            ))}
        </>
    );
}