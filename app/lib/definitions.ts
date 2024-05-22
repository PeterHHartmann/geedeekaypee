export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type CharacterRace = {
    id: number;
    name: string;
};

export type CharacterClass = {
    id: number;
    name: string;
};

export type CharacterRole = {
    id: number;
    name: string;
};

export type RosterCharacter = {
    id: number;
    name: string;
    classId: number;
    roleList: CharacterRole[];
};