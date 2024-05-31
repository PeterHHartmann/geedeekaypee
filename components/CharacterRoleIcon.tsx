import DpsIcon from '@/public/image/player-roles/Dps.webp';
import TankIcon from '@/public/image/player-roles/Tank.webp';
import HealIcon from '@/public/image/player-roles/Heal.webp';
import Image from 'next/image';
import type { CharacterRole } from '@/lib/definitions';
import clsx from 'clsx';

const icons = {
    'Tank': TankIcon,
    'Healer': HealIcon,
    'Dps': DpsIcon,
};

type Props = {
    role_name: CharacterRole['name'];
    size?: number;
    className?: string;
};

export function CharacterRoleIcon(props: Props) {
    return (
        <div className={`w-7 h-7 rounded-full border-2 border-slate-800`}>
            <Image
                className={clsx(
                    'object-cover',
                    props.className
                )}
                src={icons[props.role_name]}
                width={props.size || 24}
                height={props.size || 24}
                alt={`${props.role_name} character`}
            />
        </div>
    );
}