// index-BeUlFSPp 113 — add
// Lines 64525-64811 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function QQ() {
  const s = new re(),
    e = wt(1),
    t = wt(2);
  (s.add(gc(Ip(1), 0.9, k8, 0.1, 0.05)),
    e &&
      (s.add(gc(Ip(0.72, -2.9), 0.54, yh, -0.42, 0.04)),
      s.add(gc(Ip(0.96, -3.1), 0.06, ZQ, 0.98, 0.015))),
    e &&
      (s.add(gc(Ip(1.03, -3.36), 0.07, 2764854, 0.86, 0.02)),
      s.add(gc(Ip(1.01, -3.3), 0.06, 8007466, 0.1, 0.01))),
    s.add(
      gr(
        [
          [0.5, 1],
          [2.1, 1],
          [2.1, 1.95],
          [0.9, 1.95],
          [0.55, 1.5],
        ],
        1.7,
        XQ,
        0,
        0.05,
      ),
    ),
    s.add(
      gr(
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
    s.add(se(0.04, 0.34, 1, 2767432, r * 0.86, 1.64, 1.4));
  s.add(se(1.8, 0.08, 1.7, yh, 0, 1.99, 1.3));
  const i = [];
  if (e) {
    s.add(Gs(0.06, 1, yh, 0, 2.5, 1.5, 0.08, 8));
    const r = new re();
    ((r.name = "radar"),
      (r.userData.motion = "radar"),
      r.position.set(0, 2.95, 1.5),
      r.add(
        se(0.8, 0.06, 0.12, 12634834),
        se(0.06, 0.1, 0.06, Ds, 0, -0.07, 0),
      ),
      s.add(r),
      i.push(r));
  }
  if (e) {
    s.add(
      se(0.5, 0.06, 0.06, yh, 0, 2.7, 1.5),
      se(0.14, 0.12, 0.2, Ff, 0.5, 2.08, 0.8),
    );
    for (const r of [-1, 1])
      s.add(se(0.5, 0.4, 0.5, 3028282, r * 0.5, 0.1, 3.35));
    (s.add(se(2.2, 0.1, 0.3, yh, 0, 0.5, 3.32)),
      s.add(Gs(0.02, 0.9, Ds, -0.8, 1.45, 3, 0.02, 4)));
    for (const r of [-1, 1])
      s.add(Hi(0.2, 0.7, 14182963, r * 0.96, 1.24, 2.5, 0.2, 12));
    for (const r of [-1.2, 0, 1.2, 2.4])
      for (const l of [-1, 1])
        s.add(Gs(0.1, 0.36, 1907994, l * 1.18, 0.72, r, 0.1, 8));
  }
  if (t) {
    for (const r of [-1, 1]) {
      for (const [l, c] of [
        [-2.4, 0.66],
        [-1.6, 1],
        [-0.8, 1.08],
        [0, 1.08],
      ])
        s.add(se(0.04, 0.36, 0.04, 10134700, r * c, 1.2, l));
      (s.add(se(0.035, 0.035, 2.5, 10134700, r * 0.95, 1.38, -1.25)),
        s.add(
          Gs(0.07, 0.16, 3752779, r * 0.7, 1.08, -2.3, 0.07, 8),
          Gs(0.07, 0.16, 3752779, r * 0.9, 1.08, 2.9, 0.07, 8),
        ));
    }
    (s.add(se(0.6, 0.04, 0.6, yh, 0, 1.03, -0.2)), j0(s, 0.7, 1.99, 1.8, 0.9));
  }
  s.add(Gs(0.28, 0.22, yh, 0, 1.1, -1.4, 0.34, 14));
  const n = new re();
  (n.position.set(0, 1.2, -1.4),
    n.add(Gs(0.26, 0.12, 3752779, 0, 0.1, 0, 0.26, 14)));
  const o = new re();
  (o.position.set(0, 0.3, -0.3),
    o.add(se(0.22, 0.24, 0.5, 2238509, 0, 0, 0.05)));
  for (const r of [-0.06, 0.06])
    o.add(
      Hi(0.035, 1, 1777700, r, 0.02, -0.62),
      Hi(0.05, 0.12, 1514271, r, 0.02, -1.12),
    );
  (o.add(se(0.1, 0.2, 0.14, 3093560, 0.16, -0.02, 0.14)),
    o.add(se(0.08, 0.06, 0.3, Ds, 0, -0.1, 0.38)));
  const a = se(0.8, 0.5, 0.05, k8, 0, 0.12, -0.28);
  return (
    (a.rotation.x = -0.12),
    o.add(a),
    n.add(o),
    s.add(n),
    { group: s, turret: n, barrel: o, props: [], motionParts: i }
  );
}
function JQ() {
  const s = new re(),
    e = wt(1),
    t = wt(2),
    i = 9140821,
    n = 7693898,
    o = 3948872,
    a = 2369582;
  s.add(Gs(0.72, 0.12, 4935493, 0, 0.06, 0, 0.74, 16));
  const r = e ? 12 : 8;
  for (let h = 0; h < 2; h++)
    for (let d = 0; d < r; d++) {
      const u = ((d + h * 0.5) / r) * Math.PI * 2,
        f = se(
          0.42,
          0.2,
          0.24,
          h ? i : n,
          Math.sin(u) * 0.56,
          0.2 + h * 0.19,
          Math.cos(u) * 0.56,
        );
      ((f.rotation.y = u), s.add(f));
    }
  s.add(Gs(0.16, 0.5, a, 0, 0.72, 0, 0.22, 12));
  const l = new re();
  if ((l.add(Gs(0.3, 0.1, o, 0, 0.98, 0, 0.3, 14)), e))
    for (const h of [-1, 1]) l.add(se(0.08, 0.42, 0.3, o, h * 0.36, 1.18, 0));
  const c = new re();
  return (
    c.position.set(0, 1 + 0.2, 0),
    c.add(se(0.52, 0.36, 0.74, o, 0, 0, 0.02)),
    c.add(se(0.44, 0.06, 0.6, a, 0, 0.2, 0.02)),
    c.add(Hi(0.075, 1.2, 1909030, 0, 0.02, -0.9)),
    c.add(Hi(0.1, 0.36, 2764596, 0, 0.02, -0.52)),
    c.add(se(0.3, 0.36, 0.34, 3093804, 0.38, -0.08, 0.12)),
    e &&
      (c.add(Hi(0.11, 0.2, 1382428, 0, 0.02, -1.52, 0.09)),
      c.add(se(0.8, 0.44, 0.06, 4936025, 0, 0.04, -0.34)),
      c.add(
        se(0.22, 0.16, 0.26, a, -0.2, 0.3, -0.05),
        Hi(0.06, 0.08, 2437946, -0.2, 0.3, -0.2),
      ),
      c.add(se(0.12, 0.06, 0.02, 13060666, -0.2, 0.4, -0.17))),
    t &&
      (c.add(se(0.05, 0.2, 0.5, 3093804, 0.28, 0.06, 0.1)),
      j0(s, 0.5, 0.5, 0.5, 0.6)),
    l.add(c),
    s.add(l),
    { group: s, turret: l, barrel: c, props: [] }
  );
}
const Cy = {
  [L.TANK]: [[0, 1.69, 0.72]],
  [L.PLANE]: [[0, 1.12, 0.62]],
  [L.FIGHTER_JET]: [[0, 1.48, -1.35]],
  [L.BOAT]: [
    [-0.7, 1.05, 0.4],
    [0.7, 1.05, 0.4],
    [0, 1.05, 2.75],
  ],
  [L.HELI]: [
    [-0.86, 0.48, 0.65],
    [0.86, 0.48, 0.65],
  ],
  [L.HIMARS]: [[0.45, 1.3, -1.7]],
  [L.PATRIOT]: [[0.45, 1.3, -1.7]],
  [L.TURRET]: [[0, 1.75, 0]],
  [L.BTR_TURRET]: [
    [0, 1.78, 0.8],
    [-0.62, 1.78, 1.7],
    [0.62, 1.78, 1.7],
  ],
  [L.SUBMARINE]: [
    [-0.7, 1.35, 0.2],
    [0.7, 1.35, 0.2],
    [-0.7, 1.35, 1.2],
    [0.7, 1.35, 1.2],
  ],
};
for (const [s, e] of Object.entries(Cy)) {
  const t = En(+s);
  for (const i of e) ((i[0] *= t.x), (i[1] *= t.y), (i[2] *= t.z));
}
const eJ = {
    interval: 0.11,
    soldier: 11,
    hull: 4,
    spread: 0.014,
    range: 260,
    heavy: !0,
    label: "Tank machine gun",
  },
  tJ = {
    interval: 0.09,
    soldier: 9,
    hull: 3,
    spread: 0.016,
    range: 220,
    heavy: !1,
    label: "APC machine gun",
  },
  iJ = {
    interval: 0.07,
    soldier: 8,
    hull: 4,
    spread: 0.02,
    range: 220,
    heavy: !1,
    label: "Door gun",
  };
function oc(s, e) {
  return e === 1 && s === L.TANK
    ? eJ
    : e === 1 && s === L.BTR_TURRET
      ? tJ
      : (e === 1 || e === 2) && s === L.HELI
        ? iJ
        : null;
}
function sJ(s, e, t) {
  return s === L.HELI
    ? (e === 1 ? -t.x : t.x) > 0.18 && t.y > -0.8 && t.y < 0.6
    : t.y > -0.75;
}
function C8(s) {
  return s === L.HELI
    ? { swing: 1.2, down: -0.68, up: 0.5 }
    : { swing: Math.PI, down: -0.6, up: 1.1 };
}
function L8(s, e, t) {
  return e <= 0 || oc(s, e)
    ? !1
    : s === L.PLANE || s === L.FIGHTER_JET
      ? t.y >= 0.04
      : s === L.BOAT;
}
function vT(s, e, t, i, n, o, a, r, l, c, h) {
  const d = a - s,
    u = r - e,
    f = l - t,
    p = d * i + u * n + f * o;
  return p < -c || p > h + c ? !1 : d * d + u * u + f * f - p * p <= c * c;
}
const I8 = new Map();
function nJ(s) {
  let e = I8.get(s.uuid);
  if (e) return e;
  e = new Ge(1, 1, 1);
  const t = s.image;
  try {
    if (t && (t.width ?? 0) > 0) {
      const i = document.createElement("canvas");
      i.width = i.height = 8;
      const n = i.getContext("2d", { willReadFrequently: !0 });
      n.drawImage(t, 0, 0, 8, 8);
      const o = n.getImageData(0, 0, 8, 8).data;
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
          s.colorSpace === Ii ? Ii : Er,
        );
    }
  } catch {}
  return (I8.set(s.uuid, e), e);
}
const bg = new Map();
