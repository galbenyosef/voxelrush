// assets__index-Dp6GxvJu 174 — style
// Lines 98881-99113 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class DJ {
  constructor() {
    w(this, "wounded", new Map());
    w(this, "root", document.createElement("section"));
    w(this, "title", document.createElement("strong"));
    w(this, "detail", document.createElement("div"));
    w(this, "bar", document.createElement("progress"));
    w(this, "touch", document.createElement("button"));
    w(this, "touchHeld", !1);
    w(this, "heldId", -1);
    w(this, "sendT", 0);
    w(this, "heartbeatT", 0);
    w(this, "intensity", 0);
    w(this, "lastFilter", "");
    w(this, "text", "");
    w(this, "noFilter", !1);
    w(this, "compact", !1);
    ((this.root.id = "revive-hud"),
      (this.root.style.cssText =
        "display:none;position:fixed;z-index:150;left:50%;bottom:24%;transform:translateX(-50%);width:min(380px,88vw);box-sizing:border-box;background:linear-gradient(135deg,#211a1bf2,#111b1cf2);border:1px solid #bd6c64;border-radius:12px;padding:18px;color:#f5e9de;text-align:center;font:14px system-ui;pointer-events:none;box-shadow:0 8px 36px #0007"),
      (this.title.style.cssText =
        "display:block;font-size:21px;letter-spacing:.06em;margin-bottom:8px"),
      (this.detail.style.cssText = "line-height:1.5;white-space:pre-line"),
      (this.bar.max = vf),
      (this.bar.value = 0),
      (this.bar.style.cssText =
        "width:100%;height:12px;accent-color:#88d9b2;margin:12px 0 4px"),
      this.bar.setAttribute(
        "aria-label",
        z.language === "en" ? "Revive progress" : "Прогресс помощи",
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
    const s = e.u16(),
      o = e.u8(),
      a = e.u16() / 1e3,
      r = e.u16(),
      l = e.u16() / 1e3,
      c = new k(e.f32(), e.f32(), e.f32());
    if (
      (o
        ? this.wounded.set(s, {
            id: s,
            left: a,
            helper: r,
            progress: l,
            pos: c,
          })
        : this.wounded.delete(s),
      s === t)
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
  update(e, t, i, s, o, a, r, l, c) {
    const h = z.language === "en",
      d = this.wounded.get(t);
    let u,
      f = OJ;
    if (!d && i.alive && !c) {
      const S = i.eyePos(new k()),
        M = i.lookDir(new k());
      for (const x of this.wounded.values()) {
        const T = x.pos.distanceTo(i.pos);
        if (T > f || x.id === t) continue;
        const A = x.pos
            .clone()
            .add(new k(0, 0.4, 0))
            .sub(S),
          _ = A.length();
        (A.normalize(),
          !(A.dot(M) < 0.55 || o.raycast(S, A, Math.max(0, _ - 0.25))) &&
            ((f = T), (u = x)));
      }
    }
    const p =
      !!u &&
      (u.helper === 65535 || u.helper === t) &&
      (this.touchHeld || s.action("use")) &&
      !c;
    ((this.sendT -= e),
      p && (this.sendT <= 0 || this.heldId !== u.id)
        ? ((this.heldId = u.id), l(this.heldId), (this.sendT = 0.1))
        : !p && this.heldId !== -1 && (l(65535), (this.heldId = -1)));
    const m = d ?? u;
    if (
      ((this.root.style.display = m && !c ? "block" : "none"),
      s.mobile !== this.compact &&
        ((this.compact = s.mobile),
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
      m)
    ) {
      m.left = Math.max(0, m.left - e);
      const S = m.helper !== 65535,
        M = d
          ? h
            ? "CRITICALLY WOUNDED"
            : "ТЯЖЁЛОЕ РАНЕНИЕ"
          : h
            ? "HELP THE WOUNDED"
            : "ПОМОЧЬ РАНЕНОМУ",
        x = z.binds.use.replace("Key", "").replace("Digit", ""),
        T = d
          ? S
            ? h
              ? "You are being revived"
              : "Вам оказывают помощь"
            : h
              ? "You are down. Ask a friend to save you before time runs out."
              : "Вы были поражены. Попросите друга спасти вас, пока не истекло время."
          : S && m.helper !== t
            ? h
              ? "Another player is helping"
              : "Другой игрок уже помогает"
            : s.mobile
              ? h
                ? `Hold the button for ${vf} seconds`
                : `Удерживайте кнопку ${vf} секунды`
              : h
                ? `Hold ${x} for ${vf} seconds`
                : `Удерживайте ${x} ${vf} секунды`,
        A = d
          ? S
            ? h
              ? "Being revived"
              : "Вам помогают"
            : h
              ? "Wait for help"
              : "Ждите помощи"
          : T,
        _ = this.compact
          ? `${A} · ${Math.ceil(m.left)} ${h ? "s" : "с"}`
          : `${T}
${h ? "Time remaining" : "До смерти"}: ${Math.ceil(m.left)} ${h ? "s" : "с"}`;
      (this.text !== M + _ &&
        ((this.title.textContent = M),
        (this.detail.textContent = _),
        (this.text = M + _)),
        (this.bar.value = m.progress),
        (this.bar.style.display = S ? "block" : "none"),
        (this.touch.style.display = s.mobile && !d ? "block" : "none"),
        (this.touch.textContent = h
          ? "Hold to revive"
          : "Удерживать для помощи"));
    } else this.touchHeld = !1;
    const y = NJ(i.hp, i.alive);
    this.intensity += (y - this.intensity) * (1 - Math.exp(-e * 5));
    const g = document.body.classList.contains("vision-night")
        ? "saturate(.32) sepia(1) hue-rotate(66deg) brightness(1.32) contrast(1.16) "
        : document.body.classList.contains("vision-thermal")
          ? "saturate(.72) contrast(1.28) brightness(.82) "
          : "",
      b =
        this.intensity > 0.015 && !this.noFilter
          ? `${g}grayscale(${(Math.round(this.intensity * 50) / 50).toFixed(2)})`
          : this.noFilter
            ? g.trim()
            : "";
    return (
      b !== this.lastFilter && ((a.style.filter = b), (this.lastFilter = b)),
      (this.heartbeatT -= e),
      y > 0 &&
        this.heartbeatT <= 0 &&
        (r.heartbeat(y), (this.heartbeatT = 1.05 - y * 0.62)),
      y === 0 && (this.heartbeatT = 0),
      p
    );
  }
}
const BJ = 1.72,
  bd = 2e4,
  Cl = 65536;
