// assets__index-Dp6GxvJu 17 — theme
// Lines 32333-32578 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function fU(n, e, t, i, s = () => !0) {
  const a = [...au].filter((c) => c !== 261 && s(c));
  if (!a.length) throw new Error("No available weapons");
  const r = a.reduce((c, h) => c + (Yx[h] ?? 1), 0);
  let l = n * r;
  for (const c of a)
    if (((l -= Yx[c] ?? 1), l < 0))
      return { weapon: c, duplicate: e.includes(yw(c, t)) };
  return {
    weapon: a[a.length - 1],
    duplicate: e.includes(yw(a[a.length - 1], t)),
  };
}
const qC = (n) => Math.floor((n.price * 80) / 100);
function pU(n) {
  const e = I2(n),
    t = [...new Set(e.map((s) => s.rarity))],
    i = t.reduce((s, o) => s + (t0[o] ?? 0), 0);
  return t.reduce((s, o) => {
    const a = e.filter((r) => r.rarity === o);
    return (
      s + (((t0[o] ?? 0) / i) * a.reduce((r, l) => r + qC(l), 0)) / a.length
    );
  }, 0);
}
for (const n of Object.keys(_s))
  _s[n].price = Math.max(_s[n].price, Math.ceil(pU(n) / 0.65 / 10) * 10);
const jx = [
  { id: "rifles", en: "Rifles", ru: "Винтовки", items: [257, 258, 376, 375] },
  { id: "pistols", en: "Sidearms", ru: "Пистолеты", items: [256] },
  { id: "heavy", en: "Heavy", ru: "Тяжёлое", items: [259, 395] },
  { id: "melee", en: "Melee", ru: "Ближний бой", items: [398, 261] },
  { id: "tools", en: "Tools", ru: "Инструменты", items: [278, 338] },
  { id: "armor", en: "Armor", ru: "Броня", items: [286, 289, 292, 295] },
  {
    id: "explosives",
    en: "Explosives",
    ru: "Взрывчатка",
    items: [260, 378, 269, 380, 381, 382, 383, 384, 385, 386, 387],
  },
];
function mU(n) {
  let e = 2166136261;
  for (let o = 0; o < n.length; o++)
    ((e ^= n.charCodeAt(o)), (e = Math.imul(e, 16777619) >>> 0));
  const t = ((e >>> 0) % 1e5) / 1e5;
  e = Math.imul(e ^ (e >>> 15), 2246822507) >>> 0;
  const i = (e % 1e3) / 1e3,
    s = n === "preview" ? 0.02 : Math.min(0.99, Math.pow(t, 1.7) * 0.92);
  return { wear: s, seed: Math.floor(i * 1e3), float: s };
}
const Xx = [
    [0.07, "Factory New", "Прямо с завода"],
    [0.15, "Minimal Wear", "Немного поношенное"],
    [0.38, "Field-Tested", "После полевых испытаний"],
    [0.45, "Well-Worn", "Поношенное"],
    [1.01, "Battle-Scarred", "Закалённое в боях"],
  ],
  gw = () => ({
    gold: 0,
    owned: [],
    character: "ranger",
    custom: null,
    weapons: {},
  }),
  i0 = (n) => Fd.find((e) => e.id === n) ?? Fd[0],
  uo = (n) => Gd.find((e) => e.id === n),
  yw = (n, e) => `weapon:${ou(n)}:${e}`,
  KC = (n) => typeof n == "string" && /^[0-9a-v]{2304}$/.test(n),
  WS = (n, e, t = 0) =>
    n.owner === e
      ? String(fo(t) ? (n.blocks ?? 0) : n.kills).padStart(6, "0")
      : "ERROR";
function P2(n) {
  const e = i0(n),
    [t, i, s, o, a] = e.colors,
    r = new Array(2304).fill(0),
    l = (d, u, f, p, m) => {
      f >= 0 &&
        f < 8 &&
        p >= 0 &&
        p < 8 &&
        (r[(d * 8 + p) * 48 + u * 8 + f] = m);
    },
    c = (d, u, f, p, m, y, g) => {
      for (let b = f; b < f + m; b++)
        for (let S = p; S < p + y; S++) l(d, u, b, S, g);
    };
  for (let d = 0; d < 6; d++)
    for (let u = 0; u < 6; u++)
      (c(d, u, 0, 0, 8, 8, d === 0 ? t : d < 4 ? s : o),
        d === 0
          ? (c(d, u, 0, 0, 8, u === 2 ? 8 : 2, i),
            u !== 5 && c(d, u, 0, 1, 8, e.theme === "anime" ? 6 : 2, i))
          : d === 1
            ? (c(d, u, 0, 6, 8, 1, 0),
              c(d, u, 0, 1, 1, 5, a),
              c(d, u, 7, 1, 1, 5, a),
              u === 5 &&
                (c(d, u, 3, 0, 2, 2, t),
                c(d, u, 3, 2, 1, 4, a),
                c(d, u, 5, 3, 2, 2, o),
                c(d, u, 2, 6, 2, 1, 27)))
            : d < 4
              ? (c(d, u, 0, 6, 8, 2, t),
                c(d, u, 0, 4, 8, 1, a),
                u < 2 && c(d, u, 2, 1, 3, 2, o))
              : (c(d, u, 0, 6, 8, 2, 0),
                c(d, u, 1, 4, 6, 1, s),
                c(d, u, 0, 0, 1, 6, a)));
  const h = 5;
  if (
    (c(0, h, 1, 3, 2, 2, 5),
    c(0, h, 5, 3, 2, 2, 5),
    l(0, h, 2, 4, 0),
    l(0, h, 5, 4, 0),
    c(0, h, 3, 6, 2, 1, 8),
    e.theme === "anime" &&
      (c(0, h, 0, 0, 8, 2, i),
      l(0, h, 1, 2, i),
      l(0, h, 4, 2, i),
      l(0, h, 2, 4, 13),
      l(0, h, 5, 4, 13),
      l(0, h, 1, 5, 11),
      l(0, h, 6, 5, 11),
      c(1, 5, 2, 2, 4, 1, 10),
      l(1, 5, 3, 3, 10)),
    e.theme === "pepe" &&
      (c(0, h, 0, 0, 8, 8, 22),
      c(0, h, 1, 1, 2, 3, 5),
      c(0, h, 5, 1, 2, 3, 5),
      l(0, h, 2, 3, 0),
      l(0, h, 5, 3, 0),
      c(0, h, 1, 5, 6, 2, 29),
      c(0, h, 2, 5, 4, 1, 8)),
    ["doge", "cat", "capy", "bear"].includes(e.theme) &&
      (c(0, h, 0, 0, 8, 8, t),
      c(0, h, 0, 0, 2, 2, i),
      c(0, h, 6, 0, 2, 2, i),
      c(0, h, 2, 4, 4, 3, e.theme === "cat" ? 2 : 30),
      l(0, h, 2, 3, 0),
      l(0, h, 5, 3, 0),
      c(0, h, 3, 4, 2, 1, 0),
      l(0, h, 3, 6, 8),
      e.theme === "cat" && (c(0, h, 1, 3, 2, 1, 23), c(0, h, 5, 3, 2, 1, 23))),
    e.theme === "robot" &&
      (c(0, h, 0, 0, 8, 8, 0),
      c(0, h, 1, 3, 6, 2, a),
      l(0, h, 2, 3, 31),
      c(0, h, 2, 6, 4, 1, i),
      c(1, h, 3, 2, 2, 3, a)),
    e.theme === "noob")
  ) {
    (c(0, 5, 0, 0, 8, 8, 27),
      l(0, 5, 2, 3, 0),
      l(0, 5, 5, 3, 0),
      c(0, 5, 2, 5, 4, 1, 0),
      l(0, 5, 1, 4, 0),
      l(0, 5, 6, 4, 0));
    for (let d = 0; d < 6; d++) {
      c(1, d, 0, 0, 8, 8, 16);
      for (let u = 2; u < 4; u++) c(u, d, 0, 0, 8, 8, 27);
      for (let u = 4; u < 6; u++) c(u, d, 0, 0, 8, 8, 22);
    }
  }
  if (e.theme === "muscle") {
    for (let d = 0; d < 6; d++) {
      (c(1, d, 0, 0, 8, 7, 6),
        c(1, d, 3, 2, 1, 5, 7),
        c(1, d, 1, 3, 6, 1, 7),
        c(1, d, 2, 5, 4, 1, 7));
      for (let u = 2; u < 4; u++)
        (c(u, d, 0, 0, 8, 8, 6),
          c(u, d, 1, 3, 6, 1, 7),
          c(u, d, 0, 6, 8, 2, 0));
    }
    (c(0, 5, 1, 2, 2, 1, 2), c(0, 5, 5, 2, 2, 1, 2));
  }
  if (
    (e.theme === "chad" &&
      (c(0, h, 1, 2, 2, 1, 0),
      c(0, h, 5, 2, 2, 1, 0),
      c(0, h, 1, 6, 6, 2, 2),
      c(0, h, 2, 6, 4, 1, 4),
      c(1, 5, 1, 2, 6, 3, 4),
      c(1, 5, 3, 2, 1, 4, 2)),
    e.theme === "girl")
  ) {
    const d = e.colors[5] ?? 16,
      u = e.colors[6] ?? 10;
    for (let f = 0; f < 6; f++) c(0, f, 0, 0, 8, 8, t);
    (c(0, 2, 0, 0, 8, 8, i),
      c(0, 4, 0, 0, 8, 8, i),
      c(0, 0, 0, 0, 8, 3, i),
      c(0, 0, 0, 0, 5, 8, i),
      l(0, 0, 5, 3, i),
      c(0, 1, 0, 0, 8, 3, i),
      c(0, 1, 3, 0, 5, 8, i),
      l(0, 1, 2, 3, i),
      c(0, 5, 0, 0, 8, 2, i),
      l(0, 5, 1, 2, i),
      l(0, 5, 6, 2, i),
      l(0, 5, 3, 2, i),
      c(0, 5, 0, 2, 1, 6, i),
      c(0, 5, 7, 2, 1, 6, i),
      l(0, 5, 1, 3, 0),
      l(0, 5, 6, 3, 0),
      c(0, 5, 2, 3, 1, 2, d),
      c(0, 5, 5, 3, 1, 2, d),
      l(0, 5, 1, 4, 31),
      l(0, 5, 6, 4, 31),
      l(0, 5, 1, 5, 11),
      l(0, 5, 6, 5, 11),
      c(0, 5, 3, 6, 2, 1, u),
      e.freckles && (l(0, 5, 2, 5, 28), l(0, 5, 5, 5, 28)),
      c(1, 4, 0, 0, 8, e.hair === "bob" ? 1 : 4, i),
      c(1, 5, 2, 0, 4, 1, a),
      c(1, 5, 0, 5, 8, 1, a),
      l(1, 5, 3, 5, 27),
      l(1, 5, 4, 5, 27));
  }
  return r.map((d) => d.toString(32)).join("");
}
const h5 = {
  uncommon: 0.64,
  rare: 0.262,
  epic: 0.075,
  legendary: 0.018,
  mythic: 0.0042,
  exotic: 8e-4,
};
function gU(n, e, t, i, s) {
  const o = (u) => n.filter((f) => f.rarity === u && f.price > 0),
    a = Object.keys(h5).filter((u) => o(u).length),
    r = a.reduce((u, f) => u + h5[f], 0);
  let l = t * r,
    c = a[0];
  for (const u of a)
    if (((l -= h5[u]), l < 0)) {
      c = u;
      break;
    }
  const h = o(c),
    d = h[Math.min(h.length - 1, Math.floor(i * h.length))];
  return { skin: d.id, weapon: e(s, d.id), rarity: d.rarity };
}
