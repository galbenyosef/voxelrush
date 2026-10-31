// index-BeUlFSPp 52 — math
// Lines 46317-46666 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function qa(s, e, t = "", i = !0) {
  const n = io(e?.skin),
    o = e && n ? `${e.uid}:${e.skin}` : "";
  if (JS.get(s) !== o) {
    JS.set(s, o);
    const p = Gq(e?.uid ?? "preview");
    s.updateWorldMatrix(!0, !0);
    const m = s.matrixWorld.clone().invert();
    if (s.userData.skinSize === void 0) {
      const y = new zs();
      s.traverse((S) => {
        const M = S;
        M.isMesh &&
          M.name !== "cosmetic-counter" &&
          (M.geometry.computeBoundingBox(),
          y.union(
            M.geometry.boundingBox
              .clone()
              .applyMatrix4(m.clone().multiply(M.matrixWorld)),
          ));
      });
      const b = y.getSize(new k());
      s.userData.skinSize = Math.max(b.x, b.y, b.z) || 1;
    }
    const g = Math.min(2.6, Math.max(1, 1.05 / s.userData.skinSize));
    s.traverse((y) => {
      const b = y;
      if (
        !b.isMesh ||
        b.name === "cosmetic-counter" ||
        (s.userData.skinTagged && !b.userData.skinEligible) ||
        (fO(b), !n)
      )
        return;
      const S = b.material,
        M = Array.isArray(S) ? S : [S];
      if (
        M.some(
          (x) =>
            x.transparent ||
            x instanceof Gi ||
            x instanceof Zt ||
            x.alphaTest > 0,
        ) ||
        pK(b, s, M)
      )
        return;
      const E = m.clone().multiply(b.matrixWorld),
        A = M.map((x) => oK(x, n, E, p.wear, p.seed, g));
      (QS.set(b, { original: S, paint: A, render: b.onBeforeRender }),
        (b.material = Array.isArray(S) ? A : A[0]));
      const T = b.onBeforeRender;
      b.onBeforeRender = function (...x) {
        (hK(), T.apply(this, x));
      };
    });
  }
  const a =
    i && n?.tracking && e ? `${e.uid}:${e.kills}:${e.blocks ?? 0}:${t}` : "";
  if (e4.get(s) === a || (e4.set(s, a), uO(s), !a || !e)) return;
  const r = s.userData.skinItem,
    l = uK(zA(e, t, r), e.owner === t, U5(r)),
    c = s.getObjectByName("cosmetic-knife-body"),
    h = ai(s.userData.skinItem) || s.userData.skinItem,
    d =
      No(h) === 278
        ? 0.1
        : No(h) === 338 || c
          ? 0.095
          : h === 260
            ? 0.075
            : h === 261
              ? 0.09
              : h === 256 || h === 461
                ? 0.1
                : h === 463
                  ? 0.12
                  : 0.14,
    u = No(h) === 338 ? (s.getObjectByName("fp-turn") ?? s) : s,
    f = new Q(
      new ms(d, (d * 80) / 256),
      new Zt({
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
      (No(h) === 278
        ? m.set(-0.041, 0, 0.018)
        : No(h) === 338
          ? m.set(-0.081, 0, 0.03)
          : h === 256
            ? m.set(-0.035, -0.014, -0.05)
            : h === 257
              ? m.set(-0.031, -0.012, -0.12)
              : h === 461
                ? m.set(-0.035, -0.017, -0.1)
                : h === 462
                  ? m.set(-0.035, 0.008, -0.3)
                  : h === 463
                    ? m.set(-0.04, -0.06, -0.16)
                    : h === 258
                      ? m.set(-0.04, -0.02, -0.13)
                      : h === 260
                        ? m.set(-0.058, 0, 0)
                        : h === 261 && m.set(-0.019, 0.14, -0.055),
        s.updateWorldMatrix(!0, !0));
      const g = [];
      s.traverse((M) => {
        M.isMesh &&
          M.name !== "cosmetic-counter" &&
          (!s.userData.skinTagged || M.userData.skinEligible) &&
          g.push(M);
      });
      const y = u.localToWorld(new k(-5, m.y, m.z)),
        b = new xG(y, new k(1, 0, 0).transformDirection(u.matrixWorld));
      b.layers.enableAll();
      const S = b.intersectObjects(g, !1)[0];
      (S && (m.x = u.worldToLocal(S.point).x - 0.003),
        (p = m.toArray()),
        (u.userData.killTrackMount = p));
    }
    f.position.fromArray(p);
  }
  ((f.layers.mask = s.layers.mask), (c ?? u).add(f));
}
function pO(s, e) {
  const t = io(e);
  if (!t) return;
  const i = s.canvas.width,
    n = s.canvas.height;
  (s.save(),
    (s.globalCompositeOperation = "source-atop"),
    (s.globalAlpha = 0.78),
    s.drawImage(cK(t), 0, 0, 256, 256, 0, 0, i, n),
    (s.globalAlpha = 0.35),
    (s.globalCompositeOperation = "source-atop"));
  const o = s.createLinearGradient(0, 0, i, n);
  (o.addColorStop(0, "rgba(255,255,255,.5)"),
    o.addColorStop(0.5, "rgba(255,255,255,0)"),
    (s.fillStyle = o),
    s.fillRect(0, 0, i, n),
    s.restore());
}
const au = 9,
  Ro = 4.2,
  mK = 4.75,
  pl = 2.3,
  dh = 0.64,
  gK = 7043652,
  yK = 5596218,
  vK = 11772785,
  D_ = 13128495,
  bK = 4871476,
  wK = 2961194;
function MK() {
  const s = new il(),
    e = pl / 2;
  return (
    s.moveTo(-e, 0.02),
    s.bezierCurveTo(-e - 0.02, 0.26, -e * 0.55, 0.42, -e * 0.1, 0.4),
    s.bezierCurveTo(e * 0.45, 0.36, e * 0.85, 0.16, e, 0.02),
    s.lineTo(e, -0.01),
    s.bezierCurveTo(e * 0.4, 0.02, -e * 0.4, -0.02, -e * 0.92, -0.03),
    s.lineTo(-e, 0.02),
    s
  );
}
function mO() {
  const s = new re();
  s.name = "parachute";
  const e = new re();
  ((e.name = "parachute-wing"), (e.position.y = 1.7), s.add(e));
  const t = new re();
  ((t.name = "parachute-canopy"), (t.position.y = mK - 1.7), e.add(t));
  const i = MK(),
    n = (dh * 2) / au,
    o = 2 * Ro * Math.sin(n / 2) * 1.01,
    a = new sl(i, { depth: o, bevelEnabled: !1, curveSegments: 6 });
  (a.rotateY(Math.PI / 2), a.translate(-o / 2, 0, 0), a.computeVertexNormals());
  const r = new Map(),
    l = (T, x = 0.5) => {
      const R = T * 10 + Math.round(x * 9);
      let _ = r.get(R);
      return (
        _ ||
          ((_ = new Pi({
            color: T,
            side: Mi,
            emissive: new Ge(T).multiplyScalar(x),
          })),
          r.set(R, _)),
        _
      );
    },
    c = new ms(o * 0.8, 0.16),
    h = new Zt({ color: 2896674, side: Mi }),
    d = [];
  for (let T = 0; T < au; T++) {
    const x = -dh + n * (T + 0.5),
      _ =
        T === 0 || T === au - 1
          ? D_
          : T === (au - 1) / 2
            ? vK
            : T % 2
              ? yK
              : gK,
      C = new Q(a, l(_));
    (C.position.set(Ro * Math.sin(x), Ro * Math.cos(x) - Ro, 0),
      (C.rotation.z = -x),
      (C.castShadow = !0),
      t.add(C));
    const P = new Q(c, h);
    (P.position.set(C.position.x, C.position.y + 0.12, -pl / 2 - 0.005),
      (P.rotation.z = -x),
      t.add(P));
  }
  for (let T = 0; T <= au; T++) {
    const x = -dh + n * T,
      R = (Ro - 0.02) * Math.sin(x),
      _ = Ro * Math.cos(x) - Ro - 0.02;
    for (const C of [-pl * 0.38, 0, pl * 0.36]) d.push(new k(R, _, C));
  }
  for (const T of [-1, 1]) {
    const x = T * dh,
      R = new Q(
        new oi().setFromPoints([
          new k(0, 0, -pl * 0.35),
          new k(0, 0, pl * 0.45),
          new k(0, -0.55, pl * 0.1),
        ]),
        l(D_),
      );
    (R.geometry.computeVertexNormals(),
      R.position.set(Ro * Math.sin(x), Ro * Math.cos(x) - Ro, 0),
      (R.rotation.z = -x),
      t.add(R));
  }
  const u = new Q(
    new Tt(Ro - 0.01, Ro - 0.01, pl * 0.98, 24, 1, !0, -dh, dh * 2),
    l(bK, 0.6),
  );
  ((u.rotation.x = -Math.PI / 2), u.position.set(0, -Ro - 0.01, 0), t.add(u));
  const f = [
      new k(-0.24, 0.02, -0.05),
      new k(0.24, 0.02, -0.05),
      new k(-0.22, 0, 0.1),
      new k(0.22, 0, 0.1),
    ],
    p = [],
    m = t.position.clone();
  for (const T of d) {
    const x = T.clone().add(m),
      R = T.z < pl * 0.2,
      _ = f[(x.x < 0 ? 0 : 1) + (R ? 0 : 2)],
      C = x.clone().lerp(_, 0.62);
    ((C.x = C.x * 0.55 + _.x * 0.45),
      p.push(x.x, x.y, x.z, C.x, C.y, C.z, C.x, C.y, C.z, _.x, _.y, _.z));
  }
  const g = [new k(-0.36, 0.42, 0.06), new k(0.36, 0.42, 0.06)];
  for (const T of [0, 1])
    for (const x of [0, 1, 2]) {
      const R = T ? au - x : x,
        _ = -dh + n * R,
        C = new k(Ro * Math.sin(_), Ro * Math.cos(_) - Ro, pl / 2).add(m);
      p.push(C.x, C.y, C.z, g[T].x, g[T].y, g[T].z);
    }
  const y = new oi();
  y.setAttribute("position", new Dt(p, 3));
  const b = new kl(y, new Zo({ color: wK, transparent: !0, opacity: 0.55 }));
  ((b.name = "parachute-lines"), e.add(b));
  const S = l(2829607, 0);
  for (const T of f) {
    const x = new Q(new kt(0.04, 0.42, 0.02), S);
    (x.position.copy(T).add(new k(0, 0.2, 0)), e.add(x));
  }
  for (const T of g) {
    const x = new Q(new kt(0.05, 0.09, 0.05), l(14263361, 0.2));
    (x.position.copy(T), e.add(x));
  }
  const M = new re();
  M.name = "parachute-pack";
  const E = new Q(new kt(0.46, 0.58, 0.2), l(3950128, 0));
  (E.position.set(0, 1.18, 0.25), (E.castShadow = !0));
  const A = new Q(new kt(0.48, 0.12, 0.22), l(3291944, 0));
  (A.position.set(0, 1.49, 0.25), M.add(E, A));
  for (const T of [-1, 1]) {
    const x = new Q(new kt(0.05, 0.6, 0.05), S);
    (x.position.set(T * 0.17, 1.2, -0.14), M.add(x));
  }
  return (s.add(M), (s.userData.deploy = 0), (s.userData.wasVisible = !1), s);
}
function gO(s, e, t, i = 0, n = 0) {
  if (!s.visible) {
    s.userData.wasVisible = !1;
    return;
  }
  s.userData.wasVisible ||
    ((s.userData.wasVisible = !0),
    (s.userData.deploy = 0),
    (s.userData.bank = 0));
  const o = (s.userData.deploy = Math.min(
      1,
      (s.userData.deploy ?? 1) + e / 0.75,
    )),
    a = s.getObjectByName("parachute-wing"),
    r = s.getObjectByName("parachute-canopy");
  if (!a || !r) return;
  const l = 1 - Math.pow(1 - o, 3),
    c = o < 1 ? Math.sin(o * Math.PI) * 0.08 : 0;
  (r.scale.set(
    0.18 + 0.82 * l + c,
    (0.5 + 0.5 * l) * (1 + Math.sin(t * 2.2) * 0.018),
    0.55 + 0.45 * l,
  ),
    (a.scale.y = 0.35 + 0.65 * l));
  const h = (s.userData.bank =
    (s.userData.bank ?? 0) +
    (Math.max(-1.6, Math.min(1.6, i)) - (s.userData.bank ?? 0)) *
      (1 - Math.exp(-3 * e)));
  ((a.rotation.z = h * 0.32 + Math.sin(t * 1.1) * 0.025),
    (a.rotation.x = Math.sin(t * 1.37) * 0.035 - n * 0.12),
    (r.rotation.x = n * 0.1));
}
const SK = [
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
  yO = (s) => SK.find((e) => e.id === s),
  $n = (s) => ((s = Math.max(0, Math.min(1, s))), s * s * (3 - 2 * s));
function EK(s, e) {
  const t = yO(s);
  return t ? $n(e / 0.35) * $n((t.duration - e) / 0.4) : 0;
}
