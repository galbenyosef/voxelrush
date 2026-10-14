// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 24 — lid
// Lines 7797-7884 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
const Wr = 4,
  pn = (r) => r === f.CHEST || r === f.MILITARY_CHEST,
  Hr = 231,
  Wn = 232,
  xs = 233,
  kt = 234,
  Yr = 235,
  Ri = 236,
  ls = 237,
  Vr = 238,
  vr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.0625, 0, 0.0625, 0.9375, 0.625, 0.9375], Hr, { top: Ri });
    for (const e of [0.05, 0.86])
      for (const s of [0.05, 0.86]) t([e, 0, s, e + 0.09, 0.625, s + 0.09], xs);
    t([0.05, 0, 0.05, 0.95, 0.05, 0.95], xs);
    for (const e of [0.2, 0.73])
      t([e, 0.05, 0.055, e + 0.07, 0.625, 0.945], kt);
    (t([0.055, 0.625, 0.055, 0.945, 0.82, 0.945], Wn, { bottom: xs, lid: !0 }),
      t([0.1, 0.82, 0.1, 0.9, 0.875, 0.9], Wn, { lid: !0 }));
    for (const e of [0.2, 0.73])
      (t([e, 0.62, 0.045, e + 0.07, 0.83, 0.955], kt, { lid: !0 }),
        t([e, 0.82, 0.09, e + 0.07, 0.885, 0.91], kt, { lid: !0 }));
    for (const e of [0.045, 0.855])
      for (const s of [0.045, 0.855])
        t([e, 0.7, s, e + 0.1, 0.83, s + 0.1], kt, { lid: !0 });
    return (
      t([0.43, 0.48, 0.03, 0.57, 0.74, 0.055], Yr, { lid: !0, fit: !0 }),
      t([0.48, 0.53, 0.024, 0.52, 0.62, 0.031], kt, { lid: !0, fit: !0 }),
      {
        parts: r,
        hingeY: 0.625,
        hingeZ: 0.945,
        openAngle: 1.85,
        envelope: [0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375],
      }
    );
  })(),
  qr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.05, 0.05, 0.14, 0.95, 0.58, 0.86], ls, { top: Ri });
    for (const e of [0.1, 0.78]) t([e, 0, 0.12, e + 0.12, 0.06, 0.88], kt);
    for (const e of [0.03, 0.9]) t([e, 0.04, 0.125, e + 0.07, 0.58, 0.875], ls);
    for (const e of [0.025, 0.905])
      for (const s of [0.12, 0.83])
        t([e, 0.04, s, e + 0.07, 0.58, s + 0.05], kt);
    for (const e of [0.005, 0.965]) t([e, 0.3, 0.4, e + 0.03, 0.36, 0.6], kt);
    (t([0.3, 0.16, 0.128, 0.7, 0.44, 0.14], Vr, { fit: !0 }),
      t([0.03, 0.58, 0.12, 0.97, 0.7, 0.88], ls, { bottom: xs, lid: !0 }),
      t([0.07, 0.7, 0.16, 0.93, 0.74, 0.84], ls, { lid: !0 }),
      t([0.4, 0.74, 0.46, 0.6, 0.775, 0.54], kt, { lid: !0 }));
    for (const e of [0.18, 0.74])
      t([e, 0.46, 0.105, e + 0.08, 0.64, 0.125], kt, { lid: !0, fit: !0 });
    return {
      parts: r,
      hingeY: 0.58,
      hingeZ: 0.88,
      openAngle: 1.75,
      envelope: [0.03, 0, 0.12, 0.97, 0.775, 0.88],
    };
  })(),
  Kr = (r) => (r === f.MILITARY_CHEST ? qr : vr);
function Qr(r, t) {
  let [e, s, n, i, h, c] = r;
  for (let o = 0; o < (t & 3); o++) [e, n, i, c] = [1 - c, e, 1 - n, i];
  return [e, s, n, i, h, c];
}
function Xr(r, t, e, s, n) {
  const i = n & 3;
  if (n & Wr) return i;
  for (const h of [0, 2, 1, 3]) {
    const c = (i + h) & 3,
      [o, a] = le[c],
      u = r(t + o, e, s + a);
    if (!Ei(u) && !pn(u)) return c;
  }
  return i;
}
function Ti(r, t, e = "all") {
  const s = [];
  for (const n of Kr(r).parts)
    (e === "body" && n.lid) ||
      (e === "lid" && !n.lid) ||
      s.push({ ...n, box: Qr(n.box, t) });
  return s;
}
