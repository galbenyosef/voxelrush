// index-Dp6GxvJu 234 — mesh
// Lines 127914-127939 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const mse = new ny(-1, 1, 1, -1, 0, 1);
class gse extends ci {
  constructor() {
    (super(),
      this.setAttribute("position", new It([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
      this.setAttribute("uv", new It([0, 2, 0, 0, 2, 0], 2)));
  }
}
const yse = new gse();
class vse {
  constructor(e) {
    this._mesh = new le(yse, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, mse);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
