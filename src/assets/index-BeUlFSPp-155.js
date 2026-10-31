// index-BeUlFSPp 155 — fillstyle
// Lines 84251-84448 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
async function Vie(s) {
  const e = await Jm(),
    t = l3(s);
  return new Promise((i, n) => {
    const o = e.transaction(ro, "readonly"),
      a = o.objectStore(ro),
      r = a.getAllKeys(IDBKeyRange.bound(t, t + "￿")),
      l = [];
    ((r.onsuccess = () => {
      for (const c of r.result) {
        const h = String(c).slice(t.length);
        if (
          h === "world/settlements.json" ||
          h.startsWith("world/settlements.json.")
        )
          continue;
        const d = a.get(c);
        d.onsuccess = () => l.push({ path: h, data: d.result });
      }
    }),
      (o.oncomplete = () => i(l)),
      (o.onerror = () => n(o.error ?? new Error("Could not load world"))),
      (o.onabort = () => n(o.error ?? new Error("World load aborted"))));
  });
}
const q = (s) => document.getElementById(s),
  qie = "#ffd44a";
function zk(s) {
  wi();
  const e =
      s === w.MILITARY_MEDKIT
        ? I("100% health with armor HP", "100% здоровья с бонусом брони")
        : `+${s === w.MEDKIT ? my : gy} HP`,
    t = s === w.MILITARY_MEDKIT ? LS : s === w.MEDKIT ? IS : PS;
  return `${e} · ${I("Cooldown", "Перезарядка")} ${t} ${I("s", "с")}`;
}
const Kie = {
  property: v.OWNERSHIP_TOTEM,
  casino: S5,
  explosive: w.DYNAMITE_BUNDLE,
  blueprint: w.BLUEPRINT_CABIN,
  block: v.STONE_BRICKS,
  nature: v.GRASS,
  food: w.APPLE,
  resource: w.IRON_INGOT,
  weapon: w.AK47,
  ammo: w.AMMO_762,
  tool: w.DRILL_METAL,
  medical: w.MEDKIT,
  armor: w.HELMET_2,
  vehicle: w.TANK,
  unit: w.MILITARY_BOT,
};
function Yie(s, e) {
  const t = (i, n, o, a, r) => {
    ((s.fillStyle = r), s.fillRect(i, n, o, a));
  };
  switch (e) {
    case v.CANDLE:
      for (const [i, n] of [
        [9, 20],
        [18, 26],
        [27, 16],
      ])
        (t(i, 36 - n, 7, n, "#efe2bf"),
          t(i + 5, 36 - n, 2, n, "#cdbd93"),
          t(i + 3, 33 - n, 1, 3, "#2a2522"),
          (s.fillStyle = "#ffb43a"),
          s.beginPath(),
          s.ellipse(i + 3.5, 29 - n, 2.6, 4.5, 0, 0, 7),
          s.fill(),
          (s.fillStyle = "#fff2b0"),
          s.beginPath(),
          s.ellipse(i + 3.5, 30 - n, 1.2, 2.2, 0, 0, 7),
          s.fill());
      return !0;
    case v.CAULDRON:
      (t(7, 30, 4, 6, "#2b2e32"),
        t(29, 30, 4, 6, "#2b2e32"),
        (s.fillStyle = "#34383c"),
        s.beginPath(),
        s.ellipse(20, 22, 16, 13, 0, 0, Math.PI),
        s.fill(),
        t(4, 14, 32, 5, "#44494e"),
        (s.fillStyle = "#6fe04a"),
        s.beginPath(),
        s.ellipse(20, 15, 13, 3, 0, 0, 7),
        s.fill(),
        (s.fillStyle = "#d6ffc6"));
      for (const [i, n] of [
        [14, 11],
        [22, 8],
        [27, 12],
      ])
        (s.beginPath(), s.arc(i, n, 2, 0, 7), s.fill());
      return !0;
    case v.GRAVESTONE:
      return (
        t(6, 32, 28, 5, "#6b5237"),
        (s.fillStyle = "#9a9c9e"),
        s.beginPath(),
        s.moveTo(9, 33),
        s.lineTo(9, 13),
        s.arc(20, 13, 11, Math.PI, 0),
        s.lineTo(31, 33),
        s.fill(),
        t(19, 10, 3, 12, "#5d6064"),
        t(15, 14, 11, 3, "#5d6064"),
        t(13, 25, 15, 2, "#6f7275"),
        t(13, 29, 15, 2, "#6f7275"),
        !0
      );
    case v.GRAVE_CROSS:
      return (
        t(8, 33, 24, 4, "#6b5237"),
        t(17, 4, 6, 30, "#5d544b"),
        t(8, 12, 24, 6, "#5d544b"),
        t(16, 13, 8, 4, "#d9d0b8"),
        !0
      );
    case v.SKULL:
      ((s.fillStyle = "#e8e0c8"),
        s.beginPath(),
        s.ellipse(20, 17, 13, 12, 0, 0, 7),
        s.fill(),
        t(12, 24, 16, 9, "#e8e0c8"),
        (s.fillStyle = "#17120f"));
      for (const i of [14, 26])
        (s.beginPath(), s.ellipse(i, 19, 3.8, 4.2, 0, 0, 7), s.fill());
      t(19, 23, 2, 3, "#17120f");
      for (let i = 14; i < 27; i += 3) t(i, 29, 2, 4, "#17120f");
      return !0;
    case v.SCARECROW:
      return (
        t(19, 14, 2, 24, "#6b5a47"),
        t(4, 16, 32, 4, "#b8342c"),
        t(14, 14, 12, 12, "#b8342c"),
        t(15, 26, 4, 10, "#3747a0"),
        t(21, 26, 4, 10, "#3747a0"),
        t(3, 15, 3, 6, "#d6b04a"),
        t(34, 15, 3, 6, "#d6b04a"),
        (s.fillStyle = "#e8892a"),
        s.beginPath(),
        s.ellipse(20, 9, 7, 6, 0, 0, 7),
        s.fill(),
        t(12, 2, 16, 2, "#5b3d24"),
        t(15, 0, 10, 3, "#5b3d24"),
        t(17, 7, 2, 2, "#ffe07a"),
        t(22, 7, 2, 2, "#ffe07a"),
        t(17, 11, 7, 1.5, "#ffe07a"),
        !0
      );
    case v.COFFIN:
      return (
        (s.fillStyle = "#4a3326"),
        s.beginPath(),
        s.moveTo(14, 3),
        s.lineTo(26, 3),
        s.lineTo(31, 12),
        s.lineTo(27, 37),
        s.lineTo(13, 37),
        s.lineTo(9, 12),
        s.fill(),
        t(19, 9, 2, 16, "#d9d0b8"),
        t(15, 13, 10, 2, "#d9d0b8"),
        !0
      );
    case v.POTION_SHELF:
      (t(4, 4, 32, 32, "#3f2c20"),
        t(6, 6, 28, 13, "#26190f"),
        t(6, 21, 28, 13, "#26190f"),
        t(4, 19, 32, 2, "#5a4030"));
      for (const [i, n, o] of [
        [8, 9, "#8a4ad8"],
        [15, 11, "#6fe04a"],
        [22, 8, "#d8423a"],
        [28, 11, "#3ac4d8"],
        [9, 25, "#f09a2a"],
        [17, 24, "#6fe04a"],
        [25, 26, "#8a4ad8"],
      ])
        (t(i, n, 5, n < 20 ? 17 - n : 33 - n, o),
          t(i + 1, n - 2, 3, 2, "#a07850"));
      return !0;
    case v.IRON_FENCE:
      for (const i of [7, 19, 31])
        (t(i - 1, 8, 3, 28, "#2e3036"),
          (s.fillStyle = "#2e3036"),
          s.beginPath(),
          s.moveTo(i - 3, 9),
          s.lineTo(i + 0.5, 3),
          s.lineTo(i + 4, 9),
          s.fill());
      return (t(4, 14, 32, 3, "#3a3c42"), t(4, 27, 32, 3, "#3a3c42"), !0);
    default:
      return !1;
  }
}
