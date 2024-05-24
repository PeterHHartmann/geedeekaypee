import DpsIcon from '@/public/image/player-roles/Dps.webp';
import TankIcon from '@/public/image/player-roles/Tank.webp';
import HealIcon from '@/public/image/player-roles/Heal.webp';
import Image from 'next/image';
import type { CharacterRole } from '@/app/lib/definitions';
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
        <Image
            className={clsx(
                'rounded-full outline outline-1 outline-primary-550',
                props.className
            )}
            src={icons[props.role_name]}
            width={props.size || 25}
            height={props.size || 25}
            alt={`${props.role_name} character`}
        />
    );
}