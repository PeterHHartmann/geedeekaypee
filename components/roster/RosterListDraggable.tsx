'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRowDraggable } from '@/components/roster/CharacterRowDraggable';
import { fetchCharacterClasses, fetchCharacters, fetchRolesForCharacterClasses } from '@/lib/actions';

export async function RosterListDraggable() {
    const characterRoster = await fetchCharacters();
    const allCharacterClasses = await fetchCharacterClasses();
    const characterClassRoleOptions = await fetchRolesForCharacterClasses();

    return (
        <>
            {characterRoster.map((character, index) =>
                <CharacterRowDraggable key={`roster-character-${character.id}`} character={character} id={`draggableRosterCharacter-${character.id}`} index={index}>
                    <SlidingToolbarLeft>
                        <EditCharacterForm character={character} characterClasses={allCharacterClasses} characterClassRolesOptions={characterClassRoleOptions} />
                        <DeleteCharacterForm character={character} />
                    </SlidingToolbarLeft>
                </CharacterRowDraggable>
            )}
        </>
    );
}