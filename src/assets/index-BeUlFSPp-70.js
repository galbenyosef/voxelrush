// index-BeUlFSPp 70 — push
// Lines 51657-51993 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class B0 {
  pos = [];
  normal = [];
  uv = [];
  color = [];
  light = [];
  sky = 1;
  tint = [1, 1, 1];
  skylight = [];
  index = [];
  anim = [];
  _animMode = 0;
  hasAnim = !1;
  get animMode() {
    return this._animMode;
  }
  set animMode(e) {
    ((this._animMode = e), e && (this.hasAnim = !0));
  }
  quad(e, t, i, n, o, a, r, l, c = 0.14, h) {
    const d = this.pos.length / 3,
      u = o % Ni,
      f = Math.floor(o / Ni);
    for (let p = 0; p < 4; p++) {
      const m = e.corners[p];
      let g = m.pos[1];
      r && g === 1 && (g -= c);
      let y = m.pos[0],
        b = m.pos[2];
      (r &&
        e.dir[1] === 0 &&
        ((g += m.pos[1] === 1 ? cR : -cR),
        e.dir[0] !== 0
          ? ((y += e.dir[0] * Qa), (b += m.pos[2] === 1 ? Qa : -Qa))
          : ((b += e.dir[2] * Qa), (y += m.pos[0] === 1 ? Qa : -Qa))),
        this.pos.push(t + y, i + g, n + b),
        this.normal.push(e.dir[0], e.dir[1], e.dir[2]));
      const S = Za + m.uv[0] * (1 - 2 * Za),
        M = Za + m.uv[1] * (1 - 2 * Za);
      this.uv.push((u + S) / Ni, 1 - (f + 1 - M) / Ni);
      const E = 0.5 + a[p] * (0.5 / 3);
      (this.color.push(E * this.tint[0], E * this.tint[1], E * this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(h ? h[p] : l),
        this.anim.push(this.animMode >= 3 ? 3 : 0));
    }
    a[0] + a[3] > a[1] + a[2]
      ? this.index.push(d, d + 1, d + 3, d, d + 3, d + 2)
      : this.index.push(d, d + 1, d + 2, d + 2, d + 1, d + 3);
  }
  rawQuad(e, t, i, n, o = !1, a = !1) {
    const r = this.pos.length / 3,
      l = i % Ni,
      c = Math.floor(i / Ni),
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
      let g = e[m][0],
        y = e[m][2];
      (a &&
        (Math.abs(t[0]) > 0.5
          ? ((g += t[0] * Qa),
            (y += e[m][2] <= f + 1e-4 ? -Qa : e[m][2] >= p - 1e-4 ? Qa : 0))
          : Math.abs(t[2]) > 0.5 &&
            ((y += t[2] * Qa),
            (g += e[m][0] <= d + 1e-4 ? -Qa : e[m][0] >= u - 1e-4 ? Qa : 0))),
        this.pos.push(g, e[m][1], y),
        this.normal.push(t[0], t[1], t[2]));
      const b = Za + h[m][0] * (1 - 2 * Za),
        S = Za + h[m][1] * (1 - 2 * Za);
      (this.uv.push((l + b) / Ni, 1 - (c + 1 - S) / Ni),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(n));
      const M = h[m][1] === 1;
      this.anim.push(
        this.animMode === UO
          ? M
            ? 5
            : 4
          : this.animMode === YA
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
  rawQuadUV(e, t, i, n, o, a = !1) {
    const r = this.pos.length / 3,
      l = i % Ni,
      c = Math.floor(i / Ni);
    for (let h = 0; h < 4; h++) {
      (this.pos.push(e[h][0], e[h][1], e[h][2]),
        this.normal.push(t[0], t[1], t[2]));
      const d = Za + n[h][0] * (1 - 2 * Za),
        u = Za + n[h][1] * (1 - 2 * Za);
      (this.uv.push((l + d) / Ni, 1 - (c + 1 - u) / Ni),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(o),
        this.anim.push(0));
    }
    (this.index.push(r, r + 1, r + 2, r + 2, r + 1, r + 3),
      a && this.index.push(r, r + 2, r + 1, r + 1, r + 2, r + 3));
  }
  boxUV(e, t, i, n, o, a, r, l, c, h, d) {
    const u = (S) => Math.max(0, Math.min(1, S)),
      f = u(e - c),
      p = u(n - c),
      m = u(t - h),
      g = u(o - h),
      y = u(i - d),
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
        [y, g],
        [y, m],
        [b, g],
        [b, m],
      ],
      l,
    ),
      this.rawQuadUV(
        [
          [n, o, a],
          [n, t, a],
          [n, o, i],
          [n, t, i],
        ],
        [1, 0, 0],
        r.side,
        [
          [1 - b, g],
          [1 - b, m],
          [1 - y, g],
          [1 - y, m],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, o, a],
          [n, o, a],
          [e, o, i],
          [n, o, i],
        ],
        [0, 1, 0],
        r.top,
        [
          [f, b],
          [p, b],
          [f, y],
          [p, y],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, t, i],
          [n, t, i],
          [e, t, a],
          [n, t, a],
        ],
        [0, -1, 0],
        r.bottom,
        [
          [f, 1 - y],
          [p, 1 - y],
          [f, 1 - b],
          [p, 1 - b],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [n, o, i],
          [n, t, i],
          [e, o, i],
          [e, t, i],
        ],
        [0, 0, -1],
        r.side,
        [
          [1 - p, g],
          [1 - p, m],
          [1 - f, g],
          [1 - f, m],
        ],
        l,
      ),
      this.rawQuadUV(
        [
          [e, o, a],
          [e, t, a],
          [n, o, a],
          [n, t, a],
        ],
        [0, 0, 1],
        r.side,
        [
          [f, g],
          [f, m],
          [p, g],
          [p, m],
        ],
        l,
      ));
  }
  box(e, t, i, n, o, a, r, l, c = !1) {
    if (!c) {
      this.boxUV(e, t, i, n, o, a, r, l, e, t, i);
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
          [n, o, a],
          [n, t, a],
          [n, o, i],
          [n, t, i],
        ],
        [1, 0, 0],
        r.side,
        l,
      ),
      this.rawQuad(
        [
          [e, o, a],
          [n, o, a],
          [e, o, i],
          [n, o, i],
        ],
        [0, 1, 0],
        r.top,
        l,
      ),
      this.rawQuad(
        [
          [e, t, i],
          [n, t, i],
          [e, t, a],
          [n, t, a],
        ],
        [0, -1, 0],
        r.bottom,
        l,
      ),
      this.rawQuad(
        [
          [n, o, i],
          [n, t, i],
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
          [n, o, a],
          [n, t, a],
        ],
        [0, 0, 1],
        r.side,
        l,
      ));
  }
  build() {
    if (this.index.length === 0) return null;
    const e = new oi();
    return (
      e.setAttribute("position", new Dt(this.pos, 3)),
      e.setAttribute("normal", new Dt(this.normal, 3)),
      e.setAttribute("uv", new Dt(this.uv, 2)),
      e.setAttribute("color", new Dt(this.color, 3)),
      e.setAttribute("skylight", new Dt(this.skylight, 1)),
      e.setAttribute("blocklight", new Dt(this.light, 1)),
      this.hasAnim && e.setAttribute("anim", new Dt(this.anim, 1)),
      e.setIndex(this.index),
      e
    );
  }
}
const pj = { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
  hR = [
    [0, 0],
    [-0.34, 0],
    [0.34, 0],
    [0, -0.34],
    [0, 0.34],
  ];
