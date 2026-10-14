// index-Dp6GxvJu 199 — block
// Lines 107911-107974 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const wf = Pe * Pe * Kt,
  Mte = vte,
  GM = new Set([
    BLOCK.SCARECROW,
    BLOCK.GRAVESTONE,
    BLOCK.GRAVE_CROSS,
    BLOCK.CAULDRON,
    BLOCK.COFFIN,
    BLOCK.SKULL,
    BLOCK.JACK_O_LANTERN,
    BLOCK.DEAD_LOG,
  ]),
  Ste = new Set([
    BLOCK.TALL_GRASS,
    BLOCK.FLOWER_RED,
    BLOCK.FLOWER_WHITE,
    BLOCK.FLOWER_BLUE,
    BLOCK.FLOWER_PINK,
    BLOCK.FLOWER_YELLOW,
    BLOCK.LEAF_LITTER,
    BLOCK.SAVANNA_GRASS,
    BLOCK.DESERT_GRASS,
    BLOCK.PUMPKIN,
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
        r !== BLOCK.PINE_LEAVES &&
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
