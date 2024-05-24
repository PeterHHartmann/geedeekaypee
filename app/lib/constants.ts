import type { CharacterClass } from '@/app/lib/definitions';

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