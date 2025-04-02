// time complexity: O(n)
// space complexity: O(n)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let A = [];

let count = 0;

function partition(A, p, r) {
  let x = A[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i++;
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
      console.log(`i: ${i}, j: ${j}, A: ${A}`);
    }
  }
  A[r] = A[i + 1];
  A[i + 1] = x;
  return i + 1;
}

/*
12
13 19 9 5 12 8 7 4 21 2 6 11
*/

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim());
  } else if (A.length == 0) {
    A = line.trim().split(" ", n).map(Number);
    rl.close();
  }
}).on("close", () => {
  let index = partition(A, 0, n - 1);
  for (let i = 0; i < A.length; i++) {
    if (i != index) {
      process.stdout.write(A[i].toString());
    } else {
      process.stdout.write("[" + A[i].toString() + "]");
    }
    process.stdout.write(" ");
  }
  console.log("");
  console.log(index);
});
