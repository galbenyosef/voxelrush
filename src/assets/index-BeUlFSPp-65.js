// index-BeUlFSPp 65 — math
// Lines 50282-50622 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function DY(s, e, t, i, n) {
  const o = e * ke,
    a = t * ke,
    r = o + ke - 1,
    l = a + ke - 1;
  for (const c of OY(s, e, t, i)) {
    const h = (d, u, f, p) => c.boxes.some((m, g) => g !== d && LY(m, u, f, p));
    c.pieces.forEach((d, u) => {
      const f = c.boxes[u];
      if (f.x1 + 2 < o || f.x0 - 2 > r || f.z1 + 2 < a || f.z0 - 2 > l) return;
      const p = (m, g, y, b, S, M) => {
        m < o ||
          m > r ||
          y < a ||
          y > l ||
          g <= 1 ||
          g >= jt - 1 ||
          n(m, g, y, b, S, M);
      };
      d.kind === "room"
        ? zY(d, p)
        : d.kind === "stair"
          ? BY(d, p)
          : HY(d, u, p, h);
    });
  }
}
function HY(s, e, t, i) {
  const n = (l, c) => Oi(s.seed + c, l, 0),
    o = (l, c) =>
      s.axis === "x" ? [s.x + l * s.dir, s.z + c] : [s.x + c, s.z + l * s.dir],
    a = n(0, 71) < 0.3 ? 1 + Math.floor(n(1, 73) * (s.len - 2)) : -1,
    r = n(2, 79) < 0.22 ? 1 + Math.floor(n(3, 83) * (s.len - 2)) : -1;
  for (let l = 0; l < s.len; l++) {
    const c = l % 4 === 2;
    for (let h = -1; h <= 1; h++) {
      const [d, u] = o(l, h);
      for (let f = 0; f <= 2; f++) t(d, s.y + f, u, v.AIR, 0, "carve");
      t(d, s.y - 1, u, v.PLANKS, 0, "bridge");
    }
    for (const h of [-2, 2])
      for (let d = 0; d <= 2; d++) {
        const [u, f] = o(l, h),
          p = n(l * 7 + (h + 2) * 3 + d, 91);
        p < 0.045
          ? t(u, s.y + d, f, v.COAL_ORE, 0, "ore")
          : p < 0.062
            ? t(u, s.y + d, f, v.IRON_ORE, 0, "ore")
            : p < 0.066 && s.y < 26 && t(u, s.y + d, f, v.GOLD_ORE, 0, "ore");
      }
    if (c) {
      const h = n(l, 97);
      if (h < 0.12) {
        const [d, u] = o(l, n(l, 101) < 0.5 ? -1 : 1);
        t(d, s.y, u, v.GRAVEL, 0, "set");
        const [f, p] = o(Math.min(s.len - 1, l + 1), 0);
        i(e, f, s.y, p) || t(f, s.y, p, v.GRAVEL, 0, "set");
      } else {
        for (const d of [-1, 1]) {
          if (h < 0.2 && d === 1) continue;
          const [u, f] = o(l, d);
          i(e, u, s.y, f) ||
            (t(u, s.y, f, v.FENCE_WOOD, 0, "set"),
            t(u, s.y + 1, f, v.FENCE_WOOD, 0, "set"));
        }
        for (let d = -1; d <= 1; d++) {
          const [u, f] = o(l, d);
          i(e, u, s.y + 2, f) || t(u, s.y + 2, f, v.PLANKS, 0, "set");
        }
      }
      if (n(l, 103) < 0.45 && l + 1 < s.len) {
        const [d, u] = o(l + 1, 0);
        t(d, s.y + 2, u, v.LANTERN, sm, "set");
      }
    } else {
      const [h, d] = o(l, 0);
      n(l, 107) >= 0.72 && n(l, 109) < 0.1 && t(h, s.y, d, v.GRAVEL, 0, "set");
    }
    if (l === a && !c) {
      const [h, d] = o(l, n(l, 113) < 0.5 ? -1 : 1);
      t(h, s.y, d, v.CHEST, 0, "set");
    }
    if (l === r && !c && l !== a) {
      const [h, d] = o(l, n(l, 127) < 0.5 ? -1 : 1);
      if ((t(h, s.y, d, v.BARREL, 0, "set"), n(l, 131) < 0.35)) {
        const [u, f] = o(Math.min(s.len - 1, l + 1), n(l, 113) < 0.5 ? 1 : -1);
        t(u, s.y, f, v.DYNAMITE, 0, "set");
      }
    }
  }
}
function BY(s, e) {
  const t = (i, n) =>
    s.axis === "x" ? [s.x + i * s.dir, s.z + n] : [s.x + n, s.z + i * s.dir];
  for (let i = 0; i < 6; i++) {
    const n = s.y - Math.ceil(i / 2);
    for (let o = -1; o <= 1; o++) {
      const [a, r] = t(i, o);
      for (let l = 0; l <= 3; l++) e(a, n + l, r, v.AIR, 0, "carve");
      (e(a, n - 1, r, v.PLANKS, 0, "bridge"),
        i % 2 === 1 && e(a, n, r, v.STAIR_WOOD, NY(s.axis, s.dir), "set"),
        o !== 0 && i % 2 === 0 && e(a, n + 2, r, v.LOG, 0, "solid"));
    }
    if (i === 2) {
      const [o, a] = t(i, 0);
      e(o, n + 3, a, v.LANTERN, sm, "set");
    }
  }
}
function zY(s, e) {
  const t = (a, r) => Oi(s.seed + r, a, 0),
    i = s.r;
  for (let a = -i; a <= i; a++)
    for (let r = -i; r <= i; r++) {
      const l = s.x + a,
        c = s.z + r;
      for (let d = 0; d <= 3; d++) e(l, s.y + d, c, v.AIR, 0, "carve");
      const h = t(a * 31 + r, 5);
      e(
        l,
        s.y - 1,
        c,
        h < 0.3 ? v.GRAVEL : h < 0.45 ? v.COBBLE : v.PLANKS,
        0,
        "solid",
      );
    }
  for (const a of [-1, 1])
    for (const r of [-1, 1])
      for (let l = 0; l <= 3; l++)
        e(s.x + a * i, s.y + l, s.z + r * i, v.LOG, 0, "set");
  for (let a = -i; a <= i; a++)
    (e(s.x + a, s.y + 3, s.z - i, v.PLANKS, 0, "set"),
      e(s.x + a, s.y + 3, s.z + i, v.PLANKS, 0, "set"),
      e(s.x - i, s.y + 3, s.z + a, v.PLANKS, 0, "set"),
      e(s.x + i, s.y + 3, s.z + a, v.PLANKS, 0, "set"));
  e(s.x, s.y + 3, s.z, v.LANTERN, sm, "set");
  const n = Math.floor(t(0, 11) * 4),
    o = (a) => {
      const r = -i + 1 + a;
      return n === 0
        ? [s.x + r, s.z - i + 1]
        : n === 1
          ? [s.x + i - 1, s.z + r]
          : n === 2
            ? [s.x - r, s.z + i - 1]
            : [s.x - i + 1, s.z - r];
    };
  for (let a = 0; a < 2 * i - 1; a++) {
    const [r, l] = o(a),
      c = t(a, 13);
    a === i - 1
      ? e(r, s.y, l, v.CHEST, 0, "set")
      : c < 0.45
        ? e(r, s.y, l, v.BARREL, 0, "set")
        : c < 0.55
          ? e(r, s.y, l, v.DYNAMITE, 0, "set")
          : c < 0.7 &&
            (e(r, s.y, l, v.BARREL, 0, "set"),
            e(r, s.y + 1, l, v.BARREL, 0, "set"));
  }
  i >= 4 &&
    (e(s.x + 1, s.y, s.z + 1, v.WOOD_TABLE, 0, "set"),
    e(s.x + 1, s.y + 1, s.z + 1, v.LANTERN, 0, "set"),
    e(s.x + 2, s.y, s.z + 1, v.WOOD_CHAIR, 1, "set"));
}
const FY = new Set([
  v.STONE,
  v.DIRT,
  v.GRAVEL,
  v.COAL_ORE,
  v.IRON_ORE,
  v.GOLD_ORE,
  v.DIAMOND_ORE,
  v.TITANIUM_ORE,
  v.SAND,
  v.AIR,
]);
function UY(s, e, t, i, n, o) {
  DY(e, t, i, o, (a, r, l, c, h, d) => {
    const u = a - t * ke,
      f = l - i * ke;
    if (r >= n(u, f) - 4) return;
    const p = Ai(u, r, f),
      m = s[p];
    if (!(m === v.WATER || m === v.LAVA || m === v.BEDROCK)) {
      if (d === "carve") {
        FY.has(m) && (s[p] = v.AIR);
        return;
      }
      if (d === "bridge") {
        m === v.AIR && (s[p] = c);
        return;
      }
      if (d === "ore") {
        m === v.STONE && (s[p] = c);
        return;
      }
      if (d === "solid") {
        s[p] = c;
        return;
      }
      if (c !== v.PLANKS && c !== v.LANTERN && c !== v.LOG && r > 0) {
        const g = s[Ai(u, r - 1, f)];
        if (g === v.AIR || g === v.WATER || g === v.LAVA) return;
      }
      (c === v.LANTERN && s[Ai(u, r + 1, f)] === v.AIR) || (s[p] = c);
    }
  });
}
const Av = {
    yellowstone: [
      "Йеллоустоун · долина гейзеров",
      "Yellowstone · geyser basin",
    ],
    volcanic: ["Огненная кальдера", "Ember caldera"],
    alpine: ["Альпийские вершины", "Alpine crown"],
    oasis: ["Оазис золотых песков", "Golden sands oasis"],
    islands: ["Лазурный архипелаг", "Azure archipelago"],
    savanna: ["Янтарная саванна", "Amber savanna"],
  },
  Nf = 640,
  Ep = new Map();
function $A(s, e, t) {
  const i = `${s}:${e}:${t}`;
  if (Ep.has(i)) return Ep.get(i);
  const n = e * Nf + 250 + Math.floor(Oi(s + 9001, e, t) * 140),
    o = t * Nf + 250 + Math.floor(Oi(s + 9007, e, t) * 140),
    a = Wn(s + 301, n * 72e-5, o * 72e-5, 4),
    r = Wn(s + 401, n * 9e-4, o * 9e-4, 3),
    l = Wn(s + 501, n * 82e-5, o * 82e-5, 3),
    c = Oi(s + 9011, e, t),
    h =
      a < -0.19
        ? "islands"
        : r > 0.18 && l < 0.07
          ? "oasis"
          : r > 0 && l < 0.02 && c > 0.25
            ? "savanna"
            : c < 0.33
              ? "volcanic"
              : c < 0.66
                ? "alpine"
                : "yellowstone",
    d =
      Oi(s + 9013, e, t) < 0.22 || Math.hypot(n, o) < 280
        ? null
        : {
            kind: h,
            x: n,
            z: o,
            radius: 200,
            seed: Math.floor(Oi(s + 9019, e, t) * 2147483647),
          };
  return (Ep.size >= 1024 && Ep.clear(), Ep.set(i, d), d);
}
function wm(s, e, t) {
  const i = $A(s, Math.floor(e / Nf), Math.floor(t / Nf));
  return i && Math.hypot(e - i.x, t - i.z) < i.radius ? i : null;
}
const s4 = (s) => {
  const e = Oe(s, 0, 1);
  return e * e * (3 - 2 * e);
};
function VA(s, e, t) {
  const i = e - s.x,
    n = t - s.z,
    o = Math.atan2(n / 24, i / 37),
    a = ((s.seed % 997) / 997) * Math.PI * 2,
    r =
      1 +
      Math.sin(o * 3 + a) * 0.16 +
      Math.sin(o * 5 - a) * 0.08 +
      Wn(s.seed + 61, e * 0.055, t * 0.055, 2) * 0.11;
  return Math.hypot(i / 37, n / 24) / r;
}
function GY(s, e, t, i) {
  const n = e - s.x,
    o = t - s.z,
    a = Math.hypot(n, o),
    r = Wn(s.seed, e * 0.026, t * 0.026, 2);
  let l = i;
  if (s.kind === "volcanic") {
    const c = Math.atan2(o, n);
    ((l =
      47 +
      Math.max(0, 1 - a / 165) * 59 +
      Math.sin(c * 9 + a * 0.035) * Math.min(3, a * 0.07) +
      r * 2),
      a < 28 && (l = 82 + s4(a / 28) * 14));
  } else if (s.kind === "yellowstone") {
    l = 49 + r * 2 + Math.max(0, a - 100) * 0.045;
    const c = qA(s, e, t);
    c < 1 ? (l = 46 - Math.floor((1 - c) * 3)) : c < 1.38 && (l = 49);
    const h = Math.hypot((n + 38) / 34, (o + 83) / 27);
    h < 1 && (l = 50 + Math.floor((1 - h) * 7));
  } else if (s.kind === "alpine") {
    l = 48 + r * 3;
    for (const [c, h, d] of [
      [-46, -22, 59],
      [38, -42, 64],
      [5, 52, 51],
    ])
      l = Math.max(
        l,
        48 +
          Math.max(
            0,
            1 -
              Math.hypot(n - c, (o - h) * 1.15) /
                (100 + Math.sin(Math.atan2(o - h, n - c) * 5) * 13),
          ) *
            d +
          r * 3,
      );
    Math.hypot((n + 65) / 25, (o - 70) / 18) < 1 && (l = 43);
  } else if (s.kind === "oasis") {
    const c = VA(s, e, t);
    l =
      c < 1
        ? 46 - (1 - c) * 7
        : 46 + (c - 1) * 5 + Math.abs(r) * Math.min(8, (c - 1) * 4);
  } else if (s.kind === "savanna")
    ((l = 48 + r * 3 + Math.abs(Wn(s.seed + 23, e * 0.009, t * 0.009, 3)) * 9),
      Math.hypot((n + 48) / 25, (o - 30) / 18) < 1 && (l = 44));
  else {
    l = Bs - 12 + r * 2;
    for (const [c, h, d, u] of [
      [-60, -22, 70, 29],
      [55, -44, 58, 22],
      [26, 74, 49, 19],
    ]) {
      const f = Math.atan2(o - h, n - c),
        p =
          Math.hypot(n - c, (o - h) * 1.1) /
          (1 + Math.sin(f * 3 + c) * 0.13 + Math.sin(f * 7) * 0.045);
      l = Math.max(l, Bs - 6 + Math.max(0, 1 - p / d) * u + r * 2);
    }
  }
  return Math.floor(i + (l - i) * s4((s.radius - a) / 45));
}
