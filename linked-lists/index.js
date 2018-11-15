'use strict';

const Node = require('./lib/node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}