// index-BeUlFSPp 247 — position
// Lines 131992-132270 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function n0e(s, e) {
  s.updateMatrixWorld(!0);
  const t = new Map();
  s.traverse((l) => {
    const c = l;
    if (
      !c.isMesh ||
      e.has(c) ||
      c.children.length ||
      !c.geometry ||
      c.isSkinnedMesh ||
      c.isInstancedMesh ||
      Array.isArray(c.material) ||
      c.material.transparent ||
      c.userData.keep
    )
      return;
    let h = c.parent,
      d = c.visible;
    for (; h && h !== s && !e.has(h);) (h.visible || (d = !1), (h = h.parent));
    if (!h || !d) return;
    const u =
      o0e(c.material) +
      "|" +
      a0e(c.geometry) +
      `|${c.castShadow}|${c.receiveShadow}|${c.renderOrder}|${c.frustumCulled}|${c.layers.mask}|${!!c.userData.lodSkip}`;
    let f = t.get(h);
    f || t.set(h, (f = new Map()));
    const p = f.get(u);
    p ? p.push(c) : f.set(u, [c]);
  });
  let i = 0;
  const n = new Rt(),
    o = new Rt();
  for (const [l, c] of t) {
    n.copy(l.matrixWorld).invert();
    for (const h of c.values()) {
      if (h.length < 2) continue;
      const d = [];
      for (const b of h) {
        const S = b.geometry.index
          ? b.geometry.toNonIndexed()
          : b.geometry.clone();
        (S.clearGroups(),
          S.applyMatrix4(o.multiplyMatrices(n, b.matrixWorld)),
          d.push(S));
      }
      const u = h[0],
        p = new Set(h.map((b) => b.material.color?.getHex())).size > 1;
      p &&
        d.forEach((b, S) => {
          const M = h[S].material.color,
            E = b.getAttribute("position").count,
            A = h[S].material.vertexColors ? b.getAttribute("color") : null,
            T = new Float32Array(E * 3);
          for (let x = 0; x < E; x++)
            ((T[x * 3] = M.r * (A ? A.getX(x) : 1)),
              (T[x * 3 + 1] = M.g * (A ? A.getY(x) : 1)),
              (T[x * 3 + 2] = M.b * (A ? A.getZ(x) : 1)));
          b.setAttribute("color", new qt(T, 3));
        });
      const m = Eo(d, !1);
      for (const b of d) b.dispose();
      if (!m) continue;
      let g = u.material;
      if (p) {
        const b = g.clone();
        (b.color.set(16777215), (b.vertexColors = !0), (g = b));
      }
      const y = new Q(m, g);
      ((y.name = "static-merge"),
        (y.castShadow = u.castShadow),
        (y.receiveShadow = u.receiveShadow),
        (y.renderOrder = u.renderOrder),
        (y.frustumCulled = u.frustumCulled),
        (y.layers.mask = u.layers.mask),
        u.userData.lodSkip && (y.userData.lodSkip = !0),
        l.add(y));
      for (const b of h) b.removeFromParent();
      i += h.length - 1;
    }
  }
  const a = [],
    r = (l) => {
      for (const c of [...l.children]) r(c);
      l !== s &&
        !e.has(l) &&
        !l.children.length &&
        l.type === "Group" &&
        a.push(l);
    };
  r(s);
  for (const l of a) (l.removeFromParent(), i++);
  return i;
}
function o0e(s) {
  if (s.onBeforeCompile !== nl.prototype.onBeforeCompile || s.isShaderMaterial)
    return s.uuid;
  const t = s,
    i = !t.map && "color" in s && !s.isMeshStandardMaterial;
  return [
    s.type,
    i ? "vc" : t.color?.getHex(),
    t.emissive?.getHex(),
    t.emissiveIntensity,
    t.map?.uuid,
    t.vertexColors,
    s.side,
    t.flatShading,
    s.opacity,
    s.alphaTest,
    s.toneMapped,
    s.depthTest,
    s.depthWrite,
    s.polygonOffset,
    s.polygonOffsetFactor,
    t.wireframe,
    JSON.stringify({ ...s.userData, lodColor: void 0 }),
  ].join(",");
}
function a0e(s) {
  return Object.keys(s.attributes)
    .sort()
    .map(
      (e) => `${e}:${s.attributes[e].itemSize}:${s.attributes[e].normalized}`,
    )
    .join(",");
}
const y9 = (s, e = 0) => new Pi({ color: s, emissive: e });
function tc(s, e, t, i, n = 0) {
  const o = new Q(new kt(s, e, t), y9(i, n));
  return ((o.castShadow = !0), o);
}
function r0e(s) {
  for (const u of [s.legL, s.legR])
    u.traverse((f) => {
      f instanceof Q && (f.material = y9(1184280));
    });
  const e = tc(0.17, 0.34, 0.02, 15921386);
  e.position.set(0, 1.32, -0.146);
  const t = tc(0.065, 0.3, 0.02, 11736095);
  t.position.set(0, 1.3, -0.158);
  const i = tc(0.08, 0.06, 0.024, 9309976);
  i.position.set(0, 1.46, -0.16);
  const n = tc(0.06, 0.06, 0.02, 15976799, 6965776);
  (n.position.set(0.18, 1.36, -0.15),
    s.group.getObjectByName("pose-root")?.add(e, t, i, n));
  const a = tc(0.44, 0.09, 0.03, 394760);
  a.position.set(0, 0.3, -0.27);
  const r = tc(0.08, 0.02, 0.01, 10470655, 2767450);
  r.position.set(-0.13, 0.33, -0.288);
  const l = tc(0.52, 0.07, 0.52, 1840144);
  l.position.set(0, 0.53, 0);
  const c = tc(0.04, 0.07, 0.05, 1710618);
  c.position.set(0.265, 0.27, -0.02);
  const h = tc(0.015, 0.22, 0.015, 14211288);
  (h.position.set(0.27, 0.12, 0.02), s.head.add(a, r, l, c, h));
  const d = Pd(w.GLOCK).group.clone(!0);
  (d.rotation.set(-Math.PI / 2, 0, 0),
    d.position.set(0.04, -0.04, 0),
    d.scale.setScalar(1.1),
    s.heldMesh.add(d));
}
const l0e = 190,
  c0e = 2.3,
  h0e = (s) => 0.6 + 0.115 * s,
  d0e = 18,
  u0e = 30,
  f0e = 60,
  p0e = 150,
  EL = [
    [tn.HEAD, -0.3, 1.46, -0.3, 0.3, 2.06, 0.3],
    [tn.TORSO, -0.36, 0.76, -0.29, 0.36, 1.52, 0.29],
    [tn.ARM, -0.58, 0.75, -0.29, -0.32, 1.5, 0.29],
    [tn.ARM, 0.32, 0.75, -0.29, 0.58, 1.5, 0.29],
    [tn.LEG, -0.36, -0.02, -0.3, 0.36, 0.84, 0.3],
  ],
  AL = [
    [tn.HEAD, -0.3, 1.16, -0.3, 0.3, 1.77, 0.3],
    [tn.TORSO, -0.36, 0.52, -0.29, 0.36, 1.27, 0.29],
    [tn.ARM, -0.58, 0.49, -0.29, -0.32, 1.25, 0.29],
    [tn.ARM, 0.32, 0.49, -0.29, 0.58, 1.25, 0.29],
    [tn.LEG, -0.36, 0, -0.41, 0.36, 0.65, 0.41],
  ],
  m0e = { uid: "arms-golden-knife", skin: DP, owner: "", kills: 0 };
function TL(s, e, t, i, n) {
  return t
    ? Yu(s, { tone: "npc" })
    : i
      ? Yu(s, { tone: e ? "enemy" : "ally" })
      : e
        ? Yu(s, { tone: "enemy" })
        : Yu(z("militaryBotTag", { name: s }), {
            tone: "neutral",
            color: n?.color,
            suffix: n ? { text: ` [${n.name}]`, color: n.color } : void 0,
          });
}
function g0e(s) {
  ((s.width = 96), (s.height = 16));
  const e = new Si(s),
    t = new Ws(new hn({ map: e, depthTest: !1, fog: !1 }));
  return (Q0(t), t.scale.set(1.2, 0.2, 1), (t.position.y = 2.08), t);
}
function xL(s, e, t) {
  const i = s.getContext("2d"),
    n = Math.max(0, Math.min(1, e / Math.max(1, t)));
  (i.clearRect(0, 0, s.width, s.height),
    (i.fillStyle = "rgba(0,0,0,0.55)"),
    i.fillRect(0, 2, s.width, 12),
    (i.fillStyle = n > 0.45 ? "#48d46a" : n > 0.22 ? "#ffd763" : "#ff553f"),
    i.fillRect(2, 4, Math.max(0, (s.width - 4) * n), 8));
}
function ea(s, e, t, i, n = 0) {
  const o = new Q(
    new kt(s, e, t),
    new El({ color: i, roughness: n ? 0.28 : 0.72, metalness: n }),
  );
  return ((o.castShadow = !0), o);
}
function y0e(s) {
  s.body.material.color.setHex(15326912);
  const a = ea(0.62, 0.18, 0.58, 1526426);
  a.position.set(0, 0.52, 0.01);
  const r = ea(0.65, 0.08, 0.61, 14789938, 0.7);
  r.position.set(0, 0.43, -0.01);
  const l = ea(0.16, 0.55, 0.14, 1526426),
    c = ea(0.16, 0.55, 0.14, 1526426);
  (l.position.set(-0.25, 0.05, -0.2), c.position.set(0.25, 0.05, -0.2));
  const h = ea(0.17, 0.055, 0.15, 14789938, 0.7),
    d = h.clone();
  (h.position.set(-0.25, -0.05, -0.205), d.position.set(0.25, -0.05, -0.205));
  const u = ea(0.07, 0.22, 0.07, 14789938, 0.8);
  (u.position.set(0, 0.63, -0.3),
    (u.rotation.x = -0.18),
    s.head.add(a, r, l, c, h, d, u));
  const f = ea(0.69, 0.14, 0.34, 14789938, 0.65);
  f.position.set(0, 1.43, -0.015);
  const p = ea(0.61, 0.055, 0.35, 1526426, 0.15);
  p.position.set(0, 1.39, -0.025);
  const m = ea(0.59, 0.12, 0.31, 14789938, 0.7);
  m.position.set(0, 0.82, 0);
  const g = ea(0.36, 0.52, 0.08, 15326912);
  g.position.set(0, 0.58, -0.18);
  const y = ea(0.055, 0.31, 0.035, 14789938, 0.75),
    b = ea(0.2, 0.055, 0.035, 14789938, 0.75);
  (y.position.set(0, 1.13, -0.17),
    b.position.set(0, 1.19, -0.17),
    s.group.add(f, p, m, g, y, b));
  for (const S of [s.armL, s.armR]) {
    const M = ea(0.27, 0.16, 0.27, 14789938, 0.65);
    ((M.position.y = -0.47), S.add(M));
  }
  for (const S of [s.legL, s.legR]) {
    const M = ea(0.25, 0.52, 0.25, 1446684, 0.15);
    ((M.position.y = -0.53), S.add(M));
  }
}
function v0e() {
  const s = new re(),
    e = new El({ color: 14724660, metalness: 0.8, roughness: 0.25 }),
    t = new El({ color: 1658538, emissive: 464696, emissiveIntensity: 0.5 }),
    i = new Q(new Tt(0.035, 0.045, 1.35, 7), e);
  ((i.rotation.z = Math.PI / 2), (i.position.x = 0.38));
  const n = new Q(new Gn(0.13, 0.035, 6, 12), e);
  ((n.rotation.y = Math.PI / 2), (n.position.x = 1.05));
  const o = new Q(new f5(0.075), t);
  return (
    (o.position.x = 1.05),
    s.add(i, n, o),
    s.traverse((a) => {
      const r = a;
      r.isMesh && (r.castShadow = !0);
    }),
    s.rotation.set(0, 0, -0.18),
    s.position.set(-0.05, -0.03, 0),
    s
  );
}
