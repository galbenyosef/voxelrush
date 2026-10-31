// index-BeUlFSPp 244 — position
// Lines 129639-129984 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Pce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, 0.07, 0.06, 0.03, 0.3, -0.3, -0.2],
    [0.5, -0.2, 0.01, -0.1, -0.3, 0.7, 0.4],
    [0.7, -0.18, -0.01, -0.06, -0.25, 0.6, 0.3],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  Oce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, -0.12, 0.06, 0.02, 0.25, 0.5, 0.3],
    [0.5, 0.1, 0.01, -0.1, -0.3, -0.5, -0.3],
    [0.7, 0.09, -0.01, -0.06, -0.22, -0.4, -0.25],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  Nce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.25, 0.01, -0.01, 0.08, 0.12, 0, 0],
    [0.48, -0.05, 0.03, -0.21, -0.28, 0.1, 0],
    [0.7, -0.04, 0.02, -0.16, -0.22, 0.07, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  Dce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.35, 0.02, 0.03, 0.03, 0.2, -0.05, -0.08],
    [1, 0.05, 0.1, 0.05, 0.72, -0.15, -0.25],
  ],
  ML = 0.3,
  Hce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.38, 0.04, 0.1, 0.08, 0.6, 0.08, -0.16],
    [0.52, 0.04, 0.1, 0.07, 0.66, 0.08, -0.18],
    [0.68, -0.02, -0.02, -0.12, -0.5, -0.04, 0.05],
    [0.82, -0.01, -0.03, -0.08, -0.42, -0.02, 0.03],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  Bce = 0.66,
  zce = 0.62,
  Fce = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, -0.01, 0.07, 0.07, 0.7, 0.04, 0.1],
    [0.45, 0, 0.05, 0.05, 0.55, 0.02, 0.06],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  Uce = 0.55,
  PE = (s) => s * s * (3 - 2 * s);
function yM(s, e, t) {
  let i = 0;
  for (; i < s.length - 2 && e > s[i + 1][0];) i++;
  const n = s[i],
    o = s[i + 1],
    a = PE(Oe((e - n[0]) / Math.max(1e-6, o[0] - n[0]), 0, 1));
  for (let r = 0; r < 6; r++) t[r] = n[r + 1] + (o[r + 1] - n[r + 1]) * a;
  return t;
}
const Gce = 0.7,
  Wce = 0.45,
  $ce = 0.85,
  Vce = 0.7,
  qce = 0.8,
  Kce = 0.45,
  Yce = 0.09,
  jce = 9,
  g9 = 60,
  Xce = jr(),
  Ss = {
    [w.GLOCK]: {
      ...sr[w.GLOCK],
      item: w.GLOCK,
      kind: "hitscan",
      punch: 1,
      auto: !1,
      spread: 0.018,
      adsSpread: 0.004,
      recoil: 0.012,
      sfx: "glock",
      hipPos: [0.26, -0.25, -0.48],
      adsPos: [0, -0.078, -0.38],
    },
    [w.AK47]: {
      ...sr[w.AK47],
      item: w.AK47,
      kind: "hitscan",
      punch: 2,
      auto: !0,
      spread: 0.028,
      adsSpread: 0.007,
      recoil: 0.0105,
      sfx: "ak",
      hipPos: [0.3, -0.28, -0.55],
      adsPos: [0, -0.085, -0.42],
    },
    [w.AWP]: {
      ...sr[w.AWP],
      item: w.AWP,
      kind: "hitscan",
      punch: 3,
      auto: !1,
      spread: 0.05,
      adsSpread: 6e-4,
      recoil: 0.06,
      sfx: "awp",
      hipPos: [0.32, -0.3, -0.6],
      adsPos: [0, -0.1, -0.45],
    },
    [w.DEAGLE]: {
      ...sr[w.DEAGLE],
      item: w.DEAGLE,
      kind: "hitscan",
      punch: 2,
      auto: !1,
      spread: 0.032,
      adsSpread: 0.0032,
      recoil: 0.052,
      sfx: "deagle",
      hipPos: [0.25, -0.25, -0.47],
      adsPos: [0, -0.0605, -0.41],
    },
    [w.M4A1]: {
      ...sr[w.M4A1],
      item: w.M4A1,
      kind: "hitscan",
      punch: 2,
      auto: !0,
      spread: 0.024,
      adsSpread: 0.0055,
      recoil: 0.0078,
      sfx: "m4",
      hipPos: [0.3, -0.28, -0.55],
      adsPos: [0, -0.0875, -0.33],
    },
    [w.VECTOR]: {
      ...sr[w.VECTOR],
      item: w.VECTOR,
      kind: "hitscan",
      punch: 1,
      auto: !0,
      spread: 0.02,
      adsSpread: 0.0085,
      recoil: 0.0058,
      sfx: "smg",
      hipPos: [0.27, -0.26, -0.5],
      adsPos: [0, -0.0865, -0.36],
    },
    [w.MINIGUN]: {
      ...sr[w.MINIGUN],
      item: w.MINIGUN,
      kind: "hitscan",
      punch: 2,
      auto: !0,
      spread: 0.058,
      adsSpread: 0.032,
      recoil: 0.0058,
      sfx: "mg",
      hipPos: [0.33, -0.3, -0.6],
      adsPos: [0.08, -0.16, -0.55],
    },
    [w.SHOTGUN]: {
      ...sr[w.SHOTGUN],
      item: w.SHOTGUN,
      kind: "hitscan",
      punch: 0,
      auto: !1,
      spread: 0.065,
      adsSpread: 0.04,
      recoil: 0.048,
      sfx: "shotgun",
      hipPos: [0.3, -0.28, -0.55],
      adsPos: [0, -0.0615, -0.56],
    },
    [w.RPG]: {
      ...sr[w.RPG],
      item: w.RPG,
      kind: "rocket",
      punch: 0,
      auto: !1,
      spread: 0.012,
      adsSpread: 0.003,
      recoil: 0.05,
      sfx: "rpg",
      hipPos: [0.3, -0.24, -0.5],
      adsPos: [0, -0.1, -0.3],
    },
    [w.GRENADE_LAUNCHER]: {
      ...sr[w.GRENADE_LAUNCHER],
      item: w.GRENADE_LAUNCHER,
      kind: "launcher",
      punch: 0,
      auto: !1,
      spread: 0.012,
      adsSpread: 0.002,
      recoil: 0.065,
      sfx: "rpg",
      hipPos: [0.29, -0.27, -0.56],
      adsPos: [0, -0.105, -0.5],
    },
    [w.GRENADE]: {
      ...sr[w.GRENADE],
      item: w.GRENADE,
      kind: "grenade",
      punch: 0,
      auto: !1,
      spread: 0,
      adsSpread: 0,
      recoil: 0.01,
      sfx: "",
      hipPos: [0.3, -0.3, -0.5],
      adsPos: [0.3, -0.3, -0.5],
    },
  },
  SL = 0.87,
  Zce = 0.8;
AP((s, e) => {
  const t = Ss[e],
    i = so(s),
    n = (i.suppressor ? L5 : 1) * (i.laser ? I5 : 1) * (i.scope > 0 ? pr : 1),
    o = i.grip ? D5 : 1;
  Ss[s] = {
    ...t,
    item: s,
    mag: i.extMag ? Math.round(t.mag * O5) : t.mag,
    spread: t.spread * n * o,
    adsSpread: t.adsSpread * n,
    adsPos:
      i.scope === 5 && K0[e] !== void 0
        ? [t.adsPos[0], -K0[e], t.adsPos[2] * 0.72]
        : t.adsPos,
    zoomFov: i.scope >= 1 && i.scope <= 4 ? J$[i.scope] : void 0,
    adsZoom: i.scope === 5 ? Zce : void 0,
    adsTime: Ba[i.scope] ?? Ba[0],
    recoil: t.recoil * (i.scope === 5 ? P5 : 1) * (i.grip ? N5 : 1),
  };
});
const Qce = {
    [mt.ROCKET]: { radius: 4, dmg: 110, blockRadius: gp(4, mp.RPG) },
    [mt.GRENADE_40MM]: {
      radius: 3.5,
      dmg: 85,
      blockRadius: gp(3.5, mp.GRENADE),
    },
    [mt.GRENADE]: { radius: 3.5, dmg: 85, blockRadius: gp(3.5, mp.GRENADE) },
    [mt.BOMB]: { radius: 8, dmg: 220, blockRadius: gp(8, mp.AIRCRAFT) },
    [mt.SHELL]: { radius: 4.5, dmg: 180, blockRadius: 3 },
    [mt.MISSILE]: { radius: 3.2, dmg: 80, blockRadius: gp(3.2, mp.HIMARS) },
    [mt.TOMAHAWK]: { radius: iP, dmg: 1100, blockRadius: NW },
    [mt.NUCLEAR]: { radius: Bx, dmg: WW, blockRadius: Bx },
  },
  Jce = {
    [mt.ROCKET]: 120,
    [mt.GRENADE]: 45,
    [mt.GRENADE_40MM]: 55,
    [mt.BOMB]: 160,
    [mt.SHELL]: 130,
    [mt.MISSILE]: 95,
    [mt.TOMAHAWK]: 420,
    [mt.NUCLEAR]: 2600,
  },
  e0e = 1.6;
function t0e(s) {
  const e = new re(),
    t = (i) => new Pi({ color: i });
  if (s === mt.NUCLEAR) {
    const i = new Q(new Tt(0.29, 0.3, 3.25, 16), t(2106666));
    i.rotation.x = Math.PI / 2;
    const n = new Q(new fa(0.31, 0.72, 16), t(1119256));
    ((n.rotation.x = -Math.PI / 2), (n.position.z = -1.98));
    const o = new Q(new Tt(0.22, 0.22, 0.18, 14), t(1053205));
    ((o.rotation.x = Math.PI / 2), (o.position.z = 1.7));
    const a = new Q(new Tt(0.305, 0.305, 0.24, 16), t(15330800));
    ((a.rotation.x = Math.PI / 2), (a.position.z = 0.72));
    const r = new Q(new Tt(0.31, 0.31, 0.2, 16), t(9248800));
    ((r.rotation.x = Math.PI / 2), (r.position.z = 0.36));
    const l = new Q(new kt(1.15, 0.08, 0.58), t(3423042));
    l.position.set(-0.58, 0, 1.25);
    const c = l.clone();
    c.position.x = 0.58;
    const h = new Q(new kt(0.08, 0.7, 0.58), t(3423042));
    h.position.set(0, 0.33, 1.25);
    const d = new re(),
      u = new Q(new Tt(0.3, 0.3, 0.045, 18), t(15910187));
    ((u.rotation.z = Math.PI / 2), d.add(u));
    const f = new Q(new Tt(0.06, 0.06, 0.06, 12), t(1118740));
    ((f.rotation.z = Math.PI / 2), (f.position.x = 0.03), d.add(f));
    for (let m = 0; m < 3; m++) {
      const g = new Q(new kt(0.05, 0.33, 0.08), t(1118740));
      (g.position.set(0.04, 0.16, 0),
        (g.rotation.x = (m * Math.PI * 2) / 3),
        d.add(g));
    }
    d.position.set(0.3, 0.02, -0.28);
    const p = new Q(new Tt(0.18, 0.22, 0.22, 12), t(3422268));
    ((p.rotation.x = Math.PI / 2),
      (p.position.z = 1.84),
      e.add(i, n, o, a, r, l, c, h, d, p));
  } else if (s === mt.TOMAHAWK) {
    const o = new Q(new Tt(0.25, 0.25, 2.6, 14), t(15922422));
    o.rotation.x = Math.PI / 2;
    const a = new Q(new ws(0.25, 14, 10), t(15922422));
    ((a.scale.z = 2.2), (a.position.z = -1.3));
    const r = new Q(new kt(1.15, 0.05, 0.42), t(14147042));
    r.position.set(-0.65, 0, 0.15);
    const l = r.clone();
    l.position.x = 0.65;
    const c = new Q(new kt(1.15, 0.05, 0.34), t(14147042));
    c.position.z = 1.15;
    const h = new Q(new kt(0.05, 0.6, 0.34), t(14147042));
    h.position.set(0, 0.18, 1.15);
    const d = new Q(new Tt(0.14, 0.17, 0.25, 12), t(3817542));
    ((d.rotation.x = Math.PI / 2),
      (d.position.z = 1.42),
      e.add(o, a, r, l, c, h, d));
  } else if (s === mt.ROCKET || s === mt.MISSILE) {
    const i = new Q(
      new Tt(0.06, 0.06, 0.5, 12),
      t(s === mt.MISSILE ? 14540253 : 6052934),
    );
    i.rotation.x = Math.PI / 2;
    const n = new Q(new fa(0.1, 0.28, 12), t(4476988));
    ((n.rotation.x = -Math.PI / 2), (n.position.z = -0.34), e.add(i, n));
  } else if (s === mt.GRENADE_40MM) {
    const i = new Q(new Tt(0.055, 0.055, 0.12, 12), t(11967050));
    i.rotation.x = Math.PI / 2;
    const n = new Q(new ws(0.055, 12, 8), t(5464379));
    ((n.position.z = -0.065), e.add(i, n));
  } else if (s === mt.GRENADE) {
    const i = new Q(new ws(0.09, 8, 6), t(3820851));
    e.add(i);
  } else if (s === mt.BOMB) {
    const i = new Q(new Tt(0.14, 0.14, 0.55, 8), t(3093560));
    i.rotation.x = Math.PI / 2;
    const n = new Q(new ws(0.14, 8, 6), t(3093560));
    n.position.z = -0.28;
    const o = new Q(new kt(0.02, 0.22, 0.15), t(4541524));
    o.position.z = 0.3;
    const a = o.clone();
    ((a.rotation.z = Math.PI / 2), e.add(i, n, o, a));
  } else {
    const i = new Q(new Tt(0.06, 0.06, 0.3, 8), t(13215850));
    ((i.rotation.x = Math.PI / 2), e.add(i));
  }
  return (
    e.traverse((i) => {
      ((i.frustumCulled = !1), (i.renderOrder = zi.viewmodel));
    }),
    e
  );
}
