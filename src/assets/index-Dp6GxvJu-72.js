// index-Dp6GxvJu 72 — graphics
// Lines 50419-50624 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function e$() {
  var e, t, i, s, o, a, r, l, c, h, d, u;
  const n = {
    quality: "medium",
    sensitivity: lr() ? 3 : 1,
    defaultsRev: 3,
    aircraftSensitivity: 1,
    fov: 75,
    nick: "",
    server: "",
    autoFullscreen: !1,
    sfxVolume: 1,
    musicVolume: 0.5,
    language: "en",
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
    binds: { ...Co },
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
    graphics: { ...QUALITY_PRESETS.medium },
    shaders: 0,
  };
  try {
    const f = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "{}"),
      p = { ...Co, ...(f.binds ?? {}) };
    if (((e = f.binds) == null ? void 0 : e.seat) === void 0) {
      const S = new Set(
        Object.entries(p)
          .filter(([M]) => M !== "seat")
          .map(([, M]) => M),
      );
      p.seat = ["KeyY", "KeyU", "KeyO"].find((M) => !S.has(M)) ?? "";
    }
    if (((t = f.binds) == null ? void 0 : t.cargo) === void 0) {
      const S = new Set(
        Object.entries(p)
          .filter(([M]) => M !== "cargo")
          .map(([, M]) => M),
      );
      p.cargo = ["KeyJ", "KeyU", "KeyO"].find((M) => !S.has(M)) ?? "";
    }
    if (((i = f.binds) == null ? void 0 : i.skills) === void 0) {
      const S = new Set(
        Object.entries(p)
          .filter(([M]) => M !== "skills")
          .map(([, M]) => M),
      );
      p.skills = ["KeyN", "KeyU", "KeyO", "KeyP"].find((M) => !S.has(M)) ?? "";
    }
    if (((s = f.binds) == null ? void 0 : s.voice) === void 0) {
      const S = new Set(
        Object.entries(p)
          .filter(([M]) => M !== "voice")
          .map(([, M]) => M),
      );
      p.voice = ["KeyK", "KeyL", "KeyJ", "KeyO"].find((M) => !S.has(M)) ?? "";
    }
    !((o = f.binds) != null && o.vision) &&
    (p.shop === "KeyB" || p.shop === "KeyG")
      ? ((p.shop = Co.shop),
        (p.vision = Co.vision),
        (p.detonate === "KeyG" || p.detonate === "KeyH") &&
          (p.detonate = Co.detonate))
      : ((((a = f.binds) == null ? void 0 : a.shop) === "KeyP" &&
          ((r = f.binds) == null ? void 0 : r.vision) === "KeyB" &&
          ((l = f.binds) == null ? void 0 : l.detonate) === "KeyG") ||
          (((c = f.binds) == null ? void 0 : c.shop) === "KeyG" &&
            ((h = f.binds) == null ? void 0 : h.vision) === "KeyC" &&
            ((d = f.binds) == null ? void 0 : d.detonate) === "KeyH")) &&
        ((p.shop = Co.shop),
        (p.vision = Co.vision),
        (p.detonate = Co.detonate));
    for (const S of ["flashlight", "headlights", "inspect"]) {
      if (((u = f.binds) == null ? void 0 : u[S]) !== void 0) continue;
      Object.entries(p).some(([x, T]) => x !== S && T === Co[S]) && (p[S] = "");
    }
    const m = {
      ...n,
      ...f,
      binds: p,
      lightOn: f.lightOn ?? {},
      headlightsOn: f.headlightsOn ?? {},
      debug: { ...n.debug, ...(f.debug ?? {}) },
      graphics: { ...n.graphics, ...(f.graphics ?? {}) },
      mobileLayout: f.mobileLayout ?? {},
      mobileLayoutPortrait: f.mobileLayoutPortrait ?? {},
    };
    ((m.language = f.language === "ru" ? "ru" : "en"),
      (m.graphics.textureSize = Xk(m.graphics.textureSize)),
      (m.graphics.modelDetail = [0, 1, 2].includes(m.graphics.modelDetail)
        ? m.graphics.modelDetail
        : 1),
      (m.graphics.waterQuality = [0, 1, 2, 3].includes(m.graphics.waterQuality)
        ? m.graphics.waterQuality
        : 1),
      (m.graphics.celestialDetail = [0, 1, 2].includes(
        m.graphics.celestialDetail,
      )
        ? m.graphics.celestialDetail
        : 1),
      (m.graphics.environmentDetail = [0, 1, 2].includes(
        m.graphics.environmentDetail,
      )
        ? m.graphics.environmentDetail
        : 1));
    const y = Number(m.graphics.sunShafts);
    ((m.graphics.sunShafts = Number.isFinite(y)
      ? Math.max(0, Math.min(2, y))
      : 0.7),
      (m.shaders = Jk(m.shaders)),
      (m.minimapZoom = JV(m.minimapZoom)),
      (m.vehicleInstruments = m.vehicleInstruments !== !1),
      (m.cinematicHud = m.cinematicHud === !0),
      (m.brightness = Number.isFinite(Number(m.brightness))
        ? Math.max(0.7, Math.min(1.6, Number(m.brightness)))
        : 1),
      (m.itemTooltips = m.itemTooltips !== !1),
      (m.cameraBob = m.cameraBob !== !1),
      (m.windSway = m.windSway !== !1),
      (m.fallingLeaves = m.fallingLeaves !== !1),
      (m.screamers = m.screamers !== !1),
      (m.adaptiveResolution = m.adaptiveResolution !== !1));
    const g = Number(m.militaryOptimizationThreshold);
    ((m.militaryOptimizationThreshold = Number.isFinite(g)
      ? Math.max(10, Math.min(100, Math.round(g)))
      : n.militaryOptimizationThreshold),
      (m.aircraftSensitivity = Math.max(
        0.2,
        Math.min(5, Number(m.aircraftSensitivity) || n.aircraftSensitivity),
      )),
      (f.defaultsRev ?? 0) < 1 &&
        Number(f.sensitivity) === 1 &&
        (m.sensitivity = n.sensitivity),
      (f.defaultsRev ?? 0) < 2 &&
        m.shaders === 0 &&
        (m.quality === "high" || m.quality === "ultra") &&
        (m.shaders = Qk[m.quality]),
      (f.defaultsRev ?? 0) < 3 &&
        Number(m.sensitivity) === 3 &&
        (m.sensitivity = n.sensitivity),
      (m.mobileChat = m.mobileChat === !0),
      (m.defaultsRev = n.defaultsRev),
      (m.sensitivity = Math.max(
        0.2,
        Math.min(5, Number(m.sensitivity) || n.sensitivity),
      )));
    const b = Number(m.aimAssistStrength);
    return (
      (m.aimAssistStrength = Number.isFinite(b)
        ? Math.max(0, Math.min(1, b))
        : n.aimAssistStrength),
      m
    );
  } catch {
    return n;
  }
}
const SETTINGS = e$();
function qi() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(SETTINGS));
}
function Ts() {
  return SETTINGS.quality === "custom" ? SETTINGS.graphics : QUALITY_PRESETS[SETTINGS.quality];
}
function sA() {
  return (
    SETTINGS.quality !== "custom" && (SETTINGS.graphics = { ...QUALITY_PRESETS[SETTINGS.quality] }),
    (SETTINGS.quality = "custom"),
    SETTINGS.graphics
  );
}
function t$() {
  ((SETTINGS.binds = { ...Co }), qi());
}
function i$(n, e) {
  for (const t of Zk) t !== n && SETTINGS.binds[t] === e && (SETTINGS.binds[t] = "");
  ((SETTINGS.binds[n] = e), qi());
}
