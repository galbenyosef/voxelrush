// index-Dp6GxvJu 28 — block
// Lines 37093-37380 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function SF(n, e, t, i, s = 0) {
  const o = n.getObjectByName("mouth");
  if (o) {
    const r = Math.max(s * 0.7, Math.min(1, i * 9));
    ((o.scale.y +=
      (1 + r * (2.5 + Math.sin(t * 29) * 0.8) - o.scale.y) *
      (1 - Math.exp(-24 * e))),
      (o.scale.x = 1 + r * 0.15));
  }
  const a = Math.sin(t * 0.83) > 0.998 ? 0.12 : 1;
  for (const r of ["eye-l", "eye-r"]) {
    const l = n.getObjectByName(r);
    l && (l.scale.y = a);
  }
}
const pk = 4,
  EF = 28,
  ST = (n) =>
    n
      .replace(/\r/g, "")
      .replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "")
      .split(
        `
`,
      )
      .slice(0, pk)
      .map((e) => Array.from(e).slice(0, EF).join("")).join(`
`);
function xF(n) {
  const e = (
    n.split(`
`)[1] ?? ""
  )
    .trim()
    .toLowerCase();
  return (
    {
      "[gate]": "gate",
      "[gate vertical]": "gate",
      "[gate horizontal]": "gate horizontal",
      "[bridge]": "bridge",
      "[lift up]": "lift up",
      "[lift down]": "lift down",
      "[lift]": "lift",
    }[e] ?? ""
  );
}
function mk(n) {
  const e = !!(n & 4),
    t = [[0.06, 0.42, e ? 0.03 : 0.45, 0.94, 0.96, e ? 0.13 : 0.55]];
  e || t.push([0.45, 0, 0.45, 0.55, 0.42, 0.55]);
  const i = (s, o) => {
    switch (n & 3) {
      case 1:
        return [o, 1 - s];
      case 2:
        return [1 - s, 1 - o];
      case 3:
        return [1 - o, s];
      default:
        return [s, o];
    }
  };
  return t.map(([s, o, a, r, l, c]) => {
    const h = i(s, a),
      d = i(r, c);
    return [
      Math.min(h[0], d[0]),
      o,
      Math.min(h[1], d[1]),
      Math.max(h[0], d[0]),
      l,
      Math.max(h[1], d[1]),
    ];
  });
}
function TF(n, e) {
  var i;
  if (!["gate", "gate horizontal", "bridge"].includes(xF(n))) return n;
  const t = n.split(`
`);
  for (const s of [2, 3]) {
    const o = (i = t[s]) == null ? void 0 : i.trim().split(/[, ]+/).map(Number);
    if (!o || o.length !== 3 || !o.every(Number.isFinite)) continue;
    let [a, r, l] = o;
    for (let c = 0; c < (e & 3); c++) [a, l] = [-l, a];
    t[s] = `${a},${r},${l}`;
  }
  return t.join(`
`);
}
const No = (n) => {
  var e, t;
  return (
    n > 0 &&
    !!((e = BLOCKS[n]) != null && e.solid) &&
    !((t = BLOCKS[n]) != null && t.liquid)
  );
};
function AF(n, e, t, i, s, o, a = 7) {
  var d;
  if (((d = BLOCKS[n]) == null ? void 0 : d.shape) !== "lantern") return [];
  const [r, l, c] = Oo[e & 7] ?? Oo[0],
    h = o(t + r, i + l, s + c);
  if (No(h) || h === BLOCK.CHAIN) return [];
  for (let u = 1; u <= a; u++) {
    const f = o(t, i + u, s);
    if (No(f) || f === BLOCK.CHAIN) {
      const p = [];
      for (let m = 1; m < u; m++) p.push({ x: t, y: i + m, z: s });
      return p;
    }
    if (f !== 0) return [];
  }
  return [];
}
const td = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
function _F(n, e, t, i, s, o) {
  var h;
  if (n === BLOCK.WALL_LIGHT) {
    const d = (u) =>
      No(o(t + td[u][0], i, s + td[u][1])) &&
      !No(o(t - td[u][0], i, s - td[u][1]));
    if (d(e & 3)) return e;
    for (let u = 0; u < 4; u++) if (d(u)) return (e & -4) | u;
    for (let u = 0; u < 4; u++)
      if (No(o(t + td[u][0], i, s + td[u][1]))) return (e & -4) | u;
    return e;
  }
  const a = (h = BLOCKS[n]) == null ? void 0 : h.shape;
  if (a !== "lantern" && a !== "torch" && a !== "ladder") return e;
  const r = (d) => {
      const [u, f, p] = Oo[d],
        m = o(t + u, i + f, s + p);
      return (
        (No(m) && !(a === "ladder" && m === BLOCK.LADDER)) ||
        (m === BLOCK.CHAIN &&
          ((d === 5 && a === "lantern") || (d === 0 && a !== "ladder")))
      );
    },
    l = e & 7,
    c =
      a === "ladder"
        ? [1, 2, 3, 4]
        : a === "torch"
          ? [0, 1, 2, 3, 4]
          : [0, 5, 1, 2, 3, 4];
  if (c.includes(l) && r(l)) return e;
  for (const d of c) if (r(d)) return (e & -8) | d;
  return e;
}
const ET = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ],
  Wa = (n) => !No(n);
function RF(n, e, t) {
  const i = new Map(),
    s = (l, c, h) => e(l, c, h) === BLOCK.LADDER;
  for (const l of n) s(l.x, l.y + 1, l.z) || i.set(`${l.x},${l.y},${l.z}`, l);
  let o = 0;
  const a = (l, c, h, d, u) => {
      (t(l, c, h, d, u), o++);
    },
    r = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
  for (const l of i.values()) {
    let { y: c } = l;
    const { x: h, z: d } = l,
      [u, f] = ET[l.meta & 7] ?? ET[4],
      p = (l.meta & 7) >= 1 && (l.meta & 7) <= 4 ? l.meta : (l.meta & -8) | 4,
      m = (g, b, S) =>
        No(e(g, S - 1, b)) &&
        e(g, S - 1, b) !== BLOCK.LADDER &&
        Wa(e(g, S, b)) &&
        Wa(e(g, S + 1, b)),
      y = (g) =>
        [g, g + 1].some((b) =>
          Wa(e(h, b, d)) || e(h, b, d) === BLOCK.LADDER
            ? r.some(
                ([S, M]) =>
                  m(h + S, d + M, b) &&
                  (!S ||
                    !M ||
                    (Wa(e(h + S, b, d)) && Wa(e(h + S, b + 1, d))) ||
                    (Wa(e(h, b, d + M)) && Wa(e(h, b + 1, d + M)))),
              )
            : !1,
        );
    for (let g = 0; g < 4 && !y(c); g++) {
      const b = e(h, c + 1, d);
      if (No(b) && No(e(h + u, c + 1, d + f))) {
        const M = No(e(h, c + 2, d)) ? 2 : 1;
        if (M === 1 || !No(e(h, c + 3, d))) {
          for (let x = 1; x <= M; x++) a(h, c + x, d, BLOCK.LADDER, p);
          c += M;
          continue;
        }
      }
      const S = [
        [-u, -f],
        [f, u],
        [-f, -u],
      ].find(
        ([M, x]) =>
          Wa(e(h + M, c, d + x)) &&
          Wa(e(h + M, c + 1, d + x)) &&
          Wa(e(h + M, c + 2, d + x)) &&
          e(h + M, c, d + x) !== BLOCK.LADDER,
      );
      if (S) {
        const M = No(e(h + u, c, d + f)) ? e(h + u, c, d + f) : BLOCK.STONE;
        if ((a(h + S[0], c, d + S[1], M, 0), y(c))) break;
      }
      if (!Wa(e(h, c + 1, d)) || !No(e(h + u, c + 1, d + f))) break;
      (a(h, c + 1, d, BLOCK.LADDER, p), c++);
    }
  }
  return o;
}
class In {
  constructor() {
    w(this, "foundation", BLOCK.STONE);
    w(this, "cells", new Map());
  }
  put(e, t, i, s, o = 0) {
    this.cells.set(`${e},${t},${i}`, { x: e, y: t, z: i, id: s, meta: o });
  }
  sign(e, t, i, s, o = 0) {
    (this.put(e, t, i, BLOCK.SIGN, o), (this.cells.get(`${e},${t},${i}`).text = s));
  }
  lift(e, t, i) {
    for (const s of i)
      for (let o = 0; o < 2; o++)
        (this.fill(e + o, s - 1, t, e + o, s - 1, t + 1, BLOCK.POLISHED_STONE),
          this.fill(e + o, s, t, e + o, s + 1, t + 1, BLOCK.AIR),
          this.sign(
            e + o,
            s,
            t,
            `Floor ${i.indexOf(s) + 1}
[${(o === 0 && s !== i.at(-1)) || s === i[0] ? "Lift Up" : "Lift Down"}]`,
          ));
  }
  fill(e, t, i, s, o, a, r, l = 0) {
    for (let c = t; c <= o; c++)
      for (let h = i; h <= a; h++)
        for (let d = e; d <= s; d++) this.put(d, c, h, r, l);
  }
  room(e, t, i, s, o, a, r, l) {
    (this.fill(e, t, i, s, t + o, a, r),
      this.fill(e + 1, t + 1, i + 1, s - 1, t + o - 1, a - 1, BLOCK.AIR),
      this.fill(e, t, i, s, t, a, l));
  }
  door(e, t, i, s = BLOCK.DOOR, o = 2) {
    (this.put(e, t, i, s, o), this.put(e, t + 1, i, s, o | Na));
  }
  bed(e, t, i, s = 0) {
    const [o, a] = xo[s];
    (this.put(e, t, i, BLOCK.BED, s), this.put(e + o, t, i + a, BLOCK.BED, s | Sp));
  }
  window(e, t, i, s, o, a = BLOCK.GLASS) {
    this.fill(e, t, i, s, t + 1, o, a);
  }
  gable(e, t, i, s, o) {
    for (let a = -e; a <= e; a++)
      this.fill(a, s + e - Math.abs(a), t, a, s + e - Math.abs(a), i, o);
    for (const a of [t + 1, i - 1])
      for (let r = -e + 1; r < e; r++)
        this.fill(r, s, a, r, s + e - Math.abs(r) - 1, a, BLOCK.PLANKS);
  }
}
