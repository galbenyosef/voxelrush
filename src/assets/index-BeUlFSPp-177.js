// index-BeUlFSPp 177 — style
// Lines 100177-100511 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Lne {
  constructor(e = {}) {
    const t = this;
    let i, n, o, a;
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
        return { width: i, height: n };
      }),
      (this.render = function (g, y) {
        const b = y.projectionMatrix.elements[5] * a;
        (y.view && y.view.enabled
          ? ((c.style.transform = `translate( ${-y.view.offsetX * (i / y.view.width)}px, ${-y.view.offsetY * (n / y.view.height)}px )`),
            (c.style.transform += `scale( ${y.view.fullWidth / y.view.width}, ${y.view.fullHeight / y.view.height} )`))
          : (c.style.transform = ""),
          g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(),
          y.parent === null &&
            y.matrixWorldAutoUpdate === !0 &&
            y.updateMatrixWorld());
        let S, M;
        y.isOrthographicCamera &&
          ((S = -(y.right + y.left) / 2), (M = (y.top + y.bottom) / 2));
        const E =
            y.view && y.view.enabled ? y.view.height / y.view.fullHeight : 1,
          A = y.isOrthographicCamera
            ? `scale( ${E} )scale(` +
              b +
              ")translate(" +
              d(S) +
              "px," +
              d(M) +
              "px)" +
              u(y.matrixWorldInverse)
            : `scale( ${E} )translateZ(` + b + "px)" + u(y.matrixWorldInverse),
          x =
            (y.isPerspectiveCamera ? "perspective(" + b + "px) " : "") +
            A +
            "translate(" +
            o +
            "px," +
            a +
            "px)";
        (r.camera.style !== x &&
          ((h.style.transform = x), (r.camera.style = x)),
          m(g, g, y));
      }),
      (this.setSize = function (g, y) {
        ((i = g),
          (n = y),
          (o = i / 2),
          (a = n / 2),
          (l.style.width = g + "px"),
          (l.style.height = y + "px"),
          (c.style.width = g + "px"),
          (c.style.height = y + "px"),
          (h.style.width = g + "px"),
          (h.style.height = y + "px"));
      }));
    function d(g) {
      return Math.abs(g) < 1e-10 ? 0 : g;
    }
    function u(g) {
      const y = g.elements;
      return (
        "matrix3d(" +
        d(y[0]) +
        "," +
        d(-y[1]) +
        "," +
        d(y[2]) +
        "," +
        d(y[3]) +
        "," +
        d(y[4]) +
        "," +
        d(-y[5]) +
        "," +
        d(y[6]) +
        "," +
        d(y[7]) +
        "," +
        d(y[8]) +
        "," +
        d(-y[9]) +
        "," +
        d(y[10]) +
        "," +
        d(y[11]) +
        "," +
        d(y[12]) +
        "," +
        d(-y[13]) +
        "," +
        d(y[14]) +
        "," +
        d(y[15]) +
        ")"
      );
    }
    function f(g) {
      const y = g.elements;
      return (
        "translate(-50%,-50%)" +
        ("matrix3d(" +
          d(y[0]) +
          "," +
          d(y[1]) +
          "," +
          d(y[2]) +
          "," +
          d(y[3]) +
          "," +
          d(-y[4]) +
          "," +
          d(-y[5]) +
          "," +
          d(-y[6]) +
          "," +
          d(-y[7]) +
          "," +
          d(y[8]) +
          "," +
          d(y[9]) +
          "," +
          d(y[10]) +
          "," +
          d(y[11]) +
          "," +
          d(y[12]) +
          "," +
          d(y[13]) +
          "," +
          d(y[14]) +
          "," +
          d(y[15]) +
          ")")
      );
    }
    function p(g) {
      g.isCSS3DObject && (g.element.style.display = "none");
      for (let y = 0, b = g.children.length; y < b; y++) p(g.children[y]);
    }
    function m(g, y, b, S) {
      if (g.visible === !1) {
        p(g);
        return;
      }
      if (g.isCSS3DObject) {
        const M = g.layers.test(b.layers) === !0,
          E = g.element;
        if (((E.style.display = M === !0 ? "" : "none"), M === !0)) {
          g.onBeforeRender(t, y, b);
          let A;
          g.isCSS3DSprite
            ? (cl.copy(b.matrixWorldInverse),
              cl.transpose(),
              g.rotation2D !== 0 &&
                cl.multiply(Cne.makeRotationZ(g.rotation2D)),
              g.matrixWorld.decompose(Jk, Rne, eC),
              cl.setPosition(Jk),
              cl.scale(eC),
              (cl.elements[3] = 0),
              (cl.elements[7] = 0),
              (cl.elements[11] = 0),
              (cl.elements[15] = 1),
              (A = f(cl)))
            : (A = f(g.matrixWorld));
          const T = r.objects.get(g);
          if (T === void 0 || T.style !== A) {
            E.style.transform = A;
            const x = { style: A };
            r.objects.set(g, x);
          }
          (E.parentNode !== h && h.appendChild(E), g.onAfterRender(t, y, b));
        }
      }
      for (let M = 0, E = g.children.length; M < E; M++) m(g.children[M], y, b);
    }
  }
}
const Xv = {
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
for (const [s, e] of Object.entries({
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
  Xv[s] = Xv[e];
function tC(s, e, t, i) {
  const n = Array.from(e.toUpperCase());
  let o = Math.floor((i - n.length * 6 + 1) / 2);
  for (const a of n) {
    if (a !== " ") {
      const r = Xv[a] ?? Xv["?"];
      for (let l = 0; l < 7; l++) {
        const c = parseInt(r.slice(l * 2, l * 2 + 2), 16);
        for (let h = 0; h < 5; h++)
          c & (1 << (4 - h)) && s.fillRect(o + h, t + l, 1, 1);
      }
    }
    o += 6;
  }
}
const wh = (s) => le.find((e) => e.name === s).tex[0];
(wh("lightgray_clay"),
  wh("red_clay"),
  wh("black_clay"),
  wh("white_clay"),
  wh("tropical_leaves"),
  wh("brown_clay"),
  wh("dark_planks"));
const Ine = "http://127.0.0.1:8080/?mode=sandbox",
  Qs = { width: 1.6, height: 0.9, x: 0, y: 1.7, z: -0.53, tilt: -Math.PI / 15 },
  $p = (s) => (-s.rotation * Math.PI) / 2;
function iC(s) {
  if (
    typeof s != "string" ||
    s.length > 2048 ||
    /[\u0000-\u001f\u007f]/.test(s)
  )
    return;
  const e = s.trim();
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
