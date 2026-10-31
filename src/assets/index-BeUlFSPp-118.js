// index-BeUlFSPp 118 — math
// Lines 66025-66130 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Pp(s) {
  const e = s.hpCanvas.getContext("2d"),
    t = !!s.hpBar.userData.raid,
    i = s.hpCanvas.width,
    n = s.hpCanvas.height,
    o = i / 2;
  e.clearRect(0, 0, i, n);
  let a = 36;
  const r = s.hpBar.userData.side;
  if (t && r === "ally") {
    ((e.fillStyle = "rgba(6, 46, 52, 0.74)"),
      (e.strokeStyle = "rgba(87, 220, 187, 0.9)"),
      (e.lineWidth = 3));
    const h = 12,
      d = 8,
      u = i - 24,
      f = 44,
      p = 10;
    (e.beginPath(),
      e.moveTo(h + p, d),
      e.arcTo(h + u, d, h + u, d + f, p),
      e.arcTo(h + u, d + f, h, d + f, p),
      e.arcTo(h, d + f, h, d, p),
      e.arcTo(h, d, h + u, d, p),
      e.closePath(),
      e.fill(),
      e.stroke(),
      (e.font = "bold 26px sans-serif"),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      (e.fillStyle = "#8ff0d8"),
      e.fillText(`${I("ALLY", "СВОЙ")} · ${to(s.type)}`, o, 31),
      (e.textBaseline = "alphabetic"),
      (a = 76));
  } else if (t) {
    ((e.fillStyle = "rgba(70, 8, 8, 0.72)"),
      (e.strokeStyle = "rgba(255, 90, 70, 0.85)"),
      (e.lineWidth = 3));
    const h = 12,
      d = 8,
      u = i - 24,
      f = 44,
      p = 10;
    if (
      (e.beginPath(),
      e.moveTo(h + p, d),
      e.arcTo(h + u, d, h + u, d + f, p),
      e.arcTo(h + u, d + f, h, d + f, p),
      e.arcTo(h, d + f, h, d, p),
      e.arcTo(h, d, h + u, d, p),
      e.closePath(),
      e.fill(),
      e.stroke(),
      (e.font = "bold 26px sans-serif"),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      (e.fillStyle = "#ff6a55"),
      e.fillText(z("enemyTag", { vehicle: to(s.type) }), o, 31),
      (e.textBaseline = "alphabetic"),
      (a = 76),
      r === "enemy")
    ) {
      s.hpBar.material.map.needsUpdate = !0;
      return;
    }
  } else
    ((e.font = "600 23px sans-serif"),
      (e.textAlign = "center"),
      (e.fillStyle = "#ffffff"),
      (e.strokeStyle = "#071018"),
      (e.lineWidth = 4),
      e.strokeText(to(s.type), o, 25),
      e.fillText(to(s.type), o, 25));
  ((e.fillStyle = "rgba(4,12,18,0.92)"), e.fillRect(o - 100, a, 200, 12));
  const l = Oe(s.hp / s.maxHp, 0, 1),
    c = s.hpBar.userData.relation === "enemy" || s.ownerName === Yo;
  ((e.fillStyle = c
    ? l > 0.5
      ? "#e05040"
      : l > 0.25
        ? "#d98a2f"
        : "#ff3a2a"
    : s.hpBar.userData.relation === "ally"
      ? "#57dcbb"
      : "#c0c9d2"),
    e.fillRect(o - 98, a + 2, 196 * l, 8),
    (s.hpBar.material.map.needsUpdate = !0));
}
const $8 = new Map();
function NJ(s) {
  let e = $8.get(s);
  if (e === void 0) {
    e = 0;
    for (const t of lo[s] ?? [])
      e = Math.max(
        e,
        Math.hypot(
          Math.max(Math.abs(t.min.x), Math.abs(t.max.x)),
          Math.max(Math.abs(t.min.y), Math.abs(t.max.y)),
          Math.max(Math.abs(t.min.z), Math.abs(t.max.z)),
        ),
      );
    $8.set(s, (e += 0.5));
  }
  return e;
}
