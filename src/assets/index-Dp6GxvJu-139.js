// index-Dp6GxvJu 139 — position
// Lines 85909-86251 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function TM(n = !1) {
  const e = new pe();
  return (
    (n
      ? [
          [-0.42, -0.42, -0.5, 0.32, 0.36],
          [-0.2, -0.43, -0.5, 0.3, 0.42],
          [0.02, -0.44, -0.5, 0.3, 0.34],
          [0.22, -0.43, -0.5, 0.3, 0.4],
          [0.42, -0.42, -0.5, 0.32, 0.36],
        ]
      : [
          [-0.24, 0, 0, 0.55, 0.8],
          [0.24, 0.05, 0, 0.55, 0.85],
          [0, 0.5, 0, 0.75, 0.9],
          [-0.3, 0.8, 0, 0.5, 0.75],
          [0.3, 0.9, 0, 0.5, 0.7],
          [0, 1.25, 0, 0.6, 0.75],
        ]
    ).forEach(([i, s, o, a, r], l) => {
      const c = new sn({
          uniforms: {
            uTime: { value: 0 },
            uSeed: { value: 3.7 + l * 11.3 + Math.random() * 40 },
            uSize: { value: new tt(a, r) },
            uFade: { value: 1 },
            uLift: { value: n ? 0 : 0.34 },
          },
          vertexShader: ZX,
          fragmentShader: QX,
          depthTest: !n,
          depthWrite: !1,
          transparent: n,
        }),
        h = new le(MI, c);
      (h.position.set(i, s, o),
        (h.frustumCulled = !1),
        (h.userData.baseY = s),
        (h.userData.phase = Math.random() * Math.PI * 2),
        (h.renderOrder = n ? Gi.firstPerson : Gi.tracer),
        e.add(h));
    }),
    (e.visible = !1),
    e
  );
}
function AM(n, e) {
  var t;
  for (const i of n.children) {
    const s = i,
      o = s.material;
    (t = o.uniforms) != null && t.uTime && (o.uniforms.uTime.value = e);
    const a = Number(s.userData.phase ?? 0);
    s.position.y =
      Number(s.userData.baseY ?? s.position.y) + Math.sin(e * 5 + a) * 0.02;
  }
}
const $m = new k(),
  qm = new k(),
  gd = new k(),
  vc = new k(),
  ff = new k(),
  Ch = new k();
function Zi(n, e, t, i) {
  const s = new le(new Ct(n, e, t), new gi({ color: i }));
  return ((s.castShadow = !0), s);
}
const f_ = [
    [vs.HEAD, -0.3, 1.46, -0.3, 0.3, 2.06, 0.3],
    [vs.TORSO, -0.36, 0.76, -0.29, 0.36, 1.52, 0.29],
    [vs.ARM, -0.58, 0.75, -0.29, -0.32, 1.5, 0.29],
    [vs.ARM, 0.32, 0.75, -0.29, 0.58, 1.5, 0.29],
    [vs.LEG, -0.36, -0.02, -0.3, 0.36, 0.84, 0.3],
  ],
  p_ = [
    [vs.HEAD, -0.3, 1.16, -0.3, 0.3, 1.77, 0.3],
    [vs.TORSO, -0.36, 0.52, -0.29, 0.36, 1.27, 0.29],
    [vs.ARM, -0.58, 0.49, -0.29, -0.32, 1.25, 0.29],
    [vs.ARM, 0.32, 0.49, -0.29, 0.58, 1.25, 0.29],
    [vs.LEG, -0.36, 0, -0.41, 0.36, 0.65, 0.41],
  ],
  m_ = [
    [vs.HEAD, -0.3, 1.24, -0.3, 0.3, 1.84, 0.3],
    [vs.TORSO, -0.36, 0.58, -0.29, 0.36, 1.3, 0.29],
    [vs.ARM, -0.58, 0.6, -0.29, -0.32, 1.32, 0.29],
    [vs.ARM, 0.32, 0.6, -0.29, 0.58, 1.32, 0.29],
    [vs.LEG, -0.4, 0.15, -0.82, 0.4, 0.72, 0.12],
  ],
  JX = [
    { body: 7041864, dark: 4870708, metal: 8029320, trim: 9081184 },
    { body: 5925690, dark: 3818792, metal: 10134696, trim: 11055216 },
    { body: 4147752, dark: 2765336, metal: 12634316, trim: 13218906 },
    { body: 3491152, dark: 1845296, metal: 13886957, trim: 7460325 },
  ];
function eZ(n) {
  return JX[Math.max(0, Math.min(3, n - 1))];
}
function tZ(n) {
  const e = n === E.THERMAL_GOGGLES,
    t = new pe();
  t.name = "helmet-optic";
  const i = 1712163,
    s = 3752776,
    o = e ? 16739104 : 6482044,
    a = Zi(0.34, 0.07, 0.08, i);
  a.position.set(0, 0.34, -0.34);
  const r = Zi(0.1, 0.18, 0.1, s);
  r.position.set(0, 0.49, -0.18);
  const l = Zi(0.07, 0.08, 0.22, i);
  (l.position.set(0, 0.43, -0.27), t.add(a, r, l));
  for (const h of [-0.115, 0.115]) {
    const d = new le(new xt(0.085, 0.075, 0.15, 10), new gi({ color: s }));
    ((d.rotation.x = Math.PI / 2),
      d.position.set(h, 0.3, -0.39),
      (d.castShadow = !0));
    const u = new le(
      new xt(0.058, 0.058, 0.012, 12),
      new qt({ color: o, transparent: !0, opacity: 0.9 }),
    );
    ((u.rotation.x = Math.PI / 2), u.position.set(h, 0.3, -0.472), t.add(d, u));
  }
  const c = Zi(0.18, 0.12, 0.1, i);
  return (c.position.set(0.2, 0.54, 0.17), t.add(c), t);
}
const SI = "armor-helmet",
  rp = "armor-leg-l",
  lp = "armor-leg-r";
function EI(n) {
  n.traverse((e) => {
    var s;
    const t = e;
    if (!t.isMesh) return;
    (s = t.geometry) == null || s.dispose();
    const i = t.material;
    Array.isArray(i) ? i.forEach((o) => o.dispose()) : i == null || i.dispose();
  });
}
function Ec(n, e) {
  const t = n.getObjectByName(e);
  t && (t.removeFromParent(), EI(t));
}
function iZ(n, e, t, i) {
  for (; n.children.length;) {
    const s = n.children[0];
    (n.remove(s), EI(s));
  }
  (Ec(e, SI),
    Ec(t, rp),
    Ec(i, lp),
    Ec(t, rp + "-lower"),
    Ec(i, lp + "-lower"),
    Ec(t, rp + "-boot"),
    Ec(i, lp + "-boot"));
}
const nZ = [13140030, 14673128, 15911244, 6284272];
function yd(n, e, t, i = [0.05, 0.05, 0.03]) {
  const s = new pe();
  ((s.name = "armor-tier-pips"), (s.userData.skinKeep = !0));
  for (let o = 0; o < n; o++) {
    const a = Zi(i[0], i[1], i[2], nZ[Math.min(3, n - 1)]);
    (a.position.set(...t(o)), s.add(a));
  }
  return s;
}
const hl = (n) => ((n.userData.skinKeep = !0), n);
function ih(n, e, t, i, s, o = 0, a = {}) {
  var d;
  iZ(n, e, t, i);
  const r = (d = n.parent) == null ? void 0 : d.getObjectByName("skin-body");
  n.scale.set(
    (r == null ? void 0 : r.scale.x) ?? 1,
    1,
    (r == null ? void 0 : r.scale.z) ?? 1,
  );
  const l = e.getObjectByName("skin-ears");
  l &&
    (l.visible = !s.some((u) => {
      var f;
      return ((f = ra(u)) == null ? void 0 : f.slot) === "helmet";
    }));
  const c = [],
    h = (u, f) => (
      (u.userData.skinItem = f),
      (u.userData.armorPart = !0),
      a[f] && c.push([u, f]),
      u
    );
  for (const u of s) {
    const f = ra(u);
    if (!f) continue;
    const p = eZ(f.level),
      m = ho(u);
    if (f.slot === "helmet") {
      const y = new pe();
      y.name = SI;
      const g = Zi(0.54, 0.2, 0.54, p.body);
      g.position.y = 0.5;
      const b = Zi(0.5, 0.22, 0.14, p.dark);
      b.position.set(0, 0.36, 0.2);
      const S = Zi(0.08, 0.2, 0.36, p.dark),
        M = Zi(0.08, 0.2, 0.36, p.dark);
      (S.position.set(-0.28, 0.36, 0.04), M.position.set(0.28, 0.36, 0.04));
      const x = hl(Zi(0.4, 0.05, 0.1, p.metal));
      if (
        (x.position.set(0, 0.42, -0.26), y.add(g, b, S, M, x), f.level >= 2)
      ) {
        const T = hl(Zi(0.46, 0.04, 0.12, p.trim));
        (T.position.set(0, 0.45, -0.28), y.add(T));
      }
      if (f.level >= 3) {
        const T = hl(Zi(0.14, 0.1, 0.12, p.trim));
        (T.position.set(0, 0.58, -0.12), y.add(T));
      }
      (y.add(
        yd(
          f.level,
          p.trim,
          (T) => [-0.325, 0.42 - T * 0.065, 0.12],
          [0.02, 0.045, 0.06],
        ),
      ),
        Ql(o) && y.add(hl(tZ(o))),
        e.add(h(y, m)));
    } else if (f.slot === "vest") {
      const y = new pe();
      y.name = "armor-vest";
      const g = Zi(0.62, 0.72, 0.36, p.body);
      g.position.y = 1.15;
      const b = hl(Zi(0.36, 0.4, 0.08, p.metal));
      (b.position.set(0, 1.18, -0.18), y.add(g, b));
      for (const S of [-0.14, 0, 0.14]) {
        const M = Zi(0.12, 0.12, 0.1, p.dark);
        (M.position.set(S, 0.95, -0.2), y.add(M));
      }
      if (f.level >= 2) {
        const S = hl(Zi(0.64, 0.06, 0.38, p.trim));
        ((S.position.y = 1.42), y.add(S));
      }
      if (f.level >= 3) {
        const S = Zi(0.1, 0.35, 0.2, p.dark),
          M = Zi(0.1, 0.35, 0.2, p.dark);
        (S.position.set(-0.34, 1.1, 0),
          M.position.set(0.34, 1.1, 0),
          y.add(S, M));
      }
      (y.add(
        yd(
          f.level,
          p.trim,
          (S) => [-0.2 + S * 0.075, 1.31, -0.225],
          [0.05, 0.045, 0.02],
        ),
      ),
        y.add(
          yd(
            f.level,
            p.trim,
            (S) => [-0.11 + S * 0.075, 1.38, 0.19],
            [0.05, 0.045, 0.02],
          ),
        ),
        n.add(h(y, m)));
    } else if (f.slot === "pants") {
      const y = new pe();
      y.name = "armor-belt";
      const g = Zi(0.58, 0.08, 0.32, p.dark);
      ((g.position.y = 0.78),
        y.add(
          g,
          yd(
            f.level,
            p.trim,
            (b) => [0.08 + b * 0.06, 0.78, -0.165],
            [0.04, 0.05, 0.02],
          ),
        ),
        n.add(h(y, m)));
      for (const [b, S, M] of [
        [t, rp, -1],
        [i, lp, 1],
      ]) {
        const x = new pe();
        x.name = S;
        const T = Zi(0.26, 0.28, 0.26, p.body);
        T.position.set(0, -0.25, 0);
        const A = hl(Zi(0.24, 0.12, 0.26, p.metal));
        (A.position.set(0, -0.48, 0.02),
          x.add(
            T,
            yd(
              f.level,
              p.trim,
              (R) => [M * 0.135, -0.16 - R * 0.055, 0],
              [0.02, 0.04, 0.08],
            ),
          ));
        const _ = b.getObjectByName("joint") ?? b,
          C = new pe();
        if (
          ((C.name = S + "-lower"),
          (C.position.y = _ === b ? 0 : 0.4),
          C.add(A),
          f.level >= 3)
        ) {
          const R = Zi(0.22, 0.18, 0.24, p.dark);
          (R.position.set(0, -0.66, 0), C.add(R));
        }
        (b.add(h(x, m)), _.add(h(C, m)));
      }
    } else if (f.slot === "boots")
      for (const [y, g] of [
        [t, rp + "-boot"],
        [i, lp + "-boot"],
      ]) {
        Ec(y, g);
        const b = new pe();
        b.name = g;
        const S = Zi(0.24, 0.22, 0.28, p.dark);
        S.position.set(0, -0.69, 0.02);
        const M = hl(Zi(0.26, 0.05, 0.32, 1710618));
        if ((M.position.set(0, -0.78, 0.03), b.add(S, M), f.level >= 2)) {
          const T = Zi(0.25, 0.08, 0.26, p.body);
          (T.position.set(0, -0.58, 0.02), b.add(T));
        }
        if (f.level >= 3) {
          const T = hl(Zi(0.22, 0.08, 0.1, p.metal));
          (T.position.set(0, -0.74, -0.1), b.add(T));
        }
        b.add(
          yd(
            f.level,
            p.trim,
            (T) => [-0.06 + T * 0.04, -0.63, -0.125],
            [0.03, 0.035, 0.02],
          ),
        );
        const x = y.getObjectByName("joint") ?? y;
        ((b.position.y = x === y ? 0 : 0.4), x.add(h(b, m)));
      }
  }
  for (const [u, f] of c)
    Ba(u, { uid: `armor-${f}`, skin: a[f], owner: "", kills: 0 }, "", !1);
}
