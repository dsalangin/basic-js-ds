const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    return this.start;
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
    return removedNode.value;
  }
}

module.exports = {
  Queue
};
