// index-BeUlFSPp 145 — math
// Lines 81353-81692 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function _N(s, e, t, i, n, o, a, r = "WORLD BOUNDARY") {
  if (!a?.radius) return;
  const l = e / 2 + (a.centerX - a.radius - i.x) * n,
    c = t / 2 + (a.centerZ - a.radius - i.z) * o,
    h = a.radius * 2 * n,
    d = a.radius * 2 * o;
  if (
    (s.save(),
    s.beginPath(),
    s.rect(0, 0, e, t),
    s.clip(),
    s.beginPath(),
    s.rect(0, 0, e, t),
    s.rect(l, c, h, d),
    (s.fillStyle = "rgba(55, 12, 18, 0.55)"),
    s.fill("evenodd"),
    s.setLineDash([]),
    (s.lineJoin = "miter"),
    (s.strokeStyle = "#14090d"),
    (s.lineWidth = 5),
    s.strokeRect(l, c, h, d),
    (s.strokeStyle = "#ff765b"),
    (s.lineWidth = 2.5),
    s.strokeRect(l, c, h, d),
    e >= 300)
  ) {
    const u = c >= 0 && c <= t,
      f = c + d >= 0 && c + d <= t,
      p = l >= 0 && l <= e,
      m = l + h >= 0 && l + h <= e;
    if ((u || f || p || m) && l < e && l + h > 0 && c < t && c + d > 0) {
      ((s.font = "bold 11px monospace"),
        (s.textAlign = "left"),
        (s.textBaseline = "top"));
      const g = `${r} · ±${a.radius}`,
        y = s.measureText(g).width,
        b = Math.max(
          7,
          Math.min(e - y - 12, (p ? l : m ? l + h - y - 12 : l) + 8),
        ),
        S = Math.max(7, Math.min(t - 23, u ? c + 7 : f ? c + d - 22 : 9));
      ((s.fillStyle = "#14090de6"),
        s.fillRect(b - 4, S - 3, y + 8, 18),
        (s.fillStyle = "#ffad97"),
        s.fillText(g, b, S));
    }
  }
  s.restore();
}
function oie(s, e, t) {
  return (
    s > 0 &&
    Number.isFinite(e) &&
    e >= s / 1600 &&
    Number.isFinite(t) &&
    t * e >= s * 0.025
  );
}
const aie = {
  spawn: { color: "#7dffb0", glyph: "★", priority: 100 },
  village: { color: "#9fe08a", glyph: "⌂", priority: 60 },
  fortress: { color: "#ffb067", glyph: "♜", priority: 55 },
  airbase: { color: "#ffd36b", glyph: "✈", priority: 54 },
  naval: { color: "#7cc8ff", glyph: "⚓", priority: 53 },
  base: { color: "#ff9d5c", glyph: "✦", priority: 52 },
  site: { color: "#e8e1cf", glyph: "◆", priority: 40 },
  landmark: { color: "#f3e2a6", glyph: "▲", priority: 30 },
};
function rie(s) {
  switch (s) {
    case 0:
      return "village";
    case 1:
      return "base";
    case 2:
      return "airbase";
    case 3:
      return "naval";
    case 4:
      return "fortress";
    default:
      return "site";
  }
}
function Ik(s, e, t, i, n, o) {
  if (!o.length || n < e / 1600) return;
  const a = Math.max(9, Math.round(e * 0.024)),
    r = [],
    l = o
      .filter((c) => oie(e, n, c.radius))
      .map((c) => ({
        label: c,
        style: aie[c.kind],
        sx: e / 2 + (c.x - i.x) * n,
        sy: t / 2 + (c.z - i.z) * n,
      }))
      .filter(
        ({ sx: c, sy: h }) => c > -80 && c < e + 80 && h > -40 && h < t + 40,
      )
      .sort(
        (c, h) =>
          h.style.priority +
          h.label.radius * n * 0.4 -
          (c.style.priority + c.label.radius * n * 0.4),
      );
  (s.save(), (s.textBaseline = "middle"), (s.lineJoin = "round"));
  for (const { label: c, style: h, sx: d, sy: u } of l) {
    const f = c.kind === "spawn" || c.radius * n > 26,
      p = `${f ? 700 : 600} ${f ? a + 1 : a}px system-ui, "Segoe UI", Roboto, sans-serif`;
    s.font = p;
    const m = c.text.length > 34 ? `${c.text.slice(0, 32)}…` : c.text,
      g = s.measureText(m).width,
      y = a * 1.15,
      b = g + y + 10,
      S = a + 8,
      M = Math.max(2, Math.min(e - b - 2, d - b / 2)),
      E = Math.max(
        2,
        Math.min(t - S - 2, u - S - Math.min(14, c.radius * n * 0.35)),
      );
    if (
      r.some(
        ([T, x, R, _]) =>
          M < T + R + 3 && M + b + 3 > T && E < x + _ + 2 && E + S + 2 > x,
      )
    )
      continue;
    (r.push([M, E, b, S]),
      (s.strokeStyle = "rgba(6,14,22,.85)"),
      (s.lineWidth = 3),
      s.beginPath(),
      s.moveTo(d, E + S),
      s.lineTo(d, Math.max(E + S, u - 2)),
      s.stroke(),
      (s.strokeStyle = h.color),
      (s.lineWidth = 1),
      s.beginPath(),
      s.moveTo(d, E + S),
      s.lineTo(d, Math.max(E + S, u - 2)),
      s.stroke());
    const A = S / 2;
    (s.beginPath(),
      s.moveTo(M + A, E),
      s.lineTo(M + b - A, E),
      s.arc(M + b - A, E + A, A, -Math.PI / 2, Math.PI / 2),
      s.lineTo(M + A, E + S),
      s.arc(M + A, E + A, A, Math.PI / 2, Math.PI * 1.5),
      s.closePath(),
      (s.fillStyle =
        c.kind === "spawn" ? "rgba(6,40,26,.86)" : "rgba(8,16,26,.78)"),
      s.fill(),
      (s.strokeStyle = c.held ? "rgba(110,180,255,.95)" : `${h.color}aa`),
      (s.lineWidth = c.kind === "spawn" ? 1.6 : 1),
      s.stroke(),
      (s.fillStyle = c.held ? "#8cc4ff" : h.color),
      (s.font = `700 ${a}px system-ui, sans-serif`),
      (s.textAlign = "center"),
      s.fillText(h.glyph, M + 5 + y / 2, E + S / 2 + 0.5),
      (s.font = p),
      (s.textAlign = "left"),
      (s.fillStyle = "#f4f7fb"),
      s.fillText(m, M + 5 + y, E + S / 2 + 0.5));
  }
  s.restore();
}
const lie = {
    [w.GLOCK]: 1250,
    [w.AK47]: 1950,
    [w.DEAGLE]: 900,
    [w.M4A1]: 2100,
    [w.VECTOR]: 1700,
    [w.MINIGUN]: 1200,
    [w.SHOTGUN]: 850,
    [w.AWP]: 640,
    [w.RPG]: 320,
    [w.GRENADE_LAUNCHER]: 380,
    [w.AXE]: 1100,
    [w.WELDER]: 1250,
    [w.DRILL_METAL]: 700,
    [w.DRILL_DIAMOND]: 1800,
    [w.DRILL_TITANIUM]: 3600,
    [w.DRILL_COMPOSITE]: 7e3,
    [w.DRILL_LASER]: 14e3,
    [w.LUNAR_DRILL]: 24e3,
    [w.SHEARS]: 300,
    [w.COMBAT_KNIFE]: 160,
    [w.FISHING_ROD]: 320,
    [w.CHAINSAW_BASIC]: 630,
    [w.CHAINSAW_PRO]: 1260,
    [w.CHAINSAW_INDUSTRIAL]: 2240,
    [w.HELMET_1]: 240,
    [w.HELMET_2]: 480,
    [w.HELMET_3]: 840,
    [w.HELMET_4]: 1500,
    [w.VEST_4]: 3200,
    [w.PANTS_4]: 2150,
    [w.BOOTS_4]: 1600,
    [w.SPACE_HELMET]: 1800,
    [w.VEST_1]: 500,
    [w.VEST_2]: 1e3,
    [w.VEST_3]: 1800,
    [w.PANTS_1]: 360,
    [w.PANTS_2]: 720,
    [w.PANTS_3]: 1200,
    [w.BOOTS_1]: 260,
    [w.BOOTS_2]: 520,
    [w.BOOTS_3]: 900,
  },
  Uy = 650;
function Kr(s) {
  return lie[ai(s) || s] ?? 0;
}
function G1(s) {
  return Kr(s);
}
function Dc(s) {
  return Wc(s) ? Sr(s) : so(s).suppressor ? Uy : 0;
}
function tE(s, e) {
  const t = Kr(s);
  return t <= 0 ? 1 : Math.max(0, Math.min(1, (e === void 0 ? t : e) / t));
}
function kw(s, e) {
  return Kr(s) <= 0 ? 1 : 0.1 + tE(s, e) * 0.9;
}
function cie(s, e) {
  const t = [];
  return (
    s.forEach((i, n) => {
      const o = ai(i.id) || i.id;
      if (
        i.count <= 0 ||
        (e === 0 ? n < 36 || n >= 40 || !O0(i.id) : n >= 36 || !G0[o])
      )
        return;
      const a = Kr(i.id);
      if (!a) return;
      const r = Math.max(0, a - Math.max(0, i.durability ?? a)),
        l = e === 1 ? Dc(i.id) : 0,
        c = Math.max(0, l - Math.max(0, i.suppressorDurability ?? l));
      if (!r && !c) return;
      const h = Math.max(
        1,
        Math.ceil(
          eP * (($c(o) * r) / a + (l ? ($c(w.SUPPRESSOR) * c) / l : 0)),
        ),
      );
      t.push({
        index: n,
        durability: a,
        suppressorDurability: l || void 0,
        cost: h,
      });
    }),
    { repairs: t, count: t.length, cost: t.reduce((i, n) => i + n.cost, 0) }
  );
}
const iE = [
    "property",
    "block",
    "blueprint",
    "nature",
    "food",
    "resource",
    "weapon",
    "ammo",
    "explosive",
    "tool",
    "medical",
    "armor",
    "vehicle",
    "unit",
  ],
  Pk = [
    [w.AXE, w.WELDER, w.SHEARS, w.FISHING_ROD],
    [w.BUCKET, w.WATER_BUCKET, w.LAVA_BUCKET],
    [
      w.DRILL_METAL,
      w.DRILL_DIAMOND,
      w.DRILL_TITANIUM,
      w.DRILL_COMPOSITE,
      w.DRILL_LASER,
      w.LUNAR_DRILL,
    ],
    [w.CHAINSAW_BASIC, w.CHAINSAW_PRO, w.CHAINSAW_INDUSTRIAL],
  ];
function Ok(s) {
  const { id: e, category: t } = s;
  if (t === "armor") {
    if (e === w.SPACE_HELMET) return $r.length;
    const i = Ia(e);
    return i ? $r.indexOf(i.slot) : $r.length + 1;
  }
  if (t === "weapon") {
    const i = Sd[e];
    return i ? 1 + ad.indexOf(i) : 0;
  }
  if (t === "tool") {
    const i = Pk.findIndex((n) => n.includes(e));
    return i < 0 ? Pk.length : i;
  }
  return t === "block" ? (uA(e) ? 1 : zc(e) ? 2 : Io(e) ? 3 : 0) : 0;
}
function hie(s, e, t, i) {
  const n = new Intl.Collator(i, { numeric: !0 });
  return [...s].sort((o, a) => {
    const r = iE.indexOf(o.category) - iE.indexOf(a.category);
    if (r) return r;
    const l = () => n.compare(t(o.id), t(a.id)) || o.id - a.id;
    if (e === "name") return l();
    if (e === "price") return o.price - a.price || l();
    const c = Ok(o) - Ok(a);
    if (c) return c;
    const h = Ia(o.id),
      d = Ia(a.id);
    return h && d
      ? h.level - d.level || l()
      : o.category === "block" || o.category === "nature"
        ? l()
        : o.price - a.price || l();
  });
}
const die = (s) =>
  Object.assign(s, {
    id: 0,
    count: 0,
    durability: 0,
    suppressorDurability: 0,
    magazine: void 0,
    cosmetic: void 0,
  });
function $h(s, e) {
  return (
    s.cosmetic?.uid === e.cosmetic?.uid &&
    s.id === e.id &&
    (s.durability ?? 0) === (e.durability ?? 0) &&
    (s.suppressorDurability ?? 0) === (e.suppressorDurability ?? 0) &&
    (!(ai(s.id) || O0(s.id)) || (s.magazine ?? 65535) === (e.magazine ?? 65535))
  );
}
