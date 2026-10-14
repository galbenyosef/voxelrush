// assets__index-Dp6GxvJu 133 — fillstyle
// Lines 77036-79366 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function Lo(n, e, t) {
  var h;
  const i = aa(e);
  if (i) {
    (n.clearRect(0, 0, 40, 40), n.save());
    const d = n.createLinearGradient(7, 0, 33, 0);
    if (
      (d.addColorStop(0, "#1e2b2c"),
      d.addColorStop(0.35, "#" + i.color.toString(16).padStart(6, "0")),
      d.addColorStop(0.55, "#a5a992"),
      d.addColorStop(1, "#28383a"),
      (n.fillStyle = d),
      i.shape === "stick" || i.shape === "bundle")
    ) {
      for (let u = 0; u < (i.shape === "stick" ? 1 : 3); u++)
        n.fillRect(10 + u * 7, 8, 6, 25);
      ((n.fillStyle = "#283938"),
        n.fillRect(9, 13, i.shape === "stick" ? 8 : 23, 4),
        n.fillRect(9, 26, i.shape === "stick" ? 8 : 23, 4));
    } else
      i.shape === "sphere"
        ? (n.beginPath(), n.arc(20, 22, 13, 0, Math.PI * 2), n.fill())
        : (n.beginPath(),
          n.roundRect(8, 6, 24, 30, i.shape === "case" ? 3 : 9),
          n.fill(),
          (n.fillStyle = "#2d3a3d"),
          n.fillRect(8, 12, 24, 3),
          n.fillRect(8, 28, 24, 3));
    ((n.fillStyle = "#202e32"),
      n.fillRect(14, 17, 12, 8),
      (n.fillStyle = "#aff1ca"),
      n.fillRect(16, 19, 6, 2),
      (n.fillStyle = "#f07850"),
      n.fillRect(24, 19, 2, 2),
      (n.strokeStyle = "#d4bd7b"),
      n.beginPath(),
      n.moveTo(20, 8),
      n.lineTo(23, 3),
      n.stroke(),
      i.shape === "nuclear" &&
        ((n.fillStyle = "#ffe381"),
        (n.font = "16px sans-serif"),
        n.fillText("☢", 12, 30)),
      n.restore());
    return;
  }
  if (e === E.ROCKET_GUIDED) {
    (Lo(n, E.ROCKET, t),
      (n.strokeStyle = "#7eeaca"),
      (n.lineWidth = 2),
      n.strokeRect(24, 3, 12, 12),
      (n.fillStyle = "#7eeaca"),
      n.fillRect(29, 7, 3, 3));
    return;
  }
  if ((n.clearRect(0, 0, 40, 40), e === E.COMPUTER)) {
    const d = (u, f, p, m, y) => {
      ((n.fillStyle = y), n.fillRect(u, f, p, m));
    };
    (d(6, 4, 28, 21, "#2b323d"),
      d(7, 5, 26, 19, "#0f1318"),
      d(8, 6, 24, 17, "#133150"),
      d(8, 6, 24, 2, "#1b4166"),
      d(18, 9, 4, 2, "#ffc35a"),
      d(16, 11, 4, 2, "#ffb547"),
      d(20, 11, 4, 2, "#d4801c"),
      d(16, 13, 4, 3, "#d4801c"),
      d(20, 13, 4, 3, "#9c5a10"),
      d(12, 18, 16, 2, "#ffb547"),
      d(12, 18, 9, 2, "#ffd9a0"),
      d(3, 25, 34, 3, "#3a4352"),
      d(2, 28, 36, 4, "#2a313c"),
      d(2, 31, 36, 1, "#ffb547"));
    for (let u = 0; u < 8; u++)
      d(5 + u * 4, 26, 3, 1, u === 1 || u === 2 ? "#ffc35a" : "#11151b");
    d(15, 29, 10, 1, "#4a5464");
    return;
  }
  if (e === v.OWNERSHIP_TOTEM) {
    jj(n);
    return;
  }
  if (SX(n, e) || Kj(n, e)) return;
  const s = Tl(e);
  if (s) {
    n.save();
    const d = "#" + s.color.toString(16).padStart(6, "0");
    ((n.fillStyle = "#171421"),
      n.fillRect(8, 3, 24, 32),
      (n.strokeStyle = "#e9c36b"),
      (n.lineWidth = 2),
      n.strokeRect(8, 3, 24, 32),
      (n.fillStyle = d),
      n.fillRect(11, 6, 18, 4),
      (n.fillStyle = "#30223e"),
      n.fillRect(11, 13, 18, 14),
      (n.fillStyle = d),
      (n.font = "bold 13px serif"),
      (n.textAlign = "center"),
      n.fillText(s.motif, 20, 25),
      (n.fillStyle = "#e9c36b"),
      n.fillRect(11, 29, 5, 2),
      n.fillRect(19, 29, 5, 2),
      (n.fillStyle = d),
      n.fillRect(26, 29, 3, 2),
      n.restore());
    return;
  }
  const o = Zc(e);
  if (o) {
    Sk(n, o);
    return;
  }
  const a = (d, u, f, p, m, y) => {
    ((n.strokeStyle = y),
      (n.lineWidth = m),
      (n.lineCap = "round"),
      n.beginPath(),
      n.moveTo(d, u),
      n.lineTo(f, p),
      n.stroke());
  };
  if (e === v.AVIATION_LIGHT) {
    n.save();
    const d = n.createRadialGradient(20, 13, 1, 20, 13, 17);
    (d.addColorStop(0, "#ff6a4ccc"),
      d.addColorStop(1, "#ff1a0000"),
      (n.fillStyle = d),
      n.fillRect(1, 0, 38, 30),
      (n.fillStyle = "#22252b"),
      n.fillRect(10, 33, 20, 4),
      n.fillRect(13, 19, 14, 3));
    for (let u = 22; u < 33; u += 4)
      ((n.fillStyle = (u / 4) % 2 < 1 ? "#f2c12e" : "#1e2025"),
        n.fillRect(17, u, 6, 4));
    ((n.fillStyle = "#d8261c"),
      n.beginPath(),
      n.moveTo(13, 19),
      n.lineTo(13, 12),
      n.arc(20, 12, 7, Math.PI, 0),
      n.lineTo(27, 19),
      n.closePath(),
      n.fill(),
      (n.strokeStyle = "#ff8d74"),
      (n.lineWidth = 1));
    for (const u of [13, 16])
      (n.beginPath(), n.moveTo(14, u), n.lineTo(26, u), n.stroke());
    ((n.fillStyle = "#ffd9cf"),
      n.beginPath(),
      n.ellipse(17, 9, 2, 3, -0.4, 0, 7),
      n.fill(),
      n.restore());
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
    if ((n.save(), e === v.POTTED_PLANT)) {
      ((n.fillStyle = "#9d573d"),
        n.beginPath(),
        n.moveTo(12, 24),
        n.lineTo(28, 24),
        n.lineTo(25, 36),
        n.lineTo(15, 36),
        n.closePath(),
        n.fill(),
        a(20, 27, 20, 6, 2, "#68814a"));
      for (const [d, u, f] of [
        [14, 12, -0.6],
        [26, 9, 0.6],
        [14, 21, -0.5],
        [26, 18, 0.5],
      ])
        ((n.fillStyle = u < 15 ? "#8caa5e" : "#4e7749"),
          n.beginPath(),
          n.ellipse(d, u, 7, 3, f, 0, 7),
          n.fill());
      a(12, 25, 28, 25, 2, "#d39466");
    } else if (e === v.WALL_LIGHT) {
      const d = n.createRadialGradient(20, 20, 2, 20, 20, 18);
      (d.addColorStop(0, "#fff4bb"),
        d.addColorStop(1, "#ffd67700"),
        (n.fillStyle = d),
        n.fillRect(1, 1, 38, 38),
        (n.fillStyle = "#405059"),
        n.fillRect(11, 7, 18, 28),
        (n.fillStyle = "#ffe6a4"),
        n.fillRect(14, 10, 12, 21),
        a(12, 8, 28, 8, 2, "#a1b0ae"));
    } else if (e === v.SOFA)
      ((n.fillStyle = "#293f43"),
        n.beginPath(),
        n.roundRect(5, 10, 30, 22, 4),
        n.fill(),
        (n.fillStyle = "#648a85"),
        n.beginPath(),
        n.roundRect(8, 12, 24, 13, 3),
        n.fill(),
        (n.fillStyle = "#87aaa0"),
        n.fillRect(9, 24, 22, 5),
        a(20, 13, 20, 28, 1, "#3e6263"),
        (n.fillStyle = "#476a68"),
        n.fillRect(4, 21, 5, 12),
        n.fillRect(31, 21, 5, 12),
        (n.fillStyle = "#b0a080"),
        n.fillRect(7, 33, 3, 3),
        n.fillRect(30, 33, 3, 3));
    else if (e === v.STORAGE_SHELF) {
      ((n.fillStyle = "#45565b"),
        n.fillRect(5, 5, 3, 32),
        n.fillRect(32, 5, 3, 32));
      for (const d of [13, 24, 34])
        ((n.fillStyle = "#87999a"), n.fillRect(5, d, 30, 3));
      for (const [d, u, f] of [
        [10, 6, "#a98952"],
        [22, 6, "#657f52"],
        [10, 17, "#668b92"],
        [24, 17, "#b19966"],
        [14, 28, "#74805e"],
      ])
        ((n.fillStyle = f),
          n.fillRect(d, u, 8, 6),
          (n.fillStyle = "#d7c49a"),
          n.fillRect(d + 3, u + 1, 2, 3));
    } else
      ((n.fillStyle = "#6a4e37"),
        n.fillRect(5, 13, 30, 22),
        (n.fillStyle = "#b69b76"),
        n.fillRect(7, 16, 26, 17),
        a(20, 17, 20, 32, 1, "#755b42"),
        a(15, 23, 17, 23, 2, "#d0d8cb"),
        a(23, 23, 25, 23, 2, "#d0d8cb"),
        (n.fillStyle = "#d0d4c5"),
        n.fillRect(3, 10, 34, 6),
        e === v.SINK &&
          ((n.fillStyle = "#5c777f"),
          n.beginPath(),
          n.ellipse(20, 13, 9, 3, 0, 0, 7),
          n.fill(),
          (n.strokeStyle = "#c8dbe0"),
          (n.lineWidth = 2),
          n.beginPath(),
          n.moveTo(26, 13),
          n.lineTo(26, 5),
          n.quadraticCurveTo(21, 2, 20, 7),
          n.stroke()));
    n.restore();
    return;
  }
  if (e === v.BOOKSHELF) {
    ((n.fillStyle = "#80552f"),
      n.fillRect(5, 5, 30, 30),
      (n.fillStyle = "#4f321d"),
      n.fillRect(7, 18, 26, 3));
    const d = ["#b64036", "#3e6eaa", "#d1a63b", "#4e8547", "#8d4b9b"];
    for (let u = 0; u < 2; u++)
      for (let f = 0; f < 6; f++)
        ((n.fillStyle = d[(f + u * 2) % d.length]),
          n.fillRect(8 + f * 4, 7 + u * 15, 3, 10 + ((f + u) & 1)));
    return;
  }
  if (e === v.LANTERN) {
    ((n.fillStyle = "#343b3e"),
      n.fillRect(12, 8, 16, 3),
      n.fillRect(10, 31, 20, 3),
      (n.strokeStyle = "#586267"),
      (n.lineWidth = 3),
      n.beginPath(),
      n.arc(20, 10, 7, Math.PI, 0),
      n.stroke());
    const d = n.createRadialGradient(20, 22, 2, 20, 22, 13);
    (d.addColorStop(0, "#fff4a6"),
      d.addColorStop(0.45, "#ffb52e"),
      d.addColorStop(1, "rgba(255,120,20,0)"),
      (n.fillStyle = d),
      n.fillRect(7, 9, 26, 24),
      (n.strokeStyle = "#465055"),
      (n.lineWidth = 3),
      n.strokeRect(12, 11, 16, 20),
      a(16, 12, 16, 30, 2, "#394145"),
      a(24, 12, 24, 30, 2, "#394145"));
    return;
  }
  if (e === v.CHAIN) {
    ((n.strokeStyle = "#929ca3"), (n.lineWidth = 3));
    for (let d = 0; d < 3; d++)
      (n.beginPath(),
        (d & 1) === 0
          ? n.ellipse(20, 9 + d * 11, 6, 8, 0, 0, Math.PI * 2)
          : n.ellipse(20, 9 + d * 11, 3, 8, 0, 0, Math.PI * 2),
        n.stroke());
    return;
  }
  if (e === v.MILITARY_CHEST) {
    ((n.fillStyle = "#526b38"),
      n.fillRect(5, 12, 30, 23),
      (n.fillStyle = "#344528"),
      n.fillRect(5, 18, 30, 4),
      n.fillRect(8, 8, 24, 5),
      (n.fillStyle = "#9aa46d"),
      n.fillRect(17, 18, 6, 9),
      (n.strokeStyle = "#27321f"),
      (n.lineWidth = 2),
      n.strokeRect(5, 12, 30, 23));
    return;
  }
  if (e === v.HAY_BALE) {
    ((n.fillStyle = "#d2a72a"),
      n.fillRect(6, 7, 28, 28),
      (n.strokeStyle = "#f0cf4a"),
      (n.lineWidth = 1));
    for (let d = 10; d < 35; d += 4) a(7, d, 33, d - 2, 1, "#efd04f");
    (a(12, 7, 12, 35, 3, "#966b1d"), a(28, 7, 28, 35, 3, "#966b1d"));
    return;
  }
  if (e === v.BARREL) {
    ((n.fillStyle = "#855b32"),
      n.beginPath(),
      n.roundRect(8, 5, 24, 31, 7),
      n.fill());
    for (const d of [9, 19, 31]) a(8, d, 32, d, 3, "#485056");
    (a(15, 6, 15, 35, 1, "#b78349"), a(25, 6, 25, 35, 1, "#b78349"));
    return;
  }
  if (e === v.SIGN) {
    ((n.fillStyle = "#735135"),
      n.fillRect(18, 25, 4, 13),
      (n.fillStyle = "#bc925d"),
      n.fillRect(3, 5, 34, 23),
      (n.fillStyle = "#463020"));
    for (const d of [11, 16, 21]) n.fillRect(8, d, 24, 2);
    return;
  }
  const r = Mg(e, e === v.PISTON || e === v.SPISTON ? 1 : 0);
  if (r) {
    const d = {
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
      u = (p, m, y) => [20 + (p - y) * 16, 27 + (p + y - 1) * 7 - m * 23],
      f = (p, m) => {
        ((n.fillStyle = m),
          n.beginPath(),
          p.forEach((y, g) => {
            const [b, S] = u(y[0], y[1], y[2]);
            g ? n.lineTo(b, S) : n.moveTo(b, S);
          }),
          n.closePath(),
          n.fill(),
          (n.strokeStyle = "#17222b66"),
          (n.lineWidth = 0.5),
          n.stroke());
      };
    for (const p of r) {
      const [m, y, g, b, S, M] = p.box,
        x = d[p.tile] ?? "#aaa";
      (f(
        [
          [m, y, M],
          [b, y, M],
          [b, S, M],
          [m, S, M],
        ],
        x,
      ),
        f(
          [
            [b, y, g],
            [b, y, M],
            [b, S, M],
            [b, S, g],
          ],
          x,
        ),
        f(
          [
            [m, S, g],
            [b, S, g],
            [b, S, M],
            [m, S, M],
          ],
          x,
        ));
    }
    return;
  }
  if (e === v.BED) {
    (n.save(),
      (n.lineJoin = "round"),
      (n.fillStyle = "#4b2f1d"),
      n.beginPath(),
      n.moveTo(5, 24),
      n.lineTo(25, 13),
      n.lineTo(36, 19),
      n.lineTo(16, 32),
      n.closePath(),
      n.fill(),
      n.fillRect(7, 27, 3, 8),
      n.fillRect(14, 31, 3, 6),
      n.fillRect(32, 20, 3, 7),
      (n.fillStyle = "#9e2f35"),
      n.beginPath(),
      n.moveTo(6, 21),
      n.lineTo(25, 10),
      n.lineTo(36, 16),
      n.lineTo(16, 28),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "#c94748"),
      n.beginPath(),
      n.moveTo(6, 21),
      n.lineTo(14, 16.5),
      n.lineTo(24.5, 22.5),
      n.lineTo(16, 28),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "#f2ead8"),
      n.beginPath(),
      n.moveTo(15, 16),
      n.lineTo(25, 10.5),
      n.lineTo(34.5, 16),
      n.lineTo(24.5, 22),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "#fff8e9"),
      n.beginPath(),
      n.moveTo(18, 15.5),
      n.quadraticCurveTo(25, 11.7, 31.5, 15.8),
      n.lineTo(25, 19.7),
      n.quadraticCurveTo(21, 18, 18, 15.5),
      n.fill(),
      a(7.5, 22, 16, 27, 1.2, "#e36a61"),
      a(16, 28.5, 36, 17, 2.2, "#704628"),
      n.restore());
    return;
  }
  if (w0(e) || Do(e)) {
    const d = de[e].color,
      u = (m) =>
        "#" +
        [16, 8, 0]
          .map((y) =>
            Math.round(Math.min(255, ((d >> y) & 255) * m))
              .toString(16)
              .padStart(2, "0"),
          )
          .join(""),
      f = u(1),
      p = u(0.72);
    if (w0(e)) {
      ((n.fillStyle = f),
        n.fillRect(3, 12, 34, 5),
        n.fillRect(3, 25, 34, 5),
        (n.fillStyle = p),
        n.fillRect(15, 4, 10, 33));
      return;
    }
    ((n.fillStyle = f),
      n.fillRect(6, 13, 28, 5),
      n.fillRect(6, 26, 28, 5),
      (n.fillStyle = p),
      n.fillRect(4, 9, 6, 28),
      n.fillRect(30, 9, 6, 28),
      n.fillRect(17, 17, 6, 10));
    return;
  }
  if (e === v.BARBED_WIRE) {
    ((n.strokeStyle = "#92999d"), (n.lineWidth = 2));
    for (let d = 0; d < 3; d++)
      (n.beginPath(),
        n.ellipse(11 + d * 9, 21, 8, 12, 0.15, 0, Math.PI * 2),
        n.stroke());
    for (const d of [7, 16, 25, 34])
      (a(d, 8, d + 3, 3, 1.5, "#c2c7c9"), a(d, 34, d - 3, 38, 1.5, "#c2c7c9"));
    return;
  }
  if (e === v.TORCH || e === v.RTORCH) {
    ((n.fillStyle = "#8a5a2b"),
      n.fillRect(17, 18, 6, 18),
      (n.fillStyle = e === v.RTORCH ? "#d0432a" : "#ffcc55"),
      n.beginPath(),
      n.moveTo(20, 6),
      n.quadraticCurveTo(27, 14, 20, 20),
      n.quadraticCurveTo(13, 14, 20, 6),
      n.fill(),
      (n.fillStyle = e === v.RTORCH ? "#ff8a6a" : "#fff2b0"),
      n.beginPath(),
      n.ellipse(20, 14, 2.4, 4, 0, 0, 7),
      n.fill());
    return;
  }
  if (
    e === v.WOOD_TABLE ||
    e === v.WOOD_CHAIR ||
    e === v.WOOD_BENCH ||
    e === v.MAP_TABLE
  ) {
    const d = e === v.WOOD_TABLE || e === v.MAP_TABLE;
    n.fillStyle = "#694529";
    for (const u of [9, 27]) n.fillRect(u, d ? 18 : 23, 4, d ? 16 : 11);
    (d ||
      (n.fillRect(8, 6, 4, 19),
      n.fillRect(28, 6, 4, 19),
      (n.fillStyle = "#b58450"),
      n.fillRect(8, 7, 24, 5),
      n.fillRect(8, 15, 24, 4)),
      (n.fillStyle = e === v.WOOD_CHAIR ? "#b7433c" : "#bd905e"),
      n.fillRect(6, d ? 14 : 22, 28, 6),
      (n.fillStyle = "#e2ba7c"),
      n.fillRect(6, d ? 14 : 22, 28, 2),
      e === v.MAP_TABLE &&
        ((n.fillStyle = "#658450"),
        n.fillRect(8, 14, 24, 4),
        (n.fillStyle = "#558ca8"),
        n.fillRect(16, 14, 4, 4)));
    return;
  }
  if (e === v.REMOTE_STATION) {
    ((n.fillStyle = "#3e554a"),
      n.fillRect(4, 9, 31, 21),
      n.fillRect(2, 30, 35, 6),
      (n.fillStyle = "#102c29"),
      n.fillRect(7, 12, 15, 14),
      n.fillRect(24, 12, 8, 14),
      (n.fillStyle = "#a9e3ba"));
    for (let d = 0; d < 4; d++) n.fillRect(9, 15 + d * 3, 9 - (d % 2) * 3, 1);
    ((n.fillStyle = "#acb5a2"),
      n.fillRect(34, 2, 2, 17),
      (n.fillStyle = "#9baf98"));
    for (let d = 0; d < 8; d++) n.fillRect(6 + d * 3, 32, 2, 1);
    return;
  }
  if (e === v.CAMPFIRE) {
    const d = n.createRadialGradient(20, 24, 1, 20, 24, 15);
    (d.addColorStop(0, "rgba(255,214,120,0.95)"),
      d.addColorStop(0.5, "rgba(255,140,36,0.45)"),
      d.addColorStop(1, "rgba(255,110,20,0)"),
      (n.fillStyle = d),
      n.fillRect(4, 10, 32, 28),
      a(6, 33, 34, 27, 6, "#6d4a2b"),
      a(6, 27, 34, 33, 6, "#8b6039"),
      (n.fillStyle = "#3a2c25"),
      n.fillRect(14, 27, 12, 4),
      (n.fillStyle = "#e0641f"),
      n.fillRect(15, 28, 10, 2),
      (n.fillStyle = "#ff9f2e"),
      n.beginPath(),
      n.moveTo(20, 5),
      n.quadraticCurveTo(29, 16, 20, 27),
      n.quadraticCurveTo(11, 16, 20, 5),
      n.fill(),
      (n.fillStyle = "#ffe9a3"),
      n.beginPath(),
      n.moveTo(20, 12),
      n.quadraticCurveTo(24.5, 18, 20, 25),
      n.quadraticCurveTo(15.5, 18, 20, 12),
      n.fill());
    return;
  }
  if (e === v.COMPOSTER) {
    ((n.fillStyle = "#9b6639"),
      n.fillRect(6, 7, 28, 28),
      (n.fillStyle = "#684323"),
      n.fillRect(11, 12, 18, 18),
      (n.fillStyle = "#38251b"),
      n.fillRect(13, 14, 14, 14),
      (n.fillStyle = "#b47a43"),
      n.fillRect(6, 7, 28, 4),
      n.fillRect(6, 31, 28, 4),
      (n.fillStyle = "#5b3c25"));
    for (const d of [8, 15, 22, 29]) n.fillRect(d, 10, 4, 23);
    ((n.strokeStyle = "#d39a54"),
      (n.lineWidth = 1),
      n.strokeRect(6.5, 7.5, 27, 27),
      (n.fillStyle = "#6d9b45"),
      n.fillRect(15, 20, 10, 5));
    return;
  }
  if (OS(e) && t) {
    const d = de[e].tex[1];
    (n.save(),
      n.beginPath(),
      n.rect(6, 22, 30, 14),
      n.rect(21, 8, 15, 14),
      n.clip(),
      t.drawTile(d, n, 4, 4, 34),
      n.restore());
    return;
  }
  if (e === v.MINE_AP || e === v.MINE_AT) {
    const d = e === v.MINE_AT,
      u = d ? 17 : 13;
    ((n.fillStyle = "#252b25"),
      n.beginPath(),
      n.ellipse(20, 26, u, 8, 0, 0, Math.PI * 2),
      n.fill(),
      (n.fillStyle = d ? "#93855a" : "#617b48"),
      n.beginPath(),
      n.ellipse(20, 22, u, 8, 0, 0, Math.PI * 2),
      n.fill(),
      (n.strokeStyle = "#dec476"),
      (n.lineWidth = 1.5),
      n.beginPath(),
      n.ellipse(20, 20, u * 0.65, 5, 0, 0, Math.PI * 2),
      n.stroke(),
      (n.fillStyle = d ? "#b2a272" : "#86a362"),
      n.beginPath(),
      n.ellipse(20, 19, u * 0.5, 4, 0, 0, Math.PI * 2),
      n.fill(),
      (n.fillStyle = "#c8d0bd"));
    for (const f of [9, 29]) n.fillRect(f, 22, 2, 2);
    ((n.fillStyle = "#252b25"), n.fillRect(18, 17, 4, 3));
    return;
  }
  if (e > 0 && e < 256) {
    if (MX(n, e)) return;
    t &&
      t.drawTile(
        e === v.FURNACE
          ? uy
          : e === v.JACK_O_LANTERN
            ? LS
            : e === v.LED_SCREEN
              ? gC
              : (((h = de[e]) == null ? void 0 : h.tex[1]) ?? 0),
        n,
        4,
        4,
        32,
      );
    return;
  }
  n.fillStyle = "#d5dde5";
  const l = (d, u, f, p) => n.fillRect(d, u, f, p),
    c = Ti(e);
  if (Yj(n, c || e)) {
    c && c_(n, e);
    return;
  }
  switch (c || e) {
    case E.MINIGUN:
      ((n.fillStyle = "#242d33"),
        l(9, 13, 13, 13),
        l(6, 9, 14, 3),
        l(6, 10, 3, 9),
        (n.fillStyle = "#81939e"));
      for (const d of [15, 19, 23]) l(20, d, 18, 2);
      ((n.fillStyle = "#c4cdd0"),
        l(34, 14, 3, 12),
        l(23, 14, 2, 12),
        (n.fillStyle = "#485b4e"),
        l(8, 25, 14, 10),
        (n.fillStyle = "#d4b16a"),
        l(23, 26, 3, 6));
      break;
    case E.SHOTGUN:
      ((n.fillStyle = "#815637"),
        l(2, 20, 10, 7),
        l(10, 19, 5, 5),
        l(23, 19, 8, 5),
        (n.fillStyle = "#b4c0c5"),
        l(12, 16, 26, 3),
        (n.fillStyle = "#343e44"),
        l(11, 19, 12, 4),
        l(16, 22, 4, 7),
        (n.fillStyle = "#d89a58"));
      for (const d of [24, 27, 30]) l(d, 20, 1, 3);
      l(8, 20, 2, 4);
      break;
    case E.AMMO_762_HE:
    case E.AMMO_338_HE: {
      const d = e === E.AMMO_762_HE,
        u = d ? 3 : 2,
        f = d ? 5 : 8;
      for (let p = 0; p < u; p++) {
        const m = d ? 5 + p * 10 : 8 + p * 15,
          y = d ? 12 - (p % 2) * 3 : 7 + (p % 2) * 2,
          g = n.createLinearGradient(m, 0, m + f, 0);
        (g.addColorStop(0, "#855324"),
          g.addColorStop(0.43, "#f8d18a"),
          g.addColorStop(1, "#9e632e"),
          (n.fillStyle = g),
          l(m, y + 7, f, d ? 17 : 21),
          l(m - 1, y + (d ? 23 : 27), f + 2, 3),
          (n.fillStyle = d ? "#f47929" : "#a93729"),
          l(m, y + 7, f, d ? 3 : 5),
          n.beginPath(),
          n.moveTo(m, y + 7),
          n.lineTo(m + f / 2, y),
          n.lineTo(m + f, y + 7),
          n.fill(),
          (n.fillStyle = "#23292a"),
          l(m, y + 12, f, 1),
          (n.fillStyle = "#ffe2a6"),
          l(m + 1, y + 15, 1, d ? 6 : 9));
      }
      d
        ? ((n.fillStyle = "#f29439"),
          l(5, 34, 26, 2),
          (n.fillStyle = "#334139"),
          l(31, 31, 5, 5))
        : ((n.fillStyle = "#b43e2f"), l(8, 35, 23, 2));
      break;
    }
    case E.AMMO_SHELL:
    case E.AMMO_SHELL_HE:
      for (let d = 0; d < 3; d++) {
        const u = 6 + d * 10,
          f = 12 - (d % 2) * 4,
          p = e === E.AMMO_SHELL || e === E.AMMO_SHELL_HE,
          m = n.createLinearGradient(u, 0, u + 7, 0);
        (m.addColorStop(0, "#80602d"),
          m.addColorStop(0.45, "#ffe1a0"),
          m.addColorStop(1, "#ad7b32"),
          (n.fillStyle = m),
          l(u, f + 7, 7, 17),
          l(u - 1, f + 23, 9, 3),
          (n.fillStyle = p ? "#a8342b" : "#d66039"),
          l(u, f + 2, 7, p ? 18 : 6),
          (n.fillStyle = p ? "#e38768" : "#ffc27c"),
          l(u + 1, f + 3, 2, p ? 15 : 4),
          (n.fillStyle = "#f7ce64"),
          l(u, f + (p ? 18 : 10), 7, 2),
          p ||
            (n.beginPath(),
            n.moveTo(u, f + 2),
            n.lineTo(u + 3.5, f - 3),
            n.lineTo(u + 7, f + 2),
            n.fill()),
          e === E.AMMO_SHELL_HE &&
            ((n.fillStyle = "#f08a1e"),
            l(u, f + 6, 7, 3),
            l(u, f + 13, 7, 3),
            (n.fillStyle = "#1d2226"),
            l(u, f + 2, 7, 4),
            (n.fillStyle = "#ffd77a"),
            l(u + 2.5, f + 8, 2, 4)));
      }
      break;
    case E.GLOCK:
      (l(8, 14, 22, 6), l(20, 20, 7, 12));
      break;
    case E.AK47:
      (l(2, 16, 32, 4),
        l(34, 15, 4, 6),
        (n.fillStyle = "#a97b46"),
        l(2, 15, 8, 6),
        l(14, 20, 5, 9),
        l(22, 20, 4, 6));
      break;
    case E.AWP:
      ((n.fillStyle = "#7d9b62"),
        l(2, 18, 34, 4),
        l(30, 17, 8, 5),
        (n.fillStyle = "#d5dde5"),
        l(6, 12, 3, 6),
        l(16, 13, 4, 5),
        l(18, 22, 4, 7));
      break;
    case E.GRENADE_LAUNCHER:
      ((n.fillStyle = "#687655"),
        l(3, 17, 27, 9),
        l(29, 19, 8, 7),
        (n.fillStyle = "#232d2a"),
        l(4, 16, 14, 11),
        l(22, 25, 5, 8),
        l(34, 17, 3, 11),
        (n.fillStyle = "#a9b4a0"));
      for (let d = 0; d < 5; d++) l(5 + d * 2.5, 16, 1, 11);
      (l(18, 9, 2, 8), l(24, 9, 2, 8), l(18, 9, 8, 1), l(18, 12, 8, 1));
      break;
    case E.AMMO_40MM:
      for (const d of [7, 22])
        ((n.fillStyle = "#b9944c"),
          l(d, 16, 11, 17),
          (n.fillStyle = "#d9be73"),
          l(d - 1, 30, 13, 3),
          (n.fillStyle = "#647347"),
          l(d, 9, 11, 8),
          l(d + 2, 6, 7, 3),
          (n.fillStyle = "#dfcc7b"),
          l(d, 17, 11, 2));
      break;
    case E.RPG:
      ((n.fillStyle = "#9aa07c"),
        l(6, 16, 26, 6),
        (n.fillStyle = "#6b7355"),
        n.beginPath(),
        n.moveTo(6, 19),
        n.lineTo(0, 13),
        n.lineTo(0, 25),
        n.closePath(),
        n.fill(),
        l(32, 14, 6, 10));
      break;
    case E.C4:
      ((n.fillStyle = "#aa9b6d"),
        l(5, 10, 30, 24),
        (n.fillStyle = "#3d4638"),
        l(9, 9, 4, 26),
        l(27, 9, 4, 26),
        (n.fillStyle = "#283d36"),
        l(14, 14, 12, 15),
        (n.fillStyle = "#bce4a3"),
        l(16, 17, 8, 3),
        (n.fillStyle = "#e56443"),
        l(21, 25, 3, 2),
        l(25, 6, 2, 10),
        l(20, 6, 7, 2));
      break;
    case E.GRENADE:
      ((n.fillStyle = "#5b7a4e"),
        n.beginPath(),
        n.arc(20, 22, 9, 0, 7),
        n.fill(),
        (n.fillStyle = "#aab"),
        l(17, 8, 6, 6),
        l(24, 9, 6, 3));
      break;
    case E.AXE: {
      (n.save(),
        n.translate(20, 21),
        n.rotate(0.55),
        (n.fillStyle = "#30261e"),
        n.beginPath(),
        n.roundRect(-3, -12, 6, 31, 2),
        n.fill());
      const d = n.createLinearGradient(-2, 0, 3, 0);
      (d.addColorStop(0, "#d3a66c"),
        d.addColorStop(1, "#805333"),
        (n.fillStyle = d),
        n.fillRect(-2, -11, 4, 29),
        (n.fillStyle = "#493b2c"),
        n.fillRect(-2, 12, 4, 2),
        n.fillRect(-2, 16, 4, 1));
      const u = n.createLinearGradient(-5, -15, 15, -3);
      (u.addColorStop(0, "#f1f4f4"),
        u.addColorStop(0.4, "#899aa6"),
        u.addColorStop(1, "#465862"),
        (n.fillStyle = u),
        (n.strokeStyle = "#28363e"),
        (n.lineWidth = 1),
        n.beginPath(),
        n.moveTo(-6, -14),
        n.lineTo(3, -14),
        n.quadraticCurveTo(8, -12, 13, -16),
        n.quadraticCurveTo(17, -9, 13, -2),
        n.quadraticCurveTo(7, -7, 2, -6),
        n.lineTo(-6, -7),
        n.closePath(),
        n.fill(),
        n.stroke(),
        (n.strokeStyle = "#ecf4f6"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.moveTo(13, -14),
        n.quadraticCurveTo(15, -9, 13, -4),
        n.stroke(),
        (n.fillStyle = "#3d4a50"),
        n.fillRect(-3, -12, 3, 4),
        n.restore());
      break;
    }
    case E.MOBILE_REMOTE: {
      const d = n.createLinearGradient(4, 8, 36, 35);
      (d.addColorStop(0, "#748879"),
        d.addColorStop(0.5, "#344b47"),
        d.addColorStop(1, "#1a292b"),
        (n.fillStyle = d),
        n.beginPath(),
        n.roundRect(3, 8, 34, 28, 4),
        n.fill(),
        (n.strokeStyle = "#9fac99"),
        (n.lineWidth = 1),
        n.stroke(),
        (n.fillStyle = "#081e25"),
        l(7, 12, 26, 18),
        (n.strokeStyle = "#305956"),
        (n.lineWidth = 0.6));
      for (let u = 0; u < 4; u++)
        (n.beginPath(),
          n.moveTo(8 + u * 6, 13),
          n.lineTo(8 + u * 6, 29),
          n.stroke(),
          n.beginPath(),
          n.moveTo(8, 14 + u * 4),
          n.lineTo(32, 14 + u * 4),
          n.stroke());
      ((n.strokeStyle = "#8aefd1"),
        n.beginPath(),
        n.arc(20, 21, 6, 0, Math.PI * 2),
        n.moveTo(20, 21),
        n.lineTo(25, 16),
        n.stroke(),
        (n.fillStyle = "#b2ffdc"),
        l(15, 18, 2, 2),
        l(24, 23, 2, 2),
        (n.fillStyle = "#c0cabc"),
        l(29, 2, 2, 8),
        l(8, 32, 2, 2),
        l(30, 32, 2, 2),
        (n.fillStyle = "#e3b55b"),
        l(16, 32, 8, 1));
      break;
    }
    case E.RADIO_MODULE:
      ((n.fillStyle = "#4c6152"),
        l(9, 15, 23, 19),
        (n.fillStyle = "#192c29"),
        l(12, 18, 17, 9),
        (n.fillStyle = "#a9ebbd"),
        l(14, 21, 9, 2),
        l(14, 29, 3, 2),
        (n.fillStyle = "#aaa98d"),
        l(27, 3, 2, 13),
        l(8, 29, 2, 5));
      break;
    case E.WELDER: {
      const d = n.createLinearGradient(8, 12, 28, 30);
      (d.addColorStop(0, "#ffa04a"),
        d.addColorStop(0.55, "#e0701c"),
        d.addColorStop(1, "#9c4812"),
        (n.fillStyle = "#1c1e21"),
        n.beginPath(),
        n.roundRect(15, 24, 7, 12, 2),
        n.fill(),
        (n.fillStyle = d),
        (n.strokeStyle = "#4a2208"),
        (n.lineWidth = 1),
        n.beginPath(),
        n.roundRect(8, 11, 22, 15, 3),
        n.fill(),
        n.stroke(),
        (n.fillStyle = "#1c1e21"),
        l(10, 8, 16, 3),
        (n.fillStyle = "#30353b"),
        n.beginPath(),
        n.arc(14, 18.5, 4.5, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#b87333"),
        n.beginPath(),
        n.arc(14, 18.5, 3, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#57ffa0"),
        l(21, 14, 7, 3),
        (n.fillStyle = "#f2c230"),
        l(20, 21, 2, 3),
        (n.fillStyle = "#1c1c1c"),
        l(22, 21, 2, 3),
        (n.fillStyle = "#f2c230"),
        l(24, 21, 2, 3),
        (n.strokeStyle = "#2a2d31"),
        (n.lineWidth = 3),
        (n.lineCap = "round"),
        n.beginPath(),
        n.moveTo(8, 16),
        n.quadraticCurveTo(2, 16, 3, 25),
        n.stroke(),
        (n.strokeStyle = "#c27a45"),
        (n.lineWidth = 3.4),
        n.beginPath(),
        n.moveTo(3, 25),
        n.lineTo(3.5, 29),
        n.stroke(),
        (n.lineCap = "butt"),
        (n.fillStyle = "#dfeaff"),
        n.beginPath(),
        n.arc(4, 31.5, 2.2, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = "#ffd36b"),
        (n.lineWidth = 1));
      for (const [u, f] of [
        [-3, 3],
        [2, 4],
        [4, 1],
        [-2, 5],
      ])
        (n.beginPath(),
          n.moveTo(4, 31.5),
          n.lineTo(4 + u, 31.5 + f),
          n.stroke());
      break;
    }
    case E.FIGHTER_JET: {
      (n.save(),
        n.translate(20, 20),
        n.rotate(-0.42),
        (n.fillStyle = "#344452"),
        (n.strokeStyle = "#182731"),
        (n.lineWidth = 1.2),
        n.beginPath(),
        n.moveTo(0, -19),
        n.lineTo(3, -7),
        n.lineTo(17, 8),
        n.lineTo(17, 12),
        n.lineTo(5, 8),
        n.lineTo(6, 14),
        n.lineTo(10, 17),
        n.lineTo(3, 16),
        n.lineTo(2, 18),
        n.lineTo(-2, 18),
        n.lineTo(-3, 16),
        n.lineTo(-10, 17),
        n.lineTo(-6, 14),
        n.lineTo(-5, 8),
        n.lineTo(-17, 12),
        n.lineTo(-17, 8),
        n.lineTo(-3, -7),
        n.closePath(),
        n.fill(),
        n.stroke(),
        (n.fillStyle = "#a9bfcc"),
        n.beginPath(),
        n.moveTo(0, -19),
        n.lineTo(2, 2),
        n.lineTo(13, 9),
        n.lineTo(3, 6),
        n.lineTo(2, 15),
        n.lineTo(-2, 15),
        n.lineTo(-3, 6),
        n.lineTo(-13, 9),
        n.lineTo(-2, 2),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#56cbea"),
        n.beginPath(),
        n.ellipse(0, -6, 1.8, 4.5, 0, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#ffad59"),
        l(-2, 16, 4, 3),
        n.restore());
      break;
    }
    case E.PLANE: {
      (n.save(),
        n.translate(20, 20),
        n.rotate(-0.42),
        (n.strokeStyle = "#243327"),
        (n.lineWidth = 1.2),
        (n.fillStyle = "#829d65"),
        n.beginPath(),
        n.roundRect(-17, -4, 34, 7, 2),
        n.fill(),
        n.stroke(),
        (n.fillStyle = "#b7c78d"),
        n.beginPath(),
        n.moveTo(-3, -13),
        n.quadraticCurveTo(0, -18, 3, -13),
        n.lineTo(2, 11),
        n.lineTo(9, 14),
        n.lineTo(9, 17),
        n.lineTo(-9, 17),
        n.lineTo(-9, 14),
        n.lineTo(-2, 11),
        n.closePath(),
        n.fill(),
        n.stroke(),
        (n.fillStyle = "#345c69"),
        l(-2, -9, 4, 6),
        (n.fillStyle = "#edf0d2"),
        l(-14, -3, 3, 5),
        l(11, -3, 3, 5),
        (n.fillStyle = "#3a4146"),
        l(-11, -15, 22, 2),
        (n.fillStyle = "#d7af66"),
        l(-2, -16, 4, 4),
        n.restore());
      break;
    }
    case E.SPACE_HELMET:
      ((n.fillStyle = "#aeb9c0"),
        n.beginPath(),
        n.roundRect(6, 8, 27, 25, 10),
        n.fill(),
        (n.fillStyle = "#eef2f3"),
        n.beginPath(),
        n.moveTo(9, 14),
        n.quadraticCurveTo(10, 7, 19, 6),
        n.quadraticCurveTo(29, 6, 32, 14),
        n.lineTo(30, 25),
        n.lineTo(9, 25),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#1b2b3a"),
        n.beginPath(),
        n.moveTo(10, 14),
        n.quadraticCurveTo(12, 10, 19, 10),
        n.quadraticCurveTo(27, 10, 30, 14),
        n.lineTo(28, 23),
        n.lineTo(12, 23),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#536e7c"),
        n.beginPath(),
        n.moveTo(12, 14),
        n.quadraticCurveTo(16, 11, 23, 12),
        n.lineTo(28, 15),
        n.lineTo(27, 19),
        n.lineTo(13, 19),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "rgba(196,230,238,0.7)"),
        l(14, 12, 8, 2),
        (n.strokeStyle = "#d5a84b"),
        (n.lineWidth = 1.4),
        n.beginPath(),
        n.moveTo(10, 24),
        n.lineTo(29, 24),
        n.stroke(),
        (n.fillStyle = "#5c6870"),
        l(8, 28, 24, 5),
        l(11, 33, 18, 3),
        (n.fillStyle = "#28343c"),
        l(29, 17, 5, 11),
        l(32, 19, 3, 7),
        (n.fillStyle = "#d8e0e2"),
        l(30, 19, 2, 3),
        l(30, 24, 2, 2),
        (n.fillStyle = "#39464d"));
      for (const [d, u] of [
        [11, 27],
        [28, 27],
        [15, 31],
        [24, 31],
      ])
        (n.beginPath(), n.arc(d, u, 0.9, 0, Math.PI * 2), n.fill());
      break;
    case E.MILITARY_MEDKIT: {
      ((n.fillStyle = "#192a24"),
        n.beginPath(),
        n.roundRect(5, 10, 31, 25, 4),
        n.fill());
      const d = n.createLinearGradient(7, 10, 32, 34);
      (d.addColorStop(0, "#87996a"),
        d.addColorStop(1, "#344735"),
        (n.fillStyle = d),
        n.beginPath(),
        n.roundRect(6, 10, 27, 23, 3),
        n.fill(),
        (n.strokeStyle = "#c6caa0"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.roundRect(15, 5, 12, 7, 2),
        n.stroke(),
        (n.fillStyle = "#283b2d"),
        l(9, 10, 3, 23),
        l(27, 10, 3, 23),
        l(6, 15, 27, 2),
        (n.fillStyle = "#c9bc88"),
        l(9, 15, 3, 5),
        l(27, 15, 3, 5),
        (n.fillStyle = "#e1e5cb"),
        n.beginPath(),
        n.roundRect(14, 18, 11, 11, 2),
        n.fill(),
        (n.fillStyle = "#b94038"),
        l(18, 19, 3, 9),
        l(15, 22, 9, 3),
        (n.fillStyle = "#b6c493"),
        l(7, 11, 25, 1),
        l(14, 31, 10, 1));
      break;
    }
    case E.MEDKIT:
      ((n.fillStyle = "#e8ecef"),
        l(6, 12, 28, 18),
        (n.fillStyle = "#d43a2a"),
        l(17, 15, 6, 12),
        l(14, 18, 12, 6));
      break;
    case E.BANDAGE:
      ((n.fillStyle = "#f2ede0"),
        n.beginPath(),
        n.ellipse(12, 20, 8, 8, 0, 0, 7),
        n.fill(),
        (n.fillStyle = "#e8ecef"),
        l(12, 15, 22, 10),
        (n.fillStyle = "#c9c2ae"),
        n.beginPath(),
        n.ellipse(12, 20, 3.5, 3.5, 0, 0, 7),
        n.fill(),
        (n.fillStyle = "#d43a2a"),
        l(24, 15, 4, 10),
        l(20, 18, 12, 4));
      break;
    case E.DETONATOR: {
      ((n.fillStyle = "#1b2023"),
        n.beginPath(),
        n.roundRect(10, 12, 20, 25, 3),
        n.fill(),
        (n.fillStyle = "#6f7d5c"),
        n.beginPath(),
        n.roundRect(11, 13, 18, 23, 2.5),
        n.fill(),
        (n.fillStyle = "#87956f"),
        l(12, 14, 16, 2),
        (n.fillStyle = "#2a3133"),
        l(14, 18, 12, 9),
        (n.fillStyle = "#d23a2c"),
        n.beginPath(),
        n.arc(20, 22.5, 3.6, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#ff7a66"),
        n.beginPath(),
        n.arc(19, 21.5, 1.3, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = "#e8c23a"),
        (n.lineWidth = 1.4),
        n.strokeRect(14.5, 18.5, 11, 8),
        (n.fillStyle = "#9fe36a"),
        l(14, 30, 3, 2),
        (n.fillStyle = "#3d4640"),
        l(19, 30, 7, 2),
        (n.fillStyle = "#8c969a"),
        l(25, 3, 2, 10),
        (n.fillStyle = "#c7cfd2"),
        l(24.5, 2, 3, 2));
      break;
    }
    case E.PUMPKIN_SEEDS:
    case E.ROASTED_PUMPKIN_SEEDS: {
      const d = e === E.ROASTED_PUMPKIN_SEEDS;
      for (const [u, f, p] of [
        [12, 15, -0.5],
        [22, 11, 0.2],
        [29, 19, -0.3],
        [15, 26, 0.5],
        [25, 28, -0.6],
        [19, 20, 0.1],
      ])
        (n.save(),
          n.translate(u, f),
          n.rotate(p),
          (n.fillStyle = d ? "#b98a4a" : "#efe3bf"),
          n.beginPath(),
          n.ellipse(0, 0, 3.4, 5, 0, 0, 7),
          n.fill(),
          (n.strokeStyle = d ? "#7e5626" : "#c9b683"),
          (n.lineWidth = 1),
          n.stroke(),
          n.restore());
      break;
    }
    case E.PUMPKIN_PIE: {
      ((n.fillStyle = "#b8793a"),
        n.beginPath(),
        n.ellipse(20, 24, 16, 9, 0, 0, 7),
        n.fill(),
        (n.fillStyle = "#e0892c"),
        n.beginPath(),
        n.ellipse(20, 22, 13, 7, 0, 0, 7),
        n.fill(),
        (n.fillStyle = "#f3a24a"),
        n.beginPath(),
        n.ellipse(18, 20.5, 7, 3, 0, 0, 7),
        n.fill(),
        (n.strokeStyle = "#d5a060"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.ellipse(20, 22, 14.5, 8, 0, 0, 7),
        n.stroke(),
        (n.fillStyle = "#fff4e2"),
        n.beginPath(),
        n.arc(20, 20, 2.6, 0, 7),
        n.fill());
      break;
    }
    case E.CANDY: {
      for (const [d, u, f] of [
        [13, 16, "#e8423a"],
        [26, 20, "#8a4ad8"],
        [17, 28, "#f4a31c"],
      ])
        ((n.fillStyle = f),
          n.beginPath(),
          n.moveTo(d - 9, u - 4),
          n.lineTo(d - 5, u),
          n.lineTo(d - 9, u + 4),
          n.fill(),
          n.beginPath(),
          n.moveTo(d + 9, u - 4),
          n.lineTo(d + 5, u),
          n.lineTo(d + 9, u + 4),
          n.fill(),
          n.beginPath(),
          n.arc(d, u, 5, 0, 7),
          n.fill(),
          (n.fillStyle = "rgba(255,255,255,.55)"),
          n.fillRect(d - 3, u - 3, 2, 3));
      break;
    }
    case E.CARAMEL_APPLE: {
      (a(20, 16, 22, 3, 2.5, "#d8b98a"),
        (n.fillStyle = "#c0322a"),
        n.beginPath(),
        n.arc(20, 25, 11, 0, 7),
        n.fill(),
        (n.fillStyle = "#c47a22"),
        n.beginPath(),
        n.arc(20, 22, 11, Math.PI * 1.05, Math.PI * 1.95),
        n.lineTo(31, 24));
      for (let d = 31; d >= 9; d -= 4) n.lineTo(d, 24 + ((d / 4) % 2 ? 4 : 1));
      (n.fill(),
        (n.fillStyle = "rgba(255,235,190,.6)"),
        n.fillRect(13, 16, 3, 3));
      break;
    }
    case E.WITCH_BREW: {
      ((n.fillStyle = "#6fe04a"),
        n.beginPath(),
        n.arc(20, 26, 10, 0, 7),
        n.fill(),
        (n.fillStyle = "rgba(210,255,190,.35)"),
        n.fillRect(16, 9, 8, 10),
        (n.strokeStyle = "#dff2e8"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.arc(20, 26, 10, 0, 7),
        n.stroke(),
        n.strokeRect(16, 9, 8, 9),
        (n.fillStyle = "#8a5a32"),
        n.fillRect(16.5, 5, 7, 5),
        (n.fillStyle = "#e8ffd8"));
      for (const [d, u] of [
        [16, 25],
        [23, 29],
        [21, 21],
      ])
        (n.beginPath(), n.arc(d, u, 1.6, 0, 7), n.fill());
      break;
    }
    case E.WENDIGO_ANTLER: {
      (a(10, 35, 18, 14, 4, "#4a3b2f"),
        a(18, 14, 30, 4, 3, "#4a3b2f"),
        a(15, 22, 6, 12, 2.5, "#4a3b2f"),
        a(21, 11, 20, 3, 2.5, "#4a3b2f"),
        a(25, 8, 34, 11, 2.5, "#4a3b2f"),
        a(18, 14, 26, 18, 2.2, "#4a3b2f"),
        (n.fillStyle = "#d7cdb4"),
        n.beginPath(),
        n.arc(10, 35, 3, 0, 7),
        n.fill());
      break;
    }
    case E.APPLE:
    case E.ORANGE:
    case E.COCONUT:
    case E.CHERRY: {
      const d =
        e === E.APPLE
          ? "#d94b3f"
          : e === E.ORANGE
            ? "#ed922c"
            : e === E.COCONUT
              ? "#8a5a32"
              : "#c92d53";
      ((n.fillStyle = d),
        n.beginPath(),
        n.arc(20, 22, e === E.CHERRY ? 7 : 11, 0, Math.PI * 2),
        n.fill(),
        e === E.CHERRY &&
          (n.beginPath(), n.arc(29, 25, 6, 0, Math.PI * 2), n.fill()),
        (n.strokeStyle = "#54823a"),
        (n.lineWidth = 3),
        n.beginPath(),
        n.moveTo(20, 13),
        n.quadraticCurveTo(22, 6, 29, 8),
        n.stroke());
      break;
    }
    case E.WHEAT:
      for (const [d, u, f] of [
        [12, 12, -0.32],
        [21, 7, 0.05],
        [29, 15, 0.38],
      ]) {
        (n.save(),
          n.translate(d, u),
          n.rotate(f),
          (n.strokeStyle = "#ad7b2c"),
          (n.lineWidth = 1.5),
          n.beginPath(),
          n.moveTo(0, 24),
          n.lineTo(0, -4),
          n.stroke());
        for (let p = 0; p < 4; p++)
          for (const m of [-1, 1])
            ((n.fillStyle = p % 2 ? "#e2ae40" : "#f5d16b"),
              n.beginPath(),
              n.ellipse(m * 2.2, p * 3, 3.6, 1.65, m * 0.65, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = "#f2cf78"),
              (n.lineWidth = 0.65),
              n.beginPath(),
              n.moveTo(m * 4, p * 3 - 1),
              n.lineTo(m * 5.5, p * 3 - 5),
              n.stroke());
        n.restore();
      }
      ((n.strokeStyle = "#bd8a3b"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.moveTo(16, 31),
        n.lineTo(27, 29),
        n.stroke());
      break;
    case E.WHEAT_SEEDS:
      n.fillStyle = "#b78b3d";
      for (const [d, u, f] of [
        [11, 15, -0.5],
        [20, 11, 0.35],
        [28, 18, -0.2],
        [15, 27, 0.25],
        [25, 30, -0.45],
      ])
        (n.save(),
          n.translate(d, u),
          n.rotate(f),
          n.beginPath(),
          n.ellipse(0, 0, 4.5, 2.4, 0, 0, Math.PI * 2),
          n.fill(),
          n.restore());
      break;
    case E.FERTILIZER:
      ((n.fillStyle = "#d8c28c"),
        n.beginPath(),
        n.moveTo(9, 10),
        n.lineTo(31, 10),
        n.lineTo(34, 34),
        n.lineTo(6, 34),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#8a6a3d"),
        l(8, 9, 24, 4),
        (n.fillStyle = "#4f8c45"),
        n.beginPath(),
        n.ellipse(20, 21, 6, 9, -0.55, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#2f6338"),
        l(18.5, 20, 3, 11),
        (n.fillStyle = "#513923"));
      for (const [d, u] of [
        [12, 29],
        [27, 28],
        [16, 32],
        [24, 32],
      ])
        (n.beginPath(), n.arc(d, u, 1.3, 0, Math.PI * 2), n.fill());
      break;
    case E.RAW_PORK:
    case E.RAW_CHICKEN:
    case E.RAW_MUTTON:
    case E.RAW_BEEF:
    case E.RAW_CAMEL:
    case E.COOKED_PORK:
    case E.COOKED_CHICKEN:
    case E.COOKED_MUTTON:
    case E.COOKED_BEEF:
    case E.COOKED_CAMEL:
      EX(n, e);
      break;
    case E.BUCKET:
    case E.WATER_BUCKET:
    case E.LAVA_BUCKET:
    case E.MILK_BUCKET:
    case E.CAMEL_MILK_BUCKET: {
      ((n.strokeStyle = "#8d99a3"),
        (n.lineWidth = 3),
        n.beginPath(),
        n.arc(20, 14, 12, Math.PI * 1.08, Math.PI * 1.92),
        n.stroke(),
        (n.fillStyle = "#77838d"),
        n.beginPath(),
        n.moveTo(8, 14),
        n.lineTo(32, 14),
        n.lineTo(28, 35),
        n.lineTo(12, 35),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#aeb8c0"),
        l(10, 15, 20, 4),
        (n.fillStyle = "#59636b"),
        l(12, 31, 16, 4),
        e !== E.BUCKET &&
          ((n.fillStyle =
            e === E.WATER_BUCKET
              ? "#3f86dc"
              : e === E.MILK_BUCKET
                ? "#f4f1e6"
                : e === E.CAMEL_MILK_BUCKET
                  ? "#efe6d0"
                  : "#ff6a1c"),
          n.beginPath(),
          n.ellipse(20, 19, 9.5, 3.5, 0, 0, Math.PI * 2),
          n.fill(),
          e === E.CAMEL_MILK_BUCKET &&
            ((n.strokeStyle = "#c8a061"),
            (n.lineWidth = 1.6),
            n.beginPath(),
            n.ellipse(20, 19, 9.5, 3.5, 0, 0, Math.PI * 2),
            n.stroke()),
          e === E.LAVA_BUCKET &&
            ((n.fillStyle = "#ffd45a"), l(15, 18, 4, 2), l(22, 20, 5, 2))));
      break;
    }
    case E.POTATO:
    case E.BAKED_POTATO: {
      const d = e === E.BAKED_POTATO;
      ((n.fillStyle = d ? "#a9752f" : "#c9a768"),
        n.beginPath(),
        n.ellipse(20, 21, 13, 10, 0.3, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = d ? "#7d5220" : "#a4864f"));
      for (const [u, f] of [
        [14, 17],
        [24, 16],
        [19, 25],
        [27, 24],
      ])
        (n.beginPath(),
          n.ellipse(u, f, 1.8, 1.2, 0.4, 0, Math.PI * 2),
          n.fill());
      d && ((n.fillStyle = "#ffe6a8"), l(15, 19, 11, 3));
      break;
    }
    case E.CARROT: {
      ((n.fillStyle = "#e07b28"),
        n.beginPath(),
        n.moveTo(16, 12),
        n.lineTo(24, 14),
        n.lineTo(21, 34),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#c96517"),
        l(17, 18, 6, 1.6),
        l(18, 24, 5, 1.6),
        (n.fillStyle = "#4e9a3c"));
      for (const d of [-0.5, 0, 0.5])
        (n.save(),
          n.translate(20, 12),
          n.rotate(d),
          n.beginPath(),
          n.ellipse(0, -5, 2.4, 6, 0, 0, Math.PI * 2),
          n.fill(),
          n.restore());
      break;
    }
    case E.POTATO_SEEDS:
    case E.CARROT_SEEDS: {
      const d = e === E.CARROT_SEEDS;
      n.fillStyle = d ? "#d8853f" : "#b99a63";
      for (const [u, f, p] of [
        [12, 16, -0.4],
        [21, 12, 0.3],
        [28, 19, -0.2],
        [16, 27, 0.3],
        [26, 29, -0.4],
      ])
        (n.save(),
          n.translate(u, f),
          n.rotate(p),
          n.beginPath(),
          n.ellipse(0, 0, d ? 3.2 : 4.4, d ? 1.7 : 2.6, 0, 0, Math.PI * 2),
          n.fill(),
          n.restore());
      break;
    }
    case E.RASPBERRY:
    case E.BLUEBERRY:
    case E.BLACKBERRY: {
      const d = e !== E.BLUEBERRY,
        u =
          e === E.RASPBERRY
            ? "#c0304f"
            : e === E.BLACKBERRY
              ? "#3a2740"
              : "#4a5aa8",
        f =
          e === E.RASPBERRY
            ? "#e4627c"
            : e === E.BLACKBERRY
              ? "#5e4568"
              : "#7c8ad4";
      ((n.strokeStyle = "#4d7a3c"),
        (n.lineWidth = 2.2),
        (n.lineCap = "round"),
        n.beginPath(),
        n.moveTo(20, 30),
        n.quadraticCurveTo(24, 16, 30, 9),
        n.stroke(),
        (n.fillStyle = "#5d9146"),
        n.beginPath(),
        n.ellipse(26, 10, 6, 3, -0.5, 0, Math.PI * 2),
        n.fill());
      for (const [p, m, y] of [
        [26, 22, 7],
        [16, 25, 9],
      ])
        if (d) {
          n.fillStyle = u;
          for (let g = 0; g < 7; g++) {
            const b = (g / 7) * Math.PI * 2;
            (n.beginPath(),
              n.arc(
                p + Math.cos(b) * y * 0.52,
                m + Math.sin(b) * y * 0.52,
                y * 0.42,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }
          (n.beginPath(),
            n.arc(p, m, y * 0.46, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = f),
            n.beginPath(),
            n.arc(p - y * 0.42, m - y * 0.42, y * 0.24, 0, Math.PI * 2),
            n.fill());
        } else {
          ((n.fillStyle = u),
            n.beginPath(),
            n.arc(p, m, y, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#2c3670"),
            (n.lineWidth = 1.4));
          for (let g = 0; g < 5; g++) {
            const b = (g / 5) * Math.PI * 2;
            (n.beginPath(),
              n.moveTo(p, m - y * 0.35),
              n.lineTo(
                p + Math.cos(b) * y * 0.4,
                m - y * 0.35 + Math.sin(b) * y * 0.3,
              ),
              n.stroke());
          }
          ((n.fillStyle = f),
            (n.globalAlpha = 0.75),
            n.beginPath(),
            n.ellipse(
              p - y * 0.35,
              m + y * 0.3,
              y * 0.3,
              y * 0.2,
              -0.6,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            (n.globalAlpha = 1));
        }
      break;
    }
    case E.EGG: {
      ((n.fillStyle = "#f2e8d8"),
        n.beginPath(),
        n.ellipse(20, 21, 9.5, 12, 0, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#ddd0ba"),
        n.beginPath(),
        n.ellipse(23, 25, 4, 5, 0.4, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#ffffff"),
        (n.globalAlpha = 0.7),
        n.beginPath(),
        n.ellipse(17, 16, 3, 4, -0.3, 0, Math.PI * 2),
        n.fill(),
        (n.globalAlpha = 1));
      break;
    }
    case E.WOOL: {
      n.fillStyle = "#efece2";
      for (const [d, u, f] of [
        [15, 18, 8],
        [25, 17, 7.5],
        [20, 26, 8.5],
        [28, 25, 6.5],
        [12, 26, 6],
      ])
        (n.beginPath(), n.arc(d, u, f, 0, Math.PI * 2), n.fill());
      ((n.strokeStyle = "#d5d1c4"),
        (n.lineWidth = 1.4),
        n.beginPath(),
        n.arc(16, 20, 4, 0.4, 3.4),
        n.stroke(),
        n.beginPath(),
        n.arc(25, 24, 4, 0.8, 3.8),
        n.stroke());
      break;
    }
    case E.COMBAT_KNIFE: {
      (n.save(),
        n.translate(20, 20),
        n.rotate(-Math.PI / 4),
        (n.lineJoin = "round"));
      const d = (u, f, p = "") => {
        (n.beginPath(),
          u.forEach(([m, y], g) => (g ? n.lineTo(m, y) : n.moveTo(m, y))),
          n.closePath(),
          (n.fillStyle = f),
          n.fill(),
          p && ((n.strokeStyle = p), (n.lineWidth = 0.9), n.stroke()));
      };
      ((n.fillStyle = "rgba(0,0,0,.22)"),
        n.beginPath(),
        n.ellipse(1, 15, 14, 2.2, Math.PI / 4, 0, Math.PI * 2),
        n.fill(),
        d(
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
        d(
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
      for (let u = 2; u <= 10; u += 2.6)
        d(
          [
            [u, -3.4],
            [u + 1.3, -4.9],
            [u + 2.6, -3.4],
          ],
          "#454c52",
        );
      ((n.fillStyle = "#121518"),
        n.fillRect(1.5, -1.6, 10, 1.3),
        (n.strokeStyle = "#7d878f"),
        (n.lineWidth = 0.7),
        n.beginPath(),
        n.moveTo(-1, -2.6),
        n.lineTo(15, -2.6),
        n.stroke(),
        d(
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
        d(
          [
            [-18, -3.3],
            [-4.5, -3.6],
            [-4.5, 3.6],
            [-18, 3.3],
          ],
          "#2a2f2b",
          "#0f1316",
        ),
        (n.strokeStyle = "#454d47"),
        (n.lineWidth = 1));
      for (const u of [-15.5, -12.5, -9.5, -6.8])
        (n.beginPath(), n.moveTo(u, -3.1), n.lineTo(u, 3.1), n.stroke());
      (d(
        [
          [-22, -3],
          [-18, -3.6],
          [-18, 3.6],
          [-22, 3],
        ],
        "#68717a",
        "#151a1d",
      ),
        (n.fillStyle = "#0b0c0e"),
        n.fillRect(-20.8, -0.8, 1.6, 1.6),
        n.restore());
      break;
    }
    case E.SHEARS: {
      ((n.strokeStyle = "#aeb8c0"),
        (n.lineWidth = 3.4),
        (n.lineCap = "round"),
        n.beginPath(),
        n.moveTo(11, 9),
        n.lineTo(27, 27),
        n.stroke(),
        n.beginPath(),
        n.moveTo(29, 9),
        n.lineTo(13, 27),
        n.stroke(),
        (n.strokeStyle = "#4a5a3a"),
        (n.lineWidth = 3),
        n.beginPath(),
        n.arc(14, 31, 4.5, 0, Math.PI * 2),
        n.stroke(),
        n.beginPath(),
        n.arc(26, 31, 4.5, 0, Math.PI * 2),
        n.stroke(),
        (n.fillStyle = "#d8dee3"),
        n.beginPath(),
        n.arc(20, 18, 2.4, 0, Math.PI * 2),
        n.fill(),
        (n.lineCap = "butt"));
      break;
    }
    case E.FISHING_ROD: {
      (a(7, 33, 30, 9, 3.2, "#2f3338"),
        (n.fillStyle = "#c7a06a"),
        n.save(),
        n.translate(9, 31),
        n.rotate(-0.81),
        n.fillRect(-3, -4, 11, 7),
        n.restore(),
        (n.fillStyle = "#8d959d"),
        n.beginPath(),
        n.arc(14, 27, 4.2, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = "#e8eef2"),
        n.beginPath(),
        n.arc(14, 27, 2.1, 0, Math.PI * 2),
        n.fill(),
        a(30, 9, 32, 25, 1, "#dfe6ea"),
        (n.fillStyle = "#d8352a"),
        n.beginPath(),
        n.arc(32, 27, 3.4, Math.PI, 0),
        n.fill(),
        (n.fillStyle = "#f2efe6"),
        n.beginPath(),
        n.arc(32, 27, 3.4, 0, Math.PI),
        n.fill());
      break;
    }
    case E.RAW_FISH:
    case E.COOKED_FISH: {
      const d = e === E.COOKED_FISH,
        u = d ? "#c98b45" : "#7fb4d4",
        f = d ? "#e8c07a" : "#dfeef6";
      if (
        ((n.fillStyle = u),
        n.beginPath(),
        n.ellipse(19, 21, 12, 7.5, 0, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = f),
        n.beginPath(),
        n.ellipse(19, 24, 9.5, 3.6, 0, 0, Math.PI * 2),
        n.fill(),
        (n.fillStyle = d ? "#a96f31" : "#5f97b8"),
        n.beginPath(),
        n.moveTo(30, 21),
        n.lineTo(37, 14),
        n.lineTo(35, 21),
        n.lineTo(37, 28),
        n.closePath(),
        n.fill(),
        n.beginPath(),
        n.moveTo(17, 14),
        n.lineTo(22, 9),
        n.lineTo(24, 15),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#20262b"),
        n.beginPath(),
        n.arc(11, 19, 1.7, 0, Math.PI * 2),
        n.fill(),
        d)
      ) {
        ((n.strokeStyle = "#7a4a1c"), (n.lineWidth = 1.6));
        for (const p of [13, 19, 25])
          (n.beginPath(), n.moveTo(p, 15), n.lineTo(p - 3, 27), n.stroke());
      }
      break;
    }
    case E.SHARK_TOOTH:
      ((n.fillStyle = "#f4f2ec"),
        n.beginPath(),
        n.moveTo(20, 6),
        n.lineTo(30, 30),
        n.lineTo(20, 26),
        n.lineTo(10, 30),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#d8d4c6"),
        n.beginPath(),
        n.moveTo(20, 6),
        n.lineTo(20, 26),
        n.lineTo(10, 30),
        n.closePath(),
        n.fill(),
        (n.strokeStyle = "#a9a396"),
        (n.lineWidth = 1.4),
        n.beginPath(),
        n.moveTo(13, 28),
        n.lineTo(27, 28),
        n.stroke());
      break;
    case E.INTEL_TABLET:
      ((n.fillStyle = "#3c4436"),
        l(7, 8, 26, 26),
        (n.fillStyle = "#182420"),
        l(10, 11, 20, 17),
        (n.fillStyle = "#48d46a"),
        l(12, 13, 7, 2),
        l(14, 17, 10, 2),
        l(12, 21, 5, 2),
        l(22, 24, 6, 2),
        (n.fillStyle = "#ffd44a"),
        n.beginPath(),
        n.arc(24, 18, 2, 0, 7),
        n.fill(),
        (n.fillStyle = "#5a6552"),
        l(17, 30, 6, 2));
      break;
    case E.MILITARY_BOT:
      ((n.fillStyle = "#d8a577"),
        l(16, 6, 8, 8),
        (n.fillStyle = "#566744"),
        l(13, 15, 14, 12),
        l(9, 17, 5, 13),
        l(26, 17, 5, 13),
        (n.fillStyle = "#303640"),
        l(14, 28, 5, 9),
        l(21, 28, 5, 9),
        (n.fillStyle = "#222"),
        l(20, 19, 17, 3));
      break;
    case E.AMMO_9MM:
    case E.AMMO_762:
    case E.AMMO_338: {
      const d = e === E.AMMO_9MM,
        u = e === E.AMMO_338,
        f = u ? 2 : 3,
        p = u ? 9 : 7,
        m = 35,
        y = d ? 22 : u ? 17 : 19,
        g = d ? 22 : y - 4,
        b = d ? 13 : u ? 3 : 5;
      for (let S = 0; S < f; S++) {
        (n.save(),
          n.translate(u ? 10 + S * 15 : 6 + S * 11, S % 2 === 0 ? 0 : -2));
        const M = d ? p : p * 0.56,
          x = (p - M) / 2,
          T = n.createLinearGradient(0, 0, p, 0);
        (T.addColorStop(0, "#805624"),
          T.addColorStop(0.23, "#e6b967"),
          T.addColorStop(0.43, "#ffe4a0"),
          T.addColorStop(0.68, "#c79545"),
          T.addColorStop(1, "#815526"),
          (n.fillStyle = T),
          (n.strokeStyle = "#50351d"),
          (n.lineWidth = 0.8),
          n.beginPath(),
          n.moveTo(0, m - 3),
          n.lineTo(0, y),
          n.lineTo(x, g),
          n.lineTo(p - x, g),
          n.lineTo(p, y),
          n.lineTo(p, m - 3),
          n.closePath(),
          n.fill(),
          n.stroke());
        const A = n.createLinearGradient(x, 0, p - x, 0);
        (A.addColorStop(0, "#77402a"),
          A.addColorStop(0.35, "#efb180"),
          A.addColorStop(1, "#a75c36"),
          (n.fillStyle = A),
          n.beginPath(),
          n.moveTo(x, g),
          d
            ? (n.lineTo(x, b + 4),
              n.bezierCurveTo(x, b - 1, p - x, b - 1, p - x, b + 4))
            : (n.quadraticCurveTo(x + 0.25, b + 4, p / 2, b),
              n.quadraticCurveTo(p - x - 0.25, b + 4, p - x, g)),
          n.lineTo(p - x, g),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#f9d787"),
          l(x, g, M, 1.3),
          (n.fillStyle = "#604322"),
          l(0.5, m - 3, p - 1, 1.5),
          (n.fillStyle = T),
          l(-0.5, m - 1.5, p + 1, 2.5),
          (n.fillStyle = "#ffe2a0"),
          l(0, m - 1.5, p, 0.8),
          n.restore());
      }
      break;
    }
    case E.ROCKET:
      ((n.fillStyle = "#6b7355"),
        l(8, 17, 22, 6),
        (n.fillStyle = "#4a5540"),
        n.beginPath(),
        n.moveTo(30, 20),
        n.lineTo(38, 14),
        n.lineTo(38, 26),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#9aa07c"),
        l(3, 15, 7, 10));
      break;
    case E.DRILL_METAL:
    case E.DRILL_DIAMOND:
    case E.DRILL_TITANIUM:
    case E.DRILL_COMPOSITE:
    case E.DRILL_LASER:
    case E.LUNAR_DRILL: {
      const d =
          e === E.DRILL_METAL
            ? 0
            : e === E.DRILL_DIAMOND
              ? 1
              : e === E.DRILL_TITANIUM
                ? 2
                : e === E.DRILL_COMPOSITE
                  ? 3
                  : e === E.DRILL_LASER
                    ? 4
                    : 5,
        u = kw[d],
        f = (p) => "#" + p.toString(16).padStart(6, "0");
      (n.save(),
        n.translate(15, 22),
        n.rotate(-0.55),
        n.scale(0.9, 0.9),
        (n.fillStyle = f(u.body)),
        l(-6, 5, 9, 13),
        (n.fillStyle = f(u.over)),
        l(-2, 6, 4, 12),
        (n.fillStyle = f(u.dark)),
        l(-10, 17, 15, 6),
        (n.fillStyle = f(u.over)),
        l(-10, 16, 15, 2),
        (n.fillStyle = f(u.body)),
        l(-9, -5, 21, 11),
        (n.fillStyle = "rgba(255,255,255,0.22)"),
        l(-7, -4, 16, 2),
        (n.fillStyle = f(u.over)),
        l(-4, -1, 10, 4),
        (n.fillStyle = f(u.dark)),
        l(12, -4, 5, 9),
        (n.fillStyle = f(u.bit)),
        l(17, -1.5, 12, 3),
        u.glow && ((n.shadowColor = f(u.glow)), (n.shadowBlur = 6)),
        n.beginPath(),
        n.moveTo(29, -1.5),
        n.lineTo(34, 0),
        n.lineTo(29, 1.5),
        n.closePath(),
        n.fill(),
        (n.shadowBlur = 0),
        (n.fillStyle = "rgba(0,0,0,0.35)"));
      for (let p = 0; p < 4; p++) l(18.5 + p * 2.6, -1.5, 1, 3);
      n.restore();
      break;
    }
    case E.CHAINSAW_BASIC:
    case E.CHAINSAW_PRO:
    case E.CHAINSAW_INDUSTRIAL: {
      const d = Cw[e === E.CHAINSAW_BASIC ? 0 : e === E.CHAINSAW_PRO ? 1 : 2],
        u = (f) => "#" + f.toString(16).padStart(6, "0");
      (n.save(),
        n.translate(20, 21),
        n.rotate(-0.35),
        (n.fillStyle = "#c9d0d4"),
        l(-19, -3.5, 26, 7),
        n.beginPath(),
        n.arc(-19, 0, 3.5, Math.PI / 2, Math.PI * 1.5),
        n.fill(),
        (n.strokeStyle = "#2a2e32"),
        (n.lineWidth = 1.2),
        n.setLineDash([1.6, 1.2]),
        n.beginPath(),
        n.moveTo(7, -4.2),
        n.lineTo(-19, -4.2),
        n.arc(-19, 0, 4.2, Math.PI * 1.5, Math.PI / 2, !0),
        n.lineTo(7, 4.2),
        n.stroke(),
        n.setLineDash([]),
        (n.fillStyle = u(d.decal)),
        l(-14, -1, 12, 2),
        (n.fillStyle = u(d.body)),
        l(4, -8, 15, 15),
        (n.fillStyle = u(d.cover)),
        l(6, -11, 11, 5),
        (n.fillStyle = u(d.dark)),
        l(5, 2, 6, 6),
        (n.strokeStyle = u(d.dark)),
        (n.lineWidth = 2.4),
        n.beginPath(),
        n.moveTo(18, -6),
        n.lineTo(25, -6),
        n.lineTo(25, 6),
        n.lineTo(18, 6),
        n.stroke(),
        n.beginPath(),
        n.arc(6, -6, 6, Math.PI, Math.PI * 1.8),
        n.stroke(),
        n.restore());
      break;
    }
    case E.MONEY:
      ((n.fillStyle = "#e6c94a"),
        n.beginPath(),
        n.arc(20, 20, 13, 0, 7),
        n.fill(),
        (n.strokeStyle = "#a9862a"),
        (n.lineWidth = 1.5),
        n.stroke(),
        (n.fillStyle = "#8a6a1a"),
        (n.font = "bold 15px sans-serif"),
        (n.textAlign = "center"),
        (n.textBaseline = "middle"),
        n.fillText("$", 20, 21));
      break;
    case E.COAL:
      ((n.fillStyle = "#2f3438"),
        n.beginPath(),
        n.moveTo(7, 28),
        n.lineTo(10, 13),
        n.lineTo(20, 7),
        n.lineTo(33, 15),
        n.lineTo(30, 30),
        n.lineTo(17, 34),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#596168"),
        l(13, 13, 7, 4),
        l(22, 21, 6, 4));
      break;
    case E.IRON_INGOT:
    case E.GOLD_INGOT:
    case E.DIAMOND_INGOT:
    case E.TITANIUM_INGOT: {
      const d =
        e === E.IRON_INGOT
          ? "#bdc5cc"
          : e === E.GOLD_INGOT
            ? "#e6c34f"
            : e === E.DIAMOND_INGOT
              ? "#55dce9"
              : "#8798aa";
      ((n.fillStyle = d),
        n.beginPath(),
        n.moveTo(7, 27),
        n.lineTo(12, 12),
        n.lineTo(28, 12),
        n.lineTo(34, 27),
        n.lineTo(29, 32),
        n.lineTo(11, 32),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "rgba(255,255,255,0.38)"),
        l(14, 15, 12, 3));
      break;
    }
    case E.SUPPRESSOR:
      ((n.fillStyle = "#24272c"), l(4, 16, 30, 8), (n.fillStyle = "#121417"));
      for (let d = 0; d < 4; d++) l(9 + d * 6, 17, 2, 6);
      ((n.fillStyle = "#3a3e44"), l(32, 15, 4, 10));
      break;
    case E.FLASHLIGHT: {
      const d = n.createRadialGradient(31, 20, 1, 31, 20, 13);
      (d.addColorStop(0, "rgba(255,246,198,0.95)"),
        d.addColorStop(0.45, "rgba(255,232,150,0.35)"),
        d.addColorStop(1, "rgba(255,224,120,0)"),
        (n.fillStyle = d),
        n.beginPath(),
        n.moveTo(28, 20),
        n.lineTo(39, 9),
        n.lineTo(39, 31),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "#2c3238"),
        l(5, 15, 20, 11),
        (n.fillStyle = "#3d454d"),
        l(24, 13, 6, 15));
      for (let u = 0; u < 4; u++)
        ((n.fillStyle = "#20262b"), l(9 + u * 3, 15, 1.4, 11));
      ((n.fillStyle = "#8f9aa4"),
        l(4, 17, 2, 7),
        (n.fillStyle = "#fff3c4"),
        l(29, 15, 2.5, 11),
        (n.strokeStyle = "#59636d"),
        (n.lineWidth = 1),
        n.strokeRect(24.5, 13.5, 5, 14));
      break;
    }
    case E.LASER_SIGHT:
      ((n.fillStyle = "#2b2f36"),
        l(5, 16, 11, 9),
        (n.fillStyle = "#171a1f"),
        l(6, 24, 4, 4),
        (n.strokeStyle = "rgba(255,60,50,0.85)"),
        (n.lineWidth = 1.4),
        n.beginPath(),
        n.moveTo(16, 20),
        n.lineTo(35, 20),
        n.stroke(),
        (n.fillStyle = "#ff4433"),
        n.beginPath(),
        n.arc(36, 20, 2.2, 0, 7),
        n.fill());
      break;
    case E.SCOPE_X2:
    case E.SCOPE_X4:
    case E.SCOPE_X8:
    case E.SCOPE_X16: {
      const d =
        e === E.SCOPE_X2 ? 2 : e === E.SCOPE_X4 ? 4 : e === E.SCOPE_X8 ? 8 : 16;
      TX(n, d);
      break;
    }
    case E.SCOPE_HOLO:
      ((n.fillStyle = "#2b2f36"),
        l(8, 11, 24, 17),
        (n.fillStyle = "rgba(120,200,255,0.16)"),
        l(12, 14, 16, 11),
        (n.strokeStyle = "#4a5058"),
        (n.lineWidth = 1.5),
        n.strokeRect(12, 14, 16, 11),
        (n.fillStyle = "#3af23a"),
        n.beginPath(),
        n.arc(20, 19.5, 1.7, 0, 7),
        n.fill(),
        (n.fillStyle = "#1c1f24"),
        l(6, 28, 28, 4));
      break;
    case E.NIGHT_VISION_GOGGLES:
    case E.THERMAL_GOGGLES: {
      const d = e === E.THERMAL_GOGGLES;
      ((n.fillStyle = "#20262b"),
        l(7, 15, 26, 8),
        l(18, 8, 4, 9),
        (n.fillStyle = "#3a444b"),
        l(5, 18, 13, 10),
        l(22, 18, 13, 10),
        (n.fillStyle = d ? "#ff7a24" : "#82ef91"),
        n.beginPath(),
        n.arc(12, 23, 5, 0, 7),
        n.arc(28, 23, 5, 0, 7),
        n.fill(),
        (n.fillStyle = "rgba(255,255,255,.65)"),
        l(9, 20, 3, 2),
        l(25, 20, 3, 2));
      break;
    }
    case E.EXT_MAG:
      ((n.fillStyle = "#4a4f38"),
        n.beginPath(),
        n.moveTo(15, 6),
        n.lineTo(24, 6),
        n.quadraticCurveTo(29, 20, 25, 34),
        n.lineTo(16, 34),
        n.quadraticCurveTo(11, 20, 15, 6),
        n.closePath(),
        n.fill(),
        (n.fillStyle = "rgba(0,0,0,0.3)"));
      for (let d = 0; d < 3; d++) l(15, 13 + d * 6, 9, 2);
      ((n.fillStyle = "rgba(0,0,0,0.55)"),
        n.beginPath(),
        n.arc(29, 10, 6, 0, 7),
        n.fill(),
        (n.strokeStyle = "#8fe89a"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.moveTo(29, 7),
        n.lineTo(29, 13),
        n.moveTo(26, 10),
        n.lineTo(32, 10),
        n.stroke());
      break;
    case E.DYE_GREEN:
    case E.DYE_URBAN:
    case E.DYE_WOODLAND:
    case E.DYE_DESERT:
    case E.DYE_ARCTIC: {
      const u = {
        [E.DYE_GREEN]: ["#526b31", "#394d25", "#718846"],
        [E.DYE_URBAN]: ["#737980", "#343a40", "#a4a8aa"],
        [E.DYE_WOODLAND]: ["#52653a", "#283a24", "#76583a"],
        [E.DYE_DESERT]: ["#c8ab72", "#8f7045", "#e0c992"],
        [E.DYE_ARCTIC]: ["#e7ecee", "#aebbc3", "#687883"],
      }[e];
      ((n.fillStyle = u[0]),
        l(7, 7, 26, 27),
        (n.fillStyle = u[1]),
        l(7, 7, 11, 9),
        l(20, 20, 13, 9),
        (n.fillStyle = u[2]),
        l(18, 8, 15, 8),
        l(8, 24, 10, 10),
        (n.strokeStyle = "rgba(255,255,255,.35)"),
        (n.lineWidth = 2),
        n.strokeRect(7, 7, 26, 27));
      break;
    }
    default:
      Fc(e) && _X(n, e);
      break;
  }
  c && c_(n, e);
}
