// assets__index-Dp6GxvJu 163 — cube
// Lines 95526-95675 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function D_() {
  return (
    Qm ||
    ((Qm = new sn({
      uniforms: { ...vu.clone(kt.fog), atlas: { value: KQ() } },
      fog: !0,
      vertexShader: `attribute vec4 atlasRect; attribute vec2 uvRepeat; attribute vec3 tint; attribute float glow, skylight, blocklight;
      varying vec4 vRect; varying vec2 vUv, vRepeat; varying vec3 vTint; varying float vShade, vGlow, vLight;
      #include <fog_pars_vertex>
      void main(){
        vRect=atlasRect; vUv=uv; vRepeat=uvRepeat; vTint=tint; vGlow=glow;
        vec3 n=normalize(mat3(modelMatrix)*normal);
        vShade=n.y>.5?1.:n.y<-.5?.5:abs(n.x)>.5?.78:.88;
        vLight=clamp(max(blocklight,skylight),.3,1.);
        vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,
      fragmentShader: `uniform sampler2D atlas;
      varying vec4 vRect; varying vec2 vUv, vRepeat; varying vec3 vTint; varying float vShade, vGlow, vLight;
      #include <fog_pars_fragment>
      void main(){
        vec2 cell=fract(vUv*vRepeat); cell=clamp(cell,.5/16.,1.-.5/16.);
        vec3 base=texture2D(atlas,vRect.xy+cell*vRect.zw).rgb*vTint;
        vec3 lit=mix(base*vShade*vLight,base*1.35,vGlow);
        gl_FragColor=vec4(lit,1.);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
    })),
    Qm)
  );
}
function jQ() {
  const n = document.createElement("canvas");
  ((n.width = 320), (n.height = 180));
  const e = new bi(n);
  return (
    (e.magFilter = ji),
    (e.minFilter = ji),
    (e.generateMipmaps = !1),
    (e.colorSpace = vi),
    { canvas: n, ctx: n.getContext("2d"), texture: e }
  );
}
function XQ() {
  const n = new N_();
  n.cube(0, 1.045, 0.1, 2.5, 0.125, 1.5, {
    top: "plank",
    side: "plank",
    bottom: "plank",
  });
  for (const f of [-1.125, 1.125])
    for (const p of [-0.5, 0.7])
      n.cube(f, 0.49, p, 0.1875, 0.98, 0.1875, "log");
  (n.cube(0, 0.2, 0.1, 2.25, 0.0625, 1.2, "plank"),
    n.cube(0, 1.14, 0.065, 1.82, 0.0625, 1.13, {
      top: "chassis",
      side: "side",
      bottom: "bezel",
    }),
    n.cube(0, 1.14, -0.5, 1.82, 0.0625, 0.002, "vent"),
    n.cube(0, 1.1725, -0.03, 1.5, 0.002, 0.62, "bezel"));
  const e = (f, p, m, y, g = !1, b = !1) =>
      n.cube(
        f,
        1.18,
        p,
        m,
        0.02,
        y,
        b ? { top: "led", side: "key" } : g ? "keyWide" : "key",
        { fit: !0, tint: b ? 14263130 : void 0, glow: b ? 0.3 : 0 },
      ),
    t = (f, p) => (f === 1 && p === 1) || (f === 2 && p < 3);
  for (let f = 0; f < 4; f++) {
    const p = -0.29 + f * 0.135,
      m = f === 3 ? 0 : 12 - f,
      y = -0.66 + f * 0.03;
    for (let g = 0; g < m; g++) e(y + g * 0.115, p, 0.1, 0.1, !1, t(f, g));
    f < 3 && e(0.66 - 0.07, p, 0.14 + f * 0.02, 0.1, !0);
  }
  (e(-0.5, 0.115, 0.22, 0.1, !0),
    e(0, 0.115, 0.5, 0.1, !0),
    e(0.5, 0.115, 0.22, 0.1, !0),
    n.cube(0, 1.1745, 0.43, 0.62, 0.006, 0.26, "pad", { fit: !0 }),
    n.cube(-0.78, 1.176, 0.54, 0.05, 0.006, 0.03, "led", { fit: !0, glow: 1 }),
    n.cube(-0.71, 1.176, 0.54, 0.05, 0.006, 0.03, "led", {
      fit: !0,
      glow: 0.7,
      tint: 10289052,
    }),
    n.cube(0, (1.17 + Fh.y) / 2, Fh.z - 0.005, 1.82, Fh.y - 1.17, 0.09, {
      top: "side",
      side: "side",
      front: "vent",
      back: "vent",
    }));
  for (const f of [-0.62, 0.62])
    n.cube(f, Fh.y, Fh.z, 0.26, 0.07, 0.07, "hinge");
  const i = new le(n.build(), D_());
  i.name = "voxel-laptop-base";
  const s = Vn.width + 0.16,
    o = Df.y + Vn.height / 2 + 0.07,
    a = 0.045,
    r = new N_();
  (r.cube(0, o / 2, Eb - a / 2, s, o, a, {
    front: "bezel",
    back: "chassis",
    side: "side",
    top: "side",
    bottom: "side",
  }),
    r.cube(0, o * 0.55, Eb - a - 0.001, 0.3, 0.3, 0.002, "lidBack", {
      fit: !0,
    }),
    r.cube(
      0,
      Df.y + Vn.height / 2 + 0.035,
      Eb + 0.001,
      0.03,
      0.03,
      0.002,
      "led",
      { fit: !0, glow: 0.2, tint: 5601177 },
    ));
  const l = new le(r.build(), D_());
  l.name = "voxel-laptop-lid";
  const c = jQ(),
    h = new le(
      new pn(Vn.width, Vn.height),
      new qt({ map: c.texture, toneMapped: !1 }),
    );
  (h.position.set(0, Df.y, Df.z), (h.name = "voxel-laptop-screen"));
  const d = new pe();
  (d.position.copy(Fh), d.add(l, h));
  const u = new pe();
  return (
    (u.name = "founder-laptop"),
    u.add(i, d),
    OI(d, 0),
    { group: u, body: i, lid: d, lidMesh: l, display: h, screen: c }
  );
}
function OI(n, e) {
  n.rotation.x = O_ + (II - O_) * e;
}
const xb = 0.85,
  Tb = 1.15,
  ZQ = (n) => 1 + (1.4 + 1) * (n - 1) ** 3 + 1.4 * (n - 1) ** 2,
  QQ = (n) => (n < 0.5 ? 4 * n * n * n : 1 - (-2 * n + 2) ** 3 / 2);
