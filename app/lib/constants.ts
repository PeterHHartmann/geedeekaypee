import type { CharacterClass, Raid } from '@/app/lib/definitions';
import icc from '@/public/image/raids/icc/icc.jpg';
import rubysanctum from '@/public/image/raids/rubysanctum/rubysanctum.jpg';
import type { StaticImageData } from 'next/image';

export const CLASS_TEXT_COLOR: { [key in CharacterClass['name']]: string; } = {
    'Death Knight': "text-deathknight",
    'Druid': "text-druid",
    'Hunter': "text-hunter",
    'Mage': "text-mage",
    'Paladin': "text-paladin",
    'Priest': "text-priest",
    'Rogue': "text-rogue",
    'Shaman': "text-shaman",
    'Warlock': "text-warlock",
    'Warrior': "text-warrior"
};

export const RAID_IMAGES: { [key in Raid['name']]: StaticImageData; } = {
    'Icecrown Citadel': icc,
    'Ruby Sanctum': rubysanctum
}; 