// index-BeUlFSPp 66 — math
// Lines 50623-50955 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function qA(s, e, t) {
  const i = e - s.x,
    n = t - s.z,
    o = (a, r, l, c) => {
      const h = Math.atan2(r, a);
      return (
        Math.hypot(a / l, r / c) /
        (1 + Math.sin(h * 5) * 0.065 + Math.sin(h * 9) * 0.025)
      );
    };
  return Math.min(
    o(i, n, 31, 23),
    o(i - 63, n + 37, 12, 16),
    o(i + 66, n - 31, 15, 11),
  );
}
function DO(s, e, t, i) {
  const n = e - s.x,
    o = t - s.z;
  if (s.kind === "volcanic")
    return Wn(s.seed + 51, e * 0.045, t * 0.045, 2) > 0.26 ? v.STONE : 40;
  if (s.kind === "alpine")
    return i > 79 + Math.sin(e * 0.05) * 3 + Math.cos(t * 0.07) * 2
      ? v.SNOW
      : i > 61
        ? v.STONE
        : v.GRASS;
  if (s.kind === "savanna")
    return Math.hypot((n + 48) / 25, (o - 30) / 18) < 1.15
      ? v.SAND
      : Wn(s.seed + 77, e * 0.035, t * 0.035, 2) > 0.36
        ? v.DIRT
        : v.SAVANNA_GRASS;
  if (s.kind === "islands") return i <= Bs + 3 ? v.SAND : v.GRASS;
  if (s.kind === "oasis")
    return VA(s, e, t) < 1.65 && i >= 47 ? v.GRASS : v.SAND;
  const a = qA(s, e, t);
  return a < 0.7
    ? 42
    : a < 1
      ? 36
      : a < 1.12
        ? 38
        : a < 1.24
          ? 37
          : a < 1.38
            ? 34
            : a < 1.6 || Math.hypot((n + 38) / 34, (o + 83) / 27) < 1
              ? v.SANDSTONE_SMOOTH
              : v.GRASS;
}
function HO(s, e, t) {
  return s.kind === "savanna" &&
    Math.hypot((e - s.x + 48) / 25, (t - s.z - 30) / 18) < 1
    ? 46
    : s.kind === "yellowstone" && qA(s, e, t) < 1
      ? 47
      : (s.kind === "oasis" && VA(s, e, t) < 1.8) ||
          (s.kind === "alpine" &&
            Math.hypot((e - s.x + 65) / 25, (t - s.z - 70) / 18) < 1)
        ? 46
        : Bs;
}
function WY(s, e, t) {
  const i = e - s.x,
    n = t - s.z;
  if (s.kind === "yellowstone") {
    const o = Math.abs(i),
      a = Math.abs(n);
    if ((o >= 43 && o <= 46 && a <= 34) || (a >= 31 && a <= 34 && o <= 46))
      return {
        y: 51,
        rail: (o === 46 || a === 34) && !(Math.abs(i) < 3 || Math.abs(n) < 3),
      };
  }
  return null;
}
function $Y(s, e, t) {
  const i = $A(s, Math.floor(e / Nf), Math.floor(t / Nf));
  return !i || i.kind !== "islands"
    ? 0
    : s4((i.radius - Math.hypot(e - i.x, t - i.z)) / 48);
}
const VY = {
  savanna: 11971426,
  yellowstone: 11650693,
  volcanic: 6640731,
  alpine: 14084333,
  oasis: 10337393,
  islands: 4437434,
  plains: 5995845,
  mountains: 8884634,
  ocean: 3303869,
  desert: 14140542,
  jungle: 3304256,
  forest: 3957565,
  winter: 15068658,
  autumn: 11887916,
};
function qY(s, e, t) {
  const i = Wn(s + 301, e * 72e-5, t * 72e-5, 4),
    n = Wn(s + 401, e * 9e-4, t * 9e-4, 3),
    o = Wn(s + 501, e * 82e-5, t * 82e-5, 3),
    a = Math.abs(Wn(s + 601, e * 0.00125, t * 0.00125, 4));
  return { continent: i, heat: n, wet: o, ridge: a };
}
function KY(s) {
  return s.continent < -0.14
    ? "ocean"
    : s.ridge > 0.47 || s.continent > 0.53
      ? "mountains"
      : s.heat < -0.23
        ? "winter"
        : s.heat < -0.075 && s.wet > -0.12
          ? "autumn"
          : s.heat > 0.18 && s.wet < 0.07
            ? "desert"
            : s.heat > 0 && s.wet > 0.02
              ? "jungle"
              : s.wet > -0.08
                ? "forest"
                : "plains";
}
function YY(s, e, t, i, n) {
  const o = Wn(s + 7, e * 0.011, t * 0.011, 4);
  let a;
  if (n === "ocean") {
    const r = Oe((-0.14 - i.continent) / 0.55, 0, 1) ** 0.55;
    a = Bs + 1 - (2 + r * 34) + o * (1.5 + r * 4);
  } else {
    a = Bs + 5 + o * 8 + i.continent * 12;
    const r = (u) => {
        const f = Oe(u, 0, 1);
        return f * f * (3 - 2 * f);
      },
      l = r(Math.max((i.ridge - 0.43) / 0.08, (i.continent - 0.49) / 0.08)),
      c =
        (1 - r((i.wet + 0.12) / 0.08)) *
        (1 - r((i.heat - 0.14) / 0.08)) *
        (1 - l),
      h = r((i.heat - 0.14) / 0.08) * (1 - r((i.wet - 0.03) / 0.08)) * (1 - l),
      d = r((i.heat + 0.04) / 0.08) * r((i.wet + 0.02) / 0.08) * (1 - l);
    ((a += c * (1 - o * 4.5 - i.continent * 6)),
      (a +=
        l *
        (Math.max(0, i.ridge - 0.47) * 118 +
          Math.max(0, i.continent - 0.53) * 52 +
          Math.abs(o) * 12)),
      (a +=
        (h > 0 ? h * Math.abs(Wn(s + 17, e * 0.018, t * 0.018, 2)) * 5 : 0) +
        d * o * 3));
  }
  return Math.floor(Oe(a, 4, jt - 13));
}
let Ap = new Map(),
  rR = new Map();
function KA(s, e, t) {
  const i = Number.isInteger(e) && Number.isInteger(t) ? `${s}:${e}:${t}` : "",
    n = i ? (Ap.get(i) ?? rR.get(i)) : void 0;
  if (n) return n;
  const o = qY(s, e, t),
    a = KY(o),
    r = YY(s, e, t, o, a),
    l = wm(s, e, t),
    c = {
      height: l ? GY(l, e, t, r) : r,
      biome: l?.kind ?? a,
      heat: o.heat,
      wet: o.wet,
    };
  return (
    i && (Ap.size >= 8192 && ((rR = Ap), (Ap = new Map())), Ap.set(i, c)),
    c
  );
}
function Zr(s, e, t) {
  return KA(s, e, t).biome;
}
function Df(s, e, t) {
  return KA(s, e, t).height;
}
function jY(s, e, t, i) {
  const o = Math.floor(e / 42),
    a = Math.floor(t / 42),
    r = [];
  for (let u = -1; u <= 1; u++)
    for (let f = -1; f <= 1; f++) {
      const p = o + u,
        m = a + f;
      if (Oi(s + 733, p, m) < 0.43) continue;
      const g = p * 42 + 7 + Oi(s + 739, p, m) * 28,
        y = m * 42 + 7 + Oi(s + 743, p, m) * 28,
        b = 10 + Oi(s + 751, p, m) * Math.max(8, Math.min(42, i - 20)),
        S = 5.5 + Oi(s + 757, p, m) * 7,
        M = 5.5 + Oi(s + 761, p, m) * 7,
        E = 2.8 + Oi(s + 769, p, m) * 4.2,
        A = ((e - g) / S) ** 2,
        T = ((t - y) / M) ** 2;
      A + T < 1 && r.push({ x2: A, z2: T, cy: b, ry: E });
    }
  const l = 88,
    c = Math.floor(e / l),
    h = Math.floor(t / l),
    d = [];
  for (let u = -1; u <= 1; u++)
    for (let f = -1; f <= 1; f++) {
      const p = c + u,
        m = h + f;
      if (Oi(s + 773, p, m) < 0.72) continue;
      const g = p * l + 12 + Oi(s + 787, p, m) * (l - 24),
        y = m * l + 12 + Oi(s + 797, p, m) * (l - 24),
        b = Oi(s + 809, p, m) * Math.PI * 2;
      d.push({ ex: g, ez: y, cos: Math.cos(b), sin: Math.sin(b) });
    }
  return (u) => {
    if (u < 3 || u >= i - 5) return !1;
    const f = Wn(s + 711, e * 0.026 + u * 0.009, t * 0.026 - u * 0.006, 3),
      p = u < 16 ? -0.05 : 0;
    if (
      Math.abs(f) > 0.59 + p &&
      Math.abs(Wn(s + 719, e * 0.019 - u * 0.012, t * 0.019 + u * 0.01, 2)) >
        0.29
    )
      return !0;
    for (const g of r)
      if (g.x2 + ((u - g.cy) / g.ry) ** 2 + g.z2 < 1) return !0;
    const m = i - u;
    if (m >= 5 && m <= 18) {
      const g = (m - 5) * 0.36,
        y = 1.55 + m * 0.055;
      for (const b of d) {
        const S = b.ex + b.cos * g,
          M = b.ez + b.sin * g;
        if ((e - S) ** 2 + (t - M) ** 2 < y ** 2) return !0;
      }
    }
    return !1;
  };
}
function XY(s, e, t, i) {
  if (i !== "desert" && i !== "mountains") return -1;
  const n = 72,
    o = Math.floor(e / n),
    a = Math.floor(t / n);
  for (let r = -1; r <= 1; r++)
    for (let l = -1; l <= 1; l++) {
      if (Oi(s + 880, o + r, a + l) < 0.91) continue;
      const h = (o + r) * n + 12 + Oi(s + 881, o + r, a + l) * (n - 24),
        d = (a + l) * n + 12 + Oi(s + 882, o + r, a + l) * (n - 24),
        u = 4 + Oi(s + 883, o + r, a + l) * 5;
      if ((e - h) ** 2 + (t - d) ** 2 <= u ** 2)
        return Df(s, Math.floor(h), Math.floor(d)) - 2;
    }
  return -1;
}
function ZY(s, e, t, i, n) {
  const o = (r, l, c) => {
    if (r < 0 || r >= ke || c < 0 || c >= ke || l >= jt) return;
    const h = Ai(r, l, c);
    s[h] === v.AIR && (s[h] = v.TROPICAL_LEAVES);
  };
  o(e, t + 1, i);
  const a = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [r, l] of a) n() < 0.58 && o(e + r, t + 1, i + l);
  n() < 0.24 && o(e, t + 2, i);
}
const In = 3,
  lR = (s) =>
    [
      "savanna",
      "yellowstone",
      "volcanic",
      "alpine",
      "oasis",
      "islands",
    ].includes(s);
function QY(s, e, t) {
  const i = ke + 2 * In,
    n = new Float32Array(i * i),
    o = new Array(ke * ke);
  for (let a = -In; a < ke + In; a++)
    for (let r = -In; r < ke + In; r++) {
      const l = KA(s, e * ke + r, t * ke + a);
      ((n[r + In + (a + In) * i] = l.height),
        r >= 0 &&
          r < ke &&
          a >= 0 &&
          a < ke &&
          (o[r + a * ke] = {
            height: l.height,
            biome: l.biome,
            heat: l.heat,
            wet: l.wet,
          }));
    }
  for (let a = 0; a < ke; a++)
    for (let r = 0; r < ke; r++) {
      let l = 0,
        c = 0;
      for (let h = -In; h <= In; h++)
        for (let d = -In; d <= In; d++) {
          const u = (In + 1 - Math.abs(d)) * (In + 1 - Math.abs(h));
          ((l += n[r + d + In + (a + h + In) * i] * u), (c += u));
        }
      o[r + a * ke].height = Math.floor(l / c);
    }
  return o;
}
function JY(s, e, t) {
  let i = 0,
    n = 0;
  for (let o = -In; o <= In; o++)
    for (let a = -In; a <= In; a++) {
      const r = (In + 1 - Math.abs(a)) * (In + 1 - Math.abs(o));
      ((i += Df(s, e + a, t + o) * r), (n += r));
    }
  return Math.floor(i / n);
}
const k0 = 6;
function BO(s, e, t) {
  return {
    gx: e,
    gz: t,
    x: e * k0 + Math.floor(Oi(s + 941, e, t) * k0),
    z: t * k0 + Math.floor(Oi(s + 947, e, t) * k0),
    priority: Oi(s + 953, e, t),
  };
}
