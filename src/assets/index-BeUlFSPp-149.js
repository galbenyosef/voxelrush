// index-BeUlFSPp 149 — math
// Lines 82712-83045 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
let Su;
function gie(s) {
  if (!Su) {
    ((Su = document.createElement("canvas")), (Su.width = Su.height = 40));
    const e = Su.getContext("2d"),
      t = ["black_clay", "polished_stone", "yellow_clay", "cyan_clay"].map(
        (l) => le.find((c) => c.name === l),
      ),
      i = new Map(t.map((l) => [l.tex[0], l.color])),
      n = t[3].tex[0],
      o = ([l, c, h]) => [20 + (l - h) * 20, 31 + (l + h - 1) * 5.5 - c * 26],
      a = [],
      r = (l, c, h) => {
        const d = i.get(c),
          u = c === n ? 1.4 : 1,
          f = [(d >> 16) & 255, (d >> 8) & 255, d & 255].map((m) =>
            Math.min(255, Math.round(m * h * u)),
          ),
          p =
            l.reduce((m, [g, y, b]) => m + g + b + (y * 11) / 26, 0) / l.length;
        a.push({ points: l.map(o), depth: p, color: `rgb(${f.join(",")})` });
      };
    for (const {
      box: [l, c, h, d, u, f],
      tile: p,
    } of Of(v.OWNERSHIP_TOTEM))
      (r(
        [
          [d, c, h],
          [d, c, f],
          [d, u, f],
          [d, u, h],
        ],
        p,
        0.8,
      ),
        r(
          [
            [l, c, f],
            [d, c, f],
            [d, u, f],
            [l, u, f],
          ],
          p,
          1,
        ),
        r(
          [
            [l, u, h],
            [d, u, h],
            [d, u, f],
            [l, u, f],
          ],
          p,
          1.2,
        ));
    ((e.fillStyle = "rgba(0,0,0,.2)"),
      e.beginPath(),
      e.ellipse(20, 36, 15, 2, 0, 0, Math.PI * 2),
      e.fill());
    for (const { points: l, color: c } of a.sort((h, d) => h.depth - d.depth))
      (e.beginPath(),
        l.forEach(([h, d], u) => (u ? e.lineTo(h, d) : e.moveTo(h, d))),
        e.closePath(),
        (e.fillStyle = c),
        e.fill());
  }
  s.drawImage(Su, 0, 0);
}
let po, RN;
function Yr() {
  (clearTimeout(RN), po && ((po.hidden = !0), po.classList.add("hidden")));
}
function kg(s, e, t) {
  if (!Y.itemTooltips || !s.dataset.itemInfo || !s.isConnected) {
    Yr();
    return;
  }
  (po ||
    ((po = document.createElement("div")),
    (po.id = "item-tooltip"),
    (po.role = "tooltip"),
    Object.assign(po.style, {
      position: "fixed",
      zIndex: "10000",
      pointerEvents: "none",
      whiteSpace: "pre-line",
      maxWidth: "min(320px, calc(100vw - 24px))",
      padding: "10px 13px",
      border: "1px solid #768899",
      borderRadius: "7px",
      background: "#101824f5",
      color: "#eef4ff",
      font: "13px/1.5 monospace",
      boxShadow: "0 5px 22px #0008",
    }),
    document.body.append(po),
    document.addEventListener("keydown", Yr),
    document.addEventListener("scroll", Yr, !0)),
    (po.style.color = s.style.getPropertyValue("--skin-color") || "#eef4ff"),
    (po.textContent = [s.dataset.itemInfo, s.dataset.itemSale].filter(Boolean)
      .join(`
`)),
    (po.hidden = !1),
    po.classList.remove("hidden"),
    (po.style.left = `${Math.max(8, Math.min(e + 14, innerWidth - po.offsetWidth - 8))}px`),
    (po.style.top = `${Math.max(8, Math.min(t + 18, innerHeight - po.offsetHeight - 8))}px`));
}
function yie(s) {
  ((s.tabIndex = 0),
    s.addEventListener("pointerenter", (e) => {
      e.pointerType !== "touch" && kg(s, e.clientX, e.clientY);
    }),
    s.addEventListener("pointermove", (e) => {
      e.pointerType !== "touch" && kg(s, e.clientX, e.clientY);
    }),
    s.addEventListener("pointerleave", Yr),
    s.addEventListener("pointerdown", (e) => {
      (Yr(), e.pointerType === "touch" && kg(s, e.clientX, e.clientY - 95));
    }),
    s.addEventListener("pointerup", (e) => {
      e.pointerType === "touch" && (RN = setTimeout(Yr, 2200));
    }),
    s.addEventListener("pointercancel", Yr),
    s.addEventListener("focus", () => {
      const e = s.getBoundingClientRect();
      kg(s, e.left, e.bottom);
    }),
    s.addEventListener("blur", Yr));
}
const nE = 32,
  Cw = 250,
  oE = 20,
  aE = (s) => s.radius ?? nE,
  Bu = (s) => {
    const e = aE(s);
    return { x1: s.x - e, z1: s.z - e, x2: s.x + e + 1, z2: s.z + e + 1 };
  },
  vie = (s, e, t) => {
    const i = Bu(s);
    return e >= i.x1 && e < i.x2 && t >= i.z1 && t < i.z2;
  };
class bie {
  claims = [];
  buckets = new Map();
  ids = new Map();
  key(e, t, i) {
    return `${e}:${Math.floor(t / 64)},${Math.floor(i / 64)}`;
  }
  set(e) {
    ((this.claims = [...e].sort((t, i) => t.id - i.id)),
      this.buckets.clear(),
      this.ids.clear());
    for (const t of this.claims) {
      this.ids.set(t.id, t);
      const i = Bu(t);
      for (let n = Math.floor(i.x1 / 64); n <= Math.floor((i.x2 - 1) / 64); n++)
        for (
          let o = Math.floor(i.z1 / 64);
          o <= Math.floor((i.z2 - 1) / 64);
          o++
        ) {
          const a = `${t.planet}:${n},${o}`,
            r = this.buckets.get(a) ?? [];
          (r.push(t), this.buckets.set(a, r));
        }
    }
  }
  get(e) {
    return this.ids.get(e);
  }
  at(e, t, i) {
    return this.buckets.get(this.key(e, t, i))?.find((n) => vie(n, t, i));
  }
  totem(e, t, i, n) {
    return this.buckets
      .get(this.key(e, t, n))
      ?.find((o) => o.x === t && o.y === i && o.z === n);
  }
  intersects(e, t) {
    for (let i = Math.floor(t.x1 / 64); i <= Math.floor((t.x2 - 1) / 64); i++)
      for (let n = Math.floor(t.z1 / 64); n <= Math.floor((t.z2 - 1) / 64); n++)
        for (const o of this.buckets.get(`${e}:${i},${n}`) ?? []) {
          const a = Bu(o);
          if (t.x1 < a.x2 && t.x2 > a.x1 && t.z1 < a.z2 && t.z2 > a.z1)
            return !0;
        }
    return !1;
  }
  nearby(e) {
    const t = Bu(e),
      i = new Set();
    for (let n = Math.floor(t.x1 / 64); n <= Math.floor((t.x2 - 1) / 64); n++)
      for (let o = Math.floor(t.z1 / 64); o <= Math.floor((t.z2 - 1) / 64); o++)
        for (const a of this.buckets.get(`${e.planet}:${n},${o}`) ?? [])
          a.id < e.id && i.add(a);
    return [...i].sort((n, o) => n.id - o.id);
  }
  effective(e) {
    let t = [Bu(e)];
    for (const i of this.nearby(e)) t = t.flatMap((n) => wie(n, Bu(i)));
    return t;
  }
}
function wie(s, e) {
  const t = Math.max(s.x1, e.x1),
    i = Math.max(s.z1, e.z1),
    n = Math.min(s.x2, e.x2),
    o = Math.min(s.z2, e.z2);
  return t >= n || i >= o
    ? [s]
    : [
        { x1: s.x1, z1: s.z1, x2: t, z2: s.z2 },
        { x1: n, z1: s.z1, x2: s.x2, z2: s.z2 },
        { x1: t, z1: s.z1, x2: n, z2: i },
        { x1: t, z1: o, x2: n, z2: s.z2 },
      ].filter((a) => a.x1 < a.x2 && a.z1 < a.z2);
}
function Mie(s) {
  const e = new Map(),
    t = (n, o, a, r) => {
      const l = `${n}:${o}`,
        c = e.get(l) ?? { axis: n, fixed: o, points: [] };
      (c.points.push(a, r), e.set(l, c));
    };
  for (const n of s)
    (t("x", n.x1, n.z1, n.z2),
      t("x", n.x2, n.z1, n.z2),
      t("z", n.z1, n.x1, n.x2),
      t("z", n.z2, n.x1, n.x2));
  const i = [];
  for (const n of e.values()) {
    n.points.sort((r, l) => r - l);
    let o = !1,
      a = 0;
    for (let r = 0; r < n.points.length;) {
      const l = n.points[r];
      let c = 0;
      for (; n.points[r] === l;) (c++, r++);
      c % 2 &&
        (o
          ? a < l &&
            i.push(
              n.axis === "x"
                ? [n.fixed, a, n.fixed, l]
                : [a, n.fixed, l, n.fixed],
            )
          : (a = l),
        (o = !o));
    }
  }
  return i;
}
function Sie(s) {
  const e = s;
  return (
    !!e &&
    Number.isSafeInteger(e.radius) &&
    e.radius >= 0 &&
    e.radius <= 1e6 &&
    Number.isFinite(e.centerX) &&
    Number.isFinite(e.centerZ) &&
    Math.abs(e.centerX) <= 1e6 &&
    Math.abs(e.centerZ) <= 1e6
  );
}
function HT(s, e, t, i = 0) {
  return (
    Number.isFinite(e) &&
    Number.isFinite(t) &&
    (s.radius === 0 ||
      Math.max(Math.abs(e - s.centerX), Math.abs(t - s.centerZ)) <=
        Math.max(0, s.radius - i))
  );
}
function Lw(s, e, t, i) {
  return (
    s.radius === 0 ||
    (e + i > s.centerX - s.radius &&
      e < s.centerX + s.radius &&
      t + i > s.centerZ - s.radius &&
      t < s.centerZ + s.radius)
  );
}
const kN = 16384,
  BT = (s) =>
    s === w.AMMO_762_HE || s === w.AMMO_338_HE || s === w.AMMO_SHELL_HE,
  CN = (s) => s === w.ROCKET_GUIDED || BT(s) || Object.values(G0).includes(s);
function _l(s) {
  const e = ai(s) || s;
  return e === w.RPG
    ? [w.ROCKET, w.ROCKET_GUIDED]
    : e === w.AK47
      ? [w.AMMO_762, w.AMMO_762_HE]
      : e === w.AWP
        ? [w.AMMO_338, w.AMMO_338_HE]
        : e === w.SHOTGUN
          ? [w.AMMO_SHELL, w.AMMO_SHELL_HE]
          : G0[s]
            ? [G0[s]]
            : [];
}
function W1(s, e) {
  const t = _l(s);
  return t[e !== void 0 && e !== 65535 && e & kN ? 1 : 0] ?? t[0] ?? 0;
}
function qv(s, e) {
  return s === void 0 || s === 65535 ? e : Math.min(e, Math.max(0, s & 16383));
}
function mf(s, e) {
  return (
    Math.max(0, Math.min(16383, Math.floor(s))) |
    (BT(e) || e === w.ROCKET_GUIDED ? kN : 0)
  );
}
function Nk(s, e, t) {
  const i = _l(s);
  return i.includes(e) && t(e) > 0 ? e : (i.find((n) => t(n) > 0) ?? 0);
}
const Eie = [
  w.GLOCK,
  w.DEAGLE,
  w.VECTOR,
  w.M4A1,
  w.AK47,
  w.MINIGUN,
  w.SHOTGUN,
  w.AWP,
  w.GRENADE_LAUNCHER,
  w.RPG,
];
function Aie(s) {
  return Eie.filter((e) => _l(e).includes(s));
}
