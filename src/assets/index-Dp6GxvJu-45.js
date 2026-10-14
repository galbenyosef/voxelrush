// index-Dp6GxvJu 45 — block
// Lines 42131-42411 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function iW(n, e, t) {
  const i = new Uint8Array(Pe * Pe * Kt),
    s = qG(n, e, t);
  for (let l = 0; l < Pe; l++)
    for (let c = 0; c < Pe; c++) {
      const h = e * Pe + l,
        d = t * Pe + c,
        u = s[l + c * Pe],
        f = u.height,
        p = u.biome,
        m = u,
        y = rn(n + 981, h, d),
        g =
          clamp((m.heat - 0.165) / 0.03, 0, 1) * clamp((0.085 - m.wet) / 0.03, 0, 1),
        b = p === "ocean" || (!DT(p) && y < g),
        S =
          (!DT(p) && y < clamp((-0.215 - m.heat) / 0.03, 0, 1)) ||
          (p === "mountains" && f > 78),
        M = Lp(n, h, d),
        x =
          (M == null ? void 0 : M.kind) === "volcanic" &&
          Math.hypot(h - M.x, d - M.z) < 16
            ? 87
            : VG(n, h, d, p),
        T = M ? _k(M, h, d, f) : b ? BLOCK.SAND : S ? BLOCK.SNOW : BLOCK.GRASS,
        A = WG(n, h, d, f);
      for (let _ = 0; _ <= f; _++) {
        let C =
          _ === 0
            ? BLOCK.BEDROCK
            : _ < f - 4
              ? BLOCK.STONE
              : _ < f
                ? b
                  ? BLOCK.SAND
                  : BLOCK.DIRT
                : b
                  ? BLOCK.SAND
                  : S
                    ? BLOCK.SNOW
                    : BLOCK.GRASS;
        (_ === f && (C = T),
          A(_) && (C = _ <= 8 ? BLOCK.LAVA : BLOCK.AIR),
          (i[packColor(l, _, c)] = C));
      }
      if (x > 1 && (x < f + 2 || (M == null ? void 0 : M.kind) === "volcanic"))
        for (
          let _ = Math.max(1, Math.min(f, x - 1));
          _ <= Math.max(f + 1, x) && _ < Kt;
          _++
        )
          i[packColor(l, _, c)] = _ <= x ? BLOCK.LAVA : BLOCK.AIR;
      else
        for (let _ = f + 1; _ <= (M ? Rk(M, h, d) : $o); _++)
          i[packColor(l, _, c)] = BLOCK.WATER;
    }
  const o = _y((rn(n, e, t) * 4294967296) >>> 0),
    a = [
      { id: BLOCK.COAL_ORE, veins: 15, minY: 8, maxY: 92, radius: 2.7 },
      { id: BLOCK.IRON_ORE, veins: 12, minY: 6, maxY: 72, radius: 2.35 },
      { id: BLOCK.GOLD_ORE, veins: 7, minY: 4, maxY: 38, radius: 1.95 },
      { id: BLOCK.DIAMOND_ORE, veins: 4, minY: 3, maxY: 24, radius: 1.55 },
      { id: BLOCK.TITANIUM_ORE, veins: 3, minY: 2, maxY: 18, radius: 1.3 },
    ];
  for (const l of a)
    for (let c = 0; c < l.veins; c++) {
      const h = Math.floor(o() * 16),
        d = Math.floor(o() * 16),
        u = l.minY + Math.floor(o() * (l.maxY - l.minY + 1));
      for (let f = -2; f <= 2; f++)
        for (let p = -2; p <= 2; p++)
          for (let m = -2; m <= 2; m++) {
            const y = h + f,
              g = u + p,
              b = d + m;
            if (
              y < 0 ||
              y >= 16 ||
              b < 0 ||
              b >= 16 ||
              g <= 0 ||
              g >= Kt ||
              Math.hypot(f, p, m) > l.radius ||
              o() < 0.28
            )
              continue;
            const S = packColor(y, g, b);
            i[S] === BLOCK.STONE && (i[S] = l.id);
          }
    }
  (NG(
    i,
    n,
    e,
    t,
    (l, c) => s[l + c * Pe].height,
    (l, c) => cu(n, l, c),
  ),
    XG(i, n, e, t));
  const r = s[8 + 8 * Pe].biome;
  for (let l = 0; l < ZG[r]; l++) {
    const c = Math.floor(o() * 16),
      h = Math.floor(o() * 16),
      d = s[c + h * Pe].height;
    if (d + 1 >= Kt || i[packColor(c, d + 1, h)] !== BLOCK.AIR) continue;
    const u = i[packColor(c, d, h)];
    if (r === "savanna") {
      (u === BLOCK.SAVANNA_GRASS || u === BLOCK.DIRT) &&
        (i[packColor(c, d + 1, h)] = o() < 0.98 ? BLOCK.DESERT_GRASS : BLOCK.FLOWER_YELLOW);
      continue;
    }
    if (r === "desert") {
      if (u !== BLOCK.SAND || o() > 0.34) continue;
      i[packColor(c, d + 1, h)] = BLOCK.DESERT_GRASS;
      continue;
    }
    if (u !== BLOCK.GRASS) continue;
    if (r === "autumn") {
      const m = o();
      if (m < 0.5) {
        i[packColor(c, d + 1, h)] = BLOCK.LEAF_LITTER;
        continue;
      }
      if (m < 0.56) {
        i[packColor(c, d + 1, h)] = o() < 0.45 ? BLOCK.FLY_AGARIC : BLOCK.MUSHROOM;
        continue;
      }
      if (m < 0.585) {
        i[packColor(c, d + 1, h)] = BLOCK.PUMPKIN;
        for (let y = 0; y < 2; y++) {
          const g = c + Math.floor(o() * 3) - 1,
            b = h + Math.floor(o() * 3) - 1;
          if (g < 0 || g >= Pe || b < 0 || b >= Pe) continue;
          const S = s[g + b * Pe].height;
          S === d &&
            i[packColor(g, S, b)] === BLOCK.GRASS &&
            i[packColor(g, S + 1, b)] === BLOCK.AIR &&
            o() < 0.6 &&
            (i[packColor(g, S + 1, b)] = BLOCK.PUMPKIN);
        }
        continue;
      }
    }
    if (r === "jungle" && o() < 0.34) {
      $G(i, c, d, h, o);
      continue;
    }
    const f = eW[r];
    if (f.length > 0 && o() < tW[r]) {
      i[packColor(c, d + 1, h)] = f[Math.floor(o() * f.length)];
      continue;
    }
    const p = JG[r];
    i[packColor(c, d + 1, h)] =
      o() < QG[r] && p.length > 0
        ? p[Math.floor(o() * p.length)]
        : BLOCK.TALL_GRASS;
  }
  sW(i, s, r, o);
  for (let l = 0; l < Pe; l++)
    for (let c = 0; c < Pe; c++) {
      const h = e * Pe + l,
        d = t * Pe + c,
        u = Lp(n, h, d);
      if (!u) continue;
      const f = BG(u, h, d);
      if (!f) continue;
      const p = s[l + c * Pe].height;
      for (let m = f.y + 1; m <= f.y + 12; m++) i[packColor(l, m, c)] = BLOCK.AIR;
      if (
        ((i[packColor(l, f.y, c)] = BLOCK.PLANKS),
        f.rail && (i[packColor(l, f.y + 1, c)] = BLOCK.FENCE_WOOD),
        (h + d) % 6 === 0)
      )
        for (let m = p + 1; m < f.y; m++) i[packColor(l, m, c)] = BLOCK.LOG;
    }
  return i;
}
const nW = {
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
function sW(n, e, t, i) {
  const s =
    t === "ocean" || t === "islands" || t === "jungle" || t === "desert";
  for (let o = 0; o < nW[t]; o++) {
    const a = Math.floor(i() * Pe),
      r = Math.floor(i() * Pe),
      l = e[a + r * Pe].height,
      c = $o - l;
    if (c < 1 || l < 1 || n[packColor(a, l + 1, r)] !== BLOCK.WATER) continue;
    const h = n[packColor(a, l, r)];
    if (!(
      h !== BLOCK.SAND &&
      h !== BLOCK.DIRT &&
      h !== BLOCK.GRAVEL &&
      h !== BLOCK.GRASS &&
      h !== BLOCK.STONE
    )) {
      if (s && c >= 2 && c <= 7 && i() < 0.22) {
        const d = rw[Math.floor(i() * rw.length)];
        n[packColor(a, l + 1, r)] = d;
        const u = 1 + Math.floor(i() * 3);
        for (let f = 0; f < u; f++) {
          const p = a + (Math.floor(i() * 3) - 1),
            m = r + (Math.floor(i() * 3) - 1);
          if (p < 0 || p >= Pe || m < 0 || m >= Pe) continue;
          const y = e[p + m * Pe].height;
          $o - y < 2 ||
            n[packColor(p, y + 1, m)] !== BLOCK.WATER ||
            (n[packColor(p, y + 1, m)] = d);
        }
        continue;
      }
      if (c >= 4 && i() < 0.62) {
        const d = Math.min(c - 2, 2 + Math.floor(i() * 6));
        for (let u = 1; u <= d && n[packColor(a, l + u, r)] === BLOCK.WATER; u++)
          n[packColor(a, l + u, r)] = BLOCK.SEAWEED;
        continue;
      }
      n[packColor(a, l + 1, r)] = BLOCK.SEAGRASS;
    }
  }
}
const fm = new Map();
function pm(n, e, t) {
  const i = `${n}:${e}:${t}`,
    s = fm.get(i);
  if (s) return s;
  const o = rr(n, e * 24, t * 24),
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
  return (fm.size > 4096 && fm.clear(), fm.set(i, r), r);
}
function kk(n, e, t) {
  const i = Math.floor(e / 24),
    s = Math.floor(t / 24),
    o = e / 24 - i,
    a = t / 24 - s,
    r = pm(n, i, s),
    l = pm(n, i + 1, s),
    c = pm(n, i, s + 1),
    h = pm(n, i + 1, s + 1);
  return [0, 1, 2].map(
    (d) =>
      (r[d] * (1 - o) + l[d] * o) * (1 - a) + (c[d] * (1 - o) + h[d] * o) * a,
  );
}
const mi = 16,
  oW = [16, 32, 64, 128],
  aW = 32,
  Ll = 16,
  Un = (n, e, t) =>
    Math.max(0, Math.min(255, Math.round(n + (t - 0.5) * 2 * e)));
function ie(n, e, t, i) {
  return (s, o, a) => {
    const r = a();
    return [Un(n, i, r), Un(e, i, r), Un(t, i, r), 255];
  };
}
