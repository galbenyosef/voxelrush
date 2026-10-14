// index-Dp6GxvJu 130 — fillstyle
// Lines 76459-76658 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
async function vX(n) {
  const e = await f1(),
    t = jy(n);
  return new Promise((i, s) => {
    const o = e.transaction(Gs, "readonly"),
      a = o.objectStore(Gs),
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
      (o.onerror = () => s(o.error ?? new Error("Could not load world"))),
      (o.onabort = () => s(o.error ?? new Error("World load aborted"))));
  });
}
const j = (n) => document.getElementById(n),
  bX = "#ffd44a";
function l_(n) {
  const e = z.language === "en",
    t =
      n === E.MILITARY_MEDKIT
        ? e
          ? "100% health with armor HP"
          : "100% здоровья с бонусом брони"
        : `+${n === E.MEDKIT ? S2 : E2} HP`,
    i = n === E.MILITARY_MEDKIT ? tw : n === E.MEDKIT ? iw : nw;
  return `${t} · ${e ? "Cooldown" : "Перезарядка"} ${i} ${e ? "s" : "с"}`;
}
const wX = {
  property: v.OWNERSHIP_TOTEM,
  casino: dy,
  explosive: E.DYNAMITE_BUNDLE,
  blueprint: E.BLUEPRINT_CABIN,
  block: v.STONE_BRICKS,
  nature: v.GRASS,
  food: E.APPLE,
  resource: E.IRON_INGOT,
  weapon: E.AK47,
  ammo: E.AMMO_762,
  tool: E.DRILL_METAL,
  medical: E.MEDKIT,
  armor: E.HELMET_2,
  vehicle: E.TANK,
  unit: E.MILITARY_BOT,
};
function MX(n, e) {
  const t = (i, s, o, a, r) => {
    ((n.fillStyle = r), n.fillRect(i, s, o, a));
  };
  switch (e) {
    case v.CANDLE:
      for (const [i, s] of [
        [9, 20],
        [18, 26],
        [27, 16],
      ])
        (t(i, 36 - s, 7, s, "#efe2bf"),
          t(i + 5, 36 - s, 2, s, "#cdbd93"),
          t(i + 3, 33 - s, 1, 3, "#2a2522"),
          (n.fillStyle = "#ffb43a"),
          n.beginPath(),
          n.ellipse(i + 3.5, 29 - s, 2.6, 4.5, 0, 0, 7),
          n.fill(),
          (n.fillStyle = "#fff2b0"),
          n.beginPath(),
          n.ellipse(i + 3.5, 30 - s, 1.2, 2.2, 0, 0, 7),
          n.fill());
      return !0;
    case v.CAULDRON:
      (t(7, 30, 4, 6, "#2b2e32"),
        t(29, 30, 4, 6, "#2b2e32"),
        (n.fillStyle = "#34383c"),
        n.beginPath(),
        n.ellipse(20, 22, 16, 13, 0, 0, Math.PI),
        n.fill(),
        t(4, 14, 32, 5, "#44494e"),
        (n.fillStyle = "#6fe04a"),
        n.beginPath(),
        n.ellipse(20, 15, 13, 3, 0, 0, 7),
        n.fill(),
        (n.fillStyle = "#d6ffc6"));
      for (const [i, s] of [
        [14, 11],
        [22, 8],
        [27, 12],
      ])
        (n.beginPath(), n.arc(i, s, 2, 0, 7), n.fill());
      return !0;
    case v.GRAVESTONE:
      return (
        t(6, 32, 28, 5, "#6b5237"),
        (n.fillStyle = "#9a9c9e"),
        n.beginPath(),
        n.moveTo(9, 33),
        n.lineTo(9, 13),
        n.arc(20, 13, 11, Math.PI, 0),
        n.lineTo(31, 33),
        n.fill(),
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
      ((n.fillStyle = "#e8e0c8"),
        n.beginPath(),
        n.ellipse(20, 17, 13, 12, 0, 0, 7),
        n.fill(),
        t(12, 24, 16, 9, "#e8e0c8"),
        (n.fillStyle = "#17120f"));
      for (const i of [14, 26])
        (n.beginPath(), n.ellipse(i, 19, 3.8, 4.2, 0, 0, 7), n.fill());
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
        (n.fillStyle = "#e8892a"),
        n.beginPath(),
        n.ellipse(20, 9, 7, 6, 0, 0, 7),
        n.fill(),
        t(12, 2, 16, 2, "#5b3d24"),
        t(15, 0, 10, 3, "#5b3d24"),
        t(17, 7, 2, 2, "#ffe07a"),
        t(22, 7, 2, 2, "#ffe07a"),
        t(17, 11, 7, 1.5, "#ffe07a"),
        !0
      );
    case v.COFFIN:
      return (
        (n.fillStyle = "#4a3326"),
        n.beginPath(),
        n.moveTo(14, 3),
        n.lineTo(26, 3),
        n.lineTo(31, 12),
        n.lineTo(27, 37),
        n.lineTo(13, 37),
        n.lineTo(9, 12),
        n.fill(),
        t(19, 9, 2, 16, "#d9d0b8"),
        t(15, 13, 10, 2, "#d9d0b8"),
        !0
      );
    case v.POTION_SHELF:
      (t(4, 4, 32, 32, "#3f2c20"),
        t(6, 6, 28, 13, "#26190f"),
        t(6, 21, 28, 13, "#26190f"),
        t(4, 19, 32, 2, "#5a4030"));
      for (const [i, s, o] of [
        [8, 9, "#8a4ad8"],
        [15, 11, "#6fe04a"],
        [22, 8, "#d8423a"],
        [28, 11, "#3ac4d8"],
        [9, 25, "#f09a2a"],
        [17, 24, "#6fe04a"],
        [25, 26, "#8a4ad8"],
      ])
        (t(i, s, 5, s < 20 ? 17 - s : 33 - s, o),
          t(i + 1, s - 2, 3, 2, "#a07850"));
      return !0;
    case v.IRON_FENCE:
      for (const i of [7, 19, 31])
        (t(i - 1, 8, 3, 28, "#2e3036"),
          (n.fillStyle = "#2e3036"),
          n.beginPath(),
          n.moveTo(i - 3, 9),
          n.lineTo(i + 0.5, 3),
          n.lineTo(i + 4, 9),
          n.fill());
      return (t(4, 14, 32, 3, "#3a3c42"), t(4, 27, 32, 3, "#3a3c42"), !0);
    default:
      return !1;
  }
}
