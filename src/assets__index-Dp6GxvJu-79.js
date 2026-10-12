// assets__index-Dp6GxvJu 79 — math
// Lines 53119-53265 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function ah(n) {
  let e = AA.get(n);
  if (e) return e;
  const t = ms(n),
    i = n === P.TANK || n === P.BTR_TURRET,
    s = io[n] ?? [];
  return (
    (e = {
      halfWidth:
        Math.max(
          0.5,
          ...s.flatMap((o) => [Math.abs(o.min.x), Math.abs(o.max.x)]),
        ) + 0.08,
      halfLength:
        Math.max(
          0.5,
          ...s.flatMap((o) => [Math.abs(o.min.z), Math.abs(o.max.z)]),
        ) + 0.08,
      step: i ? 2.05 : 1.55,
      drop: i ? 2.6 : 2.1,
      height: Math.max(...s.map((o) => o.max.y), 1.8 * t.y) + 0.06,
    }),
    AA.set(n, e),
    e
  );
}
function L$(n, e, t, i) {
  const s = ah(i),
    o = s.halfLength * 0.82,
    a = s.halfWidth * 0.86,
    r = Math.cos(t),
    l = Math.sin(t),
    c = (b, S) => {
      var A;
      const M = e.x + b * r - S * l,
        x = e.z - b * l - S * r;
      let T = n.ground(M, x, e.y + s.step + 0.05);
      for (
        let _ = 0;
        _ < 3 &&
        Number.isFinite(T) &&
        (A = n.hazard) != null &&
        A.call(n, M, T - 0.5, x);
        _++
      )
        T = n.ground(M, x, T - 1.01);
      return Number.isFinite(T) && e.y - T <= s.drop ? T : e.y;
    },
    h = c(-a, o),
    d = c(a, o),
    u = c(-a, -o),
    f = c(a, -o),
    p = (h + d) / 2,
    m = (u + f) / 2,
    y = (h + u + c(-a, 0)) / 3,
    g = (d + f + c(a, 0)) / 3;
  return {
    pitch: Math.max(-0.55, Math.min(0.55, Math.atan2(p - m, o * 2))),
    roll: Math.max(-0.45, Math.min(0.45, Math.atan2(g - y, a * 2))),
  };
}
function I$(n, e, t, i, s, o, a = 0, r) {
  var C, R;
  const { halfWidth: l, halfLength: c, step: h, height: d } = ah(o),
    u = Math.cos(s),
    f = Math.sin(s),
    p = [];
  let m = -1 / 0;
  const y = Math.ceil((l * 2) / 0.65),
    g = Math.ceil((c * 2) / 0.65);
  for (let L = 0; L <= y; L++)
    for (let N = 0; N <= g; N++) {
      const D = -l + (L * l * 2) / y,
        H = -c + (N * c * 2) / g,
        G = t + D * u + H * f,
        I = i - D * f + H * u,
        O = n.ground(G, I, e.y - a + h + 0.05);
      if (
        !Number.isFinite(O) ||
        O - (e.y - a) > h + 0.05 ||
        ((C = n.hazard) != null && C.call(n, G, O + 0.1, I)) ||
        ((R = n.hazard) != null && R.call(n, G, e.y - a + 0.1, I))
      )
        return null;
      ((m = Math.max(m, O)),
        p.push({ x: G, z: I, y: O, right: D, forward: -H }));
    }
  const b = L$(n, { x: t, y: e.y - a, z: i }, s, o);
  let S = -1 / 0;
  for (const L of p)
    S = Math.max(
      S,
      L.y -
        Math.tan(b.pitch) * L.forward -
        (Math.tan(b.roll) / Math.cos(b.pitch)) * L.right,
    );
  const M = S + a,
    x = M - m + d,
    T = new Set(),
    A = Math.floor(m + 0.1),
    _ = Math.floor(m + x);
  for (const L of p) {
    const N = Math.floor(L.x),
      D = Math.floor(L.z),
      H = (N & 65535) * 65536 + (D & 65535);
    if (!T.has(H)) {
      T.add(H);
      for (let G = A; G <= _; G++)
        if (n.blocked(N + 0.5, G + 0.5, D + 0.5)) return null;
    }
  }
  return { x: t, y: M, z: i };
}
function _A(n, e, t, i, s, o, a = 0, r = s, l) {
  const c = Math.hypot(t - e.x, i - e.z),
    h = Math.atan2(Math.sin(s - r), Math.cos(s - r)),
    d = ah(o),
    u = Math.hypot(d.halfWidth, d.halfLength),
    f = Math.max(1, Math.ceil((c + Math.abs(h) * u) / 0.3));
  if (f > 128) return null;
  let p = e;
  for (let m = 1; m <= f; m++) {
    const y = I$(
      n,
      p,
      e.x + ((t - e.x) * m) / f,
      e.z + ((i - e.z) * m) / f,
      r + (h * m) / f,
      o,
      a,
    );
    if (!y) return null;
    p = y;
  }
  return p;
}
const P$ = 16,
  Hw = new Int16Array(256).fill(-1),
  O$ = new Uint8Array(256);
for (const n of Object.values(Sz))
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    Hw[t] === -1 && ((Hw[t] = e), (O$[t] = n[e + 1] ?? 0));
  }
function N$(n) {
  return Hw[n] ?? -1;
}
