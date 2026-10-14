// chunk-mesh-worker-coep-v1-BX2YFLnd 22 — math
// Lines 7136-7474 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Mi {
  constructor() {
    K(this, "block", new Uint8Array(ne));
    K(this, "sky", new Uint8Array(ne));
    K(this, "opacity", new Uint8Array(ne));
    K(this, "queue", new Int32Array(ne));
    K(this, "queued", new Uint8Array(ne));
  }
  compute(t, e, s) {
    const { block: n, sky: i, opacity: h, queue: c, queued: o } = this,
      a = t * D - Ge,
      u = e * D - Ge;
    (n.fill(0), i.fill(0), h.fill(15));
    let d = !1;
    for (let m = -1; m <= 1; m++)
      for (let _ = -1; _ <= 1; _++) {
        const y = s(t + m, e + _);
        if (y)
          for (let E = 0; E < D; E++)
            for (let M = 0; M < D; M++) {
              const g = m * D + E + Ge,
                L = _ * D + M + Ge;
              if (g < 0 || L < 0 || g >= Et || L >= Et) continue;
              let I = 15;
              const A = g * It + L * Y;
              for (
                let x = Y - 1, S = be(E, Y - 1, M);
                x >= 0;
                x--, S -= D * D
              ) {
                const R = A + x,
                  O = (y.meta[S] << 8) | y.data[S],
                  k = Ai[O];
                ((h[R] = k),
                  (I = xi[O] && k < 15 ? I * 0.9 : Math.max(0, I - k)),
                  (i[R] = I > 0 ? Math.max(1, Math.round(I)) : 0));
                const W = yi[O];
                ((n[R] = W), W > 1 && (d = !0));
              }
            }
      }
    const l = (m, _) => {
      let y = 0,
        E = 0,
        M = 0;
      o.fill(0);
      const g = (L) => {
        o[L] || ((o[L] = 1), (c[E] = L), (E = (E + 1) % ne), M++);
      };
      for (let L = 0; L < Et; L++)
        for (let I = 0; I < Et; I++)
          for (let A = 0; A < Y; A++) {
            const x = L * It + I * Y + A,
              S = m[x];
            S <= 1 ||
              ((!_ ||
                (L > 0 && m[x - It] < S - 1 && h[x - It] < 15) ||
                (L + 1 < Et && m[x + It] < S - 1 && h[x + It] < 15) ||
                (I > 0 && m[x - Y] < S - 1 && h[x - Y] < 15) ||
                (I + 1 < Et && m[x + Y] < S - 1 && h[x + Y] < 15) ||
                (A > 0 && m[x - 1] < S - 1 && h[x - 1] < 15)) &&
                g(x));
          }
      for (; M;) {
        const L = c[y];
        ((y = (y + 1) % ne), M--, (o[L] = 0));
        const I = L % Y,
          A = Math.floor(L / Y) % Et,
          x = Math.floor(L / It),
          S = (R) => {
            const O = m[L] - Math.max(1, h[R]);
            O > m[R] && ((m[R] = O), O > 1 && g(R));
          };
        (x > 0 && S(L - It),
          x + 1 < Et && S(L + It),
          A > 0 && S(L - Y),
          A + 1 < Et && S(L + Y),
          I > 0 && S(L - 1),
          I + 1 < Y && S(L + 1));
      }
    };
    (d && l(n, !1), l(i, !0));
    const p = (m, _, y, E) => {
      const M = Math.floor(_) - a,
        g = Math.floor(E) - u;
      return (
        (y = Math.floor(y)),
        M < 0 || g < 0 || M >= Et || g >= Et || y < 0 || y >= Y
          ? 0
          : m[M * It + g * Y + y]
      );
    };
    return {
      ox: a,
      oz: u,
      data: n,
      at: (m, _, y) => p(n, m, _, y),
      skyAt: (m, _, y) => p(i, m, _, y),
    };
  }
}
function Rr(r) {
  const t = !!(r & 4),
    e = [[0.06, 0.42, t ? 0.03 : 0.45, 0.94, 0.96, t ? 0.13 : 0.55]];
  t || e.push([0.45, 0, 0.45, 0.55, 0.42, 0.55]);
  const s = (n, i) => {
    switch (r & 3) {
      case 1:
        return [i, 1 - n];
      case 2:
        return [1 - n, 1 - i];
      case 3:
        return [1 - i, n];
      default:
        return [n, i];
    }
  };
  return e.map(([n, i, h, c, o, a]) => {
    const u = s(n, h),
      d = s(c, a);
    return [
      Math.min(u[0], d[0]),
      i,
      Math.min(u[1], d[1]),
      Math.max(u[0], d[0]),
      o,
      Math.max(u[1], d[1]),
    ];
  });
}
const Tr = (r) =>
  (r >= f.REDSTONE && r <= f.DOOR) ||
  ve(r) ||
  fn(r) ||
  r === f.SIGN ||
  r === f.RADIO_RELAY;
function we(r, t, e, s) {
  return s === 1
    ? [t, 1 - r, e]
    : s === 2
      ? [1 - t, r, e]
      : s === 3
        ? [r, 1 - e, t]
        : s === 4
          ? [r, e, 1 - t]
          : s === 5
            ? [r, 1 - t, 1 - e]
            : [r, t, e];
}
function $s(r, t) {
  const e = t(r[0], r[1], r[2]),
    s = t(r[3], r[4], r[5]);
  return [
    Math.min(e[0], s[0]),
    Math.min(e[1], s[1]),
    Math.min(e[2], s[2]),
    Math.max(e[0], s[0]),
    Math.max(e[1], s[1]),
    Math.max(e[2], s[2]),
  ];
}
function br(r, t, e, s, n) {
  var c;
  const i = Bt[t(e, s, n) & 7] ?? Bt[0],
    h = [];
  for (const o of ps) {
    const a = e + o[0],
      u = s + o[1],
      d = n + o[2];
    if (r(a, u, d) !== f.REDSTONE) continue;
    const l = Bt[t(a, u, d) & 7] ?? Bt[0];
    o[0] * i[0] + o[1] * i[1] + o[2] * i[2] === 0 &&
      i.every((p, m) => p === l[m]) &&
      h.push(o);
  }
  for (const o of Bt) {
    if (i.reduce((p, m, _) => p + m * o[_], 0) !== 0) continue;
    const a = i.map((p, m) => p - o[m]),
      u = e + a[0],
      d = s + a[1],
      l = n + a[2];
    r(u, d, l) === f.REDSTONE &&
      (Bt[t(u, d, l) & 7] ?? Bt[0]).every((p, m) => p === o[m]) &&
      h.push(a);
  }
  if ((t(e, s, n) & 7) === 0)
    for (const [o, a] of le)
      for (const u of [-1, 1])
        r(e + o, s + u, n + a) !== f.REDSTONE ||
          (t(e + o, s + u, n + a) & 7) !== 0 ||
          ((c =
            T[
              r(u > 0 ? e : e + o, s + 1 * (u > 0 ? 1 : 0), u > 0 ? n : n + a)
            ]) != null &&
            c.solid) ||
          h.push([o, u, a]);
  return h;
}
function Or(r, t, e, s, n = 0, i = 0, h = 0) {
  if (r === f.RADIO_RELAY) {
    const l = [],
      p = (m, _) => l.push({ box: m, tile: _ });
    for (const m of [0.31, 0.63])
      for (const _ of [0.35, 0.61]) p([m, 0, _, m + 0.06, 0.035, _ + 0.06], 16);
    (p([0.29, 0.035, 0.32, 0.71, 0.075, 0.68], 16),
      p([0.31, 0.075, 0.34, 0.69, 0.235, 0.66], Zt),
      p([0.3, 0.235, 0.33, 0.7, 0.26, 0.67], Zt),
      p([0.35, 0.12, 0.328, 0.55, 0.205, 0.34], 16),
      p([0.365, 0.135, 0.324, 0.535, 0.19, 0.329], t & Tt ? Oe : 16),
      p([0.59, 0.14, 0.32, 0.625, 0.18, 0.34], t & Tt ? 170 : 169));
    for (let m = 0; m < 4; m++)
      p([0.688, 0.1 + m * 0.028, 0.4, 0.701, 0.112 + m * 0.028, 0.58], 16);
    for (const m of [0.32, 0.66])
      for (const _ of [0.35, 0.63])
        p([m, 0.26, _, m + 0.02, 0.266, _ + 0.02], 16);
    return (
      p([0.605, 0.26, 0.58, 0.655, 0.3, 0.63], 16),
      p([0.621, 0.3, 0.596, 0.639, 0.62, 0.614], 16),
      p([0.618, 0.6, 0.593, 0.642, 0.65, 0.617], Zt),
      l
    );
  }
  if (r < f.REDSTONE || r > f.PISTON_HEAD || r === f.RTORCH || r === f.LAMP)
    return null;
  const c = [],
    o = !!(t & Tt),
    a = t & 7,
    u = (l, p) => c.push({ box: l, tile: p });
  let d = !0;
  if (r === f.REDSTONE) {
    const l = $n(t) ? 170 : 169;
    u([0.38, 0.012, 0.38, 0.62, 0.04, 0.62], l);
    const p = [];
    if (e && s) {
      p.push(...br(e, s, n, i, h));
      const E = Bt[a] ?? Bt[0];
      for (const M of ps)
        M[0] * E[0] + M[1] * E[1] + M[2] * E[2] === 0 &&
          Tr(e(n + M[0], i + M[1], h + M[2])) &&
          e(n + M[0], i + M[1], h + M[2]) !== f.REDSTONE &&
          p.push(M);
    } else p.push([1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]);
    const m = we(0.5, 0, 0.5, a),
      _ = we(1, 0, 0.5, a),
      y = we(0.5, 0, 1, a);
    for (const E of p) {
      const M = E.reduce((L, I, A) => L + I * (_[A] - m[A]) * 2, 0),
        g = E.reduce((L, I, A) => L + I * (y[A] - m[A]) * 2, 0);
      if (
        (M && u([M < 0 ? 0 : 0.5, 0.012, 0.43, M > 0 ? 1 : 0.5, 0.04, 0.57], l),
        g && u([0.43, 0.012, g < 0 ? 0 : 0.5, 0.57, 0.04, g > 0 ? 1 : 0.5], l),
        a === 0 && E[1] > 0)
      ) {
        const [L, , I] = E;
        u(
          [
            L < 0 ? 0 : L > 0 ? 0.97 : 0.43,
            0.04,
            I < 0 ? 0 : I > 0 ? 0.97 : 0.43,
            L ? (L < 0 ? 0.03 : 1) : 0.57,
            1,
            I ? (I < 0 ? 0.03 : 1) : 0.57,
          ],
          l,
        );
      }
    }
  } else if (r === f.LEVER) {
    (u([0.28, 0, 0.27, 0.72, 0.12, 0.73], 26),
      u([0.42, 0.12, 0.4, 0.58, 0.2, 0.6], 16));
    for (let p = 0; p < 4; p++) {
      const m = 0.46 + (o ? -1 : 1) * p * 0.047;
      u([0.455, 0.18 + p * 0.06, m, 0.545, 0.26 + p * 0.06, m + 0.09], 8);
    }
    const l = 0.46 + (o ? -1 : 1) * 3 * 0.047;
    u([0.435, 0.39, l - 0.015, 0.565, 0.47, l + 0.105], o ? 170 : 16);
  } else if (r === f.BUTTON)
    (u([0.28, 0, 0.32, 0.72, 0.035, 0.68], 16),
      u([0.32, 0.035, 0.36, 0.68, o ? 0.065 : 0.12, 0.64], 3));
  else if (r === f.PLATE)
    ((d = !1),
      u([0.06, 0, 0.06, 0.94, 0.025, 0.94], 16),
      u([0.08, 0.025, 0.08, 0.92, o ? 0.04 : 0.09, 0.92], 3));
  else if (r === f.REPEATER) {
    ((d = !1),
      u([0.08, 0, 0.06, 0.92, 0.1, 0.94], 3),
      u([0.42, 0.1, 0.12, 0.58, 0.115, 0.88], o ? 170 : 169));
    const l = (t >> 4) & 3;
    for (const p of [0.2, 0.51 + l * 0.085])
      (u([0.44, 0.11, p - 0.055, 0.56, 0.29, p + 0.055], 8),
        u([0.42, 0.25, p - 0.075, 0.58, 0.35, p + 0.075], o ? 170 : 169));
    return c.map((p) => ({
      ...p,
      box: $s(p.box, (m, _, y) => {
        const E = t & 3;
        return E === 1
          ? [1 - y, _, m]
          : E === 2
            ? [1 - m, _, 1 - y]
            : E === 3
              ? [y, _, 1 - m]
              : [m, _, y];
      }),
    }));
  } else if (r === f.PISTON || r === f.SPISTON || r === f.PISTON_HEAD) {
    d = !1;
    const l = ps[t & 7] ?? ps[3];
    if (r !== f.PISTON_HEAD) {
      u([0, 0, 0, 1, o ? 0.72 : 0.82, 1], 33);
      for (const m of [0, 0.86])
        for (const _ of [0, 0.86]) u([m, 0, _, m + 0.14, 0.82, _ + 0.14], 16);
      o
        ? u([0.4, 0.72, 0.4, 0.6, 1, 0.6], 8)
        : u([0, 0.82, 0, 1, 1, 1], r === f.SPISTON ? 34 : 32);
    } else
      (u([0, 0.75, 0, 1, 1, 1], t & 16 ? 34 : 32),
        u([0.4, 0, 0.4, 0.6, 0.75, 0.6], 8));
    const p = Bt.findIndex(
      (m) => m[0] === -l[0] && m[1] === -l[1] && m[2] === -l[2],
    );
    return c.map((m) => ({
      ...m,
      box: $s(m.box, (_, y, E) => we(_, y, E, p)),
    }));
  } else return null;
  return d
    ? c.map((l) => ({ ...l, box: $s(l.box, (p, m, _) => we(p, m, _, a)) }))
    : c;
}
function Lr(r, t, e, s) {
  const n = [];
  return (
    (r(t - 1, e, s) === f.CHAIN || r(t + 1, e, s) === f.CHAIN) && n.push(0),
    (r(t, e - 1, s) === f.CHAIN || r(t, e + 1, s) === f.CHAIN) && n.push(1),
    (r(t, e, s - 1) === f.CHAIN || r(t, e, s + 1) === f.CHAIN) && n.push(2),
    n.length ? n : [1]
  );
}
const Js = new Map();
