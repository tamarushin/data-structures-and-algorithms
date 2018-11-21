'use strict';

const Node = require('../lib/node.js');
const BinarySearchTree = require('../lib/binary-search-tree.js');

describe('BinarySearchTree class methods', () => {
  let tree = new BinarySearchTree();
  let one = new Node(1);
  let two = new Node(2);
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
  four.right = five;
  seven.right = nine;
  nine.left = eight;

  tree.insert(3);
  tree.insert(10);

  it('insert(value) method should insert a node in the correct location in the BST', () => {
    expect(tree.root.value).toEqual(6);
    expect(tree.root.left.right.left.value).toEqual(3);
    expect(tree.root.right.right.right.value).toEqual(10);
  });
});