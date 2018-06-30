'use strict';

let value;

function Node() {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.append = (value) => {
  let node = new Node(value),
    currentNode = this.head;
  //first use is an empty list
  if (!currentNode) {
    this.head = node;
    this.length++;

    return node;
  }
  //second use is a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.length++;
  return node;
};

LinkedList.prototype.insertBefore = (value, newVal) => {
  let node = new Node(value, newVal),
    currentNode = this.head;
  if(currentNode.value === value) {
    this.head = node;
    this.head.next = currentNode;
    return node;
  }
  while (currentNode.next) {
    if(currentNode.next.value === value) {
      break;
    } else {
      currentNode = currentNode.next;
    }
  }
  this.head.next = currentNode.next;
  currentNode.next = this.head;
  return this.head;
};

LinkedList.prototype.insertAfter = (value, newVal) => {
  let node = new Node(value, newVal),
    currentNode = this.head;
  if (currentNode.value === value) {
    this.head = node;
    this.head.next = currentNode;
    return node;
  }
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      break;
    }
    return this.head;
  }
};

