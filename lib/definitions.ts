export type ServerMutationResult = {
    success: boolean;
    messages?: string[];
} | undefined;

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

export type ClassTalentSpec = {
    id: string;
    name: 'Blood' | 'Unholy' | 'Frost' | 'Feral Bear' | 'Feral Cat' | 'Balance' | 'Restoration' | 'Marksmanship' | 'Beast Mastery' | 'Survival' | 'Frost' | 'Arcane' | 'Fire' | 'Protection' | 'Holy' | 'Retribution' | 'Discipline' | 'Holy' | 'Shadow' | 'Combat' | 'Assassination' | 'Subtlety' | 'Restoration' | 'Elemental' | 'Enhancement' | 'Destruction' | 'Demonology' | 'Affliction' | 'Protection' | 'Arms' | 'Fury';
    class_id: CharClass['id'];
};

export type CharRole = {
    id: string;
    name: 'Tank' | 'Healer' | 'Melee DPS' | 'Ranged DPS';
};

export type CharRoleOption = {
    role_id: CharRole['id'];
    role_name: CharRole['name'];
};

export type CharRoleOptionsForClasses = {
    [class_id: CharClass['id']]: CharRoleOption[];
};

export type RosterCharacter = {
    id: string;
    name: string;
    class_id: CharClass['id'];
    class_name: CharClass['name'];
    spec_id: ClassTalentSpec['id'];
    spec_name: ClassTalentSpec['name'];
    role_id: CharRole['id'];
    role_name: CharRole['name'];
    user_email: User['email'];
};

export type RaidVariant = {
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
    raid_variant_id: string;
    raid_variant_name: string;
};

export type RaidTemplateFull = {
    id: string;
    name: string;
    size: number;
    difficulty: string;
    raid_variant_id: string;
    raid_variant_name: string;
    positions: RaidTemplateRosterPosition[];
};

export type RaidTemplateRosterPosition = {
    id: string;
    raid_template_id: RaidTemplate['id'],
    position: number;
    priority: number;
    class_id: CharClass['id'];
    role_id: CharRole['id'];
    spec_id: ClassTalentSpec['id'];
};

export type RaidTemplateRosterPositions = {
    [raid_template_id: RaidTemplate['id']]: RaidTemplateRosterPosition[];
};

export type RaidEvent = {
    id: string;
    raid_template_id: RaidTemplate['id'],
    title: string;
    date: string;
    time: string;
    is_public: boolean;
};

export type RaidEventRosterPosition = {
    id: string;
    raid_event_id: RaidEvent['id'];
    position: number;
    main_roster_id: RosterCharacter['id'];
};

export type RaidTemplateAssignment = {
    id: string;
    raid_template_id: RaidTemplate['id'],
    name: string;
    assignment_group: number;
    position: number;
    priority: number;
    class_id: CharClass['id'];
    role_id: CharRole['id'];
    spec_id: ClassTalentSpec['id'];
};

export type RaidEventAssignment = {
    id: string;
    raid_event_id: RaidEvent['id'];
    position: number;
    group: number;
    main_roster_id: RosterCharacter['id'];
};