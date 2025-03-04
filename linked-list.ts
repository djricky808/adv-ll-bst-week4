import { link } from "fs";

// Linked List Implementation
export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    // TODO: Implement append method
    if (this.head === null) {
      this.head = new ListNode(value);
      return;
    } else {
      function findEnd(node: ListNode) {
        if (node.next === null) {
          node.next = new ListNode(value);
          return;
        } else {
          return findEnd(node.next);
        }
      }
      findEnd(this.head);
    }
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    // TODO: Implement find method
    let valueFound = false;
    function findNode(node) {
      if (node === null) {
        valueFound = false;
        return;
      } else if (node.value === value) {
        valueFound = true;
        return;
      } else {
        findNode(node.next);
      }
    }
    findNode(this.head);
    return valueFound;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    // TODO: Implement reverse method
    let list = linkedList;
    function reverseNodes(list): void {
      let current: ListNode | null = list.head;
      let previous: ListNode | null = null;
      let next: ListNode | null;
      while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
      list.head = previous;
    }
    reverseNodes(list);
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    // TODO: Implement remove method
    function deleteNode(node, value) {
      if (node.next.value === value) {
        console.log(node);
        let followingNode = node.next.next;
        console.log(followingNode);
        node.next = followingNode;
        console.log(node.next);
        return;
      } else {
        return deleteNode(node.next, value);
      }
    }
    deleteNode(this.head, value);
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// console.log(linkedList);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.reverse();
console.log("Linked List", linkedList);
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log(linkedList);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
