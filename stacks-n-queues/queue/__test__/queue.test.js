'use strict';

const Queue = require('../index.js');

describe('Queue methods', () => {
  it('enqueue(value) method should add a value to the beginning of the queue', () => {

    let newQueue = new Queue();
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);

    expect(newQueue.queue.length).toEqual(3);
    expect(newQueue.queue[0]).toEqual(5);
    expect(newQueue.queue[1]).toEqual(4);
    expect(newQueue.queue[2]).toEqual(3);
  });
});