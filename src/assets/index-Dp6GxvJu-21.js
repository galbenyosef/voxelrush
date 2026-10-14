// index-Dp6GxvJu 21 — userdata
// Lines 34970-35220 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function _U(n, e) {
  var i;
  let t = Z0.get(n);
  if (
    !t &&
    ((t = new bi(JC(e))),
    (t.magFilter = t.minFilter = ji),
    (t.colorSpace = vi),
    (t.generateMipmaps = !1),
    Z0.set(n, t),
    Z0.size > 96)
  ) {
    const s = Z0.keys().next().value;
    ((i = Z0.get(s)) == null || i.dispose(), Z0.delete(s));
  }
  return t;
}
let wh;
function RU() {
  if (wh) return wh;
  const n = document.createElement("canvas");
  n.width = n.height = 16;
  const e = n.getContext("2d");
  for (let t = 0; t < 16; t++) {
    const i = 200 + ((t * 53) % 5) * 11;
    ((e.fillStyle = `rgb(${i},${i},${i})`), e.fillRect(t, 0, 1, 16));
  }
  return (
    (e.fillStyle = "rgba(255,255,255,.35)"),
    e.fillRect(0, 0, 16, 2),
    (wh = new bi(n)),
    (wh.magFilter = wh.minFilter = ji),
    (wh.colorSpace = vi),
    wh
  );
}
function Wl(n, e, t) {
  var l, c;
  const i = e === "custom" && KC(t) ? t : P2(e),
    s = e === "custom" ? i : e;
  if (n.userData.characterSkinKey === s) return;
  n.userData.characterSkinKey = s;
  const o = _U(s, i);
  n.traverse((h) => {
    const d = h;
    if (!d.isMesh || d.userData.skinPart === void 0) return;
    const u = d.userData.skinPart;
    if (!d.userData.skinUV) {
      const m = d.geometry.attributes.uv,
        y = d.userData.skinHalf;
      for (let g = 0; g < m.count; g++) {
        const b = Math.floor(g / 4),
          S = m.getX(g),
          M = m.getY(g),
          x = y === void 0 ? 1 - M : (1 - M) * 0.5 + y * 0.5;
        m.setXY(
          g,
          (b * 8 + S * 7.98 + 0.01) / 48,
          1 - (u * 8 + x * 7.98 + 0.01) / 48,
        );
      }
      ((m.needsUpdate = !0), (d.userData.skinUV = !0));
    }
    const f = d.material;
    f.color.set(16777215);
    const p = !!f.map;
    ((f.map = o), p || (f.needsUpdate = !0));
  });
  for (const h of ["eye-l", "eye-r", "mouth"]) {
    const d = n.getObjectByName(h);
    d && (d.visible = !1);
  }
  const a = n.getObjectByName("skin-head");
  if (a) {
    const h = a.getObjectByName("skin-ears");
    h &&
      (h.removeFromParent(),
      h.traverse((u) => {
        const f = u;
        f.isMesh && (f.geometry.dispose(), f.material.dispose());
      }));
    const d = i0(e).theme;
    if (["bear", "cat", "doge"].includes(d)) {
      const u = new pe();
      u.name = "skin-ears";
      for (const f of [-1, 1]) {
        const p = new le(
          new Ct(0.14, d === "bear" ? 0.13 : 0.2, 0.15),
          new gi({ color: Vc[i0(e).colors[1]] }),
        );
        (p.position.set(f * 0.19, 0.52, 0), u.add(p));
      }
      ((u.visible = !a.getObjectByName("armor-helmet")), a.add(u));
    }
  }
  if (a) {
    const h = a.getObjectByName("skin-hair");
    h &&
      (h.removeFromParent(),
      h.traverse((u) => {
        const f = u;
        f.isMesh && (f.geometry.dispose(), f.material.dispose());
      }));
    const d = i0(e);
    if (e !== "custom" && d.hair) {
      const u = new ze(Vc[d.colors[1]]),
        f = new ze(Vc[d.colors[4]]),
        p = new pe();
      p.name = "skin-hair";
      const m = () => new gi({ color: u, map: RU() }),
        y = (g, b, S, M, x, T, A = m()) => {
          const _ = new le(new Ct(g, b, S), A);
          return (_.position.set(M, x, T), p.add(_), _);
        };
      if (d.hair === "long") {
        y(0.54, 0.66, 0.09, 0, 0.18, 0.29);
        for (const g of [-1, 1]) y(0.07, 0.42, 0.22, g * 0.285, 0.14, 0.1);
      } else if (d.hair === "bob") {
        y(0.54, 0.36, 0.08, 0, 0.3, 0.29);
        for (const g of [-1, 1]) y(0.06, 0.26, 0.2, g * 0.28, 0.27, 0.1);
      } else {
        y(0.2, 0.16, 0.12, 0, 0.36, 0.31);
        for (let g = 0; g < 5; g++)
          y(
            0.11 - g * 0.008,
            0.11,
            0.1,
            0,
            0.24 - g * 0.105,
            0.33 + g * 0.012,
          ).rotation.x = 0.12;
        y(0.08, 0.05, 0.08, 0, -0.29, 0.39, new gi({ color: f }));
      }
      a.add(p);
    }
  }
  const r = i0(e).theme === "muscle";
  ((l = n.getObjectByName("skin-body")) == null ||
    l.scale.set(r ? 1.2 : 1, 1, r ? 1.2 : 1),
    (c = n.getObjectByName("armor")) == null ||
      c.scale.set(r ? 1.2 : 1, 1, r ? 1.2 : 1));
}
function CU(n) {
  return XC(n).albedo;
}
const bw = new WeakMap(),
  ww = new WeakMap(),
  Mw = new WeakMap(),
  kU = () => {
    ZC.value = performance.now() / 1e3;
  };
function ek(n) {
  var t;
  const e = n.getObjectByName("cosmetic-counter");
  if (e) {
    (e.removeFromParent(), e.geometry.dispose());
    const i = e.material;
    ((t = i.map) == null || t.dispose(), i.dispose());
  }
}
function tk(n) {
  const e = bw.get(n);
  e &&
    ((n.material = e.original),
    (n.onBeforeRender = e.render),
    e.paint.forEach((t) => t.dispose()),
    bw.delete(n));
}
function Zl(n) {
  (ww.delete(n), Mw.delete(n), n.traverse((e) => tk(e)), ek(n));
}
function LU(n) {
  (n.traverse((e) => {
    e.isMesh && (e.userData.skinEligible = !0);
  }),
    (n.userData.skinTagged = !0));
}
function IU(n, e, t) {
  const i = document.createElement("canvas");
  ((i.width = 256), (i.height = 80));
  const s = i.getContext("2d"),
    o = e ? "#ffb347" : "#ff5a66",
    a = s.createLinearGradient(0, 0, 0, 80);
  (a.addColorStop(0, "#1c232b"),
    a.addColorStop(1, "#07090c"),
    (s.fillStyle = a),
    s.beginPath(),
    s.roundRect(0, 0, 256, 80, 10),
    s.fill(),
    (s.strokeStyle = "#4a5560"),
    (s.lineWidth = 3),
    s.beginPath(),
    s.roundRect(2, 2, 252, 76, 9),
    s.stroke(),
    (s.fillStyle = "#0b0f12"),
    s.fillRect(12, 22, 232, 48),
    (s.font = "700 13px monospace"),
    (s.fillStyle = "#8c98a3"),
    (s.textAlign = "left"),
    s.fillText(t + "™", 14, 16),
    (s.fillStyle = o),
    s.beginPath(),
    s.arc(238, 11, 4, 0, Math.PI * 2),
    s.fill(),
    (s.font = "700 42px monospace"),
    (s.textAlign = "center"),
    (s.textBaseline = "middle"),
    (s.fillStyle = "rgba(255,255,255,.05)"),
    s.fillText(n === "ERROR" ? "88888" : "888888", 128, 47),
    (s.shadowColor = o),
    (s.shadowBlur = 14),
    (s.fillStyle = o),
    s.fillText(n, 128, 47),
    (s.shadowBlur = 0),
    (s.fillStyle = "rgba(255,255,255,.07)"),
    s.fillRect(12, 22, 232, 14));
  const r = new bi(i);
  return ((r.colorSpace = vi), (r.anisotropy = 4), r);
}
const PU = new Set([256, 257, 258, 259, 375, 376, 395]);
function OU(n, e, t) {
  var r;
  for (let l = n; l && l !== e; l = l.parent)
    if (
      l.userData.skinKeep ||
      l.name === "standard-cartridge" ||
      l.name === "minigun-barrels"
    )
      return !0;
  const i = Ti(e.userData.skinItem) || e.userData.skinItem,
    s = n.geometry;
  s.boundingSphere || s.computeBoundingSphere();
  const o =
      (((r = s.boundingSphere) == null ? void 0 : r.radius) ?? 1) *
      Math.max(n.scale.x, n.scale.y, n.scale.z),
    a = t.every((l) => (l.shininess ?? 0) >= 50);
  if (PU.has(i)) {
    const l = s.parameters;
    if (
      ((s.type === "CylinderGeometry" || s.type === "ConeGeometry") &&
        Math.max(
          (l == null ? void 0 : l.radiusTop) ?? 0,
          (l == null ? void 0 : l.radiusBottom) ?? 0,
          (l == null ? void 0 : l.radius) ?? 0,
        ) < 0.026) ||
      (a && o < 0.06)
    )
      return !0;
  } else if (a && o < 0.025) return !0;
  return !1;
}
