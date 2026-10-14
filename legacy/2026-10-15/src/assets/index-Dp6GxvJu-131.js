// index-Dp6GxvJu 131 — fillstyle
// Lines 76659-76843 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function SX(n, e) {
  const t = (s, o, a = "", r = 1) => {
      (n.beginPath(),
        s.forEach(([l, c], h) => (h ? n.lineTo(l, c) : n.moveTo(l, c))),
        n.closePath(),
        (n.fillStyle = o),
        n.fill(),
        a && ((n.strokeStyle = a), (n.lineWidth = r), n.stroke()));
    },
    i = (s, o, a, r, l) => {
      ((n.fillStyle = l), n.fillRect(s, o, a, r));
    };
  if (e === BLOCK.DOOR || e === BLOCK.METAL_DOOR || e === BLOCK.ARMORED_DOOR) {
    n.save();
    const s = e === BLOCK.DOOR,
      o = e === BLOCK.ARMORED_DOOR,
      [a, r, l, c] = s
        ? ["#5e3f20", "#a8763f", "#8d6132", "#c08b50"]
        : o
          ? ["#262d33", "#4f5b65", "#3f4952", "#6c7882"]
          : ["#4e5962", "#8794a0", "#727f8a", "#a9b4be"];
    if (
      ((n.fillStyle = "rgba(0,0,0,.25)"),
      n.fillRect(12, 37, 18, 2),
      i(10, 2, 20, 36, a),
      i(12, 4, 16, 33, r),
      s)
    ) {
      (i(14, 6, 12, 10, "#38515c"),
        i(15, 7, 10, 8, "#8fc8de"),
        i(19.4, 7, 1.2, 8, "#6c4824"),
        i(15, 10.4, 10, 1.2, "#6c4824"),
        (n.fillStyle = "rgba(255,255,255,.5)"),
        n.fillRect(16, 8, 2, 3));
      for (const h of [18, 27.5])
        (i(14, h, 12, 8, l), i(14, h, 12, 1, c), i(14, h, 1, 8, c));
    } else {
      for (const h of [6, 21]) (i(14, h, 12, 12, l), i(14, h, 12, 1, c));
      n.fillStyle = "#222a30";
      for (const [h, d] of [
        [13, 5],
        [26, 5],
        [13, 35],
        [26, 35],
      ])
        n.fillRect(h, d, 1.5, 1.5);
      o
        ? (i(12, 13, 16, 2.5, "#2b333a"),
          i(12, 28, 16, 2.5, "#2b333a"),
          i(15, 8, 10, 2, "#0e1215"))
        : (i(15, 9, 10, 4, "#a7d0de"), i(15, 9, 10, 1, "#d7eef5"));
    }
    (i(24.5, 20, 2.5, 3.5, s ? "#c8b07a" : "#d3d9de"),
      i(25, 21, 3, 1.2, s ? "#8e7a4c" : "#59636b"));
    for (const h of [7, 31]) i(10.5, h, 2, 3, s ? "#3a2814" : "#1b2125");
    return (n.restore(), !0);
  }
  if (e === BLOCK.LIGHTNING_ROD) {
    n.save();
    const s = n.createLinearGradient(17, 0, 23, 0);
    (s.addColorStop(0, "#8d4a24"),
      s.addColorStop(0.45, "#f0a76a"),
      s.addColorStop(1, "#93502a"),
      i(11, 33, 18, 4, "#5b6268"),
      i(13, 30, 14, 3, "#7d858c"),
      t(
        [
          [18, 30],
          [18, 8],
          [20, 2],
          [22, 8],
          [22, 30],
        ],
        s,
        "#5a2e14",
        0.8,
      ));
    for (const o of [12, 20]) i(16.5, o, 7, 2, "#b8682f");
    return (
      (n.strokeStyle = "#bfe8ff"),
      (n.lineWidth = 1.3),
      n.beginPath(),
      n.moveTo(29, 2),
      n.lineTo(26, 7),
      n.lineTo(29, 8),
      n.lineTo(25, 14),
      n.stroke(),
      n.restore(),
      !0
    );
  }
  if (e === BLOCK.SNOW_LAYER) {
    (t(
      [
        [5, 22],
        [20, 15],
        [35, 22],
        [20, 29],
      ],
      "#fbfdff",
      "#c9d8e6",
      0.8,
    ),
      t(
        [
          [5, 22],
          [20, 29],
          [20, 34],
          [5, 27],
        ],
        "#d9e5f0",
      ),
      t(
        [
          [35, 22],
          [20, 29],
          [20, 34],
          [35, 27],
        ],
        "#c3d3e2",
      ),
      (n.fillStyle = "#ffffff"));
    for (const [s, o] of [
      [14, 20],
      [24, 18],
      [20, 23],
    ])
      n.fillRect(s, o, 2, 1);
    return !0;
  }
  if (e === BLOCK.RADIO_RELAY) {
    (i(9, 18, 22, 17, "#3d4a43"),
      i(9, 18, 22, 2, "#5d6d63"),
      i(12, 22, 11, 7, "#14261f"),
      i(13, 24, 4, 1.5, "#7fe0a6"),
      i(13, 26.5, 7, 1.2, "#4c9c72"),
      (n.fillStyle = "#ffb23a"),
      n.beginPath(),
      n.arc(27, 24, 1.8, 0, Math.PI * 2),
      n.fill(),
      i(26, 4, 2, 14, "#9aa59e"),
      i(24.5, 3, 5, 2, "#c8d0ca"),
      (n.strokeStyle = "rgba(160,230,190,.7)"),
      (n.lineWidth = 1.2));
    for (const s of [5, 9])
      (n.beginPath(),
        n.arc(27, 4, s, -Math.PI * 0.85, -Math.PI * 0.15),
        n.stroke());
    return !0;
  }
  if (e === BLOCK.IRON_FENCE) {
    const s = "#2e3338",
      o = "#7c868f";
    (i(5, 7, 4, 30, s), i(31, 7, 4, 30, s));
    for (const a of [7, 33])
      ((n.fillStyle = s),
        n.beginPath(),
        n.arc(a, 6, 3, 0, Math.PI * 2),
        n.fill());
    (i(9, 13, 22, 2, s), i(9, 29, 22, 2, s));
    for (const a of [12.5, 17, 21.5, 26])
      (i(a, 12, 1.8, 24, s),
        t(
          [
            [a - 1.2, 12],
            [a + 0.9, 7],
            [a + 3, 12],
          ],
          s,
        ));
    return (
      (n.strokeStyle = s),
      (n.lineWidth = 1.4),
      n.beginPath(),
      n.arc(20, 22, 4, Math.PI * 0.1, Math.PI * 1.9),
      n.stroke(),
      (n.fillStyle = o),
      n.fillRect(5.5, 8, 1, 28),
      n.fillRect(31.5, 8, 1, 28),
      n.fillRect(9, 13, 22, 0.8),
      !0
    );
  }
  return !1;
}
