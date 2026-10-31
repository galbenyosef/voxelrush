// index-BeUlFSPp 221 — push
// Lines 114590-114629 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Nre(s) {
  const e = [],
    t = [],
    i = [];
  let n = 0,
    o = 0;
  for (let a = 256; a < s.length; a++) {
    const r = s[a];
    if (r !== 0) {
      if (_E.has(r)) {
        i.length < 96 && i.push(a);
        continue;
      }
      if (Ore.has(r)) {
        (o++,
          t.length < 48
            ? t.push(a)
            : ((o * 2654435761) >>> 0) % o < 48 && (t[o % 48] = a));
        continue;
      }
      en(r) &&
        s[a - 256] === 0 &&
        r !== v.PINE_LEAVES &&
        (n++,
        e.length < 64
          ? e.push(a)
          : ((n * 2654435761) >>> 0) % n < 64 && (e[n % 64] = a));
    }
  }
  return { leaves: e, grass: t, specials: i };
}
const BC = [zG],
  zC = [],
  Kg = [[0, 0, 0, 1, 1, 1]],
  FC = 96;
function Dre(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) Fc[s[t]] > 0 && e.push(t);
  return e;
}
