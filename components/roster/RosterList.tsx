'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRow } from '@/components/roster/CharacterRow';
import { fetchCharClasses, fetchCharacters, fetchCharRolesPerClass } from '@/lib/actions';

export async function RosterList() {
    const characterRoster = await fetchCharacters();
    const allCharacterClasses = await fetchCharClasses();
    const characterClassRoleOptions = await fetchCharRolesPerClass();

    return (
        <>
            {characterRoster.map((character) =>
                <CharacterRow key={`roster-character-${character.id}`} character={character}>
                    <SlidingToolbarLeft>
                        <EditCharacterForm character={character} charClasses={allCharacterClasses} charRoles={characterClassRoleOptions} />
                        <DeleteCharacterForm character={character} />
                    </SlidingToolbarLeft>
                </CharacterRow>
            )}
        </>
    );
}