// index-Dp6GxvJu 40 — math
// Lines 40711-40993 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const MG = (n) =>
  (n >= BLOCK.REDSTONE && n <= BLOCK.DOOR) ||
  Ss(n) ||
  Do(n) ||
  n === BLOCK.SIGN ||
  n === BLOCK.RADIO_RELAY;
function Yu(n, e, t, i) {
  return i === 1
    ? [e, 1 - n, t]
    : i === 2
      ? [1 - e, n, t]
      : i === 3
        ? [n, 1 - t, e]
        : i === 4
          ? [n, t, 1 - e]
          : i === 5
            ? [n, 1 - e, 1 - t]
            : [n, e, t];
}
function M5(n, e) {
  const t = e(n[0], n[1], n[2]),
    i = e(n[3], n[4], n[5]);
  return [
    Math.min(t[0], i[0]),
    Math.min(t[1], i[1]),
    Math.min(t[2], i[2]),
    Math.max(t[0], i[0]),
    Math.max(t[1], i[1]),
    Math.max(t[2], i[2]),
  ];
}
function SG(n, e, t, i, s) {
  var r;
  const o = Oo[e(t, i, s) & 7] ?? Oo[0],
    a = [];
  for (const l of $f) {
    const c = t + l[0],
      h = i + l[1],
      d = s + l[2];
    if (n(c, h, d) !== BLOCK.REDSTONE) continue;
    const u = Oo[e(c, h, d) & 7] ?? Oo[0];
    l[0] * o[0] + l[1] * o[1] + l[2] * o[2] === 0 &&
      o.every((f, p) => f === u[p]) &&
      a.push(l);
  }
  for (const l of Oo) {
    if (o.reduce((f, p, m) => f + p * l[m], 0) !== 0) continue;
    const c = o.map((f, p) => f - l[p]),
      h = t + c[0],
      d = i + c[1],
      u = s + c[2];
    n(h, d, u) === BLOCK.REDSTONE &&
      (Oo[e(h, d, u) & 7] ?? Oo[0]).every((f, p) => f === l[p]) &&
      a.push(c);
  }
  if ((e(t, i, s) & 7) === 0)
    for (const [l, c] of xo)
      for (const h of [-1, 1])
        n(t + l, i + h, s + c) !== BLOCK.REDSTONE ||
          (e(t + l, i + h, s + c) & 7) !== 0 ||
          ((r =
            BLOCKS[
              n(h > 0 ? t : t + l, i + 1 * (h > 0 ? 1 : 0), h > 0 ? s : s + c)
            ]) != null &&
            r.solid) ||
          a.push([l, h, c]);
  return a;
}
function Mg(n, e, t, i, s = 0, o = 0, a = 0) {
  if (n === BLOCK.RADIO_RELAY) {
    const u = [],
      f = (p, m) => u.push({ box: p, tile: m });
    for (const p of [0.31, 0.63])
      for (const m of [0.35, 0.61]) f([p, 0, m, p + 0.06, 0.035, m + 0.06], 16);
    (f([0.29, 0.035, 0.32, 0.71, 0.075, 0.68], 16),
      f([0.31, 0.075, 0.34, 0.69, 0.235, 0.66], zl),
      f([0.3, 0.235, 0.33, 0.7, 0.26, 0.67], zl),
      f([0.35, 0.12, 0.328, 0.55, 0.205, 0.34], 16),
      f([0.365, 0.135, 0.324, 0.535, 0.19, 0.329], e & Qn ? jc : 16),
      f([0.59, 0.14, 0.32, 0.625, 0.18, 0.34], e & Qn ? 170 : 169));
    for (let p = 0; p < 4; p++)
      f([0.688, 0.1 + p * 0.028, 0.4, 0.701, 0.112 + p * 0.028, 0.58], 16);
    for (const p of [0.32, 0.66])
      for (const m of [0.35, 0.63])
        f([p, 0.26, m, p + 0.02, 0.266, m + 0.02], 16);
    return (
      f([0.605, 0.26, 0.58, 0.655, 0.3, 0.63], 16),
      f([0.621, 0.3, 0.596, 0.639, 0.62, 0.614], 16),
      f([0.618, 0.6, 0.593, 0.642, 0.65, 0.617], zl),
      u
    );
  }
  if (n < BLOCK.REDSTONE || n > BLOCK.PISTON_HEAD || n === BLOCK.RTORCH || n === BLOCK.LAMP)
    return null;
  const r = [],
    l = !!(e & Qn),
    c = e & 7,
    h = (u, f) => r.push({ box: u, tile: f });
  let d = !0;
  if (n === BLOCK.REDSTONE) {
    const u = dC(e) ? 170 : 169;
    h([0.38, 0.012, 0.38, 0.62, 0.04, 0.62], u);
    const f = [];
    if (t && i) {
      f.push(...SG(t, i, s, o, a));
      const g = Oo[c] ?? Oo[0];
      for (const b of $f)
        b[0] * g[0] + b[1] * g[1] + b[2] * g[2] === 0 &&
          MG(t(s + b[0], o + b[1], a + b[2])) &&
          t(s + b[0], o + b[1], a + b[2]) !== BLOCK.REDSTONE &&
          f.push(b);
    } else f.push([1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]);
    const p = Yu(0.5, 0, 0.5, c),
      m = Yu(1, 0, 0.5, c),
      y = Yu(0.5, 0, 1, c);
    for (const g of f) {
      const b = g.reduce((M, x, T) => M + x * (m[T] - p[T]) * 2, 0),
        S = g.reduce((M, x, T) => M + x * (y[T] - p[T]) * 2, 0);
      if (
        (b && h([b < 0 ? 0 : 0.5, 0.012, 0.43, b > 0 ? 1 : 0.5, 0.04, 0.57], u),
        S && h([0.43, 0.012, S < 0 ? 0 : 0.5, 0.57, 0.04, S > 0 ? 1 : 0.5], u),
        c === 0 && g[1] > 0)
      ) {
        const [M, , x] = g;
        h(
          [
            M < 0 ? 0 : M > 0 ? 0.97 : 0.43,
            0.04,
            x < 0 ? 0 : x > 0 ? 0.97 : 0.43,
            M ? (M < 0 ? 0.03 : 1) : 0.57,
            1,
            x ? (x < 0 ? 0.03 : 1) : 0.57,
          ],
          u,
        );
      }
    }
  } else if (n === BLOCK.LEVER) {
    (h([0.28, 0, 0.27, 0.72, 0.12, 0.73], 26),
      h([0.42, 0.12, 0.4, 0.58, 0.2, 0.6], 16));
    for (let f = 0; f < 4; f++) {
      const p = 0.46 + (l ? -1 : 1) * f * 0.047;
      h([0.455, 0.18 + f * 0.06, p, 0.545, 0.26 + f * 0.06, p + 0.09], 8);
    }
    const u = 0.46 + (l ? -1 : 1) * 3 * 0.047;
    h([0.435, 0.39, u - 0.015, 0.565, 0.47, u + 0.105], l ? 170 : 16);
  } else if (n === BLOCK.BUTTON)
    (h([0.28, 0, 0.32, 0.72, 0.035, 0.68], 16),
      h([0.32, 0.035, 0.36, 0.68, l ? 0.065 : 0.12, 0.64], 3));
  else if (n === BLOCK.PLATE)
    ((d = !1),
      h([0.06, 0, 0.06, 0.94, 0.025, 0.94], 16),
      h([0.08, 0.025, 0.08, 0.92, l ? 0.04 : 0.09, 0.92], 3));
  else if (n === BLOCK.REPEATER) {
    ((d = !1),
      h([0.08, 0, 0.06, 0.92, 0.1, 0.94], 3),
      h([0.42, 0.1, 0.12, 0.58, 0.115, 0.88], l ? 170 : 169));
    const u = (e >> 4) & 3;
    for (const f of [0.2, 0.51 + u * 0.085])
      (h([0.44, 0.11, f - 0.055, 0.56, 0.29, f + 0.055], 8),
        h([0.42, 0.25, f - 0.075, 0.58, 0.35, f + 0.075], l ? 170 : 169));
    return r.map((f) => ({
      ...f,
      box: M5(f.box, (p, m, y) => {
        const g = e & 3;
        return g === 1
          ? [1 - y, m, p]
          : g === 2
            ? [1 - p, m, 1 - y]
            : g === 3
              ? [y, m, 1 - p]
              : [p, m, y];
      }),
    }));
  } else if (n === BLOCK.PISTON || n === BLOCK.SPISTON || n === BLOCK.PISTON_HEAD) {
    d = !1;
    const u = $f[e & 7] ?? $f[3];
    if (n !== BLOCK.PISTON_HEAD) {
      h([0, 0, 0, 1, l ? 0.72 : 0.82, 1], 33);
      for (const p of [0, 0.86])
        for (const m of [0, 0.86]) h([p, 0, m, p + 0.14, 0.82, m + 0.14], 16);
      l
        ? h([0.4, 0.72, 0.4, 0.6, 1, 0.6], 8)
        : h([0, 0.82, 0, 1, 1, 1], n === BLOCK.SPISTON ? 34 : 32);
    } else
      (h([0, 0.75, 0, 1, 1, 1], e & 16 ? 34 : 32),
        h([0.4, 0, 0.4, 0.6, 0.75, 0.6], 8));
    const f = Oo.findIndex(
      (p) => p[0] === -u[0] && p[1] === -u[1] && p[2] === -u[2],
    );
    return r.map((p) => ({
      ...p,
      box: M5(p.box, (m, y, g) => Yu(m, y, g, f)),
    }));
  } else return null;
  return d
    ? r.map((u) => ({ ...u, box: M5(u.box, (f, p, m) => Yu(f, p, m, c)) }))
    : r;
}
function _y(n) {
  let e = n >>> 0;
  return () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function rn(n, e, t) {
  let i = (n ^ Math.imul(e, 374761393) ^ Math.imul(t, 668265263)) >>> 0;
  return (
    (i = (i ^ (i >>> 13)) >>> 0),
    (i = Math.imul(i, 1274126177) >>> 0),
    ((i ^ (i >>> 16)) >>> 0) / 4294967296
  );
}
const OT = (n) => n * n * (3 - 2 * n);
function EG(n, e, t) {
  const i = Math.floor(e),
    s = Math.floor(t),
    o = OT(e - i),
    a = OT(t - s),
    r = rn(n, i, s),
    l = rn(n, i + 1, s),
    c = rn(n, i, s + 1),
    h = rn(n, i + 1, s + 1);
  return r + (l - r) * o + (c - r) * a + (r - l - c + h) * o * a;
}
function Fs(n, e, t, i) {
  let s = 0,
    o = 0.5,
    a = 1,
    r = 0;
  for (let l = 0; l < i; l++)
    ((s += (EG(n + l * 1013, e * a, t * a) * 2 - 1) * o),
      (r += o),
      (o *= 0.5),
      (a *= 2));
  return s / r;
}
const Dc = 128,
  xc = 58,
  S5 = 46;
function xG(n) {
  if (n.kind === "room")
    return {
      x0: n.x - n.r,
      y0: n.y,
      z0: n.z - n.r,
      x1: n.x + n.r,
      y1: n.y + 3,
      z1: n.z + n.r,
    };
  const e = n.kind === "stair" ? 6 : n.len,
    t = 0,
    i = (e - 1) * n.dir,
    s = Math.min(t, i),
    o = Math.max(t, i),
    a = n.kind === "stair" ? n.y - 3 : n.y,
    r = n.y + (n.kind === "stair" ? 3 : 2);
  return n.axis === "x"
    ? { x0: n.x + s, y0: a, z0: n.z - 1, x1: n.x + o, y1: r, z1: n.z + 1 }
    : { x0: n.x - 1, y0: a, z0: n.z + s, x1: n.x + 1, y1: r, z1: n.z + o };
}
const TG = (n, e, t, i) =>
    e >= n.x0 && e <= n.x1 && t >= n.y0 && t <= n.y1 && i >= n.z0 && i <= n.z1,
  id = new Map();
function AG(n, e, t, i) {
  const s = `${n}:${e},${t}`;
  if (id.has(s)) return id.get(s);
  let o = null;
  if (rn(n + 4401, e, t) < 0.58) {
    const a = _y((rn(n + 4409, e, t) * 4294967296) >>> 0),
      r = e * Dc + 30 + Math.floor(a() * (Dc - 60)),
      l = t * Dc + 30 + Math.floor(a() * (Dc - 60)),
      c = i(r, l),
      h = Math.min(13 + Math.floor(a() * 22), c - 18);
    h >= 11 && (o = _G(r, h, l, a));
  }
  return (id.set(s, o), id.size > 96 && id.delete(id.keys().next().value), o);
}
