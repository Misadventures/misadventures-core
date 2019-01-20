import * as DEFAULTS from "./defaults";

export interface CharacterInterface {
  // General information
  readonly name?: string;
  readonly age?: number;

  // Stats
  readonly health?: number;
}

export interface CharacterOptionsInterface extends CharacterInterface {}

export class Character implements CharacterInterface {
  // Interface properties
  readonly name: string;
  readonly age: number;
  readonly health: number;

  constructor(options: CharacterOptionsInterface) {
    this.name = options.name || DEFAULTS.DEFAULT_NAME;
    this.age = options.age || DEFAULTS.DEFAULT_AGE;
    this.health = options.health || DEFAULTS.DEFAULT_HEALTH;
  }
}
