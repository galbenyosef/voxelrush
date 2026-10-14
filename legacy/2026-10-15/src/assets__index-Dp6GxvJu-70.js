// assets__index-Dp6GxvJu 70 — add
// Lines 49870-50169 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function qV(n) {
  if (aa(n)) {
    const i = new pe(),
      s = Mk(n);
    (s.scale.setScalar(0.42), (s.rotation.y = -0.3), i.add(s));
    const o = new $t();
    return (i.add(o), qn(i, o, null, null));
  }
  const e = Zc(n);
  if (e) {
    const i = fG(e),
      s = new $t();
    return (i.add(s), qn(i, s, null, null));
  }
  const t = Ti(n);
  if (t) {
    const i = So(n);
    switch (t) {
      case E.AK47:
        return KT(i);
      case E.GLOCK:
        return YT(i);
      case E.AWP:
        return jT(i);
      case E.SHOTGUN:
        return QT(i);
    }
  }
  switch (n) {
    case E.MILITARY_MEDKIT: {
      const i = new pe(),
        s = vk(n);
      (s.scale.setScalar(0.7), s.rotation.set(0.12, -0.35, -0.08), i.add(s));
      const o = new $t();
      return (i.add(o), qn(i, o, null, null));
    }
    case E.AMMO_9MM:
    case E.AMMO_762:
    case E.AMMO_338:
      return VV(n);
    case E.FLASHLIGHT: {
      const i = new pe(),
        s = c1(0, 0, -0.08);
      (s.scale.setScalar(1.9),
        (s.rotation.x = -0.12),
        i.add(s),
        ln(i, "hand-r", 0, -0.004, -0.02),
        (i.getObjectByName("hand-r").userData.along = !0));
      const o = new $t();
      return (o.position.set(0, 0, -0.18), i.add(o), qn(i, o, null, null));
    }
    case E.MINIGUN:
      return WV();
    case E.SHOTGUN:
      return QT();
    case E.AMMO_762_HE:
    case E.AMMO_338_HE:
    case E.AMMO_SHELL:
    case E.AMMO_SHELL_HE:
      return $V(n);
    case E.AK47:
      return KT();
    case E.GLOCK:
      return YT();
    case E.AWP:
      return jT();
    case E.RPG:
      return AV();
    case E.GRENADE_LAUNCHER:
      return xV();
    case E.AMMO_40MM:
      return TV();
    case E.C4:
    case E.DETONATOR: {
      const i = new pe(),
        s = qS(n === E.DETONATOR);
      (s.scale.setScalar(0.65), i.add(s));
      const o = new $t();
      return (i.add(o), qn(i, o, null, null));
    }
    case E.GRENADE:
      return _V();
    case E.AXE:
      return XT();
    case E.COMBAT_KNIFE:
      return RV();
    case E.RADIO_MODULE: {
      const i = new pe();
      i.scale.setScalar(0.75);
      const s = (a, r, l, c, h, d, u) => {
        const f = new le(new Ct(c, h, d), new gi({ color: u }));
        (f.position.set(a, r, l), i.add(f));
      };
      (s(0, 0, 0, 0.25, 0.3, 0.12, 4348488),
        s(0, 0.025, -0.068, 0.19, 0.11, 0.02, 1257e3),
        s(-0.03, 0.03, -0.08, 0.09, 0.014, 0.01, 11531458),
        s(0.09, 0.27, 0.015, 0.018, 0.3, 0.018, 9279884),
        s(-0.065, -0.095, -0.073, 0.035, 0.025, 0.015, 14728822));
      const o = new $t();
      return (i.add(o), qn(i, o, null, null));
    }
    case E.WELDER:
      return kV();
    case E.DRILL_METAL:
      return od(0);
    case E.DRILL_DIAMOND:
      return od(1);
    case E.DRILL_TITANIUM:
      return od(2);
    case E.DRILL_COMPOSITE:
      return od(3);
    case E.DRILL_LASER:
      return od(4);
    case E.LUNAR_DRILL:
      return od(5);
    case E.SPACE_ROCKET:
      return zV();
    case E.CHAINSAW_BASIC:
      return T5(0);
    case E.CHAINSAW_PRO:
      return T5(1);
    case E.CHAINSAW_INDUSTRIAL:
      return T5(2);
    case E.WHEAT_SEEDS:
      return IV();
    case E.FERTILIZER:
      return PV();
    case E.FISHING_ROD:
      return DV();
    default:
      return XT();
  }
}
const JT = new WeakMap();
function Yk(n, e) {
  let t = JT.get(n);
  t ||
    ((t = D2.map((i, s) => n.getObjectByName(`rod-seg-${s}`)).filter(
      (i) => !!i,
    )),
    JT.set(n, t));
  for (let i = 0; i < t.length; i++) t[i].rotation.x = -e * OV[i] * 1.5;
}
const KV =
  "#hotbar,#hpwrap,#hint,#equipment-status,#compass,#minimap,#voice-hud > button,#voice-hud > div,#questhud,#balancehud,#vehhud,#targetscore,#cropprogress,#mobile-stick-zone,.mobile-action,.mobile-action .m-cap,.world-border-notice,.claim-notice,.property-notice,.operation-card,#raidhud,#chatlog .msg:not(.faded)";
let eA = 0,
  Lw = !1,
  Ag,
  Zf;
function jk() {
  if (!Lw || !Zf) return;
  let n = document.getElementById("weapon-inspect-label");
  n ||
    ((n = document.createElement("div")),
    (n.id = "weapon-inspect-label"),
    (n.role = "status"),
    document.body.append(n));
  const e = Zf;
  ((Zf = void 0),
    (n.textContent =
      e.name +
      (e.detail
        ? `
` + e.detail
        : "")),
    n.style.setProperty("--skin-color", e.color),
    (n.hidden = !1),
    clearTimeout(Ag),
    (Ag = setTimeout(() => {
      n.hidden = !0;
    }, 2e3)),
    _g(!0));
}
function YV(n, e, t = "") {
  ((Zf = { name: n, color: e, detail: t }), jk());
}
function tA() {
  ((Zf = void 0), clearTimeout(Ag));
  const n = document.getElementById("weapon-inspect-label");
  n && (n.hidden = !0);
}
function iA(n) {
  if (Lw !== n)
    if (((Lw = n), n)) jk();
    else {
      clearTimeout(Ag);
      const e = document.getElementById("weapon-inspect-label");
      e && (e.hidden = !0);
    }
}
function A5(n) {
  if (!n.getClientRects().length) return !1;
  if (typeof n.checkVisibility == "function")
    return n.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 });
  for (let e = n; e; e = e.parentElement) {
    const t = getComputedStyle(e);
    if (t.visibility === "hidden" || t.opacity === "0") return !1;
  }
  return !0;
}
function jV(n, e) {
  return (
    n.left < e.right + 8 &&
    n.right > e.left - 8 &&
    n.top < e.bottom + 8 &&
    n.bottom > e.top - 8
  );
}
function _g(n = !1) {
  var a;
  const e = performance.now();
  if (!n && e < eA) return;
  eA = e + 180;
  const t = innerWidth,
    i = innerHeight,
    s = 12,
    o = Array.from(document.querySelectorAll(KV))
      .filter(A5)
      .map((r) => r.getBoundingClientRect());
  o.push({
    left: t / 2 - 32,
    right: t / 2 + 32,
    top: i / 2 - 32,
    bottom: i / 2 + 32,
  });
  for (const r of ["ammo", "weapon-inspect-label"]) {
    const l = document.getElementById(r);
    if (
      !l ||
      l.hidden ||
      !l.textContent ||
      !l.getClientRects().length ||
      ((l.style.visibility = ""), !A5(l))
    )
      continue;
    const c = r === "weapon-inspect-label",
      h = l.currentCSSZoom || 1,
      d =
        !c && document.body.classList.contains("mobile")
          ? document.getElementById("mobfire")
          : null,
      u = d && A5(d) ? d.getBoundingClientRect() : null,
      f = c ? t / 2 : u ? u.left + u.width / 2 : t - s,
      p = c
        ? Math.max(
            74,
            (((a = document.getElementById("compass")) == null
              ? void 0
              : a.getBoundingClientRect().bottom) ?? 0) + 12,
          )
        : u
          ? u.top - 6
          : i - s;
    let m;
    for (const y of [c && t < 600 ? 220 : 280, 220, 160]) {
      l.style.maxWidth = `${Math.min(y, t - 2 * s) / h}px`;
      const g = l.getBoundingClientRect(),
        b = g.width,
        S = g.height,
        M = c || u ? f - b / 2 : f - b,
        x = c ? p : p - S,
        T = [
          M,
          s,
          t - s - b,
          ...o.flatMap((_) => [_.right + 10, _.left - b - 10]),
        ],
        A = [
          x,
          s,
          i - s - S,
          ...o.flatMap((_) => [_.bottom + 10, _.top - S - 10]),
        ];
      for (const _ of T)
        for (const C of A) {
          if (_ < s || C < s || _ + b > t - s || C + S > i - s) continue;
          const R = { left: _, right: _ + b, top: C, bottom: C + S };
          if (o.some((N) => jV(R, N))) continue;
          const L = Math.abs(_ - M) + Math.abs(C - x) * 1.4 + (280 - y) * 2;
          (!m || L < m.score) && (m = { x: _, y: C, w: b, h: S, score: L });
        }
      if (m) {
        l.style.maxWidth = `${Math.min(y, t - 2 * s) / h}px`;
        break;
      }
    }
    m
      ? ((l.style.left = `${Math.round(m.x / h)}px`),
        (l.style.top = `${Math.round(m.y / h)}px`),
        o.push({ left: m.x, right: m.x + m.w, top: m.y, bottom: m.y + m.h }))
      : (l.style.visibility = "hidden");
  }
}
window.addEventListener("resize", () => _g(!0));
function lr() {
  return (
    (typeof matchMedia < "u" && matchMedia("(pointer: coarse)").matches) ||
    (typeof navigator < "u" && navigator.maxTouchPoints > 0)
  );
}
