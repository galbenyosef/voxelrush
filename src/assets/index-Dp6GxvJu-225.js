// index-Dp6GxvJu 225 — position
// Lines 124692-124970 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Ine(n, e) {
  n.updateMatrixWorld(!0);
  const t = new Map();
  n.traverse((l) => {
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
    for (; h && h !== n && !e.has(h);) (h.visible || (d = !1), (h = h.parent));
    if (!h || !d) return;
    const u =
      Pne(c.material) +
      "|" +
      One(c.geometry) +
      `|${c.castShadow}|${c.receiveShadow}|${c.renderOrder}|${c.frustumCulled}|${c.layers.mask}|${!!c.userData.lodSkip}`;
    let f = t.get(h);
    f || t.set(h, (f = new Map()));
    const p = f.get(u);
    p ? p.push(c) : f.set(u, [c]);
  });
  let i = 0;
  const s = new bt(),
    o = new bt();
  for (const [l, c] of t) {
    s.copy(l.matrixWorld).invert();
    for (const h of c.values()) {
      if (h.length < 2) continue;
      const d = [];
      for (const b of h) {
        const S = b.geometry.index
          ? b.geometry.toNonIndexed()
          : b.geometry.clone();
        (S.clearGroups(),
          S.applyMatrix4(o.multiplyMatrices(s, b.matrixWorld)),
          d.push(S));
      }
      const u = h[0],
        p =
          new Set(
            h.map((b) => {
              var S;
              return (S = b.material.color) == null ? void 0 : S.getHex();
            }),
          ).size > 1;
      p &&
        d.forEach((b, S) => {
          const M = h[S].material.color,
            x = b.getAttribute("position").count,
            T = h[S].material.vertexColors ? b.getAttribute("color") : null,
            A = new Float32Array(x * 3);
          for (let _ = 0; _ < x; _++)
            ((A[_ * 3] = M.r * (T ? T.getX(_) : 1)),
              (A[_ * 3 + 1] = M.g * (T ? T.getY(_) : 1)),
              (A[_ * 3 + 2] = M.b * (T ? T.getZ(_) : 1)));
          b.setAttribute("color", new oi(A, 3));
        });
      const m = no(d, !1);
      for (const b of d) b.dispose();
      if (!m) continue;
      let y = u.material;
      if (p) {
        const b = y.clone();
        (b.color.set(16777215), (b.vertexColors = !0), (y = b));
      }
      const g = new le(m, y);
      ((g.name = "static-merge"),
        (g.castShadow = u.castShadow),
        (g.receiveShadow = u.receiveShadow),
        (g.renderOrder = u.renderOrder),
        (g.frustumCulled = u.frustumCulled),
        (g.layers.mask = u.layers.mask),
        u.userData.lodSkip && (g.userData.lodSkip = !0),
        l.add(g));
      for (const b of h) b.removeFromParent();
      i += h.length - 1;
    }
  }
  const a = [],
    r = (l) => {
      for (const c of [...l.children]) r(c);
      l !== n &&
        !e.has(l) &&
        !l.children.length &&
        l.type === "Group" &&
        a.push(l);
    };
  r(n);
  for (const l of a) (l.removeFromParent(), i++);
  return i;
}
function Pne(n) {
  var s, o, a;
  if (n.onBeforeCompile !== pr.prototype.onBeforeCompile || n.isShaderMaterial)
    return n.uuid;
  const t = n,
    i = !t.map && "color" in n && !n.isMeshStandardMaterial;
  return [
    n.type,
    i ? "vc" : (s = t.color) == null ? void 0 : s.getHex(),
    (o = t.emissive) == null ? void 0 : o.getHex(),
    t.emissiveIntensity,
    (a = t.map) == null ? void 0 : a.uuid,
    t.vertexColors,
    n.side,
    t.flatShading,
    n.opacity,
    n.alphaTest,
    n.toneMapped,
    n.depthTest,
    n.depthWrite,
    n.polygonOffset,
    n.polygonOffsetFactor,
    t.wireframe,
    JSON.stringify({ ...n.userData, lodColor: void 0 }),
  ].join(",");
}
function One(n) {
  return Object.keys(n.attributes)
    .sort()
    .map(
      (e) => `${e}:${n.attributes[e].itemSize}:${n.attributes[e].normalized}`,
    )
    .join(",");
}
const iP = (n, e = 0) => new gi({ color: n, emissive: e });
function ul(n, e, t, i, s = 0) {
  const o = new le(new Ct(n, e, t), iP(i, s));
  return ((o.castShadow = !0), o);
}
function Nne(n) {
  for (const u of [n.legL, n.legR])
    u.traverse((f) => {
      f instanceof le && (f.material = iP(1184280));
    });
  const e = ul(0.17, 0.34, 0.02, 15921386);
  e.position.set(0, 1.32, -0.146);
  const t = ul(0.065, 0.3, 0.02, 11736095);
  t.position.set(0, 1.3, -0.158);
  const i = ul(0.08, 0.06, 0.024, 9309976);
  i.position.set(0, 1.46, -0.16);
  const s = ul(0.06, 0.06, 0.02, 15976799, 6965776);
  s.position.set(0.18, 1.36, -0.15);
  const o = n.group.getObjectByName("pose-root");
  o == null || o.add(e, t, i, s);
  const a = ul(0.44, 0.09, 0.03, 394760);
  a.position.set(0, 0.3, -0.27);
  const r = ul(0.08, 0.02, 0.01, 10470655, 2767450);
  r.position.set(-0.13, 0.33, -0.288);
  const l = ul(0.52, 0.07, 0.52, 1840144);
  l.position.set(0, 0.53, 0);
  const c = ul(0.04, 0.07, 0.05, 1710618);
  c.position.set(0.265, 0.27, -0.02);
  const h = ul(0.015, 0.22, 0.015, 14211288);
  (h.position.set(0.27, 0.12, 0.02), n.head.add(a, r, l, c, h));
  const d = R0(ITEM.GLOCK).group.clone(!0);
  (d.rotation.set(-Math.PI / 2, 0, 0),
    d.position.set(0.04, -0.04, 0),
    d.scale.setScalar(1.1),
    n.heldMesh.add(d));
}
const Dne = 190,
  Bne = 2.3,
  Hne = (n) => 0.6 + 0.115 * n,
  zne = 18,
  Une = 30,
  Fne = 60,
  Gne = 150,
  jR = [
    [vs.HEAD, -0.3, 1.46, -0.3, 0.3, 2.06, 0.3],
    [vs.TORSO, -0.36, 0.76, -0.29, 0.36, 1.52, 0.29],
    [vs.ARM, -0.58, 0.75, -0.29, -0.32, 1.5, 0.29],
    [vs.ARM, 0.32, 0.75, -0.29, 0.58, 1.5, 0.29],
    [vs.LEG, -0.36, -0.02, -0.3, 0.36, 0.84, 0.3],
  ];
function XR(n, e, t, i, s) {
  return t
    ? Id(n, { tone: "npc" })
    : i
      ? Id(n, { tone: e ? "enemy" : "ally" })
      : e
        ? Id(n, { tone: "enemy" })
        : Id(U("militaryBotTag", { name: n }), {
            tone: "neutral",
            color: s == null ? void 0 : s.color,
            suffix: s ? { text: ` [${s.name}]`, color: s.color } : void 0,
          });
}
function Wne(n) {
  ((n.width = 96), (n.height = 16));
  const e = new bi(n),
    t = new os(new es({ map: e, depthTest: !1, fog: !1 }));
  return (oh(t), t.scale.set(1.2, 0.2, 1), (t.position.y = 2.08), t);
}
function ZR(n, e, t) {
  const i = n.getContext("2d"),
    s = Math.max(0, Math.min(1, e / Math.max(1, t)));
  (i.clearRect(0, 0, n.width, n.height),
    (i.fillStyle = "rgba(0,0,0,0.55)"),
    i.fillRect(0, 2, n.width, 12),
    (i.fillStyle = s > 0.45 ? "#48d46a" : s > 0.22 ? "#ffd763" : "#ff553f"),
    i.fillRect(2, 4, Math.max(0, (n.width - 4) * s), 8));
}
function _o(n, e, t, i, s = 0) {
  const o = new le(
    new Ct(n, e, t),
    new Pr({ color: i, roughness: s ? 0.28 : 0.72, metalness: s }),
  );
  return ((o.castShadow = !0), o);
}
function Vne(n) {
  n.body.material.color.setHex(15326912);
  const a = _o(0.62, 0.18, 0.58, 1526426);
  a.position.set(0, 0.52, 0.01);
  const r = _o(0.65, 0.08, 0.61, 14789938, 0.7);
  r.position.set(0, 0.43, -0.01);
  const l = _o(0.16, 0.55, 0.14, 1526426),
    c = _o(0.16, 0.55, 0.14, 1526426);
  (l.position.set(-0.25, 0.05, -0.2), c.position.set(0.25, 0.05, -0.2));
  const h = _o(0.17, 0.055, 0.15, 14789938, 0.7),
    d = h.clone();
  (h.position.set(-0.25, -0.05, -0.205), d.position.set(0.25, -0.05, -0.205));
  const u = _o(0.07, 0.22, 0.07, 14789938, 0.8);
  (u.position.set(0, 0.63, -0.3),
    (u.rotation.x = -0.18),
    n.head.add(a, r, l, c, h, d, u));
  const f = _o(0.69, 0.14, 0.34, 14789938, 0.65);
  f.position.set(0, 1.43, -0.015);
  const p = _o(0.61, 0.055, 0.35, 1526426, 0.15);
  p.position.set(0, 1.39, -0.025);
  const m = _o(0.59, 0.12, 0.31, 14789938, 0.7);
  m.position.set(0, 0.82, 0);
  const y = _o(0.36, 0.52, 0.08, 15326912);
  y.position.set(0, 0.58, -0.18);
  const g = _o(0.055, 0.31, 0.035, 14789938, 0.75),
    b = _o(0.2, 0.055, 0.035, 14789938, 0.75);
  (g.position.set(0, 1.13, -0.17),
    b.position.set(0, 1.19, -0.17),
    n.group.add(f, p, m, y, g, b));
  for (const S of [n.armL, n.armR]) {
    const M = _o(0.27, 0.16, 0.27, 14789938, 0.65);
    ((M.position.y = -0.47), S.add(M));
  }
  for (const S of [n.legL, n.legR]) {
    const M = _o(0.25, 0.52, 0.25, 1446684, 0.15);
    ((M.position.y = -0.53), S.add(M));
  }
}
function $ne() {
  const n = new pe(),
    e = new Pr({ color: 14724660, metalness: 0.8, roughness: 0.25 }),
    t = new Pr({ color: 1658538, emissive: 464696, emissiveIntensity: 0.5 }),
    i = new le(new xt(0.035, 0.045, 1.35, 7), e);
  ((i.rotation.z = Math.PI / 2), (i.position.x = 0.38));
  const s = new le(new xs(0.13, 0.035, 6, 12), e);
  ((s.rotation.y = Math.PI / 2), (s.position.x = 1.05));
  const o = new le(new cy(0.075), t);
  return (
    (o.position.x = 1.05),
    n.add(i, s, o),
    n.traverse((a) => {
      const r = a;
      r.isMesh && (r.castShadow = !0);
    }),
    n.rotation.set(0, 0, -0.18),
    n.position.set(-0.05, -0.03, 0),
    n
  );
}
