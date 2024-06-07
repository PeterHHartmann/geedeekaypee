'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRow } from '@/components/roster/CharacterRow';
import { fetchCharClasses, fetchCharacters, fetchCharRolesPerClass, fetchCharSpecs } from '@/lib/actions';

export async function RosterList() {
    const charRoster = await fetchCharacters();
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allRoleOptions = await fetchCharRolesPerClass();

    return (
        <>
            {charRoster.map((character) =>
                <CharacterRow key={`roster-character-${character.id}`} character={character}>
                    <SlidingToolbarLeft>
                        <EditCharacterForm character={character} charClasses={allCharClasses} charSpecs={allCharSpecs} charRoles={allRoleOptions} />
                        <DeleteCharacterForm character={character} />
                    </SlidingToolbarLeft>
                </CharacterRow>
            )}
        </>
    );
}