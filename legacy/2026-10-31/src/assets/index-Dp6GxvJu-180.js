// index-Dp6GxvJu 180 — preferences
// Lines 101597-102137 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class XJ {
  constructor() {
    w(this, "preferences", jJ());
    w(this, "net");
    w(this, "online", !1);
    w(this, "local", !1);
    w(this, "ready", !1);
    w(this, "context");
    w(this, "gain");
    w(this, "source");
    w(this, "current");
    w(this, "radioFilters", []);
    w(this, "generation", 0);
    w(this, "queue", []);
    w(this, "busy", !1);
    w(this, "controller");
    w(this, "finish");
    w(this, "previewTimer", 0);
    w(this, "lastPreview", 0);
    w(this, "decoded", new Map());
    w(this, "panel", document.createElement("section"));
    w(this, "status", document.createElement("p"));
    w(this, "previews", {
      ru: document.createElement("button"),
      en: document.createElement("button"),
    });
    w(this, "previewVoice");
    w(this, "now", document.createElement("div"));
    var h;
    const e = [],
      t = (d, u, f) => {
        const p = document.createTextNode(co(u, f));
        (d.append(p),
          e.push(() => {
            p.textContent = co(u, f);
          }));
      };
    this.panel.id = "chat-tts-settings";
    const i = document.createElement("h3");
    (t(i, "Озвучка текстового чата", "Text chat speech"), this.panel.append(i));
    const s = (d, u, f, p) => {
      const m = document.createElement("label");
      t(m, u, f);
      const y = document.createElement("input");
      ((y.type = "checkbox"),
        (y.id = d),
        (y.checked = this.preferences[p]),
        (y.onchange = () => {
          if (((this.preferences[p] = y.checked), p !== "publish")) {
            if (!y.checked) {
              const g = (b) =>
                !b.preview &&
                (p === "combat"
                  ? !!b.combat
                  : p === "important"
                    ? !!b.important
                    : !b.important && !b.combat);
              ((this.queue = this.queue.filter((b) => !g(b))),
                this.current && g(this.current) && this.stopAudio(),
                this.local &&
                  typeof speechSynthesis < "u" &&
                  speechSynthesis.cancel());
            }
            this.unlock();
          }
          (this.save(), this.configure(), this.render());
        }),
        m.append(y),
        this.panel.append(m));
    };
    (s(
      "chat-tts-enabled",
      "Слушать сообщения игроков",
      "Hear player messages",
      "enabled",
    ),
      s(
        "chat-tts-important",
        "Озвучивать важные игровые сообщения",
        "Speak important game messages",
        "important",
      ),
      s(
        "chat-tts-combat",
        "Реплики и рация военных рядом",
        "Nearby soldier chatter and radio",
        "combat",
      ),
      s(
        "chat-tts-publish",
        "Озвучивать мои сообщения",
        "Speak my messages to others",
        "publish",
      ));
    const o = document.createElement("p");
    ((o.id = "chat-tts-language"),
      t(
        o,
        "Язык определяется автоматически по сообщению: русский или английский.",
        "Message language is detected automatically: Russian or English.",
      ),
      this.panel.append(o));
    const a = document.createElement("p");
    ((a.className = "chat-tts-help"),
      t(
        a,
        "Важные сообщения: обращения Волкова, рейды и тревоги. Реплики и рация военных слышны только рядом. Все виды озвучки отключаются отдельно.",
        "Important messages include Volkov’s briefings, raids and alarms. Soldier chatter and radio are only heard nearby. Each speech category has its own switch.",
      ),
      this.panel.append(a));
    for (const d of ["ru", "en"]) {
      const u = document.createElement("label");
      t(
        u,
        d === "ru" ? "Русский голос" : "Английский голос",
        d === "ru" ? "Russian voice" : "English voice",
      );
      const f = document.createElement("select");
      f.id = d === "ru" ? "chat-tts-voice" : "chat-tts-voice-en";
      const p = () => {
        f.replaceChildren();
        for (const y of jg.filter((g) => g.language === d))
          f.add(new Option(co(y.ru, y.en), y.id));
        f.value = this.preferences.voices[d];
      };
      (p(),
        e.push(p),
        (f.onchange = () => {
          (this.stop(),
            (this.preferences.voices[d] = BM(f.value, d)),
            this.save(),
            this.configure(),
            this.render());
        }),
        u.append(f),
        this.panel.append(u));
      const m = this.previews[d];
      ((m.id = d === "ru" ? "chat-tts-preview" : "chat-tts-preview-en"),
        (m.type = "button"),
        (m.className = "btn small secondary"),
        t(
          m,
          d === "ru" ? "Послушать русский голос" : "Послушать английский голос",
          d === "ru" ? "Preview Russian voice" : "Preview English voice",
        ),
        (m.onclick = () => this.testVoice(this.preferences.voices[d])),
        this.panel.append(m));
    }
    const r = document.createElement("label");
    t(r, "Громкость озвучки", "Speech volume");
    const l = document.createElement("input");
    ((l.id = "chat-tts-volume"),
      (l.type = "range"),
      (l.min = "0"),
      (l.max = "1"),
      (l.step = ".05"),
      (l.value = String(this.preferences.volume)),
      (l.oninput = () => {
        ((this.preferences.volume = Number(l.value)),
          this.gain && (this.gain.gain.value = this.preferences.volume),
          this.save());
      }),
      r.append(l),
      this.panel.append(r));
    const c = document.createElement("p");
    ((c.className = "chat-tts-help"),
      t(
        c,
        "Можно писать на обоих языках без переключения настроек. Для смешанного текста выбирается преобладающий язык. Текст не переводится, команды не озвучиваются. Примеры слышите только вы.",
        "Write in either language without changing settings. Mixed text uses the dominant language. Text is not translated, commands stay silent. Only you hear the previews.",
      ),
      (this.status.id = "chat-tts-status"),
      this.status.setAttribute("role", "status"),
      this.panel.append(c, this.status),
      (h = document.querySelector('[data-settings-category="audio"]')) ==
        null || h.prepend(this.panel),
      (this.now.id = "chat-tts-now"),
      (this.now.hidden = !0),
      document.body.append(this.now));
    for (const d of ["pointerdown", "keydown", "touchend"])
      window.addEventListener(d, () => this.unlock(), { passive: !0 });
    (document.addEventListener("visibilitychange", () => {
      document.hidden ? this.stop() : this.unlock();
    }),
      window.addEventListener("beforeunload", () => this.disconnected()),
      Vo(() => {
        (e.forEach((d) => d()), this.render());
      }),
      window.setInterval(() => {
        this.online && !document.hidden && this.configure();
      }, 3e4),
      this.render());
  }
  save() {
    try {
      localStorage.setItem("fc-chat-tts", JSON.stringify(this.preferences));
    } catch {}
  }
  unlock() {
    if (this.local) {
      try {
        speechSynthesis.resume();
      } catch {}
      return;
    }
    if (!this.context)
      try {
        ((this.context = new AudioContext()),
          (this.gain = this.context.createGain()),
          (this.gain.gain.value = this.preferences.volume),
          this.gain.connect(this.context.destination));
      } catch {
        return;
      }
    this.context.state === "suspended"
      ? this.context
          .resume()
          .then(() => this.drain())
          .catch(() => {})
      : this.drain();
  }
  attach(e) {
    (this.disconnected(),
      (this.net = e),
      e.on(ue.S_CHAT_TTS, (t) => {
        try {
          const i = JSON.parse(t.str());
          if (i.kind === "status") ((this.ready = i.ready), this.render());
          else if (i.kind === "error")
            (this.endPreview(),
              (this.status.textContent =
                i.code === "busy"
                  ? co(
                      "Озвучка занята. Подождите пару секунд; текст доставлен в чат.",
                      "Speech is busy. Wait a moment; your chat text was delivered.",
                    )
                  : co(
                      "Озвучка временно недоступна. Текстовый чат продолжает работать.",
                      "Speech is temporarily unavailable. Text chat still works.",
                    )));
          else if (
            i.kind === "audio" &&
            this.online &&
            !document.hidden &&
            this.allowed(i)
          ) {
            if (
              !/^[a-z0-9]+-\d+$/.test(i.id) ||
              !jg.some((o) => o.id === i.voice) ||
              (i.preview &&
                (!this.previewTimer || i.voice !== this.previewVoice))
            )
              return;
            if (
              (i.preview && (this.stopAudio(), (this.queue = [])),
              this.queue.length >= 5)
            ) {
              const o = this.queue.findIndex((a) => !a.important);
              if (o >= 0) this.queue.splice(o, 1);
              else if (i.important) this.queue.shift();
              else return;
            }
            const s = i.important
              ? this.queue.findIndex((o) => !o.important)
              : -1;
            (this.queue.splice(s < 0 ? this.queue.length : s, 0, {
              ...i,
              at: Date.now(),
            }),
              this.drain());
          }
        } catch {}
      }));
  }
  connected() {
    var e;
    ((this.local = !!((e = this.net) != null && e.isLocal)),
      (this.online = !this.local),
      (this.ready = this.local),
      this.configure(),
      this.render());
  }
  disconnected() {
    ((this.online = !1),
      (this.ready = !1),
      this.stop(),
      (this.local = !1),
      this.decoded.clear(),
      this.render());
  }
  configure() {
    var e;
    this.online &&
      ((e = this.net) == null ||
        e.send(
          new Xe(ue.C_CHAT_TTS)
            .u8(0)
            .u8(this.preferences.enabled ? 1 : 0)
            .u8(this.preferences.publish ? 1 : 0)
            .str(this.preferences.voices.ru)
            .str(this.preferences.voices.en)
            .u8(+this.preferences.important)
            .u8(+this.preferences.combat),
        ));
  }
  render() {
    for (const e of Object.values(this.previews))
      e.disabled = (!this.online && !this.local) || !!this.previewTimer;
    this.status.textContent = this.local
      ? co(
          "Одиночный мир: озвучка использует голоса браузера. Доступные голоса зависят от системы.",
          "Solo world: speech uses browser voices. Available voices depend on your system.",
        )
      : this.online
        ? this.ready
          ? this.preferences.enabled
            ? co(
                "Озвучка включена. Напишите сообщение в чат — вы тоже услышите свой голос.",
                "Speech is on. Write a chat message to hear your own voice too.",
              )
            : this.preferences.important || this.preferences.combat
              ? co(
                  "Игровая озвучка включена. Сообщения игроков в чате выключены.",
                  "Game speech is enabled. Player chat messages are muted.",
                )
              : co(
                  "Все виды озвучки выключены. Примеры голосов доступны.",
                  "All speech categories are off. Voice previews are available.",
                )
          : co(
              "Ожидаем службу озвучки. Если она недоступна, текстовый чат работает как обычно.",
              "Waiting for speech service. Text chat works even if speech is unavailable.",
            )
        : co(
            "Прослушивание примера доступно после входа на сервер.",
            "Join a server to preview your voice.",
          );
  }
  testVoice(e) {
    var t;
    if (this.local) {
      this.localText(YJ(e), "preview");
      return;
    }
    if (!(!this.online || Date.now() - this.lastPreview < 2e3)) {
      (this.stop(),
        this.unlock(),
        this.configure(),
        (this.lastPreview = Date.now()),
        (this.previewVoice = e),
        (this.previewTimer = window.setTimeout(() => {
          (this.endPreview(),
            (this.status.textContent = co(
              "Не удалось получить пример. Попробуйте ещё раз.",
              "Preview failed. Please try again.",
            )));
        }, 2e4)));
      for (const i of Object.values(this.previews)) i.disabled = !0;
      ((this.status.textContent = co(
        "Готовим пример голоса…",
        "Preparing voice preview…",
      )),
        (t = this.net) == null || t.send(new Xe(ue.C_CHAT_TTS).u8(1).str(e)));
    }
  }
  endPreview() {
    (clearTimeout(this.previewTimer),
      (this.previewTimer = 0),
      (this.previewVoice = void 0));
    for (const e of Object.values(this.previews)) e.disabled = !this.online;
  }
  stopAudio() {
    var e, t;
    if (
      (this.generation++,
      (e = this.controller) == null || e.abort(),
      (this.controller = void 0),
      this.source)
    ) {
      this.source.onended = null;
      try {
        this.source.stop();
      } catch {}
      (this.source.disconnect(), (this.source = void 0));
    }
    (this.radioFilters.forEach((i) => i.disconnect()),
      (this.radioFilters = []),
      (t = this.finish) == null || t.call(this),
      (this.finish = void 0),
      (this.current = void 0),
      (this.busy = !1),
      (this.now.hidden = !0));
  }
  stop() {
    (this.stopAudio(),
      (this.queue = []),
      this.endPreview(),
      this.local && typeof speechSynthesis < "u" && speechSynthesis.cancel());
  }
  localText(e, t) {
    if (
      !this.local ||
      typeof speechSynthesis > "u" ||
      typeof SpeechSynthesisUtterance > "u" ||
      !(t === "chat"
        ? this.preferences.enabled
        : t === "important"
          ? this.preferences.important
          : t === "combat"
            ? this.preferences.combat
            : !0) ||
      !e.trim()
    )
      return;
    const s = e
      .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, "")
      .trim()
      .slice(0, 400);
    if (!s || s.startsWith("/")) return;
    const o = KJ(s),
      a = new SpeechSynthesisUtterance(s);
    ((a.lang = o === "ru" ? "ru-RU" : "en-US"),
      (a.volume = this.preferences.volume));
    const r = this.preferences.voices[o],
      l = qJ(speechSynthesis.getVoices(), o, r);
    ((a.voice = l ?? null),
      t === "preview" && speechSynthesis.cancel(),
      !speechSynthesis.pending && speechSynthesis.speak(a));
  }
  allowed(e) {
    return (
      e.preview ||
      (e.combat
        ? this.preferences.combat
        : e.important
          ? this.preferences.important
          : this.preferences.enabled)
    );
  }
  async drain() {
    var a, r;
    if (
      this.busy ||
      !this.online ||
      document.hidden ||
      ((a = this.context) == null ? void 0 : a.state) !== "running" ||
      !this.gain
    )
      return;
    let e;
    for (
      ;
      (e = this.queue.shift()) &&
      (!this.allowed(e) || Date.now() - e.at > (e.important ? 9e4 : 2e4));
    );
    if (!e) return;
    const t = (r = this.net) == null ? void 0 : r.voiceIceUrl;
    if (!t) return;
    const i = this.generation;
    ((this.busy = !0), (this.current = e));
    const s = new AbortController();
    this.controller = s;
    const o = window.setTimeout(() => s.abort(), 15e3);
    try {
      let l = this.decoded.get(e.id);
      if (!l) {
        const h = await fetch(new URL(`/api/chat-tts/audio/${e.id}`, t), {
          signal: s.signal,
          cache: "no-store",
        });
        if (!h.ok) throw new Error("Clip unavailable");
        if (
          ((l = await this.context.decodeAudioData(await h.arrayBuffer())),
          i !== this.generation)
        )
          return;
        this.decoded.set(e.id, l);
        let d = [...this.decoded.values()].reduce(
          (u, f) => u + f.length * f.numberOfChannels * 4,
          0,
        );
        for (const [u, f] of this.decoded) {
          if (d <= 8 * 1024 * 1024) break;
          (this.decoded.delete(u), (d -= f.length * f.numberOfChannels * 4));
        }
      }
      if (i !== this.generation) return;
      const c = this.context.createBufferSource();
      if (((c.buffer = l), e.radio)) {
        const h = this.context.createBiquadFilter(),
          d = this.context.createBiquadFilter();
        ((h.type = "highpass"),
          (h.frequency.value = 400),
          (h.Q.value = 0.7),
          (d.type = "lowpass"),
          (d.frequency.value = 2800),
          (d.Q.value = 0.7),
          c.connect(h),
          h.connect(d),
          d.connect(this.gain),
          (this.radioFilters = [h, d]));
      } else c.connect(this.gain);
      ((this.source = c),
        (this.now.textContent = e.preview
          ? co("Пример вашего голоса", "Your voice preview")
          : `♪ ${e.name}`),
        (this.now.hidden = !1),
        e.preview &&
          (this.status.textContent = co(
            "Воспроизводим ваш голос…",
            "Playing your voice…",
          )),
        await new Promise((h) => {
          ((this.finish = h), (c.onended = () => h()), c.start());
        }),
        c.disconnect(),
        i === this.generation &&
          e.preview &&
          (this.endPreview(), this.render()));
    } catch {
      i === this.generation &&
        (e.preview && this.endPreview(),
        (this.status.textContent = co(
          "Не удалось воспроизвести озвучку. Следующее сообщение попробуем снова.",
          "Could not play speech. The next message will try again.",
        )));
    } finally {
      (clearTimeout(o),
        i === this.generation &&
          (this.radioFilters.forEach((l) => l.disconnect()),
          (this.radioFilters = []),
          (this.source = void 0),
          (this.finish = void 0),
          (this.controller = void 0),
          (this.current = void 0),
          (this.busy = !1),
          (this.now.hidden = !0),
          this.drain()));
    }
  }
}
