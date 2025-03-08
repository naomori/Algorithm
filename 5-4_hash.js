// this function calculates a hash of the key by m as mod.
function h1(key, m) {
  return key % m;
}

function h2(key, m) {
  return 1 + (key % (m - 1));
}

function h(key, m, i) {
  return (h1(key, m) + i * h2(key, m)) % m;
}

function conv_char(c) {
  switch (c) {
    case "A":
      return 1;
    case "C":
      return 2;
    case "G":
      return 3;
    case "T":
      return 4;
    default:
      return 0;
  }
}

function get_key(str) {
  let sum = 0;
  let p = 1;
  let key_str = str.split("");
  key_str.forEach((c) => {
    sum += p * conv_char(c);
    p *= 5;
  });
  return sum;
}

function insert(T, m, str) {
  let key = get_key(str);
  let i = 0;
  while (true) {
    let index = h(key, m, i);
    if (T[index] == str) {
      console.log("already exist: index: " + index + ", T[index]: " + T[index]);
      return true;
    } else if (T[index] == -1) {
      T[index] = str;
      console.log("insert: key: " + key + ", M: " + m + ", i: " + i);
      console.log("index: " + index + ", T[index]: " + T[index]);
      return false;
    }
    if (++i > 100) {
      break;
    }
  }
  return false;
}

function find(T, m, str) {
  let key = get_key(str);
  let i = 0;
  while (true) {
    let index = h(key, m, i);
    if (T[index] == str) {
      console.log(
        "found str: " + str + ", index: " + index + ", T[index]: " + T[index]
      );
      return true;
    } else if (T[index] == -1) {
      console.log(
        "not found str: " +
          str +
          ", index: " +
          index +
          ", T[index]: " +
          T[index]
      );
      return false;
    }
    if (++i > 100) {
      break;
    }
  }
  return false;
}

const M = 1046527;

function build_array() {
  let a = new Array(M).fill(-1);
  /*
  for (let i = 0; i < M; i++) {
    a[i] = new Array(14).fill(0);
  }
    */
  return a;
}

let H = build_array();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", (line) => {
  let x;
  if (n == 0) {
    n = parseInt(line.trim());
  } else {
    let inst = line.trim().split(" ");
    switch (inst[0]) {
      case "insert":
        insert(H, M, inst[1]);
        break;
      case "find":
        if (find(H, M, inst[1])) {
          console.log("yes");
        } else {
          console.log("no");
        }
        break;
    }
    if (--n == 0) {
      rl.close();
    }
  }
}).on("close", () => {});

/*
6
insert AAA
insert AAC
find AAA
find CCC
insert CCC
find CCC
*/
