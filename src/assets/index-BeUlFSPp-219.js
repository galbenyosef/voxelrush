// index-BeUlFSPp 219 — math
// Lines 113938-114239 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function vre() {
  try {
    const s = "fablecraft-session-token",
      e = sessionStorage.getItem(s);
    if (e) return e;
    const t =
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    return (sessionStorage.setItem(s, t), t);
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }
}
function bre(s) {
  const e = [],
    t = [],
    i = (o) => s.data[o] === v.WATER || ka(s.data[o], s.meta[o]);
  for (let o = 0; o < ke; o++)
    for (let a = 0; a < ke; a++)
      for (let r = jt - 1; r >= 0; r--) {
        const l = Ai(o, r, a);
        if (!i(l)) continue;
        const c = r + (s.data[l] === v.WATER ? kc(s.meta[l]) : kc(0));
        let h = r;
        for (; h > 0 && i(Ai(o, h - 1, a));) h--;
        const d = s.cx * ke + o,
          u = s.cz * ke + a;
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
  const n = new oi();
  return (
    n.setAttribute("position", new Dt(e, 3)),
    n.setAttribute("waterFloor", new Dt(t, 1)),
    n
  );
}
class wre {
  constructor(e) {
    this.chunks = e;
  }
  neighbors = new Array(9).fill(null);
  ox = 0;
  oz = 0;
  sealedMask = 0;
  setup(e, t, i = 0) {
    ((this.ox = e * ke), (this.oz = t * ke), (this.sealedMask = i));
    for (let n = -1; n <= 1; n++)
      for (let o = -1; o <= 1; o++)
        this.neighbors[(n + 1) * 3 + (o + 1)] =
          this.chunks.get(Xs(e + n, t + o)) ?? null;
  }
  getBlock(e, t, i) {
    if (t < 0 || t >= jt) return 0;
    let n = e - this.ox,
      o = i - this.oz,
      a = 4;
    (n < 0 ? ((a -= 3), (n += ke)) : n >= ke && ((a += 3), (n -= ke)),
      o < 0 ? ((a -= 1), (o += ke)) : o >= ke && ((a += 1), (o -= ke)));
    const r = this.neighbors[a];
    return r ? r.data[Ai(n, t, o)] : 0;
  }
  getMeta(e, t, i) {
    if (t < 0 || t >= jt) return 0;
    let n = e - this.ox,
      o = i - this.oz,
      a = 4;
    (n < 0 ? ((a -= 3), (n += ke)) : n >= ke && ((a += 3), (n -= ke)),
      o < 0 ? ((a -= 1), (o += ke)) : o >= ke && ((a += 1), (o -= ke)));
    const r = this.neighbors[a];
    return r ? r.meta[Ai(n, t, o)] : 0;
  }
  loaded(e, t) {
    let i = e - this.ox,
      n = t - this.oz,
      o = 4;
    return (
      i < 0 ? (o -= 3) : i >= ke && (o += 3),
      n < 0 ? (o -= 1) : n >= ke && (o += 1),
      this.neighbors[o] !== null
    );
  }
  sealed(e, t) {
    let i = e - this.ox,
      n = t - this.oz,
      o = 4;
    return (
      i < 0 ? (o -= 3) : i >= ke && (o += 3),
      n < 0 ? (o -= 1) : n >= ke && (o += 1),
      this.neighbors[o] === null && ((this.sealedMask >> o) & 1) === 1
    );
  }
}
function AE(s, e = 0) {
  if (s === v.AIR) return 0;
  if (le[s]?.solid && !le[s].transparent) return 15;
  if (Io(s)) return e & fn ? 0 : 1;
  if (zn(s)) return e & fn ? 0 : 15;
  if (en(s) || s === v.WATER || ka(s, e)) return 2;
  const t = le[s];
  return t?.solid && !t.transparent ? 15 : 0;
}
const m1 = 15,
  _a = ke + m1 * 2,
  Hr = _a * jt,
  Mh = _a * Hr,
  r9 = new Uint8Array(65536),
  l9 = new Uint8Array(65536),
  c9 = new Uint8Array(65536);
for (let s = 0; s < 256; s++)
  for (const e of le) {
    const t = (s << 8) | e.id;
    ((r9[t] = AE(e.id, s)),
      (l9[t] = ov(e.id, s)),
      (c9[t] = Number(e.id === v.WATER || ka(e.id, s))));
  }
class Mre {
  block = new Uint8Array(Mh);
  sky = new Uint8Array(Mh);
  opacity = new Uint8Array(Mh);
  queue = new Int32Array(Mh);
  queued = new Uint8Array(Mh);
  compute(e, t, i) {
    const { block: n, sky: o, opacity: a, queue: r, queued: l } = this,
      c = e * ke - m1,
      h = t * ke - m1;
    (n.fill(0), o.fill(0), a.fill(15));
    let d = !1;
    for (let p = -1; p <= 1; p++)
      for (let m = -1; m <= 1; m++) {
        const g = i(e + p, t + m);
        if (g)
          for (let y = 0; y < ke; y++)
            for (let b = 0; b < ke; b++) {
              const S = p * ke + y + m1,
                M = m * ke + b + m1;
              if (S < 0 || M < 0 || S >= _a || M >= _a) continue;
              let E = 15;
              const A = S * Hr + M * jt;
              for (
                let T = jt - 1, x = Ai(y, jt - 1, b);
                T >= 0;
                T--, x -= ke * ke
              ) {
                const R = A + T,
                  _ = (g.meta[x] << 8) | g.data[x],
                  C = r9[_];
                ((a[R] = C),
                  (E = c9[_] && C < 15 ? E * 0.9 : Math.max(0, E - C)),
                  (o[R] = E > 0 ? Math.max(1, Math.round(E)) : 0));
                const P = l9[_];
                ((n[R] = P), P > 1 && (d = !0));
              }
            }
      }
    const u = (p, m) => {
      let g = 0,
        y = 0,
        b = 0;
      l.fill(0);
      const S = (M) => {
        l[M] || ((l[M] = 1), (r[y] = M), (y = (y + 1) % Mh), b++);
      };
      for (let M = 0; M < _a; M++)
        for (let E = 0; E < _a; E++)
          for (let A = 0; A < jt; A++) {
            const T = M * Hr + E * jt + A,
              x = p[T];
            x <= 1 ||
              ((!m ||
                (M > 0 && p[T - Hr] < x - 1 && a[T - Hr] < 15) ||
                (M + 1 < _a && p[T + Hr] < x - 1 && a[T + Hr] < 15) ||
                (E > 0 && p[T - jt] < x - 1 && a[T - jt] < 15) ||
                (E + 1 < _a && p[T + jt] < x - 1 && a[T + jt] < 15) ||
                (A > 0 && p[T - 1] < x - 1 && a[T - 1] < 15)) &&
                S(T));
          }
      for (; b;) {
        const M = r[g];
        ((g = (g + 1) % Mh), b--, (l[M] = 0));
        const E = M % jt,
          A = Math.floor(M / jt) % _a,
          T = Math.floor(M / Hr),
          x = (R) => {
            const _ = p[M] - Math.max(1, a[R]);
            _ > p[R] && ((p[R] = _), _ > 1 && S(R));
          };
        (T > 0 && x(M - Hr),
          T + 1 < _a && x(M + Hr),
          A > 0 && x(M - jt),
          A + 1 < _a && x(M + jt),
          E > 0 && x(M - 1),
          E + 1 < jt && x(M + 1));
      }
    };
    (d && u(n, !1), u(o, !0));
    const f = (p, m, g, y) => {
      const b = Math.floor(m) - c,
        S = Math.floor(y) - h;
      return (
        (g = Math.floor(g)),
        b < 0 || S < 0 || b >= _a || S >= _a || g < 0 || g >= jt
          ? 0
          : p[b * Hr + S * jt + g]
      );
    };
    return {
      ox: c,
      oz: h,
      data: n,
      at: (p, m, g) => f(n, p, m, g),
      skyAt: (p, m, g) => f(o, p, m, g),
    };
  }
}
const Sre = 32;
function Ere(s, e) {
  if (!s || s.hasAttribute("azureWater")) return;
  const t = s.getAttribute("position"),
    i = new Float32Array(t.count),
    n = new Map();
  for (let o = 0; o < t.count; o++) {
    const a = t.getX(o),
      r = t.getZ(o),
      l = `${a},${r}`;
    let c = n.get(l);
    (c === void 0 && ((c = $Y(e, a, r)), n.set(l, c)), (i[o] = c));
  }
  s.setAttribute("azureWater", new qt(i, 1));
}
function qg(s) {
  if (!s) return null;
  const e = new oi();
  for (const [t, i] of Object.entries(s.attributes))
    e.setAttribute(t, new qt(i.array, i.itemSize, i.normalized));
  return (
    s.index && e.setIndex(new qt(s.index, 1)),
    s.sphere &&
      (e.boundingSphere = new Ar(new k(...s.sphere.center), s.sphere.radius)),
    e
  );
}
const aM = 512,
  rM = 288,
  DC =
    '"Trebuchet MS", "Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif';
function Are(s) {
  const e = document.createElement("canvas");
  ((e.width = aM), (e.height = rM));
  const t = e.getContext("2d"),
    i = s
      .split(
        `
`,
      )
      .slice(0, XI);
  for (; i.length && !i[i.length - 1].trim();) i.pop();
  if (!i.length) return e;
  const n = (rM * 0.86) / Math.max(3, i.length),
    o = (rM - n * i.length) / 2;
  return (
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    i.forEach((a, r) => {
      let l = Math.floor(n * 0.8);
      t.font = `700 ${l}px ${DC}`;
      const c = aM * 0.9,
        h = t.measureText(a).width;
      h > c &&
        ((l = Math.max(14, Math.floor((l * c) / h))),
        (t.font = `700 ${l}px ${DC}`));
      const d = o + n * (r + 0.5),
        u = aM / 2;
      ((t.fillStyle = "rgba(255,236,196,0.55)"),
        t.fillText(a, u, d + Math.max(1.5, l * 0.05)),
        (t.fillStyle = "#26170b"),
        t.fillText(a, u, d));
    }),
    e
  );
}
