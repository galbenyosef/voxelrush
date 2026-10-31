// index-BeUlFSPp 01 — fog_fragment
// Lines 25944-25968 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Fi.fog_vertex = Fi.fog_vertex.replace(
  "vFogDepth = - mvPosition.z;",
  "vFogDepth = length( mvPosition.xyz );",
);
Fi.fog_fragment = Fi.fog_fragment.replace(
  "float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );",
  "float fogFactor = pow( smoothstep( fogNear, fogFar, vFogDepth ), 1.6 );",
);
const EI = new kd(),
  gx = new Rt(),
  Q3 = new Ar();
let AI = !1;
function _G(s) {
  (gx.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse),
    EI.setFromProjectionMatrix(gx),
    (AI = !0));
}
function TI(s, e) {
  return AI
    ? (Q3.center.copy(s), (Q3.radius = e), EI.intersectsSphere(Q3))
    : !0;
}
function xI(s, e) {
  s.matrixWorldAutoUpdate = e;
}
