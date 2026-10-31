// index-BeUlFSPp 257 — mesh
// Lines 135579-135612 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const K0e = new l5(-1, 1, 1, -1, 0, 1);
class Y0e extends oi {
  constructor() {
    (super(),
      this.setAttribute("position", new Dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
      this.setAttribute("uv", new Dt([0, 2, 0, 0, 2, 0], 2)));
  }
}
const j0e = new Y0e();
class X0e {
  constructor(e) {
    this._mesh = new Q(j0e, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, K0e);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
const yl = { bottom: { value: 155 }, top: { value: 235 } };
function Z0e(s, e) {
  ((yl.bottom.value = s), (yl.top.value = e));
}
let E9 = 1;
function Q0e(s) {
  E9 = s;
}
