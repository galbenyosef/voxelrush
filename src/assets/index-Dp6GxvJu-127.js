// index-Dp6GxvJu 127 — grenade
// Lines 75672-75692 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function iX(n) {
  switch (n) {
    case pt.GRENADE:
    case pt.GRENADE_40MM:
      return Ft.GRENADE;
    case pt.ROCKET:
      return Ft.ROCKET;
    case pt.SHELL:
      return Ft.SHELL;
    case pt.BOMB:
      return Ft.AIR_BOMB;
    case pt.MISSILE:
      return Ft.MISSILE;
    case pt.TOMAHAWK:
      return Ft.TOMAHAWK;
    case pt.NUCLEAR:
      return Ft.NUCLEAR;
    default:
      return Ft.AUTO;
  }
}
