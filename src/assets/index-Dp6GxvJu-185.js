// index-Dp6GxvJu 185 — model
// Lines 103512-103759 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Tee {
  constructor(e, t, i, s = {}) {
    w(this, "charges", new Map());
    w(this, "normal", new k());
    w(this, "front", new k(0, 0, 1));
    w(this, "up", new k(0, 1, 0));
    w(this, "template", qS());
    w(this, "tmp", new k());
    ((this.scene = e),
      (this.vehicles = t),
      (this.onAttach = i),
      (this.hooks = s));
  }
  arm(e) {
    const t = eR(e.item),
      i = new os(
        new es({
          map: xee(),
          color: t ? 16752704 : 16722458,
          transparent: !0,
          blending: cn,
          depthWrite: !1,
          toneMapped: !1,
        }),
      );
    (i.scale.setScalar(t ? 0.3 : 0.2),
      i.position.set(
        ...(e.item === E.C4
          ? [0, -0.042, 0.12]
          : t
            ? [0, 0.38, 0]
            : [0.055, -0.035, 0.24]),
      ),
      e.model.add(i));
    const s = document.createElement("canvas");
    ((s.width = 128), (s.height = 64));
    const o = s.getContext("2d"),
      a = new bi(s);
    a.colorSpace = vi;
    const r = new os(
      new es({
        map: a,
        transparent: !0,
        depthWrite: !1,
        depthTest: !1,
        toneMapped: !1,
        sizeAttenuation: !1,
      }),
    );
    (r.scale.set(0.15, 0.075, 1),
      (r.renderOrder = 999),
      this.scene.add(r),
      (e.armed = {
        led: i,
        label: r,
        ctx: o,
        tex: a,
        text: "",
        phase: 0,
        fuse: 0,
      }));
  }
  disarm(e) {
    e.armed &&
      (e.model.remove(e.armed.led),
      e.armed.led.material.dispose(),
      this.scene.remove(e.armed.label),
      e.armed.label.material.dispose(),
      e.armed.tex.dispose(),
      (e.armed = void 0));
  }
  drawCountdown(e, t) {
    const i = t.toFixed(1);
    if (i === e.text) return;
    e.text = i;
    const s = e.ctx;
    (s.clearRect(0, 0, 128, 64),
      (s.font = "bold 44px monospace"),
      (s.textAlign = "center"),
      (s.textBaseline = "middle"),
      (s.lineWidth = 8),
      (s.strokeStyle = "rgba(0,0,0,.75)"),
      s.strokeText(i, 64, 34),
      (s.fillStyle = t < 1.5 ? "#ff3b2a" : t < 3 ? "#ffb03a" : "#ffe9a8"),
      s.fillText(i, 64, 34),
      (e.tex.needsUpdate = !0));
  }
  packet(e) {
    var g;
    const t = e.u8(),
      i = e.u32();
    if (t) {
      const b = this.charges.get(i);
      (b && (this.disarm(b), Zl(b.model), this.scene.remove(b.model)),
        this.charges.delete(i));
      return;
    }
    const s = e.str(),
      o = e.u8(),
      a = e.u8(),
      r = e.u16(),
      l = () => new k(e.f32(), e.f32(), e.f32()),
      c = l(),
      h = l(),
      d = l(),
      u = l(),
      f = e.remaining() >= 2 ? e.u16() : E.C4,
      p = e.remaining() >= 4 ? e.f32() : -1,
      m = e.remaining() >= 2 ? JSON.parse(e.str()) : null;
    let y = this.charges.get(i);
    if (y)
      (y.mode === 0 &&
        a !== 0 &&
        ((g = this.onAttach) == null || g.call(this, c, a === 2)),
        Object.assign(y, {
          deadline: p >= 0 ? performance.now() + p * 1e3 : 0,
          item: f,
          remaining: p,
          owner: s,
          planet: o,
          mode: a,
          target: r,
          pos: c,
          normal: h,
          local: d,
          localNormal: u,
        }));
    else {
      const b = f === E.C4 ? this.template.clone() : Mk(f),
        S = f === E.C4 ? 0 : -new gn().setFromObject(b).min.y;
      (b.position.copy(c),
        this.scene.add(b),
        (y = {
          offset: S,
          deadline: p >= 0 ? performance.now() + p * 1e3 : 0,
          item: f,
          remaining: p,
          id: i,
          owner: s,
          planet: o,
          mode: a,
          target: r,
          pos: c,
          normal: h,
          local: d,
          localNormal: u,
          model: b,
        }),
        this.charges.set(i, y));
    }
    Ba(y.model, m, (m == null ? void 0 : m.ownerName) === s ? m.owner : s);
  }
  update(e, t) {
    var i, s, o, a;
    for (const r of this.charges.values()) {
      r.remaining >= 0 &&
        (r.remaining = Math.max(0, (r.deadline - performance.now()) / 1e3));
      const l =
        r.remaining >= 0 ? 1 + Math.sin(performance.now() * 0.015) * 0.025 : 1;
      if (
        (r.model.scale.setScalar(l),
        (r.model.visible = r.planet === t),
        !r.model.visible)
      )
        continue;
      const c = r.mode === 2 ? this.vehicles.vehicles.get(r.target) : void 0;
      if (
        (c
          ? (r.model.position.copy(r.local).applyQuaternion(c.quat).add(c.pos),
            this.normal.copy(r.localNormal).applyQuaternion(c.quat))
          : (r.model.position.lerp(
              r.pos,
              r.mode === 0 ? 1 - Math.exp(-24 * e) : 1,
            ),
            this.normal.copy(r.normal)),
        r.model.quaternion.setFromUnitVectors(
          r.item === E.C4 ? this.front : this.up,
          this.normal.normalize(),
        ),
        r.mode > 0 &&
          r.offset &&
          r.model.position.addScaledVector(this.normal, r.offset),
        r.remaining >= 0)
      ) {
        r.armed || this.arm(r);
        const h = r.armed,
          d = eR(r.item),
          u = Math.max(0, Math.min(1, 1 - r.remaining / 6));
        (this.drawCountdown(h, r.remaining),
          (h.label.position.copy(r.model.position).y += 0.75));
        const f = Math.max(0.09, Math.min(0.8, r.remaining / 5));
        ((h.phase += e / f),
          h.phase >= 1 &&
            ((h.phase -= Math.floor(h.phase)),
            d ||
              (s = (i = this.hooks).beep) == null ||
              s.call(i, r.model.position, u)),
          (h.led.material.opacity = d
            ? 0.65 + Math.random() * 0.35
            : h.phase < 0.35
              ? 1
              : 0.08),
          d &&
            ((h.fuse += e),
            h.fuse > 0.05 &&
              ((h.fuse = 0),
              (a = (o = this.hooks).fuse) == null ||
                a.call(o, h.led.getWorldPosition(this.tmp)))));
      } else r.armed && this.disarm(r);
    }
  }
  clear() {
    for (const e of this.charges.values())
      (this.disarm(e), Zl(e.model), this.scene.remove(e.model));
    this.charges.clear();
  }
}
const GI = () => z.language === "en",
  Et = (n, e) => (GI() ? e : n),
  Aee = () => (GI() ? "en" : "ru"),
  Ob = (n) => (n.kind === "bot" ? Et("Солдат", "Soldier") : Zs(n.type)),
  Nb = (n) => Ns(n, z.language),
  Db = (n) =>
    n.vehicleType !== void 0
      ? /#\d+$/.test(n.label)
        ? `${Zs(n.vehicleType)} #${n.id}`
        : Zs(n.vehicleType)
      : Ns(n.label, z.language),
  _ee = (n) =>
    n.kind === "relay"
      ? Et("Источник редстоуна", "Redstone source")
      : n.command === "bridge"
        ? Et("Мост", "Bridge")
        : n.command === "gate horizontal"
          ? Et("Горизонтальные ворота", "Horizontal gate")
          : Et("Ворота", "Gate"),
  wd = (n) =>
    n.replace(
      /[&<>"']/g,
      (e) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[e],
    );
