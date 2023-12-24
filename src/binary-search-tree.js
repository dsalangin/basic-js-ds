const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    this.start = addNode(this.start, data);
    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.start, data);
    function searchNode(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data){
        return true;
      }

      if(data > node.data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
  }

  find(data) {
    return findNode(this.start, data);
    function findNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data){
        return node;
      }

      if(data > node.data) {
        return findNode(node.right, data);
      } else {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.start = removeNode(this.start, data)
    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if(!node.left && ! node.right) {
          return null;
        }

        if(!node.left && node.right) {
          node = node.right;
          return node;
        }

        if(!node.right && node.left) {
          node = node.left;
          return node;
        }

        if(node.right && node.left) {
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
            node.data = minRight.data;
            node.right = removeNode(node.right, minRight.data);
            return node;
        }
      }
    }
  }

  min() {
    return minValue(this.start);
    function minValue(node) {
      if(!node.left) {
        return node.data;
      }
      return minValue(node.left);
    }
  }

  max() {
    return maxValue(this.start);
    function maxValue(node) {
      if(!node.right) {
        return node.data;
      }
      return maxValue(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};