// index-Dp6GxvJu 50 — tile_kind
// Lines 43775-44122 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Pk = (n, e) => (t, i, s) => {
  if (i >= 9 && i <= 15 && t >= 6 && t <= 9)
    return ie(232, 224, 204, 6)(t, i, s);
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
    return ie(244, 240, 228, 6)(t, i, s);
  const a = i === 9 ? -20 : 0;
  return ie(n[0] + a, n[1] + a, n[2] + a, 10)(t, i, s);
};
Be[224] = Pk([204, 36, 30], !0);
Be[225] = Pk([138, 92, 56], !1);
Be[226] = (n, e, t) =>
  (Math.abs(e - (3 + n * 0.55 + Math.sin(n) * 0.8)) < 0.55 &&
    n > 1 &&
    n < 11) ||
  (Math.abs(n - (12 + Math.sin(e * 0.8))) < 0.5 && e > 6 && e < 14)
    ? ie(66, 66, 64, 5)(n, e, t)
    : Be[Bn + 3](n, e, t);
Be[227] = (n, e, t) => {
  const i = n === 0 || n === 15 || e === 0 || e === 15,
    s = n === 1 || n === 14 || e === 1 || e === 14;
  if (i) return ie(122, 86, 48, 5)(n, e, t);
  if (s) return ie(150, 110, 64, 5)(n, e, t);
  const o = Math.sin(e * 1.9 + Math.sin(n * 0.4) * 1.6) * 4;
  return ie(206 + o, 170 + o * 0.8, 116 + o * 0.5, 4)(n, e, t);
};
Be[228] = (n, e, t) => {
  const i = Math.sin(n * 1.7) * Math.sin(e * 1.3) * 6;
  return ie(52 + i, 54 + i, 58 + i, 5)(n, e, t);
};
Be[fC] = l1([214, 108, 34]);
Be[230] = (n, e, t) => {
  const i = (n + e) % 2 === 0 ? 8 : -6;
  return ie(178 + i, 150 + i, 98 + i, 7)(n, e, t);
};
const uW = {
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
  TILE_KIND = {
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
    [_S]: "cloth",
    [RS]: "cloth",
    [CS]: "cloth",
    [qf]: "metal",
    [Kf]: "wood",
    [Bl]: "metal",
    [Bl + 1]: "metal",
    [Hl]: "metal",
    [Hl + 1]: "metal",
    [uy]: "metal",
    [fy]: "metal",
    [py]: "metal",
    [my]: "metal",
  };
AS.forEach((n, e) => {
  TILE_KIND[TS + e] = "stone";
});
for (let n = 0; n < 5; n++) TILE_KIND[to + n] = "rock";
["sand", "sand", "sand", "stone", "stone", "stone", "organic"].forEach(
  (n, e) => {
    TILE_KIND[Bn + e] = n;
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
].forEach((n, e) => {
  TILE_KIND[Hi + e] = n;
});
["wood", "stone", "stone", "stone", "sand"].forEach((n, e) => {
  TILE_KIND[nn + e] = n;
});
for (let n = 0; n < 4; n++)
  ((TILE_KIND[Bt + n * 3] = "wood"),
    (TILE_KIND[Bt + n * 3 + 1] = "bark"),
    (TILE_KIND[Bt + n * 3 + 2] = "organic"));
for (let n = 12; n <= 16; n++) TILE_KIND[Bt + n] = "organic";
TILE_KIND[Bt + 17] = "liquid";
TILE_KIND[Bt + 18] = "glow";
TILE_KIND[Bt + 19] = "organic";
TILE_KIND[Bt + 20] = "organic";
TILE_KIND[Bt + 21] = "organic";
TILE_KIND[Yf] = "cloth";
TILE_KIND[as] = "organic";
TILE_KIND[as + 1] = "dirt";
TILE_KIND[as + 2] = "dirt";
for (let n = 3; n <= 8; n++) TILE_KIND[as + n] = "organic";
for (let n = 0; n < tc.length * 3; n++) TILE_KIND[lg + n] = "organic";
for (let n = 0; n < tc.length * 3; n++) TILE_KIND[kS + n] = "organic";
for (let n = 0; n < 3; n++) TILE_KIND[Wc + n] = "cloth";
TILE_KIND[zd] = "bark";
TILE_KIND[Qp] = "glow";
TILE_KIND[BLOCK_ID_SEAWEED] = "organic";
TILE_KIND[BLOCK_ID_SEAWEED + 1] = "organic";
for (let n = 2; n <= 4; n++) TILE_KIND[BLOCK_ID_SEAWEED + n] = "rock";
TILE_KIND[_n] = "sand";
TILE_KIND[_n + 1] = "sand";
TILE_KIND[_n + 2] = "metal";
TILE_KIND[_n + 3] = "rock";
TILE_KIND[_n + 4] = "sand";
TILE_KIND[_n + 5] = "sand";
TILE_KIND[_n + 6] = "metal";
TILE_KIND[Wi] = "sand";
TILE_KIND[Wi + 1] = "rock";
TILE_KIND[Wi + 2] = "rock";
TILE_KIND[Wi + 3] = "glass";
TILE_KIND[Wi + 4] = "rock";
TILE_KIND[Wi + 5] = "metal";
TILE_KIND[Wi + 6] = "glass";
TILE_KIND[_c] = "cloth";
TILE_KIND[zl] = "metal";
TILE_KIND[jc] = "glow";
TILE_KIND[gy] = "metal";
TILE_KIND[Xc] = "organic";
TILE_KIND[Xc + 1] = "dirt";
TILE_KIND[rg] = "wood";
TILE_KIND[Jp] = "organic";
[201, 202, 203].forEach((n) => {
  TILE_KIND[n] = "organic";
});
Object.assign(TILE_KIND, {
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
const Ok = (n, e, t, i) => (s, o, a) => {
  const r = Math.floor(o / i),
    l = o % i === i - 1,
    c = (s + r * 7) % 16 === 0;
  if (l || c) return ie(n * 0.48, e * 0.45, t * 0.42, 5)(s, o, a);
  const h = Math.sin(s * 0.9 + r * 2.3 + Math.sin(o * 1.7 + r) * 1.4) * 9,
    d = ((s - 5 - r * 3) & 15) ** 2 + ((o % i) - 1) ** 2 < 2 ? -26 : 0,
    u = (r % 2 ? 7 : -4) + h + d;
  return ie(n + u, e + u * 0.72, t + u * 0.45, 7)(s, o, a);
};
Be[231] = Ok(150, 99, 52, 4);
Be[232] = Ok(163, 110, 58, 4);
Be[233] = (n, e, t) => {
  const i = Math.sin(n * 2.1 + Math.sin(e * 0.45) * 1.3) * 8;
  return ie(86 + i, 56 + i * 0.7, 31 + i * 0.4, 6)(n, e, t);
};
Be[234] = (n, e, t) => {
  if ((n % 8 === 3 || n % 8 === 4) && (e % 8 === 3 || e % 8 === 4))
    return n % 8 === 3 && e % 8 === 3
      ? [172, 176, 182, 255]
      : [96, 100, 108, 255];
  const i = (n * 3 + e * 5) % 23 === 0 ? 30 : 0;
  return ie(58 + i, 61 + i, 68 + i, 6)(n, e, t);
};
Be[235] = (n, e, t) => {
  const i = n === 0 || e === 0 || n === 15 || e === 15,
    s = Math.max(0, 1 - Math.abs(n - e + 3) / 3) * 50;
  return i
    ? ie(128, 92, 36, 6)(n, e, t)
    : ie(214 + s, 168 + s, 72 + s * 0.5, 8)(n, e, t);
};
Be[236] = (n, e, t) =>
  (n * 13 + e * 7) % 17 === 0 && t() > 0.35
    ? [236, 196, 88, 255]
    : n % 4 === 3
      ? ie(30, 19, 11, 4)(n, e, t)
      : ie(58, 38, 22, 6)(n, e, t);
Be[237] = (n, e, t) => {
  const s = e % 5 === 4,
    o = (e % 5 === 0 || e % 5 === 3) && t() > 0.7;
  if (s) return ie(38, 44, 24, 4)(n, e, t);
  if (o) return ie(118, 92, 56, 8)(n, e, t);
  const a = (Math.floor(e / 5) % 2 ? 4 : -3) + Math.sin(n * 0.8 + e) * 3;
  return ie(84 + a, 99 + a, 53 + a, 6)(n, e, t);
};
Be[238] = (n, e, t) => {
  const i = [222, 208, 150, 255];
  return ((n === 1 || n === 14) && e >= 2 && e <= 13) ||
    ((e === 2 || e === 13) && n >= 1 && n <= 14)
    ? i
    : e >= 4 && e <= 6 && n >= 3 && n <= 12
      ? (n + e) % 4 < 2
        ? [226, 176, 48, 255]
        : [36, 36, 30, 255]
      : e >= 8 &&
          e <= 11 &&
          n >= 3 &&
          n <= 12 &&
          (n - 3) % 3 !== 2 &&
          !(e === 9 && (n - 3) % 3 === 1 && n < 9)
        ? i
        : ie(80, 95, 50, 5)(n, e, t);
};
Object.assign(TILE_KIND, {
  231: "wood",
  232: "wood",
  233: "wood",
  234: "metal",
  235: "metal",
  236: "wood",
  237: "wood",
  238: "smooth",
});
const hu = (Math.PI * 2) / 16,
  yi = (n, e, t, i = 255) => [Math.round(n), Math.round(e), Math.round(t), i],
  Bs = (n, e) => ((n % e) + e) % e;
Be[239] = (n, e, t) => {
  const i = Bs(n + e, 8),
    s = Bs(n - e, 8);
  if (i === 0 || s === 0)
    return i === 0 && s === 0
      ? yi(250, 214, 120)
      : ie(196, 146, 62, 10)(n, e, t);
  const o = Bs(n, 8),
    a = Bs(e, 8);
  if ((o === 4 && (a === 0 || a === 8)) || (a === 4 && o === 0))
    return yi(238, 196, 96);
  if (Math.abs(o - 4) + Math.abs(Bs(e + 4, 8) - 4) === 1 && Bs(n + e, 8) === 4)
    return yi(62, 10, 24);
  const c = (n * 7 + e * 3) % 5 === 0 ? -10 : 0;
  return ie(146 + c, 24 + c * 0.4, 40 + c * 0.4, 9)(n, e, t);
};
Be[240] = (n, e, t) => {
  const i = Bs(n, 8),
    s = Bs(e, 8);
  if (i === 4 && s === 4) return yi(255, 150, 200);
  if (Math.abs(i - 4) + Math.abs(s - 4) === 1) return yi(232, 186, 82);
  if (i === 0 && s === 0) return yi(150, 96, 210);
  if (
    Math.abs(i) + Math.abs(s) === 1 ||
    (i === 7 && s === 0) ||
    (i === 0 && s === 7)
  )
    return yi(98, 52, 138);
  const o = Math.sin(n * hu * 4) * 4;
  return ie(62 + o, 24, 92 + o, 7)(n, e, t);
};
const Nk = (n, e) =>
    Bs(n - e + 2.2 * Math.sin(e * hu) + 1.1 * Math.sin(n * hu * 2 + 1), 16),
  Dk = (n, e) => Bs(n + e + 5 + 1.6 * Math.sin(n * hu + 2), 16),
  Sg = (n, e) => n < e || n > 16 - e;
Be[241] = (n, e, t) =>
  Sg(Nk(n, e), 0.8)
    ? ie(170, 166, 164, 6)(n, e, t)
    : Sg(Dk(n, e), 0.45) && e % 5 !== 0
      ? ie(206, 202, 198, 5)(n, e, t)
      : ie(238, 234, 226, 4)(n, e, t);
Be[242] = (n, e, t) =>
  Sg(Nk(n + 7, e), 0.6)
    ? ie(204, 160, 70, 12)(n, e, t)
    : Sg(Dk(n, e + 3), 0.4) && n % 4 !== 1
      ? ie(110, 88, 56, 8)(n, e, t)
      : (n * 11 + e * 5) % 37 === 0
        ? yi(214, 210, 222)
        : ie(30, 26, 36, 4)(n, e, t);
