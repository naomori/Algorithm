function search(array, key) {
  let i = 0;
  array.push(key);
  while (array[i] != key) {
    i++;
  }
  if (i == array.length) {
    return false;
  } else {
    return true;
  }
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
    let ret = search(S, val);
    console.log("S: " + S + ", ret: " + ret);
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
