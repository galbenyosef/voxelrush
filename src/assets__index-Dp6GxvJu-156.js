// assets__index-Dp6GxvJu 156 — style
// Lines 92763-93110 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const M_ = new k(),
  MQ = new Jt(),
  S_ = new k();
class _I extends $t {
  constructor(e = document.createElement("div")) {
    (super(),
      (this.isCSS3DObject = !0),
      (this.element = e),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function () {
        this.traverse(function (t) {
          t.element instanceof Element &&
            t.element.parentNode !== null &&
            t.element.parentNode.removeChild(t.element);
        });
      }));
  }
  copy(e, t) {
    return (super.copy(e, t), (this.element = e.element.cloneNode(!0)), this);
  }
}
const yr = new bt(),
  SQ = new bt();
class RI {
  constructor(e = {}) {
    const t = this;
    let i, s, o, a;
    const r = { camera: { style: "" }, objects: new WeakMap() },
      l = e.element !== void 0 ? e.element : document.createElement("div");
    ((l.style.overflow = "hidden"), (this.domElement = l));
    const c = document.createElement("div");
    ((c.style.transformOrigin = "0 0"),
      (c.style.pointerEvents = "none"),
      l.appendChild(c));
    const h = document.createElement("div");
    ((h.style.transformStyle = "preserve-3d"),
      c.appendChild(h),
      (this.getSize = function () {
        return { width: i, height: s };
      }),
      (this.render = function (y, g) {
        const b = g.projectionMatrix.elements[5] * a;
        (g.view && g.view.enabled
          ? ((c.style.transform = `translate( ${-g.view.offsetX * (i / g.view.width)}px, ${-g.view.offsetY * (s / g.view.height)}px )`),
            (c.style.transform += `scale( ${g.view.fullWidth / g.view.width}, ${g.view.fullHeight / g.view.height} )`))
          : (c.style.transform = ""),
          y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
          g.parent === null &&
            g.matrixWorldAutoUpdate === !0 &&
            g.updateMatrixWorld());
        let S, M;
        g.isOrthographicCamera &&
          ((S = -(g.right + g.left) / 2), (M = (g.top + g.bottom) / 2));
        const x =
            g.view && g.view.enabled ? g.view.height / g.view.fullHeight : 1,
          T = g.isOrthographicCamera
            ? `scale( ${x} )scale(` +
              b +
              ")translate(" +
              d(S) +
              "px," +
              d(M) +
              "px)" +
              u(g.matrixWorldInverse)
            : `scale( ${x} )translateZ(` + b + "px)" + u(g.matrixWorldInverse),
          _ =
            (g.isPerspectiveCamera ? "perspective(" + b + "px) " : "") +
            T +
            "translate(" +
            o +
            "px," +
            a +
            "px)";
        (r.camera.style !== _ &&
          ((h.style.transform = _), (r.camera.style = _)),
          m(y, y, g));
      }),
      (this.setSize = function (y, g) {
        ((i = y),
          (s = g),
          (o = i / 2),
          (a = s / 2),
          (l.style.width = y + "px"),
          (l.style.height = g + "px"),
          (c.style.width = y + "px"),
          (c.style.height = g + "px"),
          (h.style.width = y + "px"),
          (h.style.height = g + "px"));
      }));
    function d(y) {
      return Math.abs(y) < 1e-10 ? 0 : y;
    }
    function u(y) {
      const g = y.elements;
      return (
        "matrix3d(" +
        d(g[0]) +
        "," +
        d(-g[1]) +
        "," +
        d(g[2]) +
        "," +
        d(g[3]) +
        "," +
        d(g[4]) +
        "," +
        d(-g[5]) +
        "," +
        d(g[6]) +
        "," +
        d(g[7]) +
        "," +
        d(g[8]) +
        "," +
        d(-g[9]) +
        "," +
        d(g[10]) +
        "," +
        d(g[11]) +
        "," +
        d(g[12]) +
        "," +
        d(-g[13]) +
        "," +
        d(g[14]) +
        "," +
        d(g[15]) +
        ")"
      );
    }
    function f(y) {
      const g = y.elements;
      return (
        "translate(-50%,-50%)" +
        ("matrix3d(" +
          d(g[0]) +
          "," +
          d(g[1]) +
          "," +
          d(g[2]) +
          "," +
          d(g[3]) +
          "," +
          d(-g[4]) +
          "," +
          d(-g[5]) +
          "," +
          d(-g[6]) +
          "," +
          d(-g[7]) +
          "," +
          d(g[8]) +
          "," +
          d(g[9]) +
          "," +
          d(g[10]) +
          "," +
          d(g[11]) +
          "," +
          d(g[12]) +
          "," +
          d(g[13]) +
          "," +
          d(g[14]) +
          "," +
          d(g[15]) +
          ")")
      );
    }
    function p(y) {
      y.isCSS3DObject && (y.element.style.display = "none");
      for (let g = 0, b = y.children.length; g < b; g++) p(y.children[g]);
    }
    function m(y, g, b, S) {
      if (y.visible === !1) {
        p(y);
        return;
      }
      if (y.isCSS3DObject) {
        const M = y.layers.test(b.layers) === !0,
          x = y.element;
        if (((x.style.display = M === !0 ? "" : "none"), M === !0)) {
          y.onBeforeRender(t, g, b);
          let T;
          y.isCSS3DSprite
            ? (yr.copy(b.matrixWorldInverse),
              yr.transpose(),
              y.rotation2D !== 0 && yr.multiply(SQ.makeRotationZ(y.rotation2D)),
              y.matrixWorld.decompose(M_, MQ, S_),
              yr.setPosition(M_),
              yr.scale(S_),
              (yr.elements[3] = 0),
              (yr.elements[7] = 0),
              (yr.elements[11] = 0),
              (yr.elements[15] = 1),
              (T = f(yr)))
            : (T = f(y.matrixWorld));
          const A = r.objects.get(y);
          if (A === void 0 || A.style !== T) {
            x.style.transform = T;
            const _ = { style: T };
            r.objects.set(y, _);
          }
          (x.parentNode !== h && h.appendChild(x), y.onAfterRender(t, g, b));
        }
      }
      for (let M = 0, x = y.children.length; M < x; M++) m(y.children[M], g, b);
    }
  }
}
const Wg = {
  A: "0e11111f111111",
  B: "1e11111e11111e",
  C: "0e11101010110e",
  D: "1e11111111111e",
  E: "1f10101e10101f",
  F: "1f10101e101010",
  G: "0e11101711110f",
  H: "1111111f111111",
  I: "0e04040404040e",
  J: "0702020212120c",
  K: "11121418141211",
  L: "1010101010101f",
  M: "111b1515111111",
  N: "11191513111111",
  O: "0e11111111110e",
  P: "1e11111e101010",
  Q: "0e11111115120d",
  R: "1e11111e141211",
  S: "0f10100e01011e",
  T: "1f040404040404",
  U: "1111111111110e",
  V: "11111111110a04",
  W: "11111115151b11",
  X: "11110a040a1111",
  Y: "11110a04040404",
  Z: "1f01020408101f",
  0: "0e11131519110e",
  1: "040c040404040e",
  2: "0e11010204081f",
  3: "1f02040601110e",
  4: "02060a121f0202",
  5: "1f101e0101110e",
  6: "0610101e11110e",
  7: "1f010204080808",
  8: "0e11110e11110e",
  9: "0e11110f01020c",
  "[": "0e08080808080e",
  "]": "0e02020202020e",
  "-": "0000001f000000",
  "+": "0004041f040400",
  ",": "00000000000408",
  ".": "00000000000004",
  ":": "00040000040000",
  "/": "01020204080810",
  "!": "04040404040004",
  "?": "0e110102040004",
  "(": "02040808080402",
  ")": "08040202020408",
  "=": "00001f001f0000",
  _: "0000000000001f",
  "%": "19190204081313",
  "<": "01020408040201",
  ">": "10080402040810",
  Б: "1f10101e11111e",
  Г: "1f101010101010",
  Д: "0e0a0a0a0a1f11",
  Ж: "15150e040e1515",
  З: "0e11010601110e",
  И: "11111315191111",
  Й: "0a041113151911",
  Л: "07090909111111",
  П: "1f111111111111",
  У: "1111110f01010e",
  Ф: "041f15151f0404",
  Ц: "12121212121f01",
  Ч: "1111110f010101",
  Ш: "1515151515151f",
  Щ: "15151515151f01",
  Ъ: "1818080e09090e",
  Ы: "11111119151519",
  Ь: "1010101e11111e",
  Э: "0e11010701110e",
  Ю: "1215151d151512",
  Я: "0f11110f050911",
  Ё: "0a001f101e101f",
  І: "0e04040404040e",
  Ї: "0a000e0404040e",
  Є: "0e11101c10110e",
  Ґ: "011f1010101010",
};
for (const [n, e] of Object.entries({
  А: "A",
  В: "B",
  Е: "E",
  К: "K",
  М: "M",
  Н: "H",
  О: "O",
  Р: "P",
  С: "C",
  Т: "T",
  Х: "X",
}))
  Wg[n] = Wg[e];
function qp(n, e, t, i) {
  const s = Array.from(e.toUpperCase());
  let o = Math.floor((i - s.length * 6 + 1) / 2);
  for (const a of s) {
    if (a !== " ") {
      const r = Wg[a] ?? Wg["?"];
      for (let l = 0; l < 7; l++) {
        const c = parseInt(r.slice(l * 2, l * 2 + 2), 16);
        for (let h = 0; h < 5; h++)
          c & (1 << (4 - h)) && n.fillRect(o + h, t + l, 1, 1);
      }
    }
    o += 6;
  }
}
const Lh = (n) => de.find((e) => e.name === n).tex[0],
  Ym = 0.02,
  Dt = {
    ...ds,
    CHROME: Lh("lightgray_clay"),
    RED: Lh("red_clay"),
    BLACK: Lh("black_clay"),
    WHITE: Lh("white_clay"),
    LEAVES: Lh("tropical_leaves"),
    TERRACOTTA: Lh("brown_clay"),
    PLANKS: Lh("dark_planks"),
  };
class E_ {
  constructor() {
    w(this, "pos", []);
    w(this, "normal", []);
    w(this, "uv", []);
    w(this, "color", []);
    w(this, "extra", []);
    w(this, "index", []);
  }
  get count() {
    return this.pos.length / 3;
  }
}
