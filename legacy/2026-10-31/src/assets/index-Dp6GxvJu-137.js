// index-Dp6GxvJu 137 — fill
// Lines 85307-85585 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function DX(n) {
  const e = new NX(),
    t = (s, o) => (s < 0 || o < 0 || s >= Ii || o >= Ii ? 0 : n[o * Ii + s]);
  for (let s = 0; s < Ii; s++) {
    let o = 0;
    for (; o < Ii;) {
      const a = t(o, s);
      if (a <= 0) {
        o++;
        continue;
      }
      let r = o;
      for (; r + 1 < Ii && t(r + 1, s) === a;) r++;
      const { u0: l, u1: c, v0: h, v1: d } = gb(o, r, s, s),
        u = pd(o),
        f = pd(r + 1),
        p = md(s + 1),
        m = md(s);
      (e.quad(
        [
          [u, p, a],
          [f, p, a],
          [f, m, a],
          [u, m, a],
        ],
        [0, 0, 1],
        [
          [l, h],
          [c, h],
          [c, d],
          [l, d],
        ],
      ),
        e.quad(
          [
            [u, p, -a],
            [u, m, -a],
            [f, m, -a],
            [f, p, -a],
          ],
          [0, 0, -1],
          [
            [l, h],
            [l, d],
            [c, d],
            [c, h],
          ],
        ),
        (o = r + 1));
    }
  }
  const i = (s, o, a, r, l) => {
    const c =
      o > 0
        ? [
            [o, s],
            [-s, -o],
          ]
        : [[-s, s]];
    for (const [h, d] of c)
      e.quad([a(d, 0), a(h, 0), a(h, 1), a(d, 1)], r, [
        l(d, 0),
        l(h, 0),
        l(h, 1),
        l(d, 1),
      ]);
  };
  for (const s of [1, -1])
    for (let o = 0; o < Ii; o++) {
      let a = 0;
      for (; a < Ii;) {
        const r = t(o, a),
          l = t(o + s, a);
        if (r <= 0 || l >= r) {
          a++;
          continue;
        }
        let c = a;
        for (; c + 1 < Ii && t(o, c + 1) === r && t(o + s, c + 1) === l;) c++;
        const h = s > 0 ? pd(o + 1) : pd(o),
          d = md(c + 1),
          u = md(a),
          { u0: f, u1: p, v0: m, v1: y } = gb(o, o, a, c),
          g = (f + p) / 2;
        (i(
          r,
          l,
          (M, x) => [h, x ? u : d, s > 0 ? M : -M],
          [s, 0, 0],
          (M, x) => [g, x ? y : m],
        ),
          (a = c + 1));
      }
    }
  for (const s of [1, -1])
    for (let o = 0; o < Ii; o++) {
      let a = 0;
      for (; a < Ii;) {
        const r = t(a, o),
          l = t(a, o - s);
        if (r <= 0 || l >= r) {
          a++;
          continue;
        }
        let c = a;
        for (; c + 1 < Ii && t(c + 1, o) === r && t(c + 1, o - s) === l;) c++;
        const h = s > 0 ? md(o) : md(o + 1),
          d = pd(a),
          u = pd(c + 1),
          { u0: f, u1: p, v0: m, v1: y } = gb(a, c, o, o),
          g = (m + y) / 2;
        (i(
          r,
          l,
          (M, x) => [x ? d : u, h, s > 0 ? M : -M],
          [0, s, 0],
          (M, x) => [x ? f : p, g],
        ),
          (a = c + 1));
      }
    }
  return e.geometry();
}
function BX(n) {
  let e = mb.get(n);
  if (e) return e;
  const t = vk(n);
  if (t) return (mb.set(n, t), t);
  const i = document.createElement("canvas");
  i.width = i.height = Ii;
  const s = i.getContext("2d");
  Lo(s, n, null);
  const o = s.getImageData(0, 0, Ii, Ii),
    a = new Uint8Array(Ii * Ii);
  let r = 0;
  for (let u = 0; u < a.length; u++)
    o.data[u * 4 + 3] >= IX && ((a[u] = 1), r++);
  (PX(o, 4), s.putImageData(o, 0, 0));
  const l = new bi(i);
  ((l.colorSpace = vi), (l.magFilter = ji), (l.minFilter = Uo));
  const c =
      (n >= ITEM.SUPPRESSOR && n <= ITEM.EXT_MAG) ||
      new Set([ITEM.SHEARS, ITEM.SHARK_TOOTH, ITEM.RADIO_MODULE, ITEM.INTEL_TABLET]).has(n),
    h = new Us({
      map: l,
      shininess: c ? 38 : 6,
      specular: c ? 5857642 : 1118481,
    });
  let d;
  if (r < 4) d = new Ct(0.22, 0.22, 0.22);
  else {
    const u = OX(a);
    let f = 0;
    for (let y = 0; y < u.length; y++) f = Math.max(f, u[y]);
    f = Math.min(f, kX);
    const p = wo(n) || n === ITEM.MONEY || n === ITEM.BANDAGE,
      m = new Float32Array(Ii * Ii);
    for (let y = 0; y < m.length; y++) {
      if (!u[y]) continue;
      const g = Math.min(u[y], f),
        b = Math.min(p ? 0.018 : LX, z4 * Math.sqrt(g * (2 * f - g)));
      m[y] = Math.max(pb, Math.round(b / pb) * pb);
    }
    d = DX(m);
  }
  return ((e = new le(d, h)), mb.set(n, e), e);
}
function p1(n, e = 1) {
  const t = BX(n).clone();
  return (e !== 1 && t.scale.setScalar(e), t);
}
const q2 = 96,
  d_ = 24,
  HX = 620,
  zX = 40,
  vI = 0.00518,
  UX = q2 * vI,
  Fg = { ally: 110, enemy: 80 },
  FX = (n) =>
    `${n} ${zX}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,
  GX = {
    neutral: { fill: "rgba(8,11,16,0.56)", text: "#ffffff" },
    ally: { fill: "rgba(34,38,44,0.66)", text: "#d4d9df" },
    enemy: {
      fill: ["rgba(206,30,30,0.94)", "rgba(138,12,16,0.94)"],
      text: "#ffffff",
      edge: "rgba(255,255,255,0.22)",
    },
    citizen: { fill: "rgba(18,55,34,0.74)", text: "#8ff0aa" },
    npc: { fill: "rgba(56,44,4,0.66)", text: "#ffd44a" },
  },
  Gg = new Map();
let Wm = null;
function WX(n, e) {
  const t = GX[e.tone],
    i = e.weight === "normal" ? "600" : "700",
    s = FX(i);
  (Wm ?? (Wm = document.createElement("canvas").getContext("2d")),
    (Wm.font = s));
  const o = Wm.measureText(n).width,
    a = e.suffix ? Wm.measureText(e.suffix.text).width : 0,
    r = o + a,
    l = Math.min(1, HX / Math.max(1, r)),
    c = Math.ceil(r * l + d_ * 2),
    h = document.createElement("canvas");
  ((h.width = c), (h.height = q2));
  const d = h.getContext("2d"),
    u = 14,
    f = q2 - 28,
    p = 14;
  if ((d.beginPath(), d.roundRect(1, u, c - 2, f, p), Array.isArray(t.fill))) {
    const m = d.createLinearGradient(0, u, 0, u + f);
    (m.addColorStop(0, t.fill[0]),
      m.addColorStop(1, t.fill[1]),
      (d.fillStyle = m));
  } else d.fillStyle = t.fill;
  return (
    d.fill(),
    t.edge &&
      (d.save(),
      d.clip(),
      (d.fillStyle = t.edge),
      d.fillRect(0, u, c, 2),
      d.restore()),
    (d.font = s),
    (d.textBaseline = "middle"),
    (d.textAlign = "left"),
    (d.shadowColor = "rgba(0,0,0,0.55)"),
    (d.shadowBlur = 4),
    (d.shadowOffsetY = 1.5),
    d.save(),
    d.translate(d_, q2 / 2 + 1),
    d.scale(l, 1),
    (d.fillStyle = e.color ?? t.text),
    d.fillText(n, 0, 0),
    e.suffix &&
      ((d.fillStyle = e.suffix.color), d.fillText(e.suffix.text, o, 0)),
    d.restore(),
    { canvas: h, width: c }
  );
}
function Id(n, e) {
  var o, a;
  const t = `${e.tone}|${e.color ?? ""}|${e.weight ?? ""}|${((o = e.suffix) == null ? void 0 : o.text) ?? ""}|${((a = e.suffix) == null ? void 0 : a.color) ?? ""}|${n}`;
  let i = Gg.get(t);
  if (!i) {
    const { canvas: r, width: l } = WX(n, e),
      c = new bi(r);
    ((c.anisotropy = 4), (i = { tex: c, width: l, refs: 0 }), Gg.set(t, i));
  }
  i.refs++;
  const s = new os(
    new es({
      map: i.tex,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      toneMapped: !1,
      fog: !1,
    }),
  );
  return (
    (s.userData.plateKey = t),
    oh(s),
    s.scale.set(i.width * vI, UX, 1),
    (s.position.y = 2.35),
    s
  );
}
function Pc(n) {
  var i;
  const e = n.userData.plateKey,
    t = n.material;
  if (e) {
    const s = Gg.get(e);
    s && --s.refs <= 0 && (s.tex.dispose(), Gg.delete(e));
  } else (i = t.map) == null || i.dispose();
  t.dispose();
}
