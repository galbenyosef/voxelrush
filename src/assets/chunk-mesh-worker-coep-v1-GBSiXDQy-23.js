// chunk-mesh-worker-coep-v1-GBSiXDQy 23 — math
// Lines 7496-7820 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function br(r) {
  if ($s.has(r)) return $s.get(r);
  const t = [],
    e = 12,
    s = 4,
    n = (i) =>
      r === 0 ? [i[1], -i[0], i[2]] : r === 2 ? [i[0], -i[2], i[1]] : i;
  for (let i = 0; i < 4; i++) {
    const c = (h, o) => {
      const a = (h / e) * Math.PI * 2,
        u = (o / s) * Math.PI * 2,
        d = Math.cos(a) / 0.105,
        l = Math.sin(a) / 0.17,
        f = Math.hypot(d, l),
        m = 0.105 * Math.cos(a) + (0.027 * Math.cos(u) * d) / f,
        _ = 0.17 * Math.sin(a) + (0.027 * Math.cos(u) * l) / f,
        g = 0.027 * Math.sin(u),
        y = n(i % 2 ? [g, _, -m] : [m, _, g]);
      return ((y[r] += (i + 0.5) / 4 - 0.5), y.map((R) => R + 0.5));
    };
    for (let h = 0; h < e; h++)
      for (let o = 0; o < s; o++) {
        const a = [c(h, o), c(h + 1, o), c(h, o + 1), c(h + 1, o + 1)],
          u = a[1].map((m, _) => m - a[0][_]),
          d = a[2].map((m, _) => m - a[0][_]),
          l = [
            u[1] * d[2] - u[2] * d[1],
            u[2] * d[0] - u[0] * d[2],
            u[0] * d[1] - u[1] * d[0],
          ],
          f = Math.hypot(...l);
        (l.forEach((m, _) => (l[_] = m / f)), t.push({ points: a, normal: l }));
      }
  }
  return ($s.set(r, t), t);
}
function wt(r, t, e) {
  let s = (r ^ Math.imul(t, 374761393) ^ Math.imul(e, 668265263)) >>> 0;
  return (
    (s = (s ^ (s >>> 13)) >>> 0),
    (s = Math.imul(s, 1274126177) >>> 0),
    ((s ^ (s >>> 16)) >>> 0) / 4294967296
  );
}
const zn = (r) => r * r * (3 - 2 * r);
function Or(r, t, e) {
  const s = Math.floor(t),
    n = Math.floor(e),
    i = zn(t - s),
    c = zn(e - n),
    h = wt(r, s, n),
    o = wt(r, s + 1, n),
    a = wt(r, s, n + 1),
    u = wt(r, s + 1, n + 1);
  return h + (o - h) * i + (a - h) * c + (h - o - a + u) * i * c;
}
function xt(r, t, e, s) {
  let n = 0,
    i = 0.5,
    c = 1,
    h = 0;
  for (let o = 0; o < s; o++)
    ((n += (Or(r + o * 1013, t * c, e * c) * 2 - 1) * i),
      (h += i),
      (i *= 0.5),
      (c *= 2));
  return n / h;
}
const Re = 640,
  ke = new Map();
function Mi(r, t, e) {
  const s = `${r}:${t}:${e}`;
  if (ke.has(s)) return ke.get(s);
  const n = t * Re + 250 + Math.floor(wt(r + 9001, t, e) * 140),
    i = e * Re + 250 + Math.floor(wt(r + 9007, t, e) * 140),
    c = xt(r + 301, n * 72e-5, i * 72e-5, 4),
    h = xt(r + 401, n * 9e-4, i * 9e-4, 3),
    o = xt(r + 501, n * 82e-5, i * 82e-5, 3),
    a = wt(r + 9011, t, e),
    u =
      c < -0.19
        ? "islands"
        : h > 0.18 && o < 0.07
          ? "oasis"
          : h > 0 && o < 0.02 && a > 0.25
            ? "savanna"
            : a < 0.33
              ? "volcanic"
              : a < 0.66
                ? "alpine"
                : "yellowstone",
    d =
      wt(r + 9013, t, e) < 0.22 || Math.hypot(n, i) < 280
        ? null
        : {
            kind: u,
            x: n,
            z: i,
            radius: 200,
            seed: Math.floor(wt(r + 9019, t, e) * 2147483647),
          };
  return (ke.size >= 1024 && ke.clear(), ke.set(s, d), d);
}
function Lr(r, t, e) {
  const s = Mi(r, Math.floor(t / Re), Math.floor(e / Re));
  return s && Math.hypot(t - s.x, e - s.z) < s.radius ? s : null;
}
const tn = (r) => {
  const t = cs(r, 0, 1);
  return t * t * (3 - 2 * t);
};
function Ir(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = Math.atan2(n / 24, s / 37),
    c = ((r.seed % 997) / 997) * Math.PI * 2,
    h =
      1 +
      Math.sin(i * 3 + c) * 0.16 +
      Math.sin(i * 5 - c) * 0.08 +
      xt(r.seed + 61, t * 0.055, e * 0.055, 2) * 0.11;
  return Math.hypot(s / 37, n / 24) / h;
}
function Cr(r, t, e, s) {
  const n = t - r.x,
    i = e - r.z,
    c = Math.hypot(n, i),
    h = xt(r.seed, t * 0.026, e * 0.026, 2);
  let o = s;
  if (r.kind === "volcanic") {
    const a = Math.atan2(i, n);
    ((o =
      47 +
      Math.max(0, 1 - c / 165) * 59 +
      Math.sin(a * 9 + c * 0.035) * Math.min(3, c * 0.07) +
      h * 2),
      c < 28 && (o = 82 + tn(c / 28) * 14));
  } else if (r.kind === "yellowstone") {
    o = 49 + h * 2 + Math.max(0, c - 100) * 0.045;
    const a = Nr(r, t, e);
    a < 1 ? (o = 46 - Math.floor((1 - a) * 3)) : a < 1.38 && (o = 49);
    const u = Math.hypot((n + 38) / 34, (i + 83) / 27);
    u < 1 && (o = 50 + Math.floor((1 - u) * 7));
  } else if (r.kind === "alpine") {
    o = 48 + h * 3;
    for (const [a, u, d] of [
      [-46, -22, 59],
      [38, -42, 64],
      [5, 52, 51],
    ])
      o = Math.max(
        o,
        48 +
          Math.max(
            0,
            1 -
              Math.hypot(n - a, (i - u) * 1.15) /
                (100 + Math.sin(Math.atan2(i - u, n - a) * 5) * 13),
          ) *
            d +
          h * 3,
      );
    Math.hypot((n + 65) / 25, (i - 70) / 18) < 1 && (o = 43);
  } else if (r.kind === "oasis") {
    const a = Ir(r, t, e);
    o =
      a < 1
        ? 46 - (1 - a) * 7
        : 46 + (a - 1) * 5 + Math.abs(h) * Math.min(8, (a - 1) * 4);
  } else if (r.kind === "savanna")
    ((o = 48 + h * 3 + Math.abs(xt(r.seed + 23, t * 0.009, e * 0.009, 3)) * 9),
      Math.hypot((n + 48) / 25, (i - 30) / 18) < 1 && (o = 44));
  else {
    o = Es - 12 + h * 2;
    for (const [a, u, d, l] of [
      [-60, -22, 70, 29],
      [55, -44, 58, 22],
      [26, 74, 49, 19],
    ]) {
      const f = Math.atan2(i - u, n - a),
        m =
          Math.hypot(n - a, (i - u) * 1.1) /
          (1 + Math.sin(f * 3 + a) * 0.13 + Math.sin(f * 7) * 0.045);
      o = Math.max(o, Es - 6 + Math.max(0, 1 - m / d) * l + h * 2);
    }
  }
  return Math.floor(s + (o - s) * tn((r.radius - c) / 45));
}
function Nr(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = (c, h, o, a) => {
      const u = Math.atan2(h, c);
      return (
        Math.hypot(c / o, h / a) /
        (1 + Math.sin(u * 5) * 0.065 + Math.sin(u * 9) * 0.025)
      );
    };
  return Math.min(
    i(s, n, 31, 23),
    i(s - 63, n + 37, 12, 16),
    i(s + 66, n - 31, 15, 11),
  );
}
function Br(r, t, e) {
  const s = Mi(r, Math.floor(t / Re), Math.floor(e / Re));
  return !s || s.kind !== "islands"
    ? 0
    : tn((s.radius - Math.hypot(t - s.x, e - s.z)) / 48);
}
function Pr(r, t, e) {
  const s = xt(r + 301, t * 72e-5, e * 72e-5, 4),
    n = xt(r + 401, t * 9e-4, e * 9e-4, 3),
    i = xt(r + 501, t * 82e-5, e * 82e-5, 3),
    c = Math.abs(xt(r + 601, t * 0.00125, e * 0.00125, 4));
  return { continent: s, heat: n, wet: i, ridge: c };
}
function kr(r) {
  return r.continent < -0.14
    ? "ocean"
    : r.ridge > 0.47 || r.continent > 0.53
      ? "mountains"
      : r.heat < -0.23
        ? "winter"
        : r.heat < -0.075 && r.wet > -0.12
          ? "autumn"
          : r.heat > 0.18 && r.wet < 0.07
            ? "desert"
            : r.heat > 0 && r.wet > 0.02
              ? "jungle"
              : r.wet > -0.08
                ? "forest"
                : "plains";
}
function Ur(r, t, e, s, n) {
  const i = xt(r + 7, t * 0.011, e * 0.011, 4);
  let c;
  if (n === "ocean") {
    const h = cs((-0.14 - s.continent) / 0.55, 0, 1) ** 0.55;
    c = Es + 1 - (2 + h * 34) + i * (1.5 + h * 4);
  } else {
    c = Es + 5 + i * 8 + s.continent * 12;
    const h = (l) => {
        const f = cs(l, 0, 1);
        return f * f * (3 - 2 * f);
      },
      o = h(Math.max((s.ridge - 0.43) / 0.08, (s.continent - 0.49) / 0.08)),
      a =
        (1 - h((s.wet + 0.12) / 0.08)) *
        (1 - h((s.heat - 0.14) / 0.08)) *
        (1 - o),
      u = h((s.heat - 0.14) / 0.08) * (1 - h((s.wet - 0.03) / 0.08)) * (1 - o),
      d = h((s.heat + 0.04) / 0.08) * h((s.wet + 0.02) / 0.08) * (1 - o);
    ((c += a * (1 - i * 4.5 - s.continent * 6)),
      (c +=
        o *
        (Math.max(0, s.ridge - 0.47) * 118 +
          Math.max(0, s.continent - 0.53) * 52 +
          Math.abs(i) * 12)),
      (c +=
        (u > 0 ? u * Math.abs(xt(r + 17, t * 0.018, e * 0.018, 2)) * 5 : 0) +
        d * i * 3));
  }
  return Math.floor(cs(c, 4, H - 13));
}
let Ue = new Map(),
  Fn = new Map();
function Dr(r, t, e) {
  const s = Number.isInteger(t) && Number.isInteger(e) ? `${r}:${t}:${e}` : "",
    n = s ? (Ue.get(s) ?? Fn.get(s)) : void 0;
  if (n) return n;
  const i = Pr(r, t, e),
    c = kr(i),
    h = Ur(r, t, e, i, c),
    o = Lr(r, t, e),
    a = {
      height: o ? Cr(o, t, e, h) : h,
      biome: o?.kind ?? c,
      heat: i.heat,
      wet: i.wet,
    };
  return (
    s && (Ue.size >= 8192 && ((Fn = Ue), (Ue = new Map())), Ue.set(s, a)),
    a
  );
}
function wr(r, t, e) {
  return Dr(r, t, e).biome;
}
const rs = new Map();
function os(r, t, e) {
  const s = `${r}:${t}:${e}`,
    n = rs.get(s);
  if (n) return n;
  const i = wr(r, t * 24, e * 24),
    h = {
      desert: [1.3, 0.95, 0.48],
      savanna: [1.2, 0.95, 0.55],
      forest: [0.72, 0.91, 0.72],
      jungle: [0.65, 1, 0.68],
      autumn: [1.62, 0.9, 0.4],
      winter: [0.87, 1, 1.02],
      alpine: [0.84, 0.96, 0.95],
      oasis: [0.87, 1, 0.62],
      volcanic: [0.84, 0.78, 0.7],
    }[i] ?? [1, 1, 0.83];
  return (rs.size > 4096 && rs.clear(), rs.set(s, h), h);
}
const zr = -7101,
  Fr = [0.84, 1, 0.72];
function Si(r, t, e) {
  if (r === zr) return Fr;
  const s = Math.floor(t / 24),
    n = Math.floor(e / 24),
    i = t / 24 - s,
    c = e / 24 - n,
    h = os(r, s, n),
    o = os(r, s + 1, n),
    a = os(r, s, n + 1),
    u = os(r, s + 1, n + 1);
  return [0, 1, 2].map(
    (d) =>
      (h[d] * (1 - i) + o[d] * i) * (1 - c) + (a[d] * (1 - i) + u[d] * i) * c,
  );
}
