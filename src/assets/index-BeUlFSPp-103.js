// index-BeUlFSPp 103 — math
// Lines 61436-61782 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class ZZ {
  xp = {};
  stats = {};
  enabled = !1;
  loaded = !1;
  onLevelUp = () => {};
  send = () => {};
  levels = new Map();
  reset() {
    ((this.xp = {}),
      (this.stats = {}),
      this.levels.clear(),
      (this.loaded = !1));
  }
  load(e) {
    let t;
    try {
      t = jZ(JSON.parse(e));
    } catch {
      return;
    }
    const i = this.xp,
      n = this.loaded;
    if (
      ((this.xp = t.xp),
      (this.stats = t.stats),
      this.levels.clear(),
      (this.loaded = !0),
      n)
    )
      for (const [o, a] of Object.entries(this.xp)) {
        const r = Ry(o, a);
        r > Ry(o, i[o] ?? 0) && this.onLevelUp(o, r);
      }
  }
  level(e) {
    let t = this.levels.get(e);
    return (
      t === void 0 && ((t = Ry(e, this.xp[e] ?? 0)), this.levels.set(e, t)),
      t
    );
  }
  add(e, t) {}
  stat(e, t) {}
  tick(e, t = !1) {}
  runMul() {
    return qb(this.level("run"));
  }
  walkMul() {
    return Kb(this.level("run"));
  }
  jumpMul() {
    return Yb(this.level("jump"));
  }
  crawlMul() {
    return jb(this.level("crawl"));
  }
  mineMul() {
    return Xb(this.level("mine"));
  }
  woodMul() {
    return Zb(this.level("wood"));
  }
  knifeDamage() {
    return a8(this.level(gl(w.COMBAT_KNIFE)));
  }
  knifeCooldown() {
    return r8(this.level(gl(w.COMBAT_KNIFE)));
  }
  fistMul() {
    return Qb(this.level("fight"));
  }
  weaponReload(e) {
    return n8(this.level(gl(e)));
  }
  weaponSpread(e) {
    return o8(this.level(gl(e)));
  }
  vehicleSpeed(e) {
    return l8(e, this.level(df(e)));
  }
  vehicleReload(e) {
    return c8(this.level(df(e)));
  }
  weaponShot(e, t) {
    (this.add(gl(e), KZ(t)), this.stat("shots", 1));
  }
  weaponHit(e, t = 1) {
    (this.add(gl(e), 1.2 / Math.max(1, t)),
      this.stat("hits", 1 / Math.max(1, t)));
  }
  vehicleShot(e, t = 2) {
    (this.add(df(e), t), this.stat("shots", 1));
  }
  label(e) {
    if ((Jb(), e.startsWith("w:"))) {
      const i = +e.slice(2);
      return I(od[i] ?? e, N0[i] ?? e);
    }
    if (e.startsWith("v:")) {
      const i = +e.slice(2);
      return I(mA[i] ?? e, pA[i] ?? e);
    }
    const t = XZ[e];
    return t ? I(t[1], t[0]) : e;
  }
  icon(e) {
    return e.startsWith("w:")
      ? Ks("target")
      : e.startsWith("v:")
        ? Ks("settings")
        : Ks(
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
    if ((Jb(), e === gl(w.COMBAT_KNIFE))) {
      const i = a8(t),
        n = 1 / r8(t);
      return I(
        `Strike damage ${Us(i)} · attack speed ${Us(n)}`,
        `Урон удара ${Us(i)} · частота ударов ${Us(n)}`,
      );
    }
    if (e.startsWith("w:")) {
      const i = n8(t),
        n = o8(t);
      return I(
        `Reload ${Us(i)} · spread & recoil ${Us(n)}`,
        `Перезарядка ${Us(i)} · разброс и отдача ${Us(n)}`,
      );
    }
    if (e.startsWith("v:")) {
      const i = +e.slice(2),
        n = l8(i, t),
        o = c8(t);
      return (
        (p7(i) > 0
          ? I(`Top speed ${Us(n)} · `, `Макс. скорость ${Us(n)} · `)
          : "") + I(`weapon reload ${Us(o)}`, `перезарядка орудий ${Us(o)}`)
      );
    }
    switch (e) {
      case "run":
        return I(
          `Sprint speed ${Us(qb(t))} · walk ${Us(Kb(t))}`,
          `Скорость бега ${Us(qb(t))} · шага ${Us(Kb(t))}`,
        );
      case "jump":
        return I(
          `Jump height ${Us(Yb(t) ** 2)}`,
          `Высота прыжка ${Us(Yb(t) ** 2)}`,
        );
      case "crawl":
        return I(`Crawl speed ${Us(jb(t))}`, `Скорость ползания ${Us(jb(t))}`);
      case "mine":
        return I(
          `Breaking stone & ore ${Us(Xb(t))} faster`,
          `Ломает камень и руду быстрее на ${Us(Xb(t)).slice(1)}`,
        );
      case "wood":
        return I(
          `Chopping wood ${Us(Zb(t))} faster`,
          `Рубит древесину быстрее на ${Us(Zb(t)).slice(1)}`,
        );
      case "fight":
        return I(`Punch damage ${Us(Qb(t))}`, `Урон кулаком ${Us(Qb(t))}`);
      case "stealth":
        return I(
          `Enemies spot you from ${Us(s8(t))} distance`,
          `Враги замечают с дистанции ${Us(s8(t))}`,
        );
    }
    return "";
  }
  howTo(e) {
    if ((Jb(), e === gl(w.COMBAT_KNIFE)))
      return I("Land knife hits on enemies", "Попадайте ножом по противникам");
    if (e.startsWith("w:"))
      return I("Land hits on enemies", "Попадайте по противникам");
    if (e.startsWith("v:"))
      return I(
        "Drive or fly it, fire its weapons",
        "Управляйте техникой и стреляйте из её орудий",
      );
    const i = {
      run: ["Бегайте (спринт)", "Sprint"],
      jump: [
        "Совершайте полные прыжки с продвижением в новые места",
        "Complete full jumps while travelling to new ground",
      ],
      crawl: ["Ползите лёжа", "Crawl while prone"],
      mine: ["Ломайте камень, руду, землю", "Break stone, ore and earth"],
      wood: ["Рубите брёвна и доски", "Chop logs and planks"],
      fight: ["Бейте кулаком", "Land punches"],
      stealth: ["Двигайтесь пригнувшись или ползком", "Move crouched or prone"],
    }[e];
    return i ? I(i[1], i[0]) : "";
  }
  progress(e) {
    return VZ(e, this.xp[e] ?? 0);
  }
  nextAt(e) {
    const t = this.level(e);
    return t >= el ? 0 : Nv(e, t + 1);
  }
  basicKeys() {
    return [...u7];
  }
}
const Jt = new ZZ(),
  Cp = new k();
function Ja(s, e, t, i, n, o) {
  const a = (2 * Math.PI * n) / 4,
    r = Math.max(o - 2 * n, 0),
    l = Math.PI / 4;
  (Cp.copy(e), (Cp[i] = 0), Cp.normalize());
  const c = (0.5 * a) / (a + r),
    h = 1 - Cp.angleTo(s) / l;
  return Math.sign(Cp[t]) === 1 ? h * c : r / (a + r) + c + c * (1 - h);
}
class m7 extends kt {
  constructor(e = 1, t = 1, i = 1, n = 2, o = 0.1) {
    if (
      ((n = n * 2 + 1),
      (o = Math.min(e / 2, t / 2, i / 2, o)),
      super(1, 1, 1, n, n, n),
      n === 1)
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
      m = 0.5 / n;
    for (let g = 0, y = 0; g < h.length; g += 3, y += 2)
      switch (
        (r.fromArray(h, g),
        l.copy(r),
        (l.x -= Math.sign(l.x) * m),
        (l.y -= Math.sign(l.y) * m),
        (l.z -= Math.sign(l.z) * m),
        l.normalize(),
        (h[g + 0] = c.x * Math.sign(r.x) + l.x * o),
        (h[g + 1] = c.y * Math.sign(r.y) + l.y * o),
        (h[g + 2] = c.z * Math.sign(r.z) + l.z * o),
        (d[g + 0] = l.x),
        (d[g + 1] = l.y),
        (d[g + 2] = l.z),
        Math.floor(g / f))
      ) {
        case 0:
          (p.set(1, 0, 0),
            (u[y + 0] = Ja(p, l, "z", "y", o, i)),
            (u[y + 1] = 1 - Ja(p, l, "y", "z", o, t)));
          break;
        case 1:
          (p.set(-1, 0, 0),
            (u[y + 0] = 1 - Ja(p, l, "z", "y", o, i)),
            (u[y + 1] = 1 - Ja(p, l, "y", "z", o, t)));
          break;
        case 2:
          (p.set(0, 1, 0),
            (u[y + 0] = 1 - Ja(p, l, "x", "z", o, e)),
            (u[y + 1] = Ja(p, l, "z", "x", o, i)));
          break;
        case 3:
          (p.set(0, -1, 0),
            (u[y + 0] = 1 - Ja(p, l, "x", "z", o, e)),
            (u[y + 1] = 1 - Ja(p, l, "z", "x", o, i)));
          break;
        case 4:
          (p.set(0, 0, 1),
            (u[y + 0] = 1 - Ja(p, l, "x", "y", o, e)),
            (u[y + 1] = 1 - Ja(p, l, "y", "x", o, t)));
          break;
        case 5:
          (p.set(0, 0, -1),
            (u[y + 0] = Ja(p, l, "x", "y", o, e)),
            (u[y + 1] = 1 - Ja(p, l, "y", "x", o, t)));
          break;
      }
  }
}
const g7 = new Set([
  1710618, 1644825, 1447446, 1052688, 1118484, 723982, 1907994, 2039580,
  2829095, 2236962, 2236966, 2368543, 2240576, 2437946, 2765378, 2767432,
  12376296, 12634834, 12766420, 14211288, 14272372, 14733946, 14931339,
  15193740, 16773808, 11028786, 14182963, 13060666, 12076588, 8007466,
]);
function wn(s) {
  const e = new Pi({ color: s });
  e.userData.baseColor = s;
  const i = new Ge(s).convertLinearToSRGB().getHSL({ h: 0, s: 0, l: 0 });
  return (
    (e.userData.camoEligible = !g7.has(s) && i.l > 0.13 && i.l < 0.76),
    e
  );
}
function Od(s, e, t, i) {
  return (s.position.set(e, t, i), (s.castShadow = s.receiveShadow = !0), s);
}
function se(s, e, t, i, n = 0, o = 0, a = 0) {
  const l =
    wt(1) && s * e * t > 0.06 && Math.max(s, e, t) / Math.min(s, e, t) < 15
      ? new m7(s, e, t, 1, Math.min(s, e, t) * 0.12)
      : new kt(s, e, t);
  return Od(new Q(l, wn(i)), n, o, a);
}
function Hi(s, e, t, i = 0, n = 0, o = 0, a = s, r = 10) {
  const l = Od(new Q(new Tt(s, a, e, ci(r)), wn(t)), i, n, o);
  return ((l.rotation.x = Math.PI / 2), l);
}
function Y0(s, e, t, i = 0, n = 0, o = 0, a = 10) {
  const r = Od(new Q(new Tt(s, s, e, ci(a)), wn(t)), i, n, o);
  return ((r.rotation.z = Math.PI / 2), r);
}
function Gs(s, e, t, i = 0, n = 0, o = 0, a = s, r = 12) {
  return Od(new Q(new Tt(s, a, e, ci(r)), wn(t)), i, n, o);
}
function y7(s, e, t, i, n = 0, o = 0, a = 0) {
  const r = new ws(1, wt(2) ? 24 : 16, wt(2) ? 14 : 10);
  return (r.scale(s / 2, e / 2, t / 2), Od(new Q(r, wn(i)), n, o, a));
}
function v7(s) {
  const e = new il();
  return (
    s.forEach(([t, i], n) => (n ? e.lineTo(t, i) : e.moveTo(t, i))),
    e.closePath(),
    e
  );
}
