// index-BeUlFSPp 100 — math
// Lines 60522-60663 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function eh(s) {
  let e = jR.get(s);
  if (e) return e;
  const t = En(s),
    i = s === L.TANK || s === L.BTR_TURRET,
    n = lo[s] ?? [];
  return (
    (e = {
      halfWidth:
        Math.max(
          0.5,
          ...n.flatMap((o) => [Math.abs(o.min.x), Math.abs(o.max.x)]),
        ) + 0.08,
      halfLength:
        Math.max(
          0.5,
          ...n.flatMap((o) => [Math.abs(o.min.z), Math.abs(o.max.z)]),
        ) + 0.08,
      step: i ? 2.05 : 1.55,
      drop: i ? 2.6 : 2.1,
      height: Math.max(...n.map((o) => o.max.y), 1.8 * t.y) + 0.06,
    }),
    jR.set(s, e),
    e
  );
}
function SZ(s, e, t, i) {
  const n = eh(i),
    o = n.halfLength * 0.82,
    a = n.halfWidth * 0.86,
    r = Math.cos(t),
    l = Math.sin(t),
    c = (b, S) => {
      const M = e.x + b * r - S * l,
        E = e.z - b * l - S * r;
      let A = s.ground(M, E, e.y + n.step + 0.05);
      for (
        let T = 0;
        T < 3 && Number.isFinite(A) && s.hazard?.(M, A - 0.5, E);
        T++
      )
        A = s.ground(M, E, A - 1.01);
      return Number.isFinite(A) && e.y - A <= n.drop ? A : e.y;
    },
    h = c(-a, o),
    d = c(a, o),
    u = c(-a, -o),
    f = c(a, -o),
    p = (h + d) / 2,
    m = (u + f) / 2,
    g = (h + u + c(-a, 0)) / 3,
    y = (d + f + c(a, 0)) / 3;
  return {
    pitch: Math.max(-0.55, Math.min(0.55, Math.atan2(p - m, o * 2))),
    roll: Math.max(-0.45, Math.min(0.45, Math.atan2(y - g, a * 2))),
  };
}
function EZ(s, e, t, i, n, o, a = 0, r) {
  const { halfWidth: l, halfLength: c, step: h, height: d } = eh(o),
    u = Math.cos(n),
    f = Math.sin(n),
    p = [];
  let m = -1 / 0;
  const g = Math.ceil((l * 2) / 0.65),
    y = Math.ceil((c * 2) / 0.65);
  for (let R = 0; R <= g; R++)
    for (let _ = 0; _ <= y; _++) {
      const C = -l + (R * l * 2) / g,
        P = -c + (_ * c * 2) / y,
        O = t + C * u + P * f,
        B = i - C * f + P * u,
        H = s.ground(O, B, e.y - a + h + 0.05);
      if (
        !Number.isFinite(H) ||
        H - (e.y - a) > h + 0.05 ||
        s.hazard?.(O, H + 0.1, B) ||
        s.hazard?.(O, e.y - a + 0.1, B)
      )
        return null;
      ((m = Math.max(m, H)),
        p.push({ x: O, z: B, y: H, right: C, forward: -P }));
    }
  const b = SZ(s, { x: t, y: e.y - a, z: i }, n, o);
  let S = -1 / 0;
  for (const R of p)
    S = Math.max(
      S,
      R.y -
        Math.tan(b.pitch) * R.forward -
        (Math.tan(b.roll) / Math.cos(b.pitch)) * R.right,
    );
  const M = S + a,
    E = M - m + d,
    A = new Set(),
    T = Math.floor(m + 0.1),
    x = Math.floor(m + E);
  for (const R of p) {
    const _ = Math.floor(R.x),
      C = Math.floor(R.z),
      P = (_ & 65535) * 65536 + (C & 65535);
    if (!A.has(P)) {
      A.add(P);
      for (let O = T; O <= x; O++)
        if (s.blocked(_ + 0.5, O + 0.5, C + 0.5)) return null;
    }
  }
  return { x: t, y: M, z: i };
}
function XR(s, e, t, i, n, o, a = 0, r = n, l) {
  const c = Math.hypot(t - e.x, i - e.z),
    h = Math.atan2(Math.sin(n - r), Math.cos(n - r)),
    d = eh(o),
    u = Math.hypot(d.halfWidth, d.halfLength),
    f = Math.max(1, Math.ceil((c + Math.abs(h) * u) / 0.3));
  if (f > 128) return null;
  let p = e;
  for (let m = 1; m <= f; m++) {
    const g = EZ(
      s,
      p,
      e.x + ((t - e.x) * m) / f,
      e.z + ((i - e.z) * m) / f,
      r + (h * m) / f,
      o,
      a,
    );
    if (!g) return null;
    p = g;
  }
  return p;
}
const AZ = 16,
  y4 = new Int16Array(256).fill(-1),
  TZ = new Uint8Array(256);
for (const s of Object.values(rW))
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    y4[t] === -1 && ((y4[t] = e), (TZ[t] = s[e + 1] ?? 0));
  }
function xZ(s) {
  return y4[s] ?? -1;
}
