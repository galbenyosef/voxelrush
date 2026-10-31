// index-Dp6GxvJu 68 — add
// Lines 49222-49533 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function od(n) {
  const e = kw[n] ?? kw[0],
    t = yt(1),
    i = yt(2),
    s = new pe(),
    o = 0.068;
  s.add(
    Wo(
      [
        [-0.07, -0.036],
        [-0.07, 0.034],
        [-0.045, 0.05],
        [0.085, 0.054],
        [0.115, 0.034],
        [0.115, -0.04],
        [0.09, -0.05],
        [-0.04, -0.046],
      ],
      o,
      e.body,
      "gloss",
    ),
  );
  for (const h of [-1, 1])
    s.add(
      Wo(
        [
          [-0.05, -0.02],
          [-0.05, 0.018],
          [0.06, 0.026],
          [0.06, -0.03],
        ],
        0.003,
        e.over,
        "matte",
        h * (o / 2 + 0.001),
      ),
    );
  if (t) {
    for (const h of [-1, 1])
      zr(
        s,
        4,
        0.011,
        0.004,
        0.034,
        0.005,
        855825,
        h * (o / 2 + 0.001),
        0.005,
        0.07,
        "matte",
      );
    s.add(De(0.02, 0.006, 0.1, e.over, 0, 0.056, 0.02, "gloss"));
  }
  if (e.kind === "laser" && t)
    for (let h = 0; h < 4; h++)
      for (const d of [-1, 1]) {
        const u = new le(new Ct(0.003, 0.03, 0.007), yl(e.glow));
        (u.position.set(d * (o / 2 + 0.002), 0.004, -0.035 + h * 0.022),
          s.add(u));
      }
  if (n === 5 && t)
    for (const [h, d] of [
      [13119791, 0.02],
      [2832999, 0.008],
    ])
      s.add(De(o + 0.004, 0.007, 0.05, h, 0, d, 0.085, "gloss"));
  if ((s.add(Qt(0.04, 0.026, e.dark, 0, 0, -0.083, "gloss")), t))
    for (let h = 0; h < 10; h++) {
      const d = (h / 10) * Math.PI * 2,
        u = De(
          0.003,
          0.006,
          0.027,
          e.over,
          Math.cos(d) * 0.04,
          Math.sin(d) * 0.04,
          -0.083,
          "matte",
        );
      ((u.rotation.z = d + Math.PI / 2), s.add(u));
    }
  const a = new pe();
  if (
    ((a.userData.skinKeep = !0),
    s.add(a),
    a.add(
      Iy(
        0.026,
        0.033,
        0.05,
        n === 1 ? 14147300 : 2369323,
        0,
        0,
        -0.121,
        n === 1 ? "metal" : "gloss",
      ),
    ),
    t)
  )
    for (let h = 0; h < 12; h++) {
      const d = (h / 12) * Math.PI * 2,
        u = De(
          0.004,
          0.004,
          0.04,
          1118997,
          Math.cos(d) * 0.031,
          Math.sin(d) * 0.031,
          -0.118,
          "matte",
        );
      ((u.rotation.z = d), a.add(u));
    }
  (a.add(Qt(0.021, 0.012, 13226198, 0, 0, -0.151, "metal")),
    s.add(
      Wo(
        [
          [0, -0.04],
          [0.068, -0.04],
          [0.088, -0.165],
          [0.025, -0.165],
        ],
        0.044,
        e.body,
        "gloss",
      ),
    ),
    s.add(
      Wo(
        [
          [0.052, -0.05],
          [0.07, -0.05],
          [0.087, -0.158],
          [0.067, -0.158],
        ],
        0.047,
        e.over,
        "matte",
      ),
    ));
  const r = De(0.016, 0.034, 0.018, e.dark, 0, -0.064, -0.004, "gloss");
  if (
    ((r.rotation.x = -0.15),
    s.add(r),
    s.add(De(o - 0.01, 0.01, 0.012, e.over, 0, -0.038, 0.012, "gloss")),
    ln(s, "hand-r", 0, -0.108, 0.05, -0.17),
    s.add(De(0.074, 0.05, 0.13, e.dark, 0, -0.19, 0.05, "gloss")),
    s.add(De(0.078, 0.012, 0.134, e.over, 0, -0.17, 0.05, "matte")),
    t)
  ) {
    s.add(De(0.03, 0.008, 0.014, e.over, 0, -0.162, 0.108, "gloss"));
    for (let d = 0; d < 3; d++) {
      const u = new le(
        new Ct(0.007, 0.005, 0.004),
        yl(d < 2 ? 7208826 : 2767404),
      );
      (u.position.set(-0.012 + d * 0.012, -0.19, 0.1165), s.add(u));
    }
    const h = new le(new Ct(0.014, 0.006, 0.006), yl(16774354));
    (h.position.set(0, -0.162, -0.017), s.add(h));
  }
  if (i && n === 3)
    for (let h = 0; h < 5; h++)
      s.add(
        De(
          0.07,
          0.003,
          0.003,
          2829361,
          0,
          -0.03 + h * 0.016,
          0.06 - h * 0.006,
          "metal",
        ),
      );
  const l = new pe();
  if (
    ((l.name = "tool-tier-bit"),
    (l.userData.skinKeep = !0),
    l.position.set(0, 0, -0.155),
    l.add(Qt(0.0075, 0.03, 12041924, 0, 0, -0.012)),
    e.kind === "twist")
  )
    (l.add(
      ZT(0.2, 0.019, 0.006, 3.2, e.bit),
      Il(0.0095, 0.03, e.bit, 0, 0, -0.237),
    ),
      (l.children[1].position.z = -0.127));
  else if (e.kind === "auger") {
    const h = ZT(0.22, 0.034, 0.005, 2.6, e.bit, "gloss");
    if (
      ((h.position.z = -0.137),
      l.add(h),
      l.add(
        Qt(0.008, 0.22, e.bit, 0, 0, -0.137, "metal"),
        Il(0.011, 0.035, e.bit, 0, 0, -0.263),
      ),
      e.glow)
    ) {
      const d = new le(new xt(0.0045, 0.0045, 0.2, 6), yl(e.glow));
      ((d.rotation.x = Math.PI / 2), (d.position.z = -0.137), l.add(d));
    }
  } else if (e.kind === "diamond") {
    l.add(Qt(0.016, 0.2, 12174283, 0, 0, -0.127, "metal"));
    for (let h = 0; h < 8; h++) {
      const d = (h / 8) * Math.PI * 2,
        u = new le(
          new cy(0.008),
          new Us({
            color: e.bit,
            specular: 16777215,
            shininess: 120,
            emissive: 735808,
          }),
        );
      (u.position.set(Math.cos(d) * 0.016, Math.sin(d) * 0.016, -0.226),
        l.add(u));
    }
    if ((l.add(Qt(0.012, 0.004, 658446, 0, 0, -0.2275, "matte")), t))
      for (let h = 0; h < 3; h++) {
        const d = De(
          0.004,
          0.034,
          0.004,
          922646,
          0,
          0,
          -0.08 - h * 0.05,
          "matte",
        );
        ((d.rotation.z = h), l.add(d));
      }
  } else {
    const h = new le(
      new xt(0.014, 0.018, 0.12, 6),
      new Us({
        color: 9054874,
        specular: 16777215,
        shininess: 140,
        emissive: 5900902,
        transparent: !0,
        opacity: 0.85,
      }),
    );
    ((h.rotation.x = Math.PI / 2), (h.position.z = -0.085), l.add(h));
    const d = new le(new xt(0.005, 0.005, 0.2, 6), yl(16766715));
    ((d.rotation.x = Math.PI / 2),
      (d.position.z = -0.13),
      l.add(d),
      l.add(
        Il(0.014, 0.05, e.glow, 0, 0, -0.17),
        Il(0.006, 0.07, 16777215, 0, 0, -0.205),
      ),
      (l.children[l.children.length - 2].material = yl(e.glow)),
      (l.children[l.children.length - 1].material = yl(16771325)));
    for (const u of [-0.04, -0.1, -0.15]) {
      const f = new le(new xs(0.022, 0.003, 6, di(16)), yl(e.glow));
      ((f.position.z = u), l.add(f));
    }
  }
  s.add(l);
  for (let h = 0; h <= n; h++) {
    const d = De(
      0.004,
      0.009,
      0.009,
      e.bit,
      -o / 2 - 0.004,
      0.035,
      0.07 - h * 0.014,
      "metal",
    );
    ((d.name = "tool-tier-mark"), (d.userData.skinKeep = !0), s.add(d));
  }
  const c = new $t();
  return (c.position.set(0, 0, -0.43), s.add(c), qn(s, c, null, null, l));
}
function zV() {
  const n = new pe(),
    e = new le(new xt(0.07, 0.085, 0.38, di(14)), Bi(15330799, "metal"));
  ((e.rotation.x = Math.PI / 2), n.add(e));
  const t = new le(new ma(0.07, 0.16, di(14)), Bi(15330799, "metal"));
  ((t.rotation.x = -Math.PI / 2), (t.position.z = -0.27), n.add(t));
  for (const s of [-0.09, 0.09])
    n.add(De(0.025, 0.13, 0.14, 13122619, s, 0, 0.18, "gloss"));
  n.add(Qt(0.04, 0.05, 2370097, 0, 0, 0.22));
  const i = new $t();
  return ((i.position.z = -0.38), n.add(i), qn(n, i, null, null));
}
function UV(n, e = 0.3) {
  const t = new pe(),
    i = n === BLOCK.RTORCH ? 13648682 : 16763989,
    s = new le(
      new Ct(e * 0.14, e * 0.95, e * 0.14),
      new gi({ color: 9067051 }),
    );
  t.add(s);
  const o = new le(
    new ma(e * 0.17, e * 0.36, 6),
    new qt({ color: i, transparent: !0, opacity: 0.94 }),
  );
  return (
    (o.position.y = e * 0.6),
    t.add(o),
    t.traverse((a) => {
      a.frustumCulled = !1;
    }),
    t
  );
}
