// index-BeUlFSPp 29 — graphics
// Lines 34714-34932 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function G$() {
  const s = {
    quality: "medium",
    sensitivity: jr() ? 3 : 1,
    defaultsRev: 4,
    aircraftSensitivity: 1,
    fov: 75,
    nick: "",
    server: "",
    autoFullscreen: !1,
    sfxVolume: 1,
    uiSounds: !0,
    musicVolume: 0.5,
    language: "en",
    languageChosen: !1,
    aimAssist: !0,
    aimAssistStrength: 0.65,
    haptics: !0,
    mobileLabels: !0,
    mobileChat: !1,
    mobileLayoutEdit: !1,
    mobileLayout: {},
    mobileLayoutPortrait: {},
    autoJump: !0,
    chatScale: 1,
    minimapZoom: 1,
    brightness: 1,
    itemTooltips: !0,
    vehicleInstruments: !0,
    cinematicHud: !1,
    cameraBob: !0,
    windSway: !0,
    fallingLeaves: !0,
    screamers: !0,
    militaryOptimizationThreshold: 30,
    adaptiveResolution: !0,
    qualityAuto: !0,
    binds: { ...ia },
    lightOn: {},
    headlightsOn: {},
    debug: {
      fps: !1,
      position: !1,
      render: !1,
      chunks: !1,
      entities: !1,
      network: !1,
      memory: !1,
    },
    graphics: { ...C5.medium },
    shaders: 0,
  };
  try {
    const e = JSON.parse(localStorage.getItem(wP) ?? "{}"),
      t = { ...ia, ...(e.binds ?? {}) };
    if (e.binds?.seat === void 0) {
      const r = new Set(
        Object.entries(t)
          .filter(([l]) => l !== "seat")
          .map(([, l]) => l),
      );
      t.seat = ["KeyY", "KeyU", "KeyO"].find((l) => !r.has(l)) ?? "";
    }
    if (e.binds?.cargo === void 0) {
      const r = new Set(
        Object.entries(t)
          .filter(([l]) => l !== "cargo")
          .map(([, l]) => l),
      );
      t.cargo = ["KeyJ", "KeyU", "KeyO"].find((l) => !r.has(l)) ?? "";
    }
    if (e.binds?.skills === void 0) {
      const r = new Set(
        Object.entries(t)
          .filter(([l]) => l !== "skills")
          .map(([, l]) => l),
      );
      t.skills = ["KeyN", "KeyU", "KeyO", "KeyP"].find((l) => !r.has(l)) ?? "";
    }
    if (e.binds?.voice === void 0) {
      const r = new Set(
        Object.entries(t)
          .filter(([l]) => l !== "voice")
          .map(([, l]) => l),
      );
      t.voice = ["KeyK", "KeyL", "KeyJ", "KeyO"].find((l) => !r.has(l)) ?? "";
    }
    !e.binds?.vision && (t.shop === "KeyB" || t.shop === "KeyG")
      ? ((t.shop = ia.shop),
        (t.vision = ia.vision),
        (t.detonate === "KeyG" || t.detonate === "KeyH") &&
          (t.detonate = ia.detonate))
      : ((e.binds?.shop === "KeyP" &&
          e.binds?.vision === "KeyB" &&
          e.binds?.detonate === "KeyG") ||
          (e.binds?.shop === "KeyG" &&
            e.binds?.vision === "KeyC" &&
            e.binds?.detonate === "KeyH")) &&
        ((t.shop = ia.shop),
        (t.vision = ia.vision),
        (t.detonate = ia.detonate));
    for (const r of ["flashlight", "headlights", "inspect"]) {
      if (e.binds?.[r] !== void 0) continue;
      Object.entries(t).some(([c, h]) => c !== r && h === ia[r]) && (t[r] = "");
    }
    const i = {
      ...s,
      ...e,
      binds: t,
      lightOn: e.lightOn ?? {},
      headlightsOn: e.headlightsOn ?? {},
      debug: { ...s.debug, ...(e.debug ?? {}) },
      graphics: { ...s.graphics, ...(e.graphics ?? {}) },
      mobileLayout: e.mobileLayout ?? {},
      mobileLayoutPortrait: e.mobileLayoutPortrait ?? {},
    };
    ((i.languageChosen =
      e.languageChosen === !0 ||
      (e.languageChosen === void 0 && e.language === "ru")),
      (i.language = i.languageChosen && T5(e.language) ? e.language : BS(Tf())),
      (i.graphics.textureSize = yP(i.graphics.textureSize)),
      (i.graphics.modelDetail = [0, 1, 2].includes(i.graphics.modelDetail)
        ? i.graphics.modelDetail
        : 1),
      (i.graphics.waterQuality = [0, 1, 2, 3].includes(i.graphics.waterQuality)
        ? i.graphics.waterQuality
        : 1),
      (i.graphics.celestialDetail = [0, 1, 2].includes(
        i.graphics.celestialDetail,
      )
        ? i.graphics.celestialDetail
        : 1),
      (i.graphics.environmentDetail = [0, 1, 2].includes(
        i.graphics.environmentDetail,
      )
        ? i.graphics.environmentDetail
        : 1));
    const n = Number(i.graphics.sunShafts);
    ((i.graphics.sunShafts = Number.isFinite(n)
      ? Math.max(0, Math.min(2, n))
      : 0.7),
      (i.shaders = bP(i.shaders)),
      (i.minimapZoom = U$(i.minimapZoom)),
      (i.vehicleInstruments = i.vehicleInstruments !== !1),
      (i.cinematicHud = i.cinematicHud === !0),
      (i.brightness = Number.isFinite(Number(i.brightness))
        ? Math.max(0.7, Math.min(1.6, Number(i.brightness)))
        : 1),
      (i.itemTooltips = i.itemTooltips !== !1),
      (i.cameraBob = i.cameraBob !== !1),
      (i.windSway = i.windSway !== !1),
      (i.fallingLeaves = i.fallingLeaves !== !1),
      (i.screamers = i.screamers !== !1),
      (i.uiSounds = i.uiSounds !== !1),
      (i.adaptiveResolution = i.adaptiveResolution !== !1),
      (i.qualityAuto =
        typeof e.qualityAuto == "boolean"
          ? e.qualityAuto
          : e.quality === void 0 || e.quality === "medium"));
    const o = Number(i.militaryOptimizationThreshold);
    ((i.militaryOptimizationThreshold = Number.isFinite(o)
      ? Math.max(10, Math.min(100, Math.round(o)))
      : s.militaryOptimizationThreshold),
      (i.aircraftSensitivity = Math.max(
        0.2,
        Math.min(5, Number(i.aircraftSensitivity) || s.aircraftSensitivity),
      )),
      (e.defaultsRev ?? 0) < 1 &&
        Number(e.sensitivity) === 1 &&
        (i.sensitivity = s.sensitivity),
      (e.defaultsRev ?? 0) < 2 &&
        i.shaders === 0 &&
        (i.quality === "high" || i.quality === "ultra") &&
        (i.shaders = SA[i.quality]),
      (e.defaultsRev ?? 0) < 3 &&
        Number(i.sensitivity) === 3 &&
        (i.sensitivity = s.sensitivity),
      (e.defaultsRev ?? 0) < 4 &&
        i.graphics &&
        typeof i.graphics == "object" &&
        (i.graphics.fog = !1),
      (i.mobileChat = i.mobileChat === !0),
      (i.defaultsRev = s.defaultsRev),
      (i.sensitivity = Math.max(
        0.2,
        Math.min(5, Number(i.sensitivity) || s.sensitivity),
      )));
    const a = Number(i.aimAssistStrength);
    return (
      (i.aimAssistStrength = Number.isFinite(a)
        ? Math.max(0, Math.min(1, a))
        : s.aimAssistStrength),
      i
    );
  } catch {
    return ((s.language = BS(Tf())), s);
  }
}
const Y = G$();
function Ji() {
  localStorage.setItem(wP, JSON.stringify(Y));
}
function Bn() {
  return Y.quality === "custom" ? Y.graphics : C5[Y.quality];
}
function jx() {
  return (
    Y.quality !== "custom" && (Y.graphics = { ...C5[Y.quality] }),
    (Y.quality = "custom"),
    Y.graphics
  );
}
function W$() {
  ((Y.binds = { ...ia }), Ji());
}
function $$(s, e) {
  for (const t of vP) t !== s && Y.binds[t] === e && (Y.binds[t] = "");
  ((Y.binds[s] = e), Ji());
}
