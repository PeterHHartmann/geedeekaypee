import type { CharacterClass, CharacterSpecialization } from '@/lib/definitions';
import DK_Blood_icon from '@/public/image/specializations/DK_Blood.jpg';
import DK_Unholy_icon from '@/public/image/specializations/DK_Blood.jpg';
import DK_Frost_icon from '@/public/image/specializations/DK_Blood.jpg';
import DUDU_FeralBear_icon from '@/public/image/specializations/DUDU_FeralBear.jpg';
import DUDU_FeralCat_icon from '@/public/image/specializations/DUDU_FeralCat.jpg';
import DUDU_Balance_icon from '@/public/image/specializations/DUDU_Balance.jpg';
import DUDU_Restoration_icon from '@/public/image/specializations/DUDU_Restoration.jpg';
import HUNT_Marksmanship_icon from '@/public/image/specializations/HUNT_Marksmanship.jpg';
import HUNT_BeastMastery_icon from '@/public/image/specializations/HUNT_Beastmastery.jpg';
import HUNT_Survival_icon from '@/public/image/specializations/HUNT_Survival.jpg';
import MAGE_Frost_icon from '@/public/image/specializations/MAGE_Frost.jpg';
import MAGE_Arcane_icon from '@/public/image/specializations/MAGE_Arcane.jpg';
import MAGE_Fire_icon from '@/public/image/specializations/MAGE_Fire.jpg';
import PALA_Protection_icon from '@/public/image/specializations/PALA_Protection.jpg';
import PALA_Holy_icon from '@/public/image/specializations/PALA_Holy.jpg';
import PALA_Retribution_icon from '@/public/image/specializations/PALA_Retribution.jpg';
import PRIEST_Discipline_icon from '@/public/image/specializations/PRI_Discipline.jpg';
import PRIEST_Holy_icon from '@/public/image/specializations/PRI_Holy.jpg';
import PRIEST_Shadow_icon from '@/public/image/specializations/PRI_Shadow.jpg';
import ROGUE_Combat_icon from '@/public/image/specializations/ROG_Combat.jpg';
import ROGUE_Assassination_icon from '@/public/image/specializations/ROG_Assassination.jpg';
import ROGUE_Subtlety_icon from '@/public/image/specializations/ROG_Subtlety.jpg';
import SHAM_Restoration_icon from '@/public/image/specializations/SHAM_Restoration.jpg';
import SHAM_Elemental_icon from '@/public/image/specializations/SHAM_Elemental.jpg';
import SHAM_Enhancement_icon from '@/public/image/specializations/SHAM_Enhancement.jpg';
import LOCK_Destruction_icon from '@/public/image/specializations/LOCK_Destruction.jpg';
import LOCK_Demonology_icon from '@/public/image/specializations/LOCK_Demonology.jpg';
import LOCK_Afflication_icon from '@/public/image/specializations/LOCK_Affliction.jpg';
import WARR_Protection_icon from '@/public/image/specializations/WARR_Protection.jpg';
import WARR_Arms_icon from '@/public/image/specializations/WARR_Arms.jpg';
import WARR_Fury_icon from '@/public/image/specializations/WARR_Fury.jpg';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

const iconTable: { [key in CharacterClass['name']]: { [key: string]: StaticImageData; } } = {
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
    class_name: CharacterClass['name'];
    spec_name: CharacterSpecialization['name'];
    size?: number;
};

export function CharacterSpecIcon({ class_name, spec_name, size }: Props) {
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