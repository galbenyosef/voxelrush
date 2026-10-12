// assets__index-Dp6GxvJu 75 — math
// Lines 51950-52297 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function o$(n, e) {
  return e
    ? n.replace(/\{(\w+)\}/g, (t, i) =>
        Object.prototype.hasOwnProperty.call(e, i) ? String(e[i]) : t,
      )
    : n;
}
function U(n, e) {
  var s;
  const t = _5[z.language] ?? _5.en,
    i =
      (lr() ? ((s = n$[z.language]) == null ? void 0 : s[n]) : void 0) ??
      t[n] ??
      _5.en[n] ??
      n;
  return o$(i, e);
}
const tL = new Set();
function Vo(n) {
  tL.add(n);
}
function aA() {
  ((document.documentElement.lang = z.language),
    document.querySelectorAll("[data-i18n]").forEach((n) => {
      n.textContent = U(n.dataset.i18n ?? "");
    }),
    document.querySelectorAll("[data-i18n-placeholder]").forEach((n) => {
      n.placeholder = U(n.dataset.i18nPlaceholder ?? "");
    }),
    document.querySelectorAll("[data-i18n-title]").forEach((n) => {
      n.title = U(n.dataset.i18nTitle ?? "");
    }),
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => {
      n.setAttribute("aria-label", U(n.dataset.i18nAria ?? ""));
    }),
    document.querySelectorAll("[data-icon]").forEach((n) => {
      n.innerHTML = Nn(n.dataset.icon);
    }));
  for (const n of tL) n();
}
function Ki(n) {
  const e = Zc(n);
  return e
    ? z.language === "en"
      ? e.labelEn
      : e.label
    : ((z.language === "en" ? l0 : Gc)[n] ?? "");
}
function kd(n) {
  return n ? (z.language === "en" ? n.labelEn : n.label) : "";
}
function Zs(n) {
  return (
    (z.language === "en" ? xS : ES)[n] ??
    (z.language === "en" ? "Vehicle" : "Техника")
  );
}
function rA(n) {
  return (z.language === "en" ? BH : DH)[n];
}
function lA(n) {
  return z.language === "en" ? n.descriptionEn : n.description;
}
function cA(n) {
  return z.language === "en" ? n.protectsEn : n.protects;
}
function hA(n) {
  return (z.language === "en" ? Lz : kz)[n];
}
function a$(n) {
  return (z.language === "en" ? Fz : Uz)[n];
}
function ad(n) {
  return n < 256 ? kd(de[n]) : Ki(n) || Ey(n, z.language);
}
function Iw(n) {
  return z.language === "en" ? n.nameEn : n.name;
}
function r$(n) {
  return Iw(Np(n));
}
const Py = {
    [E.NIGHT_VISION_GOGGLES]: {
      id: E.NIGHT_VISION_GOGGLES,
      kind: "nightVision",
      maxDurability: 1800,
      label: "Очки ночного зрения",
      labelEn: "Night vision goggles",
    },
    [E.THERMAL_GOGGLES]: {
      id: E.THERMAL_GOGGLES,
      kind: "thermal",
      maxDurability: 1200,
      label: "Очки с тепловизором",
      labelEn: "Thermal goggles",
    },
  },
  l$ = Object.keys(Py).map(Number),
  Ql = (n) => n in Py,
  Da = (n) => {
    var e;
    return ((e = Py[n]) == null ? void 0 : e.maxDurability) ?? 0;
  };
function sr(n) {
  var e;
  return !n || ((e = Nc[n.id]) == null ? void 0 : e.slot) !== "helmet"
    ? 0
    : Ql(n.magazine ?? 0)
      ? (n.magazine ?? 0)
      : 0;
}
const c$ = {
    [P.TANK]: new k(1.25, 1.25, 1.65),
    [P.PLANE]: new k(1.5, 1.25, 1.65),
    [P.HELI]: new k(1.6, 1.4, 1.6),
    [P.HIMARS]: new k(1.12, 1.12, 1.3),
    [P.PATRIOT]: new k(1.12, 1.12, 1.3),
    [P.BTR_TURRET]: new k(1.12, 1.2, 1.4),
    [P.BOAT]: new k(1.15, 1.15, 1.4),
    [P.SUBMARINE]: new k(1.2, 1.2, 2),
  },
  h$ = new k(1, 1, 1),
  ms = (n) => c$[n] ?? h$,
  iL = new gn(new k(-6, -1, -21), new k(6, 3.4, 21)),
  d$ = new gn(new k(3.6, 3.4, 0.9), new k(6, 7.8, 7.1)),
  zi = (n, e, t, i, s, o) => new gn(new k(n, e, t), new k(i, s, o)),
  Qf = {
    [P.FIGHTER_JET]: [
      zi(-0.7, 0.75, -6.5, 0.7, 2.15, 6.2),
      zi(-0.6, 1.9, -3.9, 0.6, 2.7, -0.9),
      zi(-2.8, 1.55, 4, 2.8, 1.85, 5.8),
      zi(-1.1, 1.8, 3.8, 1.1, 4.2, 5.8),
      zi(-2, 1.35, -1.8, 2, 1.6, 1.5),
      zi(-3.8, 1.35, 0.1, -2, 1.6, 1.95),
      zi(2, 1.35, 0.1, 3.8, 1.6, 1.95),
      zi(-5.2, 1.35, 1.2, -3.8, 1.6, 2.3),
      zi(3.8, 1.35, 1.2, 5.2, 1.6, 2.3),
    ],
    [P.TANK]: [
      zi(-1.28, 0, -1.9, 1.28, 1.2, 1.9),
      zi(-0.78, 1.2, -0.72, 0.78, 1.83, 0.92),
    ],
    [P.PLANE]: [
      zi(-0.5, 0.48, -2.15, 0.5, 1.5, 2.25),
      zi(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
    ],
    [P.DRONE]: [zi(-0.46, 0, -0.46, 0.46, 0.55, 0.46)],
    [P.BOAT]: [zi(-1.28, -0.42, -3.25, 1.28, 1.04, 3.25)],
    [P.CARRIER]: [iL, d$],
    [P.HELI]: [
      zi(-0.72, 0.78, -1.2, 0.72, 2.02, 1.2),
      zi(-0.53, 1.225, -1.95, 0.53, 2.175, -1.15),
      zi(-0.45, 1.05, 1.2, 0.45, 1.9, 1.6),
      zi(-0.21, 1.75, 1, 0.21, 2.25, 4.2),
      zi(-0.05, 1.85, 3.75, 0.05, 2.95, 4.45),
      zi(-0.75, 2.05, 3.425, 0.75, 2.15, 3.975),
      zi(-0.96, 0.15, -1.5, -0.84, 0.65, 1.5),
      zi(0.84, 0.15, -1.5, 0.96, 0.65, 1.5),
      zi(-1.36, 0.99, -0.85, -0.94, 1.41, 0.45),
      zi(0.94, 0.99, -0.85, 1.36, 1.41, 0.45),
      zi(-0.55, 1.85, -0.1, 0.55, 2.45, 1.3),
    ],
    [P.HIMARS]: [
      zi(-1.28, 0, -2.72, 1.28, 1.28, 2.72),
      zi(-0.95, 1.28, -1.15, 0.95, 2.25, 1.7),
    ],
    [P.PATRIOT]: [
      zi(-1.28, 0, -2.75, 1.28, 1.28, 2.75),
      zi(-1, 1.28, -1.2, 1, 2.5, 1.9),
    ],
    [P.MORTAR]: [
      zi(-0.85, 0, -0.85, 0.85, 0.4, 0.85),
      zi(-0.38, 0.4, -0.8, 0.38, 2.35, 0.4),
    ],
    [P.TURRET]: [zi(-0.72, 0, -0.72, 0.72, 1.72, 0.72)],
    [P.BTR_TURRET]: [
      zi(-1.3, 0, -2.62, 1.3, 1.26, 2.62),
      zi(-0.68, 1.26, -0.7, 0.68, 1.95, 0.82),
    ],
    [P.SUBMARINE]: [
      zi(-2.15, -1.35, -5.6, 2.15, 1.35, 5.6),
      zi(-1.05, 1.2, -0.35, 1.05, 2.6, 1.5),
    ],
    [P.SPACE_ROCKET]: [zi(-2.2, 0, -2.2, 2.2, 11.8, 2.2)],
  },
  io = {
    ...Qf,
    [P.PLANE]: [
      ...Qf[P.PLANE],
      zi(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
      zi(-1.3, 1.2, 1.55, 1.3, 1.48, 2.45),
    ],
    [P.HELI]: [
      ...Qf[P.HELI],
      zi(-3.1, 2.42, -3.1, 3.1, 2.55, 3.1),
      zi(0.255, 1.75, 3.45, 0.305, 3.05, 4.75),
    ],
  },
  dA = new Set();
for (const n of [Qf, io])
  for (const [e, t] of Object.entries(n))
    for (const i of t)
      dA.has(i) || (dA.add(i), i.min.multiply(ms(+e)), i.max.multiply(ms(+e)));
const uA = new Map();
function u$(n) {
  let e = uA.get(n);
  return (
    e !== void 0 ||
      ((e = Math.max(
        1,
        ...(io[n] ?? []).map((t) =>
          Math.hypot(
            Math.max(Math.abs(t.min.x), Math.abs(t.max.x)),
            Math.max(Math.abs(t.min.y), Math.abs(t.max.y)),
            Math.max(Math.abs(t.min.z), Math.abs(t.max.z)),
          ),
        ),
      )),
      uA.set(n, e)),
    e
  );
}
const Jf = new k(),
  fA = new k(),
  pA = new Jt();
function Mm(n, e) {
  let t = 0;
  for (const i of io[n] ?? [])
    for (const s of [i.min.x, i.max.x])
      for (const o of [i.min.y, i.max.y])
        for (const a of [i.min.z, i.max.z])
          (Jf.set(s, o, a).applyQuaternion(e), (t = Math.min(t, Jf.y)));
  return -t + 0.03;
}
function du(n, e, t, i, s = io[n] ?? []) {
  const { x: o, y: a, z: r, w: l } = t,
    c = [
      [1 - 2 * (a * a + r * r), 2 * (o * a + r * l), 2 * (o * r - a * l)],
      [2 * (o * a - r * l), 1 - 2 * (o * o + r * r), 2 * (a * r + o * l)],
      [2 * (o * r + a * l), 2 * (a * r - o * l), 1 - 2 * (o * o + a * a)],
    ],
    h = c.map((d) => d.map(Math.abs));
  for (const d of s) {
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
        (y, g) => y + c[0][g] * f[0] + c[1][g] * f[1] + c[2][g] * f[2],
      ),
      m = [0, 1, 2].map(
        (y) => h[0][y] * u[0] + h[1][y] * u[1] + h[2][y] * u[2],
      );
    if (!(p[1] - m[1] >= Kt))
      for (
        let y = Math.floor(p[0] - m[0] + 1e-5);
        y <= Math.floor(p[0] + m[0] - 1e-5);
        y++
      )
        for (
          let g = Math.floor(p[1] - m[1] + 1e-5);
          g <= Math.min(Kt - 1, Math.floor(p[1] + m[1] - 1e-5));
          g++
        )
          for (
            let b = Math.floor(p[2] - m[2] + 1e-5);
            b <= Math.floor(p[2] + m[2] - 1e-5);
            b++
          ) {
            if (!i(y + 0.5, g + 0.5, b + 0.5)) continue;
            const S = [y + 0.5 - p[0], g + 0.5 - p[1], b + 0.5 - p[2]];
            if (
              S.some((x, T) => Math.abs(x) >= m[T] + 0.5 - 1e-5) ||
              c.some(
                (x, T) =>
                  Math.abs(S[0] * x[0] + S[1] * x[1] + S[2] * x[2]) >=
                  u[T] + 0.5 * (h[T][0] + h[T][1] + h[T][2]) - 1e-5,
              )
            )
              continue;
            let M = !1;
            for (let x = 0; x < 3 && !M; x++)
              for (let T = 0; T < 3; T++) {
                const A = (T + 1) % 3,
                  _ = (T + 2) % 3,
                  C =
                    0.5 * (h[x][A] + h[x][_]) +
                    u[(x + 1) % 3] * h[(x + 2) % 3][T] +
                    u[(x + 2) % 3] * h[(x + 1) % 3][T],
                  R = Math.hypot(c[x][A], c[x][_]);
                if (
                  R > 1e-8 &&
                  Math.abs(S[A] * c[x][_] - S[_] * c[x][A]) >= C - 1e-5 * R
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
function $h(n, e, t, i, s, o, a) {
  const r = u$(n);
  if (Math.min(e.y, t.y) > Kt + r) return !1;
  const l = i.angleTo(s),
    c = Math.max(1, Math.ceil((e.distanceTo(t) + l * r) / 0.25));
  for (let h = 1; h <= c; h++)
    if (
      (fA.lerpVectors(e, t, h / c),
      pA.copy(i).slerp(s, h / c),
      du(n, fA, pA, o))
    )
      return !0;
  return !1;
}
function mA(n, e, t, i) {
  if (!du(n, e, t, i)) return !1;
  const s = e.clone();
  for (let o = 0.25; o <= 16; o += 0.25)
    for (const [a, r, l] of [
      [0, 1, 0],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, -1, 0],
    ])
      if ((s.set(e.x + a * o, e.y + r * o, e.z + l * o), !du(n, s, t, i)))
        return (e.copy(s), !0);
  return !1;
}
function f$(n, e, t, i, s, o) {
  const a = e.clone();
  a.y += 1;
  const r = t.clone();
  return (
    (r.y = Math.max(r.y, a.y)),
    $h(n, e, a, i, i, o) || $h(n, a, r, i, s, o) ? !1 : (t.copy(r), !0)
  );
}
