// index-Dp6GxvJu 188 — math
// Lines 104813-104910 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Ye(n, e, t, i, s, o, a, r = "plain") {
  const l = new le(
    r !== "plain" && yt(1)
      ? new fL(n, e, t, 1, Math.min(n, e, t) * 0.12)
      : new Ct(n, e, t),
    Xy(i, r),
  );
  return (
    (l.userData.surface = r),
    l.position.set(s, o, a),
    (l.castShadow = !0),
    l
  );
}
function xn(n, e, t, i, s, o = 1, a = 1, r = 1, l = "plain") {
  const c = new le(new mn(n, di(8), di(6)), Xy(e, l));
  return (
    (c.userData.surface = l),
    c.position.set(t, i, s),
    c.scale.set(o, a, r),
    (c.castShadow = !0),
    c
  );
}
function wr(n, e, t, i, s, o, a) {
  const r = Math.sign(e) || 1;
  (n.add(xn(s, 15854816, e, t, i, 0.7, 1, 1)),
    a !== void 0 &&
      n.add(xn(s * 0.72, a, e + r * s * 0.42, t, i - s * 0.12, 0.5, 1, 1)),
    n.add(xn(s * 0.5, o, e + r * s * 0.56, t, i - s * 0.18, 0.4, 1, 1)),
    yt(2) &&
      n.add(
        xn(s * 0.18, 16777215, e + r * s * 0.64, t + s * 0.3, i - s * 0.4),
      ));
}
function pi(n, e) {
  const t = Math.max(0, Math.min(255, Math.round(((n >> 16) & 255) * e))),
    i = Math.max(0, Math.min(255, Math.round(((n >> 8) & 255) * e))),
    s = Math.max(0, Math.min(255, Math.round((n & 255) * e)));
  return (t << 16) | (i << 8) | s;
}
function p0(n) {
  const e = new Map();
  for (const t of n.children) {
    if (!(t instanceof le) || Array.isArray(t.material) || t.userData.animated)
      continue;
    const i = t.material.color.getHex(),
      s = t.userData.surface ?? "plain",
      o = `${i}:${s}`,
      a = e.get(o);
    a ? a.meshes.push(t) : e.set(o, { color: i, surface: s, meshes: [t] });
  }
  for (const { color: t, surface: i, meshes: s } of e.values()) {
    if (s.length < 2) continue;
    const o = s.map(
        (l) => (
          l.updateMatrix(),
          (l.geometry.index
            ? l.geometry.toNonIndexed()
            : l.geometry.clone()
          ).applyMatrix4(l.matrix)
        ),
      ),
      a = no(o, !1);
    for (const l of o) l.dispose();
    if (!a) continue;
    for (const l of s)
      (n.remove(l), l.geometry.dispose(), l.material.dispose());
    const r = new le(a, Xy(t, i));
    ((r.userData.surface = i), (r.castShadow = !0), n.add(r));
  }
}
const Hee = {
    [ANIMAL_KIND.CHICKEN]: 0.5,
    [ANIMAL_KIND.PIG]: 0.88,
    [ANIMAL_KIND.SHEEP]: 0.94,
    [ANIMAL_KIND.COW]: 1,
    [ANIMAL_KIND.CAMEL]: 1.16,
    [ANIMAL_KIND.FISH]: 1.35,
    [ANIMAL_KIND.SHARK]: 1,
    [ANIMAL_KIND.WENDIGO]: 1,
  },
  zee = new ze(14677759),
  Ir = (n, e) => (Hee[n] ?? 1) * (e ? 0.62 : 1),
  Uee = {
    [ANIMAL_KIND.PIG]: -0.62,
    [ANIMAL_KIND.SHEEP]: -0.9,
    [ANIMAL_KIND.COW]: -0.85,
    [ANIMAL_KIND.CAMEL]: -1.7,
  },
  Fee = (n) => Uee[n] ?? 1,
  Gee = {
    [ANIMAL_KIND.FISH]: { hw: 0.32, h: 0.5 },
    [ANIMAL_KIND.SHARK]: { hw: 1, h: 1.35 },
    [ANIMAL_KIND.WENDIGO]: { hw: 0.62, h: 3.5 },
  },
  Wee = { hw: 0.62, h: 1.8 },
  oR = (n) => Gee[n] ?? Wee;
