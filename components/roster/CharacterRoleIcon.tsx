import DpsIcon from '@/public/image/player-roles/Dps.webp';
import TankIcon from '@/public/image/player-roles/Tank.webp';
import HealIcon from '@/public/image/player-roles/Heal.webp';
import Image from 'next/image';
import type { CharRole } from '@/lib/definitions';
import clsx from 'clsx';

const icons = {
    'Tank': TankIcon,
    'Healer': HealIcon,
    'Dps': DpsIcon,
};

type Props = {
    role_name: CharRole['name'];
    size?: number;
    className?: string;
};

export function CharacterRoleIcon(props: Props) {
    return (
        <div className={`flex justify-center items-center`}>
            <Image
                className={clsx(
                    'object-fit brightness-125 rounded-full border-1 border-slate-700',
                    props.className
                )}
                src={icons[props.role_name]}
                width={props.size || 26}
                height={props.size || 26}
                alt={`${props.role_name} character`}
            />
        </div>
    );
}