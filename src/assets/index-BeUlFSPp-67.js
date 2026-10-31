// index-BeUlFSPp 67 — math
// Lines 50956-51235 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function ej(s, e, t) {
  const i = {
      savanna: 0.2,
      yellowstone: 0.4,
      volcanic: 0,
      alpine: 0.15,
      oasis: 0.48,
      islands: 0.6,
      ocean: 0,
      plains: 0.13,
      mountains: 0.2,
      desert: 0.11,
      jungle: 0.9,
      forest: 0.78,
      winter: 0.4,
      autumn: 0.8,
    },
    n = Wn(s + 931, e.x * 0.0022, e.z * 0.0022, 3),
    o = Wn(s + 937, e.x * 0.0055, e.z * 0.0055, 2);
  let a = i[t] * Oe(0.7 + n * 0.82 + o * 0.28, 0.08, 1.15);
  if (
    (t === "plains" && (n < -0.16 || o < -0.34) && (a *= 0.06),
    (t === "forest" || t === "jungle" || t === "autumn") &&
      n < -0.38 &&
      (a *= 0.24),
    Oi(s + 967, e.gx, e.gz) >= a)
  )
    return !1;
  const r =
    t === "jungle"
      ? 4.8
      : t === "forest" || t === "winter" || t === "autumn"
        ? 4.2
        : 3.7;
  for (let l = -1; l <= 1; l++)
    for (let c = -1; c <= 1; c++) {
      if (l === 0 && c === 0) continue;
      const h = BO(s, e.gx + l, e.gz + c);
      if (h.priority > e.priority && Math.hypot(h.x - e.x, h.z - e.z) < r)
        return !1;
    }
  return !0;
}
function tj(s, e, t, i, n, o, a) {
  const r = x5((Oi(e + 971, n.gx, n.gz) * 4294967296) >>> 0),
    l = t * ke,
    c = i * ke,
    h = (b, S, M, E, A = !1) => {
      const T = b - l,
        x = M - c;
      if (T < 0 || T >= ke || x < 0 || x >= ke || S < 0 || S >= jt) return;
      const R = Ai(T, S, x);
      (A || s[R] === v.AIR) && (s[R] = E);
    },
    d = (b, S, M, E, A, T = !1) => {
      const x = T ? 1 : Math.max(1, E - 1);
      for (let R = -x; R <= x; R++)
        for (let _ = -E; _ <= E; _++)
          for (let C = -E; C <= E; C++) {
            const P = (_ * _ + C * C) / (E * E) + (R * R) / Math.max(1, x * x);
            P > 1.18 ||
              (P > 0.82 && r() < 0.32) ||
              h(b + _, S + R, M + C, typeof A == "number" ? A : A());
          }
    };
  if (o === "autumn") {
    const b = r();
    if (b < 0.3) {
      const R = 6 + Math.floor(r() * 4);
      for (let C = 1; C <= R; C++) h(n.x, a + C, n.z, v.BIRCH_LOG);
      const _ = () =>
        r() < 0.88 ? v.AUTUMN_LEAVES_YELLOW : v.AUTUMN_LEAVES_ORANGE;
      (d(n.x, a + R - 1, n.z, 2, _),
        d(n.x, a + R + 1, n.z, 1, _),
        h(n.x, a + R + 2, n.z, v.AUTUMN_LEAVES_YELLOW));
      return;
    }
    if (b < 0.36) {
      const R = 5 + Math.floor(r() * 4);
      for (let _ = 1; _ <= R; _++) h(n.x, a + _, n.z, v.DEAD_LOG);
      for (const [_, C] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        if (r() < 0.45) continue;
        const P = a + 3 + Math.floor(r() * (R - 3));
        (h(n.x + _, P, n.z + C, v.DEAD_LOG),
          r() < 0.6 && h(n.x + _ * 2, P + 1, n.z + C * 2, v.DEAD_LOG));
      }
      return;
    }
    const S =
        r() < 0.52
          ? v.AUTUMN_LEAVES_ORANGE
          : r() < 0.72
            ? v.AUTUMN_LEAVES_RED
            : v.AUTUMN_LEAVES_YELLOW,
      M = CS[Math.floor(r() * CS.length)],
      E = () => (r() < 0.8 ? S : M),
      A = 4 + Math.floor(r() * 4);
    for (let R = 1; R <= A; R++) h(n.x, a + R, n.z, v.LOG);
    const T = r() < 0.5 ? -1 : 1,
      x = r() < 0.5 ? -1 : 1;
    (h(n.x + T, a + A - 1, n.z, v.LOG),
      r() < 0.62 && h(n.x, a + A - 2, n.z + x, v.LOG),
      d(n.x, a + A, n.z, r() < 0.5 ? 3 : 2, E),
      d(n.x + T * 2, a + A, n.z, 2, E),
      r() < 0.72 && d(n.x, a + A - 1, n.z + x * 2, 2, E));
    return;
  }
  if (o === "desert") {
    const b = 2 + Math.floor(r() * 3);
    for (let S = 1; S <= b; S++) h(n.x, a + S, n.z, v.CACTUS);
    return;
  }
  if (o === "savanna") {
    const b = 5 + Math.floor(r() * 3),
      S = r() < 0.5 ? -1 : 1;
    for (let M = 1; M <= b; M++)
      h(n.x + (M > 3 ? S : 0), a + M, n.z, v.DESERT_LOG);
    for (const [M, E] of [
      [S * 3, 0],
      [-S * 2, 2],
      [0, -2],
    ]) {
      const A = a + b + (E === 0 ? 1 : 0);
      for (let T = 0; T <= 3; T++)
        h(
          n.x + Math.round((M * T) / 3),
          A - 2 + Math.floor(T / 2),
          n.z + Math.round((E * T) / 3),
          v.DESERT_LOG,
        );
      d(n.x + M, A, n.z + E, 3, v.DESERT_LEAVES, !0);
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
    for (let S = 1; S <= b; S++) h(n.x, a + S, n.z, v.PINE_LOG);
    for (let S = 2; S <= b; S++) {
      const M = b - S,
        E = S === b ? 1 : Math.min(3, 1 + Math.floor(M / 2));
      if (!(M % 2 === 1 && E > 1))
        for (let A = -E; A <= E; A++)
          for (let T = -E; T <= E; T++)
            Math.abs(A) + Math.abs(T) > E + 1 ||
              (A === 0 && T === 0) ||
              h(n.x + A, a + S, n.z + T, v.PINE_LEAVES);
    }
    h(n.x, a + b + 1, n.z, v.PINE_LEAVES);
    return;
  }
  if (o === "jungle" || o === "islands" || o === "oasis") {
    const b = o === "jungle" ? r() : 0.45,
      S = b < 0.31,
      M = b >= 0.31 && b < 0.58,
      E = S
        ? 14 + Math.floor(r() * 10)
        : M
          ? 11 + Math.floor(r() * 7)
          : 8 + Math.floor(r() * 7),
      A = S ? 2 : 1;
    for (let T = 1; T <= E; T++)
      for (let x = 0; x < A; x++)
        for (let R = 0; R < A; R++) h(n.x + x, a + T, n.z + R, v.TROPICAL_LOG);
    if (M) {
      h(n.x, a + E + 1, n.z, v.TROPICAL_LEAVES);
      const T = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ];
      for (const [x, R] of T) {
        const _ = Math.abs(x) + Math.abs(R) === 2 ? 3 : 4;
        for (let C = 1; C <= _; C++) {
          const P = C === _ ? 1 : 0;
          h(n.x + x * C, a + E - P, n.z + R * C, v.TROPICAL_LEAVES);
        }
      }
      d(n.x, a + E, n.z, 2, v.TROPICAL_LEAVES, !0);
    } else if (S) {
      for (const [x, R] of [
        [-1, 0],
        [2, 0],
        [0, -1],
        [0, 2],
      ])
        (h(n.x + x, a + 1, n.z + R, v.TROPICAL_LOG),
          r() < 0.65 && h(n.x + x * 2, a + 1, n.z + R * 2, v.TROPICAL_LOG));
      (d(n.x, a + E - 2, n.z, 4, v.TROPICAL_LEAVES, !0),
        d(n.x + 1, a + E + 1, n.z + 1, 3, v.TROPICAL_LEAVES, !0),
        [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ].forEach(([x, R], _) => {
          if (r() < 0.18) return;
          const C = a + E - 5 - (_ % 2) * 3,
            P = 2 + Math.floor(r() * 3);
          for (let O = 1; O <= P; O++)
            h(n.x + x * O, C + Math.floor(O / 3), n.z + R * O, v.TROPICAL_LOG);
          d(n.x + x * P, C + 1, n.z + R * P, 2, v.TROPICAL_LEAVES, !0);
        }));
      for (const [x, R] of [
        [-3, -2],
        [3, 2],
        [-2, 3],
      ]) {
        const _ = 1 + Math.floor(r() * 3);
        for (let C = 1; C <= _; C++)
          h(n.x + x, a + E - 2 - C, n.z + R, v.TROPICAL_LEAVES);
      }
    } else {
      const T = r() < 0.32 ? (r() < 0.5 ? -1 : 1) : 0,
        x = T === 0 && r() < 0.45 ? (r() < 0.5 ? -1 : 1) : 0;
      if (
        ((T || x) && h(n.x + T, a + E, n.z + x, v.TROPICAL_LOG),
        d(n.x + T, a + E, n.z + x, 3, v.TROPICAL_LEAVES, !0),
        d(n.x - x, a + E + 2, n.z + T, 2, v.TROPICAL_LEAVES, !0),
        r() < 0.75)
      ) {
        const R = r() < 0.5 ? -3 : 3,
          _ = r() < 0.5 ? -1 : 1;
        (h(n.x + R, a + E - 1, n.z + _, v.TROPICAL_LEAVES),
          h(n.x + R, a + E - 2, n.z + _, v.TROPICAL_LEAVES));
      }
    }
    return;
  }
  const u = (o === "forest" || o === "plains") && r() < 0.035,
    f = u ? v.SAKURA_LOG : v.LOG,
    p = u ? v.SAKURA_LEAVES : v.LEAVES,
    m = 4 + Math.floor(r() * (o === "forest" ? 5 : 4));
  for (let b = 1; b <= m; b++) h(n.x, a + b, n.z, f);
  const g = r() < 0.5 ? -1 : 1,
    y = r() < 0.5 ? -1 : 1;
  (h(n.x + g, a + m - 1, n.z, f),
    r() < 0.62 && h(n.x, a + m - 2, n.z + y, f),
    d(n.x, a + m, n.z, o === "forest" && r() < 0.45 ? 3 : 2, p),
    d(n.x + g * 2, a + m, n.z, 2, p),
    r() < 0.72 && d(n.x, a + m - 1, n.z + y * 2, 2, p));
}
function ij(s, e, t, i) {
  const o = t * ke - 7,
    a = (t + 1) * ke - 1 + 7,
    r = i * ke - 7,
    l = (i + 1) * ke - 1 + 7,
    c = Math.floor(o / k0),
    h = Math.floor(a / k0),
    d = Math.floor(r / k0),
    u = Math.floor(l / k0);
  for (let f = c; f <= h; f++)
    for (let p = d; p <= u; p++) {
      const m = BO(e, f, p);
      if (m.x < o || m.x > a || m.z < r || m.z > l) continue;
      const g = Zr(e, m.x, m.z);
      if (!ej(e, m, g)) continue;
      const y = JY(e, m.x, m.z);
      if (y <= Bs + (g === "desert" ? 0 : 1) || y >= jt - 29) continue;
      const b = wm(e, m.x, m.z);
      (b &&
        (![v.GRASS, v.SAVANNA_GRASS].includes(DO(b, m.x, m.z, y)) ||
          y < HO(b, m.x, m.z))) ||
        tj(s, e, t, i, m, g, y);
    }
}
