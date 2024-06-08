import Image from 'next/image';
import DeathKnightIcon from '@/public/image/character/class/deathknight/class-icon.webp';
import DruidIcon from '@/public/image/character/class/druid/class-icon.webp';
import HunterIcon from '@/public/image/character/class/hunter/class-icon.webp';
import MageIcon from '@/public/image/character/class/mage/class-icon.webp';
import PaladinIcon from '@/public/image/character/class/paladin/class-icon.webp';
import PriestIcon from '@/public/image/character/class/priest/class-icon.webp';
import RogueIcon from '@/public/image/character/class/rogue/class-icon.webp';
import ShamanIcon from '@/public/image/character/class/shaman/class-icon.webp';
import WarlockIcon from '@/public/image/character/class/warlock/class-icon.webp';
import WarriorIcon from '@/public/image/character/class/warrior/class-icon.webp';
import type { CharClass } from '@/lib/definitions';

type Props = {
    name: CharClass['name'];
    size?: number;
};

const iconTable = {
    'Death Knight': DeathKnightIcon,
    'Druid': DruidIcon,
    'Hunter': HunterIcon,
    'Mage': MageIcon,
    'Paladin': PaladinIcon,
    'Priest': PriestIcon,
    'Rogue': RogueIcon,
    'Shaman': ShamanIcon,
    'Warlock': WarlockIcon,
    'Warrior': WarriorIcon
};

export function CharacterClassIcon({ name, size }: Props) {

    const icon = iconTable[name];

    return (
        <div className='aspect-square flex justify-center items-center'>
            <Image
                src={icon}
                width={size || 26}
                height={size || 26}
                className='object-fill'
                alt={`${name} class icon`}
            />
        </div>
    );
}