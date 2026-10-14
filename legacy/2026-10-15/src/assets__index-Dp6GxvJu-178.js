// assets__index-Dp6GxvJu 178 — preferences
// Lines 100334-101472 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class VJ {
  constructor() {
    w(this, "preferences", GJ());
    w(this, "onActivity", () => {});
    w(this, "localLevel", 0);
    w(this, "lastActivity", 0);
    w(this, "lastRoster", 0);
    w(this, "expanded", !1);
    w(this, "roster", document.createElement("button"));
    w(this, "net");
    w(this, "available", !1);
    w(this, "active", !1);
    w(this, "micActive", !1);
    w(this, "generation", 0);
    w(this, "micAttempt", 0);
    w(this, "pending", !1);
    w(this, "muted", !1);
    w(this, "held", !1);
    w(this, "keyboardHeld", !1);
    w(this, "talkHeld", !1);
    w(this, "speakingUntil", 0);
    w(this, "context");
    w(this, "raw");
    w(this, "output");
    w(this, "input");
    w(this, "analyser");
    w(this, "gate");
    w(this, "effectGraph");
    w(this, "peers", new Map());
    w(this, "iceServers", e2);
    w(this, "iceServersExpiresAt", 0);
    w(this, "iceServersPromise");
    w(this, "signalingJoined", !1);
    w(this, "timer", 0);
    w(this, "queue", Promise.resolve());
    w(this, "samples", new Float32Array(512));
    w(this, "range", 0);
    w(this, "positionOf", () => null);
    w(this, "localPosition", () => null);
    w(this, "localYaw", () => 0);
    w(this, "rangeNote", document.createElement("p"));
    w(this, "panel", document.createElement("div"));
    w(this, "hud", document.createElement("aside"));
    w(this, "status", document.createElement("p"));
    w(this, "join", document.createElement("button"));
    w(this, "mute", document.createElement("button"));
    w(this, "talk", document.createElement("button"));
    w(this, "speakers", document.createElement("div"));
    w(this, "meter", document.createElement("meter"));
    w(this, "help", document.createElement("p"));
    var r, l;
    this.panel.id = "voice-settings";
    const e = document.createElement("h3");
    ((e.textContent = ni("Глобальный голосовой чат", "Global voice chat")),
      this.panel.append(e));
    const t = document.createElement("div");
    ((t.className = "voice-channel-controls"),
      (t.hidden = !0),
      t.setAttribute("role", "group"));
    for (const c of ["global", "squad"]) {
      const h = document.createElement("button");
      ((h.type = "button"),
        (h.className = "voice-channel-button"),
        (h.dataset.voiceChannel = c),
        (h.onclick = () => this.setChannel(c)),
        t.append(h));
    }
    ((t.id = "inventory-voice-channels"),
      (r = document.getElementById("invmain")) == null ||
        r.insertBefore(t, document.getElementById("invgridscroll")),
      (this.join.className = "btn small"),
      (this.mute.className = "btn small secondary"),
      (this.join.id = "voice-join"),
      (this.join.type = "button"),
      (this.join.onclick = () =>
        this.micActive || this.pending
          ? this.stopMicrophone()
          : void this.start()),
      (this.mute.id = "voice-mute"),
      (this.mute.type = "button"),
      (this.mute.onclick = () => {
        ((this.muted = !this.muted), this.release(), this.render());
      }),
      this.panel.append(this.join, this.mute));
    const i = (c, h, d, u, f) => {
      const p = document.createElement("label");
      p.textContent = h;
      const m = document.createElement("select");
      m.id = c;
      for (const [y, g] of d) m.add(new Option(g, y));
      ((m.value = u),
        (m.onchange = () => {
          (f(m.value), this.save(), this.release(), this.render());
        }),
        p.append(m),
        this.panel.append(p));
    };
    (i(
      "voice-channel",
      ni("Канал связи", "Voice channel"),
      [
        ["global", ni("Общий", "Global")],
        ["squad", ni("Отряд", "Squad")],
      ],
      this.preferences.channel,
      (c) => this.setChannel(c),
    ),
      i(
        "voice-mode",
        ni("Передача голоса", "Transmit mode"),
        [
          ["ptt", ni("Удерживать кнопку", "Push to talk")],
          ["vad", ni("Активация голосом", "Voice activation")],
        ],
        this.preferences.mode,
        (c) => (this.preferences.mode = c),
      ),
      i(
        "voice-effect",
        "Voice changer",
        G4.map(({ id: c, ru: h, en: d }) => [c, zI() ? d : h]),
        this.preferences.effect,
        (c) => {
          ((this.preferences.effect = c), this.buildEffects());
        },
      ));
    const s = (c, h, d, u, f, p, m) => {
      const y = document.createElement("label");
      y.textContent = h;
      const g = document.createElement("input");
      ((g.type = "range"),
        (g.id = c),
        (g.min = String(d)),
        (g.max = String(u)),
        (g.step = String(f)),
        (g.value = String(p)),
        (g.oninput = () => {
          (m(Number(g.value)), this.save());
        }),
        y.append(g),
        this.panel.append(y));
    };
    (s(
      "voice-threshold",
      ni(
        "Порог активации (выше — меньше фонового шума)",
        "Activation threshold (higher filters more noise)",
      ),
      0.005,
      0.15,
      0.005,
      this.preferences.threshold,
      (c) => (this.preferences.threshold = c),
    ),
      s(
        "voice-volume",
        ni("Громкость собеседников", "Voice volume"),
        0,
        1,
        0.01,
        this.preferences.volume,
        (c) => {
          ((this.preferences.volume = c), this.updateVolume());
        },
      ),
      (this.meter.min = 0),
      (this.meter.max = 0.15),
      this.meter.setAttribute(
        "aria-label",
        ni("Уровень микрофона", "Microphone level"),
      ),
      (this.status.id = "voice-status"),
      this.status.setAttribute("role", "status"),
      (this.rangeNote.id = "voice-range"),
      this.panel.append(this.meter, this.help, this.rangeNote, this.status),
      (l = document.querySelector('[data-settings-category="audio"]')) ==
        null || l.append(this.panel),
      (this.hud.id = "voice-hud"),
      (this.hud.hidden = !0),
      this.hud.setAttribute(
        "aria-label",
        ni("Участники голосового чата", "Voice participants"),
      ),
      (this.talk.id = "voice-talk"),
      (this.talk.type = "button"),
      (this.talk.onpointerdown = (c) => {
        this.preferences.mode === "ptt" &&
          (c.preventDefault(),
          c.stopPropagation(),
          this.talk.setPointerCapture(c.pointerId),
          (this.talkHeld = !0),
          (this.held = !0),
          this.micActive ? this.resume() : this.start());
      }),
      (this.talk.onpointerup =
        this.talk.onpointercancel =
        this.talk.onlostpointercapture =
          () => this.release()),
      (this.talk.onclick = () => {
        if (this.preferences.mode === "vad") {
          if (!this.micActive) {
            this.start();
            return;
          }
          ((this.muted = !this.muted), this.release(), this.render());
        }
        this.resume();
      }),
      (this.roster.id = "voice-roster"),
      (this.roster.type = "button"),
      this.roster.setAttribute("aria-expanded", "false"),
      (this.roster.onclick = () => {
        ((this.expanded = !this.expanded),
          this.hud.classList.toggle("expanded", this.expanded),
          this.roster.setAttribute("aria-expanded", String(this.expanded)));
      }),
      this.hud.append(this.talk, this.roster, this.speakers),
      document.body.append(this.hud));
    const o = () => {
      const c = document.documentElement;
      if (this.hud.hidden || document.body.classList.contains("mobile")) {
        c.style.removeProperty("--ops-top");
        return;
      }
      const h = this.hud.getBoundingClientRect().bottom;
      c.style.setProperty("--ops-top", `${Math.max(176, Math.ceil(h + 10))}px`);
    };
    ("ResizeObserver" in window && new ResizeObserver(o).observe(this.hud),
      new MutationObserver(o).observe(this.hud, {
        attributes: !0,
        attributeFilter: ["hidden"],
        childList: !0,
        subtree: !0,
      }),
      window.addEventListener("resize", o),
      this.hud.addEventListener("contextmenu", (c) => c.preventDefault()));
    for (const c of [
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
    ])
      this.hud.addEventListener(c, (h) => h.stopPropagation());
    (window.addEventListener("keydown", (c) => {
      var h, d;
      if (
        !(c.code !== z.binds.voice || c.repeat || !this.active) &&
        !(
          ((h = c.target) != null &&
            h.closest('input,textarea,select,[contenteditable="true"]')) ||
          !(
            (d = document.querySelector("#settings")) != null &&
            d.classList.contains("hidden")
          )
        )
      ) {
        if (
          (c.preventDefault(),
          (this.keyboardHeld = !0),
          (this.held = !0),
          !this.micActive)
        ) {
          this.start();
          return;
        }
        this.preferences.mode === "ptt" && this.resume();
      }
    }),
      window.addEventListener("keyup", (c) => {
        c.code === z.binds.voice && ((this.keyboardHeld = !1), this.release());
      }),
      window.addEventListener("blur", () => {
        ((this.keyboardHeld = !1), this.release());
      }),
      document.addEventListener("visibilitychange", () => {
        ((this.keyboardHeld = !1),
          this.release(),
          document.hidden || this.resume());
      }),
      window.addEventListener("pagehide", () => this.stop()),
      window.addEventListener(
        "pointerdown",
        () => {
          this.active && this.resume();
        },
        { capture: !0 },
      ));
    const a = document.querySelector("#settings");
    (a &&
      new MutationObserver(() => {
        (this.release(), this.render());
      }).observe(a, { attributes: !0, attributeFilter: ["class"] }),
      this.render(),
      window.addEventListener("squad-state-changed", () =>
        this.setChannel(e0() ? this.preferences.channel : "global"),
      ),
      Vo(() => this.render()),
      this.setChannel(e0() ? this.preferences.channel : "global"));
  }
  attach(e) {
    ((this.net = e),
      e.on(ue.S_VOICE, (t) => {
        const i = JSON.parse(t.str()),
          s = this.generation;
        this.queue = this.queue
          .then(async () => {
            s === this.generation && this.active && (await this.signal(i, s));
          })
          .catch(() => {
            s === this.generation &&
              this.message(
                ni(
                  "Не удалось подключить голос. Переподключитесь к чату.",
                  "Voice connection failed. Rejoin voice chat.",
                ),
              );
          });
      }));
  }
  connected() {
    var e;
    ((this.available = !((e = this.net) != null && e.isLocal)),
      this.available ? this.joinVoice() : this.render());
  }
  disconnected() {
    (this.stop(), (this.available = !1), this.render());
  }
  save() {
    try {
      localStorage.setItem("fc-voice", JSON.stringify(this.preferences));
    } catch {}
  }
  setRange(e) {
    const t = Number.isFinite(e) && e > 0 ? Math.round(e) : 0;
    t !== this.range && ((this.range = t), this.spatialize(!0), this.render());
  }
  rangeLimited() {
    return this.range > 0 && this.preferences.channel === "global";
  }
  rangeText() {
    return this.range
      ? this.preferences.channel === "squad"
        ? ni(
            "Голос отряда слышно на любом расстоянии.",
            "Squad voice has no distance limit.",
          )
        : ni(
            `Общий голос слышно в радиусе ${this.range} блоков от говорящего (настройка сервера). Отряд слышит друг друга везде.`,
            `Global voice carries ${this.range} blocks from the speaker (server setting). Squads hear each other anywhere.`,
          )
      : ni(
          "Общий голос слышно по всему миру.",
          "Global voice carries across the whole world.",
        );
  }
  message(e) {
    this.status.textContent = e;
  }
  setChannel(e) {
    if (
      (e === "squad" && !e0() && (e = "global"), e !== this.preferences.channel)
    ) {
      ((this.preferences.channel = e),
        this.save(),
        this.release(),
        this.pending && this.stopMicrophone(),
        ++this.generation,
        (this.queue = Promise.resolve()));
      for (const t of [...this.peers.keys()]) this.removePeer(t);
      this.active &&
        (this.send({ type: "leave" }),
        (this.signalingJoined = !0),
        this.send({ type: "join", channel: e }));
    }
    this.render();
  }
  render() {
    var r;
    const e = e0(),
      t = document.getElementById("inventory-voice-channels");
    t &&
      ((t.hidden = !e),
      t.setAttribute(
        "aria-label",
        ni("Канал голосового чата", "Voice chat channel"),
      ));
    for (const l of document.querySelectorAll("[data-voice-channel]")) {
      const c = l.dataset.voiceChannel === "squad";
      l.innerHTML = Nn("mic");
      const h = document.createElement("span");
      ((h.textContent = c
        ? ni("Голос · отряд", "Voice · squad")
        : ni("Голос · общий", "Voice · global")),
        l.append(h),
        l.setAttribute(
          "aria-pressed",
          String(l.dataset.voiceChannel === this.preferences.channel),
        ),
        l.classList.toggle(
          "primary",
          l.dataset.voiceChannel === this.preferences.channel,
        ));
    }
    const i = document.getElementById("voice-channel");
    i &&
      (i.parentElement && (i.parentElement.hidden = !e),
      (i.disabled = !e),
      (i.value = this.preferences.channel),
      (i.options[0].text = ni("Общий", "Global")),
      (i.options[1].text = ni("Отряд", "Squad")),
      (r = i.parentElement) != null &&
        r.firstChild &&
        (i.parentElement.firstChild.textContent = ni(
          "Канал связи",
          "Voice channel",
        )));
    const s = this.panel.querySelector("h3");
    (s &&
      (s.textContent =
        this.preferences.channel === "squad"
          ? ni("Голосовой чат отряда", "Squad voice chat")
          : ni("Общий голосовой чат", "Global voice chat")),
      (this.rangeNote.textContent = this.rangeText()),
      (this.rangeNote.hidden = !this.available),
      (this.join.textContent = this.pending
        ? ni("Отменить подключение", "Cancel connection")
        : this.micActive
          ? ni("Отключить микрофон", "Disconnect microphone")
          : ni("Подключить микрофон", "Connect microphone")),
      (this.join.disabled = !this.available),
      (this.mute.hidden = !this.micActive),
      (this.mute.textContent = this.muted
        ? ni("Включить микрофон", "Unmute microphone")
        : ni("Выключить микрофон", "Mute microphone")),
      this.mute.setAttribute("aria-pressed", String(this.muted)));
    const o = lr();
    ((this.help.textContent = o
      ? ni(
          "Удерживайте кнопку микрофона, чтобы говорить. Нажмите имя, чтобы заглушить игрока.",
          "Hold the microphone button to talk. Tap a player to mute them.",
        )
      : ni(
          `Удерживайте ${gs(z.binds.voice, z.language)}, чтобы говорить. Нажмите имя, чтобы заглушить игрока.`,
          `Hold ${gs(z.binds.voice, z.language)} to talk. Select a player to mute them.`,
        )),
      this.available ||
        this.message(
          ni(
            "Доступно после подключения к сетевой игре.",
            "Available after joining a multiplayer game.",
          ),
        ),
      (this.hud.hidden = !this.active),
      (this.talk.textContent = this.pending
        ? ni("Разрешите микрофон…", "Allow microphone…")
        : this.micActive
          ? this.muted
            ? ni("Микрофон выкл.", "Mic muted")
            : this.preferences.mode === "ptt"
              ? o
                ? ni("Удерживать для разговора", "Hold to talk")
                : ni(
                    `Удерживать · ${gs(z.binds.voice, z.language)}`,
                    `Hold · ${gs(z.binds.voice, z.language)}`,
                  )
              : ni("Авто · нажать: выкл.", "Auto · tap to mute")
          : o
            ? ni("Включить микрофон", "Enable microphone")
            : ni(
                `Нажать ${gs(z.binds.voice, z.language)} для микрофона`,
                `Press ${gs(z.binds.voice, z.language)} for microphone`,
              )),
      (this.talk.title = this.talk.textContent),
      this.talk.setAttribute("aria-label", this.talk.textContent),
      (this.talk.innerHTML = Nn(this.muted ? "muted" : "mic")));
    const a = document.createElement("span");
    ((a.textContent = this.pending
      ? "…"
      : this.micActive
        ? this.muted
          ? ni("Выкл.", "Off")
          : this.preferences.mode === "ptt"
            ? gs(z.binds.voice, z.language)
            : "Auto"
        : ni("Микр.", "Mic")),
      this.talk.append(a));
  }
  ensureAudioSession() {
    if (this.context && this.output && this.gate) return;
    ((this.context = new AudioContext()),
      (this.output = this.context.createMediaStreamDestination()));
    const e = this.output.stream.getAudioTracks()[0];
    (e && (e.enabled = !1),
      (this.gate = this.context.createGain()),
      (this.gate.gain.value = 0),
      this.gate.connect(this.output));
  }
  joinVoice() {
    var e;
    if (!(
      !this.available ||
      this.active ||
      ((e = this.net) != null && e.isLocal)
    )) {
      if (!window.RTCPeerConnection) {
        (this.message(
          ni("Для voice-чата нужен WebRTC.", "Voice chat requires WebRTC."),
        ),
          this.render());
        return;
      }
      try {
        (this.ensureAudioSession(),
          (this.active = !0),
          (this.signalingJoined = !1));
        const t = this.generation;
        (this.loadIceServers().then(() => {
          this.active &&
            this.generation === t &&
            !this.signalingJoined &&
            ((this.signalingJoined = !0),
            this.send({ type: "join", channel: this.preferences.channel }));
        }),
          (this.timer = window.setInterval(() => this.tick(), 50)),
          this.resume(),
          this.message(
            ni(
              "Голосовой чат подключён. Включите микрофон кнопкой на экране.",
              "Voice chat ready. Enable the microphone using the on-screen button.",
            ),
          ),
          this.render());
      } catch (t) {
        (this.message(
          ni("Не удалось запустить voice chat.", "Could not start voice chat."),
        ),
          console.error(t));
      }
    }
  }
  async start() {
    var i;
    if (
      this.micActive ||
      this.pending ||
      !this.available ||
      (this.active || this.joinVoice(), !this.active)
    )
      return;
    if (
      !window.isSecureContext ||
      !((i = navigator.mediaDevices) != null && i.getUserMedia) ||
      !window.RTCPeerConnection
    ) {
      this.message(
        ni(
          "Для микрофона откройте игру через HTTPS (или localhost).",
          "Microphone requires HTTPS (or localhost).",
        ),
      );
      return;
    }
    const e = this.generation,
      t = ++this.micAttempt;
    ((this.pending = !0),
      this.render(),
      this.message(
        ni("Разрешите доступ к микрофону…", "Allow microphone access…"),
      ));
    try {
      (this.ensureAudioSession(), this.context.resume().catch(() => {}));
      const s = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !0,
          noiseSuppression: !0,
          autoGainControl: !0,
        },
        video: !1,
      });
      if (e !== this.generation || t !== this.micAttempt) {
        s.getTracks().forEach((r) => r.stop());
        return;
      }
      (this.context.resume().catch(() => {}),
        (this.raw = s),
        (s.getAudioTracks()[0].onended = () => {
          (this.stopMicrophone(),
            this.message(
              ni(
                "Микрофон отключён. Подключите его заново.",
                "Microphone disconnected. Connect it again.",
              ),
            ));
        }),
        (this.input = this.context.createMediaStreamSource(s)),
        (this.analyser = this.context.createAnalyser()),
        (this.analyser.fftSize = 512),
        this.input.connect(this.analyser));
      const o = this.keyboardHeld,
        a = this.talkHeld;
      (this.buildEffects(),
        (this.micActive = !0),
        (this.pending = !1),
        (this.muted = !1),
        (this.talkHeld = a),
        (this.held = o || a),
        this.render(),
        this.message(
          ni(
            "Подключено. Микрофон передаёт только при активной кнопке или голосе.",
            "Connected. Microphone transmits only while holding the button or detecting voice.",
          ),
        ));
    } catch {
      if (e !== this.generation || t !== this.micAttempt) return;
      (this.stopMicrophone(),
        this.message(
          ni(
            "Не удалось открыть микрофон. Проверьте разрешение браузера и устройство.",
            "Could not open microphone. Check browser permission and device.",
          ),
        ));
    }
  }
  stopMicrophone() {
    var e, t, i, s;
    (++this.micAttempt,
      (this.pending = !1),
      (this.micActive = !1),
      this.release(),
      (e = this.raw) == null ||
        e.getTracks().forEach((o) => {
          ((o.onended = null), o.stop());
        }),
      (this.raw = void 0),
      (t = this.input) == null || t.disconnect(),
      (this.input = void 0),
      (i = this.analyser) == null || i.disconnect(),
      (this.analyser = void 0),
      (s = this.effectGraph) == null || s.dispose(),
      (this.effectGraph = void 0),
      (this.meter.value = 0),
      this.render());
  }
  stop() {
    var e, t;
    (++this.generation,
      this.active && this.send({ type: "leave" }),
      (this.active = !1),
      this.stopMicrophone(),
      (this.signalingJoined = !1),
      (this.queue = Promise.resolve()),
      clearInterval(this.timer),
      (this.timer = 0));
    for (const i of [...this.peers.keys()]) this.removePeer(i);
    ((e = this.output) == null || e.stream.getTracks().forEach((i) => i.stop()),
      (t = this.context) == null || t.close().catch(() => {}),
      (this.context = void 0),
      (this.raw = void 0),
      (this.input = void 0),
      (this.analyser = void 0),
      (this.gate = void 0),
      (this.output = void 0),
      (this.meter.value = 0),
      this.render(),
      this.message(ni("Голосовой чат отключён.", "Voice chat disconnected.")));
  }
  release() {
    ((this.localLevel = 0),
      this.onActivity(0),
      (this.held = !1),
      (this.talkHeld = !1),
      (this.speakingUntil = 0),
      this.setTransmit(!1));
  }
  async resume() {
    var t;
    const e = [];
    this.context && e.push(this.context.resume());
    for (const i of this.peers.values())
      (t = i.audio) != null && t.paused && e.push(i.audio.play());
    await Promise.allSettled(e);
  }
  send(e) {
    var t;
    (t = this.net) == null || t.send(new Xe(ue.C_VOICE).str(JSON.stringify(e)));
  }
  setTransmit(e) {
    var i;
    this.gate && (this.gate.gain.value = e ? 1 : 0);
    const t = (i = this.output) == null ? void 0 : i.stream.getAudioTracks()[0];
    (t && (t.enabled = e),
      this.talk.classList.toggle("speaking", e),
      this.talk.setAttribute("aria-pressed", String(e)));
  }
  level(e) {
    e.getFloatTimeDomainData(this.samples);
    let t = 0;
    for (const i of this.samples) t += i * i;
    return Math.sqrt(t / this.samples.length);
  }
  tick() {
    var r;
    const e = performance.now(),
      t = this.micActive && this.analyser ? this.level(this.analyser) : 0;
    ((this.meter.value = t),
      t >= this.preferences.threshold && (this.speakingUntil = e + 250));
    const i =
      this.micActive &&
      !this.muted &&
      !document.hidden &&
      document.hasFocus() &&
      ((r = this.context) == null ? void 0 : r.state) === "running" &&
      (this.preferences.mode === "ptt"
        ? this.held || this.keyboardHeld || this.talkHeld
        : e < this.speakingUntil);
    if (
      (this.setTransmit(i),
      (this.localLevel = i ? t : 0),
      e - this.lastActivity >= 100 &&
        ((this.lastActivity = e), this.onActivity(this.localLevel)),
      e - this.lastRoster < 150)
    )
      return;
    ((this.lastRoster = e), this.spatialize());
    let s = 0,
      o = 0;
    for (const l of this.peers.values()) {
      l.analyser &&
        this.level(l.analyser) > 0.008 &&
        (l.speakingUntil = e + 250);
      const c = !l.muted && !l.far,
        h = e < l.speakingUntil;
      (h && c && s++,
        (l.row.hidden = !this.expanded && (!h || !c || o >= 2)),
        l.row.hidden || o++,
        l.row.classList.toggle("speaking", h && c),
        l.row.classList.toggle("far", l.far));
      const d =
          this.rangeLimited() && Number.isFinite(l.distance)
            ? ` · ${Math.round(l.distance)} ${ni("бл.", "bl")}`
            : "",
        u = `${l.name}${d} · ${l.far ? ni("вне зоны", "out of range") : l.pc.connectionState === "connected" ? ni("онлайн", "online") : l.pc.connectionState === "failed" ? ni("нет связи", "offline") : ni("подключение…", "connecting…")}`,
        f = l.muted ? "muted" : l.far ? "far" : h ? "audio" : "user";
      l.row.dataset.state !== `${f}:${u}` &&
        ((l.row.dataset.state = `${f}:${u}`),
        (l.row.innerHTML = Nn(f)),
        l.row.append(document.createTextNode(` ${u}`)));
    }
    const a = String(this.peers.size + 1);
    if (
      (this.roster.classList.toggle("speaking", s > 0),
      this.roster.dataset.count !== a)
    ) {
      ((this.roster.dataset.count = a), (this.roster.innerHTML = Nn("user")));
      const l = document.createElement("span");
      ((l.textContent = a), this.roster.append(l));
    }
    ((this.roster.title =
      ni(
        "Участники · нажмите, чтобы раскрыть",
        "Participants · tap to expand",
      ) +
      (this.rangeLimited()
        ? ni(
            ` · слышно до ${this.range} бл.`,
            ` · heard up to ${this.range} bl`,
          )
        : "")),
      this.roster.setAttribute(
        "aria-label",
        this.roster.title + ": " + (this.peers.size + 1),
      ));
  }
  buildEffects() {
    var s;
    const e = this.context,
      t = this.input,
      i = this.gate;
    !e ||
      !t ||
      !i ||
      (this.release(),
      t.disconnect(),
      this.analyser && t.connect(this.analyser),
      (s = this.effectGraph) == null || s.dispose(),
      (this.effectGraph = FJ(e, this.preferences.effect)),
      t.connect(this.effectGraph.input),
      this.effectGraph.output.connect(i));
  }
  async loadIceServers(e = !1) {
    if (!e && this.iceServersExpiresAt > Date.now() + 6e4) return;
    if (this.iceServersPromise) return this.iceServersPromise;
    const t = (async () => {
      var r, l;
      const i = "".trim();
      if (i) {
        try {
          ((this.iceServers = Y_(JSON.parse(i))),
            (this.iceServersExpiresAt = Number.MAX_SAFE_INTEGER));
        } catch {
          ((this.iceServers = e2),
            (this.iceServersExpiresAt = Date.now() + 3e5),
            this.message(
              ni(
                "Ошибка настройки ICE-серверов.",
                "Invalid ICE server configuration.",
              ),
            ));
        }
        return;
      }
      const s = (r = this.net) == null ? void 0 : r.voiceIceUrl;
      if (!s) {
        ((this.iceServers = e2), (this.iceServersExpiresAt = Date.now() + 3e5));
        return;
      }
      const o = new AbortController(),
        a = window.setTimeout(() => o.abort(), 2500);
      try {
        const c = await fetch(s, {
          cache: "no-store",
          headers:
            (l = this.net) != null && l.httpSessionToken
              ? { "X-Game-Session": this.net.httpSessionToken }
              : void 0,
          signal: o.signal,
        });
        if (!c.ok) throw new Error(`ICE config HTTP ${c.status}`);
        const h = await c.json();
        this.iceServers = Y_(h.iceServers);
        const d = Number(h.ttl);
        this.iceServersExpiresAt =
          Date.now() +
          Math.max(6e4, Math.min(864e5, Number.isFinite(d) ? d * 1e3 : 36e5));
      } catch {
        ((this.iceServers = e2), (this.iceServersExpiresAt = Date.now() + 3e5));
      } finally {
        window.clearTimeout(a);
      }
    })();
    this.iceServersPromise = t;
    try {
      await t;
    } finally {
      this.iceServersPromise === t && (this.iceServersPromise = void 0);
    }
  }
  createPeer(e, t, i = !1) {
    if (this.peers.has(e)) return this.peers.get(e);
    const s = new RTCPeerConnection({
        iceServers: this.iceServers,
        bundlePolicy: "max-bundle",
      }),
      o = document.createElement("button");
    ((o.type = "button"),
      (o.className = "voice-peer"),
      (o.title = ni(
        "Нажмите, чтобы заглушить / включить игрока",
        "Tap to mute / unmute player",
      )));
    const a = {
      pc: s,
      name: t,
      candidates: [],
      muted: !1,
      speakingUntil: 0,
      row: o,
      initiator: i,
      distance: 1 / 0,
      far: !1,
    };
    (this.peers.set(e, a),
      this.speakers.append(o),
      (o.onclick = () => {
        ((a.muted = !a.muted),
          o.setAttribute("aria-pressed", String(a.muted)),
          this.updateVolume());
      }));
    for (const r of this.output.stream.getTracks()) {
      const l = s.addTrack(r, this.output.stream),
        c = l.getParameters();
      ((c.encodings = [{ maxBitrate: 24e3 }]),
        l.setParameters(c).catch(() => {}));
    }
    return (
      (s.onicecandidate = (r) => {
        r.candidate &&
          this.peers.get(e) === a &&
          this.send({ type: "ice", to: e, candidate: r.candidate.toJSON() });
      }),
      (s.ontrack = (r) => {
        var h, d, u, f;
        if (this.peers.get(e) !== a || !this.context) return;
        ((h = a.source) == null || h.disconnect(),
          (d = a.gain) == null || d.disconnect(),
          (u = a.analyser) == null || u.disconnect());
        const l = r.streams[0] ?? new MediaStream([r.track]),
          c = a.audio ?? document.createElement("audio");
        ((c.autoplay = !0),
          (c.muted = !0),
          c.setAttribute("playsinline", ""),
          (c.srcObject = l),
          (a.audio = c),
          c
            .play()
            .catch(() =>
              this.message(
                ni(
                  "Нажмите экран, чтобы включить звук.",
                  "Tap the screen to enable audio.",
                ),
              ),
            ),
          (a.source = this.context.createMediaStreamSource(l)),
          (a.analyser = this.context.createAnalyser()),
          (a.analyser.fftSize = 512),
          (a.gain = this.context.createGain()),
          (f = a.panner) == null || f.disconnect(),
          (a.panner =
            typeof this.context.createStereoPanner == "function"
              ? this.context.createStereoPanner()
              : void 0),
          a.source.connect(a.analyser),
          a.analyser.connect(a.gain),
          a.panner
            ? (a.gain.connect(a.panner),
              a.panner.connect(this.context.destination))
            : a.gain.connect(this.context.destination),
          this.spatialize(!0));
      }),
      (s.onconnectionstatechange = () => {
        s.connectionState === "connected"
          ? a.restartTimer &&
            (clearTimeout(a.restartTimer), (a.restartTimer = void 0))
          : (s.connectionState === "failed" ||
              s.connectionState === "disconnected") &&
            this.schedulePeerRestart(e, a);
      }),
      a
    );
  }
  opus(e) {
    return e.replace(
      /^(a=fmtp:\d+ .*minptime[^\r\n]*)/gm,
      "$1;usedtx=1;maxaveragebitrate=24000;stereo=0",
    );
  }
  updateVolume() {
    this.spatialize(!0);
  }
  spatialize(e = !1) {
    const t = this.context;
    if (!t) return;
    const i = this.rangeLimited(),
      s = this.localPosition(),
      o = this.localYaw(),
      a = Math.sin(o),
      r = Math.cos(o);
    for (const [l, c] of this.peers) {
      const h = s ? this.positionOf(l) : null;
      let d = 1,
        u = 0;
      if (h && s) {
        const p = h.x - s.x,
          m = h.z - s.z,
          y = Math.hypot(p, h.y - s.y, m);
        if (((c.distance = y), i)) {
          const g = this.range * WJ;
          if (y >= this.range) d = 0;
          else if (y > g) {
            const b = (this.range - y) / (this.range - g);
            d = b * b * (3 - 2 * b);
          }
        }
        y > 1.5 &&
          (u =
            Math.max(-1, Math.min(1, (p * r - m * a) / y)) *
            0.55 *
            Math.min(1, (y - 1.5) / 6));
      } else c.distance = 1 / 0;
      c.far = i && h !== null && s !== null && c.distance >= this.range;
      const f = c.muted ? 0 : this.preferences.volume * d;
      (c.gain &&
        (e
          ? (c.gain.gain.cancelScheduledValues(t.currentTime),
            (c.gain.gain.value = f))
          : c.gain.gain.setTargetAtTime(f, t.currentTime, 0.12)),
        c.panner &&
          (e
            ? (c.panner.pan.value = u)
            : c.panner.pan.setTargetAtTime(u, t.currentTime, 0.15)));
    }
  }
  schedulePeerRestart(e, t) {
    !t.initiator ||
      !this.active ||
      this.peers.get(e) !== t ||
      t.restartTimer ||
      (t.restartTimer = window.setTimeout(
        () => {
          ((t.restartTimer = void 0), this.restartPeer(e, t));
        },
        t.pc.connectionState === "failed" ? 250 : 2e3,
      ));
  }
  async restartPeer(e, t) {
    var i, s;
    if (!(!this.active || this.peers.get(e) !== t))
      try {
        if (
          (await this.loadIceServers(),
          t.pc.connectionState !== "failed" && t.pc.signalingState === "stable")
        ) {
          (t.pc.restartIce(),
            await t.pc.setLocalDescription(
              await t.pc.createOffer({ iceRestart: !0 }),
            ),
            this.peers.get(e) === t &&
              this.send({
                type: "offer",
                to: e,
                sdp: this.opus(
                  ((i = t.pc.localDescription) == null ? void 0 : i.sdp) ?? "",
                ),
              }));
          return;
        }
        const o = t.muted,
          a = t.name;
        this.removePeer(e);
        const r = this.createPeer(e, a, !0);
        ((r.muted = o),
          r.row.setAttribute("aria-pressed", String(o)),
          this.updateVolume(),
          await r.pc.setLocalDescription(await r.pc.createOffer()),
          this.peers.get(e) === r &&
            this.send({
              type: "offer",
              to: e,
              sdp: this.opus(
                ((s = r.pc.localDescription) == null ? void 0 : s.sdp) ?? "",
              ),
            }));
      } catch {
        this.peers.get(e) === t &&
          (this.message(
            ni(
              "Нет связи с участником. Восстанавливаю voice-чат…",
              "Peer connection lost. Restoring voice chat…",
            ),
          ),
          this.schedulePeerRestart(e, t));
      }
  }
  removePeer(e) {
    var i, s, o, a;
    const t = this.peers.get(e);
    t &&
      (this.peers.delete(e),
      t.restartTimer && clearTimeout(t.restartTimer),
      (t.pc.onicecandidate = null),
      (t.pc.ontrack = null),
      (t.pc.onconnectionstatechange = null),
      t.pc.close(),
      t.audio && (t.audio.pause(), (t.audio.srcObject = null)),
      (i = t.source) == null || i.disconnect(),
      (s = t.analyser) == null || s.disconnect(),
      (o = t.gain) == null || o.disconnect(),
      (a = t.panner) == null || a.disconnect(),
      t.row.remove());
  }
  async signal(e, t) {
    if (e.type === "reset") {
      this.release();
      for (const s of [...this.peers.keys()]) this.removePeer(s);
      this.send({ type: "join", channel: this.preferences.channel });
      return;
    }
    if (e.type === "muted") {
      (this.stop(),
        this.message(
          ni(
            "Текстовый и голосовой чат отключены модерацией.",
            "Text and voice chat are muted by moderation.",
          ),
        ));
      return;
    }
    if (e.type === "left") {
      this.removePeer(e.id);
      return;
    }
    if ((await this.loadIceServers(), !this.active || t !== this.generation))
      return;
    if (e.type === "peer") {
      this.createPeer(e.id, e.name);
      return;
    }
    if (e.type === "joined") {
      for (const s of e.peers) {
        if (!this.active || t !== this.generation) return;
        const o = this.createPeer(s.id, s.name, !0);
        (await o.pc.setLocalDescription(await o.pc.createOffer()),
          this.peers.get(s.id) === o &&
            this.send({
              type: "offer",
              to: s.id,
              sdp: this.opus(o.pc.localDescription.sdp),
            }));
      }
      return;
    }
    const i = this.peers.get(e.from);
    if (i) {
      if (e.type === "ice") {
        i.pc.remoteDescription
          ? await i.pc.addIceCandidate(e.candidate)
          : i.candidates.length < 64 && i.candidates.push(e.candidate);
        return;
      }
      if (e.type === "offer" || e.type === "answer") {
        await i.pc.setRemoteDescription({ type: e.type, sdp: e.sdp });
        for (const s of i.candidates) await i.pc.addIceCandidate(s);
        ((i.candidates = []),
          e.type === "offer" &&
            (await i.pc.setLocalDescription(await i.pc.createAnswer()),
            this.peers.get(e.from) === i &&
              this.send({
                type: "answer",
                to: e.from,
                sdp: this.opus(i.pc.localDescription.sdp),
              })));
      }
    }
  }
}
