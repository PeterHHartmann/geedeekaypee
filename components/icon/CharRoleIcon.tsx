import TankIcon from '@/public/image/character/role/Tank.webp';
import HealIcon from '@/public/image/character/role/Heal.webp';
import MeleeDPSIcon from '@/public/image/character/role/MeleeDPS.webp';
import RangedDPSIcon from '@/public/image/character/role/RangedDPS.webp';
import Image, { type StaticImageData } from 'next/image';
import type { CharRole } from '@/lib/definitions';
import clsx from 'clsx';

const icons: { [key in CharRole['name']]: StaticImageData } = {
    'Tank': TankIcon,
    'Healer': HealIcon,
    'Melee DPS': MeleeDPSIcon,
    'Ranged DPS': RangedDPSIcon
};

type Props = {
    role_name: CharRole['name'];
    size?: number;
    className?: string;
};

export function CharRoleIcon(props: Props) {
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