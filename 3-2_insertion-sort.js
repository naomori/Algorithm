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
  insertionSort(a);
});

/**
 * This function sorts an array in ascending order by insertion sort.
 * @param {a} an array of numbers
 */
function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    // Move elements of a[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
    console.log(a.join(" "));
  }
}
