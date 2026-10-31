// index-BeUlFSPp 12 — bonushp
// Lines 29579-29601 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function CW(s) {
  let e = 0,
    t = 0,
    i = 0,
    n = 0;
  for (const o of s) {
    const a = T0[o];
    a &&
      ((e += a.bonusHp),
      (t += a.bulletResist),
      (i += a.explodeResist),
      (n += a.fallResist));
  }
  return {
    bonusHp: e,
    bulletResist: Math.min(0.78, t),
    explodeResist: Math.min(0.72, i),
    fallResist: Math.min(0.55, n),
  };
}
function R1(s) {
  return _1 + CW(s).bonusHp;
}
