import assert from "assert";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Creates a linked list from an array or another linked list.
   * @param {Array|Object|undefined} arg - The argument must be undefined, an array, or a linked list.
   */
  createList(arg) {
    assert(
      arg === undefined || Array.isArray(arg) || arg instanceof Object,
      "The argument must be undefined or array or list"
    );
    if (arg === undefined) {
      this.head = null;
      this.tail = null;
      return;
    }
    if (Array.isArray(arg)) {
      this.head = null;
      this.tail = null;
      for (let i = arg.length - 1; i >= 0; i--) {
        const newNode = new Node(arg[i]);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === null) {
          this.tail = newNode;
        }
      }
      return;
    }
    assert(
      arg instanceof Object,
      "The item must be list to create another list"
    );
    let currentNode = arg.head;
    while (currentNode !== null) {
      const newNode = new Node(currentNode.data);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      currentNode = currentNode.next;
    }
  }

  /**
   * Adds a new item to the end of the linked list.
   * @param {*} data - The data to be added to the list.
   * @returns {Node} The newly created node.
   */
  addItemToList(data) {
    assert(data !== null, "Data should not be empty");
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  }

  /**
   * Converts the linked list to an array.
   * @returns {Array} An array representation of the linked list.
   */
  arrayFromList() {
    assert(
      this.head !== null,
      "You must have items in list to convert it into array"
    );
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   * Removes the last item from the linked list.
   * @returns {*} The data of the removed node.
   */
  removeFromEnd() {
    assert(this.head !== null, "There are no elements in the list to remove");
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode === null) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }
    return currentNode.data;
  }

  /**
   * Removes a specific node from the linked list.
   * @param {Node} nodeToRemove - The node to be removed.
   * @returns {*} The data of the removed node.
   */
  removeSpecificNode(nodeToRemove) {
    assert(this.head !== null, "There are no elements in the list to remove");
    assert(
      nodeToRemove !== undefined,
      "Node should be defined in order to remove it"
    );

    let previousNode = null;
    let currentNode = this.head;

    // If the node to remove is the head
    if (currentNode === nodeToRemove) {
      this.head = currentNode.next;
      if (currentNode.next === null) {
        this.tail = null;
      }
      return currentNode.data;
    }

    // Traverse the list to find it
    while (currentNode !== null) {
      if (currentNode === nodeToRemove) {
        previousNode.next = currentNode.next;
        if (currentNode.next === null) {
          this.tail = previousNode;
        }
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * Retrieves the node at a specified position.
   * @param {number} position - The position of the node to retrieve.
   * @returns {Node} The node at the specified position.
   */
  getNodeFromPosition(position) {
    let pos = position;
    let currentNode = this.head;
    if (pos === 0) {
      return currentNode;
    }
    while (pos > 0 && currentNode) {
      currentNode = currentNode.next;
      pos--;
    }
    assert.notEqual(currentNode, null, "Enter valid position");
    return currentNode;
  }

  /**
   * Inserts a new node after a specified node.
   * @param {Node} listNode - The node after which the new node will be inserted.
   * @param {*} data - The data to be added to the new node.
   * @returns {Node} The newly created node.
   */
  insertAfter(listNode, data) {
    assert(
      listNode !== undefined && listNode !== null,
      "You must define the position of node correctly"
    );
    assert(data !== null, "You must define what data must be added");

    const newNode = new Node(data);

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode === listNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (currentNode === this.tail) {
          this.tail = newNode;
        }
        return newNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Inserts a new node before a specified node.
   * @param {Node} listNode - The node before which the new node will be inserted.
   * @param {*} data - The data to be added to the new node.
   * @returns {Node} The newly created node.
   */
  insertBefore(listNode, data) {
    assert(
      listNode !== undefined || listNode !== null,
      "You must define the position of node correctly"
    );
    assert(data !== null, "You must define what data must be added");

    const newNode = new Node(data);
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode === listNode) {
        if (previousNode === null) {
          this.head = newNode;
        } else {
          previousNode.next = newNode;
        }
        newNode.next = currentNode;
        return newNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * Filters the linked list based on a predicate function.
   * @param {function} predicate - The predicate function to filter nodes.
   * @returns {Array} An array of nodes that satisfy the predicate.
   */
  filterList(predicate) {
    assert(
      this.head !== null,
      "You must have at least one node to filter the list"
    );
    const resultArr = this.arrayFromList();
    return resultArr.filter((nodeData) => predicate(nodeData));
  }

  /**
   * Checks if the given data is a number.
   * @param {*} data - The data to check.
   * @returns {boolean} True if the data is a number, false otherwise.
   */
  isNumber(data) {
    return typeof data === "number";
  }

  /**
   * Checks if the given data is a string.
   * @param {*} data - The data to check.
   * @returns {boolean} True if the data is a string, false otherwise.
   */
  isString(data) {
    return typeof data === "string";
  }

  //----------------Day-2 assignments-----------------------

  /**
   * Returns an iterator object for the linked list.
   * @returns {Object} An iterator object with a next() method.
   */
  [Symbol.iterator]() {
    let current = this.head;
    return {
      /**
       * Returns the next node in the iteration.
       * @returns {Object} The iteration result object with value and done properties and stops when
       * done is true and it continues iterarte when done false
       */
      next() {
        if (current) {
          const data = current.data;
          current = current.next;
          return { value:data, done: false };
        } else {
          return {value:undefined, done: true };
        }
      },
    };
  }
}

/**
 * Generator function that yields each node's data.
 * @param {LinkedList} linkedList - The linked list to generate data from.
 * @yields {*} The data of each node in the linked list.
 */
export function* linkedListGenerator(linkedList) {
  let currentNode = linkedList.head;
  while (currentNode) {
    yield currentNode.data;
    currentNode = currentNode.next;
  }
}
