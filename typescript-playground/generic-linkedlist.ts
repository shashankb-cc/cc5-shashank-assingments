/**
 * Interface representing a node in a linked list.
 *
 * @template T
 */
export interface INode<T> {
  data: T | null;
  next: INode<T> | null;
  prev: INode<T> | null;
}

/**
 * Interface representing a linked list.
 *
 * @template T
 */
export interface ILinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;

  /**
   * Inserts a new node with the given data after the current tail.
   *
   * @param {T} data - The data to insert.
   * @returns {INode<T>} The newly created node.
   */
  insertAfter(data: T): INode<T>;

  /**
   * Inserts a new node with the given data before the current head.
   *
   * @param {T} data - The data to insert.
   * @returns {INode<T>} The newly created node.
   */
  insertBefore(data: T): INode<T>;

  /**
   * Deletes the specified node from the list.
   *
   * @param {INode<T>} node - The node to delete.
   */
  deleteNode(node: INode<T>): void;

  /**
   * Returns an array containing all the data from the linked list.
   *
   * @returns {T[]} An array containing all the data from the linked list.
   */
  getArrayFromList(): T[];

  /**
   * Returns an iterator for the linked list.
   *
   * @returns {Iterator<T>} An iterator for the linked list.
   */
  [Symbol.iterator](): Iterator<T>;
}

/**
 * Class representing a node in a linked list.
 *
 * @template T
 * @implements {INode<T>}
 */
export class Node<T> implements INode<T> {
  public data: T;
  public next: INode<T> | null = null;
  public prev: INode<T> | null = null;

  /**
   * Creates an instance of Node.
   *
   * @param {T} data - The data to store in the node.
   */
  constructor(data: T) {
    this.data = data;
  }
}

/**
 * Class representing a doubly linked list.
 *
 * @template T
 * @implements {ILinkedList<T>}
 */
export class LinkedList<T> implements ILinkedList<T> {
  public head: INode<T> | null = null;
  public tail: INode<T> | null = null;

  /**
   * Inserts a new node with the given data after the current tail.
   *
   * @param {T} data - The data to insert.
   * @returns {INode<T>} The newly created node.
   */
  insertAfter(data: T): INode<T> {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return newNode;
  }

  /**
   * Inserts a new node with the given data before the current head.
   *
   * @param {T} data - The data to insert.
   * @returns {INode<T>} The newly created node.
   */
  insertBefore(data: T): INode<T> {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return newNode;
  }

  /**
   * Deletes the specified node from the list.
   *
   * @param {INode<T>} node - The node to delete.
   */
  deleteNode(node: INode<T>): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  /**
   * Returns an array containing all the data from the linked list.
   *
   * @returns {T[]} An array containing all the data from the linked list.
   */
  getArrayFromList(): T[] {
    const items: T[] = [];
    if (!this.head) {
      return items;
    }
    for (const item of this.generator()) {
      items.push(item);
    }
    return items;
  }

  /**
   * Returns an iterator for the linked list.
   *
   * @returns {Iterator<T>} An iterator for the linked list.
   */
  [Symbol.iterator](): Iterator<T> {
    return this.generator();
  }

  /**
   * A generator function to iterate over the linked list.
   *
   * @returns {Generator<T>} A generator for the linked list.
   */
  *generator(): Generator<T> {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data !== null) {
        yield currentNode.data;
      }
      currentNode = currentNode.next;
    }
  }
}
