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
    species:    Species;
    status:     Status;
    location:   Location;
    __typename: ResultTypename;
}

export enum ResultTypename {
    Character = "Character",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    id:         null | string;
    dimension:  Dimension | null;
    name:       string;
    __typename: LocationTypename;
}

export enum LocationTypename {
    Location = "Location",
}

export enum Dimension {
    DimensionC137 = "Dimension C-137",
    ReplacementDimension = "Replacement Dimension",
    TesticleMonsterDimension = "Testicle Monster Dimension",
    Unknown = "unknown",
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
