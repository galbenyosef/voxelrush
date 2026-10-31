// index-BeUlFSPp 157 — beginpath
// Lines 84634-84825 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Xie(s, e) {
  const t = new Set([
      w.COOKED_PORK,
      w.COOKED_CHICKEN,
      w.COOKED_MUTTON,
      w.COOKED_BEEF,
      w.COOKED_CAMEL,
    ]).has(e),
    i = (...h) => h.includes(e),
    n = (h, d, u = "") => {
      (s.beginPath(), s.moveTo(h[0][0], h[0][1]));
      for (let f = 1; f < h.length; f += 2)
        s.quadraticCurveTo(h[f][0], h[f][1], h[f + 1][0], h[f + 1][1]);
      (s.closePath(),
        (s.fillStyle = d),
        s.fill(),
        u && ((s.strokeStyle = u), (s.lineWidth = 1), s.stroke()));
    },
    o = (h, d, u, f) => {
      ((s.strokeStyle = "rgba(40,18,8,.75)"), (s.lineWidth = 1.6));
      for (let p = 0; p < 3; p++)
        (s.beginPath(),
          s.moveTo(h + p * 6, u),
          s.lineTo(d + p * 6, f),
          s.stroke());
    },
    a = (h, d, u, f, p) => {
      ((s.strokeStyle = "#efe2cc"),
        (s.lineWidth = p),
        (s.lineCap = "round"),
        s.beginPath(),
        s.moveTo(h, d),
        s.lineTo(u, f),
        s.stroke(),
        (s.lineCap = "butt"),
        (s.fillStyle = "#f7eedd"));
      for (const [m, g] of [
        [-1.6, -1.2],
        [1.6, 1.2],
      ])
        (s.beginPath(),
          s.arc(u + m, f + g, p * 0.62, 0, Math.PI * 2),
          s.fill());
    };
  if (i(w.RAW_BEEF, w.COOKED_BEEF, w.RAW_CAMEL, w.COOKED_CAMEL)) {
    const h = i(w.RAW_CAMEL, w.COOKED_CAMEL),
      d = t ? (h ? "#6a3520" : "#8a4a28") : h ? "#a64640" : "#c8423b";
    if (
      (n(
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
      n(
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
      ((s.strokeStyle = "rgba(255,235,225,.75)"), (s.lineWidth = 0.9));
      for (const [u, f, p, m] of [
        [12, 17, 19, 15],
        [17, 23, 27, 20],
        [13, 25, 20, 27],
        [24, 15, 29, 18],
      ])
        (s.beginPath(),
          s.moveTo(u, f),
          s.quadraticCurveTo((u + p) / 2, f + 3, p, m),
          s.stroke());
    }
    return;
  }
  if (i(w.RAW_PORK, w.COOKED_PORK)) {
    (n(
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
      n(
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
      (s.fillStyle = "#f4ead8"),
      s.beginPath(),
      s.ellipse(13, 15, 3, 2.4, 0, 0, Math.PI * 2),
      s.fill(),
      t && o(14, 20, 28, 15));
    return;
  }
  if (i(w.RAW_MUTTON, w.COOKED_MUTTON)) {
    (a(20, 19, 33, 6, 3),
      n(
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
      n(
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
  (s.save(),
    s.translate(20, 20),
    s.scale(r, r),
    s.translate(-20, -20),
    a(21, 22, 32, 33, 3.2),
    s.beginPath(),
    s.moveTo(24, 24),
    s.bezierCurveTo(17, 29, 4, 26, 4, 15),
    s.bezierCurveTo(4, 5, 15, 2, 20, 7),
    s.bezierCurveTo(25, 11, 27, 18, 24, 24),
    (s.fillStyle = t ? c : l),
    s.fill(),
    (s.strokeStyle = "rgba(0,0,0,.25)"),
    (s.lineWidth = 1),
    s.stroke(),
    (s.fillStyle = t ? "rgba(255,220,150,.35)" : "rgba(255,255,255,.35)"),
    s.beginPath(),
    s.ellipse(11, 11, 4, 2.2, -0.6, 0, Math.PI * 2),
    s.fill(),
    t &&
      ((s.fillStyle = "rgba(60,25,10,.35)"),
      s.beginPath(),
      s.ellipse(15, 19, 6, 3, -0.6, 0, Math.PI * 2),
      s.fill()),
    s.restore());
}
