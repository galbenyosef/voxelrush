// index-Dp6GxvJu 78 — math
// Lines 52775-53118 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function R$() {
  const n = new pe(),
    e = [],
    t = [],
    i = new gi({ color: 7767954 }),
    s = new gi({ color: 2503228 }),
    o = new gi({ color: 4541267 }),
    a = new Us({
      color: 6004137,
      shininess: 110,
      transparent: !0,
      opacity: 0.72,
    });
  ((i.userData = { baseColor: 7767954, camoEligible: !0 }),
    (s.userData = { baseColor: 2503228, camoEligible: !1 }),
    (o.userData = { baseColor: 4541267, camoEligible: !1 }));
  const r = (g, b, S, M, x, T = n) => {
      const A = new le(g, b);
      return (
        A.position.set(S, M, x),
        (A.castShadow = !0),
        (A.receiveShadow = !0),
        T.add(A),
        A
      );
    },
    l = (g, b, S, M, x, T, A = i, _ = n) => r(new Ct(g, b, S), A, M, x, T, _),
    c = (g, b, S, M, x, T, A = i) => {
      const _ = r(new xt(g, b, S, 12), A, M, x, T);
      return ((_.rotation.x = -Math.PI / 2), _);
    };
  (t.push(
    c(0.06, 0.62, 3.6, 0, 1.6, -5.5, s),
    c(0.62, 0.88, 3.4, 0, 1.6, -2),
    c(0.88, 0.7, 4.3, 0, 1.6, 1.85),
  ),
    c(0.7, 0.55, 1.8, 0, 1.6, 4.9));
  const h = (g, b, S, M = n) => {
    const x = new ql();
    (g.forEach(([A, _], C) => (C ? x.lineTo(A, _) : x.moveTo(A, _))),
      x.closePath());
    const T = new Kl(x, { depth: 0.12, bevelEnabled: !1 });
    return (T.rotateX(Math.PI / 2), r(T, S, 0, b, 0, M));
  };
  for (const g of [-1, 1]) {
    (h(
      [
        [g * 0.5, -3.2],
        [g * 1.25, -2.4],
        [g * 5.2, 1.3],
        [g * 5, 2.3],
        [g * 0.65, 1.3],
      ],
      1.52,
      i,
    ),
      h(
        [
          [g * 0.5, 3.1],
          [g * 2.6, 4.7],
          [g * 2.8, 5.7],
          [g * 0.5, 5.2],
        ],
        1.7,
        i,
      ));
    const b = new pe();
    (b.position.set(g * 3.9, 1.5, 1.75),
      (b.userData.motion = g < 0 ? "aileron-left" : "aileron-right"),
      l(1.8, 0.09, 0.48, 0, 0, 0.24, i, b),
      n.add(b),
      e.push(b));
    const S = new pe();
    (S.position.set(g * 1.4, 1.68, 5.15),
      (S.userData.motion = "elevator"),
      l(1.7, 0.08, 0.5, 0, 0, 0.25, i, S),
      n.add(S),
      e.push(S));
    const M = new pe();
    (M.position.set(g * 0.63, 1.8, 3.5), (M.rotation.z = g * -0.2));
    const x = new ql();
    (x.moveTo(0, 0),
      x.lineTo(1.5, 2.4),
      x.lineTo(2.2, 2.1),
      x.lineTo(2.6, 0),
      x.closePath());
    const T = new Kl(x, { depth: 0.12, bevelEnabled: !1 });
    (T.rotateY(-Math.PI / 2), r(T, i, 0, 0, 0, M), n.add(M));
    const A = l(0.12, 1.2, 0.4, g * 0.9, 3.1, 5.65, s);
    ((A.userData.motion = "rudder"),
      e.push(A),
      l(0.62, 0.63, 1.65, g * 0.8, 1.25, -1.7, s),
      l(0.7, 0.1, 1.75, g * 0.8, 1.65, -1.7),
      c(0.37, 0.43, 2.4, g * 0.43, 1.48, 4.95, o),
      c(0.3, 0.36, 0.2, g * 0.43, 1.48, 6.2, s));
    const _ = new sn({
        transparent: !0,
        depthWrite: !1,
        blending: cn,
        side: Ai,
        uniforms: { time: { value: 0 }, power: { value: 0 } },
        vertexShader:
          "varying vec2 flameUv; void main(){flameUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
        fragmentShader: `varying vec2 flameUv; uniform float time; uniform float power;
      void main(){float t=flameUv.y;float shock=pow(.5+.5*cos(t*46.0-time*8.0),7.0);
      float ripple=.85+.15*sin(flameUv.x*38.0+t*27.0-time*31.0);
      float fade=pow(1.0-t,1.4)*smoothstep(0.0,.06,t);
      vec3 color=mix(vec3(.18,.36,1.0),vec3(.65,.86,1.0),shock*.8+(1.0-t)*.2);
      gl_FragColor=vec4(color,fade*ripple*(.3+power*.48));}`,
      }),
      C = new pe();
    (C.position.set(g * 0.43, 1.48, 6.23), (C.userData.motion = "jet-exhaust"));
    const R = new ma(0.32, 2.7, 12, 8, !0);
    (R.translate(0, 1.35, 0), R.rotateX(Math.PI / 2));
    const L = new le(R, _);
    ((L.frustumCulled = !1), C.add(L));
    const N = new ma(0.19, 1.35, 10, 1, !0);
    (N.translate(0, 0.675, 0),
      N.rotateX(Math.PI / 2),
      C.add(
        new le(
          N,
          new qt({
            color: 12181503,
            transparent: !0,
            opacity: 0.7,
            depthWrite: !1,
            blending: cn,
            side: Ai,
          }),
        ),
      ),
      n.add(C),
      e.push(C));
    const D = new pe();
    (D.position.set(g * 0.9, 1.08, 0.8),
      (D.userData.motion = "jet-gear"),
      l(0.1, 0.8, 0.12, 0, -0.4, 0, o, D));
    const H = r(new xt(0.3, 0.3, 0.22, 10), s, 0, -0.8, 0, D);
    if (((H.rotation.z = Math.PI / 2), n.add(D), e.push(D), yt(1))) {
      (l(0.13, 0.35, 0.9, g * 2.5, 1.25, 0.3, s),
        c(0.09, 0.09, 2.1, g * 2.5, 0.95, -0.2, o));
      for (let G = 0; G < 4; G++)
        l(0.45, 0.025, 0.045, g * 0.78, 2.02, 0.1 + G * 0.22, s);
      (l(
        0.13,
        0.08,
        0.18,
        g * 5.06,
        1.59,
        1.6,
        new qt({ color: g < 0 ? 16728115 : 4521884 }),
      ),
        l(0.07, 0.07, 1.3, g * 0.68, 1.7, -3.8, o));
    }
  }
  const d = r(new mn(1, 16, 8), a, 0, 2.12, -2.4);
  (d.scale.set(0.56, 0.56, 1.5), t.push(d));
  const u = l(0.85, 0.13, 2.9, 0, 1.96, -2.4, s);
  t.push(u);
  for (const g of [-2.8, -1.35])
    (l(0.5, 0.14, 0.52, 0, 1.62, g, s), l(0.5, 0.55, 0.13, 0, 1.9, g + 0.3, s));
  l(0.63, 0.22, 0.2, 0, 1.98, -3.25, s);
  const f = new qt({ color: 1126194 }),
    p = new qt({ color: 7792560 });
  ((f.userData = { baseColor: 1126194, camoEligible: !1 }),
    (p.userData = { baseColor: 7792560, camoEligible: !1 }));
  for (const g of [-0.2, 0, 0.2]) {
    l(0.15, 0.105, 0.009, g, 2.025, -3.143, f);
    for (let b = 0; b < 3; b++)
      l(0.09 - b * 0.018, 0.004, 0.003, g, 2.055 - b * 0.026, -3.136, p);
    l(0.008, 0.075, 0.003, g - 0.06, 2.025, -3.136, p);
  }
  l(
    0.31,
    0.16,
    0.008,
    0,
    2.17,
    -3.22,
    new qt({ color: 6414262, transparent: !0, opacity: 0.1, depthWrite: !1 }),
  );
  for (const g of [-1, 1])
    (l(0.003, 0.13, 0.004, g * 0.15, 2.17, -3.212, p),
      l(0.05, 0.003, 0.004, g * 0.126, 2.235, -3.212, p));
  const m = new pe();
  (m.position.set(0, 1.12, -3.5),
    (m.userData.motion = "jet-gear"),
    l(0.1, 0.82, 0.12, 0, -0.42, 0, o, m));
  const y = r(new xt(0.26, 0.26, 0.2, 10), s, 0, -0.86, 0, m);
  return (
    (y.rotation.z = Math.PI / 2),
    n.add(m),
    e.push(m),
    Es(n, "red", -5.14, 1.6, 1.62, 0.06),
    Es(n, "green", 5.14, 1.6, 1.62, 0.06),
    Es(n, "strobe", -5.1, 1.62, 1.95, 0.045),
    Es(n, "strobe", 5.1, 1.62, 1.95, 0.045),
    Es(n, "white", 0, 1.62, 5.85, 0.05),
    Es(n, "beacon", 0, 2.28, 0.6, 0.06),
    Es(n, "beacon", 0, 1, 0.2, 0.06),
    (n.name = "Fighter jet"),
    { group: n, props: [], motionParts: e, fpvHide: t }
  );
}
function C$(n, e, t, i, s) {
  const o = performance.now() / 1e3;
  for (const a of n)
    if (
      (a.userData.motion === "jet-gear" &&
        (a.rotation.z +=
          ((i || s < 23 ? 0 : Math.PI * 0.48) - a.rotation.z) *
          (1 - Math.exp(-2 * e))),
      a.userData.motion === "jet-exhaust")
    ) {
      ((a.visible = t > 0.08),
        a.scale.set(
          0.82 + t * 0.18,
          0.82 + t * 0.18,
          0.22 + t * (1.05 + Math.sin(o * 43) * 0.035),
        ));
      const r = a.children[0].material;
      ((r.uniforms.time.value = o), (r.uniforms.power.value = t));
    }
}
const xA = new Map();
function Cg(n) {
  let e = xA.get(n);
  if (e) return e;
  const t = io[n] ?? [];
  return (
    (e = {
      width: Math.max(
        0.5,
        ...t.flatMap((i) => [Math.abs(i.min.x), Math.abs(i.max.x)]),
      ),
      length: Math.max(
        0.5,
        ...t.flatMap((i) => [Math.abs(i.min.z), Math.abs(i.max.z)]),
      ),
      bottom: Math.min(0, ...t.map((i) => i.min.y)),
      top: Math.max(1, ...t.map((i) => i.max.y)),
    }),
    xA.set(n, e),
    e
  );
}
function TA(n, e) {
  const t = n.bounds ?? Cg(n.type),
    i = e.bounds ?? Cg(e.type),
    s = e.x - n.x,
    o = e.z - n.z,
    a = { x: Math.cos(n.yaw), z: -Math.sin(n.yaw) },
    r = { x: Math.sin(n.yaw), z: Math.cos(n.yaw) },
    l = { x: Math.cos(e.yaw), z: -Math.sin(e.yaw) },
    c = { x: Math.sin(e.yaw), z: Math.cos(e.yaw) };
  let h = -1 / 0;
  for (const d of [a, r, l, c]) {
    const u = (f, p, m) =>
      f.width * Math.abs(d.x * p.x + d.z * p.z) +
      f.length * Math.abs(d.x * m.x + d.z * m.z);
    h = Math.max(h, Math.abs(s * d.x + o * d.z) - u(t, a, r) - u(i, l, c));
  }
  return h;
}
function aL(n, e, t, i = 1.2) {
  const s = n.bounds ?? Cg(n.type),
    o = Math.atan2(Math.sin(e.yaw - n.yaw), Math.cos(e.yaw - n.yaw)),
    a = Math.max(
      1,
      Math.ceil(
        (Math.hypot(e.x - n.x, e.z - n.z) +
          Math.abs(o) * Math.hypot(s.width, s.length)) /
          0.35,
      ),
    );
  for (const r of t) {
    if (r.id === n.id || (r.planet ?? 0) !== (n.planet ?? 0)) continue;
    if (r.type === VEHICLE_KIND.CARRIER && !r.bounds) {
      const h = (io[r.type] ?? []).map((d) => {
        const u = (d.min.x + d.max.x) / 2,
          f = (d.min.z + d.max.z) / 2;
        return {
          ...r,
          x: r.x + u * Math.cos(r.yaw) + f * Math.sin(r.yaw),
          z: r.z - u * Math.sin(r.yaw) + f * Math.cos(r.yaw),
          bounds: {
            width: (d.max.x - d.min.x) / 2,
            length: (d.max.z - d.min.z) / 2,
            bottom: d.min.y,
            top: d.max.y,
          },
        };
      });
      if (!aL(n, e, h, i)) return !1;
      continue;
    }
    const l = r.bounds ?? Cg(r.type);
    if (
      Math.hypot(r.x - n.x, r.z - n.z) >
      Math.hypot(s.width, s.length) +
        Math.hypot(l.width, l.length) +
        i +
        Math.hypot(e.x - n.x, e.z - n.z)
    )
      continue;
    const c = TA(n, r);
    for (let h = 1; h <= a; h++) {
      const d = h / a,
        u = {
          ...e,
          x: n.x + (e.x - n.x) * d,
          y: n.y + (e.y - n.y) * d,
          z: n.z + (e.z - n.z) * d,
          yaw: n.yaw + o * d,
        };
      if (
        u.y + s.bottom >= r.y + l.top - 0.001 ||
        u.y + s.top <= r.y + l.bottom + 0.001
      )
        continue;
      const f = TA(u, r),
        p =
          f > c + 1e-5 ||
          (f >= c - 1e-5 &&
            Math.hypot(u.x - r.x, u.z - r.z) >
              Math.hypot(n.x - r.x, n.z - r.z) + 1e-5);
      if (f < i && (c >= i || !p)) return !1;
    }
  }
  return !0;
}
function k$(n, e, t, i) {
  let s = n.groundAt(e, t, i);
  for (
    ;
    Number.isFinite(s) &&
    s > 0 &&
    $n(n.getBlock(Math.floor(e), Math.floor(s) - 1, Math.floor(t)));
  )
    s = n.groundAt(e, t, s - 1.01);
  return s;
}
const AA = new Map();
