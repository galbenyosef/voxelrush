// index-BeUlFSPp 179 — cube
// Lines 100793-100898 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Hne() {
  const s = new nC();
  s.cube(0, 1.045, 0.1, 2.5, 0.125, 1.5, {
    top: "plank",
    side: "plank",
    bottom: "plank",
  });
  for (const f of [-1.125, 1.125])
    for (const p of [-0.5, 0.7])
      s.cube(f, 0.49, p, 0.1875, 0.98, 0.1875, "log");
  (s.cube(0, 0.2, 0.1, 2.25, 0.0625, 1.2, "plank"),
    s.cube(0, 1.14, 0.065, 1.82, 0.0625, 1.13, {
      top: "chassis",
      side: "side",
      bottom: "bezel",
    }),
    s.cube(0, 1.14, -0.5, 1.82, 0.0625, 0.002, "vent"),
    s.cube(0, 1.1725, -0.03, 1.5, 0.002, 0.62, "bezel"));
  const e = (f, p, m, g, y = !1, b = !1) =>
      s.cube(
        f,
        1.18,
        p,
        m,
        0.02,
        g,
        b ? { top: "led", side: "key" } : y ? "keyWide" : "key",
        { fit: !0, tint: b ? 14263130 : void 0, glow: b ? 0.3 : 0 },
      ),
    t = (f, p) => (f === 1 && p === 1) || (f === 2 && p < 3);
  for (let f = 0; f < 4; f++) {
    const p = -0.29 + f * 0.135,
      m = f === 3 ? 0 : 12 - f,
      g = -0.66 + f * 0.03;
    for (let y = 0; y < m; y++) e(g + y * 0.115, p, 0.1, 0.1, !1, t(f, y));
    f < 3 && e(0.66 - 0.07, p, 0.14 + f * 0.02, 0.1, !0);
  }
  (e(-0.5, 0.115, 0.22, 0.1, !0),
    e(0, 0.115, 0.5, 0.1, !0),
    e(0.5, 0.115, 0.22, 0.1, !0),
    s.cube(0, 1.1745, 0.43, 0.62, 0.006, 0.26, "pad", { fit: !0 }),
    s.cube(-0.78, 1.176, 0.54, 0.05, 0.006, 0.03, "led", { fit: !0, glow: 1 }),
    s.cube(-0.71, 1.176, 0.54, 0.05, 0.006, 0.03, "led", {
      fit: !0,
      glow: 0.7,
      tint: 10289052,
    }),
    s.cube(0, (1.17 + Oh.y) / 2, Oh.z - 0.005, 1.82, Oh.y - 1.17, 0.09, {
      top: "side",
      side: "side",
      front: "vent",
      back: "vent",
    }));
  for (const f of [-0.62, 0.62])
    s.cube(f, Oh.y, Oh.z, 0.26, 0.07, 0.07, "hinge");
  const i = new Q(s.build(), oC());
  i.name = "voxel-laptop-base";
  const n = Qs.width + 0.16,
    o = p1.y + Qs.height / 2 + 0.07,
    a = 0.045,
    r = new nC();
  (r.cube(0, o / 2, Vw - a / 2, n, o, a, {
    front: "bezel",
    back: "chassis",
    side: "side",
    top: "side",
    bottom: "side",
  }),
    r.cube(0, o * 0.55, Vw - a - 0.001, 0.3, 0.3, 0.002, "lidBack", {
      fit: !0,
    }),
    r.cube(
      0,
      p1.y + Qs.height / 2 + 0.035,
      Vw + 0.001,
      0.03,
      0.03,
      0.002,
      "led",
      { fit: !0, glow: 0.2, tint: 5601177 },
    ));
  const l = new Q(r.build(), oC());
  l.name = "voxel-laptop-lid";
  const c = Dne(),
    h = new Q(
      new ms(Qs.width, Qs.height),
      new Zt({ map: c.texture, toneMapped: !1 }),
    );
  (h.position.set(0, p1.y, p1.z), (h.name = "voxel-laptop-screen"));
  const d = new re();
  (d.position.copy(Oh), d.add(l, h));
  const u = new re();
  return (
    (u.name = "founder-laptop"),
    u.add(i, d),
    YN(d, 0),
    { group: u, body: i, lid: d, lidMesh: l, display: h, screen: c }
  );
}
function YN(s, e) {
  s.rotation.x = sC + (qN - sC) * e;
}
const qw = 0.85,
  Kw = 1.15,
  Bne = (s) => 1 + (1.4 + 1) * (s - 1) ** 3 + 1.4 * (s - 1) ** 2,
  zne = (s) => (s < 0.5 ? 4 * s * s * s : 1 - (-2 * s + 2) ** 3 / 2);
