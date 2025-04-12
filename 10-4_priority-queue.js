// time complexity: O(H)
// space complexity: O(H)

let H = 0;

const parent = (idx) => {
  return Math.floor(idx / 2);
};

const left = (idx) => {
  return idx * 2;
};

const right = (idx) => {
  return idx * 2 + 1;
};

function print_heap(A) {
  console.log(A);
  console.log(H);
  for (let index = 0; index < H; index++) {
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
  }
}

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

const increaseKey = (A, index, key) => {
  if (key < A[index - 1]) {
    return;
  }
  A[index - 1] = key;
  console.log(`insert A[${index - 1}] = ${key}`);
  while (index > 1 && A[parent(index) - 1] < A[index - 1]) {
    console.log(
      `swap A[${index - 1}] = ${A[index - 1]} <-> A[${parent(index) - 1}] = ${
        A[parent(index) - 1]
      }`
    );
    let tmp = A[index - 1];
    A[index - 1] = A[parent(index) - 1];
    A[parent(index) - 1] = tmp;
    index = parent(index);
    console.log(`index = ${index}`);
  }
};

const insert = (A, key) => {
  A[H++] = -Infinity;
  increaseKey(A, H, key);
};

const extract = (A) => {
  if (H < 1) {
    return -Infinity;
  }
  let maxv = A[0];
  A[0] = A[--H];
  maxHeapify(A, 1, H);
  return maxv;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = new Array(10).fill(-Infinity);

rl.on("line", (line) => {
  const instruction = line.trim().split(" ", 2);
  const command = instruction[0];
  const number = Number(instruction[1]);
  switch (command) {
    case "insert":
      insert(a, number);
      break;
    case "extract":
      const val = extract(a);
      console.log(`val: ${val}`);
      break;
    case "end":
    default:
      rl.close();
  }
}).on("close", () => {
  print_heap(a);
});

/*
insert 8
insert 2
extract
insert 10
extract
insert 11
extract
extract
end
*/
