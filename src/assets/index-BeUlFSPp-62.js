// index-BeUlFSPp 62 — root
// Lines 49317-49600 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class MY {
  root = new re();
  outline = new kl(
    new tv(new kt(1, 1, 1)),
    new Zo({ color: 7399888, transparent: !0, opacity: 0.35, depthTest: !1 }),
  );
  beacon = new kl(
    new tv(new kt(1.01, 1.01, 1.01)),
    new Zo({ color: 12778239, depthTest: !1 }),
  );
  ghostMaterial = new Zt({
    color: 3135156,
    transparent: !0,
    opacity: 0.42,
    depthWrite: !1,
    side: Mi,
    toneMapped: !1,
  });
  ghostEdgeMaterial = new Zo({
    color: 15400953,
    transparent: !0,
    opacity: 0.5,
    depthWrite: !1,
  });
  ghost = null;
  ghostEdges = null;
  issueMarkers = null;
  chunks = new Set();
  shellKey = "";
  lastKey = "";
  nextCheck = 0;
  message = "";
  constructor(e) {
    (this.root.add(this.outline, this.beacon),
      (this.root.visible = !1),
      (this.root.renderOrder = zi.marker),
      (this.outline.renderOrder = this.beacon.renderOrder = zi.marker),
      e.add(this.root));
  }
  hide() {
    ((this.root.visible = !1),
      (this.lastKey = ""),
      (this.message = ""),
      this.chunks.clear(),
      this.issueMarkers &&
        (this.root.remove(this.issueMarkers),
        this.issueMarkers.geometry.dispose(),
        this.issueMarkers.material.dispose(),
        (this.issueMarkers = null)));
  }
  buildGhost(e, t) {
    (this.ghost && (this.root.remove(this.ghost), this.ghost.dispose()),
      this.ghostEdges &&
        (this.root.remove(this.ghostEdges),
        this.ghostEdges.geometry.dispose()));
    const i = new kt(0.92, 0.92, 0.92),
      n = new On(i, this.ghostMaterial, Math.max(1, e.length));
    ((n.frustumCulled = !1), (n.renderOrder = zi.marker));
    const o = new Rt();
    (e.forEach((c, h) => {
      (o.makeTranslation(c.x - t.x + 0.5, c.y - t.y + 0.5, c.z - t.z + 0.5),
        n.setMatrixAt(h, o));
    }),
      (n.count = e.length),
      (n.instanceMatrix.needsUpdate = !0),
      (this.ghost = n),
      this.root.add(n));
    const a = [],
      r = [
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 0],
        [1, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1],
      ];
    for (const c of e) {
      const h = c.x - t.x,
        d = c.y - t.y,
        u = c.z - t.z;
      for (const [f, p, m, g, y, b] of r)
        a.push(h + f, d + p, u + m, h + g, d + y, u + b);
    }
    const l = new oi();
    (l.setAttribute("position", new Dt(a, 3)),
      (this.ghostEdges = new kl(l, this.ghostEdgeMaterial)),
      (this.ghostEdges.frustumCulled = !1),
      (this.ghostEdges.renderOrder = zi.marker),
      this.root.add(this.ghostEdges));
  }
  update(e, t, i, n, o) {
    const a = W0(e);
    if (!a || !t || t.ny !== 1) {
      this.hide();
      return;
    }
    const r = t.bx,
      l = t.by + 1,
      c = t.bz,
      h = `${e},${r},${l},${c},${i},${$0()}`;
    if (
      ((this.root.visible = !0),
      h === this.lastKey && performance.now() < this.nextCheck)
    )
      return;
    ((this.lastKey = h), (this.nextCheck = performance.now() + 200));
    const d = g$(a, r, l, c, i);
    this.chunks.clear();
    for (const y of d)
      this.chunks.add(`${Math.floor(y.x / 16)},${Math.floor(y.z / 16)}`);
    const u = y$(d, l, n);
    this.message = u
      ? Po(v$(u, o))
      : `${a.width}×${a.depth}×${a.height} · ${I("Ready · the site is cleared automatically", "Можно строить · участок расчистится сам")}`;
    const f = u ? 14173246 : 3135156;
    (this.outline.material.color.set(f),
      this.ghostMaterial.color.set(f),
      this.ghostEdgeMaterial.color.set(u ? 16769760 : 15400953));
    const p = `${e},${i}`;
    (p !== this.shellKey &&
      ((this.shellKey = p), this.buildGhost(oR(d), { x: r, y: l, z: c })),
      this.root.position.set(r, l, c));
    const m = [1 / 0, 1 / 0, 1 / 0],
      g = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of d)
      [y.x, y.y, y.z].forEach((b, S) => {
        ((m[S] = Math.min(m[S], b)), (g[S] = Math.max(g[S], b + 1)));
      });
    (this.outline.position.set(
      (m[0] + g[0]) / 2 - r,
      (m[1] + g[1]) / 2 - l,
      (m[2] + g[2]) / 2 - c,
    ),
      this.outline.scale.set(g[0] - m[0], g[1] - m[1], g[2] - m[2]),
      this.beacon.position.set(0.5, 0.5, 0.5));
  }
  showBlocks(e, t, i) {
    if ((this.hide(), !e.length)) return;
    ((this.root.visible = !0),
      this.root.position.set(t.x, t.y, t.z),
      this.buildGhost(oR(e), t),
      (this.ghostMaterial.opacity = 0.27),
      this.ghostEdges && (this.ghostEdges.visible = !1),
      this.ghostMaterial.color.set(i.length ? 15118930 : 3135156),
      this.ghostEdgeMaterial.color.set(i.length ? 16766869 : 15400953),
      this.outline.material.color.set(i.length ? 16752711 : 7399888));
    const n = [1 / 0, 1 / 0, 1 / 0],
      o = [-1 / 0, -1 / 0, -1 / 0];
    for (const a of e)
      [a.x, a.y, a.z].forEach((r, l) => {
        ((n[l] = Math.min(n[l], r)), (o[l] = Math.max(o[l], r + 1)));
      });
    (this.outline.position.set(
      (n[0] + o[0]) / 2 - t.x,
      (n[1] + o[1]) / 2 - t.y,
      (n[2] + o[2]) / 2 - t.z,
    ),
      this.outline.scale.set(o[0] - n[0], o[1] - n[1], o[2] - n[2]),
      this.beacon.position.set(0.5, 0.5, 0.5));
    for (const a of e)
      this.chunks.add(`${Math.floor(a.x / 16)},${Math.floor(a.z / 16)}`);
    if (i.length) {
      const a = new On(
          new kt(1.09, 1.09, 1.09),
          new Zt({
            color: 16724016,
            transparent: !0,
            opacity: 0.75,
            wireframe: !0,
            depthTest: !1,
          }),
          i.length,
        ),
        r = new Rt();
      (i.forEach((l, c) => {
        (r.makeTranslation(l.x - t.x + 0.5, l.y - t.y + 0.5, l.z - t.z + 0.5),
          a.setMatrixAt(c, r));
      }),
        (a.instanceMatrix.needsUpdate = !0),
        (a.frustumCulled = !1),
        (a.renderOrder = zi.marker + 1),
        (this.issueMarkers = a),
        this.root.add(a));
    }
  }
}
const PO = 4,
  Cl = (s) => s === v.CHEST || s === v.MILITARY_CHEST,
  SY = 231,
  aR = 232,
  Ey = 233,
  Al = 234,
  EY = 235,
  OO = 236,
  eg = 237,
  AY = 238,
  TY = (() => {
    const s = [],
      e = (t, i, n = {}) => s.push({ box: t, tile: i, ...n });
    e([0.0625, 0, 0.0625, 0.9375, 0.625, 0.9375], SY, { top: OO });
    for (const t of [0.05, 0.86])
      for (const i of [0.05, 0.86]) e([t, 0, i, t + 0.09, 0.625, i + 0.09], Ey);
    e([0.05, 0, 0.05, 0.95, 0.05, 0.95], Ey);
    for (const t of [0.2, 0.73])
      e([t, 0.05, 0.055, t + 0.07, 0.625, 0.945], Al);
    (e([0.055, 0.625, 0.055, 0.945, 0.82, 0.945], aR, { bottom: Ey, lid: !0 }),
      e([0.1, 0.82, 0.1, 0.9, 0.875, 0.9], aR, { lid: !0 }));
    for (const t of [0.2, 0.73])
      (e([t, 0.62, 0.045, t + 0.07, 0.83, 0.955], Al, { lid: !0 }),
        e([t, 0.82, 0.09, t + 0.07, 0.885, 0.91], Al, { lid: !0 }));
    for (const t of [0.045, 0.855])
      for (const i of [0.045, 0.855])
        e([t, 0.7, i, t + 0.1, 0.83, i + 0.1], Al, { lid: !0 });
    return (
      e([0.43, 0.48, 0.03, 0.57, 0.74, 0.055], EY, { lid: !0, fit: !0 }),
      e([0.48, 0.53, 0.024, 0.52, 0.62, 0.031], Al, { lid: !0, fit: !0 }),
      {
        parts: s,
        hingeY: 0.625,
        hingeZ: 0.945,
        openAngle: 1.85,
        envelope: [0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375],
      }
    );
  })(),
  xY = (() => {
    const s = [],
      e = (t, i, n = {}) => s.push({ box: t, tile: i, ...n });
    e([0.05, 0.05, 0.14, 0.95, 0.58, 0.86], eg, { top: OO });
    for (const t of [0.1, 0.78]) e([t, 0, 0.12, t + 0.12, 0.06, 0.88], Al);
    for (const t of [0.03, 0.9]) e([t, 0.04, 0.125, t + 0.07, 0.58, 0.875], eg);
    for (const t of [0.025, 0.905])
      for (const i of [0.12, 0.83])
        e([t, 0.04, i, t + 0.07, 0.58, i + 0.05], Al);
    for (const t of [0.005, 0.965]) e([t, 0.3, 0.4, t + 0.03, 0.36, 0.6], Al);
    (e([0.3, 0.16, 0.128, 0.7, 0.44, 0.14], AY, { fit: !0 }),
      e([0.03, 0.58, 0.12, 0.97, 0.7, 0.88], eg, { bottom: Ey, lid: !0 }),
      e([0.07, 0.7, 0.16, 0.93, 0.74, 0.84], eg, { lid: !0 }),
      e([0.4, 0.74, 0.46, 0.6, 0.775, 0.54], Al, { lid: !0 }));
    for (const t of [0.18, 0.74])
      e([t, 0.46, 0.105, t + 0.08, 0.64, 0.125], Al, { lid: !0, fit: !0 });
    return {
      parts: s,
      hingeY: 0.58,
      hingeZ: 0.88,
      openAngle: 1.75,
      envelope: [0.03, 0, 0.12, 0.97, 0.775, 0.88],
    };
  })(),
  vm = (s) => (s === v.MILITARY_CHEST ? xY : TY);
function NO(s, e) {
  let [t, i, n, o, a, r] = s;
  for (let l = 0; l < (e & 3); l++) [t, n, o, r] = [1 - r, t, 1 - n, o];
  return [t, i, n, o, a, r];
}
function bm(s, e, t, i, n) {
  const o = n & 3;
  if (n & PO) return o;
  for (const a of [0, 2, 1, 3]) {
    const r = (o + a) & 3,
      [l, c] = Qo[r],
      h = s(e + l, t, i + c);
    if (!YI(h) && !Cl(h)) return r;
  }
  return o;
}
function WA(s, e, t = "all") {
  const i = [];
  for (const n of vm(s).parts)
    (t === "body" && n.lid) ||
      (t === "lid" && !n.lid) ||
      i.push({ ...n, box: NO(n.box, e) });
  return i;
}
const i4 = (s, e) => [NO(vm(s).envelope, e)];
function _Y(s) {
  return s === v.WOOD_CHAIR || s === v.WOOD_BENCH || s === v.SOFA;
}
