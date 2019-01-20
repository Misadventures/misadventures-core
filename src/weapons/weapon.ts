import * as DEFAULTS from "./defaults";

export interface WeaponInterface {
  readonly name?: string;
  readonly damage?: number;
}

export interface WeaponOptionsInterface extends WeaponInterface {}

export class Weapon implements WeaponInterface {
  readonly name: string;
  readonly damage: number;

  constructor(options: WeaponOptionsInterface) {
    this.name = options.name || DEFAULTS.DEFAULT_NAME;
    this.damage = options.damage || DEFAULTS.DEFAULT_DAMAGE;
  }
}
