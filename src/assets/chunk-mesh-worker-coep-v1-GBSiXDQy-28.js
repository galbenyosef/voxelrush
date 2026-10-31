// chunk-mesh-worker-coep-v1-GBSiXDQy 28 — push
// Lines 8665-9001 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class xe {
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
  set animMode(t) {
    ((this._animMode = t), t && (this.hasAnim = !0));
  }
  quad(t, e, s, n, i, c, h, o, a = 0.14, u) {
    const d = this.pos.length / 3,
      l = i % _t,
      f = Math.floor(i / _t);
    for (let m = 0; m < 4; m++) {
      const _ = t.corners[m];
      let g = _.pos[1];
      h && g === 1 && (g -= a);
      let y = _.pos[0],
        R = _.pos[2];
      (h &&
        t.dir[1] === 0 &&
        ((g += _.pos[1] === 1 ? Hn : -Hn),
        t.dir[0] !== 0
          ? ((y += t.dir[0] * At), (R += _.pos[2] === 1 ? At : -At))
          : ((R += t.dir[2] * At), (y += _.pos[0] === 1 ? At : -At))),
        this.pos.push(e + y, s + g, n + R),
        this.normal.push(t.dir[0], t.dir[1], t.dir[2]));
      const E = Et + _.uv[0] * (1 - 2 * Et),
        x = Et + _.uv[1] * (1 - 2 * Et);
      this.uv.push((l + E) / _t, 1 - (f + 1 - x) / _t);
      const S = 0.5 + c[m] * (0.5 / 3);
      (this.color.push(S * this.tint[0], S * this.tint[1], S * this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(u ? u[m] : o),
        this.anim.push(this.animMode >= 3 ? 3 : 0));
    }
    c[0] + c[3] > c[1] + c[2]
      ? this.index.push(d, d + 1, d + 3, d, d + 3, d + 2)
      : this.index.push(d, d + 1, d + 2, d + 2, d + 1, d + 3);
  }
  rawQuad(t, e, s, n, i = !1, c = !1) {
    const h = this.pos.length / 3,
      o = s % _t,
      a = Math.floor(s / _t),
      u = [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ];
    let d = 0,
      l = 0,
      f = 0,
      m = 0;
    if (c) {
      ((d = l = t[0][0]), (f = m = t[0][2]));
      for (let _ = 1; _ < 4; _++)
        ((d = Math.min(d, t[_][0])),
          (l = Math.max(l, t[_][0])),
          (f = Math.min(f, t[_][2])),
          (m = Math.max(m, t[_][2])));
    }
    for (let _ = 0; _ < 4; _++) {
      let g = t[_][0],
        y = t[_][2];
      (c &&
        (Math.abs(e[0]) > 0.5
          ? ((g += e[0] * At),
            (y += t[_][2] <= f + 1e-4 ? -At : t[_][2] >= m - 1e-4 ? At : 0))
          : Math.abs(e[2]) > 0.5 &&
            ((y += e[2] * At),
            (g += t[_][0] <= d + 1e-4 ? -At : t[_][0] >= l - 1e-4 ? At : 0))),
        this.pos.push(g, t[_][1], y),
        this.normal.push(e[0], e[1], e[2]));
      const R = Et + u[_][0] * (1 - 2 * Et),
        E = Et + u[_][1] * (1 - 2 * Et);
      (this.uv.push((o + R) / _t, 1 - (a + 1 - E) / _t),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(n));
      const x = u[_][1] === 1;
      this.anim.push(
        this.animMode === Ti
          ? x
            ? 5
            : 4
          : this.animMode === pn
            ? x
              ? 7
              : 6
            : this.animMode === 3
              ? 3
              : this.animMode
                ? x
                  ? 2
                  : 1
                : 0,
      );
    }
    (this.index.push(h, h + 1, h + 2, h + 2, h + 1, h + 3),
      i && this.index.push(h, h + 2, h + 1, h + 1, h + 2, h + 3));
  }
  rawQuadUV(t, e, s, n, i, c = !1) {
    const h = this.pos.length / 3,
      o = s % _t,
      a = Math.floor(s / _t);
    for (let u = 0; u < 4; u++) {
      (this.pos.push(t[u][0], t[u][1], t[u][2]),
        this.normal.push(e[0], e[1], e[2]));
      const d = Et + n[u][0] * (1 - 2 * Et),
        l = Et + n[u][1] * (1 - 2 * Et);
      (this.uv.push((o + d) / _t, 1 - (a + 1 - l) / _t),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(i),
        this.anim.push(0));
    }
    (this.index.push(h, h + 1, h + 2, h + 2, h + 1, h + 3),
      c && this.index.push(h, h + 2, h + 1, h + 1, h + 2, h + 3));
  }
  boxUV(t, e, s, n, i, c, h, o, a, u, d) {
    const l = (E) => Math.max(0, Math.min(1, E)),
      f = l(t - a),
      m = l(n - a),
      _ = l(e - u),
      g = l(i - u),
      y = l(s - d),
      R = l(c - d);
    (this.rawQuadUV(
      [
        [t, i, s],
        [t, e, s],
        [t, i, c],
        [t, e, c],
      ],
      [-1, 0, 0],
      h.side,
      [
        [y, g],
        [y, _],
        [R, g],
        [R, _],
      ],
      o,
    ),
      this.rawQuadUV(
        [
          [n, i, c],
          [n, e, c],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        h.side,
        [
          [1 - R, g],
          [1 - R, _],
          [1 - y, g],
          [1 - y, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, c],
          [n, i, c],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        h.top,
        [
          [f, R],
          [m, R],
          [f, y],
          [m, y],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, e, s],
          [n, e, s],
          [t, e, c],
          [n, e, c],
        ],
        [0, -1, 0],
        h.bottom,
        [
          [f, 1 - y],
          [m, 1 - y],
          [f, 1 - R],
          [m, 1 - R],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [n, i, s],
          [n, e, s],
          [t, i, s],
          [t, e, s],
        ],
        [0, 0, -1],
        h.side,
        [
          [1 - m, g],
          [1 - m, _],
          [1 - f, g],
          [1 - f, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, c],
          [t, e, c],
          [n, i, c],
          [n, e, c],
        ],
        [0, 0, 1],
        h.side,
        [
          [f, g],
          [f, _],
          [m, g],
          [m, _],
        ],
        o,
      ));
  }
  box(t, e, s, n, i, c, h, o, a = !1) {
    if (!a) {
      this.boxUV(t, e, s, n, i, c, h, o, t, e, s);
      return;
    }
    (this.rawQuad(
      [
        [t, i, s],
        [t, e, s],
        [t, i, c],
        [t, e, c],
      ],
      [-1, 0, 0],
      h.side,
      o,
    ),
      this.rawQuad(
        [
          [n, i, c],
          [n, e, c],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        h.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, c],
          [n, i, c],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        h.top,
        o,
      ),
      this.rawQuad(
        [
          [t, e, s],
          [n, e, s],
          [t, e, c],
          [n, e, c],
        ],
        [0, -1, 0],
        h.bottom,
        o,
      ),
      this.rawQuad(
        [
          [n, i, s],
          [n, e, s],
          [t, i, s],
          [t, e, s],
        ],
        [0, 0, -1],
        h.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, c],
          [t, e, c],
          [n, i, c],
          [n, e, c],
        ],
        [0, 0, 1],
        h.side,
        o,
      ));
  }
  build() {
    if (this.index.length === 0) return null;
    const t = new bs();
    return (
      t.setAttribute("position", new Ot(this.pos, 3)),
      t.setAttribute("normal", new Ot(this.normal, 3)),
      t.setAttribute("uv", new Ot(this.uv, 2)),
      t.setAttribute("color", new Ot(this.color, 3)),
      t.setAttribute("skylight", new Ot(this.skylight, 1)),
      t.setAttribute("blocklight", new Ot(this.light, 1)),
      this.hasAnim && t.setAttribute("anim", new Ot(this.anim, 1)),
      t.setIndex(this.index),
      t
    );
  }
}
const n0 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
  Yn = [
    [0, 0],
    [-0.34, 0],
    [0.34, 0],
    [0, -0.34],
    [0, 0.34],
  ];
