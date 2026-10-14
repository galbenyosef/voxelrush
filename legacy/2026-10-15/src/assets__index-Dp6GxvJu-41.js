// assets__index-Dp6GxvJu 41 — math
// Lines 40994-41315 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function _G(n, e, t, i) {
  const s = [],
    o = () => Math.floor(i() * 1e9);
  s.push({ kind: "room", x: n, y: e, z: t, r: 4, seed: o() });
  const a = (l, c) => Math.abs(l - n) <= xc && Math.abs(c - t) <= xc,
    r = (l, c, h, d, u, f) => {
      if (s.length >= S5 || f > 6) return;
      let p = 9 + Math.floor(i() * 5) * 4;
      for (
        ;
        p > 5 &&
        !a(l === "x" ? h + (p - 1) * c : h, l === "z" ? u + (p - 1) * c : u);
      )
        p -= 4;
      if (p <= 5) return;
      s.push({
        kind: "corridor",
        axis: l,
        dir: c,
        x: h,
        y: d,
        z: u,
        len: p,
        seed: o(),
      });
      const m = l === "x" ? h + (p - 1) * c : h,
        y = l === "z" ? u + (p - 1) * c : u,
        g = i(),
        b = (M) => {
          r(
            l === "x" ? "z" : "x",
            M,
            l === "x" ? m : m + 2 * M,
            d,
            l === "z" ? y : y + 2 * M,
            f + 1,
          );
        },
        S = (M) =>
          r(l, c, l === "x" ? m + c : m, M, l === "z" ? y + c : y, f + 1);
      if (g < 0.4) (i() < 0.75 && b(1), i() < 0.75 && b(-1), i() < 0.5 && S(d));
      else if (g < 0.6 && d - 3 >= 10) {
        const M = l === "x" ? m + c : m,
          x = l === "z" ? y + c : y;
        a(l === "x" ? M + 6 * c : M, l === "z" ? x + 6 * c : x) &&
          s.length < S5 &&
          (s.push({
            kind: "stair",
            axis: l,
            dir: c,
            x: M,
            y: d,
            z: x,
            seed: o(),
          }),
          r(
            l,
            c,
            l === "x" ? M + 6 * c : M,
            d - 3,
            l === "z" ? x + 6 * c : x,
            f + 1,
          ));
      } else if (g < 0.82) b(i() < 0.5 ? 1 : -1);
      else if (g < 0.9 && s.length < S5 - 1) {
        const M = l === "x" ? m + 4 * c : m,
          x = l === "z" ? y + 4 * c : y;
        a(M, x) && s.push({ kind: "room", x: M, y: d, z: x, r: 3, seed: o() });
      }
    };
  for (const [l, c] of [
    ["x", 1],
    ["x", -1],
    ["z", 1],
    ["z", -1],
  ])
    i() < 0.85 &&
      r(l, c, l === "x" ? n + 5 * c : n, e, l === "z" ? t + 5 * c : t, 0);
  return { pieces: s, boxes: s.map(xG), cx: n, cz: t };
}
function RG(n, e, t, i) {
  const s = e * Pe,
    o = t * Pe,
    a = [],
    r = Math.floor((s - xc - 8) / Dc),
    l = Math.floor((s + Pe + xc + 8) / Dc),
    c = Math.floor((o - xc - 8) / Dc),
    h = Math.floor((o + Pe + xc + 8) / Dc);
  for (let d = r; d <= l; d++)
    for (let u = c; u <= h; u++) {
      const f = AG(n, d, u, i);
      f &&
        Math.abs(f.cx - (s + 8)) <= xc + 16 &&
        Math.abs(f.cz - (o + 8)) <= xc + 16 &&
        a.push(f);
    }
  return a;
}
const CG = (n, e) => (n === "x" ? (e > 0 ? 3 : 1) : e > 0 ? 0 : 2);
function kG(n, e, t, i, s) {
  const o = e * Pe,
    a = t * Pe,
    r = o + Pe - 1,
    l = a + Pe - 1;
  for (const c of RG(n, e, t, i)) {
    const h = (d, u, f, p) => c.boxes.some((m, y) => y !== d && TG(m, u, f, p));
    c.pieces.forEach((d, u) => {
      const f = c.boxes[u];
      if (f.x1 + 2 < o || f.x0 - 2 > r || f.z1 + 2 < a || f.z0 - 2 > l) return;
      const p = (m, y, g, b, S, M) => {
        m < o ||
          m > r ||
          g < a ||
          g > l ||
          y <= 1 ||
          y >= Kt - 1 ||
          s(m, y, g, b, S, M);
      };
      d.kind === "room"
        ? PG(d, p)
        : d.kind === "stair"
          ? IG(d, p)
          : LG(d, u, p, h);
    });
  }
}
function LG(n, e, t, i) {
  const s = (l, c) => rn(n.seed + c, l, 0),
    o = (l, c) =>
      n.axis === "x" ? [n.x + l * n.dir, n.z + c] : [n.x + c, n.z + l * n.dir],
    a = s(0, 71) < 0.3 ? 1 + Math.floor(s(1, 73) * (n.len - 2)) : -1,
    r = s(2, 79) < 0.22 ? 1 + Math.floor(s(3, 83) * (n.len - 2)) : -1;
  for (let l = 0; l < n.len; l++) {
    const c = l % 4 === 2;
    for (let h = -1; h <= 1; h++) {
      const [d, u] = o(l, h);
      for (let f = 0; f <= 2; f++) t(d, n.y + f, u, v.AIR, 0, "carve");
      t(d, n.y - 1, u, v.PLANKS, 0, "bridge");
    }
    for (const h of [-2, 2])
      for (let d = 0; d <= 2; d++) {
        const [u, f] = o(l, h),
          p = s(l * 7 + (h + 2) * 3 + d, 91);
        p < 0.045
          ? t(u, n.y + d, f, v.COAL_ORE, 0, "ore")
          : p < 0.062
            ? t(u, n.y + d, f, v.IRON_ORE, 0, "ore")
            : p < 0.066 && n.y < 26 && t(u, n.y + d, f, v.GOLD_ORE, 0, "ore");
      }
    if (c) {
      const h = s(l, 97);
      if (h < 0.12) {
        const [d, u] = o(l, s(l, 101) < 0.5 ? -1 : 1);
        t(d, n.y, u, v.GRAVEL, 0, "set");
        const [f, p] = o(Math.min(n.len - 1, l + 1), 0);
        i(e, f, n.y, p) || t(f, n.y, p, v.GRAVEL, 0, "set");
      } else {
        for (const d of [-1, 1]) {
          if (h < 0.2 && d === 1) continue;
          const [u, f] = o(l, d);
          i(e, u, n.y, f) ||
            (t(u, n.y, f, v.FENCE_WOOD, 0, "set"),
            t(u, n.y + 1, f, v.FENCE_WOOD, 0, "set"));
        }
        for (let d = -1; d <= 1; d++) {
          const [u, f] = o(l, d);
          i(e, u, n.y + 2, f) || t(u, n.y + 2, f, v.PLANKS, 0, "set");
        }
      }
      if (s(l, 103) < 0.45 && l + 1 < n.len) {
        const [d, u] = o(l + 1, 0);
        t(d, n.y + 2, u, v.LANTERN, Mp, "set");
      }
    } else {
      const [h, d] = o(l, 0);
      s(l, 107) >= 0.72 && s(l, 109) < 0.1 && t(h, n.y, d, v.GRAVEL, 0, "set");
    }
    if (l === a && !c) {
      const [h, d] = o(l, s(l, 113) < 0.5 ? -1 : 1);
      t(h, n.y, d, v.CHEST, 0, "set");
    }
    if (l === r && !c && l !== a) {
      const [h, d] = o(l, s(l, 127) < 0.5 ? -1 : 1);
      if ((t(h, n.y, d, v.BARREL, 0, "set"), s(l, 131) < 0.35)) {
        const [u, f] = o(Math.min(n.len - 1, l + 1), s(l, 113) < 0.5 ? 1 : -1);
        t(u, n.y, f, v.DYNAMITE, 0, "set");
      }
    }
  }
}
function IG(n, e) {
  const t = (i, s) =>
    n.axis === "x" ? [n.x + i * n.dir, n.z + s] : [n.x + s, n.z + i * n.dir];
  for (let i = 0; i < 6; i++) {
    const s = n.y - Math.ceil(i / 2);
    for (let o = -1; o <= 1; o++) {
      const [a, r] = t(i, o);
      for (let l = 0; l <= 3; l++) e(a, s + l, r, v.AIR, 0, "carve");
      (e(a, s - 1, r, v.PLANKS, 0, "bridge"),
        i % 2 === 1 && e(a, s, r, v.STAIR_WOOD, CG(n.axis, n.dir), "set"),
        o !== 0 && i % 2 === 0 && e(a, s + 2, r, v.LOG, 0, "solid"));
    }
    if (i === 2) {
      const [o, a] = t(i, 0);
      e(o, s + 3, a, v.LANTERN, Mp, "set");
    }
  }
}
function PG(n, e) {
  const t = (a, r) => rn(n.seed + r, a, 0),
    i = n.r;
  for (let a = -i; a <= i; a++)
    for (let r = -i; r <= i; r++) {
      const l = n.x + a,
        c = n.z + r;
      for (let d = 0; d <= 3; d++) e(l, n.y + d, c, v.AIR, 0, "carve");
      const h = t(a * 31 + r, 5);
      e(
        l,
        n.y - 1,
        c,
        h < 0.3 ? v.GRAVEL : h < 0.45 ? v.COBBLE : v.PLANKS,
        0,
        "solid",
      );
    }
  for (const a of [-1, 1])
    for (const r of [-1, 1])
      for (let l = 0; l <= 3; l++)
        e(n.x + a * i, n.y + l, n.z + r * i, v.LOG, 0, "set");
  for (let a = -i; a <= i; a++)
    (e(n.x + a, n.y + 3, n.z - i, v.PLANKS, 0, "set"),
      e(n.x + a, n.y + 3, n.z + i, v.PLANKS, 0, "set"),
      e(n.x - i, n.y + 3, n.z + a, v.PLANKS, 0, "set"),
      e(n.x + i, n.y + 3, n.z + a, v.PLANKS, 0, "set"));
  e(n.x, n.y + 3, n.z, v.LANTERN, Mp, "set");
  const s = Math.floor(t(0, 11) * 4),
    o = (a) => {
      const r = -i + 1 + a;
      return s === 0
        ? [n.x + r, n.z - i + 1]
        : s === 1
          ? [n.x + i - 1, n.z + r]
          : s === 2
            ? [n.x - r, n.z + i - 1]
            : [n.x - i + 1, n.z - r];
    };
  for (let a = 0; a < 2 * i - 1; a++) {
    const [r, l] = o(a),
      c = t(a, 13);
    a === i - 1
      ? e(r, n.y, l, v.CHEST, 0, "set")
      : c < 0.45
        ? e(r, n.y, l, v.BARREL, 0, "set")
        : c < 0.55
          ? e(r, n.y, l, v.DYNAMITE, 0, "set")
          : c < 0.7 &&
            (e(r, n.y, l, v.BARREL, 0, "set"),
            e(r, n.y + 1, l, v.BARREL, 0, "set"));
  }
  i >= 4 &&
    (e(n.x + 1, n.y, n.z + 1, v.WOOD_TABLE, 0, "set"),
    e(n.x + 1, n.y + 1, n.z + 1, v.LANTERN, 0, "set"),
    e(n.x + 2, n.y, n.z + 1, v.WOOD_CHAIR, 1, "set"));
}
const OG = new Set([
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
function NG(n, e, t, i, s, o) {
  kG(e, t, i, o, (a, r, l, c, h, d) => {
    const u = a - t * Pe,
      f = l - i * Pe;
    if (r >= s(u, f) - 4) return;
    const p = Ri(u, r, f),
      m = n[p];
    if (!(m === v.WATER || m === v.LAVA || m === v.BEDROCK)) {
      if (d === "carve") {
        OG.has(m) && (n[p] = v.AIR);
        return;
      }
      if (d === "bridge") {
        m === v.AIR && (n[p] = c);
        return;
      }
      if (d === "ore") {
        m === v.STONE && (n[p] = c);
        return;
      }
      if (d === "solid") {
        n[p] = c;
        return;
      }
      if (c !== v.PLANKS && c !== v.LANTERN && c !== v.LOG && r > 0) {
        const y = n[Ri(u, r - 1, f)];
        if (y === v.AIR || y === v.WATER || y === v.LAVA) return;
      }
      (c === v.LANTERN && n[Ri(u, r + 1, f)] === v.AIR) || (n[p] = c);
    }
  });
}
const Ak = {
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
  lu = 640,
  ju = new Map();
