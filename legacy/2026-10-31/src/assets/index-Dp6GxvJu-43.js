// index-Dp6GxvJu 43 — math
// Lines 41615-41809 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function WG(n, e, t, i) {
  const o = Math.floor(e / 42),
    a = Math.floor(t / 42),
    r = [];
  for (let u = -1; u <= 1; u++)
    for (let f = -1; f <= 1; f++) {
      const p = o + u,
        m = a + f;
      if (rn(n + 733, p, m) < 0.43) continue;
      const y = p * 42 + 7 + rn(n + 739, p, m) * 28,
        g = m * 42 + 7 + rn(n + 743, p, m) * 28,
        b = 10 + rn(n + 751, p, m) * Math.max(8, Math.min(42, i - 20)),
        S = 5.5 + rn(n + 757, p, m) * 7,
        M = 5.5 + rn(n + 761, p, m) * 7,
        x = 2.8 + rn(n + 769, p, m) * 4.2,
        T = ((e - y) / S) ** 2,
        A = ((t - g) / M) ** 2;
      T + A < 1 && r.push({ x2: T, z2: A, cy: b, ry: x });
    }
  const l = 88,
    c = Math.floor(e / l),
    h = Math.floor(t / l),
    d = [];
  for (let u = -1; u <= 1; u++)
    for (let f = -1; f <= 1; f++) {
      const p = c + u,
        m = h + f;
      if (rn(n + 773, p, m) < 0.72) continue;
      const y = p * l + 12 + rn(n + 787, p, m) * (l - 24),
        g = m * l + 12 + rn(n + 797, p, m) * (l - 24),
        b = rn(n + 809, p, m) * Math.PI * 2;
      d.push({ ex: y, ez: g, cos: Math.cos(b), sin: Math.sin(b) });
    }
  return (u) => {
    if (u < 3 || u >= i - 5) return !1;
    const f = Fs(n + 711, e * 0.026 + u * 0.009, t * 0.026 - u * 0.006, 3),
      p = u < 16 ? -0.05 : 0;
    if (
      Math.abs(f) > 0.59 + p &&
      Math.abs(Fs(n + 719, e * 0.019 - u * 0.012, t * 0.019 + u * 0.01, 2)) >
        0.29
    )
      return !0;
    for (const y of r)
      if (y.x2 + ((u - y.cy) / y.ry) ** 2 + y.z2 < 1) return !0;
    const m = i - u;
    if (m >= 5 && m <= 18) {
      const y = (m - 5) * 0.36,
        g = 1.55 + m * 0.055;
      for (const b of d) {
        const S = b.ex + b.cos * y,
          M = b.ez + b.sin * y;
        if ((e - S) ** 2 + (t - M) ** 2 < g ** 2) return !0;
      }
    }
    return !1;
  };
}
function VG(n, e, t, i) {
  if (i !== "desert" && i !== "mountains") return -1;
  const s = 72,
    o = Math.floor(e / s),
    a = Math.floor(t / s);
  for (let r = -1; r <= 1; r++)
    for (let l = -1; l <= 1; l++) {
      if (rn(n + 880, o + r, a + l) < 0.91) continue;
      const h = (o + r) * s + 12 + rn(n + 881, o + r, a + l) * (s - 24),
        d = (a + l) * s + 12 + rn(n + 882, o + r, a + l) * (s - 24),
        u = 4 + rn(n + 883, o + r, a + l) * 5;
      if ((e - h) ** 2 + (t - d) ** 2 <= u ** 2)
        return cu(n, Math.floor(h), Math.floor(d)) - 2;
    }
  return -1;
}
function $G(n, e, t, i, s) {
  const o = (r, l, c) => {
    if (r < 0 || r >= Pe || c < 0 || c >= Pe || l >= Kt) return;
    const h = packColor(r, l, c);
    n[h] === BLOCK.AIR && (n[h] = BLOCK.TROPICAL_LEAVES);
  };
  o(e, t + 1, i);
  const a = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [r, l] of a) s() < 0.58 && o(e + r, t + 1, i + l);
  s() < 0.24 && o(e, t + 2, i);
}
const ps = 3,
  DT = (n) =>
    [
      "savanna",
      "yellowstone",
      "volcanic",
      "alpine",
      "oasis",
      "islands",
    ].includes(n);
function qG(n, e, t) {
  const i = Pe + 2 * ps,
    s = new Float32Array(i * i),
    o = new Array(Pe * Pe);
  for (let a = -ps; a < Pe + ps; a++)
    for (let r = -ps; r < Pe + ps; r++) {
      const l = ZS(n, e * Pe + r, t * Pe + a);
      ((s[r + ps + (a + ps) * i] = l.height),
        r >= 0 &&
          r < Pe &&
          a >= 0 &&
          a < Pe &&
          (o[r + a * Pe] = {
            height: l.height,
            biome: l.biome,
            heat: l.heat,
            wet: l.wet,
          }));
    }
  for (let a = 0; a < Pe; a++)
    for (let r = 0; r < Pe; r++) {
      let l = 0,
        c = 0;
      for (let h = -ps; h <= ps; h++)
        for (let d = -ps; d <= ps; d++) {
          const u = (ps + 1 - Math.abs(d)) * (ps + 1 - Math.abs(h));
          ((l += s[r + d + ps + (a + h + ps) * i] * u), (c += u));
        }
      o[r + a * Pe].height = Math.floor(l / c);
    }
  return o;
}
function KG(n, e, t) {
  let i = 0,
    s = 0;
  for (let o = -ps; o <= ps; o++)
    for (let a = -ps; a <= ps; a++) {
      const r = (ps + 1 - Math.abs(a)) * (ps + 1 - Math.abs(o));
      ((i += cu(n, e + a, t + o) * r), (s += r));
    }
  return Math.floor(i / s);
}
const Bc = 6;
function Ck(n, e, t) {
  return {
    gx: e,
    gz: t,
    x: e * Bc + Math.floor(rn(n + 941, e, t) * Bc),
    z: t * Bc + Math.floor(rn(n + 947, e, t) * Bc),
    priority: rn(n + 953, e, t),
  };
}
function YG(n, e, t) {
  const i = {
      savanna: 0.2,
      yellowstone: 0.4,
      volcanic: 0,
      alpine: 0.15,
      oasis: 0.48,
      islands: 0.6,
      ocean: 0,
      plains: 0.13,
      mountains: 0.2,
      desert: 0.11,
      jungle: 0.9,
      forest: 0.78,
      winter: 0.4,
      autumn: 0.8,
    },
    s = Fs(n + 931, e.x * 0.0022, e.z * 0.0022, 3),
    o = Fs(n + 937, e.x * 0.0055, e.z * 0.0055, 2);
  let a = i[t] * clamp(0.7 + s * 0.82 + o * 0.28, 0.08, 1.15);
  if (
    (t === "plains" && (s < -0.16 || o < -0.34) && (a *= 0.06),
    (t === "forest" || t === "jungle" || t === "autumn") &&
      s < -0.38 &&
      (a *= 0.24),
    rn(n + 967, e.gx, e.gz) >= a)
  )
    return !1;
  const r =
    t === "jungle"
      ? 4.8
      : t === "forest" || t === "winter" || t === "autumn"
        ? 4.2
        : 3.7;
  for (let l = -1; l <= 1; l++)
    for (let c = -1; c <= 1; c++) {
      if (l === 0 && c === 0) continue;
      const h = Ck(n, e.gx + l, e.gz + c);
      if (h.priority > e.priority && Math.hypot(h.x - e.x, h.z - e.z) < r)
        return !1;
    }
  return !0;
}
