// chunk-mesh-worker-coep-v1-GBSiXDQy 22 — math
// Lines 7163-7495 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class xi {
  block = new Uint8Array(jt);
  sky = new Uint8Array(jt);
  opacity = new Uint8Array(jt);
  queue = new Int32Array(jt);
  queued = new Uint8Array(jt);
  compute(t, e, s) {
    const { block: n, sky: i, opacity: c, queue: h, queued: o } = this,
      a = t * D - De,
      u = e * D - De;
    (n.fill(0), i.fill(0), c.fill(15));
    let d = !1;
    for (let m = -1; m <= 1; m++)
      for (let _ = -1; _ <= 1; _++) {
        const g = s(t + m, e + _);
        if (g)
          for (let y = 0; y < D; y++)
            for (let R = 0; R < D; R++) {
              const E = m * D + y + De,
                x = _ * D + R + De;
              if (E < 0 || x < 0 || E >= ft || x >= ft) continue;
              let S = 15;
              const M = E * Tt + x * H;
              for (
                let A = H - 1, O = Se(y, H - 1, R);
                A >= 0;
                A--, O -= D * D
              ) {
                const I = M + A,
                  k = (g.meta[O] << 8) | g.data[O],
                  w = Ei[k];
                ((c[I] = w),
                  (S = yi[k] && w < 15 ? S * 0.9 : Math.max(0, S - w)),
                  (i[I] = S > 0 ? Math.max(1, Math.round(S)) : 0));
                const N = Ai[k];
                ((n[I] = N), N > 1 && (d = !0));
              }
            }
      }
    const l = (m, _) => {
      let g = 0,
        y = 0,
        R = 0;
      o.fill(0);
      const E = (x) => {
        o[x] || ((o[x] = 1), (h[y] = x), (y = (y + 1) % jt), R++);
      };
      for (let x = 0; x < ft; x++)
        for (let S = 0; S < ft; S++)
          for (let M = 0; M < H; M++) {
            const A = x * Tt + S * H + M,
              O = m[A];
            O <= 1 ||
              ((!_ ||
                (x > 0 && m[A - Tt] < O - 1 && c[A - Tt] < 15) ||
                (x + 1 < ft && m[A + Tt] < O - 1 && c[A + Tt] < 15) ||
                (S > 0 && m[A - H] < O - 1 && c[A - H] < 15) ||
                (S + 1 < ft && m[A + H] < O - 1 && c[A + H] < 15) ||
                (M > 0 && m[A - 1] < O - 1 && c[A - 1] < 15)) &&
                E(A));
          }
      for (; R;) {
        const x = h[g];
        ((g = (g + 1) % jt), R--, (o[x] = 0));
        const S = x % H,
          M = Math.floor(x / H) % ft,
          A = Math.floor(x / Tt),
          O = (I) => {
            const k = m[x] - Math.max(1, c[I]);
            k > m[I] && ((m[I] = k), k > 1 && E(I));
          };
        (A > 0 && O(x - Tt),
          A + 1 < ft && O(x + Tt),
          M > 0 && O(x - H),
          M + 1 < ft && O(x + H),
          S > 0 && O(x - 1),
          S + 1 < H && O(x + 1));
      }
    };
    (d && l(n, !1), l(i, !0));
    const f = (m, _, g, y) => {
      const R = Math.floor(_) - a,
        E = Math.floor(y) - u;
      return (
        (g = Math.floor(g)),
        R < 0 || E < 0 || R >= ft || E >= ft || g < 0 || g >= H
          ? 0
          : m[R * Tt + E * H + g]
      );
    };
    return {
      ox: a,
      oz: u,
      data: n,
      at: (m, _, g) => f(n, m, _, g),
      skyAt: (m, _, g) => f(i, m, _, g),
    };
  }
}
function Mr(r) {
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
  return e.map(([n, i, c, h, o, a]) => {
    const u = s(n, c),
      d = s(h, a);
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
const Sr = (r) =>
  (r >= p.REDSTONE && r <= p.DOOR) ||
  We(r) ||
  dn(r) ||
  r === p.SIGN ||
  r === p.RADIO_RELAY;
function Pe(r, t, e, s) {
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
function Zs(r, t) {
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
function gr(r, t, e, s, n) {
  const i = Lt[t(e, s, n) & 7] ?? Lt[0],
    c = [];
  for (const h of us) {
    const o = e + h[0],
      a = s + h[1],
      u = n + h[2];
    if (r(o, a, u) !== p.REDSTONE) continue;
    const d = Lt[t(o, a, u) & 7] ?? Lt[0];
    h[0] * i[0] + h[1] * i[1] + h[2] * i[2] === 0 &&
      i.every((l, f) => l === d[f]) &&
      c.push(h);
  }
  for (const h of Lt) {
    if (i.reduce((l, f, m) => l + f * h[m], 0) !== 0) continue;
    const o = i.map((l, f) => l - h[f]),
      a = e + o[0],
      u = s + o[1],
      d = n + o[2];
    r(a, u, d) === p.REDSTONE &&
      (Lt[t(a, u, d) & 7] ?? Lt[0]).every((l, f) => l === h[f]) &&
      c.push(o);
  }
  if ((t(e, s, n) & 7) === 0)
    for (const [h, o] of ae)
      for (const a of [-1, 1])
        r(e + h, s + a, n + o) !== p.REDSTONE ||
          (t(e + h, s + a, n + o) & 7) !== 0 ||
          T[r(a > 0 ? e : e + h, s + 1 * (a > 0 ? 1 : 0), a > 0 ? n : n + o)]
            ?.solid ||
          c.push([h, a, o]);
  return c;
}
function Rr(r, t, e, s, n = 0, i = 0, c = 0) {
  if (r === p.RADIO_RELAY) {
    const l = [],
      f = (m, _) => l.push({ box: m, tile: _ });
    for (const m of [0.31, 0.63])
      for (const _ of [0.35, 0.61]) f([m, 0, _, m + 0.06, 0.035, _ + 0.06], 16);
    (f([0.29, 0.035, 0.32, 0.71, 0.075, 0.68], 16),
      f([0.31, 0.075, 0.34, 0.69, 0.235, 0.66], qt),
      f([0.3, 0.235, 0.33, 0.7, 0.26, 0.67], qt),
      f([0.35, 0.12, 0.328, 0.55, 0.205, 0.34], 16),
      f([0.365, 0.135, 0.324, 0.535, 0.19, 0.329], t & Mt ? ge : 16),
      f([0.59, 0.14, 0.32, 0.625, 0.18, 0.34], t & Mt ? 170 : 169));
    for (let m = 0; m < 4; m++)
      f([0.688, 0.1 + m * 0.028, 0.4, 0.701, 0.112 + m * 0.028, 0.58], 16);
    for (const m of [0.32, 0.66])
      for (const _ of [0.35, 0.63])
        f([m, 0.26, _, m + 0.02, 0.266, _ + 0.02], 16);
    return (
      f([0.605, 0.26, 0.58, 0.655, 0.3, 0.63], 16),
      f([0.621, 0.3, 0.596, 0.639, 0.62, 0.614], 16),
      f([0.618, 0.6, 0.593, 0.642, 0.65, 0.617], qt),
      l
    );
  }
  if (r < p.REDSTONE || r > p.PISTON_HEAD || r === p.RTORCH || r === p.LAMP)
    return null;
  const h = [],
    o = !!(t & Mt),
    a = t & 7,
    u = (l, f) => h.push({ box: l, tile: f });
  let d = !0;
  if (r === p.REDSTONE) {
    const l = Zn(t) ? 170 : 169;
    u([0.38, 0.012, 0.38, 0.62, 0.04, 0.62], l);
    const f = [];
    if (e && s) {
      f.push(...gr(e, s, n, i, c));
      const y = Lt[a] ?? Lt[0];
      for (const R of us)
        R[0] * y[0] + R[1] * y[1] + R[2] * y[2] === 0 &&
          Sr(e(n + R[0], i + R[1], c + R[2])) &&
          e(n + R[0], i + R[1], c + R[2]) !== p.REDSTONE &&
          f.push(R);
    } else f.push([1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]);
    const m = Pe(0.5, 0, 0.5, a),
      _ = Pe(1, 0, 0.5, a),
      g = Pe(0.5, 0, 1, a);
    for (const y of f) {
      const R = y.reduce((x, S, M) => x + S * (_[M] - m[M]) * 2, 0),
        E = y.reduce((x, S, M) => x + S * (g[M] - m[M]) * 2, 0);
      if (
        (R && u([R < 0 ? 0 : 0.5, 0.012, 0.43, R > 0 ? 1 : 0.5, 0.04, 0.57], l),
        E && u([0.43, 0.012, E < 0 ? 0 : 0.5, 0.57, 0.04, E > 0 ? 1 : 0.5], l),
        a === 0 && y[1] > 0)
      ) {
        const [x, , S] = y;
        u(
          [
            x < 0 ? 0 : x > 0 ? 0.97 : 0.43,
            0.04,
            S < 0 ? 0 : S > 0 ? 0.97 : 0.43,
            x ? (x < 0 ? 0.03 : 1) : 0.57,
            1,
            S ? (S < 0 ? 0.03 : 1) : 0.57,
          ],
          l,
        );
      }
    }
  } else if (r === p.LEVER) {
    (u([0.28, 0, 0.27, 0.72, 0.12, 0.73], 26),
      u([0.42, 0.12, 0.4, 0.58, 0.2, 0.6], 16));
    for (let f = 0; f < 4; f++) {
      const m = 0.46 + (o ? -1 : 1) * f * 0.047;
      u([0.455, 0.18 + f * 0.06, m, 0.545, 0.26 + f * 0.06, m + 0.09], 8);
    }
    const l = 0.46 + (o ? -1 : 1) * 3 * 0.047;
    u([0.435, 0.39, l - 0.015, 0.565, 0.47, l + 0.105], o ? 170 : 16);
  } else if (r === p.BUTTON)
    (u([0.28, 0, 0.32, 0.72, 0.035, 0.68], 16),
      u([0.32, 0.035, 0.36, 0.68, o ? 0.065 : 0.12, 0.64], 3));
  else if (r === p.PLATE)
    ((d = !1),
      u([0.06, 0, 0.06, 0.94, 0.025, 0.94], 16),
      u([0.08, 0.025, 0.08, 0.92, o ? 0.04 : 0.09, 0.92], 3));
  else if (r === p.REPEATER) {
    ((d = !1),
      u([0.08, 0, 0.06, 0.92, 0.1, 0.94], 3),
      u([0.42, 0.1, 0.12, 0.58, 0.115, 0.88], o ? 170 : 169));
    const l = (t >> 4) & 3;
    for (const f of [0.2, 0.51 + l * 0.085])
      (u([0.44, 0.11, f - 0.055, 0.56, 0.29, f + 0.055], 8),
        u([0.42, 0.25, f - 0.075, 0.58, 0.35, f + 0.075], o ? 170 : 169));
    return h.map((f) => ({
      ...f,
      box: Zs(f.box, (m, _, g) => {
        const y = t & 3;
        return y === 1
          ? [1 - g, _, m]
          : y === 2
            ? [1 - m, _, 1 - g]
            : y === 3
              ? [g, _, 1 - m]
              : [m, _, g];
      }),
    }));
  } else if (r === p.PISTON || r === p.SPISTON || r === p.PISTON_HEAD) {
    d = !1;
    const l = us[t & 7] ?? us[3];
    if (r !== p.PISTON_HEAD) {
      u([0, 0, 0, 1, o ? 0.72 : 0.82, 1], 33);
      for (const m of [0, 0.86])
        for (const _ of [0, 0.86]) u([m, 0, _, m + 0.14, 0.82, _ + 0.14], 16);
      o
        ? u([0.4, 0.72, 0.4, 0.6, 1, 0.6], 8)
        : u([0, 0.82, 0, 1, 1, 1], r === p.SPISTON ? 34 : 32);
    } else
      (u([0, 0.75, 0, 1, 1, 1], t & 16 ? 34 : 32),
        u([0.4, 0, 0.4, 0.6, 0.75, 0.6], 8));
    const f = Lt.findIndex(
      (m) => m[0] === -l[0] && m[1] === -l[1] && m[2] === -l[2],
    );
    return h.map((m) => ({
      ...m,
      box: Zs(m.box, (_, g, y) => Pe(_, g, y, f)),
    }));
  } else return null;
  return d
    ? h.map((l) => ({ ...l, box: Zs(l.box, (f, m, _) => Pe(f, m, _, a)) }))
    : h;
}
function Tr(r, t, e, s) {
  const n = [];
  return (
    (r(t - 1, e, s) === p.CHAIN || r(t + 1, e, s) === p.CHAIN) && n.push(0),
    (r(t, e - 1, s) === p.CHAIN || r(t, e + 1, s) === p.CHAIN) && n.push(1),
    (r(t, e, s - 1) === p.CHAIN || r(t, e, s + 1) === p.CHAIN) && n.push(2),
    n.length ? n : [1]
  );
}
const $s = new Map();
