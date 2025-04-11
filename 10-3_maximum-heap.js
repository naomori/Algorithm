// time complexity: O(H)
// space complexity: O(H)

const parent = (idx) => {
  return Math.floor(idx / 2);
};

const left = (idx) => {
  return idx * 2;
};

const right = (idx) => {
  return idx * 2 + 1;
};

const print_heap = (A, H) => {
  A.forEach((key, index) => {
    process.stdout.write(`node ${index + 1}: key = ${A[index]}, `);
    if (parent(index + 1) >= 1) {
      process.stdout.write(`parent key = ${A[parent(index + 1) - 1]}, `);
    }
    if (left(index + 1) <= H) {
      process.stdout.write(`left key = ${A[left(index + 1) - 1]}, `);
    }
    if (right(index + 1) <= H) {
      process.stdout.write(`right key = ${A[right(index + 1) - 1]}, `);
    }
    console.log("");
  });
};

const maxHeapify = (A, index, H) => {
  let left_index = left(index);
  let right_index = right(index);
  let largest_index = 0;

  if (left_index <= H && A[left_index - 1] > A[index - 1]) {
    //console.log(`larger left ${left_index}:${A[left_index - 1]}`);
    //console.log(`larger left ${A[left_index - 1]} > ${A[index - 1]}`);
    largest_index = left_index;
  } else {
    //console.log(`larger node ${index}:${A[index - 1]}`);
    largest_index = index;
  }
  if (right_index <= H && A[right_index - 1] > A[largest_index - 1]) {
    //console.log(`largest right ${right_index}:${A[right_index - 1]}`);
    largest_index = right_index;
  }

  if (largest_index != index) {
    console.log(
      `XXX swap:A[${index}]=${A[index - 1]} <-> ` +
        `A[${largest_index}]=${A[largest_index - 1]}`
    );
    let tmp = A[index - 1];
    A[index - 1] = A[largest_index - 1];
    A[largest_index - 1] = tmp;

    maxHeapify(A, largest_index, H);
  } else {
    console.log(`ZZZ no-swap:A[${index}]=${A[index - 1]}`);
  }
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
    a = line.trim().split(" ", H).map(Number);
    rl.close();
  }
}).on("close", () => {
  for (let i = Math.floor(H / 2); i >= 1; i--) {
    maxHeapify(a, i, H);
  }
  a.forEach((key) => {
    process.stdout.write(`${key} `);
  });
  process.stdout.write("\n");

  print_heap(a, H);
});

/*
10
4 1 3 2 16 9 10 14 8 7
*/
