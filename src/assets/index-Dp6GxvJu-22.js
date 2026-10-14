// index-Dp6GxvJu 22 — math
// Lines 35221-35570 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Ba(n, e, t = "", i = !0) {
  const s = uo(e == null ? void 0 : e.skin),
    o = e && s ? `${e.uid}:${e.skin}` : "";
  if (ww.get(n) !== o) {
    ww.set(n, o);
    const p = mU((e == null ? void 0 : e.uid) ?? "preview");
    n.updateWorldMatrix(!0, !0);
    const m = n.matrixWorld.clone().invert();
    if (n.userData.skinSize === void 0) {
      const g = new gn();
      n.traverse((S) => {
        const M = S;
        M.isMesh &&
          M.name !== "cosmetic-counter" &&
          (M.geometry.computeBoundingBox(),
          g.union(
            M.geometry.boundingBox
              .clone()
              .applyMatrix4(m.clone().multiply(M.matrixWorld)),
          ));
      });
      const b = g.getSize(new k());
      n.userData.skinSize = Math.max(b.x, b.y, b.z) || 1;
    }
    const y = Math.min(2.6, Math.max(1, 1.05 / n.userData.skinSize));
    n.traverse((g) => {
      const b = g;
      if (
        !b.isMesh ||
        b.name === "cosmetic-counter" ||
        (n.userData.skinTagged && !b.userData.skinEligible) ||
        (tk(b), !s)
      )
        return;
      const S = b.material,
        M = Array.isArray(S) ? S : [S];
      if (
        M.some(
          (_) =>
            _.transparent ||
            _ instanceof sn ||
            _ instanceof qt ||
            _.alphaTest > 0,
        ) ||
        OU(b, n, M)
      )
        return;
      const x = m.clone().multiply(b.matrixWorld),
        T = M.map((_) => TU(_, s, x, p.wear, p.seed, y));
      (bw.set(b, { original: S, paint: T, render: b.onBeforeRender }),
        (b.material = Array.isArray(S) ? T : T[0]));
      const A = b.onBeforeRender;
      b.onBeforeRender = function (..._) {
        (kU(), A.apply(this, _));
      };
    });
  }
  const a =
    i && s != null && s.tracking && e
      ? `${e.uid}:${e.kills}:${e.blocks ?? 0}:${t}`
      : "";
  if (Mw.get(n) === a || (Mw.set(n, a), ek(n), !a || !e)) return;
  const r = n.userData.skinItem,
    l = IU(WS(e, t, r), e.owner === t, Ty(r)),
    c = n.getObjectByName("cosmetic-knife-body"),
    h = Ti(n.userData.skinItem) || n.userData.skinItem,
    d =
      fo(h) === 278
        ? 0.1
        : fo(h) === 338 || c
          ? 0.095
          : h === 260
            ? 0.075
            : h === 261
              ? 0.09
              : h === 256
                ? 0.1
                : 0.14,
    u = fo(h) === 338 ? (n.getObjectByName("fp-turn") ?? n) : n,
    f = new le(
      new pn(d, (d * 80) / 256),
      new qt({
        map: l,
        toneMapped: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
    );
  if (((f.name = "cosmetic-counter"), (f.rotation.y = -Math.PI / 2), c))
    (f.position.set(-0.0037, 0.001, -0.068),
      (f.scale.y = c.scale.z / c.scale.y));
  else {
    let p = u.userData.killTrackMount;
    if (!p) {
      const m = new k(-0.035, 0.001, 0.03);
      (fo(h) === 278
        ? m.set(-0.041, 0, 0.018)
        : fo(h) === 338
          ? m.set(-0.081, 0, 0.03)
          : h === 256
            ? m.set(-0.035, -0.014, -0.05)
            : h === 257
              ? m.set(-0.031, -0.012, -0.12)
              : h === 258
                ? m.set(-0.04, -0.02, -0.13)
                : h === 260
                  ? m.set(-0.058, 0, 0)
                  : h === 261 && m.set(-0.019, 0.14, -0.055),
        n.updateWorldMatrix(!0, !0));
      const y = [];
      n.traverse((M) => {
        M.isMesh &&
          M.name !== "cosmetic-counter" &&
          (!n.userData.skinTagged || M.userData.skinEligible) &&
          y.push(M);
      });
      const g = u.localToWorld(new k(-5, m.y, m.z)),
        b = new lH(g, new k(1, 0, 0).transformDirection(u.matrixWorld));
      b.layers.enableAll();
      const S = b.intersectObjects(y, !1)[0];
      (S && (m.x = u.worldToLocal(S.point).x - 0.003),
        (p = m.toArray()),
        (u.userData.killTrackMount = p));
    }
    f.position.fromArray(p);
  }
  ((f.layers.mask = n.layers.mask), (c ?? u).add(f));
}
function ik(n, e) {
  const t = uo(e);
  if (!t) return;
  const i = n.canvas.width,
    s = n.canvas.height;
  (n.save(),
    (n.globalCompositeOperation = "source-atop"),
    (n.globalAlpha = 0.78),
    n.drawImage(CU(t), 0, 0, 256, 256, 0, 0, i, s),
    (n.globalAlpha = 0.35),
    (n.globalCompositeOperation = "source-atop"));
  const o = n.createLinearGradient(0, 0, i, s);
  (o.addColorStop(0, "rgba(255,255,255,.5)"),
    o.addColorStop(0.5, "rgba(255,255,255,0)"),
    (n.fillStyle = o),
    n.fillRect(0, 0, i, s),
    n.restore());
}
const Q0 = 9,
  ao = 4.2,
  NU = 4.75,
  Er = 2.3,
  Mh = 0.64,
  DU = 7043652,
  BU = 5596218,
  HU = 11772785,
  nT = 13128495,
  zU = 4871476,
  UU = 2961194;
function FU() {
  const n = new ql(),
    e = Er / 2;
  return (
    n.moveTo(-e, 0.02),
    n.bezierCurveTo(-e - 0.02, 0.26, -e * 0.55, 0.42, -e * 0.1, 0.4),
    n.bezierCurveTo(e * 0.45, 0.36, e * 0.85, 0.16, e, 0.02),
    n.lineTo(e, -0.01),
    n.bezierCurveTo(e * 0.4, 0.02, -e * 0.4, -0.02, -e * 0.92, -0.03),
    n.lineTo(-e, 0.02),
    n
  );
}
function nk() {
  const n = new pe();
  n.name = "parachute";
  const e = new pe();
  ((e.name = "parachute-wing"), (e.position.y = 1.7), n.add(e));
  const t = new pe();
  ((t.name = "parachute-canopy"), (t.position.y = NU - 1.7), e.add(t));
  const i = FU(),
    s = (Mh * 2) / Q0,
    o = 2 * ao * Math.sin(s / 2) * 1.01,
    a = new Kl(i, { depth: o, bevelEnabled: !1, curveSegments: 6 });
  (a.rotateY(Math.PI / 2), a.translate(-o / 2, 0, 0), a.computeVertexNormals());
  const r = new Map(),
    l = (A, _ = 0.5) => {
      const C = A * 10 + Math.round(_ * 9);
      let R = r.get(C);
      return (
        R ||
          ((R = new gi({
            color: A,
            side: Ai,
            emissive: new ze(A).multiplyScalar(_),
          })),
          r.set(C, R)),
        R
      );
    },
    c = new pn(o * 0.8, 0.16),
    h = new qt({ color: 2896674, side: Ai }),
    d = [];
  for (let A = 0; A < Q0; A++) {
    const _ = -Mh + s * (A + 0.5),
      R =
        A === 0 || A === Q0 - 1
          ? nT
          : A === (Q0 - 1) / 2
            ? HU
            : A % 2
              ? BU
              : DU,
      L = new le(a, l(R));
    (L.position.set(ao * Math.sin(_), ao * Math.cos(_) - ao, 0),
      (L.rotation.z = -_),
      (L.castShadow = !0),
      t.add(L));
    const N = new le(c, h);
    (N.position.set(L.position.x, L.position.y + 0.12, -Er / 2 - 0.005),
      (N.rotation.z = -_),
      t.add(N));
  }
  for (let A = 0; A <= Q0; A++) {
    const _ = -Mh + s * A,
      C = (ao - 0.02) * Math.sin(_),
      R = ao * Math.cos(_) - ao - 0.02;
    for (const L of [-Er * 0.38, 0, Er * 0.36]) d.push(new k(C, R, L));
  }
  for (const A of [-1, 1]) {
    const _ = A * Mh,
      C = new le(
        new ci().setFromPoints([
          new k(0, 0, -Er * 0.35),
          new k(0, 0, Er * 0.45),
          new k(0, -0.55, Er * 0.1),
        ]),
        l(nT),
      );
    (C.geometry.computeVertexNormals(),
      C.position.set(ao * Math.sin(_), ao * Math.cos(_) - ao, 0),
      (C.rotation.z = -_),
      t.add(C));
  }
  const u = new le(
    new xt(ao - 0.01, ao - 0.01, Er * 0.98, 24, 1, !0, -Mh, Mh * 2),
    l(zU, 0.6),
  );
  ((u.rotation.x = -Math.PI / 2), u.position.set(0, -ao - 0.01, 0), t.add(u));
  const f = [
      new k(-0.24, 0.02, -0.05),
      new k(0.24, 0.02, -0.05),
      new k(-0.22, 0, 0.1),
      new k(0.22, 0, 0.1),
    ],
    p = [],
    m = t.position.clone();
  for (const A of d) {
    const _ = A.clone().add(m),
      C = A.z < Er * 0.2,
      R = f[(_.x < 0 ? 0 : 1) + (C ? 0 : 2)],
      L = _.clone().lerp(R, 0.62);
    ((L.x = L.x * 0.55 + R.x * 0.45),
      p.push(_.x, _.y, _.z, L.x, L.y, L.z, L.x, L.y, L.z, R.x, R.y, R.z));
  }
  const y = [new k(-0.36, 0.42, 0.06), new k(0.36, 0.42, 0.06)];
  for (const A of [0, 1])
    for (const _ of [0, 1, 2]) {
      const C = A ? Q0 - _ : _,
        R = -Mh + s * C,
        L = new k(ao * Math.sin(R), ao * Math.cos(R) - ao, Er / 2).add(m);
      p.push(L.x, L.y, L.z, y[A].x, y[A].y, y[A].z);
    }
  const g = new ci();
  g.setAttribute("position", new It(p, 3));
  const b = new Dl(g, new Eo({ color: UU, transparent: !0, opacity: 0.55 }));
  ((b.name = "parachute-lines"), e.add(b));
  const S = l(2829607, 0);
  for (const A of f) {
    const _ = new le(new Ct(0.04, 0.42, 0.02), S);
    (_.position.copy(A).add(new k(0, 0.2, 0)), e.add(_));
  }
  for (const A of y) {
    const _ = new le(new Ct(0.05, 0.09, 0.05), l(14263361, 0.2));
    (_.position.copy(A), e.add(_));
  }
  const M = new pe();
  M.name = "parachute-pack";
  const x = new le(new Ct(0.46, 0.58, 0.2), l(3950128, 0));
  (x.position.set(0, 1.18, 0.25), (x.castShadow = !0));
  const T = new le(new Ct(0.48, 0.12, 0.22), l(3291944, 0));
  (T.position.set(0, 1.49, 0.25), M.add(x, T));
  for (const A of [-1, 1]) {
    const _ = new le(new Ct(0.05, 0.6, 0.05), S);
    (_.position.set(A * 0.17, 1.2, -0.14), M.add(_));
  }
  return (n.add(M), (n.userData.deploy = 0), (n.userData.wasVisible = !1), n);
}
function sk(n, e, t, i = 0, s = 0) {
  if (!n.visible) {
    n.userData.wasVisible = !1;
    return;
  }
  n.userData.wasVisible ||
    ((n.userData.wasVisible = !0),
    (n.userData.deploy = 0),
    (n.userData.bank = 0));
  const o = (n.userData.deploy = Math.min(
      1,
      (n.userData.deploy ?? 1) + e / 0.75,
    )),
    a = n.getObjectByName("parachute-wing"),
    r = n.getObjectByName("parachute-canopy");
  if (!a || !r) return;
  const l = 1 - Math.pow(1 - o, 3),
    c = o < 1 ? Math.sin(o * Math.PI) * 0.08 : 0;
  (r.scale.set(
    0.18 + 0.82 * l + c,
    (0.5 + 0.5 * l) * (1 + Math.sin(t * 2.2) * 0.018),
    0.55 + 0.45 * l,
  ),
    (a.scale.y = 0.35 + 0.65 * l));
  const h = (n.userData.bank =
    (n.userData.bank ?? 0) +
    (Math.max(-1.6, Math.min(1.6, i)) - (n.userData.bank ?? 0)) *
      (1 - Math.exp(-3 * e)));
  ((a.rotation.z = h * 0.32 + Math.sin(t * 1.1) * 0.025),
    (a.rotation.x = Math.sin(t * 1.37) * 0.035 - s * 0.12),
    (r.rotation.x = s * 0.1));
}
const EMOTES = [
    { id: 1, ru: "Брейкденс", en: "Breakdance", duration: 12 },
    { id: 2, ru: "Смех", en: "Laugh", duration: 5 },
    { id: 3, ru: "Победный танец", en: "Victory dance", duration: 10 },
    { id: 4, ru: "Лайк", en: "Thumbs up", duration: 4 },
    { id: 5, ru: "Дизлайк", en: "Thumbs down", duration: 4 },
    { id: 6, ru: "Средний палец", en: "Middle finger", duration: 4 },
    { id: 7, ru: "Робот", en: "Robot", duration: 10 },
    { id: 8, ru: "Приветствие", en: "Wave", duration: 5 },
    { id: 9, ru: "Салют", en: "Salute", duration: 4 },
  ],
  ok = (n) => EMOTES.find((e) => e.id === n),
  Ms = (n) => ((n = Math.max(0, Math.min(1, n))), n * n * (3 - 2 * n));
function WU(n, e) {
  const t = ok(n);
  return t ? Ms(e / 0.35) * Ms((t.duration - e) / 0.4) : 0;
}
const Rp = 3.2;
function o1(n) {
  if (n < 0 || n > Rp) return 0;
  const e = Math.min(1, n / 0.38) * Math.min(1, (Rp - n) / 0.48);
  return e * e * (3 - 2 * e);
}
