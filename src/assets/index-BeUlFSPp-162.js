// index-BeUlFSPp 162 — fill
// Lines 93204-93550 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function hse(s) {
  const e = new cse(),
    t = (n, o) => (n < 0 || o < 0 || n >= Ui || o >= Ui ? 0 : s[o * Ui + n]);
  for (let n = 0; n < Ui; n++) {
    let o = 0;
    for (; o < Ui;) {
      const a = t(o, n);
      if (a <= 0) {
        o++;
        continue;
      }
      let r = o;
      for (; r + 1 < Ui && t(r + 1, n) === a;) r++;
      const { u0: l, u1: c, v0: h, v1: d } = zw(o, r, n, n),
        u = Tu(o),
        f = Tu(r + 1),
        p = xu(n + 1),
        m = xu(n);
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
  const i = (n, o, a, r, l) => {
    const c =
      o > 0
        ? [
            [o, n],
            [-n, -o],
          ]
        : [[-n, n]];
    for (const [h, d] of c)
      e.quad([a(d, 0), a(h, 0), a(h, 1), a(d, 1)], r, [
        l(d, 0),
        l(h, 0),
        l(h, 1),
        l(d, 1),
      ]);
  };
  for (const n of [1, -1])
    for (let o = 0; o < Ui; o++) {
      let a = 0;
      for (; a < Ui;) {
        const r = t(o, a),
          l = t(o + n, a);
        if (r <= 0 || l >= r) {
          a++;
          continue;
        }
        let c = a;
        for (; c + 1 < Ui && t(o, c + 1) === r && t(o + n, c + 1) === l;) c++;
        const h = n > 0 ? Tu(o + 1) : Tu(o),
          d = xu(c + 1),
          u = xu(a),
          { u0: f, u1: p, v0: m, v1: g } = zw(o, o, a, c),
          y = (f + p) / 2;
        (i(
          r,
          l,
          (M, E) => [h, E ? u : d, n > 0 ? M : -M],
          [n, 0, 0],
          (M, E) => [y, E ? g : m],
        ),
          (a = c + 1));
      }
    }
  for (const n of [1, -1])
    for (let o = 0; o < Ui; o++) {
      let a = 0;
      for (; a < Ui;) {
        const r = t(a, o),
          l = t(a, o - n);
        if (r <= 0 || l >= r) {
          a++;
          continue;
        }
        let c = a;
        for (; c + 1 < Ui && t(c + 1, o) === r && t(c + 1, o - n) === l;) c++;
        const h = n > 0 ? xu(o) : xu(o + 1),
          d = Tu(a),
          u = Tu(c + 1),
          { u0: f, u1: p, v0: m, v1: g } = zw(a, c, o, o),
          y = (m + g) / 2;
        (i(
          r,
          l,
          (M, E) => [E ? d : u, h, n > 0 ? M : -M],
          [0, n, 0],
          (M, E) => [E ? f : p, y],
        ),
          (a = c + 1));
      }
    }
  return e.geometry();
}
function dse(s) {
  let e = Bw.get(s);
  if (e) return e;
  const t = RO(s);
  if (t) return (Bw.set(s, t), t);
  const i = document.createElement("canvas");
  i.width = i.height = Ui;
  const n = i.getContext("2d");
  Vo(n, s, null);
  const o = n.getImageData(0, 0, Ui, Ui),
    a = new Uint8Array(Ui * Ui);
  let r = 0;
  for (let u = 0; u < a.length; u++)
    o.data[u * 4 + 3] >= ase && ((a[u] = 1), r++);
  (rse(o, 4), n.putImageData(o, 0, 0));
  const l = new Si(i);
  ((l.colorSpace = Ii), (l.magFilter = as), (l.minFilter = za));
  const c =
      (s >= w.SUPPRESSOR && s <= w.EXT_MAG) ||
      new Set([w.SHEARS, w.SHARK_TOOTH, w.RADIO_MODULE, w.INTEL_TABLET]).has(s),
    h = new oo({
      map: l,
      shininess: c ? 38 : 6,
      specular: c ? 5857642 : 1118481,
    });
  let d;
  if (r < 4) d = new kt(0.22, 0.22, 0.22);
  else {
    const u = lse(a);
    let f = 0;
    for (let g = 0; g < u.length; g++) f = Math.max(f, u[g]);
    f = Math.min(f, nse);
    const p = Ko(s) || s === w.MONEY || s === w.BANDAGE,
      m = new Float32Array(Ui * Ui);
    for (let g = 0; g < m.length; g++) {
      if (!u[g]) continue;
      const y = Math.min(u[g], f),
        b = Math.min(p ? 0.018 : ose, FT * Math.sqrt(y * (2 * f - y)));
      m[g] = Math.max(Hw, Math.round(b / Hw) * Hw);
    }
    d = hse(m);
  }
  return ((e = new Q(d, h)), Bw.set(s, e), e);
}
function e2(s, e = 1) {
  const t = dse(s).clone();
  return (e !== 1 && t.scale.setScalar(e), t);
}
const Gy = 96,
  Gk = 24,
  use = 620,
  fse = 40,
  NN = 0.00518,
  pse = Gy * NN,
  Kv = { ally: 110, enemy: 80 },
  mse = (s) =>
    `${s} ${fse}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,
  gse = {
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
  Yv = new Map();
let Lg = null;
function yse(s, e) {
  const t = gse[e.tone],
    i = e.weight === "normal" ? "600" : "700",
    n = mse(i);
  ((Lg ??= document.createElement("canvas").getContext("2d")), (Lg.font = n));
  const o = Lg.measureText(s).width,
    a = e.suffix ? Lg.measureText(e.suffix.text).width : 0,
    r = o + a,
    l = Math.min(1, use / Math.max(1, r)),
    c = Math.ceil(r * l + Gk * 2),
    h = document.createElement("canvas");
  ((h.width = c), (h.height = Gy));
  const d = h.getContext("2d"),
    u = 14,
    f = Gy - 28,
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
    (d.font = n),
    (d.textBaseline = "middle"),
    (d.textAlign = "left"),
    (d.shadowColor = "rgba(0,0,0,0.55)"),
    (d.shadowBlur = 4),
    (d.shadowOffsetY = 1.5),
    d.save(),
    d.translate(Gk, Gy / 2 + 1),
    d.scale(l, 1),
    (d.fillStyle = e.color ?? t.text),
    d.fillText(s, 0, 0),
    e.suffix &&
      ((d.fillStyle = e.suffix.color), d.fillText(e.suffix.text, o, 0)),
    d.restore(),
    { canvas: h, width: c }
  );
}
function Yu(s, e) {
  const t = `${e.tone}|${e.color ?? ""}|${e.weight ?? ""}|${e.suffix?.text ?? ""}|${e.suffix?.color ?? ""}|${s}`;
  let i = Yv.get(t);
  if (!i) {
    const { canvas: o, width: a } = yse(s, e),
      r = new Si(o);
    ((r.anisotropy = 4), (i = { tex: r, width: a, refs: 0 }), Yv.set(t, i));
  }
  i.refs++;
  const n = new Ws(
    new hn({
      map: i.tex,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      toneMapped: !1,
      fog: !1,
    }),
  );
  return (
    (n.userData.plateKey = t),
    Q0(n),
    n.scale.set(i.width * NN, pse, 1),
    (n.position.y = 2.35),
    n
  );
}
function S0(s) {
  const e = s.userData.plateKey,
    t = s.material;
  if (e) {
    const i = Yv.get(e);
    i && --i.refs <= 0 && (i.tex.dispose(), Yv.delete(e));
  } else t.map?.dispose();
  t.dispose();
}
const cE = `
float fcHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float fcNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fcHash(i), fcHash(i + vec2(1.0, 0.0)), f.x),
             mix(fcHash(i + vec2(0.0, 1.0)), fcHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
vec4 fcFlame(vec2 uv, float t, float seed) {
  vec2 px = (floor(clamp(uv, 0.0, 0.999) * 16.0) + 0.5) / 16.0;
  float x = px.x - 0.5, y = px.y;
  float s = fract(seed * 0.1373) * 37.0;
  // how high each column of the fire reaches: separate tongues rising and falling, lower
  // towards the card's edges so the silhouette closes into a flame rather than a wall
  float env = 1.0 - smoothstep(0.2, 0.5, abs(x));
  float top = (0.3 + 0.7 * env) * (0.6 + 0.5 * fcNoise(vec2(px.x * 7.5 + s, t * 1.8)));
  // turbulence climbing through the body
  float n = fcNoise(vec2(px.x * 4.0 + s * 2.0, px.y * 3.0 - t * 3.0));
  top += (n - 0.5) * 0.25;
  float heat = (top - y) / max(top, 0.05);
  heat = heat * 0.9 + (n - 0.5) * 0.25 * y;
  // lone wisps torn off the tips
  float wisp = step(0.8, fcNoise(vec2(px.x * 5.0 + s, px.y * 4.0 - t * 4.5)))
             * step(top, y) * step(y, top + 0.14) * step(0.3, env);
  heat = mix(heat, 0.3, wisp);
  vec3 c = mix(vec3(0.55, 0.07, 0.02), vec3(0.92, 0.24, 0.03), smoothstep(0.08, 0.25, heat));
  c = mix(c, vec3(1.0, 0.52, 0.08), smoothstep(0.25, 0.5, heat));
  c = mix(c, vec3(1.0, 0.78, 0.25), smoothstep(0.5, 0.75, heat));
  c = mix(c, vec3(1.0, 0.93, 0.62), smoothstep(0.8, 1.0, heat));
  return vec4(c, step(0.05, heat));
}
`,
  vse = `
vec3 lavaCells(vec2 p, float t) {
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0, id = 0.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 h = vec2(fcHash(i + g), fcHash(i + g + 17.3));
    vec2 o = g + 0.5 + 0.36 * sin(t * 0.22 + 6.2831 * h) - f;
    float d = dot(o, o);
    if (d < d1) { d2 = d1; d1 = d; id = h.x; } else if (d < d2) { d2 = d; }
  }
  return vec3(sqrt(d1), sqrt(d2), id);
}
`;
let Fw = null,
  Wk = null;
function bse() {
  if (!Fw) {
    Fw = new Zo({ vertexColors: !0, transparent: !0, depthWrite: !1, fog: !1 });
    const s = document.createElement("canvas");
    s.width = s.height = 32;
    const e = s.getContext("2d"),
      t = e.createRadialGradient(16, 16, 0, 16, 16, 16);
    (t.addColorStop(0, "rgba(255,236,226,1)"),
      t.addColorStop(0.2, "rgba(255,60,44,1)"),
      t.addColorStop(0.48, "rgba(255,20,20,.5)"),
      t.addColorStop(1, "rgba(255,0,0,0)"),
      (e.fillStyle = t),
      e.fillRect(0, 0, 32, 32));
    const i = new Si(s);
    ((i.colorSpace = Ii),
      (Wk = new hn({ map: i, transparent: !0, depthWrite: !1, fog: !1 })));
  }
  return { line: Fw, spot: Wk };
}
