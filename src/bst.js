import { assert } from "vitest";
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export class Bst {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let curNode = this.root;
    while (true) {
    assert(curNode.value !==value, "The node value must be diffrent");
      if (value < curNode.value) {
        if (curNode.left === null) {
          curNode.left = newNode;
          return;
        }
        curNode = curNode.left;
      } else {
        if (curNode.right === null) {
          curNode.right = newNode;
          return;
        }
        curNode = curNode.right;
      }
    }
  }
  removeNode(value) {
    const remove = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value === node.value) {
        //node with no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // no left child
        if (node.left === null) {
          return node.right;
        }
        // no right child
        if (node.right === null) {
          return node.left;
        }
        //if two children
        const minNode = this.getMinNode(node.right);
        node.value = minNode.value;
        node.right = this.remove(node.right, minNode.value);
        return node;
      } else if (value < node.value) {
        node.left = remove(node.left, value);
        return node;
      } else {
        node.right = remove(node.right, value);
        return node;
      }
    };
    this.root = remove(this.root, value);
  }
  getMinNode(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  findNode(value) {
    assert.notEqual(this.root,null,"The tree must not be empty");
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  preorder() {
    assert.notEqual(this.root, null, "The tree must not be empty");
    let array = [];
    function traverse(node) {
      if (node) {
        array.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return array;
  }
  inorder() {
    assert.notEqual(this.root, null, "The tree must not be empty");
    let array = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        array.push(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return array;
  }
  postorder() {
    assert.notEqual(this.root, null, "The tree must not be empty");
    let array = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        array.push(node.value);
      }
    }
    traverse(this.root);
    return array;
  }
}