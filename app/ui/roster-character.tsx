import { CLASS_TEXT_COLOR } from '@/app/lib/constants';
import type { CharacterRole, RosterCharacter } from '@/app/lib/definitions';
import PlayableClassIcon from '@/app/ui/player-class-icon';
import PlayerRoleIcon from '@/app/ui/player-role-icon';

type Props = {
    character: RosterCharacter;
};

export default function RosterCharacter({ character }: Props) {

    return (
        <div className='flex gap-1 mb-1 pb-1 px-1 border-b-2 border-primary-700 object-cover w-full'>
            <PlayableClassIcon id={character.classId} />
            <p className={CLASS_TEXT_COLOR[character.classId - 1]}>{character.name}</p>
            <div id='role-container' className='flex gap-1 ml-auto'>
                {character.roleList.map((role, index) => <PlayerRoleIcon key={`role-icon-character${index}-role${role.id}`} role={role} />)}
            </div>
        </div>
    );
}