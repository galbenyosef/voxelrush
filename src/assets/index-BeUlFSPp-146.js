// index-BeUlFSPp 146 — count
// Lines 81693-81737 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function sE(s, e, t, i, n = !0) {
  if (s === e || !s.id || t <= 0) return 0;
  const o = Math.min(s.count, Math.floor(t));
  if (!e.id || $h(s, e)) {
    const a = Math.min(o, i(s.id) - (e.id ? e.count : 0));
    return a <= 0
      ? 0
      : (e.id || Object.assign(e, s, { count: 0 }),
        (e.count += a),
        (s.count -= a),
        s.count || die(s),
        a);
  }
  if (n && o === s.count && s.count <= i(s.id) && e.count <= i(e.id)) {
    const a = { ...e };
    return (Object.assign(e, s), Object.assign(s, a), o);
  }
  return 0;
}
function uie(s, e, t) {
  let i = 0;
  for (const n of [!0, !1])
    for (const o of e) {
      if (!s.id) return i;
      s === o ||
        !!o.id !== n ||
        (o.id && !$h(s, o)) ||
        (i += sE(s, o, s.count, t, !1));
    }
  return i;
}
const fie = new Set([
  w.TANK,
  w.DRONE,
  w.HELI,
  w.BOAT,
  w.CARRIER,
  w.SUBMARINE,
  w.HIMARS,
  w.PATRIOT,
  w.BTR_TURRET,
  w.TURRET,
  w.MORTAR,
  w.SPACE_ROCKET,
]);
