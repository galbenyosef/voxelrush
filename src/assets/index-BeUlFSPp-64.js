// index-BeUlFSPp 64 — math
// Lines 49947-50281 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const RY = (s) =>
  (s >= v.REDSTONE && s <= v.DOOR) ||
  zn(s) ||
  Io(s) ||
  s === v.SIGN ||
  s === v.RADIO_RELAY;
function Sp(s, e, t, i) {
  return i === 1
    ? [e, 1 - s, t]
    : i === 2
      ? [1 - e, s, t]
      : i === 3
        ? [s, 1 - t, e]
        : i === 4
          ? [s, t, 1 - e]
          : i === 5
            ? [s, 1 - e, 1 - t]
            : [s, e, t];
}
function Nb(s, e) {
  const t = e(s[0], s[1], s[2]),
    i = e(s[3], s[4], s[5]);
  return [
    Math.min(t[0], i[0]),
    Math.min(t[1], i[1]),
    Math.min(t[2], i[2]),
    Math.max(t[0], i[0]),
    Math.max(t[1], i[1]),
    Math.max(t[2], i[2]),
  ];
}
function kY(s, e, t, i, n) {
  const o = oa[e(t, i, n) & 7] ?? oa[0],
    a = [];
  for (const r of M1) {
    const l = t + r[0],
      c = i + r[1],
      h = n + r[2];
    if (s(l, c, h) !== v.REDSTONE) continue;
    const d = oa[e(l, c, h) & 7] ?? oa[0];
    r[0] * o[0] + r[1] * o[1] + r[2] * o[2] === 0 &&
      o.every((u, f) => u === d[f]) &&
      a.push(r);
  }
  for (const r of oa) {
    if (o.reduce((u, f, p) => u + f * r[p], 0) !== 0) continue;
    const l = o.map((u, f) => u - r[f]),
      c = t + l[0],
      h = i + l[1],
      d = n + l[2];
    s(c, h, d) === v.REDSTONE &&
      (oa[e(c, h, d) & 7] ?? oa[0]).every((u, f) => u === r[f]) &&
      a.push(l);
  }
  if ((e(t, i, n) & 7) === 0)
    for (const [r, l] of Qo)
      for (const c of [-1, 1])
        s(t + r, i + c, n + l) !== v.REDSTONE ||
          (e(t + r, i + c, n + l) & 7) !== 0 ||
          le[s(c > 0 ? t : t + r, i + 1 * (c > 0 ? 1 : 0), c > 0 ? n : n + l)]
            ?.solid ||
          a.push([r, c, l]);
  return a;
}
function Ev(s, e, t, i, n = 0, o = 0, a = 0) {
  if (s === v.RADIO_RELAY) {
    const u = [],
      f = (p, m) => u.push({ box: p, tile: m });
    for (const p of [0.31, 0.63])
      for (const m of [0.35, 0.61]) f([p, 0, m, p + 0.06, 0.035, m + 0.06], 16);
    (f([0.29, 0.035, 0.32, 0.71, 0.075, 0.68], 16),
      f([0.31, 0.075, 0.34, 0.69, 0.235, 0.66], Rc),
      f([0.3, 0.235, 0.33, 0.7, 0.26, 0.67], Rc),
      f([0.35, 0.12, 0.328, 0.55, 0.205, 0.34], 16),
      f([0.365, 0.135, 0.324, 0.535, 0.19, 0.329], e & fn ? F0 : 16),
      f([0.59, 0.14, 0.32, 0.625, 0.18, 0.34], e & fn ? 170 : 169));
    for (let p = 0; p < 4; p++)
      f([0.688, 0.1 + p * 0.028, 0.4, 0.701, 0.112 + p * 0.028, 0.58], 16);
    for (const p of [0.32, 0.66])
      for (const m of [0.35, 0.63])
        f([p, 0.26, m, p + 0.02, 0.266, m + 0.02], 16);
    return (
      f([0.605, 0.26, 0.58, 0.655, 0.3, 0.63], 16),
      f([0.621, 0.3, 0.596, 0.639, 0.62, 0.614], 16),
      f([0.618, 0.6, 0.593, 0.642, 0.65, 0.617], Rc),
      u
    );
  }
  if (s < v.REDSTONE || s > v.PISTON_HEAD || s === v.RTORCH || s === v.LAMP)
    return null;
  const r = [],
    l = !!(e & fn),
    c = e & 7,
    h = (u, f) => r.push({ box: u, tile: f });
  let d = !0;
  if (s === v.REDSTONE) {
    const u = kI(e) ? 170 : 169;
    h([0.38, 0.012, 0.38, 0.62, 0.04, 0.62], u);
    const f = [];
    if (t && i) {
      f.push(...kY(t, i, n, o, a));
      const y = oa[c] ?? oa[0];
      for (const b of M1)
        b[0] * y[0] + b[1] * y[1] + b[2] * y[2] === 0 &&
          RY(t(n + b[0], o + b[1], a + b[2])) &&
          t(n + b[0], o + b[1], a + b[2]) !== v.REDSTONE &&
          f.push(b);
    } else f.push([1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]);
    const p = Sp(0.5, 0, 0.5, c),
      m = Sp(1, 0, 0.5, c),
      g = Sp(0.5, 0, 1, c);
    for (const y of f) {
      const b = y.reduce((M, E, A) => M + E * (m[A] - p[A]) * 2, 0),
        S = y.reduce((M, E, A) => M + E * (g[A] - p[A]) * 2, 0);
      if (
        (b && h([b < 0 ? 0 : 0.5, 0.012, 0.43, b > 0 ? 1 : 0.5, 0.04, 0.57], u),
        S && h([0.43, 0.012, S < 0 ? 0 : 0.5, 0.57, 0.04, S > 0 ? 1 : 0.5], u),
        c === 0 && y[1] > 0)
      ) {
        const [M, , E] = y;
        h(
          [
            M < 0 ? 0 : M > 0 ? 0.97 : 0.43,
            0.04,
            E < 0 ? 0 : E > 0 ? 0.97 : 0.43,
            M ? (M < 0 ? 0.03 : 1) : 0.57,
            1,
            E ? (E < 0 ? 0.03 : 1) : 0.57,
          ],
          u,
        );
      }
    }
  } else if (s === v.LEVER) {
    (h([0.28, 0, 0.27, 0.72, 0.12, 0.73], 26),
      h([0.42, 0.12, 0.4, 0.58, 0.2, 0.6], 16));
    for (let f = 0; f < 4; f++) {
      const p = 0.46 + (l ? -1 : 1) * f * 0.047;
      h([0.455, 0.18 + f * 0.06, p, 0.545, 0.26 + f * 0.06, p + 0.09], 8);
    }
    const u = 0.46 + (l ? -1 : 1) * 3 * 0.047;
    h([0.435, 0.39, u - 0.015, 0.565, 0.47, u + 0.105], l ? 170 : 16);
  } else if (s === v.BUTTON)
    (h([0.28, 0, 0.32, 0.72, 0.035, 0.68], 16),
      h([0.32, 0.035, 0.36, 0.68, l ? 0.065 : 0.12, 0.64], 3));
  else if (s === v.PLATE)
    ((d = !1),
      h([0.06, 0, 0.06, 0.94, 0.025, 0.94], 16),
      h([0.08, 0.025, 0.08, 0.92, l ? 0.04 : 0.09, 0.92], 3));
  else if (s === v.REPEATER) {
    ((d = !1),
      h([0.08, 0, 0.06, 0.92, 0.1, 0.94], 3),
      h([0.42, 0.1, 0.12, 0.58, 0.115, 0.88], l ? 170 : 169));
    const u = (e >> 4) & 3;
    for (const f of [0.2, 0.51 + u * 0.085])
      (h([0.44, 0.11, f - 0.055, 0.56, 0.29, f + 0.055], 8),
        h([0.42, 0.25, f - 0.075, 0.58, 0.35, f + 0.075], l ? 170 : 169));
    return r.map((f) => ({
      ...f,
      box: Nb(f.box, (p, m, g) => {
        const y = e & 3;
        return y === 1
          ? [1 - g, m, p]
          : y === 2
            ? [1 - p, m, 1 - g]
            : y === 3
              ? [g, m, 1 - p]
              : [p, m, g];
      }),
    }));
  } else if (s === v.PISTON || s === v.SPISTON || s === v.PISTON_HEAD) {
    d = !1;
    const u = M1[e & 7] ?? M1[3];
    if (s !== v.PISTON_HEAD) {
      h([0, 0, 0, 1, l ? 0.72 : 0.82, 1], 33);
      for (const p of [0, 0.86])
        for (const m of [0, 0.86]) h([p, 0, m, p + 0.14, 0.82, m + 0.14], 16);
      l
        ? h([0.4, 0.72, 0.4, 0.6, 1, 0.6], 8)
        : h([0, 0.82, 0, 1, 1, 1], s === v.SPISTON ? 34 : 32);
    } else
      (h([0, 0.75, 0, 1, 1, 1], e & 16 ? 34 : 32),
        h([0.4, 0, 0.4, 0.6, 0.75, 0.6], 8));
    const f = oa.findIndex(
      (p) => p[0] === -u[0] && p[1] === -u[1] && p[2] === -u[2],
    );
    return r.map((p) => ({
      ...p,
      box: Nb(p.box, (m, g, y) => Sp(m, g, y, f)),
    }));
  } else return null;
  return d
    ? r.map((u) => ({ ...u, box: Nb(u.box, (f, p, m) => Sp(f, p, m, c)) }))
    : r;
}
const R0 = 128,
  m0 = 58,
  Db = 46;
function CY(s) {
  if (s.kind === "room")
    return {
      x0: s.x - s.r,
      y0: s.y,
      z0: s.z - s.r,
      x1: s.x + s.r,
      y1: s.y + 3,
      z1: s.z + s.r,
    };
  const e = s.kind === "stair" ? 6 : s.len,
    t = 0,
    i = (e - 1) * s.dir,
    n = Math.min(t, i),
    o = Math.max(t, i),
    a = s.kind === "stair" ? s.y - 3 : s.y,
    r = s.y + (s.kind === "stair" ? 3 : 2);
  return s.axis === "x"
    ? { x0: s.x + n, y0: a, z0: s.z - 1, x1: s.x + o, y1: r, z1: s.z + 1 }
    : { x0: s.x - 1, y0: a, z0: s.z + n, x1: s.x + 1, y1: r, z1: s.z + o };
}
const LY = (s, e, t, i) =>
    e >= s.x0 && e <= s.x1 && t >= s.y0 && t <= s.y1 && i >= s.z0 && i <= s.z1,
  du = new Map();
function IY(s, e, t, i) {
  const n = `${s}:${e},${t}`;
  if (du.has(n)) return du.get(n);
  let o = null;
  if (Oi(s + 4401, e, t) < 0.58) {
    const a = x5((Oi(s + 4409, e, t) * 4294967296) >>> 0),
      r = e * R0 + 30 + Math.floor(a() * (R0 - 60)),
      l = t * R0 + 30 + Math.floor(a() * (R0 - 60)),
      c = i(r, l),
      h = Math.min(13 + Math.floor(a() * 22), c - 18);
    h >= 11 && (o = PY(r, h, l, a));
  }
  return (du.set(n, o), du.size > 96 && du.delete(du.keys().next().value), o);
}
function PY(s, e, t, i) {
  const n = [],
    o = () => Math.floor(i() * 1e9);
  n.push({ kind: "room", x: s, y: e, z: t, r: 4, seed: o() });
  const a = (l, c) => Math.abs(l - s) <= m0 && Math.abs(c - t) <= m0,
    r = (l, c, h, d, u, f) => {
      if (n.length >= Db || f > 6) return;
      let p = 9 + Math.floor(i() * 5) * 4;
      for (
        ;
        p > 5 &&
        !a(l === "x" ? h + (p - 1) * c : h, l === "z" ? u + (p - 1) * c : u);
      )
        p -= 4;
      if (p <= 5) return;
      n.push({
        kind: "corridor",
        axis: l,
        dir: c,
        x: h,
        y: d,
        z: u,
        len: p,
        seed: o(),
      });
      const m = l === "x" ? h + (p - 1) * c : h,
        g = l === "z" ? u + (p - 1) * c : u,
        y = i(),
        b = (M) => {
          r(
            l === "x" ? "z" : "x",
            M,
            l === "x" ? m : m + 2 * M,
            d,
            l === "z" ? g : g + 2 * M,
            f + 1,
          );
        },
        S = (M) =>
          r(l, c, l === "x" ? m + c : m, M, l === "z" ? g + c : g, f + 1);
      if (y < 0.4) (i() < 0.75 && b(1), i() < 0.75 && b(-1), i() < 0.5 && S(d));
      else if (y < 0.6 && d - 3 >= 10) {
        const M = l === "x" ? m + c : m,
          E = l === "z" ? g + c : g;
        a(l === "x" ? M + 6 * c : M, l === "z" ? E + 6 * c : E) &&
          n.length < Db &&
          (n.push({
            kind: "stair",
            axis: l,
            dir: c,
            x: M,
            y: d,
            z: E,
            seed: o(),
          }),
          r(
            l,
            c,
            l === "x" ? M + 6 * c : M,
            d - 3,
            l === "z" ? E + 6 * c : E,
            f + 1,
          ));
      } else if (y < 0.82) b(i() < 0.5 ? 1 : -1);
      else if (y < 0.9 && n.length < Db - 1) {
        const M = l === "x" ? m + 4 * c : m,
          E = l === "z" ? g + 4 * c : g;
        a(M, E) && n.push({ kind: "room", x: M, y: d, z: E, r: 3, seed: o() });
      }
    };
  for (const [l, c] of [
    ["x", 1],
    ["x", -1],
    ["z", 1],
    ["z", -1],
  ])
    i() < 0.85 &&
      r(l, c, l === "x" ? s + 5 * c : s, e, l === "z" ? t + 5 * c : t, 0);
  return { pieces: n, boxes: n.map(CY), cx: s, cz: t };
}
function OY(s, e, t, i) {
  const n = e * ke,
    o = t * ke,
    a = [],
    r = Math.floor((n - m0 - 8) / R0),
    l = Math.floor((n + ke + m0 + 8) / R0),
    c = Math.floor((o - m0 - 8) / R0),
    h = Math.floor((o + ke + m0 + 8) / R0);
  for (let d = r; d <= l; d++)
    for (let u = c; u <= h; u++) {
      const f = IY(s, d, u, i);
      f &&
        Math.abs(f.cx - (n + 8)) <= m0 + 16 &&
        Math.abs(f.cz - (o + 8)) <= m0 + 16 &&
        a.push(f);
    }
  return a;
}
const NY = (s, e) => (s === "x" ? (e > 0 ? 3 : 1) : e > 0 ? 0 : 2);
