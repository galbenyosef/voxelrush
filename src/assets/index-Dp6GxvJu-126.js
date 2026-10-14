// index-Dp6GxvJu 126 — count
// Lines 75327-75671 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class tX {
  constructor(e) {
    w(this, "hotbar", []);
    w(this, "storage", []);
    w(this, "armor", []);
    w(this, "sel", 0);
    w(this, "creative", !1);
    w(this, "onChange", () => {});
    w(this, "updatedAt", 0);
    w(this, "applyingServer", !1);
    w(this, "deferDepth", 0);
    w(this, "deferredChange", !1);
    ((this.storageKey = e), this.reset(), this.load());
  }
  serialize() {
    const e = [];
    for (const t of [...this.hotbar, ...this.storage, ...this.armor])
      e.push(
        t.id,
        t.count,
        t.durability ?? np(t.id),
        t.suppressorDurability ?? Vl(t.id),
        t.magazine ?? 65535,
      );
    return e;
  }
  equippedIds() {
    return this.armor.map((e) => e.id);
  }
  applyServer(e, t = 0) {
    if (e.length < 9 + Ic) return;
    ((this.hotbar = e.slice(0, 9).map((s) => this.normalizedSlot(s))),
      (this.storage = e.slice(9, 9 + Ic).map((s) => this.normalizedSlot(s))));
    const i = 9 + Ic;
    e.length >= i + Uh
      ? (this.armor = e.slice(i, i + Uh).map((s) => this.normalizedSlot(s)))
      : (this.armor = Array.from({ length: Uh }, yo));
    for (let s = 0; s < Uh; s++) {
      const o = this.armor[s],
        a = Nc[o.id];
      !a || a.slot !== ir[s] ? ((o.id = 0), (o.count = 0)) : (o.count = 1);
    }
    ((this.applyingServer = !0),
      (this.updatedAt = Math.max(0, Math.floor(t))),
      this.save(),
      (this.applyingServer = !1));
  }
  applyDurability(e, t, i, s) {
    const o = this.hotbar[e];
    if (!o) return 0;
    const a = o.id;
    return (
      (t > 0 && i > 0 && o.id > 0 && o.id !== t) ||
        ((this.applyingServer = !0),
        t <= 0 || i <= 0
          ? Object.assign(o, yo())
          : ((o.id = t),
            (o.count = 1),
            (o.durability = i),
            (o.suppressorDurability = s)),
        this.save(),
        (this.applyingServer = !1)),
      a
    );
  }
  applyArmorDurability(e, t, i) {
    const s = this.armor[e];
    if (!s) return 0;
    const o = s.id;
    return (
      (t > 0 && i > 0 && s.id > 0 && s.id !== t) ||
        ((this.applyingServer = !0),
        t <= 0 || i <= 0
          ? Object.assign(s, yo())
          : ((s.id = t),
            (s.count = 1),
            (s.durability = i),
            e !== 0 && ((s.suppressorDurability = 0), (s.magazine = void 0))),
        this.save(),
        (this.applyingServer = !1)),
      o
    );
  }
  applyHelmetModuleState(e, t) {
    const i = this.armor[0];
    i &&
      ((this.applyingServer = !0),
      Ql(e) && t > 0
        ? ((i.magazine = e), (i.suppressorDurability = Math.min(Da(e), t)))
        : ((i.magazine = void 0), (i.suppressorDurability = 0)),
      this.save(),
      (this.applyingServer = !1));
  }
  normalizedSlot(e) {
    if (!e || e.id <= 0 || e.count <= 0 || e.id === 277) return yo();
    const t = or(e.id),
      i = sr(e),
      s = Ql(e.id) ? Da(e.id) : 0,
      o = i ? Da(i) : s > 0 ? s : Vl(e.id),
      a = e.suppressorDurability,
      r = s > 0 && (a ?? 0) <= 0 ? o : a;
    return {
      cosmetic: e.cosmetic,
      id: e.id,
      count: wo(e.id) ? 1 : e.count,
      durability: t > 0 ? Math.max(0, Math.min(t, e.durability ?? t)) : 0,
      suppressorDurability: o > 0 ? Math.max(0, Math.min(o, r ?? o)) : 0,
      magazine:
        e.magazine === void 0 || e.magazine === 65535
          ? void 0
          : Math.max(0, Math.floor(e.magazine)),
    };
  }
  reset() {
    ((this.hotbar = Array.from({ length: 9 }, yo)),
      (this.storage = Array.from({ length: Ic }, yo)),
      (this.armor = Array.from({ length: Uh }, yo)));
  }
  held() {
    var e;
    return ((e = this.hotbar[this.sel]) == null ? void 0 : e.id) ?? 0;
  }
  allSlots() {
    return [...this.hotbar, ...this.storage];
  }
  countOf(e) {
    let t = 0;
    for (const i of this.allSlots()) i.id === e && (t += i.count);
    for (const i of this.armor) i.id === e && (t += i.count);
    return t;
  }
  addItem(e, t = 1, i = np(e), s = Vl(e), o, a) {
    const r = a ? 1 : ia(e);
    if (e <= 0 || r <= 0) return 0;
    let l = t;
    for (const c of [this.hotbar, this.storage])
      for (const h of c) {
        if (l <= 0) break;
        if (h.id === e && h.count < r && !h.cosmetic && !a) {
          const d = Math.min(r - h.count, l);
          ((h.count += d), (l -= d));
        }
      }
    for (const c of [this.hotbar, this.storage])
      for (const h of c) {
        if (l <= 0) break;
        h.id === 0 &&
          ((h.id = e),
          (h.count = Math.min(r, l)),
          (h.durability = or(e) > 0 ? i : 0),
          (h.suppressorDurability = s),
          (h.magazine = o),
          (h.cosmetic = a),
          (l -= h.count));
      }
    return (this.save(), t - l);
  }
  hasRoomFor(e, t = 1) {
    if (this.creative) return !0;
    const i = ia(e);
    if (e <= 0 || i <= 0 || t <= 0) return !1;
    let s = 0;
    for (const o of this.allSlots())
      if (
        ((s += o.id === 0 ? i : o.id === e ? Math.max(0, i - o.count) : 0),
        s >= t)
      )
        return !0;
    return !1;
  }
  addBlock(e, t = 1) {
    return e <= 0 || e >= 256 ? 0 : this.addItem(e, t);
  }
  removeItem(e, t = 1) {
    if (this.creative) return t;
    let i = t;
    for (const s of [this.hotbar, this.storage])
      for (const o of s) {
        if (i <= 0) break;
        if (o.id !== e) continue;
        const a = Math.min(o.count, i);
        ((o.count -= a), (i -= a), o.count <= 0 && Object.assign(o, yo()));
      }
    return (i !== t && this.save(), t - i);
  }
  removeFromSlot(e, t, i = 1) {
    if (this.creative) return i;
    const o = (e === "h" ? this.hotbar : e === "a" ? this.armor : this.storage)[
      t
    ];
    if (!o || o.id <= 0 || o.count <= 0) return 0;
    const a = Math.min(o.count, Math.max(0, Math.floor(i)));
    return (
      (o.count -= a),
      o.count <= 0 && Object.assign(o, yo()),
      a > 0 && this.save(),
      a
    );
  }
  consumeItem(e, t = 1) {
    return this.removeItem(e, t) === t;
  }
  consumeHeld() {
    const e = this.hotbar[this.sel];
    return !e || e.id <= 0 || e.count <= 0
      ? !1
      : (this.creative ||
          (e.count--, e.count <= 0 && Object.assign(e, yo()), this.save()),
        !0);
  }
  applyBucketResult(e, t) {
    const i = this.hotbar[e];
    i &&
      ((this.applyingServer = !0),
      Object.assign(
        i,
        t > 0
          ? { id: t, count: 1, durability: 0, suppressorDurability: 0 }
          : yo(),
      ),
      this.save(),
      (this.applyingServer = !1));
  }
  clearAll() {
    for (const e of this.allSlots()) Object.assign(e, yo());
    for (const e of this.armor) Object.assign(e, yo());
    this.save();
  }
  clearArmor() {
    for (const e of this.armor) Object.assign(e, yo());
    this.save();
  }
  clearBlocks() {
    this.clearAll();
  }
  equipArmor(e, t = np(e)) {
    const i = Nc[e];
    if (!i) return { ok: !1, previous: 0 };
    const s = ir.indexOf(i.slot);
    if (s < 0) return { ok: !1, previous: 0 };
    const o = this.armor[s].id;
    return (
      (this.armor[s] = {
        id: e,
        count: 1,
        durability: t,
        suppressorDurability: 0,
      }),
      this.save(),
      { ok: !0, previous: o }
    );
  }
  equipHeldArmor() {
    const e = this.hotbar[this.sel],
      t = Nc[e == null ? void 0 : e.id];
    if (!t || e.count !== 1) return !1;
    const i = ir.indexOf(t.slot),
      s = { ...this.armor[i] };
    return (
      (this.armor[i] = { ...e }),
      (this.hotbar[this.sel] = s.id > 0 ? s : yo()),
      this.save(),
      !0
    );
  }
  canEquipInSlot(e, t) {
    if (e === 0) return !0;
    const i = Nc[e];
    return i ? i.slot === ir[t] : !1;
  }
  armorSlotKind(e) {
    return ir[e] ?? "helmet";
  }
  deferChanges(e) {
    this.deferDepth++;
    try {
      return e();
    } finally {
      (this.deferDepth--,
        this.deferDepth === 0 &&
          this.deferredChange &&
          ((this.deferredChange = !1), this.onChange()));
    }
  }
  save() {
    (this.applyingServer ||
      (this.updatedAt = Math.max(Date.now(), this.updatedAt + 1)),
      localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          hotbar: this.hotbar,
          storage: this.storage,
          armor: this.armor,
          updatedAt: this.updatedAt,
        }),
      ),
      this.applyingServer ||
        (this.deferDepth > 0 ? (this.deferredChange = !0) : this.onChange()));
  }
  load() {
    try {
      const e = JSON.parse(localStorage.getItem(this.storageKey) ?? "null"),
        t = (i) => !!i && typeof i.id == "number" && typeof i.count == "number";
      e &&
        Array.isArray(e.hotbar) &&
        e.hotbar.length === 9 &&
        e.hotbar.every(t) &&
        Array.isArray(e.storage) &&
        e.storage.length === Ic &&
        e.storage.every(t) &&
        ((this.hotbar = e.hotbar),
        (this.storage = e.storage),
        Array.isArray(e.armor) &&
          e.armor.length === Uh &&
          e.armor.every(t) &&
          (this.armor = e.armor),
        (this.hotbar = this.hotbar.map((i) => this.normalizedSlot(i))),
        (this.storage = this.storage.map((i) => this.normalizedSlot(i))),
        (this.armor = this.armor.map((i) => this.normalizedSlot(i))),
        (this.updatedAt = Number.isFinite(e.updatedAt)
          ? Math.max(0, Math.floor(e.updatedAt))
          : 0));
    } catch {}
  }
}
const Ft = {
  AUTO: 0,
  GRENADE: 1,
  ROCKET: 2,
  SHELL: 3,
  AIR_BOMB: 4,
  C4: 5,
  DYNAMITE: 6,
  DYNAMITE_SMALL: 7,
  DYNAMITE_BUNDLE: 8,
  BREACH: 9,
  FRAG: 10,
  INCENDIARY: 11,
  HEAVY: 12,
  THERMOBARIC: 13,
  NUCLEAR: 14,
  MINE: 15,
  MISSILE: 16,
  TOMAHAWK: 17,
};
