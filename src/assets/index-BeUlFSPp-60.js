// index-BeUlFSPp 60 — math
// Lines 48763-49074 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function lY(s, e, t, i, n = 0) {
  const o = s.getObjectByName("mouth");
  if (o) {
    const r = Math.max(n * 0.7, Math.min(1, i * 9));
    ((o.scale.y +=
      (1 + r * (2.5 + Math.sin(t * 29) * 0.8) - o.scale.y) *
      (1 - Math.exp(-24 * e))),
      (o.scale.x = 1 + r * 0.15));
  }
  const a = Math.sin(t * 0.83) > 0.998 ? 0.12 : 1;
  for (const r of ["eye-l", "eye-r"]) {
    const l = s.getObjectByName(r);
    l && (l.scale.y = a);
  }
}
const tn = { TORSO: 0, HEAD: 1, ARM: 2, LEG: 3 },
  cY = 32,
  hY = new Set([32, 266, 319, 359, 360, 361, 362, 363, 364, 365, 366]),
  dY = (s) => hY.has(s),
  la = { NONE: 0, BLOCK: 1, ITEM: 2, ANIMAL: 3 },
  uY = {
    pig: Bt.PIG,
    chicken: Bt.CHICKEN,
    sheep: Bt.SHEEP,
    cow: Bt.COW,
    camel: Bt.CAMEL,
    fish: Bt.FISH,
    shark: Bt.SHARK,
    wendigo: Bt.WENDIGO,
    свинья: Bt.PIG,
    курица: Bt.CHICKEN,
    овца: Bt.SHEEP,
    корова: Bt.COW,
    верблюд: Bt.CAMEL,
    рыба: Bt.FISH,
    акула: Bt.SHARK,
    вендиго: Bt.WENDIGO,
  },
  fY = [
    "Свинья",
    "Курица",
    "Овца",
    "Корова",
    "Верблюд",
    "Рыба",
    "",
    "Акула",
    "",
    "",
    "",
    "",
    "Вендиго",
  ],
  pY = [
    "Pig",
    "Chicken",
    "Sheep",
    "Cow",
    "Camel",
    "Fish",
    "",
    "Shark",
    "",
    "",
    "",
    "",
    "Wendigo",
  ],
  mY = new Set([v.AIR, v.WATER, v.LAVA, cY]);
[
  "grass",
  "dirt",
  "stone",
  "cobblestone",
  "planks",
  "log",
  "leaves",
  "sand",
  "bricks",
  "gravel",
  "hay_bale",
  "barrel",
  "chest",
  "bookshelf",
  "pumpkin",
  "furnace",
  "stone_bricks",
  "snow",
  "cactus",
  "military_chest",
  "wooden_table",
  "tnt",
  "dynamite",
  "oak_log",
  "birch_log",
  "mossy_cobblestone",
]
  .map((s) => le.find((e) => e.name === s)?.id)
  .filter((s) => s !== void 0 && s > 0);
const gY = (s) =>
    s
      .trim()
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[\s-]+/g, "_"),
  yY = new Map();
for (const [s, e] of Object.entries(w)) yY.set(gY(s), e);
function vY(s, e = !1) {
  return s.kind === la.BLOCK
    ? ((e ? le[s.id]?.labelEn : le[s.id]?.label) ?? le[s.id]?.name ?? "?")
    : s.kind === la.ITEM
      ? ((e ? od[s.id] : N0[s.id]) ?? N0[s.id] ?? String(s.id))
      : s.kind === la.ANIMAL
        ? ((e ? pY : fY)[s.id] ?? "?")
        : e
          ? "yourself"
          : "себя";
}
function bY() {
  const s = Object.keys(uY).filter((i) => /^[a-z]/.test(i)),
    e = le.filter((i) => i.id > 0 && !mY.has(i.id)).map((i) => i.name),
    t = Object.keys(w).map((i) => i.toLowerCase());
  return ["random", "off", ...s, ...e, ...t];
}
function RO(s) {
  const e = [],
    t = (l, c, h = 0, d = 0, u = 0) => {
      l.translate(h, d, u);
      const f = new Ge(c),
        p = new Float32Array(l.getAttribute("position").count * 3);
      for (let m = 0; m < p.length; m += 3)
        ((p[m] = f.r), (p[m + 1] = f.g), (p[m + 2] = f.b));
      (l.setAttribute("color", new qt(p, 3)), e.push(l));
    },
    i = new Map([
      [w.APPLE, 12399664],
      [w.ORANGE, 15898146],
      [w.COCONUT, 7819574],
      [w.POTATO, 12096857],
      [w.BAKED_POTATO, 9527358],
      [w.EGG, 15655365],
    ]),
    n = new Map([
      [w.IRON_INGOT, 11385026],
      [w.GOLD_INGOT, 15316035],
      [w.DIAMOND_INGOT, 6739684],
      [w.TITANIUM_INGOT, 9673913],
    ]),
    o = new Map([
      [w.BUCKET, 3423555],
      [w.WATER_BUCKET, 3640761],
      [w.LAVA_BUCKET, 16283938],
      [w.MILK_BUCKET, 15788760],
      [w.CAMEL_MILK_BUCKET, 15195068],
    ]);
  let a = !1;
  if (s === w.MILITARY_MEDKIT) {
    const l = (c, h, d, u, f = 0, p = 0, m = 0) =>
      t(new kt(c, h, d), u, f, p, m);
    (l(0.42, 0.28, 0.24, 5136963), l(0.43, 0.055, 0.25, 7570010, 0, 0.12));
    for (const c of [-0.16, 0.16]) {
      (l(0.035, 0.285, 0.254, 2702640, c),
        l(0.042, 0.045, 0.015, 12891778, c, 0.04, 0.135));
      for (const h of [-0.12, 0.12]) l(0.055, 0.04, 0.265, 2504492, c, h);
    }
    for (const c of [-0.126, 0.126])
      (l(0.145, 0.135, 0.012, 14673095, 0, -0.015, c),
        l(0.034, 0.105, 0.014, 11878453, 0, -0.015, c * 1.065),
        l(0.105, 0.034, 0.014, 11878453, 0, -0.015, c * 1.065));
    (l(0.022, 0.065, 0.032, 2701101, -0.065, 0.182),
      l(0.022, 0.065, 0.032, 2701101, 0.065, 0.182),
      l(0.15, 0.024, 0.032, 10266492, 0, 0.21),
      (a = !0));
  } else if (i.has(s)) {
    const l = new ws(0.17, 12, 8);
    if (
      (l.scale(
        1,
        s === w.EGG ? 1.3 : 0.9,
        s === w.POTATO || s === w.BAKED_POTATO ? 0.75 : 1,
      ),
      t(l, i.get(s)),
      s === w.APPLE || s === w.ORANGE)
    ) {
      t(new Tt(0.013, 0.017, 0.065, 6), 6574131, 0, 0.17);
      const c = new ws(0.045, 6, 4);
      (c.scale(1, 0.18, 0.45), c.rotateZ(0.3), t(c, 5540164, 0.036, 0.178));
    }
  } else if (n.has(s)) {
    const l = new Tt(0.14, 0.19, 0.12, 4);
    (l.rotateY(Math.PI / 4),
      l.scale(1.6, 1, 0.8),
      t(l, n.get(s)),
      t(
        new kt(0.105, 0.002, 0.045),
        new Ge(n.get(s)).multiplyScalar(0.72).getHex(),
        0,
        0.061,
      ),
      (a = !0));
  } else if (o.has(s)) {
    (t(new Tt(0.15, 0.115, 0.27, 12, 1, !0), 10135730),
      t(new Tt(0.115, 0.115, 0.018, 12), 7569803, 0, -0.13));
    const l = new Gn(0.15, 0.012, 4, 12);
    (l.rotateX(Math.PI / 2),
      t(l, 13884642, 0, 0.135),
      s !== w.BUCKET && t(new Tt(0.137, 0.137, 0.008, 12), o.get(s), 0, 0.108));
    const c = new Gn(0.157, 0.009, 4, 12, Math.PI);
    (t(c, 5858669, 0, 0.12), (a = !0));
  } else return null;
  const r = Eo(e, !1);
  for (const l of e) l.dispose();
  return (
    r.computeBoundingSphere(),
    new Q(
      r,
      new oo({
        vertexColors: !0,
        shininess: a ? 38 : 9,
        specular: a ? 6648187 : 1513239,
        side: o.has(s) ? Mi : Hc,
      }),
    )
  );
}
function kO(s, e, t, i) {
  const n = [];
  return (
    (s(e - 1, t, i) === v.CHAIN || s(e + 1, t, i) === v.CHAIN) && n.push(0),
    (s(e, t - 1, i) === v.CHAIN || s(e, t + 1, i) === v.CHAIN) && n.push(1),
    (s(e, t, i - 1) === v.CHAIN || s(e, t, i + 1) === v.CHAIN) && n.push(2),
    n.length ? n : [1]
  );
}
const Ob = new Map();
function CO(s) {
  if (Ob.has(s)) return Ob.get(s);
  const e = [],
    t = 12,
    i = 4,
    n = (o) =>
      s === 0 ? [o[1], -o[0], o[2]] : s === 2 ? [o[0], -o[2], o[1]] : o;
  for (let o = 0; o < 4; o++) {
    const a = (r, l) => {
      const c = (r / t) * Math.PI * 2,
        h = (l / i) * Math.PI * 2,
        d = Math.cos(c) / 0.105,
        u = Math.sin(c) / 0.17,
        f = Math.hypot(d, u),
        p = 0.105 * Math.cos(c) + (0.027 * Math.cos(h) * d) / f,
        m = 0.17 * Math.sin(c) + (0.027 * Math.cos(h) * u) / f,
        g = 0.027 * Math.sin(h),
        y = n(o % 2 ? [g, m, -p] : [p, m, g]);
      return ((y[s] += (o + 0.5) / 4 - 0.5), y.map((b) => b + 0.5));
    };
    for (let r = 0; r < t; r++)
      for (let l = 0; l < i; l++) {
        const c = [a(r, l), a(r + 1, l), a(r, l + 1), a(r + 1, l + 1)],
          h = c[1].map((p, m) => p - c[0][m]),
          d = c[2].map((p, m) => p - c[0][m]),
          u = [
            h[1] * d[2] - h[2] * d[1],
            h[2] * d[0] - h[0] * d[2],
            h[0] * d[1] - h[1] * d[0],
          ],
          f = Math.hypot(...u);
        (u.forEach((p, m) => (u[m] = p / f)), e.push({ points: c, normal: u }));
      }
  }
  return (Ob.set(s, e), e);
}
function GA(s = !1) {
  const e = new re(),
    t = [],
    i = (a, r, l, c, h, d, u) => {
      const f = new kt(c, h, d);
      f.translate(a, r, l);
      const p = new Ge(u),
        m = new Float32Array(f.attributes.position.count * 3);
      for (let g = 0; g < m.length; g += 3)
        ((m[g] = p.r), (m[g + 1] = p.g), (m[g + 2] = p.b));
      (f.setAttribute("color", new qt(m, 3)), t.push(f));
    };
  if (s)
    (i(0, 0, 0, 0.25, 0.38, 0.12, 3227203),
      i(0, 0.055, 0.067, 0.19, 0.12, 0.02, 1058082),
      i(-0.018, 0.058, 0.08, 0.11, 0.018, 0.008, 10284204),
      i(0.065, -0.1, 0.085, 0.065, 0.065, 0.03, 14373695),
      i(-0.075, -0.1, 0.075, 0.04, 0.05, 0.02, 12694936),
      i(0.08, 0.32, 0, 0.018, 0.3, 0.018, 2633009));
  else {
    (i(-0.095, 0, 0, 0.18, 0.28, 0.1, 10851940),
      i(0.095, 0, 0, 0.18, 0.28, 0.1, 11707511));
    for (const a of [-0.12, 0.12]) i(a, 0, 0.008, 0.035, 0.295, 0.116, 4278586);
    (i(0, 0.012, 0.067, 0.16, 0.17, 0.035, 2703159),
      i(0, 0.037, 0.091, 0.112, 0.045, 0.012, 1516323),
      i(-0.027, 0.04, 0.1, 0.052, 0.009, 0.008, 12049825),
      i(0.067, 0.106, 0.072, 0.015, 0.065, 0.015, 12931387),
      i(0.043, 0.126, 0.073, 0.055, 0.012, 0.014, 12931387),
      i(-0.06, -0.078, 0.077, 0.012, 0.06, 0.013, 14072408),
      i(-0.024, -0.106, 0.077, 0.08, 0.012, 0.013, 14072408));
    for (const a of [-0.064, 0.064])
      for (const r of [-0.055, 0.08])
        i(a, r, 0.09, 0.011, 0.011, 0.007, 11055521);
    i(0, -0.042, 0.094, 0.021, 0.014, 0.01, 16737865);
  }
  const n = Eo(t);
  for (const a of t) a.dispose();
  const o = new Q(n, new Pi({ vertexColors: !0 }));
  return ((o.castShadow = !0), e.add(o), e);
}
const sR = new Map();
