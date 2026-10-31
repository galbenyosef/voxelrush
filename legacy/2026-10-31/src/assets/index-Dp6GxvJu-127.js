// index-Dp6GxvJu 127 — projectile_kind
// Lines 75672-75692 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function iX(n) {
  switch (n) {
    case PROJECTILE_KIND.GRENADE:
    case PROJECTILE_KIND.GRENADE_40MM:
      return Ft.GRENADE;
    case PROJECTILE_KIND.ROCKET:
      return Ft.ROCKET;
    case PROJECTILE_KIND.SHELL:
      return Ft.SHELL;
    case PROJECTILE_KIND.BOMB:
      return Ft.AIR_BOMB;
    case PROJECTILE_KIND.MISSILE:
      return Ft.MISSILE;
    case PROJECTILE_KIND.TOMAHAWK:
      return Ft.TOMAHAWK;
    case PROJECTILE_KIND.NUCLEAR:
      return Ft.NUCLEAR;
    default:
      return Ft.AUTO;
  }
}
