import DpsIcon from '@/public/image/player-roles/Dps.webp';
import TankIcon from '@/public/image/player-roles/Tank.webp';
import HealIcon from '@/public/image/player-roles/Heal.webp';
import Image from 'next/image';
import type { CharacterRole } from '@/app/lib/definitions';

const icons = [
    DpsIcon,
    TankIcon,
    HealIcon
];

type Props = {
    role: CharacterRole;
    size?: number;
};

export default function PlayerRoleIcon(props: Props) {
    return (
        <Image
            className='rounded-full outline outline-1 outline-primary-550'
            src={icons[props.role.id - 1]}
            width={props.size || 25}
            height={props.size || 25}
            alt={`Player is ${props.role.name} role`}
        />
    );
}