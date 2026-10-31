// index-Dp6GxvJu 157 — push
// Lines 93111-93383 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const EQ = [
  {
    n: [1, 0, 0],
    c: [
      [1, 0, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 1, 0],
    ],
    key: "side",
  },
  {
    n: [-1, 0, 0],
    c: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 1],
    ],
    key: "side",
  },
  {
    n: [0, 1, 0],
    c: [
      [0, 1, 1],
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 0],
    ],
    key: "top",
  },
  {
    n: [0, -1, 0],
    c: [
      [0, 0, 0],
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 1],
    ],
    key: "bottom",
  },
  {
    n: [0, 0, 1],
    c: [
      [0, 0, 1],
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ],
    key: "front",
  },
  {
    n: [0, 0, -1],
    c: [
      [1, 0, 0],
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    key: "side",
  },
];
class x_ {
  constructor() {
    w(this, "lit", new E_());
    w(this, "glow", new E_());
    w(this, "matrix", new bt());
    w(this, "normalMatrix", new Ui());
    w(this, "stack", []);
    w(this, "tmp", new k());
    w(this, "tint", new ze());
  }
  at(e, t, i, s, o, a = 1, r = 0) {
    this.stack.push(this.matrix.clone());
    const l = new bt().compose(
      new k(e, t, i),
      new Jt().setFromEuler(new hi(r, s, 0, "YXZ")),
      new k(a, a, a),
    );
    this.matrix.multiply(l);
    try {
      o();
    } finally {
      this.matrix = this.stack.pop();
    }
  }
  box(e, t, i, s, o, a, r, l = {}) {
    const c = l.glow ? this.glow : this.lit,
      h = typeof r == "number" ? { side: r } : r;
    (this.tint.set(l.tint ?? 16777215),
      this.normalMatrix.getNormalMatrix(this.matrix));
    const d = [s - e, o - t, a - i],
      u = [e, t, i],
      f = l.uvScale ?? 1;
    for (const p of EQ) {
      const m =
          (p.key === "front"
            ? h.front
            : p.key === "top"
              ? h.top
              : p.key === "bottom"
                ? h.bottom
                : void 0) ?? h.side,
        [y, g] = p.n[1] !== 0 ? [0, 2] : p.n[0] !== 0 ? [2, 1] : [0, 1],
        b = l.fit ? [[0, 1]] : T_(u[y] * f, (u[y] + d[y]) * f),
        S = l.fit ? [[0, 1]] : T_(u[g] * f, (u[g] + d[g]) * f);
      for (const [M, x] of b)
        for (const [T, A] of S) {
          const _ = c.count;
          for (const C of p.c) {
            const R = [0, 1, 2].map((F) => {
              if (l.fit || (F !== y && F !== g)) return u[F] + C[F] * d[F];
              const [X, Q] = F === y ? [M, x] : [T, A];
              return (X + C[F] * (Q - X)) / f;
            });
            (this.tmp.set(R[0], R[1], R[2]).applyMatrix4(this.matrix),
              c.pos.push(this.tmp.x, this.tmp.y, this.tmp.z),
              this.tmp
                .set(...p.n)
                .applyMatrix3(this.normalMatrix)
                .normalize(),
              c.normal.push(this.tmp.x, this.tmp.y, this.tmp.z));
            let L, N;
            if (l.fit) ((L = C[y]), (N = C[g]));
            else {
              const F = C[y] ? x : M,
                X = C[g] ? A : T,
                Q = Math.floor(Math.min(M, x) + 1e-6),
                ee = Math.floor(Math.min(T, A) + 1e-6);
              ((L = F - Q), (N = X - ee));
            }
            ((p.n[0] > 0 || p.n[2] < 0) && (L = 1 - L),
              p.n[1] > 0 && (N = 1 - N));
            const D = m % mi,
              H = Math.floor(m / mi),
              G = Ym + L * (1 - 2 * Ym),
              I = Ym + N * (1 - 2 * Ym);
            c.uv.push((D + G) / mi, 1 - (H + 1 - I) / mi);
            const O = l.glow || p.n[1] > 0 ? 1 : p.n[1] < 0 ? 0.62 : 0.86;
            (c.color.push(this.tint.r * O, this.tint.g * O, this.tint.b * O),
              c.extra.push(l.chase ?? 0));
          }
          c.index.push(_, _ + 1, _ + 2, _ + 2, _ + 1, _ + 3);
        }
    }
  }
  quad(e, t, i, s, o, a, r, l = 16777215) {
    this.normalMatrix.getNormalMatrix(this.matrix);
    const c = a.count;
    this.tint.set(l);
    const h = [
      [e, t, r[0], r[1]],
      [i, t, r[2], r[1]],
      [e, s, r[0], r[3]],
      [i, s, r[2], r[3]],
    ];
    for (const [d, u, f, p] of h)
      (this.tmp.set(d, u, o).applyMatrix4(this.matrix),
        a.pos.push(this.tmp.x, this.tmp.y, this.tmp.z),
        this.tmp.set(0, 0, 1).applyMatrix3(this.normalMatrix).normalize(),
        a.normal.push(this.tmp.x, this.tmp.y, this.tmp.z),
        a.uv.push(f, p),
        a.color.push(this.tint.r, this.tint.g, this.tint.b),
        a.extra.push(0));
    a.index.push(c, c + 1, c + 2, c + 2, c + 1, c + 3);
  }
}
function T_(n, e) {
  const t = Math.min(n, e),
    i = Math.max(n, e),
    s = [];
  let o = t;
  for (; o < i - 1e-6;) {
    const a = Math.min(i, Math.floor(o + 1e-6) + 1);
    (s.push([o, a]), (o = a));
  }
  return s.length ? s : [[t, i]];
}
function Mb(n, e) {
  if (!n.count) return null;
  const t = new ci();
  return (
    t.setAttribute("position", new It(n.pos, 3)),
    t.setAttribute("normal", new It(n.normal, 3)),
    t.setAttribute("uv", new It(n.uv, 2)),
    t.setAttribute("color", new It(n.color, 3)),
    e
      ? (t.setAttribute(
          "skylight",
          new It(new Float32Array(n.count).fill(0.25), 1),
        ),
        t.setAttribute(
          "blocklight",
          new It(new Float32Array(n.count).fill(0.85), 1),
        ))
      : t.setAttribute("chase", new It(n.extra, 1)),
    t.setIndex(n.index),
    t.computeBoundingSphere(),
    t
  );
}
const F4 = { value: 0 },
  A_ = new WeakMap();
function xQ(n) {
  let e = A_.get(n);
  return (
    e ||
    ((e = new qt({ map: n, vertexColors: !0, toneMapped: !1 })),
    (e.customProgramCacheKey = () => "fc-casino-glow-v1"),
    (e.onBeforeCompile = (t) => {
      ((t.uniforms.uTime = F4),
        (t.vertexShader =
          `attribute float chase;
varying float vChase;
` +
          t.vertexShader.replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vChase = chase;`,
          )),
        (t.fragmentShader =
          `uniform float uTime;
varying float vChase;
` +
          t.fragmentShader.replace(
            "#include <color_fragment>",
            `#include <color_fragment>
      if (vChase > 0.5 && vChase < 100.0) {
        // marquee chase: every third bulb group lit in turn
        float k = mod(floor(uTime * 6.0) - vChase, 3.0);
        diffuseColor.rgb *= k < 1.0 ? 1.25 : 0.42;
      } else if (vChase >= 100.0) {
        // twinkle / slow neon breathing
        float ph = vChase - 100.0;
        diffuseColor.rgb *= 0.78 + 0.32 * sin(uTime * 2.3 + ph * 2.7) * sin(uTime * 0.7 + ph);
      }`,
          )));
    }),
    A_.set(n, e),
    e)
  );
}
const TQ = (n) => `#${n.toString(16).padStart(6, "0")}`,
  __ = [
    "OLYMPUS CASINO",
    "GATES OF OLYMPUS",
    "BAR",
    "CASHIER",
    "JACKPOT",
    "777",
    "BLACKJACK",
    "OLYMPUS",
    "BONANZA",
    "DOG HOUSE",
    "HEAVEN",
    "SUGAR RUSH",
    "ATHENA",
    "BIG BASS",
    "КАССА",
  ],
  dl = 256,
  vr = 64;
let jm = null;
function AQ(n, e) {
  const t = n.toUpperCase().split(" "),
    i = [];
  let s = "";
  for (const o of t) {
    const a = s ? `${s} ${o}` : o;
    a.length > e && s ? (i.push(s), (s = o)) : (s = a);
  }
  return (s && i.push(s), i.slice(0, 2));
}
