import { fetchCharacterClasses, fetchCharacters, fetchRolesForCharacterClasses } from '@/lib/actions';
import { RosterCharacter } from '@/components/roster/RosterCharacter';
import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { EditCharacterForm } from '@/components/roster/EditCharacterForm';
import { DeleteCharacterForm } from '@/components/roster/DeleteCharacterForm';

export default async function RosterListPage() {
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

