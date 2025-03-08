function binarySearch(array, key) {
  let left = 0;
  let right = array.length;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    console.log(
      "key: " + key + ", left: " + left + ", mid: " + mid + ", right: " + right
    );
    if (array[mid] === key) {
      return true;
    } else if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let S = [];

let q = 0;
let T = [];

let res = 0;

rl.on("line", (line) => {
  let x;
  if (n == 0) {
    n = parseInt(line.trim());
  } else if (S.length == 0) {
    S = line.trim().split(" ", n).map(Number);
  } else if (q == 0) {
    q = parseInt(line.trim());
  } else {
    T = line.trim().split(" ", q).map(Number);
    rl.close();
  }
}).on("close", () => {
  T.forEach((val) => {
    let ret = binarySearch(S, val);
    if (ret) {
      res++;
    }
  });
  console.log(res);
});

/*
5
1 2 3 4 5
3
3 4 1
*/
