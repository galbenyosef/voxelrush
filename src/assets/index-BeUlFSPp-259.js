// index-BeUlFSPp 259 — math
// Lines 136371-136408 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Ea(s, e, t = Tc) {
  const i = new Gi({
    vertexShader: the,
    fragmentShader: s,
    uniforms: e,
    depthTest: !1,
    depthWrite: !1,
    blending: t,
  });
  return new X0e(i);
}
function Dr(s, e, t = {}) {
  const i = new tl(Math.max(1, s), Math.max(1, e), {
    type: xd,
    format: bo,
    depthBuffer: !1,
    minFilter: pn,
    magFilter: pn,
    generateMipmaps: !1,
    ...t,
  });
  return ((i.texture.colorSpace = Er), i);
}
function mhe() {
  const s = [];
  let e = 7;
  const t = () => ((e = (e * 16807) % 2147483647) - 1) / 2147483646;
  for (let i = 0; i < 16; i++) {
    const n = new k(t() * 2 - 1, t() * 2 - 1, 0.15 + t() * 0.85).normalize(),
      o = i / 16;
    (n.multiplyScalar(0.12 + 0.88 * o * o), s.push(n));
  }
  return s;
}
const kM = new k(),
  ghe = new k(),
  yhe = new ct(),
  CM = new Ge();
