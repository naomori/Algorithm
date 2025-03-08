function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let n = 5;
console.log("factorial " + n + ": " + factorial(n));

function findMaximum(A, l, r) {
  let m = Math.floor((l + r) / 2);
  let x = -1;
  if (l == r - 1) {
    return A[l];
  } else {
    let u = findMaximum(A, l, m);
    let v = findMaximum(A, m, r);
    x = Math.max(u, v);
    console.log("x: ", x);
  }
  return x;
}

let A = [10, 5, 8, 2, 15, 1, 300, 51, 68, 72];

console.log("Maximum element: " + findMaximum(A, 0, A.length));
