// assets__index-Dp6GxvJu 84 — add
// Lines 54698-55044 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function EL(n, e, t, i, s, o, a, r) {
  const l = new pe();
  if (
    (l.position.set(t, i, s),
    (l.rotation.y = e * r),
    l.add(ce(o, a, 0.14, An, 0, 0, 0)),
    l.add(ce(o * 0.92, a * 0.8, 0.06, v4, 0, 0, -0.09)),
    h1())
  ) {
    for (const c of [-0.35, 0, 0.35])
      l.add(Ci(0.028, 0.04, Bp, c * o, a * 0.32, -0.13, 0.028, 6));
    l.add(ce(o, 0.03, 0.03, b4, 0, -a / 2 + 0.02, 0.07));
  }
  n.add(l);
}
function w4(n, e, t, i, s, o = 0.32, a = 0.07) {
  const r = new ma(a, o, di(6));
  for (let l = 0; l < e; l++) {
    const c = new le(r, ss(SL));
    (c.position.set(-t / 2 + (t * (l + 0.5)) / e, i, s - o / 2),
      (c.rotation.x = -Math.PI / 2),
      (c.castShadow = !0),
      n.add(c));
  }
}
function Ww(n, e, t, i, s, o, a = 4, r = 0) {
  const l = new pe();
  (l.position.set(i, s, o),
    (l.rotation.x = r),
    l.add(
      ce(e, 0.04, 0.04, zs, 0, t / 2, 0),
      ce(e, 0.04, 0.04, zs, 0, -t / 2, 0),
    ),
    l.add(
      ce(0.04, t, 0.04, zs, -e / 2, 0, 0),
      ce(0.04, t, 0.04, zs, e / 2, 0, 0),
    ));
  for (let c = 1; c < a; c++)
    l.add(ce(e, 0.025, 0.025, zs, 0, -t / 2 + (t * c) / a, 0));
  n.add(l);
}
function gq(n, e) {
  const t = e.hull,
    i = e.turret;
  for (const s of [-1, 1])
    (en(t, 0.07, 0.58, 3.86, s * 1.54, 0.8, 0, 0, 0, s * 0.06),
      fa(t, "x", s * 1.58, 1.02, -1.75, 1.75, 9),
      Og(t, 0.02, 0.02, 3.8, s * 1.57, 0.52, 0),
      en(i, 0.07, 0.34, 1, s * 0.84, 0.26, -0.02, 0, s * 0.04, 0, An),
      fa(i, "x", s * 0.88, 0.38, -0.4, 0.38, 4));
  (en(t, 2.08, 0.44, 0.08, 0, 0.56, -2.02, 0.42, 0, 0),
    fa(t, "z", -2.08, 0.72, -0.9, 0.9, 6),
    en(t, 1.2, 0.06, 0.5, 0, 1.2, -0.72, -0.05, 0, 0, An));
  for (const s of [-1, 1]) Ww(t, 0.24, 0.2, s * 0.95, 1.08, -1.98, 3);
  if (
    (en(i, 1.14, 0.3, 0.07, 0, 0.22, 0.78, -0.1, 0, 0, An),
    en(t, 2.2, 0.42, 0.07, 0, 0.82, 2, -0.18, 0, 0),
    fa(t, "z", 2.05, 1, -0.95, 0.95, 7),
    !(n < 2))
  ) {
    for (const s of [-1, 1])
      (Pa(t, s > 0 ? "side+" : "side-", 2, 8, 0.27, 0.47, s * 1.6, 0.8, 0),
        Pa(
          i,
          s > 0 ? "side+" : "side-",
          1,
          4,
          0.3,
          0.24,
          s * 0.9,
          0.27,
          -0.08,
        ));
    (Pa(i, "up", 4, 2, 0.3, 0.3, 0, 0.49, -0.42, -0.05),
      Pa(i, "front", 3, 1, 0.24, 0.26, 0, 0.22, -0.88, 0.35),
      Ng(t, "z", 2.18, -1.2, 1.2, 0.48, 1.1),
      en(i, 1.3, 0.36, 0.44, 0, 0.24, 1, 0, 0, 0, An),
      Pa(i, "up", 3, 1, 0.4, 0.38, 0, 0.43, 1));
    for (const s of [-1, 1]) EL(i, s, s * 0.58, 0.24, -0.98, 0.66, 0.42, 0.62);
    en(t, 2.9, 0.6, 0.1, 0, 0.5, -2.3, 0.38, 0, 0, An);
    for (const s of [-1, 1])
      en(t, 0.1, 0.12, 0.62, s * 1, 0.62, -2.02, 0.25, 0, 0, zs);
    if (
      (w4(t, 7, 2.7, 0.22, -2.36, 0.34, 0.075),
      Og(t, 2.9, 0.03, 0.03, 0, 0.78, -2.4),
      h1())
    ) {
      en(i, 0.5, 0.28, 0.05, 0.3, 0.66, -0.2, 0, 0, 0, An);
      for (const s of [0.08, 0.52])
        en(i, 0.05, 0.28, 0.3, s, 0.66, -0.08, 0, 0, 0, An);
    }
  }
}
function yq(n, e) {
  const t = e.hull,
    i = e.turret;
  for (const s of [-1, 1])
    (en(t, 0.07, 0.42, 4.9, s * 1.36, 1.05, 0),
      fa(t, "x", s * 1.4, 1.2, -2.3, 2.3, 11),
      Og(t, 0.02, 0.02, 4.9, s * 1.39, 0.84, 0),
      en(i, 0.07, 0.36, 0.92, s * 0.67, -0.24, -0.04, 0, s * 0.06, 0, An));
  (en(t, 1.8, 0.07, 0.66, 0, 0.66, -2.42, 0.72, 0, 0),
    fa(t, "z", -2.62, 0.88, -0.7, 0.7, 5));
  for (const s of [-0.45, 0.45]) Ww(t, 0.36, 0.14, s, 1.2, -1.26, 2);
  for (const s of [-1, 1]) Ww(t, 0.22, 0.16, s * 0.8, 1.02, -2.54, 3);
  if (!(n < 2)) {
    for (const s of [-1, 1]) Ng(t, "x", s * 1.46, -2.2, 2.2, 0.82, 1.32);
    Ng(t, "z", 2.72, -1.1, 1.1, 0.6, 1.24);
    for (const s of [-1, 1]) EL(i, s, s * 0.5, -0.24, -0.8, 0.5, 0.34, 0.6);
    (Pa(t, "up", 5, 3, 0.42, 0.44, 0, 1.12, -1.8, -0.23),
      Pa(i, "front", 3, 2, 0.3, 0.2, 0, -0.26, -0.66, 0.2),
      Pa(i, "up", 3, 2, 0.32, 0.3, 0, 0, -0.18),
      en(t, 2.3, 0.22, 0.12, 0, 0.62, -2.78, 0, 0, 0, zs));
    for (const s of [-1, 1])
      en(t, 0.08, 0.08, 0.3, s * 0.9, 0.66, -2.62, 0, 0, 0, zs);
    w4(t, 6, 2.1, 0.62, -2.86, 0.3, 0.065);
  }
}
function vq(n, e, t) {
  const i = e.hull;
  for (const s of [-1, 1]) {
    (en(i, 0.07, 0.74, 1.52, s * 1.08, 1.42, -1.9),
      fa(i, "x", s * 1.12, 1.74, -2.55, -1.25, 5));
    for (const o of [1.95, 2.12, 2.29])
      i.add(ce(0.04, 0.045, 1.28, zs, s * 1.07, o, -1.88));
    en(i, 0.06, 0.46, 0.96, s * 1.22, 0.8, -0.4, 0, 0, 0, An);
  }
  (en(i, 2.14, 0.07, 0.62, 0, 1.66, -2.46, 0.05, 0, 0),
    en(i, 2.14, 0.07, 1.72, 0, 2.5, -1.9, 0, 0, 0, An),
    fa(i, "z", -2.78, 2.5, -0.9, 0.9, 6),
    en(i, 2.24, 0.12, 0.12, 0, 1.46, -2.94, 0, 0, 0, zs));
  for (const s of [-0.95, -0.35, 0.35, 0.95])
    i.add(ce(0.07, 0.62, 0.07, zs, s, 1.16, -2.92));
  for (const s of [1.78, 2, 2.22])
    e.fpv.add(ce(1.94, 0.04, 0.04, zs, 0, s, -2.74));
  for (const s of [-0.6, 0, 0.6])
    e.fpv.add(ce(0.04, 0.82, 0.04, zs, s, 2, -2.74));
  if (!(n < 2)) {
    for (const s of [-1, 1])
      (Pa(i, s > 0 ? "side+" : "side-", 2, 3, 0.34, 0.48, s * 1.13, 1.42, -1.9),
        Ng(i, "x", s * 1.32, -0.9, 2.55, 0.8, 1.34));
    if (
      (Pa(i, "up", 4, 3, 0.48, 0.52, 0, 2.54, -1.9),
      e.fpv.add(
        ce(2, 0.3, 0.09, An, 0, 2.28, -2.78),
        ce(2, 0.3, 0.09, An, 0, 1.74, -2.78),
      ),
      en(i, 2.4, 0.3, 0.14, 0, 1, -3.08, 0, 0, 0, An),
      w4(i, 6, 2.2, 1, -3.15, 0.34, 0.075),
      t === P.HIMARS && e.launcher)
    ) {
      for (const s of [-1, 1])
        en(e.launcher, 0.07, 0.96, 2.78, s * 0.94, 0.55, 1.5, 0, 0, 0, An);
      Pa(e.launcher, "up", 3, 4, 0.52, 0.66, 0, 1.12, 1.5);
    }
    if (t === P.PATRIOT && e.launcher) {
      for (const s of [-1, 1])
        en(e.launcher, 0.07, 0.98, 2.36, s * 0.9, 0.54, -1.2, 0, 0, 0, An);
      Pa(e.launcher, "up", 2, 4, 0.78, 0.56, 0, 1.1, -1.2);
    }
  }
}
function bq(n) {
  const e = n.hull;
  for (const t of [-1, 1])
    (en(e, 0.07, 0.44, 2.3, t * 0.9, 0.98, 0, 0, 0, t * 0.06),
      fa(e, "x", t * 0.95, 1.14, -1, 1, 6),
      Og(e, 0.02, 0.02, 2.3, t * 0.94, 0.77, 0),
      e.add(ce(0.06, 0.34, 0.7, An, t * 0.6, 1.08, -1.55)),
      en(e, 0.06, 0.34, 0.95, t * 0.6, 2.24, 0.45, 0, 0, t * 0.3, An));
  (en(e, 1.3, 0.07, 2.4, 0, 0.7, 0, 0, 0, 0, An),
    n.fpv.add(ce(0.9, 0.06, 0.7, An, 0, 0.8, -1.55)),
    en(e, 1.06, 0.06, 1.25, 0, 2.5, 0.35, 0, 0, 0, d0),
    en(e, 0.58, 0.56, 1.15, 0, 2, 1.75, 0, 0, 0, An),
    fa(e, "x", 0.3, 2.18, 1.3, 2.2, 4),
    fa(e, "x", -0.3, 2.18, 1.3, 2.2, 4));
}
function wq(n, e) {
  const t = n.hull;
  if (e === P.FIGHTER_JET) {
    en(t, 1.2, 0.07, 7, 0, 0.74, 0.6, 0, 0, 0, An);
    for (const s of [-1, 1])
      (en(t, 0.07, 0.56, 3.3, s * 0.76, 1.34, 0.7, 0, 0, 0, d0),
        fa(t, "x", s * 0.81, 1.56, -0.8, 2.2, 7),
        en(t, 1.2, 0.06, 1.9, s * 1.42, 1.64, -0.1, 0, 0, s * -0.04, An));
    en(t, 0.56, 0.06, 3.6, 0, 2.2, 2.6, 0, 0, 0, d0);
    return;
  }
  en(t, 0.7, 0.06, 3.2, 0, 0.6, 0.2, 0, 0, 0, An);
  for (const s of [-1, 1])
    (en(t, 0.06, 0.34, 2, s * 0.5, 0.98, -0.1, 0, 0, 0, d0),
      fa(t, "x", s * 0.54, 1.1, -0.9, 0.8, 5),
      en(t, 1.2, 0.06, 0.9, s * 0.95, 1.25, -0.5, 0, 0, 0, An));
  const i = Ci(0.5, 0.24, An, 0, 1.05, -1.62, 0.5, 14);
  n.fpv.add(i);
}
function xL(n) {
  for (const t of [...n.children]) t instanceof pe && xL(t);
  const e = new Map();
  for (const t of n.children) {
    if (!(t instanceof le) || Array.isArray(t.material)) continue;
    const i = t.material,
      s = `${i.userData.baseColor}:${i.userData.camoEligible}`;
    (e.get(s) ?? e.set(s, []).get(s)).push(t);
  }
  for (const t of e.values()) {
    if (t.length < 2) continue;
    const i = t.some((l) => !l.geometry.index),
      s = t.map(
        (l) => (
          l.updateMatrix(),
          (i && l.geometry.index
            ? l.geometry.toNonIndexed()
            : l.geometry.clone()
          ).applyMatrix4(l.matrix)
        ),
      );
    for (const l of s)
      for (const c of Object.keys(l.attributes))
        ["position", "normal", "uv"].includes(c) || l.deleteAttribute(c);
    const o = no(s, !1);
    for (const l of s) l.dispose();
    if (!o) continue;
    const a = t[0].material.clone();
    for (const l of t) (n.remove(l), l.material.dispose());
    const r = new le(o, a);
    ((r.castShadow = r.receiveShadow = !0), n.add(r));
  }
}
function TL(n, e, t, i) {
  if (e <= 0) return null;
  const s = {
    hull: new pe(),
    turret: t ? new pe() : null,
    launcher: i ? new pe() : null,
    fpv: new pe(),
  };
  if (
    ((s.hull.name = "armor-kit"),
    (s.fpv.name = "armor-kit-fpv"),
    s.turret && (s.turret.name = "armor-kit-turret"),
    s.launcher && (s.launcher.name = "armor-kit-launcher"),
    n === P.TANK && s.turret)
  )
    gq(e, s);
  else if (n === P.BTR_TURRET && s.turret) yq(e, s);
  else if (n === P.HIMARS || n === P.PATRIOT) vq(e, s, n);
  else if (n === P.HELI) bq(s);
  else if (n === P.PLANE || n === P.FIGHTER_JET) wq(s, n);
  else return null;
  for (const o of [s.hull, s.turret, s.launcher, s.fpv])
    o &&
      (xL(o),
      o.traverse((a) => {
        a.isMesh && (a.userData.armorKit = !0);
      }));
  return s;
}
const Mq = new ze();
function GA(n, e) {
  const t = Math.max(0, e) ** 1.6,
    i = Mq.setRGB(1 * t, 0.38 * t, 0.08 * t);
  n.traverse((s) => {
    const o = s;
    if (o.isMesh)
      for (const a of Array.isArray(o.material) ? o.material : [o.material]) {
        const r = a;
        if (!r.emissive) continue;
        const l = r.userData.entityLight;
        l
          ? (r.emissive.sub(l.base.clone().multiplyScalar(l.intensity)).add(i),
            r.emissive.setRGB(
              Math.max(0, r.emissive.r),
              Math.max(0, r.emissive.g),
              Math.max(0, r.emissive.b),
            ),
            l.base.copy(i),
            (l.intensity = 1))
          : r.emissive.copy(i);
      }
  });
}
function WA(n, e, t = []) {
  t.length = 0;
  const i = [];
  for (const o of n)
    o.traverse((a) => {
      a.isMesh && a.visible && i.push(a);
    });
  if (!i.length) return t;
  const s = new gn();
  for (let o = 0; o < e; o++) {
    const a = i[Math.floor(Math.random() * i.length)];
    (a.geometry.boundingBox || a.geometry.computeBoundingBox(),
      s.copy(a.geometry.boundingBox));
    const r = new k(
      fi.lerp(s.min.x, s.max.x, Math.random()),
      fi.lerp(s.min.y, s.max.y, Math.random()),
      fi.lerp(s.min.z, s.max.z, Math.random()),
    );
    t.push(a.localToWorld(r));
  }
  return t;
}
const tl = 30;
function VA(n) {
  return n === P.BTR_TURRET
    ? {
        interval: 0.08,
        reload: 1,
        accuracy: 0.96,
        belt: !0,
        spread: 0.012,
        auto: 0.05,
      }
    : {
        interval: 0.2,
        reload: 2,
        accuracy: 0.78,
        belt: !1,
        spread: 0,
        auto: 0.2,
      };
}
const S0 = 2;
function Sq(n, e, t, i) {
  const s = e.x - n.x,
    o = e.y - n.y,
    a = e.z - n.z,
    r = t.x ** 2 + t.y ** 2 + t.z ** 2 - i ** 2,
    l = 2 * (s * t.x + o * t.y + a * t.z),
    c = s * s + o * o + a * a;
  let h = Math.sqrt(c) / Math.max(1, i);
  const d = l * l - 4 * r * c;
  if (Math.abs(r) < 1e-6) l < 0 && (h = -c / l);
  else if (d >= 0) {
    const u = [
      (-l - Math.sqrt(d)) / (2 * r),
      (-l + Math.sqrt(d)) / (2 * r),
    ].filter((f) => f > 0);
    u.length && (h = Math.min(...u));
  }
  return (
    (h = Math.min(2.5, Math.max(0, h))),
    { x: e.x + t.x * h, y: e.y + t.y * h, z: e.z + t.z * h }
  );
}
