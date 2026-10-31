// index-BeUlFSPp 165 — position
// Lines 94213-94310 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Bse(s, e = "") {
  const t = Kc(4809806),
    i = Lo(s);
  (X0(t.armorRoot, t.head, t.legL, t.legR, [s], 0, e ? { [i]: e } : {}),
    t.group.updateMatrixWorld(!0));
  const n = [];
  t.group.traverse((r) => {
    if (!r.isMesh) return;
    let l = !1;
    for (let c = r; c; c = c.parent)
      if (c.userData.armorPart) {
        l = !0;
        break;
      }
    l || n.push(r);
  });
  for (const r of n) (r.removeFromParent(), r.geometry?.dispose());
  const o = new re();
  o.add(t.group);
  const a = new zs();
  return (
    t.group.traverse((r) => {
      r.isMesh && r.visible && a.expandByObject(r);
    }),
    a.isEmpty() || t.group.position.sub(a.getCenter(new k())),
    o
  );
}
function Kc(s) {
  const t = new re(),
    i = new re();
  ((i.name = "skin-head"), (i.position.y = 1.5));
  const n = cs(0.5, 0.5, 0.5, 14198135);
  ((n.position.y = 0.25), (n.userData.skinPart = 0));
  const o = cs(0.08, 0.08, 0.02, 2236979),
    a = cs(0.08, 0.08, 0.02, 2236979);
  (o.position.set(-0.12, 0.3, -0.26),
    a.position.set(0.12, 0.3, -0.26),
    (o.name = "eye-l"),
    (a.name = "eye-r"));
  const r = cs(0.16, 0.035, 0.022, 6436655);
  ((r.name = "mouth"), r.position.set(0, 0.13, -0.265), i.add(n, o, a, r));
  const l = cs(0.55, 0.7, 0.28, s);
  ((l.position.y = 1.15), (l.name = "skin-body"), (l.userData.skinPart = 1));
  const c = (E, A, T, x) => {
      const R = new re();
      R.position.set(E, A, 0);
      const _ = cs(0.22, x / 2, 0.22, T);
      _.position.y = -x / 4;
      const C = new re();
      ((C.name = "joint"), (C.position.y = -x / 2));
      const P = cs(0.21, x / 2, 0.21, T);
      return ((P.position.y = -x / 4), C.add(P), R.add(_, C), R);
    },
    h = c(-0.39, 1.45, s, 0.65),
    d = c(0.39, 1.45, s, 0.65),
    u = c(-0.15, 0.8, 3817290, 0.8),
    f = c(0.15, 0.8, 3817290, 0.8);
  [h, d, u, f].forEach((E, A) => {
    const T = E.children[0],
      x = E.getObjectByName("joint").children[0];
    ((T.userData.skinPart = x.userData.skinPart = A + 2),
      (T.userData.skinHalf = 0),
      (x.userData.skinHalf = 1));
  });
  const p = new re();
  (p.position.set(0, -0.62, 0), d.add(p));
  const m = new re();
  ((m.name = "gesture"), m.position.set(0, -0.59, -0.02), (m.visible = !1));
  const g = cs(0.19, 0.15, 0.16, 14198135),
    y = cs(0.075, 0.23, 0.085, 14198135);
  ((y.name = "thumb"), y.position.set(-0.11, 0.07, 0));
  const b = cs(0.06, 0.28, 0.07, 14198135);
  ((b.name = "finger"), b.position.set(0, 0.18, 0), m.add(g, y, b), d.add(m));
  const S = new re();
  S.name = "armor";
  const M = new re();
  return (
    (M.name = "pose-root"),
    M.add(i, l, h, d, u, f, S),
    t.add(M),
    Oc(t, "ranger"),
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
function GN(s) {
  return $k[s % $k.length];
}
