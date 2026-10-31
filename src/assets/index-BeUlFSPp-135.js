// index-BeUlFSPp 135 — queryselector
// Lines 76830-77034 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function NT(s) {
  if (!vi) return;
  vi.querySelector(".sr-reward")?.remove();
  const e = bN("div", "sr-reward rw-reveal");
  if (
    (e.setAttribute("role", "alertdialog"),
    e.setAttribute("aria-label", ti("Reward", "Награда")),
    s.kind === "gold")
  ) {
    const i = Array.from({ length: 14 }, (l, c) => {
      const h = (c / 14) * Math.PI * 2 + Math.random() * 0.3,
        d = 110 + Math.random() * 80;
      return `<i style="--x:${(Math.cos(h) * d).toFixed(0)}px;--y:${(Math.sin(h) * d * 0.8).toFixed(0)}px;--d:${(Math.random() * 0.25).toFixed(2)}s;--s:${(0.6 + Math.random() * 0.6).toFixed(2)}">${xn(22)}</i>`;
    }).join("");
    e.innerHTML = `<div class="sr-reward-card">
      <div class="sr-burst"><div class="sr-rays"></div><div class="sr-coins">${i}</div><div class="sr-big-coin">${xn(96)}</div></div>
      <small>${s.label}</small>
      <b class="sr-amount">+0</b>
      <span class="sr-amount-label">${ti("gold coins", "золотых монет")}</span>
      ${s.note ? `<p class="rw-note">${s.note}</p>` : ""}
      <button type="button" class="sr-primary sr-collect">${ti("Collect", "Забрать")}</button>
    </div>`;
    const n = e.querySelector(".sr-amount"),
      o = performance.now(),
      a = 900,
      r = (l) => {
        const c = Math.min(1, (l - o) / a),
          h = 1 - Math.pow(1 - c, 3);
        ((n.textContent = "+" + Wv(s.gold * h)),
          c < 1 && e.isConnected
            ? requestAnimationFrame(r)
            : (n.textContent = "+" + Wv(s.gold)));
      };
    requestAnimationFrame(r);
  } else {
    const i = Tn[s.collection];
    ((e.innerHTML = `<div class="sr-reward-card rw-case-card">
      <div class="sr-burst"><div class="sr-rays"></div>${yN(s.collection, "big")}</div>
      <small>${s.label}</small>
      <b class="rw-case-name">${i ? ti(i.name, i.ru) : ti("Case", "Кейс")}</b>
      <p class="rw-note">${ti("It is in your Armory inventory. Open it now or keep it for later.", "Он в инвентаре Арсенала. Открой сейчас или оставь на потом.")}</p>
      <div class="rw-reveal-actions">
        <button type="button" class="sr-primary rw-open-case">${ti("Open now", "Открыть сейчас")}</button>
        <button type="button" class="rw-later sr-collect">${ti("Later", "Позже")}</button>
      </div>
    </div>`),
      (e.querySelector(".rw-open-case").onclick = () => {
        (e.remove(),
          vi.classList.remove("revealing"),
          vi.close(),
          oN(s.collection));
      }));
  }
  ((vi.scrollTop = 0),
    vi.classList.add("revealing"),
    vi.append(e),
    dd(),
    e.addEventListener("click", (i) => {
      i.target === e && X4();
    }));
  const t = e.querySelector(".sr-collect");
  ((t.onclick = X4), (e.querySelector(".rw-open-case") ?? t).focus());
}
const Mk = "vr-daily-auto";
async function dte(s) {
  if (!qe) {
    bs = null;
    for (const n of n3) n();
    return;
  }
  if ((await Wf(), ete(), !bs)) return;
  if (
    !bs.install.done &&
    hd() &&
    s() &&
    !document.querySelector("dialog[open]")
  ) {
    a3();
    return;
  }
  if (jo || !bs.daily.claimable) return;
  const e = Kee(Date.now());
  let t = "";
  try {
    t = localStorage.getItem(Mk) ?? "";
  } catch {
    return;
  }
  let i = !1;
  try {
    i =
      localStorage.getItem("vr-play-seconds") !== null ||
      localStorage.getItem("vr-guest-played") !== null ||
      !qe.is_guest;
  } catch {}
  t === e ||
    !i ||
    window.setTimeout(() => {
      if (!(
        !s() ||
        document.querySelector("dialog[open]") ||
        !bs?.daily.claimable
      )) {
        try {
          localStorage.setItem(Mk, e);
        } catch {}
        OT(!0);
      }
    }, 900);
}
typeof window < "u" &&
  (window.addEventListener("vr-app-installed", () => {
    qe && a3();
  }),
  window.addEventListener("vr-install-available", () => {
    vi?.open && !wo && !vi.querySelector(".sr-reward") && Ol();
  }),
  ZP(() => {
    vi?.open && !wo && !vi.querySelector(".sr-reward") && Ol();
  }),
  window.addEventListener("vr-push-confirmed", () => {
    wo ||
      Wf().then(() => {
        vi?.open && !vi.querySelector(".sr-reward") && Ol();
      });
  }));
const ac = 10,
  Bp = [
    "#58dfc0",
    "#65b8ff",
    "#b89bff",
    "#ffaf63",
    "#ff8298",
    "#efdc79",
    "#b1df78",
    "#e7eef8",
  ],
  Sk = [
    "shield",
    "falcon",
    "wolf",
    "star",
    "bolt",
    "crown",
    "target",
    "mountain",
  ],
  ute = [
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
  U1 = (s) => ute[Math.max(0, Math.min(ac - 1, s))],
  By = (s) =>
    "#" +
    U1(s)
      .slice(1)
      .match(/../g)
      .map((t) =>
        Math.round(parseInt(t, 16) * 0.78 + 255 * 0.22)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("");
let fo = { squad: null, incoming: [], outgoing: [] };
const Kt = (s, e) => I(s, e),
  Ek = {
    shield: ["Shield", "Щит"],
    falcon: ["Falcon", "Сокол"],
    wolf: ["Wolf", "Волк"],
    star: ["Star", "Звезда"],
    bolt: ["Lightning", "Молния"],
    crown: ["Crown", "Корона"],
    target: ["Target", "Мишень"],
    mountain: ["Mountain", "Гора"],
  },
  Ak = {
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
function Aw(s) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ak[s] ?? Ak.shield}"/></svg>`;
}
const Ct = (s, e = "", t = "") => {
    const i = document.createElement(s);
    return ((i.className = e), (i.textContent = t), i);
  },
  ll = (s, e, t = "sq-button") => {
    const i = Ct("button", t, s);
    return ((i.type = "button"), (i.onclick = e), i);
  };
