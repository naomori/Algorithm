/**
 * This class represents Stack.
 * This class has push and pop methods.
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  // Method to push an element into the stack
  push(element) {
    this.stack.push(element);
  }

  // Method to pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Cannot pop.");
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let statement = [];
let stack = new Stack();

rl.on("line", (line) => {
  statement = line.trim().split(" ");
  rl.close();
}).on("close", () => {
  let operand1;
  let operand2;
  for (let element of statement) {
    switch (element) {
      case "+":
        operand2 = stack.pop();
        operand1 = stack.pop();
        stack.push(operand1 + operand2);
        break;

      case "-":
        operand2 = stack.pop();
        operand1 = stack.pop();
        stack.push(operand1 - operand2);
        break;

      case "*":
        operand2 = stack.pop();
        operand1 = stack.pop();
        stack.push(operand1 * operand2);
        break;

      default:
        stack.push(parseInt(element));
        break;
    }
  }
  console.log(stack.pop());
});
