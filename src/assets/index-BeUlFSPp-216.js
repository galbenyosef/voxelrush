// index-BeUlFSPp 216 — addeventlistener
// Lines 113000-113502 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class hre {
  keys = new Set();
  pressed = new Set();
  mdx = 0;
  mdy = 0;
  wheel = 0;
  aimTap = !1;
  mouseL = !1;
  mouseR = !1;
  clickL = !1;
  clickR = !1;
  locked = !1;
  dragLook = !1;
  drag = null;
  uiOpen = !1;
  mobile = jr();
  chuteHeld = !1;
  lookMineEnabled = !1;
  lookMineHold = !1;
  virtual = new Set();
  virtualPressed = new Set();
  onLockChange = null;
  onMobileSettings = null;
  onMobileTab = null;
  onMobileCargo = null;
  onMobileToolMode = null;
  onLookTap = null;
  el = null;
  bind(e, t = !1) {
    ((this.el = e),
      (this.dragLook = t && !this.mobile),
      this.dragLook && document.body.classList.add("drag-look"),
      window.addEventListener("keydown", (n) => {
        if (!this.uiOpen) {
          if (this.dragLook && this.locked && n.code === "Escape") {
            this.unlock();
            return;
          }
          ((n.code === "Tab" ||
            n.code === "Space" ||
            n.code === "AltLeft" ||
            n.code === "AltRight") &&
            n.preventDefault(),
            n.repeat || this.pressed.add(n.code),
            this.keys.add(n.code));
        }
      }),
      window.addEventListener("keyup", (n) => this.keys.delete(n.code)),
      window.addEventListener("blur", () => this.keys.clear()),
      e.addEventListener("mousedown", (n) => {
        if (
          !(this.uiOpen || !this.locked) &&
          !(n.button === 2 && this.onLockedRightClick?.())
        ) {
          if (this.dragLook) {
            this.beginDrag(n.button);
            return;
          }
          (n.button === 0 && ((this.mouseL = !0), (this.clickL = !0)),
            n.button === 2 && ((this.mouseR = !0), (this.clickR = !0)));
        }
      }),
      window.addEventListener("mouseup", (n) => {
        if (this.dragLook && this.drag?.button === n.button) {
          this.endDrag(!0);
          return;
        }
        (n.button === 0 && (this.mouseL = !1),
          n.button === 2 && (this.mouseR = !1));
      }),
      window.addEventListener("contextmenu", (n) => n.preventDefault()));
    const i = (n) =>
      n instanceof HTMLElement &&
      (n instanceof HTMLInputElement ||
        n instanceof HTMLTextAreaElement ||
        n instanceof HTMLSelectElement ||
        n.isContentEditable);
    (window.addEventListener(
      "touchstart",
      (n) => {
        const o = document.activeElement;
        i(o) &&
          !i(n.target) &&
          !o
            .closest(".panel, dialog, #chatbox, #mobilechatpopup")
            ?.contains(n.target) &&
          o.blur();
      },
      { capture: !0, passive: !0 },
    ),
      document.addEventListener("selectstart", (n) => {
        i(n.target) || n.preventDefault();
      }),
      window.addEventListener("mousemove", (n) => {
        if (!(!this.locked || this.uiOpen)) {
          if (this.dragLook) {
            if (!this.drag) return;
            ((this.drag.moved += Math.abs(n.movementX) + Math.abs(n.movementY)),
              !this.drag.held &&
                this.drag.moved > 6 &&
                this.drag.timer &&
                (clearTimeout(this.drag.timer), (this.drag.timer = null)));
          }
          ((this.mdx += n.movementX), (this.mdy += n.movementY));
        }
      }),
      window.addEventListener(
        "wheel",
        (n) => {
          this.locked && !this.uiOpen && (this.wheel += Math.sign(n.deltaY));
        },
        { passive: !0 },
      ),
      document.addEventListener("pointerlockchange", () => {
        this.dragLook ||
          this.mobile ||
          ((this.locked = document.pointerLockElement === this.el),
          this.locked || ((this.mouseL = !1), (this.mouseR = !1)),
          this.onLockChange?.(this.locked));
      }),
      this.mobile && this.bindMobileControls(),
      this.mobile &&
        (document.addEventListener("gesturestart", (n) => n.preventDefault(), {
          passive: !1,
        }),
        document.addEventListener(
          "touchmove",
          (n) => {
            n.touches.length > 1 && n.preventDefault();
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
    const n = document.getElementById("basic-training");
    e && n && e.appendChild(n);
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
    const m = (R, _) => {
      const C = Math.hypot(R, _),
        P = 42,
        O = C > P ? P / C : 1;
      ((R *= O),
        (_ *= O),
        a?.setAttribute("style", `transform:translate(${R}px,${_}px)`),
        this.setVirtual("left", R < -12),
        this.setVirtual("right", R > 12),
        this.setVirtual("forward", _ < -12),
        this.setVirtual("back", _ > 12));
    };
    (o?.addEventListener("pointerdown", (R) => {
      if ((o.setPointerCapture(R.pointerId), Y.mobileLayoutEdit)) {
        p = R.pointerId;
        return;
      }
      ((l = R.pointerId), (h = R.clientX), (d = R.clientY), m(0, 0));
    }),
      o?.addEventListener("pointermove", (R) => {
        if (R.pointerId === p) {
          const _ = Math.min(92, Math.max(8, (R.clientX / innerWidth) * 100)),
            C = Math.min(90, Math.max(10, (R.clientY / innerHeight) * 100));
          ((o.style.left = `${_}%`),
            (o.style.top = `${C}%`),
            (o.style.bottom = "auto"));
          const P = f1(),
            O = P["mobile-stick-zone"]?.s;
          P["mobile-stick-zone"] =
            O !== void 0 ? { x: _, y: C, s: O } : { x: _, y: C };
        } else R.pointerId === l && m(R.clientX - h, R.clientY - d);
      }));
    const g = (R) => {
      if (R.pointerId === p) {
        ((p = -1), Ji());
        return;
      }
      R.pointerId === l && ((l = -1), a?.setAttribute("style", ""), m(0, 0));
    };
    (o?.addEventListener("pointerup", g),
      o?.addEventListener("pointercancel", g));
    let y = 0,
      b = 0,
      S = 0,
      M = 0,
      E = null;
    (r?.addEventListener("pointerdown", (R) => {
      ((c = R.pointerId),
        (u = R.clientX),
        (f = R.clientY),
        r.setPointerCapture(R.pointerId),
        (y = performance.now()),
        (b = R.clientX),
        (S = R.clientY),
        (M = 0));
      const _ = R.pointerId;
      (E !== null && clearTimeout(E),
        (E = setTimeout(() => {
          ((E = null),
            this.lookMineEnabled &&
              c === _ &&
              M < 12 &&
              ((this.lookMineHold = !0),
              (this.mouseL = !0),
              (this.clickL = !0)));
        }, 300)));
    }),
      r?.addEventListener("pointermove", (R) => {
        R.pointerId === c &&
          ((this.mdx += R.clientX - u),
          (this.mdy += R.clientY - f),
          (u = R.clientX),
          (f = R.clientY),
          (M = Math.max(M, Math.hypot(R.clientX - b, R.clientY - S))),
          !this.lookMineHold &&
            M >= 12 &&
            E !== null &&
            (clearTimeout(E), (E = null)));
      }));
    const A = (R) => {
      R.pointerId === c &&
        ((c = -1),
        E !== null && (clearTimeout(E), (E = null)),
        this.lookMineHold
          ? ((this.lookMineHold = !1), (this.mouseL = !1))
          : R.type === "pointerup" &&
            performance.now() - y < 300 &&
            M < 12 &&
            this.onLookTap?.());
    };
    (r?.addEventListener("pointerup", A),
      r?.addEventListener("pointercancel", A));
    const T = (R, _) => {
        for (const [C, P, O] of [
          ["minus", "−", -0.1],
          ["plus", "+", 0.1],
        ]) {
          const B = document.createElement("div");
          ((B.className = `btn-scale-badge ${C}`),
            (B.textContent = P),
            B.addEventListener("pointerdown", (H) => {
              (H.stopPropagation(), H.preventDefault(), _(O));
            }),
            R.appendChild(B));
        }
      },
      x = (R) => Math.max(0.75, Math.min(1.6, Math.round(R * 100) / 100));
    (o &&
      T(o, (R) => {
        const _ = f1(),
          C = _["mobile-stick-zone"],
          P = C?.x ?? (o.offsetLeft / innerWidth) * 100,
          O = C?.y ?? (o.offsetTop / innerHeight) * 100,
          B = x((C?.s ?? 1) + R);
        ((_["mobile-stick-zone"] = { x: P, y: O, s: B }),
          (o.style.left = `${P}%`),
          (o.style.top = `${O}%`),
          (o.style.bottom = "auto"),
          o.style.setProperty("--btn-scale", String(B)),
          Ji());
      }),
      document.querySelectorAll("[data-mobile-action]").forEach((R) => {
        const _ = R.dataset.mobileAction;
        let C = null;
        const P = (H) => {
            H.preventDefault();
            try {
              R.setPointerCapture(H.pointerId);
            } catch {}
            if (Y.mobileLayoutEdit) {
              C = { id: H.pointerId, moved: !1 };
              return;
            }
            if (!(_ === "settings" || _ === "tab" || _ === "shop")) {
              if (_ === "cargo") {
                this.onMobileCargo?.();
                return;
              }
              if (_ === "toolmode") {
                this.onMobileToolMode?.();
                return;
              }
              if (R.dataset.mobileToggle === "true") {
                const U =
                  _ !== "aim" &&
                  _ !== "chute" &&
                  _ !== "fire" &&
                  _ !== "rocket" &&
                  _ !== "bomb"
                    ? !this.virtual.has(_)
                    : !R.classList.contains("active");
                (R.classList.toggle("active", U),
                  _ === "aim"
                    ? ((this.mouseR = U),
                      U && (this.clickR = !0),
                      (this.aimTap = !0))
                    : _ === "chute"
                      ? (this.chuteHeld = U)
                      : this.setVirtual(_, U));
                return;
              }
              _ === "fire"
                ? ((this.mouseL = !0), (this.clickL = !0))
                : _ === "aim"
                  ? ((this.mouseR = !0), (this.clickR = !0), (this.aimTap = !0))
                  : _ === "rocket"
                    ? ((this.mouseR = !0), (this.clickR = !0))
                    : _ === "bomb"
                      ? this.setVirtual("jump", !0)
                      : _ === "use"
                        ? this.setVirtual(_, !0)
                        : _ !== "chute" && this.setVirtual(_, !0);
            }
          },
          O = (H) => {
            if (!C || H.pointerId !== C.id) return;
            C.moved = !0;
            const D = R.id === "minimap",
              U = Math.min(
                D ? 92 : 96,
                Math.max(D ? 8 : 4, (H.clientX / innerWidth) * 100),
              ),
              W = Math.min(
                D ? 88 : 94,
                Math.max(D ? 12 : 6, (H.clientY / innerHeight) * 100),
              );
            ((R.style.left = `${U}%`),
              (R.style.top = `${W}%`),
              D &&
                ((R.style.right = "auto"),
                (R.style.transform =
                  "translate(-50%, -50%) scale(var(--btn-scale, 1))")));
            const J = f1(),
              j = J[R.id]?.s;
            J[R.id] = j !== void 0 ? { x: U, y: W, s: j } : { x: U, y: W };
          },
          B = () => {
            if (C) {
              ((C = null), Ji());
              return;
            }
            R.dataset.mobileToggle !== "true" &&
              (_ === "fire"
                ? (this.mouseL = !1)
                : _ === "aim"
                  ? (this.mouseR = !1)
                  : _ === "rocket"
                    ? (this.mouseR = !1)
                    : _ === "bomb"
                      ? this.setVirtual("jump", !1)
                      : _ === "use"
                        ? this.setVirtual(_, !1)
                        : _ !== "settings" &&
                          _ !== "tab" &&
                          _ !== "cargo" &&
                          _ !== "chute" &&
                          _ !== "toolmode" &&
                          this.setVirtual(_, !1));
          };
        (R.addEventListener("pointerdown", P),
          R.addEventListener("pointermove", O),
          R.addEventListener("pointerup", B),
          R.addEventListener("pointercancel", B),
          (_ === "settings" || _ === "tab" || _ === "shop") &&
            R.addEventListener("click", (H) => {
              (H.preventDefault(),
                !Y.mobileLayoutEdit &&
                  (_ === "settings"
                    ? this.onMobileSettings?.()
                    : _ === "tab"
                      ? this.onMobileTab?.()
                      : (this.setVirtual("shop", !0),
                        this.setVirtual("shop", !1))));
            }),
          T(R, (H) => {
            const D = f1(),
              U = D[R.id],
              W = R.getBoundingClientRect(),
              J = U?.x ?? ((W.left + W.width / 2) / innerWidth) * 100,
              j = U?.y ?? ((W.top + W.height / 2) / innerHeight) * 100,
              ne = x((U?.s ?? 1) + H);
            ((D[R.id] = { x: J, y: j, s: ne }),
              R.style.setProperty("--btn-scale", String(ne)),
              Ji());
          }));
      }));
  }
  clearMobileAim() {
    ((this.mouseR = !1),
      (this.clickR = !1),
      document.getElementById("mobaim")?.classList.remove("active"));
  }
  releaseMobileHold(e, t) {
    (this.setVirtual(e, !1),
      document.getElementById(t)?.classList.remove("active"));
  }
  setLookMine(e) {
    ((this.lookMineEnabled = e),
      !e &&
        this.lookMineHold &&
        ((this.lookMineHold = !1), (this.mouseL = !1)));
  }
  clearChute() {
    ((this.chuteHeld = !1),
      document.getElementById("mobchute")?.classList.remove("active"));
  }
  setVirtual(e, t) {
    (t && !this.virtual.has(e) && this.virtualPressed.add(e),
      t ? this.virtual.add(e) : this.virtual.delete(e));
  }
  action(e) {
    const t = Y.binds[e];
    return (!!t && this.keys.has(t)) || this.virtual.has(e);
  }
  actionPressed(e) {
    const t = Y.binds[e];
    return (!!t && this.pressed.has(t)) || this.virtualPressed.has(e);
  }
  onLockedRightClick;
  lockRequestedAt = -1 / 0;
  lock() {
    if (!this.mobile) {
      if (((this.lockRequestedAt = performance.now()), this.dragLook)) {
        this.locked || ((this.locked = !0), this.onLockChange?.(!0));
        return;
      }
      try {
        this.el?.requestPointerLock()?.catch?.(() => {});
      } catch {}
    }
  }
  unlock() {
    if (this.dragLook) {
      (this.endDrag(!1),
        this.locked &&
          ((this.locked = !1),
          (this.mouseL = !1),
          (this.mouseR = !1),
          this.onLockChange?.(!1)));
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
