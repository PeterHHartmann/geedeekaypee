import { fetchCharacterRoster } from '@/app/lib/actions';
import { CLASS_TEXT_COLOR } from '@/app/lib/constants';
import type { RosterCharacter } from '@/app/lib/definitions';
import { sleep } from '@/app/lib/utils';
import { CharacterClassIcon } from '@/app/ui/character-class-icon';
import { CharacterRoleIcon } from '@/app/ui/character-role-icon';
import { auth } from '@/auth';

export default async function RosterListPartial() {
    const session = await auth();
    const user = session!.user!;
    const characterRoster = await fetchCharacterRoster(user.email);
    await sleep(500);
    return (
        <div className='rounded-md py-2 max-h-[400px] md:max-h-[800px] md:min-h-[800px] overflow-y-scroll'>
            {characterRoster.map((character) =>
                <RosterCharacterRow key={`roster-character-${character.id}`} character={character} />
            )}
        </div>
    );
}

type Props = {
    character: RosterCharacter;
};

export function RosterCharacterRow({ character }: Props) {
    return (
        <div className='flex gap-1 mb-[6px] pb-[6px] px-2 border-b-[1px] border-primary-700 object-cover w-full'>
            <CharacterRoleIcon role_name={character.role_name} />
            <CharacterClassIcon class_name={character.class_name} />
            <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
        </div>
    );
}