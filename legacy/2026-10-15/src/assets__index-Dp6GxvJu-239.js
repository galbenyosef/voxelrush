// assets__index-Dp6GxvJu 239 — player
// Lines 129782-139050 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class Zse {
  constructor() {
    w(this, "renderer");
    w(this, "shaders");
    w(this, "shaderFrame", null);
    w(this, "scene");
    w(this, "camera");
    w(this, "net", new ote());
    w(this, "voice", $J);
    w(this, "chatTts", ZJ);
    w(this, "input", new Qee());
    w(this, "soldierYaw", 0);
    w(this, "soldierPitch", 0);
    w(this, "soldierInputAt", 0);
    w(
      this,
      "remote",
      new Ree(
        (e) => this.net.send(e),
        (e, t) => {
          var i;
          return (i = this.vehicles) == null
            ? void 0
            : i.setRemoteView(e >= Cl ? -1 : e, t);
        },
        () => this.input.unlock(),
        () => this.input.lock(),
        (e, t, i) => this.world.surfaceColor(e, t, i),
        () => this.world.border ?? null,
        (e, t, i, s, o) =>
          V.drawNavigationMapOverlay(e, t, i, s, o, this.mapMarkers()),
      ),
    );
    w(this, "atlas");
    w(this, "world");
    w(this, "sky");
    w(this, "effects");
    w(this, "bulletHoles");
    w(this, "sfx", new fie());
    w(this, "toolModes", new CZ());
    w(this, "music", new Sie());
    w(this, "musicStarted", !1);
    w(this, "player", new KM());
    w(this, "remotes");
    w(this, "sessionName", "");
    w(this, "tacticalHud", new HJ());
    w(this, "projectiles");
    w(this, "weapons");
    w(this, "vehicles");
    w(this, "bots");
    w(this, "corpses");
    w(this, "deathCamT", -1);
    w(this, "animals");
    w(this, "fishing");
    w(this, "weather", null);
    w(this, "worldSites");
    w(this, "eggs");
    w(this, "knives");
    w(this, "knifeThrowAt", 0);
    w(this, "knifeThrowCd", 0);
    w(this, "knifeToken", 0);
    w(this, "eggThrowAt", 0);
    w(this, "c4");
    w(this, "landmarkAtmosphere");
    w(this, "casino");
    w(this, "computer");
    w(this, "screens");
    w(this, "borderVisual");
    w(this, "claimsUI");
    w(this, "propertyUpdateAt", 0);
    w(this, "claimSync");
    w(this, "signEditorPos");
    w(this, "baseCaptures", new Map());
    w(this, "baseCaptureSeconds", 300);
    w(this, "spawnNotice", new WZ());
    w(this, "front");
    w(this, "clickToPlay", new SY());
    w(this, "training", new xY());
    w(this, "trainingStarted", !1);
    w(this, "trainingTimer", 0);
    w(this, "trainingWalked", 0);
    w(this, "trainingMined", 0);
    w(this, "trainingEarned", !1);
    w(this, "trainingMap", !1);
    w(this, "trainingInventory", !1);
    w(this, "trainingShop", !1);
    w(this, "trainingLast", new k(NaN, 0, 0));
    w(this, "lastBalance", null);
    w(this, "autumn", null);
    w(this, "c4ActionAt", 0);
    w(this, "blueprintPreview");
    w(this, "blueprintActionAt", 0);
    w(this, "environment");
    w(this, "vision");
    w(this, "worldedit");
    w(this, "inventory");
    w(this, "drops");
    w(this, "backpacks");
    w(this, "crewHud", new wJ());
    w(this, "selfBody", null);
    w(this, "myDisguise", null);
    w(this, "viewBeforeDisguise", null);
    w(this, "disguiseSnapped", !1);
    w(this, "thirdPerson", !1);
    w(this, "frontView", !1);
    w(this, "footCameraDistance", 0);
    w(this, "footCameraShoulder", 0.35);
    w(this, "tpAim", null);
    w(this, "tpAimData", {
      origin: new k(),
      target: new k(),
      muzzle: null,
      laser: null,
    });
    w(this, "tpMuzzle", new k());
    w(this, "tpLaser", new k());
    w(this, "emote", 0);
    w(this, "emoteStart", 0);
    w(this, "emoteOrigin", new k());
    w(this, "sentReload", !1);
    w(this, "selfShotUntil", 0);
    w(this, "previousFeet", new k());
    w(this, "selfFire", null);
    w(this, "selfLightT", Vr);
    w(this, "localFire");
    w(this, "localBurning", !1);
    w(this, "chute", null);
    w(this, "chuteBank", 0);
    w(this, "chuteYaw", 0);
    w(this, "parachuteTPV", !1);
    w(this, "vmLight");
    w(this, "vmKeyLight");
    w(this, "myId", 0);
    w(this, "currentPlanet", Si.EARTH);
    w(this, "raidActive", !1);
    w(this, "operations");
    w(this, "raidZone", null);
    w(this, "timeOfDay", 6e3);
    w(this, "timeFrozen", !1);
    w(this, "timeDrift", 0);
    w(this, "running", !1);
    w(this, "ending", !1);
    w(this, "restartExpected", !1);
    w(this, "followingRestart", !1);
    w(this, "sensScale", 1);
    w(this, "moveTimer", 0);
    w(this, "chairExitPending", !1);
    w(this, "pingTimer", 0);
    w(this, "lastRtt", 0);
    w(this, "breakCd", 0);
    w(this, "mining", null);
    w(this, "miningMesh", null);
    w(this, "miningVisualBlock", -1);
    w(this, "crackMats", null);
    w(this, "miningStage", -1);
    w(this, "miningPopAt", -1 / 0);
    w(this, "homePos", null);
    w(this, "homeKey", "");
    w(this, "lastDeathPos", null);
    w(this, "chipT", 0);
    w(this, "minedThisFrame", !1);
    w(this, "medkitCd", 0);
    w(this, "militaryMedkitCd", 0);
    w(this, "medkitChannelItem", E.MEDKIT);
    w(this, "eatCd", 0);
    w(this, "animalVoiceT", 3);
    w(this, "ambienceT", 8);
    w(this, "insidePyramid", !1);
    w(this, "medkitChannel", 0);
    w(this, "bandageCd", 0);
    w(this, "bandageChannel", 0);
    w(this, "drillHitCd", 0);
    w(this, "meleeCd", 0);
    w(this, "selfSwingAt", -9);
    w(this, "tmpCrush", new k());
    w(this, "swingSentAt", -9);
    w(this, "hammerCd", 0);
    w(this, "deathTimer", 0);
    w(this, "deathCamRoll", 1.2);
    w(this, "reviveUI", new DJ());
    w(this, "healHud", new CJ(() => z.language === "en"));
    w(this, "throwGauge", new kJ());
    w(this, "grenadeWarning", new LJ());
    w(this, "healChannelWas", 0);
    w(this, "healLanded", 0);
    w(this, "botView", new bu());
    w(this, "botViewMatrix", new bt());
    w(this, "downedBlend", 0);
    w(this, "hudTimer", 0);
    w(this, "frameIndex", 0);
    w(this, "basePixelRatio", 1);
    w(this, "adaptiveScale", 1);
    w(this, "frameEma", 16.7);
    w(this, "adaptiveAt", 0);
    w(this, "cropQueryTimer", 0);
    w(this, "cropQueryKey", "");
    w(this, "cropProgress", new Map());
    w(this, "minimapTimer", 0);
    w(this, "minimapSkipTicks", 0);
    w(this, "minimapLastZoom", 0);
    w(this, "minimapLastX", 1 / 0);
    w(this, "minimapLastZ", 1 / 0);
    w(this, "mobCrouchBtnEl");
    w(this, "mobProneBtnEl");
    w(this, "mobRocketCdMax", 0);
    w(this, "mobFireCdMax", 0);
    w(this, "mobChuteBtnEl");
    w(this, "mobVisionBtnEl");
    w(this, "targetScoreTotal", 0);
    w(this, "targetShots", 0);
    w(this, "targetLastHitAt", -1 / 0);
    w(this, "musicMoodT", 0);
    w(this, "pendingMood", "open");
    w(this, "pendingMoodT", 0);
    w(this, "combatUntil", 0);
    w(this, "fpsFrames", 0);
    w(this, "fpsTime", 0);
    w(this, "fpsVal", 0);
    w(this, "prevDriving", !1);
    w(this, "friends", new Set());
    w(this, "worldObjects", []);
    w(this, "nuclearStrikes", new Map());
    w(this, "lastTab", []);
    w(this, "chatRate", new TY());
    w(this, "lastAnonymousShotFxAt", 0);
    w(this, "invDirty", !1);
    w(this, "inventoryReady", !1);
    w(this, "invSeq", 0);
    w(this, "shotsSent", 0);
    w(this, "shotLog", []);
    w(this, "nextVehicleSpawnRequestId", 1);
    w(this, "pendingVehicleSpawns", new Map());
    w(this, "localSinglePlayer", !1);
    w(this, "droneFlight", null);
    w(this, "keepInventory", !1);
    w(this, "invSaveTimer", 0);
    w(this, "loadingShown", !0);
    w(this, "loadingStartedAt", 0);
    w(this, "chestPos", null);
    w(this, "backpackId", null);
    w(this, "furnacePos", null);
    w(this, "camPose", { pos: new k(), quat: new Jt() });
    w(this, "tmpV", new k());
    w(this, "tmpV2", new k());
    w(this, "tmpFishTip", new k());
    w(this, "projectileAudioRight", new k());
    w(this, "blockFxWindow", 0);
    w(this, "blockFxCount", 0);
    w(this, "debugHitboxes", !1);
    w(this, "hitboxGroup", null);
    w(this, "hitboxMat", null);
    w(this, "hitboxBoxGeo", null);
    w(this, "hitboxSphereGeos", new Map());
    w(this, "tmpAimEye", new k());
    w(this, "tmpAimDir", new k());
    w(this, "tmpAimCandidate", new k());
    w(this, "tmpAimBestDir", new k());
    w(this, "tmpAimLosOrigin", new k());
    w(this, "tmpProjSeg", new k());
    w(this, "bobPhase", 0);
    w(this, "bobAmp", 0);
    w(this, "celestialDetail", 1);
    w(this, "underwater", !1);
    w(this, "underwaterMix", 0);
    w(this, "inLava", !1);
    w(this, "waterSurfaceY", 0);
    w(this, "bubbleT", 0);
    w(this, "landDip", 0);
    w(this, "wasOnGround", !0);
    w(this, "windX", 0);
    w(this, "windZ", 0);
    w(this, "initialized", !1);
    w(this, "welcomes", 0);
    w(this, "loopSeenAt", 0);
    w(this, "battleProfileApplied", !1);
    w(this, "frameIntervalMs", 0);
    w(this, "holdPolicy", -1);
    w(this, "lastCosmeticLooks", "");
    w(this, "ownAppearance", null);
    w(this, "lastCosmeticSlot", -1);
    w(this, "sentInspect", !1);
    w(this, "sentInspectSequence", 0);
    w(this, "inventoryPreview");
    w(this, "shopInventoryRevision", 0);
    w(this, "movementEpoch", 0);
    w(this, "sightCache", new Map());
    w(this, "sightEye", new k());
    w(this, "positionRevision", 0);
    w(this, "playerEpochs", new Map());
    w(this, "animalCryAt", new Map());
    w(this, "stepPosition", new k());
    w(this, "stepReady", !1);
    w(this, "stepDistance", 0);
    w(this, "compassPoints", []);
    w(this, "compassMarkers", []);
    w(this, "compassRefreshAt", 0);
    w(this, "aimAssist", new AJ());
    w(this, "aimPool", []);
    w(this, "aimList", []);
    w(this, "aimHulls", new Map());
    w(this, "aimFrame", {
      dt: 0,
      eyeX: 0,
      eyeY: 0,
      eyeZ: 0,
      yaw: 0,
      pitch: 0,
      lookYaw: 0,
      lookPitch: 0,
      firing: !1,
      ads: !1,
      moving: !1,
      deliberate: !1,
      strength: 0,
      zoom: 1,
      preferVehicles: !1,
      maxDist: 90,
      vehicleMaxDist: 220,
    });
    w(this, "headlightAim", new Jt());
    w(this, "headlightEuler", new hi(0, 0, 0, "YXZ"));
    w(this, "flashlight", null);
    w(this, "lampRaycast", (e, t, i) => this.world.raycast(e, t, i));
    w(this, "weldingUntil", 0);
    w(this, "weldSfxAt", 0);
    w(this, "weldSparkAt", 0);
    w(
      this,
      "welderMenu",
      new pJ({
        vehicle: (e) => {
          const t = this.vehicles.vehicles.get(e);
          return t
            ? {
                id: t.id,
                type: t.type,
                hp: t.hp,
                maxHp: t.maxHp,
                armor: t.armor,
                camo: t.camo,
                ownerName: t.ownerName,
                crewed: t.driver >= 0 || t.passengers.size > 0,
              }
            : null;
        },
        balance: () => V.getBalance(),
        creative: () => this.inventory.creative,
        me: () => this.sessionName,
        repairTick: (e) => {
          this.inventory.held() === E.WELDER &&
            (this.net.send(new Xe(ue.C_VEH_REPAIR).u16(e)),
            this.weapons.hooks.wearHeld(1));
        },
        installArmor: (e, t) => {
          (this.sendInventory(),
            this.net.send(new Xe(ue.C_VEH_ARMOR).u16(e).u8(t)));
        },
        pack: (e) => {
          (this.sendInventory(), this.net.send(new Xe(ue.C_VEH_PICKUP).u16(e)));
        },
        weldFx: (e) => {
          const t = this.vehicles.vehicles.get(e);
          if (!t) return;
          const i = t.pos
            .clone()
            .add(
              new k(
                (Math.random() - 0.5) * 2.2,
                0.6 + Math.random() * 1.2,
                (Math.random() - 0.5) * 3,
              ),
            );
          (this.effects.weldSparks(i, 1.1),
            this.effects.flash(i, 3, 0.07, 13032703),
            this.sfx.weldTick(i.distanceTo(this.player.pos)),
            this.weapons.setWelding(!0),
            (this.weldingUntil = performance.now() + 200));
        },
        closed: () => {
          V.anyOpen() || this.input.lock();
        },
      }),
    );
    w(this, "myXp", 0);
    w(this, "gunnerSight", null);
    w(this, "tmpGunPoint", new k());
    w(
      this,
      "skillsMenu",
      new yJ({
        nick: () => this.sessionName,
        hp: () => ({ hp: this.player.hp, max: this.player.maxHp }),
        balance: () => V.getBalance(),
        rankXp: () => this.myXp,
        closed: () => {
          V.anyOpen() || this.input.lock();
        },
      }),
    );
  }
  updateTraining(e) {
    if (!this.training.active) return;
    (V.mapOpen && (this.trainingMap = !0),
      V.invOpen && (this.trainingInventory = !0),
      V.shopOpen && (this.trainingShop = !0));
    const t = this.player.pos;
    if (Number.isFinite(this.trainingLast.x) && this.player.alive) {
      const i = Math.hypot(
        t.x - this.trainingLast.x,
        t.z - this.trainingLast.z,
      );
      i < 3 && (this.trainingWalked += i);
    }
    (this.trainingLast.copy(t),
      !((this.trainingTimer -= e) > 0) &&
        ((this.trainingTimer = 0.25),
        this.training.update(
          {
            mobile: this.input.mobile,
            walked: this.trainingWalked,
            mapOpened: this.trainingMap,
            inventoryOpened: this.trainingInventory,
            shopOpened: this.trainingShop,
            safeZoneExists: this.spawnNotice.active,
            outsideSafeZone:
              this.spawnNotice.active &&
              !this.spawnNotice.contains(t.x, t.z, this.currentPlanet),
            blocksMined: this.trainingMined,
            earned: this.trainingEarned,
          },
          !this.loadingShown &&
            this.player.alive &&
            !V.anyOpen() &&
            !z.cinematicHud,
        )));
  }
  updateJoinScreen(e) {
    const t = z.language === "en",
      {
        received: i,
        built: s,
        total: o,
      } = this.world.readiness(this.player.pos.x, this.player.pos.z, 2),
      a = (e - this.loadingStartedAt) / 1e3,
      r = this.world.isLoaded(this.player.pos.x, this.player.pos.z),
      l = 0.12 + 0.38 * (i / o) + 0.5 * (s / o),
      c =
        i < o
          ? t
            ? "Receiving the world"
            : "Получение мира"
          : t
            ? "Building terrain"
            : "Строим местность";
    (V.loading.setProgress(l, c),
      r &&
        (s >= o || (s >= o * 0.75 && a > 6) || a > 18) &&
        ((this.loadingShown = !1), V.showLoading(!1)));
  }
  applyCameraBob(e, t) {
    const i = this.player;
    (i.onGround &&
      !this.wasOnGround &&
      (this.landDip = Math.min(1, Math.abs(i.vel.y) / 12)),
      (this.wasOnGround = i.onGround),
      (this.landDip = Math.max(0, this.landDip - e * 3.2)));
    const s = Math.hypot(i.vel.x, i.vel.z),
      o = i.onGround && s > 0.6,
      a = i.sprinting ? 11 : i.crouching || i.prone ? 5 : 8;
    o && (this.bobPhase += e * a);
    const r = o ? Math.min(1, s / 5.5) * (i.sprinting ? 1.25 : 1) : 0;
    if (
      ((this.bobAmp += (r - this.bobAmp) * (1 - Math.exp(-9 * e))),
      !z.cameraBob)
    )
      return;
    const l = (t ? 0.25 : 1) * (i.prone ? 0.35 : i.crouching ? 0.6 : 1),
      c = this.bobAmp * l;
    if (c < 0.001 && this.landDip <= 0) return;
    const h = Math.cos(this.bobPhase) * 0.055 * c,
      d = Math.abs(Math.sin(this.bobPhase)) * 0.045 * c - this.landDip * 0.16;
    (this.tmpV2.set(h, d, 0).applyQuaternion(this.camera.quaternion),
      this.camera.position.add(this.tmpV2),
      this.camera.rotateZ(Math.sin(this.bobPhase) * 0.011 * c));
  }
  loadSessionStorage(e, t) {
    const i = e === "local" && t ? `local_${t.worldId}` : e;
    ((this.inventory = new tX("fablecraft-inv-v3-" + i.replace(/\W+/g, "_"))),
      (this.inventory.onChange = () => {
        ((this.invDirty = !0),
          this.syncHeld(),
          this.inventoryReady &&
            this.net.connected &&
            (this.sendInventory(),
            (this.invDirty = !0),
            (this.invSaveTimer = 0)));
      }),
      (V.inventory = this.inventory),
      (this.homePos = null),
      (this.homeKey = "fablecraft-home-" + i.replace(/\W+/g, "_")));
    const s = localStorage.getItem(this.homeKey);
    if (s)
      try {
        const o = JSON.parse(s);
        this.homePos = new k(o.x, o.y, o.z);
      } catch {}
  }
  initialize(e, t) {
    ((this.renderer = new oy({
      antialias: Ts().antialias,
      powerPreference: n8 ? "low-power" : "high-performance",
    })),
      this.renderer.setSize(innerWidth, innerHeight),
      (this.renderer.shadowMap.type = iS),
      (this.renderer.shadowMap.autoUpdate = !1),
      (this.renderer.toneMapping = nS),
      (this.renderer.toneMappingExposure = 1.15),
      (this.shaders = new Hse(this.renderer)),
      document.getElementById("game").appendChild(this.renderer.domElement),
      (this.scene = new nh()),
      (this.scene.matrixAutoUpdate = !1),
      (this.operations = new RJ(
        this.scene,
        (a) =>
          this.net.send(
            a ? new Xe(ue.C_CHAT).str(a) : new Xe(ue.C_OPERATION_ACTION).u8(1),
          ),
        () => this.net.send(new Xe(ue.C_MISSION_STATUS)),
      )),
      Lf(this.scene),
      (this.scene.fog = new fp(13625599, 60, 180)),
      (this.camera = new Cs(z.fov, innerWidth / innerHeight, 0.08, 1500)),
      (this.camera.rotation.order = "YXZ"),
      this.scene.add(this.camera),
      (this.vision = new sse(this.renderer, this.scene, this.camera)),
      (this.localFire = TM(!0)),
      this.camera.add(this.localFire),
      (this.vmLight = new A0(16773336, 4212306, 0)),
      this.vmLight.layers.set(j2),
      this.camera.add(this.vmLight),
      (this.vmKeyLight = new Wr(16774886, 1.25)),
      this.vmKeyLight.layers.set(j2),
      this.vmKeyLight.position.set(-0.55, 0.85, 0.5));
    const i = new $t();
    (i.position.set(0, -0.1, -1),
      this.camera.add(i, this.vmKeyLight),
      (this.vmKeyLight.target = i));
    const s = z.quality !== "custom" && n8;
    (VT(s ? Math.min(Ts().modelDetail, 1) : Ts().modelDetail),
      (this.atlas = Bk(s ? Math.min(Ts().textureSize, 64) : Ts().textureSize)),
      (V.atlas = this.atlas),
      (V.sfx = this.sfx),
      (this.world = new WM(this.scene, this.atlas.texture)),
      (this.borderVisual = new BZ(this.scene)),
      (this.claimsUI = new DZ(
        this.scene,
        () => z.nick,
        () => z.language === "en",
      )),
      (this.world.onChestSlam = (a, r, l, c, h) =>
        this.chestSound(a, r, l, !1, h / 3)),
      (this.celestialDetail = Ts().celestialDetail),
      (this.sky = new Xg(this.scene, Ts().shadowSize, this.celestialDetail)),
      (this.effects = new $M(this.scene)),
      (this.bulletHoles = new Gte(this.scene, (a, r, l) =>
        this.world.getBlock(a, r, l),
      )),
      this.effects.blastFx.setCamera(this.camera),
      this.effects.setGroundProbe((a, r, l) => {
        const c = Math.floor(a),
          h = Math.floor(l);
        for (let d = Math.floor(r); d >= Math.floor(r) - 6 && d >= 0; d--) {
          const u = this.world.getBlock(c, d, h);
          if (u > 0 && de[u].solid) return d + 1;
        }
        return null;
      }),
      (this.environment = new nse(this.world, this.effects)),
      (this.worldSites = new ise(this.scene, () => this.sfx.siren())),
      (this.casino = new FQ(this.scene, {
        playerId: () => this.myId,
        openChat: (a = "") => {
          (V.openChat(a), this.input.unlockForUi());
        },
        chatOpen: () => V.chatOpen,
        entityLighting: (a, r, l) =>
          dr(this.world, new k(a, r, l), 1 - this.sky.dayness),
        tableSound: (a, r) => this.sfx.blackjack(a, r),
        send: (a) => this.net.send(new Xe(ue.C_CASINO).str(JSON.stringify(a))),
        unlock: () => this.input.unlockForUi(),
        lock: () => {
          V.anyOpen() || this.input.lock();
        },
        language: () => z.language,
        balance: () => V.getBalance(),
        connected: () => this.net.connected,
        notify: (a) => V.addChat(1, a),
        raycast: (a, r, l) => this.world.raycast(a, r, l),
        held: () => this.inventory.held(),
        colliders: (a) => {
          this.world.casinoColliders = a;
        },
        chunkMaterial: () => this.world.chunkMaterial,
        atlas: () => this.atlas.texture,
        lighting: (a, r, l) => this.world.cellLighting(a, r, l),
        sound: (a, r = 0, l = 0) => {
          a === "win" || a === "bigwin"
            ? this.sfx.casinoWin(a === "bigwin")
            : a === "sit"
              ? this.sfx.casinoSit()
              : this.sfx.casinoChime(r, l);
        },
      })),
      (this.computer = new JQ(this.scene, {
        canUse: () => Ap(Ca, su, "computer.use"),
        send: (a) =>
          this.net.send(new Xe(ue.C_COMPUTER).str(JSON.stringify(a))),
        unlock: () => {
          (this.input.unlockForUi(),
            this.input.keys.clear(),
            this.input.pressed.clear(),
            (this.input.uiOpen = !0));
        },
        lock: () => {
          V.anyOpen() || this.input.lock();
        },
        language: () => z.language,
        notify: (a) => V.addChat(1, a),
        held: () => this.inventory.held(),
        raycast: (a, r, l) => this.world.raycast(a, r, l),
        colliders: (a) => {
          this.world.computerColliders = a;
        },
        lighting: (a, r, l) => this.world.cellLighting(a, r, l),
      })),
      (this.screens = new lJ(this.scene, this.world)),
      (this.remotes = new oZ(this.scene, this.atlas.texture, this.world)),
      (this.front = new EZ({
        send: (a) => this.net.send(new Xe(ue.C_FRONT).str(JSON.stringify(a))),
        scene: this.scene,
        lang: () => z.language,
        mobile: this.input.mobile,
        lockInput: () => {
          V.anyOpen() || this.input.lock();
        },
        unlockInput: () => this.input.unlock(),
        openMenu: () => V.showPause(),
        drawIcon: (a, r) => Lo(a, r, this.atlas),
        itemName: (a) => Ki(a),
        surface: (a, r) => {
          var l;
          return (l = this.world.border) != null &&
            l.radius &&
            !D4(this.world.border, a, r)
            ? 0
            : this.world.surfaceColor(a, r, 1);
        },
        sfx: {
          uiTick: (a) => this.sfx.uiTick(a),
          capture: (a) => this.sfx.uiTick(a),
        },
        onTeamsChanged: () => {
          (this.remotes.refreshRoles(),
            this.bots.refreshPlates(),
            this.world.setViewSwap(
              this.front.active && this.front.team === 2
                ? [ow + Ux[1], ow + Ux[2]]
                : null,
            ));
        },
        ammo: () => this.weapons.ammoStatus(),
        vehicleName: (a) => Zs(a),
        face: (a) => {
          ((this.player.yaw = a), (this.player.pitch = 0));
        },
        onMapChange: (a, r) => this.frontMapChange(a, r),
        regen: (a, r) => {
          this.inventory.addItem(a, r) <= 0 ||
            (this.inventory.save(),
            V.renderHotbar(),
            this.syncHeld(),
            (this.invDirty = !0));
        },
        matchEnd: {
          atlas: () => this.atlas.texture,
          high: () => !this.input.mobile && Ts().shadowSize > 0,
          guestPrompt: () => {
            if (!(Me != null && Me.is_guest) || this.localSinglePlayer)
              return null;
            const a = Math.floor(bZ() / 60);
            return a >= 15 && wZ() >= 1
              ? { name: Me.username, minutes: a }
              : null;
          },
          onOwnDrop: () => {
            C4().catch(() => {});
          },
          sfx: {
            uiTick: (a) => this.sfx.uiTick(a),
            matchEnd: (a) => this.sfx.matchEnd(a),
            podiumHit: (a) => this.sfx.podiumHit(a),
            reelTick: () => this.sfx.reelTick(),
            dropReveal: (a) => this.sfx.dropReveal(a),
            voteCast: () => this.sfx.voteCast(),
            voteTick: () => this.sfx.voteTick(),
            voteWin: () => this.sfx.voteWin(),
          },
        },
      })),
      KX((a) => {
        if (!this.front.active || !this.front.team) return null;
        const r = this.remotes.idByName(a),
          l = r !== void 0 ? this.front.playerTeams.get(r) : void 0;
        return l
          ? l === this.front.team
            ? { side: "ally", range: Fg.ally }
            : { side: "enemy", range: Fg.enemy }
          : null;
      }),
      (this.remotes.disguiseFactory = (a) => rR(a, this.world)),
      (this.voice.positionOf = (a) => this.remotes.getPos(a)),
      (this.voice.localPosition = () => this.player.pos),
      (this.voice.localYaw = () => this.player.yaw),
      (this.projectiles = new kne(
        this.scene,
        this.world,
        this.effects,
        this.sfx,
      )),
      (this.weapons = new Lne(
        this.scene,
        this.camera,
        this.world,
        this.effects,
        this.sfx,
        this.remotes,
        this.projectiles,
        this.atlas.texture,
      )),
      (this.weapons.onSwing = () => {
        const a = performance.now() / 1e3;
        ((this.selfSwingAt = a),
          a - this.swingSentAt >= 0.13 &&
            ((this.swingSentAt = a),
            this.net.send(new Xe(ue.C_ANIMATION).u8(3).u16(0))));
      }),
      (this.weapons.onAmmoChange = () => {
        ((this.invDirty = !0), V.renderHotbar());
      }),
      (this.vehicles = new Ea(
        this.scene,
        this.world,
        this.effects,
        this.sfx,
        this.projectiles,
      )),
      (this.bots = new qne(this.scene, this.world)),
      (this.bots.battle = () => this.front.active && !!this.front.team),
      (this.corpses = new W4(this.scene, {
        groundAt: (a, r, l) => this.world.groundAt(a, r, l),
        impact: (a, r, l) => {
          const c = a.distanceTo(this.camera.position);
          c > 60 ||
            (l || this.effects.bulletImpact(a, 7167047),
            this.sfx.bodyFall(c, r, l));
        },
        wound: (a, r) => {
          (this.effects.bloodHit(a), r || this.effects.bloodHit(a));
        },
      })),
      (this.bots.corpses = this.corpses),
      (this.animals = new Xee(this.scene, this.world)),
      (this.animals.carcasses.hooks = {
        groundAt: (a, r, l) => this.world.groundAt(a, r, l),
        crush: (a, r, l, c, h) => {
          var f;
          const d = this.tmpCrush.set(a.x, h - 0.55, a.z),
            u =
              (f =
                de[
                  this.world.getBlock(
                    Math.floor(a.x),
                    Math.floor(h) - 1,
                    Math.floor(a.z),
                  )
                ]) == null
                ? void 0
                : f.color;
          (this.effects.runOver(d, r, l, Math.max(3, c), !0, h, u),
            this.sfx.runOver(
              a.distanceTo(this.camera.position),
              Math.max(3, c),
              !0,
            ));
        },
        thud: (a, r) => {
          a.distanceTo(this.camera.position) < 60 &&
            this.effects.bodyThud(a, r);
        },
        poof: (a, r) => {
          a.distanceTo(this.camera.position) < 80 &&
            this.effects.deathPoof(a, r);
        },
      }),
      (this.fishing = new Jne(this.scene)),
      (this.worldedit = new ose(this.scene)),
      this.loadSessionStorage(e, t),
      (this.drops = new Pie(this.scene, this.atlas.texture, this.world)),
      (this.drops.onTake = (a) => this.net.send(new Xe(ue.C_DROP_TAKE).u16(a))),
      (this.backpacks = new Nie(this.scene, this.world)),
      this.sfx.setVolume(z.sfxVolume),
      this.music.setVolume(z.musicVolume),
      this.applyQuality(),
      this.wireHooks(),
      this.wireUI(),
      this.input.bind(this.renderer.domElement, BS),
      (this.input.onMobileSettings = () => V.showPause()),
      (this.spawnNotice.onTeleport = () => this.requestRandomTeleport()),
      (this.input.onMobileTab = () => {
        var a;
        if ((a = this.front) != null && a.active) {
          this.front.toggleBoard();
          return;
        }
        (this.renderTab(), V.showTab(!V.tabOpen));
      }),
      (this.input.onMobileCargo = () => this.vehicles.toggleCargo()),
      (this.input.onMobileToolMode = () => this.toggleToolMode()),
      (this.input.onLookTap = () => {
        const a = V.anyOpen() || this.remote.blocking;
        if (
          !(
            (this.input.locked || this.input.mobile) &&
            !a &&
            this.player.alive &&
            !this.player.downed &&
            (!this.remote.open || !!this.vehicles.mine)
          ) ||
          z.mobileLayoutEdit ||
          this.vehicles.driving()
        )
          return;
        const l = this.inventory.held();
        l <= 0 ||
          (l >= 256 && l !== E.COMPUTER && !wo(l) && !Tl(l)) ||
          this.placeHeld(
            this.player.eyePos(this.tmpV),
            this.player.lookDir(this.tmpV2),
          );
      }),
      this.renderer.domElement.addEventListener("pointerdown", () => {
        this.running && this.startGameAudio();
      }),
      this.renderer.domElement.addEventListener("click", () => {
        var a, r;
        this.running &&
          !V.anyOpen() &&
          !this.remote.blocking &&
          !this.input.locked &&
          (this.input.mobile || this.input.lock(),
          z.autoFullscreen &&
            !document.fullscreenElement &&
            ((r = (a = document.documentElement).requestFullscreen) == null ||
              r.call(a).catch(() => {})));
      }),
      (this.input.onLockChange = (a) => {
        if (a) {
          if (this.remote.blocking || V.anyOpen()) {
            this.input.unlockForUi();
            return;
          }
          this.startGameAudio();
        } else
          this.running &&
            !this.input.mobile &&
            setTimeout(() => {
              !this.running ||
                this.input.locked ||
                V.anyOpen() ||
                this.remote.open ||
                performance.now() - this.input.lockRequestedAt < 400 ||
                V.showPause();
            }, 120);
      }));
    let o = !1;
    (window.addEventListener("resize", () => {
      o ||
        ((o = !0),
        requestAnimationFrame(() => {
          o = !1;
          const a = Math.max(1, innerWidth),
            r = Math.max(1, innerHeight);
          (this.renderer.setSize(a, r),
            (this.camera.aspect = a / r),
            this.camera.updateProjectionMatrix());
        }));
    }),
      window.addEventListener("focus", () => {
        var a, r;
        this.running &&
          !this.input.mobile &&
          z.autoFullscreen &&
          !document.fullscreenElement &&
          ((r = (a = document.documentElement).requestFullscreen) == null ||
            r.call(a).catch(() => {}));
      }),
      window.addEventListener("pagehide", () => {
        this.running &&
          (this.localSinglePlayer || qx(),
          this.sfx.stopVehicles(),
          Xt.tick(0, !0),
          this.sendInventory(),
          this.localSinglePlayer && this.net.requestLocalSave());
      }),
      window.setInterval(() => {
        this.running &&
          document.hidden &&
          !this.localSinglePlayer &&
          this.net.connected &&
          this.net.send(
            new Xe(ue.C_PING)
              .u32(performance.now() & 4294967295)
              .u16(this.lastRtt),
          );
      }, 5e3),
      document.addEventListener("visibilitychange", () => {
        (this.running &&
          document.visibilityState === "visible" &&
          !this.localSinglePlayer &&
          this.net.connected &&
          (this.net.expectWord(3500, c3),
          this.net.send(
            new Xe(ue.C_PING)
              .u32(performance.now() & 4294967295)
              .u16(this.lastRtt),
          ),
          (this.pingTimer = 0)),
          !(!this.running || document.visibilityState !== "hidden") &&
            (this.sfx.stopVehicles(),
            Xt.tick(0, !0),
            this.sendInventory(),
            this.localSinglePlayer && this.net.requestLocalSave()));
      }),
      document.addEventListener("keydown", (a) => {
        var h, d, u;
        if (
          !this.running ||
          vY() ||
          (a.code !== "Escape" &&
            !(a.code === "Tab" && V.tabOpen) &&
            (h = a.target) != null &&
            h.closest('input, textarea, select, [contenteditable="true"]')) ||
          (a.code === "Tab" && V.anyOpen() && !V.tabOpen)
        )
          return;
        if (a.code === "Escape" && V.resumeFromPause()) {
          a.preventDefault();
          return;
        }
        if (
          a.code === "Escape" &&
          (d = this.front) != null &&
          d.overlayOpen &&
          !V.anyOpen(this.front.overlayElement)
        ) {
          (a.preventDefault(), V.showPause());
          return;
        }
        const r = z.binds.inventory,
          l = z.binds.shop,
          c = z.binds.map;
        if (
          (V.invOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(), V.closeInventory(), this.input.lock()),
          V.shopOpen &&
            (a.code === l || a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            V.closeShop(),
            V.anyOpen() || this.input.lock()),
          V.chestOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            V.closeChest(),
            V.anyOpen() || this.input.lock()),
          V.furnaceOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            V.closeFurnace(),
            V.anyOpen() || this.input.lock()),
          V.mapOpen &&
            a.code === "Escape" &&
            (a.preventDefault(), V.closeMap()),
          V.mapOpen &&
            (a.code === r || a.code === c) &&
            (a.preventDefault(),
            V.closeMap(),
            V.anyOpen() || this.input.lock()),
          a.code === "Tab" && (u = this.front) != null && u.active)
        ) {
          (a.preventDefault(), this.front.toggleBoard());
          return;
        }
        a.code === "Tab"
          ? (a.preventDefault(),
            V.tabOpen
              ? (V.showTab(!1), V.anyOpen() || this.input.lock())
              : V.anyOpen() ||
                (this.renderTab(), V.showTab(!0), this.input.unlock()))
          : V.tabOpen &&
            a.code === "Escape" &&
            (V.showTab(!1), V.anyOpen() || this.input.lock());
      }));
  }
  async start(e, t, i) {
    var c;
    ((this.lastCosmeticSlot = -1),
      (this.lastCosmeticLooks = ""),
      (this.ownAppearance = null),
      (this.sessionName = e),
      Xt.reset(),
      (Xt.send = (h) => this.net.send(new Xe(ue.C_SKILLS).str(h))),
      (Xt.onLevelUp = (h, d) => {
        const u = z.language === "en",
          f = Xt.label(h),
          p = Xt.effect(h, d);
        (V.addChat(
          1,
          u
            ? `Skill "${f}" reached level ${d}${d >= 20 ? " (mastered!)" : ""} · ${p}`
            : `Навык «${f}» повышен до ${d} уровня${d >= 20 ? " (мастерство!)" : ""} · ${p}`,
        ),
          gJ(h, f, d, p),
          this.sfx.levelUp(),
          this.skillsMenu.isOpen && this.skillsMenu.render());
      }),
      (this.localSinglePlayer = t === "local"),
      mI(),
      this.initialized
        ? this.loadSessionStorage(t, i)
        : (this.initialize(t, i), (this.initialized = !0)),
      this.wireNet());
    const s = z.language === "en",
      o =
        G2 ||
        (t === "local"
          ? s
            ? "Single player"
            : "Одиночная игра"
          : t.replace(/^wss?:\/\//, "").replace(/\/.*$/, ""));
    (V.showLoading(
      !0,
      t === "local"
        ? s
          ? "Starting your world"
          : "Запуск мира"
        : s
          ? "Connecting to the server"
          : "Подключение к серверу",
      o,
    ),
      V.loading.setProgress(0.04),
      V.loading.creep(0.11));
    const a = this.net.connect(t, e, i);
    ((c = this.operations) == null || c.refreshAccess(),
      await a,
      Xse(),
      (this.running = !0),
      this.shareWaypoint(),
      V.startGame(),
      (this.loadingShown = !0),
      (this.loadingStartedAt = performance.now()),
      V.showLoading(!0, s ? "Receiving the world" : "Получение мира"),
      V.loading.setProgress(0.12),
      V.loading.creep(0.3),
      V.renderHotbar(),
      V.setHP(100),
      this.syncHeld());
    let r = performance.now();
    const l = (h) => {
      if (
        !this.running ||
        (requestAnimationFrame(l),
        this.frameIntervalMs && h - r < this.frameIntervalMs)
      )
        return;
      const d = (h - r) / 1e3,
        u = Math.min(d, 0.05);
      r = h;
      try {
        this.tick(u, h, d);
      } catch (f) {
        console.error(f);
      }
    };
    requestAnimationFrame(l);
  }
  async end(e) {
    var t, i, s, o, a, r, l, c, h, d;
    this.ending ||
      ((this.ending = !0),
      this.running &&
        (Xt.tick(0, !0), this.sendInventory(), this.localSinglePlayer || qx()),
      this.welderMenu.close(!0),
      this.skillsMenu.isOpen && this.skillsMenu.close(),
      (this.running = !1),
      iA(!1),
      this.weapons.resetWeaponInfo(),
      (t = this.casino) == null || t.dispose(),
      (this.casino = void 0),
      (i = this.computer) == null || i.dispose(),
      (this.computer = void 0),
      (s = this.screens) == null || s.clear(),
      (this.screens = void 0),
      (o = this.claimsUI) == null || o.dispose(),
      (this.claimsUI = void 0),
      (a = this.borderVisual) == null || a.dispose(),
      (this.borderVisual = void 0),
      this.spawnNotice.dispose(),
      (V.worldBorder = null),
      this.sfx.stopVehicles(),
      this.reviveUI.clear(),
      (this.player.downed = !1),
      (this.downedBlend = 0),
      (this.renderer.domElement.style.filter = ""),
      this.voice.disconnected(),
      this.chatTts.disconnected(),
      (r = this.c4) == null || r.clear(),
      (l = this.eggs) == null || l.clear(),
      (c = this.knives) == null || c.clear(),
      (h = this.operations) == null || h.clear(),
      V.setOperationPoints([]),
      (d = this.landmarkAtmosphere) == null || d.dispose(),
      (this.landmarkAtmosphere = void 0),
      e && sessionStorage.setItem("fc-error", e),
      V.showLoading(!0),
      await this.net.disconnect(),
      location.replace(wj(location.href)));
  }
  async followServerRestart() {
    if (this.followingRestart) return;
    ((this.followingRestart = !0), ml.hide());
    const e = G2 || z.server.replace(/^wss?:\/\//, "");
    (V.showLoading(!0, U("updateServerUpdating"), e),
      V.loading.setProgress(0.15),
      V.loading.creep(0.8),
      !(
        !this.localSinglePlayer &&
        (await R4()) &&
        this.running &&
        (V.loading.setProgress(0.35, U("updateLoadingVersion")),
        this.sendInventory(),
        $L({ address: z.server, name: e }))
      ) && V.loading.setProgress(0.35, U("updateReconnecting")));
  }
  offerUpdate() {
    ml.updateReady(() => {
      (!this.localSinglePlayer &&
        z.server &&
        nY({ address: z.server, name: G2 || z.server }),
        this.end());
    });
  }
  networkBlockBreak(e, t, i, s) {
    var a;
    const o = performance.now();
    (o - this.blockFxWindow > 100 &&
      ((this.blockFxWindow = o), (this.blockFxCount = 0)),
      !(
        this.blockFxCount >= 8 ||
        Math.hypot(
          e - this.camera.position.x,
          t - this.camera.position.y,
          i - this.camera.position.z,
        ) > 58
      ) &&
        (this.blockFxCount++,
        this.effects.blockBreak(
          new k(e + 0.5, t + 0.5, i + 0.5),
          ((a = de[s]) == null ? void 0 : a.color) ?? 8947848,
          s,
        )));
  }
  forgetWorldState() {
    var e, t, i;
    (this.remotes.clear(),
      this.bots.clear(),
      this.vehicles.clearForTransition(-1),
      (e = this.c4) == null || e.clear(),
      (t = this.eggs) == null || t.clear(),
      (i = this.knives) == null || i.clear(),
      this.drops.clear(),
      this.backpacks.clear(),
      this.animals.clear(),
      this.corpses.clear(),
      this.nuclearStrikes.clear(),
      this.effects.clearRocketTrails(),
      this.world.clearDimension(),
      (this.compassRefreshAt = 0),
      (this.minimapLastZoom = 0),
      V.refreshMap());
  }
  wireNet() {
    const e = this.net;
    ((this.welcomes = 0),
      (this.emote = 0),
      (this.sentReload = !1),
      (this.sentInspect = !1),
      this.weapons.cancelInspect(),
      this.weapons.resetWeaponInfo(),
      this.voice.attach(e),
      this.chatTts.attach(e),
      (this.voice.onActivity = (i) =>
        e.send(
          new Xe(ue.C_ANIMATION).u8(2).u16(Math.min(255, Math.round(i * 255))),
        )),
      e.on(ue.S_ANIMATION, (i) => {
        const s = i.u16(),
          o = i.u8(),
          a = i.u16(),
          r = i.u16() / 1e3;
        s !== this.myId
          ? this.remotes.setAnimation(s, o, a, r)
          : o === 0 &&
            ((this.emote = a),
            (this.emoteStart = performance.now() / 1e3 - r),
            this.emoteOrigin.copy(this.player.pos));
      }),
      e.on(ue.S_WELCOME, (i) => {
        var s;
        ((this.movementEpoch = 0),
          (this.positionRevision = 0),
          this.playerEpochs.clear(),
          (this.invSeq = 0),
          (this.shotsSent = 0),
          (this.shotLog = []),
          this.welcomes++ > 0 && this.forgetWorldState(),
          (this.deathCamT = -1),
          (this.player.alive = !0),
          (this.player.downed = !1),
          (this.player.prone = !1),
          this.reviveUI.clear(),
          (this.downedBlend = 0),
          (this.renderer.domElement.style.filter = ""),
          V.showDeath(!1),
          this.corpses.clear(),
          (this.myId = i.u16()),
          this.voice.connected(),
          this.chatTts.connected(),
          this.player.pos.set(i.f32(), i.f32(), i.f32()),
          (this.timeOfDay = i.u32()),
          (this.world.seed = i.u32()),
          (this.currentPlanet = i.remaining() > 0 ? i.u8() : Si.EARTH),
          V.setWaypointPlanet(this.currentPlanet),
          (this.player.gravityScale = this.currentPlanet === Si.MOON ? wp : 1),
          this.sky.setLunar(this.currentPlanet === Si.MOON),
          this.vehicles.setPlanet(this.currentPlanet),
          this.projectiles.setPlanet(this.currentPlanet),
          this.drops.setPlanet(this.currentPlanet),
          this.backpacks.setPlanet(this.currentPlanet),
          this.bots.setEnabled(!0),
          this.animals.setEnabled(this.currentPlanet === Si.EARTH),
          this.worldSites.setEnabled(this.currentPlanet === Si.EARTH),
          (s = this.weather) == null || s.dispose(),
          (this.weather = new ese(
            this.scene,
            this.world.seed,
            this.input.mobile,
            (o, a, r) => this.world.precipitationSurfaceY(o, a, r),
          )),
          this.weather.setParticleScale(Ts().particles),
          (this.vehicles.myId = this.myId),
          (this.projectiles.myId = this.myId));
      }),
      e.on(ue.S_CLAIMS, (i) => {
        var a, r, l, c, h;
        const s = JSON.parse(i.str());
        if (
          ((s.reset || !this.claimSync) &&
            (this.claimSync = { claims: [], trusted: [] }),
          this.claimSync.claims.push(...s.claims),
          this.claimSync.trusted.push(...s.trusted),
          s.complete === !1)
        )
          return;
        const o = this.claimSync;
        ((this.claimSync = void 0),
          (a = this.claimsUI) == null || a.apply(o),
          this.signEditorPos &&
            !(
              (r = this.claimsUI) != null &&
              r.allowed(
                this.currentPlanet,
                this.signEditorPos.x,
                this.signEditorPos.z,
              )
            ) &&
            ((l = document.getElementById("sign-editor")) == null ||
              l.dispatchEvent(new Event("protection-close"))),
          this.chestPos &&
            !(
              (c = this.claimsUI) != null &&
              c.allowed(this.currentPlanet, this.chestPos.x, this.chestPos.z)
            ) &&
            V.closeChest(),
          this.furnacePos &&
            !(
              (h = this.claimsUI) != null &&
              h.allowed(
                this.currentPlanet,
                this.furnacePos.x,
                this.furnacePos.z,
              )
            ) &&
            V.closeFurnace());
      }),
      e.on(ue.S_CLAIM_MENU, (i) => {
        var o;
        const s = i.u32();
        (this.input.unlockForUi(),
          (o = this.claimsUI) == null ||
            o.open(
              s,
              [...this.friends],
              (a, r) => this.net.send(new Xe(ue.C_FRIENDS).u8(a).str(r)),
              () => V.onResume(),
              (a) => this.net.send(new Xe(ue.C_CLAIM).u32(s).u8(1).u16(a)),
            ));
      }),
      e.on(ue.S_PROTECTION, (i) => {
        var o;
        const s = i.str();
        (V.closeChest(),
          V.closeFurnace(),
          (o = document.getElementById("sign-editor")) == null ||
            o.dispatchEvent(new Event("protection-close")),
          V.setHint(s));
      }),
      e.on(ue.S_BASE_CAPTURE, (i) => {
        const s = JSON.parse(i.str());
        ((this.baseCaptureSeconds = s.seconds),
          (this.baseCaptures = new Map(s.pending.map((o) => [o.id, o]))));
      }),
      e.on(ue.S_SQUAD, (i) => {
        var o, a;
        const s = (o = Po(z.nick)) == null ? void 0 : o.id;
        (jz(JSON.parse(i.str())),
          this.remotes.refreshRoles(),
          this.renderTab(),
          V.refreshMap(),
          (this.invDirty = !0),
          (this.compassRefreshAt = 0),
          s !== ((a = Po(z.nick)) == null ? void 0 : a.id) &&
            this.shareWaypoint());
      }),
      e.on(ue.S_FRIENDS, (i) => {
        var s;
        this.friends.clear();
        for (let o = 0, a = i.u8(); o < a; o++) this.friends.add(i.str());
        (Kz(z.nick, this.friends),
          this.remotes.refreshRoles(),
          (s = this.claimsUI) == null || s.updateFriends([...this.friends]),
          this.renderTab(),
          (this.invDirty = !0));
      }),
      e.on(ue.S_JOIN, (i) => {
        const s = i.u16(),
          o = i.str(),
          a = i.u32();
        (this.playerEpochs.set(s, i.remaining() >= 4 ? i.u32() : 0),
          s !== this.myId && this.remotes.add(s, o, a));
      }),
      e.on(ue.S_LEAVE, (i) => this.remotes.remove(i.u16())),
      e.on(ue.S_STATES, (i) => {
        const s = i.u8();
        for (let o = 0; o < s; o++) {
          const a = i.u16(),
            r = i.f32(),
            l = i.f32(),
            c = i.f32(),
            h = i.f32(),
            d = i.f32(),
            u = i.u16(),
            f = i.u8(),
            p = i.remaining() > 0 ? i.u8() : Si.EARTH,
            m = i.remaining() > 0 ? i.u8() : 0;
          if (a !== this.myId)
            (this.remotes.setState(a, r, l, c, h, d, u, f, p, m),
              this.remotes.setHidden(a, p !== this.currentPlanet));
          else {
            this.localBurning = (f & 64) !== 0;
            const y = (f & 128) !== 0;
            (y || this.player.seated) &&
              ((this.player.seated = y),
              y || (this.chairExitPending = !1),
              this.player.pos.set(r, l, c),
              this.player.vel.set(0, 0, 0),
              (this.player.onGround = y));
          }
        }
      }),
      e.on(ue.S_SEAT, (i) => {
        const s = i.u16(),
          o = i.u8() !== 0;
        (i.i32(), i.u8(), i.i32());
        const a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.f32();
        s === this.myId
          ? ((this.chairExitPending = !1),
            (this.player.seated = o),
            this.player.pos.set(a, r, l),
            this.player.vel.set(0, 0, 0),
            (this.player.onGround = o),
            o && ((this.player.yaw = c), (this.player.pitch = 0)))
          : this.remotes.setSeat(s, o, a, r, l, c);
      }),
      e.on(ue.S_CHUNK, (i) => {
        const s = i.u8(),
          o = i.i32(),
          a = i.i32(),
          r = i.bytes();
        s === this.currentPlanet && this.world.onChunkData(o, a, r);
      }),
      e.on(ue.S_MAP_TILE, (i) => {
        const s = i.u8(),
          o = i.u8(),
          a = i.i32(),
          r = i.i32(),
          l = i.bytes();
        s === this.currentPlanet && this.world.onMapTileData(o, a, r, l);
      }),
      e.on(ue.S_SET_BLOCK, (i) => {
        const s = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8(),
          l = i.u8(),
          c = i.u8(),
          h = this.world.getBlock(s, o, a),
          d = this.world.getMeta(s, o, a);
        (this.world.setBlock(s, o, a, r, l),
          ((!yh(r) && !tm(r)) || h !== r) &&
            this.cropProgress.delete(`${s},${o},${a}`),
          h === r &&
            Ss(r) &&
            !(l & Na) &&
            (d ^ l) & Qn &&
            this.sfx.door((l & Qn) !== 0),
          r === 0 && h !== 0 && !c && this.networkBlockBreak(s, o, a, h));
      }),
      e.on(ue.S_SIGN, (i) => {
        const s = i.u8(),
          o = i.i32(),
          a = i.u8(),
          r = i.i32(),
          l = i.u8(),
          c = i.str();
        s === this.currentPlanet &&
          (this.world.signs.set(
            o,
            a,
            r,
            l ? c : null,
            i.remaining() > 0 && i.u8() === 1,
          ),
          l === 2 &&
            ((this.signEditorPos = { x: o, z: r }),
            this.input.unlock(),
            _J(
              c,
              (h, d) => {
                this.net.send(
                  new Xe(ue.C_SIGN).u8(h).i32(o).u8(a).i32(r).str(d),
                );
              },
              () => {
                ((this.signEditorPos = void 0), V.onResume());
              },
            )));
      }),
      e.on(ue.S_CROP_PROGRESS, (i) => {
        const s = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8(),
          l = Math.max(0, Math.min(1, i.u16() / 1e3)),
          c = i.remaining() > 0 && i.u8() !== 0,
          h = i.remaining() > 0 ? i.u8() : 15,
          d = i.remaining() >= 2 ? i.u16() / 1e3 : 1,
          u = i.remaining() >= 2 ? (i.u16() / CH) * 1e3 : 6e4;
        this.cropProgress.set(`${s},${o},${a}`, {
          stage: r,
          pct: l,
          boosted: c,
          light: h,
          speed: d,
          stageMs: u,
          at: performance.now(),
        });
      }),
      e.on(ue.S_MULTI_BLOCK, (i) => {
        const s = i.u16();
        for (let o = 0; o < s; o++) {
          const a = i.i32(),
            r = i.u8(),
            l = i.i32(),
            c = i.u8(),
            h = i.u8(),
            d = this.world.getBlock(a, r, l);
          (this.world.setBlock(a, r, l, c, h),
            ((!yh(c) && !tm(c)) || d !== c) &&
              this.cropProgress.delete(`${a},${r},${l}`),
            o < 30 && c === 0 && d !== 0 && this.networkBlockBreak(a, r, l, d));
        }
      }),
      e.on(ue.S_CHAT, (i) => {
        const s = i.u8(),
          o = i.str(),
          a = i.remaining() > 1 ? JSON.parse(i.str()) : void 0;
        (V.addChat(s, o, a),
          this.net.isLocal &&
            (a == null ? void 0 : a.channel) !== "squad" &&
            (a == null ? void 0 : a.channel) !== "team" &&
            (s === 0
              ? this.chatTts.localText(
                  o.replace(/^\[[^\]]+\]\s*[^:]+:\s*/, ""),
                  "chat",
                )
              : s === 1 &&
                /raid|evacuat|nuclear|headquarters|рейд|эвакуац|ядерн|штаб/i.test(
                  o,
                ) &&
                this.chatTts.localText(o, "important")));
      }),
      e.on(ue.S_TIME, (i) => {
        const s = i.u32();
        this.timeFrozen = i.remaining() > 0 && i.u8() === 1;
        let o = s - this.timeOfDay;
        (o > Qa / 2 ? (o -= Qa) : o < -Qa / 2 && (o += Qa),
          this.timeFrozen || Math.abs(o) > 400
            ? ((this.timeOfDay = s), (this.timeDrift = 0))
            : (this.timeDrift = o));
      }),
      e.on(ue.S_WEATHER, (i) => {
        var o, a;
        const s = i.u8();
        ((o = this.weather) == null ||
          o.setMode(this.currentPlanet === Si.MOON ? 0 : s),
          i.u16(),
          i.remaining() >= 8 &&
            ((this.windX = i.f32()),
            (this.windZ = i.f32()),
            (a = this.weather) == null || a.setWind(this.windX, this.windZ),
            this.world.setWind(this.windX, this.windZ),
            this.environment.setWind(this.windX, this.windZ)));
      }),
      e.on(ue.S_HALLOWEEN_FX, (i) => {
        var l, c;
        const s = i.u8(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32();
        if (s === Bf.BLOOD_MOON) {
          (this.sky.setBloodMoon(o > 0.5),
            (l = this.autumn) == null || l.setBloodMoon(o > 0.5));
          return;
        }
        this.currentPlanet === Si.EARTH &&
          ((c = this.autumn) == null || c.fx(s, o, a, r, this.player.pos));
      }),
      e.on(ue.S_LIGHTNING, (i) => {
        var c;
        const s = i.f32(),
          o = i.f32(),
          a = i.f32();
        if (this.currentPlanet === Si.MOON) return;
        (c = this.weather) == null || c.strike(s, o, a);
        const r = new k(s, o, a),
          l = this.effectExposure(r);
        (this.effects.flash(r, 8, 0.18),
          this.sfx.explosion(r.distanceTo(this.player.pos), l));
      }),
      e.on(ue.S_CONCUSSION, (i) => {
        const s = Ne(i.f32(), 0, 1),
          o = i.u16();
        (this.effects.addTrauma(0.25 + s * 0.75),
          this.sfx.concussion(s, o),
          V.concussion(s, o),
          vo(s > 0.65 ? "heavy" : "medium"));
      }),
      e.on(ue.S_SMOKE, (i) => {
        V.smokeExposure(i.u8() / 255);
      }),
      e.on(ue.S_HP, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a =
            i.remaining() >= 13 && i.u8() === 1
              ? { x: i.f32(), y: i.f32(), z: i.f32() }
              : null;
        (s < this.player.hp &&
          (V.damageFlash(), this.sfx.hurt(), this.effects.addTrauma(0.35)),
          a &&
            (V.hitFrom(
              a.x,
              a.z,
              this.camera.position.x,
              this.camera.position.z,
              this.player.yaw,
            ),
            this.effects.incomingFire(a.x, a.y, a.z, this.camera.position)),
          (this.player.hp = s),
          (this.player.maxHp = o || Vf),
          V.setHP(s, this.player.maxHp));
      }),
      e.on(ue.S_ARMOR, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = i.u16(),
          r = i.u16(),
          l = i.u16(),
          c = i.remaining() >= 4 ? i.u16() : 0,
          h = i.remaining() >= 2 ? i.u16() : 0;
        (this.remotes.setArmor(s, o, a, r, l, c, h),
          s === this.myId &&
            (this.inventory.applyHelmetModuleState(c, h),
            this.vision.sync(c, h),
            (this.player.maxHp = Vv([o, a, r, l])),
            V.setHP(this.player.hp, this.player.maxHp)));
      }),
      e.on(ue.S_DOWNED, (i) =>
        this.reviveUI.receive(i, this.myId, this.player),
      ),
      e.on(ue.S_DEATH, (i) => {
        const s = i.u16(),
          o = i.remaining() >= 9 ? i.u8() : 0,
          a = o ? i.f32() : 0,
          r = o ? i.f32() : 0;
        if (s === this.myId) {
          this.onDeath();
          return;
        }
        const l = this.remotes.corpseOf(s);
        l &&
          this.corpses.spawn(l.body, l.yaw, l.limbs, {
            blast: !!(o & 2),
            dirX: a,
            dirZ: r,
            lying: l.lying,
          });
      }),
      e.on(ue.S_RESPAWN, (i) => {
        const s = i.u16(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = i.remaining() >= 4 ? i.u32() : 0;
        (this.playerEpochs.set(s, l),
          this.remotes.respawn(s, o, a, r),
          s === this.myId &&
            ((this.deathCamT = -1),
            (this.movementEpoch = l),
            this.player.pos.set(o, a, r),
            this.player.vel.set(0, 0, 0),
            (this.player.alive = !0),
            (this.player.downed = !1),
            (this.player.prone = !1),
            this.reviveUI.wounded.delete(this.myId),
            (this.player.maxHp = Vv(this.inventory.equippedIds())),
            (this.player.hp = this.player.maxHp),
            V.setHP(this.player.hp, this.player.maxHp),
            V.showDeath(!1),
            this.input.lock()));
      }),
      e.on(ue.S_TELEPORT, (i) => {
        (this.player.pos.set(i.f32(), i.f32(), i.f32()),
          i.remaining() >= 4 && (this.positionRevision = i.u32()),
          this.player.vel.set(0, 0, 0));
      }),
      e.on(ue.S_PLANET, (i) => {
        var c;
        const s = i.u8(),
          o = i.u16(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32();
        ((c = this.operations) == null || c.clear(),
          V.setOperationPoints([]),
          this.beginPlanetTransition(s, o, a, r, l));
      }),
      e.on(ue.S_REMOTE, (i) => this.remote.receive(JSON.parse(i.str()))),
      e.on(ue.S_RPG_LOCK, (i) => {
        const s = i.u8(),
          o = i.u16(),
          a = i.u16(),
          r = this.weapons;
        if (s !== 0 && r.targetLock.key !== `${s}:${o}`) return;
        r.targetLock.seconds = s === 0 ? 0 : Math.min(S0, a / 1e3);
        const l = s !== 0 && r.targetLock.seconds >= S0;
        (l && !r.lockConfirmed && this.sfx.uiTick(!0), (r.lockConfirmed = l));
      }),
      e.on(ue.S_KNIFE, (i) => this.knifeVisuals().packet(i)),
      e.on(ue.S_EGG, (i) => {
        (this.eggs ??
          (this.eggs = new dee(this.scene, (s) => {
            (this.effects.bulletImpact(s, 16773074),
              s.distanceTo(this.player.pos) < 24 && this.sfx.eggLaid());
          })),
          this.eggs.packet(i, this.currentPlanet));
      }),
      e.on(ue.S_C4, (i) => {
        (this.c4 ??
          (this.c4 = new Tee(
            this.scene,
            this.vehicles,
            (s, o) => this.sfx.c4Attach(s.distanceTo(this.player.pos), o),
            {
              beep: (s, o) =>
                this.sfx.bombBeep(s.distanceTo(this.camera.position), o),
              fuse: (s) => {
                (this.effects.blastFx.sparks({
                  pos: s,
                  count: 3,
                  speed: 3.2,
                  life: 0.45,
                  lifeJitter: 0.5,
                  grav: 9,
                  drag: 0.6,
                  width: 0.025,
                  stretch: 0.03,
                  color: [16771488, 16752704, 16777215],
                  up: 1.5,
                }),
                  Math.random() < 0.35 &&
                    this.sfx.fuseHiss(s.distanceTo(this.camera.position)));
              },
            },
          )),
          this.c4.packet(i));
      }),
      e.on(ue.S_VEH_SPAWN, (i) => {
        const s = i.u16(),
          o = i.u8(),
          a = new k(i.f32(), i.f32(), i.f32()),
          r = new Jt(i.f32(), i.f32(), i.f32(), i.f32()),
          l = i.u16(),
          c = i.u16(),
          h = i.u16(),
          d = i.str(),
          u = i.f32(),
          f = i.f32(),
          p = i.u8(),
          m = W$(p),
          y = i.remaining() > 0 ? i.u8() : Si.EARTH;
        if (
          (this.vehicles.onSpawn(
            s,
            o,
            a,
            r,
            l,
            lC[o],
            c === 65535 ? -1 : c,
            h === 65535 ? -1 : h,
            d,
            u,
            f,
            m,
            y,
            G$(p),
          ),
          IA(p) && this.vehicles.setArmor(s, IA(p)),
          i.remaining())
        ) {
          const g = i.u8();
          this.vehicles.setRadioState(
            s,
            g,
            i.remaining() >= 2 ? i.u16() : void 0,
          );
        }
      }));
    const t = (i) => {
      const s = i.u32(),
        o = i.u8() === 1,
        a = this.pendingVehicleSpawns.get(s);
      if (
        !a ||
        (this.pendingVehicleSpawns.delete(s), !o || this.inventory.creative)
      )
        return;
      const r = this.inventory.hotbar[a.slot];
      if (
        !((r == null ? void 0 : r.id) === a.itemId
          ? this.inventory.removeFromSlot("h", a.slot, 1)
          : this.inventory.removeItem(a.itemId, 1))
      ) {
        V.addChat(2, U("vehicleSpawnInventoryMissing"));
        return;
      }
      (V.renderHotbar(), this.syncHeld());
    };
    (e.on(ue.S_VEH_SPAWN_RESULT, t),
      e.on(ue.S_BOT_SPAWN_RESULT, t),
      e.on(ue.S_VEH_PAINT, (i) => this.vehicles.setCamo(i.u16(), i.u8())),
      e.on(ue.S_VEH_ARMOR, (i) => {
        const s = i.u16(),
          o = i.u8(),
          a = (i.u8() & 1) === 1,
          r = i.remaining() >= 2 ? i.u16() : 65535,
          l = this.vehicles.vehicles.get(s),
          c = !!l && l.pos.distanceTo(this.player.pos) < 90;
        (this.vehicles.setArmor(s, o, a && c),
          r === this.myId &&
            (this.weapons.setWelding(!0),
            (this.weldingUntil = performance.now() + 900),
            vo("medium", 0)));
      }),
      e.on(ue.S_SKILLS, (i) => {
        (Xt.load(i.str()), this.skillsMenu.isOpen && this.skillsMenu.render());
      }),
      e.on(ue.S_VEH_STATE, (i) => {
        const s = i.u16(),
          o = new k(i.f32(), i.f32(), i.f32()),
          a = new Jt(i.f32(), i.f32(), i.f32(), i.f32()),
          r = new k(i.f32(), i.f32(), i.f32()),
          l = i.f32(),
          c = i.f32(),
          h = i.remaining() > 0 ? i.u8() : void 0,
          d = i.remaining() ? i.u8() : void 0,
          u = i.remaining() >= 4 ? i.u32() : void 0,
          f = i.remaining() >= 2 ? i.u16() : void 0;
        (this.vehicles.onState(s, o, a, r, l, c, h, u),
          d !== void 0 && this.vehicles.setRadioState(s, d, f));
      }),
      e.on(ue.S_SEAT_GUN, (i) => {
        const s = i.u16(),
          o = i.u8(),
          a = i.u8(),
          r = i.f32(),
          l = i.f32();
        this.vehicles.onSeatGun(s, o, a, r, l, i.str());
      }),
      e.on(ue.S_VEH_ENTER, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = i.u8(),
          r = i.str(),
          l = this.vehicles.vehicles.get(s);
        this.vehicles.onEnter(s, o, a, r);
        const c = !!l && Ea.hasOpenSeats(l.type) && a > 0;
        o !== this.myId &&
          (l
            ? c
              ? (this.remotes.setVehicleSeat(o, s, a),
                this.remotes.setHidden(o, !1))
              : (this.remotes.setVehicleSeat(o, s, a),
                this.remotes.setHidden(o, !Ea.hasOpenSeats(l.type)))
            : (this.remotes.setVehicleSeat(o, s, a),
              this.remotes.setHidden(o, !1)));
      }),
      e.on(ue.S_VEH_EXIT, (i) => {
        const s = i.u16(),
          o = i.u16();
        (this.vehicles.onExit(s, o),
          o !== this.myId &&
            (this.remotes.clearVehicleSeat(o), this.remotes.setHidden(o, !1)));
      }),
      e.on(ue.S_VEH_HP, (i) => this.vehicles.onHp(i.u16(), i.u16())),
      e.on(ue.S_VEH_RAM, (i) => {
        const s = i.u16(),
          o = i.f32(),
          a = i.remaining() ? i.u8() : 0,
          r = i.remaining() >= 12 ? new k(i.f32(), i.f32(), i.f32()) : void 0,
          l = i.remaining() ? i.u8() : 1;
        this.vehicles.onRam(s, o, a, r, l, this.camera.position);
      }),
      e.on(ue.S_RUN_OVER, (i) => {
        var S, M;
        const s = i.u16(),
          o = new k(i.f32(), i.f32(), i.f32()),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.u8(),
          h = i.remaining() >= 2 ? i.u16() : -1,
          d = !!(c & 1),
          u = this.vehicles.vehicles.get(s);
        if (u && u.planet !== this.vehicles.currentPlanet) return;
        const f = o.distanceTo(this.camera.position);
        if (f > 160) return;
        const p = this.world.groundAt(o.x, o.z, o.y + 1.5),
          m = Number.isFinite(p) && p <= o.y + 0.6 ? p : o.y,
          y =
            (S =
              de[
                this.world.getBlock(
                  Math.floor(o.x),
                  Math.floor(m) - 1,
                  Math.floor(o.z),
                )
              ]) == null
              ? void 0
              : S.color;
        (this.effects.runOver(o, a, r, l, d, m, y), this.sfx.runOver(f, l, d));
        const g = ((M = this.vehicles.mine) == null ? void 0 : M.id) === s,
          b = !!(c & 2) && h === this.myId;
        g
          ? this.effects.addTrauma(Math.min(0.38, 0.16 + l * 0.02))
          : b
            ? this.effects.addTrauma(0.7)
            : f < 18 && this.effects.addTrauma(0.08 * (1 - f / 18));
      }),
      e.on(ue.S_CARRIER_COOLDOWN, (i) => {
        const s = this.vehicles.vehicles.get(i.u16()),
          o = i.u16();
        s && ((s.fireCd2 = o), (s.carrierReadyAt = Date.now() + o * 1e3));
      }),
      e.on(ue.S_HELI_CARGO, (i) => this.vehicles.onHeliCargo(i.u16(), i.u16())),
      e.on(ue.S_VEH_DESTROY, (i) => {
        const s = i.u16(),
          o = this.vehicles.vehicles.get(s);
        if (o)
          for (const a of [o.driver, ...o.passengers])
            a !== -1 &&
              a !== this.myId &&
              (this.remotes.clearVehicleSeat(a), this.remotes.setHidden(a, !1));
        this.vehicles.onDestroy(s, i.remaining() > 0 && i.u8() === 1);
      }),
      e.on(ue.S_SHOT, (i) => {
        var x, T, A;
        const s = i.u16();
        this.remotes.onShot(s);
        const o = performance.now();
        if (s === 0 && o - this.lastAnonymousShotFxAt < 50) return;
        s === 0 && (this.lastAnonymousShotFxAt = o);
        const a = i.u16(),
          r = new k(i.f32(), i.f32(), i.f32()),
          l = new k(i.f32(), i.f32(), i.f32()),
          c =
            a === E.PLANE
              ? s
                ? this.vehicles.remoteSeatShot(s, r)
                : this.vehicles.botSeatShot(r)
              : null,
          h = Math.max(120, ((x = Cn[a]) == null ? void 0 : x.range) ?? 120),
          d = r.clone().addScaledVector(l, h),
          u = a8(this.camera.position, r, d);
        if (u > 200 && r.distanceTo(this.camera.position) > 280) return;
        l.normalize();
        const f = this.world.raycast(r, l, h),
          p = f ? f.point : r.clone().addScaledVector(l, h);
        f &&
          f.point.distanceTo(this.camera.position) < 90 &&
          ((T = Cn[a]) == null ? void 0 : T.kind) === "hitscan" &&
          this.bulletHoles.add(f);
        const m = r.distanceTo(this.camera.position),
          y = m > 6 && a8(this.camera.position, r, p) < 3.5;
        (u <= 200 && this.effects.tracer(r, p, y),
          y && this.effects.incomingFire(r.x, r.y, r.z, this.camera.position));
        const g = this.camera.position.clone().sub(r).dot(l),
          b = r.distanceTo(p),
          S = new k(1, 0, 0).applyQuaternion(this.camera.quaternion);
        if (s !== this.myId && m > 6 && g > 1 && g < b) {
          const _ = r.clone().addScaledVector(l, g),
            C = _.sub(this.camera.position),
            R = C.length();
          R < 7 && this.sfx.flyby(R, C.dot(S) / Math.max(1, R), g / 760);
        }
        const M = c
          ? c.heavy
            ? "hmg"
            : "mg"
          : a === E.PLANE
            ? this.vehicles.typeNear(r, 3.2) === P.BTR_TURRET
              ? "autocannon"
              : "mg"
            : (((A = Cn[a]) == null ? void 0 : A.sfx) ?? "ak");
        m <= 280 &&
          this.sfx.shot(
            M,
            m,
            So(a).suppressor,
            this.effectExposure(r),
            r.clone().sub(this.camera.position).normalize().dot(S),
          );
      }),
      e.on(ue.S_PROJECTILE, (i) => {
        var b, S, M, x;
        const s = i.u16(),
          o = i.u32(),
          a = i.u8(),
          r = i.u8(),
          l = new k(i.f32(), i.f32(), i.f32()),
          c = new k(i.f32(), i.f32(), i.f32()),
          h = r & 1 ? new k(i.f32(), i.f32(), i.f32()) : null,
          d = i.remaining() > 0 ? i.u8() : Si.EARTH,
          u = i.remaining() >= 2 ? i.u16() : 65535,
          f = i.remaining() >= 4 ? i.f32() : void 0,
          p = i.remaining() ? i.u8() : 0;
        if (d !== this.currentPlanet) return;
        const m =
            a === pt.TOMAHAWK || a === pt.NUCLEAR || a === pt.MISSILE
              ? [...this.vehicles.vehicles.values()].find(
                  (T) =>
                    T.driver === s &&
                    (T.type === P.CARRIER ||
                      T.type === P.SUBMARINE ||
                      T.type === P.HIMARS ||
                      T.type === P.PATRIOT),
                )
              : void 0,
          y = a === pt.TOMAHAWK ? oC : a === pt.NUCLEAR ? rC : void 0,
          g = this.projectiles.spawn(a, l, c, !1, {
            id: o,
            owner: s,
            guide: h,
            speed: y,
            ignoreVehicle: u !== 65535 ? u : m == null ? void 0 : m.id,
            serverDriven: !!(r & 2),
            planet: d,
            cruiseY: f,
            cruiseReached: !!(p & 1),
            terminalDive: !!(p & 2),
          });
        if (
          (g &&
            ((b = this.vehicles.vehicles.get(u)) == null ? void 0 : b.type) ===
              P.TANK &&
            this.vehicles.tankLaunch(u, l, this.camera.position),
          g &&
            ((S = this.vehicles.vehicles.get(u)) == null ? void 0 : S.type) ===
              P.MORTAR &&
            this.vehicles.mortarLaunch(u, l, this.camera.position),
          g &&
            a === pt.SHELL &&
            ((M = this.vehicles.vehicles.get(u)) == null ? void 0 : M.type) !==
              P.TANK)
        ) {
          const T = l.distanceTo(this.camera.position);
          T < 240 &&
            this.sfx.shot(
              ((x = this.vehicles.vehicles.get(u)) == null
                ? void 0
                : x.type) === P.PLANE
                ? "mg"
                : "tank",
              T,
              !1,
              0.7,
            );
        }
        if (g && s !== this.myId && (a === pt.MISSILE || a === pt.ROCKET)) {
          const T = l.distanceTo(this.camera.position);
          T < 150 && this.sfx.shot("rpg", T, !1, this.effectExposure(l));
        }
        (g &&
          a === pt.TOMAHAWK &&
          this.sfx.tomahawkLaunch(l.distanceTo(this.camera.position)),
          g &&
            a === pt.NUCLEAR &&
            this.sfx.nuclearLaunch(l.distanceTo(this.camera.position)));
      }),
      e.on(ue.S_TANK_AIM, (i) => {
        const s = i.u16(),
          o = i.u8(),
          a = o ? new k(i.f32(), i.f32(), i.f32()) : null,
          r = o ? new k(i.f32(), i.f32(), i.f32()) : void 0;
        this.vehicles.tankAimReady(s, a, r);
      }),
      e.on(ue.S_PROJ_REMOVE, (i) => {
        const s = i.u32(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = i.u8();
        this.projectiles.removeById(s, o, a, r, this.camera.position, l === 1);
      }),
      e.on(ue.S_EXPLOSION, (i) => {
        const s = i.u16(),
          o = new k(i.f32(), i.f32(), i.f32()),
          a = i.f32(),
          r = i.u8(),
          l = i.remaining() >= 1 ? i.u8() : 0,
          c =
            i.remaining() >= 3
              ? new k(
                  (i.u8() - 128) / 127,
                  (i.u8() - 128) / 127,
                  (i.u8() - 128) / 127,
                )
              : void 0;
        if (!r || s !== this.myId) {
          const h = this.effectExposure(o);
          (this.effects.explosion(o, a, this.camera.position, h, l, c),
            this.sfx.blast(l, o.distanceTo(this.camera.position), h, a),
            l === Ft.GRENADE &&
              a < 6 &&
              this.effects.fragments(
                o,
                this.camera.position,
                IJ.range,
                (u, f, p) => {
                  var m;
                  return (
                    ((m = this.world.raycast(u, f, p)) == null
                      ? void 0
                      : m.dist) ?? null
                  );
                },
              ));
          const d = o.distanceToSquared(this.player.pos);
          vo(d < 100 ? "heavy" : d < 625 ? "medium" : "light", 120);
        }
      }),
      e.on(ue.S_SIREN, (i) => {
        (i.remaining() > 0 ? i.u8() : 0) !== 2 && this.sfx.siren();
      }),
      window.addEventListener("cosmetics-changed", () => {
        this.running &&
          this.inventoryReady &&
          JSON.stringify([
            Ot.character,
            Ot.character === "custom" ? Ot.custom : null,
            Ot.weapons,
          ]) !== this.lastCosmeticLooks &&
          this.sendCosmetics(!0);
      }),
      e.on(ue.S_COSMETICS, (i) => {
        var o, a;
        const s = JSON.parse(i.str());
        if (s.id === this.myId) {
          if (((this.ownAppearance = s), s.weapon)) {
            for (const r of this.inventory.hotbar)
              ((o = r.cosmetic) == null ? void 0 : o.uid) === s.weapon.uid &&
                (r.cosmetic = { ...s.weapon });
            (this.weapons.setCosmetic(
              (a = this.inventory.hotbar[this.inventory.sel]) == null
                ? void 0
                : a.cosmetic,
              s.owner,
            ),
              V.renderHotbar());
          }
          (this.selfBody && Wl(this.selfBody.group, s.character, s.custom),
            this.refreshSelfArmor());
        } else this.remotes.setCosmetics(s.id, s);
      }),
      e.on(ue.S_ACCOUNT, (i) => {
        var o;
        const s = JSON.parse(i.str());
        ((this.net.httpSessionToken = s.httpToken || ""),
          aU(s),
          (o = this.operations) == null || o.refreshAccess(),
          this.remotes.refreshRoles(),
          this.renderTab());
      }),
      e.on(ue.S_TABLIST, (i) => {
        const s = i.u8();
        this.lastTab = [];
        for (let o = 0; o < s; o++) {
          const a = i.u16(),
            r = i.str(),
            l = i.u16(),
            c = i.u32(),
            h = i.u32();
          this.lastTab.push({
            id: a,
            name: r,
            ping: a === this.myId ? this.lastRtt : l,
            balance: c,
            xp: h,
          });
        }
        this.renderTab();
      }),
      e.on(ue.S_PROGRESS, (i) => {
        const s = i.u16(),
          o = i.u32();
        (this.remotes.setRank(s, o),
          s === this.myId &&
            (V.setProgress(o),
            (this.myXp = o),
            this.trainingStarted ||
              ((this.trainingStarted = !0), this.training.begin(o))));
        const a = this.lastTab.find((r) => r.id === s);
        (a && (a.xp = o), this.renderTab());
      }),
      e.on(ue.S_DISGUISE, (i) => {
        const s = i.u16(),
          o = { kind: i.u8(), id: i.u16(), meta: i.u8() },
          a = s === this.myId ? this.player.pos : this.remotes.getPos(s);
        (a && this.effects.disguisePoof(a.clone(), o.kind === zo.NONE),
          s === this.myId
            ? this.setMyDisguise(o)
            : this.remotes.setDisguise(s, o));
      }),
      e.on(ue.S_SPEECH, (i) => {
        const s = i.u16(),
          o = i.str();
        s !== this.myId && this.remotes.showSpeech(s, o);
      }),
      e.on(ue.S_FLY, (i) => {
        this.player.flying = i.u8() === 1;
      }),
      e.on(ue.S_GAMEMODE, (i) => {
        ((this.inventory.creative = i.u8() === 1),
          V.renderHotbar(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_GIVE, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = i.remaining() >= 2 ? i.u16() : void 0,
          r = i.remaining() >= 2 ? i.u16() : void 0,
          l = i.remaining() >= 2 ? i.u16() : void 0;
        (this.inventory.addItem(s, o, a, r, l), V.renderHotbar());
      }),
      e.on(ue.S_INV_LOAD, (i) => {
        var m;
        const s = i.u8(),
          o = [];
        for (let y = 0; y < s; y++)
          o.push({
            id: i.u16(),
            count: i.u16(),
            durability: i.u16(),
            suppressorDurability: i.u16(),
            magazine: i.u16(),
          });
        const a = i.remaining() >= 8 ? Yse(i.u32(), i.u32()) : 0,
          r = i.remaining() >= 4 ? i.u32() : 0;
        if (i.remaining() >= 2) {
          const y = JSON.parse(i.str());
          for (let g = 0; g < o.length; g++) o[g].cosmetic = y[g] ?? void 0;
        }
        const l = i.remaining() >= 4 ? i.u32() : -1,
          c = i.remaining() >= 1 && i.u8() === 1,
          h = i.remaining() >= 4 ? i.u32() : -1;
        if (
          this.inventoryReady &&
          !this.localSinglePlayer &&
          l >= 0 &&
          l < this.invSeq &&
          r === this.shopInventoryRevision
        )
          return;
        const u = r !== this.shopInventoryRevision;
        this.shopInventoryRevision = r;
        const f =
          !u &&
          this.localSinglePlayer &&
          this.inventory.updatedAt > 0 &&
          this.inventory.updatedAt > a;
        f ||
          (this.inventory.applyServer(o, a),
          h >= 0 && this.respendShotsInFlight(h));
        const p = sr(this.inventory.armor[0]);
        (this.vision.sync(
          p,
          ((m = this.inventory.armor[0]) == null
            ? void 0
            : m.suppressorDurability) ?? Da(p),
        ),
          (this.inventoryReady = !0),
          (this.invDirty = !1),
          f && (this.sendInventory(), this.net.requestLocalSave()),
          this.syncHeld(),
          c && l === this.invSeq && this.weapons.redoReload(),
          V.renderHotbar(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_EQUIPMENT_REPAIR, (i) =>
        V.finishEquipmentRepair(i.u8(), i.u32()),
      ),
      e.on(ue.S_BALANCE, (i) => {
        const s = i.u32(),
          o = i.remaining() >= 8 ? i.f64() : s;
        (this.lastBalance !== null &&
          o > this.lastBalance &&
          (this.trainingEarned = !0),
          (this.lastBalance = o),
          V.setBalance(o));
      }),
      e.on(ue.S_WORLD_RULES, (i) => {
        var s, o, a, r;
        try {
          const l = JSON.parse(i.str());
          if (!Zj(l.worldBorder) || typeof l.casinoEnabled != "boolean") return;
          ((this.world.border = l.worldBorder),
            (s = this.borderVisual) == null || s.setBorder(l.worldBorder),
            (V.worldBorder = l.worldBorder),
            V.refreshMap(),
            (this.minimapLastZoom = 0),
            this.spawnNotice.setZone(l.spawnZone));
          const c = l.spawnHub;
          (this.spawnNotice.setKiosks(c == null ? void 0 : c.kiosks),
            (V.spawnHub =
              c && [c.x, c.z].every(Number.isFinite)
                ? {
                    x: c.x,
                    z: c.z,
                    name:
                      typeof c.name == "string" ? c.name.slice(0, 48) : "Spawn",
                    radius: Math.max(
                      0,
                      ((o = l.spawnZone) == null ? void 0 : o.radius) ?? 0,
                    ),
                  }
                : null),
            (a = this.casino) == null || a.setPlayingEnabled(l.casinoEnabled),
            this.voice.setRange(
              typeof l.voiceRange == "number" ? l.voiceRange : 0,
            ));
          const h = l.gameMode;
          if (h === "frontline" || h === "tdm") {
            this.front.activate(h === "tdm" ? "tdm" : "conquest");
            const d = l.frontMap,
              u = (r = Yc(d)) == null ? void 0 : r.haze;
            (this.sky.setHaze(
              (u == null ? void 0 : u.color) ?? null,
              u == null ? void 0 : u.horizon,
              u == null ? void 0 : u.dome,
            ),
              this.borderVisual &&
                (this.borderVisual.noticeDistance = h === "tdm" ? 0 : 12),
              this.input.mobile &&
                !this.battleProfileApplied &&
                ((this.battleProfileApplied = !0), this.applyQuality()));
          }
        } catch (l) {
          console.warn("Invalid world rules", l);
        }
      }),
      e.on(ue.S_TELEPORT_REQUEST, (i) => {
        const s = i.u8() === 1,
          o = i.str(),
          a = i.u16();
        s
          ? (V.showTeleportRequest(o, a), this.sfx.uiTick(!0))
          : V.hideTeleportRequest(o);
      }),
      e.on(ue.S_VEH_BOUNDARY, (i) => {
        const s = i.u16(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = this.vehicles.vehicles.get(s);
        l &&
          (l.pos.set(o, a, r),
          l.target.pos.copy(l.pos),
          l.vel.set(0, 0, 0),
          l.motion.reset());
      }),
      e.on(ue.S_SCREEN, (i) => {
        var s;
        try {
          (s = this.screens) == null ||
            s.apply(JSON.parse(i.str()).records ?? []);
        } catch (o) {
          console.warn("Invalid screen update", o);
        }
      }),
      e.on(ue.S_CASINO, (i) => {
        var s;
        try {
          (s = this.casino) == null || s.receive(JSON.parse(i.str()));
        } catch (o) {
          console.warn("Invalid casino response", o);
        }
      }),
      e.on(ue.S_COMPUTER, (i) => {
        var s;
        try {
          (s = this.computer) == null || s.receive(JSON.parse(i.str()));
        } catch (o) {
          console.warn("Invalid computer response", o);
        }
      }),
      e.on(ue.S_KEEPINV, (i) => {
        this.keepInventory = i.u8() === 1;
      }),
      e.on(ue.S_FRONT, (i) => {
        try {
          (this.front.receive(JSON.parse(i.str())),
            Zz(this.front.active ? (this.front.team ?? 0) : 0));
        } catch (s) {
          console.warn("Invalid frontline message", s);
        }
      }),
      e.on(ue.S_BOT_SPAWN, (i) => {
        const s = i.u16(),
          o = i.str(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.u16(),
          h = i.u8(),
          d = i.u8(),
          u = [];
        for (let y = 0; y < d; y++) u.push(i.u16());
        const f = i.remaining() > 0 && i.u8() === 1,
          p = i.remaining() > 0 ? i.u8() : 0,
          m = i.remaining() >= 2 ? i.u16() : 0;
        this.bots.onSpawn(s, o, a, r, l, c, h, u, f, p, m);
      }),
      e.on(ue.S_BOT_STATE, (i) => {
        const s = i.u8(),
          o = [];
        for (let r = 0; r < s; r++)
          o.push([i.u16(), i.f32(), i.f32(), i.f32(), i.f32(), i.u8()]);
        const a =
          i.remaining() >= 4 ? i.u32() : Math.round(performance.now()) >>> 0;
        for (const r of o) this.bots.onState(...r, a);
      }),
      e.on(ue.S_BOT_HP, (i) => this.bots.onHp(i.u16(), i.u16())),
      e.on(ue.S_BOT_DESTROY, (i) => {
        const s = i.u16();
        if (i.remaining() >= 9) {
          const o = i.u8(),
            a = i.f32(),
            r = i.f32();
          this.bots.onDestroy(
            s,
            o & 1 ? { blast: !!(o & 2), dirX: a, dirZ: r } : void 0,
          );
        } else this.bots.onDestroy(s);
      }),
      e.on(ue.S_ANIMAL_SPAWN, (i) =>
        this.animals.onSpawn(
          i.u16(),
          i.u8(),
          i.f32(),
          i.f32(),
          i.f32(),
          i.u16(),
          i.u8() === 1,
        ),
      ),
      e.on(ue.S_ANIMAL_STATE, (i) => {
        const s = i.u8();
        for (let o = 0; o < s; o++) {
          const a = i.u16(),
            r = i.f32(),
            l = i.f32(),
            c = i.f32(),
            h = i.f32(),
            d = i.u16(),
            u = ((i.u8() << 24) >> 24) / 64;
          this.animals.onState(a, r, l, c, h, d, u);
        }
      }),
      e.on(ue.S_ANIMAL_HP, (i) => {
        var r;
        const s = i.u16(),
          o = i.u16(),
          a = ((r = this.animals.voiceInfo(s)) == null ? void 0 : r.hp) ?? o;
        (this.animals.onHp(s, o), o < a && o > 0 && this.animalCry(s, "hurt"));
      }),
      e.on(ue.S_ANIMAL_EVENT, (i) => {
        var l;
        const s = i.u16(),
          o = i.u8();
        this.animals.onEvent(s, o);
        const a = this.animals.positionOf(s),
          r = a ? a.distanceTo(this.player.pos) : 999;
        if (this.animals.typeOf(s) === Nt.WENDIGO) {
          (l = this.autumn) == null ||
            l.wendigoEvent(o, a, r, this.player.yaw, this.player.pos);
          return;
        }
        r > 30 ||
          (o === Ra.EGG
            ? this.sfx.eggLaid()
            : o === Ra.SHEARED
              ? this.sfx.shear()
              : o === Ra.MILKED
                ? this.sfx.milk()
                : o === Ra.EAT
                  ? this.sfx.graze(r)
                  : o === Ra.DRANK
                    ? this.sfx.graze(r)
                    : o === Ra.BITE &&
                      (this.sfx.sharkBite(r),
                      a &&
                        (this.effects.bloodHit(a), this.effects.splash(a, 6))));
      }),
      e.on(ue.S_ANIMAL_REMOVE, (i) => {
        const s = i.u16(),
          o =
            i.remaining() >= 13
              ? { cause: i.u8(), dirX: i.f32(), dirZ: i.f32(), speed: i.f32() }
              : void 0,
          a = this.animals.riders().find((r) => r.animalId === s);
        (a && this.seatRider(a.playerId, !1),
          o && o.cause !== xr.DESPAWN && this.animalCry(s, "death"),
          this.animals.onRemove(s, o));
      }),
      e.on(ue.S_ANIMAL_RIDER, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = this.animals.riders().find((r) => r.animalId === s);
        (a && this.seatRider(a.playerId, !1),
          this.animals.setRider(s, o === 65535 ? -1 : o),
          o !== 65535 && this.seatRider(o, !0));
      }),
      e.on(ue.S_FISH, (i) => {
        var m;
        const s = i.u16(),
          o = i.u8(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.remaining() > 0 ? i.u8() : Si.EARTH,
          h = i.remaining() >= 2 ? i.u16() : 0;
        if (c !== this.currentPlanet) return;
        const d = (m = this.fishing.positionOf(s)) == null ? void 0 : m.clone(),
          u = this.fishing.onState(s, o, a, r, l, h),
          p = (this.fishing.positionOf(s) ?? this.tmpV.set(a, r, l)).distanceTo(
            this.player.pos,
          );
        p > 40 ||
          (u === "cast"
            ? this.sfx.castLine(p)
            : u === "caught"
              ? (d && this.effects.splash(d, 5),
                this.sfx.splash(0.5),
                s !== this.myId && this.sfx.reelIn())
              : u === "landed"
                ? (this.effects.splash(this.tmpV2.set(a, r, l), 3),
                  this.sfx.splash(0.4))
                : u === "bite" &&
                  (this.effects.splash(this.tmpV2.set(a, r, l), 4),
                  this.sfx.fishBite(p),
                  s === this.myId &&
                    (V.setHint(
                      U("fishBiteHint", {
                        action: this.input.mobile
                          ? U("useAction")
                          : U("rmbAction"),
                      }),
                    ),
                    aX("warning"))));
      }),
      e.on(ue.S_OPERATION, (i) => {
        var o, a;
        const s = JSON.parse(i.str());
        ((o = this.operations) == null ||
          o.receive(
            s.channel,
            this.currentPlanet === Si.EARTH ? s.state : null,
          ),
          V.setOperationPoints(
            ((a = this.operations) == null ? void 0 : a.points()) ?? [],
          ));
      }),
      e.on(ue.S_MISSION_STATUS, (i) => {
        var s;
        return (s = this.operations) == null
          ? void 0
          : s.setAvailability(i.u8());
      }),
      e.on(ue.S_RAID_STATUS, (i) => {
        const s = i.u8() === 1;
        this.raidActive = s;
        const o = i.u8(),
          a = i.u8(),
          r = i.u16(),
          l = i.u16(),
          c = i.u32();
        V.setRaidStatus(s, o, a, r, l, c);
      }),
      e.on(ue.S_RAID_LEADERBOARD, (i) => {
        const s = [];
        for (let a = 0, r = i.u8(); a < r; a++)
          s.push({
            name: i.str(),
            infantry: i.u16(),
            vehicles: i.u16(),
            points: i.u32(),
          });
        const o = s.map((a) => ({
          ...a,
          repair: 0,
          rescues: 0,
          objectives: 0,
          transport: 0,
        }));
        if (i.remaining() >= s.length * 8)
          for (const a of o)
            ((a.repair = i.u16()),
              (a.rescues = i.u16()),
              (a.objectives = i.u16()),
              (a.transport = i.u16()));
        V.setRaidLeaderboard(o);
      }),
      e.on(ue.S_RAID_ZONE, (i) => {
        const s = i.u8() === 1,
          o = i.f32(),
          a = i.f32(),
          r = i.f32();
        ((this.raidZone = s ? { x: o, z: a, radius: r } : null),
          V.setRaidZone(this.raidZone));
      }),
      e.on(ue.S_NUCLEAR_STRIKE, (i) => {
        const s = i.u8(),
          o = i.u32(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.u16();
        (s === 0
          ? this.nuclearStrikes.delete(o)
          : this.nuclearStrikes.set(o, {
              x: a,
              z: r,
              radius: l,
              expiresAt: Date.now() + c * 1e3,
            }),
          V.mapOpen && V.refreshMap());
      }),
      e.on(ue.S_QUEST_STATUS, (i) => {
        var u;
        const s = i.u8(),
          o = i.str(),
          a = i.str(),
          r = i.u32(),
          l = i.u16(),
          c = i.u16(),
          h = i.u32(),
          d = i.u32();
        (V.setQuestStatus(s, o, a, r, l, c, h, d),
          (u = this.operations) == null || u.setQuest(s ? o : ""));
      }),
      e.on(ue.S_QUEST_POINT, (i) => {
        const s = [];
        for (let o = 0, a = i.u8(); o < a; o++)
          s.push({ kind: i.u8(), x: i.f32(), z: i.f32(), radius: i.f32() });
        V.setQuestPoints(s);
      }),
      e.on(ue.S_ITEM_REMOVE, (i) => {
        (this.inventory.removeItem(i.u16(), i.u16()),
          V.renderHotbar(),
          this.syncHeld(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_KNOCKBACK, (i) => {
        this.player.applyImpulse(i.f32(), i.f32(), i.f32());
      }),
      e.on(ue.S_BUCKET_RESULT, (i) => {
        (this.inventory.applyBucketResult(i.u8(), i.u16()),
          V.renderHotbar(),
          this.syncHeld(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_ITEM_DURABILITY, (i) => {
        const s = i.u8(),
          o = i.u16(),
          a = i.u16(),
          r = i.u16();
        (this.inventory.applyDurability(s, o, a, r),
          s === this.inventory.sel && this.syncHeld(),
          V.renderHotbar(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_ARMOR_DURABILITY, (i) => {
        const s = i.u8(),
          o = i.u16(),
          a = i.u16();
        (this.inventory.applyArmorDurability(s, o, a),
          (this.player.maxHp = Vv(this.inventory.equippedIds())),
          (this.player.hp = Math.min(this.player.hp, this.player.maxHp)),
          V.setHP(this.player.hp, this.player.maxHp),
          V.renderHotbar(),
          V.invOpen && V.openInventory());
      }),
      e.on(ue.S_WORLD_OBJECTS, (i) => {
        const s = [];
        for (let o = 0, a = i.u16(); o < a; o++)
          s.push({
            id: i.str(),
            name: i.str(),
            x: i.f32(),
            z: i.f32(),
            radius: i.f32(),
          });
        ((this.worldObjects = s), V.setWorldObjects(s));
      }),
      e.on(ue.S_WORLD_SITES, (i) => {
        const s = [];
        for (let o = 0, a = i.u16(); o < a; o++) {
          const r = i.str(),
            l = i.str(),
            c = i.u8(),
            h = i.f32(),
            d = i.f32(),
            u = i.f32(),
            f = i.f32(),
            p = new k(i.f32(), i.f32(), i.f32()),
            m = new k(i.f32(), i.f32(), i.f32()),
            y = i.u8(),
            g = i.u8() === 1,
            b = i.str(),
            S = i.u32(),
            M = i.remaining() > 0 && i.u8() === 1;
          s.push({
            id: r,
            name: l,
            kind: c,
            x: h,
            y: d,
            z: u,
            radius: f,
            command: p,
            flag: m,
            state: y,
            alarm: g,
            owner: b,
            supplySeconds: S,
            supplyReady: M,
          });
        }
        (this.worldSites.setSites(s),
          V.setSiteKinds(new Map(s.map((o) => [o.id, o.kind]))),
          V.setHeldSites(
            s
              .filter((o) => {
                var a;
                return (
                  o.state === 2 &&
                  !!((a = this.claimsUI) != null && a.ownerAllows(o.owner))
                );
              })
              .map((o) => o.id),
          ));
      }),
      e.on(ue.S_CHEST, (i) => {
        const s = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8(),
          l = [];
        for (let h = 0; h < r; h++)
          l.push({
            id: i.u16(),
            count: i.u16(),
            durability: i.u16(),
            suppressorDurability: i.u16(),
            magazine: i.u16(),
          });
        const c = i.remaining() > 0 && i.u8() === 1;
        if (i.remaining() >= 2) {
          const h = JSON.parse(i.str());
          for (let d = 0; d < l.length; d++) l[d].cosmetic = h[d] ?? void 0;
        }
        (c &&
          !(
            V.chestOpen &&
            this.chestPos &&
            this.chestPos.x === s &&
            this.chestPos.y === o &&
            this.chestPos.z === a
          )) ||
          (!c &&
            this.chestPos &&
            (this.chestPos.x !== s ||
              this.chestPos.y !== o ||
              this.chestPos.z !== a) &&
            this.world.chestLids.setOpen(
              this.chestPos.x,
              this.chestPos.y,
              this.chestPos.z,
              !1,
            ),
          (this.chestPos = { x: s, y: o, z: a }),
          !c &&
            !this.world.chestLids.isOpen(s, o, a) &&
            this.chestSound(s, o, a, !0),
          c || this.world.chestLids.setOpen(s, o, a, !0),
          V.openChest(l, kd(de[this.world.getBlock(s, o, a)])),
          c || this.input.unlock());
      }),
      e.on(ue.S_CHEST_LID, (i) => {
        var h, d, u;
        const s = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8() === 1,
          l = this.world.chestLids,
          c =
            V.chestOpen &&
            ((h = this.chestPos) == null ? void 0 : h.x) === s &&
            ((d = this.chestPos) == null ? void 0 : d.y) === o &&
            ((u = this.chestPos) == null ? void 0 : u.z) === a;
        (!c && l.isOpen(s, o, a) !== r && r && this.chestSound(s, o, a, !0),
          (c && !r) || l.setOpen(s, o, a, r));
      }),
      e.on(ue.S_BACKPACK_SPAWN, (i) => {
        const s = i.u16(),
          o = i.str(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.remaining() > 0 ? i.u8() : Si.EARTH;
        this.backpacks.onSpawn(s, o, a, r, l, c);
      }),
      e.on(ue.S_BACKPACK_REMOVE, (i) => {
        const s = i.u16();
        (this.backpacks.onRemove(s),
          this.backpackId === s && ((this.backpackId = null), V.closeChest()));
      }),
      e.on(ue.S_BACKPACK, (i) => {
        const s = i.u16(),
          o = i.str();
        ((this.backpackId = s), (this.chestPos = null));
        const a = [];
        for (let r = 0, l = i.u8(); r < l; r++)
          a.push({
            id: i.u16(),
            count: i.u16(),
            durability: i.u16(),
            suppressorDurability: i.u16(),
            magazine: i.u16(),
          });
        if (i.remaining() >= 2) {
          const r = JSON.parse(i.str());
          for (let l = 0; l < a.length; l++) a[l].cosmetic = r[l] ?? void 0;
        }
        (V.openChest(a, U("backpackTitle", { owner: o })), this.input.unlock());
      }),
      e.on(ue.S_FURNACE, (i) => {
        const s = i.i32(),
          o = i.u8(),
          a = i.i32();
        this.furnacePos = { x: s, y: o, z: a };
        const r = [];
        for (let u = 0; u < 3; u++) r.push({ id: i.u16(), count: i.u16() });
        const l = i.u16() / 1e3,
          c = i.u8(),
          h = i.remaining() > 0 ? i.u8() !== 0 : !1,
          d = i.remaining() > 0 ? i.u8() / 255 : 0;
        (V.openFurnace(r, l, c, h, d), this.input.unlock());
      }),
      e.on(ue.S_DROP_SPAWN, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = i.u16(),
          r = i.f32(),
          l = i.f32(),
          c = i.f32(),
          h = i.f32(),
          d = i.remaining() >= 2 ? i.u16() : 0,
          u = i.remaining() >= 2 ? i.u16() : 0,
          f = i.remaining() >= 2 ? i.u16() : void 0,
          p = i.remaining() > 0 ? i.u8() : Si.EARTH,
          m = i.remaining() >= 2 ? JSON.parse(i.str()) : void 0;
        this.drops.onSpawn(s, o, a, r, l, c, h, d, u, f, p, m);
      }),
      e.on(ue.S_DROP_REMOVE, (i) => {
        const s = i.u16(),
          o = i.u16(),
          a = i.remaining() > 0 && i.u8() === 1,
          {
            itemId: r,
            count: l,
            durability: c,
            suppressorDurability: h,
            magazine: d,
          } = this.drops.onRemove(s);
        o === this.myId &&
          r > 0 &&
          (a || this.inventory.addItem(r, l, c, h, d),
          this.sfx.pickup(),
          V.renderHotbar());
      }),
      e.on(ue.S_PONG, (i) => {
        const s = i.u32();
        this.lastRtt =
          Math.max(0, (performance.now() & 4294967295) - s) & 65535;
      }),
      (e.onClose = (i) => {
        this.running && this.end(i || U("connectionLost"));
      }),
      (e.onReconnectState = (i) => {
        if (
          (i && (this.voice.disconnected(), this.chatTts.disconnected()),
          !!this.running)
        ) {
          if (i && (this.restartExpected || e.lastCloseCode === $I)) {
            this.followServerRestart();
            return;
          }
          (!i &&
            this.followingRestart &&
            ((this.followingRestart = this.restartExpected = !1),
            ml.hide(),
            V.showLoading(!1)),
            i ? ml.offline() : ml.mode === "offline" && ml.hide(),
            V.addChat(
              i ? 2 : 1,
              U(i ? "connectionReconnecting" : "connectionRestored"),
            ));
        }
      }),
      e.on(ue.S_SERVER_NOTICE, (i) => {
        const s = Jee(i.str());
        s &&
          (s.kind === "restart"
            ? (ml.countdown(s.seconds, s.reason), VL())
            : s.kind === "cancel"
              ? ((this.restartExpected = !1), ml.hide())
              : ((this.restartExpected = !0), ml.restarting(s.reason)));
      }),
      (this.world.requestChunk = (i, s) => {
        this.net.send(
          new Xe(ue.C_CHUNK_REQ).u8(this.currentPlanet).i32(i).i32(s),
        );
      }),
      (this.world.requestMapTiles = (i) => {
        const s = new Xe(ue.C_MAP_TILES).u8(this.currentPlanet).u8(i.length);
        for (const o of i) s.u8(o.lod).i32(o.tx).i32(o.tz);
        this.net.send(s);
      }),
      (this.world.onMapTileUpdate = () => {
        (V.refreshMap(), (this.minimapLastZoom = 0), (this.minimapTimer = 1));
      }));
  }
  frontMapChange(e, t) {
    (this.corpses.clear(),
      this.drops.clear(),
      this.backpacks.clear(),
      this.world.clearDimension(),
      (this.compassRefreshAt = 0),
      (this.minimapLastZoom = 0),
      V.refreshMap(),
      wH(e, t, z.language === "en" ? "en" : "ru", () => {
        const i = this.world.readiness(
          this.player.pos.x,
          this.player.pos.z,
          this.input.mobile ? 1 : 2,
        );
        return i.total ? i.built / i.total : 1;
      }));
  }
  beginPlanetTransition(e, t, i, s, o) {
    const a = e === Si.MOON,
      r = (h, d) => (z.language === "ru" ? d : h),
      l = document.createElement("div");
    ((l.id = "planet-transition"),
      (l.innerHTML = `<div class="orbit-lines"></div><div class="planet-disc ${a ? "moon" : "earth"}"></div>
      <div class="transfer-kicker">${r("PLANETARY TRANSFER", "МЕЖПЛАНЕТНЫЙ ПЕРЕЛЁТ")}</div>
      <div class="transfer-title">${a ? r("MOON", "ЛУНА") : r("EARTH", "ЗЕМЛЯ")}</div>
      <div class="transfer-coords">${Math.round(i)} / ${Math.round(o)}</div>
      <div class="transfer-bar"><i></i></div><div class="transfer-tip">${r("Preparing to land…", "Подготовка к посадке…")}</div>`),
      (l.style.cssText =
        "position:fixed;inset:0;z-index:100000;background:radial-gradient(circle at 50% 42%,#17213c 0,#050712 38%,#010207 100%);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:system-ui,sans-serif;overflow:hidden;opacity:0;transition:opacity .25s"));
    const c = document.createElement("style");
    ((c.textContent =
      "#planet-transition .planet-disc{width:min(31vw,190px);aspect-ratio:1;border-radius:50%;margin-bottom:24px;box-shadow:0 0 60px #76aaff66,inset -24px -18px 38px #000a;position:relative;z-index:2}#planet-transition .planet-disc.moon{background:radial-gradient(circle at 35% 28%,#eee 0,#a9acb2 46%,#555962 100%)}#planet-transition .planet-disc.earth{background:radial-gradient(circle at 34% 28%,#77c7ff,#1680d2 43%,#0a397d 78%)}#planet-transition .transfer-kicker{font-size:11px;letter-spacing:.42em;color:#8ebcff}#planet-transition .transfer-title{font-weight:900;font-size:clamp(38px,10vw,72px);letter-spacing:.18em;margin-right:-.18em;text-shadow:0 0 30px #7fb7ff88}#planet-transition .transfer-coords,#planet-transition .transfer-tip{font-size:12px;color:#aab7cc;margin-top:9px;text-align:center;padding:0 20px}#planet-transition .transfer-bar{width:min(72vw,420px);height:4px;background:#ffffff18;border-radius:9px;margin-top:26px;overflow:hidden}#planet-transition .transfer-bar i{display:block;height:100%;background:linear-gradient(90deg,#56d8ff,#fff,#8a7dff);animation:fc-load 1.35s ease-in-out forwards}@keyframes fc-load{from{width:0}to{width:100%}}#planet-transition .orbit-lines{position:absolute;width:min(95vw,720px);aspect-ratio:1;border:1px solid #79aaff22;border-radius:50%;box-shadow:0 0 0 55px #79aaff0b,0 0 0 125px #79aaff08;animation:fc-orbit 10s linear infinite}@keyframes fc-orbit{to{transform:rotate(360deg)}}"),
      l.appendChild(c),
      document.body.appendChild(l),
      requestAnimationFrame(() => {
        l.style.opacity = "1";
      }),
      window.setTimeout(() => {
        var d, u, f, p;
        (this.vehicles.clearForTransition(t),
          (d = this.c4) == null || d.clear(),
          (u = this.eggs) == null || u.clear(),
          (f = this.knives) == null || f.clear(),
          this.drops.clear(),
          this.backpacks.clear(),
          this.bots.clear(),
          this.corpses.clear(),
          this.animals.clear(),
          this.worldSites.clear(),
          this.nuclearStrikes.clear(),
          (this.currentPlanet = a ? Si.MOON : Si.EARTH),
          V.setWaypointPlanet(this.currentPlanet),
          (this.compassRefreshAt = 0),
          this.world.clearDimension(),
          this.player.pos.set(i, s, o),
          this.player.vel.set(0, -5, 0),
          (this.player.gravityScale = a ? wp : 1),
          this.sky.setLunar(a),
          this.vehicles.setPlanet(this.currentPlanet),
          this.projectiles.setPlanet(this.currentPlanet),
          this.drops.setPlanet(this.currentPlanet),
          this.backpacks.setPlanet(this.currentPlanet),
          this.bots.setEnabled(!0),
          this.animals.setEnabled(!a),
          this.worldSites.setEnabled(!a));
        const h = this.vehicles.vehicles.get(t);
        (h &&
          ((h.planet = this.currentPlanet),
          h.pos.set(i, s, o),
          h.target.pos.copy(h.pos),
          h.vel.set(0, -5, 0)),
          (p = this.weather) == null || p.setMode(0),
          this.net.send(new Xe(ue.C_PLANET_READY).u8(this.currentPlanet)));
      }, 420),
      window.setTimeout(() => {
        ((l.style.opacity = "0"), window.setTimeout(() => l.remove(), 280));
      }, 1550));
  }
  wireHooks() {
    ((this.weapons.hooks = {
      guidedTarget: () => {
        var h;
        const e = this.camera.getWorldPosition(new k()),
          t = this.camera.getWorldDirection(new k()),
          i = this.camera.quaternion.clone().invert(),
          s = this.front.active && !!this.front.team,
          o = this.front.team,
          a = [
            ...[...this.vehicles.vehicles.values()]
              .filter(
                (d) =>
                  d.planet === this.currentPlanet &&
                  d.hp > 0 &&
                  !(s && d.hpBar.userData.side !== "enemy"),
              )
              .map((d) => ({
                kind: 1,
                id: d.id,
                name: Zs(d.type),
                pos: d.pos.clone().add(new k(0, 1, 0)),
              })),
            ...this.bots
              .list()
              .filter(
                (d) => !d.npc && !(s && this.front.botTeams.get(d.id) === o),
              )
              .map((d) => ({
                kind: 2,
                id: d.id,
                name: z.language === "en" ? "Soldier" : "Боец",
                pos: d.pos.clone().add(new k(0, 1.1, 0)),
              })),
            ...this.remotes
              .list()
              .filter(
                (d) =>
                  d.planet === this.currentPlanet &&
                  !this.remotes.disguiseOf(d.id) &&
                  !(s && !this.front.isEnemyPlayer(d.id)),
              )
              .map((d) => ({
                kind: 3,
                id: d.id,
                name: d.name,
                pos: d.pos.clone().add(new k(0, 1.1, 0)),
              })),
          ].filter((d) => {
            const u = d.pos.clone().sub(e),
              f = u.length(),
              p = u.clone().applyQuaternion(i);
            return f > 240 ||
              p.z >= 0 ||
              Math.abs(p.x / -p.z) > 0.13 ||
              Math.abs(p.y / -p.z) > 0.1
              ? !1
              : !this.world.raycast(e, u.normalize(), Math.max(0, f - 0.6));
          }),
          r = this.weapons.lockTarget;
        if (
          (a.sort(
            (d, u) =>
              +(
                u.kind === (r == null ? void 0 : r.kind) &&
                u.id === (r == null ? void 0 : r.id)
              ) -
                +(
                  d.kind === (r == null ? void 0 : r.kind) &&
                  d.id === (r == null ? void 0 : r.id)
                ) || d.pos.distanceToSquared(e) - u.pos.distanceToSquared(e),
          ),
          a[0])
        )
          return a[0];
        const l = this.world.raycast(e, t, 240),
          c = this.vehicles.rayHit(e, t, (l == null ? void 0 : l.dist) ?? 240);
        return c &&
          s &&
          ((h = this.vehicles.vehicles.get(c.id)) == null
            ? void 0
            : h.hpBar.userData.side) !== "enemy"
          ? null
          : c
            ? {
                kind: 1,
                id: c.id,
                name: Zs(c.type),
                pos: e.addScaledVector(t, c.dist),
              }
            : null;
      },
      lockUpdate: (e, t) => this.net.send(new Xe(ue.C_RPG_LOCK).u8(e).u16(t)),
      onShot: (e, t, i) => {
        ((this.selfShotUntil = performance.now() + 140),
          this.net.send(
            new Xe(ue.C_SHOT)
              .u16(e)
              .f32(t.x)
              .f32(t.y)
              .f32(t.z)
              .f32(i.x)
              .f32(i.y)
              .f32(i.z),
          ),
          this.noteShot(e),
          this.input.mobile && vo("light", 65));
      },
      onHitPlayer: (e, t, i, s, o, a) => {
        this.combatUntil = performance.now() + r3;
        const r = new Xe(ue.C_HIT_PLAYER)
          .u16(e)
          .u8(Ne(t, 0, 255))
          .u16(i)
          .u8(s)
          .u32(this.playerEpochs.get(e) ?? 0);
        (o && a && r.f32(o.x).f32(o.y).f32(o.z).f32(a.x).f32(a.y).f32(a.z),
          this.net.send(r),
          V.hitmark(),
          this.sfx.hitmark());
      },
      onHitVehicle: (e, t, i, s = 1, o) => {
        const a = new Xe(ue.C_HIT_VEHICLE).u16(e).u16(t);
        (i &&
          (a.u8(s).f32(i.x).f32(i.y).f32(i.z),
          o && a.f32(o.x).f32(o.y).f32(o.z)),
          this.net.send(a),
          V.hitmark(),
          this.sfx.hitmark());
      },
      onHitBot: (e, t, i, s, o, a) => {
        this.combatUntil = performance.now() + r3;
        const r = new Xe(ue.C_HIT_BOT)
          .u16(e)
          .u8(Ne(t, 0, 255))
          .u16(i)
          .u8(s);
        (o && a && r.f32(o.x).f32(o.y).f32(o.z).f32(a.x).f32(a.y).f32(a.z),
          this.net.send(r),
          V.hitmark(),
          this.sfx.hitmark());
      },
      onHitAnimal: (e, t) => {
        (this.net.send(new Xe(ue.C_HIT_ANIMAL).u16(e).u8(Ne(t, 0, 255))),
          V.hitmark(),
          this.sfx.hitmark());
      },
      onBulletHole: (e) => {
        this.bulletHoles.add(e);
      },
      onHitBlock: (e, t, i, s, o, a, r) => {
        const l = new Xe(ue.C_BLOCK_HIT).i32(e).u8(t).i32(i).u8(s);
        (a && r && l.f32(a.x).f32(a.y).f32(a.z).f32(r.x).f32(r.y).f32(r.z),
          this.net.send(l));
      },
      onHitTarget: (e, t, i, s) => this.scoreTargetHit(e, t, i, s),
      personalVehicle: () => {
        var e;
        return this.vehicles.passengerCanShoot()
          ? (e = this.vehicles.mine) == null
            ? void 0
            : e.id
          : void 0;
      },
      prepareShot: (e, t) => (
        this.sendPlayerState(),
        this.vehicles.preparePassengerShot(e, t)
      ),
      thirdPersonAim: () => this.tpAim,
      vehicleRay: (e, t, i) => this.vehicles.rayHit(e, t, i),
      botRay: (e, t, i) => this.bots.raycastHit(e, t, i),
      animalRay: (e, t, i) => this.animals.raycastHit(e, t, i),
      projectileRay: (e, t, i) => this.projectiles.rayHit(e, t, i),
      onHitProjectile: (e, t, i = 1) => {
        (this.net.send(
          new Xe(ue.C_HIT_PROJ).u32(e).f32(t.x).f32(t.y).f32(t.z).u8(i),
        ),
          V.hitmark(),
          this.sfx.hitmark());
      },
      isCreative: () => this.inventory.creative,
      countItem: (e) =>
        this.front.endlessAmmo(e) ? 999 : this.inventory.countOf(e),
      endlessAmmo: (e) => this.front.endlessAmmo(e),
      returnAmmo: (e, t) =>
        this.front.endlessAmmo(e) ? t : this.inventory.addItem(e, t),
      ammoPicker: (e, t, i) => V.showAmmoPicker(e, t, i),
      impactExplosion: (e, t, i) => {
        (this.effects.explosion(e, t, this.camera.position),
          this.sfx.explosion(e.distanceTo(this.player.pos), 0.35),
          this.projectiles.hooks.sendExplosion(e, t, i, -1, t));
      },
      atomic: (e) => this.inventory.deferChanges(e),
      getHeldMagazine: () => {
        var e;
        return (e = this.inventory.hotbar[this.inventory.sel]) == null
          ? void 0
          : e.magazine;
      },
      setHeldMagazine: (e) => {
        const t = this.inventory.hotbar[this.inventory.sel];
        !t ||
          t.id !== this.weapons.held ||
          ((t.magazine = e), this.inventory.save());
      },
      consumeItem: (e, t) => {
        if (this.front.endlessAmmo(e)) return !0;
        const i =
          e === E.GRENADE && t === 1 && this.inventory.held() === e
            ? this.inventory.consumeHeld()
            : this.inventory.consumeItem(e, t);
        return (
          i && (V.renderHotbar(), this.syncHeld(), (this.invDirty = !0)),
          i
        );
      },
      wearHeld: (e = 1) => {
        this.inventory.creative ||
          this.net.send(
            new Xe(ue.C_ITEM_WEAR).u8(this.inventory.sel).u8(Ne(e, 1, 255)),
          );
      },
    }),
      (this.projectiles.hooks = {
        allowExplosion: (e) =>
          !this.spawnNotice.contains(e.x, e.z, this.currentPlanet),
        sendExplosion: (e, t, i, s, o, a = 0, r = 0) => {
          this.net.send(
            new Xe(ue.C_EXPLOSION)
              .f32(e.x)
              .f32(e.y)
              .f32(e.z)
              .f32(t)
              .u16(i)
              .u16(s < 0 ? 65535 : s)
              .f32(o)
              .u32(a)
              .u8(r),
          );
        },
        sendSpawn: (e, t, i, s, o, a, r) => {
          const l = new Xe(ue.C_PROJECTILE)
            .u32(e)
            .u8(t)
            .u8((o ? 1 : 0) | (a ? (t === pt.ROCKET ? 4 : 8) : 0))
            .f32(i.x)
            .f32(i.y)
            .f32(i.z)
            .f32(s.x)
            .f32(s.y)
            .f32(s.z);
          (o && l.f32(o.x).f32(o.y).f32(o.z),
            a && (l.u8(a), t === pt.ROCKET ? l.u16(r ?? 0) : l.u32(r ?? 0)),
            this.net.send(l));
        },
        vehicleImpact: (e, t) => this.vehicles.projHit(e, t),
        entityImpact: (e, t, i) => this.projectileEntityHit(e, t, i),
        onVehicleHit: (e, t, i, s = 2) => {
          const o = new Xe(ue.C_HIT_VEHICLE).u16(e).u16(t);
          (i && o.u8(s).f32(i.x).f32(i.y).f32(i.z),
            this.net.send(o),
            V.hitmark(),
            this.sfx.hitmark());
        },
        onHitProjectile: (e, t, i = 1) => {
          this.net.send(
            new Xe(ue.C_HIT_PROJ).u32(e).f32(t.x).f32(t.y).f32(t.z).u8(i),
          );
        },
      }),
      (this.vehicles.hooks = {
        sendState: (e) => {
          this.net.send(
            new Xe(ue.C_VEH_STATE)
              .u16(e.id)
              .f32(e.pos.x)
              .f32(e.pos.y)
              .f32(e.pos.z)
              .f32(e.quat.x)
              .f32(e.quat.y)
              .f32(e.quat.z)
              .f32(e.quat.w)
              .f32(e.vel.x)
              .f32(e.vel.y)
              .f32(e.vel.z)
              .f32(e.aux1)
              .f32(e.aux2),
          );
        },
        sendRam: (e, t, i, s) =>
          this.net.send(new Xe(ue.C_VEH_RAM).u16(e.id).f32(t).f32(i).f32(s)),
        sendEnter: (e, t) => {
          this.sendPlayerState();
          const i = new Xe(ue.C_VEH_ENTER).u16(e);
          (t !== void 0 && i.u8(t), this.net.send(i), vo("medium", 0));
        },
        sendExit: () => {
          (this.net.send(new Xe(ue.C_VEH_EXIT)), vo("soft", 0));
        },
        sendSpawn: (e, t, i) => {
          this.net.send(
            new Xe(ue.C_VEH_SPAWN).u8(e).f32(t.x).f32(t.y).f32(t.z).u32(i),
          );
        },
        requestTankAim: (e, t) =>
          this.net.send(new Xe(ue.C_TANK_AIM).u16(e).f32(t.x).f32(t.z)),
        sendHit: (e, t) =>
          this.net.send(new Xe(ue.C_HIT_VEHICLE).u16(e).u16(t)),
        sendHeliCargo: (e, t) =>
          this.net.send(new Xe(ue.C_HELI_CARGO).u16(e).u16(t)),
        mgFire: (e, t) => {
          (this.planeMg(e, t), this.input.mobile && vo("light", 65));
        },
        seatGunFire: (e, t, i) => {
          (this.planeMg(e, t, i), this.input.mobile && vo("light", 65));
        },
        lookOf: (e) => this.remotes.lookOf(e),
        seatGunBusy: () => this.inventory.held() === E.WELDER,
        seatGunOverheat: (e) => {
          (this.sfx.barrelHiss(),
            this.effects.exhaust(e, this.tmpV.set(0, 0.6, 0), 1),
            this.input.mobile && vo("heavy", 0));
        },
        seatFigure: () => {
          const e = ec(5662532);
          return (
            (e.armL.rotation.x = e.armR.rotation.x = -1.35),
            (e.armL.rotation.z = -0.22),
            (e.armR.rotation.z = 0.22),
            e.group
          );
        },
        onControlReleased: (e) => {
          e &&
            !this.remote.open &&
            (this.player.pos.copy(e), this.player.vel.set(0, 0, 0));
        },
        launchRocket: (e, t) => {
          var i;
          (this.projectiles.spawn(
            pt.ROCKET,
            e,
            t.clone().multiplyScalar(42),
            !0,
            { ignoreVehicle: (i = this.vehicles.mine) == null ? void 0 : i.id },
          ),
            this.sfx.shot("rpg"),
            this.effects.flash(e, 3, 0.1),
            vo("heavy", 0));
        },
        sendExplosion: (e, t, i, s, o = t) => {
          this.net.send(
            new Xe(ue.C_EXPLOSION)
              .f32(e.x)
              .f32(e.y)
              .f32(e.z)
              .f32(t)
              .u16(i)
              .u16(s === void 0 || s < 0 ? 65535 : s)
              .f32(o),
          );
        },
        openMap: (e) =>
          e === "carrier"
            ? this.openCarrierMap()
            : e === "nuclear"
              ? this.openNuclearMap()
              : this.openHimarsMap(),
        isFriendly: (e) =>
          e === this.myId ||
          this.friends.has(this.remotes.getName(e)) ||
          Xa(this.remotes.getName(e)),
        isFriendlyName: (e) => e === z.nick || this.friends.has(e) || Xa(e),
        battleSide: (e) => {
          var t;
          return !((t = this.front) != null && t.active) ||
            !this.front.team ||
            !e
            ? null
            : e === this.front.team
              ? "ally"
              : "enemy";
        },
      }),
      (this.vehicles.hooks.message = (e) => V.addChat(2, e)),
      (this.worldedit.onMsg = (e, t) => V.addChat(e, t)),
      (this.worldedit.sendOp = (e, t, i, s, o) => {
        this.net.send(
          new Xe(ue.C_WORLDEDIT)
            .u8(e)
            .i32(t[0])
            .i32(t[1])
            .i32(t[2])
            .i32(i[0])
            .i32(i[1])
            .i32(i[2])
            .u8(s)
            .u8(o),
        );
      }),
      (this.player.onFallDamage = (e, t) => {
        this.net.send(
          new Xe(ue.C_SELF_DAMAGE).u16(e).f32(t).u32(this.movementEpoch),
        );
      }));
  }
  wireUI() {
    (window.addEventListener("squad-changed", () => {
      this.running &&
        this.net.send(
          new Xe(ue.C_SQUAD).str(JSON.stringify({ action: "refresh" })),
        );
    }),
      (V.onWaypointChange = () => this.shareWaypoint()),
      (V.onChatOpened = () => {
        var e;
        return (e = this.operations) == null ? void 0 : e.beginChat();
      }),
      (V.onChatSend = (e) => {
        var r;
        const t = rM(e, z.language) ?? aM(e, z.language);
        if (t) {
          V.addChat(2, t);
          return;
        }
        if (e.startsWith("/") && !Ja(e)) {
          V.addChat(
            2,
            Ns("You do not have permission to use this command", z.language),
          );
          return;
        }
        const i = (r = this.operations) == null ? void 0 : r.chooseFromChat(e);
        if (i) {
          i === "invalid" &&
            V.addChat(
              2,
              z.language === "en"
                ? "This choice is unavailable. Open chat again and use a number shown in the mission panel."
                : "Этот вариант недоступен. Откройте чат снова и введите номер из панели миссии.",
            );
          return;
        }
        const s = () => this.net.send(new Xe(ue.C_COMMAND_AUDIT).str(e));
        if (e.trim().toLowerCase() === "/shop") {
          (s(), V.openShop(), this.input.unlock());
          return;
        }
        if (/^\/debug\s+hitbox(es)?$/.test(e.trim().toLowerCase())) {
          (s(),
            (this.debugHitboxes = !this.debugHitboxes),
            V.addChat(
              1,
              U("debugHitboxesToggle", {
                state: this.debugHitboxes ? U("stateOn") : U("stateOff"),
              }),
            ));
          return;
        }
        const o = /^\/fx(?:\s+(\S+))?(?:\s+(\d+(?:\.\d+)?))?$/i.exec(e.trim());
        if (o) {
          (s(),
            this.previewBlast((o[1] ?? "").toLowerCase(), Number(o[2]) || 0));
          return;
        }
        const a = /^\/slowmo(?:\s+(\S+))?$/i.exec(e.trim());
        if (a) {
          s();
          const l =
            a[1] === void 0 || a[1] === "off"
              ? this.effects.timeScale < 1
                ? 1
                : 0.25
              : Ne(Number(a[1]) || 1, 0.05, 1);
          ((this.effects.timeScale = l),
            V.addChat(
              1,
              z.language === "en"
                ? l < 1
                  ? `Slow motion ×${l} · /slowmo off`
                  : "Slow motion off"
                : l < 1
                  ? `Замедление ×${l} · /slowmo off`
                  : "Замедление выключено",
            ));
          return;
        }
        if (e.startsWith("//")) {
          this.worldedit.handleCommand(e);
          return;
        }
        if (
          !this.net.isLocal &&
          !e.startsWith("/") &&
          !/^help$/i.test(e.trim())
        ) {
          const l = this.chatRate.wait(Go);
          if (l > 0) return (V.addChat(2, _Y(l, z.language)), !1);
          this.chatRate.record(Go);
        }
        this.net.send(
          new Xe(ue.C_CHAT)
            .str(e)
            .u8(Go === "squad" ? 1 : Go === "team" ? 2 : 0),
        );
      }),
      (V.onUiOpen = () => this.input.unlockForUi()),
      (V.onChatClosed = () => {
        var e;
        ((e = this.operations) == null || e.endChat(),
          this.running && !V.anyOpen() && this.input.lock());
      }),
      (V.onTeleportAnswer = (e) =>
        this.net.send(new Xe(ue.C_CHAT).str(e ? "/tpa" : "/tpc"))),
      (V.onMapClosed = () => {
        this.running && !V.anyOpen() && this.input.lock();
      }),
      (V.onlinePlayerNames = () => this.lastTab.map((e) => e.name)),
      (V.onToggleFriend = (e) => {
        const t = this.lastTab.find((i) => i.id === e);
        !t ||
          e === this.myId ||
          this.net.send(
            new Xe(ue.C_FRIENDS)
              .u8(this.friends.has(t.name) ? 1 : 0)
              .str(t.name),
          );
      }),
      (V.onQualityChange = () => this.applyQuality()),
      (V.onSfxVolumeChange = (e) => this.sfx.setVolume(e)),
      (V.onMusicVolumeChange = (e) => this.music.setVolume(e)),
      (V.onLanguageChange = (e) => this.net.send(new Xe(ue.C_LANGUAGE).str(e))),
      (V.onDisconnect = () => (sY(), this.end())),
      (V.onResume = () => {
        var e;
        ((e = this.front) != null && e.overlayOpen) || this.input.lock();
      }),
      (V.onRespawn = () => this.net.send(new Xe(ue.C_RESPAWN))),
      (V.onSkills = () => this.openSkills()),
      (V.onReplayTraining = () => {
        ((this.trainingWalked = 0),
          (this.trainingMined = 0),
          (this.trainingEarned = !1),
          (this.trainingMap = this.trainingInventory = this.trainingShop = !1),
          this.training.restart(),
          V.onResume());
      }),
      (V.onSaveGame = () => {
        (this.sendInventory(), this.net.requestLocalSave());
      }),
      (V.onHotbarChange = () => this.syncHeld(!0)),
      (V.onWeaponIdChanged = () => {
        (this.syncHeld(), (this.invDirty = !0));
      }),
      (V.onHelmetModuleChanged = (e, t) => {
        (this.vision.sync(e, t), this.refreshSelfArmor());
      }),
      (V.weaponMagInfo = (e, t) => this.weapons.magInfo(e, t)),
      (V.onEquipmentRepair = (e, t) => {
        (this.sendInventory(),
          this.net.send(
            new Xe(ue.C_EQUIPMENT_REPAIR)
              .u8(e)
              .u32(t)
              .u32(this.shopInventoryRevision),
          ));
      }),
      (V.onShopBuy = (e, t) =>
        this.net.send(new Xe(ue.C_SHOP).u8(0).u16(e).u16(t))),
      (V.onDropItem = (e, t, i, s, o, a) =>
        this.net.send(
          new Xe(ue.C_THROW)
            .u16(e)
            .u16(t)
            .u16(i)
            .u16(s)
            .u16(o ?? 65535)
            .str((a == null ? void 0 : a.uid) ?? ""),
        )),
      (V.onSellItem = (e, t, i, s) => {
        this.sendInventory();
        let o = 0;
        return (
          this.inventory.deferChanges(() => {
            if (((o = this.inventory.removeFromSlot(e, t, s)), o <= 0)) return;
            const a = e === "h" ? t : e === "a" ? 9 + Ic + t : 9 + t;
            this.net.send(new Xe(ue.C_SHOP).u8(1).u16(i).u16(o).u16(a));
          }),
          o <= 0 ? 0 : (this.syncHeld(), (this.invDirty = !0), o)
        );
      }),
      (V.cosmeticOwner = () => {
        var e;
        return (
          ((e = this.ownAppearance) == null ? void 0 : e.owner) ??
          (Me == null ? void 0 : Me.id) ??
          z.nick
        );
      }),
      (V.onInventoryPreview = (e) => {
        var i, s;
        if (!e) {
          (i = this.inventoryPreview) == null || i.hide();
          return;
        }
        this.inventoryPreview ?? (this.inventoryPreview = new AZ());
        const t = this.ownAppearance ?? {
          character: Ot.character,
          custom: Ot.custom,
          owner: (Me == null ? void 0 : Me.id) ?? z.nick,
        };
        this.inventoryPreview.show(
          t,
          this.inventory.armor,
          this.inventory.hotbar[this.inventory.sel],
          this.atlas.texture,
          ((s = this.ownAppearance) == null ? void 0 : s.armor) ?? {},
        );
      }),
      (V.onContainerMove = (e, t, i, s, o, a, r) => {
        var f, p;
        const l = e === "f" || i === "f",
          c = (l ? this.furnacePos : this.chestPos) ?? { x: 0, y: 0, z: 0 };
        if (!l && this.backpackId === null && !this.chestPos) return;
        this.sendInventory();
        const h = (m) => m === "c" || m === "f",
          d = (m, y) =>
            y >= 65534 ? y : m === "s" ? y + 9 : m === "a" ? y + 36 : y,
          u = new Xe(ue.C_CONTAINER_MOVE)
            .u8(l ? 2 : this.backpackId !== null ? 1 : 0)
            .i32(c.x)
            .u8(c.y)
            .i32(c.z)
            .u16(this.backpackId ?? 0)
            .u8(h(e) ? 1 : 0)
            .u16(d(e, t))
            .u8(h(i) ? 1 : 0)
            .u16(d(i, s))
            .u16(o);
        for (const m of [a, r])
          u.u16(m.id)
            .u16(m.count)
            .u16(m.durability ?? np(m.id))
            .u16(m.suppressorDurability ?? Vl(m.id))
            .u16(m.magazine ?? 65535);
        (u.str(
          JSON.stringify([
            ((f = a.cosmetic) == null ? void 0 : f.uid) ?? null,
            ((p = r.cosmetic) == null ? void 0 : p.uid) ?? null,
          ]),
        ),
          this.net.send(u));
      }),
      (V.onChestPut = (e, t, i, s) => {
        if (this.backpackId !== null) {
          this.sendInventory();
          let a = 0;
          if (
            (this.inventory.deferChanges(() => {
              if (((a = this.inventory.removeFromSlot(e, t, s)), a <= 0))
                return;
              const r = e === "h" ? t : 9 + t;
              this.net.send(
                new Xe(ue.C_BACKPACK)
                  .u8(1)
                  .u16(this.backpackId)
                  .u16(r)
                  .u16(i)
                  .u16(a),
              );
            }),
            a <= 0)
          )
            return;
          (V.renderHotbar(), this.syncHeld(), (this.invDirty = !0));
          return;
        }
        if (!this.chestPos) return;
        this.sendInventory();
        let o = 0;
        (this.inventory.deferChanges(() => {
          if (((o = this.inventory.removeFromSlot(e, t, s)), o <= 0)) return;
          const a = e === "h" ? t : 9 + t;
          this.net.send(
            new Xe(ue.C_CHEST)
              .u8(1)
              .i32(this.chestPos.x)
              .u8(this.chestPos.y)
              .i32(this.chestPos.z)
              .u16(a)
              .u16(i)
              .u16(o),
          );
        }),
          !(o <= 0) &&
            (V.renderHotbar(), this.syncHeld(), (this.invDirty = !0)));
      }),
      (V.onChestTake = (e, t) => {
        if (this.backpackId !== null) {
          this.net.send(
            new Xe(ue.C_BACKPACK).u8(2).u16(this.backpackId).u16(e).u16(t),
          );
          return;
        }
        this.chestPos &&
          this.net.send(
            new Xe(ue.C_CHEST)
              .u8(2)
              .i32(this.chestPos.x)
              .u8(this.chestPos.y)
              .i32(this.chestPos.z)
              .u16(e)
              .u16(t),
          );
      }),
      (V.onChestSell = (e, t) => {
        if (this.backpackId !== null) {
          this.net.send(
            new Xe(ue.C_BACKPACK).u8(3).u16(this.backpackId).u16(e).u16(t),
          );
          return;
        }
        this.chestPos &&
          this.net.send(
            new Xe(ue.C_CHEST)
              .u8(3)
              .i32(this.chestPos.x)
              .u8(this.chestPos.y)
              .i32(this.chestPos.z)
              .u16(e)
              .u16(t),
          );
      }),
      (V.onFurnacePut = (e, t, i, s, o) => {
        if (!this.furnacePos) return;
        this.sendInventory();
        let a = 0;
        (this.inventory.deferChanges(() => {
          if (((a = this.inventory.removeFromSlot(e, t, o)), a <= 0)) return;
          const r = e === "h" ? t : 9 + t,
            l = this.furnacePos;
          this.net.send(
            new Xe(ue.C_FURNACE)
              .u8(0)
              .i32(l.x)
              .u8(l.y)
              .i32(l.z)
              .u8(i)
              .u8(r)
              .u16(s)
              .u16(a),
          );
        }),
          !(a <= 0) &&
            (V.renderHotbar(), this.syncHeld(), (this.invDirty = !0)));
      }),
      (V.onFurnaceTake = (e, t) => {
        if (!this.furnacePos) return;
        const i = this.furnacePos;
        this.net.send(
          new Xe(ue.C_FURNACE)
            .u8(1)
            .i32(i.x)
            .u8(i.y)
            .i32(i.z)
            .u8(e)
            .u8(0)
            .u16(0)
            .u16(t),
        );
      }),
      (V.onFurnaceSell = (e, t) => {
        if (!this.furnacePos) return;
        const i = this.furnacePos;
        this.net.send(
          new Xe(ue.C_FURNACE)
            .u8(2)
            .i32(i.x)
            .u8(i.y)
            .i32(i.z)
            .u8(e)
            .u8(0)
            .u16(0)
            .u16(t),
        );
      }),
      (V.onChestClosed = () => {
        if (!this.chestPos) return;
        const { x: e, y: t, z: i } = this.chestPos;
        (this.net.send(
          new Xe(ue.C_CHEST).u8(4).i32(e).u8(t).i32(i).u16(0).u16(1),
        ),
          this.world.chestLids.setOpen(e, t, i, !1));
      }),
      (V.onFurnaceClose = () => {
        if (!this.furnacePos) return;
        const e = this.furnacePos;
        (this.net.send(
          new Xe(ue.C_FURNACE)
            .u8(3)
            .i32(e.x)
            .u8(e.y)
            .i32(e.z)
            .u8(0)
            .u8(0)
            .u16(0)
            .u16(1),
        ),
          (this.furnacePos = null));
      }));
  }
  planeMg(e, t, i) {
    var S, M;
    const s =
        (i == null ? void 0 : i.range) ??
        Rg((S = this.vehicles.mine) == null ? void 0 : S.type),
      o =
        !i &&
        ((M = this.vehicles.mine) == null ? void 0 : M.type) === P.BTR_TURRET,
      a = (i == null ? void 0 : i.soldier) ?? (o ? 14 : 8),
      r = (i == null ? void 0 : i.hull) ?? (o ? 9 : 5),
      l = this.world.raycastBullet(e, t, s, 2);
    for (const x of l.torn)
      (this.weapons.hooks.onHitBlock(x.bx, x.by, x.bz, tP, x.block, x.point, e),
        this.effects.bulletImpact(x.point, de[x.block].color));
    const c = l.hit,
      h = c ? c.dist : s,
      d = this.remotes.raycastHit(e, t, h),
      u = this.bots.raycastHit(e, t, d ? Math.min(d.dist, h) : h),
      f = this.animals.raycastHit(
        e,
        t,
        Math.min(
          (d == null ? void 0 : d.dist) ?? h,
          (u == null ? void 0 : u.dist) ?? h,
        ),
      ),
      p = Math.min(
        (d == null ? void 0 : d.dist) ?? h,
        (u == null ? void 0 : u.dist) ?? h,
        (f == null ? void 0 : f.dist) ?? h,
      ),
      m = this.vehicles.rayHit(e, t, p),
      y = this.projectiles.rayHit(e, t, h),
      g = (x, ...T) => !!x && T.every((A) => !A || x.dist < A.dist);
    let b;
    (g(y, m, d, u, f)
      ? ((b = y.pos),
        this.net.send(
          new Xe(ue.C_HIT_PROJ).u32(y.id).f32(b.x).f32(b.y).f32(b.z).u8(1),
        ),
        this.effects.bulletImpact(b, 16759620))
      : g(m, d, u, f)
        ? ((b = e.clone().addScaledVector(t, m.dist)),
          this.weapons.hooks.onHitVehicle(
            m.id,
            m.type === P.DRONE ? 20 : r,
            e.clone().addScaledVector(t, m.dist),
            1,
            e,
          ),
          this.effects.bulletImpact(b, 16764006))
        : g(f, d, u)
          ? ((b = f.point),
            this.weapons.hooks.onHitAnimal(f.id, 14),
            this.effects.bloodHit(b))
          : g(u, d)
            ? ((b = u.point),
              this.weapons.hooks.onHitBot(u.id, a, E.PLANE, u.region),
              this.effects.bloodHit(b))
            : d
              ? ((b = d.point),
                this.weapons.hooks.onHitPlayer(d.id, a, E.PLANE, d.region),
                this.effects.bloodHit(b))
              : c
                ? ((b = c.point),
                  bC(c.block)
                    ? this.scoreTargetHit(b, c.nx, c.ny, c.nz)
                    : (this.weapons.hooks.onHitBlock(
                        c.bx,
                        c.by,
                        c.bz,
                        6,
                        c.block,
                        c.point,
                        e,
                      ),
                      this.effects.bulletImpact(b, de[c.block].color)))
                : (b = e.clone().addScaledVector(t, s)),
      this.effects.tracer(e, b),
      this.sfx.shot(o ? "autocannon" : i != null && i.heavy ? "hmg" : "mg"),
      this.net.send(
        new Xe(ue.C_SHOT)
          .u16(E.PLANE)
          .f32(e.x)
          .f32(e.y)
          .f32(e.z)
          .f32(t.x)
          .f32(t.y)
          .f32(t.z),
      ),
      this.noteShot(E.PLANE));
  }
  noteShot(e) {
    (this.shotsSent++,
      this.shotLog.push(e),
      this.shotLog.length > 512 &&
        this.shotLog.splice(0, this.shotLog.length - 512));
  }
  respendShotsInFlight(e) {
    const t = this.shotsSent - this.shotLog.length;
    e > t && this.shotLog.splice(0, Math.min(this.shotLog.length, e - t));
    for (const i of this.shotLog) {
      const s = this.inventory.hotbar.find((r) => r.id === i && r.count > 0),
        o = s ? wM(i) : 0;
      if (!s || !o) continue;
      const a = Ug(s.magazine ?? 65535, o);
      a > 0 && (s.magazine = jd(a - 1, sp(i, s.magazine ?? 65535)));
    }
  }
  updateSubmersion(e) {
    const t = this.player;
    if (t.splashImpact > 0) {
      const r = Math.floor(t.pos.y + 0.6) + 1;
      (this.effects.splash(this.tmpV.set(t.pos.x, r, t.pos.z), t.splashImpact),
        this.sfx.splash(Ne(t.splashImpact / 12, 0.3, 1.4)),
        (t.splashImpact = 0));
    }
    const i = this.camera.position,
      s =
        this.world.getBlock(
          Math.floor(i.x),
          Math.floor(i.y),
          Math.floor(i.z),
        ) === v.LAVA,
      o = this.world.isWaterAt(i.x, i.y, i.z);
    if (((this.inLava = s), o)) {
      let r = Math.floor(i.y);
      for (
        ;
        r < Math.floor(i.y) + 48 && this.world.isWaterAt(i.x, r + 1.5, i.z);
      )
        r++;
      this.waterSurfaceY = r + 0.875;
    }
    (document.body.classList.toggle("in-lava", s),
      document.body.classList.toggle(
        "underwater",
        o && !s && Ts().waterQuality > 0,
      ),
      o !== this.underwater &&
        ((this.underwater = o),
        document.body.classList.toggle(
          "underwater",
          o && !s && Ts().waterQuality > 0,
        ),
        this.sfx.setSubmerged(o),
        o || this.sfx.splash(0.45)));
    const a = this.scene.fog;
    if (a) {
      const r = Ts(),
        l = (this.world.renderDist || r.renderDist) * 16;
      this.underwaterMix +=
        ((o ? 1 : 0) - this.underwaterMix) * (1 - Math.exp(-9 * e));
      const c = r.fog && !this.vehicles.airborneFixedWing,
        h = c ? l * o8(l) : 9999,
        d = c ? l * s8 : 1e4;
      ((a.near = Qi(h, 0.1, this.underwaterMix)),
        (a.far = Qi(d, s ? 3 : 26, this.underwaterMix)),
        this.underwaterMix > 0.001 &&
          a.color.lerp(s ? Vse : $se, this.underwaterMix));
    }
    o &&
      !s &&
      this.player.alive &&
      ((this.bubbleT -= e),
      this.bubbleT <= 0 &&
        ((this.bubbleT = 0.22 + Math.random() * 0.45),
        this.effects.bubbles(this.tmpV.set(i.x, i.y + 0.15, i.z)),
        Math.random() < 0.35 && this.sfx.bubble()));
  }
  previewBlast(e, t) {
    const i = Object.keys(op),
      s = e === "all" ? i.filter((r) => r !== "nuke") : e in op ? [e] : [];
    if (!s.length) {
      V.addChat(
        1,
        `/fx <${i.join("|")}|all> [${z.language === "en" ? "distance" : "дистанция"}] · /slowmo 0.3 · /bombtest`,
      );
      return;
    }
    const o = this.camera.position.clone(),
      a = new k(0, 0, -1).applyQuaternion(this.camera.quaternion);
    s.forEach((r, l) =>
      setTimeout(() => {
        const c = op[r],
          h = t || 160,
          d = this.world.raycast(o, a, h),
          u = d
            ? d.point.clone().addScaledVector(new k(d.nx, d.ny, d.nz), 0.3)
            : o.clone().addScaledVector(a, t || Math.max(14, c.radius * 3.2)),
          f = d ? new k(d.nx, d.ny, d.nz) : new k(0, 1, 0);
        s.length > 1 && V.addChat(1, z.language === "en" ? c.en : c.ru);
        const p = this.effectExposure(u);
        (this.effects.explosion(u, c.radius, this.camera.position, p, c.fx, f),
          this.sfx.blast(
            c.fx,
            u.distanceTo(this.camera.position),
            p,
            c.radius,
          ));
      }, l * 3500),
    );
  }
  setMyDisguise(e) {
    var t;
    if (
      ((t = this.myDisguise) == null || t.dispose(),
      (this.myDisguise = null),
      (this.disguiseSnapped = !1),
      e.kind === zo.NONE)
    ) {
      (this.viewBeforeDisguise !== null &&
        ((this.thirdPerson = this.viewBeforeDisguise),
        (this.viewBeforeDisguise = null)),
        V.setHint(""));
      return;
    }
    ((this.myDisguise = rR(e, this.world)),
      this.scene.add(this.myDisguise.root),
      this.viewBeforeDisguise === null &&
        (this.viewBeforeDisguise = this.thirdPerson),
      (this.thirdPerson = !0),
      (this.frontView = !1),
      V.setHint(U("disguiseHint", { what: dG(e, z.language === "en") })));
  }
  chestSound(e, t, i, s, o = 1) {
    const a = this.world.getBlock(e, t, i),
      r = a === v.MILITARY_CHEST,
      l = this.camera.position,
      c = e + 0.5 - l.x,
      h = i + 0.5 - l.z,
      d = Math.hypot(c, t + 0.5 - l.y, h);
    if (d > 32) return;
    const u = this.tmpV.set(1, 0, 0).applyQuaternion(this.camera.quaternion),
      f = (c * u.x + h * u.z) / Math.max(1, Math.hypot(c, h));
    (s ? this.sfx.chestOpen(d, f, r) : this.sfx.chestSlam(d, f, r, o),
      this.effects.chestDust(
        new k(e + 0.5, t + (r ? 0.62 : 0.7), i + 0.5),
        s,
        r,
      ));
  }
  effectExposure(e) {
    const t = this.tmpV2.copy(e).sub(this.camera.position),
      i = t.length();
    return i < 1.2
      ? 1
      : (t.multiplyScalar(1 / i),
        this.world.raycast(this.camera.position, t, Math.max(0, i - 0.8))
          ? 0.12
          : 1);
  }
  projectileEntityHit(e, t, i) {
    const s = this.tmpProjSeg.copy(t).sub(e),
      o = s.length();
    if (o < 1e-4) return null;
    s.divideScalar(o);
    let a = null,
      r = o;
    for (const l of [
      this.remotes.raycastHit(e, s, o),
      this.bots.raycastHit(e, s, o),
      this.animals.raycastHit(e, s, o),
    ])
      l && l.dist <= r && ((r = l.dist), (a = l.point));
    if (!i && this.player.alive) {
      const l = this.player.pos,
        c = Vp(
          e,
          s,
          l.x - 0.35,
          l.y,
          l.z - 0.35,
          l.x + 0.35,
          l.y + this.player.h,
          l.z + 0.35,
        );
      c !== null && c <= r && ((r = c), (a = e.clone().addScaledVector(s, c)));
    }
    return a;
  }
  applyQuality() {
    var b, S, M, x;
    const e = this.input.mobile && !!((b = this.front) != null && b.active),
      t = Ts(),
      i = e
        ? {
            ...t,
            renderDist: Math.min(t.renderDist, this.front.tdm ? 5 : 6),
            pixelRatio: Math.min(t.pixelRatio, 1),
            shadowSize: 0,
            chunkShadows: !1,
            clouds: !1,
            sunShafts: 0,
            fancyLeaves: !1,
            antialias: !1,
            particles: Math.min(t.particles, 0.5),
            waterQuality: Math.min(t.waterQuality, 1),
            environmentDetail: 0,
            celestialDetail: Math.min(t.celestialDetail, 1),
          }
        : t;
    ((this.frameIntervalMs = e ? 1e3 / 60 - 1.5 : 0),
      (this.reviveUI.noFilter = e));
    const s =
        z.quality !== "custom" &&
        this.input.mobile &&
        Math.min(innerWidth, innerHeight) <= 700,
      o = s
        ? Math.min(
            i.renderDist,
            z.quality === "ultra" ? 9 : z.quality === "high" ? 8 : 6,
          )
        : i.renderDist,
      a = s ? Math.min(i.pixelRatio, 1.15) : i.pixelRatio,
      r = s ? Math.min(i.shadowSize, 1024) : i.shadowSize,
      l = z.quality !== "custom" && this.input.mobile ? !1 : i.chunkShadows,
      c = z.quality !== "custom" && this.input.mobile ? !1 : i.smoothLighting,
      h = z.quality !== "custom" && this.input.mobile,
      d = h ? Math.min(i.textureSize, 64) : i.textureSize,
      u = h ? Math.min(i.modelDetail, 1) : i.modelDetail,
      f = h ? Math.min(i.environmentDetail, 1) : i.environmentDetail;
    ((this.basePixelRatio = a),
      (this.adaptiveScale = 1),
      this.applyPixelRatio(),
      (this.renderer.shadowMap.enabled = r > 0),
      this.sky.applyShadows(r),
      (this.world.renderDist = o),
      this.world.setChunkShadows(l),
      this.world.smoothLighting !== c &&
        ((this.world.smoothLighting = c), this.world.remeshAll()),
      this.world.fancyLeaves !== i.fancyLeaves &&
        ((this.world.fancyLeaves = i.fancyLeaves),
        this.atlas.setFancyLeaves(i.fancyLeaves),
        this.world.remeshAll()),
      this.atlas.resolution !== d &&
        (this.atlas.setResolution(d), V.refreshItemIcons()),
      (this.bots.allowLod = this.vehicles.allowLod =
        this.input.mobile || u === 0),
      n4() !== u &&
        (VT(u),
        GV(),
        this.weapons.rebuildViewModel(),
        this.vehicles.rebuildModels()),
      this.world.setWaterQuality(i.waterQuality),
      this.celestialDetail !== i.celestialDetail &&
        ((this.celestialDetail = i.celestialDetail),
        this.sky.setCelestialDetail(i.celestialDetail)),
      this.sky.setSunShafts(i.sunShafts),
      this.sky.setClouds(i.clouds),
      this.sky.setCloudRange(o * 16 + 112),
      this.shaders.configure(e ? 0 : z.shaders, {
        msaa: i.antialias,
        clouds: i.clouds,
      }),
      this.world.refreshMaterials());
    const p = document.getElementById("gshadersnote");
    (p &&
      !this.shaders.supported &&
      ((p.dataset.i18n = "shadersUnsupported"),
      (p.textContent = U("shadersUnsupported"))),
      this.sky.setPhysical(null, !1),
      (this.effects.particleScale = i.particles),
      this.effects.setLightBudget(
        i.particles <= 0 ? 0 : i.particles < 0.9 ? 2 : 4,
      ),
      Lf(this.scene).setBudget(
        i.particles <= 0 ? 1 : i.particles < 0.9 ? 2 : 3,
      ),
      (S = this.weather) == null || S.setParticleScale(i.particles),
      this.worldSites.setQuality(f),
      this.world.setEnvironmentDetail(f),
      this.world.setWindSway(z.windSway),
      (M = this.autumn) == null ||
        M.setOptions({
          fallingLeaves: z.fallingLeaves,
          screamers: z.screamers,
          particles: i.particles,
        }),
      (x = this.autumn) == null ||
        x.setPixelScale(this.renderer.domElement.height),
      this.environment.setDetail(f));
    const m = o * 16,
      y = this.scene.fog,
      g = i.fog && !this.vehicles.airborneFixedWing;
    ((y.near = g ? m * o8(m) : 9999),
      (y.far = g ? m * s8 : 1e4),
      this.scene.traverse((T) => {
        const A = T;
        if (A.material) {
          const _ = Array.isArray(A.material) ? A.material : [A.material];
          for (const C of _) C.needsUpdate = !0;
        }
      }));
  }
  handItem() {
    const e = this.inventory.held();
    return this.vehicles.driving() &&
      !this.vehicles.passengerCanShoot() &&
      (!this.vehicles.passengerCanRepair() || Cn[e])
      ? 0
      : e;
  }
  sendPlayerState() {
    var i;
    if (!this.inventoryReady || !this.net.connected) return;
    const e = this.vehicles.driving(),
      t = (!e || this.vehicles.passengerCanShoot()) && this.weapons.adsT > 0.45;
    (this.net.send(
      new Xe(ue.C_MOVE)
        .f32(this.player.pos.x)
        .f32(this.player.pos.y)
        .f32(this.player.pos.z)
        .f32(e ? this.vehicles.camYaw : this.player.yaw)
        .f32(e ? this.vehicles.camPitch : this.player.pitch)
        .u16(
          e && !this.vehicles.passengerCanRepair() ? 0 : this.inventory.held(),
        )
        .u8(
          (this.player.onGround ? 1 : 0) |
            (this.player.prone ? 4 : 0) |
            (this.player.parachute ? 8 : 0) |
            (this.player.crouching ? 16 : 0) |
            (t ? 32 : 0) |
            ((i = this.flashlight) != null && i.active ? 64 : 0),
        )
        .u8(this.player.crawlingFast ? 1 : 0)
        .u32(this.movementEpoch)
        .u32(this.positionRevision),
    ),
      (this.moveTimer = 0));
  }
  syncHeld(e = !1) {
    var o, a;
    const t = this.handItem(),
      i = this.vehicles.driving() && !this.vehicles.passengerCanShoot();
    ((e || t !== this.weapons.held) && this.input.clearMobileAim(),
      this.weapons.setHandsAllowed(!i));
    const s = t !== this.weapons.held;
    (this.weapons.select(t, 0, this.inventory.sel, e),
      s && this.sendPlayerState(),
      this.weapons.setCosmetic(
        (o = this.inventory.hotbar[this.inventory.sel]) == null
          ? void 0
          : o.cosmetic,
        ((a = this.ownAppearance) == null ? void 0 : a.owner) ??
          (Me == null ? void 0 : Me.id) ??
          z.nick,
      ),
      this.inventoryReady &&
        (e || this.lastCosmeticSlot !== this.inventory.sel) &&
        ((this.lastCosmeticSlot = this.inventory.sel), this.sendCosmetics(!1)));
  }
  sendCosmetics(e) {
    const t = {
        character: Ot.character,
        custom: Ot.character === "custom" ? Ot.custom : null,
        weapons: Ot.weapons,
        refresh: e,
      },
      i = JSON.stringify([t.character, t.custom, t.weapons]),
      s = new Xe(ue.C_COSMETICS).u8(this.inventory.sel);
    ((e || i !== this.lastCosmeticLooks) && s.str(JSON.stringify(t)),
      (this.lastCosmeticLooks = i),
      this.net.send(s));
  }
  battleSees(e, t, i, s, o, a) {
    const r = this.sightCache.get(e);
    if (r && a < r.until) return r.seen;
    const l = this.camera.getWorldPosition(this.sightEye),
      c = o.some((h) => this.world.sightClear(l.x, l.y, l.z, t, i + h, s));
    return (
      this.sightCache.set(e, { until: a + 140 + Math.random() * 80, seen: c }),
      c
    );
  }
  applyBattleSight(e) {
    if (!this.front.active || !this.front.team) {
      this.sightCache.size && this.sightCache.clear();
      return;
    }
    const t = this.front.team;
    (this.bots.hideLabelsUnless((i, s) => {
      const o = this.front.botTeams.get(i);
      return (
        !o || o === t || this.battleSees(`b${i}`, s.x, s.y, s.z, [1.55, 0.9], e)
      );
    }),
      this.remotes.hideTagsUnless(
        (i, s) =>
          !this.front.isEnemyPlayer(i) ||
          this.battleSees(`p${i}`, s.x, s.y, s.z, [1.55, 0.9], e),
      ),
      this.vehicles.hideEnemyPlatesUnless((i) =>
        this.battleSees(`v${i.id}`, i.pos.x, i.pos.y, i.pos.z, [1.2, 2.4], e),
      ),
      this.sightCache.size > 400 && this.sightCache.clear());
  }
  battleSeen(e, t, i, s, o, a) {
    const r = this.camera.position;
    return (t - r.x) ** 2 + (s - r.z) ** 2 > 32400
      ? !1
      : this.battleSees(e, t, i, s, o, a);
  }
  sendInventory() {
    if (!this.inventoryReady) return;
    const e = this.inventory.serialize(),
      t = new Xe(ue.C_INV_SAVE);
    t.u8(e.length / 5);
    for (let o = 0; o < e.length; o += 5)
      t.u16(e[o])
        .u16(e[o + 1])
        .u16(e[o + 2])
        .u16(e[o + 3])
        .u16(e[o + 4]);
    const [i, s] = Kse(this.inventory.updatedAt);
    (t
      .u32(i)
      .u32(s)
      .u32(this.shopInventoryRevision)
      .str(
        JSON.stringify(
          [
            ...this.inventory.hotbar,
            ...this.inventory.storage,
            ...this.inventory.armor,
          ].map((o) => {
            var a;
            return o.id && o.count
              ? (((a = o.cosmetic) == null ? void 0 : a.uid) ?? null)
              : null;
          }),
        ),
      ),
      t.u32(++this.invSeq),
      this.net.send(t),
      this.refreshSelfArmor());
  }
  refreshSelfArmor() {
    var e;
    (V.invOpen && V.onInventoryPreview(!0),
      this.selfBody &&
        (this.ownAppearance &&
          Wl(
            this.selfBody.group,
            this.ownAppearance.character,
            this.ownAppearance.custom,
          ),
        ih(
          this.selfBody.armorRoot,
          this.selfBody.head,
          this.selfBody.legL,
          this.selfBody.legR,
          this.inventory.equippedIds(),
          sr(this.inventory.armor[0]),
          ((e = this.ownAppearance) == null ? void 0 : e.armor) ?? {},
        )));
  }
  shareWaypoint() {
    if (!this.running || !Po(z.nick)) return;
    const e = V.getWaypoint();
    this.net.send(
      new Xe(ue.C_SQUAD).str(
        JSON.stringify({
          action: "waypoint",
          point: e ? { ...e, planet: this.currentPlanet } : null,
        }),
      ),
    );
  }
  renderTab() {
    V.setTab(
      this.lastTab.map((e) => ({
        id: e.id,
        name: e.name,
        ping: e.ping,
        balance: e.balance,
        rank: r$(e.xp),
        xp: e.xp,
        self: e.id === this.myId,
        friend: this.friends.has(e.name),
        squad: Xa(e.name),
      })),
    );
  }
  viewHeading() {
    const e = this.camera.getWorldDirection(this.tmpV);
    return Math.atan2(-e.x, -e.z);
  }
  navigationPosition() {
    var e;
    return this.remote.viewing >= Cl
      ? (this.bots.getPosition(this.remote.viewing - Cl) ?? this.player.pos)
      : this.remote.viewing >= 0
        ? (((e = this.vehicles.mine) == null ? void 0 : e.pos) ??
          this.player.pos)
        : this.player.pos;
  }
  mapMarkers() {
    var l, c, h, d;
    const e = Date.now();
    for (const [u, f] of this.nuclearStrikes)
      f.expiresAt <= e && this.nuclearStrikes.delete(u);
    const t = this.currentPlanet === Si.EARTH,
      i =
        (l = Po(z.nick)) == null
          ? void 0
          : l.members.find(
              (u) => u.username.toLowerCase() === z.nick.toLowerCase(),
            ),
      s = [
        {
          x: this.player.pos.x,
          z: this.player.pos.z,
          color: i ? W2(i.slot) : "#f3f7ff",
          kind: "player",
          heading: this.viewHeading(),
          label: i ? z.nick : void 0,
        },
      ];
    t &&
      this.homePos &&
      s.push({
        x: this.homePos.x,
        z: this.homePos.z,
        color: "#4aa8ff",
        kind: "home",
      });
    const o = V.getWaypoint();
    o && !Po(z.nick) && s.push({ x: o.x, z: o.z, color: h_, kind: "waypoint" });
    for (const u of pg)
      u.planet === this.currentPlanet &&
        s.push({ ...u, kind: "waypoint", label: u.username });
    if (this.front.active && this.front.state) {
      for (const p of this.front.state.f)
        s.push({
          x: p[4],
          z: p[5],
          color: Rc(p[1], this.front.team),
          kind: "waypoint",
          label: p[0],
        });
      const u = this.front.team || 1,
        f = this.front.state.hq[u - 1];
      s.push({ x: f[0], z: f[1], color: Rc(u, u), kind: "home" });
    }
    const a = performance.now();
    for (const u of this.remotes.mapPlayers()) {
      if (u.planet !== this.currentPlanet) continue;
      if (this.front.active) {
        const y = this.front.isFriendPlayer(u.id);
        if (
          !y &&
          !this.battleSeen(
            `p${u.id}`,
            u.pos.x,
            u.pos.y,
            u.pos.z,
            [1.55, 0.9],
            a,
          )
        )
          continue;
        s.push({
          x: u.pos.x,
          z: u.pos.z,
          color: y ? i8 : "#ff4a4a",
          kind: y ? "friend" : "enemy",
          heading: u.heading,
        });
        continue;
      }
      const f = Xa(u.name);
      if (!f && !u.visible) continue;
      const p = this.friends.has(u.name) || f;
      if (!p && this.remotes.disguiseOf(u.id)) continue;
      const m = f
        ? (c = Po(u.name)) == null
          ? void 0
          : c.members.find(
              (y) => y.username.toLowerCase() === u.name.toLowerCase(),
            )
        : void 0;
      s.push({
        x: u.pos.x,
        z: u.pos.z,
        color: m ? W2(m.slot) : p ? "#4aff6a" : "#ff4a4a",
        kind: f ? "squad" : p ? "friend" : "enemy",
        label: f ? u.name : void 0,
        heading: u.heading,
      });
    }
    const r = new Set();
    for (const u of this.bots.list()) {
      if ((r.add(u.id), u.npc)) {
        s.push({ x: u.pos.x, z: u.pos.z, color: "#ffd44a", kind: "npc" });
        continue;
      }
      if (this.front.active) {
        const y = this.front.botTeams.get(u.id),
          g = !y || y === this.front.team;
        if (
          !g &&
          !this.battleSeen(
            `b${u.id}`,
            u.pos.x,
            u.pos.y,
            u.pos.z,
            [1.55, 0.9],
            a,
          )
        )
          continue;
        s.push({
          x: u.pos.x,
          z: u.pos.z,
          color: g ? i8 : "#ff4a4a",
          kind: g ? "friend" : "enemy",
        });
        continue;
      }
      const f = !u.hostile && Xa(u.ownerName),
        p =
          !u.hostile &&
          (u.ownerName === z.nick || this.friends.has(u.ownerName) || f),
        m = f
          ? (h = Po(u.ownerName)) == null
            ? void 0
            : h.members.find(
                (y) => y.username.toLowerCase() === u.ownerName.toLowerCase(),
              )
          : void 0;
      s.push({
        x: u.pos.x,
        z: u.pos.z,
        color: u.raid ? "#9b2948" : m ? W2(m.slot) : p ? "#4aff6a" : "#ff4a4a",
        kind: p ? "friend" : "enemy",
        label: f ? `${U("militaryBotTag", { name: u.ownerName })}` : void 0,
      });
    }
    if (t && this.raidActive && this.raidZone)
      for (const u of this.bots.raidContacts(
        this.raidZone.x,
        this.raidZone.z,
        this.raidZone.radius,
      ))
        r.has(u.id) ||
          s.push({ x: u.pos.x, z: u.pos.z, color: "#9b2948", kind: "enemy" });
    for (const u of this.vehicles.mapVehicles()) {
      if (this.front.active && !u.spawnOwner) {
        const m = u.army,
          y = !m || m === this.front.team;
        if (!y && !this.battleSeen(`v${u.id}`, u.x, u.y, u.z, [1.2, 2.4], a))
          continue;
        s.push({
          x: u.x,
          z: u.z,
          color: y ? "#68c7ff" : "#ff4a4a",
          kind: "vehicle",
          vehicleType: u.type,
          friendly: y,
        });
        continue;
      }
      const f =
          !!((d = this.claimsUI) != null && d.ownerAllows(u.ownerName)) ||
          Xa(u.ownerName),
        p = u.ownerName === Mo;
      s.push({
        x: u.x,
        z: u.z,
        color: f ? "#68c7ff" : p ? "#9b2948" : "#ff4a4a",
        kind: "vehicle",
        vehicleType: u.type,
        friendly: f,
      });
    }
    if (t)
      for (const u of this.nuclearStrikes.values())
        s.push({
          x: u.x,
          z: u.z,
          radius: u.radius,
          color: "#ffd33d",
          kind: "strike",
        });
    return s;
  }
  openWorldMap() {
    V.mapOpen ||
      V.openWorldMap(
        (e, t, i) => this.world.surfaceColor(e, t, i),
        this.navigationPosition(),
        () => this.mapMarkers(),
      );
  }
  openHimarsMap() {
    const e = this.vehicles.mine;
    if (!e || V.mapOpen) return;
    const t = e.type === P.MORTAR,
      i = e.type === P.TANK;
    if (t && e.carrierReadyAt > Date.now()) {
      V.addChat(
        2,
        U("vehMortarInfo", {
          seconds: Math.ceil((e.carrierReadyAt - Date.now()) / 1e3),
        }),
      );
      return;
    }
    const s = i ? x2 : t ? Hd : nr;
    (V.openHimarsMap(
      (o, a, r) => this.world.surfaceColor(o, a, r),
      { x: e.pos.x, z: e.pos.z },
      (o, a) => {
        const r = o - e.pos.x,
          l = a - e.pos.z;
        if (r * r + l * l > s * s) return;
        const c = this.world.groundAt(o, a, 120),
          h = new k(o, c === -1 / 0 ? e.pos.y : c, a);
        i
          ? this.vehicles.tankStrike(h)
          : t
            ? this.vehicles.mortarStrike(h)
            : this.vehicles.himarsStrike(h);
      },
      () => this.mapMarkers(),
      t,
      i,
    ),
      this.input.unlock());
  }
  openCarrierMap() {
    const e = this.vehicles.mine;
    !e ||
      V.mapOpen ||
      (V.openCarrierMap(
        (t, i, s) => this.world.surfaceColor(t, i, s),
        { x: e.pos.x, z: e.pos.z },
        (t, i) => {
          const s = t - e.pos.x,
            o = i - e.pos.z;
          if (s * s + o * o > 2800 * 2800) return;
          const a = this.world.groundAt(t, i, 120);
          this.vehicles.carrierStrike(new k(t, a === -1 / 0 ? e.pos.y : a, i));
        },
        () => this.mapMarkers(),
      ),
      this.input.unlock());
  }
  openNuclearMap() {
    const e = this.vehicles.mine;
    !e ||
      e.type !== P.SUBMARINE ||
      V.mapOpen ||
      (V.openNuclearMap(
        (t, i, s) => this.world.surfaceColor(t, i, s),
        { x: e.pos.x, z: e.pos.z },
        (t, i) => {
          const s = t - e.pos.x,
            o = i - e.pos.z;
          if (s * s + o * o > Qh * Qh) return;
          const a = this.world.groundAt(t, i, 120);
          this.vehicles.nuclearStrike(new k(t, a === -1 / 0 ? e.pos.y : a, i));
        },
        () => this.mapMarkers(),
      ),
      this.input.unlock());
  }
  onDeath() {
    var e;
    if (
      ((this.player.alive = !1),
      (this.deathCamT = 0),
      (this.deathCamRoll =
        (Math.random() < 0.5 ? -1 : 1) * (1.05 + Math.random() * 0.35)),
      (this.player.downed = !1),
      this.reviveUI.wounded.delete(this.myId),
      (this.lastDeathPos = this.player.pos.clone()),
      (e = this.front) != null && e.active)
    ) {
      ((this.deathTimer = 0), this.front.onLocalDeath());
      return;
    }
    if (this.keepInventory) {
      (V.showDeath(!0, !0), (this.deathTimer = 3), this.input.unlock());
      return;
    }
    (this.inventory.clearAll(),
      (this.player.maxHp = Vf),
      (this.player.hp = 0),
      V.setHP(0, Vf),
      V.renderHotbar(),
      V.invOpen && V.openInventory(),
      this.syncHeld(),
      V.showDeath(!0),
      (this.deathTimer = 3),
      this.input.unlock());
  }
  tick(e, t, i = e) {
    var ve,
      Y,
      ge,
      Le,
      Oe,
      Ve,
      Qe,
      Je,
      Z,
      W,
      ke,
      Ue,
      je,
      Ge,
      Mt,
      ht,
      lt,
      B,
      $,
      he,
      fe,
      be,
      Se,
      et,
      Ze,
      ct,
      ae,
      qe,
      Ae,
      K,
      te,
      me,
      xe,
      nt,
      ne,
      Ee,
      at,
      st,
      Ut,
      xi,
      ri,
      vt,
      rt,
      Tt,
      Yt,
      jt,
      St,
      li,
      si,
      on;
    if (
      ((this.militaryMedkitCd = Math.max(0, this.militaryMedkitCd - i)),
      this.remote.tick(),
      this.remote.blocking &&
        document.pointerLockElement &&
        document.exitPointerLock(),
      !this.timeFrozen)
    ) {
      const Ke = this.timeDrift * Math.min(1, e / 4);
      ((this.timeDrift -= Ke),
        (this.timeOfDay =
          (((this.timeOfDay + e * 20 * kH(this.timeOfDay) + Ke) % Qa) + Qa) %
          Qa));
    }
    const s = V.anyOpen() || this.remote.blocking;
    this.input.uiOpen = s;
    const o = this.reviveUI.update(
        e,
        this.myId,
        this.player,
        this.input,
        this.world,
        this.renderer.domElement,
        this.sfx,
        (Ke) => this.net.send(new Xe(ue.C_REVIVE).u16(Ke)),
        s ||
          !!this.vehicles.mine ||
          this.remote.open ||
          !(this.input.locked || this.input.mobile),
      ),
      a =
        (this.input.locked || this.input.mobile) &&
        !s &&
        this.player.alive &&
        this.player.downed,
      r =
        (this.input.locked || this.input.mobile) &&
        !s &&
        this.player.alive &&
        !this.player.downed &&
        !o &&
        (!this.remote.open || !!this.vehicles.mine);
    (r || (this.medkitChannel = 0),
      this.player.downed && (this.weapons.reloadT = -1),
      a &&
        (this.player.look(this.input.mdx, this.input.mdy, z.sensitivity),
        (this.medkitChannel = 0),
        (this.bandageChannel = 0),
        (this.mining = null)));
    const l = this.vehicles.driving();
    (this.vision.setCockpitNightVision(
      this.player.alive && this.vehicles.jetSensors,
    ),
      wo(this.inventory.held()) && !l && !s && this.player.alive
        ? (this.blueprintPreview ??
            (this.blueprintPreview = new pG(this.scene)),
          this.blueprintPreview.update(
            this.inventory.held(),
            this.blueprintSite(
              this.player.eyePos(this.tmpV),
              this.player.lookDir(this.tmpV2),
            ),
            this.yawFacing(),
            (Ke, ot, q) =>
              this.world.chunks.has(
                `${Math.floor(Ke / 16)},${Math.floor(q / 16)}`,
              )
                ? this.world.getBlock(Ke, ot, q)
                : -1,
            z.language === "en",
          ))
        : (ve = this.blueprintPreview) == null || ve.hide(),
      (this.world.previewChunks =
        (Y = this.blueprintPreview) == null ? void 0 : Y.chunks));
    const c = this.remote.viewing - Cl,
      h = c >= 0 ? this.bots.getPosition(c) : void 0,
      d = h ? { id: c, pos: h } : void 0,
      u =
        (d == null ? void 0 : d.pos) ??
        (this.remote.viewing >= 0
          ? (((ge = this.vehicles.mine) == null ? void 0 : ge.pos) ??
            this.player.pos)
          : this.player.pos);
    if (
      (d &&
        !s &&
        (this.input.locked || this.input.mobile) &&
        ((this.soldierYaw -= this.input.mdx * 0.0022),
        (this.soldierPitch = Ne(
          this.soldierPitch - this.input.mdy * 0.0022,
          -1.55,
          1.55,
        )),
        this.remote.manual &&
          t - this.soldierInputAt >= 50 &&
          ((this.soldierInputAt = t),
          this.net.send(
            new Xe(ue.C_REMOTE)
              .u8(12)
              .f32(
                Number(this.input.action("forward")) -
                  Number(this.input.action("back")),
              )
              .f32(
                Number(this.input.action("right")) -
                  Number(this.input.action("left")),
              )
              .f32(this.soldierYaw)
              .f32(this.soldierPitch)
              .u8(this.input.mouseL ? 1 : 0)
              .u8(this.input.action("jump") ? 1 : 0)
              .u8(this.input.action("crouch") ? 1 : 0),
          )),
        this.input.actionPressed("use") &&
          this.net.send(new Xe(ue.C_REMOTE).u8(8))),
      this.input.mobile)
    ) {
      const Ke = this.inventory.held();
      this.toolModes.updateButton(Ke);
      const ot = !!Cn[Ke];
      this.input.setLookMine(r && !l && !ot);
      const q = this.player.eyePos(this.tmpV),
        ye = this.player.lookDir(this.tmpV2),
        Ie = this.world.raycast(q, ye, 5.5),
        He = this.backpacks.raycastHit(q, ye, 5.5),
        Te = !!this.vehicles.nearestFree(this.player.pos, 5),
        ft =
          !!this.worldSites.nearestCommand(this.player.pos, 5.5) ||
          !!this.worldSites.nearestFlag(this.player.pos, 6) ||
          !!this.worldSites.nearestVillage(this.player.pos, 5.5),
        Pt =
          !!((Le = this.casino) != null && Le.target(q, ye)) ||
          !!((Oe = this.casino) != null && Oe.blackjack.target(q, ye)) ||
          !!((Ve = this.computer) != null && Ve.target(q, ye)),
        Gt =
          Pt ||
          l ||
          this.player.seated ||
          (Ke > 0 && !ot) ||
          Te ||
          ft ||
          !!He ||
          !!(Ie && (Qe = de[Ie.block]) != null && Qe.interactive),
        Rt = P,
        Wt = this.vehicles.mine,
        ei = Wt == null ? void 0 : Wt.type,
        ti = l && this.vehicles.mineSeat > 0;
      let Ni = !l,
        yn = !1,
        Kn = !1,
        Yn = !1,
        dn = !1,
        ii = !s && !l,
        jn = !s && !l,
        un = !1,
        Zn = "fist",
        ga = "missile",
        Ws = !1;
      const ic = !l || this.vehicles.passengerCanShoot();
      if (ti) {
        const sc = this.vehicles.passengerCanRepair() && Ke === E.WELDER;
        ((Ni =
          this.vehicles.passengerCanShoot() ||
          sc ||
          !!this.vehicles.mySeatGun()),
          (Zn = sc ? "hammer" : "bullet"),
          (Yn = !0));
      } else if (l)
        switch (ei) {
          case Rt.HELI:
            ((Ni = !0),
              (Zn = "bullet"),
              (yn = !0),
              (ga = "missile"),
              (ii = !0),
              (jn = !0),
              (Yn = !0),
              (dn = this.vehicles.canToggleCargo()));
            break;
          case Rt.DRONE:
            ((Ni = !0), (Zn = "detonate"), (ii = !0), (jn = !0));
            break;
          case Rt.FIGHTER_JET:
            ((Ni = !0),
              (Zn = "bullet"),
              (yn = !0),
              (ga = "missile"),
              (Yn = !0),
              (jn = !0));
            break;
          case Rt.PLANE:
            ((jn = !0),
              (Ni = !0),
              (Zn = "bullet"),
              (Kn = !!Wt && !Wt.grounded),
              (Yn = !0),
              (Ws = !!Wt && !Wt.grounded));
            break;
          case Rt.MORTAR:
          case Rt.HIMARS:
            ((Ni = !0), (Zn = "map-target"), (Yn = !0));
            break;
          case Rt.CARRIER:
            ((Ni = !0),
              (Zn = "bullet"),
              (yn = !!Wt && Wt.fireCd2 <= 0),
              (ga = "strike"),
              (Yn = !0));
            break;
          case Rt.SUBMARINE:
            ((Ni = !1),
              (yn = !!Wt && Wt.fireCd2 <= 0),
              (ga = "strike"),
              (ii = !0),
              (jn = !0),
              (Yn = !0));
            break;
          case Rt.SPACE_ROCKET:
            ((Ni = !1), (ii = !0), (jn = !0), (Yn = !0));
            break;
          default:
            ((Ni = !0), (Zn = "bullet"), (Yn = !0));
            break;
        }
      else
        (ot
          ? (Zn = "bullet")
          : Ie && ((Je = de[Ie.block]) == null ? void 0 : Je.hardness) >= 0
            ? (Zn = "pickaxe")
            : (Zn = "fist"),
          (un =
            !s &&
            !this.player.onGround &&
            (this.player.canDeployChute() ||
              this.player.parachute ||
              this.input.chuteHeld)),
          (Yn = !this.front.active || this.thirdPerson));
      let vn = "exit",
        Yo = !1;
      !l &&
        !this.player.seated &&
        !this.mounted &&
        ((Yo = !0),
        Ke === E.FISHING_ROD
          ? ((vn = "cast"), (Yo = !1))
          : this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet)
            ? (vn = "teleport")
            : Pt
              ? (vn = "hand")
              : He || (Ie && (Bx(Ie.block) || Ie.block === v.FURNACE))
                ? (vn = "open")
                : Ie && (Z = de[Ie.block]) != null && Z.interactive
                  ? (vn = "hand")
                  : (W = this.worldSites.nearestFlag(this.player.pos, 6)) !=
                        null && W.supplyReady
                    ? (vn = "supply")
                    : Te
                      ? (vn = "enter")
                      : ft
                        ? (vn = "hand")
                        : ((Yo = !1),
                          (vn =
                            (Ke > 0 && Ke < 256) ||
                            Ke === E.COMPUTER ||
                            wo(Ke) ||
                            Tl(Ke) ||
                            xa(Ke)
                              ? "place"
                              : j0[Ke]
                                ? "eat"
                                : Ke === E.MEDKIT ||
                                    Ke === E.MILITARY_MEDKIT ||
                                    Ke === E.BANDAGE
                                  ? "heal"
                                  : Fc(Ke)
                                    ? "equip"
                                    : "hand")));
      const lh =
          (l &&
            (ei === Rt.FIGHTER_JET ||
              ei === Rt.PLANE ||
              ei === Rt.HELI ||
              ei === Rt.DRONE ||
              ei === Rt.SUBMARINE ||
              ei === Rt.SPACE_ROCKET)) ||
          (!l &&
            ((this.player.flying && !this.player.onGround) ||
              this.player.inWater)),
        Vs = sr(this.inventory.armor[0]),
        Tu =
          ((ke = this.inventory.armor[0]) == null
            ? void 0
            : ke.suppressorDurability) ?? Da(Vs),
        Zy = this.vehicles.jetSensors || (Vs > 0 && Tu > 0);
      this.mobCrouchBtnEl === void 0 &&
        (this.mobCrouchBtnEl = document.getElementById("mobcrouch"));
      const nc = this.mobCrouchBtnEl;
      if (nc) {
        const sc = lh ? "false" : "true";
        (nc.dataset.mobileToggle !== sc &&
          ((nc.dataset.mobileToggle = sc),
          this.input.releaseMobileHold("crouch", "mobcrouch")),
          lh ||
            (!this.player.alive || this.player.downed
              ? this.input.releaseMobileHold("crouch", "mobcrouch")
              : nc.classList.contains("active") !== this.player.crouching &&
                nc.classList.toggle("active", this.player.crouching)));
      }
      this.mobProneBtnEl === void 0 &&
        (this.mobProneBtnEl = document.getElementById("mobprone"));
      const $4 = this.player.prone && !this.player.downed && !l;
      this.mobProneBtnEl &&
        this.mobProneBtnEl.classList.contains("active") !== $4 &&
        this.mobProneBtnEl.classList.toggle("active", $4);
      const Qy = l && (ei === Rt.PLANE || ei === Rt.FIGHTER_JET),
        Jy = document.getElementById("mobsprint");
      if (Jy) {
        const sc = Qy ? "false" : "true";
        Jy.dataset.mobileToggle !== sc &&
          ((Jy.dataset.mobileToggle = sc),
          this.input.releaseMobileHold("sprint", "mobsprint"));
      }
      const Au = this.front.active,
        ch = this.player.downed;
      (V.setMobileActions({
        toolmode:
          !Au && r && !l && !this.remote.open && this.toolModes.supports(Ke),
        fire: Ni && !ch,
        aim:
          !ch &&
          ((ot && ic) ||
            Ws ||
            (l &&
              Ea.zoomLevels(ei ?? -1, this.vehicles.mineSeat).length > 1 &&
              (this.vehicles.mineSeat === 0 || this.vehicles.camMode === 0))),
        reload: ot && ic && !ch,
        use: Gt && !ch,
        jump: ii && !ch,
        sprint: !s && (!l || ei === Rt.PLANE || ei === Rt.FIGHTER_JET),
        prone: !s && !l && !ch,
        crouch: jn && !ch,
        map: !s,
        inventory: !s && !Au,
        shop: !s && !Au,
        chat:
          !s ||
          V.chatOpen ||
          ((Ue = this.casino) == null ? void 0 : Ue.blackjack.open),
        settings: !s,
        tab: !s || V.tabOpen || (Au && this.front.boardIsOpen),
        rocket: yn,
        bomb: Kn,
        camera: Yn,
        driver: !s && this.vehicles.canTakeDriver(),
        cargo: dn,
        chute: un,
        vision: !s && Zy,
        flashlight:
          !s &&
          this.player.alive &&
          ic &&
          !this.vehicles.remoteView &&
          this.hasFlashlight(Ke),
        headlights: !Au && !s && this.player.alive && !!Wt && Lm(Wt.type),
      }),
        V.setMobileLightState(
          "flashlight",
          !!z.lightOn[this.flashlightKey(Ke)],
        ),
        V.setMobileLightState(
          "headlights",
          !!Wt && this.vehicles.headlightsOn(Wt),
        ),
        V.setMobileIcon("mobfire", Zn),
        V.setMobileIcon("mobaim", Ws ? "bomb-view" : "aim"));
      const q4 = Ke === E.MOBILE_REMOTE && (!l || ti) && !this.remote.open,
        K4 = Ke === E.WELDER && !l;
      (V.setMobileIcon("mobuse", q4 ? "station" : K4 ? "welder" : vn),
        V.setMobileCue("mobuse", { ready: Yo && !q4 && !K4 }));
      const rP =
        l ||
        (this.player.flying && !this.player.onGround) ||
        this.player.inWater;
      (V.setMobileIcon("mobjump", rP ? "ascend" : "jump"),
        V.setMobileIcon(
          "mobcrouch",
          Qy ? "pitch-up" : lh ? "descend" : "crouch",
        ),
        V.setMobileIcon("mobsprint", Qy ? "pitch-down" : "sprint"),
        V.setMobileIcon("mobrocket", ga));
      const m1 = yn && Wt ? Wt.fireCd2 : 0;
      ((this.mobRocketCdMax = m1 > 0 ? Math.max(this.mobRocketCdMax, m1) : 0),
        V.setMobileCue("mobrocket", {
          progress: m1 > 0 ? 1 - m1 / this.mobRocketCdMax : -1,
        }));
      const ev =
        l && !ti && Wt && Ni
          ? Wt.fireCd
          : ti && Ni
            ? (((je = this.vehicles.seatSight()) == null
                ? void 0
                : je.cooling) ?? 0)
            : 0;
      ((this.mobFireCdMax = ev > 0 ? Math.max(this.mobFireCdMax, ev) : 0),
        V.setMobileCue("mobfire", {
          progress: this.mobFireCdMax >= 0.8 ? 1 - ev / this.mobFireCdMax : -1,
        }));
      const hh = ot && ic ? this.weapons.magState() : null;
      (V.setMobileCue("mobreload", {
        progress: (hh == null ? void 0 : hh.reloading) ?? -1,
        attention:
          !!hh && hh.reloading < 0 && hh.rounds === 0 && hh.reserve > 0,
      }),
        V.setMobileIcon(
          "mobvision",
          !this.vehicles.jetSensors && Vs === E.THERMAL_GOGGLES
            ? "thermal"
            : "night-vision",
        ),
        this.mobChuteBtnEl === void 0 &&
          (this.mobChuteBtnEl = document.getElementById("mobchute")));
      const Y4 = this.mobChuteBtnEl;
      (Y4 && Y4.classList.toggle("active", this.input.chuteHeld),
        this.mobVisionBtnEl === void 0 &&
          (this.mobVisionBtnEl = document.getElementById("mobvision")));
      const tv = this.mobVisionBtnEl;
      tv &&
        (tv.classList.toggle("active", this.vision.mode !== "off"),
        tv.classList.toggle(
          "thermal",
          !this.vehicles.jetSensors && Vs === E.THERMAL_GOGGLES,
        ));
    }
    if (
      (l !== this.prevDriving && ((this.prevDriving = l), this.syncHeld()),
      V.chatOpen && this.input.actionPressed("chat"))
    )
      V.closeChat();
    else if (
      (Ge = this.casino) != null &&
      Ge.blackjack.open &&
      this.input.actionPressed("chat")
    )
      (V.openChat(""), this.input.unlockForUi());
    else if (a)
      this.input.actionPressed("chat") ||
      this.input.pressed.has("Enter") ||
      this.input.pressed.has("Slash")
        ? (V.openChat(this.input.pressed.has("Slash") ? "/" : ""),
          this.input.unlock())
        : this.input.actionPressed("inventory") &&
          (V.openInventory(), this.input.unlock());
    else if (r) {
      if (this.input.actionPressed("vision")) {
        const ot = sr(this.inventory.armor[0]);
        (this.vision.sync(
          ot,
          ((Mt = this.inventory.armor[0]) == null
            ? void 0
            : Mt.suppressorDurability) ?? Da(ot),
        ),
          this.vision.toggle());
      } else if (this.input.actionPressed("flashlight"))
        this.toggleFlashlight();
      else if (this.input.actionPressed("headlights")) this.toggleHeadlights();
      else if (
        this.input.actionPressed("chat") ||
        this.input.pressed.has("Enter")
      )
        (V.openChat(""), this.input.unlock());
      else if (this.input.pressed.has("Slash"))
        (V.openChat("/"), this.input.unlock());
      else if (
        this.input.actionPressed("inventory") &&
        !(
          l &&
          this.vehicles.mineSeat === 0 &&
          As(((ht = this.vehicles.mine) == null ? void 0 : ht.type) ?? -1) &&
          !this.input.mobile
        )
      )
        (V.openInventory(), this.input.unlock());
      else if (this.input.actionPressed("shop") && !this.front.active)
        (V.openShop(), this.input.unlock());
      else if (this.input.actionPressed("map")) {
        const ot = this.vehicles.mine;
        (l &&
        ((ot == null ? void 0 : ot.type) === P.TANK ||
          (ot == null ? void 0 : ot.type) === P.HIMARS ||
          (ot == null ? void 0 : ot.type) === P.MORTAR)
          ? this.openHimarsMap()
          : l && (ot == null ? void 0 : ot.type) === P.CARRIER
            ? this.openCarrierMap()
            : l && (ot == null ? void 0 : ot.type) === P.SUBMARINE
              ? this.openNuclearMap()
              : this.openWorldMap(),
          this.input.unlock());
      } else if (this.input.actionPressed("cargo")) this.vehicles.toggleCargo();
      else if (this.input.actionPressed("skills")) this.openSkills();
      else if (this.input.actionPressed("use")) {
        if (this.remote.viewing >= 0) this.net.send(new Xe(ue.C_REMOTE).u8(8));
        else if (this.inventory.held() === E.MOBILE_REMOTE)
          this.openMobileStation();
        else if (!(
          this.inventory.held() === E.RADIO_MODULE && this.installRadio()
        ))
          if (l) this.vehicles.requestExit();
          else if (this.player.seated) this.requestChairExit();
          else if (this.mounted)
            this.net.send(new Xe(ue.C_ANIMAL_RIDE).u16(Use));
          else {
            const ot = this.player.eyePos(this.tmpV),
              q = this.player.lookDir(this.tmpV2),
              ye = this.animals.nearestRideable(this.player.pos, 4.2);
            if (
              xa(this.inventory.held()) ||
              this.inventory.held() === E.DETONATOR
            )
              this.input.clickR = !0;
            else if (!(
              (lt = this.operations) != null && lt.interact(this.player.pos)
            )) {
              if (this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet))
                this.requestRandomTeleport();
              else if (!this.trySiteAction()) {
                if (ye) this.net.send(new Xe(ue.C_ANIMAL_RIDE).u16(ye.id));
                else if (!this.tryInteract(ot, q)) {
                  const Ie = this.inventory.held();
                  Wv[Ie] !== void 0 || Ie === E.FISHING_ROD
                    ? (this.input.clickR = !0)
                    : !this.vehicles.tryEnter(this.player.pos) &&
                      !Cn[Ie] &&
                      !this.toolModes.supports(Ie) &&
                      (this.input.clickR = !0);
                }
              }
            }
          }
      } else if (this.input.actionPressed("drop") && !l) {
        const ot = this.inventory.held(),
          q = this.inventory.hotbar[this.inventory.sel],
          ye = (q == null ? void 0 : q.durability) ?? np(ot),
          Ie = (q == null ? void 0 : q.suppressorDurability) ?? Vl(ot),
          He = (q == null ? void 0 : q.magazine) ?? 65535,
          Te = q == null ? void 0 : q.cosmetic;
        let ft = !1;
        (this.inventory.deferChanges(() => {
          ((ft = ot > 0 && this.inventory.consumeHeld()),
            ft &&
              this.net.send(
                new Xe(ue.C_THROW)
                  .u16(ot)
                  .u16(1)
                  .u16(ye)
                  .u16(Ie)
                  .u16(He)
                  .str((Te == null ? void 0 : Te.uid) ?? ""),
              ));
        }),
          ft && (this.syncHeld(), V.renderHotbar()));
      }
      this.input.actionPressed("camera") &&
        !l &&
        (this.player.parachute
          ? (this.parachuteTPV = !this.parachuteTPV)
          : this.thirdPerson
            ? this.frontView
              ? ((this.thirdPerson = !1), (this.frontView = !1))
              : (this.frontView = !0)
            : ((this.thirdPerson = !0), (this.frontView = !1)));
      for (let ot = 0; ot < 9; ot++)
        !this.weapons.ammoPickerOpen &&
          this.input.pressed.has("Digit" + (ot + 1)) &&
          ((this.inventory.sel = ot), this.syncHeld(!0), V.renderHotbar());
      const Ke =
        l &&
        !this.vehicles.remoteView &&
        Ea.zoomLevels(
          ((B = this.vehicles.mine) == null ? void 0 : B.type) ?? -1,
          this.vehicles.mineSeat,
        ).length > 1;
      !this.weapons.ammoPickerOpen &&
        this.input.wheel !== 0 &&
        !Ke &&
        ((this.inventory.sel =
          (((this.inventory.sel + this.input.wheel) % 9) + 9) % 9),
        this.syncHeld(!0),
        V.renderHotbar());
    }
    const f = r && this.input.mobile ? this.touchAimAssist(e, l) : null;
    (r &&
      !l &&
      (this.player.look(
        this.input.mdx,
        this.input.mdy,
        z.sensitivity * this.sensScale,
      ),
      f &&
        ((this.player.yaw += f.yaw),
        (this.player.pitch = Ne(this.player.pitch + f.pitch, -1.55, 1.55)))),
      r &&
        !l &&
        this.player.seated &&
        (this.input.action("forward") ||
          this.input.action("back") ||
          this.input.action("left") ||
          this.input.action("right") ||
          this.input.action("jump") ||
          this.input.action("crouch") ||
          this.input.action("prone")) &&
        this.requestChairExit(),
      this.previousFeet.copy(this.player.pos),
      this.remote.open
        ? this.player.vel.set(0, 0, 0)
        : this.player.update(e, this.input, this.world, (r || a) && !l),
      !l &&
        this.player.alive &&
        this.vehicles.resolvePlayerCollision(
          this.player.pos,
          this.player.vel,
          this.player.w,
          this.player.h,
          this.previousFeet,
        ),
      this.input.mobile &&
        this.input.chuteHeld &&
        !this.player.parachute &&
        (this.player.onGround ||
          this.player.inWater ||
          this.player.vel.y >= -1) &&
        this.input.clearChute());
    const p = this.vehicles.mine;
    if (
      (l &&
        p &&
        p.type !== P.DRONE &&
        !this.remote.open &&
        (this.vehicles.mineSeat > 0 && Ea.hasOpenSeats(p.type)
          ? this.vehicles.seatPos(p, this.vehicles.mineSeat, this.player.pos)
          : this.player.pos.copy(p.pos),
        this.player.vel.set(0, 0, 0)),
      !l && this.player.alive)
    ) {
      const Ke = this.vehicles.standingSurface(
        this.player.pos,
        this.previousFeet,
      );
      if (
        Ke &&
        this.player.vel.y <= 0.01 &&
        this.player.pos.y <= Ke.y + 0.35 &&
        this.previousFeet.y >= Ke.y - 0.18
      ) {
        (this.player.landOn(Ke.y),
          (this.player.pos.x += Ke.vx * e),
          (this.player.pos.z += Ke.vz * e));
        const ot = this.vehicles.standingSurface(
          this.player.pos,
          this.previousFeet,
        );
        ot && this.player.landOn(ot.y);
      }
    }
    const m = (Ke, ot) => this.world.isLoaded(Ke, ot);
    cH(this.camera);
    const y = 1 - this.sky.dayness;
    (this.world.aviationLights.update(e, this.sky.dayness),
      _$(performance.now() / 1e3, this.sky.dayness));
    const g = this.bots.visibleHostileCount(u),
      b = this.vehicles.visibleRaidCount(u),
      S = this.raidActive && g + b >= z.militaryOptimizationThreshold;
    if (
      (r && this.input.actionPressed("driver") && this.vehicles.takeDriver(),
      r && this.input.actionPressed("seat") && this.vehicles.cycleSeat(),
      this.vehicles.update(
        e,
        this.input,
        r && (!this.remote.open || this.vehicles.remoteView),
        this.remote.viewing >= 0
          ? ((($ = this.vehicles.mine) == null ? void 0 : $.pos) ??
              this.player.pos)
          : this.player.pos,
        y,
        m,
        S,
      ),
      l &&
        !this.remote.open &&
        this.vehicles.mine &&
        this.vehicles.mine.type !== P.DRONE &&
        (this.vehicles.mineSeat > 0 && Ea.hasOpenSeats(this.vehicles.mine.type)
          ? this.vehicles.seatPos(
              this.vehicles.mine,
              this.vehicles.mineSeat,
              this.player.pos,
            )
          : this.player.pos.copy(this.vehicles.mine.pos),
        this.player.vel.set(0, 0, 0)),
      this.remote.open && this.vehicles.aboard)
    ) {
      const Ke = this.vehicles.aboard;
      (this.vehicles.aboardSeat > 0 && Ea.hasOpenSeats(Ke.type)
        ? this.vehicles.seatPos(Ke, this.vehicles.aboardSeat, this.player.pos)
        : this.player.pos.copy(Ke.pos),
        this.player.vel.set(0, 0, 0));
    }
    (this.sfx.updateVehicles(
      this.vehicles.vehicles.values(),
      u,
      this.player.yaw,
      this.currentPlanet,
    ),
      (this.corpses.viewer = u),
      this.front.active &&
        ((this.corpses.maxCorpses = 10), (this.corpses.farCull = 90)),
      this.camera.updateMatrixWorld(),
      this.botView.setFromProjectionMatrix(
        this.botViewMatrix.multiplyMatrices(
          this.camera.projectionMatrix,
          this.camera.matrixWorldInverse,
        ),
      ),
      (this.bots.view = this.botView),
      this.bots.update(
        e,
        u,
        this.inventory.creative,
        y,
        (Ke, ot) =>
          m(Ke, ot) ||
          (this.vehicles.jetSensors && Math.hypot(Ke - u.x, ot - u.z) <= Vd),
        S,
      ),
      this.corpses.update(e, u),
      this.bots.setCameraBot((d == null ? void 0 : d.id) ?? -1),
      (he = this.c4) == null || he.update(e, this.currentPlanet),
      (fe = this.eggs) == null || fe.update(e, this.currentPlanet),
      (be = this.knives) == null || be.update(e, this.currentPlanet));
    const M = this.front.active;
    (M ||
      (this.landmarkAtmosphere ??
        (this.landmarkAtmosphere = new QJ(this.scene)),
      this.landmarkAtmosphere.update(
        e,
        this.world.seed,
        u,
        this.currentPlanet === Si.EARTH,
        z.language === "en",
      )),
      (V.mapSeed =
        this.currentPlanet === Si.EARTH && !M ? this.world.seed : null));
    const x = M && !!((Se = Yc(this.front.mapId)) != null && Se.petals);
    ((!M || x) &&
      (this.autumn ||
        ((this.autumn = new hee(
          this.scene,
          this.world,
          this.sfx,
          this.input.mobile,
          () => this.world.seed,
          (Ke) => this.effects.addTrauma(Ke),
        )),
        this.autumn.setOptions({
          fallingLeaves: z.fallingLeaves,
          screamers: z.screamers,
          particles: Ts().particles,
        }),
        this.autumn.setPixelScale(this.renderer.domElement.height)),
      this.autumn.update(e, {
        pos: u,
        camera: this.camera,
        yaw: this.player.yaw,
        dayness: this.sky.dayness,
        earth: this.currentPlanet === Si.EARTH,
        raining:
          (((et = this.weather) == null ? void 0 : et.rainAt(u.x, u.z)) ?? 0) >
          0,
        windX: this.windX,
        windZ: this.windZ,
        alive: this.player.alive,
        leavesOnly: M,
      }),
      M ||
        this.autumn.wendigoPresence(
          e,
          this.animals.wendigosNear(this.player.pos, 40),
          this.player.pos,
          this.player.yaw,
        )),
      M || this.animals.update(e, y, m),
      this.fishing.update(e, (Ke) => {
        if (Ke === this.myId)
          return l ? null : this.weapons.tipWorld(this.tmpFishTip);
        const ot = this.remotes.heldTipWorld(
          Ke,
          this.tmpFishTip,
          this.fishing.tension(Ke),
        );
        if (ot) return ot;
        const q = this.remotes.getPos(Ke);
        return q ? this.tmpFishTip.set(q.x, q.y + 1.35, q.z) : null;
      }),
      this.weapons.rodLine(
        this.fishing.hasLine(this.myId) || this.fishing.landing(this.myId),
        this.fishing.tension(this.myId),
      ),
      this.fishing.landing(this.myId) && this.weapons.spinReel(e * 16),
      this.idleAnimalVoices(e),
      (Ze = this.weather) == null || Ze.update(e, this.player.pos),
      this.environment.update(e, this.player.pos, t),
      this.worldSites.update(e, this.player.pos),
      this.updateDroneSignalAndRange(),
      this.emote &&
        (!this.player.alive ||
          l ||
          this.player.seated ||
          this.player.prone ||
          this.player.crouching ||
          !this.player.onGround ||
          this.player.pos.distanceTo(this.emoteOrigin) > 0.18 ||
          this.input.mouseL ||
          this.input.mouseR ||
          this.input.action("jump") ||
          this.input.action("reload") ||
          t / 1e3 - this.emoteStart >=
            (((ct = ok(this.emote)) == null ? void 0 : ct.duration) ?? 0)) &&
        ((this.emote = 0), this.net.send(new Xe(ue.C_ANIMATION).u8(0).u16(0))));
    const T = l ? (this.vehicles.passengerCanShoot() ? 2 : 1) : 0;
    T !== this.holdPolicy
      ? ((this.holdPolicy = T), this.syncHeld())
      : this.handItem() !== this.weapons.held && this.syncHeld();
    let A = { fovScale: 1, sensScale: 1, scoped: !1, pitchKick: 0, adsT: 0 };
    if (
      !l ||
      this.vehicles.passengerCanShoot() ||
      this.vehicles.passengerCanRepair()
    ) {
      const Ke = this.inventory.held(),
        ot = Math.hypot(this.player.vel.x, this.player.vel.z);
      ((A = this.weapons.update(e, this.input, {
        moving: ot > 0.6,
        onGround: this.player.onGround,
        sprint: this.player.sprinting,
        baseFov: z.fov,
        allowFire:
          r &&
          !this.remote.open &&
          !this.spawnNotice.contains(
            this.player.pos.x,
            this.player.pos.z,
            this.currentPlanet,
          ) &&
          !!Cn[Ke] &&
          (!l || this.vehicles.passengerAimClear()),
        allowReload:
          r &&
          !this.remote.open &&
          !!Cn[Ke] &&
          (!l || this.vehicles.passengerAimClear()),
        onBlockedFire: () => this.spawnNotice.deny("fire", z.language === "en"),
        allowSwing: r && !this.remote.open && !l,
        crouching: this.player.crouching,
        prone: this.player.prone,
      })),
        (this.player.pitch = Ne(this.player.pitch + A.pitchKick, -1.55, 1.55)),
        l &&
          this.vehicles.mySeatGun() &&
          ((A.fovScale = 1), (A.sensScale = 1), (A.scoped = !1), (A.adsT = 0)),
        r && !this.remote.open && this.handleItemActions(e, i));
    } else this.weapons.cancelThrow();
    this.throwGauge.update(this.weapons.throwCharge());
    {
      const Ke =
        this.player.alive && !l
          ? this.projectiles.nearestGrenade(this.camera.position, 9)
          : null;
      this.grenadeWarning.update(
        Ke && Ke.left < 2
          ? {
              dx: Ke.pos.x - this.camera.position.x,
              dz: Ke.pos.z - this.camera.position.z,
              left: Ke.left,
            }
          : null,
        this.player.yaw,
      );
    }
    (performance.now() > this.weldingUntil && this.weapons.setWelding(!1),
      this.welderMenu.update(),
      this.skillsMenu.update(),
      (Xt.enabled =
        !this.inventory.creative && !this.player.flying && this.player.alive),
      Xt.tick(e),
      iA(
        r &&
          !this.player.downed &&
          this.player.alive &&
          (!l || this.vehicles.passengerCanShoot()),
      ),
      (!r ||
        this.player.downed ||
        !this.player.alive ||
        (l && !this.vehicles.passengerCanShoot())) &&
        this.weapons.cancelInspect());
    const _ = this.weapons.inspectTime >= 0;
    (_ !== this.sentInspect ||
      (_ && this.sentInspectSequence !== this.weapons.inspectSequence)) &&
      ((this.sentInspect = _),
      (this.sentInspectSequence = this.weapons.inspectSequence),
      this.net.send(new Xe(ue.C_ANIMATION).u8(4).u16(_ ? 3200 : 0)));
    const C =
      this.weapons.isReloading() && (!l || this.vehicles.passengerCanShoot());
    if (C !== this.sentReload) {
      this.sentReload = C;
      const Ke = Cn[this.inventory.held()];
      this.net.send(
        new Xe(ue.C_ANIMATION)
          .u8(1)
          .u16(C && Ke ? Math.round(Ke.reload * 1e3) : 0),
      );
    }
    if (
      ((this.sensScale = A.sensScale),
      this.minedThisFrame ||
        ((this.mining = null),
        V.setMiningProgress(null),
        this.sfx.drillStop(),
        this.weapons.setMining(!1)),
      (this.minedThisFrame = !1),
      (this.player.downed || o || z.cinematicHud) && this.weapons.hideHeld(),
      (this.downedBlend +=
        ((this.player.downed ? 1 : 0) - this.downedBlend) *
        (1 - Math.exp(-e * 4))),
      (this.tpAim = null),
      !this.player.alive && this.deathCamT >= 0 && !l)
    ) {
      this.deathCamT += e;
      const Ke = Math.min(1, this.deathCamT / 0.85),
        ot = Ke * Ke * (3 - 2 * Ke),
        q = Math.min(1, this.deathCamT / 1.6),
        ye = 1.62 - (this.downedBlend > 0.5 ? 0.9 : 0);
      (this.camera.position
        .copy(this.player.pos)
        .add(
          this.tmpV.set(
            0,
            Math.max(0.28, ye - (ye - 0.28) * ot) +
              Math.sin(Math.min(1, this.deathCamT / 0.95) * Math.PI) * 0.04,
            0,
          ),
        ),
        this.camera.rotation.set(
          this.player.pitch + (0.35 - this.player.pitch) * q * 0.6,
          this.player.yaw,
          this.deathCamRoll * ot,
          "YXZ",
        ),
        this.weapons.hideHeld());
    } else if (
      this.player.alive &&
      (this.player.downed || this.downedBlend > 0.01)
    )
      (this.camera.position
        .copy(this.player.pos)
        .add(new k(0, 1.62 - 1.2 * this.downedBlend, 0)),
        this.camera.rotation.set(
          this.player.pitch,
          this.player.yaw,
          0.2 * this.downedBlend,
          "YXZ",
        ));
    else if (d)
      (this.camera.position.copy(d.pos).add(new k(0, BJ, 0)),
        this.camera.rotation.set(this.soldierPitch, this.soldierYaw, 0, "YXZ"));
    else if (l && this.vehicles.cameraPose(this.camPose, e))
      (this.camera.position.copy(this.camPose.pos),
        this.camera.quaternion.copy(this.camPose.quat));
    else if (
      (this.player.parachute && this.parachuteTPV) ||
      this.thirdPerson ||
      this.emote
    )
      this.updateBodyCamera(e);
    else {
      ((this.footCameraDistance = 0), this.player.eyePos(this.camera.position));
      const Ke = this.player.parachute
        ? this.chuteBank * 0.07 + Math.sin((t / 1e3) * 1.1) * 0.018
        : 0;
      (this.camera.rotation.set(this.player.pitch, this.player.yaw, Ke),
        this.applyCameraBob(e, A.fovScale < 0.999));
    }
    const R = this.effects.getShake(this.tmpV);
    (this.camera.position.add(this.tmpV),
      this.camera.rotateZ((Math.random() - 0.5) * R));
    const L = this.player.sprinting && !l ? 1.05 : 1,
      N = l ? this.vehicles.sightZoom() : 1,
      D = (z.fov * A.fovScale * L) / N;
    (Math.abs(this.camera.fov - D) > 0.05 &&
      ((this.camera.fov = Qi(this.camera.fov, D, 1 - Math.exp(-14 * e))),
      this.camera.updateProjectionMatrix()),
      V.setScope(A.scoped));
    const H = l ? this.vehicles.sightInfo() : null;
    this.gunnerSight ?? (this.gunnerSight = new dJ());
    const G = (ae = this.vehicles.mine) == null ? void 0 : ae.type,
      I =
        l &&
        this.vehicles.mineSeat === 0 &&
        (G === P.TANK || G === P.BTR_TURRET) &&
        !this.vehicles.remoteView,
      O = l && !this.vehicles.remoteView && !!this.vehicles.mySeatGun(),
      F =
        I && this.vehicles.gunAimPoint(this.tmpGunPoint)
          ? this.tmpGunPoint
          : O && this.vehicles.seatGunAimPoint(this.tmpGunPoint)
            ? this.tmpGunPoint
            : null;
    H
      ? this.gunnerSight.update(
          H,
          this.camera,
          F,
          null,
          this.input.mobile,
          H.kind === "mg" &&
            ((qe = this.vehicles.seatSight()) == null ? void 0 : qe.arc) === !1,
        )
      : F
        ? this.gunnerSight.marker(this.camera, F)
        : this.gunnerSight.hide();
    const X = So(this.inventory.held()).scope === 5 && A.adsT > 0.35;
    (V.setCrosshair(!A.scoped && !H && !X),
      So(this.inventory.held()).scope === 5 && A.adsT > 0.55
        ? V.setHoloRange(this.aimedDistance())
        : V.setHoloRange(null));
    {
      let Ke = this.player.vel.x,
        ot = this.player.vel.z;
      const q = this.vehicles.mine;
      q && ((Ke = q.vel.x), (ot = q.vel.z));
      const ye =
        (d == null ? void 0 : d.pos) ??
        (this.remote.viewing >= 0 && q ? q.pos : this.player.pos);
      this.world.update(
        ye.x,
        ye.z,
        Ke,
        ot,
        !!q &&
          As(q.type) &&
          q.pos.y - this.world.groundAt(q.pos.x, q.pos.z, q.pos.y) > 30,
      );
    }
    (this.world.updateTime(t / 1e3),
      this.remotes.setDayness(this.sky.dayness),
      this.remotes.update(
        e,
        u,
        this.inventory.creative,
        y,
        (Ke, ot) =>
          this.world.isLoaded(Ke, ot) ||
          (this.vehicles.jetSensors && Math.hypot(Ke - u.x, ot - u.z) <= Vd),
        (Ke, ot, q, ye) => this.vehicles.remoteSeatPose(Ke, ot, q, ye),
        (Ke, ot) => {
          var q;
          return (
            ot > 0 &&
            ((q = this.vehicles.vehicles.get(Ke)) == null ? void 0 : q.type) ===
              P.HELI
          );
        },
        (Ke) => {
          var ot;
          return [P.TANK, P.BTR_TURRET].includes(
            ((ot = this.vehicles.vehicles.get(Ke)) == null
              ? void 0
              : ot.type) ?? -1,
          );
        },
      ),
      this.applyBattleSight(t),
      z.cinematicHud &&
        (this.bots.hideLabelsUnless(() => !1),
        this.remotes.hideTagsUnless(() => !1),
        this.vehicles.hidePlates()),
      (this.localFire.visible =
        this.localBurning &&
        this.player.alive &&
        !((Ae = this.selfBody) != null && Ae.group.visible)),
      this.localFire.visible && AM(this.localFire, t / 1e3),
      this.weapons.updateLaser(
        this.player.alive &&
          !z.cinematicHud &&
          !((K = this.casino) != null && K.blackjack.open) &&
          !this.remote.open &&
          !this.vehicles.remoteView &&
          (!l || this.vehicles.passengerCanShoot()),
      ),
      this.projectileAudioRight
        .set(1, 0, 0)
        .applyQuaternion(this.camera.quaternion),
      this.projectiles.update(
        e,
        this.camera.position,
        this.projectileAudioRight,
      ),
      this.running &&
        this.player.alive &&
        !z.cinematicHud &&
        this.updateCompass(),
      this.tacticalHud.update(
        this.camera,
        this.vehicles,
        this.weapons,
        this.world,
        this.running && this.player.alive && !V.anyOpen(),
        this.vehicles.jetSensors
          ? [...this.remotes.thermalTargets(), ...this.bots.thermalTargets()]
          : [],
      ),
      this.effects.setLightProbe((Ke, ot, q) => {
        const ye = this.world.probeSky(Ke, ot, q);
        return {
          sky: ye,
          block: Math.min(
            1,
            this.world.probeLight(Ke, ot, q) + this.effects.fireFill(Ke, ot, q),
          ),
          ambient: Math.max(
            ye * this.sky.dayness,
            Lf(this.scene).probe(Ke, ot, q),
          ),
        };
      }),
      (this.effects.blastFx.ambient = 0.25 + 0.75 * this.sky.dayness),
      this.effects.update(e),
      this.bulletHoles.update(e, 0.3 + this.sky.dayness * 0.7),
      this.updateHitboxDebug(),
      this.updateMiningVisual(),
      this.sky.update(this.timeOfDay, this.camera.position, e),
      this.front.update(this.camera, this.player.pos, this.player.alive),
      this.vision.updateLighting(this.sky.dayness));
    const Q = ((te = this.weather) == null ? void 0 : te.overcast()) ?? 0,
      ee =
        rr(this.world.seed, this.player.pos.x, this.player.pos.z) === "desert";
    (this.sky.setOvercast(Q, ee && Q > 0),
      this.world.updateWaterLight(
        this.sky.sunDir,
        this.sky.sunColor,
        this.sky.skyColor,
        this.sky.dayness,
      ),
      this.updateSubmersion(e),
      this.scene.fog instanceof fp &&
        this.scene.fog.color.multiplyScalar(
          Math.max(
            0.015,
            this.world.probeSky(
              this.camera.position.x,
              this.camera.position.y,
              this.camera.position.z,
            ),
          ),
        ));
    {
      const Ke = this.world.probeLight(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z,
        ),
        ot = this.world.probeSky(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z,
        );
      ((this.vmLight.intensity = (0.08 + this.sky.dayness) * ot + Ke * 1.1),
        (this.vmKeyLight.intensity = (0.05 + this.sky.dayness) * ot + Ke * 0.8),
        this.vmKeyLight.color.copy(this.sky.sunColor).lerp(Wse, 0.45));
    }
    (this.drops.update(
      e,
      this.player.pos,
      this.player.alive,
      y,
      (Ke, ot) => this.world.isLoaded(Ke, ot),
      (Ke, ot) => z$(Ke, ot, (q, ye) => this.inventory.hasRoomFor(q, ye)),
    ),
      this.backpacks.update(e, (Ke, ot) => this.world.isLoaded(Ke, ot), y));
    const se =
        ((me = this.vehicles.mine) == null ? void 0 : me.type) === P.DRONE,
      oe = this.player.parachute && this.parachuteTPV,
      J = this.vehicles.aboard,
      re = this.vehicles.aboardSeat,
      Ce = this.remote.open
        ? !!J && Ea.hasOpenSeats(J.type)
        : (!l && (this.thirdPerson || !!this.emote)) ||
          (l &&
            this.vehicles.camMode === 1 &&
            !this.vehicles.closeCamera &&
            !!p &&
            Ea.hasOpenSeats(p.type));
    (se || oe || Ce) &&
      !this.selfBody &&
      this.myId &&
      ((this.selfBody = ec(xI(this.myId))),
      (this.selfFire = TM()),
      this.selfBody.group.add(this.selfFire),
      this.scene.add(this.selfBody.group),
      this.refreshSelfArmor());
    const Re = !!this.myDisguise && !J && !l && !se && !this.player.seated;
    if (
      (this.myDisguise &&
        ((this.myDisguise.root.visible = Re && Ce && this.player.alive),
        Re &&
          (this.myDisguise.update(
            e,
            this.player.pos,
            this.player.yaw,
            Math.hypot(this.player.vel.x, this.player.vel.z),
            this.player.onGround,
            y,
          ),
          this.myDisguise.snapped !== this.disguiseSnapped &&
            ((this.disguiseSnapped = this.myDisguise.snapped),
            this.myDisguise.disguise.kind === zo.BLOCK &&
              V.setHint(this.disguiseSnapped ? U("disguiseSnapped") : "")))),
      this.selfBody)
    ) {
      if (
        ((this.selfBody.group.visible =
          (se || oe || Ce) &&
          this.player.alive &&
          !Re &&
          ![P.TANK, P.BTR_TURRET].includes(
            ((xe = this.vehicles.mine) == null ? void 0 : xe.type) ?? -1,
          )),
        this.selfBody.group.visible)
      ) {
        (this.selfBody.group.position.copy(this.player.pos),
          (this.selfBody.group.rotation.order = "YXZ"),
          (this.selfBody.group.rotation.y = this.player.yaw),
          (this.selfBody.group.rotation.x = this.player.prone
            ? -Math.PI / 2
            : 0),
          (this.selfBody.group.rotation.z = 0),
          J &&
            this.vehicles.remoteSeatPose(
              J.id,
              re,
              this.selfBody.group.position,
              this.selfBody.group.quaternion,
            ));
        const Ke = l
          ? Math.atan2(
              Math.sin(this.vehicles.camYaw - this.selfBody.group.rotation.y),
              Math.cos(this.vehicles.camYaw - this.selfBody.group.rotation.y),
            )
          : 0;
        ((this.selfBody.head.rotation.y +=
          (Math.max(-1.15, Math.min(1.15, Ke)) -
            this.selfBody.head.rotation.y) *
          (1 - Math.exp(-16 * e))),
          E0(
            this.selfBody,
            this.player.downed || o || (J && re === 0)
              ? 0
              : this.inventory.held(),
            this.atlas.texture,
          ),
          this.ownAppearance &&
            Wl(
              this.selfBody.group,
              this.ownAppearance.character,
              this.ownAppearance.custom,
            ));
        for (const ot of this.selfBody.heldMesh.children)
          Ba(
            ot,
            (nt = this.inventory.hotbar[this.inventory.sel]) == null
              ? void 0
              : nt.cosmetic,
            ((ne = this.ownAppearance) == null ? void 0 : ne.owner) ??
              (Me == null ? void 0 : Me.id) ??
              z.nick,
          );
        if (((this.selfLightT += e), this.selfLightT >= Vr)) {
          this.selfLightT = 0;
          const ot = dr(this.world, this.selfBody.group.position, y, 1);
          (this.localBurning && (ot.strength = Math.max(ot.strength, 0.55)),
            ur(this.selfBody.group, ot));
        }
        Su(this.selfBody, e, t / 1e3, {
          speed: Math.hypot(this.player.vel.x, this.player.vel.z),
          pitch: this.player.pitch,
          reviving: o,
          held: this.player.downed ? 0 : this.inventory.held(),
          aiming: this.weapons.adsT > 0.45,
          crouching: this.player.crouching,
          prone: this.player.prone,
          airborne: !J && !this.player.onGround,
          parachute: oe,
          seated: this.player.seated || (!!J && !(J.type === P.HELI && re > 0)),
          inspect: this.weapons.inspectTime,
          emote: this.emote,
          emoteTime: t / 1e3 - this.emoteStart,
          reload: this.weapons.reloadT,
          shot: Math.max(0, (this.selfShotUntil - t) / 140),
          voice: this.voice.localLevel,
          swing: (t / 1e3 - this.selfSwingAt) / fk,
        });
      }
      this.selfFire &&
        ((this.selfFire.visible =
          this.selfBody.group.visible && this.localBurning),
        this.selfFire.visible && AM(this.selfFire, t / 1e3));
    }
    {
      const Ke = Math.atan2(
        Math.sin(this.player.yaw - this.chuteYaw),
        Math.cos(this.player.yaw - this.chuteYaw),
      );
      this.chuteYaw = this.player.yaw;
      const ot = this.player.parachute
        ? Ne(Ke / Math.max(0.001, e), -2.2, 2.2)
        : 0;
      this.chuteBank += (ot - this.chuteBank) * (1 - Math.exp(-4 * e));
    }
    if (
      (this.player.parachute &&
        !this.chute &&
        this.myId &&
        ((this.chute = nk()), this.scene.add(this.chute)),
      this.chute)
    ) {
      if (
        ((this.chute.visible = this.player.parachute && this.player.alive),
        this.chute.visible)
      ) {
        (this.chute.position.copy(this.player.pos),
          (this.chute.rotation.y = this.player.yaw));
        const Ke = this.chute.getObjectByName("parachute-lines");
        Ke && (Ke.visible = oe);
        const ot = this.chute.getObjectByName("parachute-pack");
        ot && (ot.visible = oe);
      }
      sk(this.chute, e, t / 1e3, this.chuteBank, this.player.flaring ? 1 : 0);
    }
    (this.loadingShown && this.updateJoinScreen(t),
      (this.moveTimer += e),
      this.moveTimer >= 0.05 && ((this.moveTimer = 0), this.sendPlayerState()),
      (this.pingTimer += e),
      this.pingTimer >= 3 &&
        ((this.pingTimer = 0),
        this.net.send(
          new Xe(ue.C_PING)
            .u32(performance.now() & 4294967295)
            .u16(this.lastRtt),
        )));
    const We = Date.now();
    (We - this.loopSeenAt > 2e3 && this.net.expectWord(3500, c3),
      (this.loopSeenAt = We),
      !this.localSinglePlayer &&
        this.net.dropIfSilent(c3) &&
        (this.pingTimer = 0),
      (this.invSaveTimer += e),
      this.inventoryReady &&
        this.invDirty &&
        this.invSaveTimer >= 0.25 &&
        ((this.invSaveTimer = 0), (this.invDirty = !1), this.sendInventory()),
      !this.player.alive &&
        this.deathTimer > 0 &&
        ((this.deathTimer -= e),
        V.setDeathCountdown(this.deathTimer),
        this.deathTimer <= 0 && this.net.send(new Xe(ue.C_RESPAWN))),
      V.tick(e),
      V.updateHitDirs(
        e,
        this.camera.position.x,
        this.camera.position.z,
        this.player.yaw,
      ),
      V.updateQuestTimer(),
      V.setQuestDistance(this.player.pos),
      (Ee = this.operations) == null || Ee.update(e, this.player.pos),
      (this.hudTimer += e),
      this.hudTimer >= 0.12 && ((this.hudTimer = 0), this.updateHud(l)),
      this.updateFootsteps(r && !l),
      this.updateHealHud(),
      !this.localSinglePlayer && !document.hidden && vZ(i),
      document.hidden || fY(i, this.localSinglePlayer),
      this.updateMusicMood(e));
    const it = this.vision.tick(this.inventory.creative ? 0 : e);
    (it > 0 && this.net.send(new Xe(ue.C_VISION_WEAR).u8(Math.min(5, it))),
      V.rotateMinimap(this.viewHeading()),
      (this.minimapTimer += e));
    const ut = this.input.mobile ? 0.35 : 0.12;
    if (
      (this.minimapTimer >= ut &&
        ((this.minimapTimer = 0), this.maybeRenderMinimap()),
      this.fpsFrames++,
      (this.fpsTime += i),
      this.fpsTime >= 0.5 &&
        ((this.fpsVal = Math.round(this.fpsFrames / this.fpsTime)),
        (this.fpsFrames = 0),
        (this.fpsTime = 0)),
      this.front.active && this.front.renderResults(this.renderer, i))
    ) {
      this.input.endFrame();
      return;
    }
    (this.updateFlashlight(),
      this.syncHeadlights(),
      Lf(this.scene).update(this.camera.position, this.lampRaycast),
      (this.renderer.info.autoReset = !1),
      this.renderer.info.reset(),
      this.camera.layers.set(0),
      (this.renderer.toneMappingExposure = 1.15 * z.brightness),
      this.shaders.active && this.shaders.prepare(this.buildShaderFrame(i)),
      (at = this.weather) == null ||
        at.setShaderLighting(
          this.shaders.active ? 0.2 + 0.55 * this.sky.dayness : null,
        ),
      this.sky.setPhysical(this.shaders.skyLut, this.shaders.volumetricClouds),
      (st = this.borderVisual) == null ||
        st.update(
          this.camera.position,
          z.language === "en",
          this.player.alive && !V.anyOpen(),
        ),
      (Ut = this.claimsUI) == null ||
        Ut.update(
          this.player.pos,
          this.currentPlanet,
          this.player.alive && !V.anyOpen(),
        ),
      this.updatePropertyNotice(),
      this.spawnNotice.update(
        this.player.pos,
        this.currentPlanet,
        z.language === "en",
        this.player.alive && !V.anyOpen(),
        this.input.mobile,
      ),
      this.updateTraining(e),
      (xi = this.casino) == null ||
        xi.setEnabled(this.currentPlanet === Si.EARTH),
      (ri = this.casino) != null &&
        ri.open &&
        (!this.player.alive || this.player.downed) &&
        this.casino.park(),
      (vt = this.casino) == null ||
        vt.update(e, this.player.pos, this.camera, this.net.connected),
      (rt = this.computer) != null &&
        rt.open &&
        (!this.player.alive || this.player.downed) &&
        this.computer.close(),
      (Tt = this.computer) == null ||
        Tt.update(
          e,
          this.player.pos,
          this.camera,
          this.net.connected,
          this.currentPlanet === Si.EARTH,
        ),
      (Yt = this.screens) == null || Yt.update(e, this.camera.position),
      this.world.renderWaterReflection(this.renderer, this.camera),
      this.shaders.beginWorld(this.scene));
    const gt = !this.shaders.active;
    if (
      (gt && this.camera.layers.enable(C2),
      (this.renderer.shadowMap.needsUpdate =
        this.renderer.shadowMap.enabled && (this.frameIndex++ & 1) === 0),
      this.renderer.render(this.scene, this.camera),
      this.camera.layers.set(0),
      this.vision.mode === "thermal" || this.vehicles.jetSensors)
    ) {
      const Ke = [
        ...this.remotes.thermalTargets(),
        ...this.bots.thermalTargets(),
        ...this.animals.thermalTargets(),
      ];
      (jt = this.selfBody) != null &&
        jt.group.visible &&
        Ke.push(this.selfBody.group);
      const ot = this.vehicles.jetSensors,
        q = (St = this.vehicles.mine) == null ? void 0 : St.pos,
        ye = (Ie) =>
          !ot ||
          !q ||
          Ie.getWorldPosition(this.tmpV).distanceToSquared(q) <= Vd ** 2;
      this.vision.renderThermal(
        Ke.filter(ye),
        this.vehicles.thermalTargets().filter((Ie) => {
          var He, Te;
          return (
            Ie !== ((He = this.vehicles.mine) == null ? void 0 : He.group) &&
            Ie !== ((Te = this.vehicles.mine) == null ? void 0 : Te.lod) &&
            ye(Ie)
          );
        }),
        ot,
      );
    }
    if (
      (this.shaders.endWorld(this.scene),
      (this.renderer.autoClear = !1),
      this.renderer.clearDepth(),
      this.camera.layers.set(j2),
      !Ce &&
        !oe &&
        !this.emote &&
        !((li = this.casino) != null && li.open) &&
        !((si = this.casino) != null && si.blackjack.open) &&
        !((on = this.computer) != null && on.open))
    ) {
      const Ke = this.camera,
        ot = Ke.matrixWorldAutoUpdate;
      Ke.matrixWorldAutoUpdate = !1;
      try {
        this.renderer.render(Ke, this.camera);
      } finally {
        Ke.matrixWorldAutoUpdate = ot;
      }
    }
    if (
      (this.camera.layers.set(0),
      (this.renderer.autoClear = !0),
      this.shaders.present(),
      !gt)
    ) {
      (this.frameIndex & 63) === 1 &&
        this.scene.traverse((q) => {
          q.isLight && q.layers.isEnabled(0) && q.layers.enable(C2);
        });
      const Ke = this.scene.matrixWorldAutoUpdate,
        ot = this.renderer.shadowMap.autoUpdate;
      (this.camera.layers.set(C2),
        (this.scene.matrixWorldAutoUpdate = !1),
        (this.renderer.shadowMap.autoUpdate = !1),
        (this.renderer.autoClear = !1),
        this.renderer.setRenderTarget(null));
      try {
        this.renderer.render(this.scene, this.camera);
      } finally {
        ((this.scene.matrixWorldAutoUpdate = Ke),
          (this.renderer.shadowMap.autoUpdate = ot),
          (this.renderer.autoClear = !0),
          this.camera.layers.set(0));
      }
    }
    (this.adaptResolution(i, t), this.input.endFrame());
  }
  adaptResolution(e, t) {
    if (
      !z.adaptiveResolution ||
      document.hidden ||
      this.loadingShown ||
      e > 0.25 ||
      ((this.frameEma += (e * 1e3 - this.frameEma) * 0.08),
      t - this.adaptiveAt < 1500)
    )
      return;
    this.adaptiveAt = t;
    let i = this.adaptiveScale;
    (this.frameEma > 19.5 && i > 0.7
      ? (i = Math.max(0.7, i - 0.1))
      : this.frameEma < 12.5 && i < 1 && (i = Math.min(1, i + 0.05)),
      Math.abs(i - this.adaptiveScale) > 1e-6 &&
        ((this.adaptiveScale = i), this.applyPixelRatio()));
  }
  applyPixelRatio() {
    const e = Math.max(0.5, this.basePixelRatio * this.adaptiveScale);
    (this.renderer.setPixelRatio(e), this.effects.setPixelRatio(e));
  }
  buildShaderFrame(e) {
    var a, r;
    const t = this.scene.fog,
      i = this.camera.position,
      s =
        this.shaderFrame ??
        (this.shaderFrame = {
          camera: this.camera,
          sunDir: this.sky.celestialSunDir,
          lightDir: this.sky.sunDir,
          lightColor: this.sky.sunColor,
          dayness: 1,
          overcast: 0,
          clearSky: 0,
          lunar: !1,
          skyTop: this.sky.topColor,
          skyHorizon: this.sky.horizonColor,
          fogNear: 0,
          fogFar: 1,
          fogColor: t.color,
          underwater: 0,
          lava: !1,
          waterSurfaceY: 0,
          skyProbe: 1,
          clouds: !0,
          wetness: 0,
          time: 0,
          dt: 0,
          windX: 0,
          windZ: 0,
          exposure: 1,
          rays: 1,
          lightning: 0,
          arid: 0,
        });
    ((s.dayness = this.sky.dayness),
      (s.overcast = this.sky.overcastAmount),
      (s.clearSky = this.sky.clearSkyAmount),
      (s.lunar = this.sky.isLunar),
      (s.fogNear = Math.max(t.near, t.far * 0.72)),
      (s.fogFar = t.far),
      (s.fogColor = t.color),
      (s.underwater = this.underwaterMix),
      (s.lava = this.inLava),
      (s.waterSurfaceY = this.waterSurfaceY),
      (s.skyProbe = this.world.probeSky(i.x, i.y, i.z)),
      (s.clouds = Ts().clouds),
      (s.wetness =
        ((a = this.weather) == null
          ? void 0
          : a.rainAt(this.player.pos.x, this.player.pos.z)) ?? 0),
      (s.time = performance.now() / 1e3),
      (s.dt = e),
      (s.windX = this.windX),
      (s.windZ = this.windZ),
      (s.exposure = this.renderer.toneMappingExposure),
      (s.rays = Ts().sunShafts),
      (s.lightning =
        ((r = this.weather) == null ? void 0 : r.lightningFlash) ?? 0));
    const o = rr(this.world.seed, this.player.pos.x, this.player.pos.z);
    return ((s.arid = o === "desert" ? 1 : o === "savanna" ? 0.5 : 0), s);
  }
  updateBodyCamera(e) {
    var _, C, R, L, N, D;
    const t = this.player.eyePos(this.tmpV).clone(),
      i = this.player.lookDir(this.tmpV2).clone(),
      s = !!this.emote || this.frontView,
      o = this.inventory.held(),
      a = !!Cn[o],
      r = this.input.mouseR && !s && !this.player.parachute,
      l = s ? 3.6 : r ? 1.85 : a ? 3.1 : 4.2,
      c = s ? 0 : r ? 0.72 : a ? 0.78 : 0.5,
      h = 1 - Math.exp(-10 * e);
    ((this.footCameraDistance += (l - this.footCameraDistance) * h),
      (this.footCameraShoulder += (c - this.footCameraShoulder) * h));
    const d = new k(Math.cos(this.player.yaw), 0, -Math.sin(this.player.yaw)),
      u = this.player.prone ? 0.32 : this.player.crouching ? 0.3 : 0.28,
      f = t
        .clone()
        .addScaledVector(d, this.footCameraShoulder)
        .add(new k(0, u, 0)),
      p = f.clone().sub(t),
      m = p.length();
    if (m > 0.001) {
      const H = this.world.raycast(t, p.normalize(), m + 0.2);
      H && f.copy(t).addScaledVector(p, Math.max(0, H.dist - 0.2));
    }
    const y = s ? i.clone() : i.clone().negate(),
      g = this.world.raycast(f, y, this.footCameraDistance + 0.3),
      b = g ? Math.max(0.3, g.dist - 0.3) : this.footCameraDistance,
      S = f.clone().addScaledVector(y, b);
    (this.camera.position.copy(S),
      s
        ? this.camera.quaternion.setFromRotationMatrix(
            new bt().lookAt(S, t, new k(0, 1, 0)),
          )
        : this.camera.rotation.set(
            this.player.pitch,
            this.player.yaw,
            0,
            "YXZ",
          ));
    const M = this.tpAimData;
    if ((M.origin.copy(t), s)) {
      const H = this.world.raycast(t, i, 200);
      M.target.copy(t).addScaledVector(i, H ? H.dist : 200);
    } else {
      const H = S.clone().addScaledVector(
          i,
          Math.max(0, t.clone().sub(S).dot(i)),
        ),
        G = 300;
      let I =
        ((_ = this.world.raycast(H, i, G)) == null ? void 0 : _.dist) ?? G;
      ((I = Math.min(
        I,
        ((C = this.remotes.raycastHit(H, i, I)) == null ? void 0 : C.dist) ?? I,
      )),
        (I = Math.min(
          I,
          ((R = this.bots.raycastHit(H, i, I)) == null ? void 0 : R.dist) ?? I,
        )),
        (I = Math.min(
          I,
          ((L = this.animals.raycastHit(H, i, I)) == null ? void 0 : L.dist) ??
            I,
        )),
        (I = Math.min(
          I,
          ((N = this.vehicles.rayHit(H, i, I)) == null ? void 0 : N.dist) ?? I,
        )),
        M.target.copy(H).addScaledVector(i, I),
        M.target.distanceTo(t) < 0.8 &&
          M.target.copy(t).addScaledVector(i, 0.8));
    }
    const x =
        (D = this.selfBody) != null && D.group.visible
          ? this.selfBody.heldMesh
          : null,
      T = (x == null ? void 0 : x.getObjectByName("vm-muzzle")) ?? null,
      A = (x == null ? void 0 : x.getObjectByName("vm-laser")) ?? null;
    ((M.muzzle = T ? T.getWorldPosition(this.tpMuzzle) : null),
      (M.laser = A ? A.getWorldPosition(this.tpLaser) : null),
      (this.tpAim = M));
  }
  aimedDistance(e = 300) {
    var o, a, r, l, c;
    const t = this.camera.getWorldPosition(this.tmpAimEye),
      i = this.camera.getWorldDirection(this.tmpAimDir);
    let s = ((o = this.world.raycast(t, i, e)) == null ? void 0 : o.dist) ?? e;
    return (
      (s = Math.min(
        s,
        ((a = this.remotes.raycastHit(t, i, s)) == null ? void 0 : a.dist) ?? s,
      )),
      (s = Math.min(
        s,
        ((r = this.bots.raycastHit(t, i, s)) == null ? void 0 : r.dist) ?? s,
      )),
      (s = Math.min(
        s,
        ((l = this.animals.raycastHit(t, i, s)) == null ? void 0 : l.dist) ?? s,
      )),
      (s = Math.min(
        s,
        ((c = this.vehicles.rayHit(t, i, s)) == null ? void 0 : c.dist) ?? s,
      )),
      s < e ? s : null
    );
  }
  scoreTargetHit(e, t, i, s) {
    const o = (h) => {
        const d = h - Math.floor(h);
        return d < 1e-4 || d > 0.9999 ? 0.5 : d;
      },
      [a, r] =
        t !== 0
          ? [o(e.z), 1 - o(e.y)]
          : i !== 0
            ? [o(e.x), o(e.z)]
            : [o(e.x), 1 - o(e.y)],
      l = dz(a, r);
    this.effects.targetHit(e, t, i, s, l);
    const c = performance.now();
    (c - this.targetLastHitAt > Fse &&
      ((this.targetScoreTotal = 0), (this.targetShots = 0)),
      (this.targetLastHitAt = c),
      (this.targetScoreTotal += l),
      this.targetShots++,
      V.showTargetScore(l, this.targetScoreTotal, this.targetShots),
      V.hitmark(),
      this.sfx.hitmark(),
      this.input.mobile && vo("light", 55));
  }
  bearingTo(e) {
    const t = this.navigationPosition(),
      i = e.x - t.x,
      s = e.z - t.z;
    return ((Math.atan2(i, -s) * 180) / Math.PI + 360) % 360;
  }
  idleAnimalVoices(e) {
    if (((this.animalVoiceT -= e), this.animalVoiceT > 0)) return;
    this.animalVoiceT = 2.5 + Math.random() * 6;
    const t = this.animals.nearbyForVoice(this.player.pos, 30);
    if (t.length === 0) return;
    const i = t[Math.floor(Math.random() * t.length)];
    i.type !== Nt.WENDIGO &&
      this.sfx.animalVoice(
        i.type,
        i.dist,
        i.id,
        this.panTo(i.at, i.dist),
        "idle",
        i.baby,
      );
  }
  panTo(e, t) {
    const i = this.player.yaw,
      s = this.player.pos;
    return ((e.x - s.x) * Math.cos(i) - (e.z - s.z) * Math.sin(i)) / (t || 1);
  }
  animalCry(e, t) {
    const i = this.animals.voiceInfo(e);
    if (!i || i.type === Nt.WENDIGO) return;
    const s = i.at.distanceTo(this.player.pos);
    if (s > 60) return;
    const o = performance.now();
    (t === "hurt" && o - (this.animalCryAt.get(e) ?? 0) < 300) ||
      (this.animalCryAt.set(e, o),
      this.animalCryAt.size > 256 &&
        this.animalCryAt.delete(this.animalCryAt.keys().next().value),
      this.sfx.animalVoice(i.type, s, e, this.panTo(i.at, s), t, i.baby));
  }
  updateFootsteps(e) {
    const t = this.player,
      i = this.stepReady
        ? Math.hypot(
            t.pos.x - this.stepPosition.x,
            t.pos.z - this.stepPosition.z,
          )
        : 0;
    if (
      (this.stepPosition.copy(t.pos),
      (this.stepReady = !0),
      !e ||
        !t.alive ||
        !t.onGround ||
        t.flying ||
        t.inWater ||
        t.seated ||
        this.remote.open ||
        i > 4 ||
        Math.hypot(t.vel.x, t.vel.z) < 0.25)
    ) {
      this.stepDistance = 0;
      return;
    }
    this.stepDistance += i;
    const s = t.prone ? 1.1 : t.crouching ? 1.2 : t.sprinting ? 2.35 : 1.75;
    if (this.stepDistance < s) return;
    this.stepDistance %= s;
    const o = Math.floor(t.pos.x),
      a = Math.floor(t.pos.z),
      r = Math.floor(t.pos.y - 0.05),
      l = this.world.getBlock(o, r, a) || this.world.getBlock(o, r - 1, a);
    l &&
      this.sfx.footstep(
        l,
        t.prone ? 0.25 : t.crouching ? 0.38 : t.sprinting ? 1.1 : 0.8,
      );
  }
  startGameAudio() {
    if ((this.sfx.ensure(), this.musicStarted)) return;
    const e = this.sfx.getContext();
    e && ((this.musicStarted = !0), this.music.start(e));
  }
  updateMusicMood(e) {
    if (((this.musicMoodT += e), this.musicMoodT < 0.5)) return;
    this.musicMoodT = 0;
    const t = this.player.pos,
      i = this.worldObjects.find(
        (c) =>
          /пирам|pyramid/i.test(c.name) &&
          Math.hypot(t.x - c.x, t.z - c.z) < c.radius * 0.72,
      ),
      s = this.world.groundAt(t.x, t.z, 127) > t.y + 3.5,
      o = !!i && s;
    (o &&
      !this.insidePyramid &&
      (this.sfx.pyramidEntrance(), (this.ambienceT = 1.5)),
      (this.insidePyramid = o));
    const a =
        this.currentPlanet === Si.EARTH &&
        !!this.raidZone &&
        Math.hypot(t.x - this.raidZone.x, t.z - this.raidZone.z) <
          this.raidZone.radius,
      r =
        this.currentPlanet === Si.EARTH &&
        this.worldSites
          .list()
          .some(
            (c) =>
              c.kind > 0 &&
              c.kind < 5 &&
              c.state !== 2 &&
              Math.hypot(t.x - c.x, t.z - c.z) < c.radius + 12 &&
              (c.alarm || c.state === 1 || this.hostileNearby(t, 60)),
          );
    let l;
    if (a) l = "raid";
    else if (r) l = "siege";
    else if (performance.now() < this.combatUntil) l = "combat";
    else if (this.hostileNearby(t, 34))
      ((this.combatUntil = performance.now() + r3), (l = "combat"));
    else if (this.currentPlanet === Si.MOON) l = "moon";
    else if (o) l = "pyramid";
    else if (s) l = "cave";
    else {
      const c = rr(this.world.seed, t.x, t.z);
      l =
        this.world.groundAt(t.x, t.z, 127) < $o - 2
          ? "ocean"
          : c === "winter"
            ? "winter"
            : c === "mountains" || c === "alpine"
              ? "mountain"
              : c === "jungle"
                ? "jungle"
                : c === "savanna"
                  ? "savanna"
                  : c === "volcanic"
                    ? "volcanic"
                    : c === "forest" ||
                        c === "autumn" ||
                        c === "yellowstone" ||
                        c === "islands"
                      ? "forest"
                      : c === "desert" || c === "oasis"
                        ? "desert"
                        : "open";
    }
    if (
      (l === this.pendingMood
        ? (this.pendingMoodT += 0.5)
        : ((this.pendingMood = l), (this.pendingMoodT = 0)),
      (dp(l) || this.pendingMoodT >= 2) && this.music.setMood(l),
      (this.ambienceT -= 0.5),
      this.ambienceT <= 0)
    ) {
      this.ambienceT = 5 + Math.random() * 11;
      const c = rr(this.world.seed, t.x, t.z),
        d =
          (!s &&
          !dp(l) &&
          (c === "savanna" ||
            c === "yellowstone" ||
            c === "volcanic" ||
            c === "alpine")
            ? c
            : null) ??
          (l === "forest" || l === "jungle"
            ? "forest"
            : l === "cave"
              ? "cave"
              : l === "pyramid"
                ? "pyramid"
                : l === "desert"
                  ? "desert"
                  : l === "ocean"
                    ? "ocean"
                    : null);
      d && !dp(l) && this.sfx.ambience(d, Math.floor(Math.random() * 64));
    }
  }
  hostileNearby(e, t) {
    const i = t * t;
    for (const s of this.bots.list()) {
      if (!s.hostile || s.npc) continue;
      const o = s.pos.x - e.x,
        a = s.pos.z - e.z;
      if (o * o + a * a < i) return !0;
    }
    for (const s of this.vehicles.vehicles.values())
      if (
        !(s.ownerName !== Mo || s.planet !== this.currentPlanet || s.hp <= 0) &&
        s.pos.distanceToSquared(e) < i
      )
        return !0;
    return !1;
  }
  updateCompass() {
    const e = this.navigationPosition(),
      t = performance.now();
    if (t >= this.compassRefreshAt) {
      this.compassRefreshAt = t + 100;
      const s = this.compassPoints;
      ((s.length = 0),
        this.homePos &&
          this.currentPlanet === Si.EARTH &&
          s.push({ x: this.homePos.x, z: this.homePos.z, color: "#4aa8ff" }),
        this.lastDeathPos &&
          s.push({
            x: this.lastDeathPos.x,
            z: this.lastDeathPos.z,
            color: "#ff4a4a",
          }));
      const o = V.getWaypoint();
      o && !Po(z.nick) && s.push({ ...o, color: h_ });
      for (const a of pg)
        a.planet === this.currentPlanet && s.push({ ...a, label: a.username });
      for (const a of this.mapMarkers())
        (a.kind === "squad" || a.kind === "friend") &&
          s.push({ x: a.x, z: a.z, color: a.color, label: a.label });
      for (const a of V.questCompassMarkers()) s.push(a);
      if (this.front.active)
        for (const a of this.front.compassMarkers()) s.push(a);
      for (; this.compassMarkers.length < s.length;)
        this.compassMarkers.push({ bearing: 0, color: "" });
      this.compassMarkers.length = s.length;
    }
    const i = this.compassMarkers;
    for (let s = 0; s < i.length; s++) {
      const o = this.compassPoints[s];
      ((i[s].bearing = this.bearingTo(this.tmpV.set(o.x, e.y, o.z))),
        (i[s].color = o.color),
        (i[s].label = o.label));
    }
    V.setCompass(
      this.viewHeading(),
      `X ${e.x.toFixed(0)} Y ${e.y.toFixed(0)} Z ${e.z.toFixed(0)}`,
      i,
    );
  }
  maybeRenderMinimap() {
    const e = this.navigationPosition(),
      t = e.x - this.minimapLastX,
      i = e.z - this.minimapLastZ,
      s = t * t + i * i >= 1.5 * 1.5;
    this.minimapSkipTicks++;
    const o = this.input.mobile ? 0.35 : 0.12,
      a = Math.max(1, Math.round(1 / o));
    (!s &&
      this.minimapLastZoom === z.minimapZoom &&
      this.minimapSkipTicks < a) ||
      ((this.minimapLastZoom = z.minimapZoom),
      (this.minimapSkipTicks = 0),
      (this.minimapLastX = e.x),
      (this.minimapLastZ = e.z),
      V.renderMinimap(
        (r, l, c) => this.world.surfaceColor(r, l, c),
        { x: e.x, z: e.z },
        this.mapMarkers(),
      ));
  }
  debugLines() {
    var i;
    const e = z.debug,
      t = [];
    if (e.fps) {
      const s = this.fpsVal > 0 ? (1e3 / this.fpsVal).toFixed(1) : "--";
      t.push(`FPS ${this.fpsVal}  (${s} ms)`);
    }
    if (e.position) {
      const s = this.player.pos,
        o = ((((-this.viewHeading() * 180) / Math.PI) % 360) + 360) % 360;
      (t.push(`XYZ ${s.x.toFixed(2)} ${s.y.toFixed(2)} ${s.z.toFixed(2)}`),
        t.push(
          `chunk ${Math.floor(s.x / Pe)} ${Math.floor(s.z / Pe)}  bearing ${o.toFixed(0)}°`,
        ));
    }
    if (e.render) {
      const s = this.renderer.info;
      (t.push(
        `draws ${s.render.calls}  tris ${(s.render.triangles / 1e3).toFixed(1)}k  progs ${((i = s.programs) == null ? void 0 : i.length) ?? 0}`,
      ),
        t.push(`geom ${s.memory.geometries}  tex ${s.memory.textures}`));
    }
    if (
      (e.chunks &&
        t.push(
          `chunks ${this.world.chunks.size}  dirty ${this.world.dirtyChunkCount()}  range ${Ts().renderDist}`,
        ),
      e.entities &&
        (t.push(
          `players ${this.remotes.list().length}  bots ${this.bots.list().length}  animals ${this.animals.count}`,
        ),
        t.push(
          `vehicles ${this.vehicles.vehicles.size}  particles ${Ts().particles.toFixed(2)}x`,
        )),
      e.network &&
        t.push(
          `ping ${this.lastRtt} ms  ${this.net.connected ? "online" : "offline"}`,
        ),
      e.memory)
    ) {
      const s = performance.memory;
      t.push(
        s
          ? `heap ${(s.usedJSHeapSize / 1048576).toFixed(0)} / ${(s.jsHeapSizeLimit / 1048576).toFixed(0)} MB`
          : "heap n/a in this browser",
      );
    }
    return t;
  }
  updatePropertyNotice() {
    if (!this.claimsUI) return;
    if (!this.player.alive || V.anyOpen() || this.vehicles.mine) {
      this.claimsUI.showProperty("");
      return;
    }
    if (performance.now() < this.propertyUpdateAt) return;
    this.propertyUpdateAt = performance.now() + 200;
    const e = z.language === "en",
      t = this.player.eyePos(this.tmpV),
      i = this.player.lookDir(this.tmpV2),
      s = this.vehicles.rayHit(t, i, 24),
      o = s
        ? this.vehicles.vehicles.get(s.id)
        : this.vehicles.nearestFree(this.player.pos, 6);
    if (o && this.front.active && o.army) {
      this.claimsUI.showProperty("");
      return;
    }
    if (o) {
      const l = o.ownerName || (e ? "Unclaimed" : "Без владельца"),
        c = !o.ownerName || !!this.claimsUI.ownerAllows(o.ownerName);
      this.claimsUI
        .showProperty(`${Zs(o.type)} · ${e ? "Owner" : "Владелец"}: ${l}
${c ? (e ? "Access granted" : "Доступ разрешён") : e ? "Owner and their friends only" : "Доступ только владельцу и его друзьям"}`);
      return;
    }
    const a = this.world.raycast(t, i, 6);
    if ((a == null ? void 0 : a.block) === v.OWNERSHIP_TOTEM) {
      const l = this.claimsUI.index.totem(this.currentPlanet, a.bx, a.by, a.bz);
      if (l) {
        this.claimsUI
          .showProperty(`${e ? "Ownership totem" : "Тотем владения"} · ${l.owner}
${l.owner === z.nick ? (e ? "Use — territory menu" : "Использовать — меню привата") : e ? "Only the owner can remove it" : "Снять может только владелец"}`);
        return;
      }
    }
    const r = this.worldSites
      .list()
      .find(
        (l) =>
          l.kind >= 1 &&
          l.kind <= 4 &&
          Math.hypot(l.x - this.player.pos.x, l.z - this.player.pos.z) <=
            l.radius,
      );
    if (r) {
      const l = this.baseCaptures.get(r.id);
      this.claimsUI.showProperty(`${Ns(r.name, z.language)}
${e ? "Owner" : "Владелец"}: ${r.owner || (e ? "Unclaimed" : "Не захвачена")}${l ? ` · ${e ? "Capture" : "Захват"}: ${l.attacker} · ${Math.max(0, Math.ceil((l.until - Date.now()) / 1e3))}${e ? "s" : "с"}` : ""}`);
      return;
    }
    this.claimsUI.showProperty("");
  }
  baseFlagHint(e) {
    var c;
    const t =
        this.worldSites.nearestCommand(this.player.pos, 5.5) ??
        this.worldSites.nearestFlag(this.player.pos, 6),
      i = e ? U("useAction") : gs(z.binds.use);
    if (!t) {
      const h = this.worldSites.nearestVillage(this.player.pos, 5.5);
      return h
        ? z.language === "en"
          ? `${i} — town hall board of ${h.name}`
          : `${i} — табло ратуши «${h.name}»: задачи, склад, торговля`
        : null;
    }
    if (t.state !== 2 || !t.owner)
      return U(t.state === 1 ? "baseFlagReady" : "baseFlagNeutral", {
        name: Ns(t.name, z.language),
        action: i,
      });
    const s = this.baseCaptures.get(t.id),
      o = z.language === "en",
      a =
        t.owner === z.nick ||
        !!((c = this.claimsUI) != null && c.ownerAllows(t.owner));
    if (s) {
      const h = Math.max(0, Math.ceil((s.until - Date.now()) / 1e3)),
        d = `${Math.floor(h / 60)}:${String(h % 60).padStart(2, "0")}`;
      return `${Ns(t.name, z.language)} · ${o ? "Owner" : "Владелец"}: ${t.owner} · ${s.attacker} ${d} · ${t.owner === z.nick ? (o ? `${i} — cancel capture at flag` : `${i} — отменить захват у флага`) : o ? "Capture in progress" : "Идёт перезахват"}`;
    }
    if (!a)
      return `${Ns(t.name, z.language)} · ${o ? "Owner" : "Владелец"}: ${t.owner} · ${i} — ${o ? "capture" : "захватить"} (${Math.ceil(this.baseCaptureSeconds / 60)} ${o ? "min" : "мин"})`;
    if (t.supplyReady)
      return U("baseFlagSupplyReady", {
        name: Ns(t.name, z.language),
        action: i,
      });
    const r = Math.max(0, t.supplySeconds),
      l = `${Math.floor(r / 60)}:${String(r % 60).padStart(2, "0")}`;
    return U("baseFlagSupplyWait", { name: Ns(t.name, z.language), time: l });
  }
  updateCropProgress() {
    if (
      this.currentPlanet !== Si.EARTH ||
      !this.world ||
      !this.camera ||
      !this.net.connected ||
      !this.player.alive ||
      V.anyOpen()
    ) {
      (V.setCropProgress(null), (this.cropQueryKey = ""));
      return;
    }
    const e = performance.now(),
      t = this.player.eyePos(this.tmpV),
      i = this.camera.getWorldDirection(this.tmpV2),
      s = this.world.raycast(t, i, 5.5);
    if (!s || (!yh(s.block) && !tm(s.block))) {
      (V.setCropProgress(null), (this.cropQueryKey = ""));
      return;
    }
    const o = `${s.bx},${s.by},${s.bz}`;
    (o !== this.cropQueryKey || e >= this.cropQueryTimer) &&
      ((this.cropQueryKey = o),
      (this.cropQueryTimer = e + 300),
      this.net.send(new Xe(ue.C_CROP_QUERY).i32(s.bx).u8(s.by).i32(s.bz)));
    const a = tm(s.block),
      r = a ? 0 : N$(s.block),
      l = this.cropProgress.get(o),
      c = (l == null ? void 0 : l.stage) === r ? l.stage : r,
      h =
        l && l.stage === r
          ? Math.min(
              1,
              l.pct +
                (Math.max(0, e - l.at) / Math.max(1, l.stageMs)) * l.speed,
            )
          : 0,
      d = a ? h * 100 : r >= 2 ? 100 : ((c + h) / 2) * 100,
      u = kd(de[s.block]) ?? Ki(s.block) ?? "";
    V.setCropProgress({
      label:
        r >= 2
          ? U("cropReady", { name: u })
          : U("cropProgress", { name: u, pct: Math.floor(d) }),
      pct: d,
      boosted: !!(l != null && l.boosted),
      details: a
        ? h >= 1
          ? z.language === "en"
            ? "Waiting for space above the sapling"
            : "Ожидание свободного места над саженцем"
          : `${z.language === "en" ? "Growth" : "Рост"} · ${Math.ceil(((1 - h) * ((l == null ? void 0 : l.stageMs) ?? 6e4)) / 1e3)} ${z.language === "en" ? "s" : "с"}`
        : U("cropEnvironment", {
            light: (l == null ? void 0 : l.light) ?? "—",
            speed: l ? l.speed.toFixed(2).replace(/\.00$/, "") : "—",
          }),
      lowLight: !a && !!l && l.light < 9,
    });
  }
  updateHud(e) {
    var h, d, u, f, p, m, y;
    const t = this.input.mobile;
    (this.player.pos,
      V.setDebugLines(this.debugLines()),
      V.renderEquipmentStatus(
        e ? 0 : this.inventory.held(),
        this.weapons.loadedAmmo(),
      ));
    const i = this.vehicles.hudInfo(this.input.mobile),
      s = this.vehicles.mine;
    if (i && (s == null ? void 0 : s.type) === P.DRONE && this.front.active) {
      ((h = this.droneFlight) == null ? void 0 : h.id) !== s.id &&
        (this.droneFlight = { id: s.id, since: performance.now() });
      const g = Math.max(
        0,
        Wx.battery - (performance.now() - this.droneFlight.since) / 1e3,
      );
      ((i.name = `${i.name} · ${Math.ceil(g)} ${z.language === "en" ? "s" : "с"}`),
        (i.charge = g / Wx.battery));
    }
    if (
      (V.setVehicleHud(i),
      this.crewHud.update(
        this.vehicles,
        this.running &&
          this.player.alive &&
          !this.remote.open &&
          !this.input.uiOpen,
        (g) => (g === this.myId ? z.nick : this.remotes.getName(g)),
      ),
      this.updateCropProgress(),
      e)
    )
      V.setAmmo("", "");
    else {
      const g = this.inventory.held();
      if (wo(g)) {
        const b = Zc(g);
        V.setAmmo(
          Ki(g),
          `${b.width}×${b.depth}×${b.height} · ${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "Build" : "Построить"}`,
        );
      } else if (g === E.COMPUTER)
        V.setAmmo(
          Ki(g),
          `${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "Place computer" : "установить компьютер"}`,
        );
      else if (Tl(g))
        V.setAmmo(
          Ki(g),
          `${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "Place cabinet" : "поставить автомат"}`,
        );
      else if (Cn[g])
        V.setAmmo(
          this.weapons.weaponName(),
          this.weapons.ammoText(),
          this.weapons.weaponColor(),
        );
      else if (g > 0 && g < 256)
        V.setAmmo(
          kd(de[g]) ?? "",
          `${this.inventory.countOf(g)}${this.front.active && Vx(g) ? (g === v.MINE_AT ? (z.language === "en" ? " · enemy armour only" : " · только техника врага") : z.language === "en" ? " · enemy soldiers only" : " · только солдаты врага") : g === v.MINE_AP ? (z.language === "en" ? " · detonates on release" : " · срабатывает при сходе") : g === v.MINE_AT ? (z.language === "en" ? " · vehicle pressure" : " · срабатывает от техники") : ""}`,
        );
      else if (g === 0)
        V.setAmmo(U("handLabel"), U(t ? "handTouchHint" : "handHint"));
      else if (Fc(g))
        V.setAmmo(
          Ki(g),
          `${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "Equip armor" : "Надеть броню"}`,
        );
      else if (g === E.MEDKIT || g === E.MILITARY_MEDKIT) {
        const b =
          this.medkitChannel > 0
            ? U("bandagingEllipsis")
            : (g === E.MILITARY_MEDKIT
                  ? this.militaryMedkitCd
                  : this.medkitCd) > 0
              ? U("reloadingSeconds", {
                  sec: Math.ceil(
                    g === E.MILITARY_MEDKIT
                      ? this.militaryMedkitCd
                      : this.medkitCd,
                  ),
                })
              : U("medkitHealHint", {
                  action: U(t ? "useAction" : "rmbAction"),
                  heal: g === E.MILITARY_MEDKIT ? this.player.maxHp : S2,
                });
        V.setAmmo(Ki(g) ?? U("medkitLabel"), b);
      } else if (g === E.BANDAGE) {
        const b =
          this.bandageChannel > 0
            ? U("bandagingEllipsis")
            : this.bandageCd > 0
              ? U("reloadingSeconds", { sec: Math.ceil(this.bandageCd) })
              : U("bandageHealHint", {
                  action: U(t ? "useAction" : "rmbAction"),
                  heal: E2,
                });
        V.setAmmo(U("bandageLabel"), b);
      } else if (pI(g)) V.setAmmo(Ki(g), String(this.inventory.countOf(g)));
      else if (xa(g) || g === E.DETONATOR) {
        const b = [
            ...(((d = this.c4) == null ? void 0 : d.charges.values()) ?? []),
          ].filter((T) => T.owner === this.sessionName).length,
          S = z.language === "en",
          M = t
            ? S
              ? "Use / Fire"
              : "Использовать / Огонь"
            : S
              ? "LMB / RMB / F"
              : "ЛКМ / ПКМ / F";
        V.setAmmo(
          Ki(g),
          `${M} · ${xa(g) ? (t ? (S ? "Fire — throw · Use — place" : "Огонь — бросить · Использовать — поставить") : S ? "LMB throw · RMB place" : "ЛКМ бросить · ПКМ поставить") : S ? "Start timers" : "Запустить таймеры"} · ${b}/32`,
        );
        const x = [
          ...(((u = this.c4) == null ? void 0 : u.charges.values()) ?? []),
        ].filter((T) => T.owner === this.sessionName && T.remaining >= 0);
        x.length &&
          V.setAmmo(
            Ki(g),
            `${S ? "DETONATION" : "ДЕТОНАЦИЯ"} · ${Math.min(...x.map((T) => T.remaining)).toFixed(1)} s · ${x.length} ${S ? "charges" : "зарядов"}`,
          );
      } else if (g === E.EGG)
        V.setAmmo(
          Ki(g),
          `${U(t ? "useAction" : "rmbAction")} · ${z.language === "en" ? "Throw · 1 HP · 30% chick" : "Бросить · 1 HP · 30% цыплёнок"}`,
        );
      else if (g === E.FERTILIZER)
        V.setAmmo(
          Ki(g),
          U("fertilizerHint", { action: U(t ? "useAction" : "rmbAction") }),
        );
      else if (j0[g] && p2[g])
        V.setAmmo(
          Ki(g),
          U("berryHint", {
            action: U(t ? "useAction" : "rmbAction"),
            heal: j0[g],
          }),
        );
      else if (j0[g])
        V.setAmmo(
          Ki(g),
          U("foodEatHint", {
            action: U(t ? "useAction" : "rmbAction"),
            heal: j0[g],
          }),
        );
      else if (g === E.WHEAT)
        V.setAmmo(
          Ki(g),
          U("wheatBreedHint", { action: U(t ? "useAction" : "rmbAction") }),
        );
      else if (p2[g])
        V.setAmmo(
          Ki(g),
          U("wheatSeedsHint", { action: U(t ? "useAction" : "rmbAction") }),
        );
      else if (Nr[g] || b0[g]) V.setAmmo(Ki(g), this.toolModes.hint(g, t));
      else if (g === E.COMBAT_KNIFE)
        V.setAmmo(
          this.weapons.weaponName(),
          U(t ? "knifeTouchHint" : "knifeHint"),
          this.weapons.weaponColor(),
        );
      else if (g === E.BUCKET)
        V.setAmmo(
          Ki(g),
          U("bucketFillHint", { action: U(t ? "useAction" : "rmbAction") }),
        );
      else if (g === E.WATER_BUCKET || g === E.LAVA_BUCKET)
        V.setAmmo(
          Ki(g),
          U("bucketPourHint", { action: U(t ? "useAction" : "rmbAction") }),
        );
      else if (g === E.WELDER)
        V.setAmmo(
          U("hammerLabel"),
          z.language === "en"
            ? t
              ? "Fire: weld · Use: welder menu"
              : "LMB: weld · RMB: welder menu"
            : t
              ? "Огонь: варить · Использовать: меню сварщика"
              : "ЛКМ: варить · ПКМ: меню сварщика",
        );
      else if (g === E.FLASHLIGHT)
        V.setAmmo(
          Ki(g),
          U("flashlightHint", {
            key: gs(z.binds.flashlight) || "—",
            state: z.lightOn[0] ? U("flashlightOn") : U("flashlightOff"),
          }),
        );
      else if (g === E.FISHING_ROD) {
        const b = U(t ? "useAction" : "rmbAction");
        V.setAmmo(
          Ki(g),
          this.fishing.hasLine(this.myId)
            ? U("rodWaitHint", { action: b })
            : U("rodCastHint", { action: b }),
        );
      } else
        V.setAmmo(
          Ki(g) ?? "",
          g === E.AXE
            ? U(t ? "axeTouchHint" : "axeHint")
            : g === E.MOBILE_REMOTE
              ? `${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "command station · 8,000 blocks" : "станция · 8 000 блоков"}`
              : U(t ? "placeTouchHint" : "placeHint"),
        );
    }
    const o =
        !e && !V.anyOpen()
          ? (f = this.casino) == null
            ? void 0
            : f.target(
                this.player.eyePos(this.tmpV),
                this.player.lookDir(this.tmpV2),
              )
          : null,
      a =
        !e && !V.anyOpen()
          ? (p = this.computer) == null
            ? void 0
            : p.target(
                this.player.eyePos(this.tmpV),
                this.player.lookDir(this.tmpV2),
              )
          : null,
      r =
        !e && !V.anyOpen()
          ? (m = this.casino) == null
            ? void 0
            : m.blackjack.target(
                this.player.eyePos(this.tmpV),
                this.player.lookDir(this.tmpV2),
              )
          : null,
      l = performance.now() - this.input.lockRequestedAt < 1100,
      c =
        !this.input.mobile &&
        !this.input.locked &&
        !V.anyOpen() &&
        !this.loadingShown &&
        this.player.alive &&
        !l;
    if ((this.clickToPlay.set(c), c)) V.setHint("");
    else if (a)
      V.setHint(
        `${z.language === "en" ? "Computer" : "Компьютер"} · ${U(t ? "useAction" : "rmbAction")} — ${this.inventory.held() === E.WELDER ? (z.language === "en" ? "Pack up" : "упаковать") : z.language === "en" ? "Open browser" : "открыть браузер"}`,
      );
    else if (r)
      V.setHint(
        `${r.kind === "blackjack" ? "BLACKJACK · " : ""}${U(t ? "useAction" : "rmbAction")} — ${z.language === "en" ? "Sit down" : "сесть"}`,
      );
    else if (o)
      V.setHint(
        `${o.game.title} · ${U(t ? "useAction" : "rmbAction")} — ${this.inventory.held() === E.WELDER ? (z.language === "en" ? "Pack up" : "упаковать") : z.language === "en" ? "Play" : "играть"}`,
      );
    else if (!e && wo(this.inventory.held()))
      V.setHint(
        ((y = this.blueprintPreview) == null ? void 0 : y.message) ||
          (z.language === "en"
            ? "Aim at the ground to site the building"
            : "Наведите на землю, чтобы разместить постройку"),
      );
    else if (this.mining)
      V.setHint(
        U("miningPercent", {
          pct: Math.min(
            100,
            Math.floor((this.mining.t / this.mining.need) * 100),
          ),
        }),
        !0,
      );
    else if (this.drops.blockedNearby) V.setHint(U("inventoryFullDrops"));
    else if (this.mounted)
      V.setHint(U(t ? "camelDismountTouchHint" : "camelDismountHint"));
    else if (!e && this.animals.nearestRideable(this.player.pos, 4.2))
      V.setHint(U(t ? "camelRideTouchHint" : "camelRideHint"));
    else if (
      !e &&
      this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet)
    ) {
      const g = t ? U("useAction") : gs(z.binds.use);
      V.setHint(
        z.language === "en"
          ? `${g} — teleport to the wild, where you can build`
          : `${g} — телепорт туда, где можно строить`,
      );
    } else if (!e && this.baseFlagHint(t)) V.setHint(this.baseFlagHint(t));
    else if (
      !e &&
      this.backpacks.raycastHit(
        this.player.eyePos(this.tmpV),
        this.camera.getWorldDirection(this.tmpV2),
        5.5,
      )
    )
      V.setHint(U(t ? "backpackTouchHint" : "backpackHint"));
    else if (
      (!e || this.vehicles.passengerCanRepair()) &&
      this.inventory.held() === E.WELDER
    ) {
      const g = this.player.eyePos(this.tmpV),
        b = this.camera.getWorldDirection(this.tmpV2),
        S = this.vehicles.rayHit(g, b, 10, this.vehicles.passengerCanRepair());
      if (S) {
        const M = this.vehicles.vehicles.get(S.id);
        if (M)
          if (M.ownerName === Mo) V.setHint(U("raidVehicleNoRepair"));
          else if (M.hp >= M.maxHp)
            V.setHint(
              U("vehicleFullHp", {
                vehicle: Zs(M.type),
                hp: M.hp,
                maxHp: M.maxHp,
              }),
            );
          else {
            const x = Dp(M.type),
              T = kg(M.maxHp),
              A = Math.ceil((M.maxHp - M.hp) / T),
              _ = x * A,
              C = !this.inventory.creative && V.getBalance() < x;
            V.setHint(
              C
                ? U("repairNeedMoney", { cost: x, balance: V.getBalance() })
                : U("repairInfo", {
                    cost: x,
                    heal: T,
                    clicksLeft: A,
                    totalLeft: _,
                    hp: M.hp,
                    maxHp: M.maxHp,
                  }),
            );
          }
        else V.setHint("");
        if (M && M.ownerName !== Mo) {
          const x = z.language === "en";
          V.setHint(
            `${V.currentHint()} · ${t ? (x ? "Use" : "Кнопка «Использовать»") : x ? "RMB" : "ПКМ"}: ${x ? "welder menu — armour, repair, packing" : "меню сварщика — броня, ремонт, упаковка"}`,
          );
        }
      } else V.setHint(U("aimHammerAtVehicle"));
    } else if (!e && this.player.seated)
      V.setHint(
        t
          ? U("chairExitTouchHint")
          : U("chairExitHint", { action: gs(z.binds.use) }),
      );
    else if (!e && this.vehicles.nearestFree(this.player.pos, 5))
      V.setHint(t ? "" : U("enterVehicleHint", { action: gs(z.binds.use) }));
    else if (this.player.flying && !e)
      V.setHint(U(t ? "flyTouchHint" : "flyHint"));
    else if (e) V.setHint("");
    else {
      const g = this.world.raycast(
        this.player.eyePos(this.tmpV),
        this.camera.getWorldDirection(this.tmpV2),
        5.5,
      );
      g && wG(g.block)
        ? V.setHint(
            t
              ? U("chairSitTouchHint")
              : U("chairSitHint", { action: gs(z.binds.use) }),
          )
        : V.setHint("");
    }
  }
  aimPointVisible(e, t, i, s, o) {
    var c;
    const a = this.tmpAimDir.set(t - e.x, i - e.y, s - e.z),
      r = a.length() - o;
    if (r <= 0) return !0;
    (a.normalize(), this.tmpAimLosOrigin.copy(e));
    let l = 0;
    for (let h = 0; h < 12 && l < r; h++) {
      const d = this.world.raycast(this.tmpAimLosOrigin, a, r - l);
      if (!d || l + d.dist >= r) return !0;
      if ((c = de[d.block]) != null && c.solid) return !1;
      const u = d.dist + 0.05;
      ((l += u), this.tmpAimLosOrigin.addScaledVector(a, u));
    }
    return l >= r;
  }
  vehicleIsEnemy(e) {
    if (this.vehicles.hostile(e)) return !0;
    if (this.front.active || e.driver === -1 || e.driver === this.myId)
      return !1;
    const t = this.remotes.getName(e.driver);
    return !!t && !this.friends.has(t) && !Xa(t);
  }
  aimCandidate(e, t, i, s, o, a) {
    var c;
    const r = this.aimList.length,
      l =
        (c = this.aimPool)[r] ??
        (c[r] = { key: e, x: t, y: i, z: s, radius: o, vehicle: a });
    ((l.key = e),
      (l.x = t),
      (l.y = i),
      (l.z = s),
      (l.radius = o),
      (l.vehicle = a),
      this.aimList.push(l));
  }
  aimHull(e) {
    let t = this.aimHulls.get(e);
    if (!t) {
      const i = new gn();
      for (const s of io[e] ?? []) i.union(s);
      (i.isEmpty() && i.set(new k(-1, 0, -1), new k(1, 2, 1)),
        (t = {
          x: (i.min.x + i.max.x) / 2,
          y: (i.min.y + i.max.y) / 2,
          z: (i.min.z + i.max.z) / 2,
          r: Ne(Math.min(i.max.x - i.min.x, i.max.z - i.min.z) / 2, 1, 3.5),
        }),
        this.aimHulls.set(e, t));
    }
    return t;
  }
  touchAimAssist(e, t) {
    var f;
    const i = this.inventory.held(),
      s = t && this.vehicles.aimsWithCamera(),
      o = s && this.vehicles.mineSeat === 0;
    if (!z.aimAssist || (t ? !s : !Cn[i]) || (s && !o && !Cn[i]))
      return (this.aimAssist.reset(), null);
    const a = this.aimFrame,
      r = this.tmpAimEye;
    let l;
    if (s) {
      const p = this.vehicles.aimRay();
      if (!p) return (this.aimAssist.reset(), null);
      (r.copy(p.pos),
        (a.yaw = Math.atan2(-p.dir.x, -p.dir.z)),
        (a.pitch = Math.asin(Ne(p.dir.y, -1, 1))),
        (a.zoom = o ? this.vehicles.gunZoom : 1),
        (l = 0.0022 / a.zoom),
        (a.ads = o && a.zoom > 1.05));
    } else
      (this.player.eyePos(r),
        (a.yaw = this.player.yaw),
        (a.pitch = this.player.pitch),
        (a.zoom = Ne(1 / Math.max(0.05, this.sensScale), 1, 8)),
        (l = 0.0022 * z.sensitivity * this.sensScale),
        (a.ads = this.input.mouseR && !!Cn[i]));
    ((a.dt = e),
      (a.eyeX = r.x),
      (a.eyeY = r.y),
      (a.eyeZ = r.z),
      (a.lookYaw = -this.input.mdx * l),
      (a.lookPitch = -this.input.mdy * l),
      (a.firing = this.input.mouseL),
      (a.moving =
        this.input.action("forward") ||
        this.input.action("back") ||
        this.input.action("left") ||
        this.input.action("right")),
      (a.deliberate = !!o),
      (a.strength = z.aimAssistStrength),
      (a.preferVehicles =
        (!!o &&
          ((f = this.vehicles.mine) == null ? void 0 : f.type) === P.TANK) ||
        i === E.RPG ||
        i === E.GRENADE_LAUNCHER));
    const c = this.aimList;
    c.length = 0;
    const h = z.nick,
      d = this.front.active && !!this.front.team;
    for (const p of this.remotes.list())
      p.name === h ||
        this.friends.has(p.name) ||
        Xa(p.name) ||
        this.remotes.disguiseOf(p.id) ||
        (d && !this.front.isEnemyPlayer(p.id)) ||
        this.aimCandidate(
          `p${p.id}`,
          p.pos.x,
          p.pos.y + 1.2,
          p.pos.z,
          0.45,
          !1,
        );
    for (const p of this.bots.list())
      if (!p.npc) {
        if (d) {
          if (this.front.botTeams.get(p.id) !== Al(this.front.team)) continue;
        } else if (
          !p.hostile &&
          (p.ownerName === h || this.friends.has(p.ownerName))
        )
          continue;
        this.aimCandidate(
          `b${p.id}`,
          p.pos.x,
          p.pos.y + 1.2,
          p.pos.z,
          0.45,
          !1,
        );
      }
    for (const p of this.vehicles.rendered()) {
      if (!this.vehicleIsEnemy(p)) continue;
      const m = this.aimHull(p.type),
        y = this.tmpAimCandidate
          .set(m.x, m.y, m.z)
          .applyQuaternion(p.quat)
          .add(p.pos);
      this.aimCandidate(`v${p.id}`, y.x, y.y, y.z, m.r, !0);
    }
    if (!c.length) return (this.aimAssist.reset(), null);
    const u = this.aimAssist.update(a, c, (p) =>
      this.aimPointVisible(r, p.x, p.y, p.z, p.vehicle ? p.radius + 1.5 : 0.35),
    );
    return (
      u.friction < 1 &&
        ((this.input.mdx *= u.friction), (this.input.mdy *= u.friction)),
      s &&
        (u.yaw !== 0 || u.pitch !== 0) &&
        ((this.vehicles.camYaw += u.yaw), (this.vehicles.camPitch += u.pitch)),
      u
    );
  }
  updateHitboxDebug() {
    if (!this.debugHitboxes) {
      this.hitboxGroup &&
        (this.scene.remove(this.hitboxGroup), (this.hitboxGroup = null));
      return;
    }
    (this.hitboxGroup ||
      ((this.hitboxGroup = new pe()), this.scene.add(this.hitboxGroup)),
      this.hitboxMat || (this.hitboxMat = new Eo({ color: 3669899 })),
      this.hitboxBoxGeo || (this.hitboxBoxGeo = new ag(new Ct(1, 1, 1))));
    const e = this.hitboxGroup;
    e.clear();
    const t = (o, a, r, l, c, h, d) => {
        const u = new Dl(this.hitboxBoxGeo, this.hitboxMat);
        (u.position.set(o, a, r),
          u.scale.set(l, c, h),
          d && u.quaternion.copy(d),
          e.add(u));
      },
      i = this.player.pos;
    for (const o of this.vehicles.debugShapes(i, 50))
      if (o.kind === "sphere") {
        const a = Math.round(o.r * 10);
        let r = this.hitboxSphereGeos.get(a);
        r ||
          ((r = new iH(new mn(o.r, 12, 8))), this.hitboxSphereGeos.set(a, r));
        const l = new Dl(r, this.hitboxMat);
        (l.position.copy(o.center), e.add(l));
      } else {
        const a = o.box.getSize(this.tmpV),
          r = a.x,
          l = a.y,
          c = a.z,
          h = o.box.getCenter(this.tmpV).applyQuaternion(o.quat).add(o.pos);
        t(h.x, h.y, h.z, r, l, c, o.quat);
      }
    const s = [
      ...this.remotes.hitboxes(),
      ...this.bots.hitboxes(),
      ...this.animals.hitboxes(),
    ];
    for (const o of s)
      Math.hypot(o.x - i.x, o.z - i.z) > 50 ||
        t(o.x, o.y + o.h / 2, o.z, o.hw * 2, o.h, (o.hz ?? o.hw) * 2, o.quat);
  }
  updateDroneSignalAndRange() {
    const e = this.vehicles.mine;
    if (!e || e.type !== P.DRONE || this.remote.open) {
      V.setDroneSignal(0);
      return;
    }
    const t = Math.max(48, (this.world.renderDist - 1) * 16),
      i = e.pos.distanceTo(this.player.pos),
      s = t * 0.8;
    if (i >= t) {
      (V.setDroneSignal(1), this.vehicles.detonateDrone());
      return;
    }
    V.setDroneSignal(i <= s ? 0 : (i - s) / (t - s));
  }
  seatRider(e, t) {
    e === this.myId
      ? ((this.player.mountRise = t ? Sx : 0), (this.player.mountSpeed = NH))
      : this.remotes.setMounted(e, t ? Sx : 0);
  }
  requestChairExit() {
    !this.player.seated ||
      this.chairExitPending ||
      ((this.chairExitPending = !0), this.net.send(new Xe(ue.C_SEAT).u8(1)));
  }
  get mounted() {
    return this.player.mountRise > 0;
  }
  tryInteract(e, t) {
    var r, l, c;
    if (
      ((r = this.computer) != null && r.interact(e, t)) ||
      ((l = this.casino) != null && l.interact(e, t))
    )
      return !0;
    if (
      this.inventory.held() === E.WELDER &&
      (!this.vehicles.mine || this.vehicles.passengerCanRepair())
    ) {
      const h = this.vehicles.rayHit(
        e,
        t,
        10,
        this.vehicles.passengerCanRepair(),
      );
      if (h) return (this.openWelderMenu(h.id), !0);
    }
    const i = this.backpacks.raycastHit(e, t, 5.5);
    if (i)
      return (
        this.net.send(new Xe(ue.C_BACKPACK).u8(0).u16(i.id).u16(0).u16(0)),
        this.weapons.swing(),
        !0
      );
    this.sendPlayerState();
    const s = this.world.raycast(e, t, 5.5),
      o = s && this.inventory.held() === E.FERTILIZER && yh(s.block),
      a =
        s &&
        s.block === v.PUMPKIN &&
        (this.inventory.held() === v.TORCH ||
          this.inventory.held() === v.CANDLE);
    if (
      s &&
      s.block === v.LED_SCREEN &&
      this.currentPlanet === Si.EARTH &&
      this.screens
    ) {
      const h = this.screens.at(s.bx, s.by, s.bz);
      if (h) {
        if (
          h.group.cells.some(
            (p) =>
              this.claimsUI &&
              !this.claimsUI.allowed(this.currentPlanet, p.x, p.z),
          )
        )
          return (
            V.addChat(
              2,
              z.language === "en"
                ? "Protected territory · access denied."
                : "Приват территории · нет доступа.",
            ),
            !0
          );
        const { bx: d, by: u, bz: f } = s;
        return (
          this.input.unlock(),
          cJ(
            h.content,
            h.group,
            (p) =>
              this.net.send(
                new Xe(ue.C_SCREEN).i32(d).u8(u).i32(f).str(JSON.stringify(p)),
              ),
            () => V.onResume(),
          ),
          this.weapons.swing(),
          !0
        );
      }
    }
    if (s && (((c = de[s.block]) != null && c.interactive) || o || a))
      return (
        this.net.send(new Xe(ue.C_USE_BLOCK).i32(s.bx).u8(s.by).i32(s.bz)),
        this.weapons.swing(),
        s.block === v.BED &&
          ((this.homePos = new k(s.bx + 0.5, s.by, s.bz + 0.5)),
          this.homeKey &&
            localStorage.setItem(
              this.homeKey,
              JSON.stringify({
                x: this.homePos.x,
                y: this.homePos.y,
                z: this.homePos.z,
              }),
            )),
        !0
      );
    if (this.input.mobile) {
      let h = null;
      const d = Math.floor(this.player.pos.x),
        u = Math.floor(this.player.pos.y),
        f = Math.floor(this.player.pos.z);
      for (let p = d - 4; p <= d + 4; p++)
        for (let m = Math.max(0, u - 1); m <= Math.min(127, u + 3); m++)
          for (let y = f - 4; y <= f + 4; y++) {
            if (!Bx(this.world.getBlock(p, m, y))) continue;
            const g = this.tmpAimCandidate
                .set(p + 0.5, m + 0.5, y + 0.5)
                .sub(e),
              b = g.length();
            if (b > 4.5 || b < 0.01 || g.dot(t) / b < 0.978) continue;
            const S = this.tmpAimBestDir.copy(g).divideScalar(b),
              M = this.world.raycast(e, S, b + 0.25);
            !M ||
              M.bx !== p ||
              M.by !== m ||
              M.bz !== y ||
              ((!h || b < h.dist) && (h = { x: p, y: m, z: y, dist: b }));
          }
      if (h)
        return (
          this.net.send(new Xe(ue.C_USE_BLOCK).i32(h.x).u8(h.y).i32(h.z)),
          this.weapons.swing(),
          !0
        );
    }
    return !1;
  }
  knifeVisuals() {
    return (
      this.knives ??
      (this.knives = new Eee(this.scene, this.world, {
        impact: (e, t) => {
          const i = e.distanceTo(this.player.pos);
          if (t === K2.HIT) {
            (this.effects.bloodHit(e), i < 40 && this.sfx.knifeHit(i));
            return;
          }
          const s = this.world.getBlock(
              Math.floor(e.x),
              Math.floor(e.y - 0.05),
              Math.floor(e.z),
            ),
            o = ca(s),
            a = o !== "wood" && o !== "dirt" && o !== "leaves" && o !== "sand";
          (this.effects.bulletImpact(
            e,
            t === K2.BROKEN ? 16765562 : a ? 14212578 : 9071173,
          ),
            i < 40 && this.sfx.knifeLand(a || t === K2.BROKEN, i));
        },
      }))
    );
  }
  handleKnife(e, t, i, s) {
    if (
      ((this.knifeThrowCd = Math.max(0, this.knifeThrowCd - e)),
      this.knifeThrowAt > 0)
    ) {
      t !== E.COMBAT_KNIFE || this.vehicles.driving() || !this.player.alive
        ? ((this.knifeThrowAt = 0), this.weapons.knifeCancel())
        : performance.now() >= this.knifeThrowAt &&
          ((this.knifeThrowAt = 0), this.releaseKnife(i, s));
      return;
    }
    if (
      this.input.clickR &&
      this.knifeThrowCd <= 0 &&
      !this.vehicles.driving()
    ) {
      ((this.knifeThrowAt = performance.now() + J_ * 1e3),
        this.weapons.knifeWindup(J_));
      return;
    }
    if (this.input.mouseL && this.meleeCd <= 0) {
      const o = fee,
        a = this.remotes.raycastHit(i, s, o),
        r = this.bots.raycastHit(i, s, a ? Math.min(a.dist, o) : o),
        l = this.animals.raycastHit(
          i,
          s,
          Math.min(
            (a == null ? void 0 : a.dist) ?? o,
            (r == null ? void 0 : r.dist) ?? o,
          ),
        );
      if (
        !(l || r || a
          ? this.world.raycast(
              i,
              s,
              Math.min(
                (l == null ? void 0 : l.dist) ?? o,
                (r == null ? void 0 : r.dist) ?? o,
                (a == null ? void 0 : a.dist) ?? o,
              ),
            )
          : null) &&
        (l || r || a)
      ) {
        const h = Math.round(uee * Xt.knifeDamage());
        (l
          ? (this.weapons.hooks.onHitAnimal(l.id, h),
            this.effects.bloodHit(l.point))
          : r
            ? (this.weapons.hooks.onHitBot(r.id, h, t, r.region),
              this.effects.bloodHit(r.point))
            : a &&
              (this.weapons.hooks.onHitPlayer(a.id, h, t, a.region),
              this.effects.bloodHit(a.point)),
          Xt.add("fight", 1),
          Xt.stat("punches", 1),
          this.sfx.knifeHit(),
          this.weapons.knifeStrike(),
          this.weapons.hooks.wearHeld(pee),
          (this.meleeCd = Q_ * Xt.knifeCooldown()));
        return;
      }
      if (
        this.input.clickL &&
        !this.world.raycast(i, s, 5.5) &&
        !this.vehicles.rayHit(i, s, o)
      ) {
        (this.weapons.knifeStrike(), (this.meleeCd = Q_ * Xt.knifeCooldown()));
        return;
      }
    }
    this.weapons.knifeBusy || this.handleMeleeAndMining(e, t, 0, i, s);
  }
  releaseKnife(e, t) {
    var o;
    const i = this.inventory.sel;
    if (
      ((o = this.inventory.hotbar[i]) == null ? void 0 : o.id) !==
      E.COMBAT_KNIFE
    ) {
      this.weapons.knifeCancel();
      return;
    }
    const s = e.clone().addScaledVector(t, 0.35);
    ((s.y -= 0.12),
      (this.knifeToken = (this.knifeToken + 1) & 65535),
      this.net.send(
        new Xe(ue.C_KNIFE_THROW)
          .u16(this.knifeToken)
          .u8(i)
          .f32(s.x)
          .f32(s.y)
          .f32(s.z)
          .f32(t.x)
          .f32(t.y)
          .f32(t.z),
      ),
      this.knifeVisuals().predict(
        this.myId,
        this.knifeToken,
        this.currentPlanet,
        s,
        t,
      ),
      this.weapons.knifeRelease(),
      (this.knifeThrowCd = yee),
      this.inventory.creative || this.inventory.removeFromSlot("h", i, 1),
      this.syncHeld(),
      V.renderHotbar());
  }
  requestRandomTeleport() {
    !this.running ||
      !this.player.alive ||
      (this.sfx.uiTick(!0), this.net.send(new Xe(ue.C_CHAT).str("/rtp")));
  }
  trySiteAction() {
    const e =
      this.worldSites.nearestCommand(this.player.pos, 5.5) ??
      this.worldSites.nearestFlag(this.player.pos, 6) ??
      this.worldSites.nearestVillage(this.player.pos, 5.5);
    return e ? (this.net.send(new Xe(ue.C_SITE_ACTION).str(e.id)), !0) : !1;
  }
  canSowHeld(e, t, i) {
    const s = p2[e];
    if (!s) return !1;
    const o = this.world.raycast(t, i, 5.5);
    return (
      !!o &&
      o.ny === 1 &&
      zx(s)(o.block) &&
      this.world.getBlock(o.bx, o.by + 1, o.bz) === v.AIR
    );
  }
  toggleHeadlights() {
    const e = this.vehicles.mine;
    if (!e || !Lm(e.type)) {
      V.setHint(U("headlightsMissing"));
      return;
    }
    const t = !this.vehicles.headlightsOn(e);
    ((z.headlightsOn[String(e.type)] = t),
      qi(),
      this.vehicles.setHeadlights(e, t),
      this.sfx.pickup(),
      V.setHint(U(t ? "headlightsOn" : "headlightsOff")));
  }
  syncHeadlights() {
    const e = this.vehicles.mine;
    if (e && Lm(e.type)) {
      const t = !!z.headlightsOn[String(e.type)];
      t !== this.vehicles.headlightsOn(e) && this.vehicles.setHeadlights(e, t);
    }
    for (const t of this.vehicles.vehicles.values()) {
      if (
        (t !== e &&
          t.ownerName === Mo &&
          Lm(t.type) &&
          this.vehicles.setHeadlights(t, this.sky.dayness < 0.3),
        t.type === P.HELI && t.headlights)
      ) {
        const i =
          t === e
            ? this.camera.quaternion
            : this.headlightAim.setFromEuler(
                this.headlightEuler.set(t.aux2, t.aux1, 0, "YXZ"),
              );
        for (const s of t.headlights)
          s.root.quaternion.copy(t.quat).invert().multiply(i);
      }
      if (t.headlights)
        for (const i of t.headlights) i.priority = t === e ? 1 : 0;
    }
  }
  flashlightKey(e) {
    return String(e === E.FLASHLIGHT ? 0 : Ti(e));
  }
  hasFlashlight(e) {
    return e === E.FLASHLIGHT || So(e).light;
  }
  toggleFlashlight() {
    const e = this.inventory.held();
    if (!this.hasFlashlight(e)) {
      V.setHint(U("flashlightMissing"));
      return;
    }
    const t = this.flashlightKey(e),
      i = !z.lightOn[t];
    ((z.lightOn[t] = i),
      qi(),
      this.sfx.pickup(),
      V.setHint(U(i ? "flashlightOn" : "flashlightOff")));
  }
  updateFlashlight() {
    var a;
    const e = this.inventory.held(),
      t =
        this.player.alive &&
        !this.player.downed &&
        !this.remote.open &&
        !this.vehicles.remoteView &&
        (!this.vehicles.driving() || this.vehicles.passengerCanShoot()) &&
        this.hasFlashlight(e) &&
        !!z.lightOn[this.flashlightKey(e)];
    if (
      (t &&
        !this.flashlight &&
        (this.flashlight = new S4(this.scene, { priority: 2 })),
      !this.flashlight)
    )
      return;
    const i =
      (a = this.selfBody) != null && a.group.visible
        ? this.selfBody.heldMesh.getObjectByName("flashlight-mount")
        : null;
    let s = !1;
    if (
      (t && i
        ? (i.getWorldPosition(this.flashlight.root.position),
          i.getWorldQuaternion(this.flashlight.root.quaternion),
          i.getWorldDirection(this.tmpV).negate(),
          this.flashlight.root.position.addScaledVector(this.tmpV, 0.055),
          (s = !0))
        : t &&
          (s = this.weapons.flashlightPose(
            this.flashlight.root.position,
            this.flashlight.root.quaternion,
          )),
      this.flashlight.setActive(!!s),
      !s)
    )
      return;
    const o =
      this.world.probeSky(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z,
      ) * this.sky.dayness;
    this.flashlight.setStrength(Math.max(0.25, 1 - o * 0.85));
  }
  placeHeld(e, t) {
    return this.inventory.deferChanges(() => this.placeHeldEdit(e, t));
  }
  placeHeldEdit(e, t) {
    const i = this.inventory.held();
    if (i <= 0 || (i >= 256 && i !== E.COMPUTER && !wo(i) && !Tl(i))) return !1;
    if (wo(i)) {
      const o = this.blueprintSite(e, t);
      return (o && this.tryPlace(i, o), !!o);
    }
    const s = this.world.raycast(e, t, 5.5);
    return s ? (this.tryPlace(i, s), !0) : !1;
  }
  allocateVehicleSpawnRequestId() {
    const e = this.nextVehicleSpawnRequestId;
    return ((this.nextVehicleSpawnRequestId = e >= 4294967295 ? 1 : e + 1), e);
  }
  openMobileStation() {
    (this.sendInventory(), this.net.send(new Xe(ue.C_REMOTE).u8(13)));
  }
  installRadio() {
    const e = this.player.eyePos(new k()),
      t = this.camera.getWorldDirection(new k()),
      i = this.vehicles.rayHit(e, t, 8);
    return i
      ? (this.sendInventory(),
        this.net.send(new Xe(ue.C_REMOTE).u8(1).u16(i.id)),
        this.weapons.swing(),
        !0)
      : !1;
  }
  weldFrame(e, t) {
    const i = performance.now();
    ((this.weldingUntil = i + 90),
      this.weapons.setWelding(!0),
      i >= this.weldSparkAt &&
        ((this.weldSparkAt = i + 45),
        this.effects.weldSparks(e, 1, t.clone().negate())),
      Math.random() < 0.55 &&
        this.effects.flash(e, 2.2 + Math.random() * 2.4, 0.06, 13032703),
      i >= this.weldSfxAt && ((this.weldSfxAt = i + 65), this.sfx.weldTick()),
      this.input.mobile && Math.random() < 0.08 && vo("light", 40));
  }
  openSkills() {
    if (this.skillsMenu.isOpen) {
      this.skillsMenu.close();
      return;
    }
    V.anyOpen() ||
      (this.input.unlock(), this.skillsMenu.open(), this.sfx.uiTick(!0));
  }
  openWelderMenu(e) {
    this.welderMenu.isOpen ||
      (this.input.unlock(), this.welderMenu.open(e), this.sfx.uiTick(!0));
  }
  toggleToolMode() {
    if (
      !this.running ||
      V.anyOpen() ||
      this.remote.open ||
      this.vehicles.driving() ||
      !this.player.alive ||
      this.player.downed
    )
      return;
    const e = this.inventory.held();
    this.toolModes.supports(e) &&
      (this.toolModes.toggle(e),
      (this.mining = null),
      this.sfx.drillStop(),
      this.sfx.toolModeSwitch(!!Nr[e], this.toolModes.mode(e) !== cs.SINGLE),
      vo("light", 90));
  }
  updateHealHud() {
    const e = this.inventory.held(),
      t = this.medkitChannel > 0,
      i = this.bandageChannel > 0,
      s = t
        ? this.medkitChannelItem === E.MILITARY_MEDKIT
          ? "military"
          : "medkit"
        : i
          ? "bandage"
          : null,
      o = t ? Ex : xx,
      a = t ? this.medkitChannel : this.bandageChannel,
      r = s ? { progress: 1 - a / o, left: a } : null,
      l = t || i ? 1 : 0;
    (this.healLanded
      ? (this.healHud.done(this.healLanded),
        this.weapons.medicalDone(),
        (this.healLanded = 0))
      : this.healChannelWas && !l && this.healHud.cancel(),
      (this.healChannelWas = l));
    const c = this.player.alive
      ? e === E.BANDAGE
        ? { left: this.bandageCd, total: nw }
        : e === E.MEDKIT
          ? { left: this.medkitCd, total: iw }
          : e === E.MILITARY_MEDKIT
            ? { left: this.militaryMedkitCd, total: tw }
            : null
      : null;
    (this.healHud.update(
      s,
      r,
      c,
      e === E.BANDAGE
        ? "bandage"
        : e === E.MILITARY_MEDKIT
          ? "military"
          : e === E.MEDKIT
            ? "medkit"
            : null,
    ),
      (this.weapons.medical = r && s ? { kind: s, p: r.progress } : null));
  }
  handleItemActions(e, t = e) {
    var l;
    ((this.breakCd = Math.max(0, this.breakCd - e)),
      (this.medkitCd = Math.max(0, this.medkitCd - t)),
      this.medkitChannel > 0 &&
        this.inventory.held() !== this.medkitChannelItem &&
        (this.medkitChannel = 0),
      (this.eatCd = Math.max(0, this.eatCd - e)),
      (this.bandageCd = Math.max(0, this.bandageCd - t)),
      (this.drillHitCd = Math.max(0, this.drillHitCd - e)),
      (this.meleeCd = Math.max(0, this.meleeCd - e)),
      (this.hammerCd = Math.max(0, this.hammerCd - e)));
    const i = this.inventory.held();
    (this.input.clickR || this.input.clickL) && this.sendPlayerState();
    const s = this.player.eyePos(this.tmpV),
      o = this.camera.getWorldDirection(this.tmpV2);
    if (this.input.clickR && this.toolModes.supports(i)) {
      this.toggleToolMode();
      return;
    }
    if (i === E.EGG) {
      this.input.clickR &&
        performance.now() >= this.eggThrowAt &&
        ((this.eggThrowAt = performance.now() + 350),
        this.net.send(
          new Xe(ue.C_EGG)
            .f32(s.x)
            .f32(s.y)
            .f32(s.z)
            .f32(o.x)
            .f32(o.y)
            .f32(o.z),
        ));
      return;
    }
    if (this.input.clickR && i === E.MOBILE_REMOTE) {
      this.openMobileStation();
      return;
    }
    if (this.input.clickR && i === E.RADIO_MODULE) {
      if (this.installRadio()) return;
      const c = this.world.raycast(s, o, 7);
      if (!c) return;
      if ((this.sendInventory(), c.block === v.SIGN))
        this.net.send(new Xe(ue.C_REMOTE).u8(18).i32(c.bx).u8(c.by).i32(c.bz));
      else {
        const h = c.bx + c.nx,
          d = c.by + c.ny,
          u = c.bz + c.nz;
        d > 0 &&
          d < 128 &&
          this.net.send(new Xe(ue.C_REMOTE).u8(15).i32(h).u8(d).i32(u));
      }
      this.weapons.swing();
      return;
    }
    if (this.input.clickR && Wv[i] !== void 0) {
      const c = this.vehicles.rayHit(s, o, 8);
      if (c) {
        const h = Wv[i];
        (this.vehicles.setCamo(c.id, h),
          this.sendInventory(),
          this.net.send(
            new Xe(ue.C_VEH_PAINT).u16(c.id).u16(i).u8(this.inventory.sel),
          ),
          this.inventory.creative || this.inventory.consumeHeld(),
          this.weapons.swing(),
          this.sfx.place(),
          V.renderHotbar(),
          this.syncHeld(),
          V.setHint(
            z.language === "en"
              ? "Vehicle camouflage changed"
              : "Камуфляж техники изменён",
          ));
        return;
      }
    }
    if (
      (this.medkitChannel > 0 &&
        (i !== this.medkitChannelItem
          ? (this.medkitChannel = 0)
          : ((this.medkitChannel -= t),
            this.medkitChannel <= 0 &&
              this.inventory.deferChanges(() => {
                this.inventory.consumeHeld() &&
                  (i === E.MILITARY_MEDKIT
                    ? (this.militaryMedkitCd = tw)
                    : (this.medkitCd = iw),
                  this.net.send(
                    new Xe(ue.C_HEAL).u8(i === E.MILITARY_MEDKIT ? zH : S2),
                  ),
                  this.sfx.healDone(),
                  (this.healLanded =
                    i === E.MILITARY_MEDKIT
                      ? Math.max(
                          1,
                          Math.round(this.player.maxHp - this.player.hp),
                        )
                      : S2),
                  V.renderHotbar());
              }))),
      this.bandageChannel > 0 &&
        (i !== E.BANDAGE
          ? (this.bandageChannel = 0)
          : ((this.bandageChannel -= t),
            this.bandageChannel <= 0 &&
              this.inventory.deferChanges(() => {
                this.inventory.consumeHeld() &&
                  ((this.bandageCd = nw),
                  this.net.send(new Xe(ue.C_HEAL).u8(E2)),
                  this.sfx.healDone(),
                  (this.healLanded = E2),
                  V.renderHotbar());
              }))),
      this.input.clickR && this.knifeThrowAt === 0 && this.tryInteract(s, o))
    )
      return;
    if (Fc(i)) {
      (this.input.clickR &&
        this.inventory.equipHeldArmor() &&
        (this.sendInventory(),
        V.renderHotbar(),
        this.syncHeld(),
        this.sfx.pickup()),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    if (i === E.COMBAT_KNIFE || this.knifeThrowAt > 0) {
      this.handleKnife(e, i, s, o);
      return;
    }
    if (i === E.MEDKIT || i === E.MILITARY_MEDKIT) {
      (this.input.clickR &&
        this.medkitChannel <= 0 &&
        (i === E.MILITARY_MEDKIT ? this.militaryMedkitCd : this.medkitCd) <=
          0 &&
        this.player.hp < this.player.maxHp &&
        ((this.medkitChannelItem = i),
        (this.medkitChannel = Ex),
        this.sfx.medkitOpen()),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    if (i === E.BANDAGE) {
      (this.input.clickR &&
        this.bandageChannel <= 0 &&
        this.bandageCd <= 0 &&
        this.player.hp < this.player.maxHp &&
        ((this.bandageChannel = xx), this.sfx.bandageRip()),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    if (i === E.FISHING_ROD) {
      if (this.input.clickR) {
        const c = this.fishing.localState(this.myId) !== ta.GONE,
          h = (d) => {
            const u = this.player.eyePos(this.tmpV),
              f = this.player.lookDir(this.tmpV2);
            (this.sendInventory(),
              this.net.send(
                new Xe(ue.C_FISH)
                  .u8(d)
                  .u8(this.inventory.sel)
                  .f32(u.x)
                  .f32(u.y)
                  .f32(u.z)
                  .f32(f.x)
                  .f32(f.y)
                  .f32(f.z),
              ));
          };
        if (c) (this.weapons.rodStrike(), h(1), this.sfx.reelIn());
        else if (!this.weapons.rodBusy() && !this.fishing.landing(this.myId)) {
          const d = this.inventory.sel;
          this.weapons.rodCast(() => {
            this.inventory.sel === d &&
              this.inventory.held() === E.FISHING_ROD &&
              h(0);
          });
        }
      }
      this.handleMeleeAndMining(e, i, 0, s, o);
      return;
    }
    if (
      i === E.SHEARS ||
      (i === E.BUCKET && this.animals.nearestMilkable(this.player.pos, 4.5))
    ) {
      (this.input.clickR &&
        (this.sendInventory(),
        this.net.send(new Xe(ue.C_USE_ITEM).u16(i)),
        this.weapons.swing()),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    if (
      (j0[i] || i === E.WHEAT) &&
      !(this.input.clickR && this.canSowHeld(i, s, o))
    ) {
      (this.input.clickR &&
        this.eatCd <= 0 &&
        ((this.eatCd = IH),
        this.sendInventory(),
        this.net.send(new Xe(ue.C_USE_ITEM).u16(i)),
        this.weapons.swing(),
        this.sfx.pickup()),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    if (wo(i)) {
      (this.input.clickR && this.placeHeld(s, o),
        this.handleMeleeAndMining(e, i, 0, s, o));
      return;
    }
    const a = p2[i];
    if (a) {
      if (this.input.clickR) {
        const c = this.world.raycast(s, o, 5.5);
        if (c && c.ny === 1 && zx(a)(c.block)) {
          const h = c.bx,
            d = c.by + 1,
            u = c.bz;
          let f = pC(a);
          for (let p = -8; p <= 8 && !f; p++)
            for (let m = -8; m <= 8 && !f; m++)
              if (!(p * p + m * m > 64)) {
                for (let y = -2; y <= 2; y++)
                  if (this.world.getBlock(h + p, c.by + y, u + m) === v.WATER) {
                    f = !0;
                    break;
                  }
              }
          f &&
          this.world.getBlock(h, d, u) === v.AIR &&
          this.inventory.consumeHeld()
            ? (this.world.setBlock(h, d, u, a, 0),
              this.net.send(
                new Xe(ue.C_SET_BLOCK).i32(h).u8(d).i32(u).u8(a).u8(0),
              ),
              this.sfx.place(),
              this.weapons.swing(),
              this.syncHeld(),
              V.renderHotbar())
            : f ||
              V.setHint(
                U("wheatSeedsHint", {
                  action: this.input.mobile ? U("useAction") : U("rmbAction"),
                }),
              );
        }
      }
      this.handleMeleeAndMining(e, i, 0, s, o);
      return;
    }
    if (i === E.BUCKET || i === E.WATER_BUCKET || i === E.LAVA_BUCKET) {
      if (this.input.clickR) {
        let c = null;
        if (i === E.BUCKET) {
          const h = this.world.raycast(s, o, 5.5, !0);
          h &&
            (h.block === v.WATER || h.block === v.LAVA) &&
            (this.world.getMeta(h.bx, h.by, h.bz) & 15) === 0 &&
            (c = h);
        } else {
          const h = this.world.raycast(s, o, 5.5);
          h && (c = { bx: h.bx + h.nx, by: h.by + h.ny, bz: h.bz + h.nz });
        }
        c &&
          c.by > 0 &&
          c.by < 127 &&
          (this.sendInventory(),
          this.net.send(
            new Xe(ue.C_BUCKET)
              .u8(this.inventory.sel)
              .u16(i)
              .i32(c.bx)
              .u8(c.by)
              .i32(c.bz),
          ),
          this.weapons.swing(),
          this.sfx.place());
      }
      this.handleMeleeAndMining(e, i, 0, s, o);
      return;
    }
    if (i === E.AXE) {
      if (this.input.clickL || this.input.clickR) {
        const c = this.world.raycast(s, o, 80);
        c &&
          (this.worldedit.setPoint(this.input.clickL ? 1 : 2, c.bx, c.by, c.bz),
          this.weapons.swing(),
          this.weapons.hooks.wearHeld(1));
      }
      return;
    }
    if (i === E.WELDER) {
      const c = this.vehicles.rayHit(
          s,
          o,
          6,
          this.vehicles.passengerCanRepair(),
        ),
        h = c ? this.vehicles.vehicles.get(c.id) : void 0;
      if (this.input.mouseL && c && h) {
        const d = s.clone().addScaledVector(o, c.dist - 0.04);
        if ((this.weldFrame(d, o), this.hammerCd <= 0))
          if (((this.hammerCd = 0.45), h.ownerName === Mo))
            V.setHint(U("raidVehicleNoRepair"));
          else if (h.hp >= h.maxHp)
            V.setHint(U("vehicleAlreadyFullHp", { vehicle: Zs(h.type) }));
          else {
            const u = Dp(h.type);
            !this.inventory.creative && V.getBalance() < u
              ? V.setHint(U("notEnoughMoney", { cost: u }))
              : (this.net.send(new Xe(ue.C_VEH_REPAIR).u16(h.id)),
                this.weapons.hooks.wearHeld(1));
          }
      } else
        this.input.mouseL &&
          this.hammerCd <= 0 &&
          ((this.hammerCd = 0.5), this.sfx.weldTick(4));
      return;
    }
    if (xa(i) || i === E.DETONATOR) {
      if (
        xa(i) &&
        this.spawnNotice.contains(
          this.player.pos.x,
          this.player.pos.z,
          this.currentPlanet,
        )
      ) {
        (this.input.clickL || this.input.clickR) &&
          this.spawnNotice.deny("explosive", z.language === "en");
        return;
      }
      (this.input.clickL || this.input.clickR) &&
        performance.now() >= this.c4ActionAt &&
        ((this.c4ActionAt = performance.now() + 500),
        this.sendInventory(),
        xa(i)
          ? this.net.send(
              new Xe(ue.C_C4_THROW)
                .f32(s.x)
                .f32(s.y)
                .f32(s.z)
                .f32(o.x)
                .f32(o.y)
                .f32(o.z)
                .u8(this.input.clickR ? 1 : 0),
            )
          : this.net.send(new Xe(ue.C_DETONATE)),
        this.weapons.swing(),
        xa(i) ? this.sfx.c4Throw() : this.sfx.detonatorClick());
      return;
    }
    if (i === E.MILITARY_BOT) {
      if (this.input.clickR) {
        const c = this.world.raycast(s, o, 5.5);
        if (c) {
          const h = c.bx + c.nx + 0.5,
            d = c.by + c.ny + 0.05,
            u = c.bz + c.nz + 0.5;
          if (
            this.inventory.creative ||
            ((l = this.inventory.hotbar[this.inventory.sel]) == null
              ? void 0
              : l.count) > 0
          ) {
            const f = this.allocateVehicleSpawnRequestId();
            (this.pendingVehicleSpawns.set(f, {
              itemId: i,
              slot: this.inventory.sel,
              type: -1,
            }),
              this.sendInventory(),
              this.net.send(new Xe(ue.C_BOT_SPAWN).f32(h).f32(d).f32(u).u32(f)),
              this.weapons.swing(),
              V.renderHotbar(),
              this.syncHeld());
          }
        }
      }
      this.handleMeleeAndMining(e, i, 0, s, o);
      return;
    }
    if (l3[i] !== void 0) {
      const c = i === E.DRONE && this.front.active;
      if (this.input.clickR || (c && this.input.clickL)) {
        const h = this.allocateVehicleSpawnRequestId();
        (
          c
            ? this.vehicles.launchFromHand(P.DRONE, s, o, h) ||
              this.vehicles.requestSpawn(P.DRONE, s, o, h)
            : this.vehicles.requestSpawn(l3[i], s, o, h)
        )
          ? (this.pendingVehicleSpawns.set(h, {
              itemId: i,
              slot: this.inventory.sel,
              type: l3[i],
            }),
            this.weapons.swing(),
            V.renderHotbar(),
            this.syncHeld())
          : this.vehicles.spawnCd > 0 ||
            V.addChat(2, U("vehiclePlacementFailed"));
      }
      c || this.handleMeleeAndMining(e, i, 0, s, o);
      return;
    }
    this.input.clickR && this.placeHeld(s, o);
    const r = b0[i] ?? 0;
    this.handleMeleeAndMining(e, i, r, s, o, Nr[i] ?? 0);
  }
  handleMeleeAndMining(e, t, i, s, o, a = 0) {
    if (i > 0 && this.input.mouseL && this.drillHitCd <= 0) {
      const c = this.remotes.raycastHit(s, o, 3),
        h = this.bots.raycastHit(s, o, c ? Math.min(c.dist, 3) : 3),
        d = this.animals.raycastHit(
          s,
          o,
          Math.min(
            (c == null ? void 0 : c.dist) ?? 3,
            (h == null ? void 0 : h.dist) ?? 3,
          ),
        ),
        u = 7 + i * 3;
      d
        ? (this.weapons.hooks.onHitAnimal(d.id, u),
          this.effects.bloodHit(d.point),
          (this.drillHitCd = 0.35),
          this.weapons.hooks.wearHeld(1))
        : h
          ? (this.weapons.hooks.onHitBot(h.id, u, t, h.region),
            this.effects.bloodHit(h.point),
            (this.drillHitCd = 0.35),
            this.weapons.hooks.wearHeld(1))
          : c &&
            (this.weapons.hooks.onHitPlayer(c.id, u, t, c.region),
            this.effects.bloodHit(c.point),
            (this.drillHitCd = 0.35),
            this.weapons.hooks.wearHeld(1));
    }
    const r = !!Cn[t];
    if (i === 0 && !r && this.input.mouseL && this.meleeCd <= 0) {
      const c = this.remotes.raycastHit(s, o, 3.2),
        h = this.bots.raycastHit(s, o, c ? Math.min(c.dist, 3.2) : 3.2),
        d = this.animals.raycastHit(
          s,
          o,
          Math.min(
            (c == null ? void 0 : c.dist) ?? 3.2,
            (h == null ? void 0 : h.dist) ?? 3.2,
          ),
        ),
        u = d || h || c ? null : this.vehicles.rayHit(s, o, 3.2),
        f = Math.round(12 * Xt.fistMul());
      if (((d || h || c) && (Xt.add("fight", 1), Xt.stat("punches", 1)), u)) {
        const p = s.clone().addScaledVector(o, u.dist);
        (this.sendPlayerState(),
          this.weapons.hooks.onHitVehicle(u.id, 2, p, 1, s),
          this.effects.bulletImpact(p, 16764006),
          this.weapons.swing(),
          (this.meleeCd = 0.45));
      } else
        d
          ? (this.weapons.hooks.onHitAnimal(d.id, f),
            this.effects.bloodHit(d.point),
            this.sfx.punchHit(t !== 0),
            this.weapons.swing(),
            (this.meleeCd = 0.45))
          : h
            ? (this.weapons.hooks.onHitBot(h.id, f, t, h.region),
              this.effects.bloodHit(h.point),
              this.sfx.punchHit(t !== 0),
              this.weapons.swing(),
              (this.meleeCd = 0.45))
            : c &&
              (this.weapons.hooks.onHitPlayer(c.id, f, t, c.region),
              this.effects.bloodHit(c.point),
              this.sfx.punchHit(t !== 0),
              this.weapons.swing(),
              (this.meleeCd = 0.45));
    }
    if (
      !r &&
      this.input.mouseL &&
      this.breakCd <= 0 &&
      !(this.front.active && !this.inventory.creative)
    ) {
      const l = this.world.raycast(s, o, 5.5);
      if (l && de[l.block].hardness >= 0) {
        if (
          Ca !== "owner" &&
          this.spawnNotice.protectedBlock(l.bx, l.bz, this.currentPlanet)
        ) {
          ((this.input.clickL || !this.mining) &&
            this.spawnNotice.deny("break", z.language === "en"),
            (this.mining = {
              x: l.bx,
              y: l.by,
              z: l.bz,
              block: l.block,
              t: 0,
              need: 1 / 0,
            }));
          return;
        }
        if (
          !this.inventory.creative &&
          this.currentPlanet === Si.MOON &&
          hz.has(l.block) &&
          t !== E.LUNAR_DRILL
        ) {
          (V.setHint(
            Ns("Lunar blocks require a white lunar drill", z.language),
          ),
            (this.mining = null));
          return;
        }
        if (!this.inventory.creative && l.block === v.RSTONE && i < 2) {
          (V.setHint(U("rstoneNeedsDiamondDrill")), (this.mining = null));
          return;
        }
        if (this.inventory.creative)
          (this.finishBreak(l.bx, l.by, l.bz, l.block), (this.breakCd = 0.12));
        else {
          const c = this.mineTime(l.block, i, a);
          ((!this.mining ||
            this.mining.x !== l.bx ||
            this.mining.y !== l.by ||
            this.mining.z !== l.bz ||
            this.mining.block !== l.block) &&
            (this.mining = {
              x: l.bx,
              y: l.by,
              z: l.bz,
              block: l.block,
              t: 0,
              need: c,
            }),
            (this.mining.t += e));
          const h = Math.min(1, this.mining.t / this.mining.need);
          (V.setMiningProgress(h),
            (this.minedThisFrame = !0),
            this.weapons.setMining(!0, h),
            (i > 0 || a > 0) && this.sfx.drillUpdate(h),
            (this.chipT -= e),
            this.chipT <= 0 &&
              ((this.chipT = 0.07),
              this.effects.mineChips(l.point, de[l.block].color, h),
              i === 0 && this.sfx.mineHit(h, l.block)),
            this.mining.t >= this.mining.need &&
              (this.finishBreak(l.bx, l.by, l.bz, l.block),
              (i > 0 || a > 0) &&
                !CM(t, l.block, this.toolModes.mode(t)) &&
                this.weapons.hooks.wearHeld(
                  AI(t, this.toolModes.mode(t), this.player.crouching) &&
                    t1(l.block)
                    ? 2
                    : 1,
                ),
              (this.mining = null),
              (this.breakCd = 0.18)));
        }
      } else this.mining = null;
    } else this.input.mouseL || (this.mining = null);
  }
  mineTime(e, t, i = 0) {
    return RZ(
      e,
      this.inventory.held(),
      Xt.mineMul(),
      Xt.woodMul(),
      this.player.crouching,
      this.toolModes.mode(this.inventory.held()),
    );
  }
  finishBreak(e, t, i, s) {
    var h, d;
    if (
      Ca !== "owner" &&
      this.spawnNotice.protectedBlock(e, i, this.currentPlanet)
    ) {
      this.spawnNotice.deny("break", z.language === "en");
      return;
    }
    if (
      Ca !== "owner" &&
      this.claimsUI &&
      !this.claimsUI.canBreak(this.currentPlanet, e, t, i)
    ) {
      V.setHint(
        z.language === "en"
          ? "Protected territory · access denied"
          : "Приват территории · нет доступа",
      );
      return;
    }
    if (
      Ca !== "owner" &&
      this.currentPlanet === Si.EARTH &&
      (h = this.casino) != null &&
      h.hallAt(e, t, i)
    ) {
      V.setHint(
        z.language === "en"
          ? "Olympus Casino is private property"
          : "Казино «Олимп» — частная территория",
      );
      return;
    }
    if (s === v.OWNERSHIP_TOTEM) {
      (this.net.send(new Xe(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0)),
        this.weapons.breakPop());
      return;
    }
    const o = this.toolModes.mode(this.inventory.held());
    if (CM(this.inventory.held(), s, o)) {
      (this.sendInventory(),
        this.sendPlayerState(),
        this.net.send(
          new Xe(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0).u8(o),
        ),
        this.trainingMined++,
        this.weapons.breakPop(),
        this.sfx.breakBlock(s),
        vo("light", 90));
      return;
    }
    const a = s === v.CAKE && this.world.getMeta(e, t, i) === 0;
    (this.world.setBlock(e, t, i, 0),
      this.net.send(
        new Xe(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0).u8(o),
      ),
      this.trainingMined++);
    const r =
        s === v.RADIO_RELAY
          ? E.RADIO_MODULE
          : s === v.COAL_ORE
            ? E.COAL
            : s === v.GRASS || s === v.SAVANNA_GRASS
              ? v.DIRT
              : s,
      l =
        !$n(s) &&
        !yh(s) &&
        s !== v.FIRE &&
        s !== v.TALL_GRASS &&
        s !== v.DESERT_GRASS &&
        (s !== v.CAKE || a),
      c = l ? this.inventory.addItem(r) : 0;
    (!$n(s) &&
      !Bo(s) &&
      !yh(s) &&
      s !== v.FIRE &&
      (((d = de[s]) == null ? void 0 : d.hardness) ?? 0) > 2 &&
      (ca(s) === "wood"
        ? (Xt.add("wood", 1), Xt.stat("logs", 1))
        : (Xt.add("mine", ca(s) === "ore" ? 2 : 1), Xt.stat("blocks", 1))),
      this.effects.blockBreak(new k(e + 0.5, t + 0.5, i + 0.5), de[s].color, s),
      this.sfx.breakBlock(s),
      vo("light", 90),
      this.effects.addTrauma(0.09),
      this.weapons.breakPop(),
      yh(s)
        ? V.showMineGain(Ki(Gse[s] ?? E.WHEAT_SEEDS))
        : l && c > 0 && V.showMineGain(r >= 256 ? Ki(r) : kd(de[r])),
      V.renderHotbar());
  }
  updateMiningVisual() {
    if (!this.mining) {
      this.miningMesh && (this.miningMesh.visible = !1);
      return;
    }
    this.crackMats ||
      (this.crackMats = Aie().map(
        (a) =>
          new qt({
            map: a,
            transparent: !0,
            depthWrite: !1,
            side: Ai,
            polygonOffset: !0,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
          }),
      ));
    let e = this.world.getMeta(this.mining.x, this.mining.y, this.mining.z);
    (Hr(this.mining.block) &&
      (e =
        (e & -4) |
        kp(
          (a, r, l) => this.world.getBlock(a, r, l),
          this.mining.x,
          this.mining.y,
          this.mining.z,
          e,
        )),
      (!this.miningMesh ||
        this.miningVisualBlock !== this.mining.block ||
        this.miningMesh.userData.blockMeta !== e) &&
        (this.miningMesh &&
          (this.scene.remove(this.miningMesh),
          this.miningMesh.traverse((a) => {
            var l;
            (l = a.geometry) == null || l.dispose();
          })),
        (this.miningMesh = this.buildMiningVisual(
          this.mining.block,
          this.crackMats[0],
          e,
        )),
        (this.miningMesh.userData.blockMeta = e),
        (this.miningVisualBlock = this.mining.block),
        (this.miningStage = -1),
        this.scene.add(this.miningMesh)));
    const t = Ne(this.mining.t / this.mining.need, 0, 1);
    ((this.miningMesh.visible = !0),
      this.miningMesh.position.set(
        this.mining.x + 0.5,
        this.mining.y,
        this.mining.z + 0.5,
      ));
    const i = Math.min(
      this.crackMats.length - 1,
      Math.floor(t * this.crackMats.length),
    );
    i !== this.miningStage &&
      (i > this.miningStage && (this.miningPopAt = performance.now()),
      (this.miningStage = i),
      this.miningMesh.traverse((a) => {
        const r = a;
        r.isMesh && (r.material = this.crackMats[i]);
      }));
    const s = Math.max(0, 1 - (performance.now() - this.miningPopAt) / 140),
      o = 1 + 0.03 * s * s;
    this.miningMesh.scale.set(o, o, o);
  }
  buildMiningVisual(e, t, i = 0) {
    var r;
    const s = new pe(),
      o = (l, c, h, d = 0, u = 0, f = 0) => {
        const p = new le(new Ct(l, c, h), t);
        (p.position.set(d, u, f), (p.renderOrder = Gi.marker), s.add(p));
      },
      a = ((r = de[e]) == null ? void 0 : r.shape) ?? "cube";
    if (Hr(e))
      for (const [l, c, h, d, u, f] of Tw(e, i & 3))
        o(
          d - l + 0.005,
          u - c + 0.005,
          f - h + 0.005,
          (l + d) / 2 - 0.5,
          (c + u) / 2,
          (h + f) / 2 - 0.5,
        );
    else if (a === "furniture")
      for (const {
        box: [l, c, h, d, u, f],
      } of ru(e, i))
        o(
          d - l + 0.005,
          u - c + 0.005,
          f - h + 0.005,
          (l + d) / 2 - 0.5,
          (c + u) / 2,
          (h + f) / 2 - 0.5,
        );
    else if (a === "plant")
      for (const l of [Math.PI / 4, -Math.PI / 4]) {
        const c = new le(new pn(1.04, 1.04), t);
        ((c.position.y = 0.5),
          (c.rotation.y = l),
          (c.renderOrder = Gi.marker),
          s.add(c));
      }
    else if (a === "bush") {
      const l = mC(e),
        c = l <= 0 ? 0.34 : l === 1 ? 0.62 : 0.92,
        h = (l <= 0 ? 0.16 : l === 1 ? 0.27 : 0.36) * 2.3;
      o(h, c, h, 0, c / 2, 0);
    } else
      a === "torch"
        ? o(0.2, 0.82, 0.2, 0, 0.41, 0)
        : a === "flat"
          ? o(1.01, 0.065, 1.01, 0, 0.035, 0)
          : a === "ladder"
            ? o(1.01, 1.01, 0.065, 0, 0.5, 0)
            : a === "bed"
              ? o(1.01, 0.58, 1.01, 0, 0.29, 0)
              : a === "door"
                ? o(1.01, 1.01, 0.13, 0, 0.5, 0)
                : a === "stair"
                  ? (o(1.01, 0.5, 1.01, 0, 0.25, 0),
                    o(1.01, 0.5, 0.51, 0, 0.75, 0.25))
                  : a === "fence" || a === "gate"
                    ? (o(0.22, 1.01, 0.22, 0, 0.5, 0),
                      o(1.01, 0.16, 0.16, 0, 0.36, 0),
                      o(1.01, 0.16, 0.16, 0, 0.72, 0))
                    : a === "snow"
                      ? o(1.01, 0.14, 1.01, 0, 0.07, 0)
                      : a === "cake"
                        ? o(0.88, 0.52, 0.88, 0, 0.26, 0)
                        : a === "chain" || a === "wire"
                          ? o(0.15, 1.01, 0.15, 0, 0.5, 0)
                          : o(1.002, 1.002, 1.002, 0, 0.5, 0);
    return s;
  }
  blueprintSite(e, t) {
    var s;
    const i = this.world.raycast(e, t, 5.5);
    if (!i) return null;
    if (i.ny === 1) return i;
    if (!Bo(i.block)) return null;
    for (let o = i.by; o > i.by - 4 && o > 0; o--) {
      const a = this.world.getBlock(i.bx, o - 1, i.bz);
      if (a !== v.AIR && !Bo(a) && (s = de[a]) != null && s.solid)
        return { ...i, by: o - 1, ny: 1 };
    }
    return null;
  }
  yawFacing() {
    const e = -Math.sin(this.player.yaw),
      t = -Math.cos(this.player.yaw);
    return Math.abs(e) > Math.abs(t) ? (e > 0 ? 1 : 3) : t > 0 ? 2 : 0;
  }
  layBattleMine(e, t) {
    var d;
    const i = z.language === "en",
      s = Bo(this.world.getBlock(t.bx, t.by, t.bz)),
      o = t.bx + (s ? 0 : t.nx),
      a = t.by + (s ? 0 : t.ny),
      r = t.bz + (s ? 0 : t.nz),
      l = this.world.getBlock(o, a, r),
      c = this.world.getBlock(o, a - 1, r),
      h =
        (!s && t.ny !== 1) ||
        (l !== v.AIR && !Bo(l)) ||
        !((d = de[c]) != null && d.solid)
          ? i
            ? "A mine goes on firm, open ground"
            : "Мина ставится на твёрдую открытую землю"
          : this.front.mineRefusal(o, r);
    if (h) {
      V.setHint(h);
      return;
    }
    this.inventory.consumeHeld() &&
      (this.world.setBlock(o, a, r, e, 0),
      this.net.send(new Xe(ue.C_SET_BLOCK).i32(o).u8(a).i32(r).u8(e).u8(0)),
      this.sfx.place(e),
      this.weapons.swing(),
      this.syncHeld(),
      V.renderHotbar());
  }
  tryPlace(e, t) {
    var p, m, y;
    if (this.front.active && !this.inventory.creative) {
      Vx(e) && this.layBattleMine(e, t);
      return;
    }
    const i = t.bx + t.nx,
      s = t.by + t.ny,
      o = t.bz + t.nz;
    if (this.spawnNotice.protectedBlock(i, o, this.currentPlanet)) {
      this.spawnNotice.deny("build", z.language === "en");
      return;
    }
    if (
      this.currentPlanet === Si.EARTH &&
      (p = this.casino) != null &&
      p.hallAt(i, s, o)
    ) {
      V.setHint(
        z.language === "en"
          ? "Casino grounds · building is not allowed"
          : "Территория казино · строительство запрещено",
      );
      return;
    }
    if (e === E.COMPUTER) {
      if (
        !Ap(Ca, su, "computer.use") ||
        t.ny !== 1 ||
        performance.now() < this.blueprintActionAt
      )
        return;
      ((this.blueprintActionAt = performance.now() + 700),
        this.sendInventory(),
        this.net.send(
          new Xe(ue.C_COMPUTER).str(
            JSON.stringify({
              action: "place",
              x: t.bx,
              y: t.by + 1,
              z: t.bz,
              rotation: this.yawFacing(),
            }),
          ),
        ),
        this.weapons.swing());
      return;
    }
    if (Tl(e)) {
      if (t.ny !== 1 || performance.now() < this.blueprintActionAt) return;
      ((this.blueprintActionAt = performance.now() + 700),
        this.sendInventory(),
        this.net.send(
          new Xe(ue.C_CASINO).str(
            JSON.stringify({
              action: "place",
              item: e,
              x: t.bx,
              y: t.by + 1,
              z: t.bz,
              rotation: this.yawFacing(),
            }),
          ),
        ),
        this.weapons.swing());
      return;
    }
    if (wo(e)) {
      if (t.ny !== 1 || performance.now() < this.blueprintActionAt) return;
      ((this.blueprintActionAt = performance.now() + 700),
        this.sendInventory(),
        this.net.send(
          new Xe(ue.C_BLUEPRINT)
            .u16(e)
            .i32(t.bx)
            .u8(t.by + 1)
            .i32(t.bz)
            .u8(this.yawFacing()),
        ),
        this.weapons.swing());
      return;
    }
    const a = t.bx + t.nx,
      r = t.by + t.ny,
      l = t.bz + t.nz;
    if (this.claimsUI && !this.claimsUI.allowed(this.currentPlanet, a, l)) {
      V.setHint(
        z.language === "en"
          ? "Protected territory · access denied"
          : "Приват территории · нет доступа",
      );
      return;
    }
    if (
      this.currentPlanet === Si.EARTH &&
      (m = this.casino) != null &&
      m.hallAt(a, r, l)
    ) {
      V.setHint(
        z.language === "en"
          ? "Olympus Casino is private property"
          : "Казино «Олимп» — частная территория",
      );
      return;
    }
    if (e === v.OWNERSHIP_TOTEM) {
      if (performance.now() < this.blueprintActionAt) return;
      ((this.blueprintActionAt = performance.now() + 500),
        this.sendInventory(),
        this.net.send(new Xe(ue.C_SET_BLOCK).i32(a).u8(r).i32(l).u8(e).u8(0)),
        this.weapons.swing());
      return;
    }
    const c = (g, b, S) => {
        const M = this.world.getBlock(g, b, S);
        return M === v.AIR || M === v.WATER || M === v.LAVA;
      },
      h = de[e];
    if (
      r < 0 ||
      r >= 127 ||
      !c(a, r, l) ||
      (h.solid && this.intersectsPlayer(a, r, l)) ||
      ([v.REDSTONE, v.LEVER, v.BUTTON, v.PLATE, v.REPEATER, v.SIGN].includes(
        e,
      ) &&
        !((y = de[this.world.getBlock(t.bx, t.by, t.bz)]) != null && y.solid))
    )
      return;
    let d = 0;
    const u = (g) =>
      t.ny === 1 && g
        ? 0
        : t.ny === -1 && [v.REDSTONE, v.LEVER, v.BUTTON].includes(e)
          ? Mp
          : t.nx === 1
            ? 1
            : t.nx === -1
              ? 2
              : t.nz === 1
                ? 3
                : t.nz === -1
                  ? 4
                  : null;
    if (e === v.SIGN)
      if (t.ny === 1) d = (4 - this.yawFacing()) & 3;
      else if (t.ny === 0)
        d = 4 | (t.nx === 1 ? 1 : t.nx === -1 ? 3 : t.nz === 1 ? 0 : 2);
      else return;
    else if (e === v.LANTERN)
      if (t.ny === -1) d = Mp;
      else {
        const g = u(!0);
        if (g === null) return;
        d = g;
      }
    else if (
      h.shape === "torch" ||
      e === v.LADDER ||
      e === v.REDSTONE ||
      e === v.LEVER ||
      e === v.BUTTON
    ) {
      const g = u(e !== v.LADDER);
      if (g === null) return;
      d = g;
    } else if (e === v.CANDLE) {
      if (t.ny !== 1) return;
    } else if (e === v.HANGING_HERBS) {
      if (t.ny !== -1) return;
    } else if (e === v.PUMPKIN || e === v.JACK_O_LANTERN)
      d = Yv(this.player.pos.x, this.player.pos.z, a, l);
    else if (e === v.PLATE || e === v.REPEATER) {
      if (t.ny !== 1) return;
      d = e === v.REPEATER ? this.yawFacing() : 0;
    } else if (e === v.PISTON || e === v.SPISTON)
      this.player.pitch > 1
        ? (d = 0)
        : this.player.pitch < -1
          ? (d = 1)
          : (d = [5, 2, 4, 3][this.yawFacing()]);
    else if (e === v.FURNACE)
      d = Yv(this.player.pos.x, this.player.pos.z, a, l);
    else if (e === v.LED_SCREEN) {
      const g =
          this.world.getBlock(t.bx, t.by, t.bz) === v.LED_SCREEN
            ? this.world.getMeta(t.bx, t.by, t.bz) & 3
            : -1,
        [b, S] = g >= 0 ? xo[g] : [0, 0];
      d =
        g >= 0 && t.nx * b + t.nz * S === 0
          ? g
          : Yv(this.player.pos.x, this.player.pos.z, a, l);
    } else if (e === v.BED) {
      d = this.yawFacing();
      const [g, b] = xo[d],
        S = a + g,
        M = l + b;
      if (!c(S, r, M) || this.intersectsPlayer(S, r, M)) return;
    } else if (Ss(e)) {
      if (
        t.ny !== 1 ||
        r >= 126 ||
        !c(a, r + 1, l) ||
        this.intersectsPlayer(a, r + 1, l)
      )
        return;
      d = this.yawFacing();
    } else if (de[e].shape === "gate") d = this.yawFacing();
    else if (de[e].shape === "stair") d = this.yawFacing();
    else if (Hr(e)) d = ((this.yawFacing() + 2) & 3) | Ek;
    else if (de[e].shape === "furniture") {
      const g =
        t.ny === 0
          ? t.nz === -1
            ? 0
            : t.nx === 1
              ? 1
              : t.nz === 1
                ? 2
                : 3
          : -1;
      if (e === v.WALL_LIGHT && g < 0) return;
      d = e === v.WALL_LIGHT && g >= 0 ? g : (this.yawFacing() + 2) & 3;
    } else if (Bo(e)) {
      const g = this.world.getBlock(a, r - 1, l),
        b =
          e === v.FIRE
            ? g > 0 && de[g].solid
            : e === v.DESERT_SAPLING
              ? g === v.GRASS || g === v.SAVANNA_GRASS || g === v.SAND
              : g === v.GRASS ||
                g === v.SAVANNA_GRASS ||
                g === v.DIRT ||
                (e === v.PINE_SAPLING && g === v.SNOW);
      if (t.ny !== 1 || !b) return;
    } else if (e === v.CACTUS) {
      const g = this.world.getBlock(a, r - 1, l);
      if (t.ny !== 1 || (g !== v.SAND && g !== v.CACTUS)) return;
    }
    const f = this.world.getBlock(a, r, l);
    if ((f === v.WATER || f === v.LAVA) && qse.has(e)) {
      (this.effects.blockBreak(new k(a + 0.5, r + 0.5, l + 0.5), h.color, e),
        this.sfx.breakBlock(e),
        V.setHint(Ns("This block goes out and breaks in liquid", z.language)));
      return;
    }
    if (
      ((d &= -193),
      f === v.WATER && cg(e) && (d |= cC),
      f === v.LAVA && cg(e) && (d |= hC),
      !!this.inventory.consumeHeld())
    ) {
      if (e === v.BED) {
        const [g, b] = xo[d];
        (this.world.setBlock(a, r, l, e, d),
          this.world.setBlock(a + g, r, l + b, e, d | 4));
      } else if (Ss(e)) {
        const g = this.world,
          b = gz(
            (S, M, x) => g.getBlock(S, M, x),
            (S, M, x) => g.getMeta(S, M, x),
            a,
            r,
            l,
            d & 3,
          );
        if (
          ((d = b.meta),
          g.setBlock(a, r, l, e, d),
          g.setBlock(a, r + 1, l, e, d | Na),
          b.flip)
        ) {
          const [S, M, x] = b.flip,
            T = g.getBlock(S, M, x);
          (g.setBlock(S, M, x, T, g.getMeta(S, M, x) | pa),
            g.getBlock(S, M + 1, x) === T &&
              g.setBlock(S, M + 1, x, T, g.getMeta(S, M + 1, x) | pa));
        }
      } else this.world.setBlock(a, r, l, e, d);
      (this.net.send(new Xe(ue.C_SET_BLOCK).i32(a).u8(r).i32(l).u8(e).u8(d)),
        this.sfx.place(e),
        this.weapons.swing(),
        this.syncHeld(),
        V.renderHotbar());
    }
  }
  intersectsPlayer(e, t, i) {
    const s = this.player.pos;
    return (
      e + 1 > s.x - 0.3 &&
      e < s.x + 0.3 &&
      t + 1 > s.y &&
      t < s.y + this.player.h &&
      i + 1 > s.z - 0.3 &&
      i < s.z + 0.3
    );
  }
}
