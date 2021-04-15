window.sswMd5 = function(d) {
    var a = function(n, f) {
            var k = n[0],
                g = n[1],
                l = n[2],
                m = n[3];
            k = c(k, g, l, m, f[0], 7, -680876936);
            m = c(m, k, g, l, f[1], 12, -389564586);
            l = c(l, m, k, g, f[2], 17, 606105819);
            g = c(g, l, m, k, f[3], 22, -1044525330);
            k = c(k, g, l, m, f[4], 7, -176418897);
            m = c(m, k, g, l, f[5], 12, 1200080426);
            l = c(l, m, k, g, f[6], 17, -1473231341);
            g = c(g, l, m, k, f[7], 22, -45705983);
            k = c(k, g, l, m, f[8], 7, 1770035416);
            m = c(m, k, g, l, f[9], 12, -1958414417);
            l = c(l, m, k, g, f[10], 17, -42063);
            g = c(g, l, m, k, f[11], 22, -1990404162);
            k = c(k, g, l, m, f[12], 7, 1804603682);
            m = c(m, k, g,
                l, f[13], 12, -40341101);
            l = c(l, m, k, g, f[14], 17, -1502002290);
            g = c(g, l, m, k, f[15], 22, 1236535329);
            k = e(k, g, l, m, f[1], 5, -165796510);
            m = e(m, k, g, l, f[6], 9, -1069501632);
            l = e(l, m, k, g, f[11], 14, 643717713);
            g = e(g, l, m, k, f[0], 20, -373897302);
            k = e(k, g, l, m, f[5], 5, -701558691);
            m = e(m, k, g, l, f[10], 9, 38016083);
            l = e(l, m, k, g, f[15], 14, -660478335);
            g = e(g, l, m, k, f[4], 20, -405537848);
            k = e(k, g, l, m, f[9], 5, 568446438);
            m = e(m, k, g, l, f[14], 9, -1019803690);
            l = e(l, m, k, g, f[3], 14, -187363961);
            g = e(g, l, m, k, f[8], 20, 1163531501);
            k = e(k, g, l, m, f[13], 5, -1444681467);
            m = e(m, k, g, l, f[2], 9, -51403784);
            l = e(l, m, k, g, f[7], 14, 1735328473);
            g = e(g, l, m, k, f[12], 20, -1926607734);
            k = b(g ^ l ^ m, k, g, f[5], 4, -378558);
            m = b(k ^ g ^ l, m, k, f[8], 11, -2022574463);
            l = b(m ^ k ^ g, l, m, f[11], 16, 1839030562);
            g = b(l ^ m ^ k, g, l, f[14], 23, -35309556);
            k = b(g ^ l ^ m, k, g, f[1], 4, -1530992060);
            m = b(k ^ g ^ l, m, k, f[4], 11, 1272893353);
            l = b(m ^ k ^ g, l, m, f[7], 16, -155497632);
            g = b(l ^ m ^ k, g, l, f[10], 23, -1094730640);
            k = b(g ^ l ^ m, k, g, f[13], 4, 681279174);
            m = b(k ^ g ^ l, m, k, f[0], 11, -358537222);
            l = b(m ^ k ^ g, l, m, f[3], 16, -722521979);
            g = b(l ^ m ^ k, g, l, f[6], 23, 76029189);
            k = b(g ^ l ^ m, k, g, f[9], 4, -640364487);
            m = b(k ^ g ^ l, m, k, f[12], 11, -421815835);
            l = b(m ^ k ^ g, l, m, f[15], 16, 530742520);
            g = b(l ^ m ^ k, g, l, f[2], 23, -995338651);
            k = h(k, g, l, m, f[0], 6, -198630844);
            m = h(m, k, g, l, f[7], 10, 1126891415);
            l = h(l, m, k, g, f[14], 15, -1416354905);
            g = h(g, l, m, k, f[5], 21, -57434055);
            k = h(k, g, l, m, f[12], 6, 1700485571);
            m = h(m, k, g, l, f[3], 10, -1894986606);
            l = h(l, m, k, g, f[10], 15, -1051523);
            g = h(g, l, m, k, f[1], 21, -2054922799);
            k = h(k, g, l, m, f[8], 6, 1873313359);
            m = h(m, k, g, l, f[15], 10, -30611744);
            l = h(l, m, k, g, f[6], 15, -1560198380);
            g = h(g, l, m, k,
                f[13], 21, 1309151649);
            k = h(k, g, l, m, f[4], 6, -145523070);
            m = h(m, k, g, l, f[11], 10, -1120210379);
            l = h(l, m, k, g, f[2], 15, 718787259);
            g = h(g, l, m, k, f[9], 21, -343485551);
            n[0] = p(k, n[0]);
            n[1] = p(g, n[1]);
            n[2] = p(l, n[2]);
            n[3] = p(m, n[3])
        },
        b = function(n, f, k, g, l, m) { f = p(p(f, n), p(g, m)); return p(f << l | f >>> 32 - l, k) },
        c = function(n, f, k, g, l, m, r) { return b(f & k | ~f & g, n, f, l, m, r) },
        e = function(n, f, k, g, l, m, r) { return b(f & g | k & ~g, n, f, l, m, r) },
        h = function(n, f, k, g, l, m, r) { return b(k ^ (f | ~g), n, f, l, m, r) },
        q = "0123456789abcdef".split("");
    window.sswMd5 = function(n) {
        var f =
            n;
        txt = "";
        var k = f.length;
        n = [1732584193, -271733879, -1732584194, 271733878];
        var g;
        for (g = 64; g <= f.length; g += 64) {
            var l, m = f.substring(g - 64, g),
                r = [];
            for (l = 0; 64 > l; l += 4) r[l >> 2] = m.charCodeAt(l) + (m.charCodeAt(l + 1) << 8) + (m.charCodeAt(l + 2) << 16) + (m.charCodeAt(l + 3) << 24);
            a(n, r)
        }
        f = f.substring(g - 64);
        l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (g = 0; g < f.length; g++) l[g >> 2] |= f.charCodeAt(g) << (g % 4 << 3);
        l[g >> 2] |= 128 << (g % 4 << 3);
        if (55 < g)
            for (a(n, l), g = 0; 16 > g; g++) l[g] = 0;
        l[14] = 8 * k;
        a(n, l);
        for (f = 0; f < n.length; f++) {
            k = n;
            g = f;
            l = n[f];
            m = "";
            for (r =
                0; 4 > r; r++) m += q[l >> 8 * r + 4 & 15] + q[l >> 8 * r & 15];
            k[g] = m
        }
        return n.join("")
    };
    var p = function(n, f) { return n + f & 4294967295 };
    "5d41402abc4b2a76b9719d911017c592" != this.sswMd5("hello") && (p = function(n, f) { var k = (n & 65535) + (f & 65535); return (n >> 16) + (f >> 16) + (k >> 16) << 16 | k & 65535 });
    return window.sswMd5(d)
};
if ("undefined" === typeof sswAppJS) {
    var checkUser = function(d) {
            if ("undefined" != typeof sswApp["default"] && 0 == sswApp["default"]) {
                var a = { _sid: sswCookie("hesid"), hash_key: sswCookie("hash_key") },
                    b = !1;
                "undefined" !== typeof localStorage && (d.cookie("cart") && localStorage.getItem("ssw_cart") != d.cookie("cart") && (b = !0, a.cart_token = d.cookie("cart")), localStorage.getItem("ssw_our_revenue") && (b = !0, a.revenue = JSON.parse(localStorage.getItem("ssw_our_revenue"))));
                a.hash_key || (b = !0);
                "undefined" !== typeof sswApp.cart_item_count &&
                    (a.cart_item_count = sswApp.cart_item_count);
                b && d.post(sswProxyUrl + "/lite2/user/check", a, function(e) { "undefined" !== typeof e.hash_key && e.hash_key && ssw.cookie("hash_key", e.hash_key, { expires: 30, path: "/", secure: "https:" === location.protocol, samesite: "Lax" }); "undefined" !== typeof a.cart_token && localStorage.setItem("ssw_cart", a.cart_token); "undefined" !== typeof a.revenue && localStorage.removeItem("ssw_our_revenue") }, "json")
            } else {
                b = {
                    _sid: sswCookie("hesid"),
                    hash_key: sswCookie("hash_key"),
                    from_mail_id: sswGetParameterByName("mail_id"),
                    from_hash_key: sswGetParameterByName("from_hash_key"),
                    from_email: sswGetParameterByName("email"),
                    is_auth_redirect: sswIsOauthRedirectFrom(),
                    customer_locale: Shopify.locale
                };
                if ("undefined" !== typeof sswApp.customer && (b.customer_id = sswApp.customer.id, "undefined" !== typeof localStorage)) {
                    var c = localStorage.getItem("ssw-wishlist");
                    c && (b.wishlist = JSON.parse(c), localStorage.removeItem("ssw-wishlist"));
                    if (c = localStorage.getItem("challenge_password")) b.challenge_password = c, localStorage.removeItem("challenge_password")
                }
                "undefined" !=
                typeof sswCookie("cart") && (b.cart_token = sswCookie("cart"));
                "undefined" != typeof sswCookie("ssw_our_session") && (b.ssw_our_session = sswCookie("ssw_our_session"));
                "undefined" != typeof sswCookie("ssw_referrer") && (b.ssw_referrer = sswCookie("ssw_referrer"));
                "undefined" !== typeof localStorage && (c = localStorage.getItem("ssw_our_revenue")) && (b.revenue = JSON.parse(c));
                "undefined" !== typeof sswApp.cart_item_count && (b.cart_item_count = sswApp.cart_item_count);
                ssw.ajax({
                    type: "post",
                    url: sswProxyUrl + "/lite2/user/check",
                    data: b,
                    success: function(e) {
                        window.ssw_enable_quickview = e.enable_quickview;
                        if ("undefined" != typeof e.discount && e.discount) {
                            d("#ssw-discount-code").html(e.discount.code);
                            d("#discount-date").html(sswLangs.t("valid_until_coupon", [e.discount.date]));
                            var h = d("#discount-instructions");
                            h.html(e.discount.instructions + h.html());
                            sswLibraryLoaded(function() { d("#ssw-discount-modal").sswModal() })
                        }
                        1 == e.show_follow && "undefined" != typeof showFollowPopup && setTimeout(function() { showFollowPopup() }, 5E3);
                        "logout" != e.result && "User not found" !=
                            e.result || sswCookie("hesid", null);
                        e.hash_key && ssw.cookie("hash_key", e.hash_key, { expires: 30, path: "/", secure: "https:" === location.protocol, samesite: "Lax" });
                        userChecked = !0;
                        window.ssw.usercheckResponse = e;
                        window.ssw.isFree = e.isFree;
                        window.ssw.isLite = e.isLite;
                        window.ssw.apps = e.apps;
                        window.ssw.suggest_login = e.suggest_login;
                        window.ssw.suggest_login_period = e.suggest_login_period;
                        window.ssw.login_redirect_url = e.login_redirect_url;
                        e.modules && (window.ssw.modules = e.modules);
                        window.sswHelperLoaded ? sswCheckBranding() :
                            window.addEventListener("sswhelperload", sswCheckBranding);
                        "undefined" !== typeof sswApp.customer && localStorage.getItem("ssw-wishlist") && localStorage.removeItem("ssw-wishlist");
                        localStorage.removeItem("ssw_our_revenue");
                        sswDispatchEvent("sswusercheck", { detail: { ajaxResponse: e }, bubbles: !0, cancelable: !1 })
                    },
                    cacheSuccess: function(e) {
                        window.ssw.usercheckResponse = e;
                        window.ssw.isFree = e.isFree;
                        window.ssw.isLite = e.isLite;
                        window.ssw.apps = e.apps;
                        window.ssw.suggest_login = e.suggest_login;
                        window.ssw.suggest_login_period =
                            e.suggest_login_period;
                        window.ssw.login_redirect_url = e.login_redirect_url;
                        e.modules && (window.ssw.modules = e.modules)
                    },
                    dataType: "json",
                    async: !0
                })
            }
        },
        sswIsOauthRedirectFrom = function() {
            var d = 0;
            if (30 < location.hash.length) {
                d = !1;
                try { d = JSON.parse(decodeURIComponent(location.hash.slice(1))) } catch (a) {}
                d = d && d.oauth_redirect && d.service
            }
            return d
        },
        sswCheckBranding = function() {
            if (window.ssw.usercheckResponse.isFree || window.ssw.usercheckResponse.isLite) {
                var d = {
                        "#login_modal .ssw-modal-footer": { name: "login_modal", css: { "margin-top": "5px" } },
                        "#signup_modal .ssw-modal-footer": { name: "signup_modal", css: { "margin-top": "5px" } },
                        "#notifyModal .ssw-modal-footer": { name: "notify_modal", css: { "margin-top": "10px" } },
                        ".ssw-social-login-widget": { name: "login_page", css: { "font-size": "12px", "margin-top": "10px", "float": "none" } },
                        "#ssw-product-modal .ssw-modal-footer": { name: "product_modal", css: { "margin-top": "10px" } },
                        "#ssw-action-modal .ssw-modal-footer": { name: "action_modal", css: { "margin-top": "10px" } }
                    },
                    a = ssw(window.ssw.usercheckResponse.watermark),
                    b;
                for (b in d)
                    if (d.hasOwnProperty(b)) {
                        var c =
                            a.clone();
                        c.attr("href", c.attr("href") + d[b].name).css(d[b].css);
                        ssw(b).append(c)
                    }
            } else ssw("#ssw-product-modal .ssw-modal-footer").css("display", "none")
        },
        sswCookie = function(d, a, b, c) {
            b = b ? b : 168;
            if (a && b) {
                var e = new Date;
                e.setHours(e.getHours() + b);
                a = escape(a) + (null == b ? "" : "; expires=" + e.toUTCString()) + ("https:" === location.protocol ? "; secure" : "") + (!c || "https:" !== location.protocol && "None" === c ? "" : "; SameSite=" + c);
                document.cookie = d + "=" + a;
                return this
            }
            return (d = document.cookie.match(new RegExp("(?:^|; )" + d.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,
                "\\$1") + "=([^;]*)"))) ? decodeURIComponent(d[1]) : void 0
        },
        sswCookieLoad = function(d) {
            d.cookie = function(a, b, c) {
                if (1 < arguments.length && (null === b || "object" !== typeof b)) {
                    c = d.extend({}, c);
                    null === b && (c.expires = -1);
                    if ("number" === typeof c.expires) {
                        var e = c.expires;
                        var h = c.expires = new Date;
                        h.setDate(h.getDate() + e)
                    } else "string" === typeof c.expires && (e = parseInt(c.expires), h = c.expires = new Date, h.setHours(h.getHours() + e));
                    return document.cookie = [encodeURIComponent(a), "=", c.raw ? String(b) : encodeURIComponent(String(b)),
                        c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : "", c.samesite ? "; SameSite=" + c.samesite : ""
                    ].join("")
                }
                c = b || {};
                e = c.raw ? function(q) { return q } : decodeURIComponent;
                return (h = (new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)")).exec(document.cookie)) ? e(h[1]) : null
            };
            null == d.cookie("hesid") && d.cookie("hesid", function() {
                var a = function() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) };
                return a() + a() + "-" +
                    a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }(), { path: "/", secure: "https:" === location.protocol, samesite: "https:" === location.protocol ? "None" : void 0 })
        },
        syncCredentials = function(d) {
            if (sswApp && sswApp.customer && sswApp.customer.email) {
                var a = btoa(sswApp.customer.email),
                    b = localStorage.getItem(a);
                b && d.ajax({
                    type: "POST",
                    url: sswProxyUrl + "/lite2/auth/encrypt",
                    data: {
                        _sid: ssw.cookie("hesid"),
                        hash_key: ssw.cookie("hash_key"),
                        email: sswApp.customer.email,
                        password: atob(atob(atob(b.split("").reverse().join("")).split("").reverse().join("")).split("").reverse().join("")),
                        sync_credentials: !0
                    },
                    dataType: "json",
                    success: function(c) { "undefined" !== typeof c.new_password && c.new_password && "undefined" !== typeof localStorage && (localStorage.setItem("challenge_password", c.new_password), localStorage.removeItem(a)) }
                })
            }
        },
        sswLoadScript = function(d, a, b) {
            var c = document.createElement("script");
            c.type = "text/javascript";
            "undefined" !== typeof b && b && (c.async = !0);
            if (0 <= d.indexOf("ssw-lib")) {
                b = document.getElementsByTagName("script");
                for (var e in b) {
                    var h = b[e];
                    if ("undefined" != typeof h && "string" ===
                        typeof h.src && 0 <= h.src.indexOf("ssw-lib")) return
                }
                c.setAttribute("data-no-instant", !0)
            }
            c.readyState ? c.onreadystatechange = function() { if ("loaded" == c.readyState || "complete" == c.readyState) c.onreadystatechange = null, "function" == typeof a && a() } : c.onload = function() { "function" == typeof a && a() };
            c.src = d;
            document.getElementsByTagName("head")[0].appendChild(c)
        },
        sswUserChecked = function(d) {
            if ("undefined" != typeof userChecked && userChecked) d(ssw);
            else var a = setInterval(function() {
                "undefined" != typeof userChecked && userChecked &&
                    (clearInterval(a), d(ssw))
            }, 10)
        },
        sswLibraryLoaded = function(d) {
            if ("undefined" == typeof sswLibraryJsLoaded) var a = setInterval(function() { "undefined" != typeof sswLibraryJsLoaded && sswLibraryJsLoaded && (clearInterval(a), d(ssw)) }, 10);
            else d(ssw)
        },
        sswCoreLoaded = function(d) {
            if ("undefined" == typeof sswCoreJsLoaded) var a = setInterval(function() { "undefined" != typeof sswCoreJsLoaded && sswCoreJsLoaded && (clearInterval(a), d(ssw)) }, 10);
            else d(ssw)
        },
        sswDispatchEvent = function(d, a) {
            _sswNewDispatchEvent(d, a);
            try {
                var b = new CustomEvent(d,
                    a)
            } catch (c) { b = document.createEvent("Event"), b.initEvent(d, a.bubbles ? a.bubbles : !0, a.cancellable ? a.cancellable : !1), a.detail && (b.detail = a.detail) }
            document.dispatchEvent(b)
        },
        sswGetBiggestPhoto = function(d, a) {
            var b = 0,
                c = d[b],
                e = document.createElement("img");
            e.src = d[b].src;
            e.onload = function() {
                c.width * c.height < e.width * e.height && (c = d[b]);
                d[b + 1] ? (b++, e.src = d[b].src) : a(c)
            }
        },
        sswGetPopupBounds = function(d, a) { return "width=" + d + ", height=" + a + ", top=" + (screen.height / 2 - a / 2 - 60) + ", left=" + (screen.width / 2 - d / 2 - 8) },
        sswGetParameterByName =
        function(d) {
            d = d.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            d = (new RegExp("[\\?&]" + d + "=([^&#]*)")).exec(location.search);
            return null == d ? "" : decodeURIComponent(d[1].replace(/\+/g, " "))
        },
        sswIsWebView = function() { isWebViewRegExp.lastIndex = 0; return isWebViewRegExp.test(window.navigator.userAgent) },
        sswLazyLoad = function(d, a, b) {
            var c = "data-src";
            b && b.data_attr && (c = b.data_attr);
            a = (d ? d : document).querySelectorAll(a + "[" + c + '*="//"]');
            if ("IntersectionObserver" in window) {
                b = { threshold: .1 };
                d && -1 < d.toString().indexOf("Element") &&
                    (b.root = d);
                var e = new IntersectionObserver(function(h, q) {
                    h.forEach(function(p) {
                        if (p.isIntersecting) {
                            p = p.target;
                            var n = p.getAttribute(c);
                            "IMG" == p.tagName ? p.src = n : p.style.backgroundImage = "url(" + n + ")";
                            e.unobserve(p)
                        }
                    })
                }, b);
                a.forEach(function(h) { e.observe(h) })
            } else Array.prototype.slice.call(a, 0).forEach(function(h) { var q = h.getAttribute(c); "IMG" == h.tagName ? h.src = q : h.style.backgroundImage = "url(" + q + ")" })
        },
        sswAppJS = !0;
    (function(d, a, b) {
        try {
            if (function(q) {
                    for (var p = document.cookie.split(";"), n = 0; n < p.length; ++n) {
                        var f =
                            p[n].trim().split("=");
                        if (f[0] == q) return f[1]
                    }
                    return null
                }("hash_key"))
                if (sswApp.customer) sswRun(function(q) {
                    q(b).on("click", 'a[href$="/account/logout"]', function(p) {
                        a.removeItem("ssw_user_session_token");
                        a.removeItem("ssw-helpers-content")
                    })
                }), sswUserChecked(function(q) { q.usercheckResponse.user_session_token && a.setItem("ssw_user_session_token", JSON.stringify({ token: q.usercheckResponse.user_session_token, customer_id: parseFloat(q("#ssw_cid").val()), time: (new Date).getTime() })) });
                else {
                    var c = a.getItem("ssw_user_session_token") &&
                        JSON.parse(a.getItem("ssw_user_session_token"));
                    if (c)
                        if (c.time < (new Date).getTime() - 144E5) {
                            var e = new XMLHttpRequest;
                            e.open("POST", sswProxyUrl + "/lite2/user/prolongsession");
                            var h = new FormData;
                            h.append("token", c.token);
                            h.append("customer_id", c.customer_id);
                            e.send(h);
                            e.onreadystatechange = function() {
                                a.removeItem("ssw_user_session_token");
                                if (4 == e.readyState) {
                                    var q = JSON.parse(e.responseText);
                                    if (q.success) {
                                        var p = new XMLHttpRequest;
                                        p.open("POST", "/account/login");
                                        var n = p.setRequestHeader;
                                        p.setRequestHeader =
                                            function(k, g) { "X-Requested-With" != k && n.call(this, k, g) };
                                        var f = new FormData;
                                        f.append("form_type", "customer_login");
                                        f.append("utf8", "\u2713");
                                        f.append("customer[email]", q.email);
                                        f.append("customer[password]", q.password);
                                        p.onreadystatechange = function() { 4 == p.readyState && location.reload() };
                                        p.send(f)
                                    }
                                }
                            }
                        } else a.removeItem("ssw_user_session_token")
                }
            else a.removeItem("ssw_user_session_token"), a.setItem("debug_login", "no hash_key")
        } catch (q) {}
    })(window, localStorage, document);
    var ssw_is_auth_page = -1 < location.pathname.indexOf("/account"),
        ssw_message_selector = ssw_is_auth_page ? 'form[action*="/account"]:not(#he_customer_login, #he_create_customer)' : "#login_modal .login-failed",
        IS_WEBVIEW_RULES = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(wv|.0.0.0)", "Linux; U; Android", "(\\bLine\\/|\\bTwitter|\\bInstagram)"],
        isWebViewRegExp = new RegExp("(" + IS_WEBVIEW_RULES.join("|") + ")", "ig");
    (function(d) {
        var a = {},
            b = {};
        d.sswAddEventListener = function(c, e) { c && c in b && !0 === b[c] ? e() : (a[c] || (a[c] = []), a[c].push(e)) };
        d._sswNewDispatchEvent = function(c,
            e) {
            c && (b[c] = !0);
            Array.isArray(a[c]) && a[c].map(function(h) { h() })
        }
    })(window);
    if (!("placeholder" in document.createElement("input"))) {
        sswHead = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = sswProxyUrl + "/public/js/core/placeholders.js";
        sswHead.appendChild(script)
    }
    var shop_url = "http://" + Shopify.shop,
        sswJqLoaded = !1,
        ssw = !1,
        userChecked = !1,
        loadSswWidgetListingInterval = [],
        sswProductPins = [],
        sswLoadCss = function() {
            function d(e) {
                this.linkElem =
                    e.linkElem;
                this.cb = e.cb
            }

            function a() { d.apply(this, arguments) }

            function b() { d.apply(this, arguments) }

            function c(e) {
                this.onload = e.onload;
                this.href = e.href;
                this.id = e.id;
                this.strategy = e.strategy;
                this.linkElem = null
            }
            d.prototype.listen = function() { console.error("Method 'listen' is not implemented") };
            a.prototype.listen = function() { this.linkElem.onload = this.cb };
            b.prototype.listen = function() {
                var e = document.createElement("img");
                e.onerror = this.cb;
                e.src = this.linkElem.href
            };
            c.prototype.load = function() {
                this.initTag();
                this.bindListeners();
                this.appendTag()
            };
            c.prototype.initTag = function() {
                this.linkElem = document.createElement("link");
                this.linkElem.id = this.id;
                this.linkElem.rel = "stylesheet";
                this.linkElem.type = "text/css";
                this.linkElem.href = this.href;
                this.linkElem.media = "all";
                return this.linkElem
            };
            c.prototype.bindListeners = function() {
                (new this.strategy({ linkElem: this.linkElem, cb: this.onload })).listen()
            };
            c.prototype.appendTag = function() { document.head.appendChild(this.linkElem) };
            return function(e, h, q) {
                var p = "onload" in HTMLLinkElement.prototype ?
                    a : b;
                document.getElementById(h) || (new c({ onload: q, href: e, id: h, strategy: p })).load()
            }
        }(),
        sswLoadJg = !0;
    if ("undefined" !== typeof jQuery && -1 == jQuery.fn.jquery.indexOf("1.8")) { var sswClientJqVernums = jQuery.fn.jquery.split("."); if (1 < parseInt(sswClientJqVernums[0]) || 7 < parseInt(sswClientJqVernums[1])) sswLoadJg = !1 }
    "undefined" !== typeof sswLoadNewJq && sswLoadNewJq || sswLoadJg ? sswLoadScript("//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", function() {
        ssw = jQuery.noConflict(!0);
        sswJqLoaded = !0;
        sswDispatchEvent("sswjqueryload", { detail: { ssw: ssw }, bubbles: !0, cancelable: !1 });
        sswCookieLoad(ssw);
        syncCredentials(ssw);
        checkUser(ssw)
    }) : (ssw = jQuery, sswJqLoaded = !0, sswDispatchEvent("sswjqueryload", { detail: { ssw: ssw }, bubbles: !0, cancelable: !1 }), sswCookieLoad(ssw), syncCredentials(ssw), checkUser(ssw));
    if ("undefined" !== typeof sswApp.customer) {
        var ssw_checkout_url = sswGetParameterByName("checkout_url");
        ssw_checkout_url && (location.href = ssw_checkout_url)
    }
    sswHelperLoaded = !1;
    var helperCallback = function(d) {
            var a = document.createElement("div");
            a.id =
                "ssw-async-html";
            a.innerHTML = d;
            var b = a.querySelector("#ssw-async-html");
            b && (a.innerHTML = b.innerHTML);
            a.style.display = "none";
            document.body.appendChild(a);
            b = a.getElementsByTagName("script");
            for (var c = 0; c < b.length; c++) try { eval(b[c].text) } catch (e) { console.log(b[c].text, e) }
            sswDispatchEvent("sswhelperload", { detail: { ajaxResponse: d, helperContainer: a }, bubbles: !0, cancelable: !1 });
            sswHelperLoaded = !0
        },
        cache_content = localStorage.getItem("ssw-helpers-content");
    cache_content && helperCallback(cache_content);
    var sswXhr =
        new XMLHttpRequest;
    sswXhr.open("GET", "/?view=ssw-async");
    sswXhr.onreadystatechange = function() { 4 == sswXhr.readyState && (localStorage.getItem("ssw-helpers-content") || helperCallback(sswXhr.responseText), localStorage.setItem("ssw-helpers-content", sswXhr.responseText)) };
    sswXhr.send();
    window.addEventListener("focus", function() { localStorage.removeItem("ssw-helpers-content") });
    var sswCssId = "socialshopwave";
    sswLoadCss("//cdn.shopify.com/s/files/1/0431/4732/9696/t/2/assets/socialshopwave.css?v=18000418590801001336", sswCssId, function() {
        setTimeout(function() {
            window.sswCssLoaded = !0;
            sswDispatchEvent("sswcssload", { detail: {}, bubbles: !0, cancelable: !1 })
        }, 0)
    });
    var sswCustomCssId = "socialshopwave-custom";
    sswLoadCss("//cdn.shopify.com/s/files/1/0431/4732/9696/t/2/assets/socialshopwave-custom.css?v=11160318154034397263", sswCustomCssId, function() {
        setTimeout(function() {
            window.sswCustomCssLoaded = !0;
            sswDispatchEvent("sswcssload.custom", { detail: {}, bubbles: !0, cancelable: !1 })
        }, 0)
    });
    sswLoadScript("//cdn.shopify.com/s/files/1/0431/4732/9696/t/2/assets/ssw-libraries.js?v=3615134689696387121", !1, !0);
    (function() {
        if ("object" === typeof ssw_scripts && ssw_scripts.length)
            for (var d in ssw_scripts)
                if (ssw_scripts.hasOwnProperty(d)) {
                    var a =
                        ssw_scripts[d]; - 1 == a.indexOf(Shopify.shop) && (a += "?shop=" + Shopify.shop);
                    document.querySelector('script[src="' + a + '"]') || sswLoadScript(a, !1, !0)
                }
    })();
    if ("undefined" === typeof sswApp.customer) {
        var serviceUserChecker = function(d, a) {
                FB.api("/me", { fields: "id,email" }, function(b) {
                    ssw.ajax({
                        type: "POST",
                        url: sswProxyUrl + "/lite2/auth/service",
                        data: { _sid: ssw.cookie("hesid"), user_id: d.authResponse.userID, email: b.email, service: a, access_token: d.authResponse.accessToken, hash_key: ssw.cookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token") },
                        success: function(c) {
                            var e = new ShopifyLogin;
                            "undefined" !== typeof c.service_id && (service_id = c.service_id);
                            c.status ? c.password && c.email ? (sl = sswSocialLogin = 1, e.preLogin(c.email, c.password), c.account_activation_token ? e.login({ customer_id: c.customer_id, token: c.account_activation_token, verified: c.verified, service: a, customer: { password: c.password, password_confirmation: c.password } }) : e.login({ verified: c.verified, service: a })) : targetSEMModal(c, "facebook") : c.termsSignup || c.acceptMarketing ? showAcceptTermsForm(c,
                                "facebook", d) : c.isOldCustomer ? targetSEMModal(c, "facebook") : e.setServiceUser(d, "facebook")
                        },
                        dataType: "json"
                    })
                })
            },
            validateLogin = function() {
                var d = ssw("#sem_modal_form");
                d.validate({
                    rules: { password: { required: !0 } },
                    highlight: function(a) { ssw(a).closest(".ssw-control-group").addClass("ssw-error") },
                    success: function(a) { ssw(a).closest(".ssw-control-group").removeClass("ssw-error") },
                    submitHandler: function() {
                        var a = new ShopifyLogin,
                            b = ssw("#sem_email").val(),
                            c = ssw("#sem_password").val();
                        ssw.cookie("ssw_verify_token",
                            sswMd5(c + btoa(b)), { expires: 30, path: "/", secure: "https:" === location.protocol, samesite: "Lax" });
                        a.preLogin(b, c);
                        b = d.data("account-activation");
                        "object" == typeof b ? (b.customer = { password: c, password_confirmation: c }, a.login(b), d.data("account-activation", !1)) : a.login()
                    }
                });
                ssw("#set-email-form").validate({
                    rules: { email: { required: !0, email: !0 } },
                    highlight: function(a) { ssw(a).closest(".ssw-control-group").addClass("ssw-error") },
                    success: function(a) { ssw(a).closest(".ssw-control-group").removeClass("ssw-error") },
                    submitHandler: function() {
                        ssw.ajax({
                            type: "POST",
                            url: sswProxyUrl + "/lite2/auth/setEmail",
                            data: { _sid: ssw.cookie("hesid"), verify_token: ssw.cookie("ssw_verify_token"), service_id: ssw("#service_id").val(), email: ssw("#set-email-input").val() },
                            success: function(a) {
                                switch (a.error) {
                                    case 0:
                                        var b = new ShopifyLogin;
                                        b.preLogin(a.email, a.password);
                                        b.login({ verified: a.verified });
                                        break;
                                    case 1:
                                        a.user && (b = [], a.user.twitter || b.push(".ssw-twconnect"), a.user.tumblr || b.push(".ssw-tmconnect"), a.user.instagram || b.push(".ssw-inconnect"), a = ssw("#login_modal"), a.find(b.join()).hide(),
                                            a.sswModal("show"), addMessage(ssw_message_selector, sswLangs.t("this_email_is_already_used"), "info"));
                                        break;
                                    case 2:
                                        addMessage2SetMailForm(sswLangs.t("incorrect_data"));
                                        break;
                                    case 3:
                                        addMessage2SetMailForm(sswLangs.t("tumblr_user_not_found"));
                                        break;
                                    case 4:
                                        addMessage2SetMailForm(sswLangs.t("not_created_customer_on_shopify"));
                                        break;
                                    case 5:
                                        addMessage2SetMailForm(sswLangs.t("problem_on_create_user"))
                                }
                            },
                            dataType: "json"
                        })
                    }
                });
                ssw("#he_create_customer").validate({
                    rules: { email: { required: !0, email: !0 } },
                    highlight: function(a) { ssw(a).closest(".ssw-control-group").addClass("ssw-error") },
                    success: function(a) { ssw(a).closest(".ssw-control-group").removeClass("ssw-error") },
                    submitHandler: function() {
                        (new ShopifyLogin).signUp()
                    }
                });
                ssw("#he_customer_login").validate({
                    rules: { "customer[email]": { required: !0, email: !0 }, "customer[password]": { required: !0, minlength: 1 } },
                    highlight: function(a) { ssw(a).closest(".ssw-control-group").addClass("ssw-error") },
                    success: function(a) { ssw(a).closest(".ssw-control-group").removeClass("ssw-error") },
                    submitHandler: function() {
                        (new ShopifyLogin).login()
                    }
                })
            },
            onOpenForm =
            function() {
                ssw(".ssw-login form").css("opacity", "1");
                ssw(".ssw-login form input").removeAttr("disabled").attr("enabled", "enabled");
                ssw(".ssw-signup-loading").hide();
                ssw(".he-login").css("opacity", "1");
                ssw(".he-login input").removeAttr("disabled").attr("enabled", "enabled");
                ssw(".ssw-login-loading").hide()
            },
            onSubmitForm = function() {
                ssw(".ssw-login form").css("opacity", "0.3");
                ssw(".ssw-login form input").removeAttr("enabled").attr("disabled", "disabled");
                ssw(".ssw-signup-loading").show();
                ssw(".he-login").css("opacity",
                    "0.3");
                ssw(".he-login input").removeAttr("enabled").attr("disabled", "disabled");
                ssw(".ssw-login-loading").show()
            },
            addMessage2SetMailForm = function(d) {
                var a = ssw("#set-email-error");
                a.html(d);
                a.show()
            },
            loginLoaderCancel = function() { ssw("#ssw-login-loader").parent().remove() },
            loginLoader = function() {
                ssw(".ssw-modal").sswModal("hide");
                ssw("body").prepend('<div style="background: none repeat scroll 0 0 rgba(255, 255, 255, 0.77);height: 100%;position: fixed;width: 100%;z-index: 999;"><div class="ssw-login-loading" id="ssw-login-loader"> <span class="ssw-spin ssw-loader"></span> </div> </div>');
                ssw("#ssw-login-loader").css("opacity", 1);
                ssw("#ssw-login-loader").css({ position: "fixed", top: "50%", left: "50%" })
            },
            shopCallback4TTI = function(d, a) {
                onSubmitForm();
                var b = sswProxyUrl + "/lite2/auth/" + d + "?_sid=" + ssw.cookie("hesid") + "&verify_token=" + ssw.cookie("ssw_verify_token") + "&shop=" + encodeURIComponent(Shopify.shop);
                sswIsWebView() ? (b += "&oauth_redirect_uri=" + encodeURIComponent(location.href), location.href = b) : ssw.oauthpopup({
                    path: b,
                    callback: function() {
                        sswDispatchEvent("sswoauthcallback", {
                            detail: { service: a },
                            bubbles: !0,
                            cancellable: !1
                        })
                    }
                })
            },
            targetSEMModal = function(d, a) {
                var b = "";
                d.first_name && (b += d.first_name + " ");
                d.last_name && (b += d.last_name);
                if ("invited" == d.state) {
                    ssw("#sem_btn").hide();
                    ssw("#sem_forgot").hide();
                    ssw("#sem_password").hide();
                    var c = sswLangs.t("already_registered_and_sent_invite_message", [d.email, a])
                } else if ("enabled" != d.state) ssw("#sem_btn").hide(), ssw("#sem_forgot").hide(), d.account_activation_token && d.email ? (c = sswLangs.t("already_registered_to_social_service", [d.email, a]), ssw("#sem_modal_form").data("account-activation", { customer_id: d.customer_id, token: d.account_activation_token })) : (ssw("#sem_password").hide(), c = sswLangs.t("incorrect_credentials", [d.email, a]));
                else {
                    if (d.verified && typeof window.ssw.usercheckResponse.multipass_enabled && window.ssw.usercheckResponse.multipass_enabled) {
                        (new ShopifyLogin).multiPassLogin();
                        return
                    }
                    c = sswLangs.t("already_registered_to_social_service", [d.email, a])
                }
                onOpenForm();
                ssw("#social_exist_modal .ssw-img-circle").hasClass("ssw-hide") || ssw("#social_exist_modal .ssw-img-circle").addClass("ssw-hide");
                if (d.photo_url) {
                    var e = new Image;
                    e.onload = function() {
                        ssw("#social_exist_modal .ssw-img-circle").removeClass("ssw-hide");
                        ssw("#social_exist_modal .ssw-img-circle").attr("src", d.photo_url)
                    };
                    e.src = d.photo_url
                }
                ssw("#sem_name").html(b);
                ssw("#sem_email").val(d.email);
                ssw("#sem_text").html(c);
                ssw("#login_modal").sswModal("hide");
                ssw("#social_exist_modal").sswModal()
            },
            showAcceptTermsForm = function(d, a, b) {
                a ? (ssw("#accept-terms-modal").data("own-app", { user: b, service: a }), ssw(".terms-email-group").hide()) : ssw("#accept-terms-modal").removeData("own-app");
                ssw("#signup_modal").sswModal("hide");
                ssw("#login_modal").sswModal("hide");
                d.service_id && ssw("#ssw-accept-terms-service_id").val(d.service_id);
                d.email && (ssw("#terms-email-input").val(d.email), ssw(".terms-email-group").hide());
                d.termsLink && (ssw("#accept-terms-modal .terms-link").attr("href", d.termsLink).show(), ssw("#accept-terms-modal .terms-span").hide());
                d.termsSignup || (ssw(".accept_terms-group").hide(), ssw("#ssw-create-account-button").show());
                d.acceptMarketing || (ssw(".accepts_marketing-group").hide(),
                    ssw("#ssw-accept-marketing-checkbox").prop("checked", 1));
                onOpenForm();
                ssw("#accept-terms-modal").sswModal()
            },
            sswOnAcceptMarketing = function(d) { "accepts_marketing" == d.name && (d.checked ? ssw("#ssw-customer-accepts_marketing").val(!0) : ssw("#ssw-customer-accepts_marketing").val(!1)) },
            sswOnAcceptTerms = function(d) {
                "accept_terms" == d.name ? d.checked ? (ssw("#ssw-cancel-account-button").hide(), ssw("#ssw-create-account-button").show()) : (ssw("#ssw-cancel-account-button").show(), ssw("#ssw-create-account-button").hide()) :
                    "terms" == d.name && (d.checked ? (ssw("#hesy-sign-up-cancel").hide(), ssw("#hesy-sign-up-submit").show()) : (ssw("#hesy-sign-up-cancel").show(), ssw("#hesy-sign-up-submit").hide()))
            },
            sswCancelAccount = function() {
                ssw("#accept-terms-modal").sswModal("hide");
                onOpenForm()
            },
            sswCreateAccount = function() {
                var d = ssw("#accept-terms-modal").data("own-app");
                ssw("#ssw-create-account-button").attr("disabled", "disabled");
                ssw("#ssw-create-account-button").siblings("#ssw-cancel-account-button").attr("disabled", "disabled");
                if (d)(new ShopifyLogin).setServiceUser(d.user,
                    d.service);
                else return ssw.ajax({
                    type: "POST",
                    url: sswProxyUrl + "/lite2/auth/acceptTerms",
                    data: { _sid: ssw.cookie("hesid"), service_id: ssw("#ssw-accept-terms-service_id").val(), accepts_marketing: ssw("#ssw-accept-marketing-checkbox")[0].checked, accept_terms: ssw("#ssw-accept-terms-checkbox")[0].checked, email: ssw("#terms-email-input").val() },
                    success: function(a) {
                        switch (a.error) {
                            case 0:
                                var b = new ShopifyLogin;
                                b.preLogin(a.email, a.password);
                                b.login({ verified: a.verified });
                                break;
                            case 1:
                                a.user && (b = [], a.user.twitter ||
                                    b.push(".ssw-twconnect"), a.user.tumblr || b.push(".ssw-tmconnect"), a.user.instagram || b.push(".ssw-inconnect"), a = ssw("#login_modal"), a.find(b.join()).hide(), a.sswModal("show"), addMessage(ssw_message_selector, sswLangs.t("this_email_is_already_used"), "info"))
                        }
                    },
                    dataType: "json"
                }), !1
            },
            service_id = 0,
            sl = 0,
            sswSocialLogin = 0;
        window.addEventListener("sswoauthcallback", function(d) {
            if (d.detail && -1 !== ["twitter", "tumblr", "instagram"].indexOf(d.detail.service)) {
                var a = d.detail.service;
                ssw.ajax({
                    type: "POST",
                    url: sswProxyUrl +
                        "/lite2/auth/shopCallback",
                    dataType: "json",
                    data: { _sid: ssw.cookie("hesid"), hash_key: ssw.cookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token"), service: a },
                    success: function(b) {
                        sswSocialLogin = 1;
                        "undefined" !== typeof b.service_id && (service_id = b.service_id);
                        if (ssw.isEmptyObject(b)) onOpenForm();
                        else if (b.termsSignup || b.acceptMarketing) showAcceptTermsForm(b);
                        else if (b.password)
                            if (b.isOldCustomer) targetSEMModal(b, a);
                            else {
                                var c = new ShopifyLogin;
                                c.preLogin(b.email, b.password);
                                c.login({ verified: b.verified })
                            }
                        else "undefined" !==
                            typeof b.user_id && b.user_id && b.verified && typeof window.ssw.usercheckResponse.multipass_enabled && window.ssw.usercheckResponse.multipass_enabled ? (c = new ShopifyLogin, c.multiPassLogin()) : (onOpenForm(), ssw("#service_id").val(b.service_id), ssw(".ssw-modal").sswModal("hide"), b.email ? targetSEMModal(b, a) : ssw("#set-email-modal").sswModal())
                    }
                })
            }
        });
        var addMessage = function(d, a, b) {
                b = "undefined" !== typeof b ? "ssw-alert-" + b : "";
                ssw(d).prepend('<div class="ssw-alert ' + b + ' ssw-fade ssw-in"><button class="ssw-close" data-dismiss="ssw-alert">&times;</button>' +
                    a + "</div>")
            },
            ShopifyLogin = function() {
                var d = this;
                this.check_customer_count = 0;
                this.preLogin = function(a, b) {
                    ssw("#ssw-customer-email").val(a);
                    ssw("#ssw-customer-password").val(b)
                };
                this.setServiceUser = function(a, b) {
                    if ("facebook" == b) FB.api("/me", { fields: "id,email,first_name,gender,last_name,link,locale,name,timezone,updated_time,verified" }, function(e) {
                        ssw.ajax({
                            type: "POST",
                            url: sswProxyUrl + "/lite2/auth/setService",
                            data: {
                                user_id: a.authResponse.userID,
                                access_token: a.authResponse.accessToken,
                                user: e,
                                service: b,
                                _sid: ssw.cookie("hesid"),
                                verify_token: ssw.cookie("ssw_verify_token"),
                                accepts_marketing: !ssw.usercheckResponse.acceptMarketing || ssw("#ssw-accept-marketing-checkbox")[0].checked
                            },
                            success: function(h) {
                                service_id = h.service_id;
                                if (0 == h.user_id) onOpenForm(), h.email ? (ssw(".ssw-socialconnect").remove(), ssw("div.ssw-alert").remove(), ssw("#ssw-first_name").val(e.first_name).show(), ssw("#ssw-last_name").val(e.last_name).show(), ssw("#ssw-email").val(e.email), ssw("#login_modal").sswModal("hide"), ssw("#signup_modal").sswModal("show")) :
                                    (ssw("#service_id").val(h.service_id), ssw(".ssw-modal").sswModal("hide"), ssw("#set-email-modal").sswModal());
                                else if ("enabled" != h.state)
                                    if (h.password && h.email) {
                                        var q = new ShopifyLogin;
                                        q.preLogin(h.email, h.password);
                                        h.account_activation_token ? q.login({ customer_id: h.customer_id, token: h.account_activation_token, verified: h.verified, customer: { password: h.password, password_confirmation: h.password } }) : q.login({ verified: h.verified })
                                    } else targetSEMModal(h, "Facebook");
                                else !h.password && h.email ? targetSEMModal(h) :
                                    (d.preLogin(h.email, h.password), d.login())
                            },
                            dataType: "json"
                        })
                    });
                    else if ("gplus" == b) {
                        var c = ssw.extend(a.gplusData, { _sid: ssw.cookie("hesid"), hash_key: sswCookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token") });
                        ssw.ajax({
                            type: "POST",
                            url: sswProxyUrl + "/lite2/auth/glogin",
                            data: c,
                            success: function(e) {
                                sswSocialLogin = 1;
                                service_id = e.service_id;
                                0 == e.user_id ? (onOpenForm(), ssw(ssw(".socialconnect")[1]).prev().remove(), ssw(ssw(".socialconnect")[1]).next().remove(), ssw(ssw(".socialconnect")[1]).next().remove(),
                                    ssw(ssw(".socialconnect")[1]).remove(), ssw("div.ssw-alert").remove(), ssw("#ssw-first_name").val(c.first_name), ssw("#ssw-last_name").val(c.last_name), ssw("#ssw-email").val(c.email), ssw("#login_modal").sswModal("hide"), ssw("#signup_modal").sswModal("show")) : "enabled" != e.state ? targetSEMModal(e, "gplus") : e.password ? (d.preLogin(e.email, e.password), d.login()) : targetSEMModal(e, "gplus")
                            },
                            dataType: "json"
                        })
                    }
                };
                this.redirectAfterAuth = function(a, b, c) {
                    if (-1 < navigator.userAgent.indexOf("MSIE") && c) location.href = c;
                    else {
                        var e = (-1 < navigator.userAgent.indexOf("Chrome") || -1 == navigator.userAgent.indexOf("Safari")) && -1 == navigator.userAgent.indexOf("Firefox") && "https:" == location.protocol,
                            h = location.protocol;
                        e && (h = "http:" == location.protocol ? "https:" : "http:");
                        a = a.clone();
                        a.attr("id", "ssw-test-login");
                        a.find("input").removeAttr("id").removeAttr("class");
                        c = c ? c : "" == window.ssw.login_redirect_url ? location.pathname.indexOf("/account/") ? location.href : location.protocol + "//" + location.hostname : window.ssw.login_redirect_url;
                        e ||
                            (c = c.replace("https:", "http:")); - 1 < location.href.indexOf(location.host + "/" + Shopify.locale) && (-1 < c.indexOf(location.host) ? -1 === c.indexOf(location.host + "/" + Shopify.locale) && (c = c.replace(location.host, location.host + "/" + Shopify.locale)) : c = "/" + Shopify.locale + c);
                        var q = "?checkout_url=" + encodeURIComponent(c);
                        if (a[0]) {
                            e = a[0];
                            a.hide();
                            ssw(document.body).append(a);
                            c && -1 != c.indexOf("checkout.shopify.com") || a.attr("action", e.action.replace(location.protocol, h) + q);
                            h = ssw('<input type="hidden" name="checkout_url" />');
                            c && h.val(c);
                            a.append(h);
                            for (var p in b) b.hasOwnProperty(p) && (h = b[p], c = a.find('input[name="' + h.name + '"]'), c.length && (c.removeAttr("disabled"), c.val(h.value)));
                            e.submit()
                        }
                    }
                };
                this.customerIdPage = function(a, b, c, e, h) {
                    var q = this;
                    q.check_customer_count++;
                    ssw.ajax({
                        url: sswProxyUrl + "/lite2/auth/customeridpage",
                        type: "POST",
                        data: a,
                        success: function(p) {
                            ssw.cookie("ssw-userchecked", 0, { expires: -1 });
                            var n = ssw("<div>");
                            n.html(p);
                            if (parseInt(n.find("#ssw-customer-id").html())) q.redirectAfterAuth(b, c, e);
                            else if (h &&
                                5 > q.check_customer_count) setTimeout(function() { q.customerIdPage(a, b, c, e, h) }, 1E3);
                            else if (!h) {
                                sswSocialLogin ? trackShopStats("invalid_social_login", "all") : trackShopStats("invalid_email_login", "all");
                                onOpenForm();
                                loginLoaderCancel();
                                ssw("#login_modal").sswModal("show");
                                if (sl) addMessage(ssw_message_selector, sswLangs.t("not_able_to_log_in_you_socially"), "warning");
                                else {
                                    addMessage(ssw_message_selector, sswLangs.t("invalid_login_credentials"), "warning");
                                    var f = ssw("#ssw-customer-email").val();
                                    ssw.post(sswProxyUrl +
                                        "/lite2/auth/checkUserState", { email: f },
                                        function(k) { k && (k.success ? addMessage(ssw_message_selector, sswLangs.t("already_registered_and_sent_invite_message", [f]), "warning") : addMessage(ssw_message_selector, sswLangs.t("incorrect_credentials", [f]), "warning")) }, "json")
                                }
                                sl = 0;
                                ssw("#hesy-login-submit").removeAttr("disabled").attr("enabled", "enabled")
                            }
                        },
                        dataType: "html"
                    })
                };
                this.multiPassLogin = function() {
                    ssw.get(sswProxyUrl + "/lite2/auth/getMultipassToken", { _sid: ssw.cookie("hesid") }, function(a) {
                        a ? ssw.get("/account/login/multipass/" +
                            a, {},
                            function(b) {
                                $("<div>").html(b).find("#ssw_cid").val() ? ((b = sswGetParameterByName("checkout_url")) || (b = "" == window.ssw.login_redirect_url ? location.pathname.indexOf("/account/") ? location.href : location.protocol + "//" + location.hostname : window.ssw.login_redirect_url), -1 < location.href.indexOf(location.host + "/" + Shopify.locale) && (b = -1 < b.indexOf(location.host) ? b.replace(location.host, location.host + "/" + Shopify.locale) : "/" + Shopify.locale + b), location.href = b) : (trackShopStats("invalid_social_login", "all"), addMessage(ssw_message_selector,
                                    sswLangs.t("not_able_to_log_in_you_socially"), "warning"), onOpenForm(), loginLoaderCancel(), ssw("#login_modal").sswModal("show"))
                            }).fail(function() {
                            trackShopStats("invalid_social_login", "all");
                            addMessage(ssw_message_selector, sswLangs.t("not_able_to_log_in_you_socially"), "warning");
                            onOpenForm();
                            loginLoaderCancel();
                            ssw("#login_modal").sswModal("show")
                        }) : (trackShopStats("invalid_social_login", "all"), addMessage(ssw_message_selector, sswLangs.t("not_able_to_log_in_you_socially"), "warning"), onOpenForm(), loginLoaderCancel(),
                            ssw("#login_modal").sswModal("show"))
                    })
                };
                this.login = function(a) {
                    var b = this;
                    onOpenForm();
                    loginLoader();
                    var c = ssw("#he_customer_login"),
                        e = c.serializeArray(),
                        h = { _sid: ssw.cookie("hesid"), hash_key: ssw.cookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token"), service_id: service_id };
                    for (n in e)
                        if (e.hasOwnProperty(n)) {
                            var q = e[n];
                            h[q.name] = q.value
                        }
                        "undefined" != typeof sswCookie("cart") && (h.cart_token = sswCookie("cart"));
                    var p = sswGetParameterByName("checkout_url");
                    if ("" != p) {
                        var n = p.split("/");
                        h.form_type =
                            "customer_login";
                        h.utf8 = "%E2%9C%93";
                        h.checkout_url = encodeURIComponent(p);
                        h.cart = n[n.length - 1];
                        h.customer = { email: ssw("#ssw-customer-email").val(), password: ssw("#ssw-customer-password").val() }
                    }
                    n = "/account/login";
                    q = h;
                    a && a.customer_id && a.token && a.customer && a.customer.password && a.customer.password_confirmation && (n = "/account/activate/" + a.customer_id + "/" + a.token, q = a, "" != p && (q.checkout_url = encodeURIComponent(p)));
                    navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) && "" != p && -1 != p.indexOf("checkout.shopify.com") ?
                        (n = c.clone(), n.attr("id", "ssw-login-clone-form"), n.css("display", "none"), n.append('<input type="hidden" name="checkout_url" value="' + p + '"/>'), ssw(document.body).append(n), n.submit()) : (ssw.ajax({
                            type: "POST",
                            url: n,
                            data: q,
                            xhr: function() {
                                var f = ssw.ajaxSettings.xhr(),
                                    k = f.setRequestHeader;
                                f.setRequestHeader = function(g, l) { "X-Requested-With" != g && k.call(this, g, l) };
                                return f
                            },
                            beforeSend: function() {
                                onSubmitForm();
                                ssw("#hesy-login-submit").attr("disabled", "disabled");
                                ssw("#login_modal .ssw-alert").sswAlert("close")
                            },
                            success: function(f, k, g) {
                                f = f.split("script").join("div");
                                f = ssw("<div>").html(f).find("#ssw_cid").val();
                                if (0 == f || "0" == f)
                                    if ((g = g.getResponseHeader("x-xss-protection")) && (g = decodeURI(g)), -1 !== g.indexOf("source[action]=challenge&source[app]=Shopify")) location.href = "/challenge";
                                    else {
                                        if (sl || sswSocialLogin || a && a.service) {
                                            if (a && a.verified && typeof window.ssw.usercheckResponse.multipass_enabled && window.ssw.usercheckResponse.multipass_enabled) { b.multiPassLogin(); return }
                                            trackShopStats("invalid_social_login", "all");
                                            addMessage(ssw_message_selector, sswLangs.t("not_able_to_log_in_you_socially"), "warning")
                                        } else {
                                            trackShopStats("invalid_email_login", "all");
                                            addMessage(ssw_message_selector, sswLangs.t("invalid_login_credentials"), "warning");
                                            var l = ssw("#ssw-customer-email").val();
                                            ssw.post(sswProxyUrl + "/lite2/auth/checkUserState", { email: l }, function(m) {
                                                m.success ? addMessage(ssw_message_selector, sswLangs.t("already_registered_and_sent_invite_message", [l]), "warning") : addMessage(ssw_message_selector, sswLangs.t("incorrect_credentials", [l]), "warning")
                                            }, "json")
                                        }
                                        onOpenForm();
                                        loginLoaderCancel();
                                        ssw_is_auth_page || ssw("#login_modal").sswModal("show");
                                        ssw("#hesy-login-submit").removeAttr("disabled").attr("enabled", "enabled")
                                    }
                                else h.customer_timezone_offset = -60 * (new Date).getTimezoneOffset(), ssw.post(sswProxyUrl + "/lite2/auth/login", h, function(m) {
                                    m.error && (sswSocialLogin ? trackShopStats("invalid_social_login", "all") : trackShopStats("invalid_email_login", "all"));
                                    b.redirectAfterAuth(c, e, p)
                                }, "json")
                            },
                            dataType: "html"
                        }).fail(function() {
                            b.customerIdPage(h,
                                c, e, p, !1)
                        }), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && setTimeout(function() { b.customerIdPage(h, c, e, p, !0) }, 1E3))
                };
                this.signUp = function() {
                    var a = this;
                    onOpenForm();
                    var b = ssw("#he_create_customer"),
                        c = b.find('input[type="password"]').val(),
                        e = ssw("#he_customer_login"),
                        h = b.serializeArray(),
                        q = b.serialize() + "&_sid=" + ssw.cookie("hesid") + "&service_id=" + service_id + "&hash_key=" + ssw.cookie("hash_key"),
                        p = sswGetParameterByName("checkout_url");
                    "" != p && (b = p.split("/"), q += "&form_type=customer_login&utf8==%E2%9C%93&checkout_url=" +
                        encodeURIComponent(p) + "&cart=" + b[b.length - 1]);
                    ssw.ajax({
                        type: "POST",
                        url: "/account",
                        data: q,
                        xhr: function() {
                            var n = ssw.ajaxSettings.xhr(),
                                f = n.setRequestHeader;
                            n.setRequestHeader = function(k, g) { "X-Requested-With" != k && f.call(this, k, g) };
                            return n
                        },
                        beforeSend: function() {
                            onSubmitForm();
                            ssw("#hesy-sign-up-submit").removeAttr("enabled").attr("disabled", "disabled");
                            ssw("#signup_modal .ssw-alert").sswAlert("close")
                        },
                        success: function(n, f, k) {
                            n = n.split("script").join("div");
                            n = ssw("<div>").html(n);
                            f = n.find(".errors li");
                            0 == f.length && (f = n.find(".errors-list li"));
                            0 == f.length && (f = n.find("#create_customer .note.form-error li"));
                            f.length ? (onOpenForm(), ssw("#hesy-sign-up-submit").removeAttr("disabled").attr("enabled", "enabled"), f.each(function() {
                                addMessage("#signup_modal .login-failed", ssw(this).text(), "warning");
                                addMessage('form[action$="/account"]:not(#he_create_customer)', ssw(this).text(), "warning")
                            })) : ((k = k.getResponseHeader("x-xss-protection")) && (k = decodeURI(k)), -1 !== k.indexOf("source[action]=challenge&source[app]=Shopify") ?
                                ssw.ajax({ type: "POST", url: sswProxyUrl + "/lite2/auth/encrypt", data: { password: c }, success: function(g) { "undefined" !== typeof g.new_password && g.new_password && "undefined" !== typeof localStorage && (localStorage.setItem("challenge_password", g.new_password), location.href = "/challenge") }, dataType: "json" }).fail(function(g) { location.href = "/challenge" }) : ssw.post(sswProxyUrl + "/lite2/auth/register", q, function(g) {
                                    ssw(document).trigger("sswOnCustomerSignedUp", g);
                                    "" != p ? a.redirectAfterAuth(e, h, p) : 0 == g.error ? (ssw.cookie("ssw-userchecked",
                                        0, { expires: -1 }), a.redirectAfterAuth(e, h)) : ssw(".login-failed").empty()
                                }, "json"))
                        },
                        dataType: "html"
                    }).fail(function(n) {
                        if (400 < parseInt(n.status)) {
                            onOpenForm();
                            var f = ssw("<div>").html(n.responseText).find("div.content > div.content--block:nth-child(2) > div.content--desc").html();
                            f = f ? f : n.statusText;
                            "Too many attempts: Please try again in 10 minutes" == ssw.trim(f) && "undefined" !== typeof sswLangs.data.too_many_attempts && (f = sswLangs.data.too_many_attempts);
                            addMessage("#signup_modal .login-failed", f, "warning");
                            addMessage('form[action$="/account"]:not(#he_create_customer)', f, "warning")
                        } else ssw.ajax({
                            url: sswProxyUrl + "/lite2/auth/customeridpage",
                            success: function(k) {
                                ssw.cookie("ssw-userchecked", 0, { expires: -1 });
                                k = parseInt(ssw(k).text());
                                0 < k ? (q += "$customer_id=" + k, ssw.post(sswProxyUrl + "/lite2/auth/register", q, function(g) { "" != p ? a.redirectAfterAuth(e, h, p) : 0 == g.error ? (ssw.cookie("ssw-userchecked", 0, { expires: -1 }), a.redirectAfterAuth(e, h)) : ssw(".login-failed").empty() }, "json")) : (onOpenForm(), addMessage(sswLangs.t("email_is_already_associated")))
                            },
                            dataType: "html"
                        })
                    })
                }
            };
        "undefined" != typeof sswApp["default"] && sswApp["default"] && sswRun(function() {
            ssw(document).ready(function() {
                ssw(document).on("submit", 'form[action$="/account"],form[action$="/account/login"]', function() {
                    var e = this.querySelector('input[name="customer[email]"]'),
                        h = this.querySelector('input[name="customer[password]"]');
                    e && h && (e.setAttribute("type", "email"), e.setAttribute("required", "required"), h.setAttribute("required", "required"), h = this.querySelector('input[name="customer[email]"]'),
                        e = this.querySelector('input[name="customer[password]"]').value, h = btoa(h.value)) && (ssw.cookie("ssw_verify_token", sswMd5(e + h), { expires: 30, path: "/", secure: "https:" === location.protocol, samesite: "https:" === location.protocol ? "None" : void 0 }), "he_customer_login" !== this.id && "he_create_customer" !== this.id && (e = btoa(btoa(btoa(e).split("").reverse().join("")).split("").reverse().join("")).split("").reverse().join(""), localStorage.setItem(h, e)))
                });
                var d = document.querySelector('form[action="/account/recover"]');
                if (d) {
                    var a = d.querySelector('input[name="email"]');
                    a && a.setAttribute("type", "email");
                    d.addEventListener("submit", function(e) {
                        d._passWasUnset || (e.preventDefault(), e.stopPropagation());
                        (e = d.querySelector('input[name="email"]').value) && ssw.ajax({
                            url: sswProxyUrl + "/lite2/auth/unsetpass",
                            type: "POST",
                            data: { email: e },
                            dataType: "json",
                            success: function() {
                                d._passWasUnset = !0;
                                d.submit()
                            },
                            error: function() {
                                d._passWasUnset = !0;
                                d.submit()
                            }
                        })
                    })
                }
                var b = document.querySelector('form[action$="/account/reset"]');
                if (b) {
                    a = location.pathname.split("/account/reset/");
                    var c = 1 < a.length ? a[1].split("/")[0] : !1;
                    c && b.addEventListener("submit", function(e) { e = b.querySelector('input[name="customer[password]"]'); var h = b.querySelector('input[name="customer[password_confirmation]"]'); if (e = e.value && h.value && e.value == h.value ? h.value : !1) h = "function" == typeof window.btoa, ssw.ajax({ url: sswProxyUrl + "/lite2/auth/resetpass", type: "POST", data: { customer_id: c, new_token: h ? window.btoa(e) : e, encoded: h }, dataType: "json" }) })
                }
            })
        });
        window.addEventListener("sswoauthcallback", function(d) {
            d.detail &&
                ("amazon" == d.detail.service ? ssw.ajax({
                    type: "POST",
                    url: sswProxyUrl + "/lite2/auth/azshopcallback",
                    data: { _sid: ssw.cookie("hesid"), hash_key: ssw.cookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token") },
                    success: function(a) {
                        "undefined" !== typeof a.service_id && (service_id = a.service_id);
                        sswSocialLogin = 1;
                        if (ssw.isEmptyObject(a)) onOpenForm();
                        else if (a.termsSignup || a.acceptMarketing) showAcceptTermsForm(a);
                        else if ("enabled" != a.state)
                            if (a.password && a.email) {
                                var b = new ShopifyLogin;
                                b.preLogin(a.email, a.password);
                                a.account_activation_token ? b.login({ customer_id: a.customer_id, token: a.account_activation_token, verified: a.verified, customer: { password: a.password, password_confirmation: a.password } }) : b.login({ verified: a.verified })
                            } else targetSEMModal(a, "Amazon");
                        else !a.password && a.email ? targetSEMModal(a, "Amazon") : a.password ? (b = new ShopifyLogin, b.preLogin(a.email, a.password), b.login({ verified: a.verified })) : a.verified && typeof window.ssw.usercheckResponse.multipass_enabled && window.ssw.usercheckResponse.multipass_enabled ?
                            (b = new ShopifyLogin, b.multiPassLogin()) : (addMessage(ssw_message_selector, "sswLangs.t('already_registered_to_social_service2', [response.email])", "warning"), ssw("#login_modal").sswModal())
                    },
                    dataType: "json"
                }) : "yahoo" == d.detail.service && ssw.ajax({
                    type: "POST",
                    url: sswProxyUrl + "/lite2/auth/yshopcallback",
                    data: { _sid: ssw.cookie("hesid"), hash_key: ssw.cookie("hash_key"), verify_token: ssw.cookie("ssw_verify_token") },
                    success: function(a) {
                        sswSocialLogin = 1;
                        "undefined" !== typeof a.service_id && (service_id = a.service_id);
                        if (ssw.isEmptyObject(a)) onOpenForm();
                        else if (a.termsSignup || a.acceptMarketing) showAcceptTermsForm(a);
                        else if ("enabled" != a.state)
                            if (a.password && a.email) {
                                var b = new ShopifyLogin;
                                b.preLogin(a.email, a.password);
                                a.account_activation_token ? b.login({ customer_id: a.customer_id, token: a.account_activation_token, customer: { password: a.password, password_confirmation: a.password } }) : b.login({ verified: a.verified })
                            } else targetSEMModal(a, "Yahoo");
                        else !a.password && a.email ? targetSEMModal(a, "Yahoo") : a.password ? (b = new ShopifyLogin,
                            b.preLogin(a.email, a.password), b.login({ verified: a.verified })) : a.verified && typeof window.ssw.usercheckResponse.multipass_enabled && window.ssw.usercheckResponse.multipass_enabled ? (b = new ShopifyLogin, b.multiPassLogin()) : (addMessage(ssw_message_selector, sswLangs.t("already_registered_to_social_service2", [a.email]), "warning"), ssw("#login_modal").sswModal())
                    },
                    dataType: "json"
                }))
        });
        sswLibraryLoaded(function() {
            window.sswHelperLoaded ? validateLogin() : window.addEventListener("sswhelperload", validateLogin);
            ssw(document).on("click",
                ".ssw-azconnect",
                function() {
                    onSubmitForm();
                    var d = HE_DOMAIN + "/lite2/auth/azconnect?_sid=" + ssw.cookie("hesid") + "&shop=" + encodeURIComponent("https://" + Shopify.shop);
                    sswIsWebView() ? (d += "&oauth_redirect_uri=" + encodeURIComponent(location.href), location.href = d) : ssw.oauthpopup({ path: d, windowOptions: sswGetPopupBounds(710, 550), callback: function() { sswDispatchEvent("sswoauthcallback", { detail: { service: "amazon" }, bubbles: !0, cancellable: !1 }) } })
                });
            ssw(document).on("click", ".ssw-yconnect", function() {
                onSubmitForm();
                var d = HE_DOMAIN + "/lite2/auth/yconnect?_sid=" + ssw.cookie("hesid") + "&shop=" + encodeURIComponent(Shopify.shop);
                sswIsWebView() ? (d += "&oauth_redirect_uri=" + encodeURIComponent(location.href), location.href = d) : ssw.oauthpopup({ path: d, callback: function() { sswDispatchEvent("sswoauthcallback", { detail: { service: "yahoo" }, bubbles: !0, cancellable: !1 }) } })
            });
            ssw(document).on("click", ".ssw-twconnect", function() { shopCallback4TTI("twconnect", "twitter") });
            ssw(document).on("click", ".ssw-inconnect", function() {
                shopCallback4TTI("inconnect",
                    "instagram")
            });
            ssw(document).on("click", ".ssw-tmconnect", function() { shopCallback4TTI("tmconnect", "tumblr") });
            ssw(document).on("keyup change", "#he_create_customer input", function() {
                "" != ssw("#he_create_customer #ssw-email").val() && "" != ssw("#he_create_customer #ssw-password").val() && (ssw("#he_create_customer .ssw-first-name:hidden").length ? ssw("#he_create_customer .ssw-first-name").slideDown() : "" != ssw("#he_create_customer #ssw-first_name").val() && ssw("#he_create_customer .ssw-last-name:hidden").length &&
                    ssw("#he_create_customer .ssw-last-name").slideDown())
            });
            ssw(document).on("shown.ssw.modal", "#login_modal", function() { ssw(document.body).hasClass("ssw-touch") || ssw("#ssw-customer-email").focus() });
            ssw(document).on("show.ssw.modal", "#login_modal", function() { ssw(".ssw-modal:not(#login_modal)").sswModal("hide") });
            ssw(document).on("shown.ssw.modal", "#signup_modal", function() {
                ssw(document.body).hasClass("ssw-touch") || ssw("#he_create_customer input").each(function(d, a) {
                    if ("" == ssw(a).val()) return ssw(a).focus(), !1
                })
            })
        });
        sswUserChecked(function() {
            function d() {
                var a = ssw.usercheckResponse;
                a.termsSignup && (ssw("#ssw-signup-accept-terms").show().find('input[type="checkbox"]').attr("required", "required"), a.termsLink && (ssw("#ssw-signup-accept-terms-marketing .terms-link").attr("href", a.termsLink).show(), ssw("#ssw-signup-accept-terms-marketing .terms-span").hide()));
                a.acceptMarketing ? ssw("#ssw-signup-accept-marketing").show() : ssw("#ssw-customer-accepts_marketing").val(!0)
            }
            window.sswHelperLoaded ? d() : window.addEventListener("sswhelperload",
                d)
        })
    }
    sswUserChecked(function() {
        var d = ssw.usercheckResponse.briteVerifyKey;
        d && sswLoadScript("//cdn.briteverify.com/bforms.js", function(a) {
            a = document.createElement("link");
            a.setAttribute("rel", "stylesheet");
            a.setAttribute("type", "text/css");
            a.setAttribute("media", "all");
            a.setAttribute("href", "//cdn.briteverify.com/bforms.css");
            document.getElementsByTagName("head")[0].appendChild(a);
            var b = function(n) {
                var f = ssw(n.el).closest("form");
                "invalid" === n.status ? (f.attr("onsubmit", "event.preventDefault(); event.stopPropagation();return false;"),
                    f.find('[type="submit"]').attr("disabled", "disabled")) : ("unknown" !== n.status && "accept_all" !== n.status || this.promptConfirmation(), f.removeAttr("onsubmit"), f.find('[type="submit"]').removeAttr("disabled"))
            };
            a = document.querySelectorAll('form[action$="//' + location.hostname + '/account"]:not(#he_create_customer) [name="customer[email]"], form[action$="//' + Shopify.shop + '/account"]:not(#he_create_customer) [name="customer[email]"], #he_create_customer #email, #set-email-form #set-email-input');
            for (var c = [],
                    e = a.length, h = 0; h < e; h++) {
                var q = a[h],
                    p = BriteForm.create({ formKey: d, emailInput: q });
                p.on("verification:end", b);
                c.push(p);
                (function(n) { setTimeout(function() { ssw(n).hasClass("bv-invalid") && b({ el: n, status: "invalid" }) }, 1200) })(q)
            }
            c.length && (window.__ssw_bv_forms = c)
        })
    });


};