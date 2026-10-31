// index-BeUlFSPp 142 — append
// Lines 78830-80671 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Vte(s, e) {
  const t = pte(s),
    i = fte();
  let n = 0;
  function o(ce) {
    const Se = ++n;
    vr("portrait", Lt.character, 257, Lt.custom, !0)
      .then((Qe) => {
        Se === n && (ce.src = Qe);
      })
      .catch(() => {});
  }
  (window.addEventListener("cosmetics-changed", () => {
    const ce = document.querySelector("#menu-gold .gold-amount");
    ce && (ce.textContent = Lt.gold.toLocaleString());
    const Se = document.querySelector("#menu-profile img");
    Se && o(Se);
  }),
    (mi("menuarmory").onclick = () => lc("store")),
    (mi("menusupport").onclick = () => void Z5()),
    (mi("menurewards").onclick = () => void OT()));
  const a = () =>
    !document.hidden && !mi("menu").classList.contains("hidden") && d.hidden;
  function r() {
    const ce = tte(),
      Se = mi("menurewards-gain"),
      Qe = mi("menurewards"),
      Ue = ce?.daily.claimable ? pf[ce.daily.day - 1] : null;
    if ((Qe.classList.toggle("ready", !!Ue), (Se.hidden = !ce), !ce)) return;
    (Se.classList.toggle("wait", !Ue),
      (Se.innerHTML = Ue
        ? Ue.case
          ? Vt("Case", "Кейс")
          : `${xn(15)}+${Ue.gold}`
        : ste()),
      (Se.title = Ue
        ? Vt("Today's bonus is waiting", "Сегодняшний бонус ждёт")
        : Vt(
            "Until the next daily bonus",
            "До следующего ежедневного бонуса",
          )));
    const vt = Uv(),
      X = document.querySelector("#menuarmory .mm-new");
    X &&
      ((X.textContent = vt
        ? Vt(`${vt} to open`, `Открыть: ${vt}`)
        : z("menuNew")),
      X.classList.toggle("mm-cases", vt > 0));
  }
  function l() {
    const ce = mi("playbtn");
    let Se = ce.querySelector(".mm-golden");
    Se ||
      ((Se = document.createElement("i")),
      (Se.className = "mm-golden"),
      ce.insertBefore(Se, ce.querySelector(".mm-arrow")));
    const Qe = Uc();
    if (((Se.hidden = !Qe), ce.classList.toggle("golden", Qe), Qe)) {
      const Ue = Math.max(1, Math.ceil(vv() / 6e4));
      ((Se.innerHTML = `${xn(15)}×${JP().multiplier}<small>${Vt(`${Ue} min`, `${Ue} мин`)}</small>`),
        (Se.title = Vt(
          "Golden hour: battles pay double gold",
          "Золотой час: бои приносят двойное золото",
        )));
    }
  }
  (ZP(l),
    setInterval(() => {
      a() && l();
    }, 3e4),
    ite(r),
    window.addEventListener("cosmetics-changed", r),
    setInterval(() => {
      a() && r();
    }, 6e4),
    window.addEventListener("request-account-link", () =>
      oe(qe?.is_guest ? "link" : "login"),
    ),
    Fe());
  const c = vee(a);
  da(c);
  function h() {
    const ce = document.querySelector("#menu-profile .mm-who small");
    if (ce) {
      const Ue = dm(Gf.xp),
        vt = document.createElement("img");
      ((vt.className = "mm-rank-badge"),
        (vt.src = Nd(Ue.index)),
        (vt.alt = ""),
        ce.replaceChildren(
          vt,
          document.createTextNode(
            (qe?.is_guest ? z("guestLabel") + " · " : "") +
              I(Ue.rank.nameEn, Ue.rank.name),
          ),
        ),
        (ce.title = Math.floor(Gf.xp).toLocaleString() + " XP"));
    }
    const Se = document.querySelector("#menu .mm-side");
    (Se?.querySelector(".account-rank")?.remove(), qe && Se?.prepend(Ew()));
    const Qe = document.querySelector(".profile-progress");
    Qe && Qe.replaceChildren(Ew());
  }
  (window.addEventListener("progress-changed", h),
    setInterval(() => {
      !document.hidden && !mi("menu").classList.contains("hidden") && u1();
    }, 15e3),
    setInterval(() => {
      !document.hidden && !mi("menu").classList.contains("hidden") && j8();
    }, 6e4),
    document.addEventListener("visibilitychange", () => {
      document.hidden || u1();
    }));
  const d = document.createElement("section");
  ((d.id = "server-lobby"), (d.hidden = !0), document.body.append(d));
  const u = document.createElement("dialog");
  ((u.className = "account-dialog"), document.body.append(u));
  let f = "public",
    p = [],
    m = [],
    g = "",
    y = "",
    b = !1,
    S = !1,
    M = !1,
    E = !0,
    A = null,
    T = null,
    x = !1,
    R = !1,
    _ = null,
    C = null,
    P = !1;
  const O = new Set();
  let B = "",
    H = "info";
  function D(ce, Se, Qe) {
    ((ce.disabled = Se),
      ce.setAttribute("aria-busy", String(Se)),
      Qe && ce.replaceChildren(rt("span", Qe)));
  }
  function U(ce, Se = "info") {
    ((mi("dialog-message").textContent = ce),
      (mi("dialog-message").dataset.kind = Se));
  }
  function W(ce, Se) {
    ((_ = ce), oe("login"), U(Se));
  }
  const J = (ce, Se = "info") => {
      ((B = ce),
        (H = Se),
        (mi("lobby-message").textContent = ce),
        (mi("lobby-message").dataset.kind = Se));
    },
    j = (ce) =>
      ce instanceof Error &&
      !["TimeoutError", "AbortError", "TypeError"].includes(ce.name)
        ? ce.message
        : z("serviceUnavailable"),
    ne = async (ce) => {
      try {
        await ce();
      } catch (Se) {
        J(j(Se), "error");
      }
    };
  function ge(ce) {
    J(
      z(ce) + (P ? " " + z("serversUnavailable") : ""),
      P ? "error" : "success",
    );
  }
  function be() {
    ((_ = null), u.close());
  }
  (u.addEventListener("close", () => {
    u.open || ((T = null), A?.focus());
  }),
    u.addEventListener("click", (ce) => {
      ce.target === u && !x && be();
    }),
    u.addEventListener("cancel", (ce) => {
      x ? ce.preventDefault() : (_ = null);
    }));
  function oe(ce) {
    (ce === "register" && qe?.is_guest && (ce = "link"),
      u.open || (A = document.activeElement),
      (T = ce),
      (u.dataset.kind = ce),
      he(),
      u.open || u.showModal(),
      u.querySelector("input")?.focus());
  }
  function he() {
    const ce = T;
    if (!ce) return;
    const Se = ce === "register",
      Qe = ce === "link",
      Ue = z(
        ce === "add"
          ? "addServer"
          : ce === "account"
            ? "accountTitle"
            : Qe
              ? "linkAccount"
              : Se
                ? "register"
                : "signIn",
      );
    ((u.innerHTML =
      '<header class="browser-head"><h2 id="account-title"></h2></header><div id="dialog-content"></div><p id="dialog-message" class="lobby-feedback" role="status" aria-live="polite"></p>'),
      (mi("account-title").textContent = Ue),
      u.setAttribute("aria-labelledby", "account-title"));
    const vt = Hn(z("closeAria"), "close", !0);
    (vt.classList.add("icon-button"),
      vt.setAttribute("aria-label", z("closeAria")),
      (vt.onclick = be),
      u.querySelector("header").append(vt));
    const X = mi("dialog-content"),
      _e = document.createElement("form");
    _e.className = "lobby-form";
    const je = (Be, yt, xt, $ = "text", de = "") => {
      const Ee = rt("label", xt);
      Ee.setAttribute("for", Be);
      const Pe = document.createElement("input");
      return (
        (Pe.id = Be),
        (Pe.name = yt),
        (Pe.type = $),
        (Pe.required = !0),
        de && Pe.setAttribute("autocomplete", de),
        _e.append(Ee, Pe),
        Pe
      );
    };
    let ft;
    const Pt = [],
      Ft = (Be, yt) => {
        const xt = Ote() && !(Be === "connect" && qe?.apple),
          $ = _te() && !(Be === "connect" && qe?.google);
        if (!xt && !$) return;
        const de = async (Ee, Pe, xe) => {
          if (!x) {
            ((x = !0),
              (Ee.disabled = !0),
              Ee.setAttribute("aria-busy", "true"),
              U(I(`Opening ${xe}…`, `Открываем ${xe}…`)));
            try {
              const Ze = await Pe();
              if (Ze === "cancelled") {
                U("");
                return;
              }
              ((M = !1), Ie());
              const gt = ae(Ze, xe),
                Ot = _;
              ((_ = null),
                u.close(),
                (mi("menu-error").textContent = gt),
                d.hidden || (await C, await Ve(), J(gt, "success")),
                Ot && setTimeout(Ot, 0));
            } catch (Ze) {
              U(
                Ze instanceof Error && Ze.message === "google-state"
                  ? I(
                      "Google sign-in was interrupted. Please try again",
                      "Вход через Google прервался. Попробуйте ещё раз",
                    )
                  : j(Ze),
                "error",
              );
            } finally {
              ((x = !1), (Ee.disabled = !1), Ee.removeAttribute("aria-busy"));
            }
          }
        };
        if (xt) {
          const Ee = Bte(
            Be === "connect"
              ? I("Connect Apple ID", "Подключить Apple ID")
              : I("Sign in with Apple", "Вход с Apple"),
            () => void de(Ee, () => Dte(Be, yt?.()), "Apple"),
          );
          ((Ee.id = Be === "connect" ? "auth-apple-connect" : "auth-apple"),
            X.append(Ee));
        }
        if ($) {
          const Ee = Pte(
            I("Continue with Google", "Продолжить с Google"),
            () => {
              if (Cte()) return void de(Ee, () => kte(Be, yt?.()), "Google");
              x ||
                ((x = !0),
                (Ee.disabled = !0),
                Ee.setAttribute("aria-busy", "true"),
                U(I("Opening Google…", "Открываем Google…")),
                Rte(Be, yt?.()));
            },
          );
          ((Ee.id = Be === "connect" ? "auth-google-connect" : "auth-google"),
            X.append(Ee));
        }
        if (Be === "login") {
          const Ee = rt("div", "", "auth-or");
          (Ee.append(rt("span", I("or with email", "или по почте"))),
            X.append(Ee));
        }
      },
      Ri = (Be, yt) => {
        const xt = rt("small", "", "auth-field-feedback");
        ((xt.id = `${Be.id}-feedback`),
          xt.setAttribute("aria-live", "polite"),
          Be.after(xt),
          Be.setAttribute(
            "aria-describedby",
            [Be.getAttribute("aria-describedby"), xt.id]
              .filter(Boolean)
              .join(" "),
          ));
        let $ = !1;
        const de = () => {
          $ = !0;
          const Ee = yt();
          return (
            (xt.textContent = Ee),
            Be.setCustomValidity(Ee),
            Be.setAttribute("aria-invalid", String(!!Ee)),
            !Ee
          );
        };
        (Be.addEventListener("blur", de),
          Be.addEventListener("input", () => {
            $ && de();
          }),
          Pt.push(de));
      };
    if (ce === "add") {
      _e.id = "lobby-add";
      const Be = je("lobby-name", "name", z("serverName"));
      ((Be.maxLength = 80), (Be.placeholder = z("serverNamePlaceholder")));
      const yt = je("lobby-address", "address", z("serverAddress"));
      ((yt.maxLength = 255),
        (yt.placeholder = z("serverAddressPlaceholder")),
        (yt.spellcheck = !1),
        (ft = async () => {
          (await Vi("/me/servers", "PUT", Object.fromEntries(new FormData(_e))),
            await C,
            await Ve(),
            be(),
            (f = "saved"),
            (y = ""),
            (g = m.find((xt) => xt.name === Be.value.trim())?.address ?? ""),
            Le(),
            ge("serverSaved"));
        }));
    } else if (Qe && qe?.is_guest) {
      const Be = qe.username,
        yt = rt("div", "", "guest-link-intro guest-link-rename");
      yt.innerHTML = Ks("user");
      const xt = rt("div", "", "link-names"),
        $ = rt("strong", "", "link-to");
      (xt.append(rt("s", Be, "link-from"), rt("i", "→", "link-arrow"), $),
        yt.append(rt("small", z("linkTitle")), xt, rt("p", z("guestLinkHint"))),
        X.append(yt),
        Ft("login", () => {
          const ei = (u.querySelector("#auth-name")?.value ?? "").trim();
          return Tw(ei) && !_w(ei) && !/^guest_/i.test(ei) ? ei : void 0;
        }),
        (_e.id = "lobby-auth"),
        (_e.noValidate = !0));
      const de = je(
        "auth-name",
        "username",
        z("linkChooseName"),
        "text",
        "username",
      );
      ((de.maxLength = Q4),
        (de.minLength = Z4),
        (de.pattern = Tk),
        (de.autocapitalize = "none"),
        (de.spellcheck = !1),
        (de.placeholder = z("linkNamePlaceholder")));
      let Ee = "",
        Pe = !0,
        xe = 0;
      const Ze = () => {
          (($.textContent = de.value.trim() || "…"),
            $.classList.toggle("empty", !de.value.trim()));
        },
        gt = (ei) =>
          Tw(ei)
            ? /^guest_/i.test(ei) && ei.toLowerCase() !== Be.toLowerCase()
              ? z("linkNameReserved")
              : _w(ei)
                ? z("nameNotAllowed")
                : ""
            : z("usernameHint");
      Ri(de, () => {
        const ei = de.value.trim();
        return gt(ei) || (Ee === ei && !Pe ? z("linkNameTaken") : "");
      });
      const Ot = de.parentElement.querySelector("#auth-name-feedback");
      (de.addEventListener("blur", () => {
        Ee === de.value.trim() &&
          Pe &&
          !gt(Ee) &&
          (Ot.textContent = z("linkNameFree"));
      }),
        de.addEventListener("input", () => {
          (Ze(), clearTimeout(xe));
          const ei = de.value.trim();
          ((de.dataset.state = ""),
            !gt(ei) &&
              ((Ot.textContent = z("linkNameChecking")),
              (de.dataset.state = "checking"),
              (xe = window.setTimeout(async () => {
                try {
                  const es = await Vi(
                    `/auth/username?username=${encodeURIComponent(ei)}`,
                  );
                  if (de.value.trim() !== ei) return;
                  ((Ee = ei),
                    (Pe = es.available),
                    (Ot.textContent = es.available
                      ? z("linkNameFree")
                      : es.error || z("linkNameTaken")),
                    (de.dataset.state = es.available ? "free" : "taken"),
                    de.setCustomValidity(es.available ? "" : Ot.textContent),
                    de.setAttribute("aria-invalid", String(!es.available)));
                } catch {
                  de.value.trim() === ei &&
                    ((Ot.textContent = ""), (de.dataset.state = ""));
                }
              }, 380))));
        }),
        Ze());
      const Ut = je("auth-email", "email", z("email"), "email", "email");
      ((Ut.maxLength = zy),
        (Ut.autocapitalize = "none"),
        (Ut.spellcheck = !1),
        (Ut.placeholder = "name@example.com"),
        Ri(Ut, () => (xk(Ut.value) ? "" : z("emailInvalid"))));
      const Qt = je(
        "auth-password",
        "password",
        z("password"),
        "password",
        "new-password",
      );
      ((Qt.minLength = zp),
        (Qt.maxLength = Fp),
        (Qt.placeholder = z("passwordHint")),
        Ri(Qt, () =>
          Qt.value.length >= zp && Qt.value.length <= Fp
            ? ""
            : z("passwordValidation"),
        ));
      const di = rt("div", "", "link-transfers");
      di.append(rt("small", z("linkTransfersTitle")));
      const Yt = rt("div", "", "link-chips");
      for (const ei of z("linkTransfers").split("|")) Yt.append(rt("span", ei));
      (di.append(Yt),
        _e.append(
          di,
          rt("p", z("guestRetentionNotice"), "guest-save-copy guest-retention"),
        ),
        (ft = async () => {
          const ei = Object.fromEntries(new FormData(_e));
          ((ei.email = J4(String(ei.email))),
            (ei.username = String(ei.username).trim()));
          const es = await Vi("/auth/link", "POST", {
            ...ei,
            ...(jo ? { embed: !0 } : {}),
          });
          (af(es.token), rf(es.user), (M = !1));
          const sn =
              es.user.username !== Be
                ? z("accountLinkedRenamed", { name: es.user.username })
                : z("accountLinked"),
            Ao = _;
          (be(),
            (mi("menu-error").textContent = sn),
            d.hidden || J(sn, "success"),
            Ao && setTimeout(Ao, 0));
        }));
    } else if (ce === "account" && qe) {
      const Be = rt("div", "", "profile-skin-card"),
        yt = document.createElement("img"),
        xt = _0(Lt.character);
      ((yt.alt =
        Lt.character === "custom"
          ? Vt("Your Creation", "Твоё творение")
          : Vt(xt.name, xt.ru)),
        vr("character", Lt.character, 257, Lt.custom, !0)
          .then((Ze) => {
            yt.isConnected && (yt.src = Ze);
          })
          .catch(() => {}));
      const $ = rt("div");
      ($.append(
        rt("strong", qe.username),
        rt("p", yt.alt),
        rt(
          "span",
          "◈ " +
            Lt.gold.toLocaleString() +
            " " +
            Vt("gold coins", "золотых монет"),
        ),
      ),
        Be.append(yt, $),
        X.append(Be));
      const de = rt("div", "", "profile-progress");
      if ((de.append(Ew()), X.append(de), u1(!0), qe.is_guest)) {
        const Ze = rt("div", "", "guest-profile-save");
        Ze.append(
          rt("small", z("guestLabel")),
          rt("p", z("guestProgressNotice")),
          rt("p", z("guestRetentionNotice"), "guest-retention"),
        );
        const gt = Hn(z("linkAccount"), "user");
        ((gt.id = "profile-link-account"),
          (gt.onclick = () => oe("link")),
          Ze.append(gt),
          X.append(Ze));
      }
      if (
        (qe.email && X.append(rt("p", qe.email, "lobby-small")), !qe.is_guest)
      ) {
        if (qe.apple) {
          const Ze = rt("p", "", "google-linked");
          (Ze.append(rt("span", I("Apple ID connected", "Apple ID подключён"))),
            X.append(Ze));
        }
        if (qe.google) {
          const Ze = rt("p", "", "google-linked");
          (Ze.append(
            rt(
              "span",
              I("Google account connected", "Google-аккаунт подключён"),
            ),
          ),
            X.append(Ze));
        }
        Ft("connect");
      }
      (X.append(
        Hn(Vt("Character skins & workshop", "Скины персонажа и мастерская")),
      ),
        (X.lastChild.onclick = () => {
          (u.close(), lc("character"));
        }),
        X.append(Hn(Vt("Weapon skin inventory", "Инвентарь скинов оружия"))),
        (X.lastChild.onclick = () => {
          (u.close(), lc("weapon"));
        }));
      const Ee = document.createElement("details"),
        Pe = qe.has_password === !1;
      (Ee.append(
        rt(
          "summary",
          Pe ? I("Set a password", "Задать пароль") : z("changePassword"),
        ),
      ),
        Pe ||
          (je(
            "current-password",
            "currentPassword",
            z("currentPassword"),
            "password",
            "current-password",
          ).maxLength = 128));
      const xe = je(
        "new-password",
        "password",
        z("newPassword"),
        "password",
        "new-password",
      );
      ((xe.minLength = zp),
        (xe.maxLength = Fp),
        Ee.append(_e),
        qe.is_guest || X.append(Ee),
        X.append(Ke(qe)),
        (ft = async () => {
          const Ze = await Vi("/auth/password", "POST", {
            currentPassword: "",
            ...Object.fromEntries(new FormData(_e)),
            ...(jo ? { embed: !0 } : {}),
          });
          (af(Ze?.token),
            _e.reset(),
            U(z("passwordUpdated"), "success"),
            Pe && (await G2(), he(), U(z("passwordUpdated"), "success")));
        }));
    } else {
      if (ce === "login" && qe?.is_guest) {
        X.append(rt("p", z("guestSwitchHint"), "guest-save-copy"));
        const xt = Hn(z("linkAccount"), "user");
        ((xt.id = "signin-link-account"),
          (xt.onclick = () => oe("link")),
          X.append(xt));
      }
      (Ft("login"), (_e.id = "lobby-auth"));
      const Be = je(
        "auth-name",
        "username",
        z(Se ? "username" : "loginName"),
        "text",
        "username",
      );
      if (
        ((Be.maxLength = Se ? Q4 : zy),
        (Be.autocapitalize = "none"),
        (Be.spellcheck = !1),
        Se)
      ) {
        ((_e.noValidate = !0), (Be.pattern = Tk), (Be.minLength = Z4));
        const xt = rt("small", z("usernameHint"), "lobby-small");
        ((xt.id = "auth-name-hint"),
          Be.after(xt),
          Be.setAttribute("aria-describedby", xt.id),
          Ri(Be, () =>
            Tw(Be.value)
              ? _w(Be.value)
                ? z("nameNotAllowed")
                : ""
              : z("usernameHint"),
          ));
        const $ = je("auth-email", "email", z("email"), "email", "email");
        (($.maxLength = zy),
          ($.autocapitalize = "none"),
          ($.spellcheck = !1),
          ($.placeholder = "name@example.com"),
          Ri($, () => (xk($.value) ? "" : z("emailInvalid"))));
      }
      const yt = je(
        "auth-password",
        "password",
        z("password"),
        "password",
        Se ? "new-password" : "current-password",
      );
      ((yt.maxLength = Fp),
        (yt.minLength = Se ? zp : 1),
        Se &&
          Ri(yt, () =>
            yt.value.length >= zp && yt.value.length <= Fp
              ? ""
              : z("passwordValidation"),
          ),
        Se &&
          ((yt.placeholder = z("passwordHint")),
          _e.append(rt("small", z("passwordHint"), "lobby-small"))),
        (ft = async () => {
          const xt = Object.fromEntries(new FormData(_e));
          Se && (xt.email = J4(String(xt.email)));
          const $ = await Vi(Se ? "/auth/register" : "/auth/login", "POST", {
            ...xt,
            ...(jo ? { embed: !0 } : {}),
          });
          (af($.token), rf($.user), (M = !1), Ie());
          const de = _;
          ((_ = null),
            u.close(),
            d.hidden || (await C, await Ve(), J(z("signedIn"), "success")),
            de && setTimeout(de, 0));
        }));
    }
    const gi = Hn(
      z(
        ce === "add"
          ? "saveServer"
          : ce === "account"
            ? "changePassword"
            : Qe
              ? "linkSubmit"
              : Se
                ? "register"
                : "signIn",
      ),
    );
    if (
      ((gi.type = "submit"),
      (gi.id = "auth-submit"),
      _e.append(gi),
      ce === "account" &&
        qe?.has_password === !1 &&
        gi.replaceChildren(rt("span", I("Set password", "Задать пароль"))),
      ce !== "account" && X.append(_e),
      ce === "login" || Se)
    ) {
      const Be = Hn(z(Se ? "haveAccount" : "needAccount"), void 0, !0);
      ((Be.id = "auth-toggle"),
        (Be.onclick = () => oe(Se ? "login" : "register")),
        X.append(Be));
    }
    _e.onsubmit = (Be) => {
      if ((Be.preventDefault(), x)) return;
      if (Pt.map((de) => de()).some((de) => !de)) {
        _e.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      x = !0;
      const yt = gi.textContent,
        xt = z(
          Qe
            ? "linkingAccount"
            : ce === "add" || ce === "account"
              ? "savingChanges"
              : "signingIn",
        );
      (D(gi, !0, xt), (vt.disabled = !0));
      const $ = u.querySelector("#auth-toggle");
      ($ && ($.disabled = !0),
        _e.querySelectorAll("input").forEach((de) => (de.readOnly = !0)),
        U(xt),
        ft()
          .catch((de) => {
            U(j(de), "error");
          })
          .finally(() => {
            ((x = !1),
              D(gi, !1, yt),
              (vt.disabled = !1),
              $ && ($.disabled = !1),
              _e.querySelectorAll("input").forEach((de) => (de.readOnly = !1)));
          }));
    };
  }
  function Ie() {
    (it(), t(), i(), h(), u1(!0));
    const ce = mi("menu-account");
    if ((ce.replaceChildren(), E)) {
      ce.append(rt("span", z("profileLoading"), "lobby-small"));
      return;
    }
    if (qe) {
      const Se = rt("button", "", "mm-gold");
      ((Se.type = "button"),
        (Se.id = "menu-gold"),
        (Se.innerHTML = `${xn(22, "spin")}<b class="gold-amount">${Lt.gold.toLocaleString()}</b>`),
        (Se.title = Vt("Gold · open the store", "Золото · открыть магазин")),
        Se.setAttribute("aria-label", Se.title),
        (Se.onclick = () => lc("store")));
      const Qe = rt("button", "", "mm-profile");
      ((Qe.type = "button"), (Qe.id = "menu-profile"));
      const Ue = document.createElement("img");
      ((Ue.alt = ""), (Ue.className = "mm-avatar"), o(Ue));
      const vt = rt("span", "", "mm-who");
      (vt.append(
        rt("b", qe.username),
        rt(
          "small",
          qe.is_guest ? z("guestLabel") : Vt("View profile", "Профиль"),
        ),
      ),
        Qe.append(Ue, vt),
        (Qe.onclick = () => oe("account")));
      const X = Hn(z("signOut"), "logout", !0);
      ((X.id = "menu-logout"),
        X.classList.add("icon-button"),
        (X.title = z("signOut")),
        X.setAttribute("aria-label", z("signOut")),
        (X.onclick = async () => {
          X.disabled = !0;
          try {
            (await Vi("/auth/logout", "POST"),
              Tb(),
              E_(),
              await G2(),
              (m = []),
              Ie(),
              d.hidden || He());
          } catch (je) {
            ((mi("menu-error").textContent = j(je)), (X.disabled = !1));
          }
        }));
      const _e = rt("button", "", "mm-hidden");
      if (
        ((_e.type = "button"),
        (_e.id = "menu-skins"),
        (_e.tabIndex = -1),
        _e.setAttribute("aria-hidden", "true"),
        (_e.onclick = () => lc()),
        qe.is_guest)
      ) {
        const je = Hn(z("linkAccount"), "user", !0);
        ((je.id = "menu-link-account"),
          je.classList.add("mm-signin"),
          (je.onclick = () => oe("link")));
        const ft = Hn(z("signIn"), void 0, !0);
        ((ft.id = "menu-login"),
          (ft.onclick = () => oe("login")),
          ce.append(Qe, je, ft, _e));
      } else ce.append(Se, Qe, X, _e);
      (h(), t3().catch(() => {}), j8(), dte(a), TT());
    } else if (M) {
      const Se = Hn(z("retryButton"), "refresh", !0);
      ((Se.onclick = () => void Me()),
        ce.append(rt("span", z("profileUnavailable"), "lobby-small"), Se));
    } else {
      const Se = Hn(z("signIn"), "user", !0);
      ((Se.id = "menu-login"), (Se.onclick = () => oe("login")));
      const Qe = rt("button", "", "mm-hidden");
      ((Qe.type = "button"),
        (Qe.id = "menu-skins"),
        (Qe.tabIndex = -1),
        Qe.setAttribute("aria-hidden", "true"),
        (Qe.onclick = () => lc()),
        ce.append(
          rt("span", z("playWithoutAccount"), "guest-play-hint"),
          Se,
          Qe,
        ));
    }
  }
  function ve(ce) {
    oe("login");
    const Se = u.querySelector("#auth-name");
    (Se && ((Se.value = ce), u.querySelector("#auth-password")?.focus()),
      U(z("signedOutDialog", { name: ce })));
  }
  function it() {
    if ((mi("menu").querySelector("#guest-reminder")?.remove(), E)) return;
    const ce = M ? null : A_();
    if (ce) {
      const _e = rt("aside", "", "guest-reminder signed-out-reminder");
      ((_e.id = "guest-reminder"),
        _e.setAttribute("aria-labelledby", "guest-reminder-title"));
      const je = rt("strong", z("signedOutTitle", { name: ce }));
      je.id = "guest-reminder-title";
      const ft = rt("div", "", "guest-reminder-actions"),
        Pt = Hn(z("signIn"), "user");
      ((Pt.id = "signed-out-login"), (Pt.onclick = () => ve(ce)));
      const Ft = Hn(z("signedOutForget"), void 0, !0);
      ((Ft.id = "signed-out-forget"),
        (Ft.onclick = () => {
          (Tb(), it());
        }),
        ft.append(Pt, Ft),
        _e.append(
          rt("small", z("signedOutLabel")),
          je,
          rt("p", z("signedOutText")),
          ft,
        ),
        mi("menu").querySelector(".mm-side")?.prepend(_e));
      return;
    }
    if (!qe?.is_guest) return;
    try {
      if (
        localStorage.getItem("vr-guest-played") !== qe.id ||
        Number(localStorage.getItem(`vr-guest-remind-after:${qe.id}`)) >
          Date.now()
      )
        return;
    } catch {
      return;
    }
    const Se = rt("aside", "", "guest-reminder");
    ((Se.id = "guest-reminder"),
      Se.setAttribute("aria-labelledby", "guest-reminder-title"));
    const Qe = rt("strong", z("guestProgressTitle"));
    Qe.id = "guest-reminder-title";
    const Ue = rt("div", "", "guest-reminder-actions"),
      vt = Hn(z("linkAccount"), "user");
    ((vt.id = "guest-reminder-link"), (vt.onclick = () => oe("link")));
    const X = Hn(z("later"), void 0, !0);
    ((X.id = "guest-reminder-later"),
      (X.onclick = () => {
        try {
          localStorage.setItem(
            `vr-guest-remind-after:${qe.id}`,
            String(Date.now() + 7 * 864e5),
          );
        } catch {}
        Se.remove();
      }),
      Ue.append(vt, X),
      Se.append(
        rt("small", z("guestLabel")),
        Qe,
        rt("p", z("guestProgressInvite")),
        rt("p", z("guestProgressNotice"), "guest-save-copy"),
        rt("p", z("guestRetentionNotice"), "guest-save-copy guest-retention"),
        Ue,
      ),
      mi("menu").querySelector(".mm-side")?.prepend(Se));
  }
  window.addEventListener("account-changed", Ie);
  let st = "all",
    ot = "players",
    at = "modes",
    Re = "all",
    V = null;
  const ye = new Map();
  function Ce(ce) {
    const Se = ye.get(ce);
    if (Se && performance.now() - Se.at < 3e4) return;
    ye.set(ce, { ms: Se?.ms ?? null, at: performance.now() });
    let Qe;
    try {
      ((Qe = new URL(ce.replace(/^ws/, "http"))),
        (Qe.pathname = "/api/server-info"),
        (Qe.search = ""));
    } catch {
      return;
    }
    const Ue = performance.now();
    fetch(Qe, { signal: AbortSignal.timeout(3500), cache: "no-store" })
      .then((vt) => {
        if (!vt.ok) throw Error();
        ye.set(ce, {
          ms: Math.round(performance.now() - Ue),
          at: performance.now(),
        });
      })
      .catch(() => ye.set(ce, { ms: null, at: performance.now() }))
      .finally(() => {
        d.hidden || ht();
      });
  }
  const ze = (ce) =>
    ce == null ? "none" : ce < 80 ? "good" : ce < 160 ? "ok" : "bad";
  function tt(ce) {
    const Se = ye.get(ce)?.ms,
      Qe = rt("span", "", `server-ping ${ze(Se)}`);
    return (
      (Qe.dataset.ping = ce),
      (Qe.innerHTML = "<i></i><i></i><i></i><i></i>"),
      Qe.append(rt("b", Se == null ? "—" : `${Se} ms`)),
      (Qe.title = Vt("Ping", "Пинг")),
      Qe
    );
  }
  function ht() {
    (d.querySelectorAll("[data-ping]").forEach((ce) => {
      const Se = ye.get(ce.dataset.ping)?.ms;
      ((ce.className = `server-ping ${ze(Se)}`),
        (ce.querySelector("b").textContent = Se == null ? "—" : `${Se} ms`));
    }),
      at === "modes" ? pe() : (ot === "ping" || (!ut && F(N()) !== g)) && He());
  }
  let ut = !1;
  function F(ce) {
    const Se = (Ue) => {
      const vt = ye.get(Ue.address)?.ms;
      return (
        (Ue.online === !1 || pt(Ue) ? -1e6 : 0) +
        (vt == null ? -1e5 : 0) +
        (Ue.trusted ? 1e4 : 0) +
        (Wh(Ue) ? -5e4 : 0) +
        Math.min(1e3, (Ue.current_players ?? 0) * 10) -
        Math.min(999, vt ?? 999) / 10
      );
    };
    let Qe = ce[0];
    for (const Ue of ce) Se(Ue) > Se(Qe) && (Qe = Ue);
    return Qe?.address ?? "";
  }
  function N() {
    const ce = y.toLowerCase();
    return (f === "public" ? p : m)
      .filter(
        (Qe) =>
          `${Qe.name} ${Qe.address}`.toLowerCase().includes(ce) &&
          (Re === "all" || Fy(Qe) === Re) &&
          (st === "all" ||
            (st === "official" && Qe.trusted) ||
            (st === "active" && (Qe.current_players ?? 0) > 0) ||
            (st === "open" && Qe.online !== !1 && !pt(Qe))),
      )
      .sort((Qe, Ue) =>
        ot === "name"
          ? Qe.name.localeCompare(Ue.name)
          : ot === "ping"
            ? (ye.get(Qe.address)?.ms ?? 9999) -
              (ye.get(Ue.address)?.ms ?? 9999)
            : +(Ue.online !== !1) - +(Qe.online !== !1) ||
              +!!Ue.trusted - +!!Qe.trusted ||
              (Ue.current_players ?? 0) - (Qe.current_players ?? 0),
      );
  }
  async function fe() {
    if (R) return;
    const ce = N().find((Se) => Se.address === g);
    !ce || ce.online === !1 || pt(ce) || (await De(ce));
  }
  async function De(ce) {
    if (!R) {
      ((R = !0), Le());
      try {
        (await Et,
          J(z(qe ? "joiningServer" : "guestJoining", { name: ce.name })));
        const Se = await If();
        (J(z("joiningServer", { name: ce.name })),
          $4(ce.name, ce.address),
          (await s(Se.username, ce.address))
            ? (d.hidden = !0)
            : J(
                mi("menu-error").textContent || z("serverCheckFailed"),
                "error",
              ));
      } catch (Se) {
        J(j(Se), "error");
      } finally {
        ((R = !1),
          (V = null),
          Le(),
          d.hidden ||
            document
              .getElementById(
                at === "servers" ? "lobby-join" : "lobby-list-open",
              )
              ?.focus());
      }
    }
  }
  function Xe(ce) {
    return (
      xN(
        p.filter((Se) => Fy(Se) === ce),
        (Se) => ye.get(Se.address)?.ms,
      ) ?? null
    );
  }
  async function et(ce) {
    if (R) return;
    const Se = Xe(ce);
    if (!Se) {
      J(
        Vt(
          `No ${_g[ce].name[0]} server is open right now`,
          `Сейчас нет открытых серверов «${_g[ce].name[1]}»`,
        ),
        "error",
      );
      return;
    }
    ((V = ce), await De(Se));
  }
  async function Mt(ce) {
    if (O.has(ce.address)) return;
    if (!qe) {
      W(() => void ne(() => Mt(ce)), z("signInToSave"));
      return;
    }
    const Se = m.some((Qe) => Qe.address === ce.address);
    (O.add(ce.address), He(), J(z("savingChanges")));
    try {
      (await Vi("/me/servers", Se ? "DELETE" : "PUT", {
        address: ce.address,
        name: ce.name,
      }),
        await C,
        await Ve(),
        ge(Se ? "favoriteRemoved" : "serverSaved"));
    } finally {
      (O.delete(ce.address), He());
    }
  }
  const pt = (ce) =>
      !!ce.max_players && (ce.current_players ?? 0) >= ce.max_players,
    At = (ce) => /\btdm\b|deathmatch|командный бой/i.test(ce.name),
    ee = (ce) => /arms ?race|гонка вооружений/i.test(ce.name),
    te = (ce) => /frontline|фронт/i.test(ce.name) || At(ce) || ee(ce);
  function He() {
    if (at === "modes") {
      pe();
      return;
    }
    const ce = mi("lobby-servers");
    ce.replaceChildren();
    const Se = N();
    if (
      ((!ut || !Se.some((Ue) => Ue.address === g)) && (g = F(Se)), !Se.length)
    ) {
      const Ue = rt("div", "", "browser-empty");
      if (
        ((Ue.innerHTML = Ks(f === "saved" ? "star" : "servers")),
        Ue.append(
          rt(
            "p",
            z(
              !S && b
                ? "loadingServers"
                : y || st !== "all"
                  ? "noServerResults"
                  : f === "saved"
                    ? "noFavorites"
                    : "noServers",
            ),
          ),
        ),
        f === "saved" && !qe)
      ) {
        const vt = Hn(z("signIn"), "user");
        ((vt.onclick = () => oe("login")), Ue.append(vt));
      }
      ce.append(Ue);
    }
    for (const Ue of Se) {
      Ce(Ue.address);
      const vt = rt("div", "", "server-row");
      (vt.setAttribute("role", "listitem"),
        (vt.dataset.address = Ue.address),
        vt.classList.toggle("selected", g === Ue.address),
        vt.classList.toggle("offline", Ue.online === !1));
      const X = Hn("", void 0, !0);
      ((X.className = "server-select"),
        X.setAttribute("aria-pressed", String(g === Ue.address)));
      const _e = rt("span", "", "server-info"),
        je = rt("strong", Ue.name, "server-title");
      (Ue.trusted && je.append(rt("em", z("officialServer"), "server-badge")),
        ee(Ue)
          ? je.append(
              rt(
                "em",
                Vt("ARMS RACE", "ГОНКА ВООРУЖЕНИЙ"),
                "server-badge battle arms",
              ),
            )
          : At(Ue)
            ? je.append(
                rt(
                  "em",
                  Vt("TEAM DEATHMATCH", "КОМАНДНЫЙ DM"),
                  "server-badge battle tdm",
                ),
              )
            : te(Ue) &&
              je.append(
                rt(
                  "em",
                  Vt("TEAM BATTLE", "КОМАНДНЫЙ БОЙ"),
                  "server-badge battle",
                ),
              ),
        Wh(Ue) && je.append(rt("em", Vt("TEST", "ТЕСТ"), "server-badge trial")),
        pt(Ue) && je.append(rt("em", z("serverFull"), "server-badge full")),
        _e.append(
          je,
          rt("span", Ue.address.replace(/^wss?:\/\//, ""), "server-address"),
        ));
      const ft = Ue.max_players
          ? Math.min(1, (Ue.current_players ?? 0) / Ue.max_players)
          : 0,
        Pt = rt("span", "", "server-players");
      Pt.append(
        rt(
          "b",
          Ue.online === !1
            ? z("serverOffline")
            : Ue.current_players === void 0
              ? "—"
              : `${Ue.current_players}/${Ue.max_players ?? "—"}`,
        ),
      );
      const Ft = rt("i", "", "server-bar");
      (Ft.style.setProperty("--fill", String(ft)),
        Pt.append(Ft),
        X.replaceChildren(tt(Ue.address), _e, Pt),
        (X.disabled = R),
        (X.onclick = () => {
          if (!R) {
            (J(""), (g = Ue.address), (ut = !0));
            for (const Be of ce.querySelectorAll(".server-row")) {
              const yt = Be.dataset.address === g;
              (Be.classList.toggle("selected", yt),
                Be.querySelector(".server-select")?.setAttribute(
                  "aria-pressed",
                  String(yt),
                ));
            }
            Ae();
          }
        }),
        (X.ondblclick = fe),
        (X.onkeydown = (Be) => {
          Be.key === "Enter" &&
            (Be.preventDefault(), (g = Ue.address), (ut = !0), fe());
        }));
      const Ri = m.some((Be) => Be.address === Ue.address),
        gi = Hn(z(Ri ? "favoriteRemove" : "favoriteAdd"), "star", !0);
      (gi.classList.add("icon-button"),
        gi.classList.toggle("is-favorite", Ri),
        gi.setAttribute("aria-label", gi.textContent),
        (gi.title = gi.textContent),
        gi.setAttribute("aria-pressed", String(Ri)),
        D(gi, O.has(Ue.address)),
        R && (gi.disabled = !0),
        (gi.onclick = () => void ne(() => Mt(Ue))),
        vt.append(X, gi),
        ce.append(vt));
    }
    const Qe = d.querySelector(".lobby-count");
    (Qe &&
      (Qe.textContent = Vt(`${Se.length} servers`, `Серверов: ${Se.length}`)),
      Ae());
  }
  function K() {
    d.innerHTML = `<div class="lobby-shell lm-shell"><header class="browser-head"><div class="lobby-heading"><small>${Vt("PLAY ONLINE", "ИГРАТЬ ОНЛАЙН")}</small><h1>${Vt("Choose your battle", "Выберите бой")}</h1></div><div class="lm-head-actions"><button class="lobby-button quiet" id="lobby-list-open">${Ks("servers")}<span>${Vt("Server list", "Список серверов")}</span></button><button class="lobby-button quiet" id="lobby-close">${Ks("back")}<span>${z("backButton")}</span></button></div></header><div class="lm-grid" role="list"></div><p id="lobby-message" class="lobby-feedback" role="status" aria-live="polite"></p></div>`;
    const ce = d.querySelector(".lm-grid");
    for (const Se of eE) {
      const Qe = _g[Se],
        Ue = rt("button", "", "lm-card");
      ((Ue.type = "button"),
        (Ue.dataset.mode = Se),
        Ue.setAttribute("role", "listitem"),
        Ue.style.setProperty("--a", Qe.colors[0]),
        Ue.style.setProperty("--b", Qe.colors[1]));
      const vt = rt("span", "", "lm-art"),
        X = document.createElement("img");
      ((X.alt = ""),
        (X.decoding = "async"),
        (X.onload = () => vt.classList.add("ready")),
        vr(Qe.art[0], Qe.art[2] ?? "", Qe.art[1], null, !0)
          .then((Ft) => {
            X.src = Ft;
          })
          .catch(() => {}),
        vt.append(X),
        Qe.fresh &&
          (Ue.classList.add("fresh"),
          Ue.append(rt("span", Vt("NEW", "НОВОЕ"), "lm-new"))));
      const _e = rt("span", "", "lm-live");
      _e.append(rt("i"), rt("b", "—"), rt("span", Vt("playing", "в игре")));
      const je = rt("span", "", "lm-body"),
        ft = rt("span", "", "lm-facts");
      for (const Ft of Qe.facts) ft.append(rt("em", Vt(...Ft)));
      je.append(
        rt("small", Vt(...Qe.tag), "lm-tag"),
        rt("b", Vt(...Qe.name), "lm-name"),
        rt("span", Vt(...Qe.desc), "lm-desc"),
        ft,
      );
      const Pt = rt("span", "", "lm-cta");
      ((Pt.innerHTML = Ks("play")),
        Pt.append(rt("span", Vt("Play", "Играть"))),
        Ue.append(vt, _e, je, Pt),
        (Ue.onclick = () => void et(Se)),
        ce.append(Ue));
    }
    ((mi("lobby-list-open").onclick = () => {
      R || ((at = "servers"), Le());
    }),
      (mi("lobby-close").onclick = () => {
        R || ((d.hidden = !0), mi("playbtn").focus());
      }),
      J(B, H),
      pe());
  }
  function pe() {
    for (const ce of d.querySelectorAll(".lm-card")) {
      const Se = ce.dataset.mode,
        Qe = p.filter((je) => Fy(je) === Se && je.online !== !1 && !Wh(je));
      for (const je of Qe) Ce(je.address);
      const Ue = Qe.reduce((je, ft) => je + (ft.current_players ?? 0), 0),
        vt = Qe.some((je) => !pt(je)),
        X = ce.querySelector(".lm-live");
      ((X.querySelector("b").textContent = S ? Ue.toLocaleString() : "—"),
        X.classList.toggle("none", S && !Ue),
        ce.classList.toggle("offline", S && !vt),
        (ce.disabled = R || (S && !vt)),
        ce.setAttribute("aria-busy", String(V === Se)));
      const _e = ce.querySelector(".lm-cta span");
      _e.textContent =
        V === Se
          ? z("connectingServer")
          : S && !vt
            ? Vt("Offline", "Нет серверов")
            : Vt("Play", "Играть");
    }
  }
  function Ae() {
    const ce = d.querySelector(".lobby-details");
    if (!ce) return;
    const Se = N().find((Ft) => Ft.address === g),
      Qe = mi("lobby-join");
    Qe.disabled = R || !Se || Se.online === !1 || pt(Se);
    const Ue = ce.querySelector(".lobby-details-body");
    if ((Ue.replaceChildren(), !Se)) {
      Ue.append(rt("p", z("selectServer"), "lobby-small"));
      return;
    }
    Ue.append(
      rt(
        "small",
        Se.trusted
          ? z("officialServer")
          : Vt("Community server", "Сервер сообщества"),
        "lobby-kicker",
      ),
      rt("h2", Se.name),
    );
    const vt = rt(
      "button",
      Se.address.replace(/^wss?:\/\//, ""),
      "lobby-address",
    );
    ((vt.type = "button"),
      (vt.title = Vt("Copy address", "Скопировать адрес")),
      (vt.onclick = () => {
        navigator.clipboard
          ?.writeText(Se.address)
          .then(() => J(Vt("Address copied", "Адрес скопирован"), "success"))
          .catch(() => {});
      }),
      Ue.append(vt));
    const X = rt("div", "", "lobby-stats"),
      _e = (Ft, Ri, gi) => {
        const Be = rt("div");
        (Be.append(rt("small", Ft), rt("b", Ri)),
          gi && Be.append(gi),
          X.append(Be));
      },
      je = Se.max_players
        ? Math.min(1, (Se.current_players ?? 0) / Se.max_players)
        : 0,
      ft = rt("i", "", "server-bar");
    (ft.style.setProperty("--fill", String(je)),
      _e(
        Vt("Players", "Игроки"),
        Se.online === !1
          ? z("serverOffline")
          : `${Se.current_players ?? "—"} / ${Se.max_players ?? "—"}`,
        ft,
      ));
    const Pt = ye.get(Se.address)?.ms;
    if (
      (_e(Vt("Ping", "Пинг"), Pt == null ? "—" : `${Pt} ms`),
      _e(
        Vt("Status", "Статус"),
        Se.online === !1
          ? z("serverOffline")
          : pt(Se)
            ? z("serverFull")
            : Vt("Online", "В сети"),
      ),
      Ue.append(X),
      ee(Se))
    ) {
      const Ft = rt("div", "", "lobby-mode");
      (Ft.append(
        rt("strong", Vt("Arms Race · Gun game", "Гонка вооружений")),
        rt(
          "p",
          Vt(
            "Twelve soldiers, everyone for themselves, in the Team Deathmatch towns. Every kill hands you the next of twelve weapons, from an M4 down to a Glock; a knife kill steals a level. The first kill with the golden knife wins. Instant respawns, endless ammo; bots fill the empty places.",
            "Двенадцать бойцов, каждый сам за себя, в городах командного боя. Каждое убийство даёт следующее из двенадцати видов оружия — от M4 до Glock; убийство ножом крадёт уровень. Побеждает первое убийство золотым ножом. Мгновенное возрождение, бесконечные патроны; пустые места занимают боты.",
          ),
        ),
      ),
        Ue.append(Ft));
    } else if (At(Se)) {
      const Ft = rt("div", "", "lobby-mode");
      (Ft.append(
        rt(
          "strong",
          Vt("Team Deathmatch · Sirocco", "Командный бой · Сирокко"),
        ),
        rt(
          "p",
          Vt(
            "15 v 15 on foot in a walled desert town. Rifle, sniper, shotgun, minigun or grenade launcher — the side with more kills in 10 minutes wins. Bots fill the teams and fight like players.",
            "15 на 15 пешком в пустынном городке. Автомат, снайперка, дробовик, миниган или гранатомёт — побеждает команда, убившая больше за 10 минут. Боты добирают составы и воюют как люди.",
          ),
        ),
      ),
        Ue.append(Ft));
    } else if (te(Se)) {
      const Ft = rt("div", "", "lobby-mode");
      (Ft.append(
        rt("strong", Vt("Frontline · Conquest", "Линия фронта · Захват")),
        rt(
          "p",
          Vt(
            "Two armies, five flags, tanks and helicopters. Pick a class, take the flags, drain the enemy's tickets. Bots fill the sides, so there is always a battle.",
            "Две армии, пять флагов, танки и вертолёты. Выберите класс, захватывайте флаги и сжигайте очки подкрепления врага. Боты добирают составы — бой есть всегда.",
          ),
        ),
      ),
        Ue.append(Ft));
    }
    if (!qe || qe.is_guest) {
      const Ft = rt("div", "", "lobby-guest-access");
      (Ft.append(
        rt("strong", z(qe ? "guestLabel" : "playWithoutAccount")),
        rt("p", z("guestProgressNotice")),
        rt("p", z("guestRetentionNotice"), "guest-retention"),
      ),
        Ue.append(Ft));
    }
  }
  function Le() {
    if (
      (d.setAttribute("aria-label", z("multiplayerButton")),
      (d.dataset.view = at),
      at === "modes")
    ) {
      K();
      return;
    }
    ((d.innerHTML = `<div class="lobby-shell"><header class="browser-head"><div class="lobby-heading"><small>${Vt("PLAY ONLINE", "ИГРАТЬ ОНЛАЙН")}</small><h1>${z("multiplayerButton")}</h1></div><div class="lobby-tabs" role="tablist" aria-label="${z("multiplayerButton")}"><button id="lobby-public" class="lobby-button quiet" role="tab" aria-selected="${f === "public"}">${Ks("servers")}${z("publicServers")}</button><button id="lobby-saved" class="lobby-button quiet" role="tab" aria-selected="${f === "saved"}">${Ks("star")}${z("favoriteServers")}</button></div><div class="lm-head-actions lm-list-actions"><button class="lobby-button quiet" id="lobby-modes-open">${Ks("back")}<span>${Vt("Modes", "Режимы")}</span></button><button class="lobby-button quiet" id="lobby-close">${Ks("close")}<span>${Vt("Menu", "Меню")}</span></button></div></header>
    <div class="lobby-modes-filter" role="group" aria-label="${Vt("Game mode", "Режим игры")}"></div>
    <div class="lobby-main"><section class="lobby-list"><div class="browser-toolbar"><input id="lobby-search" type="search" aria-label="${z("searchServers")}" placeholder="${z("searchServers")}"><div class="lobby-filters" role="group" aria-label="${Vt("Filter", "Фильтр")}"></div><select id="lobby-sort" aria-label="${Vt("Sort", "Сортировка")}"><option value="players">${Vt("Most players", "Больше игроков")}</option><option value="ping">${Vt("Lowest ping", "Меньший пинг")}</option><option value="name">${Vt("Name", "По названию")}</option></select></div>
    <div class="lobby-columns" aria-hidden="true"><span>${Vt("Ping", "Пинг")}</span><span>${Vt("Server", "Сервер")}</span><span>${Vt("Players", "Игроки")}</span><span class="lobby-count"></span></div>
    <div id="lobby-servers" role="list" aria-label="${z("multiplayerButton")}"></div></section>
    <aside class="lobby-details"><div class="lobby-details-body"></div><p id="lobby-message" class="lobby-feedback" role="status" aria-live="polite"></p><button id="lobby-join" class="lobby-button">${Ks("play")}${z("joinServer")}</button><div class="lobby-secondary"><button id="lobby-add-open" class="lobby-button quiet">${Ks("plus")}${z("addServer")}</button><button id="lobby-refresh" class="lobby-button quiet">${Ks("refresh")}${z("refreshServers")}</button></div></aside></div></div>`),
      (kk("lobby-search").value = y));
    const ce = d.querySelector(".lobby-filters");
    for (const [Ue, vt] of [
      ["all", Vt("All", "Все")],
      ["official", z("officialServer")],
      ["active", Vt("With players", "С игроками")],
      ["open", Vt("Not full", "Есть места")],
    ]) {
      const X = rt("button", vt, "lobby-chip" + (st === Ue ? " active" : ""));
      ((X.type = "button"),
        X.setAttribute("aria-pressed", String(st === Ue)),
        (X.onclick = () => {
          ((st = Ue),
            ce.querySelectorAll(".lobby-chip").forEach((_e) => {
              (_e.classList.toggle("active", _e === X),
                _e.setAttribute("aria-pressed", String(_e === X)));
            }),
            He());
        }),
        ce.append(X));
    }
    const Se = d.querySelector(".lobby-modes-filter");
    for (const Ue of ["all", ...eE]) {
      const vt =
          Ue === "all" ? Vt("All modes", "Все режимы") : Vt(..._g[Ue].name),
        X = rt(
          "button",
          vt,
          "lobby-chip lobby-mode-chip" + (Re === Ue ? " active" : ""),
        );
      ((X.type = "button"),
        (X.dataset.mode = Ue),
        X.setAttribute("aria-pressed", String(Re === Ue)),
        (X.onclick = () => {
          ((Re = Ue),
            Se.querySelectorAll(".lobby-chip").forEach((_e) => {
              (_e.classList.toggle("active", _e === X),
                _e.setAttribute("aria-pressed", String(_e === X)));
            }),
            (ut = !1),
            He());
        }),
        Se.append(X));
    }
    mi("lobby-modes-open").onclick = () => {
      R || ((at = "modes"), Le());
    };
    const Qe = mi("lobby-sort");
    ((Qe.value = ot),
      (Qe.onchange = () => {
        ((ot = Qe.value), He());
      }),
      (mi("lobby-close").onclick = () => {
        R || ((d.hidden = !0), mi("playbtn").focus());
      }),
      (mi("lobby-refresh").onclick = () => {
        (ye.clear(),
          J(z("loadingServers")),
          ne(async () => {
            (await Ve(), H !== "error" && J(z("serversUpdated"), "success"));
          }));
      }),
      (mi("lobby-join").onclick = fe),
      (mi("lobby-add-open").onclick = () =>
        qe ? oe("add") : W(() => oe("add"), z("signInToSave"))),
      (mi("lobby-search").oninput = () => {
        ((y = kk("lobby-search").value), He());
      }));
    for (const Ue of ["public", "saved"])
      mi("lobby-" + Ue).onclick = () => {
        ((f = Ue), Le(), mi("lobby-" + Ue).focus());
      };
    (He(),
      J(B, H),
      R &&
        (d
          .querySelectorAll("button,input,select")
          .forEach((Ue) => (Ue.disabled = !0)),
        D(mi("lobby-join"), !0, z("connectingServer"))),
      D(mi("lobby-refresh"), b, z(b ? "loadingServers" : "refreshServers")),
      (mi("lobby-refresh").disabled = b || R),
      mi("lobby-servers").setAttribute("aria-busy", String(b)));
  }
  function Ve() {
    return (
      C ||
      ((C = We().finally(() => {
        C = null;
      })),
      C)
    );
  }
  async function We() {
    if (b) return;
    b = !0;
    const ce = () => document.getElementById("lobby-refresh");
    {
      const Se = ce();
      Se && D(Se, !0, z("loadingServers"));
    }
    (document
      .getElementById("lobby-servers")
      ?.setAttribute("aria-busy", "true"),
      S || (He(), J(z("loadingServers"))));
    try {
      const [Se, Qe] = await Promise.allSettled([
        Vi("/servers"),
        qe ? Vi("/me/servers") : Promise.resolve({ servers: [] }),
      ]);
      (Se.status === "fulfilled" && (p = Se.value.servers),
        Qe.status === "fulfilled" && (m = Qe.value.servers),
        (S = !0),
        (P = Se.status === "rejected" || Qe.status === "rejected"),
        P
          ? J(z("serversUnavailable"), "error")
          : B === z("loadingServers") && J(""),
        He());
    } finally {
      b = !1;
      const Se = ce();
      (Se && (D(Se, !1, z("refreshServers")), (Se.disabled = R)),
        document
          .getElementById("lobby-servers")
          ?.setAttribute("aria-busy", "false"));
    }
  }
  function ae(ce, Se) {
    const Qe = ce.user.username;
    return ce.outcome === "linked"
      ? I(
          `Profile saved to ${Se} as ${Qe}. Your progress stays with you`,
          `Профиль привязан к ${Se}: ${Qe}. Весь прогресс сохранён`,
        )
      : ce.outcome === "connected"
        ? I(
            `${Se} connected. Use it to sign in next time`,
            `${Se} подключён. В следующий раз входи через него`,
          )
        : ce.outcome === "created"
          ? I(
              `Welcome, ${Qe}! Your account is ready`,
              `Добро пожаловать, ${Qe}! Аккаунт создан`,
            )
          : I(`Signed in as ${Qe}`, `Вы вошли как ${Qe}`);
  }
  function Ke(ce) {
    const Se = document.createElement("details");
    ((Se.className = "account-delete"),
      Se.append(
        rt(
          "summary",
          ce.is_guest
            ? I("Delete this profile", "Удалить этот профиль")
            : I("Delete account", "Удалить аккаунт"),
        ),
      ),
      Se.append(
        rt(
          "p",
          I(
            `This deletes ${ce.username} for good: level and rank, gold, skins, friends and squads, and your saves on every server. It cannot be undone.`,
            `Это навсегда удалит ${ce.username}: уровень и звание, золото, скины, друзей и отряды, сохранения на всех серверах. Отменить нельзя.`,
          ),
        ),
      ));
    const Qe = rt(
      "label",
      I(
        `Type ${ce.username} to confirm`,
        `Введите ${ce.username} для подтверждения`,
      ),
    );
    Qe.setAttribute("for", "delete-confirm");
    const Ue = document.createElement("input");
    ((Ue.id = "delete-confirm"),
      (Ue.autocomplete = "off"),
      (Ue.autocapitalize = "none"),
      (Ue.spellcheck = !1));
    const vt = Hn(I("Delete forever", "Удалить навсегда"));
    ((vt.id = "delete-account"),
      (vt.type = "button"),
      vt.classList.add("danger"),
      (vt.disabled = !0),
      Ue.addEventListener("input", () => {
        vt.disabled =
          Ue.value.trim().toLowerCase() !== ce.username.toLowerCase();
      }),
      (vt.onclick = async () => {
        if (!(x || vt.disabled)) {
          ((x = !0), D(vt, !0, I("Deleting…", "Удаляем…")), (Ue.readOnly = !0));
          try {
            (await Vi("/me/delete", "POST", { username: Ue.value.trim() }),
              Tb(),
              E_(),
              rf(null),
              (m = []),
              be());
            try {
              await G2();
            } catch {}
            (Ie(),
              d.hidden || He(),
              (mi("menu-error").textContent = I(
                "Your account was deleted.",
                "Аккаунт удалён.",
              )));
          } catch (_e) {
            (U(j(_e), "error"),
              D(vt, !1, I("Delete forever", "Удалить навсегда")),
              (Ue.readOnly = !1));
          } finally {
            x = !1;
          }
        }
      }));
    const X = document.createElement("form");
    return (
      (X.className = "lobby-form"),
      (X.noValidate = !0),
      (X.onsubmit = (_e) => {
        (_e.preventDefault(), vt.click());
      }),
      X.append(Qe, Ue, vt),
      Se.append(X),
      Se
    );
  }
  async function Me() {
    if (((E = !0), Ie(), EN()))
      try {
        const ce = await Lte();
        if (ce && ce !== "cancelled") {
          const Se = ae(ce, "Google");
          ((mi("menu-error").textContent = Se), d.hidden || J(Se, "success"));
        }
      } catch (ce) {
        const Se =
          ce instanceof Error && ce.message === "google-state"
            ? I(
                "Google sign-in was interrupted. Please try again",
                "Вход через Google прервался. Попробуйте ещё раз",
              )
            : j(ce);
        mi("menu-error").textContent = Se;
      }
    try {
      (await G2(), (M = !1));
    } catch {
      M = !0;
    } finally {
      ((E = !1), Ie());
    }
    Je();
  }
  let Te = !1;
  async function Je() {
    if (jo || Te) return;
    for (let Se = 0; Se < 60 && !a(); Se++)
      await new Promise((Qe) => setTimeout(Qe, 500));
    const ce = M ? null : A_();
    !ce || Te || u.open || !a() || ((Te = !0), ve(ce));
  }
  function Fe() {
    const ce = mi("menu-featured");
    if ((ce.replaceChildren(), Ga())) {
      const ft = io(NP),
        Pt = Oo[ft.rarity],
        Ft = rt("button", "", "mm-featured hw-featured");
      ((Ft.type = "button"), Ft.style.setProperty("--r", "#ff8a1f"));
      const Ri = document.createElement("img");
      ((Ri.alt = ""),
        (Ri.className = "mm-featured-img"),
        vr("weapon", ft.id, 257)
          .then((yt) => (Ri.src = yt))
          .catch(() => {}));
      const gi = rt("span", "", "mm-featured-info");
      gi.append(
        rt(
          "small",
          Vt("HALLOWEEN · QUEST REWARD", "ХЕЛЛОУИН · НАГРАДА ЗА ЗАДАНИЯ"),
        ),
        rt("b", `AK-47 | ${Vt(ft.name, ft.ru)}`),
        rt("em", Vt(`${Pt.en} · exclusive`, `${Pt.ru} · эксклюзив`)),
      );
      const Be = rt(
        "span",
        Vt("Halloween quests →", "Задания Хеллоуина →"),
        "mm-featured-cta",
      );
      (Ft.append(rt("span", "", "mm-featured-glow"), Ri, gi, Be),
        (Ft.onclick = () => void Cm()),
        ce.append(Ft));
      return;
    }
    const Se = io("royal"),
      Qe = Oo[Se.rarity],
      Ue = Tn.mythos,
      vt = rt("button", "", "mm-featured");
    ((vt.type = "button"), vt.style.setProperty("--r", Qe.color));
    const X = document.createElement("img");
    ((X.alt = ""),
      (X.className = "mm-featured-img"),
      vr("weapon", Se.id, 257)
        .then((ft) => (X.src = ft))
        .catch(() => {}));
    const _e = rt("span", "", "mm-featured-info");
    _e.append(
      rt(
        "small",
        Vt(
          "FEATURED · " + Ue.name.toUpperCase(),
          "НОВИНКА · " + Ue.ru.toUpperCase(),
        ),
      ),
      rt("b", `AK-47 | ${Vt(Se.name, Se.ru)}`),
      rt("em", Vt(Qe.en, Qe.ru)),
    );
    const je = rt(
      "span",
      Vt("Open the Armory →", "Открыть Арсенал →"),
      "mm-featured-cta",
    );
    (vt.append(rt("span", "", "mm-featured-glow"), X, _e, je),
      (vt.onclick = () => lc("cases")),
      ce.append(vt));
  }
  Le();
  const Et = Me();
  async function $t(ce, Se = z("rejoining", { name: ce.name })) {
    const Qe = Date.now() + 15e4;
    e?.(Se, ce.name);
    try {
      await Et;
      const Ue = await If();
      for (; Date.now() < Qe;) {
        const vt = new URL(ce.address.replace(/^ws/, "http"));
        if (
          ((vt.pathname = "/api/server-info"),
          (vt.search = ""),
          await fetch(vt, {
            cache: "no-store",
            signal: AbortSignal.timeout(4e3),
          }).then(
            (_e) => _e.ok,
            () => !1,
          ))
        ) {
          if (($4(ce.name, ce.address), await s(Ue.username, ce.address)))
            return;
          break;
        }
        (e?.(z("updateWaitingServer"), ce.name),
          await new Promise((_e) => setTimeout(_e, 2e3)));
      }
    } catch (Ue) {
      mi("menu-error").textContent = j(Ue);
    }
    (mi("menu-error").textContent ||
      (mi("menu-error").textContent = z("serverCheckFailed")),
      e?.(null));
  }
  const Nt = zte(location.search, jo);
  {
    const ce = JJ();
    ce ? $t(ce) : Nt.automatic && si();
  }
  async function si() {
    e?.(z("loadingWorld"));
    const ce = new URLSearchParams(location.search);
    if ((ce.has("server") && !Nt.address) || (ce.has("mode") && !Nt.mode)) {
      ((mi("menu-error").textContent = z("serverCheckFailed")), e?.(null));
      return;
    }
    let Se = Nt.address,
      Qe = "Voxel Rush";
    if (!Se) {
      try {
        const { servers: Ue } = await Vi("/servers"),
          vt = Nt.mode
            ? Wte(Ue, Nt.mode)
            : (Ue.find((X) => X.online && X.trusted && !Wh(X)) ??
              Ue.find((X) => X.online && !Wh(X)));
        vt && ((Se = vt.address), (Qe = vt.name));
      } catch {}
      if (!Se && Nt.mode) {
        const Ue = TN(Nt.mode);
        if (!Ue) {
          ((mi("menu-error").textContent = z("modeUnavailable", {
            mode: Nt.mode,
          })),
            e?.(null));
          return;
        }
        ({ address: Se, name: Qe } = Ue);
      }
    }
    await $t(
      { address: Se || "wss://dev-server.voxelrush.app", name: Qe },
      z("embedJoining", { name: Qe }),
    );
  }
  return (
    da(() => {
      (Ie(), Le(), Fe(), u.open && !x && he());
    }),
    setInterval(() => {
      !d.hidden && !u.open && !R && !O.size && ne(Ve);
    }, 15e3),
    window.addEventListener(
      "keydown",
      (ce) => {
        ce.key === "Escape" &&
          !d.hidden &&
          !u.open &&
          (ce.preventDefault(),
          ce.stopImmediatePropagation(),
          mi("lobby-close").click());
      },
      !0,
    ),
    () => {
      ((at = "modes"),
        Le(),
        (d.hidden = !1),
        J(""),
        ne(Ve),
        mi("lobby-close").focus());
    }
  );
}
