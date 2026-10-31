// index-BeUlFSPp 51 — userdata
// Lines 46065-46316 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function dO(s) {
  const e = document.createElement("canvas");
  e.width = e.height = 48;
  const t = e.getContext("2d");
  for (let i = 0; i < 2304; i++)
    ((t.fillStyle = D0[parseInt(s[i], 32)] ?? D0[0]),
      t.fillRect(i % 48, Math.floor(i / 48), 1, 1));
  return e;
}
function rK(s, e) {
  let t = ou.get(s);
  if (
    !t &&
    ((t = new Si(dO(e))),
    (t.magFilter = t.minFilter = as),
    (t.colorSpace = Ii),
    (t.generateMipmaps = !1),
    ou.set(s, t),
    ou.size > 96)
  ) {
    const i = ou.keys().next().value;
    (ou.get(i)?.dispose(), ou.delete(i));
  }
  return t;
}
let hh;
function lK() {
  if (hh) return hh;
  const s = document.createElement("canvas");
  s.width = s.height = 16;
  const e = s.getContext("2d");
  for (let t = 0; t < 16; t++) {
    const i = 200 + ((t * 53) % 5) * 11;
    ((e.fillStyle = `rgb(${i},${i},${i})`), e.fillRect(t, 0, 1, 16));
  }
  return (
    (e.fillStyle = "rgba(255,255,255,.35)"),
    e.fillRect(0, 0, 16, 2),
    (hh = new Si(s)),
    (hh.magFilter = hh.minFilter = as),
    (hh.colorSpace = Ii),
    hh
  );
}
function Oc(s, e, t) {
  const i = e === "custom" && sO(t) ? t : Sy(e),
    n = e === "custom" ? i : e;
  if (s.userData.characterSkinKey === n) return;
  s.userData.characterSkinKey = n;
  const o = rK(n, i);
  s.traverse((l) => {
    const c = l;
    if (!c.isMesh || c.userData.skinPart === void 0) return;
    const h = c.userData.skinPart;
    if (!c.userData.skinUV) {
      const f = c.geometry.attributes.uv,
        p = c.userData.skinHalf;
      for (let m = 0; m < f.count; m++) {
        const g = Math.floor(m / 4),
          y = f.getX(m),
          b = f.getY(m),
          S = p === void 0 ? 1 - b : (1 - b) * 0.5 + p * 0.5;
        f.setXY(
          m,
          (g * 8 + y * 7.98 + 0.01) / 48,
          1 - (h * 8 + S * 7.98 + 0.01) / 48,
        );
      }
      ((f.needsUpdate = !0), (c.userData.skinUV = !0));
    }
    const d = c.material;
    d.color.set(16777215);
    const u = !!d.map;
    ((d.map = o), u || (d.needsUpdate = !0));
  });
  for (const l of ["eye-l", "eye-r", "mouth"]) {
    const c = s.getObjectByName(l);
    c && (c.visible = !1);
  }
  const a = s.getObjectByName("skin-head");
  if (a) {
    const l = a.getObjectByName("skin-ears");
    l &&
      (l.removeFromParent(),
      l.traverse((h) => {
        const d = h;
        d.isMesh && (d.geometry.dispose(), d.material.dispose());
      }));
    const c = _0(e).theme;
    if (["bear", "cat", "doge"].includes(c)) {
      const h = new re();
      h.name = "skin-ears";
      for (const d of [-1, 1]) {
        const u = new Q(
          new kt(0.14, c === "bear" ? 0.13 : 0.2, 0.15),
          new Pi({ color: D0[_0(e).colors[1]] }),
        );
        (u.position.set(d * 0.19, 0.52, 0), h.add(u));
      }
      ((h.visible = !a.getObjectByName("armor-helmet")), a.add(h));
    }
  }
  if (a) {
    const l = a.getObjectByName("skin-hair");
    l &&
      (l.removeFromParent(),
      l.traverse((h) => {
        const d = h;
        d.isMesh && (d.geometry.dispose(), d.material.dispose());
      }));
    const c = _0(e);
    if (e !== "custom" && c.hair) {
      const h = new Ge(D0[c.colors[1]]),
        d = new Ge(D0[c.colors[4]]),
        u = new re();
      u.name = "skin-hair";
      const f = () => new Pi({ color: h, map: lK() }),
        p = (m, g, y, b, S, M, E = f()) => {
          const A = new Q(new kt(m, g, y), E);
          return (A.position.set(b, S, M), u.add(A), A);
        };
      if (c.hair === "long") {
        p(0.54, 0.66, 0.09, 0, 0.18, 0.29);
        for (const m of [-1, 1]) p(0.07, 0.42, 0.22, m * 0.285, 0.14, 0.1);
      } else if (c.hair === "bob") {
        p(0.54, 0.36, 0.08, 0, 0.3, 0.29);
        for (const m of [-1, 1]) p(0.06, 0.26, 0.2, m * 0.28, 0.27, 0.1);
      } else {
        p(0.2, 0.16, 0.12, 0, 0.36, 0.31);
        for (let m = 0; m < 5; m++)
          p(
            0.11 - m * 0.008,
            0.11,
            0.1,
            0,
            0.24 - m * 0.105,
            0.33 + m * 0.012,
          ).rotation.x = 0.12;
        p(0.08, 0.05, 0.08, 0, -0.29, 0.39, new Pi({ color: d }));
      }
      a.add(u);
    }
  }
  const r = _0(e).theme === "muscle";
  (s.getObjectByName("skin-body")?.scale.set(r ? 1.2 : 1, 1, r ? 1.2 : 1),
    s.getObjectByName("armor")?.scale.set(r ? 1.2 : 1, 1, r ? 1.2 : 1),
    a && FA(a));
}
function cK(s) {
  return lO(s).albedo;
}
const QS = new WeakMap(),
  JS = new WeakMap(),
  e4 = new WeakMap(),
  hK = () => {
    cO.value = performance.now() / 1e3;
  };
function uO(s) {
  const e = s.getObjectByName("cosmetic-counter");
  if (e) {
    (e.removeFromParent(), e.geometry.dispose());
    const t = e.material;
    (t.map?.dispose(), t.dispose());
  }
}
function fO(s) {
  const e = QS.get(s);
  e &&
    ((s.material = e.original),
    (s.onBeforeRender = e.render),
    e.paint.forEach((t) => t.dispose()),
    QS.delete(s));
}
function Gc(s) {
  (JS.delete(s), e4.delete(s), s.traverse((e) => fO(e)), uO(s));
}
function dK(s) {
  (s.traverse((e) => {
    e.isMesh && (e.userData.skinEligible = !0);
  }),
    (s.userData.skinTagged = !0));
}
function uK(s, e, t) {
  const i = document.createElement("canvas");
  ((i.width = 256), (i.height = 80));
  const n = i.getContext("2d"),
    o = e ? "#ffb347" : "#ff5a66",
    a = n.createLinearGradient(0, 0, 0, 80);
  (a.addColorStop(0, "#1c232b"),
    a.addColorStop(1, "#07090c"),
    (n.fillStyle = a),
    n.beginPath(),
    n.roundRect(0, 0, 256, 80, 10),
    n.fill(),
    (n.strokeStyle = "#4a5560"),
    (n.lineWidth = 3),
    n.beginPath(),
    n.roundRect(2, 2, 252, 76, 9),
    n.stroke(),
    (n.fillStyle = "#0b0f12"),
    n.fillRect(12, 22, 232, 48),
    (n.font = "700 13px monospace"),
    (n.fillStyle = "#8c98a3"),
    (n.textAlign = "left"),
    n.fillText(t + "™", 14, 16),
    (n.fillStyle = o),
    n.beginPath(),
    n.arc(238, 11, 4, 0, Math.PI * 2),
    n.fill(),
    (n.font = "700 42px monospace"),
    (n.textAlign = "center"),
    (n.textBaseline = "middle"),
    (n.fillStyle = "rgba(255,255,255,.05)"),
    n.fillText(s === "ERROR" ? "88888" : "888888", 128, 47),
    (n.shadowColor = o),
    (n.shadowBlur = 14),
    (n.fillStyle = o),
    n.fillText(s, 128, 47),
    (n.shadowBlur = 0),
    (n.fillStyle = "rgba(255,255,255,.07)"),
    n.fillRect(12, 22, 232, 14));
  const r = new Si(i);
  return ((r.colorSpace = Ii), (r.anisotropy = 4), r);
}
const fK = new Set([256, 257, 258, 259, 375, 376, 395, 461, 462, 463]);
function pK(s, e, t) {
  for (let r = s; r && r !== e; r = r.parent)
    if (
      r.userData.skinKeep ||
      r.name === "standard-cartridge" ||
      r.name === "minigun-barrels"
    )
      return !0;
  const i = ai(e.userData.skinItem) || e.userData.skinItem,
    n = s.geometry;
  n.boundingSphere || n.computeBoundingSphere();
  const o =
      (n.boundingSphere?.radius ?? 1) *
      Math.max(s.scale.x, s.scale.y, s.scale.z),
    a = t.every((r) => (r.shininess ?? 0) >= 50);
  if (fK.has(i)) {
    const r = n.parameters;
    if (
      ((n.type === "CylinderGeometry" || n.type === "ConeGeometry") &&
        Math.max(r?.radiusTop ?? 0, r?.radiusBottom ?? 0, r?.radius ?? 0) <
          0.026) ||
      (a && o < 0.06)
    )
      return !0;
  } else if (a && o < 0.025) return !0;
  return !1;
}
