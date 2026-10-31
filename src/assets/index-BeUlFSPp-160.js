// index-BeUlFSPp 160 — textcontent
// Lines 87396-92906 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Wo {
  onPlay = () => {};
  onQualityChange = () => {};
  syncSettingsPanel = () => {};
  onDisconnect = () => {};
  onResume = () => {};
  onRespawn = () => {};
  onSaveGame = () => {};
  onSkills = () => {};
  localMode = !1;
  onWaypointChange = () => {};
  onChatOpened = () => {};
  onChatSend = () => {};
  onChatClosed = () => {};
  onMapClosed = () => {};
  onToggleFriend = () => {};
  onInventoryPreview = () => {};
  onHotbarChange = () => {};
  onShopBuy = () => {};
  onEquipmentRepair = () => {};
  repairPending = !1;
  onSellItem = () => 0;
  onDropItem = () => {};
  onContainerMove = () => {};
  onChestPut = () => {};
  onChestTake = () => {};
  onChestSell = () => {};
  onFurnacePut = () => {};
  onFurnaceTake = () => {};
  onFurnaceSell = () => {};
  onFurnaceClose = () => {};
  onSfxVolumeChange = () => {};
  onMusicVolumeChange = () => {};
  onLanguageChange = () => {};
  onUiOpen = () => {};
  atlas = null;
  inventory = null;
  sfx = null;
  chatOpen = !1;
  chatHistory = [];
  chatHistIdx = 0;
  chatLog = [];
  static CHAT_KEEP = 30;
  chatFadeTimer = null;
  chatStickBottom = !0;
  invOpen = !1;
  pauseOpen = !1;
  deathOpen = !1;
  mapOpen = !1;
  tabOpen = !1;
  shopOpen = !1;
  shopCategory = "all";
  chestOpen = !1;
  furnaceOpen = !1;
  settingsOpen = !1;
  mobileIconCache = new Map();
  listeningBind = null;
  balance = 0;
  currentXp = 0;
  getBalance() {
    return this.balance;
  }
  chestSlots = [];
  furnaceSlots = [
    { id: 0, count: 0 },
    { id: 0, count: 0 },
    { id: 0, count: 0 },
  ];
  furnaceProgress = 0;
  furnaceFuel = 0;
  furnaceChimneyOpen = !1;
  furnaceSmoke = 0;
  mapCenter = { x: 0, z: 0 };
  himarsPos = { x: 0, z: 0 };
  mapMode = "world";
  mapScale = 2.4;
  mapSample = () => -1;
  minimapScaleMul = 1;
  worldBorder = null;
  mapLaunch = () => {};
  mapMarkers = () => [];
  debugOffset = 0;
  lastDebugText = "";
  mapDrag = null;
  mapDragged = !1;
  mapRefreshFrame = 0;
  waypoint = null;
  waypointPlanet = 0;
  operationPoints = [];
  setOperationPoints(e) {
    this.operationPoints = e;
  }
  raidZone = null;
  questMarkers = [];
  questEndAt = 0;
  lastQuestTimerText = "";
  lastQuestDistText = "";
  worldObjects = [];
  heldSites = new Set();
  hotbarSlots = [];
  invHotbarSlots = [];
  invGridSlots = [];
  armorSlots = [];
  transferCursor = null;
  transferHovered = null;
  transferDrag = null;
  suppressTransferClick = !1;
  dragPick = null;
  containerPending = !1;
  transferQueue = null;
  lastTransferClick = { key: "", time: 0 };
  collectPending = !1;
  picked = null;
  hoveredInventorySlot = null;
  chestPicked = null;
  furnacePicked = null;
  ghostSlot = null;
  hitmarkT = 0;
  concussionSeq = 0;
  hitDirs = [];
  onWeaponIdChanged = () => {};
  onHelmetModuleChanged = () => {};
  weaponMagInfo = () => null;
  attachModalOpen = !1;
  gunsmith;
  gunsmithFrame = 0;
  gunsmithKey = "";
  attachTarget = null;
  attachPickerCat = null;
  longPressFired = !1;
  qtyModalOpen = !1;
  qtyClose = null;
  qtyMaxVal = 0;
  qtyLine = () => ({ text: "", over: !1 });
  lastQtySum = "";
  pendingSpend = null;
  pendingSpendAt = 0;
  init() {
    (document.body.classList.toggle("mobile", jr()),
      AA(),
      SV().finally(() =>
        document.documentElement.classList.remove("i18n-pending"),
      ),
      this.initMobileButtons());
    const e = Vte(
      (ee, te) => (
        (Y.nick = ee),
        (Y.server = te),
        Ji(),
        this.beginPlay(ee, te)
      ),
      (ee, te) => this.showLoading(ee !== null, ee ?? void 0, te),
    );
    ((q("playbtn").onclick = e),
      (q("solobtn").onclick = () => {
        ((Y.nick = qe?.username || Y.nick || "Player"),
          Ji(),
          navigator.storage?.persist?.(),
          this.openWorlds());
      }),
      (q("worldsback").onclick = () => this.hideWorlds()),
      (q("worldnew").onclick = () => this.showWorldCreate(!0)),
      (q("worldcreatecancel").onclick = () => this.showWorldCreate(!1)),
      (q("worldseedrandom").onclick = () => {
        q("worldseed").value = String((Math.random() * 4294967296) >>> 0);
      }),
      (q("worldcreateconfirm").onclick = () => void this.confirmCreateWorld()),
      (q("menusettings").onclick = () => this.showSettings()),
      (q("playbtn").disabled = !1),
      (q("solobtn").disabled = !1),
      (q("menusettings").disabled = !1),
      (q("pausesettings").onclick = () => this.showSettings()),
      (q("pausetraining").onclick = () => {
        (this.hidePause(), this.onReplayTraining());
      }),
      (q("pauseinventory").onclick = () => lc("inventory")),
      (q("invskills").onclick = () => {
        (this.closeInventory(), this.onSkills());
      }),
      (q("settingsback").onclick = () => this.hideSettings()),
      (q("settingsclose").onclick = () => this.hideSettings()),
      (q("resumebtn").onclick = () => {
        this.resumeFromPause();
      }),
      (q("pausesave").onclick = () => this.onSaveGame()),
      (q("disconnectbtn").onclick = () => {
        (this.localMode && sessionStorage.setItem("fc-open-worlds", "1"),
          this.hidePause(),
          this.onDisconnect());
      }),
      (q("settingsmainmenu").onclick = () => {
        (sessionStorage.removeItem("fc-open-worlds"),
          this.hideSettings(),
          this.hidePause(),
          this.onDisconnect());
      }),
      (q("respawnbtn").onclick = () => this.onRespawn()),
      (q("tabclose").onclick = () => this.showTab(!1)),
      (q("tabbackdrop").onclick = () => this.showTab(!1)),
      (q("tabsearch").oninput = (ee) => {
        ((this.tabQuery = ee.target.value), this.renderTabRows());
      }));
    const t = q("sens"),
      i = q("aircraftsens"),
      n = q("fov"),
      o = q("sfxvol"),
      a = q("musicvol"),
      r = q("language"),
      l = q("aimassisttoggle"),
      c = q("aimassiststrength"),
      h = q("hapticstoggle"),
      d = q("mobilelabelstoggle"),
      u = q("mobilechattoggle"),
      f = q("autojumptoggle"),
      p = q("chatsize"),
      m = q("minimapzoom"),
      g = q("grender"),
      y = q("gpixel"),
      b = q("gparticles"),
      S = q("gshadows"),
      M = q("gclouds"),
      E = q("gleaves"),
      A = q("gsmooth"),
      T = q("gaa"),
      x = q("gfog"),
      R = q("gchunkshadows"),
      _ = q("gtextures"),
      C = q("gmodels"),
      P = q("gmilitarythreshold"),
      O = q("gwater"),
      B = q("gcelestial"),
      H = q("genvironment"),
      D = q("gshafts"),
      U = q("gshaders"),
      W = q("brightness"),
      J = q("itemtooltipstoggle");
    ((W.oninput = () => {
      ((Y.brightness = Number(W.value)), Ji(), Ie());
    }),
      (J.onchange = () => {
        ((Y.itemTooltips = J.checked), Ji(), Yr());
      }));
    const j = q("camerabobtoggle"),
      ne = document.querySelector('[data-settings-category="gameplay"]');
    for (const [ee, te, He] of [
      ["vehicleInstruments", "Приборный HUD техники", "Vehicle instruments"],
      [
        "cinematicHud",
        "Скрыть HUD для съёмки · F8",
        "Hide HUD for recording · F8",
      ],
    ]) {
      const K = document.createElement("label");
      K.className = "instrument-option";
      const pe = document.createElement("input");
      ((pe.type = "checkbox"), (pe.id = ee), (pe.checked = Y[ee]));
      const Ae = document.createElement("span");
      ((Ae.dataset.labelRu = te),
        (Ae.dataset.labelEn = He),
        (Ae.textContent = I(He, te)),
        (pe.onchange = () => {
          ((Y[ee] = pe.checked),
            Ji(),
            document.body.classList.toggle("cinematic-hud", Y.cinematicHud));
        }),
        K.append(pe, Ae),
        ne?.append(K));
    }
    const ge = document.querySelector('[data-settings-category="graphics"]'),
      be = ge?.querySelector('label[for="brightness"]');
    for (const [ee, te, He, K] of [
      [
        "windSway",
        "Ветер: качание деревьев и травы",
        "Wind: swaying trees and grass",
        "graphics",
      ],
      ["fallingLeaves", "Падающие листья", "Falling leaves", "graphics"],
      [
        "adaptiveResolution",
        "Динамическое разрешение — держит частоту кадров",
        "Dynamic resolution — keeps the frame rate up",
        "graphics",
      ],
      [
        "screamers",
        "Скримеры и призраки на кладбищах",
        "Screamers and graveyard ghosts",
        "gameplay",
      ],
      [
        "uiSounds",
        "Звуки интерфейса: кнопки, инвентарь, кейсы",
        "Interface sounds: buttons, inventory, cases",
        "audio",
      ],
    ]) {
      const pe = document.createElement("label");
      pe.className = "instrument-option";
      const Ae = document.createElement("input");
      ((Ae.type = "checkbox"), (Ae.id = `opt-${ee}`), (Ae.checked = Y[ee]));
      const Le = document.createElement("span");
      ((Le.dataset.labelRu = te),
        (Le.dataset.labelEn = He),
        (Le.textContent = I(He, te)),
        (Ae.onchange = () => {
          ((Y[ee] = Ae.checked), Ji(), K !== "audio" && this.onQualityChange());
        }),
        pe.append(Ae, Le),
        K === "graphics" && ge
          ? ge.insertBefore(pe, be ?? null)
          : K === "audio"
            ? document
                .querySelector('[data-settings-category="audio"]')
                ?.append(pe)
            : ne?.append(pe));
    }
    const oe = document.createElement("button");
    if (
      ((oe.id = "exit-recording"),
      (oe.textContent = "✕ HUD"),
      (oe.onclick = () => {
        ((Y.cinematicHud = !1),
          Ji(),
          document.body.classList.remove("cinematic-hud"),
          (q("cinematicHud").checked = !1));
      }),
      document.body.append(oe),
      document.body.classList.toggle("cinematic-hud", Y.cinematicHud),
      window.addEventListener("keydown", (ee) => {
        ee.code === "F8" &&
          !ee.repeat &&
          !(ee.target instanceof HTMLInputElement) &&
          !(ee.target instanceof HTMLTextAreaElement) &&
          (ee.preventDefault(),
          (Y.cinematicHud = !Y.cinematicHud),
          Ji(),
          document.body.classList.toggle("cinematic-hud", Y.cinematicHud),
          (q("cinematicHud").checked = Y.cinematicHud));
      }),
      ne)
    ) {
      const ee = f.closest("label"),
        te = j.closest("label");
      (ee && ne.appendChild(ee), te && ne.appendChild(te));
    }
    const he = () => {
      for (const ee of document.querySelectorAll(".instrument-option span"))
        ee.textContent = I(ee.dataset.labelEn, ee.dataset.labelRu);
      (document.querySelectorAll(".settings-tab").forEach((ee) => {
        const te = ee.querySelector(".settings-tab-label");
        te &&
          (te.textContent = I(
            ee.dataset.labelEn ?? "",
            ee.dataset.labelRu ?? "",
          ));
      }),
        document.querySelectorAll(".settings-category-title").forEach((ee) => {
          const te = ee.parentElement?.dataset.settingsCategory,
            He = document.querySelector(`[data-settings-tab="${te}"]`);
          He && (ee.textContent = He.textContent ?? "");
        }));
    };
    (document.querySelectorAll(".settings-tab").forEach((ee) => {
      ee.onclick = () => {
        const te = ee.dataset.settingsTab;
        (document.querySelectorAll(".settings-tab").forEach((He) => {
          (He.classList.toggle("active", He === ee),
            He.setAttribute("aria-selected", He === ee ? "true" : "false"));
        }),
          document
            .querySelectorAll(".settings-category")
            .forEach((He) =>
              He.classList.toggle("active", He.dataset.settingsCategory === te),
            ));
      };
    }),
      he());
    const Ie = () => {
      ((i.value = String(Y.aircraftSensitivity)),
        (q("aircraftsensval").textContent = Y.aircraftSensitivity.toFixed(1)),
        (t.value = String(Y.sensitivity)),
        (n.value = String(Y.fov)),
        (q("sensval").textContent = Y.sensitivity.toFixed(1)),
        (q("fovval").textContent = String(Y.fov)),
        (o.value = String(Math.round(Y.sfxVolume * 100))),
        (a.value = String(Math.round(Y.musicVolume * 100))),
        (r.value = Y.language),
        (l.checked = Y.aimAssist),
        (c.value = String(Math.round(Y.aimAssistStrength * 100))),
        (q("aimassiststrengthval").textContent =
          `${Math.round(Y.aimAssistStrength * 100)}%`),
        (h.checked = Y.haptics),
        (d.checked = Y.mobileLabels),
        (u.checked = Y.mobileChat),
        (f.checked = Y.autoJump),
        (W.value = String(Y.brightness)),
        (q("brightnessval").textContent = `${Math.round(Y.brightness * 100)}%`),
        (J.checked = Y.itemTooltips),
        (j.checked = Y.cameraBob),
        (m.value = String(Y.minimapZoom)),
        (q("minimapzoomval").textContent = `${Y.minimapZoom}×`),
        (p.value = String(Y.chatScale)),
        (q("chatsizeval").textContent = `${Math.round(Y.chatScale * 100)}%`),
        document.documentElement.style.setProperty(
          "--chat-user-scale",
          String(Y.chatScale),
        ),
        (q("sfxvolval").textContent = `${Math.round(Y.sfxVolume * 100)}%`),
        (q("musicvolval").textContent = `${Math.round(Y.musicVolume * 100)}%`),
        document.querySelectorAll(".qbtn").forEach((te) => {
          te.classList.toggle("active", te.dataset.q === Y.quality);
        }));
      const ee = Bn();
      ((g.value = String(ee.renderDist)),
        (q("grenderval").textContent = `${ee.renderDist}×16`),
        (y.value = String(Math.round(ee.pixelRatio * 100))),
        (q("gpixelval").textContent = `${Math.round(ee.pixelRatio * 100)}%`),
        (b.value = String(Math.round(ee.particles * 100))),
        (q("gparticlesval").textContent = `${Math.round(ee.particles * 100)}%`),
        (S.value = String(ee.shadowSize)),
        (M.checked = ee.clouds),
        (E.checked = ee.fancyLeaves),
        (A.checked = ee.smoothLighting),
        (T.checked = ee.antialias),
        (x.checked = ee.fog),
        (R.checked = ee.chunkShadows),
        (_.value = String(ee.textureSize)),
        (C.value = String(ee.modelDetail)),
        (P.value = String(Y.militaryOptimizationThreshold)),
        (q("gmilitarythresholdval").textContent = String(
          Y.militaryOptimizationThreshold,
        )),
        (O.value = String(ee.waterQuality)),
        (B.value = String(ee.celestialDetail)),
        (H.value = String(ee.environmentDetail)),
        (D.value = String(Math.round(ee.sunShafts * 100))),
        (q("gshaftsval").textContent =
          ee.sunShafts > 0
            ? `${Math.round(ee.sunShafts * 100)}%`
            : z("offLabel")),
        (U.value = String(Y.shaders)));
    };
    (Ie(),
      (i.oninput = () => {
        ((Y.aircraftSensitivity = Number(i.value)), Ji(), Ie());
      }),
      (t.oninput = () => {
        ((Y.sensitivity = Number(t.value)), Ji(), Ie());
      }),
      (n.oninput = () => {
        ((Y.fov = Number(n.value)), Ji(), Ie(), this.onQualityChange());
      }),
      (o.oninput = () => {
        ((Y.sfxVolume = Number(o.value) / 100),
          Ji(),
          Ie(),
          this.onSfxVolumeChange(Y.sfxVolume));
      }),
      (a.oninput = () => {
        ((Y.musicVolume = Number(a.value) / 100),
          Ji(),
          Ie(),
          this.onMusicVolumeChange(Y.musicVolume));
      }));
    for (const ee of k1) {
      const te = new Option(ee.native, ee.code);
      ((te.lang = ee.code), r.add(te));
    }
    ((r.onchange = () => {
      T5(r.value) && TA(r.value, !0);
    }),
      VX(q("menu-language")),
      da(() => {
        ((r.value = Y.language),
          this.onLanguageChange(),
          q("worlds").classList.contains("hidden") || this.renderWorldsList(),
          he(),
          this.buildBindList(),
          this.refreshPauseBinds(),
          document.querySelectorAll(".armor-label").forEach((ee) => {
            const te = ee.parentElement?.dataset.armor;
            te && (ee.textContent = n_(te));
          }),
          this.invOpen &&
            (this.renderRankProgress(),
            this.renderSoldierPreview(),
            this.renderInventory(),
            this.renderHotbar()),
          this.shopOpen && this.buildShop(),
          this.chestOpen && this.renderChest(),
          this.furnaceOpen && this.renderFurnace());
      }),
      (l.onchange = () => {
        ((Y.aimAssist = l.checked), Ji());
      }),
      (c.oninput = () => {
        ((Y.aimAssistStrength = Number(c.value) / 100), Ji(), Ie());
      }),
      (h.onchange = () => {
        ((Y.haptics = h.checked), Ji());
      }),
      (u.onchange = () => {
        ((Y.mobileChat = u.checked),
          Ji(),
          document.body.classList.toggle("m-chat-off", !Y.mobileChat));
      }),
      (d.onchange = () => {
        ((Y.mobileLabels = d.checked),
          Ji(),
          document.body.classList.toggle("m-labels", Y.mobileLabels),
          Rg(this.mobileVisible, !0));
      }),
      (f.onchange = () => {
        ((Y.autoJump = f.checked), Ji());
      }),
      (m.oninput = () => {
        ((Y.minimapZoom = Number(m.value)), Ji(), Ie());
      }),
      (p.oninput = () => {
        ((Y.chatScale = Number(p.value)), Ji(), Ie());
      }));
    const ve = (ee) => {
      (jx(), ee(), (Y.qualityAuto = !1), Ji(), Ie(), this.onQualityChange());
    };
    ((this.syncSettingsPanel = Ie),
      (g.oninput = () =>
        ve(() => {
          Y.graphics.renderDist = Number(g.value);
        })),
      (y.oninput = () =>
        ve(() => {
          Y.graphics.pixelRatio = Number(y.value) / 100;
        })),
      (b.oninput = () =>
        ve(() => {
          Y.graphics.particles = Number(b.value) / 100;
        })),
      (S.onchange = () =>
        ve(() => {
          Y.graphics.shadowSize = Number(S.value);
        })),
      (M.onchange = () =>
        ve(() => {
          Y.graphics.clouds = M.checked;
        })),
      (E.onchange = () =>
        ve(() => {
          Y.graphics.fancyLeaves = E.checked;
        })),
      (A.onchange = () =>
        ve(() => {
          Y.graphics.smoothLighting = A.checked;
        })),
      (T.onchange = () =>
        ve(() => {
          Y.graphics.antialias = T.checked;
        })),
      (x.onchange = () =>
        ve(() => {
          Y.graphics.fog = x.checked;
        })),
      (R.onchange = () =>
        ve(() => {
          Y.graphics.chunkShadows = R.checked;
        })),
      (_.onchange = () =>
        ve(() => {
          Y.graphics.textureSize = yP(_.value);
        })),
      (C.onchange = () =>
        ve(() => {
          Y.graphics.modelDetail = Number(C.value);
        })),
      (P.oninput = () => {
        ((Y.militaryOptimizationThreshold = Number(P.value)), Ji(), Ie());
      }),
      (O.onchange = () =>
        ve(() => {
          Y.graphics.waterQuality = Number(O.value);
        })),
      (B.onchange = () =>
        ve(() => {
          Y.graphics.celestialDetail = Number(B.value);
        })),
      (H.onchange = () =>
        ve(() => {
          Y.graphics.environmentDetail = Number(H.value);
        })),
      (D.oninput = () =>
        ve(() => {
          Y.graphics.sunShafts = Number(D.value) / 100;
        })),
      (U.onchange = () => {
        ((Y.shaders = bP(U.value)),
          (Y.qualityAuto = !1),
          Ji(),
          Ie(),
          this.onQualityChange());
      }),
      (j.onchange = () => {
        ((Y.cameraBob = j.checked), Ji());
      }),
      this.buildDebugToggles());
    const it = () => {
      ((Y.mobileLayoutEdit = !1),
        document.body.classList.remove("layout-edit"),
        Ji());
    };
    ((q("layouteditbtn").onclick = () => {
      ((Y.mobileLayoutEdit = !0),
        document.body.classList.add("layout-edit"),
        this.hideSettings());
    }),
      (q("layoutsave").onclick = it),
      (q("layoutreset").onclick = () => {
        r3() === "portrait"
          ? (Y.mobileLayoutPortrait = {})
          : (Y.mobileLayout = {});
        for (const ee of document.querySelectorAll(
          "[data-mobile-action], #mobile-stick-zone",
        ))
          for (const te of [
            "left",
            "top",
            "right",
            "bottom",
            "transform",
            "--btn-scale",
          ])
            ee.style.removeProperty(te);
        (Ji(), Rg(this.mobileVisible, !0));
      }),
      (Y.mobileLayoutEdit = !1),
      document.body.classList.remove("layout-edit"),
      document.querySelectorAll(".qbtn").forEach((ee) => {
        ee.onclick = () => {
          const te = ee.dataset.q;
          (te === "custom" ? jx() : ((Y.quality = te), (Y.shaders = SA[te])),
            (Y.qualityAuto = !1),
            Ji(),
            Ie(),
            this.onQualityChange());
        };
      }));
    const st = q("fullscreentoggle"),
      ot = () => {
        st.textContent = Y.autoFullscreen ? z("onLabel") : z("offLabel");
      };
    (ot(),
      (st.onclick = () => {
        ((Y.autoFullscreen = !Y.autoFullscreen),
          Ji(),
          ot(),
          Y.autoFullscreen
            ? document.documentElement.requestFullscreen?.().catch(() => {})
            : document.fullscreenElement && document.exitFullscreen?.());
      }),
      this.buildBindList(),
      (q("bindreset").onclick = () => {
        (W$(),
          (this.listeningBind = null),
          this.buildBindList(),
          this.refreshPauseBinds());
      }),
      window.addEventListener(
        "keydown",
        (ee) => {
          if (this.listeningBind) {
            if (
              (ee.preventDefault(), ee.stopPropagation(), ee.code === "Escape")
            ) {
              ((this.listeningBind = null), this.buildBindList());
              return;
            }
            ee.code === "Tab" ||
              ee.code === "F11" ||
              ee.code === "F12" ||
              ($$(this.listeningBind, ee.code),
              (this.listeningBind = null),
              this.buildBindList(),
              this.refreshPauseBinds());
          }
        },
        !0,
      ),
      this.refreshPauseBinds());
    const at = q("hotbar");
    for (let ee = 0; ee < 9; ee++) {
      const te = ir(String(ee + 1));
      ((te.el.onclick = () => {
        !this.inventory ||
          !document.body.classList.contains("mobile") ||
          ((this.inventory.sel = ee),
          this.renderHotbar(),
          this.onHotbarChange());
      }),
        at.appendChild(te.el),
        this.hotbarSlots.push(te));
    }
    const Re = q("invgrid");
    for (let ee = 0; ee < M0; ee++) {
      const te = ir();
      (Re.appendChild(te.el),
        (te.el.onclick = (He) =>
          this.slotClick("s", ee, He.shiftKey, He.altKey, He.metaKey)),
        this.wireTransferSlot(te.el, "s", ee),
        (te.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "s", idx: ee };
        }),
        (te.el.oncontextmenu = (He) => {
          (He.preventDefault(),
            !He.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", ee)
              : this.slotClick("s", ee, He.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(te.el, "s", ee, () =>
          this.inventory && !this.inventory.creative
            ? (this.inventory.storage[ee]?.id ?? 0)
            : 0,
        ),
        this.invGridSlots.push(te));
    }
    const V = q("invhotbar");
    for (let ee = 0; ee < 9; ee++) {
      const te = ir(String(ee + 1));
      (V.appendChild(te.el),
        (te.el.onclick = (He) =>
          this.slotClick("h", ee, He.shiftKey, He.altKey, He.metaKey)),
        this.wireTransferSlot(te.el, "h", ee),
        (te.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "h", idx: ee };
        }),
        (te.el.oncontextmenu = (He) => {
          (He.preventDefault(),
            !He.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", ee)
              : this.slotClick("h", ee, He.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(
          te.el,
          "h",
          ee,
          () => this.inventory?.hotbar[ee]?.id ?? 0,
        ),
        this.invHotbarSlots.push(te));
    }
    const ye = q("invarmor");
    if (ye)
      for (let ee = 0; ee < Ph; ee++) {
        const te = ir();
        (te.el.classList.add("armor-slot"), (te.el.dataset.armor = $r[ee]));
        const He = document.createElement("div");
        ((He.className = "armor-label"),
          (He.textContent = n_($r[ee])),
          te.el.appendChild(He),
          ye.appendChild(te.el),
          (te.el.onclick = (K) => {
            if (
              ee === 0 &&
              K.altKey &&
              Ia(this.inventory?.armor[ee]?.id ?? 0)?.slot === "helmet"
            ) {
              this.openAttachModal("a", ee);
              return;
            }
            this.slotClick("a", ee, K.shiftKey, K.altKey, K.metaKey);
          }),
          this.wireTransferSlot(te.el, "a", ee),
          (te.el.onmouseenter = () => {
            this.hoveredInventorySlot = { area: "a", idx: ee };
          }),
          (te.el.oncontextmenu = (K) => {
            (K.preventDefault(),
              !K.altKey || document.body.classList.contains("mobile")
                ? this.sellSlot("a", ee)
                : this.slotClick("a", ee, K.shiftKey, !0));
          }),
          ee === 0 &&
            this.wireAttachmentLongPress(
              te.el,
              "a",
              ee,
              () => this.inventory?.armor[ee]?.id ?? 0,
            ),
          this.armorSlots.push(te));
      }
    (this.buildShop(),
      (q("shopsort").onchange = () => {
        (this.buildShop(), (q("shopgrid").scrollTop = 0));
      }));
    const Ce = q("shopsearch");
    ((Ce.oninput = () => {
      ((q("shopgrid").scrollTop = 0), this.buildShop());
    }),
      (q("shopsearchclear").onclick = () => {
        ((Ce.value = ""), this.buildShop(), Ce.focus());
      }),
      q("inventory").addEventListener("mousedown", (ee) => {
        ee.target === q("inventory") &&
          !document.body.classList.contains("mobile") &&
          this.dropPicked();
      }),
      (q("invsellzone").onclick = () => {
        this.sellPicked();
      }),
      document.addEventListener("keydown", (ee) => {
        if (
          !(this.invOpen || this.chestOpen || this.furnaceOpen) ||
          this.qtyModalOpen ||
          this.attachModalOpen ||
          ee.target?.matches("input,textarea,select") ||
          this.containerPending
        )
          return;
        const te = this.transferHovered;
        if (te) {
          if (/^Digit[1-9]$/.test(ee.code)) {
            (ee.preventDefault(), (this.transferCursor = null));
            const He = this.transferList(te.area)[te.idx],
              K = Number(ee.code.slice(-1)) - 1;
            (He?.id
              ? this.transferMove(te.area, te.idx, "h", K, He.count)
              : this.inventory.hotbar[K]?.id &&
                this.transferMove(
                  "h",
                  K,
                  te.area,
                  te.idx,
                  this.inventory.hotbar[K].count,
                ),
              this.repaintTransfers());
          } else if (ee.code === "KeyQ" && te.area !== "c" && te.area !== "f") {
            ee.preventDefault();
            const He = this.transferList(te.area)[te.idx];
            if (!He?.id) return;
            ((this.transferCursor = {
              ...te,
              id: He.id,
              count: ee.ctrlKey || ee.metaKey ? He.count : 1,
            }),
              this.dropPicked());
          }
        }
      }),
      document.addEventListener("mousemove", (ee) => {
        const te = this.dragPick;
        if (
          !te ||
          te.live ||
          Math.hypot(ee.clientX - te.x, ee.clientY - te.y) < 6 ||
          this.containerPending ||
          this.longPressFired
        )
          return;
        const He = this.transferList(te.area)[te.idx];
        if (!He?.id || this.transferCursor) {
          this.dragPick = null;
          return;
        }
        ((te.live = !0),
          (this.transferCursor = {
            area: te.area,
            idx: te.idx,
            id: He.id,
            count: He.count,
          }),
          qs("pick"),
          this.repaintTransfers());
      }),
      document.addEventListener("mouseup", () => {
        const ee = this.dragPick;
        if (((this.dragPick = null), ee?.live && this.transferCursor)) {
          const te = this.transferHovered;
          if (te && te.area === ee.area && te.idx === ee.idx) return;
          (te ? this.transferClick(te.area, te.idx) : qs("place"),
            this.transferCursor &&
              ((this.transferCursor = null), this.repaintTransfers()));
          const He = (K) => {
            (K.stopPropagation(), K.preventDefault());
          };
          (window.addEventListener("click", He, { capture: !0, once: !0 }),
            setTimeout(() => window.removeEventListener("click", He, !0), 0));
          return;
        }
      }),
      document.addEventListener("mouseup", () => {
        const ee = this.transferDrag;
        this.transferDrag = null;
        const te = this.transferCursor;
        if (!(!ee || !te || ee.slots.length < 2 || this.containerPending)) {
          {
            const He = this.transferList(te.area)[te.idx],
              K = ee.slots.filter((Ae) => {
                const Le = this.transferList(Ae.area)[Ae.idx];
                return (
                  Le &&
                  Le !== He &&
                  (!Le.id || $h(He, Le)) &&
                  (Ae.area !== "a" ||
                    this.inventory.canEquipInSlot(He.id, Ae.idx))
                );
              }),
              pe = ee.right ? 1 : Math.floor(te.count / Math.max(1, K.length));
            ((this.transferQueue = { slots: K, each: pe }),
              this.drainTransferQueue());
          }
          ((this.suppressTransferClick = !0),
            setTimeout(() => {
              this.suppressTransferClick = !1;
            }, 0));
        }
      }),
      (q("repairarmor").onclick = () => this.repairEquipment(0)),
      (q("repairweapons").onclick = () => this.repairEquipment(1)),
      (q("mapclose").onclick = () => this.closeMap()));
    const ze = q("mapcanvas");
    (ze.addEventListener("mousedown", (ee) => {
      this.mapOpen &&
        ((this.mapDrag = { x: ee.clientX, y: ee.clientY }),
        (this.mapDragged = !1));
    }),
      ze.addEventListener("mousemove", (ee) => {
        if (!this.mapOpen) return;
        if (this.mapDrag) {
          const He = ee.clientX - this.mapDrag.x,
            K = ee.clientY - this.mapDrag.y;
          Math.abs(He) + Math.abs(K) > 3 && (this.mapDragged = !0);
          const pe = ze.getBoundingClientRect(),
            Ae = (Wo.MAP_CELLS * this.mapScale) / pe.width;
          ((this.mapCenter.x -= He * Ae),
            (this.mapCenter.z -= K * Ae),
            (this.mapDrag.x = ee.clientX),
            (this.mapDrag.y = ee.clientY),
            this.renderMap());
        }
        const te = this.mapToWorld(ze, ee.clientX, ee.clientY);
        q("mapinfo").textContent =
          this.mapMode !== "world"
            ? z("mapTargetHint", { x: Math.round(te.x), z: Math.round(te.z) })
            : z("mapCoordsHint", { x: Math.round(te.x), z: Math.round(te.z) });
      }),
      window.addEventListener("mouseup", () => {
        this.mapDrag = null;
      }),
      (q("mapclearmark").onclick = () => {
        (this.sfx?.uiTick(),
          this.clearWaypoint(),
          (q("mapinfo").textContent = z("mapMarkerCleared")));
      }),
      ze.addEventListener("click", (ee) => {
        if (!this.mapOpen || this.mapDragged) return;
        if (this.mapMode === "world") {
          const K = this.mapToWorld(ze, ee.clientX, ee.clientY);
          (this.setWaypoint(K.x, K.z),
            this.sfx?.uiTick(!0),
            (q("mapinfo").textContent = z("mapMarkerSet", {
              x: Math.round(K.x),
              z: Math.round(K.z),
            })));
          return;
        }
        const te = this.mapToWorld(ze, ee.clientX, ee.clientY),
          He =
            this.mapMode === "tank"
              ? yy
              : this.mapMode === "carrier"
                ? a1
                : this.mapMode === "nuclear"
                  ? Yh
                  : this.mapMode === "mortar"
                    ? ef
                    : Vr;
        if (
          Math.hypot(te.x - this.himarsPos.x, te.z - this.himarsPos.z) > He ||
          (this.worldBorder &&
            this.worldBorder.radius > 0 &&
            !HT(this.worldBorder, te.x, te.z))
        ) {
          q("mapinfo").textContent = z("mapTargetOutOfRange", { range: He });
          return;
        }
        (this.mapLaunch(te.x, te.z), this.closeMap());
      }));
    const tt = (ee) => {
      const te =
          this.mapMode === "carrier"
            ? 128
            : this.mapMode === "nuclear"
              ? 512
              : this.mapMode === "tank" ||
                  this.mapMode === "himars" ||
                  this.mapMode === "mortar"
                ? 16
                : 64,
        He = Math.max(
          te,
          ((this.worldBorder?.radius ?? 0) * 2.2) / Wo.MAP_CELLS,
        );
      return Math.max(0.35, Math.min(He, ee));
    };
    ze.addEventListener(
      "wheel",
      (ee) => {
        if (!this.mapOpen) return;
        ee.preventDefault();
        const te = this.mapToWorld(ze, ee.clientX, ee.clientY);
        this.mapScale = tt(this.mapScale * (ee.deltaY > 0 ? 1.18 : 0.85));
        const He = this.mapToWorld(ze, ee.clientX, ee.clientY);
        ((this.mapCenter.x += te.x - He.x),
          (this.mapCenter.z += te.z - He.z),
          this.renderMap());
      },
      { passive: !1 },
    );
    const ht = new Map();
    let ut = 0;
    (ze.addEventListener("pointerdown", (ee) => {
      if (
        !(!this.mapOpen || ee.pointerType === "mouse") &&
        (ze.setPointerCapture(ee.pointerId),
        ht.set(ee.pointerId, { x: ee.clientX, y: ee.clientY }),
        ht.size === 2)
      ) {
        const [te, He] = [...ht.values()];
        ((ut = Math.hypot(te.x - He.x, te.y - He.y)), (this.mapDragged = !0));
      }
    }),
      ze.addEventListener("pointermove", (ee) => {
        if (!this.mapOpen || ee.pointerType === "mouse") return;
        const te = ht.get(ee.pointerId);
        if (te) {
          if (ht.size === 1) {
            const He = ee.clientX - te.x,
              K = ee.clientY - te.y;
            Math.abs(He) + Math.abs(K) > 3 && (this.mapDragged = !0);
            const pe = ze.getBoundingClientRect(),
              Ae = (Wo.MAP_CELLS * this.mapScale) / pe.width;
            ((this.mapCenter.x -= He * Ae),
              (this.mapCenter.z -= K * Ae),
              (te.x = ee.clientX),
              (te.y = ee.clientY),
              this.renderMap());
          } else if (ht.size === 2) {
            ((te.x = ee.clientX), (te.y = ee.clientY));
            const [He, K] = [...ht.values()],
              pe = Math.hypot(He.x - K.x, He.y - K.y);
            (ut > 0 &&
              pe > 0 &&
              ((this.mapScale = tt(this.mapScale * (ut / pe))),
              this.renderMap()),
              (ut = pe));
          }
        }
      }));
    const F = (ee) => {
      ee.pointerType !== "mouse" &&
        (ht.delete(ee.pointerId),
        ht.size < 2 && (ut = 0),
        ht.size === 0 &&
          setTimeout(() => {
            this.mapDragged = !1;
          }, 80));
    };
    (ze.addEventListener("pointerup", F),
      ze.addEventListener("pointercancel", F));
    const N = [];
    for (const ee of [
      q("chatbox"),
      q("mobilechatpopup").querySelector(".panel"),
    ]) {
      const te = document.createElement("button");
      ((te.type = "button"),
        (te.className = "chat-channel"),
        (te.onclick = () => Ab()),
        ee.prepend(te),
        N.push(te));
    }
    const fe = () => {
      for (const ee of N)
        ((ee.hidden = !Aq()),
          (ee.dataset.channel = ha),
          (ee.textContent =
            ha === "squad"
              ? I("Squad chat", "Чат отряда")
              : ha === "team"
                ? I("Team chat", "Командный чат")
                : I("Global chat", "Общий чат")),
          (ee.title = I(
            "Switch channel · Tab with empty input",
            "Сменить канал · Tab в пустом поле",
          )),
          ee.setAttribute("aria-label", ee.textContent + ". " + ee.title));
    };
    (window.addEventListener("chat-channel-changed", fe),
      window.addEventListener("squad-state-changed", fe),
      da(fe),
      fe(),
      window.addEventListener("access-changed", () => {
        (this.shopOpen && this.buildShop(),
          this.invOpen && this.renderInventory());
      }));
    const De = q("chatinput"),
      Xe = q("chatbox");
    (new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--chat-compose-height",
        `${Xe.getBoundingClientRect().height}px`,
      ),
    ).observe(Xe),
      De.addEventListener("pointerdown", (ee) => {
        if (!document.body.classList.contains("mobile") || !Pm()) return;
        ee.preventDefault();
        const te = window.prompt(z("enterMessage"), De.value);
        te !== null &&
          ((De.value = te),
          this.refreshChatSuggestion(),
          this.submitChat(te) && ((De.value = ""), this.closeChat()));
      }),
      De.addEventListener("input", () => this.refreshChatSuggestion()),
      (q("chataccept").onclick = () => {
        (this.acceptChatSuggestion(), De.focus());
      }));
    const et = q("tprequest");
    for (const ee of [
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click",
    ])
      et.addEventListener(ee, (te) => te.stopPropagation());
    ((q("tpraccept").onclick = () => {
      (this.hideTeleportRequest(), this.onTeleportAnswer(!0));
    }),
      (q("tprdecline").onclick = () => {
        (this.hideTeleportRequest(), this.onTeleportAnswer(!1));
      }),
      De.addEventListener("keydown", (ee) => {
        if ((ee.stopPropagation(), ee.key === "Tab")) {
          (ee.preventDefault(),
            De.value.length
              ? this.acceptChatSuggestion(ee.shiftKey ? -1 : 1)
              : Ab());
          return;
        }
        if (ee.key === "Enter") {
          if (ee.isComposing) return;
          (ee.preventDefault(),
            this.submitChat(De.value) && ((De.value = ""), this.closeChat()));
        } else if (ee.key === "Escape") ((De.value = ""), this.closeChat());
        else if (ee.key === "ArrowUp")
          (ee.preventDefault(),
            this.chatHistIdx > 0 &&
              (this.chatHistIdx--,
              (De.value = this.chatHistory[this.chatHistIdx] ?? ""),
              De.setSelectionRange(De.value.length, De.value.length),
              this.refreshChatSuggestion()));
        else if (ee.key === "ArrowDown")
          (ee.preventDefault(),
            this.chatHistIdx < this.chatHistory.length &&
              (this.chatHistIdx++,
              (De.value = this.chatHistory[this.chatHistIdx] ?? ""),
              this.refreshChatSuggestion()));
        else if (ee.key === "PageUp") {
          ee.preventDefault();
          const te = q("chatlog");
          ((te.scrollTop = Math.max(0, te.scrollTop - te.clientHeight * 0.8)),
            (this.chatStickBottom = !1));
        } else if (ee.key === "PageDown") {
          ee.preventDefault();
          const te = q("chatlog");
          ((te.scrollTop = Math.min(
            te.scrollHeight,
            te.scrollTop + te.clientHeight * 0.8,
          )),
            (this.chatStickBottom =
              te.scrollHeight - te.scrollTop - te.clientHeight < 48));
        }
      }));
    const Mt = q("mobilechatinput");
    (this.refreshChatValidation(Mt, "mobilechatfeedback"),
      Mt.addEventListener("input", () =>
        this.refreshChatValidation(Mt, "mobilechatfeedback"),
      ));
    const pt = () => {
      (this.refreshChatValidation(Mt, "mobilechatfeedback"),
        this.submitChat(Mt.value) && ((Mt.value = ""), this.closeChat()));
    };
    ((q("mobilechatcancel").onclick = () => {
      ((Mt.value = ""), this.closeChat());
    }),
      (q("mobilechatsend").onclick = pt),
      Mt.addEventListener("keydown", (ee) => {
        if ((ee.stopPropagation(), ee.key === "Tab" && !Mt.value.length)) {
          (ee.preventDefault(), Ab());
          return;
        }
        ee.key === "Enter" &&
          !ee.shiftKey &&
          !ee.isComposing &&
          (ee.preventDefault(), pt());
      }));
    const At = q("chatlog");
    (At.addEventListener("scroll", () => {
      this.chatStickBottom =
        At.scrollHeight - At.scrollTop - At.clientHeight < 48;
    }),
      At.addEventListener(
        "wheel",
        (ee) => {
          this.chatOpen && ee.stopPropagation();
        },
        { passive: !0 },
      ),
      this.initGhost(),
      this.initQtyModal(),
      this.initAttachModal(),
      this.initWindowDismissals(),
      this.loadWaypoint(),
      this.syncWaypointUi(),
      sessionStorage.getItem("fc-open-worlds") &&
        (sessionStorage.removeItem("fc-open-worlds"), this.openWorlds()));
  }
  async beginPlay(e, t, i) {
    this.localMode = t === "local";
    const n = q("playbtn"),
      o = q("solobtn");
    ((n.disabled = !0),
      (o.disabled = !0),
      (q("menu-error").textContent = z("loadingWorld")));
    try {
      return (
        (await this.onPlay(e, t, i)) !== !1 &&
        q("menu").classList.contains("hidden")
      );
    } catch (a) {
      return (
        this.showMenu(a instanceof Error ? a.message : z("serverCheckFailed")),
        !1
      );
    } finally {
      q("menu").classList.contains("hidden") ||
        ((n.disabled = !1), (o.disabled = !1));
    }
  }
  resolveSeed(e) {
    const t = e.trim();
    if (!t) return (Math.random() * 4294967296) >>> 0;
    if (/^-?\d+$/.test(t)) return Number(t) >>> 0;
    let i = 0;
    for (let n = 0; n < t.length; n++)
      i = (Math.imul(31, i) + t.charCodeAt(n)) | 0;
    return i >>> 0;
  }
  openWorlds() {
    (q("worlds").classList.remove("hidden"),
      this.showWorldCreate(!1),
      this.preparePointerForUi(),
      this.renderWorldsList());
  }
  hideWorlds() {
    q("worlds").classList.add("hidden");
  }
  showWorldCreate(e) {
    (q("worldcreate").classList.toggle("hidden", !e),
      q("worldnew").classList.toggle("hidden", e),
      q("worldslist").classList.toggle("hidden", e),
      e &&
        ((q("worldname").value = ""),
        (q("worldseed").value = ""),
        q("worldname").focus()));
  }
  async renderWorldsList() {
    const e = q("worldslist");
    let t = [];
    try {
      t = await Uie(z("migratedWorldName"));
    } catch (i) {
      console.error("Could not list worlds:", i);
    }
    if (((e.innerHTML = ""), t.length === 0)) {
      const i = document.createElement("div");
      ((i.className = "worlds-empty"), (i.innerHTML = Ks("world")));
      const n = document.createElement("p");
      ((n.textContent = z("noWorldsYet")), i.append(n), e.appendChild(i));
      return;
    }
    for (const i of t) {
      const n = document.createElement("div");
      n.className = "world-row";
      const o = document.createElement("div");
      o.className = "world-info";
      const a = document.createElement("div");
      ((a.className = "world-name"), (a.textContent = i.name));
      const r = document.createElement("div");
      ((r.className = "world-sub"),
        (r.textContent = z("worldSubline", {
          seed: i.seed,
          date: new Date(i.lastPlayedAt).toLocaleDateString(ao()),
        })),
        o.append(a, r));
      const l = document.createElement("button");
      ((l.className = "btn small"),
        (l.textContent = z("playButton")),
        (l.onclick = () => this.playWorld(i)));
      const c = document.createElement("button");
      ((c.className = "btn small danger"),
        (c.innerHTML = Ks("trash")),
        c.setAttribute("aria-label", z("deleteWorldTitle")),
        (c.title = z("deleteWorldTitle")),
        (c.onclick = async () => {
          if (confirm(z("deleteWorldConfirm", { name: i.name }))) {
            try {
              await $ie(i.id);
            } catch (d) {
              console.error("Could not delete world:", d);
            }
            this.renderWorldsList();
          }
        }));
      const h = document.createElement("span");
      ((h.className = "world-glyph"),
        (h.innerHTML = Ks("world")),
        n.append(h, o, l, c),
        e.appendChild(n));
    }
  }
  playWorld(e) {
    (Wie(e.id),
      this.hideWorlds(),
      $4(e.name),
      this.beginPlay(Y.nick || z("defaultNick"), "local", {
        worldId: e.id,
        seed: e.seed,
      }));
  }
  async confirmCreateWorld() {
    const e = q("worldname").value.trim() || z("defaultWorldName"),
      t = this.resolveSeed(q("worldseed").value),
      i = {
        difficulty: q("worlddifficulty").value,
        keepInventory: q("worldkeepinv").checked,
        raidsEnabled: q("worldraids").checked,
        evacuationEnabled: q("worldevac").checked,
        defenseEnabled: q("worlddefense").checked,
        districtEnabled: q("worlddistrict").checked,
        weatherEnabled: q("worldweather").checked,
      };
    let n;
    try {
      n = await Gie(e, t, i);
    } catch (o) {
      console.error("Could not create world:", o);
      return;
    }
    this.playWorld(n);
  }
  initWindowDismissals() {
    const e = (t) => {
      (t === "inventory"
        ? this.closeInventory()
        : t === "shop"
          ? this.closeShop()
          : t === "chest"
            ? this.closeChest()
            : t === "furnace"
              ? this.closeFurnace()
              : t === "himarsmap"
                ? this.closeMap()
                : t === "settings" && this.hideSettings(),
        this.anyOpen() || this.onResume());
    };
    document.querySelectorAll("[data-close-window]").forEach((t) => {
      t.onclick = () => e(t.dataset.closeWindow ?? "");
    });
    for (const t of [
      "inventory",
      "shop",
      "chest",
      "furnace",
      "himarsmap",
      "settings",
    ]) {
      const i = q(t);
      i?.addEventListener("pointerdown", (n) => {
        n.target === i &&
          ((t === "inventory" && (this.picked || this.transferCursor)) ||
            (t === "chest" && (this.chestPicked || this.transferCursor)) ||
            e(t));
      });
    }
  }
  initGhost() {
    const e = ir();
    ((e.el.id = "pickedghost"),
      e.el.classList.add("hidden"),
      document.body.appendChild(e.el),
      (this.ghostSlot = e),
      document.addEventListener("mousemove", (t) => {
        this.ghostSlot &&
          ((this.ghostSlot.el.style.left = `${t.clientX}px`),
          (this.ghostSlot.el.style.top = `${t.clientY}px`));
      }));
  }
  updateGhost(e, t, i) {
    if (this.ghostSlot) {
      if (e <= 0) {
        this.ghostSlot.el.classList.add("hidden");
        return;
      }
      (this.ghostSlot.el.classList.remove("hidden"),
        Vo(this.ghostSlot.canvas.getContext("2d"), e, this.atlas),
        (this.ghostSlot.cnt.textContent = i ?? (t > 1 ? String(t) : "")));
    }
  }
  syncGhostFromPicked() {
    if (this.transferCursor) {
      this.updateGhost(this.transferCursor.id, this.transferCursor.count);
      return;
    }
    const e = this.inventory;
    if (!e || !this.picked) {
      this.updateGhost(0, 0);
      return;
    }
    if (e.creative && this.picked.area === "s") {
      const t = Eu[this.picked.idx] ?? 0;
      this.updateGhost(t, 0, xa(t) > 1 ? "∞" : "");
    } else {
      const i = (
        this.picked.area === "h"
          ? e.hotbar
          : this.picked.area === "a"
            ? e.armor
            : e.storage
      )[this.picked.idx];
      this.updateGhost(i?.id ?? 0, i?.count ?? 0);
    }
  }
  initQtyModal() {
    const e = q("qtyinput"),
      t = (o) => Math.max(0, Math.min(this.qtyMaxVal, Math.floor(o) || 0)),
      i = (o) => {
        ((e.value = String(t(o))), this.updateQtySum());
      };
    ((q("qtyminus").onclick = () => {
      (this.sfx?.uiTick(), i(Number(e.value || 0) - 1));
    }),
      (q("qtyplus").onclick = () => {
        (this.sfx?.uiTick(), i(Number(e.value || 0) + 1));
      }),
      (e.oninput = () => this.updateQtySum()),
      document.addEventListener("keydown", (o) => {
        this.qtyModalOpen &&
          (o.key === "Escape"
            ? (o.preventDefault(), this.closeQtyModal(null))
            : o.key === "Enter" && (o.preventDefault(), this.confirmQtyModal()),
          o.stopImmediatePropagation());
      }));
    const n = q("qtymodal");
    (n.addEventListener("mousedown", (o) => {
      o.target === n && this.closeQtyModal(null);
    }),
      (q("qtycancel").onclick = () => {
        (this.sfx?.uiTick(), this.closeQtyModal(null));
      }),
      (q("qtyconfirm").onclick = () => this.confirmQtyModal()));
  }
  openQtyModal(e) {
    ((this.qtyModalOpen = !0),
      q("qtymodal").classList.toggle("confirm-only", !!e.confirmOnly),
      (this.qtyMaxVal = Math.max(0, Math.floor(e.max))),
      (this.qtyLine = e.line),
      (q("qtytitle").textContent = e.title),
      (q("qtyconfirm").textContent = e.confirmLabel ?? "OK"),
      this.preparePointerForUi());
    const t = q("qtyinput");
    t.value = String(
      Math.max(0, Math.min(this.qtyMaxVal, Math.floor(e.initial))),
    );
    const i = q("qtypresets");
    i.innerHTML = "";
    for (const n of e.presets) {
      const o = document.createElement("button");
      ((o.className = "mini-btn"),
        (o.textContent = n.label),
        (o.onclick = () => {
          (this.sfx?.uiTick(),
            (t.value = String(
              Math.max(0, Math.min(this.qtyMaxVal, Math.floor(n.value))),
            )),
            this.updateQtySum());
        }),
        i.appendChild(o));
    }
    return (
      this.updateQtySum(),
      q("qtymodal").classList.remove("hidden"),
      setTimeout(() => {
        e.confirmOnly ? q("qtycancel").focus() : (t.focus(), t.select());
      }, 0),
      new Promise((n) => {
        this.qtyClose = n;
      })
    );
  }
  updateQtySum() {
    const e = q("qtyinput"),
      t = Math.max(
        0,
        Math.min(this.qtyMaxVal, Math.floor(Number(e.value) || 0)),
      ),
      { text: i, over: n } = this.qtyLine(t),
      o = q("qtysum");
    ((o.textContent = i),
      o.classList.toggle("over", n),
      i !== this.lastQtySum &&
        ((this.lastQtySum = i),
        o.classList.remove("bump"),
        o.offsetWidth,
        o.classList.add("bump")),
      (q("qtyconfirm").disabled = t <= 0 || n));
  }
  closeQtyModal(e) {
    if (!this.qtyModalOpen) return;
    ((this.qtyModalOpen = !1), q("qtymodal").classList.add("hidden"));
    const t = this.qtyClose;
    ((this.qtyClose = null), t?.(e));
  }
  confirmQtyModal() {
    const e = q("qtyinput"),
      t = Math.max(
        0,
        Math.min(this.qtyMaxVal, Math.floor(Number(e.value) || 0)),
      );
    t <= 0 ||
      this.qtyLine(t).over ||
      (this.sfx?.uiTick(!0), this.closeQtyModal(t));
  }
  modalNodes;
  anyOpen(e) {
    return (
      this.chatOpen ||
      this.invOpen ||
      this.pauseOpen ||
      this.deathOpen ||
      this.settingsOpen ||
      this.mapOpen ||
      this.tabOpen ||
      this.shopOpen ||
      this.chestOpen ||
      this.furnaceOpen ||
      this.qtyModalOpen ||
      this.attachModalOpen ||
      (e
        ? Array.from(
            (this.modalNodes ??= document.getElementsByClassName("fc-modal")),
          ).some((t) => t !== e)
        : (this.modalNodes ??= document.getElementsByClassName("fc-modal"))
            .length > 0) ||
      !!document.getElementById("sign-editor")
    );
  }
  preparePointerForUi() {
    (Yr(), this.onUiOpen());
    const e = Math.round(window.innerWidth / 2),
      t = Math.round(window.innerHeight / 2),
      i = () => {
        (this.ghostSlot &&
          ((this.ghostSlot.el.style.left = `${e}px`),
          (this.ghostSlot.el.style.top = `${t}px`)),
          window.dispatchEvent(
            new MouseEvent("mousemove", {
              bubbles: !0,
              cancelable: !0,
              view: window,
              clientX: e,
              clientY: t,
              screenX: window.screenX + e,
              screenY: window.screenY + t,
            }),
          ));
      };
    (i(), requestAnimationFrame(i));
  }
  initAttachModal() {
    document.addEventListener("keydown", (n) => {
      this.attachModalOpen &&
        (n.key === "Escape" && (n.preventDefault(), this.closeAttachModal()),
        n.stopImmediatePropagation());
    });
    const e = q("attachmodal");
    e.addEventListener("mousedown", (n) => {
      n.target === e && this.closeAttachModal();
    });
    const t = document.createElement("canvas");
    ((t.id = "attach3d"), q("attachboard").prepend(t));
    const i = document.createElement("div");
    ((i.id = "attachstats"),
      q("attachboard").after(i),
      (q("attachclose").onclick = () => this.closeAttachModal()));
  }
  wireAttachmentLongPress(e, t, i, n) {
    let o = null,
      a = 0,
      r = 0;
    const l = () => {
      o !== null && (clearTimeout(o), (o = null));
    };
    (e.addEventListener("pointerdown", (c) => {
      l();
      const h = n(),
        d = t === "a" && i === 0 && !!Ia(h);
      (ai(h) <= 0 && !d) ||
        ((a = c.clientX),
        (r = c.clientY),
        (o = setTimeout(() => {
          ((o = null), (this.longPressFired = !0), this.openAttachModal(t, i));
        }, 450)));
    }),
      e.addEventListener("pointermove", (c) => {
        o !== null && Math.hypot(c.clientX - a, c.clientY - r) > 10 && l();
      }),
      e.addEventListener("pointerup", l),
      e.addEventListener("pointerleave", l),
      e.addEventListener("pointercancel", l));
  }
  openAttachModal(e, t) {
    const i = this.inventory;
    if (!i) return;
    const n = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t],
      o = e === "a" && t === 0 && Ia(n?.id ?? 0)?.slot === "helmet";
    !n ||
      (ai(n.id) <= 0 && !o) ||
      ((this.attachModalOpen = !0),
      (this.attachTarget = { area: e, idx: t }),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      q("attachmodal").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  closeAttachModal() {
    this.attachModalOpen &&
      ((this.attachModalOpen = !1),
      (this.attachTarget = null),
      (this.attachPickerCat = null),
      cancelAnimationFrame(this.gunsmithFrame),
      (this.gunsmithKey = ""),
      q("attachmodal").classList.add("hidden"),
      this.anyOpen() || this.onResume());
  }
  currentAttachWeapon() {
    const e = this.inventory,
      t = this.attachTarget;
    return !e || !t
      ? 0
      : ((t.area === "h" ? e.hotbar : t.area === "a" ? e.armor : e.storage)[
          t.idx
        ]?.id ?? 0);
  }
  currentAttachSlot() {
    const e = this.inventory,
      t = this.attachTarget;
    return !e || !t
      ? null
      : ((t.area === "h" ? e.hotbar : t.area === "a" ? e.armor : e.storage)[
          t.idx
        ] ?? null);
  }
  renderAttachModal() {
    const e = this.currentAttachWeapon(),
      t = this.attachTarget?.area === "a" && Ia(e)?.slot === "helmet";
    if (!t && ai(e) <= 0) {
      this.closeAttachModal();
      return;
    }
    q("attachtitle").textContent = t
      ? `${Li(e)} · ${I("helmet module", "модуль шлема")}`
      : fc(e);
    const i = q("attachbg"),
      n = i.getContext("2d");
    (n.clearRect(0, 0, i.width, i.height),
      n.setTransform(4, 0, 0, 4, 0, 0),
      Vo(n, t ? e : ai(e), this.atlas),
      n.setTransform(1, 0, 0, 1, 0, 0),
      q("attachboard").classList.toggle("helmet-mode", t),
      t &&
        (q("attachboard").classList.remove("gunsmith"),
        q("attachstats").replaceChildren(),
        cancelAnimationFrame(this.gunsmithFrame),
        (this.gunsmithKey = "")));
    const o = ai(e);
    for (const a of ad)
      q(`attachslot-${a}`).classList.toggle(
        "hidden",
        t ? a !== "scope" : !cm(o, a),
      );
    if (t) {
      const a = q("attachslot-scope");
      a.innerHTML = "";
      const r = qr(this.currentAttachSlot() ?? void 0);
      if ((a.classList.toggle("filled", r > 0), r > 0)) {
        const c = document.createElement("canvas");
        ((c.width = 40),
          (c.height = 40),
          Vo(c.getContext("2d"), r, this.atlas),
          a.appendChild(c));
      }
      const l = document.createElement("div");
      ((l.className = "attach-cat-label"),
        (l.textContent = I("Helmet optic", "Оптика шлема")),
        a.appendChild(l),
        (a.onclick = () => {
          ((this.attachPickerCat =
            this.attachPickerCat === "helmetModule" ? null : "helmetModule"),
            this.renderAttachPicker());
        }),
        this.renderAttachAmmo(0),
        this.renderAttachPicker());
      return;
    }
    for (const a of ad) {
      const r = q(`attachslot-${a}`);
      r.innerHTML = "";
      const l = Dh(e, a);
      if ((r.classList.toggle("filled", l > 0), l > 0)) {
        const h = document.createElement("canvas");
        ((h.width = 40),
          (h.height = 40),
          Vo(h.getContext("2d"), l, this.atlas),
          r.appendChild(h));
      }
      const c = document.createElement("div");
      ((c.className = "attach-cat-label"),
        (c.textContent = r_(a)),
        r.appendChild(c),
        (r.onclick = () => {
          ((this.attachPickerCat = this.attachPickerCat === a ? null : a),
            this.renderAttachPicker());
        }));
    }
    (this.renderAttachAmmo(e),
      this.renderAttachPicker(),
      this.renderGunsmith(e));
  }
  renderGunsmith(e) {
    wi();
    const t = q("attachboard"),
      i = q("attach3d");
    t.classList.add("gunsmith");
    for (const p of ad) {
      const m = q(`attachslot-${p}`),
        g = Dh(e, p),
        y = document.createElement("div");
      ((y.className = "attach-slot-state"),
        (y.textContent = g > 0 ? (Li(g) ?? "") : I("Empty", "Пусто")),
        m.appendChild(y));
    }
    const n = this.currentAttachSlot()?.cosmetic?.skin ?? "",
      o = `${e}:${n}`;
    if (o !== this.gunsmithKey) {
      this.gunsmithKey = o;
      try {
        this.gunsmith ??= new j5(i);
        const y = i.getBoundingClientRect();
        (this.gunsmith.resize(Math.max(200, y.width), Math.max(160, y.height)),
          this.gunsmith.showWeapon(e, n));
      } catch {}
      cancelAnimationFrame(this.gunsmithFrame);
      let p = performance.now(),
        m = "";
      const g = (y) => {
        if (!this.attachModalOpen) return;
        const b = i.getBoundingClientRect(),
          S = `${Math.round(b.width)}x${Math.round(b.height)}`;
        (S !== m &&
          b.width > 0 &&
          ((m = S), this.gunsmith?.resize(b.width, b.height)),
          this.gunsmith?.tick(Math.min(0.05, (y - p) / 1e3)),
          (p = y),
          (this.gunsmithFrame = requestAnimationFrame(g)));
      };
      this.gunsmithFrame = requestAnimationFrame(g);
    }
    const a = so(e),
      r = ai(e),
      l = q("attachstats");
    l.replaceChildren();
    const c = (p, m, g) => {
        const y = document.createElement("div");
        y.className =
          "attach-stat" + (g === !0 ? " good" : g === !1 ? " bad" : "");
        const b = document.createElement("small");
        b.textContent = p;
        const S = document.createElement("b");
        ((S.textContent = m), y.append(b, S), l.appendChild(y));
      },
      h = this.weaponMagInfo(e, this.currentAttachSlot()?.magazine),
      d = this.weaponMagInfo(r, void 0);
    h &&
      c(
        I("Magazine", "Магазин"),
        d && d.max !== h.max ? `${d.max} → ${h.max}` : String(h.max),
        a.extMag ? !0 : null,
      );
    const u =
      (a.scope > 0 ? pr : 1) *
      (a.laser ? I5 : 1) *
      (a.suppressor ? L5 : 1) *
      (a.grip ? D5 : 1);
    c(
      I("Spread", "Разброс"),
      u < 1 ? `−${Math.round((1 - u) * 100)}%` : I("stock", "базовый"),
      u < 1 ? !0 : null,
    );
    const f = (a.grip ? N5 : 1) * (a.scope === 5 ? P5 : 1);
    (f < 1 && c(I("Recoil", "Отдача"), `−${Math.round((1 - f) * 100)}%`, !0),
      c(
        I("Optic", "Оптика"),
        a.scope === 5
          ? I("Holo", "Коллиматор")
          : a.scope > 0
            ? `×${a.scope}`
            : I("iron sights", "мушка"),
        a.scope > 0 ? !0 : null,
      ),
      c(
        I("Sound", "Звук"),
        a.suppressor ? I("suppressed", "приглушён") : I("loud", "громкий"),
        a.suppressor ? !0 : null,
      ),
      (a.light || a.laser) &&
        c(
          I("Utility", "Утилита"),
          [
            a.laser ? I("laser", "лазер") : "",
            a.light ? I("flashlight", "фонарь") : "",
          ]
            .filter(Boolean)
            .join(" + "),
          !0,
        ));
  }
  renderAttachAmmo(e) {
    const t = q("attachammo"),
      i = this.weaponMagInfo(e, this.currentAttachSlot()?.magazine),
      n = W1(e, this.currentAttachSlot()?.magazine);
    if (!i || !n || this.inventory?.creative) {
      (t.classList.add("hidden"), (t.innerHTML = ""));
      return;
    }
    (t.classList.remove("hidden"), (t.innerHTML = ""));
    const o = document.createElement("span");
    o.innerHTML = z("magLoaded", {
      rounds: `<span class="rounds">${i.loaded}</span>`,
      max: i.max,
    });
    const a = document.createElement("button");
    ((a.className = "btn secondary"),
      (a.textContent = z("unloadMag")),
      (a.disabled = i.loaded <= 0),
      (a.onclick = () => this.unloadMagazine(e)),
      t.append(o, a));
  }
  unloadMagazine(e) {
    const t = this.inventory,
      i = this.currentAttachSlot(),
      n = this.weaponMagInfo(e, i?.magazine),
      o = W1(e, this.currentAttachSlot()?.magazine);
    if (!t || !i || !n || !o) return;
    if (n.loaded <= 0) {
      this.showAttachHint(z("magEmpty"));
      return;
    }
    const a = t.deferChanges(() => {
      const r = t.addItem(o, n.loaded);
      return (r > 0 && ((i.magazine = mf(n.loaded - r, o)), t.save()), r);
    });
    if (a <= 0) {
      this.showAttachHint(z("noInventorySpace"));
      return;
    }
    (this.showAttachHint(z("unloadedRounds", { rounds: a })),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  renderAttachPicker() {
    const e = q("attachpicker"),
      t = this.attachPickerCat,
      i = this.inventory,
      n = this.currentAttachWeapon(),
      o = t === "helmetModule" && this.attachTarget?.area === "a";
    if (!i || !t || (!o && ai(n) <= 0)) {
      (e.classList.add("hidden"), (e.innerHTML = ""));
      return;
    }
    (e.classList.remove("hidden"), (e.innerHTML = ""));
    const a = document.createElement("div");
    if (
      ((a.className = "attach-picker-title"),
      (a.textContent =
        t === "helmetModule" ? I("Helmet optic", "Оптика шлема") : r_(t)),
      e.appendChild(a),
      (t === "helmetModule"
        ? qr(this.currentAttachSlot() ?? void 0)
        : Dh(n, t)) > 0)
    ) {
      const h = document.createElement("button");
      ((h.className = "btn secondary"),
        (h.textContent = z("removeAttachment")),
        (h.onclick = () =>
          t === "helmetModule"
            ? this.removeHelmetModule()
            : this.removeAttachment(t)),
        e.appendChild(h));
      return;
    }
    const l = (t === "helmetModule" ? JX : Z$).filter(
      (h) =>
        (t === "helmetModule" || Sd[h] === t) &&
        (i.creative || i.countOf(h) > 0),
    );
    if (l.length === 0) {
      const h = document.createElement("div");
      ((h.className = "attach-picker-empty"),
        (h.textContent = z("noMatchingItems")),
        e.appendChild(h));
      return;
    }
    const c = document.createElement("div");
    c.className = "attach-picker-list";
    for (const h of l) {
      const d = document.createElement("div");
      d.className = "attach-picker-item";
      const u = document.createElement("canvas");
      ((u.width = 40), (u.height = 40), Vo(u.getContext("2d"), h, this.atlas));
      const f = document.createElement("div");
      ((f.className = "name"), (f.textContent = Li(h) ?? ""));
      const p = document.createElement("div");
      ((p.className = "count"),
        (p.textContent = i.creative ? "∞" : `×${i.countOf(h)}`),
        d.append(u, f, p),
        (d.onclick = () =>
          t === "helmetModule"
            ? this.installHelmetModule(h)
            : this.installAttachment(t, h)),
        c.appendChild(d));
    }
    e.appendChild(c);
  }
  showAttachHint(e) {
    const t = q("attachhint");
    ((t.textContent = e),
      setTimeout(() => {
        t.textContent === e && (t.textContent = "");
      }, 2500));
  }
  pinMagazine(e, t, i) {
    const n = this.inventory,
      o = t4(t),
      a = t4(i);
    if (!n || o === a || !o || !_l(t).length) return !0;
    const r = W1(t, e.magazine),
      l = qv(e.magazine, o),
      c = Math.max(0, l - a);
    if (c > 0 && !n.creative) {
      const h = n.addItem(r, c);
      if (h < c) return (h > 0 && n.consumeItem(r, h), !1);
    }
    return ((e.magazine = mf(Math.min(l, a), r)), !0);
  }
  installAttachment(e, t) {
    const i = this.inventory,
      n = this.attachTarget;
    if (!i || !n || n.area === "a") return;
    const a = (n.area === "h" ? i.hotbar : i.storage)[n.idx],
      r = a?.id ?? 0;
    if (ai(r) <= 0) return;
    const l = Qx(r, t);
    i.deferChanges(() =>
      i.consumeItem(t, 1)
        ? (this.pinMagazine(a, r, l),
          (a.id = l),
          e === "suppressor" && (a.suppressorDurability = Uy),
          i.save(),
          !0)
        : !1,
    ) &&
      (qs("attach"),
      this.onWeaponIdChanged(r, l),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  fitPartOnto(e, t, i) {
    const n = this.inventory;
    if (
      !n ||
      n.creative ||
      (e.area !== "h" && e.area !== "s") ||
      (t !== "h" && t !== "s")
    )
      return !1;
    const o = this.transferList(e.area)[e.idx],
      a = this.transferList(t)[i],
      r = Sd[o?.id ?? 0],
      l = ai(a?.id ?? 0);
    if (!r || l <= 0 || !o?.count) return !1;
    const c = this.slotElement(t, i);
    if (!cm(l, r))
      return (
        qs("deny"),
        this.slotFlash(c, "nofit"),
        this.inventoryToast(
          I(
            `${fc(l)} has no place for ${Li(o.id) ?? "this part"}`,
            `${Li(o.id) ?? "Этот обвес"} не ставится на ${fc(l)}`,
          ),
          "error",
        ),
        !0
      );
    const h = a.id,
      d = Dh(h, r),
      u = o.id;
    if (d === u)
      return (
        qs("deny"),
        this.inventoryToast(I("Already fitted", "Уже установлен"), "info"),
        !0
      );
    const f = Qx(h, u);
    return n.deferChanges(() => {
      const m = { ...o },
        g = { ...a };
      return (
        (o.count -= 1),
        o.count <= 0 &&
          Object.assign(o, {
            id: 0,
            count: 0,
            durability: 0,
            suppressorDurability: 0,
            magazine: void 0,
          }),
        d > 0 && n.addItem(d, 1) < 1
          ? (Object.assign(o, m), !1)
          : this.pinMagazine(a, h, f)
            ? ((a.id = f),
              r === "suppressor" && (a.suppressorDurability = Uy),
              n.save(),
              !0)
            : (d > 0 && n.removeItem(d, 1),
              Object.assign(o, m),
              Object.assign(a, g),
              !1)
      );
    })
      ? ((e.count -= 1),
        (e.count <= 0 || !o.count) && (this.transferCursor = null),
        this.onWeaponIdChanged(h, f),
        qs("attach"),
        this.slotFlash(c, "fitted"),
        this.inventoryToast(
          d > 0
            ? I(
                `${Li(u)} fitted · ${Li(d)} back in the bag`,
                `${Li(u)} установлен · ${Li(d)} в инвентаре`,
              )
            : I(
                `${Li(u)} fitted to ${fc(l)}`,
                `${Li(u)} установлен на ${fc(l)}`,
              ),
          "success",
        ),
        !0)
      : (qs("deny"), this.inventoryToast(z("noInventorySpace"), "error"), !0);
  }
  slotElement(e, t) {
    return this.invOpen
      ? ((e === "h"
          ? this.invHotbarSlots[t]
          : e === "s"
            ? this.invGridSlots[t]
            : e === "a"
              ? this.armorSlots[t]
              : null
        )?.el ?? null)
      : null;
  }
  slotFlash(e, t) {
    e &&
      requestAnimationFrame(() => {
        (e.classList.remove("slot-fitted", "slot-nofit"),
          e.offsetWidth,
          e.classList.add(t === "fitted" ? "slot-fitted" : "slot-nofit"),
          setTimeout(
            () => e.classList.remove("slot-fitted", "slot-nofit"),
            900,
          ));
      });
  }
  inventoryToastTimer = 0;
  inventoryToast(e, t) {
    const i = q("inventory");
    let n = i.querySelector(".inv-toast");
    (n ||
      ((n = document.createElement("div")),
      (n.className = "inv-toast"),
      n.setAttribute("role", "status"),
      i.append(n)),
      (n.textContent = e),
      (n.dataset.kind = t),
      n.classList.remove("show"),
      n.offsetWidth,
      n.classList.add("show"),
      clearTimeout(this.inventoryToastTimer),
      (this.inventoryToastTimer = window.setTimeout(
        () => n.classList.remove("show"),
        2400,
      )));
  }
  removeAttachment(e) {
    const t = this.inventory,
      i = this.attachTarget;
    if (!t || !i || i.area === "a") return;
    const o = (i.area === "h" ? t.hotbar : t.storage)[i.idx],
      a = o?.id ?? 0,
      r = Dh(a, e);
    if (r <= 0) return;
    const l = tV(a, e);
    if (
      !t.deferChanges(() =>
        t.addItem(r, 1) < 1
          ? !1
          : this.pinMagazine(o, a, l)
            ? ((o.id = l),
              e === "suppressor" && (o.suppressorDurability = 0),
              t.save(),
              !0)
            : (t.removeItem(r, 1), !1),
      )
    ) {
      (qs("deny"), this.showAttachHint(z("noInventorySpace")));
      return;
    }
    (qs("detach"),
      this.onWeaponIdChanged(a, l),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  installHelmetModule(e) {
    const t = this.inventory,
      i = this.currentAttachSlot();
    if (!t || !i || this.attachTarget?.area !== "a" || !Wc(e)) return;
    const n = Sr(e),
      o = [...t.hotbar, ...t.storage].find((l) => l.id === e && l.count > 0),
      a = Math.max(0, Math.min(n, o?.suppressorDurability ?? n));
    let r = t.creative;
    (t.deferChanges(() => {
      (!t.creative && !t.consumeItem(e, 1)) ||
        ((i.magazine = e), (i.suppressorDurability = a), (r = !0), t.save());
    }),
      r &&
        (qs("attach"),
        this.onHelmetModuleChanged(e, a),
        (this.attachPickerCat = null),
        this.renderAttachModal(),
        this.renderInventory()));
  }
  removeHelmetModule() {
    const e = this.inventory,
      t = this.currentAttachSlot(),
      i = qr(t ?? void 0);
    if (!e || !t || i <= 0) return;
    const n = Sr(i),
      o = Math.max(0, Math.min(n, t.suppressorDurability ?? n));
    let a = e.creative ? 1 : 0;
    if (
      (e.deferChanges(() => {
        (!e.creative && ((a = e.addItem(i, 1, 0, o)), a < 1)) ||
          ((t.magazine = void 0), (t.suppressorDurability = 0), e.save());
      }),
      a < 1)
    ) {
      this.showAttachHint(z("noInventorySpace"));
      return;
    }
    (qs("detach"),
      this.onHelmetModuleChanged(0, 0),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory());
  }
  static MAP_CELLS = 88;
  static MINIMAP_CELLS = 64;
  openWorldMap(e, t, i) {
    ((this.mapOpen = !0),
      (this.mapMode = "world"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.mapScale = 3.2),
      (this.mapSample = e),
      (this.mapLaunch = () => {}),
      (this.mapMarkers = i),
      (this.mapDrag = null),
      (q("maptitle").textContent = z("mapTitle")),
      (q("mapsubtitle").textContent = z("mapWorldSubtitle")),
      (q("mapclose").textContent = z("mapCloseEsc")),
      q("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openHimarsMap(e, t, i, n = () => [], o = !1, a = !1) {
    ((this.mapOpen = !0),
      (this.mapMode = a ? "tank" : o ? "mortar" : "himars"));
    const r = a ? yy : o ? ef : Vr;
    ((this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (r * 2) / Wo.MAP_CELLS));
    const l = this.worldBorder;
    (l &&
      l.radius > 0 &&
      l.radius * 1.1 < r &&
      ((this.mapCenter = { x: l.centerX, z: l.centerZ }),
      (this.mapScale = (l.radius * 2.2) / Wo.MAP_CELLS)),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = n),
      (this.mapDrag = null),
      (q("maptitle").textContent = a
        ? I("Tank · precision strike", "Танк · точный удар")
        : z(o ? "mapMortarTitle" : "mapHimarsTitle")),
      (q("mapsubtitle").textContent = z("mapRangeHint", { range: r })),
      (q("mapclose").textContent = z("mapCancelEsc")),
      q("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openCarrierMap(e, t, i, n = () => []) {
    ((this.mapOpen = !0),
      (this.mapMode = "carrier"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (a1 * 2) / Wo.MAP_CELLS),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = n),
      (this.mapDrag = null),
      (q("maptitle").textContent = z("mapCarrierTitle")),
      (q("mapsubtitle").textContent = z("mapRangeHint", { range: a1 })),
      (q("mapclose").textContent = z("mapCancelEsc")),
      q("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openNuclearMap(e, t, i, n = () => []) {
    ((this.mapOpen = !0),
      (this.mapMode = "nuclear"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (Yh * 2) / Wo.MAP_CELLS),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = n),
      (this.mapDrag = null),
      (q("maptitle").textContent = z("mapNuclearTitle")),
      (q("mapsubtitle").textContent = z("mapRangeHint", { range: Yh })),
      (q("mapclose").textContent = z("mapCancelEsc")),
      q("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  closeMap() {
    this.mapOpen &&
      ((this.mapOpen = !1),
      this.mapRefreshFrame && cancelAnimationFrame(this.mapRefreshFrame),
      (this.mapRefreshFrame = 0),
      q("himarsmap").classList.add("hidden"),
      this.onMapClosed());
  }
  refreshMap() {
    !this.mapOpen ||
      this.mapRefreshFrame ||
      (this.mapRefreshFrame = requestAnimationFrame(() => {
        ((this.mapRefreshFrame = 0), this.mapOpen && this.renderMap());
      }));
  }
  getWaypoint() {
    return this.waypoint?.planet === this.waypointPlanet ? this.waypoint : null;
  }
  setWaypointPlanet(e) {
    ((this.waypointPlanet = e), this.syncWaypointUi());
  }
  setWaypoint(e, t) {
    ((this.waypoint = {
      x: Math.round(e),
      z: Math.round(t),
      planet: this.waypointPlanet,
    }),
      this.saveWaypoint());
  }
  clearWaypoint() {
    ((this.waypoint = null), this.saveWaypoint());
  }
  saveWaypoint() {
    try {
      this.waypoint
        ? localStorage.setItem(Ow, JSON.stringify(this.waypoint))
        : localStorage.removeItem(Ow);
    } catch {}
    (this.syncWaypointUi(),
      this.onWaypointChange(),
      this.mapOpen && this.renderMap());
  }
  loadWaypoint() {
    try {
      const e = JSON.parse(localStorage.getItem(Ow) ?? "null");
      e &&
        Number.isFinite(e.x) &&
        Number.isFinite(e.z) &&
        (this.waypoint = {
          x: Math.round(e.x),
          z: Math.round(e.z),
          planet: e.planet === 1 ? 1 : 0,
        });
    } catch {}
  }
  syncWaypointUi() {
    const e = document.getElementById("mapclearmark");
    if (!e) return;
    e.classList.toggle("hidden", this.mapMode !== "world");
    const t = this.getWaypoint();
    ((e.disabled = !t),
      (e.textContent = t
        ? z("mapClearMarkerAt", { x: t.x, z: t.z })
        : z("mapClearMarker")));
  }
  mapToWorld(e, t, i) {
    const n = e.getBoundingClientRect(),
      o = Wo.MAP_CELLS,
      a = o / 2,
      r = ((t - n.left) / n.width) * o,
      l = ((i - n.top) / n.height) * o;
    return {
      x: this.mapCenter.x + (r - a) * this.mapScale,
      z: this.mapCenter.z + (l - a) * this.mapScale,
    };
  }
  drawMapMarker(e, t, i, n, o = 5, a = e.canvas.width) {
    if ((n.kind === "player" || n.kind === "squad") && n.heading !== void 0) {
      const r = o * 1.8,
        l = -Math.sin(n.heading),
        c = -Math.cos(n.heading),
        h = Math.cos(n.heading),
        d = -Math.sin(n.heading);
      if (
        (e.beginPath(),
        e.arc(t, i, o * 2.4, 0, Math.PI * 2),
        (e.fillStyle = "rgba(8,20,32,.8)"),
        e.fill(),
        (e.fillStyle = n.color),
        e.beginPath(),
        e.moveTo(t + l * r, i + c * r),
        e.lineTo(
          t - l * r * 0.65 + h * r * 0.55,
          i - c * r * 0.65 + d * r * 0.55,
        ),
        e.lineTo(
          t - l * r * 0.65 - h * r * 0.55,
          i - c * r * 0.65 - d * r * 0.55,
        ),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = "#102031"),
        (e.lineWidth = 1.5),
        e.stroke(),
        n.kind === "squad" &&
          (e.beginPath(),
          e.arc(t, i, o * 2.1, 0, Math.PI * 2),
          (e.strokeStyle = n.color),
          (e.lineWidth = 1.2),
          e.stroke()),
        n.label)
      ) {
        (e.save(),
          (e.font = "600 11px system-ui"),
          (e.textAlign = "center"),
          (e.textBaseline = "top"),
          (e.lineWidth = 3),
          (e.strokeStyle = "#06101fe8"));
        const u = Math.max(50, Math.min(a - 50, t));
        (e.strokeText(n.label, u, i + o * 2.6, 100),
          (e.fillStyle = n.color),
          e.fillText(n.label, u, i + o * 2.6, 100),
          e.restore());
      }
    } else if (n.kind === "home") {
      ((e.fillStyle = n.color),
        e.fillRect(t - o, i - o, o * 2, o * 2),
        (e.lineWidth = 1.5),
        (e.strokeStyle = "rgba(0,0,0,0.75)"),
        e.strokeRect(t - o, i - o, o * 2, o * 2));
      return;
    } else if (n.kind === "vehicle" || n.kind === "himars") {
      lE(e, t, i, n, o);
      return;
    } else if (n.kind === "waypoint") {
      if (n.label) {
        (e.save(),
          (e.font = "600 10px system-ui"),
          (e.textAlign = "center"),
          (e.textBaseline = "bottom"),
          (e.lineWidth = 3),
          (e.strokeStyle = "#06101fe8"));
        const l = Math.max(50, Math.min(a - 50, t));
        (e.strokeText(n.label, l, i - o * 3.2, 96),
          (e.fillStyle = n.color),
          e.fillText(n.label, l, i - o * 3.2, 96),
          e.restore());
      }
      const r = o * 1.3;
      ((e.fillStyle = n.color),
        (e.strokeStyle = "rgba(0,0,0,0.85)"),
        (e.lineWidth = 1.5),
        e.beginPath(),
        e.moveTo(t, i),
        e.lineTo(t - r * 0.85, i - r * 1.35),
        e.lineTo(t + r * 0.85, i - r * 1.35),
        e.closePath(),
        e.fill(),
        e.stroke(),
        e.beginPath(),
        e.arc(t, i - r * 1.7, r * 0.85, 0, Math.PI * 2),
        e.fill(),
        e.stroke());
      return;
    } else if (n.kind === "npc") {
      const r = o * 1.35;
      ((e.fillStyle = n.color),
        (e.strokeStyle = "rgba(0,0,0,0.85)"),
        (e.lineWidth = 1.5),
        e.beginPath(),
        e.moveTo(t, i - r),
        e.lineTo(t + r, i),
        e.lineTo(t, i + r),
        e.lineTo(t - r, i),
        e.closePath(),
        e.fill(),
        e.stroke());
      return;
    } else if (n.kind === "strike") {
      const r = o * 1.35;
      ((e.fillStyle = "#ffd33d"),
        (e.strokeStyle = "#8b1616"),
        (e.lineWidth = 2),
        e.beginPath(),
        e.arc(t, i, r, 0, Math.PI * 2),
        e.fill(),
        e.stroke(),
        (e.fillStyle = "#181313"),
        e.beginPath(),
        e.arc(t, i, r * 0.28, 0, Math.PI * 2),
        e.fill());
      for (let l = 0; l < 3; l++)
        (e.save(),
          e.translate(t, i),
          e.rotate((l * Math.PI * 2) / 3),
          e.fillRect(-r * 0.12, -r * 0.9, r * 0.24, r * 0.58),
          e.restore());
      return;
    } else
      ((e.fillStyle = n.color), e.beginPath(), e.arc(t, i, o, 0, 7), e.fill());
    ((e.lineWidth = 1.5), (e.strokeStyle = "rgba(0,0,0,0.75)"), e.stroke());
  }
  drawRaidZone(e, t, i, n, o) {
    const a = this.raidZone;
    if (!a) return;
    const r = t / 2 + (a.x - n.x) * o,
      l = i / 2 + (a.z - n.z) * o,
      c = a.radius * o;
    (e.save(),
      e.beginPath(),
      e.rect(0, 0, t, i),
      e.clip(),
      e.beginPath(),
      e.arc(r, l, c, 0, Math.PI * 2),
      (e.fillStyle = "rgba(255,0,0,0.16)"),
      e.fill(),
      (e.lineWidth = 2),
      (e.strokeStyle = "rgba(255,40,40,0.85)"),
      e.stroke(),
      e.restore());
  }
  setHeldSites(e) {
    this.heldSites = new Set(e);
  }
  drawWorldObjectZones(e, t, i, n, o) {
    if (this.worldObjects.length !== 0) {
      (e.save(), e.beginPath(), e.rect(0, 0, t, i), e.clip());
      for (const a of this.worldObjects) {
        if (
          this.spawnHub &&
          Math.hypot(a.x - this.spawnHub.x, a.z - this.spawnHub.z) < 4
        )
          continue;
        const r = t / 2 + (a.x - n.x) * o,
          l = i / 2 + (a.z - n.z) * o,
          c = a.radius * o;
        if (r + c < 0 || l + c < 0 || r - c > t || l - c > i) continue;
        const h = this.heldSites.has(a.id);
        (e.beginPath(),
          e.arc(r, l, c, 0, Math.PI * 2),
          (e.fillStyle = h ? "rgba(64,150,255,0.18)" : "rgba(255,145,35,0.18)"),
          e.fill(),
          (e.lineWidth = 2),
          (e.strokeStyle = h
            ? "rgba(96,176,255,0.95)"
            : "rgba(255,157,52,0.9)"),
          e.stroke());
      }
      e.restore();
    }
  }
  drawStrikeZones(e, t, i, n, o, a) {
    (e.save(), e.beginPath(), e.rect(0, 0, t, i), e.clip());
    for (const r of a) {
      if (r.kind !== "strike" || !r.radius) continue;
      const l = t / 2 + (r.x - n.x) * o,
        c = i / 2 + (r.z - n.z) * o,
        h = r.radius * o;
      (e.beginPath(),
        e.arc(l, c, h, 0, Math.PI * 2),
        (e.fillStyle = "rgba(255, 64, 22, 0.12)"),
        e.fill(),
        e.setLineDash([7, 5]),
        (e.lineWidth = 2.5),
        (e.strokeStyle = "rgba(255, 205, 48, 0.95)"),
        e.stroke(),
        e.setLineDash([]));
    }
    e.restore();
  }
  mapRasters = new Map();
  drawMapBase(e, t, i, n, o, a) {
    const r = n;
    ((n *= 2), (a *= r / n));
    let l = this.mapRasters.get(n);
    if (!l) {
      const d = document.createElement("canvas");
      d.width = d.height = n;
      const u = d.getContext("2d");
      ((l = {
        canvas: d,
        ctx: u,
        pixels: u.createImageData(n, n),
        key: "",
        at: 0,
      }),
        this.mapRasters.set(n, l));
    }
    const c = `${o.x}:${o.z}:${a}`,
      h = performance.now();
    if (l.key !== c || h - l.at >= 250) {
      ((l.key = c), (l.at = h));
      const d = l.pixels.data,
        u = n / 2;
      for (let f = 0; f < n; f++) {
        const p = Math.round(o.z + (f - u) * a);
        for (let m = 0; m < n; m++) {
          const g = this.mapSample(Math.round(o.x + (m - u) * a), p, a),
            y = g < 0 ? (((m >> 2) + (f >> 2)) & 1 ? 1054752 : 659736) : g,
            b = (f * n + m) * 4;
          ((d[b] = (y >> 16) & 255),
            (d[b + 1] = (y >> 8) & 255),
            (d[b + 2] = y & 255),
            (d[b + 3] = 255));
        }
      }
      l.ctx.putImageData(l.pixels, 0, 0);
    }
    (e.save(),
      (e.imageSmoothingEnabled = !1),
      e.drawImage(l.canvas, 0, 0, t, i),
      e.restore(),
      _N(
        e,
        t,
        i,
        o,
        t / (n * a),
        i / (n * a),
        this.worldBorder,
        I("WORLD BOUNDARY", "ГРАНИЦА МИРА"),
      ));
  }
  equipmentKey = "";
  renderEquipmentStatus(e, t) {
    const i = q("equipment-status"),
      n = this.inventory;
    if (!i || !n) return;
    const o = _l(e),
      a = JSON.stringify([n.armor, o.map((h) => [h, n.countOf(h)]), t, v0()]);
    if (a === this.equipmentKey) return;
    ((this.equipmentKey = a), i.replaceChildren());
    const r = document.createElement("div");
    r.className = "equipment-armor";
    const l = [w.HELMET_1, w.VEST_1, w.PANTS_1, w.BOOTS_1];
    (n.armor.forEach((h, d) => {
      const u = document.createElement("div");
      u.className = "equipment-row" + (h.id ? "" : " empty");
      const f = document.createElement("canvas");
      ((f.width = f.height = 40),
        Vo(f.getContext("2d"), h.id || l[d], this.atlas));
      const p = document.createElement("span");
      ((p.textContent = h.id
        ? `${Math.round(tE(h.id, h.durability) * 100)}%`
        : "—"),
        (u.title = h.id ? Li(h.id) : I("Not equipped", "Не надето")),
        u.classList.toggle("worn", !!h.id && tE(h.id, h.durability) < 0.25),
        u.append(p, f),
        r.append(u));
    }),
      i.append(r));
    const c = document.createElement("div");
    c.className = "equipment-reserves";
    for (const h of o) {
      const d = document.createElement("div");
      ((d.className = "equipment-row" + (h === t ? " selected" : "")),
        (d.title = Li(h)),
        (d.dataset.ammo = String(h)));
      const u = document.createElement("canvas");
      ((u.width = u.height = 40), Vo(u.getContext("2d"), h, this.atlas));
      const f = document.createElement("span");
      ((f.textContent = String(n.countOf(h))), d.append(u, f), c.append(d));
    }
    i.append(c);
  }
  showAmmoPicker(e, t, i) {
    const n = q("ammo-picker");
    if (
      (n.replaceChildren(),
      n.classList.toggle("hidden", e.length === 0),
      !e.length)
    )
      return;
    const o = document.createElement("strong");
    ((o.textContent = I("Load ammunition", "Зарядить патроны")),
      n.append(o),
      e.forEach((r, l) => {
        const c = document.createElement("button");
        ((c.className = "ammo-option" + (r === t ? " selected" : "")),
          (c.dataset.ammo = String(r)),
          (c.disabled =
            !this.inventory?.creative &&
            (this.inventory?.countOf(r) ?? 0) <= 0));
        const h = document.createElement("canvas");
        ((h.width = h.height = 40), Vo(h.getContext("2d"), r, this.atlas));
        const d = document.createElement("span");
        d.textContent = `${l + 1} · ${Li(r)}`;
        const u = document.createElement("b");
        ((u.textContent = this.inventory?.creative
          ? "∞"
          : String(this.inventory?.countOf(r) ?? 0)),
          c.append(h, d, u),
          c.addEventListener("pointerdown", (f) => {
            (f.preventDefault(), f.stopPropagation(), i(r));
          }),
          n.append(c));
      }));
    const a = document.createElement("small");
    ((a.textContent = I(
      "1 / 2 · Wheel + click · Tap to load",
      "1 / 2 · Колесо + клик · Коснитесь для выбора",
    )),
      n.append(a));
  }
  rotateMinimap(e) {
    const t = q("minimapcanvas");
    t && (t.style.transform = `rotate(${e}rad)`);
  }
  renderMinimap(e, t, i) {
    const n = q("minimapcanvas");
    if (!n) return;
    this.mapSample = e;
    const o = n.getContext("2d"),
      a = Math.ceil(Wo.MINIMAP_CELLS * 1.5),
      r = (2.2 / Y.minimapZoom) * this.minimapScaleMul;
    ((n.dataset.blocksPerCell = String(r)),
      this.drawMapBase(o, n.width, n.height, a, t, r));
    const l = n.width / a;
    (this.drawWorldObjectZones(o, n.width, n.height, t, l / r),
      this.drawRaidZone(o, n.width, n.height, t, l / r),
      this.drawQuestZone(o, n.width, n.height, t, l / r),
      this.drawStrikeZones(o, n.width, n.height, t, l / r, i));
    const c = Wo.MINIMAP_CELLS * 2.2 * 0.5 * this.minimapScaleMul;
    for (const h of i) {
      if (h.kind === "player") continue;
      const d = h.x - t.x,
        u = h.z - t.z,
        f =
          h.friendly || h.kind === "home" || h.kind === "waypoint"
            ? Wo.MINIMAP_CELLS * r * 0.5
            : c;
      if (Math.abs(d) > f || Math.abs(u) > f) continue;
      const p = n.width / 2 + (d / r) * l,
        m = n.height / 2 + (u / r) * l;
      this.drawMapMarker(o, p, m, h, h.kind === "home" ? 4.5 : 4);
    }
  }
  renderMap() {
    const e = q("mapcanvas");
    e.dataset.blocksPerCell = this.mapScale.toFixed(3);
    const t = e.getContext("2d"),
      i = Wo.MAP_CELLS,
      n = e.width / i;
    (this.drawMapBase(t, e.width, e.height, i, this.mapCenter, this.mapScale),
      this.drawWorldObjectZones(
        t,
        e.width,
        e.height,
        this.mapCenter,
        n / this.mapScale,
      ),
      this.drawRaidZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        n / this.mapScale,
      ),
      this.drawQuestZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        n / this.mapScale,
      ),
      this.drawSpawnZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        n / this.mapScale,
      ));
    const o = this.mapMarkers().sort(
      (a, r) => +(a.kind === "player") - +(r.kind === "player"),
    );
    (this.drawStrikeZones(
      t,
      e.width,
      e.height,
      this.mapCenter,
      n / this.mapScale,
      o,
    ),
      this.mapMode === "world" &&
        Ik(
          t,
          e.width,
          e.height,
          this.mapCenter,
          n / this.mapScale,
          this.mapLabels(n / this.mapScale),
        ));
    for (const a of o) {
      const r = e.width / 2 + ((a.x - this.mapCenter.x) / this.mapScale) * n,
        l = e.height / 2 + ((a.z - this.mapCenter.z) / this.mapScale) * n;
      r < -10 ||
        r > e.width + 10 ||
        l < -10 ||
        l > e.height + 10 ||
        this.drawMapMarker(
          t,
          r,
          l,
          a,
          a.kind === "player" ? 6.5 : a.kind === "home" ? 5 : 4.6,
        );
    }
    if (
      this.mapMode === "tank" ||
      this.mapMode === "himars" ||
      this.mapMode === "mortar" ||
      this.mapMode === "carrier" ||
      this.mapMode === "nuclear"
    ) {
      const a =
          e.width / 2 +
          ((this.himarsPos.x - this.mapCenter.x) / this.mapScale) * n,
        r =
          e.height / 2 +
          ((this.himarsPos.z - this.mapCenter.z) / this.mapScale) * n;
      this.drawMapMarker(
        t,
        a,
        r,
        {
          x: this.himarsPos.x,
          z: this.himarsPos.z,
          color:
            this.mapMode === "carrier"
              ? "#ff9255"
              : this.mapMode === "nuclear"
                ? "#ffdf42"
                : "#ffd763",
          kind: "himars",
          vehicleType:
            this.mapMode === "tank"
              ? L.TANK
              : this.mapMode === "mortar"
                ? L.MORTAR
                : void 0,
        },
        5.5,
      );
      const l =
        this.mapMode === "tank"
          ? yy
          : this.mapMode === "carrier"
            ? a1
            : this.mapMode === "nuclear"
              ? Yh
              : this.mapMode === "mortar"
                ? ef
                : Vr;
      (t.beginPath(),
        t.arc(a, r, (l / this.mapScale) * n, 0, Math.PI * 2),
        (t.strokeStyle =
          this.mapMode === "carrier"
            ? "rgba(255,146,85,.9)"
            : this.mapMode === "nuclear"
              ? "rgba(255,220,60,.95)"
              : "rgba(255,215,99,.9)"),
        (t.lineWidth = 2),
        t.stroke());
    }
  }
  showMenu(e = "") {
    (this.loading.hide(!0),
      (this.repairPending = !1),
      (q("invrepairnotice").textContent = ""),
      q("menu").classList.remove("hidden"),
      q("hud").classList.add("hidden"),
      (q("menu-error").textContent = e));
  }
  startGame() {
    (q("menu").classList.add("hidden"),
      q("worlds").classList.add("hidden"),
      q("hud").classList.remove("hidden"));
  }
  setMobileActions(e) {
    if (!document.body.classList.contains("mobile")) return;
    if (Y.mobileLayoutEdit) {
      for (const n of document.querySelectorAll("[data-mobile-action]"))
        n.classList.remove("hidden");
      ((this.mobileVisible = Object.keys(e)), Rg(this.mobileVisible));
      return;
    }
    const t = [],
      i = jte();
    for (const [n, o] of Object.entries(e)) {
      const a = o && !(i && (n === "tab" || n === "chat"));
      (document
        .getElementById(n === "map" ? "minimap" : `mob${n}`)
        ?.classList.toggle("hidden", !a),
        a && t.push(n));
    }
    ((this.mobileVisible = t), Rg(t));
  }
  mobileVisible = [];
  setMobileLightState(e, t) {
    const i = document.getElementById(`mob${e}`);
    if (!i) return;
    const n = String(t),
      o = z(
        e === "flashlight"
          ? t
            ? "flashlightOn"
            : "flashlightOff"
          : t
            ? "headlightsOn"
            : "headlightsOff",
      );
    (i.getAttribute("aria-pressed") !== n &&
      (i.classList.toggle("active", t), i.setAttribute("aria-pressed", n)),
      i.getAttribute("aria-label") !== o && i.setAttribute("aria-label", o));
  }
  initMobileButtons() {
    for (const e of document.querySelectorAll(
      "#mobile-controls [data-mobile-action]",
    )) {
      const t = e.dataset.mobileAction ?? "",
        i = eie[t];
      i && (e.dataset.role = i);
      const n = tie[t];
      n && this.setMobileIcon(e.id, n);
    }
    (document.body.classList.toggle("m-labels", Y.mobileLabels),
      document.body.classList.toggle("m-chat-off", !Y.mobileChat),
      da(() => {
        const e = [...this.mobileIconCache];
        this.mobileIconCache.clear();
        for (const [t, i] of e) this.setMobileIcon(t, i);
      }));
  }
  setMobileIcon(e, t) {
    if (this.mobileIconCache.get(e) === t || !iie(t)) return;
    const i = document.getElementById(e);
    if (i) {
      if (
        (i.querySelector(":scope > .m-ico")?.remove(),
        i.insertAdjacentHTML("afterbegin", sie(t)),
        !i.querySelector(":scope > .tool-mode-label"))
      ) {
        let n = i.querySelector(":scope > .m-cap");
        n ||
          ((n = document.createElement("span")),
          (n.className = "m-cap"),
          n.setAttribute("aria-hidden", "true"),
          i.querySelector(":scope > .m-ico").after(n));
        const o = nie(t);
        ((n.textContent = o),
          !i.dataset.i18nAria &&
            !i.hasAttribute("aria-pressed") &&
            i.setAttribute("aria-label", o));
      }
      this.mobileIconCache.set(e, t);
    }
  }
  setMobileCue(e, t) {
    const i = document.getElementById(e);
    if (!i) return;
    const n =
        t.progress !== void 0 && t.progress >= 0 ? Math.min(1, t.progress) : -1,
      o = `${+!!t.ready}${+!!t.attention}${n < 0 ? "-" : n.toFixed(2)}`;
    this.mobileCueCache.get(e) !== o &&
      (this.mobileCueCache.set(e, o),
      i.classList.toggle("ready", !!t.ready),
      i.classList.toggle("attention", !!t.attention),
      i.classList.toggle("busy", n >= 0),
      n >= 0
        ? i.style.setProperty("--p", n.toFixed(2))
        : i.style.removeProperty("--p"));
  }
  mobileCueCache = new Map();
  loader;
  get loading() {
    return (this.loader ??= new Eee());
  }
  showLoading(e, t, i) {
    e ? this.loading.show(t ?? z("loadingWorld"), i) : this.loading.hide();
  }
  showSettings() {
    ((this.settingsOpen = !0),
      (this.listeningBind = null),
      this.buildBindList(),
      q("settingsmainmenu").classList.toggle(
        "hidden",
        q("hud").classList.contains("hidden"),
      ),
      q("settings").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  hideSettings() {
    ((this.settingsOpen = !1),
      (this.listeningBind = null),
      q("settings").classList.add("hidden"));
  }
  buildBindList() {
    const e = q("bindlist");
    if (e) {
      e.innerHTML = "";
      for (const t of vP) {
        const i = document.createElement("div");
        i.className = "bind-row";
        const n = document.createElement("div");
        ((n.className = "bind-label"), (n.textContent = l_(t)));
        const o = document.createElement("button");
        ((o.type = "button"),
          (o.className =
            "bind-btn" + (this.listeningBind === t ? " listening" : "")),
          (o.textContent = this.listeningBind === t ? "…" : rr(Y.binds[t])),
          (o.onclick = () => {
            ((this.listeningBind = t), this.buildBindList());
          }),
          i.append(n, o),
          e.appendChild(i));
      }
    }
  }
  refreshPauseBinds() {
    const e = q("pausebinds");
    if (!e) return;
    const t = [
      "forward",
      "back",
      "left",
      "right",
      "jump",
      "sprint",
      "crouch",
      "prone",
      "reload",
      "inventory",
      "shop",
      "use",
      "drop",
      "chat",
      "camera",
      "detonate",
      "map",
      "vision",
    ];
    if (jr()) {
      e.textContent = z("pauseTouchControls");
      return;
    }
    e.innerHTML = `
      <div><b>${z("lmb")}</b> — ${z("pbFireBreak")}</div>
      <div><b>${z("rmb")}</b> — ${z("pbAimPlace")}</div>
      <div><b>Tab</b> — ${z("pbPlayerList")}</div>
      <div><b>1-9</b> — ${z("pbHotbar")}</div>
      <div><b>/</b> — ${z("pbCommand")}</div>
      ${t.map((i) => `<div><b>${rr(Y.binds[i]) || "—"}</b> — ${l_(i).toLowerCase()}</div>`).join("")}
    `;
  }
  onReplayTraining = () => {};
  showPause() {
    ((this.pauseOpen = !0),
      q("pausesave").classList.toggle("hidden", !this.localMode),
      (q("disconnectbtn").textContent = z(
        this.localMode ? "quitToWorldsButton" : "disconnectButton",
      )),
      q("pause").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  resumeFromPause() {
    return !this.pauseOpen || this.settingsOpen
      ? !1
      : (this.hidePause(), this.onResume(), !0);
  }
  hidePause() {
    ((this.pauseOpen = !1), q("pause").classList.add("hidden"));
  }
  showDeath(e, t = !1) {
    ((this.deathOpen = e),
      q("death").classList.toggle("hidden", !e),
      e &&
        (wi(),
        (q("death").querySelector(".sub").textContent = t
          ? I(
              "Your gear stays with you on this server.",
              "На этом сервере снаряжение остаётся при вас.",
            )
          : I(
              "Your backpack stayed where you fell. Go back for it — the spot is marked on your compass and map.",
              "Рюкзак с вещами остался на месте гибели. Вернитесь за ним — точка отмечена на компасе и карте.",
            )),
        this.setDeathCountdown(3),
        this.preparePointerForUi()));
  }
  setDeathCountdown(e) {
    const t = q("respawnbtn");
    wi();
    const i = Math.ceil(Math.max(0, e)),
      n =
        i > 0
          ? I(`Respawning in ${i}…`, `Возрождение через ${i}…`)
          : z("respawnButton");
    t.textContent !== n && (t.textContent = n);
  }
  setRaidStatus(e, t, i, n, o, a) {
    const r = q("raidhud");
    if (!r) return;
    if ((document.body.classList.toggle("raid-active", e), !e)) {
      (r.classList.add("hidden"), this.setRaidLeaderboard([]));
      return;
    }
    r.classList.remove("hidden");
    const l = q("raidwave"),
      c = q("raidsoldiers"),
      h = q("raidvehicles"),
      d = q("raidprize");
    (l &&
      (l.textContent = z("raidWave", { wave: t, maxWaves: i, active: n + o })),
      c && (c.textContent = String(n)),
      h && (h.textContent = String(o)),
      d && (d.textContent = z("raidPrize", { reward: a })));
  }
  setRaidZone(e) {
    this.raidZone = e;
  }
  setWorldObjects(e) {
    this.worldObjects = e;
  }
  siteKinds = new Map();
  setSiteKinds(e) {
    this.siteKinds = e;
  }
  spawnHub = null;
  mapSeed = null;
  mapLabels(
    e,
    t = this.mapCenter,
    i = q("mapcanvas").width,
    n = q("mapcanvas").height,
  ) {
    wi();
    const o = [];
    this.spawnHub &&
      o.push({
        x: this.spawnHub.x,
        z: this.spawnHub.z,
        text: sa(this.spawnHub.name),
        kind: "spawn",
        radius: this.spawnHub.radius,
      });
    for (const a of this.worldObjects)
      (this.spawnHub &&
        Math.hypot(a.x - this.spawnHub.x, a.z - this.spawnHub.z) < 4) ||
        o.push({
          x: a.x,
          z: a.z,
          text: sa(a.name),
          kind: rie(this.siteKinds.get(a.id)),
          radius: a.radius,
          held: this.heldSites.has(a.id),
        });
    if (this.mapSeed !== null && e >= i / 1600) {
      const a = i / e / 2 + 220,
        r = n / e / 2 + 220;
      for (
        let l = Math.floor((t.x - a) / 640);
        l <= Math.floor((t.x + a) / 640);
        l++
      )
        for (
          let c = Math.floor((t.z - r) / 640);
          c <= Math.floor((t.z + r) / 640);
          c++
        ) {
          const h = $A(this.mapSeed, l, c);
          h &&
            o.push({
              x: h.x,
              z: h.z,
              text: I(Av[h.kind][1], Av[h.kind][0]),
              kind: "landmark",
              radius: h.radius,
            });
        }
    }
    return o;
  }
  drawNavigationMapOverlay(e, t, i, n, o, a) {
    (this.drawSpawnZone(e, t, i, n, o),
      this.drawRaidZone(e, t, i, n, o),
      Ik(e, t, i, n, o, this.mapLabels(o, n, t, i)));
    for (const r of a) {
      if (!["player", "squad", "waypoint", "home"].includes(r.kind ?? ""))
        continue;
      const l = t / 2 + (r.x - n.x) * o,
        c = i / 2 + (r.z - n.z) * o;
      l < 0 ||
        l > t ||
        c < 0 ||
        c > i ||
        this.drawMapMarker(e, l, c, r, r.kind === "player" ? 6.5 : 4.6, t);
    }
  }
  drawSpawnZone(e, t, i, n, o) {
    const a = this.spawnHub;
    if (!a || a.radius <= 0) return;
    const r = t / 2 + (a.x - n.x) * o,
      l = i / 2 + (a.z - n.z) * o,
      c = a.radius * o;
    r + c < 0 ||
      l + c < 0 ||
      r - c > t ||
      l - c > i ||
      (e.save(),
      e.beginPath(),
      e.arc(r, l, c, 0, Math.PI * 2),
      (e.fillStyle = "rgba(80,255,160,0.10)"),
      e.fill(),
      e.setLineDash([6, 4]),
      (e.lineWidth = 2),
      (e.strokeStyle = "rgba(110,255,170,0.9)"),
      e.stroke(),
      e.restore());
  }
  setQuestStatus(e, t, i, n, o, a, r, l) {
    const c = q("questhud");
    if (!c) return;
    if (e === 0) {
      (c.classList.add("hidden"),
        (this.questEndAt = 0),
        (this.questMarkers = []),
        (this.lastQuestDistText = ""),
        (q("questdistance").textContent = ""));
      return;
    }
    (c.classList.remove("hidden"),
      (this.questEndAt = Date.now() + n * 1e3),
      (q("questname").textContent = t),
      (q("questobjective").textContent = i));
    const h = q("questcount");
    h &&
      (h.textContent =
        e === 2
          ? z("questCompletedStage")
          : `${o} ${I("soldiers", "бойцов")} · ${a} ${I("vehicles", "машин")}`);
    const d = q("questreward");
    (d && (d.textContent = z("questRewardLine", { money: r, xp: l })),
      this.updateQuestTimer());
  }
  setQuestDistance(e) {
    const t = q("questdistance");
    if (!t || this.questMarkers.length === 0) {
      t &&
        this.lastQuestDistText !== "" &&
        ((this.lastQuestDistText = ""), (t.textContent = ""));
      return;
    }
    const i =
        this.questMarkers.find((a) => a.kind === 1) ?? this.questMarkers[0],
      n = Math.round(Math.hypot(i.x - e.x, i.z - e.z)),
      o = z("questDistanceObjective", { blocks: n });
    o !== this.lastQuestDistText &&
      ((this.lastQuestDistText = o), (t.textContent = o));
  }
  updateQuestTimer() {
    if (this.questEndAt <= 0) return;
    const e = q("questtimer");
    if (!e) return;
    const t = Math.max(0, Math.round((this.questEndAt - Date.now()) / 1e3)),
      i = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
    i !== this.lastQuestTimerText &&
      ((this.lastQuestTimerText = i),
      (e.textContent = i),
      e.classList.toggle("low", t <= 120));
  }
  setQuestPoints(e) {
    this.questMarkers = e
      .filter((t) => t.kind === 1)
      .map((t) => ({ kind: 1, x: t.x, z: t.z, radius: t.radius }));
  }
  questCompassMarkers() {
    return [
      ...this.questMarkers.map((e) => ({ x: e.x, z: e.z, color: qie })),
      ...this.operationPoints,
    ];
  }
  drawQuestZone(e, t, i, n, o) {
    for (const a of this.operationPoints) {
      const r = t / 2 + (a.x - n.x) * o,
        l = i / 2 + (a.z - n.z) * o,
        c = Math.max(8, Math.min(t - 8, r)),
        h = Math.max(8, Math.min(i - 8, l));
      (e.save(),
        (e.strokeStyle = a.color),
        (e.fillStyle = a.color),
        (e.lineWidth = 2),
        e.beginPath(),
        e.arc(c, h, 5, 0, Math.PI * 2),
        e.stroke(),
        e.fillRect(c - 1, h - 1, 2, 2),
        t > 250 &&
          ((e.font = "11px sans-serif"),
          (e.textAlign = c > t / 2 ? "right" : "left"),
          e.fillText(a.label, c + (c > t / 2 ? -9 : 9), h + 4)),
        e.restore());
    }
    if (this.questMarkers.length !== 0) {
      (e.save(), e.beginPath(), e.rect(0, 0, t, i), e.clip());
      for (const a of this.questMarkers) {
        const r = t / 2 + (a.x - n.x) * o,
          l = i / 2 + (a.z - n.z) * o,
          c = Math.max(4, a.radius * o);
        (e.beginPath(),
          e.arc(r, l, c, 0, Math.PI * 2),
          (e.fillStyle = "rgba(255,212,74,0.16)"),
          e.fill(),
          (e.lineWidth = 2),
          (e.strokeStyle = "rgba(255,212,74,0.9)"),
          e.stroke());
      }
      e.restore();
    }
  }
  setRaidLeaderboard(e) {
    const t = q("raidleaderboard");
    if (!t || (t.replaceChildren(), !e.length)) return;
    const i = document.createElement("div");
    ((i.className = "lead-title"),
      (i.textContent = z("raidLeaders")),
      t.appendChild(i),
      wi(),
      e.forEach((n, o) => {
        const a = document.createElement("div"),
          r =
            Math.floor((n.repair ?? 0) / 25) +
            (n.rescues ?? 0) * 12 +
            (n.objectives ?? 0) * 15 +
            (n.transport ?? 0) * 6;
        ((a.textContent = `${o + 1}. ${n.name} — ${n.points} ${I("pts", "очк.")} · ${I("combat", "бой")} ${n.infantry + n.vehicles * 10} · ${I("support", "помощь")} ${r}`),
          (a.title = `${I("Repaired", "Ремонт")}: ${n.repair ?? 0} HP · ${I("Rescues", "Спасения")}: ${n.rescues ?? 0} · ${I("Objectives", "Задачи")}: ${n.objectives ?? 0} · ${I("Deliveries", "Доставка")}: ${n.transport ?? 0}`),
          t.appendChild(a));
      }));
  }
  setBalance(e) {
    const t = e - this.balance;
    (t < 0 &&
      this.pendingSpend !== null &&
      Date.now() - this.pendingSpendAt < 5e3 &&
      ((this.pendingSpend = null),
      this.sfx?.buy(),
      this.flashBalance("spend", -t)),
      (this.balance = e));
    for (const i of ["shopbalance", "balancehud"]) {
      const n = q(i);
      n.firstChild?.nodeType === Node.TEXT_NODE
        ? (n.firstChild.textContent = `$${e}`)
        : n.insertBefore(document.createTextNode(`$${e}`), n.firstChild);
    }
    (this.shopOpen && t !== 0 && this.buildShop(),
      this.invOpen && this.renderEquipmentRepair());
  }
  setProgress(e) {
    ((this.currentXp = Math.max(0, Math.floor(e))),
      this.invOpen && this.renderRankProgress());
  }
  flashBalance(e, t) {
    for (const n of ["shopbalance", "balancehud"]) {
      const o = q(n);
      (o.classList.remove("balpop-gain", "balpop-spend"),
        o.offsetWidth,
        o.classList.add(e === "gain" ? "balpop-gain" : "balpop-spend"));
    }
    const i = document.createElement("span");
    ((i.className = `balfloat ${e}`),
      (i.textContent = `${e === "gain" ? "+" : "−"}$${t}`),
      q("shopbalance").appendChild(i),
      setTimeout(() => i.remove(), 900));
  }
  showMineGain(e) {
    const t = q("minegain");
    ((t.textContent = `+1 ${e}`),
      t.classList.remove("show"),
      t.offsetWidth,
      t.classList.add("show"));
  }
  showTargetScore(e, t, i) {
    const n = q("targetscore");
    n.innerHTML = "";
    const o = document.createElement("span");
    ((o.className = "ts-score"), (o.textContent = `+${e}`));
    const a = document.createElement("span");
    ((a.className = "ts-total"),
      (a.textContent = z("targetScoreTotal", {
        total: t,
        shots: i,
        avg: (t / Math.max(1, i)).toFixed(1),
      })),
      n.append(o, a),
      n.classList.remove("show"),
      n.offsetWidth,
      n.classList.add("show"));
  }
  setDroneSignal(e) {
    const t = q("dronesignal");
    t.style.opacity = e <= 0 ? "0" : String(Math.min(0.85, 0.25 + e * 0.6));
  }
  openShop() {
    const e = !this.shopOpen;
    ((this.shopOpen = !0), (this.shopCategory = "all"));
    const t = q("shopsearch");
    ((t.value = ""),
      (q("shopgrid").scrollTop = 0),
      this.buildShop(),
      q("shop").classList.remove("hidden"),
      this.setBalance(this.balance),
      e && this.preparePointerForUi(),
      document.body.classList.contains("mobile") ||
        requestAnimationFrame(() => t.focus()));
  }
  closeShop() {
    this.shopOpen && ((this.shopOpen = !1), q("shop").classList.add("hidden"));
  }
  buildShop() {
    const e = q("shopgrid"),
      t = e.scrollTop,
      i = new Set(
        [...e.querySelectorAll(".shopitem")]
          .filter((d) => d.querySelector("details")?.open)
          .map((d) => d.dataset.itemId),
      );
    e.innerHTML = "";
    const n = (q("shopsearch")?.value ?? "").trim().toLocaleLowerCase(),
      o = {
        property: I("Territory", "Территория"),
        casino: I("Slot machines", "Игровые автоматы"),
        blueprint: I("Blueprints", "Чертежи"),
        explosive: I("Explosives & detonators", "Взрывчатка и детонаторы"),
        all: z("catAll"),
        weapon: z("catWeapon"),
        ammo: z("catAmmo"),
        resource: z("catResource"),
        tool: z("catTool"),
        medical: z("catMedical"),
        vehicle: z("catVehicle"),
        unit: z("catUnit"),
        armor: z("catArmor"),
        block: z("catBlock"),
        nature: z("catNature"),
        food: z("catFood"),
      },
      a = uT.filter((d) => d.buyable !== !1 && (d.id !== w.AXE || qS(!0))),
      r = new Map();
    for (const d of a) r.set(d.category, (r.get(d.category) ?? 0) + 1);
    this.buildShopCategories(o, a, r);
    const l = a.filter(
        (d) =>
          (this.shopCategory === "all" || d.category === this.shopCategory) &&
          (!n ||
            [d.id, ...(rE(d.id)?.ids ?? [])].some((u) =>
              h0(u).toLocaleLowerCase().includes(n),
            )),
      ),
      c = hie(l, q("shopsort").value, h0, ao());
    if (
      ((q("shopresultcount").textContent = z("shopResultCount", {
        count: c.length,
      })),
      q("shopsearchclear").classList.toggle("visible", n.length > 0),
      !c.length)
    ) {
      const d = document.createElement("div");
      ((d.className = "shop-empty"),
        (d.textContent = z("shopNoResults")),
        e.appendChild(d));
      return;
    }
    if (this.balance <= 0 && !this.inventory?.creative && !n) {
      const d = document.createElement("div");
      ((d.className = "shop-broke"), wi());
      const u = jr(),
        f = document.createElement("b");
      f.textContent = I(
        "No money yet? Earn your first dollars",
        "Пока нет денег? Заработайте первые доллары",
      );
      const p = document.createElement("span");
      ((p.textContent = I(
        `Leave the safe zone, mine wood, stone or ore, then sell it here: ${u ? "drag an item onto the sell zone in your inventory" : "right-click an item in your inventory"}.`,
        `Выйдите из безопасной зоны, добудьте дерево, камень или руду и продайте их здесь: ${u ? "перетащите предмет в зону продажи в инвентаре" : "ПКМ по предмету в инвентаре"}.`,
      )),
        d.append(f, p),
        e.appendChild(d));
    }
    let h = "";
    for (const d of c) {
      if (this.shopCategory === "all" && d.category !== h) {
        h = d.category;
        const R = document.createElement("div");
        ((R.className = "shop-category"),
          (R.textContent = o[h] ?? h),
          e.appendChild(R));
      }
      const u = document.createElement("div");
      ((u.className = "shopitem"), (u.dataset.itemId = String(d.id)));
      const f = AV(d.id);
      (d.category === "armor" || f) && u.classList.add("shop-armor");
      const p = document.createElement("canvas");
      ((p.width = 40),
        (p.height = 40),
        Vo(p.getContext("2d"), d.id, this.atlas));
      const m = document.createElement("div");
      m.className = "shop-item-meta";
      const g = document.createElement("div");
      ((g.className = "name"), (g.textContent = h0(d.id)));
      const y = document.createElement("div");
      y.className = "price";
      const b = Ia(d.id),
        S = W0(d.id);
      wi();
      const M = document.createElement("div");
      M.className = "shop-item-facts";
      const E = document.createElement("div");
      if (
        ((E.className = "shop-item-description"),
        (y.textContent = `$${d.price} · ${z("sale")} $${Fh(d.id)}`),
        d.id === v.OWNERSHIP_TOTEM &&
          (u.classList.add("shop-property"),
          (M.textContent = I(
            "65 × 65 · all heights · up to 20 claims",
            "65 × 65 · вся высота · до 20 приватов",
          )),
          (E.textContent = I(
            "Place outside generated sites to protect your territory. Your friends can use storage, signs and vehicles. Use your totem to show the exact boundary. Only the owner can remove it.",
            "Установите вне городов, деревень, баз и построек для защиты территории. Ваши друзья получат доступ к сундукам, табличкам и технике. Используйте тотем, чтобы увидеть точные границы. Снять может только владелец.",
          ))),
        S)
      ) {
        u.classList.add("shop-blueprint");
        const R = aP(S, $c);
        ((M.textContent =
          `${S.width} × ${S.depth} × ${S.height}` +
          (S.key === "olympus-casino"
            ? I(" · 2 blackjack tables", " · 2 стола блэкджека")
            : "")),
          (E.textContent =
            `${I(S.descriptionEn, S.description)} ${I("Materials", "Материалы")}: $${R} + 5%. ` +
            I(
              "Single use. The plot is cleared and underpinned automatically.",
              "Одноразовый. Участок расчищается и подсыпается автоматически.",
            )));
      } else
        E5(d.id)
          ? ((M.textContent = I(
              "3D cabinet · live game screen",
              "3D-автомат · живой экран игры",
            )),
            (E.textContent = I(
              "Place on a clear floor. Uses your game wallet. Use a welder to pack up your cabinet after cashing out.",
              "Поставьте на свободный пол. Игра использует ваш кошелёк. Заберите баланс, затем используйте сварочный аппарат, чтобы упаковать свой автомат.",
            )))
          : b
            ? ((y.textContent = `$${d.price} · +${b.bonusHp} HP`),
              (M.textContent =
                `${z("bullets")} −${Math.round(b.bulletResist * 100)}% · ${z("explosion")} −${Math.round(b.explodeResist * 100)}%` +
                (b.fallResist > 0
                  ? ` · ${z("fall")} −${Math.round(b.fallResist * 100)}%`
                  : "")),
              (E.textContent = `${o_(b)} ${z("protects")}: ${a_(b)}.`))
            : f && (E.textContent = f);
      (d.id === w.MILITARY_MEDKIT || d.id === w.MEDKIT || d.id === w.BANDAGE) &&
        ((M.textContent = zk(d.id)),
        d.id === w.MILITARY_MEDKIT && u.classList.add("shop-premium"));
      const A = La(d.id);
      (A &&
        ((M.textContent = `R ${A.radius} m · ${A.delay} ${I("s", "с")}`),
        (E.textContent = `${I(A.descriptionEn, A.description)} · ${I("Remote detonator required", "Нужен детонатор")}`)),
        d.id === w.ROCKET_GUIDED &&
          (E.textContent = I(
            "RPG · 2 s lock · Fires straight without a lock",
            "РПГ · Захват 2 с · Без захвата летит прямо",
          )),
        m.append(g, y),
        M.textContent && m.append(M));
      const T = rE(d.id);
      T && m.append(this.shopAmmoLinks(T.fits, T.ids));
      const x = document.createElement("button");
      if (
        ((x.className = "mini-btn"),
        (x.textContent = z("buy")),
        (x.disabled = this.balance < d.price),
        x.disabled && (x.title = z("notEnoughMoney", { cost: d.price })),
        (x.onclick = async () => {
          const R = xa(d.id) > 1,
            _ = d.id === v.OWNERSHIP_TOTEM,
            C = _ ? oE : R ? 999 : 1,
            P = await this.openQtyModal({
              title: z("buyModalTitle", { name: h0(d.id), price: d.price }),
              max: C,
              initial: _ || d.category === "medical" ? 1 : R ? 64 : 1,
              presets: _
                ? [1, 5, 10, oE].map((O) => ({ label: String(O), value: O }))
                : [
                    { label: "1", value: 1 },
                    { label: "16", value: 16 },
                    { label: "32", value: 32 },
                    { label: "64", value: 64 },
                  ],
              line: (O) => {
                const B = O * d.price;
                return {
                  text: z("totalDue", { total: B }),
                  over: B > this.balance,
                };
              },
              confirmLabel: z("buy"),
            });
          if (P !== null && P > 0) {
            if (!this.inventory?.hasRoomFor(d.id, P)) {
              this.addChat(2, z("shopNoRoom"));
              return;
            }
            ((this.pendingSpend = P * d.price),
              (this.pendingSpendAt = Date.now()),
              this.onShopBuy(d.id, P));
          }
        }),
        u.append(p, m, x),
        E.textContent)
      ) {
        const R = document.createElement("details");
        ((R.className = "shop-item-details"), (R.open = i.has(String(d.id))));
        const _ = document.createElement("summary");
        ((_.textContent = z("shopItemDetails")),
          _.setAttribute("aria-label", `${z("shopItemDetails")}: ${h0(d.id)}`),
          R.append(_, E),
          u.append(R));
      }
      e.appendChild(u);
    }
    e.scrollTop = t;
  }
  shopAmmoLinks(e, t) {
    const i = document.createElement("div");
    i.className = "shop-fit";
    const n = document.createElement("span");
    ((n.className = "shop-fit-label"), (n.textContent = ON(e)), i.append(n));
    for (const o of t) {
      const a = document.createElement("span");
      a.className = "shop-fit-chip";
      const r = document.createElement("canvas");
      ((r.width = 40), (r.height = 28));
      const l = r.getContext("2d");
      (l.translate(0, -6),
        Vo(l, o, this.atlas),
        ai(o) > 0 && l.clearRect(0, 31, 40, 9),
        r.setAttribute("aria-hidden", "true"));
      const c = document.createElement("span");
      ((c.textContent = h0(o)), a.append(r, c), i.append(a));
    }
    return i;
  }
  buildShopCategories(e, t, i) {
    const n = q("shopcategories");
    if (!n) return;
    const o = { left: n.scrollLeft, top: n.scrollTop };
    ((n.innerHTML = ""), n.setAttribute("aria-label", z("shopCategoriesAria")));
    const a = ["all", ...iE.filter((r) => i.has(r))];
    for (const r of a) {
      const l = document.createElement("button");
      ((l.type = "button"),
        (l.dataset.category = r),
        (l.className = "shop-category-tab"),
        l.classList.toggle("active", r === this.shopCategory),
        l.setAttribute("role", "tab"),
        l.setAttribute(
          "aria-selected",
          r === this.shopCategory ? "true" : "false",
        ),
        l.setAttribute("aria-controls", "shopgrid"),
        (l.title = e[r] ?? r));
      const c = document.createElement("canvas");
      ((c.className = "shop-category-icon"), (c.width = 40), (c.height = 40));
      const h = r === "all" ? v.MILITARY_CHEST : Kie[r];
      Zie(c.getContext("2d"), h, this.atlas);
      const d = document.createElement("span");
      ((d.className = "shop-category-label"), (d.textContent = e[r] ?? r));
      const u = document.createElement("span");
      ((u.className = "shop-category-count"),
        (u.textContent = String(r === "all" ? t.length : (i.get(r) ?? 0))),
        l.append(c, d, u),
        (l.onclick = () => {
          this.shopCategory !== r &&
            ((this.shopCategory = r),
            (q("shopgrid").scrollTop = 0),
            this.sfx?.uiTick(!0),
            this.buildShop(),
            requestAnimationFrame(() =>
              n
                .querySelector(".shop-category-tab.active")
                ?.scrollIntoView({ block: "nearest", inline: "center" }),
            ));
        }),
        n.appendChild(l));
    }
    ((n.scrollLeft = o.left), (n.scrollTop = o.top));
  }
  openChest(e, t = z("chestTitle")) {
    const i = !this.chestOpen;
    for (
      this.chestOpen = !0, this.chestSlots = e;
      this.chestSlots.length < Math.max(27, Math.ceil(e.length / 9) * 9);
    )
      this.chestSlots.push({ id: 0, count: 0 });
    ((this.containerPending = !1),
      this.collectPending &&
        this.transferCursor &&
        ((this.transferCursor.count =
          this.transferList(this.transferCursor.area)[this.transferCursor.idx]
            ?.count ?? 0),
        (this.collectPending = !1)),
      i && ((this.transferCursor = null), (this.chestPicked = null)),
      this.syncGhostFromPicked(),
      (q("chesttitle").textContent = t),
      q("chest").classList.remove("hidden"),
      i && this.preparePointerForUi(),
      this.repaintTransfers());
  }
  closeChest() {
    this.chestOpen &&
      ((this.chestOpen = !1),
      (this.transferCursor = null),
      (this.containerPending = !1),
      (this.transferQueue = null),
      (this.collectPending = !1),
      (this.chestPicked = null),
      this.updateGhost(0, 0),
      q("chest").classList.add("hidden"),
      this.onChestClosed?.());
  }
  onChestClosed;
  transferList(e) {
    return e === "c"
      ? this.chestSlots
      : e === "f"
        ? this.furnaceSlots
        : e === "h"
          ? this.inventory.hotbar
          : e === "a"
            ? this.inventory.armor
            : this.inventory.storage;
  }
  clearTransferCursor() {
    ((this.transferCursor = null),
      (this.transferDrag = null),
      this.updateGhost(0, 0));
  }
  repaintTransfers() {
    const e = this.transferCursor;
    if (e) {
      const t = this.transferList(e.area)[e.idx];
      !t?.id || t.id !== e.id
        ? (this.transferCursor = null)
        : (e.count = Math.min(e.count, t.count));
    }
    (this.syncGhostFromPicked(),
      this.invOpen && this.renderInventory(),
      this.chestOpen && this.renderChest(),
      this.furnaceOpen && this.renderFurnace(),
      this.renderHotbar(),
      this.onHotbarChange(),
      this.drainTransferQueue());
  }
  drainTransferQueue() {
    const e = this.transferQueue,
      t = this.transferCursor;
    if (!e || this.containerPending) return;
    if (!t || !t.count || !e.slots.length) {
      this.transferQueue = null;
      return;
    }
    const i = e.slots.shift();
    ((t.count -= this.transferMove(
      t.area,
      t.idx,
      i.area,
      i.idx,
      Math.min(e.each, t.count),
      !1,
    )),
      t.count || (this.transferCursor = null),
      this.repaintTransfers());
  }
  transferMove(e, t, i, n, o, a = !0) {
    const r = this.inventory,
      l = this.transferList(e)[t],
      c = this.transferList(i)[n];
    if (
      !l ||
      !c ||
      l === c ||
      !o ||
      (i === "a" && !r.canEquipInSlot(l.id, n)) ||
      (e === "a" && c.id && !$h(l, c) && !r.canEquipInSlot(c.id, t))
    )
      return 0;
    const h = (m, g, y) =>
      m !== "f" || y === 0 || (g < 2 && this.furnaceTarget(y) === g);
    if (!h(i, n, l.id)) return 0;
    c.id && !$h(l, c) && !h(e, t, c.id) && (a = !1);
    const d = { ...l },
      u = { ...c },
      f = sE(d, u, o, xa, a);
    if (!f) return 0;
    const p = e === "c" || i === "c" || e === "f" || i === "f";
    if (p) {
      if (this.containerPending) return 0;
      (this.onContainerMove(e, t, i, n, o, { ...l }, { ...c }),
        (this.containerPending = !0));
    }
    return (Object.assign(l, d), Object.assign(c, u), p || r.save(), f);
  }
  transferClick(e, t, i = !1, n = !1) {
    if (this.longPressFired) {
      this.longPressFired = !1;
      return;
    }
    if (this.containerPending || !this.inventory) return;
    const o = this.transferList(e)[t];
    if (!o) return;
    const a = performance.now(),
      r = `${e}:${t}`;
    if (
      !i &&
      !n &&
      this.lastTransferClick.key === r &&
      a - this.lastTransferClick.time < 300
    ) {
      ((this.lastTransferClick = { key: "", time: 0 }),
        this.collectStack(e, t));
      return;
    }
    if (((this.lastTransferClick = { key: i || n ? "" : r, time: a }), n)) {
      if (!o.id) return;
      if (
        ((this.transferCursor = null),
        this.invOpen && e !== "c" && e !== "f" && this.shiftArmorClick(e, t))
      ) {
        this.repaintTransfers();
        return;
      }
      const c = this.chestOpen || this.furnaceOpen,
        h = c
          ? e === "c" || e === "f"
            ? "s"
            : this.chestOpen
              ? "c"
              : "f"
          : e === "h"
            ? "s"
            : "h";
      (c
        ? (this.onContainerMove(
            e,
            t,
            h,
            65535,
            o.count,
            { ...o },
            { id: 0, count: 0 },
          ),
          (this.containerPending = !0))
        : (uie(o, this.transferList(h), xa), this.inventory.save()),
        this.repaintTransfers());
      return;
    }
    const l = this.transferCursor;
    if (!l)
      o.id &&
        ((this.transferCursor = {
          area: e,
          idx: t,
          id: o.id,
          count: i ? Math.ceil(o.count / 2) : o.count,
        }),
        qs("pick"));
    else if (l.area === e && l.idx === t)
      (i && l.count > 1 ? l.count-- : (this.transferCursor = null),
        qs("place"));
    else {
      const c = this.transferList(l.area)[l.idx];
      if (!c || c.id !== l.id) {
        ((this.transferCursor = null), this.repaintTransfers());
        return;
      }
      if (this.fitPartOnto(l, e, t)) {
        this.repaintTransfers();
        return;
      }
      const h = o.id > 0 && !$h(c, o),
        d = this.transferMove(l.area, l.idx, e, t, i ? 1 : l.count, !i);
      d
        ? (qs(h ? "swap" : "place"),
          h
            ? ((l.id = c.id), (l.count = c.count))
            : ((l.count -= d), l.count <= 0 && (this.transferCursor = null)))
        : qs("deny");
    }
    this.repaintTransfers();
  }
  collectStack(e, t) {
    if (this.containerPending || this.furnaceOpen || e === "a") return;
    const i = this.transferCursor ?? {
        area: e,
        idx: t,
        id: this.transferList(e)[t]?.id ?? 0,
        count: 0,
      },
      n = this.transferList(i.area)[i.idx];
    if (!(!n?.id || xa(n.id) <= 1)) {
      if (this.chestOpen) {
        (this.onContainerMove(
          i.area,
          i.idx,
          "c",
          65534,
          n.count,
          { ...n },
          { id: 0, count: 0 },
        ),
          (this.transferCursor = i),
          (this.containerPending = !0),
          (this.collectPending = !0));
        return;
      }
      for (const o of [...this.inventory.storage, ...this.inventory.hotbar])
        o !== n && $h(o, n) && sE(o, n, o.count, xa, !1);
      ((i.count = n.count),
        (this.transferCursor = i),
        this.inventory.save(),
        this.repaintTransfers());
    }
  }
  wireTransferSlot(e, t, i) {
    (e.addEventListener("mouseenter", () => {
      this.transferHovered = { area: t, idx: i };
      const n = this.transferDrag;
      n &&
        !n.slots.some((o) => o.area === t && o.idx === i) &&
        n.slots.push({ area: t, idx: i });
    }),
      e.addEventListener("mouseleave", () => {
        this.transferHovered?.area === t &&
          this.transferHovered.idx === i &&
          (this.transferHovered = null);
      }),
      e.addEventListener("mousedown", (n) => {
        if (
          !this.transferCursor &&
          n.button === 0 &&
          !n.shiftKey &&
          !n.altKey &&
          !document.body.classList.contains("mobile") &&
          this.transferList(t)[i]?.id
        ) {
          this.dragPick = {
            area: t,
            idx: i,
            x: n.clientX,
            y: n.clientY,
            live: !1,
          };
          return;
        }
        !this.transferCursor ||
          n.shiftKey ||
          n.button > 2 ||
          n.button === 1 ||
          (n.button === 2 ? !n.altKey : n.altKey) ||
          (this.transferDrag = {
            right: n.button === 2,
            slots: [{ area: t, idx: i }],
          });
      }));
  }
  chestSlotClick(e, t, i, n = !1) {
    if (this.suppressTransferClick) {
      this.suppressTransferClick = !1;
      return;
    }
    this.transferClick(e, t, n, i);
  }
  renderChest() {
    const e = q("chestgrid");
    e.innerHTML = "";
    const t = Math.max(27, Math.ceil(this.chestSlots.length / 9) * 9);
    q("chest").style.setProperty("--chest-rows", String(t / 9));
    for (let a = 0; a < t; a++) {
      const r = ir(),
        l = this.chestSlots[a] ?? { id: 0, count: 0 };
      (this.drawSlot(r, l),
        r.el.classList.toggle(
          "picked",
          this.chestPicked?.area === "c" && this.chestPicked.idx === a,
        ),
        (r.el.onclick = (c) => this.chestSlotClick("c", a, c.shiftKey)),
        this.wireTransferSlot(r.el, "c", a),
        (r.el.oncontextmenu = (c) => {
          (c.preventDefault(),
            !c.altKey || document.body.classList.contains("mobile")
              ? this.sellChestSlot(a)
              : this.chestSlotClick("c", a, c.shiftKey, !0));
        }),
        e.appendChild(r.el));
    }
    const i = this.inventory;
    if (!i) return;
    const n = q("chestinvgrid");
    n.innerHTML = "";
    for (let a = 0; a < i.storage.length; a++) {
      const r = ir();
      (this.drawSlot(r, i.storage[a]),
        r.el.classList.toggle(
          "picked",
          this.chestPicked?.area === "s" && this.chestPicked.idx === a,
        ),
        (r.el.onclick = (l) => this.chestSlotClick("s", a, l.shiftKey)),
        this.wireTransferSlot(r.el, "s", a),
        (r.el.oncontextmenu = (l) => {
          (l.preventDefault(),
            !l.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", a)
              : this.chestSlotClick("s", a, l.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(r.el, "s", a, () => i.storage[a]?.id ?? 0),
        n.appendChild(r.el));
    }
    const o = q("chestinvhotbar");
    o.innerHTML = "";
    for (let a = 0; a < 9; a++) {
      const r = ir(String(a + 1));
      (this.drawSlot(r, i.hotbar[a]),
        r.el.classList.toggle(
          "picked",
          this.chestPicked?.area === "h" && this.chestPicked.idx === a,
        ),
        (r.el.onclick = (l) => this.chestSlotClick("h", a, l.shiftKey)),
        this.wireTransferSlot(r.el, "h", a),
        (r.el.oncontextmenu = (l) => {
          (l.preventDefault(),
            !l.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", a)
              : this.chestSlotClick("h", a, l.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(r.el, "h", a, () => i.hotbar[a]?.id ?? 0),
        o.appendChild(r.el));
    }
  }
  async sellChestSlot(e) {
    const t = this.chestSlots[e];
    if (!t || t.id <= 0) return;
    const i = t.id,
      n = t.count,
      o = Math.floor(Fh(i) * kw(i, t.durability));
    if (o <= 0) return;
    this.clearTransferCursor();
    const a = await this.openSellQuantity(i, n, o);
    !a || this.chestSlots[e]?.id !== i || this.onChestSell(e, a);
  }
  openFurnace(e, t, i, n = !1, o = 0) {
    const a = !this.furnaceOpen;
    ((this.furnaceOpen = !0),
      (this.furnaceSlots = e),
      (this.containerPending = !1),
      (this.furnaceProgress = t),
      (this.furnaceFuel = i),
      (this.furnaceChimneyOpen = n),
      (this.furnaceSmoke = Math.max(0, Math.min(1, o))),
      a &&
        ((this.furnacePicked = null),
        (this.transferCursor = null),
        this.updateGhost(0, 0),
        q("furnace").classList.remove("hidden"),
        this.preparePointerForUi()),
      this.repaintTransfers());
  }
  closeFurnace() {
    this.furnaceOpen &&
      ((this.furnaceOpen = !1),
      (this.transferCursor = null),
      (this.containerPending = !1),
      (this.transferQueue = null),
      (this.collectPending = !1),
      (this.furnacePicked = null),
      this.updateGhost(0, 0),
      q("furnace").classList.add("hidden"),
      this.onFurnaceClose());
  }
  furnaceTarget(e) {
    return e === w.COAL || e === w.LAVA_BUCKET
      ? 1
      : e === v.IRON_ORE ||
          e === v.GOLD_ORE ||
          e === v.DIAMOND_ORE ||
          e === v.TITANIUM_ORE ||
          e === w.RAW_PORK ||
          e === w.RAW_CHICKEN ||
          e === w.RAW_MUTTON ||
          e === w.RAW_BEEF ||
          e === w.RAW_CAMEL ||
          e === w.RAW_FISH
        ? 0
        : -1;
  }
  furnaceSlotClick(e, t, i, n = !1) {
    if (this.suppressTransferClick) {
      this.suppressTransferClick = !1;
      return;
    }
    this.transferClick(e, t, n, i);
  }
  async sellFurnaceSlot(e) {
    const t = this.furnaceSlots[e];
    if (!t || t.id <= 0) return;
    const i = t.id,
      n = Fh(i);
    if (n <= 0) return;
    const o = await this.openSellQuantity(i, t.count, n);
    !o || this.furnaceSlots[e]?.id !== i || this.onFurnaceSell(e, o);
  }
  renderFurnace() {
    const e = ["furnaceinput", "furnacefuel", "furnaceoutput"];
    for (let r = 0; r < 3; r++) {
      const l = q(e[r]);
      l.innerHTML = "";
      const c = ir();
      (this.drawSlot(c, this.furnaceSlots[r] ?? { id: 0, count: 0 }),
        c.el.classList.toggle(
          "picked",
          this.furnacePicked?.area === "f" && this.furnacePicked.idx === r,
        ),
        (c.el.onclick = (h) => this.furnaceSlotClick("f", r, h.shiftKey)),
        this.wireTransferSlot(c.el, "f", r),
        (c.el.oncontextmenu = (h) => {
          (h.preventDefault(),
            !h.altKey || document.body.classList.contains("mobile")
              ? this.sellFurnaceSlot(r)
              : this.furnaceSlotClick("f", r, h.shiftKey, !0));
        }),
        l.appendChild(c.el));
    }
    const t = q("furnaceprogress").firstElementChild;
    ((t.style.width = `${Math.max(0, Math.min(100, this.furnaceProgress * 100))}%`),
      (q("furnacestatus").textContent =
        this.furnaceProgress > 0 ? z("smelting") : z("waiting")),
      (q("furnacefueltext").textContent = z("fuelStock", {
        fuel: this.furnaceFuel,
      })));
    const i = q("furnaceventtext");
    ((i.textContent = this.furnaceChimneyOpen
      ? z("chimneyClear")
      : z("chimneyBlocked", { smoke: Math.round(this.furnaceSmoke * 100) })),
      i.classList.toggle("safe", this.furnaceChimneyOpen),
      i.classList.toggle(
        "danger",
        !this.furnaceChimneyOpen && this.furnaceSmoke > 0.35,
      ));
    const n = this.inventory;
    if (!n) return;
    const o = q("furnaceinvgrid");
    o.innerHTML = "";
    for (let r = 0; r < n.storage.length; r++) {
      const l = ir();
      (this.drawSlot(l, n.storage[r]),
        l.el.classList.toggle(
          "picked",
          this.furnacePicked?.area === "s" && this.furnacePicked.idx === r,
        ),
        (l.el.onclick = (c) => this.furnaceSlotClick("s", r, c.shiftKey)),
        this.wireTransferSlot(l.el, "s", r),
        (l.el.oncontextmenu = (c) => {
          (c.preventDefault(),
            !c.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", r)
              : this.furnaceSlotClick("s", r, c.shiftKey, !0));
        }),
        o.appendChild(l.el));
    }
    const a = q("furnaceinvhotbar");
    a.innerHTML = "";
    for (let r = 0; r < n.hotbar.length; r++) {
      const l = ir(String(r + 1));
      (this.drawSlot(l, n.hotbar[r]),
        l.el.classList.toggle(
          "picked",
          this.furnacePicked?.area === "h" && this.furnacePicked.idx === r,
        ),
        (l.el.onclick = (c) => this.furnaceSlotClick("h", r, c.shiftKey)),
        this.wireTransferSlot(l.el, "h", r),
        (l.el.oncontextmenu = (c) => {
          (c.preventDefault(),
            !c.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", r)
              : this.furnaceSlotClick("h", r, c.shiftKey, !0));
        }),
        a.appendChild(l.el));
    }
  }
  refreshChatValidation(e, t) {
    const i = e.value.trimStart().startsWith("/");
    e.maxLength = i ? uN : dN;
    const n = FS(q4(e.value, Oa()) ?? V4(e.value, Oa()));
    e.setAttribute("aria-invalid", String(!!n));
    const o = i
      ? ""
      : I(
          "Letters, numbers, spaces and _ - . , : ! ? / * & % @",
          "Буквы, цифры, пробелы и _ - . , : ! ? / * & % @",
        );
    ((q(t).textContent = `${e.value.length}/${e.maxLength} · ${n || o}`),
      q(t).classList.toggle("invalid", !!n));
  }
  submitChat(e) {
    const t = FS(q4(e, Oa()) ?? V4(e, Oa()));
    if (t) return (this.addChat(2, t), !1);
    const i = e.trim();
    if (i) {
      if (this.onChatSend(i) === !1) return !1;
      (this.chatHistory[this.chatHistory.length - 1] !== i &&
        this.chatHistory.push(i),
        this.chatHistory.length > 50 && this.chatHistory.shift(),
        (this.chatHistIdx = this.chatHistory.length));
    }
    return !0;
  }
  onlinePlayerNames = () => [];
  chatSuggestion = null;
  chatSuggestIdx = 0;
  refreshChatSuggestion(e = !1) {
    const t = q("chatinput");
    this.refreshChatValidation(t, "chatfeedback");
    const i = q("chatghost"),
      n = q("chataccept"),
      o = t.value;
    ((this.chatSuggestion = Iie(o, this.onlinePlayerNames)),
      e || (this.chatSuggestIdx = 0));
    const a = this.chatSuggestion?.ghost ?? "";
    if (!a) {
      (i.replaceChildren(), n.classList.add("hidden"));
      return;
    }
    const r = document.createElement("span");
    ((r.className = "typed"), (r.textContent = o));
    const l = document.createElement("span");
    ((l.textContent = a),
      i.replaceChildren(r, l),
      n.classList.toggle(
        "hidden",
        (this.chatSuggestion?.all.length ?? 0) === 0,
      ));
  }
  acceptChatSuggestion(e = 1) {
    const t = q("chatinput"),
      i = this.chatSuggestion?.all ?? [];
    if (i.length === 0) return;
    const n = i.indexOf(t.value),
      o = n === -1 ? this.chatSuggestIdx : (n + e + i.length) % i.length;
    ((this.chatSuggestIdx = o),
      (t.value = i[o]),
      t.setSelectionRange(t.value.length, t.value.length),
      this.refreshChatSuggestion(!0),
      this.sfx?.uiTick());
  }
  openChat(e = "") {
    (this.chatOpen || this.onChatOpened(),
      (this.chatOpen = !0),
      document.body.classList.add("chat-open"),
      (this.chatHistIdx = this.chatHistory.length),
      q("chatbox").classList.remove("hidden"),
      q("chatlog").classList.add("open"),
      this.renderChatLog(!0),
      this.preparePointerForUi());
    const i = q("chatinput");
    ((i.value = e),
      this.refreshChatSuggestion(),
      (document.body.classList.contains("mobile") && Pm()) ||
        setTimeout(() => i.focus(), 0),
      this.chatOutsideBound ||
        ((this.chatOutsideBound = !0),
        document.addEventListener("mousedown", this.onChatOutsideClick, !0)));
  }
  chatOutsideBound = !1;
  onChatOutsideClick = (e) => {
    if (!this.chatOpen) return;
    const t = e.target;
    if (!t) return;
    const i = q("chatbox"),
      n = q("chatlog");
    i?.contains(t) ||
      n?.contains(t) ||
      t.closest?.("#mobchat") ||
      this.closeChat();
  };
  closeChat() {
    this.chatOpen &&
      ((this.chatOpen = !1),
      document.body.classList.remove("chat-open"),
      q("chatbox").classList.add("hidden"),
      q("mobilechatpopup").classList.add("hidden"),
      q("mobilechatinput").blur(),
      q("chatinput").blur(),
      q("chatlog").classList.remove("open"),
      this.renderChatLog(!0),
      this.onChatClosed());
  }
  xpOfName;
  addChat(e, t, i) {
    if (!(e === 0 && Vu(i?.name))) {
      for (
        this.chatLog.push({ type: e, msg: t, meta: i, at: Date.now() });
        this.chatLog.length > Wo.CHAT_KEEP;
      )
        this.chatLog.shift();
      (this.renderChatLog(!1), this.ensureChatFadeTick());
    }
  }
  renderChatLog(e) {
    const t = q("chatlog");
    if (!t) return;
    const i = t.scrollHeight - t.scrollTop - t.clientHeight < 48,
      n = e || this.chatStickBottom || i || !this.chatOpen;
    t.innerHTML = "";
    const o = Date.now();
    for (const a of this.chatLog) {
      const r = document.createElement("div"),
        l =
          a.type !== 0 &&
          /killed|destroyed|died|убил|уничтожил|погиб|разбился/i.test(a.msg);
      if (
        ((r.className = `msg t${a.type}${l ? " killfeed" : ""}`),
        (r.textContent = a.msg),
        a.type === 0)
      ) {
        const c = a.msg.indexOf(": ");
        if (c > 0) {
          const h = a.msg.slice(0, c),
            d =
              a.meta?.name ??
              h
                .replace(/^\[(Owner|Admin|Moder)\] /, "")
                .replace(/ \[[A-Za-z0-9_-]+\]$/, ""),
            u = VS(d),
            f = document.createElement("span");
          ((f.textContent = u.baseLabel),
            (f.style.color = u.color),
            (f.style.fontWeight = u.weight));
          const p = this.xpOfName?.(d);
          (p !== void 0 && f.prepend(Ku(Rf(p), "chat-rank")),
            a.meta?.side &&
              Pc &&
              ((f.style.color =
                a.meta.side === Pc
                  ? "var(--nick-ally, #dfe4ea)"
                  : "var(--nick-enemy, #ff5247)"),
              (f.style.fontWeight = "700")),
            r.replaceChildren(f));
          const m = a.meta?.squad ?? u.squad;
          if (m) {
            const g = document.createElement("span");
            ((g.className = "squad-postfix"),
              (g.textContent = " [" + m.name + "]"),
              (g.style.color = m.color),
              r.append(g));
          }
          if (a.meta?.channel === "squad") {
            const g = document.createElement("span");
            ((g.className = "chat-channel-label"),
              (g.textContent = I("SQUAD", "ОТРЯД")),
              (g.style.color = m?.color ?? "#58dfc0"),
              r.prepend(g));
          }
          if (a.meta?.channel === "team") {
            const g = document.createElement("span");
            ((g.className = "chat-channel-label chat-team-label"),
              (g.textContent = I("TEAM", "КОМАНДА")),
              r.prepend(g),
              r.classList.add("msg-team"));
          }
          r.append(document.createTextNode(a.msg.slice(c)));
        }
      }
      (!this.chatOpen &&
        o - a.at > (l ? 18e3 : 9e3) &&
        r.classList.add("faded"),
        t.appendChild(r));
    }
    n && ((t.scrollTop = t.scrollHeight), (this.chatStickBottom = !0));
  }
  ensureChatFadeTick() {
    this.chatFadeTimer ||
      (this.chatFadeTimer = setInterval(() => {
        if (this.chatOpen) return;
        if (this.chatLog.length === 0) {
          this.chatFadeTimer &&
            (clearInterval(this.chatFadeTimer), (this.chatFadeTimer = null));
          return;
        }
        const e = Date.now();
        this.chatLog.some((t) => {
          const i =
            t.type !== 0 &&
            /killed|destroyed|died|убил|уничтожил|погиб|разбился/i.test(t.msg)
              ? 18e3
              : 9e3;
          return e - t.at > i && e - t.at < i + 2e3;
        }) && this.renderChatLog(!1);
      }, 1e3));
  }
  showTab(e) {
    this.tabOpen = e;
    const t = q("tablist");
    (t.classList.toggle("hidden", !e),
      (t.style.pointerEvents = e ? "all" : "none"),
      q("tabbackdrop").classList.toggle("hidden", !e),
      e
        ? (this.renderTabRows(), this.preparePointerForUi())
        : document.activeElement instanceof HTMLElement &&
          document.activeElement.closest("#tablist") &&
          document.activeElement.blur());
  }
  tabRows = [];
  tabQuery = "";
  setTab(e) {
    ((this.tabRows = e), this.tabOpen && this.renderTabRows());
  }
  renderTabRows() {
    const e = [...this.tabRows].sort(
      (o, a) => a.balance - o.balance || o.name.localeCompare(a.name),
    );
    q("tabcount").textContent = z("tabOnline", { count: e.length });
    const t = this.tabQuery.trim().toLocaleLowerCase(),
      i = new Intl.NumberFormat(ao()),
      n = document.createDocumentFragment();
    if (
      (e.forEach((o, a) => {
        const r = VS(o.name);
        if (
          t &&
          !o.name.toLocaleLowerCase().includes(t) &&
          !r.baseLabel.toLocaleLowerCase().includes(t)
        )
          return;
        const l = document.createElement("div");
        ((l.className =
          "row" +
          (o.self ? " self" : "") +
          (a < 3 && o.balance > 0 ? ` top${a + 1}` : "")),
          l.setAttribute("role", "listitem"));
        const c = document.createElement("span");
        ((c.className = "pos"), (c.textContent = String(a + 1)));
        const h = document.createElement("span");
        h.className = "name";
        const d = Ku(Rf(o.xp), "tab-rank-board");
        if (
          (h.append(d, document.createTextNode(r.baseLabel)),
          (h.tabIndex = 0),
          h.setAttribute("role", "button"),
          (h.onclick = () => CT({ name: o.name, xp: o.xp, self: o.self })),
          (h.onkeydown = (S) => {
            (S.key === "Enter" || S.key === " ") &&
              (S.preventDefault(), h.click());
          }),
          r.squad)
        ) {
          const S = document.createElement("span");
          ((S.textContent = " [" + r.squad.name + "]"),
            (S.style.color = r.squad.color),
            h.append(S));
        }
        const u = (S, M = "") => {
          const E = document.createElement("span");
          ((E.className = "tag" + (M ? " " + M : "")),
            (E.textContent = S),
            h.append(E));
        };
        (o.self
          ? u(z("tabYou"), "you")
          : o.squad
            ? u(z("tabSquadmate"))
            : o.friend && u(z("tabFriend")),
          (h.style.color = r.color),
          (h.style.fontWeight = r.weight),
          (h.title = `${r.label} · ${o.rank} — ${I("open profile", "открыть профиль")}`));
        const f = document.createElement("span");
        ((f.className = "rank"), (f.textContent = o.rank));
        const p = document.createElement("small");
        ((p.textContent = `${i.format(o.xp)} XP`),
          f.append(p),
          (f.title = `${o.rank} · ${i.format(o.xp)} XP`));
        const m = document.createElement("span");
        ((m.className = "bal"), (m.textContent = `$${i.format(o.balance)}`));
        const g = document.createElement("span");
        ((g.className =
          "ping " + (o.ping < 90 ? "good" : o.ping < 180 ? "fair" : "poor")),
          (g.textContent = z("pingMs", { ping: o.ping })));
        const y = document.createElement("span");
        y.className = "act";
        const b = document.createElement("button");
        ((b.type = "button"),
          (b.className = "tab-friend" + (o.friend ? " on" : "")),
          (b.textContent = o.friend ? "★" : "+"),
          (b.title = o.friend
            ? z("removeFriendFromList")
            : z("addFriendToList")),
          b.setAttribute("aria-label", `${b.title}: ${r.baseLabel}`),
          (b.hidden = o.self),
          (b.onclick = () => this.onToggleFriend(o.id)),
          y.append(b),
          l.append(c, h, f, m, g, y),
          n.appendChild(l));
      }),
      !n.childNodes.length)
    ) {
      const o = document.createElement("div");
      ((o.className = "tab-empty"),
        (o.textContent = z("tabNoMatches")),
        n.appendChild(o));
    }
    q("tabrows").replaceChildren(n);
  }
  compassCtx = null;
  compassSig = "";
  compassTape = null;
  compassFontReady = !1;
  compassFontAskAt = 0;
  compassTapeFor(e, t, i, n) {
    !this.compassFontReady &&
      performance.now() >= this.compassFontAskAt &&
      ((this.compassFontAskAt = performance.now() + 1e3),
      (this.compassFontReady =
        typeof document.fonts?.check != "function" ||
        document.fonts.check('13px "Russo One"')));
    const o = `${v0()}|${i}|${e}|${t}|${this.compassFontReady}`;
    if (this.compassTape?.key === o) return this.compassTape.canvas;
    const a = z("compassPoints"),
      r = 360 + Au * 2,
      l = this.compassTape?.canvas ?? document.createElement("canvas");
    ((l.width = Math.ceil(r * n * i)), (l.height = Math.round(t * i)));
    const c = l.getContext("2d");
    (c.setTransform(i, 0, 0, i, 0, 0), c.clearRect(0, 0, r * n, t));
    const h = (u) => (u + Au) * n;
    for (let u = -Au; u <= 360 + Au; u += 5) {
      const f = ((u % 360) + 360) % 360,
        p = f % 45 === 0,
        m = h(u);
      ((c.strokeStyle = p
        ? "rgba(200,210,150,0.55)"
        : "rgba(200,210,150,0.22)"),
        (c.lineWidth = p ? 2 : 1),
        c.beginPath(),
        c.moveTo(m, t - (p ? 13 : 7)),
        c.lineTo(m, t),
        c.stroke());
    }
    const d = a.split(",");
    ((c.font = '13px "Russo One", sans-serif'),
      (c.textAlign = "center"),
      (c.textBaseline = "middle"));
    for (let u = -2; u * 45 <= 360 + Au + 45; u++) {
      const f = ((u % 8) + 8) % 8;
      ((c.fillStyle = f === 0 ? "#ffb547" : "#c9d3dd"),
        c.fillText(d[f] ?? "", h(u * 45), t * 0.4));
    }
    return ((this.compassTape = { key: o, canvas: l }), l);
  }
  setCompass(e, t, i) {
    const n = q("compasscoords");
    n.textContent !== t && (n.textContent = t);
    let o = `${Math.round((e * 1800) / Math.PI)}|${v0()}|${devicePixelRatio}`;
    for (const y of i)
      o += `|${Math.round(y.bearing * 2)}${y.color}${y.label ?? ""}`;
    if (o === this.compassSig) return;
    this.compassSig = o;
    const a = q("compasscanvas");
    this.compassCtx || (this.compassCtx = a.getContext("2d"));
    const r = this.compassCtx;
    if (!r) return;
    const l = 340,
      c = 40,
      h = Math.min(devicePixelRatio || 1, 2);
    (a.width !== Math.round(l * h) || a.height !== Math.round(c * h)) &&
      ((a.width = Math.round(l * h)),
      (a.height = Math.round(c * h)),
      (a.style.width = l + "px"),
      (a.style.height = c + "px"));
    const d = ((((-e * 180) / Math.PI) % 360) + 360) % 360,
      u = 110,
      f = l / u,
      p = (y) => {
        let b = y - d;
        return ((b = ((((b + 180) % 360) + 360) % 360) - 180), b);
      },
      m = this.compassTapeFor(l, c, h, f);
    (r.setTransform(1, 0, 0, 1, 0, 0),
      r.clearRect(0, 0, a.width, a.height),
      r.drawImage(
        m,
        Math.round((d - u / 2 + Au) * f * h),
        0,
        a.width,
        a.height,
        0,
        0,
        a.width,
        a.height,
      ),
      r.setTransform(h, 0, 0, h, 0, 0),
      (r.strokeStyle = "rgba(255,255,255,0.75)"),
      (r.lineWidth = 2),
      r.beginPath(),
      r.moveTo(l / 2, 0),
      r.lineTo(l / 2, c),
      r.stroke());
    let g = 0;
    for (const y of i) {
      let b = l / 2 + p(y.bearing) * f;
      if (
        ((b = Math.max(6, Math.min(l - 6, b))),
        (r.fillStyle = y.color),
        r.beginPath(),
        r.arc(b, c * 0.74, 4.5, 0, Math.PI * 2),
        r.fill(),
        (r.strokeStyle = "rgba(0,0,0,0.6)"),
        (r.lineWidth = 1),
        r.stroke(),
        y.label)
      ) {
        ((r.font = "600 9px system-ui"),
          (r.textAlign = "center"),
          (r.textBaseline = "top"));
        const S = (g++ % 2) * 11,
          M = Math.max(48, Math.min(l - 48, b));
        ((r.lineWidth = 3),
          (r.strokeStyle = "#07131de0"),
          r.strokeText(y.label, M, S, 94),
          (r.fillStyle = y.color),
          r.fillText(y.label, M, S, 94));
      }
    }
  }
  setHP(e, t = 100) {
    const i = Math.max(1, t),
      n = Math.max(0, e);
    ((q("hpfill").style.width = `${Math.min(100, (n / i) * 100)}%`),
      (q("hptext").textContent = i > 100 ? `${n}/${i}` : String(n)));
  }
  cosmeticOwner = () => qe?.id ?? Y.nick;
  ammoKey = "";
  ammoName = "";
  ammoLength = 0;
  setAmmo(e, t, i = "") {
    const n = io(this.inventory?.hotbar[this.inventory.sel]?.cosmetic?.skin);
    if (e && n) {
      const h = I(n.name, n.ru);
      (e.endsWith(" | " + h) || (e += " | " + h), (i = Oo[n.rarity].color));
    }
    Cv();
    const o = ai(this.inventory?.held() ?? 0) || (this.inventory?.held() ?? 0),
      a = !!this.inventory && Pf.includes(o) && !No(o) && !Lo(o);
    a && t.length > 18 && !/^(DETONATION|ДЕТОНАЦИЯ)/.test(t) && (t = "");
    const r =
      e +
      `
` +
      t +
      `
` +
      i +
      `
` +
      a;
    if (r === this.ammoKey) return;
    ((this.ammoKey = r), q("ammo").classList.toggle("weapon-readout", a));
    const l = e !== this.ammoName || t.length !== this.ammoLength;
    ((this.ammoName = e),
      (this.ammoLength = t.length),
      q("ammo").classList.toggle("ammo-detail", t.length > 18),
      (q("ammo").innerHTML = ""));
    const c = document.createElement("span");
    ((c.className = "wname"),
      (c.style.color = i),
      (c.textContent = a ? "" : e),
      (c.title = e),
      q("ammo").append(c, document.createTextNode(t)),
      l && Cv(!0));
  }
  buildDebugToggles() {
    q("debugtoggles").replaceChildren(
      ...F$.map((t) => {
        const i = document.createElement("label"),
          n = document.createElement("input");
        ((n.type = "checkbox"),
          (n.checked = Y.debug[t]),
          (n.onchange = () => {
            ((Y.debug[t] = n.checked), Ji());
          }));
        const o = document.createElement("span");
        return (
          (o.dataset.i18n = `debug_${t}`),
          (o.textContent = z(`debug_${t}`)),
          i.append(n, o),
          i
        );
      }),
    );
  }
  setDebugLines(e) {
    const t = q("debughud"),
      i = e.join(`
`);
    if (i === this.lastDebugText) return;
    ((this.lastDebugText = i),
      t.replaceChildren(
        ...e.map((o) => {
          const a = document.createElement("div");
          return ((a.textContent = o), a);
        }),
      ));
    const n =
      e.length === 0 ? 0 : Math.round(t.getBoundingClientRect().height) + 6;
    n !== this.debugOffset &&
      ((this.debugOffset = n),
      q("hud").style.setProperty("--debug-offset", `${n}px`));
  }
  currentHint() {
    return q("hint").textContent ?? "";
  }
  hintShown = "";
  hintMining = !1;
  setHint(e, t = !1) {
    if (e === this.hintShown && t === this.hintMining) return;
    ((this.hintShown = e), (this.hintMining = t));
    const i = q("hint");
    ((i.textContent = e), i.classList.toggle("mining", t));
  }
  miningShown = -1;
  setMiningProgress(e) {
    const t = e === null ? -1 : Math.min(100, Math.floor(e * 100));
    if (t === this.miningShown) return;
    this.miningShown = t;
    const i = q("mineprogress");
    if (t < 0) {
      i.classList.remove("show");
      return;
    }
    i.classList.add("show");
    const n = i.querySelector(".mp-fill");
    n &&
      (n.style.strokeDashoffset = String(
        Math.round((1 - t / 100) * 94.2 * 100) / 100,
      ));
    const o = i.querySelector(".mp-pct");
    o && (o.textContent = `${t}%`);
  }
  onTeleportAnswer = () => {};
  tpRequest = null;
  showTeleportRequest(e, t) {
    this.hideTeleportRequest();
    const i = q("tprequest");
    ((i.querySelector(".tpr-title").textContent = z("tpRequestFrom", {
      name: e,
    })),
      (i.querySelector(".tpr-sub").textContent = jr()
        ? z("tpRequestTouchHint")
        : z("tpRequestKeyHint")),
      i.classList.remove("hidden"));
    const n = Date.now() + t * 1e3,
      o = i.querySelector(".tpr-bar i"),
      a = i.querySelector(".tpr-time"),
      r = () => {
        const l = Math.max(0, n - Date.now());
        ((o.style.transform = `scaleX(${(l / (t * 1e3)).toFixed(3)})`),
          (a.textContent = `${Math.ceil(l / 1e3)}`),
          l <= 0 && this.hideTeleportRequest());
      };
    (r(),
      (this.tpRequest = {
        from: e,
        until: n,
        timer: window.setInterval(r, 100),
      }));
  }
  hideTeleportRequest(e) {
    !this.tpRequest ||
      (e !== void 0 && this.tpRequest.from !== e) ||
      (window.clearInterval(this.tpRequest.timer),
      (this.tpRequest = null),
      q("tprequest").classList.add("hidden"));
  }
  setCropProgress(e) {
    const t = q("cropprogress");
    if (!e) {
      t.classList.remove("show", "boosted", "low-light");
      return;
    }
    (t.classList.add("show"),
      t.classList.toggle("boosted", !!e.boosted),
      t.classList.toggle("low-light", !!e.lowLight),
      (q("cropprogresslabel").textContent = e.label),
      (q("cropprogressdetails").textContent = e.details ?? ""),
      (q("cropprogressfill").style.width =
        `${Math.max(0, Math.min(100, e.pct))}%`));
  }
  setCrosshair(e, t = 0) {
    const i = e ? (0.85 - 0.55 * t).toFixed(2) : "0";
    i !== this.crosshairOpacity &&
      ((this.crosshairOpacity = i), (q("crosshair").style.opacity = i));
  }
  crosshairOpacity = "";
  setHoloRange(e) {
    const t = q("holorange");
    (t.classList.toggle("hidden", e === null),
      (t.textContent =
        e === null ? "" : `${e < 10 ? e.toFixed(1) : Math.round(e)} m`));
  }
  setScope(e) {
    q("scope").classList.toggle("hidden", !e);
  }
  hitmark() {
    ((this.hitmarkT = 0.18), (q("hitmarker").style.opacity = "1"));
  }
  hitFrom(e, t, i, n, o) {
    const a = Dw(e, t, i, n, o);
    for (const l of this.hitDirs)
      if (
        Math.abs(((Dw(l.x, l.z, i, n, o) - a + 540) % 360) - 180) >
        180 - ise
      ) {
        ((l.x = e), (l.z = t), (l.life = Nw));
        return;
      }
    if (this.hitDirs.length >= 5) return;
    const r = document.createElement("div");
    ((r.className = "hitdir"),
      (r.style.transform = `rotate(${a}deg)`),
      r.append(document.createElement("i")),
      q("hitdirs").append(r),
      this.hitDirs.push({ el: r, x: e, z: t, life: Nw }));
  }
  updateHitDirs(e, t, i, n) {
    for (let o = this.hitDirs.length - 1; o >= 0; o--) {
      const a = this.hitDirs[o];
      if (((a.life -= e), a.life <= 0)) {
        (a.el.remove(), this.hitDirs.splice(o, 1));
        continue;
      }
      ((a.el.style.transform = `rotate(${Dw(a.x, a.z, t, i, n)}deg)`),
        (a.el.style.opacity = String(Math.min(1, a.life / (Nw - 1.2)))));
    }
  }
  damageFlash() {
    const e = q("vignette");
    ((e.style.transition = "none"),
      (e.style.opacity = "1"),
      requestAnimationFrame(() => {
        ((e.style.transition = "opacity .5s"), (e.style.opacity = "0"));
      }));
  }
  concussion(e, t) {
    const i = q("concussion"),
      n = Math.max(0, Math.min(1, e)),
      o = ++this.concussionSeq;
    ((i.style.transition = "none"),
      (i.style.opacity = String(0.16 + n * 0.68)));
    const a = `saturate(${Math.max(0.18, 1 - n * 0.78)}) blur(${(n * 1.8).toFixed(1)}px)`;
    ((i.style.backdropFilter = a),
      i.style.setProperty("-webkit-backdrop-filter", a),
      window.setTimeout(() => {
        o === this.concussionSeq &&
          ((i.style.transition = `opacity ${Math.max(0.5, t / 1e3).toFixed(2)}s ease-out, backdrop-filter .9s ease-out, -webkit-backdrop-filter .9s ease-out`),
          (i.style.opacity = "0"),
          (i.style.backdropFilter = "saturate(1) blur(0)"),
          i.style.setProperty(
            "-webkit-backdrop-filter",
            "saturate(1) blur(0)",
          ));
      }, 80));
  }
  smokeExposure(e) {
    const t = Math.max(0, Math.min(1, e)),
      i = q("smoke-overlay"),
      n = q("smoke-warning");
    i.style.opacity =
      t < 0.08 ? "0" : String(Math.min(0.78, (t - 0.08) * 0.78));
    const o = t > 0.52;
    (n.classList.toggle("hidden", !o),
      (n.style.opacity = o ? String(Math.min(1, 0.45 + t * 0.65)) : "0"));
  }
  vehicleHudKey = "";
  setVehicleHud(e) {
    const t = q("vehhud");
    if ((document.body.classList.toggle("vehicle-active", !!e), !e)) {
      (t.classList.add("hidden"), (this.vehicleHudKey = ""));
      const f = document.getElementById("vehicle-pause-help");
      f && (f.hidden = !0);
      return;
    }
    t.classList.remove("hidden");
    const i = document.body.classList.contains("mobile"),
      n = Math.round(e.speed * 3.6),
      o = JSON.stringify([
        e.name,
        e.hp,
        e.maxHp,
        n,
        e.alt,
        e.flies,
        e.extra,
        i,
        v0(),
        e.charge === void 0 ? -1 : Math.round(e.charge * 100),
      ]);
    if (o === this.vehicleHudKey) return;
    if (((this.vehicleHudKey = o), !t.firstChild)) {
      const f = document.createElement("div");
      ((f.className = "vh-title"), f.append(document.createElement("b")));
      const p = document.createElement("div");
      ((p.className = "vhp"), p.append(document.createElement("div")));
      const m = document.createElement("div");
      m.className = "vh-stats";
      const g = document.createElement("div");
      ((g.className = "vh-extra"), t.append(f, p, m, g));
    }
    const [a, r, l, c] = t.children,
      h = Math.max(0, Math.min(1, e.charge ?? e.hp / Math.max(1, e.maxHp)));
    ((a.firstElementChild.textContent = e.name),
      (r.firstElementChild.style.width = `${h * 100}%`),
      t.classList.toggle("vh-air", e.flies),
      t.classList.toggle("vh-low", h < 0.3),
      t.classList.toggle("vh-hurt", h >= 0.3 && h < 0.6),
      (l.textContent = i
        ? e.flies
          ? z("vehHudTouchStats", { speed: n, alt: e.alt })
          : ""
        : z(e.flies ? "vehHudStatsAir" : "vehHudStats", {
            hp: e.hp,
            maxHp: e.maxHp,
            speed: n,
            alt: e.alt,
          })));
    const d = i ? "" : `${Y.binds.camera}|${Y.binds.use}|${v0()}`;
    if (
      c.dataset.hints !== d &&
      ((c.dataset.hints = d), c.replaceChildren(), !i)
    )
      for (const [f, p] of [
        ["camera", "vehicleCamera"],
        ["use", "vehicleExit"],
      ]) {
        const m = document.createElement("span"),
          g = document.createElement("kbd");
        ((g.textContent = rr(Y.binds[f])),
          m.append(g, ` ${z(p)}`),
          c.append(m));
      }
    let u = document.getElementById("vehicle-pause-help");
    (u ||
      ((u = document.createElement("details")),
      (u.id = "vehicle-pause-help"),
      u.append(document.createElement("summary"), document.createElement("p")),
      document.querySelector("#pause .panel").append(u)),
      (u.querySelector("summary").textContent =
        `${e.name} · ${z("vehicleControls")}`),
      (u.querySelector("p").textContent = e.extra),
      (u.hidden = !1));
  }
  tick(e) {
    this.hitmarkT > 0 &&
      ((this.hitmarkT -= e),
      this.hitmarkT <= 0 && (q("hitmarker").style.opacity = "0"));
  }
  drawSlot(e, t) {
    const i = this.transferCursor;
    if (i && this.transferList(i.area)[i.idx] === t) {
      const E = t.count - i.count;
      t = E > 0 ? { ...t, count: E } : { id: 0, count: 0 };
    }
    const n = e.canvas.getContext("2d");
    Vo(n, t.id, this.atlas);
    const o = t.id ? io(t.cosmetic?.skin) : void 0;
    if (
      (e.el.classList.toggle("skin-slot", !!o),
      e.el.style.setProperty("--skin-color", o ? Oo[o.rarity].color : ""),
      (e.el.dataset.skinName = o ? I(o.name, o.ru) : ""),
      o && pO(n, o.id),
      No(t.id))
    ) {
      const E = zq(t.id),
        A = n.canvas.width;
      (n.save(),
        (n.fillStyle = "#101923"),
        n.fillRect(0, A * 0.66, A * 0.36, A * 0.34),
        (n.fillStyle = "#effaff"),
        (n.font = `700 ${Math.max(9, A * 0.25)}px sans-serif`),
        (n.textAlign = "center"),
        (n.textBaseline = "middle"),
        n.fillText(String(E), A * 0.18, A * 0.83),
        n.restore());
    }
    const a = qr(t);
    (a > 0 &&
      ((n.fillStyle = "rgba(6,9,8,.9)"),
      n.fillRect(21, 24, 18, 12),
      (n.fillStyle = a === w.THERMAL_GOGGLES ? "#ff7626" : "#73ee8b"),
      n.beginPath(),
      n.arc(26, 30, 3.5, 0, Math.PI * 2),
      n.arc(34, 30, 3.5, 0, Math.PI * 2),
      n.fill()),
      (e.cnt.textContent =
        t.id > 0 && (t.count > 1 || xa(t.id) > 1) ? String(t.count) : ""));
    const r = this.weaponMagInfo(t.id, t.magazine);
    e.mag.textContent = r ? String(r.loaded) : "";
    const l = Kr(t.id),
      c = l > 0 ? Math.max(0, Math.min(l, t.durability ?? l)) : 0,
      h = l > 0 ? c / l : 0;
    ((e.dur.style.display = l > 0 ? "" : "none"),
      (e.dur.style.width = `${Math.round(h * 100)}%`),
      (e.dur.style.background =
        h > 0.55 ? "#65d66f" : h > 0.22 ? "#e0bd4d" : "#e45545"));
    const d = qr(t),
      u = d > 0 ? 0 : Wc(t.id) ? t.id : 0,
      f = d || u,
      p = f > 0 ? Sr(f) : Dc(t.id) > 0 ? Uy : 0,
      m = p > 0 ? Math.max(0, Math.min(p, t.suppressorDurability ?? p)) : 0;
    ((e.supDur.style.display = p > 0 ? "" : "none"),
      (e.supDur.style.width = `${p > 0 ? Math.round((m / p) * 100) : 0}%`),
      e.el.classList.toggle("empty", t.id === 0));
    const g = Math.floor(Fh(t.id) * kw(t.id, t.durability));
    if (
      ((e.el.dataset.itemSale =
        t.id > 0
          ? JR(t.id)
            ? `${I("Sell", "Продажа")}: $${g} / ${I("item", "шт.")}${t.count > 1 ? ` · $${g * t.count} ${I("stack", "за стопку")}` : ""}`
            : I("Cannot be sold", "Не продаётся")
          : ""),
      t.id === 0)
    ) {
      e.el.dataset.itemInfo = "";
      return;
    }
    if (t.id < 256) {
      e.el.dataset.itemInfo = `${jh(le[t.id]) ?? ""}
${I("Durability", "Прочность")}: ${le[t.id]?.hardness ?? 0}${le[t.id]?.light ? ` · ${I("Light", "Свет")}: ${le[t.id].light}` : ""}`;
      return;
    }
    if (t.id === w.MEDKIT || t.id === w.MILITARY_MEDKIT || t.id === w.BANDAGE) {
      e.el.dataset.itemInfo = `${Li(t.id)}
${zk(t.id)}`;
      return;
    }
    const y = W0(t.id);
    if (y) {
      (wi(),
        (e.el.dataset.itemInfo = `${Li(t.id)}
${y.width} × ${y.depth} × ${y.height}
${I(y.descriptionEn, y.description)}
${I("Single use · One per slot · Materials + 5%", "Одноразовый · Один в ячейке · Материалы + 5%")}`));
      return;
    }
    const b = Ia(t.id);
    if (b) {
      const E =
        d > 0
          ? `
${z("helmetModuleDurabilityTooltip", { current: m, max: p })}`
          : "";
      e.el.dataset.itemInfo =
        `${Li(t.id) ?? ""}
${o_(b)}
${z("protects")}: ${a_(b)}
+${b.bonusHp} HP · ${z("bullets")} −${Math.round(b.bulletResist * 100)}% · ${z("explosion")} −${Math.round(b.explodeResist * 100)}%` +
        (b.fallResist > 0
          ? ` · ${z("fall")} −${Math.round(b.fallResist * 100)}%`
          : "") +
        `
${z("durabilityTooltip", { current: c, max: l })}${E}`;
      return;
    }
    const S =
        l > 0
          ? `
${z("durabilityTooltip", { current: c, max: l })}`
          : "",
      M =
        p > 0
          ? `
${z(u > 0 ? "helmetModuleDurabilityTooltip" : "suppressorDurabilityTooltip", { current: m, max: p })}`
          : "";
    e.el.dataset.itemInfo = `${Jie(t.id)}${o ? " | " + I(o.name, o.ru) : ""}${ese(t.id)}${S}${M}${
      o?.tracking && t.cosmetic
        ? `
` +
          U5(t.id) +
          ": " +
          zA(t.cosmetic, this.cosmeticOwner(), t.id) +
          " · " +
          t.cosmetic.ownerName
        : ""
    }`;
  }
  renderHotbar() {
    const e = this.inventory;
    if (e)
      for (let t = 0; t < 9; t++) {
        const i = this.hotbarSlots[t];
        (i.el.classList.toggle("sel", t === e.sel),
          this.drawSlot(i, e.hotbar[t]));
      }
  }
  refreshItemIcons() {
    (this.renderHotbar(),
      this.invOpen && this.renderInventory(),
      this.chestOpen && this.renderChest(),
      this.shopOpen && this.buildShop());
  }
  openInventory() {
    const e = !this.invOpen;
    ((this.invOpen = !0),
      e && (this.transferCursor = null),
      (this.picked = null),
      this.updateGhost(0, 0),
      q("inventory").classList.remove("hidden"));
    const t = rr(Y.binds.skills);
    ((q("invskillskey").textContent = t),
      (q("invskillskey").hidden = !t),
      e && this.preparePointerForUi(),
      this.renderInventory());
  }
  closeInventory() {
    (Yr(),
      (this.invOpen = !1),
      (this.transferCursor = null),
      (this.picked = null),
      this.updateGhost(0, 0),
      q("inventory").classList.add("hidden"),
      this.onInventoryPreview(!1));
  }
  ensureGridSlots(e) {
    const t = q("invgrid");
    for (; this.invGridSlots.length < e;) {
      const i = this.invGridSlots.length,
        n = ir();
      (t.appendChild(n.el),
        (n.el.onclick = (o) => this.slotClick("s", i, o.shiftKey)),
        this.wireTransferSlot(n.el, "s", i),
        (n.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "s", idx: i };
        }),
        this.wireAttachmentLongPress(n.el, "s", i, () =>
          this.inventory && !this.inventory.creative
            ? (this.inventory.storage[i]?.id ?? 0)
            : 0,
        ),
        this.invGridSlots.push(n));
    }
  }
  repairQuote(e) {
    const t = this.inventory;
    return cie(t ? [...t.hotbar, ...t.storage, ...t.armor] : [], e);
  }
  renderEquipmentRepair() {
    q("invrepairbalance").textContent =
      `${z("repairBalance")}: $${this.balance}`;
    for (const e of [0, 1]) {
      const t = q(e === 0 ? "repairarmor" : "repairweapons"),
        i = this.repairQuote(e);
      ((t.querySelector("span").textContent = z(
        e === 0 ? "repairArmor" : "repairWeapons",
      )),
        (t.querySelector("small").textContent = this.repairPending
          ? z("repairPending")
          : i.count
            ? `${i.count} · $${i.cost}${i.cost > this.balance ? ` · ${z("repairNoMoney")}` : ""}`
            : z("repairIntact")),
        (t.disabled = this.repairPending || !i.count || i.cost > this.balance));
    }
  }
  async repairEquipment(e) {
    if (this.repairPending || this.containerPending || this.qtyModalOpen)
      return;
    this.clearTransferCursor();
    const t = this.repairQuote(e);
    if (!(
      !t.count ||
      t.cost > this.balance ||
      !(await this.openQtyModal({
        title: z(e === 0 ? "repairArmor" : "repairWeapons"),
        max: 1,
        initial: 1,
        presets: [],
        confirmOnly: !0,
        confirmLabel: z("repairPay", { cost: t.cost }),
        line: () => ({
          text: z("repairConfirm", { count: t.count, cost: t.cost }),
          over: t.cost > this.balance,
        }),
      }))
    )) {
      if (this.repairQuote(e).cost > t.cost) {
        ((q("invrepairnotice").textContent = z("repairChanged")),
          this.renderEquipmentRepair());
        return;
      }
      ((this.repairPending = !0),
        (q("invrepairnotice").textContent = ""),
        this.renderEquipmentRepair(),
        this.onEquipmentRepair(e, t.cost));
    }
  }
  finishEquipmentRepair(e, t) {
    ((this.repairPending = !1),
      (q("invrepairnotice").textContent =
        e === 0
          ? z("repairDone", { cost: t })
          : z(e === 1 ? "repairNoMoney" : "repairChanged")),
      e === 0 && t > 0 && this.sfx?.buy(),
      this.renderEquipmentRepair());
  }
  renderInventory() {
    const e = this.inventory;
    if (!e) return;
    const t = e.creative ? Eu.length : M0;
    this.ensureGridSlots(t);
    for (let i = 0; i < this.invGridSlots.length; i++) {
      const n = this.invGridSlots[i];
      if (((n.el.style.display = i < t ? "" : "none"), !(i >= t))) {
        if (e.creative) {
          const o = Eu[i] ?? 0;
          if (o === w.AXE && !qS(!0)) {
            n.el.style.display = "none";
            continue;
          }
          (this.drawSlot(n, { id: o, count: xa(o) > 1 ? Dk : 1 }),
            o > 0 && xa(o) > 1 && (n.cnt.textContent = "∞"));
        } else this.drawSlot(n, e.storage[i]);
        n.el.classList.toggle(
          "picked",
          this.picked?.area === "s" && this.picked.idx === i,
        );
      }
    }
    for (let i = 0; i < 9; i++) {
      const n = this.invHotbarSlots[i];
      (this.drawSlot(n, e.hotbar[i]),
        e.creative &&
          e.hotbar[i].id > 0 &&
          xa(e.hotbar[i].id) > 1 &&
          (n.cnt.textContent = "∞"),
        n.el.classList.toggle(
          "picked",
          this.picked?.area === "h" && this.picked.idx === i,
        ));
    }
    for (let i = 0; i < this.armorSlots.length; i++) {
      const n = this.armorSlots[i];
      (this.drawSlot(n, e.armor[i] ?? { id: 0, count: 0 }),
        n.el.classList.toggle(
          "picked",
          this.picked?.area === "a" && this.picked.idx === i,
        ),
        n.el.classList.toggle("armor-filled", (e.armor[i]?.id ?? 0) > 0));
    }
    (this.renderRankProgress(),
      this.renderSoldierPreview(),
      this.renderEquipmentRepair());
  }
  renderRankProgress() {
    const e = dm(this.currentXp);
    q("invrankname").textContent = GS(e.rank);
    const t = q("invrankboard");
    t &&
      t.dataset.rank !== String(e.index) &&
      ((t.src = Nd(e.index)), (t.dataset.rank = String(e.index)));
    const i = new Intl.NumberFormat(ao());
    ((q("invrankxp").textContent = e.next
      ? `${i.format(this.currentXp)} / ${i.format(e.to)} XP`
      : z("maxRankXp", { xp: i.format(this.currentXp) })),
      (q("invrankfill").style.width = `${(e.fraction * 100).toFixed(1)}%`),
      (q("invranknext").textContent = e.next
        ? z("untilNextRank", {
            rank: GS(e.next),
            xp: i.format(Math.max(0, e.to - this.currentXp)),
          })
        : z("allRanksEarned")));
  }
  renderSoldierPreview() {
    this.onInventoryPreview(this.invOpen);
  }
  shiftArmorClick(e, t) {
    const i = this.inventory;
    if (!i) return !1;
    const n = (h) => (h === "h" ? i.hotbar : h === "a" ? i.armor : i.storage);
    if (e === "a") {
      const h = i.armor[t];
      if (!h || h.id <= 0) return !0;
      const d = [...i.hotbar, ...i.storage].find((u) => u.id === 0);
      return (
        d &&
          (Object.assign(d, h, { count: 1 }),
          Object.assign(h, {
            id: 0,
            count: 0,
            durability: 0,
            suppressorDurability: 0,
            magazine: void 0,
          }),
          i.save(),
          (this.picked = null)),
        !0
      );
    }
    let o = 0;
    if (
      (i.creative && e === "s" ? (o = Eu[t] ?? 0) : (o = n(e)[t]?.id ?? 0),
      !O0(o))
    )
      return !1;
    const a = Ia(o),
      r = $r.indexOf(a.slot);
    if (r < 0) return !1;
    const l = i.armor[r],
      c = { ...l };
    if (i.creative && e === "s")
      ((l.id = o),
        (l.count = 1),
        (l.durability = Kr(o)),
        (l.suppressorDurability = 0));
    else {
      const h = n(e)[t],
        d = { ...h };
      (Object.assign(l, d, { count: 1 }),
        c.id > 0
          ? Object.assign(h, c, { count: 1 })
          : Object.assign(h, {
              id: 0,
              count: 0,
              durability: 0,
              suppressorDurability: 0,
            }));
    }
    return (i.save(), (this.picked = null), !0);
  }
  slotClick(e, t, i = !1, n = !1, o = !1) {
    if (this.longPressFired) {
      this.longPressFired = !1;
      return;
    }
    const a = this.inventory;
    if (a) {
      if (this.suppressTransferClick) {
        this.suppressTransferClick = !1;
        return;
      }
      if (!a.creative) {
        this.transferClick(e, t, n || o, i);
        return;
      }
      if (i && this.shiftArmorClick(e, t)) {
        (this.syncGhostFromPicked(),
          this.renderInventory(),
          this.renderHotbar(),
          this.chestOpen && this.renderChest(),
          this.furnaceOpen && this.renderFurnace(),
          this.onHotbarChange());
        return;
      }
      if (a.creative) {
        if (e === "s")
          (Eu[t] ?? 0) !== 0 &&
            (this.picked =
              this.picked?.area === "s" && this.picked.idx === t
                ? null
                : { area: e, idx: t });
        else if (this.picked?.area === "s") {
          const r = Eu[this.picked.idx] ?? 0;
          e === "a"
            ? (r === 0 || a.canEquipInSlot(r, t)) &&
              ((a.armor[t] = r
                ? {
                    id: r,
                    count: 1,
                    durability: Kr(r),
                    suppressorDurability: 0,
                  }
                : { id: 0, count: 0 }),
              a.save(),
              (this.picked = null))
            : ((a.hotbar[t] = { id: r, count: xa(r) > 1 ? Dk : 1 }),
              a.save(),
              (this.picked = null));
        } else
          e === "a"
            ? this.picked?.area === "a" && this.picked.idx === t
              ? (this.picked = null)
              : a.armor[t].id > 0
                ? (this.picked = { area: "a", idx: t })
                : ((a.armor[t] = { id: 0, count: 0 }), a.save())
            : ((a.hotbar[t] = { id: 0, count: 0 }), a.save());
        (this.syncGhostFromPicked(),
          this.renderInventory(),
          this.renderHotbar(),
          this.onHotbarChange());
        return;
      }
    }
  }
  dropPicked() {
    const e = this.inventory;
    if (this.transferCursor && e && !e.creative) {
      const n = this.transferCursor;
      if (n.area === "c" || n.area === "f") return;
      const o = this.transferList(n.area)[n.idx],
        a = Math.min(n.count, o.count);
      (this.onDropItem(
        o.id,
        a,
        o.durability ?? Kr(o.id),
        o.suppressorDurability ?? Dc(o.id),
        o.magazine,
        o.cosmetic,
      ),
        (o.count -= a),
        o.count ||
          Object.assign(o, {
            id: 0,
            count: 0,
            durability: 0,
            suppressorDurability: 0,
            magazine: void 0,
          }),
        (this.transferCursor = null),
        e.save(),
        this.repaintTransfers());
      return;
    }
    if (!e || !this.picked || e.creative) return;
    const i = (
      this.picked.area === "h"
        ? e.hotbar
        : this.picked.area === "a"
          ? e.armor
          : e.storage
    )[this.picked.idx];
    (i?.id > 0 &&
      (this.onDropItem(
        i.id,
        i.count,
        i.durability ?? Kr(i.id),
        i.suppressorDurability ?? Dc(i.id),
        i.magazine,
        i.cosmetic,
      ),
      (i.id = 0),
      (i.count = 0),
      (i.durability = 0),
      (i.suppressorDurability = 0),
      e.save()),
      (this.picked = null),
      this.syncGhostFromPicked(),
      this.renderInventory(),
      this.renderHotbar(),
      this.onHotbarChange());
  }
  async sellSlot(e, t) {
    const i = this.inventory;
    if (!i || i.creative) return;
    const n = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t];
    if (!n || n.id <= 0) return;
    const o = n.id;
    if (!JR(o)) return;
    const a = Math.floor(Fh(o) * kw(o, n.durability)),
      r = n.count;
    this.clearTransferCursor();
    const l = await this.openSellQuantity(o, r, a);
    if (!l) return;
    const c = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t];
    if (!c || c.id !== o) return;
    const h = this.onSellItem(e, t, o, l);
    h > 0 &&
      (this.setBalance(this.balance + a * h),
      this.sfx?.sell(),
      this.flashBalance("gain", a * h),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest(),
      this.furnaceOpen && this.renderFurnace(),
      this.onHotbarChange());
  }
  async sellPicked() {
    const e = this.transferCursor;
    if (e && e.area !== "c" && e.area !== "f") {
      ((this.transferCursor = null),
        await this.sellSlot(e.area, e.idx),
        this.repaintTransfers());
      return;
    }
    if (!this.picked) return;
    const t = { ...this.picked };
    (await this.sellSlot(t.area, t.idx),
      (this.picked = null),
      this.syncGhostFromPicked(),
      this.renderInventory());
  }
  openSellQuantity(e, t, i) {
    const n = (o) => Math.max(1, Math.min(t, Math.round(t * o)));
    return this.openQtyModal({
      title: z("sellModalTitle", { name: h0(e), price: i }),
      max: t,
      initial: t,
      presets: [
        { label: I("1 item", "1 шт"), value: 1 },
        { label: "25%", value: n(0.25) },
        { label: "50%", value: n(0.5) },
        { label: "75%", value: n(0.75) },
        { label: "100%", value: t },
      ],
      line: (o) => ({ text: z("youWillReceive", { total: o * i }), over: !1 }),
      confirmLabel: z("sell"),
    });
  }
}
