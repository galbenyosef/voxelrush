// index-BeUlFSPp 210 — math
// Lines 111538-111635 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function nt(s, e, t, i, n, o, a, r = "plain") {
  const l = new Q(
    r !== "plain" && wt(1)
      ? new m7(s, e, t, 1, Math.min(s, e, t) * 0.12)
      : new kt(s, e, t),
    c3(i, r),
  );
  return (
    (l.userData.surface = r),
    l.position.set(n, o, a),
    (l.castShadow = !0),
    l
  );
}
function Cs(s, e, t, i, n, o = 1, a = 1, r = 1, l = "plain") {
  const c = new Q(new ws(s, ci(8), ci(6)), c3(e, l));
  return (
    (c.userData.surface = l),
    c.position.set(t, i, n),
    c.scale.set(o, a, r),
    (c.castShadow = !0),
    c
  );
}
function dl(s, e, t, i, n, o, a) {
  const r = Math.sign(e) || 1;
  (s.add(Cs(n, 15854816, e, t, i, 0.7, 1, 1)),
    a !== void 0 &&
      s.add(Cs(n * 0.72, a, e + r * n * 0.42, t, i - n * 0.12, 0.5, 1, 1)),
    s.add(Cs(n * 0.5, o, e + r * n * 0.56, t, i - n * 0.18, 0.4, 1, 1)),
    wt(2) &&
      s.add(
        Cs(n * 0.18, 16777215, e + r * n * 0.64, t + n * 0.3, i - n * 0.4),
      ));
}
function bi(s, e) {
  const t = Math.max(0, Math.min(255, Math.round(((s >> 16) & 255) * e))),
    i = Math.max(0, Math.min(255, Math.round(((s >> 8) & 255) * e))),
    n = Math.max(0, Math.min(255, Math.round((s & 255) * e)));
  return (t << 16) | (i << 8) | n;
}
function ud(s) {
  const e = new Map();
  for (const t of s.children) {
    if (!(t instanceof Q) || Array.isArray(t.material) || t.userData.animated)
      continue;
    const i = t.material.color.getHex(),
      n = t.userData.surface ?? "plain",
      o = `${i}:${n}`,
      a = e.get(o);
    a ? a.meshes.push(t) : e.set(o, { color: i, surface: n, meshes: [t] });
  }
  for (const { color: t, surface: i, meshes: n } of e.values()) {
    if (n.length < 2) continue;
    const o = n.map(
        (l) => (
          l.updateMatrix(),
          (l.geometry.index
            ? l.geometry.toNonIndexed()
            : l.geometry.clone()
          ).applyMatrix4(l.matrix)
        ),
      ),
      a = Eo(o, !1);
    for (const l of o) l.dispose();
    if (!a) continue;
    for (const l of n)
      (s.remove(l), l.geometry.dispose(), l.material.dispose());
    const r = new Q(a, c3(t, i));
    ((r.userData.surface = i), (r.castShadow = !0), s.add(r));
  }
}
const Xae = {
    [Bt.CHICKEN]: 0.5,
    [Bt.PIG]: 0.88,
    [Bt.SHEEP]: 0.94,
    [Bt.COW]: 1,
    [Bt.CAMEL]: 1.16,
    [Bt.FISH]: 1.35,
    [Bt.SHARK]: 1,
    [Bt.WENDIGO]: 1,
  },
  Zae = new Ge(14677759),
  Sl = (s, e) => (Xae[s] ?? 1) * (e ? 0.62 : 1),
  Qae = {
    [Bt.PIG]: -0.62,
    [Bt.SHEEP]: -0.9,
    [Bt.COW]: -0.85,
    [Bt.CAMEL]: -1.7,
  },
  Jae = (s) => Qae[s] ?? 1,
  ere = {
    [Bt.FISH]: { hw: 0.32, h: 0.5 },
    [Bt.SHARK]: { hw: 1, h: 1.35 },
    [Bt.WENDIGO]: { hw: 0.62, h: 3.5 },
  },
  tre = { hw: 0.62, h: 1.8 },
  PC = (s) => ere[s] ?? tre;
