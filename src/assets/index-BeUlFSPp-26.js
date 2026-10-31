// index-BeUlFSPp 26 — math
// Lines 33806-34144 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Ne[223] = (s, e, t) => {
  if (e <= 1 && s >= 2 && s <= 13) return Z(150, 118, 70, 8)(s, e, t);
  for (const [i, n] of [
    [3.5, [110, 140, 70]],
    [8, [150, 110, 170]],
    [12.5, [92, 124, 64]],
  ]) {
    const o = (e - 2) * 0.32;
    if (
      e >= 2 &&
      e <= 13 &&
      Math.abs(s - i) <= o + 0.5 &&
      ((s + e * 3) % 3 !== 0 || Math.abs(s - i) < 0.6)
    )
      return Z(n[0], n[1], n[2], 16)(s, e, t);
  }
  return [0, 0, 0, 0];
};
const uP = (s, e) => (t, i, n) => {
  if (i >= 9 && i <= 15 && t >= 6 && t <= 9)
    return Z(232, 224, 204, 6)(t, i, n);
  if (!(
    i >= 3 &&
    i <= 9 &&
    Math.abs(t - 7.5) <= 6.4 - Math.max(0, 6 - i) * 1.15
  ))
    return [0, 0, 0, 0];
  if (
    e &&
    [
      [5, 5],
      [10, 4],
      [8, 7],
      [3, 8],
      [12, 8],
    ].some(([r, l]) => Math.abs(t - r) + Math.abs(i - l) < 1)
  )
    return Z(244, 240, 228, 6)(t, i, n);
  const a = i === 9 ? -20 : 0;
  return Z(s[0] + a, s[1] + a, s[2] + a, 10)(t, i, n);
};
Ne[224] = uP([204, 36, 30], !0);
Ne[225] = uP([138, 92, 56], !1);
Ne[226] = (s, e, t) =>
  (Math.abs(e - (3 + s * 0.55 + Math.sin(s) * 0.8)) < 0.55 &&
    s > 1 &&
    s < 11) ||
  (Math.abs(s - (12 + Math.sin(e * 0.8))) < 0.5 && e > 6 && e < 14)
    ? Z(66, 66, 64, 5)(s, e, t)
    : Ne[$s + 3](s, e, t);
Ne[227] = (s, e, t) => {
  const i = s === 0 || s === 15 || e === 0 || e === 15,
    n = s === 1 || s === 14 || e === 1 || e === 14;
  if (i) return Z(122, 86, 48, 5)(s, e, t);
  if (n) return Z(150, 110, 64, 5)(s, e, t);
  const o = Math.sin(e * 1.9 + Math.sin(s * 0.4) * 1.6) * 4;
  return Z(206 + o, 170 + o * 0.8, 116 + o * 0.5, 4)(s, e, t);
};
Ne[228] = (s, e, t) => {
  const i = Math.sin(s * 1.7) * Math.sin(e * 1.3) * 6;
  return Z(52 + i, 54 + i, 58 + i, 5)(s, e, t);
};
Ne[LI] = Wm([214, 108, 34]);
Ne[230] = (s, e, t) => {
  const i = (s + e) % 2 === 0 ? 8 : -6;
  return Z(178 + i, 150 + i, 98 + i, 7)(s, e, t);
};
const L$ = {
    stone: { fx: 5, fy: 5, oct: 3, relief: 0.2, tone: 0.13 },
    rock: { fx: 4, fy: 4, oct: 3, relief: 0.3, tone: 0.2 },
    dirt: { fx: 5, fy: 5, oct: 3, relief: 0.26, tone: 0.17 },
    sand: { fx: 9, fy: 9, oct: 3, relief: 0.14, tone: 0.09 },
    wood: { fx: 2, fy: 9, oct: 3, relief: 0.16, tone: 0.12 },
    bark: { fx: 9, fy: 2, oct: 3, relief: 0.3, tone: 0.18 },
    organic: { fx: 6, fy: 6, oct: 3, relief: 0.22, tone: 0.16 },
    metal: { fx: 2, fy: 12, oct: 2, relief: 0.08, tone: 0.05 },
    glass: { fx: 3, fy: 3, oct: 2, relief: 0.05, tone: 0.03 },
    liquid: { fx: 3, fy: 3, oct: 3, relief: 0.1, tone: 0.07 },
    glow: { fx: 4, fy: 4, oct: 3, relief: 0.1, tone: 0.1 },
    cloth: { fx: 10, fy: 10, oct: 2, relief: 0.12, tone: 0.08 },
    smooth: { fx: 4, fy: 4, oct: 2, relief: 0.04, tone: 0.03 },
  },
  ri = {
    0: "organic",
    1: "organic",
    2: "dirt",
    3: "stone",
    4: "rock",
    5: "sand",
    6: "rock",
    7: "wood",
    8: "bark",
    9: "organic",
    10: "wood",
    11: "stone",
    12: "glass",
    13: "liquid",
    14: "rock",
    15: "sand",
    16: "metal",
    17: "glass",
    18: "glow",
    19: "wood",
    20: "wood",
    21: "cloth",
    22: "cloth",
    23: "cloth",
    24: "smooth",
    25: "smooth",
    26: "stone",
    27: "wood",
    28: "wood",
    29: "stone",
    30: "glow",
    31: "glow",
    32: "wood",
    33: "wood",
    34: "smooth",
    35: "wood",
    36: "wood",
    37: "metal",
    [oA]: "cloth",
    [aA]: "cloth",
    [rA]: "cloth",
    [S1]: "metal",
    [E1]: "wood",
    [xc]: "metal",
    [xc + 1]: "metal",
    [_c]: "metal",
    [_c + 1]: "metal",
    [m5]: "metal",
    [g5]: "metal",
    [y5]: "metal",
    [v5]: "metal",
  };
nA.forEach((s, e) => {
  ri[sA + e] = "stone";
});
for (let s = 0; s < 5; s++) ri[So + s] = "rock";
["sand", "sand", "sand", "stone", "stone", "stone", "organic"].forEach(
  (s, e) => {
    ri[$s + e] = s;
  },
);
[
  "wood",
  "metal",
  "metal",
  "metal",
  "organic",
  "wood",
  "metal",
  "organic",
  "organic",
  "organic",
  "organic",
  "organic",
  "organic",
].forEach((s, e) => {
  ri[Ki + e] = s;
});
["wood", "stone", "stone", "stone", "sand"].forEach((s, e) => {
  ri[fs + e] = s;
});
for (let s = 0; s < 4; s++)
  ((ri[zt + s * 3] = "wood"),
    (ri[zt + s * 3 + 1] = "bark"),
    (ri[zt + s * 3 + 2] = "organic"));
for (let s = 12; s <= 16; s++) ri[zt + s] = "organic";
ri[zt + 17] = "liquid";
ri[zt + 18] = "glow";
ri[zt + 19] = "organic";
ri[zt + 20] = "organic";
ri[zt + 21] = "organic";
ri[A1] = "cloth";
ri[mn] = "organic";
ri[mn + 1] = "dirt";
ri[mn + 2] = "dirt";
for (let s = 3; s <= 8; s++) ri[mn + s] = "organic";
for (let s = 0; s < Yc.length * 3; s++) ri[sv + s] = "organic";
for (let s = 0; s < Yc.length * 3; s++) ri[lA + s] = "organic";
for (let s = 0; s < 3; s++) ri[P0 + s] = "cloth";
ri[Ju] = "bark";
ri[Hm] = "glow";
ri[ma] = "organic";
ri[ma + 1] = "organic";
for (let s = 2; s <= 4; s++) ri[ma + s] = "rock";
ri[Ps] = "sand";
ri[Ps + 1] = "sand";
ri[Ps + 2] = "metal";
ri[Ps + 3] = "rock";
ri[Ps + 4] = "sand";
ri[Ps + 5] = "sand";
ri[Ps + 6] = "metal";
ri[Qi] = "sand";
ri[Qi + 1] = "rock";
ri[Qi + 2] = "rock";
ri[Qi + 3] = "glass";
ri[Qi + 4] = "rock";
ri[Qi + 5] = "metal";
ri[Qi + 6] = "glass";
ri[y0] = "cloth";
ri[Rc] = "metal";
ri[F0] = "glow";
ri[b5] = "metal";
ri[U0] = "organic";
ri[U0 + 1] = "dirt";
ri[yd] = "organic";
ri[yd + 1] = "organic";
ri[vd] = "dirt";
ri[vd + 1] = "dirt";
ri[bd] = "organic";
ri[bd + 1] = "dirt";
ri[iv] = "wood";
ri[Bm] = "organic";
[201, 202, 203].forEach((s) => {
  ri[s] = "organic";
});
Object.assign(ri, {
  204: "wood",
  205: "bark",
  206: "organic",
  207: "organic",
  208: "organic",
  209: "glow",
  210: "organic",
  211: "organic",
  212: "smooth",
  213: "cloth",
  214: "stone",
  215: "smooth",
  216: "liquid",
  217: "cloth",
  218: "metal",
  219: "wood",
  220: "wood",
  221: "bark",
  222: "rock",
  223: "organic",
  224: "organic",
  225: "organic",
  226: "stone",
  227: "wood",
  228: "metal",
  229: "organic",
  230: "cloth",
});
const fP = (s, e, t, i) => (n, o, a) => {
  const r = Math.floor(o / i),
    l = o % i === i - 1,
    c = (n + r * 7) % 16 === 0;
  if (l || c) return Z(s * 0.48, e * 0.45, t * 0.42, 5)(n, o, a);
  const h = Math.sin(n * 0.9 + r * 2.3 + Math.sin(o * 1.7 + r) * 1.4) * 9,
    d = ((n - 5 - r * 3) & 15) ** 2 + ((o % i) - 1) ** 2 < 2 ? -26 : 0,
    u = (r % 2 ? 7 : -4) + h + d;
  return Z(s + u, e + u * 0.72, t + u * 0.45, 7)(n, o, a);
};
Ne[231] = fP(150, 99, 52, 4);
Ne[232] = fP(163, 110, 58, 4);
Ne[233] = (s, e, t) => {
  const i = Math.sin(s * 2.1 + Math.sin(e * 0.45) * 1.3) * 8;
  return Z(86 + i, 56 + i * 0.7, 31 + i * 0.4, 6)(s, e, t);
};
Ne[234] = (s, e, t) => {
  if ((s % 8 === 3 || s % 8 === 4) && (e % 8 === 3 || e % 8 === 4))
    return s % 8 === 3 && e % 8 === 3
      ? [172, 176, 182, 255]
      : [96, 100, 108, 255];
  const i = (s * 3 + e * 5) % 23 === 0 ? 30 : 0;
  return Z(58 + i, 61 + i, 68 + i, 6)(s, e, t);
};
Ne[235] = (s, e, t) => {
  const i = s === 0 || e === 0 || s === 15 || e === 15,
    n = Math.max(0, 1 - Math.abs(s - e + 3) / 3) * 50;
  return i
    ? Z(128, 92, 36, 6)(s, e, t)
    : Z(214 + n, 168 + n, 72 + n * 0.5, 8)(s, e, t);
};
Ne[236] = (s, e, t) =>
  (s * 13 + e * 7) % 17 === 0 && t() > 0.35
    ? [236, 196, 88, 255]
    : s % 4 === 3
      ? Z(30, 19, 11, 4)(s, e, t)
      : Z(58, 38, 22, 6)(s, e, t);
Ne[237] = (s, e, t) => {
  const n = e % 5 === 4,
    o = (e % 5 === 0 || e % 5 === 3) && t() > 0.7;
  if (n) return Z(38, 44, 24, 4)(s, e, t);
  if (o) return Z(118, 92, 56, 8)(s, e, t);
  const a = (Math.floor(e / 5) % 2 ? 4 : -3) + Math.sin(s * 0.8 + e) * 3;
  return Z(84 + a, 99 + a, 53 + a, 6)(s, e, t);
};
Ne[238] = (s, e, t) => {
  const i = [222, 208, 150, 255];
  return ((s === 1 || s === 14) && e >= 2 && e <= 13) ||
    ((e === 2 || e === 13) && s >= 1 && s <= 14)
    ? i
    : e >= 4 && e <= 6 && s >= 3 && s <= 12
      ? (s + e) % 4 < 2
        ? [226, 176, 48, 255]
        : [36, 36, 30, 255]
      : e >= 8 &&
          e <= 11 &&
          s >= 3 &&
          s <= 12 &&
          (s - 3) % 3 !== 2 &&
          !(e === 9 && (s - 3) % 3 === 1 && s < 9)
        ? i
        : Z(80, 95, 50, 5)(s, e, t);
};
Object.assign(ri, {
  231: "wood",
  232: "wood",
  233: "wood",
  234: "metal",
  235: "metal",
  236: "wood",
  237: "wood",
  238: "smooth",
});
const xf = (Math.PI * 2) / 16,
  xi = (s, e, t, i = 255) => [Math.round(s), Math.round(e), Math.round(t), i],
  eo = (s, e) => ((s % e) + e) % e;
Ne[239] = (s, e, t) => {
  const i = eo(s + e, 8),
    n = eo(s - e, 8);
  if (i === 0 || n === 0)
    return i === 0 && n === 0
      ? xi(250, 214, 120)
      : Z(196, 146, 62, 10)(s, e, t);
  const o = eo(s, 8),
    a = eo(e, 8);
  if ((o === 4 && (a === 0 || a === 8)) || (a === 4 && o === 0))
    return xi(238, 196, 96);
  if (Math.abs(o - 4) + Math.abs(eo(e + 4, 8) - 4) === 1 && eo(s + e, 8) === 4)
    return xi(62, 10, 24);
  const c = (s * 7 + e * 3) % 5 === 0 ? -10 : 0;
  return Z(146 + c, 24 + c * 0.4, 40 + c * 0.4, 9)(s, e, t);
};
