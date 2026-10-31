// index-BeUlFSPp 152 — grenade
// Lines 83481-83501 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function kie(s) {
  switch (s) {
    case mt.GRENADE:
    case mt.GRENADE_40MM:
      return Wt.GRENADE;
    case mt.ROCKET:
      return Wt.ROCKET;
    case mt.SHELL:
      return Wt.SHELL;
    case mt.BOMB:
      return Wt.AIR_BOMB;
    case mt.MISSILE:
      return Wt.MISSILE;
    case mt.TOMAHAWK:
      return Wt.TOMAHAWK;
    case mt.NUCLEAR:
      return Wt.NUCLEAR;
    default:
      return Wt.AUTO;
  }
}
