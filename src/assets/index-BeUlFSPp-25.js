// index-BeUlFSPp 25 — math
// Lines 33463-33805 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Ne[Ju] = (s, e, t) => {
  const i =
      (e * 5 + Math.floor(s / 5) * 3) % 4 === 0
        ? -28
        : (e * 5 + Math.floor(s / 5) * 3) % 4 === 2
          ? 10
          : 0,
    n = Math.hypot(s - 10.5, (e - 7) * 1.4) < 1.6 ? -24 : 0,
    o = Math.sin(e * 1.3 + s * 0.12) * 7,
    a = s > 11 ? -18 : 0;
  return Z(
    98 + o + i + n + a,
    69 + o * 0.7 + i * 0.8 + n + a,
    43 + o * 0.4 + i * 0.6 + n + a * 0.7,
    9,
  )(s, e, t);
};
Ne[Hm] = (s, e, t) => {
  const i = Math.abs(Math.sin(s * 0.92 + Math.sin(e * 0.7) * 1.8)),
    n = Math.abs(Math.sin(e * 1.13 - s * 0.37 + 1.3)),
    o = Math.min(i, n);
  if (o < 0.13) return Z(255, 218, 124, 14)(s, e, t);
  if (o < 0.3) return Z(240, 108, 24, 16)(s, e, t);
  if (o < 0.46) return Z(134, 36, 12, 12)(s, e, t);
  const a = (s * 7 + e * 5) % 13 < 2 ? 44 : 0;
  return Z(40 + a, 32 + a, 29 + a, 8)(s, e, t);
};
Ne[Rc] = (s, e, t) => {
  const i = s < 1 || e < 1 || s > 14 || e > 14,
    n = s > 3 && s < 12 && e > 5 && e < 11 && Math.floor(e) % 2 === 0,
    o = Math.floor(t() * 5);
  return n
    ? [13, 23, 22, 255]
    : i
      ? [68 + o, 86 + o, 73 + o, 255]
      : [35 + o, 49 + o, 43 + o, 255];
};
Ne[F0] = (s, e) => {
  const t = Math.floor(s) % 4 === 0 || Math.floor(e) % 4 === 0,
    i = Math.abs(Math.hypot(s - 8, e - 8) - 5) < 0.45,
    n = s > 3 && s < 11 && Math.abs(e - (9 + Math.sin(s * 1.4) * 2)) < 0.4;
  return i || n
    ? [101, 217, 155, 255]
    : s > 11 && e > 2 && e < 4
      ? [229, 179, 86, 255]
      : t
        ? [20, 65, 51, 255]
        : [8, 28, 25, 255];
};
Ne[b5] = (s, e, t) => {
  const i = s < 1 || e < 1 || s > 14 || e > 14;
  return (s === 2 || s === 13) && (e === 2 || e === 13)
    ? Z(133, 139, 145, 8)(s, e, t)
    : i
      ? Z(51, 56, 62, 5)(s, e, t)
      : Z(84, 91, 99, 9)(s, e, t);
};
Ne[U0] = (s, e, t) => {
  const i = Math.floor(s * 3 + e) % 7 === 0 ? 15 : 0;
  return Z(165 + i, 151 + i, 76, 18)(s, e, t);
};
Ne[U0 + 1] = (s, e, t) =>
  e < 3 + (Math.floor(s) % 3) ? Ne[U0](s, e, t) : Z(119, 84, 48, 18)(s, e, t);
Ne[yd] = (s, e, t) => {
  const i = (s + ((e >> 2) & 1) * 2) & 3,
    n = e & 3;
  if (i === 3) return Z(122, 92, 42, 12)(s, e, t);
  const o = n === 0 ? 26 : n === 3 ? -22 : 0,
    a = i === 1 ? 8 : 0;
  return Z(206 + o + a, 166 + o + a * 0.5, 78 + o * 0.6, 16)(s, e, t);
};
Ne[yd + 1] = (s, e, t) =>
  e >= 12
    ? Ne[2](s, e, t)
    : e < 3
      ? Ne[yd](s, e, t)
      : s % 2
        ? Z(176, 140, 64, 14)(s, e, t)
        : Z(132, 104, 50, 12)(s, e, t);
Ne[vd] = (s, e, t) => {
  if (s % 3 === 2) return Z(132, 104, 72, 12)(s, e, t);
  const i = (s * 5 + e * 3) % 7 < 2 ? 18 : 0;
  return Z(190 + i, 166 + i, 112 + i * 0.6, 16)(s, e, t);
};
Ne[vd + 1] = (s, e, t) =>
  e < 2 + (s % 3 === 1 ? 1 : 0) ? Ne[vd](s, e, t) : Z(128, 96, 64, 14)(s, e, t);
Ne[bd] = (s, e, t) => {
  if (e % 4 === 3) return Z(92, 64, 38, 10)(s, e, t);
  const i = Math.sin(s * 1.7 + (e >> 2) * 2.1) * 12 + (e % 4 === 0 ? 14 : 0);
  return Z(72 + i * 0.6, 120 + i, 48 + i * 0.4, 14)(s, e, t);
};
Ne[bd + 1] = (s, e, t) =>
  e < 4 - (s % 3 === 0 ? 1 : 0)
    ? Ne[bd](s, (e + 1) % 3, t)
    : Ne[mn + 2](s, e, t);
Ne[iv] = (s, e, t) => {
  const i = e === 2 || e === 3 || e === 12 || e === 13,
    n = s % 4 === 0 || s % 4 === 1;
  return i
    ? Z(70, 74, 62, 7)(s, e, t)
    : n
      ? Z(121, 79, 39, 9)(s, e, t)
      : (s * 7 + e * 13) % 29 < 3
        ? Z(67, 103, 43, 10)(s, e, t)
        : Z(145, 94, 45, 10)(s, e, t);
};
Ne[Bm] = (s, e, t) => {
  if (s < 2 || s > 13 || e < 2 || e > 13) return Z(151, 99, 48, 8)(s, e, t);
  const n = Math.sin(s * 1.1 + e * 0.7) + Math.sin(e * 1.8 - s * 0.35);
  return Z(47 + n * 8, 34 + n * 6, 23 + n * 4, 9)(s, e, t);
};
const MA = (s, e) => (t, i, n) => {
  const o = Math.sin(t * 0.83 + i * 0.47) + Math.sin(i * 1.09 - t * 0.31);
  if ((t * 7 + i * 13) % 37 < 4 && o < 0.45) return [0, 0, 0, 0];
  const a = n(),
    r = o * 9,
    l = (t * 5 + i * 3) % 11 === 0 || (t * 3 + i * 7) % 23 === 4 ? e : s,
    c = (t + i * 2) % 9 === 0 ? -14 : 0;
  return [
    Ys(l[0] + r + c, 14, a),
    Ys(l[1] + r * 0.8 + c, 13, a),
    Ys(l[2] + r * 0.35, 9, a),
    255,
  ];
};
Ne[201] = MA([212, 104, 30], [240, 170, 48]);
Ne[202] = MA([164, 36, 30], [212, 84, 36]);
Ne[203] = MA([226, 176, 44], [238, 208, 92]);
Ne[204] = (s, e, t) => {
  const i = Math.hypot(s - 7.5, e - 7.5);
  return i > 6.9
    ? Z(222, 218, 206, 6)(s, e, t)
    : Z(
        Math.floor(i) % 2 ? 196 : 176,
        Math.floor(i) % 2 ? 170 : 148,
        Math.floor(i) % 2 ? 118 : 98,
        6,
      )(s, e, t);
};
Ne[205] = (s, e, t) => {
  const n = (e * 5 + (s >> 2) * 3) % 7 === 0 && (s * 7 + e) % 6 < 4;
  if (Math.hypot(s - 11, e - 5) < 1.3 || Math.hypot(s - 3.5, e - 12) < 1.1)
    return Z(44, 40, 38, 6)(s, e, t);
  if (n) return Z(58, 54, 50, 8)(s, e, t);
  const a = s % 5 === 0 ? -12 : 0;
  return Z(228 + a, 224 + a, 212 + a, 7)(s, e, t);
};
Ne[206] = (s, e, t) => {
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
  for (const [n, o, a, r, l] of i) {
    const c = s - n,
      h = e - o,
      d = Math.cos(r),
      u = Math.sin(r),
      f = c * d + h * u,
      p = -c * u + h * d;
    if ((f / a) ** 2 + (p / (a * 0.55)) ** 2 <= 1) {
      const m = Math.abs(p) < 0.45 ? -22 : 0;
      return Z(l[0] + m, l[1] + m, l[2] + m * 0.5, 12)(s, e, t);
    }
  }
  return (s * 7 + e * 11) % 19 < 2 ? Z(92, 62, 36, 10)(s, e, t) : [0, 0, 0, 0];
};
Ne[207] = (s, e, t) => {
  const i = s - 7.5,
    n = e - 7.5,
    o = Math.hypot(i, n);
  if (o < 1.7) return Z(104, 84, 40, 8)(s, e, t);
  if (o < 2.4) return Z(84, 110, 44, 8)(s, e, t);
  const r = Math.cos(Math.atan2(n, i) * 8) * 16 - o * 1.6;
  return Z(226 + r, 120 + r * 0.7, 28 + r * 0.2, 7)(s, e, t);
};
const dP = (s, e, t) => {
  const i = Math.cos(((s + 0.5) / 16) * Math.PI * 8),
    n = e === 0 || e === 15 ? -26 : e === 1 || e === 14 ? -12 : 0,
    o = i * 18 + n + Math.sin(e * 0.7) * 3;
  return Z(224 + o, 116 + o * 0.75, 26 + o * 0.2, 7)(s, e, t);
};
Ne[208] = dP;
Ne[209] = (s, e, t) => {
  const i = (r) => e >= 3 && e <= 7 && Math.abs(s - r) <= (e - 3) * 0.62 + 0.3,
    n = e >= 8 && e <= 9 && Math.abs(s - 7.5) <= (e - 8) * 0.6 + 0.3,
    o = 1 - ((s - 7.5) / 6.2) ** 2;
  let a =
    s >= 2 && s <= 13 && e >= 10 + (1 - o) * -1.4 + 1 && e <= 11 + o * 2.2;
  return (
    (s === 5 || s === 10) && e <= 11 && (a = !1),
    (s === 7 || s === 8) && e >= 12 + Math.round(o) && (a = !1),
    i(4.5) || i(10.5) || n || a
      ? (i(4.5) || i(10.5) ? e >= 6 : n ? !0 : e >= 11)
        ? Z(255, 226, 96, 6)(s, e, t)
        : Z(255, 164, 34, 8)(s, e, t)
      : dP(s, e, t)
  );
};
Ne[210] = (s, e, t) =>
  e >= 10 && (s === 7 || s === 8)
    ? Z(98, 144, 58, 10)(s, e, t)
    : Math.hypot(s - 4.5, e - 9) < 2.8 || Math.hypot(s - 11, e - 8.5) < 2.8
      ? Z(104, 162, 62, 14)(s, e, t)
      : [0, 0, 0, 0];
Ne[211] = (s, e, t) => {
  if (e >= 13 && e <= 14 && s > 0 && s < 15) return Z(88, 128, 52, 10)(s, e, t);
  for (const [i, n, o] of [
    [4, 8, 3.6],
    [11, 6, 3.9],
    [8, 11, 3],
  ]) {
    const a = Math.hypot(s - i, e - n),
      r = o * (0.82 + 0.18 * Math.cos(Math.atan2(e - n, s - i) * 5));
    if (a < r) {
      const l = Math.abs(s - i) < 0.6 || Math.abs(e - n) < 0.6 ? -18 : 0;
      return Z(70 + l, 138 + l, 50, 13)(s, e, t);
    }
  }
  return Math.abs(Math.hypot(s - 13, e - 12) - 1.6) < 0.45
    ? Z(116, 150, 64, 8)(s, e, t)
    : [0, 0, 0, 0];
};
Ne[212] = (s, e, t) => {
  const i = (s === 4 && e < 6) || (s === 11 && e < 9) || (s === 8 && e < 3),
    n = -e * 1.4 + (i ? 10 : 0);
  return Z(240 + n, 226 + n, 196 + n, 5)(s, e, t);
};
Ne[213] = (s, e, t) => {
  const i = s - 7.5,
    n = e - 7.5,
    o = Math.hypot(i, n),
    a = Math.atan2(n, i);
  let r = !1;
  for (let l = 0; l < 8; l++) {
    const c = (l * Math.PI) / 4 + 0.2;
    Math.abs(i * Math.sin(c) - n * Math.cos(c)) < 0.5 &&
      i * Math.cos(c) + n * Math.sin(c) > 0 &&
      (r = !0);
  }
  for (const l of [2.3, 4.6, 6.9]) {
    const c = l * (1 + 0.09 * Math.cos(a * 8));
    Math.abs(o - c) < 0.42 && (r = !0);
  }
  return !r || o > 8.6 ? [0, 0, 0, 0] : Z(236, 238, 240, 10)(s, e, t);
};
Ne[214] = (s, e, t) => {
  const i =
      (s >= 7 && s <= 8 && e >= 2 && e <= 8) ||
      (e >= 4 && e <= 5 && s >= 5 && s <= 10),
    n = (e === 10 || e === 12) && s >= 3 && s <= 12 && (s * 3 + e) % 4 !== 0,
    o = e >= 13 && (s * 5 + e * 3) % 5 < 3;
  if (i || n) return Z(88, 90, 92, 6)(s, e, t);
  if (o) return Z(86, 116, 64, 12)(s, e, t);
  const a = Math.sin(s * 1.3 + e * 0.7) * 5;
  return Z(142 + a, 144 + a, 146 + a, 7)(s, e, t);
};
Ne[215] = (s, e, t) => {
  const i = (s * 3 + e * 5) % 23 === 0,
    n = Math.sin(s * 0.9 + e * 0.4) * 5;
  return i
    ? Z(170, 162, 140, 6)(s, e, t)
    : Z(232 + n, 224 + n, 200 + n, 6)(s, e, t);
};
Ne[216] = (s, e, t) => {
  const i = [
      [4, 4, 1.8],
      [11, 6, 1.4],
      [7, 11, 2.1],
      [13, 13, 1.2],
      [2, 12, 1],
    ].some(([o, a, r]) => Math.abs(Math.hypot(s - o, e - a) - r) < 0.55),
    n = Math.sin(s * 0.7 + e * 0.5) * 12;
  return i ? Z(196, 255, 150, 8)(s, e, t) : Z(84 + n, 196 + n, 60, 10)(s, e, t);
};
Ne[217] = (s, e, t) => {
  const i = (s + e) % 2 === 0 ? 8 : -6,
    n = (r) =>
      e >= 4 &&
      e <= 7 &&
      (Math.abs(s - r - (e - 5.5)) < 0.6 || Math.abs(s - r + (e - 5.5)) < 0.6),
    o = e === 11 + Math.round(((s - 7.5) / 5) ** 2 * -1.5) && s >= 3 && s <= 12,
    a =
      (e === 10 || e === 12) &&
      s >= 4 &&
      s <= 11 &&
      s % 2 === 0 &&
      Math.abs(s - 7.5) < 4;
  return n(4.5) || n(10.5) || o || a
    ? Z(46, 34, 26, 6)(s, e, t)
    : Z(178 + i, 150 + i, 98 + i, 7)(s, e, t);
};
Ne[218] = (s, e, t) => {
  const i = s === 7 || s === 8 ? 26 : s === 6 || s === 9 ? 12 : 0,
    n = (s * 3 + e * 7) % 11 < 2 ? 8 : (s * 5 + e * 3) % 13 < 1 ? -6 : 0,
    o = s === 0 || s === 15 || e === 0 || e === 15 ? -10 : 0,
    a = 58 + i + n + o;
  return Z(a, a + 4, a + 12, 4)(s, e, t);
};
Ne[219] = (s, e, t) => {
  const i = Math.floor(e / 4),
    n = e % 4;
  if (n === 3) return Z(30, 21, 15, 3)(s, e, t);
  if ((s + (i & 1) * 7 + i * 3) % 16 === 15) return Z(36, 25, 18, 3)(s, e, t);
  const a =
      Math.sin(s * 0.55 + i * 2.3 + Math.sin(s * 0.21 + i) * 2) * 6 +
      (n === 0 ? 7 : n === 2 ? -3 : 0),
    r = (s * 7 + i * 13) % 23 < 2 ? 10 : 0;
  return Z(
    74 + a + r,
    52 + a * 0.7 + r * 0.7,
    38 + a * 0.45 + r * 0.4,
    4,
  )(s, e, t);
};
Ne[220] = (s, e, t) => {
  const i = Math.hypot(s - 7.5, e - 7.5),
    n = Math.floor(i) % 2,
    o = Math.abs(s - e) < 0.6 && i < 6 ? -30 : 0;
  return Z(
    (n ? 122 : 104) + o,
    (n ? 114 : 98) + o,
    (n ? 104 : 90) + o,
    6,
  )(s, e, t);
};
Ne[221] = (s, e, t) => {
  const i = (s % 5 === 0 && (e * 3 + s) % 7 < 5) || (s * 11 + e * 3) % 37 === 0,
    n = Math.sin(e * 0.45 + s * 1.7) * 6;
  return i
    ? Z(46, 42, 40, 5)(s, e, t)
    : Z(112 + n, 106 + n, 98 + n, 7)(s, e, t);
};
Ne[222] = (s, e, t) =>
  Math.sin(s * 0.8 + e * 0.35) + Math.sin(e * 1.1 - s * 0.2) > 0.8 ||
  (s * 5 + e * 7) % 13 === 0
    ? Z(78, 118, 56, 14)(s, e, t)
    : Ne[4](s, e, t);
