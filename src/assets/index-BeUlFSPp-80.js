// index-BeUlFSPp 80 — add
// Lines 54951-55074 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Hf(s, e, t, i, n, o, a = 1, r = 0) {
  if (
    (s.add(me(n, 0.005, t - e, o, r, i + a * 0.0025, (e + t) / 2, "gloss")),
    !wt(1))
  )
    return;
  const l = Math.floor((t - e - 0.004) / 0.0105);
  for (let c = 0; c < l; c++)
    s.add(
      me(
        n + 0.002,
        0.0042,
        0.0052,
        o,
        r,
        i + a * 0.0068,
        e + 0.006 + c * 0.0105,
        "gloss",
      ),
    );
  wt(2) &&
    s.add(
      me(
        n * 0.55,
        0.0015,
        t - e - 0.004,
        rn,
        r,
        i + a * 0.0092,
        (e + t) / 2,
        "matte",
      ),
    );
}
function yR(s, e, t, i, n, o, a, r, l = 1) {
  for (let c = i; c + o <= n + 1e-6; c += r)
    s.add(me(0.0012, a, o, ca, e + l * 4e-4, t, c + o / 2, "matte"));
}
const vR = new Map();
function iT(s, e, t, i, n, o, a, r = "rgba(205,212,218,.82)") {
  const l = s.join("|") + r;
  let c = vR.get(l);
  if (!c) {
    const d = document.createElement("canvas");
    ((d.width = 512), (d.height = Math.round((512 * t) / e)));
    const u = d.getContext("2d");
    ((u.fillStyle = r), (u.textAlign = "left"), (u.textBaseline = "middle"));
    const f = d.height / (s.length + 0.4);
    (s.forEach((p, m) => {
      ((u.font = `${m ? 600 : 800} ${Math.round(f * (m ? 0.62 : 0.82))}px "Arial Narrow", Arial, sans-serif`),
        u.fillText(p, 8, f * (m + 0.7)));
    }),
      (c = new Si(d)),
      (c.colorSpace = Ii),
      (c.anisotropy = 4),
      vR.set(l, c));
  }
  const h = new Q(
    new ms(e, t),
    new Zt({
      map: c,
      transparent: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  );
  return ((h.rotation.y = (a * Math.PI) / 2), h.position.set(i, n, o), h);
}
function bR(s, e, t, i, n, o, a) {
  const r = new Q(new kt(s, e, t), new Zt({ color: i, toneMapped: !1 }));
  return (r.position.set(n, o, a), r);
}
function sT(s, e, t, i, n) {
  const o = new re();
  return (
    o.add(Gt(s, e * 0.62, XO, 0, 0, e * 0.19, "metal")),
    o.add(Xm(s * 0.45, s * 0.92, e * 0.38, 11892300, 0, 0, -e * 0.31, "metal")),
    o.position.set(t, i, n),
    an(o)
  );
}
function W5(s) {
  const e = new Map();
  for (const t of [...s.children]) {
    const i = t,
      n = i.material;
    if (
      i.isMesh &&
      !i.children.length &&
      n &&
      !Array.isArray(n) &&
      !n.transparent &&
      !(n instanceof Gi) &&
      !i.name
    ) {
      const o = n,
        a = `${n.type}|${o.color?.getHex()}|${o.shininess ?? 0}|${o.specular?.getHex() ?? 0}|${i.userData.skinKeep ? 1 : 0}`,
        r = e.get(a) ?? [];
      (r.push(i), e.set(a, r));
    } else !t.userData.skinKeep && !i.isMesh && W5(t);
  }
  for (const t of e.values()) {
    if (t.length < 2) continue;
    const i = t.map((a) => {
        a.updateMatrix();
        const r = a.geometry.index
          ? a.geometry.toNonIndexed()
          : a.geometry.clone();
        r.applyMatrix4(a.matrix);
        for (const l of Object.keys(r.attributes))
          l !== "position" && l !== "normal" && r.deleteAttribute(l);
        return (r.clearGroups(), r);
      }),
      n = Eo(i, !1);
    for (const a of i) a.dispose();
    if (!n) continue;
    const o = new Q(n, t[0].material);
    t[0].userData.skinKeep && (o.userData.skinKeep = !0);
    for (const a of t)
      (s.remove(a), a.geometry.dispose(), a !== t[0] && a.material.dispose());
    s.add(o);
  }
}
