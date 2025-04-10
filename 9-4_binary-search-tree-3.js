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

const del = (node) => {
  let del_node;
  let child_node;

  if (!node.left && !node.right) {
    del_node = node;
  } else {
    del_node = getSuccessor(node);
    if (del_node.left) {
      child_node = del_node.left;
    } else {
      child_node = del_node.right;
    }

    if (child_node) {
      child_node.parent = del_node.parent;
    }

    if (!del_node.parent) {
      root = child_node;
    } else {
      if (del_node == del_node.parent.left) {
        del_node.parent.left = child_node;
      } else {
        del_node.parent.right = child_node;
      }
    }
  }

  if (del_node != node) {
    node.key = del_node.key;
  }

  delete del_node;
};

const getSuccessor = (node) => {
  if (node.right) {
    return getMinimum(node.right);
  }
  let parent = node.parent;
  while (parent && node == parent.right) {
    node = parent;
    parent = parent.parent;
  }
  return parent;
};

const getMinimum = (node) => {
  while (node.left) {
    node = node.left;
  }
  return node;
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
      case "delete":
        del(find(root, number));
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

/*
18
insert 8
insert 2
insert 3
insert 7
insert 22
insert 1
find 1
find 2
find 3
find 4
find 5
find 6
find 7
find 8
print
delete 3
delete 7
print
*/
