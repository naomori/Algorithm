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
  bubbleSort(a);
});

/**
 * This function sorts an array in ascending order by bubble sort.
 * @param {*} a an array of numbers to sort in ascending order
 */
function bubbleSort(a) {
  let swapped;
  let swapped_count = 0;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        // Swap elements
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
        swapped_count++;
      }
    }
  } while (swapped);

  console.log(a.join(" "));
  console.log(swapped_count);
}
