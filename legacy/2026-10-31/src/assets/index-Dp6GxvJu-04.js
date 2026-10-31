// index-Dp6GxvJu 04 — bonushp
// Lines 26803-26825 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function HH(n) {
  let e = 0,
    t = 0,
    i = 0,
    s = 0;
  for (const o of n) {
    const a = Nc[o];
    a &&
      ((e += a.bonusHp),
      (t += a.bulletResist),
      (i += a.explodeResist),
      (s += a.fallResist));
  }
  return {
    bonusHp: e,
    bulletResist: Math.min(0.78, t),
    explodeResist: Math.min(0.72, i),
    fallResist: Math.min(0.55, s),
  };
}
function Vv(n) {
  return Vf + HH(n).bonusHp;
}
