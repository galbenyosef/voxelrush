// index-Dp6GxvJu 64 — add
// Lines 48016-48282 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function jT(n) {
  const e = new pe();
  if (
    (e.add(De(0.05, 0.08, 0.55, Zu, 0, 0, 0.02)),
    e.add(De(0.054, 0.03, 0.3, 3362858, 0, 0.03, -0.1)),
    e.add(Iy(0.015, 0.023, 0.42, hn, 0, 0.01, -0.46)),
    e.add(Qt(0.022, 0.08, hn, 0, 0.01, -0.68)),
    e.add(De(0.015, 0.04, 0.03, hn, 0, 0.05, -0.02)),
    e.add(De(0.05, 0.014, 0.085, Zu, 0, -0.045, 0.06)),
    e.add(De(0.011, 0.03, 0.011, Aa, 0, -0.05, 0.04, "metal")),
    yt(2))
  ) {
    for (const f of [-0.655, -0.685, -0.715])
      e.add(De(0.048, 0.007, 0.012, hn, 0, 0.01, f, "metal"));
    const d = De(0.008, 0.13, 0.008, hn, -0.03, -0.08, -0.42, "metal");
    d.rotation.z = -0.42;
    const u = De(0.008, 0.13, 0.008, hn, 0.03, -0.08, -0.42, "metal");
    ((u.rotation.z = 0.42),
      e.add(d, u),
      e.add(De(0.05, 0.012, 0.03, hn, 0, -0.04, -0.42)),
      zr(
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
      zr(
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
      e.add(De(0.014, 0.022, 0.014, hn, -0.032, -0.028, 0.32)));
  }
  if (n && n.scope > 0) {
    const d = n.scope === 5 ? Op[E.AWP] : 0.09;
    e.add(h4(n.scope, 0, d, -0.1, 0.04));
  } else
    (e.add(De(0.012, 0.064, 0.012, hn, 0, 0.068, -0.58)),
      e.add(De(0.016, 0.06, 0.016, hn, 0, 0.035, -0.58)),
      e.add(De(0.03, 0.03, 0.02, hn, 0, 0.075, -0.06)),
      e.add(De(0.014, 0.03, 0.02, hn, 0, 0.055, -0.06)));
  const t = new pe();
  ((t.name = "weapon-bolt"), t.position.set(0, 0.02, 0.1));
  const i = De(0.045, 0.012, 0.014, Aa, 0.038, -0.008, 0, "metal");
  ((i.rotation.z = -0.35), t.add(i));
  const s = new le(new mn(0.012, di(8), di(6)), Bi(hn, "metal"));
  (s.position.set(0.062, -0.018, 0),
    t.add(s),
    t.add(Qt(0.013, 0.07, Aa, 0, 0, 0.01)),
    e.add(t),
    ln(e, "eject-port", 0.03, 0.03, 0.02),
    ln(t, "bolt-knob", 0.062, -0.03, 0.005, 0.3));
  const o = De(0.045, 0.09, 0.22, Zu, 0, -0.02, 0.33);
  (e.add(o), e.add(De(0.04, 0.05, 0.1, Zu, 0, 0.05, 0.28)));
  const a = De(0.04, 0.1, 0.05, Zu, 0, -0.085, 0.175);
  ((a.rotation.x = -0.4),
    e.add(a),
    ln(e, "grip-r", 0, -0.095, 0.18, -0.4),
    ln(e, "grip-l", 0, -0.018, -0.3));
  const r = new pe();
  ((r.name = "weapon-magazine"), r.position.set(0, -0.06, -0.02));
  const l = De(0.04, 0.07, 0.09, hn, 0, -0.02, 0);
  (n != null && n.extMag && qk(l, 0.07),
    r.add(l),
    ln(r, "mag-grip", 0, -0.075, 0),
    e.add(r));
  const c = new $t();
  (c.position.set(0, 0.01, -0.73),
    e.add(c),
    n != null && n.suppressor && e.add(l4(0.026, c.position, 0.19)));
  let h = null;
  return (
    n != null && n.laser && ((h = c4(0, -0.03, -0.35)), e.add(h)),
    n != null && n.light && e.add(c1(0.04, -0.022, -0.32)),
    qn(e, c, r, null, null, h)
  );
}
function xV() {
  const n = new pe();
  (n.add(De(0.075, 0.085, 0.22, 3423032, 0, -0.015, 0.12, "metal")),
    n.add(De(0.07, 0.09, 0.18, 6845010, 0, -0.02, 0.29)),
    n.add(De(0.08, 0.13, 0.035, 2106915, 0, -0.025, 0.39)));
  const e = De(0.052, 0.15, 0.07, 2633258, 0, -0.11, 0.145);
  ((e.rotation.x = -0.3), n.add(e));
  for (const o of [-0.029, 0.029])
    n.add(De(0.009, 0.065, 0.095, 1777950, o, -0.09, 0.035, "metal"));
  (n.add(De(0.06, 0.009, 0.095, 1777950, 0, -0.123, 0.035, "metal")),
    n.add(De(0.012, 0.044, 0.014, 8489600, 0, -0.076, 0.05, "metal")),
    n.add(De(0.014, 0.018, 0.038, 13020784, 0.043, 0.014, 0.13, "metal")));
  const t = new pe();
  ((t.name = "launcher-breech"),
    (t.position.z = 0.035),
    n.add(t),
    t.add(Qt(0.064, 0.39, 4344640, 0, 0, -0.23)),
    t.add(Qt(0.065, 0.016, 10265495, 0, 0, -0.432)),
    t.add(Qt(0.047, 0.004, 593163, 0, 0, -0.443)));
  for (let o = 0; o < 9; o++)
    t.add(Qt(0.069, 0.012, 2436390, 0, 0, -0.13 - o * 0.025));
  for (const o of [-0.025, 0.025])
    n.add(De(0.009, 0.11, 0.015, 6647899, o, 0.085, -0.18, "metal"));
  for (let o = 0; o < 4; o++)
    n.add(
      De(0.05, 0.005, 0.012, 13225405, 0, 0.06 + o * 0.025, -0.18, "metal"),
    );
  n.add(De(0.046, 0.058, 0.03, 2765355, 0, 0.056, 0.17));
  for (const o of [-0.021, 0.021])
    n.add(De(0.008, 0.032, 0.03, 2765355, o, 0.1, 0.17, "metal"));
  const i = new pe();
  ((i.name = "weapon-magazine"),
    i.add(Qt(0.039, 0.072, 12228944, 0, 0, -0.005)),
    i.add(Il(0.039, 0.055, 5661500, 0, 0, -0.066)),
    i.add(Qt(0.042, 0.01, 13741668, 0, 0, 0.03)),
    ln(i, "mag-grip", 0, -0.055, 0),
    n.add(i));
  const s = new $t();
  return (
    s.position.set(0, 0, -0.42),
    t.add(s),
    ln(n, "grip-r", 0, -0.115, 0.15, -0.3),
    ln(t, "grip-l", 0, -0.07, -0.24),
    qn(n, s, i, null)
  );
}
function TV() {
  const n = new pe();
  (n.add(Qt(0.045, 0.08, 12162374)),
    n.add(Il(0.045, 0.06, 5595704, 0, 0, -0.065)),
    n.add(Qt(0.048, 0.008, 13678188, 0, 0, 0.04)));
  const e = new $t();
  return (n.add(e), qn(n, e, null, null));
}
function AV() {
  const n = new pe();
  (n.add(Qt(0.042, 0.6, $T, 0, 0, 0.05, "matte")),
    n.add(Qt(0.055, 0.12, $T, 0, 0, 0.38, "matte")),
    n.add(Il(0.05, 0.12, hn, 0, 0, 0.47)));
  const e = new pe();
  ((e.name = "weapon-magazine"),
    e.add(Qt(0.03, 0.14, 7041877, 0, 0, -0.3, "matte")),
    e.add(Il(0.068, 0.22, 4871488, 0, 0, -0.48, "matte")),
    n.add(e),
    n.add(Qt(0.047, 0.16, 7301714, 0, 0, -0.12, "matte")));
  const t = De(0.035, 0.1, 0.045, n0, 0, -0.085, 0.13);
  t.rotation.x = -0.3;
  const i = De(0.035, 0.09, 0.045, n0, 0, -0.085, -0.05);
  if (
    (n.add(t, i),
    n.add(De(0.05, 0.012, 0.07, hn, 0, -0.048, 0.11)),
    n.add(De(0.008, 0.05, 0.02, hn, 0, 0.075, -0.1)),
    yt(2))
  ) {
    (n.add(De(0.014, 0.012, 0.03, hn, -0.05, 0.03, -0.1, "metal")),
      n.add(De(0.004, 0.05, 0.004, hn, -0.062, 0.06, -0.1, "metal")),
      n.add(De(0.004, 0.004, 0.018, hn, -0.062, 0.085, -0.1, "metal")),
      n.add(De(0.028, 0.03, 0.05, hn, 0.028, 0.02, 0.06)));
    for (let a = 0; a < 4; a++) {
      const r = De(0.004, 0.05, 0.06, 3884335, 0, 0, 0.3);
      ((r.rotation.z = (a / 4) * Math.PI * 2),
        r.position.set(
          Math.sin((a / 4) * Math.PI * 2) * 0.045,
          Math.cos((a / 4) * Math.PI * 2) * 0.045,
          0.3,
        ),
        n.add(r));
    }
    for (const a of [-0.17, -0.07])
      n.add(Qt(0.05, 0.012, hn, 0, 0, a, "metal"));
  }
  const s = new $t();
  (s.position.set(0, 0, -0.6), n.add(s));
  const o = e;
  return (
    ln(e, "mag-grip", 0, -0.075, -0.4),
    ln(n, "grip-r", 0, -0.09, 0.135, -0.3),
    ln(n, "grip-l", 0, -0.085, -0.05, 0, 0, -Math.PI / 2),
    n.traverse((a) => {
      if (!("isMesh" in a) || !a.isMesh) return;
      const r = a.material;
      for (const l of Array.isArray(r) ? r : [r])
        ((l.transparent = !1),
          (l.opacity = 1),
          (l.depthWrite = !0),
          (l.needsUpdate = !0));
    }),
    qn(n, s, o, null)
  );
}
function _V() {
  const n = new pe(),
    e = new le(new mn(0.055, di(10), di(8)), Bi(3820851, "gloss"));
  ((e.scale.y = 1.25),
    n.add(e),
    n.add(De(0.025, 0.03, 0.025, Aa, 0, 0.08, 0, "metal")),
    ln(n, "grip-r", 0.012, -0.03, 0.03, 0.2));
  const t = De(0.015, 0.09, 0.02, Aa, 0.02, 0.045, 0.015, "metal");
  if (((t.rotation.z = -0.25), n.add(t), yt(1))) {
    const s = new le(new xs(0.016, 0.0035, 6, di(12)), Bi(13225170, "metal"));
    ((s.rotation.y = Math.PI / 2),
      s.position.set(-0.028, 0.072, 0),
      n.add(s),
      n.add(De(0.03, 0.005, 0.005, 13225170, -0.012, 0.072, 0, "metal")));
  }
  if (yt(2))
    for (const s of [-0.03, 0, 0.03]) {
      const o = new le(new xs(0.052, 0.0035, 5, di(12)), Bi(2898470));
      ((o.rotation.x = Math.PI / 2), (o.position.y = s), n.add(o));
    }
  const i = new $t();
  return (n.add(i), qn(n, i, null, null));
}
function XT() {
  const n = new pe(),
    e = De(0.035, 0.5, 0.035, n0, 0, -0.1, 0);
  if (
    ((e.rotation.x = 0.3),
    n.add(e),
    n.add(De(0.03, 0.1, 0.16, 10134187, 0, 0.14, -0.06, "metal")),
    n.add(De(0.032, 0.11, 0.05, 8225674, 0, 0.14, -0.13, "metal")),
    yt(1) &&
      (n.add(De(0.034, 0.115, 0.014, 14673644, 0, 0.14, -0.155, "metal")),
      n.add(De(0.036, 0.03, 0.05, 6976124, 0, 0.14, 0.005, "metal"))),
    yt(2))
  ) {
    n.add(De(0.038, 0.014, 0.038, 4870232, 0, 0.185, 0, "metal"));
    for (const i of [-0.24, -0.28, -0.32])
      n.add(De(0.038, 0.008, 0.038, 4863264, 0, i, 0));
  }
  ln(n, "hand-r", 0, -0.23, -0.043, 0.3);
  const t = new $t();
  return (n.add(t), qn(n, t, null, null));
}
function Vh(n, e, t, i, s) {
  const o = new ql();
  (n.forEach(([c, h], d) => (d ? o.lineTo(c, h) : o.moveTo(c, h))),
    o.closePath());
  const a = yt(1) ? s : 0,
    r = Math.max(4e-4, e - 2 * a),
    l = new Kl(o, {
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
    new le(l, Bi(t, i))
  );
}
const bm = [1.35, 1.6, 1.4];
