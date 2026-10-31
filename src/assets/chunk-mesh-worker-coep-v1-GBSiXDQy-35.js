// chunk-mesh-worker-coep-v1-GBSiXDQy 35 — chunks
// Lines 10905-11195 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function B0(r, t, e, s) {
  const n = new xe(),
    i = new xe(),
    c = new xe(),
    h = t * D,
    o = e * D,
    a = new Float32Array(324),
    u = new Uint16Array(324),
    d = (l, f) => (l + 1) * 18 + f + 1;
  for (let l = -1; l <= 16; l++)
    for (let f = -1; f <= 16; f++) {
      const m = d(l, f);
      a[m] = -1;
      for (let _ = H - 1; _ >= 0; _--) {
        const g = r.getBlock(h + l, _, o + f),
          y = T[g];
        if (!(!y || (!y.solid && !y.liquid))) {
          ((u[m] = g),
            (a[m] = _ + (y.liquid ? Kt(r.getMeta(h + l, _, o + f)) : 1)));
          break;
        }
      }
    }
  for (let l = 0; l < 16; l++)
    for (let f = 0; f < 16; f++) {
      const m = d(l, f),
        _ = a[m],
        g = u[m],
        y = T[g];
      if (_ < 0 || !y) continue;
      const R = h + l,
        E = o + f,
        x = y.liquid ? (g === p.LAVA ? c : i) : n,
        S = y.light / 15;
      ((x.tint =
        g === p.GRASS || g === p.SAVANNA_GRASS ? Si(s, R, E) : [1, 1, 1]),
        x.rawQuad(
          [
            [R, _, E + 1],
            [R + 1, _, E + 1],
            [R, _, E],
            [R + 1, _, E],
          ],
          [0, 1, 0],
          y.tex[0],
          S,
        ));
      for (const [M, A] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const O = a[d(l + M, f + A)],
          I = O < 0 ? _ - 4 : O;
        if (I >= _) continue;
        const k =
          M < 0
            ? [
                [R, _, E],
                [R, I, E],
                [R, _, E + 1],
                [R, I, E + 1],
              ]
            : M > 0
              ? [
                  [R + 1, _, E + 1],
                  [R + 1, I, E + 1],
                  [R + 1, _, E],
                  [R + 1, I, E],
                ]
              : A < 0
                ? [
                    [R + 1, _, E],
                    [R + 1, I, E],
                    [R, _, E],
                    [R, I, E],
                  ]
                : [
                    [R, _, E + 1],
                    [R, I, E + 1],
                    [R + 1, _, E + 1],
                    [R + 1, I, E + 1],
                  ];
        x.rawQuad(k, [M, 0, A], y.tex[1], S);
      }
    }
  return { opaque: n.build(), water: i.build(), lava: c.build() };
}
class P0 {
  constructor(t) {
    this.chunks = t;
  }
  neighbors = new Array(9).fill(null);
  ox = 0;
  oz = 0;
  sealedMask = 0;
  setup(t, e, s = 0) {
    ((this.ox = t * D), (this.oz = e * D), (this.sealedMask = s));
    for (let n = -1; n <= 1; n++)
      for (let i = -1; i <= 1; i++)
        this.neighbors[(n + 1) * 3 + (i + 1)] =
          this.chunks.get(we(t + n, e + i)) ?? null;
  }
  getBlock(t, e, s) {
    if (e < 0 || e >= H) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      c = 4;
    (n < 0 ? ((c -= 3), (n += D)) : n >= D && ((c += 3), (n -= D)),
      i < 0 ? ((c -= 1), (i += D)) : i >= D && ((c += 1), (i -= D)));
    const h = this.neighbors[c];
    return h ? h.data[Se(n, e, i)] : 0;
  }
  getMeta(t, e, s) {
    if (e < 0 || e >= H) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      c = 4;
    (n < 0 ? ((c -= 3), (n += D)) : n >= D && ((c += 3), (n -= D)),
      i < 0 ? ((c -= 1), (i += D)) : i >= D && ((c += 1), (i -= D)));
    const h = this.neighbors[c];
    return h ? h.meta[Se(n, e, i)] : 0;
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
function k0(r) {
  const t = [],
    e = [],
    s = (i) => r.data[i] === p.WATER || yt(r.data[i], r.meta[i]);
  for (let i = 0; i < D; i++)
    for (let c = 0; c < D; c++)
      for (let h = H - 1; h >= 0; h--) {
        const o = Se(i, h, c);
        if (!s(o)) continue;
        const a = h + (r.data[o] === p.WATER ? Kt(r.meta[o]) : Kt(0));
        let u = h;
        for (; u > 0 && s(Se(i, u - 1, c));) u--;
        const d = r.cx * D + i,
          l = r.cz * D + c;
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
        for (let f = 0; f < 6; f++) e.push(u);
        h = u;
      }
  if (!t.length) return null;
  const n = new bs();
  return (
    n.setAttribute("position", new Ot(t, 3)),
    n.setAttribute("waterFloor", new Ot(e, 1)),
    n
  );
}
const U0 = 32;
class D0 {
  chunks = new Map();
  resolve(t) {
    if (!t.cacheKeys) return t;
    for (const s of t.chunks) this.chunks.set(we(s.cx, s.cz), s);
    const e = t.cacheKeys.map((s) => {
      const n = this.chunks.get(s);
      if (!n) throw Error("Missing mesh snapshot " + s);
      return (this.chunks.delete(s), this.chunks.set(s, n), n);
    });
    for (; this.chunks.size > U0;)
      this.chunks.delete(this.chunks.keys().next().value);
    return { ...t, chunks: e };
  }
}
function Kn(r, t) {
  if (!r || r.hasAttribute("azureWater")) return;
  const e = r.getAttribute("position"),
    s = new Float32Array(e.count),
    n = new Map();
  for (let i = 0; i < e.count; i++) {
    const c = e.getX(i),
      h = e.getZ(i),
      o = `${c},${h}`;
    let a = n.get(o);
    (a === void 0 && ((a = Br(t, c, h)), n.set(o, a)), (s[i] = a));
  }
  r.setAttribute("azureWater", new re(s, 1));
}
function te(r) {
  if (!r) return null;
  const t = {};
  for (const [s, n] of Object.entries(r.attributes))
    t[s] = { array: n.array, itemSize: n.itemSize, normalized: n.normalized };
  r.computeBoundingSphere();
  const e = r.boundingSphere;
  return {
    attributes: t,
    index: r.index?.array ?? null,
    sphere: { center: e.center.toArray(), radius: e.radius },
  };
}
function w0(r, t = new xi()) {
  const e = new Map(r.chunks.map((a) => [we(a.cx, a.cz), a])),
    s = new P0(e);
  s.setup(r.cx, r.cz, r.sealed ?? 0);
  const n = te(k0(e.get(we(r.cx, r.cz))));
  if (r.surface) {
    const a = B0(s, r.cx, r.cz, r.seed);
    return (
      Kn(a.water, r.seed),
      {
        opaque: te(a.opaque),
        water: te(a.water),
        waterColumns: n,
        lava: te(a.lava),
        light: new Uint8Array(),
        sky: new Uint8Array(),
      }
    );
  }
  const i = t.compute(r.cx, r.cz, (a, u) => e.get(we(a, u))),
    c = new Uint8Array(D * D * H),
    h = new Uint8Array(c.length);
  for (let a = 0; a < D; a++)
    for (let u = 0; u < D; u++)
      for (let d = 0; d < H; d++) {
        const l = Se(a, d, u),
          f = r.cx * D + a,
          m = r.cz * D + u;
        ((c[l] = i.at(f, d, m)), (h[l] = i.skyAt(f, d, m)));
      }
  const o = N0(s, r.cx, r.cz, i, r.smooth, r.fancy, r.seed);
  return (
    Kn(o.water, r.seed),
    {
      opaque: te(o.opaque),
      water: te(o.water),
      waterColumns: n,
      lava: te(o.lava),
      light: c,
      sky: h,
    }
  );
}
function z0(r) {
  const t = new Set([r.light.buffer, r.sky.buffer]);
  for (const e of [r.opaque, r.water, r.waterColumns, r.lava])
    if (e) {
      for (const s of Object.values(e.attributes)) t.add(s.array.buffer);
      e.index && t.add(e.index.buffer);
    }
  return [...t];
}
const F0 = new xi(),
  G0 = new D0();
self.onmessage = (r) => {
  const t = w0(G0.resolve(r.data), F0);
  self.postMessage(t, z0(t));
};
