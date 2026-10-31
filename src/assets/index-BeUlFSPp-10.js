// index-BeUlFSPp 10 — ladder
// Lines 28873-29022 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function gW(s, e) {
  if (!["gate", "gate horizontal", "bridge"].includes(mW(s))) return s;
  const t = s.split(`
`);
  for (const i of [2, 3]) {
    const n = t[i]?.trim().split(/[, ]+/).map(Number);
    if (!n || n.length !== 3 || !n.every(Number.isFinite)) continue;
    let [o, a, r] = n;
    for (let l = 0; l < (e & 3); l++) [o, r] = [-r, o];
    t[i] = `${o},${a},${r}`;
  }
  return t.join(`
`);
}
const aa = (s) => s > 0 && !!le[s]?.solid && !le[s]?.liquid;
function yW(s, e, t, i, n, o, a = 7) {
  if (le[s]?.shape !== "lantern") return [];
  const [r, l, c] = oa[e & 7] ?? oa[0],
    h = o(t + r, i + l, n + c);
  if (aa(h) || h === v.CHAIN) return [];
  for (let d = 1; d <= a; d++) {
    const u = o(t, i + d, n);
    if (aa(u) || u === v.CHAIN) {
      const f = [];
      for (let p = 1; p < d; p++) f.push({ x: t, y: i + p, z: n });
      return f;
    }
    if (u !== 0) return [];
  }
  return [];
}
const iu = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
function vW(s, e, t, i, n, o) {
  if (s === v.WALL_LIGHT) {
    const h = (d) =>
      aa(o(t + iu[d][0], i, n + iu[d][1])) &&
      !aa(o(t - iu[d][0], i, n - iu[d][1]));
    if (h(e & 3)) return e;
    for (let d = 0; d < 4; d++) if (h(d)) return (e & -4) | d;
    for (let d = 0; d < 4; d++)
      if (aa(o(t + iu[d][0], i, n + iu[d][1]))) return (e & -4) | d;
    return e;
  }
  const a = le[s]?.shape;
  if (a !== "lantern" && a !== "torch" && a !== "ladder") return e;
  const r = (h) => {
      const [d, u, f] = oa[h],
        p = o(t + d, i + u, n + f);
      return (
        (aa(p) && !(a === "ladder" && p === v.LADDER)) ||
        (p === v.CHAIN &&
          ((h === 5 && a === "lantern") || (h === 0 && a !== "ladder")))
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
  for (const h of c) if (r(h)) return (e & -8) | h;
  return e;
}
const kx = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ],
  Cr = (s) => !aa(s);
function bW(s, e, t) {
  const i = new Map(),
    n = (l, c, h) => e(l, c, h) === v.LADDER;
  for (const l of s) n(l.x, l.y + 1, l.z) || i.set(`${l.x},${l.y},${l.z}`, l);
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
      [u, f] = kx[l.meta & 7] ?? kx[4],
      p = (l.meta & 7) >= 1 && (l.meta & 7) <= 4 ? l.meta : (l.meta & -8) | 4,
      m = (y, b, S) =>
        aa(e(y, S - 1, b)) &&
        e(y, S - 1, b) !== v.LADDER &&
        Cr(e(y, S, b)) &&
        Cr(e(y, S + 1, b)),
      g = (y) =>
        [y, y + 1].some((b) =>
          Cr(e(h, b, d)) || e(h, b, d) === v.LADDER
            ? r.some(
                ([S, M]) =>
                  m(h + S, d + M, b) &&
                  (!S ||
                    !M ||
                    (Cr(e(h + S, b, d)) && Cr(e(h + S, b + 1, d))) ||
                    (Cr(e(h, b, d + M)) && Cr(e(h, b + 1, d + M)))),
              )
            : !1,
        );
    for (let y = 0; y < 4 && !g(c); y++) {
      const b = e(h, c + 1, d);
      if (aa(b) && aa(e(h + u, c + 1, d + f))) {
        const M = aa(e(h, c + 2, d)) ? 2 : 1;
        if (M === 1 || !aa(e(h, c + 3, d))) {
          for (let E = 1; E <= M; E++) a(h, c + E, d, v.LADDER, p);
          c += M;
          continue;
        }
      }
      const S = [
        [-u, -f],
        [f, u],
        [-f, -u],
      ].find(
        ([M, E]) =>
          Cr(e(h + M, c, d + E)) &&
          Cr(e(h + M, c + 1, d + E)) &&
          Cr(e(h + M, c + 2, d + E)) &&
          e(h + M, c, d + E) !== v.LADDER,
      );
      if (S) {
        const M = aa(e(h + u, c, d + f)) ? e(h + u, c, d + f) : v.STONE;
        if ((a(h + S[0], c, d + S[1], M, 0), g(c))) break;
      }
      if (!Cr(e(h, c + 1, d)) || !aa(e(h + u, c + 1, d + f))) break;
      (a(h, c + 1, d, v.LADDER, p), c++);
    }
  }
  return o;
}
