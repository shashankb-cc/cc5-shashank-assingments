import { describe, expect } from "vitest";
import { isEqual } from "lodash";
import { linkedListGenerator, LinkedList } from "./linkedListGenerator";
describe("Tests implemeneted for iterable object and generator for linked-list", () => {
  test("Test for iterable object on linked list", () => {
    let linkedList = new LinkedList();
    linkedList.addItemToList(1);
    linkedList.addItemToList("two");
    linkedList.addItemToList([3]);
    linkedList.addItemToList({ name: "shashank", age: 22 });
    let result = [];
    for (let node of linkedList) {
      result.push(node);
    }
    expect(result).toEqual([
      1,
      "two",
      [3],
      {
        age: 22,
        name: "shashank",
      },
    ]);
  });
  test("Tests for generator for linked list ", () => {
    let linkedList = new LinkedList();
    linkedList.addItemToList(1);
    linkedList.addItemToList("two");
    linkedList.addItemToList([3]);
    linkedList.addItemToList({ name: "shashank", age: 22 });
    const linkedListIterator = linkedListGenerator(linkedList);
    expect([...linkedListIterator]).toEqual([
      1,
      "two",
      [3],
      {
        age: 22,
        name: "shashank",
      },
    ]);
  });
});
