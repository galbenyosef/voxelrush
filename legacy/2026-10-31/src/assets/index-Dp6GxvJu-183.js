// index-Dp6GxvJu 183 — math
// Lines 102542-103292 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class hee {
  constructor(e, t, i, s, o, a) {
    w(this, "opts", { fallingLeaves: !0, screamers: !0, particles: 1 });
    w(this, "clock", 0);
    w(this, "scanT", 0);
    w(this, "leafAnchors", []);
    w(this, "leafWeight", 0);
    w(this, "grassAnchors", []);
    w(this, "specials", []);
    w(this, "graves", 0);
    w(this, "cauldrons", []);
    w(this, "haunted", 0);
    w(this, "biome", "plains");
    w(this, "leafMesh");
    w(this, "leafGeo");
    w(this, "leafSpawn");
    w(this, "leafInfo");
    w(this, "leafColor");
    w(this, "leafMat");
    w(this, "leafCursor", 0);
    w(this, "leafBudget", 0);
    w(this, "leafCount");
    w(this, "glows", []);
    w(this, "glowPoints");
    w(this, "glowPos");
    w(this, "glowColor");
    w(this, "glowSize");
    w(this, "glowAlpha");
    w(this, "glowMax", 160);
    w(this, "ghostTex", null);
    w(this, "ghosts", []);
    w(this, "ghostCd", 20);
    w(this, "mist", []);
    w(this, "mistLevel", 0);
    w(this, "screamerEl", null);
    w(this, "screamerCd", 240);
    w(this, "lastYaw", 0);
    w(this, "yawSpin", 0);
    w(this, "cricketT", 1);
    w(this, "owlT", 30);
    w(this, "graveT", 8);
    w(this, "heartT", 0);
    w(this, "stepT", 0);
    w(this, "color", new ze());
    w(this, "right", new k());
    w(this, "look", new k());
    w(this, "bloodMoon", !1);
    ((this.scene = e),
      (this.world = t),
      (this.sfx = i),
      (this.mobile = s),
      (this.seed = o),
      (this.shake = a),
      (this.leafCount = s ? 180 : 420));
    const r = new pn(1, 1);
    ((this.leafGeo = new aH()),
      (this.leafGeo.index = r.index),
      this.leafGeo.setAttribute("position", r.getAttribute("position")),
      this.leafGeo.setAttribute("uv", r.getAttribute("uv")),
      (this.leafSpawn = new eo(new Float32Array(this.leafCount * 4), 4)),
      (this.leafInfo = new eo(new Float32Array(this.leafCount * 4), 4)),
      (this.leafColor = new eo(new Float32Array(this.leafCount * 3), 3)));
    for (let c = 0; c < this.leafCount; c++) this.leafSpawn.setW(c, -1e6);
    for (const c of [this.leafSpawn, this.leafInfo, this.leafColor])
      c.setUsage(Mn);
    (this.leafGeo.setAttribute("aSpawn", this.leafSpawn),
      this.leafGeo.setAttribute("aInfo", this.leafInfo),
      this.leafGeo.setAttribute("aColor", this.leafColor),
      (this.leafGeo.instanceCount = this.leafCount),
      (this.leafMat = new sn({
        vertexShader: nee,
        fragmentShader: see,
        side: Ai,
        uniforms: {
          uTime: { value: 0 },
          uWind: { value: new tt() },
          uLight: { value: 1 },
        },
      })),
      (this.leafMesh = new le(this.leafGeo, this.leafMat)),
      (this.leafMesh.frustumCulled = !1),
      (this.leafMesh.renderOrder = Gi.particle),
      e.add(this.leafMesh),
      (this.glowPos = new Float32Array(this.glowMax * 3)),
      (this.glowColor = new Float32Array(this.glowMax * 3)),
      (this.glowSize = new Float32Array(this.glowMax)),
      (this.glowAlpha = new Float32Array(this.glowMax)));
    const l = new ci();
    (l.setAttribute("position", new oi(this.glowPos, 3).setUsage(Mn)),
      l.setAttribute("aColor", new oi(this.glowColor, 3).setUsage(Mn)),
      l.setAttribute("aSize", new oi(this.glowSize, 1).setUsage(Mn)),
      l.setAttribute("aAlpha", new oi(this.glowAlpha, 1).setUsage(Mn)),
      l.setDrawRange(0, 0),
      (this.glowPoints = new T0(
        l,
        new sn({
          vertexShader: oee,
          fragmentShader: aee,
          transparent: !0,
          depthWrite: !1,
          blending: cn,
          uniforms: { uScale: { value: 420 } },
        }),
      )),
      (this.glowPoints.frustumCulled = !1),
      (this.glowPoints.renderOrder = Gi.particle),
      e.add(this.glowPoints));
  }
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
    ((this.scanT -= e),
      this.scanT <= 0 && ((this.scanT = 0.9), this.scan(t.pos)));
    const s = t.dayness < 0.32;
    if ((this.updateLeaves(e, t), t.leavesOnly)) {
      this.idle();
      return;
    }
    (this.updateGlows(e, t, s),
      this.updateGhosts(e, t, s),
      this.updateMist(e, t, s),
      this.updateSounds(e, t, s),
      this.updateScreamer(e, t, s));
  }
  idle() {
    (this.glowPoints.geometry.setDrawRange(0, 0), this.clearGhosts());
    for (const e of this.mist) e.visible = !1;
  }
  scan(e) {
    const t = Math.floor(e.x / Pe),
      i = Math.floor(e.z / Pe);
    ((this.leafAnchors.length = 0),
      (this.grassAnchors.length = 0),
      (this.specials.length = 0),
      (this.cauldrons.length = 0),
      (this.leafWeight = 0),
      (this.graves = 0));
    let s = 0;
    for (let o = -2; o <= 2; o++)
      for (let a = -2; a <= 2; a++) {
        const r = t + o,
          l = i + a,
          c = this.world.chunkFeatures(r, l);
        if (!c) continue;
        const h = r * Pe,
          d = l * Pe,
          u = (f) => ({
            x: h + (f & 15),
            y: f >> 8,
            z: d + ((f >> 4) & 15),
            id: 0,
          });
        for (const f of c.leaves) {
          const p = u(f);
          p.id = this.world.getBlock(p.x, p.y, p.z);
          const m = X_[p.id] ?? 0;
          m <= 0 || (this.leafAnchors.push(p), (this.leafWeight += m));
        }
        if (Math.abs(o) <= 1 && Math.abs(a) <= 1)
          for (const f of c.grass) this.grassAnchors.push(u(f));
        for (const f of c.specials) {
          const p = u(f);
          ((p.id = this.world.getBlock(p.x, p.y, p.z)), this.specials.push(p));
          const m = Math.hypot(p.x - e.x, p.z - e.z);
          (Z_.has(p.id) && m < 34 && this.graves++,
            p.id === BLOCK.CAULDRON && (this.cauldrons.push(p), m < 30 && s++));
        }
      }
    ((this.haunted = Math.min(1, this.graves / 6 + s * 0.6)),
      (this.biome = rr(this.seed(), e.x, e.z)));
  }
  updateLeaves(e, t) {
    var a, r, l;
    if (
      !this.opts.fallingLeaves ||
      this.opts.particles <= 0 ||
      this.leafAnchors.length === 0
    )
      return;
    const i = Math.hypot(t.windX, t.windZ),
      s =
        Math.min(this.mobile ? 10 : 26, this.leafWeight * 0.09) *
        (0.6 + i * 1.2) *
        Math.min(1.3, this.opts.particles);
    this.leafBudget += s * e;
    let o = !1;
    for (let c = 0; this.leafBudget >= 1 && c < 12; c++) {
      this.leafBudget -= 1;
      let h = Math.random() * this.leafWeight,
        d = this.leafAnchors[0];
      for (const x of this.leafAnchors)
        if (((h -= X_[x.id] ?? 0), h <= 0)) {
          d = x;
          break;
        }
      if (
        Math.hypot(d.x - t.pos.x, d.z - t.pos.z) > 34 ||
        !$n(this.world.getBlock(d.x, d.y, d.z)) ||
        this.world.getBlock(d.x, d.y - 1, d.z) !== BLOCK.AIR
      )
        continue;
      let u = d.y - 1;
      for (; u > Math.max(0, d.y - 48); u--) {
        const x = this.world.getBlock(d.x, u, d.z);
        if (
          x !== BLOCK.AIR &&
          (((a = BLOCKS[x]) != null && a.solid) ||
            ((r = BLOCKS[x]) != null && r.liquid))
        )
          break;
      }
      const f = Math.min(
          Kt,
          u +
            ((l = BLOCKS[this.world.getBlock(d.x, u, d.z)]) != null && l.liquid
              ? 0.88
              : 1),
        ),
        p = this.leafCursor;
      this.leafCursor = (this.leafCursor + 1) % this.leafCount;
      const m = d.x + Math.random(),
        y = d.z + Math.random(),
        g = d.y - 0.02,
        b = (g - f) / 0.95,
        S = d.id === BLOCK.SAKURA_LEAVES;
      (this.leafSpawn.setXYZW(p, m, g, y, this.clock),
        this.leafInfo.setXYZW(
          p,
          f,
          Math.random() * 100,
          b + 4 + Math.random() * 6,
          S ? 0.12 : 0.17 + Math.random() * 0.08,
        ));
      const M = j_[d.id] ?? j_[BLOCK.LEAVES];
      (this.color.setHex(M[Math.floor(Math.random() * M.length)]),
        this.leafColor.setXYZ(p, this.color.r, this.color.g, this.color.b),
        (o = !0));
    }
    o &&
      ((this.leafSpawn.needsUpdate = !0),
      (this.leafInfo.needsUpdate = !0),
      (this.leafColor.needsUpdate = !0));
  }
  spawnGlow(e, t, i, s, o, a = 0, r = 0, l = 0) {
    this.glows.length >= this.glowMax ||
      this.glows.push({
        kind: e,
        x: t,
        y: i,
        z: s,
        vx: a,
        vy: r,
        vz: l,
        age: 0,
        life: o,
        phase: Math.random() * 100,
        hx: t,
        hy: i,
        hz: s,
        fleeing: !1,
      });
  }
  updateGlows(e, t, i) {
    const s = t.pos,
      o = this.opts.particles,
      a =
        i &&
        !t.raining &&
        o > 0 &&
        JJ.has(this.biome) &&
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
      Math.hypot(u.x - s.x, u.z - s.z) < 24 &&
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
        p = s.x + Math.cos(u) * f,
        m = s.z + Math.sin(u) * f,
        y = this.world.groundAt(p, m, Math.min(Kt - 1, s.y + 3));
      Number.isFinite(y) &&
        Math.abs(y - s.y) < 10 &&
        this.spawnGlow(1, p, y + 1 + Math.random(), m, 30 + Math.random() * 30);
    }
    for (const u of this.cauldrons) {
      const f = Math.hypot(u.x + 0.5 - s.x, u.z + 0.5 - s.z);
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
      const p = Math.hypot(f.x - s.x, f.z - s.z);
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
        y = 1;
      if (f.kind === 0) {
        const g = f.phase + this.clock * 0.6;
        ((f.vx +=
          (Math.sin(g * 1.3) * 0.6 + (f.hx - f.x) * 0.3 - f.vx) * e * 1.5),
          (f.vy +=
            (Math.sin(g * 1.9) * 0.3 + (f.hy - f.y) * 0.5 - f.vy) * e * 1.5),
          (f.vz +=
            (Math.cos(g * 1.1) * 0.6 + (f.hz - f.z) * 0.3 - f.vz) * e * 1.5),
          (m =
            Math.pow(
              Math.max(
                0,
                Math.sin(this.clock * (1.1 + (f.phase % 1) * 0.8) + f.phase),
              ),
              5,
            ) * Math.min(1, f.age, f.life - f.age)),
          (y = 0.34),
          this.color.setRGB(0.78, 1, 0.32));
      } else if (f.kind === 1) {
        const g = f.x - s.x,
          b = f.z - s.z,
          S = Math.hypot(g, b) || 1;
        S < 7 && !f.fleeing && ((f.fleeing = !0), (f.life = f.age + 2.2));
        const M = f.phase + this.clock * 0.4,
          x = f.fleeing ? 4 : 0.4;
        ((f.vx += ((g / S) * x + Math.sin(M) * 0.5 - f.vx) * e),
          (f.vz += ((b / S) * x + Math.cos(M * 1.3) * 0.5 - f.vz) * e),
          (f.vy += ((f.hy - f.y) * 0.4 + Math.sin(M * 2.1) * 0.2 - f.vy) * e),
          (m =
            Math.min(1, f.age * 0.7, (f.life - f.age) * 0.6) *
            (0.65 + 0.35 * Math.sin(this.clock * 2.3 + f.phase))),
          (y = 0.9),
          this.color.setRGB(0.3, 0.7, 1));
      } else
        f.kind === 2
          ? ((m = Math.min(1, (f.life - f.age) * 3) * 0.8),
            (y = 0.16),
            this.color.setRGB(0.5, 1, 0.35))
          : ((f.vy -= 4 * e),
            (m = Math.min(1, (f.life - f.age) * 2)),
            (y = 0.14),
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
          (this.glowSize[h] = y),
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
        .filter((r) => Z_.has(r.id))
        .filter((r) => {
          const l = Math.hypot(r.x - t.pos.x, r.z - t.pos.z);
          return l > 11 && l < 26;
        });
      if (a.length) {
        const r = a[Math.floor(Math.random() * a.length)];
        this.ghostTex ?? (this.ghostTex = ree());
        const l = new os(
          new es({
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
          (l.renderOrder = Gi.particle),
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
    const s =
      t.earth && this.opts.particles > 0 && (i || t.dayness < 0.45)
        ? Math.max(
            this.haunted,
            this.biome === "autumn" ? 0.55 : 0,
            this.bloodMoon ? 0.6 : 0,
          ) * (i ? 1 : 0.5)
        : 0;
    this.mistLevel += (s - this.mistLevel) * Math.min(1, e * 0.4);
    const o = this.mobile ? 8 : 16;
    if (this.mistLevel > 0.02 && this.mist.length === 0) {
      const r = lee();
      for (let l = 0; l < o; l++) {
        const c = new os(
          new es({
            map: r,
            transparent: !0,
            depthWrite: !1,
            opacity: 0,
            fog: !0,
            color: 12897494,
          }),
        );
        (c.scale.set(9, 3, 1),
          (c.renderOrder = Gi.particle - 1),
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
          p = this.world.groundAt(u, f, Math.min(Kt - 1, t.pos.y + 4));
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
        r.material.color.copy(this.bloodMoon ? iee : tee).multiplyScalar(a));
    }
  }
  updateSounds(e, t, i) {
    if (!t.alive) return;
    this.right.set(Math.cos(t.yaw), 0, -Math.sin(t.yaw));
    const s = () => (Math.random() - 0.5) * 1.7;
    if (((this.cricketT -= e), this.cricketT <= 0)) {
      const o =
        i && !t.raining && eee.has(this.biome) && this.grassAnchors.length > 4;
      ((this.cricketT = o ? 0.35 + Math.random() * 1.4 : 3),
        o &&
          this.sfx.cricket(
            5 + Math.random() * 22,
            s(),
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
          this.sfx.owlHoot(20 + Math.random() * 30, s())),
      (this.graveT -= e),
      this.graveT <= 0 &&
        ((this.graveT = 9 + Math.random() * 14),
        this.haunted > 0.5 && (i || Math.random() < 0.2)))
    ) {
      const o = Math.random();
      o < 0.3
        ? this.sfx.whisper(4 + Math.random() * 8, s())
        : o < 0.58
          ? this.sfx.moan(14 + Math.random() * 18, s())
          : o < 0.72
            ? this.sfx.bellToll(50 + Math.random() * 40, s())
            : o < 0.86
              ? this.sfx.gateCreak(8 + Math.random() * 10, s())
              : this.sfx.ghostWhoosh(8 + Math.random() * 8, s());
    }
  }
  wendigoPresence(e, t, i, s) {
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
        this.right.set(Math.cos(s), 0, -Math.sin(s)));
      const r =
        ((o.pos.x - i.x) * this.right.x + (o.pos.z - i.z) * this.right.z) /
        (o.dist || 1);
      this.sfx.wendigoStep(o.dist, r);
    }
  }
  wendigoEvent(e, t, i, s = 0, o) {
    let a = 0;
    (t &&
      o &&
      (this.right.set(Math.cos(s), 0, -Math.sin(s)),
      (a =
        ((t.x - o.x) * this.right.x + (t.z - o.z) * this.right.z) / (i || 1))),
      e === ANIMAL_PRODUCT.ROAR
        ? (this.sfx.wendigoRoar(i, a),
          i < 30 && this.shake(0.35 * (1 - i / 30)))
        : e === ANIMAL_PRODUCT.SCREECH
          ? this.sfx.wendigoScreech(i, a)
          : e === ANIMAL_PRODUCT.BITE &&
            (this.sfx.wendigoRoar(Math.max(i, 12), a),
            i < 6 && this.shake(0.5)));
  }
  fx(e, t, i, s, o) {
    const a = Math.hypot(t - o.x, i - o.y, s - o.z);
    if (e === Bf.CARVE) {
      this.sfx.carve(a);
      for (let r = 0; r < 14; r++)
        this.spawnGlow(
          3,
          t + (Math.random() - 0.5) * 0.6,
          i + 0.2,
          s + (Math.random() - 0.5) * 0.6,
          0.6 + Math.random() * 0.4,
          (Math.random() - 0.5) * 2,
          1.5 + Math.random() * 2,
          (Math.random() - 0.5) * 2,
        );
    } else if (e === Bf.BREW) {
      this.sfx.brew(a);
      for (let r = 0; r < 18; r++)
        this.spawnGlow(
          2,
          t + (Math.random() - 0.5) * 0.5,
          i,
          s + (Math.random() - 0.5) * 0.5,
          0.8 + Math.random() * 0.8,
          (Math.random() - 0.5) * 0.6,
          0.8 + Math.random() * 1.2,
          (Math.random() - 0.5) * 0.6,
        );
    } else if (e === Bf.WENDIGO_APPEAR)
      a < 70 && (this.sfx.horrorSting(), this.shake(0.25));
    else if (e === Bf.WENDIGO_VANISH) {
      a < 60 && this.sfx.ghostWhoosh(a, 0);
      for (let r = 0; r < 10; r++)
        this.spawnGlow(
          1,
          t + (Math.random() - 0.5) * 1.5,
          i + Math.random() * 1.5,
          s + (Math.random() - 0.5) * 1.5,
          1.2 + Math.random(),
          0,
          0.6,
          0,
        );
    }
  }
  updateScreamer(e, t, i) {
    this.screamerCd -= e;
    let s = t.yaw - this.lastYaw;
    ((s = Math.atan2(Math.sin(s), Math.cos(s))),
      (this.lastYaw = t.yaw),
      (this.yawSpin = Math.max(
        0,
        this.yawSpin * Math.exp(-e * 3) + Math.abs(s),
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
        cee(t),
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
