import { LinkedList, createNode } from "./closure-linkedlist";

describe("Linked List using Closure", () => {
  let listRef = null;
  beforeEach(() => {
    listRef = LinkedList();
    listRef.addItemToList(1);
    listRef.addItemToList("two");
    listRef.addItemToList([3]);
    listRef.addItemToList({ name: "Shashank", age: 22 });
  });

  afterEach(() => {
    listRef = null;
  });

  test("Creating a single Node", () => {
    const node = createNode(1);
    expect(node).toEqual({ data: 1, next: null });
  });
  test("Creating List from different arguments", () => {
    listRef = LinkedList();
    expect(listRef).toBeDefined();
    expect(listRef.head).toBe(undefined);

    const newListRef = listRef.createList([1, 2, 3]);
    expect(newListRef.arrayFromList()).toEqual([1, 2, 3]);
    const listFromOldList = listRef.createList(newListRef);
    expect(listFromOldList.arrayFromList()).toEqual([1, 2, 3]);
  });

  test("Adding items to list ", () => {
    listRef = LinkedList();
    listRef.addItemToList(1);
    listRef.addItemToList("two");
    listRef.addItemToList([3]);
    listRef.addItemToList({ name: "Shashank", age: 22 });
    expect(listRef.arrayFromList()).toEqual([
      1,
      "two",
      [3],
      { name: "Shashank", age: 22 },
    ]);
  });

  test("Coverting list into array", () => {
    const list1 = listRef.createList([1, 2, 3]);
    const list2 = listRef.createList([4, 5, 6]);
    const list3 = listRef.createList([[1], [2]]);
    expect(list1.arrayFromList()).toEqual([1, 2, 3]);
    expect(list2.arrayFromList()).toEqual([4, 5, 6]);
    expect(list3.arrayFromList()).toEqual([[1], [2]]);
  });
  test("Remove a specific node ", () => {
    let node = listRef.getNodeFromPosition(0);
    listRef.removeSpecificNode(node);
    expect(listRef.arrayFromList()).toEqual(["two", [3], { name: "Shashank" ,age:22}]);

    node = listRef.getNodeFromPosition(1);
    listRef.removeSpecificNode(node);
    expect(listRef.arrayFromList()).toEqual(["two", { name: "Shashank" ,age:22}]);

    node = listRef.getNodeFromPosition(1);
    listRef.removeSpecificNode(node);
    expect(listRef.arrayFromList()).toEqual(["two"]);

    node = listRef.getNodeFromPosition(0);
    listRef.removeSpecificNode(node);
    expect(listRef.arrayFromList()).toEqual([]);
  });
  test("Remove from end of list", () => {
    listRef.removeFromEnd();
    expect(listRef.arrayFromList()).toEqual([1, "two", [3]]);
    listRef.removeFromEnd();
    expect(listRef.arrayFromList()).toEqual([1, "two"]);
    listRef.removeFromEnd();
    expect(listRef.arrayFromList()).toEqual([1]);
    listRef.removeFromEnd();
    expect(listRef.arrayFromList()).toEqual([]);
  });

  test("Insert After a particular node", () => {
    const firstNode = listRef.getNodeFromPosition(0);
    listRef.insertAfter(firstNode, 2);
    expect(listRef.arrayFromList()).toEqual([
      1,
      2,
      "two",
      [3],
      { name: "Shashank" ,age:22}
    ]);

    const middleNode = listRef.getNodeFromPosition(2);
    listRef.insertAfter(middleNode, 3);
    expect(listRef.arrayFromList()).toEqual([
      1,
      2,
      "two",
      3,
      [3],
      { name: "Shashank" ,age:22},
    ]);


    const lastNode = listRef.getNodeFromPosition(5);
    listRef.insertAfter(lastNode, 5);
    expect(listRef.arrayFromList()).toEqual([
      1,
      2,
      "two",
      3,
      [3],
      { name: "Shashank" ,age:22},
      5,
    ]);
  });
  test("Insert Before the node", () => {

    const firstNode = listRef.getNodeFromPosition(0);
    listRef.insertBefore(firstNode, 0);
    expect(listRef.arrayFromList()).toEqual([
      0,
      1,
      "two",
      [3],
      { name: "Shashank",age:22 },
    ]);
  });
  
  test("Traverse function", () => {
    const mockFunction = vi.fn();
    listRef.traverse(mockFunction);
    expect(mockFunction.mock.calls.length).toBe(4);
    expect(mockFunction.mock.calls[0][0].data).toBe(1);
    expect(mockFunction.mock.calls[1][0].data).toBe("two");
    expect(mockFunction.mock.calls[2][0].data).toEqual([3]);
    expect(mockFunction.mock.calls[3][0].data).toEqual({ name: "Shashank" ,age:22});
  });
  test("Length of a list", () => {
    expect(listRef.length()).toBe(4);
    listRef.removeFromEnd();
    expect(listRef.length()).toBe(3);
  });
});
