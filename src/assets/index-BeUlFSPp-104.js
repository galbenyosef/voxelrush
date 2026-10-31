// index-BeUlFSPp 104 — math
// Lines 61783-62124 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function gr(s, e, t, i = 0, n = 0.035) {
  const o = wt(1) && n > 0,
    a = Math.max(0.01, e - (o ? n * 2 : 0)),
    r = new sl(v7(s), {
      depth: a,
      bevelEnabled: o,
      bevelThickness: n,
      bevelSize: n * 0.6,
      bevelSegments: 1,
      curveSegments: 4,
    });
  return (
    r.rotateY(-Math.PI / 2),
    r.translate(e / 2 - (o ? n : 0), 0, 0),
    Od(new Q(r, wn(t)), i, 0, 0)
  );
}
function gc(s, e, t, i = 0, n = 0.035) {
  const o = wt(1) && n > 0,
    a = Math.max(0.01, e - (o ? n * 2 : 0)),
    r = new sl(v7(s.map(([l, c]) => [l, -c])), {
      depth: a,
      bevelEnabled: o,
      bevelThickness: n,
      bevelSize: n * 0.6,
      bevelSegments: 1,
      curveSegments: 4,
    });
  return (
    r.rotateX(-Math.PI / 2),
    r.translate(0, o ? n : 0, 0),
    Od(new Q(r, wn(t)), 0, i, 0)
  );
}
const Dv = new Map(),
  uf = (s, e) => {
    const t = s.index ? s.toNonIndexed() : s;
    t !== s && s.dispose();
    const i = new Ge(e),
      n = t.getAttribute("position").count,
      o = new Float32Array(n * 3);
    for (let a = 0; a < n; a++) i.toArray(o, a * 3);
    t.setAttribute("color", new qt(o, 3));
    for (const a of Object.keys(t.attributes))
      ["position", "normal", "color"].includes(a) || t.deleteAttribute(a);
    return t;
  };
function QZ(s, e = 0.35) {
  const t = wt(2),
    i = `${s}:${e}:${t}:${wt(1)}`;
  let n = Dv.get(i);
  if (n) return n;
  const o = [],
    a = t ? 16 : 10,
    r = (l, c, h = 0) => {
      (l.translate(0, h, 0), o.push(uf(l, c)));
    };
  if (!wt(1))
    r(new Tt(1, 1, e, 6), s === "road" || s === "sprocket" ? 2763559 : 1776409);
  else if (s === "sprocket") {
    if (
      (r(new Tt(1, 1, e, a), 2829352),
      r(new Tt(0.55, 0.55, e * 1.08, a), 4869444),
      wt(1))
    )
      for (let l = 0; l < 10; l++) {
        const c = new kt(0.22, e * 0.6, 0.3);
        (c.translate(0, 0, 1.05),
          c.rotateY((l / 10) * Math.PI * 2),
          o.push(uf(c, 3421487)));
      }
  } else if (s === "road")
    (r(new Tt(1, 1, e, t ? 12 : 8), 1776409),
      r(new Tt(0.84, 0.84, e * 1.06, t ? 12 : 8), 5659468),
      r(new Tt(0.3, 0.38, e * 1.2, 6), 3816756, e * 0.05));
  else {
    const l = new Tt(1, 1, e, t ? 28 : 12, 1);
    if (t) {
      const c = l.getAttribute("position");
      for (let h = 0; h < c.count; h++) {
        const d = c.getX(h),
          u = c.getZ(h);
        if (Math.hypot(d, u) < 0.99) continue;
        const p = Math.atan2(u, d),
          m = Math.cos(p * 14) > 0 ? 1.045 : 0.985;
        (c.setX(h, d * m), c.setZ(h, u * m));
      }
      l.computeVertexNormals();
    }
    if (
      (r(l, 1579030),
      r(
        new Tt(
          s === "apc" ? 0.62 : 0.58,
          s === "apc" ? 0.62 : 0.58,
          e * 1.04,
          a,
        ),
        s === "apc" ? 4608317 : 4936515,
      ),
      r(new Tt(0.24, 0.3, e * 1.18, t ? 8 : 6), 3027754, e * 0.02),
      t)
    )
      for (let c = 0; c < 5; c++) {
        const h = new kt(0.08, e * 1.24, 0.08),
          d = (c / 5) * Math.PI * 2;
        (h.translate(Math.cos(d) * 0.38, 0, Math.sin(d) * 0.38),
          o.push(uf(h, 9146244)));
      }
  }
  n = Eo(o, !1);
  for (const l of o) l.dispose();
  return (n.computeBoundingSphere(), Dv.set(i, n), n);
}
function JZ(s, e) {
  const t = `lod:${s}:${e}`;
  let i = Dv.get(t);
  return (i || ((i = uf(new Tt(1, 1, s, 8), e)), Dv.set(t, i)), i);
}
function Hv(s, e, t = 0.35) {
  const i = new Pi({ color: 16777215, vertexColors: !0 });
  ((i.userData.baseColor = 16777215),
    (i.userData.camoEligible = !1),
    (i.userData.noWeather = !0));
  const n = new On(QZ(e, t), i, s.length);
  return (
    (n.name = "wheel-set"),
    (n.castShadow = !1),
    (n.receiveShadow = !0),
    (n.userData.motion = "wheel-set"),
    (n.userData.wheels = s),
    (n.userData.phase = 0),
    (n.userData.steer = 0),
    (n.userData.lodGeometry = JZ(
      t,
      e === "road" || e === "sprocket" ? 2763559 : 2039837,
    )),
    M7(n),
    n.computeBoundingSphere(),
    n
  );
}
const M4 = new Rt(),
  qu = new hi(),
  eQ = new hi(),
  tQ = new hi(),
  b7 = new k(),
  w7 = new k(),
  iQ = new k(1, 0, 0),
  h8 = new k(0, 1, 0),
  sQ = new k(0, 0, 1);
function M7(s) {
  const e = s.userData.wheels,
    t = s.userData.phase,
    i = s.userData.steer;
  (s.userData.posedPhase === t && Math.abs(s.userData.posedSteer - i) < 1e-4) ||
    ((s.userData.posedPhase = t),
    (s.userData.posedSteer = i),
    e.forEach((n, o) => {
      (qu.setFromAxisAngle(sQ, n.x < 0 ? Math.PI / 2 : -Math.PI / 2),
        n.steer && i && qu.premultiply(tQ.setFromAxisAngle(h8, i)),
        qu.multiply(eQ.setFromAxisAngle(h8, ((n.x < 0 ? 1 : -1) * t) / n.r)),
        M4.compose(b7.set(n.x, n.y, n.z), qu, w7.set(n.r, 1, n.r)),
        s.setMatrixAt(o, M4));
    }),
    (s.instanceMatrix.needsUpdate = !0));
}
function nQ(s, e, t) {
  const { len: i, height: n, y: o } = s,
    a = n / 2,
    r = i - n,
    l = 2 * r + Math.PI * n;
  e = (((e + s.offset) % l) + l) % l;
  let c, h, d;
  if (e < r) ((c = -r / 2 + e), (h = o + a), (d = 0));
  else if ((e -= r) < Math.PI * a) {
    const u = e / a;
    ((c = r / 2 + Math.sin(u) * a), (h = o + Math.cos(u) * a), (d = u));
  } else if ((e -= Math.PI * a) < r)
    ((c = r / 2 - e), (h = o - a), (d = Math.PI));
  else {
    e -= r;
    const u = e / a;
    ((c = -r / 2 - Math.sin(u) * a),
      (h = o - Math.cos(u) * a),
      (d = Math.PI + u));
  }
  return (
    qu.setFromAxisAngle(iQ, d),
    t.compose(b7.set(s.x, h, c), qu, w7.set(1, 1, 1))
  );
}
function oQ(s, e, t, i, n, o = 0.62) {
  const a = 2 * (e - t) + Math.PI * t,
    r = a / n,
    l = [uf(new kt(o, 0.07, r * 0.8), 2762531)];
  if (wt(2)) {
    const u = new kt(o, 0.04, 0.05);
    (u.translate(0, 0.045, 0), l.push(uf(u, 2236187)));
  }
  const c = Eo(l, !1);
  for (const u of l) u.dispose();
  const h = new Pi({ color: 16777215, vertexColors: !0 });
  ((h.userData.baseColor = 16777215),
    (h.userData.camoEligible = !1),
    (h.userData.noWeather = !0));
  const d = new On(c, h, n * s.length);
  return (
    (d.name = "track-links"),
    (d.castShadow = !1),
    (d.receiveShadow = !0),
    (d.userData.track = {
      paths: s.map((u) => ({ len: e, height: t, y: i, x: u, offset: 0 })),
      pitch: r,
      count: n,
    }),
    (d.userData.lodSkip = !0),
    S7(d, 0),
    d.computeBoundingSphere(),
    d.boundingSphere && (d.boundingSphere.radius += 0.2),
    d
  );
}
function S7(s, e) {
  const t = s.userData.track;
  s.userData.posedDistance !== e &&
    ((s.userData.posedDistance = e),
    t.paths.forEach((i, n) => {
      for (let o = 0; o < t.count; o++)
        s.setMatrixAt(n * t.count + o, nQ(i, e + o * t.pitch, M4));
    }),
    (s.instanceMatrix.needsUpdate = !0));
}
const cd = 6844511,
  Is = 5199432,
  pT = 11115632,
  E7 = 9734239,
  no = 2829095,
  Tm = 1710618,
  A7 = 8422780,
  mT = 9067059;
for (const s of [cd, Is, pT, E7, A7, mT]) g7.add(s);
const Zm = () => wt(1),
  aQ = () => wt(2);
function us(s, e, t, i, n, o, a, r = 0, l = 0, c = 0, h = cd) {
  const d = se(e, t, i, h, n, o, a);
  return (d.rotation.set(r, l, c), s.add(d), d);
}
function Wa(s, e, t, i, n, o, a) {
  if (Zm())
    for (let r = 0; r < a; r++) {
      const l = a === 1 ? 0.5 : r / (a - 1),
        c = n + (o - n) * l,
        h =
          e === "x"
            ? Y0(0.035, 0.04, Tm, t, i, c, 6)
            : Hi(0.035, 0.04, Tm, c, i, t, 0.035, 6);
      s.add(h);
    }
}
function Bv(s, e, t, i, n, o, a) {
  Zm() && s.add(se(e, t, i, mT, n, o, a));
}
function yr(s, e, t, i, n, o, a, r, l, c = 0) {
  const h = new re();
  (h.position.set(a, r, l),
    e === "front"
      ? (h.rotation.x = -Math.PI / 2 + c)
      : e === "up"
        ? (h.rotation.x = c)
        : (h.rotation.z = e === "side+" ? -Math.PI / 2 + c : Math.PI / 2 - c));
  for (let d = 0; d < i; d++)
    for (let u = 0; u < t; u++) {
      const f = (u - (t - 1) / 2) * n,
        p = (d - (i - 1) / 2) * o,
        m = se(n * 0.9, 0.075, o * 0.88, (d + u) % 2 ? pT : E7, f, 0.04, p);
      (h.add(m), aQ() && h.add(se(n * 0.5, 0.02, o * 0.12, no, f, 0.085, p)));
    }
  s.add(h);
}
function zv(s, e, t, i, n, o, a, r = 0.6) {
  const l = n - i,
    c = a - o,
    h = (o + a) / 2,
    d = Math.sign(t) || 1,
    u = Math.max(1, Math.round(l / 0.66)),
    f = l / u;
  for (let p = 0; p < u; p++) {
    const m = i + f * (p + 0.5),
      g = p % 2 ? Is : cd,
      y = (p % 2) * 0.035 * d,
      b =
        e === "x"
          ? se(0.085, c, f * 1.04, g, t + y, h, m)
          : se(f * 1.04, c, 0.085, g, m, h, t + y);
    if (
      (e === "x" ? (b.rotation.z = d * 0.09) : (b.rotation.x = -d * 0.09),
      s.add(b),
      Zm())
    ) {
      for (const S of [-0.3, 0.3]) {
        const M = m + S * f;
        s.add(
          e === "x"
            ? Y0(0.03, 0.05, Tm, t + y + d * 0.05, a - 0.1, M, 6)
            : Hi(0.03, 0.05, Tm, M, a - 0.1, t + y + d * 0.05, 0.03, 6),
        );
      }
      s.add(
        e === "x"
          ? se(0.1, 0.06, f * 0.98, Is, t + y + d * 0.02, o + 0.04, m)
          : se(f * 0.98, 0.06, 0.1, Is, m, o + 0.04, t + y + d * 0.02),
      );
    }
  }
  s.add(
    e === "x"
      ? se(0.07, 0.07, l, no, t - d * 0.02, a + 0.02, (i + n) / 2)
      : se(l, 0.07, 0.07, no, (i + n) / 2, a + 0.02, t - d * 0.02),
  );
  for (const p of [i + 0.15, (i + n) / 2, n - 0.15])
    s.add(
      e === "x"
        ? se(0.3, 0.06, 0.06, no, t - d * 0.15, a - 0.08, p)
        : se(0.06, 0.06, 0.3, no, p, a - 0.08, t - d * 0.15),
    );
}
function T7(s, e, t, i, n, o, a, r) {
  const l = new re();
  if (
    (l.position.set(t, i, n),
    (l.rotation.y = e * r),
    l.add(se(o, a, 0.14, Is, 0, 0, 0)),
    l.add(se(o * 0.92, a * 0.8, 0.06, pT, 0, 0, -0.09)),
    Zm())
  ) {
    for (const c of [-0.35, 0, 0.35])
      l.add(Hi(0.028, 0.04, Tm, c * o, a * 0.32, -0.13, 0.028, 6));
    l.add(se(o, 0.03, 0.03, mT, 0, -a / 2 + 0.02, 0.07));
  }
  s.add(l);
}
