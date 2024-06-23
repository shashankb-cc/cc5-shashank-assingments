import { describe, expect, test } from "vitest";
import {
  fibonacciGenerator,
  map,
  filter,
  reduce,
  expect as Expect,
  Address,
  OfficeAddress,
} from "./typescript-assignment";
describe("Testing fibonacci generators", () => {
  test("Test to check the generated fibonacci series", () => {
    expect(fibonacciGenerator(-2)).toEqual([]);
    expect(fibonacciGenerator(0)).toEqual([]);
    expect(fibonacciGenerator(1)).toEqual([0]);
    expect(fibonacciGenerator(2)).toEqual([0, 1]);
    expect(fibonacciGenerator(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  test("Map function tests", () => {
    const numbers = [1, 2, 3, 4];
    const squares = map<number, number>(numbers, (number) => number + 1);
    expect(squares).toEqual([2, 3, 4, 5]);

    const strings = map<number, string>(numbers, (number) => String(number));
    expect(strings).toEqual(["1", "2", "3", "4"]);
  });
  test("Filter functions tests", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const evenNumbers = filter<number>(array, (number) => number % 2 === 0);
    expect(evenNumbers).toEqual([2, 4, 6]);

    const words = ["get", "set", "go", "start"];
    const wordsWithSpecificLength = filter<string>(
      words,
      (word) => word.length === 3
    );
    expect(wordsWithSpecificLength).toEqual(["get", "set"]);
  });
  test("Reduce functon tests", () => {
    const numbers = [2, 4, 6, 8, 10];
    const totalSum = reduce(
      numbers,
      (accumulated, number) => accumulated + number,
      0
    );
    expect(totalSum).toBe(30);
    const characters = ["S", "h", "a", "s", "h", "a", "n", "k"];
    const accumulated = reduce(
      characters,
      (accumulated, char) => accumulated + char,
      ""
    );
    expect(accumulated).toBe("Shashank");
  });
  test("tobe and not chaining tests", () => {
    expect(() => {
      Expect<number>(1).not.toBe(1);
    }).throws();
    expect(Expect<number>(1).tobe(1)).toBe(true);
    Expect<string>("Shashank").not.toBe("Shash");
  });
  test("Tests on interface extending from another interface", () => {
    const address: Address = {
      doorNumber: 45,
      stree1: "1st cross",
      pincode: 573121,
      state: "Karnataka",
      country: "India",
    };
    expect(address).toHaveProperty("doorNumber");
    expect(address).toHaveProperty("stree1");
    expect(address).toHaveProperty("pincode");
    expect(address).toHaveProperty("state");
    expect(address).toHaveProperty("country");
    expect(address).not.toHaveProperty("website_link");
    const officeAddress: OfficeAddress = {
      doorNumber: 16,
      stree1: "BM road",
      stree2: "2nd cross",
      pincode: 573007,
      state: "Karnataka",
      country: "India",
      website_link: "https://www.codecrafttech.com/",
    };
    expect(officeAddress).toHaveProperty("doorNumber");
    expect(officeAddress).toHaveProperty("stree1");
    expect(officeAddress).toHaveProperty("pincode");
    expect(officeAddress).toHaveProperty("state");
    expect(officeAddress).toHaveProperty("country");
    expect(officeAddress).toHaveProperty("website_link");
  });
});
