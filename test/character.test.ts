import { Character } from "../src/characters/character";
import * as CharacterDefaults from "../src/characters/defaults";

describe("Character", () => {
  test("Create Character", () => {
    expect.assertions(3);

    const character = new Character({});

    expect(character.name).toBe(CharacterDefaults.DEFAULT_NAME);

    expect(character.age).toEqual(CharacterDefaults.DEFAULT_AGE);
    expect(character.health).toEqual(CharacterDefaults.DEFAULT_HEALTH);
  });
});
