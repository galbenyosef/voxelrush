// assets__index-Dp6GxvJu 83 — math
// Lines 54359-54697 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function mL(n, e, t, i, s = 0, o = 0, a = 0) {
  const r = new mn(1, yt(2) ? 24 : 16, yt(2) ? 14 : 10);
  return (r.scale(n / 2, e / 2, t / 2), C0(new le(r, ss(i)), s, o, a));
}
function gL(n) {
  const e = new ql();
  return (
    n.forEach(([t, i], s) => (s ? e.lineTo(t, i) : e.moveTo(t, i))),
    e.closePath(),
    e
  );
}
function Ia(n, e, t, i = 0, s = 0.035) {
  const o = yt(1) && s > 0,
    a = Math.max(0.01, e - (o ? s * 2 : 0)),
    r = new Kl(gL(n), {
      depth: a,
      bevelEnabled: o,
      bevelThickness: s,
      bevelSize: s * 0.6,
      bevelSegments: 1,
      curveSegments: 4,
    });
  return (
    r.rotateY(-Math.PI / 2),
    r.translate(e / 2 - (o ? s : 0), 0, 0),
    C0(new le(r, ss(t)), i, 0, 0)
  );
}
function Rl(n, e, t, i = 0, s = 0.035) {
  const o = yt(1) && s > 0,
    a = Math.max(0.01, e - (o ? s * 2 : 0)),
    r = new Kl(gL(n.map(([l, c]) => [l, -c])), {
      depth: a,
      bevelEnabled: o,
      bevelThickness: s,
      bevelSize: s * 0.6,
      bevelSegments: 1,
      curveSegments: 4,
    });
  return (
    r.rotateX(-Math.PI / 2),
    r.translate(0, o ? s : 0, 0),
    C0(new le(r, ss(t)), 0, i, 0)
  );
}
const Ig = new Map(),
  qd = (n, e) => {
    const t = n.index ? n.toNonIndexed() : n;
    t !== n && n.dispose();
    const i = new ze(e),
      s = t.getAttribute("position").count,
      o = new Float32Array(s * 3);
    for (let a = 0; a < s; a++) i.toArray(o, a * 3);
    t.setAttribute("color", new oi(o, 3));
    for (const a of Object.keys(t.attributes))
      ["position", "normal", "color"].includes(a) || t.deleteAttribute(a);
    return t;
  };
function rq(n, e = 0.35) {
  const t = yt(2),
    i = `${n}:${e}:${t}:${yt(1)}`;
  let s = Ig.get(i);
  if (s) return s;
  const o = [],
    a = t ? 16 : 10,
    r = (l, c, h = 0) => {
      (l.translate(0, h, 0), o.push(qd(l, c)));
    };
  if (!yt(1))
    r(new xt(1, 1, e, 6), n === "road" || n === "sprocket" ? 2763559 : 1776409);
  else if (n === "sprocket") {
    if (
      (r(new xt(1, 1, e, a), 2829352),
      r(new xt(0.55, 0.55, e * 1.08, a), 4869444),
      yt(1))
    )
      for (let l = 0; l < 10; l++) {
        const c = new Ct(0.22, e * 0.6, 0.3);
        (c.translate(0, 0, 1.05),
          c.rotateY((l / 10) * Math.PI * 2),
          o.push(qd(c, 3421487)));
      }
  } else if (n === "road")
    (r(new xt(1, 1, e, t ? 12 : 8), 1776409),
      r(new xt(0.84, 0.84, e * 1.06, t ? 12 : 8), 5659468),
      r(new xt(0.3, 0.38, e * 1.2, 6), 3816756, e * 0.05));
  else {
    const l = new xt(1, 1, e, t ? 28 : 12, 1);
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
        new xt(
          n === "apc" ? 0.62 : 0.58,
          n === "apc" ? 0.62 : 0.58,
          e * 1.04,
          a,
        ),
        n === "apc" ? 4608317 : 4936515,
      ),
      r(new xt(0.24, 0.3, e * 1.18, t ? 8 : 6), 3027754, e * 0.02),
      t)
    )
      for (let c = 0; c < 5; c++) {
        const h = new Ct(0.08, e * 1.24, 0.08),
          d = (c / 5) * Math.PI * 2;
        (h.translate(Math.cos(d) * 0.38, 0, Math.sin(d) * 0.38),
          o.push(qd(h, 9146244)));
      }
  }
  s = no(o, !1);
  for (const l of o) l.dispose();
  return (s.computeBoundingSphere(), Ig.set(i, s), s);
}
function lq(n, e) {
  const t = `lod:${n}:${e}`;
  let i = Ig.get(t);
  return (i || ((i = qd(new xt(1, 1, n, 8), e)), Ig.set(t, i)), i);
}
function Pg(n, e, t = 0.35) {
  const i = new gi({ color: 16777215, vertexColors: !0 });
  ((i.userData.baseColor = 16777215),
    (i.userData.camoEligible = !1),
    (i.userData.noWeather = !0));
  const s = new hs(rq(e, t), i, n.length);
  return (
    (s.name = "wheel-set"),
    (s.castShadow = !1),
    (s.receiveShadow = !0),
    (s.userData.motion = "wheel-set"),
    (s.userData.wheels = n),
    (s.userData.phase = 0),
    (s.userData.steer = 0),
    (s.userData.lodGeometry = lq(
      t,
      e === "road" || e === "sprocket" ? 2763559 : 2039837,
    )),
    bL(s),
    s.computeBoundingSphere(),
    s
  );
}
const Gw = new bt(),
  Ld = new Jt(),
  cq = new Jt(),
  hq = new Jt(),
  yL = new k(),
  vL = new k(),
  dq = new k(1, 0, 0),
  FA = new k(0, 1, 0),
  uq = new k(0, 0, 1);
function bL(n) {
  const e = n.userData.wheels,
    t = n.userData.phase,
    i = n.userData.steer;
  (n.userData.posedPhase === t && Math.abs(n.userData.posedSteer - i) < 1e-4) ||
    ((n.userData.posedPhase = t),
    (n.userData.posedSteer = i),
    e.forEach((s, o) => {
      (Ld.setFromAxisAngle(uq, s.x < 0 ? Math.PI / 2 : -Math.PI / 2),
        s.steer && i && Ld.premultiply(hq.setFromAxisAngle(FA, i)),
        Ld.multiply(cq.setFromAxisAngle(FA, ((s.x < 0 ? 1 : -1) * t) / s.r)),
        Gw.compose(yL.set(s.x, s.y, s.z), Ld, vL.set(s.r, 1, s.r)),
        n.setMatrixAt(o, Gw));
    }),
    (n.instanceMatrix.needsUpdate = !0));
}
function fq(n, e, t) {
  const { len: i, height: s, y: o } = n,
    a = s / 2,
    r = i - s,
    l = 2 * r + Math.PI * s;
  e = (((e + n.offset) % l) + l) % l;
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
    Ld.setFromAxisAngle(dq, d),
    t.compose(yL.set(n.x, h, c), Ld, vL.set(1, 1, 1))
  );
}
function pq(n, e, t, i, s, o = 0.62) {
  const a = 2 * (e - t) + Math.PI * t,
    r = a / s,
    l = [qd(new Ct(o, 0.07, r * 0.8), 2762531)];
  if (yt(2)) {
    const u = new Ct(o, 0.04, 0.05);
    (u.translate(0, 0.045, 0), l.push(qd(u, 2236187)));
  }
  const c = no(l, !1);
  for (const u of l) u.dispose();
  const h = new gi({ color: 16777215, vertexColors: !0 });
  ((h.userData.baseColor = 16777215),
    (h.userData.camoEligible = !1),
    (h.userData.noWeather = !0));
  const d = new hs(c, h, s * n.length);
  return (
    (d.name = "track-links"),
    (d.castShadow = !1),
    (d.receiveShadow = !0),
    (d.userData.track = {
      paths: n.map((u) => ({ len: e, height: t, y: i, x: u, offset: 0 })),
      pitch: r,
      count: s,
    }),
    (d.userData.lodSkip = !0),
    wL(d, 0),
    d.computeBoundingSphere(),
    d.boundingSphere && (d.boundingSphere.radius += 0.2),
    d
  );
}
function wL(n, e) {
  const t = n.userData.track;
  n.userData.posedDistance !== e &&
    ((n.userData.posedDistance = e),
    t.paths.forEach((i, s) => {
      for (let o = 0; o < t.count; o++)
        n.setMatrixAt(s * t.count + o, fq(i, e + o * t.pitch, Gw));
    }),
    (n.instanceMatrix.needsUpdate = !0));
}
const d0 = 6844511,
  An = 5199432,
  v4 = 11115632,
  ML = 9734239,
  zs = 2829095,
  Bp = 1710618,
  SL = 8422780,
  b4 = 9067059;
for (const n of [d0, An, v4, ML, SL, b4]) pL.add(n);
const h1 = () => yt(1),
  mq = () => yt(2);
function en(n, e, t, i, s, o, a, r = 0, l = 0, c = 0, h = d0) {
  const d = ce(e, t, i, h, s, o, a);
  return (d.rotation.set(r, l, c), n.add(d), d);
}
function fa(n, e, t, i, s, o, a) {
  if (h1())
    for (let r = 0; r < a; r++) {
      const l = a === 1 ? 0.5 : r / (a - 1),
        c = s + (o - s) * l,
        h =
          e === "x"
            ? Jc(0.035, 0.04, Bp, t, i, c, 6)
            : Ci(0.035, 0.04, Bp, c, i, t, 0.035, 6);
      n.add(h);
    }
}
function Og(n, e, t, i, s, o, a) {
  h1() && n.add(ce(e, t, i, b4, s, o, a));
}
function Pa(n, e, t, i, s, o, a, r, l, c = 0) {
  const h = new pe();
  (h.position.set(a, r, l),
    e === "front"
      ? (h.rotation.x = -Math.PI / 2 + c)
      : e === "up"
        ? (h.rotation.x = c)
        : (h.rotation.z = e === "side+" ? -Math.PI / 2 + c : Math.PI / 2 - c));
  for (let d = 0; d < i; d++)
    for (let u = 0; u < t; u++) {
      const f = (u - (t - 1) / 2) * s,
        p = (d - (i - 1) / 2) * o,
        m = ce(s * 0.9, 0.075, o * 0.88, (d + u) % 2 ? v4 : ML, f, 0.04, p);
      (h.add(m), mq() && h.add(ce(s * 0.5, 0.02, o * 0.12, zs, f, 0.085, p)));
    }
  n.add(h);
}
function Ng(n, e, t, i, s, o, a, r = 0.6) {
  const l = s - i,
    c = a - o,
    h = (o + a) / 2,
    d = Math.sign(t) || 1,
    u = Math.max(1, Math.round(l / 0.66)),
    f = l / u;
  for (let p = 0; p < u; p++) {
    const m = i + f * (p + 0.5),
      y = p % 2 ? An : d0,
      g = (p % 2) * 0.035 * d,
      b =
        e === "x"
          ? ce(0.085, c, f * 1.04, y, t + g, h, m)
          : ce(f * 1.04, c, 0.085, y, m, h, t + g);
    if (
      (e === "x" ? (b.rotation.z = d * 0.09) : (b.rotation.x = -d * 0.09),
      n.add(b),
      h1())
    ) {
      for (const S of [-0.3, 0.3]) {
        const M = m + S * f;
        n.add(
          e === "x"
            ? Jc(0.03, 0.05, Bp, t + g + d * 0.05, a - 0.1, M, 6)
            : Ci(0.03, 0.05, Bp, M, a - 0.1, t + g + d * 0.05, 0.03, 6),
        );
      }
      n.add(
        e === "x"
          ? ce(0.1, 0.06, f * 0.98, An, t + g + d * 0.02, o + 0.04, m)
          : ce(f * 0.98, 0.06, 0.1, An, m, o + 0.04, t + g + d * 0.02),
      );
    }
  }
  n.add(
    e === "x"
      ? ce(0.07, 0.07, l, zs, t - d * 0.02, a + 0.02, (i + s) / 2)
      : ce(l, 0.07, 0.07, zs, (i + s) / 2, a + 0.02, t - d * 0.02),
  );
  for (const p of [i + 0.15, (i + s) / 2, s - 0.15])
    n.add(
      e === "x"
        ? ce(0.3, 0.06, 0.06, zs, t - d * 0.15, a - 0.08, p)
        : ce(0.06, 0.06, 0.3, zs, p, a - 0.08, t - d * 0.15),
    );
}
