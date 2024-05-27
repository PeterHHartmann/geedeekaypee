import Image from 'next/image';
import DeathKnightIcon from '@/public/image/player-classes/deathknight/deathknight-icon.webp';
import DruidIcon from '@/public/image/player-classes/druid/druid-icon.webp';
import HunterIcon from '@/public/image/player-classes/hunter/hunter-icon.webp';
import MageIcon from '@/public/image/player-classes/mage/mage-icon.webp';
import PaladinIcon from '@/public/image/player-classes/paladin/paladin-icon.webp';
import PriestIcon from '@/public/image/player-classes/priest/priest-icon.webp';
import RogueIcon from '@/public/image/player-classes/rogue/rogue-icon.webp';
import ShamanIcon from '@/public/image/player-classes/shaman/shaman-icon.webp';
import WarlockIcon from '@/public/image/player-classes/warlock/warlock-icon.webp';
import WarriorIcon from '@/public/image/player-classes/warrior/warrior-icon.webp';
import type { CharacterClass } from '@/app/lib/definitions';


type Props = {
    name: CharacterClass['name'];
    size?: number;
    className?: string;
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

export function CharacterClassIcon({ name, className, size }: Props) {

    const icon = iconTable[name];

    return (
        <div className='flex justify-center items-center'>
            <Image
                src={icon}
                width={size || 26}
                height={size || 26}
                className='aspect-square'
                alt={`${name} class icon`}
            />
        </div>
    );
}