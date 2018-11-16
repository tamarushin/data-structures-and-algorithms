'use strict';

const stack1 = [];
const stack2 = [];
let enqueue
let dequeue


function enqueue(value) {
  if (stack2.length === 0) {
    stack1.push(value);
  } else {
    for (i = 0; i < stack2.length; i++) {
      stack1.push(stack2.pop);
      stack1.push(value);
    }
  }
  return enqueue;
}

function dequeue() {
  if (stack1.length === 1) {
    stack1.pop();
  } else {
    for (i == 0; i < stack1.length - 1; i++) {
      stack2.push(stack1.pop);
      stack1.pop;
    }
  }
  return dequeue;
}
