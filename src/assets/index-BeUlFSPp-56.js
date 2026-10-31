// index-BeUlFSPp 56 — lerp
// Lines 47790-47845 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function YK(s, e) {
  const t = wv[s];
  return !e && t?.tactical ? t.tactical.time : 1;
}
function jK(s, e) {
  const t = wv[s] ?? UA,
    i = {
      magY: 0,
      magZ: 0,
      magRx: 0,
      magVisible: !0,
      rx: 0,
      ry: 0,
      rz: 0,
      py: 0,
      px: 0,
      from: "grip-l",
      to: "grip-l",
      w: 0,
      hasPlan: s in wv,
    };
  if (e < 0) return i;
  if (t.mag) {
    const [h, d, u] = zr(t.mag, e);
    ((i.magY = ni.lerp(h[1], d[1], u)),
      (i.magZ = ni.lerp(h[2], d[2], u)),
      (i.magRx = ni.lerp(h[3], d[3], u)),
      (i.magVisible =
        !!h[4] && !(t.roundAppears !== void 0 && e < t.roundAppears)));
  }
  const [n, o, a] = zr(t.tilt, e);
  ((i.rx = ni.lerp(n[1], o[1], a)),
    (i.ry = ni.lerp(n[2], o[2], a)),
    (i.rz = ni.lerp(n[3], o[3], a)),
    (i.py = ni.lerp(n[4], o[4], a)));
  const [r, l, c] = zr(t.left, e);
  return ((i.from = r[1]), (i.to = l[1]), (i.w = c), i);
}
const XK = (s) => ({
    lift: l1(s / 0.2) * (1 - l1((s - 0.8) / 0.2)),
    back: l1((s - 0.2) / 0.25) * (1 - l1((s - 0.55) / 0.25)),
  }),
  W_ = new Rt(),
  $_ = new Rt(),
  wp = new Rt(),
  K2 = new k(),
  V_ = new k(),
  Y2 = new hi(),
  q_ = new hi();
new k();
const j2 = new k(),
  ru = new k(),
  K_ = new k(),
  X2 = new k(),
  ZK = new hi().setFromEuler(new pi(0, 0, Math.PI / 2)),
  QK = new hi().setFromEuler(new pi(0, 0, -Math.PI / 2));
