// index-Dp6GxvJu 90 — add
// Lines 56568-56835 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function tK() {
  const n = new pe(),
    e = [],
    t = [],
    i = yt(1),
    s = yt(2);
  (n.add(
    Ia(
      [
        [-2.62, 0.9],
        [-2.1, 0.44],
        [2.3, 0.44],
        [2.6, 0.72],
        [2.6, 0.95],
        [-2.3, 0.95],
      ],
      1.62,
      Th,
    ),
  ),
    n.add(
      Ia(
        [
          [-2.62, 0.9],
          [-2.3, 0.86],
          [2.56, 0.86],
          [2.56, 1.16],
          [2.4, 1.26],
          [-1.05, 1.26],
        ],
        2.52,
        eK,
        0,
        0.05,
      ),
    ));
  const o = [];
  for (const c of [-1.62, -0.6, 0.65, 1.67])
    for (const h of [-1, 1])
      o.push({ x: h * 1.06, y: 0.45, z: c, r: 0.45, steer: c < -1 });
  const a = Pg(o, "apc", 0.38);
  if ((e.push(a), n.add(a), i)) {
    const c = ce(1.9, 0.05, 0.5, Th, 0, 1.03, -2.1);
    ((c.rotation.x = -0.23), n.add(c));
    for (const h of [-0.45, 0.45])
      (n.add(Dn(0.2, 0.06, Th, h, 1.29, -0.95)),
        n.add(ce(0.3, 0.08, 0.06, Pl, h, 1.2, -1.2)));
    for (const h of [-1, 1]) {
      n.add(ce(0.05, 0.34, 0.6, Th, h * 1.27, 1.03, 0.05));
      for (const d of [-0.95, 0.7, 1.4])
        n.add(
          Jc(0.06, 0.06, Ln, h * 1.27, 1.06, d, 8),
          ce(0.04, 0.08, 0.16, Pl, h * 1.22, 1.2, d + 0.02),
        );
      n.add(ce(0.05, 0.06, 3.6, Th, h * 1.27, 0.9, 0.1));
    }
    for (let h = 0; h < 6; h++)
      n.add(ce(1.1, 0.03, 0.06, Ln, -0.3, 1.275, 1.25 + h * 0.15));
    for (const h of [-1, 1])
      n.add(
        ce(0.2, 0.14, 0.12, Lc, h * 0.8, 1.02, -2.44),
        ce(0.14, 0.09, 0.03, uu, h * 0.8, 1.02, -2.5),
      );
  }
  if (s) {
    n.add(ce(0.4, 0.34, 0.8, 2830630, 0.95, 1.3, 1.95));
    for (let c = 0; c < 3; c++)
      n.add(ce(0.3, 0.025, 0.6, Ln, 0.95, 1.48, 1.75 + c * 0.02));
    n.add(ce(0.8, 0.36, 0.4, Lc, -0.7, 1.43, 2.1));
    for (const c of [-1, 1])
      n.add(ce(0.08, 0.5, 0.08, Za, c * 0.9, 1.45, 2.45));
    (eh(n, -0.95, 1.26, -0.3, 1), n.add(ce(2.1, 0.08, 0.26, Th, 0, 0.52, 2.5)));
  }
  const r = new pe();
  if (
    (r.position.set(0, 1.8, 0.15),
    r.add(Dn(0.62, 0.08, Th, 0, -0.5, 0, 0.62, 16)),
    r.add(
      Rl(
        [
          [-0.36, -0.62],
          [0.36, -0.62],
          [0.62, -0.3],
          [0.62, 0.34],
          [0.4, 0.6],
          [-0.4, 0.6],
          [-0.62, 0.34],
          [-0.62, -0.3],
        ],
        0.44,
        3161134,
        -0.46,
        0.05,
      ),
    ),
    r.add(
      Rl(
        [
          [-0.26, -0.46],
          [0.26, -0.46],
          [0.46, -0.2],
          [0.46, 0.28],
          [0.3, 0.46],
          [-0.3, 0.46],
          [-0.46, 0.28],
          [-0.46, -0.2],
        ],
        0.1,
        2568479,
        -0.03,
        0.03,
      ),
    ),
    i &&
      (r.add(
        ce(0.24, 0.2, 0.26, 2765607, -0.42, 0.06, -0.3),
        ce(0.18, 0.1, 0.03, Pl, -0.42, 0.08, -0.44),
      ),
      r.add(Dn(0.16, 0.08, 2568479, 0.22, 0.08, 0.2))),
    s)
  ) {
    for (const c of [-1, 1])
      for (let h = 0; h < 3; h++) {
        const d = Ci(0.045, 0.18, Ln, c * 0.6, -0.12 + h * 0.08, 0.28);
        ((d.rotation.x = Math.PI / 2 - 0.45), r.add(d));
      }
    eh(r, 0.38, 0.06, 0.42, 0.8);
  }
  const l = new pe();
  if (
    (l.position.set(0, -0.12, -0.52),
    l.add(ce(0.34, 0.26, 0.3, 2765607, 0, 0, -0.06)),
    l.add(Ci(0.05, 1.5, 1909792, 0, 0, -0.9, 0.042)),
    i)
  ) {
    (l.add(Ci(0.075, 0.3, 2304548, 0, 0, -0.32)),
      l.add(Ci(0.062, 0.16, 1514777, 0, 0, -1.66, 0.062)));
    for (const c of [-1.62, -1.7]) l.add(ce(0.14, 0.02, 0.04, Ln, 0, 0, c));
  }
  return (
    s && l.add(Ci(0.03, 0.7, 1909792, 0.2, -0.02, -0.5)),
    r.add(l),
    r.add(M4(1, 0.22, 0.12, 0.2, !1, 0.12)),
    n.add(r),
    { group: n, turret: r, barrel: l, props: [], fpvHide: t, motionParts: e }
  );
}
function iK() {
  const n = new pe(),
    e = [],
    t = [],
    i = yt(1),
    s = yt(2);
  if (
    (IL(n, s6, e),
    LL(n, s6, t),
    n.add(ce(2.3, 0.14, 3.5, Jq, 0, 1.25, 0.85)),
    i)
  ) {
    n.add(ce(2, 0.72, 0.16, Ol, 0, 1.68, -0.95));
    for (const r of [-1, 1])
      n.add(
        ce(0.22, 0.5, 0.22, 2830630, r * 1.12, 0.75, 2.35),
        ce(0.44, 0.06, 0.44, 2040860, r * 1.12, 0.47, 2.35),
      );
  }
  const o = new pe();
  ((o.name = "launcher-mount"),
    o.position.set(0, 1.4, -0.2),
    o.add(Dn(0.55, 0.14, Ol, 0, 0.05, 0.9, 0.6, 16)));
  const a = new pe();
  if (
    ((a.name = "launcher-pod"),
    (a.userData.motion = "launcher-pod"),
    a.position.set(0, 0.2, 0),
    a.add(ce(1.72, 1.02, 2.9, 3818035, 0, 0.55, 1.5)),
    i)
  ) {
    for (const r of [-0.52, 0, 0.52])
      for (const l of [0.33, 0.78])
        a.add(Ci(0.16, 0.06, 1382418, r, l, 2.96, 0.16, 12));
    for (const r of [0.35, 1.2, 2.05, 2.8])
      a.add(ce(1.8, 0.08, 0.08, Ol, 0, 1.08, r));
    for (const r of [-1, 1]) a.add(ce(0.06, 0.9, 2.7, Ol, r * 0.88, 0.55, 1.5));
  }
  if (s) {
    for (const r of [-1, 1]) {
      const l = Ci(0.06, 1.2, 9080708, r * 0.6, -0.02, 0.8);
      ((l.rotation.x = Math.PI / 2 + 0.08), a.add(l));
    }
    a.add(ce(0.1, 0.1, 2.2, Za, 0.92, 0.95, 1.5));
  }
  return (
    o.add(a),
    n.add(o),
    e.push(a),
    { group: n, props: [], fpvHide: t, motionParts: e }
  );
}
function nK() {
  const n = new pe(),
    e = [],
    t = [],
    i = yt(1),
    s = yt(2),
    o = 4149560;
  if (
    (IL(n, o, e),
    LL(n, o, t),
    n.add(ce(2.3, 0.14, 3.5, 3557935, 0, 1.25, 0.85)),
    i)
  ) {
    (n.add(
      ce(0.8, 0.6, 0.9, 3095081, -0.62, 1.62, -0.5),
      ce(0.6, 0.08, 0.5, Ln, -0.62, 1.95, -0.5),
    ),
      n.add(Jc(0.24, 0.4, 2830630, 0.7, 1.58, -0.55, 14)));
    for (const c of [-1, 1])
      n.add(
        ce(0.22, 0.5, 0.22, 2830630, c * 1.12, 0.75, 2.35),
        ce(0.44, 0.06, 0.44, 2040860, c * 1.12, 0.47, 2.35),
      );
  }
  const a = new pe();
  (a.position.set(0, 1.35, 1),
    a.add(Dn(0.62, 0.16, 3095081, 0, 0.08, 0, 0.66, 16)));
  const r = new pe();
  ((r.name = "launcher-pod"),
    (r.userData.motion = "launcher-pod"),
    (r.userData.patriot = !0),
    r.position.set(0, 0.5, 1.1));
  for (const c of [-0.44, 0.44])
    for (const h of [0.28, 0.8])
      (r.add(ce(0.8, 0.5, 2.5, 4017205, c, h, -1.2)),
        i && r.add(ce(0.66, 0.38, 0.04, 12076588, c, h, -2.46)));
  if (i) {
    for (const c of [-2.1, -1.2, -0.3])
      r.add(ce(1.84, 1.1, 0.08, 3095081, 0, 0.54, c));
    r.add(ce(1.7, 0.1, 2.4, 2568479, 0, -0.02, -1.2));
  }
  if ((a.add(r), s)) {
    const c = Ci(0.08, 1.1, 9080708, 0, 0.4, 0.1);
    ((c.rotation.x = Math.PI / 2 - 0.6), a.add(c));
  }
  const l = new pe();
  if (
    ((l.name = "radar"),
    (l.userData.motion = "radar"),
    l.position.set(0.62, 2.05, -0.55),
    l.add(
      ce(0.05, 0.6, 0.05, Za, 0, -0.1, 0),
      ce(0.7, 0.5, 0.08, 9414848, 0, 0.3, 0),
    ),
    s)
  )
    for (let c = 0; c < 4; c++)
      l.add(ce(0.6, 0.02, 0.1, 7176854, 0, 0.12 + c * 0.12, -0.01));
  return (
    n.add(l),
    e.push(l),
    n.add(a),
    e.push(r),
    { group: n, turret: a, props: [], fpvHide: t, motionParts: e }
  );
}
const Ah = 4870976,
  sl = 3949622,
  o6 = 5660746;
