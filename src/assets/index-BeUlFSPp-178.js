// index-BeUlFSPp 178 — math
// Lines 100512-100792 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Pne(s) {
  const e = s;
  return (
    !!e &&
    typeof e.id == "string" &&
    e.id.length > 0 &&
    e.id.length < 100 &&
    typeof e.owner == "string" &&
    [e.x, e.y, e.z].every(Number.isFinite) &&
    Math.abs(e.x) <= 1e6 &&
    Math.abs(e.z) <= 1e6 &&
    Number.isInteger(e.y) &&
    e.y >= 1 &&
    e.y <= 124 &&
    Number.isInteger(e.rotation) &&
    e.rotation >= 0 &&
    e.rotation < 4
  );
}
const Oh = new k(0, 1.235, -0.47),
  qN = Qs.tilt,
  sC = Math.PI / 2,
  p1 = new k(Qs.x, Qs.y, Qs.z).sub(Oh).applyAxisAngle(new k(1, 0, 0), -qN),
  Vw = p1.z - 0.004,
  KN = [
    "chassis",
    "side",
    "key",
    "keyWide",
    "plank",
    "log",
    "lidBack",
    "pad",
    "bezel",
    "hinge",
    "led",
    "vent",
  ],
  td = 4,
  bE = 3,
  Co = 16;
let c0;
function One() {
  if (c0) return c0;
  const s = document.createElement("canvas");
  ((s.width = td * Co), (s.height = bE * Co));
  const e = s.getContext("2d");
  let t = 9173;
  const i = () => (t = (t * 16807) % 2147483647) / 2147483647,
    n = (r, l) => {
      const c = parseInt(r.slice(1), 16),
        h = (d) => Math.max(0, Math.min(255, Math.round(d * l)));
      return `rgb(${h(c >> 16)},${h((c >> 8) & 255)},${h(c & 255)})`;
    },
    o = (r, l) => {
      const c = KN.indexOf(r),
        h = (c % td) * Co,
        d = Math.floor(c / td) * Co;
      l((u, f, p) => {
        ((e.fillStyle = p), e.fillRect(h + u, d + f, 1, 1));
      });
    },
    a = (r, l) => (c) => {
      for (let h = 0; h < Co; h++)
        for (let d = 0; d < Co; d++) c(d, h, n(r, 1 - l / 2 + i() * l));
    };
  return (
    o("chassis", (r) => {
      a("#3a4352", 0.16)(r);
      for (let l = 0; l < Co; l++)
        (r(l, 0, n("#3a4352", 1.3)), r(0, l, n("#3a4352", 1.25)));
    }),
    o("side", (r) => {
      a("#2a313c", 0.14)(r);
      for (let l = 0; l < Co; l++) r(l, 7, "#ffb547");
    }),
    o("key", (r) => {
      a("#171b22", 0.1)(r);
      for (let l = 1; l < 15; l++)
        (r(l, 1, "#3b4452"),
          r(1, l, "#323a46"),
          r(l, 14, "#0b0d11"),
          r(14, l, "#0e1116"));
      for (const [l, c] of [
        [5, 5],
        [6, 5],
        [5, 6],
      ])
        r(l, c, "#56606e");
    }),
    o("keyWide", (r) => {
      a("#171b22", 0.1)(r);
      for (let l = 1; l < 15; l++) (r(l, 1, "#3b4452"), r(l, 14, "#0b0d11"));
    }),
    o("plank", (r) => {
      a("#9a6a3c", 0.18)(r);
      for (let l = 0; l < Co; l++) (r(l, 3, "#6e4826"), r(l, 11, "#6e4826"));
      for (const [l, c] of [
        [4, 0],
        [4, 1],
        [4, 2],
        [12, 4],
        [12, 5],
        [12, 6],
        [12, 7],
        [12, 8],
        [12, 9],
        [12, 10],
        [7, 12],
        [7, 13],
        [7, 14],
        [7, 15],
      ])
        r(l, c, "#5c3b1e");
    }),
    o("log", (r) => {
      a("#5b3d22", 0.2)(r);
      for (let l = 0; l < Co; l++)
        for (const c of [3, 9, 13]) i() > 0.3 && r(c, l, "#3e2914");
    }),
    o("lidBack", (r) => {
      a("#353e4c", 0.14)(r);
      for (const [l, c] of [
        [5, 5],
        [6, 6],
        [6, 7],
        [7, 8],
        [7, 9],
        [8, 10],
        [9, 9],
        [9, 8],
        [10, 7],
        [10, 6],
        [11, 5],
      ])
        r(l, c, "#ffb547");
    }),
    o("pad", (r) => {
      a("#4a5464", 0.08)(r);
      for (let l = 0; l < Co; l++)
        (r(l, 0, "#262c35"),
          r(l, 15, "#262c35"),
          r(0, l, "#262c35"),
          r(15, l, "#262c35"));
    }),
    o("bezel", (r) => a("#0f1318", 0.12)(r)),
    o("hinge", (r) => {
      a("#6a7584", 0.2)(r);
      for (let l = 0; l < Co; l += 4)
        for (let c = 0; c < Co; c++) r(l, c, "#495260");
    }),
    o("led", (r) => {
      for (let l = 0; l < Co; l++)
        for (let c = 0; c < Co; c++)
          r(c, l, (c + l) % 5 ? "#ffc35a" : "#ffe09a");
    }),
    o("vent", (r) => {
      a("#2a313c", 0.1)(r);
      for (let l = 2; l < Co; l += 3)
        for (let c = 2; c < 14; c++) r(c, l, "#0d1014");
    }),
    (c0 = new Si(s)),
    (c0.magFilter = as),
    (c0.minFilter = as),
    (c0.generateMipmaps = !1),
    (c0.colorSpace = Ii),
    c0
  );
}
const Nne = (s) => {
  const e = KN.indexOf(s);
  return [(e % td) / td, 1 - (Math.floor(e / td) + 1) / bE, 1 / td, 1 / bE];
};
class nC {
  parts = [];
  cube(e, t, i, n, o, a, r, l = {}) {
    const c = new kt(n, o, a).toNonIndexed();
    c.translate(e, t, i);
    const h = c.getAttribute("position").count,
      d = new Float32Array(h * 4),
      u = new Float32Array(h * 2),
      f = new Float32Array(h * 3),
      p = new Float32Array(h),
      m = (b) =>
        typeof r == "string"
          ? r
          : ((b === 2
              ? r.top
              : b === 3
                ? r.bottom
                : b === 4
                  ? r.front
                  : b === 5
                    ? r.back
                    : r.side) ??
            r.side ??
            r.top ??
            "chassis"),
      g = [
        [a, o],
        [a, o],
        [n, a],
        [n, a],
        [n, o],
        [n, o],
      ],
      y = new Ge(l.tint ?? 16777215);
    for (let b = 0; b < h; b++) {
      const S = Math.floor(b / 6),
        M = Nne(m(S));
      (d.set(M, b * 4),
        u.set(
          l.fit ? [1, 1] : [Math.max(0.25, g[S][0]), Math.max(0.25, g[S][1])],
          b * 2,
        ),
        f.set([y.r, y.g, y.b], b * 3),
        (p[b] = l.glow ?? 0));
    }
    (c.setAttribute("atlasRect", new qt(d, 4)),
      c.setAttribute("uvRepeat", new qt(u, 2)),
      c.setAttribute("tint", new qt(f, 3)),
      c.setAttribute("glow", new qt(p, 1)),
      this.parts.push(c));
  }
  build() {
    const e = Eo(this.parts);
    for (const i of this.parts) i.dispose();
    const t = e.getAttribute("position").count;
    return (
      e.setAttribute("blocklight", new qt(new Float32Array(t).fill(0.8), 1)),
      e.setAttribute("skylight", new qt(new Float32Array(t).fill(1), 1)),
      e.computeBoundingSphere(),
      e
    );
  }
}
let Hg;
function oC() {
  return (
    Hg ||
    ((Hg = new Gi({
      uniforms: { ...Rd.clone(It.fog), atlas: { value: One() } },
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
    Hg)
  );
}
function Dne() {
  const s = document.createElement("canvas");
  ((s.width = 320), (s.height = 180));
  const e = new Si(s);
  return (
    (e.magFilter = as),
    (e.minFilter = as),
    (e.generateMipmaps = !1),
    (e.colorSpace = Ii),
    { canvas: s, ctx: s.getContext("2d"), texture: e }
  );
}
