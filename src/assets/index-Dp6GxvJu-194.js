// index-Dp6GxvJu 194 — addeventlistener
// Lines 106282-106816 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Qee {
  constructor() {
    w(this, "keys", new Set());
    w(this, "pressed", new Set());
    w(this, "mdx", 0);
    w(this, "mdy", 0);
    w(this, "wheel", 0);
    w(this, "aimTap", !1);
    w(this, "mouseL", !1);
    w(this, "mouseR", !1);
    w(this, "clickL", !1);
    w(this, "clickR", !1);
    w(this, "locked", !1);
    w(this, "dragLook", !1);
    w(this, "drag", null);
    w(this, "uiOpen", !1);
    w(this, "mobile", lr());
    w(this, "chuteHeld", !1);
    w(this, "lookMineEnabled", !1);
    w(this, "lookMineHold", !1);
    w(this, "virtual", new Set());
    w(this, "virtualPressed", new Set());
    w(this, "onLockChange", null);
    w(this, "onMobileSettings", null);
    w(this, "onMobileTab", null);
    w(this, "onMobileCargo", null);
    w(this, "onMobileToolMode", null);
    w(this, "onLookTap", null);
    w(this, "el", null);
    w(this, "lockRequestedAt", -1 / 0);
  }
  bind(e, t = !1) {
    ((this.el = e),
      (this.dragLook = t && !this.mobile),
      this.dragLook && document.body.classList.add("drag-look"),
      window.addEventListener("keydown", (s) => {
        if (!this.uiOpen) {
          if (this.dragLook && this.locked && s.code === "Escape") {
            this.unlock();
            return;
          }
          ((s.code === "Tab" ||
            s.code === "Space" ||
            s.code === "AltLeft" ||
            s.code === "AltRight") &&
            s.preventDefault(),
            s.repeat || this.pressed.add(s.code),
            this.keys.add(s.code));
        }
      }),
      window.addEventListener("keyup", (s) => this.keys.delete(s.code)),
      window.addEventListener("blur", () => this.keys.clear()),
      e.addEventListener("mousedown", (s) => {
        if (!(this.uiOpen || !this.locked)) {
          if (this.dragLook) {
            this.beginDrag(s.button);
            return;
          }
          (s.button === 0 && ((this.mouseL = !0), (this.clickL = !0)),
            s.button === 2 && ((this.mouseR = !0), (this.clickR = !0)));
        }
      }),
      window.addEventListener("mouseup", (s) => {
        var o;
        if (
          this.dragLook &&
          ((o = this.drag) == null ? void 0 : o.button) === s.button
        ) {
          this.endDrag(!0);
          return;
        }
        (s.button === 0 && (this.mouseL = !1),
          s.button === 2 && (this.mouseR = !1));
      }),
      window.addEventListener("contextmenu", (s) => s.preventDefault()));
    const i = (s) =>
      s instanceof HTMLElement &&
      (s instanceof HTMLInputElement ||
        s instanceof HTMLTextAreaElement ||
        s instanceof HTMLSelectElement ||
        s.isContentEditable);
    (window.addEventListener(
      "touchstart",
      (s) => {
        var a;
        const o = document.activeElement;
        i(o) &&
          !i(s.target) &&
          !(
            (a = o.closest(".panel, dialog, #chatbox, #mobilechatpopup")) !=
              null && a.contains(s.target)
          ) &&
          o.blur();
      },
      { capture: !0, passive: !0 },
    ),
      document.addEventListener("selectstart", (s) => {
        i(s.target) || s.preventDefault();
      }),
      window.addEventListener("mousemove", (s) => {
        if (!(!this.locked || this.uiOpen)) {
          if (this.dragLook) {
            if (!this.drag) return;
            ((this.drag.moved += Math.abs(s.movementX) + Math.abs(s.movementY)),
              !this.drag.held &&
                this.drag.moved > 6 &&
                this.drag.timer &&
                (clearTimeout(this.drag.timer), (this.drag.timer = null)));
          }
          ((this.mdx += s.movementX), (this.mdy += s.movementY));
        }
      }),
      window.addEventListener(
        "wheel",
        (s) => {
          this.locked && !this.uiOpen && (this.wheel += Math.sign(s.deltaY));
        },
        { passive: !0 },
      ),
      document.addEventListener("pointerlockchange", () => {
        var s;
        this.dragLook ||
          this.mobile ||
          ((this.locked = document.pointerLockElement === this.el),
          this.locked || ((this.mouseL = !1), (this.mouseR = !1)),
          (s = this.onLockChange) == null || s.call(this, this.locked));
      }),
      this.mobile && this.bindMobileControls(),
      this.mobile &&
        (document.addEventListener("gesturestart", (s) => s.preventDefault(), {
          passive: !1,
        }),
        document.addEventListener(
          "touchmove",
          (s) => {
            s.touches.length > 1 && s.preventDefault();
          },
          { passive: !1 },
        )));
  }
  bindMobileControls() {
    document.body.classList.add("mobile");
    const e = document.getElementById("mobile-controls"),
      t = document.getElementById("minimap");
    e && t && e.appendChild(t);
    const i = document.getElementById("hotbar");
    e && i && e.appendChild(i);
    const s = document.getElementById("basic-training");
    e && s && e.appendChild(s);
    const o = document.getElementById("mobile-stick-zone"),
      a = document.getElementById("mobile-stick"),
      r = document.getElementById("mobile-look-zone");
    let l = -1,
      c = -1,
      h = 0,
      d = 0,
      u = 0,
      f = 0,
      p = -1;
    const m = (C, R) => {
      const L = Math.hypot(C, R),
        N = 42,
        D = L > N ? N / L : 1;
      ((C *= D),
        (R *= D),
        a == null ||
          a.setAttribute("style", `transform:translate(${C}px,${R}px)`),
        this.setVirtual("left", C < -12),
        this.setVirtual("right", C > 12),
        this.setVirtual("forward", R < -12),
        this.setVirtual("back", R > 12));
    };
    (o == null ||
      o.addEventListener("pointerdown", (C) => {
        if ((o.setPointerCapture(C.pointerId), z.mobileLayoutEdit)) {
          p = C.pointerId;
          return;
        }
        ((l = C.pointerId), (h = C.clientX), (d = C.clientY), m(0, 0));
      }),
      o == null ||
        o.addEventListener("pointermove", (C) => {
          var R;
          if (C.pointerId === p) {
            const L = Math.min(92, Math.max(8, (C.clientX / innerWidth) * 100)),
              N = Math.min(90, Math.max(10, (C.clientY / innerHeight) * 100));
            ((o.style.left = `${L}%`),
              (o.style.top = `${N}%`),
              (o.style.bottom = "auto"));
            const D = Nf(),
              H = (R = D["mobile-stick-zone"]) == null ? void 0 : R.s;
            D["mobile-stick-zone"] =
              H !== void 0 ? { x: L, y: N, s: H } : { x: L, y: N };
          } else C.pointerId === l && m(C.clientX - h, C.clientY - d);
        }));
    const y = (C) => {
      if (C.pointerId === p) {
        ((p = -1), qi());
        return;
      }
      C.pointerId === l &&
        ((l = -1), a == null || a.setAttribute("style", ""), m(0, 0));
    };
    (o == null || o.addEventListener("pointerup", y),
      o == null || o.addEventListener("pointercancel", y));
    let g = 0,
      b = 0,
      S = 0,
      M = 0,
      x = null;
    (r == null ||
      r.addEventListener("pointerdown", (C) => {
        ((c = C.pointerId),
          (u = C.clientX),
          (f = C.clientY),
          r.setPointerCapture(C.pointerId),
          (g = performance.now()),
          (b = C.clientX),
          (S = C.clientY),
          (M = 0));
        const R = C.pointerId;
        (x !== null && clearTimeout(x),
          (x = setTimeout(() => {
            ((x = null),
              this.lookMineEnabled &&
                c === R &&
                M < 12 &&
                ((this.lookMineHold = !0),
                (this.mouseL = !0),
                (this.clickL = !0)));
          }, 300)));
      }),
      r == null ||
        r.addEventListener("pointermove", (C) => {
          C.pointerId === c &&
            ((this.mdx += C.clientX - u),
            (this.mdy += C.clientY - f),
            (u = C.clientX),
            (f = C.clientY),
            (M = Math.max(M, Math.hypot(C.clientX - b, C.clientY - S))),
            !this.lookMineHold &&
              M >= 12 &&
              x !== null &&
              (clearTimeout(x), (x = null)));
        }));
    const T = (C) => {
      var R;
      C.pointerId === c &&
        ((c = -1),
        x !== null && (clearTimeout(x), (x = null)),
        this.lookMineHold
          ? ((this.lookMineHold = !1), (this.mouseL = !1))
          : C.type === "pointerup" &&
            performance.now() - g < 300 &&
            M < 12 &&
            ((R = this.onLookTap) == null || R.call(this)));
    };
    (r == null || r.addEventListener("pointerup", T),
      r == null || r.addEventListener("pointercancel", T));
    const A = (C, R) => {
        for (const [L, N, D] of [
          ["minus", "−", -0.1],
          ["plus", "+", 0.1],
        ]) {
          const H = document.createElement("div");
          ((H.className = `btn-scale-badge ${L}`),
            (H.textContent = N),
            H.addEventListener("pointerdown", (G) => {
              (G.stopPropagation(), G.preventDefault(), R(D));
            }),
            C.appendChild(H));
        }
      },
      _ = (C) => Math.max(0.75, Math.min(1.6, Math.round(C * 100) / 100));
    (o &&
      A(o, (C) => {
        const R = Nf(),
          L = R["mobile-stick-zone"],
          N = (L == null ? void 0 : L.x) ?? (o.offsetLeft / innerWidth) * 100,
          D = (L == null ? void 0 : L.y) ?? (o.offsetTop / innerHeight) * 100,
          H = _(((L == null ? void 0 : L.s) ?? 1) + C);
        ((R["mobile-stick-zone"] = { x: N, y: D, s: H }),
          (o.style.left = `${N}%`),
          (o.style.top = `${D}%`),
          (o.style.bottom = "auto"),
          o.style.setProperty("--btn-scale", String(H)),
          qi());
      }),
      document.querySelectorAll("[data-mobile-action]").forEach((C) => {
        const R = C.dataset.mobileAction;
        let L = null;
        const N = (G) => {
            var I, O;
            G.preventDefault();
            try {
              C.setPointerCapture(G.pointerId);
            } catch {}
            if (z.mobileLayoutEdit) {
              L = { id: G.pointerId, moved: !1 };
              return;
            }
            if (!(R === "settings" || R === "tab" || R === "shop")) {
              if (R === "cargo") {
                (I = this.onMobileCargo) == null || I.call(this);
                return;
              }
              if (R === "toolmode") {
                (O = this.onMobileToolMode) == null || O.call(this);
                return;
              }
              if (C.dataset.mobileToggle === "true") {
                const X =
                  R !== "aim" &&
                  R !== "chute" &&
                  R !== "fire" &&
                  R !== "rocket" &&
                  R !== "bomb"
                    ? !this.virtual.has(R)
                    : !C.classList.contains("active");
                (C.classList.toggle("active", X),
                  R === "aim"
                    ? ((this.mouseR = X),
                      X && (this.clickR = !0),
                      (this.aimTap = !0))
                    : R === "chute"
                      ? (this.chuteHeld = X)
                      : this.setVirtual(R, X));
                return;
              }
              R === "fire"
                ? ((this.mouseL = !0), (this.clickL = !0))
                : R === "aim"
                  ? ((this.mouseR = !0), (this.clickR = !0), (this.aimTap = !0))
                  : R === "rocket"
                    ? ((this.mouseR = !0), (this.clickR = !0))
                    : R === "bomb"
                      ? this.setVirtual("jump", !0)
                      : R === "use"
                        ? this.setVirtual(R, !0)
                        : R !== "chute" && this.setVirtual(R, !0);
            }
          },
          D = (G) => {
            var ee;
            if (!L || G.pointerId !== L.id) return;
            L.moved = !0;
            const I = C.id === "minimap",
              O = Math.min(
                I ? 92 : 96,
                Math.max(I ? 8 : 4, (G.clientX / innerWidth) * 100),
              ),
              F = Math.min(
                I ? 88 : 94,
                Math.max(I ? 12 : 6, (G.clientY / innerHeight) * 100),
              );
            ((C.style.left = `${O}%`),
              (C.style.top = `${F}%`),
              I &&
                ((C.style.right = "auto"),
                (C.style.transform =
                  "translate(-50%, -50%) scale(var(--btn-scale, 1))")));
            const X = Nf(),
              Q = (ee = X[C.id]) == null ? void 0 : ee.s;
            X[C.id] = Q !== void 0 ? { x: O, y: F, s: Q } : { x: O, y: F };
          },
          H = () => {
            if (L) {
              ((L = null), qi());
              return;
            }
            C.dataset.mobileToggle !== "true" &&
              (R === "fire"
                ? (this.mouseL = !1)
                : R === "aim"
                  ? (this.mouseR = !1)
                  : R === "rocket"
                    ? (this.mouseR = !1)
                    : R === "bomb"
                      ? this.setVirtual("jump", !1)
                      : R === "use"
                        ? this.setVirtual(R, !1)
                        : R !== "settings" &&
                          R !== "tab" &&
                          R !== "cargo" &&
                          R !== "chute" &&
                          R !== "toolmode" &&
                          this.setVirtual(R, !1));
          };
        (C.addEventListener("pointerdown", N),
          C.addEventListener("pointermove", D),
          C.addEventListener("pointerup", H),
          C.addEventListener("pointercancel", H),
          (R === "settings" || R === "tab" || R === "shop") &&
            C.addEventListener("click", (G) => {
              var I, O;
              (G.preventDefault(),
                !z.mobileLayoutEdit &&
                  (R === "settings"
                    ? (I = this.onMobileSettings) == null || I.call(this)
                    : R === "tab"
                      ? (O = this.onMobileTab) == null || O.call(this)
                      : (this.setVirtual("shop", !0),
                        this.setVirtual("shop", !1))));
            }),
          A(C, (G) => {
            const I = Nf(),
              O = I[C.id],
              F = C.getBoundingClientRect(),
              X =
                (O == null ? void 0 : O.x) ??
                ((F.left + F.width / 2) / innerWidth) * 100,
              Q =
                (O == null ? void 0 : O.y) ??
                ((F.top + F.height / 2) / innerHeight) * 100,
              ee = _(((O == null ? void 0 : O.s) ?? 1) + G);
            ((I[C.id] = { x: X, y: Q, s: ee }),
              C.style.setProperty("--btn-scale", String(ee)),
              qi());
          }));
      }));
  }
  clearMobileAim() {
    var e;
    ((this.mouseR = !1),
      (this.clickR = !1),
      (e = document.getElementById("mobaim")) == null ||
        e.classList.remove("active"));
  }
  releaseMobileHold(e, t) {
    var i;
    (this.setVirtual(e, !1),
      (i = document.getElementById(t)) == null || i.classList.remove("active"));
  }
  setLookMine(e) {
    ((this.lookMineEnabled = e),
      !e &&
        this.lookMineHold &&
        ((this.lookMineHold = !1), (this.mouseL = !1)));
  }
  clearChute() {
    var e;
    ((this.chuteHeld = !1),
      (e = document.getElementById("mobchute")) == null ||
        e.classList.remove("active"));
  }
  setVirtual(e, t) {
    (t && !this.virtual.has(e) && this.virtualPressed.add(e),
      t ? this.virtual.add(e) : this.virtual.delete(e));
  }
  action(e) {
    const t = z.binds[e];
    return (!!t && this.keys.has(t)) || this.virtual.has(e);
  }
  actionPressed(e) {
    const t = z.binds[e];
    return (!!t && this.pressed.has(t)) || this.virtualPressed.has(e);
  }
  lock() {
    var e, t, i, s;
    if (!this.mobile) {
      if (((this.lockRequestedAt = performance.now()), this.dragLook)) {
        this.locked ||
          ((this.locked = !0),
          (e = this.onLockChange) == null || e.call(this, !0));
        return;
      }
      try {
        (s =
          (i = (t = this.el) == null ? void 0 : t.requestPointerLock()) == null
            ? void 0
            : i.catch) == null || s.call(i, () => {});
      } catch {}
    }
  }
  unlock() {
    var e;
    if (this.dragLook) {
      (this.endDrag(!1),
        this.locked &&
          ((this.locked = !1),
          (this.mouseL = !1),
          (this.mouseR = !1),
          (e = this.onLockChange) == null || e.call(this, !1)));
      return;
    }
    document.pointerLockElement === this.el && document.exitPointerLock();
  }
  beginDrag(e) {
    if (e !== 0 && e !== 2) return;
    this.endDrag(!1);
    const t = { button: e, moved: 0, held: !1, timer: null };
    ((t.timer = setTimeout(() => {
      ((t.timer = null),
        !(this.drag !== t || t.moved > 6) &&
          ((t.held = !0),
          e === 0
            ? ((this.mouseL = !0), (this.clickL = !0))
            : ((this.mouseR = !0), (this.clickR = !0))));
    }, 260)),
      (this.drag = t));
  }
  endDrag(e) {
    const t = this.drag;
    t &&
      ((this.drag = null),
      t.timer && clearTimeout(t.timer),
      t.held
        ? t.button === 0
          ? (this.mouseL = !1)
          : (this.mouseR = !1)
        : e &&
          t.moved <= 6 &&
          (t.button === 0 ? (this.clickL = !0) : (this.clickR = !0)));
  }
  unlockForUi() {
    (this.unlock(),
      this.endDrag(!1),
      (this.mdx = 0),
      (this.mdy = 0),
      (this.mouseL = !1),
      (this.mouseR = !1),
      (this.clickL = !1),
      (this.clickR = !1));
  }
  endFrame() {
    (this.pressed.clear(),
      this.virtualPressed.clear(),
      (this.clickL = !1),
      (this.clickR = !1),
      (this.aimTap = !1),
      (this.mdx = 0),
      (this.mdy = 0),
      (this.wheel = 0));
  }
}
