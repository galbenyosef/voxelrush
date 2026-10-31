// index-Dp6GxvJu 212 — math
// Lines 115292-116541 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Tc = class Tc {
  constructor(e) {
    w(this, "_particleScale", 1);
    w(this, "pool", new _R());
    w(this, "rocketSmoke", new _R(768, !0));
    w(this, "trailBudget", 96);
    w(this, "exhaustTime", 0);
    w(this, "trailSpawn", {
      pos: new k(),
      vel: new k(0.12, 0.16, 0.08),
      count: 1,
      color: 12961994,
      colorJitter: 0.035,
      size: 1.5,
      sizeJitter: 0.3,
      life: 1,
      lifeJitter: 0.16,
      speed: 0.18,
      grav: -0.12,
      drag: 0.3,
      alpha: 0.3,
      growth: 2.3,
      spread: 0.035,
      lit: !0,
    });
    w(this, "debris", new die());
    w(this, "tracerBatches");
    w(this, "targetMarks", []);
    w(this, "tracerMat");
    w(this, "incomingMat");
    w(this, "flashMat");
    w(this, "flashes", []);
    w(this, "spareFlashes", []);
    w(this, "lights", []);
    w(this, "blastWaves", []);
    w(this, "trauma", 0);
    w(this, "tmpSpawn", new k());
    w(this, "tmpVel", new k());
    w(this, "flashPos", new k());
    w(this, "lightProbe", null);
    w(this, "blastFx");
    w(this, "timeScale", 1);
    w(this, "groundProbe", null);
    w(this, "fragDir", new k());
    w(this, "fragFrom", new k());
    w(this, "fragTo", new k());
    ((this.scene = e),
      (this.blastFx = new Qte(e, {
        spawn: (i) => this.pool.spawn({ ...i, count: i.count }),
        shards: (i) => this.shards(i),
        flash: (i, s, o, a) => this.flash(i, s, o, a),
        fireLight: (i, s) => this.fireLight(i, s),
        addTrauma: (i) => this.addTrauma(i),
        n: (i) => this.n(i),
        scale: () => this._particleScale,
        ground: (i, s, o) =>
          this.groundProbe ? this.groundProbe(i, s, o) : null,
      })),
      e.add(this.pool.points),
      (this.rocketSmoke.points.name = "rocket-smoke"),
      e.add(this.rocketSmoke.points),
      e.add(this.debris.mesh),
      (this.tracerMat = new qt({
        color: 16765562,
        transparent: !0,
        opacity: 0.85,
        blending: cn,
        depthWrite: !1,
      })),
      (this.incomingMat = new qt({
        color: 16738874,
        transparent: !0,
        opacity: 1,
        blending: cn,
        depthWrite: !1,
      })));
    const t = new Ct(1, 1, 1);
    ((this.tracerBatches = [
      new MR(e, t, this.tracerMat, 0.035, 0.07),
      new MR(e, t, this.incomingMat, 0.085, 0.2),
    ]),
      (this.flashMat = new es({
        map: uie(),
        color: 16756816,
        transparent: !0,
        opacity: 1,
        blending: cn,
        depthWrite: !1,
        depthTest: !1,
        sizeAttenuation: !1,
      })),
      this.setLightBudget(4));
  }
  addBlastWave(e, t, i = !1) {
    if (this.particleScale <= 0) return;
    const s = i ? new mn(1, 24, 16) : new xs(1, 0.012, 6, 64),
      o = i
        ? $te(16759386, 0.68, !0)
        : new qt({
            color: 15326661,
            transparent: !0,
            opacity: 0.32,
            depthWrite: !1,
            side: Ai,
          }),
      a = new le(s, o);
    for (
      a.position.copy(e),
        i || (a.rotation.x = -Math.PI / 2),
        a.scale.setScalar(0.05),
        this.scene.add(a),
        this.blastWaves.push({
          mesh: a,
          age: 0,
          life: i ? 1.25 : 1.3,
          radius: t,
          fire: i,
        });
      this.blastWaves.length > 18;
    ) {
      const r = this.blastWaves.shift();
      (this.scene.remove(r.mesh),
        r.mesh.geometry.dispose(),
        r.mesh.material.dispose());
    }
  }
  get particleScale() {
    return this._particleScale;
  }
  set particleScale(e) {
    const t = Math.max(0, Number.isFinite(e) ? e : 0);
    (t === 0 &&
      this._particleScale !== 0 &&
      (this.pool.clear(),
      this.rocketSmoke.clear(),
      this.debris.clear(),
      this.blastFx.clear()),
      (this.pool.points.visible = t > 0),
      (this.debris.mesh.visible = t > 0),
      (this._particleScale = t));
  }
  setLightProbe(e) {
    this.lightProbe = e;
  }
  shards(e) {
    const t = this.n(e.count);
    t <= 0 || this.debris.spawn({ ...e, count: t, color: e.color }, 1);
  }
  setGroundProbe(e) {
    this.groundProbe = e;
  }
  setLightBudget(e) {
    for (; this.lights.length > e;) {
      const t = this.lights.pop();
      (t.light.removeFromParent(), t.light.dispose());
    }
    for (; this.lights.length < e;) {
      const t = new vp(16755285, 0, 40, 1.8);
      (this.scene.add(t),
        this.lights.push({
          light: t,
          life: 0,
          max: 1,
          peak: 0,
          fire: !1,
          seed: 0,
        }));
    }
  }
  n(e) {
    return this._particleScale <= 0
      ? 0
      : Math.max(1, Math.round(e * this._particleScale));
  }
  setPixelRatio(e) {
    (this.pool.setPixelRatio(e), this.rocketSmoke.setPixelRatio(e));
  }
  lightSlot(e) {
    if (!this.lights.length) return null;
    let t = this.lights[0],
      i = 1 / 0;
    for (const s of this.lights) {
      const o = s.life > 0 ? s.peak * (s.life / s.max) * (s.fire ? 3 : 1) : -1;
      o < i && ((t = s), (i = o));
    }
    return i <= e * 3 ? t : null;
  }
  flash(e, t, i = 0.25, s = 16755285) {
    const o = this.lightSlot(t);
    o &&
      (o.light.position.copy(e),
      o.light.color.set(s),
      (o.light.distance = 40),
      (o.life = i),
      (o.max = i),
      (o.peak = t),
      (o.fire = !1));
  }
  fireFill(e, t, i) {
    let s = 0;
    for (const o of this.lights) {
      if (!o.fire || o.light.intensity <= 0) continue;
      const a = o.light.position,
        r = (e - a.x) ** 2 + (t - a.y) ** 2 + (i - a.z) ** 2,
        l = o.light.distance;
      r >= l * l ||
        (s += (o.light.intensity / (40 + r * 2.2)) * (1 - r / (l * l)));
    }
    return Math.min(1, s);
  }
  fireLight(e, t) {
    const i = t >= 80,
      s = i ? 1400 : Math.min(420, 28 + t * 19),
      o = this.lightSlot(s * 3);
    o &&
      (o.light.position.set(e.x, e.y + Math.min(2.5, 0.6 + t * 0.15), e.z),
      (o.light.distance = i ? 220 : Math.min(110, 16 + t * 6.5)),
      (o.life = o.max = i ? 2.8 : Math.min(2, 0.7 + t * 0.075)),
      (o.peak = s),
      (o.fire = !0),
      (o.seed = Math.random() * 100));
  }
  blockBreak(e, t, i = 0) {
    const s = ca(i),
      o = Math.floor(e.y - 0.5) + 0.02;
    if (Bo(i)) {
      (this.shards({
        pos: e.clone().add(new k(0, -0.08, 0)),
        count: 11,
        color: t,
        size: 0.055,
        life: 1.7,
        speed: 1.5,
        grav: 5.5,
        drag: 1.1,
        spread: 0.3,
        floorY: o,
        spin: 13,
        bounce: 0.08,
        colorJitter: 0.22,
        shape: "blade",
      }),
        this.pool.spawn({
          pos: e,
          count: this.n(3),
          color: t,
          lit: !0,
          size: 1.8,
          life: 0.34,
          speed: 0.45,
          grav: 1.2,
          drag: 3.5,
          alpha: 0.15,
          colorJitter: 0.12,
          spread: 0.2,
        }));
      return;
    }
    const a = s === "stone" || s === "ore" || s === "metal";
    (this.shards({
      pos: e,
      count: 15,
      color: t,
      size: a ? 0.1 : 0.085,
      life: 2.2,
      lifeJitter: 0.5,
      speed: a ? 2.2 : 2.6,
      sizeJitter: 0.7,
      grav: 20,
      colorJitter: 0.16,
      spread: 0.34,
      floorY: o,
      spin: 11,
      bounce: a ? 0.24 : 0.38,
    }),
      this.pool.spawn({
        pos: e,
        count: this.n(4),
        color: t,
        lit: !0,
        size: 2.6,
        life: 0.42,
        sizeJitter: 0.5,
        growth: 0.7,
        speed: 0.8,
        grav: 1.5,
        drag: 3.2,
        alpha: 0.2,
        colorJitter: 0.1,
        spread: 0.26,
      }),
      s === "ore"
        ? (this.pool.spawn({
            pos: e,
            count: this.n(5),
            color: [16766819, 16773808, t],
            size: 1.5,
            life: 0.8,
            speed: 3.4,
            grav: 5,
            drag: 1.6,
            colorJitter: 0.08,
            spread: 0.25,
          }),
          this.flash(e, 1.6, 0.16, 16764006))
        : s === "wood" || s === "leaves"
          ? this.shards({
              pos: e,
              count: 8,
              color: t,
              size: 0.07,
              life: 3,
              lifeJitter: 0.6,
              speed: 1.7,
              grav: 6,
              drag: 1.5,
              colorJitter: 0.2,
              spread: 0.34,
              floorY: o,
              spin: 14,
              bounce: 0.1,
            })
          : s === "glass"
            ? this.shards({
                pos: e,
                count: 11,
                color: [t, 16777215, 14676223],
                size: 0.06,
                life: 2,
                speed: 4.6,
                grav: 21,
                colorJitter: 0.05,
                spread: 0.3,
                floorY: o,
                spin: 18,
                bounce: 0.45,
              })
            : (s === "sand" || s === "dirt") &&
              this.pool.spawn({
                pos: e,
                count: this.n(4),
                color: t,
                size: 3,
                life: 0.5,
                speed: 0.6,
                growth: 0.6,
                grav: 5,
                drag: 2.6,
                alpha: 0.2,
                colorJitter: 0.12,
                spread: 0.3,
                floorY: o,
              }));
  }
  vehicleBreak(e, t, i, s, o, a) {
    if (this.particleScale <= 0) return;
    const r = ca(i) === "leaves",
      l = ca(i) === "wood",
      c = Math.min(2, Math.max(0.8, s / 3)),
      h = Math.min(32, 12 + o * 3),
      d = new k(-Math.sin(a) * c * 2.2, 2.8 * c, -Math.cos(a) * c * 2.2);
    (this.shards({
      pos: e,
      count: h,
      color: t,
      size: r ? 0.13 : l ? 0.17 : 0.12,
      life: r ? 2.4 : 2.1,
      lifeJitter: 0.5,
      speed: 2.8 * c,
      vel: d,
      grav: r ? 5 : 17,
      drag: r ? 1.5 : 0.7,
      spread: 0.45,
      floorY: Math.floor(e.y - 0.5) + 0.02,
      spin: 15,
      bounce: r ? 0.08 : 0.3,
      colorJitter: 0.24,
      shape: r ? "blade" : "chunk",
    }),
      this.pool.spawn({
        pos: e,
        count: this.n(24),
        color: r ? [t, 11913584, 14866848] : l ? [t, 13017459, 7819832] : t,
        lit: !0,
        size: 5.8,
        life: 0.7,
        speed: 2 * c,
        vel: d,
        grav: 1.6,
        drag: 1.8,
        alpha: 0.4,
        growth: 1.1,
        spread: 0.55,
        colorJitter: 0.16,
      }),
      r || this.flash(e, l ? 1.2 : 1.8, 0.11, l ? 16763525 : 16766108));
  }
  mineChips(e, t, i) {
    (this.shards({
      pos: e,
      count: 1,
      color: t,
      size: 0.055,
      life: 1.6,
      speed: 1.6 + i * 1.6,
      grav: 17,
      colorJitter: 0.15,
      floorY: Math.floor(e.y),
      spin: 13,
    }),
      Math.random() < 0.3 + i * 0.25 &&
        this.pool.spawn({
          pos: e,
          count: this.n(1),
          color: t,
          size: 1.6 + i * 0.8,
          life: 0.3,
          growth: 0.6,
          speed: 0.45,
          grav: 1.2,
          drag: 3,
          alpha: 0.16,
          spread: 0.1,
        }),
      Math.random() < 0.12 + i * 0.2 &&
        this.pool.spawn({
          pos: e,
          count: this.n(1),
          color: 16767354,
          size: 1.8,
          life: 0.22,
          speed: 2.8,
          grav: 8,
        }));
  }
  weldSparks(e, t = 1, i) {
    if (this._particleScale <= 0) return;
    const s = i ? i.clone().multiplyScalar(1.6 * t) : void 0;
    (this.pool.spawn({
      pos: e,
      count: this.n(2),
      color: [16054527, 14215423],
      size: 1.9 * t,
      life: 0.06,
      speed: 0.1,
      alpha: 0.95,
      colorJitter: 0.02,
    }),
      this.pool.spawn({
        pos: e,
        vel: s,
        count: this.n(Math.round(9 * t)),
        color: [16774856, 16765803, 16756800, 16777215],
        size: 0.55,
        sizeJitter: 0.6,
        life: 0.55,
        lifeJitter: 0.7,
        speed: 3.6 * t,
        grav: 13,
        drag: 0.5,
        alpha: 1,
        colorJitter: 0.04,
        floorY: Math.floor(e.y - 1.2) + 1.02,
        spread: 0.04,
      }),
      Math.random() < 0.5 &&
        this.pool.spawn({
          pos: e,
          count: this.n(1),
          color: 10132114,
          lit: !0,
          size: 2.2,
          life: 0.9,
          growth: 1.1,
          speed: 0.25,
          grav: -1.2,
          drag: 1.5,
          alpha: 0.18,
          spread: 0.05,
        }));
  }
  bulletImpact(e, t) {
    (this.shards({
      pos: e,
      count: 6,
      color: t,
      size: 0.05,
      life: 1.5,
      speed: 3,
      grav: 16,
      colorJitter: 0.14,
      floorY: Math.floor(e.y),
      spin: 16,
    }),
      this.pool.spawn({
        pos: e,
        count: this.n(3),
        color: t,
        lit: !0,
        size: 2,
        life: 0.32,
        speed: 0.6,
        growth: 0.8,
        grav: 1,
        drag: 3,
        alpha: 0.2,
        spread: 0.09,
      }));
  }
  targetHit(e, t, i, s, o) {
    const a = new le(
      Tc.holeGeo(),
      new qt({
        color: 1314830,
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
      }),
    );
    (a.position.set(e.x + t * 0.012, e.y + i * 0.012, e.z + s * 0.012),
      a.lookAt(e.x + t, e.y + i, e.z + s),
      this.scene.add(a));
    const r = new os(
      new es({
        map: Tc.scoreTexture(o),
        transparent: !0,
        depthTest: !1,
        depthWrite: !1,
      }),
    );
    for (
      r.position.set(e.x + t * 0.05, e.y + i * 0.05 + 0.18, e.z + s * 0.05),
        r.scale.set(0.62, 0.34, 1),
        oh(r, Gi.popup),
        this.scene.add(r),
        this.targetMarks.push({ hole: a, label: r, life: 6, max: 6 });
      this.targetMarks.length > 24;
    )
      this.removeTargetMark(0);
    this.pool.spawn({
      pos: e,
      count: this.n(6),
      color: [15262940, 11577500],
      size: 2.2,
      life: 0.4,
      speed: 1.6,
      grav: 5,
      growth: 0.7,
      alpha: 0.75,
    });
  }
  removeTargetMark(e) {
    var s;
    const t = this.targetMarks[e];
    if (!t) return;
    (this.scene.remove(t.hole, t.label), t.hole.material.dispose());
    const i = t.label.material;
    ((s = i.map) == null || s.dispose(),
      i.dispose(),
      this.targetMarks.splice(e, 1));
  }
  static holeGeo() {
    return (
      Tc.sharedHoleGeo || (Tc.sharedHoleGeo = new Kr(0.045, 8)),
      Tc.sharedHoleGeo
    );
  }
  static scoreTexture(e) {
    const t = document.createElement("canvas");
    ((t.width = 128), (t.height = 72));
    const i = t.getContext("2d");
    ((i.font = 'bold 52px "Russo One", sans-serif'),
      (i.textAlign = "center"),
      (i.textBaseline = "middle"),
      (i.lineWidth = 7),
      (i.strokeStyle = "rgba(0,0,0,0.85)"),
      i.strokeText(String(e), 64, 38),
      (i.fillStyle =
        e >= 10
          ? "#ffd34a"
          : e >= 8
            ? "#ffe9a8"
            : e >= 6
              ? "#f2f2ec"
              : "#c9d0c0"),
      i.fillText(String(e), 64, 38));
    const s = new bi(t);
    return ((s.colorSpace = vi), s);
  }
  deathPoof(e, t = 1) {
    this.pool.spawn({
      pos: e,
      count: this.n(Math.round(8 + t * 5)),
      color: [15856113, 14079702, 12369084],
      lit: !0,
      size: 3.2 + t * 1.4,
      sizeJitter: 0.45,
      life: 0.75,
      lifeJitter: 0.3,
      speed: 1.1 + t * 0.4,
      grav: -1.2,
      drag: 2.8,
      growth: 1.4,
      alpha: 0.7,
      spread: 0.25 + t * 0.15,
    });
  }
  bodyThud(e, t = 1) {
    this.pool.spawn({
      pos: this.tmpSpawn.set(e.x, e.y + 0.1, e.z),
      count: this.n(Math.round(4 + t * 6)),
      color: [11049600, 9405550],
      lit: !0,
      size: 3.4,
      sizeJitter: 0.5,
      life: 0.6,
      speed: 0.9 + t,
      grav: 0.6,
      drag: 3,
      growth: 1.2,
      alpha: 0.35,
      spread: 0.35,
    });
  }
  bloodHit(e) {
    this.pool.spawn({
      pos: e,
      count: this.n(10),
      color: [11145489, 8195341],
      size: 2.6,
      sizeJitter: 0.35,
      life: 0.45,
      speed: 2.5,
      grav: 11,
      growth: 0.6,
      alpha: 0.9,
    });
  }
  runOver(e, t, i, s, o, a, r = 6126138) {
    const l = clamp((s - 2) / 8, 0.25, 1.4) * (o ? 1.25 : 1),
      c = this.tmpSpawn.set(e.x, e.y + 1.05, e.z);
    (this.pool.spawn({
      pos: c,
      count: this.n(6),
      color: [16774368, 16767400],
      size: 7,
      sizeJitter: 0.4,
      life: 0.13,
      speed: 1.5,
      drag: 6,
      growth: 1.6,
      alpha: 0.85,
    }),
      this.pool.spawn({
        pos: c,
        count: this.n(Math.round(24 * l + 10)),
        color: [14687260, 11736084, 9309710],
        size: 2.6,
        sizeJitter: 0.55,
        life: 0.75,
        lifeJitter: 0.4,
        speed: 2.4 * l,
        vel: this.tmpVel.set(
          t * (3 + s * 0.85),
          1.8 + l * 2.2,
          i * (3 + s * 0.85),
        ),
        grav: 13,
        drag: 0.8,
        growth: 0.4,
        alpha: 0.95,
        spread: 0.25,
        floorY: a + 0.05,
      }),
      this.pool.spawn({
        pos: c,
        count: this.n(Math.round(7 * l + 3)),
        color: [12851738, 10228756],
        size: 5.5,
        sizeJitter: 0.5,
        life: 0.8,
        speed: 1.1,
        vel: this.tmpVel.set(t * 2, 0.6, i * 2),
        grav: 0.5,
        drag: 2.6,
        growth: 1.9,
        alpha: 0.3,
        spread: 0.3,
      }),
      this.shards({
        pos: c,
        count: Math.round(12 * l + 5),
        color: [12588052, 9047823],
        size: 0.05,
        sizeJitter: 0.6,
        life: 2.6,
        lifeJitter: 0.5,
        speed: 3.2 * l,
        vel: this.tmpVel.set(
          t * (2.5 + s * 0.7),
          3 + l * 2,
          i * (2.5 + s * 0.7),
        ),
        grav: 22,
        drag: 0.3,
        floorY: a + 0.02,
        spin: 10,
        bounce: 0.12,
        colorJitter: 0.12,
        spread: 0.2,
      }),
      this.shards({
        pos: c,
        count: Math.round(5 * l + 2),
        color: [4872756, 2830114, 6971460],
        size: 0.09,
        sizeJitter: 0.5,
        life: 3,
        speed: 2.6 * l,
        vel: this.tmpVel.set(t * (2 + s * 0.6), 3.5 + l * 2, i * (2 + s * 0.6)),
        grav: 20,
        drag: 0.4,
        floorY: a + 0.02,
        spin: 14,
        bounce: 0.25,
        colorJitter: 0.1,
        spread: 0.25,
      }));
    const h = this.tmpSpawn.set(e.x, a + 0.15, e.z);
    (this.shards({
      pos: h,
      count: Math.round(10 * l + 4),
      color: [r, 7031342, 5913893],
      size: 0.11,
      sizeJitter: 0.6,
      life: 2.4,
      lifeJitter: 0.4,
      speed: 2.4 + l * 1.5,
      vel: this.tmpVel.set(t * s * 0.45, 3.2 + l * 1.8, i * s * 0.45),
      grav: 22,
      drag: 0.3,
      floorY: a + 0.02,
      spin: 12,
      bounce: 0.2,
      colorJitter: 0.12,
      spread: 0.5,
    }),
      this.pool.spawn({
        pos: this.tmpSpawn.set(e.x, a + 0.35, e.z),
        count: this.n(Math.round(16 * l + 6)),
        color: [11049600, 9405550, 12365458],
        size: 6.5,
        sizeJitter: 0.6,
        life: 1.7,
        lifeJitter: 0.5,
        speed: 2.2 + l * 2,
        vel: this.tmpVel.set(t * s * 0.35, 0.6, i * s * 0.35),
        grav: -0.3,
        drag: 2.2,
        alpha: 0.45,
        spread: 0.6,
        growth: 2.3,
        floorY: a + 0.1,
        lit: !0,
      }),
      this.addBlastWave(this.tmpSpawn.set(e.x, a + 0.12, e.z), 2.2 + l * 2.2),
      this.flash(
        this.tmpSpawn.set(e.x, e.y + 1, e.z),
        10 + l * 14,
        0.12,
        16769728,
      ));
  }
  explosion(e, t, i, s = 1, o = 0, a) {
    if ((this.blastFx.play(o, e, t, i, s, a), t >= 80)) {
      this.nuclearParticles(e, t);
      return;
    }
    this.pool.spawn({
      pos: e,
      count: this.n(Math.min(70, 6 * t)),
      color: [16774079, 16756034],
      size: 1.1,
      sizeJitter: 0.6,
      life: 1.4,
      lifeJitter: 0.5,
      speed: t * 3.4,
      grav: 16,
      drag: 0.5,
      growth: -0.3,
      alpha: 0.95,
    });
  }
  fragments(e, t, i, s) {
    if (this._particleScale <= 0 || e.distanceToSquared(t) > 4900) return;
    const o = this.n(24);
    let a = 6;
    for (let r = 0; r < o; r++) {
      const l = Math.random() * 1.25 - 0.25,
        c = Math.random() * Math.PI * 2,
        h = Math.sqrt(Math.max(0, 1 - Math.min(1, l) ** 2));
      (this.fragDir
        .set(Math.cos(c) * h, Math.min(1, l), Math.sin(c) * h)
        .normalize(),
        this.fragFrom.copy(e).addScaledVector(this.fragDir, 0.5));
      const d = i * (0.55 + Math.random() * 0.45),
        u = s(this.fragFrom, this.fragDir, d);
      (this.fragTo.copy(this.fragFrom).addScaledVector(this.fragDir, u ?? d),
        this.tracer(this.fragFrom, this.fragTo, !0),
        u !== null &&
          u > 1.2 &&
          a-- > 0 &&
          this.bulletImpact(
            this.fragTo.addScaledVector(this.fragDir, -0.06),
            13617336,
          ));
    }
  }
  nuclearParticles(e, t) {
    if (this.particleScale <= 0) return;
    const i = e.y - 0.25;
    (this.pool.spawn({
      pos: this.tmpSpawn.set(e.x, e.y + t * 0.18, e.z),
      count: this.n(150),
      color: [5383195, 8269856, 3876129],
      size: 15,
      sizeJitter: 0.85,
      life: 4.6,
      lifeJitter: 1.1,
      speed: t * 0.42,
      drag: 1.5,
      grav: -2.8,
      alpha: 0.68,
      growth: 2.8,
      spread: t * 0.12,
    }),
      this.shards({
        pos: e,
        count: 180,
        color: [5981752, 3486515, 2762018],
        size: 0.22,
        sizeJitter: 0.8,
        life: 5.5,
        lifeJitter: 1.2,
        speed: t * 1.25,
        grav: 24,
        colorJitter: 0.18,
        spread: t * 0.18,
        floorY: i,
        spin: 16,
        bounce: 0.22,
      }),
      this.pool.spawn({
        pos: this.tmpSpawn.set(e.x, i + 0.45, e.z),
        count: this.n(170),
        color: [7234134, 4999235, 9136204],
        size: 19,
        sizeJitter: 0.8,
        life: 5.2,
        lifeJitter: 1,
        speed: t * 0.85,
        grav: -0.35,
        drag: 1.8,
        alpha: 0.45,
        spread: t * 0.38,
        growth: 3.8,
        floorY: i + 0.1,
      }));
  }
  disguisePoof(e, t = !1) {
    const i = this.tmpSpawn.set(e.x, e.y + 0.7, e.z);
    (this.pool.spawn({
      pos: i,
      count: this.n(26),
      color: t
        ? [14275788, 12564653, 15657698]
        : [16052714, 14473167, 13162214],
      size: 4.2,
      sizeJitter: 0.5,
      life: 0.9,
      lifeJitter: 0.35,
      speed: 2.6,
      grav: -0.6,
      drag: 3.4,
      alpha: 0.55,
      spread: 0.45,
      growth: 1.9,
      lit: !0,
    }),
      this.pool.spawn({
        pos: i,
        count: this.n(12),
        color: [16774856, 12576511, 16777215],
        size: 1.1,
        sizeJitter: 0.5,
        life: 0.7,
        lifeJitter: 0.3,
        speed: 3.4,
        grav: -1.5,
        drag: 1.6,
        alpha: 0.95,
        spread: 0.3,
        growth: -0.5,
      }));
  }
  chestDust(e, t, i = !1) {
    (this.pool.spawn({
      pos: e,
      count: this.n(t ? 7 : 9),
      color: i ? [9277304, 7830115] : [11770488, 10257507, 13218444],
      size: t ? 1.6 : 2.1,
      sizeJitter: 0.5,
      life: t ? 1.6 : 0.9,
      lifeJitter: 0.4,
      speed: t ? 0.35 : 0.9,
      vel: this.tmpVel.set(0, t ? 0.45 : 0.05, 0),
      grav: t ? -0.15 : 0.4,
      drag: 2.2,
      alpha: t ? 0.3 : 0.38,
      spread: 0.32,
      growth: 1.8,
      lit: !0,
    }),
      t &&
        !i &&
        this.pool.spawn({
          pos: this.tmpSpawn.copy(e).add(this.tmpVel.set(0, -0.1, 0)),
          count: this.n(3),
          color: [16769946, 16773832],
          size: 0.9,
          sizeJitter: 0.4,
          life: 0.7,
          speed: 0.25,
          grav: -0.4,
          drag: 1.5,
          alpha: 0.85,
          spread: 0.2,
          growth: -0.4,
        }));
  }
  muzzleSmoke(e, t) {
    this.pool.spawn({
      pos: e,
      count: this.n(4),
      color: [10066312, 11579556],
      size: 2.2,
      life: 0.45,
      speed: 0.6,
      vel: this.tmpVel.copy(t).multiplyScalar(2),
      grav: -1,
      alpha: 0.42,
      growth: 2.4,
    });
  }
  exhaust(e, t, i) {
    const s = clamp(i, 0, 1);
    this.pool.spawn({
      pos: e,
      count: this.n(1),
      color: s > 0.6 ? [3816506, 4869192] : [7304313, 8488586],
      size: 1.4 + s * 1.6,
      sizeJitter: 0.4,
      life: 0.9 + s * 0.6,
      lifeJitter: 0.3,
      speed: 0.25,
      vel: this.tmpVel.copy(t).multiplyScalar(0.3).setY(0.9),
      grav: -0.6,
      drag: 1.2,
      alpha: 0.18 + s * 0.22,
      growth: 2.2,
      spread: 0.08,
    });
  }
  vehicleWreckTrail(e, t, i) {
    (this.vehicleDamageSmoke(e, 0.95, t),
      i < 2.8 &&
        this.pool.spawn({
          pos: e,
          count: this.n(3),
          color: [16760153, 16739618, 14237719],
          size: 3.5,
          sizeJitter: 0.6,
          life: 0.65,
          speed: 1.8,
          vel: this.tmpVel.copy(t).multiplyScalar(0.15),
          grav: -2.8,
          drag: 1.3,
          growth: 0.6,
          alpha: 0.85,
        }));
  }
  vehicleDamageSmoke(e, t, i) {
    const s = clamp(t, 0, 1),
      o = i
        ? this.tmpVel.copy(i).multiplyScalar(0.12)
        : this.tmpVel.set(0, 0, 0);
    ((o.y += 0.35 + s * 0.55),
      this.pool.spawn({
        pos: e,
        count: this.n(1 + Math.round(s * 3)),
        color:
          s > 0.62 ? [1579288, 2368802, 3158317] : [4474432, 5592911, 3421746],
        size: 5 + s * 5,
        sizeJitter: 0.55,
        life: 1.5 + s * 1.8,
        lifeJitter: 0.35,
        speed: 0.2 + s * 0.45,
        vel: o,
        grav: -0.45 - s * 0.55,
        drag: 0.8,
        alpha: 0.34 + s * 0.28,
        growth: 1.6 + s * 1.1,
        spread: 0.16 + s * 0.28,
      }));
  }
  fireSmoke(e, t, i, s, o = 1) {
    const a = this.tmpVel.set(
      t * (s ? 0.12 : 0.72),
      s ? 0.18 : 0.42,
      i * (s ? 0.12 : 0.72),
    );
    this.pool.spawn({
      pos: e,
      count: this.n((s ? 2 : 1) * Math.max(0.25, o)),
      color: s ? [2368802, 3158317, 3816246] : [3421746, 4606016, 2698024],
      size: s ? 6.2 : 5.2,
      sizeJitter: 0.55,
      life: s ? 4.2 : 2.8,
      lifeJitter: 0.4,
      speed: s ? 0.16 : 0.28,
      vel: a,
      grav: s ? -0.18 : -0.62,
      drag: s ? 0.55 : 0.72,
      alpha: s ? 0.3 : 0.42,
      growth: s ? 2.2 : 1.8,
      spread: s ? 0.3 : 0.16,
    });
  }
  casing(e, t, i = [14263361, 12618286], s = 0.035) {
    this.shards({
      pos: e,
      count: 1,
      color: i,
      size: s,
      sizeJitter: 0.2,
      life: 2.4,
      speed: 0.8,
      colorJitter: 0.06,
      spin: 22,
      bounce: 0.42,
      vel: this.tmpVel.copy(t).multiplyScalar(2).setY(2.2),
      grav: 16,
      floorY: Math.floor(e.y - 1.6),
    });
  }
  splash(e, t) {
    const i = clamp(t / 12, 0.25, 1.6);
    (this.pool.spawn({
      pos: e,
      count: this.n(Math.round(14 * i)),
      color: [14676735, 12575989, 10473706],
      size: 3.2,
      sizeJitter: 0.7,
      life: 0.55,
      speed: 2.4 * i,
      vel: this.tmpVel.set(0, 3.2 * i, 0),
      grav: 16,
      alpha: 0.8,
      spread: 0.28,
    }),
      this.pool.spawn({
        pos: e,
        count: this.n(Math.round(8 * i)),
        color: [15398911, 13232375],
        size: 5.5,
        sizeJitter: 0.5,
        life: 0.5,
        speed: 3 * i,
        grav: 9,
        alpha: 0.5,
        spread: 0.3,
        growth: 1.4,
      }));
  }
  bubbles(e) {
    this.pool.spawn({
      pos: e,
      count: this.n(1),
      color: [14086399, 16777215],
      size: 1.9,
      sizeJitter: 0.6,
      life: 1.1,
      speed: 0.35,
      grav: -2.6,
      drag: 1.2,
      alpha: 0.5,
      spread: 0.22,
    });
  }
  clearRocketTrails() {
    (this.rocketSmoke.clear(), (this.exhaustTime = 0));
  }
  rocketExhaust(e, t) {
    this.exhaustTime += t;
    const i = 0.035 / clamp(this._particleScale, 0.4, 1),
      s = Math.min(3, Math.floor(this.exhaustTime / i), this.trailBudget);
    if (((this.exhaustTime %= i), this._particleScale <= 0 || s === 0)) return;
    const o = this.trailSpawn;
    (o.pos.copy(e), (o.size = 3), (o.life = 1.3), (o.alpha = 0.3));
    for (let a = 0; a < s; a++) this.rocketSmoke.spawn(o);
    this.trailBudget -= s;
  }
  rocketTrail(e, t, i, s, o, a) {
    const r = this._particleScale,
      l = t.distanceToSquared(a);
    if (r <= 0 || l > 320 * 320) return 0;
    const c = e.distanceTo(t),
      h = i.length();
    if (c < 1e-4 || h < 0.01) return o;
    if (c > 40) return 0;
    const d = s === PROJECTILE_KIND.NUCLEAR,
      u = s === PROJECTILE_KIND.TOMAHAWK,
      f = s === PROJECTILE_KIND.MISSILE,
      p = d ? 2.8 : u ? 2.15 : f ? 1.8 : 1.5,
      m = l > 25600 ? 2 : l > 6400 ? 1.4 : 1,
      y = (p * 0.3 * m) / clamp(r, 0.4, 1);
    o = Math.min(o, y);
    const g = c + o,
      b = Math.floor(g / y),
      S = Math.min(b, 12, this.trailBudget),
      M = this.trailSpawn;
    ((M.size = p * Math.sqrt(m * Math.min(2, b / Math.max(1, S)))),
      (M.life = d ? 1.8 : u ? 1.45 : f ? 1.1 : 0.9),
      (M.alpha = d ? 0.34 : u ? 0.3 : 0.28));
    const x = d ? 1.95 : u ? 1.55 : 0.3;
    for (let T = 0; T < S; T++) {
      const _ = ((S === 1 ? b : 1 + (T * (b - 1)) / (S - 1)) * y - o) / c;
      (M.pos.lerpVectors(e, t, _).addScaledVector(i, -x / h),
        this.rocketSmoke.spawn(M));
    }
    return ((this.trailBudget -= S), g - b * y);
  }
  tracer(e, t, i = !1) {
    const s = e.distanceTo(t);
    s < 1 || this.tracerBatches[i ? 1 : 0].add(e, t, s);
  }
  incomingFire(e, t, i, s) {
    if (
      (this.flashPos.set(e, t, i),
      this.flashPos.distanceTo(s) < 6 || this.flashes.length >= 6)
    )
      return;
    const o = this.spareFlashes.pop() ?? new os(this.flashMat.clone());
    ((o.material.opacity = 1),
      o.position.copy(this.flashPos),
      o.scale.setScalar(0.06),
      this.scene.add(o),
      this.flashes.push({ sprite: o, life: 0.85, max: 0.85 }));
  }
  addTrauma(e) {
    this.trauma = clamp(this.trauma + e, 0, 1.3);
  }
  getShake(e) {
    const t = this.trauma * this.trauma;
    return (
      e.set(
        (Math.random() - 0.5) * t * 0.5,
        (Math.random() - 0.5) * t * 0.5,
        0,
      ),
      t * 0.05
    );
  }
  update(e) {
    const t = e * this.timeScale;
    ((this.blastFx.timeScale = this.timeScale),
      this.blastFx.update(e),
      (this.trailBudget = Math.ceil(96 * Math.min(1, this._particleScale))),
      this.rocketSmoke.update(t, this.lightProbe),
      this.pool.update(t, this.lightProbe),
      this.debris.update(t, this.lightProbe));
    for (let i = this.blastWaves.length - 1; i >= 0; i--) {
      const s = this.blastWaves[i];
      s.age += t;
      const o = s.age / s.life;
      if (o >= 1 || this.particleScale <= 0) {
        (this.scene.remove(s.mesh),
          s.mesh.geometry.dispose(),
          s.mesh.material.dispose(),
          this.blastWaves.splice(i, 1));
        continue;
      }
      const a = s.radius * (1 - Math.exp(-o * (s.fire ? 4 : 2.5)));
      s.mesh.scale.set(a, s.fire ? a * 0.78 : a, a);
      const r = (s.fire ? 0.62 : 0.32) * Math.pow(1 - o, s.fire ? 2 : 1.6);
      if (s.fire) {
        s.mesh.position.y += t * s.radius * 0.09;
        const l = s.mesh.material.uniforms;
        ((l.uOpacity.value = r), (l.uTime.value = s.age));
      } else s.mesh.material.opacity = r;
    }
    this.trauma = Math.max(0, this.trauma - t * 1.8);
    for (const i of this.tracerBatches) i.update(t);
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const s = this.flashes[i];
      if (((s.life -= t), s.life <= 0)) {
        (this.scene.remove(s.sprite),
          this.spareFlashes.push(s.sprite),
          this.flashes.splice(i, 1));
        continue;
      }
      const o = 1 - s.life / s.max;
      ((s.sprite.material.opacity = Math.max(0, 1 - o * o)),
        s.sprite.scale.setScalar(0.06 + o * 0.02));
    }
    for (let i = this.targetMarks.length - 1; i >= 0; i--) {
      const s = this.targetMarks[i];
      if (((s.life -= t), s.life <= 0)) {
        this.removeTargetMark(i);
        continue;
      }
      const o = 1 - s.life / s.max;
      ((s.label.position.y += t * 0.35),
        (s.label.material.opacity = Math.max(0, 1 - o * 2.6)),
        (s.hole.material.opacity = Math.min(1, s.life / 1.2)));
    }
    for (const i of this.lights)
      if (i.life > 0) {
        i.life -= t;
        const s = Math.max(0, i.life / i.max);
        if (i.fire) {
          const o = 1 - s,
            a = o * i.max,
            r = i.seed + a * 23,
            l = a < 0.09,
            c = l
              ? 1
              : 0.74 + 0.16 * Math.sin(r) + 0.1 * Math.sin(r * 2.7 + 1.3);
          ((i.light.intensity = i.peak * (l ? 1 : Math.pow(s, 1.5) * 0.8) * c),
            i.light.color.setRGB(
              1,
              fi.lerp(0.93, 0.42, Math.min(1, o * 1.6)),
              fi.lerp(0.78, 0.1, Math.min(1, o * 2.2)),
            ));
        } else i.light.intensity = s * i.peak;
      } else i.light.intensity = 0;
  }
};
