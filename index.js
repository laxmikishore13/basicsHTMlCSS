class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("please eneter a valid index");
    } else {
      let current = this.head;
      let prev;
      let node = new Node(element);
      if (index == 0) {
        node.next = current;
        this.head = node;
        let i = 0;
      } else {
        while (i < index) {
          i++;
          prev = current;
          current = current.next;
        }
        prev.next = node;
        node.next = current;
      }
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    } else {
      let current = this.head;
      let i = 0;
      let prev;
      while (i < index) {
        i++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next.next;
      this.size--;
    }
  }
}
