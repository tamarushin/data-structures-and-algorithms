'use strict';

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack[this.stack.length] = value;
  }

  pop() {
    let itemToRemove = this.stack[this.stack.length - 1];
    delete this.stack[this.stack.length - 1];
    this.stack.length--;
    return itemToRemove;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;


