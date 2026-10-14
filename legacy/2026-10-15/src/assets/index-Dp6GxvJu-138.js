// index-Dp6GxvJu 138 — beginpath
// Lines 85586-85908 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const EM = `
float fcHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float fcNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fcHash(i), fcHash(i + vec2(1.0, 0.0)), f.x),
             mix(fcHash(i + vec2(0.0, 1.0)), fcHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
vec4 fcFlame(vec2 uv, float t, float seed) {
  vec2 px = (floor(clamp(uv, 0.0, 0.999) * 16.0) + 0.5) / 16.0;
  float x = px.x - 0.5, y = px.y;
  float s = fract(seed * 0.1373) * 37.0;
  // how high each column of the fire reaches: separate tongues rising and falling, lower
  // towards the card's edges so the silhouette closes into a flame rather than a wall
  float env = 1.0 - smoothstep(0.2, 0.5, abs(x));
  float top = (0.3 + 0.7 * env) * (0.6 + 0.5 * fcNoise(vec2(px.x * 7.5 + s, t * 1.8)));
  // turbulence climbing through the body
  float n = fcNoise(vec2(px.x * 4.0 + s * 2.0, px.y * 3.0 - t * 3.0));
  top += (n - 0.5) * 0.25;
  float heat = (top - y) / max(top, 0.05);
  heat = heat * 0.9 + (n - 0.5) * 0.25 * y;
  // lone wisps torn off the tips
  float wisp = step(0.8, fcNoise(vec2(px.x * 5.0 + s, px.y * 4.0 - t * 4.5)))
             * step(top, y) * step(y, top + 0.14) * step(0.3, env);
  heat = mix(heat, 0.3, wisp);
  vec3 c = mix(vec3(0.55, 0.07, 0.02), vec3(0.92, 0.24, 0.03), smoothstep(0.08, 0.25, heat));
  c = mix(c, vec3(1.0, 0.52, 0.08), smoothstep(0.25, 0.5, heat));
  c = mix(c, vec3(1.0, 0.78, 0.25), smoothstep(0.5, 0.75, heat));
  c = mix(c, vec3(1.0, 0.93, 0.62), smoothstep(0.8, 1.0, heat));
  return vec4(c, step(0.05, heat));
}
`,
  VX = `
vec3 lavaCells(vec2 p, float t) {
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0, id = 0.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 h = vec2(fcHash(i + g), fcHash(i + g + 17.3));
    vec2 o = g + 0.5 + 0.36 * sin(t * 0.22 + 6.2831 * h) - f;
    float d = dot(o, o);
    if (d < d1) { d2 = d1; d1 = d; id = h.x; } else if (d < d2) { d2 = d; }
  }
  return vec3(sqrt(d1), sqrt(d2), id);
}
`,
  u_ = [
    3832789, 13979450, 3855723, 14006330, 10173141, 3852757, 13974168, 8359754,
  ],
  $X = new Set([
    ITEM.RADIO_MODULE,
    ITEM.FISHING_ROD,
    ITEM.FERTILIZER,
    ITEM.WHEAT_SEEDS,
    ITEM.GRENADE_LAUNCHER,
    ITEM.AMMO_40MM,
    ITEM.AMMO_9MM,
    ITEM.AMMO_762,
    ITEM.AMMO_338,
    ITEM.MINIGUN,
    ITEM.SHOTGUN,
    ITEM.AMMO_762_HE,
    ITEM.AMMO_338_HE,
    ITEM.AMMO_SHELL,
    ITEM.AMMO_SHELL_HE,
    ITEM.AK47,
    ITEM.GLOCK,
    ITEM.AWP,
    ITEM.RPG,
    ITEM.GRENADE,
    ITEM.C4,
    ITEM.DETONATOR,
    ITEM.AXE,
    ITEM.COMBAT_KNIFE,
    ITEM.WELDER,
    ITEM.LUNAR_DRILL,
    ITEM.SPACE_ROCKET,
    ITEM.CHAINSAW_BASIC,
    ITEM.CHAINSAW_PRO,
    ITEM.CHAINSAW_INDUSTRIAL,
    ITEM.DRILL_METAL,
    ITEM.DRILL_DIAMOND,
    ITEM.DRILL_TITANIUM,
    ITEM.DRILL_COMPOSITE,
    ITEM.DRILL_LASER,
  ]),
  xM = new Map();
u4(() => xM.clear());
function qX(n) {
  var t;
  if (!$X.has(n) && Ti(n) === 0 && !wo(n) && !xa(n)) return null;
  let e = xM.get(n);
  return (
    e ||
      ((e = R0(n).group),
      n === ITEM.COMBAT_KNIFE &&
        ((t = e.children[0]) == null || t.rotation.set(0, 0, 0)),
      xM.set(n, e)),
    e
  );
}
function bI(n, e) {
  (Zl(n),
    e !== "weapon" &&
      e !== "item" &&
      e === "block" &&
      n.traverse((t) => {
        var o;
        const i = t;
        if (!i.isMesh) return;
        i.userData.sharedGeometry || (o = i.geometry) == null || o.dispose();
        const s = i.material;
        Array.isArray(s)
          ? s.forEach((a) => a.dispose())
          : s == null || s.dispose();
      }));
}
function wI(n, e) {
  if (n <= 0) return null;
  if (n < 256 && BLOCKS[n]) {
    const s = d4(e, n, 0.28);
    return (
      s.position.set(0.02, -0.08, -0.06),
      s.rotation.set(0.15, 0.35, 0.1),
      { obj: s, kind: "block" }
    );
  }
  const t = qX(n);
  if (t) {
    const s = t.clone(!0);
    (s.rotation.set(-Math.PI / 2, 0, 0), s.position.set(0.04, -0.04, 0));
    const o = Ti(n) || n,
      a =
        o === ITEM.GLOCK || o === ITEM.GRENADE
          ? 1.05
          : o === ITEM.AWP ||
              o === ITEM.RPG ||
              o === ITEM.AXE ||
              o === ITEM.WELDER ||
              o === ITEM.DRILL_METAL ||
              o === ITEM.DRILL_DIAMOND ||
              o === ITEM.DRILL_TITANIUM ||
              o === ITEM.DRILL_COMPOSITE ||
              o === ITEM.DRILL_LASER
            ? 0.95
            : 1.05;
    return (
      s.scale.setScalar(a),
      o === ITEM.COMBAT_KNIFE &&
        (s.scale.setScalar(1.6), s.position.set(0.04, -0.13, 0)),
      o === ITEM.FISHING_ROD &&
        (s.rotation.set(-Math.PI / 2 + 1.05, 0, 0),
        s.position.set(0.04, -0.06, 0.02)),
      s.traverse((r) => {
        var c;
        const l = r;
        l.isMesh &&
          l.material &&
          l.material.transparent &&
          ((c = l.geometry) == null ? void 0 : c.type) === "PlaneGeometry" &&
          (l.visible = !1);
      }),
      { obj: s, kind: "weapon" }
    );
  }
  const i = p1(n, 0.62);
  return (
    i.position.set(0.02, -0.1, -0.05),
    i.rotation.set(0.15, 0.35, 0.1),
    { obj: i, kind: "item" }
  );
}
function E0(n, e, t) {
  if (n.heldMesh.userData.item === e) return;
  for (const s of [...n.heldMesh.children])
    (n.heldMesh.remove(s), bI(s, n.heldMesh.userData.kind ?? "none"));
  const i = wI(e, t);
  (i && n.heldMesh.add(i.obj),
    (n.heldMesh.userData.item = e),
    (n.heldMesh.userData.kind = (i == null ? void 0 : i.kind) ?? "none"));
}
let Lr = null;
function KX(n) {
  Lr = n;
}
function yb(n) {
  const e = (Lr == null ? void 0 : Lr(n)) ?? null;
  if (e) return Id(n, { tone: e.side });
  const t = roleOf(n);
  return Id(t.baseLabel, {
    tone: "neutral",
    color: t.color,
    weight: t.weight,
    suffix: t.squad
      ? { text: ` [${t.squad.name}]`, color: t.squad.color }
      : void 0,
  });
}
function YX() {
  const n = document.createElement("canvas");
  ((n.width = 64), (n.height = 64));
  const e = n.getContext("2d");
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
  const t = new os(new es({ map: new bi(n), depthTest: !1, depthWrite: !1 }));
  return ((t.name = "voice-icon"), oh(t), t.scale.set(0.32, 0.32, 1), t);
}
let Vm = null;
function jX() {
  if (!Vm) {
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
      (Vm = new bi(e)),
      (Vm.colorSpace = vi));
  }
  const n = new os(
    new es({
      map: Vm,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      sizeAttenuation: !1,
      toneMapped: !1,
      fog: !1,
    }),
  );
  return ((n.name = "revive-icon"), oh(n), n);
}
function XX(n) {
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
  const s = (n.length > 58 ? n.slice(0, 57) + "…" : n).split(/\s+/),
    o = [];
  let a = "";
  for (const d of s) {
    const u = a ? `${a} ${d}` : d;
    t.measureText(u).width > 450 && a ? (o.push(a), (a = d)) : (a = u);
  }
  a && o.push(a);
  const r = o.slice(0, 3),
    l = 58 - (r.length - 1) * 17;
  r.forEach((d, u) => t.fillText(d, 256, l + u * 34));
  const c = new bi(e),
    h = new os(new es({ map: c, depthTest: !1, transparent: !0, fog: !1 }));
  return (oh(h), h.scale.set(3.2, 0.8, 1), (h.position.y = 2.95), h);
}
const ZX = `
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
  QX = `
uniform float uTime;
uniform float uSeed;
uniform float uFade;
varying vec2 vUv;
${EM}
void main() {
  vec4 f = fcFlame(vUv, uTime, uSeed);
  if (f.a < 0.5) discard;
  gl_FragColor = vec4(f.rgb * 1.15, uFade);
  #include <colorspace_fragment>
}`,
  MI = new pn(1, 1).translate(0, 0.5, 0);
