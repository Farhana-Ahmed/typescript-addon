export interface BasePuppy {
    // - id
    // - breed
    // - name
    // - birth date

    breed: string;
    name: string;
    birthdate : string;
}

export interface Puppy extends BasePuppy {
   id: number;
}