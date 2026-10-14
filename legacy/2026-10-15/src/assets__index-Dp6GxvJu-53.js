// assets__index-Dp6GxvJu 53 — push
// Lines 44479-44817 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class $c {
  constructor() {
    w(this, "pos", []);
    w(this, "normal", []);
    w(this, "uv", []);
    w(this, "color", []);
    w(this, "light", []);
    w(this, "sky", 1);
    w(this, "tint", [1, 1, 1]);
    w(this, "skylight", []);
    w(this, "index", []);
    w(this, "anim", []);
    w(this, "_animMode", 0);
    w(this, "hasAnim", !1);
  }
  get animMode() {
    return this._animMode;
  }
  set animMode(e) {
    ((this._animMode = e), e && (this.hasAnim = !0));
  }
  quad(e, t, i, s, o, a, r, l, c = 0.14, h) {
    const d = this.pos.length / 3,
      u = o % mi,
      f = Math.floor(o / mi);
    for (let p = 0; p < 4; p++) {
      const m = e.corners[p];
      let y = m.pos[1];
      r && y === 1 && (y -= c);
      let g = m.pos[0],
        b = m.pos[2];
      (r &&
        e.dir[1] === 0 &&
        ((y += m.pos[1] === 1 ? zT : -zT),
        e.dir[0] !== 0
          ? ((g += e.dir[0] * ba), (b += m.pos[2] === 1 ? ba : -ba))
          : ((b += e.dir[2] * ba), (g += m.pos[0] === 1 ? ba : -ba))),
        this.pos.push(t + g, i + y, s + b),
        this.normal.push(e.dir[0], e.dir[1], e.dir[2]));
      const S = va + m.uv[0] * (1 - 2 * va),
        M = va + m.uv[1] * (1 - 2 * va);
      this.uv.push((u + S) / mi, 1 - (f + 1 - M) / mi);
      const x = 0.5 + a[p] * (0.5 / 3);
      (this.color.push(x * this.tint[0], x * this.tint[1], x * this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(h ? h[p] : l),
        this.anim.push(this.animMode >= 3 ? 3 : 0));
    }
    a[0] + a[3] > a[1] + a[2]
      ? this.index.push(d, d + 1, d + 3, d, d + 3, d + 2)
      : this.index.push(d, d + 1, d + 2, d + 2, d + 1, d + 3);
  }
  rawQuad(e, t, i, s, o = !1, a = !1) {
    const r = this.pos.length / 3,
      l = i % mi,
      c = Math.floor(i / mi),
      h = [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ];
    let d = 0,
      u = 0,
      f = 0,
      p = 0;
    if (a) {
      ((d = u = e[0][0]), (f = p = e[0][2]));
      for (let m = 1; m < 4; m++)
        ((d = Math.min(d, e[m][0])),
          (u = Math.max(u, e[m][0])),
          (f = Math.min(f, e[m][2])),
          (p = Math.max(p, e[m][2])));
    }
    for (let m = 0; m < 4; m++) {
      let y = e[m][0],
        g = e[m][2];
      (a &&
        (Math.abs(t[0]) > 0.5
          ? ((y += t[0] * ba),
            (g += e[m][2] <= f + 1e-4 ? -ba : e[m][2] >= p - 1e-4 ? ba : 0))
          : Math.abs(t[2]) > 0.5 &&
            ((g += t[2] * ba),
            (y += e[m][0] <= d + 1e-4 ? -ba : e[m][0] >= u - 1e-4 ? ba : 0))),
        this.pos.push(y, e[m][1], g),
        this.normal.push(t[0], t[1], t[2]));
      const b = va + h[m][0] * (1 - 2 * va),
        S = va + h[m][1] * (1 - 2 * va);
      (this.uv.push((l + b) / mi, 1 - (c + 1 - S) / mi),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(s));
      const M = h[m][1] === 1;
      this.anim.push(
        this.animMode === Hk
          ? M
            ? 5
            : 4
          : this.animMode === t4
            ? M
              ? 7
              : 6
            : this.animMode === 3
              ? 3
              : this.animMode
                ? M
                  ? 2
                  : 1
                : 0,
      );
    }
    (this.index.push(r, r + 1, r + 2, r + 2, r + 1, r + 3),
      o && this.index.push(r, r + 2, r + 1, r + 1, r + 2, r + 3));
  }
  rawQuadUV(e, t, i, s, o, a = !1) {
    const r = this.pos.length / 3,
      l = i % mi,
      c = Math.floor(i / mi);
    for (let h = 0; h < 4; h++) {
      (this.pos.push(e[h][0], e[h][1], e[h][2]),
        this.normal.push(t[0], t[1], t[2]));
      const d = va + s[h][0] * (1 - 2 * va),
        u = va + s[h][1] * (1 - 2 * va);
      (this.uv.push((l + d) / mi, 1 - (c + 1 - u) / mi),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(o),
        this.anim.push(0));
    }
    (this.index.push(r, r + 1, r + 2, r + 2, r + 1, r + 3),
      a && this.index.push(r, r + 2, r + 1, r + 1, r + 2, r + 3));
  }
  boxUV(e, t, i, s, o, a, r, l, c, h, d) {
    const u = (S) => Math.max(0, Math.min(1, S)),
      f = u(e - c),
      p = u(s - c),
      m = u(t - h),
      y = u(o - h),
      g = u(i - d),
      b = u(a - d);
    (this.rawQuadUV(
      [
        [e, o, i],
        [e, t, i],
        [e, o, a],
        [e, t, a],
      ],
      [-1, 0, 0],
      r.side,
      [
        [g, y],
        [g, m],
        [b, y],
        [b, m],
      ],
      l,
    ),
      this.rawQuadUV(
        [
          [s, o, a],
          [s, t, a],
          [s, o, i],
          [s, t, i],
        ],
        [1, 0, 0],
        r.side,
        [
          [1 - b, y],
          [1 - b, m],
          [1 - g, y],
          [1 - g, m],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, o, a],
          [s, o, a],
          [e, o, i],
          [s, o, i],
        ],
        [0, 1, 0],
        r.top,
        [
          [f, b],
          [p, b],
          [f, g],
          [p, g],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, t, i],
          [s, t, i],
          [e, t, a],
          [s, t, a],
        ],
        [0, -1, 0],
        r.bottom,
        [
          [f, 1 - g],
          [p, 1 - g],
          [f, 1 - b],
          [p, 1 - b],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [s, o, i],
          [s, t, i],
          [e, o, i],
          [e, t, i],
        ],
        [0, 0, -1],
        r.side,
        [
          [1 - p, y],
          [1 - p, m],
          [1 - f, y],
          [1 - f, m],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, o, a],
          [e, t, a],
          [s, o, a],
          [s, t, a],
        ],
        [0, 0, 1],
        r.side,
        [
          [f, y],
          [f, m],
          [p, y],
          [p, m],
        ],
        l,
      ));
  }
  box(e, t, i, s, o, a, r, l, c = !1) {
    if (!c) {
      this.boxUV(e, t, i, s, o, a, r, l, e, t, i);
      return;
    }
    (this.rawQuad(
      [
        [e, o, i],
        [e, t, i],
        [e, o, a],
        [e, t, a],
      ],
      [-1, 0, 0],
      r.side,
      l,
    ),
      this.rawQuad(
        [
          [s, o, a],
          [s, t, a],
          [s, o, i],
          [s, t, i],
        ],
        [1, 0, 0],
        r.side,
        l,
      ),
      this.rawQuad(
        [
          [e, o, a],
          [s, o, a],
          [e, o, i],
          [s, o, i],
        ],
        [0, 1, 0],
        r.top,
        l,
      ),
      this.rawQuad(
        [
          [e, t, i],
          [s, t, i],
          [e, t, a],
          [s, t, a],
        ],
        [0, -1, 0],
        r.bottom,
        l,
      ),
      this.rawQuad(
        [
          [s, o, i],
          [s, t, i],
          [e, o, i],
          [e, t, i],
        ],
        [0, 0, -1],
        r.side,
        l,
      ),
      this.rawQuad(
        [
          [e, o, a],
          [e, t, a],
          [s, o, a],
          [s, t, a],
        ],
        [0, 0, 1],
        r.side,
        l,
      ));
  }
  build() {
    if (this.index.length === 0) return null;
    const e = new ci();
    return (
      e.setAttribute("position", new It(this.pos, 3)),
      e.setAttribute("normal", new It(this.normal, 3)),
      e.setAttribute("uv", new It(this.uv, 2)),
      e.setAttribute("color", new It(this.color, 3)),
      e.setAttribute("skylight", new It(this.skylight, 1)),
      e.setAttribute("blocklight", new It(this.light, 1)),
      this.hasAnim && e.setAttribute("anim", new It(this.anim, 1)),
      e.setIndex(this.index),
      e
    );
  }
}
const SW = { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
  UT = [
    [0, 0],
    [-0.34, 0],
    [0.34, 0],
    [0, -0.34],
    [0, 0.34],
  ];
