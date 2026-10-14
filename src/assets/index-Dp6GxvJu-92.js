// index-Dp6GxvJu 92 — add
// Lines 57124-57403 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function rK() {
  const n = new pe(),
    e = yt(1),
    t = yt(2);
  (n.add(Rl(sf(1), 0.9, a6, 0.1, 0.05)),
    e &&
      (n.add(Rl(sf(0.72, -2.9), 0.54, _h, -0.42, 0.04)),
      n.add(Rl(sf(0.96, -3.1), 0.06, aK, 0.98, 0.015))),
    e &&
      (n.add(Rl(sf(1.03, -3.36), 0.07, 2764854, 0.86, 0.02)),
      n.add(Rl(sf(1.01, -3.3), 0.06, 8007466, 0.1, 0.01))),
    n.add(
      Ia(
        [
          [0.5, 1],
          [2.1, 1],
          [2.1, 1.95],
          [0.9, 1.95],
          [0.55, 1.5],
        ],
        1.7,
        oK,
        0,
        0.05,
      ),
    ),
    n.add(
      Ia(
        [
          [0.46, 1.52],
          [0.86, 1.96],
          [0.9, 1.93],
          [0.5, 1.48],
        ],
        1.5,
        2767432,
        0,
        0.01,
      ),
    ));
  for (const r of [-1, 1])
    n.add(ce(0.04, 0.34, 1, 2767432, r * 0.86, 1.64, 1.4));
  n.add(ce(1.8, 0.08, 1.7, _h, 0, 1.99, 1.3));
  const i = [];
  if (e) {
    n.add(Dn(0.06, 1, _h, 0, 2.5, 1.5, 0.08, 8));
    const r = new pe();
    ((r.name = "radar"),
      (r.userData.motion = "radar"),
      r.position.set(0, 2.95, 1.5),
      r.add(
        ce(0.8, 0.06, 0.12, 12634834),
        ce(0.06, 0.1, 0.06, Ln, 0, -0.07, 0),
      ),
      n.add(r),
      i.push(r));
  }
  if (e) {
    n.add(
      ce(0.5, 0.06, 0.06, _h, 0, 2.7, 1.5),
      ce(0.14, 0.12, 0.2, uu, 0.5, 2.08, 0.8),
    );
    for (const r of [-1, 1])
      n.add(ce(0.5, 0.4, 0.5, 3028282, r * 0.5, 0.1, 3.35));
    (n.add(ce(2.2, 0.1, 0.3, _h, 0, 0.5, 3.32)),
      n.add(Dn(0.02, 0.9, Ln, -0.8, 1.45, 3, 0.02, 4)));
    for (const r of [-1, 1])
      n.add(Ci(0.2, 0.7, 14182963, r * 0.96, 1.24, 2.5, 0.2, 12));
    for (const r of [-1.2, 0, 1.2, 2.4])
      for (const l of [-1, 1])
        n.add(Dn(0.1, 0.36, 1907994, l * 1.18, 0.72, r, 0.1, 8));
  }
  if (t) {
    for (const r of [-1, 1]) {
      for (const [l, c] of [
        [-2.4, 0.66],
        [-1.6, 1],
        [-0.8, 1.08],
        [0, 1.08],
      ])
        n.add(ce(0.04, 0.36, 0.04, 10134700, r * c, 1.2, l));
      (n.add(ce(0.035, 0.035, 2.5, 10134700, r * 0.95, 1.38, -1.25)),
        n.add(
          Dn(0.07, 0.16, 3752779, r * 0.7, 1.08, -2.3, 0.07, 8),
          Dn(0.07, 0.16, 3752779, r * 0.9, 1.08, 2.9, 0.07, 8),
        ));
    }
    (n.add(ce(0.6, 0.04, 0.6, _h, 0, 1.03, -0.2)), eh(n, 0.7, 1.99, 1.8, 0.9));
  }
  n.add(Dn(0.28, 0.22, _h, 0, 1.1, -1.4, 0.34, 14));
  const s = new pe();
  (s.position.set(0, 1.2, -1.4),
    s.add(Dn(0.26, 0.12, 3752779, 0, 0.1, 0, 0.26, 14)));
  const o = new pe();
  (o.position.set(0, 0.3, -0.3),
    o.add(ce(0.22, 0.24, 0.5, 2238509, 0, 0, 0.05)));
  for (const r of [-0.06, 0.06])
    o.add(
      Ci(0.035, 1, 1777700, r, 0.02, -0.62),
      Ci(0.05, 0.12, 1514271, r, 0.02, -1.12),
    );
  (o.add(ce(0.1, 0.2, 0.14, 3093560, 0.16, -0.02, 0.14)),
    o.add(ce(0.08, 0.06, 0.3, Ln, 0, -0.1, 0.38)));
  const a = ce(0.8, 0.5, 0.05, a6, 0, 0.12, -0.28);
  return (
    (a.rotation.x = -0.12),
    o.add(a),
    s.add(o),
    n.add(s),
    { group: n, turret: s, barrel: o, props: [], motionParts: i }
  );
}
function lK() {
  const n = new pe(),
    e = yt(1),
    t = yt(2),
    i = 9140821,
    s = 7693898,
    o = 3948872,
    a = 2369582;
  n.add(Dn(0.72, 0.12, 4935493, 0, 0.06, 0, 0.74, 16));
  const r = e ? 12 : 8;
  for (let h = 0; h < 2; h++)
    for (let d = 0; d < r; d++) {
      const u = ((d + h * 0.5) / r) * Math.PI * 2,
        f = ce(
          0.42,
          0.2,
          0.24,
          h ? i : s,
          Math.sin(u) * 0.56,
          0.2 + h * 0.19,
          Math.cos(u) * 0.56,
        );
      ((f.rotation.y = u), n.add(f));
    }
  n.add(Dn(0.16, 0.5, a, 0, 0.72, 0, 0.22, 12));
  const l = new pe();
  if ((l.add(Dn(0.3, 0.1, o, 0, 0.98, 0, 0.3, 14)), e))
    for (const h of [-1, 1]) l.add(ce(0.08, 0.42, 0.3, o, h * 0.36, 1.18, 0));
  const c = new pe();
  return (
    c.position.set(0, 1 + 0.2, 0),
    c.add(ce(0.52, 0.36, 0.74, o, 0, 0, 0.02)),
    c.add(ce(0.44, 0.06, 0.6, a, 0, 0.2, 0.02)),
    c.add(Ci(0.075, 1.2, 1909030, 0, 0.02, -0.9)),
    c.add(Ci(0.1, 0.36, 2764596, 0, 0.02, -0.52)),
    c.add(ce(0.3, 0.36, 0.34, 3093804, 0.38, -0.08, 0.12)),
    e &&
      (c.add(Ci(0.11, 0.2, 1382428, 0, 0.02, -1.52, 0.09)),
      c.add(ce(0.8, 0.44, 0.06, 4936025, 0, 0.04, -0.34)),
      c.add(
        ce(0.22, 0.16, 0.26, a, -0.2, 0.3, -0.05),
        Ci(0.06, 0.08, 2437946, -0.2, 0.3, -0.2),
      ),
      c.add(ce(0.12, 0.06, 0.02, 13060666, -0.2, 0.4, -0.17))),
    t &&
      (c.add(ce(0.05, 0.2, 0.5, 3093804, 0.28, 0.06, 0.1)),
      eh(n, 0.5, 0.5, 0.5, 0.6)),
    l.add(c),
    n.add(l),
    { group: n, turret: l, barrel: c, props: [] }
  );
}
const z2 = {
  [P.TANK]: [[0, 1.69, 0.72]],
  [P.PLANE]: [[0, 1.12, 0.62]],
  [P.FIGHTER_JET]: [[0, 1.48, -1.35]],
  [P.BOAT]: [
    [-0.7, 1.05, 0.4],
    [0.7, 1.05, 0.4],
    [0, 1.05, 2.75],
  ],
  [P.HELI]: [
    [-0.86, 0.48, 0.65],
    [0.86, 0.48, 0.65],
  ],
  [P.HIMARS]: [[0.45, 1.3, -1.7]],
  [P.PATRIOT]: [[0.45, 1.3, -1.7]],
  [P.TURRET]: [[0, 1.75, 0]],
  [P.BTR_TURRET]: [
    [0, 1.78, 0.8],
    [-0.62, 1.78, 1.7],
    [0.62, 1.78, 1.7],
  ],
  [P.SUBMARINE]: [
    [-0.7, 1.35, 0.2],
    [0.7, 1.35, 0.2],
    [-0.7, 1.35, 1.2],
    [0.7, 1.35, 1.2],
  ],
};
for (const [n, e] of Object.entries(z2)) {
  const t = ms(+n);
  for (const i of e) ((i[0] *= t.x), (i[1] *= t.y), (i[2] *= t.z));
}
const cK = {
    interval: 0.11,
    soldier: 11,
    hull: 4,
    spread: 0.014,
    range: 260,
    heavy: !0,
    label: "Tank machine gun",
  },
  hK = {
    interval: 0.09,
    soldier: 9,
    hull: 3,
    spread: 0.016,
    range: 220,
    heavy: !1,
    label: "APC machine gun",
  },
  dK = {
    interval: 0.07,
    soldier: 8,
    hull: 4,
    spread: 0.02,
    range: 220,
    heavy: !1,
    label: "Door gun",
  };
function vl(n, e) {
  return e === 1 && n === P.TANK
    ? cK
    : e === 1 && n === P.BTR_TURRET
      ? hK
      : (e === 1 || e === 2) && n === P.HELI
        ? dK
        : null;
}
function uK(n, e, t) {
  return n === P.HELI
    ? (e === 1 ? -t.x : t.x) > 0.18 && t.y > -0.8 && t.y < 0.6
    : t.y > -0.75;
}
function r6(n) {
  return n === P.HELI
    ? { swing: 1.2, down: -0.68, up: 0.5 }
    : { swing: Math.PI, down: -0.6, up: 1.1 };
}
function l6(n, e, t) {
  return e <= 0 || vl(n, e)
    ? !1
    : n === P.PLANE || n === P.FIGHTER_JET
      ? t.y >= 0.04
      : n === P.BOAT;
}
const c6 = new Map();
function fK(n) {
  let e = c6.get(n.uuid);
  if (e) return e;
  e = new ze(1, 1, 1);
  const t = n.image;
  try {
    if (t && (t.width ?? 0) > 0) {
      const i = document.createElement("canvas");
      i.width = i.height = 8;
      const s = i.getContext("2d", { willReadFrequently: !0 });
      s.drawImage(t, 0, 0, 8, 8);
      const o = s.getImageData(0, 0, 8, 8).data;
      let a = 0,
        r = 0,
        l = 0,
        c = 0;
      for (let h = 0; h < o.length; h += 4)
        o[h + 3] < 16 || ((a += o[h]), (r += o[h + 1]), (l += o[h + 2]), c++);
      c &&
        e.setRGB(
          a / c / 255,
          r / c / 255,
          l / c / 255,
          n.colorSpace === vi ? vi : $r,
        );
    }
  } catch {}
  return (c6.set(n.uuid, e), e);
}
const km = new Map();
