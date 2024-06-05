import { wordToMap } from "./word-to-map";

/**
 * Checks if a given word is present in a mapping of letters to their counts.
 *
 * @param {Map<string, number>} mapping - The mapping of letters to their counts.
 * @param {string} word - The word to check for presence in the mapping.
 * @return {boolean} Returns true if the word is present in the mapping, false otherwise.
 */
export function isWordIn(mapping: Map<string, number>) {
  return (word: string): boolean => {
    const map = wordToMap(word);
    for (const [key, value] of map) {
      if (!mapping.has(key)) {
        return false;
      }
      if (undefined !== mapping?.get(key)) {
        if ((mapping.get(key) ?? 0) < value) {
          return false;
        }
      }
    }
    return true;
  };
}
