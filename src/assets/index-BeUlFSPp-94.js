// index-BeUlFSPp 94 — gain
// Lines 58756-59055 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function i7() {
  if (!h4 || !L1) return;
  let s = document.getElementById("weapon-inspect-label");
  s ||
    ((s = document.createElement("div")),
    (s.id = "weapon-inspect-label"),
    (s.role = "status"),
    document.body.append(s));
  const e = L1;
  ((L1 = void 0),
    (s.textContent =
      e.name +
      (e.detail
        ? `
` + e.detail
        : "")),
    s.style.setProperty("--skin-color", e.color),
    (s.hidden = !1),
    clearTimeout(kv),
    (kv = setTimeout(() => {
      s.hidden = !0;
    }, 2e3)),
    Cv(!0));
}
function KX(s, e, t = "") {
  ((L1 = { name: s, color: e, detail: t }), i7());
}
function RR() {
  ((L1 = void 0), clearTimeout(kv));
  const s = document.getElementById("weapon-inspect-label");
  s && (s.hidden = !0);
}
function kR(s) {
  if (h4 !== s)
    if (((h4 = s), s)) i7();
    else {
      clearTimeout(kv);
      const e = document.getElementById("weapon-inspect-label");
      e && (e.hidden = !0);
    }
}
function Ub(s) {
  if (!s.getClientRects().length) return !1;
  if (typeof s.checkVisibility == "function")
    return s.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 });
  for (let e = s; e; e = e.parentElement) {
    const t = getComputedStyle(e);
    if (t.visibility === "hidden" || t.opacity === "0") return !1;
  }
  return !0;
}
function YX(s, e) {
  return (
    s.left < e.right + 8 &&
    s.right > e.left - 8 &&
    s.top < e.bottom + 8 &&
    s.bottom > e.top - 8
  );
}
function Cv(s = !1) {
  const e = performance.now();
  if (!s && e < _R) return;
  _R = e + 1e3;
  const t = innerWidth,
    i = innerHeight,
    n = 12,
    o = Array.from(document.querySelectorAll(qX))
      .filter(Ub)
      .map((a) => a.getBoundingClientRect());
  o.push({
    left: t / 2 - 32,
    right: t / 2 + 32,
    top: i / 2 - 32,
    bottom: i / 2 + 32,
  });
  for (const a of ["ammo", "weapon-inspect-label"]) {
    const r = document.getElementById(a);
    if (
      !r ||
      r.hidden ||
      !r.textContent ||
      !r.getClientRects().length ||
      ((r.style.visibility = ""), !Ub(r))
    )
      continue;
    const l = a === "weapon-inspect-label",
      c = r.currentCSSZoom || 1,
      h =
        !l && document.body.classList.contains("mobile")
          ? document.getElementById("mobfire")
          : null,
      d = h && Ub(h) ? h.getBoundingClientRect() : null,
      u = l ? t / 2 : d ? d.left + d.width / 2 : t - n,
      f = l
        ? Math.max(
            74,
            (document.getElementById("compass")?.getBoundingClientRect()
              .bottom ?? 0) + 12,
          )
        : d
          ? d.top - 6
          : i - n;
    let p;
    for (const m of [l && t < 600 ? 220 : 280, 220, 160]) {
      r.style.maxWidth = `${Math.min(m, t - 2 * n) / c}px`;
      const g = r.getBoundingClientRect(),
        y = g.width,
        b = g.height,
        S = l || d ? u - y / 2 : u - y,
        M = l ? f : f - b,
        E = [
          S,
          n,
          t - n - y,
          ...o.flatMap((T) => [T.right + 10, T.left - y - 10]),
        ],
        A = [
          M,
          n,
          i - n - b,
          ...o.flatMap((T) => [T.bottom + 10, T.top - b - 10]),
        ];
      for (const T of E)
        for (const x of A) {
          if (T < n || x < n || T + y > t - n || x + b > i - n) continue;
          const R = { left: T, right: T + y, top: x, bottom: x + b };
          if (o.some((C) => YX(R, C))) continue;
          const _ = Math.abs(T - S) + Math.abs(x - M) * 1.4 + (280 - m) * 2;
          (!p || _ < p.score) && (p = { x: T, y: x, w: y, h: b, score: _ });
        }
      if (p) {
        r.style.maxWidth = `${Math.min(m, t - 2 * n) / c}px`;
        break;
      }
    }
    p
      ? ((r.style.left = `${Math.round(p.x / c)}px`),
        (r.style.top = `${Math.round(p.y / c)}px`),
        o.push({ left: p.x, right: p.x + p.w, top: p.y, bottom: p.y + p.h }))
      : (r.style.visibility = "hidden");
  }
}
window.addEventListener("resize", () => Cv(!0));
let Cn = null,
  I1 = null,
  P1 = null,
  Lv = null,
  Mr = 0,
  CR = 0,
  LR = 0;
const $5 = 48;
function aT() {
  if (Cn) return (Cn.state === "suspended" && Cn.resume().catch(() => {}), Cn);
  try {
    Cn = new AudioContext({ latencyHint: "interactive" });
  } catch {
    return null;
  }
  I1 = Cn.createGain();
  const s = Cn.createDynamicsCompressor();
  ((s.threshold.value = -14),
    (s.knee.value = 10),
    (s.ratio.value = 4),
    (s.attack.value = 0.002),
    (s.release.value = 0.12));
  const e = Cn.createBiquadFilter();
  ((e.type = "highshelf"),
    (e.frequency.value = 7e3),
    (e.gain.value = -2),
    I1.connect(s).connect(e).connect(Cn.destination));
  const t = Cn.sampleRate,
    i = Math.floor(t * 0.55),
    n = Cn.createBuffer(2, i, t);
  for (let l = 0; l < 2; l++) {
    const c = n.getChannelData(l);
    for (let h = 0; h < i; h++)
      c[h] = (Math.random() * 2 - 1) * Math.pow(1 - h / i, 3.2);
  }
  const o = Cn.createConvolver();
  o.buffer = n;
  const a = Cn.createBiquadFilter();
  ((a.type = "highpass"),
    (a.frequency.value = 600),
    (P1 = Cn.createGain()),
    (P1.gain.value = 0.32),
    P1.connect(a).connect(o).connect(I1),
    (Lv = Cn.createBuffer(1, t, t)));
  const r = Lv.getChannelData(0);
  for (let l = 0; l < t; l++) r[l] = Math.random() * 2 - 1;
  return Cn;
}
function Bf() {
  if (Y.uiSounds === !1) return 0;
  const s = Y.sfxVolume ?? 1;
  return s <= 0 ? 0 : 0.5 * s;
}
function ks(s) {
  const e = Cn,
    t = e.currentTime + (s.at ?? 0),
    i = t + s.dur;
  if (Mr >= $5) return;
  Mr++;
  const n = e.createOscillator(),
    o = e.createGain();
  ((n.type = s.type ?? "sine"),
    n.frequency.setValueAtTime(s.f, t),
    s.to &&
      s.to !== s.f &&
      n.frequency.exponentialRampToValueAtTime(Math.max(20, s.to), i),
    o.gain.setValueAtTime(1e-4, t),
    o.gain.exponentialRampToValueAtTime(
      Math.max(2e-4, s.gain * Bf()),
      t + (s.attack ?? 0.002),
    ),
    o.gain.exponentialRampToValueAtTime(1e-4, i),
    V5(n.connect(o), s.send, s.pan),
    n.start(t),
    n.stop(i + 0.03),
    (n.onended = () => {
      (Mr--, n.disconnect(), o.disconnect());
    }));
}
function gn(s) {
  const e = Cn,
    t = e.currentTime + (s.at ?? 0),
    i = t + s.dur;
  if (Mr >= $5 || !Lv) return;
  Mr++;
  const n = e.createBufferSource(),
    o = e.createBiquadFilter(),
    a = e.createGain();
  ((n.buffer = Lv),
    (n.loop = !0),
    (o.type = s.type ?? "bandpass"),
    (o.Q.value = s.Q ?? 1),
    o.frequency.setValueAtTime(s.f, t),
    s.to && s.to !== s.f && o.frequency.exponentialRampToValueAtTime(s.to, i),
    a.gain.setValueAtTime(1e-4, t),
    a.gain.exponentialRampToValueAtTime(
      Math.max(2e-4, s.gain * Bf()),
      t + (s.attack ?? 0.002),
    ),
    a.gain.exponentialRampToValueAtTime(1e-4, i),
    V5(n.connect(o).connect(a), s.send, s.pan),
    n.start(t, Math.random() * 0.8),
    n.stop(i + 0.03),
    (n.onended = () => {
      (Mr--, n.disconnect(), o.disconnect(), a.disconnect());
    }));
}
function Ta(s, e, t, i, n = 3.5, o = 2.2, a = 0) {
  const r = Cn,
    l = r.currentTime + e,
    c = l + t;
  if (Mr >= $5) return;
  Mr++;
  const h = r.createOscillator(),
    d = r.createOscillator(),
    u = r.createGain(),
    f = r.createGain();
  ((h.frequency.value = s),
    (d.frequency.value = s * n),
    u.gain.setValueAtTime(s * o, l),
    u.gain.exponentialRampToValueAtTime(s * 0.05, l + t * 0.6),
    d.connect(u).connect(h.frequency),
    f.gain.setValueAtTime(1e-4, l),
    f.gain.exponentialRampToValueAtTime(Math.max(2e-4, i * Bf()), l + 0.004),
    f.gain.exponentialRampToValueAtTime(1e-4, c),
    V5(h.connect(f), 0.55, a),
    h.start(l),
    d.start(l),
    h.stop(c + 0.03),
    d.stop(c + 0.03),
    (h.onended = () => {
      (Mr--, h.disconnect(), d.disconnect(), u.disconnect(), f.disconnect());
    }));
}
function V5(s, e = 0, t = 0) {
  const i = Cn;
  let n = s;
  if (t) {
    const o = i.createStereoPanner();
    ((o.pan.value = t),
      (n = s.connect(o)),
      setTimeout(() => o.disconnect(), 3e3));
  }
  if ((n.connect(I1), e && P1)) {
    const o = i.createGain();
    ((o.gain.value = e),
      n.connect(o).connect(P1),
      setTimeout(() => o.disconnect(), 3e3));
  }
}
const Hu = (s, e = 0.03) => s * (1 + (Math.random() * 2 - 1) * e);
function IR(s = 1, e = 1) {
  (ks({ f: Hu(1180 * s), to: 620 * s, dur: 0.045, gain: 0.16 * e }),
    ks({ f: 2350 * s, dur: 0.014, gain: 0.045 * e, type: "triangle" }),
    gn({ f: 6200, dur: 0.012, gain: 0.07 * e, type: "highpass" }),
    ks({ f: 190, to: 95, dur: 0.055, gain: 0.07 * e }));
}
