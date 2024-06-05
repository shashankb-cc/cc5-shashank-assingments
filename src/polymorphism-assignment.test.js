import { describe, expect, test } from "vitest";
import { alphabetIteratorCreator, alphabetIterable } from "./polymorphism-assignment";

describe("Day-1 assignments on Iterable and Iterator objects", () => {
  test("Test block for test iterator object", () => {
    let iteratorResult = alphabetIteratorCreator.next();
    let alphabets = [];
    while (true) {
      if (iteratorResult.done) {
        break;
      }
      alphabets.push(iteratorResult.value);
      iteratorResult = alphabetIteratorCreator.next();
    }
    expect(alphabets).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]);
  });
  test("Test block to test iterable object", () => {
    let alphabets = [];
    for (let char of alphabetIterable) {
      alphabets.push(char);
    }
    expect(alphabets).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]);

    const alphabetsUsingSpread = [...alphabetIterable];
    expect(alphabetsUsingSpread).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]);
  });
});
