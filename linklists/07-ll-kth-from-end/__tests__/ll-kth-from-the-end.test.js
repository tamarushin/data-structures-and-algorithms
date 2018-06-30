'use strict';
//run test

const ll = require('../lib/ll-kth-from-the-end');

describe('Linked List Module', () => {
  it('the kthValue() should return kth value from the end', () => {
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    let nodeValue = ll.kthValue(0);
    expect(nodeValue).toEqual(2);
  });

  it('the kthValue() should return kth value from the end', () => {
    let nodeValue = ll.kthValue(2);
    expect(nodeValue).toEqual(3);
  });

  it('the kthValue() should return kth value from the end', () => {
    let nodeValue = ll.kthValue(6);
    expect(nodeValue).toBe(`Input is invalid`);
  });
});
