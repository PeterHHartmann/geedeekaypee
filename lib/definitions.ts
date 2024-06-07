export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type CharacterClass = {
    id: string;
    name: 'Death Knight' | 'Druid' | 'Hunter' | 'Mage' | 'Paladin' | 'Priest' | 'Rogue' | 'Shaman' | 'Warlock' | 'Warrior';
};

export type CharacterSpecialization = {
    id: string;
    name: 'Blood' | 'Unholy' | 'Frost' | 'Feral Bear' | 'Feral Cat' | 'Balance' | 'Restoration' | 'Marksmanship' | 'Beast Mastery' | 'Survival' | 'Frost' | 'Arcane' | 'Fire' | 'Protection' | 'Holy' | 'Retribution' | 'Discipline' | 'Holy' | 'Shadow' | 'Combat' | 'Assassination' | 'Subtlety' | 'Restoration' | 'Elemental' | 'Enhancement' | 'Destruction' | 'Demonology' | 'Affliction' | 'Protection' | 'Arms' | 'Fury';
    class_id: CharacterClass['id'];
};

export type CharacterRole = {
    id: string;
    name: 'Tank' | 'Healer' | 'Dps';
};

export type RosterCharacter = {
    id: string;
    name: string;
    class_id: CharacterClass['id'];
    class_name: CharacterClass['name'];
    spec_id: CharacterSpecialization['id'];
    spec_name: CharacterSpecialization['name'];
    role_id: CharacterRole['id'];
    role_name: CharacterRole['name'];
    user_email: User['email'];
};

export type Raid = {
    id: string;
    name: 'Icecrown Citadel' | 'Ruby Sanctum';
};

export type CharacterRoleOption = {
    role_id: CharacterRole['id'];
    role_name: CharacterRole['name'];
};

export type CharacterClassRoleOptions = {
    [class_id: CharacterClass['id']]: CharacterRoleOption[];
};

export type MutationResult = {
    success: boolean;
    messages?: string[];
} | undefined;