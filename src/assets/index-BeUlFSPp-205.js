// index-BeUlFSPp 205 — math
// Lines 109259-110012 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Mae {
  constructor(e, t, i, n, o, a) {
    ((this.scene = e),
      (this.world = t),
      (this.sfx = i),
      (this.mobile = n),
      (this.seed = o),
      (this.shake = a),
      (this.leafCount = n ? 180 : 420));
    const r = new ms(1, 1);
    ((this.leafGeo = new SI()),
      (this.leafGeo.index = r.index),
      this.leafGeo.setAttribute("position", r.getAttribute("position")),
      this.leafGeo.setAttribute("uv", r.getAttribute("uv")),
      (this.leafSpawn = new cn(new Float32Array(this.leafCount * 4), 4)),
      (this.leafInfo = new cn(new Float32Array(this.leafCount * 4), 4)),
      (this.leafColor = new cn(new Float32Array(this.leafCount * 3), 3)));
    for (let c = 0; c < this.leafCount; c++) this.leafSpawn.setW(c, -1e6);
    for (const c of [this.leafSpawn, this.leafInfo, this.leafColor])
      c.setUsage(Bi);
    (this.leafGeo.setAttribute("aSpawn", this.leafSpawn),
      this.leafGeo.setAttribute("aInfo", this.leafInfo),
      this.leafGeo.setAttribute("aColor", this.leafColor),
      (this.leafGeo.instanceCount = this.leafCount),
      (this.leafMat = new Gi({
        vertexShader: pae,
        fragmentShader: mae,
        side: Mi,
        uniforms: {
          uTime: { value: 0 },
          uWind: { value: new ct() },
          uLight: { value: 1 },
        },
      })),
      (this.leafMesh = new Q(this.leafGeo, this.leafMat)),
      (this.leafMesh.frustumCulled = !1),
      (this.leafMesh.renderOrder = zi.particle),
      e.add(this.leafMesh),
      (this.glowPos = new Float32Array(this.glowMax * 3)),
      (this.glowColor = new Float32Array(this.glowMax * 3)),
      (this.glowSize = new Float32Array(this.glowMax)),
      (this.glowAlpha = new Float32Array(this.glowMax)));
    const l = new oi();
    (l.setAttribute("position", new qt(this.glowPos, 3).setUsage(Bi)),
      l.setAttribute("aColor", new qt(this.glowColor, 3).setUsage(Bi)),
      l.setAttribute("aSize", new qt(this.glowSize, 1).setUsage(Bi)),
      l.setAttribute("aAlpha", new qt(this.glowAlpha, 1).setUsage(Bi)),
      l.setDrawRange(0, 0),
      (this.glowPoints = new Ld(
        l,
        new Gi({
          vertexShader: gae,
          fragmentShader: yae,
          transparent: !0,
          depthWrite: !1,
          blending: rs,
          uniforms: { uScale: { value: 420 } },
        }),
      )),
      (this.glowPoints.frustumCulled = !1),
      (this.glowPoints.renderOrder = zi.particle),
      e.add(this.glowPoints));
  }
  opts = { fallingLeaves: !0, screamers: !0, particles: 1 };
  clock = 0;
  scanT = 0;
  leafAnchors = [];
  leafWeight = 0;
  grassAnchors = [];
  specials = [];
  graves = 0;
  cauldrons = [];
  haunted = 0;
  biome = "plains";
  leafMesh;
  leafGeo;
  leafSpawn;
  leafInfo;
  leafColor;
  leafMat;
  leafCursor = 0;
  leafBudget = 0;
  leafCount;
  glows = [];
  glowPoints;
  glowPos;
  glowColor;
  glowSize;
  glowAlpha;
  glowMax = 160;
  ghostTex = null;
  ghosts = [];
  ghostCd = 20;
  mist = [];
  mistLevel = 0;
  screamerEl = null;
  screamerCd = 240;
  lastYaw = 0;
  yawSpin = 0;
  cricketT = 1;
  owlT = 30;
  graveT = 8;
  heartT = 0;
  stepT = 0;
  color = new Ge();
  right = new k();
  look = new k();
  setOptions(e) {
    if (
      (Object.assign(this.opts, e),
      !this.opts.fallingLeaves || this.opts.particles <= 0)
    ) {
      for (let t = 0; t < this.leafCount; t++) this.leafSpawn.setW(t, -1e6);
      this.leafSpawn.needsUpdate = !0;
    }
    this.opts.screamers || this.clearGhosts();
  }
  clearLeaves() {
    for (let e = 0; e < this.leafCount; e++) this.leafSpawn.setW(e, -1e6);
    ((this.leafSpawn.needsUpdate = !0),
      (this.leafAnchors.length = 0),
      (this.leafWeight = 0),
      (this.scanT = 0));
  }
  setPixelScale(e) {
    this.glowPoints.material.uniforms.uScale.value = e * 0.65;
  }
  hauntFloor = 0;
  scare() {
    return !this.opts.screamers || this.screamerCd > 60
      ? !1
      : ((this.screamerCd = 420 + Math.random() * 300),
        this.triggerScreamer(),
        !0);
  }
  bloodMoon = !1;
  setBloodMoon(e) {
    (e &&
      !this.bloodMoon &&
      (this.sfx.horrorSting(), this.sfx.bellToll(70, -0.3)),
      (this.bloodMoon = e));
  }
  get hauntLevel() {
    return this.haunted;
  }
  update(e, t) {
    this.clock += e;
    const i = this.clock;
    if (
      ((this.leafMat.uniforms.uTime.value = i),
      this.leafMat.uniforms.uWind.value.set(
        t.windX * 1.6 + 0.25,
        t.windZ * 1.6 + 0.15,
      ),
      (this.leafMat.uniforms.uLight.value = 0.14 + t.dayness * 0.86),
      !t.earth)
    ) {
      this.idle();
      return;
    }
    ((this.hauntFloor = t.hauntFloor ?? 0),
      (this.scanT -= e),
      this.scanT <= 0 && ((this.scanT = 0.9), this.scan(t.pos)));
    const n = t.dayness < 0.32;
    if ((this.updateLeaves(e, t), t.leavesOnly)) {
      this.idle();
      return;
    }
    (this.updateGlows(e, t, n),
      this.updateGhosts(e, t, n),
      this.updateMist(e, t, n),
      this.updateSounds(e, t, n),
      this.updateScreamer(e, t, n));
  }
  idle() {
    (this.glowPoints.geometry.setDrawRange(0, 0), this.clearGhosts());
    for (const e of this.mist) e.visible = !1;
  }
  scan(e) {
    const t = Math.floor(e.x / ke),
      i = Math.floor(e.z / ke);
    ((this.leafAnchors.length = 0),
      (this.grassAnchors.length = 0),
      (this.specials.length = 0),
      (this.cauldrons.length = 0),
      (this.leafWeight = 0),
      (this.graves = 0));
    let n = 0;
    for (let o = -2; o <= 2; o++)
      for (let a = -2; a <= 2; a++) {
        const r = t + o,
          l = i + a,
          c = this.world.chunkFeatures(r, l);
        if (!c) continue;
        const h = r * ke,
          d = l * ke,
          u = (f) => ({
            x: h + (f & 15),
            y: f >> 8,
            z: d + ((f >> 4) & 15),
            id: 0,
          });
        for (const f of c.leaves) {
          const p = u(f);
          p.id = this.world.getBlock(p.x, p.y, p.z);
          const m = AC[p.id] ?? 0;
          m <= 0 || (this.leafAnchors.push(p), (this.leafWeight += m));
        }
        if (Math.abs(o) <= 1 && Math.abs(a) <= 1)
          for (const f of c.grass) this.grassAnchors.push(u(f));
        for (const f of c.specials) {
          const p = u(f);
          ((p.id = this.world.getBlock(p.x, p.y, p.z)), this.specials.push(p));
          const m = Math.hypot(p.x - e.x, p.z - e.z);
          (TC.has(p.id) && m < 34 && this.graves++,
            p.id === v.CAULDRON && (this.cauldrons.push(p), m < 30 && n++));
        }
      }
    ((this.haunted = Math.max(
      this.hauntFloor,
      Math.min(1, this.graves / 6 + n * 0.6),
    )),
      (this.biome = Zr(this.seed(), e.x, e.z)));
  }
  updateLeaves(e, t) {
    if (
      !this.opts.fallingLeaves ||
      this.opts.particles <= 0 ||
      this.leafAnchors.length === 0
    )
      return;
    const i = Math.hypot(t.windX, t.windZ),
      n =
        Math.min(this.mobile ? 10 : 26, this.leafWeight * 0.09) *
        (0.6 + i * 1.2) *
        Math.min(1.3, this.opts.particles);
    this.leafBudget += n * e;
    let o = !1;
    for (let a = 0; this.leafBudget >= 1 && a < 12; a++) {
      this.leafBudget -= 1;
      let r = Math.random() * this.leafWeight,
        l = this.leafAnchors[0];
      for (const b of this.leafAnchors)
        if (((r -= AC[b.id] ?? 0), r <= 0)) {
          l = b;
          break;
        }
      if (
        Math.hypot(l.x - t.pos.x, l.z - t.pos.z) > 34 ||
        !en(this.world.getBlock(l.x, l.y, l.z)) ||
        this.world.getBlock(l.x, l.y - 1, l.z) !== v.AIR
      )
        continue;
      let c = l.y - 1;
      for (; c > Math.max(0, l.y - 48); c--) {
        const b = this.world.getBlock(l.x, c, l.z);
        if (b !== v.AIR && (le[b]?.solid || le[b]?.liquid)) break;
      }
      const h = Math.min(
          jt,
          c + (le[this.world.getBlock(l.x, c, l.z)]?.liquid ? 0.88 : 1),
        ),
        d = this.leafCursor;
      this.leafCursor = (this.leafCursor + 1) % this.leafCount;
      const u = l.x + Math.random(),
        f = l.z + Math.random(),
        p = l.y - 0.02,
        m = (p - h) / 0.95,
        g = l.id === v.SAKURA_LEAVES;
      (this.leafSpawn.setXYZW(d, u, p, f, this.clock),
        this.leafInfo.setXYZW(
          d,
          h,
          Math.random() * 100,
          m + 4 + Math.random() * 6,
          g ? 0.12 : 0.17 + Math.random() * 0.08,
        ));
      const y = EC[l.id] ?? EC[v.LEAVES];
      (this.color.setHex(y[Math.floor(Math.random() * y.length)]),
        this.leafColor.setXYZ(d, this.color.r, this.color.g, this.color.b),
        (o = !0));
    }
    o &&
      ((this.leafSpawn.needsUpdate = !0),
      (this.leafInfo.needsUpdate = !0),
      (this.leafColor.needsUpdate = !0));
  }
  spawnGlow(e, t, i, n, o, a = 0, r = 0, l = 0) {
    this.glows.length >= this.glowMax ||
      this.glows.push({
        kind: e,
        x: t,
        y: i,
        z: n,
        vx: a,
        vy: r,
        vz: l,
        age: 0,
        life: o,
        phase: Math.random() * 100,
        hx: t,
        hy: i,
        hz: n,
        fleeing: !1,
      });
  }
  updateGlows(e, t, i) {
    const n = t.pos,
      o = this.opts.particles,
      a =
        i &&
        !t.raining &&
        o > 0 &&
        hae.has(this.biome) &&
        this.grassAnchors.length > 0
          ? Math.round((this.mobile ? 18 : 38) * Math.min(1.2, o))
          : 0,
      r =
        i &&
        o > 0 &&
        (this.haunted > 0.3 || this.biome === "autumn" || this.bloodMoon)
          ? this.haunted > 0.3 || this.bloodMoon
            ? 6
            : 3
          : 0;
    let l = 0,
      c = 0;
    for (const u of this.glows) u.kind === 0 ? l++ : u.kind === 1 && c++;
    if (l < a && Math.random() < e * 6) {
      const u =
        this.grassAnchors[Math.floor(Math.random() * this.grassAnchors.length)];
      Math.hypot(u.x - n.x, u.z - n.z) < 24 &&
        this.spawnGlow(
          0,
          u.x + Math.random(),
          u.y + 0.3 + Math.random() * 1.5,
          u.z + Math.random(),
          18 + Math.random() * 25,
        );
    }
    if (c < r && Math.random() < e * 0.5) {
      const u = Math.random() * Math.PI * 2,
        f = 14 + Math.random() * 12,
        p = n.x + Math.cos(u) * f,
        m = n.z + Math.sin(u) * f,
        g = this.world.groundAt(p, m, Math.min(jt - 1, n.y + 3));
      Number.isFinite(g) &&
        Math.abs(g - n.y) < 10 &&
        this.spawnGlow(1, p, g + 1 + Math.random(), m, 30 + Math.random() * 30);
    }
    for (const u of this.cauldrons) {
      const f = Math.hypot(u.x + 0.5 - n.x, u.z + 0.5 - n.z);
      f > 20 ||
        Math.random() > e * 5 ||
        (this.spawnGlow(
          2,
          u.x + 0.25 + Math.random() * 0.5,
          u.y + 0.68,
          u.z + 0.25 + Math.random() * 0.5,
          0.8 + Math.random() * 0.8,
          0,
          0.35 + Math.random() * 0.3,
          0,
        ),
        f < 10 && Math.random() < 0.12 && this.sfx.bubblePop(f));
    }
    let h = 0;
    for (let u = this.glows.length - 1; u >= 0; u--) {
      const f = this.glows[u];
      f.age += e;
      const p = Math.hypot(f.x - n.x, f.z - n.z);
      if (
        f.age > f.life ||
        p > 40 ||
        (f.kind === 0 && !i) ||
        (f.kind === 1 && (!i || (f.fleeing && f.age > f.life - 0.1)))
      ) {
        this.glows.splice(u, 1);
        continue;
      }
      let m = 1,
        g = 1;
      if (f.kind === 0) {
        const y = f.phase + this.clock * 0.6;
        ((f.vx +=
          (Math.sin(y * 1.3) * 0.6 + (f.hx - f.x) * 0.3 - f.vx) * e * 1.5),
          (f.vy +=
            (Math.sin(y * 1.9) * 0.3 + (f.hy - f.y) * 0.5 - f.vy) * e * 1.5),
          (f.vz +=
            (Math.cos(y * 1.1) * 0.6 + (f.hz - f.z) * 0.3 - f.vz) * e * 1.5),
          (m =
            Math.pow(
              Math.max(
                0,
                Math.sin(this.clock * (1.1 + (f.phase % 1) * 0.8) + f.phase),
              ),
              5,
            ) * Math.min(1, f.age, f.life - f.age)),
          (g = 0.34),
          this.color.setRGB(0.78, 1, 0.32));
      } else if (f.kind === 1) {
        const y = f.x - n.x,
          b = f.z - n.z,
          S = Math.hypot(y, b) || 1;
        S < 7 && !f.fleeing && ((f.fleeing = !0), (f.life = f.age + 2.2));
        const M = f.phase + this.clock * 0.4,
          E = f.fleeing ? 4 : 0.4;
        ((f.vx += ((y / S) * E + Math.sin(M) * 0.5 - f.vx) * e),
          (f.vz += ((b / S) * E + Math.cos(M * 1.3) * 0.5 - f.vz) * e),
          (f.vy += ((f.hy - f.y) * 0.4 + Math.sin(M * 2.1) * 0.2 - f.vy) * e),
          (m =
            Math.min(1, f.age * 0.7, (f.life - f.age) * 0.6) *
            (0.65 + 0.35 * Math.sin(this.clock * 2.3 + f.phase))),
          (g = 0.9),
          this.color.setRGB(0.3, 0.7, 1));
      } else
        f.kind === 2
          ? ((m = Math.min(1, (f.life - f.age) * 3) * 0.8),
            (g = 0.16),
            this.color.setRGB(0.5, 1, 0.35))
          : ((f.vy -= 4 * e),
            (m = Math.min(1, (f.life - f.age) * 2)),
            (g = 0.14),
            this.color.setRGB(1, 0.62, 0.2));
      ((f.x += f.vx * e),
        (f.y += f.vy * e),
        (f.z += f.vz * e),
        !(h >= this.glowMax) &&
          ((this.glowPos[h * 3] = f.x),
          (this.glowPos[h * 3 + 1] = f.y),
          (this.glowPos[h * 3 + 2] = f.z),
          (this.glowColor[h * 3] = this.color.r),
          (this.glowColor[h * 3 + 1] = this.color.g),
          (this.glowColor[h * 3 + 2] = this.color.b),
          (this.glowSize[h] = g),
          (this.glowAlpha[h] = Math.max(0, m)),
          h++));
    }
    const d = this.glowPoints.geometry;
    d.setDrawRange(0, h);
    for (const u of ["position", "aColor", "aSize", "aAlpha"])
      d.getAttribute(u).needsUpdate = !0;
  }
  clearGhosts() {
    for (const e of this.ghosts)
      (this.scene.remove(e.sprite), e.sprite.material.dispose());
    this.ghosts.length = 0;
  }
  updateGhosts(e, t, i) {
    if (
      ((this.ghostCd -= e),
      this.opts.screamers &&
        i &&
        this.haunted >= 0.6 &&
        t.alive &&
        this.ghosts.length === 0 &&
        this.ghostCd <= 0)
    ) {
      this.ghostCd = 35 + Math.random() * 50;
      const a = this.specials
        .filter((r) => TC.has(r.id))
        .filter((r) => {
          const l = Math.hypot(r.x - t.pos.x, r.z - t.pos.z);
          return l > 11 && l < 26;
        });
      if (a.length) {
        const r = a[Math.floor(Math.random() * a.length)];
        this.ghostTex ??= vae();
        const l = new Ws(
          new hn({
            map: this.ghostTex,
            transparent: !0,
            depthWrite: !1,
            opacity: 0,
            fog: !0,
          }),
        );
        (l.scale.set(1.3, 2.6, 1),
          l.position.set(
            r.x + 0.5 + (Math.random() - 0.5),
            r.y + 1.25,
            r.z + 0.5 + (Math.random() - 0.5),
          ),
          (l.renderOrder = zi.particle),
          this.scene.add(l),
          this.ghosts.push({
            sprite: l,
            age: 0,
            life: 5 + Math.random() * 4,
            seen: 0,
            baseY: l.position.y,
          }));
        const c = l.position.distanceTo(t.pos);
        this.sfx.whisper(Math.max(4, c * 0.5), 0);
      }
    }
    t.camera.getWorldDirection(this.look);
    for (let o = this.ghosts.length - 1; o >= 0; o--) {
      const a = this.ghosts[o];
      a.age += e;
      const r = a.sprite.position.clone().sub(t.pos),
        l = r.length();
      (r.normalize().dot(this.look) > 0.975 && (a.seen += e),
        (a.seen > 0.7 || l < 8) &&
          a.life - a.age > 0.8 &&
          ((a.life = a.age + 0.8), this.sfx.ghostWhoosh(l, 0)));
      const h = Math.min(1, a.age / 1.2),
        d = Math.min(1, (a.life - a.age) / 0.8);
      ((a.sprite.material.opacity =
        Math.max(0, Math.min(h, d)) * (0.62 + Math.sin(a.age * 7) * 0.06)),
        (a.sprite.position.y = a.baseY + Math.sin(a.age * 1.6) * 0.12),
        (a.age >= a.life || !i) &&
          (this.scene.remove(a.sprite),
          a.sprite.material.dispose(),
          this.ghosts.splice(o, 1)));
    }
  }
  updateMist(e, t, i) {
    const n =
      t.earth && this.opts.particles > 0 && (i || t.dayness < 0.45)
        ? Math.max(
            this.haunted,
            this.biome === "autumn" ? 0.55 : 0,
            this.bloodMoon ? 0.6 : 0,
          ) * (i ? 1 : 0.5)
        : 0;
    this.mistLevel += (n - this.mistLevel) * Math.min(1, e * 0.4);
    const o = this.mobile ? 8 : this.opts.particles < 1 ? 10 : 16;
    if (this.mistLevel > 0.02 && this.mist.length === 0) {
      const r = bae();
      for (let l = 0; l < o; l++) {
        const c = new Ws(
          new hn({
            map: r,
            transparent: !0,
            depthWrite: !1,
            opacity: 0,
            fog: !0,
            color: 12897494,
          }),
        );
        (c.scale.set(9, 3, 1),
          (c.renderOrder = zi.particle - 1),
          (c.userData.seed = Math.random() * 100),
          this.scene.add(c),
          this.mist.push(c));
      }
    }
    const a = 0.2 + t.dayness * 0.8;
    for (const r of this.mist) {
      if (((r.visible = this.mistLevel > 0.02), !r.visible)) continue;
      const l = Math.hypot(r.position.x - t.pos.x, r.position.z - t.pos.z);
      if (l > 30 || r.userData.fresh === void 0) {
        const h = Math.random() * Math.PI * 2,
          d = 6 + Math.random() * 22,
          u = t.pos.x + Math.cos(h) * d,
          f = t.pos.z + Math.sin(h) * d,
          p = this.world.groundAt(u, f, Math.min(jt - 1, t.pos.y + 4));
        (r.position.set(u, (Number.isFinite(p) ? p : t.pos.y) + 0.7, f),
          (r.userData.fresh = !0));
      }
      ((r.position.x +=
        Math.sin(this.clock * 0.05 + r.userData.seed) * e * 0.3 +
        t.windX * e * 0.6),
        (r.position.z +=
          Math.cos(this.clock * 0.04 + r.userData.seed) * e * 0.3 +
          t.windZ * e * 0.6));
      const c = Math.min(1, Math.max(0, (l - 3) / 5));
      ((r.material.opacity = this.mistLevel * 0.42 * c),
        r.material.color.copy(this.bloodMoon ? fae : uae).multiplyScalar(a));
    }
  }
  updateSounds(e, t, i) {
    if (!t.alive) return;
    this.right.set(Math.cos(t.yaw), 0, -Math.sin(t.yaw));
    const n = () => (Math.random() - 0.5) * 1.7;
    if (((this.cricketT -= e), this.cricketT <= 0)) {
      const o =
        i && !t.raining && dae.has(this.biome) && this.grassAnchors.length > 4;
      ((this.cricketT = o ? 0.35 + Math.random() * 1.4 : 3),
        o &&
          this.sfx.cricket(
            5 + Math.random() * 22,
            n(),
            Math.floor(Math.random() * 50),
          ));
    }
    if (
      ((this.owlT -= e),
      this.owlT <= 0 &&
        ((this.owlT = 25 + Math.random() * 50),
        i &&
          !t.raining &&
          (this.biome === "autumn" ||
            this.biome === "forest" ||
            this.haunted > 0.3) &&
          this.sfx.owlHoot(20 + Math.random() * 30, n())),
      (this.graveT -= e),
      this.graveT <= 0 &&
        ((this.graveT = 9 + Math.random() * 14),
        this.haunted > 0.5 && (i || Math.random() < 0.2)))
    ) {
      const o = Math.random();
      o < 0.3
        ? this.sfx.whisper(4 + Math.random() * 8, n())
        : o < 0.58
          ? this.sfx.moan(14 + Math.random() * 18, n())
          : o < 0.72
            ? this.sfx.bellToll(50 + Math.random() * 40, n())
            : o < 0.86
              ? this.sfx.gateCreak(8 + Math.random() * 10, n())
              : this.sfx.ghostWhoosh(8 + Math.random() * 8, n());
    }
  }
  wendigoPresence(e, t, i, n) {
    const o = t[0];
    if (!o || o.dist > 34) {
      this.heartT = 0;
      return;
    }
    this.heartT -= e;
    const a = Math.max(0, 1 - o.dist / 34) + (o.hunting ? 0.35 : 0);
    if (
      (this.heartT <= 0 &&
        ((this.heartT = Math.max(0.42, 1.1 - a * 0.7)),
        this.sfx.heartbeat(Math.min(1, a))),
      (this.stepT -= e),
      this.stepT <= 0 && o.moving && o.dist < 26)
    ) {
      ((this.stepT = o.hunting ? 0.32 : 0.62),
        this.right.set(Math.cos(n), 0, -Math.sin(n)));
      const r =
        ((o.pos.x - i.x) * this.right.x + (o.pos.z - i.z) * this.right.z) /
        (o.dist || 1);
      this.sfx.wendigoStep(o.dist, r);
    }
  }
  wendigoEvent(e, t, i, n = 0, o) {
    let a = 0;
    (t &&
      o &&
      (this.right.set(Math.cos(n), 0, -Math.sin(n)),
      (a =
        ((t.x - o.x) * this.right.x + (t.z - o.z) * this.right.z) / (i || 1))),
      e === hr.ROAR
        ? (this.sfx.wendigoRoar(i, a),
          i < 30 && this.shake(0.35 * (1 - i / 30)))
        : e === hr.SCREECH
          ? this.sfx.wendigoScreech(i, a)
          : e === hr.BITE &&
            (this.sfx.wendigoRoar(Math.max(i, 12), a),
            i < 6 && this.shake(0.5)));
  }
  fx(e, t, i, n, o) {
    const a = Math.hypot(t - o.x, i - o.y, n - o.z);
    if (e === ju.CARVE) {
      this.sfx.carve(a);
      for (let r = 0; r < 14; r++)
        this.spawnGlow(
          3,
          t + (Math.random() - 0.5) * 0.6,
          i + 0.2,
          n + (Math.random() - 0.5) * 0.6,
          0.6 + Math.random() * 0.4,
          (Math.random() - 0.5) * 2,
          1.5 + Math.random() * 2,
          (Math.random() - 0.5) * 2,
        );
    } else if (e === ju.BREW) {
      this.sfx.brew(a);
      for (let r = 0; r < 18; r++)
        this.spawnGlow(
          2,
          t + (Math.random() - 0.5) * 0.5,
          i,
          n + (Math.random() - 0.5) * 0.5,
          0.8 + Math.random() * 0.8,
          (Math.random() - 0.5) * 0.6,
          0.8 + Math.random() * 1.2,
          (Math.random() - 0.5) * 0.6,
        );
    } else if (e === ju.WENDIGO_APPEAR)
      a < 70 && (this.sfx.horrorSting(), this.shake(0.25));
    else if (e === ju.WENDIGO_VANISH) {
      a < 60 && this.sfx.ghostWhoosh(a, 0);
      for (let r = 0; r < 10; r++)
        this.spawnGlow(
          1,
          t + (Math.random() - 0.5) * 1.5,
          i + Math.random() * 1.5,
          n + (Math.random() - 0.5) * 1.5,
          1.2 + Math.random(),
          0,
          0.6,
          0,
        );
    }
  }
  updateScreamer(e, t, i) {
    this.screamerCd -= e;
    let n = t.yaw - this.lastYaw;
    ((n = Math.atan2(Math.sin(n), Math.cos(n))),
      (this.lastYaw = t.yaw),
      (this.yawSpin = Math.max(
        0,
        this.yawSpin * Math.exp(-e * 3) + Math.abs(n),
      )),
      !(!this.opts.screamers || !i || !t.alive || this.haunted < 0.6) &&
        (this.screamerEl || this.buildScreamer(),
        !(this.screamerCd > 0) &&
          this.yawSpin > 2.2 &&
          ((this.yawSpin = 0),
          Math.random() < 0.3
            ? ((this.screamerCd = 420 + Math.random() * 300),
              this.triggerScreamer())
            : (this.screamerCd = 25))));
  }
  buildScreamer() {
    if (!this.screamerEl) {
      const e = document.createElement("div");
      ((e.id = "screamer"),
        (e.style.cssText =
          "position:fixed;inset:0;z-index:95;pointer-events:none;display:none;align-items:center;justify-content:center;background:#000;"));
      const t = document.createElement("canvas");
      ((t.style.cssText = "width:100vw;height:100vh;object-fit:cover;"),
        wae(t),
        e.appendChild(t),
        document.body.appendChild(e),
        (this.screamerEl = e));
    }
  }
  triggerScreamer() {
    this.screamerEl || this.buildScreamer();
    const e = this.screamerEl;
    ((e.style.display = "flex"),
      (e.animate(
        [
          { opacity: 1, transform: "scale(1.35) rotate(-2deg)" },
          { opacity: 1, transform: "scale(1.02) rotate(2deg)", offset: 0.25 },
          {
            opacity: 0.95,
            transform: "scale(1.08) rotate(-1deg)",
            offset: 0.6,
          },
          { opacity: 0, transform: "scale(1.18)" },
        ],
        { duration: 850, easing: "ease-out" },
      ).onfinish = () => {
        e.style.display = "none";
      }),
      this.sfx.scream(),
      this.shake(0.8));
  }
}
