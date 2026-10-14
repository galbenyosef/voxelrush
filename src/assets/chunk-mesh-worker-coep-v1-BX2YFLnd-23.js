// chunk-mesh-worker-coep-v1-BX2YFLnd 23 — math
// Lines 7475-7796 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function Ir(r) {
  if (Js.has(r)) return Js.get(r);
  const t = [],
    e = 12,
    s = 4,
    n = (i) =>
      r === 0 ? [i[1], -i[0], i[2]] : r === 2 ? [i[0], -i[2], i[1]] : i;
  for (let i = 0; i < 4; i++) {
    const h = (c, o) => {
      const a = (c / e) * Math.PI * 2,
        u = (o / s) * Math.PI * 2,
        d = Math.cos(a) / 0.105,
        l = Math.sin(a) / 0.17,
        p = Math.hypot(d, l),
        m = 0.105 * Math.cos(a) + (0.027 * Math.cos(u) * d) / p,
        _ = 0.17 * Math.sin(a) + (0.027 * Math.cos(u) * l) / p,
        y = 0.027 * Math.sin(u),
        E = n(i % 2 ? [y, _, -m] : [m, _, y]);
      return ((E[r] += (i + 0.5) / 4 - 0.5), E.map((M) => M + 0.5));
    };
    for (let c = 0; c < e; c++)
      for (let o = 0; o < s; o++) {
        const a = [h(c, o), h(c + 1, o), h(c, o + 1), h(c + 1, o + 1)],
          u = a[1].map((m, _) => m - a[0][_]),
          d = a[2].map((m, _) => m - a[0][_]),
          l = [
            u[1] * d[2] - u[2] * d[1],
            u[2] * d[0] - u[0] * d[2],
            u[0] * d[1] - u[1] * d[0],
          ],
          p = Math.hypot(...l);
        (l.forEach((m, _) => (l[_] = m / p)), t.push({ points: a, normal: l }));
      }
  }
  return (Js.set(r, t), t);
}
function Wt(r, t, e) {
  let s = (r ^ Math.imul(t, 374761393) ^ Math.imul(e, 668265263)) >>> 0;
  return (
    (s = (s ^ (s >>> 13)) >>> 0),
    (s = Math.imul(s, 1274126177) >>> 0),
    ((s ^ (s >>> 16)) >>> 0) / 4294967296
  );
}
const Fn = (r) => r * r * (3 - 2 * r);
function Cr(r, t, e) {
  const s = Math.floor(t),
    n = Math.floor(e),
    i = Fn(t - s),
    h = Fn(e - n),
    c = Wt(r, s, n),
    o = Wt(r, s + 1, n),
    a = Wt(r, s, n + 1),
    u = Wt(r, s + 1, n + 1);
  return c + (o - c) * i + (a - c) * h + (c - o - a + u) * i * h;
}
function Rt(r, t, e, s) {
  let n = 0,
    i = 0.5,
    h = 1,
    c = 0;
  for (let o = 0; o < s; o++)
    ((n += (Cr(r + o * 1013, t * h, e * h) * 2 - 1) * i),
      (c += i),
      (i *= 0.5),
      (h *= 2));
  return n / c;
}
const Le = 640,
  ze = new Map();
function Si(r, t, e) {
  const s = `${r}:${t}:${e}`;
  if (ze.has(s)) return ze.get(s);
  const n = t * Le + 250 + Math.floor(Wt(r + 9001, t, e) * 140),
    i = e * Le + 250 + Math.floor(Wt(r + 9007, t, e) * 140),
    h = Rt(r + 301, n * 72e-5, i * 72e-5, 4),
    c = Rt(r + 401, n * 9e-4, i * 9e-4, 3),
    o = Rt(r + 501, n * 82e-5, i * 82e-5, 3),
    a = Wt(r + 9011, t, e),
    u =
      h < -0.19
        ? "islands"
        : c > 0.18 && o < 0.07
          ? "oasis"
          : c > 0 && o < 0.02 && a > 0.25
            ? "savanna"
            : a < 0.33
              ? "volcanic"
              : a < 0.66
                ? "alpine"
                : "yellowstone",
    d =
      Wt(r + 9013, t, e) < 0.22 || Math.hypot(n, i) < 280
        ? null
        : {
            kind: u,
            x: n,
            z: i,
            radius: 200,
            seed: Math.floor(Wt(r + 9019, t, e) * 2147483647),
          };
  return (ze.size >= 1024 && ze.clear(), ze.set(s, d), d);
}
function Nr(r, t, e) {
  const s = Si(r, Math.floor(t / Le), Math.floor(e / Le));
  return s && Math.hypot(t - s.x, e - s.z) < s.radius ? s : null;
}
const en = (r) => {
  const t = fs(r, 0, 1);
  return t * t * (3 - 2 * t);
};
function Br(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = Math.atan2(n / 24, s / 37),
    h = ((r.seed % 997) / 997) * Math.PI * 2,
    c =
      1 +
      Math.sin(i * 3 + h) * 0.16 +
      Math.sin(i * 5 - h) * 0.08 +
      Rt(r.seed + 61, t * 0.055, e * 0.055, 2) * 0.11;
  return Math.hypot(s / 37, n / 24) / c;
}
function Pr(r, t, e, s) {
  const n = t - r.x,
    i = e - r.z,
    h = Math.hypot(n, i),
    c = Rt(r.seed, t * 0.026, e * 0.026, 2);
  let o = s;
  if (r.kind === "volcanic") {
    const a = Math.atan2(i, n);
    ((o =
      47 +
      Math.max(0, 1 - h / 165) * 59 +
      Math.sin(a * 9 + h * 0.035) * Math.min(3, h * 0.07) +
      c * 2),
      h < 28 && (o = 82 + en(h / 28) * 14));
  } else if (r.kind === "yellowstone") {
    o = 49 + c * 2 + Math.max(0, h - 100) * 0.045;
    const a = kr(r, t, e);
    a < 1 ? (o = 46 - Math.floor((1 - a) * 3)) : a < 1.38 && (o = 49);
    const u = Math.hypot((n + 38) / 34, (i + 83) / 27);
    u < 1 && (o = 50 + Math.floor((1 - u) * 7));
  } else if (r.kind === "alpine") {
    o = 48 + c * 3;
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
          c * 3,
      );
    Math.hypot((n + 65) / 25, (i - 70) / 18) < 1 && (o = 43);
  } else if (r.kind === "oasis") {
    const a = Br(r, t, e);
    o =
      a < 1
        ? 46 - (1 - a) * 7
        : 46 + (a - 1) * 5 + Math.abs(c) * Math.min(8, (a - 1) * 4);
  } else if (r.kind === "savanna")
    ((o = 48 + c * 3 + Math.abs(Rt(r.seed + 23, t * 0.009, e * 0.009, 3)) * 9),
      Math.hypot((n + 48) / 25, (i - 30) / 18) < 1 && (o = 44));
  else {
    o = Ms - 12 + c * 2;
    for (const [a, u, d, l] of [
      [-60, -22, 70, 29],
      [55, -44, 58, 22],
      [26, 74, 49, 19],
    ]) {
      const p = Math.atan2(i - u, n - a),
        m =
          Math.hypot(n - a, (i - u) * 1.1) /
          (1 + Math.sin(p * 3 + a) * 0.13 + Math.sin(p * 7) * 0.045);
      o = Math.max(o, Ms - 6 + Math.max(0, 1 - m / d) * l + c * 2);
    }
  }
  return Math.floor(s + (o - s) * en((r.radius - h) / 45));
}
function kr(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = (h, c, o, a) => {
      const u = Math.atan2(c, h);
      return (
        Math.hypot(h / o, c / a) /
        (1 + Math.sin(u * 5) * 0.065 + Math.sin(u * 9) * 0.025)
      );
    };
  return Math.min(
    i(s, n, 31, 23),
    i(s - 63, n + 37, 12, 16),
    i(s + 66, n - 31, 15, 11),
  );
}
function Ur(r, t, e) {
  const s = Si(r, Math.floor(t / Le), Math.floor(e / Le));
  return !s || s.kind !== "islands"
    ? 0
    : en((s.radius - Math.hypot(t - s.x, e - s.z)) / 48);
}
function Dr(r, t, e) {
  const s = Rt(r + 301, t * 72e-5, e * 72e-5, 4),
    n = Rt(r + 401, t * 9e-4, e * 9e-4, 3),
    i = Rt(r + 501, t * 82e-5, e * 82e-5, 3),
    h = Math.abs(Rt(r + 601, t * 0.00125, e * 0.00125, 4));
  return { continent: s, heat: n, wet: i, ridge: h };
}
function wr(r) {
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
function zr(r, t, e, s, n) {
  const i = Rt(r + 7, t * 0.011, e * 0.011, 4);
  let h;
  if (n === "ocean") {
    const c = fs((-0.14 - s.continent) / 0.55, 0, 1) ** 0.55;
    h = Ms + 1 - (2 + c * 34) + i * (1.5 + c * 4);
  } else {
    h = Ms + 5 + i * 8 + s.continent * 12;
    const c = (l) => {
        const p = fs(l, 0, 1);
        return p * p * (3 - 2 * p);
      },
      o = c(Math.max((s.ridge - 0.43) / 0.08, (s.continent - 0.49) / 0.08)),
      a =
        (1 - c((s.wet + 0.12) / 0.08)) *
        (1 - c((s.heat - 0.14) / 0.08)) *
        (1 - o),
      u = c((s.heat - 0.14) / 0.08) * (1 - c((s.wet - 0.03) / 0.08)) * (1 - o),
      d = c((s.heat + 0.04) / 0.08) * c((s.wet + 0.02) / 0.08) * (1 - o);
    ((h += a * (1 - i * 4.5 - s.continent * 6)),
      (h +=
        o *
        (Math.max(0, s.ridge - 0.47) * 118 +
          Math.max(0, s.continent - 0.53) * 52 +
          Math.abs(i) * 12)),
      (h +=
        (u > 0 ? u * Math.abs(Rt(r + 17, t * 0.018, e * 0.018, 2)) * 5 : 0) +
        d * i * 3));
  }
  return Math.floor(fs(h, 4, Y - 13));
}
let Fe = new Map(),
  Gn = new Map();
function Fr(r, t, e) {
  const s = Number.isInteger(t) && Number.isInteger(e) ? `${r}:${t}:${e}` : "",
    n = s ? (Fe.get(s) ?? Gn.get(s)) : void 0;
  if (n) return n;
  const i = Dr(r, t, e),
    h = wr(i),
    c = zr(r, t, e, i, h),
    o = Nr(r, t, e),
    a = {
      height: o ? Pr(o, t, e, c) : c,
      biome: (o == null ? void 0 : o.kind) ?? h,
      heat: i.heat,
      wet: i.wet,
    };
  return (
    s && (Fe.size >= 8192 && ((Gn = Fe), (Fe = new Map())), Fe.set(s, a)),
    a
  );
}
function Gr(r, t, e) {
  return Fr(r, t, e).biome;
}
const cs = new Map();
function us(r, t, e) {
  const s = `${r}:${t}:${e}`,
    n = cs.get(s);
  if (n) return n;
  const i = Gr(r, t * 24, e * 24),
    c = {
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
  return (cs.size > 4096 && cs.clear(), cs.set(s, c), c);
}
function gi(r, t, e) {
  const s = Math.floor(t / 24),
    n = Math.floor(e / 24),
    i = t / 24 - s,
    h = e / 24 - n,
    c = us(r, s, n),
    o = us(r, s + 1, n),
    a = us(r, s, n + 1),
    u = us(r, s + 1, n + 1);
  return [0, 1, 2].map(
    (d) =>
      (c[d] * (1 - i) + o[d] * i) * (1 - h) + (a[d] * (1 - i) + u[d] * i) * h,
  );
}
