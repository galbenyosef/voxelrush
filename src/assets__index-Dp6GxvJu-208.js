// assets__index-Dp6GxvJu 208 — math
// Lines 113867-114169 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function rs(n, e) {
  return new k(
    n.x + (Math.random() - 0.5) * 2 * e,
    n.y + (Math.random() - 0.5) * 2 * e,
    n.z + (Math.random() - 0.5) * 2 * e,
  );
}
function Sd(n) {
  return (
    Oi.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize()
      .multiplyScalar(n * (0.4 + Math.random() * 0.6)),
    Oi.clone()
  );
}
let Fb = null;
function Jte() {
  const n = document.createElement("canvas");
  n.width = n.height = 128;
  const e = n.getContext("2d"),
    t = e.createRadialGradient(64, 64, 0, 64, 64, 64);
  (t.addColorStop(0, "rgba(255,255,255,1)"),
    t.addColorStop(0.18, "rgba(255,255,255,.85)"),
    t.addColorStop(0.45, "rgba(255,255,255,.28)"),
    t.addColorStop(1, "rgba(255,255,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 128, 128));
  const i = new bi(n);
  return ((i.colorSpace = vi), i);
}
function eie(n, e = 2) {
  const t = Math.floor(n.sampleRate * e),
    i = n.createBuffer(1, t, n.sampleRate),
    s = i.getChannelData(0);
  let o = 0,
    a = 0,
    r = 0,
    l = 0,
    c = 0,
    h = 0,
    d = 0;
  for (let u = 0; u < t; u++) {
    const f = Math.random() * 2 - 1;
    ((o = 0.99886 * o + f * 0.0555179),
      (a = 0.99332 * a + f * 0.0750759),
      (r = 0.969 * r + f * 0.153852),
      (l = 0.8665 * l + f * 0.3104856),
      (c = 0.55 * c + f * 0.5329522),
      (h = -0.7616 * h - f * 0.016898),
      (s[u] = (o + a + r + l + c + h + d + f * 0.5362) * 0.11),
      (d = f * 0.115926));
  }
  return i;
}
function tie(n, e = 2) {
  const t = Math.floor(n.sampleRate * e),
    i = n.createBuffer(1, t, n.sampleRate),
    s = i.getChannelData(0);
  let o = 0;
  for (let a = 0; a < t; a++)
    ((o = (o + 0.02 * (Math.random() * 2 - 1)) / 1.02), (s[a] = o * 3.5));
  return i;
}
function iie(n, e = 2.4, t = 3) {
  const i = n.sampleRate,
    s = Math.floor(i * e),
    o = n.createBuffer(2, s, i);
  for (let a = 0; a < 2; a++) {
    const r = o.getChannelData(a);
    let l = 0;
    for (let c = 0; c < s; c++) {
      const h = c / s,
        d = 0.85 - 0.7 * h;
      ((l += (Math.random() * 2 - 1 - l) * d),
        (r[c] = l * Math.pow(1 - h, t) * (h < 0.012 ? h / 0.012 : 1)));
    }
    for (const [c, h] of [
      [0.011, 0.5],
      [0.023, 0.34],
      [0.041, 0.26],
      [0.067, 0.2],
      [0.093, 0.14],
    ]) {
      const d = Math.floor((c + (a ? 0.0037 : 0)) * i);
      d < s && (r[d] += h * (a ? -1 : 1));
    }
  }
  return o;
}
function VM(n) {
  let e = n >>> 0;
  return () => {
    e = (e + 1831565813) >>> 0;
    let t = e;
    return (
      (t = Math.imul(t ^ (t >>> 15), t | 1)),
      (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function xR(n, e) {
  if (e <= n[0][0]) return n[0][1];
  for (let t = 1; t < n.length; t++) {
    const [i, s] = n[t];
    if (e <= i) {
      const [o, a] = n[t - 1],
        r = (e - o) / Math.max(1e-6, i - o);
      return a + (s - a) * (r * r * (3 - 2 * r));
    }
  }
  return n[n.length - 1][1];
}
function nie(n, e) {
  if (e <= n[0][0]) return n[0][1];
  for (let t = 1; t < n.length; t++) {
    const [i, s] = n[t];
    if (e <= i) {
      const [o, a] = n[t - 1],
        r = (e - o) / Math.max(1e-6, i - o),
        l = r * r * (3 - 2 * r);
      return a * Math.pow(s / a, l);
    }
  }
  return n[n.length - 1][1];
}
function sie(n, e, t) {
  const i = n[0][1].length;
  let s = 1;
  for (; s < n.length && n[s][0] < e;) s++;
  const o = n[Math.max(0, s - 1)],
    a = n[Math.min(n.length - 1, s)],
    r =
      a === o
        ? 0
        : Math.min(1, Math.max(0, (e - o[0]) / Math.max(1e-6, a[0] - o[0]))),
    l = r * r * (3 - 2 * r);
  for (let c = 0; c < i; c++)
    ((t[c * 2] = o[1][c][0] + (a[1][c][0] - o[1][c][0]) * l),
      (t[c * 2 + 1] = o[1][c][1] + (a[1][c][1] - o[1][c][1]) * l));
}
class TR {
  constructor() {
    w(this, "a", 1);
    w(this, "b", 0);
    w(this, "c", 0);
    w(this, "y1", 0);
    w(this, "y2", 0);
  }
  set(e, t, i) {
    const s = 1 / i;
    ((this.c = -Math.exp(-2 * Math.PI * t * s)),
      (this.b =
        2 *
        Math.exp(-Math.PI * t * s) *
        Math.cos(2 * Math.PI * Math.min(e, i * 0.45) * s)),
      (this.a = 1 - this.b - this.c));
  }
  run(e) {
    const t = this.a * e + this.b * this.y1 + this.c * this.y2;
    return ((this.y2 = this.y1), (this.y1 = t), t);
  }
}
class oie {
  constructor() {
    w(this, "a", 1);
    w(this, "b", 0);
    w(this, "c", 0);
    w(this, "x1", 0);
    w(this, "x2", 0);
  }
  set(e, t, i) {
    const s = 1 / i,
      o = -Math.exp(-2 * Math.PI * t * s),
      a = 2 * Math.exp(-Math.PI * t * s) * Math.cos(2 * Math.PI * e * s),
      r = 1 - a - o;
    ((this.a = 1 / r), (this.b = -a / r), (this.c = -o / r));
  }
  run(e) {
    const t = this.a * e + this.b * this.x1 + this.c * this.x2;
    return ((this.x2 = this.x1), (this.x1 = e), t);
  }
}
function AR(n, e) {
  const t = e * 0.76,
    i = e * 0.24;
  return n < t
    ? 0.5 * (1 - Math.cos((Math.PI * n) / t))
    : n < t + i
      ? Math.cos((0.5 * Math.PI * (n - t)) / i)
      : 0;
}
function aie(n, e, t = 1) {
  const i = e,
    s = Math.max(1, Math.ceil(n.dur * i)),
    o = new Float32Array(s + Math.ceil(0.03 * i)),
    a = VM(t * 7919 + 13),
    r = n.open ?? 0.6,
    l = n.jitter ?? 0.006,
    c = n.shimmer ?? 0.05,
    h = n.breath ?? 0.12,
    d = n.rough ?? 0,
    u = n.drift ?? 18,
    f = n.formants[0][1].length,
    p = Array.from({ length: f }, () => new TR()),
    m = new TR(),
    y = new oie();
  (m.set(260, 90, i), y.set(520, 120, i));
  const g = { y: 0, k: n.tilt ? 1 - Math.exp((-2 * Math.PI * n.tilt) / i) : 1 },
    b = { y: 0, k: 1 - Math.exp((-2 * Math.PI * (7400 - r * 3800)) / i) },
    S = new Float64Array(f * 2);
  let M = 0,
    x = 0,
    T = 0,
    A = 1,
    _ = 1,
    C = 0,
    R = 0,
    L = 0,
    N = 0,
    D = 0,
    H = 0;
  const G = n.bright ?? 0.72,
    I = 32;
  let O = 0;
  for (let ee = 0; ee < s; ee++) {
    const se = ee / s;
    if (ee % I === 0) {
      sie(n.formants, se, S);
      for (let ve = 0; ve < f; ve++) p[ve].set(S[ve * 2], S[ve * 2 + 1], i);
      ((O = n.nasal ? xR(n.nasal, se) : 0),
        (x += (a() - 0.5) * 0.9 - x * 0.08 - M * 0.002),
        (M += x * 0.1));
    }
    let oe =
      nie(n.pitch, se) *
      Math.pow(2, (Math.max(-1, Math.min(1, M / 4)) * u) / 1200);
    n.vibrato &&
      (oe *= Math.pow(
        2,
        (Math.sin((2 * Math.PI * n.vibrato[0] * ee) / i) * n.vibrato[1]) / 1200,
      ));
    let J = 0;
    n.unvoiced ||
      ((T += (oe * A) / i),
      T >= 1 &&
        ((T -= 1),
        C++,
        (A = 1 + (a() - 0.5) * 2 * l),
        (_ = (1 + (a() - 0.5) * 2 * c) * (d > 0 && C & 1 ? 1 - d * 0.7 : 1))),
      (J = AR(T, r) * _));
    const re = a() * 2 - 1;
    D += (re - D) * 0.55;
    const Ce = n.unvoiced ? 1 : 0.35 + 0.65 * AR(T, Math.min(0.95, r + 0.15));
    let Re = J * (1 - h * 0.5) + D * h * Ce * 0.9;
    ((b.y += (Re - b.y) * b.k), (Re = b.y));
    const We = Re - G * H;
    if (((H = Re), (Re = We), O > 0.001)) {
      const ve = y.run(m.run(Re));
      Re = Re * (1 - O * 0.85) + ve * O * 0.6;
    }
    let it = Re;
    for (let ve = 0; ve < f; ve++) it = p[ve].run(it);
    let ut = it - R;
    ((R = it),
      (N = ut - L + 0.995 * N),
      (L = ut),
      (ut = N),
      (g.y += (ut - g.y) * g.k));
    let gt = xR(n.amp, se);
    (n.tremolo &&
      (gt *=
        1 -
        n.tremolo[1] *
          0.5 *
          (1 - Math.cos((2 * Math.PI * n.tremolo[0] * ee) / i))),
      (o[ee] = g.y * gt));
  }
  const F = Math.min(s >> 2, Math.round(0.006 * i));
  for (let ee = 0; ee < F; ee++) {
    const se = ee / F;
    ((o[ee] *= se), (o[s - 1 - ee] *= se));
  }
  let X = 0;
  for (let ee = 0; ee < o.length; ee++) X = Math.max(X, Math.abs(o[ee]));
  const Q = X > 0 ? (0.9 * (n.gain ?? 1)) / X : 0;
  for (let ee = 0; ee < o.length; ee++) o[ee] *= Q;
  return o;
}
function rie(n, e) {
  const t = Math.max(...n.map((o) => Math.round(o.at * e) + o.samples.length)),
    i = new Float32Array(t);
  for (const o of n) {
    const a = Math.round(o.at * e),
      r = o.gain ?? 1;
    for (let l = 0; l < o.samples.length; l++) i[a + l] += o.samples[l] * r;
  }
  let s = 0;
  for (let o = 0; o < t; o++) s = Math.max(s, Math.abs(i[o]));
  if (s > 0.95) for (let o = 0; o < t; o++) i[o] *= 0.95 / s;
  return i;
}
const Mf = { PIG: 0, CHICKEN: 1, SHEEP: 2, COW: 3, CAMEL: 4 };
