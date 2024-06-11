import type { CharClass, ClassTalentSpec } from '@/lib/definitions';

import DK_Blood_icon from '@/public/image/character/class/death-knight/talent-spec/blood.jpg';
import DK_Unholy_icon from '@/public/image/character/class/death-knight/talent-spec/unholy.jpg';
import DK_Frost_icon from '@/public/image/character/class/death-knight/talent-spec/frost.jpg';

import DUDU_FeralBear_icon from '@/public/image/character/class/druid/talent-spec/feral-bear.jpg';
import DUDU_FeralCat_icon from '@/public/image/character/class/druid/talent-spec/feral-cat.jpg';
import DUDU_Balance_icon from '@/public/image/character/class/druid/talent-spec/balance.jpg';
import DUDU_Restoration_icon from '@/public/image/character/class/druid/talent-spec/restoration.jpg';

import HUNT_Marksmanship_icon from '@/public/image/character/class/hunter/talent-spec/marksmanship.jpg';
import HUNT_BeastMastery_icon from '@/public/image/character/class/hunter/talent-spec/beastmastery.jpg';
import HUNT_Survival_icon from '@/public/image/character/class/hunter/talent-spec/survival.jpg';

import MAGE_Frost_icon from '@/public/image/character/class/mage/talent-spec/frost.jpg';
import MAGE_Arcane_icon from '@/public/image/character/class/mage/talent-spec/arcane.jpg';
import MAGE_Fire_icon from '@/public/image/character/class/mage/talent-spec/fire.jpg';

import PALA_Protection_icon from '@/public/image/character/class/paladin/talent-spec/protection.jpg';
import PALA_Holy_icon from '@/public/image/character/class/paladin/talent-spec/holy.jpg';
import PALA_Retribution_icon from '@/public/image/character/class/paladin/talent-spec/retribution.jpg';

import PRIEST_Discipline_icon from '@/public/image/character/class/priest/talent-spec/discipline.jpg';
import PRIEST_Holy_icon from '@/public/image/character/class/priest/talent-spec/holy.jpg';
import PRIEST_Shadow_icon from '@/public/image/character/class/priest/talent-spec/shadow.jpg';

import ROGUE_Combat_icon from '@/public/image/character/class/rogue/talent-spec/combat.jpg';
import ROGUE_Assassination_icon from '@/public/image/character/class/rogue/talent-spec/assassination.jpg';
import ROGUE_Subtlety_icon from '@/public/image/character/class/rogue/talent-spec/subtlety.jpg';

import SHAM_Restoration_icon from '@/public/image/character/class/shaman/talent-spec/restoration.jpg';
import SHAM_Elemental_icon from '@/public/image/character/class/shaman/talent-spec/elemental.jpg';
import SHAM_Enhancement_icon from '@/public/image/character/class/shaman/talent-spec/enhancement.jpg';

import LOCK_Destruction_icon from '@/public/image/character/class/warlock/talent-spec/destruction.jpg';
import LOCK_Demonology_icon from '@/public/image/character/class/warlock/talent-spec/demonology.jpg';
import LOCK_Afflication_icon from '@/public/image/character/class/warlock/talent-spec/affliction.jpg';

import WARR_Protection_icon from '@/public/image/character/class/warrior/talent-spec/protection.jpg';
import WARR_Arms_icon from '@/public/image/character/class/warrior/talent-spec/arms.jpg';
import WARR_Fury_icon from '@/public/image/character/class/warrior/talent-spec/fury.jpg';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';

const iconTable: { [key in CharClass['name']]: { [key: string]: StaticImageData; } } = {
    'Death Knight': {
        'Blood': DK_Blood_icon,
        'Unholy': DK_Unholy_icon,
        'Frost': DK_Frost_icon,
    },
    'Druid': {
        'Feral Bear': DUDU_FeralBear_icon,
        'Feral Cat': DUDU_FeralCat_icon,
        'Balance': DUDU_Balance_icon,
        'Restoration': DUDU_Restoration_icon,
    },
    'Hunter': {
        'Marksmanship': HUNT_Marksmanship_icon,
        'Beast Mastery': HUNT_BeastMastery_icon,
        'Survival': HUNT_Survival_icon,
    },
    'Mage': {
        'Frost': MAGE_Frost_icon,
        'Arcane': MAGE_Arcane_icon,
        'Fire': MAGE_Fire_icon,
    },
    'Paladin': {
        'Protection': PALA_Protection_icon,
        'Holy': PALA_Holy_icon,
        'Retribution': PALA_Retribution_icon,
    },
    'Priest': {
        'Discipline': PRIEST_Discipline_icon,
        'Holy': PRIEST_Holy_icon,
        'Shadow': PRIEST_Shadow_icon,
    },
    'Rogue': {
        'Combat': ROGUE_Combat_icon,
        'Assassination': ROGUE_Assassination_icon,
        'Subtlety': ROGUE_Subtlety_icon,
    },
    'Shaman': {
        'Restoration': SHAM_Restoration_icon,
        'Elemental': SHAM_Elemental_icon,
        'Enhancement': SHAM_Enhancement_icon,
    },
    'Warlock': {
        'Destruction': LOCK_Destruction_icon,
        'Demonology': LOCK_Demonology_icon,
        'Affliction': LOCK_Afflication_icon,
    },
    'Warrior': {
        'Protection': WARR_Protection_icon,
        'Arms': WARR_Arms_icon,
        'Fury': WARR_Fury_icon
    },
};

type Props = {
    class_name: CharClass['name'];
    spec_name: ClassTalentSpec['name'];
    size?: number;
};

export function CharTalentSpecIcon({ class_name, spec_name, size }: Props) {
    return (
        <div className='aspect-square flex justify-center items-center'>
            <Image
                src={iconTable[class_name][spec_name]}
                width={size || 26}
                height={size || 26}
                className='object-fill'
                alt={`${class_name} class specialization ${spec_name} icon`}
            />
        </div>
    );
}