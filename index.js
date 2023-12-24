// const { Node } = require('./extensions/list-tree.js');

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   root() {
//     return this.root;
//   }

//   add(data) {
//     this.root = addNode(this.root, data);
//     function addNode(node, data) {
//       if(!node) {
//         return new Node(data);
//       }

//       if(node.data === data) {
//         return node;
//       }

//       if(data > node.data) {
//         node.right = addNode(node.right, data);
//       } else {
//         node.left = addNode(node.left, data);
//       }
//       return node;
//     }
//   }

//   has(data) {
//     return searchNode(this.root, data);
//     function searchNode(node, data) {
//       if(!node) {
//         return false;
//       }

//       if(node.data === data){
//         return true;
//       }

//       if(data > node.data) {
//         return searchNode(node.right, data);
//       } else {
//         return searchNode(node.left, data);
//       }
//     }
//   }

//   find(data) {
//     return findNode(this.root, data);
//     function findNode(node, data) {
//       if(!node) {
//         return null;
//       }

//       if(node.data === data){
//         return node;
//       }

//       if(data > node.data) {
//         return findNode(node.right, data);
//       } else {
//         return findNode(node.left, data);
//       }
//     }
//   }

//   remove(data) {
//     this.root = removeNode(this.root, data)
//     function removeNode(node, data) {
//       if(!node) {
//         return null;
//       }
//       if(data > node.data) {
//         node.right = removeNode(node.right, data);
//         return node;
//       } else if(data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else {
//         if(!node.left && ! node.right) {
//           return null;
//         }

//         if(!node.left && node.right) {
//           node = node.right;
//           return node;
//         }

//         if(!node.right && node.left) {
//           node = node.left;
//           return node;
//         }

//         if(node.right && node.left) {
//           //Доделать удаление
//         }
//       }
//     }
//   }

//   min() {
//     return minValue(this.root);
//     function minValue(node) {
//       if(!node.left) {
//         return node.data;
//       }
//       return minValue(node.left);
//     }
//   }

//   max() {
//     return maxValue(this.root);
//     function maxValue(node) {
//       if(!node.right) {
//         return node.data;
//       }
//       return maxValue(node.right);
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.add(5);
// tree.add(6);
// tree.add(4);
// tree.add(3);
// tree.add(1);
// console.log(tree);
// console.log(tree.has());
// console.log(tree.find(6));
// console.log(tree.min());
// console.log(tree.max());


const { ListNode } = require('./extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {

  }

  enqueue(value) {
    if(!this.start) {
      this.start = new ListNode(value);
      this.end = this.start;
    } else {
      this.end.next = new ListNode(value);
      this.end = this.end.next;
    }
  }

  dequeue() {
    if(!this.start) {
      return null;
    }
    const removedNode = this.start;
    if(this.start === this.end) {
      this.start = null;
      this.end = null;
    } else {
      this.start = this.start.next;
    }
    return removedNode;
  }
}

const queue = new Queue();
queue.dequeue();
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

