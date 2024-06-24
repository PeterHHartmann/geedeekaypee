'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/main-roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/main-roster/EditCharacterForm';
import {
    fetchCharClasses,
    fetchMainRoster,
    fetchCharRolesPerClass,
    fetchCharSpecs
} from '@/lib/actions';
import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { MainRosterRow } from '@/components/main-roster/MainRosterRow';
import { CLASS_BG_COLOR } from '@/lib/constants';
import { auth } from '@/auth';

type Props = {
    draggable?: boolean;
};

export async function MainRosterList({ draggable }: Props) {
    const session = await auth();
    const charRoster = await fetchMainRoster(session?.user?.email);
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allRoleOptions = await fetchCharRolesPerClass();

    return (
        <>
            {charRoster.map((character) => (
                <li
                    key={`mainroster-row-${character.id}`}
                    className={`flex flex-nowrap items-center gap-1 w-full h-[2.375rem] pr-2 ${CLASS_BG_COLOR[character.class_name]}`}
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