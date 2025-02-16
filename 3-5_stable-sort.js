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
    a = line.split(" ", n).map((e) => {
      return {
        suit: e[0],
        value: e[1],
      };
    });
    rl.close();
  }
}).on("close", () => {
  console.log(a);
  a1 = [...a];
  bubbleSort(a1);
  console.log(isStable(a, a1) ? "Stable" : "Unstable");
  a2 = [...a];
  selectoinSort(a2);
  console.log(isStable(a, a2) ? "Stable" : "Unstable");
});

function bubbleSort(a) {
  let swapped;
  let swapped_count = 0;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i].value > a[i + 1].value) {
        // Swap elements
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
        swapped_count++;
      }
    }
  } while (swapped);
  a.map((e) => {
    process.stdout.write(e.suit + e.value + " ");
  });
  process.stdout.write("\n");
}

function selectoinSort(a) {
  let swapped_count = 0;
  for (let i = 0; i < a.length; i++) {
    let minj = i;
    for (let j = i; j < a.length; j++) {
      if (a[j].value < a[minj].value) {
        minj = j;
      }
    }
    let temp = a[i];
    a[i] = a[minj];
    a[minj] = temp;
    if (i == minj) {
      continue;
    }
    swapped_count++;
  }
  a.map((e) => {
    process.stdout.write(e.suit + e.value + " ");
  });
  process.stdout.write("\n");
}

function isStable(before, after) {
  if (before.length != after.length) {
    return false;
  }
  for (let i = 0; i < before.length; i++) {
    for (let j = i + 1; j < after.length; j++) {
      for (let a = 0; a < before.length; a++) {
        for (let b = a + 1; b < after.length; b++) {
          if (
            before[i].value == before[j].value &&
            before[i].suit + before[i].value ==
              after[b].suit + after[b].value &&
            before[j].suit + before[j].value == after[a].suit + after[a].value
          ) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
