import { describe, test, expect } from "vitest";
import { LinkedList } from "./generic-linkedlist";

describe("Linked List test Number Type and string type", () => {
  test("Adding Items to Linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.insertAfter(10);
    linkedList.insertAfter(11);
    linkedList.insertBefore(9);

    const items = linkedList.getArrayFromList();
    expect(items).toEqual([9, 10, 11]);
  });
  test("", () => {
    const linkedList = new LinkedList<number>();
    const node1 = linkedList.insertAfter(98);
    const node2 = linkedList.insertAfter(99);
    const node3 = linkedList.insertAfter(100);
    const node4 = linkedList.insertAfter(101);

    linkedList.deleteNode(node2);

    const items = linkedList.getArrayFromList();
    expect(items).toEqual([98, 100, 101]);

    linkedList.deleteNode(node1);

    const nodesAfterFirstNodeDelete = linkedList.getArrayFromList();
    expect(nodesAfterFirstNodeDelete).toEqual([100, 101]);

    linkedList.deleteNode(node4);

    const nodesAfterLastNodeDelete = linkedList.getArrayFromList();
    expect(nodesAfterLastNodeDelete).toEqual([100]);
  });
  test("Iterating over LL", () => {
    const linkedList = new LinkedList<number>();
    linkedList.insertAfter(98);
    linkedList.insertAfter(99);
    linkedList.insertBefore(97);
    linkedList.insertAfter(100);

    const items: Array<number> = [];
    for (const item of linkedList) {
      items.push(item);
    }
    expect(items).toEqual([97, 98, 99, 100]);
  });
  test("Adding Items to Linked list", () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertAfter("a");
    linkedList.insertAfter("b");
    linkedList.insertBefore("c");

    const items = linkedList.getArrayFromList();
    expect(items).toEqual(["c", "a", "b"]);
  });

  test("Deleting Nodes from Linked list", () => {
    const linkedList = new LinkedList<string>();
    const node1 = linkedList.insertAfter("a");
    const node2 = linkedList.insertAfter("b");
    const node3 = linkedList.insertAfter("c");
    const node4 = linkedList.insertAfter("d");

    linkedList.deleteNode(node2);

    const items = linkedList.getArrayFromList();
    expect(items).toEqual(["a", "c", "d"]);

    linkedList.deleteNode(node1);

    const nodesAfterFirstNodeDelete = linkedList.getArrayFromList();
    expect(nodesAfterFirstNodeDelete).toEqual(["c", "d"]);

    linkedList.deleteNode(node4);

    const nodesAfterLastNodeDelete = linkedList.getArrayFromList();
    expect(nodesAfterLastNodeDelete).toEqual(["c"]);
  });

  test("Iterating over Linked list", () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertAfter("b");
    linkedList.insertAfter("c");
    linkedList.insertBefore("a");
    linkedList.insertAfter("d");

    const items: Array<string> = [];
    for (const item of linkedList) {
      items.push(item);
    }

    expect(items).toEqual(["a", "b", "c", "d"]);
  });
});
