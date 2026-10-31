// index-Dp6GxvJu 47 — math
// Lines 42757-43099 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
Be[Bn + 6] = (n, e, t) => {
  if (e >= 9 && (n === 7 || n === 8)) return ie(120, 82, 44, 10)(n, e, t);
  if (Math.hypot(n - 7.5, e - 5) < 4.6) {
    const s = t();
    return s < 0.14
      ? [0, 0, 0, 0]
      : [Un(70, 24, s), Un(140, 26, s), Un(52, 18, s), 255];
  }
  return [0, 0, 0, 0];
};
const Ry = (n, e) => (t, i, s) => {
  if (e && t >= 4 && t <= 11 && i >= 4 && i <= 9) return [0, 0, 0, 0];
  const o =
    t === 0 || t === 15 || i === 0 || i === 15 || (!e && (t === 7 || t === 8));
  return (t === 2 || t === 13) && (i === 2 || i === 13)
    ? [35, 40, 44, 255]
    : o
      ? ie(n[0] - 35, n[1] - 35, n[2] - 35, 6)(t, i, s)
      : ie(n[0], n[1], n[2], 8)(t, i, s);
};
Be[Bl] = Ry([125, 138, 148], !1);
Be[Bl + 1] = Ry([125, 138, 148], !0);
Be[Hl] = Ry([76, 88, 98], !1);
Be[Hl + 1] = Ry([76, 88, 98], !0);
Be[uy] = (n, e, t) => {
  const i = n === 0 || e === 0 || n === 15 || e === 15;
  return n >= 3 && n <= 12 && e >= 7 && e <= 12
    ? ie(35, 30, 28, 7)(n, e, t)
    : i
      ? ie(65, 70, 74, 7)(n, e, t)
      : ie(105, 112, 118, 10)(n, e, t);
};
Be[fy] = (n, e, t) => {
  const i = n === 0 || e === 0 || n === 15 || e === 15;
  return n >= 3 && n <= 12 && e >= 7 && e <= 12
    ? e >= 8 && Math.abs(n - 7.5) < (13 - e) * 0.85
      ? ie(255, e < 10 ? 205 : 105, 35, 16)(n, e, t)
      : ie(58, 33, 24, 8)(n, e, t)
    : i
      ? ie(74, 75, 72, 7)(n, e, t)
      : ie(119, 118, 108, 10)(n, e, t);
};
Be[Hi] = (n, e, t) => {
  if (n === 0 || n === 15 || e === 0 || e === 15 || e === 7 || e === 8)
    return ie(102, 67, 36, 7)(n, e, t);
  const i = [
      [155, 47, 42],
      [47, 83, 145],
      [178, 137, 45],
      [68, 116, 58],
    ],
    s = i[(Math.floor(n / 3) + (e > 8 ? 1 : 0)) % i.length];
  return ie(s[0], s[1], s[2], 7)(n, e, t);
};
Be[Hi + 1] = (n, e, t) => {
  const i = n < 2 || n > 13 || e < 2 || e > 13,
    s = n === 4 || n === 11 || e === 5 || e === 10,
    o = Math.max(0, 1 - Math.hypot(n - 7.5, e - 8) / 8);
  return i || s
    ? ie(50, 58, 62, 7)(n, e, t)
    : ie(210 + o * 45, 116 + o * 82, 28 + o * 34, 10)(n, e, t);
};
Be[Hi + 2] = (n, e, t) => {
  const i = n < 3 || n > 12 ? 17 : 0,
    s = (n * 7 + e * 11) % 29 === 0 ? 24 : 0;
  return ie(100 + i + s, 111 + i + s, 120 + i + s, 7)(n, e, t);
};
Be[Hi + 3] = (n, e, t) => {
  const i = e === 7 || e === 8 || n === 0 || n === 15 || e === 0 || e === 15;
  return n >= 6 && n <= 9 && e >= 6 && e <= 10
    ? ie(78, 85, 56, 7)(n, e, t)
    : i
      ? ie(47, 56, 35, 7)(n, e, t)
      : ie(76, 96, 49, 10)(n, e, t);
};
Be[Hi + 4] = (n, e, t) => {
  const i = n === 2 || n === 3 || n === 12 || n === 13,
    s = (n * 3 + e) % 7 === 0;
  return i
    ? ie(156, 114, 24, 7)(n, e, t)
    : ie(s ? 232 : 209, s ? 189 : 157, 39, 11)(n, e, t);
};
Be[Hi + 5] = (n, e, t) => {
  const i = e === 1 || e === 2 || e === 7 || e === 8 || e === 13 || e === 14,
    s = n % 4 === 0;
  return i
    ? ie(63, 66, 62, 7)(n, e, t)
    : ie(s ? 105 : 130, s ? 72 : 88, s ? 39 : 46, 10)(n, e, t);
};
Be[Hi + 6] = (n, e, t) => {
  const i = (n * 3 + e * 7) % 11 === 0 ? 12 : 0;
  return ie(158 + i, 166 + i, 171 + i, 5)(n, e, t);
};
Be[_c] = (n, e, t) => {
  const i = n % 2 === e % 2 ? 5 : -5;
  return ie(105 + i, 112 + i, 77 + i, 4)(n, e, t);
};
Be[Hi + 7] = (n, e, t) =>
  (Math.abs(n - 7.5) < 1.2 && e > 2) ||
  Math.abs(15 - e - Math.abs(n - 7.5) * 2) < 1.2
    ? ie(61, 109, 48, 12)(n, e, t)
    : [0, 0, 0, 0];
const a1 = (n) => (e, t, i) =>
  t >= 7 && Math.abs(e - 7.5) < 1.2
    ? ie(62, 132, 45, 10)(e, t, i)
    : Math.hypot(e - 7.5, t - 5) < 3.7 &&
        !(e >= 7 && e <= 8 && t >= 4 && t <= 6)
      ? ie(n[0], n[1], n[2], 12)(e, t, i)
      : e >= 7 && e <= 8 && t >= 4 && t <= 6
        ? ie(238, 190, 50, 8)(e, t, i)
        : [0, 0, 0, 0];
Be[Hi + 8] = a1([215, 52, 43]);
Be[Hi + 9] = a1([238, 238, 226]);
Be[Hi + 10] = a1([54, 101, 207]);
Be[Hi + 11] = a1([231, 123, 164]);
Be[Hi + 12] = a1([239, 202, 49]);
const r1 = (n, e) => (t, i, s) => {
  const o = (l, c, h) => ie(n[0] + l, n[1] + l * c, n[2] + l * c * c, h);
  if (e === "wood") {
    const l = i >> 2,
      c = i & 3;
    if (c === 3) return o(-38, 0.8, 4)(t, i, s);
    if ((t + l * 5) % 16 === 15) return o(-24, 0.85, 4)(t, i, s);
    const d = Math.sin(t * 1.63 + l * 2.7) * 7 + (c === 0 ? 8 : 0),
      u = Math.hypot(((t + l * 6) % 16) - 4, c - 1.4) < 1.15 ? -26 : 0;
    return o(d + u, 0.74, 6)(t, i, s);
  }
  if (e === "cobble") {
    const l = i >> 2,
      c = (l & 1) * 2,
      h = (t + c) % 5,
      d = i & 3;
    if (d === 3 || h === 4) return o(-20, 1, 4)(t, i, s);
    const u = (Math.floor((t + c) / 5) * 11 + l * 17) % 4;
    return o(u * 6 - 5 + (d === 0 || h === 0 ? 12 : 0), 1, 7)(t, i, s);
  }
  if (e === "brick") {
    const l = i >> 3,
      c = (l & 1) * 4;
    if (i % 8 === 7 || (t + c) % 8 === 7) return o(-18, 1, 4)(t, i, s);
    const d = (Math.floor((t + c) / 8) + l * 3) % 3;
    return o(d * 5 - 3 + (i % 8 === 0 ? 10 : 0), 1, 6)(t, i, s);
  }
  if (e === "sand") {
    const l = i % 6,
      c = l === 5 ? -22 : l === 0 ? 12 : Math.sin(t * 0.7 + i) * 4;
    return o(c, 0.97, 7)(t, i, s);
  }
  const a =
      Math.sin(t * 1.19 - i * 0.73) * 5 + Math.sin(i * 0.51 + t * 0.31) * 4,
    r =
      Math.abs(Math.sin(t * 0.41 + i * 0.62 + Math.sin(i * 0.23))) < 0.06
        ? -22
        : 0;
  return o(a + r, 1, 5)(t, i, s);
};
Be[nn] = r1([168, 122, 67], "wood");
Be[nn + 1] = r1([132, 132, 128], "cobble");
Be[nn + 2] = r1([143, 145, 146], "stone");
Be[nn + 3] = r1([137, 139, 136], "brick");
Be[nn + 4] = r1([215, 194, 139], "sand");
Be[py] = (n, e, t) => {
  const i = n === 0 || e === 0 || n === 15 || e === 15,
    s = n >= 4 && n <= 11 && e >= 4 && e <= 11;
  return i
    ? ie(62, 67, 70, 6)(n, e, t)
    : s
      ? ie(88, 94, 98, 7)(n, e, t)
      : ie(112, 118, 121, 9)(n, e, t);
};
Be[my] = (n, e, t) =>
  (n < 3 || n > 12) && (e < 3 || e > 12)
    ? ie(46, 50, 52, 6)(n, e, t)
    : ie(75, 80, 82, 10)(n, e, t);
const Cy = (n, e) => (t, i, s) => {
    const o = Math.hypot(t - 7.5, i - 7.5),
      a = Math.floor(o) % 2 ? e : n;
    return ie(a[0], a[1], a[2], 7)(t, i, s);
  },
  QS = (n) => (e, t, i) => {
    const s = e % 4 === 0 ? -24 : e % 4 === 2 ? 11 : 0;
    return ie(n[0] + s, n[1] + s * 0.7, n[2] + s * 0.45, 8)(e, t, i);
  },
  ky = (n) => (e, t, i) => {
    const s = Math.sin(e * 0.83 + t * 0.47) + Math.sin(t * 1.09 - e * 0.31);
    if ((e * 7 + t * 13) % 37 < 4 && s < 0.45) return [0, 0, 0, 0];
    const o = i(),
      a = s * 7;
    return [
      Un(n[0] + a, 13, o),
      Un(n[1] + a, 14, o),
      Un(n[2] + a * 0.6, 11, o),
      255,
    ];
  },
  lW = (n, e, t) => {
    const i = Math.sin(n * 0.92 + Math.sin(e * 0.22) * 1.8) * 10,
      s = Math.sin(e * 0.56 + n * 0.12) * 6,
      o = (n * 11 + e * 7) % 43 < 3 ? -30 : 0,
      a = (n * 5 + e * 3) % 61 < 2 && e > 2 ? 18 : 0,
      r = t();
    return [
      Un(92 + i + s + o + a, 9, r),
      Un(51 + i * 0.55 + s * 0.45 + o * 0.35 + a * 0.9, 8, r),
      Un(28 + i * 0.28 + s * 0.2 + o * 0.18 + a * 0.2, 6, r),
      255,
    ];
  },
  cW = (n, e, t) => {
    const i = Math.sin(n * 0.72 + e * 0.41) + Math.sin(e * 1.18 - n * 0.28);
    if (
      ((n * 7 + e * 13) % 41 < 5 && i < 0.8) ||
      ((n * 3 + e * 5) % 53 === 9 && t() < 0.65)
    )
      return [0, 0, 0, 0];
    const o = (n + e * 2) % 17 === 4,
      a = i * 8 + (o ? 18 : 0),
      r = t();
    return [
      Un(26 + a, 11, r),
      Un(112 + a * 1.15, 15, r),
      Un(43 + a * 0.58, 10, r),
      255,
    ];
  };
Be[Bt] = Cy([178, 122, 73], [126, 77, 43]);
Be[Bt + 1] = lW;
Be[Bt + 2] = cW;
Be[Bt + 3] = Cy([185, 126, 73], [132, 82, 43]);
Be[Bt + 4] = QS([151, 92, 52]);
Be[Bt + 5] = ky([117, 148, 55]);
Be[Bt + 6] = Cy([132, 91, 58], [83, 55, 37]);
Be[Bt + 7] = QS([91, 61, 42]);
Be[Bt + 8] = ky([40, 108, 74]);
Be[Bt + 9] = Cy([164, 119, 104], [105, 71, 61]);
Be[Bt + 10] = QS([116, 76, 65]);
Be[Bt + 11] = ky([231, 137, 183]);
const l1 = (n) => (e, t, i) => {
  const s = Math.abs(e - 7.5) < 1 && t > 6,
    o = Math.hypot(e - 7.5, t - 6) < 4.2;
  return s ? ie(112, 78, 43, 8)(e, t, i) : o ? ky(n)(e, t, i) : [0, 0, 0, 0];
};
Be[Bt + 12] = l1([39, 151, 71]);
Be[Bt + 13] = l1([122, 148, 63]);
Be[Bt + 14] = l1([39, 101, 70]);
Be[Bt + 15] = l1([228, 126, 174]);
Be[Bt + 16] = (n, e, t) => {
  const i = n / 15,
    s = Math.pow(1 - i, 2.2),
    o = (n * 5 + e) % 7 === 0 ? -10 : 0;
  if (n >= 13 && (e + (n === 15 ? 1 : 0)) % 5 === 1)
    return ie(214, 206, 168, 8)(n, e, t);
  const a = 62 + i * 38 - s * 30 + o,
    r = 128 + i * 46 - s * 50 + o,
    l = 58 + i * 14 - s * 18;
  return ie(a + (n === 14 ? 14 : 0), r + (n === 14 ? 18 : 0), l, 7)(n, e, t);
};
Be[aw] = (n, e, t) => {
  const i = n - 7.5,
    s = e - 7.5,
    o = Math.hypot(i, s);
  if (o < 1.6) return ie(196, 178, 140, 10)(n, e, t);
  const a = Math.atan2(s, i),
    r = (a / (Math.PI * 2)) * 9;
  return Math.abs(r - Math.round(r)) < 0.11 + 0.25 / Math.max(1, o) && o < 7.6
    ? ie(238, 230, 204, 10)(n, e, t)
    : [0, 0, 0, 0];
};
Be[T2] = (n, e, t) => {
  const i = n - 7.5,
    s = e - 7.5,
    o = Math.hypot(i, s),
    a = Math.atan2(s, i);
  if (o < 2.1) return ie(250, 206, 72, 14)(n, e, t);
  const r = 5.4 + Math.cos(a * 7) * 1.6;
  return o < r
    ? o < r - 1.3
      ? ie(236, 74, 152, 12)(n, e, t)
      : ie(178, 38, 108, 10)(n, e, t)
    : [0, 0, 0, 0];
};
Be[Bt + 17] = (n, e, t) => {
  const i =
      Math.sin(n * 0.55 + Math.sin(e * 0.42) * 2.1) +
      Math.sin(e * 0.68 - n * 0.21) * 0.85,
    s = Math.abs(i);
  if (s < 0.22) return ie(255, 236, 150, 12)(n, e, t);
  if (s < 0.55) return ie(252, 158, 34, 16)(n, e, t);
  if (s < 0.95) return ie(206, 78, 14, 14)(n, e, t);
  const o = (n * 7 + e * 13) % 19 < 3 ? 18 : 0;
  return ie(96 + o, 30 + o, 12 + o, 10)(n, e, t);
};
Be[Bt + 18] = (n, e, t) => {
  const i =
      n < 5
        ? 5 - Math.floor(n / 2)
        : n > 11
          ? 3 + Math.floor((n - 11) / 2)
          : 1 + Math.abs(n - 8) * 0.45,
    s = e < 7 ? Math.max(0, 5 - e) : 0;
  if (e < i || n < s || n > 15 - s) return [0, 0, 0, 0];
  const o = n <= s + 1 || n >= 14 - s || e <= i + 1;
  return e > 8 && n > 4 && n < 12 && (n + e) % 5 !== 0
    ? ie(255, 218, 55, 12)(n, e, t)
    : o
      ? ie(215, 59, 13, 15)(n, e, t)
      : ie(255, 112, 16, 18)(n, e, t);
};
Be[Bt + 19] = (n, e, t) => {
  const i = [2, 6, 10, 14],
    s = [3, 1, 4, 2];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = s[o],
      l =
        e >= r &&
        e <= r + 4 &&
        Math.abs(n - a) <= (e === r || e === r + 4 ? 0 : 1),
      c = e === r - 1 && Math.abs(n - a) === 1,
      h = n === a && e > r + 4,
      d =
        e >= 10 &&
        e <= 14 &&
        (n === a - Math.round((15 - e) * 0.45) ||
          n === a + Math.round((15 - e) * 0.35));
    if (l || c) return ie(224, 181, 54, 17)(n, e, t);
    if (h || d) return ie(194, 151, 42, 13)(n, e, t);
  }
  return [0, 0, 0, 0];
};
Be[Bt + 20] = (n, e, t) => {
  const i = [3, 8, 13],
    s = [7, 9, 6];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = 15 - e;
    if (r < 0 || r > s[o]) continue;
    const l = a - Math.round(r * (o === 1 ? 0.22 : 0.34)),
      c = a + Math.round(r * (o === 1 ? 0.35 : 0.22));
    if (n === a || n === l || n === c) return ie(82, 163, 61, 15)(n, e, t);
  }
  return [0, 0, 0, 0];
};
