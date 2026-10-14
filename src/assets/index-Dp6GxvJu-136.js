// index-Dp6GxvJu 136 — lineto
// Lines 85006-85306 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
(w(Os, "CHAT_KEEP", 30), w(Os, "MAP_CELLS", 88), w(Os, "MINIMAP_CELLS", 64));
let MM = Os;
function SM(n, e, t, i, s) {
  const o = Math.max(0.72, s / 5),
    a = i.vehicleType ?? (i.kind === "himars" ? VEHICLE_KIND.HIMARS : -1),
    r = "rgba(255,255,255,0.45)",
    l = "rgba(12,8,8,0.92)";
  (n.save(),
    n.translate(e, t),
    n.scale(o, o),
    (n.fillStyle = "#0c1821"),
    (n.strokeStyle = i.color),
    (n.lineWidth = 1),
    n.beginPath(),
    n.roundRect(-8, -8, 16, 16, 4),
    n.fill(),
    n.stroke(),
    (n.fillStyle = i.color),
    (n.strokeStyle = l),
    (n.lineWidth = 1.25 / o),
    (n.lineJoin = "round"),
    (n.lineCap = "round"));
  const c = (f) => {
      (n.beginPath(), f(), n.closePath(), n.fill(), n.stroke());
    },
    h = (f, p, m, y) => {
      (n.beginPath(), n.rect(f, p, m, y), n.fill(), n.stroke());
    },
    d = (f, p, m) => {
      (n.beginPath(), n.arc(f, p, m, 0, Math.PI * 2), n.fill(), n.stroke());
    },
    u = (f, p, m, y, g = r) => {
      ((n.strokeStyle = g),
        n.beginPath(),
        n.moveTo(f, p),
        n.lineTo(m, y),
        n.stroke(),
        (n.strokeStyle = l));
    };
  switch (a) {
    case VEHICLE_KIND.TANK:
      (h(-5, -2.1, 10, 4.2),
        (n.fillStyle = i.color),
        h(-3.2, -3.4, 6.4, 2.7),
        d(0, -2.8, 1.45),
        u(0, -2.8, 0, -5),
        u(-4, -1.05, 4, -1.05, r));
      break;
    case VEHICLE_KIND.FIGHTER_JET:
      (c(() => {
        (n.moveTo(0, -6.8),
          n.lineTo(1.2, -1),
          n.lineTo(5.8, 4),
          n.lineTo(1.6, 2.7),
          n.lineTo(2, 4.3),
          n.lineTo(3.2, 5.6),
          n.lineTo(0, 4.7),
          n.lineTo(-3.2, 5.6),
          n.lineTo(-2, 4.3),
          n.lineTo(-1.6, 2.7),
          n.lineTo(-5.8, 4),
          n.lineTo(-1.2, -1));
      }),
        u(0, -4.5, 0, 2, r));
      break;
    case VEHICLE_KIND.PLANE:
      (c(() => {
        (n.moveTo(0, -5.5),
          n.lineTo(1.15, -1.2),
          n.lineTo(4.7, 1.6),
          n.lineTo(1.1, 1.5),
          n.lineTo(0.7, 5),
          n.lineTo(-0.7, 5),
          n.lineTo(-1.1, 1.5),
          n.lineTo(-4.7, 1.6),
          n.lineTo(-1.15, -1.2));
      }),
        u(0, -4.3, 0, 3.8, r));
      break;
    case VEHICLE_KIND.DRONE:
      (u(-4.2, -4.2, 4.2, 4.2),
        u(4.2, -4.2, -4.2, 4.2),
        (n.fillStyle = i.color),
        d(-4.2, -4.2, 1.05),
        d(4.2, -4.2, 1.05),
        d(-4.2, 4.2, 1.05),
        d(4.2, 4.2, 1.05),
        d(0, 0, 1.8));
      break;
    case VEHICLE_KIND.BOAT:
      (c(() => {
        (n.moveTo(0, -5.2),
          n.lineTo(4.6, 2.4),
          n.lineTo(2.7, 4.6),
          n.lineTo(-2.7, 4.6),
          n.lineTo(-4.6, 2.4));
      }),
        h(-1.3, -1.8, 2.6, 3.2),
        u(-3, 3, 3, 3, r));
      break;
    case VEHICLE_KIND.CARRIER:
      (c(() => {
        (n.moveTo(-3.2, -5.2),
          n.lineTo(3.2, -5.2),
          n.lineTo(4.8, 3.8),
          n.lineTo(2.8, 5.2),
          n.lineTo(-2.8, 5.2),
          n.lineTo(-4.8, 3.8));
      }),
        h(-1.2, -3.5, 2.4, 3.1),
        u(-3, 1.2, 3, 1.2, r));
      break;
    case VEHICLE_KIND.SUBMARINE:
      (n.beginPath(),
        n.ellipse(0, 0.8, 4.9, 2.8, 0, 0, Math.PI * 2),
        n.fill(),
        n.stroke(),
        h(-1.1, -3.2, 2.2, 1.8),
        u(0, -4.7, 0, -3.2),
        u(-3.2, 1, 3.2, 1, r));
      break;
    case VEHICLE_KIND.HELI:
      (u(-5, -4.1, 5, -4.1),
        u(0, -4.1, 0, -2.3),
        c(() => {
          (n.moveTo(-3.3, -1.2),
            n.quadraticCurveTo(0, -3.5, 3.2, -1.1),
            n.lineTo(2.5, 2),
            n.quadraticCurveTo(0, 3.3, -2.8, 2),
            n.closePath());
        }),
        u(2.4, 0.2, 5.1, 2.4),
        u(4.3, 1.9, 5.6, 1.3, r));
      break;
    case VEHICLE_KIND.MORTAR:
      (n.beginPath(),
        n.ellipse(0, 3.2, 5.2, 1.5, 0, 0, Math.PI * 2),
        n.stroke(),
        u(-3.4, 2.6, 0, -1.3),
        u(3.8, 2.6, 0, -1.3),
        u(-0.8, 2, 2.2, -5),
        u(-3, -1.7, -0.7, -1.7));
      break;
    case VEHICLE_KIND.HIMARS:
      (h(-5, -2.2, 10, 4.4),
        h(-4.3, -3.7, 3.3, 2.2),
        u(-0.1, -1.7, 3.8, -5),
        u(0.6, -1.1, 4.4, -4.4, r),
        d(-3.3, 2.35, 1),
        d(3.2, 2.35, 1));
      break;
    case VEHICLE_KIND.PATRIOT:
      (h(-5, -2.1, 10, 4.2),
        h(-3.8, -3.5, 2.8, 2.1),
        n.beginPath(),
        n.arc(1.9, -2.1, 2.1, Math.PI * 1.05, Math.PI * 1.95),
        n.stroke(),
        u(1.9, -2.1, 4.7, -4.5),
        d(-3.2, 2.3, 1),
        d(3.1, 2.3, 1));
      break;
    case VEHICLE_KIND.TURRET:
      (h(-4.2, 1.2, 8.4, 2.4), d(0, 0, 2.8), u(0, 0, 0, -5), u(-2, 0, 2, 0, r));
      break;
    case VEHICLE_KIND.BTR_TURRET:
      (c(() => {
        (n.moveTo(-4.4, -2.8),
          n.lineTo(3.6, -2.8),
          n.lineTo(4.8, -1.2),
          n.lineTo(4.8, 2.7),
          n.lineTo(-4.8, 2.7),
          n.lineTo(-4.8, -1.8));
      }),
        d(0, -2.4, 1.7),
        u(0, -2.4, 0, -5.1),
        d(-3, 2.9, 0.9),
        d(3, 2.9, 0.9));
      break;
    case VEHICLE_KIND.SPACE_ROCKET:
      (c(() => {
        (n.moveTo(0, -6),
          n.quadraticCurveTo(3, -3, 2, 3),
          n.lineTo(-2, 3),
          n.quadraticCurveTo(-3, -3, 0, -6));
      }),
        c(() => {
          (n.moveTo(-2, 0), n.lineTo(-4, 4), n.lineTo(-2, 3));
        }),
        c(() => {
          (n.moveTo(2, 0), n.lineTo(4, 4), n.lineTo(2, 3));
        }),
        d(0, -1, 1),
        u(-1, 4, -0.5, 6, i.color),
        u(1, 4, 0.5, 6, i.color));
      break;
    default:
      c(() => {
        (n.moveTo(0, -5), n.lineTo(4.5, 0), n.lineTo(0, 5), n.lineTo(-4.5, 0));
      });
      break;
  }
  n.restore();
}
const Ii = 40,
  CX = 0.48,
  z4 = CX / Ii,
  kX = 12,
  LX = 0.1,
  pb = 0.006,
  IX = 128,
  mb = new Map(),
  pd = (n) => (n - Ii / 2) * z4,
  md = (n) => (Ii / 2 - n) * z4;
function PX(n, e) {
  const { data: t } = n;
  let i = new Uint8Array(Ii * Ii);
  for (let s = 0; s < i.length; s++) i[s] = t[s * 4 + 3] > 8 ? 1 : 0;
  for (let s = 0; s < e; s++) {
    const o = t.slice(),
      a = i.slice();
    for (let r = 0; r < Ii; r++)
      for (let l = 0; l < Ii; l++) {
        const c = r * Ii + l;
        if (i[c]) continue;
        let h = 0,
          d = 0,
          u = 0,
          f = 0;
        for (let p = -1; p <= 1; p++)
          for (let m = -1; m <= 1; m++) {
            const y = l + m,
              g = r + p;
            if (y < 0 || g < 0 || y >= Ii || g >= Ii) continue;
            const b = g * Ii + y;
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
function OX(n) {
  const e = new Uint8Array(Ii * Ii),
    t = (i, s) => (i < 0 || s < 0 || i >= Ii || s >= Ii ? 0 : e[s * Ii + i]);
  for (let i = 0; i < e.length; i++) e[i] = n[i] ? 255 : 0;
  for (let i = 0; i < Ii; i++)
    for (let s = 0; s < Ii; s++) {
      const o = i * Ii + s;
      n[o] &&
        (e[o] = Math.min(
          e[o],
          Math.min(t(s - 1, i), t(s, i - 1), t(s - 1, i - 1), t(s + 1, i - 1)) +
            1,
        ));
    }
  for (let i = Ii - 1; i >= 0; i--)
    for (let s = Ii - 1; s >= 0; s--) {
      const o = i * Ii + s;
      n[o] &&
        (e[o] = Math.min(
          e[o],
          Math.min(t(s + 1, i), t(s, i + 1), t(s + 1, i + 1), t(s - 1, i + 1)) +
            1,
        ));
    }
  return e;
}
class NX {
  constructor() {
    w(this, "pos", []);
    w(this, "nor", []);
    w(this, "uv", []);
  }
  quad(e, t, i) {
    for (const [s, o, a] of [
      [0, 1, 2],
      [0, 2, 3],
    ])
      for (const r of [s, o, a])
        (this.pos.push(e[r][0], e[r][1], e[r][2]),
          this.nor.push(t[0], t[1], t[2]),
          this.uv.push(i[r][0], i[r][1]));
  }
  geometry() {
    const e = new ci();
    (e.setAttribute("position", new It(this.pos, 3)),
      e.setAttribute("normal", new It(this.nor, 3)),
      e.setAttribute("uv", new It(this.uv, 2)),
      e.computeBoundingSphere());
    const t = $U(e, 1e-6);
    return (e.dispose(), t);
  }
}
function gb(n, e, t, i) {
  return { u0: n / Ii, u1: (e + 1) / Ii, v0: 1 - (i + 1) / Ii, v1: 1 - t / Ii };
}
