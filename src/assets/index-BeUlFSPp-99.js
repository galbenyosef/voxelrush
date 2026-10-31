// index-BeUlFSPp 99 — math
// Lines 60178-60521 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function bZ() {
  const s = new re(),
    e = [],
    t = [],
    i = new Pi({ color: 7767954 }),
    n = new Pi({ color: 2503228 }),
    o = new Pi({ color: 4541267 }),
    a = new oo({
      color: 6004137,
      shininess: 110,
      transparent: !0,
      opacity: 0.72,
    });
  ((i.userData = { baseColor: 7767954, camoEligible: !0 }),
    (n.userData = { baseColor: 2503228, camoEligible: !1 }),
    (o.userData = { baseColor: 4541267, camoEligible: !1 }));
  const r = (y, b, S, M, E, A = s) => {
      const T = new Q(y, b);
      return (
        T.position.set(S, M, E),
        (T.castShadow = !0),
        (T.receiveShadow = !0),
        A.add(T),
        T
      );
    },
    l = (y, b, S, M, E, A, T = i, x = s) => r(new kt(y, b, S), T, M, E, A, x),
    c = (y, b, S, M, E, A, T = i) => {
      const x = r(new Tt(y, b, S, 12), T, M, E, A);
      return ((x.rotation.x = -Math.PI / 2), x);
    };
  (t.push(
    c(0.06, 0.62, 3.6, 0, 1.6, -5.5, n),
    c(0.62, 0.88, 3.4, 0, 1.6, -2),
    c(0.88, 0.7, 4.3, 0, 1.6, 1.85),
  ),
    c(0.7, 0.55, 1.8, 0, 1.6, 4.9));
  const h = (y, b, S, M = s) => {
    const E = new il();
    (y.forEach(([T, x], R) => (R ? E.lineTo(T, x) : E.moveTo(T, x))),
      E.closePath());
    const A = new sl(E, { depth: 0.12, bevelEnabled: !1 });
    return (A.rotateX(Math.PI / 2), r(A, S, 0, b, 0, M));
  };
  for (const y of [-1, 1]) {
    (h(
      [
        [y * 0.5, -3.2],
        [y * 1.25, -2.4],
        [y * 5.2, 1.3],
        [y * 5, 2.3],
        [y * 0.65, 1.3],
      ],
      1.52,
      i,
    ),
      h(
        [
          [y * 0.5, 3.1],
          [y * 2.6, 4.7],
          [y * 2.8, 5.7],
          [y * 0.5, 5.2],
        ],
        1.7,
        i,
      ));
    const b = new re();
    (b.position.set(y * 3.9, 1.5, 1.75),
      (b.userData.motion = y < 0 ? "aileron-left" : "aileron-right"),
      l(1.8, 0.09, 0.48, 0, 0, 0.24, i, b),
      s.add(b),
      e.push(b));
    const S = new re();
    (S.position.set(y * 1.4, 1.68, 5.15),
      (S.userData.motion = "elevator"),
      l(1.7, 0.08, 0.5, 0, 0, 0.25, i, S),
      s.add(S),
      e.push(S));
    const M = new re();
    (M.position.set(y * 0.63, 1.8, 3.5), (M.rotation.z = y * -0.2));
    const E = new il();
    (E.moveTo(0, 0),
      E.lineTo(1.5, 2.4),
      E.lineTo(2.2, 2.1),
      E.lineTo(2.6, 0),
      E.closePath());
    const A = new sl(E, { depth: 0.12, bevelEnabled: !1 });
    (A.rotateY(-Math.PI / 2), r(A, i, 0, 0, 0, M), s.add(M));
    const T = l(0.12, 1.2, 0.4, y * 0.9, 3.1, 5.65, n);
    ((T.userData.motion = "rudder"),
      e.push(T),
      l(0.62, 0.63, 1.65, y * 0.8, 1.25, -1.7, n),
      l(0.7, 0.1, 1.75, y * 0.8, 1.65, -1.7),
      c(0.37, 0.43, 2.4, y * 0.43, 1.48, 4.95, o),
      c(0.3, 0.36, 0.2, y * 0.43, 1.48, 6.2, n));
    const x = new Gi({
        transparent: !0,
        depthWrite: !1,
        blending: rs,
        side: Mi,
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
      R = new re();
    (R.position.set(y * 0.43, 1.48, 6.23), (R.userData.motion = "jet-exhaust"));
    const _ = new fa(0.32, 2.7, 12, 8, !0);
    (_.translate(0, 1.35, 0), _.rotateX(Math.PI / 2));
    const C = new Q(_, x);
    ((C.frustumCulled = !1), R.add(C));
    const P = new fa(0.19, 1.35, 10, 1, !0);
    (P.translate(0, 0.675, 0),
      P.rotateX(Math.PI / 2),
      R.add(
        new Q(
          P,
          new Zt({
            color: 12181503,
            transparent: !0,
            opacity: 0.7,
            depthWrite: !1,
            blending: rs,
            side: Mi,
          }),
        ),
      ),
      s.add(R),
      e.push(R));
    const O = new re();
    (O.position.set(y * 0.9, 1.08, 0.8),
      (O.userData.motion = "jet-gear"),
      l(0.1, 0.8, 0.12, 0, -0.4, 0, o, O));
    const B = r(new Tt(0.3, 0.3, 0.22, 10), n, 0, -0.8, 0, O);
    if (((B.rotation.z = Math.PI / 2), s.add(O), e.push(O), wt(1))) {
      (l(0.13, 0.35, 0.9, y * 2.5, 1.25, 0.3, n),
        c(0.09, 0.09, 2.1, y * 2.5, 0.95, -0.2, o));
      for (let H = 0; H < 4; H++)
        l(0.45, 0.025, 0.045, y * 0.78, 2.02, 0.1 + H * 0.22, n);
      (l(
        0.13,
        0.08,
        0.18,
        y * 5.06,
        1.59,
        1.6,
        new Zt({ color: y < 0 ? 16728115 : 4521884 }),
      ),
        l(0.07, 0.07, 1.3, y * 0.68, 1.7, -3.8, o));
    }
  }
  const d = r(new ws(1, 16, 8), a, 0, 2.12, -2.4);
  (d.scale.set(0.56, 0.56, 1.5), t.push(d));
  const u = l(0.85, 0.13, 2.9, 0, 1.96, -2.4, n);
  t.push(u);
  for (const y of [-2.8, -1.35])
    (l(0.5, 0.14, 0.52, 0, 1.62, y, n), l(0.5, 0.55, 0.13, 0, 1.9, y + 0.3, n));
  l(0.63, 0.22, 0.2, 0, 1.98, -3.25, n);
  const f = new Zt({ color: 1126194 }),
    p = new Zt({ color: 7792560 });
  ((f.userData = { baseColor: 1126194, camoEligible: !1 }),
    (p.userData = { baseColor: 7792560, camoEligible: !1 }));
  for (const y of [-0.2, 0, 0.2]) {
    l(0.15, 0.105, 0.009, y, 2.025, -3.143, f);
    for (let b = 0; b < 3; b++)
      l(0.09 - b * 0.018, 0.004, 0.003, y, 2.055 - b * 0.026, -3.136, p);
    l(0.008, 0.075, 0.003, y - 0.06, 2.025, -3.136, p);
  }
  l(
    0.31,
    0.16,
    0.008,
    0,
    2.17,
    -3.22,
    new Zt({ color: 6414262, transparent: !0, opacity: 0.1, depthWrite: !1 }),
  );
  for (const y of [-1, 1])
    (l(0.003, 0.13, 0.004, y * 0.15, 2.17, -3.212, p),
      l(0.05, 0.003, 0.004, y * 0.126, 2.235, -3.212, p));
  const m = new re();
  (m.position.set(0, 1.12, -3.5),
    (m.userData.motion = "jet-gear"),
    l(0.1, 0.82, 0.12, 0, -0.42, 0, o, m));
  const g = r(new Tt(0.26, 0.26, 0.2, 10), n, 0, -0.86, 0, m);
  return (
    (g.rotation.z = Math.PI / 2),
    s.add(m),
    e.push(m),
    Fn(s, "red", -5.14, 1.6, 1.62, 0.06),
    Fn(s, "green", 5.14, 1.6, 1.62, 0.06),
    Fn(s, "strobe", -5.1, 1.62, 1.95, 0.045),
    Fn(s, "strobe", 5.1, 1.62, 1.95, 0.045),
    Fn(s, "white", 0, 1.62, 5.85, 0.05),
    Fn(s, "beacon", 0, 2.28, 0.6, 0.06),
    Fn(s, "beacon", 0, 1, 0.2, 0.06),
    (s.name = "Fighter jet"),
    { group: s, props: [], motionParts: e, fpvHide: t }
  );
}
function wZ(s, e, t, i, n) {
  const o = performance.now() / 1e3;
  for (const a of s)
    if (
      (a.userData.motion === "jet-gear" &&
        (a.rotation.z +=
          ((i || n < 23 ? 0 : Math.PI * 0.48) - a.rotation.z) *
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
const KR = new Map();
function Pv(s) {
  let e = KR.get(s);
  if (e) return e;
  const t = lo[s] ?? [];
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
    KR.set(s, e),
    e
  );
}
function YR(s, e) {
  const t = s.bounds ?? Pv(s.type),
    i = e.bounds ?? Pv(e.type),
    n = e.x - s.x,
    o = e.z - s.z,
    a = { x: Math.cos(s.yaw), z: -Math.sin(s.yaw) },
    r = { x: Math.sin(s.yaw), z: Math.cos(s.yaw) },
    l = { x: Math.cos(e.yaw), z: -Math.sin(e.yaw) },
    c = { x: Math.sin(e.yaw), z: Math.cos(e.yaw) };
  let h = -1 / 0;
  for (const d of [a, r, l, c]) {
    const u = (f, p, m) =>
      f.width * Math.abs(d.x * p.x + d.z * p.z) +
      f.length * Math.abs(d.x * m.x + d.z * m.z);
    h = Math.max(h, Math.abs(n * d.x + o * d.z) - u(t, a, r) - u(i, l, c));
  }
  return h;
}
function r7(s, e, t, i = 1.2) {
  const n = s.bounds ?? Pv(s.type),
    o = Math.atan2(Math.sin(e.yaw - s.yaw), Math.cos(e.yaw - s.yaw)),
    a = Math.max(
      1,
      Math.ceil(
        (Math.hypot(e.x - s.x, e.z - s.z) +
          Math.abs(o) * Math.hypot(n.width, n.length)) /
          0.35,
      ),
    );
  for (const r of t) {
    if (r.id === s.id || (r.planet ?? 0) !== (s.planet ?? 0)) continue;
    if (r.type === L.CARRIER && !r.bounds) {
      const h = (lo[r.type] ?? []).map((d) => {
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
      if (!r7(s, e, h, i)) return !1;
      continue;
    }
    const l = r.bounds ?? Pv(r.type);
    if (
      Math.hypot(r.x - s.x, r.z - s.z) >
      Math.hypot(n.width, n.length) +
        Math.hypot(l.width, l.length) +
        i +
        Math.hypot(e.x - s.x, e.z - s.z)
    )
      continue;
    const c = YR(s, r);
    for (let h = 1; h <= a; h++) {
      const d = h / a,
        u = {
          ...e,
          x: s.x + (e.x - s.x) * d,
          y: s.y + (e.y - s.y) * d,
          z: s.z + (e.z - s.z) * d,
          yaw: s.yaw + o * d,
        };
      if (
        u.y + n.bottom >= r.y + l.top - 0.001 ||
        u.y + n.top <= r.y + l.bottom + 0.001
      )
        continue;
      const f = YR(u, r),
        p =
          f > c + 1e-5 ||
          (f >= c - 1e-5 &&
            Math.hypot(u.x - r.x, u.z - r.z) >
              Math.hypot(s.x - r.x, s.z - r.z) + 1e-5);
      if (f < i && (c >= i || !p)) return !1;
    }
  }
  return !0;
}
function MZ(s, e, t, i) {
  let n = s.groundAt(e, t, i);
  for (
    ;
    Number.isFinite(n) &&
    n > 0 &&
    en(s.getBlock(Math.floor(e), Math.floor(n) - 1, Math.floor(t)));
  )
    n = s.groundAt(e, t, n - 1.01);
  return n;
}
const jR = new Map();
