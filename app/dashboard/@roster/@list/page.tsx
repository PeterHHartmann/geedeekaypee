import { fetchCharacterRoster } from '@/lib/actions';
import { auth } from '@/auth';
import { RosterCharacter } from '@/components/roster/RosterCharacter';

export default async function RosterListPage() {
    const session = await auth();
    const user = session!.user!;
    const characterRoster = await fetchCharacterRoster(user.email);

    return (
        <>
            {characterRoster.map((character) =>
                <RosterCharacter key={`roster-character-${character.id}`} character={character} />
            )}
        </>
    );
}

