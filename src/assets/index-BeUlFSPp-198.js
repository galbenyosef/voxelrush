// index-BeUlFSPp 198 — style
// Lines 106034-106258 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Joe {
  wounded = new Map();
  root = document.createElement("section");
  title = document.createElement("strong");
  detail = document.createElement("div");
  bar = document.createElement("progress");
  touch = document.createElement("button");
  touchHeld = !1;
  heldId = -1;
  sendT = 0;
  heartbeatT = 0;
  intensity = 0;
  lastFilter = "";
  text = "";
  noFilter = !1;
  compact = !1;
  constructor() {
    ((this.root.id = "revive-hud"),
      (this.root.style.cssText =
        "display:none;position:fixed;z-index:150;left:50%;bottom:24%;transform:translateX(-50%);width:min(380px,88vw);box-sizing:border-box;background:linear-gradient(135deg,#211a1bf2,#111b1cf2);border:1px solid #bd6c64;border-radius:12px;padding:18px;color:#f5e9de;text-align:center;font:14px system-ui;pointer-events:none;box-shadow:0 8px 36px #0007"),
      (this.title.style.cssText =
        "display:block;font-size:21px;letter-spacing:.06em;margin-bottom:8px"),
      (this.detail.style.cssText = "line-height:1.5;white-space:pre-line"),
      (this.bar.max = jp),
      (this.bar.value = 0),
      (this.bar.style.cssText =
        "width:100%;height:12px;accent-color:#88d9b2;margin:12px 0 4px"),
      this.bar.setAttribute(
        "aria-label",
        I("Revive progress", "Прогресс помощи"),
      ),
      (this.touch.type = "button"),
      (this.touch.id = "revive-touch"),
      (this.touch.style.cssText =
        "pointer-events:auto;touch-action:none;user-select:none;min-height:52px;margin-top:12px;width:100%;border:1px solid #83bca1;border-radius:8px;background:#284e41;color:#effff5;font:600 16px system-ui"),
      (this.touch.onpointerdown = (t) => {
        (t.preventDefault(),
          t.stopPropagation(),
          this.touch.setPointerCapture(t.pointerId),
          (this.touchHeld = !0));
      }));
    const e = () => {
      this.touchHeld = !1;
    };
    ((this.touch.onpointerup = e),
      (this.touch.onpointercancel = e),
      (this.touch.onlostpointercapture = e),
      window.addEventListener("blur", e),
      this.root.append(this.title, this.detail, this.bar, this.touch),
      document.body.append(this.root));
  }
  receive(e, t, i) {
    const n = e.u16(),
      o = e.u8(),
      a = e.u16() / 1e3,
      r = e.u16(),
      l = e.u16() / 1e3,
      c = new k(e.f32(), e.f32(), e.f32());
    if (
      (o
        ? this.wounded.set(n, {
            id: n,
            left: a,
            helper: r,
            progress: l,
            pos: c,
          })
        : this.wounded.delete(n),
      n === t)
    ) {
      const h = !!o && !i.downed,
        d = !o && i.downed;
      ((i.downed = !!o),
        (i.prone = !!o),
        (h || d) && i.vel.set(0, 0, 0),
        o &&
          ((i.flying = !1),
          (i.parachute = !1),
          (i.crouching = !1),
          (h || i.pos.distanceToSquared(c) > 0.35 ** 2) && i.pos.copy(c)));
    }
  }
  clear() {
    ((this.intensity = 0),
      (this.heartbeatT = 0),
      (this.lastFilter = ""),
      this.wounded.clear(),
      (this.root.style.display = "none"),
      (this.touchHeld = !1),
      (this.heldId = -1));
  }
  update(e, t, i, n, o, a, r, l, c) {
    wi();
    const h = this.wounded.get(t);
    let d,
      u = Zoe;
    if (!h && i.alive && !c) {
      const b = i.eyePos(new k()),
        S = i.lookDir(new k());
      for (const M of this.wounded.values()) {
        const E = M.pos.distanceTo(i.pos);
        if (E > u || M.id === t) continue;
        const A = M.pos
            .clone()
            .add(new k(0, 0.4, 0))
            .sub(b),
          T = A.length();
        (A.normalize(),
          !(A.dot(S) < 0.55 || o.raycast(b, A, Math.max(0, T - 0.25))) &&
            ((u = E), (d = M)));
      }
    }
    const f =
      !!d &&
      (d.helper === 65535 || d.helper === t) &&
      (this.touchHeld || n.action("use")) &&
      !c;
    ((this.sendT -= e),
      f && (this.sendT <= 0 || this.heldId !== d.id)
        ? ((this.heldId = d.id), l(this.heldId), (this.sendT = 0.1))
        : !f && this.heldId !== -1 && (l(65535), (this.heldId = -1)));
    const p = h ?? d;
    if (
      ((this.root.style.display = p && !c ? "block" : "none"),
      n.mobile !== this.compact &&
        ((this.compact = n.mobile),
        Object.assign(
          this.root.style,
          this.compact
            ? {
                bottom: "calc(var(--safe-bottom, 0px) + 96px)",
                top: "auto",
                width: "auto",
                maxWidth: "78vw",
                padding: "7px 14px",
                borderRadius: "14px",
                fontSize: "12px",
              }
            : {
                bottom: "24%",
                top: "",
                width: "min(380px,88vw)",
                maxWidth: "",
                padding: "18px",
                borderRadius: "12px",
                fontSize: "14px",
              },
        ),
        (this.title.style.fontSize = this.compact ? "13px" : "21px"),
        (this.title.style.marginBottom = this.compact ? "1px" : "8px"),
        (this.detail.style.lineHeight = this.compact ? "1.25" : "1.5")),
      p)
    ) {
      p.left = Math.max(0, p.left - e);
      const b = p.helper !== 65535,
        S = h
          ? I("CRITICALLY WOUNDED", "ТЯЖЁЛОЕ РАНЕНИЕ")
          : I("HELP THE WOUNDED", "ПОМОЧЬ РАНЕНОМУ"),
        M = Y.binds.use.replace("Key", "").replace("Digit", ""),
        E = h
          ? b
            ? I("You are being revived", "Вам оказывают помощь")
            : I(
                "You are down. Ask a friend to save you before time runs out.",
                "Вы были поражены. Попросите друга спасти вас, пока не истекло время.",
              )
          : b && p.helper !== t
            ? I("Another player is helping", "Другой игрок уже помогает")
            : n.mobile
              ? I(
                  `Hold the button for ${jp} seconds`,
                  `Удерживайте кнопку ${jp} секунды`,
                )
              : I(
                  `Hold ${M} for ${jp} seconds`,
                  `Удерживайте ${M} ${jp} секунды`,
                ),
        A = h
          ? b
            ? I("Being revived", "Вам помогают")
            : I("Wait for help", "Ждите помощи")
          : E,
        T = this.compact
          ? `${A} · ${Math.ceil(p.left)} ${I("s", "с")}`
          : `${E}
${I("Time remaining", "До смерти")}: ${Math.ceil(p.left)} ${I("s", "с")}`;
      (this.text !== S + T &&
        ((this.title.textContent = S),
        (this.detail.textContent = T),
        (this.text = S + T)),
        (this.bar.value = p.progress),
        (this.bar.style.display = b ? "block" : "none"),
        (this.touch.style.display = n.mobile && !h ? "block" : "none"),
        (this.touch.textContent = I(
          "Hold to revive",
          "Удерживать для помощи",
        )));
    } else this.touchHeld = !1;
    const m = Qoe(i.hp, i.alive);
    this.intensity += (m - this.intensity) * (1 - Math.exp(-e * 5));
    const g = document.body.classList.contains("vision-night")
        ? "saturate(.32) sepia(1) hue-rotate(66deg) brightness(1.32) contrast(1.16) "
        : document.body.classList.contains("vision-thermal")
          ? "saturate(.72) contrast(1.28) brightness(.82) "
          : "",
      y =
        this.intensity > 0.015 && !this.noFilter
          ? `${g}grayscale(${(Math.round(this.intensity * 50) / 50).toFixed(2)})`
          : this.noFilter
            ? g.trim()
            : "";
    return (
      y !== this.lastFilter && ((a.style.filter = y), (this.lastFilter = y)),
      (this.heartbeatT -= e),
      m > 0 &&
        this.heartbeatT <= 0 &&
        (r.heartbeat(m), (this.heartbeatT = 1.05 - m * 0.62)),
      m === 0 && (this.heartbeatT = 0),
      f
    );
  }
}
const eae = 1.72,
  Iu = 2e4,
  yc = 65536;
