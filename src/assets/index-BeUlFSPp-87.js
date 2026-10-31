// index-BeUlFSPp 87 — add
// Lines 56563-56829 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function SR(s) {
  const e = new re();
  if (
    (e.add(me(0.05, 0.08, 0.55, Tp, 0, 0, 0.02)),
    e.add(me(0.054, 0.03, 0.3, 3362858, 0, 0.03, -0.1)),
    e.add(Xm(0.015, 0.023, 0.42, vs, 0, 0.01, -0.46)),
    e.add(Gt(0.022, 0.08, vs, 0, 0.01, -0.68)),
    e.add(me(0.015, 0.04, 0.03, vs, 0, 0.05, -0.02)),
    e.add(me(0.05, 0.014, 0.085, Tp, 0, -0.045, 0.06)),
    e.add(me(0.011, 0.03, 0.011, lr, 0, -0.05, 0.04, "metal")),
    wt(2))
  ) {
    for (const f of [-0.655, -0.685, -0.715])
      e.add(me(0.048, 0.007, 0.012, vs, 0, 0.01, f, "metal"));
    const d = me(0.008, 0.13, 0.008, vs, -0.03, -0.08, -0.42, "metal");
    d.rotation.z = -0.42;
    const u = me(0.008, 0.13, 0.008, vs, 0.03, -0.08, -0.42, "metal");
    ((u.rotation.z = 0.42),
      e.add(d, u),
      e.add(me(0.05, 0.012, 0.03, vs, 0, -0.04, -0.42)),
      Ll(
        e,
        4,
        0.055,
        0.006,
        0.006,
        0.045,
        1711650,
        0.014,
        0.022,
        -0.56,
        "metal",
      ),
      Ll(
        e,
        4,
        0.055,
        0.006,
        0.006,
        0.045,
        1711650,
        -0.014,
        0.022,
        -0.56,
        "metal",
      ),
      e.add(me(0.014, 0.022, 0.014, vs, -0.032, -0.028, 0.32)));
  }
  if (s && s.scope > 0) {
    const d = s.scope === 5 ? K0[w.AWP] : 0.09;
    e.add(Jf(s.scope, 0, d, -0.1, 0.04));
  } else
    (e.add(me(0.012, 0.064, 0.012, vs, 0, 0.068, -0.58)),
      e.add(me(0.016, 0.06, 0.016, vs, 0, 0.035, -0.58)),
      e.add(me(0.03, 0.03, 0.02, vs, 0, 0.075, -0.06)),
      e.add(me(0.014, 0.03, 0.02, vs, 0, 0.055, -0.06)));
  const t = new re();
  ((t.name = "weapon-bolt"), t.position.set(0, 0.02, 0.1));
  const i = me(0.045, 0.012, 0.014, lr, 0.038, -0.008, 0, "metal");
  ((i.rotation.z = -0.35), t.add(i));
  const n = new Q(new ws(0.012, ci(8), ci(6)), Ti(vs, "metal"));
  (n.position.set(0.062, -0.018, 0),
    t.add(n),
    t.add(Gt(0.013, 0.07, lr, 0, 0, 0.01)),
    e.add(t),
    _i(e, "eject-port", 0.03, 0.03, 0.02),
    _i(t, "bolt-knob", 0.062, -0.03, 0.005, 0.3));
  const o = me(0.045, 0.09, 0.22, Tp, 0, -0.02, 0.33);
  (e.add(o), e.add(me(0.04, 0.05, 0.1, Tp, 0, 0.05, 0.28)));
  const a = me(0.04, 0.1, 0.05, Tp, 0, -0.085, 0.175);
  ((a.rotation.x = -0.4),
    e.add(a),
    _i(e, "grip-r", 0, -0.095, 0.18, -0.4),
    _i(e, "grip-l", 0, -0.018, -0.3));
  const r = new re();
  ((r.name = "weapon-magazine"), r.position.set(0, -0.06, -0.02));
  const l = me(0.04, 0.07, 0.09, vs, 0, -0.02, 0);
  (s?.extMag && jO(l, 0.07),
    r.add(l),
    _i(r, "mag-grip", 0, -0.075, 0),
    e.add(r));
  const c = new Xt();
  (c.position.set(0, 0.01, -0.73),
    e.add(c),
    s?.suppressor && e.add(Zf(0.026, c.position, 0.19)));
  let h = null;
  return (
    s?.laser && ((h = Qf(0, -0.03, -0.35)), e.add(h)),
    s?.light && e.add(J0(0.04, -0.022, -0.32)),
    Hs(e, c, r, null, null, h)
  );
}
function wX() {
  const s = new re();
  (s.add(me(0.075, 0.085, 0.22, 3423032, 0, -0.015, 0.12, "metal")),
    s.add(me(0.07, 0.09, 0.18, 6845010, 0, -0.02, 0.29)),
    s.add(me(0.08, 0.13, 0.035, 2106915, 0, -0.025, 0.39)));
  const e = me(0.052, 0.15, 0.07, 2633258, 0, -0.11, 0.145);
  ((e.rotation.x = -0.3), s.add(e));
  for (const o of [-0.029, 0.029])
    s.add(me(0.009, 0.065, 0.095, 1777950, o, -0.09, 0.035, "metal"));
  (s.add(me(0.06, 0.009, 0.095, 1777950, 0, -0.123, 0.035, "metal")),
    s.add(me(0.012, 0.044, 0.014, 8489600, 0, -0.076, 0.05, "metal")),
    s.add(me(0.014, 0.018, 0.038, 13020784, 0.043, 0.014, 0.13, "metal")));
  const t = new re();
  ((t.name = "launcher-breech"),
    (t.position.z = 0.035),
    s.add(t),
    t.add(Gt(0.064, 0.39, 4344640, 0, 0, -0.23)),
    t.add(Gt(0.065, 0.016, 10265495, 0, 0, -0.432)),
    t.add(Gt(0.047, 0.004, 593163, 0, 0, -0.443)));
  for (let o = 0; o < 9; o++)
    t.add(Gt(0.069, 0.012, 2436390, 0, 0, -0.13 - o * 0.025));
  for (const o of [-0.025, 0.025])
    s.add(me(0.009, 0.11, 0.015, 6647899, o, 0.085, -0.18, "metal"));
  for (let o = 0; o < 4; o++)
    s.add(
      me(0.05, 0.005, 0.012, 13225405, 0, 0.06 + o * 0.025, -0.18, "metal"),
    );
  s.add(me(0.046, 0.058, 0.03, 2765355, 0, 0.056, 0.17));
  for (const o of [-0.021, 0.021])
    s.add(me(0.008, 0.032, 0.03, 2765355, o, 0.1, 0.17, "metal"));
  const i = new re();
  ((i.name = "weapon-magazine"),
    i.add(Gt(0.039, 0.072, 12228944, 0, 0, -0.005)),
    i.add(Sc(0.039, 0.055, 5661500, 0, 0, -0.066)),
    i.add(Gt(0.042, 0.01, 13741668, 0, 0, 0.03)),
    _i(i, "mag-grip", 0, -0.055, 0),
    s.add(i));
  const n = new Xt();
  return (
    n.position.set(0, 0, -0.42),
    t.add(n),
    _i(s, "grip-r", 0, -0.115, 0.15, -0.3),
    _i(t, "grip-l", 0, -0.07, -0.24),
    Hs(s, n, i, null)
  );
}
function MX() {
  const s = new re();
  (s.add(Gt(0.045, 0.08, 12162374)),
    s.add(Sc(0.045, 0.06, 5595704, 0, 0, -0.065)),
    s.add(Gt(0.048, 0.008, 13678188, 0, 0, 0.04)));
  const e = new Xt();
  return (s.add(e), Hs(s, e, null, null));
}
function SX() {
  const s = new re();
  (s.add(Gt(0.042, 0.6, mR, 0, 0, 0.05, "matte")),
    s.add(Gt(0.055, 0.12, mR, 0, 0, 0.38, "matte")),
    s.add(Sc(0.05, 0.12, vs, 0, 0, 0.47)));
  const e = new re();
  ((e.name = "weapon-magazine"),
    e.add(Gt(0.03, 0.14, 7041877, 0, 0, -0.3, "matte")),
    e.add(Sc(0.068, 0.22, 4871488, 0, 0, -0.48, "matte")),
    s.add(e),
    s.add(Gt(0.047, 0.16, 7301714, 0, 0, -0.12, "matte")));
  const t = me(0.035, 0.1, 0.045, Jh, 0, -0.085, 0.13);
  t.rotation.x = -0.3;
  const i = me(0.035, 0.09, 0.045, Jh, 0, -0.085, -0.05);
  if (
    (s.add(t, i),
    s.add(me(0.05, 0.012, 0.07, vs, 0, -0.048, 0.11)),
    s.add(me(0.008, 0.05, 0.02, vs, 0, 0.075, -0.1)),
    wt(2))
  ) {
    (s.add(me(0.014, 0.012, 0.03, vs, -0.05, 0.03, -0.1, "metal")),
      s.add(me(0.004, 0.05, 0.004, vs, -0.062, 0.06, -0.1, "metal")),
      s.add(me(0.004, 0.004, 0.018, vs, -0.062, 0.085, -0.1, "metal")),
      s.add(me(0.028, 0.03, 0.05, vs, 0.028, 0.02, 0.06)));
    for (let a = 0; a < 4; a++) {
      const r = me(0.004, 0.05, 0.06, 3884335, 0, 0, 0.3);
      ((r.rotation.z = (a / 4) * Math.PI * 2),
        r.position.set(
          Math.sin((a / 4) * Math.PI * 2) * 0.045,
          Math.cos((a / 4) * Math.PI * 2) * 0.045,
          0.3,
        ),
        s.add(r));
    }
    for (const a of [-0.17, -0.07])
      s.add(Gt(0.05, 0.012, vs, 0, 0, a, "metal"));
  }
  const n = new Xt();
  (n.position.set(0, 0, -0.6), s.add(n));
  const o = e;
  return (
    _i(e, "mag-grip", 0, -0.075, -0.4),
    _i(s, "grip-r", 0, -0.09, 0.135, -0.3),
    _i(s, "grip-l", 0, -0.085, -0.05, 0, 0, -Math.PI / 2),
    s.traverse((a) => {
      if (!("isMesh" in a) || !a.isMesh) return;
      const r = a.material;
      for (const l of Array.isArray(r) ? r : [r])
        ((l.transparent = !1),
          (l.opacity = 1),
          (l.depthWrite = !0),
          (l.needsUpdate = !0));
    }),
    Hs(s, n, o, null)
  );
}
function EX() {
  const s = new re(),
    e = new Q(new ws(0.055, ci(10), ci(8)), Ti(3820851, "gloss"));
  ((e.scale.y = 1.25),
    s.add(e),
    s.add(me(0.025, 0.03, 0.025, lr, 0, 0.08, 0, "metal")),
    _i(s, "grip-r", 0.012, -0.03, 0.03, 0.2));
  const t = me(0.015, 0.09, 0.02, lr, 0.02, 0.045, 0.015, "metal");
  if (((t.rotation.z = -0.25), s.add(t), wt(1))) {
    const n = new Q(new Gn(0.016, 0.0035, 6, ci(12)), Ti(13225170, "metal"));
    ((n.rotation.y = Math.PI / 2),
      n.position.set(-0.028, 0.072, 0),
      s.add(n),
      s.add(me(0.03, 0.005, 0.005, 13225170, -0.012, 0.072, 0, "metal")));
  }
  if (wt(2))
    for (const n of [-0.03, 0, 0.03]) {
      const o = new Q(new Gn(0.052, 0.0035, 5, ci(12)), Ti(2898470));
      ((o.rotation.x = Math.PI / 2), (o.position.y = n), s.add(o));
    }
  const i = new Xt();
  return (s.add(i), Hs(s, i, null, null));
}
function ER() {
  const s = new re(),
    e = me(0.035, 0.5, 0.035, Jh, 0, -0.1, 0);
  if (
    ((e.rotation.x = 0.3),
    s.add(e),
    s.add(me(0.03, 0.1, 0.16, 10134187, 0, 0.14, -0.06, "metal")),
    s.add(me(0.032, 0.11, 0.05, 8225674, 0, 0.14, -0.13, "metal")),
    wt(1) &&
      (s.add(me(0.034, 0.115, 0.014, 14673644, 0, 0.14, -0.155, "metal")),
      s.add(me(0.036, 0.03, 0.05, 6976124, 0, 0.14, 0.005, "metal"))),
    wt(2))
  ) {
    s.add(me(0.038, 0.014, 0.038, 4870232, 0, 0.185, 0, "metal"));
    for (const i of [-0.24, -0.28, -0.32])
      s.add(me(0.038, 0.008, 0.038, 4863264, 0, i, 0));
  }
  _i(s, "hand-r", 0, -0.23, -0.043, 0.3);
  const t = new Xt();
  return (s.add(t), Hs(s, t, null, null));
}
function Bh(s, e, t, i, n) {
  const o = new il();
  (s.forEach(([c, h], d) => (d ? o.lineTo(c, h) : o.moveTo(c, h))),
    o.closePath());
  const a = wt(1) ? n : 0,
    r = Math.max(4e-4, e - 2 * a),
    l = new sl(o, {
      depth: r,
      bevelEnabled: a > 0,
      bevelThickness: a,
      bevelSize: a * 0.8,
      bevelSegments: 1,
      curveSegments: 4,
    });
  return (
    l.rotateY(-Math.PI / 2),
    l.translate(r / 2, 0, 0),
    new Q(l, Ti(t, i))
  );
}
const lg = [1.35, 1.6, 1.4];
