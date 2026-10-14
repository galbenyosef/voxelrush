// index-Dp6GxvJu 99 — camera
// Lines 62734-63072 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
w(Ar, "SEAT_GUN_COOL", 3.6);
let Ea = Ar;
class Ny {
  constructor(e, t = !0) {
    w(this, "renderer");
    w(this, "scene", new nh());
    w(this, "camera", new Cs(35, 1, 0.01, 100));
    w(this, "model", null);
    w(this, "pivot", new pe());
    w(this, "drag", null);
    w(this, "previousX", 0);
    w(this, "idle", 0);
    w(this, "events", new AbortController());
    w(this, "clearHeld");
    w(this, "animateBody");
    w(this, "autoRotate", !0);
    w(this, "framing", null);
    ((this.canvas = e),
      (this.renderer = new oy({
        canvas: e,
        alpha: !0,
        antialias: !0,
        preserveDrawingBuffer: !0,
      })),
      this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)),
      this.renderer.setClearColor(0, 0),
      this.scene.add(new A0(14744319, 3426361, 2.5)));
    const i = new Wr(16768945, 3);
    (i.position.set(-3, 4, 5), this.scene.add(i));
    const s = new Wr(8179164, 2);
    if (
      (s.position.set(3, 2, -3),
      this.scene.add(s),
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
  showCharacter(e, t) {
    const i = ec(4809806);
    (Wl(i.group, e, t),
      (i.group.rotation.y = Math.PI + 0.25),
      this.set(i.group, !0));
  }
  showCharacterPortrait(e, t) {
    this.showCharacter(e, t);
    const i = this.model.getObjectByName("skin-head");
    for (const a of i.parent.children) a !== i && (a.visible = !1);
    this.model.updateMatrixWorld(!0);
    const s = new gn().setFromObject(i),
      o = s.getCenter(new k());
    (this.model.position.sub(o),
      (this.framing = {
        size: s.getSize(new k()),
        character: !0,
        portrait: !0,
      }),
      this.frame(),
      this.draw());
  }
  showEquippedCharacter(e, t, i, s, o, a, r = {}) {
    const l = ec(4809806),
      c = new pe();
    (c.add(l.group),
      (l.group.rotation.y = Math.PI + 0.2),
      Wl(l.group, e, t),
      ih(
        l.armorRoot,
        l.head,
        l.legL,
        l.legR,
        i.map((u) => u.id),
        sr(i[0]),
        r,
      ),
      E0(l, s.id, a));
    for (const u of l.heldMesh.children) Ba(u, s.cosmetic, o);
    const h = (u) =>
      Su(l, u, performance.now() / 1e3, {
        speed: 0,
        pitch: 0,
        held: s.id,
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
      (this.clearHeld = () => E0(l, 0, a)),
      this.draw());
  }
  showVehicle(e) {
    const t = Hp(e, 0, e + 3);
    t.rotation.y = -0.75;
    const i = new pe();
    (i.add(t), (i.rotation.x = 0.18), this.set(i, !1));
  }
  rotate(e) {
    ((this.pivot.rotation.y += e), (this.idle = 3), this.draw());
  }
  resetRotation() {
    (this.pivot.rotation.set(0, 0, 0), this.draw());
  }
  showWeapon(e, t, i = 0.02) {
    if (ho(e)) {
      const o = sZ(e, t);
      ((o.rotation.y = Math.PI + 0.65), this.set(o, !1), this.setWear(i));
      return;
    }
    const s = R0(e).group;
    (Ba(
      s,
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
      (s.rotation.y = -Math.PI / 2 + 0.25),
      (s.rotation.z = -0.12),
      this.set(s, !1),
      this.setWear(i));
  }
  setWear(e, t = 0) {
    var i;
    ((i = this.model) == null ||
      i.traverse((s) => {
        const o = s.material;
        o && (Array.isArray(o) ? o : [o]).forEach((a) => AU(a, e, t));
      }),
      this.draw());
  }
  set(e, t) {
    (this.clear(),
      (this.model = e),
      this.pivot.add(e),
      this.pivot.rotation.set(0, 0, 0),
      e.updateMatrixWorld(!0));
    const i = new gn().setFromObject(e),
      s = i.getSize(new k()),
      o = i.getCenter(new k());
    (e.position.sub(o),
      (this.framing = { size: s, character: t }),
      this.frame(),
      this.draw());
  }
  frame() {
    const e = this.framing;
    if (e) {
      if (e.portrait) {
        const t = Math.tan(fi.degToRad(this.camera.fov) / 2),
          i = Math.max(e.size.y, e.size.x / this.camera.aspect);
        this.camera.position.set(0, 0, (i / 2 / t) * 1.2 + e.size.z / 2);
      } else if (e.character) {
        const t = Math.max(
          e.size.y,
          e.size.x / Math.max(0.4, this.camera.aspect),
        );
        this.camera.position.set(0, 0.18, t * 1.8 + 0.25);
      } else {
        const t = Math.tan(fi.degToRad(this.camera.fov) / 2),
          i = t * this.camera.aspect,
          s =
            Math.max(e.size.y / 2 / t, e.size.x / 2 / i) * 0.94 + e.size.z / 2;
        this.camera.position.set(0, 0.03, s);
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
    var t;
    (matchMedia("(prefers-reduced-motion: reduce)").matches ||
      ((t = this.animateBody) == null || t.call(this, e),
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
    var e;
    ((this.animateBody = void 0),
      (e = this.clearHeld) == null || e.call(this),
      (this.clearHeld = void 0),
      this.model &&
        (this.pivot.remove(this.model),
        Zl(this.model),
        this.model.traverse((t) => {
          const i = t;
          i.isMesh &&
            (i.userData.sharedGeometry || i.geometry.dispose(),
            i.userData.sharedMaterial ||
              (Array.isArray(i.material) ? i.material : [i.material]).forEach(
                (o) => o.dispose(),
              ));
        }),
        (this.model = null)));
  }
  dispose() {
    (this.events.abort(), this.clear(), this.renderer.dispose());
  }
}
let yc;
const Kh = new Map(),
  M6 = 320,
  S6 = 230;
function VK(n, e, t = 257, i) {
  const s = `${n}:${e}:${t}:${i ?? ""}`;
  let o = Kh.get(s);
  if (o) return o;
  const a = n === "vehicle" || n === "showcase";
  return (
    yc ?? (yc = new Ny(document.createElement("canvas"), !1)),
    yc.resize(
      n === "portrait" ? 128 : a ? M6 * 2 : M6,
      n === "portrait" ? 128 : a ? S6 * 2 : S6,
    ),
    n === "portrait"
      ? yc.showCharacterPortrait(e, i)
      : n === "character"
        ? yc.showCharacter(e, i)
        : n === "vehicle"
          ? yc.showVehicle(t)
          : yc.showWeapon(t, e),
    yc.draw(),
    (o = yc.canvas.toDataURL("image/webp", 0.92)),
    Kh.set(s, o),
    Kh.size > 600 && Kh.delete(Kh.keys().next().value),
    o
  );
}
const $K = (n, e, t = 257, i) => Kh.get(`${n}:${e}:${t}:${i ?? ""}`),
  qw = [],
  V5 = new Map();
let $5 = !1;
function qK() {
  if ($5) return;
  $5 = !0;
  const n = () => {
    const e = qw.shift();
    if (!e) {
      $5 = !1;
      return;
    }
    (e.run(), setTimeout(n, 0));
  };
  requestAnimationFrame(n);
}
function s0(n, e, t = 257, i, s = !1) {
  const o = `${n}:${e}:${t}:${i ?? ""}`,
    a = Kh.get(o);
  if (a) return Promise.resolve(a);
  let r = V5.get(o);
  return (
    r ||
    ((r = new Promise((l, c) => {
      const h = {
        key: o,
        run: () => {
          try {
            l(VK(n, e, t, i));
          } catch (d) {
            c(d);
          } finally {
            V5.delete(o);
          }
        },
      };
      (s ? qw.unshift(h) : qw.push(h), qK());
    })),
    V5.set(o, r),
    r)
  );
}
let KK = 0;
