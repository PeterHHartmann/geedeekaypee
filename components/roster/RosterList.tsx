'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { RosterCharacter } from '@/components/roster/RosterCharacter';
import { fetchCharacterClasses, fetchCharacters, fetchRolesForCharacterClasses } from '@/lib/actions';

export async function RosterList() {
    const characterRoster = await fetchCharacters();
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();

    return (
        <>
            {characterRoster.map((character) =>
                <RosterCharacter key={`roster-character-${character.id}`} character={character}>
                    <SlidingToolbarLeft>
                        <EditCharacterForm character={character} characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
                        <DeleteCharacterForm character={character} />
                    </SlidingToolbarLeft>
                </RosterCharacter>
            )}
        </>
    );
}