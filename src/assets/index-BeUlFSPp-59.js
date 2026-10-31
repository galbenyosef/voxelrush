// index-BeUlFSPp 59 — math
// Lines 48405-48762 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Xf(s, e, t, i) {
  let n = tR.get(s.group);
  n ||
    ((n = {
      phase: 0,
      speed: 0,
      pose: s.group.getObjectByName("pose-root") ?? null,
      kneeL: s.legL.getObjectByName("joint") ?? null,
      kneeR: s.legR.getObjectByName("joint") ?? null,
      elbowL: s.armL.getObjectByName("joint") ?? null,
      elbowR: s.armR.getObjectByName("joint") ?? null,
      gesture: s.armR.getObjectByName("gesture") ?? null,
    }),
    tR.set(s.group, n));
  const o = 1 - Math.exp(-16 * e),
    a = (ye, Ce) => ye + (Ce - ye) * o;
  n.speed = a(n.speed, Math.min(9, i.speed));
  const r = i.stride !== void 0,
    l = i.sprint ?? 0;
  r ? (n.phase = i.stride) : (n.phase += e * (2 + n.speed * 1.7));
  const c = !!i.seated,
    h = !!i.crouching && !i.prone && !c,
    d =
      c || i.airborne
        ? 0
        : (r
            ? Math.min(1, (0.22 + n.speed / 5.8) * Math.min(1, n.speed / 0.8)) *
              (1 + 0.22 * l)
            : Math.min(1, n.speed / 5)) * (h ? 0.23 : i.prone ? 0.22 : 0.65),
    u = Math.sin(n.phase) * d,
    f = Math.sin(t * 2.3) * 0.009;
  let p = -u * 0.8,
    m = i.held ? 1.05 + i.pitch * 0.6 : u * 0.8,
    g = 0,
    y = 0,
    b = 0.035,
    S = -0.035,
    M = u + (h ? 0.85 : 0),
    E = -u + (h ? 0.85 : 0);
  const A = r ? 1.05 + 0.5 * l : 0.65;
  let T = h ? -0.75 : -Math.max(0, -Math.sin(n.phase - (r ? 0.7 : 0))) * A * d,
    x = h ? -0.75 : -Math.max(0, Math.sin(n.phase - (r ? 0.7 : 0))) * A * d,
    R = -0.12,
    _ = i.held ? -0.25 : -0.12,
    C = 0,
    P = 0,
    O = 0,
    B = 0,
    H = h ? 0.18 : 0;
  if (
    (i.held && ((p = 0.95 + i.pitch * 0.6), (g = 0.65), (R = -0.5)),
    i.aiming &&
      ((m = 1.5 + i.pitch * 0.85),
      (p = 1.35 + i.pitch * 0.85),
      (y = -0.12),
      (g = 0.5)),
    i.airborne &&
      !c &&
      ((M = 0.3),
      (E = -0.2),
      (T = -0.65),
      (x = -0.45),
      (b = 0.22),
      (S = -0.22),
      i.vy !== void 0))
  ) {
    const ye = Math.max(0, Math.min(1, i.vy / 6)),
      Ce = Math.max(0, Math.min(1, -i.vy / 7));
    ((M = 0.3 + 0.55 * ye - 0.12 * Ce),
      (E = -0.2 + 0.5 * ye + 0.22 * Ce),
      (T = -0.65 - 0.6 * ye + 0.4 * Ce),
      (x = -0.45 - 0.55 * ye + 0.2 * Ce));
  }
  (c &&
    ((M = E = 1.5),
    (T = x = -1.4),
    (p = i.held ? p : 0.6),
    (m = i.held ? m : 0.6)),
    i.prone &&
      ((p = 2.65 + u * 0.55),
      (m = 2.65 - u * 0.55),
      (M = u * 0.35),
      (E = -u * 0.35),
      (g = 0.18),
      (y = -0.18),
      (T = -Math.max(0, u) * 1.5),
      (x = -Math.max(0, -u) * 1.5),
      (R = _ = -0.65)),
    i.parachute &&
      ((p = m = 2.72 + Math.sin(t * 1.4) * 0.05),
      (b = 0.3),
      (S = -0.3),
      (R = _ = -0.35),
      (M = 0.3 + Math.sin(t * 1.1) * 0.06),
      (E = 0.24 - Math.sin(t * 1.1) * 0.06),
      (T = -0.45),
      (x = -0.38)),
    i.reviving &&
      ((M = 1.3),
      (E = 0.4),
      (T = -1.45),
      (x = -1.3),
      (H = 0.45),
      (p = 1.1 + Math.sin(t * 5) * 0.06),
      (m = 1.2 - Math.sin(t * 5) * 0.06),
      (g = 0.2),
      (y = -0.2),
      (R = _ = -0.45)));
  const D = i.reload ?? -1;
  if (D >= 0) {
    const ye = $n(D / 0.18) * $n((1 - D) / 0.18);
    ((m -= ye * 0.4),
      (S -= ye * 0.3),
      (p = 1.1 + Math.sin(D * Math.PI * 3) * 0.45),
      (g = 0.75),
      (R = -0.6));
  }
  m += (i.shot ?? 0) * 0.22;
  const U = i.swing ?? -1,
    W = U > 0 && U < 1;
  if (W) {
    const ye = Math.sin(Math.sqrt(U) * Math.PI),
      Ce = Math.sin(U * U * Math.PI);
    ((m += 1.35 * ye - 0.2 * Ce),
      (y -= 0.55 * Ce),
      (S += 0.18 * ye),
      (_ -= 0.35 * ye));
  }
  const J = i.emote ?? 0,
    j = i.emoteTime ?? 0,
    ne = EK(J, j),
    ge = (ye, Ce) => ye + (Ce - ye) * ne;
  if (ne > 0) {
    const ye = j * Math.PI * 3;
    if (
      ((M = ge(M, 0)),
      (E = ge(E, 0)),
      (p = ge(p, 0)),
      (m = ge(m, 0)),
      (g *= 1 - ne),
      (y *= 1 - ne),
      J === 1)
    ) {
      const Ce = $n((j - 2) / 0.6) * $n((10.8 - j) / 0.7);
      ((O = ge(0, -1.18 * Ce)),
        (P = ne * (j * 2.1 * Ce)),
        (B = ne * 0.12 * Math.sin(ye) * (1 - Ce)),
        (p = ge(p, 1.7 * Ce + Math.sin(ye) * 0.8 * (1 - Ce))),
        (m = ge(m, -0.9 * Ce)),
        (b = ge(b, 1 * Ce)),
        (S = ge(S, -0.8 * Ce)),
        (M = ge(M, 0.9 * Math.sin(ye) * (1 - Ce) + 1.15 * Ce)),
        (E = ge(E, -0.9 * Math.sin(ye) * (1 - Ce) - 0.75 * Ce)),
        (T = ge(T, -0.35)),
        (x = ge(x, -0.65)),
        (B += ne * 0.2 * Ce));
    } else if (J === 2)
      ((H = ge(H, 0.23)),
        (B = ne * Math.sin(j * 22) * 0.025),
        (p = ge(p, 1)),
        (m = ge(m, 1.15)),
        (g = ge(g, 0.8)),
        (y = ge(y, -0.8)));
    else if (J === 3)
      ((p = ge(p, 2.6 + 0.3 * Math.sin(ye))),
        (m = ge(m, 2.6 - 0.3 * Math.sin(ye))),
        (b = ge(b, 0.35)),
        (S = ge(S, -0.35)),
        (M = ge(M, 0.6 * Math.sin(ye))),
        (E = ge(E, -0.6 * Math.sin(ye))),
        (B = ne * Math.pow(Math.sin(ye), 2) * 0.16),
        (P = ne * 0.35 * Math.sin(ye * 0.5)));
    else if (J >= 4 && J <= 6)
      ((m = ge(m, 1.55)),
        (S = ge(S, J === 5 ? -0.35 : -0.1)),
        (_ = ge(_, -0.25)));
    else if (J === 7) {
      const Ce = Math.tanh(Math.sin(ye) * 4);
      ((p = ge(p, 1.3 + Ce * 0.6)),
        (m = ge(m, 1.3 - Ce * 0.6)),
        (b = ge(b, 0.65)),
        (S = ge(S, -0.65)),
        (P = ne * Ce * 0.3),
        (M = ge(M, 0.25 * Ce)),
        (E = ge(E, -0.25 * Ce)),
        (R = _ = -1.2));
    } else
      J === 8
        ? ((m = ge(m, 2.9)), (S = ge(S, -0.45 + 0.3 * Math.sin(ye))))
        : J === 9 && ((m = ge(m, 2.35)), (y = ge(y, -0.3)), (_ = ge(_, -0.8)));
  }
  const be =
    i.held && !i.aiming && !i.reviving && !i.parachute && (i.reload ?? -1) < 0
      ? jm(i.inspect ?? -1)
      : 0;
  be &&
    ((p += (0.8 - p) * be),
    (m += (1.8 - m) * be),
    (y += (-0.4 - y) * be),
    (S += (0.45 - S) * be),
    (_ += (-0.7 - _) * be));
  const oe = i.prone || c ? 0 : Math.max(0, Math.min(1, i.squat ?? 0));
  (oe &&
    ((M += 0.62 * oe),
    (E += 0.62 * oe),
    (T -= 1.24 * oe),
    (x -= 1.24 * oe),
    (B -= 0.8 * (1 - Math.cos(0.62 * oe)))),
    r &&
      !i.prone &&
      (B -= ((0.045 * d) / 0.65) * (1 + 0.4 * l) * Math.sin(n.phase) ** 2));
  const he = n.pose;
  if ((he && (he.position.z = a(he.position.z, i.prone ? 0.3 : 0)), he)) {
    const ye = Math.atan2(
      Math.sin(P - he.rotation.y),
      Math.cos(P - he.rotation.y),
    );
    (he.rotation.set(
      a(he.rotation.x, C),
      he.rotation.y + ye * o,
      a(he.rotation.z, O),
    ),
      (he.position.y = a(he.position.y, B)));
  }
  const Ie = i.reviving ? 0.38 : c ? 0.78 : h ? 0.6 : 0.8,
    ve = i.reviving ? 0.73 : c ? 1.13 : h ? 0.95 : 1.15;
  ((s.body.position.y = a(s.body.position.y, ve + f)),
    (s.body.rotation.x = a(s.body.rotation.x, H)),
    (s.armorRoot.position.y = a(s.armorRoot.position.y, ve - 1.15 + f)),
    (s.armorRoot.rotation.x = a(s.armorRoot.rotation.x, H)),
    (s.head.position.y = a(s.head.position.y, ve + 0.35 + f)),
    (s.head.rotation.x = a(
      s.head.rotation.x,
      (i.prone ? Math.PI / 2 + i.pitch * 0.35 : i.pitch) +
        (J === 2 ? ne * 0.12 * Math.sin(j * 20) : 0),
    )));
  const it =
      !!he &&
      ne < 0.1 &&
      !i.reviving &&
      !i.parachute &&
      eY(i.held) &&
      s.heldMesh.children.length > 0,
    st = 1 - Math.exp(-55 * e),
    ot = (ye, Ce) => ye + (Ce - ye) * st;
  for (const [ye, Ce, ze, tt] of [
    [s.armL, p, g, b],
    [s.armR, m, y, S],
  ]) {
    ye.position.y = a(ye.position.y, ve + 0.3 + f);
    const ht = W && ye === s.armR ? ot : a;
    it ||
      ye.rotation.set(
        ht(ye.rotation.x, Ce),
        ht(ye.rotation.y, ze),
        ht(ye.rotation.z, tt),
      );
  }
  for (const [ye, Ce, ze, tt] of [
    [s.legL, M, c ? 0.12 : 0, T],
    [s.legR, E, c ? -0.12 : 0, x],
  ]) {
    ((ye.position.y = a(ye.position.y, Ie)),
      (ye.position.z = a(ye.position.z, 0)),
      ye.rotation.set(a(ye.rotation.x, Ce), 0, a(ye.rotation.z, ze)));
    const ht = ye === s.legL ? n.kneeL : n.kneeR;
    ht && (ht.rotation.x = a(ht.rotation.x, tt));
  }
  const at = n.elbowR;
  if (it)
    aY(
      he,
      s.armL,
      s.armR,
      s.heldMesh,
      i.held,
      {
        pitch: i.pitch,
        aiming: i.aiming,
        reload: D,
        shot: i.shot ?? 0,
        prone: !!i.prone,
        inspect: i.inspect,
      },
      o,
      s.body.position.y,
    );
  else {
    rY(s.armL, s.armR, s.heldMesh);
    for (const [Ce, ze] of [
      [s.armL, R],
      [s.armR, _],
    ]) {
      const tt = Ce === s.armL ? n.elbowL : n.elbowR;
      tt && (tt.rotation.x = (W && Ce === s.armR ? ot : a)(tt.rotation.x, ze));
    }
    (at &&
      (s.heldMesh.position
        .set(0, -0.3, 0)
        .applyEuler(at.rotation)
        .add(at.position),
      s.heldMesh.rotation.copy(at.rotation)),
      be &&
        ((s.heldMesh.rotation.y += Math.sin((i.inspect ?? 0) * 2) * 0.65 * be),
        (s.heldMesh.rotation.z += 0.4 * be)));
    const ye = s.heldMesh.getObjectByName("weapon-magazine");
    if (ye) {
      const Ce = D >= 0 ? $n((D - 0.2) / 0.2) * $n((0.75 - D) / 0.25) : 0;
      ((ye.position.y = -Ce * 0.26), (ye.rotation.z = Ce * 0.12));
    }
  }
  s.heldMesh.visible = ne < 0.1 && !i.reviving;
  const Re = s.heldMesh.children[0];
  if (Re) {
    let ye = iR.get(Re);
    (ye ||
      iR.set(
        Re,
        (ye = {
          breech: Re.getObjectByName("launcher-breech"),
          slide: Re.getObjectByName("weapon-slide"),
        }),
      ),
      ye.breech &&
        (ye.breech.rotation.x =
          D >= 0 ? -0.48 * $n(D / 0.2) * $n((1 - D) / 0.2) : 0),
      ye.slide && (ye.slide.position.z = -0.06 + (i.shot ?? 0) * 0.045));
  }
  const V = n.gesture;
  if (
    (V &&
      ((V.visible = ne > 0.1 && J >= 4 && J <= 6),
      V.position.copy(s.heldMesh.position),
      (V.rotation.x = (at?.rotation.x ?? 0) - Math.PI / 2),
      (V.rotation.z = J === 5 ? Math.PI : 0),
      V.visible &&
        ((V.getObjectByName("thumb").visible = J !== 6),
        (V.getObjectByName("finger").visible = J === 6))),
    he && J === 1 && j > 2 && j < 10.8)
  ) {
    let ye = 1 / 0;
    for (const ze of [s.armL, s.armR, s.legL, s.legR]) {
      const tt = ze.getObjectByName("joint");
      if (!tt) continue;
      const ht = ze === s.armL || ze === s.armR ? 0.325 : 0.4,
        ut = new k(0, -ht, 0)
          .applyEuler(tt.rotation)
          .add(tt.position)
          .applyEuler(ze.rotation)
          .add(ze.position)
          .applyEuler(he.rotation);
      ye = Math.min(ye, ut.y);
    }
    const Ce = $n((j - 2) / 0.6) * $n((10.8 - j) / 0.7) * ne;
    he.position.y = a(he.position.y, B * (1 - Ce) + (0.025 - ye) * Ce);
  }
  i.face !== !1 && lY(s.head, e, t, i.voice ?? 0, J === 2 ? ne : 0);
}
