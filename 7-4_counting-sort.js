// time complexity: O(n+MAX)
// space complexity: O(MAX)

const VMAX = 7;

const countingSort = (A, B, n) => {
  let C = new Array(VMAX).fill(0);
  for (let i = 0; i < n; i++) {
    C[A[i]]++;
  }
  console.log("C1: " + C);
  for (let i = 1; i < n; i++) {
    C[i] = C[i] + C[i - 1];
  }
  console.log("C2: " + C);
  for (let j = n - 1; j >= 0; j--) {
    console.log(`B[${C[A[j]]}]: ${A[j]}`);
    B[C[A[j]] - 1] = A[j];
    C[A[j]]--;
  }
  console.log("B: " + B);
  console.log("C3: " + C);
  for (let i = 0; i < n; i++) {
    if (i > 0) process.stdout.write(" ");
    process.stdout.write(B[i].toString());
  }
  console.log("");
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let A = new Array(VMAX).fill(0);
let B = new Array(VMAX).fill(0);

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line.trim());
  } else {
    A = line.trim().split(" ", n).map(Number);
    console.log("A: " + A);
    rl.close();
  }
}).on("close", () => {
  countingSort(A, B, n);
});

/*
7
2 5 1 3 2 3 0
*/
