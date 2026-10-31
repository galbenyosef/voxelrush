// index-BeUlFSPp 120 — camera
// Lines 70290-70625 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class j5 {
  constructor(e, t = !0) {
    ((this.canvas = e),
      (this.renderer = new h5({
        canvas: e,
        alpha: !0,
        antialias: !0,
        preserveDrawingBuffer: !0,
      })),
      this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)),
      this.renderer.setClearColor(0, 0),
      this.scene.add(new z0(14744319, 3426361, 2.5)));
    const i = new Dl(16768945, 3);
    (i.position.set(-3, 4, 5), this.scene.add(i));
    const n = new Dl(8179164, 2);
    if (
      (n.position.set(3, 2, -3),
      this.scene.add(n),
      this.scene.add(this.pivot),
      t)
    ) {
      const o = { signal: this.events.signal };
      for (const a of [
        "mousedown",
        "mousemove",
        "mouseup",
        "click",
        "pointermove",
      ])
        e.addEventListener(a, (r) => r.stopPropagation(), o);
      e.addEventListener(
        "pointerdown",
        (a) => {
          (a.preventDefault(),
            a.stopPropagation(),
            e.focus({ preventScroll: !0 }));
        },
        o,
      );
    }
    if (t) {
      const o = { signal: this.events.signal };
      (e.addEventListener(
        "pointerdown",
        (r) => {
          ((this.drag = r.pointerId),
            (this.previousX = r.clientX),
            e.setPointerCapture(r.pointerId));
        },
        o,
      ),
        e.addEventListener(
          "pointermove",
          (r) => {
            this.drag === r.pointerId &&
              ((this.pivot.rotation.y += (r.clientX - this.previousX) * 0.012),
              (this.previousX = r.clientX),
              (this.idle = 3),
              this.draw());
          },
          o,
        ));
      const a = () => (this.drag = null);
      (e.addEventListener("pointerup", a, o),
        e.addEventListener("pointercancel", a, o));
    }
  }
  renderer;
  scene = new Cd();
  camera = new qn(35, 1, 0.01, 100);
  model = null;
  pivot = new re();
  drag = null;
  previousX = 0;
  idle = 0;
  events = new AbortController();
  clearHeld;
  animateBody;
  autoRotate = !0;
  showCharacter(e, t, i = "") {
    const n = Kc(4809806);
    (Oc(n.group, e, t),
      i && Ed(n.head, i),
      (n.group.rotation.y = Math.PI + 0.25),
      this.set(n.group, !0));
  }
  showCharacterPortrait(e, t, i = "") {
    this.showCharacter(e, t, i);
    const n = this.model.getObjectByName("skin-head");
    for (const r of n.parent.children) r !== n && (r.visible = !1);
    this.model.updateMatrixWorld(!0);
    const o = new zs().setFromObject(n),
      a = o.getCenter(new k());
    (this.model.position.sub(a),
      (this.framing = {
        size: o.getSize(new k()),
        character: !0,
        portrait: !0,
      }),
      this.frame(),
      this.draw());
  }
  showEquippedCharacter(e, t, i, n, o, a, r = {}) {
    const l = Kc(4809806),
      c = new re();
    (c.add(l.group),
      (l.group.rotation.y = Math.PI + 0.2),
      Oc(l.group, e, t),
      X0(
        l.armorRoot,
        l.head,
        l.legL,
        l.legR,
        i.map((u) => u.id),
        qr(i[0]),
        r,
      ),
      Td(l, n.id, a));
    for (const u of l.heldMesh.children) qa(u, n.cosmetic, o);
    const h = (u) =>
      Xf(l, u, performance.now() / 1e3, {
        speed: 0,
        pitch: 0,
        held: n.id,
        aiming: !1,
      });
    for (let u = 0; u < 12; u++) h(0.1);
    const d = this.pivot.rotation.y;
    (this.set(c, !0),
      (this.framing = null),
      c.position.set(0, -1.08, 0),
      this.camera.position.set(0, 0, 3.8),
      this.camera.lookAt(0, 0, 0),
      (this.pivot.rotation.y = d),
      (this.animateBody = h),
      (this.clearHeld = () => Td(l, 0, a)),
      this.draw());
  }
  showVehicle(e) {
    const t = xm(e, 0, e + 3);
    t.rotation.y = -0.75;
    const i = new re();
    (i.add(t), (i.rotation.x = 0.18), this.set(i, !1));
  }
  rotate(e) {
    ((this.pivot.rotation.y += e), (this.idle = 3), this.draw());
  }
  resetRotation() {
    (this.pivot.rotation.set(0, 0, 0), this.draw());
  }
  showWeapon(e, t, i = 0.02) {
    if (Lo(e)) {
      const o = Bse(e, t);
      ((o.rotation.y = Math.PI + 0.65), this.set(o, !1), this.setWear(i));
      return;
    }
    const n = Pd(e).group;
    (qa(
      n,
      t
        ? {
            uid: "preview",
            skin: t,
            owner: "preview",
            kills: 128,
            blocks: 1280,
          }
        : null,
      "preview",
    ),
      (n.rotation.y = -Math.PI / 2 + 0.25),
      (n.rotation.z = -0.12),
      this.set(n, !1),
      this.setWear(i));
  }
  setWear(e, t = 0) {
    (this.model?.traverse((i) => {
      const n = i.material;
      n && (Array.isArray(n) ? n : [n]).forEach((o) => aK(o, e, t));
    }),
      this.draw());
  }
  framing = null;
  set(e, t) {
    (this.clear(),
      (this.model = e),
      this.pivot.add(e),
      this.pivot.rotation.set(0, 0, 0),
      e.updateMatrixWorld(!0));
    const i = new zs().setFromObject(e),
      n = i.getSize(new k()),
      o = i.getCenter(new k());
    (e.position.sub(o),
      (this.framing = { size: n, character: t }),
      this.frame(),
      this.draw());
  }
  frame() {
    const e = this.framing;
    if (e) {
      if (e.portrait) {
        const t = Math.tan(ni.degToRad(this.camera.fov) / 2),
          i = Math.max(e.size.y, e.size.x / this.camera.aspect);
        this.camera.position.set(0, 0, (i / 2 / t) * 1.2 + e.size.z / 2);
      } else if (e.character) {
        const t = Math.max(
          e.size.y,
          e.size.x / Math.max(0.4, this.camera.aspect),
        );
        this.camera.position.set(0, 0.18, t * 1.8 + 0.25);
      } else {
        const t = Math.tan(ni.degToRad(this.camera.fov) / 2),
          i = t * this.camera.aspect,
          n =
            Math.max(e.size.y / 2 / t, e.size.x / 2 / i) * 0.94 + e.size.z / 2;
        this.camera.position.set(0, 0.03, n);
      }
      this.camera.lookAt(0, 0, 0);
    }
  }
  resize(e, t) {
    (this.renderer.setSize(e, t, !1),
      (this.camera.aspect = e / Math.max(1, t)),
      this.camera.updateProjectionMatrix(),
      this.frame(),
      this.draw());
  }
  tick(e) {
    (matchMedia("(prefers-reduced-motion: reduce)").matches ||
      (this.animateBody?.(e),
      this.autoRotate &&
        this.drag === null &&
        ((this.idle = Math.max(0, this.idle - e)),
        this.idle || (this.pivot.rotation.y += e * 0.15))),
      this.draw());
  }
  draw() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    ((this.animateBody = void 0),
      this.clearHeld?.(),
      (this.clearHeld = void 0),
      this.model &&
        (this.pivot.remove(this.model),
        Gc(this.model),
        this.model.traverse((e) => {
          const t = e;
          t.isMesh &&
            (t.userData.sharedGeometry || t.geometry.dispose(),
            t.userData.sharedMaterial ||
              (Array.isArray(t.material) ? t.material : [t.material]).forEach(
                (n) => n.dispose(),
              ));
        }),
        (this.model = null)));
  }
  dispose() {
    (this.events.abort(), this.clear(), this.renderer.dispose());
  }
}
let Zl;
const Uh = new Map(),
  V8 = 320,
  q8 = 230;
function DJ(s, e, t = 257, i) {
  const n = `${s}:${e}:${t}:${i ?? ""}`;
  let o = Uh.get(n);
  if (o) return o;
  const a = s === "vehicle" || s === "showcase";
  return (
    (Zl ??= new j5(document.createElement("canvas"), !1)),
    Zl.resize(
      s === "portrait" || s === "hat" ? 128 : a ? V8 * 2 : V8,
      s === "portrait" || s === "hat" ? 128 : a ? q8 * 2 : q8,
    ),
    s === "hat"
      ? Zl.showCharacterPortrait(i || "ranger", null, e)
      : s === "portrait"
        ? Zl.showCharacterPortrait(e, i)
        : s === "character"
          ? Zl.showCharacter(e, i)
          : s === "vehicle"
            ? Zl.showVehicle(t)
            : Zl.showWeapon(t, e),
    Zl.draw(),
    (o = Zl.canvas.toDataURL("image/webp", 0.92)),
    Uh.set(n, o),
    Uh.size > 600 && Uh.delete(Uh.keys().next().value),
    o
  );
}
const HJ = (s, e, t = 257, i) => Uh.get(`${s}:${e}:${t}:${i ?? ""}`),
  T4 = [],
  aw = new Map();
let rw = !1;
function BJ() {
  if (rw) return;
  rw = !0;
  const s = () => {
    const e = T4.shift();
    if (!e) {
      rw = !1;
      return;
    }
    (e.run(), setTimeout(s, 0));
  };
  requestAnimationFrame(s);
}
function vr(s, e, t = 257, i, n = !1) {
  const o = `${s}:${e}:${t}:${i ?? ""}`,
    a = Uh.get(o);
  if (a) return Promise.resolve(a);
  let r = aw.get(o);
  return (
    r ||
    ((r = new Promise((l, c) => {
      const h = {
        key: o,
        run: () => {
          try {
            l(DJ(s, e, t, i));
          } catch (d) {
            c(d);
          } finally {
            aw.delete(o);
          }
        },
      };
      (n ? T4.unshift(h) : T4.push(h), BJ());
    })),
    aw.set(o, r),
    r)
  );
}
let zJ = 0;
