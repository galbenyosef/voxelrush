// index-Dp6GxvJu 42 — math
// Lines 41316-41614 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function YS(n, e, t) {
  const i = `${n}:${e}:${t}`;
  if (ju.has(i)) return ju.get(i);
  const s = e * lu + 250 + Math.floor(rn(n + 9001, e, t) * 140),
    o = t * lu + 250 + Math.floor(rn(n + 9007, e, t) * 140),
    a = Fs(n + 301, s * 72e-5, o * 72e-5, 4),
    r = Fs(n + 401, s * 9e-4, o * 9e-4, 3),
    l = Fs(n + 501, s * 82e-5, o * 82e-5, 3),
    c = rn(n + 9011, e, t),
    h =
      a < -0.19
        ? "islands"
        : r > 0.18 && l < 0.07
          ? "oasis"
          : r > 0 && l < 0.02 && c > 0.25
            ? "savanna"
            : c < 0.33
              ? "volcanic"
              : c < 0.66
                ? "alpine"
                : "yellowstone",
    d =
      rn(n + 9013, e, t) < 0.22 || Math.hypot(s, o) < 280
        ? null
        : {
            kind: h,
            x: s,
            z: o,
            radius: 200,
            seed: Math.floor(rn(n + 9019, e, t) * 2147483647),
          };
  return (ju.size >= 1024 && ju.clear(), ju.set(i, d), d);
}
function Lp(n, e, t) {
  const i = YS(n, Math.floor(e / lu), Math.floor(t / lu));
  return i && Math.hypot(e - i.x, t - i.z) < i.radius ? i : null;
}
const Aw = (n) => {
  const e = clamp(n, 0, 1);
  return e * e * (3 - 2 * e);
};
function jS(n, e, t) {
  const i = e - n.x,
    s = t - n.z,
    o = Math.atan2(s / 24, i / 37),
    a = ((n.seed % 997) / 997) * Math.PI * 2,
    r =
      1 +
      Math.sin(o * 3 + a) * 0.16 +
      Math.sin(o * 5 - a) * 0.08 +
      Fs(n.seed + 61, e * 0.055, t * 0.055, 2) * 0.11;
  return Math.hypot(i / 37, s / 24) / r;
}
function DG(n, e, t, i) {
  const s = e - n.x,
    o = t - n.z,
    a = Math.hypot(s, o),
    r = Fs(n.seed, e * 0.026, t * 0.026, 2);
  let l = i;
  if (n.kind === "volcanic") {
    const c = Math.atan2(o, s);
    ((l =
      47 +
      Math.max(0, 1 - a / 165) * 59 +
      Math.sin(c * 9 + a * 0.035) * Math.min(3, a * 0.07) +
      r * 2),
      a < 28 && (l = 82 + Aw(a / 28) * 14));
  } else if (n.kind === "yellowstone") {
    l = 49 + r * 2 + Math.max(0, a - 100) * 0.045;
    const c = XS(n, e, t);
    c < 1 ? (l = 46 - Math.floor((1 - c) * 3)) : c < 1.38 && (l = 49);
    const h = Math.hypot((s + 38) / 34, (o + 83) / 27);
    h < 1 && (l = 50 + Math.floor((1 - h) * 7));
  } else if (n.kind === "alpine") {
    l = 48 + r * 3;
    for (const [c, h, d] of [
      [-46, -22, 59],
      [38, -42, 64],
      [5, 52, 51],
    ])
      l = Math.max(
        l,
        48 +
          Math.max(
            0,
            1 -
              Math.hypot(s - c, (o - h) * 1.15) /
                (100 + Math.sin(Math.atan2(o - h, s - c) * 5) * 13),
          ) *
            d +
          r * 3,
      );
    Math.hypot((s + 65) / 25, (o - 70) / 18) < 1 && (l = 43);
  } else if (n.kind === "oasis") {
    const c = jS(n, e, t);
    l =
      c < 1
        ? 46 - (1 - c) * 7
        : 46 + (c - 1) * 5 + Math.abs(r) * Math.min(8, (c - 1) * 4);
  } else if (n.kind === "savanna")
    ((l = 48 + r * 3 + Math.abs(Fs(n.seed + 23, e * 0.009, t * 0.009, 3)) * 9),
      Math.hypot((s + 48) / 25, (o - 30) / 18) < 1 && (l = 44));
  else {
    l = $o - 12 + r * 2;
    for (const [c, h, d, u] of [
      [-60, -22, 70, 29],
      [55, -44, 58, 22],
      [26, 74, 49, 19],
    ]) {
      const f = Math.atan2(o - h, s - c),
        p =
          Math.hypot(s - c, (o - h) * 1.1) /
          (1 + Math.sin(f * 3 + c) * 0.13 + Math.sin(f * 7) * 0.045);
      l = Math.max(l, $o - 6 + Math.max(0, 1 - p / d) * u + r * 2);
    }
  }
  return Math.floor(i + (l - i) * Aw((n.radius - a) / 45));
}
function XS(n, e, t) {
  const i = e - n.x,
    s = t - n.z,
    o = (a, r, l, c) => {
      const h = Math.atan2(r, a);
      return (
        Math.hypot(a / l, r / c) /
        (1 + Math.sin(h * 5) * 0.065 + Math.sin(h * 9) * 0.025)
      );
    };
  return Math.min(
    o(i, s, 31, 23),
    o(i - 63, s + 37, 12, 16),
    o(i + 66, s - 31, 15, 11),
  );
}
function _k(n, e, t, i) {
  const s = e - n.x,
    o = t - n.z;
  if (n.kind === "volcanic")
    return Fs(n.seed + 51, e * 0.045, t * 0.045, 2) > 0.26 ? BLOCK.STONE : 40;
  if (n.kind === "alpine")
    return i > 79 + Math.sin(e * 0.05) * 3 + Math.cos(t * 0.07) * 2
      ? BLOCK.SNOW
      : i > 61
        ? BLOCK.STONE
        : BLOCK.GRASS;
  if (n.kind === "savanna")
    return Math.hypot((s + 48) / 25, (o - 30) / 18) < 1.15
      ? BLOCK.SAND
      : Fs(n.seed + 77, e * 0.035, t * 0.035, 2) > 0.36
        ? BLOCK.DIRT
        : BLOCK.SAVANNA_GRASS;
  if (n.kind === "islands") return i <= $o + 3 ? BLOCK.SAND : BLOCK.GRASS;
  if (n.kind === "oasis")
    return jS(n, e, t) < 1.65 && i >= 47 ? BLOCK.GRASS : BLOCK.SAND;
  const a = XS(n, e, t);
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
            : a < 1.6 || Math.hypot((s + 38) / 34, (o + 83) / 27) < 1
              ? BLOCK.SANDSTONE_SMOOTH
              : BLOCK.GRASS;
}
function Rk(n, e, t) {
  return n.kind === "savanna" &&
    Math.hypot((e - n.x + 48) / 25, (t - n.z - 30) / 18) < 1
    ? 46
    : n.kind === "yellowstone" && XS(n, e, t) < 1
      ? 47
      : (n.kind === "oasis" && jS(n, e, t) < 1.8) ||
          (n.kind === "alpine" &&
            Math.hypot((e - n.x + 65) / 25, (t - n.z - 70) / 18) < 1)
        ? 46
        : $o;
}
function BG(n, e, t) {
  const i = e - n.x,
    s = t - n.z;
  if (n.kind === "yellowstone") {
    const o = Math.abs(i),
      a = Math.abs(s);
    if ((o >= 43 && o <= 46 && a <= 34) || (a >= 31 && a <= 34 && o <= 46))
      return {
        y: 51,
        rail: (o === 46 || a === 34) && !(Math.abs(i) < 3 || Math.abs(s) < 3),
      };
  }
  return null;
}
function HG(n, e, t) {
  const i = YS(n, Math.floor(e / lu), Math.floor(t / lu));
  return !i || i.kind !== "islands"
    ? 0
    : Aw((i.radius - Math.hypot(e - i.x, t - i.z)) / 48);
}
const zG = {
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
function UG(n, e, t) {
  const i = Fs(n + 301, e * 72e-5, t * 72e-5, 4),
    s = Fs(n + 401, e * 9e-4, t * 9e-4, 3),
    o = Fs(n + 501, e * 82e-5, t * 82e-5, 3),
    a = Math.abs(Fs(n + 601, e * 0.00125, t * 0.00125, 4));
  return { continent: i, heat: s, wet: o, ridge: a };
}
function FG(n) {
  return n.continent < -0.14
    ? "ocean"
    : n.ridge > 0.47 || n.continent > 0.53
      ? "mountains"
      : n.heat < -0.23
        ? "winter"
        : n.heat < -0.075 && n.wet > -0.12
          ? "autumn"
          : n.heat > 0.18 && n.wet < 0.07
            ? "desert"
            : n.heat > 0 && n.wet > 0.02
              ? "jungle"
              : n.wet > -0.08
                ? "forest"
                : "plains";
}
function GG(n, e, t, i, s) {
  const o = Fs(n + 7, e * 0.011, t * 0.011, 4);
  let a;
  if (s === "ocean") {
    const r = clamp((-0.14 - i.continent) / 0.55, 0, 1) ** 0.55;
    a = $o + 1 - (2 + r * 34) + o * (1.5 + r * 4);
  } else {
    a = $o + 5 + o * 8 + i.continent * 12;
    const r = (u) => {
        const f = clamp(u, 0, 1);
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
        (h > 0 ? h * Math.abs(Fs(n + 17, e * 0.018, t * 0.018, 2)) * 5 : 0) +
        d * o * 3));
  }
  return Math.floor(clamp(a, 4, Kt - 13));
}
let Xu = new Map(),
  NT = new Map();
function ZS(n, e, t) {
  const i = Number.isInteger(e) && Number.isInteger(t) ? `${n}:${e}:${t}` : "",
    s = i ? (Xu.get(i) ?? NT.get(i)) : void 0;
  if (s) return s;
  const o = UG(n, e, t),
    a = FG(o),
    r = GG(n, e, t, o, a),
    l = Lp(n, e, t),
    c = {
      height: l ? DG(l, e, t, r) : r,
      biome: (l == null ? void 0 : l.kind) ?? a,
      heat: o.heat,
      wet: o.wet,
    };
  return (
    i && (Xu.size >= 8192 && ((NT = Xu), (Xu = new Map())), Xu.set(i, c)),
    c
  );
}
function rr(n, e, t) {
  return ZS(n, e, t).biome;
}
function cu(n, e, t) {
  return ZS(n, e, t).height;
}
