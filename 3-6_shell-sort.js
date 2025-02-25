const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let a = [];
let cnt = 0;
let G = [];

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim(), 10);
  } else {
    a.push(parseInt(line.trim(), 10));
    if (--n == 0) {
      rl.close();
    }
  }
}).on("close", () => {
  console.log(a);
  a1 = [...a];
  shellSort(a);

  console.log(G.reverse().join(" "));
  console.log(cnt);
  console.log(a.join(" "));
});

/**
 * This function sorts an array in ascending order by insertion sort.
 * @param {a} an array of numbers whose lenght is n.
 * @param {g} interval for that compares numbers.
 */
function insertionSort(a, g) {
  for (let i = g; i < a.length; i++) {
    let key = a[i];
    let j = i - g;

    // Move elements of a[g..n-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && a[j] > key) {
      a[j + g] = a[j];
      j -= g;
      cnt++;
    }
    a[j + g] = key;
  }
}

function shellSort(a) {
  for (let h = 1; h <= a.length; h = 3 * h + 1) {
    G.push(h);
  }

  for (let i = G.length - 1; i >= 0; i--) {
    insertionSort(a, G[i]);
  }
}
