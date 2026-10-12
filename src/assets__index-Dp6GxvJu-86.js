// assets__index-Dp6GxvJu 86 — math
// Lines 55375-55724 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function Hq(n, e, t, i, s, o = 1, a = 0) {
  var gt;
  const r = _L(i),
    l = Math.cos(t),
    c = Math.sin(t),
    h = Math.abs(l),
    d = Math.abs(c),
    u = AL / o,
    f = Cq / o,
    p = kq * o,
    m = Lq * o,
    y = (s ?? e.y) + r.step + 0.05,
    g = Math.round(a / r.df),
    b = g * r.df,
    S = r.step + 0.75,
    M = (p * p * (-u + Math.sqrt(u * u + (4 * S * S) / (p * p)))) / (2 * S),
    x = (m * m * (-f + Math.sqrt(f * f + (4 * S * S) / (m * m)))) / (2 * S),
    T = r.hw + x,
    A = r.hl + Math.abs(b) + Math.max(M, H2),
    _ = (h + d) / 2,
    C = Math.min(is / 2 - 1, h * T + d * A + 0.5),
    R = Math.min(is / 2 - 1, d * T + h * A + 0.5),
    L = Math.floor(e.x - C),
    N = Math.floor(e.z - R),
    D = Math.min(is, Math.floor(e.x + C) - L + 1),
    H = Math.min(is, Math.floor(e.z + R) - N + 1);
  for (let ve = 0; ve < D; ve++)
    for (let Y = 0; Y < H; Y++) {
      const ge = ve * is + Y,
        Le = L + ve + 0.5 - e.x,
        Oe = N + Y + 0.5 - e.z,
        Ve = Le * l - Oe * c,
        Qe = -Le * c - Oe * l;
      if (
        ((ZA[ge] = Ve),
        (XA[ge] = Qe),
        Math.abs(Ve) > T + _ || Math.abs(Qe) > A + _)
      ) {
        ((Va[ge] = NaN), (il[ge] = nf));
        continue;
      }
      const Je = L + ve + 0.5,
        Z = N + Y + 0.5;
      let W = n.ground(Je, Z, y);
      for (
        let ke = 0;
        ke < 3 &&
        Number.isFinite(W) &&
        (gt = n.hazard) != null &&
        gt.call(n, Je, W - 0.5, Z);
        ke++
      )
        W = n.ground(Je, Z, W - 1.01);
      if (!Number.isFinite(W)) {
        ((Va[ge] = NaN), (il[ge] = JA));
        continue;
      }
      if (W > y) {
        const ke = n.ground(Je, Z, y + 1);
        if (!(ke <= y + 1)) {
          ((Va[ge] = NaN), (il[ge] = JA));
          continue;
        }
        W = y - 8 * (ke - y);
      }
      ((Va[ge] = W), (il[ge] = ld));
    }
  let G = 0;
  for (let ve = 0; ve < D; ve++)
    for (let Y = 0; Y < H; Y++) {
      const ge = ve * is + Y;
      if (il[ge] !== ld) continue;
      const Le = Va[ge] - 1e-6;
      let Oe;
      (ve === 0 ||
        ve === D - 1 ||
        Y === 0 ||
        Y === H - 1 ||
        (Oe = il[ge - is]) === nf ||
        (Oe === ld && Va[ge - is] < Le) ||
        (Oe = il[ge + is]) === nf ||
        (Oe === ld && Va[ge + is] < Le) ||
        (Oe = il[ge - 1]) === nf ||
        (Oe === ld && Va[ge - 1] < Le) ||
        (Oe = il[ge + 1]) === nf ||
        (Oe === ld && Va[ge + 1] < Le)) &&
        ((QA[G] = Va[ge]), (H5[G++] = ge));
    }
  const I = r.ext + Math.max(0, -g),
    O = r.ext + Math.max(0, g),
    F = r.rows + I + O,
    X = r.cols * F;
  z5.length < X && (z5 = new Float64Array(X));
  const Q = z5;
  (Am.length < F * G && (Am = new Float64Array(F * G)),
    _m.length < r.cols * G && (_m = new Float64Array(r.cols * G)));
  for (let ve = I + Math.min(0, g); ve < I + r.rows + Math.max(0, g); ve++) {
    const Y = -r.hl + (ve - I) * r.df,
      ge = ve * G;
    for (let Le = 0; Le < G; Le++) {
      const Oe = Math.abs(Y - XA[H5[Le]]) - _;
      Am[ge + Le] = Oe <= 0 ? 0 : Oe >= p ? 1 / 0 : KA(Oe, u, p);
    }
  }
  for (let ve = 0; ve < r.cols; ve++) {
    const Y = -r.hw + ve * r.dr,
      ge = ve * G;
    for (let Le = 0; Le < G; Le++) {
      const Oe = Math.abs(Y - ZA[H5[Le]]) - _;
      _m[ge + Le] = Oe <= 0 ? 0 : Oe >= m ? 1 / 0 : KA(Oe, f, m);
    }
  }
  let ee = -1 / 0,
    se = -1 / 0;
  const oe = I + Math.min(0, g),
    J = I + r.rows + Math.max(0, g);
  for (let ve = 0; ve < r.cols; ve++) {
    const Y = -r.hw + ve * r.dr,
      ge = ve * G;
    for (let Le = 0; Le < F; Le++) {
      const Oe = -r.hl + (Le - I) * r.df,
        Ve = Le >= I && Le < I + r.rows,
        Qe = Le * G,
        Je = Math.floor(e.x + Y * l - Oe * c) - L,
        Z = Math.floor(e.z - Y * c - Oe * l) - N,
        W = Je >= 0 && Je < D && Z >= 0 && Z < H ? Va[Je * is + Z] : NaN;
      Ve && W > se && W <= y && (se = W);
      let ke = W === W ? W : -1 / 0;
      if (Le >= oe && Le < J)
        for (let Ue = 0; Ue < G; Ue++) {
          const je = QA[Ue] - Am[Qe + Ue] - _m[ge + Ue];
          je > ke && (ke = je);
        }
      ((Q[ve * F + Le] = ke), Ve && ke > ee && (ee = ke));
    }
  }
  let re = 0,
    Ce = 0;
  const Re = (ve, Y, ge = I) => {
      let Le = -1 / 0;
      for (let Oe = 0; Oe < r.cols; Oe++) {
        const Ve = -r.hw + Oe * r.dr;
        for (let Qe = 0; Qe < r.rows; Qe++) {
          const Je = Q[Oe * F + Qe + ge] - ve * (-r.hl + Qe * r.df) - Y * Ve;
          Je > Le && ((Le = Je), (re = Oe), (Ce = Qe));
        }
      }
      return Le;
    },
    We = I + g;
  let it = 0,
    ut = 0;
  if (ee > -1 / 0) {
    const ve = ee - r.drop - Math.max(r.hl, r.hw) * 1.2;
    for (let ge = 0; ge < 2; ge++) {
      const Le = Math.tan(it),
        Oe = Math.tan(ut),
        Ve = ge ? Re(Le, Oe, We) - r.drop : 0;
      let Qe = 0,
        Je = 0,
        Z = 0,
        W = 0,
        ke = 0,
        Ue = 0,
        je = 0,
        Ge = 0,
        Mt = 0,
        ht = 0;
      for (let qe = 0; qe < r.cols; qe++)
        for (let Ae = 0; Ae < F; Ae++) {
          const K = Q[qe * F + Ae];
          if (!(K >= ve)) continue;
          const te = -r.hw + qe * r.dr,
            me = -r.hl + (Ae - We) * r.df;
          if (ge && K < Ve + Le * me + Oe * te) continue;
          const xe = Math.min(1, (r.hl + H2 - Math.abs(me)) / (H2 + Iq));
          xe <= 0 ||
            (Qe++,
            (Je += xe),
            (Z += xe * me),
            (W += xe * te),
            (ke += xe * me * me),
            (Ue += xe * te * te),
            (je += xe * me * te),
            (Ge += xe * K),
            (Mt += xe * me * K),
            (ht += xe * te * K));
        }
      if (Qe < 3) {
        ((it = 0), (ut = 0));
        break;
      }
      const lt = Z / Je,
        B = W / Je,
        $ = Ge / Je,
        he = ke - Je * lt * lt,
        fe = Ue - Je * B * B,
        be = je - Je * lt * B,
        Se = Mt - Je * lt * $,
        et = ht - Je * B * $,
        Ze = he * fe - be * be;
      let ct = 0,
        ae = 0;
      (Ze > 1e-6 * Math.max(1, he * fe)
        ? ((ct = (Se * fe - et * be) / Ze), (ae = (et * he - Se * be) / Ze))
        : (he > 1e-6 && (ct = Se / he), fe > 1e-6 && (ae = et / fe)),
        (it = Math.max(-0.55, Math.min(0.55, Math.atan(ct)))),
        (ut = Math.max(-0.45, Math.min(0.45, Math.atan(ae)))));
    }
    let Y = !1;
    {
      const ge = Math.tan(it),
        Le = Math.tan(ut),
        Oe = Re(ge, Le, We);
      let Ve = 1 / 0;
      for (let Qe = 0; Qe < r.cols; Qe++)
        for (let Je = 0; Je < r.rows; Je++) {
          const Z =
            Q[Qe * F + Je + We] -
            ge * (-r.hl + Je * r.df) -
            Le * (-r.hw + Qe * r.dr);
          Z < Ve && (Ve = Z);
        }
      Y = Oe - Ve < 0.02;
    }
    if (!Y) {
      const ge = (Ve, Qe, Je) => {
          let Z = -Je,
            W = Je;
          for (let Mt = 0; Mt < 14; Mt++) {
            const ht = Z + (W - Z) / 3,
              lt = W - (W - Z) / 3;
            (
              Qe
                ? Re(ht, Ve, We) < Re(lt, Ve, We)
                : Re(Ve, ht, We) < Re(Ve, lt, We)
            )
              ? (W = lt)
              : (Z = ht);
          }
          Qe ? Re(Z, Ve, We) : Re(Ve, Z, We);
          const ke = re,
            Ue = Ce;
          Qe ? Re(W, Ve, We) : Re(Ve, W, We);
          const je = Qe ? -r.hl + Ue * r.df : -r.hw + ke * r.dr,
            Ge = Qe ? -r.hl + Ce * r.df : -r.hw + re * r.dr;
          if (Math.abs(je - Ge) > 1e-6) {
            const Mt = Qe ? Ve * (-r.hw + ke * r.dr) : Ve * (-r.hl + Ue * r.df),
              ht = Qe ? Ve * (-r.hw + re * r.dr) : Ve * (-r.hl + Ce * r.df),
              lt =
                (Q[ke * F + Ue + We] - Mt - (Q[re * F + Ce + We] - ht)) /
                (je - Ge);
            if (lt >= Z - 1e-9 && lt <= W + 1e-9) return lt;
          }
          return (Z + W) / 2;
        },
        Le = Math.tan(it),
        Oe = Math.tan(ut);
      ((it = Math.atan(Le + (ge(Oe, !0, Math.tan(0.55)) - Le) * $A)),
        (ut = Math.atan(
          Oe + (ge(Math.tan(it), !1, Math.tan(0.45)) - Oe) * $A,
        )));
    }
  }
  return {
    pitch: it,
    roll: ut,
    top: se,
    support(ve, Y) {
      const ge = Math.tan(ve),
        Le = Math.tan(Y) / Math.cos(ve);
      return Re(ge, Le) + 0.12 * (Math.abs(ge) + Math.abs(Le));
    },
  };
}
function e6(n, e, t, i, s) {
  const o = n - t,
    a = e + i * o,
    r = Math.exp(-i * s);
  return [t + (o + a * s) * r, (e - i * a * s) * r];
}
function zq(n, e, t, i, s, o, a, r = 22, l = 0.03, c = 0, h = 0) {
  const d = _L(o),
    u = Math.max(-qA, Math.min(qA, c * Pq)),
    f = Math.max(
      Nq,
      Math.min(1, Math.max(Math.abs(c), Math.abs(h) * d.hl) / Oq),
    ),
    p = e.top ?? e.y - l,
    m = Hq(
      n,
      { x: t, y: e.y - l, z: i },
      s,
      o,
      p,
      f,
      Math.abs(u) > 0.15 ? u : 0,
    ),
    y = m.pitch,
    g = m.roll;
  (([e.pitch, e.pitchRate] = e6(e.pitch, e.pitchRate, y, d.stiffness, a)),
    ([e.roll, e.rollRate] = e6(e.roll, e.rollRate, g, d.stiffness, a)));
  const b = m.support(e.pitch, e.roll);
  if (b === -1 / 0) return 0;
  (e.lift &&
    (e.lift = Math.max(
      0,
      e.lift - (Math.abs(c) + Math.abs(h) * d.hl) * a * 0.4,
    )),
    m.top > -1 / 0 &&
      (e.top = m.top > p ? Math.min(m.top, p + Bq * a) : m.top));
  const S = b + l + (e.lift ?? 0);
  if (S < e.y - 0.25) {
    e.vy = Math.max(-40, Math.min(e.vy, 0) - r * a);
    const C = e.y + e.vy * a;
    if (C > S) return ((e.y = C), 0);
    const R = -e.vy;
    return ((e.y = S), (e.vy = 0), R);
  }
  if (S >= e.y) {
    const C = Math.max(Dq, Math.abs(c) * AL * 1.2) * a,
      R = Math.min(S, e.y + C);
    return ((e.vy = a > 0 ? (R - e.y) / a : 0), (e.y = R), 0);
  }
  const M = 11,
    x = e.y - S,
    T = Math.min(e.vy, 0) + M * x,
    A = Math.exp(-M * a),
    _ = S + (x + T * a) * A;
  return (
    _ <= S
      ? ((e.y = S), (e.vy = 0))
      : ((e.y = _), (e.vy = (Math.min(e.vy, 0) - M * T * a) * A)),
    0
  );
}
const t6 = new k(),
  U5 = new Jt(),
  Uq = new hi(),
  Fq = 0.3;
function Gq(n, e, t, i, s, o) {
  U5.setFromEuler(Uq.set(e.pitch, s, e.roll, "YXZ"));
  const a = (l, c, h) => n.blocked(l, c, h);
  if (!du(o, t6.set(t, e.y, i), U5, a)) return 0;
  const r = Fq - (e.lift ?? 0);
  for (let l = 0.05; l <= r + 1e-6; l += 0.05)
    if (!du(o, t6.set(t, e.y + l, i), U5, a))
      return ((e.y += l), (e.lift = (e.lift ?? 0) + l), l);
  return 0;
}
