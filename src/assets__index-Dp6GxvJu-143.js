// assets__index-Dp6GxvJu 143 — math
// Lines 87365-88039 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class pZ {
  constructor(e, t) {
    w(this, "scene", new nh());
    w(this, "camera", new Cs(34, 1, 0.1, 120));
    w(this, "figures", []);
    w(this, "disposables", []);
    w(this, "stage", new pe());
    w(this, "cones", new Map());
    w(this, "trims", new Map());
    w(this, "numerals", new Map());
    w(this, "rings", new Map());
    w(this, "pointLights", new Map());
    w(this, "wall");
    w(this, "floorMat");
    w(this, "key");
    w(this, "confetti");
    w(this, "conf");
    w(this, "glitter", null);
    w(this, "haze", []);
    w(this, "t", 0);
    w(this, "time", 0);
    w(this, "band", { top: 0, bottom: 1, width: 1, height: 1 });
    w(this, "dummy", new $t());
    w(this, "tmpV", new k());
    w(this, "tmpQ", new Jt());
    w(this, "burstDone", !1);
    w(this, "CONFETTI");
    w(this, "visible", !1);
    w(
      this,
      "reduced",
      typeof matchMedia < "u" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    w(this, "celebrate", !0);
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
      (this.scene.background = new ze(329482)),
      this.scene.add(this.stage),
      this.build());
  }
  keep(e) {
    return (this.disposables.push(e), e);
  }
  build() {
    const e = this.high,
      t = this.keep(cZ("#ffb547"));
    this.floorMat = this.keep(
      new Pr({ map: t, roughness: 0.42, metalness: 0.35 }),
    );
    const i = new le(this.keep(new Kr(13, 96)), this.floorMat),
      s = new le(
        this.keep(new sh(12.95, 60, 96, 1)),
        this.keep(new Pr({ color: 461068, roughness: 0.42, metalness: 0.35 })),
      );
    ((s.rotation.x = -Math.PI / 2),
      (s.position.y = -0.002),
      this.stage.add(s),
      (i.rotation.x = -Math.PI / 2),
      (i.receiveShadow = e),
      this.stage.add(i),
      (this.wall = this.keep(
        new sn({
          vertexShader: fZ,
          fragmentShader: uZ,
          side: Js,
          depthWrite: !1,
          uniforms: {
            uColor: { value: new ze(16758087) },
            uColor2: { value: new ze(16777215) },
            uTime: { value: 0 },
          },
        }),
      )));
    const o = new le(
      this.keep(new xt(12, 12, 14, 96, 1, !0, Math.PI * 0.3, Math.PI * 1.4)),
      this.wall,
    );
    if (
      (o.position.set(0, 6.4, 1.2),
      this.stage.add(o),
      this.scene.add(new A0(12176895, 2760728, e ? 1.7 : 2.2)),
      (this.key = new Wr(16773596, e ? 3.4 : 3)),
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
    const a = new Wr(9417983, e ? 1.6 : 1.2);
    (a.position.set(-4, 5, -6), this.scene.add(a));
    for (const d of [1, 2, 3]) {
      const u = bc[d],
        f = new pe();
      (f.position.set(u.x, 0, u.z), this.stage.add(f));
      const p = this.keep(
          new Pr({ color: 1712168, roughness: 0.55, metalness: 0.45 }),
        ),
        m = new le(this.keep(new Ct(1.5, u.h, 1.5)), p);
      ((m.position.y = u.h / 2),
        (m.castShadow = m.receiveShadow = e),
        f.add(m));
      const y = new le(
        this.keep(new Ct(1.6, 0.08, 1.6)),
        this.keep(new Pr({ color: 2831166, roughness: 0.35, metalness: 0.6 })),
      );
      ((y.position.y = u.h + 0.04),
        (y.castShadow = y.receiveShadow = e),
        f.add(y));
      const g = this.keep(
        new Pr({
          color: u.color,
          emissive: u.color,
          emissiveIntensity: 0.15,
          roughness: 0.3,
          metalness: 0.8,
        }),
      );
      this.trims.set(d, g);
      const b = new le(this.keep(new Ct(1.54, 0.05, 1.54)), g);
      ((b.position.y = u.h - 0.03), f.add(b));
      const S = new le(this.keep(new Ct(1.62, 0.06, 1.62)), g);
      ((S.position.y = 0.03), f.add(S));
      for (const L of [-1, 1]) {
        const N = new le(this.keep(new Ct(0.035, u.h - 0.16, 0.035)), g);
        (N.position.set(L * 0.74, u.h / 2, 0.74), f.add(N));
      }
      const M = this.keep(
        new qt({
          map: this.keep(lZ(u.label, u.glow)),
          transparent: !0,
          opacity: 0.35,
          toneMapped: !1,
        }),
      );
      this.numerals.set(d, M);
      const x = new le(this.keep(new pn(0.9, Math.min(0.9, u.h - 0.14))), M);
      (x.position.set(0, u.h / 2, 0.755), f.add(x));
      const T = new le(
        this.keep(new pn(1.3, 1.3)),
        this.keep(
          new qt({
            map: this.keep(
              Km(
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
      ((T.rotation.x = -Math.PI / 2), (T.position.y = u.h + 0.085), f.add(T));
      const A = this.keep(
          new sn({
            vertexShader: hZ,
            fragmentShader: dZ,
            transparent: !0,
            depthWrite: !1,
            blending: cn,
            side: Ai,
            uniforms: {
              uColor: { value: new ze(u.color).lerp(new ze(16777215), 0.55) },
              uOpacity: { value: 0 },
              uHeight: { value: 7 },
            },
          }),
        ),
        _ = new le(this.keep(new xt(0.18, 1.25, 7, 40, 1, !0)), A);
      (_.position.set(u.x, u.h + 3.5, u.z),
        (_.renderOrder = 3),
        this.scene.add(_),
        this.cones.set(d, _));
      const C = this.keep(
          new qt({
            map: this.keep(
              Km(
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
            blending: cn,
            opacity: 0,
            toneMapped: !1,
          }),
        ),
        R = new le(this.keep(new pn(2.4, 2.4)), C);
      if (
        ((R.rotation.x = -Math.PI / 2),
        R.position.set(u.x, u.h + 0.1, u.z),
        this.scene.add(R),
        this.rings.set(d, R),
        e)
      ) {
        const L = new vp(u.color, 0, 5, 1.6);
        (L.position.set(u.x, u.h + 2.6, u.z + 0.9),
          this.scene.add(L),
          this.pointLights.set(d, L));
      }
    }
    const r = this.keep(new pn(0.075, 0.042)),
      l = this.keep(new gi({ side: Ai, emissive: 2236962 }));
    ((this.confetti = new hs(r, l, this.CONFETTI)),
      this.confetti.instanceMatrix.setUsage(Mn),
      (this.confetti.frustumCulled = !1));
    const c = [
        16764749, 16777215, 16735866, 5227519, 7332763, 16758087, 12027135,
      ],
      h = new ze();
    for (let d = 0; d < this.CONFETTI; d++)
      (this.confetti.setColorAt(d, h.setHex(c[d % c.length])),
        this.hideConfetti(d));
    if (
      ((this.confetti.instanceColor.needsUpdate = !0),
      this.scene.add(this.confetti),
      e)
    ) {
      const u = new Float32Array(270);
      for (let y = 0; y < 90; y++)
        ((u[y * 3] = (Math.random() - 0.5) * 2.4),
          (u[y * 3 + 1] = 1.6 + Math.random() * 3.2),
          (u[y * 3 + 2] = (Math.random() - 0.5) * 1.6));
      const f = this.keep(new ci());
      f.setAttribute("position", new oi(u, 3));
      const p = this.keep(
        new Xp({
          size: 0.06,
          map: this.keep(
            Km(
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
          blending: cn,
          opacity: 0,
          toneMapped: !1,
        }),
      );
      ((this.glitter = new T0(f, p)), this.scene.add(this.glitter));
      const m = this.keep(
        Km(
          [
            [0, "#9fb3c844"],
            [1, "#9fb3c800"],
          ],
          128,
        ),
      );
      for (let y = 0; y < 6; y++) {
        const g = new os(
          this.keep(
            new es({ map: m, transparent: !0, depthWrite: !1, opacity: 0.5 }),
          ),
        );
        (g.position.set((y - 2.5) * 1.6, 0.35, 1.6 + (y % 2) * 0.8),
          g.scale.set(4.5, 1.4, 1),
          this.scene.add(g),
          this.haze.push(g));
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
    for (let s = 0; s < this.CONFETTI && i < e; s++) {
      if (t.alive[s]) continue;
      (i++, (t.alive[s] = 1));
      const o = i % 3 === 0 ? 0 : i % 3 === 1 ? -1 : 1;
      (o === 0
        ? (t.p.set(
            [
              (Math.random() - 0.5) * 3,
              5.8 + Math.random(),
              (Math.random() - 0.5) * 1.5,
            ],
            s * 3,
          ),
          t.v.set(
            [
              (Math.random() - 0.5) * 0.6,
              -0.4 - Math.random() * 0.4,
              (Math.random() - 0.5) * 0.6,
            ],
            s * 3,
          ))
        : (t.p.set([o * 1.1, 1.6, 0.55], s * 3),
          t.v.set(
            [
              -o * (1.2 + Math.random() * 2.2),
              5.2 + Math.random() * 3.6,
              (Math.random() - 0.3) * 1.8,
            ],
            s * 3,
          )),
        t.r.set(
          [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random() * Math.PI * 2,
          ],
          s * 4,
        ),
        (t.s[s] = 4 + Math.random() * 9));
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
    let s = !1;
    for (let o = 0; o < this.CONFETTI; o++) {
      if (!t.alive[o]) continue;
      s = !0;
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
    s && (this.confetti.instanceMatrix.needsUpdate = !0);
  }
  show(e, t, i = !1, s = !0) {
    ((this.celebrate = s),
      this.clearFigures(),
      (this.t = i || this.reduced ? 6 : 0),
      (this.burstDone = i || this.reduced),
      (this.visible = !0));
    const o = new ze(t);
    this.wall.uniforms.uColor.value.copy(o);
    for (let a = 0; a < this.CONFETTI; a++) this.hideConfetti(a);
    this.confetti.instanceMatrix.needsUpdate = !0;
    for (const a of e) this.figures.push(this.buildFigure(a));
    this.burstDone && s && this.burst(Math.floor(this.CONFETTI * 0.3));
  }
  buildFigure(e) {
    var c;
    const t = _l[e.cls] ?? _l.assault,
      i = ec(e.bot ? (e.ally ? 5662532 : 7022112) : 4809806);
    (e.bot || Wl(i.group, e.character || "ranger", e.custom),
      ih(
        i.armorRoot,
        i.head,
        i.legL,
        i.legR,
        [...t.armor],
        0,
        e.armorSkins ?? {},
      ));
    const s =
      ((c = t.items.find((h) => h.id >= 256 && !mZ.has(Ti(h.id) || h.id))) ==
      null
        ? void 0
        : c.id) ?? t.items[0].id;
    if ((E0(i, s, this.atlas), e.weaponSkin))
      for (const h of i.heldMesh.children)
        Ba(
          h,
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
    const o = bc[e.place],
      a = new pe();
    (a.position.set(o.x, o.h + 0.08, o.z),
      (i.group.rotation.y =
        Math.PI + (e.place === 2 ? -0.32 : e.place === 3 ? 0.32 : 0)),
      i.group.traverse((h) => {
        h.isMesh && ((h.castShadow = this.high), (h.receiveShadow = this.high));
      }),
      a.add(i.group),
      (a.visible = this.t >= vd[e.place]),
      this.scene.add(a));
    const r = Ti(s) || s,
      l = {
        entry: e,
        model: i,
        root: a,
        weapon: s,
        long: aZ.has(r),
        seed: e.place * 1.37,
        landed: a.visible,
      };
    for (let h = 0; h < 30; h++) this.pose(l, 0.05, h * 0.05);
    return l;
  }
  clearFigures() {
    for (const e of this.figures) {
      this.scene.remove(e.root);
      for (const t of e.model.heldMesh.children) Zl(t);
      (E0(e.model, 0, this.atlas),
        e.root.traverse((t) => {
          var s;
          const i = t;
          if (
            i.isMesh &&
            (i.userData.sharedGeometry ||
              (s = i.geometry) == null ||
              s.dispose(),
            !i.userData.sharedMaterial)
          )
            for (const o of Array.isArray(i.material)
              ? i.material
              : [i.material])
              o == null || o.dispose();
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
    var c;
    const s = e.model,
      o = this.t - vd[e.entry.place],
      a = e.entry.place === 1 ? 0.22 : 0.08;
    (Su(s, t, i + e.seed, { speed: 0, pitch: a, held: e.weapon, aiming: !1 }),
      (s.head.rotation.y =
        Math.sin(i * 0.5 + e.seed * 2) * 0.22 +
        (e.entry.place === 2 ? -0.18 : e.entry.place === 3 ? 0.18 : 0)));
    const r = s.group.getObjectByName("pose-root");
    if (!r || !e.long) return;
    const l = (c = this.tune) == null ? void 0 : c[e.entry.place];
    if (l) {
      (this.tmpV.fromArray(l[0]),
        this.tmpQ.setFromEuler(new hi(l[1][0], l[1][1], l[1][2], "YXZ")),
        v5(r, s.armL, s.armR, s.heldMesh, this.tmpV, this.tmpQ, 1, l[2]));
      return;
    }
    if (e.entry.place === 1) {
      const h =
        o > 0.35 && o < 2.6
          ? Math.abs(Math.sin((o - 0.35) * 5.2))
          : o >= 2.6
            ? 0.45 + 0.25 * Math.sin(i * 1.6)
            : 0;
      (this.tmpV.set(0.02, 2.38 + h * 0.1, -0.05),
        this.tmpQ.setFromEuler(
          new hi(0.25, Math.PI / 2, 0.25 + Math.sin(i * 1.1) * 0.04, "YXZ"),
        ),
        v5(r, s.armL, s.armR, s.heldMesh, this.tmpV, this.tmpQ, 1, !0));
    } else
      e.entry.place === 2 &&
        (this.tmpV.set(0.02, 1.25 + Math.sin(i * 1.3) * 0.008, -0.28),
        this.tmpQ.setFromEuler(new hi(0.62, Math.PI / 2, 0, "YXZ")),
        v5(r, s.armL, s.armR, s.heldMesh, this.tmpV, this.tmpQ, 1, !0));
  }
  updateFigure(e, t) {
    const i = this.t - vd[e.entry.place],
      s = bc[e.entry.place];
    if (((e.root.visible = i >= 0), i < 0)) return;
    const o = i < 0.5 ? 1 - rZ(i / 0.5) : 0;
    ((e.root.position.y =
      s.h +
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
  setBand(e, t, i, s) {
    this.band = {
      top: e,
      bottom: Math.max(e + 40, t),
      width: Math.max(1, i),
      height: Math.max(1, s),
    };
  }
  placeCamera() {
    const { top: e, bottom: t, width: i, height: s } = this.band,
      o = i / s;
    this.camera.aspect = o;
    const a = (t - e) / s,
      r = Math.tan(fi.degToRad(this.camera.fov / 2)),
      h = Math.max(2.05 / (r * Math.max(0.2, a)), 2.8 / (r * o * 0.96), 6.2),
      d = this.reduced ? 1 : vb(this.t / 3.1),
      u = 1 - Math.pow(1 - d, 3),
      f = (1 - u) * 0.75 + Math.sin(this.time * 0.13) * 0.07,
      p = h * (1 + (1 - u) * 0.9),
      m = 0.95 + (1 - u) * 4.2 + Math.sin(this.time * 0.21) * 0.05,
      y = this.tmpV.set(0, 1.92, 0.25);
    (this.camera.position.set(
      y.x + Math.sin(f) * p,
      y.y + m,
      y.z + Math.cos(f) * p,
    ),
      this.camera.lookAt(y.x, y.y - (1 - u) * 0.5, y.z));
    const g = e + (t - e) * 0.56 - s / 2;
    (this.camera.setViewOffset(i, s, 0, -g, i, s),
      this.camera.updateProjectionMatrix());
  }
  update(e) {
    if (this.visible) {
      ((this.t += e),
        (this.time += e),
        (this.wall.uniforms.uTime.value = this.time));
      for (const t of [1, 2, 3]) {
        const i = this.t - vd[t],
          s = vb(i / 0.45),
          o = this.figures.some((d) => d.entry.place === t),
          a = this.cones.get(t);
        ((a.material.uniforms.uOpacity.value =
          (o ? s : 0) *
          (t === 1 ? 0.55 : 0.38) *
          (0.92 + 0.08 * Math.sin(this.time * 2 + t))),
          (this.trims.get(t).emissiveIntensity =
            0.15 + (o ? s : 0) * (t === 1 ? 1.6 : 1.1)),
          (this.numerals.get(t).opacity = 0.3 + (o ? s : 0) * 0.7));
        const r = this.rings.get(t),
          l = r.material,
          c = i >= 0.38 && i < 1.3 ? (i - 0.38) / 0.92 : -1;
        ((l.opacity = o && c >= 0 ? (1 - c) * 0.9 : 0),
          r.scale.setScalar(c >= 0 ? 0.55 + c * 1.3 : 1));
        const h = this.pointLights.get(t);
        h && (h.intensity = (o ? s : 0) * (t === 1 ? 9 : 5));
      }
      for (const t of this.figures) this.updateFigure(t, e);
      if (
        (this.celebrate && this.t > vd[1] + 1.2 && this.drizzle(e),
        this.updateConfetti(e),
        this.glitter)
      ) {
        const t = this.glitter.material;
        ((t.opacity =
          vb((this.t - vd[1]) / 0.6) * (0.75 + 0.25 * Math.sin(this.time * 7))),
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
    const e = this.tmpV.set(bc[2].x, 1, bc[2].z + 0.8).project(this.camera).x,
      t = new k(bc[1].x, 1, bc[1].z + 0.8).project(this.camera).x;
    return (Math.abs(t - e) / 2) * this.band.width;
  }
  anchors() {
    const e = { 1: null, 2: null, 3: null },
      { width: t, height: i } = this.band;
    for (const s of this.figures) {
      const o = bc[s.entry.place],
        a = this.tmpV.set(o.x, o.h * 0.94, o.z + 0.8).project(this.camera),
        r = new k(o.x, o.h + 2.25, o.z).project(this.camera);
      e[s.entry.place] = {
        x: ((a.x + 1) / 2) * t,
        y: ((1 - a.y) / 2) * i,
        top: ((1 - r.y) / 2) * i,
      };
    }
    return e;
  }
}
