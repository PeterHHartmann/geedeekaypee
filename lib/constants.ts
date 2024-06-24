import type { CharClass, RaidVariant } from '@/lib/definitions';
import IcecrownCitadelCover from '@/public/image/raids/icecrown-citadel/cover.jpg';
import RubySanctumCover from '@/public/image/raids/ruby-sanctum/cover.jpg';
import type { StaticImageData } from 'next/image';

export const CLASS_TEXT_COLOR: { [key in CharClass['name']]: string; } = {
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

export const CLASS_BG_COLOR: { [key in CharClass['name']]: string; } = {
    'Death Knight': "bg-deathknight",
    'Druid': "bg-druid",
    'Hunter': "bg-hunter",
    'Mage': "bg-mage",
    'Paladin': "bg-paladin",
    'Priest': "bg-priest",
    'Rogue': "bg-rogue",
    'Shaman': "bg-shaman",
    'Warlock': "bg-warlock",
    'Warrior': "bg-warrior"
};

export const RAID_COVER_IMAGES: { [key in RaidVariant['name']]: StaticImageData; } = {
    'Icecrown Citadel': IcecrownCitadelCover,
    'Ruby Sanctum': RubySanctumCover
};

export const SHIMMER = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-indigo-400/10 before:to-transparent`;