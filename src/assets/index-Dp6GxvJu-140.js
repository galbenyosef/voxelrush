// index-Dp6GxvJu 140 — position
// Lines 86252-86351 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function sZ(n, e = "") {
  var r;
  const t = ec(4809806),
    i = ho(n);
  (ih(t.armorRoot, t.head, t.legL, t.legR, [n], 0, e ? { [i]: e } : {}),
    t.group.updateMatrixWorld(!0));
  const s = [];
  t.group.traverse((l) => {
    if (!l.isMesh) return;
    let c = !1;
    for (let h = l; h; h = h.parent)
      if (h.userData.armorPart) {
        c = !0;
        break;
      }
    c || s.push(l);
  });
  for (const l of s)
    (l.removeFromParent(), (r = l.geometry) == null || r.dispose());
  const o = new pe();
  o.add(t.group);
  const a = new gn();
  return (
    t.group.traverse((l) => {
      l.isMesh && l.visible && a.expandByObject(l);
    }),
    a.isEmpty() || t.group.position.sub(a.getCenter(new k())),
    o
  );
}
function ec(n) {
  const t = new pe(),
    i = new pe();
  ((i.name = "skin-head"), (i.position.y = 1.5));
  const s = Zi(0.5, 0.5, 0.5, 14198135);
  ((s.position.y = 0.25), (s.userData.skinPart = 0));
  const o = Zi(0.08, 0.08, 0.02, 2236979),
    a = Zi(0.08, 0.08, 0.02, 2236979);
  (o.position.set(-0.12, 0.3, -0.26),
    a.position.set(0.12, 0.3, -0.26),
    (o.name = "eye-l"),
    (a.name = "eye-r"));
  const r = Zi(0.16, 0.035, 0.022, 6436655);
  ((r.name = "mouth"), r.position.set(0, 0.13, -0.265), i.add(s, o, a, r));
  const l = Zi(0.55, 0.7, 0.28, n);
  ((l.position.y = 1.15), (l.name = "skin-body"), (l.userData.skinPart = 1));
  const c = (x, T, A, _) => {
      const C = new pe();
      C.position.set(x, T, 0);
      const R = Zi(0.22, _ / 2, 0.22, A);
      R.position.y = -_ / 4;
      const L = new pe();
      ((L.name = "joint"), (L.position.y = -_ / 2));
      const N = Zi(0.21, _ / 2, 0.21, A);
      return ((N.position.y = -_ / 4), L.add(N), C.add(R, L), C);
    },
    h = c(-0.39, 1.45, n, 0.65),
    d = c(0.39, 1.45, n, 0.65),
    u = c(-0.15, 0.8, 3817290, 0.8),
    f = c(0.15, 0.8, 3817290, 0.8);
  [h, d, u, f].forEach((x, T) => {
    const A = x.children[0],
      _ = x.getObjectByName("joint").children[0];
    ((A.userData.skinPart = _.userData.skinPart = T + 2),
      (A.userData.skinHalf = 0),
      (_.userData.skinHalf = 1));
  });
  const p = new pe();
  (p.position.set(0, -0.62, 0), d.add(p));
  const m = new pe();
  ((m.name = "gesture"), m.position.set(0, -0.59, -0.02), (m.visible = !1));
  const y = Zi(0.19, 0.15, 0.16, 14198135),
    g = Zi(0.075, 0.23, 0.085, 14198135);
  ((g.name = "thumb"), g.position.set(-0.11, 0.07, 0));
  const b = Zi(0.06, 0.28, 0.07, 14198135);
  ((b.name = "finger"), b.position.set(0, 0.18, 0), m.add(y, g, b), d.add(m));
  const S = new pe();
  S.name = "armor";
  const M = new pe();
  return (
    (M.name = "pose-root"),
    M.add(i, l, h, d, u, f, S),
    t.add(M),
    Wl(t, "ranger"),
    {
      group: t,
      head: i,
      armL: h,
      armR: d,
      legL: u,
      legR: f,
      body: l,
      heldMesh: p,
      armorRoot: S,
    }
  );
}
function xI(n) {
  return u_[n % u_.length];
}
