import { CharRoleIcon } from '@/components/icon/CharRoleIcon';
import { CharTalentSpecIcon } from '@/components/icon/CharTalentSpecIcon';
import { CLASS_TEXT_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
    character: RosterCharacter;
    children?: ReactNode;
    className?: string;
};

export function CharacterRow({ children, character, className }: Props) {
    return (
        <li className={
            clsx(
                CharacterRowStyle,
                className
            )}
        >
            <div className='flex items-center w-full h-full gap-1'>
                <CharRoleIcon role_name={character.role_name} />
                <CharTalentSpecIcon class_name={character.class_name} spec_name={character.spec_name} />
                <p className={`${CLASS_TEXT_COLOR[character.class_name]}`}>{character.name}</p>
            </div>
            {children}
        </li>
    );
}

export const CharacterRowStyle = 'flex flex-nowrap items-center gap-1 w-full h-[2.375rem] border-b-1 border-slate-500 dark:border-slate-700 hover:bg-slate-600 dark:hover:bg-slate-700 pl-1 pr-2';
