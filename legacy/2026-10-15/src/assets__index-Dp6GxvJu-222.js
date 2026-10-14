// assets__index-Dp6GxvJu 222 — position
// Lines 122490-122741 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const gne = 0.7,
  yne = 0.45,
  vne = 0.85,
  bne = 0.7,
  wne = 0.8,
  Mne = 0.45,
  Sne = 0.09,
  Ene = 9,
  tP = 60,
  xne = lr(),
  Cn = {
    [E.GLOCK]: {
      ...wl[E.GLOCK],
      item: E.GLOCK,
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
    [E.AK47]: {
      ...wl[E.AK47],
      item: E.AK47,
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
    [E.AWP]: {
      ...wl[E.AWP],
      item: E.AWP,
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
    [E.MINIGUN]: {
      ...wl[E.MINIGUN],
      item: E.MINIGUN,
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
    [E.SHOTGUN]: {
      ...wl[E.SHOTGUN],
      item: E.SHOTGUN,
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
    [E.RPG]: {
      ...wl[E.RPG],
      item: E.RPG,
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
    [E.GRENADE_LAUNCHER]: {
      ...wl[E.GRENADE_LAUNCHER],
      item: E.GRENADE_LAUNCHER,
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
    [E.GRENADE]: {
      ...wl[E.GRENADE],
      item: E.GRENADE,
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
  YR = 0.87,
  Tne = 0.8;
DC((n, e) => {
  const t = Cn[e],
    i = So(n),
    s = (i.suppressor ? by : 1) * (i.laser ? wy : 1) * (i.scope > 0 ? La : 1);
  Cn[n] = {
    ...t,
    item: n,
    mag: i.extMag ? Math.round(t.mag * My) : t.mag,
    spread: t.spread * s,
    adsSpread: t.adsSpread * s,
    adsPos:
      i.scope === 5 && Op[e] !== void 0
        ? [t.adsPos[0], -Op[e], t.adsPos[2] * 0.72]
        : t.adsPos,
    zoomFov: i.scope >= 1 && i.scope <= 4 ? Nz[i.scope] : void 0,
    adsZoom: i.scope === 5 ? Tne : void 0,
    adsTime: ha[i.scope] ?? ha[0],
    recoil: t.recoil * (i.scope === 5 ? NS : 1),
  };
});
const Ane = {
    [pt.ROCKET]: { radius: 4, dmg: 110, blockRadius: Gu(4, Fu.RPG) },
    [pt.GRENADE_40MM]: {
      radius: 3.5,
      dmg: 85,
      blockRadius: Gu(3.5, Fu.GRENADE),
    },
    [pt.GRENADE]: { radius: 3.5, dmg: 85, blockRadius: Gu(3.5, Fu.GRENADE) },
    [pt.BOMB]: { radius: 8, dmg: 220, blockRadius: Gu(8, Fu.AIRCRAFT) },
    [pt.SHELL]: { radius: 4.5, dmg: 180, blockRadius: 3 },
    [pt.MISSILE]: { radius: 3.2, dmg: 80, blockRadius: Gu(3.2, Fu.HIMARS) },
    [pt.TOMAHAWK]: { radius: aC, dmg: 1100, blockRadius: WH },
    [pt.NUCLEAR]: { radius: Rx, dmg: ZH, blockRadius: Rx },
  },
  _ne = {
    [pt.ROCKET]: 120,
    [pt.GRENADE]: 45,
    [pt.GRENADE_40MM]: 55,
    [pt.BOMB]: 160,
    [pt.SHELL]: 130,
    [pt.MISSILE]: 95,
    [pt.TOMAHAWK]: 420,
    [pt.NUCLEAR]: 2600,
  },
  Rne = 1.6;
function Cne(n) {
  const e = new pe(),
    t = (i) => new gi({ color: i });
  if (n === pt.NUCLEAR) {
    const i = new le(new xt(0.29, 0.3, 3.25, 16), t(2106666));
    i.rotation.x = Math.PI / 2;
    const s = new le(new ma(0.31, 0.72, 16), t(1119256));
    ((s.rotation.x = -Math.PI / 2), (s.position.z = -1.98));
    const o = new le(new xt(0.22, 0.22, 0.18, 14), t(1053205));
    ((o.rotation.x = Math.PI / 2), (o.position.z = 1.7));
    const a = new le(new xt(0.305, 0.305, 0.24, 16), t(15330800));
    ((a.rotation.x = Math.PI / 2), (a.position.z = 0.72));
    const r = new le(new xt(0.31, 0.31, 0.2, 16), t(9248800));
    ((r.rotation.x = Math.PI / 2), (r.position.z = 0.36));
    const l = new le(new Ct(1.15, 0.08, 0.58), t(3423042));
    l.position.set(-0.58, 0, 1.25);
    const c = l.clone();
    c.position.x = 0.58;
    const h = new le(new Ct(0.08, 0.7, 0.58), t(3423042));
    h.position.set(0, 0.33, 1.25);
    const d = new pe(),
      u = new le(new xt(0.3, 0.3, 0.045, 18), t(15910187));
    ((u.rotation.z = Math.PI / 2), d.add(u));
    const f = new le(new xt(0.06, 0.06, 0.06, 12), t(1118740));
    ((f.rotation.z = Math.PI / 2), (f.position.x = 0.03), d.add(f));
    for (let m = 0; m < 3; m++) {
      const y = new le(new Ct(0.05, 0.33, 0.08), t(1118740));
      (y.position.set(0.04, 0.16, 0),
        (y.rotation.x = (m * Math.PI * 2) / 3),
        d.add(y));
    }
    d.position.set(0.3, 0.02, -0.28);
    const p = new le(new xt(0.18, 0.22, 0.22, 12), t(3422268));
    ((p.rotation.x = Math.PI / 2),
      (p.position.z = 1.84),
      e.add(i, s, o, a, r, l, c, h, d, p));
  } else if (n === pt.TOMAHAWK) {
    const o = new le(new xt(0.25, 0.25, 2.6, 14), t(15922422));
    o.rotation.x = Math.PI / 2;
    const a = new le(new mn(0.25, 14, 10), t(15922422));
    ((a.scale.z = 2.2), (a.position.z = -1.3));
    const r = new le(new Ct(1.15, 0.05, 0.42), t(14147042));
    r.position.set(-0.65, 0, 0.15);
    const l = r.clone();
    l.position.x = 0.65;
    const c = new le(new Ct(1.15, 0.05, 0.34), t(14147042));
    c.position.z = 1.15;
    const h = new le(new Ct(0.05, 0.6, 0.34), t(14147042));
    h.position.set(0, 0.18, 1.15);
    const d = new le(new xt(0.14, 0.17, 0.25, 12), t(3817542));
    ((d.rotation.x = Math.PI / 2),
      (d.position.z = 1.42),
      e.add(o, a, r, l, c, h, d));
  } else if (n === pt.ROCKET || n === pt.MISSILE) {
    const i = new le(
      new xt(0.06, 0.06, 0.5, 12),
      t(n === pt.MISSILE ? 14540253 : 6052934),
    );
    i.rotation.x = Math.PI / 2;
    const s = new le(new ma(0.1, 0.28, 12), t(4476988));
    ((s.rotation.x = -Math.PI / 2), (s.position.z = -0.34), e.add(i, s));
  } else if (n === pt.GRENADE_40MM) {
    const i = new le(new xt(0.055, 0.055, 0.12, 12), t(11967050));
    i.rotation.x = Math.PI / 2;
    const s = new le(new mn(0.055, 12, 8), t(5464379));
    ((s.position.z = -0.065), e.add(i, s));
  } else if (n === pt.GRENADE) {
    const i = new le(new mn(0.09, 8, 6), t(3820851));
    e.add(i);
  } else if (n === pt.BOMB) {
    const i = new le(new xt(0.14, 0.14, 0.55, 8), t(3093560));
    i.rotation.x = Math.PI / 2;
    const s = new le(new mn(0.14, 8, 6), t(3093560));
    s.position.z = -0.28;
    const o = new le(new Ct(0.02, 0.22, 0.15), t(4541524));
    o.position.z = 0.3;
    const a = o.clone();
    ((a.rotation.z = Math.PI / 2), e.add(i, s, o, a));
  } else {
    const i = new le(new xt(0.06, 0.06, 0.3, 8), t(13215850));
    ((i.rotation.x = Math.PI / 2), e.add(i));
  }
  return (
    e.traverse((i) => {
      ((i.frustumCulled = !1), (i.renderOrder = Gi.viewmodel));
    }),
    e
  );
}
