export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type CharClass = {
    id: string;
    name: 'Death Knight' | 'Druid' | 'Hunter' | 'Mage' | 'Paladin' | 'Priest' | 'Rogue' | 'Shaman' | 'Warlock' | 'Warrior';
};

export type CharSpec = {
    id: string;
    name: 'Blood' | 'Unholy' | 'Frost' | 'Feral Bear' | 'Feral Cat' | 'Balance' | 'Restoration' | 'Marksmanship' | 'Beast Mastery' | 'Survival' | 'Frost' | 'Arcane' | 'Fire' | 'Protection' | 'Holy' | 'Retribution' | 'Discipline' | 'Holy' | 'Shadow' | 'Combat' | 'Assassination' | 'Subtlety' | 'Restoration' | 'Elemental' | 'Enhancement' | 'Destruction' | 'Demonology' | 'Affliction' | 'Protection' | 'Arms' | 'Fury';
    class_id: CharClass['id'];
};

export type CharRole = {
    id: string;
    name: 'Tank' | 'Healer' | 'Melee DPS' | 'Ranged DPS';
};

export type RosterCharacter = {
    id: string;
    name: string;
    class_id: CharClass['id'];
    class_name: CharClass['name'];
    spec_id: CharSpec['id'];
    spec_name: CharSpec['name'];
    role_id: CharRole['id'];
    role_name: CharRole['name'];
    user_email: User['email'];
};

export type Raid = {
    id: string;
    name: string;
    size: number;
    difficulty: string;
};

export type RaidTemplate = {
    id: string;
    name: string;
    size: number;
    difficulty: string;
    raid_id: string;
    raid_name: string;
};

export type RaidTemplatePosition = {
    id: string;
    template_id: RaidTemplate['id'],
    position: number;
    priority_list: string[];
};

export type CharRoleOption = {
    role_id: CharRole['id'];
    role_name: CharRole['name'];
};

export type CharRoleOptionsForClasses = {
    [class_id: CharClass['id']]: CharRoleOption[];
};

export type MutationResult = {
    success: boolean;
    messages?: string[];
} | undefined;