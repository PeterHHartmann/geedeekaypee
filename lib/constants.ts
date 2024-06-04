import type { CharacterClass, Raid } from '@/lib/definitions';
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

export const SHIMMER = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-indigo-400/10 before:to-transparent`;