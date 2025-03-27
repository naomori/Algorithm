class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

function koch(n, p1, p2) {
  if (n === 0) return;

  const s = new Point(
    p1.x + ((p2.x - p1.x) * 1) / 3,
    p1.y + ((p2.y - p1.y) * 1) / 3
  );
  const t = new Point(
    p1.x + ((p2.x - p1.x) * 2) / 3,
    p1.y + ((p2.y - p1.y) * 2) / 3
  );
  const u = new Point(
    (t.x - s.x) * Math.cos((60 * Math.PI) / 180) -
      (t.y - s.y) * Math.sin((60 * Math.PI) / 180) +
      s.x,
    (t.x - s.x) * Math.sin((60 * Math.PI) / 180) +
      (t.y - s.y) * Math.cos((60 * Math.PI) / 180) +
      s.y
  );

  koch(n - 1, p1, s);
  console.log(s.x.toFixed(5), s.y.toFixed(5));

  koch(n - 1, s, u);
  console.log(u.x.toFixed(5), u.y.toFixed(5));

  koch(n - 1, u, t);
  console.log(t.x.toFixed(5), t.y.toFixed(5));

  koch(n - 1, t, p2);
}

let n = 1;
let p1 = new Point(0, 0);
let p2 = new Point(100, 0);

console.log(p1.x, p1.y);
koch(n, p1, p2);
console.log(p2.x, p2.y);
