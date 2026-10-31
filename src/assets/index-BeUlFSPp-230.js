// index-BeUlFSPp 230 — math
// Lines 120553-120852 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Mn(s, e) {
  return new k(
    s.x + (Math.random() - 0.5) * 2 * e,
    s.y + (Math.random() - 0.5) * 2 * e,
    s.z + (Math.random() - 0.5) * 2 * e,
  );
}
function Nu(s) {
  return (
    $i
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize()
      .multiplyScalar(s * (0.4 + Math.random() * 0.6)),
    $i.clone()
  );
}
let hM = null;
function gle() {
  const s = document.createElement("canvas");
  s.width = s.height = 128;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(64, 64, 0, 64, 64, 64);
  (t.addColorStop(0, "rgba(255,255,255,1)"),
    t.addColorStop(0.18, "rgba(255,255,255,.85)"),
    t.addColorStop(0.45, "rgba(255,255,255,.28)"),
    t.addColorStop(1, "rgba(255,255,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 128, 128));
  const i = new Si(s);
  return ((i.colorSpace = Ii), i);
}
function yle(s, e = 2) {
  const t = Math.floor(s.sampleRate * e),
    i = s.createBuffer(1, t, s.sampleRate),
    n = i.getChannelData(0);
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
      (n[u] = (o + a + r + l + c + h + d + f * 0.5362) * 0.11),
      (d = f * 0.115926));
  }
  return i;
}
function vle(s, e = 2) {
  const t = Math.floor(s.sampleRate * e),
    i = s.createBuffer(1, t, s.sampleRate),
    n = i.getChannelData(0);
  let o = 0;
  for (let a = 0; a < t; a++)
    ((o = (o + 0.02 * (Math.random() * 2 - 1)) / 1.02), (n[a] = o * 3.5));
  return i;
}
function ble(s, e = 2.4, t = 3) {
  const i = s.sampleRate,
    n = Math.floor(i * e),
    o = s.createBuffer(2, n, i);
  for (let a = 0; a < 2; a++) {
    const r = o.getChannelData(a);
    let l = 0;
    for (let c = 0; c < n; c++) {
      const h = c / n,
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
      d < n && (r[d] += h * (a ? -1 : 1));
    }
  }
  return o;
}
function RE(s) {
  let e = s >>> 0;
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
function ZC(s, e) {
  if (e <= s[0][0]) return s[0][1];
  for (let t = 1; t < s.length; t++) {
    const [i, n] = s[t];
    if (e <= i) {
      const [o, a] = s[t - 1],
        r = (e - o) / Math.max(1e-6, i - o);
      return a + (n - a) * (r * r * (3 - 2 * r));
    }
  }
  return s[s.length - 1][1];
}
function wle(s, e) {
  if (e <= s[0][0]) return s[0][1];
  for (let t = 1; t < s.length; t++) {
    const [i, n] = s[t];
    if (e <= i) {
      const [o, a] = s[t - 1],
        r = (e - o) / Math.max(1e-6, i - o),
        l = r * r * (3 - 2 * r);
      return a * Math.pow(n / a, l);
    }
  }
  return s[s.length - 1][1];
}
function Mle(s, e, t) {
  const i = s[0][1].length;
  let n = 1;
  for (; n < s.length && s[n][0] < e;) n++;
  const o = s[Math.max(0, n - 1)],
    a = s[Math.min(s.length - 1, n)],
    r =
      a === o
        ? 0
        : Math.min(1, Math.max(0, (e - o[0]) / Math.max(1e-6, a[0] - o[0]))),
    l = r * r * (3 - 2 * r);
  for (let c = 0; c < i; c++)
    ((t[c * 2] = o[1][c][0] + (a[1][c][0] - o[1][c][0]) * l),
      (t[c * 2 + 1] = o[1][c][1] + (a[1][c][1] - o[1][c][1]) * l));
}
class QC {
  a = 1;
  b = 0;
  c = 0;
  y1 = 0;
  y2 = 0;
  set(e, t, i) {
    const n = 1 / i;
    ((this.c = -Math.exp(-2 * Math.PI * t * n)),
      (this.b =
        2 *
        Math.exp(-Math.PI * t * n) *
        Math.cos(2 * Math.PI * Math.min(e, i * 0.45) * n)),
      (this.a = 1 - this.b - this.c));
  }
  run(e) {
    const t = this.a * e + this.b * this.y1 + this.c * this.y2;
    return ((this.y2 = this.y1), (this.y1 = t), t);
  }
}
class Sle {
  a = 1;
  b = 0;
  c = 0;
  x1 = 0;
  x2 = 0;
  set(e, t, i) {
    const n = 1 / i,
      o = -Math.exp(-2 * Math.PI * t * n),
      a = 2 * Math.exp(-Math.PI * t * n) * Math.cos(2 * Math.PI * e * n),
      r = 1 - a - o;
    ((this.a = 1 / r), (this.b = -a / r), (this.c = -o / r));
  }
  run(e) {
    const t = this.a * e + this.b * this.x1 + this.c * this.x2;
    return ((this.x2 = this.x1), (this.x1 = e), t);
  }
}
function JC(s, e) {
  const t = e * 0.76,
    i = e * 0.24;
  return s < t
    ? 0.5 * (1 - Math.cos((Math.PI * s) / t))
    : s < t + i
      ? Math.cos((0.5 * Math.PI * (s - t)) / i)
      : 0;
}
function Ele(s, e, t = 1) {
  const i = e,
    n = Math.max(1, Math.ceil(s.dur * i)),
    o = new Float32Array(n + Math.ceil(0.03 * i)),
    a = RE(t * 7919 + 13),
    r = s.open ?? 0.6,
    l = s.jitter ?? 0.006,
    c = s.shimmer ?? 0.05,
    h = s.breath ?? 0.12,
    d = s.rough ?? 0,
    u = s.drift ?? 18,
    f = s.formants[0][1].length,
    p = Array.from({ length: f }, () => new QC()),
    m = new QC(),
    g = new Sle();
  (m.set(260, 90, i), g.set(520, 120, i));
  const y = { y: 0, k: s.tilt ? 1 - Math.exp((-2 * Math.PI * s.tilt) / i) : 1 },
    b = { y: 0, k: 1 - Math.exp((-2 * Math.PI * (7400 - r * 3800)) / i) },
    S = new Float64Array(f * 2);
  let M = 0,
    E = 0,
    A = 0,
    T = 1,
    x = 1,
    R = 0,
    _ = 0,
    C = 0,
    P = 0,
    O = 0,
    B = 0;
  const H = s.bright ?? 0.72,
    D = 32;
  let U = 0;
  for (let ne = 0; ne < n; ne++) {
    const ge = ne / n;
    if (ne % D === 0) {
      Mle(s.formants, ge, S);
      for (let Re = 0; Re < f; Re++) p[Re].set(S[Re * 2], S[Re * 2 + 1], i);
      ((U = s.nasal ? ZC(s.nasal, ge) : 0),
        (E += (a() - 0.5) * 0.9 - E * 0.08 - M * 0.002),
        (M += E * 0.1));
    }
    let be =
      wle(s.pitch, ge) *
      Math.pow(2, (Math.max(-1, Math.min(1, M / 4)) * u) / 1200);
    s.vibrato &&
      (be *= Math.pow(
        2,
        (Math.sin((2 * Math.PI * s.vibrato[0] * ne) / i) * s.vibrato[1]) / 1200,
      ));
    let oe = 0;
    s.unvoiced ||
      ((A += (be * T) / i),
      A >= 1 &&
        ((A -= 1),
        R++,
        (T = 1 + (a() - 0.5) * 2 * l),
        (x = (1 + (a() - 0.5) * 2 * c) * (d > 0 && R & 1 ? 1 - d * 0.7 : 1))),
      (oe = JC(A, r) * x));
    const he = a() * 2 - 1;
    O += (he - O) * 0.55;
    const Ie = s.unvoiced ? 1 : 0.35 + 0.65 * JC(A, Math.min(0.95, r + 0.15));
    let ve = oe * (1 - h * 0.5) + O * h * Ie * 0.9;
    ((b.y += (ve - b.y) * b.k), (ve = b.y));
    const it = ve - H * B;
    if (((B = ve), (ve = it), U > 0.001)) {
      const Re = g.run(m.run(ve));
      ve = ve * (1 - U * 0.85) + Re * U * 0.6;
    }
    let st = ve;
    for (let Re = 0; Re < f; Re++) st = p[Re].run(st);
    let ot = st - _;
    ((_ = st),
      (P = ot - C + 0.995 * P),
      (C = ot),
      (ot = P),
      (y.y += (ot - y.y) * y.k));
    let at = ZC(s.amp, ge);
    (s.tremolo &&
      (at *=
        1 -
        s.tremolo[1] *
          0.5 *
          (1 - Math.cos((2 * Math.PI * s.tremolo[0] * ne) / i))),
      (o[ne] = y.y * at));
  }
  const W = Math.min(n >> 2, Math.round(0.006 * i));
  for (let ne = 0; ne < W; ne++) {
    const ge = ne / W;
    ((o[ne] *= ge), (o[n - 1 - ne] *= ge));
  }
  let J = 0;
  for (let ne = 0; ne < o.length; ne++) J = Math.max(J, Math.abs(o[ne]));
  const j = J > 0 ? (0.9 * (s.gain ?? 1)) / J : 0;
  for (let ne = 0; ne < o.length; ne++) o[ne] *= j;
  return o;
}
function Ale(s, e) {
  const t = Math.max(...s.map((o) => Math.round(o.at * e) + o.samples.length)),
    i = new Float32Array(t);
  for (const o of s) {
    const a = Math.round(o.at * e),
      r = o.gain ?? 1;
    for (let l = 0; l < o.samples.length; l++) i[a + l] += o.samples[l] * r;
  }
  let n = 0;
  for (let o = 0; o < t; o++) n = Math.max(n, Math.abs(i[o]));
  if (n > 0.95) for (let o = 0; o < t; o++) i[o] *= 0.95 / n;
  return i;
}
const Qp = { PIG: 0, CHICKEN: 1, SHEEP: 2, COW: 3, CAMEL: 4 };
