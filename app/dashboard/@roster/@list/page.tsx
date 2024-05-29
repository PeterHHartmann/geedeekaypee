import { fetchCharacterRoster } from '@/app/_lib/actions';
import { CLASS_TEXT_COLOR } from '@/app/_lib/constants';
import type { RosterCharacter } from '@/app/_lib/definitions';
import { sleep } from '@/app/_lib/utils';
import { CharacterClassIcon } from '@/app/_ui/character-class-icon';
import { CharacterRoleIcon } from '@/app/_ui/character-role-icon';
import { DeleteControl } from '@/app/_ui/delete-control';
import { EditControl } from '@/app/_ui/edit-control';
import { SlidingToolbarLeft } from '@/app/_ui/sliding-toolbar-left';
import { auth } from '@/auth';

export default async function RosterListPartial() {
    const session = await auth();
    const user = session!.user!;
    const characterRoster = await fetchCharacterRoster(user.email);
    // await sleep(5000);

    return (
        <>
            {characterRoster.map((character) =>
                <RosterCharacterRow key={`roster-character-${character.id}`} character={character} />
            )}
        </>
    );
}

function RosterCharacterRow({ character }: {
    character: RosterCharacter;
}) {
    return (
        <div className='flex flex-wrap gap-1 p-1 px-1 border-b-[1px] border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-750 object-cover w-full items-center'>
            <CharacterRoleIcon role_name={character.role_name} />
            <CharacterClassIcon name={character.class_name} />
            <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            <SlidingToolbarLeft>
                <EditControl />
                {/* <PencilSquareIcon className='w-6' /> */}
                <DeleteControl character={character} />
                {/* <TrashIcon className='w-6' /> */}
            </SlidingToolbarLeft>
        </div>
    );
}