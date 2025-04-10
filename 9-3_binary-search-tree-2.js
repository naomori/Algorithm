class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

let root = null;

const insert = (key) => {
  let search = root;
  let parent = null;
  let node = new Node(key);

  while (search) {
    parent = search;
    if (node.key < search.key) {
      search = search.left;
    } else {
      search = search.right;
    }
  }
  node.parent = parent;
  if (!parent) {
    root = node;
  } else {
    if (node.key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }
};

const find = (node, key) => {
  let search = node;
  while (search && key != search.key) {
    if (key < search.key) {
      search = search.left;
    } else {
      search = search.right;
    }
  }
  return search;
};

const inorder = (node) => {
  if (!node) return;
  inorder(node.left);
  process.stdout.write(` ${node.key}`);
  inorder(node.right);
};

const preorder = (node) => {
  if (!node) return;
  process.stdout.write(` ${node.key}`);
  preorder(node.left);
  preorder(node.right);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m = 0;

rl.on("line", (line) => {
  if (m == 0) {
    m = parseInt(line.trim());
  } else {
    const instruction = line.trim().split(" ", 2);
    command = instruction[0];
    number = Number(instruction[1]);
    switch (command) {
      case "insert":
        insert(number);
        break;
      case "find":
        const found = find(root, number);
        if (found) {
          console.log("yes");
        } else {
          console.log("no");
        }
        break;
      case "print":
        inorder(root);
        console.log("");
        preorder(root);
        console.log("");
        break;
      default:
        break;
    }

    m--;
    if (m == 0) {
      rl.close();
    }
  }
}).on("close", () => {});

/*
8
insert 30
insert 88
insert 12
insert 1
insert 20
insert 17
insert 25
print
*/

/*
10
insert 30
insert 88
insert 12
insert 1
insert 20
find 12
insert 17
insert 25
find 16
print
*/
