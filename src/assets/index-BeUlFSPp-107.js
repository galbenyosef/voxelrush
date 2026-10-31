// index-BeUlFSPp 107 — math
// Lines 62782-63125 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function kQ(s, e, t, i, n, o = 1, a = 0) {
  const r = k7(i),
    l = Math.cos(t),
    c = Math.sin(t),
    h = Math.abs(l),
    d = Math.abs(c),
    u = R7 / o,
    f = wQ / o,
    p = MQ * o,
    m = SQ * o,
    g = (n ?? e.y) + r.step + 0.05,
    y = Math.round(a / r.df),
    b = y * r.df,
    S = r.step + 0.75,
    M = (p * p * (-u + Math.sqrt(u * u + (4 * S * S) / (p * p)))) / (2 * S),
    E = (m * m * (-f + Math.sqrt(f * f + (4 * S * S) / (m * m)))) / (2 * S),
    A = r.hw + E,
    T = r.hl + Math.abs(b) + Math.max(M, ky),
    x = (h + d) / 2,
    R = Math.min(yn / 2 - 1, h * A + d * T + 0.5),
    _ = Math.min(yn / 2 - 1, d * A + h * T + 0.5),
    C = Math.floor(e.x - R),
    P = Math.floor(e.z - _),
    O = Math.min(yn, Math.floor(e.x + R) - C + 1),
    B = Math.min(yn, Math.floor(e.z + _) - P + 1);
  for (let at = 0; at < O; at++)
    for (let Re = 0; Re < B; Re++) {
      const V = at * yn + Re,
        ye = C + at + 0.5 - e.x,
        Ce = P + Re + 0.5 - e.z,
        ze = ye * l - Ce * c,
        tt = -ye * c - Ce * l;
      if (
        ((w8[V] = ze),
        (b8[V] = tt),
        Math.abs(ze) > A + x || Math.abs(tt) > T + x)
      ) {
        ((Ir[V] = NaN), (ql[V] = Lp));
        continue;
      }
      const ht = C + at + 0.5,
        ut = P + Re + 0.5;
      let F = s.ground(ht, ut, g);
      for (
        let N = 0;
        N < 3 && Number.isFinite(F) && s.hazard?.(ht, F - 0.5, ut);
        N++
      )
        F = s.ground(ht, ut, F - 1.01);
      if (!Number.isFinite(F)) {
        ((Ir[V] = NaN), (ql[V] = S8));
        continue;
      }
      if (F > g) {
        const N = s.ground(ht, ut, g + 1);
        if (!(N <= g + 1)) {
          ((Ir[V] = NaN), (ql[V] = S8));
          continue;
        }
        F = g - 8 * (N - g);
      }
      ((Ir[V] = F), (ql[V] = gu));
    }
  let H = 0;
  for (let at = 0; at < O; at++)
    for (let Re = 0; Re < B; Re++) {
      const V = at * yn + Re;
      if (ql[V] !== gu) continue;
      const ye = Ir[V] - 1e-6;
      let Ce;
      (at === 0 ||
        at === O - 1 ||
        Re === 0 ||
        Re === B - 1 ||
        (Ce = ql[V - yn]) === Lp ||
        (Ce === gu && Ir[V - yn] < ye) ||
        (Ce = ql[V + yn]) === Lp ||
        (Ce === gu && Ir[V + yn] < ye) ||
        (Ce = ql[V - 1]) === Lp ||
        (Ce === gu && Ir[V - 1] < ye) ||
        (Ce = ql[V + 1]) === Lp ||
        (Ce === gu && Ir[V + 1] < ye)) &&
        ((M8[H] = Ir[V]), (ew[H++] = V));
    }
  const D = r.ext + Math.max(0, -y),
    U = r.ext + Math.max(0, y),
    W = r.rows + D + U,
    J = r.cols * W;
  tw.length < J && (tw = new Float64Array(J));
  const j = tw;
  (mg.length < W * H && (mg = new Float64Array(W * H)),
    gg.length < r.cols * H && (gg = new Float64Array(r.cols * H)));
  for (let at = D + Math.min(0, y); at < D + r.rows + Math.max(0, y); at++) {
    const Re = -r.hl + (at - D) * r.df,
      V = at * H;
    for (let ye = 0; ye < H; ye++) {
      const Ce = Math.abs(Re - b8[ew[ye]]) - x;
      mg[V + ye] = Ce <= 0 ? 0 : Ce >= p ? 1 / 0 : g8(Ce, u, p);
    }
  }
  for (let at = 0; at < r.cols; at++) {
    const Re = -r.hw + at * r.dr,
      V = at * H;
    for (let ye = 0; ye < H; ye++) {
      const Ce = Math.abs(Re - w8[ew[ye]]) - x;
      gg[V + ye] = Ce <= 0 ? 0 : Ce >= m ? 1 / 0 : g8(Ce, f, m);
    }
  }
  let ne = -1 / 0,
    ge = -1 / 0;
  const be = D + Math.min(0, y),
    oe = D + r.rows + Math.max(0, y);
  for (let at = 0; at < r.cols; at++) {
    const Re = -r.hw + at * r.dr,
      V = at * H;
    for (let ye = 0; ye < W; ye++) {
      const Ce = -r.hl + (ye - D) * r.df,
        ze = ye >= D && ye < D + r.rows,
        tt = ye * H,
        ht = Math.floor(e.x + Re * l - Ce * c) - C,
        ut = Math.floor(e.z - Re * c - Ce * l) - P,
        F = ht >= 0 && ht < O && ut >= 0 && ut < B ? Ir[ht * yn + ut] : NaN;
      ze && F > ge && F <= g && (ge = F);
      let N = F === F ? F : -1 / 0;
      if (ye >= be && ye < oe)
        for (let fe = 0; fe < H; fe++) {
          const De = M8[fe] - mg[tt + fe] - gg[V + fe];
          De > N && (N = De);
        }
      ((j[at * W + ye] = N), ze && N > ne && (ne = N));
    }
  }
  let he = 0,
    Ie = 0;
  const ve = (at, Re, V = D) => {
      let ye = -1 / 0;
      for (let Ce = 0; Ce < r.cols; Ce++) {
        const ze = -r.hw + Ce * r.dr;
        for (let tt = 0; tt < r.rows; tt++) {
          const ht = j[Ce * W + tt + V] - at * (-r.hl + tt * r.df) - Re * ze;
          ht > ye && ((ye = ht), (he = Ce), (Ie = tt));
        }
      }
      return ye;
    },
    it = D + y;
  let st = 0,
    ot = 0;
  if (ne > -1 / 0) {
    const at = ne - r.drop - Math.max(r.hl, r.hw) * 1.2;
    for (let V = 0; V < 2; V++) {
      const ye = Math.tan(st),
        Ce = Math.tan(ot),
        ze = V ? ve(ye, Ce, it) - r.drop : 0;
      let tt = 0,
        ht = 0,
        ut = 0,
        F = 0,
        N = 0,
        fe = 0,
        De = 0,
        Xe = 0,
        et = 0,
        Mt = 0;
      for (let ae = 0; ae < r.cols; ae++)
        for (let Ke = 0; Ke < W; Ke++) {
          const Me = j[ae * W + Ke];
          if (!(Me >= at)) continue;
          const Te = -r.hw + ae * r.dr,
            Je = -r.hl + (Ke - it) * r.df;
          if (V && Me < ze + ye * Je + Ce * Te) continue;
          const Fe = Math.min(1, (r.hl + ky - Math.abs(Je)) / (ky + EQ));
          Fe <= 0 ||
            (tt++,
            (ht += Fe),
            (ut += Fe * Je),
            (F += Fe * Te),
            (N += Fe * Je * Je),
            (fe += Fe * Te * Te),
            (De += Fe * Je * Te),
            (Xe += Fe * Me),
            (et += Fe * Je * Me),
            (Mt += Fe * Te * Me));
        }
      if (tt < 3) {
        ((st = 0), (ot = 0));
        break;
      }
      const pt = ut / ht,
        At = F / ht,
        ee = Xe / ht,
        te = N - ht * pt * pt,
        He = fe - ht * At * At,
        K = De - ht * pt * At,
        pe = et - ht * pt * ee,
        Ae = Mt - ht * At * ee,
        Le = te * He - K * K;
      let Ve = 0,
        We = 0;
      (Le > 1e-6 * Math.max(1, te * He)
        ? ((Ve = (pe * He - Ae * K) / Le), (We = (Ae * te - pe * K) / Le))
        : (te > 1e-6 && (Ve = pe / te), He > 1e-6 && (We = Ae / He)),
        (st = Math.max(-0.55, Math.min(0.55, Math.atan(Ve)))),
        (ot = Math.max(-0.45, Math.min(0.45, Math.atan(We)))));
    }
    let Re = !1;
    {
      const V = Math.tan(st),
        ye = Math.tan(ot),
        Ce = ve(V, ye, it);
      let ze = 1 / 0;
      for (let tt = 0; tt < r.cols; tt++)
        for (let ht = 0; ht < r.rows; ht++) {
          const ut =
            j[tt * W + ht + it] -
            V * (-r.hl + ht * r.df) -
            ye * (-r.hw + tt * r.dr);
          ut < ze && (ze = ut);
        }
      Re = Ce - ze < 0.02;
    }
    if (!Re) {
      const V = (ze, tt, ht) => {
          let ut = -ht,
            F = ht;
          for (let et = 0; et < 14; et++) {
            const Mt = ut + (F - ut) / 3,
              pt = F - (F - ut) / 3;
            (
              tt
                ? ve(Mt, ze, it) < ve(pt, ze, it)
                : ve(ze, Mt, it) < ve(ze, pt, it)
            )
              ? (F = pt)
              : (ut = Mt);
          }
          tt ? ve(ut, ze, it) : ve(ze, ut, it);
          const N = he,
            fe = Ie;
          tt ? ve(F, ze, it) : ve(ze, F, it);
          const De = tt ? -r.hl + fe * r.df : -r.hw + N * r.dr,
            Xe = tt ? -r.hl + Ie * r.df : -r.hw + he * r.dr;
          if (Math.abs(De - Xe) > 1e-6) {
            const et = tt ? ze * (-r.hw + N * r.dr) : ze * (-r.hl + fe * r.df),
              Mt = tt ? ze * (-r.hw + he * r.dr) : ze * (-r.hl + Ie * r.df),
              pt =
                (j[N * W + fe + it] - et - (j[he * W + Ie + it] - Mt)) /
                (De - Xe);
            if (pt >= ut - 1e-9 && pt <= F + 1e-9) return pt;
          }
          return (ut + F) / 2;
        },
        ye = Math.tan(st),
        Ce = Math.tan(ot);
      ((st = Math.atan(ye + (V(Ce, !0, Math.tan(0.55)) - ye) * p8)),
        (ot = Math.atan(Ce + (V(Math.tan(st), !1, Math.tan(0.45)) - Ce) * p8)));
    }
  }
  return {
    pitch: st,
    roll: ot,
    top: ge,
    support(at, Re) {
      const V = Math.tan(at),
        ye = Math.tan(Re) / Math.cos(at);
      return ve(V, ye) + 0.12 * (Math.abs(V) + Math.abs(ye));
    },
  };
}
function E8(s, e, t, i, n) {
  const o = s - t,
    a = e + i * o,
    r = Math.exp(-i * n);
  return [t + (o + a * n) * r, (e - i * a * n) * r];
}
function CQ(s, e, t, i, n, o, a, r = 22, l = 0.03, c = 0, h = 0) {
  const d = k7(o),
    u = Math.max(-m8, Math.min(m8, c * AQ)),
    f = Math.max(
      xQ,
      Math.min(1, Math.max(Math.abs(c), Math.abs(h) * d.hl) / TQ),
    ),
    p = e.top ?? e.y - l,
    m = kQ(
      s,
      { x: t, y: e.y - l, z: i },
      n,
      o,
      p,
      f,
      Math.abs(u) > 0.15 ? u : 0,
    ),
    g = m.pitch,
    y = m.roll;
  (([e.pitch, e.pitchRate] = E8(e.pitch, e.pitchRate, g, d.stiffness, a)),
    ([e.roll, e.rollRate] = E8(e.roll, e.rollRate, y, d.stiffness, a)));
  const b = m.support(e.pitch, e.roll);
  if (b === -1 / 0) return 0;
  (e.lift &&
    (e.lift = Math.max(
      0,
      e.lift - (Math.abs(c) + Math.abs(h) * d.hl) * a * 0.4,
    )),
    m.top > -1 / 0 &&
      (e.top = m.top > p ? Math.min(m.top, p + RQ * a) : m.top));
  const S = b + l + (e.lift ?? 0);
  if (S < e.y - 0.25) {
    e.vy = Math.max(-40, Math.min(e.vy, 0) - r * a);
    const R = e.y + e.vy * a;
    if (R > S) return ((e.y = R), 0);
    const _ = -e.vy;
    return ((e.y = S), (e.vy = 0), _);
  }
  if (S >= e.y) {
    const R = Math.max(_Q, Math.abs(c) * R7 * 1.2) * a,
      _ = Math.min(S, e.y + R);
    return ((e.vy = a > 0 ? (_ - e.y) / a : 0), (e.y = _), 0);
  }
  const M = 11,
    E = e.y - S,
    A = Math.min(e.vy, 0) + M * E,
    T = Math.exp(-M * a),
    x = S + (E + A * a) * T;
  return (
    x <= S
      ? ((e.y = S), (e.vy = 0))
      : ((e.y = x), (e.vy = (Math.min(e.vy, 0) - M * A * a) * T)),
    0
  );
}
const A8 = new k(),
  iw = new hi(),
  LQ = new pi(),
  IQ = 0.3;
function PQ(s, e, t, i, n, o) {
  iw.setFromEuler(LQ.set(e.pitch, n, e.roll, "YXZ"));
  const a = (l, c, h) => s.blocked(l, c, h);
  if (!zf(o, A8.set(t, e.y, i), iw, a)) return 0;
  const r = IQ - (e.lift ?? 0);
  for (let l = 0.05; l <= r + 1e-6; l += 0.05)
    if (!zf(o, A8.set(t, e.y + l, i), iw, a))
      return ((e.y += l), (e.lift = (e.lift ?? 0) + l), l);
  return 0;
}
