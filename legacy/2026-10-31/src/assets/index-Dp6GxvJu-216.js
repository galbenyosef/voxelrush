// index-Dp6GxvJu 216 — connect
// Lines 120596-120908 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Vb(n, e, t, i, s) {
  const o = n.createGain();
  if (
    (o.connect(e),
    o.gain.setValueAtTime(0, i),
    o.gain.linearRampToValueAtTime(s, i + 0.004),
    t === "shaker")
  ) {
    const c = n.createBufferSource(),
      h = n.createBiquadFilter();
    return (
      (c.buffer = yie(n)),
      (h.type = "bandpass"),
      (h.frequency.value = 6500),
      (h.Q.value = 0.8),
      o.gain.exponentialRampToValueAtTime(1e-4, i + 0.06),
      c.connect(h).connect(o),
      c.start(i, Math.random() * 0.5),
      c.stop(i + 0.08),
      (c.onended = () => {
        (c.disconnect(), h.disconnect(), o.disconnect());
      }),
      [c]
    );
  }
  const a = n.createOscillator(),
    r = t === "kick" ? 92 : 150,
    l = t === "kick" ? 44 : 96;
  return (
    a.frequency.setValueAtTime(r, i),
    a.frequency.exponentialRampToValueAtTime(l, i + 0.14),
    o.gain.exponentialRampToValueAtTime(1e-4, i + (t === "kick" ? 0.26 : 0.32)),
    a.connect(o),
    a.start(i),
    a.stop(i + 0.35),
    (a.onended = () => {
      (a.disconnect(), o.disconnect());
    }),
    [a]
  );
}
const dp = (n) => n === "combat" || n === "raid" || n === "siege";
function bie(n) {
  return (n[1] - n[0] + 12) % 12 === 3 || (n[2] - n[0] + 12) % 12 === 3
    ? [0, 3, 5, 7, 10]
    : [0, 2, 4, 7, 9];
}
function wie(n, e, t, i, s) {
  var b;
  const o = qM[t],
    a = i % 16,
    r = Math.floor(i / 16),
    l = o.chords[r % 4],
    c = [],
    h = dp(t),
    d = !h && t !== "volcanic",
    u = kR(LR(t) * 977 + i * 131),
    f = (S, M, x, T = 0, A = 0, _ = o.voice) =>
      c.push(
        ...vie(
          n,
          e,
          S,
          s + A + (u() - 0.5) * 0.014,
          M * (0.88 + u() * 0.24),
          x,
          T,
          _,
        ),
      );
  if (
    (t === "desert" &&
      (a % 4 === 0 &&
        (f(l[0], 0.14, 1.8, -0.35), f(l[1], 0.08, 1.5, 0.25, 0.08)),
      (a === 0 || a === 8) && f(o.melody[a], 0.065, 2.5, 0.38, 0.16, "aulos")),
    a === 0 && t !== "desert")
  ) {
    f(l[0] - 12, 0.2, 3.4);
    const S = o.beat * 16;
    for (let M = 1; M < 4; M++)
      f(l[M], 0.03, S, (M - 2) * 0.45, M * 0.05, "pad");
  }
  a === 8 &&
    d &&
    t !== "desert" &&
    t !== "cave" &&
    f(l[0] - 12, 0.12, 2.4, 0, 0, "piano");
  const p = kR(LR(t) * 31 + Math.floor(r / 2) * 7919 + (r % 2) * 17),
    m = h ? 0.62 : t === "cave" || t === "moon" ? 0.28 : 0.44,
    y = bie(l);
  let g = ((b = o.melody) == null ? void 0 : b[a]) ?? -1;
  if (!o.melody) {
    const S = Array.from({ length: 16 }, () => p() < m),
      M = Array.from({ length: 16 }, () => Math.floor(p() * 3) - 1);
    if (((S[0] = !0), (S[15] = !1), S[a] && !(t === "cave" && a % 2))) {
      let x = 2;
      for (let _ = 1; _ <= a; _++)
        S[_] && (x = Math.max(0, Math.min(7, x + M[_])));
      const T = Math.floor(x / 5),
        A = y[x % 5];
      ((g = l[0] + 12 + T * 12 + A),
        a >= 12 && (g = l[1 + ((a + r) % 3)] + 12));
    }
  }
  if (
    (g >= 0 &&
      f(
        g,
        h ? 0.12 : 0.13,
        o.voice === "oud" || o.voice === "lyre" ? 1.25 : 2.3,
        a % 2 ? 0.24 : -0.24,
      ),
    d && (a === 6 || a === 14) && p() < 0.35)
  )
    for (let S = 0; S < 3; S++)
      f(
        l[(S + 1) % 4] + 24,
        0.035,
        1.6,
        0.5 - S * 0.5,
        S * o.beat * 0.5,
        "bell",
      );
  return (
    o.pulse &&
      ((a % 4 === 0 || a % 8 === 6) && f(31, o.pulse, 0.28, 0, 0, "piano"),
      a % 4 === 2 && f(50, o.pulse * 0.45, 0.11, 0.25, 0, "oud"),
      h && a % 2 === 0 && f(l[0], 0.07, 0.22, -0.2)),
    h &&
      (a % 4 === 0 && c.push(...Vb(n, e, "kick", s, 0.34)),
      a % 2 === 1 &&
        c.push(...Vb(n, e, "shaker", s, a % 4 === 3 ? 0.034 : 0.02)),
      r % 4 === 3 && a >= 13 && c.push(...Vb(n, e, "tom", s, 0.16))),
    t === "combat" && a % 4 === 2 && f(l[0] - 12, 0.12, 0.7),
    c
  );
}
function Mie(n, e) {
  const t = n.createBiquadFilter(),
    i = n.createGain();
  ((t.type = "lowpass"),
    (t.frequency.value = 5200),
    (t.Q.value = 0.3),
    (i.gain.value = 1));
  const s = n.createDelay(2),
    o = n.createDelay(2),
    a = n.createGain(),
    r = n.createGain(),
    l = n.createChannelMerger(2),
    c = n.createBiquadFilter();
  ((s.delayTime.value = 0.41),
    (o.delayTime.value = 0.61),
    (a.gain.value = 0.12),
    (r.gain.value = 0.22),
    (c.type = "lowpass"),
    (c.frequency.value = 2600));
  const h = n.createConvolver(),
    d = n.createGain(),
    u = Math.floor(n.sampleRate * 3.2),
    f = n.createBuffer(2, u, n.sampleRate);
  for (let p = 0; p < 2; p++) {
    const m = f.getChannelData(p);
    let y = 0;
    for (let g = 0; g < u; g++) {
      const b = g / u;
      ((y += (Math.random() * 2 - 1 - y) * (0.6 - 0.45 * b)),
        (m[g] = y * Math.pow(1 - b, 2.8) * (b < 0.02 ? b / 0.02 : 1)));
    }
  }
  return (
    (h.buffer = f),
    (d.gain.value = 0.34),
    t.connect(i).connect(e),
    t.connect(c),
    c.connect(s),
    c.connect(o),
    s.connect(l, 0, 0),
    o.connect(l, 0, 1),
    l.connect(a).connect(e),
    s.connect(r).connect(o),
    t.connect(h).connect(d).connect(e),
    { input: t, nodes: [t, i, s, o, a, r, l, c, h, d] }
  );
}
class Sie {
  constructor() {
    w(this, "ctx", null);
    w(this, "out", null);
    w(this, "bus", null);
    w(this, "nodes", []);
    w(this, "voices", new Set());
    w(this, "retired", []);
    w(this, "volume", 0.5);
    w(this, "mood", "open");
    w(this, "requested", "open");
    w(this, "timer", null);
    w(this, "nextAt", 0);
    w(this, "step", 0);
    w(this, "running", !1);
    w(this, "input", null);
  }
  start(e) {
    if (this.running) return;
    ((this.ctx = e),
      (this.running = !0),
      (this.step = 0),
      (this.nextAt = e.currentTime + 0.12));
    const t = e.createGain(),
      i = e.createDynamicsCompressor();
    ((i.threshold.value = -12),
      (i.knee.value = 12),
      (i.ratio.value = 3),
      (t.gain.value = 0),
      t.connect(i).connect(e.destination));
    const s = Mie(e, t);
    ((this.out = t),
      (this.input = s.input),
      (this.nodes = [t, i, ...s.nodes]),
      (this.mood = this.requested),
      this.newBus(e.currentTime),
      this.setVolume(this.volume),
      this.schedule());
  }
  newBus(e) {
    if (!(!this.ctx || !this.input)) {
      if (this.bus) {
        const t = this.bus.gain;
        (typeof t.cancelAndHoldAtTime == "function"
          ? t.cancelAndHoldAtTime(e)
          : (t.cancelScheduledValues(e), t.setValueAtTime(t.value, e)),
          t.linearRampToValueAtTime(0, e + 2.4),
          this.retired.push({ bus: this.bus, until: e + 7 }));
      }
      ((this.bus = this.ctx.createGain()),
        this.bus.gain.setValueAtTime(0, e),
        this.bus.gain.linearRampToValueAtTime(1, e + 2.4),
        this.bus.connect(this.input));
    }
  }
  setMood(e) {
    this.requested = e;
  }
  setVolume(e) {
    ((this.volume = clamp(e, 0, 1)),
      this.out &&
        this.ctx &&
        this.out.gain.setTargetAtTime(
          0.22 * this.volume * qM[this.mood].level,
          this.ctx.currentTime,
          0.6,
        ));
  }
  schedule() {
    if (!this.running || !this.ctx) return;
    const e = this.ctx.currentTime;
    this.nextAt < e - 0.2 && (this.nextAt = e + 0.05);
    for (let t = this.retired.length - 1; t >= 0; t--)
      this.retired[t].until <= e &&
        (this.retired[t].bus.disconnect(), this.retired.splice(t, 1));
    for (; this.nextAt < e + 0.2;) {
      if (
        (this.requested !== this.mood &&
          (this.step % 4 === 0 || dp(this.requested)) &&
          ((this.mood = this.requested),
          (this.step = 0),
          this.newBus(this.nextAt),
          this.setVolume(this.volume)),
        this.volume > 0 && this.bus)
      )
        for (const t of wie(
          this.ctx,
          this.bus,
          this.mood,
          this.step,
          this.nextAt,
        ))
          (this.voices.add(t),
            t.addEventListener("ended", () => this.voices.delete(t)));
      ((this.nextAt += qM[this.mood].beat), this.step++);
    }
    this.timer = setTimeout(() => this.schedule(), 80);
  }
  stop() {
    var e;
    ((this.running = !1),
      this.timer && clearTimeout(this.timer),
      (this.timer = null));
    for (const t of this.voices)
      try {
        t.stop();
      } catch {}
    (this.voices.clear(), (e = this.bus) == null || e.disconnect());
    for (const t of this.retired) t.bus.disconnect();
    this.retired = [];
    for (const t of this.nodes) t.disconnect();
    ((this.nodes = []),
      (this.ctx = null),
      (this.out = null),
      (this.bus = null),
      (this.input = null));
  }
}
function Eie(n) {
  let e = n;
  return function () {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
