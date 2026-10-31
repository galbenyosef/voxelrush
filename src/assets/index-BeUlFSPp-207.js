// index-BeUlFSPp 207 — model
// Lines 110265-110505 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Dae {
  constructor(e, t, i, n = {}) {
    ((this.scene = e),
      (this.vehicles = t),
      (this.onAttach = i),
      (this.hooks = n));
  }
  charges = new Map();
  normal = new k();
  front = new k(0, 0, 1);
  up = new k(0, 1, 0);
  template = GA();
  tmp = new k();
  arm(e) {
    const t = RC(e.item),
      i = new Ws(
        new hn({
          map: Nae(),
          color: t ? 16752704 : 16722458,
          transparent: !0,
          blending: rs,
          depthWrite: !1,
          toneMapped: !1,
        }),
      );
    (i.scale.setScalar(t ? 0.3 : 0.2),
      i.position.set(
        ...(e.item === w.C4
          ? [0, -0.042, 0.12]
          : t
            ? [0, 0.38, 0]
            : [0.055, -0.035, 0.24]),
      ),
      e.model.add(i));
    const n = document.createElement("canvas");
    ((n.width = 128), (n.height = 64));
    const o = n.getContext("2d"),
      a = new Si(n);
    a.colorSpace = Ii;
    const r = new Ws(
      new hn({
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
    const n = e.ctx;
    (n.clearRect(0, 0, 128, 64),
      (n.font = "bold 44px monospace"),
      (n.textAlign = "center"),
      (n.textBaseline = "middle"),
      (n.lineWidth = 8),
      (n.strokeStyle = "rgba(0,0,0,.75)"),
      n.strokeText(i, 64, 34),
      (n.fillStyle = t < 1.5 ? "#ff3b2a" : t < 3 ? "#ffb03a" : "#ffe9a8"),
      n.fillText(i, 64, 34),
      (e.tex.needsUpdate = !0));
  }
  packet(e) {
    const t = e.u8(),
      i = e.u32();
    if (t) {
      const y = this.charges.get(i);
      (y && (this.disarm(y), Gc(y.model), this.scene.remove(y.model)),
        this.charges.delete(i));
      return;
    }
    const n = e.str(),
      o = e.u8(),
      a = e.u8(),
      r = e.u16(),
      l = () => new k(e.f32(), e.f32(), e.f32()),
      c = l(),
      h = l(),
      d = l(),
      u = l(),
      f = e.remaining() >= 2 ? e.u16() : w.C4,
      p = e.remaining() >= 4 ? e.f32() : -1,
      m = e.remaining() >= 2 ? JSON.parse(e.str()) : null;
    let g = this.charges.get(i);
    if (g)
      (g.mode === 0 && a !== 0 && this.onAttach?.(c, a === 2),
        Object.assign(g, {
          deadline: p >= 0 ? performance.now() + p * 1e3 : 0,
          item: f,
          remaining: p,
          owner: n,
          planet: o,
          mode: a,
          target: r,
          pos: c,
          normal: h,
          local: d,
          localNormal: u,
        }));
    else {
      const y = f === w.C4 ? this.template.clone() : LO(f),
        b = f === w.C4 ? 0 : -new zs().setFromObject(y).min.y;
      (y.position.copy(c),
        this.scene.add(y),
        (g = {
          offset: b,
          deadline: p >= 0 ? performance.now() + p * 1e3 : 0,
          item: f,
          remaining: p,
          id: i,
          owner: n,
          planet: o,
          mode: a,
          target: r,
          pos: c,
          normal: h,
          local: d,
          localNormal: u,
          model: y,
        }),
        this.charges.set(i, g));
    }
    qa(g.model, m, m?.ownerName === n ? m.owner : n);
  }
  update(e, t) {
    for (const i of this.charges.values()) {
      i.remaining >= 0 &&
        (i.remaining = Math.max(0, (i.deadline - performance.now()) / 1e3));
      const n =
        i.remaining >= 0 ? 1 + Math.sin(performance.now() * 0.015) * 0.025 : 1;
      if (
        (i.model.scale.setScalar(n),
        (i.model.visible = i.planet === t),
        !i.model.visible)
      )
        continue;
      const o = i.mode === 2 ? this.vehicles.vehicles.get(i.target) : void 0;
      if (
        (o
          ? (i.model.position.copy(i.local).applyQuaternion(o.quat).add(o.pos),
            this.normal.copy(i.localNormal).applyQuaternion(o.quat))
          : (i.model.position.lerp(
              i.pos,
              i.mode === 0 ? 1 - Math.exp(-24 * e) : 1,
            ),
            this.normal.copy(i.normal)),
        i.model.quaternion.setFromUnitVectors(
          i.item === w.C4 ? this.front : this.up,
          this.normal.normalize(),
        ),
        i.mode > 0 &&
          i.offset &&
          i.model.position.addScaledVector(this.normal, i.offset),
        i.remaining >= 0)
      ) {
        i.armed || this.arm(i);
        const a = i.armed,
          r = RC(i.item),
          l = Math.max(0, Math.min(1, 1 - i.remaining / 6));
        (this.drawCountdown(a, i.remaining),
          (a.label.position.copy(i.model.position).y += 0.75));
        const c = Math.max(0.09, Math.min(0.8, i.remaining / 5));
        ((a.phase += e / c),
          a.phase >= 1 &&
            ((a.phase -= Math.floor(a.phase)),
            r || this.hooks.beep?.(i.model.position, l)),
          (a.led.material.opacity = r
            ? 0.65 + Math.random() * 0.35
            : a.phase < 0.35
              ? 1
              : 0.08),
          r &&
            ((a.fuse += e),
            a.fuse > 0.05 &&
              ((a.fuse = 0),
              this.hooks.fuse?.(a.led.getWorldPosition(this.tmp)))));
      } else i.armed && this.disarm(i);
    }
  }
  clear() {
    for (const e of this.charges.values())
      (this.disarm(e), Gc(e.model), this.scene.remove(e.model));
    this.charges.clear();
  }
}
const Hae = () => !wi(),
  _t = (s, e) => I(e, s),
  Bae = () => (Hae() ? "en" : "ru"),
  sM = (s) => (s.kind === "bot" ? _t("Солдат", "Soldier") : to(s.type)),
  nM = (s) => sa(s),
  oM = (s) =>
    s.vehicleType !== void 0
      ? /#\d+$/.test(s.label)
        ? `${to(s.vehicleType)} #${s.id}`
        : to(s.vehicleType)
      : sa(s.label),
  zae = (s) =>
    s.kind === "relay"
      ? _t("Источник редстоуна", "Redstone source")
      : s.command === "bridge"
        ? _t("Мост", "Bridge")
        : s.command === "gate horizontal"
          ? _t("Горизонтальные ворота", "Horizontal gate")
          : _t("Ворота", "Gate"),
  Pu = (s) =>
    s.replace(
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
