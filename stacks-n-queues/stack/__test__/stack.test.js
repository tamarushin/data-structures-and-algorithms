'use strict';

const Stack = require('../index.js');

describe('Stack Methods', () => {
  it('push(item) method should add an item to the top of the stack', () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.stack[0]).toEqual(1);
  });

  it('pop() method should remove an item from the top of the stack', () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    expect(newStack.pop()).toEqual(4);
    expect(newStack.stack.length).toEqual(3);
    newStack.pop();
    expect(newStack.stack.length).toEqual(2);
  });

  it('peek() method should return the top value in the stack', () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push(5);
    expect(newStack.peek()).toEqual(5);
  });
});