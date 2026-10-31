// chunk-mesh-worker-coep-v1-BX2YFLnd 35 — chunks
// Lines 10894-11187 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function P0(r, t, e, s) {
  const n = new Re(),
    i = new Re(),
    h = new Re(),
    c = t * D,
    o = e * D,
    a = new Float32Array(324),
    u = new Uint16Array(324),
    d = (l, p) => (l + 1) * 18 + p + 1;
  for (let l = -1; l <= 16; l++)
    for (let p = -1; p <= 16; p++) {
      const m = d(l, p);
      a[m] = -1;
      for (let _ = Y - 1; _ >= 0; _--) {
        const y = r.getBlock(c + l, _, o + p),
          E = T[y];
        if (!(!E || (!E.solid && !E.liquid))) {
          ((u[m] = y),
            (a[m] = _ + (E.liquid ? $t(r.getMeta(c + l, _, o + p)) : 1)));
          break;
        }
      }
    }
  for (let l = 0; l < 16; l++)
    for (let p = 0; p < 16; p++) {
      const m = d(l, p),
        _ = a[m],
        y = u[m],
        E = T[y];
      if (_ < 0 || !E) continue;
      const M = c + l,
        g = o + p,
        L = E.liquid ? (y === f.LAVA ? h : i) : n,
        I = E.light / 15;
      ((L.tint =
        y === f.GRASS || y === f.SAVANNA_GRASS ? gi(s, M, g) : [1, 1, 1]),
        L.rawQuad(
          [
            [M, _, g + 1],
            [M + 1, _, g + 1],
            [M, _, g],
            [M + 1, _, g],
          ],
          [0, 1, 0],
          E.tex[0],
          I,
        ));
      for (const [A, x] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const S = a[d(l + A, p + x)],
          R = S < 0 ? _ - 4 : S;
        if (R >= _) continue;
        const O =
          A < 0
            ? [
                [M, _, g],
                [M, R, g],
                [M, _, g + 1],
                [M, R, g + 1],
              ]
            : A > 0
              ? [
                  [M + 1, _, g + 1],
                  [M + 1, R, g + 1],
                  [M + 1, _, g],
                  [M + 1, R, g],
                ]
              : x < 0
                ? [
                    [M + 1, _, g],
                    [M + 1, R, g],
                    [M, _, g],
                    [M, R, g],
                  ]
                : [
                    [M, _, g + 1],
                    [M, R, g + 1],
                    [M + 1, _, g + 1],
                    [M + 1, R, g + 1],
                  ];
        L.rawQuad(O, [A, 0, x], E.tex[1], I);
      }
    }
  return { opaque: n.build(), water: i.build(), lava: h.build() };
}
class k0 {
  constructor(t) {
    K(this, "neighbors", new Array(9).fill(null));
    K(this, "ox", 0);
    K(this, "oz", 0);
    K(this, "sealedMask", 0);
    this.chunks = t;
  }
  setup(t, e, s = 0) {
    ((this.ox = t * D), (this.oz = e * D), (this.sealedMask = s));
    for (let n = -1; n <= 1; n++)
      for (let i = -1; i <= 1; i++)
        this.neighbors[(n + 1) * 3 + (i + 1)] =
          this.chunks.get(We(t + n, e + i)) ?? null;
  }
  getBlock(t, e, s) {
    if (e < 0 || e >= Y) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      h = 4;
    (n < 0 ? ((h -= 3), (n += D)) : n >= D && ((h += 3), (n -= D)),
      i < 0 ? ((h -= 1), (i += D)) : i >= D && ((h += 1), (i -= D)));
    const c = this.neighbors[h];
    return c ? c.data[be(n, e, i)] : 0;
  }
  getMeta(t, e, s) {
    if (e < 0 || e >= Y) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      h = 4;
    (n < 0 ? ((h -= 3), (n += D)) : n >= D && ((h += 3), (n -= D)),
      i < 0 ? ((h -= 1), (i += D)) : i >= D && ((h += 1), (i -= D)));
    const c = this.neighbors[h];
    return c ? c.meta[be(n, e, i)] : 0;
  }
  loaded(t, e) {
    let s = t - this.ox,
      n = e - this.oz,
      i = 4;
    return (
      s < 0 ? (i -= 3) : s >= D && (i += 3),
      n < 0 ? (i -= 1) : n >= D && (i += 1),
      this.neighbors[i] !== null
    );
  }
  sealed(t, e) {
    let s = t - this.ox,
      n = e - this.oz,
      i = 4;
    return (
      s < 0 ? (i -= 3) : s >= D && (i += 3),
      n < 0 ? (i -= 1) : n >= D && (i += 1),
      this.neighbors[i] === null && ((this.sealedMask >> i) & 1) === 1
    );
  }
}
function U0(r) {
  const t = [],
    e = [],
    s = (i) => r.data[i] === f.WATER || gt(r.data[i], r.meta[i]);
  for (let i = 0; i < D; i++)
    for (let h = 0; h < D; h++)
      for (let c = Y - 1; c >= 0; c--) {
        const o = be(i, c, h);
        if (!s(o)) continue;
        const a = c + (r.data[o] === f.WATER ? $t(r.meta[o]) : $t(0));
        let u = c;
        for (; u > 0 && s(be(i, u - 1, h));) u--;
        const d = r.cx * D + i,
          l = r.cz * D + h;
        t.push(
          d,
          a,
          l,
          d,
          a,
          l + 1,
          d + 1,
          a,
          l + 1,
          d,
          a,
          l,
          d + 1,
          a,
          l + 1,
          d + 1,
          a,
          l,
        );
        for (let p = 0; p < 6; p++) e.push(u);
        c = u;
      }
  if (!t.length) return null;
  const n = new Os();
  return (
    n.setAttribute("position", new Nt(t, 3)),
    n.setAttribute("waterFloor", new Nt(e, 1)),
    n
  );
}
const D0 = 32;
class w0 {
  constructor() {
    K(this, "chunks", new Map());
  }
  resolve(t) {
    if (!t.cacheKeys) return t;
    for (const s of t.chunks) this.chunks.set(We(s.cx, s.cz), s);
    const e = t.cacheKeys.map((s) => {
      const n = this.chunks.get(s);
      if (!n) throw Error("Missing mesh snapshot " + s);
      return (this.chunks.delete(s), this.chunks.set(s, n), n);
    });
    for (; this.chunks.size > D0;)
      this.chunks.delete(this.chunks.keys().next().value);
    return { ...t, chunks: e };
  }
}
function Qn(r, t) {
  if (!r || r.hasAttribute("azureWater")) return;
  const e = r.getAttribute("position"),
    s = new Float32Array(e.count),
    n = new Map();
  for (let i = 0; i < e.count; i++) {
    const h = e.getX(i),
      c = e.getZ(i),
      o = `${h},${c}`;
    let a = n.get(o);
    (a === void 0 && ((a = Ur(t, h, c)), n.set(o, a)), (s[i] = a));
  }
  r.setAttribute("azureWater", new ce(s, 1));
}
function ie(r) {
  var s;
  if (!r) return null;
  const t = {};
  for (const [n, i] of Object.entries(r.attributes))
    t[n] = { array: i.array, itemSize: i.itemSize, normalized: i.normalized };
  r.computeBoundingSphere();
  const e = r.boundingSphere;
  return {
    attributes: t,
    index: ((s = r.index) == null ? void 0 : s.array) ?? null,
    sphere: { center: e.center.toArray(), radius: e.radius },
  };
}
function z0(r, t = new Mi()) {
  const e = new Map(r.chunks.map((a) => [We(a.cx, a.cz), a])),
    s = new k0(e);
  s.setup(r.cx, r.cz, r.sealed ?? 0);
  const n = ie(U0(e.get(We(r.cx, r.cz))));
  if (r.surface) {
    const a = P0(s, r.cx, r.cz, r.seed);
    return (
      Qn(a.water, r.seed),
      {
        opaque: ie(a.opaque),
        water: ie(a.water),
        waterColumns: n,
        lava: ie(a.lava),
        light: new Uint8Array(),
        sky: new Uint8Array(),
      }
    );
  }
  const i = t.compute(r.cx, r.cz, (a, u) => e.get(We(a, u))),
    h = new Uint8Array(D * D * Y),
    c = new Uint8Array(h.length);
  for (let a = 0; a < D; a++)
    for (let u = 0; u < D; u++)
      for (let d = 0; d < Y; d++) {
        const l = be(a, d, u),
          p = r.cx * D + a,
          m = r.cz * D + u;
        ((h[l] = i.at(p, d, m)), (c[l] = i.skyAt(p, d, m)));
      }
  const o = B0(s, r.cx, r.cz, i, r.smooth, r.fancy, r.seed);
  return (
    Qn(o.water, r.seed),
    {
      opaque: ie(o.opaque),
      water: ie(o.water),
      waterColumns: n,
      lava: ie(o.lava),
      light: h,
      sky: c,
    }
  );
}
function F0(r) {
  const t = new Set([r.light.buffer, r.sky.buffer]);
  for (const e of [r.opaque, r.water, r.waterColumns, r.lava])
    if (e) {
      for (const s of Object.values(e.attributes)) t.add(s.array.buffer);
      e.index && t.add(e.index.buffer);
    }
  return [...t];
}
const G0 = new Mi(),
  W0 = new w0();
self.onmessage = (r) => {
  const t = z0(W0.resolve(r.data), G0);
  self.postMessage(t, F0(t));
};
