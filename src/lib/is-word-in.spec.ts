import { isWordIn } from "./is-word-in";
import { describe, it, expect } from "vitest";

describe("isWordIn", () => {
  it("should return true for a word that is in the mapping", () => {
    const mapping = new Map<string, number>();
    mapping.set("a", 1);
    mapping.set("b", 2);
    mapping.set("c", 3);

    const isIn = isWordIn(mapping);
    expect(isIn("abc")).toBe(true);
  });

  it("should return false for a word that is not in the mapping", () => {
    const mapping = new Map<string, number>();
    mapping.set("a", 1);
    mapping.set("b", 2);
    mapping.set("c", 3);

    const isIn = isWordIn(mapping);
    expect(isIn("abd")).toBe(false);
  });

  it("should return false for a word that has more of a letter than in the mapping", () => {
    const mapping = new Map<string, number>();
    mapping.set("a", 1);
    mapping.set("b", 2);
    mapping.set("c", 3);

    const isIn = isWordIn(mapping);
    expect(isIn("aaaa")).toBe(false);
  });

  it("should return true for a word that has fewer of a letter than in the mapping", () => {
    const mapping = new Map<string, number>();
    mapping.set("a", 1);
    mapping.set("b", 2);
    mapping.set("c", 3);

    const isIn = isWordIn(mapping);
    expect(isIn("a")).toBe(true);
  });
});
