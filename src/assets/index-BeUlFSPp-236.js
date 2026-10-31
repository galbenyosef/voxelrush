// index-BeUlFSPp 236 — gain
// Lines 123368-127312 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Cle {
  ctx = null;
  master = null;
  limiter = null;
  noiseBuf = null;
  pinkBuf = null;
  brownBuf = null;
  reverbIn = null;
  sirenUntil = 0;
  muffle = null;
  submerged = !1;
  vehicleAudio = null;
  sfxVoices = 0;
  pickupReadyAt = 0;
  flybyReadyAt = 0;
  hullHitAt = 0;
  concussionToken = 0;
  baseVolume = 0.35;
  volumeMul = 1;
  ensure() {
    if (this.ctx) {
      this.ctx.state === "suspended" && this.ctx.resume();
      return;
    }
    ((this.ctx = new AudioContext()),
      (this.master = this.ctx.createGain()),
      (this.master.gain.value = this.baseVolume * this.volumeMul));
    const e = (this.limiter = this.ctx.createDynamicsCompressor());
    ((e.threshold.value = -8),
      (e.knee.value = 12),
      (e.ratio.value = 5),
      (e.attack.value = 0.003),
      (e.release.value = 0.18));
    const t = this.ctx.createBiquadFilter(),
      i = this.ctx.createBiquadFilter();
    ((t.type = "highshelf"),
      (t.frequency.value = 3400),
      (t.gain.value = -3),
      (i.type = "highpass"),
      (i.frequency.value = 28),
      (i.Q.value = 0.5),
      this.master
        .connect(e)
        .connect(t)
        .connect(i)
        .connect(this.ctx.destination));
    const n = this.ctx.sampleRate;
    this.noiseBuf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const o = this.noiseBuf.getChannelData(0);
    for (let h = 0; h < n; h++) o[h] = Math.random() * 2 - 1;
    ((this.pinkBuf = yle(this.ctx, 2)), (this.brownBuf = vle(this.ctx, 2)));
    const a = this.ctx.createConvolver(),
      r = this.ctx.createBiquadFilter(),
      l = this.ctx.createBiquadFilter(),
      c = this.ctx.createGain();
    ((a.buffer = ble(this.ctx, 1.9, 3.6)),
      (r.type = "highpass"),
      (r.frequency.value = 170),
      (l.type = "lowpass"),
      (l.frequency.value = 5200),
      (c.gain.value = 0.4),
      (this.reverbIn = this.ctx.createGain()),
      this.reverbIn
        .connect(r)
        .connect(a)
        .connect(l)
        .connect(c)
        .connect(this.master));
  }
  setVolume(e) {
    ((this.volumeMul = Math.max(0, Math.min(1, e))),
      this.master &&
        this.ctx &&
        this.master.gain.setTargetAtTime(
          this.baseVolume * this.volumeMul,
          this.ctx.currentTime,
          0.04,
        ),
      this.volumeMul || this.vehicleAudio?.stop());
  }
  setSubmerged(e) {
    !this.ctx ||
      !this.master ||
      this.submerged === e ||
      ((this.submerged = e),
      this.muffle ||
        ((this.muffle = this.ctx.createBiquadFilter()),
        (this.muffle.type = "lowpass"),
        (this.muffle.Q.value = 0.7),
        (this.muffle.frequency.value = 22e3),
        this.master.disconnect(),
        this.master
          .connect(this.muffle)
          .connect(this.limiter ?? this.ctx.destination)),
      this.muffle.frequency.setTargetAtTime(
        e ? 480 : 22e3,
        this.ctx.currentTime,
        0.12,
      ));
  }
  splash(e = 1) {
    this.ensure();
    const t = Math.min(1, 0.2 + e * 0.5);
    (this.noise(0.16 / (0.6 + e * 0.4), 1600, 0.4 * t, "bandpass", 0, 0.8),
      this.noise(0.42, 420, 0.5 * t, "lowpass", 0.02),
      this.tone(320, 90, 0.18, 0.16 * t, "sine"));
  }
  bubble() {
    this.ensure();
    const e = 700 + Math.random() * 900;
    this.tone(e, e * 1.9, 0.07, 0.05, "sine");
  }
  getContext() {
    return this.ctx;
  }
  updateVehicles(e, t, i, n) {
    !this.ctx ||
      !this.master ||
      !this.noiseBuf ||
      ((this.vehicleAudio ??= new rle(this.ctx, this.master, this.noiseBuf)),
      this.vehicleAudio.update(
        e,
        t,
        i,
        n,
        this.volumeMul > 0 && !document.hidden,
      ));
  }
  stopVehicles() {
    this.vehicleAudio?.stop();
  }
  layer(e) {
    const t = this.ctx,
      i = this.master;
    if (!t || !i || this.volumeMul === 0 || this.sfxVoices >= 160) return;
    const n =
        e.src === void 0 ||
        e.src === "white" ||
        e.src === "pink" ||
        e.src === "brown",
      o =
        e.src === "pink"
          ? (this.pinkBuf ?? this.noiseBuf)
          : e.src === "brown"
            ? (this.brownBuf ?? this.noiseBuf)
            : this.noiseBuf;
    if (n && !o) return;
    this.sfxVoices++;
    const a = t.currentTime + (e.delay ?? 0),
      r = a + e.dur,
      l = [];
    let c;
    if (n) {
      const m = t.createBufferSource();
      ((m.buffer = o),
        (m.loop = !0),
        (m.playbackRate.value = e.rate ?? 1),
        (c = m));
    } else {
      const m = t.createOscillator();
      ((m.type = e.src),
        m.frequency.setValueAtTime(e.f, a),
        e.to &&
          e.to !== e.f &&
          m.frequency.exponentialRampToValueAtTime(
            Math.max(20, e.to),
            a + e.dur * (e.sweep ?? 1),
          ),
        (c = m));
    }
    let h = c;
    if (n || e.type) {
      const m = t.createBiquadFilter();
      ((m.type = e.type ?? "lowpass"),
        (m.Q.value = e.Q ?? 0.7),
        m.frequency.setValueAtTime(
          Oe(n ? e.f : (e.cut ?? e.f * 4), 20, 2e4),
          a,
        ),
        n &&
          e.to &&
          e.to !== e.f &&
          m.frequency.exponentialRampToValueAtTime(
            Oe(e.to, 20, 2e4),
            a + e.dur * (e.sweep ?? 1),
          ),
        h.connect(m),
        (h = m),
        l.push(m));
    }
    const d = t.createGain(),
      u = Math.max(2e-4, e.gain),
      f = e.attack ?? 0.0015;
    (d.gain.setValueAtTime(1e-4, a),
      d.gain.exponentialRampToValueAtTime(u, a + f),
      e.hold && d.gain.setValueAtTime(u, a + f + e.hold),
      d.gain.exponentialRampToValueAtTime(1e-4, r),
      d.gain.linearRampToValueAtTime(0, r + 0.02),
      h.connect(d),
      l.push(d),
      d.connect(e.dest ?? i));
    let p = null;
    (e.send &&
      this.reverbIn &&
      ((p = t.createGain()),
      (p.gain.value = e.send),
      d.connect(p).connect(this.reverbIn)),
      c.start(a, n ? Math.random() * o.duration * 0.9 : 0),
      c.stop(r + 0.05),
      (c.onended = () => {
        (this.sfxVoices--, c.disconnect());
        for (const m of l) m.disconnect();
        p?.disconnect();
      }));
  }
  transient(e, t) {
    return (setTimeout(() => e.disconnect(), t * 1e3), e);
  }
  noise(e, t, i, n = "lowpass", o = 0, a = 0.7, r) {
    if (
      !this.ctx ||
      !this.master ||
      !this.noiseBuf ||
      this.volumeMul === 0 ||
      this.sfxVoices >= 160
    )
      return;
    this.sfxVoices++;
    const l = this.ctx.createBufferSource();
    ((l.buffer = this.noiseBuf), (l.loop = !0));
    const c = this.ctx.createBiquadFilter();
    ((c.type = n), (c.frequency.value = t), (c.Q.value = a));
    const h = this.ctx.createGain(),
      d = this.ctx.currentTime + o;
    (h.gain.setValueAtTime(1e-4, d),
      h.gain.exponentialRampToValueAtTime(
        Math.max(2e-4, i),
        d + Math.min(0.18, e * 0.08),
      ),
      h.gain.exponentialRampToValueAtTime(1e-4, d + e),
      h.gain.linearRampToValueAtTime(0, d + e + 0.025),
      l
        .connect(c)
        .connect(h)
        .connect(r ?? this.master),
      l.start(d, Math.random() * 0.5),
      l.stop(d + e + 0.05),
      (l.onended = () => {
        (this.sfxVoices--, l.disconnect(), c.disconnect(), h.disconnect());
      }));
  }
  tone(e, t, i, n, o = "sine", a = 0, r) {
    if (
      !this.ctx ||
      !this.master ||
      this.volumeMul === 0 ||
      this.sfxVoices >= 160
    )
      return;
    this.sfxVoices++;
    const l = this.ctx.createOscillator();
    l.type = o;
    const c = this.ctx.currentTime + a;
    (l.frequency.setValueAtTime(e, c),
      l.frequency.exponentialRampToValueAtTime(Math.max(20, t), c + i));
    const h = this.ctx.createGain();
    (h.gain.setValueAtTime(1e-4, c),
      h.gain.exponentialRampToValueAtTime(Math.max(2e-4, n), c + 0.0015),
      h.gain.exponentialRampToValueAtTime(1e-4, c + i),
      h.gain.linearRampToValueAtTime(0, c + i + 0.025),
      l.connect(h).connect(r ?? this.master),
      l.start(c),
      l.stop(c + i + 0.05),
      (l.onended = () => {
        (this.sfxVoices--, l.disconnect(), h.disconnect());
      }));
  }
  shot(e, t = 0, i = !1, n = 1, o = 0) {
    if (this.volumeMul === 0 || this.sfxVoices >= 150) return;
    this.ensure();
    const a = tL[e] ?? tL.default,
      r = this.ctx,
      l = this.master;
    if (!r || !l) return;
    const c = i ? Math.min(a.range, 58) : a.range;
    if (t >= c || n <= 0.001) return;
    const h = Oe((c - t) / (c * 0.34), 0, 1),
      d = (1 / (1 + t * 0.05)) * h * Oe(n, 0, 1),
      u = Math.min(1, t / 45),
      f = 0.965 + Math.random() * 0.07,
      p = 0.9 + Math.random() * 0.2,
      m = Math.min(t / 343, 1),
      g = m + 3.5,
      y = this.transient(r.createStereoPanner(), g);
    ((y.pan.value = Oe(o, -1, 1)), y.connect(l));
    let b = y;
    if (i) {
      const ne = this.transient(r.createBiquadFilter(), g);
      ((ne.type = "lowpass"),
        (ne.frequency.value = 1500),
        (ne.Q.value = 0.5),
        ne.connect(b),
        (b = ne));
    }
    const S = this.transient(r.createBiquadFilter(), g);
    ((S.type = "lowpass"),
      (S.frequency.value = 17e3 / (1 + u * 5.5)),
      (S.Q.value = 0.5),
      S.connect(b),
      (b = S));
    const M = (ne) =>
        this.layer({ ...ne, delay: (ne.delay ?? 0) + m, dest: b }),
      E = i ? 0.3 : 1,
      A = a.send * (1 + u * 1.5) * (i ? 0.5 : 1),
      [T, x, R] = a.crack,
      [_, C, P, O] = a.body,
      [B, H, D, U] = a.punch,
      [W, J, j] = a.tail;
    if (
      (x > 0 &&
        u < 0.95 &&
        M({
          src: "white",
          type: "highpass",
          f: T * f,
          to: T * 0.55 * f,
          dur: R * (i ? 0.6 : 1),
          gain: x * d * E * p * (1 - u * 0.8),
          Q: 0.6,
          attack: 5e-4,
        }),
      M({
        src: "pink",
        type: "lowpass",
        f: _ * f,
        to: C,
        dur: P,
        gain: O * d * p * (i ? 0.45 : 1),
        Q: 0.9,
        attack: 0.001,
        send: A * 0.6,
      }),
      M({
        src: "sine",
        f: B * f,
        to: H,
        dur: D,
        gain: U * d * (1 + u * 0.25) * (i ? 0.55 : 1),
        attack: 0.002,
      }),
      a.mech && u < 0.6)
    ) {
      const [ne, ge, be] = a.mech;
      M({
        src: "white",
        type: "bandpass",
        f: ne * f,
        dur: 0.02,
        gain: ge * d * (1 - u),
        Q: 2.2,
        delay: be,
        attack: 8e-4,
      });
    }
    if (
      (M({
        src: e === "tank" || e === "mortar" || e === "awp" ? "brown" : "pink",
        type: "lowpass",
        f: W,
        to: W * 0.6,
        dur: J * (1 + u * 0.8),
        gain: j * d * (1 + u * 0.9) * (i ? 0.45 : 1),
        attack: 0.01,
        send: A,
      }),
      a.ring && u < 0.7)
    ) {
      const [ne, ge, be] = a.ring;
      M({
        src: "triangle",
        f: ne * f,
        to: ne * 0.97 * f,
        dur: ge,
        gain: be * d * (1 - u) * E,
      });
    }
    (i &&
      M({
        src: "pink",
        type: "bandpass",
        f: 950 * f,
        to: 600,
        dur: 0.08,
        gain: 0.32 * d,
        Q: 1.1,
        attack: 0.001,
      }),
      t > 18 &&
        M({
          src: "pink",
          type: "lowpass",
          f: 650,
          to: 280,
          dur: 0.45 + u * 0.6,
          gain: 0.2 * d * (0.45 + u),
          delay: 0.2 + u * 0.55 + Math.random() * 0.12,
          attack: 0.03,
          send: A * 1.3,
        }),
      e === "rpg"
        ? (M({
            src: "pink",
            type: "bandpass",
            f: 520,
            to: 2100,
            dur: 1.1,
            gain: 0.42 * d,
            Q: 0.7,
            attack: 0.02,
            send: A,
          }),
          M({
            src: "white",
            type: "highpass",
            f: 3200,
            to: 5200,
            dur: 0.8,
            gain: 0.08 * d,
            attack: 0.03,
            delay: 0.05,
          }))
        : e === "tank"
          ? M({
              src: "brown",
              type: "lowpass",
              f: 1100,
              to: 110,
              dur: 0.9,
              gain: 0.75 * d * p,
              attack: 0.003,
              send: A,
            })
          : e === "mortar"
            ? (M({
                src: "sine",
                f: 330 * f,
                to: 205 * f,
                dur: 0.26,
                gain: 0.28 * d,
              }),
              M({
                src: "triangle",
                f: 660 * f,
                to: 410 * f,
                dur: 0.14,
                gain: 0.06 * d,
              }))
            : e === "shotgun"
              ? M({
                  src: "brown",
                  type: "lowpass",
                  f: 900,
                  to: 160,
                  dur: 0.32,
                  gain: 0.45 * d * p,
                  attack: 0.002,
                  send: A * 0.6,
                })
              : e === "deagle"
                ? (M({
                    src: "brown",
                    type: "lowpass",
                    f: 1e3,
                    to: 130,
                    dur: 0.36,
                    gain: 0.5 * d * p * (i ? 0.4 : 1),
                    attack: 0.002,
                    send: A * 0.7,
                  }),
                  u < 0.5 &&
                    M({
                      src: "white",
                      type: "bandpass",
                      f: 1800 * f,
                      dur: 0.03,
                      gain: 0.12 * d * (1 - u),
                      Q: 1.4,
                      delay: 0.055,
                      attack: 0.001,
                    }))
                : e === "smg" &&
                  u < 0.5 &&
                  M({
                    src: "white",
                    type: "bandpass",
                    f: 2900 * f,
                    dur: 0.012,
                    gain: 0.07 * d * (1 - u),
                    Q: 2.4,
                    delay: 0.035,
                    attack: 8e-4,
                  }));
  }
  flyby(e, t, i = 0, n = !1) {
    if (e > (n ? 18 : 7) || this.volumeMul === 0 || this.sfxVoices >= 156)
      return;
    this.ensure();
    const o = this.ctx;
    if (o.currentTime < this.flybyReadyAt) return;
    this.flybyReadyAt = o.currentTime + (n ? 0.18 : 0.045);
    const a = o.createStereoPanner(),
      r = o.currentTime + Math.min(0.6, i);
    (a.pan.setValueAtTime(Oe(t, -1, 1), r),
      a.pan.linearRampToValueAtTime(Oe(t * 0.4, -1, 1), r + 0.16),
      a.connect(this.master));
    const l = (n ? 0.35 : 0.48) * Math.pow(1 - e / (n ? 20 : 8), 1.3),
      c = r - o.currentTime;
    (n ||
      (this.noise(0.012, 2600, l, "highpass", c, 0.55, a),
      this.noise(0.021, 1400, l * 0.7, "bandpass", c + 0.012, 1, a)),
      this.noise(
        n ? 0.5 : 0.12,
        n ? 800 : 3800,
        l * 0.5,
        "bandpass",
        c + 0.018,
        0.75,
        a,
      ),
      this.tone(
        n ? 580 : 2400,
        n ? 180 : 750,
        n ? 0.38 : 0.095,
        l * 0.13,
        "sine",
        c + 0.018,
        a,
      ),
      setTimeout(() => a.disconnect(), (c + 0.8) * 1e3));
  }
  tomahawkLaunch(e = 0) {
    this.ensure();
    const t = 1 / (1 + e * 0.032);
    (this.noise(0.16, 1500, 0.34 * t, "highpass", 0, 0.55),
      this.noise(2.45, 240, 0.9 * t, "lowpass", 0.03, 0.55),
      this.tone(88, 34, 2.25, 0.66 * t, "sawtooth", 0.05),
      this.tone(52, 24, 2.5, 0.48 * t, "sine", 0.08),
      this.noise(2.1, 920, 0.36 * t, "bandpass", 0.12, 1));
  }
  nuclearLaunch(e = 0) {
    this.ensure();
    const t = 1 / (1 + e * 0.018);
    (this.noise(0.28, 1100, 0.42 * t, "bandpass", 0, 0.7),
      this.noise(3.8, 145, 0.95 * t, "lowpass", 0.04, 0.5),
      this.tone(58, 24, 3.6, 0.72 * t, "sawtooth", 0.05),
      this.tone(34, 20, 4.1, 0.62 * t, "sine", 0.1),
      this.noise(2.8, 700, 0.24 * t, "bandpass", 0.18, 0.9));
  }
  explosion(e, t = 1) {
    if (e >= 300 || t <= 0.001 || this.volumeMul === 0) return;
    const n = Oe((300 - e) / 90, 0, 1),
      o = (1 / (1 + e * 0.022)) * n * Oe(t, 0, 1);
    this.ensure();
    const a = this.ctx,
      r = this.master;
    if (!a || !r) return;
    const l = e / 343,
      c = Oe(e / 180, 0, 1),
      h = 1 - Oe(e / 45, 0, 1),
      d = 0.93 + Math.random() * 0.14,
      u = this.transient(a.createBiquadFilter(), l + 5);
    ((u.type = "lowpass"),
      (u.frequency.value = 14e3 / (1 + c * 9)),
      (u.Q.value = 0.5),
      u.connect(r));
    const f = (p) => this.layer({ ...p, delay: (p.delay ?? 0) + l, dest: u });
    if (
      (c < 0.7 &&
        f({
          src: "white",
          type: "highpass",
          f: 1900 * d,
          to: 900,
          dur: 0.06,
          gain: 0.75 * o * (1 - c),
          attack: 6e-4,
        }),
      f({
        src: "sine",
        f: 78 * d,
        to: 24,
        dur: 0.75,
        gain: 0.95 * o,
        attack: 0.003,
      }),
      f({
        src: "brown",
        type: "lowpass",
        f: 2400 * d * (1 - c * 0.6),
        to: 190,
        dur: 0.8,
        gain: 0.85 * o,
        Q: 0.8,
        attack: 0.002,
        send: 0.45,
      }),
      f({
        src: "pink",
        type: "bandpass",
        f: 880 * d,
        to: 420,
        dur: 0.38,
        gain: 0.32 * o * (1 - c * 0.6),
        Q: 0.8,
        attack: 0.002,
      }),
      f({
        src: "brown",
        type: "lowpass",
        f: 190,
        to: 110,
        dur: 2.6 + c,
        gain: 0.5 * o * (0.75 + c * 0.5),
        attack: 0.06,
        delay: 0.04,
        send: 0.55,
      }),
      f({
        src: "brown",
        type: "lowpass",
        f: 125,
        dur: 3.3 + c * 1.2,
        gain: 0.28 * o,
        attack: 0.35,
        delay: 0.3,
        send: 0.7,
      }),
      e > 40 &&
        f({
          src: "pink",
          type: "lowpass",
          f: 420,
          to: 180,
          dur: 1.4,
          gain: 0.22 * o,
          attack: 0.05,
          delay: 0.55 + c * 0.9,
          send: 0.8,
        }),
      h > 0)
    ) {
      for (let p = 0; p < 9; p++) {
        const m = 0.22 + Math.random() * 1.25,
          g = 1800 + Math.random() * 3600;
        f({
          src: "pink",
          type: "bandpass",
          f: g,
          dur: 0.012 + Math.random() * 0.025,
          gain: (0.04 + Math.random() * 0.09) * h * o * (1.2 - m * 0.5),
          Q: 2,
          delay: m,
          attack: 6e-4,
        });
      }
      f({
        src: "white",
        type: "highpass",
        f: 3600,
        to: 2400,
        dur: 1.5,
        gain: 0.035 * h * o,
        attack: 0.3,
        delay: 0.15,
      });
    }
  }
  distantRumble(e, t = !1) {
    if (this.volumeMul === 0) return;
    this.ensure();
    const i = this.ctx,
      n = this.master;
    if (!i || !n) return;
    const o = Oe(1.6 / (1 + e * 0.004), 0, 0.5) * (t ? 0.8 : 1),
      a = Math.min(e / 343, 7),
      r = 0.9 + Math.random() * 0.2,
      l = (c) => this.layer({ ...c, delay: (c.delay ?? 0) + a });
    (l({
      src: "sine",
      f: (t ? 92 : 58) * r,
      to: 26,
      dur: t ? 0.45 : 0.9,
      gain: 0.7 * o,
      attack: 0.006,
    }),
      l({
        src: "brown",
        type: "lowpass",
        f: t ? 420 : 240,
        to: 90,
        dur: t ? 1.2 : 2.6,
        gain: 0.65 * o,
        attack: 0.02,
        send: 0.8,
      }),
      l({
        src: "brown",
        type: "lowpass",
        f: 120,
        dur: t ? 1.6 : 3.8,
        gain: 0.3 * o,
        attack: 0.3,
        delay: 0.25,
        send: 0.9,
      }));
  }
  blast(e, t, i = 1, n = 4) {
    if (e === Wt.NUCLEAR || n >= 80) {
      this.nuclearExplosion(t, i);
      return;
    }
    const o = 300 + Math.min(500, n * 14);
    if (t >= o || i <= 0.001 || this.volumeMul === 0) return;
    this.ensure();
    const a = this.ctx,
      r = this.master;
    if (!a || !r) return;
    const l = Oe((o - t) / 90, 0, 1),
      c = (1 / (1 + t * 0.022)) * l * Oe(i, 0, 1),
      h = t / 343,
      d = Oe(t / 180, 0, 1),
      u = 1 - Oe(t / 45, 0, 1),
      f = this.transient(a.createBiquadFilter(), h + 8);
    ((f.type = "lowpass"),
      (f.frequency.value = 14e3 / (1 + d * 9)),
      (f.Q.value = 0.5),
      f.connect(r));
    const p = (S) => this.layer({ ...S, delay: (S.delay ?? 0) + h, dest: f }),
      m = Oe(n / 5, 0.4, 4),
      g = 1 / Math.sqrt(m),
      y = Math.pow(m, 0.35),
      b = (S, M = 1) => {
        const E = (0.93 + Math.random() * 0.14) * g;
        if (
          (d < 0.7 &&
            p({
              src: "white",
              type: "highpass",
              f: 1900 * E,
              to: 900,
              dur: 0.06,
              gain: 0.75 * c * M * (1 - d),
              attack: 6e-4,
              delay: S,
            }),
          p({
            src: "sine",
            f: 78 * E,
            to: 22,
            dur: 0.75 * y,
            gain: 0.95 * c * M,
            attack: 0.003,
            delay: S,
          }),
          p({
            src: "brown",
            type: "lowpass",
            f: 2400 * E * (1 - d * 0.6),
            to: 170,
            dur: 0.8 * y,
            gain: 0.85 * c * M,
            Q: 0.8,
            attack: 0.002,
            send: 0.45,
            delay: S,
          }),
          p({
            src: "pink",
            type: "bandpass",
            f: 880 * E,
            to: 420,
            dur: 0.38,
            gain: 0.32 * c * M * (1 - d * 0.6),
            Q: 0.8,
            attack: 0.002,
            delay: S,
          }),
          p({
            src: "brown",
            type: "lowpass",
            f: 190 * E,
            to: 100,
            dur: (2.6 + d) * y,
            gain: 0.5 * c * M * (0.75 + d * 0.5),
            attack: 0.06,
            delay: S + 0.04,
            send: 0.55,
          }),
          p({
            src: "brown",
            type: "lowpass",
            f: 125 * E,
            dur: (3.3 + d * 1.2) * y,
            gain: 0.28 * c * M,
            attack: 0.35,
            delay: S + 0.3,
            send: 0.7,
          }),
          t > 40 &&
            p({
              src: "pink",
              type: "lowpass",
              f: 420,
              to: 180,
              dur: 1.4 * y,
              gain: 0.22 * c * M,
              attack: 0.05,
              delay: S + 0.55 + d * 0.9,
              send: 0.8,
            }),
          u > 0)
        )
          for (let A = 0; A < 9; A++) {
            const T = 0.22 + Math.random() * 1.25 * y,
              x = 1800 + Math.random() * 3600;
            p({
              src: "pink",
              type: "bandpass",
              f: x,
              dur: 0.012 + Math.random() * 0.025,
              gain: (0.04 + Math.random() * 0.09) * u * c * M * (1.2 - T * 0.5),
              Q: 2,
              delay: S + T,
              attack: 6e-4,
            });
          }
      };
    switch (e) {
      case Wt.C4:
      case Wt.BREACH:
        (p({
          src: "white",
          type: "highpass",
          f: 4200,
          to: 2600,
          dur: 0.045,
          gain: 1.05 * c * (1 - d * 0.8),
          attack: 4e-4,
        }),
          p({
            src: "square",
            f: 2900,
            to: 1400,
            dur: 0.07,
            gain: 0.08 * c * (1 - d),
            type: "bandpass",
            cut: 2400,
            Q: 3,
          }),
          b(0, 0.95));
        break;
      case Wt.DYNAMITE:
      case Wt.DYNAMITE_SMALL:
        (p({
          src: "pink",
          type: "bandpass",
          f: 1500,
          to: 600,
          dur: 0.14,
          gain: 0.5 * c,
          Q: 1.2,
          attack: 8e-4,
        }),
          b(0, 0.9));
        break;
      case Wt.DYNAMITE_BUNDLE:
        for (let S = 0; S < 4; S++)
          p({
            src: "white",
            type: "bandpass",
            f: 2400 - S * 300,
            dur: 0.035,
            gain: 0.45 * c,
            Q: 1.5,
            attack: 6e-4,
            delay: S * 0.045,
          });
        b(0.18, 1);
        break;
      case Wt.FRAG:
        if ((b(0, 0.9), t < 120))
          for (let S = 0; S < 9; S++) {
            const M = 0.03 + Math.random() * 0.45,
              E = 2600 + Math.random() * 2400;
            (p({
              src: "white",
              type: "bandpass",
              f: E,
              to: E * 0.45,
              dur: 0.12 + Math.random() * 0.12,
              gain: 0.09 * c * (1 - d),
              Q: 5,
              delay: M,
              attack: 0.004,
            }),
              Math.random() < 0.5 &&
                p({
                  src: "triangle",
                  f: 3200 + Math.random() * 2600,
                  to: 2800,
                  dur: 0.06,
                  gain: 0.03 * c * u,
                  delay: M + 0.1,
                }));
          }
        break;
      case Wt.INCENDIARY:
        (b(0, 0.75),
          p({
            src: "brown",
            type: "lowpass",
            f: 380,
            to: 1500,
            dur: 1.4,
            gain: 0.6 * c,
            attack: 0.08,
            send: 0.5,
          }),
          p({
            src: "pink",
            type: "bandpass",
            f: 700,
            to: 420,
            dur: 5,
            gain: 0.22 * c,
            Q: 0.7,
            attack: 0.4,
            delay: 0.3,
            send: 0.4,
          }));
        for (let S = 0; S < 18; S++)
          p({
            src: "white",
            type: "bandpass",
            f: 1800 + Math.random() * 2500,
            dur: 0.02,
            gain: (0.05 + Math.random() * 0.06) * c,
            Q: 2,
            attack: 6e-4,
            delay: 0.4 + Math.random() * 4.5,
          });
        break;
      case Wt.THERMOBARIC:
        (p({
          src: "white",
          type: "bandpass",
          f: 900,
          to: 3200,
          dur: 0.55,
          gain: 0.3 * c,
          Q: 1.2,
          attack: 0.2,
        }),
          p({
            src: "brown",
            type: "lowpass",
            f: 300,
            to: 90,
            dur: 0.5,
            gain: 0.3 * c,
            attack: 0.15,
          }),
          b(0.55, 1.25),
          p({
            src: "sine",
            f: 40,
            to: 16,
            dur: 2.4,
            gain: 1 * c,
            attack: 0.02,
            delay: 0.57,
          }),
          p({
            src: "brown",
            type: "lowpass",
            f: 600,
            to: 200,
            dur: 4,
            gain: 0.4 * c,
            attack: 0.3,
            delay: 0.9,
            send: 0.6,
          }));
        break;
      case Wt.HEAVY:
      case Wt.TOMAHAWK:
      case Wt.AIR_BOMB:
        (b(0, 1.15),
          p({
            src: "sine",
            f: 48,
            to: 17,
            dur: 1.8 * y,
            gain: 0.9 * c,
            attack: 0.01,
            delay: 0.02,
          }),
          p({
            src: "brown",
            type: "lowpass",
            f: 95,
            dur: 5 * y,
            gain: 0.45 * c,
            attack: 0.5,
            delay: 0.4,
            send: 0.8,
          }));
        break;
      case Wt.MINE:
        (p({
          src: "sine",
          f: 95,
          to: 30,
          dur: 0.4,
          gain: 0.7 * c,
          attack: 0.002,
        }),
          b(0, 0.85));
        break;
      default:
        b(0, 1);
    }
  }
  bombBeep(e, t) {
    if (e > 40 || this.volumeMul === 0) return;
    this.ensure();
    const i = Math.max(0, 1 - e / 40) ** 1.3,
      n = 1800 + t * 900;
    (this.tone(n, n, 0.06, 0.12 * i, "square"),
      this.tone(n * 2, n * 2, 0.05, 0.03 * i, "sine"));
  }
  fuseHiss(e) {
    if (e > 24 || this.volumeMul === 0) return;
    this.ensure();
    const t = Math.max(0, 1 - e / 24) ** 1.3;
    this.noise(0.18, 4200 + Math.random() * 1800, 0.05 * t, "bandpass", 0, 2.5);
  }
  nuclearExplosion(e, t = 1) {
    if (e >= 1150 || t <= 0.001 || this.volumeMul === 0) return;
    const n = Oe((1150 - e) / 260, 0, 1),
      o = (1 / (1 + e * 0.012)) * n * Oe(t, 0, 1);
    (this.ensure(),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 900,
        to: 160,
        dur: 1.4,
        gain: 1.2 * o,
        attack: 0.004,
        send: 0.5,
      }),
      this.layer({
        src: "sine",
        f: 52,
        to: 17,
        dur: 2.2,
        gain: 1.1 * o,
        attack: 0.01,
        delay: 0.02,
      }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 105,
        dur: 3.2,
        gain: 0.9 * o,
        attack: 0.25,
        delay: 0.28,
        send: 0.7,
      }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 240,
        to: 120,
        dur: 5.5,
        gain: 0.42 * o,
        attack: 0.8,
        delay: 1,
        send: 0.9,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 700,
        to: 220,
        dur: 1.2,
        gain: 0.2 * o,
        Q: 0.7,
        attack: 0.01,
        delay: 0.05,
        send: 0.6,
      }));
  }
  concussion(e, t) {
    if ((this.ensure(), !this.ctx || !this.master)) return;
    const i = Oe(e, 0, 1),
      n = Oe(t / 1e3, 0.35, 4.2);
    (this.muffle ||
      ((this.muffle = this.ctx.createBiquadFilter()),
      (this.muffle.type = "lowpass"),
      (this.muffle.Q.value = 0.7),
      (this.muffle.frequency.value = 22e3),
      this.master.disconnect(),
      this.master
        .connect(this.muffle)
        .connect(this.limiter ?? this.ctx.destination)),
      this.muffle.frequency.cancelScheduledValues(this.ctx.currentTime),
      this.muffle.frequency.setTargetAtTime(
        420 + (1 - i) * 900,
        this.ctx.currentTime,
        0.025,
      ));
    const o = this.ctx.createGain();
    ((o.gain.value = this.baseVolume * this.volumeMul),
      o.connect(this.ctx.destination),
      this.tone(5600 - i * 900, 3900, n, 0.055 + i * 0.105, "sine", 0, o),
      this.tone(3150, 2450, n * 0.72, 0.018 + i * 0.035, "sine", 0.03, o));
    const a = ++this.concussionToken;
    window.setTimeout(() => {
      a !== this.concussionToken ||
        !this.ctx ||
        !this.muffle ||
        (this.muffle.frequency.setTargetAtTime(
          this.submerged ? 480 : 22e3,
          this.ctx.currentTime,
          0.45,
        ),
        window.setTimeout(() => o.disconnect(), 900));
    }, n * 1e3);
  }
  siren() {
    this.ensure();
    const e = this.ctx,
      t = this.master;
    if (!e || !t || this.volumeMul === 0) return;
    const i = e.currentTime;
    if (i < this.sirenUntil) return;
    this.sirenUntil = i + 3.4;
    const n = e.createGain(),
      o = e.createBiquadFilter(),
      a = e.createBiquadFilter();
    ((o.type = "lowpass"),
      (o.frequency.value = 1700),
      (o.Q.value = 0.4),
      (a.type = "peaking"),
      (a.frequency.value = 780),
      (a.Q.value = 0.9),
      (a.gain.value = 4),
      n.gain.setValueAtTime(1e-4, i),
      n.gain.exponentialRampToValueAtTime(0.085, i + 0.35),
      n.gain.setValueAtTime(0.085, i + 2.4),
      n.gain.exponentialRampToValueAtTime(1e-4, i + 3.6),
      o.connect(a).connect(n).connect(t));
    const r = e.createGain();
    ((r.gain.value = 0.9),
      this.reverbIn && n.connect(r).connect(this.reverbIn));
    const l = e.createOscillator(),
      c = e.createGain();
    ((l.frequency.value = 5.2), (c.gain.value = 5));
    const h = [l];
    for (const [d, u, f] of [
      ["sawtooth", 0, 0.18],
      ["triangle", 9, 0.7],
      ["triangle", -7, 0.45],
    ]) {
      const p = e.createOscillator(),
        m = e.createGain();
      ((p.type = d),
        (p.detune.value = u),
        (m.gain.value = f),
        p.frequency.setValueAtTime(190, i),
        p.frequency.setTargetAtTime(610, i + 0.05, 0.55),
        p.frequency.setTargetAtTime(215, i + 2.35, 0.45),
        c.connect(p.frequency),
        p.connect(m).connect(o),
        h.push(p));
    }
    l.connect(c);
    for (const d of h) (d.start(i), d.stop(i + 3.7));
    h[0].onended = () => {
      for (const d of [...h, c, o, a, n, r]) d.disconnect();
    };
  }
  reload() {
    (this.noise(0.05, 3e3, 0.25, "highpass"),
      setTimeout(() => this.noise(0.05, 2500, 0.3, "highpass"), 160));
  }
  foley(e, t = 0) {
    if (this.volumeMul === 0 || this.sfxVoices >= 140) return;
    this.ensure();
    const n =
        (t === w.DEAGLE
          ? 0.82
          : t === w.VECTOR
            ? 1.1
            : t === w.GLOCK
              ? 1.05
              : 1) *
        (0.95 + Math.random() * 0.1),
      o = t === w.DEAGLE ? 1.25 : 1,
      a = (d) => this.layer(d),
      r = (d, u, f = 0) =>
        a({
          src: "white",
          type: "bandpass",
          f: d * n,
          dur: 0.014,
          gain: u,
          Q: 2.2,
          delay: f,
          attack: 6e-4,
        }),
      l = (d, u, f, p, m = 0) =>
        a({
          src: "pink",
          type: "bandpass",
          f: d * n,
          to: u * n,
          dur: f,
          gain: p,
          Q: 1.4,
          delay: m,
          attack: 0.006,
          sweep: 0.8,
        }),
      c = (d, u, f = 0) =>
        a({
          src: "triangle",
          f: d * n,
          to: d * 0.93 * n,
          dur: 0.09,
          gain: u,
          delay: f,
          attack: 0.001,
        }),
      h = (d, u, f = 0) =>
        a({
          src: "sine",
          f: d * n,
          to: d * 0.55 * n,
          dur: 0.06,
          gain: u,
          delay: f,
          attack: 0.002,
        });
    switch (e) {
      case "magRelease":
        (r(3300, 0.07), c(2500, 0.012, 0.004));
        break;
      case "magOut":
        (l(1500, 900, 0.08, 0.06), r(2500, 0.07, 0.06));
        break;
      case "magIn":
        (l(1e3, 1700, 0.06, 0.055),
          r(2700, 0.16 * o, 0.058),
          h(165, 0.1 * o, 0.058),
          c(1900, 0.018, 0.06));
        break;
      case "magTap":
        (a({
          src: "brown",
          type: "lowpass",
          f: 900 * n,
          dur: 0.05,
          gain: 0.16,
          attack: 0.002,
        }),
          r(2400, 0.06, 0.004));
        break;
      case "grab":
        (l(700, 1250, 0.16, 0.045),
          a({
            src: "white",
            type: "highpass",
            f: 4200,
            dur: 0.07,
            gain: 0.014,
            delay: 0.05,
            attack: 0.01,
          }));
        break;
      case "cloth":
        l(480, 900, 0.24, 0.032);
        break;
      case "adsIn":
        (l(430, 780, 0.13, 0.02), r(1900, 0.012, 0.07));
        break;
      case "draw":
        (l(600, 1400, 0.2, 0.045), r(3e3, 0.05, 0.15), c(2200, 0.01, 0.15));
        break;
      case "dry":
        (r(3700, 0.12), c(2900, 0.02, 0.002));
        break;
      case "catch":
        (a({
          src: "brown",
          type: "lowpass",
          f: 750 * n,
          dur: 0.045,
          gain: 0.13,
          attack: 0.002,
        }),
          r(3100, 0.07, 0.006));
        break;
      case "slideBack":
      case "boltBack":
      case "chargeBack":
        (l(2300, 1500, 0.075, 0.065 * o), r(2700, 0.08, 0.07));
        break;
      case "slideFwd":
      case "boltFwd":
      case "chargeFwd":
        (r(2200, 0.2 * o),
          h(180, 0.12 * o, 0.002),
          c(e === "slideFwd" ? 1650 : 1850, 0.03, 0.004),
          a({
            src: "pink",
            type: "bandpass",
            f: 1300 * n,
            to: 800 * n,
            dur: 0.06,
            gain: 0.05,
            Q: 1,
            delay: 0.004,
          }));
        break;
    }
  }
  place(e) {
    (this.ensure(),
      e === void 0 ? this.noise(0.06, 900, 0.35) : this.footstep(e, 1.25));
  }
  c4Throw() {
    (this.ensure(),
      this.noise(0.14, 1900, 0.12, "bandpass"),
      this.noise(0.06, 3800, 0.045, "highpass", 0.025));
  }
  c4Attach(e = 0, t = !1) {
    if (e >= 32) return;
    this.ensure();
    const i = (1 - e / 32) ** 2;
    (this.noise(0.08, 1100, 0.23 * i, "bandpass"),
      this.tone(t ? 440 : 150, t ? 310 : 75, 0.08, 0.12 * i, "triangle"),
      this.tone(1650, 1650, 0.045, 0.035 * i, "sine", 0.1));
  }
  detonatorClick() {
    (this.ensure(),
      this.noise(0.025, 2700, 0.14, "highpass"),
      this.tone(1320, 1320, 0.065, 0.07, "sine", 0.035),
      this.tone(880, 880, 0.05, 0.045, "sine", 0.12));
  }
  footstep(e, t = 1) {
    this.ensure();
    const i = 0.93 + Math.random() * 0.14,
      n = Math.min(1.4, t);
    if (e === v.SAVANNA_GRASS || e === v.DESERT_GRASS) {
      (this.noise(0.105, 3200 * i, 0.1 * n, "highpass"),
        this.noise(0.065, 440 * i, 0.095 * n));
      return;
    }
    if (e === v.SNOW || e === v.SNOW_LAYER) {
      (this.noise(0.13, 1300 * i, 0.1 * n, "bandpass"),
        this.noise(0.07, 240, 0.08 * n));
      return;
    }
    if (e === v.RSTONE || e === v.STAIR_RSTONE) {
      (this.noise(0.075, 170 * i, 0.2 * n, "lowpass"),
        this.noise(0.038, 1050 * i, 0.12 * n, "bandpass"),
        this.noise(0.09, 2800 * i, 0.028 * n, "highpass"));
      return;
    }
    switch (Ha(e)) {
      case "wood":
        (this.tone(175 * i, 90, 0.085, 0.095 * n, "triangle"),
          this.noise(0.04, 1150 * i, 0.08 * n));
        break;
      case "metal":
        (this.tone(520 * i, 390, 0.11, 0.065 * n, "triangle"),
          this.noise(0.035, 1700, 0.1 * n, "bandpass"));
        break;
      case "glass":
        (this.tone(1800 * i, 1300, 0.085, 0.045 * n, "sine"),
          this.noise(0.035, 2400, 0.06 * n, "highpass"));
        break;
      case "sand":
        (this.noise(0.11, 950 * i, 0.12 * n, "bandpass"),
          this.noise(0.06, 2200, 0.04 * n, "highpass"));
        break;
      case "dirt":
      case "leaves":
        (this.noise(0.07, 460 * i, 0.13 * n),
          this.noise(0.075, 2600, 0.04 * n, "highpass"));
        break;
      default:
        (this.noise(0.065, 190 * i, 0.18 * n, "lowpass"),
          this.noise(0.032, 950 * i, 0.13 * n, "bandpass"),
          this.noise(0.085, 2600 * i, 0.025 * n, "highpass"));
        break;
    }
  }
  bodyFall(e, t = 1, i = !1) {
    if (e > 60 || this.volumeMul === 0) return;
    this.ensure();
    const n = Math.min(1.3, t) * (1 - e / 60) ** 1.6,
      o = 0.92 + Math.random() * 0.16;
    if (i) {
      (this.tone(1350 * o, 900, 0.07, 0.05 * n, "triangle"),
        this.tone(2150 * o, 1600, 0.05, 0.025 * n, "triangle", 0.06),
        this.noise(0.05, 2600, 0.06 * n, "bandpass", 0, 1.3),
        this.noise(0.04, 2100, 0.045 * n, "bandpass", 0.07, 1.3));
      return;
    }
    (this.tone(95 * o, 42, 0.2, 0.32 * n, "sine"),
      this.noise(0.16, 320 * o, 0.26 * n, "lowpass", 0, 0.6),
      this.noise(0.12, 1500 * o, 0.07 * n, "bandpass", 0.02, 0.8),
      this.noise(0.09, 3e3, 0.035 * n, "highpass", 0.05));
  }
  runOver(e, t, i) {
    if (e > 70 || this.volumeMul === 0) return;
    this.ensure();
    const n =
      Math.min(1.25, 0.55 + t / 12) * (1 - e / 70) ** 1.4 * (i ? 1.15 : 1);
    (this.layer({ src: "sine", f: 78, to: 34, dur: 0.32, gain: 0.5 * n }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 700,
        to: 140,
        dur: 0.3,
        gain: 0.42 * n,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 1300,
        to: 480,
        dur: 0.16,
        gain: 0.26 * n,
        delay: 0.015,
        Q: 0.9,
      }),
      this.layer({
        src: "white",
        type: "highpass",
        f: 2600,
        dur: 0.07,
        gain: 0.14 * n,
        delay: 0.03,
      }),
      this.tone(1180, 760, 0.09, 0.05 * n, "triangle", 0.07),
      this.tone(1720, 1260, 0.06, 0.03 * n, "triangle", 0.12));
  }
  door(e) {
    (this.ensure(),
      this.noise(0.16, e ? 720 : 520, 0.3, "bandpass"),
      this.tone(e ? 180 : 145, e ? 260 : 90, 0.18, 0.16, "triangle"),
      setTimeout(
        () => this.noise(0.035, 1800, 0.12, "highpass"),
        e ? 80 : 125,
      ));
  }
  breakBlock(e = 0) {
    this.ensure();
    const t = 0.9 + Math.random() * 0.2,
      i = (n) => this.layer(n);
    if (e === v.SAVANNA_GRASS || e === v.DESERT_GRASS) {
      (i({
        src: "white",
        type: "highpass",
        f: 3200 * t,
        dur: 0.16,
        gain: 0.16,
        attack: 0.01,
      }),
        i({ src: "pink", type: "lowpass", f: 420, dur: 0.1, gain: 0.2 }));
      return;
    }
    switch (Ha(e)) {
      case "ore":
        (i({
          src: "brown",
          type: "lowpass",
          f: 1500 * t,
          to: 220,
          dur: 0.2,
          gain: 0.5,
          send: 0.12,
        }),
          i({ src: "sine", f: 110 * t, to: 42, dur: 0.13, gain: 0.3 }),
          [1760, 2217, 2637].forEach((n, o) =>
            i({
              src: "triangle",
              f: n * t,
              to: n * 0.985 * t,
              dur: 0.26,
              gain: 0.13,
              delay: 0.05 + o * 0.055,
              send: 0.3,
            }),
          ));
        break;
      case "dirt":
        (i({
          src: "brown",
          type: "lowpass",
          f: 700 * t,
          to: 180,
          dur: 0.16,
          gain: 0.42,
        }),
          i({ src: "sine", f: 120 * t, to: 55, dur: 0.09, gain: 0.16 }),
          i({
            src: "pink",
            type: "highpass",
            f: 2600,
            dur: 0.07,
            gain: 0.035,
            delay: 0.03,
          }));
        break;
      case "sand":
        i({
          src: "pink",
          type: "bandpass",
          f: 1300 * t,
          to: 420,
          dur: 0.22,
          gain: 0.3,
          Q: 0.6,
          attack: 0.006,
        });
        break;
      case "wood":
        (i({ src: "triangle", f: 230 * t, to: 130, dur: 0.1, gain: 0.22 }),
          i({
            src: "pink",
            type: "bandpass",
            f: 950 * t,
            to: 600,
            dur: 0.09,
            gain: 0.3,
            Q: 0.9,
          }),
          i({
            src: "white",
            type: "highpass",
            f: 3e3 * t,
            dur: 0.025,
            gain: 0.09,
            delay: 0.012,
          }));
        break;
      case "leaves":
        (i({
          src: "white",
          type: "highpass",
          f: 3400 * t,
          dur: 0.18,
          gain: 0.12,
          attack: 0.02,
        }),
          i({
            src: "pink",
            type: "bandpass",
            f: 1800 * t,
            dur: 0.12,
            gain: 0.08,
            delay: 0.06,
            attack: 0.01,
          }));
        break;
      case "metal":
        (i({
          src: "sine",
          f: 540 * t,
          to: 520 * t,
          dur: 0.38,
          gain: 0.16,
          send: 0.25,
        }),
          i({
            src: "sine",
            f: 1187 * t,
            to: 1170 * t,
            dur: 0.25,
            gain: 0.09,
            send: 0.25,
          }),
          i({
            src: "white",
            type: "bandpass",
            f: 1800 * t,
            dur: 0.06,
            gain: 0.25,
            Q: 1.5,
          }));
        break;
      case "glass":
        i({
          src: "white",
          type: "highpass",
          f: 4200 * t,
          to: 2600,
          dur: 0.28,
          gain: 0.22,
          attack: 0.001,
          send: 0.2,
        });
        for (let n = 0; n < 5; n++) {
          const o = 2400 + Math.random() * 2800;
          i({
            src: "sine",
            f: o,
            to: o * 0.99,
            dur: 0.08 + Math.random() * 0.12,
            gain: 0.05,
            delay: Math.random() * 0.2,
          });
        }
        break;
      default:
        (i({
          src: "brown",
          type: "lowpass",
          f: 1400 * t,
          to: 190,
          dur: 0.22,
          gain: 0.55,
          send: 0.1,
        }),
          i({
            src: "pink",
            type: "bandpass",
            f: 720 * t,
            to: 420,
            dur: 0.12,
            gain: 0.26,
            Q: 0.8,
          }),
          i({ src: "sine", f: 105 * t, to: 38, dur: 0.12, gain: 0.24 }),
          i({
            src: "white",
            type: "highpass",
            f: 4200,
            dur: 0.07,
            gain: 0.04,
            delay: 0.02,
          }));
        break;
    }
  }
  vehicleBreak(e, t) {
    this.ensure();
    const i = Ha(e) === "wood",
      n = Ha(e) === "leaves",
      o = Math.min(1, Math.max(0.35, t / 5));
    i
      ? (this.layer({
          src: "brown",
          type: "lowpass",
          f: 850,
          to: 120,
          dur: 0.24,
          gain: 0.34 * o,
        }),
        this.layer({
          src: "triangle",
          f: 120,
          to: 48,
          dur: 0.19,
          gain: 0.25 * o,
        }),
        this.layer({
          src: "pink",
          type: "bandpass",
          f: 2100,
          to: 650,
          dur: 0.16,
          gain: 0.27 * o,
          delay: 0.025,
        }))
      : n
        ? (this.layer({
            src: "pink",
            type: "bandpass",
            f: 2400,
            to: 720,
            dur: 0.28,
            gain: 0.25 * o,
          }),
          this.layer({
            src: "white",
            type: "highpass",
            f: 3600,
            dur: 0.16,
            gain: 0.17 * o,
            delay: 0.02,
          }))
        : this.breakBlock(e);
  }
  swish() {
    this.ensure();
    const e = 0.9 + Math.random() * 0.2;
    (this.layer({
      src: "pink",
      type: "bandpass",
      f: 520 * e,
      to: 1500 * e,
      dur: 0.13,
      gain: 0.07,
      Q: 1.6,
      attack: 0.02,
      sweep: 0.6,
    }),
      this.layer({
        src: "white",
        type: "highpass",
        f: 3200 * e,
        dur: 0.06,
        gain: 0.018,
        delay: 0.045,
        attack: 0.01,
      }));
  }
  knifeSlash() {
    this.ensure();
    const e = 0.92 + Math.random() * 0.18;
    (this.layer({
      src: "pink",
      type: "bandpass",
      f: 900 * e,
      to: 2600 * e,
      dur: 0.1,
      gain: 0.085,
      Q: 2.2,
      attack: 0.012,
      sweep: 0.7,
    }),
      this.layer({
        src: "white",
        type: "highpass",
        f: 5200 * e,
        dur: 0.05,
        gain: 0.025,
        delay: 0.03,
        attack: 0.006,
      }),
      this.layer({
        src: "sine",
        f: 3100 * e,
        to: 2900 * e,
        dur: 0.12,
        gain: 0.006,
        delay: 0.02,
      }));
  }
  knifeHit(e = 0) {
    this.ensure();
    const t = 0.9 + Math.random() * 0.2,
      i = 1 / (1 + e * 0.08);
    (this.layer({
      src: "brown",
      type: "lowpass",
      f: 700 * t,
      to: 220,
      dur: 0.09,
      gain: 0.22 * i,
    }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 2600 * t,
        to: 900,
        dur: 0.07,
        gain: 0.1 * i,
        Q: 1.8,
      }),
      this.layer({
        src: "sine",
        f: 135 * t,
        to: 70,
        dur: 0.08,
        gain: 0.14 * i,
      }));
  }
  knifeLand(e, t = 0) {
    this.ensure();
    const i = 0.92 + Math.random() * 0.16,
      n = 1 / (1 + t * 0.07);
    e
      ? (this.layer({
          src: "triangle",
          f: 2400 * i,
          to: 2100 * i,
          dur: 0.16,
          gain: 0.06 * n,
        }),
        this.layer({
          src: "triangle",
          f: 3650 * i,
          to: 3300 * i,
          dur: 0.1,
          gain: 0.035 * n,
          delay: 0.01,
        }),
        this.layer({
          src: "white",
          type: "bandpass",
          f: 4200 * i,
          dur: 0.05,
          gain: 0.05 * n,
          Q: 1.5,
        }),
        this.layer({
          src: "triangle",
          f: 1900 * i,
          to: 1700 * i,
          dur: 0.07,
          gain: 0.03 * n,
          delay: 0.12,
        }))
      : (this.layer({
          src: "brown",
          type: "lowpass",
          f: 1100 * i,
          to: 260,
          dur: 0.1,
          gain: 0.2 * n,
        }),
        this.layer({
          src: "triangle",
          f: 210 * i,
          to: 95,
          dur: 0.09,
          gain: 0.14 * n,
        }),
        this.layer({
          src: "sine",
          f: 1400 * i,
          to: 1250 * i,
          dur: 0.14,
          gain: 0.012 * n,
          delay: 0.02,
        }));
  }
  punchHit(e = !1) {
    this.ensure();
    const t = 0.92 + Math.random() * 0.16;
    (this.layer({
      src: "sine",
      f: (e ? 120 : 150) * t,
      to: 60,
      dur: 0.09,
      gain: e ? 0.22 : 0.16,
    }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 900 * t,
        to: 300,
        dur: 0.08,
        gain: 0.2,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 1900 * t,
        to: 1100,
        dur: 0.035,
        gain: 0.07,
        Q: 1.3,
      }));
  }
  mineHit(e, t = 0) {
    this.ensure();
    const i = Ha(t),
      n =
        i === "wood"
          ? 820
          : i === "metal"
            ? 1900
            : i === "sand" || i === "dirt"
              ? 380
              : 650,
      o = 0.94 + Math.random() * 0.12;
    (this.layer({
      src: i === "dirt" || i === "sand" ? "brown" : "pink",
      type: i === "metal" ? "bandpass" : "lowpass",
      f: (n + e * 220) * o,
      to: n * 0.7,
      dur: 0.045,
      gain: 0.085 + e * 0.05,
      Q: 1.1,
    }),
      this.layer({
        src: "sine",
        f: 140 * o,
        to: 70,
        dur: 0.05,
        gain: 0.05 + e * 0.04,
      }),
      t === v.GOLD_ORE &&
        this.layer({
          src: "triangle",
          f: 1250 + Math.random() * 180,
          to: 900,
          dur: 0.07,
          gain: 0.04,
        }));
  }
  drillOsc = null;
  drillOsc2 = null;
  drillNoiseSrc = null;
  drillGain = null;
  drillLfo = null;
  drillSub = null;
  drillGrind = null;
  drillGrindFilter = null;
  drillBaseGain = 0.065;
  drillUpdate(e) {
    if ((this.ensure(), !this.ctx || !this.master || !this.noiseBuf)) return;
    const t = this.ctx.currentTime,
      i = 86 + e * 16;
    if (!this.drillOsc) {
      const n = this.ctx,
        o = n.createGain(),
        a = n.createBiquadFilter();
      (o.gain.setValueAtTime(1e-4, t),
        o.gain.exponentialRampToValueAtTime(this.drillBaseGain, t + 0.25),
        (a.type = "lowpass"),
        (a.frequency.value = 640),
        (a.Q.value = 0.5));
      const r = n.createOscillator(),
        l = n.createOscillator(),
        c = n.createOscillator();
      ((r.type = "triangle"), (l.type = "sine"), (c.type = "sine"));
      for (const [b, S] of [
        [r, 1],
        [l, 2],
        [c, 0.5],
      ])
        (b.frequency.setValueAtTime(i * S * 0.35, t),
          b.frequency.setTargetAtTime(i * S, t, 0.12));
      const h = n.createGain(),
        d = n.createGain(),
        u = n.createGain();
      ((h.gain.value = 0.5), (d.gain.value = 0.2), (u.gain.value = 0.45));
      const f = n.createBufferSource();
      ((f.buffer = this.pinkBuf ?? this.noiseBuf), (f.loop = !0));
      const p = n.createBiquadFilter();
      ((p.type = "bandpass"), (p.frequency.value = 900), (p.Q.value = 1.4));
      const m = n.createGain();
      m.gain.value = 0.025;
      const g = n.createOscillator(),
        y = n.createGain();
      ((g.type = "sine"),
        (g.frequency.value = 11),
        (y.gain.value = 0.012),
        g.connect(y).connect(m.gain),
        r.connect(h).connect(a),
        l.connect(d).connect(a),
        c.connect(u).connect(a),
        f.connect(p).connect(m).connect(o),
        a.connect(o),
        o.connect(this.master));
      for (const b of [r, l, c, g]) b.start(t);
      (f.start(t, Math.random()),
        (this.drillOsc = r),
        (this.drillOsc2 = l),
        (this.drillSub = c),
        (this.drillNoiseSrc = f),
        (this.drillGain = o),
        (this.drillLfo = g),
        (this.drillGrind = m),
        (this.drillGrindFilter = p));
    }
    (this.drillOsc.frequency.setTargetAtTime(i, t, 0.15),
      this.drillOsc2.frequency.setTargetAtTime(i * 2, t, 0.15),
      this.drillSub.frequency.setTargetAtTime(i * 0.5, t, 0.15),
      this.drillGrindFilter.frequency.setTargetAtTime(820 + e * 500, t, 0.2),
      this.drillGrind.gain.setTargetAtTime(0.02 + e * 0.025, t, 0.2),
      this.drillLfo.frequency.setTargetAtTime(10 + e * 5, t, 0.3),
      this.drillGain.gain.setTargetAtTime(
        this.drillBaseGain + e * 0.018,
        t,
        0.2,
      ));
  }
  drillStop() {
    if (!this.ctx || !this.drillOsc) return;
    const e = this.ctx.currentTime;
    for (const [i, n] of [
      [this.drillOsc, 40],
      [this.drillOsc2, 80],
      [this.drillSub, 20],
    ])
      i.frequency.setTargetAtTime(n, e, 0.16);
    this.drillGain.gain.setTargetAtTime(1e-4, e, 0.09);
    const t = [
      this.drillOsc,
      this.drillOsc2,
      this.drillSub,
      this.drillNoiseSrc,
      this.drillLfo,
    ];
    for (const i of t) i.stop(e + 0.45);
    ((this.drillOsc = null),
      (this.drillOsc2 = null),
      (this.drillSub = null),
      (this.drillNoiseSrc = null),
      (this.drillGain = null),
      (this.drillLfo = null),
      (this.drillGrind = null),
      (this.drillGrindFilter = null));
  }
  toolModeSwitch(e, t) {
    (this.ensure(),
      e
        ? (this.noise(0.035, 1800, 0.14, "bandpass"),
          this.tone(240, 100, 0.08, 0.08, "triangle"),
          this.noise(0.025, 2800, 0.1, "highpass", 0.07),
          this.tone(
            t ? 340 : 230,
            t ? 180 : 120,
            0.09,
            0.045,
            "triangle",
            0.07,
          ))
        : (this.noise(0.018, 2400, 0.045, "highpass"),
          this.tone(t ? 620 : 930, t ? 680 : 870, 0.065, 0.065, "sine"),
          this.tone(t ? 930 : 620, t ? 1100 : 550, 0.11, 0.07, "sine", 0.075)));
  }
  barrelHiss() {
    (this.ensure(),
      this.noise(0.03, 1500, 0.2, "bandpass"),
      this.tone(210, 150, 0.06, 0.07, "triangle"),
      this.noise(0.7, 5200, 0.07, "highpass", 0.05),
      this.noise(0.45, 3400, 0.045, "bandpass", 0.08, 1.4));
  }
  geigerClick(e = 1) {
    this.volumeMul === 0 ||
      this.sfxVoices >= 110 ||
      (this.ensure(),
      this.noise(0.006, 3400, 0.05 * e, "highpass"),
      this.tone(2400, 1200, 0.003, 0.012 * e, "square"));
  }
  uiTick(e = !1) {
    (this.ensure(),
      this.noise(0.025, e ? 2e3 : 2800, e ? 0.14 : 0.06, "highpass"),
      e && this.tone(900, 700, 0.04, 0.08, "square"));
  }
  sell() {
    (this.ensure(),
      this.noise(0.03, 2400, 0.14, "highpass"),
      this.tone(1310, 1310, 0.09, 0.14, "triangle"),
      setTimeout(() => this.tone(1760, 1760, 0.13, 0.12, "triangle"), 70));
  }
  buy() {
    (this.ensure(),
      this.noise(0.05, 850, 0.24),
      this.tone(520, 430, 0.08, 0.12, "triangle"),
      setTimeout(() => this.noise(0.03, 2300, 0.1, "highpass"), 65));
  }
  heartbeat(e) {
    this.ensure();
    const t = 0.08 + Oe(e, 0, 1) * 0.42;
    (this.tone(62, 38, 0.13, t, "sine"),
      this.tone(48, 30, 0.16, t * 0.7, "sine", 0.17));
  }
  hurt() {
    (this.ensure(),
      this.tone(150, 65, 0.16, 0.26, "triangle"),
      this.noise(0.1, 620, 0.1, "bandpass"));
  }
  weldTick(e = 0) {
    this.ensure();
    const t = Math.max(0, 1 - e / 28);
    t <= 0 ||
      (this.noise(
        0.02 + Math.random() * 0.05,
        2600 + Math.random() * 2600,
        (0.05 + Math.random() * 0.09) * t,
        "bandpass",
        0,
        1.6,
      ),
      Math.random() < 0.5 &&
        this.noise(0.012, 6200, 0.05 * t, "highpass", 0.02),
      Math.random() < 0.3 && this.tone(100, 100, 0.09, 0.035 * t, "sawtooth"));
  }
  hullHit(e, t = 0) {
    this.ensure();
    const i = this.ctx;
    if (!i || !this.master || this.volumeMul === 0) return;
    const n = i.currentTime,
      o = e >= 35;
    if (!o && n < this.hullHitAt) return;
    this.hullHitAt = n + 0.035;
    const a = i.createStereoPanner();
    ((a.pan.value = Oe(t, -1, 1)),
      a.connect(this.master),
      setTimeout(() => a.disconnect(), 2500));
    const r = Math.random;
    if (o) {
      (this.noise(0.75, 170, 0.95, "lowpass", 0, 0.7, a),
        this.tone(74, 36, 0.55, 0.65, "sine", 0, a),
        this.noise(0.28, 2300, 0.32, "bandpass", 0.01, 0.9, a),
        this.tone(250 + r() * 60, 105, 0.7, 0.07, "sawtooth", 0.06, a));
      for (let c = 0; c < 6; c++)
        this.noise(
          0.014,
          3400 + r() * 2200,
          0.22,
          "bandpass",
          0.03 + r() * 0.3,
          1.5,
          a,
        );
      return;
    }
    const l = Oe(e / 12, 0.55, 1.5);
    (this.noise(0.016, 4e3 + r() * 1800, 0.55 * l, "bandpass", 0, 1.7, a),
      this.tone(
        2300 + r() * 1e3,
        2150,
        0.08 + r() * 0.06,
        0.07 * l,
        "sine",
        0.002,
        a,
      ),
      this.tone(
        3600 + r() * 900,
        3500,
        0.05 + r() * 0.03,
        0.045 * l,
        "sine",
        0.002,
        a,
      ),
      this.tone(175 + r() * 30, 85, 0.06, 0.2 * l, "triangle", 0, a),
      this.noise(0.05, 950, 0.13 * l, "lowpass", 0.004, 0.7, a));
  }
  armorClank() {
    (this.ensure(),
      this.noise(0.16, 420, 0.34),
      this.tone(180, 90, 0.22, 0.2, "triangle"),
      this.tone(1240, 1180, 0.6, 0.05, "sine", 0.04),
      this.tone(1870, 1800, 0.45, 0.03, "sine", 0.06));
  }
  armsLevel(e) {
    if ((this.ensure(), e === "down")) {
      (this.tone(160, 70, 0.3, 0.22, "sine"),
        this.noise(0.12, 400, 0.12, "lowpass"),
        this.tone(659, 659, 0.14, 0.07, "triangle", 0.02),
        this.tone(523, 494, 0.3, 0.07, "triangle", 0.14));
      return;
    }
    if (
      (this.noise(0.03, 3200, 0.16, "bandpass", 0, 4),
      this.noise(0.035, 2400, 0.14, "bandpass", 0.07, 4),
      this.tone(220, 140, 0.07, 0.08, "square", 0.07),
      e === "up")
    ) {
      (this.tone(988, 988, 0.1, 0.07, "triangle", 0.1),
        this.tone(1480, 1480, 0.22, 0.08, "triangle", 0.18));
      return;
    }
    (this.tone(70, 36, 1.1, 0.4, "sine", 0.05),
      this.noise(0.5, 260, 0.2, "lowpass", 0.05),
      [784, 988, 1175, 1568].forEach((t, i) =>
        this.tone(t, t, 0.9 - i * 0.1, 0.06, "triangle", 0.12 + i * 0.08),
      ),
      this.tone(2349, 2349, 1.2, 0.03, "sine", 0.45),
      this.noise(1.2, 7500, 0.05, "highpass", 0.2));
  }
  armsAlert() {
    (this.ensure(),
      this.tone(220, 220, 0.22, 0.09, "sawtooth"),
      this.tone(233, 233, 0.22, 0.07, "sawtooth", 0.02),
      this.tone(196, 196, 0.4, 0.09, "sawtooth", 0.26),
      this.tone(208, 208, 0.4, 0.07, "sawtooth", 0.28),
      this.noise(0.6, 300, 0.08, "lowpass"));
  }
  levelUp() {
    (this.ensure(),
      this.tone(784, 784, 0.14, 0.09, "triangle"),
      this.tone(988, 988, 0.14, 0.09, "triangle", 0.1),
      this.tone(1318, 1318, 0.32, 0.1, "triangle", 0.2),
      this.noise(0.25, 7e3, 0.025, "highpass", 0.2));
  }
  casinoWin(e = !1) {
    (this.ensure(),
      (e ? [523, 659, 784, 1047, 1319, 1568] : [659, 784, 1047]).forEach(
        (n, o) => this.tone(n, n, 0.16, e ? 0.1 : 0.08, "square", o * 0.075),
      ));
    const i = e ? 18 : 7;
    for (let n = 0; n < i; n++)
      this.tone(
        2400 + ((n * 397) % 1300),
        1900,
        0.05,
        0.045,
        "triangle",
        0.12 + n * (e ? 0.07 : 0.06),
      );
  }
  casinoChime(e = 8, t = 0) {
    this.ensure();
    const i = Math.max(0, 0.05 * (1 - e / 22));
    if (i <= 0.003) return;
    const n = [784, 880, 988, 1175, 1319];
    for (let o = 0; o < 3; o++) {
      const a = n[(t + o * 2) % n.length];
      this.tone(a, a, 0.09, i, "triangle", o * 0.09);
    }
  }
  blackjack(e, t = 0) {
    const i = Math.max(0, 1 - t / 18);
    if (!(i <= 0))
      if ((this.ensure(), e === "card"))
        (this.noise(0.095, 3800, 0.12 * i, "highpass"),
          this.tone(260, 160, 0.035, 0.06 * i, "triangle", 0.075));
      else if (e === "chips") {
        for (let n = 0; n < 5; n++)
          this.tone(
            2600 + n * 173,
            1700,
            0.045,
            0.08 * i,
            "triangle",
            n * 0.037,
          );
        this.noise(0.08, 2300, 0.09 * i, "bandpass");
      } else if (e === "shuffle")
        for (let n = 0; n < 6; n++)
          this.noise(0.045, 2600 + n * 160, 0.065 * i, "highpass", n * 0.07);
      else if (e === "turn")
        (this.tone(620, 620, 0.11, 0.065 * i, "sine"),
          this.tone(830, 830, 0.13, 0.05 * i, "sine", 0.12));
      else
        for (let n = 0; n < 3; n++)
          this.tone(
            [523, 659, 784][n],
            [523, 659, 784][n],
            0.18,
            0.06 * i,
            "triangle",
            n * 0.11,
          );
  }
  casinoSit() {
    (this.ensure(),
      this.noise(0.12, 320, 0.16),
      this.tone(140, 90, 0.1, 0.08, "sine"));
  }
  hitmark() {
    (this.ensure(),
      this.tone(1100, 820, 0.045, 0.14, "triangle"),
      this.noise(0.018, 2100, 0.065, "bandpass"));
  }
  bounce() {
    this.noise(0.04, 1200, 0.2);
  }
  drone() {
    this.tone(400, 380, 0.08, 0.1, "sawtooth");
  }
  droneBuzz(e) {
    const t = 1 / (1 + e * 0.16);
    (this.tone(140 + Math.random() * 24, 130, 0.1, 0.22 * t, "sawtooth"),
      this.tone(280, 270, 0.1, 0.08 * t, "square"));
  }
  matchEnd(e) {
    (this.ensure(),
      this.tone(70, 38, 0.9, 0.42, "sine"),
      this.noise(0.5, 220, 0.3, "lowpass"),
      (e === "win"
        ? [392, 494, 587, 784]
        : e === "loss"
          ? [330, 392, 466]
          : [349, 440, 523]
      ).forEach((i, n) => {
        (this.tone(i, i, 1.5, 0.05, "sawtooth", 0.08 + n * 0.02),
          this.tone(i * 2, i * 2, 1.2, 0.025, "triangle", 0.1 + n * 0.02));
      }),
      e === "win" &&
        [784, 988, 1175, 1568].forEach((i, n) =>
          this.tone(i, i, 0.35, 0.05, "triangle", 0.55 + n * 0.09),
        ));
  }
  podiumHit(e) {
    (this.ensure(),
      this.tone(110, 55, 0.35, 0.3, "sine"),
      this.noise(0.25, 500, 0.18, "lowpass"));
    const t = e === 1 ? 1568 : e === 2 ? 1175 : 988;
    (this.tone(t / 2, t, 0.45, 0.05, "triangle", 0.05),
      this.noise(0.5, 7e3, e === 1 ? 0.06 : 0.03, "highpass", 0.08));
  }
  voteCast() {
    (this.ensure(),
      this.noise(0.025, 4200, 0.12, "highpass"),
      this.tone(880, 880, 0.06, 0.07, "square", 0.01),
      this.tone(1320, 1320, 0.09, 0.06, "square", 0.07),
      this.tone(150, 70, 0.14, 0.16, "sine"));
  }
  voteTick() {
    (this.ensure(),
      this.tone(2400, 1900, 0.03, 0.05, "square"),
      this.noise(0.025, 5200, 0.05, "highpass"));
  }
  voteWin() {
    (this.ensure(),
      this.tone(90, 42, 0.7, 0.32, "sine"),
      this.noise(0.35, 900, 0.08, "lowpass"),
      [523, 659, 784, 1047].forEach((e, t) =>
        this.tone(e, e, 0.45 - t * 0.05, 0.07, "triangle", 0.06 + t * 0.075),
      ),
      this.tone(1568, 1568, 0.7, 0.03, "sine", 0.36),
      this.noise(0.8, 7e3, 0.035, "highpass", 0.3));
  }
  reelTick() {
    (this.ensure(), this.tone(1900, 1500, 0.03, 0.045, "square"));
  }
  dropReveal(e) {
    this.ensure();
    const t = [523, 587, 659, 740, 784, 880, 988][Math.max(0, Math.min(6, e))];
    ([1, 1.25, 1.5, 2].forEach((i, n) =>
      this.tone(
        t * i,
        t * i,
        0.5 + e * 0.12,
        0.05 + e * 0.008,
        "triangle",
        n * 0.07,
      ),
    ),
      this.noise(0.6 + e * 0.15, 6500, 0.03 + e * 0.012, "highpass", 0.1),
      e >= 4 &&
        (this.tone(65, 40, 1.2, 0.35, "sine"),
        [2, 2.5, 3].forEach((i, n) =>
          this.tone(t * i, t * i, 0.9, 0.03, "sine", 0.35 + n * 0.12),
        )));
  }
  bandageRip() {
    (this.ensure(),
      this.noise(0.16, 2600, 0.12, "bandpass", 0, 2.4),
      this.noise(0.22, 1900, 0.1, "bandpass", 0.2, 2),
      this.noise(0.18, 2300, 0.08, "bandpass", 0.48, 2.2));
  }
  medkitOpen() {
    (this.ensure(),
      this.noise(0.02, 3200, 0.16, "highpass"),
      this.tone(420, 300, 0.05, 0.07, "square", 0.02),
      this.noise(0.12, 900, 0.09, "bandpass", 0.12),
      this.noise(0.25, 4200, 0.05, "highpass", 0.55));
  }
  healDone() {
    (this.ensure(),
      this.tone(587, 587, 0.12, 0.08, "sine"),
      this.tone(880, 880, 0.22, 0.07, "sine", 0.08),
      this.noise(0.3, 700, 0.035, "bandpass", 0.05));
  }
  pickup() {
    (this.ensure(),
      !(this.ctx.currentTime < this.pickupReadyAt) &&
        ((this.pickupReadyAt = this.ctx.currentTime + 0.09),
        this.tone(660, 660, 0.13, 0.12, "sine"),
        this.tone(990, 990, 0.18, 0.075, "sine", 0.055)));
  }
  eggLaid() {
    (this.tone(760, 640, 0.07, 0.18, "square"),
      setTimeout(() => this.tone(900, 1180, 0.12, 0.2, "square"), 110));
  }
  shear() {
    (this.noise(0.05, 4200, 0.22, "highpass"),
      setTimeout(() => this.noise(0.05, 3600, 0.2, "highpass"), 95));
  }
  milk() {
    (this.tone(420, 300, 0.22, 0.16, "sine"), this.noise(0.16, 900, 0.1));
  }
  graze(e = 0) {
    const t = Math.max(0, 0.16 * (1 - e / 24));
    t <= 0.01 ||
      (this.noise(0.13, 1500, t, "bandpass"),
      setTimeout(() => this.noise(0.1, 1100, t * 0.7, "bandpass"), 150));
  }
  castLine(e = 0) {
    const t = Math.max(0, 0.3 * (1 - e / 40));
    t <= 0.01 ||
      (this.noise(0.12, 2600, t * 0.5, "bandpass"),
      this.noise(0.4, 5200, t * 0.22, "highpass", 0.06, 0.4));
  }
  fishBite(e = 0) {
    const t = Math.max(0, 0.4 * (1 - e / 40));
    t <= 0.01 ||
      (this.tone(320, 150, 0.14, t * 0.4, "sine"),
      this.noise(0.2, 900, t * 0.35, "lowpass", 0.02),
      this.tone(520, 760, 0.1, t * 0.28, "triangle", 0.1));
  }
  reelIn() {
    for (let e = 0; e < 5; e++)
      this.noise(0.03, 3200 + e * 240, 0.16, "bandpass", e * 0.045);
    this.tone(700, 980, 0.12, 0.16, "triangle", 0.2);
  }
  sharkBite(e = 0) {
    const t = Math.max(0, 0.55 * (1 - e / 34));
    t <= 0.01 ||
      (this.tone(90, 48, 0.34, t * 0.5, "sawtooth"),
      this.noise(0.26, 480, t * 0.5, "lowpass"),
      this.noise(0.1, 1700, t * 0.3, "bandpass", 0.05));
  }
  chickenFlutter(e = 0) {
    this.ensure();
    const t = Math.max(0, 0.3 * (1 - e / 42));
    if (t <= 0.01) return;
    let i = 0;
    for (let n = 0; n < 9; n++)
      (this.layer({
        src: "pink",
        type: "bandpass",
        f: 1250 + Math.random() * 500,
        to: 900,
        dur: 0.028,
        gain: t * (0.9 - n * 0.07),
        Q: 0.8,
        delay: i,
        attack: 0.002,
      }),
        (i += 0.05 + n * 0.006));
    this.layer({
      src: "white",
      type: "bandpass",
      f: 2600,
      to: 1800,
      dur: 0.45,
      gain: t * 0.12,
      Q: 0.6,
      attack: 0.05,
    });
  }
  ambience(e, t = 0) {
    this.ensure();
    const i = 0.85 + ((t * 53) % 30) / 100;
    if (e === "yellowstone")
      (this.noise(2.8, 1200, 0.045, "bandpass"),
        this.tone(230 * i, 110, 1.2, 0.02, "sine", 0.3));
    else if (e === "volcanic")
      (this.noise(3.5, 110, 0.055),
        this.noise(0.5, 620, 0.045, "bandpass", 1.1),
        this.tone(42, 30, 2, 0.035, "sine"));
    else if (e === "alpine")
      (this.noise(2.9, 900, 0.035, "bandpass"),
        this.tone(1450 * i, 1100, 0.18, 0.025, "sine", 0.7));
    else if (e === "savanna") {
      this.noise(2.2, 1800, 0.025, "bandpass");
      for (let n = 0; n < 3; n++)
        this.tone(2300 * i, 2650 * i, 0.055, 0.022, "sine", n * 0.15);
    } else if (e === "forest")
      t % 4 === 1 &&
        this.layer({
          src: "pink",
          type: "bandpass",
          f: 900,
          to: 1400,
          dur: 2.2,
          gain: 0.02,
          Q: 0.5,
          attack: 0.8,
        });
    else if (e === "desert") {
      if ((this.noise(1.6, 700, 0.05, "bandpass", 0, 1.2), t % 3 === 0)) {
        const n = 392 * i;
        [0, 1, 0.5, -1].forEach((o, a) => {
          this.tone(
            n * Math.pow(2, o / 12),
            n * Math.pow(2, o / 12),
            0.3,
            0.035,
            "triangle",
            0.4 + a * 0.3,
          );
        });
      }
    } else
      e === "ocean"
        ? (this.noise(2.4, 420, 0.07, "lowpass"),
          this.noise(1.5, 1600, 0.03, "bandpass", 0.8))
        : e === "pyramid"
          ? (this.tone(55 * i, 48 * i, 3.4, 0.045, "sine"),
            this.noise(0.48, 3200, 0.035, "highpass", 0.18, 1.8),
            t % 2 === 0 &&
              [0, 1, 3].forEach((n, o) => {
                const a = 294 * i * Math.pow(2, n / 12);
                this.tone(
                  a,
                  a * 0.985,
                  0.55,
                  0.038,
                  "triangle",
                  0.65 + o * 0.48,
                );
              }),
            t % 5 === 0 && this.noise(2.8, 240, 0.035, "bandpass", 1.1, 2.4))
          : (this.tone(1500 * i, 700 * i, 0.09, 0.05, "sine"),
            t % 4 === 0 && this.noise(2.2, 180, 0.05, "lowpass", 0.5, 1.5));
  }
  spookBus(e, t, i, n = 60) {
    const o = this.ctx,
      a = this.master;
    if (!o || !a || this.volumeMul === 0 || this.sfxVoices >= 140) return null;
    const r = Math.max(0, 1 - e / n) ** 1.2;
    if (r <= 0.01) return null;
    const l = this.transient(o.createStereoPanner(), i + 1.5),
      c = this.transient(o.createBiquadFilter(), i + 1.5);
    if (
      ((l.pan.value = Oe(t, -0.95, 0.95)),
      (c.type = "lowpass"),
      (c.frequency.value = 14e3 / (1 + e * 0.05)),
      (c.Q.value = 0.5),
      c.connect(l).connect(a),
      this.reverbIn && e > 6)
    ) {
      const h = this.transient(o.createGain(), i + 1.5);
      ((h.gain.value = Oe(0.08 + e * 0.006, 0.08, 0.4)),
        c.connect(h).connect(this.reverbIn));
    }
    return { out: c, gain: r };
  }
  cricket(e = 0, t = 0, i = 0) {
    this.ensure();
    const n = this.spookBus(e, t, 1.2, 36);
    if (!n) return;
    const o = 4300 + (i % 7) * 90,
      a = 3 + (i % 3);
    for (let r = 0; r < 2; r++)
      for (let l = 0; l < a; l++)
        this.layer({
          src: "sine",
          f: o,
          to: o * 0.985,
          dur: 0.018,
          gain: 0.05 * n.gain,
          delay: r * 0.42 + l * 0.026,
          attack: 0.002,
          dest: n.out,
        });
  }
  owlHoot(e = 20, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 2.6, 90);
    if (!i) return;
    const n = [
      [0, 0.32, 1],
      [0.72, 0.14, 0.7],
      [0.92, 0.14, 0.72],
      [1.12, 0.7, 0.95],
    ];
    for (const [o, a, r] of n)
      (this.layer({
        src: "sine",
        f: 410,
        to: 360,
        dur: a,
        gain: 0.11 * r * i.gain,
        delay: o,
        attack: 0.06,
        dest: i.out,
      }),
        this.layer({
          src: "pink",
          type: "bandpass",
          f: 420,
          dur: a,
          gain: 0.02 * r * i.gain,
          Q: 6,
          delay: o,
          dest: i.out,
        }));
  }
  whisper(e = 6, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 2.4, 30);
    if (!i) return;
    let n = 0;
    for (let o = 0; o < 5 + Math.floor(Math.random() * 4); o++) {
      const a = 0.12 + Math.random() * 0.2,
        r = 1400 + Math.random() * 2200;
      (this.layer({
        src: "white",
        type: "bandpass",
        f: r,
        to: r * (0.8 + Math.random() * 0.4),
        dur: a,
        gain: 0.075 * i.gain,
        Q: 4,
        delay: n,
        attack: 0.03,
        dest: i.out,
      }),
        this.layer({
          src: "pink",
          type: "bandpass",
          f: 700 + Math.random() * 400,
          dur: a,
          gain: 0.03 * i.gain,
          Q: 3,
          delay: n,
          dest: i.out,
        }),
        (n += a + 0.03 + Math.random() * 0.12));
    }
  }
  moan(e = 18, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 3.4, 70);
    if (!i) return;
    const n = 190 + Math.random() * 70;
    (this.layer({
      src: "sawtooth",
      f: n,
      to: n * 0.62,
      dur: 2.8,
      gain: 0.05 * i.gain,
      type: "bandpass",
      cut: 700,
      Q: 3,
      attack: 0.6,
      sweep: 1,
      dest: i.out,
    }),
      this.layer({
        src: "triangle",
        f: n * 2.01,
        to: n * 1.2,
        dur: 2.6,
        gain: 0.03 * i.gain,
        attack: 0.7,
        dest: i.out,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 520,
        to: 300,
        dur: 2.9,
        gain: 0.035 * i.gain,
        Q: 2,
        attack: 0.5,
        dest: i.out,
      }));
  }
  bellToll(e = 60, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 6, 220);
    if (i)
      for (const [n, o, a] of [
        [1, 1, 5.5],
        [2.4, 0.45, 3.2],
        [3.01, 0.32, 2.4],
        [4.2, 0.18, 1.6],
        [0.5, 0.5, 5.8],
      ])
        this.layer({
          src: "sine",
          f: 196 * n,
          to: 196 * n * 0.997,
          dur: a,
          gain: 0.085 * o * i.gain,
          attack: 0.004,
          dest: i.out,
        });
  }
  chestOpen(e = 2, t = 0, i = !1) {
    this.ensure();
    const n = this.spookBus(e, t, 1.2, 32);
    if (!n) return;
    const o = n.gain,
      a = 0.92 + Math.random() * 0.16;
    if (i) {
      for (const [r, l] of [
        [0, 2600],
        [0.07, 2150],
      ])
        (this.layer({
          src: "square",
          f: l * a,
          to: l * 0.6,
          dur: 0.045,
          gain: 0.06 * o,
          type: "bandpass",
          cut: l * 1.3,
          Q: 6,
          delay: r,
          dest: n.out,
        }),
          this.layer({
            src: "white",
            type: "highpass",
            f: 3800,
            dur: 0.025,
            gain: 0.09 * o,
            delay: r,
            attack: 8e-4,
            dest: n.out,
          }));
      (this.layer({
        src: "triangle",
        f: 640 * a,
        to: 610 * a,
        dur: 0.55,
        gain: 0.035 * o,
        delay: 0.16,
        dest: n.out,
      }),
        this.layer({
          src: "pink",
          type: "bandpass",
          f: 900,
          to: 500,
          dur: 0.32,
          gain: 0.05 * o,
          Q: 1.5,
          delay: 0.14,
          attack: 0.02,
          dest: n.out,
        }));
      return;
    }
    (this.layer({
      src: "white",
      type: "bandpass",
      f: 2400 * a,
      dur: 0.03,
      gain: 0.1 * o,
      Q: 3,
      attack: 8e-4,
      dest: n.out,
    }),
      this.layer({
        src: "sawtooth",
        f: 240 * a,
        to: 410 * a,
        dur: 0.55,
        gain: 0.028 * o,
        type: "bandpass",
        cut: 760,
        Q: 8,
        sweep: 0.6,
        attack: 0.04,
        delay: 0.05,
        dest: n.out,
      }),
      this.layer({
        src: "square",
        f: 1250 * a,
        to: 980 * a,
        dur: 0.38,
        gain: 0.008 * o,
        type: "bandpass",
        cut: 1500,
        Q: 10,
        attack: 0.06,
        delay: 0.08,
        dest: n.out,
      }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: 420,
        to: 260,
        dur: 0.35,
        gain: 0.07 * o,
        attack: 0.05,
        delay: 0.03,
        dest: n.out,
      }));
  }
  chestSlam(e = 2, t = 0, i = !1, n = 1) {
    this.ensure();
    const o = this.spookBus(e, t, 0.8, 32);
    if (!o) return;
    const a = o.gain * Oe(0.45 + n * 0.12, 0.45, 1.2),
      r = 0.93 + Math.random() * 0.14;
    (this.layer({
      src: "sine",
      f: (i ? 150 : 115) * r,
      to: 55,
      dur: 0.2,
      gain: 0.32 * a,
      attack: 0.002,
      dest: o.out,
    }),
      this.layer({
        src: "brown",
        type: "lowpass",
        f: i ? 1200 : 760,
        to: 180,
        dur: 0.22,
        gain: 0.3 * a,
        attack: 0.001,
        dest: o.out,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: i ? 1800 : 1100,
        to: 600,
        dur: 0.07,
        gain: 0.12 * a,
        Q: 1.4,
        attack: 8e-4,
        dest: o.out,
      }),
      i &&
        this.layer({
          src: "triangle",
          f: 980 * r,
          to: 940 * r,
          dur: 0.4,
          gain: 0.03 * a,
          delay: 0.005,
          dest: o.out,
        }),
      this.layer({
        src: "white",
        type: "highpass",
        f: 3200,
        dur: 0.02,
        gain: 0.07 * a,
        delay: 0.06,
        attack: 6e-4,
        dest: o.out,
      }));
  }
  gateCreak(e = 8, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 1.6, 40);
    i &&
      (this.layer({
        src: "sawtooth",
        f: 310,
        to: 520,
        dur: 1.1,
        gain: 0.04 * i.gain,
        type: "bandpass",
        cut: 900,
        Q: 9,
        sweep: 0.8,
        attack: 0.05,
        dest: i.out,
      }),
      this.layer({
        src: "square",
        f: 1600,
        to: 1100,
        dur: 0.9,
        gain: 0.012 * i.gain,
        type: "bandpass",
        cut: 1800,
        Q: 12,
        attack: 0.1,
        dest: i.out,
      }));
  }
  flareLaunch(e = 0) {
    if (this.volumeMul === 0) return;
    this.ensure();
    const t = 1 / (1 + e * 0.04);
    (this.noise(0.12, 420, 0.22 * t, "lowpass", 0, 0.8),
      this.tone(120, 60, 0.18, 0.2 * t, "sine", 0),
      this.tone(900, 2400, 1.1, 0.03 * t, "sine", 0.05));
  }
  flarePop(e = 0) {
    if (this.volumeMul === 0) return;
    this.ensure();
    const t = 1 / (1 + e * 0.03);
    (this.noise(0.08, 2200, 0.2 * t, "bandpass", 0, 1.2),
      this.noise(2.6, 5200, 0.035 * t, "highpass", 0.05, 0.7));
  }
  ghostWhoosh(e = 10, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 2, 40);
    i &&
      (this.layer({
        src: "pink",
        type: "bandpass",
        f: 300,
        to: 1800,
        dur: 1.4,
        gain: 0.09 * i.gain,
        Q: 2.5,
        attack: 0.45,
        sweep: 0.7,
        dest: i.out,
      }),
      this.layer({
        src: "sine",
        f: 520,
        to: 880,
        dur: 1.2,
        gain: 0.025 * i.gain,
        attack: 0.4,
        dest: i.out,
      }));
  }
  scream() {
    this.ensure();
    const e = this.spookBus(0, 0, 1.6, 10);
    if (e) {
      for (const t of [1180, 1265, 1420, 2290])
        this.layer({
          src: "sawtooth",
          f: t,
          to: t * 0.72,
          dur: 1.2,
          gain: 0.085,
          type: "bandpass",
          cut: 2600,
          Q: 1.1,
          attack: 0.008,
          dest: e.out,
        });
      (this.layer({
        src: "white",
        type: "highpass",
        f: 2400,
        to: 1500,
        dur: 1.1,
        gain: 0.16,
        attack: 0.004,
        dest: e.out,
      }),
        this.layer({
          src: "sine",
          f: 70,
          to: 38,
          dur: 0.5,
          gain: 0.32,
          attack: 0.002,
          dest: e.out,
        }));
    }
  }
  wendigoRoar(e = 20, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 3.2, 150);
    if (i) {
      (this.layer({
        src: "sawtooth",
        f: 92,
        to: 58,
        dur: 2.1,
        gain: 0.26 * i.gain,
        type: "lowpass",
        cut: 520,
        attack: 0.08,
        dest: i.out,
      }),
        this.layer({
          src: "square",
          f: 61,
          to: 44,
          dur: 2.2,
          gain: 0.13 * i.gain,
          type: "lowpass",
          cut: 300,
          attack: 0.1,
          dest: i.out,
        }),
        this.layer({
          src: "brown",
          f: 420,
          to: 160,
          dur: 2.3,
          gain: 0.3 * i.gain,
          attack: 0.06,
          dest: i.out,
        }));
      for (const n of [1320, 1410, 1690])
        this.layer({
          src: "sawtooth",
          f: n,
          to: n * 0.6,
          dur: 1.4,
          gain: 0.045 * i.gain,
          type: "bandpass",
          cut: 2100,
          Q: 2,
          delay: 0.45,
          attack: 0.05,
          dest: i.out,
        });
    }
  }
  wendigoScreech(e = 40, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 2.4, 160);
    if (!i) return;
    const n = 1500 + Math.random() * 400;
    (this.layer({
      src: "sawtooth",
      f: n,
      to: n * 1.35,
      dur: 0.8,
      gain: 0.06 * i.gain,
      type: "bandpass",
      cut: n * 1.2,
      Q: 5,
      attack: 0.12,
      sweep: 0.5,
      dest: i.out,
    }),
      this.layer({
        src: "sawtooth",
        f: n * 1.06,
        to: n * 0.7,
        dur: 1.2,
        gain: 0.05 * i.gain,
        type: "bandpass",
        cut: n,
        Q: 4,
        delay: 0.7,
        attack: 0.05,
        dest: i.out,
      }),
      this.layer({
        src: "white",
        type: "bandpass",
        f: 3200,
        to: 2200,
        dur: 1.5,
        gain: 0.04 * i.gain,
        Q: 1.5,
        attack: 0.2,
        dest: i.out,
      }));
  }
  wendigoStep(e = 8, t = 0) {
    this.ensure();
    const i = this.spookBus(e, t, 0.6, 45);
    i &&
      (this.layer({
        src: "sine",
        f: 70,
        to: 40,
        dur: 0.22,
        gain: 0.3 * i.gain,
        attack: 0.004,
        dest: i.out,
      }),
      this.layer({
        src: "brown",
        f: 380,
        to: 160,
        dur: 0.2,
        gain: 0.22 * i.gain,
        dest: i.out,
      }),
      this.layer({
        src: "pink",
        type: "bandpass",
        f: 2600,
        dur: 0.06,
        gain: 0.05 * i.gain,
        Q: 1.5,
        delay: 0.03,
        dest: i.out,
      }));
  }
  horrorSting() {
    this.ensure();
    const e = this.spookBus(0, 0, 3, 10);
    if (e) {
      for (const t of [110, 116.5, 164.8, 233])
        this.layer({
          src: "sawtooth",
          f: t,
          to: t * 0.98,
          dur: 2.4,
          gain: 0.05,
          type: "lowpass",
          cut: 1600,
          attack: 0.01,
          dest: e.out,
        });
      this.layer({
        src: "white",
        type: "highpass",
        f: 3e3,
        dur: 1.6,
        gain: 0.07,
        attack: 0.005,
        dest: e.out,
      });
    }
  }
  carve(e = 0) {
    this.ensure();
    const t = Math.max(0, 1 - e / 30);
    if (!(t <= 0.01)) {
      for (let i = 0; i < 4; i++)
        this.noise(0.07, 1400 + i * 200, 0.12 * t, "bandpass", i * 0.07, 2);
      (this.noise(0.5, 700, 0.1 * t, "bandpass", 0.32, 0.8),
        this.tone(260, 520, 0.35, 0.05 * t, "triangle", 0.3));
    }
  }
  brew(e = 0) {
    this.ensure();
    const t = Math.max(0, 1 - e / 30);
    if (!(t <= 0.01)) {
      for (let i = 0; i < 7; i++) {
        const n = 180 + Math.random() * 260;
        this.tone(
          n,
          n * 2.2,
          0.09,
          0.09 * t,
          "sine",
          i * 0.09 + Math.random() * 0.04,
        );
      }
      this.noise(0.9, 900, 0.06 * t, "bandpass", 0.1, 1.2);
    }
  }
  bubblePop(e = 0) {
    const t = Math.max(0, 1 - e / 14);
    if (t <= 0.02) return;
    const i = 220 + Math.random() * 240;
    this.tone(i, i * 2.4, 0.07, 0.05 * t, "sine");
  }
  pyramidEntrance() {
    (this.ensure(),
      this.tone(73, 55, 2.5, 0.08, "sine"),
      this.tone(146, 110, 2.1, 0.045, "triangle", 0.18),
      this.noise(1.3, 1800, 0.045, "bandpass", 0.05, 2.1),
      [0, 3, 1].forEach((e, t) => {
        const i = 330 * Math.pow(2, e / 12);
        this.tone(i, i * 0.99, 0.38, 0.04, "triangle", 0.55 + t * 0.34);
      }));
  }
  voiceCache = new Map();
  voiceQueue = [];
  voiceWorking = !1;
  playAnimalCall(e, t, i, n, o, a) {
    const r = this.ctx;
    if (!r || o >= dM[e] || this.creatureVoices >= 6) return;
    const l = ((i % 8) + 8) % 8,
      c =
        t === "idle"
          ? Math.floor(Math.random() * 3)
          : t === "hurt"
            ? Math.floor(Math.random() * 2)
            : 0,
      h = `${e}:${t}:${l}:${c}:${n ? 1 : 0}`,
      d = this.voiceCache.get(h);
    if (d) {
      (this.voiceCache.delete(h),
        this.voiceCache.set(h, d),
        this.playVoiceBuffer(d, e, t, o, a));
      return;
    }
    if (typeof OfflineAudioContext < "u" && r instanceof OfflineAudioContext) {
      const f = this.renderVoiceBuffer(e, t, l, c, n);
      f && (this.voiceCache.set(h, f), this.playVoiceBuffer(f, e, t, o, a));
      return;
    }
    let u = this.voiceQueue.find((f) => f.key === h);
    (u ||
      ((u = {
        key: h,
        type: e,
        kind: t,
        ind: l,
        variant: c,
        baby: n,
        waiting: [],
      }),
      this.voiceQueue.push(u)),
      u.waiting.push({ dist: o, pan: a, at: performance.now() }),
      this.pumpVoices());
  }
  pumpVoices() {
    if (this.voiceWorking || !this.voiceQueue.length) return;
    this.voiceWorking = !0;
    const e = () => {
        const i = this.voiceQueue.shift();
        if (i) {
          const n = this.renderVoiceBuffer(
            i.type,
            i.kind,
            i.ind,
            i.variant,
            i.baby,
          );
          if (n) {
            for (this.voiceCache.set(i.key, n); this.voiceCache.size > 40;)
              this.voiceCache.delete(this.voiceCache.keys().next().value);
            const o = i.waiting.filter((a) => performance.now() - a.at < 450);
            o.length &&
              this.playVoiceBuffer(n, i.type, i.kind, o[0].dist, o[0].pan);
          }
        }
        ((this.voiceWorking = !1), this.pumpVoices());
      },
      t = globalThis.requestIdleCallback;
    t ? t(e, { timeout: 90 }) : setTimeout(e, 0);
  }
  renderVoiceBuffer(e, t, i, n, o) {
    const a = this.ctx;
    if (!a) return null;
    const r = xle(e, t, i + 1, n, o, iL);
    if (!r) return null;
    const l = a.createBuffer(1, r.length, iL);
    return (l.getChannelData(0).set(r), l);
  }
  playVoiceBuffer(e, t, i, n, o) {
    const a = this.ctx,
      r = this.master;
    if (
      !a ||
      !r ||
      this.volumeMul === 0 ||
      this.sfxVoices >= 140 ||
      this.creatureVoices >= 6
    )
      return;
    const l = dM[t],
      c = Math.max(0, 1 - n / l) ** 1.2;
    if (c <= 0.01) return;
    const h = e.duration + 0.1,
      d = this.transient(a.createStereoPanner(), h + 1.5),
      u = this.transient(a.createBiquadFilter(), h + 1.5);
    if (
      ((d.pan.value = Oe(o, -0.9, 0.9)),
      (u.type = "lowpass"),
      (u.frequency.value = 11e3 / (1 + n * 0.045)),
      (u.Q.value = 0.5),
      u.connect(d).connect(r),
      this.reverbIn && n > 4)
    ) {
      const m = this.transient(a.createGain(), h + 1.5);
      ((m.gain.value = Oe(0.03 + n * 0.0045, 0.03, 0.24)),
        u.connect(m).connect(this.reverbIn));
    }
    const f = a.createBufferSource(),
      p = a.createGain();
    ((f.buffer = e),
      (f.playbackRate.value = 0.97 + Math.random() * 0.06),
      (p.gain.value = c * Lle[t] * (i === "idle" ? 1 : 1.18)),
      f.connect(p).connect(u),
      this.creatureVoices++,
      this.sfxVoices++,
      f.start(a.currentTime + 0.005),
      (f.onended = () => {
        (this.creatureVoices--,
          this.sfxVoices--,
          f.disconnect(),
          p.disconnect());
      }));
  }
  creatureVoices = 0;
  pulseWave = null;
  creature(e, t, i, n, o = 1) {
    const a = this.ctx;
    if (!a || this.creatureVoices >= 6) return !1;
    const r = Math.max(...e.map((d) => (d.at ?? 0) + d.dur)),
      l = this.spookBus(t, i, r, n);
    if (!l) return !1;
    const c = t < 16,
      h = a.currentTime + 0.01;
    for (const d of e) {
      const u = h + (d.at ?? 0),
        f = u + d.dur,
        p = [];
      (this.creatureVoices++, this.sfxVoices++);
      const m = a.createOscillator();
      (d.source === "pulse"
        ? m.setPeriodicWave((this.pulseWave ??= Ile(a, 0.18)))
        : (m.type = d.source === "tri" ? "triangle" : "sawtooth"),
        m.frequency.setValueAtTime(d.pitch[0][1], u));
      for (const [R, _] of d.pitch.slice(1))
        m.frequency.exponentialRampToValueAtTime(
          Math.max(20, _),
          u + R * d.dur,
        );
      for (let R = 0, _ = 0.035; R * _ < d.dur; R++)
        m.detune.setValueAtTime(
          (Math.random() - 0.5) * (d.jitter ?? 18),
          u + R * _,
        );
      let g = m;
      const y = [];
      if (c && d.vibrato) {
        const R = a.createOscillator(),
          _ = a.createGain();
        ((R.frequency.value = d.vibrato[0]),
          (_.gain.value = d.vibrato[1]),
          R.connect(_).connect(m.detune),
          y.push(R),
          p.push(_));
      }
      if (c && d.rough) {
        const R = a.createGain(),
          _ = a.createOscillator(),
          C = a.createGain();
        _.frequency.setValueAtTime(d.pitch[0][1] / 2, u);
        for (const [P, O] of d.pitch.slice(1))
          _.frequency.exponentialRampToValueAtTime(
            Math.max(10, O / 2),
            u + P * d.dur,
          );
        ((R.gain.value = 1 - d.rough * 0.5),
          (C.gain.value = d.rough * 0.5),
          _.connect(C).connect(R.gain),
          m.connect(R),
          (g = R),
          y.push(_),
          p.push(R, C));
      }
      const b = a.createGain();
      if (((b.gain.value = 1), p.push(b), g.connect(b), d.breath)) {
        const R = a.createBufferSource(),
          _ = a.createGain();
        ((R.buffer = this.pinkBuf ?? this.noiseBuf),
          (R.loop = !0),
          (_.gain.value = d.breath * 2.2),
          R.connect(_).connect(b),
          y.push(R),
          p.push(_));
      }
      const S = a.createGain();
      p.push(S);
      const M = d.vowels,
        E = c ? M[0][1].length : Math.min(2, M[0][1].length);
      for (let R = 0; R < E; R++) {
        const _ = a.createBiquadFilter(),
          C = a.createGain();
        ((_.type = "bandpass"),
          _.frequency.setValueAtTime(M[0][1][R][0], u),
          _.Q.setValueAtTime(M[0][1][R][1], u),
          C.gain.setValueAtTime(M[0][1][R][2], u));
        for (const [P, O] of M.slice(1))
          (_.frequency.linearRampToValueAtTime(O[R][0], u + P * d.dur),
            C.gain.linearRampToValueAtTime(O[R][2], u + P * d.dur));
        (b.connect(_).connect(C).connect(S), p.push(_, C));
      }
      const A = a.createGain(),
        T = Math.max(2e-4, (d.gain ?? 1) * o * l.gain * 1.1);
      A.gain.setValueAtTime(1e-4, u);
      for (const [R, _] of d.amp)
        A.gain.linearRampToValueAtTime(Math.max(1e-4, _ * T), u + R * d.dur);
      (A.gain.linearRampToValueAtTime(0, f + 0.02), p.push(A));
      let x = A;
      if (c && d.tremolo) {
        const R = a.createGain(),
          _ = a.createOscillator(),
          C = a.createGain();
        ((R.gain.value = 1 - d.tremolo[1] / 2),
          (_.frequency.value = d.tremolo[0]),
          (C.gain.value = d.tremolo[1] / 2),
          _.connect(C).connect(R.gain),
          A.connect(R),
          (x = R),
          y.push(_),
          p.push(R, C));
      }
      if (d.tilt) {
        const R = a.createBiquadFilter();
        ((R.type = "lowpass"),
          (R.frequency.value = d.tilt),
          (R.Q.value = 0.5),
          S.connect(R).connect(A),
          p.push(R));
      } else S.connect(A);
      x.connect(l.out);
      for (const R of [m, ...y]) (R.start(u), R.stop(f + 0.05));
      m.onended = () => {
        (this.creatureVoices--, this.sfxVoices--);
        for (const R of [m, ...y, ...p]) R.disconnect();
      };
    }
    return !0;
  }
  animalVoice(e, t = 0, i = 0, n = 0, o = "idle", a = !1) {
    if ((this.ensure(), dM[e] !== void 0)) {
      (this.playAnimalCall(e, o, i, a, t, n),
        e === Bt.CHICKEN && o !== "idle" && this.chickenFlutter(t));
      return;
    }
    const r = Ple(
        i * 977 + (o === "idle" ? Math.floor(Math.random() * 1e6) : 0),
      ),
      l = (a ? 1.55 : 1) * (0.92 + ((i * 37) % 17) / 100),
      c = a ? 1.22 : 0.96 + ((i * 13) % 9) / 100,
      h = (y) => y.map(([b, S]) => [b, S * l]),
      d = (y) => y.map(([b, S, M]) => [b * c, S, M]),
      u = o === "hurt",
      f = o === "death",
      p = [];
    let m = 40,
      g = 1;
    switch (e) {
      case Bt.COW: {
        if (((m = 70), u || f)) {
          p.push({
            dur: f ? 1.3 : 0.8,
            source: "saw",
            rough: 0.45,
            breath: 0.16,
            jitter: 30,
            vibrato: [6, 25],
            gain: 1.2,
            tilt: 3400,
            pitch: h(
              f
                ? [
                    [0, 150],
                    [0.2, 175],
                    [1, 70],
                  ]
                : [
                    [0, 165],
                    [0.25, 210],
                    [1, 150],
                  ],
            ),
            amp: [
              [0.06, 1],
              [0.6, 0.85],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [450, 5, 1],
                  [900, 6, 0.5],
                  [2500, 8, 0.15],
                ]),
              ],
              [
                0.3,
                d([
                  [700, 5, 1],
                  [1250, 6, 0.65],
                  [2600, 8, 0.2],
                ]),
              ],
              [
                1,
                d([
                  [420, 5, 1],
                  [880, 6, 0.3],
                  [2400, 8, 0.08],
                ]),
              ],
            ],
          });
          break;
        }
        const y = 1.1 + r() * 0.6;
        p.push({
          dur: y,
          source: "saw",
          rough: 0.25,
          breath: 0.1,
          jitter: 22,
          vibrato: [5, 12],
          tilt: 2600,
          pitch: h([
            [0, 100],
            [0.18, 126],
            [0.55, 120],
            [0.88, 98],
            [1, 84],
          ]),
          amp: [
            [0.1, 0.55],
            [0.28, 1],
            [0.75, 0.85],
            [1, 0],
          ],
          vowels: [
            [
              0,
              d([
                [230, 5, 1],
                [650, 6, 0.1],
                [2300, 9, 0.03],
              ]),
            ],
            [
              0.3,
              d([
                [520, 5, 1],
                [960, 6, 0.5],
                [2450, 8, 0.12],
              ]),
            ],
            [
              0.8,
              d([
                [480, 5, 1],
                [880, 6, 0.35],
                [2400, 8, 0.08],
              ]),
            ],
            [
              1,
              d([
                [260, 5, 1],
                [700, 6, 0.1],
                [2300, 9, 0.03],
              ]),
            ],
          ],
        });
        break;
      }
      case Bt.SHEEP: {
        m = 55;
        const y = u ? 0.55 : f ? 1 : 0.65 + r() * 0.35;
        p.push({
          dur: y,
          source: "saw",
          breath: 0.12,
          jitter: 25,
          vibrato: [u ? 11 : 8, u ? 90 : 55],
          tremolo: [u ? 11 : 8, 0.55],
          tilt: 5200,
          gain: u ? 1.15 : 1,
          pitch: h(
            u
              ? [
                  [0, 420],
                  [0.2, 520],
                  [1, 400],
                ]
              : f
                ? [
                    [0, 330],
                    [0.2, 350],
                    [1, 180],
                  ]
                : [
                    [0, 280],
                    [0.12, 335],
                    [0.5, 318],
                    [1, 270],
                  ],
          ),
          amp: [
            [0.05, 0.7],
            [0.14, 1],
            [0.8, 0.75],
            [1, 0],
          ],
          vowels: [
            [
              0,
              d([
                [320, 5, 1],
                [1150, 6, 0.2],
                [2600, 9, 0.08],
              ]),
            ],
            [
              0.15,
              d([
                [860, 5, 1],
                [1520, 6, 0.6],
                [2750, 9, 0.28],
              ]),
            ],
            [
              1,
              d([
                [700, 5, 1],
                [1300, 6, 0.4],
                [2600, 9, 0.16],
              ]),
            ],
          ],
        });
        break;
      }
      case Bt.PIG: {
        if (((m = 45), u || f)) {
          p.push({
            dur: f ? 0.9 : 0.55,
            source: "saw",
            rough: 0.2,
            breath: 0.2,
            jitter: 40,
            vibrato: [13, 45],
            gain: 1.2,
            pitch: h(
              f
                ? [
                    [0, 900],
                    [0.25, 1250],
                    [1, 520],
                  ]
                : [
                    [0, 700],
                    [0.3, 1300],
                    [0.7, 1220],
                    [1, 900],
                  ],
            ),
            amp: [
              [0.04, 1],
              [0.7, 0.8],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [1200, 4, 1],
                  [2600, 5, 0.6],
                  [4e3, 6, 0.3],
                ]),
              ],
              [
                1,
                d([
                  [1e3, 4, 1],
                  [2300, 5, 0.5],
                  [3600, 6, 0.25],
                ]),
              ],
            ],
          });
          break;
        }
        if (r() < 0.25) {
          p.push({
            dur: 0.16,
            source: "pulse",
            breath: 1,
            gain: 0.5,
            pitch: h([
              [0, 90],
              [1, 80],
            ]),
            amp: [
              [0.08, 1],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [700, 3, 1],
                  [1800, 3, 0.6],
                  [3200, 4, 0.2],
                ]),
              ],
            ],
          });
          break;
        }
        const y = 2 + Math.floor(r() * 3);
        for (let b = 0, S = 0; b < y; b++) {
          const M = 0.11 + r() * 0.09;
          (p.push({
            at: S,
            dur: M,
            source: "pulse",
            rough: 0.65,
            breath: 0.3,
            jitter: 35,
            tilt: 2600,
            pitch: h([
              [0, 118 - b * 6],
              [1, 86 - b * 4],
            ]),
            amp: [
              [0.15, 1],
              [0.5, 0.7],
              [1, 0],
            ],
            gain: 1 - b * 0.12,
            vowels: [
              [
                0,
                d([
                  [420, 4, 1],
                  [1100, 5, 0.45],
                  [2300, 6, 0.12],
                ]),
              ],
            ],
          }),
            (S += M + 0.07 + r() * 0.1));
        }
        break;
      }
      case Bt.CHICKEN: {
        if (((m = 36), u || f)) {
          (p.push({
            dur: f ? 0.45 : 0.3,
            source: "saw",
            rough: 0.4,
            breath: 0.3,
            jitter: 50,
            gain: 1.1,
            pitch: h(
              f
                ? [
                    [0, 800],
                    [0.2, 1050],
                    [1, 450],
                  ]
                : [
                    [0, 700],
                    [0.2, 1050],
                    [1, 640],
                  ],
            ),
            amp: [
              [0.05, 1],
              [0.6, 0.8],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [1200, 3, 1],
                  [2400, 4, 0.8],
                  [3800, 6, 0.4],
                ]),
              ],
            ],
          }),
            this.chickenFlutter(t));
          break;
        }
        const y = 2 + Math.floor(r() * 4);
        let b = 0;
        for (let S = 0; S < y; S++) {
          const M = 0.07 + r() * 0.04;
          (p.push({
            at: b,
            dur: M,
            source: "pulse",
            rough: 0.3,
            breath: 0.15,
            jitter: 30,
            gain: 0.8,
            pitch: h([
              [0, 390],
              [1, 300],
            ]),
            amp: [
              [0.12, 1],
              [0.4, 0.6],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [950, 4, 1],
                  [1850, 5, 0.6],
                  [3200, 7, 0.25],
                ]),
              ],
            ],
          }),
            (b += M + 0.12 + r() * 0.2));
        }
        r() < 0.35 &&
          p.push({
            at: b,
            dur: 0.28,
            source: "saw",
            rough: 0.25,
            breath: 0.15,
            jitter: 30,
            vibrato: [7, 30],
            pitch: h([
              [0, 460],
              [0.3, 720],
              [1, 520],
            ]),
            amp: [
              [0.08, 1],
              [0.7, 0.8],
              [1, 0],
            ],
            vowels: [
              [
                0,
                d([
                  [800, 4, 1],
                  [1700, 5, 0.5],
                  [3100, 7, 0.2],
                ]),
              ],
              [
                0.3,
                d([
                  [1150, 4, 1],
                  [2150, 5, 0.7],
                  [3400, 7, 0.3],
                ]),
              ],
            ],
          });
        break;
      }
      case Bt.CAMEL: {
        m = 60;
        const y = u ? 0.8 : f ? 1.4 : 1 + r() * 0.5;
        (p.push({
          dur: y,
          source: "saw",
          rough: 0.85,
          breath: 0.25,
          jitter: 40,
          vibrato: [4, 20],
          tremolo: [u ? 18 : 13, 0.5],
          gain: u ? 1.2 : 1,
          tilt: 2200,
          pitch: h(
            u
              ? [
                  [0, 120],
                  [0.3, 150],
                  [1, 105],
                ]
              : f
                ? [
                    [0, 110],
                    [0.3, 120],
                    [1, 50],
                  ]
                : [
                    [0, 78],
                    [0.3, 96],
                    [0.7, 80],
                    [1, 62],
                  ],
          ),
          amp: [
            [0.1, 0.8],
            [0.3, 1],
            [0.8, 0.8],
            [1, 0],
          ],
          vowels: [
            [
              0,
              d([
                [300, 4, 1],
                [800, 5, 0.4],
                [2100, 6, 0.12],
              ]),
            ],
            [
              0.4,
              d([
                [420, 4, 1],
                [950, 5, 0.55],
                [2300, 6, 0.15],
              ]),
            ],
            [
              1,
              d([
                [320, 4, 1],
                [820, 5, 0.4],
                [2150, 6, 0.12],
              ]),
            ],
          ],
        }),
          o === "idle" &&
            p.push({
              at: y + 0.05,
              dur: 0.2,
              source: "pulse",
              breath: 1,
              gain: 0.6,
              pitch: h([
                [0, 70],
                [1, 60],
              ]),
              amp: [
                [0.1, 1],
                [1, 0],
              ],
              vowels: [
                [
                  0,
                  d([
                    [600, 2.5, 1],
                    [1500, 3, 0.5],
                    [3e3, 4, 0.2],
                  ]),
                ],
              ],
            }));
        break;
      }
      case Bt.SHARK: {
        const y = Math.max(0, 0.3 * (1 - t / 34));
        if (y <= 0.01) return;
        u || f
          ? (this.noise(0.5, 900, y * 0.5, "bandpass", 0, 1.2),
            this.noise(0.35, 2200, y * 0.3, "bandpass", 0.12, 1.4))
          : (this.noise(0.9, 260, y * 0.25, "lowpass", 0, 1.4),
            this.tone(62 * l, 44 * l, 0.8, y * 0.18, "sine"));
        return;
      }
      case Bt.FISH: {
        const y = Math.max(0, 0.3 * (1 - t / 30));
        if (y <= 0.01) return;
        const b = u || f ? 3 : 1;
        for (let S = 0; S < b; S++)
          this.noise(0.12, 1100 + S * 180, y * 0.2, "bandpass", S * 0.11, 1.1);
        return;
      }
      default:
        return;
    }
    p.length && this.creature(p, t, n, m, g * (f ? 0.9 : 1));
  }
}
