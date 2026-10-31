// index-BeUlFSPp 238 — connect
// Lines 127638-127946 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function uM(s, e, t, i, n) {
  const o = s.createGain();
  if (
    (o.connect(e),
    o.gain.setValueAtTime(0, i),
    o.gain.linearRampToValueAtTime(n, i + 0.004),
    t === "shaker")
  ) {
    const c = s.createBufferSource(),
      h = s.createBiquadFilter();
    return (
      (c.buffer = Nle(s)),
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
  const a = s.createOscillator(),
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
const Z1 = (s) => s === "combat" || s === "raid" || s === "siege";
function Hle(s) {
  return (s[1] - s[0] + 12) % 12 === 3 || (s[2] - s[0] + 12) % 12 === 3
    ? [0, 3, 5, 7, 10]
    : [0, 2, 4, 7, 9];
}
function Ble(s, e, t, i, n) {
  const o = kE[t],
    a = i % 16,
    r = Math.floor(i / 16),
    l = o.chords[r % 4],
    c = [],
    h = Z1(t),
    d = !h && t !== "volcanic",
    u = sL(nL(t) * 977 + i * 131),
    f = (b, S, M, E = 0, A = 0, T = o.voice) =>
      c.push(
        ...Dle(
          s,
          e,
          b,
          n + A + (u() - 0.5) * 0.014,
          S * (0.88 + u() * 0.24),
          M,
          E,
          T,
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
    const b = o.beat * 16;
    for (let S = 1; S < 4; S++)
      f(l[S], 0.03, b, (S - 2) * 0.45, S * 0.05, "pad");
  }
  a === 8 &&
    d &&
    t !== "desert" &&
    t !== "cave" &&
    f(l[0] - 12, 0.12, 2.4, 0, 0, "piano");
  const p = sL(nL(t) * 31 + Math.floor(r / 2) * 7919 + (r % 2) * 17),
    m = h ? 0.62 : t === "cave" || t === "moon" ? 0.28 : 0.44,
    g = Hle(l);
  let y = o.melody?.[a] ?? -1;
  if (!o.melody) {
    const b = Array.from({ length: 16 }, () => p() < m),
      S = Array.from({ length: 16 }, () => Math.floor(p() * 3) - 1);
    if (((b[0] = !0), (b[15] = !1), b[a] && !(t === "cave" && a % 2))) {
      let M = 2;
      for (let T = 1; T <= a; T++)
        b[T] && (M = Math.max(0, Math.min(7, M + S[T])));
      const E = Math.floor(M / 5),
        A = g[M % 5];
      ((y = l[0] + 12 + E * 12 + A),
        a >= 12 && (y = l[1 + ((a + r) % 3)] + 12));
    }
  }
  if (
    (y >= 0 &&
      f(
        y,
        h ? 0.12 : 0.13,
        o.voice === "oud" || o.voice === "lyre" ? 1.25 : 2.3,
        a % 2 ? 0.24 : -0.24,
      ),
    d && (a === 6 || a === 14) && p() < 0.35)
  )
    for (let b = 0; b < 3; b++)
      f(
        l[(b + 1) % 4] + 24,
        0.035,
        1.6,
        0.5 - b * 0.5,
        b * o.beat * 0.5,
        "bell",
      );
  return (
    o.pulse &&
      ((a % 4 === 0 || a % 8 === 6) && f(31, o.pulse, 0.28, 0, 0, "piano"),
      a % 4 === 2 && f(50, o.pulse * 0.45, 0.11, 0.25, 0, "oud"),
      h && a % 2 === 0 && f(l[0], 0.07, 0.22, -0.2)),
    h &&
      (a % 4 === 0 && c.push(...uM(s, e, "kick", n, 0.34)),
      a % 2 === 1 &&
        c.push(...uM(s, e, "shaker", n, a % 4 === 3 ? 0.034 : 0.02)),
      r % 4 === 3 && a >= 13 && c.push(...uM(s, e, "tom", n, 0.16))),
    t === "combat" && a % 4 === 2 && f(l[0] - 12, 0.12, 0.7),
    c
  );
}
function zle(s, e) {
  const t = s.createBiquadFilter(),
    i = s.createGain();
  ((t.type = "lowpass"),
    (t.frequency.value = 5200),
    (t.Q.value = 0.3),
    (i.gain.value = 1));
  const n = s.createDelay(2),
    o = s.createDelay(2),
    a = s.createGain(),
    r = s.createGain(),
    l = s.createChannelMerger(2),
    c = s.createBiquadFilter();
  ((n.delayTime.value = 0.41),
    (o.delayTime.value = 0.61),
    (a.gain.value = 0.12),
    (r.gain.value = 0.22),
    (c.type = "lowpass"),
    (c.frequency.value = 2600));
  const h = s.createConvolver(),
    d = s.createGain(),
    u = Math.floor(s.sampleRate * 3.2),
    f = s.createBuffer(2, u, s.sampleRate);
  for (let p = 0; p < 2; p++) {
    const m = f.getChannelData(p);
    let g = 0;
    for (let y = 0; y < u; y++) {
      const b = y / u;
      ((g += (Math.random() * 2 - 1 - g) * (0.6 - 0.45 * b)),
        (m[y] = g * Math.pow(1 - b, 2.8) * (b < 0.02 ? b / 0.02 : 1)));
    }
  }
  return (
    (h.buffer = f),
    (d.gain.value = 0.34),
    t.connect(i).connect(e),
    t.connect(c),
    c.connect(n),
    c.connect(o),
    n.connect(l, 0, 0),
    o.connect(l, 0, 1),
    l.connect(a).connect(e),
    n.connect(r).connect(o),
    t.connect(h).connect(d).connect(e),
    { input: t, nodes: [t, i, n, o, a, r, l, c, h, d] }
  );
}
class Fle {
  ctx = null;
  out = null;
  bus = null;
  nodes = [];
  voices = new Set();
  retired = [];
  volume = 0.5;
  mood = "open";
  requested = "open";
  timer = null;
  nextAt = 0;
  step = 0;
  running = !1;
  input = null;
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
    const n = zle(e, t);
    ((this.out = t),
      (this.input = n.input),
      (this.nodes = [t, i, ...n.nodes]),
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
    ((this.volume = Oe(e, 0, 1)),
      this.out &&
        this.ctx &&
        this.out.gain.setTargetAtTime(
          0.22 * this.volume * kE[this.mood].level,
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
          (this.step % 4 === 0 || Z1(this.requested)) &&
          ((this.mood = this.requested),
          (this.step = 0),
          this.newBus(this.nextAt),
          this.setVolume(this.volume)),
        this.volume > 0 && this.bus)
      )
        for (const t of Ble(
          this.ctx,
          this.bus,
          this.mood,
          this.step,
          this.nextAt,
        ))
          (this.voices.add(t),
            t.addEventListener("ended", () => this.voices.delete(t)));
      ((this.nextAt += kE[this.mood].beat), this.step++);
    }
    this.timer = setTimeout(() => this.schedule(), 80);
  }
  stop() {
    ((this.running = !1),
      this.timer && clearTimeout(this.timer),
      (this.timer = null));
    for (const e of this.voices)
      try {
        e.stop();
      } catch {}
    (this.voices.clear(), this.bus?.disconnect());
    for (const e of this.retired) e.bus.disconnect();
    this.retired = [];
    for (const e of this.nodes) e.disconnect();
    ((this.nodes = []),
      (this.ctx = null),
      (this.out = null),
      (this.bus = null),
      (this.input = null));
  }
}
function Ule(s) {
  let e = s;
  return function () {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
