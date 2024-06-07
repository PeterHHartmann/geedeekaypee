'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRowDraggable } from '@/components/roster/CharacterRowDraggable';
import { fetchCharClasses, fetchCharacters, fetchCharRolesPerClass, fetchCharSpecs } from '@/lib/actions';

export async function RosterListDraggable() {
    const characterRoster = await fetchCharacters();
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allCharRoles = await fetchCharRolesPerClass();

    return (
        <>
            {characterRoster.map((character, index) =>
                <CharacterRowDraggable key={`roster-character-${character.id}`} character={character} id={`draggableRosterCharacter-${character.id}`} index={index}>
                    <SlidingToolbarLeft>
                        <EditCharacterForm character={character} charClasses={allCharClasses} charSpecs={allCharSpecs} charRoles={allCharRoles} />
                        <DeleteCharacterForm character={character} />
                    </SlidingToolbarLeft>
                </CharacterRowDraggable>
            )}
        </>
    );
}