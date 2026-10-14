// assets__index-Dp6GxvJu 38 — root
// Lines 40060-40364 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class pG {
  constructor(e) {
    w(this, "root", new pe());
    w(
      this,
      "outline",
      new Dl(
        new ag(new Ct(1, 1, 1)),
        new Eo({
          color: 7399888,
          transparent: !0,
          opacity: 0.35,
          depthTest: !1,
        }),
      ),
    );
    w(
      this,
      "beacon",
      new Dl(
        new ag(new Ct(1.01, 1.01, 1.01)),
        new Eo({ color: 12778239, depthTest: !1 }),
      ),
    );
    w(
      this,
      "ghostMaterial",
      new qt({
        color: 3135156,
        transparent: !0,
        opacity: 0.42,
        depthWrite: !1,
        side: Ai,
        toneMapped: !1,
      }),
    );
    w(
      this,
      "ghostEdgeMaterial",
      new Eo({
        color: 15400953,
        transparent: !0,
        opacity: 0.5,
        depthWrite: !1,
      }),
    );
    w(this, "ghost", null);
    w(this, "ghostEdges", null);
    w(this, "issueMarkers", null);
    w(this, "chunks", new Set());
    w(this, "shellKey", "");
    w(this, "lastKey", "");
    w(this, "nextCheck", 0);
    w(this, "message", "");
    (this.root.add(this.outline, this.beacon),
      (this.root.visible = !1),
      (this.root.renderOrder = Gi.marker),
      (this.outline.renderOrder = this.beacon.renderOrder = Gi.marker),
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
    const i = new Ct(0.92, 0.92, 0.92),
      s = new hs(i, this.ghostMaterial, Math.max(1, e.length));
    ((s.frustumCulled = !1), (s.renderOrder = Gi.marker));
    const o = new bt();
    (e.forEach((c, h) => {
      (o.makeTranslation(c.x - t.x + 0.5, c.y - t.y + 0.5, c.z - t.z + 0.5),
        s.setMatrixAt(h, o));
    }),
      (s.count = e.length),
      (s.instanceMatrix.needsUpdate = !0),
      (this.ghost = s),
      this.root.add(s));
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
      for (const [f, p, m, y, g, b] of r)
        a.push(h + f, d + p, u + m, h + y, d + g, u + b);
    }
    const l = new ci();
    (l.setAttribute("position", new It(a, 3)),
      (this.ghostEdges = new Dl(l, this.ghostEdgeMaterial)),
      (this.ghostEdges.frustumCulled = !1),
      (this.ghostEdges.renderOrder = Gi.marker),
      this.root.add(this.ghostEdges));
  }
  update(e, t, i, s, o) {
    const a = Zc(e);
    if (!a || !t || t.ny !== 1) {
      this.hide();
      return;
    }
    const r = t.bx,
      l = t.by + 1,
      c = t.bz,
      h = `${e},${r},${l},${c},${i},${o}`;
    if (
      ((this.root.visible = !0),
      h === this.lastKey && performance.now() < this.nextCheck)
    )
      return;
    ((this.lastKey = h), (this.nextCheck = performance.now() + 200));
    const d = JF(a, r, l, c, i);
    this.chunks.clear();
    for (const g of d)
      this.chunks.add(`${Math.floor(g.x / 16)},${Math.floor(g.z / 16)}`);
    const u = eG(d, l, s);
    this.message = u
      ? tG(u, o)
      : `${a.width}×${a.depth}×${a.height} · ${o ? "Ready · the site is cleared automatically" : "Можно строить · участок расчистится сам"}`;
    const f = u ? 14173246 : 3135156;
    (this.outline.material.color.set(f),
      this.ghostMaterial.color.set(f),
      this.ghostEdgeMaterial.color.set(u ? 16769760 : 15400953));
    const p = `${e},${i}`;
    (p !== this.shellKey &&
      ((this.shellKey = p), this.buildGhost(IT(d), { x: r, y: l, z: c })),
      this.root.position.set(r, l, c));
    const m = [1 / 0, 1 / 0, 1 / 0],
      y = [-1 / 0, -1 / 0, -1 / 0];
    for (const g of d)
      [g.x, g.y, g.z].forEach((b, S) => {
        ((m[S] = Math.min(m[S], b)), (y[S] = Math.max(y[S], b + 1)));
      });
    (this.outline.position.set(
      (m[0] + y[0]) / 2 - r,
      (m[1] + y[1]) / 2 - l,
      (m[2] + y[2]) / 2 - c,
    ),
      this.outline.scale.set(y[0] - m[0], y[1] - m[1], y[2] - m[2]),
      this.beacon.position.set(0.5, 0.5, 0.5));
  }
  showBlocks(e, t, i) {
    if ((this.hide(), !e.length)) return;
    ((this.root.visible = !0),
      this.root.position.set(t.x, t.y, t.z),
      this.buildGhost(IT(e), t),
      (this.ghostMaterial.opacity = 0.27),
      this.ghostEdges && (this.ghostEdges.visible = !1),
      this.ghostMaterial.color.set(i.length ? 15118930 : 3135156),
      this.ghostEdgeMaterial.color.set(i.length ? 16766869 : 15400953),
      this.outline.material.color.set(i.length ? 16752711 : 7399888));
    const s = [1 / 0, 1 / 0, 1 / 0],
      o = [-1 / 0, -1 / 0, -1 / 0];
    for (const a of e)
      [a.x, a.y, a.z].forEach((r, l) => {
        ((s[l] = Math.min(s[l], r)), (o[l] = Math.max(o[l], r + 1)));
      });
    (this.outline.position.set(
      (s[0] + o[0]) / 2 - t.x,
      (s[1] + o[1]) / 2 - t.y,
      (s[2] + o[2]) / 2 - t.z,
    ),
      this.outline.scale.set(o[0] - s[0], o[1] - s[1], o[2] - s[2]),
      this.beacon.position.set(0.5, 0.5, 0.5));
    for (const a of e)
      this.chunks.add(`${Math.floor(a.x / 16)},${Math.floor(a.z / 16)}`);
    if (i.length) {
      const a = new hs(
          new Ct(1.09, 1.09, 1.09),
          new qt({
            color: 16724016,
            transparent: !0,
            opacity: 0.75,
            wireframe: !0,
            depthTest: !1,
          }),
          i.length,
        ),
        r = new bt();
      (i.forEach((l, c) => {
        (r.makeTranslation(l.x - t.x + 0.5, l.y - t.y + 0.5, l.z - t.z + 0.5),
          a.setMatrixAt(c, r));
      }),
        (a.instanceMatrix.needsUpdate = !0),
        (a.frustumCulled = !1),
        (a.renderOrder = Gi.marker + 1),
        (this.issueMarkers = a),
        this.root.add(a));
    }
  }
}
const Ek = 4,
  Hr = (n) => n === v.CHEST || n === v.MILITARY_CHEST,
  mG = 231,
  PT = 232,
  O2 = 233,
  Or = 234,
  gG = 235,
  xk = 236,
  um = 237,
  yG = 238,
  vG = (() => {
    const n = [],
      e = (t, i, s = {}) => n.push({ box: t, tile: i, ...s });
    e([0.0625, 0, 0.0625, 0.9375, 0.625, 0.9375], mG, { top: xk });
    for (const t of [0.05, 0.86])
      for (const i of [0.05, 0.86]) e([t, 0, i, t + 0.09, 0.625, i + 0.09], O2);
    e([0.05, 0, 0.05, 0.95, 0.05, 0.95], O2);
    for (const t of [0.2, 0.73])
      e([t, 0.05, 0.055, t + 0.07, 0.625, 0.945], Or);
    (e([0.055, 0.625, 0.055, 0.945, 0.82, 0.945], PT, { bottom: O2, lid: !0 }),
      e([0.1, 0.82, 0.1, 0.9, 0.875, 0.9], PT, { lid: !0 }));
    for (const t of [0.2, 0.73])
      (e([t, 0.62, 0.045, t + 0.07, 0.83, 0.955], Or, { lid: !0 }),
        e([t, 0.82, 0.09, t + 0.07, 0.885, 0.91], Or, { lid: !0 }));
    for (const t of [0.045, 0.855])
      for (const i of [0.045, 0.855])
        e([t, 0.7, i, t + 0.1, 0.83, i + 0.1], Or, { lid: !0 });
    return (
      e([0.43, 0.48, 0.03, 0.57, 0.74, 0.055], gG, { lid: !0, fit: !0 }),
      e([0.48, 0.53, 0.024, 0.52, 0.62, 0.031], Or, { lid: !0, fit: !0 }),
      {
        parts: n,
        hingeY: 0.625,
        hingeZ: 0.945,
        openAngle: 1.85,
        envelope: [0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375],
      }
    );
  })(),
  bG = (() => {
    const n = [],
      e = (t, i, s = {}) => n.push({ box: t, tile: i, ...s });
    e([0.05, 0.05, 0.14, 0.95, 0.58, 0.86], um, { top: xk });
    for (const t of [0.1, 0.78]) e([t, 0, 0.12, t + 0.12, 0.06, 0.88], Or);
    for (const t of [0.03, 0.9]) e([t, 0.04, 0.125, t + 0.07, 0.58, 0.875], um);
    for (const t of [0.025, 0.905])
      for (const i of [0.12, 0.83])
        e([t, 0.04, i, t + 0.07, 0.58, i + 0.05], Or);
    for (const t of [0.005, 0.965]) e([t, 0.3, 0.4, t + 0.03, 0.36, 0.6], Or);
    (e([0.3, 0.16, 0.128, 0.7, 0.44, 0.14], yG, { fit: !0 }),
      e([0.03, 0.58, 0.12, 0.97, 0.7, 0.88], um, { bottom: O2, lid: !0 }),
      e([0.07, 0.7, 0.16, 0.93, 0.74, 0.84], um, { lid: !0 }),
      e([0.4, 0.74, 0.46, 0.6, 0.775, 0.54], Or, { lid: !0 }));
    for (const t of [0.18, 0.74])
      e([t, 0.46, 0.105, t + 0.08, 0.64, 0.125], Or, { lid: !0, fit: !0 });
    return {
      parts: n,
      hingeY: 0.58,
      hingeZ: 0.88,
      openAngle: 1.75,
      envelope: [0.03, 0, 0.12, 0.97, 0.775, 0.88],
    };
  })(),
  Cp = (n) => (n === v.MILITARY_CHEST ? bG : vG);
function Tk(n, e) {
  let [t, i, s, o, a, r] = n;
  for (let l = 0; l < (e & 3); l++) [t, s, o, r] = [1 - r, t, 1 - s, o];
  return [t, i, s, o, a, r];
}
function kp(n, e, t, i, s) {
  const o = s & 3;
  if (s & Ek) return o;
  for (const a of [0, 2, 1, 3]) {
    const r = (o + a) & 3,
      [l, c] = xo[r],
      h = n(e + l, t, i + c);
    if (!LC(h) && !Hr(h)) return r;
  }
  return o;
}
function KS(n, e, t = "all") {
  const i = [];
  for (const s of Cp(n).parts)
    (t === "body" && s.lid) ||
      (t === "lid" && !s.lid) ||
      i.push({ ...s, box: Tk(s.box, e) });
  return i;
}
const Tw = (n, e) => [Tk(Cp(n).envelope, e)];
function wG(n) {
  return n === v.WOOD_CHAIR || n === v.WOOD_BENCH || n === v.SOFA;
}
