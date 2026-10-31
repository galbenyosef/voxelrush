// index-BeUlFSPp 262 — player
// Lines 137496-146919 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Bhe {
  renderer;
  shaders;
  shaderFrame = null;
  scene;
  camera;
  net = new yre();
  voice = lae;
  input = new hre();
  soldierYaw = 0;
  soldierPitch = 0;
  soldierInputAt = 0;
  remote = new Fae(
    (e) => this.net.send(e),
    (e, t) => this.vehicles?.setRemoteView(e >= yc ? -1 : e, t),
    () => this.input.unlock(),
    () => this.input.lock(),
    (e, t, i) => this.world.surfaceColor(e, t, i),
    () => this.world.border ?? null,
    (e, t, i, n, o) =>
      G.drawNavigationMapOverlay(e, t, i, n, o, this.mapMarkers()),
  );
  atlas;
  world;
  sky;
  effects;
  bulletHoles;
  sfx = new Cle();
  toolModes = new vne();
  music = new Fle();
  musicStarted = !1;
  player = new $T();
  remotes;
  sessionName = "";
  tacticalHud = new tae();
  projectiles;
  weapons;
  vehicles;
  bots;
  corpses;
  deathCamT = -1;
  animals;
  fishing;
  weather = null;
  worldSites;
  eggs;
  knives;
  knifeThrowAt = 0;
  knifeThrowCd = 0;
  knifeToken = 0;
  eggThrowAt = 0;
  c4;
  landmarkAtmosphere;
  casino;
  computer;
  screens;
  borderVisual;
  speedLines;
  claimsUI;
  propertyUpdateAt = 0;
  claimSync;
  signEditorPos;
  baseCaptures = new Map();
  baseCaptureSeconds = 300;
  spawnNotice = new _ne();
  front;
  airTerrain = null;
  airProps = null;
  airAmbience = null;
  airWeapons = null;
  airTrails = null;
  jetGun = null;
  tmpHoming = new k();
  tmpHomingUp = new k(0, 1.2, 0);
  jetRoundDir = new k();
  airMatchPack = null;
  clickToPlay = new Aee();
  training = new xee();
  trainingStarted = !1;
  trainingTimer = 0;
  trainingWalked = 0;
  trainingMined = 0;
  trainingEarned = !1;
  trainingMap = !1;
  trainingInventory = !1;
  trainingShop = !1;
  trainingLast = new k(NaN, 0, 0);
  lastBalance = null;
  autumn = null;
  killGhosts;
  hauntedNight;
  hauntedOn = !1;
  mapFogId = "";
  geiger = new WT((e) => this.sfx.geigerClick(e));
  mapFog = null;
  lastHurtAt = 0;
  c4ActionAt = 0;
  blueprintPreview;
  blueprintActionAt = 0;
  environment;
  vision;
  worldedit;
  inventory;
  drops;
  backpacks;
  crewHud = new roe();
  selfBody = null;
  myDisguise = null;
  viewBeforeDisguise = null;
  disguiseSnapped = !1;
  thirdPerson = !1;
  frontView = !1;
  footCameraDistance = 0;
  footCameraShoulder = 0.35;
  tpAim = null;
  tpAimData = { origin: new k(), target: new k(), muzzle: null, laser: null };
  tpMuzzle = new k();
  tpLaser = new k();
  emote = 0;
  emoteStart = 0;
  emoteOrigin = new k();
  sentReload = !1;
  selfShotUntil = 0;
  previousFeet = new k();
  selfFire = null;
  selfLightT = Vc;
  localFire;
  localBurning = !1;
  chute = null;
  chuteBank = 0;
  chuteYaw = 0;
  parachuteTPV = !1;
  vmLight;
  vmKeyLight;
  myId = 0;
  currentPlanet = Ci.EARTH;
  raidActive = !1;
  operations;
  raidZone = null;
  timeOfDay = 6e3;
  timeFrozen = !1;
  timeDrift = 0;
  running = !1;
  ending = !1;
  restartExpected = !1;
  followingRestart = !1;
  sensScale = 1;
  moveTimer = 0;
  chairExitPending = !1;
  pingTimer = 0;
  lastRtt = 0;
  breakCd = 0;
  mining = null;
  miningMesh = null;
  miningVisualBlock = -1;
  crackMats = null;
  miningStage = -1;
  miningPopAt = -1 / 0;
  homePos = null;
  homeKey = "";
  lastDeathPos = null;
  chipT = 0;
  minedThisFrame = !1;
  medkitCd = 0;
  militaryMedkitCd = 0;
  medkitChannelItem = w.MEDKIT;
  eatCd = 0;
  animalVoiceT = 3;
  ambienceT = 8;
  insidePyramid = !1;
  medkitChannel = 0;
  bandageCd = 0;
  bandageChannel = 0;
  drillHitCd = 0;
  meleeCd = 0;
  selfSwingAt = -9;
  tmpCrush = new k();
  swingSentAt = -9;
  hammerCd = 0;
  deathTimer = 0;
  deathCamRoll = 1.2;
  reviveUI = new Joe();
  healHud = new qoe(() => !wi());
  throwGauge = new Koe();
  grenadeWarning = new Yoe();
  healChannelWas = 0;
  healLanded = 0;
  botView = new kd();
  botViewMatrix = new Rt();
  downedBlend = 0;
  hudTimer = 0;
  frameIndex = 0;
  basePixelRatio = 1;
  adaptiveScale = 1;
  frameEma = 16.7;
  adaptiveAt = 0;
  cropQueryTimer = 0;
  cropQueryKey = "";
  cropProgress = new Map();
  minimapTimer = 0;
  minimapSkipTicks = 0;
  minimapLastZoom = 0;
  minimapLastX = 1 / 0;
  minimapLastZ = 1 / 0;
  mobCrouchBtnEl;
  mobProneBtnEl;
  mobRocketCdMax = 0;
  mobFireCdMax = 0;
  mobChuteBtnEl;
  mobVisionBtnEl;
  targetScoreTotal = 0;
  targetShots = 0;
  targetLastHitAt = -1 / 0;
  musicMoodT = 0;
  pendingMood = "open";
  pendingMoodT = 0;
  combatUntil = 0;
  fpsFrames = 0;
  fpsTime = 0;
  fpsVal = 0;
  prevDriving = !1;
  friends = new Set();
  worldObjects = [];
  nuclearStrikes = new Map();
  lastTab = [];
  chatRate = new _ee();
  lastAnonymousShotFxAt = 0;
  invDirty = !1;
  inventoryReady = !1;
  invSeq = 0;
  shotsSent = 0;
  shotLog = [];
  nextVehicleSpawnRequestId = 1;
  pendingVehicleSpawns = new Map();
  localSinglePlayer = !1;
  droneFlight = null;
  keepInventory = !1;
  invSaveTimer = 0;
  loadingShown = !0;
  loadingStartedAt = 0;
  updateTraining(e) {
    if (!this.training.active) return;
    (G.mapOpen && (this.trainingMap = !0),
      G.invOpen && (this.trainingInventory = !0),
      G.shopOpen && (this.trainingShop = !0));
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
            !G.anyOpen() &&
            !Y.cinematicHud,
        )));
  }
  updateJoinScreen(e) {
    wi();
    const {
        received: t,
        built: i,
        total: n,
      } = this.world.readiness(this.player.pos.x, this.player.pos.z, 2),
      o = (e - this.loadingStartedAt) / 1e3,
      a = this.world.isLoaded(this.player.pos.x, this.player.pos.z),
      r = 0.12 + 0.38 * (t / n) + 0.5 * (i / n),
      l =
        t < n
          ? I("Receiving the world", "Получение мира")
          : I("Building terrain", "Строим местность");
    (G.loading.setProgress(r, l),
      a &&
        this.shaderWarm === 0 &&
        (i >= n * 0.75 || o > 6) &&
        this.warmShaders(),
      a &&
        (this.shaderWarm === 2 || o > 18) &&
        (i >= n || (i >= n * 0.75 && o > 6) || o > 18) &&
        ((this.loadingShown = !1), G.showLoading(!1)));
  }
  chestPos = null;
  backpackId = null;
  furnacePos = null;
  camPose = { pos: new k(), quat: new hi() };
  tmpV = new k();
  tmpV2 = new k();
  tmpFishTip = new k();
  projectileAudioRight = new k();
  blockFxWindow = 0;
  blockFxCount = 0;
  debugHitboxes = !1;
  hitboxGroup = null;
  hitboxMat = null;
  hitboxBoxGeo = null;
  hitboxSphereGeos = new Map();
  tmpAimEye = new k();
  tmpAimDir = new k();
  tmpAimCandidate = new k();
  tmpAimBestDir = new k();
  tmpAimLosOrigin = new k();
  tmpProjSeg = new k();
  bobPhase = 0;
  bobAmp = 0;
  celestialDetail = 1;
  underwater = !1;
  underwaterMix = 0;
  inLava = !1;
  waterSurfaceY = 0;
  bubbleT = 0;
  landDip = 0;
  wasOnGround = !0;
  windX = 0;
  windZ = 0;
  applyCameraBob(e, t) {
    const i = this.player;
    (i.onGround &&
      !this.wasOnGround &&
      (this.landDip = Math.min(1, Math.abs(i.vel.y) / 12)),
      (this.wasOnGround = i.onGround),
      (this.landDip = Math.max(0, this.landDip - e * 3.2)));
    const n = Math.hypot(i.vel.x, i.vel.z),
      o = i.onGround && n > 0.6,
      a = i.sprinting ? 11 : i.crouching || i.prone ? 5 : 8;
    o && (this.bobPhase += e * a);
    const r = o ? Math.min(1, n / 5.5) * (i.sprinting ? 1.25 : 1) : 0;
    if (
      ((this.bobAmp += (r - this.bobAmp) * (1 - Math.exp(-9 * e))),
      !Y.cameraBob)
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
  initialized = !1;
  loadSessionStorage(e, t) {
    const i = e === "local" && t ? `local_${t.worldId}` : e;
    ((this.inventory = new _ie("fablecraft-inv-v3-" + i.replace(/\W+/g, "_"))),
      (this.inventory.onChange = () => {
        ((this.invDirty = !0),
          this.syncHeld(),
          this.inventoryReady &&
            this.net.connected &&
            (this.sendInventory(),
            (this.invDirty = !0),
            (this.invSaveTimer = 0)));
      }),
      (G.inventory = this.inventory),
      (this.homePos = null),
      (this.homeKey = "fablecraft-home-" + i.replace(/\W+/g, "_")));
    const n = localStorage.getItem(this.homeKey);
    if (n)
      try {
        const o = JSON.parse(n);
        this.homePos = new k(o.x, o.y, o.z);
      } catch {}
  }
  initialize(e, t) {
    ((this.renderer = new h5({
      antialias: Bn().antialias,
      powerPreference: cP() ? "low-power" : "high-performance",
    })),
      this.renderer.setSize(innerWidth, innerHeight),
      (this.renderer.debug.checkShaderErrors = !1),
      (this.renderer.shadowMap.type = BE),
      (this.renderer.shadowMap.autoUpdate = !1),
      (this.renderer.toneMapping = zE),
      (this.renderer.toneMappingExposure = 1.15),
      (this.shaders = new vhe(this.renderer)),
      document.getElementById("game").appendChild(this.renderer.domElement),
      (this.scene = new Cd()),
      (this.scene.matrixAutoUpdate = !1),
      (this.operations = new Voe(
        this.scene,
        (a) =>
          this.net.send(
            a ? new lt(ue.C_CHAT).str(a) : new lt(ue.C_OPERATION_ACTION).u8(1),
          ),
        () => this.net.send(new lt(ue.C_MISSION_STATUS)),
      )),
      h1(this.scene),
      (this.scene.fog = new Sf(13625599, 60, 180)),
      (this.camera = new qn(Y.fov, innerWidth / innerHeight, 0.08, 1500)),
      (this.camera.rotation.order = "YXZ"),
      this.scene.add(this.camera),
      (this.vision = new N0e(this.renderer, this.scene, this.camera)),
      (this.localFire = dE(!0)),
      this.camera.add(this.localFire),
      (this.vmLight = new z0(16773336, 4212306, 0)),
      this.vmLight.layers.set(y1),
      this.camera.add(this.vmLight),
      (this.vmKeyLight = new Dl(16774886, 1.25)),
      this.vmKeyLight.layers.set(y1),
      this.vmKeyLight.position.set(-0.55, 0.85, 0.5));
    const i = new Xt();
    (i.position.set(0, -0.1, -1),
      this.camera.add(i, this.vmKeyLight),
      (this.vmKeyLight.target = i));
    const n = Y.quality !== "custom" && _he;
    (pR(n ? Math.min(Bn().modelDetail, 1) : Bn().modelDetail),
      (this.atlas = gP(n ? Math.min(Bn().textureSize, 64) : Bn().textureSize)),
      (G.atlas = this.atlas),
      (G.sfx = this.sfx),
      (this.world = new X1(this.scene, this.atlas.texture)),
      (this.borderVisual = new Mne(this.scene)),
      (this.claimsUI = new wne(
        this.scene,
        () => Y.nick,
        () => !wi(),
      )),
      (this.world.onChestSlam = (a, r, l, c, h) =>
        this.chestSound(a, r, l, !1, h / 3)),
      (this.celestialDetail = Bn().celestialDetail),
      (this.sky = new i5(this.scene, Bn().shadowSize, this.celestialDetail)),
      (this.effects = new Vh(this.scene)),
      (this.bulletHoles = new ole(this.scene, (a, r, l) =>
        this.world.getBlock(a, r, l),
      )),
      this.effects.blastFx.setCamera(this.camera),
      this.effects.setGroundProbe((a, r, l) => {
        const c = Math.floor(a),
          h = Math.floor(l);
        for (let d = Math.floor(r); d >= Math.floor(r) - 6 && d >= 0; d--) {
          const u = this.world.getBlock(c, d, h);
          if (u > 0 && le[u].solid) return d + 1;
        }
        return null;
      }),
      (this.environment = new O0e(this.world, this.effects)),
      (this.worldSites = new P0e(this.scene, () => this.sfx.siren())),
      (this.computer = new Fne(this.scene, {
        canUse: () => mm(ur, Lf, "computer.use"),
        send: (a) =>
          this.net.send(new lt(ue.C_COMPUTER).str(JSON.stringify(a))),
        unlock: () => {
          (this.input.unlockForUi(),
            this.input.keys.clear(),
            this.input.pressed.clear(),
            (this.input.uiOpen = !0));
        },
        lock: () => {
          G.anyOpen() || this.input.lock();
        },
        language: () => Oa(),
        notify: (a) => G.addChat(1, a),
        held: () => this.inventory.held(),
        raycast: (a, r, l) => this.world.raycast(a, r, l),
        colliders: (a) => {
          this.world.computerColliders = a;
        },
        lighting: (a, r, l) => this.world.cellLighting(a, r, l),
      })),
      (this.screens = new jne(this.scene, this.world)),
      (this.remotes = new zse(this.scene, this.atlas.texture, this.world)),
      yV((a) => a === Y.nick || this.remotes.idByName(a) !== void 0),
      (this.front = new dne({
        send: (a) => this.net.send(new lt(ue.C_FRONT).str(JSON.stringify(a))),
        xpOf: (a) => (a === Y.nick ? this.myXp : this.remotes.byName(a)?.xp),
        scene: this.scene,
        lang: () => Oa(),
        mobile: this.input.mobile,
        lockInput: () => {
          G.anyOpen() || this.input.lock();
        },
        unlockInput: () => this.input.unlock(),
        openMenu: () => G.showPause(),
        drawIcon: (a, r) => Vo(a, r, this.atlas),
        itemName: (a) => Li(a),
        surface: (a, r) =>
          this.world.border?.radius && !HT(this.world.border, a, r)
            ? 0
            : this.airTerrain
              ? (this.airTerrain.colorAt(a, r) ??
                Roe(a, r, vy, rq, (l) => le[l]?.color ?? 7829367))
              : this.world.surfaceColor(a, r, 1),
        sfx: {
          uiTick: (a) => this.sfx.uiTick(a),
          capture: (a) => this.sfx.uiTick(a),
        },
        onTeamsChanged: () => {
          (this.remotes.refreshRoles(),
            this.bots.refreshPlates(),
            this.world.setViewSwap(
              this.front.active && this.front.team === 2
                ? [sd + m_[1], sd + m_[2]]
                : null,
            ));
        },
        ammo: () => this.weapons.ammoStatus(),
        vehicleName: (a) => to(a),
        face: (a) => {
          ((this.player.yaw = a), (this.player.pitch = 0));
        },
        onMapChange: (a, r) => this.frontMapChange(a, r),
        regen: (a, r) => {
          this.inventory.addItem(a, r) <= 0 ||
            (this.inventory.save(),
            G.renderHotbar(),
            this.syncHeld(),
            (this.invDirty = !0));
        },
        selectSlot: (a) => {
          (this.inventory.sel !== a &&
            ((this.inventory.sel = a), G.renderHotbar()),
            this.syncHeld(!0));
        },
        armsSfx: {
          level: (a) => this.sfx.armsLevel(a),
          alert: () => this.sfx.armsAlert(),
        },
        matchEnd: {
          atlas: () => this.atlas.texture,
          high: () => !this.input.mobile && Bn().shadowSize > 0,
          guestPrompt: () => {
            if (!qe?.is_guest || this.localSinglePlayer) return null;
            const a = Math.floor(Jse() / 60);
            return a >= 15 && ene() >= 1
              ? { name: qe.username, minutes: a }
              : null;
          },
          onOwnDrop: () => {
            t3().catch(() => {});
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
      xse((a) => {
        if (!this.front.active || !this.front.team) return null;
        const r = this.remotes.idByName(a),
          l = r !== void 0 ? this.front.playerTeams.get(r) : void 0;
        return l
          ? l === this.front.team
            ? { side: "ally", range: Kv.ally }
            : { side: "enemy", range: Kv.enemy }
          : null;
      }),
      (this.remotes.disguiseFactory = (a) => NC(a, this.world)),
      (this.voice.positionOf = (a) => this.remotes.getPos(a)),
      (this.voice.localPosition = () => this.player.pos),
      (this.voice.localYaw = () => this.player.yaw),
      (this.projectiles = new i0e(
        this.scene,
        this.world,
        this.effects,
        this.sfx,
      )),
      (this.weapons = new s0e(
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
            this.net.send(new lt(ue.C_ANIMATION).u8(3).u16(0))));
      }),
      (this.weapons.onAmmoChange = () => {
        ((this.invDirty = !0), G.renderHotbar());
      }),
      (this.vehicles = new Qn(
        this.scene,
        this.world,
        this.effects,
        this.sfx,
        this.projectiles,
      )),
      (this.bots = new b0e(this.scene, this.world)),
      (this.bots.battle = () => this.front.active && !!this.front.team),
      (this.corpses = new qT(this.scene, {
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
        spirit: (a) => {
          Ga() && this.killGhosts.spawn(a);
        },
      })),
      (this.bots.corpses = this.corpses),
      (this.killGhosts = new w9(this.scene, (a) => {
        const r = a.distanceTo(this.camera.position);
        r < 22 && this.sfx.ghostWhoosh(r, 0);
      })),
      (this.hauntedNight = new T0e(
        this.scene,
        this.sfx,
        () => this.autumn?.scare() ?? !1,
        (a, r, l) => this.effects.sustainLight(a, r, l, 16769732, 70),
      )),
      (this.animals = new lre(this.scene, this.world)),
      (this.animals.carcasses.hooks = {
        groundAt: (a, r, l) => this.world.groundAt(a, r, l),
        crush: (a, r, l, c, h) => {
          const d = this.tmpCrush.set(a.x, h - 0.55, a.z),
            u =
              le[
                this.world.getBlock(
                  Math.floor(a.x),
                  Math.floor(h) - 1,
                  Math.floor(a.z),
                )
              ]?.color;
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
      (this.fishing = new C0e(this.scene)),
      (this.worldedit = new D0e(this.scene)),
      this.loadSessionStorage(e, t),
      (this.drops = new Zle(this.scene, this.atlas.texture, this.world)),
      (this.drops.onTake = (a) => this.net.send(new lt(ue.C_DROP_TAKE).u16(a))),
      (this.backpacks = new Jle(this.scene, this.world)),
      this.sfx.setVolume(Y.sfxVolume),
      this.music.setVolume(Y.musicVolume),
      this.applyQuality(),
      this.wireHooks(),
      this.wireUI(),
      this.input.bind(this.renderer.domElement, IA),
      (this.input.onMobileSettings = () => G.showPause()),
      (this.spawnNotice.onTeleport = () => this.requestRandomTeleport()),
      (G.xpOfName = (a) =>
        a === Y.nick ? this.myXp : this.remotes.byName(a)?.xp),
      (this.input.onLockedRightClick = () =>
        !this.front?.active || !this.front.boardIsOpen
          ? !1
          : (this.input.unlockForUi(), !0)),
      (this.input.onMobileTab = () => {
        if (this.front?.active) {
          this.front.toggleBoard();
          return;
        }
        (this.renderTab(), G.showTab(!G.tabOpen));
      }),
      (this.input.onMobileCargo = () => this.vehicles.toggleCargo()),
      (this.input.onMobileToolMode = () => this.toggleToolMode()),
      (this.input.onLookTap = () => {
        const a = G.anyOpen() || this.remote.blocking;
        if (
          !(
            (this.input.locked || this.input.mobile) &&
            !a &&
            this.player.alive &&
            !this.player.downed &&
            (!this.remote.open || !!this.vehicles.mine)
          ) ||
          Y.mobileLayoutEdit ||
          this.vehicles.driving()
        )
          return;
        const l = this.inventory.held();
        l <= 0 ||
          (l >= 256 && l !== w.COMPUTER && !Ko(l)) ||
          this.placeHeld(
            this.player.eyePos(this.tmpV),
            this.player.lookDir(this.tmpV2),
          );
      }),
      this.renderer.domElement.addEventListener("pointerdown", () => {
        this.running && this.startGameAudio();
      }),
      this.renderer.domElement.addEventListener("click", () => {
        this.running &&
          !G.anyOpen() &&
          !this.remote.blocking &&
          !this.input.locked &&
          (this.input.mobile || this.input.lock(),
          Y.autoFullscreen &&
            !document.fullscreenElement &&
            document.documentElement.requestFullscreen?.().catch(() => {}));
      }),
      (this.input.onLockChange = (a) => {
        if (a) {
          if (this.remote.blocking || G.anyOpen()) {
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
                G.anyOpen() ||
                this.remote.open ||
                performance.now() - this.input.lockRequestedAt < 400 ||
                G.showPause();
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
        this.running &&
          !this.input.mobile &&
          Y.autoFullscreen &&
          !document.fullscreenElement &&
          document.documentElement.requestFullscreen?.().catch(() => {});
      }),
      window.addEventListener("pagehide", () => {
        this.running &&
          (this.localSinglePlayer || T_(),
          this.sfx.stopVehicles(),
          Jt.tick(0, !0),
          this.sendInventory(),
          this.localSinglePlayer && this.net.requestLocalSave());
      }),
      window.setInterval(() => {
        this.running &&
          document.hidden &&
          !this.localSinglePlayer &&
          this.net.connected &&
          this.net.send(
            new lt(ue.C_PING)
              .u32(performance.now() & 4294967295)
              .u16(this.lastRtt),
          );
      }, 5e3),
      document.addEventListener("visibilitychange", () => {
        (this.running &&
          document.visibilityState === "visible" &&
          !this.localSinglePlayer &&
          this.net.connected &&
          (this.net.expectWord(3500, PM),
          this.net.send(
            new lt(ue.C_PING)
              .u32(performance.now() & 4294967295)
              .u16(this.lastRtt),
          ),
          (this.pingTimer = 0)),
          !(!this.running || document.visibilityState !== "hidden") &&
            (this.sfx.stopVehicles(),
            Jt.tick(0, !0),
            this.sendInventory(),
            this.localSinglePlayer && this.net.requestLocalSave()));
      }),
      document.addEventListener("keydown", (a) => {
        if (
          !this.running ||
          rN() ||
          (a.code !== "Escape" &&
            !(a.code === "Tab" && G.tabOpen) &&
            a.target?.closest(
              'input, textarea, select, [contenteditable="true"]',
            )) ||
          (a.code === "Tab" && G.anyOpen() && !G.tabOpen)
        )
          return;
        if (a.code === "Escape" && G.resumeFromPause()) {
          a.preventDefault();
          return;
        }
        if (
          a.code === "Escape" &&
          this.front?.overlayOpen &&
          !G.anyOpen(this.front.overlayElement)
        ) {
          (a.preventDefault(), G.showPause());
          return;
        }
        const r = Y.binds.inventory,
          l = Y.binds.shop,
          c = Y.binds.map;
        if (
          (G.invOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(), G.closeInventory(), this.input.lock()),
          G.shopOpen &&
            (a.code === l || a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            G.closeShop(),
            G.anyOpen() || this.input.lock()),
          G.chestOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            G.closeChest(),
            G.anyOpen() || this.input.lock()),
          G.furnaceOpen &&
            (a.code === r || a.code === "Escape") &&
            (a.preventDefault(),
            G.closeFurnace(),
            G.anyOpen() || this.input.lock()),
          G.mapOpen &&
            a.code === "Escape" &&
            (a.preventDefault(), G.closeMap()),
          G.mapOpen &&
            (a.code === r || a.code === c) &&
            (a.preventDefault(),
            G.closeMap(),
            G.anyOpen() || this.input.lock()),
          a.code === "Tab" && this.front?.active)
        ) {
          (a.preventDefault(),
            this.front.toggleBoard(),
            !this.front.boardIsOpen &&
              !this.input.mobile &&
              !this.input.locked &&
              !G.anyOpen() &&
              !Uee() &&
              this.input.lock());
          return;
        }
        a.code === "Tab"
          ? (a.preventDefault(),
            G.tabOpen
              ? (G.showTab(!1), G.anyOpen() || this.input.lock())
              : G.anyOpen() ||
                (this.renderTab(), G.showTab(!0), this.input.unlock()))
          : G.tabOpen &&
            a.code === "Escape" &&
            (G.showTab(!1), G.anyOpen() || this.input.lock());
      }));
  }
  async start(e, t, i) {
    ((this.lastCosmeticSlot = -1),
      (this.lastCosmeticLooks = ""),
      (this.ownAppearance = null),
      (this.sessionName = e),
      Jt.reset(),
      (Jt.send = (l) => this.net.send(new lt(ue.C_SKILLS).str(l))),
      (Jt.onLevelUp = (l, c) => {
        wi();
        const h = Jt.label(l),
          d = Jt.effect(l, c);
        (G.addChat(
          1,
          I(
            `Skill "${h}" reached level ${c}${c >= 20 ? " (mastered!)" : ""} · ${d}`,
            `Навык «${h}» повышен до ${c} уровня${c >= 20 ? " (мастерство!)" : ""} · ${d}`,
          ),
        ),
          soe(l, h, c, d),
          this.sfx.levelUp(),
          this.skillsMenu.isOpen && this.skillsMenu.render());
      }),
      (this.localSinglePlayer = t === "local"),
      LN(),
      this.initialized
        ? this.loadSessionStorage(t, i)
        : (this.initialize(t, i), (this.initialized = !0)),
      this.wireNet(),
      wi());
    const n =
      Oy ||
      (t === "local"
        ? I("Single player", "Одиночная игра")
        : t.replace(/^wss?:\/\//, "").replace(/\/.*$/, ""));
    (G.showLoading(
      !0,
      t === "local"
        ? I("Starting your world", "Запуск мира")
        : I("Connecting to the server", "Подключение к серверу"),
      n,
    ),
      G.loading.setProgress(0.04),
      G.loading.creep(0.11));
    const o = this.net.connect(t, e, i);
    (this.operations?.refreshAccess(),
      await o,
      Hhe(),
      (this.running = !0),
      this.shareWaypoint(),
      G.startGame(),
      (this.loadingShown = !0),
      (this.loadingStartedAt = performance.now()),
      (this.shaderWarm = 0),
      G.showLoading(!0, I("Receiving the world", "Получение мира")),
      G.loading.setProgress(0.12),
      G.loading.creep(0.3),
      G.renderHotbar(),
      G.setHP(100),
      this.syncHeld());
    let a = performance.now();
    const r = (l) => {
      if (
        !this.running ||
        (requestAnimationFrame(r),
        this.frameIntervalMs && l - a < this.frameIntervalMs)
      )
        return;
      const c = (l - a) / 1e3,
        h = Math.min(c, 0.05);
      a = l;
      try {
        this.tick(h, l, c);
      } catch (d) {
        console.error(d);
      }
    };
    requestAnimationFrame(r);
  }
  async end(e) {
    this.ending ||
      ((this.ending = !0),
      this.running &&
        (Jt.tick(0, !0), this.sendInventory(), this.localSinglePlayer || T_()),
      this.welderMenu.close(!0),
      this.skillsMenu.isOpen && this.skillsMenu.close(),
      (this.running = !1),
      kR(!1),
      this.weapons.resetWeaponInfo(),
      this.casino?.dispose(),
      (this.casino = void 0),
      this.computer?.dispose(),
      (this.computer = void 0),
      this.screens?.clear(),
      (this.screens = void 0),
      this.claimsUI?.dispose(),
      (this.claimsUI = void 0),
      this.borderVisual?.dispose(),
      (this.borderVisual = void 0),
      this.speedLines?.dispose(),
      (this.speedLines = void 0),
      this.spawnNotice.dispose(),
      (G.worldBorder = null),
      this.sfx.stopVehicles(),
      this.reviveUI.clear(),
      (this.player.downed = !1),
      (this.downedBlend = 0),
      (this.renderer.domElement.style.filter = ""),
      this.voice.disconnected(),
      this.c4?.clear(),
      this.eggs?.clear(),
      this.knives?.clear(),
      this.operations?.clear(),
      G.setOperationPoints([]),
      this.landmarkAtmosphere?.dispose(),
      (this.landmarkAtmosphere = void 0),
      e && sessionStorage.setItem("fc-error", e),
      G.showLoading(!0),
      await this.net.disconnect(),
      location.replace($te(location.href)));
  }
  async followServerRestart() {
    if (this.followingRestart) return;
    ((this.followingRestart = !0), ic.hide());
    const e = Oy || Y.server.replace(/^wss?:\/\//, "");
    (G.showLoading(!0, z("updateServerUpdating"), e),
      G.loading.setProgress(0.15),
      G.loading.creep(0.8),
      !(
        !this.localSinglePlayer &&
        (await AT()) &&
        this.running &&
        (G.loading.setProgress(0.35, z("updateLoadingVersion")),
        this.sendInventory(),
        j7({ address: Y.server, name: e }))
      ) && G.loading.setProgress(0.35, z("updateReconnecting")));
  }
  offerUpdate() {
    ic.updateReady(() => {
      (!this.localSinglePlayer &&
        Y.server &&
        ZJ({ address: Y.server, name: Oy || Y.server }),
        this.end());
    });
  }
  networkBlockBreak(e, t, i, n) {
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
          le[n]?.color ?? 8947848,
          n,
        )));
  }
  forgetWorldState() {
    (this.remotes.clear(),
      this.bots.clear(),
      this.vehicles.clearForTransition(-1),
      this.c4?.clear(),
      this.eggs?.clear(),
      this.knives?.clear(),
      this.drops.clear(),
      this.backpacks.clear(),
      this.animals.clear(),
      this.corpses.clear(),
      this.killGhosts?.clear(),
      this.nuclearStrikes.clear(),
      this.effects.clearRocketTrails(),
      this.world.clearDimension(),
      (this.compassRefreshAt = 0),
      (this.minimapLastZoom = 0),
      G.refreshMap());
  }
  welcomes = 0;
  loopSeenAt = 0;
  longFrame = 0;
  longFrameAt = 0;
  wireNet() {
    const e = this.net;
    ((this.welcomes = 0),
      (this.emote = 0),
      (this.sentReload = !1),
      (this.sentInspect = !1),
      this.weapons.cancelInspect(),
      this.weapons.resetWeaponInfo(),
      this.voice.attach(e),
      (this.voice.onActivity = (i) =>
        e.send(
          new lt(ue.C_ANIMATION).u8(2).u16(Math.min(255, Math.round(i * 255))),
        )),
      e.on(ue.S_ANIMATION, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = i.u16(),
          r = i.u16() / 1e3;
        n !== this.myId
          ? this.remotes.setAnimation(n, o, a, r)
          : o === 0 &&
            ((this.emote = a),
            (this.emoteStart = performance.now() / 1e3 - r),
            this.emoteOrigin.copy(this.player.pos));
      }),
      e.on(ue.S_WELCOME, (i) => {
        ((this.movementEpoch = 0),
          (this.positionRevision = 0),
          this.playerEpochs.clear(),
          (this.invSeq = 0),
          (this.shotsSent = 0),
          (this.shotLog = []),
          (this.myXpSeen = !1),
          this.welcomes++ > 0 && this.forgetWorldState(),
          (this.deathCamT = -1),
          (this.player.alive = !0),
          (this.player.downed = !1),
          (this.player.prone = !1),
          this.reviveUI.clear(),
          (this.downedBlend = 0),
          (this.renderer.domElement.style.filter = ""),
          G.showDeath(!1),
          this.corpses.clear(),
          this.killGhosts?.clear(),
          (this.myId = i.u16()),
          this.voice.connected(),
          this.player.pos.set(i.f32(), i.f32(), i.f32()),
          (this.timeOfDay = i.u32()),
          (this.world.seed = i.u32()),
          (this.currentPlanet = i.remaining() > 0 ? i.u8() : Ci.EARTH),
          G.setWaypointPlanet(this.currentPlanet),
          (this.player.gravityScale = this.currentPlanet === Ci.MOON ? am : 1),
          this.sky.setLunar(this.currentPlanet === Ci.MOON),
          this.vehicles.setPlanet(this.currentPlanet),
          this.projectiles.setPlanet(this.currentPlanet),
          this.drops.setPlanet(this.currentPlanet),
          this.backpacks.setPlanet(this.currentPlanet),
          this.bots.setEnabled(!0),
          this.animals.setEnabled(this.currentPlanet === Ci.EARTH),
          this.worldSites.setEnabled(this.currentPlanet === Ci.EARTH),
          this.weather?.dispose(),
          (this.weather = new L0e(
            this.scene,
            this.world.seed,
            this.input.mobile,
            (n, o, a) => this.world.precipitationSurfaceY(n, o, a),
          )),
          this.weather.setParticleScale(Bn().particles),
          (this.vehicles.myId = this.myId),
          (this.projectiles.myId = this.myId));
      }),
      e.on(ue.S_CLAIMS, (i) => {
        const n = JSON.parse(i.str());
        if (
          ((n.reset || !this.claimSync) &&
            (this.claimSync = { claims: [], trusted: [] }),
          this.claimSync.claims.push(...n.claims),
          this.claimSync.trusted.push(...n.trusted),
          n.complete === !1)
        )
          return;
        const o = this.claimSync;
        ((this.claimSync = void 0),
          this.claimsUI?.apply(o),
          this.signEditorPos &&
            !this.claimsUI?.allowed(
              this.currentPlanet,
              this.signEditorPos.x,
              this.signEditorPos.z,
            ) &&
            document
              .getElementById("sign-editor")
              ?.dispatchEvent(new Event("protection-close")),
          this.chestPos &&
            !this.claimsUI?.allowed(
              this.currentPlanet,
              this.chestPos.x,
              this.chestPos.z,
            ) &&
            G.closeChest(),
          this.furnacePos &&
            !this.claimsUI?.allowed(
              this.currentPlanet,
              this.furnacePos.x,
              this.furnacePos.z,
            ) &&
            G.closeFurnace());
      }),
      e.on(ue.S_CLAIM_MENU, (i) => {
        const n = i.u32();
        (this.input.unlockForUi(),
          this.claimsUI?.open(
            n,
            [...this.friends],
            (o, a) => this.net.send(new lt(ue.C_FRIENDS).u8(o).str(a)),
            () => G.onResume(),
            (o) => this.net.send(new lt(ue.C_CLAIM).u32(n).u8(1).u16(o)),
          ));
      }),
      e.on(ue.S_PROTECTION, (i) => {
        const n = Po(i.str());
        (G.closeChest(),
          G.closeFurnace(),
          document
            .getElementById("sign-editor")
            ?.dispatchEvent(new Event("protection-close")),
          G.setHint(n));
      }),
      e.on(ue.S_BASE_CAPTURE, (i) => {
        const n = JSON.parse(i.str());
        ((this.baseCaptureSeconds = n.seconds),
          (this.baseCaptures = new Map(n.pending.map((o) => [o.id, o]))));
      }),
      e.on(ue.S_SQUAD, (i) => {
        const n = na(Y.nick)?.id;
        (Mq(JSON.parse(i.str())),
          this.remotes.refreshRoles(),
          this.renderTab(),
          G.refreshMap(),
          (this.invDirty = !0),
          (this.compassRefreshAt = 0),
          n !== na(Y.nick)?.id && this.shareWaypoint());
      }),
      e.on(ue.S_FRIENDS, (i) => {
        this.friends.clear();
        for (let n = 0, o = i.u8(); n < o; n++) this.friends.add(i.str());
        (bq(Y.nick, this.friends),
          this.remotes.refreshRoles(),
          this.claimsUI?.updateFriends([...this.friends]),
          this.renderTab(),
          (this.invDirty = !0));
      }),
      e.on(ue.S_JOIN, (i) => {
        const n = i.u16(),
          o = i.str(),
          a = i.u32();
        (this.playerEpochs.set(n, i.remaining() >= 4 ? i.u32() : 0),
          n !== this.myId && this.remotes.add(n, o, a));
      }),
      e.on(ue.S_LEAVE, (i) => this.remotes.remove(i.u16())),
      e.on(ue.S_STATES, (i) => {
        const n = i.u8();
        for (let o = 0; o < n; o++) {
          const a = i.u16(),
            r = i.f32(),
            l = i.f32(),
            c = i.f32(),
            h = i.f32(),
            d = i.f32(),
            u = i.u16(),
            f = i.u8(),
            p = i.remaining() > 0 ? i.u8() : Ci.EARTH,
            m = i.remaining() > 0 ? i.u8() : 0;
          if (a !== this.myId)
            (this.remotes.setState(a, r, l, c, h, d, u, f, p, m),
              this.remotes.setHidden(a, p !== this.currentPlanet));
          else {
            this.localBurning = (f & 64) !== 0;
            const g = (f & 128) !== 0;
            (g || this.player.seated) &&
              ((this.player.seated = g),
              g || (this.chairExitPending = !1),
              this.player.pos.set(r, l, c),
              this.player.vel.set(0, 0, 0),
              (this.player.onGround = g));
          }
        }
      }),
      e.on(ue.S_SEAT, (i) => {
        const n = i.u16(),
          o = i.u8() !== 0;
        (i.i32(), i.u8(), i.i32());
        const a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.f32();
        n === this.myId
          ? ((this.chairExitPending = !1),
            (this.player.seated = o),
            this.player.pos.set(a, r, l),
            this.player.vel.set(0, 0, 0),
            (this.player.onGround = o),
            o && ((this.player.yaw = c), (this.player.pitch = 0)))
          : this.remotes.setSeat(n, o, a, r, l, c);
      }),
      e.on(ue.S_CHUNK, (i) => {
        const n = i.u8(),
          o = i.i32(),
          a = i.i32(),
          r = i.bytes();
        n === this.currentPlanet && this.world.onChunkData(o, a, r);
      }),
      e.on(ue.S_MAP_TILE, (i) => {
        const n = i.u8(),
          o = i.u8(),
          a = i.i32(),
          r = i.i32(),
          l = i.bytes();
        n === this.currentPlanet && this.world.onMapTileData(o, a, r, l);
      }),
      e.on(ue.S_SET_BLOCK, (i) => {
        const n = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8(),
          l = i.u8(),
          c = i.u8(),
          h = this.world.getBlock(n, o, a),
          d = this.world.getMeta(n, o, a);
        (this.world.setBlock(n, o, a, r, l),
          ((!lh(r) && !H2(r)) || h !== r) &&
            this.cropProgress.delete(`${n},${o},${a}`),
          h === r &&
            zn(r) &&
            !(l & wr) &&
            (d ^ l) & fn &&
            this.sfx.door((l & fn) !== 0),
          r === 0 && h !== 0 && !c && this.networkBlockBreak(n, o, a, h));
      }),
      e.on(ue.S_SIGN, (i) => {
        const n = i.u8(),
          o = i.i32(),
          a = i.u8(),
          r = i.i32(),
          l = i.u8(),
          c = i.str();
        n === this.currentPlanet &&
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
            $oe(
              c,
              (h, d) => {
                this.net.send(
                  new lt(ue.C_SIGN).u8(h).i32(o).u8(a).i32(r).str(d),
                );
              },
              () => {
                ((this.signEditorPos = void 0), G.onResume());
              },
            )));
      }),
      e.on(ue.S_CROP_PROGRESS, (i) => {
        const n = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8(),
          l = Math.max(0, Math.min(1, i.u16() / 1e3)),
          c = i.remaining() > 0 && i.u8() !== 0,
          h = i.remaining() > 0 ? i.u8() : 15,
          d = i.remaining() >= 2 ? i.u16() / 1e3 : 1,
          u = i.remaining() >= 2 ? (i.u16() / MW) * 1e3 : 6e4;
        this.cropProgress.set(`${n},${o},${a}`, {
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
        const n = i.u16();
        for (let o = 0; o < n; o++) {
          const a = i.i32(),
            r = i.u8(),
            l = i.i32(),
            c = i.u8(),
            h = i.u8(),
            d = this.world.getBlock(a, r, l);
          (this.world.setBlock(a, r, l, c, h),
            ((!lh(c) && !H2(c)) || d !== c) &&
              this.cropProgress.delete(`${a},${r},${l}`),
            o < 30 && c === 0 && d !== 0 && this.networkBlockBreak(a, r, l, d));
        }
      }),
      e.on(ue.S_CHAT, (i) => {
        const n = i.u8(),
          o = i.str(),
          a = n === 0 ? o : Po(o),
          r = i.remaining() > 1 ? JSON.parse(i.str()) : void 0;
        G.addChat(n, a, r);
      }),
      e.on(ue.S_TIME, (i) => {
        const n = i.u32();
        this.timeFrozen = i.remaining() > 0 && i.u8() === 1;
        let o = n - this.timeOfDay;
        (o > Ur / 2 ? (o -= Ur) : o < -Ur / 2 && (o += Ur),
          this.timeFrozen || Math.abs(o) > 400
            ? ((this.timeOfDay = n), (this.timeDrift = 0))
            : (this.timeDrift = o));
      }),
      e.on(ue.S_WEATHER, (i) => {
        const n = i.u8();
        (this.weather?.setMode(this.currentPlanet === Ci.MOON ? 0 : n),
          i.u16(),
          i.remaining() >= 8 &&
            ((this.windX = i.f32()),
            (this.windZ = i.f32()),
            this.weather?.setWind(this.windX, this.windZ),
            this.world.setWind(this.windX, this.windZ),
            this.environment.setWind(this.windX, this.windZ)));
      }),
      e.on(ue.S_HALLOWEEN_FX, (i) => {
        const n = i.u8(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32();
        if (n === ju.BLOOD_MOON) {
          (this.sky.setBloodMoon(o > 0.5), this.autumn?.setBloodMoon(o > 0.5));
          return;
        }
        if (n === ju.FLARE) {
          this.hauntedNight.flare(o, a, r, this.camera.position);
          return;
        }
        this.currentPlanet === Ci.EARTH &&
          this.autumn?.fx(n, o, a, r, this.player.pos);
      }),
      e.on(ue.S_LIGHTNING, (i) => {
        const n = i.f32(),
          o = i.f32(),
          a = i.f32();
        if (this.currentPlanet === Ci.MOON) return;
        this.weather?.strike(n, o, a);
        const r = new k(n, o, a),
          l = this.effectExposure(r);
        (this.effects.flash(r, 8, 0.18),
          this.sfx.explosion(r.distanceTo(this.player.pos), l));
      }),
      e.on(ue.S_CONCUSSION, (i) => {
        const n = Oe(i.f32(), 0, 1),
          o = i.u16();
        (this.effects.addTrauma(0.25 + n * 0.75),
          this.sfx.concussion(n, o),
          G.concussion(n, o),
          Uo(n > 0.65 ? "heavy" : "medium"));
      }),
      e.on(ue.S_SMOKE, (i) => {
        G.smokeExposure(i.u8() / 255);
      }),
      e.on(ue.S_HP, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a =
            i.remaining() >= 13 && i.u8() === 1
              ? { x: i.f32(), y: i.f32(), z: i.f32() }
              : null;
        (n < this.player.hp &&
          ((this.lastHurtAt = performance.now()),
          G.damageFlash(),
          this.sfx.hurt(),
          this.effects.addTrauma(0.35)),
          a &&
            (G.hitFrom(
              a.x,
              a.z,
              this.camera.position.x,
              this.camera.position.z,
              this.player.yaw,
            ),
            this.effects.incomingFire(a.x, a.y, a.z, this.camera.position)),
          (this.player.hp = n),
          (this.player.maxHp = o || _1),
          G.setHP(n, this.player.maxHp));
      }),
      e.on(ue.S_ARMOR, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = i.u16(),
          r = i.u16(),
          l = i.u16(),
          c = i.remaining() >= 4 ? i.u16() : 0,
          h = i.remaining() >= 2 ? i.u16() : 0;
        (this.remotes.setArmor(n, o, a, r, l, c, h),
          n === this.myId &&
            (this.inventory.applyHelmetModuleState(c, h),
            this.vision.sync(c, h),
            (this.player.maxHp = R1([o, a, r, l])),
            G.setHP(this.player.hp, this.player.maxHp)));
      }),
      e.on(ue.S_DOWNED, (i) =>
        this.reviveUI.receive(i, this.myId, this.player),
      ),
      e.on(ue.S_DEATH, (i) => {
        const n = i.u16(),
          o = i.remaining() >= 9 ? i.u8() : 0,
          a = o ? i.f32() : 0,
          r = o ? i.f32() : 0;
        if (n === this.myId) {
          this.onDeath();
          return;
        }
        const l = this.remotes.corpseOf(n);
        l &&
          this.corpses.spawn(l.body, l.yaw, l.limbs, {
            blast: !!(o & 2),
            dirX: a,
            dirZ: r,
            lying: l.lying,
          });
      }),
      e.on(ue.S_RESPAWN, (i) => {
        const n = i.u16(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = i.remaining() >= 4 ? i.u32() : 0;
        (this.playerEpochs.set(n, l),
          this.remotes.respawn(n, o, a, r),
          n === this.myId &&
            ((this.deathCamT = -1),
            (this.movementEpoch = l),
            this.player.pos.set(o, a, r),
            this.player.vel.set(0, 0, 0),
            (this.player.alive = !0),
            (this.player.downed = !1),
            (this.player.prone = !1),
            this.reviveUI.wounded.delete(this.myId),
            (this.player.maxHp = R1(this.inventory.equippedIds())),
            (this.player.hp = this.player.maxHp),
            G.setHP(this.player.hp, this.player.maxHp),
            G.showDeath(!1),
            this.input.lock()));
      }),
      e.on(ue.S_TELEPORT, (i) => {
        (this.player.pos.set(i.f32(), i.f32(), i.f32()),
          i.remaining() >= 4 && (this.positionRevision = i.u32()),
          this.player.vel.set(0, 0, 0));
      }),
      e.on(ue.S_PLANET, (i) => {
        const n = i.u8(),
          o = i.u16(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32();
        (this.operations?.clear(),
          G.setOperationPoints([]),
          this.beginPlanetTransition(n, o, a, r, l));
      }),
      e.on(ue.S_REMOTE, (i) => this.remote.receive(JSON.parse(i.str()))),
      e.on(ue.S_RPG_LOCK, (i) => {
        const n = i.u8(),
          o = i.u16(),
          a = i.u16(),
          r = this.weapons;
        if (n !== 0 && r.targetLock.key !== `${n}:${o}`) return;
        r.targetLock.seconds = n === 0 ? 0 : Math.min(Ad, a / 1e3);
        const l = n !== 0 && r.targetLock.seconds >= Ad;
        (l && !r.lockConfirmed && this.sfx.uiTick(!0), (r.lockConfirmed = l));
      }),
      e.on(ue.S_KNIFE, (i) => this.knifeVisuals().packet(i)),
      e.on(ue.S_EGG, (i) => {
        ((this.eggs ??= new Sae(this.scene, (n) => {
          (this.effects.bulletImpact(n, 16773074),
            n.distanceTo(this.player.pos) < 24 && this.sfx.eggLaid());
        })),
          this.eggs.packet(i, this.currentPlanet));
      }),
      e.on(ue.S_C4, (i) => {
        ((this.c4 ??= new Dae(
          this.scene,
          this.vehicles,
          (n, o) => this.sfx.c4Attach(n.distanceTo(this.player.pos), o),
          {
            beep: (n, o) =>
              this.sfx.bombBeep(n.distanceTo(this.camera.position), o),
            fuse: (n) => {
              (this.effects.blastFx.sparks({
                pos: n,
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
                  this.sfx.fuseHiss(n.distanceTo(this.camera.position)));
            },
          },
        )),
          this.c4.packet(i));
      }),
      e.on(ue.S_VEH_SPAWN, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = new k(i.f32(), i.f32(), i.f32()),
          r = new hi(i.f32(), i.f32(), i.f32(), i.f32()),
          l = i.u16(),
          c = i.u16(),
          h = i.u16(),
          d = i.str(),
          u = i.f32(),
          f = i.f32(),
          p = i.u8(),
          m = OZ(p),
          g = i.remaining() > 0 ? i.u8() : Ci.EARTH;
        if (
          (this.vehicles.onSpawn(
            n,
            o,
            a,
            r,
            l,
            nP[o],
            c === 65535 ? -1 : c,
            h === 65535 ? -1 : h,
            d,
            u,
            f,
            m,
            g,
            PZ(p),
          ),
          t8(p) && this.vehicles.setArmor(n, t8(p)),
          i.remaining())
        ) {
          const y = i.u8();
          this.vehicles.setRadioState(
            n,
            y,
            i.remaining() >= 2 ? i.u16() : void 0,
          );
        }
      }));
    const t = (i) => {
      const n = i.u32(),
        o = i.u8() === 1,
        a = this.pendingVehicleSpawns.get(n);
      if (
        !a ||
        (this.pendingVehicleSpawns.delete(n), !o || this.inventory.creative)
      )
        return;
      if (
        !(this.inventory.hotbar[a.slot]?.id === a.itemId
          ? this.inventory.removeFromSlot("h", a.slot, 1)
          : this.inventory.removeItem(a.itemId, 1))
      ) {
        G.addChat(2, z("vehicleSpawnInventoryMissing"));
        return;
      }
      (G.renderHotbar(), this.syncHeld());
    };
    (e.on(ue.S_VEH_SPAWN_RESULT, t),
      e.on(ue.S_BOT_SPAWN_RESULT, t),
      e.on(ue.S_VEH_PAINT, (i) => this.vehicles.setCamo(i.u16(), i.u8())),
      e.on(ue.S_VEH_ARMOR, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = (i.u8() & 1) === 1,
          r = i.remaining() >= 2 ? i.u16() : 65535,
          l = this.vehicles.vehicles.get(n),
          c = !!l && l.pos.distanceTo(this.player.pos) < 90;
        (this.vehicles.setArmor(n, o, a && c),
          r === this.myId &&
            (this.weapons.setWelding(!0),
            (this.weldingUntil = performance.now() + 900),
            Uo("medium", 0)));
      }),
      e.on(ue.S_SKILLS, (i) => {
        (Jt.load(i.str()), this.skillsMenu.isOpen && this.skillsMenu.render());
      }),
      e.on(ue.S_VEH_STATE, (i) => {
        const n = i.u16(),
          o = new k(i.f32(), i.f32(), i.f32()),
          a = new hi(i.f32(), i.f32(), i.f32(), i.f32()),
          r = new k(i.f32(), i.f32(), i.f32()),
          l = i.f32(),
          c = i.f32(),
          h = i.remaining() > 0 ? i.u8() : void 0,
          d = i.remaining() ? i.u8() : void 0,
          u = i.remaining() >= 4 ? i.u32() : void 0,
          f = i.remaining() >= 2 ? i.u16() : void 0;
        (this.vehicles.onState(n, o, a, r, l, c, h, u),
          d !== void 0 && this.vehicles.setRadioState(n, d, f));
      }),
      e.on(ue.S_SEAT_GUN, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = i.u8(),
          r = i.f32(),
          l = i.f32();
        this.vehicles.onSeatGun(n, o, a, r, l, i.str());
      }),
      e.on(ue.S_VEH_ENTER, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = i.u8(),
          r = i.str(),
          l = this.vehicles.vehicles.get(n);
        this.vehicles.onEnter(n, o, a, r);
        const c = !!l && Qn.hasOpenSeats(l.type) && a > 0;
        o !== this.myId &&
          (l
            ? c
              ? (this.remotes.setVehicleSeat(o, n, a),
                this.remotes.setHidden(o, !1))
              : (this.remotes.setVehicleSeat(o, n, a),
                this.remotes.setHidden(o, !Qn.hasOpenSeats(l.type)))
            : (this.remotes.setVehicleSeat(o, n, a),
              this.remotes.setHidden(o, !1)));
      }),
      e.on(ue.S_VEH_EXIT, (i) => {
        const n = i.u16(),
          o = i.u16();
        (this.vehicles.onExit(n, o),
          o !== this.myId &&
            (this.remotes.clearVehicleSeat(o), this.remotes.setHidden(o, !1)));
      }),
      e.on(ue.S_VEH_HP, (i) => this.vehicles.onHp(i.u16(), i.u16())),
      e.on(ue.S_VEH_RAM, (i) => {
        const n = i.u16(),
          o = i.f32(),
          a = i.remaining() ? i.u8() : 0,
          r = i.remaining() >= 12 ? new k(i.f32(), i.f32(), i.f32()) : void 0,
          l = i.remaining() ? i.u8() : 1;
        this.vehicles.onRam(n, o, a, r, l, this.camera.position);
      }),
      e.on(ue.S_RUN_OVER, (i) => {
        const n = i.u16(),
          o = new k(i.f32(), i.f32(), i.f32()),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.u8(),
          h = i.remaining() >= 2 ? i.u16() : -1,
          d = !!(c & 1),
          u = this.vehicles.vehicles.get(n);
        if (u && u.planet !== this.vehicles.currentPlanet) return;
        const f = o.distanceTo(this.camera.position);
        if (f > 160) return;
        const p = this.world.groundAt(o.x, o.z, o.y + 1.5),
          m = Number.isFinite(p) && p <= o.y + 0.6 ? p : o.y,
          g =
            le[
              this.world.getBlock(
                Math.floor(o.x),
                Math.floor(m) - 1,
                Math.floor(o.z),
              )
            ]?.color;
        (this.effects.runOver(o, a, r, l, d, m, g), this.sfx.runOver(f, l, d));
        const y = this.vehicles.mine?.id === n,
          b = !!(c & 2) && h === this.myId;
        y
          ? this.effects.addTrauma(Math.min(0.38, 0.16 + l * 0.02))
          : b
            ? this.effects.addTrauma(0.7)
            : f < 18 && this.effects.addTrauma(0.08 * (1 - f / 18));
      }),
      e.on(ue.S_CARRIER_COOLDOWN, (i) => {
        const n = this.vehicles.vehicles.get(i.u16()),
          o = i.u16();
        n && ((n.fireCd2 = o), (n.carrierReadyAt = Date.now() + o * 1e3));
      }),
      e.on(ue.S_HELI_CARGO, (i) => this.vehicles.onHeliCargo(i.u16(), i.u16())),
      e.on(ue.S_VEH_DESTROY, (i) => {
        const n = i.u16(),
          o = this.vehicles.vehicles.get(n);
        if (o)
          for (const a of [o.driver, ...o.passengers])
            a !== -1 &&
              a !== this.myId &&
              (this.remotes.clearVehicleSeat(a), this.remotes.setHidden(a, !1));
        this.vehicles.onDestroy(n, i.remaining() > 0 && i.u8() === 1);
      }),
      e.on(ue.S_SHOT, (i) => {
        const n = i.u16();
        this.remotes.onShot(n);
        const o = performance.now();
        if (n === 0 && o - this.lastAnonymousShotFxAt < 50) return;
        n === 0 && (this.lastAnonymousShotFxAt = o);
        const a = i.u16(),
          r = new k(i.f32(), i.f32(), i.f32()),
          l = new k(i.f32(), i.f32(), i.f32()),
          c =
            a === w.PLANE
              ? n
                ? this.vehicles.remoteSeatShot(n, r)
                : this.vehicles.botSeatShot(r)
              : null,
          h = Math.max(120, Ss[a]?.range ?? 120),
          d = r.clone().addScaledVector(l, h),
          u = OL(this.camera.position, r, d);
        if (u > 200 && r.distanceTo(this.camera.position) > 280) return;
        l.normalize();
        const f = this.world.raycast(r, l, h),
          p = f ? f.point : r.clone().addScaledVector(l, h);
        f &&
          f.point.distanceTo(this.camera.position) < 90 &&
          Ss[a]?.kind === "hitscan" &&
          this.bulletHoles.add(f);
        const m = r.distanceTo(this.camera.position),
          g = m > 6 && OL(this.camera.position, r, p) < 3.5;
        (u <= 200 && this.effects.tracer(r, p, g),
          g && this.effects.incomingFire(r.x, r.y, r.z, this.camera.position));
        const y = this.camera.position.clone().sub(r).dot(l),
          b = r.distanceTo(p),
          S = new k(1, 0, 0).applyQuaternion(this.camera.quaternion);
        if (n !== this.myId && m > 6 && y > 1 && y < b) {
          const E = r.clone().addScaledVector(l, y),
            A = E.sub(this.camera.position),
            T = A.length();
          T < 7 && this.sfx.flyby(T, A.dot(S) / Math.max(1, T), y / 760);
        }
        const M = c
          ? c.heavy
            ? "hmg"
            : "mg"
          : a === w.PLANE
            ? this.vehicles.typeNear(r, 3.2) === L.BTR_TURRET
              ? "autocannon"
              : "mg"
            : (Ss[a]?.sfx ?? "ak");
        m <= 280 &&
          this.sfx.shot(
            M,
            m,
            so(a).suppressor,
            this.effectExposure(r),
            r.clone().sub(this.camera.position).normalize().dot(S),
          );
      }),
      e.on(ue.S_PROJECTILE, (i) => {
        const n = i.u16(),
          o = i.u32(),
          a = i.u8(),
          r = i.u8(),
          l = new k(i.f32(), i.f32(), i.f32()),
          c = new k(i.f32(), i.f32(), i.f32()),
          h = r & 1 ? new k(i.f32(), i.f32(), i.f32()) : null,
          d = i.remaining() > 0 ? i.u8() : Ci.EARTH,
          u = i.remaining() >= 2 ? i.u16() : 65535,
          f = i.remaining() >= 4 ? i.f32() : void 0,
          p = i.remaining() ? i.u8() : 0,
          m = i.remaining() >= 2 ? i.u16() : 65535;
        if (d !== this.currentPlanet) return;
        const g =
            a === mt.TOMAHAWK || a === mt.NUCLEAR || a === mt.MISSILE
              ? [...this.vehicles.vehicles.values()].find(
                  (S) =>
                    S.driver === n &&
                    (S.type === L.CARRIER ||
                      S.type === L.SUBMARINE ||
                      S.type === L.HIMARS ||
                      S.type === L.PATRIOT),
                )
              : void 0,
          y = a === mt.TOMAHAWK ? tP : a === mt.NUCLEAR ? sP : void 0,
          b = this.projectiles.spawn(a, l, c, !1, {
            id: o,
            owner: n,
            guide: h,
            speed: y,
            ignoreVehicle: u !== 65535 ? u : g?.id,
            serverDriven: !!(r & 2),
            planet: d,
            cruiseY: f,
            cruiseReached: !!(p & 1),
            terminalDive: !!(p & 2),
            homing: m !== 65535 ? m : void 0,
          });
        if (
          (b &&
            this.vehicles.vehicles.get(u)?.type === L.TANK &&
            this.vehicles.tankLaunch(u, l, this.camera.position),
          b &&
            this.vehicles.vehicles.get(u)?.type === L.MORTAR &&
            this.vehicles.mortarLaunch(u, l, this.camera.position),
          b && a === mt.SHELL && this.vehicles.vehicles.get(u)?.type !== L.TANK)
        ) {
          const S = l.distanceTo(this.camera.position);
          S < 240 &&
            this.sfx.shot(
              this.vehicles.vehicles.get(u)?.type === L.PLANE ? "mg" : "tank",
              S,
              !1,
              0.7,
            );
        }
        if (b && n !== this.myId && (a === mt.MISSILE || a === mt.ROCKET)) {
          const S = l.distanceTo(this.camera.position);
          S < 150 && this.sfx.shot("rpg", S, !1, this.effectExposure(l));
        }
        (b &&
          a === mt.TOMAHAWK &&
          this.sfx.tomahawkLaunch(l.distanceTo(this.camera.position)),
          b &&
            a === mt.NUCLEAR &&
            this.sfx.nuclearLaunch(l.distanceTo(this.camera.position)));
      }),
      e.on(ue.S_TANK_AIM, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = o ? new k(i.f32(), i.f32(), i.f32()) : null,
          r = o ? new k(i.f32(), i.f32(), i.f32()) : void 0;
        this.vehicles.tankAimReady(n, a, r);
      }),
      e.on(ue.S_PROJ_REMOVE, (i) => {
        const n = i.u32(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = i.u8();
        this.projectiles.removeById(n, o, a, r, this.camera.position, l === 1);
      }),
      e.on(ue.S_EXPLOSION, (i) => {
        const n = i.u16(),
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
        if (!r || n !== this.myId) {
          const h = this.effectExposure(o);
          (this.effects.explosion(o, a, this.camera.position, h, l, c),
            this.sfx.blast(l, o.distanceTo(this.camera.position), h, a),
            l === Wt.GRENADE &&
              a < 6 &&
              this.effects.fragments(
                o,
                this.camera.position,
                joe.range,
                (u, f, p) => this.world.raycast(u, f, p)?.dist ?? null,
              ));
          const d = o.distanceToSquared(this.player.pos);
          Uo(d < 100 ? "heavy" : d < 625 ? "medium" : "light", 120);
        }
      }),
      e.on(ue.S_SIREN, (i) => {
        (i.remaining() > 0 ? i.u8() : 0) !== 2 && this.sfx.siren();
      }),
      window.addEventListener("cosmetics-changed", () => {
        this.running &&
          this.inventoryReady &&
          JSON.stringify([
            Lt.character,
            Lt.character === "custom" ? Lt.custom : null,
            Lt.weapons,
          ]) !== this.lastCosmeticLooks &&
          this.sendCosmetics(!0);
      }),
      e.on(ue.S_COSMETICS, (i) => {
        const n = JSON.parse(i.str());
        if (n.id === this.myId) {
          if (((this.ownAppearance = n), n.weapon)) {
            for (const o of this.inventory.hotbar)
              o.cosmetic?.uid === n.weapon.uid &&
                (o.cosmetic = { ...n.weapon });
            (this.weapons.setCosmetic(
              this.inventory.hotbar[this.inventory.sel]?.cosmetic,
              n.owner,
            ),
              G.renderHotbar());
          }
          (this.selfBody && Oc(this.selfBody.group, n.character, n.custom),
            this.refreshSelfArmor());
        } else this.remotes.setCosmetics(n.id, n);
      }),
      e.on(ue.S_ACCOUNT, (i) => {
        const n = JSON.parse(i.str());
        ((this.net.httpSessionToken = n.httpToken || ""),
          Pq(n),
          this.operations?.refreshAccess(),
          this.remotes.refreshRoles(),
          this.renderTab());
      }),
      e.on(ue.S_TABLIST, (i) => {
        const n = i.u8();
        this.lastTab = [];
        for (let o = 0; o < n; o++) {
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
        const n = i.u16(),
          o = i.u32();
        if ((this.remotes.setRank(n, o), n === this.myId)) {
          const r = Rf(this.myXp),
            l = Rf(o);
          (this.myXpSeen &&
            l > r &&
            o - this.myXp <= 5e3 &&
            this.celebratePromotion(l),
            (this.myXpSeen = !0),
            G.setProgress(o),
            (this.myXp = o),
            this.trainingStarted ||
              ((this.trainingStarted = !0), this.training.begin(o)));
        }
        const a = this.lastTab.find((r) => r.id === n);
        (a && (a.xp = o), this.renderTab());
      }),
      e.on(ue.S_DISGUISE, (i) => {
        const n = i.u16(),
          o = { kind: i.u8(), id: i.u16(), meta: i.u8() },
          a = n === this.myId ? this.player.pos : this.remotes.getPos(n);
        (a && this.effects.disguisePoof(a.clone(), o.kind === la.NONE),
          n === this.myId
            ? this.setMyDisguise(o)
            : this.remotes.setDisguise(n, o));
      }),
      e.on(ue.S_SPEECH, (i) => {
        const n = i.u16(),
          o = i.str();
        n !== this.myId && this.remotes.showSpeech(n, o);
      }),
      e.on(ue.S_FLY, (i) => {
        const n = i.u8();
        ((this.player.noclip = (n & 2) !== 0), (this.player.flying = n !== 0));
      }),
      e.on(ue.S_GAMEMODE, (i) => {
        ((this.inventory.creative = i.u8() === 1),
          G.renderHotbar(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_GIVE, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = i.remaining() >= 2 ? i.u16() : void 0,
          r = i.remaining() >= 2 ? i.u16() : void 0,
          l = i.remaining() >= 2 ? i.u16() : void 0;
        (this.inventory.addItem(n, o, a, r, l), G.renderHotbar());
      }),
      e.on(ue.S_INV_LOAD, (i) => {
        const n = i.u8(),
          o = [];
        for (let m = 0; m < n; m++)
          o.push({
            id: i.u16(),
            count: i.u16(),
            durability: i.u16(),
            suppressorDurability: i.u16(),
            magazine: i.u16(),
          });
        const a = i.remaining() >= 8 ? Nhe(i.u32(), i.u32()) : 0,
          r = i.remaining() >= 4 ? i.u32() : 0;
        if (i.remaining() >= 2) {
          const m = JSON.parse(i.str());
          for (let g = 0; g < o.length; g++) o[g].cosmetic = m[g] ?? void 0;
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
        const p = qr(this.inventory.armor[0]);
        (this.vision.sync(
          p,
          this.inventory.armor[0]?.suppressorDurability ?? Sr(p),
        ),
          (this.inventoryReady = !0),
          (this.invDirty = !1),
          f && (this.sendInventory(), this.net.requestLocalSave()),
          this.syncHeld(),
          c && l === this.invSeq && this.weapons.redoReload(),
          G.renderHotbar(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_EQUIPMENT_REPAIR, (i) =>
        G.finishEquipmentRepair(i.u8(), i.u32()),
      ),
      e.on(ue.S_BALANCE, (i) => {
        const n = i.u32(),
          o = i.remaining() >= 8 ? i.f64() : n;
        (this.lastBalance !== null &&
          o > this.lastBalance &&
          (this.trainingEarned = !0),
          (this.lastBalance = o),
          G.setBalance(o));
      }),
      e.on(ue.S_WORLD_RULES, (i) => {
        try {
          const n = JSON.parse(i.str());
          if (!Sie(n.worldBorder) || typeof n.casinoEnabled != "boolean")
            return;
          ((this.world.border = n.worldBorder),
            this.borderVisual?.setBorder(n.worldBorder),
            (G.worldBorder = n.worldBorder),
            G.refreshMap(),
            (this.minimapLastZoom = 0),
            this.spawnNotice.setZone(n.spawnZone));
          const o = n.spawnHub;
          (this.spawnNotice.setKiosks(o?.kiosks),
            (G.spawnHub =
              o && [o.x, o.z].every(Number.isFinite)
                ? {
                    x: o.x,
                    z: o.z,
                    name:
                      typeof o.name == "string" ? o.name.slice(0, 48) : "Spawn",
                    radius: Math.max(0, n.spawnZone?.radius ?? 0),
                  }
                : null),
            this.casino?.setPlayingEnabled(n.casinoEnabled),
            this.voice.setRange(
              typeof n.voiceRange == "number" ? n.voiceRange : 0,
            ));
          const a = n.gameMode;
          if (((hs.speed = 1), a === "air")) this.enterAirMode();
          else if (a === "frontline" || a === "tdm" || a === "armsrace") {
            this.front.activate(
              a === "tdm" ? "tdm" : a === "armsrace" ? "armsrace" : "conquest",
            );
            const r = n.frontMap,
              l = Pa(r)?.haze;
            (this.sky.setHaze(l?.color ?? null, l?.horizon, l?.dome),
              (this.world.viewHalf = Pa(r)?.view ?? 0),
              this.borderVisual &&
                (this.borderVisual.noticeDistance = a === "frontline" ? 12 : 0),
              this.vehicles && (this.vehicles.flightCeiling = 150),
              (hs.speed = Pa(r)?.airSpeed ?? 1),
              this.input.mobile &&
                !this.battleProfileApplied &&
                ((this.battleProfileApplied = !0), this.applyQuality()));
          }
        } catch (n) {
          console.warn("Invalid world rules", n);
        }
      }),
      e.on(ue.S_TELEPORT_REQUEST, (i) => {
        const n = i.u8() === 1,
          o = i.str(),
          a = i.u16();
        n
          ? (G.showTeleportRequest(o, a), this.sfx.uiTick(!0))
          : G.hideTeleportRequest(o);
      }),
      e.on(ue.S_VEH_BOUNDARY, (i) => {
        const n = i.u16(),
          o = i.f32(),
          a = i.f32(),
          r = i.f32(),
          l = this.vehicles.vehicles.get(n);
        l &&
          (l.pos.set(o, a, r),
          l.target.pos.copy(l.pos),
          l.vel.set(0, 0, 0),
          l.motion.reset());
      }),
      e.on(ue.S_SCREEN, (i) => {
        try {
          this.screens?.apply(JSON.parse(i.str()).records ?? []);
        } catch (n) {
          console.warn("Invalid screen update", n);
        }
      }),
      e.on(ue.S_CASINO, (i) => {
        try {
          this.casino?.receive(JSON.parse(i.str()));
        } catch (n) {
          console.warn("Invalid casino response", n);
        }
      }),
      e.on(ue.S_COMPUTER, (i) => {
        try {
          this.computer?.receive(JSON.parse(i.str()));
        } catch (n) {
          console.warn("Invalid computer response", n);
        }
      }),
      e.on(ue.S_KEEPINV, (i) => {
        this.keepInventory = i.u8() === 1;
      }),
      e.on(ue.S_FRONT, (i) => {
        try {
          const n = JSON.parse(i.str());
          if (n.t === "stores") {
            this.airWeapons?.stores(n.m, n.f);
            return;
          }
          if (n.t === "mw") {
            this.airWeapons?.warn(n.d, n.x, n.z);
            return;
          }
          if (n.t === "flr") {
            const o = this.vehicles.vehicles.get(n.v);
            o && this.airWeapons?.flaresFrom(o);
            return;
          }
          if (n.t === "site") return;
          (this.front.receive(n),
            Eq(
              this.front.active && !this.front.arms
                ? (this.front.team ?? 0)
                : 0,
            ));
        } catch (n) {
          console.warn("Invalid frontline message", n);
        }
      }),
      e.on(ue.S_BOT_SPAWN, (i) => {
        const n = i.u16(),
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
          m = i.remaining() >= 2 ? i.u16() : 0,
          g = i.remaining() >= 1 && i.u8() === 1;
        this.bots.onSpawn(n, o, a, r, l, c, h, u, f, p, m, g);
      }),
      e.on(ue.S_BOT_STATE, (i) => {
        const n = i.u8(),
          o = [];
        for (let r = 0; r < n; r++)
          o.push([i.u16(), i.f32(), i.f32(), i.f32(), i.f32(), i.u8()]);
        const a =
          i.remaining() >= 4 ? i.u32() : Math.round(performance.now()) >>> 0;
        for (const r of o) this.bots.onState(...r, a);
      }),
      e.on(ue.S_BOT_HP, (i) => this.bots.onHp(i.u16(), i.u16())),
      e.on(ue.S_BOT_DESTROY, (i) => {
        const n = i.u16();
        if (i.remaining() >= 9) {
          const o = i.u8(),
            a = i.f32(),
            r = i.f32();
          this.bots.onDestroy(
            n,
            o & 1 ? { blast: !!(o & 2), dirX: a, dirZ: r } : void 0,
          );
        } else this.bots.onDestroy(n);
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
        const n = i.u8();
        for (let o = 0; o < n; o++) {
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
        const n = i.u16(),
          o = i.u16(),
          a = this.animals.voiceInfo(n)?.hp ?? o;
        (this.animals.onHp(n, o), o < a && o > 0 && this.animalCry(n, "hurt"));
      }),
      e.on(ue.S_ANIMAL_EVENT, (i) => {
        const n = i.u16(),
          o = i.u8();
        this.animals.onEvent(n, o);
        const a = this.animals.positionOf(n),
          r = a ? a.distanceTo(this.player.pos) : 999;
        if (this.animals.typeOf(n) === Bt.WENDIGO) {
          this.autumn?.wendigoEvent(o, a, r, this.player.yaw, this.player.pos);
          return;
        }
        r > 30 ||
          (o === hr.EGG
            ? this.sfx.eggLaid()
            : o === hr.SHEARED
              ? this.sfx.shear()
              : o === hr.MILKED
                ? this.sfx.milk()
                : o === hr.EAT
                  ? this.sfx.graze(r)
                  : o === hr.DRANK
                    ? this.sfx.graze(r)
                    : o === hr.BITE &&
                      (this.sfx.sharkBite(r),
                      a &&
                        (this.effects.bloodHit(a), this.effects.splash(a, 6))));
      }),
      e.on(ue.S_ANIMAL_REMOVE, (i) => {
        const n = i.u16(),
          o =
            i.remaining() >= 13
              ? { cause: i.u8(), dirX: i.f32(), dirZ: i.f32(), speed: i.f32() }
              : void 0,
          a = this.animals.riders().find((r) => r.animalId === n);
        (a && this.seatRider(a.playerId, !1),
          o && o.cause !== ml.DESPAWN && this.animalCry(n, "death"),
          this.animals.onRemove(n, o));
      }),
      e.on(ue.S_ANIMAL_RIDER, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = this.animals.riders().find((r) => r.animalId === n);
        (a && this.seatRider(a.playerId, !1),
          this.animals.setRider(n, o === 65535 ? -1 : o),
          o !== 65535 && this.seatRider(o, !0));
      }),
      e.on(ue.S_FISH, (i) => {
        const n = i.u16(),
          o = i.u8(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.remaining() > 0 ? i.u8() : Ci.EARTH,
          h = i.remaining() >= 2 ? i.u16() : 0;
        if (c !== this.currentPlanet) return;
        const d = this.fishing.positionOf(n)?.clone(),
          u = this.fishing.onState(n, o, a, r, l, h),
          p = (this.fishing.positionOf(n) ?? this.tmpV.set(a, r, l)).distanceTo(
            this.player.pos,
          );
        p > 40 ||
          (u === "cast"
            ? this.sfx.castLine(p)
            : u === "caught"
              ? (d && this.effects.splash(d, 5),
                this.sfx.splash(0.5),
                n !== this.myId && this.sfx.reelIn())
              : u === "landed"
                ? (this.effects.splash(this.tmpV2.set(a, r, l), 3),
                  this.sfx.splash(0.4))
                : u === "bite" &&
                  (this.effects.splash(this.tmpV2.set(a, r, l), 4),
                  this.sfx.fishBite(p),
                  n === this.myId &&
                    (G.setHint(
                      z("fishBiteHint", {
                        action: this.input.mobile
                          ? z("useAction")
                          : z("rmbAction"),
                      }),
                    ),
                    Pie("warning"))));
      }),
      e.on(ue.S_OPERATION, (i) => {
        const n = JSON.parse(i.str());
        (this.operations?.receive(
          n.channel,
          this.currentPlanet === Ci.EARTH ? n.state : null,
        ),
          G.setOperationPoints(this.operations?.points() ?? []));
      }),
      e.on(ue.S_MISSION_STATUS, (i) =>
        this.operations?.setAvailability(i.u8()),
      ),
      e.on(ue.S_RAID_STATUS, (i) => {
        const n = i.u8() === 1;
        this.raidActive = n;
        const o = i.u8(),
          a = i.u8(),
          r = i.u16(),
          l = i.u16(),
          c = i.u32();
        G.setRaidStatus(n, o, a, r, l, c);
      }),
      e.on(ue.S_RAID_LEADERBOARD, (i) => {
        const n = [];
        for (let a = 0, r = i.u8(); a < r; a++)
          n.push({
            name: i.str(),
            infantry: i.u16(),
            vehicles: i.u16(),
            points: i.u32(),
          });
        const o = n.map((a) => ({
          ...a,
          repair: 0,
          rescues: 0,
          objectives: 0,
          transport: 0,
        }));
        if (i.remaining() >= n.length * 8)
          for (const a of o)
            ((a.repair = i.u16()),
              (a.rescues = i.u16()),
              (a.objectives = i.u16()),
              (a.transport = i.u16()));
        G.setRaidLeaderboard(o);
      }),
      e.on(ue.S_RAID_ZONE, (i) => {
        const n = i.u8() === 1,
          o = i.f32(),
          a = i.f32(),
          r = i.f32();
        ((this.raidZone = n ? { x: o, z: a, radius: r } : null),
          G.setRaidZone(this.raidZone));
      }),
      e.on(ue.S_NUCLEAR_STRIKE, (i) => {
        const n = i.u8(),
          o = i.u32(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.u16();
        (n === 0
          ? this.nuclearStrikes.delete(o)
          : this.nuclearStrikes.set(o, {
              x: a,
              z: r,
              radius: l,
              expiresAt: Date.now() + c * 1e3,
            }),
          G.mapOpen && G.refreshMap());
      }),
      e.on(ue.S_QUEST_STATUS, (i) => {
        const n = i.u8(),
          o = i.str(),
          a = i.str(),
          r = i.u32(),
          l = i.u16(),
          c = i.u16(),
          h = i.u32(),
          d = i.u32();
        (G.setQuestStatus(n, o, a, r, l, c, h, d),
          this.operations?.setQuest(n ? o : ""));
      }),
      e.on(ue.S_QUEST_POINT, (i) => {
        const n = [];
        for (let o = 0, a = i.u8(); o < a; o++)
          n.push({ kind: i.u8(), x: i.f32(), z: i.f32(), radius: i.f32() });
        G.setQuestPoints(n);
      }),
      e.on(ue.S_ITEM_REMOVE, (i) => {
        (this.inventory.removeItem(i.u16(), i.u16()),
          G.renderHotbar(),
          this.syncHeld(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_KNOCKBACK, (i) => {
        this.player.applyImpulse(i.f32(), i.f32(), i.f32());
      }),
      e.on(ue.S_BUCKET_RESULT, (i) => {
        (this.inventory.applyBucketResult(i.u8(), i.u16()),
          G.renderHotbar(),
          this.syncHeld(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_ITEM_DURABILITY, (i) => {
        const n = i.u8(),
          o = i.u16(),
          a = i.u16(),
          r = i.u16();
        (this.inventory.applyDurability(n, o, a, r),
          n === this.inventory.sel && this.syncHeld(),
          G.renderHotbar(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_ARMOR_DURABILITY, (i) => {
        const n = i.u8(),
          o = i.u16(),
          a = i.u16();
        (this.inventory.applyArmorDurability(n, o, a),
          (this.player.maxHp = R1(this.inventory.equippedIds())),
          (this.player.hp = Math.min(this.player.hp, this.player.maxHp)),
          G.setHP(this.player.hp, this.player.maxHp),
          G.renderHotbar(),
          G.invOpen && G.openInventory());
      }),
      e.on(ue.S_WORLD_OBJECTS, (i) => {
        const n = [];
        for (let o = 0, a = i.u16(); o < a; o++)
          n.push({
            id: i.str(),
            name: i.str(),
            x: i.f32(),
            z: i.f32(),
            radius: i.f32(),
          });
        ((this.worldObjects = n), G.setWorldObjects(n));
      }),
      e.on(ue.S_WORLD_SITES, (i) => {
        const n = [];
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
            g = i.u8(),
            y = i.u8() === 1,
            b = i.str(),
            S = i.u32(),
            M = i.remaining() > 0 && i.u8() === 1;
          n.push({
            id: r,
            name: l,
            kind: c,
            x: h,
            y: d,
            z: u,
            radius: f,
            command: p,
            flag: m,
            state: g,
            alarm: y,
            owner: b,
            supplySeconds: S,
            supplyReady: M,
          });
        }
        (this.worldSites.setSites(n),
          G.setSiteKinds(new Map(n.map((o) => [o.id, o.kind]))),
          G.setHeldSites(
            n
              .filter(
                (o) => o.state === 2 && !!this.claimsUI?.ownerAllows(o.owner),
              )
              .map((o) => o.id),
          ));
      }),
      e.on(ue.S_CHEST, (i) => {
        const n = i.i32(),
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
            G.chestOpen &&
            this.chestPos &&
            this.chestPos.x === n &&
            this.chestPos.y === o &&
            this.chestPos.z === a
          )) ||
          (!c &&
            this.chestPos &&
            (this.chestPos.x !== n ||
              this.chestPos.y !== o ||
              this.chestPos.z !== a) &&
            this.world.chestLids.setOpen(
              this.chestPos.x,
              this.chestPos.y,
              this.chestPos.z,
              !1,
            ),
          (this.chestPos = { x: n, y: o, z: a }),
          !c &&
            !this.world.chestLids.isOpen(n, o, a) &&
            this.chestSound(n, o, a, !0),
          c || this.world.chestLids.setOpen(n, o, a, !0),
          G.openChest(l, jh(le[this.world.getBlock(n, o, a)])),
          c || this.input.unlock());
      }),
      e.on(ue.S_CHEST_LID, (i) => {
        const n = i.i32(),
          o = i.u8(),
          a = i.i32(),
          r = i.u8() === 1,
          l = this.world.chestLids,
          c =
            G.chestOpen &&
            this.chestPos?.x === n &&
            this.chestPos?.y === o &&
            this.chestPos?.z === a;
        (!c && l.isOpen(n, o, a) !== r && r && this.chestSound(n, o, a, !0),
          (c && !r) || l.setOpen(n, o, a, r));
      }),
      e.on(ue.S_BACKPACK_SPAWN, (i) => {
        const n = i.u16(),
          o = i.str(),
          a = i.f32(),
          r = i.f32(),
          l = i.f32(),
          c = i.remaining() > 0 ? i.u8() : Ci.EARTH;
        this.backpacks.onSpawn(n, o, a, r, l, c);
      }),
      e.on(ue.S_BACKPACK_REMOVE, (i) => {
        const n = i.u16();
        (this.backpacks.onRemove(n),
          this.backpackId === n && ((this.backpackId = null), G.closeChest()));
      }),
      e.on(ue.S_BACKPACK, (i) => {
        const n = i.u16(),
          o = i.str();
        ((this.backpackId = n), (this.chestPos = null));
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
        (G.openChest(a, z("backpackTitle", { owner: o })), this.input.unlock());
      }),
      e.on(ue.S_FURNACE, (i) => {
        const n = i.i32(),
          o = i.u8(),
          a = i.i32();
        this.furnacePos = { x: n, y: o, z: a };
        const r = [];
        for (let u = 0; u < 3; u++) r.push({ id: i.u16(), count: i.u16() });
        const l = i.u16() / 1e3,
          c = i.u8(),
          h = i.remaining() > 0 ? i.u8() !== 0 : !1,
          d = i.remaining() > 0 ? i.u8() / 255 : 0;
        (G.openFurnace(r, l, c, h, d), this.input.unlock());
      }),
      e.on(ue.S_DROP_SPAWN, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = i.u16(),
          r = i.f32(),
          l = i.f32(),
          c = i.f32(),
          h = i.f32(),
          d = i.remaining() >= 2 ? i.u16() : 0,
          u = i.remaining() >= 2 ? i.u16() : 0,
          f = i.remaining() >= 2 ? i.u16() : void 0,
          p = i.remaining() > 0 ? i.u8() : Ci.EARTH,
          m = i.remaining() >= 2 ? JSON.parse(i.str()) : void 0;
        this.drops.onSpawn(n, o, a, r, l, c, h, d, u, f, p, m);
      }),
      e.on(ue.S_DROP_REMOVE, (i) => {
        const n = i.u16(),
          o = i.u16(),
          a = i.remaining() > 0 && i.u8() === 1,
          {
            itemId: r,
            count: l,
            durability: c,
            suppressorDurability: h,
            magazine: d,
          } = this.drops.onRemove(n);
        o === this.myId &&
          r > 0 &&
          (a || this.inventory.addItem(r, l, c, h, d),
          this.sfx.pickup(),
          G.renderHotbar());
      }),
      e.on(ue.S_PONG, (i) => {
        const n = i.u32();
        this.lastRtt =
          Math.max(0, (performance.now() & 4294967295) - n) & 65535;
      }),
      (e.onClose = (i) => {
        this.running && this.end(i || z("connectionLost"));
      }),
      (e.onReconnectState = (i) => {
        if ((i && this.voice.disconnected(), !this.running)) return;
        if (i && (this.restartExpected || e.lastCloseCode === a9)) {
          this.followServerRestart();
          return;
        }
        (!i &&
          this.followingRestart &&
          ((this.followingRestart = this.restartExpected = !1),
          ic.hide(),
          G.showLoading(!1)),
          i ? ic.offline() : ic.mode === "offline" && ic.hide());
        const n = e.lastLoss;
        (!i &&
          n &&
          this.front.active &&
          ((e.lastLoss = null),
          e.send(
            new lt(ue.C_FRONT).str(
              JSON.stringify({ a: "netlost", ...n, stall: this.longFrame }),
            ),
          )),
          G.addChat(
            i ? 2 : 1,
            z(i ? "connectionReconnecting" : "connectionRestored"),
          ));
      }),
      e.on(ue.S_SERVER_NOTICE, (i) => {
        const n = dre(i.str());
        n &&
          (n.kind === "restart"
            ? (ic.countdown(n.seconds, n.reason), Y7())
            : n.kind === "cancel"
              ? ((this.restartExpected = !1), ic.hide())
              : ((this.restartExpected = !0), ic.restarting(n.reason)));
      }),
      (this.world.requestChunk = (i, n) => {
        this.net.send(
          new lt(ue.C_CHUNK_REQ).u8(this.currentPlanet).i32(i).i32(n),
        );
      }),
      (this.world.requestMapTiles = (i) => {
        const n = new lt(ue.C_MAP_TILES).u8(this.currentPlanet).u8(i.length);
        for (const o of i) n.u8(o.lod).i32(o.tx).i32(o.tz);
        this.net.send(n);
      }),
      (this.world.onMapTileUpdate = () => {
        (G.refreshMap(), (this.minimapLastZoom = 0), (this.minimapTimer = 1));
      }));
  }
  ambienceView() {
    const e = this.vehicles.mine,
      t = this.front.state?.f ?? [],
      i = this.vehicles.vehicles;
    return {
      machines: (function* () {
        for (const n of i.values())
          yield {
            pos: n.pos,
            vel: n.vel,
            tank: n.type === L.TANK,
            jet: on(n.type),
            hp: n.hp,
            side: n === e ? "me" : n.hpBar.userData.side,
          };
      })(),
      zones: t.map((n) => ({ x: n[4], y: n[6], z: n[5], owner: n[1] })),
      team: this.front.team,
      dayness: this.sky.dayness,
    };
  }
  enterAirMode() {
    if (
      (this.front.activate("air"),
      (hs.speed = p_),
      (hs.honest = !0),
      (hs.shown = uq / p_),
      (hs.ground = bb.speed),
      (hs.tankGun = bb.aaRange),
      (hs.shellSpeed = bb.shellSpeed),
      (hs.gunRange = mo.gunRange),
      (hs.sensorRange = mo.sensorRange),
      this.vehicles && (this.vehicles.flightCeiling = HP),
      this.borderVisual && (this.borderVisual.noticeDistance = 60),
      (this.world.viewHalf = 0),
      (this.world.generatedTop = (i, n) => Math.max(Bs, vy(i, n))),
      (this.world.tintSeed = zO),
      this.sky.setHaze("#bccbd9", 0.42, 0.1),
      this.sky.setCloudDeck(40, 14, vb, 38),
      Z0e(vb - 20, vb + 90),
      Q0e(0.15),
      this.airTerrain)
    )
      return;
    ((this.airTerrain = new _oe(this.scene, () => this.player.pos)),
      this.airTerrain.setAtlas(this.atlas.canvas),
      (this.airProps = new Moe(
        this.scene,
        this.airTerrain.sharedUniforms,
        this.atlas.canvas,
        this.player.pos,
      )));
    const e = (this.airAmbience = new Woe(this.scene, this.sfx));
    (this.vehicles && (this.vehicles.onWreckLanded = (i, n) => e.wreck(i, n)),
      (this.projectiles.airMissiles = !0),
      (this.projectiles.homingPos = (i) => {
        const n = this.vehicles.vehicles.get(i);
        return n ? this.tmpHoming.copy(n.pos).add(this.tmpHomingUp) : null;
      }),
      (this.airTrails = new Boe(this.scene)),
      (this.jetGun = new Coe(this.scene, mo.roundSpeed, mo.gunRange)),
      (this.airWeapons = new Ioe(this.scene, (i) =>
        this.net.send(new lt(ue.C_FRONT).str(JSON.stringify(i))),
      )));
    const t = this.airWeapons;
    (this.vehicles && (this.vehicles.jetSecondary = () => t.tryLaunch()),
      (this.camera.near = 0.25),
      (this.camera.far = 16e3),
      this.camera.updateProjectionMatrix(),
      (G.minimapScaleMul = 12),
      this.input.mobile &&
        !this.battleProfileApplied &&
        ((this.battleProfileApplied = !0), this.applyQuality()));
  }
  frontMapChange(e, t) {
    (this.corpses.clear(),
      this.killGhosts?.clear(),
      this.drops.clear(),
      this.backpacks.clear(),
      this.world.clearDimension(),
      (this.compassRefreshAt = 0),
      (this.minimapLastZoom = 0),
      G.refreshMap(),
      BV(e, t, () => {
        const i = this.world.readiness(
          this.player.pos.x,
          this.player.pos.z,
          this.input.mobile ? 1 : 2,
        );
        return i.total ? i.built / i.total : 1;
      }));
  }
  beginPlanetTransition(e, t, i, n, o) {
    const a = e === Ci.MOON,
      r = document.createElement("div");
    ((r.id = "planet-transition"),
      (r.innerHTML = `<div class="orbit-lines"></div><div class="planet-disc ${a ? "moon" : "earth"}"></div>
      <div class="transfer-kicker">${I("PLANETARY TRANSFER", "МЕЖПЛАНЕТНЫЙ ПЕРЕЛЁТ")}</div>
      <div class="transfer-title">${a ? I("MOON", "ЛУНА") : I("EARTH", "ЗЕМЛЯ")}</div>
      <div class="transfer-coords">${Math.round(i)} / ${Math.round(o)}</div>
      <div class="transfer-bar"><i></i></div><div class="transfer-tip">${I("Preparing to land…", "Подготовка к посадке…")}</div>`),
      (r.style.cssText =
        "position:fixed;inset:0;z-index:100000;background:radial-gradient(circle at 50% 42%,#17213c 0,#050712 38%,#010207 100%);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:system-ui,sans-serif;overflow:hidden;opacity:0;transition:opacity .25s"));
    const l = document.createElement("style");
    ((l.textContent =
      "#planet-transition .planet-disc{width:min(31vw,190px);aspect-ratio:1;border-radius:50%;margin-bottom:24px;box-shadow:0 0 60px #76aaff66,inset -24px -18px 38px #000a;position:relative;z-index:2}#planet-transition .planet-disc.moon{background:radial-gradient(circle at 35% 28%,#eee 0,#a9acb2 46%,#555962 100%)}#planet-transition .planet-disc.earth{background:radial-gradient(circle at 34% 28%,#77c7ff,#1680d2 43%,#0a397d 78%)}#planet-transition .transfer-kicker{font-size:11px;letter-spacing:.42em;color:#8ebcff}#planet-transition .transfer-title{font-weight:900;font-size:clamp(38px,10vw,72px);letter-spacing:.18em;margin-right:-.18em;text-shadow:0 0 30px #7fb7ff88}#planet-transition .transfer-coords,#planet-transition .transfer-tip{font-size:12px;color:#aab7cc;margin-top:9px;text-align:center;padding:0 20px}#planet-transition .transfer-bar{width:min(72vw,420px);height:4px;background:#ffffff18;border-radius:9px;margin-top:26px;overflow:hidden}#planet-transition .transfer-bar i{display:block;height:100%;background:linear-gradient(90deg,#56d8ff,#fff,#8a7dff);animation:fc-load 1.35s ease-in-out forwards}@keyframes fc-load{from{width:0}to{width:100%}}#planet-transition .orbit-lines{position:absolute;width:min(95vw,720px);aspect-ratio:1;border:1px solid #79aaff22;border-radius:50%;box-shadow:0 0 0 55px #79aaff0b,0 0 0 125px #79aaff08;animation:fc-orbit 10s linear infinite}@keyframes fc-orbit{to{transform:rotate(360deg)}}"),
      r.appendChild(l),
      document.body.appendChild(r),
      requestAnimationFrame(() => {
        r.style.opacity = "1";
      }),
      window.setTimeout(() => {
        (this.vehicles.clearForTransition(t),
          this.c4?.clear(),
          this.eggs?.clear(),
          this.knives?.clear(),
          this.drops.clear(),
          this.backpacks.clear(),
          this.bots.clear(),
          this.corpses.clear(),
          this.killGhosts?.clear(),
          this.animals.clear(),
          this.worldSites.clear(),
          this.nuclearStrikes.clear(),
          (this.currentPlanet = a ? Ci.MOON : Ci.EARTH),
          G.setWaypointPlanet(this.currentPlanet),
          (this.compassRefreshAt = 0),
          this.world.clearDimension(),
          this.player.pos.set(i, n, o),
          this.player.vel.set(0, -5, 0),
          (this.player.gravityScale = a ? am : 1),
          this.sky.setLunar(a),
          this.vehicles.setPlanet(this.currentPlanet),
          this.projectiles.setPlanet(this.currentPlanet),
          this.drops.setPlanet(this.currentPlanet),
          this.backpacks.setPlanet(this.currentPlanet),
          this.bots.setEnabled(!0),
          this.animals.setEnabled(!a),
          this.worldSites.setEnabled(!a));
        const c = this.vehicles.vehicles.get(t);
        (c &&
          ((c.planet = this.currentPlanet),
          c.pos.set(i, n, o),
          c.target.pos.copy(c.pos),
          c.vel.set(0, -5, 0)),
          this.weather?.setMode(0),
          this.net.send(new lt(ue.C_PLANET_READY).u8(this.currentPlanet)));
      }, 420),
      window.setTimeout(() => {
        ((r.style.opacity = "0"), window.setTimeout(() => r.remove(), 280));
      }, 1550));
  }
  wireHooks() {
    ((this.weapons.hooks = {
      guidedTarget: () => {
        const e = this.camera.getWorldPosition(new k()),
          t = this.camera.getWorldDirection(new k()),
          i = this.camera.quaternion.clone().invert(),
          n = this.front.active && !!this.front.team,
          o = this.front.team,
          a = [
            ...[...this.vehicles.vehicles.values()]
              .filter(
                (h) =>
                  h.planet === this.currentPlanet &&
                  h.hp > 0 &&
                  !(n && h.hpBar.userData.side !== "enemy"),
              )
              .map((h) => ({
                kind: 1,
                id: h.id,
                name: to(h.type),
                pos: h.pos.clone().add(new k(0, 1, 0)),
              })),
            ...this.bots
              .list()
              .filter(
                (h) => !h.npc && !(n && this.front.botTeams.get(h.id) === o),
              )
              .map((h) => ({
                kind: 2,
                id: h.id,
                name: I("Soldier", "Боец"),
                pos: h.pos.clone().add(new k(0, 1.1, 0)),
              })),
            ...this.remotes
              .list()
              .filter(
                (h) =>
                  h.planet === this.currentPlanet &&
                  !this.remotes.disguiseOf(h.id) &&
                  !(n && !this.front.isEnemyPlayer(h.id)),
              )
              .map((h) => ({
                kind: 3,
                id: h.id,
                name: h.name,
                pos: h.pos.clone().add(new k(0, 1.1, 0)),
              })),
          ].filter((h) => {
            const d = h.pos.clone().sub(e),
              u = d.length(),
              f = d.clone().applyQuaternion(i);
            return u > 240 ||
              f.z >= 0 ||
              Math.abs(f.x / -f.z) > 0.13 ||
              Math.abs(f.y / -f.z) > 0.1
              ? !1
              : !this.world.raycast(e, d.normalize(), Math.max(0, u - 0.6));
          }),
          r = this.weapons.lockTarget;
        if (
          (a.sort(
            (h, d) =>
              +(d.kind === r?.kind && d.id === r?.id) -
                +(h.kind === r?.kind && h.id === r?.id) ||
              h.pos.distanceToSquared(e) - d.pos.distanceToSquared(e),
          ),
          a[0])
        )
          return a[0];
        const l = this.world.raycast(e, t, 240),
          c = this.vehicles.rayHit(e, t, l?.dist ?? 240);
        return c &&
          n &&
          this.vehicles.vehicles.get(c.id)?.hpBar.userData.side !== "enemy"
          ? null
          : c
            ? {
                kind: 1,
                id: c.id,
                name: to(c.type),
                pos: e.addScaledVector(t, c.dist),
              }
            : null;
      },
      lockUpdate: (e, t) => this.net.send(new lt(ue.C_RPG_LOCK).u8(e).u16(t)),
      onShot: (e, t, i) => {
        ((this.selfShotUntil = performance.now() + 140),
          this.net.send(
            new lt(ue.C_SHOT)
              .u16(e)
              .f32(t.x)
              .f32(t.y)
              .f32(t.z)
              .f32(i.x)
              .f32(i.y)
              .f32(i.z),
          ),
          this.noteShot(e),
          this.input.mobile && Uo("light", 65));
      },
      onHitPlayer: (e, t, i, n, o, a) => {
        this.combatUntil = performance.now() + LM;
        const r = new lt(ue.C_HIT_PLAYER)
          .u16(e)
          .u8(Oe(t, 0, 255))
          .u16(i)
          .u8(n)
          .u32(this.playerEpochs.get(e) ?? 0);
        (o && a && r.f32(o.x).f32(o.y).f32(o.z).f32(a.x).f32(a.y).f32(a.z),
          this.net.send(r),
          G.hitmark(),
          this.sfx.hitmark());
      },
      onHitVehicle: (e, t, i, n = 1, o) => {
        const a = new lt(ue.C_HIT_VEHICLE).u16(e).u16(t);
        (i &&
          (a.u8(n).f32(i.x).f32(i.y).f32(i.z),
          o && a.f32(o.x).f32(o.y).f32(o.z)),
          this.net.send(a),
          G.hitmark(),
          this.sfx.hitmark());
      },
      onHitBot: (e, t, i, n, o, a) => {
        this.combatUntil = performance.now() + LM;
        const r = new lt(ue.C_HIT_BOT)
          .u16(e)
          .u8(Oe(t, 0, 255))
          .u16(i)
          .u8(n);
        (o && a && r.f32(o.x).f32(o.y).f32(o.z).f32(a.x).f32(a.y).f32(a.z),
          this.net.send(r),
          G.hitmark(),
          this.sfx.hitmark());
      },
      onHitAnimal: (e, t) => {
        (this.net.send(new lt(ue.C_HIT_ANIMAL).u16(e).u8(Oe(t, 0, 255))),
          G.hitmark(),
          this.sfx.hitmark());
      },
      onBulletHole: (e) => {
        this.bulletHoles.add(e);
      },
      onHitBlock: (e, t, i, n, o, a, r) => {
        const l = new lt(ue.C_BLOCK_HIT).i32(e).u8(t).i32(i).u8(n);
        (a && r && l.f32(a.x).f32(a.y).f32(a.z).f32(r.x).f32(r.y).f32(r.z),
          this.net.send(l));
      },
      onHitTarget: (e, t, i, n) => this.scoreTargetHit(e, t, i, n),
      personalVehicle: () =>
        this.vehicles.passengerCanShoot() ? this.vehicles.mine?.id : void 0,
      prepareShot: (e, t) => (
        this.sendPlayerState(),
        this.vehicles.preparePassengerShot(e, t)
      ),
      thirdPersonAim: () => this.tpAim,
      aimDistance: (e, t, i) => this.rayDistance(e, t, i),
      seatOrigin: (e) => this.vehicles.passengerShotOrigin(e),
      vehicleRay: (e, t, i) => this.vehicles.rayHit(e, t, i),
      botRay: (e, t, i) => this.bots.raycastHit(e, t, i),
      animalRay: (e, t, i) => this.animals.raycastHit(e, t, i),
      projectileRay: (e, t, i) => this.projectiles.rayHit(e, t, i),
      onHitProjectile: (e, t, i = 1) => {
        (this.net.send(
          new lt(ue.C_HIT_PROJ).u32(e).f32(t.x).f32(t.y).f32(t.z).u8(i),
        ),
          G.hitmark(),
          this.sfx.hitmark());
      },
      isCreative: () => this.inventory.creative,
      countItem: (e) =>
        this.front.endlessAmmo(e) ? 999 : this.inventory.countOf(e),
      endlessAmmo: (e) => this.front.endlessAmmo(e),
      returnAmmo: (e, t) =>
        this.front.endlessAmmo(e) ? t : this.inventory.addItem(e, t),
      ammoPicker: (e, t, i) => G.showAmmoPicker(e, t, i),
      impactExplosion: (e, t, i) => {
        (this.effects.explosion(e, t, this.camera.position),
          this.sfx.explosion(e.distanceTo(this.player.pos), 0.35),
          this.projectiles.hooks.sendExplosion(e, t, i, -1, t));
      },
      atomic: (e) => this.inventory.deferChanges(e),
      getHeldMagazine: () =>
        this.inventory.hotbar[this.inventory.sel]?.magazine,
      setHeldMagazine: (e) => {
        const t = this.inventory.hotbar[this.inventory.sel];
        !t ||
          t.id !== this.weapons.held ||
          ((t.magazine = e), this.inventory.save());
      },
      consumeItem: (e, t) => {
        if (this.front.endlessAmmo(e)) return !0;
        const i =
          e === w.GRENADE && t === 1 && this.inventory.held() === e
            ? this.inventory.consumeHeld()
            : this.inventory.consumeItem(e, t);
        return (
          i && (G.renderHotbar(), this.syncHeld(), (this.invDirty = !0)),
          i
        );
      },
      wearHeld: (e = 1) => {
        this.inventory.creative ||
          this.net.send(
            new lt(ue.C_ITEM_WEAR).u8(this.inventory.sel).u8(Oe(e, 1, 255)),
          );
      },
    }),
      (this.projectiles.hooks = {
        allowExplosion: (e) =>
          !this.spawnNotice.contains(e.x, e.z, this.currentPlanet),
        sendExplosion: (e, t, i, n, o, a = 0, r = 0) => {
          this.net.send(
            new lt(ue.C_EXPLOSION)
              .f32(e.x)
              .f32(e.y)
              .f32(e.z)
              .f32(t)
              .u16(i)
              .u16(n < 0 ? 65535 : n)
              .f32(o)
              .u32(a)
              .u8(r),
          );
        },
        sendSpawn: (e, t, i, n, o, a, r) => {
          const l = new lt(ue.C_PROJECTILE)
            .u32(e)
            .u8(t)
            .u8((o ? 1 : 0) | (a ? (t === mt.ROCKET ? 4 : 8) : 0))
            .f32(i.x)
            .f32(i.y)
            .f32(i.z)
            .f32(n.x)
            .f32(n.y)
            .f32(n.z);
          (o && l.f32(o.x).f32(o.y).f32(o.z),
            a && (l.u8(a), t === mt.ROCKET ? l.u16(r ?? 0) : l.u32(r ?? 0)),
            this.net.send(l));
        },
        vehicleImpact: (e, t) => this.vehicles.projHit(e, t),
        entityImpact: (e, t, i) => this.projectileEntityHit(e, t, i),
        onVehicleHit: (e, t, i, n = 2) => {
          const o = new lt(ue.C_HIT_VEHICLE).u16(e).u16(t);
          (i && o.u8(n).f32(i.x).f32(i.y).f32(i.z),
            this.net.send(o),
            G.hitmark(),
            this.sfx.hitmark());
        },
        onHitProjectile: (e, t, i = 1) => {
          this.net.send(
            new lt(ue.C_HIT_PROJ).u32(e).f32(t.x).f32(t.y).f32(t.z).u8(i),
          );
        },
      }),
      (this.vehicles.hooks = {
        sendState: (e) => {
          this.net.send(
            new lt(ue.C_VEH_STATE)
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
        sendRam: (e, t, i, n) =>
          this.net.send(new lt(ue.C_VEH_RAM).u16(e.id).f32(t).f32(i).f32(n)),
        sendEnter: (e, t) => {
          this.sendPlayerState();
          const i = new lt(ue.C_VEH_ENTER).u16(e);
          (t !== void 0 && i.u8(t), this.net.send(i), Uo("medium", 0));
        },
        sendExit: () => {
          (this.net.send(new lt(ue.C_VEH_EXIT)), Uo("soft", 0));
        },
        sendSpawn: (e, t, i) => {
          this.net.send(
            new lt(ue.C_VEH_SPAWN).u8(e).f32(t.x).f32(t.y).f32(t.z).u32(i),
          );
        },
        requestTankAim: (e, t) =>
          this.net.send(new lt(ue.C_TANK_AIM).u16(e).f32(t.x).f32(t.z)),
        sendHit: (e, t) =>
          this.net.send(new lt(ue.C_HIT_VEHICLE).u16(e).u16(t)),
        sendHeliCargo: (e, t) =>
          this.net.send(new lt(ue.C_HELI_CARGO).u16(e).u16(t)),
        mgFire: (e, t) => {
          (this.planeMg(e, t), this.input.mobile && Uo("light", 65));
        },
        seatGunFire: (e, t, i) => {
          (this.planeMg(e, t, i), this.input.mobile && Uo("light", 65));
        },
        lookOf: (e) => this.remotes.lookOf(e),
        seatGunBusy: () => this.inventory.held() === w.WELDER,
        seatGunOverheat: (e) => {
          (this.sfx.barrelHiss(),
            this.effects.exhaust(e, this.tmpV.set(0, 0.6, 0), 1),
            this.input.mobile && Uo("heavy", 0));
        },
        seatFigure: () => {
          const e = Kc(5662532);
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
          (this.projectiles.spawn(
            mt.ROCKET,
            e,
            t.clone().multiplyScalar(42),
            !0,
            { ignoreVehicle: this.vehicles.mine?.id },
          ),
            this.sfx.shot("rpg"),
            this.effects.flash(e, 3, 0.1),
            Uo("heavy", 0));
        },
        sendExplosion: (e, t, i, n, o = t) => {
          this.net.send(
            new lt(ue.C_EXPLOSION)
              .f32(e.x)
              .f32(e.y)
              .f32(e.z)
              .f32(t)
              .u16(i)
              .u16(n === void 0 || n < 0 ? 65535 : n)
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
          Br(this.remotes.getName(e)),
        isFriendlyName: (e) => e === Y.nick || this.friends.has(e) || Br(e),
        battleSide: (e) =>
          !this.front?.active || !this.front.team || !e
            ? null
            : e === this.front.team
              ? "ally"
              : "enemy",
      }),
      (this.vehicles.hooks.message = (e) => G.addChat(2, e)),
      (this.worldedit.onMsg = (e, t) => G.addChat(e, t)),
      (this.worldedit.sendOp = (e, t, i, n, o) => {
        this.net.send(
          new lt(ue.C_WORLDEDIT)
            .u8(e)
            .i32(t[0])
            .i32(t[1])
            .i32(t[2])
            .i32(i[0])
            .i32(i[1])
            .i32(i[2])
            .u8(n)
            .u8(o),
        );
      }),
      (this.player.onFallDamage = (e, t) => {
        this.net.send(
          new lt(ue.C_SELF_DAMAGE).u16(e).f32(t).u32(this.movementEpoch),
        );
      }));
  }
  wireUI() {
    (window.addEventListener("squad-changed", () => {
      this.running &&
        this.net.send(
          new lt(ue.C_SQUAD).str(JSON.stringify({ action: "refresh" })),
        );
    }),
      (G.onWaypointChange = () => this.shareWaypoint()),
      (G.onChatOpened = () => this.operations?.beginChat()),
      (G.onChatSend = (e) => {
        const t = FS(q4(e, Oa()) ?? V4(e, Oa()));
        if (t) {
          G.addChat(2, t);
          return;
        }
        if (e.startsWith("/") && !Ch(e)) {
          G.addChat(2, sa("You do not have permission to use this command"));
          return;
        }
        const i = this.operations?.chooseFromChat(e);
        if (i) {
          i === "invalid" &&
            G.addChat(
              2,
              I(
                "This choice is unavailable. Open chat again and use a number shown in the mission panel.",
                "Этот вариант недоступен. Откройте чат снова и введите номер из панели миссии.",
              ),
            );
          return;
        }
        const n = () => this.net.send(new lt(ue.C_COMMAND_AUDIT).str(e));
        if (e.trim().toLowerCase() === "/shop") {
          (n(), G.openShop(), this.input.unlock());
          return;
        }
        if (/^\/debug\s+hitbox(es)?$/.test(e.trim().toLowerCase())) {
          (n(),
            (this.debugHitboxes = !this.debugHitboxes),
            G.addChat(
              1,
              z("debugHitboxesToggle", {
                state: this.debugHitboxes ? z("stateOn") : z("stateOff"),
              }),
            ));
          return;
        }
        const o = /^\/fx(?:\s+(\S+))?(?:\s+(\d+(?:\.\d+)?))?$/i.exec(e.trim());
        if (o) {
          (n(),
            this.previewBlast((o[1] ?? "").toLowerCase(), Number(o[2]) || 0));
          return;
        }
        const a = /^\/slowmo(?:\s+(\S+))?$/i.exec(e.trim());
        if (a) {
          n();
          const l =
            a[1] === void 0 || a[1] === "off"
              ? this.effects.timeScale < 1
                ? 1
                : 0.25
              : Oe(Number(a[1]) || 1, 0.05, 1);
          ((this.effects.timeScale = l),
            G.addChat(
              1,
              I(
                l < 1 ? `Slow motion ×${l} · /slowmo off` : "Slow motion off",
                l < 1
                  ? `Замедление ×${l} · /slowmo off`
                  : "Замедление выключено",
              ),
            ));
          return;
        }
        if (e.startsWith("//")) {
          this.worldedit.handleCommand(e);
          return;
        }
        const r = /^\/(un)?block(?:\s+(\S+))?\s*$/i.exec(e.trim());
        if (r) {
          const l = r[2];
          l
            ? (t7(l, !r[1]),
              G.addChat(
                2,
                r[1]
                  ? I(`${l} is unblocked`, `${l} разблокирован`)
                  : I(
                      `${l} is blocked: you will not see their messages or hear their voice`,
                      `${l} заблокирован: вы не увидите его сообщений и не услышите голос`,
                    ),
              ))
            : G.addChat(
                2,
                Fb().length
                  ? I(
                      `Blocked: ${Fb().join(", ")}`,
                      `Заблокированы: ${Fb().join(", ")}`,
                    )
                  : I(
                      "Usage: /block <name> — hides their chat and voice for you",
                      "Использование: /block <ник> — скрывает для вас его чат и голос",
                    ),
              );
          return;
        }
        if (
          !this.net.isLocal &&
          !e.startsWith("/") &&
          !/^help$/i.test(e.trim())
        ) {
          const l = this.chatRate.wait(ha);
          if (l > 0) return (G.addChat(2, Po(kee(l, Oa()))), !1);
          this.chatRate.record(ha);
        }
        this.net.send(
          new lt(ue.C_CHAT)
            .str(e)
            .u8(ha === "squad" ? 1 : ha === "team" ? 2 : 0),
        );
      }),
      (K4.report = (e) =>
        !this.running || this.net.isLocal
          ? !1
          : (this.net.send(new lt(ue.C_CHAT).str(`/report ${e}`).u8(0)), !0)),
      (G.onUiOpen = () => this.input.unlockForUi()),
      (G.onChatClosed = () => {
        (this.operations?.endChat(),
          this.running && !G.anyOpen() && this.input.lock());
      }),
      (G.onTeleportAnswer = (e) =>
        this.net.send(new lt(ue.C_CHAT).str(e ? "/tpa" : "/tpc"))),
      (G.onMapClosed = () => {
        this.running && !G.anyOpen() && this.input.lock();
      }),
      (G.onlinePlayerNames = () => this.lastTab.map((e) => e.name)),
      (G.onToggleFriend = (e) => {
        const t = this.lastTab.find((i) => i.id === e);
        !t ||
          e === this.myId ||
          this.net.send(
            new lt(ue.C_FRIENDS)
              .u8(this.friends.has(t.name) ? 1 : 0)
              .str(t.name),
          );
      }),
      (G.onQualityChange = () => this.applyQuality()),
      (G.onSfxVolumeChange = (e) => this.sfx.setVolume(e)),
      (G.onMusicVolumeChange = (e) => this.music.setVolume(e)),
      (G.onLanguageChange = () =>
        this.net.send(new lt(ue.C_LANGUAGE).str(Oa()))),
      (G.onDisconnect = () => (QJ(), this.end())),
      (G.onResume = () => {
        this.front?.overlayOpen || this.input.lock();
      }),
      (G.onRespawn = () => this.net.send(new lt(ue.C_RESPAWN))),
      (G.onSkills = () => this.openSkills()),
      (G.onReplayTraining = () => {
        ((this.trainingWalked = 0),
          (this.trainingMined = 0),
          (this.trainingEarned = !1),
          (this.trainingMap = this.trainingInventory = this.trainingShop = !1),
          this.training.restart(),
          G.onResume());
      }),
      (G.onSaveGame = () => {
        (this.sendInventory(), this.net.requestLocalSave());
      }),
      (G.onHotbarChange = () => this.syncHeld(!0)),
      (G.onWeaponIdChanged = () => {
        (this.syncHeld(), (this.invDirty = !0));
      }),
      (G.onHelmetModuleChanged = (e, t) => {
        (this.vision.sync(e, t), this.refreshSelfArmor());
      }),
      (G.weaponMagInfo = (e, t) => this.weapons.magInfo(e, t)),
      (G.onEquipmentRepair = (e, t) => {
        (this.sendInventory(),
          this.net.send(
            new lt(ue.C_EQUIPMENT_REPAIR)
              .u8(e)
              .u32(t)
              .u32(this.shopInventoryRevision),
          ));
      }),
      (G.onShopBuy = (e, t) =>
        this.net.send(new lt(ue.C_SHOP).u8(0).u16(e).u16(t))),
      (G.onDropItem = (e, t, i, n, o, a) =>
        this.net.send(
          new lt(ue.C_THROW)
            .u16(e)
            .u16(t)
            .u16(i)
            .u16(n)
            .u16(o ?? 65535)
            .str(a?.uid ?? ""),
        )),
      (G.onSellItem = (e, t, i, n) => {
        this.sendInventory();
        let o = 0;
        return (
          this.inventory.deferChanges(() => {
            if (((o = this.inventory.removeFromSlot(e, t, n)), o <= 0)) return;
            const a = e === "h" ? t : e === "a" ? 9 + M0 + t : 9 + t;
            this.net.send(new lt(ue.C_SHOP).u8(1).u16(i).u16(o).u16(a));
          }),
          o <= 0 ? 0 : (this.syncHeld(), (this.invDirty = !0), o)
        );
      }),
      (G.cosmeticOwner = () => this.ownAppearance?.owner ?? qe?.id ?? Y.nick),
      (G.onInventoryPreview = (e) => {
        if (!e) {
          this.inventoryPreview?.hide();
          return;
        }
        this.inventoryPreview ??= new mne();
        const t = this.ownAppearance ?? {
          character: Lt.character,
          custom: Lt.custom,
          owner: qe?.id ?? Y.nick,
        };
        this.inventoryPreview.show(
          t,
          this.inventory.armor,
          this.inventory.hotbar[this.inventory.sel],
          this.atlas.texture,
          this.ownAppearance?.armor ?? {},
        );
      }),
      (G.onContainerMove = (e, t, i, n, o, a, r) => {
        const l = e === "f" || i === "f",
          c = (l ? this.furnacePos : this.chestPos) ?? { x: 0, y: 0, z: 0 };
        if (!l && this.backpackId === null && !this.chestPos) return;
        this.sendInventory();
        const h = (f) => f === "c" || f === "f",
          d = (f, p) =>
            p >= 65534 ? p : f === "s" ? p + 9 : f === "a" ? p + 36 : p,
          u = new lt(ue.C_CONTAINER_MOVE)
            .u8(l ? 2 : this.backpackId !== null ? 1 : 0)
            .i32(c.x)
            .u8(c.y)
            .i32(c.z)
            .u16(this.backpackId ?? 0)
            .u8(h(e) ? 1 : 0)
            .u16(d(e, t))
            .u8(h(i) ? 1 : 0)
            .u16(d(i, n))
            .u16(o);
        for (const f of [a, r])
          u.u16(f.id)
            .u16(f.count)
            .u16(f.durability ?? G1(f.id))
            .u16(f.suppressorDurability ?? Dc(f.id))
            .u16(f.magazine ?? 65535);
        (u.str(
          JSON.stringify([a.cosmetic?.uid ?? null, r.cosmetic?.uid ?? null]),
        ),
          this.net.send(u));
      }),
      (G.onChestPut = (e, t, i, n) => {
        if (this.backpackId !== null) {
          this.sendInventory();
          let a = 0;
          if (
            (this.inventory.deferChanges(() => {
              if (((a = this.inventory.removeFromSlot(e, t, n)), a <= 0))
                return;
              const r = e === "h" ? t : 9 + t;
              this.net.send(
                new lt(ue.C_BACKPACK)
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
          (G.renderHotbar(), this.syncHeld(), (this.invDirty = !0));
          return;
        }
        if (!this.chestPos) return;
        this.sendInventory();
        let o = 0;
        (this.inventory.deferChanges(() => {
          if (((o = this.inventory.removeFromSlot(e, t, n)), o <= 0)) return;
          const a = e === "h" ? t : 9 + t;
          this.net.send(
            new lt(ue.C_CHEST)
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
            (G.renderHotbar(), this.syncHeld(), (this.invDirty = !0)));
      }),
      (G.onChestTake = (e, t) => {
        if (this.backpackId !== null) {
          this.net.send(
            new lt(ue.C_BACKPACK).u8(2).u16(this.backpackId).u16(e).u16(t),
          );
          return;
        }
        this.chestPos &&
          this.net.send(
            new lt(ue.C_CHEST)
              .u8(2)
              .i32(this.chestPos.x)
              .u8(this.chestPos.y)
              .i32(this.chestPos.z)
              .u16(e)
              .u16(t),
          );
      }),
      (G.onChestSell = (e, t) => {
        if (this.backpackId !== null) {
          this.net.send(
            new lt(ue.C_BACKPACK).u8(3).u16(this.backpackId).u16(e).u16(t),
          );
          return;
        }
        this.chestPos &&
          this.net.send(
            new lt(ue.C_CHEST)
              .u8(3)
              .i32(this.chestPos.x)
              .u8(this.chestPos.y)
              .i32(this.chestPos.z)
              .u16(e)
              .u16(t),
          );
      }),
      (G.onFurnacePut = (e, t, i, n, o) => {
        if (!this.furnacePos) return;
        this.sendInventory();
        let a = 0;
        (this.inventory.deferChanges(() => {
          if (((a = this.inventory.removeFromSlot(e, t, o)), a <= 0)) return;
          const r = e === "h" ? t : 9 + t,
            l = this.furnacePos;
          this.net.send(
            new lt(ue.C_FURNACE)
              .u8(0)
              .i32(l.x)
              .u8(l.y)
              .i32(l.z)
              .u8(i)
              .u8(r)
              .u16(n)
              .u16(a),
          );
        }),
          !(a <= 0) &&
            (G.renderHotbar(), this.syncHeld(), (this.invDirty = !0)));
      }),
      (G.onFurnaceTake = (e, t) => {
        if (!this.furnacePos) return;
        const i = this.furnacePos;
        this.net.send(
          new lt(ue.C_FURNACE)
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
      (G.onFurnaceSell = (e, t) => {
        if (!this.furnacePos) return;
        const i = this.furnacePos;
        this.net.send(
          new lt(ue.C_FURNACE)
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
      (G.onChestClosed = () => {
        if (!this.chestPos) return;
        const { x: e, y: t, z: i } = this.chestPos;
        (this.net.send(
          new lt(ue.C_CHEST).u8(4).i32(e).u8(t).i32(i).u16(0).u16(1),
        ),
          this.world.chestLids.setOpen(e, t, i, !1));
      }),
      (G.onFurnaceClose = () => {
        if (!this.furnacePos) return;
        const e = this.furnacePos;
        (this.net.send(
          new lt(ue.C_FURNACE)
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
    const n = this.vehicles.mine;
    if (this.jetGun && !i && n?.type === L.FIGHTER_JET) {
      (this.airWeapons?.assist(t),
        this.jetGun.fire(e, t, n.vel),
        this.effects.flash(e, 1.2, 0.04),
        this.sfx.shot("mg"),
        this.net.send(
          new lt(ue.C_SHOT)
            .u16(w.PLANE)
            .f32(e.x)
            .f32(e.y)
            .f32(e.z)
            .f32(t.x)
            .f32(t.y)
            .f32(t.z),
        ),
        this.noteShot(w.PLANE));
      return;
    }
    const o = i?.range ?? Iv(this.vehicles.mine?.type),
      a = !i && this.vehicles.mine?.type === L.BTR_TURRET,
      r = i?.soldier ?? (a ? 14 : 8),
      l = i?.hull ?? (a ? 9 : 5),
      c = this.world.raycastBullet(e, t, o, 2);
    for (const M of c.torn)
      (this.weapons.hooks.onHitBlock(M.bx, M.by, M.bz, g9, M.block, M.point, e),
        this.effects.bulletImpact(M.point, le[M.block].color));
    const h = c.hit,
      d = h ? h.dist : o,
      u = this.remotes.raycastHit(e, t, d),
      f = this.bots.raycastHit(e, t, u ? Math.min(u.dist, d) : d),
      p = this.animals.raycastHit(e, t, Math.min(u?.dist ?? d, f?.dist ?? d)),
      m = Math.min(u?.dist ?? d, f?.dist ?? d, p?.dist ?? d),
      g = this.vehicles.rayHit(e, t, m),
      y = this.projectiles.rayHit(e, t, d),
      b = (M, ...E) => !!M && E.every((A) => !A || M.dist < A.dist);
    let S;
    (b(y, g, u, f, p)
      ? ((S = y.pos),
        this.net.send(
          new lt(ue.C_HIT_PROJ).u32(y.id).f32(S.x).f32(S.y).f32(S.z).u8(1),
        ),
        this.effects.bulletImpact(S, 16759620))
      : b(g, u, f, p)
        ? ((S = e.clone().addScaledVector(t, g.dist)),
          this.weapons.hooks.onHitVehicle(
            g.id,
            g.type === L.DRONE ? 20 : l,
            e.clone().addScaledVector(t, g.dist),
            1,
            e,
          ),
          this.effects.bulletImpact(S, 16764006))
        : b(p, u, f)
          ? ((S = p.point),
            this.weapons.hooks.onHitAnimal(p.id, 14),
            this.effects.bloodHit(S))
          : b(f, u)
            ? ((S = f.point),
              this.weapons.hooks.onHitBot(f.id, r, w.PLANE, f.region),
              this.effects.bloodHit(S))
            : u
              ? ((S = u.point),
                this.weapons.hooks.onHitPlayer(u.id, r, w.PLANE, u.region),
                this.effects.bloodHit(S))
              : h
                ? ((S = h.point),
                  RS(h.block)
                    ? this.scoreTargetHit(S, h.nx, h.ny, h.nz)
                    : (this.weapons.hooks.onHitBlock(
                        h.bx,
                        h.by,
                        h.bz,
                        6,
                        h.block,
                        h.point,
                        e,
                      ),
                      this.effects.bulletImpact(S, le[h.block].color)))
                : (S = e.clone().addScaledVector(t, o)),
      this.effects.tracer(e, S),
      this.sfx.shot(a ? "autocannon" : i?.heavy ? "hmg" : "mg"),
      this.net.send(
        new lt(ue.C_SHOT)
          .u16(w.PLANE)
          .f32(e.x)
          .f32(e.y)
          .f32(e.z)
          .f32(t.x)
          .f32(t.y)
          .f32(t.z),
      ),
      this.noteShot(w.PLANE));
  }
  jetRoundStrike(e, t, i, n) {
    const o = this.vehicles.mine,
      a = this.world.raycast(e, t, i),
      r = a ? a.dist : i,
      l = this.vehicles.rayHit(e, t, r),
      c = this.projectiles.rayHit(e, t, r);
    if (l && l.id === o?.id) return null;
    if (c && (!l || c.dist < l.dist))
      return (
        this.net.send(
          new lt(ue.C_HIT_PROJ)
            .u32(c.id)
            .f32(c.pos.x)
            .f32(c.pos.y)
            .f32(c.pos.z)
            .u8(1),
        ),
        this.effects.bulletImpact(c.pos, 16759620),
        G.hitmark(),
        c.pos.clone()
      );
    if (l) {
      const h = e.clone().addScaledVector(t, l.dist),
        d = l.type === L.FIGHTER_JET || l.type === L.PLANE || l.type === L.HELI;
      return (
        this.weapons.hooks.onHitVehicle(
          l.id,
          l.type === L.DRONE ? 20 : d ? 8 : 5,
          h,
          1,
          n,
        ),
        this.effects.bulletImpact(h, 16764006),
        h
      );
    }
    return a
      ? (RS(a.block) ||
          this.weapons.hooks.onHitBlock(
            a.bx,
            a.by,
            a.bz,
            6,
            a.block,
            a.point,
            n,
          ),
        this.effects.bulletImpact(a.point, le[a.block].color),
        a.point.clone())
      : null;
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
      const n = this.inventory.hotbar.find((r) => r.id === i && r.count > 0),
        o = n ? t4(i) : 0;
      if (!n || !o) continue;
      const a = qv(n.magazine ?? 65535, o);
      a > 0 && (n.magazine = mf(a - 1, W1(i, n.magazine ?? 65535)));
    }
  }
  updateSubmersion(e) {
    const t = this.player;
    if (t.splashImpact > 0) {
      const r = Math.floor(t.pos.y + 0.6) + 1;
      (this.effects.splash(this.tmpV.set(t.pos.x, r, t.pos.z), t.splashImpact),
        this.sfx.splash(Oe(t.splashImpact / 12, 0.3, 1.4)),
        (t.splashImpact = 0));
    }
    const i = this.camera.position,
      n =
        this.world.getBlock(
          Math.floor(i.x),
          Math.floor(i.y),
          Math.floor(i.z),
        ) === v.LAVA,
      o = this.world.isWaterAt(i.x, i.y, i.z);
    if (((this.inLava = n), o)) {
      let r = Math.floor(i.y);
      for (
        ;
        r < Math.floor(i.y) + 48 && this.world.isWaterAt(i.x, r + 1.5, i.z);
      )
        r++;
      this.waterSurfaceY = r + 0.875;
    }
    (document.body.classList.toggle("in-lava", n),
      document.body.classList.toggle(
        "underwater",
        o && !n && Bn().waterQuality > 0,
      ),
      o !== this.underwater &&
        ((this.underwater = o),
        document.body.classList.toggle(
          "underwater",
          o && !n && Bn().waterQuality > 0,
        ),
        this.sfx.setSubmerged(o),
        o || this.sfx.splash(0.45)));
    const a = this.scene.fog;
    if (a) {
      const r = Bn(),
        l = (this.world.renderDist || r.renderDist) * 16;
      this.underwaterMix +=
        ((o ? 1 : 0) - this.underwaterMix) * (1 - Math.exp(-9 * e));
      const c = r.fog && !this.vehicles.airborneFixedWing,
        h = c ? l * PL(l) : 9999,
        d = c ? l * IL : 1e4,
        u = this.mapFog ? Math.min(h, this.mapFog.near) : h,
        f = this.mapFog ? Math.min(d, this.mapFog.far) : d;
      (this.mapFog && a.color.lerp(this.mapFog.color, 0.65),
        (a.near = ns(u, 0.1, this.underwaterMix)),
        (a.far = ns(f, n ? 3 : 26, this.underwaterMix)),
        this.underwaterMix > 0.001 &&
          a.color.lerp(n ? Lhe : Ihe, this.underwaterMix));
    }
    o &&
      !n &&
      this.player.alive &&
      ((this.bubbleT -= e),
      this.bubbleT <= 0 &&
        ((this.bubbleT = 0.22 + Math.random() * 0.45),
        this.effects.bubbles(this.tmpV.set(i.x, i.y + 0.15, i.z)),
        Math.random() < 0.35 && this.sfx.bubble()));
  }
  previewBlast(e, t) {
    const i = Object.keys($1),
      n = e === "all" ? i.filter((r) => r !== "nuke") : e in $1 ? [e] : [];
    if (!n.length) {
      G.addChat(
        1,
        `/fx <${i.join("|")}|all> [${I("distance", "дистанция")}] · /slowmo 0.3 · /bombtest`,
      );
      return;
    }
    const o = this.camera.position.clone(),
      a = new k(0, 0, -1).applyQuaternion(this.camera.quaternion);
    n.forEach((r, l) =>
      setTimeout(() => {
        const c = $1[r],
          h = t || 160,
          d = this.world.raycast(o, a, h),
          u = d
            ? d.point.clone().addScaledVector(new k(d.nx, d.ny, d.nz), 0.3)
            : o.clone().addScaledVector(a, t || Math.max(14, c.radius * 3.2)),
          f = d ? new k(d.nx, d.ny, d.nz) : new k(0, 1, 0);
        n.length > 1 && G.addChat(1, I(c.en, c.ru));
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
    if (
      (this.myDisguise?.dispose(),
      (this.myDisguise = null),
      (this.disguiseSnapped = !1),
      e.kind === la.NONE)
    ) {
      (this.viewBeforeDisguise !== null &&
        ((this.thirdPerson = this.viewBeforeDisguise),
        (this.viewBeforeDisguise = null)),
        G.setHint(""));
      return;
    }
    ((this.myDisguise = NC(e, this.world)),
      this.scene.add(this.myDisguise.root),
      this.viewBeforeDisguise === null &&
        (this.viewBeforeDisguise = this.thirdPerson),
      (this.thirdPerson = !0),
      (this.frontView = !1),
      G.setHint(z("disguiseHint", { what: Po(vY(e, !wi())) })));
  }
  chestSound(e, t, i, n, o = 1) {
    const a = this.world.getBlock(e, t, i),
      r = a === v.MILITARY_CHEST,
      l = this.camera.position,
      c = e + 0.5 - l.x,
      h = i + 0.5 - l.z,
      d = Math.hypot(c, t + 0.5 - l.y, h);
    if (d > 32) return;
    const u = this.tmpV.set(1, 0, 0).applyQuaternion(this.camera.quaternion),
      f = (c * u.x + h * u.z) / Math.max(1, Math.hypot(c, h));
    (n ? this.sfx.chestOpen(d, f, r) : this.sfx.chestSlam(d, f, r, o),
      this.effects.chestDust(
        new k(e + 0.5, t + (r ? 0.62 : 0.7), i + 0.5),
        n,
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
    const n = this.tmpProjSeg.copy(t).sub(e),
      o = n.length();
    if (o < 1e-4) return null;
    n.divideScalar(o);
    let a = null,
      r = o;
    for (const l of [
      this.remotes.raycastHit(e, n, o),
      this.bots.raycastHit(e, n, o),
      this.animals.raycastHit(e, n, o),
    ])
      l && l.dist <= r && ((r = l.dist), (a = l.point));
    if (!i && this.player.alive) {
      const l = this.player.pos,
        c = Om(
          e,
          n,
          l.x - 0.35,
          l.y,
          l.z - 0.35,
          l.x + 0.35,
          l.y + this.player.h,
          l.z + 0.35,
        );
      c !== null && c <= r && ((r = c), (a = e.clone().addScaledVector(n, c)));
    }
    return a;
  }
  battleProfileApplied = !1;
  frameIntervalMs = 0;
  applyQuality() {
    const e = this.input.mobile && !!this.front?.active,
      t = Bn(),
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
    const n =
        Y.quality !== "custom" &&
        this.input.mobile &&
        Math.min(innerWidth, innerHeight) <= 700,
      o = n
        ? Math.min(
            i.renderDist,
            Y.quality === "ultra" ? 9 : Y.quality === "high" ? 8 : 6,
          )
        : i.renderDist,
      a = n ? Math.min(i.pixelRatio, 1.15) : i.pixelRatio,
      r = n ? Math.min(i.shadowSize, 1024) : i.shadowSize,
      l = Y.quality !== "custom" && this.input.mobile ? !1 : i.chunkShadows,
      c = Y.quality !== "custom" && this.input.mobile ? !1 : i.smoothLighting,
      h = Y.quality !== "custom" && this.input.mobile,
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
        (this.atlas.setResolution(d), G.refreshItemIcons()),
      (this.bots.allowLod = this.vehicles.allowLod =
        this.input.mobile || u === 0),
      XA() !== u &&
        (pR(u),
        BX(),
        this.weapons.rebuildViewModel(),
        this.vehicles.rebuildModels()),
      this.world.setWaterQuality(i.waterQuality),
      this.celestialDetail !== i.celestialDetail &&
        ((this.celestialDetail = i.celestialDetail),
        this.sky.setCelestialDetail(i.celestialDetail)),
      this.sky.setSunShafts(i.sunShafts),
      this.sky.setClouds(i.clouds),
      this.sky.setCloudRange(o * 16 + 112),
      this.shaders.configure(e ? 0 : Y.shaders, {
        msaa: i.antialias,
        clouds: i.clouds,
      }),
      this.world.refreshMaterials());
    const p = document.getElementById("gshadersnote");
    (p &&
      !this.shaders.supported &&
      ((p.dataset.i18n = "shadersUnsupported"),
      (p.textContent = z("shadersUnsupported"))),
      this.sky.setPhysical(null, !1),
      (this.effects.particleScale = i.particles),
      this.effects.setLightBudget(
        i.particles <= 0 ? 0 : i.particles < 0.9 ? 2 : 4,
      ),
      h1(this.scene).setBudget(
        i.particles <= 0 ? 1 : i.particles < 0.9 ? 2 : 3,
      ),
      this.weather?.setParticleScale(i.particles),
      this.worldSites.setQuality(f),
      this.world.setEnvironmentDetail(f),
      this.world.setWindSway(Y.windSway),
      this.autumn?.setOptions({
        fallingLeaves: Y.fallingLeaves,
        screamers: Y.screamers,
        particles: i.particles,
      }),
      this.autumn?.setPixelScale(this.renderer.domElement.height),
      this.environment.setDetail(f));
    const m = o * 16,
      g = this.scene.fog,
      y = i.fog && !this.vehicles.airborneFixedWing;
    ((g.near = y ? m * PL(m) : 9999),
      (g.far = y ? m * IL : 1e4),
      this.scene.traverse((b) => {
        const S = b;
        if (S.material) {
          const M = Array.isArray(S.material) ? S.material : [S.material];
          for (const E of M) E.needsUpdate = !0;
        }
      }),
      this.running &&
        !this.loadingShown &&
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            this.running && this.warmShaders();
          }),
        ));
  }
  shaderWarm = 0;
  warmShaders() {
    this.shaderWarm = 1;
    const e = performance.now(),
      t = () => {
        this.shaderWarm = 2;
      },
      i = this.renderer.getRenderTarget(),
      n = this.shaders.worldTarget;
    try {
      n && this.renderer.setRenderTarget(n);
      const o = this.effects.warmUp(() =>
        this.renderer.compile(this.scene, this.camera),
      );
      this.camera.layers.set(y1);
      try {
        for (const a of this.renderer.compile(this.camera, this.camera))
          o.add(a);
      } finally {
        this.camera.layers.set(0);
      }
      return this.programsReady(o, e + 6e3).then(t, t);
    } catch {
      return (t(), Promise.resolve());
    } finally {
      this.renderer.setRenderTarget(i);
    }
  }
  programsReady(e, t) {
    return new Promise((i) => {
      const n = () => {
        for (const o of e) {
          const a = this.renderer.properties.get(o).currentProgram;
          (!a || a.isReady()) && e.delete(o);
        }
        !e.size || performance.now() >= t ? i() : setTimeout(n, 10);
      };
      n();
    });
  }
  holdPolicy = -1;
  handItem() {
    const e = this.inventory.held();
    return this.vehicles.driving() &&
      !this.vehicles.passengerCanShoot() &&
      (!this.vehicles.passengerCanRepair() || Ss[e])
      ? 0
      : e;
  }
  sendPlayerState() {
    if (!this.inventoryReady || !this.net.connected) return;
    const e = this.vehicles.driving(),
      t = (!e || this.vehicles.passengerCanShoot()) && this.weapons.shouldered;
    (this.net.send(
      new lt(ue.C_MOVE)
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
            (this.flashlight?.active ? 64 : 0),
        )
        .u8(this.player.crawlingFast ? 1 : 0)
        .u32(this.movementEpoch)
        .u32(this.positionRevision),
    ),
      (this.moveTimer = 0));
  }
  syncHeld(e = !1) {
    const t = this.handItem(),
      i = this.vehicles.driving() && !this.vehicles.passengerCanShoot();
    ((e || t !== this.weapons.held) && this.input.clearMobileAim(),
      this.weapons.setHandsAllowed(!i));
    const n = t !== this.weapons.held;
    (this.weapons.select(t, 0, this.inventory.sel, e),
      n && this.sendPlayerState(),
      this.front.arms && t === w.COMBAT_KNIFE && this.front.armsLevel >= Wu
        ? this.weapons.setCosmetic(xhe, "", !1)
        : this.weapons.setCosmetic(
            this.inventory.hotbar[this.inventory.sel]?.cosmetic,
            this.ownAppearance?.owner ?? qe?.id ?? Y.nick,
          ),
      this.inventoryReady &&
        (e || this.lastCosmeticSlot !== this.inventory.sel) &&
        ((this.lastCosmeticSlot = this.inventory.sel), this.sendCosmetics(!1)));
  }
  sendCosmetics(e) {
    const t = {
        character: Lt.character,
        custom: Lt.character === "custom" ? Lt.custom : null,
        weapons: Lt.weapons,
        refresh: e,
      },
      i = JSON.stringify([t.character, t.custom, t.weapons]),
      n = new lt(ue.C_COSMETICS).u8(this.inventory.sel);
    ((e || i !== this.lastCosmeticLooks) && n.str(JSON.stringify(t)),
      (this.lastCosmeticLooks = i),
      this.net.send(n));
  }
  lastCosmeticLooks = "";
  ownAppearance = null;
  lastCosmeticSlot = -1;
  sentInspect = !1;
  sentInspectSequence = 0;
  inventoryPreview;
  shopInventoryRevision = 0;
  movementEpoch = 0;
  sightCache = new Map();
  sightEye = new k();
  battleSees(e, t, i, n, o, a) {
    const r = this.sightCache.get(e);
    if (r && a < r.until) return r.seen;
    const l = this.camera.getWorldPosition(this.sightEye),
      c = o.some((h) => this.world.sightClear(l.x, l.y, l.z, t, i + h, n));
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
    (this.bots.hideLabelsUnless((i, n) => {
      const o = this.front.botTeams.get(i);
      return (
        !o || o === t || this.battleSees(`b${i}`, n.x, n.y, n.z, [1.55, 0.9], e)
      );
    }),
      this.remotes.hideTagsUnless(
        (i, n) =>
          !this.front.isEnemyPlayer(i) ||
          this.battleSees(`p${i}`, n.x, n.y, n.z, [1.55, 0.9], e),
      ),
      this.vehicles.hideEnemyPlatesUnless((i) =>
        this.battleSees(`v${i.id}`, i.pos.x, i.pos.y, i.pos.z, [1.2, 2.4], e),
      ),
      this.sightCache.size > 400 && this.sightCache.clear());
  }
  battleSeen(e, t, i, n, o, a) {
    const r = this.camera.position;
    return (t - r.x) ** 2 + (n - r.z) ** 2 > 32400
      ? !1
      : this.battleSees(e, t, i, n, o, a);
  }
  positionRevision = 0;
  playerEpochs = new Map();
  sendInventory() {
    if (!this.inventoryReady) return;
    const e = this.inventory.serialize(),
      t = new lt(ue.C_INV_SAVE);
    t.u8(e.length / 5);
    for (let o = 0; o < e.length; o += 5)
      t.u16(e[o])
        .u16(e[o + 1])
        .u16(e[o + 2])
        .u16(e[o + 3])
        .u16(e[o + 4]);
    const [i, n] = Ohe(this.inventory.updatedAt);
    (t
      .u32(i)
      .u32(n)
      .u32(this.shopInventoryRevision)
      .str(
        JSON.stringify(
          [
            ...this.inventory.hotbar,
            ...this.inventory.storage,
            ...this.inventory.armor,
          ].map((o) => (o.id && o.count ? (o.cosmetic?.uid ?? null) : null)),
        ),
      ),
      t.u32(++this.invSeq),
      this.net.send(t),
      this.refreshSelfArmor());
  }
  refreshSelfArmor() {
    (G.invOpen && G.onInventoryPreview(!0),
      this.selfBody &&
        (this.ownAppearance &&
          Oc(
            this.selfBody.group,
            this.ownAppearance.character,
            this.ownAppearance.custom,
          ),
        X0(
          this.selfBody.armorRoot,
          this.selfBody.head,
          this.selfBody.legL,
          this.selfBody.legR,
          this.inventory.equippedIds(),
          qr(this.inventory.armor[0]),
          this.ownAppearance?.armor ?? {},
        ),
        Ed(this.selfBody.head, ym(this.ownAppearance?.hat))));
  }
  shareWaypoint() {
    if (!this.running || !na(Y.nick)) return;
    const e = G.getWaypoint();
    this.net.send(
      new lt(ue.C_SQUAD).str(
        JSON.stringify({
          action: "waypoint",
          point: e ? { ...e, planet: this.currentPlanet } : null,
        }),
      ),
    );
  }
  renderTab() {
    G.setTab(
      this.lastTab.map((e) => ({
        id: e.id,
        name: e.name,
        ping: e.ping,
        balance: e.balance,
        rank: TV(e.xp),
        xp: e.xp,
        self: e.id === this.myId,
        friend: this.friends.has(e.name),
        squad: Br(e.name),
      })),
    );
  }
  viewHeading() {
    const e = this.camera.getWorldDirection(this.tmpV);
    return Math.atan2(-e.x, -e.z);
  }
  navigationPosition() {
    return this.remote.viewing >= yc
      ? (this.bots.getPosition(this.remote.viewing - yc) ?? this.player.pos)
      : this.remote.viewing >= 0
        ? (this.vehicles.mine?.pos ?? this.player.pos)
        : this.player.pos;
  }
  mapMarkers() {
    const e = Date.now();
    for (const [l, c] of this.nuclearStrikes)
      c.expiresAt <= e && this.nuclearStrikes.delete(l);
    const t = this.currentPlanet === Ci.EARTH,
      i = na(Y.nick)?.members.find(
        (l) => l.username.toLowerCase() === Y.nick.toLowerCase(),
      ),
      n = [
        {
          x: this.player.pos.x,
          z: this.player.pos.z,
          color: i ? By(i.slot) : "#f3f7ff",
          kind: "player",
          heading: this.viewHeading(),
          label: i ? Y.nick : void 0,
        },
      ];
    t &&
      this.homePos &&
      n.push({
        x: this.homePos.x,
        z: this.homePos.z,
        color: "#4aa8ff",
        kind: "home",
      });
    const o = G.getWaypoint();
    o && !na(Y.nick) && n.push({ x: o.x, z: o.z, color: Uk, kind: "waypoint" });
    for (const l of pv)
      l.planet === this.currentPlanet &&
        n.push({ ...l, kind: "waypoint", label: l.username });
    if (this.front.active && this.front.state) {
      for (const h of this.front.state.f)
        n.push({
          x: h[4],
          z: h[5],
          color: mc(h[1], this.front.team),
          kind: "waypoint",
          label: h[0],
        });
      const l = this.front.team || 1,
        c = this.front.state.hq[l - 1];
      n.push({ x: c[0], z: c[1], color: mc(l, l), kind: "home" });
    }
    const a = performance.now();
    for (const l of this.remotes.mapPlayers()) {
      if (l.planet !== this.currentPlanet) continue;
      if (this.front.active) {
        const u = this.front.isFriendPlayer(l.id);
        if (
          !u &&
          !this.battleSeen(
            `p${l.id}`,
            l.pos.x,
            l.pos.y,
            l.pos.z,
            [1.55, 0.9],
            a,
          )
        )
          continue;
        n.push({
          x: l.pos.x,
          z: l.pos.z,
          color: u ? LL : "#ff4a4a",
          kind: u ? "friend" : "enemy",
          heading: l.heading,
        });
        continue;
      }
      const c = Br(l.name);
      if (!c && !l.visible) continue;
      const h = this.friends.has(l.name) || c;
      if (!h && this.remotes.disguiseOf(l.id)) continue;
      const d = c
        ? na(l.name)?.members.find(
            (u) => u.username.toLowerCase() === l.name.toLowerCase(),
          )
        : void 0;
      n.push({
        x: l.pos.x,
        z: l.pos.z,
        color: d ? By(d.slot) : h ? "#4aff6a" : "#ff4a4a",
        kind: c ? "squad" : h ? "friend" : "enemy",
        label: c ? l.name : void 0,
        heading: l.heading,
      });
    }
    const r = new Set();
    for (const l of this.bots.list()) {
      if ((r.add(l.id), l.npc)) {
        n.push({ x: l.pos.x, z: l.pos.z, color: "#ffd44a", kind: "npc" });
        continue;
      }
      if (this.front.active) {
        const u = this.front.botTeams.get(l.id),
          f = !u || u === this.front.team;
        if (
          !f &&
          !this.battleSeen(
            `b${l.id}`,
            l.pos.x,
            l.pos.y,
            l.pos.z,
            [1.55, 0.9],
            a,
          )
        )
          continue;
        n.push({
          x: l.pos.x,
          z: l.pos.z,
          color: f ? LL : "#ff4a4a",
          kind: f ? "friend" : "enemy",
        });
        continue;
      }
      const c = !l.hostile && Br(l.ownerName),
        h =
          !l.hostile &&
          (l.ownerName === Y.nick || this.friends.has(l.ownerName) || c),
        d = c
          ? na(l.ownerName)?.members.find(
              (u) => u.username.toLowerCase() === l.ownerName.toLowerCase(),
            )
          : void 0;
      n.push({
        x: l.pos.x,
        z: l.pos.z,
        color: l.raid ? "#9b2948" : d ? By(d.slot) : h ? "#4aff6a" : "#ff4a4a",
        kind: h ? "friend" : "enemy",
        label: c ? `${z("militaryBotTag", { name: l.ownerName })}` : void 0,
      });
    }
    if (t && this.raidActive && this.raidZone)
      for (const l of this.bots.raidContacts(
        this.raidZone.x,
        this.raidZone.z,
        this.raidZone.radius,
      ))
        r.has(l.id) ||
          n.push({ x: l.pos.x, z: l.pos.z, color: "#9b2948", kind: "enemy" });
    for (const l of this.vehicles.mapVehicles()) {
      if (this.front.active && !l.spawnOwner) {
        const d = l.army,
          u = !d || d === this.front.team;
        if (!u && !this.battleSeen(`v${l.id}`, l.x, l.y, l.z, [1.2, 2.4], a))
          continue;
        n.push({
          x: l.x,
          z: l.z,
          color: u ? "#68c7ff" : "#ff4a4a",
          kind: "vehicle",
          vehicleType: l.type,
          friendly: u,
        });
        continue;
      }
      const c = !!this.claimsUI?.ownerAllows(l.ownerName) || Br(l.ownerName),
        h = l.ownerName === Yo;
      n.push({
        x: l.x,
        z: l.z,
        color: c ? "#68c7ff" : h ? "#9b2948" : "#ff4a4a",
        kind: "vehicle",
        vehicleType: l.type,
        friendly: c,
      });
    }
    if (t)
      for (const l of this.nuclearStrikes.values())
        n.push({
          x: l.x,
          z: l.z,
          radius: l.radius,
          color: "#ffd33d",
          kind: "strike",
        });
    return n;
  }
  openWorldMap() {
    G.mapOpen ||
      G.openWorldMap(
        (e, t, i) => this.world.surfaceColor(e, t, i),
        this.navigationPosition(),
        () => this.mapMarkers(),
      );
  }
  openHimarsMap() {
    const e = this.vehicles.mine;
    if (!e || G.mapOpen) return;
    const t = e.type === L.MORTAR,
      i = e.type === L.TANK;
    if (t && e.carrierReadyAt > Date.now()) {
      G.addChat(
        2,
        z("vehMortarInfo", {
          seconds: Math.ceil((e.carrierReadyAt - Date.now()) / 1e3),
        }),
      );
      return;
    }
    const n = i ? yy : t ? ef : Vr;
    (G.openHimarsMap(
      (o, a, r) => this.world.surfaceColor(o, a, r),
      { x: e.pos.x, z: e.pos.z },
      (o, a) => {
        const r = o - e.pos.x,
          l = a - e.pos.z;
        if (r * r + l * l > n * n) return;
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
      G.mapOpen ||
      (G.openCarrierMap(
        (t, i, n) => this.world.surfaceColor(t, i, n),
        { x: e.pos.x, z: e.pos.z },
        (t, i) => {
          const n = t - e.pos.x,
            o = i - e.pos.z;
          if (n * n + o * o > 2800 * 2800) return;
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
      e.type !== L.SUBMARINE ||
      G.mapOpen ||
      (G.openNuclearMap(
        (t, i, n) => this.world.surfaceColor(t, i, n),
        { x: e.pos.x, z: e.pos.z },
        (t, i) => {
          const n = t - e.pos.x,
            o = i - e.pos.z;
          if (n * n + o * o > Yh * Yh) return;
          const a = this.world.groundAt(t, i, 120);
          this.vehicles.nuclearStrike(new k(t, a === -1 / 0 ? e.pos.y : a, i));
        },
        () => this.mapMarkers(),
      ),
      this.input.unlock());
  }
  onDeath() {
    if (
      ((this.player.alive = !1),
      (this.deathCamT = 0),
      (this.deathCamRoll =
        (Math.random() < 0.5 ? -1 : 1) * (1.05 + Math.random() * 0.35)),
      (this.player.downed = !1),
      this.reviveUI.wounded.delete(this.myId),
      (this.lastDeathPos = this.player.pos.clone()),
      Ga() && this.killGhosts.spawn(this.player.pos),
      this.front?.active)
    ) {
      ((this.deathTimer = 0), this.front.onLocalDeath());
      return;
    }
    if (this.keepInventory) {
      (G.showDeath(!0, !0), (this.deathTimer = 3), this.input.unlock());
      return;
    }
    (this.inventory.clearAll(),
      (this.player.maxHp = _1),
      (this.player.hp = 0),
      G.setHP(0, _1),
      G.renderHotbar(),
      G.invOpen && G.openInventory(),
      this.syncHeld(),
      G.showDeath(!0),
      (this.deathTimer = 3),
      this.input.unlock());
  }
  panelOpenClass = !1;
  tick(e, t, i = e) {
    const n = G.anyOpen() && !G.chatOpen;
    if (
      (n !== this.panelOpenClass &&
        ((this.panelOpenClass = n),
        document.body.classList.toggle("ui-panel-open", n)),
      (this.militaryMedkitCd = Math.max(0, this.militaryMedkitCd - i)),
      this.remote.tick(),
      this.remote.blocking &&
        document.pointerLockElement &&
        document.exitPointerLock(),
      !this.timeFrozen)
    ) {
      const F = this.timeDrift * Math.min(1, e / 4);
      ((this.timeDrift -= F),
        (this.timeOfDay =
          (((this.timeOfDay + e * 20 * SW(this.timeOfDay) + F) % Ur) + Ur) %
          Ur));
    }
    const o = G.anyOpen() || this.remote.blocking;
    this.input.uiOpen = o;
    const a = this.reviveUI.update(
        e,
        this.myId,
        this.player,
        this.input,
        this.world,
        this.renderer.domElement,
        this.sfx,
        (F) => this.net.send(new lt(ue.C_REVIVE).u16(F)),
        o ||
          !!this.vehicles.mine ||
          this.remote.open ||
          !(this.input.locked || this.input.mobile),
      ),
      r =
        (this.input.locked || this.input.mobile) &&
        !o &&
        this.player.alive &&
        this.player.downed,
      l =
        (this.input.locked || this.input.mobile) &&
        !o &&
        this.player.alive &&
        !this.player.downed &&
        !a &&
        (!this.remote.open || !!this.vehicles.mine);
    (l || (this.medkitChannel = 0),
      this.player.downed && (this.weapons.reloadT = -1),
      r &&
        (this.player.look(this.input.mdx, this.input.mdy, Y.sensitivity),
        (this.medkitChannel = 0),
        (this.bandageChannel = 0),
        (this.mining = null)));
    const c = this.vehicles.driving();
    (this.vision.setCockpitNightVision(
      this.player.alive && this.vehicles.jetSensors,
    ),
      Ko(this.inventory.held()) && !c && !o && this.player.alive
        ? ((this.blueprintPreview ??= new MY(this.scene)),
          this.blueprintPreview.update(
            this.inventory.held(),
            this.blueprintSite(
              this.player.eyePos(this.tmpV),
              this.player.lookDir(this.tmpV2),
            ),
            this.yawFacing(),
            (F, N, fe) =>
              this.world.chunks.has(
                `${Math.floor(F / 16)},${Math.floor(fe / 16)}`,
              )
                ? this.world.getBlock(F, N, fe)
                : -1,
            !wi(),
          ))
        : this.blueprintPreview?.hide(),
      (this.world.previewChunks = this.blueprintPreview?.chunks));
    const h = this.remote.viewing - yc,
      d = h >= 0 ? this.bots.getPosition(h) : void 0,
      u = d ? { id: h, pos: d } : void 0,
      f =
        u?.pos ??
        (this.remote.viewing >= 0
          ? (this.vehicles.mine?.pos ?? this.player.pos)
          : this.player.pos);
    if (
      (u &&
        !o &&
        (this.input.locked || this.input.mobile) &&
        ((this.soldierYaw -= this.input.mdx * 0.0022),
        (this.soldierPitch = Oe(
          this.soldierPitch - this.input.mdy * 0.0022,
          -1.55,
          1.55,
        )),
        this.remote.manual &&
          t - this.soldierInputAt >= 50 &&
          ((this.soldierInputAt = t),
          this.net.send(
            new lt(ue.C_REMOTE)
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
          this.net.send(new lt(ue.C_REMOTE).u8(8))),
      this.input.mobile)
    ) {
      const F = this.inventory.held();
      this.toolModes.updateButton(F);
      const N = !!Ss[F];
      this.input.setLookMine(l && !c && !N);
      const fe = this.player.eyePos(this.tmpV),
        De = this.player.lookDir(this.tmpV2),
        Xe = this.world.raycast(fe, De, 5.5),
        et = this.backpacks.raycastHit(fe, De, 5.5),
        Mt = !!this.vehicles.nearestFree(this.player.pos, 5),
        pt =
          !!this.worldSites.nearestCommand(this.player.pos, 5.5) ||
          !!this.worldSites.nearestFlag(this.player.pos, 6) ||
          !!this.worldSites.nearestVillage(this.player.pos, 5.5),
        At =
          !!this.casino?.target(fe, De) ||
          !!this.casino?.blackjack.target(fe, De) ||
          !!this.computer?.target(fe, De),
        ee =
          At ||
          c ||
          this.player.seated ||
          (F > 0 && !N) ||
          Mt ||
          pt ||
          !!et ||
          !!(Xe && le[Xe.block]?.interactive),
        te = L,
        He = this.vehicles.mine,
        K = He?.type,
        pe = c && this.vehicles.mineSeat > 0;
      let Ae = !c,
        Le = !1,
        Ve = !1,
        We = !1,
        ae = !1,
        Ke = !o && !c,
        Me = !o && !c,
        Te = !1,
        Je = "fist",
        Fe = "missile",
        Et = !1;
      const $t = !c || this.vehicles.passengerCanShoot();
      if (pe) {
        const Ee = this.vehicles.passengerCanRepair() && F === w.WELDER;
        ((Ae =
          this.vehicles.passengerCanShoot() ||
          Ee ||
          !!this.vehicles.mySeatGun()),
          (Je = Ee ? "hammer" : "bullet"),
          (We = !0));
      } else if (c)
        switch (K) {
          case te.HELI:
            ((Ae = !0),
              (Je = "bullet"),
              (Le = !0),
              (Fe = "missile"),
              (Ke = !0),
              (Me = !0),
              (We = !0),
              (ae = this.vehicles.canToggleCargo()));
            break;
          case te.DRONE:
            ((Ae = !0), (Je = "detonate"), (Ke = !0), (Me = !0));
            break;
          case te.FIGHTER_JET:
            ((Ae = !0),
              (Je = "bullet"),
              (Le = !0),
              (Fe = "missile"),
              (We = !0),
              (Me = !0));
            break;
          case te.PLANE:
            ((Me = !0),
              (Ae = !0),
              (Je = "bullet"),
              (Ve = !!He && !He.grounded),
              (We = !0),
              (Et = !!He && !He.grounded));
            break;
          case te.MORTAR:
          case te.HIMARS:
            ((Ae = !0), (Je = "map-target"), (We = !0));
            break;
          case te.CARRIER:
            ((Ae = !0),
              (Je = "bullet"),
              (Le = !!He && He.fireCd2 <= 0),
              (Fe = "strike"),
              (We = !0));
            break;
          case te.SUBMARINE:
            ((Ae = !1),
              (Le = !!He && He.fireCd2 <= 0),
              (Fe = "strike"),
              (Ke = !0),
              (Me = !0),
              (We = !0));
            break;
          case te.SPACE_ROCKET:
            ((Ae = !1), (Ke = !0), (Me = !0), (We = !0));
            break;
          default:
            ((Ae = !0), (Je = "bullet"), (We = !0));
            break;
        }
      else
        (N
          ? (Je = "bullet")
          : F === w.COMBAT_KNIFE && this.front.active
            ? (Je = "stab")
            : Xe && le[Xe.block]?.hardness >= 0
              ? (Je = "pickaxe")
              : (Je = "fist"),
          (Te =
            !o &&
            !this.player.onGround &&
            (this.player.canDeployChute() ||
              this.player.parachute ||
              this.input.chuteHeld)),
          (We = !this.front.active || this.thirdPerson));
      let Nt = "exit",
        si = !1;
      !c &&
        !this.player.seated &&
        !this.mounted &&
        ((si = !0),
        F === w.FISHING_ROD
          ? ((Nt = "cast"), (si = !1))
          : this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet)
            ? (Nt = "teleport")
            : At
              ? (Nt = "hand")
              : et || (Xe && (Tx(Xe.block) || Xe.block === v.FURNACE))
                ? (Nt = "open")
                : Xe && le[Xe.block]?.interactive
                  ? (Nt = "hand")
                  : this.worldSites.nearestFlag(this.player.pos, 6)?.supplyReady
                    ? (Nt = "supply")
                    : Mt
                      ? (Nt = "enter")
                      : pt
                        ? (Nt = "hand")
                        : ((si = !1),
                          (Nt =
                            (F > 0 && F < 256) ||
                            F === w.COMPUTER ||
                            Ko(F) ||
                            Ahe() ||
                            or(F)
                              ? "place"
                              : su[F]
                                ? "eat"
                                : F === w.MEDKIT ||
                                    F === w.MILITARY_MEDKIT ||
                                    F === w.BANDAGE
                                  ? "heal"
                                  : O0(F)
                                    ? "equip"
                                    : "hand")));
      const ce =
          (c &&
            (K === te.FIGHTER_JET ||
              K === te.PLANE ||
              K === te.HELI ||
              K === te.DRONE ||
              K === te.SUBMARINE ||
              K === te.SPACE_ROCKET)) ||
          (!c &&
            ((this.player.flying && !this.player.onGround) ||
              this.player.inWater)),
        Se = qr(this.inventory.armor[0]),
        Qe = this.inventory.armor[0]?.suppressorDurability ?? Sr(Se),
        Ue = this.vehicles.jetSensors || (Se > 0 && Qe > 0);
      this.mobCrouchBtnEl === void 0 &&
        (this.mobCrouchBtnEl = document.getElementById("mobcrouch"));
      const vt = this.mobCrouchBtnEl;
      if (vt) {
        const Ee = ce ? "false" : "true";
        (vt.dataset.mobileToggle !== Ee &&
          ((vt.dataset.mobileToggle = Ee),
          this.input.releaseMobileHold("crouch", "mobcrouch")),
          ce ||
            (!this.player.alive || this.player.downed
              ? this.input.releaseMobileHold("crouch", "mobcrouch")
              : vt.classList.contains("active") !== this.player.crouching &&
                vt.classList.toggle("active", this.player.crouching)));
      }
      this.mobProneBtnEl === void 0 &&
        (this.mobProneBtnEl = document.getElementById("mobprone"));
      const X = this.player.prone && !this.player.downed && !c;
      this.mobProneBtnEl &&
        this.mobProneBtnEl.classList.contains("active") !== X &&
        this.mobProneBtnEl.classList.toggle("active", X);
      const _e = c && (K === te.PLANE || K === te.FIGHTER_JET),
        je = document.getElementById("mobsprint");
      if (je) {
        const Ee = _e ? "false" : "true";
        je.dataset.mobileToggle !== Ee &&
          ((je.dataset.mobileToggle = Ee),
          this.input.releaseMobileHold("sprint", "mobsprint"));
      }
      const ft = this.front.active,
        Pt = this.player.downed;
      (G.setMobileActions({
        toolmode:
          !ft && l && !c && !this.remote.open && this.toolModes.supports(F),
        fire: Ae && !Pt,
        aim:
          !Pt &&
          ((N && $t) ||
            Et ||
            (c &&
              Qn.zoomLevels(K ?? -1, this.vehicles.mineSeat).length > 1 &&
              (this.vehicles.mineSeat === 0 || this.vehicles.camMode === 0))),
        reload: N && $t && !Pt,
        use: ee && !Pt,
        jump: Ke && !Pt,
        sprint: !o && (!c || K === te.PLANE || K === te.FIGHTER_JET),
        prone: !o && !c && !Pt,
        crouch: Me && !Pt,
        map: !o,
        inventory: !o && !ft,
        shop: !o && !ft,
        chat: !o || G.chatOpen || this.casino?.blackjack.open,
        settings: !o,
        tab: !o || G.tabOpen || (ft && this.front.boardIsOpen),
        rocket: Le,
        bomb: Ve,
        camera: We,
        driver: !o && this.vehicles.canTakeDriver(),
        cargo: ae,
        chute: Te,
        vision: !o && Ue,
        flashlight:
          !o &&
          this.player.alive &&
          $t &&
          !this.vehicles.remoteView &&
          this.hasFlashlight(F),
        headlights: !ft && !o && this.player.alive && !!He && wg(He.type),
      }),
        G.setMobileLightState("flashlight", !!Y.lightOn[this.flashlightKey(F)]),
        G.setMobileLightState(
          "headlights",
          !!He && this.vehicles.headlightsOn(He),
        ),
        G.setMobileIcon("mobfire", Je),
        G.setMobileIcon("mobaim", Et ? "bomb-view" : "aim"));
      const Ft = F === w.MOBILE_REMOTE && (!c || pe) && !this.remote.open,
        Ri = F === w.WELDER && !c;
      (G.setMobileIcon("mobuse", Ft ? "station" : Ri ? "welder" : Nt),
        G.setMobileCue("mobuse", { ready: si && !Ft && !Ri }));
      const gi =
        c ||
        (this.player.flying && !this.player.onGround) ||
        this.player.inWater;
      (G.setMobileIcon("mobjump", gi ? "ascend" : "jump"),
        G.setMobileIcon(
          "mobcrouch",
          _e ? "pitch-up" : ce ? "descend" : "crouch",
        ),
        G.setMobileIcon("mobsprint", _e ? "pitch-down" : "sprint"),
        G.setMobileIcon("mobrocket", Fe));
      const Be = Le && He ? He.fireCd2 : 0;
      ((this.mobRocketCdMax = Be > 0 ? Math.max(this.mobRocketCdMax, Be) : 0),
        G.setMobileCue("mobrocket", {
          progress: Be > 0 ? 1 - Be / this.mobRocketCdMax : -1,
        }));
      const yt =
        c && !pe && He && Ae
          ? He.fireCd
          : pe && Ae
            ? (this.vehicles.seatSight()?.cooling ?? 0)
            : 0;
      ((this.mobFireCdMax = yt > 0 ? Math.max(this.mobFireCdMax, yt) : 0),
        G.setMobileCue("mobfire", {
          progress: this.mobFireCdMax >= 0.8 ? 1 - yt / this.mobFireCdMax : -1,
        }));
      const xt = N && $t ? this.weapons.magState() : null;
      (G.setMobileCue("mobreload", {
        progress: xt?.reloading ?? -1,
        attention:
          !!xt && xt.reloading < 0 && xt.rounds === 0 && xt.reserve > 0,
      }),
        G.setMobileIcon(
          "mobvision",
          !this.vehicles.jetSensors && Se === w.THERMAL_GOGGLES
            ? "thermal"
            : "night-vision",
        ),
        this.mobChuteBtnEl === void 0 &&
          (this.mobChuteBtnEl = document.getElementById("mobchute")));
      const $ = this.mobChuteBtnEl;
      ($ && $.classList.toggle("active", this.input.chuteHeld),
        this.mobVisionBtnEl === void 0 &&
          (this.mobVisionBtnEl = document.getElementById("mobvision")));
      const de = this.mobVisionBtnEl;
      de &&
        (de.classList.toggle("active", this.vision.mode !== "off"),
        de.classList.toggle(
          "thermal",
          !this.vehicles.jetSensors && Se === w.THERMAL_GOGGLES,
        ));
    }
    if (
      (c !== this.prevDriving && ((this.prevDriving = c), this.syncHeld()),
      G.chatOpen && this.input.actionPressed("chat"))
    )
      G.closeChat();
    else if (this.casino?.blackjack.open && this.input.actionPressed("chat"))
      (G.openChat(""), this.input.unlockForUi());
    else if (r)
      this.input.actionPressed("chat") ||
      this.input.pressed.has("Enter") ||
      this.input.pressed.has("Slash")
        ? (G.openChat(this.input.pressed.has("Slash") ? "/" : ""),
          this.input.unlock())
        : this.input.actionPressed("inventory") &&
          (G.openInventory(), this.input.unlock());
    else if (l) {
      if (this.input.actionPressed("vision")) {
        const N = qr(this.inventory.armor[0]);
        (this.vision.sync(
          N,
          this.inventory.armor[0]?.suppressorDurability ?? Sr(N),
        ),
          this.vision.toggle());
      } else if (this.input.actionPressed("flashlight"))
        this.toggleFlashlight();
      else if (this.input.actionPressed("headlights")) this.toggleHeadlights();
      else if (
        this.input.actionPressed("chat") ||
        this.input.pressed.has("Enter")
      )
        (G.openChat(""), this.input.unlock());
      else if (this.input.pressed.has("Slash"))
        (G.openChat("/"), this.input.unlock());
      else if (
        this.input.actionPressed("inventory") &&
        !(
          c &&
          this.vehicles.mineSeat === 0 &&
          on(this.vehicles.mine?.type ?? -1) &&
          !this.input.mobile
        )
      )
        (G.openInventory(), this.input.unlock());
      else if (this.input.actionPressed("shop") && !this.front.active)
        (G.openShop(), this.input.unlock());
      else if (this.input.actionPressed("map")) {
        const N = this.vehicles.mine;
        (c &&
        (N?.type === L.TANK || N?.type === L.HIMARS || N?.type === L.MORTAR)
          ? this.openHimarsMap()
          : c && N?.type === L.CARRIER
            ? this.openCarrierMap()
            : c && N?.type === L.SUBMARINE
              ? this.openNuclearMap()
              : this.openWorldMap(),
          this.input.unlock());
      } else if (this.input.actionPressed("cargo")) this.vehicles.toggleCargo();
      else if (this.input.actionPressed("skills")) this.openSkills();
      else if (this.input.actionPressed("use")) {
        if (this.remote.viewing >= 0) this.net.send(new lt(ue.C_REMOTE).u8(8));
        else if (this.inventory.held() === w.MOBILE_REMOTE)
          this.openMobileStation();
        else if (!(
          this.inventory.held() === w.RADIO_MODULE && this.installRadio()
        ))
          if (c) this.vehicles.requestExit();
          else if (this.player.seated) this.requestChairExit();
          else if (this.mounted)
            this.net.send(new lt(ue.C_ANIMAL_RIDE).u16(The));
          else {
            const N = this.player.eyePos(this.tmpV),
              fe = this.player.lookDir(this.tmpV2),
              De = this.animals.nearestRideable(this.player.pos, 4.2);
            if (
              or(this.inventory.held()) ||
              this.inventory.held() === w.DETONATOR
            )
              this.input.clickR = !0;
            else if (!this.operations?.interact(this.player.pos)) {
              if (this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet))
                this.requestRandomTeleport();
              else if (!this.trySiteAction()) {
                if (De) this.net.send(new lt(ue.C_ANIMAL_RIDE).u16(De.id));
                else if (!this.tryInteract(N, fe)) {
                  const Xe = this.inventory.held();
                  db[Xe] !== void 0 || Xe === w.FISHING_ROD
                    ? (this.input.clickR = !0)
                    : !this.vehicles.tryEnter(this.player.pos) &&
                      !Ss[Xe] &&
                      !this.toolModes.supports(Xe) &&
                      (this.input.clickR = !0);
                }
              }
            }
          }
      } else if (this.input.actionPressed("drop") && !c) {
        const N = this.inventory.held(),
          fe = this.inventory.hotbar[this.inventory.sel],
          De = fe?.durability ?? G1(N),
          Xe = fe?.suppressorDurability ?? Dc(N),
          et = fe?.magazine ?? 65535,
          Mt = fe?.cosmetic;
        let pt = !1;
        (this.inventory.deferChanges(() => {
          ((pt = N > 0 && this.inventory.consumeHeld()),
            pt &&
              this.net.send(
                new lt(ue.C_THROW)
                  .u16(N)
                  .u16(1)
                  .u16(De)
                  .u16(Xe)
                  .u16(et)
                  .str(Mt?.uid ?? ""),
              ));
        }),
          pt && (this.syncHeld(), G.renderHotbar()));
      }
      this.input.actionPressed("camera") &&
        !c &&
        (this.player.parachute
          ? (this.parachuteTPV = !this.parachuteTPV)
          : this.thirdPerson
            ? this.frontView
              ? ((this.thirdPerson = !1), (this.frontView = !1))
              : (this.frontView = !0)
            : ((this.thirdPerson = !0), (this.frontView = !1)));
      for (let N = 0; N < 9; N++)
        !this.weapons.ammoPickerOpen &&
          this.input.pressed.has("Digit" + (N + 1)) &&
          ((this.inventory.sel = N), this.syncHeld(!0), G.renderHotbar());
      const F =
        c &&
        !this.vehicles.remoteView &&
        Qn.zoomLevels(this.vehicles.mine?.type ?? -1, this.vehicles.mineSeat)
          .length > 1;
      !this.weapons.ammoPickerOpen &&
        this.input.wheel !== 0 &&
        !F &&
        ((this.inventory.sel =
          (((this.inventory.sel + this.input.wheel) % 9) + 9) % 9),
        this.syncHeld(!0),
        G.renderHotbar());
    }
    const p = l && this.input.mobile ? this.touchAimAssist(e, c) : null;
    (l &&
      !c &&
      (this.player.look(
        this.input.mdx,
        this.input.mdy,
        Y.sensitivity * this.sensScale,
      ),
      p &&
        ((this.player.yaw += p.yaw),
        (this.player.pitch = Oe(this.player.pitch + p.pitch, -1.55, 1.55)))),
      l &&
        !c &&
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
      (this.player.sprintLock = !c && this.weapons.holdsRun),
      this.remote.open
        ? this.player.vel.set(0, 0, 0)
        : this.player.update(e, this.input, this.world, (l || r) && !c),
      !c &&
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
    const m = this.vehicles.mine;
    if (
      (c &&
        m &&
        m.type !== L.DRONE &&
        !this.remote.open &&
        (this.vehicles.mineSeat > 0 && Qn.hasOpenSeats(m.type)
          ? this.vehicles.seatPos(m, this.vehicles.mineSeat, this.player.pos)
          : this.player.pos.copy(m.pos),
        this.player.vel.set(0, 0, 0)),
      !c && this.player.alive)
    ) {
      const F = this.vehicles.standingSurface(
        this.player.pos,
        this.previousFeet,
      );
      if (
        F &&
        this.player.vel.y <= 0.01 &&
        this.player.pos.y <= F.y + 0.35 &&
        this.previousFeet.y >= F.y - 0.18
      ) {
        (this.player.landOn(F.y),
          (this.player.pos.x += F.vx * e),
          (this.player.pos.z += F.vz * e));
        const N = this.vehicles.standingSurface(
          this.player.pos,
          this.previousFeet,
        );
        N && this.player.landOn(N.y);
      }
    }
    const g = (F, N) => this.world.isLoaded(F, N);
    _G(this.camera);
    const y = 1 - this.sky.dayness;
    (this.world.aviationLights.update(e, this.sky.dayness),
      vZ(performance.now() / 1e3, this.sky.dayness));
    const b = this.bots.visibleHostileCount(f),
      S = this.vehicles.visibleRaidCount(f),
      M = this.raidActive && b + S >= Y.militaryOptimizationThreshold;
    if (this.airWeapons) {
      const F =
        this.vehicles.mineSeat === 0 &&
        this.vehicles.mine?.type === L.FIGHTER_JET
          ? this.vehicles.mine
          : null;
      this.airWeapons.update(
        e,
        F,
        this.vehicles.vehicles.values(),
        (N) => N.hpBar.userData.side === "enemy",
        !!F && l && this.input.actionPressed("jump"),
        !!F &&
          l &&
          (this.input.actionPressed("driver") ||
            this.input.actionPressed("reload")),
      );
    }
    if (
      (l && this.input.actionPressed("driver") && this.vehicles.takeDriver(),
      l && this.input.actionPressed("seat") && this.vehicles.cycleSeat(),
      this.vehicles.update(
        e,
        this.input,
        l && (!this.remote.open || this.vehicles.remoteView),
        this.remote.viewing >= 0
          ? (this.vehicles.mine?.pos ?? this.player.pos)
          : this.player.pos,
        y,
        g,
        M,
      ),
      c &&
        !this.remote.open &&
        this.vehicles.mine &&
        this.vehicles.mine.type !== L.DRONE &&
        (this.vehicles.mineSeat > 0 && Qn.hasOpenSeats(this.vehicles.mine.type)
          ? this.vehicles.seatPos(
              this.vehicles.mine,
              this.vehicles.mineSeat,
              this.player.pos,
            )
          : this.player.pos.copy(this.vehicles.mine.pos),
        this.player.vel.set(0, 0, 0)),
      this.remote.open && this.vehicles.aboard)
    ) {
      const F = this.vehicles.aboard;
      (this.vehicles.aboardSeat > 0 && Qn.hasOpenSeats(F.type)
        ? this.vehicles.seatPos(F, this.vehicles.aboardSeat, this.player.pos)
        : this.player.pos.copy(F.pos),
        this.player.vel.set(0, 0, 0));
    }
    (this.sfx.updateVehicles(
      this.vehicles.vehicles.values(),
      f,
      this.player.yaw,
      this.currentPlanet,
    ),
      (this.corpses.viewer = f),
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
        f,
        this.inventory.creative,
        y,
        (F, N) =>
          g(F, N) ||
          (this.vehicles.jetSensors && Math.hypot(F - f.x, N - f.z) <= D1()),
        M,
      ),
      this.corpses.update(e, f),
      this.bots.setCameraBot(u?.id ?? -1),
      this.c4?.update(e, this.currentPlanet),
      this.eggs?.update(e, this.currentPlanet),
      this.knives?.update(e, this.currentPlanet));
    const E = this.front.active;
    (E ||
      ((this.landmarkAtmosphere ??= new cae(this.scene)),
      this.landmarkAtmosphere.update(
        e,
        this.world.seed,
        f,
        this.currentPlanet === Ci.EARTH,
        !wi(),
      )),
      (G.mapSeed =
        this.currentPlanet === Ci.EARTH && !E ? this.world.seed : null));
    const A = E && !!Pa(this.front.mapId)?.petals,
      T = E && !!Pa(this.front.mapId)?.haunted,
      x = E ? this.front.mapId : "";
    if (x !== this.mapFogId) {
      this.mapFogId = x;
      const F = x ? Pa(x)?.fog : void 0;
      this.mapFog = F
        ? { color: new Ge(F.color), near: F.near, far: F.far }
        : null;
    }
    (this.geiger.update(
      e,
      E ? Pa(this.front.mapId)?.geiger : void 0,
      f.x,
      f.z,
      this.running && this.player.alive,
    ),
      T !== this.hauntedOn &&
        ((this.hauntedOn = T),
        this.sky.setMoonlit(T ? 1 : 0),
        this.hauntedNight.setActive(T),
        T &&
          this.shaderWarm === 2 &&
          setTimeout(() => {
            this.running && this.hauntedOn && this.warmShaders();
          }, 1500)),
      this.killGhosts.update(e),
      T &&
        this.hauntedNight.update(e, {
          camera: this.camera.position,
          screamers: Y.screamers,
          calm:
            this.player.alive &&
            !this.vehicles.mine &&
            performance.now() - this.lastHurtAt > 1e4 &&
            !G.invOpen &&
            !this.weapons.shouldered,
        }),
      (!E || A || T) &&
        (this.autumn ||
          ((this.autumn = new Mae(
            this.scene,
            this.world,
            this.sfx,
            this.input.mobile,
            () => this.world.seed,
            (F) => this.effects.addTrauma(F),
          )),
          this.autumn.setOptions({
            fallingLeaves: Y.fallingLeaves,
            screamers: Y.screamers,
            particles: Bn().particles,
          }),
          this.autumn.setPixelScale(this.renderer.domElement.height)),
        this.autumn.update(e, {
          pos: f,
          camera: this.camera,
          yaw: this.player.yaw,
          dayness: this.sky.dayness,
          earth: this.currentPlanet === Ci.EARTH,
          raining: (this.weather?.rainAt(f.x, f.z) ?? 0) > 0,
          windX: this.windX,
          windZ: this.windZ,
          alive: this.player.alive,
          leavesOnly: E && !T,
          hauntFloor: T ? 0.45 : 0,
        }),
        E ||
          this.autumn.wendigoPresence(
            e,
            this.animals.wendigosNear(this.player.pos, 40),
            this.player.pos,
            this.player.yaw,
          )),
      E || this.animals.update(e, y, g),
      this.fishing.update(e, (F) => {
        if (F === this.myId)
          return c ? null : this.weapons.tipWorld(this.tmpFishTip);
        const N = this.remotes.heldTipWorld(
          F,
          this.tmpFishTip,
          this.fishing.tension(F),
        );
        if (N) return N;
        const fe = this.remotes.getPos(F);
        return fe ? this.tmpFishTip.set(fe.x, fe.y + 1.35, fe.z) : null;
      }),
      this.weapons.rodLine(
        this.fishing.hasLine(this.myId) || this.fishing.landing(this.myId),
        this.fishing.tension(this.myId),
      ),
      this.fishing.landing(this.myId) && this.weapons.spinReel(e * 16),
      this.idleAnimalVoices(e),
      this.weather?.update(e, this.player.pos),
      this.environment.update(e, this.player.pos, t),
      this.worldSites.update(e, this.player.pos),
      this.updateDroneSignalAndRange(),
      this.emote &&
        (!this.player.alive ||
          c ||
          this.player.seated ||
          this.player.prone ||
          this.player.crouching ||
          !this.player.onGround ||
          this.player.pos.distanceTo(this.emoteOrigin) > 0.18 ||
          this.input.mouseL ||
          this.input.mouseR ||
          this.input.action("jump") ||
          this.input.action("reload") ||
          t / 1e3 - this.emoteStart >= (yO(this.emote)?.duration ?? 0)) &&
        ((this.emote = 0), this.net.send(new lt(ue.C_ANIMATION).u8(0).u16(0))));
    const R = c ? (this.vehicles.passengerCanShoot() ? 2 : 1) : 0;
    R !== this.holdPolicy
      ? ((this.holdPolicy = R), this.syncHeld())
      : this.handItem() !== this.weapons.held && this.syncHeld();
    let _ = { fovScale: 1, sensScale: 1, scoped: !1, pitchKick: 0, adsT: 0 };
    if (
      !c ||
      this.vehicles.passengerCanShoot() ||
      this.vehicles.passengerCanRepair()
    ) {
      const F = this.inventory.held(),
        N = Math.hypot(this.player.vel.x, this.player.vel.z);
      ((_ = this.weapons.update(e, this.input, {
        moving: N > 0.6,
        onGround: this.player.onGround,
        sprint: this.player.sprinting && !c,
        vy: c ? 0 : this.player.vel.y,
        baseFov: Y.fov,
        allowFire:
          l &&
          !this.remote.open &&
          !this.spawnNotice.contains(
            this.player.pos.x,
            this.player.pos.z,
            this.currentPlanet,
          ) &&
          !!Ss[F] &&
          (!c || this.vehicles.passengerAimClear()),
        allowReload:
          l &&
          !this.remote.open &&
          !!Ss[F] &&
          (!c || this.vehicles.passengerAimClear()),
        onBlockedFire: () => this.spawnNotice.deny("fire", !wi()),
        allowSwing: l && !this.remote.open && !c,
        crouching: this.player.crouching,
        prone: this.player.prone,
      })),
        (this.player.pitch = Oe(this.player.pitch + _.pitchKick, -1.55, 1.55)),
        c &&
          this.vehicles.mySeatGun() &&
          ((_.fovScale = 1), (_.sensScale = 1), (_.scoped = !1), (_.adsT = 0)),
        l && !this.remote.open && this.handleItemActions(e, i));
    } else this.weapons.cancelThrow();
    this.throwGauge.update(this.weapons.throwCharge());
    {
      const F =
        this.player.alive && !c
          ? this.projectiles.nearestGrenade(this.camera.position, 9)
          : null;
      this.grenadeWarning.update(
        F && F.left < 2
          ? {
              dx: F.pos.x - this.camera.position.x,
              dz: F.pos.z - this.camera.position.z,
              left: F.left,
            }
          : null,
        this.player.yaw,
      );
    }
    (performance.now() > this.weldingUntil && this.weapons.setWelding(!1),
      this.welderMenu.update(),
      this.skillsMenu.update(),
      (Jt.enabled =
        !this.inventory.creative && !this.player.flying && this.player.alive),
      Jt.tick(e),
      kR(
        l &&
          !this.player.downed &&
          this.player.alive &&
          (!c || this.vehicles.passengerCanShoot()),
      ),
      (!l ||
        this.player.downed ||
        !this.player.alive ||
        (c && !this.vehicles.passengerCanShoot())) &&
        this.weapons.cancelInspect());
    const C = this.weapons.inspectTime >= 0;
    (C !== this.sentInspect ||
      (C && this.sentInspectSequence !== this.weapons.inspectSequence)) &&
      ((this.sentInspect = C),
      (this.sentInspectSequence = this.weapons.inspectSequence),
      this.net.send(new lt(ue.C_ANIMATION).u8(4).u16(C ? 3200 : 0)));
    const P =
      this.weapons.isReloading() && (!c || this.vehicles.passengerCanShoot());
    if (P !== this.sentReload) {
      this.sentReload = P;
      const F = Ss[this.inventory.held()];
      this.net.send(
        new lt(ue.C_ANIMATION)
          .u8(1)
          .u16(P && F ? Math.round(this.weapons.reloadSeconds(F) * 1e3) : 0),
      );
    }
    ((this.sensScale = _.sensScale),
      this.minedThisFrame ||
        ((this.mining = null),
        G.setMiningProgress(null),
        this.sfx.drillStop(),
        this.weapons.setMining(!1)),
      (this.minedThisFrame = !1),
      (this.player.downed || a || Y.cinematicHud) && this.weapons.hideHeld(),
      (this.downedBlend +=
        ((this.player.downed ? 1 : 0) - this.downedBlend) *
        (1 - Math.exp(-e * 4))),
      (this.tpAim = null));
    const O = this.vehicles.ownWreck,
      B = O ? (performance.now() - O.at) / 1e3 : 99;
    if (!this.player.alive && O && B < 3.8 && O.group.parent) {
      const F = O.group.position,
        N = this.deathCamRoll + B * 0.45,
        fe = 26 + B * 9;
      (this.camera.position.set(
        F.x + Math.sin(N) * fe,
        F.y + 9 + B * 4,
        F.z + Math.cos(N) * fe,
      ),
        this.camera.lookAt(F),
        this.weapons.hideHeld());
    } else if (!this.player.alive && this.deathCamT >= 0 && !c) {
      this.deathCamT += e;
      const F = Math.min(1, this.deathCamT / 0.85),
        N = F * F * (3 - 2 * F),
        fe = Math.min(1, this.deathCamT / 1.6),
        De = 1.62 - (this.downedBlend > 0.5 ? 0.9 : 0);
      (this.camera.position
        .copy(this.player.pos)
        .add(
          this.tmpV.set(
            0,
            Math.max(0.28, De - (De - 0.28) * N) +
              Math.sin(Math.min(1, this.deathCamT / 0.95) * Math.PI) * 0.04,
            0,
          ),
        ),
        this.camera.rotation.set(
          this.player.pitch + (0.35 - this.player.pitch) * fe * 0.6,
          this.player.yaw,
          this.deathCamRoll * N,
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
    else if (u)
      (this.camera.position.copy(u.pos).add(new k(0, eae, 0)),
        this.camera.rotation.set(this.soldierPitch, this.soldierYaw, 0, "YXZ"));
    else if (c && this.vehicles.cameraPose(this.camPose, e))
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
      const F = this.player.parachute
        ? this.chuteBank * 0.07 + Math.sin((t / 1e3) * 1.1) * 0.018
        : 0;
      (this.camera.rotation.set(this.player.pitch, this.player.yaw, F),
        this.applyCameraBob(e, _.fovScale < 0.999));
    }
    const H = this.effects.getShake(this.tmpV);
    (this.camera.position.add(this.tmpV),
      this.camera.rotateZ((Math.random() - 0.5) * H));
    const D = this.player.sprinting && !c ? 1.05 : 1,
      U = c ? this.vehicles.sightZoom() : 1,
      W = c ? this.vehicles.speedRush() : 0,
      J = ((Y.fov * _.fovScale * D) / U) * (U > 1.01 ? 1 : 1 + 0.16 * W);
    (Math.abs(this.camera.fov - J) > 0.05 &&
      ((this.camera.fov = ns(this.camera.fov, J, 1 - Math.exp(-14 * e))),
      this.camera.updateProjectionMatrix()),
      (W > 0 || this.speedLines) &&
        ((this.speedLines ??= new poe(
          this.scene,
          (this.input.mobile ? 34 : 84) * Math.min(1, Bn().particles),
        )),
        this.speedLines.update(
          this.camera,
          this.vehicles.mine?.vel ?? this.tmpV.set(0, 0, 0),
          W,
          e,
        )),
      G.setScope(_.scoped));
    const j = c ? this.vehicles.sightInfo() : null;
    this.gunnerSight ??= new Qne();
    const ne = this.vehicles.mine?.type,
      ge =
        c &&
        this.vehicles.mineSeat === 0 &&
        (ne === L.TANK || ne === L.BTR_TURRET) &&
        !this.vehicles.remoteView,
      be = c && !this.vehicles.remoteView && !!this.vehicles.mySeatGun(),
      oe =
        ge && this.vehicles.gunAimPoint(this.tmpGunPoint)
          ? this.tmpGunPoint
          : be && this.vehicles.seatGunAimPoint(this.tmpGunPoint)
            ? this.tmpGunPoint
            : null;
    j
      ? this.gunnerSight.update(
          j,
          this.camera,
          oe,
          null,
          this.input.mobile,
          j.kind === "mg" && this.vehicles.seatSight()?.arc === !1,
        )
      : oe
        ? this.gunnerSight.marker(this.camera, oe)
        : this.gunnerSight.hide();
    const he = so(this.inventory.held()).scope === 5 && _.adsT > 0.35;
    (G.setCrosshair(
      !_.scoped && !j && !he,
      !c && Ss[this.inventory.held()] ? this.weapons.carried : 0,
    ),
      so(this.inventory.held()).scope === 5 && _.adsT > 0.55
        ? G.setHoloRange(this.aimedDistance())
        : G.setHoloRange(null));
    {
      let F = this.player.vel.x,
        N = this.player.vel.z;
      const fe = this.vehicles.mine;
      fe && ((F = fe.vel.x), (N = fe.vel.z));
      const De =
        u?.pos ?? (this.remote.viewing >= 0 && fe ? fe.pos : this.player.pos);
      if (this.airTerrain) {
        const Xe = fe ? fe.pos.y - Math.max(Bs, vy(fe.pos.x, fe.pos.z)) : 0;
        this.world.flightRadius = fe
          ? Xe > 260
            ? 2
            : Xe > 150
              ? 4
              : Xe > 80
                ? 6
                : Math.min(this.world.renderDist, 9)
          : null;
      }
      this.world.update(
        De.x,
        De.z,
        F,
        N,
        !!fe &&
          on(fe.type) &&
          fe.pos.y - this.world.groundAt(fe.pos.x, fe.pos.z, fe.pos.y) > 30,
      );
    }
    if (
      (this.world.updateTime(t / 1e3),
      this.remotes.setDayness(this.sky.dayness),
      this.remotes.update(
        e,
        f,
        this.inventory.creative,
        y,
        (F, N) =>
          this.world.isLoaded(F, N) ||
          (this.vehicles.jetSensors && Math.hypot(F - f.x, N - f.z) <= D1()),
        (F, N, fe, De) => this.vehicles.remoteSeatPose(F, N, fe, De),
        (F, N) => N > 0 && this.vehicles.vehicles.get(F)?.type === L.HELI,
        (F) =>
          [L.TANK, L.BTR_TURRET].includes(
            this.vehicles.vehicles.get(F)?.type ?? -1,
          ),
        this.camera,
      ),
      this.applyBattleSight(t),
      Y.cinematicHud &&
        (this.bots.hideLabelsUnless(() => !1),
        this.remotes.hideTagsUnless(() => !1),
        this.vehicles.hidePlates()),
      (this.localFire.visible =
        this.localBurning &&
        this.player.alive &&
        !this.selfBody?.group.visible),
      this.localFire.visible && uE(this.localFire, t / 1e3),
      this.projectileAudioRight
        .set(1, 0, 0)
        .applyQuaternion(this.camera.quaternion),
      this.projectiles.update(
        e,
        this.camera.position,
        this.projectileAudioRight,
      ),
      this.jetGun &&
        this.jetGun.update(
          e,
          (F, N, fe, De) => this.jetRoundStrike(F, N, fe, De),
          this.camera,
        ),
      this.airTrails &&
        (this.airTrails.setSun(this.sky.sunDir),
        this.airTrails.update(e, this.camera, this.projectiles.inFlight())),
      this.running &&
        this.player.alive &&
        !Y.cinematicHud &&
        this.updateCompass(),
      this.tacticalHud.update(
        this.camera,
        this.vehicles,
        this.weapons,
        this.world,
        this.running && this.player.alive && !G.anyOpen(),
        this.vehicles.jetSensors
          ? [...this.remotes.thermalTargets(), ...this.bots.thermalTargets()]
          : [],
        this.airWeapons?.hud,
      ),
      this.effects.setLightProbe((F, N, fe) => {
        const De = this.world.probeSky(F, N, fe);
        return {
          sky: De,
          block: Math.min(
            1,
            this.world.probeLight(F, N, fe) + this.effects.fireFill(F, N, fe),
          ),
          ambient: Math.max(
            De * this.sky.dayness,
            h1(this.scene).probe(F, N, fe),
          ),
        };
      }),
      (this.effects.blastFx.ambient = 0.25 + 0.75 * this.sky.dayness),
      this.effects.update(e),
      this.bulletHoles.update(e, 0.3 + this.sky.dayness * 0.7),
      this.updateHitboxDebug(),
      this.updateMiningVisual(),
      this.sky.update(this.timeOfDay, this.camera.position, e),
      this.airTerrain)
    ) {
      const F = this.shaders.active;
      (F !== this.airMatchPack &&
        ((this.airMatchPack = F),
        F
          ? this.airTerrain.setMatch(
              [0.34, 0.56, 1.13],
              [0.894, 0.934, 1.278],
              {
                3: [1.1, 0.82, 1.2],
                10: [1.03, 1, 1.015],
                11: [1.42, 0.93, 1.14],
                12: [1.8, 1.3, 2.1],
                13: [1.14, 0.83, 1.59],
                14: [0.95, 0.875, 0.95],
              },
            )
          : this.airTerrain.setMatch(
              [0.665, 0.66, 0.6],
              [1.393, 1.021, 1.272],
              {
                3: [1.14, 0.94, 1.29],
                10: [1.26, 1.09, 1.26],
                11: [1.27, 1.08, 1.24],
                12: [1.19, 0.97, 1.23],
                13: [1.28, 0.86, 1.4],
                14: [0.9, 0.95, 0.96],
              },
            )),
        this.airTerrain.update(
          this.camera,
          this.sky,
          this.world.chunks.values(),
        ),
        this.airProps?.update(this.camera),
        this.airAmbience &&
          this.airAmbience.update(e, this.camera, this.ambienceView()),
        this.front.state &&
          this.airTerrain.setZones(this.front.state.f, this.front.team));
    }
    (this.front.update(this.camera, this.player.pos, this.player.alive),
      this.vision.updateLighting(this.sky.dayness));
    const Ie = this.weather?.overcast() ?? 0,
      ve =
        Zr(this.world.seed, this.player.pos.x, this.player.pos.z) === "desert";
    (this.sky.setOvercast(Ie, ve && Ie > 0),
      this.world.updateWaterLight(
        this.sky.sunDir,
        this.sky.sunColor,
        this.sky.skyColor,
        this.sky.dayness,
      ),
      this.updateSubmersion(e),
      this.scene.fog instanceof Sf &&
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
      const F = this.world.probeLight(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z,
        ),
        N = this.world.probeSky(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z,
        );
      ((this.vmLight.intensity = (0.08 + this.sky.litness) * N + F * 1.1),
        (this.vmKeyLight.intensity = (0.05 + this.sky.litness) * N + F * 0.8),
        this.vmKeyLight.color.copy(this.sky.sunColor).lerp(Che, 0.45));
    }
    (this.drops.update(
      e,
      this.player.pos,
      this.player.alive,
      y,
      (F, N) => this.world.isLoaded(F, N),
      (F, N) => CZ(F, N, (fe, De) => this.inventory.hasRoomFor(fe, De)),
    ),
      this.backpacks.update(e, (F, N) => this.world.isLoaded(F, N), y));
    const it = this.vehicles.mine?.type === L.DRONE,
      st = this.player.parachute && this.parachuteTPV,
      ot = this.vehicles.aboard,
      at = this.vehicles.aboardSeat,
      Re = this.remote.open
        ? !!ot && Qn.hasOpenSeats(ot.type)
        : (!c && (this.thirdPerson || !!this.emote)) ||
          (c &&
            this.vehicles.camMode === 1 &&
            !this.vehicles.closeCamera &&
            !!m &&
            Qn.hasOpenSeats(m.type));
    (it || st || Re) &&
      !this.selfBody &&
      this.myId &&
      ((this.selfBody = Kc(GN(this.myId))),
      (this.selfFire = dE()),
      this.selfBody.group.add(this.selfFire),
      this.scene.add(this.selfBody.group),
      this.refreshSelfArmor());
    const V = !!this.myDisguise && !ot && !c && !it && !this.player.seated;
    if (
      (this.myDisguise &&
        ((this.myDisguise.root.visible = V && Re && this.player.alive),
        V &&
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
            this.myDisguise.disguise.kind === la.BLOCK &&
              G.setHint(this.disguiseSnapped ? z("disguiseSnapped") : "")))),
      this.selfBody)
    ) {
      if (
        ((this.selfBody.group.visible =
          (it || st || Re) &&
          this.player.alive &&
          !V &&
          ![L.TANK, L.BTR_TURRET].includes(this.vehicles.mine?.type ?? -1)),
        this.selfBody.group.visible)
      ) {
        (this.selfBody.group.position.copy(this.player.pos),
          (this.selfBody.group.rotation.order = "YXZ"),
          (this.selfBody.group.rotation.y = this.player.yaw),
          (this.selfBody.group.rotation.x = this.player.prone
            ? -Math.PI / 2
            : 0),
          (this.selfBody.group.rotation.z = 0),
          ot &&
            this.vehicles.remoteSeatPose(
              ot.id,
              at,
              this.selfBody.group.position,
              this.selfBody.group.quaternion,
            ));
        const F = c
          ? Math.atan2(
              Math.sin(this.vehicles.camYaw - this.selfBody.group.rotation.y),
              Math.cos(this.vehicles.camYaw - this.selfBody.group.rotation.y),
            )
          : 0;
        ((this.selfBody.head.rotation.y +=
          (Math.max(-1.15, Math.min(1.15, F)) - this.selfBody.head.rotation.y) *
          (1 - Math.exp(-16 * e))),
          Td(
            this.selfBody,
            this.player.downed || a || (ot && at === 0)
              ? 0
              : this.inventory.held(),
            this.atlas.texture,
          ),
          this.ownAppearance &&
            Oc(
              this.selfBody.group,
              this.ownAppearance.character,
              this.ownAppearance.custom,
            ));
        for (const N of this.selfBody.heldMesh.children)
          qa(
            N,
            this.inventory.hotbar[this.inventory.sel]?.cosmetic,
            this.ownAppearance?.owner ?? qe?.id ?? Y.nick,
          );
        if (((this.selfLightT += e), this.selfLightT >= Vc)) {
          this.selfLightT = 0;
          const N = Il(this.world, this.selfBody.group.position, y, 1);
          (this.localBurning && (N.strength = Math.max(N.strength, 0.55)),
            Pl(this.selfBody.group, N));
        }
        Xf(this.selfBody, e, t / 1e3, {
          speed: Math.hypot(this.player.vel.x, this.player.vel.z),
          pitch: this.player.pitch,
          reviving: a,
          held: this.player.downed ? 0 : this.inventory.held(),
          aiming: this.weapons.shouldered,
          crouching: this.player.crouching,
          prone: this.player.prone,
          airborne: !ot && !this.player.onGround,
          parachute: st,
          seated:
            this.player.seated || (!!ot && !(ot.type === L.HELI && at > 0)),
          inspect: this.weapons.inspectTime,
          emote: this.emote,
          emoteTime: t / 1e3 - this.emoteStart,
          reload: this.weapons.reloadT,
          shot: Math.max(0, (this.selfShotUntil - t) / 140),
          voice: this.voice.localLevel,
          swing: (t / 1e3 - this.selfSwingAt) / _O,
        });
      }
      this.selfFire &&
        ((this.selfFire.visible =
          this.selfBody.group.visible && this.localBurning),
        this.selfFire.visible && uE(this.selfFire, t / 1e3));
    }
    const ye =
      this.player.alive &&
      !Re &&
      !st &&
      !this.emote &&
      !this.casino?.open &&
      !this.casino?.blackjack.open &&
      !this.computer?.open;
    {
      const F =
          this.player.alive &&
          !this.player.downed &&
          !Y.cinematicHud &&
          !this.casino?.blackjack.open &&
          !this.remote.open &&
          !this.vehicles.remoteView &&
          (!c || this.vehicles.passengerCanShoot()),
        N =
          F &&
          !ye &&
          this.selfBody?.group.visible &&
          so(this.inventory.held()).laser
            ? (this.selfBody.heldMesh.getObjectByName("vm-laser") ??
              this.selfBody.heldMesh.getObjectByName("vm-muzzle"))
            : null;
      this.weapons.updateLaser(
        F,
        N ? N.getWorldPosition(this.tpLaser) : null,
        ye,
      );
    }
    {
      const F = Math.atan2(
        Math.sin(this.player.yaw - this.chuteYaw),
        Math.cos(this.player.yaw - this.chuteYaw),
      );
      this.chuteYaw = this.player.yaw;
      const N = this.player.parachute
        ? Oe(F / Math.max(0.001, e), -2.2, 2.2)
        : 0;
      this.chuteBank += (N - this.chuteBank) * (1 - Math.exp(-4 * e));
    }
    if (
      (this.player.parachute &&
        !this.chute &&
        this.myId &&
        ((this.chute = mO()), this.scene.add(this.chute)),
      this.chute)
    ) {
      if (
        ((this.chute.visible = this.player.parachute && this.player.alive),
        this.chute.visible)
      ) {
        (this.chute.position.copy(this.player.pos),
          (this.chute.rotation.y = this.player.yaw));
        const F = this.chute.getObjectByName("parachute-lines");
        F && (F.visible = st);
        const N = this.chute.getObjectByName("parachute-pack");
        N && (N.visible = st);
      }
      gO(this.chute, e, t / 1e3, this.chuteBank, this.player.flaring ? 1 : 0);
    }
    (this.loadingShown && this.updateJoinScreen(t),
      (this.moveTimer += e),
      this.moveTimer >= 0.05 && ((this.moveTimer = 0), this.sendPlayerState()),
      (this.pingTimer += e),
      this.pingTimer >= 3 &&
        ((this.pingTimer = 0),
        this.net.send(
          new lt(ue.C_PING)
            .u32(performance.now() & 4294967295)
            .u16(this.lastRtt),
        )));
    const Ce = Date.now();
    (Ce - this.loopSeenAt > 700 && this.net.expectWord(3500, PM),
      this.loopSeenAt &&
        (Ce - this.loopSeenAt > this.longFrame ||
          Ce - this.longFrameAt > 3e4) &&
        ((this.longFrame = Ce - this.loopSeenAt), (this.longFrameAt = Ce)),
      (this.loopSeenAt = Ce),
      !this.localSinglePlayer &&
        this.net.dropIfSilent(PM) &&
        (this.pingTimer = 0),
      (this.invSaveTimer += e),
      this.inventoryReady &&
        this.invDirty &&
        this.invSaveTimer >= 0.25 &&
        ((this.invSaveTimer = 0), (this.invDirty = !1), this.sendInventory()),
      !this.player.alive &&
        this.deathTimer > 0 &&
        ((this.deathTimer -= e),
        G.setDeathCountdown(this.deathTimer),
        this.deathTimer <= 0 && this.net.send(new lt(ue.C_RESPAWN))),
      G.tick(e),
      G.updateHitDirs(
        e,
        this.camera.position.x,
        this.camera.position.z,
        this.player.yaw,
      ),
      G.updateQuestTimer(),
      G.setQuestDistance(this.player.pos),
      this.operations?.update(e, this.player.pos),
      (this.hudTimer += e),
      this.hudTimer >= 0.12 && ((this.hudTimer = 0), this.updateHud(c)),
      this.updateFootsteps(l && !c),
      this.updateHealHud(),
      !this.localSinglePlayer && !document.hidden && Qse(i),
      document.hidden || aee(i, this.localSinglePlayer),
      !document.hidden &&
        !this.loadingShown &&
        cee(
          i,
          this.localSinglePlayer ? 0 : this.lastRtt,
          Y.quality,
          this.localSinglePlayer
            ? "solo"
            : this.front?.active
              ? this.front.arms
                ? "armsrace"
                : this.front.tdm
                  ? "tdm"
                  : "frontline"
              : "survival",
        ),
      this.updateMusicMood(e));
    const ze = this.vision.tick(this.inventory.creative ? 0 : e);
    (ze > 0 && this.net.send(new lt(ue.C_VISION_WEAR).u8(Math.min(5, ze))),
      G.rotateMinimap(this.viewHeading()),
      (this.minimapTimer += e));
    const tt = this.input.mobile ? 0.35 : 0.12;
    if (
      (this.minimapTimer >= tt &&
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
      h1(this.scene).update(this.camera.position, this.lampRaycast),
      (this.renderer.info.autoReset = !1),
      this.renderer.info.reset(),
      this.camera.layers.set(0),
      (this.renderer.toneMappingExposure = 1.15 * Y.brightness),
      this.shaders.active && this.shaders.prepare(this.buildShaderFrame(i)),
      this.weather?.setShaderLighting(
        this.shaders.active ? 0.2 + 0.55 * this.sky.dayness : null,
      ),
      this.sky.setPhysical(this.shaders.skyLut, this.shaders.volumetricClouds));
    const ht =
      this.vehicles.mine &&
      on(this.vehicles.mine.type) &&
      this.vehicles.mine.speed > 12;
    (this.borderVisual?.update(
      this.camera.position,
      !wi(),
      this.player.alive && !G.anyOpen(),
      ht ? 110 : 0,
    ),
      this.claimsUI?.update(
        this.player.pos,
        this.currentPlanet,
        this.player.alive && !G.anyOpen(),
      ),
      this.updatePropertyNotice(),
      this.spawnNotice.update(
        this.player.pos,
        this.currentPlanet,
        !wi(),
        this.player.alive && !G.anyOpen(),
        this.input.mobile,
      ),
      this.updateTraining(e),
      this.casino?.setEnabled(this.currentPlanet === Ci.EARTH),
      this.casino?.open &&
        (!this.player.alive || this.player.downed) &&
        this.casino.park(),
      this.casino?.update(e, this.player.pos, this.camera, this.net.connected),
      this.computer?.open &&
        (!this.player.alive || this.player.downed) &&
        this.computer.close(),
      this.computer?.update(
        e,
        this.player.pos,
        this.camera,
        this.net.connected,
        this.currentPlanet === Ci.EARTH,
      ),
      this.screens?.update(e, this.camera.position),
      this.world.renderWaterReflection(this.renderer, this.camera),
      this.shaders.beginWorld(this.scene));
    const ut = !this.shaders.active;
    if (
      (ut && this.camera.layers.enable(by),
      (this.renderer.shadowMap.needsUpdate =
        this.renderer.shadowMap.enabled && (this.frameIndex++ & 1) === 0),
      this.renderer.render(this.scene, this.camera),
      this.camera.layers.set(0),
      this.vision.mode === "thermal" || this.vehicles.jetSensors)
    ) {
      const F = [
        ...this.remotes.thermalTargets(),
        ...this.bots.thermalTargets(),
        ...this.animals.thermalTargets(),
      ];
      this.selfBody?.group.visible && F.push(this.selfBody.group);
      const N = this.vehicles.jetSensors,
        fe = this.vehicles.mine?.pos,
        De = (Xe) =>
          !N ||
          !fe ||
          Xe.getWorldPosition(this.tmpV).distanceToSquared(fe) <= D1() ** 2;
      this.vision.renderThermal(
        F.filter(De),
        this.vehicles
          .thermalTargets()
          .filter(
            (Xe) =>
              Xe !== this.vehicles.mine?.group &&
              Xe !== this.vehicles.mine?.lod &&
              De(Xe),
          ),
        N,
      );
    }
    if (
      (this.shaders.endWorld(this.scene),
      (this.renderer.autoClear = !1),
      this.renderer.clearDepth(),
      this.camera.layers.set(y1),
      ye)
    ) {
      const F = this.camera,
        N = F.matrixWorldAutoUpdate;
      F.matrixWorldAutoUpdate = !1;
      try {
        this.renderer.render(F, this.camera);
      } finally {
        F.matrixWorldAutoUpdate = N;
      }
    }
    if (
      (this.camera.layers.set(0),
      (this.renderer.autoClear = !0),
      this.shaders.present(),
      !ut)
    ) {
      (this.frameIndex & 63) === 1 &&
        this.scene.traverse((fe) => {
          fe.isLight && fe.layers.isEnabled(0) && fe.layers.enable(by);
        });
      const F = this.scene.matrixWorldAutoUpdate,
        N = this.renderer.shadowMap.autoUpdate;
      (this.camera.layers.set(by),
        (this.scene.matrixWorldAutoUpdate = !1),
        (this.renderer.shadowMap.autoUpdate = !1),
        (this.renderer.autoClear = !1),
        this.renderer.setRenderTarget(null));
      try {
        this.renderer.render(this.scene, this.camera);
      } finally {
        ((this.scene.matrixWorldAutoUpdate = F),
          (this.renderer.shadowMap.autoUpdate = N),
          (this.renderer.autoClear = !0),
          this.camera.layers.set(0));
      }
    }
    (this.adaptResolution(i, t), this.input.endFrame());
  }
  adaptResolution(e, t) {
    if (document.hidden || this.loadingShown || e > 0.25) {
      this.slowChecks = 0;
      return;
    }
    if (
      ((this.frameEma += (e * 1e3 - this.frameEma) * 0.08),
      t - this.adaptiveAt < 1500)
    )
      return;
    this.adaptiveAt = t;
    let i = this.adaptiveScale;
    (Y.adaptiveResolution &&
      (this.frameEma > 19.5 && i > 0.7
        ? (i = Math.max(0.7, i - 0.1))
        : this.frameEma < 12.5 && i < 1 && (i = Math.min(1, i + 0.05)),
      Math.abs(i - this.adaptiveScale) > 1e-6 &&
        ((this.adaptiveScale = i), this.applyPixelRatio())),
      this.autoQualityStep(t),
      this.gpuHintStep(t));
  }
  gpuHintSlow = 0;
  gpuHintDone = !1;
  gpuHintStep(e) {
    if (
      this.gpuHintDone ||
      ((this.gpuHintSlow =
        this.frameEma > 36 &&
        e - this.loadingStartedAt > 15e3 &&
        !navigator.webdriver
          ? this.gpuHintSlow + 1
          : 0),
      this.gpuHintSlow < 14)
    )
      return;
    this.gpuHintDone = !0;
    const t = whe(this.renderer.getContext());
    if (!Ehe() || !She(t)) return;
    try {
      if (
        Date.now() - Number(localStorage.getItem("fc-gpu-hint") || 0) <
        3 * 864e5
      )
        return;
      localStorage.setItem("fc-gpu-hint", String(Date.now()));
    } catch {}
    const i = Mhe(t);
    G.addChat(
      1,
      I(
        `The game is running on the processor's built-in graphics (${i}). If this computer also has an NVIDIA or AMD card, give it to your browser: Windows Settings → System → Display → Graphics → your browser → High performance, then restart the browser.`,
        `Игра идёт на встроенной в процессор видеокарте (${i}). Если в компьютере есть ещё NVIDIA или AMD, отдайте её браузеру: Параметры Windows → Система → Дисплей → Графика → ваш браузер → «Высокая производительность», затем перезапустите браузер.`,
      ),
    );
  }
  slowChecks = 0;
  autoQualityAt = 0;
  autoQualityStep(e) {
    const t = !Y.adaptiveResolution || this.adaptiveScale <= 0.700001;
    if (
      ((this.slowChecks =
        Y.qualityAuto && t && this.frameEma > 36 && !navigator.webdriver
          ? this.slowChecks + 1
          : 0),
      this.slowChecks < 7 ||
        e - this.autoQualityAt < 45e3 ||
        e - this.loadingStartedAt < 15e3)
    )
      return;
    const i = { ultra: "high", high: "medium", medium: "low" }[Y.quality];
    if (!i) return;
    ((this.slowChecks = 0),
      (this.autoQualityAt = e),
      (Y.quality = i),
      (Y.graphics = { ...C5[i] }),
      (Y.shaders = SA[i]),
      Ji(),
      G.syncSettingsPanel(),
      this.applyQuality());
    const n = z(
      i === "high"
        ? "qualityHigh"
        : i === "medium"
          ? "qualityMedium"
          : "qualityLow",
    );
    G.addChat(
      1,
      I(
        `Graphics lowered to ${n} to keep the game smooth. You can change it in Settings → Graphics.`,
        `Графика снижена до уровня «${n}», чтобы игра шла плавно. Изменить можно в Настройки → Графика.`,
      ),
    );
  }
  applyPixelRatio() {
    const e = Math.max(0.5, this.basePixelRatio * this.adaptiveScale);
    (this.renderer.setPixelRatio(e), this.effects.setPixelRatio(e));
  }
  buildShaderFrame(e) {
    const t = this.scene.fog,
      i = this.camera.position,
      n = (this.shaderFrame ??= {
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
    ((n.dayness = this.sky.dayness),
      (n.overcast = this.sky.overcastAmount),
      (n.clearSky = this.sky.clearSkyAmount),
      (n.lunar = this.sky.isLunar),
      (n.fogNear = Math.max(t.near, t.far * 0.72)),
      (n.fogFar = t.far),
      (n.fogColor = t.color),
      (n.underwater = this.underwaterMix),
      (n.lava = this.inLava),
      (n.waterSurfaceY = this.waterSurfaceY),
      (n.skyProbe = this.world.probeSky(i.x, i.y, i.z)),
      (n.clouds = Bn().clouds),
      (n.wetness =
        this.weather?.rainAt(this.player.pos.x, this.player.pos.z) ?? 0),
      (n.time = performance.now() / 1e3),
      (n.dt = e),
      (n.windX = this.windX),
      (n.windZ = this.windZ),
      (n.exposure = this.renderer.toneMappingExposure),
      (n.rays = Bn().sunShafts),
      (n.lightning = this.weather?.lightningFlash ?? 0));
    const o = Zr(this.world.seed, this.player.pos.x, this.player.pos.z);
    return ((n.arid = o === "desert" ? 1 : o === "savanna" ? 0.5 : 0), n);
  }
  updateBodyCamera(e) {
    const t = this.player.eyePos(this.tmpV).clone(),
      i = this.player.lookDir(this.tmpV2).clone(),
      n = !!this.emote || this.frontView,
      o = this.inventory.held(),
      a = !!Ss[o],
      r = this.input.mouseR && !n && !this.player.parachute,
      l = n ? 3.6 : r ? 1.85 : a ? 3.1 : 4.2,
      c = n ? 0 : r ? 0.72 : a ? 0.78 : 0.5,
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
      const x = this.world.raycast(t, p.normalize(), m + 0.2);
      x && f.copy(t).addScaledVector(p, Math.max(0, x.dist - 0.2));
    }
    const g = n ? i.clone() : i.clone().negate(),
      y = this.world.raycast(f, g, this.footCameraDistance + 0.3),
      b = y ? Math.max(0.3, y.dist - 0.3) : this.footCameraDistance,
      S = f.clone().addScaledVector(g, b);
    (this.camera.position.copy(S),
      n
        ? this.camera.quaternion.setFromRotationMatrix(
            new Rt().lookAt(S, t, new k(0, 1, 0)),
          )
        : this.camera.rotation.set(
            this.player.pitch,
            this.player.yaw,
            0,
            "YXZ",
          ));
    const M = this.tpAimData;
    if ((M.origin.copy(t), n)) {
      const x = this.world.raycast(t, i, 200);
      (M.target.copy(t).addScaledVector(i, x ? x.dist : 200), (M.landed = !!x));
    } else {
      const x = S.clone().addScaledVector(
          i,
          Math.max(0, t.clone().sub(S).dot(i)),
        ),
        R = 300;
      let _ = this.world.raycast(x, i, R)?.dist ?? R;
      ((_ = Math.min(_, this.remotes.raycastHit(x, i, _)?.dist ?? _)),
        (_ = Math.min(_, this.bots.raycastHit(x, i, _)?.dist ?? _)),
        (_ = Math.min(_, this.animals.raycastHit(x, i, _)?.dist ?? _)),
        (_ = Math.min(_, this.vehicles.rayHit(x, i, _)?.dist ?? _)),
        M.target.copy(x).addScaledVector(i, _),
        (M.landed = _ < R),
        M.target.distanceTo(t) < 0.8 &&
          M.target.copy(t).addScaledVector(i, 0.8));
    }
    const E = this.selfBody?.group.visible ? this.selfBody.heldMesh : null,
      A = E?.getObjectByName("vm-muzzle") ?? null,
      T = E?.getObjectByName("vm-laser") ?? null;
    ((M.muzzle = A ? A.getWorldPosition(this.tpMuzzle) : null),
      (M.laser = T ? T.getWorldPosition(this.tpLaser) : null),
      (this.tpAim = M));
  }
  aimedDistance(e = 300) {
    const t = this.camera.getWorldPosition(this.tmpAimEye),
      i = this.camera.getWorldDirection(this.tmpAimDir),
      n = this.rayDistance(t, i, e);
    return n < e ? n : null;
  }
  rayDistance(e, t, i) {
    let n = this.world.raycast(e, t, i)?.dist ?? i;
    return (
      (n = Math.min(n, this.remotes.raycastHit(e, t, n)?.dist ?? n)),
      (n = Math.min(n, this.bots.raycastHit(e, t, n)?.dist ?? n)),
      (n = Math.min(n, this.animals.raycastHit(e, t, n)?.dist ?? n)),
      (n = Math.min(n, this.vehicles.rayHit(e, t, n)?.dist ?? n)),
      n
    );
  }
  scoreTargetHit(e, t, i, n) {
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
      l = XG(a, r);
    this.effects.targetHit(e, t, i, n, l);
    const c = performance.now();
    (c - this.targetLastHitAt > Rhe &&
      ((this.targetScoreTotal = 0), (this.targetShots = 0)),
      (this.targetLastHitAt = c),
      (this.targetScoreTotal += l),
      this.targetShots++,
      G.showTargetScore(l, this.targetScoreTotal, this.targetShots),
      G.hitmark(),
      this.sfx.hitmark(),
      this.input.mobile && Uo("light", 55));
  }
  bearingTo(e) {
    const t = this.navigationPosition(),
      i = e.x - t.x,
      n = e.z - t.z;
    return ((Math.atan2(i, -n) * 180) / Math.PI + 360) % 360;
  }
  idleAnimalVoices(e) {
    if (((this.animalVoiceT -= e), this.animalVoiceT > 0)) return;
    this.animalVoiceT = 2.5 + Math.random() * 6;
    const t = this.animals.nearbyForVoice(this.player.pos, 30);
    if (t.length === 0) return;
    const i = t[Math.floor(Math.random() * t.length)];
    i.type !== Bt.WENDIGO &&
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
      n = this.player.pos;
    return ((e.x - n.x) * Math.cos(i) - (e.z - n.z) * Math.sin(i)) / (t || 1);
  }
  animalCryAt = new Map();
  animalCry(e, t) {
    const i = this.animals.voiceInfo(e);
    if (!i || i.type === Bt.WENDIGO) return;
    const n = i.at.distanceTo(this.player.pos);
    if (n > 60) return;
    const o = performance.now();
    (t === "hurt" && o - (this.animalCryAt.get(e) ?? 0) < 300) ||
      (this.animalCryAt.set(e, o),
      this.animalCryAt.size > 256 &&
        this.animalCryAt.delete(this.animalCryAt.keys().next().value),
      this.sfx.animalVoice(i.type, n, e, this.panTo(i.at, n), t, i.baby));
  }
  stepPosition = new k();
  stepReady = !1;
  stepDistance = 0;
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
    const n = t.prone ? 1.1 : t.crouching ? 1.2 : t.sprinting ? 2.35 : 1.75;
    if (this.stepDistance < n) return;
    this.stepDistance %= n;
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
      n = this.world.groundAt(t.x, t.z, 127) > t.y + 3.5,
      o = !!i && n;
    (o &&
      !this.insidePyramid &&
      (this.sfx.pyramidEntrance(), (this.ambienceT = 1.5)),
      (this.insidePyramid = o));
    const a =
        this.currentPlanet === Ci.EARTH &&
        !!this.raidZone &&
        Math.hypot(t.x - this.raidZone.x, t.z - this.raidZone.z) <
          this.raidZone.radius,
      r =
        this.currentPlanet === Ci.EARTH &&
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
      ((this.combatUntil = performance.now() + LM), (l = "combat"));
    else if (this.currentPlanet === Ci.MOON) l = "moon";
    else if (o) l = "pyramid";
    else if (n) l = "cave";
    else {
      const c = Zr(this.world.seed, t.x, t.z);
      l =
        this.world.groundAt(t.x, t.z, 127) < Bs - 2
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
      (Z1(l) || this.pendingMoodT >= 2) && this.music.setMood(l),
      (this.ambienceT -= 0.5),
      this.ambienceT <= 0)
    ) {
      this.ambienceT = 5 + Math.random() * 11;
      const c = Zr(this.world.seed, t.x, t.z),
        d =
          (!n &&
          !Z1(l) &&
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
      d && !Z1(l) && this.sfx.ambience(d, Math.floor(Math.random() * 64));
    }
  }
  hostileNearby(e, t) {
    const i = t * t;
    for (const n of this.bots.list()) {
      if (!n.hostile || n.npc) continue;
      const o = n.pos.x - e.x,
        a = n.pos.z - e.z;
      if (o * o + a * a < i) return !0;
    }
    for (const n of this.vehicles.vehicles.values())
      if (
        !(n.ownerName !== Yo || n.planet !== this.currentPlanet || n.hp <= 0) &&
        n.pos.distanceToSquared(e) < i
      )
        return !0;
    return !1;
  }
  compassPoints = [];
  compassMarkers = [];
  compassRefreshAt = 0;
  updateCompass() {
    const e = this.navigationPosition(),
      t = performance.now();
    if (t >= this.compassRefreshAt) {
      this.compassRefreshAt = t + 100;
      const n = this.compassPoints;
      ((n.length = 0),
        this.homePos &&
          this.currentPlanet === Ci.EARTH &&
          n.push({ x: this.homePos.x, z: this.homePos.z, color: "#4aa8ff" }),
        this.lastDeathPos &&
          n.push({
            x: this.lastDeathPos.x,
            z: this.lastDeathPos.z,
            color: "#ff4a4a",
          }));
      const o = G.getWaypoint();
      o && !na(Y.nick) && n.push({ ...o, color: Uk });
      for (const a of pv)
        a.planet === this.currentPlanet && n.push({ ...a, label: a.username });
      for (const a of this.mapMarkers())
        (a.kind === "squad" || a.kind === "friend") &&
          n.push({ x: a.x, z: a.z, color: a.color, label: a.label });
      for (const a of G.questCompassMarkers()) n.push(a);
      if (this.front.active)
        for (const a of this.front.compassMarkers()) n.push(a);
      for (; this.compassMarkers.length < n.length;)
        this.compassMarkers.push({ bearing: 0, color: "" });
      this.compassMarkers.length = n.length;
    }
    const i = this.compassMarkers;
    for (let n = 0; n < i.length; n++) {
      const o = this.compassPoints[n];
      ((i[n].bearing = this.bearingTo(this.tmpV.set(o.x, e.y, o.z))),
        (i[n].color = o.color),
        (i[n].label = o.label));
    }
    G.setCompass(
      this.viewHeading(),
      `X ${e.x.toFixed(0)} Y ${e.y.toFixed(0)} Z ${e.z.toFixed(0)}`,
      i,
    );
  }
  maybeRenderMinimap() {
    const e = this.navigationPosition(),
      t = e.x - this.minimapLastX,
      i = e.z - this.minimapLastZ,
      n = t * t + i * i >= 1.5 * 1.5;
    this.minimapSkipTicks++;
    const o = this.input.mobile ? 0.35 : 0.12,
      a = Math.max(1, Math.round(1 / o));
    if (
      !n &&
      this.minimapLastZoom === Y.minimapZoom &&
      this.minimapSkipTicks < a
    )
      return;
    ((this.minimapLastZoom = Y.minimapZoom),
      (this.minimapSkipTicks = 0),
      (this.minimapLastX = e.x),
      (this.minimapLastZ = e.z));
    const r = this.airTerrain;
    G.renderMinimap(
      r
        ? (l, c) => r.colorAt(l, c) ?? 3162188
        : (l, c, h) => this.world.surfaceColor(l, c, h),
      { x: e.x, z: e.z },
      this.mapMarkers(),
    );
  }
  debugLines() {
    const e = Y.debug,
      t = [];
    if (e.fps) {
      const i = this.fpsVal > 0 ? (1e3 / this.fpsVal).toFixed(1) : "--";
      t.push(`FPS ${this.fpsVal}  (${i} ms)`);
    }
    if (e.position) {
      const i = this.player.pos,
        n = ((((-this.viewHeading() * 180) / Math.PI) % 360) + 360) % 360;
      (t.push(`XYZ ${i.x.toFixed(2)} ${i.y.toFixed(2)} ${i.z.toFixed(2)}`),
        t.push(
          `chunk ${Math.floor(i.x / ke)} ${Math.floor(i.z / ke)}  bearing ${n.toFixed(0)}°`,
        ));
    }
    if (e.render) {
      const i = this.renderer.info;
      (t.push(
        `draws ${i.render.calls}  tris ${(i.render.triangles / 1e3).toFixed(1)}k  progs ${i.programs?.length ?? 0}`,
      ),
        t.push(`geom ${i.memory.geometries}  tex ${i.memory.textures}`));
    }
    if (
      (e.chunks &&
        t.push(
          `chunks ${this.world.chunks.size}  dirty ${this.world.dirtyChunkCount()}  range ${Bn().renderDist}`,
        ),
      e.entities &&
        (t.push(
          `players ${this.remotes.list().length}  bots ${this.bots.list().length}  animals ${this.animals.count}`,
        ),
        t.push(
          `vehicles ${this.vehicles.vehicles.size}  particles ${Bn().particles.toFixed(2)}x`,
        )),
      e.network &&
        t.push(
          `ping ${this.lastRtt} ms  ${this.net.connected ? "online" : "offline"}`,
        ),
      e.memory)
    ) {
      const i = performance.memory;
      t.push(
        i
          ? `heap ${(i.usedJSHeapSize / 1048576).toFixed(0)} / ${(i.jsHeapSizeLimit / 1048576).toFixed(0)} MB`
          : "heap n/a in this browser",
      );
    }
    return t;
  }
  updatePropertyNotice() {
    if (!this.claimsUI) return;
    if (!this.player.alive || G.anyOpen() || this.vehicles.mine) {
      this.claimsUI.showProperty("");
      return;
    }
    if (performance.now() < this.propertyUpdateAt) return;
    ((this.propertyUpdateAt = performance.now() + 200), wi());
    const e = this.player.eyePos(this.tmpV),
      t = this.player.lookDir(this.tmpV2),
      i = this.vehicles.rayHit(e, t, 24),
      n = i
        ? this.vehicles.vehicles.get(i.id)
        : this.vehicles.nearestFree(this.player.pos, 6);
    if (n && this.front.active && n.army) {
      this.claimsUI.showProperty("");
      return;
    }
    if (n) {
      const r = n.ownerName || I("Unclaimed", "Без владельца"),
        l = !n.ownerName || !!this.claimsUI.ownerAllows(n.ownerName);
      this.claimsUI
        .showProperty(`${to(n.type)} · ${I("Owner", "Владелец")}: ${r}
${l ? I("Access granted", "Доступ разрешён") : I("Owner and their friends only", "Доступ только владельцу и его друзьям")}`);
      return;
    }
    const o = this.world.raycast(e, t, 6);
    if (o?.block === v.OWNERSHIP_TOTEM) {
      const r = this.claimsUI.index.totem(this.currentPlanet, o.bx, o.by, o.bz);
      if (r) {
        this.claimsUI
          .showProperty(`${I("Ownership totem", "Тотем владения")} · ${r.owner}
${r.owner === Y.nick ? I("Use — territory menu", "Использовать — меню привата") : I("Only the owner can remove it", "Снять может только владелец")}`);
        return;
      }
    }
    const a = this.worldSites
      .list()
      .find(
        (r) =>
          r.kind >= 1 &&
          r.kind <= 4 &&
          Math.hypot(r.x - this.player.pos.x, r.z - this.player.pos.z) <=
            r.radius,
      );
    if (a) {
      const r = this.baseCaptures.get(a.id);
      this.claimsUI.showProperty(`${sa(a.name)}
${I("Owner", "Владелец")}: ${a.owner || I("Unclaimed", "Не захвачена")}${r ? ` · ${I("Capture", "Захват")}: ${r.attacker} · ${Math.max(0, Math.ceil((r.until - Date.now()) / 1e3))}${I("s", "с")}` : ""}`);
      return;
    }
    this.claimsUI.showProperty("");
  }
  baseFlagHint(e) {
    const t =
        this.worldSites.nearestCommand(this.player.pos, 5.5) ??
        this.worldSites.nearestFlag(this.player.pos, 6),
      i = e ? z("useAction") : dr(Y.binds.use);
    if (!t) {
      const l = this.worldSites.nearestVillage(this.player.pos, 5.5);
      return l
        ? I(
            `${i} — town hall board of ${l.name}`,
            `${i} — табло ратуши «${l.name}»: задачи, склад, торговля`,
          )
        : null;
    }
    if (t.state !== 2 || !t.owner)
      return z(t.state === 1 ? "baseFlagReady" : "baseFlagNeutral", {
        name: sa(t.name),
        action: i,
      });
    const n = this.baseCaptures.get(t.id);
    wi();
    const o = t.owner === Y.nick || !!this.claimsUI?.ownerAllows(t.owner);
    if (n) {
      const l = Math.max(0, Math.ceil((n.until - Date.now()) / 1e3)),
        c = `${Math.floor(l / 60)}:${String(l % 60).padStart(2, "0")}`;
      return `${sa(t.name)} · ${I("Owner", "Владелец")}: ${t.owner} · ${n.attacker} ${c} · ${t.owner === Y.nick ? I(`${i} — cancel capture at flag`, `${i} — отменить захват у флага`) : I("Capture in progress", "Идёт перезахват")}`;
    }
    if (!o)
      return `${sa(t.name)} · ${I("Owner", "Владелец")}: ${t.owner} · ${i} — ${I("capture", "захватить")} (${Math.ceil(this.baseCaptureSeconds / 60)} ${I("min", "мин")})`;
    if (t.supplyReady)
      return z("baseFlagSupplyReady", { name: sa(t.name), action: i });
    const a = Math.max(0, t.supplySeconds),
      r = `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
    return z("baseFlagSupplyWait", { name: sa(t.name), time: r });
  }
  updateCropProgress() {
    if (
      this.currentPlanet !== Ci.EARTH ||
      !this.world ||
      !this.camera ||
      !this.net.connected ||
      !this.player.alive ||
      G.anyOpen()
    ) {
      (G.setCropProgress(null), (this.cropQueryKey = ""));
      return;
    }
    const e = performance.now(),
      t = this.player.eyePos(this.tmpV),
      i = this.camera.getWorldDirection(this.tmpV2),
      n = this.world.raycast(t, i, 5.5);
    if (!n || (!lh(n.block) && !H2(n.block))) {
      (G.setCropProgress(null), (this.cropQueryKey = ""));
      return;
    }
    const o = `${n.bx},${n.by},${n.bz}`;
    (o !== this.cropQueryKey || e >= this.cropQueryTimer) &&
      ((this.cropQueryKey = o),
      (this.cropQueryTimer = e + 300),
      this.net.send(new lt(ue.C_CROP_QUERY).i32(n.bx).u8(n.by).i32(n.bz)));
    const a = H2(n.block),
      r = a ? 0 : xZ(n.block),
      l = this.cropProgress.get(o),
      c = l?.stage === r ? l.stage : r,
      h =
        l && l.stage === r
          ? Math.min(
              1,
              l.pct +
                (Math.max(0, e - l.at) / Math.max(1, l.stageMs)) * l.speed,
            )
          : 0,
      d = a ? h * 100 : r >= 2 ? 100 : ((c + h) / 2) * 100,
      u = jh(le[n.block]) ?? Li(n.block) ?? "";
    G.setCropProgress({
      label:
        r >= 2
          ? z("cropReady", { name: u })
          : z("cropProgress", { name: u, pct: Math.floor(d) }),
      pct: d,
      boosted: !!l?.boosted,
      details: a
        ? h >= 1
          ? I(
              "Waiting for space above the sapling",
              "Ожидание свободного места над саженцем",
            )
          : `${I("Growth", "Рост")} · ${Math.ceil(((1 - h) * (l?.stageMs ?? 6e4)) / 1e3)} ${I("s", "с")}`
        : z("cropEnvironment", {
            light: l?.light ?? "—",
            speed: l ? l.speed.toFixed(2).replace(/\.00$/, "") : "—",
          }),
      lowLight: !a && !!l && l.light < 9,
    });
  }
  updateHud(e) {
    const t = this.input.mobile;
    (this.player.pos,
      G.setDebugLines(this.debugLines()),
      G.renderEquipmentStatus(
        e ? 0 : this.inventory.held(),
        this.weapons.loadedAmmo(),
      ));
    const i = this.vehicles.hudInfo(this.input.mobile),
      n = this.vehicles.mine;
    if (i && n?.type === L.DRONE && this.front.active) {
      this.droneFlight?.id !== n.id &&
        (this.droneFlight = { id: n.id, since: performance.now() });
      const h = Math.max(
        0,
        b_.battery - (performance.now() - this.droneFlight.since) / 1e3,
      );
      ((i.name = `${i.name} · ${Math.ceil(h)} ${I("s", "с")}`),
        (i.charge = h / b_.battery));
    }
    if (
      (G.setVehicleHud(i),
      this.crewHud.update(
        this.vehicles,
        this.running &&
          this.player.alive &&
          !this.remote.open &&
          !this.input.uiOpen,
        (h) => (h === this.myId ? Y.nick : this.remotes.getName(h)),
      ),
      this.updateCropProgress(),
      e)
    )
      G.setAmmo("", "");
    else {
      const h = this.inventory.held();
      if (Ko(h)) {
        const d = W0(h);
        G.setAmmo(
          Li(h),
          `${d.width}×${d.depth}×${d.height} · ${z(t ? "useAction" : "rmbAction")} — ${I("Build", "Построить")}`,
        );
      } else if (h === w.COMPUTER)
        G.setAmmo(
          Li(h),
          `${z(t ? "useAction" : "rmbAction")} — ${I("Place computer", "установить компьютер")}`,
        );
      else if (Ss[h])
        G.setAmmo(
          this.weapons.weaponName(),
          this.weapons.ammoText(),
          this.weapons.weaponColor(),
        );
      else if (h > 0 && h < 256)
        G.setAmmo(
          jh(le[h]) ?? "",
          `${this.inventory.countOf(h)}${this.front.active && w_(h) ? (h === v.MINE_AT ? I(" · enemy armour only", " · только техника врага") : I(" · enemy soldiers only", " · только солдаты врага")) : h === v.MINE_AP ? I(" · detonates on release", " · срабатывает при сходе") : h === v.MINE_AT ? I(" · vehicle pressure", " · срабатывает от техники") : ""}`,
        );
      else if (h === 0)
        G.setAmmo(z("handLabel"), z(t ? "handTouchHint" : "handHint"));
      else if (O0(h))
        G.setAmmo(
          Li(h),
          `${z(t ? "useAction" : "rmbAction")} — ${I("Equip armor", "Надеть броню")}`,
        );
      else if (h === w.MEDKIT || h === w.MILITARY_MEDKIT) {
        const d =
          this.medkitChannel > 0
            ? z("bandagingEllipsis")
            : (h === w.MILITARY_MEDKIT
                  ? this.militaryMedkitCd
                  : this.medkitCd) > 0
              ? z("reloadingSeconds", {
                  sec: Math.ceil(
                    h === w.MILITARY_MEDKIT
                      ? this.militaryMedkitCd
                      : this.medkitCd,
                  ),
                })
              : z("medkitHealHint", {
                  action: z(t ? "useAction" : "rmbAction"),
                  heal: h === w.MILITARY_MEDKIT ? this.player.maxHp : my,
                });
        G.setAmmo(Li(h) ?? z("medkitLabel"), d);
      } else if (h === w.BANDAGE) {
        const d =
          this.bandageChannel > 0
            ? z("bandagingEllipsis")
            : this.bandageCd > 0
              ? z("reloadingSeconds", { sec: Math.ceil(this.bandageCd) })
              : z("bandageHealHint", {
                  action: z(t ? "useAction" : "rmbAction"),
                  heal: gy,
                });
        G.setAmmo(z("bandageLabel"), d);
      } else if (CN(h)) G.setAmmo(Li(h), String(this.inventory.countOf(h)));
      else if (or(h) || h === w.DETONATOR) {
        const d = [...(this.c4?.charges.values() ?? [])].filter(
          (p) => p.owner === this.sessionName,
        ).length;
        wi();
        const u = t
          ? I("Use / Fire", "Использовать / Огонь")
          : I("LMB / RMB / F", "ЛКМ / ПКМ / F");
        G.setAmmo(
          Li(h),
          `${u} · ${or(h) ? (t ? I("Fire — throw · Use — place", "Огонь — бросить · Использовать — поставить") : I("LMB throw · RMB place", "ЛКМ бросить · ПКМ поставить")) : I("Start timers", "Запустить таймеры")} · ${d}/32`,
        );
        const f = [...(this.c4?.charges.values() ?? [])].filter(
          (p) => p.owner === this.sessionName && p.remaining >= 0,
        );
        f.length &&
          G.setAmmo(
            Li(h),
            `${I("DETONATION", "ДЕТОНАЦИЯ")} · ${Math.min(...f.map((p) => p.remaining)).toFixed(1)} s · ${f.length} ${I("charges", "зарядов")}`,
          );
      } else if (h === w.EGG)
        G.setAmmo(
          Li(h),
          `${z(t ? "useAction" : "rmbAction")} · ${I("Throw · 1 HP · 30% chick", "Бросить · 1 HP · 30% цыплёнок")}`,
        );
      else if (h === w.FERTILIZER)
        G.setAmmo(
          Li(h),
          z("fertilizerHint", { action: z(t ? "useAction" : "rmbAction") }),
        );
      else if (su[h] && sy[h])
        G.setAmmo(
          Li(h),
          z("berryHint", {
            action: z(t ? "useAction" : "rmbAction"),
            heal: su[h],
          }),
        );
      else if (su[h])
        G.setAmmo(
          Li(h),
          z("foodEatHint", {
            action: z(t ? "useAction" : "rmbAction"),
            heal: su[h],
          }),
        );
      else if (h === w.WHEAT)
        G.setAmmo(
          Li(h),
          z("wheatBreedHint", { action: z(t ? "useAction" : "rmbAction") }),
        );
      else if (sy[h])
        G.setAmmo(
          Li(h),
          z("wheatSeedsHint", { action: z(t ? "useAction" : "rmbAction") }),
        );
      else if (Tl[h] || wd[h]) G.setAmmo(Li(h), this.toolModes.hint(h, t));
      else if (h === w.COMBAT_KNIFE)
        G.setAmmo(
          this.weapons.weaponName(),
          z(t ? "knifeTouchHint" : "knifeHint"),
          this.weapons.weaponColor(),
        );
      else if (h === w.BUCKET)
        G.setAmmo(
          Li(h),
          z("bucketFillHint", { action: z(t ? "useAction" : "rmbAction") }),
        );
      else if (h === w.WATER_BUCKET || h === w.LAVA_BUCKET)
        G.setAmmo(
          Li(h),
          z("bucketPourHint", { action: z(t ? "useAction" : "rmbAction") }),
        );
      else if (h === w.WELDER)
        G.setAmmo(
          z("hammerLabel"),
          I(
            t
              ? "Fire: weld · Use: welder menu"
              : "LMB: weld · RMB: welder menu",
            t
              ? "Огонь: варить · Использовать: меню сварщика"
              : "ЛКМ: варить · ПКМ: меню сварщика",
          ),
        );
      else if (h === w.FLASHLIGHT)
        G.setAmmo(
          Li(h),
          z("flashlightHint", {
            key: dr(Y.binds.flashlight) || "—",
            state: Y.lightOn[0] ? z("flashlightOn") : z("flashlightOff"),
          }),
        );
      else if (h === w.FISHING_ROD) {
        const d = z(t ? "useAction" : "rmbAction");
        G.setAmmo(
          Li(h),
          this.fishing.hasLine(this.myId)
            ? z("rodWaitHint", { action: d })
            : z("rodCastHint", { action: d }),
        );
      } else
        G.setAmmo(
          Li(h) ?? "",
          h === w.AXE
            ? z(t ? "axeTouchHint" : "axeHint")
            : h === w.MOBILE_REMOTE
              ? `${z(t ? "useAction" : "rmbAction")} — ${I("command station · 8,000 blocks", "станция · 8 000 блоков")}`
              : z(t ? "placeTouchHint" : "placeHint"),
        );
    }
    const o =
        !e && !G.anyOpen()
          ? this.casino?.target(
              this.player.eyePos(this.tmpV),
              this.player.lookDir(this.tmpV2),
            )
          : null,
      a =
        !e && !G.anyOpen()
          ? this.computer?.target(
              this.player.eyePos(this.tmpV),
              this.player.lookDir(this.tmpV2),
            )
          : null,
      r =
        !e && !G.anyOpen()
          ? this.casino?.blackjack.target(
              this.player.eyePos(this.tmpV),
              this.player.lookDir(this.tmpV2),
            )
          : null,
      l = performance.now() - this.input.lockRequestedAt < 1100,
      c =
        !this.input.mobile &&
        !this.input.locked &&
        !G.anyOpen() &&
        !this.loadingShown &&
        this.player.alive &&
        !l;
    if ((this.clickToPlay.set(c), c)) G.setHint("");
    else if (a)
      G.setHint(
        `${I("Computer", "Компьютер")} · ${z(t ? "useAction" : "rmbAction")} — ${this.inventory.held() === w.WELDER ? I("Pack up", "упаковать") : I("Open browser", "открыть браузер")}`,
      );
    else if (r)
      G.setHint(
        `${r.kind === "blackjack" ? "BLACKJACK · " : ""}${z(t ? "useAction" : "rmbAction")} — ${I("Sit down", "сесть")}`,
      );
    else if (o)
      G.setHint(
        `${o.game.title} · ${z(t ? "useAction" : "rmbAction")} — ${this.inventory.held() === w.WELDER ? I("Pack up", "упаковать") : I("Play", "играть")}`,
      );
    else if (!e && Ko(this.inventory.held()))
      G.setHint(
        this.blueprintPreview?.message ||
          I(
            "Aim at the ground to site the building",
            "Наведите на землю, чтобы разместить постройку",
          ),
      );
    else if (this.mining)
      G.setHint(
        z("miningPercent", {
          pct: Math.min(
            100,
            Math.floor((this.mining.t / this.mining.need) * 100),
          ),
        }),
        !0,
      );
    else if (this.drops.blockedNearby) G.setHint(z("inventoryFullDrops"));
    else if (this.mounted)
      G.setHint(z(t ? "camelDismountTouchHint" : "camelDismountHint"));
    else if (!e && this.animals.nearestRideable(this.player.pos, 4.2))
      G.setHint(z(t ? "camelRideTouchHint" : "camelRideHint"));
    else if (
      !e &&
      this.spawnNotice.kioskAt(this.player.pos, this.currentPlanet)
    ) {
      const h = t ? z("useAction") : dr(Y.binds.use);
      G.setHint(
        I(
          `${h} — teleport to the wild, where you can build`,
          `${h} — телепорт туда, где можно строить`,
        ),
      );
    } else if (!e && this.baseFlagHint(t)) G.setHint(this.baseFlagHint(t));
    else if (
      !e &&
      this.backpacks.raycastHit(
        this.player.eyePos(this.tmpV),
        this.camera.getWorldDirection(this.tmpV2),
        5.5,
      )
    )
      G.setHint(z(t ? "backpackTouchHint" : "backpackHint"));
    else if (
      (!e || this.vehicles.passengerCanRepair()) &&
      this.inventory.held() === w.WELDER
    ) {
      const h = this.player.eyePos(this.tmpV),
        d = this.camera.getWorldDirection(this.tmpV2),
        u = this.vehicles.rayHit(h, d, 10, this.vehicles.passengerCanRepair());
      if (u) {
        const f = this.vehicles.vehicles.get(u.id);
        if (f)
          if (f.ownerName === Yo) G.setHint(z("raidVehicleNoRepair"));
          else if (f.hp >= f.maxHp)
            G.setHint(
              z("vehicleFullHp", {
                vehicle: to(f.type),
                hp: f.hp,
                maxHp: f.maxHp,
              }),
            );
          else {
            const p = Am(f.type),
              m = Ov(f.maxHp),
              g = Math.ceil((f.maxHp - f.hp) / m),
              y = p * g,
              b = !this.inventory.creative && G.getBalance() < p;
            G.setHint(
              b
                ? z("repairNeedMoney", { cost: p, balance: G.getBalance() })
                : z("repairInfo", {
                    cost: p,
                    heal: m,
                    clicksLeft: g,
                    totalLeft: y,
                    hp: f.hp,
                    maxHp: f.maxHp,
                  }),
            );
          }
        else G.setHint("");
        f &&
          f.ownerName !== Yo &&
          (wi(),
          G.setHint(
            `${G.currentHint()} · ${t ? I("Use", "Кнопка «Использовать»") : I("RMB", "ПКМ")}: ${I("welder menu — armour, repair, packing", "меню сварщика — броня, ремонт, упаковка")}`,
          ));
      } else G.setHint(z("aimHammerAtVehicle"));
    } else if (!e && this.player.seated)
      G.setHint(
        t
          ? z("chairExitTouchHint")
          : z("chairExitHint", { action: dr(Y.binds.use) }),
      );
    else if (!e && this.vehicles.nearestFree(this.player.pos, 5))
      G.setHint(t ? "" : z("enterVehicleHint", { action: dr(Y.binds.use) }));
    else if (this.player.flying && !e)
      G.setHint(z(t ? "flyTouchHint" : "flyHint"));
    else if (e) G.setHint("");
    else {
      const h = this.world.raycast(
        this.player.eyePos(this.tmpV),
        this.camera.getWorldDirection(this.tmpV2),
        5.5,
      );
      h && _Y(h.block)
        ? G.setHint(
            t
              ? z("chairSitTouchHint")
              : z("chairSitHint", { action: dr(Y.binds.use) }),
          )
        : G.setHint("");
    }
  }
  aimPointVisible(e, t, i, n, o) {
    const a = this.tmpAimDir.set(t - e.x, i - e.y, n - e.z),
      r = a.length() - o;
    if (r <= 0) return !0;
    (a.normalize(), this.tmpAimLosOrigin.copy(e));
    let l = 0;
    for (let c = 0; c < 12 && l < r; c++) {
      const h = this.world.raycast(this.tmpAimLosOrigin, a, r - l);
      if (!h || l + h.dist >= r) return !0;
      if (le[h.block]?.solid) return !1;
      const d = h.dist + 0.05;
      ((l += d), this.tmpAimLosOrigin.addScaledVector(a, d));
    }
    return l >= r;
  }
  vehicleIsEnemy(e) {
    if (this.vehicles.hostile(e)) return !0;
    if (this.front.active || e.driver === -1 || e.driver === this.myId)
      return !1;
    const t = this.remotes.getName(e.driver);
    return !!t && !this.friends.has(t) && !Br(t);
  }
  aimAssist = new foe();
  aimPool = [];
  aimList = [];
  aimHulls = new Map();
  aimFrame = {
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
  };
  aimCandidate(e, t, i, n, o, a) {
    const r = this.aimList.length,
      l = (this.aimPool[r] ??= {
        key: e,
        x: t,
        y: i,
        z: n,
        radius: o,
        vehicle: a,
      });
    ((l.key = e),
      (l.x = t),
      (l.y = i),
      (l.z = n),
      (l.radius = o),
      (l.vehicle = a),
      this.aimList.push(l));
  }
  aimHull(e) {
    let t = this.aimHulls.get(e);
    if (!t) {
      const i = new zs();
      for (const n of lo[e] ?? []) i.union(n);
      (i.isEmpty() && i.set(new k(-1, 0, -1), new k(1, 2, 1)),
        (t = {
          x: (i.min.x + i.max.x) / 2,
          y: (i.min.y + i.max.y) / 2,
          z: (i.min.z + i.max.z) / 2,
          r: Oe(Math.min(i.max.x - i.min.x, i.max.z - i.min.z) / 2, 1, 3.5),
        }),
        this.aimHulls.set(e, t));
    }
    return t;
  }
  touchAimAssist(e, t) {
    const i = this.inventory.held(),
      n = t && this.vehicles.aimsWithCamera(),
      o = n && this.vehicles.mineSeat === 0;
    if (!Y.aimAssist || (t ? !n : !Ss[i]) || (n && !o && !Ss[i]))
      return (this.aimAssist.reset(), null);
    const a = this.aimFrame,
      r = this.tmpAimEye;
    let l;
    if (n) {
      const f = this.vehicles.aimRay();
      if (!f) return (this.aimAssist.reset(), null);
      (r.copy(f.pos),
        (a.yaw = Math.atan2(-f.dir.x, -f.dir.z)),
        (a.pitch = Math.asin(Oe(f.dir.y, -1, 1))),
        (a.zoom = o ? this.vehicles.gunZoom : 1),
        (l = 0.0022 / a.zoom),
        (a.ads = o && a.zoom > 1.05));
    } else
      (this.player.eyePos(r),
        (a.yaw = this.player.yaw),
        (a.pitch = this.player.pitch),
        (a.zoom = Oe(1 / Math.max(0.05, this.sensScale), 1, 8)),
        (l = 0.0022 * Y.sensitivity * this.sensScale),
        (a.ads = this.input.mouseR && !!Ss[i]));
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
      (a.strength = Y.aimAssistStrength),
      (a.preferVehicles =
        (!!o && this.vehicles.mine?.type === L.TANK) ||
        i === w.RPG ||
        i === w.GRENADE_LAUNCHER));
    const c = this.aimList;
    c.length = 0;
    const h = Y.nick,
      d = this.front.active && !!this.front.team;
    for (const f of this.remotes.list())
      f.name === h ||
        this.friends.has(f.name) ||
        Br(f.name) ||
        this.remotes.disguiseOf(f.id) ||
        (d && !this.front.isEnemyPlayer(f.id)) ||
        this.aimCandidate(
          `p${f.id}`,
          f.pos.x,
          f.pos.y + 1.2,
          f.pos.z,
          0.45,
          !1,
        );
    for (const f of this.bots.list())
      if (!f.npc) {
        if (d) {
          if (this.front.botTeams.get(f.id) !== pc(this.front.team)) continue;
        } else if (
          !f.hostile &&
          (f.ownerName === h || this.friends.has(f.ownerName))
        )
          continue;
        this.aimCandidate(
          `b${f.id}`,
          f.pos.x,
          f.pos.y + 1.2,
          f.pos.z,
          0.45,
          !1,
        );
      }
    for (const f of this.vehicles.rendered()) {
      if (!this.vehicleIsEnemy(f)) continue;
      const p = this.aimHull(f.type),
        m = this.tmpAimCandidate
          .set(p.x, p.y, p.z)
          .applyQuaternion(f.quat)
          .add(f.pos);
      this.aimCandidate(`v${f.id}`, m.x, m.y, m.z, p.r, !0);
    }
    if (!c.length) return (this.aimAssist.reset(), null);
    const u = this.aimAssist.update(a, c, (f) =>
      this.aimPointVisible(r, f.x, f.y, f.z, f.vehicle ? f.radius + 1.5 : 0.35),
    );
    return (
      u.friction < 1 &&
        ((this.input.mdx *= u.friction), (this.input.mdy *= u.friction)),
      n &&
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
      ((this.hitboxGroup = new re()), this.scene.add(this.hitboxGroup)),
      this.hitboxMat || (this.hitboxMat = new Zo({ color: 3669899 })),
      this.hitboxBoxGeo || (this.hitboxBoxGeo = new tv(new kt(1, 1, 1))));
    const e = this.hitboxGroup;
    e.clear();
    const t = (o, a, r, l, c, h, d) => {
        const u = new kl(this.hitboxBoxGeo, this.hitboxMat);
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
          ((r = new wG(new ws(o.r, 12, 8))), this.hitboxSphereGeos.set(a, r));
        const l = new kl(r, this.hitboxMat);
        (l.position.copy(o.center), e.add(l));
      } else {
        const a = o.box.getSize(this.tmpV),
          r = a.x,
          l = a.y,
          c = a.z,
          h = o.box.getCenter(this.tmpV).applyQuaternion(o.quat).add(o.pos);
        t(h.x, h.y, h.z, r, l, c, o.quat);
      }
    const n = [
      ...this.remotes.hitboxes(),
      ...this.bots.hitboxes(),
      ...this.animals.hitboxes(),
    ];
    for (const o of n)
      Math.hypot(o.x - i.x, o.z - i.z) > 50 ||
        t(o.x, o.y + o.h / 2, o.z, o.hw * 2, o.h, (o.hz ?? o.hw) * 2, o.quat);
  }
  updateDroneSignalAndRange() {
    const e = this.vehicles.mine;
    if (!e || e.type !== L.DRONE || this.remote.open) {
      G.setDroneSignal(0);
      return;
    }
    const t = Math.max(48, (this.world.renderDist - 1) * 16),
      i = e.pos.distanceTo(this.player.pos),
      n = t * 0.8;
    if (i >= t) {
      (G.setDroneSignal(1), this.vehicles.detonateDrone());
      return;
    }
    G.setDroneSignal(i <= n ? 0 : (i - n) / (t - n));
  }
  seatRider(e, t) {
    e === this.myId
      ? ((this.player.mountRise = t ? Ix : 0), (this.player.mountSpeed = _W))
      : this.remotes.setMounted(e, t ? Ix : 0);
  }
  requestChairExit() {
    !this.player.seated ||
      this.chairExitPending ||
      ((this.chairExitPending = !0), this.net.send(new lt(ue.C_SEAT).u8(1)));
  }
  get mounted() {
    return this.player.mountRise > 0;
  }
  tryInteract(e, t) {
    if (this.computer?.interact(e, t) || this.casino?.interact(e, t)) return !0;
    if (
      this.inventory.held() === w.WELDER &&
      (!this.vehicles.mine || this.vehicles.passengerCanRepair())
    ) {
      const r = this.vehicles.rayHit(
        e,
        t,
        10,
        this.vehicles.passengerCanRepair(),
      );
      if (r) return (this.openWelderMenu(r.id), !0);
    }
    const i = this.backpacks.raycastHit(e, t, 5.5);
    if (i)
      return (
        this.net.send(new lt(ue.C_BACKPACK).u8(0).u16(i.id).u16(0).u16(0)),
        this.weapons.swing(),
        !0
      );
    this.sendPlayerState();
    const n = this.world.raycast(e, t, 5.5),
      o = n && this.inventory.held() === w.FERTILIZER && lh(n.block),
      a =
        n &&
        n.block === v.PUMPKIN &&
        (this.inventory.held() === v.TORCH ||
          this.inventory.held() === v.CANDLE);
    if (
      n &&
      n.block === v.LED_SCREEN &&
      this.currentPlanet === Ci.EARTH &&
      this.screens
    ) {
      const r = this.screens.at(n.bx, n.by, n.bz);
      if (r) {
        if (
          r.group.cells.some(
            (d) =>
              this.claimsUI &&
              !this.claimsUI.allowed(this.currentPlanet, d.x, d.z),
          )
        )
          return (
            G.addChat(
              2,
              I(
                "Protected territory · access denied.",
                "Приват территории · нет доступа.",
              ),
            ),
            !0
          );
        const { bx: l, by: c, bz: h } = n;
        return (
          this.input.unlock(),
          Xne(
            r.content,
            r.group,
            (d) =>
              this.net.send(
                new lt(ue.C_SCREEN).i32(l).u8(c).i32(h).str(JSON.stringify(d)),
              ),
            () => G.onResume(),
          ),
          this.weapons.swing(),
          !0
        );
      }
    }
    if (n && (le[n.block]?.interactive || o || a))
      return (
        this.net.send(new lt(ue.C_USE_BLOCK).i32(n.bx).u8(n.by).i32(n.bz)),
        this.weapons.swing(),
        n.block === v.BED &&
          ((this.homePos = new k(n.bx + 0.5, n.by, n.bz + 0.5)),
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
      let r = null;
      const l = Math.floor(this.player.pos.x),
        c = Math.floor(this.player.pos.y),
        h = Math.floor(this.player.pos.z);
      for (let d = l - 4; d <= l + 4; d++)
        for (let u = Math.max(0, c - 1); u <= Math.min(127, c + 3); u++)
          for (let f = h - 4; f <= h + 4; f++) {
            if (!Tx(this.world.getBlock(d, u, f))) continue;
            const p = this.tmpAimCandidate
                .set(d + 0.5, u + 0.5, f + 0.5)
                .sub(e),
              m = p.length();
            if (m > 4.5 || m < 0.01 || p.dot(t) / m < 0.978) continue;
            const g = this.tmpAimBestDir.copy(p).divideScalar(m),
              y = this.world.raycast(e, g, m + 0.25);
            !y ||
              y.bx !== d ||
              y.by !== u ||
              y.bz !== f ||
              ((!r || m < r.dist) && (r = { x: d, y: u, z: f, dist: m }));
          }
      if (r)
        return (
          this.net.send(new lt(ue.C_USE_BLOCK).i32(r.x).u8(r.y).i32(r.z)),
          this.weapons.swing(),
          !0
        );
    }
    return !1;
  }
  knifeVisuals() {
    return (this.knives ??= new Oae(this.scene, this.world, {
      impact: (e, t) => {
        const i = e.distanceTo(this.player.pos);
        if (t === Wy.HIT) {
          (this.effects.bloodHit(e), i < 40 && this.sfx.knifeHit(i));
          return;
        }
        const n = this.world.getBlock(
            Math.floor(e.x),
            Math.floor(e.y - 0.05),
            Math.floor(e.z),
          ),
          o = Ha(n),
          a = o !== "wood" && o !== "dirt" && o !== "leaves" && o !== "sand";
        (this.effects.bulletImpact(
          e,
          t === Wy.BROKEN ? 16765562 : a ? 14212578 : 9071173,
        ),
          i < 40 && this.sfx.knifeLand(a || t === Wy.BROKEN, i));
      },
    }));
  }
  handleKnife(e, t, i, n) {
    if (
      ((this.knifeThrowCd = Math.max(0, this.knifeThrowCd - e)),
      this.knifeThrowAt > 0)
    ) {
      t !== w.COMBAT_KNIFE || this.vehicles.driving() || !this.player.alive
        ? ((this.knifeThrowAt = 0), this.weapons.knifeCancel())
        : performance.now() >= this.knifeThrowAt &&
          ((this.knifeThrowAt = 0), this.releaseKnife(i, n));
      return;
    }
    if (
      this.input.clickR &&
      this.knifeThrowCd <= 0 &&
      !this.vehicles.driving() &&
      !this.front.arms
    ) {
      ((this.knifeThrowAt = performance.now() + _C * 1e3),
        this.weapons.knifeWindup(_C));
      return;
    }
    if (this.input.mouseL && this.meleeCd <= 0) {
      const o = Aae,
        a = this.remotes.raycastHit(i, n, o),
        r = this.bots.raycastHit(i, n, a ? Math.min(a.dist, o) : o),
        l = this.animals.raycastHit(i, n, Math.min(a?.dist ?? o, r?.dist ?? o));
      if (
        !(l || r || a
          ? this.world.raycast(
              i,
              n,
              Math.min(l?.dist ?? o, r?.dist ?? o, a?.dist ?? o),
            )
          : null) &&
        (l || r || a)
      ) {
        const h = Math.round(Eae * Jt.knifeDamage());
        (l
          ? (this.weapons.hooks.onHitAnimal(l.id, h),
            this.effects.bloodHit(l.point))
          : r
            ? (this.weapons.hooks.onHitBot(r.id, h, t, r.region),
              this.effects.bloodHit(r.point))
            : a &&
              (this.weapons.hooks.onHitPlayer(a.id, h, t, a.region),
              this.effects.bloodHit(a.point)),
          Jt.add("fight", 1),
          Jt.stat("punches", 1),
          this.sfx.knifeHit(),
          this.weapons.knifeStrike(),
          this.weapons.hooks.wearHeld(Tae),
          (this.meleeCd = xC * Jt.knifeCooldown()));
        return;
      }
      if (
        this.input.clickL &&
        !this.world.raycast(i, n, 5.5) &&
        !this.vehicles.rayHit(i, n, o)
      ) {
        (this.weapons.knifeStrike(), (this.meleeCd = xC * Jt.knifeCooldown()));
        return;
      }
    }
    this.weapons.knifeBusy || this.handleMeleeAndMining(e, t, 0, i, n);
  }
  releaseKnife(e, t) {
    const i = this.inventory.sel;
    if (this.inventory.hotbar[i]?.id !== w.COMBAT_KNIFE) {
      this.weapons.knifeCancel();
      return;
    }
    const n = e.clone().addScaledVector(t, 0.35);
    ((n.y -= 0.12),
      (this.knifeToken = (this.knifeToken + 1) & 65535),
      this.net.send(
        new lt(ue.C_KNIFE_THROW)
          .u16(this.knifeToken)
          .u8(i)
          .f32(n.x)
          .f32(n.y)
          .f32(n.z)
          .f32(t.x)
          .f32(t.y)
          .f32(t.z),
      ),
      this.knifeVisuals().predict(
        this.myId,
        this.knifeToken,
        this.currentPlanet,
        n,
        t,
      ),
      this.weapons.knifeRelease(),
      (this.knifeThrowCd = Rae),
      this.inventory.creative || this.inventory.removeFromSlot("h", i, 1),
      this.syncHeld(),
      G.renderHotbar());
  }
  requestRandomTeleport() {
    !this.running ||
      !this.player.alive ||
      (this.sfx.uiTick(!0), this.net.send(new lt(ue.C_CHAT).str("/rtp")));
  }
  trySiteAction() {
    const e =
      this.worldSites.nearestCommand(this.player.pos, 5.5) ??
      this.worldSites.nearestFlag(this.player.pos, 6) ??
      this.worldSites.nearestVillage(this.player.pos, 5.5);
    return e ? (this.net.send(new lt(ue.C_SITE_ACTION).str(e.id)), !0) : !1;
  }
  canSowHeld(e, t, i) {
    const n = sy[e];
    if (!n) return !1;
    const o = this.world.raycast(t, i, 5.5);
    return (
      !!o &&
      o.ny === 1 &&
      _x(n)(o.block) &&
      this.world.getBlock(o.bx, o.by + 1, o.bz) === v.AIR
    );
  }
  toggleHeadlights() {
    const e = this.vehicles.mine;
    if (!e || !wg(e.type)) {
      G.setHint(z("headlightsMissing"));
      return;
    }
    const t = !this.vehicles.headlightsOn(e);
    ((Y.headlightsOn[String(e.type)] = t),
      Ji(),
      this.vehicles.setHeadlights(e, t),
      this.sfx.pickup(),
      G.setHint(z(t ? "headlightsOn" : "headlightsOff")));
  }
  headlightAim = new hi();
  headlightEuler = new pi(0, 0, 0, "YXZ");
  syncHeadlights() {
    const e = this.vehicles.mine;
    if (e && wg(e.type)) {
      const t = !!Y.headlightsOn[String(e.type)];
      t !== this.vehicles.headlightsOn(e) && this.vehicles.setHeadlights(e, t);
    }
    for (const t of this.vehicles.vehicles.values()) {
      if (
        (t !== e &&
          t.ownerName === Yo &&
          wg(t.type) &&
          this.vehicles.setHeadlights(t, this.sky.dayness < 0.3),
        t.type === L.HELI && t.headlights)
      ) {
        const i =
          t === e
            ? this.camera.quaternion
            : this.headlightAim.setFromEuler(
                this.headlightEuler.set(t.aux2, t.aux1, 0, "YXZ"),
              );
        for (const n of t.headlights)
          n.root.quaternion.copy(t.quat).invert().multiply(i);
      }
      if (t.headlights)
        for (const i of t.headlights) i.priority = t === e ? 1 : 0;
    }
  }
  flashlight = null;
  lampRaycast = (e, t, i) => this.world.raycast(e, t, i);
  flashlightKey(e) {
    return String(e === w.FLASHLIGHT ? 0 : ai(e));
  }
  hasFlashlight(e) {
    return e === w.FLASHLIGHT || so(e).light;
  }
  toggleFlashlight() {
    const e = this.inventory.held();
    if (!this.hasFlashlight(e)) {
      G.setHint(z("flashlightMissing"));
      return;
    }
    const t = this.flashlightKey(e),
      i = !Y.lightOn[t];
    ((Y.lightOn[t] = i),
      Ji(),
      this.sfx.pickup(),
      G.setHint(z(i ? "flashlightOn" : "flashlightOff")));
  }
  updateFlashlight() {
    const e = this.inventory.held(),
      t =
        this.player.alive &&
        !this.player.downed &&
        !this.remote.open &&
        !this.vehicles.remoteView &&
        (!this.vehicles.driving() || this.vehicles.passengerCanShoot()) &&
        this.hasFlashlight(e) &&
        !!Y.lightOn[this.flashlightKey(e)];
    if (
      (t &&
        !this.flashlight &&
        (this.flashlight = new Y5(this.scene, { priority: 2 })),
      !this.flashlight)
    )
      return;
    const i = this.selfBody?.group.visible
      ? this.selfBody.heldMesh.getObjectByName("flashlight-mount")
      : null;
    let n = !1;
    if (
      (t && i
        ? (i.getWorldPosition(this.flashlight.root.position),
          i.getWorldQuaternion(this.flashlight.root.quaternion),
          i.getWorldDirection(this.tmpV).negate(),
          this.flashlight.root.position.addScaledVector(this.tmpV, 0.055),
          (n = !0))
        : t &&
          (n = this.weapons.flashlightPose(
            this.flashlight.root.position,
            this.flashlight.root.quaternion,
          )),
      this.flashlight.setActive(!!n),
      !n)
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
    if (i <= 0 || (i >= 256 && i !== w.COMPUTER && !Ko(i))) return !1;
    if (Ko(i)) {
      const o = this.blueprintSite(e, t);
      return (o && this.tryPlace(i, o), !!o);
    }
    const n = this.world.raycast(e, t, 5.5);
    return n ? (this.tryPlace(i, n), !0) : !1;
  }
  allocateVehicleSpawnRequestId() {
    const e = this.nextVehicleSpawnRequestId;
    return ((this.nextVehicleSpawnRequestId = e >= 4294967295 ? 1 : e + 1), e);
  }
  openMobileStation() {
    (this.sendInventory(), this.net.send(new lt(ue.C_REMOTE).u8(13)));
  }
  installRadio() {
    const e = this.player.eyePos(new k()),
      t = this.camera.getWorldDirection(new k()),
      i = this.vehicles.rayHit(e, t, 8);
    return i
      ? (this.sendInventory(),
        this.net.send(new lt(ue.C_REMOTE).u8(1).u16(i.id)),
        this.weapons.swing(),
        !0)
      : !1;
  }
  weldingUntil = 0;
  weldSfxAt = 0;
  weldSparkAt = 0;
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
      this.input.mobile && Math.random() < 0.08 && Uo("light", 40));
  }
  welderMenu = new toe({
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
    balance: () => G.getBalance(),
    creative: () => this.inventory.creative,
    me: () => this.sessionName,
    repairTick: (e) => {
      this.inventory.held() === w.WELDER &&
        (this.net.send(new lt(ue.C_VEH_REPAIR).u16(e)),
        this.weapons.hooks.wearHeld(1));
    },
    installArmor: (e, t) => {
      (this.sendInventory(),
        this.net.send(new lt(ue.C_VEH_ARMOR).u16(e).u8(t)));
    },
    pack: (e) => {
      (this.sendInventory(), this.net.send(new lt(ue.C_VEH_PICKUP).u16(e)));
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
      G.anyOpen() || this.input.lock();
    },
  });
  debugShowPromotion = (e) => this.celebratePromotion(e);
  celebratePromotion(e) {
    const t = pa[e];
    if (
      t &&
      this.front?.promotionBanner(
        e,
        I(`NEW RANK — ${t.nameEn}`, `НОВОЕ ЗВАНИЕ — ${t.name}`),
      )
    ) {
      lT(Math.min(6, 2 + Math.floor(e / 4)));
      return;
    }
    pne(e, this.front?.popHost);
  }
  myXp = 0;
  myXpSeen = !1;
  gunnerSight = null;
  tmpGunPoint = new k();
  skillsMenu = new noe({
    nick: () => this.sessionName,
    hp: () => ({ hp: this.player.hp, max: this.player.maxHp }),
    balance: () => G.getBalance(),
    rankXp: () => this.myXp,
    closed: () => {
      G.anyOpen() || this.input.lock();
    },
  });
  openSkills() {
    if (this.skillsMenu.isOpen) {
      this.skillsMenu.close();
      return;
    }
    G.anyOpen() ||
      (this.input.unlock(), this.skillsMenu.open(), this.sfx.uiTick(!0));
  }
  openWelderMenu(e) {
    this.welderMenu.isOpen ||
      (this.input.unlock(), this.welderMenu.open(e), this.sfx.uiTick(!0));
  }
  toggleToolMode() {
    if (
      !this.running ||
      G.anyOpen() ||
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
      this.sfx.toolModeSwitch(!!Tl[e], this.toolModes.mode(e) !== Sn.SINGLE),
      Uo("light", 90));
  }
  updateHealHud() {
    const e = this.inventory.held(),
      t = this.medkitChannel > 0,
      i = this.bandageChannel > 0,
      n = t
        ? this.medkitChannelItem === w.MILITARY_MEDKIT
          ? "military"
          : "medkit"
        : i
          ? "bandage"
          : null,
      o = t ? Px : Ox,
      a = t ? this.medkitChannel : this.bandageChannel,
      r = n ? { progress: 1 - a / o, left: a } : null,
      l = t || i ? 1 : 0;
    (this.healLanded
      ? (this.healHud.done(this.healLanded),
        this.weapons.medicalDone(),
        (this.healLanded = 0))
      : this.healChannelWas && !l && this.healHud.cancel(),
      (this.healChannelWas = l));
    const c = this.player.alive
      ? e === w.BANDAGE
        ? { left: this.bandageCd, total: PS }
        : e === w.MEDKIT
          ? { left: this.medkitCd, total: IS }
          : e === w.MILITARY_MEDKIT
            ? { left: this.militaryMedkitCd, total: LS }
            : null
      : null;
    (this.healHud.update(
      n,
      r,
      c,
      e === w.BANDAGE
        ? "bandage"
        : e === w.MILITARY_MEDKIT
          ? "military"
          : e === w.MEDKIT
            ? "medkit"
            : null,
    ),
      (this.weapons.medical = r && n ? { kind: n, p: r.progress } : null));
  }
  handleItemActions(e, t = e) {
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
    const n = this.player.eyePos(this.tmpV),
      o = this.camera.getWorldDirection(this.tmpV2);
    if (this.input.clickR && this.toolModes.supports(i)) {
      this.toggleToolMode();
      return;
    }
    if (i === w.EGG) {
      this.input.clickR &&
        performance.now() >= this.eggThrowAt &&
        ((this.eggThrowAt = performance.now() + 350),
        this.net.send(
          new lt(ue.C_EGG)
            .f32(n.x)
            .f32(n.y)
            .f32(n.z)
            .f32(o.x)
            .f32(o.y)
            .f32(o.z),
        ));
      return;
    }
    if (this.input.clickR && i === w.MOBILE_REMOTE) {
      this.openMobileStation();
      return;
    }
    if (this.input.clickR && i === w.RADIO_MODULE) {
      if (this.installRadio()) return;
      const l = this.world.raycast(n, o, 7);
      if (!l) return;
      if ((this.sendInventory(), l.block === v.SIGN))
        this.net.send(new lt(ue.C_REMOTE).u8(18).i32(l.bx).u8(l.by).i32(l.bz));
      else {
        const c = l.bx + l.nx,
          h = l.by + l.ny,
          d = l.bz + l.nz;
        h > 0 &&
          h < 128 &&
          this.net.send(new lt(ue.C_REMOTE).u8(15).i32(c).u8(h).i32(d));
      }
      this.weapons.swing();
      return;
    }
    if (this.input.clickR && db[i] !== void 0) {
      const l = this.vehicles.rayHit(n, o, 8);
      if (l) {
        const c = db[i];
        (this.vehicles.setCamo(l.id, c),
          this.sendInventory(),
          this.net.send(
            new lt(ue.C_VEH_PAINT).u16(l.id).u16(i).u8(this.inventory.sel),
          ),
          this.inventory.creative || this.inventory.consumeHeld(),
          this.weapons.swing(),
          this.sfx.place(),
          G.renderHotbar(),
          this.syncHeld(),
          G.setHint(
            I("Vehicle camouflage changed", "Камуфляж техники изменён"),
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
                  (i === w.MILITARY_MEDKIT
                    ? (this.militaryMedkitCd = LS)
                    : (this.medkitCd = IS),
                  this.net.send(
                    new lt(ue.C_HEAL).u8(i === w.MILITARY_MEDKIT ? LW : my),
                  ),
                  this.sfx.healDone(),
                  (this.healLanded =
                    i === w.MILITARY_MEDKIT
                      ? Math.max(
                          1,
                          Math.round(this.player.maxHp - this.player.hp),
                        )
                      : my),
                  G.renderHotbar());
              }))),
      this.bandageChannel > 0 &&
        (i !== w.BANDAGE
          ? (this.bandageChannel = 0)
          : ((this.bandageChannel -= t),
            this.bandageChannel <= 0 &&
              this.inventory.deferChanges(() => {
                this.inventory.consumeHeld() &&
                  ((this.bandageCd = PS),
                  this.net.send(new lt(ue.C_HEAL).u8(gy)),
                  this.sfx.healDone(),
                  (this.healLanded = gy),
                  G.renderHotbar());
              }))),
      this.input.clickR && this.knifeThrowAt === 0 && this.tryInteract(n, o))
    )
      return;
    if (O0(i)) {
      (this.input.clickR &&
        this.inventory.equipHeldArmor() &&
        (this.sendInventory(),
        G.renderHotbar(),
        this.syncHeld(),
        this.sfx.pickup()),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    if (i === w.COMBAT_KNIFE || this.knifeThrowAt > 0) {
      this.handleKnife(e, i, n, o);
      return;
    }
    if (i === w.MEDKIT || i === w.MILITARY_MEDKIT) {
      (this.input.clickR &&
        this.medkitChannel <= 0 &&
        (i === w.MILITARY_MEDKIT ? this.militaryMedkitCd : this.medkitCd) <=
          0 &&
        this.player.hp < this.player.maxHp &&
        ((this.medkitChannelItem = i),
        (this.medkitChannel = Px),
        this.sfx.medkitOpen()),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    if (i === w.BANDAGE) {
      (this.input.clickR &&
        this.bandageChannel <= 0 &&
        this.bandageCd <= 0 &&
        this.player.hp < this.player.maxHp &&
        ((this.bandageChannel = Ox), this.sfx.bandageRip()),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    if (i === w.FISHING_ROD) {
      if (this.input.clickR) {
        const l = this.fishing.localState(this.myId) !== Aa.GONE,
          c = (h) => {
            const d = this.player.eyePos(this.tmpV),
              u = this.player.lookDir(this.tmpV2);
            (this.sendInventory(),
              this.net.send(
                new lt(ue.C_FISH)
                  .u8(h)
                  .u8(this.inventory.sel)
                  .f32(d.x)
                  .f32(d.y)
                  .f32(d.z)
                  .f32(u.x)
                  .f32(u.y)
                  .f32(u.z),
              ));
          };
        if (l) (this.weapons.rodStrike(), c(1), this.sfx.reelIn());
        else if (!this.weapons.rodBusy() && !this.fishing.landing(this.myId)) {
          const h = this.inventory.sel;
          this.weapons.rodCast(() => {
            this.inventory.sel === h &&
              this.inventory.held() === w.FISHING_ROD &&
              c(0);
          });
        }
      }
      this.handleMeleeAndMining(e, i, 0, n, o);
      return;
    }
    if (
      i === w.SHEARS ||
      (i === w.BUCKET && this.animals.nearestMilkable(this.player.pos, 4.5))
    ) {
      (this.input.clickR &&
        (this.sendInventory(),
        this.net.send(new lt(ue.C_USE_ITEM).u16(i)),
        this.weapons.swing()),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    if (
      (su[i] || i === w.WHEAT) &&
      !(this.input.clickR && this.canSowHeld(i, n, o))
    ) {
      (this.input.clickR &&
        this.eatCd <= 0 &&
        ((this.eatCd = AW),
        this.sendInventory(),
        this.net.send(new lt(ue.C_USE_ITEM).u16(i)),
        this.weapons.swing(),
        this.sfx.pickup()),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    if (Ko(i)) {
      (this.input.clickR && this.placeHeld(n, o),
        this.handleMeleeAndMining(e, i, 0, n, o));
      return;
    }
    const a = sy[i];
    if (a) {
      if (this.input.clickR) {
        const l = this.world.raycast(n, o, 5.5);
        if (l && l.ny === 1 && _x(a)(l.block)) {
          const c = l.bx,
            h = l.by + 1,
            d = l.bz;
          let u = II(a);
          for (let f = -8; f <= 8 && !u; f++)
            for (let p = -8; p <= 8 && !u; p++)
              if (!(f * f + p * p > 64)) {
                for (let m = -2; m <= 2; m++)
                  if (this.world.getBlock(c + f, l.by + m, d + p) === v.WATER) {
                    u = !0;
                    break;
                  }
              }
          u &&
          this.world.getBlock(c, h, d) === v.AIR &&
          this.inventory.deferChanges(() =>
            this.inventory.consumeHeld()
              ? (this.net.send(
                  new lt(ue.C_SET_BLOCK).i32(c).u8(h).i32(d).u8(a).u8(0),
                ),
                !0)
              : !1,
          )
            ? (this.world.setBlock(c, h, d, a, 0),
              this.sfx.place(),
              this.weapons.swing(),
              this.syncHeld(),
              G.renderHotbar())
            : u ||
              G.setHint(
                z("wheatSeedsHint", {
                  action: this.input.mobile ? z("useAction") : z("rmbAction"),
                }),
              );
        }
      }
      this.handleMeleeAndMining(e, i, 0, n, o);
      return;
    }
    if (i === w.BUCKET || i === w.WATER_BUCKET || i === w.LAVA_BUCKET) {
      if (this.input.clickR) {
        let l = null;
        if (i === w.BUCKET) {
          const c = this.world.raycast(n, o, 5.5, !0);
          c &&
            (c.block === v.WATER || c.block === v.LAVA) &&
            (this.world.getMeta(c.bx, c.by, c.bz) & 15) === 0 &&
            (l = c);
        } else {
          const c = this.world.raycast(n, o, 5.5);
          c && (l = { bx: c.bx + c.nx, by: c.by + c.ny, bz: c.bz + c.nz });
        }
        l &&
          l.by > 0 &&
          l.by < 127 &&
          (this.sendInventory(),
          this.net.send(
            new lt(ue.C_BUCKET)
              .u8(this.inventory.sel)
              .u16(i)
              .i32(l.bx)
              .u8(l.by)
              .i32(l.bz),
          ),
          this.weapons.swing(),
          this.sfx.place());
      }
      this.handleMeleeAndMining(e, i, 0, n, o);
      return;
    }
    if (i === w.AXE) {
      if (this.input.clickL || this.input.clickR) {
        const l = this.world.raycast(n, o, 80);
        l &&
          (this.worldedit.setPoint(this.input.clickL ? 1 : 2, l.bx, l.by, l.bz),
          this.weapons.swing(),
          this.weapons.hooks.wearHeld(1));
      }
      return;
    }
    if (i === w.WELDER) {
      const l = this.vehicles.rayHit(
          n,
          o,
          6,
          this.vehicles.passengerCanRepair(),
        ),
        c = l ? this.vehicles.vehicles.get(l.id) : void 0;
      if (this.input.mouseL && l && c) {
        const h = n.clone().addScaledVector(o, l.dist - 0.04);
        if ((this.weldFrame(h, o), this.hammerCd <= 0))
          if (((this.hammerCd = 0.45), c.ownerName === Yo))
            G.setHint(z("raidVehicleNoRepair"));
          else if (c.hp >= c.maxHp)
            G.setHint(z("vehicleAlreadyFullHp", { vehicle: to(c.type) }));
          else {
            const d = Am(c.type);
            !this.inventory.creative && G.getBalance() < d
              ? G.setHint(z("notEnoughMoney", { cost: d }))
              : (this.net.send(new lt(ue.C_VEH_REPAIR).u16(c.id)),
                this.weapons.hooks.wearHeld(1));
          }
      } else
        this.input.mouseL &&
          this.hammerCd <= 0 &&
          ((this.hammerCd = 0.5), this.sfx.weldTick(4));
      return;
    }
    if (or(i) || i === w.DETONATOR) {
      if (
        or(i) &&
        this.spawnNotice.contains(
          this.player.pos.x,
          this.player.pos.z,
          this.currentPlanet,
        )
      ) {
        (this.input.clickL || this.input.clickR) &&
          this.spawnNotice.deny("explosive", !wi());
        return;
      }
      (this.input.clickL || this.input.clickR) &&
        performance.now() >= this.c4ActionAt &&
        ((this.c4ActionAt = performance.now() + 500),
        this.sendInventory(),
        or(i)
          ? this.net.send(
              new lt(ue.C_C4_THROW)
                .f32(n.x)
                .f32(n.y)
                .f32(n.z)
                .f32(o.x)
                .f32(o.y)
                .f32(o.z)
                .u8(this.input.clickR ? 1 : 0),
            )
          : this.net.send(new lt(ue.C_DETONATE)),
        this.weapons.swing(),
        or(i) ? this.sfx.c4Throw() : this.sfx.detonatorClick());
      return;
    }
    if (i === w.MILITARY_BOT) {
      if (this.input.clickR) {
        const l = this.world.raycast(n, o, 5.5);
        if (l) {
          const c = l.bx + l.nx + 0.5,
            h = l.by + l.ny + 0.05,
            d = l.bz + l.nz + 0.5;
          if (
            this.inventory.creative ||
            this.inventory.hotbar[this.inventory.sel]?.count > 0
          ) {
            const u = this.allocateVehicleSpawnRequestId();
            (this.pendingVehicleSpawns.set(u, {
              itemId: i,
              slot: this.inventory.sel,
              type: -1,
            }),
              this.sendInventory(),
              this.net.send(new lt(ue.C_BOT_SPAWN).f32(c).f32(h).f32(d).u32(u)),
              this.weapons.swing(),
              G.renderHotbar(),
              this.syncHeld());
          }
        }
      }
      this.handleMeleeAndMining(e, i, 0, n, o);
      return;
    }
    if (IM[i] !== void 0) {
      const l = i === w.DRONE && this.front.active;
      if (this.input.clickR || (l && this.input.clickL)) {
        const c = this.allocateVehicleSpawnRequestId();
        (
          l
            ? this.vehicles.launchFromHand(L.DRONE, n, o, c) ||
              this.vehicles.requestSpawn(L.DRONE, n, o, c)
            : this.vehicles.requestSpawn(IM[i], n, o, c)
        )
          ? (this.pendingVehicleSpawns.set(c, {
              itemId: i,
              slot: this.inventory.sel,
              type: IM[i],
            }),
            this.weapons.swing(),
            G.renderHotbar(),
            this.syncHeld())
          : this.vehicles.spawnCd > 0 ||
            G.addChat(2, z("vehiclePlacementFailed"));
      }
      l || this.handleMeleeAndMining(e, i, 0, n, o);
      return;
    }
    this.input.clickR && this.placeHeld(n, o);
    const r = wd[i] ?? 0;
    this.handleMeleeAndMining(e, i, r, n, o, Tl[i] ?? 0);
  }
  handleMeleeAndMining(e, t, i, n, o, a = 0) {
    if (i > 0 && this.input.mouseL && this.drillHitCd <= 0) {
      const c = this.remotes.raycastHit(n, o, 3),
        h = this.bots.raycastHit(n, o, c ? Math.min(c.dist, 3) : 3),
        d = this.animals.raycastHit(n, o, Math.min(c?.dist ?? 3, h?.dist ?? 3)),
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
    const r = !!Ss[t];
    if (i === 0 && !r && this.input.mouseL && this.meleeCd <= 0) {
      const c = this.remotes.raycastHit(n, o, 3.2),
        h = this.bots.raycastHit(n, o, c ? Math.min(c.dist, 3.2) : 3.2),
        d = this.animals.raycastHit(
          n,
          o,
          Math.min(c?.dist ?? 3.2, h?.dist ?? 3.2),
        ),
        u = d || h || c ? null : this.vehicles.rayHit(n, o, 3.2),
        f = Math.round(12 * Jt.fistMul());
      if (((d || h || c) && (Jt.add("fight", 1), Jt.stat("punches", 1)), u)) {
        const p = n.clone().addScaledVector(o, u.dist);
        (this.sendPlayerState(),
          this.weapons.hooks.onHitVehicle(u.id, 2, p, 1, n),
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
      const l = this.world.raycast(n, o, 5.5);
      if (l && le[l.block].hardness >= 0) {
        if (
          ur !== "owner" &&
          this.spawnNotice.protectedBlock(l.bx, l.bz, this.currentPlanet)
        ) {
          ((this.input.clickL || !this.mining) &&
            this.spawnNotice.deny("break", !wi()),
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
          this.currentPlanet === Ci.MOON &&
          jG.has(l.block) &&
          t !== w.LUNAR_DRILL
        ) {
          (G.setHint(sa("Lunar blocks require a white lunar drill")),
            (this.mining = null));
          return;
        }
        if (!this.inventory.creative && l.block === v.RSTONE && i < 2) {
          (G.setHint(z("rstoneNeedsDiamondDrill")), (this.mining = null));
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
          (G.setMiningProgress(h),
            (this.minedThisFrame = !0),
            this.weapons.setMining(!0, h),
            (i > 0 || a > 0) && this.sfx.drillUpdate(h),
            (this.chipT -= e),
            this.chipT <= 0 &&
              ((this.chipT = 0.07),
              this.effects.mineChips(l.point, le[l.block].color, h),
              i === 0 && this.sfx.mineHit(h, l.block)),
            this.mining.t >= this.mining.need &&
              (this.finishBreak(l.bx, l.by, l.bz, l.block),
              (i > 0 || a > 0) &&
                !yE(t, l.block, this.toolModes.mode(t)) &&
                this.weapons.hooks.wearHeld(
                  VN(t, this.toolModes.mode(t), this.player.crouching) &&
                    Fm(l.block)
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
    return yne(
      e,
      this.inventory.held(),
      Jt.mineMul(),
      Jt.woodMul(),
      this.player.crouching,
      this.toolModes.mode(this.inventory.held()),
    );
  }
  finishBreak(e, t, i, n) {
    if (
      ur !== "owner" &&
      this.spawnNotice.protectedBlock(e, i, this.currentPlanet)
    ) {
      this.spawnNotice.deny("break", !wi());
      return;
    }
    if (
      ur !== "owner" &&
      this.claimsUI &&
      !this.claimsUI.canBreak(this.currentPlanet, e, t, i)
    ) {
      G.setHint(
        I(
          "Protected territory · access denied",
          "Приват территории · нет доступа",
        ),
      );
      return;
    }
    if (
      ur !== "owner" &&
      this.currentPlanet === Ci.EARTH &&
      this.casino?.hallAt(e, t, i)
    ) {
      G.setHint(
        I(
          "Olympus Casino is private property",
          "Казино «Олимп» — частная территория",
        ),
      );
      return;
    }
    if (n === v.OWNERSHIP_TOTEM) {
      (this.net.send(new lt(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0)),
        this.weapons.breakPop());
      return;
    }
    const o = this.toolModes.mode(this.inventory.held());
    if (yE(this.inventory.held(), n, o)) {
      (this.sendInventory(),
        this.sendPlayerState(),
        this.net.send(
          new lt(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0).u8(o),
        ),
        this.trainingMined++,
        this.weapons.breakPop(),
        this.sfx.breakBlock(n),
        Uo("light", 90));
      return;
    }
    const a = n === v.CAKE && this.world.getMeta(e, t, i) === 0;
    (this.world.setBlock(e, t, i, 0),
      this.net.send(
        new lt(ue.C_SET_BLOCK).i32(e).u8(t).i32(i).u8(0).u8(0).u8(o),
      ),
      this.trainingMined++);
    const r =
        n === v.RADIO_RELAY
          ? w.RADIO_MODULE
          : n === v.COAL_ORE
            ? w.COAL
            : n === v.GRASS || n === v.SAVANNA_GRASS
              ? v.DIRT
              : n,
      l =
        !en(n) &&
        !lh(n) &&
        n !== v.FIRE &&
        n !== v.TALL_GRASS &&
        n !== v.DESERT_GRASS &&
        (n !== v.CAKE || a),
      c = l ? this.inventory.addItem(r) : 0;
    (!en(n) &&
      !ra(n) &&
      !lh(n) &&
      n !== v.FIRE &&
      (le[n]?.hardness ?? 0) > 2 &&
      (Ha(n) === "wood"
        ? (Jt.add("wood", 1), Jt.stat("logs", 1))
        : (Jt.add("mine", Ha(n) === "ore" ? 2 : 1), Jt.stat("blocks", 1))),
      this.effects.blockBreak(new k(e + 0.5, t + 0.5, i + 0.5), le[n].color, n),
      this.sfx.breakBlock(n),
      Uo("light", 90),
      this.effects.addTrauma(0.09),
      this.weapons.breakPop(),
      lh(n)
        ? G.showMineGain(Li(khe[n] ?? w.WHEAT_SEEDS))
        : l && c > 0 && G.showMineGain(r >= 256 ? Li(r) : jh(le[r])),
      G.renderHotbar());
  }
  updateMiningVisual() {
    if (!this.mining) {
      this.miningMesh && (this.miningMesh.visible = !1);
      return;
    }
    this.crackMats ||
      (this.crackMats = $le().map(
        (a) =>
          new Zt({
            map: a,
            transparent: !0,
            depthWrite: !1,
            side: Mi,
            polygonOffset: !0,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
          }),
      ));
    let e = this.world.getMeta(this.mining.x, this.mining.y, this.mining.z);
    (Cl(this.mining.block) &&
      (e =
        (e & -4) |
        bm(
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
            a.geometry?.dispose();
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
    const t = Oe(this.mining.t / this.mining.need, 0, 1);
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
    const n = Math.max(0, 1 - (performance.now() - this.miningPopAt) / 140),
      o = 1 + 0.03 * n * n;
    this.miningMesh.scale.set(o, o, o);
  }
  buildMiningVisual(e, t, i = 0) {
    const n = new re(),
      o = (r, l, c, h = 0, d = 0, u = 0) => {
        const f = new Q(new kt(r, l, c), t);
        (f.position.set(h, d, u), (f.renderOrder = zi.marker), n.add(f));
      },
      a = le[e]?.shape ?? "cube";
    if (Cl(e))
      for (const [r, l, c, h, d, u] of i4(e, i & 3))
        o(
          h - r + 0.005,
          d - l + 0.005,
          u - c + 0.005,
          (r + h) / 2 - 0.5,
          (l + d) / 2,
          (c + u) / 2 - 0.5,
        );
    else if (a === "furniture")
      for (const {
        box: [r, l, c, h, d, u],
      } of Of(e, i))
        o(
          h - r + 0.005,
          d - l + 0.005,
          u - c + 0.005,
          (r + h) / 2 - 0.5,
          (l + d) / 2,
          (c + u) / 2 - 0.5,
        );
    else if (a === "plant")
      for (const r of [Math.PI / 4, -Math.PI / 4]) {
        const l = new Q(new ms(1.04, 1.04), t);
        ((l.position.y = 0.5),
          (l.rotation.y = r),
          (l.renderOrder = zi.marker),
          n.add(l));
      }
    else if (a === "bush") {
      const r = PI(e),
        l = r <= 0 ? 0.34 : r === 1 ? 0.62 : 0.92,
        c = (r <= 0 ? 0.16 : r === 1 ? 0.27 : 0.36) * 2.3;
      o(c, l, c, 0, l / 2, 0);
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
    return n;
  }
  blueprintSite(e, t) {
    const i = this.world.raycast(e, t, 5.5);
    if (!i) return null;
    if (i.ny === 1) return i;
    if (!ra(i.block)) return null;
    for (let n = i.by; n > i.by - 4 && n > 0; n--) {
      const o = this.world.getBlock(i.bx, n - 1, i.bz);
      if (o !== v.AIR && !ra(o) && le[o]?.solid)
        return { ...i, by: n - 1, ny: 1 };
    }
    return null;
  }
  yawFacing() {
    const e = -Math.sin(this.player.yaw),
      t = -Math.cos(this.player.yaw);
    return Math.abs(e) > Math.abs(t) ? (e > 0 ? 1 : 3) : t > 0 ? 2 : 0;
  }
  layBattleMine(e, t) {
    wi();
    const i = ra(this.world.getBlock(t.bx, t.by, t.bz)),
      n = t.bx + (i ? 0 : t.nx),
      o = t.by + (i ? 0 : t.ny),
      a = t.bz + (i ? 0 : t.nz),
      r = this.world.getBlock(n, o, a),
      l = this.world.getBlock(n, o - 1, a),
      c =
        (!i && t.ny !== 1) || (r !== v.AIR && !ra(r)) || !le[l]?.solid
          ? I(
              "A mine goes on firm, open ground",
              "Мина ставится на твёрдую открытую землю",
            )
          : this.front.mineRefusal(n, a);
    if (c) {
      G.setHint(c);
      return;
    }
    this.inventory.consumeHeld() &&
      (this.world.setBlock(n, o, a, e, 0),
      this.net.send(new lt(ue.C_SET_BLOCK).i32(n).u8(o).i32(a).u8(e).u8(0)),
      this.sfx.place(e),
      this.weapons.swing(),
      this.syncHeld(),
      G.renderHotbar());
  }
  tryPlace(e, t) {
    if (this.front.active && !this.inventory.creative) {
      w_(e) && this.layBattleMine(e, t);
      return;
    }
    const i = t.bx + t.nx,
      n = t.by + t.ny,
      o = t.bz + t.nz;
    if (this.spawnNotice.protectedBlock(i, o, this.currentPlanet)) {
      this.spawnNotice.deny("build", !wi());
      return;
    }
    if (this.currentPlanet === Ci.EARTH && this.casino?.hallAt(i, n, o)) {
      G.setHint(
        I(
          "Casino grounds · building is not allowed",
          "Территория казино · строительство запрещено",
        ),
      );
      return;
    }
    if (e === w.COMPUTER) {
      if (
        !mm(ur, Lf, "computer.use") ||
        t.ny !== 1 ||
        performance.now() < this.blueprintActionAt
      )
        return;
      ((this.blueprintActionAt = performance.now() + 700),
        this.sendInventory(),
        this.net.send(
          new lt(ue.C_COMPUTER).str(
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
    if (Ko(e)) {
      if (t.ny !== 1 || performance.now() < this.blueprintActionAt) return;
      ((this.blueprintActionAt = performance.now() + 700),
        this.sendInventory(),
        this.net.send(
          new lt(ue.C_BLUEPRINT)
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
      G.setHint(
        I(
          "Protected territory · access denied",
          "Приват территории · нет доступа",
        ),
      );
      return;
    }
    if (this.currentPlanet === Ci.EARTH && this.casino?.hallAt(a, r, l)) {
      G.setHint(
        I(
          "Olympus Casino is private property",
          "Казино «Олимп» — частная территория",
        ),
      );
      return;
    }
    if (e === v.OWNERSHIP_TOTEM) {
      if (performance.now() < this.blueprintActionAt) return;
      ((this.blueprintActionAt = performance.now() + 500),
        this.sendInventory(),
        this.net.send(new lt(ue.C_SET_BLOCK).i32(a).u8(r).i32(l).u8(e).u8(0)),
        this.weapons.swing());
      return;
    }
    const c = (p, m, g) => {
        const y = this.world.getBlock(p, m, g);
        return y === v.AIR || y === v.WATER || y === v.LAVA;
      },
      h = le[e];
    if (
      r < 0 ||
      r >= 127 ||
      !c(a, r, l) ||
      (h.solid && this.intersectsPlayer(a, r, l)) ||
      ([v.REDSTONE, v.LEVER, v.BUTTON, v.PLATE, v.REPEATER, v.SIGN].includes(
        e,
      ) &&
        !le[this.world.getBlock(t.bx, t.by, t.bz)]?.solid)
    )
      return;
    let d = 0;
    const u = (p) =>
      t.ny === 1 && p
        ? 0
        : t.ny === -1 && [v.REDSTONE, v.LEVER, v.BUTTON].includes(e)
          ? sm
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
      if (t.ny === -1) d = sm;
      else {
        const p = u(!0);
        if (p === null) return;
        d = p;
      }
    else if (
      h.shape === "torch" ||
      e === v.LADDER ||
      e === v.REDSTONE ||
      e === v.LEVER ||
      e === v.BUTTON
    ) {
      const p = u(e !== v.LADDER);
      if (p === null) return;
      d = p;
    } else if (e === v.CANDLE) {
      if (t.ny !== 1) return;
    } else if (e === v.HANGING_HERBS) {
      if (t.ny !== -1) return;
    } else if (e === v.PUMPKIN || e === v.JACK_O_LANTERN)
      d = eb(this.player.pos.x, this.player.pos.z, a, l);
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
      d = eb(this.player.pos.x, this.player.pos.z, a, l);
    else if (e === v.LED_SCREEN) {
      const p =
          this.world.getBlock(t.bx, t.by, t.bz) === v.LED_SCREEN
            ? this.world.getMeta(t.bx, t.by, t.bz) & 3
            : -1,
        [m, g] = p >= 0 ? Qo[p] : [0, 0];
      d =
        p >= 0 && t.nx * m + t.nz * g === 0
          ? p
          : eb(this.player.pos.x, this.player.pos.z, a, l);
    } else if (e === v.BED) {
      d = this.yawFacing();
      const [p, m] = Qo[d],
        g = a + p,
        y = l + m;
      if (!c(g, r, y) || this.intersectsPlayer(g, r, y)) return;
    } else if (zn(e)) {
      if (
        t.ny !== 1 ||
        r >= 126 ||
        !c(a, r + 1, l) ||
        this.intersectsPlayer(a, r + 1, l)
      )
        return;
      d = this.yawFacing();
    } else if (le[e].shape === "gate") d = this.yawFacing();
    else if (le[e].shape === "stair") d = this.yawFacing();
    else if (Cl(e)) d = ((this.yawFacing() + 2) & 3) | PO;
    else if (le[e].shape === "furniture") {
      const p =
        t.ny === 0
          ? t.nz === -1
            ? 0
            : t.nx === 1
              ? 1
              : t.nz === 1
                ? 2
                : 3
          : -1;
      if (e === v.WALL_LIGHT && p < 0) return;
      d = e === v.WALL_LIGHT && p >= 0 ? p : (this.yawFacing() + 2) & 3;
    } else if (ra(e)) {
      const p = this.world.getBlock(a, r - 1, l),
        m =
          e === v.FIRE
            ? p > 0 && le[p].solid
            : e === v.DESERT_SAPLING
              ? p === v.GRASS || p === v.SAVANNA_GRASS || p === v.SAND
              : p === v.GRASS ||
                p === v.SAVANNA_GRASS ||
                p === v.DIRT ||
                (e === v.PINE_SAPLING && p === v.SNOW);
      if (t.ny !== 1 || !m) return;
    } else if (e === v.CACTUS) {
      const p = this.world.getBlock(a, r - 1, l);
      if (t.ny !== 1 || (p !== v.SAND && p !== v.CACTUS)) return;
    }
    const f = this.world.getBlock(a, r, l);
    if ((f === v.WATER || f === v.LAVA) && Phe.has(e)) {
      (this.effects.blockBreak(new k(a + 0.5, r + 0.5, l + 0.5), h.color, e),
        this.sfx.breakBlock(e),
        G.setHint(sa("This block goes out and breaks in liquid")));
      return;
    }
    if (
      ((d &= -193),
      f === v.WATER && nv(e) && (d |= _I),
      f === v.LAVA && nv(e) && (d |= RI),
      !!this.inventory.consumeHeld())
    ) {
      if (e === v.BED) {
        const [p, m] = Qo[d];
        (this.world.setBlock(a, r, l, e, d),
          this.world.setBlock(a + p, r, l + m, e, d | 4));
      } else if (zn(e)) {
        const p = this.world,
          m = tW(
            (g, y, b) => p.getBlock(g, y, b),
            (g, y, b) => p.getMeta(g, y, b),
            a,
            r,
            l,
            d & 3,
          );
        if (
          ((d = m.meta),
          p.setBlock(a, r, l, e, d),
          p.setBlock(a, r + 1, l, e, d | wr),
          m.flip)
        ) {
          const [g, y, b] = m.flip,
            S = p.getBlock(g, y, b);
          (p.setBlock(g, y, b, S, p.getMeta(g, y, b) | $a),
            p.getBlock(g, y + 1, b) === S &&
              p.setBlock(g, y + 1, b, S, p.getMeta(g, y + 1, b) | $a));
        }
      } else this.world.setBlock(a, r, l, e, d);
      (this.net.send(new lt(ue.C_SET_BLOCK).i32(a).u8(r).i32(l).u8(e).u8(d)),
        this.sfx.place(e),
        this.weapons.swing(),
        this.syncHeld(),
        G.renderHotbar());
    }
  }
  intersectsPlayer(e, t, i) {
    const n = this.player.pos;
    return (
      e + 1 > n.x - 0.3 &&
      e < n.x + 0.3 &&
      t + 1 > n.y &&
      t < n.y + this.player.h &&
      i + 1 > n.z - 0.3 &&
      i < n.z + 0.3
    );
  }
}
