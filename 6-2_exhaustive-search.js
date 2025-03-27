let n = 0;
let A = new Array();
let q = 0;
let M = new Array();

function solve(A, m, i) {
  if (m == 0) {
    return true;
  }
  if (i >= A.length) {
    return false;
  }
  const res = solve(A, m, i + 1) || solve(A, m - A[i], i + 1);
  return res;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim());
  } else if (A.length == 0) {
    A = line.trim().split(" ", n).map(Number);
  } else if (q == 0) {
    q = parseInt(line.trim());
  } else {
    M = line.trim().split(" ", n).map(Number);
    rl.close();
  }
}).on("close", () => {
  for (const m of M) {
    const res = solve(A, m, 0);
    if (res) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
});

/*
5
1 5 7 10 21
4
2 4 17 8
*/

// time complexity: O(2^n)
