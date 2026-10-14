// assets__index-Dp6GxvJu 158 — math
// Lines 93384-93690 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function CI(n) {
  if (jm) return jm;
  const e = n.length + __.length,
    t = document.createElement("canvas");
  ((t.width = dl), (t.height = vr * e));
  const i = t.getContext("2d"),
    s = new Map(),
    o = (r, l, c, h) => {
      const d = r * vr;
      ((i.fillStyle = "#120d1c"),
        i.fillRect(0, d, dl, vr),
        (i.fillStyle = "#c9932f"),
        i.fillRect(0, d, dl, 4),
        i.fillRect(0, d + vr - 4, dl, 4),
        i.fillRect(0, d, 4, vr),
        i.fillRect(dl - 4, d, 4, vr),
        (i.fillStyle = "#ffe08a"),
        i.fillRect(0, d, dl, 2),
        i.fillRect(0, d, 2, vr));
      for (const [S, M] of [
        [6, 6],
        [dl - 10, 6],
        [6, vr - 10],
        [dl - 10, vr - 10],
      ])
        ((i.fillStyle = c), i.fillRect(S, d + M, 4, 4));
      const u = AQ(l, h ? 18 : 19),
        f = h && u.length === 1 && l.length <= 10 ? 3 : 2,
        p = 8 * f,
        m = u.length * p + (u.length - 1) * 2 * f,
        y = d + Math.round((vr - m) / 2),
        g = document.createElement("canvas");
      ((g.width = Math.ceil(dl / f)), (g.height = 8));
      const b = g.getContext("2d");
      u.forEach((S, M) => {
        for (const [x, T, A] of [
          ["#000000", 1, 1],
          [c, 0, 0],
        ])
          (b.clearRect(0, 0, g.width, g.height),
            (b.fillStyle = x),
            qp(b, S, 0, g.width),
            (i.imageSmoothingEnabled = !1),
            i.drawImage(
              g,
              T * f,
              y + M * (p + 2 * f) + A * f,
              g.width * f,
              g.height * f,
            ));
        (b.clearRect(0, 0, g.width, g.height),
          (b.fillStyle = "#ffffff"),
          qp(b, S, 0, g.width),
          (i.globalAlpha = 0.35),
          i.drawImage(
            g,
            0,
            0,
            g.width,
            1,
            0,
            y + M * (p + 2 * f),
            g.width * f,
            f,
          ),
          (i.globalAlpha = 1));
      });
    };
  (n.forEach((r, l) => {
    (o(l, r.title, _Q(TQ(r.color)), !1), s.set(`game:${r.id}`, l));
  }),
    __.forEach((r, l) => {
      const c = n.length + l;
      (o(c, r, l === 0 || l === 1 ? "#ffd76a" : R_[l % R_.length], !0),
        s.set(`sign:${r}`, c));
    }));
  const a = new bi(t);
  return (
    (a.magFilter = ji),
    (a.minFilter = Uo),
    (a.colorSpace = vi),
    (jm = { texture: a, rows: e, index: s }),
    jm
  );
}
const R_ = ["#ff7ad9", "#7ee8ff", "#ffd76a", "#9dff8a", "#ff8a6a", "#c7a2ff"];
function _Q(n) {
  const e = new ze(n);
  return (e.lerp(new ze(16777215), 0.25), `#${e.getHexString()}`);
}
function kI(n, e) {
  const t = CI(e),
    i = t.index.get(n) ?? 0,
    s = 1 - (i + 1) / t.rows,
    o = 1 - i / t.rows;
  return [0.002, s + 5e-4, 0.998, o - 5e-4];
}
let wc = null;
function RQ() {
  if (wc) return wc;
  const n = document.createElement("canvas");
  ((n.width = 128), (n.height = 64));
  const e = n.getContext("2d"),
    t = (a, r, l) => {
      ((e.fillStyle = l), e.fillRect(a, r, 1, 1));
    },
    i = (a, r) => {
      for (let l = 0; l < 16; l++)
        for (let c = 0; c < 16; c++) {
          const h = r(c + 0.5, l + 0.5);
          h && t(a + c, l, h);
        }
    },
    s = (a, r, l, c, h) => Math.hypot(a - l, r - c) < h;
  (i(0, (a, r) =>
    s(a, r, 5, 11, 3.4)
      ? s(a, r, 4, 10, 1.2)
        ? "#ffb3b8"
        : "#e3202f"
      : s(a, r, 11, 11.5, 3.4)
        ? s(a, r, 10, 10.5, 1.2)
          ? "#ffb3b8"
          : "#c5141f"
        : (Math.abs(a - (5 + (8 - r) * 0.45)) < 0.8 && r > 3 && r < 8.5) ||
            (Math.abs(a - (11 - (8 - r) * 0.2)) < 0.8 && r > 3 && r < 8.5)
          ? "#3c8a22"
          : s(a, r, 9.5, 3, 2.2)
            ? "#5cc23a"
            : null,
  ),
    i(16, (a, r) => {
      const l = Math.hypot((a - 8) / 6.4, (r - 8.5) / 4.6);
      return l < 1
        ? l < 0.45 && a < 8
          ? "#fff6a0"
          : "#f3d21d"
        : Math.abs(a - 14) < 1 && Math.abs(r - 8.5) < 1
          ? "#3c8a22"
          : null;
    }),
    i(32, (a, r) =>
      r > 3 && r < 12 && Math.abs(a - 8) < 1.6 + (r - 3) * 0.48
        ? a < 7
          ? "#fff0a6"
          : "#e8b524"
        : r >= 12 && r < 13.5 && Math.abs(a - 8) < 6
          ? "#b07b14"
          : s(a, r, 8, 14.5, 1.4) || s(a, r, 8, 2.8, 1.2)
            ? "#e8b524"
            : null,
    ),
    i(48, (a, r) =>
      r > 4 && r < 12 && a > 1 && a < 15
        ? r > 5.5 && r < 10.5 && a > 2.5 && a < 13.5
          ? "#101018"
          : "#f2f2f2"
        : null,
    ),
    (e.fillStyle = "#f2f2f2"),
    (e.font = "bold 6px monospace"));
  for (const [a, r] of [
    [0, "B"],
    [1, "A"],
    [2, "R"],
  ])
    ((e.fillStyle = "#ffd34a"), C_(e, r, 51 + a * 4, 6));
  (i(64, (a, r) =>
    (r > 2 && r < 5 && a > 3 && a < 13) ||
    (Math.abs(a - (12 - (r - 4) * 0.55)) < 1.4 && r >= 4 && r < 14)
      ? a < 8 && r < 5
        ? "#ff9aa0"
        : "#e3202f"
      : null,
  ),
    i(80, (a, r) => {
      const l = Math.abs(a - 8),
        c = r < 6;
      return (c ? l < (r - 1) * 1.4 && r > 1.5 : l < (14.5 - r) * 1) && r < 14.5
        ? a < 8 && c
          ? "#c9f8ff"
          : a < 8
            ? "#6fe0ff"
            : "#2aa9e0"
        : null;
    }),
    i(96, (a, r) => {
      const l = Math.atan2(r - 8.5, a - 8),
        c = Math.hypot(a - 8, r - 8.5),
        h = 3.2 + 3.4 * Math.max(0, Math.cos(l * 5 + Math.PI / 2));
      return c < h ? (c < 2.5 ? "#fff6b0" : "#ffc61a") : null;
    }),
    i(112, (a, r) => {
      const l =
        Math.pow((a - 8) / 6.5, 2) +
        Math.pow((r - 8) / 6 - Math.sqrt(Math.abs((a - 8) / 6.5)) * 0.6, 2);
      return l < 0.95 ? (l < 0.25 && a < 8 ? "#ffd0f0" : "#ff3fa8") : null;
    }));
  const o = (a, r, l, c) => {
    e.fillStyle = c;
    let h = r;
    for (const d of a) (d !== " " && C_(e, d, h, l), (h += 6));
  };
  return (
    o("PLAY", 0, 17, "#ffffff"),
    o("IN PLAY", 64, 17, "#ffffff"),
    o("OFFLINE", 0, 25, "#ffffff"),
    o("WIN", 64, 25, "#ffffff"),
    o("0123456789$", 0, 33, "#ffffff"),
    (wc = new bi(n)),
    (wc.magFilter = ji),
    (wc.minFilter = ji),
    (wc.generateMipmaps = !1),
    (wc.colorSpace = vi),
    wc
  );
}
function C_(n, e, t, i) {
  const s = document.createElement("canvas");
  ((s.width = 6), (s.height = 8));
  const o = s.getContext("2d");
  ((o.fillStyle = n.fillStyle), qp(o, e, 0, 6), n.drawImage(s, t - 0, i));
}
const CQ = `
attribute vec3 aAccent; attribute vec4 aState;
varying vec2 vUv; varying vec3 vAccent; varying vec4 vState;
void main() {
  vUv = uv; vAccent = aAccent; vState = aState;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,
  kQ = `
uniform sampler2D uAtlas; uniform float uTime;
varying vec2 vUv; varying vec3 vAccent; varying vec4 vState;
vec4 tex(vec2 px) { return texture2D(uAtlas, vec2((px.x + 0.5) / 128.0, 1.0 - (px.y + 0.5) / 64.0)); }
float hash(float n) { return fract(sin(n) * 43758.5453); }
void main() {
  float state = vState.x, win = vState.y, seed = vState.z, pulse = vState.w;
  vec2 grid = vUv * vec2(96.0, 60.0);
  vec2 p = floor(grid);
  float y = 59.0 - p.y;                       // y down, like the atlas
  vec3 col = mix(vAccent * 0.32, vec3(0.03, 0.02, 0.07), clamp(y / 60.0, 0.0, 1.0));
  col += vAccent * 0.08 * step(0.5, fract((p.x + p.y) * 0.25));
  bool offline = state > 2.5;
  // reels
  float reelX = p.x - 16.0;
  float reel = floor(reelX / 24.0), inReel = reelX - reel * 24.0;
  if (reel >= 0.0 && reel < 3.0 && inReel < 16.0 && y >= 1.0 && y < 49.0) {
    float period = state > 1.5 ? 2.4 : 7.0 + hash(seed) * 3.0;
    float t = uTime + seed * 13.0;
    float cycle = floor(t / period), local = t - cycle * period;
    float spin = 1.0 + reel * 0.35;
    float travel = (state > 0.5 && state < 1.5) || offline ? 0.0 : (local < spin ? 14.0 * local - 7.0 * local * local / spin : 7.0 * spin);
    float base = floor(hash(cycle * 3.1 + reel + seed) * 8.0) + cycle * 7.0;
    float slot = (y - 1.0) / 16.0 + base + travel + reel * 3.0;
    float sym = mod(floor(slot), 8.0), within = floor(fract(slot) * 16.0);
    vec4 s = tex(vec2(sym * 16.0 + inReel, within));
    vec3 cell = mix(vec3(0.96, 0.93, 0.86), vec3(0.85, 0.82, 0.78), step(8.0, within));
    col = mix(cell, s.rgb, s.a);
    if (inReel < 1.0 || inReel > 14.0) col *= 0.7;
    bool still = local > spin + 0.05 || state > 0.5;
    if (still && y >= 17.0 && y < 33.0 && (within < 1.0 || within > 14.0)) col = mix(col, vAccent, 0.8);
  } else if (y >= 50.0 && y < 59.0) {
    // banner
    float bx = p.x, by = y - 51.0;
    vec3 band = vAccent * (0.55 + 0.25 * step(0.5, fract(uTime * 1.5)) * step(1.5, state) * step(state, 2.5));
    col = band * 0.5;
    if (by >= 0.0 && by < 7.0) {
      float w = 0.0; vec2 origin = vec2(0.0);
      if (win > 0.0) {
        float digits = floor(log(max(win, 1.0)) / log(10.0) + 1e-4) + 1.0;
        float total = 18.0 + 6.0 * (digits + 1.0);
        float x0 = floor(48.0 - total * 0.5), lx = bx - x0;
        if (lx >= 0.0 && lx < 18.0) { vec4 g = tex(vec2(64.0 + lx, 25.0 + by)); col = mix(col, vec3(1.0, 0.9, 0.4), g.a); }
        else if (lx >= 18.0 && lx < total) {
          float k = floor((lx - 18.0) / 6.0), gx = mod(lx - 18.0, 6.0);
          float glyph = k < 1.0 ? 10.0 : mod(floor(win / pow(10.0, digits - k)), 10.0);
          vec4 g = tex(vec2(glyph * 6.0 + gx, 33.0 + by)); col = mix(col, vec3(1.0, 0.95, 0.6), g.a);
        }
      } else {
        vec2 cell = offline ? vec2(0.0, 25.0) : state > 0.5 ? vec2(64.0, 17.0) : vec2(0.0, 17.0);
        w = offline ? 41.0 : state > 0.5 ? 41.0 : 23.0;
        float lx = bx - floor(48.0 - w * 0.5);
        if (lx >= 0.0 && lx < w) { vec4 g = tex(cell + vec2(lx, by)); col = mix(col, vec3(1.0), g.a * (state < 0.5 ? 0.6 + 0.4 * step(0.5, fract(uTime * 0.8 + seed)) : 1.0)); }
      }
    }
  }
  // gold bezel line + LCD pixel grid + win flash
  if (p.x < 1.0 || p.x > 94.0 || p.y < 1.0 || p.y > 58.0) col = vec3(0.95, 0.72, 0.25) * (0.7 + 0.3 * sin(uTime * 3.0 + p.x * 0.3 + p.y * 0.3));
  vec2 f = fract(grid);
  col *= 0.82 + 0.18 * step(0.12, f.x) * step(0.12, f.y);
  if (win > 0.0) col += vec3(0.25, 0.18, 0.0) * max(0.0, sin(uTime * 7.0)) * pulse;
  if (offline) col = vec3(dot(col, vec3(0.3))) * 0.35;
  gl_FragColor = vec4(col, 1.0);
}`;
let Xm = null;
function LQ() {
  return (
    Xm ||
    ((Xm = new sn({
      uniforms: { uAtlas: { value: RQ() }, uTime: F4 },
      vertexShader: CQ,
      fragmentShader: kQ,
      toneMapped: !1,
    })),
    Xm)
  );
}
const br = { width: 1.38, height: 0.8625, y: 1.62, z: 0.57 };
