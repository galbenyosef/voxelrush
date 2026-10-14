// index-Dp6GxvJu 197 — math
// Lines 107261-107568 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function ate() {
  var n, e;
  try {
    const t = "fablecraft-session-token",
      i = sessionStorage.getItem(t);
    if (i) return i;
    const s =
      ((e = (n = globalThis.crypto) == null ? void 0 : n.randomUUID) == null
        ? void 0
        : e.call(n)) ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    return (sessionStorage.setItem(t, s), s);
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }
}
function rte(n) {
  const e = [],
    t = [],
    i = (o) => n.data[o] === v.WATER || oa(n.data[o], n.meta[o]);
  for (let o = 0; o < Pe; o++)
    for (let a = 0; a < Pe; a++)
      for (let r = Kt - 1; r >= 0; r--) {
        const l = Ri(o, r, a);
        if (!i(l)) continue;
        const c = r + (n.data[l] === v.WATER ? Ul(n.meta[l]) : Ul(0));
        let h = r;
        for (; h > 0 && i(Ri(o, h - 1, a));) h--;
        const d = n.cx * Pe + o,
          u = n.cz * Pe + a;
        e.push(
          d,
          c,
          u,
          d,
          c,
          u + 1,
          d + 1,
          c,
          u + 1,
          d,
          c,
          u,
          d + 1,
          c,
          u + 1,
          d + 1,
          c,
          u,
        );
        for (let f = 0; f < 6; f++) t.push(h);
        r = h;
      }
  if (!e.length) return null;
  const s = new ci();
  return (
    s.setAttribute("position", new It(e, 3)),
    s.setAttribute("waterFloor", new It(t, 1)),
    s
  );
}
class lte {
  constructor(e) {
    w(this, "neighbors", new Array(9).fill(null));
    w(this, "ox", 0);
    w(this, "oz", 0);
    w(this, "sealedMask", 0);
    this.chunks = e;
  }
  setup(e, t, i = 0) {
    ((this.ox = e * Pe), (this.oz = t * Pe), (this.sealedMask = i));
    for (let s = -1; s <= 1; s++)
      for (let o = -1; o <= 1; o++)
        this.neighbors[(s + 1) * 3 + (o + 1)] =
          this.chunks.get(Gn(e + s, t + o)) ?? null;
  }
  getBlock(e, t, i) {
    if (t < 0 || t >= Kt) return 0;
    let s = e - this.ox,
      o = i - this.oz,
      a = 4;
    (s < 0 ? ((a -= 3), (s += Pe)) : s >= Pe && ((a += 3), (s -= Pe)),
      o < 0 ? ((a -= 1), (o += Pe)) : o >= Pe && ((a += 1), (o -= Pe)));
    const r = this.neighbors[a];
    return r ? r.data[Ri(s, t, o)] : 0;
  }
  getMeta(e, t, i) {
    if (t < 0 || t >= Kt) return 0;
    let s = e - this.ox,
      o = i - this.oz,
      a = 4;
    (s < 0 ? ((a -= 3), (s += Pe)) : s >= Pe && ((a += 3), (s -= Pe)),
      o < 0 ? ((a -= 1), (o += Pe)) : o >= Pe && ((a += 1), (o -= Pe)));
    const r = this.neighbors[a];
    return r ? r.meta[Ri(s, t, o)] : 0;
  }
  loaded(e, t) {
    let i = e - this.ox,
      s = t - this.oz,
      o = 4;
    return (
      i < 0 ? (o -= 3) : i >= Pe && (o += 3),
      s < 0 ? (o -= 1) : s >= Pe && (o += 1),
      this.neighbors[o] !== null
    );
  }
  sealed(e, t) {
    let i = e - this.ox,
      s = t - this.oz,
      o = 4;
    return (
      i < 0 ? (o -= 3) : i >= Pe && (o += 3),
      s < 0 ? (o -= 1) : s >= Pe && (o += 1),
      this.neighbors[o] === null && ((this.sealedMask >> o) & 1) === 1
    );
  }
}
function zM(n, e = 0) {
  var i;
  if (n === v.AIR) return 0;
  if ((i = de[n]) != null && i.solid && !de[n].transparent) return 15;
  if (Do(n)) return e & Qn ? 0 : 1;
  if (Ss(n)) return e & Qn ? 0 : 15;
  if ($n(n) || n === v.WATER || oa(n, e)) return 2;
  const t = de[n];
  return t != null && t.solid && !t.transparent ? 15 : 0;
}
const Hf = 15,
  na = Pe + Hf * 2,
  ja = na * Kt,
  Ih = na * ja,
  qI = new Uint8Array(65536),
  KI = new Uint8Array(65536),
  YI = new Uint8Array(65536);
for (let n = 0; n < 256; n++)
  for (const e of de) {
    const t = (n << 8) | e.id;
    ((qI[t] = zM(e.id, n)),
      (KI[t] = hg(e.id, n)),
      (YI[t] = Number(e.id === v.WATER || oa(e.id, n))));
  }
class cte {
  constructor() {
    w(this, "block", new Uint8Array(Ih));
    w(this, "sky", new Uint8Array(Ih));
    w(this, "opacity", new Uint8Array(Ih));
    w(this, "queue", new Int32Array(Ih));
    w(this, "queued", new Uint8Array(Ih));
  }
  compute(e, t, i) {
    const { block: s, sky: o, opacity: a, queue: r, queued: l } = this,
      c = e * Pe - Hf,
      h = t * Pe - Hf;
    (s.fill(0), o.fill(0), a.fill(15));
    let d = !1;
    for (let p = -1; p <= 1; p++)
      for (let m = -1; m <= 1; m++) {
        const y = i(e + p, t + m);
        if (y)
          for (let g = 0; g < Pe; g++)
            for (let b = 0; b < Pe; b++) {
              const S = p * Pe + g + Hf,
                M = m * Pe + b + Hf;
              if (S < 0 || M < 0 || S >= na || M >= na) continue;
              let x = 15;
              const T = S * ja + M * Kt;
              for (
                let A = Kt - 1, _ = Ri(g, Kt - 1, b);
                A >= 0;
                A--, _ -= Pe * Pe
              ) {
                const C = T + A,
                  R = (y.meta[_] << 8) | y.data[_],
                  L = qI[R];
                ((a[C] = L),
                  (x = YI[R] && L < 15 ? x * 0.9 : Math.max(0, x - L)),
                  (o[C] = x > 0 ? Math.max(1, Math.round(x)) : 0));
                const N = KI[R];
                ((s[C] = N), N > 1 && (d = !0));
              }
            }
      }
    const u = (p, m) => {
      let y = 0,
        g = 0,
        b = 0;
      l.fill(0);
      const S = (M) => {
        l[M] || ((l[M] = 1), (r[g] = M), (g = (g + 1) % Ih), b++);
      };
      for (let M = 0; M < na; M++)
        for (let x = 0; x < na; x++)
          for (let T = 0; T < Kt; T++) {
            const A = M * ja + x * Kt + T,
              _ = p[A];
            _ <= 1 ||
              ((!m ||
                (M > 0 && p[A - ja] < _ - 1 && a[A - ja] < 15) ||
                (M + 1 < na && p[A + ja] < _ - 1 && a[A + ja] < 15) ||
                (x > 0 && p[A - Kt] < _ - 1 && a[A - Kt] < 15) ||
                (x + 1 < na && p[A + Kt] < _ - 1 && a[A + Kt] < 15) ||
                (T > 0 && p[A - 1] < _ - 1 && a[A - 1] < 15)) &&
                S(A));
          }
      for (; b;) {
        const M = r[y];
        ((y = (y + 1) % Ih), b--, (l[M] = 0));
        const x = M % Kt,
          T = Math.floor(M / Kt) % na,
          A = Math.floor(M / ja),
          _ = (C) => {
            const R = p[M] - Math.max(1, a[C]);
            R > p[C] && ((p[C] = R), R > 1 && S(C));
          };
        (A > 0 && _(M - ja),
          A + 1 < na && _(M + ja),
          T > 0 && _(M - Kt),
          T + 1 < na && _(M + Kt),
          x > 0 && _(M - 1),
          x + 1 < Kt && _(M + 1));
      }
    };
    (d && u(s, !1), u(o, !0));
    const f = (p, m, y, g) => {
      const b = Math.floor(m) - c,
        S = Math.floor(g) - h;
      return (
        (y = Math.floor(y)),
        b < 0 || S < 0 || b >= na || S >= na || y < 0 || y >= Kt
          ? 0
          : p[b * ja + S * Kt + y]
      );
    };
    return {
      ox: c,
      oz: h,
      data: s,
      at: (p, m, y) => f(s, p, m, y),
      skyAt: (p, m, y) => f(o, p, m, y),
    };
  }
}
const hte = 32;
function dte(n, e) {
  if (!n || n.hasAttribute("azureWater")) return;
  const t = n.getAttribute("position"),
    i = new Float32Array(t.count),
    s = new Map();
  for (let o = 0; o < t.count; o++) {
    const a = t.getX(o),
      r = t.getZ(o),
      l = `${a},${r}`;
    let c = s.get(l);
    (c === void 0 && ((c = HG(e, a, r)), s.set(l, c)), (i[o] = c));
  }
  n.setAttribute("azureWater", new oi(i, 1));
}
function o2(n) {
  if (!n) return null;
  const e = new ci();
  for (const [t, i] of Object.entries(n.attributes))
    e.setAttribute(t, new oi(i.array, i.itemSize, i.normalized));
  return (
    n.index && e.setIndex(new oi(n.index, 1)),
    n.sphere &&
      (e.boundingSphere = new Ha(new k(...n.sphere.center), n.sphere.radius)),
    e
  );
}
const Bb = 512,
  Hb = 288,
  lR =
    '"Trebuchet MS", "Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif';
function ute(n) {
  const e = document.createElement("canvas");
  ((e.width = Bb), (e.height = Hb));
  const t = e.getContext("2d"),
    i = n
      .split(
        `
`,
      )
      .slice(0, pk);
  for (; i.length && !i[i.length - 1].trim();) i.pop();
  if (!i.length) return e;
  const s = (Hb * 0.86) / Math.max(3, i.length),
    o = (Hb - s * i.length) / 2;
  return (
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    i.forEach((a, r) => {
      let l = Math.floor(s * 0.8);
      t.font = `700 ${l}px ${lR}`;
      const c = Bb * 0.9,
        h = t.measureText(a).width;
      h > c &&
        ((l = Math.max(14, Math.floor((l * c) / h))),
        (t.font = `700 ${l}px ${lR}`));
      const d = o + s * (r + 0.5),
        u = Bb / 2;
      ((t.fillStyle = "rgba(255,236,196,0.55)"),
        t.fillText(a, u, d + Math.max(1.5, l * 0.05)),
        (t.fillStyle = "#26170b"),
        t.fillText(a, u, d));
    }),
    e
  );
}
