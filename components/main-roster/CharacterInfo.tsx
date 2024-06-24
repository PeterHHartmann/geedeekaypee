import { CharRoleIcon } from '@/components/icon/CharRoleIcon';
import { CharTalentSpecIcon } from '@/components/icon/CharTalentSpecIcon';
import { CLASS_BG_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import clsx from 'clsx';

type Props = {
    character: RosterCharacter;
    className?: string;
};

export function CharacterInfo({
    character,
    className
}: Props) {
    return (
        <div className={clsx(
            `flex px-1 items-center w-full h-full gap-1 ${CLASS_BG_COLOR[character.class_name]}`,
            className
        )}>
            <CharRoleIcon role_name={character.role_name} />
            <CharTalentSpecIcon class_name={character.class_name} spec_name={character.spec_name} />
            <p className={`font-medium text-sm text-slate-950`}>{character.name}</p>
        </div>
    );
}