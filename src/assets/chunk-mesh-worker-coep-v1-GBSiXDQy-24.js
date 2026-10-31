// chunk-mesh-worker-coep-v1-GBSiXDQy 24 — lid
// Lines 7821-7908 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
const Gr = 4,
  fn = (r) => r === p.CHEST || r === p.MILITARY_CHEST,
  Wr = 231,
  Gn = 232,
  _s = 233,
  Ct = 234,
  Hr = 235,
  gi = 236,
  as = 237,
  Yr = 238,
  Vr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.0625, 0, 0.0625, 0.9375, 0.625, 0.9375], Wr, { top: gi });
    for (const e of [0.05, 0.86])
      for (const s of [0.05, 0.86]) t([e, 0, s, e + 0.09, 0.625, s + 0.09], _s);
    t([0.05, 0, 0.05, 0.95, 0.05, 0.95], _s);
    for (const e of [0.2, 0.73])
      t([e, 0.05, 0.055, e + 0.07, 0.625, 0.945], Ct);
    (t([0.055, 0.625, 0.055, 0.945, 0.82, 0.945], Gn, { bottom: _s, lid: !0 }),
      t([0.1, 0.82, 0.1, 0.9, 0.875, 0.9], Gn, { lid: !0 }));
    for (const e of [0.2, 0.73])
      (t([e, 0.62, 0.045, e + 0.07, 0.83, 0.955], Ct, { lid: !0 }),
        t([e, 0.82, 0.09, e + 0.07, 0.885, 0.91], Ct, { lid: !0 }));
    for (const e of [0.045, 0.855])
      for (const s of [0.045, 0.855])
        t([e, 0.7, s, e + 0.1, 0.83, s + 0.1], Ct, { lid: !0 });
    return (
      t([0.43, 0.48, 0.03, 0.57, 0.74, 0.055], Hr, { lid: !0, fit: !0 }),
      t([0.48, 0.53, 0.024, 0.52, 0.62, 0.031], Ct, { lid: !0, fit: !0 }),
      {
        parts: r,
        hingeY: 0.625,
        hingeZ: 0.945,
        openAngle: 1.85,
        envelope: [0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375],
      }
    );
  })(),
  vr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.05, 0.05, 0.14, 0.95, 0.58, 0.86], as, { top: gi });
    for (const e of [0.1, 0.78]) t([e, 0, 0.12, e + 0.12, 0.06, 0.88], Ct);
    for (const e of [0.03, 0.9]) t([e, 0.04, 0.125, e + 0.07, 0.58, 0.875], as);
    for (const e of [0.025, 0.905])
      for (const s of [0.12, 0.83])
        t([e, 0.04, s, e + 0.07, 0.58, s + 0.05], Ct);
    for (const e of [0.005, 0.965]) t([e, 0.3, 0.4, e + 0.03, 0.36, 0.6], Ct);
    (t([0.3, 0.16, 0.128, 0.7, 0.44, 0.14], Yr, { fit: !0 }),
      t([0.03, 0.58, 0.12, 0.97, 0.7, 0.88], as, { bottom: _s, lid: !0 }),
      t([0.07, 0.7, 0.16, 0.93, 0.74, 0.84], as, { lid: !0 }),
      t([0.4, 0.74, 0.46, 0.6, 0.775, 0.54], Ct, { lid: !0 }));
    for (const e of [0.18, 0.74])
      t([e, 0.46, 0.105, e + 0.08, 0.64, 0.125], Ct, { lid: !0, fit: !0 });
    return {
      parts: r,
      hingeY: 0.58,
      hingeZ: 0.88,
      openAngle: 1.75,
      envelope: [0.03, 0, 0.12, 0.97, 0.775, 0.88],
    };
  })(),
  qr = (r) => (r === p.MILITARY_CHEST ? vr : Vr);
function Kr(r, t) {
  let [e, s, n, i, c, h] = r;
  for (let o = 0; o < (t & 3); o++) [e, n, i, h] = [1 - h, e, 1 - n, i];
  return [e, s, n, i, c, h];
}
function Qr(r, t, e, s, n) {
  const i = n & 3;
  if (n & Gr) return i;
  for (const c of [0, 2, 1, 3]) {
    const h = (i + c) & 3,
      [o, a] = ae[h],
      u = r(t + o, e, s + a);
    if (!_i(u) && !fn(u)) return h;
  }
  return i;
}
function Ri(r, t, e = "all") {
  const s = [];
  for (const n of qr(r).parts)
    (e === "body" && n.lid) ||
      (e === "lid" && !n.lid) ||
      s.push({ ...n, box: Kr(n.box, t) });
  return s;
}
