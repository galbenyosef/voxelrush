// assets__index-Dp6GxvJu 177 — connect
// Lines 100089-100333 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function FJ(n, e) {
  var u;
  const t = n.createGain(),
    i = [t],
    s = [];
  let o = t;
  const a = (f) => {
      (o.connect(f), (o = f), i.push(f));
    },
    r = (f, p, m = 0, y = 0.7) => {
      const g = n.createBiquadFilter();
      ((g.type = f),
        (g.frequency.value = p),
        (g.gain.value = m),
        (g.Q.value = y),
        a(g));
    },
    l = (f) => {
      const p = n.createWaveShaper(),
        m = new Float32Array(2048);
      for (let y = 0; y < m.length; y++)
        m[y] = Math.tanh(((y * 2) / (m.length - 1) - 1) * f) * 0.65;
      ((p.curve = m), (p.oversample = "2x"), a(p));
    },
    c = ((u = G4.find((f) => f.id === e)) == null ? void 0 : u.semitones) ?? 0;
  if (c) {
    const f = 2 ** (c / 12),
      p = 0.05,
      m = Math.round((n.sampleRate * p) / Math.abs(1 - f)),
      y = n.createGain(),
      g = [];
    i.push(y);
    for (let S = 0; S < 2; S++) {
      const M = n.createBuffer(2, m, n.sampleRate),
        x = M.getChannelData(0),
        T = M.getChannelData(1);
      for (let L = 0; L < m; L++) {
        const N = (L / m + S * 0.5) % 1;
        ((x[L] = 0.008 + p * (f > 1 ? 1 - N : N)),
          (T[L] = Math.sin(Math.PI * N) ** 2));
      }
      const A = n.createBufferSource(),
        _ = n.createChannelSplitter(2),
        C = n.createDelay(0.1),
        R = n.createGain();
      ((A.buffer = M),
        (A.loop = !0),
        (C.delayTime.value = 0),
        (R.gain.value = 0),
        A.connect(_),
        _.connect(C.delayTime, 0),
        _.connect(R.gain, 1),
        o.connect(C),
        C.connect(R),
        R.connect(y),
        i.push(A, _, C, R),
        s.push(A),
        g.push(A));
    }
    const b = n.currentTime + 0.005;
    for (const S of g) S.start(b);
    o = y;
  }
  if (e === "church") {
    (r("highpass", 100), r("peaking", 1500, 5, 0.8));
    const f = n.createGain();
    ((f.gain.value = 7), a(f), l(5));
    const p = n.createGain();
    (o.connect(p), i.push(p));
    for (const [m, y] of [
      [0.08, 0.75],
      [0.17, 0.65],
      [0.29, 0.55],
      [0.43, 0.45],
      [0.61, 0.34],
      [0.83, 0.24],
      [1.07, 0.16],
      [1.31, 0.09],
    ]) {
      const g = n.createDelay(1.4),
        b = n.createBiquadFilter(),
        S = n.createGain();
      ((g.delayTime.value = m),
        (b.type = "lowpass"),
        (b.frequency.value = 4200 - m * 1800),
        (S.gain.value = y),
        o.connect(g),
        g.connect(b),
        b.connect(S),
        S.connect(p),
        i.push(g, b, S));
    }
    ((o = p), l(2));
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
    const f = n.createGain();
    ((f.gain.value = e === "robot" ? 0 : e === "demon" ? 0.85 : 0.5), a(f));
    const p = n.createOscillator(),
      m = n.createGain();
    if (
      ((p.type = e === "alien" ? "triangle" : "sine"),
      (p.frequency.value = e === "robot" ? 45 : e === "demon" ? 8 : 110),
      (m.gain.value = e === "demon" ? 0.15 : 0.5),
      p.connect(m),
      m.connect(f.gain),
      i.push(p, m),
      s.push(p),
      p.start(),
      e === "alien")
    ) {
      const y = n.createDelay(0.2);
      ((y.delayTime.value = 0.035), a(y));
    }
  }
  if (e === "manhole") {
    (r("highpass", 100), r("lowpass", 2600), r("peaking", 480, 3, 1.5));
    const f = n.createGain(),
      p = n.createGain();
    (o.connect(f), f.connect(p), i.push(f, p));
    const m = n.createBuffer(1, Math.ceil(n.sampleRate * 14.3), n.sampleRate),
      y = m.getChannelData(0);
    for (const b of [1.3, 4.8, 5.25, 9.1, 12.6]) {
      const S = Math.floor((b + Math.random() * 0.25) * n.sampleRate),
        M = 950 + Math.random() * 500;
      for (let x = 0; x < n.sampleRate * 0.24; x++) {
        const T = x / n.sampleRate,
          A = Math.min(1, T / 0.003) * Math.exp(-T * 28),
          _ = 2 * Math.PI * (M * T + 1e3 * T * T);
        y[S + x] += 0.07 * A * (Math.sin(_) + 0.2 * Math.sin(_ * 1.7));
      }
    }
    const g = n.createBufferSource();
    ((g.buffer = m),
      (g.loop = !0),
      g.connect(f),
      i.push(g),
      s.push(g),
      g.start());
    for (const [b, S] of [
      [0.105, 0.32],
      [0.19, 0.22],
      [0.285, 0.14],
      [0.405, 0.09],
      [0.55, 0.045],
    ]) {
      const M = n.createDelay(0.6),
        x = n.createBiquadFilter(),
        T = n.createGain();
      ((M.delayTime.value = b),
        (x.type = "lowpass"),
        (x.frequency.value = 1900 - b * 1400),
        (T.gain.value = S),
        f.connect(M),
        M.connect(x),
        x.connect(T),
        T.connect(p),
        i.push(M, x, T));
    }
    o = p;
  }
  const h = n.createDynamicsCompressor();
  ((h.threshold.value = -12), (h.ratio.value = 12), a(h));
  let d = !1;
  return {
    input: t,
    output: o,
    dispose() {
      if (!d) {
        d = !0;
        for (const f of s) f.stop();
        for (const f of i) f.disconnect();
      }
    },
  };
}
const Lb = {
  channel: "global",
  mode: "ptt",
  effect: "clean",
  threshold: 0.025,
  volume: 0.8,
};
function GJ() {
  try {
    const n = JSON.parse(localStorage.getItem("fc-voice") || "{}");
    return {
      channel: n.channel === "squad" ? "squad" : "global",
      mode: n.mode === "vad" ? "vad" : "ptt",
      effect: G4.some((e) => e.id === n.effect) ? n.effect : "clean",
      threshold: Number.isFinite(n.threshold)
        ? Math.max(0.005, Math.min(0.15, n.threshold))
        : Lb.threshold,
      volume: Number.isFinite(n.volume)
        ? Math.max(0, Math.min(1, n.volume))
        : Lb.volume,
    };
  } catch {
    return { ...Lb };
  }
}
const WJ = 0.6,
  e2 = [{ urls: "stun:stun.l.google.com:19302" }];
function Y_(n) {
  if (!Array.isArray(n) || !n.length)
    throw new Error("ICE server list must be a non-empty array");
  return n.map((e) => {
    if (!e || typeof e != "object") throw new Error("Invalid ICE server");
    const t = e.urls;
    if (
      typeof t != "string" &&
      !(Array.isArray(t) && t.every((a) => typeof a == "string"))
    )
      throw new Error("Invalid ICE server URL");
    const i = { urls: t },
      s = e.username,
      o = e.credential;
    return (
      s !== void 0 && (i.username = String(s)),
      o !== void 0 && (i.credential = typeof o == "string" ? o : String(o)),
      i
    );
  });
}
const zI = () => z.language === "en",
  ni = (n, e) => (zI() ? e : n);
