import { isWordIn } from "./is-word-in";
import { wordToMap } from "./word-to-map";

export function anagram(word: string, words: string[]): string[] {
  const matching = isWordIn(wordToMap(word));

  const firstMatchingWords = words.filter(matching);

  return firstMatchingWords
    .flatMap((w1) =>
      firstMatchingWords.filter((w2) => w1 !== w2).map((w2) => [w1, w2]),
    )
    .filter(([w1, w2]) => matching(w1 + w2))
    .flatMap(([w1, w2]) => [w1 + " " + w2, w2 + " " + w1]);
}
