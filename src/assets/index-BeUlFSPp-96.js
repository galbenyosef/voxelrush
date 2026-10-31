// index-BeUlFSPp 96 — math
// Lines 59339-59680 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function QX() {
  if (OR || typeof document > "u") return;
  OR = !0;
  const s = () => !!document.pointerLockElement;
  (document.addEventListener(
    "pointerdown",
    (t) => {
      if (t.button !== 0 || s()) return;
      aT();
      const i = t.target?.closest?.(Gb);
      if (
        !i ||
        i.matches("input, label") ||
        i.closest("input[type=checkbox], input[type=range]")
      )
        return;
      const n = PR(i);
      n && qs(n);
    },
    { capture: !0, passive: !0 },
  ),
    document.addEventListener(
      "click",
      (t) => {
        if (t.detail !== 0 || s()) return;
        const i = t.target?.closest?.(Gb),
          n = i && PR(i);
        n && qs(n);
      },
      { capture: !0, passive: !0 },
    ),
    document.addEventListener(
      "change",
      (t) => {
        const i = t.target;
        !(i instanceof HTMLInputElement) ||
          s() ||
          i.closest("[data-sound=none]") ||
          i.closest(d4) ||
          (i.type === "checkbox"
            ? qs(i.checked ? "toggleOn" : "toggleOff")
            : i.type === "radio" && qs("tab"));
      },
      { capture: !0, passive: !0 },
    ),
    document.addEventListener(
      "input",
      (t) => {
        const i = t.target;
        if (
          !(i instanceof HTMLInputElement) ||
          i.type !== "range" ||
          i.closest("[data-sound=none]")
        )
          return;
        const n = Number(i.min || 0),
          o = Number(i.max || 100);
        qs("slide", (Number(i.value) - n) / Math.max(1e-6, o - n));
      },
      { capture: !0, passive: !0 },
    ));
  let e = null;
  document.addEventListener(
    "pointerover",
    (t) => {
      if (t.pointerType !== "mouse" || s()) return;
      const i = t.target?.closest?.(Gb) ?? null;
      i !== e &&
        ((e = i),
        !(
          !i ||
          i.disabled ||
          i.closest("[data-sound=none]") ||
          i.closest(d4)
        ) && qs("hover"));
    },
    { capture: !0, passive: !0 },
  );
}
const q5 = {
    [w.NIGHT_VISION_GOGGLES]: {
      id: w.NIGHT_VISION_GOGGLES,
      kind: "nightVision",
      maxDurability: 1800,
      label: "Очки ночного зрения",
      labelEn: "Night vision goggles",
    },
    [w.THERMAL_GOGGLES]: {
      id: w.THERMAL_GOGGLES,
      kind: "thermal",
      maxDurability: 1200,
      label: "Очки с тепловизором",
      labelEn: "Thermal goggles",
    },
  },
  JX = Object.keys(q5).map(Number),
  Wc = (s) => s in q5,
  Sr = (s) => q5[s]?.maxDurability ?? 0;
function qr(s) {
  return !s || T0[s.id]?.slot !== "helmet"
    ? 0
    : Wc(s.magazine ?? 0)
      ? (s.magazine ?? 0)
      : 0;
}
const eZ = {
    [L.TANK]: new k(1.25, 1.25, 1.65),
    [L.PLANE]: new k(1.5, 1.25, 1.65),
    [L.HELI]: new k(1.6, 1.4, 1.6),
    [L.HIMARS]: new k(1.12, 1.12, 1.3),
    [L.PATRIOT]: new k(1.12, 1.12, 1.3),
    [L.BTR_TURRET]: new k(1.12, 1.2, 1.4),
    [L.BOAT]: new k(1.15, 1.15, 1.4),
    [L.SUBMARINE]: new k(1.2, 1.2, 2),
  },
  tZ = new k(1, 1, 1),
  En = (s) => eZ[s] ?? tZ,
  s7 = new zs(new k(-6, -1, -21), new k(6, 3.4, 21)),
  iZ = new zs(new k(3.6, 3.4, 0.9), new k(6, 7.8, 7.1)),
  ji = (s, e, t, i, n, o) => new zs(new k(s, e, t), new k(i, n, o)),
  O1 = {
    [L.FIGHTER_JET]: [
      ji(-0.7, 0.75, -6.5, 0.7, 2.15, 6.2),
      ji(-0.6, 1.9, -3.9, 0.6, 2.7, -0.9),
      ji(-2.8, 1.55, 4, 2.8, 1.85, 5.8),
      ji(-1.1, 1.8, 3.8, 1.1, 4.2, 5.8),
      ji(-2, 1.35, -1.8, 2, 1.6, 1.5),
      ji(-3.8, 1.35, 0.1, -2, 1.6, 1.95),
      ji(2, 1.35, 0.1, 3.8, 1.6, 1.95),
      ji(-5.2, 1.35, 1.2, -3.8, 1.6, 2.3),
      ji(3.8, 1.35, 1.2, 5.2, 1.6, 2.3),
    ],
    [L.TANK]: [
      ji(-1.28, 0, -1.9, 1.28, 1.2, 1.9),
      ji(-0.78, 1.2, -0.72, 0.78, 1.83, 0.92),
    ],
    [L.PLANE]: [
      ji(-0.5, 0.48, -2.15, 0.5, 1.5, 2.25),
      ji(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
    ],
    [L.DRONE]: [ji(-0.46, 0, -0.46, 0.46, 0.55, 0.46)],
    [L.BOAT]: [ji(-1.28, -0.42, -3.25, 1.28, 1.04, 3.25)],
    [L.CARRIER]: [s7, iZ],
    [L.HELI]: [
      ji(-0.72, 0.78, -1.2, 0.72, 2.02, 1.2),
      ji(-0.53, 1.225, -1.95, 0.53, 2.175, -1.15),
      ji(-0.45, 1.05, 1.2, 0.45, 1.9, 1.6),
      ji(-0.21, 1.75, 1, 0.21, 2.25, 4.2),
      ji(-0.05, 1.85, 3.75, 0.05, 2.95, 4.45),
      ji(-0.75, 2.05, 3.425, 0.75, 2.15, 3.975),
      ji(-0.96, 0.15, -1.5, -0.84, 0.65, 1.5),
      ji(0.84, 0.15, -1.5, 0.96, 0.65, 1.5),
      ji(-1.36, 0.99, -0.85, -0.94, 1.41, 0.45),
      ji(0.94, 0.99, -0.85, 1.36, 1.41, 0.45),
      ji(-0.55, 1.85, -0.1, 0.55, 2.45, 1.3),
    ],
    [L.HIMARS]: [
      ji(-1.28, 0, -2.72, 1.28, 1.28, 2.72),
      ji(-0.95, 1.28, -1.15, 0.95, 2.25, 1.7),
    ],
    [L.PATRIOT]: [
      ji(-1.28, 0, -2.75, 1.28, 1.28, 2.75),
      ji(-1, 1.28, -1.2, 1, 2.5, 1.9),
    ],
    [L.MORTAR]: [
      ji(-0.85, 0, -0.85, 0.85, 0.4, 0.85),
      ji(-0.38, 0.4, -0.8, 0.38, 2.35, 0.4),
    ],
    [L.TURRET]: [ji(-0.72, 0, -0.72, 0.72, 1.72, 0.72)],
    [L.BTR_TURRET]: [
      ji(-1.3, 0, -2.62, 1.3, 1.26, 2.62),
      ji(-0.68, 1.26, -0.7, 0.68, 1.95, 0.82),
    ],
    [L.SUBMARINE]: [
      ji(-2.15, -1.35, -5.6, 2.15, 1.35, 5.6),
      ji(-1.05, 1.2, -0.35, 1.05, 2.6, 1.5),
    ],
    [L.SPACE_ROCKET]: [ji(-2.2, 0, -2.2, 2.2, 11.8, 2.2)],
  },
  lo = {
    ...O1,
    [L.PLANE]: [
      ...O1[L.PLANE],
      ji(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
      ji(-1.3, 1.2, 1.55, 1.3, 1.48, 2.45),
    ],
    [L.HELI]: [
      ...O1[L.HELI],
      ji(-3.1, 2.42, -3.1, 3.1, 2.55, 3.1),
      ji(0.255, 1.75, 3.45, 0.305, 3.05, 4.75),
    ],
  },
  NR = new Set();
for (const s of [O1, lo])
  for (const [e, t] of Object.entries(s))
    for (const i of t)
      NR.has(i) || (NR.add(i), i.min.multiply(En(+e)), i.max.multiply(En(+e)));
const DR = new Map();
function sZ(s) {
  let e = DR.get(s);
  return (
    e !== void 0 ||
      ((e = Math.max(
        1,
        ...(lo[s] ?? []).map((t) =>
          Math.hypot(
            Math.max(Math.abs(t.min.x), Math.abs(t.max.x)),
            Math.max(Math.abs(t.min.y), Math.abs(t.max.y)),
            Math.max(Math.abs(t.min.z), Math.abs(t.max.z)),
          ),
        ),
      )),
      DR.set(s, e)),
    e
  );
}
const N1 = new k(),
  HR = new k(),
  BR = new hi();
function hg(s, e) {
  let t = 0;
  for (const i of lo[s] ?? [])
    for (const n of [i.min.x, i.max.x])
      for (const o of [i.min.y, i.max.y])
        for (const a of [i.min.z, i.max.z])
          (N1.set(n, o, a).applyQuaternion(e), (t = Math.min(t, N1.y)));
  return -t + 0.03;
}
function zf(s, e, t, i, n = lo[s] ?? []) {
  const { x: o, y: a, z: r, w: l } = t,
    c = [
      [1 - 2 * (a * a + r * r), 2 * (o * a + r * l), 2 * (o * r - a * l)],
      [2 * (o * a - r * l), 1 - 2 * (o * o + r * r), 2 * (a * r + o * l)],
      [2 * (o * r + a * l), 2 * (a * r - o * l), 1 - 2 * (o * o + a * a)],
    ],
    h = c.map((d) => d.map(Math.abs));
  for (const d of n) {
    const u = [
        (d.max.x - d.min.x) / 2,
        (d.max.y - d.min.y) / 2,
        (d.max.z - d.min.z) / 2,
      ],
      f = [
        (d.max.x + d.min.x) / 2,
        (d.max.y + d.min.y) / 2,
        (d.max.z + d.min.z) / 2,
      ],
      p = [e.x, e.y, e.z].map(
        (g, y) => g + c[0][y] * f[0] + c[1][y] * f[1] + c[2][y] * f[2],
      ),
      m = [0, 1, 2].map(
        (g) => h[0][g] * u[0] + h[1][g] * u[1] + h[2][g] * u[2],
      );
    if (!(p[1] - m[1] >= jt))
      for (
        let g = Math.floor(p[0] - m[0] + 1e-5);
        g <= Math.floor(p[0] + m[0] - 1e-5);
        g++
      )
        for (
          let y = Math.floor(p[1] - m[1] + 1e-5);
          y <= Math.min(jt - 1, Math.floor(p[1] + m[1] - 1e-5));
          y++
        )
          for (
            let b = Math.floor(p[2] - m[2] + 1e-5);
            b <= Math.floor(p[2] + m[2] - 1e-5);
            b++
          ) {
            if (!i(g + 0.5, y + 0.5, b + 0.5)) continue;
            const S = [g + 0.5 - p[0], y + 0.5 - p[1], b + 0.5 - p[2]];
            if (
              S.some((E, A) => Math.abs(E) >= m[A] + 0.5 - 1e-5) ||
              c.some(
                (E, A) =>
                  Math.abs(S[0] * E[0] + S[1] * E[1] + S[2] * E[2]) >=
                  u[A] + 0.5 * (h[A][0] + h[A][1] + h[A][2]) - 1e-5,
              )
            )
              continue;
            let M = !1;
            for (let E = 0; E < 3 && !M; E++)
              for (let A = 0; A < 3; A++) {
                const T = (A + 1) % 3,
                  x = (A + 2) % 3,
                  R =
                    0.5 * (h[E][T] + h[E][x]) +
                    u[(E + 1) % 3] * h[(E + 2) % 3][A] +
                    u[(E + 2) % 3] * h[(E + 1) % 3][A],
                  _ = Math.hypot(c[E][T], c[E][x]);
                if (
                  _ > 1e-8 &&
                  Math.abs(S[T] * c[E][x] - S[x] * c[E][T]) >= R - 1e-5 * _
                ) {
                  M = !0;
                  break;
                }
              }
            if (!M) return !0;
          }
  }
  return !1;
}
function zh(s, e, t, i, n, o, a) {
  const r = sZ(s);
  if (Math.min(e.y, t.y) > jt + r) return !1;
  const l = i.angleTo(n),
    c = Math.max(1, Math.ceil((e.distanceTo(t) + l * r) / 0.25));
  for (let h = 1; h <= c; h++)
    if (
      (HR.lerpVectors(e, t, h / c),
      BR.copy(i).slerp(n, h / c),
      zf(s, HR, BR, o))
    )
      return !0;
  return !1;
}
function zR(s, e, t, i) {
  if (!zf(s, e, t, i)) return !1;
  const n = e.clone();
  for (let o = 0.25; o <= 16; o += 0.25)
    for (const [a, r, l] of [
      [0, 1, 0],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, -1, 0],
    ])
      if ((n.set(e.x + a * o, e.y + r * o, e.z + l * o), !zf(s, n, t, i)))
        return (e.copy(n), !0);
  return !1;
}
function nZ(s, e, t, i, n, o) {
  const a = e.clone();
  a.y += 1;
  const r = t.clone();
  return (
    (r.y = Math.max(r.y, a.y)),
    zh(s, e, a, i, i, o) || zh(s, a, r, i, n, o) ? !1 : (t.copy(r), !0)
  );
}
