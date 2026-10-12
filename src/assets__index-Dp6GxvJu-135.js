// assets__index-Dp6GxvJu 135 — textcontent
// Lines 79567-85005 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const Os = class Os {
  constructor() {
    w(this, "onPlay", () => {});
    w(this, "onQualityChange", () => {});
    w(this, "onDisconnect", () => {});
    w(this, "onResume", () => {});
    w(this, "onRespawn", () => {});
    w(this, "onSaveGame", () => {});
    w(this, "onSkills", () => {});
    w(this, "localMode", !1);
    w(this, "onWaypointChange", () => {});
    w(this, "onChatOpened", () => {});
    w(this, "onChatSend", () => {});
    w(this, "onChatClosed", () => {});
    w(this, "onMapClosed", () => {});
    w(this, "onToggleFriend", () => {});
    w(this, "onInventoryPreview", () => {});
    w(this, "onHotbarChange", () => {});
    w(this, "onShopBuy", () => {});
    w(this, "onEquipmentRepair", () => {});
    w(this, "repairPending", !1);
    w(this, "onSellItem", () => 0);
    w(this, "onDropItem", () => {});
    w(this, "onContainerMove", () => {});
    w(this, "onChestPut", () => {});
    w(this, "onChestTake", () => {});
    w(this, "onChestSell", () => {});
    w(this, "onFurnacePut", () => {});
    w(this, "onFurnaceTake", () => {});
    w(this, "onFurnaceSell", () => {});
    w(this, "onFurnaceClose", () => {});
    w(this, "onSfxVolumeChange", () => {});
    w(this, "onMusicVolumeChange", () => {});
    w(this, "onLanguageChange", () => {});
    w(this, "onUiOpen", () => {});
    w(this, "atlas", null);
    w(this, "inventory", null);
    w(this, "sfx", null);
    w(this, "chatOpen", !1);
    w(this, "chatHistory", []);
    w(this, "chatHistIdx", 0);
    w(this, "chatLog", []);
    w(this, "chatFadeTimer", null);
    w(this, "chatStickBottom", !0);
    w(this, "invOpen", !1);
    w(this, "pauseOpen", !1);
    w(this, "deathOpen", !1);
    w(this, "mapOpen", !1);
    w(this, "tabOpen", !1);
    w(this, "shopOpen", !1);
    w(this, "shopCategory", "all");
    w(this, "chestOpen", !1);
    w(this, "furnaceOpen", !1);
    w(this, "settingsOpen", !1);
    w(this, "mobileIconCache", new Map());
    w(this, "listeningBind", null);
    w(this, "balance", 0);
    w(this, "currentXp", 0);
    w(this, "chestSlots", []);
    w(this, "furnaceSlots", [
      { id: 0, count: 0 },
      { id: 0, count: 0 },
      { id: 0, count: 0 },
    ]);
    w(this, "furnaceProgress", 0);
    w(this, "furnaceFuel", 0);
    w(this, "furnaceChimneyOpen", !1);
    w(this, "furnaceSmoke", 0);
    w(this, "mapCenter", { x: 0, z: 0 });
    w(this, "himarsPos", { x: 0, z: 0 });
    w(this, "mapMode", "world");
    w(this, "mapScale", 2.4);
    w(this, "mapSample", () => -1);
    w(this, "worldBorder", null);
    w(this, "mapLaunch", () => {});
    w(this, "mapMarkers", () => []);
    w(this, "debugOffset", 0);
    w(this, "lastDebugText", "");
    w(this, "mapDrag", null);
    w(this, "mapDragged", !1);
    w(this, "mapRefreshFrame", 0);
    w(this, "waypoint", null);
    w(this, "waypointPlanet", 0);
    w(this, "operationPoints", []);
    w(this, "raidZone", null);
    w(this, "questMarkers", []);
    w(this, "questEndAt", 0);
    w(this, "lastQuestTimerText", "");
    w(this, "lastQuestDistText", "");
    w(this, "worldObjects", []);
    w(this, "heldSites", new Set());
    w(this, "hotbarSlots", []);
    w(this, "invHotbarSlots", []);
    w(this, "invGridSlots", []);
    w(this, "armorSlots", []);
    w(this, "transferCursor", null);
    w(this, "transferHovered", null);
    w(this, "transferDrag", null);
    w(this, "suppressTransferClick", !1);
    w(this, "containerPending", !1);
    w(this, "transferQueue", null);
    w(this, "lastTransferClick", { key: "", time: 0 });
    w(this, "collectPending", !1);
    w(this, "picked", null);
    w(this, "hoveredInventorySlot", null);
    w(this, "chestPicked", null);
    w(this, "furnacePicked", null);
    w(this, "ghostSlot", null);
    w(this, "hitmarkT", 0);
    w(this, "concussionSeq", 0);
    w(this, "hitDirs", []);
    w(this, "onWeaponIdChanged", () => {});
    w(this, "onHelmetModuleChanged", () => {});
    w(this, "weaponMagInfo", () => null);
    w(this, "attachModalOpen", !1);
    w(this, "gunsmith");
    w(this, "gunsmithFrame", 0);
    w(this, "gunsmithKey", "");
    w(this, "attachTarget", null);
    w(this, "attachPickerCat", null);
    w(this, "longPressFired", !1);
    w(this, "qtyModalOpen", !1);
    w(this, "qtyClose", null);
    w(this, "qtyMaxVal", 0);
    w(this, "qtyLine", () => ({ text: "", over: !1 }));
    w(this, "lastQtySum", "");
    w(this, "pendingSpend", null);
    w(this, "pendingSpendAt", 0);
    w(this, "modalNodes");
    w(this, "mapRasters", new Map());
    w(this, "equipmentKey", "");
    w(this, "mobileVisible", []);
    w(this, "mobileCueCache", new Map());
    w(this, "loader");
    w(this, "onReplayTraining", () => {});
    w(this, "siteKinds", new Map());
    w(this, "spawnHub", null);
    w(this, "mapSeed", null);
    w(this, "onChestClosed");
    w(this, "onlinePlayerNames", () => []);
    w(this, "chatSuggestion", null);
    w(this, "chatSuggestIdx", 0);
    w(this, "chatOutsideBound", !1);
    w(this, "onChatOutsideClick", (e) => {
      var o;
      if (!this.chatOpen) return;
      const t = e.target;
      if (!t) return;
      const i = j("chatbox"),
        s = j("chatlog");
      (i != null && i.contains(t)) ||
        (s != null && s.contains(t)) ||
        ((o = t.closest) != null && o.call(t, "#mobchat")) ||
        this.closeChat();
    });
    w(this, "tabRows", []);
    w(this, "tabQuery", "");
    w(this, "compassCtx", null);
    w(this, "compassSig", "");
    w(this, "cosmeticOwner", () => (Me == null ? void 0 : Me.id) ?? z.nick);
    w(this, "ammoKey", "");
    w(this, "ammoName", "");
    w(this, "ammoLength", 0);
    w(this, "hintShown", "");
    w(this, "hintMining", !1);
    w(this, "miningShown", -1);
    w(this, "onTeleportAnswer", () => {});
    w(this, "tpRequest", null);
    w(this, "vehicleHudKey", "");
  }
  getBalance() {
    return this.balance;
  }
  setOperationPoints(e) {
    this.operationPoints = e;
  }
  init() {
    (document.body.classList.toggle("mobile", lr()),
      aA(),
      this.initMobileButtons());
    const e = Mj(
      (B, $) => ((z.nick = B), (z.server = $), qi(), this.beginPlay(B, $)),
      (B, $) => this.showLoading(B !== null, B ?? void 0, $),
    );
    ((j("playbtn").onclick = e),
      (j("solobtn").onclick = () => {
        var B, $;
        ((z.nick = (Me == null ? void 0 : Me.username) || z.nick || "Player"),
          qi(),
          ($ = (B = navigator.storage) == null ? void 0 : B.persist) == null ||
            $.call(B),
          this.openWorlds());
      }),
      (j("worldsback").onclick = () => this.hideWorlds()),
      (j("worldnew").onclick = () => this.showWorldCreate(!0)),
      (j("worldcreatecancel").onclick = () => this.showWorldCreate(!1)),
      (j("worldseedrandom").onclick = () => {
        j("worldseed").value = String((Math.random() * 4294967296) >>> 0);
      }),
      (j("worldcreateconfirm").onclick = () => void this.confirmCreateWorld()),
      (j("menusettings").onclick = () => this.showSettings()),
      (j("playbtn").disabled = !1),
      (j("solobtn").disabled = !1),
      (j("menusettings").disabled = !1),
      (j("pausesettings").onclick = () => this.showSettings()),
      (j("pauseskills").onclick = () => {
        (this.hidePause(), this.onSkills());
      }),
      (j("pausetraining").onclick = () => {
        (this.hidePause(), this.onReplayTraining());
      }),
      (j("pausecharacter").onclick = () => Ml("character")),
      (j("pauseweaponskins").onclick = () => {
        var $, he;
        const B = ou(
          Ti((($ = this.inventory) == null ? void 0 : $.held()) ?? 0) ||
            (((he = this.inventory) == null ? void 0 : he.held()) ?? 0),
        );
        Ml("store", au.includes(B) ? B : void 0);
      }),
      (j("invskills").onclick = () => {
        (this.closeInventory(), this.onSkills());
      }),
      (j("settingsback").onclick = () => this.hideSettings()),
      (j("settingsclose").onclick = () => this.hideSettings()),
      (j("resumebtn").onclick = () => {
        this.resumeFromPause();
      }),
      (j("pausesave").onclick = () => this.onSaveGame()),
      (j("disconnectbtn").onclick = () => {
        (this.localMode && sessionStorage.setItem("fc-open-worlds", "1"),
          this.hidePause(),
          this.onDisconnect());
      }),
      (j("settingsmainmenu").onclick = () => {
        (sessionStorage.removeItem("fc-open-worlds"),
          this.hideSettings(),
          this.hidePause(),
          this.onDisconnect());
      }),
      (j("respawnbtn").onclick = () => this.onRespawn()),
      (j("tabclose").onclick = () => this.showTab(!1)),
      (j("tabbackdrop").onclick = () => this.showTab(!1)),
      (j("tabsearch").oninput = (B) => {
        ((this.tabQuery = B.target.value), this.renderTabRows());
      }));
    const t = j("sens"),
      i = j("aircraftsens"),
      s = j("fov"),
      o = j("sfxvol"),
      a = j("musicvol"),
      r = j("language"),
      l = j("aimassisttoggle"),
      c = j("aimassiststrength"),
      h = j("hapticstoggle"),
      d = j("mobilelabelstoggle"),
      u = j("mobilechattoggle"),
      f = j("autojumptoggle"),
      p = j("chatsize"),
      m = j("minimapzoom"),
      y = j("grender"),
      g = j("gpixel"),
      b = j("gparticles"),
      S = j("gshadows"),
      M = j("gclouds"),
      x = j("gleaves"),
      T = j("gsmooth"),
      A = j("gaa"),
      _ = j("gfog"),
      C = j("gchunkshadows"),
      R = j("gtextures"),
      L = j("gmodels"),
      N = j("gmilitarythreshold"),
      D = j("gwater"),
      H = j("gcelestial"),
      G = j("genvironment"),
      I = j("gshafts"),
      O = j("gshaders"),
      F = j("brightness"),
      X = j("itemtooltipstoggle");
    ((F.oninput = () => {
      ((z.brightness = Number(F.value)), qi(), Ce());
    }),
      (X.onchange = () => {
        ((z.itemTooltips = X.checked), qi(), ar());
      }));
    const Q = j("camerabobtoggle"),
      ee = document.querySelector('[data-settings-category="gameplay"]');
    for (const [B, $, he] of [
      ["vehicleInstruments", "Приборный HUD техники", "Vehicle instruments"],
      [
        "cinematicHud",
        "Скрыть HUD для съёмки · F8",
        "Hide HUD for recording · F8",
      ],
    ]) {
      const fe = document.createElement("label");
      fe.className = "instrument-option";
      const be = document.createElement("input");
      ((be.type = "checkbox"), (be.id = B), (be.checked = z[B]));
      const Se = document.createElement("span");
      ((Se.dataset.labelRu = $),
        (Se.dataset.labelEn = he),
        (Se.textContent = z.language === "en" ? he : $),
        (be.onchange = () => {
          ((z[B] = be.checked),
            qi(),
            document.body.classList.toggle("cinematic-hud", z.cinematicHud));
        }),
        fe.append(be, Se),
        ee == null || ee.append(fe));
    }
    const se = document.querySelector('[data-settings-category="graphics"]'),
      oe = se == null ? void 0 : se.querySelector('label[for="brightness"]');
    for (const [B, $, he, fe] of [
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
    ]) {
      const be = document.createElement("label");
      be.className = "instrument-option";
      const Se = document.createElement("input");
      ((Se.type = "checkbox"), (Se.id = `opt-${B}`), (Se.checked = z[B]));
      const et = document.createElement("span");
      ((et.dataset.labelRu = $),
        (et.dataset.labelEn = he),
        (et.textContent = z.language === "en" ? he : $),
        (Se.onchange = () => {
          ((z[B] = Se.checked), qi(), this.onQualityChange());
        }),
        be.append(Se, et),
        fe === "graphics" && se
          ? se.insertBefore(be, oe ?? null)
          : ee == null || ee.append(be));
    }
    const J = document.createElement("button");
    if (
      ((J.id = "exit-recording"),
      (J.textContent = "✕ HUD"),
      (J.onclick = () => {
        ((z.cinematicHud = !1),
          qi(),
          document.body.classList.remove("cinematic-hud"),
          (j("cinematicHud").checked = !1));
      }),
      document.body.append(J),
      document.body.classList.toggle("cinematic-hud", z.cinematicHud),
      window.addEventListener("keydown", (B) => {
        B.code === "F8" &&
          !B.repeat &&
          !(B.target instanceof HTMLInputElement) &&
          !(B.target instanceof HTMLTextAreaElement) &&
          (B.preventDefault(),
          (z.cinematicHud = !z.cinematicHud),
          qi(),
          document.body.classList.toggle("cinematic-hud", z.cinematicHud),
          (j("cinematicHud").checked = z.cinematicHud));
      }),
      ee)
    ) {
      const B = f.closest("label"),
        $ = Q.closest("label");
      (B && ee.appendChild(B), $ && ee.appendChild($));
    }
    const re = () => {
      for (const B of document.querySelectorAll(".instrument-option span"))
        B.textContent =
          z.language === "en" ? B.dataset.labelEn : B.dataset.labelRu;
      (document.querySelectorAll(".settings-tab").forEach((B) => {
        const $ = B.querySelector(".settings-tab-label");
        $ &&
          ($.textContent =
            z.language === "en"
              ? (B.dataset.labelEn ?? "")
              : (B.dataset.labelRu ?? ""));
      }),
        document.querySelectorAll(".settings-category-title").forEach((B) => {
          var fe;
          const $ =
              (fe = B.parentElement) == null
                ? void 0
                : fe.dataset.settingsCategory,
            he = document.querySelector(`[data-settings-tab="${$}"]`);
          he && (B.textContent = he.textContent ?? "");
        }));
    };
    (document.querySelectorAll(".settings-tab").forEach((B) => {
      B.onclick = () => {
        const $ = B.dataset.settingsTab;
        (document.querySelectorAll(".settings-tab").forEach((he) => {
          (he.classList.toggle("active", he === B),
            he.setAttribute("aria-selected", he === B ? "true" : "false"));
        }),
          document
            .querySelectorAll(".settings-category")
            .forEach((he) =>
              he.classList.toggle("active", he.dataset.settingsCategory === $),
            ));
      };
    }),
      re());
    const Ce = () => {
      ((i.value = String(z.aircraftSensitivity)),
        (j("aircraftsensval").textContent = z.aircraftSensitivity.toFixed(1)),
        (t.value = String(z.sensitivity)),
        (s.value = String(z.fov)),
        (j("sensval").textContent = z.sensitivity.toFixed(1)),
        (j("fovval").textContent = String(z.fov)),
        (o.value = String(Math.round(z.sfxVolume * 100))),
        (a.value = String(Math.round(z.musicVolume * 100))),
        (r.value = z.language),
        (l.checked = z.aimAssist),
        (c.value = String(Math.round(z.aimAssistStrength * 100))),
        (j("aimassiststrengthval").textContent =
          `${Math.round(z.aimAssistStrength * 100)}%`),
        (h.checked = z.haptics),
        (d.checked = z.mobileLabels),
        (u.checked = z.mobileChat),
        (f.checked = z.autoJump),
        (F.value = String(z.brightness)),
        (j("brightnessval").textContent = `${Math.round(z.brightness * 100)}%`),
        (X.checked = z.itemTooltips),
        (Q.checked = z.cameraBob),
        (m.value = String(z.minimapZoom)),
        (j("minimapzoomval").textContent = `${z.minimapZoom}×`),
        (p.value = String(z.chatScale)),
        (j("chatsizeval").textContent = `${Math.round(z.chatScale * 100)}%`),
        document.documentElement.style.setProperty(
          "--chat-user-scale",
          String(z.chatScale),
        ),
        (j("sfxvolval").textContent = `${Math.round(z.sfxVolume * 100)}%`),
        (j("musicvolval").textContent = `${Math.round(z.musicVolume * 100)}%`),
        document.querySelectorAll(".qbtn").forEach(($) => {
          $.classList.toggle("active", $.dataset.q === z.quality);
        }));
      const B = Ts();
      ((y.value = String(B.renderDist)),
        (j("grenderval").textContent = `${B.renderDist}×16`),
        (g.value = String(Math.round(B.pixelRatio * 100))),
        (j("gpixelval").textContent = `${Math.round(B.pixelRatio * 100)}%`),
        (b.value = String(Math.round(B.particles * 100))),
        (j("gparticlesval").textContent = `${Math.round(B.particles * 100)}%`),
        (S.value = String(B.shadowSize)),
        (M.checked = B.clouds),
        (x.checked = B.fancyLeaves),
        (T.checked = B.smoothLighting),
        (A.checked = B.antialias),
        (_.checked = B.fog),
        (C.checked = B.chunkShadows),
        (R.value = String(B.textureSize)),
        (L.value = String(B.modelDetail)),
        (N.value = String(z.militaryOptimizationThreshold)),
        (j("gmilitarythresholdval").textContent = String(
          z.militaryOptimizationThreshold,
        )),
        (D.value = String(B.waterQuality)),
        (H.value = String(B.celestialDetail)),
        (G.value = String(B.environmentDetail)),
        (I.value = String(Math.round(B.sunShafts * 100))),
        (j("gshaftsval").textContent =
          B.sunShafts > 0
            ? `${Math.round(B.sunShafts * 100)}%`
            : U("offLabel")),
        (O.value = String(z.shaders)));
    };
    (Ce(),
      (i.oninput = () => {
        ((z.aircraftSensitivity = Number(i.value)), qi(), Ce());
      }),
      (t.oninput = () => {
        ((z.sensitivity = Number(t.value)), qi(), Ce());
      }),
      (s.oninput = () => {
        ((z.fov = Number(s.value)), qi(), Ce(), this.onQualityChange());
      }),
      (o.oninput = () => {
        ((z.sfxVolume = Number(o.value) / 100),
          qi(),
          Ce(),
          this.onSfxVolumeChange(z.sfxVolume));
      }),
      (a.oninput = () => {
        ((z.musicVolume = Number(a.value) / 100),
          qi(),
          Ce(),
          this.onMusicVolumeChange(z.musicVolume));
      }),
      (r.onchange = () => {
        ((z.language = r.value === "en" ? "en" : "ru"),
          qi(),
          aA(),
          this.onLanguageChange(z.language));
      }),
      Vo(() => {
        (j("worlds").classList.contains("hidden") || this.renderWorldsList(),
          re(),
          this.buildBindList(),
          this.refreshPauseBinds(),
          document.querySelectorAll(".armor-label").forEach((B) => {
            var he;
            const $ =
              (he = B.parentElement) == null ? void 0 : he.dataset.armor;
            $ && (B.textContent = rA($));
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
        ((z.aimAssist = l.checked), qi());
      }),
      (c.oninput = () => {
        ((z.aimAssistStrength = Number(c.value) / 100), qi(), Ce());
      }),
      (h.onchange = () => {
        ((z.haptics = h.checked), qi());
      }),
      (u.onchange = () => {
        ((z.mobileChat = u.checked),
          qi(),
          document.body.classList.toggle("m-chat-off", !z.mobileChat));
      }),
      (d.onchange = () => {
        ((z.mobileLabels = d.checked),
          qi(),
          document.body.classList.toggle("m-labels", z.mobileLabels),
          zm(this.mobileVisible, !0));
      }),
      (f.onchange = () => {
        ((z.autoJump = f.checked), qi());
      }),
      (m.oninput = () => {
        ((z.minimapZoom = Number(m.value)), qi(), Ce());
      }),
      (p.oninput = () => {
        ((z.chatScale = Number(p.value)), qi(), Ce());
      }));
    const Re = (B) => {
      (sA(), B(), qi(), Ce(), this.onQualityChange());
    };
    ((y.oninput = () =>
      Re(() => {
        z.graphics.renderDist = Number(y.value);
      })),
      (g.oninput = () =>
        Re(() => {
          z.graphics.pixelRatio = Number(g.value) / 100;
        })),
      (b.oninput = () =>
        Re(() => {
          z.graphics.particles = Number(b.value) / 100;
        })),
      (S.onchange = () =>
        Re(() => {
          z.graphics.shadowSize = Number(S.value);
        })),
      (M.onchange = () =>
        Re(() => {
          z.graphics.clouds = M.checked;
        })),
      (x.onchange = () =>
        Re(() => {
          z.graphics.fancyLeaves = x.checked;
        })),
      (T.onchange = () =>
        Re(() => {
          z.graphics.smoothLighting = T.checked;
        })),
      (A.onchange = () =>
        Re(() => {
          z.graphics.antialias = A.checked;
        })),
      (_.onchange = () =>
        Re(() => {
          z.graphics.fog = _.checked;
        })),
      (C.onchange = () =>
        Re(() => {
          z.graphics.chunkShadows = C.checked;
        })),
      (R.onchange = () =>
        Re(() => {
          z.graphics.textureSize = Xk(R.value);
        })),
      (L.onchange = () =>
        Re(() => {
          z.graphics.modelDetail = Number(L.value);
        })),
      (N.oninput = () => {
        ((z.militaryOptimizationThreshold = Number(N.value)), qi(), Ce());
      }),
      (D.onchange = () =>
        Re(() => {
          z.graphics.waterQuality = Number(D.value);
        })),
      (H.onchange = () =>
        Re(() => {
          z.graphics.celestialDetail = Number(H.value);
        })),
      (G.onchange = () =>
        Re(() => {
          z.graphics.environmentDetail = Number(G.value);
        })),
      (I.oninput = () =>
        Re(() => {
          z.graphics.sunShafts = Number(I.value) / 100;
        })),
      (O.onchange = () => {
        ((z.shaders = Jk(O.value)), qi(), Ce(), this.onQualityChange());
      }),
      (Q.onchange = () => {
        ((z.cameraBob = Q.checked), qi());
      }),
      this.buildDebugToggles());
    const We = () => {
      ((z.mobileLayoutEdit = !1),
        document.body.classList.remove("layout-edit"),
        qi());
    };
    ((j("layouteditbtn").onclick = () => {
      ((z.mobileLayoutEdit = !0),
        document.body.classList.add("layout-edit"),
        this.hideSettings());
    }),
      (j("layoutsave").onclick = We),
      (j("layoutreset").onclick = () => {
        Yy() === "portrait"
          ? (z.mobileLayoutPortrait = {})
          : (z.mobileLayout = {});
        for (const B of document.querySelectorAll(
          "[data-mobile-action], #mobile-stick-zone",
        ))
          for (const $ of [
            "left",
            "top",
            "right",
            "bottom",
            "transform",
            "--btn-scale",
          ])
            B.style.removeProperty($);
        (qi(), zm(this.mobileVisible, !0));
      }),
      (z.mobileLayoutEdit = !1),
      document.body.classList.remove("layout-edit"),
      document.querySelectorAll(".qbtn").forEach((B) => {
        B.onclick = () => {
          const $ = B.dataset.q;
          ($ === "custom" ? sA() : ((z.quality = $), (z.shaders = Qk[$])),
            qi(),
            Ce(),
            this.onQualityChange());
        };
      }));
    const it = j("fullscreentoggle"),
      ut = () => {
        it.textContent = z.autoFullscreen ? U("onLabel") : U("offLabel");
      };
    (ut(),
      (it.onclick = () => {
        var B, $, he;
        ((z.autoFullscreen = !z.autoFullscreen),
          qi(),
          ut(),
          z.autoFullscreen
            ? ($ = (B = document.documentElement).requestFullscreen) == null ||
              $.call(B).catch(() => {})
            : document.fullscreenElement &&
              ((he = document.exitFullscreen) == null || he.call(document)));
      }),
      this.buildBindList(),
      (j("bindreset").onclick = () => {
        (t$(),
          (this.listeningBind = null),
          this.buildBindList(),
          this.refreshPauseBinds());
      }),
      window.addEventListener(
        "keydown",
        (B) => {
          if (this.listeningBind) {
            if (
              (B.preventDefault(), B.stopPropagation(), B.code === "Escape")
            ) {
              ((this.listeningBind = null), this.buildBindList());
              return;
            }
            B.code === "Tab" ||
              B.code === "F11" ||
              B.code === "F12" ||
              (i$(this.listeningBind, B.code),
              (this.listeningBind = null),
              this.buildBindList(),
              this.refreshPauseBinds());
          }
        },
        !0,
      ),
      this.refreshPauseBinds());
    const gt = j("hotbar");
    for (let B = 0; B < 9; B++) {
      const $ = Sa(String(B + 1));
      (($.el.onclick = () => {
        !this.inventory ||
          !document.body.classList.contains("mobile") ||
          ((this.inventory.sel = B),
          this.renderHotbar(),
          this.onHotbarChange());
      }),
        gt.appendChild($.el),
        this.hotbarSlots.push($));
    }
    const ve = j("invgrid");
    for (let B = 0; B < Ic; B++) {
      const $ = Sa();
      (ve.appendChild($.el),
        ($.el.onclick = (he) =>
          this.slotClick("s", B, he.shiftKey, he.altKey, he.metaKey)),
        this.wireTransferSlot($.el, "s", B),
        ($.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "s", idx: B };
        }),
        ($.el.oncontextmenu = (he) => {
          (he.preventDefault(),
            !he.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", B)
              : this.slotClick("s", B, he.shiftKey, !0));
        }),
        this.wireAttachmentLongPress($.el, "s", B, () => {
          var he;
          return this.inventory && !this.inventory.creative
            ? (((he = this.inventory.storage[B]) == null ? void 0 : he.id) ?? 0)
            : 0;
        }),
        this.invGridSlots.push($));
    }
    const Y = j("invhotbar");
    for (let B = 0; B < 9; B++) {
      const $ = Sa(String(B + 1));
      (Y.appendChild($.el),
        ($.el.onclick = (he) =>
          this.slotClick("h", B, he.shiftKey, he.altKey, he.metaKey)),
        this.wireTransferSlot($.el, "h", B),
        ($.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "h", idx: B };
        }),
        ($.el.oncontextmenu = (he) => {
          (he.preventDefault(),
            !he.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", B)
              : this.slotClick("h", B, he.shiftKey, !0));
        }),
        this.wireAttachmentLongPress($.el, "h", B, () => {
          var he, fe;
          return (
            ((fe = (he = this.inventory) == null ? void 0 : he.hotbar[B]) ==
            null
              ? void 0
              : fe.id) ?? 0
          );
        }),
        this.invHotbarSlots.push($));
    }
    const ge = j("invarmor");
    if (ge)
      for (let B = 0; B < Uh; B++) {
        const $ = Sa();
        ($.el.classList.add("armor-slot"), ($.el.dataset.armor = ir[B]));
        const he = document.createElement("div");
        ((he.className = "armor-label"),
          (he.textContent = rA(ir[B])),
          $.el.appendChild(he),
          ge.appendChild($.el),
          ($.el.onclick = (fe) => {
            var be, Se, et;
            if (
              B === 0 &&
              fe.altKey &&
              ((et = ra(
                ((Se = (be = this.inventory) == null ? void 0 : be.armor[B]) ==
                null
                  ? void 0
                  : Se.id) ?? 0,
              )) == null
                ? void 0
                : et.slot) === "helmet"
            ) {
              this.openAttachModal("a", B);
              return;
            }
            this.slotClick("a", B, fe.shiftKey, fe.altKey, fe.metaKey);
          }),
          this.wireTransferSlot($.el, "a", B),
          ($.el.onmouseenter = () => {
            this.hoveredInventorySlot = { area: "a", idx: B };
          }),
          ($.el.oncontextmenu = (fe) => {
            (fe.preventDefault(),
              !fe.altKey || document.body.classList.contains("mobile")
                ? this.sellSlot("a", B)
                : this.slotClick("a", B, fe.shiftKey, !0));
          }),
          B === 0 &&
            this.wireAttachmentLongPress($.el, "a", B, () => {
              var fe, be;
              return (
                ((be = (fe = this.inventory) == null ? void 0 : fe.armor[B]) ==
                null
                  ? void 0
                  : be.id) ?? 0
              );
            }),
          this.armorSlots.push($));
      }
    (this.buildShop(),
      (j("shopsort").onchange = () => {
        (this.buildShop(), (j("shopgrid").scrollTop = 0));
      }));
    const Le = j("shopsearch");
    ((Le.oninput = () => {
      ((j("shopgrid").scrollTop = 0), this.buildShop());
    }),
      (j("shopsearchclear").onclick = () => {
        ((Le.value = ""), this.buildShop(), Le.focus());
      }),
      j("inventory").addEventListener("mousedown", (B) => {
        B.target === j("inventory") &&
          !document.body.classList.contains("mobile") &&
          this.dropPicked();
      }),
      (j("invsellzone").onclick = () => {
        this.sellPicked();
      }),
      document.addEventListener("keydown", (B) => {
        var he, fe;
        if (
          !(this.invOpen || this.chestOpen || this.furnaceOpen) ||
          this.qtyModalOpen ||
          this.attachModalOpen ||
          ((he = B.target) != null && he.matches("input,textarea,select")) ||
          this.containerPending
        )
          return;
        const $ = this.transferHovered;
        if ($) {
          if (/^Digit[1-9]$/.test(B.code)) {
            (B.preventDefault(), (this.transferCursor = null));
            const be = this.transferList($.area)[$.idx],
              Se = Number(B.code.slice(-1)) - 1;
            (be != null && be.id
              ? this.transferMove($.area, $.idx, "h", Se, be.count)
              : (fe = this.inventory.hotbar[Se]) != null &&
                fe.id &&
                this.transferMove(
                  "h",
                  Se,
                  $.area,
                  $.idx,
                  this.inventory.hotbar[Se].count,
                ),
              this.repaintTransfers());
          } else if (B.code === "KeyQ" && $.area !== "c" && $.area !== "f") {
            B.preventDefault();
            const be = this.transferList($.area)[$.idx];
            if (!(be != null && be.id)) return;
            ((this.transferCursor = {
              ...$,
              id: be.id,
              count: B.ctrlKey || B.metaKey ? be.count : 1,
            }),
              this.dropPicked());
          }
        }
      }),
      document.addEventListener("mouseup", () => {
        const B = this.transferDrag;
        this.transferDrag = null;
        const $ = this.transferCursor;
        if (!(!B || !$ || B.slots.length < 2 || this.containerPending)) {
          {
            const he = this.transferList($.area)[$.idx],
              fe = B.slots.filter((Se) => {
                const et = this.transferList(Se.area)[Se.idx];
                return (
                  et &&
                  et !== he &&
                  (!et.id || jh(he, et)) &&
                  (Se.area !== "a" ||
                    this.inventory.canEquipInSlot(he.id, Se.idx))
                );
              }),
              be = B.right ? 1 : Math.floor($.count / Math.max(1, fe.length));
            ((this.transferQueue = { slots: fe, each: be }),
              this.drainTransferQueue());
          }
          ((this.suppressTransferClick = !0),
            setTimeout(() => {
              this.suppressTransferClick = !1;
            }, 0));
        }
      }),
      (j("repairarmor").onclick = () => this.repairEquipment(0)),
      (j("repairweapons").onclick = () => this.repairEquipment(1)),
      (j("mapclose").onclick = () => this.closeMap()));
    const Oe = j("mapcanvas");
    (Oe.addEventListener("mousedown", (B) => {
      this.mapOpen &&
        ((this.mapDrag = { x: B.clientX, y: B.clientY }),
        (this.mapDragged = !1));
    }),
      Oe.addEventListener("mousemove", (B) => {
        if (!this.mapOpen) return;
        if (this.mapDrag) {
          const he = B.clientX - this.mapDrag.x,
            fe = B.clientY - this.mapDrag.y;
          Math.abs(he) + Math.abs(fe) > 3 && (this.mapDragged = !0);
          const be = Oe.getBoundingClientRect(),
            Se = (Os.MAP_CELLS * this.mapScale) / be.width;
          ((this.mapCenter.x -= he * Se),
            (this.mapCenter.z -= fe * Se),
            (this.mapDrag.x = B.clientX),
            (this.mapDrag.y = B.clientY),
            this.renderMap());
        }
        const $ = this.mapToWorld(Oe, B.clientX, B.clientY);
        j("mapinfo").textContent =
          this.mapMode !== "world"
            ? U("mapTargetHint", { x: Math.round($.x), z: Math.round($.z) })
            : U("mapCoordsHint", { x: Math.round($.x), z: Math.round($.z) });
      }),
      window.addEventListener("mouseup", () => {
        this.mapDrag = null;
      }),
      (j("mapclearmark").onclick = () => {
        var B;
        ((B = this.sfx) == null || B.uiTick(),
          this.clearWaypoint(),
          (j("mapinfo").textContent = U("mapMarkerCleared")));
      }),
      Oe.addEventListener("click", (B) => {
        var fe;
        if (!this.mapOpen || this.mapDragged) return;
        if (this.mapMode === "world") {
          const be = this.mapToWorld(Oe, B.clientX, B.clientY);
          (this.setWaypoint(be.x, be.z),
            (fe = this.sfx) == null || fe.uiTick(!0),
            (j("mapinfo").textContent = U("mapMarkerSet", {
              x: Math.round(be.x),
              z: Math.round(be.z),
            })));
          return;
        }
        const $ = this.mapToWorld(Oe, B.clientX, B.clientY),
          he =
            this.mapMode === "tank"
              ? x2
              : this.mapMode === "carrier"
                ? Af
                : this.mapMode === "nuclear"
                  ? Qh
                  : this.mapMode === "mortar"
                    ? Hd
                    : nr;
        if (
          Math.hypot($.x - this.himarsPos.x, $.z - this.himarsPos.z) > he ||
          (this.worldBorder &&
            this.worldBorder.radius > 0 &&
            !D4(this.worldBorder, $.x, $.z))
        ) {
          j("mapinfo").textContent = U("mapTargetOutOfRange", { range: he });
          return;
        }
        (this.mapLaunch($.x, $.z), this.closeMap());
      }));
    const Ve = (B) => {
      var fe;
      const $ =
          this.mapMode === "carrier"
            ? 128
            : this.mapMode === "nuclear"
              ? 512
              : this.mapMode === "tank" ||
                  this.mapMode === "himars" ||
                  this.mapMode === "mortar"
                ? 16
                : 64,
        he = Math.max(
          $,
          ((((fe = this.worldBorder) == null ? void 0 : fe.radius) ?? 0) *
            2.2) /
            Os.MAP_CELLS,
        );
      return Math.max(0.35, Math.min(he, B));
    };
    Oe.addEventListener(
      "wheel",
      (B) => {
        if (!this.mapOpen) return;
        B.preventDefault();
        const $ = this.mapToWorld(Oe, B.clientX, B.clientY);
        this.mapScale = Ve(this.mapScale * (B.deltaY > 0 ? 1.18 : 0.85));
        const he = this.mapToWorld(Oe, B.clientX, B.clientY);
        ((this.mapCenter.x += $.x - he.x),
          (this.mapCenter.z += $.z - he.z),
          this.renderMap());
      },
      { passive: !1 },
    );
    const Qe = new Map();
    let Je = 0;
    (Oe.addEventListener("pointerdown", (B) => {
      if (
        !(!this.mapOpen || B.pointerType === "mouse") &&
        (Oe.setPointerCapture(B.pointerId),
        Qe.set(B.pointerId, { x: B.clientX, y: B.clientY }),
        Qe.size === 2)
      ) {
        const [$, he] = [...Qe.values()];
        ((Je = Math.hypot($.x - he.x, $.y - he.y)), (this.mapDragged = !0));
      }
    }),
      Oe.addEventListener("pointermove", (B) => {
        if (!this.mapOpen || B.pointerType === "mouse") return;
        const $ = Qe.get(B.pointerId);
        if ($) {
          if (Qe.size === 1) {
            const he = B.clientX - $.x,
              fe = B.clientY - $.y;
            Math.abs(he) + Math.abs(fe) > 3 && (this.mapDragged = !0);
            const be = Oe.getBoundingClientRect(),
              Se = (Os.MAP_CELLS * this.mapScale) / be.width;
            ((this.mapCenter.x -= he * Se),
              (this.mapCenter.z -= fe * Se),
              ($.x = B.clientX),
              ($.y = B.clientY),
              this.renderMap());
          } else if (Qe.size === 2) {
            (($.x = B.clientX), ($.y = B.clientY));
            const [he, fe] = [...Qe.values()],
              be = Math.hypot(he.x - fe.x, he.y - fe.y);
            (Je > 0 &&
              be > 0 &&
              ((this.mapScale = Ve(this.mapScale * (Je / be))),
              this.renderMap()),
              (Je = be));
          }
        }
      }));
    const Z = (B) => {
      B.pointerType !== "mouse" &&
        (Qe.delete(B.pointerId),
        Qe.size < 2 && (Je = 0),
        Qe.size === 0 &&
          setTimeout(() => {
            this.mapDragged = !1;
          }, 80));
    };
    (Oe.addEventListener("pointerup", Z),
      Oe.addEventListener("pointercancel", Z));
    const W = [];
    for (const B of [
      j("chatbox"),
      j("mobilechatpopup").querySelector(".panel"),
    ]) {
      const $ = document.createElement("button");
      (($.type = "button"),
        ($.className = "chat-channel"),
        ($.onclick = () => l5()),
        B.prepend($),
        W.push($));
    }
    const ke = () => {
      for (const B of W)
        ((B.hidden = !Qz()),
          (B.dataset.channel = Go),
          (B.textContent =
            Go === "squad"
              ? z.language === "en"
                ? "Squad chat"
                : "Чат отряда"
              : Go === "team"
                ? z.language === "en"
                  ? "Team chat"
                  : "Командный чат"
                : z.language === "en"
                  ? "Global chat"
                  : "Общий чат"),
          (B.title =
            z.language === "en"
              ? "Switch channel · Tab with empty input"
              : "Сменить канал · Tab в пустом поле"),
          B.setAttribute("aria-label", B.textContent + ". " + B.title));
    };
    (window.addEventListener("chat-channel-changed", ke),
      window.addEventListener("squad-state-changed", ke),
      Vo(ke),
      ke(),
      window.addEventListener("access-changed", () => {
        (this.shopOpen && this.buildShop(),
          this.invOpen && this.renderInventory());
      }));
    const Ue = j("chatinput"),
      je = j("chatbox");
    (new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--chat-compose-height",
        `${je.getBoundingClientRect().height}px`,
      ),
    ).observe(je),
      Ue.addEventListener("pointerdown", (B) => {
        if (!document.body.classList.contains("mobile") || !Wp()) return;
        B.preventDefault();
        const $ = window.prompt(U("enterMessage"), Ue.value);
        $ !== null &&
          ((Ue.value = $),
          this.refreshChatSuggestion(),
          this.submitChat($) && ((Ue.value = ""), this.closeChat()));
      }),
      Ue.addEventListener("input", () => this.refreshChatSuggestion()),
      (j("chataccept").onclick = () => {
        (this.acceptChatSuggestion(), Ue.focus());
      }));
    const Ge = j("tprequest");
    for (const B of [
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click",
    ])
      Ge.addEventListener(B, ($) => $.stopPropagation());
    ((j("tpraccept").onclick = () => {
      (this.hideTeleportRequest(), this.onTeleportAnswer(!0));
    }),
      (j("tprdecline").onclick = () => {
        (this.hideTeleportRequest(), this.onTeleportAnswer(!1));
      }),
      Ue.addEventListener("keydown", (B) => {
        if ((B.stopPropagation(), B.key === "Tab")) {
          (B.preventDefault(),
            Ue.value.length
              ? this.acceptChatSuggestion(B.shiftKey ? -1 : 1)
              : l5());
          return;
        }
        if (B.key === "Enter") {
          if (B.isComposing) return;
          (B.preventDefault(),
            this.submitChat(Ue.value) && ((Ue.value = ""), this.closeChat()));
        } else if (B.key === "Escape") ((Ue.value = ""), this.closeChat());
        else if (B.key === "ArrowUp")
          (B.preventDefault(),
            this.chatHistIdx > 0 &&
              (this.chatHistIdx--,
              (Ue.value = this.chatHistory[this.chatHistIdx] ?? ""),
              Ue.setSelectionRange(Ue.value.length, Ue.value.length),
              this.refreshChatSuggestion()));
        else if (B.key === "ArrowDown")
          (B.preventDefault(),
            this.chatHistIdx < this.chatHistory.length &&
              (this.chatHistIdx++,
              (Ue.value = this.chatHistory[this.chatHistIdx] ?? ""),
              this.refreshChatSuggestion()));
        else if (B.key === "PageUp") {
          B.preventDefault();
          const $ = j("chatlog");
          (($.scrollTop = Math.max(0, $.scrollTop - $.clientHeight * 0.8)),
            (this.chatStickBottom = !1));
        } else if (B.key === "PageDown") {
          B.preventDefault();
          const $ = j("chatlog");
          (($.scrollTop = Math.min(
            $.scrollHeight,
            $.scrollTop + $.clientHeight * 0.8,
          )),
            (this.chatStickBottom =
              $.scrollHeight - $.scrollTop - $.clientHeight < 48));
        }
      }));
    const Mt = j("mobilechatinput");
    (this.refreshChatValidation(Mt, "mobilechatfeedback"),
      Mt.addEventListener("input", () =>
        this.refreshChatValidation(Mt, "mobilechatfeedback"),
      ));
    const ht = () => {
      (this.refreshChatValidation(Mt, "mobilechatfeedback"),
        this.submitChat(Mt.value) && ((Mt.value = ""), this.closeChat()));
    };
    ((j("mobilechatcancel").onclick = () => {
      ((Mt.value = ""), this.closeChat());
    }),
      (j("mobilechatsend").onclick = ht),
      Mt.addEventListener("keydown", (B) => {
        if ((B.stopPropagation(), B.key === "Tab" && !Mt.value.length)) {
          (B.preventDefault(), l5());
          return;
        }
        B.key === "Enter" &&
          !B.shiftKey &&
          !B.isComposing &&
          (B.preventDefault(), ht());
      }));
    const lt = j("chatlog");
    (lt.addEventListener("scroll", () => {
      this.chatStickBottom =
        lt.scrollHeight - lt.scrollTop - lt.clientHeight < 48;
    }),
      lt.addEventListener(
        "wheel",
        (B) => {
          this.chatOpen && B.stopPropagation();
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
    const s = j("playbtn"),
      o = j("solobtn");
    ((s.disabled = !0),
      (o.disabled = !0),
      (j("menu-error").textContent = U("loadingWorld")));
    try {
      return (
        (await this.onPlay(e, t, i)) !== !1 &&
        j("menu").classList.contains("hidden")
      );
    } catch (a) {
      return (
        this.showMenu(a instanceof Error ? a.message : U("serverCheckFailed")),
        !1
      );
    } finally {
      j("menu").classList.contains("hidden") ||
        ((s.disabled = !1), (o.disabled = !1));
    }
  }
  resolveSeed(e) {
    const t = e.trim();
    if (!t) return (Math.random() * 4294967296) >>> 0;
    if (/^-?\d+$/.test(t)) return Number(t) >>> 0;
    let i = 0;
    for (let s = 0; s < t.length; s++)
      i = (Math.imul(31, i) + t.charCodeAt(s)) | 0;
    return i >>> 0;
  }
  openWorlds() {
    (j("worlds").classList.remove("hidden"),
      this.showWorldCreate(!1),
      this.preparePointerForUi(),
      this.renderWorldsList());
  }
  hideWorlds() {
    j("worlds").classList.add("hidden");
  }
  showWorldCreate(e) {
    (j("worldcreate").classList.toggle("hidden", !e),
      j("worldnew").classList.toggle("hidden", e),
      j("worldslist").classList.toggle("hidden", e),
      e &&
        ((j("worldname").value = ""),
        (j("worldseed").value = ""),
        j("worldname").focus()));
  }
  async renderWorldsList() {
    const e = j("worldslist");
    let t = [];
    try {
      t = await pX(U("migratedWorldName"));
    } catch (i) {
      console.error("Could not list worlds:", i);
    }
    if (((e.innerHTML = ""), t.length === 0)) {
      const i = document.createElement("div");
      ((i.className = "worlds-empty"), (i.innerHTML = Nn("world")));
      const s = document.createElement("p");
      ((s.textContent = U("noWorldsYet")), i.append(s), e.appendChild(i));
      return;
    }
    for (const i of t) {
      const s = document.createElement("div");
      s.className = "world-row";
      const o = document.createElement("div");
      o.className = "world-info";
      const a = document.createElement("div");
      ((a.className = "world-name"), (a.textContent = i.name));
      const r = document.createElement("div");
      ((r.className = "world-sub"),
        (r.textContent = U("worldSubline", {
          seed: i.seed,
          date: new Date(i.lastPlayedAt).toLocaleDateString(
            z.language === "ru" ? "ru-RU" : "en-US",
          ),
        })),
        o.append(a, r));
      const l = document.createElement("button");
      ((l.className = "btn small"),
        (l.textContent = U("playButton")),
        (l.onclick = () => this.playWorld(i)));
      const c = document.createElement("button");
      ((c.className = "btn small danger"),
        (c.innerHTML = Nn("trash")),
        c.setAttribute("aria-label", U("deleteWorldTitle")),
        (c.title = U("deleteWorldTitle")),
        (c.onclick = async () => {
          if (confirm(U("deleteWorldConfirm", { name: i.name }))) {
            try {
              await yX(i.id);
            } catch (d) {
              console.error("Could not delete world:", d);
            }
            this.renderWorldsList();
          }
        }));
      const h = document.createElement("span");
      ((h.className = "world-glyph"),
        (h.innerHTML = Nn("world")),
        s.append(h, o, l, c),
        e.appendChild(s));
    }
  }
  playWorld(e) {
    (gX(e.id),
      this.hideWorlds(),
      oM(e.name),
      this.beginPlay(z.nick || U("defaultNick"), "local", {
        worldId: e.id,
        seed: e.seed,
      }));
  }
  async confirmCreateWorld() {
    const e = j("worldname").value.trim() || U("defaultWorldName"),
      t = this.resolveSeed(j("worldseed").value),
      i = {
        difficulty: j("worlddifficulty").value,
        keepInventory: j("worldkeepinv").checked,
        raidsEnabled: j("worldraids").checked,
        evacuationEnabled: j("worldevac").checked,
        defenseEnabled: j("worlddefense").checked,
        districtEnabled: j("worlddistrict").checked,
        weatherEnabled: j("worldweather").checked,
      };
    let s;
    try {
      s = await mX(e, t, i);
    } catch (o) {
      console.error("Could not create world:", o);
      return;
    }
    this.playWorld(s);
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
      const i = j(t);
      i == null ||
        i.addEventListener("pointerdown", (s) => {
          s.target === i &&
            ((t === "inventory" && (this.picked || this.transferCursor)) ||
              (t === "chest" && (this.chestPicked || this.transferCursor)) ||
              e(t));
        });
    }
  }
  initGhost() {
    const e = Sa();
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
        Lo(this.ghostSlot.canvas.getContext("2d"), e, this.atlas),
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
      const t = fd[this.picked.idx] ?? 0;
      this.updateGhost(t, 0, ia(t) > 1 ? "∞" : "");
    } else {
      const i = (
        this.picked.area === "h"
          ? e.hotbar
          : this.picked.area === "a"
            ? e.armor
            : e.storage
      )[this.picked.idx];
      this.updateGhost(
        (i == null ? void 0 : i.id) ?? 0,
        (i == null ? void 0 : i.count) ?? 0,
      );
    }
  }
  initQtyModal() {
    const e = j("qtyinput"),
      t = (o) => Math.max(0, Math.min(this.qtyMaxVal, Math.floor(o) || 0)),
      i = (o) => {
        ((e.value = String(t(o))), this.updateQtySum());
      };
    ((j("qtyminus").onclick = () => {
      var o;
      ((o = this.sfx) == null || o.uiTick(), i(Number(e.value || 0) - 1));
    }),
      (j("qtyplus").onclick = () => {
        var o;
        ((o = this.sfx) == null || o.uiTick(), i(Number(e.value || 0) + 1));
      }),
      (e.oninput = () => this.updateQtySum()),
      document.addEventListener("keydown", (o) => {
        this.qtyModalOpen &&
          (o.key === "Escape"
            ? (o.preventDefault(), this.closeQtyModal(null))
            : o.key === "Enter" && (o.preventDefault(), this.confirmQtyModal()),
          o.stopImmediatePropagation());
      }));
    const s = j("qtymodal");
    (s.addEventListener("mousedown", (o) => {
      o.target === s && this.closeQtyModal(null);
    }),
      (j("qtycancel").onclick = () => {
        var o;
        ((o = this.sfx) == null || o.uiTick(), this.closeQtyModal(null));
      }),
      (j("qtyconfirm").onclick = () => this.confirmQtyModal()));
  }
  openQtyModal(e) {
    ((this.qtyModalOpen = !0),
      j("qtymodal").classList.toggle("confirm-only", !!e.confirmOnly),
      (this.qtyMaxVal = Math.max(0, Math.floor(e.max))),
      (this.qtyLine = e.line),
      (j("qtytitle").textContent = e.title),
      (j("qtyconfirm").textContent = e.confirmLabel ?? "OK"),
      this.preparePointerForUi());
    const t = j("qtyinput");
    t.value = String(
      Math.max(0, Math.min(this.qtyMaxVal, Math.floor(e.initial))),
    );
    const i = j("qtypresets");
    i.innerHTML = "";
    for (const s of e.presets) {
      const o = document.createElement("button");
      ((o.className = "mini-btn"),
        (o.textContent = s.label),
        (o.onclick = () => {
          var a;
          ((a = this.sfx) == null || a.uiTick(),
            (t.value = String(
              Math.max(0, Math.min(this.qtyMaxVal, Math.floor(s.value))),
            )),
            this.updateQtySum());
        }),
        i.appendChild(o));
    }
    return (
      this.updateQtySum(),
      j("qtymodal").classList.remove("hidden"),
      setTimeout(() => {
        e.confirmOnly ? j("qtycancel").focus() : (t.focus(), t.select());
      }, 0),
      new Promise((s) => {
        this.qtyClose = s;
      })
    );
  }
  updateQtySum() {
    const e = j("qtyinput"),
      t = Math.max(
        0,
        Math.min(this.qtyMaxVal, Math.floor(Number(e.value) || 0)),
      ),
      { text: i, over: s } = this.qtyLine(t),
      o = j("qtysum");
    ((o.textContent = i),
      o.classList.toggle("over", s),
      i !== this.lastQtySum &&
        ((this.lastQtySum = i),
        o.classList.remove("bump"),
        o.offsetWidth,
        o.classList.add("bump")),
      (j("qtyconfirm").disabled = t <= 0 || s));
  }
  closeQtyModal(e) {
    if (!this.qtyModalOpen) return;
    ((this.qtyModalOpen = !1), j("qtymodal").classList.add("hidden"));
    const t = this.qtyClose;
    ((this.qtyClose = null), t == null || t(e));
  }
  confirmQtyModal() {
    var i;
    const e = j("qtyinput"),
      t = Math.max(
        0,
        Math.min(this.qtyMaxVal, Math.floor(Number(e.value) || 0)),
      );
    t <= 0 ||
      this.qtyLine(t).over ||
      ((i = this.sfx) == null || i.uiTick(!0), this.closeQtyModal(t));
  }
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
            this.modalNodes ??
              (this.modalNodes = document.getElementsByClassName("fc-modal")),
          ).some((t) => t !== e)
        : (
            this.modalNodes ??
            (this.modalNodes = document.getElementsByClassName("fc-modal"))
          ).length > 0) ||
      !!document.getElementById("sign-editor")
    );
  }
  preparePointerForUi() {
    (ar(), this.onUiOpen());
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
    document.addEventListener("keydown", (s) => {
      this.attachModalOpen &&
        (s.key === "Escape" && (s.preventDefault(), this.closeAttachModal()),
        s.stopImmediatePropagation());
    });
    const e = j("attachmodal");
    e.addEventListener("mousedown", (s) => {
      s.target === e && this.closeAttachModal();
    });
    const t = document.createElement("canvas");
    ((t.id = "attach3d"), j("attachboard").prepend(t));
    const i = document.createElement("div");
    ((i.id = "attachstats"),
      j("attachboard").after(i),
      (j("attachclose").onclick = () => this.closeAttachModal()));
  }
  wireAttachmentLongPress(e, t, i, s) {
    let o = null,
      a = 0,
      r = 0;
    const l = () => {
      o !== null && (clearTimeout(o), (o = null));
    };
    (e.addEventListener("pointerdown", (c) => {
      l();
      const h = s(),
        d = t === "a" && i === 0 && !!ra(h);
      (Ti(h) <= 0 && !d) ||
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
    var a;
    const i = this.inventory;
    if (!i) return;
    const s = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t],
      o =
        e === "a" &&
        t === 0 &&
        ((a = ra((s == null ? void 0 : s.id) ?? 0)) == null
          ? void 0
          : a.slot) === "helmet";
    !s ||
      (Ti(s.id) <= 0 && !o) ||
      ((this.attachModalOpen = !0),
      (this.attachTarget = { area: e, idx: t }),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      j("attachmodal").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  closeAttachModal() {
    this.attachModalOpen &&
      ((this.attachModalOpen = !1),
      (this.attachTarget = null),
      (this.attachPickerCat = null),
      cancelAnimationFrame(this.gunsmithFrame),
      (this.gunsmithKey = ""),
      j("attachmodal").classList.add("hidden"),
      this.anyOpen() || this.onResume());
  }
  currentAttachWeapon() {
    var i;
    const e = this.inventory,
      t = this.attachTarget;
    return !e || !t
      ? 0
      : (((i = (
          t.area === "h" ? e.hotbar : t.area === "a" ? e.armor : e.storage
        )[t.idx]) == null
          ? void 0
          : i.id) ?? 0);
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
    var a, r;
    const e = this.currentAttachWeapon(),
      t =
        ((a = this.attachTarget) == null ? void 0 : a.area) === "a" &&
        ((r = ra(e)) == null ? void 0 : r.slot) === "helmet";
    if (!t && Ti(e) <= 0) {
      this.closeAttachModal();
      return;
    }
    j("attachtitle").textContent = t
      ? `${Ki(e)} · ${z.language === "en" ? "helmet module" : "модуль шлема"}`
      : Ey(e, z.language);
    const i = j("attachbg"),
      s = i.getContext("2d");
    (s.clearRect(0, 0, i.width, i.height),
      s.setTransform(4, 0, 0, 4, 0, 0),
      Lo(s, t ? e : Ti(e), this.atlas),
      s.setTransform(1, 0, 0, 1, 0, 0),
      j("attachboard").classList.toggle("helmet-mode", t),
      t &&
        (j("attachboard").classList.remove("gunsmith"),
        j("attachstats").replaceChildren(),
        cancelAnimationFrame(this.gunsmithFrame),
        (this.gunsmithKey = "")));
    const o = Ti(e);
    for (const l of h0)
      j(`attachslot-${l}`).classList.toggle(
        "hidden",
        t ? l !== "scope" : !PC(o, l),
      );
    if (t) {
      const l = j("attachslot-scope");
      l.innerHTML = "";
      const c = sr(this.currentAttachSlot() ?? void 0);
      if ((l.classList.toggle("filled", c > 0), c > 0)) {
        const d = document.createElement("canvas");
        ((d.width = 40),
          (d.height = 40),
          Lo(d.getContext("2d"), c, this.atlas),
          l.appendChild(d));
      }
      const h = document.createElement("div");
      ((h.className = "attach-cat-label"),
        (h.textContent = z.language === "en" ? "Helmet optic" : "Оптика шлема"),
        l.appendChild(h),
        (l.onclick = () => {
          ((this.attachPickerCat =
            this.attachPickerCat === "helmetModule" ? null : "helmetModule"),
            this.renderAttachPicker());
        }),
        this.renderAttachAmmo(0),
        this.renderAttachPicker());
      return;
    }
    for (const l of h0) {
      const c = j(`attachslot-${l}`);
      c.innerHTML = "";
      const h = Cd(e, l);
      if ((c.classList.toggle("filled", h > 0), h > 0)) {
        const u = document.createElement("canvas");
        ((u.width = 40),
          (u.height = 40),
          Lo(u.getContext("2d"), h, this.atlas),
          c.appendChild(u));
      }
      const d = document.createElement("div");
      ((d.className = "attach-cat-label"),
        (d.textContent = hA(l)),
        c.appendChild(d),
        (c.onclick = () => {
          ((this.attachPickerCat = this.attachPickerCat === l ? null : l),
            this.renderAttachPicker());
        }));
    }
    (this.renderAttachAmmo(e),
      this.renderAttachPicker(),
      this.renderGunsmith(e));
  }
  renderGunsmith(e) {
    var p, m, y;
    const t = z.language === "en",
      i = j("attachboard"),
      s = j("attach3d");
    i.classList.add("gunsmith");
    for (const g of h0) {
      const b = j(`attachslot-${g}`),
        S = Cd(e, g),
        M = document.createElement("div");
      ((M.className = "attach-slot-state"),
        (M.textContent = S > 0 ? (Ki(S) ?? "") : t ? "Empty" : "Пусто"),
        b.appendChild(M));
    }
    const o =
        ((m = (p = this.currentAttachSlot()) == null ? void 0 : p.cosmetic) ==
        null
          ? void 0
          : m.skin) ?? "",
      a = `${e}:${o}`;
    if (a !== this.gunsmithKey) {
      this.gunsmithKey = a;
      try {
        this.gunsmith ?? (this.gunsmith = new Ny(s));
        const M = s.getBoundingClientRect();
        (this.gunsmith.resize(Math.max(200, M.width), Math.max(160, M.height)),
          this.gunsmith.showWeapon(e, o));
      } catch {}
      cancelAnimationFrame(this.gunsmithFrame);
      let g = performance.now(),
        b = "";
      const S = (M) => {
        var A, _;
        if (!this.attachModalOpen) return;
        const x = s.getBoundingClientRect(),
          T = `${Math.round(x.width)}x${Math.round(x.height)}`;
        (T !== b &&
          x.width > 0 &&
          ((b = T), (A = this.gunsmith) == null || A.resize(x.width, x.height)),
          (_ = this.gunsmith) == null || _.tick(Math.min(0.05, (M - g) / 1e3)),
          (g = M),
          (this.gunsmithFrame = requestAnimationFrame(S)));
      };
      this.gunsmithFrame = requestAnimationFrame(S);
    }
    const r = So(e),
      l = Ti(e),
      c = j("attachstats");
    c.replaceChildren();
    const h = (g, b, S) => {
        const M = document.createElement("div");
        M.className =
          "attach-stat" + (S === !0 ? " good" : S === !1 ? " bad" : "");
        const x = document.createElement("small");
        x.textContent = g;
        const T = document.createElement("b");
        ((T.textContent = b), M.append(x, T), c.appendChild(M));
      },
      d = this.weaponMagInfo(
        e,
        (y = this.currentAttachSlot()) == null ? void 0 : y.magazine,
      ),
      u = this.weaponMagInfo(l, void 0);
    d &&
      h(
        t ? "Magazine" : "Магазин",
        u && u.max !== d.max ? `${u.max} → ${d.max}` : String(d.max),
        r.extMag ? !0 : null,
      );
    const f =
      (r.scope > 0 ? La : 1) * (r.laser ? wy : 1) * (r.suppressor ? by : 1);
    (h(
      t ? "Spread" : "Разброс",
      f < 1 ? `−${Math.round((1 - f) * 100)}%` : t ? "stock" : "базовый",
      f < 1 ? !0 : null,
    ),
      h(
        t ? "Optic" : "Оптика",
        r.scope === 5
          ? t
            ? "Holo"
            : "Коллиматор"
          : r.scope > 0
            ? `×${r.scope}`
            : t
              ? "iron sights"
              : "мушка",
        r.scope > 0 ? !0 : null,
      ),
      h(
        t ? "Sound" : "Звук",
        r.suppressor
          ? t
            ? "suppressed"
            : "приглушён"
          : t
            ? "loud"
            : "громкий",
        r.suppressor ? !0 : null,
      ),
      (r.light || r.laser) &&
        h(
          t ? "Utility" : "Утилита",
          [
            r.laser ? (t ? "laser" : "лазер") : "",
            r.light ? (t ? "flashlight" : "фонарь") : "",
          ]
            .filter(Boolean)
            .join(" + "),
          !0,
        ));
  }
  renderAttachAmmo(e) {
    var r, l, c;
    const t = j("attachammo"),
      i = this.weaponMagInfo(
        e,
        (r = this.currentAttachSlot()) == null ? void 0 : r.magazine,
      ),
      s = sp(e, (l = this.currentAttachSlot()) == null ? void 0 : l.magazine);
    if (!i || !s || ((c = this.inventory) != null && c.creative)) {
      (t.classList.add("hidden"), (t.innerHTML = ""));
      return;
    }
    (t.classList.remove("hidden"), (t.innerHTML = ""));
    const o = document.createElement("span");
    o.innerHTML = U("magLoaded", {
      rounds: `<span class="rounds">${i.loaded}</span>`,
      max: i.max,
    });
    const a = document.createElement("button");
    ((a.className = "btn secondary"),
      (a.textContent = U("unloadMag")),
      (a.disabled = i.loaded <= 0),
      (a.onclick = () => this.unloadMagazine(e)),
      t.append(o, a));
  }
  unloadMagazine(e) {
    var r;
    const t = this.inventory,
      i = this.currentAttachSlot(),
      s = this.weaponMagInfo(e, i == null ? void 0 : i.magazine),
      o = sp(e, (r = this.currentAttachSlot()) == null ? void 0 : r.magazine);
    if (!t || !i || !s || !o) return;
    if (s.loaded <= 0) {
      this.showAttachHint(U("magEmpty"));
      return;
    }
    const a = t.deferChanges(() => {
      const l = t.addItem(o, s.loaded);
      return (l > 0 && ((i.magazine = jd(s.loaded - l, o)), t.save()), l);
    });
    if (a <= 0) {
      this.showAttachHint(U("noInventorySpace"));
      return;
    }
    (this.showAttachHint(U("unloadedRounds", { rounds: a })),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  renderAttachPicker() {
    var h;
    const e = j("attachpicker"),
      t = this.attachPickerCat,
      i = this.inventory,
      s = this.currentAttachWeapon(),
      o =
        t === "helmetModule" &&
        ((h = this.attachTarget) == null ? void 0 : h.area) === "a";
    if (!i || !t || (!o && Ti(s) <= 0)) {
      (e.classList.add("hidden"), (e.innerHTML = ""));
      return;
    }
    (e.classList.remove("hidden"), (e.innerHTML = ""));
    const a = document.createElement("div");
    if (
      ((a.className = "attach-picker-title"),
      (a.textContent =
        t === "helmetModule"
          ? z.language === "en"
            ? "Helmet optic"
            : "Оптика шлема"
          : hA(t)),
      e.appendChild(a),
      (t === "helmetModule"
        ? sr(this.currentAttachSlot() ?? void 0)
        : Cd(s, t)) > 0)
    ) {
      const d = document.createElement("button");
      ((d.className = "btn secondary"),
        (d.textContent = U("removeAttachment")),
        (d.onclick = () =>
          t === "helmetModule"
            ? this.removeHelmetModule()
            : this.removeAttachment(t)),
        e.appendChild(d));
      return;
    }
    const l = (t === "helmetModule" ? l$ : Pz).filter(
      (d) =>
        (t === "helmetModule" || n1[d] === t) &&
        (i.creative || i.countOf(d) > 0),
    );
    if (l.length === 0) {
      const d = document.createElement("div");
      ((d.className = "attach-picker-empty"),
        (d.textContent = U("noMatchingItems")),
        e.appendChild(d));
      return;
    }
    const c = document.createElement("div");
    c.className = "attach-picker-list";
    for (const d of l) {
      const u = document.createElement("div");
      u.className = "attach-picker-item";
      const f = document.createElement("canvas");
      ((f.width = 40), (f.height = 40), Lo(f.getContext("2d"), d, this.atlas));
      const p = document.createElement("div");
      ((p.className = "name"), (p.textContent = Ki(d) ?? ""));
      const m = document.createElement("div");
      ((m.className = "count"),
        (m.textContent = i.creative ? "∞" : `×${i.countOf(d)}`),
        u.append(f, p, m),
        (u.onclick = () =>
          t === "helmetModule"
            ? this.installHelmetModule(d)
            : this.installAttachment(t, d)),
        c.appendChild(u));
    }
    e.appendChild(c);
  }
  showAttachHint(e) {
    const t = j("attachhint");
    ((t.textContent = e),
      setTimeout(() => {
        t.textContent === e && (t.textContent = "");
      }, 2500));
  }
  pinMagazine(e, t, i) {
    const s = this.inventory,
      o = wM(t),
      a = wM(i);
    if (!s || o === a || !o || !Hc(t).length) return !0;
    const r = sp(t, e.magazine),
      l = Ug(e.magazine, o),
      c = Math.max(0, l - a);
    if (c > 0 && !s.creative) {
      const h = s.addItem(r, c);
      if (h < c) return (h > 0 && s.consumeItem(r, h), !1);
    }
    return ((e.magazine = jd(Math.min(l, a), r)), !0);
  }
  installAttachment(e, t) {
    const i = this.inventory,
      s = this.attachTarget;
    if (!i || !s || s.area === "a") return;
    const a = (s.area === "h" ? i.hotbar : i.storage)[s.idx],
      r = (a == null ? void 0 : a.id) ?? 0;
    if (Ti(r) <= 0) return;
    const l = Hz(r, t);
    i.deferChanges(() =>
      i.consumeItem(t, 1)
        ? (this.pinMagazine(a, r, l),
          (a.id = l),
          e === "suppressor" && (a.suppressorDurability = gM),
          i.save(),
          !0)
        : !1,
    ) &&
      (this.onWeaponIdChanged(r, l),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  removeAttachment(e) {
    const t = this.inventory,
      i = this.attachTarget;
    if (!t || !i || i.area === "a") return;
    const o = (i.area === "h" ? t.hotbar : t.storage)[i.idx],
      a = (o == null ? void 0 : o.id) ?? 0,
      r = Cd(a, e);
    if (r <= 0) return;
    const l = zz(a, e);
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
      this.showAttachHint(U("noInventorySpace"));
      return;
    }
    (this.onWeaponIdChanged(a, l),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory(),
      this.renderHotbar(),
      this.chestOpen && this.renderChest());
  }
  installHelmetModule(e) {
    var l;
    const t = this.inventory,
      i = this.currentAttachSlot();
    if (
      !t ||
      !i ||
      ((l = this.attachTarget) == null ? void 0 : l.area) !== "a" ||
      !Ql(e)
    )
      return;
    const s = Da(e),
      o = [...t.hotbar, ...t.storage].find((c) => c.id === e && c.count > 0),
      a = Math.max(
        0,
        Math.min(s, (o == null ? void 0 : o.suppressorDurability) ?? s),
      );
    let r = t.creative;
    (t.deferChanges(() => {
      (!t.creative && !t.consumeItem(e, 1)) ||
        ((i.magazine = e), (i.suppressorDurability = a), (r = !0), t.save());
    }),
      r &&
        (this.onHelmetModuleChanged(e, a),
        (this.attachPickerCat = null),
        this.renderAttachModal(),
        this.renderInventory()));
  }
  removeHelmetModule() {
    const e = this.inventory,
      t = this.currentAttachSlot(),
      i = sr(t ?? void 0);
    if (!e || !t || i <= 0) return;
    const s = Da(i),
      o = Math.max(0, Math.min(s, t.suppressorDurability ?? s));
    let a = e.creative ? 1 : 0;
    if (
      (e.deferChanges(() => {
        (!e.creative && ((a = e.addItem(i, 1, 0, o)), a < 1)) ||
          ((t.magazine = void 0), (t.suppressorDurability = 0), e.save());
      }),
      a < 1)
    ) {
      this.showAttachHint(U("noInventorySpace"));
      return;
    }
    (this.onHelmetModuleChanged(0, 0),
      (this.attachPickerCat = null),
      this.renderAttachModal(),
      this.renderInventory());
  }
  openWorldMap(e, t, i) {
    ((this.mapOpen = !0),
      (this.mapMode = "world"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.mapScale = 3.2),
      (this.mapSample = e),
      (this.mapLaunch = () => {}),
      (this.mapMarkers = i),
      (this.mapDrag = null),
      (j("maptitle").textContent = U("mapTitle")),
      (j("mapsubtitle").textContent = U("mapWorldSubtitle")),
      (j("mapclose").textContent = U("mapCloseEsc")),
      j("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openHimarsMap(e, t, i, s = () => [], o = !1, a = !1) {
    ((this.mapOpen = !0),
      (this.mapMode = a ? "tank" : o ? "mortar" : "himars"));
    const r = a ? x2 : o ? Hd : nr;
    ((this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (r * 2) / Os.MAP_CELLS));
    const l = this.worldBorder;
    (l &&
      l.radius > 0 &&
      l.radius * 1.1 < r &&
      ((this.mapCenter = { x: l.centerX, z: l.centerZ }),
      (this.mapScale = (l.radius * 2.2) / Os.MAP_CELLS)),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = s),
      (this.mapDrag = null),
      (j("maptitle").textContent = a
        ? z.language === "en"
          ? "Tank · precision strike"
          : "Танк · точный удар"
        : U(o ? "mapMortarTitle" : "mapHimarsTitle")),
      (j("mapsubtitle").textContent = U("mapRangeHint", { range: r })),
      (j("mapclose").textContent = U("mapCancelEsc")),
      j("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openCarrierMap(e, t, i, s = () => []) {
    ((this.mapOpen = !0),
      (this.mapMode = "carrier"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (Af * 2) / Os.MAP_CELLS),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = s),
      (this.mapDrag = null),
      (j("maptitle").textContent = U("mapCarrierTitle")),
      (j("mapsubtitle").textContent = U("mapRangeHint", { range: Af })),
      (j("mapclose").textContent = U("mapCancelEsc")),
      j("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  openNuclearMap(e, t, i, s = () => []) {
    ((this.mapOpen = !0),
      (this.mapMode = "nuclear"),
      (this.mapCenter = { x: t.x, z: t.z }),
      (this.himarsPos = { x: t.x, z: t.z }),
      (this.mapScale = (Qh * 2) / Os.MAP_CELLS),
      (this.mapSample = e),
      (this.mapLaunch = i),
      (this.mapMarkers = s),
      (this.mapDrag = null),
      (j("maptitle").textContent = U("mapNuclearTitle")),
      (j("mapsubtitle").textContent = U("mapRangeHint", { range: Qh })),
      (j("mapclose").textContent = U("mapCancelEsc")),
      j("himarsmap").classList.remove("hidden"),
      this.syncWaypointUi(),
      this.preparePointerForUi(),
      this.renderMap());
  }
  closeMap() {
    this.mapOpen &&
      ((this.mapOpen = !1),
      this.mapRefreshFrame && cancelAnimationFrame(this.mapRefreshFrame),
      (this.mapRefreshFrame = 0),
      j("himarsmap").classList.add("hidden"),
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
    var e;
    return ((e = this.waypoint) == null ? void 0 : e.planet) ===
      this.waypointPlanet
      ? this.waypoint
      : null;
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
        ? localStorage.setItem(db, JSON.stringify(this.waypoint))
        : localStorage.removeItem(db);
    } catch {}
    (this.syncWaypointUi(),
      this.onWaypointChange(),
      this.mapOpen && this.renderMap());
  }
  loadWaypoint() {
    try {
      const e = JSON.parse(localStorage.getItem(db) ?? "null");
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
        ? U("mapClearMarkerAt", { x: t.x, z: t.z })
        : U("mapClearMarker")));
  }
  mapToWorld(e, t, i) {
    const s = e.getBoundingClientRect(),
      o = Os.MAP_CELLS,
      a = o / 2,
      r = ((t - s.left) / s.width) * o,
      l = ((i - s.top) / s.height) * o;
    return {
      x: this.mapCenter.x + (r - a) * this.mapScale,
      z: this.mapCenter.z + (l - a) * this.mapScale,
    };
  }
  drawMapMarker(e, t, i, s, o = 5, a = e.canvas.width) {
    if ((s.kind === "player" || s.kind === "squad") && s.heading !== void 0) {
      const r = o * 1.8,
        l = -Math.sin(s.heading),
        c = -Math.cos(s.heading),
        h = Math.cos(s.heading),
        d = -Math.sin(s.heading);
      if (
        (e.beginPath(),
        e.arc(t, i, o * 2.4, 0, Math.PI * 2),
        (e.fillStyle = "rgba(8,20,32,.8)"),
        e.fill(),
        (e.fillStyle = s.color),
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
        s.kind === "squad" &&
          (e.beginPath(),
          e.arc(t, i, o * 2.1, 0, Math.PI * 2),
          (e.strokeStyle = s.color),
          (e.lineWidth = 1.2),
          e.stroke()),
        s.label)
      ) {
        (e.save(),
          (e.font = "600 11px system-ui"),
          (e.textAlign = "center"),
          (e.textBaseline = "top"),
          (e.lineWidth = 3),
          (e.strokeStyle = "#06101fe8"));
        const u = Math.max(50, Math.min(a - 50, t));
        (e.strokeText(s.label, u, i + o * 2.6, 100),
          (e.fillStyle = s.color),
          e.fillText(s.label, u, i + o * 2.6, 100),
          e.restore());
      }
    } else if (s.kind === "home") {
      ((e.fillStyle = s.color),
        e.fillRect(t - o, i - o, o * 2, o * 2),
        (e.lineWidth = 1.5),
        (e.strokeStyle = "rgba(0,0,0,0.75)"),
        e.strokeRect(t - o, i - o, o * 2, o * 2));
      return;
    } else if (s.kind === "vehicle" || s.kind === "himars") {
      SM(e, t, i, s, o);
      return;
    } else if (s.kind === "waypoint") {
      if (s.label) {
        (e.save(),
          (e.font = "600 10px system-ui"),
          (e.textAlign = "center"),
          (e.textBaseline = "bottom"),
          (e.lineWidth = 3),
          (e.strokeStyle = "#06101fe8"));
        const l = Math.max(50, Math.min(a - 50, t));
        (e.strokeText(s.label, l, i - o * 3.2, 96),
          (e.fillStyle = s.color),
          e.fillText(s.label, l, i - o * 3.2, 96),
          e.restore());
      }
      const r = o * 1.3;
      ((e.fillStyle = s.color),
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
    } else if (s.kind === "npc") {
      const r = o * 1.35;
      ((e.fillStyle = s.color),
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
    } else if (s.kind === "strike") {
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
      ((e.fillStyle = s.color), e.beginPath(), e.arc(t, i, o, 0, 7), e.fill());
    ((e.lineWidth = 1.5), (e.strokeStyle = "rgba(0,0,0,0.75)"), e.stroke());
  }
  drawRaidZone(e, t, i, s, o) {
    const a = this.raidZone;
    if (!a) return;
    const r = t / 2 + (a.x - s.x) * o,
      l = i / 2 + (a.z - s.z) * o,
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
  drawWorldObjectZones(e, t, i, s, o) {
    if (this.worldObjects.length !== 0) {
      (e.save(), e.beginPath(), e.rect(0, 0, t, i), e.clip());
      for (const a of this.worldObjects) {
        if (
          this.spawnHub &&
          Math.hypot(a.x - this.spawnHub.x, a.z - this.spawnHub.z) < 4
        )
          continue;
        const r = t / 2 + (a.x - s.x) * o,
          l = i / 2 + (a.z - s.z) * o,
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
  drawStrikeZones(e, t, i, s, o, a) {
    (e.save(), e.beginPath(), e.rect(0, 0, t, i), e.clip());
    for (const r of a) {
      if (r.kind !== "strike" || !r.radius) continue;
      const l = t / 2 + (r.x - s.x) * o,
        c = i / 2 + (r.z - s.z) * o,
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
  drawMapBase(e, t, i, s, o, a) {
    const r = s;
    ((s *= 2), (a *= r / s));
    let l = this.mapRasters.get(s);
    if (!l) {
      const d = document.createElement("canvas");
      d.width = d.height = s;
      const u = d.getContext("2d");
      ((l = {
        canvas: d,
        ctx: u,
        pixels: u.createImageData(s, s),
        key: "",
        at: 0,
      }),
        this.mapRasters.set(s, l));
    }
    const c = `${o.x}:${o.z}:${a}`,
      h = performance.now();
    if (l.key !== c || h - l.at >= 250) {
      ((l.key = c), (l.at = h));
      const d = l.pixels.data,
        u = s / 2;
      for (let f = 0; f < s; f++) {
        const p = Math.round(o.z + (f - u) * a);
        for (let m = 0; m < s; m++) {
          const y = this.mapSample(Math.round(o.x + (m - u) * a), p, a),
            g = y < 0 ? (((m >> 2) + (f >> 2)) & 1 ? 1054752 : 659736) : y,
            b = (f * s + m) * 4;
          ((d[b] = (g >> 16) & 255),
            (d[b + 1] = (g >> 8) & 255),
            (d[b + 2] = g & 255),
            (d[b + 3] = 255));
        }
      }
      l.ctx.putImageData(l.pixels, 0, 0);
    }
    (e.save(),
      (e.imageSmoothingEnabled = !1),
      e.drawImage(l.canvas, 0, 0, t, i),
      e.restore(),
      cI(
        e,
        t,
        i,
        o,
        t / (s * a),
        i / (s * a),
        this.worldBorder,
        z.language === "en" ? "WORLD BOUNDARY" : "ГРАНИЦА МИРА",
      ));
  }
  renderEquipmentStatus(e, t) {
    const i = j("equipment-status"),
      s = this.inventory;
    if (!i || !s) return;
    const o = Hc(e),
      a = JSON.stringify([
        s.armor,
        o.map((h) => [h, s.countOf(h)]),
        t,
        z.language,
      ]);
    if (a === this.equipmentKey) return;
    ((this.equipmentKey = a), i.replaceChildren());
    const r = document.createElement("div");
    r.className = "equipment-armor";
    const l = [E.HELMET_1, E.VEST_1, E.PANTS_1, E.BOOTS_1];
    (s.armor.forEach((h, d) => {
      const u = document.createElement("div");
      u.className = "equipment-row" + (h.id ? "" : " empty");
      const f = document.createElement("canvas");
      ((f.width = f.height = 40),
        Lo(f.getContext("2d"), h.id || l[d], this.atlas));
      const p = document.createElement("span");
      ((p.textContent = h.id
        ? `${Math.round(yM(h.id, h.durability) * 100)}%`
        : "—"),
        (u.title = h.id
          ? Ki(h.id)
          : z.language === "en"
            ? "Not equipped"
            : "Не надето"),
        u.classList.toggle("worn", !!h.id && yM(h.id, h.durability) < 0.25),
        u.append(p, f),
        r.append(u));
    }),
      i.append(r));
    const c = document.createElement("div");
    c.className = "equipment-reserves";
    for (const h of o) {
      const d = document.createElement("div");
      ((d.className = "equipment-row" + (h === t ? " selected" : "")),
        (d.title = Ki(h)),
        (d.dataset.ammo = String(h)));
      const u = document.createElement("canvas");
      ((u.width = u.height = 40), Lo(u.getContext("2d"), h, this.atlas));
      const f = document.createElement("span");
      ((f.textContent = String(s.countOf(h))), d.append(u, f), c.append(d));
    }
    i.append(c);
  }
  showAmmoPicker(e, t, i) {
    const s = j("ammo-picker");
    if (
      (s.replaceChildren(),
      s.classList.toggle("hidden", e.length === 0),
      !e.length)
    )
      return;
    const o = document.createElement("strong");
    ((o.textContent =
      z.language === "en" ? "Load ammunition" : "Зарядить патроны"),
      s.append(o),
      e.forEach((r, l) => {
        var f, p, m, y;
        const c = document.createElement("button");
        ((c.className = "ammo-option" + (r === t ? " selected" : "")),
          (c.dataset.ammo = String(r)),
          (c.disabled =
            !((f = this.inventory) != null && f.creative) &&
            (((p = this.inventory) == null ? void 0 : p.countOf(r)) ?? 0) <=
              0));
        const h = document.createElement("canvas");
        ((h.width = h.height = 40), Lo(h.getContext("2d"), r, this.atlas));
        const d = document.createElement("span");
        d.textContent = `${l + 1} · ${Ki(r)}`;
        const u = document.createElement("b");
        ((u.textContent =
          (m = this.inventory) != null && m.creative
            ? "∞"
            : String(
                ((y = this.inventory) == null ? void 0 : y.countOf(r)) ?? 0,
              )),
          c.append(h, d, u),
          c.addEventListener("pointerdown", (g) => {
            (g.preventDefault(), g.stopPropagation(), i(r));
          }),
          s.append(c));
      }));
    const a = document.createElement("small");
    ((a.textContent =
      z.language === "en"
        ? "1 / 2 · Wheel + click · Tap to load"
        : "1 / 2 · Колесо + клик · Коснитесь для выбора"),
      s.append(a));
  }
  rotateMinimap(e) {
    const t = j("minimapcanvas");
    t && (t.style.transform = `rotate(${e}rad)`);
  }
  renderMinimap(e, t, i) {
    const s = j("minimapcanvas");
    if (!s) return;
    this.mapSample = e;
    const o = s.getContext("2d"),
      a = Math.ceil(Os.MINIMAP_CELLS * 1.5),
      r = 2.2 / z.minimapZoom;
    ((s.dataset.blocksPerCell = String(r)),
      this.drawMapBase(o, s.width, s.height, a, t, r));
    const l = s.width / a;
    (this.drawWorldObjectZones(o, s.width, s.height, t, l / r),
      this.drawRaidZone(o, s.width, s.height, t, l / r),
      this.drawQuestZone(o, s.width, s.height, t, l / r),
      this.drawStrikeZones(o, s.width, s.height, t, l / r, i));
    const c = Os.MINIMAP_CELLS * 2.2 * 0.5;
    for (const h of i) {
      if (h.kind === "player") continue;
      const d = h.x - t.x,
        u = h.z - t.z,
        f =
          h.friendly || h.kind === "home" || h.kind === "waypoint"
            ? Os.MINIMAP_CELLS * r * 0.5
            : c;
      if (Math.abs(d) > f || Math.abs(u) > f) continue;
      const p = s.width / 2 + (d / r) * l,
        m = s.height / 2 + (u / r) * l;
      this.drawMapMarker(o, p, m, h, h.kind === "home" ? 4.5 : 4);
    }
  }
  renderMap() {
    const e = j("mapcanvas");
    e.dataset.blocksPerCell = this.mapScale.toFixed(3);
    const t = e.getContext("2d"),
      i = Os.MAP_CELLS,
      s = e.width / i;
    (this.drawMapBase(t, e.width, e.height, i, this.mapCenter, this.mapScale),
      this.drawWorldObjectZones(
        t,
        e.width,
        e.height,
        this.mapCenter,
        s / this.mapScale,
      ),
      this.drawRaidZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        s / this.mapScale,
      ),
      this.drawQuestZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        s / this.mapScale,
      ),
      this.drawSpawnZone(
        t,
        e.width,
        e.height,
        this.mapCenter,
        s / this.mapScale,
      ));
    const o = this.mapMarkers().sort(
      (a, r) => +(a.kind === "player") - +(r.kind === "player"),
    );
    (this.drawStrikeZones(
      t,
      e.width,
      e.height,
      this.mapCenter,
      s / this.mapScale,
      o,
    ),
      this.mapMode === "world" &&
        t_(
          t,
          e.width,
          e.height,
          this.mapCenter,
          s / this.mapScale,
          this.mapLabels(s / this.mapScale),
        ));
    for (const a of o) {
      const r = e.width / 2 + ((a.x - this.mapCenter.x) / this.mapScale) * s,
        l = e.height / 2 + ((a.z - this.mapCenter.z) / this.mapScale) * s;
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
          ((this.himarsPos.x - this.mapCenter.x) / this.mapScale) * s,
        r =
          e.height / 2 +
          ((this.himarsPos.z - this.mapCenter.z) / this.mapScale) * s;
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
              ? P.TANK
              : this.mapMode === "mortar"
                ? P.MORTAR
                : void 0,
        },
        5.5,
      );
      const l =
        this.mapMode === "tank"
          ? x2
          : this.mapMode === "carrier"
            ? Af
            : this.mapMode === "nuclear"
              ? Qh
              : this.mapMode === "mortar"
                ? Hd
                : nr;
      (t.beginPath(),
        t.arc(a, r, (l / this.mapScale) * s, 0, Math.PI * 2),
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
      (j("invrepairnotice").textContent = ""),
      j("menu").classList.remove("hidden"),
      j("hud").classList.add("hidden"),
      (j("menu-error").textContent = e));
  }
  startGame() {
    (j("menu").classList.add("hidden"),
      j("worlds").classList.add("hidden"),
      j("hud").classList.remove("hidden"));
  }
  setMobileActions(e) {
    var s;
    if (!document.body.classList.contains("mobile")) return;
    if (z.mobileLayoutEdit) {
      for (const o of document.querySelectorAll("[data-mobile-action]"))
        o.classList.remove("hidden");
      ((this.mobileVisible = Object.keys(e)), zm(this.mobileVisible));
      return;
    }
    const t = [],
      i = Tj();
    for (const [o, a] of Object.entries(e)) {
      const r = a && !(i && (o === "tab" || o === "chat"));
      ((s = document.getElementById(o === "map" ? "minimap" : `mob${o}`)) ==
        null || s.classList.toggle("hidden", !r),
        r && t.push(o));
    }
    ((this.mobileVisible = t), zm(t));
  }
  setMobileLightState(e, t) {
    const i = document.getElementById(`mob${e}`);
    if (!i) return;
    const s = String(t),
      o = U(
        e === "flashlight"
          ? t
            ? "flashlightOn"
            : "flashlightOff"
          : t
            ? "headlightsOn"
            : "headlightsOff",
      );
    (i.getAttribute("aria-pressed") !== s &&
      (i.classList.toggle("active", t), i.setAttribute("aria-pressed", s)),
      i.getAttribute("aria-label") !== o && i.setAttribute("aria-label", o));
  }
  initMobileButtons() {
    for (const e of document.querySelectorAll(
      "#mobile-controls [data-mobile-action]",
    )) {
      const t = e.dataset.mobileAction ?? "",
        i = Cj[t];
      i && (e.dataset.role = i);
      const s = kj[t];
      s && this.setMobileIcon(e.id, s);
    }
    (document.body.classList.toggle("m-labels", z.mobileLabels),
      document.body.classList.toggle("m-chat-off", !z.mobileChat),
      Vo(() => {
        const e = [...this.mobileIconCache];
        this.mobileIconCache.clear();
        for (const [t, i] of e) this.setMobileIcon(t, i);
      }));
  }
  setMobileIcon(e, t) {
    var s;
    if (this.mobileIconCache.get(e) === t || !Lj(t)) return;
    const i = document.getElementById(e);
    if (i) {
      if (
        ((s = i.querySelector(":scope > .m-ico")) == null || s.remove(),
        i.insertAdjacentHTML("afterbegin", Ij(t)),
        !i.querySelector(":scope > .tool-mode-label"))
      ) {
        let o = i.querySelector(":scope > .m-cap");
        o ||
          ((o = document.createElement("span")),
          (o.className = "m-cap"),
          o.setAttribute("aria-hidden", "true"),
          i.querySelector(":scope > .m-ico").after(o));
        const a = Pj(t);
        ((o.textContent = a),
          !i.dataset.i18nAria &&
            !i.hasAttribute("aria-pressed") &&
            i.setAttribute("aria-label", a));
      }
      this.mobileIconCache.set(e, t);
    }
  }
  setMobileCue(e, t) {
    const i = document.getElementById(e);
    if (!i) return;
    const s =
        t.progress !== void 0 && t.progress >= 0 ? Math.min(1, t.progress) : -1,
      o = `${+!!t.ready}${+!!t.attention}${s < 0 ? "-" : s.toFixed(2)}`;
    this.mobileCueCache.get(e) !== o &&
      (this.mobileCueCache.set(e, o),
      i.classList.toggle("ready", !!t.ready),
      i.classList.toggle("attention", !!t.attention),
      i.classList.toggle("busy", s >= 0),
      s >= 0
        ? i.style.setProperty("--p", s.toFixed(2))
        : i.style.removeProperty("--p"));
  }
  get loading() {
    return this.loader ?? (this.loader = new MY());
  }
  showLoading(e, t, i) {
    e ? this.loading.show(t ?? U("loadingWorld"), i) : this.loading.hide();
  }
  showSettings() {
    ((this.settingsOpen = !0),
      (this.listeningBind = null),
      this.buildBindList(),
      j("settingsmainmenu").classList.toggle(
        "hidden",
        j("hud").classList.contains("hidden"),
      ),
      j("settings").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  hideSettings() {
    ((this.settingsOpen = !1),
      (this.listeningBind = null),
      j("settings").classList.add("hidden"));
  }
  buildBindList() {
    const e = j("bindlist");
    if (e) {
      e.innerHTML = "";
      for (const t of Zk) {
        const i = document.createElement("div");
        i.className = "bind-row";
        const s = document.createElement("div");
        ((s.className = "bind-label"), (s.textContent = nA(t, z.language)));
        const o = document.createElement("button");
        ((o.type = "button"),
          (o.className =
            "bind-btn" + (this.listeningBind === t ? " listening" : "")),
          (o.textContent =
            this.listeningBind === t ? "…" : gs(z.binds[t], z.language)),
          (o.onclick = () => {
            ((this.listeningBind = t), this.buildBindList());
          }),
          i.append(s, o),
          e.appendChild(i));
      }
    }
  }
  refreshPauseBinds() {
    const e = j("pausebinds");
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
    if (lr()) {
      e.textContent = U("pauseTouchControls");
      return;
    }
    e.innerHTML = `
      <div><b>${U("lmb")}</b> — ${U("pbFireBreak")}</div>
      <div><b>${U("rmb")}</b> — ${U("pbAimPlace")}</div>
      <div><b>Tab</b> — ${U("pbPlayerList")}</div>
      <div><b>1-9</b> — ${U("pbHotbar")}</div>
      <div><b>/</b> — ${U("pbCommand")}</div>
      ${t.map((i) => `<div><b>${gs(z.binds[i], z.language) || "—"}</b> — ${nA(i, z.language).toLowerCase()}</div>`).join("")}
    `;
  }
  showPause() {
    ((this.pauseOpen = !0),
      j("pausesave").classList.toggle("hidden", !this.localMode),
      (j("disconnectbtn").textContent = U(
        this.localMode ? "quitToWorldsButton" : "disconnectButton",
      )),
      j("pause").classList.remove("hidden"),
      this.preparePointerForUi());
  }
  resumeFromPause() {
    return !this.pauseOpen || this.settingsOpen
      ? !1
      : (this.hidePause(), this.onResume(), !0);
  }
  hidePause() {
    ((this.pauseOpen = !1), j("pause").classList.add("hidden"));
  }
  showDeath(e, t = !1) {
    if (((this.deathOpen = e), j("death").classList.toggle("hidden", !e), !e))
      return;
    const i = z.language === "en";
    ((j("death").querySelector(".sub").textContent = t
      ? i
        ? "Your gear stays with you on this server."
        : "На этом сервере снаряжение остаётся при вас."
      : i
        ? "Your backpack stayed where you fell. Go back for it — the spot is marked on your compass and map."
        : "Рюкзак с вещами остался на месте гибели. Вернитесь за ним — точка отмечена на компасе и карте."),
      this.setDeathCountdown(3),
      this.preparePointerForUi());
  }
  setDeathCountdown(e) {
    const t = j("respawnbtn"),
      i = z.language === "en",
      s = Math.ceil(Math.max(0, e)),
      o =
        s > 0
          ? i
            ? `Respawning in ${s}…`
            : `Возрождение через ${s}…`
          : U("respawnButton");
    t.textContent !== o && (t.textContent = o);
  }
  setRaidStatus(e, t, i, s, o, a) {
    const r = j("raidhud");
    if (!r) return;
    if ((document.body.classList.toggle("raid-active", e), !e)) {
      (r.classList.add("hidden"), this.setRaidLeaderboard([]));
      return;
    }
    r.classList.remove("hidden");
    const l = j("raidwave"),
      c = j("raidsoldiers"),
      h = j("raidvehicles"),
      d = j("raidprize");
    (l &&
      (l.textContent = U("raidWave", { wave: t, maxWaves: i, active: s + o })),
      c && (c.textContent = String(s)),
      h && (h.textContent = String(o)),
      d && (d.textContent = U("raidPrize", { reward: a })));
  }
  setRaidZone(e) {
    this.raidZone = e;
  }
  setWorldObjects(e) {
    this.worldObjects = e;
  }
  setSiteKinds(e) {
    this.siteKinds = e;
  }
  mapLabels(
    e,
    t = this.mapCenter,
    i = j("mapcanvas").width,
    s = j("mapcanvas").height,
  ) {
    const o = z.language === "en",
      a = [];
    this.spawnHub &&
      a.push({
        x: this.spawnHub.x,
        z: this.spawnHub.z,
        text: Ns(this.spawnHub.name, z.language),
        kind: "spawn",
        radius: this.spawnHub.radius,
      });
    for (const r of this.worldObjects)
      (this.spawnHub &&
        Math.hypot(r.x - this.spawnHub.x, r.z - this.spawnHub.z) < 4) ||
        a.push({
          x: r.x,
          z: r.z,
          text: Ns(r.name, z.language),
          kind: Dj(this.siteKinds.get(r.id)),
          radius: r.radius,
          held: this.heldSites.has(r.id),
        });
    if (this.mapSeed !== null && e >= i / 1600) {
      const r = i / e / 2 + 220,
        l = s / e / 2 + 220;
      for (
        let c = Math.floor((t.x - r) / 640);
        c <= Math.floor((t.x + r) / 640);
        c++
      )
        for (
          let h = Math.floor((t.z - l) / 640);
          h <= Math.floor((t.z + l) / 640);
          h++
        ) {
          const d = YS(this.mapSeed, c, h);
          d &&
            a.push({
              x: d.x,
              z: d.z,
              text: Ak[d.kind][o ? 1 : 0],
              kind: "landmark",
              radius: d.radius,
            });
        }
    }
    return a;
  }
  drawNavigationMapOverlay(e, t, i, s, o, a) {
    (this.drawSpawnZone(e, t, i, s, o),
      this.drawRaidZone(e, t, i, s, o),
      t_(e, t, i, s, o, this.mapLabels(o, s, t, i)));
    for (const r of a) {
      if (!["player", "squad", "waypoint", "home"].includes(r.kind ?? ""))
        continue;
      const l = t / 2 + (r.x - s.x) * o,
        c = i / 2 + (r.z - s.z) * o;
      l < 0 ||
        l > t ||
        c < 0 ||
        c > i ||
        this.drawMapMarker(e, l, c, r, r.kind === "player" ? 6.5 : 4.6, t);
    }
  }
  drawSpawnZone(e, t, i, s, o) {
    const a = this.spawnHub;
    if (!a || a.radius <= 0) return;
    const r = t / 2 + (a.x - s.x) * o,
      l = i / 2 + (a.z - s.z) * o,
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
  setQuestStatus(e, t, i, s, o, a, r, l) {
    const c = j("questhud");
    if (!c) return;
    if (e === 0) {
      (c.classList.add("hidden"),
        (this.questEndAt = 0),
        (this.questMarkers = []),
        (this.lastQuestDistText = ""),
        (j("questdistance").textContent = ""));
      return;
    }
    (c.classList.remove("hidden"),
      (this.questEndAt = Date.now() + s * 1e3),
      (j("questname").textContent = t),
      (j("questobjective").textContent = i));
    const h = j("questcount");
    h &&
      (h.textContent =
        e === 2
          ? U("questCompletedStage")
          : `${o} ${z.language === "en" ? "soldiers" : "бойцов"} · ${a} ${z.language === "en" ? "vehicles" : "машин"}`);
    const d = j("questreward");
    (d && (d.textContent = U("questRewardLine", { money: r, xp: l })),
      this.updateQuestTimer());
  }
  setQuestDistance(e) {
    const t = j("questdistance");
    if (!t || this.questMarkers.length === 0) {
      t &&
        this.lastQuestDistText !== "" &&
        ((this.lastQuestDistText = ""), (t.textContent = ""));
      return;
    }
    const i =
        this.questMarkers.find((a) => a.kind === 1) ?? this.questMarkers[0],
      s = Math.round(Math.hypot(i.x - e.x, i.z - e.z)),
      o = U("questDistanceObjective", { blocks: s });
    o !== this.lastQuestDistText &&
      ((this.lastQuestDistText = o), (t.textContent = o));
  }
  updateQuestTimer() {
    if (this.questEndAt <= 0) return;
    const e = j("questtimer");
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
      ...this.questMarkers.map((e) => ({ x: e.x, z: e.z, color: bX })),
      ...this.operationPoints,
    ];
  }
  drawQuestZone(e, t, i, s, o) {
    for (const a of this.operationPoints) {
      const r = t / 2 + (a.x - s.x) * o,
        l = i / 2 + (a.z - s.z) * o,
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
        const r = t / 2 + (a.x - s.x) * o,
          l = i / 2 + (a.z - s.z) * o,
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
    const t = j("raidleaderboard");
    if (!t || (t.replaceChildren(), !e.length)) return;
    const i = document.createElement("div");
    ((i.className = "lead-title"),
      (i.textContent = U("raidLeaders")),
      t.appendChild(i));
    const s = z.language === "en";
    e.forEach((o, a) => {
      const r = document.createElement("div"),
        l =
          Math.floor((o.repair ?? 0) / 25) +
          (o.rescues ?? 0) * 12 +
          (o.objectives ?? 0) * 15 +
          (o.transport ?? 0) * 6;
      ((r.textContent = `${a + 1}. ${o.name} — ${o.points} ${s ? "pts" : "очк."} · ${s ? "combat" : "бой"} ${o.infantry + o.vehicles * 10} · ${s ? "support" : "помощь"} ${l}`),
        (r.title = `${s ? "Repaired" : "Ремонт"}: ${o.repair ?? 0} HP · ${s ? "Rescues" : "Спасения"}: ${o.rescues ?? 0} · ${s ? "Objectives" : "Задачи"}: ${o.objectives ?? 0} · ${s ? "Deliveries" : "Доставка"}: ${o.transport ?? 0}`),
        t.appendChild(r));
    });
  }
  setBalance(e) {
    var i, s;
    const t = e - this.balance;
    (t < 0 &&
      this.pendingSpend !== null &&
      Date.now() - this.pendingSpendAt < 5e3 &&
      ((this.pendingSpend = null),
      (i = this.sfx) == null || i.buy(),
      this.flashBalance("spend", -t)),
      (this.balance = e));
    for (const o of ["shopbalance", "balancehud"]) {
      const a = j(o);
      ((s = a.firstChild) == null ? void 0 : s.nodeType) === Node.TEXT_NODE
        ? (a.firstChild.textContent = `$${e}`)
        : a.insertBefore(document.createTextNode(`$${e}`), a.firstChild);
    }
    (this.shopOpen && t !== 0 && this.buildShop(),
      this.invOpen && this.renderEquipmentRepair());
  }
  setProgress(e) {
    ((this.currentXp = Math.max(0, Math.floor(e))),
      this.invOpen && this.renderRankProgress());
  }
  flashBalance(e, t) {
    for (const s of ["shopbalance", "balancehud"]) {
      const o = j(s);
      (o.classList.remove("balpop-gain", "balpop-spend"),
        o.offsetWidth,
        o.classList.add(e === "gain" ? "balpop-gain" : "balpop-spend"));
    }
    const i = document.createElement("span");
    ((i.className = `balfloat ${e}`),
      (i.textContent = `${e === "gain" ? "+" : "−"}$${t}`),
      j("shopbalance").appendChild(i),
      setTimeout(() => i.remove(), 900));
  }
  showMineGain(e) {
    const t = j("minegain");
    ((t.textContent = `+1 ${e}`),
      t.classList.remove("show"),
      t.offsetWidth,
      t.classList.add("show"));
  }
  showTargetScore(e, t, i) {
    const s = j("targetscore");
    s.innerHTML = "";
    const o = document.createElement("span");
    ((o.className = "ts-score"), (o.textContent = `+${e}`));
    const a = document.createElement("span");
    ((a.className = "ts-total"),
      (a.textContent = U("targetScoreTotal", {
        total: t,
        shots: i,
        avg: (t / Math.max(1, i)).toFixed(1),
      })),
      s.append(o, a),
      s.classList.remove("show"),
      s.offsetWidth,
      s.classList.add("show"));
  }
  setDroneSignal(e) {
    const t = j("dronesignal");
    t.style.opacity = e <= 0 ? "0" : String(Math.min(0.85, 0.25 + e * 0.6));
  }
  openShop() {
    const e = !this.shopOpen;
    ((this.shopOpen = !0), (this.shopCategory = "all"));
    const t = j("shopsearch");
    ((t.value = ""),
      (j("shopgrid").scrollTop = 0),
      this.buildShop(),
      j("shop").classList.remove("hidden"),
      this.setBalance(this.balance),
      e && this.preparePointerForUi(),
      document.body.classList.contains("mobile") ||
        requestAnimationFrame(() => t.focus()));
  }
  closeShop() {
    this.shopOpen && ((this.shopOpen = !1), j("shop").classList.add("hidden"));
  }
  buildShop() {
    var d, u;
    const e = j("shopgrid"),
      t = e.scrollTop,
      i = new Set(
        [...e.querySelectorAll(".shopitem")]
          .filter((f) => {
            var p;
            return (p = f.querySelector("details")) == null ? void 0 : p.open;
          })
          .map((f) => f.dataset.itemId),
      );
    e.innerHTML = "";
    const s = (((d = j("shopsearch")) == null ? void 0 : d.value) ?? "")
        .trim()
        .toLocaleLowerCase(),
      o = {
        property: z.language === "en" ? "Territory" : "Территория",
        casino: z.language === "en" ? "Slot machines" : "Игровые автоматы",
        blueprint: z.language === "en" ? "Blueprints" : "Чертежи",
        explosive:
          z.language === "en"
            ? "Explosives & detonators"
            : "Взрывчатка и детонаторы",
        all: U("catAll"),
        weapon: U("catWeapon"),
        ammo: U("catAmmo"),
        resource: U("catResource"),
        tool: U("catTool"),
        medical: U("catMedical"),
        vehicle: U("catVehicle"),
        unit: U("catUnit"),
        armor: U("catArmor"),
        block: U("catBlock"),
        nature: U("catNature"),
        food: U("catFood"),
      },
      a = g4.filter((f) => f.buyable !== !1 && (f.id !== E.AXE || fw(!0))),
      r = new Map();
    for (const f of a) r.set(f.category, (r.get(f.category) ?? 0) + 1);
    this.buildShopCategories(o, a, r);
    const l = a.filter(
        (f) =>
          (this.shopCategory === "all" || f.category === this.shopCategory) &&
          (!s || ad(f.id).toLocaleLowerCase().includes(s)),
      ),
      c = Wj(l, j("shopsort").value, ad, z.language);
    if (
      ((j("shopresultcount").textContent = U("shopResultCount", {
        count: c.length,
      })),
      j("shopsearchclear").classList.toggle("visible", s.length > 0),
      !c.length)
    ) {
      const f = document.createElement("div");
      ((f.className = "shop-empty"),
        (f.textContent = U("shopNoResults")),
        e.appendChild(f));
      return;
    }
    if (
      this.balance <= 0 &&
      !((u = this.inventory) != null && u.creative) &&
      !s
    ) {
      const f = document.createElement("div");
      f.className = "shop-broke";
      const p = z.language === "en",
        m = lr(),
        y = document.createElement("b");
      y.textContent = p
        ? "No money yet? Earn your first dollars"
        : "Пока нет денег? Заработайте первые доллары";
      const g = document.createElement("span");
      ((g.textContent = p
        ? `Leave the safe zone, mine wood, stone or ore, then sell it here: ${m ? "drag an item onto the sell zone in your inventory" : "right-click an item in your inventory"}. Choose field missions in the pause menu.`
        : `Выйдите из безопасной зоны, добудьте дерево, камень или руду и продайте их здесь: ${m ? "перетащите предмет в зону продажи в инвентаре" : "ПКМ по предмету в инвентаре"}. Полевые задания доступны в меню паузы.`),
        f.append(y, g),
        e.appendChild(f));
    }
    let h = "";
    for (const f of c) {
      if (this.shopCategory === "all" && f.category !== h) {
        h = f.category;
        const L = document.createElement("div");
        ((L.className = "shop-category"),
          (L.textContent = o[h] ?? h),
          e.appendChild(L));
      }
      const p = document.createElement("div");
      ((p.className = "shopitem"), (p.dataset.itemId = String(f.id)));
      const m = a$(f.id);
      (f.category === "armor" || m) && p.classList.add("shop-armor");
      const y = document.createElement("canvas");
      ((y.width = 40),
        (y.height = 40),
        Lo(y.getContext("2d"), f.id, this.atlas));
      const g = document.createElement("div");
      g.className = "shop-item-meta";
      const b = document.createElement("div");
      ((b.className = "name"), (b.textContent = ad(f.id)));
      const S = document.createElement("div");
      S.className = "price";
      const M = ra(f.id),
        x = Zc(f.id),
        T = z.language === "en",
        A = document.createElement("div");
      A.className = "shop-item-facts";
      const _ = document.createElement("div");
      if (
        ((_.className = "shop-item-description"),
        (S.textContent = `$${f.price} · ${U("sale")} $${qh(f.id)}`),
        f.id === v.OWNERSHIP_TOTEM &&
          (p.classList.add("shop-property"),
          (A.textContent = T
            ? "65 × 65 · all heights · up to 10 claims"
            : "65 × 65 · вся высота · до 10 приватов"),
          (_.textContent = T
            ? "Place outside generated sites to protect your territory. Your friends can use storage, signs and vehicles. Use your totem to show the exact boundary. Only the owner can remove it."
            : "Установите вне городов, деревень, баз и построек для защиты территории. Ваши друзья получат доступ к сундукам, табличкам и технике. Используйте тотем, чтобы увидеть точные границы. Снять может только владелец.")),
        x)
      ) {
        p.classList.add("shop-blueprint");
        const L = yk(x, Jl);
        ((A.textContent =
          `${x.width} × ${x.depth} × ${x.height}` +
          (x.key === "olympus-casino"
            ? T
              ? " · 2 blackjack tables"
              : " · 2 стола блэкджека"
            : "")),
          (_.textContent =
            `${T ? x.descriptionEn : x.description} ${T ? "Materials" : "Материалы"}: $${L} + 5%. ` +
            (T
              ? "Single use. The plot is cleared and underpinned automatically."
              : "Одноразовый. Участок расчищается и подсыпается автоматически.")));
      } else
        Tl(f.id)
          ? ((A.textContent = T
              ? "3D cabinet · live game screen"
              : "3D-автомат · живой экран игры"),
            (_.textContent = T
              ? "Place on a clear floor. Uses your game wallet. Use a welder to pack up your cabinet after cashing out."
              : "Поставьте на свободный пол. Игра использует ваш кошелёк. Заберите баланс, затем используйте сварочный аппарат, чтобы упаковать свой автомат."))
          : M
            ? ((S.textContent = `$${f.price} · +${M.bonusHp} HP`),
              (A.textContent =
                `${U("bullets")} −${Math.round(M.bulletResist * 100)}% · ${U("explosion")} −${Math.round(M.explodeResist * 100)}%` +
                (M.fallResist > 0
                  ? ` · ${U("fall")} −${Math.round(M.fallResist * 100)}%`
                  : "")),
              (_.textContent = `${lA(M)} ${U("protects")}: ${cA(M)}.`))
            : m && (_.textContent = m);
      (f.id === E.MILITARY_MEDKIT || f.id === E.MEDKIT || f.id === E.BANDAGE) &&
        ((A.textContent = l_(f.id)),
        f.id === E.MILITARY_MEDKIT && p.classList.add("shop-premium"));
      const C = aa(f.id);
      (C &&
        ((A.textContent = `R ${C.radius} m · ${C.delay} ${T ? "s" : "с"}`),
        (_.textContent = `${T ? C.descriptionEn : C.description} · ${T ? "Remote detonator required" : "Нужен детонатор"}`)),
        f.id === E.ROCKET_GUIDED &&
          (_.textContent = T
            ? "RPG · 2 s lock · Fires straight without a lock"
            : "РПГ · Захват 2 с · Без захвата летит прямо"),
        g.append(b, S),
        A.textContent && g.append(A));
      const R = document.createElement("button");
      if (
        ((R.className = "mini-btn"),
        (R.textContent = U("buy")),
        (R.disabled = this.balance < f.price),
        R.disabled && (R.title = U("notEnoughMoney", { cost: f.price })),
        (R.onclick = async () => {
          var G;
          const L = ia(f.id) > 1,
            N = f.id === v.OWNERSHIP_TOTEM,
            D = N ? 10 : L ? 999 : 1,
            H = await this.openQtyModal({
              title: U("buyModalTitle", { name: ad(f.id), price: f.price }),
              max: D,
              initial: N || f.category === "medical" ? 1 : L ? 64 : 1,
              presets: N
                ? [1, 2, 5, 10].map((I) => ({ label: String(I), value: I }))
                : [
                    { label: "1", value: 1 },
                    { label: "16", value: 16 },
                    { label: "32", value: 32 },
                    { label: "64", value: 64 },
                  ],
              line: (I) => {
                const O = I * f.price;
                return {
                  text: U("totalDue", { total: O }),
                  over: O > this.balance,
                };
              },
              confirmLabel: U("buy"),
            });
          if (H !== null && H > 0) {
            if (!((G = this.inventory) != null && G.hasRoomFor(f.id, H))) {
              this.addChat(2, U("shopNoRoom"));
              return;
            }
            ((this.pendingSpend = H * f.price),
              (this.pendingSpendAt = Date.now()),
              this.onShopBuy(f.id, H));
          }
        }),
        p.append(y, g, R),
        _.textContent)
      ) {
        const L = document.createElement("details");
        ((L.className = "shop-item-details"), (L.open = i.has(String(f.id))));
        const N = document.createElement("summary");
        ((N.textContent = U("shopItemDetails")),
          N.setAttribute("aria-label", `${U("shopItemDetails")}: ${ad(f.id)}`),
          L.append(N, _),
          p.append(L));
      }
      e.appendChild(p);
    }
    e.scrollTop = t;
  }
  buildShopCategories(e, t, i) {
    const s = j("shopcategories");
    if (!s) return;
    const o = { left: s.scrollLeft, top: s.scrollTop };
    ((s.innerHTML = ""), s.setAttribute("aria-label", U("shopCategoriesAria")));
    const a = ["all", ...vM.filter((r) => i.has(r))];
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
      const h = r === "all" ? v.MILITARY_CHEST : wX[r];
      xX(c.getContext("2d"), h, this.atlas);
      const d = document.createElement("span");
      ((d.className = "shop-category-label"), (d.textContent = e[r] ?? r));
      const u = document.createElement("span");
      ((u.className = "shop-category-count"),
        (u.textContent = String(r === "all" ? t.length : (i.get(r) ?? 0))),
        l.append(c, d, u),
        (l.onclick = () => {
          var f;
          this.shopCategory !== r &&
            ((this.shopCategory = r),
            (j("shopgrid").scrollTop = 0),
            (f = this.sfx) == null || f.uiTick(!0),
            this.buildShop(),
            requestAnimationFrame(() => {
              var p;
              return (p = s.querySelector(".shop-category-tab.active")) == null
                ? void 0
                : p.scrollIntoView({ block: "nearest", inline: "center" });
            }));
        }),
        s.appendChild(l));
    }
    ((s.scrollLeft = o.left), (s.scrollTop = o.top));
  }
  openChest(e, t = U("chestTitle")) {
    var s;
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
          ((s = this.transferList(this.transferCursor.area)[
            this.transferCursor.idx
          ]) == null
            ? void 0
            : s.count) ?? 0),
        (this.collectPending = !1)),
      i && ((this.transferCursor = null), (this.chestPicked = null)),
      this.syncGhostFromPicked(),
      (j("chesttitle").textContent = t),
      j("chest").classList.remove("hidden"),
      i && this.preparePointerForUi(),
      this.repaintTransfers());
  }
  closeChest() {
    var e;
    this.chestOpen &&
      ((this.chestOpen = !1),
      (this.transferCursor = null),
      (this.containerPending = !1),
      (this.transferQueue = null),
      (this.collectPending = !1),
      (this.chestPicked = null),
      this.updateGhost(0, 0),
      j("chest").classList.add("hidden"),
      (e = this.onChestClosed) == null || e.call(this));
  }
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
      !(t != null && t.id) || t.id !== e.id
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
  transferMove(e, t, i, s, o, a = !0) {
    const r = this.inventory,
      l = this.transferList(e)[t],
      c = this.transferList(i)[s];
    if (
      !l ||
      !c ||
      l === c ||
      !o ||
      (i === "a" && !r.canEquipInSlot(l.id, s)) ||
      (e === "a" && c.id && !jh(l, c) && !r.canEquipInSlot(c.id, t))
    )
      return 0;
    const h = (m, y, g) =>
      m !== "f" || g === 0 || (y < 2 && this.furnaceTarget(g) === y);
    if (!h(i, s, l.id)) return 0;
    c.id && !jh(l, c) && !h(e, t, c.id) && (a = !1);
    const d = { ...l },
      u = { ...c },
      f = bM(d, u, o, ia, a);
    if (!f) return 0;
    const p = e === "c" || i === "c" || e === "f" || i === "f";
    if (p) {
      if (this.containerPending) return 0;
      (this.onContainerMove(e, t, i, s, o, { ...l }, { ...c }),
        (this.containerPending = !0));
    }
    return (Object.assign(l, d), Object.assign(c, u), p || r.save(), f);
  }
  transferClick(e, t, i = !1, s = !1) {
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
      !s &&
      this.lastTransferClick.key === r &&
      a - this.lastTransferClick.time < 300
    ) {
      ((this.lastTransferClick = { key: "", time: 0 }),
        this.collectStack(e, t));
      return;
    }
    if (((this.lastTransferClick = { key: i || s ? "" : r, time: a }), s)) {
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
        : ($j(o, this.transferList(h), ia), this.inventory.save()),
        this.repaintTransfers());
      return;
    }
    const l = this.transferCursor;
    if (!l)
      o.id &&
        (this.transferCursor = {
          area: e,
          idx: t,
          id: o.id,
          count: i ? Math.ceil(o.count / 2) : o.count,
        });
    else if (l.area === e && l.idx === t)
      i && l.count > 1 ? l.count-- : (this.transferCursor = null);
    else {
      const c = this.transferList(l.area)[l.idx];
      if (!c || c.id !== l.id) {
        ((this.transferCursor = null), this.repaintTransfers());
        return;
      }
      const h = o.id > 0 && !jh(c, o),
        d = this.transferMove(l.area, l.idx, e, t, i ? 1 : l.count, !i);
      d &&
        (h
          ? ((l.id = c.id), (l.count = c.count))
          : ((l.count -= d), l.count <= 0 && (this.transferCursor = null)));
    }
    this.repaintTransfers();
  }
  collectStack(e, t) {
    var o;
    if (this.containerPending || this.furnaceOpen || e === "a") return;
    const i = this.transferCursor ?? {
        area: e,
        idx: t,
        id: ((o = this.transferList(e)[t]) == null ? void 0 : o.id) ?? 0,
        count: 0,
      },
      s = this.transferList(i.area)[i.idx];
    if (!(!(s != null && s.id) || ia(s.id) <= 1)) {
      if (this.chestOpen) {
        (this.onContainerMove(
          i.area,
          i.idx,
          "c",
          65534,
          s.count,
          { ...s },
          { id: 0, count: 0 },
        ),
          (this.transferCursor = i),
          (this.containerPending = !0),
          (this.collectPending = !0));
        return;
      }
      for (const a of [...this.inventory.storage, ...this.inventory.hotbar])
        a !== s && jh(a, s) && bM(a, s, a.count, ia, !1);
      ((i.count = s.count),
        (this.transferCursor = i),
        this.inventory.save(),
        this.repaintTransfers());
    }
  }
  wireTransferSlot(e, t, i) {
    (e.addEventListener("mouseenter", () => {
      this.transferHovered = { area: t, idx: i };
      const s = this.transferDrag;
      s &&
        !s.slots.some((o) => o.area === t && o.idx === i) &&
        s.slots.push({ area: t, idx: i });
    }),
      e.addEventListener("mouseleave", () => {
        var s;
        ((s = this.transferHovered) == null ? void 0 : s.area) === t &&
          this.transferHovered.idx === i &&
          (this.transferHovered = null);
      }),
      e.addEventListener("mousedown", (s) => {
        !this.transferCursor ||
          s.shiftKey ||
          s.button > 2 ||
          s.button === 1 ||
          (s.button === 2 ? !s.altKey : s.altKey) ||
          (this.transferDrag = {
            right: s.button === 2,
            slots: [{ area: t, idx: i }],
          });
      }));
  }
  chestSlotClick(e, t, i, s = !1) {
    if (this.suppressTransferClick) {
      this.suppressTransferClick = !1;
      return;
    }
    this.transferClick(e, t, s, i);
  }
  renderChest() {
    var a, r, l;
    const e = j("chestgrid");
    e.innerHTML = "";
    const t = Math.max(27, Math.ceil(this.chestSlots.length / 9) * 9);
    j("chest").style.setProperty("--chest-rows", String(t / 9));
    for (let c = 0; c < t; c++) {
      const h = Sa(),
        d = this.chestSlots[c] ?? { id: 0, count: 0 };
      (this.drawSlot(h, d),
        h.el.classList.toggle(
          "picked",
          ((a = this.chestPicked) == null ? void 0 : a.area) === "c" &&
            this.chestPicked.idx === c,
        ),
        (h.el.onclick = (u) => this.chestSlotClick("c", c, u.shiftKey)),
        this.wireTransferSlot(h.el, "c", c),
        (h.el.oncontextmenu = (u) => {
          (u.preventDefault(),
            !u.altKey || document.body.classList.contains("mobile")
              ? this.sellChestSlot(c)
              : this.chestSlotClick("c", c, u.shiftKey, !0));
        }),
        e.appendChild(h.el));
    }
    const i = this.inventory;
    if (!i) return;
    const s = j("chestinvgrid");
    s.innerHTML = "";
    for (let c = 0; c < i.storage.length; c++) {
      const h = Sa();
      (this.drawSlot(h, i.storage[c]),
        h.el.classList.toggle(
          "picked",
          ((r = this.chestPicked) == null ? void 0 : r.area) === "s" &&
            this.chestPicked.idx === c,
        ),
        (h.el.onclick = (d) => this.chestSlotClick("s", c, d.shiftKey)),
        this.wireTransferSlot(h.el, "s", c),
        (h.el.oncontextmenu = (d) => {
          (d.preventDefault(),
            !d.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", c)
              : this.chestSlotClick("s", c, d.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(h.el, "s", c, () => {
          var d;
          return ((d = i.storage[c]) == null ? void 0 : d.id) ?? 0;
        }),
        s.appendChild(h.el));
    }
    const o = j("chestinvhotbar");
    o.innerHTML = "";
    for (let c = 0; c < 9; c++) {
      const h = Sa(String(c + 1));
      (this.drawSlot(h, i.hotbar[c]),
        h.el.classList.toggle(
          "picked",
          ((l = this.chestPicked) == null ? void 0 : l.area) === "h" &&
            this.chestPicked.idx === c,
        ),
        (h.el.onclick = (d) => this.chestSlotClick("h", c, d.shiftKey)),
        this.wireTransferSlot(h.el, "h", c),
        (h.el.oncontextmenu = (d) => {
          (d.preventDefault(),
            !d.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", c)
              : this.chestSlotClick("h", c, d.shiftKey, !0));
        }),
        this.wireAttachmentLongPress(h.el, "h", c, () => {
          var d;
          return ((d = i.hotbar[c]) == null ? void 0 : d.id) ?? 0;
        }),
        o.appendChild(h.el));
    }
  }
  async sellChestSlot(e) {
    var r;
    const t = this.chestSlots[e];
    if (!t || t.id <= 0) return;
    const i = t.id,
      s = t.count,
      o = Math.floor(qh(i) * rb(i, t.durability));
    if (o <= 0) return;
    this.clearTransferCursor();
    const a = await this.openSellQuantity(i, s, o);
    !a ||
      ((r = this.chestSlots[e]) == null ? void 0 : r.id) !== i ||
      this.onChestSell(e, a);
  }
  openFurnace(e, t, i, s = !1, o = 0) {
    const a = !this.furnaceOpen;
    ((this.furnaceOpen = !0),
      (this.furnaceSlots = e),
      (this.containerPending = !1),
      (this.furnaceProgress = t),
      (this.furnaceFuel = i),
      (this.furnaceChimneyOpen = s),
      (this.furnaceSmoke = Math.max(0, Math.min(1, o))),
      a &&
        ((this.furnacePicked = null),
        (this.transferCursor = null),
        this.updateGhost(0, 0),
        j("furnace").classList.remove("hidden"),
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
      j("furnace").classList.add("hidden"),
      this.onFurnaceClose());
  }
  furnaceTarget(e) {
    return e === E.COAL || e === E.LAVA_BUCKET
      ? 1
      : e === v.IRON_ORE ||
          e === v.GOLD_ORE ||
          e === v.DIAMOND_ORE ||
          e === v.TITANIUM_ORE ||
          e === E.RAW_PORK ||
          e === E.RAW_CHICKEN ||
          e === E.RAW_MUTTON ||
          e === E.RAW_BEEF ||
          e === E.RAW_CAMEL ||
          e === E.RAW_FISH
        ? 0
        : -1;
  }
  furnaceSlotClick(e, t, i, s = !1) {
    if (this.suppressTransferClick) {
      this.suppressTransferClick = !1;
      return;
    }
    this.transferClick(e, t, s, i);
  }
  async sellFurnaceSlot(e) {
    var a;
    const t = this.furnaceSlots[e];
    if (!t || t.id <= 0) return;
    const i = t.id,
      s = qh(i);
    if (s <= 0) return;
    const o = await this.openSellQuantity(i, t.count, s);
    !o ||
      ((a = this.furnaceSlots[e]) == null ? void 0 : a.id) !== i ||
      this.onFurnaceSell(e, o);
  }
  renderFurnace() {
    var r, l, c;
    const e = ["furnaceinput", "furnacefuel", "furnaceoutput"];
    for (let h = 0; h < 3; h++) {
      const d = j(e[h]);
      d.innerHTML = "";
      const u = Sa();
      (this.drawSlot(u, this.furnaceSlots[h] ?? { id: 0, count: 0 }),
        u.el.classList.toggle(
          "picked",
          ((r = this.furnacePicked) == null ? void 0 : r.area) === "f" &&
            this.furnacePicked.idx === h,
        ),
        (u.el.onclick = (f) => this.furnaceSlotClick("f", h, f.shiftKey)),
        this.wireTransferSlot(u.el, "f", h),
        (u.el.oncontextmenu = (f) => {
          (f.preventDefault(),
            !f.altKey || document.body.classList.contains("mobile")
              ? this.sellFurnaceSlot(h)
              : this.furnaceSlotClick("f", h, f.shiftKey, !0));
        }),
        d.appendChild(u.el));
    }
    const t = j("furnaceprogress").firstElementChild;
    ((t.style.width = `${Math.max(0, Math.min(100, this.furnaceProgress * 100))}%`),
      (j("furnacestatus").textContent =
        this.furnaceProgress > 0 ? U("smelting") : U("waiting")),
      (j("furnacefueltext").textContent = U("fuelStock", {
        fuel: this.furnaceFuel,
      })));
    const i = j("furnaceventtext");
    ((i.textContent = this.furnaceChimneyOpen
      ? U("chimneyClear")
      : U("chimneyBlocked", { smoke: Math.round(this.furnaceSmoke * 100) })),
      i.classList.toggle("safe", this.furnaceChimneyOpen),
      i.classList.toggle(
        "danger",
        !this.furnaceChimneyOpen && this.furnaceSmoke > 0.35,
      ));
    const s = this.inventory;
    if (!s) return;
    const o = j("furnaceinvgrid");
    o.innerHTML = "";
    for (let h = 0; h < s.storage.length; h++) {
      const d = Sa();
      (this.drawSlot(d, s.storage[h]),
        d.el.classList.toggle(
          "picked",
          ((l = this.furnacePicked) == null ? void 0 : l.area) === "s" &&
            this.furnacePicked.idx === h,
        ),
        (d.el.onclick = (u) => this.furnaceSlotClick("s", h, u.shiftKey)),
        this.wireTransferSlot(d.el, "s", h),
        (d.el.oncontextmenu = (u) => {
          (u.preventDefault(),
            !u.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("s", h)
              : this.furnaceSlotClick("s", h, u.shiftKey, !0));
        }),
        o.appendChild(d.el));
    }
    const a = j("furnaceinvhotbar");
    a.innerHTML = "";
    for (let h = 0; h < s.hotbar.length; h++) {
      const d = Sa(String(h + 1));
      (this.drawSlot(d, s.hotbar[h]),
        d.el.classList.toggle(
          "picked",
          ((c = this.furnacePicked) == null ? void 0 : c.area) === "h" &&
            this.furnacePicked.idx === h,
        ),
        (d.el.onclick = (u) => this.furnaceSlotClick("h", h, u.shiftKey)),
        this.wireTransferSlot(d.el, "h", h),
        (d.el.oncontextmenu = (u) => {
          (u.preventDefault(),
            !u.altKey || document.body.classList.contains("mobile")
              ? this.sellSlot("h", h)
              : this.furnaceSlotClick("h", h, u.shiftKey, !0));
        }),
        a.appendChild(d.el));
    }
  }
  refreshChatValidation(e, t) {
    const i = e.value.trimStart().startsWith("/");
    e.maxLength = i ? tI : eI;
    const s = rM(e.value, z.language) ?? aM(e.value, z.language);
    e.setAttribute("aria-invalid", String(!!s));
    const o = i
      ? ""
      : z.language === "ru"
        ? "Буквы, цифры, пробелы и _ - . , : ! ? / * & % @"
        : "Letters, numbers, spaces and _ - . , : ! ? / * & % @";
    ((j(t).textContent = `${e.value.length}/${e.maxLength} · ${s || o}`),
      j(t).classList.toggle("invalid", !!s));
  }
  submitChat(e) {
    const t = rM(e, z.language) ?? aM(e, z.language);
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
  refreshChatSuggestion(e = !1) {
    var c, h;
    const t = j("chatinput");
    this.refreshChatValidation(t, "chatfeedback");
    const i = j("chatghost"),
      s = j("chataccept"),
      o = t.value;
    ((this.chatSuggestion = oX(o, this.onlinePlayerNames)),
      e || (this.chatSuggestIdx = 0));
    const a = ((c = this.chatSuggestion) == null ? void 0 : c.ghost) ?? "";
    if (!a) {
      (i.replaceChildren(), s.classList.add("hidden"));
      return;
    }
    const r = document.createElement("span");
    ((r.className = "typed"), (r.textContent = o));
    const l = document.createElement("span");
    ((l.textContent = a),
      i.replaceChildren(r, l),
      s.classList.toggle(
        "hidden",
        (((h = this.chatSuggestion) == null ? void 0 : h.all.length) ?? 0) ===
          0,
      ));
  }
  acceptChatSuggestion(e = 1) {
    var a, r;
    const t = j("chatinput"),
      i = ((a = this.chatSuggestion) == null ? void 0 : a.all) ?? [];
    if (i.length === 0) return;
    const s = i.indexOf(t.value),
      o = s === -1 ? this.chatSuggestIdx : (s + e + i.length) % i.length;
    ((this.chatSuggestIdx = o),
      (t.value = i[o]),
      t.setSelectionRange(t.value.length, t.value.length),
      this.refreshChatSuggestion(!0),
      (r = this.sfx) == null || r.uiTick());
  }
  openChat(e = "") {
    (this.chatOpen || this.onChatOpened(),
      (this.chatOpen = !0),
      document.body.classList.add("chat-open"),
      (this.chatHistIdx = this.chatHistory.length),
      j("chatbox").classList.remove("hidden"),
      j("chatlog").classList.add("open"),
      this.renderChatLog(!0),
      this.preparePointerForUi());
    const i = j("chatinput");
    ((i.value = e),
      this.refreshChatSuggestion(),
      (document.body.classList.contains("mobile") && Wp()) ||
        setTimeout(() => i.focus(), 0),
      this.chatOutsideBound ||
        ((this.chatOutsideBound = !0),
        document.addEventListener("mousedown", this.onChatOutsideClick, !0)));
  }
  closeChat() {
    this.chatOpen &&
      ((this.chatOpen = !1),
      document.body.classList.remove("chat-open"),
      j("chatbox").classList.add("hidden"),
      j("mobilechatpopup").classList.add("hidden"),
      j("mobilechatinput").blur(),
      j("chatinput").blur(),
      j("chatlog").classList.remove("open"),
      this.renderChatLog(!0),
      this.onChatClosed());
  }
  addChat(e, t, i) {
    for (
      this.chatLog.push({ type: e, msg: t, meta: i, at: Date.now() });
      this.chatLog.length > Os.CHAT_KEEP;
    )
      this.chatLog.shift();
    (this.renderChatLog(!1), this.ensureChatFadeTick());
  }
  renderChatLog(e) {
    var a, r, l, c, h;
    const t = j("chatlog");
    if (!t) return;
    const i = t.scrollHeight - t.scrollTop - t.clientHeight < 48,
      s = e || this.chatStickBottom || i || !this.chatOpen;
    t.innerHTML = "";
    const o = Date.now();
    for (const d of this.chatLog) {
      const u = document.createElement("div"),
        f =
          d.type !== 0 &&
          /killed|destroyed|died|убил|уничтожил|погиб|разбился/i.test(d.msg);
      if (
        ((u.className = `msg t${d.type}${f ? " killfeed" : ""}`),
        (u.textContent = d.msg),
        d.type === 0)
      ) {
        const p = d.msg.indexOf(": ");
        if (p > 0) {
          const m = d.msg.slice(0, p),
            y =
              ((a = d.meta) == null ? void 0 : a.name) ??
              m
                .replace(/^\[(Owner|Admin|Moder)\] /, "")
                .replace(/ \[[A-Za-z0-9_-]+\]$/, ""),
            g = uw(y),
            b = document.createElement("span");
          ((b.textContent = g.baseLabel),
            (b.style.color = g.color),
            (b.style.fontWeight = g.weight),
            (r = d.meta) != null &&
              r.side &&
              Gl &&
              ((b.style.color =
                d.meta.side === Gl
                  ? "var(--nick-ally, #dfe4ea)"
                  : "var(--nick-enemy, #ff5247)"),
              (b.style.fontWeight = "700")),
            u.replaceChildren(b));
          const S = ((l = d.meta) == null ? void 0 : l.squad) ?? g.squad;
          if (S) {
            const M = document.createElement("span");
            ((M.className = "squad-postfix"),
              (M.textContent = " [" + S.name + "]"),
              (M.style.color = S.color),
              u.append(M));
          }
          if (((c = d.meta) == null ? void 0 : c.channel) === "squad") {
            const M = document.createElement("span");
            ((M.className = "chat-channel-label"),
              (M.textContent = z.language === "en" ? "SQUAD" : "ОТРЯД"),
              (M.style.color = (S == null ? void 0 : S.color) ?? "#58dfc0"),
              u.prepend(M));
          }
          if (((h = d.meta) == null ? void 0 : h.channel) === "team") {
            const M = document.createElement("span");
            ((M.className = "chat-channel-label chat-team-label"),
              (M.textContent = z.language === "en" ? "TEAM" : "КОМАНДА"),
              u.prepend(M),
              u.classList.add("msg-team"));
          }
          u.append(document.createTextNode(d.msg.slice(p)));
        }
      }
      (!this.chatOpen &&
        o - d.at > (f ? 18e3 : 9e3) &&
        u.classList.add("faded"),
        t.appendChild(u));
    }
    s && ((t.scrollTop = t.scrollHeight), (this.chatStickBottom = !0));
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
    const t = j("tablist");
    (t.classList.toggle("hidden", !e),
      (t.style.pointerEvents = e ? "all" : "none"),
      j("tabbackdrop").classList.toggle("hidden", !e),
      e
        ? (this.renderTabRows(), this.preparePointerForUi())
        : document.activeElement instanceof HTMLElement &&
          document.activeElement.closest("#tablist") &&
          document.activeElement.blur());
  }
  setTab(e) {
    ((this.tabRows = e), this.tabOpen && this.renderTabRows());
  }
  renderTabRows() {
    const e = [...this.tabRows].sort(
      (o, a) => a.balance - o.balance || o.name.localeCompare(a.name),
    );
    j("tabcount").textContent = U("tabOnline", { count: e.length });
    const t = this.tabQuery.trim().toLocaleLowerCase(),
      i = new Intl.NumberFormat(z.language === "en" ? "en-US" : "ru-RU"),
      s = document.createDocumentFragment();
    if (
      (e.forEach((o, a) => {
        const r = uw(o.name);
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
        if (((h.className = "name"), (h.textContent = r.baseLabel), r.squad)) {
          const b = document.createElement("span");
          ((b.textContent = " [" + r.squad.name + "]"),
            (b.style.color = r.squad.color),
            h.append(b));
        }
        const d = (b, S = "") => {
          const M = document.createElement("span");
          ((M.className = "tag" + (S ? " " + S : "")),
            (M.textContent = b),
            h.append(M));
        };
        (o.self
          ? d(U("tabYou"), "you")
          : o.squad
            ? d(U("tabSquadmate"))
            : o.friend && d(U("tabFriend")),
          (h.style.color = r.color),
          (h.style.fontWeight = r.weight),
          (h.title = r.label));
        const u = document.createElement("span");
        ((u.className = "rank"), (u.textContent = o.rank));
        const f = document.createElement("small");
        ((f.textContent = `${i.format(o.xp)} XP`),
          u.append(f),
          (u.title = `${o.rank} · ${i.format(o.xp)} XP`));
        const p = document.createElement("span");
        ((p.className = "bal"), (p.textContent = `$${i.format(o.balance)}`));
        const m = document.createElement("span");
        ((m.className =
          "ping " + (o.ping < 90 ? "good" : o.ping < 180 ? "fair" : "poor")),
          (m.textContent = U("pingMs", { ping: o.ping })));
        const y = document.createElement("span");
        y.className = "act";
        const g = document.createElement("button");
        ((g.type = "button"),
          (g.className = "tab-friend" + (o.friend ? " on" : "")),
          (g.textContent = o.friend ? "★" : "+"),
          (g.title = o.friend
            ? U("removeFriendFromList")
            : U("addFriendToList")),
          g.setAttribute("aria-label", `${g.title}: ${r.baseLabel}`),
          (g.hidden = o.self),
          (g.onclick = () => this.onToggleFriend(o.id)),
          y.append(g),
          l.append(c, h, u, p, m, y),
          s.appendChild(l));
      }),
      !s.childNodes.length)
    ) {
      const o = document.createElement("div");
      ((o.className = "tab-empty"),
        (o.textContent = U("tabNoMatches")),
        s.appendChild(o));
    }
    j("tabrows").replaceChildren(s);
  }
  setCompass(e, t, i) {
    const s = j("compasscoords");
    s.textContent !== t && (s.textContent = t);
    let o = `${Math.round((e * 1800) / Math.PI)}|${z.language}|${devicePixelRatio}`;
    for (const g of i)
      o += `|${Math.round(g.bearing * 2)}${g.color}${g.label ?? ""}`;
    if (o === this.compassSig) return;
    this.compassSig = o;
    const a = j("compasscanvas");
    this.compassCtx || (this.compassCtx = a.getContext("2d"));
    const r = this.compassCtx;
    if (!r) return;
    const l = 340,
      c = 40,
      h = Math.min(devicePixelRatio || 1, 2);
    ((a.width !== Math.round(l * h) || a.height !== Math.round(c * h)) &&
      ((a.width = Math.round(l * h)),
      (a.height = Math.round(c * h)),
      (a.style.width = l + "px"),
      (a.style.height = c + "px")),
      r.setTransform(h, 0, 0, h, 0, 0),
      r.clearRect(0, 0, l, c));
    const d = ((((-e * 180) / Math.PI) % 360) + 360) % 360,
      u = 110,
      f = l / u,
      p = (g) => {
        let b = g - d;
        return ((b = ((((b + 180) % 360) + 360) % 360) - 180), b);
      };
    for (let g = Math.floor((d - u / 2) / 5) * 5; g <= d + u / 2; g += 5) {
      const b = l / 2 + (g - d) * f;
      if (b < 0 || b > l) continue;
      const S = ((g % 360) + 360) % 360,
        M = Math.round(S) % 45 === 0;
      ((r.strokeStyle = M
        ? "rgba(200,210,150,0.55)"
        : "rgba(200,210,150,0.22)"),
        (r.lineWidth = M ? 2 : 1),
        r.beginPath(),
        r.moveTo(b, c - (M ? 13 : 7)),
        r.lineTo(b, c),
        r.stroke());
    }
    const m =
      z.language === "en"
        ? [
            [0, "N"],
            [45, "NE"],
            [90, "E"],
            [135, "SE"],
            [180, "S"],
            [225, "SW"],
            [270, "W"],
            [315, "NW"],
          ]
        : [
            [0, "С"],
            [45, "СВ"],
            [90, "В"],
            [135, "ЮВ"],
            [180, "Ю"],
            [225, "ЮЗ"],
            [270, "З"],
            [315, "СЗ"],
          ];
    ((r.font = '13px "Russo One", sans-serif'),
      (r.textAlign = "center"),
      (r.textBaseline = "middle"));
    for (const [g, b] of m) {
      const S = p(g),
        M = l / 2 + S * f;
      M < -20 ||
        M > l + 20 ||
        ((r.fillStyle = g === 0 ? "#ffb547" : "#c9d3dd"),
        r.fillText(b, M, c * 0.4));
    }
    ((r.strokeStyle = "rgba(255,255,255,0.75)"),
      (r.lineWidth = 2),
      r.beginPath(),
      r.moveTo(l / 2, 0),
      r.lineTo(l / 2, c),
      r.stroke());
    let y = 0;
    for (const g of i) {
      let b = l / 2 + p(g.bearing) * f;
      if (
        ((b = Math.max(6, Math.min(l - 6, b))),
        (r.fillStyle = g.color),
        r.beginPath(),
        r.arc(b, c * 0.74, 4.5, 0, Math.PI * 2),
        r.fill(),
        (r.strokeStyle = "rgba(0,0,0,0.6)"),
        (r.lineWidth = 1),
        r.stroke(),
        g.label)
      ) {
        ((r.font = "600 9px system-ui"),
          (r.textAlign = "center"),
          (r.textBaseline = "top"));
        const S = (y++ % 2) * 11,
          M = Math.max(48, Math.min(l - 48, b));
        ((r.lineWidth = 3),
          (r.strokeStyle = "#07131de0"),
          r.strokeText(g.label, M, S, 94),
          (r.fillStyle = g.color),
          r.fillText(g.label, M, S, 94));
      }
    }
  }
  setHP(e, t = 100) {
    const i = Math.max(1, t),
      s = Math.max(0, e);
    ((j("hpfill").style.width = `${Math.min(100, (s / i) * 100)}%`),
      (j("hptext").textContent = i > 100 ? `${s}/${i}` : String(s)));
  }
  setAmmo(e, t, i = "") {
    var h, d, u, f, p;
    const s = uo(
      (u =
        (d =
          (h = this.inventory) == null
            ? void 0
            : h.hotbar[this.inventory.sel]) == null
          ? void 0
          : d.cosmetic) == null
        ? void 0
        : u.skin,
    );
    if (e && s) {
      const m = z.language === "en" ? s.name : s.ru;
      (e.endsWith(" | " + m) || (e += " | " + m), (i = Ho[s.rarity].color));
    }
    _g();
    const o =
        Ti(((f = this.inventory) == null ? void 0 : f.held()) ?? 0) ||
        (((p = this.inventory) == null ? void 0 : p.held()) ?? 0),
      a = !!this.inventory && au.includes(o) && !fo(o) && !ho(o);
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
    ((this.ammoKey = r), j("ammo").classList.toggle("weapon-readout", a));
    const l = e !== this.ammoName || t.length !== this.ammoLength;
    ((this.ammoName = e),
      (this.ammoLength = t.length),
      j("ammo").classList.toggle("ammo-detail", t.length > 18),
      (j("ammo").innerHTML = ""));
    const c = document.createElement("span");
    ((c.className = "wname"),
      (c.style.color = i),
      (c.textContent = a ? "" : e),
      (c.title = e),
      j("ammo").append(c, document.createTextNode(t)),
      l && _g(!0));
  }
  buildDebugToggles() {
    j("debugtoggles").replaceChildren(
      ...QV.map((t) => {
        const i = document.createElement("label"),
          s = document.createElement("input");
        ((s.type = "checkbox"),
          (s.checked = z.debug[t]),
          (s.onchange = () => {
            ((z.debug[t] = s.checked), qi());
          }));
        const o = document.createElement("span");
        return (
          (o.dataset.i18n = `debug_${t}`),
          (o.textContent = U(`debug_${t}`)),
          i.append(s, o),
          i
        );
      }),
    );
  }
  setDebugLines(e) {
    const t = j("debughud"),
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
    const s =
      e.length === 0 ? 0 : Math.round(t.getBoundingClientRect().height) + 6;
    s !== this.debugOffset &&
      ((this.debugOffset = s),
      j("hud").style.setProperty("--debug-offset", `${s}px`));
  }
  currentHint() {
    return j("hint").textContent ?? "";
  }
  setHint(e, t = !1) {
    if (e === this.hintShown && t === this.hintMining) return;
    ((this.hintShown = e), (this.hintMining = t));
    const i = j("hint");
    ((i.textContent = e), i.classList.toggle("mining", t));
  }
  setMiningProgress(e) {
    const t = e === null ? -1 : Math.min(100, Math.floor(e * 100));
    if (t === this.miningShown) return;
    this.miningShown = t;
    const i = j("mineprogress");
    if (t < 0) {
      i.classList.remove("show");
      return;
    }
    i.classList.add("show");
    const s = i.querySelector(".mp-fill");
    s &&
      (s.style.strokeDashoffset = String(
        Math.round((1 - t / 100) * 94.2 * 100) / 100,
      ));
    const o = i.querySelector(".mp-pct");
    o && (o.textContent = `${t}%`);
  }
  showTeleportRequest(e, t) {
    this.hideTeleportRequest();
    const i = j("tprequest");
    ((i.querySelector(".tpr-title").textContent = U("tpRequestFrom", {
      name: e,
    })),
      (i.querySelector(".tpr-sub").textContent = lr()
        ? U("tpRequestTouchHint")
        : U("tpRequestKeyHint")),
      i.classList.remove("hidden"));
    const s = Date.now() + t * 1e3,
      o = i.querySelector(".tpr-bar i"),
      a = i.querySelector(".tpr-time"),
      r = () => {
        const l = Math.max(0, s - Date.now());
        ((o.style.transform = `scaleX(${(l / (t * 1e3)).toFixed(3)})`),
          (a.textContent = `${Math.ceil(l / 1e3)}`),
          l <= 0 && this.hideTeleportRequest());
      };
    (r(),
      (this.tpRequest = {
        from: e,
        until: s,
        timer: window.setInterval(r, 100),
      }));
  }
  hideTeleportRequest(e) {
    !this.tpRequest ||
      (e !== void 0 && this.tpRequest.from !== e) ||
      (window.clearInterval(this.tpRequest.timer),
      (this.tpRequest = null),
      j("tprequest").classList.add("hidden"));
  }
  setCropProgress(e) {
    const t = j("cropprogress");
    if (!e) {
      t.classList.remove("show", "boosted", "low-light");
      return;
    }
    (t.classList.add("show"),
      t.classList.toggle("boosted", !!e.boosted),
      t.classList.toggle("low-light", !!e.lowLight),
      (j("cropprogresslabel").textContent = e.label),
      (j("cropprogressdetails").textContent = e.details ?? ""),
      (j("cropprogressfill").style.width =
        `${Math.max(0, Math.min(100, e.pct))}%`));
  }
  setCrosshair(e) {
    j("crosshair").style.opacity = e ? "0.85" : "0";
  }
  setHoloRange(e) {
    const t = j("holorange");
    (t.classList.toggle("hidden", e === null),
      (t.textContent =
        e === null ? "" : `${e < 10 ? e.toFixed(1) : Math.round(e)} m`));
  }
  setScope(e) {
    j("scope").classList.toggle("hidden", !e);
  }
  hitmark() {
    ((this.hitmarkT = 0.18), (j("hitmarker").style.opacity = "1"));
  }
  hitFrom(e, t, i, s, o) {
    const a = fb(e, t, i, s, o);
    for (const l of this.hitDirs)
      if (
        Math.abs(((fb(l.x, l.z, i, s, o) - a + 540) % 360) - 180) >
        180 - RX
      ) {
        ((l.x = e), (l.z = t), (l.life = ub));
        return;
      }
    if (this.hitDirs.length >= 5) return;
    const r = document.createElement("div");
    ((r.className = "hitdir"),
      (r.style.transform = `rotate(${a}deg)`),
      r.append(document.createElement("i")),
      j("hitdirs").append(r),
      this.hitDirs.push({ el: r, x: e, z: t, life: ub }));
  }
  updateHitDirs(e, t, i, s) {
    for (let o = this.hitDirs.length - 1; o >= 0; o--) {
      const a = this.hitDirs[o];
      if (((a.life -= e), a.life <= 0)) {
        (a.el.remove(), this.hitDirs.splice(o, 1));
        continue;
      }
      ((a.el.style.transform = `rotate(${fb(a.x, a.z, t, i, s)}deg)`),
        (a.el.style.opacity = String(Math.min(1, a.life / (ub - 1.2)))));
    }
  }
  damageFlash() {
    const e = j("vignette");
    ((e.style.transition = "none"),
      (e.style.opacity = "1"),
      requestAnimationFrame(() => {
        ((e.style.transition = "opacity .5s"), (e.style.opacity = "0"));
      }));
  }
  concussion(e, t) {
    const i = j("concussion"),
      s = Math.max(0, Math.min(1, e)),
      o = ++this.concussionSeq;
    ((i.style.transition = "none"),
      (i.style.opacity = String(0.16 + s * 0.68)));
    const a = `saturate(${Math.max(0.18, 1 - s * 0.78)}) blur(${(s * 1.8).toFixed(1)}px)`;
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
      i = j("smoke-overlay"),
      s = j("smoke-warning");
    i.style.opacity =
      t < 0.08 ? "0" : String(Math.min(0.78, (t - 0.08) * 0.78));
    const o = t > 0.52;
    (s.classList.toggle("hidden", !o),
      (s.style.opacity = o ? String(Math.min(1, 0.45 + t * 0.65)) : "0"));
  }
  setVehicleHud(e) {
    const t = j("vehhud");
    if ((document.body.classList.toggle("vehicle-active", !!e), !e)) {
      (t.classList.add("hidden"), (this.vehicleHudKey = ""));
      const f = document.getElementById("vehicle-pause-help");
      f && (f.hidden = !0);
      return;
    }
    t.classList.remove("hidden");
    const i = document.body.classList.contains("mobile"),
      s = Math.round(e.speed * 3.6),
      o = JSON.stringify([
        e.name,
        e.hp,
        e.maxHp,
        s,
        e.alt,
        e.flies,
        e.extra,
        i,
        z.language,
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
      const y = document.createElement("div");
      ((y.className = "vh-extra"), t.append(f, p, m, y));
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
          ? U("vehHudTouchStats", { speed: s, alt: e.alt })
          : ""
        : U(e.flies ? "vehHudStatsAir" : "vehHudStats", {
            hp: e.hp,
            maxHp: e.maxHp,
            speed: s,
            alt: e.alt,
          })));
    const d = i ? "" : `${z.binds.camera}|${z.binds.use}|${z.language}`;
    if (
      c.dataset.hints !== d &&
      ((c.dataset.hints = d), c.replaceChildren(), !i)
    )
      for (const [f, p] of [
        ["camera", "vehicleCamera"],
        ["use", "vehicleExit"],
      ]) {
        const m = document.createElement("span"),
          y = document.createElement("kbd");
        ((y.textContent = gs(z.binds[f], z.language)),
          m.append(y, ` ${U(p)}`),
          c.append(m));
      }
    let u = document.getElementById("vehicle-pause-help");
    (u ||
      ((u = document.createElement("details")),
      (u.id = "vehicle-pause-help"),
      u.append(document.createElement("summary"), document.createElement("p")),
      document.querySelector("#pause .panel").append(u)),
      (u.querySelector("summary").textContent =
        `${e.name} · ${U("vehicleControls")}`),
      (u.querySelector("p").textContent = e.extra),
      (u.hidden = !1));
  }
  tick(e) {
    this.hitmarkT > 0 &&
      ((this.hitmarkT -= e),
      this.hitmarkT <= 0 && (j("hitmarker").style.opacity = "0"));
  }
  drawSlot(e, t) {
    var x, T, A;
    const i = this.transferCursor;
    if (i && this.transferList(i.area)[i.idx] === t) {
      const _ = t.count - i.count;
      t = _ > 0 ? { ...t, count: _ } : { id: 0, count: 0 };
    }
    const s = e.canvas.getContext("2d");
    Lo(s, t.id, this.atlas);
    const o = t.id ? uo((x = t.cosmetic) == null ? void 0 : x.skin) : void 0;
    if (
      (e.el.classList.toggle("skin-slot", !!o),
      e.el.style.setProperty("--skin-color", o ? Ho[o.rarity].color : ""),
      (e.el.dataset.skinName = o ? (z.language === "en" ? o.name : o.ru) : ""),
      o && ik(s, o.id),
      fo(t.id))
    ) {
      const _ = uU(t.id),
        C = s.canvas.width;
      (s.save(),
        (s.fillStyle = "#101923"),
        s.fillRect(0, C * 0.66, C * 0.36, C * 0.34),
        (s.fillStyle = "#effaff"),
        (s.font = `700 ${Math.max(9, C * 0.25)}px sans-serif`),
        (s.textAlign = "center"),
        (s.textBaseline = "middle"),
        s.fillText(String(_), C * 0.18, C * 0.83),
        s.restore());
    }
    const a = sr(t);
    (a > 0 &&
      ((s.fillStyle = "rgba(6,9,8,.9)"),
      s.fillRect(21, 24, 18, 12),
      (s.fillStyle = a === E.THERMAL_GOGGLES ? "#ff7626" : "#73ee8b"),
      s.beginPath(),
      s.arc(26, 30, 3.5, 0, Math.PI * 2),
      s.arc(34, 30, 3.5, 0, Math.PI * 2),
      s.fill()),
      (e.cnt.textContent =
        t.id > 0 && (t.count > 1 || ia(t.id) > 1) ? String(t.count) : ""));
    const r = this.weaponMagInfo(t.id, t.magazine);
    e.mag.textContent = r ? String(r.loaded) : "";
    const l = or(t.id),
      c = l > 0 ? Math.max(0, Math.min(l, t.durability ?? l)) : 0,
      h = l > 0 ? c / l : 0;
    ((e.dur.style.display = l > 0 ? "" : "none"),
      (e.dur.style.width = `${Math.round(h * 100)}%`),
      (e.dur.style.background =
        h > 0.55 ? "#65d66f" : h > 0.22 ? "#e0bd4d" : "#e45545"));
    const d = sr(t),
      u = d > 0 ? 0 : Ql(t.id) ? t.id : 0,
      f = d || u,
      p = f > 0 ? Da(f) : Vl(t.id) > 0 ? gM : 0,
      m = p > 0 ? Math.max(0, Math.min(p, t.suppressorDurability ?? p)) : 0;
    ((e.supDur.style.display = p > 0 ? "" : "none"),
      (e.supDur.style.width = `${p > 0 ? Math.round((m / p) * 100) : 0}%`),
      e.el.classList.toggle("empty", t.id === 0));
    const y = Math.floor(qh(t.id) * rb(t.id, t.durability));
    if (
      ((e.el.dataset.itemSale =
        t.id > 0
          ? kA(t.id)
            ? `${z.language === "en" ? "Sell" : "Продажа"}: $${y} / ${z.language === "en" ? "item" : "шт."}${t.count > 1 ? ` · $${y * t.count} ${z.language === "en" ? "stack" : "за стопку"}` : ""}`
            : z.language === "en"
              ? "Cannot be sold"
              : "Не продаётся"
          : ""),
      t.id === 0)
    ) {
      e.el.dataset.itemInfo = "";
      return;
    }
    if (t.id < 256) {
      e.el.dataset.itemInfo = `${kd(de[t.id]) ?? ""}
${z.language === "en" ? "Durability" : "Прочность"}: ${((T = de[t.id]) == null ? void 0 : T.hardness) ?? 0}${(A = de[t.id]) != null && A.light ? ` · ${z.language === "en" ? "Light" : "Свет"}: ${de[t.id].light}` : ""}`;
      return;
    }
    if (t.id === E.MEDKIT || t.id === E.MILITARY_MEDKIT || t.id === E.BANDAGE) {
      e.el.dataset.itemInfo = `${Ki(t.id)}
${l_(t.id)}`;
      return;
    }
    const g = Zc(t.id);
    if (g) {
      const _ = z.language === "en";
      e.el.dataset.itemInfo = `${Ki(t.id)}
${g.width} × ${g.depth} × ${g.height}
${_ ? g.descriptionEn : g.description}
${_ ? "Single use · One per slot · Materials + 5%" : "Одноразовый · Один в ячейке · Материалы + 5%"}`;
      return;
    }
    const b = ra(t.id);
    if (b) {
      const _ =
        d > 0
          ? `
${U("helmetModuleDurabilityTooltip", { current: m, max: p })}`
          : "";
      e.el.dataset.itemInfo =
        `${Ki(t.id) ?? ""}
${lA(b)}
${U("protects")}: ${cA(b)}
+${b.bonusHp} HP · ${U("bullets")} −${Math.round(b.bulletResist * 100)}% · ${U("explosion")} −${Math.round(b.explodeResist * 100)}%` +
        (b.fallResist > 0
          ? ` · ${U("fall")} −${Math.round(b.fallResist * 100)}%`
          : "") +
        `
${U("durabilityTooltip", { current: c, max: l })}${_}`;
      return;
    }
    const S =
        l > 0
          ? `
${U("durabilityTooltip", { current: c, max: l })}`
          : "",
      M =
        p > 0
          ? `
${U(u > 0 ? "helmetModuleDurabilityTooltip" : "suppressorDurabilityTooltip", { current: m, max: p })}`
          : "";
    e.el.dataset.itemInfo = `${AX(t.id)}${o ? " | " + (z.language === "en" ? o.name : o.ru) : ""}${S}${M}${
      o != null && o.tracking && t.cosmetic
        ? `
` +
          Ty(t.id) +
          ": " +
          WS(t.cosmetic, this.cosmeticOwner(), t.id) +
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
      j("inventory").classList.remove("hidden"));
    const t = gs(z.binds.skills, z.language);
    ((j("invskillskey").textContent = t),
      (j("invskillskey").hidden = !t),
      e && this.preparePointerForUi(),
      this.renderInventory());
  }
  closeInventory() {
    (ar(),
      (this.invOpen = !1),
      (this.transferCursor = null),
      (this.picked = null),
      this.updateGhost(0, 0),
      j("inventory").classList.add("hidden"),
      this.onInventoryPreview(!1));
  }
  ensureGridSlots(e) {
    const t = j("invgrid");
    for (; this.invGridSlots.length < e;) {
      const i = this.invGridSlots.length,
        s = Sa();
      (t.appendChild(s.el),
        (s.el.onclick = (o) => this.slotClick("s", i, o.shiftKey)),
        this.wireTransferSlot(s.el, "s", i),
        (s.el.onmouseenter = () => {
          this.hoveredInventorySlot = { area: "s", idx: i };
        }),
        this.wireAttachmentLongPress(s.el, "s", i, () => {
          var o;
          return this.inventory && !this.inventory.creative
            ? (((o = this.inventory.storage[i]) == null ? void 0 : o.id) ?? 0)
            : 0;
        }),
        this.invGridSlots.push(s));
    }
  }
  repairQuote(e) {
    const t = this.inventory;
    return Gj(t ? [...t.hotbar, ...t.storage, ...t.armor] : [], e);
  }
  renderEquipmentRepair() {
    j("invrepairbalance").textContent =
      `${U("repairBalance")}: $${this.balance}`;
    for (const e of [0, 1]) {
      const t = j(e === 0 ? "repairarmor" : "repairweapons"),
        i = this.repairQuote(e);
      ((t.querySelector("span").textContent = U(
        e === 0 ? "repairArmor" : "repairWeapons",
      )),
        (t.querySelector("small").textContent = this.repairPending
          ? U("repairPending")
          : i.count
            ? `${i.count} · $${i.cost}${i.cost > this.balance ? ` · ${U("repairNoMoney")}` : ""}`
            : U("repairIntact")),
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
        title: U(e === 0 ? "repairArmor" : "repairWeapons"),
        max: 1,
        initial: 1,
        presets: [],
        confirmOnly: !0,
        confirmLabel: U("repairPay", { cost: t.cost }),
        line: () => ({
          text: U("repairConfirm", { count: t.count, cost: t.cost }),
          over: t.cost > this.balance,
        }),
      }))
    )) {
      if (this.repairQuote(e).cost > t.cost) {
        ((j("invrepairnotice").textContent = U("repairChanged")),
          this.renderEquipmentRepair());
        return;
      }
      ((this.repairPending = !0),
        (j("invrepairnotice").textContent = ""),
        this.renderEquipmentRepair(),
        this.onEquipmentRepair(e, t.cost));
    }
  }
  finishEquipmentRepair(e, t) {
    var i;
    ((this.repairPending = !1),
      (j("invrepairnotice").textContent =
        e === 0
          ? U("repairDone", { cost: t })
          : U(e === 1 ? "repairNoMoney" : "repairChanged")),
      e === 0 && t > 0 && ((i = this.sfx) == null || i.buy()),
      this.renderEquipmentRepair());
  }
  renderInventory() {
    var i, s, o, a;
    const e = this.inventory;
    if (!e) return;
    const t = e.creative ? fd.length : Ic;
    this.ensureGridSlots(t);
    for (let r = 0; r < this.invGridSlots.length; r++) {
      const l = this.invGridSlots[r];
      if (((l.el.style.display = r < t ? "" : "none"), !(r >= t))) {
        if (e.creative) {
          const c = fd[r] ?? 0;
          if (c === E.AXE && !fw(!0)) {
            l.el.style.display = "none";
            continue;
          }
          (this.drawSlot(l, { id: c, count: ia(c) > 1 ? o_ : 1 }),
            c > 0 && ia(c) > 1 && (l.cnt.textContent = "∞"));
        } else this.drawSlot(l, e.storage[r]);
        l.el.classList.toggle(
          "picked",
          ((i = this.picked) == null ? void 0 : i.area) === "s" &&
            this.picked.idx === r,
        );
      }
    }
    for (let r = 0; r < 9; r++) {
      const l = this.invHotbarSlots[r];
      (this.drawSlot(l, e.hotbar[r]),
        e.creative &&
          e.hotbar[r].id > 0 &&
          ia(e.hotbar[r].id) > 1 &&
          (l.cnt.textContent = "∞"),
        l.el.classList.toggle(
          "picked",
          ((s = this.picked) == null ? void 0 : s.area) === "h" &&
            this.picked.idx === r,
        ));
    }
    for (let r = 0; r < this.armorSlots.length; r++) {
      const l = this.armorSlots[r];
      (this.drawSlot(l, e.armor[r] ?? { id: 0, count: 0 }),
        l.el.classList.toggle(
          "picked",
          ((o = this.picked) == null ? void 0 : o.area) === "a" &&
            this.picked.idx === r,
        ),
        l.el.classList.toggle(
          "armor-filled",
          (((a = e.armor[r]) == null ? void 0 : a.id) ?? 0) > 0,
        ));
    }
    (this.renderRankProgress(),
      this.renderSoldierPreview(),
      this.renderEquipmentRepair());
  }
  renderRankProgress() {
    const e = Np(this.currentXp),
      t = Qc.findIndex((a) => a.name === e.name),
      i = t >= 0 ? Qc[t + 1] : void 0,
      s = e.minXp,
      o = i
        ? Math.max(0, Math.min(1, (this.currentXp - s) / (i.minXp - s)))
        : 1;
    ((j("invrankname").textContent = Iw(e)),
      (j("invrankxp").textContent = i
        ? `${this.currentXp} / ${i.minXp} XP`
        : U("maxRankXp", { xp: this.currentXp })),
      (j("invrankfill").style.width = `${Math.round(o * 100)}%`),
      (j("invranknext").textContent = i
        ? U("untilNextRank", {
            rank: Iw(i),
            xp: Math.max(0, i.minXp - this.currentXp),
          })
        : U("allRanksEarned")));
  }
  renderSoldierPreview() {
    this.onInventoryPreview(this.invOpen);
  }
  shiftArmorClick(e, t) {
    var h;
    const i = this.inventory;
    if (!i) return !1;
    const s = (d) => (d === "h" ? i.hotbar : d === "a" ? i.armor : i.storage);
    if (e === "a") {
      const d = i.armor[t];
      if (!d || d.id <= 0) return !0;
      const u = [...i.hotbar, ...i.storage].find((f) => f.id === 0);
      return (
        u &&
          (Object.assign(u, d, { count: 1 }),
          Object.assign(d, {
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
      (i.creative && e === "s"
        ? (o = fd[t] ?? 0)
        : (o = ((h = s(e)[t]) == null ? void 0 : h.id) ?? 0),
      !Fc(o))
    )
      return !1;
    const a = ra(o),
      r = ir.indexOf(a.slot);
    if (r < 0) return !1;
    const l = i.armor[r],
      c = { ...l };
    if (i.creative && e === "s")
      ((l.id = o),
        (l.count = 1),
        (l.durability = or(o)),
        (l.suppressorDurability = 0));
    else {
      const d = s(e)[t],
        u = { ...d };
      (Object.assign(l, u, { count: 1 }),
        c.id > 0
          ? Object.assign(d, c, { count: 1 })
          : Object.assign(d, {
              id: 0,
              count: 0,
              durability: 0,
              suppressorDurability: 0,
            }));
    }
    return (i.save(), (this.picked = null), !0);
  }
  slotClick(e, t, i = !1, s = !1, o = !1) {
    var r, l, c;
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
        this.transferClick(e, t, s || o, i);
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
          (fd[t] ?? 0) !== 0 &&
            (this.picked =
              ((r = this.picked) == null ? void 0 : r.area) === "s" &&
              this.picked.idx === t
                ? null
                : { area: e, idx: t });
        else if (((l = this.picked) == null ? void 0 : l.area) === "s") {
          const h = fd[this.picked.idx] ?? 0;
          e === "a"
            ? (h === 0 || a.canEquipInSlot(h, t)) &&
              ((a.armor[t] = h
                ? {
                    id: h,
                    count: 1,
                    durability: or(h),
                    suppressorDurability: 0,
                  }
                : { id: 0, count: 0 }),
              a.save(),
              (this.picked = null))
            : ((a.hotbar[t] = { id: h, count: ia(h) > 1 ? o_ : 1 }),
              a.save(),
              (this.picked = null));
        } else
          e === "a"
            ? ((c = this.picked) == null ? void 0 : c.area) === "a" &&
              this.picked.idx === t
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
      const s = this.transferCursor;
      if (s.area === "c" || s.area === "f") return;
      const o = this.transferList(s.area)[s.idx],
        a = Math.min(s.count, o.count);
      (this.onDropItem(
        o.id,
        a,
        o.durability ?? or(o.id),
        o.suppressorDurability ?? Vl(o.id),
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
    ((i == null ? void 0 : i.id) > 0 &&
      (this.onDropItem(
        i.id,
        i.count,
        i.durability ?? or(i.id),
        i.suppressorDurability ?? Vl(i.id),
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
    var d;
    const i = this.inventory;
    if (!i || i.creative) return;
    const s = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t];
    if (!s || s.id <= 0) return;
    const o = s.id;
    if (!kA(o)) return;
    const a = Math.floor(qh(o) * rb(o, s.durability)),
      r = s.count;
    this.clearTransferCursor();
    const l = await this.openSellQuantity(o, r, a);
    if (!l) return;
    const c = (e === "h" ? i.hotbar : e === "a" ? i.armor : i.storage)[t];
    if (!c || c.id !== o) return;
    const h = this.onSellItem(e, t, o, l);
    h > 0 &&
      (this.setBalance(this.balance + a * h),
      (d = this.sfx) == null || d.sell(),
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
    const s = (o) => Math.max(1, Math.min(t, Math.round(t * o)));
    return this.openQtyModal({
      title: U("sellModalTitle", { name: ad(e), price: i }),
      max: t,
      initial: t,
      presets: [
        { label: z.language === "en" ? "1 item" : "1 шт", value: 1 },
        { label: "25%", value: s(0.25) },
        { label: "50%", value: s(0.5) },
        { label: "75%", value: s(0.75) },
        { label: "100%", value: t },
      ],
      line: (o) => ({ text: U("youWillReceive", { total: o * i }), over: !1 }),
      confirmLabel: U("sell"),
    });
  }
};
