// index-BeUlFSPp 158 — fillstyle
// Lines 84826-87179 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Vo(s, e, t) {
  const i = La(e);
  if (i) {
    (s.clearRect(0, 0, 40, 40), s.save());
    const h = s.createLinearGradient(7, 0, 33, 0);
    if (
      (h.addColorStop(0, "#1e2b2c"),
      h.addColorStop(0.35, "#" + i.color.toString(16).padStart(6, "0")),
      h.addColorStop(0.55, "#a5a992"),
      h.addColorStop(1, "#28383a"),
      (s.fillStyle = h),
      i.shape === "stick" || i.shape === "bundle")
    ) {
      for (let d = 0; d < (i.shape === "stick" ? 1 : 3); d++)
        s.fillRect(10 + d * 7, 8, 6, 25);
      ((s.fillStyle = "#283938"),
        s.fillRect(9, 13, i.shape === "stick" ? 8 : 23, 4),
        s.fillRect(9, 26, i.shape === "stick" ? 8 : 23, 4));
    } else
      i.shape === "sphere"
        ? (s.beginPath(), s.arc(20, 22, 13, 0, Math.PI * 2), s.fill())
        : (s.beginPath(),
          s.roundRect(8, 6, 24, 30, i.shape === "case" ? 3 : 9),
          s.fill(),
          (s.fillStyle = "#2d3a3d"),
          s.fillRect(8, 12, 24, 3),
          s.fillRect(8, 28, 24, 3));
    ((s.fillStyle = "#202e32"),
      s.fillRect(14, 17, 12, 8),
      (s.fillStyle = "#aff1ca"),
      s.fillRect(16, 19, 6, 2),
      (s.fillStyle = "#f07850"),
      s.fillRect(24, 19, 2, 2),
      (s.strokeStyle = "#d4bd7b"),
      s.beginPath(),
      s.moveTo(20, 8),
      s.lineTo(23, 3),
      s.stroke(),
      i.shape === "nuclear" &&
        ((s.fillStyle = "#ffe381"),
        (s.font = "16px sans-serif"),
        s.fillText("☢", 12, 30)),
      s.restore());
    return;
  }
  if (e === w.ROCKET_GUIDED) {
    (Vo(s, w.ROCKET, t),
      (s.strokeStyle = "#7eeaca"),
      (s.lineWidth = 2),
      s.strokeRect(24, 3, 12, 12),
      (s.fillStyle = "#7eeaca"),
      s.fillRect(29, 7, 3, 3));
    return;
  }
  if ((s.clearRect(0, 0, 40, 40), e === w.COMPUTER)) {
    const h = (d, u, f, p, m) => {
      ((s.fillStyle = m), s.fillRect(d, u, f, p));
    };
    (h(6, 4, 28, 21, "#2b323d"),
      h(7, 5, 26, 19, "#0f1318"),
      h(8, 6, 24, 17, "#133150"),
      h(8, 6, 24, 2, "#1b4166"),
      h(18, 9, 4, 2, "#ffc35a"),
      h(16, 11, 4, 2, "#ffb547"),
      h(20, 11, 4, 2, "#d4801c"),
      h(16, 13, 4, 3, "#d4801c"),
      h(20, 13, 4, 3, "#9c5a10"),
      h(12, 18, 16, 2, "#ffb547"),
      h(12, 18, 9, 2, "#ffd9a0"),
      h(3, 25, 34, 3, "#3a4352"),
      h(2, 28, 36, 4, "#2a313c"),
      h(2, 31, 36, 1, "#ffb547"));
    for (let d = 0; d < 8; d++)
      h(5 + d * 4, 26, 3, 1, d === 1 || d === 2 ? "#ffc35a" : "#11151b");
    h(15, 29, 10, 1, "#4a5464");
    return;
  }
  if (e === v.OWNERSHIP_TOTEM) {
    gie(s);
    return;
  }
  if (jie(s, e) || pie(s, e)) return;
  const n = E5(e);
  if (n) {
    s.save();
    const h = "#" + n.color.toString(16).padStart(6, "0");
    ((s.fillStyle = "#171421"),
      s.fillRect(8, 3, 24, 32),
      (s.strokeStyle = "#e9c36b"),
      (s.lineWidth = 2),
      s.strokeRect(8, 3, 24, 32),
      (s.fillStyle = h),
      s.fillRect(11, 6, 18, 4),
      (s.fillStyle = "#30223e"),
      s.fillRect(11, 13, 18, 14),
      (s.fillStyle = h),
      (s.font = "bold 13px serif"),
      (s.textAlign = "center"),
      s.fillText(n.motif, 20, 25),
      (s.fillStyle = "#e9c36b"),
      s.fillRect(11, 29, 5, 2),
      s.fillRect(19, 29, 5, 2),
      (s.fillStyle = h),
      s.fillRect(26, 29, 3, 2),
      s.restore());
    return;
  }
  const o = W0(e);
  if (o) {
    IO(s, o);
    return;
  }
  const a = (h, d, u, f, p, m) => {
    ((s.strokeStyle = m),
      (s.lineWidth = p),
      (s.lineCap = "round"),
      s.beginPath(),
      s.moveTo(h, d),
      s.lineTo(u, f),
      s.stroke());
  };
  if (e === v.AVIATION_LIGHT) {
    s.save();
    const h = s.createRadialGradient(20, 13, 1, 20, 13, 17);
    (h.addColorStop(0, "#ff6a4ccc"),
      h.addColorStop(1, "#ff1a0000"),
      (s.fillStyle = h),
      s.fillRect(1, 0, 38, 30),
      (s.fillStyle = "#22252b"),
      s.fillRect(10, 33, 20, 4),
      s.fillRect(13, 19, 14, 3));
    for (let d = 22; d < 33; d += 4)
      ((s.fillStyle = (d / 4) % 2 < 1 ? "#f2c12e" : "#1e2025"),
        s.fillRect(17, d, 6, 4));
    ((s.fillStyle = "#d8261c"),
      s.beginPath(),
      s.moveTo(13, 19),
      s.lineTo(13, 12),
      s.arc(20, 12, 7, Math.PI, 0),
      s.lineTo(27, 19),
      s.closePath(),
      s.fill(),
      (s.strokeStyle = "#ff8d74"),
      (s.lineWidth = 1));
    for (const d of [13, 16])
      (s.beginPath(), s.moveTo(14, d), s.lineTo(26, d), s.stroke());
    ((s.fillStyle = "#ffd9cf"),
      s.beginPath(),
      s.ellipse(17, 9, 2, 3, -0.4, 0, 7),
      s.fill(),
      s.restore());
    return;
  }
  if (
    [
      v.KITCHEN_COUNTER,
      v.SINK,
      v.STORAGE_SHELF,
      v.SOFA,
      v.WALL_LIGHT,
      v.POTTED_PLANT,
    ].includes(e)
  ) {
    if ((s.save(), e === v.POTTED_PLANT)) {
      ((s.fillStyle = "#9d573d"),
        s.beginPath(),
        s.moveTo(12, 24),
        s.lineTo(28, 24),
        s.lineTo(25, 36),
        s.lineTo(15, 36),
        s.closePath(),
        s.fill(),
        a(20, 27, 20, 6, 2, "#68814a"));
      for (const [h, d, u] of [
        [14, 12, -0.6],
        [26, 9, 0.6],
        [14, 21, -0.5],
        [26, 18, 0.5],
      ])
        ((s.fillStyle = d < 15 ? "#8caa5e" : "#4e7749"),
          s.beginPath(),
          s.ellipse(h, d, 7, 3, u, 0, 7),
          s.fill());
      a(12, 25, 28, 25, 2, "#d39466");
    } else if (e === v.WALL_LIGHT) {
      const h = s.createRadialGradient(20, 20, 2, 20, 20, 18);
      (h.addColorStop(0, "#fff4bb"),
        h.addColorStop(1, "#ffd67700"),
        (s.fillStyle = h),
        s.fillRect(1, 1, 38, 38),
        (s.fillStyle = "#405059"),
        s.fillRect(11, 7, 18, 28),
        (s.fillStyle = "#ffe6a4"),
        s.fillRect(14, 10, 12, 21),
        a(12, 8, 28, 8, 2, "#a1b0ae"));
    } else if (e === v.SOFA)
      ((s.fillStyle = "#293f43"),
        s.beginPath(),
        s.roundRect(5, 10, 30, 22, 4),
        s.fill(),
        (s.fillStyle = "#648a85"),
        s.beginPath(),
        s.roundRect(8, 12, 24, 13, 3),
        s.fill(),
        (s.fillStyle = "#87aaa0"),
        s.fillRect(9, 24, 22, 5),
        a(20, 13, 20, 28, 1, "#3e6263"),
        (s.fillStyle = "#476a68"),
        s.fillRect(4, 21, 5, 12),
        s.fillRect(31, 21, 5, 12),
        (s.fillStyle = "#b0a080"),
        s.fillRect(7, 33, 3, 3),
        s.fillRect(30, 33, 3, 3));
    else if (e === v.STORAGE_SHELF) {
      ((s.fillStyle = "#45565b"),
        s.fillRect(5, 5, 3, 32),
        s.fillRect(32, 5, 3, 32));
      for (const h of [13, 24, 34])
        ((s.fillStyle = "#87999a"), s.fillRect(5, h, 30, 3));
      for (const [h, d, u] of [
        [10, 6, "#a98952"],
        [22, 6, "#657f52"],
        [10, 17, "#668b92"],
        [24, 17, "#b19966"],
        [14, 28, "#74805e"],
      ])
        ((s.fillStyle = u),
          s.fillRect(h, d, 8, 6),
          (s.fillStyle = "#d7c49a"),
          s.fillRect(h + 3, d + 1, 2, 3));
    } else
      ((s.fillStyle = "#6a4e37"),
        s.fillRect(5, 13, 30, 22),
        (s.fillStyle = "#b69b76"),
        s.fillRect(7, 16, 26, 17),
        a(20, 17, 20, 32, 1, "#755b42"),
        a(15, 23, 17, 23, 2, "#d0d8cb"),
        a(23, 23, 25, 23, 2, "#d0d8cb"),
        (s.fillStyle = "#d0d4c5"),
        s.fillRect(3, 10, 34, 6),
        e === v.SINK &&
          ((s.fillStyle = "#5c777f"),
          s.beginPath(),
          s.ellipse(20, 13, 9, 3, 0, 0, 7),
          s.fill(),
          (s.strokeStyle = "#c8dbe0"),
          (s.lineWidth = 2),
          s.beginPath(),
          s.moveTo(26, 13),
          s.lineTo(26, 5),
          s.quadraticCurveTo(21, 2, 20, 7),
          s.stroke()));
    s.restore();
    return;
  }
  if (e === v.BOOKSHELF) {
    ((s.fillStyle = "#80552f"),
      s.fillRect(5, 5, 30, 30),
      (s.fillStyle = "#4f321d"),
      s.fillRect(7, 18, 26, 3));
    const h = ["#b64036", "#3e6eaa", "#d1a63b", "#4e8547", "#8d4b9b"];
    for (let d = 0; d < 2; d++)
      for (let u = 0; u < 6; u++)
        ((s.fillStyle = h[(u + d * 2) % h.length]),
          s.fillRect(8 + u * 4, 7 + d * 15, 3, 10 + ((u + d) & 1)));
    return;
  }
  if (e === v.LANTERN) {
    ((s.fillStyle = "#343b3e"),
      s.fillRect(12, 8, 16, 3),
      s.fillRect(10, 31, 20, 3),
      (s.strokeStyle = "#586267"),
      (s.lineWidth = 3),
      s.beginPath(),
      s.arc(20, 10, 7, Math.PI, 0),
      s.stroke());
    const h = s.createRadialGradient(20, 22, 2, 20, 22, 13);
    (h.addColorStop(0, "#fff4a6"),
      h.addColorStop(0.45, "#ffb52e"),
      h.addColorStop(1, "rgba(255,120,20,0)"),
      (s.fillStyle = h),
      s.fillRect(7, 9, 26, 24),
      (s.strokeStyle = "#465055"),
      (s.lineWidth = 3),
      s.strokeRect(12, 11, 16, 20),
      a(16, 12, 16, 30, 2, "#394145"),
      a(24, 12, 24, 30, 2, "#394145"));
    return;
  }
  if (e === v.CHAIN) {
    ((s.strokeStyle = "#929ca3"), (s.lineWidth = 3));
    for (let h = 0; h < 3; h++)
      (s.beginPath(),
        (h & 1) === 0
          ? s.ellipse(20, 9 + h * 11, 6, 8, 0, 0, Math.PI * 2)
          : s.ellipse(20, 9 + h * 11, 3, 8, 0, 0, Math.PI * 2),
        s.stroke());
    return;
  }
  if (e === v.MILITARY_CHEST) {
    ((s.fillStyle = "#526b38"),
      s.fillRect(5, 12, 30, 23),
      (s.fillStyle = "#344528"),
      s.fillRect(5, 18, 30, 4),
      s.fillRect(8, 8, 24, 5),
      (s.fillStyle = "#9aa46d"),
      s.fillRect(17, 18, 6, 9),
      (s.strokeStyle = "#27321f"),
      (s.lineWidth = 2),
      s.strokeRect(5, 12, 30, 23));
    return;
  }
  if (e === v.HAY_BALE) {
    ((s.fillStyle = "#d2a72a"),
      s.fillRect(6, 7, 28, 28),
      (s.strokeStyle = "#f0cf4a"),
      (s.lineWidth = 1));
    for (let h = 10; h < 35; h += 4) a(7, h, 33, h - 2, 1, "#efd04f");
    (a(12, 7, 12, 35, 3, "#966b1d"), a(28, 7, 28, 35, 3, "#966b1d"));
    return;
  }
  if (e === v.BARREL) {
    ((s.fillStyle = "#855b32"),
      s.beginPath(),
      s.roundRect(8, 5, 24, 31, 7),
      s.fill());
    for (const h of [9, 19, 31]) a(8, h, 32, h, 3, "#485056");
    (a(15, 6, 15, 35, 1, "#b78349"), a(25, 6, 25, 35, 1, "#b78349"));
    return;
  }
  if (e === v.SIGN) {
    ((s.fillStyle = "#735135"),
      s.fillRect(18, 25, 4, 13),
      (s.fillStyle = "#bc925d"),
      s.fillRect(3, 5, 34, 23),
      (s.fillStyle = "#463020"));
    for (const h of [11, 16, 21]) s.fillRect(8, h, 24, 2);
    return;
  }
  const r = Ev(e, e === v.PISTON || e === v.SPISTON ? 1 : 0);
  if (r) {
    const h = {
        169: "#99291d",
        170: "#ff5135",
        3: "#a3a9ab",
        8: "#947048",
        16: "#536372",
        24: "#99291d",
        25: "#ff5135",
        26: "#747e85",
        27: "#ef5338",
        28: "#723726",
        32: "#bc9962",
        33: "#858c91",
        34: "#87bb63",
      },
      d = (f, p, m) => [20 + (f - m) * 16, 27 + (f + m - 1) * 7 - p * 23],
      u = (f, p) => {
        ((s.fillStyle = p),
          s.beginPath(),
          f.forEach((m, g) => {
            const [y, b] = d(m[0], m[1], m[2]);
            g ? s.lineTo(y, b) : s.moveTo(y, b);
          }),
          s.closePath(),
          s.fill(),
          (s.strokeStyle = "#17222b66"),
          (s.lineWidth = 0.5),
          s.stroke());
      };
    for (const f of r) {
      const [p, m, g, y, b, S] = f.box,
        M = h[f.tile] ?? "#aaa";
      (u(
        [
          [p, m, S],
          [y, m, S],
          [y, b, S],
          [p, b, S],
        ],
        M,
      ),
        u(
          [
            [y, m, g],
            [y, m, S],
            [y, b, S],
            [y, b, g],
          ],
          M,
        ),
        u(
          [
            [p, b, g],
            [y, b, g],
            [y, b, S],
            [p, b, S],
          ],
          M,
        ));
    }
    return;
  }
  if (e === v.BED) {
    (s.save(),
      (s.lineJoin = "round"),
      (s.fillStyle = "#4b2f1d"),
      s.beginPath(),
      s.moveTo(5, 24),
      s.lineTo(25, 13),
      s.lineTo(36, 19),
      s.lineTo(16, 32),
      s.closePath(),
      s.fill(),
      s.fillRect(7, 27, 3, 8),
      s.fillRect(14, 31, 3, 6),
      s.fillRect(32, 20, 3, 7),
      (s.fillStyle = "#9e2f35"),
      s.beginPath(),
      s.moveTo(6, 21),
      s.lineTo(25, 10),
      s.lineTo(36, 16),
      s.lineTo(16, 28),
      s.closePath(),
      s.fill(),
      (s.fillStyle = "#c94748"),
      s.beginPath(),
      s.moveTo(6, 21),
      s.lineTo(14, 16.5),
      s.lineTo(24.5, 22.5),
      s.lineTo(16, 28),
      s.closePath(),
      s.fill(),
      (s.fillStyle = "#f2ead8"),
      s.beginPath(),
      s.moveTo(15, 16),
      s.lineTo(25, 10.5),
      s.lineTo(34.5, 16),
      s.lineTo(24.5, 22),
      s.closePath(),
      s.fill(),
      (s.fillStyle = "#fff8e9"),
      s.beginPath(),
      s.moveTo(18, 15.5),
      s.quadraticCurveTo(25, 11.7, 31.5, 15.8),
      s.lineTo(25, 19.7),
      s.quadraticCurveTo(21, 18, 18, 15.5),
      s.fill(),
      a(7.5, 22, 16, 27, 1.2, "#e36a61"),
      a(16, 28.5, 36, 17, 2.2, "#704628"),
      s.restore());
    return;
  }
  if (zc(e) || Io(e)) {
    const h = le[e].color,
      d = (p) =>
        "#" +
        [16, 8, 0]
          .map((m) =>
            Math.round(Math.min(255, ((h >> m) & 255) * p))
              .toString(16)
              .padStart(2, "0"),
          )
          .join(""),
      u = d(1),
      f = d(0.72);
    if (zc(e)) {
      ((s.fillStyle = u),
        s.fillRect(3, 12, 34, 5),
        s.fillRect(3, 25, 34, 5),
        (s.fillStyle = f),
        s.fillRect(15, 4, 10, 33));
      return;
    }
    ((s.fillStyle = u),
      s.fillRect(6, 13, 28, 5),
      s.fillRect(6, 26, 28, 5),
      (s.fillStyle = f),
      s.fillRect(4, 9, 6, 28),
      s.fillRect(30, 9, 6, 28),
      s.fillRect(17, 17, 6, 10));
    return;
  }
  if (e === v.BARBED_WIRE) {
    ((s.strokeStyle = "#92999d"), (s.lineWidth = 2));
    for (let h = 0; h < 3; h++)
      (s.beginPath(),
        s.ellipse(11 + h * 9, 21, 8, 12, 0.15, 0, Math.PI * 2),
        s.stroke());
    for (const h of [7, 16, 25, 34])
      (a(h, 8, h + 3, 3, 1.5, "#c2c7c9"), a(h, 34, h - 3, 38, 1.5, "#c2c7c9"));
    return;
  }
  if (e === v.TORCH || e === v.RTORCH) {
    ((s.fillStyle = "#8a5a2b"),
      s.fillRect(17, 18, 6, 18),
      (s.fillStyle = e === v.RTORCH ? "#d0432a" : "#ffcc55"),
      s.beginPath(),
      s.moveTo(20, 6),
      s.quadraticCurveTo(27, 14, 20, 20),
      s.quadraticCurveTo(13, 14, 20, 6),
      s.fill(),
      (s.fillStyle = e === v.RTORCH ? "#ff8a6a" : "#fff2b0"),
      s.beginPath(),
      s.ellipse(20, 14, 2.4, 4, 0, 0, 7),
      s.fill());
    return;
  }
  if (
    e === v.WOOD_TABLE ||
    e === v.WOOD_CHAIR ||
    e === v.WOOD_BENCH ||
    e === v.MAP_TABLE
  ) {
    const h = e === v.WOOD_TABLE || e === v.MAP_TABLE;
    s.fillStyle = "#694529";
    for (const d of [9, 27]) s.fillRect(d, h ? 18 : 23, 4, h ? 16 : 11);
    (h ||
      (s.fillRect(8, 6, 4, 19),
      s.fillRect(28, 6, 4, 19),
      (s.fillStyle = "#b58450"),
      s.fillRect(8, 7, 24, 5),
      s.fillRect(8, 15, 24, 4)),
      (s.fillStyle = e === v.WOOD_CHAIR ? "#b7433c" : "#bd905e"),
      s.fillRect(6, h ? 14 : 22, 28, 6),
      (s.fillStyle = "#e2ba7c"),
      s.fillRect(6, h ? 14 : 22, 28, 2),
      e === v.MAP_TABLE &&
        ((s.fillStyle = "#658450"),
        s.fillRect(8, 14, 24, 4),
        (s.fillStyle = "#558ca8"),
        s.fillRect(16, 14, 4, 4)));
    return;
  }
  if (e === v.REMOTE_STATION) {
    ((s.fillStyle = "#3e554a"),
      s.fillRect(4, 9, 31, 21),
      s.fillRect(2, 30, 35, 6),
      (s.fillStyle = "#102c29"),
      s.fillRect(7, 12, 15, 14),
      s.fillRect(24, 12, 8, 14),
      (s.fillStyle = "#a9e3ba"));
    for (let h = 0; h < 4; h++) s.fillRect(9, 15 + h * 3, 9 - (h % 2) * 3, 1);
    ((s.fillStyle = "#acb5a2"),
      s.fillRect(34, 2, 2, 17),
      (s.fillStyle = "#9baf98"));
    for (let h = 0; h < 8; h++) s.fillRect(6 + h * 3, 32, 2, 1);
    return;
  }
  if (e === v.CAMPFIRE) {
    const h = s.createRadialGradient(20, 24, 1, 20, 24, 15);
    (h.addColorStop(0, "rgba(255,214,120,0.95)"),
      h.addColorStop(0.5, "rgba(255,140,36,0.45)"),
      h.addColorStop(1, "rgba(255,110,20,0)"),
      (s.fillStyle = h),
      s.fillRect(4, 10, 32, 28),
      a(6, 33, 34, 27, 6, "#6d4a2b"),
      a(6, 27, 34, 33, 6, "#8b6039"),
      (s.fillStyle = "#3a2c25"),
      s.fillRect(14, 27, 12, 4),
      (s.fillStyle = "#e0641f"),
      s.fillRect(15, 28, 10, 2),
      (s.fillStyle = "#ff9f2e"),
      s.beginPath(),
      s.moveTo(20, 5),
      s.quadraticCurveTo(29, 16, 20, 27),
      s.quadraticCurveTo(11, 16, 20, 5),
      s.fill(),
      (s.fillStyle = "#ffe9a3"),
      s.beginPath(),
      s.moveTo(20, 12),
      s.quadraticCurveTo(24.5, 18, 20, 25),
      s.quadraticCurveTo(15.5, 18, 20, 12),
      s.fill());
    return;
  }
  if (e === v.COMPOSTER) {
    ((s.fillStyle = "#9b6639"),
      s.fillRect(6, 7, 28, 28),
      (s.fillStyle = "#684323"),
      s.fillRect(11, 12, 18, 18),
      (s.fillStyle = "#38251b"),
      s.fillRect(13, 14, 14, 14),
      (s.fillStyle = "#b47a43"),
      s.fillRect(6, 7, 28, 4),
      s.fillRect(6, 31, 28, 4),
      (s.fillStyle = "#5b3c25"));
    for (const h of [8, 15, 22, 29]) s.fillRect(h, 10, 4, 23);
    ((s.strokeStyle = "#d39a54"),
      (s.lineWidth = 1),
      s.strokeRect(6.5, 7.5, 27, 27),
      (s.fillStyle = "#6d9b45"),
      s.fillRect(15, 20, 10, 5));
    return;
  }
  if (uA(e) && t) {
    const h = le[e].tex[1];
    (s.save(),
      s.beginPath(),
      s.rect(6, 22, 30, 14),
      s.rect(21, 8, 15, 14),
      s.clip(),
      t.drawTile(h, s, 4, 4, 34),
      s.restore());
    return;
  }
  if (e === v.MINE_AP || e === v.MINE_AT) {
    const h = e === v.MINE_AT,
      d = h ? 17 : 13;
    ((s.fillStyle = "#252b25"),
      s.beginPath(),
      s.ellipse(20, 26, d, 8, 0, 0, Math.PI * 2),
      s.fill(),
      (s.fillStyle = h ? "#93855a" : "#617b48"),
      s.beginPath(),
      s.ellipse(20, 22, d, 8, 0, 0, Math.PI * 2),
      s.fill(),
      (s.strokeStyle = "#dec476"),
      (s.lineWidth = 1.5),
      s.beginPath(),
      s.ellipse(20, 20, d * 0.65, 5, 0, 0, Math.PI * 2),
      s.stroke(),
      (s.fillStyle = h ? "#b2a272" : "#86a362"),
      s.beginPath(),
      s.ellipse(20, 19, d * 0.5, 4, 0, 0, Math.PI * 2),
      s.fill(),
      (s.fillStyle = "#c8d0bd"));
    for (const u of [9, 29]) s.fillRect(u, 22, 2, 2);
    ((s.fillStyle = "#252b25"), s.fillRect(18, 17, 4, 3));
    return;
  }
  if (e > 0 && e < 256) {
    if (Yie(s, e)) return;
    t &&
      t.drawTile(
        e === v.FURNACE
          ? m5
          : e === v.JACK_O_LANTERN
            ? cA
            : e === v.LED_SCREEN
              ? OI
              : (le[e]?.tex[1] ?? 0),
        s,
        4,
        4,
        32,
      );
    return;
  }
  s.fillStyle = "#d5dde5";
  const l = (h, d, u, f) => s.fillRect(h, d, u, f),
    c = ai(e);
  if (mie(s, c || e)) {
    c && Fk(s, e);
    return;
  }
  switch (c || e) {
    case w.MINIGUN:
      ((s.fillStyle = "#242d33"),
        l(9, 13, 13, 13),
        l(6, 9, 14, 3),
        l(6, 10, 3, 9),
        (s.fillStyle = "#81939e"));
      for (const h of [15, 19, 23]) l(20, h, 18, 2);
      ((s.fillStyle = "#c4cdd0"),
        l(34, 14, 3, 12),
        l(23, 14, 2, 12),
        (s.fillStyle = "#485b4e"),
        l(8, 25, 14, 10),
        (s.fillStyle = "#d4b16a"),
        l(23, 26, 3, 6));
      break;
    case w.SHOTGUN:
      ((s.fillStyle = "#815637"),
        l(2, 20, 10, 7),
        l(10, 19, 5, 5),
        l(23, 19, 8, 5),
        (s.fillStyle = "#b4c0c5"),
        l(12, 16, 26, 3),
        (s.fillStyle = "#343e44"),
        l(11, 19, 12, 4),
        l(16, 22, 4, 7),
        (s.fillStyle = "#d89a58"));
      for (const h of [24, 27, 30]) l(h, 20, 1, 3);
      l(8, 20, 2, 4);
      break;
    case w.AMMO_762_HE:
    case w.AMMO_338_HE: {
      const h = e === w.AMMO_762_HE,
        d = h ? 3 : 2,
        u = h ? 5 : 8;
      for (let f = 0; f < d; f++) {
        const p = h ? 5 + f * 10 : 8 + f * 15,
          m = h ? 12 - (f % 2) * 3 : 7 + (f % 2) * 2,
          g = s.createLinearGradient(p, 0, p + u, 0);
        (g.addColorStop(0, "#855324"),
          g.addColorStop(0.43, "#f8d18a"),
          g.addColorStop(1, "#9e632e"),
          (s.fillStyle = g),
          l(p, m + 7, u, h ? 17 : 21),
          l(p - 1, m + (h ? 23 : 27), u + 2, 3),
          (s.fillStyle = h ? "#f47929" : "#a93729"),
          l(p, m + 7, u, h ? 3 : 5),
          s.beginPath(),
          s.moveTo(p, m + 7),
          s.lineTo(p + u / 2, m),
          s.lineTo(p + u, m + 7),
          s.fill(),
          (s.fillStyle = "#23292a"),
          l(p, m + 12, u, 1),
          (s.fillStyle = "#ffe2a6"),
          l(p + 1, m + 15, 1, h ? 6 : 9));
      }
      h
        ? ((s.fillStyle = "#f29439"),
          l(5, 34, 26, 2),
          (s.fillStyle = "#334139"),
          l(31, 31, 5, 5))
        : ((s.fillStyle = "#b43e2f"), l(8, 35, 23, 2));
      break;
    }
    case w.AMMO_SHELL:
    case w.AMMO_SHELL_HE:
      for (let h = 0; h < 3; h++) {
        const d = 6 + h * 10,
          u = 12 - (h % 2) * 4,
          f = e === w.AMMO_SHELL || e === w.AMMO_SHELL_HE,
          p = s.createLinearGradient(d, 0, d + 7, 0);
        (p.addColorStop(0, "#80602d"),
          p.addColorStop(0.45, "#ffe1a0"),
          p.addColorStop(1, "#ad7b32"),
          (s.fillStyle = p),
          l(d, u + 7, 7, 17),
          l(d - 1, u + 23, 9, 3),
          (s.fillStyle = f ? "#a8342b" : "#d66039"),
          l(d, u + 2, 7, f ? 18 : 6),
          (s.fillStyle = f ? "#e38768" : "#ffc27c"),
          l(d + 1, u + 3, 2, f ? 15 : 4),
          (s.fillStyle = "#f7ce64"),
          l(d, u + (f ? 18 : 10), 7, 2),
          f ||
            (s.beginPath(),
            s.moveTo(d, u + 2),
            s.lineTo(d + 3.5, u - 3),
            s.lineTo(d + 7, u + 2),
            s.fill()),
          e === w.AMMO_SHELL_HE &&
            ((s.fillStyle = "#f08a1e"),
            l(d, u + 6, 7, 3),
            l(d, u + 13, 7, 3),
            (s.fillStyle = "#1d2226"),
            l(d, u + 2, 7, 4),
            (s.fillStyle = "#ffd77a"),
            l(d + 2.5, u + 8, 2, 4)));
      }
      break;
    case w.GLOCK:
      (l(8, 14, 22, 6), l(20, 20, 7, 12));
      break;
    case w.AK47:
      (l(2, 16, 32, 4),
        l(34, 15, 4, 6),
        (s.fillStyle = "#a97b46"),
        l(2, 15, 8, 6),
        l(14, 20, 5, 9),
        l(22, 20, 4, 6));
      break;
    case w.AWP:
      ((s.fillStyle = "#7d9b62"),
        l(2, 18, 34, 4),
        l(30, 17, 8, 5),
        (s.fillStyle = "#d5dde5"),
        l(6, 12, 3, 6),
        l(16, 13, 4, 5),
        l(18, 22, 4, 7));
      break;
    case w.GRENADE_LAUNCHER:
      ((s.fillStyle = "#687655"),
        l(3, 17, 27, 9),
        l(29, 19, 8, 7),
        (s.fillStyle = "#232d2a"),
        l(4, 16, 14, 11),
        l(22, 25, 5, 8),
        l(34, 17, 3, 11),
        (s.fillStyle = "#a9b4a0"));
      for (let h = 0; h < 5; h++) l(5 + h * 2.5, 16, 1, 11);
      (l(18, 9, 2, 8), l(24, 9, 2, 8), l(18, 9, 8, 1), l(18, 12, 8, 1));
      break;
    case w.AMMO_40MM:
      for (const h of [7, 22])
        ((s.fillStyle = "#b9944c"),
          l(h, 16, 11, 17),
          (s.fillStyle = "#d9be73"),
          l(h - 1, 30, 13, 3),
          (s.fillStyle = "#647347"),
          l(h, 9, 11, 8),
          l(h + 2, 6, 7, 3),
          (s.fillStyle = "#dfcc7b"),
          l(h, 17, 11, 2));
      break;
    case w.RPG:
      ((s.fillStyle = "#9aa07c"),
        l(6, 16, 26, 6),
        (s.fillStyle = "#6b7355"),
        s.beginPath(),
        s.moveTo(6, 19),
        s.lineTo(0, 13),
        s.lineTo(0, 25),
        s.closePath(),
        s.fill(),
        l(32, 14, 6, 10));
      break;
    case w.C4:
      ((s.fillStyle = "#aa9b6d"),
        l(5, 10, 30, 24),
        (s.fillStyle = "#3d4638"),
        l(9, 9, 4, 26),
        l(27, 9, 4, 26),
        (s.fillStyle = "#283d36"),
        l(14, 14, 12, 15),
        (s.fillStyle = "#bce4a3"),
        l(16, 17, 8, 3),
        (s.fillStyle = "#e56443"),
        l(21, 25, 3, 2),
        l(25, 6, 2, 10),
        l(20, 6, 7, 2));
      break;
    case w.GRENADE:
      ((s.fillStyle = "#5b7a4e"),
        s.beginPath(),
        s.arc(20, 22, 9, 0, 7),
        s.fill(),
        (s.fillStyle = "#aab"),
        l(17, 8, 6, 6),
        l(24, 9, 6, 3));
      break;
    case w.AXE: {
      (s.save(),
        s.translate(20, 21),
        s.rotate(0.55),
        (s.fillStyle = "#30261e"),
        s.beginPath(),
        s.roundRect(-3, -12, 6, 31, 2),
        s.fill());
      const h = s.createLinearGradient(-2, 0, 3, 0);
      (h.addColorStop(0, "#d3a66c"),
        h.addColorStop(1, "#805333"),
        (s.fillStyle = h),
        s.fillRect(-2, -11, 4, 29),
        (s.fillStyle = "#493b2c"),
        s.fillRect(-2, 12, 4, 2),
        s.fillRect(-2, 16, 4, 1));
      const d = s.createLinearGradient(-5, -15, 15, -3);
      (d.addColorStop(0, "#f1f4f4"),
        d.addColorStop(0.4, "#899aa6"),
        d.addColorStop(1, "#465862"),
        (s.fillStyle = d),
        (s.strokeStyle = "#28363e"),
        (s.lineWidth = 1),
        s.beginPath(),
        s.moveTo(-6, -14),
        s.lineTo(3, -14),
        s.quadraticCurveTo(8, -12, 13, -16),
        s.quadraticCurveTo(17, -9, 13, -2),
        s.quadraticCurveTo(7, -7, 2, -6),
        s.lineTo(-6, -7),
        s.closePath(),
        s.fill(),
        s.stroke(),
        (s.strokeStyle = "#ecf4f6"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.moveTo(13, -14),
        s.quadraticCurveTo(15, -9, 13, -4),
        s.stroke(),
        (s.fillStyle = "#3d4a50"),
        s.fillRect(-3, -12, 3, 4),
        s.restore());
      break;
    }
    case w.MOBILE_REMOTE: {
      const h = s.createLinearGradient(4, 8, 36, 35);
      (h.addColorStop(0, "#748879"),
        h.addColorStop(0.5, "#344b47"),
        h.addColorStop(1, "#1a292b"),
        (s.fillStyle = h),
        s.beginPath(),
        s.roundRect(3, 8, 34, 28, 4),
        s.fill(),
        (s.strokeStyle = "#9fac99"),
        (s.lineWidth = 1),
        s.stroke(),
        (s.fillStyle = "#081e25"),
        l(7, 12, 26, 18),
        (s.strokeStyle = "#305956"),
        (s.lineWidth = 0.6));
      for (let d = 0; d < 4; d++)
        (s.beginPath(),
          s.moveTo(8 + d * 6, 13),
          s.lineTo(8 + d * 6, 29),
          s.stroke(),
          s.beginPath(),
          s.moveTo(8, 14 + d * 4),
          s.lineTo(32, 14 + d * 4),
          s.stroke());
      ((s.strokeStyle = "#8aefd1"),
        s.beginPath(),
        s.arc(20, 21, 6, 0, Math.PI * 2),
        s.moveTo(20, 21),
        s.lineTo(25, 16),
        s.stroke(),
        (s.fillStyle = "#b2ffdc"),
        l(15, 18, 2, 2),
        l(24, 23, 2, 2),
        (s.fillStyle = "#c0cabc"),
        l(29, 2, 2, 8),
        l(8, 32, 2, 2),
        l(30, 32, 2, 2),
        (s.fillStyle = "#e3b55b"),
        l(16, 32, 8, 1));
      break;
    }
    case w.RADIO_MODULE:
      ((s.fillStyle = "#4c6152"),
        l(9, 15, 23, 19),
        (s.fillStyle = "#192c29"),
        l(12, 18, 17, 9),
        (s.fillStyle = "#a9ebbd"),
        l(14, 21, 9, 2),
        l(14, 29, 3, 2),
        (s.fillStyle = "#aaa98d"),
        l(27, 3, 2, 13),
        l(8, 29, 2, 5));
      break;
    case w.WELDER: {
      const h = s.createLinearGradient(8, 12, 28, 30);
      (h.addColorStop(0, "#ffa04a"),
        h.addColorStop(0.55, "#e0701c"),
        h.addColorStop(1, "#9c4812"),
        (s.fillStyle = "#1c1e21"),
        s.beginPath(),
        s.roundRect(15, 24, 7, 12, 2),
        s.fill(),
        (s.fillStyle = h),
        (s.strokeStyle = "#4a2208"),
        (s.lineWidth = 1),
        s.beginPath(),
        s.roundRect(8, 11, 22, 15, 3),
        s.fill(),
        s.stroke(),
        (s.fillStyle = "#1c1e21"),
        l(10, 8, 16, 3),
        (s.fillStyle = "#30353b"),
        s.beginPath(),
        s.arc(14, 18.5, 4.5, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#b87333"),
        s.beginPath(),
        s.arc(14, 18.5, 3, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#57ffa0"),
        l(21, 14, 7, 3),
        (s.fillStyle = "#f2c230"),
        l(20, 21, 2, 3),
        (s.fillStyle = "#1c1c1c"),
        l(22, 21, 2, 3),
        (s.fillStyle = "#f2c230"),
        l(24, 21, 2, 3),
        (s.strokeStyle = "#2a2d31"),
        (s.lineWidth = 3),
        (s.lineCap = "round"),
        s.beginPath(),
        s.moveTo(8, 16),
        s.quadraticCurveTo(2, 16, 3, 25),
        s.stroke(),
        (s.strokeStyle = "#c27a45"),
        (s.lineWidth = 3.4),
        s.beginPath(),
        s.moveTo(3, 25),
        s.lineTo(3.5, 29),
        s.stroke(),
        (s.lineCap = "butt"),
        (s.fillStyle = "#dfeaff"),
        s.beginPath(),
        s.arc(4, 31.5, 2.2, 0, Math.PI * 2),
        s.fill(),
        (s.strokeStyle = "#ffd36b"),
        (s.lineWidth = 1));
      for (const [d, u] of [
        [-3, 3],
        [2, 4],
        [4, 1],
        [-2, 5],
      ])
        (s.beginPath(),
          s.moveTo(4, 31.5),
          s.lineTo(4 + d, 31.5 + u),
          s.stroke());
      break;
    }
    case w.FIGHTER_JET: {
      (s.save(),
        s.translate(20, 20),
        s.rotate(-0.42),
        (s.fillStyle = "#344452"),
        (s.strokeStyle = "#182731"),
        (s.lineWidth = 1.2),
        s.beginPath(),
        s.moveTo(0, -19),
        s.lineTo(3, -7),
        s.lineTo(17, 8),
        s.lineTo(17, 12),
        s.lineTo(5, 8),
        s.lineTo(6, 14),
        s.lineTo(10, 17),
        s.lineTo(3, 16),
        s.lineTo(2, 18),
        s.lineTo(-2, 18),
        s.lineTo(-3, 16),
        s.lineTo(-10, 17),
        s.lineTo(-6, 14),
        s.lineTo(-5, 8),
        s.lineTo(-17, 12),
        s.lineTo(-17, 8),
        s.lineTo(-3, -7),
        s.closePath(),
        s.fill(),
        s.stroke(),
        (s.fillStyle = "#a9bfcc"),
        s.beginPath(),
        s.moveTo(0, -19),
        s.lineTo(2, 2),
        s.lineTo(13, 9),
        s.lineTo(3, 6),
        s.lineTo(2, 15),
        s.lineTo(-2, 15),
        s.lineTo(-3, 6),
        s.lineTo(-13, 9),
        s.lineTo(-2, 2),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#56cbea"),
        s.beginPath(),
        s.ellipse(0, -6, 1.8, 4.5, 0, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#ffad59"),
        l(-2, 16, 4, 3),
        s.restore());
      break;
    }
    case w.PLANE: {
      (s.save(),
        s.translate(20, 20),
        s.rotate(-0.42),
        (s.strokeStyle = "#243327"),
        (s.lineWidth = 1.2),
        (s.fillStyle = "#829d65"),
        s.beginPath(),
        s.roundRect(-17, -4, 34, 7, 2),
        s.fill(),
        s.stroke(),
        (s.fillStyle = "#b7c78d"),
        s.beginPath(),
        s.moveTo(-3, -13),
        s.quadraticCurveTo(0, -18, 3, -13),
        s.lineTo(2, 11),
        s.lineTo(9, 14),
        s.lineTo(9, 17),
        s.lineTo(-9, 17),
        s.lineTo(-9, 14),
        s.lineTo(-2, 11),
        s.closePath(),
        s.fill(),
        s.stroke(),
        (s.fillStyle = "#345c69"),
        l(-2, -9, 4, 6),
        (s.fillStyle = "#edf0d2"),
        l(-14, -3, 3, 5),
        l(11, -3, 3, 5),
        (s.fillStyle = "#3a4146"),
        l(-11, -15, 22, 2),
        (s.fillStyle = "#d7af66"),
        l(-2, -16, 4, 4),
        s.restore());
      break;
    }
    case w.SPACE_HELMET:
      ((s.fillStyle = "#aeb9c0"),
        s.beginPath(),
        s.roundRect(6, 8, 27, 25, 10),
        s.fill(),
        (s.fillStyle = "#eef2f3"),
        s.beginPath(),
        s.moveTo(9, 14),
        s.quadraticCurveTo(10, 7, 19, 6),
        s.quadraticCurveTo(29, 6, 32, 14),
        s.lineTo(30, 25),
        s.lineTo(9, 25),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#1b2b3a"),
        s.beginPath(),
        s.moveTo(10, 14),
        s.quadraticCurveTo(12, 10, 19, 10),
        s.quadraticCurveTo(27, 10, 30, 14),
        s.lineTo(28, 23),
        s.lineTo(12, 23),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#536e7c"),
        s.beginPath(),
        s.moveTo(12, 14),
        s.quadraticCurveTo(16, 11, 23, 12),
        s.lineTo(28, 15),
        s.lineTo(27, 19),
        s.lineTo(13, 19),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "rgba(196,230,238,0.7)"),
        l(14, 12, 8, 2),
        (s.strokeStyle = "#d5a84b"),
        (s.lineWidth = 1.4),
        s.beginPath(),
        s.moveTo(10, 24),
        s.lineTo(29, 24),
        s.stroke(),
        (s.fillStyle = "#5c6870"),
        l(8, 28, 24, 5),
        l(11, 33, 18, 3),
        (s.fillStyle = "#28343c"),
        l(29, 17, 5, 11),
        l(32, 19, 3, 7),
        (s.fillStyle = "#d8e0e2"),
        l(30, 19, 2, 3),
        l(30, 24, 2, 2),
        (s.fillStyle = "#39464d"));
      for (const [h, d] of [
        [11, 27],
        [28, 27],
        [15, 31],
        [24, 31],
      ])
        (s.beginPath(), s.arc(h, d, 0.9, 0, Math.PI * 2), s.fill());
      break;
    case w.MILITARY_MEDKIT: {
      ((s.fillStyle = "#192a24"),
        s.beginPath(),
        s.roundRect(5, 10, 31, 25, 4),
        s.fill());
      const h = s.createLinearGradient(7, 10, 32, 34);
      (h.addColorStop(0, "#87996a"),
        h.addColorStop(1, "#344735"),
        (s.fillStyle = h),
        s.beginPath(),
        s.roundRect(6, 10, 27, 23, 3),
        s.fill(),
        (s.strokeStyle = "#c6caa0"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.roundRect(15, 5, 12, 7, 2),
        s.stroke(),
        (s.fillStyle = "#283b2d"),
        l(9, 10, 3, 23),
        l(27, 10, 3, 23),
        l(6, 15, 27, 2),
        (s.fillStyle = "#c9bc88"),
        l(9, 15, 3, 5),
        l(27, 15, 3, 5),
        (s.fillStyle = "#e1e5cb"),
        s.beginPath(),
        s.roundRect(14, 18, 11, 11, 2),
        s.fill(),
        (s.fillStyle = "#b94038"),
        l(18, 19, 3, 9),
        l(15, 22, 9, 3),
        (s.fillStyle = "#b6c493"),
        l(7, 11, 25, 1),
        l(14, 31, 10, 1));
      break;
    }
    case w.MEDKIT:
      ((s.fillStyle = "#e8ecef"),
        l(6, 12, 28, 18),
        (s.fillStyle = "#d43a2a"),
        l(17, 15, 6, 12),
        l(14, 18, 12, 6));
      break;
    case w.BANDAGE:
      ((s.fillStyle = "#f2ede0"),
        s.beginPath(),
        s.ellipse(12, 20, 8, 8, 0, 0, 7),
        s.fill(),
        (s.fillStyle = "#e8ecef"),
        l(12, 15, 22, 10),
        (s.fillStyle = "#c9c2ae"),
        s.beginPath(),
        s.ellipse(12, 20, 3.5, 3.5, 0, 0, 7),
        s.fill(),
        (s.fillStyle = "#d43a2a"),
        l(24, 15, 4, 10),
        l(20, 18, 12, 4));
      break;
    case w.DETONATOR: {
      ((s.fillStyle = "#1b2023"),
        s.beginPath(),
        s.roundRect(10, 12, 20, 25, 3),
        s.fill(),
        (s.fillStyle = "#6f7d5c"),
        s.beginPath(),
        s.roundRect(11, 13, 18, 23, 2.5),
        s.fill(),
        (s.fillStyle = "#87956f"),
        l(12, 14, 16, 2),
        (s.fillStyle = "#2a3133"),
        l(14, 18, 12, 9),
        (s.fillStyle = "#d23a2c"),
        s.beginPath(),
        s.arc(20, 22.5, 3.6, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#ff7a66"),
        s.beginPath(),
        s.arc(19, 21.5, 1.3, 0, Math.PI * 2),
        s.fill(),
        (s.strokeStyle = "#e8c23a"),
        (s.lineWidth = 1.4),
        s.strokeRect(14.5, 18.5, 11, 8),
        (s.fillStyle = "#9fe36a"),
        l(14, 30, 3, 2),
        (s.fillStyle = "#3d4640"),
        l(19, 30, 7, 2),
        (s.fillStyle = "#8c969a"),
        l(25, 3, 2, 10),
        (s.fillStyle = "#c7cfd2"),
        l(24.5, 2, 3, 2));
      break;
    }
    case w.PUMPKIN_SEEDS:
    case w.ROASTED_PUMPKIN_SEEDS: {
      const h = e === w.ROASTED_PUMPKIN_SEEDS;
      for (const [d, u, f] of [
        [12, 15, -0.5],
        [22, 11, 0.2],
        [29, 19, -0.3],
        [15, 26, 0.5],
        [25, 28, -0.6],
        [19, 20, 0.1],
      ])
        (s.save(),
          s.translate(d, u),
          s.rotate(f),
          (s.fillStyle = h ? "#b98a4a" : "#efe3bf"),
          s.beginPath(),
          s.ellipse(0, 0, 3.4, 5, 0, 0, 7),
          s.fill(),
          (s.strokeStyle = h ? "#7e5626" : "#c9b683"),
          (s.lineWidth = 1),
          s.stroke(),
          s.restore());
      break;
    }
    case w.PUMPKIN_PIE: {
      ((s.fillStyle = "#b8793a"),
        s.beginPath(),
        s.ellipse(20, 24, 16, 9, 0, 0, 7),
        s.fill(),
        (s.fillStyle = "#e0892c"),
        s.beginPath(),
        s.ellipse(20, 22, 13, 7, 0, 0, 7),
        s.fill(),
        (s.fillStyle = "#f3a24a"),
        s.beginPath(),
        s.ellipse(18, 20.5, 7, 3, 0, 0, 7),
        s.fill(),
        (s.strokeStyle = "#d5a060"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.ellipse(20, 22, 14.5, 8, 0, 0, 7),
        s.stroke(),
        (s.fillStyle = "#fff4e2"),
        s.beginPath(),
        s.arc(20, 20, 2.6, 0, 7),
        s.fill());
      break;
    }
    case w.CANDY: {
      for (const [h, d, u] of [
        [13, 16, "#e8423a"],
        [26, 20, "#8a4ad8"],
        [17, 28, "#f4a31c"],
      ])
        ((s.fillStyle = u),
          s.beginPath(),
          s.moveTo(h - 9, d - 4),
          s.lineTo(h - 5, d),
          s.lineTo(h - 9, d + 4),
          s.fill(),
          s.beginPath(),
          s.moveTo(h + 9, d - 4),
          s.lineTo(h + 5, d),
          s.lineTo(h + 9, d + 4),
          s.fill(),
          s.beginPath(),
          s.arc(h, d, 5, 0, 7),
          s.fill(),
          (s.fillStyle = "rgba(255,255,255,.55)"),
          s.fillRect(h - 3, d - 3, 2, 3));
      break;
    }
    case w.CARAMEL_APPLE: {
      (a(20, 16, 22, 3, 2.5, "#d8b98a"),
        (s.fillStyle = "#c0322a"),
        s.beginPath(),
        s.arc(20, 25, 11, 0, 7),
        s.fill(),
        (s.fillStyle = "#c47a22"),
        s.beginPath(),
        s.arc(20, 22, 11, Math.PI * 1.05, Math.PI * 1.95),
        s.lineTo(31, 24));
      for (let h = 31; h >= 9; h -= 4) s.lineTo(h, 24 + ((h / 4) % 2 ? 4 : 1));
      (s.fill(),
        (s.fillStyle = "rgba(255,235,190,.6)"),
        s.fillRect(13, 16, 3, 3));
      break;
    }
    case w.WITCH_BREW: {
      ((s.fillStyle = "#6fe04a"),
        s.beginPath(),
        s.arc(20, 26, 10, 0, 7),
        s.fill(),
        (s.fillStyle = "rgba(210,255,190,.35)"),
        s.fillRect(16, 9, 8, 10),
        (s.strokeStyle = "#dff2e8"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.arc(20, 26, 10, 0, 7),
        s.stroke(),
        s.strokeRect(16, 9, 8, 9),
        (s.fillStyle = "#8a5a32"),
        s.fillRect(16.5, 5, 7, 5),
        (s.fillStyle = "#e8ffd8"));
      for (const [h, d] of [
        [16, 25],
        [23, 29],
        [21, 21],
      ])
        (s.beginPath(), s.arc(h, d, 1.6, 0, 7), s.fill());
      break;
    }
    case w.WENDIGO_ANTLER: {
      (a(10, 35, 18, 14, 4, "#4a3b2f"),
        a(18, 14, 30, 4, 3, "#4a3b2f"),
        a(15, 22, 6, 12, 2.5, "#4a3b2f"),
        a(21, 11, 20, 3, 2.5, "#4a3b2f"),
        a(25, 8, 34, 11, 2.5, "#4a3b2f"),
        a(18, 14, 26, 18, 2.2, "#4a3b2f"),
        (s.fillStyle = "#d7cdb4"),
        s.beginPath(),
        s.arc(10, 35, 3, 0, 7),
        s.fill());
      break;
    }
    case w.APPLE:
    case w.ORANGE:
    case w.COCONUT:
    case w.CHERRY: {
      const h =
        e === w.APPLE
          ? "#d94b3f"
          : e === w.ORANGE
            ? "#ed922c"
            : e === w.COCONUT
              ? "#8a5a32"
              : "#c92d53";
      ((s.fillStyle = h),
        s.beginPath(),
        s.arc(20, 22, e === w.CHERRY ? 7 : 11, 0, Math.PI * 2),
        s.fill(),
        e === w.CHERRY &&
          (s.beginPath(), s.arc(29, 25, 6, 0, Math.PI * 2), s.fill()),
        (s.strokeStyle = "#54823a"),
        (s.lineWidth = 3),
        s.beginPath(),
        s.moveTo(20, 13),
        s.quadraticCurveTo(22, 6, 29, 8),
        s.stroke());
      break;
    }
    case w.WHEAT:
      for (const [h, d, u] of [
        [12, 12, -0.32],
        [21, 7, 0.05],
        [29, 15, 0.38],
      ]) {
        (s.save(),
          s.translate(h, d),
          s.rotate(u),
          (s.strokeStyle = "#ad7b2c"),
          (s.lineWidth = 1.5),
          s.beginPath(),
          s.moveTo(0, 24),
          s.lineTo(0, -4),
          s.stroke());
        for (let f = 0; f < 4; f++)
          for (const p of [-1, 1])
            ((s.fillStyle = f % 2 ? "#e2ae40" : "#f5d16b"),
              s.beginPath(),
              s.ellipse(p * 2.2, f * 3, 3.6, 1.65, p * 0.65, 0, Math.PI * 2),
              s.fill(),
              (s.strokeStyle = "#f2cf78"),
              (s.lineWidth = 0.65),
              s.beginPath(),
              s.moveTo(p * 4, f * 3 - 1),
              s.lineTo(p * 5.5, f * 3 - 5),
              s.stroke());
        s.restore();
      }
      ((s.strokeStyle = "#bd8a3b"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.moveTo(16, 31),
        s.lineTo(27, 29),
        s.stroke());
      break;
    case w.WHEAT_SEEDS:
      s.fillStyle = "#b78b3d";
      for (const [h, d, u] of [
        [11, 15, -0.5],
        [20, 11, 0.35],
        [28, 18, -0.2],
        [15, 27, 0.25],
        [25, 30, -0.45],
      ])
        (s.save(),
          s.translate(h, d),
          s.rotate(u),
          s.beginPath(),
          s.ellipse(0, 0, 4.5, 2.4, 0, 0, Math.PI * 2),
          s.fill(),
          s.restore());
      break;
    case w.FERTILIZER:
      ((s.fillStyle = "#d8c28c"),
        s.beginPath(),
        s.moveTo(9, 10),
        s.lineTo(31, 10),
        s.lineTo(34, 34),
        s.lineTo(6, 34),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#8a6a3d"),
        l(8, 9, 24, 4),
        (s.fillStyle = "#4f8c45"),
        s.beginPath(),
        s.ellipse(20, 21, 6, 9, -0.55, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#2f6338"),
        l(18.5, 20, 3, 11),
        (s.fillStyle = "#513923"));
      for (const [h, d] of [
        [12, 29],
        [27, 28],
        [16, 32],
        [24, 32],
      ])
        (s.beginPath(), s.arc(h, d, 1.3, 0, Math.PI * 2), s.fill());
      break;
    case w.RAW_PORK:
    case w.RAW_CHICKEN:
    case w.RAW_MUTTON:
    case w.RAW_BEEF:
    case w.RAW_CAMEL:
    case w.COOKED_PORK:
    case w.COOKED_CHICKEN:
    case w.COOKED_MUTTON:
    case w.COOKED_BEEF:
    case w.COOKED_CAMEL:
      Xie(s, e);
      break;
    case w.BUCKET:
    case w.WATER_BUCKET:
    case w.LAVA_BUCKET:
    case w.MILK_BUCKET:
    case w.CAMEL_MILK_BUCKET: {
      ((s.strokeStyle = "#8d99a3"),
        (s.lineWidth = 3),
        s.beginPath(),
        s.arc(20, 14, 12, Math.PI * 1.08, Math.PI * 1.92),
        s.stroke(),
        (s.fillStyle = "#77838d"),
        s.beginPath(),
        s.moveTo(8, 14),
        s.lineTo(32, 14),
        s.lineTo(28, 35),
        s.lineTo(12, 35),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#aeb8c0"),
        l(10, 15, 20, 4),
        (s.fillStyle = "#59636b"),
        l(12, 31, 16, 4),
        e !== w.BUCKET &&
          ((s.fillStyle =
            e === w.WATER_BUCKET
              ? "#3f86dc"
              : e === w.MILK_BUCKET
                ? "#f4f1e6"
                : e === w.CAMEL_MILK_BUCKET
                  ? "#efe6d0"
                  : "#ff6a1c"),
          s.beginPath(),
          s.ellipse(20, 19, 9.5, 3.5, 0, 0, Math.PI * 2),
          s.fill(),
          e === w.CAMEL_MILK_BUCKET &&
            ((s.strokeStyle = "#c8a061"),
            (s.lineWidth = 1.6),
            s.beginPath(),
            s.ellipse(20, 19, 9.5, 3.5, 0, 0, Math.PI * 2),
            s.stroke()),
          e === w.LAVA_BUCKET &&
            ((s.fillStyle = "#ffd45a"), l(15, 18, 4, 2), l(22, 20, 5, 2))));
      break;
    }
    case w.POTATO:
    case w.BAKED_POTATO: {
      const h = e === w.BAKED_POTATO;
      ((s.fillStyle = h ? "#a9752f" : "#c9a768"),
        s.beginPath(),
        s.ellipse(20, 21, 13, 10, 0.3, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = h ? "#7d5220" : "#a4864f"));
      for (const [d, u] of [
        [14, 17],
        [24, 16],
        [19, 25],
        [27, 24],
      ])
        (s.beginPath(),
          s.ellipse(d, u, 1.8, 1.2, 0.4, 0, Math.PI * 2),
          s.fill());
      h && ((s.fillStyle = "#ffe6a8"), l(15, 19, 11, 3));
      break;
    }
    case w.CARROT: {
      ((s.fillStyle = "#e07b28"),
        s.beginPath(),
        s.moveTo(16, 12),
        s.lineTo(24, 14),
        s.lineTo(21, 34),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#c96517"),
        l(17, 18, 6, 1.6),
        l(18, 24, 5, 1.6),
        (s.fillStyle = "#4e9a3c"));
      for (const h of [-0.5, 0, 0.5])
        (s.save(),
          s.translate(20, 12),
          s.rotate(h),
          s.beginPath(),
          s.ellipse(0, -5, 2.4, 6, 0, 0, Math.PI * 2),
          s.fill(),
          s.restore());
      break;
    }
    case w.POTATO_SEEDS:
    case w.CARROT_SEEDS: {
      const h = e === w.CARROT_SEEDS;
      s.fillStyle = h ? "#d8853f" : "#b99a63";
      for (const [d, u, f] of [
        [12, 16, -0.4],
        [21, 12, 0.3],
        [28, 19, -0.2],
        [16, 27, 0.3],
        [26, 29, -0.4],
      ])
        (s.save(),
          s.translate(d, u),
          s.rotate(f),
          s.beginPath(),
          s.ellipse(0, 0, h ? 3.2 : 4.4, h ? 1.7 : 2.6, 0, 0, Math.PI * 2),
          s.fill(),
          s.restore());
      break;
    }
    case w.RASPBERRY:
    case w.BLUEBERRY:
    case w.BLACKBERRY: {
      const h = e !== w.BLUEBERRY,
        d =
          e === w.RASPBERRY
            ? "#c0304f"
            : e === w.BLACKBERRY
              ? "#3a2740"
              : "#4a5aa8",
        u =
          e === w.RASPBERRY
            ? "#e4627c"
            : e === w.BLACKBERRY
              ? "#5e4568"
              : "#7c8ad4";
      ((s.strokeStyle = "#4d7a3c"),
        (s.lineWidth = 2.2),
        (s.lineCap = "round"),
        s.beginPath(),
        s.moveTo(20, 30),
        s.quadraticCurveTo(24, 16, 30, 9),
        s.stroke(),
        (s.fillStyle = "#5d9146"),
        s.beginPath(),
        s.ellipse(26, 10, 6, 3, -0.5, 0, Math.PI * 2),
        s.fill());
      for (const [f, p, m] of [
        [26, 22, 7],
        [16, 25, 9],
      ])
        if (h) {
          s.fillStyle = d;
          for (let g = 0; g < 7; g++) {
            const y = (g / 7) * Math.PI * 2;
            (s.beginPath(),
              s.arc(
                f + Math.cos(y) * m * 0.52,
                p + Math.sin(y) * m * 0.52,
                m * 0.42,
                0,
                Math.PI * 2,
              ),
              s.fill());
          }
          (s.beginPath(),
            s.arc(f, p, m * 0.46, 0, Math.PI * 2),
            s.fill(),
            (s.fillStyle = u),
            s.beginPath(),
            s.arc(f - m * 0.42, p - m * 0.42, m * 0.24, 0, Math.PI * 2),
            s.fill());
        } else {
          ((s.fillStyle = d),
            s.beginPath(),
            s.arc(f, p, m, 0, Math.PI * 2),
            s.fill(),
            (s.strokeStyle = "#2c3670"),
            (s.lineWidth = 1.4));
          for (let g = 0; g < 5; g++) {
            const y = (g / 5) * Math.PI * 2;
            (s.beginPath(),
              s.moveTo(f, p - m * 0.35),
              s.lineTo(
                f + Math.cos(y) * m * 0.4,
                p - m * 0.35 + Math.sin(y) * m * 0.3,
              ),
              s.stroke());
          }
          ((s.fillStyle = u),
            (s.globalAlpha = 0.75),
            s.beginPath(),
            s.ellipse(
              f - m * 0.35,
              p + m * 0.3,
              m * 0.3,
              m * 0.2,
              -0.6,
              0,
              Math.PI * 2,
            ),
            s.fill(),
            (s.globalAlpha = 1));
        }
      break;
    }
    case w.EGG: {
      ((s.fillStyle = "#f2e8d8"),
        s.beginPath(),
        s.ellipse(20, 21, 9.5, 12, 0, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#ddd0ba"),
        s.beginPath(),
        s.ellipse(23, 25, 4, 5, 0.4, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#ffffff"),
        (s.globalAlpha = 0.7),
        s.beginPath(),
        s.ellipse(17, 16, 3, 4, -0.3, 0, Math.PI * 2),
        s.fill(),
        (s.globalAlpha = 1));
      break;
    }
    case w.WOOL: {
      s.fillStyle = "#efece2";
      for (const [h, d, u] of [
        [15, 18, 8],
        [25, 17, 7.5],
        [20, 26, 8.5],
        [28, 25, 6.5],
        [12, 26, 6],
      ])
        (s.beginPath(), s.arc(h, d, u, 0, Math.PI * 2), s.fill());
      ((s.strokeStyle = "#d5d1c4"),
        (s.lineWidth = 1.4),
        s.beginPath(),
        s.arc(16, 20, 4, 0.4, 3.4),
        s.stroke(),
        s.beginPath(),
        s.arc(25, 24, 4, 0.8, 3.8),
        s.stroke());
      break;
    }
    case w.COMBAT_KNIFE: {
      (s.save(),
        s.translate(20, 20),
        s.rotate(-Math.PI / 4),
        (s.lineJoin = "round"));
      const h = (d, u, f = "") => {
        (s.beginPath(),
          d.forEach(([p, m], g) => (g ? s.lineTo(p, m) : s.moveTo(p, m))),
          s.closePath(),
          (s.fillStyle = u),
          s.fill(),
          f && ((s.strokeStyle = f), (s.lineWidth = 0.9), s.stroke()));
      };
      ((s.fillStyle = "rgba(0,0,0,.22)"),
        s.beginPath(),
        s.ellipse(1, 15, 14, 2.2, Math.PI / 4, 0, Math.PI * 2),
        s.fill(),
        h(
          [
            [-2, -3.4],
            [15, -3.4],
            [19.5, -1.8],
            [24, 0.5],
            [17.5, 2.8],
            [6, 3.6],
            [-2, 3.1],
          ],
          "#30363b",
          "#0f1316",
        ),
        h(
          [
            [-0.5, 1.3],
            [16.5, 1.3],
            [24, 0.5],
            [17.5, 2.8],
            [6, 3.6],
            [-0.5, 3.1],
          ],
          "#d7dee2",
        ));
      for (let d = 2; d <= 10; d += 2.6)
        h(
          [
            [d, -3.4],
            [d + 1.3, -4.9],
            [d + 2.6, -3.4],
          ],
          "#454c52",
        );
      ((s.fillStyle = "#121518"),
        s.fillRect(1.5, -1.6, 10, 1.3),
        (s.strokeStyle = "#7d878f"),
        (s.lineWidth = 0.7),
        s.beginPath(),
        s.moveTo(-1, -2.6),
        s.lineTo(15, -2.6),
        s.stroke(),
        h(
          [
            [-4.5, -6.5],
            [-1.8, -6.5],
            [-1.8, 6.8],
            [-3.2, 7.6],
            [-4.5, 6.8],
          ],
          "#5c656c",
          "#151a1d",
        ),
        h(
          [
            [-18, -3.3],
            [-4.5, -3.6],
            [-4.5, 3.6],
            [-18, 3.3],
          ],
          "#2a2f2b",
          "#0f1316",
        ),
        (s.strokeStyle = "#454d47"),
        (s.lineWidth = 1));
      for (const d of [-15.5, -12.5, -9.5, -6.8])
        (s.beginPath(), s.moveTo(d, -3.1), s.lineTo(d, 3.1), s.stroke());
      (h(
        [
          [-22, -3],
          [-18, -3.6],
          [-18, 3.6],
          [-22, 3],
        ],
        "#68717a",
        "#151a1d",
      ),
        (s.fillStyle = "#0b0c0e"),
        s.fillRect(-20.8, -0.8, 1.6, 1.6),
        s.restore());
      break;
    }
    case w.SHEARS: {
      ((s.strokeStyle = "#aeb8c0"),
        (s.lineWidth = 3.4),
        (s.lineCap = "round"),
        s.beginPath(),
        s.moveTo(11, 9),
        s.lineTo(27, 27),
        s.stroke(),
        s.beginPath(),
        s.moveTo(29, 9),
        s.lineTo(13, 27),
        s.stroke(),
        (s.strokeStyle = "#4a5a3a"),
        (s.lineWidth = 3),
        s.beginPath(),
        s.arc(14, 31, 4.5, 0, Math.PI * 2),
        s.stroke(),
        s.beginPath(),
        s.arc(26, 31, 4.5, 0, Math.PI * 2),
        s.stroke(),
        (s.fillStyle = "#d8dee3"),
        s.beginPath(),
        s.arc(20, 18, 2.4, 0, Math.PI * 2),
        s.fill(),
        (s.lineCap = "butt"));
      break;
    }
    case w.FISHING_ROD: {
      (a(7, 33, 30, 9, 3.2, "#2f3338"),
        (s.fillStyle = "#c7a06a"),
        s.save(),
        s.translate(9, 31),
        s.rotate(-0.81),
        s.fillRect(-3, -4, 11, 7),
        s.restore(),
        (s.fillStyle = "#8d959d"),
        s.beginPath(),
        s.arc(14, 27, 4.2, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = "#e8eef2"),
        s.beginPath(),
        s.arc(14, 27, 2.1, 0, Math.PI * 2),
        s.fill(),
        a(30, 9, 32, 25, 1, "#dfe6ea"),
        (s.fillStyle = "#d8352a"),
        s.beginPath(),
        s.arc(32, 27, 3.4, Math.PI, 0),
        s.fill(),
        (s.fillStyle = "#f2efe6"),
        s.beginPath(),
        s.arc(32, 27, 3.4, 0, Math.PI),
        s.fill());
      break;
    }
    case w.RAW_FISH:
    case w.COOKED_FISH: {
      const h = e === w.COOKED_FISH,
        d = h ? "#c98b45" : "#7fb4d4",
        u = h ? "#e8c07a" : "#dfeef6";
      if (
        ((s.fillStyle = d),
        s.beginPath(),
        s.ellipse(19, 21, 12, 7.5, 0, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = u),
        s.beginPath(),
        s.ellipse(19, 24, 9.5, 3.6, 0, 0, Math.PI * 2),
        s.fill(),
        (s.fillStyle = h ? "#a96f31" : "#5f97b8"),
        s.beginPath(),
        s.moveTo(30, 21),
        s.lineTo(37, 14),
        s.lineTo(35, 21),
        s.lineTo(37, 28),
        s.closePath(),
        s.fill(),
        s.beginPath(),
        s.moveTo(17, 14),
        s.lineTo(22, 9),
        s.lineTo(24, 15),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#20262b"),
        s.beginPath(),
        s.arc(11, 19, 1.7, 0, Math.PI * 2),
        s.fill(),
        h)
      ) {
        ((s.strokeStyle = "#7a4a1c"), (s.lineWidth = 1.6));
        for (const f of [13, 19, 25])
          (s.beginPath(), s.moveTo(f, 15), s.lineTo(f - 3, 27), s.stroke());
      }
      break;
    }
    case w.SHARK_TOOTH:
      ((s.fillStyle = "#f4f2ec"),
        s.beginPath(),
        s.moveTo(20, 6),
        s.lineTo(30, 30),
        s.lineTo(20, 26),
        s.lineTo(10, 30),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#d8d4c6"),
        s.beginPath(),
        s.moveTo(20, 6),
        s.lineTo(20, 26),
        s.lineTo(10, 30),
        s.closePath(),
        s.fill(),
        (s.strokeStyle = "#a9a396"),
        (s.lineWidth = 1.4),
        s.beginPath(),
        s.moveTo(13, 28),
        s.lineTo(27, 28),
        s.stroke());
      break;
    case w.INTEL_TABLET:
      ((s.fillStyle = "#3c4436"),
        l(7, 8, 26, 26),
        (s.fillStyle = "#182420"),
        l(10, 11, 20, 17),
        (s.fillStyle = "#48d46a"),
        l(12, 13, 7, 2),
        l(14, 17, 10, 2),
        l(12, 21, 5, 2),
        l(22, 24, 6, 2),
        (s.fillStyle = "#ffd44a"),
        s.beginPath(),
        s.arc(24, 18, 2, 0, 7),
        s.fill(),
        (s.fillStyle = "#5a6552"),
        l(17, 30, 6, 2));
      break;
    case w.MILITARY_BOT:
      ((s.fillStyle = "#d8a577"),
        l(16, 6, 8, 8),
        (s.fillStyle = "#566744"),
        l(13, 15, 14, 12),
        l(9, 17, 5, 13),
        l(26, 17, 5, 13),
        (s.fillStyle = "#303640"),
        l(14, 28, 5, 9),
        l(21, 28, 5, 9),
        (s.fillStyle = "#222"),
        l(20, 19, 17, 3));
      break;
    case w.AMMO_9MM:
    case w.AMMO_762:
    case w.AMMO_338:
    case w.AMMO_50AE:
    case w.AMMO_556: {
      const h = e === w.AMMO_50AE,
        d = e === w.AMMO_556,
        u = e === w.AMMO_9MM || h,
        f = e === w.AMMO_338 || h,
        p = f ? 2 : 3,
        m = h ? 11 : f ? 9 : d ? 6 : 7,
        g = 35,
        y = h ? 21 : u ? 22 : f || d ? 17 : 19,
        b = u ? y : y - 4,
        S = h ? 11 : u ? 13 : f ? 3 : d ? 2 : 5;
      for (let M = 0; M < p; M++) {
        (s.save(),
          s.translate(f ? 10 + M * 15 : 6 + M * 11, M % 2 === 0 ? 0 : -2));
        const E = u ? m : m * 0.56,
          A = (m - E) / 2,
          T = s.createLinearGradient(0, 0, m, 0);
        (T.addColorStop(0, "#805624"),
          T.addColorStop(0.23, "#e6b967"),
          T.addColorStop(0.43, "#ffe4a0"),
          T.addColorStop(0.68, "#c79545"),
          T.addColorStop(1, "#815526"),
          (s.fillStyle = T),
          (s.strokeStyle = "#50351d"),
          (s.lineWidth = 0.8),
          s.beginPath(),
          s.moveTo(0, g - 3),
          s.lineTo(0, y),
          s.lineTo(A, b),
          s.lineTo(m - A, b),
          s.lineTo(m, y),
          s.lineTo(m, g - 3),
          s.closePath(),
          s.fill(),
          s.stroke());
        const x = s.createLinearGradient(A, 0, m - A, 0);
        (x.addColorStop(0, "#77402a"),
          x.addColorStop(0.35, "#efb180"),
          x.addColorStop(1, "#a75c36"),
          (s.fillStyle = x),
          s.beginPath(),
          s.moveTo(A, b),
          u
            ? (s.lineTo(A, S + 4),
              s.bezierCurveTo(A, S - 1, m - A, S - 1, m - A, S + 4))
            : (s.quadraticCurveTo(A + 0.25, S + 4, m / 2, S),
              s.quadraticCurveTo(m - A - 0.25, S + 4, m - A, b)),
          s.lineTo(m - A, b),
          s.closePath(),
          s.fill(),
          s.stroke(),
          (s.fillStyle = "#f9d787"),
          l(A, b, E, 1.3),
          (s.fillStyle = "#604322"),
          l(0.5, g - 3, m - 1, 1.5),
          (s.fillStyle = T),
          l(-0.5, g - 1.5, m + 1, 2.5),
          (s.fillStyle = "#ffe2a0"),
          l(0, g - 1.5, m, 0.8),
          s.restore());
      }
      break;
    }
    case w.ROCKET:
      ((s.fillStyle = "#6b7355"),
        l(8, 17, 22, 6),
        (s.fillStyle = "#4a5540"),
        s.beginPath(),
        s.moveTo(30, 20),
        s.lineTo(38, 14),
        s.lineTo(38, 26),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#9aa07c"),
        l(3, 15, 7, 10));
      break;
    case w.DRILL_METAL:
    case w.DRILL_DIAMOND:
    case w.DRILL_TITANIUM:
    case w.DRILL_COMPOSITE:
    case w.DRILL_LASER:
    case w.LUNAR_DRILL: {
      const h =
          e === w.DRILL_METAL
            ? 0
            : e === w.DRILL_DIAMOND
              ? 1
              : e === w.DRILL_TITANIUM
                ? 2
                : e === w.DRILL_COMPOSITE
                  ? 3
                  : e === w.DRILL_LASER
                    ? 4
                    : 5,
        d = c4[h],
        u = (f) => "#" + f.toString(16).padStart(6, "0");
      (s.save(),
        s.translate(15, 22),
        s.rotate(-0.55),
        s.scale(0.9, 0.9),
        (s.fillStyle = u(d.body)),
        l(-6, 5, 9, 13),
        (s.fillStyle = u(d.over)),
        l(-2, 6, 4, 12),
        (s.fillStyle = u(d.dark)),
        l(-10, 17, 15, 6),
        (s.fillStyle = u(d.over)),
        l(-10, 16, 15, 2),
        (s.fillStyle = u(d.body)),
        l(-9, -5, 21, 11),
        (s.fillStyle = "rgba(255,255,255,0.22)"),
        l(-7, -4, 16, 2),
        (s.fillStyle = u(d.over)),
        l(-4, -1, 10, 4),
        (s.fillStyle = u(d.dark)),
        l(12, -4, 5, 9),
        (s.fillStyle = u(d.bit)),
        l(17, -1.5, 12, 3),
        d.glow && ((s.shadowColor = u(d.glow)), (s.shadowBlur = 6)),
        s.beginPath(),
        s.moveTo(29, -1.5),
        s.lineTo(34, 0),
        s.lineTo(29, 1.5),
        s.closePath(),
        s.fill(),
        (s.shadowBlur = 0),
        (s.fillStyle = "rgba(0,0,0,0.35)"));
      for (let f = 0; f < 4; f++) l(18.5 + f * 2.6, -1.5, 1, 3);
      s.restore();
      break;
    }
    case w.CHAINSAW_BASIC:
    case w.CHAINSAW_PRO:
    case w.CHAINSAW_INDUSTRIAL: {
      const h = l4[e === w.CHAINSAW_BASIC ? 0 : e === w.CHAINSAW_PRO ? 1 : 2],
        d = (u) => "#" + u.toString(16).padStart(6, "0");
      (s.save(),
        s.translate(20, 21),
        s.rotate(-0.35),
        (s.fillStyle = "#c9d0d4"),
        l(-19, -3.5, 26, 7),
        s.beginPath(),
        s.arc(-19, 0, 3.5, Math.PI / 2, Math.PI * 1.5),
        s.fill(),
        (s.strokeStyle = "#2a2e32"),
        (s.lineWidth = 1.2),
        s.setLineDash([1.6, 1.2]),
        s.beginPath(),
        s.moveTo(7, -4.2),
        s.lineTo(-19, -4.2),
        s.arc(-19, 0, 4.2, Math.PI * 1.5, Math.PI / 2, !0),
        s.lineTo(7, 4.2),
        s.stroke(),
        s.setLineDash([]),
        (s.fillStyle = d(h.decal)),
        l(-14, -1, 12, 2),
        (s.fillStyle = d(h.body)),
        l(4, -8, 15, 15),
        (s.fillStyle = d(h.cover)),
        l(6, -11, 11, 5),
        (s.fillStyle = d(h.dark)),
        l(5, 2, 6, 6),
        (s.strokeStyle = d(h.dark)),
        (s.lineWidth = 2.4),
        s.beginPath(),
        s.moveTo(18, -6),
        s.lineTo(25, -6),
        s.lineTo(25, 6),
        s.lineTo(18, 6),
        s.stroke(),
        s.beginPath(),
        s.arc(6, -6, 6, Math.PI, Math.PI * 1.8),
        s.stroke(),
        s.restore());
      break;
    }
    case w.MONEY:
      ((s.fillStyle = "#e6c94a"),
        s.beginPath(),
        s.arc(20, 20, 13, 0, 7),
        s.fill(),
        (s.strokeStyle = "#a9862a"),
        (s.lineWidth = 1.5),
        s.stroke(),
        (s.fillStyle = "#8a6a1a"),
        (s.font = "bold 15px sans-serif"),
        (s.textAlign = "center"),
        (s.textBaseline = "middle"),
        s.fillText("$", 20, 21));
      break;
    case w.COAL:
      ((s.fillStyle = "#2f3438"),
        s.beginPath(),
        s.moveTo(7, 28),
        s.lineTo(10, 13),
        s.lineTo(20, 7),
        s.lineTo(33, 15),
        s.lineTo(30, 30),
        s.lineTo(17, 34),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#596168"),
        l(13, 13, 7, 4),
        l(22, 21, 6, 4));
      break;
    case w.IRON_INGOT:
    case w.GOLD_INGOT:
    case w.DIAMOND_INGOT:
    case w.TITANIUM_INGOT: {
      const h =
        e === w.IRON_INGOT
          ? "#bdc5cc"
          : e === w.GOLD_INGOT
            ? "#e6c34f"
            : e === w.DIAMOND_INGOT
              ? "#55dce9"
              : "#8798aa";
      ((s.fillStyle = h),
        s.beginPath(),
        s.moveTo(7, 27),
        s.lineTo(12, 12),
        s.lineTo(28, 12),
        s.lineTo(34, 27),
        s.lineTo(29, 32),
        s.lineTo(11, 32),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "rgba(255,255,255,0.38)"),
        l(14, 15, 12, 3));
      break;
    }
    case w.SUPPRESSOR:
      ((s.fillStyle = "#24272c"), l(4, 16, 30, 8), (s.fillStyle = "#121417"));
      for (let h = 0; h < 4; h++) l(9 + h * 6, 17, 2, 6);
      ((s.fillStyle = "#3a3e44"), l(32, 15, 4, 10));
      break;
    case w.FLASHLIGHT: {
      const h = s.createRadialGradient(31, 20, 1, 31, 20, 13);
      (h.addColorStop(0, "rgba(255,246,198,0.95)"),
        h.addColorStop(0.45, "rgba(255,232,150,0.35)"),
        h.addColorStop(1, "rgba(255,224,120,0)"),
        (s.fillStyle = h),
        s.beginPath(),
        s.moveTo(28, 20),
        s.lineTo(39, 9),
        s.lineTo(39, 31),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "#2c3238"),
        l(5, 15, 20, 11),
        (s.fillStyle = "#3d454d"),
        l(24, 13, 6, 15));
      for (let d = 0; d < 4; d++)
        ((s.fillStyle = "#20262b"), l(9 + d * 3, 15, 1.4, 11));
      ((s.fillStyle = "#8f9aa4"),
        l(4, 17, 2, 7),
        (s.fillStyle = "#fff3c4"),
        l(29, 15, 2.5, 11),
        (s.strokeStyle = "#59636d"),
        (s.lineWidth = 1),
        s.strokeRect(24.5, 13.5, 5, 14));
      break;
    }
    case w.FOREGRIP: {
      ((s.fillStyle = "#20262b"), l(9, 7, 22, 6), (s.fillStyle = "#383f45"));
      for (let d = 10; d < 30; d += 3) l(d, 5.5, 1.6, 1.8);
      const h = s.createLinearGradient(14, 0, 26, 0);
      (h.addColorStop(0, "#6e5d42"),
        h.addColorStop(0.45, "#b39a6e"),
        h.addColorStop(1, "#6a5940"),
        (s.fillStyle = h),
        s.beginPath(),
        s.moveTo(14, 13),
        s.lineTo(26, 13),
        s.lineTo(27, 33),
        s.lineTo(15, 34),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "rgba(40,30,18,.55)"));
      for (let d = 16; d < 31; d += 3.2) l(14.6, d, 12, 1.3);
      ((s.fillStyle = "#1c2125"), l(14, 33, 14, 3));
      break;
    }
    case w.LASER_SIGHT:
      ((s.fillStyle = "#2b2f36"),
        l(5, 16, 11, 9),
        (s.fillStyle = "#171a1f"),
        l(6, 24, 4, 4),
        (s.strokeStyle = "rgba(255,60,50,0.85)"),
        (s.lineWidth = 1.4),
        s.beginPath(),
        s.moveTo(16, 20),
        s.lineTo(35, 20),
        s.stroke(),
        (s.fillStyle = "#ff4433"),
        s.beginPath(),
        s.arc(36, 20, 2.2, 0, 7),
        s.fill());
      break;
    case w.SCOPE_X2:
    case w.SCOPE_X4:
    case w.SCOPE_X8:
    case w.SCOPE_X16: {
      const h =
        e === w.SCOPE_X2 ? 2 : e === w.SCOPE_X4 ? 4 : e === w.SCOPE_X8 ? 8 : 16;
      Qie(s, h);
      break;
    }
    case w.SCOPE_HOLO:
      ((s.fillStyle = "#2b2f36"),
        l(8, 11, 24, 17),
        (s.fillStyle = "rgba(120,200,255,0.16)"),
        l(12, 14, 16, 11),
        (s.strokeStyle = "#4a5058"),
        (s.lineWidth = 1.5),
        s.strokeRect(12, 14, 16, 11),
        (s.fillStyle = "#3af23a"),
        s.beginPath(),
        s.arc(20, 19.5, 1.7, 0, 7),
        s.fill(),
        (s.fillStyle = "#1c1f24"),
        l(6, 28, 28, 4));
      break;
    case w.NIGHT_VISION_GOGGLES:
    case w.THERMAL_GOGGLES: {
      const h = e === w.THERMAL_GOGGLES;
      ((s.fillStyle = "#20262b"),
        l(7, 15, 26, 8),
        l(18, 8, 4, 9),
        (s.fillStyle = "#3a444b"),
        l(5, 18, 13, 10),
        l(22, 18, 13, 10),
        (s.fillStyle = h ? "#ff7a24" : "#82ef91"),
        s.beginPath(),
        s.arc(12, 23, 5, 0, 7),
        s.arc(28, 23, 5, 0, 7),
        s.fill(),
        (s.fillStyle = "rgba(255,255,255,.65)"),
        l(9, 20, 3, 2),
        l(25, 20, 3, 2));
      break;
    }
    case w.EXT_MAG:
      ((s.fillStyle = "#4a4f38"),
        s.beginPath(),
        s.moveTo(15, 6),
        s.lineTo(24, 6),
        s.quadraticCurveTo(29, 20, 25, 34),
        s.lineTo(16, 34),
        s.quadraticCurveTo(11, 20, 15, 6),
        s.closePath(),
        s.fill(),
        (s.fillStyle = "rgba(0,0,0,0.3)"));
      for (let h = 0; h < 3; h++) l(15, 13 + h * 6, 9, 2);
      ((s.fillStyle = "rgba(0,0,0,0.55)"),
        s.beginPath(),
        s.arc(29, 10, 6, 0, 7),
        s.fill(),
        (s.strokeStyle = "#8fe89a"),
        (s.lineWidth = 2),
        s.beginPath(),
        s.moveTo(29, 7),
        s.lineTo(29, 13),
        s.moveTo(26, 10),
        s.lineTo(32, 10),
        s.stroke());
      break;
    case w.DYE_GREEN:
    case w.DYE_URBAN:
    case w.DYE_WOODLAND:
    case w.DYE_DESERT:
    case w.DYE_ARCTIC: {
      const d = {
        [w.DYE_GREEN]: ["#526b31", "#394d25", "#718846"],
        [w.DYE_URBAN]: ["#737980", "#343a40", "#a4a8aa"],
        [w.DYE_WOODLAND]: ["#52653a", "#283a24", "#76583a"],
        [w.DYE_DESERT]: ["#c8ab72", "#8f7045", "#e0c992"],
        [w.DYE_ARCTIC]: ["#e7ecee", "#aebbc3", "#687883"],
      }[e];
      ((s.fillStyle = d[0]),
        l(7, 7, 26, 27),
        (s.fillStyle = d[1]),
        l(7, 7, 11, 9),
        l(20, 20, 13, 9),
        (s.fillStyle = d[2]),
        l(18, 8, 15, 8),
        l(8, 24, 10, 10),
        (s.strokeStyle = "rgba(255,255,255,.35)"),
        (s.lineWidth = 2),
        s.strokeRect(7, 7, 26, 27));
      break;
    }
    default:
      O0(e) && tse(s, e);
      break;
  }
  c && Fk(s, e);
}
