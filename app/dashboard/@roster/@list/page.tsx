import { fetchCharacterRoster } from '@/app/lib/actions';
import { CLASS_TEXT_COLOR } from '@/app/lib/constants';
import type { RosterCharacter } from '@/app/lib/definitions';
import { sleep } from '@/app/lib/utils';
import { CharacterClassIcon } from '@/app/ui/character-class-icon';
import { CharacterRoleIcon } from '@/app/ui/character-role-icon';
import { DeleteControl } from '@/app/ui/delete-control';
import { EditControl } from '@/app/ui/edit-control';
import { SlidingToolbarLeft } from '@/app/ui/sliding-toolbar-left';
import { auth } from '@/auth';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

export default async function RosterListPartial() {
    const session = await auth();
    const user = session!.user!;
    const characterRoster = await fetchCharacterRoster(user.email);
    await sleep(500);
    return (
        <div className='rounded-md max-h-[400px] md:max-h-[800px] md:min-h-[800px] overflow-y-scroll'>
            {characterRoster.map((character) =>
                <RosterCharacterRow key={`roster-character-${character.id}`} character={character} />
            )}
        </div>
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
                <DeleteControl />
                {/* <TrashIcon className='w-6' /> */}
            </SlidingToolbarLeft>
        </div>
    );
}