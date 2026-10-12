// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 28 — push
// Lines 8635-8973 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Re {
  constructor() {
    K(this, "pos", []);
    K(this, "normal", []);
    K(this, "uv", []);
    K(this, "color", []);
    K(this, "light", []);
    K(this, "sky", 1);
    K(this, "tint", [1, 1, 1]);
    K(this, "skylight", []);
    K(this, "index", []);
    K(this, "anim", []);
    K(this, "_animMode", 0);
    K(this, "hasAnim", !1);
  }
  get animMode() {
    return this._animMode;
  }
  set animMode(t) {
    ((this._animMode = t), t && (this.hasAnim = !0));
  }
  quad(t, e, s, n, i, h, c, o, a = 0.14, u) {
    const d = this.pos.length / 3,
      l = i % xt,
      p = Math.floor(i / xt);
    for (let m = 0; m < 4; m++) {
      const _ = t.corners[m];
      let y = _.pos[1];
      c && y === 1 && (y -= a);
      let E = _.pos[0],
        M = _.pos[2];
      (c &&
        t.dir[1] === 0 &&
        ((y += _.pos[1] === 1 ? Yn : -Yn),
        t.dir[0] !== 0
          ? ((E += t.dir[0] * St), (M += _.pos[2] === 1 ? St : -St))
          : ((M += t.dir[2] * St), (E += _.pos[0] === 1 ? St : -St))),
        this.pos.push(e + E, s + y, n + M),
        this.normal.push(t.dir[0], t.dir[1], t.dir[2]));
      const g = Mt + _.uv[0] * (1 - 2 * Mt),
        L = Mt + _.uv[1] * (1 - 2 * Mt);
      this.uv.push((l + g) / xt, 1 - (p + 1 - L) / xt);
      const I = 0.5 + h[m] * (0.5 / 3);
      (this.color.push(I * this.tint[0], I * this.tint[1], I * this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(u ? u[m] : o),
        this.anim.push(this.animMode >= 3 ? 3 : 0));
    }
    h[0] + h[3] > h[1] + h[2]
      ? this.index.push(d, d + 1, d + 3, d, d + 3, d + 2)
      : this.index.push(d, d + 1, d + 2, d + 2, d + 1, d + 3);
  }
  rawQuad(t, e, s, n, i = !1, h = !1) {
    const c = this.pos.length / 3,
      o = s % xt,
      a = Math.floor(s / xt),
      u = [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ];
    let d = 0,
      l = 0,
      p = 0,
      m = 0;
    if (h) {
      ((d = l = t[0][0]), (p = m = t[0][2]));
      for (let _ = 1; _ < 4; _++)
        ((d = Math.min(d, t[_][0])),
          (l = Math.max(l, t[_][0])),
          (p = Math.min(p, t[_][2])),
          (m = Math.max(m, t[_][2])));
    }
    for (let _ = 0; _ < 4; _++) {
      let y = t[_][0],
        E = t[_][2];
      (h &&
        (Math.abs(e[0]) > 0.5
          ? ((y += e[0] * St),
            (E += t[_][2] <= p + 1e-4 ? -St : t[_][2] >= m - 1e-4 ? St : 0))
          : Math.abs(e[2]) > 0.5 &&
            ((E += e[2] * St),
            (y += t[_][0] <= d + 1e-4 ? -St : t[_][0] >= l - 1e-4 ? St : 0))),
        this.pos.push(y, t[_][1], E),
        this.normal.push(e[0], e[1], e[2]));
      const M = Mt + u[_][0] * (1 - 2 * Mt),
        g = Mt + u[_][1] * (1 - 2 * Mt);
      (this.uv.push((o + M) / xt, 1 - (a + 1 - g) / xt),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(n));
      const L = u[_][1] === 1;
      this.anim.push(
        this.animMode === bi
          ? L
            ? 5
            : 4
          : this.animMode === mn
            ? L
              ? 7
              : 6
            : this.animMode === 3
              ? 3
              : this.animMode
                ? L
                  ? 2
                  : 1
                : 0,
      );
    }
    (this.index.push(c, c + 1, c + 2, c + 2, c + 1, c + 3),
      i && this.index.push(c, c + 2, c + 1, c + 1, c + 2, c + 3));
  }
  rawQuadUV(t, e, s, n, i, h = !1) {
    const c = this.pos.length / 3,
      o = s % xt,
      a = Math.floor(s / xt);
    for (let u = 0; u < 4; u++) {
      (this.pos.push(t[u][0], t[u][1], t[u][2]),
        this.normal.push(e[0], e[1], e[2]));
      const d = Mt + n[u][0] * (1 - 2 * Mt),
        l = Mt + n[u][1] * (1 - 2 * Mt);
      (this.uv.push((o + d) / xt, 1 - (a + 1 - l) / xt),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(i),
        this.anim.push(0));
    }
    (this.index.push(c, c + 1, c + 2, c + 2, c + 1, c + 3),
      h && this.index.push(c, c + 2, c + 1, c + 1, c + 2, c + 3));
  }
  boxUV(t, e, s, n, i, h, c, o, a, u, d) {
    const l = (g) => Math.max(0, Math.min(1, g)),
      p = l(t - a),
      m = l(n - a),
      _ = l(e - u),
      y = l(i - u),
      E = l(s - d),
      M = l(h - d);
    (this.rawQuadUV(
      [
        [t, i, s],
        [t, e, s],
        [t, i, h],
        [t, e, h],
      ],
      [-1, 0, 0],
      c.side,
      [
        [E, y],
        [E, _],
        [M, y],
        [M, _],
      ],
      o,
    ),
      this.rawQuadUV(
        [
          [n, i, h],
          [n, e, h],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        c.side,
        [
          [1 - M, y],
          [1 - M, _],
          [1 - E, y],
          [1 - E, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, h],
          [n, i, h],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        c.top,
        [
          [p, M],
          [m, M],
          [p, E],
          [m, E],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, e, s],
          [n, e, s],
          [t, e, h],
          [n, e, h],
        ],
        [0, -1, 0],
        c.bottom,
        [
          [p, 1 - E],
          [m, 1 - E],
          [p, 1 - M],
          [m, 1 - M],
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
        c.side,
        [
          [1 - m, y],
          [1 - m, _],
          [1 - p, y],
          [1 - p, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, h],
          [t, e, h],
          [n, i, h],
          [n, e, h],
        ],
        [0, 0, 1],
        c.side,
        [
          [p, y],
          [p, _],
          [m, y],
          [m, _],
        ],
        o,
      ));
  }
  box(t, e, s, n, i, h, c, o, a = !1) {
    if (!a) {
      this.boxUV(t, e, s, n, i, h, c, o, t, e, s);
      return;
    }
    (this.rawQuad(
      [
        [t, i, s],
        [t, e, s],
        [t, i, h],
        [t, e, h],
      ],
      [-1, 0, 0],
      c.side,
      o,
    ),
      this.rawQuad(
        [
          [n, i, h],
          [n, e, h],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        c.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, h],
          [n, i, h],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        c.top,
        o,
      ),
      this.rawQuad(
        [
          [t, e, s],
          [n, e, s],
          [t, e, h],
          [n, e, h],
        ],
        [0, -1, 0],
        c.bottom,
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
        c.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, h],
          [t, e, h],
          [n, i, h],
          [n, e, h],
        ],
        [0, 0, 1],
        c.side,
        o,
      ));
  }
  build() {
    if (this.index.length === 0) return null;
    const t = new Os();
    return (
      t.setAttribute("position", new Nt(this.pos, 3)),
      t.setAttribute("normal", new Nt(this.normal, 3)),
      t.setAttribute("uv", new Nt(this.uv, 2)),
      t.setAttribute("color", new Nt(this.color, 3)),
      t.setAttribute("skylight", new Nt(this.skylight, 1)),
      t.setAttribute("blocklight", new Nt(this.light, 1)),
      this.hasAnim && t.setAttribute("anim", new Nt(this.anim, 1)),
      t.setIndex(this.index),
      t
    );
  }
}
const i0 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
  Vn = [
    [0, 0],
    [-0.34, 0],
    [0.34, 0],
    [0, -0.34],
    [0, 0.34],
  ];
