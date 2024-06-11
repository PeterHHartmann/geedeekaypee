'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRow } from '@/components/roster/CharacterRow';
import { fetchCharClasses, fetchMainRoster, fetchCharRolesPerClass, fetchCharSpecs } from '@/lib/actions';

export async function RosterList() {
    const charRoster = await fetchMainRoster();
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allRoleOptions = await fetchCharRolesPerClass();

    return (
        <>
            {charRoster.map((character) =>
                <CharacterRow key={`roster-character-${character.id}`} character={character}>
                    <SlidingToolbarLeft>
                        <DeleteCharacterForm character={character} />
                        <EditCharacterForm character={character} charClasses={allCharClasses} charSpecs={allCharSpecs} charRoles={allRoleOptions} />
                    </SlidingToolbarLeft>
                </CharacterRow>
            )}
        </>
    );
}