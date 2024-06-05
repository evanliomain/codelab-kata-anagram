import { anagram } from "./anagram";
import { WORDS_EN } from "./words";
import { expect, describe, it } from "vitest";

describe("anagram", () => {
  it.each`
    word              | includes
    ${"jakilopan"}    | ${["kilo japan", "japan kilo"]}
    ${"tangoeternal"} | ${["tango eternal", "eternal tango"]}
  `("word: $word, includes: $includes", ({ word, includes }) => {
    const results = anagram(word, WORDS_EN);
    expect(results.length).toBeGreaterThan(0);
    includes.forEach((include: string) => {
      expect(results).includes(include);
    });
  });
});
