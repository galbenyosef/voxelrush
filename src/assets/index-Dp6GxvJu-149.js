// index-Dp6GxvJu 149 — math
// Lines 90811-90982 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function kZ(n) {
  var h;
  if (
    ((n.style.left = n.style.top = ""),
    !document.body.classList.contains("mobile"))
  )
    return;
  const e = [
      ...document.querySelectorAll(
        "#mobile-controls .mobile-action:not(.hidden), #mobile-controls .mobile-action:not(.hidden) > .m-cap, #mobile-stick-zone, #minimap",
      ),
    ]
      .map((d) => d.getBoundingClientRect())
      .filter((d) => d.width > 0 && d.height > 0),
    t = ((h = n.offsetParent) == null ? void 0 : h.getBoundingClientRect()) ?? {
      left: 0,
      top: 0,
    },
    i = n.offsetWidth,
    s = n.offsetHeight,
    o = innerWidth,
    a = innerHeight,
    r = 8,
    l = (d, u) =>
      u >= r &&
      u + s <= a - r &&
      d - i / 2 >= r &&
      d + i / 2 <= o - r &&
      e.every(
        (f) =>
          d + i / 2 < f.left - 4 ||
          d - i / 2 > f.right + 4 ||
          u + s < f.top - 4 ||
          u > f.bottom + 4,
      ),
    c = t.top + n.offsetTop;
  for (const d of [c, a / 2 + 40, a / 2 - s - 40, a / 2 + 110, a / 2 - s - 110])
    for (const u of [o / 2, r + i / 2, o - r - i / 2])
      if (l(u, d)) {
        ((n.style.left = `${u - t.left}px`), (n.style.top = `${d - t.top}px`));
        return;
      }
}
const kM = 32,
  wb = 250,
  LZ = 10,
  LM = (n) => n.radius ?? kM,
  Ad = (n) => {
    const e = LM(n);
    return { x1: n.x - e, z1: n.z - e, x2: n.x + e + 1, z2: n.z + e + 1 };
  },
  IZ = (n, e, t) => {
    const i = Ad(n);
    return e >= i.x1 && e < i.x2 && t >= i.z1 && t < i.z2;
  };
class PZ {
  constructor() {
    w(this, "claims", []);
    w(this, "buckets", new Map());
    w(this, "ids", new Map());
  }
  key(e, t, i) {
    return `${e}:${Math.floor(t / 64)},${Math.floor(i / 64)}`;
  }
  set(e) {
    ((this.claims = [...e].sort((t, i) => t.id - i.id)),
      this.buckets.clear(),
      this.ids.clear());
    for (const t of this.claims) {
      this.ids.set(t.id, t);
      const i = Ad(t);
      for (let s = Math.floor(i.x1 / 64); s <= Math.floor((i.x2 - 1) / 64); s++)
        for (
          let o = Math.floor(i.z1 / 64);
          o <= Math.floor((i.z2 - 1) / 64);
          o++
        ) {
          const a = `${t.planet}:${s},${o}`,
            r = this.buckets.get(a) ?? [];
          (r.push(t), this.buckets.set(a, r));
        }
    }
  }
  get(e) {
    return this.ids.get(e);
  }
  at(e, t, i) {
    var s;
    return (s = this.buckets.get(this.key(e, t, i))) == null
      ? void 0
      : s.find((o) => IZ(o, t, i));
  }
  totem(e, t, i, s) {
    var o;
    return (o = this.buckets.get(this.key(e, t, s))) == null
      ? void 0
      : o.find((a) => a.x === t && a.y === i && a.z === s);
  }
  intersects(e, t) {
    for (let i = Math.floor(t.x1 / 64); i <= Math.floor((t.x2 - 1) / 64); i++)
      for (let s = Math.floor(t.z1 / 64); s <= Math.floor((t.z2 - 1) / 64); s++)
        for (const o of this.buckets.get(`${e}:${i},${s}`) ?? []) {
          const a = Ad(o);
          if (t.x1 < a.x2 && t.x2 > a.x1 && t.z1 < a.z2 && t.z2 > a.z1)
            return !0;
        }
    return !1;
  }
  nearby(e) {
    const t = Ad(e),
      i = new Set();
    for (let s = Math.floor(t.x1 / 64); s <= Math.floor((t.x2 - 1) / 64); s++)
      for (let o = Math.floor(t.z1 / 64); o <= Math.floor((t.z2 - 1) / 64); o++)
        for (const a of this.buckets.get(`${e.planet}:${s},${o}`) ?? [])
          a.id < e.id && i.add(a);
    return [...i].sort((s, o) => s.id - o.id);
  }
  effective(e) {
    let t = [Ad(e)];
    for (const i of this.nearby(e)) t = t.flatMap((s) => OZ(s, Ad(i)));
    return t;
  }
}
function OZ(n, e) {
  const t = Math.max(n.x1, e.x1),
    i = Math.max(n.z1, e.z1),
    s = Math.min(n.x2, e.x2),
    o = Math.min(n.z2, e.z2);
  return t >= s || i >= o
    ? [n]
    : [
        { x1: n.x1, z1: n.z1, x2: t, z2: n.z2 },
        { x1: s, z1: n.z1, x2: n.x2, z2: n.z2 },
        { x1: t, z1: n.z1, x2: s, z2: i },
        { x1: t, z1: o, x2: s, z2: n.z2 },
      ].filter((a) => a.x1 < a.x2 && a.z1 < a.z2);
}
function NZ(n) {
  const e = new Map(),
    t = (s, o, a, r) => {
      const l = `${s}:${o}`,
        c = e.get(l) ?? { axis: s, fixed: o, points: [] };
      (c.points.push(a, r), e.set(l, c));
    };
  for (const s of n)
    (t("x", s.x1, s.z1, s.z2),
      t("x", s.x2, s.z1, s.z2),
      t("z", s.z1, s.x1, s.x2),
      t("z", s.z2, s.x1, s.x2));
  const i = [];
  for (const s of e.values()) {
    s.points.sort((r, l) => r - l);
    let o = !1,
      a = 0;
    for (let r = 0; r < s.points.length;) {
      const l = s.points[r];
      let c = 0;
      for (; s.points[r] === l;) (c++, r++);
      c % 2 &&
        (o
          ? a < l &&
            i.push(
              s.axis === "x"
                ? [s.fixed, a, s.fixed, l]
                : [a, s.fixed, l, s.fixed],
            )
          : (a = l),
        (o = !o));
    }
  }
  return i;
}
