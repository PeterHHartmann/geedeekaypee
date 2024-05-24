import { fetchCharacterRoster } from '@/app/lib/actions';
import { RosterCharacter } from '@/app/ui/roster-character';
import { auth } from '@/auth';

export default async function RosterListPartial() {
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