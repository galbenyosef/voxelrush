// index-Dp6GxvJu 215 — beat
// Lines 120270-120595 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const CR = 22050,
  Gb = {
    [ANIMAL_KIND.COW]: 70,
    [ANIMAL_KIND.SHEEP]: 55,
    [ANIMAL_KIND.PIG]: 45,
    [ANIMAL_KIND.CHICKEN]: 36,
    [ANIMAL_KIND.CAMEL]: 60,
  },
  pie = {
    [ANIMAL_KIND.COW]: 0.55,
    [ANIMAL_KIND.SHEEP]: 0.45,
    [ANIMAL_KIND.PIG]: 0.5,
    [ANIMAL_KIND.CHICKEN]: 0.36,
    [ANIMAL_KIND.CAMEL]: 0.55,
  };
function mie(n, e) {
  const i = new Float32Array(40),
    s = new Float32Array(40);
  for (let o = 1; o < 40; o++)
    i[o] = (2 / (o * Math.PI)) * Math.sin(o * Math.PI * e);
  return n.createPeriodicWave(i, s);
}
function gie(n) {
  let e = n >>> 0;
  return () => {
    e = (e + 1831565813) >>> 0;
    let t = e;
    return (
      (t = Math.imul(t ^ (t >>> 15), t | 1)),
      (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
const qM = {
    open: {
      chords: [
        [48, 55, 59, 64],
        [45, 52, 55, 60],
        [41, 48, 52, 57],
        [43, 50, 55, 59],
      ],
      beat: 0.82,
      level: 1,
    },
    forest: {
      chords: [
        [48, 55, 60, 64],
        [53, 57, 60, 65],
        [45, 52, 57, 60],
        [43, 50, 55, 62],
      ],
      beat: 0.75,
      level: 0.95,
    },
    cave: {
      chords: [
        [45, 52, 57, 60],
        [41, 48, 55, 60],
        [48, 55, 59, 64],
        [43, 50, 57, 62],
      ],
      beat: 1.12,
      level: 0.65,
    },
    combat: {
      chords: [
        [45, 52, 57, 60],
        [41, 48, 53, 57],
        [48, 55, 60, 64],
        [43, 50, 55, 59],
      ],
      beat: 0.57,
      level: 0.82,
    },
    desert: {
      chords: [
        [50, 57, 62, 65],
        [50, 57, 60, 64],
        [48, 55, 60, 64],
        [50, 57, 62, 65],
      ],
      beat: 0.56,
      level: 0.86,
      voice: "lyre",
      melody: [74, 76, 77, -1, 81, 79, 77, 76, 74, -1, 72, 74, 76, 74, -1, -1],
      pulse: 0.035,
    },
    ocean: {
      chords: [
        [53, 60, 64, 69],
        [48, 55, 60, 64],
        [50, 57, 60, 65],
        [46, 53, 57, 62],
      ],
      beat: 1.02,
      level: 0.85,
    },
    winter: {
      chords: [
        [50, 57, 61, 66],
        [47, 54, 57, 62],
        [43, 50, 54, 59],
        [45, 52, 57, 61],
      ],
      beat: 1.15,
      level: 0.72,
      voice: "bell",
    },
    mountain: {
      chords: [
        [48, 55, 62, 67],
        [43, 50, 57, 62],
        [45, 52, 59, 64],
        [41, 48, 55, 60],
      ],
      beat: 1.05,
      level: 0.8,
      voice: "flute",
    },
    jungle: {
      chords: [
        [45, 52, 57, 60],
        [48, 55, 60, 64],
        [43, 50, 55, 62],
        [45, 52, 57, 60],
      ],
      beat: 0.64,
      level: 0.8,
      voice: "flute",
      pulse: 0.045,
    },
    savanna: {
      chords: [
        [48, 55, 60, 64],
        [45, 52, 57, 60],
        [41, 48, 53, 57],
        [43, 50, 55, 62],
      ],
      beat: 0.72,
      level: 0.82,
      voice: "oud",
      pulse: 0.05,
    },
    volcanic: {
      chords: [
        [38, 45, 50, 57],
        [41, 48, 53, 60],
        [38, 45, 53, 57],
        [36, 43, 50, 55],
      ],
      beat: 0.88,
      level: 0.72,
      pulse: 0.035,
    },
    raid: {
      chords: [
        [45, 52, 57, 60],
        [41, 48, 53, 57],
        [43, 50, 55, 59],
        [40, 47, 52, 59],
      ],
      beat: 0.29,
      level: 0.82,
      voice: "oud",
      pulse: 0.15,
    },
    siege: {
      chords: [
        [38, 45, 50, 57],
        [46, 53, 58, 62],
        [43, 50, 55, 58],
        [45, 52, 57, 61],
      ],
      beat: 0.36,
      level: 0.8,
      voice: "oud",
      pulse: 0.12,
    },
    moon: {
      chords: [
        [48, 55, 62, 66],
        [45, 52, 59, 64],
        [41, 48, 55, 62],
        [43, 50, 57, 64],
      ],
      beat: 1.4,
      level: 0.6,
      voice: "bell",
    },
    pyramid: {
      chords: [
        [50, 57, 62, 65],
        [48, 55, 60, 64],
        [46, 53, 57, 62],
        [45, 52, 57, 60],
      ],
      beat: 1.08,
      level: 0.72,
    },
  },
  Ed = (n) => 440 * 2 ** ((n - 69) / 12);
function kR(n) {
  let e = (n * 2654435761) >>> 0 || 1;
  return () => (
    (e ^= e << 13),
    (e >>>= 0),
    (e ^= e >>> 17),
    (e ^= e << 5),
    (e >>>= 0),
    e / 4294967296
  );
}
const Wb = {},
  LR = (n) =>
    Wb[n] ?? (Wb[n] = [...n].reduce((e, t) => e * 31 + t.charCodeAt(0), 7)),
  IR = new WeakMap();
function yie(n) {
  let e = IR.get(n);
  if (!e) {
    e = n.createBuffer(1, n.sampleRate, n.sampleRate);
    const t = e.getChannelData(0);
    for (let i = 0; i < t.length; i++) t[i] = Math.random() * 2 - 1;
    IR.set(n, e);
  }
  return e;
}
function vie(n, e, t, i, s, o, a = 0, r = "piano") {
  const l = n.createGain(),
    c = n.createStereoPanner();
  if (((c.pan.value = a), r === "pad")) {
    const u = n.createBiquadFilter();
    return (
      (u.type = "lowpass"),
      (u.Q.value = 0.4),
      u.frequency.setValueAtTime(Ed(t) * 1.4, i),
      u.frequency.linearRampToValueAtTime(Ed(t) * 3.2, i + o * 0.45),
      u.frequency.linearRampToValueAtTime(Ed(t) * 1.6, i + o),
      u.connect(l).connect(c).connect(e),
      l.gain.setValueAtTime(0, i),
      l.gain.linearRampToValueAtTime(s, i + Math.min(1.2, o * 0.35)),
      l.gain.setValueAtTime(s, i + o * 0.7),
      l.gain.linearRampToValueAtTime(0, i + o + 0.8),
      [-7, 0, 6].map((f, p) => {
        const m = n.createOscillator(),
          y = n.createGain();
        return (
          (m.type = p === 1 ? "sine" : "triangle"),
          (m.frequency.value = Ed(t)),
          (m.detune.value = f),
          (y.gain.value = p === 1 ? 0.5 : 0.32),
          m.connect(y).connect(u),
          m.start(i),
          m.stop(i + o + 0.85),
          (m.onended = () => {
            (m.disconnect(),
              y.disconnect(),
              p === 2 && (u.disconnect(), l.disconnect(), c.disconnect()));
          }),
          m
        );
      })
    );
  }
  (l.connect(c).connect(e),
    l.gain.setValueAtTime(0, i),
    l.gain.linearRampToValueAtTime(
      s,
      i +
        (r === "aulos"
          ? 0.08
          : r === "flute"
            ? 0.12
            : r === "oud" || r === "lyre"
              ? 0.008
              : 0.018),
    ),
    l.gain.exponentialRampToValueAtTime(1e-4, i + o),
    l.gain.linearRampToValueAtTime(0, i + o + 0.05));
  const h =
      r === "lyre"
        ? [1, 0.4, 0.19]
        : r === "aulos"
          ? [1, 0.22, 0.3]
          : r === "oud"
            ? [1, 0.32, 0.12]
            : r === "bell"
              ? [1, 0.1, 0.04]
              : r === "flute"
                ? [1, 0.055, 0.018]
                : [1, 0.16, 0.025],
    d = [1, 2, 3].map((u, f) => {
      const p = n.createOscillator(),
        m = n.createGain();
      return (
        (p.type = "sine"),
        (p.frequency.value = Ed(t) * u * (r === "bell" && f === 2 ? 1.19 : 1)),
        (m.gain.value = h[f]),
        p.connect(m).connect(l),
        p.start(i),
        p.stop(i + o + 0.06),
        (p.onended = () => {
          (p.disconnect(),
            m.disconnect(),
            f === 2 && r !== "piano" && (l.disconnect(), c.disconnect()));
        }),
        p
      );
    });
  if (r === "piano") {
    const u = n.createOscillator(),
      f = n.createGain();
    ((u.type = "sine"),
      (u.frequency.value = Ed(t)),
      (u.detune.value = 4),
      (f.gain.value = 0.45),
      u.connect(f).connect(l),
      u.start(i),
      u.stop(i + o + 0.06),
      (u.onended = () => {
        (u.disconnect(), f.disconnect(), l.disconnect(), c.disconnect());
      }),
      d.push(u));
  }
  return d;
}
