// index-BeUlFSPp 168 — math
// Lines 95277-95942 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Yse {
  constructor(e, t) {
    ((this.atlas = e),
      (this.high = t),
      (this.CONFETTI = t ? 520 : 150),
      (this.conf = {
        p: new Float32Array(this.CONFETTI * 3),
        v: new Float32Array(this.CONFETTI * 3),
        r: new Float32Array(this.CONFETTI * 4),
        s: new Float32Array(this.CONFETTI),
        alive: new Uint8Array(this.CONFETTI),
      }),
      (this.scene.background = new Ge(329482)),
      this.scene.add(this.stage),
      this.build());
  }
  scene = new Cd();
  camera = new qn(34, 1, 0.1, 120);
  figures = [];
  disposables = [];
  stage = new re();
  cones = new Map();
  trims = new Map();
  numerals = new Map();
  rings = new Map();
  pointLights = new Map();
  wall;
  floorMat;
  key;
  confetti;
  conf;
  glitter = null;
  haze = [];
  t = 0;
  time = 0;
  band = { top: 0, bottom: 1, width: 1, height: 1 };
  dummy = new Xt();
  tmpV = new k();
  tmpQ = new hi();
  burstDone = !1;
  CONFETTI;
  visible = !1;
  reduced =
    typeof matchMedia < "u" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  keep(e) {
    return (this.disposables.push(e), e);
  }
  build() {
    const e = this.high,
      t = this.keep(Wse("#ffb547"));
    this.floorMat = this.keep(
      new El({ map: t, roughness: 0.42, metalness: 0.35 }),
    );
    const i = new Q(this.keep(new Bl(13, 96)), this.floorMat),
      n = new Q(
        this.keep(new Z0(12.95, 60, 96, 1)),
        this.keep(new El({ color: 461068, roughness: 0.42, metalness: 0.35 })),
      );
    ((n.rotation.x = -Math.PI / 2),
      (n.position.y = -0.002),
      this.stage.add(n),
      (i.rotation.x = -Math.PI / 2),
      (i.receiveShadow = e),
      this.stage.add(i),
      (this.wall = this.keep(
        new Gi({
          vertexShader: Kse,
          fragmentShader: qse,
          side: Mo,
          depthWrite: !1,
          uniforms: {
            uColor: { value: new Ge(16758087) },
            uColor2: { value: new Ge(16777215) },
            uTime: { value: 0 },
          },
        }),
      )));
    const o = new Q(
      this.keep(new Tt(12, 12, 14, 96, 1, !0, Math.PI * 0.3, Math.PI * 1.4)),
      this.wall,
    );
    if (
      (o.position.set(0, 6.4, 1.2),
      this.stage.add(o),
      this.scene.add(new z0(12176895, 2760728, e ? 1.7 : 2.2)),
      (this.key = new Dl(16773596, e ? 3.4 : 3)),
      this.key.position.set(2.5, 7.5, 7),
      this.key.target.position.set(0, 1.2, 0),
      e)
    ) {
      ((this.key.castShadow = !0), this.key.shadow.mapSize.set(1024, 1024));
      const d = this.key.shadow.camera;
      ((d.left = -4.5),
        (d.right = 4.5),
        (d.top = 5),
        (d.bottom = -1.5),
        (d.near = 2),
        (d.far = 20),
        (this.key.shadow.bias = -6e-4),
        (this.key.shadow.normalBias = 0.02));
    }
    this.scene.add(this.key, this.key.target);
    const a = new Dl(9417983, e ? 1.6 : 1.2);
    (a.position.set(-4, 5, -6), this.scene.add(a));
    for (const d of [1, 2, 3]) {
      const u = l0[d],
        f = new re();
      (f.position.set(u.x, 0, u.z), this.stage.add(f));
      const p = this.keep(
          new El({ color: 1712168, roughness: 0.55, metalness: 0.45 }),
        ),
        m = new Q(this.keep(new kt(1.5, u.h, 1.5)), p);
      ((m.position.y = u.h / 2),
        (m.castShadow = m.receiveShadow = e),
        f.add(m));
      const g = new Q(
        this.keep(new kt(1.6, 0.08, 1.6)),
        this.keep(new El({ color: 2831166, roughness: 0.35, metalness: 0.6 })),
      );
      ((g.position.y = u.h + 0.04),
        (g.castShadow = g.receiveShadow = e),
        f.add(g));
      const y = this.keep(
        new El({
          color: u.color,
          emissive: u.color,
          emissiveIntensity: 0.15,
          roughness: 0.3,
          metalness: 0.8,
        }),
      );
      this.trims.set(d, y);
      const b = new Q(this.keep(new kt(1.54, 0.05, 1.54)), y);
      ((b.position.y = u.h - 0.03), f.add(b));
      const S = new Q(this.keep(new kt(1.62, 0.06, 1.62)), y);
      ((S.position.y = 0.03), f.add(S));
      for (const C of [-1, 1]) {
        const P = new Q(this.keep(new kt(0.035, u.h - 0.16, 0.035)), y);
        (P.position.set(C * 0.74, u.h / 2, 0.74), f.add(P));
      }
      const M = this.keep(
        new Zt({
          map: this.keep(Gse(u.label, u.glow)),
          transparent: !0,
          opacity: 0.35,
          toneMapped: !1,
        }),
      );
      this.numerals.set(d, M);
      const E = new Q(this.keep(new ms(0.9, Math.min(0.9, u.h - 0.14))), M);
      (E.position.set(0, u.h / 2, 0.755), f.add(E));
      const A = new Q(
        this.keep(new ms(1.3, 1.3)),
        this.keep(
          new Zt({
            map: this.keep(
              Ng(
                [
                  [0, "#000000aa"],
                  [0.55, "#00000044"],
                  [1, "#00000000"],
                ],
                128,
              ),
            ),
            transparent: !0,
            depthWrite: !1,
          }),
        ),
      );
      ((A.rotation.x = -Math.PI / 2), (A.position.y = u.h + 0.085), f.add(A));
      const T = this.keep(
          new Gi({
            vertexShader: $se,
            fragmentShader: Vse,
            transparent: !0,
            depthWrite: !1,
            blending: rs,
            side: Mi,
            uniforms: {
              uColor: { value: new Ge(u.color).lerp(new Ge(16777215), 0.55) },
              uOpacity: { value: 0 },
              uHeight: { value: 7 },
            },
          }),
        ),
        x = new Q(this.keep(new Tt(0.18, 1.25, 7, 40, 1, !0)), T);
      (x.position.set(u.x, u.h + 3.5, u.z),
        (x.renderOrder = 3),
        this.scene.add(x),
        this.cones.set(d, x));
      const R = this.keep(
          new Zt({
            map: this.keep(
              Ng(
                [
                  [0, "#ffffff00"],
                  [0.62, "#ffffff00"],
                  [0.72, u.glow],
                  [0.8, "#ffffff22"],
                  [1, "#ffffff00"],
                ],
                256,
              ),
            ),
            transparent: !0,
            depthWrite: !1,
            blending: rs,
            opacity: 0,
            toneMapped: !1,
          }),
        ),
        _ = new Q(this.keep(new ms(2.4, 2.4)), R);
      if (
        ((_.rotation.x = -Math.PI / 2),
        _.position.set(u.x, u.h + 0.1, u.z),
        this.scene.add(_),
        this.rings.set(d, _),
        e)
      ) {
        const C = new Qu(u.color, 0, 5, 1.6);
        (C.position.set(u.x, u.h + 2.6, u.z + 0.9),
          this.scene.add(C),
          this.pointLights.set(d, C));
      }
    }
    const r = this.keep(new ms(0.075, 0.042)),
      l = this.keep(new Pi({ side: Mi, emissive: 2236962 }));
    ((this.confetti = new On(r, l, this.CONFETTI)),
      this.confetti.instanceMatrix.setUsage(Bi),
      (this.confetti.frustumCulled = !1));
    const c = [
        16764749, 16777215, 16735866, 5227519, 7332763, 16758087, 12027135,
      ],
      h = new Ge();
    for (let d = 0; d < this.CONFETTI; d++)
      (this.confetti.setColorAt(d, h.setHex(c[d % c.length])),
        this.hideConfetti(d));
    if (
      ((this.confetti.instanceColor.needsUpdate = !0),
      this.scene.add(this.confetti),
      e)
    ) {
      const u = new Float32Array(270);
      for (let g = 0; g < 90; g++)
        ((u[g * 3] = (Math.random() - 0.5) * 2.4),
          (u[g * 3 + 1] = 1.6 + Math.random() * 3.2),
          (u[g * 3 + 2] = (Math.random() - 0.5) * 1.6));
      const f = this.keep(new oi());
      f.setAttribute("position", new qt(u, 3));
      const p = this.keep(
        new Dm({
          size: 0.06,
          map: this.keep(
            Ng(
              [
                [0, "#ffffffff"],
                [0.25, "#ffe9a8cc"],
                [1, "#ffcf4d00"],
              ],
              64,
            ),
          ),
          transparent: !0,
          depthWrite: !1,
          blending: rs,
          opacity: 0,
          toneMapped: !1,
        }),
      );
      ((this.glitter = new Ld(f, p)), this.scene.add(this.glitter));
      const m = this.keep(
        Ng(
          [
            [0, "#9fb3c844"],
            [1, "#9fb3c800"],
          ],
          128,
        ),
      );
      for (let g = 0; g < 6; g++) {
        const y = new Ws(
          this.keep(
            new hn({ map: m, transparent: !0, depthWrite: !1, opacity: 0.5 }),
          ),
        );
        (y.position.set((g - 2.5) * 1.6, 0.35, 1.6 + (g % 2) * 0.8),
          y.scale.set(4.5, 1.4, 1),
          this.scene.add(y),
          this.haze.push(y));
      }
    }
  }
  hideConfetti(e) {
    ((this.conf.alive[e] = 0),
      this.dummy.position.set(0, -50, 0),
      this.dummy.scale.setScalar(0),
      this.dummy.updateMatrix(),
      this.confetti.setMatrixAt(e, this.dummy.matrix));
  }
  burst(e) {
    const t = this.conf;
    let i = 0;
    for (let n = 0; n < this.CONFETTI && i < e; n++) {
      if (t.alive[n]) continue;
      (i++, (t.alive[n] = 1));
      const o = i % 3 === 0 ? 0 : i % 3 === 1 ? -1 : 1;
      (o === 0
        ? (t.p.set(
            [
              (Math.random() - 0.5) * 3,
              5.8 + Math.random(),
              (Math.random() - 0.5) * 1.5,
            ],
            n * 3,
          ),
          t.v.set(
            [
              (Math.random() - 0.5) * 0.6,
              -0.4 - Math.random() * 0.4,
              (Math.random() - 0.5) * 0.6,
            ],
            n * 3,
          ))
        : (t.p.set([o * 1.1, 1.6, 0.55], n * 3),
          t.v.set(
            [
              -o * (1.2 + Math.random() * 2.2),
              5.2 + Math.random() * 3.6,
              (Math.random() - 0.3) * 1.8,
            ],
            n * 3,
          )),
        t.r.set(
          [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random() * Math.PI * 2,
          ],
          n * 4,
        ),
        (t.s[n] = 4 + Math.random() * 9));
    }
  }
  drizzle(e) {
    if (Math.random() < e * (this.high ? 26 : 8)) {
      const t = this.conf;
      for (let i = 0; i < this.CONFETTI; i++)
        if (!t.alive[i]) {
          ((t.alive[i] = 1),
            t.p.set(
              [
                (Math.random() - 0.5) * 6,
                6 + Math.random() * 1.5,
                (Math.random() - 0.5) * 3,
              ],
              i * 3,
            ),
            t.v.set(
              [
                (Math.random() - 0.5) * 0.4,
                -0.6 - Math.random() * 0.4,
                (Math.random() - 0.5) * 0.3,
              ],
              i * 3,
            ),
            t.r.set(
              [
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random() * Math.PI * 2,
              ],
              i * 4,
            ),
            (t.s[i] = 4 + Math.random() * 8));
          break;
        }
    }
  }
  updateConfetti(e) {
    const t = this.conf,
      i = this.tmpV;
    let n = !1;
    for (let o = 0; o < this.CONFETTI; o++) {
      if (!t.alive[o]) continue;
      n = !0;
      const a = o * 3;
      t.v[a + 1] -= 6.5 * e;
      const r = Math.exp(-2.3 * e);
      if (
        ((t.v[a] *= r),
        (t.v[a + 1] = Math.max(t.v[a + 1] * r, -1.15)),
        (t.v[a + 2] *= r),
        (t.p[a] += (t.v[a] + Math.sin(this.time * 3 + o) * 0.35) * e),
        (t.p[a + 1] += t.v[a + 1] * e),
        (t.p[a + 2] += t.v[a + 2] * e),
        (t.r[o * 4 + 3] += t.s[o] * e),
        t.p[a + 1] < 0.02)
      ) {
        this.hideConfetti(o);
        continue;
      }
      (i.set(t.r[o * 4], t.r[o * 4 + 1], t.r[o * 4 + 2]).normalize(),
        this.dummy.position.set(t.p[a], t.p[a + 1], t.p[a + 2]),
        this.dummy.quaternion.setFromAxisAngle(i, t.r[o * 4 + 3]),
        this.dummy.scale.setScalar(1),
        this.dummy.updateMatrix(),
        this.confetti.setMatrixAt(o, this.dummy.matrix));
    }
    n && (this.confetti.instanceMatrix.needsUpdate = !0);
  }
  celebrate = !0;
  show(e, t, i = !1, n = !0) {
    ((this.celebrate = n),
      this.clearFigures(),
      (this.t = i || this.reduced ? 6 : 0),
      (this.burstDone = i || this.reduced),
      (this.visible = !0));
    const o = new Ge(t);
    this.wall.uniforms.uColor.value.copy(o);
    for (let a = 0; a < this.CONFETTI; a++) this.hideConfetti(a);
    this.confetti.instanceMatrix.needsUpdate = !0;
    for (const a of e) this.figures.push(this.buildFigure(a));
    this.burstDone && n && this.burst(Math.floor(this.CONFETTI * 0.3));
  }
  buildFigure(e) {
    const t = Va[e.cls] ? z5(e.cls, e.team) : Va.assault,
      i = Kc(e.bot ? (e.ally ? 5662532 : 7022112) : 4809806);
    (Ed(i.head, ym("")),
      e.bot || Oc(i.group, e.character || "ranger", e.custom),
      X0(
        i.armorRoot,
        i.head,
        i.legL,
        i.legR,
        [...t.armor],
        0,
        e.armorSkins ?? {},
      ));
    const n =
      t.items.find((c) => c.id >= 256 && !jse.has(ai(c.id) || c.id))?.id ??
      t.items[0].id;
    if ((Td(i, n, this.atlas), e.weaponSkin))
      for (const c of i.heldMesh.children)
        qa(
          c,
          {
            uid: "podium-" + e.name,
            skin: e.weaponSkin,
            owner: e.name,
            ownerName: e.name,
            kills: 0,
          },
          e.name,
          !1,
        );
    const o = l0[e.place],
      a = new re();
    (a.position.set(o.x, o.h + 0.08, o.z),
      (i.group.rotation.y =
        Math.PI + (e.place === 2 ? -0.32 : e.place === 3 ? 0.32 : 0)),
      i.group.traverse((c) => {
        c.isMesh && ((c.castShadow = this.high), (c.receiveShadow = this.high));
      }),
      a.add(i.group),
      (a.visible = this.t >= ku[e.place]),
      this.scene.add(a));
    const r = ai(n) || n,
      l = {
        entry: e,
        model: i,
        root: a,
        weapon: n,
        long: Fse.has(r),
        seed: e.place * 1.37,
        landed: a.visible,
      };
    for (let c = 0; c < 30; c++) this.pose(l, 0.05, c * 0.05);
    return l;
  }
  clearFigures() {
    for (const e of this.figures) {
      this.scene.remove(e.root);
      for (const t of e.model.heldMesh.children) Gc(t);
      (Td(e.model, 0, this.atlas),
        e.root.traverse((t) => {
          const i = t;
          if (
            i.isMesh &&
            (i.userData.sharedGeometry || i.geometry?.dispose(),
            !i.userData.sharedMaterial)
          )
            for (const n of Array.isArray(i.material)
              ? i.material
              : [i.material])
              n?.dispose();
        }));
    }
    this.figures = [];
  }
  hide() {
    ((this.visible = !1), this.clearFigures());
  }
  dispose() {
    this.hide();
    for (const e of this.disposables) e.dispose();
    ((this.disposables = []), this.confetti.dispose());
  }
  pose(e, t, i) {
    const n = e.model,
      o = this.t - ku[e.entry.place],
      a = e.entry.place === 1 ? 0.22 : 0.08;
    (Xf(n, t, i + e.seed, { speed: 0, pitch: a, held: e.weapon, aiming: !1 }),
      (n.head.rotation.y =
        Math.sin(i * 0.5 + e.seed * 2) * 0.22 +
        (e.entry.place === 2 ? -0.18 : e.entry.place === 3 ? 0.18 : 0)));
    const r = n.group.getObjectByName("pose-root");
    if (!r || !e.long) return;
    const l = this.tune?.[e.entry.place];
    if (l) {
      (this.tmpV.fromArray(l[0]),
        this.tmpQ.setFromEuler(new pi(l[1][0], l[1][1], l[1][2], "YXZ")),
        Pb(r, n.armL, n.armR, n.heldMesh, this.tmpV, this.tmpQ, 1, l[2]));
      return;
    }
    if (e.entry.place === 1) {
      const c =
        o > 0.35 && o < 2.6
          ? Math.abs(Math.sin((o - 0.35) * 5.2))
          : o >= 2.6
            ? 0.45 + 0.25 * Math.sin(i * 1.6)
            : 0;
      (this.tmpV.set(0.02, 2.38 + c * 0.1, -0.05),
        this.tmpQ.setFromEuler(
          new pi(0.25, Math.PI / 2, 0.25 + Math.sin(i * 1.1) * 0.04, "YXZ"),
        ),
        Pb(r, n.armL, n.armR, n.heldMesh, this.tmpV, this.tmpQ, 1, !0));
    } else
      e.entry.place === 2 &&
        (this.tmpV.set(0.02, 1.25 + Math.sin(i * 1.3) * 0.008, -0.28),
        this.tmpQ.setFromEuler(new pi(0.62, Math.PI / 2, 0, "YXZ")),
        Pb(r, n.armL, n.armR, n.heldMesh, this.tmpV, this.tmpQ, 1, !0));
  }
  updateFigure(e, t) {
    const i = this.t - ku[e.entry.place],
      n = l0[e.entry.place];
    if (((e.root.visible = i >= 0), i < 0)) return;
    const o = i < 0.5 ? 1 - Use(i / 0.5) : 0;
    ((e.root.position.y =
      n.h +
      0.08 +
      o * 2.4 +
      (e.entry.place === 1 && i > 0.4 && i < 2.4
        ? Math.max(0, Math.sin((i - 0.4) * 5.2)) * 0.07
        : 0)),
      !e.landed &&
        i >= 0.42 &&
        ((e.landed = !0),
        e.entry.place === 1 &&
          !this.burstDone &&
          ((this.burstDone = !0),
          this.celebrate && this.burst(Math.floor(this.CONFETTI * 0.7)))),
      this.pose(e, t, this.time));
  }
  setBand(e, t, i, n) {
    this.band = {
      top: e,
      bottom: Math.max(e + 40, t),
      width: Math.max(1, i),
      height: Math.max(1, n),
    };
  }
  placeCamera() {
    const { top: e, bottom: t, width: i, height: n } = this.band,
      o = i / n;
    this.camera.aspect = o;
    const a = (t - e) / n,
      r = Math.tan(ni.degToRad(this.camera.fov / 2)),
      h = Math.max(2.05 / (r * Math.max(0.2, a)), 2.8 / (r * o * 0.96), 6.2),
      d = this.reduced ? 1 : Gw(this.t / 3.1),
      u = 1 - Math.pow(1 - d, 3),
      f = (1 - u) * 0.75 + Math.sin(this.time * 0.13) * 0.07,
      p = h * (1 + (1 - u) * 0.9),
      m = 0.95 + (1 - u) * 4.2 + Math.sin(this.time * 0.21) * 0.05,
      g = this.tmpV.set(0, 1.92, 0.25);
    (this.camera.position.set(
      g.x + Math.sin(f) * p,
      g.y + m,
      g.z + Math.cos(f) * p,
    ),
      this.camera.lookAt(g.x, g.y - (1 - u) * 0.5, g.z));
    const y = e + (t - e) * 0.56 - n / 2;
    (this.camera.setViewOffset(i, n, 0, -y, i, n),
      this.camera.updateProjectionMatrix());
  }
  update(e) {
    if (this.visible) {
      ((this.t += e),
        (this.time += e),
        (this.wall.uniforms.uTime.value = this.time));
      for (const t of [1, 2, 3]) {
        const i = this.t - ku[t],
          n = Gw(i / 0.45),
          o = this.figures.some((d) => d.entry.place === t),
          a = this.cones.get(t);
        ((a.material.uniforms.uOpacity.value =
          (o ? n : 0) *
          (t === 1 ? 0.55 : 0.38) *
          (0.92 + 0.08 * Math.sin(this.time * 2 + t))),
          (this.trims.get(t).emissiveIntensity =
            0.15 + (o ? n : 0) * (t === 1 ? 1.6 : 1.1)),
          (this.numerals.get(t).opacity = 0.3 + (o ? n : 0) * 0.7));
        const r = this.rings.get(t),
          l = r.material,
          c = i >= 0.38 && i < 1.3 ? (i - 0.38) / 0.92 : -1;
        ((l.opacity = o && c >= 0 ? (1 - c) * 0.9 : 0),
          r.scale.setScalar(c >= 0 ? 0.55 + c * 1.3 : 1));
        const h = this.pointLights.get(t);
        h && (h.intensity = (o ? n : 0) * (t === 1 ? 9 : 5));
      }
      for (const t of this.figures) this.updateFigure(t, e);
      if (
        (this.celebrate && this.t > ku[1] + 1.2 && this.drizzle(e),
        this.updateConfetti(e),
        this.glitter)
      ) {
        const t = this.glitter.material;
        ((t.opacity =
          Gw((this.t - ku[1]) / 0.6) * (0.75 + 0.25 * Math.sin(this.time * 7))),
          (this.glitter.rotation.y += e * 0.25));
      }
      for (const [t, i] of this.haze.entries())
        i.position.x = (t - 2.5) * 1.6 + Math.sin(this.time * 0.2 + t) * 0.6;
    }
  }
  render(e) {
    (this.placeCamera(),
      e.setRenderTarget(null),
      (e.toneMappingExposure = 1.05),
      e.shadowMap.enabled && (e.shadowMap.needsUpdate = !0),
      e.render(this.scene, this.camera));
  }
  spacing() {
    const e = this.tmpV.set(l0[2].x, 1, l0[2].z + 0.8).project(this.camera).x,
      t = new k(l0[1].x, 1, l0[1].z + 0.8).project(this.camera).x;
    return (Math.abs(t - e) / 2) * this.band.width;
  }
  anchors() {
    const e = { 1: null, 2: null, 3: null },
      { width: t, height: i } = this.band;
    for (const n of this.figures) {
      const o = l0[n.entry.place],
        a = this.tmpV.set(o.x, o.h * 0.94, o.z + 0.8).project(this.camera),
        r = new k(o.x, o.h + 2.25, o.z).project(this.camera);
      e[n.entry.place] = {
        x: ((a.x + 1) / 2) * t,
        y: ((1 - a.y) / 2) * i,
        top: ((1 - r.y) / 2) * i,
      };
    }
    return e;
  }
}
