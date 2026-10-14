// assets__index-Dp6GxvJu 162 — math
// Lines 95196-95525 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
let I_ = null;
function GQ() {
  return (
    I_ ??
      (I_ = new qt({
        color: 16770736,
        transparent: !0,
        opacity: 0.07,
        blending: cn,
        depthWrite: !1,
        side: Ai,
        toneMapped: !1,
      })),
    I_
  );
}
let Sb = null;
function WQ(n) {
  return (Sb || (Sb = new qt({ map: n, toneMapped: !1 })), Sb);
}
function VQ(n) {
  for (const e of [-10, 0, 10])
    for (const t of [-10, 0, 10]) {
      const i = e + 0.5,
        s = t + 0.5;
      (n.box(i - 0.22, 7.92, s - 0.22, i + 0.22, 8, s + 0.22, Dt.GOLD),
        n.box(i - 0.03, 7.3, s - 0.03, i + 0.03, 7.92, s + 0.03, Dt.GOLD));
      for (let o = 0; o < 8; o++) {
        const a = (o * Math.PI) / 4,
          r = i + Math.cos(a) * 0.8,
          l = s + Math.sin(a) * 0.8;
        (n.box(r - 0.05, 7.1, l - 0.05, r + 0.05, 7.22, l + 0.05, Dt.WHITE),
          n.box(
            r - 0.045,
            7.22,
            l - 0.045,
            r + 0.045,
            7.31,
            l + 0.045,
            Dt.SHADE,
            { glow: !0, tint: 16765578, chase: 100 + o },
          ),
          n.box(
            r - 0.025,
            6.78,
            l - 0.025,
            r + 0.025,
            7.08,
            l + 0.025,
            Dt.CRYSTAL,
            { glow: !0, tint: 15136511, chase: 101 + o },
          ),
          n.at(
            i + Math.cos(a) * 0.4,
            7.12,
            s + Math.sin(a) * 0.4,
            -a + Math.PI / 2,
            () => n.box(-0.02, -0.02, -0.4, 0.02, 0.02, 0.4, Dt.GOLD),
          ));
      }
    }
}
const $Q = "http://127.0.0.1:8080/?mode=sandbox",
  Vn = { width: 1.6, height: 0.9, x: 0, y: 1.7, z: -0.53, tilt: -Math.PI / 15 },
  gf = (n) => (-n.rotation * Math.PI) / 2;
function P_(n) {
  if (
    typeof n != "string" ||
    n.length > 2048 ||
    /[\u0000-\u001f\u007f]/.test(n)
  )
    return;
  const e = n.trim();
  if (e)
    try {
      const t = new URL(
        /^[a-z][a-z\d+.-]*:/i.test(e) &&
          !/^(localhost|[\w.-]+\.\w+):\d+(\/|$)/i.test(e)
          ? e
          : `${/^(localhost|127\.\d+\.\d+\.\d+|\[::1\])(:|\/|$)/i.test(e) ? "http" : "https"}://${e}`,
      );
      return !["http:", "https:"].includes(t.protocol) ||
        t.username ||
        t.password ||
        t.href.length > 2048
        ? void 0
        : t.href;
    } catch {
      return;
    }
}
function qQ(n) {
  const e = n;
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
const Fh = new k(0, 1.235, -0.47),
  II = Vn.tilt,
  O_ = Math.PI / 2,
  Df = new k(Vn.x, Vn.y, Vn.z).sub(Fh).applyAxisAngle(new k(1, 0, 0), -II),
  Eb = Df.z - 0.004,
  PI = [
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
  a0 = 4,
  PM = 3,
  lo = 16;
let Sc;
function KQ() {
  if (Sc) return Sc;
  const n = document.createElement("canvas");
  ((n.width = a0 * lo), (n.height = PM * lo));
  const e = n.getContext("2d");
  let t = 9173;
  const i = () => (t = (t * 16807) % 2147483647) / 2147483647,
    s = (r, l) => {
      const c = parseInt(r.slice(1), 16),
        h = (d) => Math.max(0, Math.min(255, Math.round(d * l)));
      return `rgb(${h(c >> 16)},${h((c >> 8) & 255)},${h(c & 255)})`;
    },
    o = (r, l) => {
      const c = PI.indexOf(r),
        h = (c % a0) * lo,
        d = Math.floor(c / a0) * lo;
      l((u, f, p) => {
        ((e.fillStyle = p), e.fillRect(h + u, d + f, 1, 1));
      });
    },
    a = (r, l) => (c) => {
      for (let h = 0; h < lo; h++)
        for (let d = 0; d < lo; d++) c(d, h, s(r, 1 - l / 2 + i() * l));
    };
  return (
    o("chassis", (r) => {
      a("#3a4352", 0.16)(r);
      for (let l = 0; l < lo; l++)
        (r(l, 0, s("#3a4352", 1.3)), r(0, l, s("#3a4352", 1.25)));
    }),
    o("side", (r) => {
      a("#2a313c", 0.14)(r);
      for (let l = 0; l < lo; l++) r(l, 7, "#ffb547");
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
      for (let l = 0; l < lo; l++) (r(l, 3, "#6e4826"), r(l, 11, "#6e4826"));
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
      for (let l = 0; l < lo; l++)
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
      for (let l = 0; l < lo; l++)
        (r(l, 0, "#262c35"),
          r(l, 15, "#262c35"),
          r(0, l, "#262c35"),
          r(15, l, "#262c35"));
    }),
    o("bezel", (r) => a("#0f1318", 0.12)(r)),
    o("hinge", (r) => {
      a("#6a7584", 0.2)(r);
      for (let l = 0; l < lo; l += 4)
        for (let c = 0; c < lo; c++) r(l, c, "#495260");
    }),
    o("led", (r) => {
      for (let l = 0; l < lo; l++)
        for (let c = 0; c < lo; c++)
          r(c, l, (c + l) % 5 ? "#ffc35a" : "#ffe09a");
    }),
    o("vent", (r) => {
      a("#2a313c", 0.1)(r);
      for (let l = 2; l < lo; l += 3)
        for (let c = 2; c < 14; c++) r(c, l, "#0d1014");
    }),
    (Sc = new bi(n)),
    (Sc.magFilter = ji),
    (Sc.minFilter = ji),
    (Sc.generateMipmaps = !1),
    (Sc.colorSpace = vi),
    Sc
  );
}
const YQ = (n) => {
  const e = PI.indexOf(n);
  return [(e % a0) / a0, 1 - (Math.floor(e / a0) + 1) / PM, 1 / a0, 1 / PM];
};
class N_ {
  constructor() {
    w(this, "parts", []);
  }
  cube(e, t, i, s, o, a, r, l = {}) {
    const c = new Ct(s, o, a).toNonIndexed();
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
      y = [
        [a, o],
        [a, o],
        [s, a],
        [s, a],
        [s, o],
        [s, o],
      ],
      g = new ze(l.tint ?? 16777215);
    for (let b = 0; b < h; b++) {
      const S = Math.floor(b / 6),
        M = YQ(m(S));
      (d.set(M, b * 4),
        u.set(
          l.fit ? [1, 1] : [Math.max(0.25, y[S][0]), Math.max(0.25, y[S][1])],
          b * 2,
        ),
        f.set([g.r, g.g, g.b], b * 3),
        (p[b] = l.glow ?? 0));
    }
    (c.setAttribute("atlasRect", new oi(d, 4)),
      c.setAttribute("uvRepeat", new oi(u, 2)),
      c.setAttribute("tint", new oi(f, 3)),
      c.setAttribute("glow", new oi(p, 1)),
      this.parts.push(c));
  }
  build() {
    const e = no(this.parts);
    for (const i of this.parts) i.dispose();
    const t = e.getAttribute("position").count;
    return (
      e.setAttribute("blocklight", new oi(new Float32Array(t).fill(0.8), 1)),
      e.setAttribute("skylight", new oi(new Float32Array(t).fill(1), 1)),
      e.computeBoundingSphere(),
      e
    );
  }
}
let Qm;
