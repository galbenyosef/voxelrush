// index-BeUlFSPp 105 — math
// Lines 62125-62470 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function gT(s, e, t, i, n, o = 0.32, a = 0.07) {
  const r = new fa(a, o, ci(6));
  for (let l = 0; l < e; l++) {
    const c = new Q(r, wn(A7));
    (c.position.set(-t / 2 + (t * (l + 0.5)) / e, i, n - o / 2),
      (c.rotation.x = -Math.PI / 2),
      (c.castShadow = !0),
      s.add(c));
  }
}
function S4(s, e, t, i, n, o, a = 4, r = 0) {
  const l = new re();
  (l.position.set(i, n, o),
    (l.rotation.x = r),
    l.add(
      se(e, 0.04, 0.04, no, 0, t / 2, 0),
      se(e, 0.04, 0.04, no, 0, -t / 2, 0),
    ),
    l.add(
      se(0.04, t, 0.04, no, -e / 2, 0, 0),
      se(0.04, t, 0.04, no, e / 2, 0, 0),
    ));
  for (let c = 1; c < a; c++)
    l.add(se(e, 0.025, 0.025, no, 0, -t / 2 + (t * c) / a, 0));
  s.add(l);
}
function rQ(s, e) {
  const t = e.hull,
    i = e.turret;
  for (const n of [-1, 1])
    (us(t, 0.07, 0.58, 3.86, n * 1.54, 0.8, 0, 0, 0, n * 0.06),
      Wa(t, "x", n * 1.58, 1.02, -1.75, 1.75, 9),
      Bv(t, 0.02, 0.02, 3.8, n * 1.57, 0.52, 0),
      us(i, 0.07, 0.34, 1, n * 0.84, 0.26, -0.02, 0, n * 0.04, 0, Is),
      Wa(i, "x", n * 0.88, 0.38, -0.4, 0.38, 4));
  (us(t, 2.08, 0.44, 0.08, 0, 0.56, -2.02, 0.42, 0, 0),
    Wa(t, "z", -2.08, 0.72, -0.9, 0.9, 6),
    us(t, 1.2, 0.06, 0.5, 0, 1.2, -0.72, -0.05, 0, 0, Is));
  for (const n of [-1, 1]) S4(t, 0.24, 0.2, n * 0.95, 1.08, -1.98, 3);
  if (
    (us(i, 1.14, 0.3, 0.07, 0, 0.22, 0.78, -0.1, 0, 0, Is),
    us(t, 2.2, 0.42, 0.07, 0, 0.82, 2, -0.18, 0, 0),
    Wa(t, "z", 2.05, 1, -0.95, 0.95, 7),
    !(s < 2))
  ) {
    for (const n of [-1, 1])
      (yr(t, n > 0 ? "side+" : "side-", 2, 8, 0.27, 0.47, n * 1.6, 0.8, 0),
        yr(
          i,
          n > 0 ? "side+" : "side-",
          1,
          4,
          0.3,
          0.24,
          n * 0.9,
          0.27,
          -0.08,
        ));
    (yr(i, "up", 4, 2, 0.3, 0.3, 0, 0.49, -0.42, -0.05),
      yr(i, "front", 3, 1, 0.24, 0.26, 0, 0.22, -0.88, 0.35),
      zv(t, "z", 2.18, -1.2, 1.2, 0.48, 1.1),
      us(i, 1.3, 0.36, 0.44, 0, 0.24, 1, 0, 0, 0, Is),
      yr(i, "up", 3, 1, 0.4, 0.38, 0, 0.43, 1));
    for (const n of [-1, 1]) T7(i, n, n * 0.58, 0.24, -0.98, 0.66, 0.42, 0.62);
    us(t, 2.9, 0.6, 0.1, 0, 0.5, -2.3, 0.38, 0, 0, Is);
    for (const n of [-1, 1])
      us(t, 0.1, 0.12, 0.62, n * 1, 0.62, -2.02, 0.25, 0, 0, no);
    if (
      (gT(t, 7, 2.7, 0.22, -2.36, 0.34, 0.075),
      Bv(t, 2.9, 0.03, 0.03, 0, 0.78, -2.4),
      Zm())
    ) {
      us(i, 0.5, 0.28, 0.05, 0.3, 0.66, -0.2, 0, 0, 0, Is);
      for (const n of [0.08, 0.52])
        us(i, 0.05, 0.28, 0.3, n, 0.66, -0.08, 0, 0, 0, Is);
    }
  }
}
function lQ(s, e) {
  const t = e.hull,
    i = e.turret;
  for (const n of [-1, 1])
    (us(t, 0.07, 0.42, 4.9, n * 1.36, 1.05, 0),
      Wa(t, "x", n * 1.4, 1.2, -2.3, 2.3, 11),
      Bv(t, 0.02, 0.02, 4.9, n * 1.39, 0.84, 0),
      us(i, 0.07, 0.36, 0.92, n * 0.67, -0.24, -0.04, 0, n * 0.06, 0, Is));
  (us(t, 1.8, 0.07, 0.66, 0, 0.66, -2.42, 0.72, 0, 0),
    Wa(t, "z", -2.62, 0.88, -0.7, 0.7, 5));
  for (const n of [-0.45, 0.45]) S4(t, 0.36, 0.14, n, 1.2, -1.26, 2);
  for (const n of [-1, 1]) S4(t, 0.22, 0.16, n * 0.8, 1.02, -2.54, 3);
  if (!(s < 2)) {
    for (const n of [-1, 1]) zv(t, "x", n * 1.46, -2.2, 2.2, 0.82, 1.32);
    zv(t, "z", 2.72, -1.1, 1.1, 0.6, 1.24);
    for (const n of [-1, 1]) T7(i, n, n * 0.5, -0.24, -0.8, 0.5, 0.34, 0.6);
    (yr(t, "up", 5, 3, 0.42, 0.44, 0, 1.12, -1.8, -0.23),
      yr(i, "front", 3, 2, 0.3, 0.2, 0, -0.26, -0.66, 0.2),
      yr(i, "up", 3, 2, 0.32, 0.3, 0, 0, -0.18),
      us(t, 2.3, 0.22, 0.12, 0, 0.62, -2.78, 0, 0, 0, no));
    for (const n of [-1, 1])
      us(t, 0.08, 0.08, 0.3, n * 0.9, 0.66, -2.62, 0, 0, 0, no);
    gT(t, 6, 2.1, 0.62, -2.86, 0.3, 0.065);
  }
}
function cQ(s, e, t) {
  const i = e.hull;
  for (const n of [-1, 1]) {
    (us(i, 0.07, 0.74, 1.52, n * 1.08, 1.42, -1.9),
      Wa(i, "x", n * 1.12, 1.74, -2.55, -1.25, 5));
    for (const o of [1.95, 2.12, 2.29])
      i.add(se(0.04, 0.045, 1.28, no, n * 1.07, o, -1.88));
    us(i, 0.06, 0.46, 0.96, n * 1.22, 0.8, -0.4, 0, 0, 0, Is);
  }
  (us(i, 2.14, 0.07, 0.62, 0, 1.66, -2.46, 0.05, 0, 0),
    us(i, 2.14, 0.07, 1.72, 0, 2.5, -1.9, 0, 0, 0, Is),
    Wa(i, "z", -2.78, 2.5, -0.9, 0.9, 6),
    us(i, 2.24, 0.12, 0.12, 0, 1.46, -2.94, 0, 0, 0, no));
  for (const n of [-0.95, -0.35, 0.35, 0.95])
    i.add(se(0.07, 0.62, 0.07, no, n, 1.16, -2.92));
  for (const n of [1.78, 2, 2.22])
    e.fpv.add(se(1.94, 0.04, 0.04, no, 0, n, -2.74));
  for (const n of [-0.6, 0, 0.6])
    e.fpv.add(se(0.04, 0.82, 0.04, no, n, 2, -2.74));
  if (!(s < 2)) {
    for (const n of [-1, 1])
      (yr(i, n > 0 ? "side+" : "side-", 2, 3, 0.34, 0.48, n * 1.13, 1.42, -1.9),
        zv(i, "x", n * 1.32, -0.9, 2.55, 0.8, 1.34));
    if (
      (yr(i, "up", 4, 3, 0.48, 0.52, 0, 2.54, -1.9),
      e.fpv.add(
        se(2, 0.3, 0.09, Is, 0, 2.28, -2.78),
        se(2, 0.3, 0.09, Is, 0, 1.74, -2.78),
      ),
      us(i, 2.4, 0.3, 0.14, 0, 1, -3.08, 0, 0, 0, Is),
      gT(i, 6, 2.2, 1, -3.15, 0.34, 0.075),
      t === L.HIMARS && e.launcher)
    ) {
      for (const n of [-1, 1])
        us(e.launcher, 0.07, 0.96, 2.78, n * 0.94, 0.55, 1.5, 0, 0, 0, Is);
      yr(e.launcher, "up", 3, 4, 0.52, 0.66, 0, 1.12, 1.5);
    }
    if (t === L.PATRIOT && e.launcher) {
      for (const n of [-1, 1])
        us(e.launcher, 0.07, 0.98, 2.36, n * 0.9, 0.54, -1.2, 0, 0, 0, Is);
      yr(e.launcher, "up", 2, 4, 0.78, 0.56, 0, 1.1, -1.2);
    }
  }
}
function hQ(s) {
  const e = s.hull;
  for (const t of [-1, 1])
    (us(e, 0.07, 0.44, 2.3, t * 0.9, 0.98, 0, 0, 0, t * 0.06),
      Wa(e, "x", t * 0.95, 1.14, -1, 1, 6),
      Bv(e, 0.02, 0.02, 2.3, t * 0.94, 0.77, 0),
      e.add(se(0.06, 0.34, 0.7, Is, t * 0.6, 1.08, -1.55)),
      us(e, 0.06, 0.34, 0.95, t * 0.6, 2.24, 0.45, 0, 0, t * 0.3, Is));
  (us(e, 1.3, 0.07, 2.4, 0, 0.7, 0, 0, 0, 0, Is),
    s.fpv.add(se(0.9, 0.06, 0.7, Is, 0, 0.8, -1.55)),
    us(e, 1.06, 0.06, 1.25, 0, 2.5, 0.35, 0, 0, 0, cd),
    us(e, 0.58, 0.56, 1.15, 0, 2, 1.75, 0, 0, 0, Is),
    Wa(e, "x", 0.3, 2.18, 1.3, 2.2, 4),
    Wa(e, "x", -0.3, 2.18, 1.3, 2.2, 4));
}
function dQ(s, e) {
  const t = s.hull;
  if (e === L.FIGHTER_JET) {
    us(t, 1.2, 0.07, 7, 0, 0.74, 0.6, 0, 0, 0, Is);
    for (const n of [-1, 1])
      (us(t, 0.07, 0.56, 3.3, n * 0.76, 1.34, 0.7, 0, 0, 0, cd),
        Wa(t, "x", n * 0.81, 1.56, -0.8, 2.2, 7),
        us(t, 1.2, 0.06, 1.9, n * 1.42, 1.64, -0.1, 0, 0, n * -0.04, Is));
    us(t, 0.56, 0.06, 3.6, 0, 2.2, 2.6, 0, 0, 0, cd);
    return;
  }
  us(t, 0.7, 0.06, 3.2, 0, 0.6, 0.2, 0, 0, 0, Is);
  for (const n of [-1, 1])
    (us(t, 0.06, 0.34, 2, n * 0.5, 0.98, -0.1, 0, 0, 0, cd),
      Wa(t, "x", n * 0.54, 1.1, -0.9, 0.8, 5),
      us(t, 1.2, 0.06, 0.9, n * 0.95, 1.25, -0.5, 0, 0, 0, Is));
  const i = Hi(0.5, 0.24, Is, 0, 1.05, -1.62, 0.5, 14);
  s.fpv.add(i);
}
function x7(s) {
  for (const t of [...s.children]) t instanceof re && x7(t);
  const e = new Map();
  for (const t of s.children) {
    if (!(t instanceof Q) || Array.isArray(t.material)) continue;
    const i = t.material,
      n = `${i.userData.baseColor}:${i.userData.camoEligible}`;
    (e.get(n) ?? e.set(n, []).get(n)).push(t);
  }
  for (const t of e.values()) {
    if (t.length < 2) continue;
    const i = t.some((l) => !l.geometry.index),
      n = t.map(
        (l) => (
          l.updateMatrix(),
          (i && l.geometry.index
            ? l.geometry.toNonIndexed()
            : l.geometry.clone()
          ).applyMatrix4(l.matrix)
        ),
      );
    for (const l of n)
      for (const c of Object.keys(l.attributes))
        ["position", "normal", "uv"].includes(c) || l.deleteAttribute(c);
    const o = Eo(n, !1);
    for (const l of n) l.dispose();
    if (!o) continue;
    const a = t[0].material.clone();
    for (const l of t) (s.remove(l), l.material.dispose());
    const r = new Q(o, a);
    ((r.castShadow = r.receiveShadow = !0), s.add(r));
  }
}
function _7(s, e, t, i) {
  if (e <= 0) return null;
  const n = {
    hull: new re(),
    turret: t ? new re() : null,
    launcher: i ? new re() : null,
    fpv: new re(),
  };
  if (
    ((n.hull.name = "armor-kit"),
    (n.fpv.name = "armor-kit-fpv"),
    n.turret && (n.turret.name = "armor-kit-turret"),
    n.launcher && (n.launcher.name = "armor-kit-launcher"),
    s === L.TANK && n.turret)
  )
    rQ(e, n);
  else if (s === L.BTR_TURRET && n.turret) lQ(e, n);
  else if (s === L.HIMARS || s === L.PATRIOT) cQ(e, n, s);
  else if (s === L.HELI) hQ(n);
  else if (s === L.PLANE || s === L.FIGHTER_JET) dQ(n, s);
  else return null;
  for (const o of [n.hull, n.turret, n.launcher, n.fpv])
    o &&
      (x7(o),
      o.traverse((a) => {
        a.isMesh && (a.userData.armorKit = !0);
      }));
  return n;
}
const uQ = new Ge();
function d8(s, e) {
  const t = Math.max(0, e) ** 1.6,
    i = uQ.setRGB(1 * t, 0.38 * t, 0.08 * t);
  s.traverse((n) => {
    const o = n;
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
function u8(s, e, t = []) {
  t.length = 0;
  const i = [];
  for (const o of s)
    o.traverse((a) => {
      a.isMesh && a.visible && i.push(a);
    });
  if (!i.length) return t;
  const n = new zs();
  for (let o = 0; o < e; o++) {
    const a = i[Math.floor(Math.random() * i.length)];
    (a.geometry.boundingBox || a.geometry.computeBoundingBox(),
      n.copy(a.geometry.boundingBox));
    const r = new k(
      ni.lerp(n.min.x, n.max.x, Math.random()),
      ni.lerp(n.min.y, n.max.y, Math.random()),
      ni.lerp(n.min.z, n.max.z, Math.random()),
    );
    t.push(a.localToWorld(r));
  }
  return t;
}
const Vl = 30;
function f8(s) {
  return s === L.BTR_TURRET
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
const Ad = 2;
function fQ(s, e, t, i) {
  const n = e.x - s.x,
    o = e.y - s.y,
    a = e.z - s.z,
    r = t.x ** 2 + t.y ** 2 + t.z ** 2 - i ** 2,
    l = 2 * (n * t.x + o * t.y + a * t.z),
    c = n * n + o * o + a * a;
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
function pQ(s, e, t, i, n) {
  const o = t.x - e.x,
    a = t.z - e.z,
    r = Math.hypot(o, a);
  return (
    e.y >= s.cruiseY - 2 && (s.cruiseReached = !0),
    i > 12 && e.y > t.y + 3 && r < n && (s.terminalDive = !0),
    s.terminalDive
      ? { x: o, y: t.y - e.y, z: a }
      : s.cruiseReached
        ? { x: o, y: (s.cruiseY - e.y) * 2, z: a }
        : { x: o * 0.12, y: Math.max(12, s.cruiseY - e.y), z: a * 0.12 }
  );
}
