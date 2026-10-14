// index-Dp6GxvJu 44 — math
// Lines 41810-42130 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function jG(n, e, t, i, s, o, a) {
  const r = _y((rn(e + 971, s.gx, s.gz) * 4294967296) >>> 0),
    l = t * Pe,
    c = i * Pe,
    h = (b, S, M, x, T = !1) => {
      const A = b - l,
        _ = M - c;
      if (A < 0 || A >= Pe || _ < 0 || _ >= Pe || S < 0 || S >= Kt) return;
      const C = Ri(A, S, _);
      (T || n[C] === v.AIR) && (n[C] = x);
    },
    d = (b, S, M, x, T, A = !1) => {
      const _ = A ? 1 : Math.max(1, x - 1);
      for (let C = -_; C <= _; C++)
        for (let R = -x; R <= x; R++)
          for (let L = -x; L <= x; L++) {
            const N = (R * R + L * L) / (x * x) + (C * C) / Math.max(1, _ * _);
            N > 1.18 ||
              (N > 0.82 && r() < 0.32) ||
              h(b + R, S + C, M + L, typeof T == "number" ? T : T());
          }
    };
  if (o === "autumn") {
    const b = r();
    if (b < 0.3) {
      const C = 6 + Math.floor(r() * 4);
      for (let L = 1; L <= C; L++) h(s.x, a + L, s.z, v.BIRCH_LOG);
      const R = () =>
        r() < 0.88 ? v.AUTUMN_LEAVES_YELLOW : v.AUTUMN_LEAVES_ORANGE;
      (d(s.x, a + C - 1, s.z, 2, R),
        d(s.x, a + C + 1, s.z, 1, R),
        h(s.x, a + C + 2, s.z, v.AUTUMN_LEAVES_YELLOW));
      return;
    }
    if (b < 0.36) {
      const C = 5 + Math.floor(r() * 4);
      for (let R = 1; R <= C; R++) h(s.x, a + R, s.z, v.DEAD_LOG);
      for (const [R, L] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        if (r() < 0.45) continue;
        const N = a + 3 + Math.floor(r() * (C - 3));
        (h(s.x + R, N, s.z + L, v.DEAD_LOG),
          r() < 0.6 && h(s.x + R * 2, N + 1, s.z + L * 2, v.DEAD_LOG));
      }
      return;
    }
    const S =
        r() < 0.52
          ? v.AUTUMN_LEAVES_ORANGE
          : r() < 0.72
            ? v.AUTUMN_LEAVES_RED
            : v.AUTUMN_LEAVES_YELLOW,
      M = hw[Math.floor(r() * hw.length)],
      x = () => (r() < 0.8 ? S : M),
      T = 4 + Math.floor(r() * 4);
    for (let C = 1; C <= T; C++) h(s.x, a + C, s.z, v.LOG);
    const A = r() < 0.5 ? -1 : 1,
      _ = r() < 0.5 ? -1 : 1;
    (h(s.x + A, a + T - 1, s.z, v.LOG),
      r() < 0.62 && h(s.x, a + T - 2, s.z + _, v.LOG),
      d(s.x, a + T, s.z, r() < 0.5 ? 3 : 2, x),
      d(s.x + A * 2, a + T, s.z, 2, x),
      r() < 0.72 && d(s.x, a + T - 1, s.z + _ * 2, 2, x));
    return;
  }
  if (o === "desert") {
    const b = 2 + Math.floor(r() * 3);
    for (let S = 1; S <= b; S++) h(s.x, a + S, s.z, v.CACTUS);
    return;
  }
  if (o === "savanna") {
    const b = 5 + Math.floor(r() * 3),
      S = r() < 0.5 ? -1 : 1;
    for (let M = 1; M <= b; M++)
      h(s.x + (M > 3 ? S : 0), a + M, s.z, v.DESERT_LOG);
    for (const [M, x] of [
      [S * 3, 0],
      [-S * 2, 2],
      [0, -2],
    ]) {
      const T = a + b + (x === 0 ? 1 : 0);
      for (let A = 0; A <= 3; A++)
        h(
          s.x + Math.round((M * A) / 3),
          T - 2 + Math.floor(A / 2),
          s.z + Math.round((x * A) / 3),
          v.DESERT_LOG,
        );
      d(s.x + M, T, s.z + x, 3, v.DESERT_LEAVES, !0);
    }
    return;
  }
  if (
    o === "winter" ||
    o === "mountains" ||
    o === "yellowstone" ||
    o === "alpine"
  ) {
    const b = 7 + Math.floor(r() * 5);
    for (let S = 1; S <= b; S++) h(s.x, a + S, s.z, v.PINE_LOG);
    for (let S = 2; S <= b; S++) {
      const M = b - S,
        x = S === b ? 1 : Math.min(3, 1 + Math.floor(M / 2));
      if (!(M % 2 === 1 && x > 1))
        for (let T = -x; T <= x; T++)
          for (let A = -x; A <= x; A++)
            Math.abs(T) + Math.abs(A) > x + 1 ||
              (T === 0 && A === 0) ||
              h(s.x + T, a + S, s.z + A, v.PINE_LEAVES);
    }
    h(s.x, a + b + 1, s.z, v.PINE_LEAVES);
    return;
  }
  if (o === "jungle" || o === "islands" || o === "oasis") {
    const b = o === "jungle" ? r() : 0.45,
      S = b < 0.31,
      M = b >= 0.31 && b < 0.58,
      x = S
        ? 14 + Math.floor(r() * 10)
        : M
          ? 11 + Math.floor(r() * 7)
          : 8 + Math.floor(r() * 7),
      T = S ? 2 : 1;
    for (let A = 1; A <= x; A++)
      for (let _ = 0; _ < T; _++)
        for (let C = 0; C < T; C++) h(s.x + _, a + A, s.z + C, v.TROPICAL_LOG);
    if (M) {
      h(s.x, a + x + 1, s.z, v.TROPICAL_LEAVES);
      const A = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ];
      for (const [_, C] of A) {
        const R = Math.abs(_) + Math.abs(C) === 2 ? 3 : 4;
        for (let L = 1; L <= R; L++) {
          const N = L === R ? 1 : 0;
          h(s.x + _ * L, a + x - N, s.z + C * L, v.TROPICAL_LEAVES);
        }
      }
      d(s.x, a + x, s.z, 2, v.TROPICAL_LEAVES, !0);
    } else if (S) {
      for (const [_, C] of [
        [-1, 0],
        [2, 0],
        [0, -1],
        [0, 2],
      ])
        (h(s.x + _, a + 1, s.z + C, v.TROPICAL_LOG),
          r() < 0.65 && h(s.x + _ * 2, a + 1, s.z + C * 2, v.TROPICAL_LOG));
      (d(s.x, a + x - 2, s.z, 4, v.TROPICAL_LEAVES, !0),
        d(s.x + 1, a + x + 1, s.z + 1, 3, v.TROPICAL_LEAVES, !0),
        [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ].forEach(([_, C], R) => {
          if (r() < 0.18) return;
          const L = a + x - 5 - (R % 2) * 3,
            N = 2 + Math.floor(r() * 3);
          for (let D = 1; D <= N; D++)
            h(s.x + _ * D, L + Math.floor(D / 3), s.z + C * D, v.TROPICAL_LOG);
          d(s.x + _ * N, L + 1, s.z + C * N, 2, v.TROPICAL_LEAVES, !0);
        }));
      for (const [_, C] of [
        [-3, -2],
        [3, 2],
        [-2, 3],
      ]) {
        const R = 1 + Math.floor(r() * 3);
        for (let L = 1; L <= R; L++)
          h(s.x + _, a + x - 2 - L, s.z + C, v.TROPICAL_LEAVES);
      }
    } else {
      const A = r() < 0.32 ? (r() < 0.5 ? -1 : 1) : 0,
        _ = A === 0 && r() < 0.45 ? (r() < 0.5 ? -1 : 1) : 0;
      if (
        ((A || _) && h(s.x + A, a + x, s.z + _, v.TROPICAL_LOG),
        d(s.x + A, a + x, s.z + _, 3, v.TROPICAL_LEAVES, !0),
        d(s.x - _, a + x + 2, s.z + A, 2, v.TROPICAL_LEAVES, !0),
        r() < 0.75)
      ) {
        const C = r() < 0.5 ? -3 : 3,
          R = r() < 0.5 ? -1 : 1;
        (h(s.x + C, a + x - 1, s.z + R, v.TROPICAL_LEAVES),
          h(s.x + C, a + x - 2, s.z + R, v.TROPICAL_LEAVES));
      }
    }
    return;
  }
  const u = (o === "forest" || o === "plains") && r() < 0.035,
    f = u ? v.SAKURA_LOG : v.LOG,
    p = u ? v.SAKURA_LEAVES : v.LEAVES,
    m = 4 + Math.floor(r() * (o === "forest" ? 5 : 4));
  for (let b = 1; b <= m; b++) h(s.x, a + b, s.z, f);
  const y = r() < 0.5 ? -1 : 1,
    g = r() < 0.5 ? -1 : 1;
  (h(s.x + y, a + m - 1, s.z, f),
    r() < 0.62 && h(s.x, a + m - 2, s.z + g, f),
    d(s.x, a + m, s.z, o === "forest" && r() < 0.45 ? 3 : 2, p),
    d(s.x + y * 2, a + m, s.z, 2, p),
    r() < 0.72 && d(s.x, a + m - 1, s.z + g * 2, 2, p));
}
function XG(n, e, t, i) {
  const o = t * Pe - 7,
    a = (t + 1) * Pe - 1 + 7,
    r = i * Pe - 7,
    l = (i + 1) * Pe - 1 + 7,
    c = Math.floor(o / Bc),
    h = Math.floor(a / Bc),
    d = Math.floor(r / Bc),
    u = Math.floor(l / Bc);
  for (let f = c; f <= h; f++)
    for (let p = d; p <= u; p++) {
      const m = Ck(e, f, p);
      if (m.x < o || m.x > a || m.z < r || m.z > l) continue;
      const y = rr(e, m.x, m.z);
      if (!YG(e, m, y)) continue;
      const g = KG(e, m.x, m.z);
      if (g <= $o + (y === "desert" ? 0 : 1) || g >= Kt - 29) continue;
      const b = Lp(e, m.x, m.z);
      (b &&
        (![v.GRASS, v.SAVANNA_GRASS].includes(_k(b, m.x, m.z, g)) ||
          g < Rk(b, m.x, m.z))) ||
        jG(n, e, t, i, m, y, g);
    }
}
const ZG = {
    savanna: 58,
    yellowstone: 13,
    volcanic: 0,
    alpine: 5,
    oasis: 10,
    islands: 17,
    plains: 20,
    forest: 15,
    jungle: 38,
    winter: 6,
    mountains: 4,
    desert: 10,
    ocean: 0,
    autumn: 44,
  },
  QG = {
    savanna: 0.015,
    yellowstone: 0.12,
    volcanic: 0,
    alpine: 0.18,
    oasis: 0.08,
    islands: 0.1,
    plains: 0.16,
    forest: 0.1,
    jungle: 0.07,
    winter: 0.06,
    mountains: 0.05,
    desert: 0,
    ocean: 0,
    autumn: 0.05,
  },
  JG = {
    savanna: [v.FLOWER_YELLOW],
    yellowstone: [v.FLOWER_YELLOW, v.FLOWER_WHITE],
    volcanic: [],
    alpine: [v.FLOWER_BLUE],
    oasis: [v.FLOWER_WHITE],
    islands: [v.FLOWER_PINK],
    plains: [v.FLOWER_RED, v.FLOWER_YELLOW, v.FLOWER_WHITE, v.FLOWER_PINK],
    forest: [v.FLOWER_BLUE, v.FLOWER_WHITE, v.FLOWER_PINK],
    jungle: [v.FLOWER_PINK, v.FLOWER_RED, v.FLOWER_YELLOW],
    winter: [v.FLOWER_WHITE, v.FLOWER_BLUE],
    mountains: [v.FLOWER_BLUE, v.FLOWER_WHITE],
    autumn: [v.FLOWER_YELLOW, v.FLOWER_WHITE],
    desert: [],
    ocean: [],
  },
  eW = {
    savanna: [],
    yellowstone: [v.RASPBERRY_BUSH_RIPE, v.BLUEBERRY_BUSH_RIPE],
    volcanic: [],
    alpine: [v.BLUEBERRY_BUSH_RIPE],
    oasis: [],
    islands: [v.BLACKBERRY_BUSH_RIPE],
    plains: [v.RASPBERRY_BUSH_RIPE, v.BLACKBERRY_BUSH_RIPE],
    forest: [
      v.RASPBERRY_BUSH_RIPE,
      v.BLUEBERRY_BUSH_RIPE,
      v.BLACKBERRY_BUSH_RIPE,
    ],
    jungle: [v.BLACKBERRY_BUSH_RIPE, v.RASPBERRY_BUSH_RIPE],
    winter: [v.BLUEBERRY_BUSH_RIPE],
    mountains: [v.BLUEBERRY_BUSH_RIPE],
    autumn: [v.BLACKBERRY_BUSH_RIPE, v.RASPBERRY_BUSH_RIPE],
    desert: [],
    ocean: [],
  },
  tW = {
    savanna: 0,
    yellowstone: 0.07,
    volcanic: 0,
    alpine: 0.05,
    oasis: 0,
    islands: 0.06,
    plains: 0.05,
    forest: 0.12,
    jungle: 0.09,
    winter: 0.06,
    mountains: 0.05,
    desert: 0,
    ocean: 0,
    autumn: 0.04,
  };
