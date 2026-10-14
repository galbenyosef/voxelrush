// index-Dp6GxvJu 49 — math
// Lines 43443-43774 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
Be[zd] = (n, e, t) => {
  const i =
      (e * 5 + Math.floor(n / 5) * 3) % 4 === 0
        ? -28
        : (e * 5 + Math.floor(n / 5) * 3) % 4 === 2
          ? 10
          : 0,
    s = Math.hypot(n - 10.5, (e - 7) * 1.4) < 1.6 ? -24 : 0,
    o = Math.sin(e * 1.3 + n * 0.12) * 7,
    a = n > 11 ? -18 : 0;
  return ie(
    98 + o + i + s + a,
    69 + o * 0.7 + i * 0.8 + s + a,
    43 + o * 0.4 + i * 0.6 + s + a * 0.7,
    9,
  )(n, e, t);
};
Be[Qp] = (n, e, t) => {
  const i = Math.abs(Math.sin(n * 0.92 + Math.sin(e * 0.7) * 1.8)),
    s = Math.abs(Math.sin(e * 1.13 - n * 0.37 + 1.3)),
    o = Math.min(i, s);
  if (o < 0.13) return ie(255, 218, 124, 14)(n, e, t);
  if (o < 0.3) return ie(240, 108, 24, 16)(n, e, t);
  if (o < 0.46) return ie(134, 36, 12, 12)(n, e, t);
  const a = (n * 7 + e * 5) % 13 < 2 ? 44 : 0;
  return ie(40 + a, 32 + a, 29 + a, 8)(n, e, t);
};
Be[zl] = (n, e, t) => {
  const i = n < 1 || e < 1 || n > 14 || e > 14,
    s = n > 3 && n < 12 && e > 5 && e < 11 && Math.floor(e) % 2 === 0,
    o = Math.floor(t() * 5);
  return s
    ? [13, 23, 22, 255]
    : i
      ? [68 + o, 86 + o, 73 + o, 255]
      : [35 + o, 49 + o, 43 + o, 255];
};
Be[jc] = (n, e) => {
  const t = Math.floor(n) % 4 === 0 || Math.floor(e) % 4 === 0,
    i = Math.abs(Math.hypot(n - 8, e - 8) - 5) < 0.45,
    s = n > 3 && n < 11 && Math.abs(e - (9 + Math.sin(n * 1.4) * 2)) < 0.4;
  return i || s
    ? [101, 217, 155, 255]
    : n > 11 && e > 2 && e < 4
      ? [229, 179, 86, 255]
      : t
        ? [20, 65, 51, 255]
        : [8, 28, 25, 255];
};
Be[gy] = (n, e, t) => {
  const i = n < 1 || e < 1 || n > 14 || e > 14;
  return (n === 2 || n === 13) && (e === 2 || e === 13)
    ? ie(133, 139, 145, 8)(n, e, t)
    : i
      ? ie(51, 56, 62, 5)(n, e, t)
      : ie(84, 91, 99, 9)(n, e, t);
};
Be[Xc] = (n, e, t) => {
  const i = Math.floor(n * 3 + e) % 7 === 0 ? 15 : 0;
  return ie(165 + i, 151 + i, 76, 18)(n, e, t);
};
Be[Xc + 1] = (n, e, t) =>
  e < 3 + (Math.floor(n) % 3) ? Be[Xc](n, e, t) : ie(119, 84, 48, 18)(n, e, t);
Be[rg] = (n, e, t) => {
  const i = e === 2 || e === 3 || e === 12 || e === 13,
    s = n % 4 === 0 || n % 4 === 1;
  return i
    ? ie(70, 74, 62, 7)(n, e, t)
    : s
      ? ie(121, 79, 39, 9)(n, e, t)
      : (n * 7 + e * 13) % 29 < 3
        ? ie(67, 103, 43, 10)(n, e, t)
        : ie(145, 94, 45, 10)(n, e, t);
};
Be[Jp] = (n, e, t) => {
  if (n < 2 || n > 13 || e < 2 || e > 13) return ie(151, 99, 48, 8)(n, e, t);
  const s = Math.sin(n * 1.1 + e * 0.7) + Math.sin(e * 1.8 - n * 0.35);
  return ie(47 + s * 8, 34 + s * 6, 23 + s * 4, 9)(n, e, t);
};
const e4 = (n, e) => (t, i, s) => {
  const o = Math.sin(t * 0.83 + i * 0.47) + Math.sin(i * 1.09 - t * 0.31);
  if ((t * 7 + i * 13) % 37 < 4 && o < 0.45) return [0, 0, 0, 0];
  const a = s(),
    r = o * 9,
    l = (t * 5 + i * 3) % 11 === 0 || (t * 3 + i * 7) % 23 === 4 ? e : n,
    c = (t + i * 2) % 9 === 0 ? -14 : 0;
  return [
    Un(l[0] + r + c, 14, a),
    Un(l[1] + r * 0.8 + c, 13, a),
    Un(l[2] + r * 0.35, 9, a),
    255,
  ];
};
Be[201] = e4([212, 104, 30], [240, 170, 48]);
Be[202] = e4([164, 36, 30], [212, 84, 36]);
Be[203] = e4([226, 176, 44], [238, 208, 92]);
Be[204] = (n, e, t) => {
  const i = Math.hypot(n - 7.5, e - 7.5);
  return i > 6.9
    ? ie(222, 218, 206, 6)(n, e, t)
    : ie(
        Math.floor(i) % 2 ? 196 : 176,
        Math.floor(i) % 2 ? 170 : 148,
        Math.floor(i) % 2 ? 118 : 98,
        6,
      )(n, e, t);
};
Be[205] = (n, e, t) => {
  const s = (e * 5 + (n >> 2) * 3) % 7 === 0 && (n * 7 + e) % 6 < 4;
  if (Math.hypot(n - 11, e - 5) < 1.3 || Math.hypot(n - 3.5, e - 12) < 1.1)
    return ie(44, 40, 38, 6)(n, e, t);
  if (s) return ie(58, 54, 50, 8)(n, e, t);
  const a = n % 5 === 0 ? -12 : 0;
  return ie(228 + a, 224 + a, 212 + a, 7)(n, e, t);
};
Be[206] = (n, e, t) => {
  const i = [
    [3, 3, 2.4, 0.6, [206, 98, 30]],
    [10, 2.5, 2.2, -0.4, [168, 42, 32]],
    [13.5, 8, 2.3, 0.9, [226, 172, 46]],
    [7, 7.5, 2.8, -0.8, [196, 74, 28]],
    [2.5, 11, 2.3, 0.2, [228, 150, 44]],
    [9.5, 12.5, 2.6, 1.3, [150, 58, 34]],
    [14, 14, 1.8, -0.2, [214, 120, 36]],
    [5.5, 14.5, 1.7, 0.7, [118, 72, 38]],
  ];
  for (const [s, o, a, r, l] of i) {
    const c = n - s,
      h = e - o,
      d = Math.cos(r),
      u = Math.sin(r),
      f = c * d + h * u,
      p = -c * u + h * d;
    if ((f / a) ** 2 + (p / (a * 0.55)) ** 2 <= 1) {
      const m = Math.abs(p) < 0.45 ? -22 : 0;
      return ie(l[0] + m, l[1] + m, l[2] + m * 0.5, 12)(n, e, t);
    }
  }
  return (n * 7 + e * 11) % 19 < 2 ? ie(92, 62, 36, 10)(n, e, t) : [0, 0, 0, 0];
};
Be[207] = (n, e, t) => {
  const i = n - 7.5,
    s = e - 7.5,
    o = Math.hypot(i, s);
  if (o < 1.7) return ie(104, 84, 40, 8)(n, e, t);
  if (o < 2.4) return ie(84, 110, 44, 8)(n, e, t);
  const r = Math.cos(Math.atan2(s, i) * 8) * 16 - o * 1.6;
  return ie(226 + r, 120 + r * 0.7, 28 + r * 0.2, 7)(n, e, t);
};
const Ik = (n, e, t) => {
  const i = Math.cos(((n + 0.5) / 16) * Math.PI * 8),
    s = e === 0 || e === 15 ? -26 : e === 1 || e === 14 ? -12 : 0,
    o = i * 18 + s + Math.sin(e * 0.7) * 3;
  return ie(224 + o, 116 + o * 0.75, 26 + o * 0.2, 7)(n, e, t);
};
Be[208] = Ik;
Be[209] = (n, e, t) => {
  const i = (r) => e >= 3 && e <= 7 && Math.abs(n - r) <= (e - 3) * 0.62 + 0.3,
    s = e >= 8 && e <= 9 && Math.abs(n - 7.5) <= (e - 8) * 0.6 + 0.3,
    o = 1 - ((n - 7.5) / 6.2) ** 2;
  let a =
    n >= 2 && n <= 13 && e >= 10 + (1 - o) * -1.4 + 1 && e <= 11 + o * 2.2;
  return (
    (n === 5 || n === 10) && e <= 11 && (a = !1),
    (n === 7 || n === 8) && e >= 12 + Math.round(o) && (a = !1),
    i(4.5) || i(10.5) || s || a
      ? (i(4.5) || i(10.5) ? e >= 6 : s ? !0 : e >= 11)
        ? ie(255, 226, 96, 6)(n, e, t)
        : ie(255, 164, 34, 8)(n, e, t)
      : Ik(n, e, t)
  );
};
Be[210] = (n, e, t) =>
  e >= 10 && (n === 7 || n === 8)
    ? ie(98, 144, 58, 10)(n, e, t)
    : Math.hypot(n - 4.5, e - 9) < 2.8 || Math.hypot(n - 11, e - 8.5) < 2.8
      ? ie(104, 162, 62, 14)(n, e, t)
      : [0, 0, 0, 0];
Be[211] = (n, e, t) => {
  if (e >= 13 && e <= 14 && n > 0 && n < 15)
    return ie(88, 128, 52, 10)(n, e, t);
  for (const [i, s, o] of [
    [4, 8, 3.6],
    [11, 6, 3.9],
    [8, 11, 3],
  ]) {
    const a = Math.hypot(n - i, e - s),
      r = o * (0.82 + 0.18 * Math.cos(Math.atan2(e - s, n - i) * 5));
    if (a < r) {
      const l = Math.abs(n - i) < 0.6 || Math.abs(e - s) < 0.6 ? -18 : 0;
      return ie(70 + l, 138 + l, 50, 13)(n, e, t);
    }
  }
  return Math.abs(Math.hypot(n - 13, e - 12) - 1.6) < 0.45
    ? ie(116, 150, 64, 8)(n, e, t)
    : [0, 0, 0, 0];
};
Be[212] = (n, e, t) => {
  const i = (n === 4 && e < 6) || (n === 11 && e < 9) || (n === 8 && e < 3),
    s = -e * 1.4 + (i ? 10 : 0);
  return ie(240 + s, 226 + s, 196 + s, 5)(n, e, t);
};
Be[213] = (n, e, t) => {
  const i = n - 7.5,
    s = e - 7.5,
    o = Math.hypot(i, s),
    a = Math.atan2(s, i);
  let r = !1;
  for (let l = 0; l < 8; l++) {
    const c = (l * Math.PI) / 4 + 0.2;
    Math.abs(i * Math.sin(c) - s * Math.cos(c)) < 0.5 &&
      i * Math.cos(c) + s * Math.sin(c) > 0 &&
      (r = !0);
  }
  for (const l of [2.3, 4.6, 6.9]) {
    const c = l * (1 + 0.09 * Math.cos(a * 8));
    Math.abs(o - c) < 0.42 && (r = !0);
  }
  return !r || o > 8.6 ? [0, 0, 0, 0] : ie(236, 238, 240, 10)(n, e, t);
};
Be[214] = (n, e, t) => {
  const i =
      (n >= 7 && n <= 8 && e >= 2 && e <= 8) ||
      (e >= 4 && e <= 5 && n >= 5 && n <= 10),
    s = (e === 10 || e === 12) && n >= 3 && n <= 12 && (n * 3 + e) % 4 !== 0,
    o = e >= 13 && (n * 5 + e * 3) % 5 < 3;
  if (i || s) return ie(88, 90, 92, 6)(n, e, t);
  if (o) return ie(86, 116, 64, 12)(n, e, t);
  const a = Math.sin(n * 1.3 + e * 0.7) * 5;
  return ie(142 + a, 144 + a, 146 + a, 7)(n, e, t);
};
Be[215] = (n, e, t) => {
  const i = (n * 3 + e * 5) % 23 === 0,
    s = Math.sin(n * 0.9 + e * 0.4) * 5;
  return i
    ? ie(170, 162, 140, 6)(n, e, t)
    : ie(232 + s, 224 + s, 200 + s, 6)(n, e, t);
};
Be[216] = (n, e, t) => {
  const i = [
      [4, 4, 1.8],
      [11, 6, 1.4],
      [7, 11, 2.1],
      [13, 13, 1.2],
      [2, 12, 1],
    ].some(([o, a, r]) => Math.abs(Math.hypot(n - o, e - a) - r) < 0.55),
    s = Math.sin(n * 0.7 + e * 0.5) * 12;
  return i
    ? ie(196, 255, 150, 8)(n, e, t)
    : ie(84 + s, 196 + s, 60, 10)(n, e, t);
};
Be[217] = (n, e, t) => {
  const i = (n + e) % 2 === 0 ? 8 : -6,
    s = (r) =>
      e >= 4 &&
      e <= 7 &&
      (Math.abs(n - r - (e - 5.5)) < 0.6 || Math.abs(n - r + (e - 5.5)) < 0.6),
    o = e === 11 + Math.round(((n - 7.5) / 5) ** 2 * -1.5) && n >= 3 && n <= 12,
    a =
      (e === 10 || e === 12) &&
      n >= 4 &&
      n <= 11 &&
      n % 2 === 0 &&
      Math.abs(n - 7.5) < 4;
  return s(4.5) || s(10.5) || o || a
    ? ie(46, 34, 26, 6)(n, e, t)
    : ie(178 + i, 150 + i, 98 + i, 7)(n, e, t);
};
Be[218] = (n, e, t) => {
  const i = n === 7 || n === 8 ? 26 : n === 6 || n === 9 ? 12 : 0,
    s = (n * 3 + e * 7) % 11 < 2 ? 8 : (n * 5 + e * 3) % 13 < 1 ? -6 : 0,
    o = n === 0 || n === 15 || e === 0 || e === 15 ? -10 : 0,
    a = 58 + i + s + o;
  return ie(a, a + 4, a + 12, 4)(n, e, t);
};
Be[219] = (n, e, t) => {
  const i = Math.floor(e / 4),
    s = e % 4;
  if (s === 3) return ie(30, 21, 15, 3)(n, e, t);
  if ((n + (i & 1) * 7 + i * 3) % 16 === 15) return ie(36, 25, 18, 3)(n, e, t);
  const a =
      Math.sin(n * 0.55 + i * 2.3 + Math.sin(n * 0.21 + i) * 2) * 6 +
      (s === 0 ? 7 : s === 2 ? -3 : 0),
    r = (n * 7 + i * 13) % 23 < 2 ? 10 : 0;
  return ie(
    74 + a + r,
    52 + a * 0.7 + r * 0.7,
    38 + a * 0.45 + r * 0.4,
    4,
  )(n, e, t);
};
Be[220] = (n, e, t) => {
  const i = Math.hypot(n - 7.5, e - 7.5),
    s = Math.floor(i) % 2,
    o = Math.abs(n - e) < 0.6 && i < 6 ? -30 : 0;
  return ie(
    (s ? 122 : 104) + o,
    (s ? 114 : 98) + o,
    (s ? 104 : 90) + o,
    6,
  )(n, e, t);
};
Be[221] = (n, e, t) => {
  const i = (n % 5 === 0 && (e * 3 + n) % 7 < 5) || (n * 11 + e * 3) % 37 === 0,
    s = Math.sin(e * 0.45 + n * 1.7) * 6;
  return i
    ? ie(46, 42, 40, 5)(n, e, t)
    : ie(112 + s, 106 + s, 98 + s, 7)(n, e, t);
};
Be[222] = (n, e, t) =>
  Math.sin(n * 0.8 + e * 0.35) + Math.sin(e * 1.1 - n * 0.2) > 0.8 ||
  (n * 5 + e * 7) % 13 === 0
    ? ie(78, 118, 56, 14)(n, e, t)
    : Be[4](n, e, t);
Be[223] = (n, e, t) => {
  if (e <= 1 && n >= 2 && n <= 13) return ie(150, 118, 70, 8)(n, e, t);
  for (const [i, s] of [
    [3.5, [110, 140, 70]],
    [8, [150, 110, 170]],
    [12.5, [92, 124, 64]],
  ]) {
    const o = (e - 2) * 0.32;
    if (
      e >= 2 &&
      e <= 13 &&
      Math.abs(n - i) <= o + 0.5 &&
      ((n + e * 3) % 3 !== 0 || Math.abs(n - i) < 0.6)
    )
      return ie(s[0], s[1], s[2], 16)(n, e, t);
  }
  return [0, 0, 0, 0];
};
