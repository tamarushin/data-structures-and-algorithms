'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  preOrderTraversal() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  inOrderTraversal() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  postOrderTraversal() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  insert(value) {

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };
    _insert(this.root);
  }

  remove(node) { //Big O --> 0(n)
    this.root = this.removeNode(this.root, node);
  }
  removeNode(node, key) {
    if (node === null)
      return null;
    else if (key < node.node) {

      node.left = this.removeNode(node.left, key);
      return node;

    }
    else if (key > node.node) {
      node.right = this.removeNode(node.right, key);
      return node;

    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;

      }
      if (node.left === null) {
        node = node.right;
        return node;

      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
    }
  }
}

module.exports = BinarySearchTree;