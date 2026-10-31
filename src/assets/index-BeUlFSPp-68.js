// index-BeUlFSPp 68 — math
// Lines 51236-51575 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const sj = {
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
  nj = {
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
  oj = {
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
  aj = {
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
  rj = {
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
function lj(s, e, t) {
  const i = new Uint8Array(ke * ke * jt),
    n = QY(s, e, t);
  for (let l = 0; l < ke; l++)
    for (let c = 0; c < ke; c++) {
      const h = e * ke + l,
        d = t * ke + c,
        u = n[l + c * ke],
        f = u.height,
        p = u.biome,
        m = u,
        g = Oi(s + 981, h, d),
        y =
          Oe((m.heat - 0.165) / 0.03, 0, 1) * Oe((0.085 - m.wet) / 0.03, 0, 1),
        b = p === "ocean" || (!lR(p) && g < y),
        S =
          (!lR(p) && g < Oe((-0.215 - m.heat) / 0.03, 0, 1)) ||
          (p === "mountains" && f > 78),
        M = wm(s, h, d),
        E =
          M?.kind === "volcanic" && Math.hypot(h - M.x, d - M.z) < 16
            ? 87
            : XY(s, h, d, p),
        A = M ? DO(M, h, d, f) : b ? v.SAND : S ? v.SNOW : v.GRASS,
        T = jY(s, h, d, f);
      for (let x = 0; x <= f; x++) {
        let R =
          x === 0
            ? v.BEDROCK
            : x < f - 4
              ? v.STONE
              : x < f
                ? b
                  ? v.SAND
                  : v.DIRT
                : b
                  ? v.SAND
                  : S
                    ? v.SNOW
                    : v.GRASS;
        (x === f && (R = A),
          T(x) && (R = x <= 8 ? v.LAVA : v.AIR),
          (i[Ai(l, x, c)] = R));
      }
      if (E > 1 && (E < f + 2 || M?.kind === "volcanic"))
        for (
          let x = Math.max(1, Math.min(f, E - 1));
          x <= Math.max(f + 1, E) && x < jt;
          x++
        )
          i[Ai(l, x, c)] = x <= E ? v.LAVA : v.AIR;
      else
        for (let x = f + 1; x <= (M ? HO(M, h, d) : Bs); x++)
          i[Ai(l, x, c)] = v.WATER;
    }
  const o = x5((Oi(s, e, t) * 4294967296) >>> 0),
    a = [
      { id: v.COAL_ORE, veins: 15, minY: 8, maxY: 92, radius: 2.7 },
      { id: v.IRON_ORE, veins: 12, minY: 6, maxY: 72, radius: 2.35 },
      { id: v.GOLD_ORE, veins: 7, minY: 4, maxY: 38, radius: 1.95 },
      { id: v.DIAMOND_ORE, veins: 4, minY: 3, maxY: 24, radius: 1.55 },
      { id: v.TITANIUM_ORE, veins: 3, minY: 2, maxY: 18, radius: 1.3 },
    ];
  for (const l of a)
    for (let c = 0; c < l.veins; c++) {
      const h = Math.floor(o() * 16),
        d = Math.floor(o() * 16),
        u = l.minY + Math.floor(o() * (l.maxY - l.minY + 1));
      for (let f = -2; f <= 2; f++)
        for (let p = -2; p <= 2; p++)
          for (let m = -2; m <= 2; m++) {
            const g = h + f,
              y = u + p,
              b = d + m;
            if (
              g < 0 ||
              g >= 16 ||
              b < 0 ||
              b >= 16 ||
              y <= 0 ||
              y >= jt ||
              Math.hypot(f, p, m) > l.radius ||
              o() < 0.28
            )
              continue;
            const S = Ai(g, y, b);
            i[S] === v.STONE && (i[S] = l.id);
          }
    }
  (UY(
    i,
    s,
    e,
    t,
    (l, c) => n[l + c * ke].height,
    (l, c) => Df(s, l, c),
  ),
    ij(i, s, e, t));
  const r = n[8 + 8 * ke].biome;
  for (let l = 0; l < sj[r]; l++) {
    const c = Math.floor(o() * 16),
      h = Math.floor(o() * 16),
      d = n[c + h * ke].height;
    if (d + 1 >= jt || i[Ai(c, d + 1, h)] !== v.AIR) continue;
    const u = i[Ai(c, d, h)];
    if (r === "savanna") {
      (u === v.SAVANNA_GRASS || u === v.DIRT) &&
        (i[Ai(c, d + 1, h)] = o() < 0.98 ? v.DESERT_GRASS : v.FLOWER_YELLOW);
      continue;
    }
    if (r === "desert") {
      if (u !== v.SAND || o() > 0.34) continue;
      i[Ai(c, d + 1, h)] = v.DESERT_GRASS;
      continue;
    }
    if (u !== v.GRASS) continue;
    if (r === "autumn") {
      const m = o();
      if (m < 0.5) {
        i[Ai(c, d + 1, h)] = v.LEAF_LITTER;
        continue;
      }
      if (m < 0.56) {
        i[Ai(c, d + 1, h)] = o() < 0.45 ? v.FLY_AGARIC : v.MUSHROOM;
        continue;
      }
      if (m < 0.585) {
        i[Ai(c, d + 1, h)] = v.PUMPKIN;
        for (let g = 0; g < 2; g++) {
          const y = c + Math.floor(o() * 3) - 1,
            b = h + Math.floor(o() * 3) - 1;
          if (y < 0 || y >= ke || b < 0 || b >= ke) continue;
          const S = n[y + b * ke].height;
          S === d &&
            i[Ai(y, S, b)] === v.GRASS &&
            i[Ai(y, S + 1, b)] === v.AIR &&
            o() < 0.6 &&
            (i[Ai(y, S + 1, b)] = v.PUMPKIN);
        }
        continue;
      }
    }
    if (r === "jungle" && o() < 0.34) {
      ZY(i, c, d, h, o);
      continue;
    }
    const f = aj[r];
    if (f.length > 0 && o() < rj[r]) {
      i[Ai(c, d + 1, h)] = f[Math.floor(o() * f.length)];
      continue;
    }
    const p = oj[r];
    i[Ai(c, d + 1, h)] =
      o() < nj[r] && p.length > 0
        ? p[Math.floor(o() * p.length)]
        : v.TALL_GRASS;
  }
  hj(i, n, r, o);
  for (let l = 0; l < ke; l++)
    for (let c = 0; c < ke; c++) {
      const h = e * ke + l,
        d = t * ke + c,
        u = wm(s, h, d);
      if (!u) continue;
      const f = WY(u, h, d);
      if (!f) continue;
      const p = n[l + c * ke].height;
      for (let m = f.y + 1; m <= f.y + 12; m++) i[Ai(l, m, c)] = v.AIR;
      if (
        ((i[Ai(l, f.y, c)] = v.PLANKS),
        f.rail && (i[Ai(l, f.y + 1, c)] = v.FENCE_WOOD),
        (h + d) % 6 === 0)
      )
        for (let m = p + 1; m < f.y; m++) i[Ai(l, m, c)] = v.LOG;
    }
  return i;
}
const cj = {
  savanna: 0,
  yellowstone: 0,
  volcanic: 0,
  alpine: 0,
  oasis: 3,
  islands: 40,
  ocean: 30,
  jungle: 9,
  forest: 7,
  plains: 7,
  winter: 4,
  mountains: 3,
  desert: 3,
  autumn: 6,
};
function hj(s, e, t, i) {
  const n =
    t === "ocean" || t === "islands" || t === "jungle" || t === "desert";
  for (let o = 0; o < cj[t]; o++) {
    const a = Math.floor(i() * ke),
      r = Math.floor(i() * ke),
      l = e[a + r * ke].height,
      c = Bs - l;
    if (c < 1 || l < 1 || s[Ai(a, l + 1, r)] !== v.WATER) continue;
    const h = s[Ai(a, l, r)];
    if (!(
      h !== v.SAND &&
      h !== v.DIRT &&
      h !== v.GRAVEL &&
      h !== v.GRASS &&
      h !== v.STONE
    )) {
      if (n && c >= 2 && c <= 7 && i() < 0.22) {
        const d = xS[Math.floor(i() * xS.length)];
        s[Ai(a, l + 1, r)] = d;
        const u = 1 + Math.floor(i() * 3);
        for (let f = 0; f < u; f++) {
          const p = a + (Math.floor(i() * 3) - 1),
            m = r + (Math.floor(i() * 3) - 1);
          if (p < 0 || p >= ke || m < 0 || m >= ke) continue;
          const g = e[p + m * ke].height;
          Bs - g < 2 ||
            s[Ai(p, g + 1, m)] !== v.WATER ||
            (s[Ai(p, g + 1, m)] = d);
        }
        continue;
      }
      if (c >= 4 && i() < 0.62) {
        const d = Math.min(c - 2, 2 + Math.floor(i() * 6));
        for (let u = 1; u <= d && s[Ai(a, l + u, r)] === v.WATER; u++)
          s[Ai(a, l + u, r)] = v.SEAWEED;
        continue;
      }
      s[Ai(a, l + 1, r)] = v.SEAGRASS;
    }
  }
}
const tg = new Map();
function ig(s, e, t) {
  const i = `${s}:${e}:${t}`,
    n = tg.get(i);
  if (n) return n;
  const o = Zr(s, e * 24, t * 24),
    r = {
      desert: [1.3, 0.95, 0.48],
      savanna: [1.2, 0.95, 0.55],
      forest: [0.72, 0.91, 0.72],
      jungle: [0.65, 1, 0.68],
      autumn: [1.62, 0.9, 0.4],
      winter: [0.87, 1, 1.02],
      alpine: [0.84, 0.96, 0.95],
      oasis: [0.87, 1, 0.62],
      volcanic: [0.84, 0.78, 0.7],
    }[o] ?? [1, 1, 0.83];
  return (tg.size > 4096 && tg.clear(), tg.set(i, r), r);
}
const zO = -7101,
  Ay = [0.84, 1, 0.72];
