/**
 * This class represents Queue.
 * This class has enqueue and dequeue methods that can be used to queue.
 */
class Queue {
  constructor() {
    this.q = [];
  }

  // Method to enqueue an element into the queue
  enqueue(element) {
    this.q.push(element);
  }

  // Method to dequeue an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty. Cannot dequeue.");
    }
    return this.q.shift();
  }

  isEmpty() {
    return this.q.length === 0;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let queue = new Queue();
let n = 0;
let q = 0;
let elaps = 0;

rl.on("line", (line) => {
  if (n == 0 && q == 0) {
    let nq = line.trim().split(" ", 2).map(Number);
    n = nq[0];
    q = nq[1];
  } else {
    let proc = line.trim().split(" ", 2);
    let elem = { name: proc[0], time: parseInt(proc[1]) };
    queue.enqueue(elem);
    if (--n == 0) {
      console.log(queue);
      rl.close();
    }
  }
}).on("close", () => {
  while (!queue.isEmpty()) {
    let elem = queue.dequeue();
    c = Math.min(q, elem.time);
    elem.time -= c;
    elaps += c;
    if (elem.time > 0) {
      queue.enqueue(elem);
    } else {
      console.log(`${elem.name} ${elaps}`);
    }
  }
});
