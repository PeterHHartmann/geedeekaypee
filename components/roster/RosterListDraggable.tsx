'use server';

import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { CharacterRowDraggable } from '@/components/roster/CharacterRowDraggable';
import { fetchCharClasses, fetchMainRoster, fetchCharRolesPerClass, fetchCharSpecs } from '@/lib/actions';

export async function RosterListDraggable() {
    const characterRoster = await fetchMainRoster();
    const allCharClasses = await fetchCharClasses();
    const allCharSpecs = await fetchCharSpecs();
    const allCharRoles = await fetchCharRolesPerClass();

    return (
        <>
            {characterRoster.map((character) =>
                <CharacterRowDraggable key={`roster-character-${character.id}`} character={character} id={`draggableRosterCharacter-${character.id}`}>
                    <SlidingToolbarLeft>
                        <DeleteCharacterForm character={character} />
                        <EditCharacterForm character={character} charClasses={allCharClasses} charSpecs={allCharSpecs} charRoles={allCharRoles} />
                    </SlidingToolbarLeft>
                </CharacterRowDraggable>
            )}
        </>
    );
}