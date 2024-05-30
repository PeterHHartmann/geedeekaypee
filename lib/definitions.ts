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

export type CharacterRole = {
    id: string;
    name: 'Tank' | 'Healer' | 'Dps';
};

export type RosterCharacter = {
    id: string;
    name: string;
    class_name: CharacterClass['name'];
    role_name: CharacterRole['name'];
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