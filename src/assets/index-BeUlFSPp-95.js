// index-BeUlFSPp 95 — gain
// Lines 59056-59338 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const rT = {
  hover: () => ks({ f: Hu(2600, 0.05), to: 2350, dur: 0.022, gain: 0.028 }),
  click: () => IR(),
  confirm: () => {
    (IR(1.05),
      Ta(1318.5, 0.035, 0.32, 0.085),
      Ta(1975.5, 0.095, 0.42, 0.07),
      gn({
        f: 9e3,
        at: 0.05,
        dur: 0.2,
        gain: 0.02,
        type: "highpass",
        send: 0.4,
      }));
  },
  back: () => {
    (ks({ f: 980, to: 520, dur: 0.075, gain: 0.12 }),
      Ta(987.8, 0.02, 0.18, 0.04),
      Ta(740, 0.07, 0.24, 0.035));
  },
  tab: () => {
    (gn({ f: 1400, to: 3600, dur: 0.085, gain: 0.05, Q: 1.4, attack: 0.02 }),
      ks({
        f: Hu(1760),
        to: 1500,
        dur: 0.02,
        gain: 0.06,
        type: "triangle",
        at: 0.03,
      }));
  },
  toggleOn: () => {
    (ks({ f: 880, dur: 0.05, gain: 0.08, type: "triangle" }),
      ks({ f: 1320, dur: 0.08, gain: 0.08, type: "triangle", at: 0.055 }));
  },
  toggleOff: () => {
    (ks({ f: 1320, dur: 0.05, gain: 0.07, type: "triangle" }),
      ks({ f: 880, dur: 0.08, gain: 0.07, type: "triangle", at: 0.055 }));
  },
  deny: () => {
    for (const s of [0, 0.1])
      (ks({ f: 196, dur: 0.08, gain: 0.09, type: "square", at: s }),
        ks({ f: 207, dur: 0.08, gain: 0.06, type: "sawtooth", at: s }));
  },
  slide: (s) =>
    ks({ f: 600 + s * 900, dur: 0.018, gain: 0.04, type: "triangle" }),
  pick: () => {
    (ks({ f: Hu(520), to: 820, dur: 0.065, gain: 0.1, type: "triangle" }),
      gn({ f: 3200, dur: 0.02, gain: 0.05 }));
  },
  place: () => {
    (ks({ f: Hu(760), to: 300, dur: 0.08, gain: 0.13 }),
      gn({ f: 900, dur: 0.045, gain: 0.08, type: "lowpass" }),
      ks({ f: 2100, dur: 0.012, gain: 0.04, type: "triangle" }));
  },
  swap: () => {
    (rT.place(0),
      ks({
        f: 600,
        to: 900,
        dur: 0.06,
        gain: 0.08,
        type: "triangle",
        at: 0.07,
      }));
  },
  attach: () => {
    (gn({ f: 2200, to: 5200, dur: 0.12, gain: 0.07, Q: 2.4, attack: 0.03 }),
      gn({ f: 5200, at: 0.13, dur: 0.012, gain: 0.26, type: "highpass" }),
      ks({ f: 3300, at: 0.13, dur: 0.01, gain: 0.05, type: "square" }),
      gn({ f: 1800, at: 0.2, dur: 0.03, gain: 0.3, Q: 1.8 }),
      ks({ f: 170, to: 80, at: 0.2, dur: 0.08, gain: 0.16 }),
      Ta(1568, 0.27, 0.5, 0.07, 3.5, 2, -0.15),
      Ta(1975.5, 0.32, 0.55, 0.06, 3.5, 2, 0.15),
      Ta(2349.3, 0.38, 0.7, 0.055),
      gn({
        f: 9500,
        at: 0.3,
        dur: 0.35,
        gain: 0.022,
        type: "highpass",
        send: 0.5,
      }));
  },
  detach: () => {
    (gn({ f: 1800, dur: 0.025, gain: 0.2, Q: 1.8 }),
      ks({ f: 150, to: 90, dur: 0.07, gain: 0.12 }),
      gn({
        f: 5e3,
        to: 1800,
        at: 0.05,
        dur: 0.14,
        gain: 0.06,
        Q: 2.4,
        attack: 0.02,
      }),
      Ta(1174.7, 0.12, 0.3, 0.035));
  },
  coin: () => {
    (Ta(1975.5, 0, 0.35, 0.07, 2.76, 1.4),
      Ta(2637, 0.06, 0.45, 0.06, 2.76, 1.4));
  },
  open: () => {
    (gn({ f: 700, to: 2600, dur: 0.16, gain: 0.05, Q: 0.9, attack: 0.05 }),
      ks({ f: 420, to: 640, dur: 0.1, gain: 0.05, type: "triangle" }));
  },
  caseShake: (s) => {
    (gn({ f: 520 + s * 60, dur: 0.06, gain: 0.14, type: "lowpass", Q: 2 }),
      ks({ f: 110 + s * 8, to: 70, dur: 0.07, gain: 0.12 }),
      gn({ f: 2600, at: 0.02, dur: 0.02, gain: 0.05 }));
  },
  caseUnlock: () => {
    for (const [s, e] of [
      [0, -0.4],
      [0.11, 0.4],
    ])
      (gn({ f: 4200, at: s, dur: 0.014, gain: 0.3, type: "highpass", pan: e }),
        gn({ f: 1500, at: s + 0.006, dur: 0.04, gain: 0.2, Q: 2, pan: e }),
        ks({ f: 210, to: 100, at: s, dur: 0.07, gain: 0.12, pan: e }));
    gn({
      f: 6e3,
      to: 2500,
      at: 0.2,
      dur: 0.55,
      gain: 0.06,
      type: "highpass",
      attack: 0.02,
      send: 0.3,
    });
  },
  caseOpen: () => {
    (ks({ f: 70, to: 40, dur: 0.5, gain: 0.3 }),
      gn({ f: 300, to: 3e3, dur: 0.45, gain: 0.1, Q: 0.8, attack: 0.08 }),
      ks({
        f: 220,
        to: 1320,
        dur: 0.5,
        gain: 0.04,
        type: "triangle",
        attack: 0.1,
      }),
      Ta(1046.5, 0.32, 0.6, 0.05),
      Ta(1568, 0.38, 0.7, 0.045),
      gn({
        f: 9e3,
        at: 0.3,
        dur: 0.6,
        gain: 0.025,
        type: "highpass",
        send: 0.5,
      }));
  },
  reelTick: (s) => {
    const e = 1 - Math.min(1, s);
    (ks({
      f: Hu(1500 + s * 900, 0.04),
      to: 1100,
      dur: 0.022 + e * 0.02,
      gain: 0.07 + e * 0.05,
      type: "triangle",
    }),
      gn({ f: 5200, dur: 0.01, gain: 0.04 + e * 0.05, type: "highpass" }),
      e > 0.6 && ks({ f: 240, to: 140, dur: 0.04, gain: 0.05 * e }));
  },
  reelStop: () => {
    (ks({ f: 900, to: 450, dur: 0.09, gain: 0.12 }),
      gn({ f: 1200, dur: 0.05, gain: 0.12, type: "lowpass" }),
      ks({ f: 120, to: 60, dur: 0.18, gain: 0.2 }));
  },
};
function qs(s, e = 0) {
  if (
    !(!Bf() || (typeof document < "u" && document.hidden)) &&
    !(!aT() || !I1)
  ) {
    if (s === "hover") {
      const t = performance.now();
      if (t - CR < 45) return;
      CR = t;
    }
    if (s === "slide") {
      const t = performance.now();
      if (t - LR < 55) return;
      LR = t;
    }
    try {
      rT[s](e);
    } catch {}
  }
}
function lT(s) {
  if (!Bf() || !aT()) return;
  const e = Math.max(0, Math.min(6, s)),
    t = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77][e];
  if (
    (ks({ f: 80, to: 38, dur: 0.7 + e * 0.12, gain: 0.22 + e * 0.03 }),
    gn({ f: 400, to: 4e3, dur: 0.35, gain: 0.06, Q: 0.8, attack: 0.03 }),
    [1, 1.26, 1.5, 2, 2.52]
      .slice(0, 3 + Math.min(2, e >> 1))
      .forEach((i, n) =>
        Ta(
          t * i,
          0.06 + n * 0.075,
          0.7 + e * 0.1,
          0.07 - n * 0.006,
          3.5,
          1.8,
          n % 2 ? 0.2 : -0.2,
        ),
      ),
    gn({
      f: 9e3,
      at: 0.1,
      dur: 0.9 + e * 0.2,
      gain: 0.02 + e * 0.006,
      type: "highpass",
      send: 0.6,
    }),
    e >= 4)
  ) {
    const i = Cn;
    for (const [n, o] of [
      [1, -7],
      [1.5, 6],
      [2, -4],
      [2.52, 9],
    ]) {
      if (Mr >= $5) break;
      Mr++;
      const a = i.createOscillator(),
        r = i.createBiquadFilter(),
        l = i.createGain(),
        c = i.currentTime + 0.25,
        h = c + 1.8 + (e - 4) * 0.4;
      ((a.type = "sawtooth"),
        (a.frequency.value = (t / 2) * n),
        (a.detune.value = o),
        (r.type = "lowpass"),
        r.frequency.setValueAtTime(600, c),
        r.frequency.exponentialRampToValueAtTime(3200, c + 0.6),
        r.frequency.exponentialRampToValueAtTime(500, h),
        l.gain.setValueAtTime(1e-4, c),
        l.gain.exponentialRampToValueAtTime(0.03 * Bf(), c + 0.35),
        l.gain.exponentialRampToValueAtTime(1e-4, h),
        V5(a.connect(r).connect(l), 0.5),
        a.start(c),
        a.stop(h + 0.05),
        (a.onended = () => {
          (Mr--, a.disconnect(), r.disconnect(), l.disconnect());
        }));
    }
  }
}
const Gb =
    "button, [role=button], [role=tab], [role=radio], [role=menuitem], [role=switch], a[href], summary, select, .btn, .mm-row, .settings-tab",
  jX =
    '[data-sound=back], .ar-back, .sr-close, .icon-button[aria-label], [aria-label=Close], [aria-label="Закрыть"], [id$=close], [id$=-close], .close, .modal-close',
  XX =
    "[data-sound=confirm], .ar-primary, .sr-primary, .sr-post, .btn.primary, button[type=submit], .lobby-button:not(.quiet):not(.icon-button), .mm-play, #playbtn",
  ZX =
    "[data-sound=tab], [role=tab], .ar-tab, .settings-tab, .sr-templates button",
  d4 = "#mobile-controls, #hud";
function PR(s) {
  if (s.closest(d4)) return null;
  const e = s.closest("[data-sound]")?.dataset.sound;
  return e === "none"
    ? null
    : e && e in rT
      ? e
      : s.disabled || s.getAttribute("aria-disabled") === "true"
        ? "deny"
        : s.matches(jX)
          ? "back"
          : s.matches(ZX)
            ? "tab"
            : s.matches(XX)
              ? "confirm"
              : s.matches("select, summary")
                ? "open"
                : "click";
}
let OR = !1;
