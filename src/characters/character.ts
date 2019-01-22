import * as DEFAULTS from "./defaults";
import { CharacterRace } from "./race/characterRace";

export interface CharacterInterface {
  // General information
  readonly name: string;
  readonly age: number;
  readonly gender: CharacterGender;
  readonly race: CharacterRace;

  // Stats
  readonly health: number;
}

export interface CharacterOptionsInterface extends CharacterInterface {}

export enum CharacterGender {
  MALE,
  FEMALE
}

export class Character implements CharacterInterface {
  // Interface properties
  readonly name: string;
  readonly gender: CharacterGender;
  readonly age: number;
  readonly health: number;

  constructor(options: CharacterOptionsInterface) {
    this.name = options.name || DEFAULTS.DEFAULT_NAME;
    this.gender = options.gender || DEFAULTS.DEFAULT_GENDER;

    this.age = options.age || DEFAULTS.DEFAULT_AGE;
    this.health = options.health || DEFAULTS.DEFAULT_HEALTH;
  }
}
