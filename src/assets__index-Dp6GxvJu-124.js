// assets__index-Dp6GxvJu 124 — math
// Lines 74959-75154 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
let ud;
function jj(n) {
  if (!ud) {
    ((ud = document.createElement("canvas")), (ud.width = ud.height = 40));
    const e = ud.getContext("2d"),
      t = ["black_clay", "polished_stone", "yellow_clay", "cyan_clay"].map(
        (l) => de.find((c) => c.name === l),
      ),
      i = new Map(t.map((l) => [l.tex[0], l.color])),
      s = t[3].tex[0],
      o = ([l, c, h]) => [20 + (l - h) * 20, 31 + (l + h - 1) * 5.5 - c * 26],
      a = [],
      r = (l, c, h) => {
        const d = i.get(c),
          u = c === s ? 1.4 : 1,
          f = [(d >> 16) & 255, (d >> 8) & 255, d & 255].map((m) =>
            Math.min(255, Math.round(m * h * u)),
          ),
          p =
            l.reduce((m, [y, g, b]) => m + y + b + (g * 11) / 26, 0) / l.length;
        a.push({ points: l.map(o), depth: p, color: `rgb(${f.join(",")})` });
      };
    for (const {
      box: [l, c, h, d, u, f],
      tile: p,
    } of ru(v.OWNERSHIP_TOTEM))
      (r(
        [
          [d, c, h],
          [d, c, f],
          [d, u, f],
          [d, u, h],
        ],
        p,
        0.8,
      ),
        r(
          [
            [l, c, f],
            [d, c, f],
            [d, u, f],
            [l, u, f],
          ],
          p,
          1,
        ),
        r(
          [
            [l, u, h],
            [d, u, h],
            [d, u, f],
            [l, u, f],
          ],
          p,
          1.2,
        ));
    ((e.fillStyle = "rgba(0,0,0,.2)"),
      e.beginPath(),
      e.ellipse(20, 36, 15, 2, 0, 0, Math.PI * 2),
      e.fill());
    for (const { points: l, color: c } of a.sort((h, d) => h.depth - d.depth))
      (e.beginPath(),
        l.forEach(([h, d], u) => (u ? e.lineTo(h, d) : e.moveTo(h, d))),
        e.closePath(),
        (e.fillStyle = c),
        e.fill());
  }
  n.drawImage(ud, 0, 0);
}
let Ys, uI;
function ar() {
  (clearTimeout(uI), Ys && ((Ys.hidden = !0), Ys.classList.add("hidden")));
}
function Fm(n, e, t) {
  if (!z.itemTooltips || !n.dataset.itemInfo || !n.isConnected) {
    ar();
    return;
  }
  (Ys ||
    ((Ys = document.createElement("div")),
    (Ys.id = "item-tooltip"),
    (Ys.role = "tooltip"),
    Object.assign(Ys.style, {
      position: "fixed",
      zIndex: "10000",
      pointerEvents: "none",
      whiteSpace: "pre-line",
      maxWidth: "min(320px, calc(100vw - 24px))",
      padding: "10px 13px",
      border: "1px solid #768899",
      borderRadius: "7px",
      background: "#101824f5",
      color: "#eef4ff",
      font: "13px/1.5 monospace",
      boxShadow: "0 5px 22px #0008",
    }),
    document.body.append(Ys),
    document.addEventListener("keydown", ar),
    document.addEventListener("scroll", ar, !0)),
    (Ys.style.color = n.style.getPropertyValue("--skin-color") || "#eef4ff"),
    (Ys.textContent = [n.dataset.itemInfo, n.dataset.itemSale].filter(Boolean)
      .join(`
`)),
    (Ys.hidden = !1),
    Ys.classList.remove("hidden"),
    (Ys.style.left = `${Math.max(8, Math.min(e + 14, innerWidth - Ys.offsetWidth - 8))}px`),
    (Ys.style.top = `${Math.max(8, Math.min(t + 18, innerHeight - Ys.offsetHeight - 8))}px`));
}
function Xj(n) {
  ((n.tabIndex = 0),
    n.addEventListener("pointerenter", (e) => {
      e.pointerType !== "touch" && Fm(n, e.clientX, e.clientY);
    }),
    n.addEventListener("pointermove", (e) => {
      e.pointerType !== "touch" && Fm(n, e.clientX, e.clientY);
    }),
    n.addEventListener("pointerleave", ar),
    n.addEventListener("pointerdown", (e) => {
      (ar(), e.pointerType === "touch" && Fm(n, e.clientX, e.clientY - 95));
    }),
    n.addEventListener("pointerup", (e) => {
      e.pointerType === "touch" && (uI = setTimeout(ar, 2200));
    }),
    n.addEventListener("pointercancel", ar),
    n.addEventListener("focus", () => {
      const e = n.getBoundingClientRect();
      Fm(n, e.left, e.bottom);
    }),
    n.addEventListener("blur", ar));
}
function Zj(n) {
  const e = n;
  return (
    !!e &&
    Number.isSafeInteger(e.radius) &&
    e.radius >= 0 &&
    e.radius <= 1e6 &&
    Number.isFinite(e.centerX) &&
    Number.isFinite(e.centerZ) &&
    Math.abs(e.centerX) <= 1e6 &&
    Math.abs(e.centerZ) <= 1e6
  );
}
function D4(n, e, t, i = 0) {
  return (
    Number.isFinite(e) &&
    Number.isFinite(t) &&
    (n.radius === 0 ||
      Math.max(Math.abs(e - n.centerX), Math.abs(t - n.centerZ)) <=
        Math.max(0, n.radius - i))
  );
}
function lb(n, e, t, i) {
  return (
    n.radius === 0 ||
    (e + i > n.centerX - n.radius &&
      e < n.centerX + n.radius &&
      t + i > n.centerZ - n.radius &&
      t < n.centerZ + n.radius)
  );
}
const fI = 16384,
  B4 = (n) =>
    n === E.AMMO_762_HE || n === E.AMMO_338_HE || n === E.AMMO_SHELL_HE,
  pI = (n) => n === E.ROCKET_GUIDED || B4(n) || Object.values(v0).includes(n);
function Hc(n) {
  const e = Ti(n) || n;
  return e === E.RPG
    ? [E.ROCKET, E.ROCKET_GUIDED]
    : e === E.AK47
      ? [E.AMMO_762, E.AMMO_762_HE]
      : e === E.AWP
        ? [E.AMMO_338, E.AMMO_338_HE]
        : e === E.SHOTGUN
          ? [E.AMMO_SHELL, E.AMMO_SHELL_HE]
          : v0[n]
            ? [v0[n]]
            : [];
}
function sp(n, e) {
  const t = Hc(n);
  return t[e !== void 0 && e !== 65535 && e & fI ? 1 : 0] ?? t[0] ?? 0;
}
function Ug(n, e) {
  return n === void 0 || n === 65535 ? e : Math.min(e, Math.max(0, n & 16383));
}
function jd(n, e) {
  return (
    Math.max(0, Math.min(16383, Math.floor(n))) |
    (B4(e) || e === E.ROCKET_GUIDED ? fI : 0)
  );
}
function s_(n, e, t) {
  const i = Hc(n);
  return i.includes(e) && t(e) > 0 ? e : (i.find((s) => t(s) > 0) ?? 0);
}
