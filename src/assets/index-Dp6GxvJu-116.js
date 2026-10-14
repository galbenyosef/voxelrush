// index-Dp6GxvJu 116 — append
// Lines 69681-71217 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Mj(n, e) {
  const t = oj(n),
    i = sj();
  let s = 0;
  function o(K) {
    const te = ++s;
    s0("portrait", Ot.character, 257, Ot.custom, !0)
      .then((me) => {
        te === s && (K.src = me);
      })
      .catch(() => {});
  }
  (window.addEventListener("cosmetics-changed", () => {
    const K = document.querySelector("#menu-gold .gold-amount");
    K && (K.textContent = Ot.gold.toLocaleString());
    const te = document.querySelector("#menu-profile img");
    te && o(te);
  }),
    (Mi("menuarmory").onclick = () => Ml("store")),
    (Mi("menusupport").onclick = () => void Hy()),
    (Mi("menurewards").onclick = () => void P4()));
  const a = () =>
    !document.hidden && !Mi("menu").classList.contains("hidden") && h.hidden;
  function r() {
    const K = qY(),
      te = Mi("menurewards-gain"),
      me = Mi("menurewards"),
      xe = K != null && K.daily.claimable ? Kd[K.daily.day - 1] : null;
    if ((me.classList.toggle("ready", !!xe), (te.hidden = !K), !K)) return;
    (te.classList.toggle("wait", !xe),
      (te.innerHTML = xe
        ? xe.case
          ? Zt("Case", "Кейс")
          : `${bs(15)}+${xe.gold}`
        : YY()),
      (te.title = xe
        ? Zt("Today's bonus is waiting", "Сегодняшний бонус ждёт")
        : Zt(
            "Until the next daily bonus",
            "До следующего ежедневного бонуса",
          )));
    const nt = nM(),
      ne = document.querySelector("#menuarmory .mm-new");
    ne &&
      ((ne.textContent = nt
        ? Zt(`${nt} to open`, `Открыть: ${nt}`)
        : U("menuNew")),
      ne.classList.toggle("mm-cases", nt > 0));
  }
  function l() {
    const K = Mi("playbtn");
    let te = K.querySelector(".mm-golden");
    te ||
      ((te = document.createElement("i")),
      (te.className = "mm-golden"),
      K.insertBefore(te, K.querySelector(".mm-arrow")));
    const me = Xl();
    if (((te.hidden = !me), K.classList.toggle("golden", me), me)) {
      const xe = Math.max(1, Math.ceil(vg() / 6e4));
      ((te.innerHTML = `${bs(15)}×${WC().multiplier}<small>${Zt(`${xe} min`, `${xe} мин`)}</small>`),
        (te.title = Zt(
          "Golden hour: battles pay double gold",
          "Золотой час: бои приносят двойное золото",
        )));
    }
  }
  (FC(l),
    setInterval(() => {
      a() && l();
    }, 3e4),
    KY(r),
    window.addEventListener("cosmetics-changed", r),
    setInterval(() => {
      a() && r();
    }, 6e4),
    window.addEventListener("request-account-link", () =>
      oe(Me != null && Me.is_guest ? "link" : "login"),
    ),
    Ze());
  function c() {
    var xe;
    const K = document.querySelector("#menu-profile .mm-who small");
    if (K) {
      const nt = Bm();
      K.textContent =
        (Me != null && Me.is_guest ? U("guestLabel") + " · " : "") +
        nt.querySelector("strong").textContent +
        " · " +
        Math.floor(Fp.xp).toLocaleString() +
        " XP";
    }
    const te = document.querySelector("#menu .mm-side");
    ((xe = te == null ? void 0 : te.querySelector(".account-rank")) == null ||
      xe.remove(),
      Me && (te == null || te.prepend(Bm())));
    const me = document.querySelector(".profile-progress");
    me && me.replaceChildren(Bm());
  }
  (window.addEventListener("progress-changed", c),
    setInterval(() => {
      !document.hidden && !Mi("menu").classList.contains("hidden") && Of();
    }, 15e3),
    setInterval(() => {
      !document.hidden && !Mi("menu").classList.contains("hidden") && T6();
    }, 6e4),
    document.addEventListener("visibilitychange", () => {
      document.hidden || Of();
    }));
  const h = document.createElement("section");
  ((h.id = "server-lobby"), (h.hidden = !0), document.body.append(h));
  const d = document.createElement("dialog");
  ((d.className = "account-dialog"), document.body.append(d));
  let u = "public",
    f = [],
    p = [],
    m = "",
    y = "",
    g = !1,
    b = !1,
    S = !1,
    M = !0,
    x = null,
    T = null,
    A = !1,
    _ = !1,
    C = null,
    R = null,
    L = !1;
  const N = new Set();
  let D = "",
    H = "info";
  function G(K, te, me) {
    ((K.disabled = te),
      K.setAttribute("aria-busy", String(te)),
      me && K.replaceChildren(dt("span", me)));
  }
  function I(K, te = "info") {
    ((Mi("dialog-message").textContent = K),
      (Mi("dialog-message").dataset.kind = te));
  }
  function O(K, te) {
    ((C = K), oe("login"), I(te));
  }
  const F = (K, te = "info") => {
      ((D = K),
        (H = te),
        (Mi("lobby-message").textContent = K),
        (Mi("lobby-message").dataset.kind = te));
    },
    X = (K) =>
      K instanceof Error &&
      !["TimeoutError", "AbortError", "TypeError"].includes(K.name)
        ? K.message
        : U("serviceUnavailable"),
    Q = async (K) => {
      try {
        await K();
      } catch (te) {
        F(X(te), "error");
      }
    };
  function ee(K) {
    F(U(K) + (L ? " " + U("serversUnavailable") : ""), L ? "error" : "success");
  }
  function se() {
    ((C = null), d.close());
  }
  (d.addEventListener("close", () => {
    d.open || ((T = null), x == null || x.focus());
  }),
    d.addEventListener("click", (K) => {
      K.target === d && !A && se();
    }),
    d.addEventListener("cancel", (K) => {
      A ? K.preventDefault() : (C = null);
    }));
  function oe(K) {
    var te;
    (K === "register" && Me != null && Me.is_guest && (K = "link"),
      d.open || (x = document.activeElement),
      (T = K),
      (d.dataset.kind = K),
      J(),
      d.open || d.showModal(),
      (te = d.querySelector("input")) == null || te.focus());
  }
  function J() {
    const K = T;
    if (!K) return;
    const te = K === "register",
      me = K === "link",
      xe = U(
        K === "add"
          ? "addServer"
          : K === "account"
            ? "accountTitle"
            : me
              ? "linkAccount"
              : te
                ? "register"
                : "signIn",
      );
    ((d.innerHTML =
      '<header class="browser-head"><h2 id="account-title"></h2></header><div id="dialog-content"></div><p id="dialog-message" class="lobby-feedback" role="status" aria-live="polite"></p>'),
      (Mi("account-title").textContent = xe),
      d.setAttribute("aria-labelledby", "account-title"));
    const nt = qs(U("closeAria"), "close", !0);
    (nt.classList.add("icon-button"),
      nt.setAttribute("aria-label", U("closeAria")),
      (nt.onclick = se),
      d.querySelector("header").append(nt));
    const ne = Mi("dialog-content"),
      Ee = document.createElement("form");
    Ee.className = "lobby-form";
    const at = (vt, rt, Tt, Yt = "text", jt = "") => {
      const St = dt("label", Tt);
      St.setAttribute("for", vt);
      const li = document.createElement("input");
      return (
        (li.id = vt),
        (li.name = rt),
        (li.type = Yt),
        (li.required = !0),
        jt && li.setAttribute("autocomplete", jt),
        Ee.append(St, li),
        li
      );
    };
    let st;
    const Ut = [],
      xi = (vt, rt) => {
        const Tt = dt("small", "", "auth-field-feedback");
        ((Tt.id = `${vt.id}-feedback`),
          Tt.setAttribute("aria-live", "polite"),
          vt.after(Tt),
          vt.setAttribute(
            "aria-describedby",
            [vt.getAttribute("aria-describedby"), Tt.id]
              .filter(Boolean)
              .join(" "),
          ));
        let Yt = !1;
        const jt = () => {
          Yt = !0;
          const St = rt();
          return (
            (Tt.textContent = St),
            vt.setCustomValidity(St),
            vt.setAttribute("aria-invalid", String(!!St)),
            !St
          );
        };
        (vt.addEventListener("blur", jt),
          vt.addEventListener("input", () => {
            Yt && jt();
          }),
          Ut.push(jt));
      };
    if (K === "add") {
      Ee.id = "lobby-add";
      const vt = at("lobby-name", "name", U("serverName"));
      ((vt.maxLength = 80), (vt.placeholder = U("serverNamePlaceholder")));
      const rt = at("lobby-address", "address", U("serverAddress"));
      ((rt.maxLength = 255),
        (rt.placeholder = U("serverAddressPlaceholder")),
        (rt.spellcheck = !1),
        (st = async () => {
          var Tt;
          (await tn("/me/servers", "PUT", Object.fromEntries(new FormData(Ee))),
            await R,
            await be(),
            se(),
            (u = "saved"),
            (y = ""),
            (m =
              ((Tt = p.find((Yt) => Yt.name === vt.value.trim())) == null
                ? void 0
                : Tt.address) ?? ""),
            fe(),
            ee("serverSaved"));
        }));
    } else if (me && Me != null && Me.is_guest) {
      const vt = Me.username,
        rt = dt("div", "", "guest-link-intro guest-link-rename");
      rt.innerHTML = svgIcon("user");
      const Tt = dt("div", "", "link-names"),
        Yt = dt("strong", "", "link-to");
      (Tt.append(dt("s", vt, "link-from"), dt("i", "→", "link-arrow"), Yt),
        rt.append(dt("small", U("linkTitle")), Tt, dt("p", U("guestLinkHint"))),
        ne.append(rt),
        (Ee.id = "lobby-auth"),
        (Ee.noValidate = !0));
      const jt = at(
        "auth-name",
        "username",
        U("linkChooseName"),
        "text",
        "username",
      );
      ((jt.maxLength = uM),
        (jt.minLength = dM),
        (jt.pattern = K6),
        (jt.autocapitalize = "none"),
        (jt.spellcheck = !1),
        (jt.placeholder = U("linkNamePlaceholder")));
      let St = "",
        li = !0,
        si = 0;
      const on = () => {
          ((Yt.textContent = jt.value.trim() || "…"),
            Yt.classList.toggle("empty", !jt.value.trim()));
        },
        Ke = (Te) =>
          Y6(Te)
            ? /^guest_/i.test(Te) && Te.toLowerCase() !== vt.toLowerCase()
              ? U("linkNameReserved")
              : X6(Te)
                ? U("nameNotAllowed")
                : ""
            : U("usernameHint");
      xi(jt, () => {
        const Te = jt.value.trim();
        return Ke(Te) || (St === Te && !li ? U("linkNameTaken") : "");
      });
      const ot = jt.parentElement.querySelector("#auth-name-feedback");
      (jt.addEventListener("blur", () => {
        St === jt.value.trim() &&
          li &&
          !Ke(St) &&
          (ot.textContent = U("linkNameFree"));
      }),
        jt.addEventListener("input", () => {
          (on(), clearTimeout(si));
          const Te = jt.value.trim();
          ((jt.dataset.state = ""),
            !Ke(Te) &&
              ((ot.textContent = U("linkNameChecking")),
              (jt.dataset.state = "checking"),
              (si = window.setTimeout(async () => {
                try {
                  const ft = await tn(
                    `/auth/username?username=${encodeURIComponent(Te)}`,
                  );
                  if (jt.value.trim() !== Te) return;
                  ((St = Te),
                    (li = ft.available),
                    (ot.textContent = ft.available
                      ? U("linkNameFree")
                      : ft.error || U("linkNameTaken")),
                    (jt.dataset.state = ft.available ? "free" : "taken"),
                    jt.setCustomValidity(ft.available ? "" : ot.textContent),
                    jt.setAttribute("aria-invalid", String(!ft.available)));
                } catch {
                  jt.value.trim() === Te &&
                    ((ot.textContent = ""), (jt.dataset.state = ""));
                }
              }, 380))));
        }),
        on());
      const q = at("auth-email", "email", U("email"), "email", "email");
      ((q.maxLength = V2),
        (q.autocapitalize = "none"),
        (q.spellcheck = !1),
        (q.placeholder = "name@example.com"),
        xi(q, () => (j6(q.value) ? "" : U("emailInvalid"))));
      const ye = at(
        "auth-password",
        "password",
        U("password"),
        "password",
        "new-password",
      );
      ((ye.minLength = hf),
        (ye.maxLength = df),
        (ye.placeholder = U("passwordHint")),
        xi(ye, () =>
          ye.value.length >= hf && ye.value.length <= df
            ? ""
            : U("passwordValidation"),
        ));
      const Ie = dt("div", "", "link-transfers");
      Ie.append(dt("small", U("linkTransfersTitle")));
      const He = dt("div", "", "link-chips");
      for (const Te of U("linkTransfers").split("|")) He.append(dt("span", Te));
      (Ie.append(He),
        Ee.append(
          Ie,
          dt("p", U("guestRetentionNotice"), "guest-save-copy guest-retention"),
        ),
        (st = async () => {
          const Te = Object.fromEntries(new FormData(Ee));
          ((Te.email = fM(String(Te.email))),
            (Te.username = String(Te.username).trim()));
          const ft = await tn("/auth/link", "POST", {
            ...Te,
            ...(ua ? { embed: !0 } : {}),
          });
          (L2(ft.token), dw(ft.user), (S = !1));
          const Pt =
              ft.user.username !== vt
                ? U("accountLinkedRenamed", { name: ft.user.username })
                : U("accountLinked"),
            Gt = C;
          (se(),
            (Mi("menu-error").textContent = Pt),
            h.hidden || F(Pt, "success"),
            Gt && setTimeout(Gt, 0));
        }));
    } else if (K === "account" && Me) {
      const vt = dt("div", "", "profile-skin-card"),
        rt = document.createElement("img"),
        Tt = i0(Ot.character);
      ((rt.alt =
        Ot.character === "custom"
          ? Zt("Your Creation", "Твоё творение")
          : Zt(Tt.name, Tt.ru)),
        s0("character", Ot.character, 257, Ot.custom, !0)
          .then((si) => {
            rt.isConnected && (rt.src = si);
          })
          .catch(() => {}));
      const Yt = dt("div");
      (Yt.append(
        dt("strong", Me.username),
        dt("p", rt.alt),
        dt(
          "span",
          "◈ " +
            Ot.gold.toLocaleString() +
            " " +
            Zt("gold coins", "золотых монет"),
        ),
      ),
        vt.append(rt, Yt),
        ne.append(vt));
      const jt = dt("div", "", "profile-progress");
      if ((jt.append(Bm()), ne.append(jt), Of(!0), Me.is_guest)) {
        const si = dt("div", "", "guest-profile-save");
        si.append(
          dt("small", U("guestLabel")),
          dt("p", U("guestProgressNotice")),
          dt("p", U("guestRetentionNotice"), "guest-retention"),
        );
        const on = qs(U("linkAccount"), "user");
        ((on.id = "profile-link-account"),
          (on.onclick = () => oe("link")),
          si.append(on),
          ne.append(si));
      }
      (Me.email && ne.append(dt("p", Me.email, "lobby-small")),
        ne.append(
          qs(Zt("Character skins & workshop", "Скины персонажа и мастерская")),
        ),
        (ne.lastChild.onclick = () => {
          (d.close(), Ml("character"));
        }),
        ne.append(qs(Zt("Weapon skin inventory", "Инвентарь скинов оружия"))),
        (ne.lastChild.onclick = () => {
          (d.close(), Ml("weapon"));
        }));
      const St = document.createElement("details");
      (St.append(dt("summary", U("changePassword"))),
        (at(
          "current-password",
          "currentPassword",
          U("currentPassword"),
          "password",
          "current-password",
        ).maxLength = 128));
      const li = at(
        "new-password",
        "password",
        U("newPassword"),
        "password",
        "new-password",
      );
      ((li.minLength = hf),
        (li.maxLength = df),
        St.append(Ee),
        Me.is_guest || ne.append(St),
        (st = async () => {
          const si = await tn("/auth/password", "POST", {
            ...Object.fromEntries(new FormData(Ee)),
            ...(ua ? { embed: !0 } : {}),
          });
          (L2(si == null ? void 0 : si.token),
            Ee.reset(),
            I(U("passwordUpdated"), "success"));
        }));
    } else {
      if (K === "login" && Me != null && Me.is_guest) {
        ne.append(dt("p", U("guestSwitchHint"), "guest-save-copy"));
        const Tt = qs(U("linkAccount"), "user");
        ((Tt.id = "signin-link-account"),
          (Tt.onclick = () => oe("link")),
          ne.append(Tt));
      }
      Ee.id = "lobby-auth";
      const vt = at(
        "auth-name",
        "username",
        U(te ? "username" : "loginName"),
        "text",
        "username",
      );
      if (
        ((vt.maxLength = te ? uM : V2),
        (vt.autocapitalize = "none"),
        (vt.spellcheck = !1),
        te)
      ) {
        ((Ee.noValidate = !0), (vt.pattern = K6), (vt.minLength = dM));
        const Tt = dt("small", U("usernameHint"), "lobby-small");
        ((Tt.id = "auth-name-hint"),
          vt.after(Tt),
          vt.setAttribute("aria-describedby", Tt.id),
          xi(vt, () =>
            Y6(vt.value)
              ? X6(vt.value)
                ? U("nameNotAllowed")
                : ""
              : U("usernameHint"),
          ));
        const Yt = at("auth-email", "email", U("email"), "email", "email");
        ((Yt.maxLength = V2),
          (Yt.autocapitalize = "none"),
          (Yt.spellcheck = !1),
          (Yt.placeholder = "name@example.com"),
          xi(Yt, () => (j6(Yt.value) ? "" : U("emailInvalid"))));
      }
      const rt = at(
        "auth-password",
        "password",
        U("password"),
        "password",
        te ? "new-password" : "current-password",
      );
      ((rt.maxLength = df),
        (rt.minLength = te ? hf : 1),
        te &&
          xi(rt, () =>
            rt.value.length >= hf && rt.value.length <= df
              ? ""
              : U("passwordValidation"),
          ),
        te &&
          ((rt.placeholder = U("passwordHint")),
          Ee.append(dt("small", U("passwordHint"), "lobby-small"))),
        (st = async () => {
          const Tt = Object.fromEntries(new FormData(Ee));
          te && (Tt.email = fM(String(Tt.email)));
          const Yt = await tn(te ? "/auth/register" : "/auth/login", "POST", {
            ...Tt,
            ...(ua ? { embed: !0 } : {}),
          });
          (L2(Yt.token), dw(Yt.user), (S = !1), re());
          const jt = C;
          ((C = null),
            d.close(),
            h.hidden || (await R, await be(), F(U("signedIn"), "success")),
            jt && setTimeout(jt, 0));
        }));
    }
    const ri = qs(
      U(
        K === "add"
          ? "saveServer"
          : K === "account"
            ? "changePassword"
            : me
              ? "linkSubmit"
              : te
                ? "register"
                : "signIn",
      ),
    );
    if (
      ((ri.type = "submit"),
      (ri.id = "auth-submit"),
      Ee.append(ri),
      K !== "account" && ne.append(Ee),
      K === "login" || te)
    ) {
      const vt = qs(U(te ? "haveAccount" : "needAccount"), void 0, !0);
      ((vt.id = "auth-toggle"),
        (vt.onclick = () => oe(te ? "login" : "register")),
        ne.append(vt));
    }
    Ee.onsubmit = (vt) => {
      var jt;
      if ((vt.preventDefault(), A)) return;
      if (Ut.map((St) => St()).some((St) => !St)) {
        (jt = Ee.querySelector('[aria-invalid="true"]')) == null || jt.focus();
        return;
      }
      A = !0;
      const rt = ri.textContent,
        Tt = U(
          me
            ? "linkingAccount"
            : K === "add" || K === "account"
              ? "savingChanges"
              : "signingIn",
        );
      (G(ri, !0, Tt), (nt.disabled = !0));
      const Yt = d.querySelector("#auth-toggle");
      (Yt && (Yt.disabled = !0),
        Ee.querySelectorAll("input").forEach((St) => (St.readOnly = !0)),
        I(Tt),
        st()
          .catch((St) => {
            I(X(St), "error");
          })
          .finally(() => {
            ((A = !1),
              G(ri, !1, rt),
              (nt.disabled = !1),
              Yt && (Yt.disabled = !1),
              Ee.querySelectorAll("input").forEach((St) => (St.readOnly = !1)));
          }));
    };
  }
  function re() {
    (Ce(), t(), i(), c(), Of(!0));
    const K = Mi("menu-account");
    if ((K.replaceChildren(), M)) {
      K.append(dt("span", U("profileLoading"), "lobby-small"));
      return;
    }
    if (Me) {
      const te = dt("button", "", "mm-gold");
      ((te.type = "button"),
        (te.id = "menu-gold"),
        (te.innerHTML = `${bs(22, "spin")}<b class="gold-amount">${Ot.gold.toLocaleString()}</b>`),
        (te.title = Zt("Gold · open the store", "Золото · открыть магазин")),
        te.setAttribute("aria-label", te.title),
        (te.onclick = () => Ml("store")));
      const me = dt("button", "", "mm-profile");
      ((me.type = "button"), (me.id = "menu-profile"));
      const xe = document.createElement("img");
      ((xe.alt = ""), (xe.className = "mm-avatar"), o(xe));
      const nt = dt("span", "", "mm-who");
      (nt.append(
        dt("b", Me.username),
        dt(
          "small",
          Me.is_guest ? U("guestLabel") : Zt("View profile", "Профиль"),
        ),
      ),
        me.append(xe, nt),
        (me.onclick = () => oe("account")));
      const ne = qs(U("signOut"), "logout", !0);
      ((ne.id = "menu-logout"),
        ne.classList.add("icon-button"),
        (ne.title = U("signOut")),
        ne.setAttribute("aria-label", U("signOut")),
        (ne.onclick = async () => {
          ne.disabled = !0;
          try {
            (await tn("/auth/logout", "POST"),
              sU(),
              await $x(),
              (p = []),
              re(),
              h.hidden || lt());
          } catch (at) {
            ((Mi("menu-error").textContent = X(at)), (ne.disabled = !1));
          }
        }));
      const Ee = dt("button", "", "mm-hidden");
      if (
        ((Ee.type = "button"),
        (Ee.id = "menu-skins"),
        (Ee.tabIndex = -1),
        Ee.setAttribute("aria-hidden", "true"),
        (Ee.onclick = () => Ml()),
        Me.is_guest)
      ) {
        const at = qs(U("linkAccount"), "user", !0);
        ((at.id = "menu-link-account"),
          at.classList.add("mm-signin"),
          (at.onclick = () => oe("link")));
        const st = qs(U("signIn"), void 0, !0);
        ((st.id = "menu-login"),
          (st.onclick = () => oe("login")),
          K.append(me, at, st, Ee));
      } else K.append(te, me, ne, Ee);
      (c(), C4().catch(() => {}), T6(), ij(a));
    } else if (S) {
      const te = qs(U("retryButton"), "refresh", !0);
      ((te.onclick = () => void et()),
        K.append(dt("span", U("profileUnavailable"), "lobby-small"), te));
    } else {
      const te = qs(U("signIn"), "user", !0);
      ((te.id = "menu-login"), (te.onclick = () => oe("login")));
      const me = dt("button", "", "mm-hidden");
      ((me.type = "button"),
        (me.id = "menu-skins"),
        (me.tabIndex = -1),
        me.setAttribute("aria-hidden", "true"),
        (me.onclick = () => Ml()),
        K.append(
          dt("span", U("playWithoutAccount"), "guest-play-hint"),
          te,
          me,
        ));
    }
  }
  function Ce() {
    var ne, Ee;
    if (
      ((ne = Mi("menu").querySelector("#guest-reminder")) == null ||
        ne.remove(),
      !(Me != null && Me.is_guest) || M)
    )
      return;
    try {
      if (
        localStorage.getItem("vr-guest-played") !== Me.id ||
        Number(localStorage.getItem(`vr-guest-remind-after:${Me.id}`)) >
          Date.now()
      )
        return;
    } catch {
      return;
    }
    const K = dt("aside", "", "guest-reminder");
    ((K.id = "guest-reminder"),
      K.setAttribute("aria-labelledby", "guest-reminder-title"));
    const te = dt("strong", U("guestProgressTitle"));
    te.id = "guest-reminder-title";
    const me = dt("div", "", "guest-reminder-actions"),
      xe = qs(U("linkAccount"), "user");
    ((xe.id = "guest-reminder-link"), (xe.onclick = () => oe("link")));
    const nt = qs(U("later"), void 0, !0);
    ((nt.id = "guest-reminder-later"),
      (nt.onclick = () => {
        try {
          localStorage.setItem(
            `vr-guest-remind-after:${Me.id}`,
            String(Date.now() + 7 * 864e5),
          );
        } catch {}
        K.remove();
      }),
      me.append(xe, nt),
      K.append(
        dt("small", U("guestLabel")),
        te,
        dt("p", U("guestProgressInvite")),
        dt("p", U("guestProgressNotice"), "guest-save-copy"),
        dt("p", U("guestRetentionNotice"), "guest-save-copy guest-retention"),
        me,
      ),
      (Ee = Mi("menu").querySelector(".mm-side")) == null || Ee.prepend(K));
  }
  window.addEventListener("account-changed", re);
  let Re = "all",
    We = "players",
    it = "modes",
    ut = "all",
    gt = null;
  const ve = new Map();
  function Y(K) {
    const te = ve.get(K);
    if (te && performance.now() - te.at < 3e4) return;
    ve.set(K, {
      ms: (te == null ? void 0 : te.ms) ?? null,
      at: performance.now(),
    });
    let me;
    try {
      ((me = new URL(K.replace(/^ws/, "http"))),
        (me.pathname = "/api/server-info"),
        (me.search = ""));
    } catch {
      return;
    }
    const xe = performance.now();
    fetch(me, { signal: AbortSignal.timeout(3500), cache: "no-store" })
      .then((nt) => {
        if (!nt.ok) throw Error();
        ve.set(K, {
          ms: Math.round(performance.now() - xe),
          at: performance.now(),
        });
      })
      .catch(() => ve.set(K, { ms: null, at: performance.now() }))
      .finally(() => {
        h.hidden || Oe();
      });
  }
  const ge = (K) =>
    K == null ? "none" : K < 80 ? "good" : K < 160 ? "ok" : "bad";
  function Le(K) {
    var xe;
    const te = (xe = ve.get(K)) == null ? void 0 : xe.ms,
      me = dt("span", "", `server-ping ${ge(te)}`);
    return (
      (me.dataset.ping = K),
      (me.innerHTML = "<i></i><i></i><i></i><i></i>"),
      me.append(dt("b", te == null ? "—" : `${te} ms`)),
      (me.title = Zt("Ping", "Пинг")),
      me
    );
  }
  function Oe() {
    (h.querySelectorAll("[data-ping]").forEach((K) => {
      var me;
      const te = (me = ve.get(K.dataset.ping)) == null ? void 0 : me.ms;
      ((K.className = `server-ping ${ge(te)}`),
        (K.querySelector("b").textContent = te == null ? "—" : `${te} ms`));
    }),
      it === "modes"
        ? $()
        : (We === "ping" || (!Ve && Qe(Je()) !== m)) && lt());
  }
  let Ve = !1;
  function Qe(K) {
    const te = (xe) => {
      var ne;
      const nt = (ne = ve.get(xe.address)) == null ? void 0 : ne.ms;
      return (
        (xe.online === !1 || Ge(xe) ? -1e6 : 0) +
        (nt == null ? -1e5 : 0) +
        (xe.trusted ? 1e4 : 0) +
        Math.min(1e3, (xe.current_players ?? 0) * 10) -
        Math.min(999, nt ?? 999) / 10
      );
    };
    let me = K[0];
    for (const xe of K) te(xe) > te(me) && (me = xe);
    return (me == null ? void 0 : me.address) ?? "";
  }
  function Je() {
    const K = y.toLowerCase();
    return (u === "public" ? f : p)
      .filter(
        (me) =>
          `${me.name} ${me.address}`.toLowerCase().includes(K) &&
          (ut === "all" || $2(me) === ut) &&
          (Re === "all" ||
            (Re === "official" && me.trusted) ||
            (Re === "active" && (me.current_players ?? 0) > 0) ||
            (Re === "open" && me.online !== !1 && !Ge(me))),
      )
      .sort((me, xe) => {
        var nt, ne;
        return We === "name"
          ? me.name.localeCompare(xe.name)
          : We === "ping"
            ? (((nt = ve.get(me.address)) == null ? void 0 : nt.ms) ?? 9999) -
              (((ne = ve.get(xe.address)) == null ? void 0 : ne.ms) ?? 9999)
            : +(xe.online !== !1) - +(me.online !== !1) ||
              +!!xe.trusted - +!!me.trusted ||
              (xe.current_players ?? 0) - (me.current_players ?? 0);
      });
  }
  async function Z() {
    if (_) return;
    const K = Je().find((te) => te.address === m);
    !K || K.online === !1 || Ge(K) || (await W(K));
  }
  async function W(K) {
    var te;
    if (!_) {
      ((_ = !0), fe());
      try {
        (await ct,
          F(U(Me ? "joiningServer" : "guestJoining", { name: K.name })));
        const me = await _p();
        (F(U("joiningServer", { name: K.name })),
          oM(K.name, K.address),
          (await n(me.username, K.address))
            ? (h.hidden = !0)
            : F(
                Mi("menu-error").textContent || U("serverCheckFailed"),
                "error",
              ));
      } catch (me) {
        F(X(me), "error");
      } finally {
        ((_ = !1),
          (gt = null),
          fe(),
          h.hidden ||
            (te = document.getElementById(
              it === "servers" ? "lobby-join" : "lobby-list-open",
            )) == null ||
            te.focus());
      }
    }
  }
  function ke(K) {
    return (
      lI(
        f.filter((te) => $2(te) === K),
        (te) => {
          var me;
          return (me = ve.get(te.address)) == null ? void 0 : me.ms;
        },
      ) ?? null
    );
  }
  async function Ue(K) {
    if (_) return;
    const te = ke(K);
    if (!te) {
      F(
        Zt(
          `No ${Hm[K].name[0]} server is open right now`,
          `Сейчас нет открытых серверов «${Hm[K].name[1]}»`,
        ),
        "error",
      );
      return;
    }
    ((gt = K), await W(te));
  }
  async function je(K) {
    if (N.has(K.address)) return;
    if (!Me) {
      O(() => void Q(() => je(K)), U("signInToSave"));
      return;
    }
    const te = p.some((me) => me.address === K.address);
    (N.add(K.address), lt(), F(U("savingChanges")));
    try {
      (await tn("/me/servers", te ? "DELETE" : "PUT", {
        address: K.address,
        name: K.name,
      }),
        await R,
        await be(),
        ee(te ? "favoriteRemoved" : "serverSaved"));
    } finally {
      (N.delete(K.address), lt());
    }
  }
  const Ge = (K) =>
      !!K.max_players && (K.current_players ?? 0) >= K.max_players,
    Mt = (K) => /\btdm\b|deathmatch|командный бой/i.test(K.name),
    ht = (K) => /frontline|фронт/i.test(K.name) || Mt(K);
  function lt() {
    if (it === "modes") {
      $();
      return;
    }
    const K = Mi("lobby-servers");
    K.replaceChildren();
    const te = Je();
    if (
      ((!Ve || !te.some((xe) => xe.address === m)) && (m = Qe(te)), !te.length)
    ) {
      const xe = dt("div", "", "browser-empty");
      if (
        ((xe.innerHTML = svgIcon(u === "saved" ? "star" : "servers")),
        xe.append(
          dt(
            "p",
            U(
              !b && g
                ? "loadingServers"
                : y || Re !== "all"
                  ? "noServerResults"
                  : u === "saved"
                    ? "noFavorites"
                    : "noServers",
            ),
          ),
        ),
        u === "saved" && !Me)
      ) {
        const nt = qs(U("signIn"), "user");
        ((nt.onclick = () => oe("login")), xe.append(nt));
      }
      K.append(xe);
    }
    for (const xe of te) {
      Y(xe.address);
      const nt = dt("div", "", "server-row");
      (nt.setAttribute("role", "listitem"),
        (nt.dataset.address = xe.address),
        nt.classList.toggle("selected", m === xe.address),
        nt.classList.toggle("offline", xe.online === !1));
      const ne = qs("", void 0, !0);
      ((ne.className = "server-select"),
        ne.setAttribute("aria-pressed", String(m === xe.address)));
      const Ee = dt("span", "", "server-info"),
        at = dt("strong", xe.name, "server-title");
      (xe.trusted && at.append(dt("em", U("officialServer"), "server-badge")),
        Mt(xe)
          ? at.append(
              dt(
                "em",
                Zt("TEAM DEATHMATCH", "КОМАНДНЫЙ DM"),
                "server-badge battle tdm",
              ),
            )
          : ht(xe) &&
            at.append(
              dt(
                "em",
                Zt("TEAM BATTLE", "КОМАНДНЫЙ БОЙ"),
                "server-badge battle",
              ),
            ),
        Ge(xe) && at.append(dt("em", U("serverFull"), "server-badge full")),
        Ee.append(
          at,
          dt("span", xe.address.replace(/^wss?:\/\//, ""), "server-address"),
        ));
      const st = xe.max_players
          ? Math.min(1, (xe.current_players ?? 0) / xe.max_players)
          : 0,
        Ut = dt("span", "", "server-players");
      Ut.append(
        dt(
          "b",
          xe.online === !1
            ? U("serverOffline")
            : xe.current_players === void 0
              ? "—"
              : `${xe.current_players}/${xe.max_players ?? "—"}`,
        ),
      );
      const xi = dt("i", "", "server-bar");
      (xi.style.setProperty("--fill", String(st)),
        Ut.append(xi),
        ne.replaceChildren(Le(xe.address), Ee, Ut),
        (ne.disabled = _),
        (ne.onclick = () => {
          var rt;
          if (!_) {
            (F(""), (m = xe.address), (Ve = !0));
            for (const Tt of K.querySelectorAll(".server-row")) {
              const Yt = Tt.dataset.address === m;
              (Tt.classList.toggle("selected", Yt),
                (rt = Tt.querySelector(".server-select")) == null ||
                  rt.setAttribute("aria-pressed", String(Yt)));
            }
            he();
          }
        }),
        (ne.ondblclick = Z),
        (ne.onkeydown = (rt) => {
          rt.key === "Enter" &&
            (rt.preventDefault(), (m = xe.address), (Ve = !0), Z());
        }));
      const ri = p.some((rt) => rt.address === xe.address),
        vt = qs(U(ri ? "favoriteRemove" : "favoriteAdd"), "star", !0);
      (vt.classList.add("icon-button"),
        vt.classList.toggle("is-favorite", ri),
        vt.setAttribute("aria-label", vt.textContent),
        (vt.title = vt.textContent),
        vt.setAttribute("aria-pressed", String(ri)),
        G(vt, N.has(xe.address)),
        _ && (vt.disabled = !0),
        (vt.onclick = () => void Q(() => je(xe))),
        nt.append(ne, vt),
        K.append(nt));
    }
    const me = h.querySelector(".lobby-count");
    (me &&
      (me.textContent = Zt(`${te.length} servers`, `Серверов: ${te.length}`)),
      he());
  }
  function B() {
    h.innerHTML = `<div class="lobby-shell lm-shell"><header class="browser-head"><div class="lobby-heading"><small>${Zt("PLAY ONLINE", "ИГРАТЬ ОНЛАЙН")}</small><h1>${Zt("Choose your battle", "Выберите бой")}</h1></div><div class="lm-head-actions"><button class="lobby-button quiet" id="lobby-list-open">${svgIcon("servers")}<span>${Zt("Server list", "Список серверов")}</span></button><button class="lobby-button quiet" id="lobby-close">${svgIcon("back")}<span>${U("backButton")}</span></button></div></header><div class="lm-grid" role="list"></div><p id="lobby-message" class="lobby-feedback" role="status" aria-live="polite"></p></div>`;
    const K = h.querySelector(".lm-grid");
    for (const te of pM) {
      const me = Hm[te],
        xe = dt("button", "", "lm-card");
      ((xe.type = "button"),
        (xe.dataset.mode = te),
        xe.setAttribute("role", "listitem"),
        xe.style.setProperty("--a", me.colors[0]),
        xe.style.setProperty("--b", me.colors[1]));
      const nt = dt("span", "", "lm-art"),
        ne = document.createElement("img");
      ((ne.alt = ""),
        (ne.decoding = "async"),
        (ne.onload = () => nt.classList.add("ready")),
        s0(me.art[0], "", me.art[1], null, !0)
          .then((xi) => {
            ne.src = xi;
          })
          .catch(() => {}),
        nt.append(ne));
      const Ee = dt("span", "", "lm-live");
      Ee.append(dt("i"), dt("b", "—"), dt("span", Zt("playing", "в игре")));
      const at = dt("span", "", "lm-body"),
        st = dt("span", "", "lm-facts");
      for (const xi of me.facts) st.append(dt("em", Zt(...xi)));
      at.append(
        dt("small", Zt(...me.tag), "lm-tag"),
        dt("b", Zt(...me.name), "lm-name"),
        dt("span", Zt(...me.desc), "lm-desc"),
        st,
      );
      const Ut = dt("span", "", "lm-cta");
      ((Ut.innerHTML = svgIcon("play")),
        Ut.append(dt("span", Zt("Play", "Играть"))),
        xe.append(nt, Ee, at, Ut),
        (xe.onclick = () => void Ue(te)),
        K.append(xe));
    }
    ((Mi("lobby-list-open").onclick = () => {
      _ || ((it = "servers"), fe());
    }),
      (Mi("lobby-close").onclick = () => {
        _ || ((h.hidden = !0), Mi("playbtn").focus());
      }),
      F(D, H),
      $());
  }
  function $() {
    for (const K of h.querySelectorAll(".lm-card")) {
      const te = K.dataset.mode,
        me = f.filter((at) => $2(at) === te && at.online !== !1);
      for (const at of me) Y(at.address);
      const xe = me.reduce((at, st) => at + (st.current_players ?? 0), 0),
        nt = me.some((at) => !Ge(at)),
        ne = K.querySelector(".lm-live");
      ((ne.querySelector("b").textContent = b ? xe.toLocaleString() : "—"),
        ne.classList.toggle("none", b && !xe),
        K.classList.toggle("offline", b && !nt),
        (K.disabled = _ || (b && !nt)),
        K.setAttribute("aria-busy", String(gt === te)));
      const Ee = K.querySelector(".lm-cta span");
      Ee.textContent =
        gt === te
          ? U("connectingServer")
          : b && !nt
            ? Zt("Offline", "Нет серверов")
            : Zt("Play", "Играть");
    }
  }
  function he() {
    var xi;
    const K = h.querySelector(".lobby-details");
    if (!K) return;
    const te = Je().find((ri) => ri.address === m),
      me = Mi("lobby-join");
    me.disabled = _ || !te || te.online === !1 || Ge(te);
    const xe = K.querySelector(".lobby-details-body");
    if ((xe.replaceChildren(), !te)) {
      xe.append(dt("p", U("selectServer"), "lobby-small"));
      return;
    }
    xe.append(
      dt(
        "small",
        te.trusted
          ? U("officialServer")
          : Zt("Community server", "Сервер сообщества"),
        "lobby-kicker",
      ),
      dt("h2", te.name),
    );
    const nt = dt(
      "button",
      te.address.replace(/^wss?:\/\//, ""),
      "lobby-address",
    );
    ((nt.type = "button"),
      (nt.title = Zt("Copy address", "Скопировать адрес")),
      (nt.onclick = () => {
        var ri;
        (ri = navigator.clipboard) == null ||
          ri
            .writeText(te.address)
            .then(() => F(Zt("Address copied", "Адрес скопирован"), "success"))
            .catch(() => {});
      }),
      xe.append(nt));
    const ne = dt("div", "", "lobby-stats"),
      Ee = (ri, vt, rt) => {
        const Tt = dt("div");
        (Tt.append(dt("small", ri), dt("b", vt)),
          rt && Tt.append(rt),
          ne.append(Tt));
      },
      at = te.max_players
        ? Math.min(1, (te.current_players ?? 0) / te.max_players)
        : 0,
      st = dt("i", "", "server-bar");
    (st.style.setProperty("--fill", String(at)),
      Ee(
        Zt("Players", "Игроки"),
        te.online === !1
          ? U("serverOffline")
          : `${te.current_players ?? "—"} / ${te.max_players ?? "—"}`,
        st,
      ));
    const Ut = (xi = ve.get(te.address)) == null ? void 0 : xi.ms;
    if (
      (Ee(Zt("Ping", "Пинг"), Ut == null ? "—" : `${Ut} ms`),
      Ee(
        Zt("Status", "Статус"),
        te.online === !1
          ? U("serverOffline")
          : Ge(te)
            ? U("serverFull")
            : Zt("Online", "В сети"),
      ),
      xe.append(ne),
      Mt(te))
    ) {
      const ri = dt("div", "", "lobby-mode");
      (ri.append(
        dt(
          "strong",
          Zt("Team Deathmatch · Sirocco", "Командный бой · Сирокко"),
        ),
        dt(
          "p",
          Zt(
            "15 v 15 on foot in a walled desert town. Rifle, sniper, shotgun, minigun or grenade launcher — the side with more kills in 10 minutes wins. Bots fill the teams and fight like players.",
            "15 на 15 пешком в пустынном городке. Автомат, снайперка, дробовик, миниган или гранатомёт — побеждает команда, убившая больше за 10 минут. Боты добирают составы и воюют как люди.",
          ),
        ),
      ),
        xe.append(ri));
    } else if (ht(te)) {
      const ri = dt("div", "", "lobby-mode");
      (ri.append(
        dt("strong", Zt("Frontline · Conquest", "Линия фронта · Захват")),
        dt(
          "p",
          Zt(
            "Two armies, five flags, tanks and helicopters. Pick a class, take the flags, drain the enemy's tickets. Bots fill the sides, so there is always a battle.",
            "Две армии, пять флагов, танки и вертолёты. Выберите класс, захватывайте флаги и сжигайте очки подкрепления врага. Боты добирают составы — бой есть всегда.",
          ),
        ),
      ),
        xe.append(ri));
    }
    if (!Me || Me.is_guest) {
      const ri = dt("div", "", "lobby-guest-access");
      (ri.append(
        dt("strong", U(Me ? "guestLabel" : "playWithoutAccount")),
        dt("p", U("guestProgressNotice")),
        dt("p", U("guestRetentionNotice"), "guest-retention"),
      ),
        xe.append(ri));
    }
  }
  function fe() {
    if (
      (h.setAttribute("aria-label", U("multiplayerButton")),
      (h.dataset.view = it),
      it === "modes")
    ) {
      B();
      return;
    }
    ((h.innerHTML = `<div class="lobby-shell"><header class="browser-head"><div class="lobby-heading"><small>${Zt("PLAY ONLINE", "ИГРАТЬ ОНЛАЙН")}</small><h1>${U("multiplayerButton")}</h1></div><div class="lobby-tabs" role="tablist" aria-label="${U("multiplayerButton")}"><button id="lobby-public" class="lobby-button quiet" role="tab" aria-selected="${u === "public"}">${svgIcon("servers")}${U("publicServers")}</button><button id="lobby-saved" class="lobby-button quiet" role="tab" aria-selected="${u === "saved"}">${svgIcon("star")}${U("favoriteServers")}</button></div><div class="lm-head-actions lm-list-actions"><button class="lobby-button quiet" id="lobby-modes-open">${svgIcon("back")}<span>${Zt("Modes", "Режимы")}</span></button><button class="lobby-button quiet" id="lobby-close">${svgIcon("close")}<span>${Zt("Menu", "Меню")}</span></button></div></header>
    <div class="lobby-modes-filter" role="group" aria-label="${Zt("Game mode", "Режим игры")}"></div>
    <div class="lobby-main"><section class="lobby-list"><div class="browser-toolbar"><input id="lobby-search" type="search" aria-label="${U("searchServers")}" placeholder="${U("searchServers")}"><div class="lobby-filters" role="group" aria-label="${Zt("Filter", "Фильтр")}"></div><select id="lobby-sort" aria-label="${Zt("Sort", "Сортировка")}"><option value="players">${Zt("Most players", "Больше игроков")}</option><option value="ping">${Zt("Lowest ping", "Меньший пинг")}</option><option value="name">${Zt("Name", "По названию")}</option></select></div>
    <div class="lobby-columns" aria-hidden="true"><span>${Zt("Ping", "Пинг")}</span><span>${Zt("Server", "Сервер")}</span><span>${Zt("Players", "Игроки")}</span><span class="lobby-count"></span></div>
    <div id="lobby-servers" role="list" aria-label="${U("multiplayerButton")}"></div></section>
    <aside class="lobby-details"><div class="lobby-details-body"></div><p id="lobby-message" class="lobby-feedback" role="status" aria-live="polite"></p><button id="lobby-join" class="lobby-button">${svgIcon("play")}${U("joinServer")}</button><div class="lobby-secondary"><button id="lobby-add-open" class="lobby-button quiet">${svgIcon("plus")}${U("addServer")}</button><button id="lobby-refresh" class="lobby-button quiet">${svgIcon("refresh")}${U("refreshServers")}</button></div></aside></div></div>`),
      (Q6("lobby-search").value = y));
    const K = h.querySelector(".lobby-filters");
    for (const [xe, nt] of [
      ["all", Zt("All", "Все")],
      ["official", U("officialServer")],
      ["active", Zt("With players", "С игроками")],
      ["open", Zt("Not full", "Есть места")],
    ]) {
      const ne = dt("button", nt, "lobby-chip" + (Re === xe ? " active" : ""));
      ((ne.type = "button"),
        ne.setAttribute("aria-pressed", String(Re === xe)),
        (ne.onclick = () => {
          ((Re = xe),
            K.querySelectorAll(".lobby-chip").forEach((Ee) => {
              (Ee.classList.toggle("active", Ee === ne),
                Ee.setAttribute("aria-pressed", String(Ee === ne)));
            }),
            lt());
        }),
        K.append(ne));
    }
    const te = h.querySelector(".lobby-modes-filter");
    for (const xe of ["all", ...pM]) {
      const nt =
          xe === "all" ? Zt("All modes", "Все режимы") : Zt(...Hm[xe].name),
        ne = dt(
          "button",
          nt,
          "lobby-chip lobby-mode-chip" + (ut === xe ? " active" : ""),
        );
      ((ne.type = "button"),
        (ne.dataset.mode = xe),
        ne.setAttribute("aria-pressed", String(ut === xe)),
        (ne.onclick = () => {
          ((ut = xe),
            te.querySelectorAll(".lobby-chip").forEach((Ee) => {
              (Ee.classList.toggle("active", Ee === ne),
                Ee.setAttribute("aria-pressed", String(Ee === ne)));
            }),
            (Ve = !1),
            lt());
        }),
        te.append(ne));
    }
    Mi("lobby-modes-open").onclick = () => {
      _ || ((it = "modes"), fe());
    };
    const me = Mi("lobby-sort");
    ((me.value = We),
      (me.onchange = () => {
        ((We = me.value), lt());
      }),
      (Mi("lobby-close").onclick = () => {
        _ || ((h.hidden = !0), Mi("playbtn").focus());
      }),
      (Mi("lobby-refresh").onclick = () => {
        (ve.clear(),
          F(U("loadingServers")),
          Q(async () => {
            (await be(), H !== "error" && F(U("serversUpdated"), "success"));
          }));
      }),
      (Mi("lobby-join").onclick = Z),
      (Mi("lobby-add-open").onclick = () =>
        Me ? oe("add") : O(() => oe("add"), U("signInToSave"))),
      (Mi("lobby-search").oninput = () => {
        ((y = Q6("lobby-search").value), lt());
      }));
    for (const xe of ["public", "saved"])
      Mi("lobby-" + xe).onclick = () => {
        ((u = xe), fe(), Mi("lobby-" + xe).focus());
      };
    (lt(),
      F(D, H),
      _ &&
        (h
          .querySelectorAll("button,input,select")
          .forEach((xe) => (xe.disabled = !0)),
        G(Mi("lobby-join"), !0, U("connectingServer"))),
      G(Mi("lobby-refresh"), g, U(g ? "loadingServers" : "refreshServers")),
      (Mi("lobby-refresh").disabled = g || _),
      Mi("lobby-servers").setAttribute("aria-busy", String(g)));
  }
  function be() {
    return (
      R ||
      ((R = Se().finally(() => {
        R = null;
      })),
      R)
    );
  }
  async function Se() {
    var te, me;
    if (g) return;
    g = !0;
    const K = () => document.getElementById("lobby-refresh");
    {
      const xe = K();
      xe && G(xe, !0, U("loadingServers"));
    }
    ((te = document.getElementById("lobby-servers")) == null ||
      te.setAttribute("aria-busy", "true"),
      b || (lt(), F(U("loadingServers"))));
    try {
      const [xe, nt] = await Promise.allSettled([
        tn("/servers"),
        Me ? tn("/me/servers") : Promise.resolve({ servers: [] }),
      ]);
      (xe.status === "fulfilled" && (f = xe.value.servers),
        nt.status === "fulfilled" && (p = nt.value.servers),
        (b = !0),
        (L = xe.status === "rejected" || nt.status === "rejected"),
        L
          ? F(U("serversUnavailable"), "error")
          : D === U("loadingServers") && F(""),
        lt());
    } finally {
      g = !1;
      const xe = K();
      (xe && (G(xe, !1, U("refreshServers")), (xe.disabled = _)),
        (me = document.getElementById("lobby-servers")) == null ||
          me.setAttribute("aria-busy", "false"));
    }
  }
  async function et() {
    ((M = !0), re());
    try {
      (await $x(), (S = !1));
    } catch {
      S = !0;
    } finally {
      ((M = !1), re());
    }
  }
  function Ze() {
    const K = Mi("menu-featured");
    K.replaceChildren();
    const te = uo("royal"),
      me = RARITIES[te.rarity],
      xe = _s.mythos,
      nt = dt("button", "", "mm-featured");
    ((nt.type = "button"), nt.style.setProperty("--r", me.color));
    const ne = document.createElement("img");
    ((ne.alt = ""),
      (ne.className = "mm-featured-img"),
      s0("weapon", te.id, 257)
        .then((st) => (ne.src = st))
        .catch(() => {}));
    const Ee = dt("span", "", "mm-featured-info");
    Ee.append(
      dt(
        "small",
        Zt(
          "FEATURED · " + xe.name.toUpperCase(),
          "НОВИНКА · " + xe.ru.toUpperCase(),
        ),
      ),
      dt("b", `AK-47 | ${Zt(te.name, te.ru)}`),
      dt("em", Zt(me.en, me.ru)),
    );
    const at = dt(
      "span",
      Zt("Open the Armory →", "Открыть Арсенал →"),
      "mm-featured-cta",
    );
    (nt.append(dt("span", "", "mm-featured-glow"), ne, Ee, at),
      (nt.onclick = () => Ml("cases")),
      K.append(nt));
  }
  fe();
  const ct = et();
  async function ae(K, te = U("rejoining", { name: K.name })) {
    const me = Date.now() + 15e4;
    e == null || e(te, K.name);
    try {
      await ct;
      const xe = await _p();
      for (; Date.now() < me;) {
        const nt = new URL(K.address.replace(/^ws/, "http"));
        if (
          ((nt.pathname = "/api/server-info"),
          (nt.search = ""),
          await fetch(nt, {
            cache: "no-store",
            signal: AbortSignal.timeout(4e3),
          }).then(
            (Ee) => Ee.ok,
            () => !1,
          ))
        ) {
          if ((oM(K.name, K.address), await n(xe.username, K.address))) return;
          break;
        }
        (e == null || e(U("updateWaitingServer"), K.name),
          await new Promise((Ee) => setTimeout(Ee, 2e3)));
      }
    } catch (xe) {
      Mi("menu-error").textContent = X(xe);
    }
    (Mi("menu-error").textContent ||
      (Mi("menu-error").textContent = U("serverCheckFailed")),
      e == null || e(null));
  }
  const qe = gj(location.search, ua);
  {
    const K = oY();
    K ? ae(K) : qe.automatic && Ae();
  }
  async function Ae() {
    e == null || e(U("loadingWorld"));
    const K = new URLSearchParams(location.search);
    if ((K.has("server") && !qe.address) || (K.has("mode") && !qe.mode)) {
      ((Mi("menu-error").textContent = U("serverCheckFailed")),
        e == null || e(null));
      return;
    }
    let te = qe.address,
      me = "Voxel Rush";
    if (!te) {
      try {
        const { servers: xe } = await tn("/servers"),
          nt = qe.mode
            ? bj(xe, qe.mode)
            : (xe.find((ne) => ne.online && ne.trusted) ??
              xe.find((ne) => ne.online));
        nt && ((te = nt.address), (me = nt.name));
      } catch {}
      if (!te && qe.mode) {
        const xe = rI(qe.mode);
        if (!xe) {
          ((Mi("menu-error").textContent = U("modeUnavailable", {
            mode: qe.mode,
          })),
            e == null || e(null));
          return;
        }
        ({ address: te, name: me } = xe);
      }
    }
    await ae(
      { address: te || "wss://dev-server.voxelrush.app", name: me },
      U("embedJoining", { name: me }),
    );
  }
  return (
    Vo(() => {
      (re(), fe(), Ze(), d.open && !A && J());
    }),
    setInterval(() => {
      !h.hidden && !d.open && !_ && !N.size && Q(be);
    }, 15e3),
    window.addEventListener(
      "keydown",
      (K) => {
        K.key === "Escape" &&
          !h.hidden &&
          !d.open &&
          (K.preventDefault(),
          K.stopImmediatePropagation(),
          Mi("lobby-close").click());
      },
      !0,
    ),
    () => {
      ((it = "modes"),
        fe(),
        (h.hidden = !1),
        F(""),
        Q(be),
        Mi("lobby-close").focus());
    }
  );
}
