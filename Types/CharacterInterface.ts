export interface CharacterTypes {
    characters: Characters;
}

export interface Characters {
    results:    Result[];
    __typename: string;
}

export interface Result {
    id:         string;
    name:       string;
    image:      string;
    gender:     Gender;
    __typename: Typename;
}

export enum Typename {
    Character = "Character",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}
