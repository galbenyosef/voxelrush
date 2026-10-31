// chunk-mesh-worker-coep-v1-GBSiXDQy 26 — foreach
// Lines 8258-8598 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function Zr(r, t, e, s) {
  return (n, i, c) => {
    const h = c();
    return [Dt(r, s, h), Dt(t, s, h), Dt(e, s, h), 255];
  };
}
rn.forEach(([, , r], t) => {});
const $r = [
  [45, 45, 48],
  [196, 133, 88],
  [226, 188, 75],
  [73, 216, 232],
  [185, 197, 212],
];
$r.forEach(([r, t, e], s) => {});
const Jr = [
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
  jr = [
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
  Wn = (r, t, e, s) => {
    const n = (s ? jr : Jr)[e],
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
    return (c, h, o) => {
      if (e === 2)
        for (const [l, f] of i) {
          const m = Math.hypot(c - l, h - f);
          if (m > 1.55) continue;
          const _ = m > 1.1 ? -36 : c < l && h < f ? 48 : 0;
          return [
            Dt(t[0] + _, 5, o()),
            Dt(t[1] + _, 5, o()),
            Dt(t[2] + _, 5, o()),
            255,
          ];
        }
      let a = 1 / 0,
        u,
        d = 0;
      if (
        (n.forEach((l, f) => {
          const [m, _, g, y, R] = l,
            E = c - m,
            x = h - _,
            S = ((E + x * R) / g) ** 2 + (x / y) ** 2,
            M = (c * 17 + h * 11 + f * 5) % 19 === 0 ? 0.16 : 0;
          S < 1 - M && S < a && ((a = S), (u = l), (d = f));
        }),
        u)
      ) {
        const [l, f] = u,
          m = Math.sqrt(a) > 0.82,
          _ = !s && Math.abs(h - f - (c - l) * 0.3) < 0.42 && a < 0.62,
          g =
            (c < l ? 10 : -4) +
            (h < f ? 8 : -5) +
            ((d % 3) - 1) * 5 +
            (_ ? 19 : 0) -
            (m ? 23 : 0);
        return [
          Dt(r[0] + g, 5, o()),
          Dt(r[1] + g, 6, o()),
          Dt(r[2] + g * 0.8, 5, o()),
          255,
        ];
      }
      return !s && c === 8 && h >= 8 && h <= 14
        ? Zr(83, 79, 44, 6)(c, h, o)
        : [0, 0, 0, 0];
    };
  };
Qt.forEach((r, t) => {
  const e = t === 0 ? [74, 129, 56] : t === 1 ? [57, 112, 88] : [55, 104, 61],
    s = [(r.color >> 16) & 255, (r.color >> 8) & 255, r.color & 255];
  for (let n = 0; n < 3; n++) {
    const i = n === 0 ? 16 : n === 1 ? 8 : 0,
      c = [e[0] + i, e[1] + i, e[2] + i * 0.7];
    (Wn(c, s, n, !1), Wn(c, s, n, !0));
  }
});
const B = {
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
  [Jn]: "cloth",
  [jn]: "cloth",
  [ti]: "cloth",
  [ls]: "metal",
  [ds]: "wood",
  [Ae]: "metal",
  [Ae + 1]: "metal",
  [ye]: "metal",
  [ye + 1]: "metal",
  [ei]: "metal",
  [si]: "metal",
  [on]: "metal",
  [an]: "metal",
};
rn.forEach((r, t) => {
  B[$n + t] = "stone";
});
for (let r = 0; r < 5; r++) B[it + r] = "rock";
["sand", "sand", "sand", "stone", "stone", "stone", "organic"].forEach(
  (r, t) => {
    B[j + t] = r;
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
  B[Y + t] = r;
});
["wood", "stone", "stone", "stone", "sand"].forEach((r, t) => {
  B[W + t] = r;
});
for (let r = 0; r < 4; r++)
  ((B[P + r * 3] = "wood"),
    (B[P + r * 3 + 1] = "bark"),
    (B[P + r * 3 + 2] = "organic"));
for (let r = 12; r <= 16; r++) B[P + r] = "organic";
B[P + 17] = "liquid";
B[P + 18] = "glow";
B[P + 19] = "organic";
B[P + 20] = "organic";
B[P + 21] = "organic";
B[fs] = "cloth";
B[at] = "organic";
B[at + 1] = "dirt";
B[at + 2] = "dirt";
for (let r = 3; r <= 8; r++) B[at + r] = "organic";
for (let r = 0; r < Qt.length * 3; r++) B[js + r] = "organic";
for (let r = 0; r < Qt.length * 3; r++) B[ni + r] = "organic";
for (let r = 0; r < 3; r++) B[ze + r] = "cloth";
B[Fe] = "bark";
B[cn] = "glow";
B[Gt] = "organic";
B[Gt + 1] = "organic";
for (let r = 2; r <= 4; r++) B[Gt + r] = "rock";
B[Q] = "sand";
B[Q + 1] = "sand";
B[Q + 2] = "metal";
B[Q + 3] = "rock";
B[Q + 4] = "sand";
B[Q + 5] = "sand";
B[Q + 6] = "metal";
B[z] = "sand";
B[z + 1] = "rock";
B[z + 2] = "rock";
B[z + 3] = "glass";
B[z + 4] = "rock";
B[z + 5] = "metal";
B[z + 6] = "glass";
B[se] = "cloth";
B[qt] = "metal";
B[ge] = "glow";
B[hn] = "metal";
B[He] = "organic";
B[He + 1] = "dirt";
B[As] = "organic";
B[As + 1] = "organic";
B[ys] = "dirt";
B[ys + 1] = "dirt";
B[xs] = "organic";
B[xs + 1] = "dirt";
B[Js] = "wood";
B[Os] = "organic";
[201, 202, 203].forEach((r) => {
  B[r] = "organic";
});
Object.assign(B, {
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
Object.assign(B, {
  231: "wood",
  232: "wood",
  233: "wood",
  234: "metal",
  235: "metal",
  236: "wood",
  237: "wood",
  238: "smooth",
});
Object.assign(B, {
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
