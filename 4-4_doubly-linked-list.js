class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to insert a node at the beginning of the list
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.insertBefore(newNode);
      this.head = newNode;
    }
  }

  // Method to delete a node from the list
  delete(data) {
    let node = this.search(data);
    this.deleteNode(node);
  }

  // Method to search for a node in the list
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Method to delete the node from the list
  deleteNode(node) {
    if (!node) {
      return;
    }
    if (node == this.head) {
      this.head = null;
    }
    if (node == this.tail) {
      this.tail = node.prev;
    }

    node.deleteNode();
  }

  // Method to delete a first node from the list
  deleteFirst() {
    if (!this.head) {
      return;
    }
    let next = this.head.next;
    this.deleteNode(this.head);
    this.head = next;
  }

  // Method to delete a last node from the list
  deleteLast() {
    if (!this.tail) {
      return;
    }
    let prev = this.tail.prev;
    this.deleteNode(this.tail);
    this.tail = prev;
  }

  // Method to print the list in forward direction
  printForward() {
    let current = this.head;
    while (current) {
      process.stdout.write(" " + current.data);
      current = current.next;
    }
    process.stdout.write("\n");
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  // Method to insert a node after the current node
  insertAfter(node) {
    if (!this.next) {
      this.next = node;
      node.prev = this;
    } else {
      node.prev = this;
      node.next = this.next;
      this.next.prev = node;
      this.next = node;
    }

    return this;
  }
  // Method to insert a node before the current node
  insertBefore(node) {
    if (!this.prev) {
      this.prev = node;
      node.next = this;
    } else {
      node.next = this;
      node.prev = this.prev;
      this.prev.next = node;
      this.prev = node;
    }

    return this;
  }
  // Method to delete the current node
  deleteNode() {
    if (this.prev) {
      this.prev.next = this.next;
    } else {
      this.head = this.next;
    }

    if (this.next) {
      this.next.prev = this.prev;
    } else {
      this.tail = this.prev;
    }

    this.prev = null;
    this.next = null;

    delete this.prev;
    delete this.next;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = new DoublyLinkedList();
let n = 0;

rl.on("line", (line) => {
  let x;
  if (n == 0) {
    n = parseInt(line.trim());
  } else {
    let proc = line.trim().split(" ");
    switch (proc[0]) {
      case "insert":
        x = parseInt(proc[1]);
        list.insert(x);
        list.printForward();
        break;
      case "delete":
        x = parseInt(proc[1]);
        list.delete(x);
        list.printForward();
        break;
      case "deleteFirst":
        list.deleteFirst();
        list.printForward();
        break;
      case "deleteLast":
        list.deleteLast();
        list.printForward();
        break;
    }
    if (--n == 0) {
      rl.close();
    }
  }
}).on("close", () => {
  list.printForward();
});

/* test data
7
insert 5
insert 2
insert 3
insert 1
delete 3
insert 6
delete 5
*/
