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


type Props = {
    id: number;
};

const iconTable = [
    DeathKnightIcon,
    DruidIcon,
    HunterIcon,
    MageIcon,
    PaladinIcon,
    PriestIcon,
    RogueIcon,
    ShamanIcon,
    WarlockIcon,
    WarriorIcon,
];

export default function PlayableClassIcon(props: Props) {

    const icon = iconTable[props.id - 1];

    return (
        <Image
            src={icon}
            width={25}
            height={25}
            alt='Death Knight class icon'
        />
    );
}