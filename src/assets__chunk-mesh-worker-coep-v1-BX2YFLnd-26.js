// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 26 — foreach
// Lines 8234-8568 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function $r(r, t, e, s) {
  return (n, i, h) => {
    const c = h();
    return [Gt(r, s, c), Gt(t, s, c), Gt(e, s, c), 255];
  };
}
on.forEach(([, , r], t) => {});
const Jr = [
  [45, 45, 48],
  [196, 133, 88],
  [226, 188, 75],
  [73, 216, 232],
  [185, 197, 212],
];
Jr.forEach(([r, t, e], s) => {});
const jr = [
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
  t0 = [
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
  Hn = (r, t, e, s) => {
    const n = (s ? t0 : jr)[e],
      i = s
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
    return (h, c, o) => {
      if (e === 2)
        for (const [l, p] of i) {
          const m = Math.hypot(h - l, c - p);
          if (m > 1.55) continue;
          const _ = m > 1.1 ? -36 : h < l && c < p ? 48 : 0;
          return [
            Gt(t[0] + _, 5, o()),
            Gt(t[1] + _, 5, o()),
            Gt(t[2] + _, 5, o()),
            255,
          ];
        }
      let a = 1 / 0,
        u,
        d = 0;
      if (
        (n.forEach((l, p) => {
          const [m, _, y, E, M] = l,
            g = h - m,
            L = c - _,
            I = ((g + L * M) / y) ** 2 + (L / E) ** 2,
            A = (h * 17 + c * 11 + p * 5) % 19 === 0 ? 0.16 : 0;
          I < 1 - A && I < a && ((a = I), (u = l), (d = p));
        }),
        u)
      ) {
        const [l, p] = u,
          m = Math.sqrt(a) > 0.82,
          _ = !s && Math.abs(c - p - (h - l) * 0.3) < 0.42 && a < 0.62,
          y =
            (h < l ? 10 : -4) +
            (c < p ? 8 : -5) +
            ((d % 3) - 1) * 5 +
            (_ ? 19 : 0) -
            (m ? 23 : 0);
        return [
          Gt(r[0] + y, 5, o()),
          Gt(r[1] + y, 6, o()),
          Gt(r[2] + y * 0.8, 5, o()),
          255,
        ];
      }
      return !s && h === 8 && c >= 8 && c <= 14
        ? $r(83, 79, 44, 6)(h, c, o)
        : [0, 0, 0, 0];
    };
  };
Jt.forEach((r, t) => {
  const e = t === 0 ? [74, 129, 56] : t === 1 ? [57, 112, 88] : [55, 104, 61],
    s = [(r.color >> 16) & 255, (r.color >> 8) & 255, r.color & 255];
  for (let n = 0; n < 3; n++) {
    const i = n === 0 ? 16 : n === 1 ? 8 : 0,
      h = [e[0] + i, e[1] + i, e[2] + i * 0.7];
    (Hn(h, s, n, !1), Hn(h, s, n, !0));
  }
});
const P = {
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
  [jn]: "cloth",
  [ti]: "cloth",
  [ei]: "cloth",
  [ms]: "metal",
  [_s]: "wood",
  [Se]: "metal",
  [Se + 1]: "metal",
  [ge]: "metal",
  [ge + 1]: "metal",
  [si]: "metal",
  [ni]: "metal",
  [an]: "metal",
  [hn]: "metal",
};
on.forEach((r, t) => {
  P[Jn + t] = "stone";
});
for (let r = 0; r < 5; r++) P[at + r] = "rock";
["sand", "sand", "sand", "stone", "stone", "stone", "organic"].forEach(
  (r, t) => {
    P[et + t] = r;
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
].forEach((r, t) => {
  P[V + t] = r;
});
["wood", "stone", "stone", "stone", "sand"].forEach((r, t) => {
  P[G + t] = r;
});
for (let r = 0; r < 4; r++)
  ((P[U + r * 3] = "wood"),
    (P[U + r * 3 + 1] = "bark"),
    (P[U + r * 3 + 2] = "organic"));
for (let r = 12; r <= 16; r++) P[U + r] = "organic";
P[U + 17] = "liquid";
P[U + 18] = "glow";
P[U + 19] = "organic";
P[U + 20] = "organic";
P[U + 21] = "organic";
P[Es] = "cloth";
P[lt] = "organic";
P[lt + 1] = "dirt";
P[lt + 2] = "dirt";
for (let r = 3; r <= 8; r++) P[lt + r] = "organic";
for (let r = 0; r < Jt.length * 3; r++) P[tn + r] = "organic";
for (let r = 0; r < Jt.length * 3; r++) P[ii + r] = "organic";
for (let r = 0; r < 3; r++) P[He + r] = "cloth";
P[Ye] = "bark";
P[un] = "glow";
P[Vt] = "organic";
P[Vt + 1] = "organic";
for (let r = 2; r <= 4; r++) P[Vt + r] = "rock";
P[Q] = "sand";
P[Q + 1] = "sand";
P[Q + 2] = "metal";
P[Q + 3] = "rock";
P[Q + 4] = "sand";
P[Q + 5] = "sand";
P[Q + 6] = "metal";
P[w] = "sand";
P[w + 1] = "rock";
P[w + 2] = "rock";
P[w + 3] = "glass";
P[w + 4] = "rock";
P[w + 5] = "metal";
P[w + 6] = "glass";
P[oe] = "cloth";
P[Zt] = "metal";
P[Oe] = "glow";
P[cn] = "metal";
P[qe] = "organic";
P[qe + 1] = "dirt";
P[js] = "wood";
P[Ls] = "organic";
[201, 202, 203].forEach((r) => {
  P[r] = "organic";
});
Object.assign(P, {
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
Object.assign(P, {
  231: "wood",
  232: "wood",
  233: "wood",
  234: "metal",
  235: "metal",
  236: "wood",
  237: "wood",
  238: "smooth",
});
Object.assign(P, {
  182: "glass",
  183: "metal",
  239: "cloth",
  240: "cloth",
  241: "smooth",
  242: "smooth",
  243: "metal",
  244: "cloth",
  245: "glow",
  246: "smooth",
  247: "cloth",
  248: "smooth",
  249: "glow",
  250: "glass",
  251: "cloth",
  252: "smooth",
  253: "wood",
  254: "smooth",
  255: "smooth",
});
