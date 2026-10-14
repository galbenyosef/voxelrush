// assets__index-Dp6GxvJu 27 — math
// Lines 36734-37092 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function Su(n, e, t, i) {
  let s = wT.get(n.group);
  s ||
    ((s = {
      phase: 0,
      speed: 0,
      pose: n.group.getObjectByName("pose-root") ?? null,
      kneeL: n.legL.getObjectByName("joint") ?? null,
      kneeR: n.legR.getObjectByName("joint") ?? null,
      elbowL: n.armL.getObjectByName("joint") ?? null,
      elbowR: n.armR.getObjectByName("joint") ?? null,
      gesture: n.armR.getObjectByName("gesture") ?? null,
    }),
    wT.set(n.group, s));
  const o = 1 - Math.exp(-16 * e),
    a = (ge, Le) => ge + (Le - ge) * o;
  s.speed = a(s.speed, Math.min(9, i.speed));
  const r = i.stride !== void 0,
    l = i.sprint ?? 0;
  r ? (s.phase = i.stride) : (s.phase += e * (2 + s.speed * 1.7));
  const c = !!i.seated,
    h = !!i.crouching && !i.prone && !c,
    d =
      c || i.airborne
        ? 0
        : (r
            ? Math.min(1, (0.22 + s.speed / 5.8) * Math.min(1, s.speed / 0.8)) *
              (1 + 0.22 * l)
            : Math.min(1, s.speed / 5)) * (h ? 0.23 : i.prone ? 0.22 : 0.65),
    u = Math.sin(s.phase) * d,
    f = Math.sin(t * 2.3) * 0.009;
  let p = -u * 0.8,
    m = i.held ? 1.05 + i.pitch * 0.6 : u * 0.8,
    y = 0,
    g = 0,
    b = 0.035,
    S = -0.035,
    M = u + (h ? 0.85 : 0),
    x = -u + (h ? 0.85 : 0);
  const T = r ? 1.05 + 0.5 * l : 0.65;
  let A = h ? -0.75 : -Math.max(0, -Math.sin(s.phase - (r ? 0.7 : 0))) * T * d,
    _ = h ? -0.75 : -Math.max(0, Math.sin(s.phase - (r ? 0.7 : 0))) * T * d,
    C = -0.12,
    R = i.held ? -0.25 : -0.12,
    L = 0,
    N = 0,
    D = 0,
    H = 0,
    G = h ? 0.18 : 0;
  if (
    (i.held && ((p = 0.95 + i.pitch * 0.6), (y = 0.65), (C = -0.5)),
    i.aiming &&
      ((m = 1.5 + i.pitch * 0.85),
      (p = 1.35 + i.pitch * 0.85),
      (g = -0.12),
      (y = 0.5)),
    i.airborne &&
      !c &&
      ((M = 0.3),
      (x = -0.2),
      (A = -0.65),
      (_ = -0.45),
      (b = 0.22),
      (S = -0.22),
      i.vy !== void 0))
  ) {
    const ge = Math.max(0, Math.min(1, i.vy / 6)),
      Le = Math.max(0, Math.min(1, -i.vy / 7));
    ((M = 0.3 + 0.55 * ge - 0.12 * Le),
      (x = -0.2 + 0.5 * ge + 0.22 * Le),
      (A = -0.65 - 0.6 * ge + 0.4 * Le),
      (_ = -0.45 - 0.55 * ge + 0.2 * Le));
  }
  (c &&
    ((M = x = 1.5),
    (A = _ = -1.4),
    (p = i.held ? p : 0.6),
    (m = i.held ? m : 0.6)),
    i.prone &&
      ((p = 2.65 + u * 0.55),
      (m = 2.65 - u * 0.55),
      (M = u * 0.35),
      (x = -u * 0.35),
      (y = 0.18),
      (g = -0.18),
      (A = -Math.max(0, u) * 1.5),
      (_ = -Math.max(0, -u) * 1.5),
      (C = R = -0.65)),
    i.parachute &&
      ((p = m = 2.72 + Math.sin(t * 1.4) * 0.05),
      (b = 0.3),
      (S = -0.3),
      (C = R = -0.35),
      (M = 0.3 + Math.sin(t * 1.1) * 0.06),
      (x = 0.24 - Math.sin(t * 1.1) * 0.06),
      (A = -0.45),
      (_ = -0.38)),
    i.reviving &&
      ((M = 1.3),
      (x = 0.4),
      (A = -1.45),
      (_ = -1.3),
      (G = 0.45),
      (p = 1.1 + Math.sin(t * 5) * 0.06),
      (m = 1.2 - Math.sin(t * 5) * 0.06),
      (y = 0.2),
      (g = -0.2),
      (C = R = -0.45)));
  const I = i.reload ?? -1;
  if (I >= 0) {
    const ge = Ms(I / 0.18) * Ms((1 - I) / 0.18);
    ((m -= ge * 0.4),
      (S -= ge * 0.3),
      (p = 1.1 + Math.sin(I * Math.PI * 3) * 0.45),
      (y = 0.75),
      (C = -0.6));
  }
  m += (i.shot ?? 0) * 0.22;
  const O = i.swing ?? -1,
    F = O > 0 && O < 1;
  if (F) {
    const ge = Math.sin(Math.sqrt(O) * Math.PI),
      Le = Math.sin(O * O * Math.PI);
    ((m += 1.35 * ge - 0.2 * Le),
      (g -= 0.55 * Le),
      (S += 0.18 * ge),
      (R -= 0.35 * ge));
  }
  const X = i.emote ?? 0,
    Q = i.emoteTime ?? 0,
    ee = WU(X, Q),
    se = (ge, Le) => ge + (Le - ge) * ee;
  if (ee > 0) {
    const ge = Q * Math.PI * 3;
    if (
      ((M = se(M, 0)),
      (x = se(x, 0)),
      (p = se(p, 0)),
      (m = se(m, 0)),
      (y *= 1 - ee),
      (g *= 1 - ee),
      X === 1)
    ) {
      const Le = Ms((Q - 2) / 0.6) * Ms((10.8 - Q) / 0.7);
      ((D = se(0, -1.18 * Le)),
        (N = ee * (Q * 2.1 * Le)),
        (H = ee * 0.12 * Math.sin(ge) * (1 - Le)),
        (p = se(p, 1.7 * Le + Math.sin(ge) * 0.8 * (1 - Le))),
        (m = se(m, -0.9 * Le)),
        (b = se(b, 1 * Le)),
        (S = se(S, -0.8 * Le)),
        (M = se(M, 0.9 * Math.sin(ge) * (1 - Le) + 1.15 * Le)),
        (x = se(x, -0.9 * Math.sin(ge) * (1 - Le) - 0.75 * Le)),
        (A = se(A, -0.35)),
        (_ = se(_, -0.65)),
        (H += ee * 0.2 * Le));
    } else if (X === 2)
      ((G = se(G, 0.23)),
        (H = ee * Math.sin(Q * 22) * 0.025),
        (p = se(p, 1)),
        (m = se(m, 1.15)),
        (y = se(y, 0.8)),
        (g = se(g, -0.8)));
    else if (X === 3)
      ((p = se(p, 2.6 + 0.3 * Math.sin(ge))),
        (m = se(m, 2.6 - 0.3 * Math.sin(ge))),
        (b = se(b, 0.35)),
        (S = se(S, -0.35)),
        (M = se(M, 0.6 * Math.sin(ge))),
        (x = se(x, -0.6 * Math.sin(ge))),
        (H = ee * Math.pow(Math.sin(ge), 2) * 0.16),
        (N = ee * 0.35 * Math.sin(ge * 0.5)));
    else if (X >= 4 && X <= 6)
      ((m = se(m, 1.55)),
        (S = se(S, X === 5 ? -0.35 : -0.1)),
        (R = se(R, -0.25)));
    else if (X === 7) {
      const Le = Math.tanh(Math.sin(ge) * 4);
      ((p = se(p, 1.3 + Le * 0.6)),
        (m = se(m, 1.3 - Le * 0.6)),
        (b = se(b, 0.65)),
        (S = se(S, -0.65)),
        (N = ee * Le * 0.3),
        (M = se(M, 0.25 * Le)),
        (x = se(x, -0.25 * Le)),
        (C = R = -1.2));
    } else
      X === 8
        ? ((m = se(m, 2.9)), (S = se(S, -0.45 + 0.3 * Math.sin(ge))))
        : X === 9 && ((m = se(m, 2.35)), (g = se(g, -0.3)), (R = se(R, -0.8)));
  }
  const oe =
    i.held && !i.aiming && !i.reviving && !i.parachute && (i.reload ?? -1) < 0
      ? o1(i.inspect ?? -1)
      : 0;
  oe &&
    ((p += (0.8 - p) * oe),
    (m += (1.8 - m) * oe),
    (g += (-0.4 - g) * oe),
    (S += (0.45 - S) * oe),
    (R += (-0.7 - R) * oe));
  const J = i.prone || c ? 0 : Math.max(0, Math.min(1, i.squat ?? 0));
  (J &&
    ((M += 0.62 * J),
    (x += 0.62 * J),
    (A -= 1.24 * J),
    (_ -= 1.24 * J),
    (H -= 0.8 * (1 - Math.cos(0.62 * J)))),
    r &&
      !i.prone &&
      (H -= ((0.045 * d) / 0.65) * (1 + 0.4 * l) * Math.sin(s.phase) ** 2));
  const re = s.pose;
  if ((re && (re.position.z = a(re.position.z, i.prone ? 0.3 : 0)), re)) {
    const ge = Math.atan2(
      Math.sin(N - re.rotation.y),
      Math.cos(N - re.rotation.y),
    );
    (re.rotation.set(
      a(re.rotation.x, L),
      re.rotation.y + ge * o,
      a(re.rotation.z, D),
    ),
      (re.position.y = a(re.position.y, H)));
  }
  const Ce = i.reviving ? 0.38 : c ? 0.78 : h ? 0.6 : 0.8,
    Re = i.reviving ? 0.73 : c ? 1.13 : h ? 0.95 : 1.15;
  ((n.body.position.y = a(n.body.position.y, Re + f)),
    (n.body.rotation.x = a(n.body.rotation.x, G)),
    (n.armorRoot.position.y = a(n.armorRoot.position.y, Re - 1.15 + f)),
    (n.armorRoot.rotation.x = a(n.armorRoot.rotation.x, G)),
    (n.head.position.y = a(n.head.position.y, Re + 0.35 + f)),
    (n.head.rotation.x = a(
      n.head.rotation.x,
      (i.prone ? Math.PI / 2 + i.pitch * 0.35 : i.pitch) +
        (X === 2 ? ee * 0.12 * Math.sin(Q * 20) : 0),
    )));
  const We =
      !!re &&
      ee < 0.1 &&
      !i.reviving &&
      !i.parachute &&
      pF(i.held) &&
      n.heldMesh.children.length > 0,
    it = 1 - Math.exp(-55 * e),
    ut = (ge, Le) => ge + (Le - ge) * it;
  for (const [ge, Le, Oe, Ve] of [
    [n.armL, p, y, b],
    [n.armR, m, g, S],
  ]) {
    ge.position.y = a(ge.position.y, Re + 0.3 + f);
    const Qe = F && ge === n.armR ? ut : a;
    We ||
      ge.rotation.set(
        Qe(ge.rotation.x, Le),
        Qe(ge.rotation.y, Oe),
        Qe(ge.rotation.z, Ve),
      );
  }
  for (const [ge, Le, Oe, Ve] of [
    [n.legL, M, c ? 0.12 : 0, A],
    [n.legR, x, c ? -0.12 : 0, _],
  ]) {
    ((ge.position.y = a(ge.position.y, Ce)),
      (ge.position.z = a(ge.position.z, 0)),
      ge.rotation.set(a(ge.rotation.x, Le), 0, a(ge.rotation.z, Oe)));
    const Qe = ge === n.legL ? s.kneeL : s.kneeR;
    Qe && (Qe.rotation.x = a(Qe.rotation.x, Ve));
  }
  const gt = s.elbowR;
  if (We)
    wF(
      re,
      n.armL,
      n.armR,
      n.heldMesh,
      i.held,
      {
        pitch: i.pitch,
        aiming: i.aiming,
        reload: I,
        shot: i.shot ?? 0,
        prone: !!i.prone,
        inspect: i.inspect,
      },
      o,
      n.body.position.y,
    );
  else {
    MF(n.armL, n.armR, n.heldMesh);
    for (const [Le, Oe] of [
      [n.armL, C],
      [n.armR, R],
    ]) {
      const Ve = Le === n.armL ? s.elbowL : s.elbowR;
      Ve && (Ve.rotation.x = (F && Le === n.armR ? ut : a)(Ve.rotation.x, Oe));
    }
    (gt &&
      (n.heldMesh.position
        .set(0, -0.3, 0)
        .applyEuler(gt.rotation)
        .add(gt.position),
      n.heldMesh.rotation.copy(gt.rotation)),
      oe &&
        ((n.heldMesh.rotation.y += Math.sin((i.inspect ?? 0) * 2) * 0.65 * oe),
        (n.heldMesh.rotation.z += 0.4 * oe)));
    const ge = n.heldMesh.getObjectByName("weapon-magazine");
    if (ge) {
      const Le = I >= 0 ? Ms((I - 0.2) / 0.2) * Ms((0.75 - I) / 0.25) : 0;
      ((ge.position.y = -Le * 0.26), (ge.rotation.z = Le * 0.12));
    }
  }
  n.heldMesh.visible = ee < 0.1 && !i.reviving;
  const ve = n.heldMesh.children[0];
  if (ve) {
    let ge = MT.get(ve);
    (ge ||
      MT.set(
        ve,
        (ge = {
          breech: ve.getObjectByName("launcher-breech"),
          slide: ve.getObjectByName("weapon-slide"),
        }),
      ),
      ge.breech &&
        (ge.breech.rotation.x =
          I >= 0 ? -0.48 * Ms(I / 0.2) * Ms((1 - I) / 0.2) : 0),
      ge.slide && (ge.slide.position.z = -0.06 + (i.shot ?? 0) * 0.045));
  }
  const Y = s.gesture;
  if (
    (Y &&
      ((Y.visible = ee > 0.1 && X >= 4 && X <= 6),
      Y.position.copy(n.heldMesh.position),
      (Y.rotation.x =
        ((gt == null ? void 0 : gt.rotation.x) ?? 0) - Math.PI / 2),
      (Y.rotation.z = X === 5 ? Math.PI : 0),
      Y.visible &&
        ((Y.getObjectByName("thumb").visible = X !== 6),
        (Y.getObjectByName("finger").visible = X === 6))),
    re && X === 1 && Q > 2 && Q < 10.8)
  ) {
    let ge = 1 / 0;
    for (const Oe of [n.armL, n.armR, n.legL, n.legR]) {
      const Ve = Oe.getObjectByName("joint");
      if (!Ve) continue;
      const Qe = Oe === n.armL || Oe === n.armR ? 0.325 : 0.4,
        Je = new k(0, -Qe, 0)
          .applyEuler(Ve.rotation)
          .add(Ve.position)
          .applyEuler(Oe.rotation)
          .add(Oe.position)
          .applyEuler(re.rotation);
      ge = Math.min(ge, Je.y);
    }
    const Le = Ms((Q - 2) / 0.6) * Ms((10.8 - Q) / 0.7) * ee;
    re.position.y = a(re.position.y, H * (1 - Le) + (0.025 - ge) * Le);
  }
  i.face !== !1 && SF(n.head, e, t, i.voice ?? 0, X === 2 ? ee : 0);
}
