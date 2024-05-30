import { fetchCharacterRoster } from '@/lib/actions';
import { auth } from '@/auth';
import { RosterCharacter } from '@/components/roster/RosterCharacter';
import { sleep } from '@/lib/utils';

export default async function RosterListPage() {
    const session = await auth();
    const user = session!.user!;
    const characterRoster = await fetchCharacterRoster(user.email);
    await sleep(5000);

    return (
        <>
            {characterRoster.map((character) =>
                <RosterCharacter key={`roster-character-${character.id}`} character={character} />
            )}
        </>
    );
}

