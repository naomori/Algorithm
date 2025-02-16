const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let a = [];

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line, 10);
  } else if (a.length == 0) {
    a = line.split(" ", n).map((i) => parseInt(i, 10));
    rl.close();
  }
}).on("close", () => {
  let count = 0;
  [a, count] = selectoinSort(a);
  console.log(a.join(" "));
  console.log(count);
});

function selectoinSort(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let minj = i;
    for (let j = i; j < a.length; j++) {
      if (a[j] < a[minj]) {
        minj = j;
      }
    }
    if (i == minj) {
      continue;
    }
    let temp = a[i];
    a[i] = a[minj];
    a[minj] = temp;
    count++;
  }
  return [a, count];
}
