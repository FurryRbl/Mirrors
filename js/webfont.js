/*
 * Copyright 2015 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
! function(r, e) {
    function s(t, i, n) {
        return t.call.apply(t.bind, arguments)
    }

    function o(i, n, t) {
        if (!i) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var t = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(t, e), i.apply(n, t)
            }
        }
        return function() {
            return i.apply(n, arguments)
        }
    }

    function l(t, i, n) {
        return (l = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? s : o).apply(null, arguments)
    }

    function h(t, i) {
        this.K = t, this.w = i || t, this.G = this.w.document
    }

    function a(t, i, n) {
        (t = t.G.getElementsByTagName(i)[0]) || (t = e.documentElement), t && t.lastChild && t.insertBefore(n, t.lastChild)
    }

    function n(t, i) {
        function n() {
            t.G.body ? i() : setTimeout(n, 0)
        }
        n()
    }

    function f(t, i, n) {
        i = i || [], n = n || [];
        for (var e = t.className.split(/\s+/), s = 0; s < i.length; s += 1) {
            for (var o = !1, a = 0; a < e.length; a += 1)
                if (i[s] === e[a]) {
                    o = !0;
                    break
                } o || e.push(i[s])
        }
        for (i = [], s = 0; s < e.length; s += 1) {
            for (o = !1, a = 0; a < n.length; a += 1)
                if (e[s] === n[a]) {
                    o = !0;
                    break
                } o || i.push(e[s])
        }
        t.className = i.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function u(t, i) {
        for (var n = t.className.split(/\s+/), e = 0, s = n.length; e < s; e++)
            if (n[e] == i) return !0;
        return !1
    }

    function c(t) {
        if ("string" == typeof t.na) return t.na;
        var i = t.w.location.protocol;
        return "about:" == i && (i = t.K.location.protocol), "https:" == i ? "https:" : "http:"
    }

    function p(t, i) {
        var n = t.createElement("link", {
                rel: "stylesheet",
                href: i,
                media: "all"
            }),
            e = !1;
        n.onload = function() {
            e || (e = !0)
        }, n.onerror = function() {
            e || (e = !0)
        }, a(t, "head", n)
    }

    function d(t, i, n, e) {
        var s = t.G.getElementsByTagName("head")[0];
        if (s) {
            var o = t.createElement("script", {
                    src: i
                }),
                a = !1;
            return o.onload = o.onreadystatechange = function() {
                a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && s.removeChild(o))
            }, s.appendChild(o), r.setTimeout(function() {
                a || (a = !0, n && n(Error("Script load timeout")))
            }, e || 5e3), o
        }
        return null
    }

    function g(t, i) {
        this.Y = t, this.ga = i
    }

    function m(t, i, n, e) {
        this.c = null != t ? t : null, this.g = null != i ? i : null, this.D = null != n ? n : null, this.e = null != e ? e : null
    }

    function v(t) {
        var i = null,
            n = null,
            e = null,
            s = null;
        return (t = Y.exec(t)) && (null !== t[1] && t[1] && (i = parseInt(t[1], 10)), null !== t[2] && t[2] && (n = parseInt(t[2], 10)), null !== t[3] && t[3] && (e = parseInt(t[3], 10)), null !== t[4] && t[4] && (s = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new m(i, n, e, s)
    }

    function w(t, i, n, e, s, o, a, r) {
        this.N = t, this.k = r
    }

    function y(t) {
        this.a = t
    }

    function b(t) {
        var i = O(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        return "" != i ? (/BB\d{2}/.test(i) && (i = "BlackBerry"), i) : "" != (t = O(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1)) ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown"
    }

    function k(t) {
        if ((i = O(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2)) || (i = O(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (i = O(t.a, /(iPhone )?OS ([\d_]+)/, 2))) return i;
        if (i = O(t.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var i = i.split(/\s/), n = 0; n < i.length; n += 1)
                if (/^[\d\._]+$/.test(i[n])) return i[n];
        return (t = O(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
    }

    function x(t) {
        var i = b(t),
            n = v(k(t)),
            e = v(O(t.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
            s = "Unknown",
            o = new m;
        o = "Unknown";
        return /OPR\/[\d.]+/.test(t.a) ? s = "Opera" : -1 != t.a.indexOf("Chrome") || -1 != t.a.indexOf("CrMo") || -1 != t.a.indexOf("CriOS") ? s = "Chrome" : /Silk\/\d/.test(t.a) ? s = "Silk" : "BlackBerry" == i || "Android" == i ? s = "BuiltinBrowser" : -1 != t.a.indexOf("PhantomJS") ? s = "PhantomJS" : -1 != t.a.indexOf("Safari") ? s = "Safari" : -1 != t.a.indexOf("AdobeAIR") ? s = "AdobeAIR" : -1 != t.a.indexOf("PlayStation") && (s = "BuiltinBrowser"), "BuiltinBrowser" == s ? o = "Unknown" : "Silk" == s ? o = O(t.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == s ? o = O(t.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.a.indexOf("Version/") ? o = O(t.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == s ? o = O(t.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == s ? o = O(t.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == s && (o = O(t.a, /PhantomJS\/([\d.]+)/, 1)), o = v(o), new w(s, 0, 0, 0, 0, 0, 0, new g("AdobeAIR" == s ? 2 < o.c || 2 == o.c && 5 <= o.g : "BlackBerry" == i ? 10 <= n.c : "Android" == i ? 2 < n.c || 2 == n.c && 1 < n.g : 526 <= e.c || 525 <= e.c && 13 <= e.g, e.c < 536 || 536 == e.c && e.g < 11))
    }

    function O(t, i, n) {
        return (t = t.match(i)) && t[n] ? t[n] : ""
    }

    function S(t) {
        this.ma = t || "-"
    }

    function C(t, i) {
        this.N = t, this.Z = 4, this.O = "n";
        var n = (i || "n4").match(/^([nio])([1-9])$/i);
        n && (this.O = n[1], this.Z = parseInt(n[2], 10))
    }

    function B(t) {
        return t.O + t.Z
    }

    function N(t) {
        var i = 4,
            n = "n",
            e = null;
        return t && ((e = t.match(/(normal|oblique|italic)/i)) && e[1] && (n = e[1].substr(0, 1).toLowerCase()), (e = t.match(/([1-9]00|normal|bold)/i)) && e[1] && (/bold/i.test(e[1]) ? i = 7 : /[1-9]00/.test(e[1]) && (i = parseInt(e[1].substr(0, 1), 10)))), n + i
    }

    function A(t, i) {
        this.d = t, this.q = t.w.document.documentElement, this.Q = i, this.j = "wf", this.h = new S("-"), this.ha = !1 !== i.events, this.F = !1 !== i.classes
    }

    function j(t) {
        if (t.F) {
            var i = u(t.q, t.h.e(t.j, "active")),
                n = [],
                e = [t.h.e(t.j, "loading")];
            i || n.push(t.h.e(t.j, "inactive")), f(t.q, n, e)
        }
        P(t, "inactive")
    }

    function P(t, i, n) {
        t.ha && t.Q[i] && (n ? t.Q[i](n.getName(), B(n)) : t.Q[i]())
    }

    function i() {
        this.C = {}
    }

    function _(t, i) {
        this.d = t, this.I = i, this.o = this.d.createElement("span", {
            "aria-hidden": "true"
        }, this.I)
    }

    function I(t, i) {
        var n, e = t.o;
        n = [];
        for (var s = i.N.split(/,\s*/), o = 0; o < s.length; o++) {
            var a = s[o].replace(/['"]/g, ""); - 1 == a.indexOf(" ") ? n.push(a) : n.push("'" + a + "'")
        }
        n = n.join(","), s = "normal", "o" === i.O ? s = "oblique" : "i" === i.O && (s = "italic"), e.style.cssText = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + n + ";font-style:" + s + ";font-weight:" + i.Z + "00;"
    }

    function W(t) {
        a(t.d, "body", t.o)
    }

    function M(t, i, n, e, s, o, a, r) {
        this.$ = t, this.ka = i, this.d = n, this.m = e, this.k = s, this.I = r || "BESbswy", this.v = {}, this.X = o || 3e3, this.ca = a || null, this.H = this.u = this.t = null, this.t = new _(this.d, this.I), this.u = new _(this.d, this.I), this.H = new _(this.d, this.I), I(this.t, new C("serif", B(this.m))), I(this.u, new C("sans-serif", B(this.m))), I(this.H, new C("monospace", B(this.m))), W(this.t), W(this.u), W(this.H), this.v.serif = this.t.o.offsetWidth, this.v["sans-serif"] = this.u.o.offsetWidth, this.v.monospace = this.H.o.offsetWidth
    }

    function T(t, i, n) {
        for (var e in z)
            if (z.hasOwnProperty(e) && i === t.v[z[e]] && n === t.v[z[e]]) return !0;
        return !1
    }

    function E(t) {
        var i = t.t.o.offsetWidth,
            n = t.u.o.offsetWidth;
        i === t.v.serif && n === t.v["sans-serif"] || t.k.ga && T(t, i, n) ? Q() - t.oa >= t.X ? t.k.ga && T(t, i, n) && (null === t.ca || t.ca.hasOwnProperty(t.m.getName())) ? L(t, t.$) : L(t, t.ka) : F(t) : L(t, t.$)
    }

    function F(t) {
        setTimeout(l(function() {
            E(this)
        }, t), 50)
    }

    function L(t, i) {
        t.t.remove(), t.u.remove(), t.H.remove(), i(t.m)
    }

    function R(t, i, n, e) {
        this.d = i, this.A = n, this.S = 0, this.ea = this.ba = !1, this.X = e, this.k = t.k
    }

    function q(t, i, n, e, s) {
        if (n = n || {}, 0 === i.length && s) j(t.A);
        else
            for (t.S += i.length, s && (t.ba = s), s = 0; s < i.length; s++) {
                var o = i[s],
                    a = n[o.getName()],
                    r = t.A,
                    h = o;
                r.F && f(r.q, [r.h.e(r.j, h.getName(), B(h).toString(), "loading")]), P(r, "fontloading", h), r = null, (r = new M(l(t.ia, t), l(t.ja, t), t.d, o, t.k, t.X, e, a)).start()
            }
    }

    function U(t) {
        0 == --t.S && t.ba && (t.ea ? ((t = t.A).F && f(t.q, [t.h.e(t.j, "active")], [t.h.e(t.j, "loading"), t.h.e(t.j, "inactive")]), P(t, "active")) : j(t.A))
    }

    function t(t) {
        this.K = t, this.B = new i, this.pa = new y(t.navigator.userAgent), this.a = this.pa.parse(), this.U = this.V = 0, this.R = this.T = !0
    }

    function D(t, i, n, e, s) {
        var o = 0 == --t.V;
        (t.R || t.T) && setTimeout(function() {
            q(i, n, e || null, s || null, o)
        }, 0)
    }

    function J(t, i, n) {
        this.P = t || i + tt, this.s = [], this.W = [], this.fa = n || ""
    }

    function K(t) {
        this.s = t, this.da = [], this.M = {}
    }

    function $(t, i) {
        this.a = new y(navigator.userAgent).parse(), this.d = t, this.f = i
    }

    function V(t, i) {
        this.d = t, this.f = i, this.p = []
    }

    function H(t, i) {
        this.d = t, this.f = i, this.p = []
    }

    function G(t, i) {
        this.d = t, this.f = i, this.p = []
    }

    function X(t, i) {
        this.d = t, this.f = i
    }
    var Q = Date.now || function() {
        return +new Date
    };
    h.prototype.createElement = function(t, i, n) {
        if (t = this.G.createElement(t), i)
            for (var e in i) i.hasOwnProperty(e) && ("style" == e ? t.style.cssText = i[e] : t.setAttribute(e, i[e]));
        return n && t.appendChild(this.G.createTextNode(n)), t
    };
    var Y = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    m.prototype.compare = function(t) {
        return this.c > t.c || this.c === t.c && this.g > t.g || this.c === t.c && this.g === t.g && this.D > t.D ? 1 : this.c < t.c || this.c === t.c && this.g < t.g || this.c === t.c && this.g === t.g && this.D < t.D ? -1 : 0
    }, m.prototype.toString = function() {
        return [this.c, this.g || "", this.D || "", this.e || ""].join("")
    }, w.prototype.getName = function() {
        return this.N
    };
    var Z = new w("Unknown", 0, 0, 0, 0, 0, 0, new g(!1, !1));
    y.prototype.parse = function() {
        var t;
        if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
            t = b(this);
            var i = v(k(this)),
                n = null,
                e = O(this.a, /Trident\/([\d\w\.]+)/, 1);
            n = -1 != this.a.indexOf("MSIE") ? v(O(this.a, /MSIE ([\d\w\.]+)/, 1)) : v(O(this.a, /rv:([\d\w\.]+)/, 1));
            "" != e && v(e), t = new w("MSIE", 0, 0, 0, 0, 0, 0, new g("Windows" == t && 6 <= n.c || "Windows Phone" == t && 8 <= i.c, !1))
        } else if (-1 != this.a.indexOf("Opera")) t: if (t = v(O(this.a, /Presto\/([\d\w\.]+)/, 1)), v(k(this)), null !== t.c || v(O(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/")) t = v(O(this.a, /Opera Mini\/([\d\.]+)/, 1)), t = new w("OperaMini", 0, 0, 0, b(this), 0, 0, new g(!1, !1));
            else {
                if (-1 != this.a.indexOf("Version/") && null !== (t = v(O(this.a, /Version\/([\d\.]+)/, 1))).c) {
                    t = new w("Opera", 0, 0, 0, b(this), 0, 0, new g(10 <= t.c, !1));
                    break t
                }
                t = null !== (t = v(O(this.a, /Opera[\/ ]([\d\.]+)/, 1))).c ? new w("Opera", 0, 0, 0, b(this), 0, 0, new g(10 <= t.c, !1)) : new w("Opera", 0, 0, 0, b(this), 0, 0, new g(!1, !1))
            }
        else /OPR\/[\d.]+/.test(this.a) ? t = x(this) : /AppleWeb(K|k)it/.test(this.a) ? t = x(this) : -1 != this.a.indexOf("Gecko") ? (t = "Unknown", i = new m, v(k(this)), i = !1, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", i = 3 <= (i = v(O(this.a, /Firefox\/([\d\w\.]+)/, 1))).c && 5 <= i.g) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), n = v(O(this.a, /rv:([^\)]+)/, 1)), i || (i = 1 < n.c || 1 == n.c && 9 < n.g || 1 == n.c && 9 == n.g && 2 <= n.D), t = new w(t, 0, 0, 0, b(this), 0, 0, new g(i, !1))) : t = Z;
        return t
    }, S.prototype.e = function(t) {
        for (var i = [], n = 0; n < arguments.length; n++) i.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return i.join(this.ma)
    }, C.prototype.getName = function() {
        return this.N
    }, _.prototype.remove = function() {
        var t = this.o;
        t.parentNode && t.parentNode.removeChild(t)
    };
    var z = {
        sa: "serif",
        ra: "sans-serif",
        qa: "monospace"
    };
    M.prototype.start = function() {
        this.oa = Q(), I(this.t, new C(this.m.getName() + ",serif", B(this.m))), I(this.u, new C(this.m.getName() + ",sans-serif", B(this.m))), E(this)
    }, R.prototype.ia = function(t) {
        var i = this.A;
        i.F && f(i.q, [i.h.e(i.j, t.getName(), B(t).toString(), "active")], [i.h.e(i.j, t.getName(), B(t).toString(), "loading"), i.h.e(i.j, t.getName(), B(t).toString(), "inactive")]), P(i, "fontactive", t), this.ea = !0, U(this)
    }, R.prototype.ja = function(t) {
        var i = this.A;
        if (i.F) {
            var n = u(i.q, i.h.e(i.j, t.getName(), B(t).toString(), "active")),
                e = [],
                s = [i.h.e(i.j, t.getName(), B(t).toString(), "loading")];
            n || e.push(i.h.e(i.j, t.getName(), B(t).toString(), "inactive")), f(i.q, e, s)
        }
        P(i, "fontinactive", t), U(this)
    }, t.prototype.load = function(t) {
        this.d = new h(this.K, t.context || this.K), this.T = !1 !== t.events, this.R = !1 !== t.classes;
        var i = new A(this.d, t),
            n = [],
            e = t.timeout;
        i.F && f(i.q, [i.h.e(i.j, "loading")]), P(i, "loading");
        n = this.B;
        var s, o = this.d,
            a = [];
        for (s in t)
            if (t.hasOwnProperty(s)) {
                var r = n.C[s];
                r && a.push(r(t[s], o))
            } for (n = a, this.U = this.V = n.length, t = new R(this.a, this.d, i, e), e = 0, s = n.length; e < s; e++)(o = n[e]).L(this.a, l(this.la, this, o, i, t))
    }, t.prototype.la = function(t, i, e, n) {
        var s = this;
        n ? t.load(function(t, i, n) {
            D(s, e, t, i, n)
        }) : (t = 0 == --this.V, this.U--, t && 0 == this.U ? j(i) : (this.R || this.T) && q(e, [], {}, null, t))
    };
    var tt = "//fonts.googleapis.com/css";
    J.prototype.e = function() {
        if (0 == this.s.length) throw Error("No fonts to load!");
        if (-1 != this.P.indexOf("kit=")) return this.P;
        for (var t = this.s.length, i = [], n = 0; n < t; n++) i.push(this.s[n].replace(/ /g, "+"));
        return t = this.P + "?family=" + i.join("%7C"), 0 < this.W.length && (t += "&subset=" + this.W.join(",")), 0 < this.fa.length && (t += "&text=" + encodeURIComponent(this.fa)), t
    };
    var it = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        },
        nt = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        et = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        st = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    K.prototype.parse = function() {
        for (var t = this.s.length, i = 0; i < t; i++) {
            var n = this.s[i].split(":"),
                e = n[0].replace(/\+/g, " "),
                s = ["n4"];
            if (2 <= n.length) {
                var o;
                if (o = [], a = n[1])
                    for (var a, r = (a = a.split(",")).length, h = 0; h < r; h++) {
                        var l;
                        if ((l = a[h]).match(/^[\w-]+$/)) {
                            var f = void 0;
                            if (null == (l = st.exec(l.toLowerCase()))) f = "";
                            else {
                                if (f = void 0, null == (f = l[1]) || "" == f) f = "4";
                                else {
                                    var u = nt[f];
                                    f = u || (isNaN(f) ? "4" : f.substr(0, 1))
                                }
                                f = [null == (l = l[2]) || "" == l ? "n" : et[l], f].join("")
                            }
                            l = f
                        } else l = "";
                        l && o.push(l)
                    }
                0 < o.length && (s = o), 3 == n.length && (o = [], 0 < (n = (n = n[2]) ? n.split(",") : o).length && (n = it[n[0]]) && (this.M[e] = n))
            }
            for (this.M[e] || (n = it[e]) && (this.M[e] = n), n = 0; n < s.length; n += 1) this.da.push(new C(e, s[n]))
        }
    };
    var ot = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    $.prototype.L = function(t, i) {
        i(t.k.Y)
    }, $.prototype.load = function(t) {
        var i = this.d;
        "MSIE" == this.a.getName() && 1 != this.f.blocking ? n(i, l(this.aa, this, t)) : this.aa(t)
    }, $.prototype.aa = function(t) {
        for (var i = this.d, n = new J(this.f.api, c(i), this.f.text), e = this.f.families, s = e.length, o = 0; o < s; o++) {
            var a = e[o].split(":");
            3 == a.length && n.W.push(a.pop());
            var r = "";
            2 == a.length && "" != a[1] && (r = ":"), n.s.push(a.join(r))
        }(e = new K(e)).parse(), p(i, n.e()), t(e.da, e.M, ot)
    }, V.prototype.J = function(t) {
        var i = this.d;
        return c(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (i.w.location.hostname || i.K.location.hostname) + "/" + t + ".js"
    }, V.prototype.L = function(t, o) {
        var i = this.f.id,
            n = this.d.w,
            a = this;
        i ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[i] = function(t, i) {
            for (var n = 0, e = i.fonts.length; n < e; ++n) {
                var s = i.fonts[n];
                a.p.push(new C(s.name, N("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            o(t)
        }, d(this.d, this.J(i), function(t) {
            t && o(!1)
        })) : o(!1)
    }, V.prototype.load = function(t) {
        t(this.p)
    }, H.prototype.J = function(t) {
        var i = c(this.d);
        return (this.f.api || i + "//use.typekit.net") + "/" + t + ".js"
    }, H.prototype.L = function(t, a) {
        var i = this.f.id,
            r = this.d.w,
            h = this;
        i ? d(this.d, this.J(i), function(t) {
            if (t) a(!1);
            else {
                if (r.Typekit && r.Typekit.config && r.Typekit.config.fn) {
                    t = r.Typekit.config.fn;
                    for (var i = 0; i < t.length; i += 2)
                        for (var n = t[i], e = t[i + 1], s = 0; s < e.length; s++) h.p.push(new C(n, e[s]));
                    try {
                        r.Typekit.load({
                            events: !1,
                            classes: !1
                        })
                    } catch (o) {}
                }
                a(!0)
            }
        }, 2e3) : a(!1)
    }, H.prototype.load = function(t) {
        t(this.p)
    }, G.prototype.L = function(n, e) {
        var s = this,
            o = s.f.projectId,
            t = s.f.version;
        if (o) {
            var a = s.d.w;
            d(this.d, s.J(o, t), function(t) {
                if (t) e(!1);
                else {
                    if (a["__mti_fntLst" + o] && (t = a["__mti_fntLst" + o]()))
                        for (var i = 0; i < t.length; i++) s.p.push(new C(t[i].fontfamily));
                    e(n.k.Y)
                }
            }).id = "__MonotypeAPIScript__" + o
        } else e(!1)
    }, G.prototype.J = function(t, i) {
        return c(this.d) + "//" + (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "") + "/" + t + ".js" + (i ? "?v=" + i : "")
    }, G.prototype.load = function(t) {
        t(this.p)
    }, X.prototype.load = function(t) {
        var i, n, e = this.f.urls || [],
            s = this.f.families || [],
            o = this.f.testStrings || {};
        for (i = 0, n = e.length; i < n; i++) p(this.d, e[i]);
        for (e = [], i = 0, n = s.length; i < n; i++) {
            var a = s[i].split(":");
            if (a[1])
                for (var r = a[1].split(","), h = 0; h < r.length; h += 1) e.push(new C(a[0], r[h]));
            else e.push(new C(a[0]))
        }
        t(e, o)
    }, X.prototype.L = function(t, i) {
        return i(t.k.Y)
    };
    var at = new t(this);
    at.B.C.custom = function(t, i) {
        return new X(i, t)
    }, at.B.C.fontdeck = function(t, i) {
        return new V(i, t)
    }, at.B.C.monotype = function(t, i) {
        return new G(i, t)
    }, at.B.C.typekit = function(t, i) {
        return new H(i, t)
    }, at.B.C.google = function(t, i) {
        return new $(i, t)
    }, this.WebFont || (this.WebFont = {}, this.WebFont.load = l(at.load, at), this.WebFontConfig && at.load(this.WebFontConfig))
}(this, document);