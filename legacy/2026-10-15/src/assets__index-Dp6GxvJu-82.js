// assets__index-Dp6GxvJu 82 — math
// Lines 54011-54358 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class aq {
  constructor() {
    w(this, "xp", {});
    w(this, "stats", {});
    w(this, "enabled", !1);
    w(this, "loaded", !1);
    w(this, "onLevelUp", () => {});
    w(this, "send", () => {});
    w(this, "levels", new Map());
  }
  reset() {
    ((this.xp = {}),
      (this.stats = {}),
      this.levels.clear(),
      (this.loaded = !1));
  }
  load(e) {
    let t;
    try {
      t = sq(JSON.parse(e));
    } catch {
      return;
    }
    const i = this.xp,
      s = this.loaded;
    if (
      ((this.xp = t.xp),
      (this.stats = t.stats),
      this.levels.clear(),
      (this.loaded = !0),
      s)
    )
      for (const [o, a] of Object.entries(this.xp)) {
        const r = B2(o, a);
        r > B2(o, i[o] ?? 0) && this.onLevelUp(o, r);
      }
  }
  level(e) {
    let t = this.levels.get(e);
    return (
      t === void 0 && ((t = B2(e, this.xp[e] ?? 0)), this.levels.set(e, t)),
      t
    );
  }
  add(e, t) {}
  stat(e, t) {}
  tick(e, t = !1) {}
  runMul() {
    return k5(this.level("run"));
  }
  walkMul() {
    return L5(this.level("run"));
  }
  jumpMul() {
    return I5(this.level("jump"));
  }
  crawlMul() {
    return P5(this.level("crawl"));
  }
  mineMul() {
    return O5(this.level("mine"));
  }
  woodMul() {
    return N5(this.level("wood"));
  }
  knifeDamage() {
    return BA(this.level(Tr(E.COMBAT_KNIFE)));
  }
  knifeCooldown() {
    return HA(this.level(Tr(E.COMBAT_KNIFE)));
  }
  fistMul() {
    return D5(this.level("fight"));
  }
  weaponReload(e) {
    return NA(this.level(Tr(e)));
  }
  weaponSpread(e) {
    return DA(this.level(Tr(e)));
  }
  vehicleSpeed(e) {
    return zA(e, this.level($d(e)));
  }
  vehicleReload(e) {
    return UA(this.level($d(e)));
  }
  weaponShot(e, t) {
    (this.add(Tr(e), iq(t)), this.stat("shots", 1));
  }
  weaponHit(e, t = 1) {
    (this.add(Tr(e), 1.2 / Math.max(1, t)),
      this.stat("hits", 1 / Math.max(1, t)));
  }
  vehicleShot(e, t = 2) {
    (this.add($d(e), t), this.stat("shots", 1));
  }
  label(e) {
    const t = B5();
    if (e.startsWith("w:")) {
      const s = +e.slice(2);
      return (t ? l0[s] : Gc[s]) ?? e;
    }
    if (e.startsWith("v:")) {
      const s = +e.slice(2);
      return (t ? xS[s] : ES[s]) ?? e;
    }
    const i = oq[e];
    return i ? i[t ? 1 : 0] : e;
  }
  icon(e) {
    return e.startsWith("w:")
      ? Nn("target")
      : e.startsWith("v:")
        ? Nn("settings")
        : Nn(
            e === "fight"
              ? "shield"
              : e === "mine" || e === "wood"
                ? "tool"
                : e === "stealth"
                  ? "user"
                  : "world",
          );
  }
  effect(e, t = this.level(e)) {
    const i = B5();
    if (e === Tr(E.COMBAT_KNIFE)) {
      const s = BA(t),
        o = 1 / HA(t);
      return i
        ? `Strike damage ${Pn(s)} · attack speed ${Pn(o)}`
        : `Урон удара ${Pn(s)} · частота ударов ${Pn(o)}`;
    }
    if (e.startsWith("w:")) {
      const s = NA(t),
        o = DA(t);
      return i
        ? `Reload ${Pn(s)} · spread & recoil ${Pn(o)}`
        : `Перезарядка ${Pn(s)} · разброс и отдача ${Pn(o)}`;
    }
    if (e.startsWith("v:")) {
      const s = +e.slice(2),
        o = zA(s, t),
        a = UA(t);
      return (
        (uL(s) > 0
          ? i
            ? `Top speed ${Pn(o)} · `
            : `Макс. скорость ${Pn(o)} · `
          : "") + (i ? `weapon reload ${Pn(a)}` : `перезарядка орудий ${Pn(a)}`)
      );
    }
    switch (e) {
      case "run":
        return i
          ? `Sprint speed ${Pn(k5(t))} · walk ${Pn(L5(t))}`
          : `Скорость бега ${Pn(k5(t))} · шага ${Pn(L5(t))}`;
      case "jump":
        return i
          ? `Jump height ${Pn(I5(t) ** 2)}`
          : `Высота прыжка ${Pn(I5(t) ** 2)}`;
      case "crawl":
        return i
          ? `Crawl speed ${Pn(P5(t))}`
          : `Скорость ползания ${Pn(P5(t))}`;
      case "mine":
        return i
          ? `Breaking stone & ore ${Pn(O5(t))} faster`
          : `Ломает камень и руду быстрее на ${Pn(O5(t)).slice(1)}`;
      case "wood":
        return i
          ? `Chopping wood ${Pn(N5(t))} faster`
          : `Рубит древесину быстрее на ${Pn(N5(t)).slice(1)}`;
      case "fight":
        return i ? `Punch damage ${Pn(D5(t))}` : `Урон кулаком ${Pn(D5(t))}`;
      case "stealth":
        return i
          ? `Enemies spot you from ${Pn(OA(t))} distance`
          : `Враги замечают с дистанции ${Pn(OA(t))}`;
    }
    return "";
  }
  howTo(e) {
    var s;
    const t = B5();
    return e === Tr(E.COMBAT_KNIFE)
      ? t
        ? "Land knife hits on enemies"
        : "Попадайте ножом по противникам"
      : e.startsWith("w:")
        ? t
          ? "Land hits on enemies"
          : "Попадайте по противникам"
        : e.startsWith("v:")
          ? t
            ? "Drive or fly it, fire its weapons"
            : "Управляйте техникой и стреляйте из её орудий"
          : (((s = {
              run: ["Бегайте (спринт)", "Sprint"],
              jump: [
                "Совершайте полные прыжки с продвижением в новые места",
                "Complete full jumps while travelling to new ground",
              ],
              crawl: ["Ползите лёжа", "Crawl while prone"],
              mine: [
                "Ломайте камень, руду, землю",
                "Break stone, ore and earth",
              ],
              wood: ["Рубите брёвна и доски", "Chop logs and planks"],
              fight: ["Бейте кулаком", "Land punches"],
              stealth: [
                "Двигайтесь пригнувшись или ползком",
                "Move crouched or prone",
              ],
            }[e]) == null
              ? void 0
              : s[t ? 1 : 0]) ?? "");
  }
  progress(e) {
    return eq(e, this.xp[e] ?? 0);
  }
  nextAt(e) {
    const t = this.level(e);
    return t >= hr ? 0 : Lg(e, t + 1);
  }
  basicKeys() {
    return [...hL];
  }
}
const Xt = new aq(),
  tf = new k();
function wa(n, e, t, i, s, o) {
  const a = (2 * Math.PI * s) / 4,
    r = Math.max(o - 2 * s, 0),
    l = Math.PI / 4;
  (tf.copy(e), (tf[i] = 0), tf.normalize());
  const c = (0.5 * a) / (a + r),
    h = 1 - tf.angleTo(n) / l;
  return Math.sign(tf[t]) === 1 ? h * c : r / (a + r) + c + c * (1 - h);
}
class fL extends Ct {
  constructor(e = 1, t = 1, i = 1, s = 2, o = 0.1) {
    if (
      ((s = s * 2 + 1),
      (o = Math.min(e / 2, t / 2, i / 2, o)),
      super(1, 1, 1, s, s, s),
      s === 1)
    )
      return;
    const a = this.toNonIndexed();
    ((this.index = null),
      (this.attributes.position = a.attributes.position),
      (this.attributes.normal = a.attributes.normal),
      (this.attributes.uv = a.attributes.uv));
    const r = new k(),
      l = new k(),
      c = new k(e, t, i).divideScalar(2).subScalar(o),
      h = this.attributes.position.array,
      d = this.attributes.normal.array,
      u = this.attributes.uv.array,
      f = h.length / 6,
      p = new k(),
      m = 0.5 / s;
    for (let y = 0, g = 0; y < h.length; y += 3, g += 2)
      switch (
        (r.fromArray(h, y),
        l.copy(r),
        (l.x -= Math.sign(l.x) * m),
        (l.y -= Math.sign(l.y) * m),
        (l.z -= Math.sign(l.z) * m),
        l.normalize(),
        (h[y + 0] = c.x * Math.sign(r.x) + l.x * o),
        (h[y + 1] = c.y * Math.sign(r.y) + l.y * o),
        (h[y + 2] = c.z * Math.sign(r.z) + l.z * o),
        (d[y + 0] = l.x),
        (d[y + 1] = l.y),
        (d[y + 2] = l.z),
        Math.floor(y / f))
      ) {
        case 0:
          (p.set(1, 0, 0),
            (u[g + 0] = wa(p, l, "z", "y", o, i)),
            (u[g + 1] = 1 - wa(p, l, "y", "z", o, t)));
          break;
        case 1:
          (p.set(-1, 0, 0),
            (u[g + 0] = 1 - wa(p, l, "z", "y", o, i)),
            (u[g + 1] = 1 - wa(p, l, "y", "z", o, t)));
          break;
        case 2:
          (p.set(0, 1, 0),
            (u[g + 0] = 1 - wa(p, l, "x", "z", o, e)),
            (u[g + 1] = wa(p, l, "z", "x", o, i)));
          break;
        case 3:
          (p.set(0, -1, 0),
            (u[g + 0] = 1 - wa(p, l, "x", "z", o, e)),
            (u[g + 1] = 1 - wa(p, l, "z", "x", o, i)));
          break;
        case 4:
          (p.set(0, 0, 1),
            (u[g + 0] = 1 - wa(p, l, "x", "y", o, e)),
            (u[g + 1] = 1 - wa(p, l, "y", "x", o, t)));
          break;
        case 5:
          (p.set(0, 0, -1),
            (u[g + 0] = wa(p, l, "x", "y", o, e)),
            (u[g + 1] = 1 - wa(p, l, "y", "x", o, t)));
          break;
      }
  }
}
const pL = new Set([
  1710618, 1644825, 1447446, 1052688, 1118484, 723982, 1907994, 2039580,
  2829095, 2236962, 2236966, 2368543, 2240576, 2437946, 2765378, 2767432,
  12376296, 12634834, 12766420, 14211288, 14272372, 14733946, 14931339,
  15193740, 16773808, 11028786, 14182963, 13060666, 12076588, 8007466,
]);
function ss(n) {
  const e = new gi({ color: n });
  e.userData.baseColor = n;
  const i = new ze(n).convertLinearToSRGB().getHSL({ h: 0, s: 0, l: 0 });
  return (
    (e.userData.camoEligible = !pL.has(n) && i.l > 0.13 && i.l < 0.76),
    e
  );
}
function C0(n, e, t, i) {
  return (n.position.set(e, t, i), (n.castShadow = n.receiveShadow = !0), n);
}
function ce(n, e, t, i, s = 0, o = 0, a = 0) {
  const l =
    yt(1) && n * e * t > 0.06 && Math.max(n, e, t) / Math.min(n, e, t) < 15
      ? new fL(n, e, t, 1, Math.min(n, e, t) * 0.12)
      : new Ct(n, e, t);
  return C0(new le(l, ss(i)), s, o, a);
}
function Ci(n, e, t, i = 0, s = 0, o = 0, a = n, r = 10) {
  const l = C0(new le(new xt(n, a, e, di(r)), ss(t)), i, s, o);
  return ((l.rotation.x = Math.PI / 2), l);
}
function Jc(n, e, t, i = 0, s = 0, o = 0, a = 10) {
  const r = C0(new le(new xt(n, n, e, di(a)), ss(t)), i, s, o);
  return ((r.rotation.z = Math.PI / 2), r);
}
function Dn(n, e, t, i = 0, s = 0, o = 0, a = n, r = 12) {
  return C0(new le(new xt(n, a, e, di(r)), ss(t)), i, s, o);
}
