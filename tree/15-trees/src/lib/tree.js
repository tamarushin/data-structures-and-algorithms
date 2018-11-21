'use strict';

const Node = require('./node.js');

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {

    if (!this.root) {
      this.root = new Node(data);
      return;
    // else
    //   this.insertNode(this.root, newNode)
    }

    let current = this.root;

    if (current.left !== null) {
      current = current.left;
    }
    else {
      if (current.right !== null) {
        (current = current.right);
      }
      console.log(current.value);
    }
  }

  remove(node) { //Big O --> 0(n)
    this.root = this.removeNode(this.root, node);
  }
  removeNode (node, key) {
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

module.export = Tree;