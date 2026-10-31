// index-BeUlFSPp 40 — math
// Lines 39764-40111 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function nf(s, e) {
  return Xr(880, 1460, Math.abs(e) + kh(5, s, e, 0.0011, 3) * 240);
}
function JV(s, e) {
  const t = e + Math.sin(s * 0.0041) * 37,
    i = s + Math.sin(e * 0.0033) * 45,
    n = ((t % 190) + 190) % 190,
    o = ((i % 240) + 240) % 240,
    a = Math.min(Math.abs(n - 95), Math.abs(o - 120));
  let r = Math.floor((t + 95) / 190),
    l = Math.floor((i + 120) / 240),
    c = (((t + 95) % 190) + 190) % 190,
    h = (((i + 120) % 240) + 240) % 240;
  (r < -r || (r === -r && l < -l)) &&
    ((r = -r), (l = -l), (c = 190 - c), (h = 240 - h));
  const d = Oi(Xo + 67, l, r),
    u =
      d < 0.35
        ? 0
        : d < 0.6
          ? c < 80 + d * 60
            ? 1
            : 2
          : d < 0.85
            ? h < 70 + d * 80
              ? 3
              : 4
            : Math.min(2, Math.floor(h / 80)) + 5,
    f = Oi(Xo + 61 + u * 13, l, r);
  return {
    line: a,
    crop: f < 0.42 ? 0 : f < 0.62 ? 1 : f < 0.72 ? 2 : f < 0.82 ? 3 : 4,
  };
}
const F2 = 22;
function FP(s, e) {
  (s < 0 || (s === 0 && e < 0)) && ((s = -s), (e = -e));
  const t = Math.floor(s / F2),
    i = Math.floor(e / F2);
  let n = 0,
    o = !1;
  for (let a = i - 1; a <= i + 1; a++)
    for (let r = t - 1; r <= t + 1; r++) {
      const l = (r + 0.25 + Oi(Xo + 137, r, a) * 0.5) * F2,
        c = (a + 0.25 + Oi(Xo + 139, r, a) * 0.5) * F2,
        h = 2.6 + Oi(Xo + 149, r, a) * 3.4,
        d = Math.hypot(s - l, e - c);
      if (d > h + 1.6 || l < h + 3) continue;
      let u = 0.012 + 0.2 * Xr(380, 0, l);
      for (const f of _A)
        u = Math.max(u, 0.42 * Xr(430, 140, Math.hypot(l - f.x, c - f.z)));
      Oi(Xo + 131, r, a) > u * Xr(0.3, 0.1, nf(l, c)) ||
        (d < h ? (n = Math.max(n, (1 - (d / h) ** 2) * h * 0.55)) : (o = !0));
    }
  return n > 0 ? n : o ? -0.7 : 0;
}
function fm(s, e) {
  const t = nf(s, e),
    i = kh(37, s, e, 0.0042, 3),
    n = kh(41, s, e, 0.021, 2),
    o = Math.pow(Lc(kh(43, s, e, 0.0026, 2) - 0.05, 0, 1), 1.6) * 16,
    a = 49 + i * 4 + o + n * 0.5,
    r = Math.pow(Lc(1 - Math.abs(kh(23, s, e, 0.0012, 4)), 0, 1), 3),
    l = Lc(kh(29, s, e, 7e-4, 3), -0.4, 1),
    c = 56 + r * 50 + l * 18 + i * 7 + n * 1.6;
  let h = Xh(a, c, t);
  const d = Math.abs(kh(53, s, e, 9e-4, 3)),
    u = Xr(0.05, 0.016, d) * Xr(0.25, 0.6, t);
  h = Xh(h, Math.min(h, Bs - 2), u);
  const f = Xr(jV - 260, vn - 60, Math.max(Math.abs(s), Math.abs(e)));
  return Xh(h, 22, f);
}
const H5 = _A.map((s) => ({
    zone: s.id,
    x: s.x,
    z: s.z,
    y: Math.round(Lc(fm(s.x, s.z), Bs + 6, 96)),
  })),
  RA = 34,
  UP = {
    1: Math.round(Lc(fm(Ua[1].x, Ua[1].z), Bs + 6, 80)),
    2: Math.round(Lc(fm(Ua[2].x, Ua[2].z), Bs + 6, 80)),
  },
  eq = [
    { x: 640, z: -400, rot: 1 },
    { x: 250, z: 320, rot: 0 },
  ],
  tq = 78,
  kA = (() => {
    const s = [],
      e = (i, n) => Math.round(Lc(fm(i, n), Bs + 4, 90)),
      t = (i, n, o) => {
        if (nf(i, n) > 0.12 || Math.abs(i) > ZV[2].x - 420 || Math.abs(n) > 820)
          return !1;
        for (const a of _A)
          if (Math.hypot(i - a.x, n - a.z) < 150 + o) return !1;
        for (const a of [1, 2])
          if (Math.hypot(i - Ua[a].x, n - Ua[a].z) < 170 + o) return !1;
        for (const a of s)
          if (
            Math.hypot(i - a.x, n - a.z) < a.r + o + 60 ||
            Math.hypot(i + a.x, n + a.z) < a.r + o + 60
          )
            return !1;
        return !0;
      };
    for (const [i, n] of eq.entries())
      s.push({
        x: n.x,
        z: n.z,
        y: e(n.x, n.z),
        r: tq,
        kind: "village",
        rot: n.rot,
        seed: 11 + i,
      });
    for (let i = -4; i <= 4; i++)
      for (let n = 0; n <= 8; n++) {
        const o = Oi(Xo + 211, n, i);
        if (o > 0.3) continue;
        let a = n * 240,
          r = i * 190;
        for (let l = 0; l < 4; l++)
          ((a = n * 240 - Math.sin(r * 0.0033) * 45),
            (r = i * 190 - Math.sin(a * 0.0041) * 37));
        ((a += (Oi(Xo + 213, n, i) - 0.5) * 50),
          (r += (Oi(Xo + 217, n, i) - 0.5) * 40),
          (a = Math.round(a)),
          (r = Math.round(r)),
          !(a < 60 || !t(a, r, 30)) &&
            s.push({
              x: a,
              z: r,
              y: e(a, r),
              r: 30,
              kind: o < 0.11 ? "ruin" : "farm",
              rot: Math.floor(Oi(Xo + 219, n, i) * 4),
              seed: n * 31 + i * 7 + 100,
            }));
      }
    for (const i of [...s])
      s.push({ ...i, x: -i.x, z: -i.z, rot: (i.rot + 2) % 4 });
    return s;
  })(),
  $u = 128,
  iq = (() => {
    const s = new Map();
    for (const e of kA) {
      const t = e.r + 44;
      for (
        let i = Math.floor((e.x - t) / $u);
        i <= Math.floor((e.x + t) / $u);
        i++
      )
        for (
          let n = Math.floor((e.z - t) / $u);
          n <= Math.floor((e.z + t) / $u);
          n++
        ) {
          const o = (i + 512) * 1024 + n + 512;
          let a = s.get(o);
          (a || s.set(o, (a = [])), a.push(e));
        }
    }
    return s;
  })(),
  GP = (s, e) =>
    iq.get((Math.floor(s / $u) + 512) * 1024 + Math.floor(e / $u) + 512),
  sq = (s, e, t) => {
    const i = e - s.x,
      n = t - s.z;
    return s.rot === 0
      ? { a: i, b: n }
      : s.rot === 1
        ? { a: n, b: -i }
        : s.rot === 2
          ? { a: -i, b: -n }
          : { a: -n, b: i };
  };
function WP(s, e) {
  for (const t of GP(s, e) ?? [])
    if (Math.hypot(s - t.x, e - t.z) < t.r) return t;
  return null;
}
function vy(s, e, t = !0) {
  let i = fm(s, e);
  t && i > Bs + 2 && (i -= FP(s, e));
  for (const n of GP(s, e) ?? []) {
    const o = Math.hypot(s - n.x, e - n.z) - n.r;
    o < 40 && (i = Xh(i, n.y, Xr(40, 0, o)));
  }
  for (const n of [1, 2]) {
    const o = zP(Km(n, s), Ym(n, e), x0.x1, x0.z1, x0.x2, x0.z2);
    o < 160 && (i = Xh(i, BP, Xr(160, 0, o)));
    const a = Math.hypot(s - Ua[n].x, e - Ua[n].z) - um;
    a < 80 && (i = Xh(i, UP[n], Xr(80, 0, a)));
  }
  for (const n of H5) {
    const o = Math.hypot(s - n.x, e - n.z) - RA;
    o < 90 && (i = Xh(i, n.y, Xr(90, 0, o)));
  }
  return Math.round(Lc(i, 6, jt - 10));
}
const V0 = (s) => sd + s,
  $P = V0(7),
  mr = V0(8),
  of = V0(0),
  cv = V0(15),
  hv = V0(13),
  nq = V0(4),
  $S = { 1: V0(3), 2: V0(14) },
  oq = [v.GRASS, v.STUBBLE_FIELD, v.WHEAT_FIELD, v.CROP_FIELD, v.FARMLAND];
function aq(s, e) {
  for (const t of [1, 2])
    if (
      zP(Km(t, s), Ym(t, e), x0.x1, x0.z1, x0.x2, x0.z2) < 40 ||
      Math.hypot(s - Ua[t].x, e - Ua[t].z) < um + 30
    )
      return !0;
  for (const t of H5) if (Math.hypot(s - t.x, e - t.z) < RA + 24) return !0;
  return !!WP(s, e);
}
function rq(s, e, t, i) {
  for (const o of [1, 2]) {
    if (d_(s, e, C1, o)) {
      const a = Km(o, s),
        r = Ym(o, e);
      return Math.abs(r) === 14 ||
        ((a < C1.x1 + 14 || a > C1.x2 - 14) &&
          Math.abs(r) < 13 &&
          Math.abs(r) % 4 < 2) ||
        (Math.abs(r) < 1 && (a >> 3) & 1)
        ? of
        : $P;
    }
    if (d_(s, e, QV, o) || Math.hypot(s - Ua[o].x, e - Ua[o].z) < um - 2)
      return mr;
  }
  for (const o of H5) if (Math.hypot(s - o.x, e - o.z) < RA - 4) return mr;
  if (t <= Bs + 1) return t < Bs - 6 ? v.GRAVEL : v.SAND;
  if (t >= 104 && i < 1.6) return v.SNOW;
  if (t >= 92 || (i >= 1.25 && nf(s, e) > 0.2)) return v.STONE;
  const n = WP(s, e);
  if (n) {
    const { a: o, b: a } = sq(n, s, e);
    return n.kind === "village"
      ? (Math.abs(a) < 3 && Math.abs(o) < n.r - 4) ||
        (Math.abs(o) < 2 && Math.abs(a) < n.r - 10)
        ? v.GRAVEL
        : v.GRASS
      : Math.abs(a) < 2 && o > -4 && o < n.r
        ? v.DIRT
        : n.kind === "ruin" && Oi(Xo + 229, s, e) < 0.25
          ? v.GRAVEL
          : v.GRASS;
  }
  if (nf(s, e) < 0.3 && FP(s, e) > 0.4)
    return Oi(Xo + 233, s, e) < 0.3 ? v.GRAVEL : v.DIRT;
  if (nf(s, e) < 0.25 && !aq(s, e)) {
    const o = JV(s, e);
    if (o.line > 3) return oq[o.crop];
  }
  return v.GRASS;
}
const B5 = (s, e, t, i, n, o, a, r) =>
  s.push({
    x1: Math.min(e, n),
    y1: Math.min(t, o),
    z1: Math.min(i, a),
    x2: Math.max(e, n),
    y2: Math.max(t, o),
    z2: Math.max(i, a),
    id: r,
  });
function u_(s) {
  const e = [],
    t = BP + 1,
    i = (a) => Km(s, a),
    n = (a) => Ym(s, a),
    o = (a, r, l, c, h, d, u) => B5(e, i(a), r, n(l), i(c), h, n(d), u);
  for (const a of [-2520, -2420, -2320])
    (o(a, t, -112, a + 60, t, -80, mr),
      o(a, t + 1, -112, a, t + 11, -80, mr),
      o(a + 60, t + 1, -112, a + 60, t + 11, -80, mr),
      o(a, t + 1, -112, a + 60, t + 11, -112, mr),
      o(a - 1, t + 12, -113, a + 61, t + 12, -79, $P),
      o(a + 4, t + 12, -100, a + 56, t + 12, -92, $S[s]));
  (o(-2220, t, -40, -2213, t + 18, -33, mr),
    o(-2222, t + 19, -42, -2211, t + 22, -31, v.GLASS),
    o(-2223, t + 23, -43, -2210, t + 23, -30, cv));
  for (const [a, r] of [
    [-2640, -60],
    [-2640, -40],
    [-2620, -60],
    [-2620, -40],
  ])
    o(a, t, r, a + 9, t + 6, r + 9, of);
  for (let a = C1.x1; a <= C1.x2; a += 40)
    for (const r of [-17, 17]) o(a, t, r, a, t, r, v.GLOWSTONE);
  return e;
}
function lq(s) {
  const e = [],
    t = s.y + 1,
    i = (n, o, a, r, l, c, h) =>
      B5(e, s.x + n, o, s.z + a, s.x + r, l, s.z + c, h);
  (i(-1, t, -1, 1, t + 11, 1, cv),
    i(-5, t + 12, -1, 5, t + 15, 1, of),
    i(-1, t + 12, -3, 1, t + 15, 3, of));
  for (const n of [0, 2.094, 4.189]) {
    const o = Math.round(Math.cos(n) * 17),
      a = Math.round(Math.sin(n) * 17);
    (i(o - 3, t, a - 2, o + 3, t + 1, a + 2, hv),
      i(o - 2, t + 2, a - 2, o + 2, t + 4, a + 2, hv),
      i(o - 1, t + 5, a - 1, o + 1, t + 7, a + 1, nq));
  }
  return (
    i(-6, t, 8, 6, t + 4, 14, v.STONE_BRICKS),
    i(-7, t + 5, 7, 7, t + 5, 15, mr),
    e
  );
}
function f_(s) {
  const e = [],
    t = Ua[s],
    i = UP[s] + 1,
    n = s === 1 ? 1 : -1,
    o = (a, r, l, c, h, d, u) =>
      B5(e, t.x + a * n, r, t.z + l * n, t.x + c * n, h, t.z + d * n, u);
  for (const a of [-26, -6, 14])
    (o(-40, i, a, -40, i + 6, a + 12, mr),
      o(-40, i, a, -26, i + 6, a, mr),
      o(-40, i, a + 12, -26, i + 6, a + 12, mr),
      o(-41, i + 7, a - 1, -25, i + 7, a + 13, hv),
      o(-38, i + 7, a + 4, -28, i + 7, a + 8, $S[s]));
  for (let a = 0; a < 64; a++) {
    const r = (a / 64) * Math.PI * 2;
    if (Math.abs(Math.sin(r)) < 0.22 || Math.abs(Math.cos(r)) < 0.16) continue;
    const c = Math.round(Math.cos(r) * (um + 2)),
      h = Math.round(Math.sin(r) * (um + 2));
    o(c, i, h, c + 1, i + 1, h + 1, v.SANDSTONE);
  }
  (o(-20, i, -38, -12, i + 2, -35, hv),
    o(-19, i + 3, -38, -13, i + 3, -35, cv));
  for (const a of [-30, 30])
    (o(-4, i, a, -4, i + 12, a, cv), o(-3, i + 9, a, 2, i + 12, a, $S[s]));
  return e;
}
