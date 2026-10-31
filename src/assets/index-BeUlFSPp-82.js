// index-BeUlFSPp 82 — add
// Lines 55485-55524 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Rv(s, e) {
  const t = new re();
  ((t.name = s ? "buis-front" : "buis-rear"),
    t.add(me(0.022, 0.008, 0.03, rn, 0, 0.004, 0, "gloss")));
  const i = new re();
  if (((i.position.y = 0.008), s)) {
    for (const n of [-1, 1])
      i.add(me(0.004, 0.034, 0.012, rn, n * 0.0085, 0.017, 0, "gloss"));
    (i.add(me(0.0028, 0.032, 0.004, rn, 0, 0.016, 0, "matte")),
      i.add(me(0.02, 0.006, 0.012, rn, 0, 0.003, 0, "gloss")));
  } else {
    i.add(me(0.024, 0.012, 0.006, rn, 0, 0.006, 0, "gloss"));
    for (const n of [-1, 1])
      i.add(me(0.005, 0.034, 0.006, rn, n * 0.0095, 0.029, 0, "gloss"));
    (i.add(me(0.024, 0.005, 0.006, rn, 0, 0.044, 0, "gloss")),
      i.add(me(0.014, 0.006, 0.005, rn, 0, 0.0215, 0, "gloss")));
  }
  return (e && (i.rotation.x = s ? -1.45 : 1.45), t.add(i), an(t));
}
function ZO(s, e, t, i) {
  const n = new re();
  ((n.name = "foregrip"),
    n.add(me(0.024, 0.01, 0.036, rn, 0, -0.005, 0, "gloss")));
  const o = new Q(new Tt(0.0135, 0.0125, 0.07, ci(12)), Ti(i, "matte"));
  if (((o.position.y = -0.045), (o.rotation.x = 0.12), n.add(o), wt(1)))
    for (let r = 0; r < 5; r++) {
      const l = new Q(new Tt(0.0142, 0.0142, 0.003, ci(12)), Ti(u0, "matte"));
      (l.position.set(0, -0.024 - r * 0.01, 0.002 + r * 0.0012),
        (l.rotation.x = 0.12),
        n.add(l));
    }
  const a = new Q(new Tt(0.0145, 0.0145, 0.006, ci(12)), Ti(rn, "gloss"));
  return (
    a.position.set(0, -0.082, 0.009),
    (a.rotation.x = 0.12),
    n.add(a),
    n.position.set(s, e, t),
    an(n)
  );
}
