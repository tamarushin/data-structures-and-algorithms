'use strict';

const Node = require('../lib/node.js');

describe('Binary Tree Node', () => {
  it('constructor', () => {
    let node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});