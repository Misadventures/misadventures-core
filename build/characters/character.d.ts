export interface CharacterInterface {
    readonly name?: string;
    readonly age?: number;
    readonly health?: number;
}
export interface CharacterOptionsInterface extends CharacterInterface {
}
export declare class Character implements CharacterInterface {
    readonly name: string;
    readonly age: number;
    readonly health: number;
    constructor(options: CharacterOptionsInterface);
}
