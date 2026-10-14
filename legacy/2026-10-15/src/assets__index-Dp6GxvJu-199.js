// assets__index-Dp6GxvJu 199 — push
// Lines 107911-107974 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const wf = Pe * Pe * Kt,
  Mte = vte,
  GM = new Set([
    v.SCARECROW,
    v.GRAVESTONE,
    v.GRAVE_CROSS,
    v.CAULDRON,
    v.COFFIN,
    v.SKULL,
    v.JACK_O_LANTERN,
    v.DEAD_LOG,
  ]),
  Ste = new Set([
    v.TALL_GRASS,
    v.FLOWER_RED,
    v.FLOWER_WHITE,
    v.FLOWER_BLUE,
    v.FLOWER_PINK,
    v.FLOWER_YELLOW,
    v.LEAF_LITTER,
    v.SAVANNA_GRASS,
    v.DESERT_GRASS,
    v.PUMPKIN,
  ]);
function Ete(n) {
  const e = [],
    t = [],
    i = [];
  let s = 0,
    o = 0;
  for (let a = 256; a < n.length; a++) {
    const r = n[a];
    if (r !== 0) {
      if (GM.has(r)) {
        i.length < 96 && i.push(a);
        continue;
      }
      if (Ste.has(r)) {
        (o++,
          t.length < 48
            ? t.push(a)
            : ((o * 2654435761) >>> 0) % o < 48 && (t[o % 48] = a));
        continue;
      }
      $n(r) &&
        n[a - 256] === 0 &&
        r !== v.PINE_LEAVES &&
        (s++,
        e.length < 64
          ? e.push(a)
          : ((s * 2654435761) >>> 0) % s < 64 && (e[s % 64] = a));
    }
  }
  return { leaves: e, grass: t, specials: i };
}
const hR = [ez],
  dR = [],
  a2 = [[0, 0, 0, 1, 1, 1]],
  uR = 96;
function xte(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) jl[n[t]] > 0 && e.push(t);
  return e;
}
