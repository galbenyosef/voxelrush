// index-BeUlFSPp 202 — preferences
// Lines 107718-108850 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class rae {
  preferences = oae();
  onActivity = () => {};
  localLevel = 0;
  lastActivity = 0;
  lastRoster = 0;
  expanded = !1;
  roster = document.createElement("button");
  net;
  available = !1;
  active = !1;
  micActive = !1;
  generation = 0;
  micAttempt = 0;
  pending = !1;
  muted = !1;
  held = !1;
  keyboardHeld = !1;
  talkHeld = !1;
  speakingUntil = 0;
  context;
  raw;
  output;
  input;
  analyser;
  gate;
  effectGraph;
  peers = new Map();
  iceServers = Fg;
  iceServersExpiresAt = 0;
  iceServersPromise;
  signalingJoined = !1;
  timer = 0;
  queue = Promise.resolve();
  samples = new Float32Array(512);
  range = 0;
  positionOf = () => null;
  localPosition = () => null;
  localYaw = () => 0;
  rangeNote = document.createElement("p");
  panel = document.createElement("div");
  hud = document.createElement("aside");
  status = document.createElement("p");
  join = document.createElement("button");
  mute = document.createElement("button");
  talk = document.createElement("button");
  speakers = document.createElement("div");
  meter = document.createElement("meter");
  help = document.createElement("p");
  constructor() {
    (window.addEventListener("blocklist-changed", () => this.updateVolume()),
      (this.panel.id = "voice-settings"));
    const e = [],
      t = (c) => {
        (e.push(c), c());
      },
      i = document.createElement("h3");
    (t(() => {
      i.textContent = ii("Глобальный голосовой чат", "Global voice chat");
    }),
      this.panel.append(i));
    const n = document.createElement("div");
    ((n.className = "voice-channel-controls"),
      (n.hidden = !0),
      n.setAttribute("role", "group"));
    for (const c of ["global", "squad"]) {
      const h = document.createElement("button");
      ((h.type = "button"),
        (h.className = "voice-channel-button"),
        (h.dataset.voiceChannel = c),
        (h.onclick = () => this.setChannel(c)),
        n.append(h));
    }
    ((n.id = "inventory-voice-channels"),
      document
        .getElementById("invmain")
        ?.insertBefore(n, document.getElementById("invgridscroll")),
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
    const o = (c, h, d, u, f) => {
      const p = document.createElement("label"),
        m = document.createTextNode("");
      p.append(m);
      const g = document.createElement("select");
      g.id = c;
      for (const [y, b] of d()) g.add(new Option(b, y));
      (t(() => {
        ((m.data = h()),
          d().forEach(([, y], b) => {
            g.options[b] && (g.options[b].text = y);
          }));
      }),
        (g.value = u),
        (g.onchange = () => {
          (f(g.value), this.save(), this.release(), this.render());
        }),
        p.append(g),
        this.panel.append(p));
    };
    (o(
      "voice-channel",
      () => ii("Канал связи", "Voice channel"),
      () => [
        ["global", ii("Общий", "Global")],
        ["squad", ii("Отряд", "Squad")],
      ],
      this.preferences.channel,
      (c) => this.setChannel(c),
    ),
      o(
        "voice-mode",
        () => ii("Передача голоса", "Transmit mode"),
        () => [
          ["ptt", ii("Удерживать кнопку", "Push to talk")],
          ["vad", ii("Активация голосом", "Voice activation")],
        ],
        this.preferences.mode,
        (c) => (this.preferences.mode = c),
      ),
      o(
        "voice-effect",
        () => ii("Изменение голоса", "Voice changer"),
        () => GT.map(({ id: c, ru: h, en: d }) => [c, I(d, h)]),
        this.preferences.effect,
        (c) => {
          ((this.preferences.effect = c), this.buildEffects());
        },
      ));
    const a = (c, h, d, u, f, p, m) => {
      const g = document.createElement("label"),
        y = document.createTextNode("");
      (g.append(y),
        t(() => {
          y.data = h();
        }));
      const b = document.createElement("input");
      ((b.type = "range"),
        (b.id = c),
        (b.min = String(d)),
        (b.max = String(u)),
        (b.step = String(f)),
        (b.value = String(p)),
        (b.oninput = () => {
          (m(Number(b.value)), this.save());
        }),
        g.append(b),
        this.panel.append(g));
    };
    (a(
      "voice-threshold",
      () =>
        ii(
          "Порог активации (выше — меньше фонового шума)",
          "Activation threshold (higher filters more noise)",
        ),
      0.005,
      0.15,
      0.005,
      this.preferences.threshold,
      (c) => (this.preferences.threshold = c),
    ),
      a(
        "voice-volume",
        () => ii("Громкость собеседников", "Voice volume"),
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
      t(() =>
        this.meter.setAttribute(
          "aria-label",
          ii("Уровень микрофона", "Microphone level"),
        ),
      ),
      (this.status.id = "voice-status"),
      this.status.setAttribute("role", "status"),
      (this.rangeNote.id = "voice-range"),
      this.panel.append(this.meter, this.help, this.rangeNote, this.status),
      document
        .querySelector('[data-settings-category="audio"]')
        ?.append(this.panel),
      (this.hud.id = "voice-hud"),
      (this.hud.hidden = !0),
      this.hud.setAttribute(
        "aria-label",
        ii("Участники голосового чата", "Voice participants"),
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
    const r = () => {
      const c = document.documentElement;
      if (this.hud.hidden || document.body.classList.contains("mobile")) {
        c.style.removeProperty("--ops-top");
        return;
      }
      const h = this.hud.getBoundingClientRect().bottom;
      c.style.setProperty("--ops-top", `${Math.max(176, Math.ceil(h + 10))}px`);
    };
    ("ResizeObserver" in window && new ResizeObserver(r).observe(this.hud),
      new MutationObserver(r).observe(this.hud, {
        attributes: !0,
        attributeFilter: ["hidden"],
        childList: !0,
        subtree: !0,
      }),
      window.addEventListener("resize", r),
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
      if (
        !(c.code !== Y.binds.voice || c.repeat || !this.active) &&
        !(
          c.target?.closest('input,textarea,select,[contenteditable="true"]') ||
          !document.querySelector("#settings")?.classList.contains("hidden")
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
        c.code === Y.binds.voice && ((this.keyboardHeld = !1), this.release());
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
    const l = document.querySelector("#settings");
    (l &&
      new MutationObserver(() => {
        (this.release(), this.render());
      }).observe(l, { attributes: !0, attributeFilter: ["class"] }),
      this.render(),
      window.addEventListener("squad-state-changed", () =>
        this.setChannel(Zh() ? this.preferences.channel : "global"),
      ),
      da(() => {
        for (const c of e) c();
        this.render();
      }),
      this.setChannel(Zh() ? this.preferences.channel : "global"));
  }
  attach(e) {
    ((this.net = e),
      e.on(ue.S_VOICE, (t) => {
        const i = JSON.parse(t.str()),
          n = this.generation;
        this.queue = this.queue
          .then(async () => {
            n === this.generation && this.active && (await this.signal(i, n));
          })
          .catch(() => {
            n === this.generation &&
              this.message(
                ii(
                  "Не удалось подключить голос. Переподключитесь к чату.",
                  "Voice connection failed. Rejoin voice chat.",
                ),
              );
          });
      }));
  }
  connected() {
    ((this.available = !this.net?.isLocal),
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
        ? ii(
            "Голос отряда слышно на любом расстоянии.",
            "Squad voice has no distance limit.",
          )
        : ii(
            `Общий голос слышно в радиусе ${this.range} блоков от говорящего (настройка сервера). Отряд слышит друг друга везде.`,
            `Global voice carries ${this.range} blocks from the speaker (server setting). Squads hear each other anywhere.`,
          )
      : ii(
          "Общий голос слышно по всему миру.",
          "Global voice carries across the whole world.",
        );
  }
  message(e) {
    this.status.textContent = e;
  }
  setChannel(e) {
    if (
      (e === "squad" && !Zh() && (e = "global"), e !== this.preferences.channel)
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
    const e = Zh(),
      t = document.getElementById("inventory-voice-channels");
    t &&
      ((t.hidden = !e),
      t.setAttribute(
        "aria-label",
        ii("Канал голосового чата", "Voice chat channel"),
      ));
    for (const r of document.querySelectorAll("[data-voice-channel]")) {
      const l = r.dataset.voiceChannel === "squad";
      r.innerHTML = Ks("mic");
      const c = document.createElement("span");
      ((c.textContent = l
        ? ii("Голос · отряд", "Voice · squad")
        : ii("Голос · общий", "Voice · global")),
        r.append(c),
        r.setAttribute(
          "aria-pressed",
          String(r.dataset.voiceChannel === this.preferences.channel),
        ),
        r.classList.toggle(
          "primary",
          r.dataset.voiceChannel === this.preferences.channel,
        ));
    }
    const i = document.getElementById("voice-channel");
    i &&
      (i.parentElement && (i.parentElement.hidden = !e),
      (i.disabled = !e),
      (i.value = this.preferences.channel),
      (i.options[0].text = ii("Общий", "Global")),
      (i.options[1].text = ii("Отряд", "Squad")),
      i.parentElement?.firstChild &&
        (i.parentElement.firstChild.textContent = ii(
          "Канал связи",
          "Voice channel",
        )));
    const n = this.panel.querySelector("h3");
    (n &&
      (n.textContent =
        this.preferences.channel === "squad"
          ? ii("Голосовой чат отряда", "Squad voice chat")
          : ii("Общий голосовой чат", "Global voice chat")),
      (this.rangeNote.textContent = this.rangeText()),
      (this.rangeNote.hidden = !this.available),
      (this.join.textContent = this.pending
        ? ii("Отменить подключение", "Cancel connection")
        : this.micActive
          ? ii("Отключить микрофон", "Disconnect microphone")
          : ii("Подключить микрофон", "Connect microphone")),
      (this.join.disabled = !this.available),
      (this.mute.hidden = !this.micActive),
      (this.mute.textContent = this.muted
        ? ii("Включить микрофон", "Unmute microphone")
        : ii("Выключить микрофон", "Mute microphone")),
      this.mute.setAttribute("aria-pressed", String(this.muted)));
    const o = jr();
    ((this.help.textContent = o
      ? ii(
          "Удерживайте кнопку микрофона, чтобы говорить. Нажмите имя, чтобы заглушить игрока.",
          "Hold the microphone button to talk. Tap a player to mute them.",
        )
      : ii(
          `Удерживайте ${rr(Y.binds.voice)}, чтобы говорить. Нажмите имя, чтобы заглушить игрока.`,
          `Hold ${rr(Y.binds.voice)} to talk. Select a player to mute them.`,
        )),
      this.available ||
        this.message(
          ii(
            "Доступно после подключения к сетевой игре.",
            "Available after joining a multiplayer game.",
          ),
        ),
      (this.hud.hidden = !this.active),
      (this.talk.textContent = this.pending
        ? ii("Разрешите микрофон…", "Allow microphone…")
        : this.micActive
          ? this.muted
            ? ii("Микрофон выкл.", "Mic muted")
            : this.preferences.mode === "ptt"
              ? o
                ? ii("Удерживать для разговора", "Hold to talk")
                : ii(
                    `Удерживать · ${rr(Y.binds.voice)}`,
                    `Hold · ${rr(Y.binds.voice)}`,
                  )
              : ii("Авто · нажать: выкл.", "Auto · tap to mute")
          : o
            ? ii("Включить микрофон", "Enable microphone")
            : ii(
                `Нажать ${rr(Y.binds.voice)} для микрофона`,
                `Press ${rr(Y.binds.voice)} for microphone`,
              )),
      (this.talk.title = this.talk.textContent),
      this.talk.setAttribute("aria-label", this.talk.textContent),
      (this.talk.innerHTML = Ks(this.muted ? "muted" : "mic")));
    const a = document.createElement("span");
    ((a.textContent = this.pending
      ? "…"
      : this.micActive
        ? this.muted
          ? ii("Выкл.", "Off")
          : this.preferences.mode === "ptt"
            ? rr(Y.binds.voice)
            : "Auto"
        : ii("Микр.", "Mic")),
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
    if (!(!this.available || this.active || this.net?.isLocal)) {
      if (!window.RTCPeerConnection) {
        (this.message(
          ii("Для voice-чата нужен WebRTC.", "Voice chat requires WebRTC."),
        ),
          this.render());
        return;
      }
      try {
        (this.ensureAudioSession(),
          (this.active = !0),
          (this.signalingJoined = !1));
        const e = this.generation;
        (this.loadIceServers().then(() => {
          this.active &&
            this.generation === e &&
            !this.signalingJoined &&
            ((this.signalingJoined = !0),
            this.send({ type: "join", channel: this.preferences.channel }));
        }),
          (this.timer = window.setInterval(() => this.tick(), 50)),
          this.resume(),
          this.message(
            ii(
              "Голосовой чат подключён. Включите микрофон кнопкой на экране.",
              "Voice chat ready. Enable the microphone using the on-screen button.",
            ),
          ),
          this.render());
      } catch (e) {
        (this.message(
          ii("Не удалось запустить voice chat.", "Could not start voice chat."),
        ),
          console.error(e));
      }
    }
  }
  async start() {
    if (
      this.micActive ||
      this.pending ||
      !this.available ||
      (this.active || this.joinVoice(), !this.active)
    )
      return;
    if (
      !window.isSecureContext ||
      !navigator.mediaDevices?.getUserMedia ||
      !window.RTCPeerConnection
    ) {
      this.message(
        ii(
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
        ii("Разрешите доступ к микрофону…", "Allow microphone access…"),
      ));
    try {
      (this.ensureAudioSession(), this.context.resume().catch(() => {}));
      const i = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !0,
          noiseSuppression: !0,
          autoGainControl: !0,
        },
        video: !1,
      });
      if (e !== this.generation || t !== this.micAttempt) {
        i.getTracks().forEach((a) => a.stop());
        return;
      }
      (this.context.resume().catch(() => {}),
        (this.raw = i),
        (i.getAudioTracks()[0].onended = () => {
          (this.stopMicrophone(),
            this.message(
              ii(
                "Микрофон отключён. Подключите его заново.",
                "Microphone disconnected. Connect it again.",
              ),
            ));
        }),
        (this.input = this.context.createMediaStreamSource(i)),
        (this.analyser = this.context.createAnalyser()),
        (this.analyser.fftSize = 512),
        this.input.connect(this.analyser));
      const n = this.keyboardHeld,
        o = this.talkHeld;
      (this.buildEffects(),
        (this.micActive = !0),
        (this.pending = !1),
        (this.muted = !1),
        (this.talkHeld = o),
        (this.held = n || o),
        this.render(),
        this.message(
          ii(
            "Подключено. Микрофон передаёт только при активной кнопке или голосе.",
            "Connected. Microphone transmits only while holding the button or detecting voice.",
          ),
        ));
    } catch {
      if (e !== this.generation || t !== this.micAttempt) return;
      (this.stopMicrophone(),
        this.message(
          ii(
            "Не удалось открыть микрофон. Проверьте разрешение браузера и устройство.",
            "Could not open microphone. Check browser permission and device.",
          ),
        ));
    }
  }
  stopMicrophone() {
    (++this.micAttempt,
      (this.pending = !1),
      (this.micActive = !1),
      this.release(),
      this.raw?.getTracks().forEach((e) => {
        ((e.onended = null), e.stop());
      }),
      (this.raw = void 0),
      this.input?.disconnect(),
      (this.input = void 0),
      this.analyser?.disconnect(),
      (this.analyser = void 0),
      this.effectGraph?.dispose(),
      (this.effectGraph = void 0),
      (this.meter.value = 0),
      this.render());
  }
  stop() {
    (++this.generation,
      this.active && this.send({ type: "leave" }),
      (this.active = !1),
      this.stopMicrophone(),
      (this.signalingJoined = !1),
      (this.queue = Promise.resolve()),
      clearInterval(this.timer),
      (this.timer = 0));
    for (const e of [...this.peers.keys()]) this.removePeer(e);
    (this.output?.stream.getTracks().forEach((e) => e.stop()),
      this.context?.close().catch(() => {}),
      (this.context = void 0),
      (this.raw = void 0),
      (this.input = void 0),
      (this.analyser = void 0),
      (this.gate = void 0),
      (this.output = void 0),
      (this.meter.value = 0),
      this.render(),
      this.message(ii("Голосовой чат отключён.", "Voice chat disconnected.")));
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
    const e = [];
    this.context && e.push(this.context.resume());
    for (const t of this.peers.values())
      t.audio?.paused && e.push(t.audio.play());
    await Promise.allSettled(e);
  }
  send(e) {
    this.net?.send(new lt(ue.C_VOICE).str(JSON.stringify(e)));
  }
  setTransmit(e) {
    this.gate && (this.gate.gain.value = e ? 1 : 0);
    const t = this.output?.stream.getAudioTracks()[0];
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
    const e = performance.now(),
      t = this.micActive && this.analyser ? this.level(this.analyser) : 0;
    ((this.meter.value = t),
      t >= this.preferences.threshold && (this.speakingUntil = e + 250));
    const i =
      this.micActive &&
      !this.muted &&
      !document.hidden &&
      document.hasFocus() &&
      this.context?.state === "running" &&
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
    let n = 0,
      o = 0;
    for (const r of this.peers.values()) {
      r.analyser &&
        this.level(r.analyser) > 0.008 &&
        (r.speakingUntil = e + 250);
      const l = !r.muted && !r.far,
        c = e < r.speakingUntil;
      (c && l && n++,
        (r.row.hidden = !this.expanded && (!c || !l || o >= 2)),
        r.row.hidden || o++,
        r.row.classList.toggle("speaking", c && l),
        r.row.classList.toggle("far", r.far));
      const h =
          this.rangeLimited() && Number.isFinite(r.distance)
            ? ` · ${Math.round(r.distance)} ${ii("бл.", "bl")}`
            : "",
        d = `${r.name}${h} · ${r.far ? ii("вне зоны", "out of range") : r.pc.connectionState === "connected" ? ii("онлайн", "online") : r.pc.connectionState === "failed" ? ii("нет связи", "offline") : ii("подключение…", "connecting…")}`,
        u = r.muted ? "muted" : r.far ? "far" : c ? "audio" : "user";
      r.row.dataset.state !== `${u}:${d}` &&
        ((r.row.dataset.state = `${u}:${d}`),
        (r.row.innerHTML = Ks(u)),
        r.row.append(document.createTextNode(` ${d}`)));
    }
    const a = String(this.peers.size + 1);
    if (
      (this.roster.classList.toggle("speaking", n > 0),
      this.roster.dataset.count !== a)
    ) {
      ((this.roster.dataset.count = a), (this.roster.innerHTML = Ks("user")));
      const r = document.createElement("span");
      ((r.textContent = a), this.roster.append(r));
    }
    ((this.roster.title =
      ii(
        "Участники · нажмите, чтобы раскрыть",
        "Participants · tap to expand",
      ) +
      (this.rangeLimited()
        ? ii(
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
    const e = this.context,
      t = this.input,
      i = this.gate;
    !e ||
      !t ||
      !i ||
      (this.release(),
      t.disconnect(),
      this.analyser && t.connect(this.analyser),
      this.effectGraph?.dispose(),
      (this.effectGraph = nae(e, this.preferences.effect)),
      t.connect(this.effectGraph.input),
      this.effectGraph.output.connect(i));
  }
  async loadIceServers(e = !1) {
    if (!e && this.iceServersExpiresAt > Date.now() + 6e4) return;
    if (this.iceServersPromise) return this.iceServersPromise;
    const t = (async () => {
      const i = "".trim();
      if (i) {
        try {
          ((this.iceServers = SC(JSON.parse(i))),
            (this.iceServersExpiresAt = Number.MAX_SAFE_INTEGER));
        } catch {
          ((this.iceServers = Fg),
            (this.iceServersExpiresAt = Date.now() + 3e5),
            this.message(
              ii(
                "Ошибка настройки ICE-серверов.",
                "Invalid ICE server configuration.",
              ),
            ));
        }
        return;
      }
      const n = this.net?.voiceIceUrl;
      if (!n) {
        ((this.iceServers = Fg), (this.iceServersExpiresAt = Date.now() + 3e5));
        return;
      }
      const o = new AbortController(),
        a = window.setTimeout(() => o.abort(), 2500);
      try {
        const r = await fetch(n, {
          cache: "no-store",
          headers: this.net?.httpSessionToken
            ? { "X-Game-Session": this.net.httpSessionToken }
            : void 0,
          signal: o.signal,
        });
        if (!r.ok) throw new Error(`ICE config HTTP ${r.status}`);
        const l = await r.json();
        this.iceServers = SC(l.iceServers);
        const c = Number(l.ttl);
        this.iceServersExpiresAt =
          Date.now() +
          Math.max(6e4, Math.min(864e5, Number.isFinite(c) ? c * 1e3 : 36e5));
      } catch {
        ((this.iceServers = Fg), (this.iceServersExpiresAt = Date.now() + 3e5));
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
    const n = new RTCPeerConnection({
        iceServers: this.iceServers,
        bundlePolicy: "max-bundle",
      }),
      o = document.createElement("button");
    ((o.type = "button"),
      (o.className = "voice-peer"),
      (o.title = ii(
        "Нажмите, чтобы заглушить / включить игрока",
        "Tap to mute / unmute player",
      )));
    const a = {
      pc: n,
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
      const l = n.addTrack(r, this.output.stream),
        c = l.getParameters();
      ((c.encodings = [{ maxBitrate: 24e3 }]),
        l.setParameters(c).catch(() => {}));
    }
    return (
      (n.onicecandidate = (r) => {
        r.candidate &&
          this.peers.get(e) === a &&
          this.send({ type: "ice", to: e, candidate: r.candidate.toJSON() });
      }),
      (n.ontrack = (r) => {
        if (this.peers.get(e) !== a || !this.context) return;
        (a.source?.disconnect(),
          a.gain?.disconnect(),
          a.analyser?.disconnect());
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
                ii(
                  "Нажмите экран, чтобы включить звук.",
                  "Tap the screen to enable audio.",
                ),
              ),
            ),
          (a.source = this.context.createMediaStreamSource(l)),
          (a.analyser = this.context.createAnalyser()),
          (a.analyser.fftSize = 512),
          (a.gain = this.context.createGain()),
          a.panner?.disconnect(),
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
      (n.onconnectionstatechange = () => {
        n.connectionState === "connected"
          ? a.restartTimer &&
            (clearTimeout(a.restartTimer), (a.restartTimer = void 0))
          : (n.connectionState === "failed" ||
              n.connectionState === "disconnected") &&
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
      n = this.localPosition(),
      o = this.localYaw(),
      a = Math.sin(o),
      r = Math.cos(o);
    for (const [l, c] of this.peers) {
      const h = n ? this.positionOf(l) : null;
      let d = 1,
        u = 0;
      if (h && n) {
        const p = h.x - n.x,
          m = h.z - n.z,
          g = Math.hypot(p, h.y - n.y, m);
        if (((c.distance = g), i)) {
          const y = this.range * aae;
          if (g >= this.range) d = 0;
          else if (g > y) {
            const b = (this.range - g) / (this.range - y);
            d = b * b * (3 - 2 * b);
          }
        }
        g > 1.5 &&
          (u =
            Math.max(-1, Math.min(1, (p * r - m * a) / g)) *
            0.55 *
            Math.min(1, (g - 1.5) / 6));
      } else c.distance = 1 / 0;
      c.far = i && h !== null && n !== null && c.distance >= this.range;
      const f = c.muted || Vu(c.name) ? 0 : this.preferences.volume * d;
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
                sdp: this.opus(t.pc.localDescription?.sdp ?? ""),
              }));
          return;
        }
        const i = t.muted,
          n = t.name;
        this.removePeer(e);
        const o = this.createPeer(e, n, !0);
        ((o.muted = i),
          o.row.setAttribute("aria-pressed", String(i)),
          this.updateVolume(),
          await o.pc.setLocalDescription(await o.pc.createOffer()),
          this.peers.get(e) === o &&
            this.send({
              type: "offer",
              to: e,
              sdp: this.opus(o.pc.localDescription?.sdp ?? ""),
            }));
      } catch {
        this.peers.get(e) === t &&
          (this.message(
            ii(
              "Нет связи с участником. Восстанавливаю voice-чат…",
              "Peer connection lost. Restoring voice chat…",
            ),
          ),
          this.schedulePeerRestart(e, t));
      }
  }
  removePeer(e) {
    const t = this.peers.get(e);
    t &&
      (this.peers.delete(e),
      t.restartTimer && clearTimeout(t.restartTimer),
      (t.pc.onicecandidate = null),
      (t.pc.ontrack = null),
      (t.pc.onconnectionstatechange = null),
      t.pc.close(),
      t.audio && (t.audio.pause(), (t.audio.srcObject = null)),
      t.source?.disconnect(),
      t.analyser?.disconnect(),
      t.gain?.disconnect(),
      t.panner?.disconnect(),
      t.row.remove());
  }
  async signal(e, t) {
    if (e.type === "reset") {
      this.release();
      for (const n of [...this.peers.keys()]) this.removePeer(n);
      this.send({ type: "join", channel: this.preferences.channel });
      return;
    }
    if (e.type === "muted") {
      (this.stop(),
        this.message(
          ii(
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
      for (const n of e.peers) {
        if (!this.active || t !== this.generation) return;
        const o = this.createPeer(n.id, n.name, !0);
        (await o.pc.setLocalDescription(await o.pc.createOffer()),
          this.peers.get(n.id) === o &&
            this.send({
              type: "offer",
              to: n.id,
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
        for (const n of i.candidates) await i.pc.addIceCandidate(n);
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
