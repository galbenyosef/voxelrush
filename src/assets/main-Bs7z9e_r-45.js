// main-Bs7z9e_r 45 — x5d322a
// Lines 13360-13658 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
const L = {
    C_COMPUTER: 0x4d,
    S_COMPUTER: 0xfd,
    S_SERVER_NOTICE: 0xd4,
    C_SQUAD: 0x4c,
    S_SQUAD: 0xc8,
    C_COSMETICS: 0x4b,
    S_COSMETICS: 0xc7,
    C_SCREEN: 0xcd,
    C_COMMAND_AUDIT: 0xd3,
    S_ACCOUNT: 0xd2,
    C_CLAIM: 0x4a,
    S_CLAIMS: 0xc3,
    S_CLAIM_MENU: 0xc4,
    S_PROTECTION: 0xc5,
    S_BASE_CAPTURE: 0xc6,
    C_CHAT_TTS: 0x5a,
    C_HELLO: 0x1,
    C_MOVE: 0x2,
    C_SET_BLOCK: 0x3,
    C_BLOCK_HIT: 0x4,
    C_CHAT: 0x5,
    C_SHOT: 0x6,
    C_HIT_PLAYER: 0x7,
    C_HIT_VEHICLE: 0x8,
    C_EXPLOSION: 0x9,
    C_VEH_SPAWN: 0xa,
    C_VEH_STATE: 0xb,
    C_VEH_ENTER: 0xc,
    C_VEH_EXIT: 0xd,
    C_PROJECTILE: 0xe,
    C_CHUNK_REQ: 0xf,
    C_SELF_DAMAGE: 0x10,
    C_WORLDEDIT: 0x11,
    C_RESPAWN: 0x12,
    C_PING: 0x13,
    C_DROP_TAKE: 0x14,
    C_USE_BLOCK: 0x15,
    C_HEAL: 0x16,
    C_THROW: 0x17,
    C_INV_SAVE: 0x1a,
    C_DETONATE: 0x1b,
    C_HIT_PROJ: 0x1c,
    C_EQUIPMENT_REPAIR: 0x42,
    S_EQUIPMENT_REPAIR: 0xc0,
    C_SHOP: 0x1d,
    C_CHEST: 0x1e,
    C_BOT_SPAWN: 0x1f,
    C_HIT_BOT: 0x20,
    C_FRIENDS: 0x21,
    C_VEH_REPAIR: 0x22,
    C_FURNACE: 0x23,
    C_BACKPACK: 0x24,
    C_LANGUAGE: 0x25,
    C_HELI_CARGO: 0x26,
    C_VEH_PAINT: 0x27,
    C_HIT_ANIMAL: 0x29,
    C_USE_ITEM: 0x2a,
    C_ITEM_WEAR: 0x2b,
    C_BUCKET: 0x2c,
    C_SITE_ACTION: 0x2d,
    C_ANIMAL_RIDE: 0x2e,
    C_FISH: 0x2f,
    C_VISION_WEAR: 0x30,
    C_PLANET_READY: 0x31,
    C_CROP_QUERY: 0x32,
    C_MAP_TILES: 0x33,
    C_SEAT: 0x34,
    C_REMOTE: 0x35,
    C_C4_THROW: 0x36,
    C_BLUEPRINT: 0x37,
    C_VOICE: 0x38,
    C_ANIMATION: 0x39,
    C_RPG_LOCK: 0x3a,
    C_TANK_AIM: 0x3b,
    C_REVIVE: 0x3c,
    C_EGG: 0x3d,
    C_SIGN: 0x3e,
    C_VEH_PICKUP: 0x3f,
    C_CONTAINER_MOVE: 0x40,
    C_OPERATION_ACTION: 0x41,
    C_VEH_RAM: 0x43,
    C_MISSION_STATUS: 0x44,
    C_VEH_ARMOR: 0x45,
    C_SKILLS: 0x46,
    C_KNIFE_THROW: 0x48,
    C_CASINO: 0x49,
    S_CASINO: 0xfa,
    S_WORLD_RULES: 0xfb,
    S_TELEPORT_REQUEST: 0xfe,
    C_FRONT: 0x4e,
    S_FRONT: 0xd5,
    S_VEH_BOUNDARY: 0xfc,
    S_CHAT_TTS: 0xf0,
    S_VEH_RAM: 0xf1,
    S_MISSION_STATUS: 0xf2,
    S_VEH_ARMOR: 0xf3,
    S_SKILLS: 0xf4,
    S_RUN_OVER: 0xf5,
    S_HALLOWEEN_FX: 0xf7,
    S_KNIFE: 0xf9,
    S_DISGUISE: 0xc1,
    S_CHEST_LID: 0xc2,
    S_SEAT_GUN: 0x81,
    S_WELCOME: 0x64,
    S_JOIN: 0x65,
    S_LEAVE: 0x66,
    S_STATES: 0x67,
    S_CHUNK: 0x68,
    S_SET_BLOCK: 0x69,
    S_MULTI_BLOCK: 0x6a,
    S_CHAT: 0x6b,
    S_TIME: 0x6c,
    S_HP: 0x6d,
    S_DEATH: 0x6e,
    S_RESPAWN: 0x6f,
    S_VEH_SPAWN: 0x70,
    S_VEH_STATE: 0x71,
    S_VEH_ENTER: 0x72,
    S_VEH_EXIT: 0x73,
    S_VEH_HP: 0x74,
    S_VEH_DESTROY: 0x75,
    S_SHOT: 0x76,
    S_PROJECTILE: 0x77,
    S_SCREEN: 0xce,
    S_EXPLOSION: 0x78,
    S_TABLIST: 0x79,
    S_FLY: 0x7a,
    S_GIVE: 0x7b,
    S_PONG: 0x7c,
    S_TELEPORT: 0x7d,
    S_BOT_SPAWN_RESULT: 0xcf,
    S_DROP_SPAWN: 0x7e,
    S_DROP_REMOVE: 0x7f,
    S_GAMEMODE: 0x80,
    S_INV_LOAD: 0x83,
    S_PROJ_REMOVE: 0x84,
    S_BALANCE: 0x85,
    S_CHEST: 0x86,
    S_KEEPINV: 0x87,
    S_BOT_SPAWN: 0x88,
    S_BOT_STATE: 0x89,
    S_BOT_HP: 0x8a,
    S_BOT_DESTROY: 0x8b,
    S_RAID_STATUS: 0x8c,
    S_ARMOR: 0x8d,
    S_PROGRESS: 0x8e,
    S_SPEECH: 0x8f,
    S_FURNACE: 0x90,
    S_RAID_LEADERBOARD: 0x91,
    S_SIREN: 0x92,
    S_BACKPACK_SPAWN: 0x93,
    S_BACKPACK: 0x94,
    S_BACKPACK_REMOVE: 0x95,
    S_HELI_CARGO: 0x96,
    S_CARRIER_COOLDOWN: 0x97,
    S_RAID_ZONE: 0x98,
    S_WORLD_OBJECTS: 0x99,
    S_VEH_PAINT: 0x9a,
    S_QUEST_STATUS: 0x9c,
    S_QUEST_POINT: 0x9d,
    S_ITEM_REMOVE: 0x9e,
    S_ANIMAL_SPAWN: 0x9f,
    S_ANIMAL_STATE: 0xa0,
    S_ANIMAL_HP: 0xa1,
    S_ANIMAL_REMOVE: 0xa2,
    S_WEATHER: 0xa3,
    S_LIGHTNING: 0xa4,
    S_ITEM_DURABILITY: 0xa5,
    S_ARMOR_DURABILITY: 0xa6,
    S_KNOCKBACK: 0xa7,
    S_BUCKET_RESULT: 0xa8,
    S_WORLD_SITES: 0xa9,
    S_CONCUSSION: 0xaa,
    S_SMOKE: 0xab,
    S_FRIENDS: 0xac,
    S_ANIMAL_EVENT: 0xad,
    S_ANIMAL_RIDER: 0xae,
    S_FISH: 0xaf,
    S_NUCLEAR_STRIKE: 0xb0,
    S_PLANET: 0xb1,
    S_CROP_PROGRESS: 0xb2,
    S_VEH_SPAWN_RESULT: 0xb3,
    S_MAP_TILE: 0xb4,
    S_SEAT: 0xb5,
    S_REMOTE: 0xb6,
    S_C4: 0xb7,
    S_VOICE: 0xb8,
    S_ANIMATION: 0xb9,
    S_RPG_LOCK: 0xba,
    S_TANK_AIM: 0xbb,
    S_DOWNED: 0xbc,
    S_EGG: 0xbd,
    S_SIGN: 0xbe,
    S_OPERATION: 0xbf,
  },
  R6 = new TextEncoder(),
  S6 = new TextDecoder();
class W {
  constructor(_0x3b6040) {
    const _0x131a65 = _0x5d322a;
    (Z(this, _0x131a65(0x1466), new Uint8Array(0x200)),
      Z(this, _0x131a65(0x1a2e), new DataView(this["buf"][_0x131a65(0x1da)])),
      Z(this, "o", 0x0),
      _0x3b6040 !== void 0x0 && this["u8"](_0x3b6040));
  }
  [_0x5d322a(0x182f)](_0x5a9d29) {
    const _0x29e35e = _0x5d322a;
    if (this["o"] + _0x5a9d29 <= this[_0x29e35e(0x1466)][_0x29e35e(0x18ce)])
      return;
    const _0x39f8a2 = new Uint8Array(
      Math[_0x29e35e(0x1267)](
        this[_0x29e35e(0x1466)][_0x29e35e(0x18ce)] * 0x2,
        this["o"] + _0x5a9d29,
      ),
    );
    (_0x39f8a2[_0x29e35e(0x124)](this["buf"]),
      (this[_0x29e35e(0x1466)] = _0x39f8a2),
      (this["view"] = new DataView(_0x39f8a2["buffer"])));
  }
  ["u8"](_0x380397) {
    return (
      this["need"](0x1),
      this["view"]["setUint8"](this["o"], _0x380397),
      (this["o"] += 0x1),
      this
    );
  }
  ["u16"](_0x179945) {
    const _0x5824ff = _0x5d322a;
    return (
      this[_0x5824ff(0x182f)](0x2),
      this["view"]["setUint16"](this["o"], _0x179945),
      (this["o"] += 0x2),
      this
    );
  }
  ["u32"](_0x4e92a8) {
    const _0x7a46f6 = _0x5d322a;
    return (
      this[_0x7a46f6(0x182f)](0x4),
      this["view"][_0x7a46f6(0x66f)](this["o"], _0x4e92a8 >>> 0x0),
      (this["o"] += 0x4),
      this
    );
  }
  ["i32"](_0x5e75e9) {
    const _0x41a9c0 = _0x5d322a;
    return (
      this["need"](0x4),
      this[_0x41a9c0(0x1a2e)]["setInt32"](this["o"], _0x5e75e9),
      (this["o"] += 0x4),
      this
    );
  }
  [_0x5d322a(0xb27)](_0x41c4fc) {
    const _0x29b011 = _0x5d322a;
    return (
      this[_0x29b011(0x182f)](0x8),
      this["view"][_0x29b011(0x1c9b)](this["o"], _0x41c4fc),
      (this["o"] += 0x8),
      this
    );
  }
  ["f32"](_0x23d739) {
    const _0x4fa08a = _0x5d322a;
    return (
      this[_0x4fa08a(0x182f)](0x4),
      this["view"][_0x4fa08a(0x9b6)](this["o"], _0x23d739),
      (this["o"] += 0x4),
      this
    );
  }
  [_0x5d322a(0x438)](_0x4a3211) {
    const _0x372c8f = _0x5d322a,
      _0x51cd7c = R6[_0x372c8f(0x13c8)](_0x4a3211);
    return (
      this["u16"](_0x51cd7c[_0x372c8f(0x18ce)]),
      this[_0x372c8f(0x182f)](_0x51cd7c[_0x372c8f(0x18ce)]),
      this["buf"]["set"](_0x51cd7c, this["o"]),
      (this["o"] += _0x51cd7c["length"]),
      this
    );
  }
  ["bytes"](_0x2898c6) {
    const _0x51ba29 = _0x5d322a;
    return (
      this[_0x51ba29(0x1ee5)](_0x2898c6[_0x51ba29(0x18ce)]),
      this[_0x51ba29(0x182f)](_0x2898c6[_0x51ba29(0x18ce)]),
      this["buf"]["set"](_0x2898c6, this["o"]),
      (this["o"] += _0x2898c6["length"]),
      this
    );
  }
  [_0x5d322a(0x331)]() {
    const _0x439d8e = _0x5d322a;
    return this[_0x439d8e(0x1466)][_0x439d8e(0x1b42)](0x0, this["o"]);
  }
}
