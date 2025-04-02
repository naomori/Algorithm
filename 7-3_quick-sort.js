// stability: unstable
// time complexity: average O(nlogn), worst O(n)
// space complexity: inplace sort (additional space not required)

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

const maxN = 6;
const maxNumber = Infinity;

let L = new Array(Math.floor(maxN / 2) + 2);
let R = new Array(Math.floor(maxN / 2) + 2);

const merge = (A, n, left, mid, right) => {
  L = A.slice(left, mid);
  L[mid - left] = new Card("Z", Infinity);
  console.log(
    `L ${left}, ${mid}: ${L[mid - left].suit} ${L[mid - left].value}`
  );
  R = A.slice(mid, right);
  R[right - mid] = new Card("Z", Infinity);
  console.log(
    `R ${mid}, ${right}: ${R[right - mid].suit} ${R[right - mid].value}`
  );

  let l = 0;
  let r = 0;
  for (let i = left; i < right; i++) {
    if (L[l].value <= R[r].value) {
      A[i] = L[l++];
    } else {
      A[i] = R[r++];
    }
  }
  const itemsOfA = A.map((item) => {
    return `${item.suit} ${item.value}`;
  });
  console.log(`A ${left}, ${right}: ` + itemsOfA);
};

const mergeSort = (A, n, left, right) => {
  if (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(A, n, left, mid);
    mergeSort(A, n, mid, right);
    merge(A, n, left, mid, right);
  }
};

const partition = (A, n, p, r) => {
  let x = A[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (A[j].value <= x.value) {
      i++;
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;

      // display for debugging
      const itemsOfA = A.map((item) => {
        return `${item.suit} ${item.value}`;
      });
      console.log(`i:${i}, j:${j}, A:` + itemsOfA);
    }
  }
  A[r] = A[i + 1];
  A[i + 1] = x;
  return i + 1;
};

const quickSort = (A, n, p, r) => {
  let queue;
  if (p < r) {
    q = partition(A, n, p, r);
    quickSort(A, n, p, q - 1);
    quickSort(A, n, q + 1, r);
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let index = 0;

let A = new Array(maxN);
let B = new Array(maxN);
let stable = true;

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim());
  } else {
    const card = line.trim().split(" ", 2);
    A[index] = new Card(card[0], Number(card[1]));
    B[index] = new Card(card[0], Number(card[1]));
    index++;
    if (index >= n) {
      rl.close();
    }
  }
}).on("close", () => {
  mergeSort(A, n, 0, n);
  console.log(A);
  quickSort(B, n, 0, n - 1);
  console.log(B);

  for (let i = 0; i < n; i++) {
    if (A[i].suit != B[i].suit) {
      stable = false;
      break;
    }
  }
  console.log("stable:" + stable);
});

/*
6
D 3
H 2
D 1
S 3
D 2
C 1
*/
