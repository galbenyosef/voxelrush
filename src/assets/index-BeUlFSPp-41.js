// index-BeUlFSPp 41 — math
// Lines 40112-40323 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function cq(s) {
  const e = [],
    t = s.y,
    i = (f, p) =>
      s.rot === 0
        ? [f, p]
        : s.rot === 1
          ? [-p, f]
          : s.rot === 2
            ? [-f, -p]
            : [p, -f],
    n = (f, p, m, g, y, b, S) => {
      const [M, E] = i(f, m),
        [A, T] = i(g, b);
      B5(e, s.x + M, p, s.z + E, s.x + A, y, s.z + T, S);
    };
  let o = 0;
  const a = () => Oi(Xo + 301, s.seed, o++),
    r = (f, p, m, g, y, b, S, M) => {
      const E = f + m - 1,
        A = p + g - 1,
        T = t + 4;
      if (
        (n(f - 1, t + 1, p - 1, E + 1, t + 10, A + 1, v.AIR),
        n(f, t - 4, p, E, t, A, v.COBBLE),
        M)
      ) {
        for (let x = f; x <= E; x++)
          for (const R of [p, A]) {
            const _ = Math.floor(a() * 5);
            _ && n(x, t + 1, R, x, t + _, R, a() < 0.4 ? v.COBBLE : b);
          }
        for (let x = p + 1; x < A; x++)
          for (const R of [f, E]) {
            const _ = Math.floor(a() * 5);
            _ && n(R, t + 1, x, R, t + _, x, a() < 0.4 ? v.COBBLE : b);
          }
        for (let x = 0; x < 4; x++) {
          const R = f + Math.floor(a() * m),
            _ = p + Math.floor(a() * g);
          n(R, t + 1, _, R + 1, t + 1, _, a() < 0.5 ? v.GRAVEL : v.COBBLE);
        }
      } else {
        (n(f, t + 1, p, E, T, p, b),
          n(f, t + 1, A, E, T, A, b),
          n(f, t + 1, p, f, T, A, b),
          n(E, t + 1, p, E, T, A, b));
        for (const [C, P] of [
          [f, p],
          [E, p],
          [f, A],
          [E, A],
        ])
          n(C, t + 1, P, C, T, P, v.LOG);
        for (let C = f + 2; C <= E - 2; C += 3)
          (n(C, t + 2, p, C, t + 3, p, v.GLASS),
            n(C, t + 2, A, C, t + 3, A, v.GLASS));
        const x = Math.round((f + E) / 2),
          R = y < 0 ? p : A;
        n(x, t + 1, R, x, t + 2, R, v.AIR);
        const _ = Math.ceil(g / 2);
        for (let C = 0; C <= _; C++)
          n(f - 1, T + 1 + C, p - 1 + C, E + 1, T + 1 + C, A + 1 - C, S);
        n(f + 1, T + 1, p + 1, f + 1, T + _ + 2, p + 1, v.COBBLE);
      }
    };
  if (s.kind === "village") {
    for (let y = -66; y <= 30; y += 16)
      for (const b of [-1, 1]) {
        const S = 9 + Math.floor(a() * 3),
          M = 7 + Math.floor(a() * 2),
          E = a() < 0.5 ? v.PLANKS : v.BRICK,
          A = b > 0 ? 6 : -6 - M + 1;
        r(
          y + Math.floor(a() * 3),
          A,
          S,
          M,
          b > 0 ? -1 : 1,
          E,
          a() < 0.6 ? v.BRICK : v.DARK_PLANKS,
          a() < 0.3,
        );
      }
    const f = 50,
      p = 68,
      m = 5;
    (n(f - 1, t + 1, -m - 1, p + 1, t + 14, m + 1, v.AIR),
      n(f, t - 4, -m, p, t, m, v.COBBLE),
      n(f, t + 1, -m, p, t + 7, -m, v.STONE_BRICKS),
      n(f, t + 1, m, p, t + 7, m, v.STONE_BRICKS),
      n(p, t + 1, -m, p, t + 7, m, v.STONE_BRICKS));
    for (let y = f + 3; y <= p - 2; y += 3)
      (n(y, t + 2, -m, y, t + 5, -m, v.GLASS),
        n(y, t + 2, m, y, t + 5, m, v.GLASS));
    for (let y = 0; y <= m + 1; y++)
      n(f, t + 8 + y, -m - 1 + y, p + 1, t + 8 + y, m + 1 - y, v.DARK_PLANKS);
    const g = f - 6;
    (n(g, t - 4, -3, f - 1, t, 3, v.COBBLE),
      n(g, t + 1, -3, f, t + 19, 3, v.STONE_BRICKS),
      n(g + 1, t + 1, -2, f - 1, t + 18, 2, v.AIR),
      n(g + 2, t + 1, -3, g + 3, t + 3, -3, v.AIR));
    for (const y of [-3, 3]) n(g + 2, t + 15, y, g + 3, t + 17, y, v.AIR);
    (n(g, t + 15, -1, g, t + 17, 1, v.AIR),
      n(f, t + 15, -1, f, t + 17, 1, v.AIR),
      n(g + 2, t + 15, -1, g + 3, t + 15, 1, v.LANTERN));
    for (let y = 0; y < 4; y++)
      n(
        g + y,
        t + 20 + y * 2,
        -3 + y,
        f - y,
        t + 21 + y * 2,
        3 - y,
        y < 3 ? v.DARK_PLANKS : v.COBBLE,
      );
    return (n(g + 3, t + 28, 0, g + 3, t + 30, 0, v.COBBLE), e);
  }
  const l = s.kind === "ruin";
  r(-14, 3, 10, 7, -1, a() < 0.5 ? v.PLANKS : v.BRICK, v.BRICK, l);
  const c = 15,
    h = 10,
    d = 2,
    u = -14;
  if (
    (n(d - 1, t + 1, u - 1, d + c, t + 13, u + h, v.AIR),
    n(d, t - 4, u, d + c - 1, t, u + h - 1, v.COBBLE),
    l)
  ) {
    for (let f = d; f < d + c; f++)
      for (const p of [u, u + h - 1]) {
        const m = Math.floor(a() * 3);
        m && n(f, t + 1, p, f, t + m, p, a() < 0.6 ? v.COBBLE : v.DARK_PLANKS);
      }
    n(-12, t - 2, -12, -9, t + 4 + Math.floor(a() * 5), -9, v.STONE_BRICKS);
    for (let f = 0; f < 6; f++) {
      const p = -16 + Math.floor(a() * 34),
        m = -16 + Math.floor(a() * 34);
      n(
        p,
        t + 1,
        m,
        p + 1 + Math.floor(a() * 2),
        t + 1,
        m + 1,
        a() < 0.5 ? v.GRAVEL : v.COBBLE,
      );
    }
  } else {
    (n(d, t + 1, u, d + c - 1, t + 1, u + h - 1, v.COBBLE),
      n(d, t + 2, u, d + c - 1, t + 6, u, v.DARK_PLANKS),
      n(d, t + 2, u + h - 1, d + c - 1, t + 6, u + h - 1, v.DARK_PLANKS),
      n(d, t + 2, u, d, t + 6, u + h - 1, v.DARK_PLANKS),
      n(d + c - 1, t + 2, u, d + c - 1, t + 6, u + h - 1, v.DARK_PLANKS),
      n(d + 1, t + 1, u + 1, d + c - 2, t + 1, u + h - 2, v.AIR),
      n(d, t + 1, u + 3, d, t + 5, u + h - 4, v.AIR),
      n(d + c - 4, t + 1, u + 1, d + c - 2, t + 3, u + 3, v.HAY_BALE));
    for (let f = 0; f <= h / 2; f++)
      n(
        d - 1,
        t + 7 + f,
        u - 1 + f,
        d + c,
        t + 7 + f,
        u + h - f,
        v.DARK_PLANKS,
      );
    (n(-12, t - 2, -12, -9, t + 14, -9, v.STONE_BRICKS),
      n(-11, t + 15, -11, -10, t + 15, -10, v.BRICK));
    for (let f = 0; f < 4; f++) {
      const p = -6 + Math.floor(a() * 22),
        m = 12 + Math.floor(a() * 10);
      n(p, t + 1, m, p + 1, t + 2, m + 1, v.HAY_BALE);
    }
  }
  return e;
}
const VP = [...u_(1), ...u_(2), ...f_(1), ...f_(2)],
  qP = kA.flatMap(cq),
  CA = Object.fromEntries(H5.map((s) => [s.zone, lq(s)]));
Object.fromEntries(
  XV.map((s) => [
    s,
    CA[s].reduce(
      (e, t) => e + (t.x2 - t.x1 + 1) * (t.y2 - t.y1 + 1) * (t.z2 - t.z1 + 1),
      0,
    ),
  ]),
);
const hq = [...VP, ...Object.values(CA).flat(), ...qP];
(() => {
  const s = new Map();
  for (const e of hq)
    for (let t = Math.floor(e.x1 / ke); t <= Math.floor(e.x2 / ke); t++)
      for (let i = Math.floor(e.z1 / ke); i <= Math.floor(e.z2 / ke); i++) {
        const n = (t + 1024) * 2048 + i + 1024;
        let o = s.get(n);
        (o || s.set(n, (o = [])), o.push(e));
      }
  return s;
})();
(() => {
  const s = new Uint8Array(ke * ke * jt);
  for (let e = 0; e < ke; e++)
    for (let t = 0; t < ke; t++) {
      s[Ai(e, 0, t)] = v.BEDROCK;
      for (let i = 1; i < 22; i++) s[Ai(e, i, t)] = v.STONE;
      s[Ai(e, 22, t)] = v.GRAVEL;
      for (let i = 23; i <= Bs; i++) s[Ai(e, i, t)] = v.WATER;
    }
  return s;
})();
