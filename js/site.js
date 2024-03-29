/* Placeholders.js v3.0.2 */
(function(t) {
    "use strict";

    function e(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }

    function r(t, e) {
        var r, n;
        for (r = 0, n = t.length; n > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }
    t.Placeholders = {
        Utils: {
            addEventListener: e,
            inArray: r,
            moveCaret: n,
            changeType: a
        }
    }
})(this),
function(t) {
    "use strict";

    function e() {}

    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }

    function n(t, e) {
        var r, n, a = !!e && t.value !== e,
            u = t.value === t.getAttribute(V);
        return (a || u) && "true" === t.getAttribute(D) ? (t.removeAttribute(D), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(F), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(F)), r = t.getAttribute(P), r && (t.type = r), !0) : !1
    }

    function a(t) {
        var e, r, n = t.getAttribute(V);
        return "" === t.value && n ? (t.setAttribute(D, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(F), r || (t.setAttribute(F, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(P), e ? t.type = "text" : "password" === t.type && M.changeType(t, "text") && t.setAttribute(P, "password"), !0) : !1
    }

    function u(t, e) {
        var r, n, a, u, i, l, o;
        if (t && t.getAttribute(V)) e(t);
        else
            for (a = t ? t.getElementsByTagName("input") : b, u = t ? t.getElementsByTagName("textarea") : f, r = a ? a.length : 0, n = u ? u.length : 0, o = 0, l = r + n; l > o; o++) i = r > o ? a[o] : u[o - r], e(i)
    }

    function i(t) {
        u(t, n)
    }

    function l(t) {
        u(t, a)
    }

    function o(t) {
        return function() {
            m && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) ? M.moveCaret(t, 0) : n(t)
        }
    }

    function c(t) {
        return function() {
            a(t)
        }
    }

    function s(t) {
        return function(e) {
            return A = t.value, "true" === t.getAttribute(D) && A === t.getAttribute(V) && M.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function d(t) {
        return function() {
            n(t, A), "" === t.value && (t.blur(), M.moveCaret(t, 0))
        }
    }

    function g(t) {
        return function() {
            t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) && M.moveCaret(t, 0)
        }
    }

    function v(t) {
        return function() {
            i(t)
        }
    }

    function p(t) {
        t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (M.addEventListener(T, "submit", v(T)), T.setAttribute(U, "true"))), M.addEventListener(t, "focus", o(t)), M.addEventListener(t, "blur", c(t)), m && (M.addEventListener(t, "keydown", s(t)), M.addEventListener(t, "keyup", d(t)), M.addEventListener(t, "click", g(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (m || t !== r()) && a(t)
    }
    var b, f, m, h, A, y, E, x, L, T, N, S, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        k = "#ccc",
        I = "placeholdersjs",
        R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
        V = "data-placeholder-value",
        D = "data-placeholder-active",
        P = "data-placeholder-type",
        U = "data-placeholder-submit",
        j = "data-placeholder-bound",
        q = "data-placeholder-focus",
        z = "data-placeholder-live",
        F = "data-placeholder-maxlength",
        G = document.createElement("input"),
        H = document.getElementsByTagName("head")[0],
        J = document.documentElement,
        K = t.Placeholders,
        M = K.Utils;
    if (K.nativeSupport = void 0 !== G.placeholder, !K.nativeSupport) {
        for (b = document.getElementsByTagName("input"), f = document.getElementsByTagName("textarea"), m = "false" === J.getAttribute(q), h = "false" !== J.getAttribute(z), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet ? y.styleSheet.cssText = E.nodeValue : y.appendChild(E), H.insertBefore(y, H.firstChild), w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x && (x = x.nodeValue, x && M.inArray(B, N.type) && p(N));
        L = setInterval(function() {
            for (w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x ? (x = x.nodeValue, x && M.inArray(B, N.type) && (N.getAttribute(j) || p(N), (x !== N.getAttribute(V) || "password" === N.type && !N.getAttribute(P)) && ("password" === N.type && !N.getAttribute(P) && M.changeType(N, "text") && N.setAttribute(P, "password"), N.value === N.getAttribute(V) && (N.value = x), N.setAttribute(V, x)))) : N.getAttribute(D) && (n(N), N.removeAttribute(V));
            h || clearInterval(L)
        }, 100)
    }
    M.addEventListener(t, "beforeunload", function() {
        K.disable()
    }), K.disable = K.nativeSupport ? e : i, K.enable = K.nativeSupport ? e : l
}(this);

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a) {
    function b() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function c(a, b) {
        function c() {
            ib.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }
        var d = !0;
        return i(function() {
            return d && (c(), d = !1), b.apply(this, arguments)
        }, b)
    }

    function d(a, b) {
        return function(c) {
            return l(a.call(this, c), b)
        }
    }

    function e(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }

    function f() {}

    function g(a) {
        y(a), i(this, a)
    }

    function h(a) {
        var b = r(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
    }

    function i(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }

    function j(a) {
        var b, c = {};
        for (b in a) a.hasOwnProperty(b) && wb.hasOwnProperty(b) && (c[b] = a[b]);
        return c
    }

    function k(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function l(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }

    function m(a, b, c, d) {
        var e = b._milliseconds,
            f = b._days,
            g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && db(a, "Date", cb(a, "Date") + f * c), g && bb(a, cb(a, "Month") + g * c), d && ib.updateOffset(a, f || g)
    }

    function n(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function o(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function p(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
        return g + f
    }

    function q(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Zb[a] || $b[b] || b
        }
        return a
    }

    function r(a) {
        var b, c, d = {};
        for (c in a) a.hasOwnProperty(c) && (b = q(c), b && (d[b] = a[c]));
        return d
    }

    function s(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7, d = "day";
        else {
            if (0 !== b.indexOf("month")) return;
            c = 12, d = "month"
        }
        ib[b] = function(e, f) {
            var g, h, i = ib.fn._lang[b],
                j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = ib().utc().set(d, a);
                return i.call(ib.fn._lang, b, e || "")
            }, null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j
        }
    }

    function t(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function u(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function v(a, b, c) {
        return $(ib([a, 11, 31 + b - c]), b, c).week
    }

    function w(a) {
        return x(a) ? 366 : 365
    }

    function x(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function y(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[pb] < 0 || a._a[pb] > 11 ? pb : a._a[qb] < 1 || a._a[qb] > u(a._a[ob], a._a[pb]) ? qb : a._a[rb] < 0 || a._a[rb] > 23 ? rb : a._a[sb] < 0 || a._a[sb] > 59 ? sb : a._a[tb] < 0 || a._a[tb] > 59 ? tb : a._a[ub] < 0 || a._a[ub] > 999 ? ub : -1, a._pf._overflowDayOfYear && (ob > b || b > qb) && (b = qb), a._pf.overflow = b)
    }

    function z(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }

    function A(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function B(a, b) {
        return b._isUTC ? ib(a).zone(b._offset || 0) : ib(a).local()
    }

    function C(a, b) {
        return b.abbr = a, vb[a] || (vb[a] = new f), vb[a].set(b), vb[a]
    }

    function D(a) {
        delete vb[a]
    }

    function E(a) {
        var b, c, d, e, f = 0,
            g = function(a) {
                if (!vb[a] && xb) try {
                    require("./lang/" + a)
                } catch (b) {}
                return vb[a]
            };
        if (!a) return ib.fn._lang;
        if (!n(a)) {
            if (c = g(a)) return c;
            a = [a]
        }
        for (; f < a.length;) {
            for (e = A(a[f]).split("-"), b = e.length, d = A(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                if (c = g(e.slice(0, b).join("-"))) return c;
                if (d && d.length >= b && p(e, d, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return ib.fn._lang
    }

    function F(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function G(a) {
        var b, c, d = a.match(Bb);
        for (b = 0, c = d.length; c > b; b++) d[b] = cc[d[b]] ? cc[d[b]] : F(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function H(a, b) {
        return a.isValid() ? (b = I(b, a.lang()), _b[b] || (_b[b] = G(b)), _b[b](a)) : a.lang().invalidDate()
    }

    function I(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Cb.lastIndex = 0; d >= 0 && Cb.test(a);) a = a.replace(Cb, c), Cb.lastIndex = 0, d -= 1;
        return a
    }

    function J(a, b) {
        var c, d = b._strict;
        switch (a) {
            case "Q":
                return Nb;
            case "DDDD":
                return Pb;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return d ? Qb : Fb;
            case "Y":
            case "G":
            case "g":
                return Sb;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return d ? Rb : Gb;
            case "S":
                if (d) return Nb;
            case "SS":
                if (d) return Ob;
            case "SSS":
                if (d) return Pb;
            case "DDD":
                return Eb;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Ib;
            case "a":
            case "A":
                return E(b._l)._meridiemParse;
            case "X":
                return Lb;
            case "Z":
            case "ZZ":
                return Jb;
            case "T":
                return Kb;
            case "SSSS":
                return Hb;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return d ? Ob : Db;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Db;
            case "Do":
                return Mb;
            default:
                return c = new RegExp(R(Q(a.replace("\\", "")), "i"))
        }
    }

    function K(a) {
        a = a || "";
        var b = a.match(Jb) || [],
            c = b[b.length - 1] || [],
            d = (c + "").match(Xb) || ["-", 0, 0],
            e = +(60 * d[1]) + t(d[2]);
        return "+" === d[0] ? -e : e
    }

    function L(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "Q":
                null != b && (e[pb] = 3 * (t(b) - 1));
                break;
            case "M":
            case "MM":
                null != b && (e[pb] = t(b) - 1);
                break;
            case "MMM":
            case "MMMM":
                d = E(c._l).monthsParse(b), null != d ? e[pb] = d : c._pf.invalidMonth = b;
                break;
            case "D":
            case "DD":
                null != b && (e[qb] = t(b));
                break;
            case "Do":
                null != b && (e[qb] = t(parseInt(b, 10)));
                break;
            case "DDD":
            case "DDDD":
                null != b && (c._dayOfYear = t(b));
                break;
            case "YY":
                e[ob] = ib.parseTwoDigitYear(b);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                e[ob] = t(b);
                break;
            case "a":
            case "A":
                c._isPm = E(c._l).isPM(b);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                e[rb] = t(b);
                break;
            case "m":
            case "mm":
                e[sb] = t(b);
                break;
            case "s":
            case "ss":
                e[tb] = t(b);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                e[ub] = t(1e3 * ("0." + b));
                break;
            case "X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = K(b);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                a = a.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
        }
    }

    function M(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = O(a), a._w && null == a._a[qb] && null == a._a[pb] && (f = function(b) {
                var c = parseInt(b, 10);
                return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ob] ? ib().weekYear() : a._a[ob]
            }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = _(f(g.GG), g.W || 1, g.E, 4, 1) : (i = E(a._l), j = null != g.d ? X(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = _(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ob] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ob] ? d[ob] : a._a[ob], a._dayOfYear > w(e) && (a._pf._overflowDayOfYear = !0), c = W(e, 0, a._dayOfYear), a._a[pb] = c.getUTCMonth(), a._a[qb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
            for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[rb] += t((a._tzm || 0) / 60), l[sb] += t((a._tzm || 0) % 60), a._d = (a._useUTC ? W : V).apply(null, l)
        }
    }

    function N(a) {
        var b;
        a._d || (b = r(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], M(a))
    }

    function O(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function P(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = E(a._l),
            h = "" + a._i,
            i = h.length,
            j = 0;
        for (d = I(a._f, g).match(Bb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(J(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), cc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), L(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[rb] < 12 && (a._a[rb] += 12), a._isPm === !1 && 12 === a._a[rb] && (a._a[rb] = 0), M(a), y(a)
    }

    function Q(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function S(a) {
        var c, d, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++) g = 0, c = i({}, a), c._pf = b(), c._f = a._f[f], P(c), z(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
        i(a, d || c)
    }

    function T(a) {
        var b, c, d = a._i,
            e = Tb.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Vb.length; c > b; b++)
                if (Vb[b][1].exec(d)) {
                    a._f = Vb[b][0] + (e[6] || " ");
                    break
                }
            for (b = 0, c = Wb.length; c > b; b++)
                if (Wb[b][1].exec(d)) {
                    a._f += Wb[b][0];
                    break
                }
            d.match(Jb) && (a._f += "Z"), P(a)
        } else ib.createFromInputFallback(a)
    }

    function U(b) {
        var c = b._i,
            d = yb.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? T(b) : n(c) ? (b._a = c.slice(0), M(b)) : o(c) ? b._d = new Date(+c) : "object" == typeof c ? N(b) : "number" == typeof c ? b._d = new Date(c) : ib.createFromInputFallback(b)
    }

    function V(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function W(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function X(a, b) {
        if ("string" == typeof a)
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a) return null
            } else a = parseInt(a, 10);
        return a
    }

    function Y(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Z(a, b, c) {
        var d = nb(Math.abs(a) / 1e3),
            e = nb(d / 60),
            f = nb(e / 60),
            g = nb(f / 24),
            h = nb(g / 365),
            i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", nb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, Y.apply({}, i)
    }

    function $(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = ib(a).add("d", f), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function _(a, b, c, d, e) {
        var f, g, h = W(a, 0, 1).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : w(a - 1) + g
        }
    }

    function ab(b) {
        var c = b._i,
            d = b._f;
        return null === c || d === a && "" === c ? ib.invalid({
            nullInput: !0
        }) : ("string" == typeof c && (b._i = c = E().preparse(c)), ib.isMoment(c) ? (b = j(c), b._d = new Date(+c._d)) : d ? n(d) ? S(b) : P(b) : U(b), new g(b))
    }

    function bb(a, b) {
        var c;
        return "string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), u(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function cb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function db(a, b, c) {
        return "Month" === b ? bb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function eb(a, b) {
        return function(c) {
            return null != c ? (db(this, a, c), ib.updateOffset(this, b), this) : cb(this, a)
        }
    }

    function fb(a) {
        ib.duration.fn[a] = function() {
            return this._data[a]
        }
    }

    function gb(a, b) {
        ib.duration.fn["as" + a] = function() {
            return +this / b
        }
    }

    function hb(a) {
        "undefined" == typeof ender && (jb = mb.moment, mb.moment = a ? c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ib) : ib)
    }
    for (var ib, jb, kb, lb = "2.6.0", mb = "undefined" != typeof global ? global : this, nb = Math.round, ob = 0, pb = 1, qb = 2, rb = 3, sb = 4, tb = 5, ub = 6, vb = {}, wb = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, xb = "undefined" != typeof module && module.exports, yb = /^\/?Date\((\-?\d+)/i, zb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ab = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Bb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Cb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Db = /\d\d?/, Eb = /\d{1,3}/, Fb = /\d{1,4}/, Gb = /[+\-]?\d{1,6}/, Hb = /\d+/, Ib = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Jb = /Z|[\+\-]\d\d:?\d\d/gi, Kb = /T/i, Lb = /[\+\-]?\d+(\.\d{1,3})?/, Mb = /\d{1,2}/, Nb = /\d/, Ob = /\d\d/, Pb = /\d{3}/, Qb = /\d{4}/, Rb = /[+-]?\d{6}/, Sb = /[+-]?\d+/, Tb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ub = "YYYY-MM-DDTHH:mm:ssZ", Vb = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], Wb = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], Xb = /([\+\-]|\d\d)/gi, Yb = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), Zb = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, $b = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, _b = {}, ac = "DDD w W M D d".split(" "), bc = "M D H h m s w W".split(" "), cc = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(a) {
            return this.lang().monthsShort(this, a)
        },
        MMMM: function(a) {
            return this.lang().months(this, a)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(a) {
            return this.lang().weekdaysMin(this, a)
        },
        ddd: function(a) {
            return this.lang().weekdaysShort(this, a)
        },
        dddd: function(a) {
            return this.lang().weekdays(this, a)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return l(this.year() % 100, 2)
        },
        YYYY: function() {
            return l(this.year(), 4)
        },
        YYYYY: function() {
            return l(this.year(), 5)
        },
        YYYYYY: function() {
            var a = this.year(),
                b = a >= 0 ? "+" : "-";
            return b + l(Math.abs(a), 6)
        },
        gg: function() {
            return l(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return l(this.weekYear(), 4)
        },
        ggggg: function() {
            return l(this.weekYear(), 5)
        },
        GG: function() {
            return l(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return l(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return l(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return t(this.milliseconds() / 100)
        },
        SS: function() {
            return l(t(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return l(this.milliseconds(), 3)
        },
        SSSS: function() {
            return l(this.milliseconds(), 3)
        },
        Z: function() {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + ":" + l(t(a) % 60, 2)
        },
        ZZ: function() {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + l(t(a) % 60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, dc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; ac.length;) kb = ac.pop(), cc[kb + "o"] = e(cc[kb], kb);
    for (; bc.length;) kb = bc.pop(), cc[kb + kb] = d(cc[kb], 2);
    for (cc.DDDD = d(cc.DDD, 3), i(f.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function(a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
                if (this._monthsParse[b] || (c = ib.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                if (this._weekdaysParse[b] || (c = ib([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function(a) {
            return a
        },
        postformat: function(a) {
            return a
        },
        week: function(a) {
            return $(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), ib = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), ab(g)
    }, ib.suppressDeprecationWarnings = !1, ib.createFromInputFallback = c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i)
    }), ib.utc = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), ab(g).utc()
    }, ib.unix = function(a) {
        return ib(1e3 * a)
    }, ib.duration = function(a, b) {
        var c, d, e, f = a,
            g = null;
        return ib.isDuration(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = zb.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
            y: 0,
            d: t(g[qb]) * c,
            h: t(g[rb]) * c,
            m: t(g[sb]) * c,
            s: t(g[tb]) * c,
            ms: t(g[ub]) * c
        }) : (g = Ab.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * c
        }, f = {
            y: e(g[2]),
            M: e(g[3]),
            d: e(g[4]),
            h: e(g[5]),
            m: e(g[6]),
            s: e(g[7]),
            w: e(g[8])
        }), d = new h(f), ib.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, ib.version = lb, ib.defaultFormat = Ub, ib.momentProperties = wb, ib.updateOffset = function() {}, ib.lang = function(a, b) {
        var c;
        return a ? (b ? C(A(a), b) : null === b ? (D(a), a = "en") : vb[a] || E(a), c = ib.duration.fn._lang = ib.fn._lang = E(a), c._abbr) : ib.fn._lang._abbr
    }, ib.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), E(a)
    }, ib.isMoment = function(a) {
        return a instanceof g || null != a && a.hasOwnProperty("_isAMomentObject")
    }, ib.isDuration = function(a) {
        return a instanceof h
    }, kb = dc.length - 1; kb >= 0; --kb) s(dc[kb]);
    ib.normalizeUnits = function(a) {
        return q(a)
    }, ib.invalid = function(a) {
        var b = ib.utc(0 / 0);
        return null != a ? i(b._pf, a) : b._pf.userInvalidated = !0, b
    }, ib.parseZone = function() {
        return ib.apply(null, arguments).parseZone()
    }, ib.parseTwoDigitYear = function(a) {
        return t(a) + (t(a) > 68 ? 1900 : 2e3)
    }, i(ib.fn = g.prototype, {
        clone: function() {
            return ib(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var a = ib(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? H(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
            return z(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && p(this._a, (this._isUTC ? ib.utc(this._a) : ib(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return i({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function(a) {
            var b = H(this, a || ib.defaultFormat);
            return this.lang().postformat(b)
        },
        add: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, 1), this
        },
        subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, -1), this
        },
        diff: function(a, b, c) {
            var d, e, f = B(a, this),
                g = 6e4 * (this.zone() - f.zone());
            return b = q(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ib(this).startOf("month") - (f - ib(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - ib(this).startOf("month").zone() - (f.zone() - ib(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : k(e)
        },
        from: function(a, b) {
            return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function(a) {
            return this.from(ib(), a)
        },
        calendar: function() {
            var a = B(ib(), this).startOf("day"),
                b = this.diff(a, "days", !0),
                c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this))
        },
        isLeapYear: function() {
            return x(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = X(a, this.lang()), this.add({
                d: a - b
            })) : b
        },
        month: eb("Month", !0),
        startOf: function(a) {
            switch (a = q(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(a) {
            return a = q(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
        },
        isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ib(a).startOf(b)
        },
        isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ib(a).startOf(b)
        },
        isSame: function(a, b) {
            return b = b || "ms", +this.clone().startOf(b) === +B(a, this).startOf(b)
        },
        min: function(a) {
            return a = ib.apply(null, arguments), this > a ? this : a
        },
        max: function(a) {
            return a = ib.apply(null, arguments), a > this ? this : a
        },
        zone: function(a, b) {
            var c = this._offset || 0;
            return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = K(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? m(this, ib.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ib.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? ib(a).zone() : 0, (this.zone() - a) % 60 === 0
        },
        daysInMonth: function() {
            return u(this.year(), this.month())
        },
        dayOfYear: function(a) {
            var b = nb((ib(this).startOf("day") - ib(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b)
        },
        quarter: function(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function(a) {
            var b = $(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b)
        },
        isoWeekYear: function(a) {
            var b = $(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b)
        },
        week: function(a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        isoWeek: function(a) {
            var b = $(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b)
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        isoWeeksInYear: function() {
            return v(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var a = this._lang._week;
            return v(this.year(), a.dow, a.doy)
        },
        get: function(a) {
            return a = q(a), this[a]()
        },
        set: function(a, b) {
            return a = q(a), "function" == typeof this[a] && this[a](b), this
        },
        lang: function(b) {
            return b === a ? this._lang : (this._lang = E(b), this)
        }
    }), ib.fn.millisecond = ib.fn.milliseconds = eb("Milliseconds", !1), ib.fn.second = ib.fn.seconds = eb("Seconds", !1), ib.fn.minute = ib.fn.minutes = eb("Minutes", !1), ib.fn.hour = ib.fn.hours = eb("Hours", !0), ib.fn.date = eb("Date", !0), ib.fn.dates = c("dates accessor is deprecated. Use date instead.", eb("Date", !0)), ib.fn.year = eb("FullYear", !0), ib.fn.years = c("years accessor is deprecated. Use year instead.", eb("FullYear", !0)), ib.fn.days = ib.fn.day, ib.fn.months = ib.fn.month, ib.fn.weeks = ib.fn.week, ib.fn.isoWeeks = ib.fn.isoWeek, ib.fn.quarters = ib.fn.quarter, ib.fn.toJSON = ib.fn.toISOString, i(ib.duration.fn = h.prototype, {
        _bubble: function() {
            var a, b, c, d, e = this._milliseconds,
                f = this._days,
                g = this._months,
                h = this._data;
            h.milliseconds = e % 1e3, a = k(e / 1e3), h.seconds = a % 60, b = k(a / 60), h.minutes = b % 60, c = k(b / 60), h.hours = c % 24, f += k(c / 24), h.days = f % 30, g += k(f / 30), h.months = g % 12, d = k(g / 12), h.years = d
        },
        weeks: function() {
            return k(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12)
        },
        humanize: function(a) {
            var b = +this,
                c = Z(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        },
        add: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function(a) {
            return a = q(a), this[a.toLowerCase() + "s"]()
        },
        as: function(a) {
            return a = q(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        },
        lang: ib.fn.lang,
        toIsoString: function() {
            var a = Math.abs(this.years()),
                b = Math.abs(this.months()),
                c = Math.abs(this.days()),
                d = Math.abs(this.hours()),
                e = Math.abs(this.minutes()),
                f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        }
    });
    for (kb in Yb) Yb.hasOwnProperty(kb) && (gb(kb, Yb[kb]), fb(kb.toLowerCase()));
    gb("Weeks", 6048e5), ib.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, ib.lang("en", {
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), xb ? module.exports = ib : "function" == typeof define && define.amd ? (define("moment", function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (mb.moment = jb), ib
    }), hb(!0)) : hb()
}).call(this);
/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(e, t) {
    if (typeof define == "function" && define.amd) define(t);
    else {
        var n = t();
        e.ResizeController = n.ResizeController, e.BreakpointController = n.BreakpointController, e.ResponsiveImage = n.ResponsiveImage, e.ScrollController = n.ScrollController, e.ElementVisibleController = n.ElementVisibleController, e.ScrollPositionController = n.ScrollPositionController, e.StickyElementController = n.StickyElementController, e.morlock = n.API
    }
})(this, function() {
    var e, t, n;
    return function(r) {
        function v(e, t) {
            return h.call(e, t)
        }

        function m(e, t) {
            var n, r, i, s, o, u, a, f, c, h, p, v = t && t.split("/"),
                m = l.map,
                g = m && m["*"] || {};
            if (e && e.charAt(0) === ".")
                if (t) {
                    v = v.slice(0, v.length - 1), e = e.split("/"), o = e.length - 1, l.nodeIdCompat && d.test(e[o]) && (e[o] = e[o].replace(d, "")), e = v.concat(e);
                    for (c = 0; c < e.length; c += 1) {
                        p = e[c];
                        if (p === ".") e.splice(c, 1), c -= 1;
                        else if (p === "..") {
                            if (c === 1 && (e[2] === ".." || e[0] === "..")) break;
                            c > 0 && (e.splice(c - 1, 2), c -= 2)
                        }
                    }
                    e = e.join("/")
                } else e.indexOf("./") === 0 && (e = e.substring(2));
            if ((v || g) && m) {
                n = e.split("/");
                for (c = n.length; c > 0; c -= 1) {
                    r = n.slice(0, c).join("/");
                    if (v)
                        for (h = v.length; h > 0; h -= 1) {
                            i = m[v.slice(0, h).join("/")];
                            if (i) {
                                i = i[r];
                                if (i) {
                                    s = i, u = c;
                                    break
                                }
                            }
                        }
                    if (s) break;
                    !a && g && g[r] && (a = g[r], f = c)
                }!s && a && (s = a, u = f), s && (n.splice(0, u, s), e = n.join("/"))
            }
            return e
        }

        function g(e, t) {
            return function() {
                return s.apply(r, p.call(arguments, 0).concat([e, t]))
            }
        }

        function y(e) {
            return function(t) {
                return m(t, e)
            }
        }

        function b(e) {
            return function(t) {
                a[e] = t
            }
        }

        function w(e) {
            if (v(f, e)) {
                var t = f[e];
                delete f[e], c[e] = !0, i.apply(r, t)
            }
            if (!v(a, e) && !v(c, e)) throw new Error("No " + e);
            return a[e]
        }

        function E(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function S(e) {
            return function() {
                return l && l.config && l.config[e] || {}
            }
        }
        var i, s, o, u, a = {},
            f = {},
            l = {},
            c = {},
            h = Object.prototype.hasOwnProperty,
            p = [].slice,
            d = /\.js$/;
        o = function(e, t) {
            var n, r = E(e),
                i = r[0];
            return e = r[1], i && (i = m(i, t), n = w(i)), i ? n && n.normalize ? e = n.normalize(e, y(t)) : e = m(e, t) : (e = m(e, t), r = E(e), i = r[0], e = r[1], i && (n = w(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, u = {
            require: function(e) {
                return g(e)
            },
            exports: function(e) {
                var t = a[e];
                return typeof t != "undefined" ? t : a[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: a[e],
                    config: S(e)
                }
            }
        }, i = function(e, t, n, i) {
            var s, l, h, p, d, m = [],
                y = typeof n,
                E;
            i = i || e;
            if (y === "undefined" || y === "function") {
                t = !t.length && n.length ? ["require", "exports", "module"] : t;
                for (d = 0; d < t.length; d += 1) {
                    p = o(t[d], i), l = p.f;
                    if (l === "require") m[d] = u.require(e);
                    else if (l === "exports") m[d] = u.exports(e), E = !0;
                    else if (l === "module") s = m[d] = u.module(e);
                    else if (v(a, l) || v(f, l) || v(c, l)) m[d] = w(l);
                    else {
                        if (!p.p) throw new Error(e + " missing " + l);
                        p.p.load(p.n, g(i, !0), b(l), {}), m[d] = a[l]
                    }
                }
                h = n ? n.apply(a[e], m) : undefined;
                if (e)
                    if (s && s.exports !== r && s.exports !== a[e]) a[e] = s.exports;
                    else if (h !== r || !E) a[e] = h
            } else e && (a[e] = n)
        }, e = t = s = function(e, t, n, a, f) {
            if (typeof e == "string") return u[e] ? u[e](t) : w(o(e, t).f);
            if (!e.splice) {
                l = e, l.deps && s(l.deps, l.callback);
                if (!t) return;
                t.splice ? (e = t, t = n, n = null) : e = r
            }
            return t = t || function() {}, typeof n == "function" && (n = a, a = f), a ? i(r, e, t, n) : setTimeout(function() {
                i(r, e, t, n)
            }, 4), s
        }, s.config = function(e) {
            return s(e)
        }, e._defined = a, n = function(e, t, n) {
            t.splice || (n = t, t = []), !v(a, e) && !v(f, e) && (f[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    }(), n("../../node_modules/almond/almond", function() {}), n("morlock/core/util", ["exports"], function(e) {
        function d(e, n) {
            return t.call(e, n)
        }

        function v(e) {
            return d(e, 0)
        }

        function m(e, t) {
            return e.concat(t)
        }

        function g(e, t) {
            if (n) return n.call(e, t);
            for (var r = 0; r < e.length; r++)
                if (e[r] === t) return r;
            return -1
        }

        function y(e, t) {
            var n, r = 0;
            return function() {
                var s = arguments,
                    o = +(new Date),
                    u = t - (o - r);
                u <= 0 ? (clearTimeout(n), n = null, r = o, e.apply(null, s)) : n || (n = setTimeout(function() {
                    r = +(new Date), n = null, e.apply(null, s)
                }, u))
            }
        }

        function b(e, t) {
            var n = null;
            return function() {
                clearTimeout(n);
                var i = arguments;
                n = setTimeout(function() {
                    n = null, e.apply(null, i)
                }, t)
            }
        }

        function w(e) {
            return e
        }

        function E(e, t) {
            var n = Object.create(null);
            return t = P(t) ? t : JSON.stringify,
                function() {
                    var i = arguments.length > 0 ? t.apply(this, arguments) : "noargs";
                    return P(n[i]) || (n[i] = e.apply(this, arguments)), n[i]
                }
        }

        function S(e) {
            var t = G(arguments);
            return function() {
                return e.apply(null, t.concat(v(arguments)))
            }
        }

        function x(e, t) {
            t || (t = e.length);
            var n = function() {
                if (arguments.length < t) {
                    var r = t - arguments.length;
                    return r > 0 ? x(S.apply(null, m([e], v(arguments))), r) : S.apply(null, m([e], v(arguments)))
                }
                return e.apply(null, arguments)
            };
            return n.curried = !0, n.toString = function() {
                return e.toString()
            }, n.arity = e.length, n
        }

        function T(e, t) {
            return j(function(r, i) {
                return r[i] = e(t[i], i), r
            }, L(t), {})
        }

        function N(e) {
            return e.length === 1 ? e : function(n) {
                return e.call(this, n)
            }
        }

        function C(e, t) {
            if (r) return t ? r.call(t, e) : t;
            var n = [];
            for (var i = 0; t && i < t.length; i++) n.push(e(t[i], i, t));
            return n
        }

        function k(e, t) {
            if (i) {
                t && i.call(t, e);
                return
            }
            for (var n = 0; n < t.length; n++) e(t[n], n, t)
        }

        function L(e) {
            if (!e) return null;
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        }

        function M(e) {
            return function() {
                return e.apply(null, s.call(arguments))
            }
        }

        function D(e) {
            return !e || !e.length
        }

        function P(e) {
            return "undefined" != typeof e
        }

        function H(e, t, n) {
            return P(e) ? e : n ? t() : t
        }

        function B(e) {
            var t = A(e);
            return C(t, L(e))
        }

        function j(e, t, n) {
            if (o) return t ? o.call(t, e, n) : n;
            for (var r = 0; t && r < t.length; r++) n = e(n, t[r], r, t);
            return n
        }

        function F(e, t) {
            if (u) return t ? u.call(t, e) : null;
            var n = [];
            for (var r = 0; t && r < t.length; r++) e(t[r], r, t) === !0 && n.push(t[r]);
            return n
        }

        function I(e, t) {
            return F(at(q, e), t)
        }

        function q(e) {
            return !e
        }

        function R(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null) return e === t;
            var i = e.toString();
            if (i != t.toString()) return !1;
            switch (i) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if (typeof e != "object" || typeof t != "object") return !1;
            var s = n.length;
            while (s--)
                if (n[s] == e) return r[s] == t;
            var o = e.constructor,
                u = t.constructor;
            if (o !== u && !(U(o) && o instanceof o && U(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
            n.push(e), r.push(t);
            var a = 0,
                f = !0;
            if (i == "[object Array]") {
                a = e.length, f = a == t.length;
                if (f)
                    while (a--)
                        if (!(f = R(e[a], t[a], n, r))) break
            } else {
                for (var l in e)
                    if (z(e, l)) {
                        a++;
                        if (!(f = z(t, l) && R(e[l], t[l], n, r))) break
                    }
                if (f) {
                    for (l in t)
                        if (z(t, l) && !(a--)) break;
                    f = !a
                }
            }
            return n.pop(), r.pop(), f
        }

        function U(e) {
            return typeof e == "function"
        }

        function z(e, t) {
            return hasOwnProperty.call(e, t)
        }

        function X(e, t) {
            return function() {
                var r = e;
                "function" == typeof e && (r = e.apply(null, arguments));
                if (r) return t.apply(null, arguments)
            }
        }

        function V(e, t) {
            return p ? p.call(e, t) : function() {
                return e.apply(t, arguments)
            }
        }

        function $(e) {
            var t = G(arguments);
            return p ? (t.unshift(undefined), p.apply(e, t)) : function() {
                var r = d(arguments, 0);
                return e.apply(this, t.concat(r))
            }
        }

        function J(e, t) {
            return function() {
                setTimeout($(e, arguments), t)
            }
        }

        function K(e, t) {
            return J(e, P(t) ? t : 1)()
        }

        function Q(e, t) {
            return e.apply(null, t)
        }

        function G(e, t) {
            return t = P(t) ? t : 1, d(e, t)
        }

        function Y(e) {
            return e.apply(null, G(arguments))
        }

        function et(e, t) {
            return t[e]
        }

        function tt(e) {
            return e[0]
        }

        function nt(e) {
            return e[e.length - 1]
        }

        function it(e) {
            var t = v(e);
            return f.call(t), t
        }

        function ot(e) {
            var t = v(e);
            return c.call(t), t
        }

        function at() {
            var e = arguments;
            return function(n) {
                for (var r = e.length - 1; r >= 0; --r) n = e[r](n);
                return n
            }
        }

        function lt(e) {
            var t = G(arguments),
                n = !1;
            return function() {
                if (!n) return n = !0, e.apply(null, t)
            }
        }

        function ct(e) {
            return parseInt(e, 10)
        }

        function ht(e) {
            return function() {
                return e
            }
        }
        var t = Array.prototype.slice,
            n = Array.prototype.indexOf,
            r = Array.prototype.map,
            i = Array.prototype.forEach,
            s = Array.prototype.reverse,
            o = Array.prototype.reduce,
            u = Array.prototype.filter,
            a = Array.prototype.unshift,
            f = Array.prototype.shift,
            l = Array.prototype.push,
            c = Array.prototype.pop,
            h = Array.prototype.sort,
            p = Function.prototype.bind;
        e.concat = m, e.identity = w, e.memoize = E, e.autoCurry = x, e.unary = N, e.forEach = k;
        var A = x(function(t, n) {
                return t[n]
            }),
            O = x(function(t, n, r) {
                t[n] = r
            }),
            _ = M(A);
        e.pluck = _, e.isDefined = P, e.getOption = H;
        var W = x(function(t, n) {
                return R(t, n, [], [])
            }),
            Z = M(Y);
        e.flippedCall = Z;
        var rt = x(function(t, n) {
                var r = v(t);
                return a.call(r, n), r
            }),
            st = x(function(t, n) {
                var r = v(t);
                return l.call(r, n), r
            }),
            ut = x(function(t, n) {
                var r = v(t);
                return h.call(r, n), r
            }),
            ft = M(at);
        e.pipeline = ft;
        var pt = W(!0);
        e.isTrue = pt;
        var dt = function() {
            var e = window.requestAnimationFrame,
                t = 0,
                n = ["webkit", "moz"];
            for (var r = 0; r < n.length && !e; ++r) e = window[n[r] + "RequestAnimationFrame"];
            return e || (e = function(n) {
                var r = (new Date).getTime(),
                    i = Math.max(0, 16 - (r - t)),
                    s = window.setTimeout(function() {
                        n(r + i)
                    }, i);
                return t = r + i, s
            }), e
        }();
        e.indexOf = g, e.throttle = y, e.debounce = b, e.mapObject = T, e.objectKeys = L, e.functionBind = V, e.partial = $, e.map = C, e.apply = Q, e.objectVals = B, e.call = Y, e.push = st, e.pop = ot, e.unshift = rt, e.equals = W, e.not = q, e.delay = J, e.unshift = rt, e.nth = et, e.first = tt, e.last = nt, e.compose = at, e.select = F, e.get = A, e.shift = it, e.when = X, e.reduce = j, e.once = lt, e.sortBy = ut, e.parseInteger = ct, e.set = O, e.flip = M, e.copyArray = v, e.defer = K, e.slice = d, e.isEmpty = D, e.reject = I, e.rest = G, e.constantly = ht, e.rAF = dt
    }), n("morlock/core/events", ["exports"], function(e) {
        function o(e, t, i) {
            return n.call(e, t, i, !1), s.count++,
                function() {
                    r.call(e, t, i, !1), s.count--
                }
        }

        function u(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), i.call(e, n)
        }
        var t = [],
            n = window.addEventListener || function(n, r) {
                var i = this;
                t.unshift([i, n, r,
                    function(e) {
                        e.currentTarget = i, e.preventDefault = function() {
                            e.returnValue = !1
                        }, e.stopPropagation = function() {
                            e.cancelBubble = !0
                        }, e.target = e.srcElement || i, r.call(i, e)
                    }
                ]), this.attachEvent("on" + n, t[0][3])
            },
            r = window.removeEventListener || function(n, r) {
                for (var i = 0, s; s = t[i]; ++i)
                    if (s[0] == this && s[1] == n && s[2] == r) return this.detachEvent("on" + n, t.splice(i, 1)[0][3])
            },
            i = window.dispatchEvent || function(e) {
                return this.fireEvent("on" + e.type, e)
            },
            s = {
                count: 0
            };
        e.eventListenerInfo = s, e.eventListener = o, e.dispatchEvent = u
    }), n("morlock/core/buffer", ["exports"], function(e) {
        function t(e, n) {
            if (!(this instanceof t)) return new t(e);
            this.max = e, this.singleValueMode = this.max === 1, this.mode = n, this.values = null, this.singleValue = null
        }

        function n(e, n) {
            return new t(e, n)
        }

        function r(e) {
            return e.singleValueMode ? e.singleValue ? 1 : 0 : e.values ? e.values.length : 0
        }

        function i(e, t) {
            if (r(e) === e.max)
                if (!e.singleValueMode && "sliding" === e.mode) e.values.shift();
                else if ("dropping" === e.mode) return;
            e.singleValueMode ? e.singleValue = t : (r(e) || (e.values = []), e.values.push(t))
        }

        function s(e) {
            return e.singleValueMode ? e.singleValue : e.values && e.values[e.values.length - 1]
        }

        function o(e, t) {
            if (e.singleValueMode) e.singleValue = e.singleValue || t;
            else
                while (!e.values || e.values.length < e.max) i(e, t)
        }

        function u(e) {
            if (e.singleValueMode) return e.singleValue;
            var t = 0;
            for (var n = 0; e.values, n < e.values.length; n++) t += e.values[n];
            return t
        }

        function a(e) {
            if (e.singleValueMode) return e.singleValue;
            var t = u(e);
            return e.values ? e.values.length ? t / e.values.length : 0 : null
        }

        function f(e) {
            e.singleValueMode ? e.singleValue = null : e.values && (e.values.length = 0, e.values = null)
        }
        e.create = n, e.len = r, e.push = i, e.lastValue = s, e.fill = o, e.sum = u, e.average = a, e.clear = f
    }), n("morlock/core/stream", ["morlock/core/events", "morlock/core/buffer", "morlock/core/util", "exports"], function(e, t, n, r) {
        function O(e, t) {
            if (!(this instanceof O)) return new O(e, t);
            this.trackSubscribers = !!e, this.subscribers = null, this.subscriberSubscribers = null, this.streamID = L++, this.values = E(t) ? t : s(1, "sliding"), this.closed = !1, this.closeSubscribers = null, this.emptySubscribers = null, A[this.streamID] = this
        }

        function M(e, t) {
            return new O(e, t)
        }

        function D(e) {
            return a(e.values)
        }

        function P(e, t) {
            if (e.closed) return;
            return e.subscribers = e.subscribers || [], e.subscribers.push(t), e.trackSubscribers && h(b(x(w, t)), e.subscriberSubscribers), x(B, e, t)
        }

        function H(e) {
            if (e.closed) return;
            e.closed = !0, u(e.values), e.subscribers && (e.subscribers.length = 0), e.closeSubscribers && (h(w, e.closeSubscribers), e.closeSubscribers.length = 0), delete A[e.streamID]
        }

        function B(e, t) {
            if (e.subscribers) {
                var n = C(e.subscribers, t);
                n !== -1 && e.subscribers.splice(n, 1), e.subscribers.length < 1 && (e.subscribers = null, h(w, e.emptySubscribers))
            }
        }

        function j(e, t) {
            e.trackSubscribers && (e.subscriberSubscribers || (e.subscriberSubscribers = []), e.subscriberSubscribers.push(t))
        }

        function F(e, t) {
            e.closeSubscribers || (e.closeSubscribers = []), e.closeSubscribers.push(t)
        }

        function I(e, t) {
            e.emptySubscribers || (e.emptySubscribers = []), e.emptySubscribers.push(t)
        }

        function q(e, t) {
            function u() {
                if (!s) return;
                o && (o(), o = null, s = !1)
            }

            function a() {
                if (s) return;
                s = !0, o = i(e, t, function() {
                    n.closed ? u() : v(r, arguments)
                }), F(n, u)
            }
            var n = M(!0),
                r = _(n),
                s = !1,
                o;
            return j(n, a), I(n, u), n
        }

        function R(e) {
            var t = M(!0),
                n = _(t),
                r = function() {
                    var i = 0,
                        s = setInterval(function() {
                            t.closed ? clearInterval(s) : n(i++)
                        }, e)
                };
            return j(t, T(r)), t
        }

        function U(e) {
            var t = M(!0),
                n = x(_, t, !0),
                r = x(setTimeout, n, e);
            return j(t, T(r)), t
        }

        function W() {
            var e = N(arguments),
                t = M(),
                n = _(t);
            return h(function(e) {
                var r = P(e, n);
                F(t, r)
            }, e), t
        }

        function V(e, t, n) {
            var r = M(),
                i = x(_, r),
                s = h(function(e) {
                    return e === X ? i : e
                }, n);
            return P(e, v(v, [t, s])), r
        }

        function $(e, t) {
            return e <= 0 ? t : V(t, c, [X, e])
        }

        function J(e, t) {
            return e <= 0 ? t : V(t, l, [X, e])
        }

        function K(e, t) {
            return e <= 0 ? t : V(t, f, [X, e])
        }

        function Q(e, t) {
            return V(t, m, [X, e])
        }

        function G(e, t) {
            return V(t, g, [e, X])
        }

        function Y(e, t) {
            return G(m(y(e), d), t)
        }

        function Z(e) {
            var t;
            return G(function(n) {
                return y(t, n) ? !1 : (t = n, !0)
            }, e)
        }

        function et(e, t) {
            return V(t, m, [X, x(D, e)])
        }
        var i = e.eventListener,
            s = t.create,
            o = t.push,
            u = t.clear,
            a = t.lastValue,
            f = n.debounce,
            l = n.throttle,
            c = n.delay,
            h = n.map,
            p = n.memoize,
            d = n.first,
            v = n.apply,
            m = n.compose,
            g = n.when,
            y = n.equals,
            b = n.unary,
            w = n.flippedCall,
            E = n.isDefined,
            S = n.autoCurry,
            x = n.partial,
            T = n.once,
            N = n.copyArray,
            C = n.indexOf,
            k = n.rAF,
            L = 0,
            A = {};
        r.openStreams = A;
        var _ = S(function(t, n) {
            if (t.closed) return;
            if (t.subscribers)
                for (var r = 0; r < t.subscribers.length; r++) t.subscribers[r](n);
            o(t.values, n)
        });
        r.emit = _, r.close = H, r.onClose = F, r.onEmpty = I;
        var z = p(function() {
                function r(e) {
                    t.closed || (k(r), n(e))
                }
                var t = M(!0),
                    n = _(t);
                return j(t, T(r)), t
            }),
            X = ":e:";
        r.skipDuplicates = Z, r.create = M, r.getValue = D, r.onValue = P, r.offValue = B, r.onSubscription = j, r.createFromEvents = q, r.timeout = U, r.createFromRAF = z, r.merge = W, r.delay = $, r.throttle = J, r.debounce = K, r.map = Q, r.filter = G, r.filterFirst = Y, r.sample = et, r.interval = R
    }), n("morlock/streams/resize-stream", ["morlock/core/stream", "morlock/core/util", "exports"], function(e, t, n) {
        function a() {
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight]
        }
        var r = e,
            i = t.getOption,
            s = t.memoize,
            o = t.defer,
            u = s(function(t) {
                t = t || {};
                var n = i(t.orientationChangeDelayMs, 100),
                    s = r.createFromEvents(window, "resize"),
                    u = r.createFromEvents(window, "orientationchange"),
                    f = r.merge(s, r.delay(n, u));
                return o(r.emit(f), 10), r.skipDuplicates(r.map(a, f))
            });
        n.create = u
    }), n("morlock/core/emitter", ["morlock/core/util", "exports"], function(e, t) {
        function i() {
            if (!(this instanceof i)) return new i;
            this.callbacks = {}, this.callbackScopes = {}
        }

        function s(e, t, n, i) {
            e.callbacks[t] || (e.callbacks[t] = []), e.callbackScopes[t] || (e.callbackScopes[t] = []), r(e.callbacks[t], n) === -1 && (e.callbacks[t].push(n), e.callbackScopes[t].push(i))
        }

        function o(e, t, n) {
            if (!n) {
                e.callbacks[t] = [], e.callbackScopes[t] = [];
                return
            }
            var i = r(e.callbacks[t], n);
            i !== -1 && (e.callbacks[t].splice(i, 1), e.callbackScopes[t].splice(i, 1))
        }

        function u(e, t, n) {
            if (!e.callbacks[t]) return;
            for (var r = 0; r < e.callbacks[t].length; r++) e.callbackScopes[t][r] ? e.callbacks[t][r].call(e.callbackScopes[t][r], n) : e.callbacks[t][r](n)
        }

        function a(e) {
            var t = new i;
            return e.on = n(s, t), e.off = n(o, t), e.trigger = n(u, t), e
        }
        var n = e.partial,
            r = e.indexOf;
        t.mixin = a
    }), n("morlock/controllers/resize-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/resize-stream", "morlock/core/emitter", "exports"], function(e, t, n, r, i) {
        function l(e) {
            if (!(this instanceof l)) return new l(e);
            f.mixin(this), e = e || {};
            var t = a.create(e);
            u.onValue(t, o(this.trigger, "resize"));
            var n = s(e.debounceMs, 200),
                r = n <= 0 ? t : u.debounce(n, t);
            u.onValue(r, o(this.trigger, "resizeEnd")), this.destroy = function() {
                u.close(t), this.off("resize"), this.off("resizeEnd")
            }
        }
        var s = e.getOption,
            o = e.partial,
            u = t,
            a = n,
            f = r;
        i["default"] = l
    }), n("vendor/modernizr", ["exports"], function(e) {
        function T(e) {
            o.cssText = e
        }

        function N(e, t) {
            return T(f.join(e + ";") + (t || ""))
        }

        function C(e, t) {
            return typeof e === t
        }

        function k(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function L(e, t) {
            for (var n in e) {
                var r = e[n];
                if (!k(r, "-") && o[r] !== undefined) return t == "pfx" ? r : !0
            }
            return !1
        }

        function A(e, t, n) {
            for (var r in e) {
                var i = t[e[r]];
                if (i !== undefined) return n === !1 ? e[r] : C(i, "function") ? i.bind(n || t) : i
            }
            return !1
        }

        function O(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + c.join(r + " ") + r).split(" ");
            return C(t, "string") || C(t, "undefined") ? L(i, t) : (i = (e + " " + h.join(r + " ") + r).split(" "), A(i, t, n))
        }
        var t = "2.7.2",
            n = {},
            r = document.documentElement,
            i = "modernizr",
            s = document.createElement(i),
            o = s.style,
            u, a = {}.toString,
            f = " -webkit- -moz- -o- -ms- ".split(" "),
            l = "Webkit Moz O ms",
            c = l.split(" "),
            h = l.toLowerCase().split(" "),
            p = {},
            d = {},
            v = {},
            m = [],
            g = m.slice,
            y, b = function(e, t, n, s) {
                var o, u, a, f, l = document.createElement("div"),
                    c = document.body,
                    h = c || document.createElement("body");
                if (parseInt(n, 10))
                    while (n--) a = document.createElement("div"), a.id = s ? s[n] : i + (n + 1), l.appendChild(a);
                return o = ["&#173;", '<style id="s', i, '">', e, "</style>"].join(""), l.id = i, (c ? l : h).innerHTML += o, h.appendChild(l), c || (h.style.background = "", h.style.overflow = "hidden", f = r.style.overflow, r.style.overflow = "hidden", r.appendChild(h)), u = t(l, e), c ? l.parentNode.removeChild(l) : (h.parentNode.removeChild(h), r.style.overflow = f), !!u
            },
            w = function(e) {
                var t = window.matchMedia || window.msMatchMedia;
                if (t) return t(e).matches;
                var n;
                return b("@media " + e + " { #" + i + " { position: absolute; } }", function(e) {
                    n = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle)["position"] == "absolute"
                }), n
            },
            E = function() {
                function t(t, n) {
                    n = n || document.createElement(e[t] || "div"), t = "on" + t;
                    var r = t in n;
                    return r || (n.setAttribute || (n = document.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(t, ""), r = C(n[t], "function"), C(n[t], "undefined") || (n[t] = undefined), n.removeAttribute(t))), n = null, r
                }
                var e = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            S = {}.hasOwnProperty,
            x;
        !C(S, "undefined") && !C(S.call, "undefined") ? x = function(e, t) {
            return S.call(e, t)
        } : x = function(e, t) {
            return t in e && C(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var n = this;
            if (typeof n != "function") throw new TypeError;
            var r = g.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var e = function() {};
                        e.prototype = n.prototype;
                        var s = new e,
                            o = n.apply(s, r.concat(g.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return n.apply(t, r.concat(g.call(arguments)))
                };
            return i
        }), p.backgroundsize = function() {
            return O("backgroundSize")
        }, p.csstransforms = function() {
            return !!O("transform")
        };
        for (var M in p) x(p, M) && (y = M.toLowerCase(), n[y] = p[M](), m.push((n[y] ? "" : "no-") + y));
        n.addTest = function(e, t) {
            if (typeof e == "object")
                for (var i in e) x(e, i) && n.addTest(i, e[i]);
            else {
                e = e.toLowerCase();
                if (n[e] !== undefined) return n;
                t = typeof t == "function" ? t() : t, typeof enableClasses != "undefined" && enableClasses && (r.className += " " + (t ? "" : "no-") + e), n[e] = t
            }
            return n
        }, T(""), s = u = null, n._version = t, n._prefixes = f, n._domPrefixes = h, n._cssomPrefixes = c, n.mq = w, n.hasEvent = E, n.testProp = function(e) {
            return L([e])
        }, n.testAllProps = O, n.testStyles = b, n.prefixed = function(e, t, n) {
            return t ? O(e, t, n) : O(e, "pfx")
        }, e["default"] = n
    }), n("morlock/core/dom", ["morlock/core/util", "vendor/modernizr", "exports"], function(e, t, n) {
        function h(e, t, n) {
            if (c("(min-" + e + ":" + window[t] + "px)")) return function() {
                return window[t]
            };
            var r = document.documentElement;
            return function() {
                return r[n]
            }
        }

        function m() {
            return v && window.pageYOffset != document.documentElement.scrollTop ? document.documentElement.scrollTop : window.pageYOffset || document.documentElement.scrollTop
        }

        function g(e) {
            e && !e.nodeType && (e = e[0]);
            if (!e || 1 !== e.nodeType) return !1;
            var t = e.getBoundingClientRect();
            return {
                height: t.bottom - t.top,
                width: t.right - t.left,
                top: t.top,
                left: t.left
            }
        }

        function w(e, t) {
            s(o(b(e)), t)
        }

        function E(e, t) {
            var n = e.nodeType == 9 ? e : e.ownerDocument || e.document;
            if (n.defaultView && n.defaultView.getComputedStyle) {
                var r = n.defaultView.getComputedStyle(e, null);
                if (r) return r[t] || r.getPropertyValue(t) || ""
            }
            return ""
        }

        function S(e, t) {
            return e.currentStyle ? e.currentStyle[t] : null
        }

        function T(e, t) {
            t.parentNode.insertBefore(e, t)
        }

        function N(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }

        function C(e) {
            while (e = e.parentNode)
                if (e == document) return !0;
            return !1
        }

        function k(e) {
            if (!C(e)) return !1;
            var t = x(e, "display") === "none";
            if (t) return !1;
            var n = e.parentNode;
            return n ? k(n) : !0
        }

        function M(e) {
            return e.className.length > 0 ? e.className.split(" ") : []
        }
        var r = e.memoize,
            i = e.isDefined,
            s = e.mapObject,
            o = e.flip,
            u = e.indexOf,
            a = e.forEach,
            f = e.autoCurry,
            l = t["default"],
            c = l.mq;
        n.testMQ = c;
        var p = h("width", "innerWidth", "clientWidth");
        n.getViewportWidth = p;
        var d = h("height", "innerHeight", "clientHeight");
        n.getViewportHeight = d;
        var v = navigator.userAgent.indexOf("MSIE 10") !== -1;
        n.documentScrollY = m, n.getRect = g;
        var y = r(l.prefixed);
        n.cssPrefix = y;
        var b = f(function(t, n, r) {
            t.style[y(n)] = r
        });
        n.setStyle = b, n.setStyles = w;
        var x = f(function(t, n) {
            var r = y(n);
            return E(t, r) || S(t, r) || t.style && t.style[r]
        });
        n.getStyle = x, n.insertBefore = T, n.detachElement = N, n.isVisible = k;
        var L, A, O;
        n.getClasses = M, !i(window.Element) || "classList" in document.documentElement ? (L = function(t, n) {
            return t.classList.contains(n)
        }, A = function(t, n) {
            t.classList.add(n)
        }, O = function(t, n) {
            t.classList.remove(n)
        }) : (L = function(t, n) {
            return u(M(t), n) !== -1
        }, A = function(t, n) {
            if (_(t)) return;
            var r = M(t);
            r.push(n), t.className = r.join(" ")
        }, O = function(t, n) {
            if (!_(t)) return;
            var r = M(t),
                i = u(r, n);
            r.splice(i, 1), t.className = r.join(" ")
        });
        var _ = f(L);
        n.hasClass = _;
        var D = f(A);
        n.addClass = D;
        var P = f(O);
        n.removeClass = P;
        var H = f(function(t, n) {
            a(D(t), n)
        });
        n.addClasses = H
    }), n("morlock/streams/breakpoint-stream", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/streams/resize-stream", "exports"], function(e, t, n, r, i) {
        function p(e, t) {
            var n = h.create(),
                r;
            t.debounceMs ? r = c.debounce(t.debounceMs, n) : t.throttleMs ? r = c.throttle(t.throttleMs, n) : r = n;
            var i = o(function(e, t) {
                var n = c.create(),
                    i = "string" == typeof e ? e : d(e);
                return c.onValue(r, function() {
                    var e = c.getValue(n);
                    e = e !== null ? e : !1, e !== l(i) && c.emit(n, !e)
                }), c.map(f([t]), n)
            }, e);
            return u(c.merge, s(i))
        }

        function d(e) {
            var t;
            if ("undefined" != typeof e.mq) t = e.mq;
            else {
                var n = a(e.max, Infinity),
                    r = a(e.min, 0);
                t = "only screen", n < Infinity && (t += " and (max-width: " + n + "px)"), r > 0 && (t += " and (min-width: " + r + "px)")
            }
            return t
        }
        var s = e.objectVals,
            o = e.mapObject,
            u = e.apply,
            a = e.getOption,
            f = e.push,
            l = t.testMQ,
            c = n,
            h = r;
        i.create = p
    }), n("morlock/controllers/breakpoint-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/breakpoint-stream", "morlock/core/emitter", "exports"], function(e, t, n, r, i) {
        function p(e) {
            if (!(this instanceof p)) return new p(e);
            h.mixin(this);
            var t = c.create(e.breakpoints, {
                    throttleMs: e.throttleMs,
                    debounceMs: e.debounceMs
                }),
                n = {},
                r = this;
            l.onValue(t, function(e) {
                n[e[0]] = e[1];
                var t = e[1] ? "enter" : "exit";
                r.trigger("breakpoint", [e[0], t]), r.trigger("breakpoint:" + e[0], [e[0], t])
            }), this.getActiveBreakpoints = function() {
                var t = o(u, f(n));
                return a(t, s(n))
            }
        }
        var s = e.objectKeys,
            o = e.compose,
            u = e.isTrue,
            a = e.select,
            f = e.get,
            l = t,
            c = n,
            h = r;
        i["default"] = p
    }), n("morlock/streams/scroll-stream", ["morlock/core/stream", "morlock/core/util", "morlock/core/dom", "morlock/core/events", "exports"], function(e, t, n, r, i) {
        var s = e,
            o = t.memoize,
            u = t.defer,
            a = t.partial,
            f = n.documentScrollY,
            l = r.dispatchEvent,
            c = o(function() {
                var t, n = !0,
                    r = s.createFromEvents(window, "scroll");
                s.onValue(r, function() {
                    n = !0
                });
                var i = s.createFromRAF(),
                    o = s.filter(function() {
                        if (!n) return !1;
                        n = !1;
                        var r = f();
                        return t !== r ? (t = r, !0) : !1
                    }, i);
                return u(a(l, window, "scroll"), 10), s.map(function() {
                    return t
                }, o)
            });
        i.create = c
    }), n("morlock/controllers/scroll-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/scroll-stream", "morlock/core/emitter", "exports"], function(e, t, n, r, i) {
        function l(e) {
            if (!(this instanceof l)) return new l(e);
            f.mixin(this), e = e || {};
            var t = a.create();
            u.onValue(t, o(this.trigger, "scroll"));
            var n = u.debounce(s(e.debounceMs, 200), t);
            u.onValue(n, o(this.trigger, "scrollEnd"))
        }
        var s = e.getOption,
            o = e.partial,
            u = t,
            a = n,
            f = r;
        i["default"] = l
    }), n("morlock/controllers/element-visible-controller", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/core/emitter", "morlock/controllers/scroll-controller", "morlock/streams/resize-stream", "exports"], function(e, t, n, r, i, s, o) {
        function m(e, t) {
            if (!(this instanceof m)) return new m(e, t);
            p.mixin(this), t = t || {}, this.elem = e, this.buffer = u(t.buffer, 0), this.isVisible = !1, this.rect = null;
            var n = this.on;
            this.on = function(t, r, i) {
                n.apply(this, arguments), "enter" === t && this.isVisible && (i ? r.call(i) : r())
            };
            var r = new d;
            r.on("scroll", this.didScroll, this), r.on("scrollEnd", this.recalculatePosition, this), h.onValue(v.create(), a(this.didResize, this)), this.viewportRect = {
                height: window.innerHeight,
                top: 0
            }, this.recalculateOffsets(), setTimeout(a(this.recalculateOffsets, this), 100)
        }
        var u = e.getOption,
            a = e.functionBind,
            f = t.getRect,
            l = t.getViewportHeight,
            c = t.documentScrollY,
            h = n,
            p = r,
            d = i["default"],
            v = s;
        m.prototype.didResize = function() {
            this.recalculateOffsets()
        }, m.prototype.didScroll = function(e) {
            this.update(e)
        }, m.prototype.recalculateOffsets = function() {
            this.viewportRect.height = l(), this.recalculatePosition(), this.update(null, !0)
        }, m.prototype.recalculatePosition = function(e) {
            e || (e = c()), this.rect = f(this.elem), this.rect.top += e, this.rect.top -= this.buffer, this.rect.height += this.buffer * 2
        }, m.prototype.update = function(e, t) {
            e || (e = c()), this.viewportRect.top = e;
            var n = this.intersects(this.viewportRect, this.rect),
                r = t ? !0 : this.isVisible,
                i = t ? !0 : !this.isVisible;
            r && !n ? (this.isVisible = !1, this.didExit()) : i && n && (this.isVisible = !0, this.didEnter())
        }, m.prototype.intersects = function(e, t) {
            var n = e.top + e.height,
                r = t.top + t.height;
            return e.top <= r && t.top <= n
        }, m.prototype.didEnter = function() {
            this.trigger("enter"), this.trigger("both")
        }, m.prototype.didExit = function() {
            this.trigger("exit"), this.trigger("both")
        }, o["default"] = m
    }), n("morlock/streams/scroll-tracker-stream", ["morlock/core/stream", "morlock/streams/scroll-stream", "exports"], function(e, t, n) {
        function s(e) {
            var t = i.create(),
                n = r.create(),
                s = !1,
                o = !0;
            return r.onValue(t, function(i) {
                (o || s) && i < e ? (s = !1, r.emit(n, ["before", e])) : (o || !s) && i >= e && (s = !0, r.emit(n, ["after", e])), o = !1
            }), n
        }
        var r = e,
            i = t;
        n.create = s
    }), n("morlock/controllers/scroll-position-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/scroll-tracker-stream", "morlock/core/emitter", "exports"], function(e, t, n, r, i) {
        function f(e) {
            if (!(this instanceof f)) return new f(e);
            a.mixin(this);
            var t = u.create(e);
            o.onValue(t, s(this.trigger, "both"));
            var n = o.filterFirst("before", t);
            o.onValue(n, s(this.trigger, "before"));
            var r = o.filterFirst("after", t);
            o.onValue(r, s(this.trigger, "after"))
        }
        var s = e.partial,
            o = t,
            u = n,
            a = r;
        i["default"] = f
    }), n("morlock/controllers/sticky-element-controller", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/streams/scroll-stream", "morlock/streams/resize-stream", "morlock/controllers/scroll-position-controller", "vendor/modernizr", "exports"], function(e, t, n, r, i, s, o, u) {
        function k(e, t, n) {
            if (!(this instanceof k)) return new k(e, t, n);
            this.elem = e, this.container = t, this.fixed = !1, this.useTransform = !0, this.originalZIndex = "", this.elemWidth = 0, this.elemHeight = 0, this.containerTop = 0, this.containerHeight = 0, this.originalTop = 0, this.spacer = document.createElement("div"), n || (n = {}), this.positionType = a(n.positionType, "absolute"), this.zIndex = a(n.zIndex, 1e3), this.marginTop = a(n.marginTop, 0), this.marginBottom = a(n.marginBottom, 0), this.useTransform = C.csstransforms && a(n.useTransform, !0), this.subscribedListeners_ = [S.onValue(x.create(), O(this)), S.onValue(S.debounce(64, T.create()), p(this.onResize, this))], A(this)
        }

        function L(e) {
            _(e), e.currentTop = null, E(e.spacer), m(e.elem, {
                zIndex: e.originalZIndex,
                width: e.originalWidth,
                height: e.originalHeight,
                position: e.originalPosition,
                left: "",
                top: e.originalOffsetTop,
                overflow: e.originalOverflow,
                display: e.originalDisplay
            }), e.useTransform && v(e.elem, "transform", e.originalTransform)
        }

        function A(e) {
            var t = d(e.container, "position");
            (t.length === 0 || "static" === t) && v(e.container, "position", "relative"), e.originalZIndex = d(e.elem, "zIndex"), e.originalPosition = d(e.elem, "position"), e.originalOffsetTop = d(e.elem, "top"), e.originalWidth = d(e.elem, "width"), e.originalHeight = d(e.elem, "height"), e.originalDisplay = d(e.elem, "display"), e.originalOverflow = d(e.elem, "overflow"), e.useTransform && (e.originalTransform = d(e.elem, "transform"));
            var n = e.elem.getBoundingClientRect();
            e.elemWidth = n.width, e.elemHeight = n.height;
            var r = w(),
                i = e.container.getBoundingClientRect();
            e.containerTop = i.top + r, e.containerHeight = i.height, e.originalTop = e.elem.offsetTop, m(e.elem, {
                position: "absolute",
                top: e.originalTop + "px",
                left: e.elem.offsetLeft + "px",
                width: e.elemWidth + "px",
                height: e.elemHeight + "px",
                overflow: "hidden",
                display: "block"
            }), e.originalPosition !== "absolute" && (g(e.spacer, "stick-element-spacer"), m(e.spacer, {
                height: e.elemHeight + "px",
                display: d(e.elem, "display"),
                "float": d(e.elem, "float"),
                pointerEvents: "none",
                visibility: "hidden",
                opacity: 0,
                zIndex: -1
            }), b(e.spacer, e.elem));
            var s = e.containerTop - e.marginTop;
            e.onBeforeHandler_ || (e.onBeforeHandler_ = l(_, e)), e.onAfterHandler_ || (e.onAfterHandler_ = l(M, e)), e.topOfContainer_ && (e.topOfContainer_.off("before", e.onBeforeHandler_), e.topOfContainer_.off("after", e.onAfterHandler_)), e.topOfContainer_ = new N(s), e.topOfContainer_.on("before", e.onBeforeHandler_), e.topOfContainer_.on("after", e.onAfterHandler_), r < s ? e.onBeforeHandler_() : e.onAfterHandler_()
        }

        function M(e) {
            if (e.fixed) return;
            g(e.elem, "fixed"), m(e.elem, {
                position: e.positionType,
                zIndex: e.zIndex
            }), e.fixed = !0
        }

        function _(e) {
            if (!e.fixed) return;
            y(e.elem, "fixed"), m(e.elem, {
                position: "absolute",
                zIndex: e.originalZIndex,
                top: e.originalTop
            }), e.fixed = !1
        }
        var a = e.getOption,
            f = e.autoCurry,
            l = e.partial,
            c = e.forEach,
            h = e.call,
            p = e.functionBind,
            d = t.getStyle,
            v = t.setStyle,
            m = t.setStyles,
            g = t.addClass,
            y = t.removeClass,
            b = t.insertBefore,
            w = t.documentScrollY,
            E = t.detachElement,
            S = n,
            x = r,
            T = i,
            N = s["default"],
            C = o["default"];
        k.prototype.onResize = function() {
            L(this), A(this), O(this, w())
        }, k.prototype.destroy = function() {
            c(h, this.subscribedListeners_), L(this), this.spacer = null
        };
        var O = f(function(t, n) {
            if (!t.fixed) return;
            n < 0 && (n = 0);
            var r = n + t.marginTop - t.containerTop,
                i = t.containerHeight - t.elemHeight - t.marginBottom;
            t.useTransform ? i -= t.originalTop : r += t.originalTop, r = Math.max(0, Math.min(r, i)), t.currentTop !== r && (t.positionType !== "fixed" && (t.useTransform ? v(t.elem, "transform", "translate3d(0, " + r + "px, 0)") : v(t.elem, "top", r + "px")), t.currentTop = r)
        });
        u["default"] = k
    }), n("morlock/core/responsive-image", ["morlock/core/util", "morlock/core/dom", "morlock/controllers/element-visible-controller", "morlock/core/emitter", "exports"], function(e, t, n, r, i) {
        function g() {
            if (!(this instanceof g)) return new g;
            this.element = null, this.loadedSizes = {}, this.knownSizes = [], this.currentBreakpoint = null, this.src = null, this.isFlexible = !1, this.hasRetina = !1, this.preserveAspectRatio = !1, this.knownDimensions = null, this.hasLoaded = !1
        }

        function y(e) {
            var t = new g;
            t.getPath = c(e.getPath, L), o(l(f(t)), e), t.knownDimensions && t.preserveAspectRatio && w(t), t.lazyLoad && (t.observer = new v(t.element), t.observer.on("enter", function r() {
                if (!t.checkIfVisible(t)) return;
                t.observer.off("enter", r), t.lazyLoad = !1, S(t)
            }));
            var n = new ResizeController({
                debounceMs: c(e.debounceMs, 200)
            });
            return n.on("resizeEnd", h(S, t)), m.mixin(t), t
        }

        function b(e, t) {
            t || (t = {});
            var n = {
                element: e,
                src: c(t.src, e.getAttribute("data-src")),
                lazyLoad: c(t.lazyLoad, e.getAttribute("data-lazyload") === "true"),
                isFlexible: c(t.isFlexible, e.getAttribute("data-isFlexible") !== "false"),
                hasRetina: c(t.hasRetina, e.getAttribute("data-hasRetina") === "true" && window.devicePixelRatio > 1.5),
                preserveAspectRatio: c(t.preserveAspectRatio, e.getAttribute("data-preserveAspectRatio") === "true"),
                checkIfVisible: c(t.checkIfVisible, function(e) {
                    return !0
                })
            };
            return n.knownDimensions = c(t.knownDimensions, function() {
                var t = e.getAttribute("data-knownDimensions");
                if (t && t !== "false") return [a(t.split("x")[0]), a(t.split("x")[1])]
            }, !0), n.knownSizes = E(e), n.knownDimensions && n.preserveAspectRatio && w(n), y(n)
        }

        function w(e) {
            var t = e.knownDimensions[1] / e.knownDimensions[0] * 100;
            p(e.element, "paddingBottom", t + "%")
        }

        function E(e) {
            var t = e.getAttribute("data-breakpoints"),
                n = s(function(e) {
                    return a(e)
                }, t ? t.split(",") : []);
            return n.length <= 0 ? [0] : u(n, function(t, n) {
                return n - t
            })
        }

        function S(e) {
            if (e.lazyLoad) return;
            var t = d(e.element),
                n;
            for (var r = 0; r < e.knownSizes.length; r++) {
                var i = e.knownSizes[r];
                if (!(t.width <= i)) break;
                n = i
            }
            n || (n = e.knownSizes[0]), n !== e.currentBreakpoint && (e.currentBreakpoint = n, T(e, e.currentBreakpoint))
        }

        function x(e) {
            if (!e.lazyLoad) return;
            e.observer.recalculateOffsets()
        }

        function T(e, t) {
            var n = e.loadedSizes[t];
            if ("undefined" != typeof n) N(e, n);
            else {
                var r = new Image;
                r.onload = function() {
                    e.loadedSizes[t] = r, N(e, r)
                }, r.onerror = function() {
                    e.hasRetina && (r.src = e.getPath(e, t, !1))
                }, r.src = e.getPath(e, t, e.hasRetina)
            }
        }

        function N(e, t) {
            return e.hasLoaded || (e.hasLoaded = !0, setTimeout(function() {
                e.element.className += " loaded"
            }, 100)), e.trigger("load", t), e.element.tagName.toLowerCase() === "img" ? C(e, t) : k(e, t)
        }

        function C(e, t) {
            e.element.src = t.src
        }

        function k(e, t) {
            var n = p(e.element);
            n("backgroundImage", "url(" + t.src + ")");
            if (e.preserveAspectRatio) {
                var r, i;
                e.knownDimensions ? (r = e.knownDimensions[0], i = e.knownDimensions[1]) : (r = t.width, i = t.height), n("backgroundSize", "cover"), e.isFlexible ? n("paddingBottom", i / r * 100 + "%") : (n("width", r + "px"), n("height", i + "px"))
            }
        }

        function L(e, t, n) {
            if (t === 0) return e.src;
            var r = e.src.split("."),
                i = r.pop();
            return r.join(".") + "-" + t + (n ? "@2x" : "") + "." + i
        }
        var s = e.map,
            o = e.mapObject,
            u = e.sortBy,
            a = e.parseInteger,
            f = e.set,
            l = e.flip,
            c = e.getOption,
            h = e.partial,
            p = t.setStyle,
            d = t.getRect,
            v = n["default"],
            m = r;
        i.checkVisibility = x, i.create = y, i.createFromElement = b, i.update = S, i.checkVisibility = x
    }), n("morlock/api", ["morlock/controllers/resize-controller", "morlock/controllers/breakpoint-controller", "morlock/controllers/scroll-controller", "morlock/controllers/element-visible-controller", "morlock/controllers/scroll-position-controller", "morlock/controllers/sticky-element-controller", "morlock/core/util", "morlock/core/events", "morlock/core/buffer", "morlock/core/stream", "exports"], function(e, t, n, r, i, s, o, u, a, f, l) {
        function C(e) {
            var t = !1;
            for (var n = 0; n < T.length; n++)
                if (g.equals(T[n], e)) {
                    t = !0;
                    break
                }
            if (t) return N[n];
            var r = new h(e);
            return T.push(e), N.push(r), r
        }
        var c = e["default"],
            h = t["default"],
            p = n["default"],
            d = r["default"],
            v = i["default"],
            m = s["default"],
            g = o,
            y = u,
            b = a,
            w = f,
            E = g.memoize(function(e) {
                return new c(e)
            }),
            S = g.memoize(function(e) {
                return new p(e)
            }),
            x = g.memoize(function(e) {
                return k.observePosition(e)
            }),
            T = [],
            N = [],
            k = {
                onResize: function(t) {
                    var n = E({
                        debounceMs: 0
                    });
                    return n.on("resize", t)
                },
                onResizeEnd: function(t, n) {
                    var r = E(n);
                    return r.on("resizeEnd", t)
                },
                onScroll: function(t) {
                    var n = S();
                    return n.on("scroll", t)
                },
                onScrollEnd: function(t) {
                    var n = S();
                    return n.on("scrollEnd", t)
                },
                observeElement: function(t, n) {
                    return new d(t, n)
                },
                observePosition: function(t) {
                    return new v(t)
                },
                stickyElement: function(t, n, r) {
                    return new m(t, n, r)
                },
                breakpoint: {
                    enter: function(e, t) {
                        var n = C({
                            breakpoints: {
                                singleton: e
                            }
                        });
                        n.on("breakpoint:singleton", function(e) {
                            e[1] === "enter" && t(e)
                        })
                    },
                    exit: function(e, t) {
                        var n = C({
                            breakpoints: {
                                singleton: e
                            }
                        });
                        n.on("breakpoint:singleton", function(e) {
                            e[1] === "exit" && t(e)
                        })
                    }
                },
                position: {
                    before: function(e, t) {
                        var n = x(e);
                        return n.on("before", t)
                    },
                    after: function(e, t) {
                        var n = x(e);
                        return n.on("after", t)
                    }
                }
            };
        k.Stream = w, k.Events = y, k.Buffer = b, k.Util = g, l["default"] = k
    }), n("morlock/jquery", ["morlock/api", "morlock/controllers/breakpoint-controller", "morlock/controllers/sticky-element-controller", "exports"], function(e, t, n, r) {
        function u(e) {
            e.fn.morlockResize = function(t) {
                return e(this).each(function() {
                    if (this !== window) return;
                    var n = e(this);
                    i.onResize(function(e) {
                        n.trigger("morlockResize", e)
                    }), i.onResizeEnd(function(e) {
                        n.trigger("morlockResizeEnd", e)
                    }, t)
                })
            }, e.fn.morlockScroll = function() {
                return e(this).each(function() {
                    if (this !== window) return;
                    var t = e(this);
                    i.onScroll(function() {
                        t.trigger("morlockScroll")
                    }), i.onScrollEnd(function() {
                        t.trigger("morlockScrollEnd")
                    })
                })
            }, e.fn.morlockElementPosition = function(t) {
                return e(this).each(function() {
                    if (this !== window) return;
                    var n = e(this);
                    i.position.before(t, function() {
                        n.trigger("morlockElementPositionBefore", t)
                    }), i.position.after(t, function() {
                        n.trigger("morlockElementPositionAfter", t)
                    })
                })
            }, e.fn.morlockBreakpoint = function(t) {
                return e(this).each(function() {
                    if (this !== window) return;
                    var n = e(this),
                        r = new s(t);
                    r.on("breakpoint", function(e) {
                        n.trigger("morlockBreakpoint", e)
                    })
                })
            }, e.fn.morlockElementVisible = function(t) {
                return e(this).each(function() {
                    var n = e(this),
                        r = i.observeElement(this, t);
                    r.on("enter", function() {
                        n.trigger("morlockElementVisibleEnter")
                    }), r.on("exit", function() {
                        n.trigger("morlockElementVisibleExit")
                    })
                })
            }, e.fn.morlockStickyElement = function(t, n) {
                return e(this).each(function() {
                    var r = this;
                    e(r).find(t).each(function() {
                        e(this).data("morlockStickyElementController", new o(this, r, n))
                    })
                })
            }
        }
        var i = e["default"],
            s = t["default"],
            o = n["default"];
        r.defineJQueryPlugins = u
    }), n("morlock/base", ["morlock/controllers/resize-controller", "morlock/controllers/breakpoint-controller", "morlock/controllers/scroll-controller", "morlock/controllers/element-visible-controller", "morlock/controllers/scroll-position-controller", "morlock/controllers/sticky-element-controller", "morlock/core/responsive-image", "morlock/api", "morlock/jquery", "exports"], function(e, t, n, r, i, s, o, u, a, f) {
        var l = e["default"],
            c = t["default"],
            h = n["default"],
            p = r["default"],
            d = i["default"],
            v = s["default"],
            m = o,
            g = u["default"],
            y = a.defineJQueryPlugins;
        g.enableJQuery = function(t) {
            t || (t = jQuery);
            if (!t) return;
            y(t)
        }, f.API = g, f.ResizeController = l, f.BreakpointController = c, f.ResponsiveImage = m, f.ScrollController = h, f.ElementVisibleController = p, f.ScrollPositionController = d, f.StickyElementController = v
    }), t(["morlock/base"]), t("morlock/base")
});
/*! Hammer.JS - v1.1.3 - 2014-05-22
 * http://eightmedia.github.io/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */


! function(a, b) {
    "use strict";

    function c() {
        d.READY || (s.determineEventTypes(), r.each(d.gestures, function(a) {
            u.register(a)
        }), s.onTouch(d.DOCUMENT, n, u.detect), s.onTouch(d.DOCUMENT, o, u.detect), d.READY = !0)
    }
    var d = function v(a, b) {
        return new v.Instance(a, b || {})
    };
    d.VERSION = "1.1.3", d.defaults = {
        behavior: {
            userSelect: "none",
            touchAction: "pan-y",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, d.DOCUMENT = document, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart" in a, d.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && d.IS_MOBILE || d.HAS_POINTEREVENTS, d.CALCULATE_INTERVAL = 25;
    var e = {},
        f = d.DIRECTION_DOWN = "down",
        g = d.DIRECTION_LEFT = "left",
        h = d.DIRECTION_UP = "up",
        i = d.DIRECTION_RIGHT = "right",
        j = d.POINTER_MOUSE = "mouse",
        k = d.POINTER_TOUCH = "touch",
        l = d.POINTER_PEN = "pen",
        m = d.EVENT_START = "start",
        n = d.EVENT_MOVE = "move",
        o = d.EVENT_END = "end",
        p = d.EVENT_RELEASE = "release",
        q = d.EVENT_TOUCH = "touch";
    d.READY = !1, d.plugins = d.plugins || {}, d.gestures = d.gestures || {};
    var r = d.utils = {
            extend: function(a, c, d) {
                for (var e in c)!c.hasOwnProperty(e) || a[e] !== b && d || (a[e] = c[e]);
                return a
            },
            on: function(a, b, c) {
                a.addEventListener(b, c, !1)
            },
            off: function(a, b, c) {
                a.removeEventListener(b, c, !1)
            },
            each: function(a, c, d) {
                var e, f;
                if ("forEach" in a) a.forEach(c, d);
                else if (a.length !== b) {
                    for (e = 0, f = a.length; f > e; e++)
                        if (c.call(d, a[e], e, a) === !1) return
                } else
                    for (e in a)
                        if (a.hasOwnProperty(e) && c.call(d, a[e], e, a) === !1) return
            },
            inStr: function(a, b) {
                return a.indexOf(b) > -1
            },
            inArray: function(a, b) {
                if (a.indexOf) {
                    var c = a.indexOf(b);
                    return -1 === c ? !1 : c
                }
                for (var d = 0, e = a.length; e > d; d++)
                    if (a[d] === b) return d;
                return !1
            },
            toArray: function(a) {
                return Array.prototype.slice.call(a, 0)
            },
            hasParent: function(a, b) {
                for (; a;) {
                    if (a == b) return !0;
                    a = a.parentNode
                }
                return !1
            },
            getCenter: function(a) {
                var b = [],
                    c = [],
                    d = [],
                    e = [],
                    f = Math.min,
                    g = Math.max;
                return 1 === a.length ? {
                    pageX: a[0].pageX,
                    pageY: a[0].pageY,
                    clientX: a[0].clientX,
                    clientY: a[0].clientY
                } : (r.each(a, function(a) {
                    b.push(a.pageX), c.push(a.pageY), d.push(a.clientX), e.push(a.clientY)
                }), {
                    pageX: (f.apply(Math, b) + g.apply(Math, b)) / 2,
                    pageY: (f.apply(Math, c) + g.apply(Math, c)) / 2,
                    clientX: (f.apply(Math, d) + g.apply(Math, d)) / 2,
                    clientY: (f.apply(Math, e) + g.apply(Math, e)) / 2
                })
            },
            getVelocity: function(a, b, c) {
                return {
                    x: Math.abs(b / a) || 0,
                    y: Math.abs(c / a) || 0
                }
            },
            getAngle: function(a, b) {
                var c = b.clientX - a.clientX,
                    d = b.clientY - a.clientY;
                return 180 * Math.atan2(d, c) / Math.PI
            },
            getDirection: function(a, b) {
                var c = Math.abs(a.clientX - b.clientX),
                    d = Math.abs(a.clientY - b.clientY);
                return c >= d ? a.clientX - b.clientX > 0 ? g : i : a.clientY - b.clientY > 0 ? h : f
            },
            getDistance: function(a, b) {
                var c = b.clientX - a.clientX,
                    d = b.clientY - a.clientY;
                return Math.sqrt(c * c + d * d)
            },
            getScale: function(a, b) {
                return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
            },
            getRotation: function(a, b) {
                return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
            },
            isVertical: function(a) {
                return a == h || a == f
            },
            setPrefixedCss: function(a, b, c, d) {
                var e = ["", "Webkit", "Moz", "O", "ms"];
                b = r.toCamelCase(b);
                for (var f = 0; f < e.length; f++) {
                    var g = b;
                    if (e[f] && (g = e[f] + g.slice(0, 1).toUpperCase() + g.slice(1)), g in a.style) {
                        a.style[g] = (null == d || d) && c || "";
                        break
                    }
                }
            },
            toggleBehavior: function(a, b, c) {
                if (b && a && a.style) {
                    r.each(b, function(b, d) {
                        r.setPrefixedCss(a, d, b, c)
                    });
                    var d = c && function() {
                        return !1
                    };
                    "none" == b.userSelect && (a.onselectstart = d), "none" == b.userDrag && (a.ondragstart = d)
                }
            },
            toCamelCase: function(a) {
                return a.replace(/[_-]([a-z])/g, function(a) {
                    return a[1].toUpperCase()
                })
            }
        },
        s = d.event = {
            preventMouseEvents: !1,
            started: !1,
            shouldDetect: !1,
            on: function(a, b, c, d) {
                var e = b.split(" ");
                r.each(e, function(b) {
                    r.on(a, b, c), d && d(b)
                })
            },
            off: function(a, b, c, d) {
                var e = b.split(" ");
                r.each(e, function(b) {
                    r.off(a, b, c), d && d(b)
                })
            },
            onTouch: function(a, b, c) {
                var f = this,
                    g = function(e) {
                        var g, h = e.type.toLowerCase(),
                            i = d.HAS_POINTEREVENTS,
                            j = r.inStr(h, "mouse");
                        j && f.preventMouseEvents || (j && b == m && 0 === e.button ? (f.preventMouseEvents = !1, f.shouldDetect = !0) : i && b == m ? f.shouldDetect = 1 === e.buttons || t.matchType(k, e) : j || b != m || (f.preventMouseEvents = !0, f.shouldDetect = !0), i && b != o && t.updatePointer(b, e), f.shouldDetect && (g = f.doDetect.call(f, e, b, a, c)), g == o && (f.preventMouseEvents = !1, f.shouldDetect = !1, t.reset()), i && b == o && t.updatePointer(b, e))
                    };
                return this.on(a, e[b], g), g
            },
            doDetect: function(a, b, c, d) {
                var e = this.getTouchList(a, b),
                    f = e.length,
                    g = b,
                    h = e.trigger,
                    i = f;
                b == m ? h = q : b == o && (h = p, i = e.length - (a.changedTouches ? a.changedTouches.length : 1)), i > 0 && this.started && (g = n), this.started = !0;
                var j = this.collectEventData(c, g, e, a);
                return b != o && d.call(u, j), h && (j.changedLength = i, j.eventType = h, d.call(u, j), j.eventType = g, delete j.changedLength), g == o && (d.call(u, j), this.started = !1), g
            },
            determineEventTypes: function() {
                var b;
                return b = d.HAS_POINTEREVENTS ? a.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], e[m] = b[0], e[n] = b[1], e[o] = b[2], e
            },
            getTouchList: function(a, b) {
                if (d.HAS_POINTEREVENTS) return t.getTouchList();
                if (a.touches) {
                    if (b == n) return a.touches;
                    var c = [],
                        e = [].concat(r.toArray(a.touches), r.toArray(a.changedTouches)),
                        f = [];
                    return r.each(e, function(a) {
                        r.inArray(c, a.identifier) === !1 && f.push(a), c.push(a.identifier)
                    }), f
                }
                return a.identifier = 1, [a]
            },
            collectEventData: function(a, b, c, d) {
                var e = k;
                return r.inStr(d.type, "mouse") || t.matchType(j, d) ? e = j : t.matchType(l, d) && (e = l), {
                    center: r.getCenter(c),
                    timeStamp: Date.now(),
                    target: d.target,
                    touches: c,
                    eventType: b,
                    pointerType: e,
                    srcEvent: d,
                    preventDefault: function() {
                        var a = this.srcEvent;
                        a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return u.stopDetect()
                    }
                }
            }
        },
        t = d.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var a = [];
                return r.each(this.pointers, function(b) {
                    a.push(b)
                }), a
            },
            updatePointer: function(a, b) {
                a == o ? delete this.pointers[b.pointerId] : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b)
            },
            matchType: function(a, b) {
                if (!b.pointerType) return !1;
                var c = b.pointerType,
                    d = {};
                return d[j] = c === (b.MSPOINTER_TYPE_MOUSE || j), d[k] = c === (b.MSPOINTER_TYPE_TOUCH || k), d[l] = c === (b.MSPOINTER_TYPE_PEN || l), d[a]
            },
            reset: function() {
                this.pointers = {}
            }
        },
        u = d.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(a, b) {
                this.current || (this.stopped = !1, this.current = {
                    inst: a,
                    startEvent: r.extend({}, b),
                    lastEvent: !1,
                    lastCalcEvent: !1,
                    futureCalcEvent: !1,
                    lastCalcData: {},
                    name: ""
                }, this.detect(b))
            },
            detect: function(a) {
                if (this.current && !this.stopped) {
                    a = this.extendEventData(a);
                    var b = this.current.inst,
                        c = b.options;
                    return r.each(this.gestures, function(d) {
                        !this.stopped && b.enabled && c[d.name] && d.handler.call(d, a, b)
                    }, this), this.current && (this.current.lastEvent = a), a.eventType == o && this.stopDetect(), a
                }
            },
            stopDetect: function() {
                this.previous = r.extend({}, this.current), this.current = null, this.stopped = !0
            },
            getCalculatedData: function(a, b, c, e, f) {
                var g = this.current,
                    h = !1,
                    i = g.lastCalcEvent,
                    j = g.lastCalcData;
                i && a.timeStamp - i.timeStamp > d.CALCULATE_INTERVAL && (b = i.center, c = a.timeStamp - i.timeStamp, e = a.center.clientX - i.center.clientX, f = a.center.clientY - i.center.clientY, h = !0), (a.eventType == q || a.eventType == p) && (g.futureCalcEvent = a), (!g.lastCalcEvent || h) && (j.velocity = r.getVelocity(c, e, f), j.angle = r.getAngle(b, a.center), j.direction = r.getDirection(b, a.center), g.lastCalcEvent = g.futureCalcEvent || a, g.futureCalcEvent = a), a.velocityX = j.velocity.x, a.velocityY = j.velocity.y, a.interimAngle = j.angle, a.interimDirection = j.direction
            },
            extendEventData: function(a) {
                var b = this.current,
                    c = b.startEvent,
                    d = b.lastEvent || c;
                (a.eventType == q || a.eventType == p) && (c.touches = [], r.each(a.touches, function(a) {
                    c.touches.push({
                        clientX: a.clientX,
                        clientY: a.clientY
                    })
                }));
                var e = a.timeStamp - c.timeStamp,
                    f = a.center.clientX - c.center.clientX,
                    g = a.center.clientY - c.center.clientY;
                return this.getCalculatedData(a, d.center, e, f, g), r.extend(a, {
                    startEvent: c,
                    deltaTime: e,
                    deltaX: f,
                    deltaY: g,
                    distance: r.getDistance(c.center, a.center),
                    angle: r.getAngle(c.center, a.center),
                    direction: r.getDirection(c.center, a.center),
                    scale: r.getScale(c.touches, a.touches),
                    rotation: r.getRotation(c.touches, a.touches)
                }), a
            },
            register: function(a) {
                var c = a.defaults || {};
                return c[a.name] === b && (c[a.name] = !0), r.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function(a, b) {
                    return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
                }), this.gestures
            }
        };
    d.Instance = function(a, b) {
            var e = this;
            c(), this.element = a, this.enabled = !0, r.each(b, function(a, c) {
                delete b[c], b[r.toCamelCase(c)] = a
            }), this.options = r.extend(r.extend({}, d.defaults), b || {}), this.options.behavior && r.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = s.onTouch(a, m, function(a) {
                e.enabled && a.eventType == m ? u.startDetect(e, a) : a.eventType == q && u.detect(a)
            }), this.eventHandlers = []
        }, d.Instance.prototype = {
            on: function(a, b) {
                var c = this;
                return s.on(c.element, a, b, function(a) {
                    c.eventHandlers.push({
                        gesture: a,
                        handler: b
                    })
                }), c
            },
            off: function(a, b) {
                var c = this;
                return s.off(c.element, a, b, function(a) {
                    var d = r.inArray({
                        gesture: a,
                        handler: b
                    });
                    d !== !1 && c.eventHandlers.splice(d, 1)
                }), c
            },
            trigger: function(a, b) {
                b || (b = {});
                var c = d.DOCUMENT.createEvent("Event");
                c.initEvent(a, !0, !0), c.gesture = b;
                var e = this.element;
                return r.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
            },
            enable: function(a) {
                return this.enabled = a, this
            },
            dispose: function() {
                var a, b;
                for (r.toggleBehavior(this.element, this.options.behavior, !1), a = -1; b = this.eventHandlers[++a];) r.off(this.element, b.gesture, b.handler);
                return this.eventHandlers = [], s.off(this.element, e[m], this.eventStartHandler), null
            }
        },
        function(a) {
            function b(b, d) {
                var e = u.current;
                if (!(d.options.dragMaxTouches > 0 && b.touches.length > d.options.dragMaxTouches)) switch (b.eventType) {
                    case m:
                        c = !1;
                        break;
                    case n:
                        if (b.distance < d.options.dragMinDistance && e.name != a) return;
                        var j = e.startEvent.center;
                        if (e.name != a && (e.name = a, d.options.dragDistanceCorrection && b.distance > 0)) {
                            var k = Math.abs(d.options.dragMinDistance / b.distance);
                            j.pageX += b.deltaX * k, j.pageY += b.deltaY * k, j.clientX += b.deltaX * k, j.clientY += b.deltaY * k, b = u.extendEventData(b)
                        }(e.lastEvent.dragLockToAxis || d.options.dragLockToAxis && d.options.dragLockMinDistance <= b.distance) && (b.dragLockToAxis = !0);
                        var l = e.lastEvent.direction;
                        b.dragLockToAxis && l !== b.direction && (b.direction = r.isVertical(l) ? b.deltaY < 0 ? h : f : b.deltaX < 0 ? g : i), c || (d.trigger(a + "start", b), c = !0), d.trigger(a, b), d.trigger(a + b.direction, b);
                        var q = r.isVertical(b.direction);
                        (d.options.dragBlockVertical && q || d.options.dragBlockHorizontal && !q) && b.preventDefault();
                        break;
                    case p:
                        c && b.changedLength <= d.options.dragMaxTouches && (d.trigger(a + "end", b), c = !1);
                        break;
                    case o:
                        c = !1
                }
            }
            var c = !1;
            d.gestures.Drag = {
                name: a,
                index: 50,
                handler: b,
                defaults: {
                    dragMinDistance: 10,
                    dragDistanceCorrection: !0,
                    dragMaxTouches: 1,
                    dragBlockHorizontal: !1,
                    dragBlockVertical: !1,
                    dragLockToAxis: !1,
                    dragLockMinDistance: 25
                }
            }
        }("drag"), d.gestures.Gesture = {
            name: "gesture",
            index: 1337,
            handler: function(a, b) {
                b.trigger(this.name, a)
            }
        },
        function(a) {
            function b(b, d) {
                var e = d.options,
                    f = u.current;
                switch (b.eventType) {
                    case m:
                        clearTimeout(c), f.name = a, c = setTimeout(function() {
                            f && f.name == a && d.trigger(a, b)
                        }, e.holdTimeout);
                        break;
                    case n:
                        b.distance > e.holdThreshold && clearTimeout(c);
                        break;
                    case p:
                        clearTimeout(c)
                }
            }
            var c;
            d.gestures.Hold = {
                name: a,
                index: 10,
                defaults: {
                    holdTimeout: 500,
                    holdThreshold: 2
                },
                handler: b
            }
        }("hold"), d.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(a, b) {
                a.eventType == p && b.trigger(this.name, a)
            }
        }, d.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipeMinTouches: 1,
                swipeMaxTouches: 1,
                swipeVelocityX: .6,
                swipeVelocityY: .6
            },
            handler: function(a, b) {
                if (a.eventType == p) {
                    var c = a.touches.length,
                        d = b.options;
                    if (c < d.swipeMinTouches || c > d.swipeMaxTouches) return;
                    (a.velocityX > d.swipeVelocityX || a.velocityY > d.swipeVelocityY) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
                }
            }
        },
        function(a) {
            function b(b, d) {
                var e, f, g = d.options,
                    h = u.current,
                    i = u.previous;
                switch (b.eventType) {
                    case m:
                        c = !1;
                        break;
                    case n:
                        c = c || b.distance > g.tapMaxDistance;
                        break;
                    case o:
                        !r.inStr(b.srcEvent.type, "cancel") && b.deltaTime < g.tapMaxTime && !c && (e = i && i.lastEvent && b.timeStamp - i.lastEvent.timeStamp, f = !1, i && i.name == a && e && e < g.doubleTapInterval && b.distance < g.doubleTapDistance && (d.trigger("doubletap", b), f = !0), (!f || g.tapAlways) && (h.name = a, d.trigger(h.name, b)))
                }
            }
            var c = !1;
            d.gestures.Tap = {
                name: a,
                index: 100,
                handler: b,
                defaults: {
                    tapMaxTime: 250,
                    tapMaxDistance: 10,
                    tapAlways: !0,
                    doubleTapDistance: 20,
                    doubleTapInterval: 300
                }
            }
        }("tap"), d.gestures.Touch = {
            name: "touch",
            index: -1 / 0,
            defaults: {
                preventDefault: !1,
                preventMouse: !1
            },
            handler: function(a, b) {
                return b.options.preventMouse && a.pointerType == j ? void a.stopDetect() : (b.options.preventDefault && a.preventDefault(), void(a.eventType == q && b.trigger("touch", a)))
            }
        },
        function(a) {
            function b(b, d) {
                switch (b.eventType) {
                    case m:
                        c = !1;
                        break;
                    case n:
                        if (b.touches.length < 2) return;
                        var e = Math.abs(1 - b.scale),
                            f = Math.abs(b.rotation);
                        if (e < d.options.transformMinScale && f < d.options.transformMinRotation) return;
                        u.current.name = a, c || (d.trigger(a + "start", b), c = !0), d.trigger(a, b), f > d.options.transformMinRotation && d.trigger("rotate", b), e > d.options.transformMinScale && (d.trigger("pinch", b), d.trigger("pinch" + (b.scale < 1 ? "in" : "out"), b));
                        break;
                    case p:
                        c && b.changedLength < 2 && (d.trigger(a + "end", b), c = !1)
                }
            }
            var c = !1;
            d.gestures.Transform = {
                name: a,
                index: 45,
                defaults: {
                    transformMinScale: .01,
                    transformMinRotation: 1
                },
                handler: b
            }
        }("transform"), "function" == typeof define && define.amd ? define(function() {
            return d
        }) : "undefined" != typeof module && module.exports ? module.exports = d : a.Hammer = d
}(window);
//# sourceMappingURL=hammer.min.map
function aa() {
    return function() {}
}

function ba(a) {
    return function() {
        return this[a]
    }
}
var g, ca = ca || {},
    l = this;

function da(a, b) {
    var c = a.split("."),
        d = l;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}

function ea(a) {
    a = a.split(".");
    for (var b = l, c; c = a.shift();)
        if (null != b[c]) b = b[c];
        else return null;
    return b
}

function fa() {}

function ha(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function ja(a) {
    return void 0 !== a
}

function ka(a) {
    return "array" == ha(a)
}

function la(a) {
    var b = ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function m(a) {
    return "string" == typeof a
}

function ma(a) {
    return "function" == ha(a)
}

function na(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function oa(a) {
    return a[pa] || (a[pa] = ++qa)
}
var pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
    qa = 0;

function ra(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function sa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function n(a, b, c) {
    n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ra : sa;
    return n.apply(null, arguments)
}

function ta(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var ua = Date.now || function() {
    return +new Date
};

function p(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.d = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};

function va(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, va) : this.stack = Error().stack || "";
    a && (this.message = String(a))
}
p(va, Error);
va.prototype.name = "CustomError";

function wa(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
}

function xa(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}

function ya(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}

function za(a) {
    if (!Aa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;"));
    return a
}
var Ba = /&/g,
    Ca = /</g,
    Da = />/g,
    Ea = /\"/g,
    Aa = /[&<>\"]/;

function Fa(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}

function Ga(a) {
    var b = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function Ha(a, b) {
    b.unshift(a);
    va.call(this, wa.apply(null, b));
    b.shift()
}
p(Ha, va);
Ha.prototype.name = "AssertionError";

function Ia(a, b) {
    throw new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};

function Ja(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}

function Ka(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function La(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}
var Ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Na(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ma.length; f++) c = Ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var r = Array.prototype,
    Oa = r.indexOf ? function(a, b, c) {
        return r.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    s = r.forEach ? function(a, b, c) {
        r.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Pa = r.filter ? function(a, b, c) {
        return r.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = m(a) ?
            a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var q = h[k];
                b.call(c, q, k, a) && (e[f++] = q)
            }
        return e
    },
    u = r.map ? function(a, b, c) {
        return r.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Qa = r.reduce ? function(a, b, c, d) {
        d && (b = n(b, d));
        return r.reduce.call(a, b, c)
    } : function(a, b, c, d) {
        var e = c;
        s(a, function(c, h) {
            e = b.call(d, e, c, h, a)
        });
        return e
    },
    Ra = r.some ? function(a, b, c) {
        return r.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ?
            a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    },
    Sa = r.every ? function(a, b, c) {
        return r.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Ta(a, b, c) {
    a: {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) {
                b = f;
                break a
            }
        b = -1
    }
    return 0 > b ? null : m(a) ? a.charAt(b) : a[b]
}

function Ua(a, b) {
    return 0 <= Oa(a, b)
}

function Va(a, b) {
    var c = Oa(a, b),
        d;
    (d = 0 <= c) && r.splice.call(a, c, 1);
    return d
}

function Wa(a) {
    return r.concat.apply(r, arguments)
}

function Xa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Ya(a, b, c, d) {
    r.splice.apply(a, Za(arguments, 1))
}

function Za(a, b, c) {
    return 2 >= arguments.length ? r.slice.call(a, b) : r.slice.call(a, b, c)
};
var $a, ab = {};

function bb(a) {
    a = a.className;
    return m(a) && a.match(/\S+/g) || []
}

function v(a, b) {
    for (var c = bb(a), d = Za(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++) Ua(f, d[h]) || f.push(d[h]);
    a.className = c.join(" ");
    return c.length == e
}

function w(a, b) {
    var c = bb(a),
        d = Za(arguments, 1),
        c = cb(c, d);
    a.className = c.join(" ")
}

function cb(a, b) {
    return Pa(a, function(a) {
        return !Ua(b, a)
    })
}

function x(a, b) {
    return Ua(bb(a), b)
}

function db(a, b) {
    x(a, b) ? w(a, b) : v(a, b)
};
var eb, fb, gb, hb;

function ib() {
    return l.navigator ? l.navigator.userAgent : null
}
hb = gb = fb = eb = !1;
var jb;
if (jb = ib()) {
    var nb = l.navigator;
    eb = 0 == jb.lastIndexOf("Opera", 0);
    fb = !eb && (-1 != jb.indexOf("MSIE") || -1 != jb.indexOf("Trident"));
    gb = !eb && -1 != jb.indexOf("WebKit");
    hb = !eb && !gb && !fb && "Gecko" == nb.product
}
var ob = eb,
    y = fb,
    pb = hb,
    z = gb,
    qb = l.navigator,
    rb = -1 != (qb && qb.platform || "").indexOf("Mac");

function sb() {
    var a = l.document;
    return a ? a.documentMode : void 0
}
var tb;
a: {
    var ub = "",
        vb;
    if (ob && l.opera) var wb = l.opera.version,
        ub = "function" == typeof wb ? wb() : wb;
    else if (pb ? vb = /rv\:([^\);]+)(\)|;)/ : y ? vb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : z && (vb = /WebKit\/(\S+)/), vb) var xb = vb.exec(ib()),
        ub = xb ? xb[1] : "";
    if (y) {
        var yb = sb();
        if (yb > parseFloat(ub)) {
            tb = String(yb);
            break a
        }
    }
    tb = ub
}
var zb = {};

function A(a) {
    var b;
    if (!(b = zb[a])) {
        b = 0;
        for (var c = xa(String(tb)).split("."), d = xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                k = d[f] || "",
                q = RegExp("(\\d*)(\\D*)", "g"),
                t = RegExp("(\\d*)(\\D*)", "g");
            do {
                var G = q.exec(h) || ["", "", ""],
                    N = t.exec(k) || ["", "", ""];
                if (0 == G[0].length && 0 == N[0].length) break;
                b = ((0 == G[1].length ? 0 : parseInt(G[1], 10)) < (0 == N[1].length ? 0 : parseInt(N[1], 10)) ? -1 : (0 == G[1].length ? 0 : parseInt(G[1], 10)) > (0 == N[1].length ? 0 : parseInt(N[1], 10)) ? 1 : 0) || ((0 == G[2].length) <
                    (0 == N[2].length) ? -1 : (0 == G[2].length) > (0 == N[2].length) ? 1 : 0) || (G[2] < N[2] ? -1 : G[2] > N[2] ? 1 : 0)
            } while (0 == b)
        }
        b = zb[a] = 0 <= b
    }
    return b
}
var Ab = l.document,
    Bb = Ab && y ? sb() || ("CSS1Compat" == Ab.compatMode ? parseInt(tb, 10) : 5) : void 0;

function Cb(a, b) {
    this.width = a;
    this.height = b
}
Cb.prototype.clone = function() {
    return new Cb(this.width, this.height)
};
Cb.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
Cb.prototype.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
Cb.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Db = !y || y && 9 <= Bb,
    Eb = !pb && !y || y && y && 9 <= Bb || pb && A("1.9.1");
y && A("9");
var Fb = y || ob || z;

function Gb(a, b) {
    this.x = ja(a) ? a : 0;
    this.y = ja(b) ? b : 0
}
Gb.prototype.clone = function() {
    return new Gb(this.x, this.y)
};
Gb.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
};
Gb.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
Gb.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Hb(a) {
    return a ? new Ib(Jb(a)) : $a || ($a = new Ib)
}

function B(a) {
    return m(a) ? document.getElementById(a) : a
}

function C(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Kb("*", a, b)
}

function E(a, b) {
    var c = b || document,
        d = null;
    return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : C(a, b)[0]) || null
}

function Kb(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; h = c[f]; f++) a = h.className, "function" == typeof a.split && Ua(a.split(/\s+/), b) && (d[e++] = h);
        d.length = e;
        return d
    }
    return c
}

function Lb(a, b) {
    Ja(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Mb ? a.setAttribute(Mb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Mb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Nb(a) {
    var b = z || "CSS1Compat" != a.compatMode ? a.body : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return y && A("10") && a.pageYOffset != b.scrollTop ? new Gb(b.scrollLeft, b.scrollTop) : new Gb(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function Ob(a, b, c) {
    var d = arguments,
        e = document,
        f = d[0],
        h = d[1];
    if (!Db && h && (h.name || h.type)) {
        f = ["<", f];
        h.name && f.push(' name="', za(h.name), '"');
        if (h.type) {
            f.push(' type="', za(h.type), '"');
            var k = {};
            Na(k, h);
            delete k.type;
            h = k
        }
        f.push(">");
        f = f.join("")
    }
    f = e.createElement(f);
    h && (m(h) ? f.className = h : ka(h) ? v.apply(null, [f].concat(h)) : Lb(f, h));
    2 < d.length && Pb(e, f, d, 2);
    return f
}

function Pb(a, b, c, d) {
    function e(c) {
        c && b.appendChild(m(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !la(f) || na(f) && 0 < f.nodeType ? e(f) : s(Qb(f) ? Xa(f) : f, e)
    }
}

function Rb(a) {
    var b = document,
        c = b.createElement("div");
    y ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
    if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
    for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
    return a
}

function Wb(a, b) {
    Pb(Jb(a), a, arguments, 1)
}

function Xb(a) {
    var b = Kb("script", "", void 0)[0];
    b.parentNode && b.parentNode.insertBefore(a, b)
}

function Yb(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
}

function Zb(a) {
    return Eb && void 0 != a.children ? a.children : Pa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
}

function $b(a) {
    if (Fb && !(y && A("9") && !A("10") && l.SVGElement && a instanceof l.SVGElement)) return a.parentElement;
    a = a.parentNode;
    return na(a) && 1 == a.nodeType ? a : null
}

function Jb(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function ac(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(Jb(a).createTextNode(String(b)))
    }
}

function Qb(a) {
    if (a && "number" == typeof a.length) {
        if (na(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ma(a)) return "function" == typeof a.item
    }
    return !1
}

function bc(a, b) {
    return b ? cc(a, function(a) {
        return !b || x(a, b)
    }) : null
}

function cc(a, b) {
    for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
}

function Ib(a) {
    this.Hb = a || l.document || document
}
g = Ib.prototype;
g.createElement = function(a) {
    return this.Hb.createElement(a)
};
g.createTextNode = function(a) {
    return this.Hb.createTextNode(String(a))
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.hf = Zb;
g.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
};

function dc(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = dc.prototype;
g.clone = function() {
    return new dc(this.top, this.right, this.bottom, this.left)
};
g.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
g.contains = function(a) {
    return this && a ? a instanceof dc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};

function F(a, b, c) {
    m(b) ? ec(a, c, b) : Ja(b, ta(ec, a))
}

function ec(a, b, c) {
    var d;
    a: if (d = Fa(c), void 0 === a.style[d] && (c = (z ? "Webkit" : pb ? "Moz" : y ? "ms" : ob ? "O" : null) + Ga(c), void 0 !== a.style[c])) {
        d = c;
        break a
    }
    d && (a.style[d] = b)
}

function fc(a, b) {
    var c = Jb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function gc(a, b) {
    return fc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function hc(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    y && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function ic(a) {
    if (y && !(y && 8 <= Bb)) return a.offsetParent;
    var b = Jb(a),
        c = gc(a, "position"),
        d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = gc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
}

function jc(a, b) {
    var c = Kb("html", "", void 0)[0],
        d = kc(a),
        e = kc(c),
        f;
    if (y) {
        var h = lc(c, "borderLeft");
        f = lc(c, "borderRight");
        var k = lc(c, "borderTop"),
            q = lc(c, "borderBottom");
        f = new dc(k, f, q, h)
    } else h = fc(c, "borderLeftWidth"), f = fc(c, "borderRightWidth"), k = fc(c, "borderTopWidth"), q = fc(c, "borderBottomWidth"), f = new dc(parseFloat(k), parseFloat(f), parseFloat(q), parseFloat(h));
    h = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    e = c.clientWidth - a.offsetWidth;
    f = c.clientHeight - a.offsetHeight;
    k = c.scrollLeft;
    c = c.scrollTop;
    b ? (k += h - e / 2, c += d -
        f / 2) : (k += Math.min(h, Math.max(h - e, 0)), c += Math.min(d, Math.max(d - f, 0)));
    return new Gb(k, c)
}

function kc(a) {
    var b, c = Jb(a),
        d = gc(a, "position"),
        e = pb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new Gb(0, 0),
        h;
    b = c ? Jb(c) : document;
    (h = !y) || (h = y && 9 <= Bb) || (h = "CSS1Compat" == Hb(b).Hb.compatMode);
    h = h ? b.documentElement : b.body;
    if (a == h) return f;
    if (a.getBoundingClientRect) b = hc(a), a = Hb(c), a = Nb(a.Hb), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY -
        a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (z && "fixed" == gc(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (ob || z && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
            (b = ic(b)) && b != c.body && b != h;) f.x -= b.scrollLeft, ob && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}

function H(a) {
    var b = mc;
    if ("none" != gc(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function mc(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = z && !b && !c;
    return ja(b) && !d || !a.getBoundingClientRect ? new Cb(b, c) : (a = hc(a), new Cb(a.right - a.left, a.bottom - a.top))
}
var nc = {
    thin: 2,
    medium: 4,
    thick: 6
};

function lc(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in nc) d = nc[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};
var oc, I, pc, qc, rc, sc, K, tc, uc, vc, wc;

function xc(a) {
    if (!(this instanceof xc)) return new xc(a);
    var b = this;
    this.a = a;
    this.jc = C("js-card-toggler", this.a);
    this.B = E("js-card-content", this.a);
    this.tc = E("js-card-banner", this.a);
    this.ca = !0;
    v(this.a, "is-active");
    oc.on("resize", function() {
        F(b.B, "marginTop", "");
        b.J = H(b.B).height;
        b.Yb = H(b.tc).height;
        F(b.B, "marginTop", b.Yb + "px");
        b.ca ? TweenMax.set(b.tc, {
            y: -(b.J - b.Yb)
        }) : TweenMax.set(b.B, {
            y: b.J - b.Yb
        })
    });
    this.ta(!1);
    s(this.jc, function(a) {
        F(a, "cursor", "pointer");
        (new Hammer(a)).on("tap", function() {
            b.ta(!0)
        })
    })
}
xc.prototype.ta = function() {
    this.ca ? (TweenMax.to(this.B, 0.4, {
        y: this.J - this.Yb,
        ease: Expo.easeOut
    }), TweenMax.to(this.tc, 0.4, {
        y: 0,
        ease: Expo.easeOut
    })) : (TweenMax.to(this.tc, 0.4, {
        y: -(this.J - this.Yb),
        ease: Expo.easeOut
    }), TweenMax.to(this.B, 0.4, {
        y: 0,
        ease: Expo.easeOut
    }));
    db(this.a, "is-active");
    this.ca = !this.ca
};

function yc() {
    return xc.apply(xc, arguments)
};
var zc = "closure_listenable_" + (1E6 * Math.random() | 0);

function Ac(a) {
    return !(!a || !a[zc])
}
var Ec = 0;

function Fc(a, b, c, d, e) {
    this.listener = a;
    this.Yc = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Jc = e;
    this.key = ++Ec;
    this.vb = this.wc = !1
}

function Gc(a) {
    a.vb = !0;
    a.listener = null;
    a.Yc = null;
    a.src = null;
    a.Jc = null
};

function Hc(a) {
    this.src = a;
    this.K = {};
    this.mc = 0
}
Hc.prototype.add = function(a, b, c, d, e) {
    var f = this.K[a];
    f || (f = this.K[a] = [], this.mc++);
    var h = Ic(f, b, d, e); - 1 < h ? (a = f[h], c || (a.wc = !1)) : (a = new Fc(b, this.src, a, !!d, e), a.wc = c, f.push(a));
    return a
};
Hc.prototype.remove = function(a, b, c, d) {
    if (!(a in this.K)) return !1;
    var e = this.K[a];
    b = Ic(e, b, c, d);
    return -1 < b ? (Gc(e[b]), r.splice.call(e, b, 1), 0 == e.length && (delete this.K[a], this.mc--), !0) : !1
};

function Jc(a, b) {
    var c = b.type;
    if (!(c in a.K)) return !1;
    var d = Va(a.K[c], b);
    d && (Gc(b), 0 == a.K[c].length && (delete a.K[c], a.mc--));
    return d
}
Hc.prototype.Zc = function(a) {
    var b = 0,
        c;
    for (c in this.K)
        if (!a || c == a) {
            for (var d = this.K[c], e = 0; e < d.length; e++)++b, Gc(d[e]);
            delete this.K[c];
            this.mc--
        }
    return b
};
Hc.prototype.Ob = function(a, b, c, d) {
    a = this.K[a];
    var e = -1;
    a && (e = Ic(a, b, c, d));
    return -1 < e ? a[e] : null
};

function Ic(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.vb && f.listener == b && f.capture == !!c && f.Jc == d) return e
    }
    return -1
};
var Kc = !y || y && 9 <= Bb,
    Lc = y && !A("9");
!z || A("528");
pb && A("1.9b") || y && A("8") || ob && A("9.5") || z && A("528");
pb && !A("8") || y && A("9");

function L() {
    0 != Mc && (Nc[oa(this)] = this)
}
var Mc = 0,
    Nc = {};
L.prototype.Nd = !1;
L.prototype.xa = function() {
    if (!this.Nd && (this.Nd = !0, this.f(), 0 != Mc)) {
        var a = oa(this);
        delete Nc[a]
    }
};
L.prototype.f = function() {
    if (this.Zb)
        for (; this.Zb.length;) this.Zb.shift()()
};

function Oc(a) {
    a && "function" == typeof a.xa && a.xa()
};

function Pc(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
g = Pc.prototype;
g.f = aa();
g.xa = aa();
g.Da = !1;
g.defaultPrevented = !1;
g.Rf = !0;
g.stopPropagation = function() {
    this.Da = !0
};
g.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Rf = !1
};

function Qc(a) {
    Qc[" "](a);
    return a
}
Qc[" "] = fa;

function Rc(a, b) {
    if (a) {
        var c = this.type = a.type;
        Pc.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (pb) {
                var e;
                a: {
                    try {
                        Qc(d.nodeName);
                        e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY :
            a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.$h = rb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.ab = a;
        a.defaultPrevented && this.preventDefault();
        delete this.Da
    }
}
p(Rc, Pc);
g = Rc.prototype;
g.target = null;
g.relatedTarget = null;
g.offsetX = 0;
g.offsetY = 0;
g.clientX = 0;
g.clientY = 0;
g.screenX = 0;
g.screenY = 0;
g.button = 0;
g.keyCode = 0;
g.charCode = 0;
g.ctrlKey = !1;
g.altKey = !1;
g.shiftKey = !1;
g.metaKey = !1;
g.$h = !1;
g.ab = null;
g.stopPropagation = function() {
    Rc.d.stopPropagation.call(this);
    this.ab.stopPropagation ? this.ab.stopPropagation() : this.ab.cancelBubble = !0
};
g.preventDefault = function() {
    Rc.d.preventDefault.call(this);
    var a = this.ab;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Lc) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
g.f = aa();
var Sc = {},
    Tc = {},
    Uc = {};

function O(a, b, c, d, e) {
    if (ka(b)) {
        for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e);
        return null
    }
    c = Vc(c);
    return Ac(a) ? a.ba(b, c, d, e) : Wc(a, b, c, !1, d, e)
}

function Wc(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = !!e,
        k = oa(a),
        q = Tc[k];
    q || (Tc[k] = q = new Hc(a));
    c = q.add(b, c, d, e, f);
    if (c.Yc) return c;
    d = Xc();
    c.Yc = d;
    d.src = a;
    d.listener = c;
    a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in Uc ? Uc[b] : Uc[b] = "on" + b, d);
    return Sc[c.key] = c
}

function Xc() {
    var a = Yc,
        b = Kc ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function Zc(a, b, c, d, e) {
    if (ka(b)) {
        for (var f = 0; f < b.length; f++) Zc(a, b[f], c, d, e);
        return null
    }
    c = Vc(c);
    return Ac(a) ? a.Oc(b, c, d, e) : Wc(a, b, c, !0, d, e)
}

function $c(a, b, c, d, e) {
    if (ka(b))
        for (var f = 0; f < b.length; f++) $c(a, b[f], c, d, e);
    else c = Vc(c), Ac(a) ? a.ve(b, c, d, e) : a && (d = !!d, (a = ad(a)) && (b = a.Ob(b, c, d, e)) && bd(b))
}

function bd(a) {
    if ("number" == typeof a || !a || a.vb) return !1;
    var b = a.src;
    if (Ac(b)) return Jc(b.la, a);
    var c = a.type,
        d = a.Yc;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Uc ? Uc[c] : Uc[c] = "on" + c, d);
    (c = ad(b)) ? (Jc(c, a), 0 == c.mc && (c.src = null, delete Tc[oa(b)])) : Gc(a);
    delete Sc[a.key];
    return !0
}

function cd(a, b, c, d) {
    var e = 1;
    if (a = ad(a))
        if (b = a.K[b])
            for (b = Xa(b), a = 0; a < b.length; a++) {
                var f = b[a];
                f && (f.capture == c && !f.vb) && (e &= !1 !== dd(f, d))
            }
        return Boolean(e)
}

function dd(a, b) {
    var c = a.listener,
        d = a.Jc || a.src;
    a.wc && bd(a);
    return c.call(d, b)
}

function Yc(a, b) {
    if (a.vb) return !0;
    if (!Kc) {
        var c = b || ea("window.event"),
            d = new Rc(c, this),
            e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var f = !1;
                if (0 == c.keyCode) try {
                    c.keyCode = -1;
                    break a
                } catch (h) {
                    f = !0
                }
                if (f || void 0 == c.returnValue) c.returnValue = !0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
            for (var f = a.type, k = c.length - 1; !d.Da && 0 <= k; k--) d.currentTarget = c[k], e &= cd(c[k], f, !0, d);
            for (k = 0; !d.Da && k < c.length; k++) d.currentTarget = c[k], e &= cd(c[k], f, !1, d)
        }
        return e
    }
    return dd(a, new Rc(b, this))
}

function ad(a) {
    return a[pa] ? Tc[oa(a)] || null : null
}
var ed = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Vc(a) {
    return ma(a) ? a : a[ed] || (a[ed] = function(b) {
        return a.handleEvent(b)
    })
};
var fd;
fd = function(a, b, c, d) {
    function e(a) {
        a.preventDefault();
        a.stopPropagation();
        b.call(c, a)
    }
    if (!1 !== d && gd && !Modernizr.touch) O(a, "click", function(a) {
        e(a)
    });
    else Hammer(a, {
        prevent_default: !1 !== d
    }).on("tap", e)
};

function hd(a) {
    var b, c = null;
    return function() {
        var d = this,
            e = arguments;
        clearTimeout(c);
        c = setTimeout(function() {
            c = null;
            b = a.apply(d, e)
        }, 200);
        return b
    }
}
var gd = !Modernizr.touch,
    id = !1;

function jd(a) {
    id || (id = !0, Zc(document, "mousemove", function() {
        gd = !0;
        id = !1;
        a()
    }))
}
var kd = window.isScrolling = !1;

function ld(a) {
    a = a || "hoverable";
    if (gd) {
        v(document.body, a);
        var b = hd(function() {
            kd = window.isScrolling = !1;
            v(document.body, a)
        });
        O(window, "scroll", function() {
            kd || (kd = window.isScrolling = !0, w(document.body, a));
            b()
        })
    } else jd(function() {
        ld(a)
    })
}

function md(a) {
    s(a, function(a) {
        var c = xa(a.textContent || a.innerText || "").split(" ");
        3 > c.length || c.pop().length > c.join("").length || (a = a.lastChild) && 3 == a.nodeType && (a.nodeValue = a.nodeValue.replace(/\s+([^\s]+\s*)$/g, "\u00a0$1"))
    })
}

function nd(a, b, c, d) {
    if (a === b) return 0 !== a || 1 / a == 1 / b;
    if (null == a || null == b) return a === b;
    var e = a.toString();
    if (e != b.toString()) return !1;
    switch (e) {
        case "[object String]":
            return a == String(b);
        case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
    }
    if ("object" != typeof a || "object" != typeof b) return !1;
    for (var f = c.length; f--;)
        if (c[f] ==
            a) return d[f] == b;
    var f = a.constructor,
        h = b.constructor;
    if (f !== h && !("function" === typeof f && f instanceof f && "function" === typeof h && h instanceof h) && "constructor" in a && "constructor" in b) return !1;
    c.push(a);
    d.push(b);
    f = 0;
    h = !0;
    if ("[object Array]" == e) {
        if (f = a.length, h = f == b.length)
            for (; f-- && (h = nd(a[f], b[f], c, d)););
    } else {
        for (var k in a)
            if (hasOwnProperty.call(a, k) && (f++, !(h = hasOwnProperty.call(b, k) && nd(a[k], b[k], c, d)))) break;
        if (h) {
            for (k in b)
                if (hasOwnProperty.call(b, k) && !f--) break;
            h = !f
        }
    }
    c.pop();
    d.pop();
    return h
};

function P(a, b) {
    return a.dataset ? a.dataset[b] : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
};
var od = !!l.DOMTokenList,
    pd = od ? function(a) {
        return a.classList
    } : function(a) {
        a = a.className;
        return m(a) && a.match(/\S+/g) || []
    },
    qd = od ? function(a, b) {
        return a.classList.contains(b)
    } : function(a, b) {
        return Ua(pd(a), b)
    },
    rd = od ? function(a, b) {
        a.classList.add(b)
    } : function(a, b) {
        qd(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    },
    sd = od ? function(a, b) {
        a.classList.remove(b)
    } : function(a, b) {
        qd(a, b) && (a.className = Pa(pd(a), function(a) {
            return a != b
        }).join(" "))
    };

function Q(a, b, c) {
    c ? rd(a, b) : sd(a, b)
};
var td = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

function ud(a) {
    if (vd) {
        vd = !1;
        var b = l.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = ud(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw vd = !0, Error();
        }
    }
    return a.match(td)
}
var vd = z;
var wd = "StopIteration" in l ? l.StopIteration : Error("StopIteration");

function xd() {}
xd.prototype.next = function() {
    throw wd;
};
xd.prototype.rd = function() {
    return this
};

function yd(a) {
    if (a instanceof xd) return a;
    if ("function" == typeof a.rd) return a.rd(!1);
    if (la(a)) {
        var b = 0,
            c = new xd;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw wd;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function zd(a, b) {
    if (la(a)) try {
        s(a, b, void 0)
    } catch (c) {
        if (c !== wd) throw c;
    } else {
        a = yd(a);
        try {
            for (;;) b.call(void 0, a.next(), void 0, a)
        } catch (d) {
            if (d !== wd) throw d;
        }
    }
};

function Ad(a, b) {
    this.F = {};
    this.n = [];
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Ad ? (c = a.ma(), d = a.na()) : (c = La(a), d = Ka(a));
        for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
    }
}
g = Ad.prototype;
g.s = 0;
g.pc = 0;
g.jf = ba("s");
g.na = function() {
    Bd(this);
    for (var a = [], b = 0; b < this.n.length; b++) a.push(this.F[this.n[b]]);
    return a
};
g.ma = function() {
    Bd(this);
    return this.n.concat()
};
g.Fb = function(a) {
    return Cd(this.F, a)
};
g.clear = function() {
    this.F = {};
    this.pc = this.s = this.n.length = 0
};
g.remove = function(a) {
    return Cd(this.F, a) ? (delete this.F[a], this.s--, this.pc++, this.n.length > 2 * this.s && Bd(this), !0) : !1
};

function Bd(a) {
    if (a.s != a.n.length) {
        for (var b = 0, c = 0; b < a.n.length;) {
            var d = a.n[b];
            Cd(a.F, d) && (a.n[c++] = d);
            b++
        }
        a.n.length = c
    }
    if (a.s != a.n.length) {
        for (var e = {}, c = b = 0; b < a.n.length;) d = a.n[b], Cd(e, d) || (a.n[c++] = d, e[d] = 1), b++;
        a.n.length = c
    }
}
g.get = function(a, b) {
    return Cd(this.F, a) ? this.F[a] : b
};
g.set = function(a, b) {
    Cd(this.F, a) || (this.s++, this.n.push(a), this.pc++);
    this.F[a] = b
};
g.clone = function() {
    return new Ad(this)
};
g.rd = function(a) {
    Bd(this);
    var b = 0,
        c = this.n,
        d = this.F,
        e = this.pc,
        f = this,
        h = new xd;
    h.next = function() {
        for (;;) {
            if (e != f.pc) throw Error("The map has changed since the iterator was created");
            if (b >= c.length) throw wd;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};

function Cd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function Dd(a) {
    if ("function" == typeof a.na) return a.na();
    if (m(a)) return a.split("");
    if (la(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return Ka(a)
}

function Ed(a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c);
    else if (la(a) || m(a)) s(a, b, c);
    else {
        var d;
        if ("function" == typeof a.ma) d = a.ma();
        else if ("function" != typeof a.na)
            if (la(a) || m(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = La(a);
        else d = void 0;
        for (var e = Dd(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
    }
};

function Fd(a, b) {
    var c;
    if (a instanceof Fd) this.Z = ja(b) ? b : a.Z, Gd(this, a.wb), c = a.ld, R(this), this.ld = c, c = a.Ib, R(this), this.Ib = c, Hd(this, a.Wc), c = a.Rc, R(this), this.Rc = c, Id(this, a.Ea.clone()), c = a.Hc, R(this), this.Hc = c;
    else if (a && (c = ud(String(a)))) {
        this.Z = !!b;
        Gd(this, c[1] || "", !0);
        var d = c[2] || "";
        R(this);
        this.ld = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        R(this);
        this.Ib = d ? decodeURIComponent(d) : "";
        Hd(this, c[4]);
        d = c[5] || "";
        R(this);
        this.Rc = d ? decodeURIComponent(d) : "";
        Id(this, c[6] || "", !0);
        c = c[7] || "";
        R(this);
        this.Hc =
            c ? decodeURIComponent(c) : ""
    } else this.Z = !!b, this.Ea = new Jd(null, 0, this.Z)
}
g = Fd.prototype;
g.wb = "";
g.ld = "";
g.Ib = "";
g.Wc = null;
g.Rc = "";
g.Hc = "";
g.nh = !1;
g.Z = !1;
g.toString = function() {
    var a = [],
        b = this.wb;
    b && a.push(Kd(b, Ld), ":");
    if (b = this.Ib) {
        a.push("//");
        var c = this.ld;
        c && a.push(Kd(c, Ld), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.Wc;
        null != b && a.push(":", String(b))
    }
    if (b = this.Rc) this.Ib && "/" != b.charAt(0) && a.push("/"), a.push(Kd(b, "/" == b.charAt(0) ? Od : Pd));
    (b = this.Ea.toString()) && a.push("?", b);
    (b = this.Hc) && a.push("#", Kd(b, Qd));
    return a.join("")
};
g.clone = function() {
    return new Fd(this)
};

function Gd(a, b, c) {
    R(a);
    a.wb = c ? b ? decodeURIComponent(b) : "" : b;
    a.wb && (a.wb = a.wb.replace(/:$/, ""))
}

function Hd(a, b) {
    R(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.Wc = b
    } else a.Wc = null
}

function Id(a, b, c) {
    R(a);
    b instanceof Jd ? (a.Ea = b, a.Ea.ne(a.Z)) : (c || (b = Kd(b, Rd)), a.Ea = new Jd(b, 0, a.Z))
}

function Sd(a, b, c) {
    R(a);
    ka(c) || (c = [String(c)]);
    Td(a.Ea, b, c)
}

function R(a) {
    if (a.nh) throw Error("Tried to modify a read-only Uri");
}
g.ne = function(a) {
    this.Z = a;
    this.Ea && this.Ea.ne(a);
    return this
};

function Kd(a, b) {
    return m(a) ? encodeURI(a).replace(b, Ud) : null
}

function Ud(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ld = /[#\/\?@]/g,
    Pd = /[\#\?:]/g,
    Od = /[\#\?]/g,
    Rd = /[\#\?@]/g,
    Qd = /#/g;

function Jd(a, b, c) {
    this.V = a || null;
    this.Z = !!c
}

function Vd(a) {
    if (!a.p && (a.p = new Ad, a.s = 0, a.V))
        for (var b = a.V.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="),
                e = null,
                f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = ya(e);
            e = Wd(a, e);
            a.add(e, f ? ya(f) : "")
        }
}
g = Jd.prototype;
g.p = null;
g.s = null;
g.jf = function() {
    Vd(this);
    return this.s
};
g.add = function(a, b) {
    Vd(this);
    this.V = null;
    a = Wd(this, a);
    var c = this.p.get(a);
    c || this.p.set(a, c = []);
    c.push(b);
    this.s++;
    return this
};
g.remove = function(a) {
    Vd(this);
    a = Wd(this, a);
    return this.p.Fb(a) ? (this.V = null, this.s -= this.p.get(a).length, this.p.remove(a)) : !1
};
g.clear = function() {
    this.p = this.V = null;
    this.s = 0
};
g.Fb = function(a) {
    Vd(this);
    a = Wd(this, a);
    return this.p.Fb(a)
};
g.ma = function() {
    Vd(this);
    for (var a = this.p.na(), b = this.p.ma(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
g.na = function(a) {
    Vd(this);
    var b = [];
    if (m(a)) this.Fb(a) && (b = Wa(b, this.p.get(Wd(this, a))));
    else {
        a = this.p.na();
        for (var c = 0; c < a.length; c++) b = Wa(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    Vd(this);
    this.V = null;
    a = Wd(this, a);
    this.Fb(a) && (this.s -= this.p.get(a).length);
    this.p.set(a, [b]);
    this.s++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.na(a) : [];
    return 0 < c.length ? String(c[0]) : b
};

function Td(a, b, c) {
    a.remove(b);
    0 < c.length && (a.V = null, a.p.set(Wd(a, b), Xa(c)), a.s += c.length)
}
g.toString = function() {
    if (this.V) return this.V;
    if (!this.p) return "";
    for (var a = [], b = this.p.ma(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.na(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.V = a.join("&")
};
g.clone = function() {
    var a = new Jd;
    a.V = this.V;
    this.p && (a.p = this.p.clone(), a.s = this.s);
    return a
};

function Wd(a, b) {
    var c = String(b);
    a.Z && (c = c.toLowerCase());
    return c
}
g.ne = function(a) {
    a && !this.Z && (Vd(this), this.V = null, Ed(this.p, function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), Td(this, d, a))
    }, this));
    this.Z = a
};

function Xd() {
    return !0
}

function Yd(a) {
    return function() {
        throw a;
    }
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Zd(a, b) {
    this.ec = [];
    this.Qg = b || null;
    this.Pb = this.Kb = !1;
    this.$c = void 0;
    this.Wf = this.yg = this.yd = !1;
    this.jd = 0;
    this.Ca = null;
    this.zg = 0;
    this.Gd = null;
    if (Error.captureStackTrace) {
        var c = {
            stack: ""
        };
        Error.captureStackTrace(c, Zd);
        "string" == typeof c.stack && (this.Gd = c.stack.replace(/^[^\n]*\n/, ""))
    }
}
Zd.prototype.Ne = function(a, b) {
    this.yd = !1;
    $d(this, a, b)
};

function $d(a, b, c) {
    a.Kb = !0;
    a.$c = c;
    a.Pb = !b;
    ae(a)
}
Zd.prototype.Ya = function() {
    if (this.Kb) {
        if (!this.Wf) throw new be;
        this.Wf = !1
    }
};
Zd.prototype.Eb = function(a) {
    this.Ya();
    $d(this, !0, a)
};

function ce(a, b) {
    a.Gd && (na(b) && b.stack && /^[^\n]+(\n   [^\n]+)+/.test(b.stack)) && (b.stack = b.stack + "\nDEFERRED OPERATION:\n" + a.Gd)
}

function de(a) {
    return Ra(a.ec, function(a) {
        return ma(a[1])
    })
}

function ae(a) {
    a.jd && (a.Kb && de(a)) && (l.clearTimeout(a.jd), delete a.jd);
    a.Ca && (a.Ca.zg--, delete a.Ca);
    for (var b = a.$c, c = !1, d = !1; a.ec.length && !a.yd;) {
        var e = a.ec.shift(),
            f = e[0],
            h = e[1],
            e = e[2];
        if (f = a.Pb ? h : f) try {
            var k = f.call(e || a.Qg, b);
            ja(k) && (a.Pb = a.Pb && (k == b || k instanceof Error), a.$c = b = k);
            b instanceof Zd && (d = !0, a.yd = !0)
        } catch (q) {
            b = q, a.Pb = !0, ce(a, b), de(a) || (c = !0)
        }
    }
    a.$c = b;
    d && (d = b, k = n(a.Ne, a, !0), f = n(a.Ne, a, !1), d.ec.push([k, f, void 0]), d.Kb && ae(d), b.yg = !0);
    c && (a.jd = l.setTimeout(Yd(b), 0))
}

function be() {
    va.call(this)
}
p(be, va);
be.prototype.message = "Deferred has already fired";
be.prototype.name = "AlreadyCalledError";

function ee(a, b) {
    var c = b || {},
        d = c.document || document,
        e = document.createElement("SCRIPT"),
        f = {
            Vi: e,
            xb: void 0
        },
        h = new Zd(0, f),
        k = null,
        q = null != c.timeout ? c.timeout : 5E3;
    0 < q && (k = window.setTimeout(function() {
        fe(e, !0);
        var b = new ge(he, "Timeout reached for loading script " + a);
        h.Ya();
        ce(h, b);
        $d(h, !1, b)
    }, q), f.xb = k);
    e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (fe(e, c.Fg || !1, k), h.Eb(null))
    };
    e.onerror = function() {
        fe(e, !0, k);
        var b = new ge(ie, "Error while loading script " +
            a);
        h.Ya();
        ce(h, b);
        $d(h, !1, b)
    };
    Lb(e, {
        type: "text/javascript",
        charset: "UTF-8",
        src: a
    });
    je(d).appendChild(e);
    return h
}

function je(a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement
}

function fe(a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = fa;
    a.onerror = fa;
    a.onreadystatechange = fa;
    b && window.setTimeout(function() {
        a && a.parentNode && a.parentNode.removeChild(a)
    }, 0)
}
var ie = 0,
    he = 1;

function ge(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    va.call(this, c);
    this.code = a
}
p(ge, va);

function ke(a, b) {
    this.Ci = new Fd(a);
    this.Ag = b ? b : "callback";
    this.xb = 5E3
}
var le = 0;
ke.prototype.send = function(a, b, c, d) {
    a = a || null;
    d = d || "_" + (le++).toString(36) + ua().toString(36);
    l._callbacks_ || (l._callbacks_ = {});
    var e = this.Ci.clone();
    if (a)
        for (var f in a) a.hasOwnProperty && !a.hasOwnProperty(f) || Sd(e, f, a[f]);
    b && (l._callbacks_[d] = me(d, b), Sd(e, this.Ag, "_callbacks_." + d));
    b = ee(e.toString(), {
        timeout: this.xb,
        Fg: !0
    });
    b.ec.push([null, ne(d, a, c), void 0]);
    b.Kb && ae(b);
    return {
        pf: d,
        Ji: b
    }
};

function ne(a, b, c) {
    return function() {
        oe(a, !1);
        c && c(b)
    }
}

function me(a, b) {
    return function(c) {
        oe(a, !0);
        b.apply(void 0, arguments)
    }
}

function oe(a, b) {
    l._callbacks_[a] && (b ? delete l._callbacks_[a] : l._callbacks_[a] = fa)
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var pe = function() {
    function a(a, c) {
        if (!a) return [];
        if (a.constructor == Array) return a;
        if (!m(a)) return [a];
        if (m(c) && (c = B(c), !c)) return [];
        c = c || document;
        var e = c.ownerDocument || c.documentElement;
        kb = c.contentType && "application/xml" == c.contentType || ob && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (y ? e.xml : c.xmlVersion || e.xmlVersion);
        return (e = d(a)(c)) && e.Pc ? e : b(e)
    }

    function b(a) {
        if (a && a.Pc) return a;
        var b = [];
        if (!a || !a.length) return b;
        a[0] && b.push(a[0]);
        if (2 > a.length) return b;
        ia++;
        if (y && kb) {
            var c = ia +
                "";
            a[0].setAttribute("_zipIdx", c);
            for (var d = 1, e; e = a[d]; d++) a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c)
        } else if (y && a.Ig) try {
            for (d = 1; e = a[d]; d++) Bc(e) && b.push(e)
        } catch (f) {} else
            for (a[0] && (a[0]._zipIdx = ia), d = 1; e = a[d]; d++) a[d]._zipIdx != ia && b.push(e), e._zipIdx = ia;
        return b
    }

    function c(a, b) {
        if (!b) return 1;
        var c = wh(a);
        return b[c] ? 0 : b[c] = 1
    }

    function d(a, b) {
        if (of) {
            var c = pf[a];
            if (c && !b) return c
        }
        if (c = qf[a]) return c;
        var c = a.charAt(0),
            f = -1 == a.indexOf(" ");
        0 <= a.indexOf("#") && f && (b = !0);
        if (!of ||
            b || -1 != ">~+".indexOf(c) || y && -1 != a.indexOf(":") || rf && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|=")) {
            var h = a.split(/\s*,\s*/);
            return qf[a] = 2 > h.length ? e(a) : function(a) {
                for (var b = 0, c = [], d; d = h[b++];) c = c.concat(e(d)(a));
                return c
            }
        }
        var k = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
        return pf[a] = function(b) {
            try {
                if (9 != b.nodeType && !f) throw "";
                var c = b.querySelectorAll(k);
                y ? c.Ig = !0 : c.Pc = !0;
                return c
            } catch (e) {
                return d(a, !0)(b)
            }
        }
    }

    function e(a) {
        var b = sf(xa(a));
        if (1 == b.length) {
            var c = f(b[0]);
            return function(a) {
                if (a = c(a, [])) a.Pc = !0;
                return a
            }
        }
        return function(a) {
            a = Sb(a);
            for (var c, d, e = b.length, h, k, Md = 0; Md < e; Md++) {
                k = [];
                c = b[Md];
                d = a.length - 1;
                0 < d && (h = {}, k.Pc = !0);
                d = f(c);
                for (var nf = 0; c = a[nf]; nf++) d(c, k, h);
                if (!k.length) break;
                a = k
            }
            return k
        }
    }

    function f(a) {
        var b = tf[a.tb];
        if (b) return b;
        var c = a.rf,
            c = c ? c.Qc : "",
            d = t(a, {
                Za: 1
            }),
            e = "*" == a.T,
            f = document.getElementsByClassName;
        if (c) f = {
            Za: 1
        }, e && (f.T = 1), d = t(a, f), "+" == c ? b = q(d) : "~" == c ? b = k(d) : ">" == c && (b = h(d));
        else if (a.id) d = !a.xf && e ? Xd : t(a, {
            Za: 1,
            id: 1
        }), b = function(b,
            c) {
            var e;
            e = Hb(b);
            e = m(a.id) ? e.Hb.getElementById(a.id) : a.id;
            var f;
            if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
                for (f = e.parentNode; f && f != b;) f = f.parentNode;
                f = !!f
            }
            if (f) return Sb(e, c)
        };
        else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.ha.length && !rf) var d = t(a, {
                Za: 1,
                ha: 1,
                id: 1
            }),
            G = a.ha.join(" "),
            b = function(a, b) {
                for (var c = Sb(0, b), e, f = 0, h = a.getElementsByClassName(G); e = h[f++];) d(e, a) && c.push(e);
                return c
            };
        else e || a.xf ? (d = t(a, {
            Za: 1,
            T: 1,
            id: 1
        }), b = function(b, c) {
            for (var e = Sb(0, c), f, h = 0, k = b.getElementsByTagName(a.Vd()); f =
                k[h++];) d(f, b) && e.push(f);
            return e
        }) : b = function(b, c) {
            for (var d = Sb(0, c), e, f = 0, h = b.getElementsByTagName(a.Vd()); e = h[f++];) d.push(e);
            return d
        };
        return tf[a.tb] = b
    }

    function h(a) {
        a = a || Xd;
        return function(b, d, e) {
            for (var f = 0, h = b[uf]; b = h[f++];) Tb(b) && ((!e || c(b, e)) && a(b, f)) && d.push(b);
            return d
        }
    }

    function k(a) {
        return function(b, d, e) {
            for (b = b[Ub]; b;) {
                if (Tb(b)) {
                    if (e && !c(b, e)) break;
                    a(b) && d.push(b)
                }
                b = b[Ub]
            }
            return d
        }
    }

    function q(a) {
        return function(b, d, e) {
            for (; b = b[Ub];)
                if (!Cc || Bc(b)) {
                    e && !c(b, e) || !a(b) || d.push(b);
                    break
                }
            return d
        }
    }

    function t(a, b) {
        if (!a) return Xd;
        b = b || {};
        var c = null;
        b.Za || (c = lb(c, Bc));
        b.T || "*" != a.T && (c = lb(c, function(b) {
            return b && b.tagName == a.Vd()
        }));
        b.ha || s(a.ha, function(a, b) {
            var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
            c = lb(c, function(a) {
                return d.test(a.className)
            });
            c.count = b
        });
        b.Pa || s(a.Pa, function(a) {
            var b = a.name;
            Nd[b] && (c = lb(c, Nd[b](b, a.value)))
        });
        b.sc || s(a.sc, function(a) {
            var b, d = a.wd;
            a.type && vf[a.type] ? b = vf[a.type](d, a.fe) : d.length && (b = xh(d));
            b && (c = lb(c, b))
        });
        b.id || a.id && (c = lb(c, function(b) {
            return !!b && b.id ==
                a.id
        }));
        c || "default" in b || (c = Xd);
        return c
    }

    function G(a) {
        return M(a) % 2
    }

    function N(a) {
        return !(M(a) % 2)
    }

    function M(a) {
        var b = a.parentNode,
            c = 0,
            d = b[uf],
            e = a._i || -1,
            f = b._l || -1;
        if (!d) return -1;
        d = d.length;
        if (f == d && 0 <= e && 0 <= f) return e;
        b._l = d;
        e = -1;
        for (b = b.firstElementChild || b.firstChild; b; b = b[Ub]) Tb(b) && (b._i = ++c, a === b && (e = c));
        return e
    }

    function Dc(a) {
        for (; a = a[Ub];)
            if (Tb(a)) return !1;
        return !0
    }

    function Vb(a) {
        for (; a = a[yh];)
            if (Tb(a)) return !1;
        return !0
    }

    function mb(a, b) {
        return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor ||
            "" : "style" == b ? a.style.cssText || "" : (kb ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : ""
    }

    function Bc(a) {
        return 1 == a.nodeType
    }

    function lb(a, b) {
        return a ? b ? function() {
            return a.apply(window, arguments) && b.apply(window, arguments)
        } : a : b
    }

    function sf(a) {
        function b() {
            0 <= G && (D.id = c(G, J).replace(/\\/g, ""), G = -1);
            if (0 <= t) {
                var a = t == J ? null : c(t, J);
                0 > ">~+".indexOf(a) ? D.T = a : D.Qc = a;
                t = -1
            }
            0 <= q && (D.ha.push(c(q + 1, J).replace(/\\/g, "")), q = -1)
        }

        function c(b, d) {
            return xa(a.slice(b, d))
        }
        a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
        for (var d = [], e = -1, f = -1, h = -1, k = -1, q = -1, G = -1, t = -1, N = "", M = "", Vb, J = 0, ia = a.length, D = null, X = null; N = M, M = a.charAt(J), J < ia; J++) "\\" != N && (D || (Vb = J, D = {
            tb: null,
            Pa: [],
            sc: [],
            ha: [],
            T: null,
            Qc: null,
            id: null,
            Vd: function() {
                return kb ? this.Xh : this.T
            }
        }, t = J), 0 <= e ? "]" == M ? (X.wd ? X.fe = c(h || e + 1, J) : X.wd = c(e + 1, J), !(e = X.fe) || '"' != e.charAt(0) && "'" != e.charAt(0) || (X.fe = e.slice(1, -1)), D.sc.push(X), X = null, e = h = -1) : "=" == M && (h = 0 <= "|~^$*".indexOf(N) ? N : "", X.type = h + M, X.wd = c(e + 1, J - h.length), h = J + 1) : 0 <= f ? ")" == M && (0 <= k && (X.value = c(f + 1, J)), k = f = -1) : "#" == M ? (b(), G = J + 1) : "." == M ? (b(), q = J) : ":" == M ? (b(), k = J) : "[" == M ? (b(), e = J, X = {}) : "(" == M ? (0 <= k && (X = {
            name: c(k + 1, J),
            value: null
        }, D.Pa.push(X)), f = J) : " " == M && N != M && (b(), 0 <= k && D.Pa.push({
            name: c(k + 1, J)
        }), D.xf = D.Pa.length || D.sc.length || D.ha.length, D.Oi = D.tb = c(Vb, J), D.Xh = D.T = D.Qc ? null : D.T || "*", D.T && (D.T = D.T.toUpperCase()), d.length && d[d.length - 1].Qc && (D.rf = d.pop(), D.tb = D.rf.tb + " " + D.tb), d.push(D), D = null));
        return d
    }

    function Sb(a, b) {
        var c = b || [];
        a && c.push(a);
        return c
    }
    var rf = z && "BackCompat" == document.compatMode,
        uf =
        document.firstChild.children ? "children" : "childNodes",
        kb = !1,
        vf = {
            "*=": function(a, b) {
                return function(c) {
                    return 0 <= mb(c, a).indexOf(b)
                }
            },
            "^=": function(a, b) {
                return function(c) {
                    return 0 == mb(c, a).indexOf(b)
                }
            },
            "$=": function(a, b) {
                return function(c) {
                    c = " " + mb(c, a);
                    return c.lastIndexOf(b) == c.length - b.length
                }
            },
            "~=": function(a, b) {
                var c = " " + b + " ";
                return function(b) {
                    return 0 <= (" " + mb(b, a) + " ").indexOf(c)
                }
            },
            "|=": function(a, b) {
                b = " " + b;
                return function(c) {
                    c = " " + mb(c, a);
                    return c == b || 0 == c.indexOf(b + "-")
                }
            },
            "=": function(a,
                b) {
                return function(c) {
                    return mb(c, a) == b
                }
            }
        },
        Cc = "undefined" == typeof document.firstChild.nextElementSibling,
        Ub = Cc ? "nextSibling" : "nextElementSibling",
        yh = Cc ? "previousSibling" : "previousElementSibling",
        Tb = Cc ? Bc : Xd,
        Nd = {
            checked: function() {
                return function(a) {
                    return a.checked || a.attributes.checked
                }
            },
            "first-child": function() {
                return Vb
            },
            "last-child": function() {
                return Dc
            },
            "only-child": function() {
                return function(a) {
                    return Vb(a) && Dc(a) ? !0 : !1
                }
            },
            empty: function() {
                return function(a) {
                    var b = a.childNodes;
                    for (a = a.childNodes.length -
                        1; 0 <= a; a--) {
                        var c = b[a].nodeType;
                        if (1 === c || 3 == c) return !1
                    }
                    return !0
                }
            },
            contains: function(a, b) {
                var c = b.charAt(0);
                if ('"' == c || "'" == c) b = b.slice(1, -1);
                return function(a) {
                    return 0 <= a.innerHTML.indexOf(b)
                }
            },
            not: function(a, b) {
                var c = sf(b)[0],
                    d = {
                        Za: 1
                    };
                "*" != c.T && (d.T = 1);
                c.ha.length || (d.ha = 1);
                var e = t(c, d);
                return function(a) {
                    return !e(a)
                }
            },
            "nth-child": function(a, b) {
                if ("odd" == b) return G;
                if ("even" == b) return N;
                if (-1 != b.indexOf("n")) {
                    var c = b.split("n", 2),
                        d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1,
                        e = c[1] ? parseInt(c[1], 10) :
                        0,
                        f = 0,
                        h = -1;
                    0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
                    if (0 < d) return function(a) {
                        a = M(a);
                        return a >= f && (0 > h || a <= h) && a % d == e
                    };
                    b = e
                }
                var k = parseInt(b, 10);
                return function(a) {
                    return M(a) == k
                }
            }
        },
        xh = y ? function(a) {
            var b = a.toLowerCase();
            "class" == b && (a = "className");
            return function(c) {
                return kb ? c.getAttribute(a) : c[a] || c[b]
            }
        } : function(a) {
            return function(b) {
                return b && b.getAttribute && b.hasAttribute(a)
            }
        },
        tf = {},
        qf = {},
        pf = {},
        of = !!document.querySelectorAll && (!z || A("526")),
        ia = 0,
        wh = y ? function(a) {
            return kb ?
                a.getAttribute("_uid") || a.setAttribute("_uid", ++ia) || ia : a.uniqueID
        } : function(a) {
            return a._uid || (a._uid = ++ia)
        };
    a.Pa = Nd;
    return a
}();
da("goog.dom.query", pe);
da("goog.dom.query.pseudos", pe.Pa);
({}).Gi;

function qe(a, b, c) {
    this.v = a;
    this.a = E(re, this.v);
    this.Kd = E(se, this.v);
    this.Ch = E(te, this.v);
    this.Ic = E(ue, this.v);
    this.Cf = E(ve, this.v);
    this.Lf = E(we, this.v);
    this.Ff = E(xe, this.v);
    this.oc = b;
    this.Fe = c;
    this.kc = this.Pe = this.wa = null;
    (new Hammer(this.Lf)).on("tap", n(function(a) {
        a.stopPropagation();
        0 < this.wa && ye(this, this.wa - 1)
    }, this));
    (new Hammer(this.Ff)).on("tap", n(function(a) {
        a.stopPropagation();
        this.wa < this.kc - 1 && ye(this, this.wa + 1)
    }, this));
    O(this.Kd, "click", function(a) {
        a.preventDefault();
        a.stopPropagation()
    });
    (new Hammer(this.Kd)).on("tap",
        n(this.yi, this));
    (new Hammer(this.Ch)).on("tap", n(this.jh, this));
    this.Aa = new ElementVisibleController(this.a);
    this.Aa.on("enter", this.Sf, this);
    I.on("breakpoint", this.pa, this)
}
p(qe, L);
var re = "js-photo-stream-container",
    se = "js-photo-stream-desktop",
    ve = "js-photo-stream-mobile",
    te = "js-photo-stream-modal",
    ue = "js-photo-stream-full-size",
    we = "js-photo-stream-prev",
    xe = "js-photo-stream-next";
g = qe.prototype;
g.f = function() {
    I.off("breakpoint", this.pa);
    this.Aa.off(this.Sf);
    qe.d.f.call(this)
};
g.oa = function() {
    return 768 > window.innerWidth
};
g.yi = function(a) {
    (a = P(a.target, "moreDetailsURI")) && ze(this, a)
};
g.Sf = function() {
    null === this.wa && ye(this, 0)
};

function ze(a, b) {
    rd(a.v, "show-modal");
    var c = n(function(a) {
        this.Ic.src = a.url;
        this.Ic.style.width = a.width > a.height ? "90%" : 85 * (a.width / a.height) + "%";
        this.Ic.style.height = "auto"
    }, a);
    if (Modernizr.localstorage) {
        var d = sessionStorage.getItem("photosLargerSizes");
        if ((d = JSON.parse(d)) && d[b]) {
            c(d[b]);
            return
        }
    }(new ke(b + "&imgmax=1600")).send(null, n(function(a) {
        a = a.entry.media$group.media$content[0];
        if (Modernizr.localstorage) {
            var d = sessionStorage.getItem("photosLargerSizes");
            (d = JSON.parse(d)) || (d = {});
            d[b] = a;
            sessionStorage.setItem("photosLargerSizes",
                JSON.stringify(d))
        }
        c(a)
    }, a))
}
g.jh = function() {
    sd(this.v, "show-modal");
    this.Ic.src = "/events/io/images/dot.png"
};
g.pa = function(a) {
    "mobile" === a[0] && this.refresh()
};

function Ae(a) {
    var b = a.oa() ? 800 : 1152;
    return "https://picasaweb.google.com/data/feed/api/user/" + a.oc + "/albumid/" + a.Fe + "?alt=json&kind=photo&hl=pl&imgmax=" + b + "&max-results=5000&start-index=1"
}

function Ce(a, b, c, d) {
    if (!d && Modernizr.localstorage) {
        var e = +new Date;
        if ((d = sessionStorage.getItem("qaFeedSetupTime")) && 3E5 > e - d && (d = sessionStorage.getItem("photosFeedItems")) && (d = JSON.parse(d), d[b])) {
            a.kc = sessionStorage.getItem("photosFeedItemsTotal");
            c(d[b]);
            return
        }
    }
    var f = a.oa() ? 5 : 9;
    d = Ae(a);
    (new ke(d)).send(null, n(function(a) {
        var d = u(a.feed.entry, this.Zh, this);
        this.kc = a.feed.openSearch$totalResults.$t;
        a = {};
        for (var d = d.sort(function(a, b) {
            var c = moment(a.sb).unix();
            return moment(b.sb).unix() - c
        }), q = Math.ceil(d.length /
            f) - 1, t = 0; t <= q; t++) a[t] = Za(d, t * f, t * f + f);
        Modernizr.localstorage && (sessionStorage.setItem("photosFeedSetupTime", e), sessionStorage.setItem("photosFeedItemsTotal", this.kc), sessionStorage.setItem("photosFeedItems", JSON.stringify(a)));
        c(a[b])
    }, a))
}
g.Zh = function(a) {
    var b = a.media$group.media$content[0];
    return {
        sb: a.published.$t,
        src: b.url,
        width: b.width,
        height: b.height,
        link: "https://plus.google.com/photos/" + this.oc + "/albums/" + this.Fe + "/" + a.gphoto$id.$t,
        Dh: a.id.$t
    }
};

function ye(a, b, c) {
    a.wa = b;
    Ce(a, a.wa, n(function(a) {
        nd(a, this.Pe, [], []) || (De(this, b, a), this.Pe = a)
    }, a), c)
}
g.refresh = function(a) {
    null === this.wa || ye(this, 0, a)
};

function De(a, b, c) {
    Q(a.Lf, "disabled", 0 >= b);
    var d = a.oa() ? 5 : 9,
        d = Math.ceil(a.kc / d);
    Q(a.Ff, "disabled", b >= d - 1);
    d = a.oa() ? a.Cf : a.Kd;
    d = C("js-stagger-image", d);
    d = Pa(d, function(a) {
        return "1" === a.style.opacity
    });
    a = n(function() {
        sd(this.v, "page0");
        sd(this.v, "page1");
        sd(this.v, "page2");
        var a = b % 3;
        rd(this.v, "page" + a);
        a = this.oa() ? C("js-stagger-image", this.Cf) : pe(".photo-stream__set.-page" + a + " .js-stagger-image");
        Ee(this, c, a)
    }, a);
    0 < d.length ? Fe(d, a) : setTimeout(a, 50)
}

function Ee(a, b, c) {
    var d = [];
    s(c, function(a, c) {
        var e = b[c];
        a.style.opacity = 0;
        e && d.push(c)
    });
    var e = d.length,
        f = Pa(c, function(a, b) {
            return -1 !== Oa(d, b)
        });
    s(d, function(a) {
        var d = c[a],
            q = b[a];
        a = new Image;
        a.onload = n(function() {
            e--;
            var a = q.Dh;
            d.dataset ? d.dataset.moreDetailsURI = a : d.setAttribute("data-" + "moreDetailsURI".replace(/([A-Z])/g, "-$1").toLowerCase(), a);
            d.href = q.link;
            d.style.backgroundImage = "url(" + q.src + ")";
            0 >= e && setTimeout(n(this.ui, this, f), 100)
        }, this);
        a.src = q.src
    }, a)
}

function Fe(a, b) {
    TweenMax.staggerFromTo(a, 0.2, {
        opacity: 1
    }, {
        opacity: 0,
        ease: Linear.easeNone,
        onComplete: function() {
            TweenMax.set(this.target, {
                opacity: 0
            })
        }
    }, 0.05, b)
}
g.ui = function(a, b) {
    TweenMax.staggerFromTo(a, 0.2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.easeNone
    }, 0.05, b)
};

function Ge(a, b, c, d) {
    this.zb = a;
    this.bc = b;
    this.pb = c;
    this.ob = d;
    this.Lb = !0
}
Ge.prototype.Ba = function() {
    window.mainPlayer = this.j = new YT.Player("video-player", {
        title: "Google I/O Live",
        height: "390",
        width: "640",
        playerVars: {
            autohide: 1,
            autoplay: 1,
            loop: 1,
            controls: 2,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            theme: "dark",
            playsinline: 1,
            html5: 1,
            wmode: "transparent"
        },
        videoId: this.zb,
        events: {
            onReady: n(this.Rh, this),
            onStateChange: n(this.Uh, this)
        }
    });
    this.Rb = this.j.getIframe()
};
Ge.prototype.Rh = function() {
    TweenMax.set(this.Rb, {
        opacity: pc ? 1 : 0
    })
};
Ge.prototype.Uh = function(a) {
    a = a.data;
    this.Lb && TweenMax.set(this.Rb, {
        opacity: pc ? 1 : 0
    });
    a === YT.PlayerState.PAUSED ? "function" === typeof this.pb && this.pb() : a === YT.PlayerState.PLAYING ? (TweenMax.to(this.Rb, 0.2, {
        opacity: 1
    }), this.j.setVolume(100), "function" === typeof this.bc && this.Lb && this.bc(), this.Lb && (this.Lb = !1)) : a === YT.PlayerState.ENDED && "function" === typeof this.ob && this.ob()
};

function He(a, b) {
    a.zb = b;
    a.j.loadVideoById(a.zb, 0, "large")
};

function Ie(a) {
    Pc.call(this, "navigate");
    this.fd = a
}
p(Ie, Pc);

function S() {
    L.call(this);
    this.la = new Hc(this);
    this.sg = this
}
p(S, L);
S.prototype[zc] = !0;
g = S.prototype;
g.ie = null;
g.addEventListener = function(a, b, c, d) {
    O(this, a, b, c, d)
};
g.removeEventListener = function(a, b, c, d) {
    $c(this, a, b, c, d)
};
g.dispatchEvent = function(a) {
    var b, c = this.ie;
    if (c)
        for (b = []; c; c = c.ie) b.push(c);
    var c = this.sg,
        d = a.type || a;
    if (m(a)) a = new Pc(a, c);
    else if (a instanceof Pc) a.target = a.target || c;
    else {
        var e = a;
        a = new Pc(d, c);
        Na(a, e)
    }
    var e = !0,
        f;
    if (b)
        for (var h = b.length - 1; !a.Da && 0 <= h; h--) f = a.currentTarget = b[h], e = Je(f, d, !0, a) && e;
    a.Da || (f = a.currentTarget = c, e = Je(f, d, !0, a) && e, a.Da || (e = Je(f, d, !1, a) && e));
    if (b)
        for (h = 0; !a.Da && h < b.length; h++) f = a.currentTarget = b[h], e = Je(f, d, !1, a) && e;
    return e
};
g.f = function() {
    S.d.f.call(this);
    this.la && this.la.Zc(void 0);
    this.ie = null
};
g.ba = function(a, b, c, d) {
    return this.la.add(a, b, !1, c, d)
};
g.Oc = function(a, b, c, d) {
    return this.la.add(a, b, !0, c, d)
};
g.ve = function(a, b, c, d) {
    return this.la.remove(a, b, c, d)
};

function Je(a, b, c, d) {
    b = a.la.K[b];
    if (!b) return !0;
    b = Xa(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.vb && h.capture == c) {
            var k = h.listener,
                q = h.Jc || h.src;
            h.wc && Jc(a.la, h);
            e = !1 !== k.call(q, d) && e
        }
    }
    return e && !1 != d.Rf
}
g.Ob = function(a, b, c, d) {
    return this.la.Ob(a, b, c, d)
};

function Ke(a, b) {
    S.call(this);
    this.l = a || window;
    this.gd = b || null;
    O(this.l, "popstate", this.ac, !1, this);
    O(this.l, "hashchange", this.ac, !1, this)
}
p(Ke, S);
g = Ke.prototype;
g.ka = !1;
g.nc = !0;
g.cc = "/";
g.Fa = function(a) {
    a != this.ka && (this.ka = a) && this.dispatchEvent(new Ie(this.W()))
};
g.W = function() {
    if (this.nc) {
        var a = this.l.location.href,
            b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }
    return this.gd ? this.gd.Pi(this.cc, this.l.location) : this.l.location.pathname.substr(this.cc.length)
};
g.Ga = function(a, b) {
    a != this.W() && (this.l.history.pushState(null, b || this.l.document.title || "", Le(this, a)), this.dispatchEvent(new Ie(a)))
};
g.me = function(a, b) {
    this.l.history.replaceState(null, b || this.l.document.title || "", Le(this, a));
    this.dispatchEvent(new Ie(a))
};
g.f = function() {
    $c(this.l, "popstate", this.ac, !1, this);
    this.nc && $c(this.l, "hashchange", this.ac, !1, this)
};

function Me(a) {
    !1 != a.nc && ($c(a.l, "hashchange", a.ac, !1, a), a.nc = !1)
}

function Le(a, b) {
    return a.nc ? "#" + b : a.gd ? a.gd.Hi(b, a.cc, a.l.location) : a.cc + b + a.l.location.search
}
g.ac = function() {
    this.ka && this.dispatchEvent(new Ie(this.W()))
};

function Ne(a, b) {
    S.call(this);
    this.Sb = a || 1;
    this.yb = b || l;
    this.zd = n(this.zi, this);
    this.ee = ua()
}
p(Ne, S);
g = Ne.prototype;
g.enabled = !1;
g.t = null;
g.setInterval = function(a) {
    this.Sb = a;
    this.t && this.enabled ? (this.stop(), this.start()) : this.t && this.stop()
};
g.zi = function() {
    if (this.enabled) {
        var a = ua() - this.ee;
        0 < a && a < 0.8 * this.Sb ? this.t = this.yb.setTimeout(this.zd, this.Sb - a) : (this.t && (this.yb.clearTimeout(this.t), this.t = null), this.dispatchEvent(Oe), this.enabled && (this.t = this.yb.setTimeout(this.zd, this.Sb), this.ee = ua()))
    }
};
g.start = function() {
    this.enabled = !0;
    this.t || (this.t = this.yb.setTimeout(this.zd, this.Sb), this.ee = ua())
};
g.stop = function() {
    this.enabled = !1;
    this.t && (this.yb.clearTimeout(this.t), this.t = null)
};
g.f = function() {
    Ne.d.f.call(this);
    this.stop();
    delete this.yb
};
var Oe = "tick";

function Pe(a, b, c) {
    if (ma(a)) c && (a = n(a, c));
    else if (a && "function" == typeof a.handleEvent) a = n(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
};

function Qe(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
};

function Re() {}
Re.prototype.vc = null;
var Se;

function Te() {}
p(Te, Re);

function Ue(a) {
    return (a = Ve(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function We(a) {
    var b = {};
    Ve(a) && (b[0] = !0, b[1] = !0);
    return b
}

function Ve(a) {
    if (!a.qf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.qf = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.qf
}
Se = new Te;

function Xe(a) {
    return Ye(a || arguments.callee.caller, [])
}

function Ye(a, b) {
    var c = [];
    if (Ua(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(Ze(a) + "(");
        for (var d = a.arguments, e = 0; e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = Ze(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(Ye(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ?
        c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}

function Ze(a) {
    if ($e[a]) return $e[a];
    a = String(a);
    if (!$e[a]) {
        var b = /function ([^\(]+)/.exec(a);
        $e[a] = b ? b[1] : "[Anonymous]"
    }
    return $e[a]
}
var $e = {};

function af(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
}
af.prototype.ni = 0;
af.prototype.$e = null;
af.prototype.Ze = null;
var bf = 0;
af.prototype.reset = function(a, b, c, d, e) {
    this.ni = "number" == typeof e ? e : bf++;
    d || ua();
    this.Wb = a;
    this.Eh = b;
    delete this.$e;
    delete this.Ze
};
af.prototype.Tf = function(a) {
    this.Wb = a
};

function cf(a) {
    this.L = a
}
cf.prototype.Ca = null;
cf.prototype.Wb = null;
cf.prototype.Ed = null;
cf.prototype.lf = null;

function df(a, b) {
    this.name = a;
    this.value = b
}
df.prototype.toString = ba("name");
var ef = new df("SEVERE", 1E3),
    ff = new df("WARNING", 900),
    gf = new df("CONFIG", 700),
    hf = new df("FINE", 500);
g = cf.prototype;
g.getParent = ba("Ca");
g.hf = function() {
    this.Ed || (this.Ed = {});
    return this.Ed
};
g.Tf = function(a) {
    this.Wb = a
};

function jf(a) {
    if (a.Wb) return a.Wb;
    if (a.Ca) return jf(a.Ca);
    Ia("Root logger has no level set.");
    return null
}
g.log = function(a, b, c) {
    if (a.value >= jf(this).value)
        for (a = this.fh(a, b, c), b = "log:" + a.Eh, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this; b;) {
            c = b;
            var d = a;
            if (c.lf)
                for (var e = 0, f = void 0; f = c.lf[e]; e++) f(d);
            b = b.getParent()
        }
};
g.fh = function(a, b, c) {
    var d = new af(a, String(b), this.L);
    if (c) {
        d.$e = c;
        var e;
        var f = arguments.callee.caller;
        try {
            var h;
            var k = ea("window.location.href");
            if (m(c)) h = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: k,
                stack: "Not available"
            };
            else {
                var q, t, G = !1;
                try {
                    q = c.lineNumber || c.Li || "Not available"
                } catch (N) {
                    q = "Not available", G = !0
                }
                try {
                    t = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k
                } catch (M) {
                    t = "Not available", G = !0
                }
                h = !G && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                    message: c.message ||
                        "Not available",
                    name: c.name || "UnknownError",
                    lineNumber: q,
                    fileName: t,
                    stack: c.stack || "Not available"
                }
            }
            e = "Message: " + za(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + za(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(Xe(f) + "-> ")
        } catch (Dc) {
            e = "Exception trying to expose exception! You win, we lose. " + Dc
        }
        d.Ze = e
    }
    return d
};
var kf = {},
    lf = null;

function mf(a) {
    lf || (lf = new cf(""), kf[""] = lf, lf.Tf(gf));
    var b;
    if (!(b = kf[a])) {
        b = new cf(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = mf(a.substr(0, c));
        c.hf()[d] = b;
        b.Ca = c;
        kf[a] = b
    }
    return b
};

function wf(a, b) {
    a && a.log(hf, b, void 0)
};

function xf(a) {
    S.call(this);
    this.headers = new Ad;
    this.Ab = a || null;
    this.ua = !1;
    this.pd = this.e = null;
    this.Vb = this.vf = this.Nc = "";
    this.Ma = this.Zd = this.Lc = this.Qd = !1;
    this.ic = 0;
    this.ed = null;
    this.Qf = yf;
    this.kd = this.Ei = !1
}
p(xf, S);
var yf = "";
xf.prototype.X = mf("goog.net.XhrIo");
var zf = /^https?$/i,
    Af = ["POST", "PUT"],
    Bf = [];

function Cf(a, b, c, d) {
    var e = new xf;
    Bf.push(e);
    b && e.ba("complete", b);
    e.Oc("ready", e.Eg);
    e.send(a, c, d, void 0)
}
g = xf.prototype;
g.Eg = function() {
    this.xa();
    Va(Bf, this)
};
g.send = function(a, b, c, d) {
    if (this.e) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Nc + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Nc = a;
    this.Vb = "";
    this.vf = b;
    this.Qd = !1;
    this.ua = !0;
    this.e = this.Ab ? Ue(this.Ab) : Ue(Se);
    this.pd = this.Ab ? this.Ab.vc || (this.Ab.vc = We(this.Ab)) : Se.vc || (Se.vc = We(Se));
    this.e.onreadystatechange = n(this.Gf, this);
    try {
        wf(this.X, Df(this, "Opening Xhr")), this.Zd = !0, this.e.open(b, a, !0), this.Zd = !1
    } catch (e) {
        wf(this.X, Df(this, "Error opening Xhr: " + e.message));
        Ef(this,
            e);
        return
    }
    a = c || "";
    var f = this.headers.clone();
    d && Ed(d, function(a, b) {
        f.set(b, a)
    });
    d = Ta(f.ma(), Ff);
    c = l.FormData && a instanceof l.FormData;
    !Ua(Af, b) || (d || c) || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Ed(f, function(a, b) {
        this.e.setRequestHeader(b, a)
    }, this);
    this.Qf && (this.e.responseType = this.Qf);
    "withCredentials" in this.e && (this.e.withCredentials = this.Ei);
    try {
        Gf(this), 0 < this.ic && (this.kd = y && A(9) && "number" == typeof this.e.timeout && ja(this.e.ontimeout), wf(this.X, Df(this, "Will abort after " +
            this.ic + "ms if incomplete, xhr2 " + this.kd)), this.kd ? (this.e.timeout = this.ic, this.e.ontimeout = n(this.xb, this)) : this.ed = Pe(this.xb, this.ic, this)), wf(this.X, Df(this, "Sending request")), this.Lc = !0, this.e.send(a), this.Lc = !1
    } catch (h) {
        wf(this.X, Df(this, "Send error: " + h.message)), Ef(this, h)
    }
};

function Ff(a) {
    return "content-type" == a.toLowerCase()
}
g.xb = function() {
    "undefined" != typeof ca && this.e && (this.Vb = "Timed out after " + this.ic + "ms, aborting", wf(this.X, Df(this, this.Vb)), this.dispatchEvent("timeout"), this.abort(8))
};

function Ef(a, b) {
    a.ua = !1;
    a.e && (a.Ma = !0, a.e.abort(), a.Ma = !1);
    a.Vb = b;
    Hf(a);
    If(a)
}

function Hf(a) {
    a.Qd || (a.Qd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
g.abort = function() {
    this.e && this.ua && (wf(this.X, Df(this, "Aborting")), this.ua = !1, this.Ma = !0, this.e.abort(), this.Ma = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), If(this))
};
g.f = function() {
    this.e && (this.ua && (this.ua = !1, this.Ma = !0, this.e.abort(), this.Ma = !1), If(this, !0));
    xf.d.f.call(this)
};
g.Gf = function() {
    this.Nd || (this.Zd || this.Lc || this.Ma ? Jf(this) : this.Sh())
};
g.Sh = function() {
    Jf(this)
};

function Jf(a) {
    if (a.ua && "undefined" != typeof ca)
        if (a.pd[1] && 4 == Kf(a) && 2 == Lf(a)) wf(a.X, Df(a, "Local request error detected and ignored"));
        else if (a.Lc && 4 == Kf(a)) Pe(a.Gf, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == Kf(a)) {
        wf(a.X, Df(a, "Request complete"));
        a.ua = !1;
        try {
            if (Mf(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                var b;
                try {
                    b = 2 < Kf(a) ? a.e.statusText : ""
                } catch (c) {
                    wf(a.X, "Can not get status: " + c.message), b = ""
                }
                a.Vb = b + " [" + Lf(a) + "]";
                Hf(a)
            }
        } finally {
            If(a)
        }
    }
}

function If(a, b) {
    if (a.e) {
        Gf(a);
        var c = a.e,
            d = a.pd[0] ? fa : null;
        a.e = null;
        a.pd = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            (c = a.X) && c.log(ef, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
    }
}

function Gf(a) {
    a.e && a.kd && (a.e.ontimeout = null);
    "number" == typeof a.ed && (l.clearTimeout(a.ed), a.ed = null)
}

function Mf(a) {
    var b = Lf(a),
        c;
    a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break a;
        default:
            c = !1
    }
    if (!c) {
        if (b = 0 === b) a = ud(String(a.Nc))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !zf.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}

function Kf(a) {
    return a.e ? a.e.readyState : 0
}

function Lf(a) {
    try {
        return 2 < Kf(a) ? a.e.status : -1
    } catch (b) {
        return (a = a.X) && a.log(ff, "Can not get status: " + b.message, void 0), -1
    }
}

function Nf(a) {
    if (a.e) return Qe(a.e.responseText)
}
g.getAllResponseHeaders = function() {
    return this.e && 4 == Kf(this) ? this.e.getAllResponseHeaders() : ""
};

function Of(a) {
    var b = {};
    a = a.getAllResponseHeaders().split("\r\n");
    for (var c = 0; c < a.length; c++)
        if (!/^[\s\xa0]*$/.test(a[c])) {
            var d;
            d = 2;
            for (var e = a[c].split(": "), f = []; 0 < d && e.length;) f.push(e.shift()), d--;
            e.length && f.push(e.join(": "));
            d = f;
            b[d[0]] = b[d[0]] ? b[d[0]] + (", " + d[1]) : d[1]
        }
    return b
}

function Df(a, b) {
    return b + " [" + a.vf + " " + a.Nc + " " + Lf(a) + "]"
};

function Pf(a, b) {
    this.pf = a;
    this.xi = E("js-submit-rating", b);
    this.bi = E("js-rating-questions-holder", b);
    this.Jg = E("js-rating-comments", b);
    this.ei = E("js-rating-submitted", b);
    this.ci = C("js-rating-question", b);
    this.di = C("js-rating-circle", b);
    s(this.di, n(function(a) {
        (new Hammer(a)).on("tap", this.oi)
    }, this));
    (new Hammer(this.xi)).on("tap", n(this.mi, this))
}
Pf.prototype.oi = function(a) {
    var b = bc(a.target, "js-ratings-holder"),
        b = C("js-rating-circle", b);
    s(b, function(a) {
        w(a, "active")
    });
    v(a.target, "active")
};
Pf.prototype.mi = function() {
    var a = new Jd;
    a.add("freeform", this.Jg.value || "");
    var b = !1;
    s(this.ci, function(c) {
        var d = E("js-rating-circle.active", c);
        c.getAttribute("data-type") && (d ? a.add(c.getAttribute("data-type"), d.getAttribute("data-rating")) : (a.add(c.getAttribute("data-type"), 1), b = !0))
    });
    b || (v(this.bi, "-hide"), w(this.ei, "-hide"), Cf("/events/io/schedule/session/" + this.pf + "/rate", function(a) {
        console.log(a)
    }, "POST", a.toString()), E("js-details").scrollTop = 0)
};

function Qf(a, b, c) {
    var d = this;
    this.Xb = b;
    this.Ta = a;
    this.k = c;
    this.ke = !1;
    this.mb = document.body;
    this.aa = C("js-event-card");
    this.o = E("js-details");
    this.Te = E("js-details-card");
    this.Ue = E("js-scrim-dismiss", this.o);
    this.Ec = this.Se = this.Ve = null;
    this.Ha = C("js-details-iframe", this.o);
    this.Cd = null;
    this.Jd = E("js-tabs-holder");
    this.Cc = C("js-schedule-tab");
    this.ki = E("js-scrim-dismiss-main");
    this.Kf = C("js-schedule-pin");
    this.Mc = !0;
    "undefined" !== typeof initialSessionID && (w(this.o, "-hide"), v(this.mb, "-overflow-hidden"),
        this.Mc = !0, this.Ec = initialSessionID, Rf(this, initialSessionID));
    s(this.Kf, this.De, this);
    if (this.Jd)(new Hammer(this.Jd)).on("tap", function() {
        db(d.Jd, "active")
    });
    s(this.Cc, function(a) {
        (new Hammer(a)).on("tap", function(b) {
            b.preventDefault();
            b.gesture.preventDefault();
            b = E("js-tabs-content.-" + a.getAttribute("data-tab-target"));
            window.scrollTo(0, kc(b).y - 80);
            s(d.Cc, function(a) {
                w(a, "tab-is-active")
            });
            v(a, "tab-is-active");
            Sf(qc);
            qc.xc()
        })
    });
    this.Cc.length && v(this.Cc[0], "tab-is-active");
    (new Hammer(this.ki)).on("tap",
        function(a) {
            x(a.target, "js-scrim-dismiss-main") && (v(d.o, "-hide"), s(d.Ha, function(a) {
                a.setAttribute("src", "")
            }), w(d.mb, "-overflow-hidden"), d.Xb && d.m.Ga(""), d.Se = null)
        });
    try {
        this.Xb && (this.m = new Ke, O(this.m, "navigate", this.$b, !1, this), Me(this.m), this.m.cc = "/events/io" + this.Xb, this.m.Fa(!0)), s(this.aa, this.Ce, this), (new Hammer(this.Ue)).on("tap", function(a) {
            a.target === d.Ue && d.m.Ga("")
        })
    } catch (e) {}
    d.za = O(window, window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize",
        n(this.onResize, this));
    O(document.body, "loadSessionDetails", function(a) {
        Rf(this, a.target)
    }, !1, this)
}
Qf.prototype.onResize = function() {
    this.If && this.If.refresh()
};
Qf.prototype.$b = function(a) {
    "" === a.fd ? (this.ke && (v(this.o, "-hide"), s(this.Ha, function(a) {
        a.setAttribute("src", "")
    }), s(this.Ha, function(a) {
        a.setAttribute("src", "")
    }), w(this.mb, "-overflow-hidden"), this.ke = !1), this.Mc = !1) : (a = a.fd.split("/"), this.Ec = a = a[a.length - 1], Rf(this, a))
};

function Rf(a, b) {
    Cf("/events/io/schedule/session/" + b + "?format=json", function(c) {
        var d = c.target;
        c = Nf(d);
        d = Of(d).Date || Of(d).date;
        d = moment(d);
        c.de = d.isAfter(c.localized_start);
        var e = [];
        s(c.speakers, function(a) {
            e.push(a.firstname + " " + a.lastname)
        });
        c.id = b;
        c.ub = c.related_videos;
        c.Wa = c.video_id;
        c.dc = e.join(", ");
        c.I = c.speakers;
        c.time = c.pretty_date;
        c.title.toLowerCase().match("keynote") && (c.time = c.time.split("-")[0]);
        c.ji = a.k ? a.k.fc && a.k.fc.starred_sessions ? -1 === Oa(Tf(a.k), b) ? !1 : !0 : !1 : !1;
        var f = null;
        s(c.categories,
            function(a) {
                "distribute" === a.slug ? f = "Distribute" : "develop" === a.slug ? f = "Develop" : "design" === a.slug && (f = "Design")
            });
        c.room && (c.ad = c.room.name);
        c.A = f;
        c.Ub = a.Mc;
        this.Mc = !1;
        Uf(a, c)
    })
}

function Vf(a, b) {
    b.starred_sessions && s(a.aa, function(a) {
        -1 !== Oa(b.starred_sessions, a.getAttribute("data-id")) && v(a, "saved")
    })
}
Qf.prototype.Ce = function(a) {
    var b = this;
    O(a, "click", function(a) {
        a.preventDefault();
        a.stopPropagation()
    });
    x(a, "-live-streaming") && w(E("js-video", a), "-hide");
    (new Hammer(a)).on("tap", function(c) {
        c.preventDefault();
        c.stopPropagation();
        x(c.target, "js-schedule-pin") || (b.Xb ? (c = a.getAttribute("href"), b.m.Ga(c.split(b.Xb.substr(1))[1])) : (c = a.getAttribute("data-session-id"), b.Ec = c, Rf(b, c)))
    })
};

function Uf(a, b) {
    w(a.o, "-hide");
    v(a.mb, "-overflow-hidden");
    var c = a.Ta(b).content;
    Yb(Rb(c), a.Te);
    a.Te = E("js-details-card");
    a.Ve = E("js-details-card", a.o);
    a.Ha = C("js-details-iframe", a.o);
    a.Cd = E("js-cancel-youtube", a.o);
    if (a.Cd)(new Hammer(a.Cd)).on("tap", function() {
        setTimeout(function() {
            s(a.Ha, function(a) {
                a.setAttribute("src", "")
            })
        }, 400)
    });
    c = C("js-related-video", a.o);
    s(c, a.Ce, a);
    (c = C("js-scrim-dismiss", a.Ve)) && s(c, function(b) {
        (new Hammer(b)).on("tap", function() {
            a.o && (v(a.o, "-hide"), s(a.Ha, function(a) {
                a.setAttribute("src",
                    "")
            }));
            a.mb && w(a.mb, "-overflow-hidden");
            a.m && a.m.Ga("");
            a.Se = null
        })
    });
    a.De(E("js-details-pin", a.o));
    (c = C("js-play-content", a.o)) && s(c, function(b) {
        (new Hammer(b)).on("tap", function() {
            s(a.Ha, function(a) {
                a.setAttribute("src", b.getAttribute("data-youtube-src"))
            })
        })
    });
    a.onResize();
    c = E("js-paging", a.o);
    a.If = new Wf(c);
    (c = E("js-rating", a.o)) && new Pf(a.Ec, c);
    a.onResize();
    a.o.scrollTop = 0;
    a.ke = !0
}
Qf.prototype.De = function(a) {
    var b = this;
    if (a)(new Hammer(a)).on("tap", function(c) {
        c.preventDefault();
        c.gesture.preventDefault();
        b.k && (b.k.pe ? (s(b.Kf, function(b) {
            b.getAttribute("data-id") === a.getAttribute("data-id") && db(bc(b, "event"), "saved")
        }), c = a.getAttribute("data-id"), db(a, "-saved"), b.k.ag(c)) : Xf(b.k))
    })
};

function Yf() {
    S.call(this);
    this.m = new Zf;
    O(this.m, "navigate", this.$b, !1, this);
    this.m.Fa(!0);
    this.ae();
    this.Bb = !1;
    if (this.Tc = E($f)) this.qb = new qe(this.Tc, ag, bg);
    O(window, "load", function() {
        this.Qa = new Qf(cg)
    }, !1, this);
    var a = C("js-card-expand");
    s(a, yc);
    setInterval(n(this.le, this), 6E5);
    (this.ig = E("js-video")) && TweenMax.set(this.ig, {
        opacity: 0
    });
    this.xe = E("js-close-player");
    TweenMax.set(this.xe, {
        autoAlpha: 0
    })
}
p(Yf, S);
g = Yf.prototype;
g.$b = function(a) {
    "" !== a.fd ? (this.zb = a.fd, dg(this)) : this.rb && (this.H.j.stopVideo(), this.ob())
};
g.bc = function() {
    "" === this.m.W() && this.m.me(this.zb);
    this.H.j.playVideoAt(0);
    TweenMax.set(this.xe, {
        autoAlpha: 1
    });
    TweenMax.to(this.H.Rb, 0.3, {
        opacity: 1,
        ease: Expo.easeOut
    })
};
g.ob = function() {
    this.H.Lb = !0;
    "" !== this.m.W() && this.m.me("");
    TweenMax.set(this.xe, {
        autoAlpha: 0
    });
    TweenMax.to(this.H.Rb, 0.3, {
        opacity: 0,
        ease: Expo.easeOut
    })
};
g.pb = function() {
    if (rc || pc) this.m.Ga(""), this.ob()
};

function dg(a) {
    a.rb ? a.bc() : (a.H = new Ge(a.zb, n(a.bc, a), n(a.pb, a), n(a.ob, a)), a.rb = !0, a.Bb ? a.H.Ba() : a.ba("onYouTubeIframeAPIReady", function() {
        this.H.Ba()
    }, !1, a))
}
g.ae = function() {
    var a = document.createElement("script");
    a.src = "//www.youtube.com/iframe_api";
    Xb(a);
    window.onYouTubeIframeAPIReady = n(this.Ba, this)
};
g.Ba = function() {
    this.Bb = !0;
    this.dispatchEvent(new Pc("onYouTubeIframeAPIReady"))
};
var ag = "111395306401981598462",
    bg = "6029456067262589905",
    $f = "js-photo-stream";
Yf.prototype.f = function() {
    Oc(this.qb);
    this.qb = null;
    Yf.d.f.call(this)
};
Yf.prototype.le = function() {
    this.qb.refresh()
};

function T(a) {
    this.md = !1;
    this.va = a;
    this.setData(null);
    this.i()
}
g = T.prototype;
g.ya = function() {
    return this.va.getData()
};
g.setData = function(a) {
    nd(this.c, a, [], []) || (this.c = a, this.ja())
};
g.show = function() {
    this.md = !0
};
g.i = function() {
    this.md = !1
};
g.ja = aa();
var eg = {
        Si: !0
    },
    fg = {
        Ui: !0
    },
    gg = {
        Ti: !0
    };

function U() {
    throw Error("Do not instantiate directly");
}
U.prototype.toString = ba("content");

function hg(a, b, c) {
    a.innerHTML = ig(b(c || jg, void 0, void 0))
}

function ig(a) {
    if (!na(a)) return String(a);
    if (a instanceof U) {
        if (a.Y === eg) return a.content;
        if (a.Y === gg) return za(a.content)
    }
    Ia("Soy template output is unsafe for use as HTML: " + a);
    return "zSoyz"
}
var jg = {};
y && A(8);

function kg() {
    U.call(this)
}
p(kg, U);
kg.prototype.Y = eg;

function lg() {
    U.call(this)
}
p(lg, U);
lg.prototype.Y = {
    ii: !0
};

function mg() {
    U.call(this)
}
p(mg, U);
mg.prototype.Y = {
    ii: !0
};

function ng() {
    U.call(this)
}
p(ng, U);
ng.prototype.Y = fg;

function og() {
    U.call(this)
}
p(og, U);
og.prototype.Y = {
    Ri: !0
};

function pg() {
    U.call(this)
}
p(pg, U);
pg.prototype.Y = {
    Qi: !0
};

function qg(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a) {
        var d = new b;
        d.content = String(a);
        return d
    }
}
var V = qg(kg);
qg(lg);
qg(mg);
qg(ng);
qg(og);
qg(pg);

function W(a) {
    return a && a.Y && a.Y === eg ? a.content : String(a).replace(rg, sg)
}

function Y(a) {
    a && a.Y && a.Y === eg ? (a = String(a.content).replace(tg, "").replace(ug, "&lt;"), a = String(a).replace(vg, sg)) : a = String(a).replace(rg, sg);
    return a
}

function Z(a) {
    a && a.Y == fg ? a = String(a).replace(wg, xg) : (a = String(a), yg.test(a) ? a = a.replace(wg, xg) : (Ia("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz"));
    return a
}

function zg(a) {
    return String(a).replace(/(\r\n|\r|\n)/g, "<br>")
}
var Ag = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function sg(a) {
    return Ag[a]
}
var Bg = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
};

function xg(a) {
    return Bg[a]
}
var rg = /[\x00\x22\x26\x27\x3c\x3e]/g,
    vg = /[\x00\x22\x27\x3c\x3e]/g,
    wg = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    yg = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    tg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    ug = /</g;

function Cg(a) {
    return V('<div><a href="' + Y(Z(a.url)) + '" target="_blank">' + W(a.name) + '</a><br><a href="' + Y(Z(a.url)) + '" target="_blank" style="color: #03a9f4;">More info</a></div>')
}

function Dg(a) {
    var b = '<div class="details__card js-details-card -primary-padding-top ' + (!0 != a.Ub ? "-primary-padding-top" : "") + '"><div class="paging js-paging"><div class="pane js-pane">' + (a.Ub ? '<div class="details__landing g-bg-blue g-color-dark-blue show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View full schedule <div class="icon -forward-darkblue -bottom -mobile">Arrow</div></div></div></div>' : "") +
        '<div class="details__header row -full"><div class="col -width-1-2 details__back"><div class="details__save with-icon js-details-pin' + (a.ji ? " -saved" : "") + '" href="#" data-id="' + Y(a.id) + '">' + (a.de ? "" : '<span class="icon -pin-blue -bottom"></span> <span class="-content">your schedule</span>') + '</div></div><div class="col -width-1-2"><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss ' + (a.Ub ? "hide-for-small-only" : "") + '">Close</span></div></div>' + (a.Wa ? '<div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' +
            Y(a.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(a.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div>' : "") + '<div class="row -full details__cols"><div class="col -width-3-5 -mobile-buffer-bottom"><h1 class="details__title">' +
        W(a.title) + '</h1><h2 class="details__speaker">' + W(a.dc) + '</h2></div><div class="col -width-2-5 -gutterless-right hide-for-small-only"><div class="row details__wwwww block -no-border"><div class="col -width-1-4 -bold -gutterless">When</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(a.time) + "</div></div>" + (null != a.ad ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold -gutterless">Where</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(a.ad) + "</div></div>" :
            "") + (null != a.A ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold -gutterless">Theme</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(a.A) + "</div></div>" : "") + (a.de ? '<div class="rating__forward row details__wwwww js-pane-forward">Rate this session</div>' : "") + '</div><div class="-full hide-for-small-only"><div class="col -width-5-5"><p class="details__description">' + zg(W(a.description)) + '</p></div></div><div class="col -width-1-3 -gutterless-right show-for-small-only"><div class="row details__wwwww block -no-border"><div class="col -width-1-4 -bold">When</div><div class="col -width-3-4 -gutterless g-light-grey">' +
        W(a.time) + "</div></div>" + (null != a.ad ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold">Where</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(a.ad) + "</div></div>" : "") + (null != a.A ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold">Theme</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(a.A) + "</div></div>" : "") + (a.de ? '<div class="rating__forward row details__wwwww js-pane-forward">Rate this session</div>' : "") + '<div class="row -full"><div class="col -width-5-5"><p class="details__description">' +
        zg(W(a.description)) + "</p></div></div></div></div>";
    if (a.I && a.I.length) {
        for (var b = b + '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">', c = a.I, d = c.length, e = 0; e < d; e++) var f = c[e],
            b = b + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image js-speaker-image" style="background-image: url(' + (f.photo ? Y(Z(f.photo)) : "/events/io/images/speaker-default.png") +
                ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(f.firstname) + " " + W(f.lastname) + '</span><span class="speaker__title g-light-grey">' + (f.jobtitle ? " " + W(f.jobtitle) : "") + (f.companyname ? (f.jobtitle ? "," : "") + " " + W(f.companyname) : "") + '</span></div><p class="speaker__bio">' + W(f.bio) + "</p></div></div>");
        b += "</div></div>"
    }
    if (a.ub && a.ub.length) {
        b += '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">Related Content</h2></div></div><div class="row">';
        c = a.ub;
        d = c.length;
        for (e = 0; e < d; e++) f = c[e], b += '<div class="col -width-1-3"><a class="detail__extra-content" href="/events/io/io14videos/' + Y(f.key) + '"><div class="details__content-image g-bg-grey" style="background-image:url(\'//img.youtube.com/vi/' + Y(String(f.video_id).replace(wg, xg)) + '/hqdefault.jpg\')">&nbsp;</div><p class="details__content-title -bold">' + W(f.title) + '</p><p class="details__content-description">' + W(f.description) + "</p></a></div>";
        b += "</div></div>"
    }
    b += '</div><div class="pane js-pane js-rating"><div class="ratings__row row -full -gutterless"><div class="ratings__header col -width-whole"><span class="ratings__back icon -back-grey -actionable -absolute -left js-pane-back">Back</span><h1 class="ratings__session-title -smaller">' +
        W(a.title) + '</h1><h2 class="ratings__session-speakers">' + W(a.dc) + '</h2><span class="ratings__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div></div><div class="js-rating-questions-holder"><div class="ratings__row row -full -gutterless js-rating-question" data-type="relevance"><p class="ratings__title">How relevant was this session to your projects?</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Not at all</span><span class="most">Extremely</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="content"><p class="ratings__title">The content was:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Too basic</span><span class="most">Too advanced</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="speaker"><p class="ratings__title">Speaker quality:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Poor</span><span class="most">Outstanding</span></div></div><div class="ratings__row row -full -gutterless js-rating-question"><p class="ratings__title">Anything else we should know?</p><div class="ratings__comments-holder"><textarea maxlength="700" class="ratings__comments js-rating-comments" placeholder="Please don\'t add any personal info in your comments"></textarea></div></div><div class="ratings__submit js-submit-rating">Submit</div></div><div class="ratings__submitted js-rating-submitted -hide"><h1 class="-bold">Success!</h1><h2>Your feedback has been submitted. Thanks for participating.</h2></div></div></div></div>';
    return V(b)
}

function Eg(a) {
    var b = '<div class="details__card paging js-details-card js-paging"><div class="pane js-pane">' + (a.Ub ? '<div class="details__landing g-bg-purple-blue g-color-dark-purple show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View the video archive <div class="icon -forward-deeppurple -bottom -mobile">Arrow</div></div></div></div>' : "") + '<div class="js-details-scroller"><div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(a.Wa) +
        '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(a.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div><div class=""><div class="row -full details__cols"><div class="col -width-3-4"><h1 class="details__title -smaller">' +
        W(a.title) + '</h1><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div><div class="col -width-3-4 -mobile-width-3-5"><h2 class="details__speaker">' + W(a.dc) + ' &nbsp;</h2></div><div class="col -width-1-4 -mobile-width-2-5"><h2 class="details__speaker"><span class="rating__forward js-pane-forward hide-for-small-only">Rate this session</span><span class="rating__forward js-pane-forward show-for-small-only">Rate it</span></h2></div></div><div class="row -full"><div class="col -width-5-5"><p class="details__description">' +
        zg(W(a.description)) + "</p></div></div></div></div>";
    if (a.I && a.I.length) {
        for (var b = b + '<div class="details__content"><div class="row"><div class="col -width-whole"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">', c = a.I, d = c.length, e = 0; e < d; e++) var f = c[e],
            b = b + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image hide-for-small-only js-speaker-image" style="background-image: url(' + (f.photo ? Y(Z(f.photo)) : "/events/io/images/speaker-default.png") +
                ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(f.firstname) + " " + W(f.lastname) + '</span><span class="speaker__title g-light-grey">' + (f.jobtitle ? " " + W(f.jobtitle) : "") + (f.companyname ? (f.jobtitle ? "," : "") + " " + W(f.companyname) : "") + '</span></div><p class="speaker__bio">' + W(f.bio) + "</p></div></div>");
        b += "</div></div>"
    }
    if (a.ub && a.ub.length) {
        b += '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">Related Content</h2></div></div><div class="row">';
        c = a.ub;
        d = c.length;
        for (e = 0; e < d; e++) f = c[e], b += '<div class="col -width-1-3"><a class="detail__extra-content js-pane-forward-external js-related-video" href="/events/io/io14videos/' + Y(f.key) + '"><div class="details__content-image g-bg-grey" style="background-image:url(\'//img.youtube.com/vi/' + Y(String(f.video_id).replace(wg, xg)) + '/hqdefault.jpg\')">&nbsp;</div><p class="details__content-title -bold">' + W(f.title) + '</p><p class="details__content-description">' + W(f.description) + "</p></a></div>";
        b += "</div></div>"
    }
    b +=
        '</div><div class="pane js-pane js-rating"><div class="ratings__row row -full -gutterless"><div class="ratings__header col -width-whole"><span class="ratings__back icon -back-grey -actionable -absolute -left js-pane-back">Back</span><h1 class="ratings__session-title -smaller">' + W(a.title) + '</h1><h2 class="ratings__session-speakers">' + W(a.dc) + '</h2><span class="ratings__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div></div><div class="js-rating-questions-holder"><div class="ratings__row row -full -gutterless js-rating-question" data-type="relevance"><p class="ratings__title">How relevant was this session to your projects?</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Not at all</span><span class="most">Extremely</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="content"><p class="ratings__title">The content was:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Too basic</span><span class="most">Too advanced</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="speaker"><p class="ratings__title">Speaker quality:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Poor</span><span class="most">Outstanding</span></div></div><div class="ratings__row row -full -gutterless js-rating-question"><p class="ratings__title">Anything else we should know?</p><div class="ratings__comments-holder"><textarea class="ratings__comments js-rating-comments" placeholder="Please don\'t add any personal info in your comments"></textarea></div></div><div class="ratings__submit js-submit-rating">Submit</div></div><div class="ratings__submitted js-rating-submitted -hide"><h1 class="-bold">Success!</h1><h2>Your feedback has been submitted. Thanks for participating.</h2></div></div></div>';
    return V(b)
}

function cg(a) {
    var b = '<div class="details__card paging js-details-card js-paging"><div class="pane js-pane">' + (a.Ub ? '<div class="details__landing g-bg-purple-blue g-color-dark-purple show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View the video archive <div class="icon -forward-deeppurple -bottom -mobile">Arrow</div></div></div></div>' : "") + '<div class="js-details-scroller"><div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(a.Wa) +
        '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(a.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div><div class=""><div class="row -full details__cols"><div class="col -width-3-4"><h1 class="details__title -smaller">' +
        W(a.title) + '</h1><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div><div class="col -width-3-4 -mobile-width-3-5"><h2 class="details__speaker">' + W(a.dc) + ' &nbsp;</h2></div></div><div class="row -full"><div class="col -width-5-5"><p class="details__description">' + zg(W(a.description)) + "</p></div></div></div></div>";
    if (a.I && a.I.length) {
        b += '<div class="details__content"><div class="row"><div class="col -width-whole"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">';
        a = a.I;
        for (var c = a.length, d = 0; d < c; d++) var e = a[d],
            b = b + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image hide-for-small-only js-speaker-image" style="background-image: url(' + (e.photo ? Y(Z(e.photo)) : "/events/io/images/speaker-default.png") + ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(e.firstname) + " " + W(e.lastname) + '</span><span class="speaker__title g-light-grey">' + (e.jobtitle ? " " + W(e.jobtitle) : "") + (e.companyname ?
                (e.jobtitle ? "," : "") + " " + W(e.companyname) : "") + '</span></div><p class="speaker__bio">' + W(e.bio) + "</p></div></div>");
        b += "</div></div>"
    }
    return V(b + "</div>")
}

function Fg(a) {
    return V('<div class="card js-match-item -buffer-bottom"><div class="card__content -smaller g-bg-white -watch-live-buffer"><div class="js-session-details"><div class="card__category -actionable g-light-grey -' + Y(a.A) + '">' + W(a.$f) + '<span class="icon -more-grey -middle right"></span></div><h4 class="h4">' + W(a.title) + '</h4><div class="speaker-list">' + W(a.ra) + '</div></div></div><a href="#' + Y(a.Sa) + '" class="card__full-banner with-icon -' + Y(a.A) + '"><span class="icon -play-' + ("develop" ==
        a.A ? "blue" : "") + ("design" == a.A ? "darkblue" : "") + ("distribute" == a.A ? "purple" : "") + ' -text-top -buffer-right"></span>Watch live</a></div>')
}

function Gg(a) {
    var b = '<div class="card -buffer-bottom -actionable -mobile-stacked js-match-item js-session-details"><div class="card__content -smaller g-bg-white -speaker-image-buffer"><div class="card__category g-light-grey -' + Y(a.A) + '">' + W(a.$f) + '<span class="icon -more-grey -middle right"></span></div><h4 class="h4">' + W(a.title) + "</h4>" + (a.I ? a.I.length ? '<div class="speaker-list">' + W(a.ra) + "</div>" : "" : "");
    if (a.I && a.I.length) {
        b += '<ul class="speaker-images hide-for-small-only">';
        a = a.I;
        for (var c = a.length,
            d = 0; d < c; d++) var e = a[d],
            b = b + ('<li class="speaker-image -small" style="background-image: url(' + (e.Jf ? Y(Z(e.Jf)) : "/events/io/images/speaker-default.png") + ')"></li>');
        b += "</ul>"
    }
    return V(b + "</div></div>")
}

function Hg(a) {
    return V('<div class="card -live -buffer-bottom"><div class="card__content -live -gutterless -' + Y(a.A) + '"><div class="static-feed"><div class="feed-theme">' + W(a.A) + '</div><div class="feed-title">' + W(a.title) + "</div>" + (a.ra ? '<div class="feed-speakers">' + W(a.ra) + "</div>" : "") + '<div class="feed-more js-session-details"><span class="icon -more-' + ("develop" == a.A ? "blue" : "") + ("design" == a.A ? "darkblue" : "") + ("distribute" == a.A ? "purple" : "") + ' -middle"></span></div><a href="#' + Y(a.Sa) + '" class="feed-show width-icon"><span class="icon -play-large-' +
        ("develop" == a.A ? "blue" : "") + ("design" == a.A ? "darkblue" : "") + ("distribute" == a.A ? "purple" : "") + '"></span>Watch now</a></div><div class="live-feed"><div class="feed-cta"><div class="js-feed-inline-stream"></div><a href="#' + Y(a.Sa) + '" class="feed-swap"><span class="icon -play-large-white"></span></a></div><div class="card__banner -smaller -actionable js-session-details"><div class="fluid-left-fixed-right -with-icon"><div class="left -width-whole"><div class="fluid-left"><span class="ellipsis">' + W(a.title) +
        '</span><span class="ellipsis g-light-grey">' + (a.ra ? W(a.ra) : "") + '</span></div></div><div class="fixed-right text-right"><span class="icon -more-grey -middle"></span></div></div></div></div></div></div>')
}

function Ig(a) {
    return V('<h3 class="bucket__headline h3 -with-icon -mobile-larger g-color-white"><span class="fixed-left-fluid-right -with-icon"><span class="left -width-whole"><span class="fluid-right">' + W(a.title) + '</span></span><span class="fixed-left"><span class="icon -play-white -sub"></span></span></span></h3><p class="-shifted -no-buffer">' + (a.ra ? '<span class="g-color-white">' + W(a.ra) + "</span><br>" : "") + '<span class="g-color-light-purple">' + W(a.time) + "</span></p>")
}

function Jg(a) {
    return V("error" == a.message ? '<h3 class="bucket__headline h3 g-color-white">Sorry, we\'re experiencing technical difficulties.</h3>' : "before" == a.message ? '<h3 class="bucket__headline h3 g-color-white">I/O starts soon!</h3><p class="text-center g-color-light-blue -no-buffer">The keynote begins at 9:00&nbsp;AM&nbsp;PDT on June&nbsp;25.<br><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "pre-keynote" == a.message ?
        '<h3 class="bucket__headline h3 g-color-white">I/O starts soon!</h3><p class="text-center g-color-light-blue -no-buffer">The keynote begins at 9:00&nbsp;AM&nbsp;PDT on June&nbsp;25.<br><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "upcoming" == a.message ? '<h3 class="bucket__headline h3 g-color-white">We&lsquo;ll be right back.</h3><p class="-width-1-3 -mobile-whole g-color-light-blue -no-buffer"><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' :
        "eod-1" == a.message ? '<h3 class="bucket__headline h3 g-color-white">That\'s it for today</h3><p class="text-center g-color-light-blue -no-buffer">Thanks for joining us today.<br>We\u2019ll be back in the morning with more sessions from I/O Live.</p><p class="g-color-light-blue -no-buffer"><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "eod-2" == a.message ? '<h3 class="bucket__headline h3 g-color-white">That\'s it for now.</h3><p class="g-color-light-blue -no-buffer">Come back soon for highlights from I/O 2014.</p>' :
        "")
}

function Kg(a) {
    for (var b = "<ul>", c = a.oh, d = c.length, e = 0; e < d; e++) b += V('<li class="qa-feed__qa-feed-item"><div class="qa-feed-item__row"><a href="' + Y(Z(c[e].Db)) + '" target="_blank" class="qa-feed-item__icon -gutterless"><img src="' + Y(Z(c[e].xd)) + '"></a><a href="' + Y(Z(c[e].Db)) + '" target="_blank" class="qa-feed-item__author">' + W(c[e].name) + '</a><a href="' + Y(Z(c[e].url)) + '" target="_blank" class="qa-feed-item__time js-relative-time" datetime="' + Y(c[e].sb) + '">just now</a></div><div class="qa-feed-item__content"><p>' + W(c[e].body) +
        "</p>" + (c[e].qc ? '<p><a href="' + Y(Z(c[e].qc)) + '" target="_blank">Watch the video</a></p>' : "") + "</div>" + (c[e].S ? '<div class="qa-feed-item__reshare"><div class="arrow"></div><div class="qa-feed-item__reshare-author"><a href="' + Y(Z(c[e].S.Db)) + '" target="_blank" class="qa-feed-item__icon -gutterless"><img src="' + Y(Z(c[e].S.xd)) + '"></a><a href="' + Y(Z(c[e].S.Db)) + '" target="_blank" class="qa-feed-item__author">' + W(c[e].S.name) + '</a><a href="' + Y(Z(c[e].S.url)) + '" target="_blank" class="qa-feed-item__time js-relative-time" datetime="' +
            Y(c[e].S.sb) + '">just now</a></div><div class="qa-feed-item__reshare-content">' + (c[e].S.body ? "<p>" + W(c[e].S.body) + "</p>" : "") + (c[e].S.qc ? '<p><a href="' + Y(Z(c[e].S.qc)) + '" target="_blank">Watch the video</a></p>' : "") + "</div></div>" : "") + "</li>");
    b += '</ul><a href="' + Y(Z(a.Di)) + '" target="_blank" class="qa-feed__load-more">open in Google+</div>';
    return V(b)
};

function Lg(a) {
    this.a = E("js-break");
    this.Ta = E("js-break-message");
    T.call(this, a)
}
p(Lg, T);
Lg.prototype.ja = function() {
    this.c && this.ga()
};
Lg.prototype.i = function() {
    Q(this.a, "hidden", !0);
    Lg.d.i.call(this)
};
Lg.prototype.show = function() {
    Q(this.a, "hidden", !1);
    Lg.d.show.call(this)
};
Lg.prototype.ga = function() {
    hg(this.Ta, Jg, this.c)
};

function $(a, b) {
    this.name = a;
    this.bd = b;
    this.c = null
}
g = $.prototype;
g.D = function(a) {
    a && a()
};
g.setData = function(a) {
    this.c = a;
    this.ja()
};
g.ja = aa();
g.ya = function() {
    return this.bd.getData()
};
g.M = function(a, b) {
    this.bd.M(a, b)
};
g.N = function(a, b) {
    this.bd.N(a, b)
};
g.h = function(a, b) {
    this.bd.h(a, b)
};

function Mg(a) {
    $.call(this, "before", a)
}
p(Mg, $);
Mg.prototype.D = function(a) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "before"
    });
    this.N("message", !1);
    Mg.d.D.call(this, a)
};

function Ng(a, b, c) {
    L.call(this);
    this.U = a;
    this.Ta = b;
    this.yf = c;
    this.setData(null);
    this.Ie = n(this.qi, this)
}
p(Ng, L);
Ng.prototype.setData = function(a) {
    var b = a && (null === this.c || this.c && this.c.id !== a.key || this.c && this.c.Sa !== a.live_stream_id);
    !b && a || Og(this);
    a ? b ? (this.c = {
        id: a.key,
        A: a.theme,
        $f: a.themeTitle,
        title: a.title,
        Sa: a.live_stream_id
    }, a.speakers && (this.c.I = u(a.speakers, function(a) {
        var b = a.photo;
        b && (b = b.replace(/^http:/, ""));
        return {
            name: a.firstname + " " + a.lastname,
            Jf: b
        }
    }), this.c.ra = u(this.c.I, function(a) {
        return a.name
    }).join(", ")), this.ga(), Pg(this), F(this.U, "opacity", "")) : this.Fd() : (this.c = null, F(this.U, "opacity",
        0))
};
Ng.prototype.ga = function() {
    hg(this.U, this.Ta, this.c)
};
Ng.prototype.Fd = aa();

function Pg(a) {
    a.o = C("js-session-details", a.U);
    s(a.o, function(a) {
        (new Hammer(a)).on("tap", this.Ie)
    }, a)
}

function Og(a) {
    a.o && (s(a.o, function(a) {
        (new Hammer(a)).off("tap", this.Ie)
    }, a), a.o = null)
}
Ng.prototype.qi = function() {
    var a = new Pc("loadSessionDetails", this.c.id),
        b = document.body;
    Ac(b) ? Je(b, "loadSessionDetails", !1, a) : cd(b, "loadSessionDetails", !1, a)
};

function Qg(a) {
    this.a = E("js-time-slots");
    E("js-live-time-slot");
    this.Ng = E("js-live-time-slot-pager");
    this.Lg = E("js-live-time");
    this.Og = C("js-live-card");
    this.Mg = u(this.Og, function(a) {
        return new Ng(a, Fg, this)
    }, this);
    E("js-next-time-slot");
    this.Jh = E("js-next-time-slot-pager");
    this.Gh = E("js-next-time");
    this.Kh = C("js-next-card");
    this.Ih = u(this.Kh, function(a) {
        return new Ng(a, Gg, this)
    }, this);
    this.Cg = Rg(this.a);
    this.he = Sg.get("timeslots");
    T.call(this, a)
}
p(Qg, T);
Qg.prototype.ja = function() {
    if (this.c) {
        Tg(this);
        if (this.c.u && null !== this.c.u) {
            var a = this.c.u[0].pretty_time;
            ac(this.Lg, a ? a + " PDT" : "")
        }
        this.c.G && null !== this.c.G && (a = this.c.G[0].pretty_time, ac(this.Gh, a ? a + " PDT" : ""));
        setTimeout(n(this.Tg, this), 100)
    }
};

function Ug(a) {
    var b = Ua(I.getActiveBreakpoints(), "mobile");
    "next" !== a.c.focus || b ? ("current" === a.c.focus || b) && Vg(a.he, 0) : Vg(a.he, 1);
    Q(a.Jh, "hidden", null === a.c.u || a.c.nf);
    Q(a.Ng, "hidden", null === a.c.G)
}

function Tg(a) {
    a.c.u && s(a.Mg, function(a, c) {
        a.setData(this.c.u[c])
    }, a);
    a.c.G && s(a.Ih, function(a, c) {
        a.setData(this.c.G[c])
    }, a);
    Ug(a)
}
Qg.prototype.Tg = function() {
    this.Cg.refresh();
    this.he.refresh()
};
Qg.prototype.show = function() {
    Q(this.a, "hidden", !1);
    Qg.d.show.call(this)
};
Qg.prototype.i = function() {
    Q(this.a, "hidden", !0);
    Qg.d.i.call(this)
};

function Wg(a) {
    this.a = E("js-stream-detail-container");
    this.Ta = E("js-stream-detail");
    T.call(this, a)
}
p(Wg, T);
Wg.prototype.ja = function() {
    this.c && this.c.da.title && this.ga()
};
Wg.prototype.i = function() {
    Q(this.a, "hidden", !0);
    Wg.d.i.call(this)
};
Wg.prototype.show = function() {
    Q(this.a, "hidden", !1);
    Wg.d.show.call(this)
};
Wg.prototype.ga = function() {
    hg(this.Ta, Ig, {
        title: this.c.da.title,
        time: this.c.be ? " " : this.c.da.pretty_time + " PDT",
        ra: u(this.c.da.speakers, function(a) {
            return a.firstname + " " + a.lastname
        }).join(", ")
    })
};

function Xg(a) {
    this.uc = Kb("body", void 0, void 0)[0];
    this.eb = E("js-header");
    this.fa = E("js-nav");
    this.ue = !qd(this.fa, "post-keynote-header");
    T.call(this, a)
}
p(Xg, T);
Xg.prototype.i = function(a) {
    if (a) {
        a = H(this.eb);
        a = a.height;
        var b = H(this.fa),
            b = b.height;
        TweenMax.to(this.fa, 0.3, {
            y: -b,
            ease: Expo.easeOut,
            delay: 1
        });
        TweenMax.to(this.uc, 0.5, {
            y: -a,
            ease: Expo.easeOut,
            clearProps: "y",
            delay: 1,
            onComplete: function() {
                TweenMax.set(this.uc, {
                    y: 0
                });
                Q(this.eb, "hidden", !0);
                this.ue && Q(this.fa, "-lighter", !0);
                rc && Q(this.fa, "static", !0)
            },
            onCompleteScope: this
        });
        TweenMax.to(this.fa, 0.3, {
            y: 0,
            ease: Expo.easeOut,
            delay: 1.5
        })
    } else Q(this.eb, "hidden", !0), this.ue && Q(this.fa, "-lighter", !0), rc && Q(this.fa,
        "static", !0);
    Xg.d.i.call(this)
};
Xg.prototype.show = function() {
    rc && Q(this.fa, "static", !1);
    Q(this.eb, "hidden", !1);
    this.ue ? Q(this.fa, "-lighter", !1) : (TweenMax.set(this.eb, {
        opacity: 0
    }), setTimeout(n(function() {
        s(sc, ResponsiveImage.update);
        TweenMax.to(this.eb, 0.2, {
            opacity: 1
        })
    }, this), 50));
    Xg.d.show.call(this)
};

function Yg(a, b) {
    this.a = E("js-live-stream");
    this.Tb = !1;
    this.Uc = B("video-player");
    TweenLite.set(this.Uc, {
        opacity: 0
    });
    this.pb = b;
    T.call(this, a)
}
p(Yg, T);
Yg.prototype.ja = function() {
    if (this.c) {
        TweenLite.set(this.Uc, {
            opacity: 0
        });
        if (this.rb) He(this.H, this.c.live_stream_id), this.H.j.playVideo(), this.Tb = !0;
        else {
            var a = n(function() {
                    this.Uc = B("video-player");
                    this.Tb = this.rb = !0
                }, this),
                b = n(this.pb, this);
            this.H = new Ge(this.c.live_stream_id, a, b);
            this.va.Bb ? this.H.Ba() : this.va.ba("onYouTubeIframeAPIReady", function() {
                this.H.Ba()
            }, !1, this)
        }
        Q(document.body, "video-playing", !0);
        var c = {
            y: Nb(document).y
        };
        TweenLite.to(c, 0.3, {
            y: 0,
            ease: Expo.easeOut,
            onUpdate: function() {
                window.scrollTo(0,
                    c.y)
            },
            onComplete: function() {
                window.scrollTo(0, 0)
            }
        })
    }
};
Yg.prototype.i = function() {
    this.rb && (this.H.j.setVolume(0), this.H.j.pauseVideo(), this.H.j.stopVideo(), this.Tb = !1, Q(document.body, "video-playing", !1));
    TweenLite.set(this.Uc, {
        opacity: 0
    });
    Q(this.a, "hidden", !0);
    Yg.d.i.call(this)
};
Yg.prototype.show = function() {
    this.rb && !this.Tb && (this.H.j.playVideo(), this.H.j.setVolume(100), this.Tb = !0);
    Q(this.a, "hidden", !1);
    Yg.d.show.call(this)
};

function Zg(a) {
    var b = n(function() {
        if (rc || pc) a.m.Ga(""), this.i()
    }, this);
    this.mf = new Xg(a);
    this.je = new Yg(a, b);
    this.Vc = new Wg(a);
    this.yc = E("js-close-stream");
    pc && (Q(this.yc, "hidden", !0), this.yc = void 0);
    T.call(this, a)
}
p(Zg, T);
Zg.prototype.ja = function() {
    this.c && (this.yc && Q(this.yc, "hidden", this.c.be), this.je.setData(this.c.da), this.Vc.setData(this.c), this.c.da.title || this.Vc.i())
};
Zg.prototype.i = function(a) {
    this.mf.show(a);
    this.je.i();
    this.Vc.i();
    Zg.d.i.call(this)
};
Zg.prototype.show = function(a) {
    this.mf.i(a);
    this.je.show();
    this.Vc.show();
    Zg.d.show.call(this)
};

function $g(a) {
    L.call(this);
    this.Wd = a;
    this.n = {}
}
p($g, L);
var ah = [];
g = $g.prototype;
g.ba = function(a, b, c, d, e) {
    ka(b) || (ah[0] = b, b = ah);
    for (var f = 0; f < b.length; f++) {
        var h = O(a, b[f], c || this, d || !1, e || this.Wd || this);
        if (!h) break;
        this.n[h.key] = h
    }
    return this
};
g.Oc = function(a, b, c, d, e) {
    if (ka(b))
        for (var f = 0; f < b.length; f++) this.Oc(a, b[f], c, d, e);
    else {
        a = Zc(a, b, c || this, d, e || this.Wd || this);
        if (!a) return this;
        this.n[a.key] = a
    }
    return this
};
g.ve = function(a, b, c, d, e) {
    if (ka(b))
        for (var f = 0; f < b.length; f++) this.ve(a, b[f], c, d, e);
    else e = e || this.Wd || this, c = Vc(c || this), d = !!d, b = Ac(a) ? a.Ob(b, c, d, e) : a ? (a = ad(a)) ? a.Ob(b, c, d, e) : null : null, b && (bd(b), delete this.n[b.key]);
    return this
};
g.Zc = function() {
    Ja(this.n, bd);
    this.n = {}
};
g.f = function() {
    $g.d.f.call(this);
    this.Zc()
};
g.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function bh(a, b) {
    for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
    return c.join("\x0B")
};

function Zf(a, b, c, d) {
    S.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    var e;
    c ? e = c : (e = "history_state" + ch, document.write(wa(dh, e, e)), e = B(e));
    this.Qb = e;
    this.l = c ? Jb(c) ? Jb(c).parentWindow || Jb(c).defaultView : window : window;
    this.Kc = b;
    y && !b && (this.Kc = "https" == window.location.protocol ? "https:///" : 'javascript:""');
    this.t = new Ne(eh);
    b = ta(Oc, this.t);
    this.Zb || (this.Zb = []);
    this.Zb.push(n(b, void 0));
    this.Va = !a;
    this.Ka = new $g(this);
    if (a || fh) d ? a = d : (a = "history_iframe" +
        ch, d = this.Kc ? 'src="' + za(this.Kc) + '"' : "", document.write(wa(gh, a, d)), a = B(a)), this.fb = a, this.gg = !0;
    fh && (this.Ka.ba(this.l, "load", this.Ph), this.Vf = this.Pd = !1);
    this.Va ? hh(this, this.W(), !0) : ih(this, this.Qb.value);
    ch++
}
p(Zf, S);
Zf.prototype.ka = !1;
Zf.prototype.lb = !1;
Zf.prototype.ib = null;
var jh = function(a, b) {
        var c = b || bh;
        return function() {
            var b = this || l,
                b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
                e = c(oa(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }(function() {
        return y ? 8 <= document.documentMode : "onhashchange" in l
    }),
    fh = y && !(y && 8 <= Bb),
    kh = fh;
g = Zf.prototype;
g.kb = null;
g.f = function() {
    Zf.d.f.call(this);
    this.Ka.xa();
    this.Fa(!1)
};
g.Fa = function(a) {
    if (a != this.ka)
        if (fh && !this.Pd) this.Vf = a;
        else if (a)
        if (ob ? this.Ka.ba(this.l.document, lh, this.Vh) : pb && this.Ka.ba(this.l, "pageshow", this.Th), jh() && this.Va) this.Ka.ba(this.l, "hashchange", this.Qh), this.ka = !0, this.dispatchEvent(new Ie(this.W()));
        else {
            if (!y || this.Pd) this.Ka.ba(this.t, Oe, n(this.Ya, this, !0)), this.ka = !0, fh || (this.ib = this.W(), this.dispatchEvent(new Ie(this.W()))), this.t.start()
        } else this.ka = !1, this.Ka.Zc(), this.t.stop()
};
g.Ph = function() {
    this.Pd = !0;
    this.Qb.value && ih(this, this.Qb.value, !0);
    this.Fa(this.Vf)
};
g.Th = function(a) {
    a.ab.persisted && (this.Fa(!1), this.Fa(!0))
};
g.Qh = function() {
    var a = mh(this.l);
    a != this.ib && nh(this, a)
};
g.W = function() {
    return null != this.kb ? this.kb : this.Va ? mh(this.l) : oh(this) || ""
};
g.Ga = function(a, b) {
    ph(this, a, !1, b)
};
g.me = function(a, b) {
    ph(this, a, !0, b)
};

function mh(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
}

function ph(a, b, c, d) {
    a.W() != b && (a.Va ? (hh(a, b, c), jh() || y && ih(a, b, c, d), a.ka && a.Ya(!1)) : (ih(a, b, c), a.kb = a.ib = a.Qb.value = b, a.dispatchEvent(new Ie(b))))
}

function hh(a, b, c) {
    a = a.l.location;
    var d = a.href.split("#")[0],
        e = -1 != a.href.indexOf("#");
    if (kh || e || b) d += "#" + b;
    d != a.href && (c ? a.replace(d) : a.href = d)
}

function ih(a, b, c, d) {
    if (a.gg || b != oh(a))
        if (a.gg = !1, b = encodeURIComponent(String(b)), y) {
            var e = a.fb.contentDocument || a.fb.contentWindow.document;
            e.open("text/html", c ? "replace" : void 0);
            e.write(wa(qh, za(d || a.l.document.title), b));
            e.close()
        } else if (b = a.Kc + "#" + b, a = a.fb.contentWindow) c ? a.location.replace(b) : a.location.href = b
}

function oh(a) {
    if (y) return a = a.fb.contentDocument || a.fb.contentWindow.document, a.body ? ya(a.body.innerHTML) : null;
    var b = a.fb.contentWindow;
    if (b) {
        var c;
        try {
            c = ya(mh(b))
        } catch (d) {
            return a.lb || (!0 != a.lb && a.t.setInterval(rh), a.lb = !0), null
        }
        a.lb && (!1 != a.lb && a.t.setInterval(eh), a.lb = !1);
        return c || null
    }
    return null
}
g.Ya = function() {
    if (this.Va) {
        var a = mh(this.l);
        a != this.ib && nh(this, a)
    }
    if (!this.Va || fh)
        if (a = oh(this) || "", null == this.kb || a == this.kb) this.kb = null, a != this.ib && nh(this, a)
};

function nh(a, b) {
    a.ib = a.Qb.value = b;
    a.Va ? (fh && ih(a, b), hh(a, b)) : ih(a, b);
    a.dispatchEvent(new Ie(a.W()))
}
g.Vh = function() {
    this.t.stop();
    this.t.start()
};
var lh = ["mousedown", "keydown", "mousemove"],
    qh = "<title>%s</title><body>%s</body>",
    gh = '<iframe id="%s" style="display:none" %s></iframe>',
    dh = '<input type="text" name="%s" id="%s" style="display:none">',
    ch = 0,
    eh = 150,
    rh = 1E4;

function sh(a) {
    $.call(this, "playing", a)
}
p(sh, $);
sh.prototype.D = function(a) {
    this.h("live-grid", !1);
    this.h("message", !1);
    this.M("time-slots", {
        focus: "current",
        u: this.ya().ia.u,
        G: this.ya().ia.G,
        nf: !1
    });
    this.N("time-slots", !1);
    this.M("main-player", {
        be: !1,
        da: this.c.da
    });
    this.N("main-player", !1);
    sh.d.D.call(this, a)
};

function th(a) {
    $.call(this, "error", a)
}
p(th, $);
th.prototype.D = function(a) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "error"
    });
    this.N("message", !1);
    th.d.D.call(this, a)
};

function uh(a) {
    $.call(this, "end-of-day", a)
}
p(uh, $);
uh.prototype.D = function(a) {
    this.h("time-slots", !1);
    this.h("main-player", !1);
    this.h("live-grid", !1);
    this.M("message", {
        message: "eod-" + this.c.Id
    });
    this.N("message", !1);
    uh.d.D.call(this, a)
};

function vh(a) {
    $.call(this, "keynote", a)
}
p(vh, $);
vh.prototype.D = function(a) {
    this.h("live-grid", !1);
    this.h("message", !1);
    this.h("time-slots", !1);
    this.M("main-player", {
        be: !0,
        da: this.c.da
    });
    this.N("main-player", !0);
    vh.d.D.call(this, a)
};

function zh(a, b, c) {
    this.v = a;
    this.oc = b;
    this.ph = c;
    this.ea = null;
    this.lg = this.Nf = !0;
    I.on("breakpoint", this.pa, this);
    this.wf(n(this.refresh, this));
    this.Ai = setInterval(n(this.hg, this), 6E4)
}
p(zh, L);
g = zh.prototype;
g.f = function() {
    I.off("breakpoint", this.pa);
    clearInterval(this.Ai);
    zh.d.f.call(this)
};
g.hg = function() {
    var a = C("js-relative-time");
    s(a, function(a) {
        var c = a.getAttribute("datetime");
        c && (c = moment(c), ac(a, c.fromNow()))
    })
};
g.wf = function(a) {
    ja(window.gapi) && ja(window.gapi.client) && ja(window.gapi.client.load) ? gapi.client.load("plus", "v1", n(function() {
        gapi.client.setApiKey(this.ph);
        this.lg = !1;
        this.Nf && (this.Nf = !1, a())
    }, this)) : setTimeout(n(this.wf, this, a), 100)
};
g.oa = function() {
    return 768 > window.innerWidth
};
g.pa = function(a) {
    "mobile" === a[0] && (this.ea ? this.ga() : this.refresh())
};

function Ah(a, b, c) {
    if (!c && Modernizr.localstorage) {
        var d = +new Date;
        if ((c = sessionStorage.getItem("qaFeedSetupTime")) && 3E5 > d - c && (c = sessionStorage.getItem("qaFeedItems"))) {
            b(JSON.parse(c));
            return
        }
    }
    gapi.client.plus.activities.list({
        userId: a.oc,
        collection: "public",
        maxResults: 10
    }).execute(n(function(a) {
        a.items && (a = u(a.items, this.Yh, this), a = Qa(a, function(a, b) {
            0 < b.body.length && 3 > a.length && a.push(b);
            return a
        }, [], this), Modernizr.localstorage && (sessionStorage.setItem("qaFeedSetupTime", d), sessionStorage.setItem("qaFeedItems",
            JSON.stringify(a))), b(a))
    }, a))
}
g.Yh = function(a) {
    var b, c, d, e, f = a.actor.displayName,
        h = a.actor.image.url,
        k = a.actor.url,
        q = a.url;
    a.object && (a.object.attachments && 0 < a.object.attachments.length && "video" === a.object.attachments[0].objectType) && (b = a.object.attachments[0].url);
    var t = a.object.content,
        t = t.replace(/<a\s/g, '<a target="_blank" ');
    "share" === a.verb ? (d = a.annotation, d = d.replace(/<a\s/g, '<a target="_blank" '), e = {
            name: a.object.actor.displayName,
            xd: a.object.actor.image.url,
            Db: a.object.actor.url,
            url: a.object.url,
            qc: b,
            sb: a.published,
            body: t
        }) :
        (c = b, d = t);
    return {
        url: q,
        Db: k,
        name: f,
        xd: h,
        body: d,
        qc: c,
        sb: a.published,
        S: e
    }
};
g.refresh = function(a) {
    this.lg || Ah(this, n(function(a) {
        this.ea = u(a, function(a) {
            var b = {},
                e;
            for (e in a) b[e] = a[e];
            b.body = V(b.body);
            b.S && (b.S.body = V(b.S.body));
            return b
        });
        this.ga()
    }, this), a)
};
g.ga = function() {
    hg(this.v, Kg, {
        oh: this.ea,
        Di: "https://plus.google.com/" + this.oc + "/posts"
    });
    setTimeout(n(this.hg, this), 50)
};

function Bh(a, b) {
    this.va = a;
    this.gc = {};
    this.Ja = null;
    this.hd = !1;
    0 < b.length && s(b, this.ug, this)
}
g = Bh.prototype;
g.ug = function(a) {
    a = new a(this);
    this.gc[a.name] = a
};

function Ch(a, b, c, d) {
    var e = a.Ja;
    if (a.hd) throw "Already transitioning!";
    a.hd = !0;
    e === b ? (a.gc[a.Ja].setData(c), a.gc[a.Ja].D(n(function() {
        this.hd = !1
    }, a))) : (e = n(function() {
        this.Ja = b;
        this.gc[this.Ja].setData(c);
        this.gc[this.Ja].D(n(function() {
            this.hd = !1;
            d(b)
        }, this))
    }, a), a.Ja ? e && e() : e())
}
g.getData = function() {
    return this.va.getData()
};
g.M = function(a, b) {
    this.va.M(a, b)
};
g.N = function(a, b) {
    this.va.N(a, b)
};
g.h = function(a, b) {
    this.va.h(a, b)
};

function Dh(a) {
    $.call(this, "live-streaming", a)
}
p(Dh, $);
Dh.prototype.D = function(a) {
    this.h("main-player", !1);
    this.h("message", !1);
    this.ya().ia.G ? (this.M("time-slots", {
        focus: "next",
        u: this.ya().ia.u,
        G: this.ya().ia.G,
        nf: !0
    }), this.N("time-slots", !1)) : this.h("time-slots", !1);
    this.M("live-grid", {
        u: this.ya().ia.u
    });
    this.N("live-grid", !1);
    Dh.d.D.call(this, a)
};

function Eh(a) {
    $.call(this, "pre-keynote", a)
}
p(Eh, $);
Eh.prototype.D = function(a) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "pre-keynote"
    });
    this.N("message", !1);
    Eh.d.D.call(this, a)
};

function Fh(a) {
    $.call(this, "upcoming", a)
}
p(Fh, $);
Fh.prototype.D = function(a) {
    this.h("main-player", !1);
    this.h("live-grid", !1);
    this.M("time-slots", {
        focus: "next",
        u: null,
        G: this.ya().ia.G
    });
    this.N("time-slots", !1);
    this.M("message", {
        message: "upcoming"
    });
    this.N("message", !1);
    Fh.d.D.call(this, a)
};

function Gh(a, b, c) {
    Ng.call(this, a, b, c);
    I.on("breakpoint", n(this.pa, this));
    this.ze = this.qd = !1;
    a = n(function() {
        this.ze = !0;
        this.qd && Hh() && Ih(this)
    }, this);
    this.yf.Bb ? a() : this.yf.ba("onYouTubeIframeAPIReady", a)
}
p(Gh, Ng);

function Hh() {
    var a = I.getActiveBreakpoints()[0],
        b = navigator.userAgent.match(/Android/) || navigator.userAgent.match(/iPad/);
    return a && "mobile" !== a && !b
}
Gh.prototype.pa = function(a) {
    var b = a[1];
    "desktop" === a[0] && "enter" === b && Hh() && this.qd && this.ze && Ih(this)
};

function Ih(a) {
    if (a.c) {
        a.qd = !1;
        if (a.j) {
            if (a.th === a.c.Sa) {
                Jh(a);
                return
            }
            a.j.destroy()
        }
        a.th = a.c.Sa;
        var b = E("js-feed-inline-stream", a.U);
        a.j = new YT.Player(b, {
            title: a.c.title,
            playerVars: {
                autoplay: 1,
                autohide: 1,
                controls: 0,
                enablejsapi: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                theme: "dark",
                playsinline: 1
            },
            videoId: a.c.Sa,
            events: {
                onReady: n(a.jg, a),
                onStateChange: n(a.jg, a)
            }
        })
    }
}
Gh.prototype.jg = function(a) {
    this.j.setVolume && this.j.setVolume(0);
    this.j.mute && this.j.mute();
    a.data === YT.PlayerState.PLAYING ? rd(this.U, "playing") : sd(this.U, "playing")
};

function Jh(a) {
    a.c && (a.j ? a.j.playVideo && a.j.playVideo() : Kh(a))
}
Gh.prototype.ga = function() {
    Gh.d.ga.call(this);
    Kh(this)
};
Gh.prototype.Fd = function() {
    Gh.d.Fd.call(this);
    Kh(this)
};

function Kh(a) {
    a.qd = !0;
    a.ze && Hh() && Ih(a)
};

function Lh(a) {
    this.a = E("js-stream-grid");
    var b = C("js-landing-card", this.a);
    this.Dd = u(b, function(b) {
        return new Gh(b, Hg, a)
    }, this);
    T.call(this, a)
}
p(Lh, T);
Lh.prototype.show = function() {
    Q(this.a, "hidden", !1);
    s(this.Dd, function(a) {
        Jh(a)
    }, this);
    Lh.d.show.call(this)
};
Lh.prototype.ja = function() {
    this.c && (this.c.u && null !== this.c.u) && this.render()
};
Lh.prototype.i = function() {
    Q(this.a, "hidden", !0);
    s(this.Dd, function(a) {
        a.c && a.j && a.j.pauseVideo && a.j.pauseVideo()
    }, this);
    Lh.d.i.call(this)
};
Lh.prototype.render = function() {
    s(this.Dd, function(a, b) {
        a.setData(this.c.u[b])
    }, this)
};

function Mh() {
    S.call(this);
    this.Mb = !0;
    this.Bb = !1;
    this.Tc = E(Nh);
    this.ai = E(Oh);
    this.vi = new Bh(this, [th, Mg, Eh, vh, Fh, Dh, sh, uh]);
    this.ye = {
        message: new Lg(this),
        "main-player": new Zg(this),
        "time-slots": new Qg(this),
        "live-grid": new Lh(this),
        "end-of-day": new uh(this)
    };
    this.m = new Zf;
    O(this.m, "navigate", this.$b, !1, this);
    this.m.Fa(!0);
    this.refresh();
    this.ae()
}
p(Mh, S);
var Nh = "js-photo-stream",
    Oh = "js-qa-feed",
    Ph = window.GOOGLE_PLUS_API_KEY;
g = Mh.prototype;
g.M = function(a, b) {
    this.ye[a].setData(b)
};
g.N = function(a, b) {
    var c = this.ye[a];
    c.md || c.show(b)
};
g.h = function(a, b) {
    var c = this.ye[a];
    c.md && c.i(b)
};
g.$b = function() {
    this.c && Qh(this)
};

function Qh(a) {
    var b = Rh(a);
    Ch(a.vi, b.state, b.data, n(function() {
        this.Mb && (this.Gc(), this.Mb = !1)
    }, a))
}
g.Gc = function() {
    this.qb = new qe(this.Tc, "107150983484568200135", "6025966182952561553");
    this.Mf = new zh(this.ai, "+GoogleDevelopers", Ph);
    TweenMax.to(document.body, 0.5, {
        opacity: 1
    })
};
g.setData = function(a) {
    this.c = a;
    Qh(this)
};
g.getData = ba("c");
g.refresh = function() {
    this.qb && this.qb.refresh();
    this.Mf && this.Mf.refresh();
    Cf("/events/io/schedule/live/json", n(function(a) {
        if (Mf(a.target)) {
            var b = a.target,
                c = Nf(b);
            a = Of(b).Date || Of(b).date;
            a = moment(a);
            b = Of(b).Age || Of(b).age || 0;
            (b = parseInt(b, 10)) && a.add(1E3 * b);
            c = Sh(c);
            b = Th(c, a);
            this.setData({
                Ii: c,
                ia: b,
                currentTime: a
            })
        } else this.c || this.setData(null)
    }, this))
};

function Th(a, b) {
    var c, d, e, f, h, k;
    s(a, function(a, h) {
        var k = moment(a[0][0].localized_start);
        b.year() !== k.year() || b.month() !== k.month() || c || (b.dayOfYear() < k.dayOfYear() ? c = -1 : b.dayOfYear() > k.dayOfYear() ? c = 0 : (c = 1, d = h, Sa(a, function(a, c) {
            var d = moment(a[0].localized_start);
            (d = b.hours() === d.hours()) && (e = c);
            return !d
        }), Sa(a, function(a, c) {
            var d = moment(a[0].localized_start);
            (d = b.hours() < d.hours()) && (f = c);
            return !d
        })))
    });
    var q;
    1 === c ? (q = a[d], h = void 0 === e ? null : q[e], k = void 0 === f ? null : q[f]) : -1 === c ? (q = "before", k = h = null) :
        0 === c && (q = "after", k = h = null);
    return {
        Bc: q,
        u: h,
        G: k,
        sh: 1 === c && d === a.length - 1,
        Ni: !1
    }
}

function Sh(a) {
    var b = [];
    Ja(a, function(a) {
        var d = [];
        Ja(a, function(a) {
            var b = [];
            a.length && (s(a, function(a) {
                if (a.live_stream_id) {
                    var c = "";
                    s(a.categories, function(a) {
                        "distribute" === a.slug ? c = "Distribute" : "develop" === a.slug ? c = "Develop" : "design" === a.slug && (c = "Design")
                    });
                    a.themeTitle = c;
                    a.theme = c.toLowerCase();
                    b.push(a)
                }
            }), b.length && d.push(b))
        });
        d.length && b.push(d)
    });
    return b
}

function Rh(a) {
    if (!a.c) return {
        state: "error"
    };
    var b = a.c.ia,
        c = a.m.W(),
        d = Uh(a);
    if (d) return {
        state: "keynote",
        data: {
            da: d
        }
    };
    if ("before" === b.Bc) return {
        state: "before"
    };
    if ("after" === b.Bc) return {
        state: "end-of-day",
        data: {
            Id: 2
        }
    };
    if ("object" === typeof b.Bc) {
        if (null === b.u && b.G) return (b = b.G && Ta(b.G, function(a) {
            return a.title && a.title.toLowerCase().match(/keynote/)
        })) ? (b = moment(b.localized_start).valueOf(), a = a.c.currentTime.valueOf(), a = b - a, 9E5 >= a && 0 < a ? {
            state: "keynote",
            data: {
                Wi: !1
            }
        } : {
            state: "pre-keynote"
        }) : {
            state: "upcoming"
        };
        if (null === b.u && null === b.G) return b.sh ? {
            state: "end-of-day",
            data: {
                Id: 2
            }
        } : {
            state: "end-of-day",
            data: {
                Id: 1
            }
        };
        if (c) {
            if (b = Ta(b.u, function(a) {
                return a.live_stream_id === c
            }, a)) return {
                state: "playing",
                data: {
                    da: b
                }
            };
            a.m.Ga("")
        }
        return {
            state: "live-streaming"
        }
    }
    return {
        state: "error"
    }
}

function Vh(a) {
    if (a = a.c.ia.Bc)
        if (a = u(a, function(a) {
            return Ta(a, function(a) {
                return a.title && a.title.toLowerCase().match(/keynote/)
            })
        }), (a = Pa(a, function(a) {
            return a
        })) && 0 < a.length) return a[0]
}

function Uh(a) {
    var b = Vh(a);
    if (!b) return !1;
    var c = moment(b.localized_start),
        d = moment(b.localized_finish);
    return a.c.currentTime.unix() >= c.unix() && a.c.currentTime.unix() <= d.unix() ? b : !1
}
g.ae = function() {
    var a = document.createElement("script");
    a.src = "//www.youtube.com/iframe_api";
    Xb(a);
    window.onYouTubeIframeAPIReady = n(this.Ba, this)
};
g.Ba = function() {
    this.Bb = !0;
    this.dispatchEvent(new Pc("onYouTubeIframeAPIReady"))
};

function Wh() {
    L.call(this);
    this.vd = new Mh;
    O(window, "load", function() {
        this.Qa = new Qf(Dg)
    }, !1, this);
    setInterval(n(this.le, this), 6E4)
}
p(Wh, L);
Wh.prototype.f = function() {
    Oc(this.vd);
    this.vd = null;
    s(this.li, Oc);
    this.li = null;
    Wh.d.f.call(this)
};
Wh.prototype.le = function() {
    this.vd.refresh()
};

function Xh() {
    var a = this;
    this.a = E("js-typeout");
    this.Rg = 3;
    this.Ge = E("js-beam", this.a);
    this.Fi = E("js-word", this.a);
    this.rc = P(this.a, "words");
    this.rc = this.rc.split(", ");
    this.P = this.rc.length - 1;
    this.Aa = new ElementVisibleController(this.a);
    this.Aa.on("enter", function() {
        void 0 === a.lc ? Yh(a, !0) : a.lc && a.lc.play()
    });
    this.Aa.on("exit", function() {
        a.lc && a.lc.pause()
    })
}

function Yh(a, b) {
    var c = a.P + 1 === a.rc.length ? 0 : a.P + 1,
        d = a.rc[c],
        e = {
            charIndex: 0
        };
    a.lc = TweenLite.to(e, 0.06 * d.length, {
        charIndex: d.length,
        ease: Linear.easeNone,
        delay: b ? 0 : a.Rg,
        onStart: function() {
            w(this.Ge, "blink")
        },
        onUpdate: function() {
            var a = d.slice(0, ~~e.charIndex);
            ac(this.Fi, a)
        },
        onComplete: function() {
            v(this.Ge, "blink");
            this.P = c;
            Yh(this)
        },
        onStartScope: a,
        onUpdateScope: a,
        onCompleteScope: a
    })
};

function Zh() {
    var a = this,
        b = !1,
        c = E("js-experiment-partial");
    K && v(c, "fallback");
    new Xh;
    I.on("breakpoint", function(d) {
        var e = d[1];
        "mobile" === d[0] ? "enter" === e ? v(c, "fallback") : K || w(c, "fallback") : (K || void 0 !== a.qa || $h("HomeHeader", c, null, function(b) {
            a.qa = b
        }), b || (d = C("js-prevent-load-mobile"), s(d, function(a) {
            x(a, "js-lazy-load") || (a.src = P(a, "src"))
        }), b = !0))
    })
};

function ai(a, b) {
    this.Wh = b;
    this.uh = 37.7847313;
    this.yh = -122.4019778;
    this.Na = new google.maps.LatLng(this.uh, this.yh);
    this.a = a;
    this.F = E("js-map", a);
    this.Bh = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }, {
            color: "#5dc7ff"
        }]
    }];
    this.wi = new google.maps.StyledMapType(this.Bh, {
        name: "Styled Map"
    });
    this.zh = {
        center: this.Na,
        disableDefaultUI: !0,
        scrollwheel: !1,
        draggable: b.draggable,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
        },
        minZoom: 2,
        zoom: 5,
        zoomControl: b.zoomControl,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    };
    this.of = {
        url: "/events/io/images/maps/map-marker.png",
        anchor: new google.maps.Point(b.anchor[0], b.anchor[1]),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(b.scaledSize[0], b.scaledSize[1])
    };
    this.C = new google.maps.Map(this.F, this.zh);
    new google.maps.Marker({
        position: this.Na,
        map: this.C,
        icon: this.of,
        optimized: b.optimized,
        title: "Moscone Center, San Francisco"
    });
    this.C.mapTypes.set("map_style", this.wi);
    this.C.setMapTypeId("map_style");
    this.C.panBy(b.panBy[0], b.panBy[1])
}

function bi(a) {
    var b = !1,
        c;
    s(a, function(a) {
        if (!b) {
            var e = a.types[0];
            "locality" === e ? (c = a.long_name, b = !0) : "administrative_area_level_2" === e ? (c = a.long_name, b = !0) : "administrative_area_level_1" === e ? (c = a.long_name, b = !0) : "country" === e && (c = a.long_name, b = !0)
        }
    });
    return c
}
ai.prototype.Je = function() {
    var a = this;
    window.navigator.geolocation.getCurrentPosition(function(b) {
        b = new google.maps.LatLng(b.coords.latitude, b.coords.longitude);
        (new google.maps.Geocoder).geocode({
            location: b
        }, function(b, d) {
            if (d === google.maps.GeocoderStatus.OK) {
                var e = b[0].address_components;
                a.jb = b[0].geometry.location;
                a.sd = bi(e);
                ci(a)
            } else alert("Location not found! Try again?")
        })
    }, function() {
        a.wh && bd(a.wh)
    })
};

function ci(a) {
    var b = google.maps.geometry.spherical.computeDistanceBetween(a.jb, a.Na),
        b = Math.round(b / 1E3 / 1.609),
        c = ~~(3600 * (b / 88)),
        c = c.toString(),
        c = c.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        d = new google.maps.DistanceMatrixService;
    a.Ld(b, c, d);
    a.Pg = new google.maps.Marker({
        position: a.jb,
        map: a.C,
        icon: a.of,
        optimized: a.Wh.optimized,
        title: a.sd
    });
    a.Ad = new google.maps.LatLngBounds;
    a.Ad.extend(a.Na);
    a.Ad.extend(a.jb);
    a.C.fitBounds(a.Ad);
    a.df = new google.maps.Polyline({
        path: [a.jb, a.Na],
        geodesic: !0,
        strokeColor: "#03a9f4",
        strokeOpacity: 1,
        strokeWeight: 3
    });
    a.df.setMap(a.C)
}
ai.prototype.Ld = function() {
    console.log("displayResults_")
};

function di(a) {
    a.Pg.setMap(null);
    a.df.setMap(null);
    a.C.setZoom(5);
    a.C.setCenter(a.Na)
};

function ei(a, b) {
    ai.call(this, a, b);
    this.zf = E("js-map-location");
    this.Ah = E("js-map-search");
    this.xh = E("js-location-form");
    this.R = E("js-location-input");
    this.Le = E("js-clear-location");
    this.Sg = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    new google.maps.places.Autocomplete(this.R);
    fi(this);
    var c = this;
    Modernizr.geolocation && (this.Ke = Ob("span", {
        "class": "map__cta right js-active icon -location-grey"
    }), Wb(this.Ah, this.Ke), O(this.Ke, "click", function() {
        c.Je()
    }));
    if (!Modernizr.input.placeholder) {
        var d = P(c.R,
            "inputValue");
        c.R.value = d;
        O(c.R, "focus", function() {
            this.value = ""
        });
        O(c.R, "blur", function() {
            this.value = "locationValue"
        });
        O(c.Le, "click", function() {
            c.R.value = "Your location"
        })
    }
    O(this.Le, "click", function() {
        gi(c)
    })
}
p(ei, ai);

function fi(a) {
    a.Sg || O(a.R, "blur", function(b) {
        b.preventDefault();
        a.R.value && !x(a.R, "js-active") && setTimeout(function() {
            hi(a, a.R.value)
        }, 200)
    });
    O(a.xh, "submit", function(b) {
        b.preventDefault();
        hi(a, a.R.value)
    })
}

function hi(a, b) {
    (new google.maps.Geocoder).geocode({
        address: b
    }, function(b, d) {
        if (d == google.maps.GeocoderStatus.OK) {
            var e = b[0].address_components;
            a.jb = b[0].geometry.location;
            a.sd = bi(e);
            ci(a)
        } else alert("Location not found! Try again?")
    })
}
ei.prototype.Ld = function(a, b, c) {
    var d = this;
    (function() {
        d.Dg = E("js-location-name");
        d.Od = E("js-distance");
        d.Vg = E("js-driving");
        d.bh = E("js-flux-capacitor");
        d.Dg.innerHTML = d.sd;
        d.Od.innerHTML = a + " miles";
        d.bh.innerHTML = b + " secs";
        c.getDistanceMatrix({
            origins: [d.jb],
            destinations: [d.Na],
            travelMode: google.maps.TravelMode.DRIVING,
            avoidHighways: !1,
            avoidTolls: !1
        }, function(a, b) {
            if (b != google.maps.DistanceMatrixStatus.OK) alert("Error retrieving Google Maps data: " + b);
            else
                for (var c = a.originAddresses, k = 0; k < c.length; k++)
                    for (var q =
                        a.rows[k].elements, t = 0; t < q.length; t++) d.Vg.innerHTML = q[t].duration ? q[t].duration.text : '<a href="//google.com/flights" target="_blank" class="g-color-blue">Find a flight</a>'
        });
        db(d.zf, "js-active");
        db(d.R, "js-active");
        TweenMax.to(d.a, 0.5, {
            height: 600,
            ease: Expo.easeOut
        });
        TweenMax.to({
            x: 1
        }, 0.25, {
            x: 0,
            onComplete: function() {
                var a = d.C.getCenter();
                google.maps.event.trigger(d.C, "resize");
                d.C.panTo(a)
            }
        })
    })()
};

function gi(a) {
    a.R.value = "";
    di(a);
    db(a.zf, "js-active");
    w(a.R, "js-active");
    TweenMax.to(a.a, 0.5, {
        height: 545,
        ease: Expo.easeOut
    });
    TweenMax.to({
        x: 0
    }, 0.25, {
        x: 1,
        onComplete: function() {
            var b = a.C.getCenter();
            google.maps.event.trigger(a.C, "resize");
            a.C.panTo(b)
        }
    })
};

function ii(a, b) {
    this.Kg = E("js-cta", a);
    this.Od = E("js-distance", a);
    this.He = E("js-before", a);
    this.td = E("js-after", a);
    this.Ee = E("js-after-delay", this.a);
    TweenMax.set(this.td, {
        autoAlpha: 0,
        y: -100
    });
    TweenMax.set(this.Ee, {
        autoAlpha: 0,
        y: 100
    });
    ai.call(this, a, b);
    Modernizr.geolocation && fd(this.Kg, this.Je, this, !0)
}
p(ii, ai);
ii.prototype.Ld = function(a) {
    var b = this,
        c = H(this.td).height,
        d = window.innerHeight || document.documentElement.clientHeight;
    this.Od.innerHTML = a + " miles";
    TweenMax.to(this.a, 0.4, {
        height: Math.max(~~(0.75 * d), c),
        onComplete: function() {
            var a = b.C.getCenter();
            google.maps.event.trigger(b.C, "resize");
            b.C.panTo(a);
            ji(b)
        }
    });
    TweenMax.to(this.He, 0.4, {
        y: 0.75 * c,
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: function() {
            F(this.He, "display", "none")
        },
        onCompleteScope: this
    });
    TweenMax.to(this.td, 0.4, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
    });
    TweenMax.to(this.Ee, 0.4, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: 0.4
    })
};

function ji(a) {
    var b = {
            y: Nb(document).y
        },
        c = jc(a.a, !0),
        c = c.y;
    TweenMax.to(b, 0.3, {
        y: c,
        onUpdate: function() {
            window.scrollTo(0, b.y)
        },
        onComplete: function() {
            window.scrollTo(0, c)
        }
    })
};

function ki(a) {
    L.call(this);
    this.a = a;
    this.L = P(this.a, "accordionName");
    this.ce = !1;
    this.Jb = [];
    li(this);
    mi.set(this.L, this)
}
p(ki, L);
var mi = new Ad;
ki.prototype.f = function() {
    mi.remove(this.L);
    this.a = null;
    s(this.Jb, function(a) {
        a.off("tap")
    });
    this.Jb.length = 0;
    ki.d.f.call(this)
};

function li(a) {
    a.qh = C("js-accordion-label", a.a);
    s(a.qh, function(b) {
        var c = bc(b, "js-accordion-item");
        this.Jb.push((new Hammer(b)).on("tap", function() {
            if (x(c, "is-active")) w(c, "is-active");
            else {
                var b = C("is-active", a.a);
                s(b, function(a) {
                    w(a, "is-active")
                });
                v(c, "is-active");
                var e = {
                        y: Nb(document).y
                    },
                    f = jc(c).y;
                TweenMax.to(e, 0.3, {
                    y: f,
                    onUpdate: function() {
                        window.scrollTo(0, e.y)
                    },
                    onComplete: function() {
                        window.scrollTo(0, f)
                    }
                })
            }
        }))
    }, a)
}
ki.prototype.open = function() {
    this.ce = !0;
    v(this.a, "is-active")
};
ki.prototype.close = function() {
    this.ce = !1;
    w(this.a, "is-active")
};
ki.prototype.toggle = function() {
    this.ce ? this.close() : this.open()
};

function ni(a, b) {
    a.Jb.push((new Hammer(b)).on("tap", function() {
        db(b, "is-active");
        a.toggle()
    }))
}

function oi(a, b) {
    a.Jb.push((new Hammer(b)).on("tap", function() {
        a.close();
        var b = C("is-active", a.a);
        s(b, function(a) {
            w(a, "is-active")
        })
    }))
}

function pi() {
    var a;
    a = a || "js-accordion";
    var b = C(a);
    s(b, function(a) {
        new ki(a)
    });
    b = C(a + "-toggle");
    s(b, function(a) {
        var b = P(a, "accordionTarget");
        b ? ni(mi.get(b), a) : a.style.display = "none"
    });
    a = C(a + "-close");
    s(a, function(a) {
        var b = P(a, "accordionTarget");
        b && oi(mi.get(b), a)
    })
};

function qi(a) {
    if (!(this instanceof qi)) return new qi(a);
    this.a = a;
    this.ea = C("js-match-item", this.a);
    a = n(this.Hf, this);
    O(window, window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize", a);
    a()
}
qi.prototype.Hf = function() {
    var a = 0;
    s(this.ea, function(b) {
        b.style.height = "";
        b = H(b);
        a = Math.max(a, b.height)
    });
    s(this.ea, function(b) {
        F(b, "height", a + "px")
    })
};
qi.prototype.refresh = function() {
    this.ea = C("js-match-item", this.a);
    this.Hf()
};

function Rg() {
    return qi.apply(qi, arguments)
};

function Wf(a, b, c, d) {
    L.call(this);
    this.a = a;
    this.L = P(this.a, "pagingNamespace");
    this.L || (this.L = "paging" + (new Date).getTime());
    this.Ug = "boolean" === typeof c ? c : !1;
    this.Eb = "function" === typeof d ? d : aa();
    this.Ua = (this.Ua = P(this.a, "transition")) || "slide";
    this.se = "true" === P(this.a, "staggerIn");
    this.Oa = C("js-pane", this.a);
    this.Lh = C("js-pane-forward", this.a);
    this.xg = C("js-pane-back", this.a);
    this.J = H(this.Oa[0]).height;
    this.od = H(this.a).width;
    this.qe = this.Oa.length;
    this.P = 0;
    this.oa = !1;
    s(this.Lh, function(a) {
        F(a,
            "cursor", "pointer");
        (new Hammer(a)).on("tap", n(this.kf, this))
    }, this);
    "object" === typeof b && s(b, function(a) {
        (new Hammer(a)).on("tap", n(this.kf, this))
    }, this);
    s(this.xg, function(a) {
        F(a, "cursor", "pointer");
        (new Hammer(a)).on("tap", n(this.gh, this))
    }, this);
    var e = n(this.refresh, this),
        f = "true" === P(this.a, "mobileOnly"),
        h = this,
        k;
    k = window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize";
    I.on("breakpoint", function(a) {
        var b = a[1];
        "mobile" === a[0] && (f && "exit" === b && h.za ? (bd(h.za),
            h.za = null, ri(h)) : "enter" !== b || h.za || (si(h), h.za = O(window, k, e)), h.oa = "enter" === b)
    });
    f || (si(this), this.za = O(window, k, e));
    Sg.set(this.L, this);
    L.call(this)
}
p(Wf, L);
var Sg = new Ad;
Wf.prototype.refresh = function() {
    this.J = H(this.Oa[this.P]).height;
    this.od = H(this.a).width;
    F(this.a, {
        "min-height": this.J + "px"
    })
};

function ri(a) {
    F(a.a, {
        "min-height": "",
        "z-index": ""
    });
    s(a.Oa, function(a) {
        F(a, {
            display: "",
            position: "",
            top: "",
            left: "",
            right: "",
            width: "",
            "z-index": ""
        });
        TweenMax.set(a, {
            x: 0
        })
    }, a)
}

function si(a) {
    F(a.a, {
        "min-height": a.J + "px",
        "z-index": 12
    });
    TweenMax.set(a.a, {
        "min-height": a.J
    });
    s(a.Oa, function(a, c) {
        F(a, {
            display: 0 === c || "none" === this.Ua ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            "z-index": 0 === c ? 10 : 0
        });
        "slide" === this.Ua && TweenMax.set(a, {
            x: 0 === c ? 0 : this.od
        });
        if (this.se) {
            var d = C("js-stagger-in", a),
                d = [].slice.call(d),
                e = d.slice(0);
            e.reverse();
            a.re = d;
            a.hi = e
        }
    }, a)
}

function ti(a, b, c) {
    var d = a.P,
        e = a.Oa[b],
        f = a.Oa[d],
        h = H(e).height;
    a.se && TweenMax.to(e.re, 0, {
        x: 50 * c,
        opacity: 0
    });
    a.J !== h && (a.J = H(e).height, setTimeout(n(function() {
        TweenMax.to(this.a, "none" === this.Ua ? 0 : 0.5, {
            "min-height": this.J,
            ease: Expo["ease-out"]
        })
    }, a), 250));
    "slide" === a.Ua ? (TweenMax.set(e, {
        x: -1 * c * a.od
    }), TweenMax.to(f, 0.5, {
        x: c * a.od,
        ease: Expo.easeOut
    }), TweenMax.to(e, 0.5, {
        x: 0,
        ease: Expo.easeOut,
        onStart: function() {
            F(e, {
                display: "block",
                "z-index": 10
            });
            F(f, {
                position: "absolute"
            });
            this.P = b;
            this.Eb(e)
        },
        onComplete: function() {
            F(f, {
                display: "none",
                "z-index": 0
            });
            F(e, {
                position: "relative"
            })
        },
        onStartScope: a
    })) : "fade" === a.Ua ? (TweenMax.to(f, 0.5, {
        autoAlpha: 0,
        onComplete: function() {
            F(f, {
                display: "none",
                zIndex: 0
            })
        }
    }), TweenMax.to(e, 0.5, {
        autoAlpha: 1,
        onStart: function() {
            F(e, "display", "block");
            this.Eb(e)
        },
        onComplete: function() {
            F(e, "zIndex", 10);
            this.P = b
        },
        onStartScope: a,
        onCompleteScope: a
    })) : (F(f, {
        opacity: 0,
        zIndex: 0
    }), F(e, {
        opacity: 1,
        zIndex: 10
    }), a.P = b, a.Eb(e));
    a.se && (a.oa ? TweenMax.set(e.re, {
        opacity: 1,
        x: 0
    }) : s(b < d ? e.hi : e.re, function(a, b) {
        TweenMax.to(a,
            0.1, {
                opacity: 1,
                delay: 0.1 * b + 0.05
            }, 0.1);
        TweenMax.to(a, 0.6, {
            x: 0,
            delay: 0.1 * b
        })
    }))
}
Wf.prototype.kf = function() {
    var a = this.P + 1 === this.qe ? 0 : this.P + 1;
    this.Ug && 0 === a || ti(this, a, -1)
};
Wf.prototype.gh = function() {
    ti(this, 0 > this.P - 1 ? this.qe - 1 : this.P - 1, 1)
};

function Vg(a, b) {
    var c = Math.min(b || 0, a.qe - 1);
    a.P !== c && ti(a, c, 1)
};

function ui() {
    var a = E("js-experiment-partial");
    K && v(a, "fallback");
    var b = this;
    I.on("breakpoint", function(c) {
        var d = c[1];
        "mobile" === c[0] ? "enter" === d ? (v(a, "fallback"), vi()) : K || w(a, "fallback") : (K || void 0 !== b.qa || $h("LogisticsHeader", a, {
            background: "#ff0000"
        }, function(a) {
            b.qa = a
        }), wi())
    })
}

function vi() {
    if (void 0 === tc && Modernizr.geolocation) {
        tc = null;
        var a = E("js-mobile-map"),
            b = new ElementVisibleController(a),
            c = window.innerWidth || document.documentElement.clientWidth,
            d = H(a).height,
            e = function() {
                tc = new ii(a, {
                    draggable: !1,
                    anchor: [10, 32],
                    scaledSize: [20, 32],
                    zoomControl: !1,
                    optimized: !0,
                    panBy: [~~(0.25 * -c), ~~(0.25 * -d)]
                });
                b.off("enter", e)
            };
        b.on("enter", e)
    }
}

function wi() {
    if (void 0 === uc && Modernizr.geolocation) {
        uc = null;
        var a = E("js-desktop-map"),
            b = new ElementVisibleController(a),
            c = function() {
                uc = new ei(a, {
                    draggable: !0,
                    anchor: [17, 51],
                    scaledSize: [33, 51],
                    zoomControl: !0,
                    optimized: !0,
                    panBy: [0, 0]
                });
                b.off("enter", c)
            };
        b.on("enter", c)
    }
};

function xi(a) {
    function b() {
        this.ud();
        c.off("enter", b, this)
    }
    this.a = a;
    this.vg = C("js-card-point", this.a);
    this.ea = C("js-card", this.a);
    TweenMax.set(this.ea, {
        y: 50
    });
    var c = new ElementVisibleController(this.vg);
    c.on("enter", b, this)
}
xi.prototype.ud = function() {
    s(this.ea, function(a, b) {
        TweenMax.to(a, 0.1, {
            opacity: 1,
            delay: 0.3 * b + 0.05
        }, 0.3);
        TweenMax.to(a, 0.6, {
            y: 0,
            delay: 0.3 * b,
            ease: Expo.easeOut
        })
    })
};

function yi(a, b, c) {
    var d = this;
    this.a = a;
    this.L = P(this.a, "toggleName");
    this.jc = C("js-toggler--" + this.L, this.a);
    this.B = E("js-toggle-content--" + this.L, this.a);
    this.Fc = P(this.a, "direction");
    this.Fc = "left" === this.Fc ? -1 : 1;
    this.Xe = b;
    this.ca = c ? !0 : !1;
    c && this.ta(!1);
    s(this.jc, function(a) {
        (new Hammer(a)).on("tap", function() {
            d.ta(!0)
        })
    })
}
yi.prototype.ta = function(a) {
    if (this.ca) {
        var b = H(this.B).width;
        TweenMax.to(this.B, a ? this.Xe : 0, {
            x: this.Fc * b,
            ease: Expo.easeOut,
            onComplete: function() {
                F(this.B, "display", "none")
            },
            onCompleteScope: this
        })
    } else TweenMax.to(this.B, a ? this.Xe : 0, {
        x: 0,
        ease: Expo.easeOut,
        onStart: function() {
            F(this.B, "display", "block")
        },
        onStartScope: this
    });
    this.ca = !this.ca
};

function zi(a, b, c) {
    var d = this;
    this.uc = Kb("body", "", void 0)[0];
    this.$a = [];
    this.Ra = E("js-basement-sibling", a);
    this.mg = this.te = !1;
    I.on("breakpoint", function(a) {
        var b = a[0];
        a = a[1];
        "x-large" === b && d.ta("exit" === a, !0);
        "mobile" === b && ("exit" === a && d.ca && d.ta(!0, !1), d.mg || "enter" !== a || (TweenMax.set(d.B, {
            x: d.Fc * H(d.B).width
        }), d.mg = !0))
    });
    yi.call(this, a, b, c)
}
p(zi, yi);
zi.prototype.ta = function(a, b) {
    b && (this.te = !this.te);
    zi.d.ta.call(this, a);
    if (this.ca && !this.te) Ai(this);
    else {
        F(this.Ra, "position", "");
        window.scrollTo(0, this.Hd);
        TweenMax.set(this.Ra, {
            clearProps: "y"
        });
        TweenMax.set(this.jc, {
            clearProps: "y"
        });
        for (var c = 0, d = this.$a.length; c < d; c++) bd(this.$a[c]);
        this.$a = []
    }
    Q(this.uc, "basement-open", this.ca)
};

function Ai(a) {
    function b(a) {
        a = a || window.event;
        a.stopPropagation();
        a.preventDefault();
        a.returnValue = !1
    }
    a.Hd = Nb(document).y;
    TweenMax.set(a.Ra, {
        y: -a.Hd
    });
    TweenMax.set(a.jc, {
        y: a.Hd
    });
    F(a.Ra, "position", "fixed");
    a.$a.push(O(a.Ra, "DOMMouseScroll", b));
    a.$a.push(O(a.Ra, "mousewheel", b));
    a.$a.push(O(a.Ra, "touchmove", b))
};

function Bi() {
    var a = this;
    this.a = E("js-back-to-top");
    this.J = H(this.a).height;
    TweenMax.set(this.a, {
        autoAlpha: 0,
        y: this.J
    });
    (new Hammer(this.a)).on("tap", function() {
        Ci(a)
    });
    this.Mh = E("js-toggle-back-to-top");
    this.Aa = new ElementVisibleController(this.Mh);
    this.Aa.on("enter", function() {
        Di(a, !1)
    });
    this.Aa.on("exit", function() {
        Di(a, !0)
    });
    this.gf = E("section.-footer");
    this.ff = new ElementVisibleController(this.gf);
    this.ff.on("enter", function() {
        TweenLite.to(a.a, 0.2, {
            marginBottom: H(a.gf).height,
            ease: Expo.easeOut
        })
    });
    this.ff.on("exit", function() {
        TweenLite.to(a.a, 0.2, {
            marginBottom: 0,
            ease: Expo.easeOut
        })
    })
}

function Di(a, b) {
    TweenMax.to(a.a, 0.3, {
        autoAlpha: b ? 1 : 0,
        ease: Expo.easeOut
    });
    TweenMax.to(a.a, 0.6, {
        y: b ? 0 : a.J,
        ease: Expo.easeOut
    })
}

function Ci(a) {
    var b = {
        y: null !== window.pageYOffset ? window.pageYOffset : null !== document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
    };
    TweenLite.to(a.a, 0.1, {
        marginBottom: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(b, 0.5, {
        y: 0,
        delay: 0.1,
        ease: Expo.easeOut,
        onUpdate: function() {
            window.scrollTo(0, b.y)
        },
        onComplete: function() {
            window.scrollTo(0, 0)
        }
    })
};

function Ei(a) {
    var b = this;
    this.U = a;
    this.O = void 0;
    var c = !1;
    this.U.href ? (target = this.U.href.split("#"), target = 0 < target.length ? target[1] : this.U.href, this.O = B(target), c = !0) : (target = P(this.U, "scrollToTarget"), this.O = pe('[data-scroll-to-name="' + target + '"]')[0]);
    this.Oh = c ? 30 : 0;
    O(this.U, "click", function(a) {
        a.preventDefault();
        c && (window.location.hash = "!/" + b.O.id);
        Fi(b, !0)
    })
}

function Fi(a, b) {
    var c = {
            y: Nb(document).y
        },
        d = ~~kc(a.O).y - a.Oh;
    TweenLite.to(c, b ? 0.5 : 0, {
        y: d,
        ease: Expo.easeOut,
        onUpdate: function() {
            window.scrollTo(0, c.y)
        },
        onComplete: function() {
            window.scrollTo(0, d)
        }
    })
};

function Gi() {
    new Bi;
    var a = null;
    0 < window.location.hash.indexOf("!/") && (a = window.location.hash.split("!/"), a = 0 < a.length ? a[1] : null);
    var b = {};
    s(C("js-scroll-to"), function(a) {
        a = new Ei(a);
        b[a.O.id] = a
    });
    O(window, "load", function() {
        void 0 !== b[a] && Fi(b[a], !1)
    }, !1)
};

function Hi() {
    var a = this;
    this.kg = E("js-videos-holder");
    O(window, "load", function() {
        this.bb = new Ii;
        this.Qa = new Qf(Eg, "/io14videos")
    }, !1, this);
    this.oe();
    var b = E("js-experiment-partial");
    K && v(b, "fallback");
    I.on("breakpoint", function(c) {
        var d = c[1];
        "mobile" === c[0] ? "enter" === d ? v(b, "fallback") : K || w(b, "fallback") : K || void 0 !== a.qa || $h("VideosHeader", b, {
            background: "#ff0000"
        }, function(b) {
            a.qa = b
        })
    })
}
Hi.prototype.oe = function() {
    if (!this.sa) {
        this.sa = [];
        var a = C("js-sticky-container"),
            b = this;
        s(a, function(a) {
            var d = C("js-sticky-element", a);
            s(d, function(d) {
                var f = qd(d, "timeslot__label") ? 120 : 0;
                d = morlock.stickyElement(d, a, {
                    marginTop: f
                });
                b.sa.push(d)
            })
        });
        O(window, "resize", n(this.Of, this));
        this.Of()
    }
};
Hi.prototype.Of = function() {
    this.kg && F(this.kg, {
        "min-height": window.innerHeight + "px"
    })
};

function Ji(a) {
    this.v = a;
    this.F = null;
    this.Af = [];
    var b = this;
    google.maps.event.addDomListener(window, "load", function() {
        Cf("/events/io/io-extended/event", function(a) {
            Ki(b, Nf(a.target).events)
        })
    })
}

function Ki(a, b) {
    a.c = b;
    a.F = new google.maps.Map(a.v, {
        zoom: 2,
        minZoom: 2,
        scrollwheel: !1,
        center: new google.maps.LatLng(37.7749295, -122.4194155),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: !0,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        optimized: !0,
        disableDefaultUI: !0
    });
    for (var c = new google.maps.MarkerImage("/events/io/images/map-pin.png", new google.maps.Size(22, 32)), d = 0; d < a.c.length; d++) {
        var e = new google.maps.LatLng(a.c[d].latitude, a.c[d].longitude),
            e = new google.maps.Marker({
                position: e,
                icon: c,
                title: b.event_name
            });
        a.Af.push(e);
        (function(a, b, c) {
            var d = new google.maps.InfoWindow({
                content: Cg({
                    name: c.event_name,
                    url: c.link
                }).content
            });
            google.maps.event.addListener(b, "click", function() {
                d.open(a, b)
            })
        })(a.F, e, a.c[d])
    }
    new MarkerClusterer(a.F, a.Af, {
        enableRetinaIcons: !0,
        styles: [{
            url: "/events/io/images/map-dot.png",
            width: 45,
            height: 45,
            textColor: "#263238",
            textSize: 15
        }]
    })
};

function Li() {
    var a = E("js-experiment-partial");
    K && v(a, "fallback");
    var b = this;
    I.on("breakpoint", function(c) {
        var e = c[1];
        "mobile" === c[0] ? "enter" === e ? v(a, "fallback") : K || w(a, "fallback") : K || void 0 !== b.qa || $h("ExtendedHeader", a, {
            background: "#37464f"
        }, function(a) {
            b.qa = a
        })
    });
    var c = E("js-events-map");
    c && new Ji(c)
};

function Mi(a, b) {
    L.call(this);
    this.Bf = b;
    this.Nb = [];
    if (a > this.Bf) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (var c = 0; c < a; c++) this.Nb.push(this.Ac())
}
p(Mi, L);
g = Mi.prototype;
g.Oe = null;
g.We = null;

function Ni(a, b) {
    a.Nb.length < a.Bf ? a.Nb.push(b) : a.Md(b)
}
g.Ac = function() {
    return this.Oe ? this.Oe() : {}
};
g.Md = function(a) {
    if (this.We) this.We(a);
    else if (na(a))
        if (ma(a.xa)) a.xa();
        else
            for (var b in a) delete a[b]
};
g.f = function() {
    Mi.d.f.call(this);
    for (var a = this.Nb; a.length;) this.Md(a.pop());
    delete this.Nb
};

function Oi() {
    this.aa = [];
    this.ge = new Ad;
    this.cg = this.dg = this.eg = this.Xf = 0;
    this.hc = new Ad;
    this.Me = this.bg = 0;
    this.Hh = 1;
    this.Rd = new Mi(0, 4E3);
    this.Rd.Ac = function() {
        return new Pi
    };
    this.Yf = new Mi(0, 50);
    this.Yf.Ac = function() {
        return new Qi
    };
    var a = this;
    this.Xd = new Mi(0, 2E3);
    this.Xd.Ac = function() {
        return String(a.Hh++)
    };
    this.Xd.Md = aa()
}
Oi.prototype.X = mf("goog.debug.Trace");

function Qi() {
    this.we = this.time = this.count = 0
}
Qi.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.we && a.push(" [VarAlloc = ", this.we, "]");
    return a.join("")
};

function Pi() {}

function Ri(a, b, c, d) {
    var e = []; - 1 == c ? e.push("    ") : e.push(Si(a.Ye - c));
    e.push(" ", Ti(a.Ye - b));
    0 == a.Sd ? e.push(" Start        ") : 1 == a.Sd ? (e.push(" Done "), e.push(Si(a.Xi - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.Bi && e.push("[VarAlloc ", a.Bi, "] ");
    return e.join("")
}
Pi.prototype.toString = function() {
    return null == this.type ? this.Hg : "[" + this.type + "] " + this.Hg
};
Oi.prototype.reset = function() {
    for (var a = 0; a < this.aa.length; a++) {
        var b = this.Rd.id;
        b && Ni(this.Xd, b);
        Ni(this.Rd, this.aa[a])
    }
    this.aa.length = 0;
    this.ge.clear();
    this.Xf = ua();
    this.Me = this.bg = this.cg = this.dg = this.eg = 0;
    b = this.hc.ma();
    for (a = 0; a < b.length; a++) {
        var c = this.hc.get(b[a]);
        c.count = 0;
        c.time = 0;
        c.we = 0;
        Ni(this.Yf, c)
    }
    this.hc.clear()
};
Oi.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.aa.length; d++) {
        var e = this.aa[d];
        1 == e.Sd && c.pop();
        a.push(" ", Ri(e, this.Xf, b, c.join("")));
        b = e.Ye;
        a.push("\n");
        0 == e.Sd && c.push("|  ")
    }
    if (0 != this.ge.jf()) {
        var f = ua();
        a.push(" Unstopped timers:\n");
        zd(this.ge, function(b) {
            a.push("  ", b, " (", f - b.startTime, " ms, started at ", Ti(b.startTime), ")\n")
        })
    }
    b = this.hc.ma();
    for (d = 0; d < b.length; d++) c = this.hc.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.bg, "\n", "Total comments created ",
        this.Me, "\n", "Overhead start: ", this.eg, " ms\n", "Overhead end: ", this.dg, " ms\n", "Overhead comment: ", this.cg, " ms\n");
    return a.join("")
};

function Si(a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
}

function Ti(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Oi;

function Ui(a) {
    this.v = a;
    this.hb = !1;
    this.mh = 400;
    this.lh = 3E3;
    this.ti = 800;
    this.ri = 1E3;
    this.uf = 0;
    this.$d = !1;
    this.Mb = !0;
    this.Gc = !1;
    this.La = null;
    this.kh = u(["p", "c", "w", "t"], function(a) {
        return {
            type: a,
            icons: Zb(B(a + "-icons"))
        }
    }, this);
    this.zc = B("c-reveal");
    this.nd = B("w-reveal");
    this.Sc = B("p-reveal");
    this.dd = B("t-reveal");
    Ja({
        phone_1_: this.ef,
        watch_1_: this.ef,
        computer_1_: this.dh,
        tablet_1_: this.eh
    }, this.vh, this);
    a = new ElementVisibleController(this.v);
    a.on("enter", this.Wg, this);
    a.on("exit", this.Xg, this);
    I.on("breakpoint",
        this.pa, this);
    a = I.getActiveBreakpoints()[0];
    Vi(this, a)
}
g = Ui.prototype;
g.pa = function(a) {
    var b = a[0];
    "enter" === a[1] && Vi(this, b)
};
g.vh = function(a, b) {
    var c = B(b);
    c.style.cursor = "pointer";
    (new Hammer(c)).on("tap", n(a, this))
};
g.Wg = function() {
    this.$d = !0;
    this.Mb && this.ud()
};
g.Xg = function() {
    this.$d = !1
};
g.ud = function() {
    this.Mb = !1;
    var a = this.mh / 1E3;
    TweenLite.fromTo(B("phone_1_"), 0.6, {
        x: -144
    }, {
        x: 0,
        ease: Expo.easeOut,
        delay: a
    });
    TweenLite.fromTo(B("tablet_1_"), 0.6, {
        x: 144
    }, {
        x: 0,
        ease: Expo.easeOut,
        delay: a
    });
    TweenLite.fromTo(B("p-cta"), 0.4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: a + 1
    });
    TweenLite.fromTo(B("c-cta"), 0.4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: a + 1.1
    });
    TweenLite.fromTo(B("t-cta"), 0.4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: a + 1.2
    });
    TweenLite.fromTo(B("watch_1_"),
        0.8, {
            y: 150
        }, {
            y: 0,
            ease: Elastic.easeOut.config(1, 0.75),
            delay: a + 1.8,
            onComplete: function() {
                this.Gc = !0
            },
            onCompleteScope: this
        })
};

function Vi(a, b) {
    a.hb && "mobile" === b ? a.hb && (a.hb = !1, clearInterval(a.wg)) : a.hb || "mobile" === b || a.hb || (a.hb = !0, a.fg(), a.wg = setInterval(n(a.fg, a), a.lh))
}
g.fg = function() {
    this.$d && this.Gc && (this.uf++, s(this.kh, function(a, b) {
        0 === this.uf % (a.icons.length - 1) && TweenLite.set(a.icons, {
            x: 0,
            y: 0
        });
        TweenLite.to(a.icons, this.ri / 1E3, {
            x: "p" === a.type ? "-=0" : "-=32",
            y: "p" !== a.type ? "-=0" : "-=32",
            delay: this.ti / 1E3 * b,
            ease: Expo.easeInOut
        })
    }, this))
};

function Wi(a) {
    a.La = null;
    a.zc.setAttribute("display", "none");
    a.nd.setAttribute("display", "none");
    a.Sc.setAttribute("display", "none");
    a.dd.setAttribute("display", "none");
    TweenLite.to(B("phone_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(B("watch_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(B("tablet_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    })
}
g.dh = function() {
    "computer" === this.La ? Wi(this) : (this.La = "computer", this.zc.setAttribute("display", "true"), this.nd.setAttribute("display", "none"), this.Sc.setAttribute("display", "none"), this.dd.setAttribute("display", "none"), TweenLite.to(B("phone_1_"), 0.6, {
        x: -20,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), 0.6, {
        x: -60,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), 0.6, {
        x: 100,
        ease: Expo.easeOut
    }))
};
g.eh = function() {
    "tablet" === this.La ? Wi(this) : (this.La = "tablet", this.zc.setAttribute("display", "none"), this.nd.setAttribute("display", "none"), this.Sc.setAttribute("display", "none"), this.dd.setAttribute("display", "true"), TweenLite.to(B("phone_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), 0.6, {
        x: -50,
        ease: Expo.easeOut
    }))
};
g.ef = function() {
    "phone_watch" === this.La ? Wi(this) : (this.La = "phone_watch", this.zc.setAttribute("display", "none"), this.nd.setAttribute("display", "true"), this.Sc.setAttribute("display", "true"), this.dd.setAttribute("display", "none"), TweenLite.to(B("phone_1_"), 0.6, {
        x: 60,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), 0.6, {
        x: 80,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), 0.6, {
        x: 0,
        ease: Expo.easeOut
    }))
};

function Xi() {
    var a = E("js-experiment-partial");
    a && (K && rd(a, "fallback"), I.on("breakpoint", function(b) {
        var d = b[1];
        "mobile" === b[0] ? "enter" === d ? rd(a, "fallback") : K || sd(a, "fallback") : K || void 0 !== this.qa || $h("SandboxHeader", a, null, n(function(a) {
            this.qa = a
        }, this))
    }, this));
    var b = C("js-card-expand");
    s(b, yc);
    Modernizr.inlinesvg && Modernizr.csstransforms ? new Ui(B("devices")) : rd(document.body, "fallback-blueprint")
};

function Yi() {
    var a = this;
    this.gb = [];
    this.refresh();
    this.za = O(window, "scroll", function() {
        Zi(a)
    })
}
Yi.prototype.refresh = function() {
    this.gb.length = 0;
    var a = C("js-lazy-load");
    this.gb = Qa(a, function(a, c) {
        qd(c, "loaded") || a.push(c);
        return a
    }, []);
    Zi(this)
};

function $i(a) {
    a = hc(a);
    return 0 <= a.top && 0 <= a.left && a.top <= (window.innerHeight || document.documentElement.clientHeight)
}

function aj(a, b) {
    var c = new Image,
        d = P(a, "src");
    c.onload = function() {
        a.parent ? a.parent.replaceChild(c, a) : a.src = d;
        "function" === typeof b && b()
    };
    c.src = d;
    rd(a, "loaded")
}

function Zi(a) {
    var b = I.getActiveBreakpoints();
    if (!(1 > b.length)) {
        for (var b = "mobile" === b[0], c = 0; c < a.gb.length; c++) {
            var d = a.gb[c];
            b && qd(d, "js-prevent-load-mobile") || (qd(d, "loaded") || !$i(d)) || aj(d, function() {
                a.gb.splice(c, c)
            })
        }
        C("js-lazy-load.loaded").length === a.gb.length && bd(a.za)
    }
};

function Ii(a) {
    var b = this;
    this.k = a;
    this.aa = C("js-event-card");
    this.rh = E("js-large-filters");
    this.Yg = E("js-filter-holder", this.rh);
    this.ah = C("js-filter", this.Ki);
    this.$g = E("js-filters-headline");
    this.cb = E("js-mobile-filter-holder");
    this.cf = E("js-toggler--filters");
    this.Zg = E("js-filters-dismiss");
    this.Zf = E("js-tags");
    C("js-filter");
    this.nb = !1;
    this.Fh = C("js-my-schedule");
    this.tf = E("schedule__list") || E("videos__list");
    this.Df = E("js-my-schedule-false");
    this.Ef = E("js-my-schedule-true");
    this.Gb = E("-js-filter-current-holder");
    this.Xc = E("-js-filters-pretty");
    s(this.ah, this.tg, this);
    s(this.Fh, function(a) {
        O(a, "click", function(a) {
            a.preventDefault();
            a.stopPropagation()
        });
        (new Hammer(a)).on("tap", function(a) {
            a.preventDefault();
            a.gesture.preventDefault();
            b.k && (b.k.pe ? (bj(), b.nb = !b.nb, b.nb ? (v(b.Df, "-hide"), w(b.Ef, "-hide")) : (w(b.Df, "-hide"), v(b.Ef, "-hide")), cj(b)) : Xf(b.k))
        });
        (new Hammer(a)).on("click", function(a) {
            a.preventDefault();
            a.gesture && a.gesture.preventDefault()
        })
    });
    (new Hammer(this.Zf)).on("click", function() {
        db(b.Zf, "expanded");
        dj(b)
    });
    oc.on("resize", function() {
        dj(b)
    });
    (new Hammer(this.cb)).on("drag", function(a) {
        b.cb.scrollTop += (0 > a.gesture.interimAngle ? 1 : -1) * 20 * a.gesture.velocityY;
        a.preventDefault();
        a.gesture.preventDefault()
    });
    (new Hammer(this.Zg)).on("tap", function() {
        db(b.cb, "-hide")
    });
    if (this.cf)(new Hammer(this.cf)).on("tap", function() {
        w(b.cb, "-hide")
    });
    if (this.bf = E("js-clear-filters-mobile"))(new Hammer(this.bf)).on("tap", function() {
        v(b.Gb, "-hide");
        bj();
        cj(b)
    });
    ej(this);
    fj(this)
}

function ej(a) {
    if (window.location.hash && window.location.hash.match(/#!\/filter\/(\w+)/)) {
        var b = window.location.hash.split("filter/")[1];
        b && b.length && s(b.split(":"), function(a) {
            a = pe("[data-filter-by=" + a + "]");
            s(a, this.Uf, this)
        }, a)
    }
}

function dj(a) {
    a.Yg.style.height = window.innerHeight - H(a.$g).height + "px"
}
Ii.prototype.ag = function(a) {
    if (this.k) {
        var b = Oa(Tf(this.k), a); - 1 === b ? Tf(this.k).push(a) : Ya(Tf(this.k), b, 1);
        cj(this)
    }
};

function bj() {
    s(C("js-filter.selected"), function(a) {
        w(a, "selected")
    })
}
Ii.prototype.tg = function(a) {
    (new Hammer(a)).on("tap", n(this.Uf, this, a))
};
Ii.prototype.Uf = function(a) {
    var b = C("js-filter", $b(a));
    v(this.cb, "-hide");
    s(b, function(b) {
        a !== b ? w(b, "selected") : db(b, "selected")
    });
    cj(this)
};

function cj(a) {
    var b = [],
        c = C("js-timeslot-label.fixed");
    bc(c[c.length - 1], "js-timeslot");
    C("js-event:not(.-hide)");
    var d = [];
    s(C("js-filter.selected"), function(a) {
        var c = a.getAttribute("data-filter-by");
        d.push(a.getAttribute("data-filter-name"));
        c && b.push(c)
    });
    var e = b.length + (a.nb ? 1 : 0),
        c = C("js-date"),
        f = C("js-day"),
        h = C("js-timeslot"),
        k = 0;
    if (e) {
        a.Xc && ac(a.Xc, d.join(", "));
        a.Gb && (1 === e && !a.nb || 1 < e) && w(a.Gb, "-hide");
        s(a.aa, function(c) {
            var d = 0;
            w(c, "last");
            s(b, function(a) {
                x(c, "-" + a) && d++
            });
            a.nb && a.k && Tf(a.k) &&
                -1 !== Oa(Tf(a.k), c.getAttribute("data-id")) && d++;
            d !== e ? v(c, "-hide") : w(c, "-hide")
        });
        var q = !1;
        s(h, function(a) {
            var b = C("js-event-card", a),
                c = C("js-event-card.-hide", a);
            0 === b.length - c.length ? v(a, "-hide") : (k++, q || (q = !0, v(a, "first")), w(a, "-hide"), a = C("js-event-card:not(.-hide)", a), a.length && v(a[a.length - 1], "last"))
        });
        var t = 0;
        s(f, function(a) {
            var b = E("js-empty-slots-" + ++t);
            C("js-timeslot:not(.-hide)", a).length ? v(b, "-hide") : w(b, "-hide")
        })
    } else a.Xc && ac(a.Xc, ""), a.Gb && v(a.Gb, "-hide"), k++, s(a.aa, function(a) {
        w(a,
            "-hide");
        w(a, "last")
    }), s(h, function(a) {
        w(a, "-hide");
        w(a, "first");
        w(a, "last")
    }), t = 0, s(c, function() {
        t++;
        v(E("js-empty-slots-" + t), "-hide")
    });
    fj(a);
    a.refresh()
}

function fj(a) {
    var b = C("js-day"),
        c = C("js-date"),
        d = 0;
    s(b, function(a) {
        d += H(a).height
    });
    s(c, function(a) {
        d += H(a).height
    });
    b = window.innerHeight - 80;
    d < b && (d = b);
    a.tf && (a.tf.style.height = d + "px");
    dj(a)
}
Ii.prototype.refresh = function() {
    qc.fi && (Sf(qc), qc.xc())
};

function gj(a) {
    this.ng = "https://iosched-gcm.appspot.com/send/self/sync_user";
    this.og = "downloadUrl";
    this.pg = "id";
    this.Ae = !1;
    this.filename = a;
    this.Ud = this.Td = null;
    this.sf = !1
}

function hj(a, b, c) {
    if (!ij(b)) throw Error('Data is not in a valid format. Expected something like {"starred_sessions": ["string_session_id1", "string_session_id2"]} but found ' + JSON.stringify(b));
    jj(a, a.rg, [b, c])
}

function kj(a, b) {
    jj(a, a.qg, [b])
}

function ij(a) {
    return null != a && "object" === typeof a && "starred_sessions" in a && Array.isArray(a.starred_sessions) && a.starred_sessions.every(function(a) {
        return "string" === typeof a
    })
}

function jj(a, b, c) {
    a.sf ? b.apply(a, c) : lj(a, function(a) {
        mj(this, a);
        this.sf = !0;
        b.apply(this, c)
    }.bind(a))
}
gj.prototype.qg = function(a) {
    if (this.Td) {
        var b = gapi.auth.getToken().access_token,
            c = new XMLHttpRequest;
        c.open("GET", this.Td);
        c.setRequestHeader("Authorization", "Bearer " + b);
        c.onload = function(b) {
            var c = null;
            try {
                c = JSON.parse(b.target.responseText)
            } catch (f) {
                c = {
                    error: "Could not parse JSON. " + f
                }
            }
            a(c, {
                response: b.target.response,
                responseType: b.target.responseType,
                status: b.target.status,
                statusText: b.target.statusText
            })
        };
        c.onerror = function(b) {
            a(null, b)
        };
        c.send()
    } else a(null)
};

function mj(a, b) {
    b && (a.Ud = b[a.pg], a.Td = b[a.og])
}

function lj(a, b) {
    var c = function(a, d) {
            a.execute(function(h) {
                this.Ae && console.debug("found files with title", h.items);
                for (var k = 0; h.items && k < h.items.length; k++) {
                    var q = h.items[k];
                    if (null == d || q.title == this.filename && 0 > (d.modifiedDate < q.modifiedDate ? -1 : d.modifiedDate > q.modifiedDate ? 1 : 0)) d = q
                }(h = h.Mi) ? (a = gapi.client.drive.files.list({
                    pageToken: h
                }), c(a, d)) : b(d)
            }.bind(this))
        }.bind(a),
        d = gapi.client.drive.files.list({
            q: "'appdata' in parents and title contains '" + a.filename + "'"
        });
    c(d, null)
}
gj.prototype.rg = function(a, b) {
    if (null == a) this.Ae && console.log("obj is null. Ignoring");
    else {
        boundary = "-------314159265358979323846";
        delimiter = "\r\n--" + boundary + "\r\n";
        close_delim = "\r\n--" + boundary + "--";
        var c = null != this.Ud,
            d;
        d = c ? {} : {
            title: this.filename,
            mimeType: "application/json",
            parents: [{
                id: "appdata"
            }]
        };
        var e = btoa(JSON.stringify(a));
        d = delimiter + "Content-Type: application/json\r\n\r\n" + JSON.stringify(d) + delimiter + "Content-Type: application/json\r\nContent-Transfer-Encoding: base64\r\n\r\n" + e + close_delim;
        gapi.client.request({
            path: "/upload/drive/v2/files" + (c ? "/" + this.Ud : ""),
            method: c ? "PUT" : "POST",
            params: {
                uploadType: "multipart"
            },
            headers: {
                "Content-Type": 'multipart/mixed; boundary="' + boundary + '"'
            },
            body: d
        }).execute(function(c) {
            mj(this, c);
            try {
                var d;
                a: {
                    if (null != a && "object" == typeof a && "starred_sessions" in a && Array.isArray(a.starred_sessions))
                        for (var e = 0; e < a.starred_sessions.length; e++) {
                            var q = a.starred_sessions[e];
                            if (null != q && 0 === q.indexOf("GCM:")) {
                                d = q.substr(4);
                                break a
                            }
                        }
                    d = null
                }
                if (null != d) {
                    var t = new XMLHttpRequest;
                    t.open("POST", this.ng);
                    t.setRequestHeader("Authorization", "key=" + d);
                    t.send("{'sync_jitter': 100}")
                }
            } catch (G) {
                console.log("Could not notify other devices.")
            }
            b(c)
        }.bind(this))
    }
};

function nj(a, b) {
    this.Gg = a;
    this.af = b;
    this.Cb = null;
    this.fc = {};
    this.pe = !1;
    this.bb = this.Qa = null
}

function Tf(a) {
    return a.fc.starred_sessions
}
nj.prototype.hh = function() {
    var a = this;
    oj(function() {
        Xf(a, !0)
    })
};

function oj(a) {
    gapi.client.load("drive", "v2", a)
}

function Xf(a, b) {
    gapi.auth.authorize({
        client_id: a.Gg,
        scope: "https://www.googleapis.com/auth/drive.appdata",
        immediate: b
    }, function(b) {
        b && b.status.signed_in && (pj(a), a.pe = !0)
    })
}

function qj(a, b) {
    a.Cb || (a.Cb = new gj(a.af));
    hj(a.Cb, b, aa())
}

function pj(a) {
    "this.appDataFile_" in window || (a.Cb = new gj(a.af));
    kj(a.Cb, function(b) {
        b ? b.starred_sessions || (b.starred_sessions = []) : b = {
            starred_sessions: []
        };
        a.fc = b;
        Vf(a.Qa, b)
    })
}
nj.prototype.getData = function() {
    window.starredSessionsAPIOnload = n(this.hh, this);
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = "https://apis.google.com/js/client.js?onload=starredSessionsAPIOnload";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
};
nj.prototype.ag = function(a) {
    if (Tf(this)) {
        var b = Oa(Tf(this), a); - 1 === b ? Tf(this).push(a) : Tf(this).splice(b, 1);
        qj(this, this.fc)
    }
};

function rj(a, b, c) {
    L.call(this);
    this.cd = a;
    this.Yd = b;
    this.Ia = c;
    this.si = 0.9;
    if (b = P(this.cd, "tabTarget")) {
        this.O = pe("[data-tab-namespace=" + this.Ia.L + "] [data-tab-name=" + b + "]")[0];
        this.i();
        var d = this;
        this.Nh = (new Hammer(a)).on("tap", function() {
            d.Ia.setActive(d.Yd)
        })
    }(a = C("js-delay", this.O)) && a.length && (this.Ia.ih = !0, this.Dc = [].slice.call(a), this.Re = this.Dc.slice(0), this.Re.reverse())
}
p(rj, L);
rj.prototype.f = function() {
    this.Ia = this.cd = null;
    this.Nh();
    rj.d.f.call(this)
};
rj.prototype.i = function() {
    w(this.cd, "tab-is-active");
    w(this.O, "tab-is-active");
    TweenLite.set(this.O, {
        autoAlpha: 0
    })
};
rj.prototype.show = function(a) {
    sj(this.Ia, H(this.O).height);
    v(this.cd, "tab-is-active");
    v(this.O, "tab-is-active");
    var b;
    b = "undefined" === typeof a || !1 === a;
    this.Dc || b ? (TweenLite.set(this.O, {
        autoAlpha: 1,
        x: 0
    }), this.Dc && !b && (a = this.Yd < a, b = 0.1, ab.contains(this.Ia.a, "js-delay-fast") && (b = 0.05), ab.contains(this.Ia.a, "js-delay-slow") && (b = 0.25), tj(this, a, b))) : (TweenLite.set(this.O, {
        autoAlpha: 1
    }), TweenLite.fromTo(this.O, this.si, {
        x: a > this.Yd ? -100 : 100
    }, {
        x: 0,
        ease: Expo.easeOut
    }));
    a = C("js-tab-lazy-load", this.B);
    s(a,
        function(a) {
            a.src || (a.src = P(a, "src"))
        })
};

function tj(a, b, c) {
    a = b ? a.Re : a.Dc;
    TweenLite.to(a, 0, {
        x: b ? -100 : 100,
        opacity: 0
    });
    s(a, function(a) {
        TweenMax.to(a, 0.1, {
            opacity: 1,
            delay: i * c + 0.05
        }, c);
        TweenMax.to(a, 0.6, {
            x: 0,
            delay: i * c,
            ease: Expo.easeOut
        })
    })
}

function uj(a, b) {
    L.call(this);
    this.a = a;
    this.L = P(this.a, "tabNamespace");
    this.B = E("js-tab-content-container", this.a);
    this.Bg = b;
    this.ih = !1;
    vj(this);
    this.Bd = n(function() {
        var a = I.getActiveBreakpoints();
        this.pi = Ua(a, "desktop") || Ua(a, "x-large")
    }, this);
    this.Bd();
    I.on("breakpoint", this.Bd);
    this.Pf = n(this.gi, this);
    oc.on("resize", this.Pf);
    wj.set(this.L, this)
}
p(uj, L);
var wj = new Ad;
uj.prototype.f = function() {
    wj.remove(this.L);
    this.B = this.a = null;
    I.off("breakpoint", this.Bd);
    oc.off("resize", this.Pf);
    s(this.$, function(a) {
        a.xa()
    });
    this.$ = null;
    uj.d.f.call(this)
};

function vj(a) {
    var b = C("js-activate-tab", a.a);
    a.$ = u(b, function(a, b) {
        return new rj(a, b, this)
    }, a);
    a.setActive(0)
}
uj.prototype.setActive = function(a) {
    a !== this.Xa && ("undefined" !== typeof this.Xa && this.$[this.Xa] && this.$[this.Xa].i(), "undefined" !== typeof a && this.$[a] && this.$[a].show(this.pi && this.Xa), this.Xa = a, this.Bg())
};

function sj(a, b) {
    a.B.style.height = b + "px"
}
uj.prototype.gi = function(a, b) {
    var c = H(this.$[this.Xa].O).height;
    if (b) {
        var d = a[1] - b;
        c < d && (c = d)
    }
    sj(this, c)
};

function xj(a) {
    var b = C("js-tabs");
    s(b, function(b) {
        new uj(b, a)
    })
};

function yj() {
    var a = this;
    this.sa = null;
    this.fi = !0;
    O(window, "load", function() {
        this.$ = C("js-schedule-tab");
        this.Qe = C("js-day-container");
        this.k = new nj(E("js-google-drive-client-id").getAttribute("data-google-drive-client-id"), "starred_sessions.json");
        this.Qa = new Qf(Dg, "/schedule", this.k);
        this.bb = new Ii(this.k);
        var a = this.k,
            c = this.bb;
        a.Qa = this.Qa;
        a.bb = c;
        this.k.getData();
        xj(n(this.bb.refresh, this.bb));
        this.xc()
    }, !1, this);
    s(C("js-toggle"), function(a) {
        new yi(a, 0.4, !0)
    });
    this.oe();
    I.on("breakpoint", function(b) {
        "enter" ===
        b[1] && Sf(a)
    });
    O(window, "scroll", n(this.xc, this))
}
yj.prototype.xc = function() {
    this.Qe && (0 > kc(this.Qe[1]).y - window.scrollY - 80 ? (w(this.$[0], "tab-is-active"), v(this.$[1], "tab-is-active")) : (v(this.$[0], "tab-is-active"), w(this.$[1], "tab-is-active")))
};
yj.prototype.oe = function() {
    if (!this.sa) {
        this.sa = [];
        if (768 <= window.innerWidth) {
            var a = C("js-sticky-container"),
                b = this;
            s(a, function(a) {
                var c = C("js-sticky-element", a);
                s(c, function(c) {
                    var e = qd(c, "timeslot__label") ? 120 : 0;
                    c = morlock.stickyElement(c, a, {
                        marginTop: e
                    });
                    b.sa.push(c)
                })
            })
        }
        var a = pe(".schedule__col.-left")[0],
            c = pe(".schedule__days-wrapper", a)[0],
            a = morlock.stickyElement(c, a, {
                positionType: "fixed"
            });
        this.sa.push(a)
    }
};

function Sf(a) {
    a.sa && s(a.sa, function(a) {
        a.onResize()
    })
};
da("io.init", function(a) {
    K = !(Modernizr.inlinesvg && Modernizr.csstransforms && "ArrayBuffer" in window);
    ld();
    zj();
    if (navigator.userAgent.match(/MSIE 8\./)) v(document.body, "ie8"), Aj(a);
    else {
        var b = navigator.userAgent.toLowerCase();
        rc = b.match(/ipad|iphone|mobile/) || [];
        rc = 0 < rc.length;
        pc = b.match(/android|ipad|iphone|mobile|tablet/) || [];
        pc = 0 < pc.length;
        oc = new ResizeController({
            throttleMs: 100
        });
        I = new BreakpointController({
            breakpoints: {
                mobile: {
                    max: 767
                },
                desktop: {
                    min: 768,
                    max: 1440
                },
                "x-large": {
                    min: 1441
                }
            }
        });
        b = C("js-card-intro");
        s(b, function(a) {
            new xi(a)
        });
        b = C("js-match-max");
        s(b, Rg);
        new Yi;
        new zi(E("js-basement"), 0.6, !1);
        sc = [];
        wc = vc = !1;
        I.on("breakpoint", function(a) {
            var b = a[0];
            a = a[1];
            "mobile" !== b || ("enter" !== a || vc) || (Bj("js-responsive-image-mobile"), vc = !0);
            ("desktop" !== b && "x-large" !== b || "enter" !== a) && ("mobile" !== b || "exit" !== a) || wc || (Bj("js-responsive-image"), wc = !0);
            for (b = 0; b < sc.length; b++) ResponsiveImage.update(sc[b])
        });
        "schedule" !== a && (b = C("js-paging"), s(b, function(a) {
            var b = P(a, "hasResponsiveImages") ? function(a) {
                a = C("js-lazy-init",
                    a);
                s(a, function(a) {
                    a && !x(a, "loaded") && (a = ResponsiveImage.createFromElement(a), sc.push(a), ResponsiveImage.update(a))
                })
            } : aa();
            new Wf(a, [], !1, b)
        }));
        Aj(a);
        pi();
        O(window, "load", function() {
            void 0 !== window.gapi && window.gapi.plusone.go()
        }, !1)
    }
});

function Aj(a) {
    var b = {
        help: Gi,
        home: Zh,
        "home-live": Wh,
        "home-post": Yf,
        "io-extended": Li,
        logistics: ui,
        sandbox: Xi,
        schedule: yj,
        videos: Hi
    };
    "undefined" !== typeof a && b[a] && (qc = new b[a])
}

function Bj(a) {
    a = C(a);
    s(a, function(a) {
        x(a, "loaded") || x(a, "js-lazy-init") || (a = ResponsiveImage.createFromElement(a, void 0), sc.push(a), ResponsiveImage.update(a))
    })
}

function zj() {
    var a = Pa(pe("h1,h2,h3,h4,h5,h6,p,li,a,a span"), function(a) {
        return !x(a, "allow-orphan")
    });
    md(a)
}

function $h(a, b, c, d) {
    var e = null,
        f = document.createElement("script");
    f.onload = function() {
        "function" === typeof e && (e = e());
        var f = new partials.PageInit(e),
            k = partials.chapter[a];
        c || (c = {});
        c.chapter = new k;
        c.partial = !0;
        c.element = b;
        f.init(c);
        k = new ElementVisibleController(b);
        k.on("enter", f.unPauseExp);
        k.on("exit", f.pauseExp);
        window.curr = c.chapter;
        "function" === typeof d && d(f)
    };
    f.src = "/events/io/js/partials.min.js";
    setTimeout(function() {
        document.body.appendChild(f)
    }, 10)
};