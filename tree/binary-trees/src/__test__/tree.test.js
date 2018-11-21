'use strict';

const Node = require('../lib/node.js');
const BinaryTree = require('../lib/tree.js');

describe('Binary Tree class methods', () => {
  let tree = new BinaryTree();
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  tree.root = six;
  six.left = two;
  six.right = seven;
  two.left = one;
  two.right = four;
  four.left = three;
  four.right = five;
  seven.right = nine;
  nine.left = eight;

  it('preOrderTraversal() method should traverse a BinaryTree in pre-order', () => {
    expect(tree.preOrderTraversal()).toEqual([6, 2, 1, 4, 3, 5, 7, 9, 8]);
  });

  it('inOrderTraversal() method should traverse a BinaryTree in-order', () => {
    expect(tree.inOrderTraversal()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('postOrderTraversal() method should traverse a BinaryTree post-order', () => {
    expect(tree.postOrderTraversal()).toEqual([1, 3, 5, 4, 2, 8, 9, 7, 6]);
  });
});