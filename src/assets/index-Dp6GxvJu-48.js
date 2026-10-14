// index-Dp6GxvJu 48 — math
// Lines 43100-43442 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
Be[Bt + 21] = (n, e, t) => {
  const i = [2, 6, 10, 14],
    s = [6, 4, 7, 5];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = s[o],
      l = n === a && e >= r,
      c = e >= r + 4 && e <= 13 && n === a - Math.round((14 - e) * 0.45),
      h = e >= r + 6 && e <= 14 && n === a + Math.round((15 - e) * 0.42),
      d = e === r && (n === a || n === a + (o % 2 ? 1 : -1));
    if (l || c || h || d) return ie(139, 178, 65, 16)(n, e, t);
  }
  return [0, 0, 0, 0];
};
Be[as] = (n, e, t) => {
  const i = [3, 9, 13],
    s = [6, 8, 5];
  for (let o = 0; o < i.length; o++) {
    const a = i[o],
      r = 15 - e;
    if (r < 0 || r > s[o]) continue;
    const l = Math.round(r * (o === 1 ? 0.3 : 0.45)) * (o === 2 ? -1 : 1);
    if (n === a + l || (r > 2 && n === a + Math.round(l * 0.4)))
      return ie(186, 168, 96, 16)(n, e, t);
  }
  return [0, 0, 0, 0];
};
Be[as + 1] = (n, e, t) => {
  const i = e % 4 === 0 ? -18 : e % 4 === 3 ? 8 : 0,
    s = Math.sin(n * 1.4 + e * 0.7) * 5;
  return ie(104 + i + s, 72 + i + s, 42 + i * 0.6 + s, 11)(n, e, t);
};
Be[as + 2] = (n, e, t) =>
  e < 4 ? ie(102 + Math.sin(n * 1.3) * 5, 70, 41, 10)(n, e, t) : Be[2](n, e, t);
const Eu = (n, e, t) => (i, s, o) => {
  const a = [3, 8, 13];
  for (const r of a) {
    if (i === r && s >= t) return ie(n[0], n[1], n[2], 14)(i, s, o);
    const l = Math.round((15 - s) * 0.35);
    if (s >= t + 2 && l > 0 && (i === r - l || i === r + l))
      return ie(n[0] - 12, n[1] - 8, n[2] - 6, 12)(i, s, o);
    if (e && s >= 12 && Math.abs(i - r) <= 1)
      return ie(e[0], e[1], e[2], 15)(i, s, o);
  }
  return [0, 0, 0, 0];
};
Be[as + 3] = Eu([104, 152, 68], null, 11);
Be[as + 4] = Eu([92, 148, 62], null, 7);
Be[as + 5] = Eu([74, 136, 56], [176, 142, 84], 4);
Be[as + 6] = Eu([116, 158, 74], null, 11);
Be[as + 7] = Eu([104, 156, 64], null, 7);
Be[as + 8] = Eu([88, 146, 58], [224, 123, 40], 4);
const hW = [
    [
      [8, 4, 2.2, 1.8, 0],
      [5, 8, 2.6, 1.7, 0.25],
      [11, 9, 2.6, 1.7, -0.25],
      [8, 12, 2.1, 1.5, 0],
    ],
    [
      [4, 5, 3, 2, 0.2],
      [8, 4, 3, 2.2, 0],
      [12, 5, 3, 2, -0.2],
      [4, 9, 3, 2.1, -0.2],
      [8, 8, 3.4, 2.3, 0],
      [12, 9, 3, 2.1, 0.2],
      [8, 12, 3, 1.9, 0],
    ],
    [
      [4, 4, 3.1, 2.3, 0.15],
      [8, 3, 3.3, 2.4, 0],
      [12, 4, 3.1, 2.3, -0.15],
      [3.4, 8, 3, 2.5, -0.15],
      [8, 7, 3.5, 2.6, 0],
      [12.6, 8, 3, 2.5, 0.15],
      [4, 11, 3.2, 2.2, 0.2],
      [8, 12, 3.3, 2.1, 0],
      [12, 11, 3.2, 2.2, -0.2],
    ],
  ],
  dW = [
    [
      [6, 5, 2.6, 2.2, 0.2],
      [10, 6, 2.6, 2.2, -0.2],
      [6, 10, 2.6, 2.2, -0.2],
      [10, 10, 2.6, 2.2, 0.2],
    ],
    [
      [5, 4, 3, 2.2, 0.2],
      [10, 4, 3, 2.2, -0.2],
      [12, 8, 2.5, 3, 0],
      [10, 12, 3, 2.2, 0.2],
      [5, 12, 3, 2.2, -0.2],
      [4, 8, 2.5, 3, 0],
      [8, 8, 3, 3, 0],
    ],
    [
      [4, 4, 3, 2.4, 0.2],
      [8, 3, 3, 2.5, 0],
      [12, 4, 3, 2.4, -0.2],
      [13, 8, 2.4, 3, 0],
      [12, 12, 3, 2.4, 0.2],
      [8, 13, 3, 2.5, 0],
      [4, 12, 3, 2.4, -0.2],
      [3, 8, 2.4, 3, 0],
      [8, 8, 3.5, 3.5, 0],
    ],
  ],
  BT = (n, e, t, i) => {
    const s = (i ? dW : hW)[t],
      o = i
        ? [
            [5, 5],
            [11, 5],
            [5, 11],
            [11, 11],
            [8, 8],
          ]
        : [
            [4, 6],
            [11, 5],
            [5, 11],
            [12, 10],
            [8, 8],
          ];
    return (a, r, l) => {
      if (t === 2)
        for (const [u, f] of o) {
          const p = Math.hypot(a - u, r - f);
          if (p > 1.55) continue;
          const m = p > 1.1 ? -36 : a < u && r < f ? 48 : 0;
          return [
            Un(e[0] + m, 5, l()),
            Un(e[1] + m, 5, l()),
            Un(e[2] + m, 5, l()),
            255,
          ];
        }
      let c = 1 / 0,
        h,
        d = 0;
      if (
        (s.forEach((u, f) => {
          const [p, m, y, g, b] = u,
            S = a - p,
            M = r - m,
            x = ((S + M * b) / y) ** 2 + (M / g) ** 2,
            T = (a * 17 + r * 11 + f * 5) % 19 === 0 ? 0.16 : 0;
          x < 1 - T && x < c && ((c = x), (h = u), (d = f));
        }),
        h)
      ) {
        const [u, f] = h,
          p = Math.sqrt(c) > 0.82,
          m = !i && Math.abs(r - f - (a - u) * 0.3) < 0.42 && c < 0.62,
          y =
            (a < u ? 10 : -4) +
            (r < f ? 8 : -5) +
            ((d % 3) - 1) * 5 +
            (m ? 19 : 0) -
            (p ? 23 : 0);
        return [
          Un(n[0] + y, 5, l()),
          Un(n[1] + y, 6, l()),
          Un(n[2] + y * 0.8, 5, l()),
          255,
        ];
      }
      return !i && a === 8 && r >= 8 && r <= 14
        ? ie(83, 79, 44, 6)(a, r, l)
        : [0, 0, 0, 0];
    };
  };
tc.forEach((n, e) => {
  const t = e === 0 ? [74, 129, 56] : e === 1 ? [57, 112, 88] : [55, 104, 61],
    i = [(n.color >> 16) & 255, (n.color >> 8) & 255, n.color & 255];
  for (let s = 0; s < 3; s++) {
    const o = s === 0 ? 16 : s === 1 ? 8 : 0,
      a = [t[0] + o, t[1] + o, t[2] + o * 0.7];
    ((Be[lg + e * 3 + s] = BT(a, i, s, !1)),
      (Be[kS + e * 3 + s] = BT(a, i, s, !0)));
  }
});
Be[Wc] = (n, e, t) => {
  if (n === 0 || e === 0 || n === Ll - 1 || e === Ll - 1)
    return ie(214, 176, 140, 8)(n, e, t);
  const s = (n * 7 + e * 5) % 23;
  return s === 0
    ? ie(226, 78, 96, 10)(n, e, t)
    : s === 7
      ? ie(96, 168, 226, 10)(n, e, t)
      : s === 13
        ? ie(240, 206, 74, 10)(n, e, t)
        : ie(246, 242, 236, 7)(n, e, t);
};
Be[Wc + 1] = (n, e, t) => {
  if (e < 3) return ie(244, 240, 232, 7)(n, e, t);
  if (e >= 7 && e <= 9) return ie(236, 148, 160, 9)(n, e, t);
  const i = Math.sin(n * 1.7 + e * 2.3) * 6;
  return ie(208 + i, 158 + i, 112 + i, 10)(n, e, t);
};
Be[Wc + 2] = (n, e, t) => {
  if (e >= 7 && e <= 9) return ie(236, 148, 160, 9)(n, e, t);
  const i = Math.sin(n * 2.1 + e * 1.9) * 7;
  return ie(214 + i, 166 + i, 118 + i, 12)(n, e, t);
};
Be[qo] = (n, e, t) => {
  const i = Math.sin(e * 0.3) * 1.3 + Math.sin(e * 0.14 + 1.3) * 0.9,
    s = n - (7.5 + i),
    o = 3.1 + Math.sin(e * 0.55) * 0.6;
  if (Math.abs(s) > o) return [0, 0, 0, 0];
  const a = Math.abs(s) < 0.9 ? -22 : 0,
    r = Math.abs(s) > o - 1 ? 16 : 0;
  return ie(38 + a + r, 116 + a * 0.6 + r, 66 + a + r * 0.4, 10)(n, e, t);
};
Be[qo + 1] = (n, e, t) => {
  for (const [i, s, o] of [
    [4, -1.9, 3],
    [7.5, 0.4, 1],
    [11, 1.7, 4],
  ]) {
    if (e < o) continue;
    const a = i + s * ((15 - e) / 15) * 2.4;
    if (Math.abs(n - a) > 0.95) continue;
    const r = (15 - e) / 15;
    return ie(52 + r * 26, 138 + r * 34, 78 + r * 18, 12)(n, e, t);
  }
  return [0, 0, 0, 0];
};
const JS = (n) => (e, t, i) => {
  const s = (o, a, r, l) => ie(n[0] * o, n[1] * o, n[2] * o, 14)(a, r, l);
  if (Math.abs(e - 7.5) <= 1.4 && t >= 8) return s(0.78, e, t, i);
  for (const o of [-1, 1]) {
    const a = 7.5 + o * (2.2 + (11 - Math.min(t, 11)) * 0.62);
    if (t <= 11 && t >= 2 && Math.abs(e - a) <= 1.25)
      return s(t < 4 ? 1.18 : 0.95, e, t, i);
  }
  for (const [o, a] of [
    [7.5, 6.5],
    [2.6, 2.6],
    [12.4, 2.6],
  ])
    if (Math.hypot(e - o, t - a) < 2.2) return s(1.22, e, t, i);
  return [0, 0, 0, 0];
};
Be[qo + 2] = JS([228, 98, 155]);
Be[qo + 3] = JS([63, 127, 224]);
Be[qo + 4] = JS([240, 194, 71]);
Be[_n] = (n, e, t) => {
  const i = e === 0 || e === 15 || n === 0 || n === 15,
    s = (n * 11 + e * 7) % 47 === 2;
  return ie(
    i ? 178 : 210 + (s ? -22 : 0),
    i ? 153 : 184 + (s ? -18 : 0),
    i ? 96 : 116,
    7,
  )(n, e, t);
};
Be[_n + 1] = (n, e, t) => {
  const i = ie(211, 185, 119, 7)(n, e, t),
    s = e === 2 || e === 13,
    o =
      e >= 5 &&
      e <= 9 &&
      ((n >= 2 && n <= 6 && Math.abs(e - 7) === Math.abs(n - 4) / 2) ||
        (n >= 9 && n <= 13 && (n === 9 || n === 13 || e === 7)));
  return s || o || ((n + e * 3) % 17 === 0 && e > 3 && e < 12)
    ? ie(74, 82, 70, 8)(n, e, t)
    : i;
};
Be[_n + 2] = (n, e, t) => {
  const i = n < 2 || n > 13 || e < 2 || e > 13,
    s = (n + e) % 9 === 0 ? 32 : 0;
  return ie((i ? 166 : 224) + s, (i ? 118 : 176) + s, i ? 22 : 38, 8)(n, e, t);
};
Be[_n + 3] = (n, e, t) =>
  (n * 5 + e * 7) % 31 < 2
    ? ie(218, 171, 45, 9)(n, e, t)
    : ie(24, 63, 145, 14)(n, e, t);
Be[_n + 4] = (n, e, t) =>
  Math.abs(n - 7.5) + Math.abs(e - 7.5) < 6 || n === 2 || n === 13
    ? ie(199, 166, 92, 8)(n, e, t)
    : ie(224, 202, 139, 6)(n, e, t);
Be[_n + 5] = (n, e, t) => {
  const i = n % 4 === 0,
    s = n % 4 === 1;
  return ie(
    i ? 232 : s ? 176 : 211,
    i ? 207 : s ? 151 : 184,
    i ? 142 : s ? 92 : 118,
    7,
  )(n, e, t);
};
Be[_n + 6] = (n, e, t) => {
  const i = n < 2 || n > 13 || e < 1 || e > 14,
    s = e >= 3 && e <= 7 && n >= 5 && n <= 10,
    o = !s && (n + e) % 5 < 2;
  return s
    ? ie(199, 151, 68, 8)(n, e, t)
    : o
      ? ie(31, 73, 150, 10)(n, e, t)
      : ie(i ? 128 : 218, i ? 88 : 166, i ? 18 : 39, 8)(n, e, t);
};
Be[Wi] = (n, e, t) => {
  const i =
    Math.sin(n * 0.73 + e * 0.39) * 7 + ((n * 11 + e * 5) % 29 < 2 ? 18 : 0);
  return ie(164 + i, 164 + i, 160 + i, 11)(n, e, t);
};
Be[Wi + 1] = (n, e, t) => {
  const i = Math.sin(e * 0.72 + Math.sin(n * 0.31)) * 12,
    s = Math.abs(Math.sin(n * 0.41 + e * 0.83)) < 0.07 ? -28 : 0;
  return ie(112 + i + s, 114 + i + s, 120 + i + s, 7)(n, e, t);
};
Be[Wi + 2] = (n, e, t) => {
  const i = (n * 7 + e * 13) % 31 < 3 ? -24 : 0;
  return ie(57 + i, 59 + i, 68 + i, 8)(n, e, t);
};
Be[Wi + 3] = (n, e, t) => {
  const i = Math.abs(Math.sin(n * 0.35 - e * 0.62)) < 0.12 ? 35 : 0;
  return ie(168 + i, 207 + i, 225 + i, 8)(n, e, t);
};
Be[Wi + 4] = (n, e, t) =>
  Math.abs(Math.sin(n * 0.55 + e * 0.91 + Math.sin(e * 0.3))) < 0.19
    ? ie(77, 218, 255, 20)(n, e, t)
    : Be[Wi + 1](n, e, t);
Be[Wi + 5] = (n, e, t) => {
  const i = n === 0 || e === 0 || n === 15 || e === 15;
  return (n === 2 || n === 13) && (e === 2 || e === 13)
    ? [70, 78, 86, 255]
    : ie(i ? 145 : 220, i ? 151 : 226, i ? 158 : 231, 5)(n, e, t);
};
Be[Wi + 6] = (n, e, t) =>
  n < 2 || e < 2 || n > 13 || e > 13
    ? ie(194, 207, 214, 5)(n, e, t)
    : n + e === 12 || n + e === 13
      ? [190, 235, 250, 185]
      : [70, 135, 160, 75];
Be[Yf] = (n, e, t) =>
  n === 0 || e === 0 || n === Ll - 1 || e === Ll - 1
    ? ie(58, 54, 50, 8)(n, e, t)
    : vC((n + 0.5) / Ll, (e + 0.5) / Ll) % 2 === 0
      ? ie(198, 46, 38, 12)(n, e, t)
      : ie(232, 232, 226, 10)(n, e, t);
