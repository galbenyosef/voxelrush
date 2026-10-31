// index-BeUlFSPp 161 — lineto
// Lines 92907-93203 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function lE(s, e, t, i, n) {
  const o = Math.max(0.72, n / 5),
    a = i.vehicleType ?? (i.kind === "himars" ? L.HIMARS : -1),
    r = "rgba(255,255,255,0.45)",
    l = "rgba(12,8,8,0.92)";
  (s.save(),
    s.translate(e, t),
    s.scale(o, o),
    (s.fillStyle = "#0c1821"),
    (s.strokeStyle = i.color),
    (s.lineWidth = 1),
    s.beginPath(),
    s.roundRect(-8, -8, 16, 16, 4),
    s.fill(),
    s.stroke(),
    (s.fillStyle = i.color),
    (s.strokeStyle = l),
    (s.lineWidth = 1.25 / o),
    (s.lineJoin = "round"),
    (s.lineCap = "round"));
  const c = (f) => {
      (s.beginPath(), f(), s.closePath(), s.fill(), s.stroke());
    },
    h = (f, p, m, g) => {
      (s.beginPath(), s.rect(f, p, m, g), s.fill(), s.stroke());
    },
    d = (f, p, m) => {
      (s.beginPath(), s.arc(f, p, m, 0, Math.PI * 2), s.fill(), s.stroke());
    },
    u = (f, p, m, g, y = r) => {
      ((s.strokeStyle = y),
        s.beginPath(),
        s.moveTo(f, p),
        s.lineTo(m, g),
        s.stroke(),
        (s.strokeStyle = l));
    };
  switch (a) {
    case L.TANK:
      (h(-5, -2.1, 10, 4.2),
        (s.fillStyle = i.color),
        h(-3.2, -3.4, 6.4, 2.7),
        d(0, -2.8, 1.45),
        u(0, -2.8, 0, -5),
        u(-4, -1.05, 4, -1.05, r));
      break;
    case L.FIGHTER_JET:
      (c(() => {
        (s.moveTo(0, -6.8),
          s.lineTo(1.2, -1),
          s.lineTo(5.8, 4),
          s.lineTo(1.6, 2.7),
          s.lineTo(2, 4.3),
          s.lineTo(3.2, 5.6),
          s.lineTo(0, 4.7),
          s.lineTo(-3.2, 5.6),
          s.lineTo(-2, 4.3),
          s.lineTo(-1.6, 2.7),
          s.lineTo(-5.8, 4),
          s.lineTo(-1.2, -1));
      }),
        u(0, -4.5, 0, 2, r));
      break;
    case L.PLANE:
      (c(() => {
        (s.moveTo(0, -5.5),
          s.lineTo(1.15, -1.2),
          s.lineTo(4.7, 1.6),
          s.lineTo(1.1, 1.5),
          s.lineTo(0.7, 5),
          s.lineTo(-0.7, 5),
          s.lineTo(-1.1, 1.5),
          s.lineTo(-4.7, 1.6),
          s.lineTo(-1.15, -1.2));
      }),
        u(0, -4.3, 0, 3.8, r));
      break;
    case L.DRONE:
      (u(-4.2, -4.2, 4.2, 4.2),
        u(4.2, -4.2, -4.2, 4.2),
        (s.fillStyle = i.color),
        d(-4.2, -4.2, 1.05),
        d(4.2, -4.2, 1.05),
        d(-4.2, 4.2, 1.05),
        d(4.2, 4.2, 1.05),
        d(0, 0, 1.8));
      break;
    case L.BOAT:
      (c(() => {
        (s.moveTo(0, -5.2),
          s.lineTo(4.6, 2.4),
          s.lineTo(2.7, 4.6),
          s.lineTo(-2.7, 4.6),
          s.lineTo(-4.6, 2.4));
      }),
        h(-1.3, -1.8, 2.6, 3.2),
        u(-3, 3, 3, 3, r));
      break;
    case L.CARRIER:
      (c(() => {
        (s.moveTo(-3.2, -5.2),
          s.lineTo(3.2, -5.2),
          s.lineTo(4.8, 3.8),
          s.lineTo(2.8, 5.2),
          s.lineTo(-2.8, 5.2),
          s.lineTo(-4.8, 3.8));
      }),
        h(-1.2, -3.5, 2.4, 3.1),
        u(-3, 1.2, 3, 1.2, r));
      break;
    case L.SUBMARINE:
      (s.beginPath(),
        s.ellipse(0, 0.8, 4.9, 2.8, 0, 0, Math.PI * 2),
        s.fill(),
        s.stroke(),
        h(-1.1, -3.2, 2.2, 1.8),
        u(0, -4.7, 0, -3.2),
        u(-3.2, 1, 3.2, 1, r));
      break;
    case L.HELI:
      (u(-5, -4.1, 5, -4.1),
        u(0, -4.1, 0, -2.3),
        c(() => {
          (s.moveTo(-3.3, -1.2),
            s.quadraticCurveTo(0, -3.5, 3.2, -1.1),
            s.lineTo(2.5, 2),
            s.quadraticCurveTo(0, 3.3, -2.8, 2),
            s.closePath());
        }),
        u(2.4, 0.2, 5.1, 2.4),
        u(4.3, 1.9, 5.6, 1.3, r));
      break;
    case L.MORTAR:
      (s.beginPath(),
        s.ellipse(0, 3.2, 5.2, 1.5, 0, 0, Math.PI * 2),
        s.stroke(),
        u(-3.4, 2.6, 0, -1.3),
        u(3.8, 2.6, 0, -1.3),
        u(-0.8, 2, 2.2, -5),
        u(-3, -1.7, -0.7, -1.7));
      break;
    case L.HIMARS:
      (h(-5, -2.2, 10, 4.4),
        h(-4.3, -3.7, 3.3, 2.2),
        u(-0.1, -1.7, 3.8, -5),
        u(0.6, -1.1, 4.4, -4.4, r),
        d(-3.3, 2.35, 1),
        d(3.2, 2.35, 1));
      break;
    case L.PATRIOT:
      (h(-5, -2.1, 10, 4.2),
        h(-3.8, -3.5, 2.8, 2.1),
        s.beginPath(),
        s.arc(1.9, -2.1, 2.1, Math.PI * 1.05, Math.PI * 1.95),
        s.stroke(),
        u(1.9, -2.1, 4.7, -4.5),
        d(-3.2, 2.3, 1),
        d(3.1, 2.3, 1));
      break;
    case L.TURRET:
      (h(-4.2, 1.2, 8.4, 2.4), d(0, 0, 2.8), u(0, 0, 0, -5), u(-2, 0, 2, 0, r));
      break;
    case L.BTR_TURRET:
      (c(() => {
        (s.moveTo(-4.4, -2.8),
          s.lineTo(3.6, -2.8),
          s.lineTo(4.8, -1.2),
          s.lineTo(4.8, 2.7),
          s.lineTo(-4.8, 2.7),
          s.lineTo(-4.8, -1.8));
      }),
        d(0, -2.4, 1.7),
        u(0, -2.4, 0, -5.1),
        d(-3, 2.9, 0.9),
        d(3, 2.9, 0.9));
      break;
    case L.SPACE_ROCKET:
      (c(() => {
        (s.moveTo(0, -6),
          s.quadraticCurveTo(3, -3, 2, 3),
          s.lineTo(-2, 3),
          s.quadraticCurveTo(-3, -3, 0, -6));
      }),
        c(() => {
          (s.moveTo(-2, 0), s.lineTo(-4, 4), s.lineTo(-2, 3));
        }),
        c(() => {
          (s.moveTo(2, 0), s.lineTo(4, 4), s.lineTo(2, 3));
        }),
        d(0, -1, 1),
        u(-1, 4, -0.5, 6, i.color),
        u(1, 4, 0.5, 6, i.color));
      break;
    default:
      c(() => {
        (s.moveTo(0, -5), s.lineTo(4.5, 0), s.lineTo(0, 5), s.lineTo(-4.5, 0));
      });
      break;
  }
  s.restore();
}
const Ui = 40,
  sse = 0.48,
  FT = sse / Ui,
  nse = 12,
  ose = 0.1,
  Hw = 0.006,
  ase = 128,
  Bw = new Map(),
  Tu = (s) => (s - Ui / 2) * FT,
  xu = (s) => (Ui / 2 - s) * FT;
function rse(s, e) {
  const { data: t } = s;
  let i = new Uint8Array(Ui * Ui);
  for (let n = 0; n < i.length; n++) i[n] = t[n * 4 + 3] > 8 ? 1 : 0;
  for (let n = 0; n < e; n++) {
    const o = t.slice(),
      a = i.slice();
    for (let r = 0; r < Ui; r++)
      for (let l = 0; l < Ui; l++) {
        const c = r * Ui + l;
        if (i[c]) continue;
        let h = 0,
          d = 0,
          u = 0,
          f = 0;
        for (let p = -1; p <= 1; p++)
          for (let m = -1; m <= 1; m++) {
            const g = l + m,
              y = r + p;
            if (g < 0 || y < 0 || g >= Ui || y >= Ui) continue;
            const b = y * Ui + g;
            i[b] &&
              ((h += o[b * 4]), (d += o[b * 4 + 1]), (u += o[b * 4 + 2]), f++);
          }
        f &&
          ((t[c * 4] = h / f),
          (t[c * 4 + 1] = d / f),
          (t[c * 4 + 2] = u / f),
          (a[c] = 1));
      }
    i = a;
  }
}
function lse(s) {
  const e = new Uint8Array(Ui * Ui),
    t = (i, n) => (i < 0 || n < 0 || i >= Ui || n >= Ui ? 0 : e[n * Ui + i]);
  for (let i = 0; i < e.length; i++) e[i] = s[i] ? 255 : 0;
  for (let i = 0; i < Ui; i++)
    for (let n = 0; n < Ui; n++) {
      const o = i * Ui + n;
      s[o] &&
        (e[o] = Math.min(
          e[o],
          Math.min(t(n - 1, i), t(n, i - 1), t(n - 1, i - 1), t(n + 1, i - 1)) +
            1,
        ));
    }
  for (let i = Ui - 1; i >= 0; i--)
    for (let n = Ui - 1; n >= 0; n--) {
      const o = i * Ui + n;
      s[o] &&
        (e[o] = Math.min(
          e[o],
          Math.min(t(n + 1, i), t(n, i + 1), t(n + 1, i + 1), t(n - 1, i + 1)) +
            1,
        ));
    }
  return e;
}
class cse {
  pos = [];
  nor = [];
  uv = [];
  quad(e, t, i) {
    for (const [n, o, a] of [
      [0, 1, 2],
      [0, 2, 3],
    ])
      for (const r of [n, o, a])
        (this.pos.push(e[r][0], e[r][1], e[r][2]),
          this.nor.push(t[0], t[1], t[2]),
          this.uv.push(i[r][0], i[r][1]));
  }
  geometry() {
    const e = new oi();
    (e.setAttribute("position", new Dt(this.pos, 3)),
      e.setAttribute("normal", new Dt(this.nor, 3)),
      e.setAttribute("uv", new Dt(this.uv, 2)),
      e.computeBoundingSphere());
    const t = _K(e, 1e-6);
    return (e.dispose(), t);
  }
}
function zw(s, e, t, i) {
  return { u0: s / Ui, u1: (e + 1) / Ui, v0: 1 - (i + 1) / Ui, v1: 1 - t / Ui };
}
