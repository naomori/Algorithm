const parent = (idx) => {
  return Math.floor(idx / 2);
};

const left = (idx) => {
  return idx * 2;
};

const right = (idx) => {
  return idx * 2 + 1;
};

const print_heap = (a, H) => {
  a.forEach((key, index) => {
    process.stdout.write(`node ${index + 1}: key = ${a[index]}, `);
    if (parent(index + 1) >= 1) {
      process.stdout.write(`parent key = ${a[parent(index + 1) - 1]}, `);
    }
    if (left(index + 1) <= H) {
      process.stdout.write(`left key = ${a[left(index + 1) - 1]}, `);
    }
    if (right(index + 1) <= H) {
      process.stdout.write(`right key = ${a[right(index + 1) - 1]}, `);
    }
    console.log("");
  });
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let H = 0;
let a;

rl.on("line", (line) => {
  if (H == 0) {
    H = parseInt(line.trim());
  } else {
    a = line.trim().split(" ", H);
    rl.close();
  }
}).on("close", () => {
  print_heap(a, H);
});

/*
5
7 8 1 2 3
*/
