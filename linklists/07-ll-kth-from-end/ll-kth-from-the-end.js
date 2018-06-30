'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
class Node {
  constructor(value) {
    this.value = value; //1 -> 3 -> 8 -> 2
    this.next = null; //3 -> 8 -> 2 -> null(x)
  }
}

LinkedList.append = (value) => { //append the next node if it is not the head node.
  let node = new Node(value);
  if (!this.head) {
    this.head = node;
    return node;
  }
  let currNode = this.head;
  while (currNode.next) {
    currNode = currNode.next;
  }
  currNode.next = node; 
  return node;
};

LinkedList.kthValue = (kth) => {
  let currNode = this.head;
  let curr; 
   
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  currNode = this.head;
  kth = curr.value - kth;
  curr.value = 0;
  if (kth >= 0) {
    while (currNode < kth) {
      currNode = currNode.next;
      currNode++;
    }
  }
  return currNode.value; // non negative integer
};



