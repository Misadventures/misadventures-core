import { Weapon } from "../src/weapons/weapon";
import * as WeaponDefaults from "../src/weapons/defaults";

describe("Weapon", () => {
  test("Create Weapon", () => {
    expect.assertions(2);

    const weapon = new Weapon({});

    expect(weapon.name).toBe(WeaponDefaults.DEFAULT_NAME);
    expect(weapon.damage).toEqual(WeaponDefaults.DEFAULT_DAMAGE);
  });
});
