import { afterEach, beforeEach, describe, test, expect } from "vitest";
import { Bst } from "./bst";
describe("Binary Search Tree", () => {
  let bst;
  beforeEach(() => {
    bst = new Bst();
  });
  afterEach(() => {
    bst = null;
  });
  test("Inserting Node Tests", () => {


    bst.insertNode(10);
    expect(bst.root).not.toBeNull();
    expect(bst.root.value).toBe(10);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();

    bst.insertNode(5);
    bst.insertNode(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);

    bst.removeNode(5);
    bst.removeNode(15);

    bst.insertNode(9);
    bst.insertNode(15);

    expect(bst.root.right).not.toBeNull();
    expect(bst.root.right.value).toBe(15);
    expect(bst.root.right.left).toBeNull();
    expect(bst.root.right.right).toBeNull();

    expect(() => {
      bst.insertNode(10);
    }).toThrow("The node value must be diffrent");


  });
  test("Removing nodes Tests", () => {
    bst.insertNode(10);
    bst.removeNode(10);

    expect(bst.root).toBeNull();

    bst.insertNode(10);
    bst.insertNode(5);
    bst.insertNode(15);
    bst.removeNode(5);
    expect(bst.root.left).toBeNull();

    bst.removeNode(15);
    expect(bst.root.right).toBeNull();
    expect(bst.root.value).toBe(10)

    bst.insertNode(5);
    bst.insertNode(15);
    bst.insertNode(12);
    bst.removeNode(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.right.value).toBe(12);
    expect(bst.root.right.right).toBeNull();
    expect(bst.root.right.left).toBeNull();

    bst.insertNode(3);
    bst.removeNode(20); 
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(12);

  });
  test("Find node tests",()=>{
    bst.insertNode(10);
    bst.insertNode(5);
    bst.insertNode(15);

    const foundNode = bst.findNode(5);
    expect(foundNode).not.toBeNull();
    expect(foundNode.value).toBe(5);

    const notFoundNode = bst.findNode(20);
    expect(notFoundNode).toBeNull();
  });
  test("Pre-order traversal tests",()=>{
    bst.insertNode(10);
    const singleNodeResult = bst.preorder();
    expect(singleNodeResult).toEqual([10]);

    bst.insertNode(5);
    bst.insertNode(15);
    bst.insertNode(3);
    bst.insertNode(7);

    const result = bst.preorder();
    expect(result).toEqual([10, 5, 3, 7, 15]);
  });

  test("Inorder traversal tests",()=>{
    bst.insertNode(10);
    const singleNodeResult = bst.inorder();
    expect(singleNodeResult).toEqual([10]);

    bst.insertNode(5);
    bst.insertNode(15);
    bst.insertNode(3);
    bst.insertNode(7);

    const result = bst.inorder();
    expect(result).toEqual([3, 5, 7, 10, 15]);
  })
  test("Post order traversal",()=>{

    

    bst.insertNode(10);
    const singleNodeResult = bst.postorder();
    expect(singleNodeResult).toEqual([10]);

    bst.insertNode(5);
    bst.insertNode(15);
    bst.insertNode(3);
    bst.insertNode(7);

    const result = bst.postorder();
    expect(result).toEqual([3, 7, 5, 15, 10]);
  })
});