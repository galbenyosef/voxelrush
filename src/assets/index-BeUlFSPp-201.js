// index-BeUlFSPp 201 — connect
// Lines 107475-107717 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function nae(s, e) {
  const t = s.createGain(),
    i = [t],
    n = [];
  let o = t;
  const a = (u) => {
      (o.connect(u), (o = u), i.push(u));
    },
    r = (u, f, p = 0, m = 0.7) => {
      const g = s.createBiquadFilter();
      ((g.type = u),
        (g.frequency.value = f),
        (g.gain.value = p),
        (g.Q.value = m),
        a(g));
    },
    l = (u) => {
      const f = s.createWaveShaper(),
        p = new Float32Array(2048);
      for (let m = 0; m < p.length; m++)
        p[m] = Math.tanh(((m * 2) / (p.length - 1) - 1) * u) * 0.65;
      ((f.curve = p), (f.oversample = "2x"), a(f));
    },
    c = GT.find((u) => u.id === e)?.semitones ?? 0;
  if (c) {
    const u = 2 ** (c / 12),
      f = 0.05,
      p = Math.round((s.sampleRate * f) / Math.abs(1 - u)),
      m = s.createGain(),
      g = [];
    i.push(m);
    for (let b = 0; b < 2; b++) {
      const S = s.createBuffer(2, p, s.sampleRate),
        M = S.getChannelData(0),
        E = S.getChannelData(1);
      for (let _ = 0; _ < p; _++) {
        const C = (_ / p + b * 0.5) % 1;
        ((M[_] = 0.008 + f * (u > 1 ? 1 - C : C)),
          (E[_] = Math.sin(Math.PI * C) ** 2));
      }
      const A = s.createBufferSource(),
        T = s.createChannelSplitter(2),
        x = s.createDelay(0.1),
        R = s.createGain();
      ((A.buffer = S),
        (A.loop = !0),
        (x.delayTime.value = 0),
        (R.gain.value = 0),
        A.connect(T),
        T.connect(x.delayTime, 0),
        T.connect(R.gain, 1),
        o.connect(x),
        x.connect(R),
        R.connect(m),
        i.push(A, T, x, R),
        n.push(A),
        g.push(A));
    }
    const y = s.currentTime + 0.005;
    for (const b of g) b.start(y);
    o = m;
  }
  if (e === "church") {
    (r("highpass", 100), r("peaking", 1500, 5, 0.8));
    const u = s.createGain();
    ((u.gain.value = 7), a(u), l(5));
    const f = s.createGain();
    (o.connect(f), i.push(f));
    for (const [p, m] of [
      [0.08, 0.75],
      [0.17, 0.65],
      [0.29, 0.55],
      [0.43, 0.45],
      [0.61, 0.34],
      [0.83, 0.24],
      [1.07, 0.16],
      [1.31, 0.09],
    ]) {
      const g = s.createDelay(1.4),
        y = s.createBiquadFilter(),
        b = s.createGain();
      ((g.delayTime.value = p),
        (y.type = "lowpass"),
        (y.frequency.value = 4200 - p * 1800),
        (b.gain.value = m),
        o.connect(g),
        g.connect(y),
        y.connect(b),
        b.connect(f),
        i.push(g, y, b));
    }
    ((o = f), l(2));
  }
  if (
    (e === "female"
      ? (r("highpass", 140), r("lowshelf", 350, -4), r("peaking", 2600, 3))
      : e === "valakas"
        ? (r("highpass", 90),
          r("lowshelf", 180, 3),
          r("peaking", 1050, 8, 1.2),
          r("lowpass", 3400),
          l(2.3))
        : e === "chipmunk"
          ? (r("highpass", 200), r("highshelf", 2200, 3))
          : e === "giant"
            ? (r("lowshelf", 180, 5), r("lowpass", 2400))
            : e === "demon"
              ? (r("lowshelf", 160, 4), r("lowpass", 3e3), l(2))
              : (e === "radio" || e === "megaphone") &&
                (r("highpass", e === "radio" ? 500 : 700),
                r("lowpass", e === "radio" ? 2400 : 1800),
                l(e === "radio" ? 4 : 12)),
    e === "robot" || e === "alien" || e === "demon")
  ) {
    const u = s.createGain();
    ((u.gain.value = e === "robot" ? 0 : e === "demon" ? 0.85 : 0.5), a(u));
    const f = s.createOscillator(),
      p = s.createGain();
    if (
      ((f.type = e === "alien" ? "triangle" : "sine"),
      (f.frequency.value = e === "robot" ? 45 : e === "demon" ? 8 : 110),
      (p.gain.value = e === "demon" ? 0.15 : 0.5),
      f.connect(p),
      p.connect(u.gain),
      i.push(f, p),
      n.push(f),
      f.start(),
      e === "alien")
    ) {
      const m = s.createDelay(0.2);
      ((m.delayTime.value = 0.035), a(m));
    }
  }
  if (e === "manhole") {
    (r("highpass", 100), r("lowpass", 2600), r("peaking", 480, 3, 1.5));
    const u = s.createGain(),
      f = s.createGain();
    (o.connect(u), u.connect(f), i.push(u, f));
    const p = s.createBuffer(1, Math.ceil(s.sampleRate * 14.3), s.sampleRate),
      m = p.getChannelData(0);
    for (const y of [1.3, 4.8, 5.25, 9.1, 12.6]) {
      const b = Math.floor((y + Math.random() * 0.25) * s.sampleRate),
        S = 950 + Math.random() * 500;
      for (let M = 0; M < s.sampleRate * 0.24; M++) {
        const E = M / s.sampleRate,
          A = Math.min(1, E / 0.003) * Math.exp(-E * 28),
          T = 2 * Math.PI * (S * E + 1e3 * E * E);
        m[b + M] += 0.07 * A * (Math.sin(T) + 0.2 * Math.sin(T * 1.7));
      }
    }
    const g = s.createBufferSource();
    ((g.buffer = p),
      (g.loop = !0),
      g.connect(u),
      i.push(g),
      n.push(g),
      g.start());
    for (const [y, b] of [
      [0.105, 0.32],
      [0.19, 0.22],
      [0.285, 0.14],
      [0.405, 0.09],
      [0.55, 0.045],
    ]) {
      const S = s.createDelay(0.6),
        M = s.createBiquadFilter(),
        E = s.createGain();
      ((S.delayTime.value = y),
        (M.type = "lowpass"),
        (M.frequency.value = 1900 - y * 1400),
        (E.gain.value = b),
        u.connect(S),
        S.connect(M),
        M.connect(E),
        E.connect(f),
        i.push(S, M, E));
    }
    o = f;
  }
  const h = s.createDynamicsCompressor();
  ((h.threshold.value = -12), (h.ratio.value = 12), a(h));
  let d = !1;
  return {
    input: t,
    output: o,
    dispose() {
      if (!d) {
        d = !0;
        for (const u of n) u.stop();
        for (const u of i) u.disconnect();
      }
    },
  };
}
const tM = {
  channel: "global",
  mode: "ptt",
  effect: "clean",
  threshold: 0.025,
  volume: 0.8,
};
function oae() {
  try {
    const s = JSON.parse(localStorage.getItem("fc-voice") || "{}");
    return {
      channel: s.channel === "squad" ? "squad" : "global",
      mode: s.mode === "vad" ? "vad" : "ptt",
      effect: GT.some((e) => e.id === s.effect) ? s.effect : "clean",
      threshold: Number.isFinite(s.threshold)
        ? Math.max(0.005, Math.min(0.15, s.threshold))
        : tM.threshold,
      volume: Number.isFinite(s.volume)
        ? Math.max(0, Math.min(1, s.volume))
        : tM.volume,
    };
  } catch {
    return { ...tM };
  }
}
const aae = 0.6,
  Fg = [{ urls: "stun:stun.l.google.com:19302" }];
function SC(s) {
  if (!Array.isArray(s) || !s.length)
    throw new Error("ICE server list must be a non-empty array");
  return s.map((e) => {
    if (!e || typeof e != "object") throw new Error("Invalid ICE server");
    const t = e.urls;
    if (
      typeof t != "string" &&
      !(Array.isArray(t) && t.every((a) => typeof a == "string"))
    )
      throw new Error("Invalid ICE server URL");
    const i = { urls: t },
      n = e.username,
      o = e.credential;
    return (
      n !== void 0 && (i.username = String(n)),
      o !== void 0 && (i.credential = typeof o == "string" ? o : String(o)),
      i
    );
  });
}
const ii = (s, e) => I(e, s);
