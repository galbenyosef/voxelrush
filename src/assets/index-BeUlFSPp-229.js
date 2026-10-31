// index-BeUlFSPp 229 — math
// Lines 118862-120552 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class mle {
  constructor(e, t) {
    ((this.scene = e), (this.api = t));
    const i = new Zt({
      color: 16777215,
      transparent: !0,
      blending: rs,
      depthWrite: !1,
      toneMapped: !1,
    });
    ((this.sparkMesh = new On(new kt(1, 1, 1).translate(0, 0, -0.5), i, wa)),
      this.sparkMesh.instanceMatrix.setUsage(Bi),
      this.sparkMesh.setColorAt(0, this.tmpColor.set(1, 1, 1)),
      this.sparkMesh.instanceColor.setUsage(Bi),
      (this.sparkMesh.count = 0),
      (this.sparkMesh.frustumCulled = !1),
      (this.sparkMesh.renderOrder = zi.tracer),
      (this.sparkMesh.name = "blast-sparks"),
      e.add(this.sparkMesh));
  }
  timeScale = 1;
  ambient = 1;
  billows = [];
  idleBillows = [];
  shocks = [];
  rings = [];
  scorches = [];
  burners = [];
  glows = [];
  spare = { shock: [], ring: [], scorch: [], glow: [] };
  schedule = [];
  clock = 0;
  billowGeo = new eA(1, 3);
  shockGeo = new ws(1, 40, 20);
  planeGeo = new ms(2, 2).rotateX(-Math.PI / 2);
  sparkMesh;
  sn = 0;
  sp = new Float32Array(wa * 3);
  sv = new Float32Array(wa * 3);
  sl = new Float32Array(wa);
  sm = new Float32Array(wa);
  sg = new Float32Array(wa);
  sd = new Float32Array(wa);
  sw = new Float32Array(wa);
  ss = new Float32Array(wa);
  sf = new Float32Array(wa);
  sb = new Float32Array(wa);
  sc = new Float32Array(wa * 3);
  tmpColor = new Ge();
  flashEl = null;
  flashLevel = 0;
  flashDecay = 1;
  camera = null;
  setCamera(e) {
    this.camera = e;
  }
  get liveCount() {
    return (
      this.billows.length + this.shocks.length + this.rings.length + this.sn
    );
  }
  clear() {
    for (const e of this.billows)
      (this.scene.remove(e.mesh), this.idleBillows.push(e));
    this.billows.length = 0;
    for (const e of this.shocks)
      (this.scene.remove(e.mesh), this.spare.shock.push(e.mesh.material));
    for (const e of this.rings)
      (this.scene.remove(e.mesh), this.spare.ring.push(e.mesh.material));
    for (const e of this.scorches)
      (this.scene.remove(e.mesh), this.spare.scorch.push(e.mesh.material));
    ((this.shocks.length = 0),
      (this.rings.length = 0),
      (this.scorches.length = 0));
    for (const e of this.glows)
      (this.scene.remove(e.sprite), this.spare.glow.push(e.sprite.material));
    ((this.glows.length = 0),
      (this.burners.length = 0),
      (this.schedule.length = 0),
      (this.sn = 0),
      (this.sparkMesh.count = 0));
  }
  warmUp(e) {
    const t = this.api,
      i = new k(0, -900, 0),
      n = new k(0, -900, 30);
    this.api = {
      ...t,
      spawn() {},
      shards() {},
      flash() {},
      fireLight() {},
      addTrauma() {},
      ground: (o, a) => a - 0.3,
    };
    try {
      for (let o = 1; o <= Rie; o++)
        this.play(o, i, o === Wt.NUCLEAR ? 80 : 4, n, 0, new k(0, 1, 0));
      for (let o = 0; o < 8 && this.schedule.length; o++)
        for (const a of this.schedule.splice(0)) a.run();
      return e();
    } finally {
      ((this.api = t), this.clear());
    }
  }
  billow(e) {
    if (this.api.scale() <= 0) return;
    if (this.billows.length >= ple) {
      const n = this.billows.shift();
      (this.scene.remove(n.mesh), this.idleBillows.push(n));
    }
    const t = this.idleBillows.pop() ?? {
      mesh: new Q(this.billowGeo, hle()),
      age: 0,
      life: 1,
      delay: 0,
      vel: new k(),
      drag: 0,
      rise: 0,
      s0: 1,
      s1: 1,
      grow: 0.5,
      drift: 0,
      flat: 1,
    };
    (t.mesh.position.copy(e.pos),
      t.mesh.rotation.set(
        Math.random() * 6,
        Math.random() * 6,
        Math.random() * 6,
      ),
      (t.mesh.renderOrder = zi.cloud),
      (t.mesh.frustumCulled = !1),
      t.vel.copy(e.vel ?? $i.set(0, 0, 0)),
      (t.age = 0),
      (t.life = e.life),
      (t.delay = e.delay ?? 0),
      (t.s0 = e.size),
      (t.s1 = e.end),
      (t.grow = e.grow ?? 0.45),
      (t.rise = e.rise ?? 0),
      (t.drag = e.drag ?? 1.2),
      (t.flat = e.flat ?? 1),
      (t.drift = e.end * 0.06));
    const i = t.mesh.material.uniforms;
    ((i.uSeed.value = Math.random() * 50),
      (i.uHeat.value = e.heat ?? 1),
      i.uSmoke.value.set(e.smoke ?? 5591114),
      (i.uOpacity.value = e.opacity ?? 1),
      (i.uLump.value = e.lump ?? 1),
      (i.uCool.value = e.cool ?? 0.55),
      (i.uAge.value = 0),
      (i.uAmbient.value = this.ambient),
      (i.uFogAmount.value = e.fog ?? (e.end > 14 ? 0.55 : 1)),
      t.mesh.scale.setScalar(t.delay > 0 ? 1e-4 : e.size),
      (t.mesh.visible = t.delay <= 0),
      this.scene.add(t.mesh),
      this.billows.push(t));
  }
  shock(e, t, i, n = {}) {
    if (this.api.scale() <= 0) return;
    const o = this.spare.shock.pop() ?? dle();
    ((o.uniforms.uSolid.value = n.solid ? 1 : 0),
      o.uniforms.uColor.value.set(n.color ?? (n.solid ? 15922422 : 14214911)),
      (o.blending = n.solid ? Rl : rs));
    const a = new Q(this.shockGeo, o);
    (a.position.copy(e),
      a.scale.set(0.01, 0.01 * (n.flat ?? 1), 0.01),
      (a.userData.flat = n.flat ?? 1),
      (a.renderOrder = zi.cloud),
      (a.frustumCulled = !1),
      (a.visible = !n.delay),
      this.scene.add(a),
      this.shocks.push({
        mesh: a,
        age: 0,
        life: i,
        radius: t,
        opacity: (n.opacity ?? 0.7) * (n.solid ? 1 : 0.3),
        delay: n.delay ?? 0,
      }));
  }
  ring(e, t, i, n = 9076072, o = 0.7, a = 0) {
    if (this.api.scale() <= 0) return;
    const r = this.spare.ring.pop() ?? ule();
    (r.uniforms.uColor.value.set(n),
      (r.uniforms.uSeed.value = Math.random() * 30),
      (r.uniforms.uAmbient.value = 0.35 + this.ambient * 0.65));
    const l = new Q(this.planeGeo, r);
    (l.position.copy(e),
      l.scale.setScalar(0.01),
      (l.renderOrder = zi.particle),
      (l.frustumCulled = !1),
      (l.visible = !a),
      this.scene.add(l),
      this.rings.push({
        mesh: l,
        age: 0,
        life: i,
        radius: t,
        opacity: o,
        delay: a,
      }));
  }
  scorch(e, t) {
    if (this.api.scale() <= 0) return;
    for (; this.scorches.length >= 18;) {
      const o = this.scorches.shift();
      (this.scene.remove(o.mesh), this.spare.scorch.push(o.mesh.material));
    }
    const i = this.spare.scorch.pop() ?? fle();
    i.uniforms.uSeed.value = Math.random() * 40;
    const n = new Q(this.planeGeo, i);
    (n.position.set(e.x, e.y + 0.03, e.z),
      n.scale.setScalar(t),
      (n.rotation.y = Math.random() * 6.3),
      (n.renderOrder = zi.water - 1),
      this.scene.add(n),
      this.scorches.push({ mesh: n, age: 0, life: 28 }));
  }
  glow(e, t, i, n = 16760944, o = 0) {
    if (this.api.scale() <= 0) return;
    hM || (hM = gle());
    const a =
      this.spare.glow.pop() ??
      new hn({
        map: hM,
        transparent: !0,
        blending: rs,
        depthWrite: !1,
        toneMapped: !1,
      });
    (a.color.set(n), (a.opacity = 1));
    const r = new Ws(a);
    (r.position.copy(e),
      r.scale.setScalar(t * 0.3),
      (r.renderOrder = zi.cloud + 1),
      (r.visible = !o),
      this.scene.add(r),
      this.glows.push({ sprite: r, age: 0, life: i, size: t, delay: o }));
  }
  sparks(e) {
    const t = this.api.n(e.count),
      i = e.dir ?? null,
      n = e.cone ?? Math.PI;
    for (let o = 0; o < t && this.sn < wa; o++) {
      const a = this.sn++,
        r = a * 3,
        l = 1 - Math.random() * (1 - Math.cos(n)),
        c = Math.sqrt(1 - l * l),
        h = Math.random() * Math.PI * 2;
      ($i.set(Math.cos(h) * c, Math.sin(h) * c, l),
        i
          ? $i.applyQuaternion(jg.setFromUnitVectors(XC, i))
          : $i.set($i.x, $i.z, $i.y));
      const d =
          e.speed * (1 + (Math.random() - 0.5) * 2 * (e.speedJitter ?? 0.4)),
        u = e.spread ?? 0;
      ((this.sp[r] = e.pos.x + (Math.random() - 0.5) * u),
        (this.sp[r + 1] = e.pos.y + (Math.random() - 0.5) * u),
        (this.sp[r + 2] = e.pos.z + (Math.random() - 0.5) * u),
        (this.sv[r] = $i.x * d),
        (this.sv[r + 1] = $i.y * d + (e.up ?? 0)),
        (this.sv[r + 2] = $i.z * d));
      const f =
        e.life * (1 + (Math.random() - 0.5) * 2 * (e.lifeJitter ?? 0.35));
      ((this.sl[a] = f),
        (this.sm[a] = f),
        (this.sg[a] = e.grav ?? 9),
        (this.sd[a] = e.drag ?? 0.6),
        (this.sw[a] = (e.width ?? 0.045) * (0.7 + Math.random() * 0.6)),
        (this.ss[a] = e.stretch ?? 0.045),
        (this.sf[a] = e.floorY ?? -1e9),
        (this.sb[a] = e.bounce ?? 0),
        this.tmpColor.set(e.color[Math.floor(Math.random() * e.color.length)]),
        (this.sc[r] = this.tmpColor.r),
        (this.sc[r + 1] = this.tmpColor.g),
        (this.sc[r + 2] = this.tmpColor.b));
    }
  }
  burner(e, t, i = 1) {
    this.burners.length < 40 &&
      this.burners.push({
        pos: e.clone(),
        until: this.clock + t,
        t: Math.random(),
        size: i,
      });
  }
  after(e, t) {
    this.schedule.push({ at: this.clock + e, run: t });
  }
  screenFlash(e, t, i = !1) {
    if (!(typeof document > "u" || e <= 0.02)) {
      if (!this.flashEl) {
        const n = document.createElement("div");
        ((n.id = "blast-flash"),
          (n.style.cssText =
            "position:fixed;inset:0;pointer-events:none;z-index:40;opacity:0;mix-blend-mode:screen;transition:none"),
          document.body.append(n),
          (this.flashEl = n));
      }
      ((this.flashEl.style.background = i
        ? "radial-gradient(circle at 50% 45%, #fff 0%, #fff4d6 35%, #ffb35c 100%)"
        : "radial-gradient(circle at 50% 45%, #fff 0%, #f4f8ff 50%, #dfe8ff 100%)"),
        e >= this.flashLevel &&
          ((this.flashLevel = Math.min(1, e)), (this.flashDecay = t)));
    }
  }
  play(e, t, i, n, o = 1, a) {
    const r = t.clone(),
      l = Math.max(0.6, i),
      c = this.api.ground(r.x, r.y, r.z),
      h = c ?? r.y - 0.25,
      d = c !== null && r.y - c < Math.max(2.5, l * 0.45),
      u = r.distanceTo(n);
    e === Wt.AUTO &&
      (e =
        l >= 80
          ? Wt.NUCLEAR
          : l >= 20
            ? Wt.TOMAHAWK
            : l >= 11
              ? Wt.HEAVY
              : l >= 6
                ? Wt.AIR_BOMB
                : l >= 3
                  ? Wt.ROCKET
                  : Wt.GRENADE);
    const f = {
      p: r,
      r: l,
      groundY: h,
      grounded: d,
      dist: u,
      exposure: o,
      normal: a && a.lengthSq() > 0.1 ? a.clone().normalize() : new k(0, 1, 0),
    };
    if (e !== Wt.THERMOBARIC && e !== Wt.NUCLEAR) {
      const p = e === Wt.C4 || e === Wt.BREACH || e === Wt.FRAG,
        m =
          e === Wt.DYNAMITE ||
          e === Wt.DYNAMITE_SMALL ||
          e === Wt.DYNAMITE_BUNDLE ||
          e === Wt.INCENDIARY;
      this.glow(
        r,
        l * (p ? 4.2 : 3.6),
        Math.min(0.9, 0.3 + l * 0.025),
        p ? 16773856 : m ? 16747066 : 16757594,
      );
    }
    switch (e) {
      case Wt.GRENADE:
        this.grenade(f);
        break;
      case Wt.ROCKET:
      case Wt.MISSILE:
        this.rocket(f, !1);
        break;
      case Wt.SHELL:
        this.rocket(f, !0);
        break;
      case Wt.AIR_BOMB:
        this.airBomb(f);
        break;
      case Wt.MINE:
        this.mine(f);
        break;
      case Wt.C4:
        this.c4(f);
        break;
      case Wt.DYNAMITE:
      case Wt.DYNAMITE_SMALL:
        this.dynamite(f, 1);
        break;
      case Wt.DYNAMITE_BUNDLE:
        this.dynamite(f, 7);
        break;
      case Wt.BREACH:
        this.breach(f);
        break;
      case Wt.FRAG:
        this.frag(f);
        break;
      case Wt.INCENDIARY:
        this.incendiary(f);
        break;
      case Wt.HEAVY:
      case Wt.TOMAHAWK:
        this.heavy(f);
        break;
      case Wt.THERMOBARIC:
        this.thermobaric(f);
        break;
      case Wt.NUCLEAR:
        this.nuclear(f);
        break;
      default:
        this.rocket(f, !1);
    }
  }
  shake(e, t, i, n = 0) {
    const o = () => {
      if (e.dist >= i) return;
      const a = 1 - e.dist / i;
      this.api.addTrauma(Oe(t * a * a * Oe(e.exposure, 0, 1), 0, 1.3));
    };
    n > 0 && e.dist > 20 ? this.after(e.dist / n, o) : o();
  }
  visibleFlash(e, t, i, n, o) {
    if (e.exposure < 0.3 || e.dist > o || !this.camera) return;
    const a = ul.set(0, 0, -1).applyQuaternion(this.camera.quaternion),
      r = $i.copy(e.p).sub(this.camera.position).normalize(),
      l = Oe((a.dot(r) + 0.2) / 1.2, 0, 1),
      c = e.dist < e.r * 1.5 ? 1 : l;
    this.screenFlash(t * c * (1 - e.dist / o) * e.exposure, i, n);
  }
  dirt(e, t, i = [7033653, 4868682, 3025444, 8020547]) {
    if (!e.grounded) return;
    const n = $i.set(e.p.x, e.groundY + 0.2, e.p.z);
    this.api.shards({
      pos: n.clone(),
      count: Math.round(14 * t),
      color: i,
      size: 0.16,
      sizeJitter: 0.8,
      life: 3.2,
      lifeJitter: 0.5,
      speed: 4 + t * 2,
      vel: ul.set(0, 5 + t * 2.6, 0),
      grav: 24,
      colorJitter: 0.18,
      spread: e.r * 0.2,
      floorY: e.groundY,
      spin: 15,
      bounce: 0.3,
    });
    const o = Math.min(6, 2 + Math.round(t / 2));
    for (let a = 0; a < o; a++) {
      const r = (a / o) * Math.PI * 2 + Math.random();
      this.billow({
        pos: new k(
          e.p.x + Math.cos(r) * e.r * 0.3,
          e.groundY + e.r * 0.15,
          e.p.z + Math.sin(r) * e.r * 0.3,
        ),
        vel: new k(
          Math.cos(r) * e.r * 1.3,
          e.r * 0.25,
          Math.sin(r) * e.r * 1.3,
        ),
        size: e.r * 0.15,
        end: e.r * (0.38 + t * 0.015),
        grow: 1.1,
        life: ki(2.6, 3.6),
        heat: 0,
        smoke: 10126960,
        drag: 1.8,
        rise: 0.3,
        opacity: 0.5,
        flat: 0.7,
        delay: 0.05,
      });
    }
  }
  grenade(e) {
    const { p: t, r: i } = e;
    this.api.fireLight(t, i);
    for (let n = 0; n < 3; n++)
      this.billow({
        pos: Mn(t, i * 0.2),
        size: i * 0.15,
        end: i * ki(0.42, 0.55),
        grow: 0.18,
        life: ki(1.1, 1.6),
        heat: 1.15,
        smoke: 6117458,
        rise: 1.2,
        cool: 0.5,
      });
    for (let n = 0; n < 3; n++)
      this.billow({
        pos: Mn(t, i * 0.3).setY(t.y + i * 0.15),
        size: i * 0.2,
        end: i * 0.6,
        grow: 0.6,
        life: ki(2.5, 3.5),
        heat: 0.35,
        smoke: 8025454,
        rise: 1.6,
        delay: 0.35,
        opacity: 0.6,
        cool: 0.25,
      });
    (this.sparks({
      pos: t,
      count: 46,
      speed: 17,
      life: 0.45,
      grav: 10,
      width: 0.04,
      stretch: 0.05,
      color: [16773312, 16760928, 16748592],
      up: 2,
    }),
      this.shock(t, i * 2.3, 0.3, { opacity: 0.5 }),
      e.grounded &&
        (this.ring(
          $i.set(t.x, e.groundY + 0.12, t.z),
          i * 2.2,
          1.4,
          8221023,
          0.55,
        ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 0.75)),
      this.dirt(e, 1.2),
      this.shake(e, i / 4, (10 + i * 7) * 1.5));
  }
  rocket(e, t) {
    const { p: i, r: n } = e;
    this.api.fireLight(i, n);
    for (let o = 0; o < 4; o++)
      this.billow({
        pos: Mn(i, n * 0.22),
        size: n * 0.15,
        end: n * ki(0.45, 0.6),
        grow: 0.2,
        life: ki(1.3, 1.9),
        heat: 1.2,
        smoke: 5591114,
        rise: 1.6,
        cool: 0.5,
      });
    for (let o = 0; o < 4; o++)
      this.billow({
        pos: Mn(i, n * 0.35).setY(i.y + n * 0.2),
        size: n * 0.25,
        end: n * 0.7,
        grow: 0.8,
        life: ki(3, 4.2),
        heat: 0.35,
        smoke: 7235939,
        rise: 2.2,
        delay: 0.4,
        opacity: 0.6,
        cool: 0.25,
      });
    (this.sparks({
      pos: i,
      count: 70,
      speed: 20,
      life: 0.55,
      grav: 10,
      width: 0.045,
      stretch: 0.05,
      color: [16774088, 16761440, 16747050],
      up: 3,
    }),
      this.shock(i, n * 2.4, 0.32, { opacity: 0.55 }),
      e.grounded &&
        (this.ring(
          $i.set(i.x, e.groundY + 0.12, i.z),
          n * 2.6,
          1.6,
          8221023,
          0.6,
        ),
        this.scorch($i.set(i.x, e.groundY, i.z), n * 0.8)),
      this.dirt(e, t ? 3 : 1.6),
      t &&
        e.grounded &&
        this.api.shards({
          pos: $i.set(i.x, e.groundY + 0.3, i.z).clone(),
          count: 40,
          color: [6112816, 7033653, 4209203],
          size: 0.2,
          sizeJitter: 0.8,
          life: 3.5,
          speed: 3,
          vel: ul.set(0, 15, 0),
          grav: 26,
          floorY: e.groundY,
          spin: 12,
          bounce: 0.25,
          spread: 0.8,
        }),
      this.shake(e, n / 4, (10 + n * 7) * 1.5));
  }
  mine(e) {
    const { p: t, r: i } = e;
    this.api.fireLight(t, i);
    const n = new k(t.x, e.groundY + 0.2, t.z);
    for (let o = 0; o < 3; o++)
      this.billow({
        pos: Mn(n, 0.4),
        vel: new k(0, ki(7, 11), 0),
        size: 0.5,
        end: i * 0.5,
        grow: 0.25,
        life: 1.4,
        heat: 1.1,
        smoke: 6969930,
        rise: 1,
        drag: 2.2,
        cool: 0.5,
      });
    for (let o = 0; o < 4; o++)
      this.billow({
        pos: Mn(n, 0.6).setY(n.y + 1.5),
        vel: new k(0, ki(3, 6), 0),
        size: 0.8,
        end: i * 0.75,
        grow: 0.9,
        life: ki(3, 4),
        heat: 0.05,
        smoke: 6969928,
        rise: 0.8,
        delay: 0.1,
        opacity: 0.6,
      });
    (this.api.shards({
      pos: n.clone(),
      count: 70,
      color: [6112816, 7033653, 4209203, 8161866],
      size: 0.18,
      sizeJitter: 0.8,
      life: 3.5,
      speed: 3.2,
      vel: ul.set(0, 17, 0),
      grav: 26,
      floorY: e.groundY,
      spin: 14,
      bounce: 0.25,
      spread: 0.6,
    }),
      this.sparks({
        pos: n,
        count: 50,
        speed: 18,
        dir: new k(0, 1, 0),
        cone: 0.5,
        life: 0.6,
        grav: 12,
        color: [16767120, 16750656],
      }),
      this.ring($i.set(t.x, e.groundY + 0.12, t.z), i * 2.5, 1.5, 7234127, 0.6),
      this.scorch($i.set(t.x, e.groundY, t.z), i * 0.7),
      this.shake(e, i / 3.5, (10 + i * 7) * 1.5));
  }
  airBomb(e) {
    const { p: t, r: i } = e;
    (this.api.fireLight(t, i), this.api.flash(t, 40, 0.2, 16773584));
    for (let n = 0; n < 7; n++)
      this.billow({
        pos: Mn(t, i * 0.25),
        vel: Nu(i * 0.9).setY(Math.abs($i.y) + i * 0.4),
        size: i * 0.15,
        end: i * ki(0.42, 0.58),
        grow: 0.3,
        life: ki(2, 2.8),
        heat: 1.25,
        smoke: 4867392,
        rise: i * 0.35,
        cool: 0.4,
      });
    for (let n = 0; n < 6; n++)
      this.billow({
        pos: Mn(t, i * 0.4).setY(t.y + i * 0.35),
        vel: new k(0, i * 0.6, 0),
        size: i * 0.3,
        end: i * 0.8,
        grow: 1.2,
        life: ki(5, 7),
        heat: 0.2,
        smoke: 6446165,
        rise: i * 0.12,
        delay: 0.25,
        opacity: 0.6,
      });
    (this.sparks({
      pos: t,
      count: 140,
      speed: 26,
      life: 0.8,
      grav: 12,
      width: 0.05,
      stretch: 0.045,
      color: [16774088, 16761440, 16747050],
      up: 4,
    }),
      this.shock(t, i * 2.6, 0.45, { opacity: 0.6 }),
      e.grounded &&
        (this.ring(
          $i.set(t.x, e.groundY + 0.15, t.z),
          i * 3.2,
          2.4,
          8221023,
          0.7,
        ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 0.9)),
      this.dirt(e, 4),
      this.visibleFlash(e, 0.25, 0.5, !0, i * 10),
      this.shake(e, i / 4, (10 + i * 7) * 1.5, 160));
  }
  c4(e) {
    const { p: t, r: i, normal: n } = e;
    (this.api.flash(t, 60, 0.12, 16054015), this.api.fireLight(t, i));
    for (let o = 0; o < 4; o++)
      this.billow({
        pos: Mn(t, i * 0.15).addScaledVector(n, i * 0.1),
        vel: Nu(i * 1.4).addScaledVector(n, i * 1.2),
        size: i * 0.1,
        end: i * ki(0.38, 0.5),
        grow: 0.12,
        life: ki(0.8, 1.1),
        heat: 1.45,
        smoke: 6184542,
        rise: 1,
        drag: 3,
        cool: 0.5,
      });
    for (let o = 0; o < 4; o++)
      this.billow({
        pos: Mn(t, i * 0.3).addScaledVector(n, i * 0.25),
        vel: new k(0, 1.4, 0).addScaledVector(n, 1.5),
        size: i * 0.2,
        end: i * 0.62,
        grow: 0.7,
        life: ki(3.5, 5),
        heat: 0.3,
        smoke: 9408139,
        rise: 0.9,
        delay: 0.3,
        opacity: 0.6,
        cool: 0.2,
      });
    (this.sparks({
      pos: t,
      count: 190,
      speed: 30,
      speedJitter: 0.55,
      life: 0.5,
      lifeJitter: 0.5,
      grav: 8,
      drag: 0.9,
      width: 0.035,
      stretch: 0.06,
      color: [16777215, 16774872, 16769162, 14215423],
      up: 2,
    }),
      this.shock(t, i * 2.8, 0.22, { opacity: 0.95, color: 15266047 }),
      this.shock(t, i * 1.4, 0.5, {
        solid: !0,
        opacity: 0.35,
        color: 14212580,
      }),
      e.grounded &&
        (this.ring(
          $i.set(t.x, e.groundY + 0.12, t.z),
          i * 2.6,
          1.5,
          9077880,
          0.6,
        ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 0.7)),
      this.dirt(e, 1.6, [5921368, 7039848, 4079164]),
      this.visibleFlash(e, 0.35, 0.25, !1, i * 6),
      this.shake(e, i / 3.2, (10 + i * 7) * 1.5));
  }
  dynamite(e, t) {
    const { p: i, r: n } = e,
      o = Math.min(t, 5);
    for (let r = 0; r < o; r++) {
      const l = r === o - 1;
      this.after(r * 0.045, () => {
        const c = l ? i : Mn(i, n * 0.25);
        (this.api.flash(c, 22, 0.1, 16738864),
          this.sparks({
            pos: c,
            count: l ? 80 : 18,
            speed: 12,
            life: 1.3,
            lifeJitter: 0.5,
            grav: 14,
            drag: 0.35,
            width: 0.06,
            stretch: 0.03,
            color: [16765562, 16748334, 16734746],
            up: 6,
            floorY: e.groundY,
            bounce: 0.35,
          }));
      });
    }
    const a = (o - 1) * 0.045;
    this.after(a, () => {
      this.api.fireLight(i, n);
      for (let r = 0; r < 3 + Math.min(3, t); r++)
        this.billow({
          pos: Mn(i, n * 0.2),
          vel: Nu(n * 0.8),
          size: n * 0.15,
          end: n * ki(0.42, 0.55),
          grow: 0.16,
          life: ki(1, 1.4),
          heat: 1.05,
          smoke: 7034952,
          rise: 1.2,
          cool: 0.48,
        });
      for (let r = 0; r < 4; r++)
        this.billow({
          pos: Mn(i, n * 0.3).setY(i.y + n * 0.2),
          size: n * 0.25,
          end: n * 0.75,
          grow: 0.5,
          life: ki(3, 4.5),
          heat: 0.3,
          smoke: 9074020,
          rise: 1.4,
          delay: 0.3,
          opacity: 0.6,
          cool: 0.2,
        });
      (this.api.shards({
        pos: i.clone(),
        count: 24 + t * 4,
        color: [12073514, 13939850, 13195068],
        size: 0.07,
        sizeJitter: 0.6,
        life: 2.6,
        speed: 7,
        vel: ul.set(0, 5, 0),
        grav: 9,
        drag: 1.4,
        spin: 22,
        bounce: 0.1,
        floorY: e.groundY,
        shape: "blade",
      }),
        this.shock(i, n * 2.2, 0.28, { opacity: 0.55, color: 16769736 }),
        e.grounded &&
          (this.ring(
            $i.set(i.x, e.groundY + 0.12, i.z),
            n * 2.4,
            1.4,
            8086864,
            0.6,
          ),
          this.scorch($i.set(i.x, e.groundY, i.z), n * 0.8)),
        this.dirt(e, 1 + t * 0.3),
        this.shake(e, n / 3.5, (10 + n * 7) * 1.5));
    });
  }
  breach(e) {
    const { p: t, r: i, normal: n } = e;
    (this.api.flash(t, 45, 0.14, 16773328), this.api.fireLight(t, i));
    for (let o = 0; o < 6; o++) {
      const a = n
        .clone()
        .multiplyScalar(i * ki(3, 6))
        .add(Nu(i * 0.9));
      this.billow({
        pos: t.clone().addScaledVector(n, 0.3),
        vel: a,
        size: i * 0.1,
        end: i * ki(0.32, 0.45),
        grow: 0.2,
        life: ki(1, 1.5),
        heat: 1.3,
        smoke: 8025714,
        rise: 1,
        drag: 3.2,
        cool: 0.3,
        lump: 1.3,
      });
    }
    for (let o = 0; o < 3; o++)
      this.billow({
        pos: t.clone().addScaledVector(n, i * 0.6),
        vel: n.clone().multiplyScalar(i * 0.8),
        size: i * 0.3,
        end: i * 0.8,
        grow: 0.8,
        life: ki(3.5, 5),
        heat: 0.05,
        smoke: 10130828,
        rise: 0.7,
        delay: 0.1,
        opacity: 0.6,
      });
    (this.sparks({
      pos: t,
      count: 160,
      speed: 34,
      dir: n,
      cone: 0.55,
      life: 0.55,
      grav: 8,
      width: 0.04,
      stretch: 0.06,
      color: [16777215, 16773296, 16756816],
    }),
      this.sparks({
        pos: t,
        count: 30,
        speed: 10,
        dir: n.clone().negate(),
        cone: 0.9,
        life: 0.35,
        grav: 8,
        color: [16760944],
      }),
      this.api.shards({
        pos: t.clone().addScaledVector(n, 0.3),
        count: 60,
        color: [9079430, 7105640, 10525844],
        size: 0.16,
        sizeJitter: 0.8,
        life: 3,
        speed: 5,
        vel: n.clone().multiplyScalar(18),
        grav: 22,
        floorY: e.groundY,
        spin: 16,
        bounce: 0.28,
        spread: 0.5,
      }),
      this.api.spawn({
        pos: t.clone().addScaledVector(n, i * 0.5),
        count: this.api.n(30),
        color: [15131354, 14210252],
        size: 8,
        sizeJitter: 0.5,
        life: 3,
        speed: 2,
        vel: n.clone().multiplyScalar(6),
        grav: -0.4,
        drag: 1.6,
        alpha: 0.45,
        growth: 2.2,
        spread: 0.5,
      }),
      this.shock(t.clone().addScaledVector(n, i * 0.4), i * 2, 0.25, {
        opacity: 0.7,
      }),
      this.shake(e, i / 3, (10 + i * 7) * 1.5));
  }
  frag(e) {
    const { p: t, r: i } = e;
    (this.api.flash(t, 38, 0.12, 16773328), this.api.fireLight(t, i * 0.7));
    for (let n = 0; n < 3; n++)
      this.billow({
        pos: Mn(t, i * 0.1),
        size: i * 0.08,
        end: i * ki(0.26, 0.34),
        grow: 0.14,
        life: ki(0.9, 1.2),
        heat: 1.25,
        smoke: 6052181,
        rise: 1,
        cool: 0.48,
      });
    for (let n = 0; n < 3; n++)
      this.billow({
        pos: Mn(t, i * 0.2).setY(t.y + i * 0.1),
        size: i * 0.15,
        end: i * 0.45,
        grow: 0.6,
        life: ki(3, 4),
        heat: 0.3,
        smoke: 8091762,
        rise: 1,
        delay: 0.3,
        opacity: 0.6,
        cool: 0.2,
      });
    if (
      (this.sparks({
        pos: t,
        count: 380,
        speed: 58,
        speedJitter: 0.45,
        life: 0.55,
        lifeJitter: 0.45,
        grav: 3,
        drag: 0.25,
        width: 0.028,
        stretch: 0.085,
        color: [16775392, 16770976, 16760666],
        up: 1.5,
      }),
      this.shock(t, i * 2.2, 0.3, { opacity: 0.6 }),
      e.grounded)
    ) {
      for (let n = 0; n < 16; n++) {
        const o = Math.random() * Math.PI * 2,
          a = ki(i * 0.5, i * 2),
          r = new k(
            t.x + Math.cos(o) * a,
            e.groundY + 0.15,
            t.z + Math.sin(o) * a,
          );
        this.after(a / 55, () => {
          (this.api.spawn({
            pos: r,
            count: this.api.n(3),
            color: [14866630, 13813940],
            size: 3,
            sizeJitter: 0.5,
            life: 0.9,
            speed: 0.8,
            vel: ul.set(0, 2.2, 0),
            grav: 2,
            drag: 1.5,
            alpha: 0.5,
            growth: 1.8,
          }),
            this.sparks({
              pos: r,
              count: 3,
              speed: 4,
              dir: new k(0, 1, 0),
              cone: 1,
              life: 0.25,
              grav: 10,
              color: [16767120],
            }));
        });
      }
      (this.ring(
        $i.set(t.x, e.groundY + 0.12, t.z),
        i * 2.4,
        1.6,
        8221023,
        0.55,
      ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 0.45));
    }
    (this.dirt(e, 1.5), this.shake(e, i / 4.5, (10 + i * 7) * 1.5));
  }
  incendiary(e) {
    const { p: t, r: i } = e;
    (this.api.flash(t, 50, 0.3, 16752704), this.api.fireLight(t, i * 1.3));
    for (let n = 0; n < 11; n++) {
      const o = Math.random() * Math.PI * 2,
        a = ki(i * 0.8, i * 1.7);
      this.billow({
        pos: Mn(t, i * 0.15),
        vel: new k(Math.cos(o) * a, ki(1, i * 0.5), Math.sin(o) * a),
        size: i * 0.12,
        end: i * ki(0.32, 0.45),
        grow: 0.35,
        life: ki(2.6, 3.8),
        heat: 1.2,
        smoke: 2235674,
        rise: i * 0.25,
        drag: 1.6,
        cool: 0.6,
        flat: 0.7,
        lump: 1.3,
      });
    }
    for (let n = 0; n < 4; n++)
      this.billow({
        pos: Mn(t, i * 0.2),
        vel: new k(0, i * 0.9, 0),
        size: i * 0.2,
        end: i * 0.55,
        grow: 0.5,
        life: 3,
        heat: 1.1,
        smoke: 2235674,
        rise: i * 0.3,
        cool: 0.55,
      });
    this.sparks({
      pos: t,
      count: 120,
      speed: 15,
      speedJitter: 0.6,
      life: 2.2,
      lifeJitter: 0.5,
      grav: 13,
      drag: 0.25,
      width: 0.11,
      stretch: 0.025,
      color: [16758858, 16742942, 16765562],
      up: 7,
      floorY: e.groundY,
      bounce: 0.15,
    });
    for (let n = 0; n < 10; n++)
      this.after(0.4 + n * 0.45, () =>
        this.billow({
          pos: Mn(t, i * 0.5).setY(e.groundY + 1),
          vel: new k(ki(-1, 1), i * 0.5, ki(-1, 1)),
          size: i * 0.2,
          end: i * 0.7,
          grow: 2,
          life: 6,
          heat: 0.35,
          smoke: 2499103,
          rise: i * 0.06,
          cool: 0.2,
          opacity: 0.6,
        }),
      );
    if (e.grounded) {
      for (let n = 0; n < 16; n++) {
        const o = Math.random() * Math.PI * 2,
          a = Math.sqrt(Math.random()) * i * 1.2,
          r = t.x + Math.cos(o) * a,
          l = t.z + Math.sin(o) * a,
          c = this.api.ground(r, t.y + 2, l) ?? e.groundY;
        this.burner(new k(r, c + 0.1, l), ki(6, 11), ki(0.7, 1.3));
      }
      (this.ring(
        $i.set(t.x, e.groundY + 0.15, t.z),
        i * 2.2,
        1.8,
        6048316,
        0.55,
      ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 1.15));
    }
    (this.visibleFlash(e, 0.3, 0.6, !0, i * 8),
      this.shake(e, i / 5, (10 + i * 7) * 1.5));
  }
  heavy(e) {
    const { p: t, r: i } = e;
    (this.api.flash(t, 120, 0.3, 16774880), this.api.fireLight(t, i));
    for (let n = 0; n < 10; n++)
      this.billow({
        pos: Mn(t, i * 0.2),
        vel: Nu(i * 0.8).setY(i * ki(0.4, 1)),
        size: i * 0.12,
        end: i * ki(0.38, 0.5),
        grow: 0.45,
        life: ki(3.5, 4.5),
        heat: 1.35,
        smoke: 4538427,
        rise: i * 0.3,
        drag: 1.2,
        cool: 0.45,
      });
    for (let n = 0; n < 6; n++)
      this.billow({
        pos: t
          .clone()
          .add(
            new k(ki(-0.3, 0.3) * i, i * (0.3 + n * 0.18), ki(-0.3, 0.3) * i),
          ),
        vel: new k(0, i * 0.55, 0),
        size: i * 0.15,
        end: i * 0.45,
        grow: 1.4,
        life: ki(7, 9),
        heat: 0.7,
        smoke: 5392964,
        rise: i * 0.03,
        delay: 0.3 + n * 0.08,
        cool: 0.25,
      });
    for (let n = 0; n < 8; n++) {
      const o = (n / 8) * Math.PI * 2;
      this.billow({
        pos: t
          .clone()
          .add(new k(Math.cos(o) * i * 0.35, i * 1.5, Math.sin(o) * i * 0.35)),
        vel: new k(Math.cos(o) * i * 0.3, i * 0.3, Math.sin(o) * i * 0.3),
        size: i * 0.2,
        end: i * 0.58,
        grow: 2.2,
        life: ki(8, 10),
        heat: 0.55,
        smoke: 5656392,
        rise: i * 0.02,
        delay: 0.9 + Math.random() * 0.3,
        cool: 0.22,
        drag: 0.8,
      });
    }
    (this.sparks({
      pos: t,
      count: 260,
      speed: 34,
      life: 1,
      grav: 12,
      width: 0.06,
      stretch: 0.05,
      color: [16774088, 16761440, 16747050],
      up: 5,
    }),
      this.shock(t, i * 3, 0.55, { opacity: 0.7 }),
      this.shock(t, i * 1.5, 0.8, { solid: !0, opacity: 0.28, flat: 0.6 }),
      e.grounded &&
        (this.ring(
          $i.set(t.x, e.groundY + 0.2, t.z),
          i * 3.8,
          3,
          8221023,
          0.75,
        ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 1.05)),
      this.dirt(e, 9),
      this.visibleFlash(e, 0.55, 0.7, !0, i * 12),
      this.shake(e, i / 5, (10 + i * 7) * 1.6, 180));
  }
  thermobaric(e) {
    const { p: t, r: i } = e;
    for (let n = 0; n < 12; n++) {
      const o = Math.random() * Math.PI * 2,
        a = ki(i * 0.6, i * 1.4);
      this.billow({
        pos: Mn(t, i * 0.1),
        vel: new k(Math.cos(o) * a, ki(0, i * 0.4), Math.sin(o) * a),
        size: i * 0.08,
        end: i * ki(0.3, 0.42),
        grow: 0.45,
        life: 0.7,
        heat: 0,
        smoke: 14673386,
        rise: 0,
        drag: 2.6,
        opacity: 0.45,
        lump: 0.7,
      });
    }
    (this.api.spawn({
      pos: t,
      count: this.api.n(40),
      color: [15265266, 14081508],
      size: 10,
      sizeJitter: 0.5,
      life: 0.8,
      speed: i * 1.4,
      drag: 2.4,
      alpha: 0.35,
      growth: 1.6,
      spread: i * 0.2,
    }),
      this.after(0.55, () => {
        (this.api.flash(t, 220, 0.45, 16773848),
          this.api.fireLight(t, i * 1.6),
          this.glow(t, i * 4.5, 1.1, 16769712));
        for (let n = 0; n < 16; n++) {
          const o = Math.random() * Math.PI * 2,
            a = Math.sqrt(Math.random()) * i * 0.85,
            r = Math.random() * i * 0.45;
          this.billow({
            pos: new k(t.x + Math.cos(o) * a, t.y + r, t.z + Math.sin(o) * a),
            vel: new k(Math.cos(o) * i * 0.4, i * 0.5, Math.sin(o) * i * 0.4),
            size: i * 0.12,
            end: i * ki(0.32, 0.44),
            grow: 0.3,
            life: ki(3, 4),
            heat: 1.5,
            smoke: 3814704,
            rise: i * 0.2,
            cool: 0.5,
            lump: 1.1,
          });
        }
        for (let n = 0; n < 8; n++)
          this.billow({
            pos: Mn(t, i * 0.3).setY(t.y + i * 0.6),
            vel: new k(0, i * 0.5, 0),
            size: i * 0.25,
            end: i * 0.7,
            grow: 2,
            life: 10,
            heat: 0.5,
            smoke: 4538427,
            rise: i * 0.03,
            delay: 0.6 + n * 0.1,
            cool: 0.2,
          });
        (this.shock(t, i * 2.6, 0.7, { opacity: 0.6, color: 16771272 }),
          this.shock(t, i * 1.7, 1.1, { solid: !0, opacity: 0.5, flat: 0.55 }),
          this.sparks({
            pos: t,
            count: 300,
            speed: 36,
            life: 1.1,
            grav: 10,
            width: 0.06,
            stretch: 0.05,
            color: [16774088, 16761440, 16747050],
            up: 4,
            spread: i * 0.8,
          }),
          e.grounded &&
            (this.ring(
              $i.set(t.x, e.groundY + 0.25, t.z),
              i * 3.5,
              3,
              8221023,
              0.8,
            ),
            this.scorch($i.set(t.x, e.groundY, t.z), i * 1.1)),
          this.dirt(e, 10),
          this.visibleFlash(e, 0.85, 1, !0, i * 14),
          this.shake(e, i / 5, (10 + i * 7) * 1.7, 200),
          e.grounded &&
            this.after(1.4, () => {
              for (let n = 0; n < 24; n++) {
                const o = (n / 24) * Math.PI * 2,
                  a = new k(
                    t.x + Math.cos(o) * i * 2.2,
                    e.groundY + 0.6,
                    t.z + Math.sin(o) * i * 2.2,
                  );
                this.api.spawn({
                  pos: a,
                  count: this.api.n(2),
                  color: [13813422, 12760734],
                  size: 9,
                  sizeJitter: 0.5,
                  life: 1.6,
                  speed: 0.5,
                  vel: ul.set(
                    -Math.cos(o) * i * 1.1,
                    1.2,
                    -Math.sin(o) * i * 1.1,
                  ),
                  drag: 0.6,
                  grav: -0.6,
                  alpha: 0.45,
                  growth: 1.6,
                });
              }
            }));
      }));
  }
  nuclear(e) {
    const { p: t, r: i } = e,
      n = new k(t.x, e.groundY, t.z);
    (this.api.fireLight(t, i),
      this.api.flash(t, 600, 1.2, 16777215),
      this.visibleFlash(e, 1, 2.4, !1, i * 30),
      this.glow(t, i * 2.4, 2.6, 16777215),
      this.glow(t, i * 5, 4.5, 16751184),
      this.billow({
        pos: t.clone().setY(t.y + i * 0.1),
        vel: new k(0, i * 0.12, 0),
        size: i * 0.1,
        end: i * 0.42,
        grow: 1.2,
        life: 16,
        heat: 1.7,
        smoke: 3812904,
        rise: 0,
        drag: 0.1,
        cool: 0.55,
        lump: 0.6,
      }));
    for (let a = 0; a < 8; a++)
      this.billow({
        pos: Mn(t, i * 0.15).setY(t.y + i * 0.12),
        vel: Nu(i * 0.2).setY(i * 0.14),
        size: i * 0.08,
        end: i * 0.3,
        grow: 1.2,
        life: 15,
        heat: 1.5,
        smoke: 4010026,
        drag: 0.1,
        cool: 0.5,
      });
    for (let a = 0; a < 10; a++)
      this.billow({
        pos: n
          .clone()
          .add(
            new k(
              ki(-0.03, 0.03) * i,
              i * (0.04 + a * 0.055),
              ki(-0.03, 0.03) * i,
            ),
          ),
        vel: new k(0, i * (0.03 + a * 0.008), 0),
        size: i * 0.04,
        end: i * (0.17 - a * 0.005),
        grow: 2.5,
        life: 16 - a * 0.2,
        heat: 0.9 - a * 0.04,
        smoke: 6969932,
        drag: 0.25,
        delay: 0.5 + a * 0.18,
        cool: 0.3,
        fog: 0.5,
      });
    for (let a = 0; a < 12; a++) {
      const r = (a / 12) * Math.PI * 2;
      this.billow({
        pos: t
          .clone()
          .add(new k(Math.cos(r) * i * 0.25, i * 0.55, Math.sin(r) * i * 0.25)),
        vel: new k(Math.cos(r) * i * 0.09, i * 0.1, Math.sin(r) * i * 0.09),
        size: i * 0.1,
        end: i * 0.3,
        grow: 3,
        life: 15,
        heat: 1.1,
        smoke: 4865076,
        drag: 0.15,
        delay: 1.2 + Math.random() * 0.4,
        cool: 0.35,
      });
    }
    (this.shock(t, i * 4, 1.6, { opacity: 0.7 }),
      this.shock(t, i * 1.4, 2.5, {
        solid: !0,
        opacity: 0.5,
        flat: 0.5,
        delay: 0.3,
      }),
      e.grounded &&
        (this.ring($i.set(t.x, e.groundY + 0.5, t.z), i * 5, 5, 9075302, 0.85),
        this.ring(
          $i.set(t.x, e.groundY + 0.5, t.z),
          i * 3,
          6,
          7167824,
          0.7,
          0.6,
        ),
        this.scorch($i.set(t.x, e.groundY, t.z), i * 0.9)),
      this.sparks({
        pos: t,
        count: 400,
        speed: i * 0.9,
        life: 1.8,
        grav: 14,
        width: 0.12,
        stretch: 0.04,
        color: [16774088, 16761440, 16747050],
        up: i * 0.2,
        spread: i * 0.3,
      }));
    const o = i * 10.5 + 130;
    this.shake(e, 0.95 + i / 150, o, 220);
  }
  update(e) {
    const t = e * this.timeScale;
    if (((this.clock += t), this.schedule.length))
      for (let i = this.schedule.length - 1; i >= 0; i--) {
        if (this.schedule[i].at > this.clock) continue;
        this.schedule.splice(i, 1)[0].run();
      }
    for (let i = this.billows.length - 1; i >= 0; i--) {
      const n = this.billows[i];
      if (n.delay > 0) {
        if (((n.delay -= t), n.delay > 0)) continue;
        n.mesh.visible = !0;
      }
      if (((n.age += t), n.age >= n.life || this.api.scale() <= 0)) {
        (this.scene.remove(n.mesh),
          this.billows.splice(i, 1),
          this.idleBillows.push(n));
        continue;
      }
      const o = Math.max(0, 1 - n.drag * t);
      (n.vel.multiplyScalar(o),
        (n.vel.y += n.rise * t),
        n.mesh.position.addScaledVector(n.vel, t));
      const a = Math.min(1, n.age / n.grow),
        r = 1 - (1 - a) ** 3,
        l = n.s0 + (n.s1 - n.s0) * r + n.drift * n.age;
      (n.mesh.scale.set(l, l * n.flat, l), (n.mesh.rotation.y += t * 0.15));
      const c = n.mesh.material.uniforms;
      ((c.uAge.value = n.age / n.life), (c.uTime.value = n.age));
    }
    for (let i = this.shocks.length - 1; i >= 0; i--) {
      const n = this.shocks[i];
      if (n.delay > 0) {
        if (((n.delay -= t), n.delay > 0)) continue;
        n.mesh.visible = !0;
      }
      n.age += t;
      const o = n.age / n.life;
      if (o >= 1) {
        (this.scene.remove(n.mesh),
          this.spare.shock.push(n.mesh.material),
          this.shocks.splice(i, 1));
        continue;
      }
      const a = (n.radius * (1 - Math.exp(-o * 4.2))) / (1 - Math.exp(-4.2));
      (n.mesh.scale.set(a, a * n.mesh.userData.flat, a),
        (n.mesh.material.uniforms.uOpacity.value = n.opacity * (1 - o) ** 1.5),
        (n.mesh.material.uniforms.uTime.value = n.age));
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const n = this.rings[i];
      if (n.delay > 0) {
        if (((n.delay -= t), n.delay > 0)) continue;
        n.mesh.visible = !0;
      }
      n.age += t;
      const o = n.age / n.life;
      if (o >= 1) {
        (this.scene.remove(n.mesh),
          this.spare.ring.push(n.mesh.material),
          this.rings.splice(i, 1));
        continue;
      }
      const a = n.radius * (1 - (1 - o) ** 3);
      n.mesh.scale.setScalar(Math.max(0.01, a));
      const r = n.mesh.material.uniforms;
      ((r.uOpacity.value = n.opacity * (1 - o) ** 1.2),
        (r.uInner.value = 0.45 + o * 0.4));
    }
    for (let i = this.glows.length - 1; i >= 0; i--) {
      const n = this.glows[i];
      if (n.delay > 0) {
        if (((n.delay -= t), n.delay > 0)) continue;
        n.sprite.visible = !0;
      }
      n.age += t;
      const o = n.age / n.life;
      if (o >= 1) {
        (this.scene.remove(n.sprite),
          this.spare.glow.push(n.sprite.material),
          this.glows.splice(i, 1));
        continue;
      }
      (n.sprite.scale.setScalar(n.size * (0.3 + 0.7 * (1 - (1 - o) ** 4))),
        (n.sprite.material.opacity = (1 - o) ** 2));
    }
    for (let i = this.scorches.length - 1; i >= 0; i--) {
      const n = this.scorches[i];
      if (((n.age += e), n.age >= n.life)) {
        (this.scene.remove(n.mesh),
          this.spare.scorch.push(n.mesh.material),
          this.scorches.splice(i, 1));
        continue;
      }
      const o = n.mesh.material.uniforms;
      ((o.uOpacity.value = 0.85 * Math.min(1, (n.life - n.age) / 6)),
        (o.uGlow.value = Math.max(0, 1 - n.age / 5)));
    }
    (this.updateBurners(t),
      this.updateSparks(t),
      this.flashEl &&
        (this.flashLevel > 0 &&
          (this.flashLevel = Math.max(
            0,
            this.flashLevel - e / this.flashDecay,
          )),
        (this.flashEl.style.opacity = (this.flashLevel ** 1.5).toFixed(3))));
  }
  updateBurners(e) {
    for (let t = this.burners.length - 1; t >= 0; t--) {
      const i = this.burners[t];
      if (this.clock >= i.until || this.api.scale() <= 0) {
        this.burners.splice(t, 1);
        continue;
      }
      i.t += e;
      const n = Math.min(1, (i.until - this.clock) / 2);
      for (; i.t > 0.045;)
        ((i.t -= 0.045),
          this.api.spawn({
            pos: i.pos,
            count: 1,
            color: [16769162, 16752704, 16738848],
            size: 1.7 * i.size * n,
            sizeJitter: 0.5,
            life: 0.5,
            speed: 0.2,
            vel: ul.set(0, 2.6, 0),
            grav: -2,
            drag: 0.8,
            alpha: 0.85,
            spread: 0.5 * i.size,
            growth: -0.45,
          }),
          Math.random() < 0.2 &&
            this.api.spawn({
              pos: $i.copy(i.pos).setY(i.pos.y + 1.2),
              count: 1,
              color: [4867392, 5919822],
              size: 4 * i.size,
              sizeJitter: 0.5,
              life: 2.6,
              speed: 0.3,
              vel: ul.set(0, 1.8, 0),
              grav: -0.4,
              drag: 0.6,
              alpha: 0.22 * n,
              growth: 3,
              spread: 0.3,
            }),
          Math.random() < 0.12 &&
            this.sparks({
              pos: i.pos,
              count: 1,
              speed: 2.5,
              dir: new k(0, 1, 0),
              cone: 0.6,
              life: 1.2,
              grav: -1,
              drag: 0.5,
              width: 0.03,
              stretch: 0.02,
              color: [16756816],
              up: 1.5,
            }));
    }
  }
  updateSparks(e) {
    if (!this.sn) {
      this.sparkMesh.count = 0;
      return;
    }
    let t = !1;
    for (let i = 0; i < this.sn; i++) {
      if (((this.sl[i] -= e), this.sl[i] <= 0)) {
        (this.moveSpark(i, --this.sn), i--);
        continue;
      }
      const n = i * 3;
      this.sv[n + 1] -= this.sg[i] * e;
      const o = Math.max(0, 1 - this.sd[i] * e);
      ((this.sv[n] *= o),
        (this.sv[n + 1] *= o),
        (this.sv[n + 2] *= o),
        (this.sp[n] += this.sv[n] * e),
        (this.sp[n + 1] += this.sv[n + 1] * e),
        (this.sp[n + 2] += this.sv[n + 2] * e),
        this.sp[n + 1] < this.sf[i] &&
          ((this.sp[n + 1] = this.sf[i]),
          this.sb[i] > 0
            ? ((this.sv[n + 1] = Math.abs(this.sv[n + 1]) * this.sb[i]),
              (this.sv[n] *= 0.5),
              (this.sv[n + 2] *= 0.5))
            : (this.sl[i] = Math.min(this.sl[i], 0.12))));
    }
    for (let i = 0; i < this.sn; i++) {
      const n = i * 3,
        o = this.sl[i] / this.sm[i];
      $i.set(this.sv[n], this.sv[n + 1], this.sv[n + 2]);
      const a = $i.length(),
        r = Math.max(
          this.sw[i] * 1.5,
          a *
            this.ss[i] *
            (this.timeScale < 1 ? Math.max(0.3, this.timeScale) : 1),
        );
      a > 1e-4
        ? jg.setFromUnitVectors(XC, $i.multiplyScalar(1 / a))
        : jg.identity();
      const l = this.sw[i] * Math.min(1, o * 3);
      (jC.compose(
        ul.set(this.sp[n], this.sp[n + 1], this.sp[n + 2]),
        jg,
        $i.set(l, l, r),
      ),
        this.sparkMesh.setMatrixAt(i, jC));
      const c = Math.min(1, o * 1.6);
      (this.tmpColor.setRGB(
        this.sc[n] * c + (1 - c) * 0.5,
        this.sc[n + 1] * c * c + (1 - c) * 0.08,
        this.sc[n + 2] * c * c,
      ),
        this.sparkMesh.setColorAt(i, this.tmpColor),
        (t = !0));
    }
    ((this.sparkMesh.count = this.sn),
      (this.sparkMesh.instanceMatrix.needsUpdate = !0),
      t && (this.sparkMesh.instanceColor.needsUpdate = !0));
  }
  moveSpark(e, t) {
    const i = e * 3,
      n = t * 3;
    for (let o = 0; o < 3; o++)
      ((this.sp[i + o] = this.sp[n + o]),
        (this.sv[i + o] = this.sv[n + o]),
        (this.sc[i + o] = this.sc[n + o]));
    ((this.sl[e] = this.sl[t]),
      (this.sm[e] = this.sm[t]),
      (this.sg[e] = this.sg[t]),
      (this.sd[e] = this.sd[t]),
      (this.sw[e] = this.sw[t]),
      (this.ss[e] = this.ss[t]),
      (this.sf[e] = this.sf[t]),
      (this.sb[e] = this.sb[t]));
  }
}
