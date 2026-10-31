// index-BeUlFSPp 164 — position
// Lines 93879-94212 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function dE(s = !1) {
  const e = new re();
  return (
    (s
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
    ).forEach(([i, n, o, a, r], l) => {
      const c = new Gi({
          uniforms: {
            uTime: { value: 0 },
            uSeed: { value: 3.7 + l * 11.3 + Math.random() * 40 },
            uSize: { value: new ct(a, r) },
            uFade: { value: 1 },
            uLift: { value: s ? 0 : 0.34 },
          },
          vertexShader: Cse,
          fragmentShader: Lse,
          depthTest: !s,
          depthWrite: !1,
          transparent: s,
        }),
        h = new Q(zN, c);
      (h.position.set(i, n, o),
        (h.frustumCulled = !1),
        (h.userData.baseY = n),
        (h.userData.phase = Math.random() * Math.PI * 2),
        (h.renderOrder = s ? zi.firstPerson : zi.tracer),
        e.add(h));
    }),
    (e.visible = !1),
    e
  );
}
function uE(s, e) {
  for (const t of s.children) {
    const i = t,
      n = i.material;
    n.uniforms?.uTime && (n.uniforms.uTime.value = e);
    const o = Number(i.userData.phase ?? 0);
    i.position.y =
      Number(i.userData.baseY ?? i.position.y) + Math.sin(e * 5 + o) * 0.02;
  }
}
const Ise = 700,
  Pg = new k(),
  Gp = new k(),
  Og = new k(),
  _u = new k(),
  Wp = new k(),
  bh = new k();
function cs(s, e, t, i) {
  const n = new Q(new kt(s, e, t), new Pi({ color: i }));
  return ((n.castShadow = !0), n);
}
const Vk = [
    [tn.HEAD, -0.3, 1.46, -0.3, 0.3, 2.06, 0.3],
    [tn.TORSO, -0.36, 0.76, -0.29, 0.36, 1.52, 0.29],
    [tn.ARM, -0.58, 0.75, -0.29, -0.32, 1.5, 0.29],
    [tn.ARM, 0.32, 0.75, -0.29, 0.58, 1.5, 0.29],
    [tn.LEG, -0.36, -0.02, -0.3, 0.36, 0.84, 0.3],
  ],
  qk = [
    [tn.HEAD, -0.3, 1.16, -0.3, 0.3, 1.77, 0.3],
    [tn.TORSO, -0.36, 0.52, -0.29, 0.36, 1.27, 0.29],
    [tn.ARM, -0.58, 0.49, -0.29, -0.32, 1.25, 0.29],
    [tn.ARM, 0.32, 0.49, -0.29, 0.58, 1.25, 0.29],
    [tn.LEG, -0.36, 0, -0.41, 0.36, 0.65, 0.41],
  ],
  Kk = [
    [tn.HEAD, -0.3, 1.24, -0.3, 0.3, 1.84, 0.3],
    [tn.TORSO, -0.36, 0.58, -0.29, 0.36, 1.3, 0.29],
    [tn.ARM, -0.58, 0.6, -0.29, -0.32, 1.32, 0.29],
    [tn.ARM, 0.32, 0.6, -0.29, 0.58, 1.32, 0.29],
    [tn.LEG, -0.4, 0.15, -0.82, 0.4, 0.72, 0.12],
  ],
  Pse = [
    { body: 7041864, dark: 4870708, metal: 8029320, trim: 9081184 },
    { body: 5925690, dark: 3818792, metal: 10134696, trim: 11055216 },
    { body: 4147752, dark: 2765336, metal: 12634316, trim: 13218906 },
    { body: 3491152, dark: 1845296, metal: 13886957, trim: 7460325 },
  ];
function Ose(s) {
  return Pse[Math.max(0, Math.min(3, s - 1))];
}
function Nse(s) {
  const e = s === w.THERMAL_GOGGLES,
    t = new re();
  t.name = "helmet-optic";
  const i = 1712163,
    n = 3752776,
    o = e ? 16739104 : 6482044,
    a = cs(0.34, 0.07, 0.08, i);
  a.position.set(0, 0.34, -0.34);
  const r = cs(0.1, 0.18, 0.1, n);
  r.position.set(0, 0.49, -0.18);
  const l = cs(0.07, 0.08, 0.22, i);
  (l.position.set(0, 0.43, -0.27), t.add(a, r, l));
  for (const h of [-0.115, 0.115]) {
    const d = new Q(new Tt(0.085, 0.075, 0.15, 10), new Pi({ color: n }));
    ((d.rotation.x = Math.PI / 2),
      d.position.set(h, 0.3, -0.39),
      (d.castShadow = !0));
    const u = new Q(
      new Tt(0.058, 0.058, 0.012, 12),
      new Zt({ color: o, transparent: !0, opacity: 0.9 }),
    );
    ((u.rotation.x = Math.PI / 2), u.position.set(h, 0.3, -0.472), t.add(d, u));
  }
  const c = cs(0.18, 0.12, 0.1, i);
  return (c.position.set(0.2, 0.54, 0.17), t.add(c), t);
}
const FN = "armor-helmet",
  q1 = "armor-leg-l",
  K1 = "armor-leg-r";
function UN(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh) return;
    t.geometry?.dispose();
    const i = t.material;
    Array.isArray(i) ? i.forEach((n) => n.dispose()) : i?.dispose();
  });
}
function p0(s, e) {
  const t = s.getObjectByName(e);
  t && (t.removeFromParent(), UN(t));
}
function Dse(s, e, t, i) {
  for (; s.children.length;) {
    const n = s.children[0];
    (s.remove(n), UN(n));
  }
  (p0(e, FN),
    p0(t, q1),
    p0(i, K1),
    p0(t, q1 + "-lower"),
    p0(i, K1 + "-lower"),
    p0(t, q1 + "-boot"),
    p0(i, K1 + "-boot"));
}
const Hse = [13140030, 14673128, 15911244, 6284272];
function Ru(s, e, t, i = [0.05, 0.05, 0.03]) {
  const n = new re();
  ((n.name = "armor-tier-pips"), (n.userData.skinKeep = !0));
  for (let o = 0; o < s; o++) {
    const a = cs(i[0], i[1], i[2], Hse[Math.min(3, s - 1)]);
    (a.position.set(...t(o)), n.add(a));
  }
  return n;
}
const ec = (s) => ((s.userData.skinKeep = !0), s);
function X0(s, e, t, i, n, o = 0, a = {}) {
  Dse(s, e, t, i);
  const r = s.parent?.getObjectByName("skin-body");
  s.scale.set(r?.scale.x ?? 1, 1, r?.scale.z ?? 1);
  const l = e.getObjectByName("skin-ears");
  l && (l.visible = !n.some((d) => Ia(d)?.slot === "helmet"));
  const c = [],
    h = (d, u) => (
      (d.userData.skinItem = u),
      (d.userData.armorPart = !0),
      a[u] && c.push([d, u]),
      d
    );
  for (const d of n) {
    const u = Ia(d);
    if (!u) continue;
    const f = Ose(u.level),
      p = Lo(d);
    if (u.slot === "helmet") {
      const m = new re();
      m.name = FN;
      const g = cs(0.54, 0.2, 0.54, f.body);
      g.position.y = 0.5;
      const y = cs(0.5, 0.22, 0.14, f.dark);
      y.position.set(0, 0.36, 0.2);
      const b = cs(0.08, 0.2, 0.36, f.dark),
        S = cs(0.08, 0.2, 0.36, f.dark);
      (b.position.set(-0.28, 0.36, 0.04), S.position.set(0.28, 0.36, 0.04));
      const M = ec(cs(0.4, 0.05, 0.1, f.metal));
      if (
        (M.position.set(0, 0.42, -0.26), m.add(g, y, b, S, M), u.level >= 2)
      ) {
        const E = ec(cs(0.46, 0.04, 0.12, f.trim));
        (E.position.set(0, 0.45, -0.28), m.add(E));
      }
      if (u.level >= 3) {
        const E = ec(cs(0.14, 0.1, 0.12, f.trim));
        (E.position.set(0, 0.58, -0.12), m.add(E));
      }
      (m.add(
        Ru(
          u.level,
          f.trim,
          (E) => [-0.325, 0.42 - E * 0.065, 0.12],
          [0.02, 0.045, 0.06],
        ),
      ),
        Wc(o) && m.add(ec(Nse(o))),
        e.add(h(m, p)));
    } else if (u.slot === "vest") {
      const m = new re();
      m.name = "armor-vest";
      const g = cs(0.62, 0.72, 0.36, f.body);
      g.position.y = 1.15;
      const y = ec(cs(0.36, 0.4, 0.08, f.metal));
      (y.position.set(0, 1.18, -0.18), m.add(g, y));
      for (const b of [-0.14, 0, 0.14]) {
        const S = cs(0.12, 0.12, 0.1, f.dark);
        (S.position.set(b, 0.95, -0.2), m.add(S));
      }
      if (u.level >= 2) {
        const b = ec(cs(0.64, 0.06, 0.38, f.trim));
        ((b.position.y = 1.42), m.add(b));
      }
      if (u.level >= 3) {
        const b = cs(0.1, 0.35, 0.2, f.dark),
          S = cs(0.1, 0.35, 0.2, f.dark);
        (b.position.set(-0.34, 1.1, 0),
          S.position.set(0.34, 1.1, 0),
          m.add(b, S));
      }
      (m.add(
        Ru(
          u.level,
          f.trim,
          (b) => [-0.2 + b * 0.075, 1.31, -0.225],
          [0.05, 0.045, 0.02],
        ),
      ),
        m.add(
          Ru(
            u.level,
            f.trim,
            (b) => [-0.11 + b * 0.075, 1.38, 0.19],
            [0.05, 0.045, 0.02],
          ),
        ),
        s.add(h(m, p)));
    } else if (u.slot === "pants") {
      const m = new re();
      m.name = "armor-belt";
      const g = cs(0.58, 0.08, 0.32, f.dark);
      ((g.position.y = 0.78),
        m.add(
          g,
          Ru(
            u.level,
            f.trim,
            (y) => [0.08 + y * 0.06, 0.78, -0.165],
            [0.04, 0.05, 0.02],
          ),
        ),
        s.add(h(m, p)));
      for (const [y, b, S] of [
        [t, q1, -1],
        [i, K1, 1],
      ]) {
        const M = new re();
        M.name = b;
        const E = cs(0.26, 0.28, 0.26, f.body);
        E.position.set(0, -0.25, 0);
        const A = ec(cs(0.24, 0.12, 0.26, f.metal));
        (A.position.set(0, -0.48, 0.02),
          M.add(
            E,
            Ru(
              u.level,
              f.trim,
              (R) => [S * 0.135, -0.16 - R * 0.055, 0],
              [0.02, 0.04, 0.08],
            ),
          ));
        const T = y.getObjectByName("joint") ?? y,
          x = new re();
        if (
          ((x.name = b + "-lower"),
          (x.position.y = T === y ? 0 : 0.4),
          x.add(A),
          u.level >= 3)
        ) {
          const R = cs(0.22, 0.18, 0.24, f.dark);
          (R.position.set(0, -0.66, 0), x.add(R));
        }
        (y.add(h(M, p)), T.add(h(x, p)));
      }
    } else if (u.slot === "boots")
      for (const [m, g] of [
        [t, q1 + "-boot"],
        [i, K1 + "-boot"],
      ]) {
        p0(m, g);
        const y = new re();
        y.name = g;
        const b = cs(0.24, 0.22, 0.28, f.dark);
        b.position.set(0, -0.69, 0.02);
        const S = ec(cs(0.26, 0.05, 0.32, 1710618));
        if ((S.position.set(0, -0.78, 0.03), y.add(b, S), u.level >= 2)) {
          const E = cs(0.25, 0.08, 0.26, f.body);
          (E.position.set(0, -0.58, 0.02), y.add(E));
        }
        if (u.level >= 3) {
          const E = ec(cs(0.22, 0.08, 0.1, f.metal));
          (E.position.set(0, -0.74, -0.1), y.add(E));
        }
        y.add(
          Ru(
            u.level,
            f.trim,
            (E) => [-0.06 + E * 0.04, -0.63, -0.125],
            [0.03, 0.035, 0.02],
          ),
        );
        const M = m.getObjectByName("joint") ?? m;
        ((y.position.y = M === m ? 0 : 0.4), M.add(h(y, p)));
      }
  }
  for (const [d, u] of c)
    qa(d, { uid: `armor-${u}`, skin: a[u], owner: "", kills: 0 }, "", !1);
  FA(e);
}
