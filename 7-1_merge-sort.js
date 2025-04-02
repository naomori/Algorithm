// time complexity: O(nlogn)
//  mergeSort: O(n)
//  merge: O(logn)
// space complexity: O(n)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let S = [];

let L = [];
let R = [];

let count = 0;

function merge(A, n, left, mid, right) {
  L = A.slice(left, mid);
  L[mid - left] = Infinity;
  console.log(`L ${left}, ${mid}: ` + L);
  R = A.slice(mid, right);
  R[right - mid] = Infinity;
  console.log(`R ${mid}, ${right}: ` + R);

  let l = 0;
  let r = 0;
  for (let i = left; i < right; i++) {
    count++;
    if (L[l] <= R[r]) {
      A[i] = L[l++];
    } else {
      A[i] = R[r++];
    }
  }
  console.log(`A ${left}, ${right}: ` + A);
}

function mergeSort(A, n, left, right) {
  if (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    //console.log(A, left, mid);
    mergeSort(A, n, left, mid);
    //console.log(A, mid, right);
    mergeSort(A, n, mid, right);
    merge(A, n, left, mid, right);
  }
}

/*
10
8 5 9 2 6 3 7 1 10 4
*/

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim());
  } else if (S.length == 0) {
    S = line.trim().split(" ", n).map(Number);
    rl.close();
  }
}).on("close", () => {
  mergeSort(S, n, 0, n);
  console.log(S);
  console.log(count);
});
