import assert from "assert";

function createNode(val) {
  const node = { data: val, next: null };
  return node;
}

function LinkedList() {
  let head = null;
  let tail = null;

  function addItemToList(data) {
    assert(data !== null, "Data should not be empty");
    const newNode = createNode(data);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  function arrayFromList() {

    const array = [];
    let currentNode = head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  function removeFromEnd() {
    assert(head !== null, "There are no elements in the list to remove");
    let currentNode = head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode === null) {
      head = null;
      tail = null;
    } else {
      previousNode.next = null;
      tail = previousNode;
    }
    return currentNode.data;
  }

  function removeSpecificNode(nodeToRemove) {
    assert(head !== null, "There are no elements in the list to remove");
    assert(
      nodeToRemove !== undefined,
      "Node should be defined in order to remove it"
    );

    let previousNode = null;
    let currentNode = head;

    // If the node to remove is the head
    if (currentNode === nodeToRemove) {
      head = currentNode.next;
      if (currentNode.next === null) {
        tail = null;
      }
      return currentNode.data;
    }

    // Traverse the list to find it
    while (currentNode !== null) {
      if (currentNode === nodeToRemove) {
        previousNode.next = currentNode.next;
        if (currentNode.next === null) {
          tail = previousNode;
        }
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  function getNodeFromPosition(position) {
    let pos = position;
    let currentNode = head;
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

  function insertAfter(listNode, data) {
    assert(
      listNode !== undefined && listNode !== null,
      "You must define the position of node correctly"
    );
    assert(data !== null, "You must define what data must be added");

    const newNode = createNode(data);

    let currentNode = head;
    let previousNode = null;
    while (currentNode !== null) {
      if (currentNode === listNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (currentNode === tail) {
          tail = newNode;
        }
        return newNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  function insertBefore(listNode, data) {
    assert(
      listNode !== undefined || listNode !== null,
      "You must define the position of node correctly"
    );
    assert(data !== null, "You must define what data must be added");

    const newNode = createNode(data);
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode === listNode) {
        if (previousNode === null) {
          head = newNode;
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

  function traverse(visit) {
    let currentNode = head;
    while (currentNode !== null) {
      visit(currentNode);
      currentNode = currentNode.next;
    }
  }
  function length() {
    let count = 0;
    let currentNode = head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  function createList(arg) {
    assert(
      arg === undefined || Array.isArray(arg) || arg instanceof Object,
      "The argument must be undefined, an array, or a list"
    );
    const newList=LinkedList();
    head = null;
    tail = null;
    if (arg === undefined) {
      return newList;
    }

    if (Array.isArray(arg)) {
      arg.forEach((data) => newList.addItemToList(data));
    } else {
      arg.traverse((node) => newList.addItemToList(node.data));
    }
    return newList;
  }
  return {
    createList,
    addItemToList,
    arrayFromList,
    removeFromEnd,
    removeSpecificNode,
    getNodeFromPosition,
    insertAfter,
    insertBefore,
    traverse,
    length,
  };
}

export { LinkedList, createNode };
