// assets__index-Dp6GxvJu 236 — math
// Lines 128696-128733 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function ea(n, e, t = Nl) {
  const i = new sn({
    vertexShader: Mse,
    fragmentShader: n,
    uniforms: e,
    depthTest: !1,
    depthWrite: !1,
    blending: t,
  });
  return new vse(i);
}
function Ya(n, e, t = {}) {
  const i = new fr(Math.max(1, n), Math.max(1, e), {
    type: x0,
    format: po,
    depthBuffer: !1,
    minFilter: Jn,
    magFilter: Jn,
    generateMipmaps: !1,
    ...t,
  });
  return ((i.texture.colorSpace = $r), i);
}
function Nse() {
  const n = [];
  let e = 7;
  const t = () => ((e = (e * 16807) % 2147483647) - 1) / 2147483646;
  for (let i = 0; i < 16; i++) {
    const s = new k(t() * 2 - 1, t() * 2 - 1, 0.15 + t() * 0.85).normalize(),
      o = i / 16;
    (s.multiplyScalar(0.12 + 0.88 * o * o), n.push(s));
  }
  return n;
}
const o3 = new k(),
  Dse = new k(),
  Bse = new tt(),
  a3 = new ze();
