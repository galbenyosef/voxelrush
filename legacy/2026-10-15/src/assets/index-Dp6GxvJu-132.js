// index-Dp6GxvJu 132 — beginpath
// Lines 76844-77035 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function EX(n, e) {
  const t = new Set([
      ITEM.COOKED_PORK,
      ITEM.COOKED_CHICKEN,
      ITEM.COOKED_MUTTON,
      ITEM.COOKED_BEEF,
      ITEM.COOKED_CAMEL,
    ]).has(e),
    i = (...h) => h.includes(e),
    s = (h, d, u = "") => {
      (n.beginPath(), n.moveTo(h[0][0], h[0][1]));
      for (let f = 1; f < h.length; f += 2)
        n.quadraticCurveTo(h[f][0], h[f][1], h[f + 1][0], h[f + 1][1]);
      (n.closePath(),
        (n.fillStyle = d),
        n.fill(),
        u && ((n.strokeStyle = u), (n.lineWidth = 1), n.stroke()));
    },
    o = (h, d, u, f) => {
      ((n.strokeStyle = "rgba(40,18,8,.75)"), (n.lineWidth = 1.6));
      for (let p = 0; p < 3; p++)
        (n.beginPath(),
          n.moveTo(h + p * 6, u),
          n.lineTo(d + p * 6, f),
          n.stroke());
    },
    a = (h, d, u, f, p) => {
      ((n.strokeStyle = "#efe2cc"),
        (n.lineWidth = p),
        (n.lineCap = "round"),
        n.beginPath(),
        n.moveTo(h, d),
        n.lineTo(u, f),
        n.stroke(),
        (n.lineCap = "butt"),
        (n.fillStyle = "#f7eedd"));
      for (const [m, y] of [
        [-1.6, -1.2],
        [1.6, 1.2],
      ])
        (n.beginPath(),
          n.arc(u + m, f + y, p * 0.62, 0, Math.PI * 2),
          n.fill());
    };
  if (i(ITEM.RAW_BEEF, ITEM.COOKED_BEEF, ITEM.RAW_CAMEL, ITEM.COOKED_CAMEL)) {
    const h = i(ITEM.RAW_CAMEL, ITEM.COOKED_CAMEL),
      d = t ? (h ? "#6a3520" : "#8a4a28") : h ? "#a64640" : "#c8423b";
    if (
      (s(
        [
          [7, 18],
          [9, 8],
          [22, 9],
          [35, 10],
          [34, 22],
          [33, 34],
          [19, 32],
          [5, 31],
          [7, 18],
        ],
        t ? "#d9b07a" : "#f3e2d0",
      ),
      s(
        [
          [9, 18],
          [11, 11],
          [22, 12],
          [32, 13],
          [31, 22],
          [30, 31],
          [19, 29],
          [8, 29],
          [9, 18],
        ],
        d,
      ),
      t)
    )
      o(11, 18, 27, 13);
    else {
      ((n.strokeStyle = "rgba(255,235,225,.75)"), (n.lineWidth = 0.9));
      for (const [u, f, p, m] of [
        [12, 17, 19, 15],
        [17, 23, 27, 20],
        [13, 25, 20, 27],
        [24, 15, 29, 18],
      ])
        (n.beginPath(),
          n.moveTo(u, f),
          n.quadraticCurveTo((u + p) / 2, f + 3, p, m),
          n.stroke());
    }
    return;
  }
  if (i(ITEM.RAW_PORK, ITEM.COOKED_PORK)) {
    (s(
      [
        [6, 22],
        [8, 9],
        [21, 9],
        [34, 9],
        [34, 21],
        [33, 33],
        [20, 33],
        [6, 33],
        [6, 22],
      ],
      t ? "#d6a46a" : "#f7e7dc",
    ),
      s(
        [
          [9, 21],
          [11, 12],
          [21, 12],
          [31, 13],
          [31, 21],
          [30, 30],
          [20, 30],
          [9, 30],
          [9, 21],
        ],
        t ? "#a8643a" : "#e99a92",
      ),
      (n.fillStyle = "#f4ead8"),
      n.beginPath(),
      n.ellipse(13, 15, 3, 2.4, 0, 0, Math.PI * 2),
      n.fill(),
      t && o(14, 20, 28, 15));
    return;
  }
  if (i(ITEM.RAW_MUTTON, ITEM.COOKED_MUTTON)) {
    (a(20, 19, 33, 6, 3),
      s(
        [
          [6, 25],
          [7, 14],
          [17, 15],
          [25, 17],
          [24, 27],
          [22, 36],
          [13, 35],
          [5, 34],
          [6, 25],
        ],
        t ? "#d2a56c" : "#f2e3d6",
      ),
      s(
        [
          [9, 25],
          [10, 17],
          [17, 18],
          [22, 20],
          [21, 27],
          [19, 33],
          [13, 32],
          [8, 31],
          [9, 25],
        ],
        t ? "#93512c" : "#d3756e",
      ),
      t && o(11, 15, 30, 19));
    return;
  }
  const r = 1,
    l = "#efb1a4",
    c = "#b06a32";
  (n.save(),
    n.translate(20, 20),
    n.scale(r, r),
    n.translate(-20, -20),
    a(21, 22, 32, 33, 3.2),
    n.beginPath(),
    n.moveTo(24, 24),
    n.bezierCurveTo(17, 29, 4, 26, 4, 15),
    n.bezierCurveTo(4, 5, 15, 2, 20, 7),
    n.bezierCurveTo(25, 11, 27, 18, 24, 24),
    (n.fillStyle = t ? c : l),
    n.fill(),
    (n.strokeStyle = "rgba(0,0,0,.25)"),
    (n.lineWidth = 1),
    n.stroke(),
    (n.fillStyle = t ? "rgba(255,220,150,.35)" : "rgba(255,255,255,.35)"),
    n.beginPath(),
    n.ellipse(11, 11, 4, 2.2, -0.6, 0, Math.PI * 2),
    n.fill(),
    t &&
      ((n.fillStyle = "rgba(60,25,10,.35)"),
      n.beginPath(),
      n.ellipse(15, 19, 6, 3, -0.6, 0, Math.PI * 2),
      n.fill()),
    n.restore());
}
