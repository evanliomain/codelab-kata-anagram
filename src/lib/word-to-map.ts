/**
 * Converts a word into a Map where the keys are the letters of the word and the values are the counts of each letter.
 *
 * @param {string} word - The word to be converted into a Map.
 * @return {Map<string, number>} - A Map where the keys are the letters of the word and the values are the counts of each letter.
 */

export function wordToMap(word: string): Map<string, number> {
  const map = new Map();
  for (const letter of word) {
    const count = map.get(letter) || 0;
    map.set(letter, count + 1);
  }
  return map;
}
