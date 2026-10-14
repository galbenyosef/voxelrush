// index-Dp6GxvJu 110 — queryselector
// Lines 67867-68007 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
async function ij(n) {
  if (!Me) {
    Fi = null;
    for (const s of $y) s();
    return;
  }
  if ((await pu(), WY(), !Fi)) return;
  if (
    !Fi.install.done &&
    u0() &&
    n() &&
    !document.querySelector("dialog[open]")
  ) {
    Ky();
    return;
  }
  if (ua || !Fi.daily.claimable) return;
  const e = DY(Date.now());
  let t = "";
  try {
    t = localStorage.getItem(W6) ?? "";
  } catch {
    return;
  }
  let i = !1;
  try {
    i =
      localStorage.getItem("vr-play-seconds") !== null ||
      localStorage.getItem("vr-guest-played") !== null ||
      !Me.is_guest;
  } catch {}
  t === e ||
    !i ||
    window.setTimeout(() => {
      if (!(
        !n() ||
        document.querySelector("dialog[open]") ||
        !(Fi != null && Fi.daily.claimable)
      )) {
        try {
          localStorage.setItem(W6, e);
        } catch {}
        P4(!0);
      }
    }, 900);
}
typeof window < "u" &&
  (window.addEventListener("vr-app-installed", () => {
    Me && Ky();
  }),
  window.addEventListener("vr-install-available", () => {
    Lt != null && Lt.open && !Qs && !Lt.querySelector(".sr-reward") && Ur();
  }),
  FC(() => {
    Lt != null && Lt.open && !Qs && !Lt.querySelector(".sr-reward") && Ur();
  }),
  window.addEventListener("vr-push-confirmed", () => {
    Qs ||
      pu().then(() => {
        Lt != null && Lt.open && !Lt.querySelector(".sr-reward") && Ur();
      });
  }));
const bl = 10,
  cf = [
    "#58dfc0",
    "#65b8ff",
    "#b89bff",
    "#ffaf63",
    "#ff8298",
    "#efdc79",
    "#b1df78",
    "#e7eef8",
  ],
  V6 = [
    "shield",
    "falcon",
    "wolf",
    "star",
    "bolt",
    "crown",
    "target",
    "mountain",
  ],
  nj = [
    "#65cfff",
    "#ffbc64",
    "#bb9dff",
    "#68e5a2",
    "#ff869e",
    "#f5e575",
    "#e09aff",
    "#80e2df",
    "#c6d997",
    "#d4b7a2",
  ],
  ip = (n) => nj[Math.max(0, Math.min(bl - 1, n))],
  W2 = (n) =>
    "#" +
    ip(n)
      .slice(1)
      .match(/../g)
      .map((t) =>
        Math.round(parseInt(t, 16) * 0.78 + 255 * 0.22)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("");
let Ks = { squad: null, incoming: [], outgoing: [] };
const Vt = (n, e) => (SETTINGS.language === "en" ? n : e),
  $6 = {
    shield: ["Shield", "Щит"],
    falcon: ["Falcon", "Сокол"],
    wolf: ["Wolf", "Волк"],
    star: ["Star", "Звезда"],
    bolt: ["Lightning", "Молния"],
    crown: ["Crown", "Корона"],
    target: ["Target", "Мишень"],
    mountain: ["Mountain", "Гора"],
  },
  q6 = {
    shield: "M12 2 21 6v6c0 5-9 10-9 10S3 17 3 12V6Zm-5 9 4 4 6-7",
    falcon: "m2 6 10 4 10-4-6 8-4 7-4-7Zm4 0 6-3 6 3",
    wolf: "m4 3 5 5h6l5-5-1 13-7 6-7-6Zm4 10 2 1m4 0 2-1m-6 5h4",
    star: "m12 2 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1Z",
    bolt: "m14 2-9 12h7l-2 8 9-13h-7Z",
    crown: "m3 5 5 5 4-7 4 7 5-5-2 14H5Zm3 18h12",
    target:
      "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 3v2",
    mountain: "m2 20 8-16 5 9 3-5 5 12Zm4-8 4 2 3-3",
  };
function sb(n) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${q6[n] ?? q6.shield}"/></svg>`;
}
const _t = (n, e = "", t = "") => {
    const i = document.createElement(n);
    return ((i.className = e), (i.textContent = t), i);
  },
  gr = (n, e, t = "sq-button") => {
    const i = _t("button", t, n);
    return ((i.type = "button"), (i.onclick = e), i);
  };
