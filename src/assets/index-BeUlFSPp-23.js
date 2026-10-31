// index-BeUlFSPp 23 — math
// Lines 32777-33119 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Ne[$s + 6] = (s, e, t) => {
  if (e >= 9 && (s === 7 || s === 8)) return Z(120, 82, 44, 10)(s, e, t);
  if (Math.hypot(s - 7.5, e - 5) < 4.6) {
    const n = t();
    return n < 0.14
      ? [0, 0, 0, 0]
      : [Ys(70, 24, n), Ys(140, 26, n), Ys(52, 18, n), 255];
  }
  return [0, 0, 0, 0];
};
const _5 = (s, e) => (t, i, n) => {
  if (e && t >= 4 && t <= 11 && i >= 4 && i <= 9) return [0, 0, 0, 0];
  const o =
    t === 0 || t === 15 || i === 0 || i === 15 || (!e && (t === 7 || t === 8));
  return (t === 2 || t === 13) && (i === 2 || i === 13)
    ? [35, 40, 44, 255]
    : o
      ? Z(s[0] - 35, s[1] - 35, s[2] - 35, 6)(t, i, n)
      : Z(s[0], s[1], s[2], 8)(t, i, n);
};
Ne[xc] = _5([125, 138, 148], !1);
Ne[xc + 1] = _5([125, 138, 148], !0);
Ne[_c] = _5([76, 88, 98], !1);
Ne[_c + 1] = _5([76, 88, 98], !0);
Ne[m5] = (s, e, t) => {
  const i = s === 0 || e === 0 || s === 15 || e === 15;
  return s >= 3 && s <= 12 && e >= 7 && e <= 12
    ? Z(35, 30, 28, 7)(s, e, t)
    : i
      ? Z(65, 70, 74, 7)(s, e, t)
      : Z(105, 112, 118, 10)(s, e, t);
};
Ne[g5] = (s, e, t) => {
  const i = s === 0 || e === 0 || s === 15 || e === 15;
  return s >= 3 && s <= 12 && e >= 7 && e <= 12
    ? e >= 8 && Math.abs(s - 7.5) < (13 - e) * 0.85
      ? Z(255, e < 10 ? 205 : 105, 35, 16)(s, e, t)
      : Z(58, 33, 24, 8)(s, e, t)
    : i
      ? Z(74, 75, 72, 7)(s, e, t)
      : Z(119, 118, 108, 10)(s, e, t);
};
Ne[Ki] = (s, e, t) => {
  if (s === 0 || s === 15 || e === 0 || e === 15 || e === 7 || e === 8)
    return Z(102, 67, 36, 7)(s, e, t);
  const i = [
      [155, 47, 42],
      [47, 83, 145],
      [178, 137, 45],
      [68, 116, 58],
    ],
    n = i[(Math.floor(s / 3) + (e > 8 ? 1 : 0)) % i.length];
  return Z(n[0], n[1], n[2], 7)(s, e, t);
};
Ne[Ki + 1] = (s, e, t) => {
  const i = s < 2 || s > 13 || e < 2 || e > 13,
    n = s === 4 || s === 11 || e === 5 || e === 10,
    o = Math.max(0, 1 - Math.hypot(s - 7.5, e - 8) / 8);
  return i || n
    ? Z(50, 58, 62, 7)(s, e, t)
    : Z(210 + o * 45, 116 + o * 82, 28 + o * 34, 10)(s, e, t);
};
Ne[Ki + 2] = (s, e, t) => {
  const i = s < 3 || s > 12 ? 17 : 0,
    n = (s * 7 + e * 11) % 29 === 0 ? 24 : 0;
  return Z(100 + i + n, 111 + i + n, 120 + i + n, 7)(s, e, t);
};
Ne[Ki + 3] = (s, e, t) => {
  const i = e === 7 || e === 8 || s === 0 || s === 15 || e === 0 || e === 15;
  return s >= 6 && s <= 9 && e >= 6 && e <= 10
    ? Z(78, 85, 56, 7)(s, e, t)
    : i
      ? Z(47, 56, 35, 7)(s, e, t)
      : Z(76, 96, 49, 10)(s, e, t);
};
Ne[Ki + 4] = (s, e, t) => {
  const i = s === 2 || s === 3 || s === 12 || s === 13,
    n = (s * 3 + e) % 7 === 0;
  return i
    ? Z(156, 114, 24, 7)(s, e, t)
    : Z(n ? 232 : 209, n ? 189 : 157, 39, 11)(s, e, t);
};
Ne[Ki + 5] = (s, e, t) => {
  const i = e === 1 || e === 2 || e === 7 || e === 8 || e === 13 || e === 14,
    n = s % 4 === 0;
  return i
    ? Z(63, 66, 62, 7)(s, e, t)
    : Z(n ? 105 : 130, n ? 72 : 88, n ? 39 : 46, 10)(s, e, t);
};
Ne[Ki + 6] = (s, e, t) => {
  const i = (s * 3 + e * 7) % 11 === 0 ? 12 : 0;
  return Z(158 + i, 166 + i, 171 + i, 5)(s, e, t);
};
Ne[y0] = (s, e, t) => {
  const i = s % 2 === e % 2 ? 5 : -5;
  return Z(105 + i, 112 + i, 77 + i, 4)(s, e, t);
};
Ne[Ki + 7] = (s, e, t) =>
  (Math.abs(s - 7.5) < 1.2 && e > 2) ||
  Math.abs(15 - e - Math.abs(s - 7.5) * 2) < 1.2
    ? Z(61, 109, 48, 12)(s, e, t)
    : [0, 0, 0, 0];
const Um = (s) => (e, t, i) =>
  t >= 7 && Math.abs(e - 7.5) < 1.2
    ? Z(62, 132, 45, 10)(e, t, i)
    : Math.hypot(e - 7.5, t - 5) < 3.7 &&
        !(e >= 7 && e <= 8 && t >= 4 && t <= 6)
      ? Z(s[0], s[1], s[2], 12)(e, t, i)
      : e >= 7 && e <= 8 && t >= 4 && t <= 6
        ? Z(238, 190, 50, 8)(e, t, i)
        : [0, 0, 0, 0];
Ne[Ki + 8] = Um([215, 52, 43]);
Ne[Ki + 9] = Um([238, 238, 226]);
Ne[Ki + 10] = Um([54, 101, 207]);
Ne[Ki + 11] = Um([231, 123, 164]);
Ne[Ki + 12] = Um([239, 202, 49]);
const Gm = (s, e) => (t, i, n) => {
  const o = (l, c, h) => Z(s[0] + l, s[1] + l * c, s[2] + l * c * c, h);
  if (e === "wood") {
    const l = i >> 2,
      c = i & 3;
    if (c === 3) return o(-38, 0.8, 4)(t, i, n);
    if ((t + l * 5) % 16 === 15) return o(-24, 0.85, 4)(t, i, n);
    const d = Math.sin(t * 1.63 + l * 2.7) * 7 + (c === 0 ? 8 : 0),
      u = Math.hypot(((t + l * 6) % 16) - 4, c - 1.4) < 1.15 ? -26 : 0;
    return o(d + u, 0.74, 6)(t, i, n);
  }
  if (e === "cobble") {
    const l = i >> 2,
      c = (l & 1) * 2,
      h = (t + c) % 5,
      d = i & 3;
    if (d === 3 || h === 4) return o(-20, 1, 4)(t, i, n);
    const u = (Math.floor((t + c) / 5) * 11 + l * 17) % 4;
    return o(u * 6 - 5 + (d === 0 || h === 0 ? 12 : 0), 1, 7)(t, i, n);
  }
  if (e === "brick") {
    const l = i >> 3,
      c = (l & 1) * 4;
    if (i % 8 === 7 || (t + c) % 8 === 7) return o(-18, 1, 4)(t, i, n);
    const d = (Math.floor((t + c) / 8) + l * 3) % 3;
    return o(d * 5 - 3 + (i % 8 === 0 ? 10 : 0), 1, 6)(t, i, n);
  }
  if (e === "sand") {
    const l = i % 6,
      c = l === 5 ? -22 : l === 0 ? 12 : Math.sin(t * 0.7 + i) * 4;
    return o(c, 0.97, 7)(t, i, n);
  }
  const a =
      Math.sin(t * 1.19 - i * 0.73) * 5 + Math.sin(i * 0.51 + t * 0.31) * 4,
    r =
      Math.abs(Math.sin(t * 0.41 + i * 0.62 + Math.sin(i * 0.23))) < 0.06
        ? -22
        : 0;
  return o(a + r, 1, 5)(t, i, n);
};
Ne[fs] = Gm([168, 122, 67], "wood");
Ne[fs + 1] = Gm([132, 132, 128], "cobble");
Ne[fs + 2] = Gm([143, 145, 146], "stone");
Ne[fs + 3] = Gm([137, 139, 136], "brick");
Ne[fs + 4] = Gm([215, 194, 139], "sand");
Ne[y5] = (s, e, t) => {
  const i = s === 0 || e === 0 || s === 15 || e === 15,
    n = s >= 4 && s <= 11 && e >= 4 && e <= 11;
  return i
    ? Z(62, 67, 70, 6)(s, e, t)
    : n
      ? Z(88, 94, 98, 7)(s, e, t)
      : Z(112, 118, 121, 9)(s, e, t);
};
Ne[v5] = (s, e, t) =>
  (s < 3 || s > 12) && (e < 3 || e > 12)
    ? Z(46, 50, 52, 6)(s, e, t)
    : Z(75, 80, 82, 10)(s, e, t);
const R5 = (s, e) => (t, i, n) => {
    const o = Math.hypot(t - 7.5, i - 7.5),
      a = Math.floor(o) % 2 ? e : s;
    return Z(a[0], a[1], a[2], 7)(t, i, n);
  },
  bA = (s) => (e, t, i) => {
    const n = e % 4 === 0 ? -24 : e % 4 === 2 ? 11 : 0;
    return Z(s[0] + n, s[1] + n * 0.7, s[2] + n * 0.45, 8)(e, t, i);
  },
  k5 = (s) => (e, t, i) => {
    const n = Math.sin(e * 0.83 + t * 0.47) + Math.sin(t * 1.09 - e * 0.31);
    if ((e * 7 + t * 13) % 37 < 4 && n < 0.45) return [0, 0, 0, 0];
    const o = i(),
      a = n * 7;
    return [
      Ys(s[0] + a, 13, o),
      Ys(s[1] + a, 14, o),
      Ys(s[2] + a * 0.6, 11, o),
      255,
    ];
  },
  _$ = (s, e, t) => {
    const i = Math.sin(s * 0.92 + Math.sin(e * 0.22) * 1.8) * 10,
      n = Math.sin(e * 0.56 + s * 0.12) * 6,
      o = (s * 11 + e * 7) % 43 < 3 ? -30 : 0,
      a = (s * 5 + e * 3) % 61 < 2 && e > 2 ? 18 : 0,
      r = t();
    return [
      Ys(92 + i + n + o + a, 9, r),
      Ys(51 + i * 0.55 + n * 0.45 + o * 0.35 + a * 0.9, 8, r),
      Ys(28 + i * 0.28 + n * 0.2 + o * 0.18 + a * 0.2, 6, r),
      255,
    ];
  },
  R$ = (s, e, t) => {
    const i = Math.sin(s * 0.72 + e * 0.41) + Math.sin(e * 1.18 - s * 0.28);
    if (
      ((s * 7 + e * 13) % 41 < 5 && i < 0.8) ||
      ((s * 3 + e * 5) % 53 === 9 && t() < 0.65)
    )
      return [0, 0, 0, 0];
    const o = (s + e * 2) % 17 === 4,
      a = i * 8 + (o ? 18 : 0),
      r = t();
    return [
      Ys(26 + a, 11, r),
      Ys(112 + a * 1.15, 15, r),
      Ys(43 + a * 0.58, 10, r),
      255,
    ];
  };
Ne[zt] = R5([178, 122, 73], [126, 77, 43]);
Ne[zt + 1] = _$;
Ne[zt + 2] = R$;
Ne[zt + 3] = R5([185, 126, 73], [132, 82, 43]);
Ne[zt + 4] = bA([151, 92, 52]);
Ne[zt + 5] = k5([117, 148, 55]);
Ne[zt + 6] = R5([132, 91, 58], [83, 55, 37]);
Ne[zt + 7] = bA([91, 61, 42]);
Ne[zt + 8] = k5([40, 108, 74]);
Ne[zt + 9] = R5([164, 119, 104], [105, 71, 61]);
Ne[zt + 10] = bA([116, 76, 65]);
Ne[zt + 11] = k5([231, 137, 183]);
const Wm = (s) => (e, t, i) => {
  const n = Math.abs(e - 7.5) < 1 && t > 6,
    o = Math.hypot(e - 7.5, t - 6) < 4.2;
  return n ? Z(112, 78, 43, 8)(e, t, i) : o ? k5(s)(e, t, i) : [0, 0, 0, 0];
};
Ne[zt + 12] = Wm([39, 151, 71]);
Ne[zt + 13] = Wm([122, 148, 63]);
Ne[zt + 14] = Wm([39, 101, 70]);
Ne[zt + 15] = Wm([228, 126, 174]);
Ne[zt + 16] = (s, e, t) => {
  const i = s / 15,
    n = Math.pow(1 - i, 2.2),
    o = (s * 5 + e) % 7 === 0 ? -10 : 0;
  if (s >= 13 && (e + (s === 15 ? 1 : 0)) % 5 === 1)
    return Z(214, 206, 168, 8)(s, e, t);
  const a = 62 + i * 38 - n * 30 + o,
    r = 128 + i * 46 - n * 50 + o,
    l = 58 + i * 14 - n * 18;
  return Z(a + (s === 14 ? 14 : 0), r + (s === 14 ? 18 : 0), l, 7)(s, e, t);
};
Ne[TS] = (s, e, t) => {
  const i = s - 7.5,
    n = e - 7.5,
    o = Math.hypot(i, n);
  if (o < 1.6) return Z(196, 178, 140, 10)(s, e, t);
  const a = Math.atan2(n, i),
    r = (a / (Math.PI * 2)) * 9;
  return Math.abs(r - Math.round(r)) < 0.11 + 0.25 / Math.max(1, o) && o < 7.6
    ? Z(238, 230, 204, 10)(s, e, t)
    : [0, 0, 0, 0];
};
Ne[dy] = (s, e, t) => {
  const i = s - 7.5,
    n = e - 7.5,
    o = Math.hypot(i, n),
    a = Math.atan2(n, i);
  if (o < 2.1) return Z(250, 206, 72, 14)(s, e, t);
  const r = 5.4 + Math.cos(a * 7) * 1.6;
  return o < r
    ? o < r - 1.3
      ? Z(236, 74, 152, 12)(s, e, t)
      : Z(178, 38, 108, 10)(s, e, t)
    : [0, 0, 0, 0];
};
Ne[zt + 17] = (s, e, t) => {
  const i =
      Math.sin(s * 0.55 + Math.sin(e * 0.42) * 2.1) +
      Math.sin(e * 0.68 - s * 0.21) * 0.85,
    n = Math.abs(i);
  if (n < 0.22) return Z(255, 236, 150, 12)(s, e, t);
  if (n < 0.55) return Z(252, 158, 34, 16)(s, e, t);
  if (n < 0.95) return Z(206, 78, 14, 14)(s, e, t);
  const o = (s * 7 + e * 13) % 19 < 3 ? 18 : 0;
  return Z(96 + o, 30 + o, 12 + o, 10)(s, e, t);
};
Ne[zt + 18] = (s, e, t) => {
  const i =
      s < 5
        ? 5 - Math.floor(s / 2)
        : s > 11
          ? 3 + Math.floor((s - 11) / 2)
          : 1 + Math.abs(s - 8) * 0.45,
    n = e < 7 ? Math.max(0, 5 - e) : 0;
  if (e < i || s < n || s > 15 - n) return [0, 0, 0, 0];
  const o = s <= n + 1 || s >= 14 - n || e <= i + 1;
  return e > 8 && s > 4 && s < 12 && (s + e) % 5 !== 0
    ? Z(255, 218, 55, 12)(s, e, t)
    : o
      ? Z(215, 59, 13, 15)(s, e, t)
      : Z(255, 112, 16, 18)(s, e, t);
};
Ne[zt + 19] = (s, e, t) => {
  const i = [2, 6, 10, 14],
    n = [3, 1, 4, 2];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = n[o],
      l =
        e >= r &&
        e <= r + 4 &&
        Math.abs(s - a) <= (e === r || e === r + 4 ? 0 : 1),
      c = e === r - 1 && Math.abs(s - a) === 1,
      h = s === a && e > r + 4,
      d =
        e >= 10 &&
        e <= 14 &&
        (s === a - Math.round((15 - e) * 0.45) ||
          s === a + Math.round((15 - e) * 0.35));
    if (l || c) return Z(224, 181, 54, 17)(s, e, t);
    if (h || d) return Z(194, 151, 42, 13)(s, e, t);
  }
  return [0, 0, 0, 0];
};
Ne[zt + 20] = (s, e, t) => {
  const i = [3, 8, 13],
    n = [7, 9, 6];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = 15 - e;
    if (r < 0 || r > n[o]) continue;
    const l = a - Math.round(r * (o === 1 ? 0.22 : 0.34)),
      c = a + Math.round(r * (o === 1 ? 0.35 : 0.22));
    if (s === a || s === l || s === c) return Z(82, 163, 61, 15)(s, e, t);
  }
  return [0, 0, 0, 0];
};
