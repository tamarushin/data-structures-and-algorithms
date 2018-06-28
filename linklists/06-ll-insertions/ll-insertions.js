'use strict';

function Node() {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}
//A singly linked list is a linear data structure where each element is a separate object.
//Each Node of a list is comprising of two items - the data and a reference to the next node.The last node has a reference to null.The entry point into a linked list is called the head of the list.It should be noted that head is not a separate node, but the reference to the first node.If the list is empty then the head is a null reference.

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

