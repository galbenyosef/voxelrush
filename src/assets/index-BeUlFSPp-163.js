// index-BeUlFSPp 163 — line
// Lines 93551-93878 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const wse = 0.011,
  Mse = 0.02,
  Sse = 1.6,
  Ese = new k();
class DN {
  constructor(e) {
    this.scene = e;
  }
  line = null;
  spot = null;
  get visible() {
    return !!this.line?.visible;
  }
  show(e, t, i, n) {
    if (!this.line) {
      const h = bse(),
        d = new oi();
      (d.setAttribute("position", new qt(new Float32Array(6), 3)),
        d.setAttribute(
          "color",
          new qt(new Float32Array([1, 0.07, 0.05, 0.8, 1, 0.07, 0.05, 0.3]), 4),
        ),
        (this.line = new md(d, h.line)),
        (this.line.frustumCulled = !1),
        (this.line.renderOrder = zi.tracer),
        (this.spot = new Ws(h.spot)),
        (this.spot.renderOrder = zi.tracer),
        this.scene.add(this.line, this.spot));
    }
    const o = this.line.geometry.attributes.position;
    (o.setXYZ(0, e.x, e.y, e.z),
      o.setXYZ(1, t.x, t.y, t.z),
      (o.needsUpdate = !0),
      (this.line.visible = !0));
    const a = this.spot;
    if (((a.visible = i), !i)) return;
    const r = n.getWorldPosition(Ese),
      l = r.distanceTo(t);
    a.position
      .copy(t)
      .addScaledVector(r.sub(t).normalize(), Math.min(0.03, l * 0.5));
    const c = ni.clamp(
      l * 2 * Math.tan(ni.degToRad(n.fov) / 2) * wse,
      Mse,
      Sse,
    );
    a.scale.set(c, c, 1);
  }
  hide() {
    this.line && ((this.line.visible = !1), (this.spot.visible = !1));
  }
  dispose() {
    this.line &&
      (this.scene.remove(this.line, this.spot),
      this.line.geometry.dispose(),
      (this.line = null),
      (this.spot = null));
  }
}
const $k = [
    3832789, 13979450, 3855723, 14006330, 10173141, 3852757, 13974168, 8359754,
  ],
  Ase = new Set([
    w.RADIO_MODULE,
    w.FISHING_ROD,
    w.FERTILIZER,
    w.WHEAT_SEEDS,
    w.GRENADE_LAUNCHER,
    w.AMMO_40MM,
    w.AMMO_9MM,
    w.AMMO_762,
    w.AMMO_338,
    w.AMMO_50AE,
    w.AMMO_556,
    w.MINIGUN,
    w.SHOTGUN,
    w.AMMO_762_HE,
    w.AMMO_338_HE,
    w.AMMO_SHELL,
    w.AMMO_SHELL_HE,
    w.AK47,
    w.GLOCK,
    w.AWP,
    w.RPG,
    w.GRENADE,
    w.C4,
    w.DETONATOR,
    w.AXE,
    w.COMBAT_KNIFE,
    w.WELDER,
    w.LUNAR_DRILL,
    w.SPACE_ROCKET,
    w.CHAINSAW_BASIC,
    w.CHAINSAW_PRO,
    w.CHAINSAW_INDUSTRIAL,
    w.DRILL_METAL,
    w.DRILL_DIAMOND,
    w.DRILL_TITANIUM,
    w.DRILL_COMPOSITE,
    w.DRILL_LASER,
  ]),
  hE = new Map();
oT(() => hE.clear());
function Tse(s) {
  if (!Ase.has(s) && ai(s) === 0 && !Ko(s) && !or(s)) return null;
  let e = hE.get(s);
  return (
    e ||
      ((e = Pd(s).group),
      s === w.COMBAT_KNIFE && e.children[0]?.rotation.set(0, 0, 0),
      hE.set(s, e)),
    e
  );
}
function HN(s, e) {
  (Gc(s),
    e !== "weapon" &&
      e !== "item" &&
      e === "block" &&
      s.traverse((t) => {
        const i = t;
        if (!i.isMesh) return;
        i.userData.sharedGeometry || i.geometry?.dispose();
        const n = i.material;
        Array.isArray(n) ? n.forEach((o) => o.dispose()) : n?.dispose();
      }));
}
function BN(s, e) {
  if (s <= 0) return null;
  if (s < 256 && le[s]) {
    const n = nT(e, s, 0.28);
    return (
      n.position.set(0.02, -0.08, -0.06),
      n.rotation.set(0.15, 0.35, 0.1),
      { obj: n, kind: "block" }
    );
  }
  const t = Tse(s);
  if (t) {
    const n = t.clone(!0);
    (n.rotation.set(-Math.PI / 2, 0, 0), n.position.set(0.04, -0.04, 0));
    const o = ai(s) || s,
      a =
        o === w.GLOCK || o === w.DEAGLE || o === w.GRENADE
          ? 1.05
          : o === w.AWP ||
              o === w.RPG ||
              o === w.AXE ||
              o === w.WELDER ||
              o === w.DRILL_METAL ||
              o === w.DRILL_DIAMOND ||
              o === w.DRILL_TITANIUM ||
              o === w.DRILL_COMPOSITE ||
              o === w.DRILL_LASER
            ? 0.95
            : 1.05;
    return (
      n.scale.setScalar(a),
      o === w.COMBAT_KNIFE &&
        (n.scale.setScalar(1.6), n.position.set(0.04, -0.13, 0)),
      o === w.FISHING_ROD &&
        (n.rotation.set(-Math.PI / 2 + 1.05, 0, 0),
        n.position.set(0.04, -0.06, 0.02)),
      n.traverse((r) => {
        const l = r;
        l.isMesh &&
          l.material &&
          l.material.transparent &&
          l.geometry?.type === "PlaneGeometry" &&
          (l.visible = !1);
      }),
      { obj: n, kind: "weapon" }
    );
  }
  const i = e2(s, 0.62);
  return (
    i.position.set(0.02, -0.1, -0.05),
    i.rotation.set(0.15, 0.35, 0.1),
    { obj: i, kind: "item" }
  );
}
function Td(s, e, t) {
  if (s.heldMesh.userData.item === e) return;
  for (const n of [...s.heldMesh.children])
    (s.heldMesh.remove(n), HN(n, s.heldMesh.userData.kind ?? "none"));
  const i = BN(e, t);
  (i && s.heldMesh.add(i.obj),
    (s.heldMesh.userData.item = e),
    (s.heldMesh.userData.kind = i?.kind ?? "none"));
}
let jv = null;
function xse(s) {
  jv = s;
}
function Uw(s) {
  const e = jv?.(s) ?? null;
  if (e) return Yu(s, { tone: e.side });
  const t = VS(s);
  return Yu(t.baseLabel, {
    tone: "neutral",
    color: t.color,
    weight: t.weight,
    suffix: t.squad
      ? { text: ` [${t.squad.name}]`, color: t.squad.color }
      : void 0,
  });
}
function _se() {
  const s = document.createElement("canvas");
  ((s.width = 64), (s.height = 64));
  const e = s.getContext("2d");
  ((e.fillStyle = "#103d33"),
    e.beginPath(),
    e.arc(32, 32, 30, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = "#8effcd"),
    (e.fillStyle = "#8effcd"),
    (e.lineWidth = 4),
    (e.lineCap = "round"),
    e.beginPath(),
    e.roundRect(25, 12, 14, 26, 7),
    e.fill(),
    e.beginPath(),
    e.arc(32, 32, 15, 0, Math.PI),
    e.moveTo(32, 47),
    e.lineTo(32, 54),
    e.moveTo(24, 54),
    e.lineTo(40, 54),
    e.stroke());
  const t = new Ws(new hn({ map: new Si(s), depthTest: !1, depthWrite: !1 }));
  return ((t.name = "voice-icon"), Q0(t), t.scale.set(0.32, 0.32, 1), t);
}
let Ig = null;
function Rse() {
  if (!Ig) {
    const e = document.createElement("canvas");
    e.width = e.height = 96;
    const t = e.getContext("2d"),
      i = t.createLinearGradient(0, 8, 0, 88);
    (i.addColorStop(0, "#ff5d50"),
      i.addColorStop(1, "#c81d27"),
      (t.fillStyle = "rgba(0,0,0,0.35)"),
      t.beginPath(),
      t.arc(48, 50, 42, 0, Math.PI * 2),
      t.fill(),
      (t.fillStyle = i),
      t.beginPath(),
      t.arc(48, 48, 40, 0, Math.PI * 2),
      t.fill(),
      (t.lineWidth = 5),
      (t.strokeStyle = "#ffffff"),
      t.stroke(),
      (t.fillStyle = "#ffffff"),
      t.beginPath(),
      t.roundRect(40, 24, 16, 48, 4),
      t.fill(),
      t.beginPath(),
      t.roundRect(24, 40, 48, 16, 4),
      t.fill(),
      (Ig = new Si(e)),
      (Ig.colorSpace = Ii));
  }
  const s = new Ws(
    new hn({
      map: Ig,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      sizeAttenuation: !1,
      toneMapped: !1,
      fog: !1,
    }),
  );
  return ((s.name = "revive-icon"), Q0(s), s);
}
function kse(s) {
  const e = document.createElement("canvas");
  ((e.width = 512), (e.height = 128));
  const t = e.getContext("2d");
  ((t.fillStyle = "rgba(8,12,18,0.88)"),
    t.beginPath(),
    t.roundRect(8, 8, 496, 102, 18),
    t.fill(),
    (t.font = "bold 27px sans-serif"),
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    (t.fillStyle = "#fff"));
  const n = (s.length > 58 ? s.slice(0, 57) + "…" : s).split(/\s+/),
    o = [];
  let a = "";
  for (const d of n) {
    const u = a ? `${a} ${d}` : d;
    t.measureText(u).width > 450 && a ? (o.push(a), (a = d)) : (a = u);
  }
  a && o.push(a);
  const r = o.slice(0, 3),
    l = 58 - (r.length - 1) * 17;
  r.forEach((d, u) => t.fillText(d, 256, l + u * 34));
  const c = new Si(e),
    h = new Ws(new hn({ map: c, depthTest: !1, transparent: !0, fog: !1 }));
  return (Q0(h), h.scale.set(3.2, 0.8, 1), (h.position.y = 2.95), h);
}
const Cse = `
uniform vec2 uSize;
uniform float uLift;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec2 scale = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
  mv.xy += position.xy * uSize * scale;
  // pulled towards the viewer so the fire wraps the silhouette instead of hiding inside it
  mv.xyz += normalize(-mv.xyz) * uLift * scale.x;
  gl_Position = projectionMatrix * mv;
}`,
  Lse = `
uniform float uTime;
uniform float uSeed;
uniform float uFade;
varying vec2 vUv;
${cE}
void main() {
  vec4 f = fcFlame(vUv, uTime, uSeed);
  if (f.a < 0.5) discard;
  gl_FragColor = vec4(f.rgb * 1.15, uFade);
  #include <colorspace_fragment>
}`,
  zN = new ms(1, 1).translate(0, 0.5, 0);
