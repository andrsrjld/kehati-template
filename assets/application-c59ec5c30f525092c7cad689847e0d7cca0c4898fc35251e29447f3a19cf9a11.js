function throttle(n, i) {
    var o, r, a, s = null,
        l = 0,
        u = function () {
            l = new Date, s = null, a = n.apply(o, r)
        };
    return function () {
        var e = new Date;
        l || (l = e);
        var t = i - (e - l);
        return o = this, r = arguments, t <= 0 ? (clearTimeout(s), s = null, l = e, a = n.apply(o, r)) : s || (s = setTimeout(u, t)), a
    }
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, e) {
    function s(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function t(e, n, i) {
        if (he.isFunction(n)) return he.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return he.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (Te.test(n)) return he.filter(n, e, i);
            n = he.filter(n, e)
        }
        return he.grep(e, function (e) {
            return -1 < he.inArray(e, n) !== i
        })
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function c(e) {
        var n = {};
        return he.each(e.match(Le) || [], function (e, t) {
            n[t] = !0
        }), n
    }

    function o() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", r), T.removeEventListener("load", r)) : (ie.detachEvent("onreadystatechange", r), T.detachEvent("onload", r))
    }

    function r() {
        (ie.addEventListener || "load" === T.event.type || "complete" === ie.readyState) && (o(), he.ready())
    }

    function l(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var i = "data-" + t.replace(We, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? he.parseJSON(n) : n)
                } catch (o) {}
                he.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function i(e, t, n, i) {
        if (je(e)) {
            var o, r, a = he.expando,
                s = e.nodeType,
                l = s ? he.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t) return u || (u = s ? e[a] = ne.pop() || he.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: he.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = he.extend(l[u], t) : l[u].data = he.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[he.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[he.camelCase(t)]) : o = r, o
        }
    }

    function a(e, t, n) {
        if (je(e)) {
            var i, o, r = e.nodeType,
                a = r ? he.cache : e,
                s = r ? e[he.expando] : he.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    o = (t = he.isArray(t) ? t.concat(he.map(t, he.camelCase)) : t in i ? [t] : (t = he.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !u(i) : !he.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (r ? he.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function d(e, t, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return he.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== u && +l) && ze.exec(he.css(e, t));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= r = r || ".5", he.style(e, t, c + u), r !== (r = s() / l) && 1 !== r && --a;);
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    function g(e) {
        var t = Ye.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, i, o = 0,
            r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || he.nodeName(i, t) ? r.push(i) : he.merge(r, v(i, t));
        return t === undefined || t && he.nodeName(e, t) ? he.merge([e], r) : r
    }

    function y(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) he._data(n, "globalEval", !t || he._data(t[i], "globalEval"))
    }

    function b(e) {
        Re.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t, n, i, o) {
        for (var r, a, s, l, u, c, d, f = e.length, h = g(t), p = [], m = 0; m < f; m++)
            if ((a = e[m]) || 0 === a)
                if ("object" === he.type(a)) he.merge(p, a.nodeType ? [a] : a);
                else if (Ve.test(a)) {
            for (l = l || h.appendChild(t.createElement("div")), u = (Be.exec(a) || ["", ""])[1].toLowerCase(), d = Qe[u] || Qe._default, l.innerHTML = d[1] + he.htmlPrefilter(a) + d[2], r = d[0]; r--;) l = l.lastChild;
            if (!de.leadingWhitespace && Ue.test(a) && p.push(t.createTextNode(Ue.exec(a)[0])), !de.tbody)
                for (r = (a = "table" !== u || Ge.test(a) ? "<table>" !== d[1] || Ge.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; r--;) he.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (he.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = h.lastChild
        } else p.push(t.createTextNode(a));
        for (l && h.removeChild(l), de.appendChecked || he.grep(v(p, "input"), b), m = 0; a = p[m++];)
            if (i && -1 < he.inArray(a, i)) o && o.push(a);
            else if (s = he.contains(a.ownerDocument, a), l = v(h.appendChild(a), "script"), s && y(l), n)
            for (r = 0; a = l[r++];) Xe.test(a.type || "") && n.push(a);
        return l = null, h
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function p() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function x(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = undefined), t) x(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = h;
        else if (!o) return e;
        return 1 === r && (a = o, (o = function (e) {
            return he().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, o, i, n)
        })
    }

    function w(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type, e
    }

    function k(e) {
        var t = st.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
        if (1 === t.nodeType && he.hasData(e)) {
            var n, i, o, r = he._data(e),
                a = he._data(t, r),
                s = r.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, o = s[n].length; i < o; i++) he.event.add(t, n, s[n][i]);
            a.data && (a.data = he.extend({}, a.data))
        }
    }

    function S(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[he.expando]) {
                for (i in (o = he._data(t)).events) he.removeEvent(t, i, o.handle);
                t.removeAttribute(he.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !he.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Re.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function $(n, i, o, r) {
        i = re.apply([], i);
        var e, t, a, s, l, u, c = 0,
            d = n.length,
            f = d - 1,
            h = i[0],
            p = he.isFunction(h);
        if (p || 1 < d && "string" == typeof h && !de.checkClone && at.test(h)) return n.each(function (e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), $(t, i, o, r)
        });
        if (d && (e = (u = m(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === u.childNodes.length && (u = e), e || r)) {
            for (a = (s = he.map(v(u, "script"), C)).length; c < d; c++) t = u, c !== f && (t = he.clone(t, !0, !0), a && he.merge(s, v(t, "script"))), o.call(n[c], t, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, he.map(s, k), c = 0; c < a; c++) t = s[c], Xe.test(t.type || "") && !he._data(t, "globalEval") && he.contains(l, t) && (t.src ? he._evalUrl && he._evalUrl(t.src) : he.globalEval((t.text || t.textContent || t.innerHTML || "").replace(lt, "")));
            u = e = null
        }
        return n
    }

    function A(e, t, n) {
        for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t) {
        var n = he(t.createElement(e)).appendTo(t.body),
            i = he.css(n[0], "display");
        return n.detach(), i
    }

    function L(e) {
        var t = ie,
            n = dt[e];
        return n || ("none" !== (n = N(e, t)) && n || ((t = ((ct = (ct || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ct[0].contentDocument).document).write(), t.close(), n = N(e, t), ct.detach()), dt[e] = n), n
    }

    function D(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function j(e) {
        if (e in St) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;)
            if ((e = Et[n] + t) in St) return e
    }

    function _(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (r[a] = he._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && qe(i) && (r[a] = he._data(i, "olddisplay", L(i.nodeName)))) : (o = qe(i), (n && "none" !== n || !o) && he._data(i, "olddisplay", o ? n : he.css(i, "display"))));
        for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function W(e, t, n) {
        var i = Ct.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function I(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + He[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + He[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + He[r] + "Width", !0, o))) : (a += he.css(e, "padding" + He[r], !0, o), "padding" !== n && (a += he.css(e, "border" + He[r] + "Width", !0, o)));
        return a
    }

    function F(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = gt(e),
            a = de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = vt(e, t, r)) < 0 || null == o) && (o = e.style[t]), ht.test(o)) return o;
            i = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + I(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function M(e, t, n, i, o) {
        return new M.prototype.init(e, t, n, i, o)
    }

    function O() {
        return T.setTimeout(function () {
            $t = undefined
        }), $t = he.now()
    }

    function z(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = He[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function H(e, t, n) {
        for (var i, o = (R.tweeners[t] || []).concat(R.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function q(t, e, n) {
        var i, o, r, a, s, l, u, c = this,
            d = {},
            f = t.style,
            h = t.nodeType && qe(t),
            p = he._data(t, "fxshow");
        for (i in n.queue || (null == (s = he._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, he.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = he.css(t, "display")) ? he._data(t, "olddisplay") || L(t.nodeName) : u) && "none" === he.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== L(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), e)
            if (o = e[i], Wt.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !p || p[i] === undefined) continue;
                    h = !0
                }
                d[i] = p && p[i] || he.style(t, i)
            } else u = undefined;
        if (he.isEmptyObject(d)) "inline" === ("none" === u ? L(t.nodeName) : u) && (f.display = u);
        else
            for (i in p ? "hidden" in p && (h = p.hidden) : p = he._data(t, "fxshow", {}), r && (p.hidden = !h), h ? he(t).show() : c.done(function () {
                    he(t).hide()
                }), c.done(function () {
                    var e;
                    for (e in he._removeData(t, "fxshow"), d) he.style(t, e, d[e])
                }), d) a = H(h ? p[i] : 0, i, c), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }

    function P(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (o = t[i = he.camelCase(n)], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a)
                for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
    }

    function R(r, e, t) {
        var n, a, i = 0,
            o = R.prefilters.length,
            s = he.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var e = $t || O(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(n);
                return s.notifyWith(r, [u, n, t]), n < 1 && o ? t : (s.resolveWith(r, [u]), !1)
            },
            u = s.promise({
                elem: r,
                props: he.extend({}, e),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: $t || O(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = he.Tween(r, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (s.notifyWith(r, [u, 1, 0]), s.resolveWith(r, [u, e])) : s.rejectWith(r, [u, e]), this
                }
            }),
            c = u.props;
        for (P(c, u.opts.specialEasing); i < o; i++)
            if (n = R.prefilters[i].call(u, r, c, u.opts)) return he.isFunction(n.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(n.stop, n)), n;
        return he.map(c, H, u), he.isFunction(u.opts.start) && u.opts.start.call(r, u), he.fx.timer(he.extend(l, {
            elem: r,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(e) {
        return he.attr(e, "class") || ""
    }

    function X(r) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(Le) || [];
            if (he.isFunction(t))
                for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function U(t, o, r, a) {
        function s(e) {
            var i;
            return l[e] = !0, he.each(t[e] || [], function (e, t) {
                var n = t(o, r, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (o.dataTypes.unshift(n), s(n), !1)
            }), i
        }
        var l = {},
            u = t === an;
        return s(o.dataTypes[0]) || !l["*"] && s("*")
    }

    function Y(e, t) {
        var n, i, o = he.ajaxSettings.flatOptions || {};
        for (i in t) t[i] !== undefined && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && he.extend(!0, e, n), e
    }

    function Q(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), o === undefined && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function V(e, t, n, i) {
        var o, r, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = u[l + " " + r] || u["* " + r]))
                for (o in u)
                    if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return e.style && e.style.display || he.css(e, "display")
    }

    function J(e) {
        if (!he.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(n, e, i, o) {
        var t;
        if (he.isArray(e)) he.each(e, function (e, t) {
            i || dn.test(n) ? o(n, t) : K(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== he.type(e)) o(n, e);
        else
            for (t in e) K(n + "[" + t + "]", e[t], i, o)
    }

    function Z() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new T.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        ie = T.document,
        oe = ne.slice,
        re = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        he = function (e, t) {
            return new he.fn.init(e, t)
        },
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        selector: "",
        length: 0,
        toArray: function () {
            return oe.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return he.each(this, e)
        },
        map: function (n) {
            return this.pushStack(he.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, he.extend = he.fn.extend = function (e) {
        var t, n, i, o, r, a, s = e || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" == typeof s || he.isFunction(s) || (s = {}), l === u && (s = this, l--); l < u; l++)
            if (null != (r = arguments[l]))
                for (o in r) t = s[o], s !== (i = r[o]) && (c && i && (he.isPlainObject(i) || (n = he.isArray(i))) ? (n ? (n = !1, a = t && he.isArray(t) ? t : []) : a = t && he.isPlainObject(t) ? t : {}, s[o] = he.extend(c, a, i)) : i !== undefined && (s[o] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === he.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !he.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return t === undefined || ce.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            e && he.trim(e) && (T.execScript || function (e) {
                T.eval.call(T, e)
            })(e)
        },
        camelCase: function (e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var n, i = 0;
            if (s(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(pe, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (se) return se.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
            if (n != n)
                for (; t[i] !== undefined;) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var i, o, r = 0,
                a = [];
            if (s(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), he.isFunction(e) ? (n = oe.call(arguments, 2), (i = function () {
                return e.apply(t || this, n.concat(oe.call(arguments)))
            }).guid = e.guid = e.guid || he.guid++, i) : undefined
        },
        now: function () {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ne[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function (n) {
        function x(e, t, n, i) {
            var o, r, a, s, l, u, c, d, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : H) !== j && D(t), t = t || j, W)) {
                if (11 !== h && (u = ve.exec(e)))
                    if (o = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (f && (a = f.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && v.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                    } if (v.qsa && !X[e + " "] && (!I || !I.test(e))) {
                    if (1 !== h) f = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = z), r = (c = E(e)).length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) c[r] = l + " " + g(c[r]);
                        d = c.join(","), f = ye.test(e) && m(t.parentNode) || t
                    }
                    if (d) try {
                        return K.apply(n, f.querySelectorAll(d)), n
                    } catch (p) {} finally {
                        s === z && t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(se, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > C.cacheLength && delete n[i.shift()], n[e + " "] = t
            }
            var i = [];
            return n
        }

        function l(e) {
            return e[z] = !0, e
        }

        function o(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function u(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function i(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function a(a) {
            return l(function (r) {
                return r = +r, l(function (e, t) {
                    for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function m(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function s() {}

        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(s, e, t) {
            var l = e.dir,
                u = t && "parentNode" === l,
                c = P++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || u) return s(e, t, n)
            } : function (e, t, n) {
                var i, o, r, a = [q, c];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || u) {
                            if ((i = (o = (r = e[z] || (e[z] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && i[0] === q && i[1] === c) return a[2] = i[2];
                            if ((o[l] = a)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function f(o) {
            return 1 < o.length ? function (e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function y(e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) x(e, t[i], n);
            return n
        }

        function w(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
            return a
        }

        function b(h, p, m, g, v, e) {
            return g && !g[z] && (g = b(g)), v && !v[z] && (v = b(v, e)), l(function (e, t, n, i) {
                var o, r, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || y(p || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && p ? c : w(c, s, h, n, i),
                    f = m ? v || (e ? h : u || g) ? [] : t : d;
                if (m && m(d, f, n, i), g)
                    for (o = w(f, l), g(o, [], n, i), r = o.length; r--;)(a = o[r]) && (f[l[r]] = !(d[l[r]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (o = [], r = f.length; r--;)(a = f[r]) && o.push(d[r] = a);
                            v(null, f = [], o, i)
                        }
                        for (r = f.length; r--;)(a = f[r]) && -1 < (o = v ? ee(e, a) : s[r]) && (e[o] = !(t[o] = a))
                    }
                } else f = w(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : K.apply(t, f)
            })
        }

        function h(e) {
            for (var o, t, n, i = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = d(function (e) {
                    return e === o
                }, a, !0), u = d(function (e) {
                    return -1 < ee(o, e)
                }, a, !0), c = [function (e, t, n) {
                    var i = !r && (n || t !== A) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return o = null, i
                }]; s < i; s++)
                if (t = C.relative[e[s].type]) c = [d(f(c), t)];
                else {
                    if ((t = C.filter[e[s].type].apply(null, e[s].matches))[z]) {
                        for (n = ++s; n < i && !C.relative[e[n].type]; n++);
                        return b(1 < s && f(c), 1 < s && g(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), t, s < n && h(e.slice(s, n)), n < i && h(e = e.slice(n)), n < i && g(e))
                    }
                    c.push(t)
                } return f(c)
        }

        function c(g, v) {
            var y = 0 < v.length,
                b = 0 < g.length,
                e = function (e, t, n, i, o) {
                    var r, a, s, l = 0,
                        u = "0",
                        c = e && [],
                        d = [],
                        f = A,
                        h = e || b && C.find.TAG("*", o),
                        p = q += null == f ? 1 : Math.random() || .1,
                        m = h.length;
                    for (o && (A = t === j || t || o); u !== m && null != (r = h[u]); u++) {
                        if (b && r) {
                            for (a = 0, t || r.ownerDocument === j || (D(r), n = !W); s = g[a++];)
                                if (s(r, t || j, n)) {
                                    i.push(r);
                                    break
                                } o && (q = p)
                        }
                        y && ((r = !s && r) && l--, e && c.push(r))
                    }
                    if (l += u, y && u !== l) {
                        for (a = 0; s = v[a++];) s(c, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || d[u] || (d[u] = G.call(i));
                            d = w(d)
                        }
                        K.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && x.uniqueSort(i)
                    }
                    return o && (q = p, A = f), c
                };
            return y ? l(e) : e
        }
        var p, v, C, T, k, E, S, $, A, N, L, D, j, _, W, I, F, M, O, z = "sizzle" + 1 * new Date,
            H = n.document,
            q = 0,
            P = 0,
            R = e(),
            B = e(),
            X = e(),
            U = function (e, t) {
                return e === t && (L = !0), 0
            },
            Y = 1 << 31,
            Q = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            J = V.push,
            K = V.push,
            Z = V.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            fe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function () {
                D()
            };
        try {
            K.apply(V = Z.call(H.childNodes), H.childNodes), V[H.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: V.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (p in v = x.support = {}, k = x.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = x.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : H;
                return i !== j && 9 === i.nodeType && i.documentElement && (_ = (j = i).documentElement, W = !k(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), v.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), v.getElementsByTagName = o(function (e) {
                    return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                }), v.getElementsByClassName = ge.test(j.getElementsByClassName), v.getById = o(function (e) {
                    return _.appendChild(e).id = z, !j.getElementsByName || !j.getElementsByName(z).length
                }), v.getById ? (C.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && W) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(xe, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function (e) {
                    var n = e.replace(xe, we);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), C.find.TAG = v.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, C.find.CLASS = v.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && W) return t.getElementsByClassName(e)
                }, F = [], I = [], (v.qsa = ge.test(j.querySelectorAll)) && (o(function (e) {
                    _.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || I.push(".#.+[+~]")
                }), o(function (e) {
                    var t = j.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (v.matchesSelector = ge.test(M = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && o(function (e) {
                    v.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), F.push("!=", re)
                }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = ge.test(_.compareDocumentPosition), O = t || ge.test(_.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function (e, t) {
                    if (e === t) return L = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === H && O(H, e) ? -1 : t === j || t.ownerDocument === H && O(H, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return L = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !r) return e === j ? -1 : t === j ? 1 : o ? -1 : r ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (o === r) return u(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? u(a[i], s[i]) : a[i] === H ? -1 : s[i] === H ? 1 : 0
                }), j
            }, x.matches = function (e, t) {
                return x(e, null, null, t)
            }, x.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== j && D(e), t = t.replace(ce, "='$1']"), v.matchesSelector && W && !X[t + " "] && (!F || !F.test(t)) && (!I || !I.test(t))) try {
                    var n = M.call(e, t);
                    if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (Te) {}
                return 0 < x(t, j, null, [e]).length
            }, x.contains = function (e, t) {
                return (e.ownerDocument || e) !== j && D(e), O(e, t)
            }, x.attr = function (e, t) {
                (e.ownerDocument || e) !== j && D(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !W) : undefined;
                return i !== undefined ? i : v.attributes || !W ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, x.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, x.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (L = !v.detectDuplicates, N = !v.sortStable && e.slice(0), e.sort(U), L) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return N = null, e
            }, T = x.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, (C = x.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = R[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, o) {
                        return function (e) {
                            var t = x.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function (p, e, t, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === g ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var i, o, r, a, s, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                f = !n && !b,
                                h = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (a = e; a = a[u];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && f) {
                                    for (h = (s = (i = (o = (r = (a = c)[z] || (a[z] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === q && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) {
                                            o[p] = [q, s, h];
                                            break
                                        }
                                } else if (f && (h = s = (i = (o = (r = (a = e)[z] || (a[z] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === q && i[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (f && ((o = (r = a[z] || (a[z] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [q, h]), a !== e)););
                                return (h -= g) === m || h % m == 0 && 0 <= h / m
                            }
                        }
                    },
                    PSEUDO: function (e, r) {
                        var t, a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                        return a[z] ? a(r) : 1 < a.length ? (t = [e, e, "", r], C.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function (e, t) {
                            for (var n, i = a(e, r), o = i.length; o--;) e[n = ee(e, i[o])] = !(t[n] = i[o])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: l(function (e) {
                        var i = [],
                            o = [],
                            s = S(e.replace(se, "$1"));
                        return s[z] ? l(function (e, t, n, i) {
                            for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, t, n) {
                            return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: l(function (t) {
                        return function (e) {
                            return 0 < x(t, e).length
                        }
                    }),
                    contains: l(function (t) {
                        return t = t.replace(xe, we),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || T(e)).indexOf(t)
                            }
                    }),
                    lang: l(function (n) {
                        return fe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(xe, we).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = W ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === _
                    },
                    focus: function (e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function (e) {
                        return me.test(e.nodeName)
                    },
                    input: function (e) {
                        return pe.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (e, t) {
                        return [t - 1]
                    }),
                    eq: a(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: a(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: a(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = C.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[p] = i(p);
        for (p in {
                submit: !0,
                reset: !0
            }) C.pseudos[p] = r(p);
        return s.prototype = C.filters = C.pseudos, C.setFilters = new s, E = x.tokenize = function (e, t) {
            var n, i, o, r, a, s, l, u = B[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = C.preFilter; a;) {
                for (r in n && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = ue.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(se, " ")
                    }), a = a.slice(n.length)), C.filter) !(i = he[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? x.error(e) : B(e, s).slice(0)
        }, S = x.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = X[e + " "];
            if (!r) {
                for (t || (t = E(e)), n = t.length; n--;)(r = h(t[n]))[z] ? i.push(r) : o.push(r);
                (r = X(e, c(o, i))).selector = e
            }
            return r
        }, $ = x.select = function (e, t, n, i) {
            var o, r, a, s, l, u = "function" == typeof e && e,
                c = !i && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && v.getById && 9 === t.nodeType && W && C.relative[r[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(r[0].type) && m(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && g(r))) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || S(e, c))(i, t, !W, n, !t || ye.test(e) && m(t.parentNode) || t), n
        }, v.sortStable = z.split("").sort(U).join("") === z, v.detectDuplicates = !!L, D(), v.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), v.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), x
    }(T);
    he.find = ye, he.expr = ye.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ye.uniqueSort, he.text = ye.getText, he.isXMLDoc = ye.isXML, he.contains = ye.contains;
    var be = function (e, t, n) {
            for (var i = [], o = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && he(e).is(n)) break;
                    i.push(e)
                } return i
        },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = he.expr.match.needsContext,
        Ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Te = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < o; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (t = 0; t < o; t++) he.find(e, i[t], n);
            return (n = this.pushStack(1 < o ? he.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function (e) {
            return !!t(this, "string" == typeof e && we.test(e) ? he(e) : e || [], !1).length
        }
    });
    var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (he.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || ke, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : he.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(he) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), he.makeArray(e, this));
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Ee.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), Ce.test(i[1]) && he.isPlainObject(t))
                for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        if ((o = ie.getElementById(i[2])) && o.parentNode) {
            if (o.id !== i[2]) return ke.find(e);
            this.length = 1, this[0] = o
        }
        return this.context = ie, this.selector = e, this
    }).prototype = he.fn, ke = he(ie);
    var Se = /^(?:parents|prev(?:Until|All))/,
        $e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function (e) {
            var t, n = he(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)
                    if (he.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], a = we.test(e) || "string" != typeof e ? he(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? he.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return be(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function (e) {
            return n(e, "nextSibling")
        },
        prev: function (e) {
            return n(e, "previousSibling")
        },
        nextAll: function (e) {
            return be(e, "nextSibling")
        },
        prevAll: function (e) {
            return be(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return xe(e.firstChild)
        },
        contents: function (e) {
            return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes)
        }
    }, function (i, o) {
        he.fn[i] = function (e, t) {
            var n = he.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = he.filter(t, n)), 1 < this.length && ($e[i] || (n = he.uniqueSort(n)), Se.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var Ae, Ne, Le = /\S+/g;
    for (Ne in he.Callbacks = function (i) {
            i = "string" == typeof i ? c(i) : he.extend({}, i);
            var o, e, t, n, r = [],
                a = [],
                s = -1,
                l = function () {
                    for (n = i.once, t = o = !0; a.length; s = -1)
                        for (e = a.shift(); ++s < r.length;) !1 === r[s].apply(e[0], e[1]) && i.stopOnFalse && (s = r.length, e = !1);
                    i.memory || (e = !1), o = !1, n && (r = e ? [] : "")
                },
                u = {
                    add: function () {
                        return r && (e && !o && (s = r.length - 1, a.push(e)), function n(e) {
                            he.each(e, function (e, t) {
                                he.isFunction(t) ? i.unique && u.has(t) || r.push(t) : t && t.length && "string" !== he.type(t) && n(t)
                            })
                        }(arguments), e && !o && l()), this
                    },
                    remove: function () {
                        return he.each(arguments, function (e, t) {
                            for (var n; - 1 < (n = he.inArray(t, r, n));) r.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function (e) {
                        return e ? -1 < he.inArray(e, r) : 0 < r.length
                    },
                    empty: function () {
                        return r && (r = []), this
                    },
                    disable: function () {
                        return n = a = [], r = e = "", this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return n = !0, e || u.disable(), this
                    },
                    locked: function () {
                        return !!n
                    },
                    fireWith: function (e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), o || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!t
                    }
                };
            return u
        }, he.extend({
            Deferred: function (e) {
                var r = [
                        ["resolve", "done", he.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", he.Callbacks("memory")]
                    ],
                    o = "pending",
                    a = {
                        state: function () {
                            return o
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var o = arguments;
                            return he.Deferred(function (i) {
                                he.each(r, function (e, t) {
                                    var n = he.isFunction(o[e]) && o[e];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && he.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? he.extend(e, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, he.each(r, function (e, t) {
                    var n = t[2],
                        i = t[3];
                    a[t[1]] = n.add, i && n.add(function () {
                        o = i
                    }, r[1 ^ e][2].disable, r[2][2].lock), s[t[0]] = function () {
                        return s[t[0] + "With"](this === s ? a : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function (e) {
                var o, t, n, i = 0,
                    r = oe.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && he.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : he.Deferred(),
                    u = function (t, n, i) {
                        return function (e) {
                            n[t] = this, i[t] = 1 < arguments.length ? oe.call(arguments) : e, i === o ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (1 < a)
                    for (o = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) r[i] && he.isFunction(r[i].promise) ? r[i].promise().progress(u(i, t, o)).done(u(i, n, r)).fail(l.reject) : --s;
                return s || l.resolveWith(n, r), l.promise()
            }
        }), he.fn.ready = function (e) {
            return he.ready.promise().done(e), this
        }, he.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? he.readyWait++ : he.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0) !== e && 0 < --he.readyWait || (Ae.resolveWith(ie, [he]), he.fn.triggerHandler && (he(ie).triggerHandler("ready"), he(ie).off("ready")))
            }
        }), he.ready.promise = function (e) {
            if (!Ae)
                if (Ae = he.Deferred(), "complete" === ie.readyState || !== ie.readyState && !ie.documentElement.doScroll) T.setTimeout(he.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", r), T.addEventListener("load", r);
            else {
                ie.attachEvent("onreadystatechange", r), T.attachEvent("onload", r);
                var t = !1;
                try {
                    t = null == T.frameElement && ie.documentElement
                } catch (n) {}
                t && t.doScroll && function i() {
                    if (!he.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (n) {
                            return T.setTimeout(i, 50)
                        }
                        o(), he.ready()
                    }
                }()
            }
            return Ae.promise(e)
        }, he.ready.promise(), he(de)) break;
    de.ownFirst = "0" === Ne, de.inlineBlockNeedsLayout = !1, he(function () {
            var e, t, n, i;
            (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function () {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var De, je = function (e) {
            var t = he.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        We = /([A-Z])/g;
    he.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return !!(e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando]) && !u(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return a(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return a(e, t, !0)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function () {
                he.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                he.data(this, e, t)
            }) : r ? l(r, e, he.data(r, e)) : undefined;
            if (this.length && (o = he.data(r), 1 === r.nodeType && !he._data(r, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(r, i = he.camelCase(i.slice(5)), o[i]);
                he._data(r, "parsedAttrs", !0)
            }
            return o
        },
        removeData: function (e) {
            return this.each(function () {
                he.removeData(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = he._data(e, t), n && (!i || he.isArray(n) ? i = he._data(e, t, he.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = he._queueHooks(e, t),
                a = function () {
                    he.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return he._data(e, n) || he._data(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    he._removeData(e, t + "queue"), he._removeData(e, n)
                })
            })
        }
    }), he.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? he.queue(this[0], t) : n === undefined ? this : this.each(function () {
                var e = he.queue(this, t, n);
                he._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = he.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = he._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    }), de.shrinkWrapBlocks = function () {
        return null != De ? De : (De = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", De = 3 !== e.offsetWidth), t.removeChild(n), De) : void 0);
        var e, t, n
    };
    var Ie, Fe, Me, Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ze = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        He = ["Top", "Right", "Bottom", "Left"],
        qe = function (e, t) {
            return e = t || e, "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e)
        },
        Pe = function (e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === he.type(n))
                for (s in o = !0, n) Pe(e, t, s, n[s], !0, r, a);
            else if (i !== undefined && (o = !0, he.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(he(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        Re = /^(?:checkbox|radio)$/i,
        Be = /<([\w:-]+)/,
        Xe = /^$|\/(?:java|ecma)script/i,
        Ue = /^\s+/,
        Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Ie = ie.createElement("div"), Fe = ie.createDocumentFragment(), Me = ie.createElement("input"), Ie.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === Ie.firstChild.nodeType, de.tbody = !Ie.getElementsByTagName("tbody").length, de.htmlSerialize = !!Ie.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, Me.type = "checkbox", Me.checked = !0, Fe.appendChild(Me), de.appendChecked = Me.checked, Ie.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Ie.cloneNode(!0).lastChild.defaultValue, Fe.appendChild(Ie), (Me = ie.createElement("input")).setAttribute("type", "radio"), Me.setAttribute("checked", "checked"), Me.setAttribute("name", "t"), Ie.appendChild(Me), de.checkClone = Ie.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Ie.addEventListener, Ie[he.expando] = 1, de.attributes = !Ie.getAttribute(he.expando);
    var Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Ve = /<|&#?\w+;/,
        Ge = /<tbody/i;
    ! function () {
        var e, t, n = ie.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (de[e] = t in T) || (n.setAttribute(t, "t"), de[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Je = /^(?:input|select|textarea)$/i,
        Ke = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^(?:focusinfocus|focusoutblur)$/,
        tt = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, h, p, m, g = he._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = he.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function (e) {
                        return void 0 === he || e && he.event.triggered === e.type ? undefined : he.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(Le) || [""]).length; s--;) h = m = (r = tt.exec(t[s]) || [])[1], p = (r[2] || "").split(".").sort(), h && (u = he.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = he.event.special[h] || {}, d = he.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && he.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, l), (f = a[h]) || ((f = a[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), he.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, h, p, m, g = he.hasData(e) && he._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(Le) || [""]).length; u--;)
                    if (h = m = (s = tt.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = he.event.special[h] || {}, f = c[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || he.removeEvent(e, h, g.handle), delete c[h])
                    } else
                        for (h in c) he.event.remove(e, h + t[u], n, i, !0);
                he.isEmptyObject(c) && (delete g.handle, he._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var o, r, a, s, l, u, c, d = [n || ie],
                f = ce.call(e, "type") ? e.type : e,
                h = ce.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || ie, 3 !== n.nodeType && 8 !== n.nodeType && !et.test(f + he.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, (e = e[he.expando] ? e : new he.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : he.makeArray(t, [e]), l = he.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !he.isWindow(n)) {
                    for (s = l.delegateType || f, et.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || ie) && d.push(u.defaultView || u.parentWindow || T)
                }
                for (c = 0;
                    (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || f, (o = (he._data(a, "events") || {})[e.type] && he._data(a, "handle")) && o.apply(a, t), (o = r && a[r]) && o.apply && je(a) && (e.result = o.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && je(n) && r && n[f] && !he.isWindow(n)) {
                    (u = n[r]) && (n[r] = null), he.event.triggered = f;
                    try {
                        n[f]()
                    } catch (p) {}
                    he.event.triggered = undefined, u && (n[r] = u)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = he.event.fix(e);
            var t, n, i, o, r, a = [],
                s = oe.call(arguments),
                l = (he._data(this, "events") || {})[e.type] || [],
                u = he.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = he.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) i[o = (r = t[n]).selector + " "] === undefined && (i[o] = r.needsContext ? -1 < he(o, this).index(l) : he.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[he.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ze.test(o) ? this.mouseHooks : Ke.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new he.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || ie).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === p() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (he.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, he.removeEvent = ie.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, he.Event = function (e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? f : h) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, r) {
        he.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
                var t, n = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === n || he.contains(n, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), de.submit || (he.event.special.submit = {
        setup: function () {
            if (he.nodeName(this, "form")) return !1;
            he.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = he.nodeName(t, "input") || he.nodeName(t, "button") ? he.prop(t, "form") : undefined;
                n && !he._data(n, "submit") && (he.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), he._data(n, "submit", !0))
            })
        },
        postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e))
        },
        teardown: function () {
            if (he.nodeName(this, "form")) return !1;
            he.event.remove(this, "._submit")
        }
    }), de.change || (he.event.special.change = {
        setup: function () {
            if (Je.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (he.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), he.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), he.event.simulate("change", this, e)
            })), !1;
            he.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Je.test(t.nodeName) && !he._data(t, "change") && (he.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e)
                }), he._data(t, "change", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return he.event.remove(this, "._change"), !Je.test(this.nodeName)
        }
    }), de.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var o = function (e) {
            he.event.simulate(i, e.target, he.event.fix(e))
        };
        he.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = he._data(e, i);
                t || e.addEventListener(n, o, !0), he._data(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = he._data(e, i) - 1;
                t ? he._data(e, i, t) : (e.removeEventListener(n, o, !0), he._removeData(e, i))
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {
            return x(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return x(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = h), this.each(function () {
                he.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        },
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    });
    var nt = / jQuery\d+="(?:null|\d+)"/g,
        it = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
        ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        rt = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^true\/(.*)/,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ut = g(ie).appendChild(ie.createElement("div"));
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(ot, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, a, s, l = he.contains(e.ownerDocument, e);
            if (de.html5Clone || he.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(r = ut.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (i = v(r), s = v(e), a = 0; null != (o = s[a]); ++a) i[a] && S(o, i[a]);
            if (t)
                if (n)
                    for (s = s || v(e), i = i || v(r), a = 0; null != (o = s[a]); a++) E(o, i[a]);
                else E(e, r);
            return 0 < (i = v(r, "script")).length && y(i, !l && v(e, "script")), i = s = o = null, r
        },
        cleanData: function (e, t) {
            for (var n, i, o, r, a = 0, s = he.expando, l = he.cache, u = de.attributes, c = he.event.special; null != (n = e[a]); a++)
                if ((t || je(n)) && (r = (o = n[s]) && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? he.event.remove(n, i) : he.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(o))
                }
        }
    }), he.fn.extend({
        domManip: $,
        detach: function (e) {
            return A(this, e, !0)
        },
        remove: function (e) {
            return A(this, e)
        },
        text: function (e) {
            return Pe(this, function (e) {
                return e === undefined ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return $(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return $(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return $(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return $(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && he.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && he.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        },
        html: function (e) {
            return Pe(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                if ("string" == typeof e && !rt.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !Ue.test(e)) && !Qe[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return $(this, arguments, function (e) {
                var t = this.parentNode;
                he.inArray(this, n) < 0 && (he.cleanData(v(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        he.fn[e] = function (e) {
            for (var t, n = 0, i = [], o = he(e), r = o.length - 1; n <= r; n++) t = n === r ? this : this.clone(!0), he(o[n])[a](t), ae.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var ct, dt = {
            HTML: "block",
            BODY: "block"
        },
        ft = /^margin/,
        ht = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        pt = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
            return o
        },
        mt = ie.documentElement;
    ! function () {
        function e() {
            var e, t, n = ie.documentElement;
            n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = l = !1, o = s = !0, T.getComputedStyle && (t = T.getComputedStyle(c), i = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, r = "4px" === (t || {
                width: "4px"
            }).width, c.style.marginRight = "50%", o = "4px" === (t || {
                marginRight: "4px"
            }).marginRight, (e = c.appendChild(ie.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((
                T.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(u)
        }
        var i, o, r, a, s, l, u = ie.createElement("div"),
            c = ie.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, he.extend(de, {
            reliableHiddenOffsets: function () {
                return null == i && e(), a
            },
            boxSizingReliable: function () {
                return null == i && e(), r
            },
            pixelMarginRight: function () {
                return null == i && e(), o
            },
            pixelPosition: function () {
                return null == i && e(), i
            },
            reliableMarginRight: function () {
                return null == i && e(), s
            },
            reliableMarginLeft: function () {
                return null == i && e(), l
            }
        }))
    }();
    var gt, vt, yt = /^(top|right|bottom|left)$/;
    T.getComputedStyle ? (gt = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T), t.getComputedStyle(e)
    }, vt = function (e, t, n) {
        var i, o, r, a, s = e.style;
        return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), n && !de.pixelMarginRight() && ht.test(a) && ft.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), a === undefined ? a : a + ""
    }) : mt.currentStyle && (gt = function (e) {
        return e.currentStyle
    }, vt = function (e, t, n) {
        var i, o, r, a, s = e.style;
        return null == (a = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]), ht.test(a) && !yt.test(t) && (i = s.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), a === undefined ? a : a + "" || "auto"
    });
    var bt = /alpha\([^)]*\)/i,
        xt = /opacity\s*=\s*([^)]*)/i,
        wt = /^(none|table(?!-c[ea]).+)/,
        Ct = new RegExp("^(" + Oe + ")(.*)$", "i"),
        Tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Et = ["Webkit", "O", "Moz", "ms"],
        St = ie.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = he.camelCase(t),
                    l = e.style;
                if (t = he.cssProps[s] || (he.cssProps[s] = j(s) || s), a = he.cssHooks[t] || he.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(e, !1, i)) !== undefined ? o : l[t];
                if ("string" === (r = typeof n) && (o = ze.exec(n)) && o[1] && (n = d(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = he.camelCase(t);
            return t = he.cssProps[s] || (he.cssProps[s] = j(s) || s), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), r === undefined && (r = vt(e, t, i)), "normal" === r && t in kt && (r = kt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), he.each(["height", "width"], function (e, o) {
        he.cssHooks[o] = {
            get: function (e, t, n) {
                if (t) return wt.test(he.css(e, "display")) && 0 === e.offsetWidth ? pt(e, Tt, function () {
                    return F(e, o, n)
                }) : F(e, o, n)
            },
            set: function (e, t, n) {
                var i = n && gt(e);
                return W(e, t, n ? I(e, o, n, de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.opacity || (he.cssHooks.opacity = {
        get: function (e, t) {
            return xt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === he.trim(r.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = bt.test(r) ? r.replace(bt, o) : r + " " + o)
        }
    }), he.cssHooks.marginRight = D(de.reliableMarginRight, function (e, t) {
        if (t) return pt(e, {
            display: "inline-block"
        }, vt, [e, "marginRight"])
    }), he.cssHooks.marginLeft = D(de.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(vt(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (o, r) {
        he.cssHooks[o + r] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + He[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, ft.test(o) || (he.cssHooks[o + r].set = W)
    }), he.fn.extend({
        css: function (e, t) {
            return Pe(this, function (e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (he.isArray(t)) {
                    for (i = gt(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
                    return r
                }
                return n !== undefined ? he.style(e, t, n) : he.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function () {
            return _(this, !0)
        },
        hide: function () {
            return _(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? he(this).show() : he(this).hide()
            })
        }
    }), (he.Tween = M).prototype = {
        constructor: M,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = M.prototype.init, he.fx.step = {};
    var $t, At, Nt, Lt, Dt, jt, _t, Wt = /^(?:toggle|show|hide)$/,
        It = /queueHooks$/;
    he.Animation = he.extend(R, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, ze.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
        },
        prefilters: [q],
        prefilter: function (e, t) {
            t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return i.duration = he.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in he.fx.speeds ? he.fx.speeds[i.duration] : he.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
        }, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (t, e, n, i) {
            var o = he.isEmptyObject(t),
                r = he.speed(e, n, i),
                a = function () {
                    var e = R(this, he.extend({}, t), r);
                    (o || he._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function (o, e, r) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = undefined), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = he.timers,
                    i = he._data(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && It.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || he.dequeue(this, o)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = he._data(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    o = he.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, he.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, i) {
        var o = he.fn[i];
        he.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(z(i, !0), e, t, n)
        }
    }), he.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, i) {
        he.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = he.timers,
            n = 0;
        for ($t = he.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || he.fx.stop(), $t = undefined
    }, he.fx.timer = function (e) {
        he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function () {
        At || (At = T.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function () {
        T.clearInterval(At), At = null
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function (i, e) {
        return i = he.fx && he.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, Lt = ie.createElement("input"), Dt = ie.createElement("div"), jt = ie.createElement("select"), _t = jt.appendChild(ie.createElement("option")), (Dt = ie.createElement("div")).setAttribute("className", "t"), Dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Nt = Dt.getElementsByTagName("a")[0], Lt.setAttribute("type", "checkbox"), Dt.appendChild(Lt), (Nt = Dt.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== Dt.className, de.style = /top/.test(Nt.getAttribute("style")), de.hrefNormalized = "/a" === Nt.getAttribute("href"), de.checkOn = !!Lt.value, de.optSelected = _t.selected, de.enctype = !!ie.createElement("form").enctype, jt.disabled = !0, de.optDisabled = !_t.disabled, (Lt = ie.createElement("input")).setAttribute("value", ""), de.input = "" === Lt.getAttribute("value"), Lt.value = "t", Lt.setAttribute("type", "radio"), de.radioValue = "t" === Lt.value;
    var Ft = /\r/g,
        Mt = /[\x20\t\r\n\f]+/g;
    he.fn.extend({
        val: function (n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = he.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, he(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : he.isArray(t) && (t = he.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (i = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof (e = t.value) ? e.replace(Ft, "") : null == e ? "" : e : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : he.trim(he.text(e)).replace(Mt, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (((n = i[l]).selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;)
                        if (i = o[a], -1 < he.inArray(he.valHooks.option.get(i), r)) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (he.isArray(t)) return e.checked = -1 < he.inArray(he(e).val(), t)
            }
        }, de.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ot, zt, Ht = he.expr.attrHandle,
        qt = /^(?:checked|selected)$/i,
        Pt = de.getSetAttribute,
        Rt = de.input;
    he.fn.extend({
        attr: function (e, t) {
            return Pe(this, he.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (t = t.toLowerCase(), o = he.attrHooks[t] || (he.expr.match.bool.test(t) ? zt : Ot)), n !== undefined ? null === n ? void he.removeAttr(e, t) : o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(Le);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = he.propFix[n] || n, he.expr.match.bool.test(n) ? Rt && Pt || !qt.test(n) ? e[i] = !1 : e[he.camelCase("default-" + n)] = e[i] = !1 : he.attr(e, n, ""), e.removeAttribute(Pt ? n : i)
        }
    }), zt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : Rt && Pt || !qt.test(n) ? e.setAttribute(!Pt && he.propFix[n] || n, n) : e[he.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = Ht[t] || he.find.attr;
        Rt && Pt || !qt.test(t) ? Ht[t] = function (e, t, n) {
            var i, o;
            return n || (o = Ht[t], Ht[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, Ht[t] = o), i
        } : Ht[t] = function (e, t, n) {
            if (!n) return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Rt && Pt || (he.attrHooks.value = {
        set: function (e, t, n) {
            if (!he.nodeName(e, "input")) return Ot && Ot.set(e, t, n);
            e.defaultValue = t
        }
    }), Pt || (Ot = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Ht.id = Ht.name = Ht.coords = function (e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, he.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Ot.set
    }, he.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ot.set(e, "" !== t && t, n)
        }
    }, he.each(["width", "height"], function (e, n) {
        he.attrHooks[n] = {
            set: function (e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), de.style || (he.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || undefined
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Bt = /^(?:input|select|textarea|button|object)$/i,
        Xt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Pe(this, he.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (t) {
            return t = he.propFix[t] || t, this.each(function () {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {}
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Bt.test(e.nodeName) || Xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || he.each(["href", "src"], function (e, t) {
        he.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), de.enctype || (he.propFix.enctype = "encoding");
    var Ut = /[\t\r\n\f]/g;
    he.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, a, s, l = 0;
            if (he.isFunction(t)) return this.each(function (e) {
                he(this).addClass(t.call(this, e, B(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Le) || []; n = this[l++];)
                    if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ut, " ")) {
                        for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = he.trim(i)) && he.attr(n, "class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, a, s, l = 0;
            if (he.isFunction(t)) return this.each(function (e) {
                he(this).removeClass(t.call(this, e, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Le) || []; n = this[l++];)
                    if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ut, " ")) {
                        for (a = 0; r = e[a++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (s = he.trim(i)) && he.attr(n, "class", s)
                    } return this
        },
        toggleClass: function (o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : he.isFunction(o) ? this.each(function (e) {
                he(this).toggleClass(o.call(this, e, B(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if ("string" === r)
                    for (t = 0, n = he(this), i = o.match(Le) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== undefined && "boolean" !== r || ((e = B(this)) && he._data(this, "__className__", e), he.attr(this, "class", e || !1 === o ? "" : he._data(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + B(n) + " ").replace(Ut, " ").indexOf(t)) return !0;
            return !1
        }
    }), he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        he.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Yt = T.location,
        Qt = he.now(),
        Vt = /\?/,
        Gt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    he.parseJSON = function (e) {
        if (T.JSON && T.JSON.parse) return T.JSON.parse(e + "");
        var o, r = null,
            t = he.trim(e + "");
        return t && !he.trim(t.replace(Gt, function (e, t, n, i) {
            return o && t && (r = 0), 0 === r ? e : (o = n || t, r += !i - !n, "")
        })) ? Function("return " + t)() : he.error("Invalid JSON: " + e)
    }, he.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            T.DOMParser ? t = (new T.DOMParser).parseFromString(e, "text/xml") : ((t = new T.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + e), t
    };
    var Jt = /#.*$/,
        Kt = /([?&])_=[^&]*/,
        Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        tn = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        rn = {},
        an = {},
        sn = "*/".concat("*"),
        ln = Yt.href,
        un = on.exec(ln.toLowerCase()) || [];
    he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: en.test(un[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": he.parseJSON,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Y(Y(e, he.ajaxSettings), t) : Y(he.ajaxSettings, e)
        },
        ajaxPrefilter: X(rn),
        ajaxTransport: X(an),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var o, r, a, s, l, u = t;
                2 !== w && (w = 2, f && T.clearTimeout(f), p = undefined, d = i || "", C.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = Q(m, C, n)), s = V(m, s, C, o), o ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (he.lastModified[c] = l), (l = C.getResponseHeader("etag")) && (he.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, r = s.data, o = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || u) + "", o ? y.resolveWith(g, [r, u, C]) : y.rejectWith(g, [C, u, a]), C.statusCode(x), x = undefined, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [C, m, o ? r : a]), b.fireWith(g, [C, u]), h && (v.trigger("ajaxComplete", [C, m]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var i, o, c, d, f, h, p, r, m = he.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? he(g) : he.event,
                y = he.Deferred(),
                b = he.Callbacks("once memory"),
                x = m.statusCode || {},
                a = {},
                s = {},
                w = 0,
                l = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!r)
                                for (r = {}; t = Zt.exec(d);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || l;
                        return p && p.abort(t), n(0, t), this
                    }
                };
            if (y.promise(C).complete = b.add, C.success = C.done, C.error = C.fail, m.url = ((e || m.url || ln) + "").replace(Jt, "").replace(nn, un[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = he.trim(m.dataType || "*").toLowerCase().match(Le) || [""], null == m.crossDomain && (i = on.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = he.param(m.data, m.traditional)), U(rn, m, t, C), 2 === w) return C;
            for (o in (h = he.event && m.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !tn.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Vt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Kt.test(c) ? c.replace(Kt, "$1_=" + Qt++) : c + (Vt.test(c) ? "&" : "?") + "_=" + Qt++)), m.ifModified && (he.lastModified[c] && C.setRequestHeader("If-Modified-Since", he.lastModified[c]), he.etag[c] && C.setRequestHeader("If-None-Match", he.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, C, m) || 2 === w)) return C.abort();
            for (o in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[o](m[o]);
            if (p = U(an, m, t, C)) {
                if (C.readyState = 1, h && v.trigger("ajaxSend", [C, m]), 2 === w) return C;
                m.async && 0 < m.timeout && (f = T.setTimeout(function () {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, p.send(a, n)
                } catch (u) {
                    if (!(w < 2)) throw u;
                    n(-1, u)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, undefined, t, "script")
        }
    }), he.each(["get", "post"], function (e, o) {
        he[o] = function (e, t, n, i) {
            return he.isFunction(t) && (i = i || n, n = t, t = undefined), he.ajax(he.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, he.fn.extend({
        wrapAll: function (t) {
            if (he.isFunction(t)) return this.each(function (e) {
                he(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = he(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return he.isFunction(n) ? this.each(function (e) {
                he(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = he(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = he.isFunction(t);
            return this.each(function (e) {
                he(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                he.nodeName(this, "body") || he(this).replaceWith(this.childNodes)
            }).end()
        }
    }), he.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, he.expr.filters.visible = function (e) {
        return !he.expr.filters.hidden(e)
    };
    var cn = /%20/g,
        dn = /\[\]$/,
        fn = /\r?\n/g,
        hn = /^(?:submit|button|image|reset|file)$/i,
        pn = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = he.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, o);
        return i.join("&").replace(cn, "+")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && pn.test(this.nodeName) && !hn.test(e) && (this.checked || !Re.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), he.ajaxSettings.xhr = T.ActiveXObject !== undefined ? function () {
        return this.isLocal ? ee() : 8 < ie.documentMode ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var mn = 0,
        gn = {},
        vn = he.ajaxSettings.xhr();
    T.attachEvent && T.attachEvent("onunload", function () {
        for (var e in gn) gn[e](undefined, !0)
    }), de.cors = !!vn && "withCredentials" in vn, (vn = de.ajax = !!vn) && he.ajaxTransport(function (u) {
        var c;
        if (!u.crossDomain || de.cors) return {
            send: function (e, a) {
                var t, s = u.xhr(),
                    l = ++mn;
                if (s.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                    for (t in u.xhrFields) s[t] = u.xhrFields[t];
                for (t in u.mimeType && s.overrideMimeType && s.overrideMimeType(u.mimeType), u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                s.send(u.hasContent && u.data || null), c = function (e, t) {
                    var n, i, o;
                    if (c && (t || 4 === s.readyState))
                        if (delete gn[l], c = undefined, s.onreadystatechange = he.noop, t) 4 !== s.readyState && s.abort();
                        else {
                            o = {}, n = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (r) {
                                i = ""
                            }
                            n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                        } o && a(n, i, o, s.getAllResponseHeaders())
                }, u.async ? 4 === s.readyState ? T.setTimeout(c) : s.onreadystatechange = gn[l] = c : c()
            },
            abort: function () {
                c && c(undefined, !0)
            }
        }
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), he.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, o = ie.head || he("head")[0] || ie.documentElement;
            return {
                send: function (e, n) {
                    (i = ie.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, o.insertBefore(i, o.firstChild)
                },
                abort: function () {
                    i && i.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = yn.pop() || he.expando + "_" + Qt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, o, r, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = he.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(bn, "$1" + i) : !1 !== e.jsonp && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return r || he.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = T[i], T[i] = function () {
            r = arguments
        }, n.always(function () {
            o === undefined ? he(T).removeProp(i) : T[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, yn.push(i)), r && he.isFunction(o) && o(r[0]), r = o = undefined
        }), "script"
    }), he.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = Ce.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = m([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
    };
    var xn = he.fn.load;
    he.fn.load = function (e, t, n) {
        if ("string" != typeof e && xn) return xn.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = he.trim(e.slice(s, e.length)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), 0 < a.length && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.filters.animated = function (t) {
        return he.grep(he.timers, function (e) {
            return t === e.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, u = he.css(e, "position"),
                c = he(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), r = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < he.inArray("auto", [r, l]) ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, he.fn.extend({
        offset: function (t) {
            if (arguments.length) return t === undefined ? this : this.each(function (e) {
                he.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (e = r.documentElement, he.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n.top += he.css(e[0], "borderTopWidth", !0), n.left += he.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - he.css(i, "marginTop", !0),
                    left: t.left - n.left - he.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || mt
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, o) {
        var r = /Y/.test(o);
        he.fn[t] = function (e) {
            return Pe(this, function (e, t, n) {
                var i = te(e);
                if (n === undefined) return i ? o in i ? i[o] : i.document.documentElement[t] : e[t];
                i ? i.scrollTo(r ? he(i).scrollLeft() : n, r ? n : he(i).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), he.each(["top", "left"], function (e, n) {
        he.cssHooks[n] = D(de.pixelPosition, function (e, t) {
            if (t) return t = vt(e, n), ht.test(t) ? he(e).position()[n] + "px" : t
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function (r, a) {
        he.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function (i, e) {
            he.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return Pe(this, function (e, t, n) {
                    var i;
                    return he.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : n === undefined ? he.css(e, t, o) : he.style(e, t, n, o)
                }, a, n ? e : undefined, n, null)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.fn.size = function () {
        return this.length
    }, he.fn.andSelf = he.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var wn = T.jQuery,
        Cn = T.$;
    return he.noConflict = function (e) {
        return T.$ === he && (T.$ = Cn), e && T.jQuery === he && (T.jQuery = wn), he
    }, e || (T.jQuery = T.$ = he), he
}),
function (c, l) {
    "use strict";
    var u;
    c.rails !== l && c.error("jquery-ujs has already been loaded!");
    var e = c(document);
    c.rails = u = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return c("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return c("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = u.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
        },
        fire: function (e, t, n) {
            var i = c.Event(t);
            return e.trigger(i, n), !1 !== i.result
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (e) {
            return c.ajax(e)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== l && !1 !== e.data("remote")
        },
        handleRemote: function (i) {
            var e, t, n, o, r, a;
            if (u.fire(i, "ajax:before")) {
                if (o = i.data("with-credentials") || null, r = i.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, i.is("form")) {
                    e = i.data("ujs:submit-button-formmethod") || i.attr("method"), t = i.data("ujs:submit-button-formaction") || i.attr("action"), n = c(i[0]).serializeArray();
                    var s = i.data("ujs:submit-button");
                    s && (n.push(s), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(u.inputChangeSelector) ? (e = i.data("method"), t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(u.buttonClickSelector) ? (e = i.data("method") || "get", t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"), t = u.href(i), n = i.data("params") || null);
                return a = {
                    type: e || "GET",
                    data: n,
                    dataType: r,
                    beforeSend: function (e, t) {
                        if (t.dataType === l && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), !u.fire(i, "ajax:beforeSend", [e, t])) return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function (e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: u.isCrossDomain(t)
                }, o && (a.xhrFields = {
                    withCredentials: o
                }), t && (a.url = t), u.ajax(a)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function (e) {
            var t = u.href(e),
                n = e.data("method"),
                i = e.attr("target"),
                o = u.csrfToken(),
                r = u.csrfParam(),
                a = c('<form method="post" action="' + t + '"></form>'),
                s = '<input name="_method" value="' + n + '" type="hidden" />';
            r === l || o === l || u.isCrossDomain(t) || (s += '<input name="' + r + '" value="' + o + '" type="hidden" />'), i && a.attr("target", i), a.hide().append(s).appendTo("body"), a.submit()
        },
        formElements: function (e, t) {
            return e.is("form") ? c(e[0].elements).filter(t) : e.find(t)
        },
        disableFormElements: function (e) {
            u.formElements(e, u.disableSelector).each(function () {
                u.disableFormElement(c(this))
            })
        },
        disableFormElement: function (e) {
            var t, n;
            t = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== l && (e.data("ujs:enable-with", e[t]()), e[t](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (e) {
            u.formElements(e, u.enableSelector).each(function () {
                u.enableFormElement(c(this))
            })
        },
        enableFormElement: function (e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== l && (e[t](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                i = !1;
            if (!n) return !0;
            if (u.fire(e, "confirm")) {
                try {
                    i = u.confirm(n)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = u.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function (e, t, n) {
            var i, o, r, a = c(),
                s = t || "input,textarea",
                l = e.find(s),
                u = {};
            return l.each(function () {
                (i = c(this)).is("input[type=radio]") ? (r = i.attr("name"), u[r] || (0 === e.find('input[type=radio]:checked[name="' + r + '"]').length && (o = e.find('input[type=radio][name="' + r + '"]'), a = a.add(o)), u[r] = r)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (a = a.add(i))
            }), !!a.length && a
        },
        nonBlankInputs: function (e, t) {
            return u.blankInputs(e, t, !0)
        },
        stopEverything: function (e) {
            return c(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var t = e.data("disable-with");
            t !== l && (e.data("ujs:enable-with", e.html()), e.html(t)), e.bind("click.railsDisable", function (e) {
                return u.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== l && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, u.fire(e, "rails:attachBindings") && (c.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || u.CSRFProtection(n)
    }), c(window).on("pageshow.rails", function () {
        c(c.rails.enableSelector).each(function () {
            var e = c(this);
            e.data("ujs:disabled") && c.rails.enableFormElement(e)
        }), c(c.rails.linkDisableSelector).each(function () {
            var e = c(this);
            e.data("ujs:disabled") && c.rails.enableElement(e)
        })
    }), e.on("ajax:complete", u.linkDisableSelector, function () {
        u.enableElement(c(this))
    }), e.on("ajax:complete", u.buttonDisableSelector, function () {
        u.enableFormElement(c(this))
    }), e.on("click.rails", u.linkClickSelector, function (e) {
        var t = c(this),
            n = t.data("method"),
            i = t.data("params"),
            o = e.metaKey || e.ctrlKey;
        if (!u.allowAction(t)) return u.stopEverything(e);
        if (!o && t.is(u.linkDisableSelector) && u.disableElement(t), u.isRemote(t)) {
            if (o && (!n || "GET" === n) && !i) return !0;
            var r = u.handleRemote(t);
            return !1 === r ? u.enableElement(t) : r.fail(function () {
                u.enableElement(t)
            }), !1
        }
        return n ? (u.handleMethod(t), !1) : void 0
    }), e.on("click.rails", u.buttonClickSelector, function (e) {
        var t = c(this);
        if (!u.allowAction(t) || !u.isRemote(t)) return u.stopEverything(e);
        t.is(u.buttonDisableSelector) && u.disableFormElement(t);
        var n = u.handleRemote(t);
        return !1 === n ? u.enableFormElement(t) : n.fail(function () {
            u.enableFormElement(t)
        }), !1
    }), e.on("change.rails", u.inputChangeSelector, function (e) {
        var t = c(this);
        return u.allowAction(t) && u.isRemote(t) ? (u.handleRemote(t), !1) : u.stopEverything(e)
    }), e.on("submit.rails", u.formSubmitSelector, function (e) {
        var t, n, i = c(this),
            o = u.isRemote(i);
        if (!u.allowAction(i)) return u.stopEverything(e);
        if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
                if ((t = u.blankInputs(i, u.requiredInputSelector, !1)) && u.fire(i, "ajax:aborted:required", [t])) return u.stopEverything(e)
            } else i.data("ujs:formnovalidate-button", l);
        if (o) {
            if (n = u.nonBlankInputs(i, u.fileInputSelector)) {
                setTimeout(function () {
                    u.disableFormElements(i)
                }, 13);
                var r = u.fire(i, "ajax:aborted:file", [n]);
                return r || setTimeout(function () {
                    u.enableFormElements(i)
                }, 13), r
            }
            return u.handleRemote(i), !1
        }
        setTimeout(function () {
            u.disableFormElements(i)
        }, 13)
    }), e.on("click.rails", u.formInputClickSelector, function (e) {
        var t = c(this);
        if (!u.allowAction(t)) return u.stopEverything(e);
        var n = t.attr("name"),
            i = n ? {
                name: n,
                value: t.val()
            } : null,
            o = t.closest("form");
        0 === o.length && (o = c("#" + t.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", t.attr("formnovalidate")), o.data("ujs:submit-button-formaction", t.attr("formaction")), o.data("ujs:submit-button-formmethod", t.attr("formmethod"))
    }), e.on("ajax:send.rails", u.formSubmitSelector, function (e) {
        this === e.target && u.disableFormElements(c(this))
    }), e.on("ajax:complete.rails", u.formSubmitSelector, function (e) {
        this === e.target && u.enableFormElements(c(this))
    }), c(function () {
        u.refreshCSRFTokens()
    }))
}(jQuery),
function (o) {
    "use strict";
    for (var e, r = 0, t = "webkit moz ms o".split(" "), n = o.requestAnimationFrame, i = o.cancelAnimationFrame, a = 0; a < t.length && (!n || !i); a++) e = t[a], n = n || o[e + "RequestAnimationFrame"], i = i || o[e + "CancelAnimationFrame"] || o[e + "CancelRequestAnimationFrame"];
    n && i || (n = function (e) {
        var t = (new Date).getTime(),
            n = Math.max(0, 16 - (t - r)),
            i = o.setTimeout(function () {
                e(t + n)
            }, n);
        return r = t + n, i
    }, i = function (e) {
        o.clearTimeout(e)
    }), o.requestAnimationFrame = n, o.cancelAnimationFrame = i
}(window),
function (i, e) {
    "use strict";

    function o() {
        return (new Date).getTime()
    }

    function r(e, t) {
        for (var n in this.element = e, this.content = e.children[0], this.contentClone = $(this.content).clone()[0], this.content.id && (this.contentClone.id = this.content.id + "-inflickity-clone"), this.contentClone.className += " inflickity-clone", this.element.appendChild(this.contentClone), this.options = {}, r.defaults) this.options[n] = t && t.hasOwnProperty(n) ? t[n] : r.defaults[n];
        this.element.addEventListener ? this.element.addEventListener(s, this, !1) : this.element.attachEvent(s, this), this.element.style.position = "relative", this.content.style.position = "absolute", this.contentClone.style.position = "absolute", this.isUnmoved = !0, this.x = 0, this.y = 0, this.offset = 0, this.contentWidth = this.content.offsetWidth, this.doRegularScroll = !0, this.allowClicks = !0, this.offsetAngle = c.csstransforms ? this.options.offsetAngle : 0, this.offsetAngle && (this.element.style[d] = "rotate(" + this.offsetAngle + "rad)"), this.contactPoints = [], this.positionElem(this.contentClone, this.contentWidth, 0)
    }
    var t = i.document,
        a = (i.requestAnimationFrame, "createTouch" in t),
        s = a ? "touchstart" : "mousedown",
        l = a ? "touchmove" : "mousemove",
        u = a ? "touchend" : "mouseup",
        c = i.Modernizr,
        d = c.prefixed("transform");
    r.defaults = {
        clones: 1,
        friction: .03,
        maxContactPoints: 3,
        offsetAngle: 0,
        onClick: e,
        animationDuration: 400,
        easing: function (e, t, n, i) {
            return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
        }
    }, r.prototype.setOffset = function (e) {
        var t = this.contentWidth;
        this.offset = (e % t + t) % t, this.positionElem(this.content, this.offset, 0), this.positionElem(this.contentClone, this.offset - t, 0)
    }, r.prototype.positionElem = c.csstransforms3d ? function (e, t, n) {
        e.style[d] = "translate3d( " + t + "px, " + n + "px, 0)"
    } : c.csstransforms ? function (e, t, n) {
        e.style[d] = "translate(" + t + "px, " + n + "px)"
    } : function (e, t, n) {
        e.style.left = t + "px", e.style.top = n + "px"
    }, r.prototype.pushContactPoint = function (e) {
        this.contactPoints;
        this.contactPoints.length > this.options.maxContactPoints - 1 && this.contactPoints.shift(), this.contactPoints.push({
            offset: e,
            timeStamp: o()
        })
    }, r.prototype.getCursorOffset = function (e) {
        var t = e.pageX - this.originPoint.x,
            n = e.pageY - this.originPoint.y,
            i = Math.sqrt(t * t + n * n),
            o = Math.atan2(n, t),
            r = Math.abs(o - this.offsetAngle);
        return i * Math.cos(r)
    }, r.prototype.handleEvent = function (e) {
        var t = "handle" + e.type;
        this[t] && this[t](e)
    }, r.prototype.handlemousedown = function (e) {
        this.cursorStart(e, e)
    }, r.prototype.handletouchstart = function (e) {
        this.cursorIdentifier || this.cursorStart(e.changedTouches[0], e)
    }, r.prototype.cursorStart = function (e, t) {
        this.cursorIdentifier = e.identifier || 1, this.originPoint = {
            x: e.pageX,
            y: e.pageY
        }, this.offsetOrigin = this.offset, i.addEventListener(l, this, !1), i.addEventListener(u, this, !1), this.stopAnimation();
        var n = this.getCursorOffset(e);
        this.pushContactPoint(n), this.isDragging = !1, this.allowClicks = !0, this.wasScrollingBeforeCursorStart = this.velocity && 3 < Math.abs(this.velocity), a ? !1 === this.doRegularScroll && !1 === this.isDragging && !1 === this.allowClicks && t.preventDefault() : t.preventDefault()
    }, r.prototype.handlemousemove = function (e) {
        this.cursorMove(e, e)
    }, r.prototype.handletouchmove = function (e) {
        var t, n = Math.abs(e.pageX - this.originPoint.x);
        if (Math.abs(e.pageY - this.originPoint.y) <= n) {
            this.doRegularScroll = !1;
            for (var i = 0, o = e.changedTouches.length; i < o; i++)
                if ((t = e.changedTouches[i]).identifier === this.cursorIdentifier) {
                    this.cursorMove(t, e);
                    break
                }
        } else this.doRegularScroll = !0
    }, r.prototype.cursorMove = function (e) {
        var t = this.getCursorOffset(e);
        this.setOffset(this.offsetOrigin + t), this.pushContactPoint(t);
        var n = Math.abs(e.pageX - this.originPoint.x),
            i = Math.abs(e.pageY - this.originPoint.y);
        !this.isDragging && (3 < n || 3 < i) && (this.isDragging = !0)
    }, r.prototype.handlemouseup = function (e) {
        this.cursorEnd(e, e)
    }, r.prototype.handletouchend = function (e) {
        for (var t, n = 0, i = e.changedTouches.length; n < i; n++)
            if ((t = e.changedTouches[n]).identifier === this.cursorIdentifier) {
                this.cursorEnd(t, e);
                break
            }
    }, r.prototype.cursorEnd = function (e, t) {
        i.removeEventListener(l, this, !1), i.removeEventListener(u, this, !1);
        var n = this.getCursorOffset(e);
        this.pushContactPoint(n), this.release(), this.contactPoints = [], delete this.cursorIdentifier, this.isDragging || this.wasScrollingBeforeCursorStart || "function" != typeof this.options.onClick || this.options.onClick.call(this, t, e), this.isDragging = !1
    }, r.prototype.release = function () {
        var e = this.contactPoints,
            t = e.length,
            n = e[t - 1],
            i = e[0],
            o = (n.timeStamp - i.timeStamp || 1) / t,
            r = (n.offset - i.offset) / t;
        this.velocity = 1e3 / 60 / o * r, this.allowClicks = !1, this.animate({
            frameFn: this.releaseTick
        })
    }, r.prototype.releaseTick = function () {
        this.setOffset(this.offset + this.velocity), this.velocity *= 1 - this.options.friction, Math.abs(this.velocity) < .5 ? this.stopAnimation() : this.animationFrameTick()
    }, r.prototype.scrollTo = function (e, t) {
        var n = this.contentWidth,
            i = (e = (e % n + n) % n) - this.offset;
        Math.abs(i) > n / 2 && (i += n * (0 < i ? -1 : 1));
        this.animate({
            duration: t,
            origin: this.offset,
            diff: i,
            frameFn: this.scrollToTick
        })
    }, r.prototype.scrollToTick = function () {
        var e = this.animation,
            t = (o() - e.startTime) / e.duration,
            n = this.options.easing(t, null, e.origin, e.diff);
        this.setOffset(n), 1 <= t ? this.stopAnimation() : this.animationFrameTick()
    }, r.prototype.animate = function (e) {
        this.stopAnimation(), this.isScrolling = !0, this.animation = e, this.animation.startTime = o(), this.animation.duration = this.animation.duration || this.options.animationDuration, this.animationFrameTick()
    }, r.prototype.animationFrameTick = function () {
        var e = this.animation.frameFn.bind(this);
        this.animation.id = i.requestAnimationFrame(e)
    }, r.prototype.stopAnimation = function () {
        this.animation && isFinite(this.animation.id) && (this.isScrolling = !1, this.allowClicks = !0, i.cancelAnimationFrame(this.animation.id), delete this.animation)
    }, i.Inflickity = r
}(window),
function (i, e) {
    var t = function (e, t) {
        this.elem = e, this.$elem = i(e), this.options = t, this.metadata = this.$elem.data("carousel-options"), this.$items = this.$elem.find("ul.items"), this.$nav = i('<ul class="nav"><li><a href="#prev" class="prev"><span class="screen-reader">Previous</span><i class="ico" aria-hidden="true">s</i></a></li><li><a href="#next" class="next"><span class="screen-reader">Next</span><i class="ico" aria-hidden="true">g</i></a></li></ul>'), this.initial = !0, this.$children = this.$items.children("li"), this.$item = this.$children.filter(":first"), this.itemWidth = this.$item.outerWidth(!0), this.extraMargin = this.itemWidth - this.$item.width(), this.containerWidth = this.$elem.width(), this.fullWidth = this.itemWidth * this.$children.length, this.totalWidth = this.itemWidth * this.$children.length - this.extraMargin, this.shouldScroll = !1, this.didBind = !1, this.didAppendNav = !1, this.didInflickity = !1, this.maxHeight = 0
    };
    t.prototype = {
        defaults: {},
        init: function () {
            return this.config = i.extend({}, this.defaults, this.options, this.metadata), this.setInitialWidth(), this.setInitialHeight(), WWF.isIE7 || (this.totalWidth > this.containerWidth && (this.startInflickity(), this.appendNav(), this.bindEvents(), this.setScrollAmount()), i(e).on("resize", i.proxy(this.resize, this))), this
        },
        appendNav: function () {
            this.didAppendNav || (this.$elem.append(this.$nav), this.$nav.show(), this.didAppendNav = !0)
        },
        bindEvents: function () {
            this.didBind || (this.$nav.on({
                "click.carousel": i.proxy(this.handleClick, this)
            }, "a"), this.didBind = !0)
        },
        calculateHeight: function (e, t) {
            var n = i(t).height();
            this.maxHeight = n > this.maxHeight ? n : this.maxHeight
        },
        handleClick: function (e) {
            var t = this;
            t.direction = i(e.currentTarget).hasClass("prev") ? 1 : -1, t.initial && (t.$nav.find("a.prev").fadeIn(250), t.initial = !1), t.flick.scrollTo(t.flick.offset + t.scrollAmount * t.direction), e.preventDefault()
        },
        resize: function () {
            var e = this;
            e.containerWidth = e.$elem.width(), this.totalWidth > this.containerWidth ? (this.startInflickity(), this.appendNav(), this.bindEvents(), this.setScrollAmount(), e.$nav.show()) : e.$nav.hide()
        },
        setInitialHeight: function () {
            this.$children.each(i.proxy(this.calculateHeight, this)).height(this.maxHeight), this.$elem.height(this.maxHeight + parseInt(this.$elem.css("padding-top"), 10) + parseInt(this.$elem.css("padding-bottom"), 10))
        },
        setInitialWidth: function () {
            this.$items.width(this.fullWidth)
        },
        setScrollAmount: function () {
            this.scrollAmount = .65 * this.containerWidth
        },
        startInflickity: function () {
            this.didInflickity || (this.fullWidth = 2 * this.fullWidth, this.setInitialWidth(), this.$children.clone().appendTo(this.$items), this.flick = new Inflickity(this.elem), this.didInflickity = !0)
        }
    }, t.defaults = t.prototype.defaults, i.fn.carousel = function (e) {
        return this.each(function () {
            new t(this, e).init()
        })
    }
}(jQuery, window, document),
function (n, i) {
    var t = function (e, t) {
        this.elem = e, this.$elem = n(e), this.options = t, this.metadata = this.$elem.data("slider-options"), this.$items = this.$elem.find("ul.items"), this.$nav = n('<ul class="nav"><li><a href="#prev" class="prev"><span class="screen-reader">Previous</span><i class="ico" aria-hidden="true">s</i></a></li><li><a href="#next" class="next"><span class="screen-reader">Next</span><i class="ico" aria-hidden="true">g</i></a></li></ul>'), this.$children = this.$items.children("li"), this.$current = this.$children.first(), this.isInline = this.$elem.hasClass("slider-inline"), this.$count = n('<span class="count"></span>'), this.currentCount = 1, this.$win = n(i), this.isAnimating = !1, this.sliderWidth = this.$elem.width(), this.tracking = this.$elem.data("track-slider"), 2 < this.$children.length && (this.$prev = this.$children.last().addClass("prev"), this.$next = this.$current.next().addClass("next"))
    };
    t.prototype = {
        defaults: {},
        init: function () {
            var e = this;
            return e.config = n.extend({}, e.defaults, e.options, e.metadata), 2 < e.$children.length && (e.$elem.data("rotate") && (e.$elem.hover(function () {
                clearInterval(e.myTimer)
            }, function () {
                e.rotateSwitch()
            }), e.rotateSwitch()), e.appendNav(), e.bindEvents(), e.initialTrackingEvent(), e.$prev.prependTo(e.$items), e.isInline && e.appendCount(), (!1 === e.isInline || e.sliderWidth < 1e3 && e.isInline) && (e.$navItems = e.$nav.find("a"), e.$currentFigure = e.$current.find(".figure"), e.$current.imagesLoaded(function () {
                e.setNavPosition(), e.$win.on("resize.slider", n.proxy(e.setNavPosition, e))
            }))), this
        },
        appendCount: function () {
            this.$elem.append(this.$count), this.updateCount()
        },
        appendNav: function () {
            this.$elem.append(this.$nav)
        },
        bindEvents: function () {
            var t = this;
            t.$nav.on({
                "click.slider": n.proxy(t.handleClick, t),
                "click.ga.slider": function () {
                    var e = t.tracking + " Display|" + t.currentCount + " of " + t.$children.length;
                    WWF.common.ga.eventTrack(e), e = t.tracking + " Scroll", WWF.common.ga.eventTrack(e)
                }
            }, "a"), Modernizr.touch && this.$elem.on({
                "touchstart.slider": n.proxy(t.touch.start, t),
                "touchend.slider": n.proxy(t.touch.end, t)
            })
        },
        handleClick: function (e) {
            var t = n(e.currentTarget).hasClass("prev") ? "prev" : "next";
            this.myTimer && clearInterval(this.myTimer), this.isAnimating || (this.isAnimating = !0, "next" === t ? this.rotate() : (1 < this.currentCount ? this.currentCount-- : this.currentCount = this.$children.length, this.setPrev())), e.preventDefault()
        },
        initialTrackingEvent: function () {
            var e = (this.tracking + " Display|" + this.currentCount + " of " + this.$children.length).split("|"),
                t = {
                    event: "gtmEvent",
                    gtmCategory: e[0],
                    gtmAction: e[1],
                    gtmLabel: e[2],
                    gtmValue: 0,
                    gtmNonInteractive: !0
                };
            dataLayer.push(t), WWF.common.ga.debug && console && console.log && console.log(t)
        },
        move: function (e, t, n, i) {
            var o = this;
            o.$current.add(o.$next).add(o.$prev).add(e).delay(100).animate({
                left: t + "=105%"
            }, 400).promise().done(function () {
                o.isAnimating = !1, i && "function" == typeof i && i()
            }), o.isInline && (o.$items.delay(250).animate({
                height: n
            }), o.updateCount())
        },
        rotate: function () {
            this.currentCount < this.$children.length ? this.currentCount++ : this.currentCount = 1, this.setNext()
        },
        rotateSwitch: function () {
            var e = this;
            clearInterval(e.myTimer), e.myTimer = setInterval(function () {
                e.rotate()
            }, 1e4)
        },
        setNavPosition: function () {
            var e = this.$win.width() < 768 ? this.$currentFigure.height() : "50%";
            this.$navItems.css("top", e)
        },
        setNext: function () {
            var e = this,
                t = e.$next.next();
            0 === t.length && (t = e.$items.children("li").first().appendTo(e.$items)), t.css("left", "210%"), e.move(t, "-", e.$next.height(), function () {
                e.$prev = e.$current.removeClass("current").addClass("prev"), e.$current = e.$next.removeClass("next").addClass("current"), e.$next = t.removeClass("prev").addClass("next")
            })
        },
        setPrev: function () {
            var e = this,
                t = this.$prev.prev();
            0 === t.length && (t = e.$items.children("li").last().prependTo(e.$items)), t.css("left", "-210%"), e.move(t, "+", e.$prev.height(), function () {
                e.$next = e.$current.removeClass("current").addClass("next"), e.$current = e.$prev.removeClass("prev").addClass("current"), e.$prev = t.removeClass("next").addClass("prev")
            })
        },
        touch: {
            end: function (e) {
                var t = this,
                    n = e.originalEvent.changedTouches[0],
                    i = {
                        x: n.pageX,
                        y: n.pageY
                    };
                50 < Math.abs(i.x > t.touchOrigin.x ? i.x - t.touchOrigin.x : t.touchOrigin.x - i.x) && (i.x > t.touchOrigin.x ? t.$nav.find("a.prev").trigger("click") : i.x < t.touchOrigin.x && t.$nav.find("a.next").trigger("click"))
            },
            start: function (e) {
                var t = this,
                    n = e.originalEvent.touches[0];
                t.touchOrigin = {
                    x: n.pageX,
                    y: n.pageY
                }
            }
        },
        updateCount: function () {
            this.$count.text(this.currentCount + "/" + this.$children.length)
        }
    }, t.defaults = t.prototype.defaults, n.fn.slider = function (e) {
        return this.each(function () {
            new t(this, e).init()
        })
    }
}(jQuery, window, document),
function (t, n) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
        return n(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(t, require("jquery")) : t.jQueryBridget = n(t, t.jQuery)
}(window, function factory(e, i) {
    "use strict";

    function t(u, o, c) {
        function t(e, r, a) {
            var s, l = "$()." + u + '("' + r + '")';
            return e.each(function (e, t) {
                var n = c.data(t, u);
                if (n) {
                    var i = n[r];
                    if (i && "_" != r.charAt(0)) {
                        var o = i.apply(n, a);
                        s = s === undefined ? o : s
                    } else d(l + " is not a valid method")
                } else d(u + " not initialized. Cannot call methods, i.e. " + l)
            }), s !== undefined ? s : e
        }

        function n(e, i) {
            e.each(function (e, t) {
                var n = c.data(t, u);
                n ? (n.option(i), n._init()) : (n = new o(t, i), c.data(t, u, n))
            })
        }(c = c || i || e.jQuery) && (o.prototype.option || (o.prototype.option = function (e) {
            c.isPlainObject(e) && (this.options = c.extend(!0, this.options, e))
        }), c.fn[u] = function (e) {
            return "string" == typeof e ? t(this, e, a.call(arguments, 1)) : (n(this, e), this)
        }, r(c))
    }

    function r(e) {
        !e || e && e.bridget || (e.bridget = t)
    }
    var a = Array.prototype.slice,
        n = e.console,
        d = void 0 === n ? function () {} : function (e) {
            n.error(e)
        };
    return r(i || e.jQuery), t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = 0,
                o = n[i];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var a = r && r[o];
                a && (this.off(e, o), delete r[o]), o.apply(this, t), o = n[i += a ? 0 : 1]
            }
            return this
        }
    }, e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function factory() {
    "use strict";

    function v(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function e() {}

    function y() {
        for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0; t < T; t++) {
            e[C[t]] = 0
        }
        return e
    }

    function b(e) {
        var t = getComputedStyle(e);
        return t || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }

    function x() {
        if (!o) {
            o = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var t = document.body || document.documentElement;
            t.appendChild(e);
            var n = b(e);
            i.isBoxSizeOuter = w = 200 == v(n.width), t.removeChild(e)
        }
    }

    function i(e) {
        if (x(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = b(e);
            if ("none" == t.display) return y();
            var n = {};
            n.width = e.offsetWidth, n.height = e.offsetHeight;
            for (var i = n.isBorderBox = "border-box" == t.boxSizing, o = 0; o < T; o++) {
                var r = C[o],
                    a = t[r],
                    s = parseFloat(a);
                n[r] = isNaN(s) ? 0 : s
            }
            var l = n.paddingLeft + n.paddingRight,
                u = n.paddingTop + n.paddingBottom,
                c = n.marginLeft + n.marginRight,
                d = n.marginTop + n.marginBottom,
                f = n.borderLeftWidth + n.borderRightWidth,
                h = n.borderTopWidth + n.borderBottomWidth,
                p = i && w,
                m = v(t.width);
            !1 !== m && (n.width = m + (p ? 0 : l + f));
            var g = v(t.height);
            return !1 !== g && (n.height = g + (p ? 0 : u + h)), n.innerWidth = n.width - (l + f), n.innerHeight = n.height - (u + h), n.outerWidth = n.width + c, n.outerHeight = n.height + d, n
        }
    }
    var w, n = "undefined" == typeof console ? e : function (e) {
            console.error(e)
        },
        C = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        T = C.length,
        o = !1;
    return i
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function factory() {
    "use strict";
    var n = function () {
        var e = Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n] + "MatchesSelector";
            if (e[i]) return i
        }
    }();
    return function i(e, t) {
        return e[n](t)
    }
}),
function (t, n) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (e) {
        return n(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(t, require("desandro-matches-selector")) : t.fizzyUIUtils = n(t, t.matchesSelector)
}(window, function factory(o, r) {
    var c = {
            extend: function (e, t) {
                for (var n in t) e[n] = t[n];
                return e
            },
            modulo: function (e, t) {
                return (e % t + t) % t
            },
            makeArray: function (e) {
                var t = [];
                if (Array.isArray(e)) t = e;
                else if (e && "number" == typeof e.length)
                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                else t.push(e);
                return t
            },
            removeFrom: function (e, t) {
                var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
            },
            getParent: function (e, t) {
                for (; e != document.body;)
                    if (e = e.parentNode, r(e, t)) return e
            },
            getQueryElement: function (e) {
                return "string" == typeof e ? document.querySelector(e) : e
            },
            handleEvent: function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            },
            filterFindElements: function (e, i) {
                e = c.makeArray(e);
                var o = [];
                return e.forEach(function (e) {
                    if (e instanceof HTMLElement)
                        if (i) {
                            r(e, i) && o.push(e);
                            for (var t = e.querySelectorAll(i), n = 0; n < t.length; n++) o.push(t[n])
                        } else o.push(e)
                }), o
            },
            debounceMethod: function (e, t, i) {
                var o = e.prototype[t],
                    r = t + "Timeout";
                e.prototype[t] = function () {
                    var e = this[r];
                    e && clearTimeout(e);
                    var t = arguments,
                        n = this;
                    this[r] = setTimeout(function () {
                        o.apply(n, t), delete n[r]
                    }, i || 100)
                }
            },
            docReady: function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t ? e() : document.addEventListener("DOMContentLoaded", e)
            },
            toDashed: function (e) {
                return e.replace(/(.)([A-Z])/g, function (e, t, n) {
                    return t + "-" + n
                }).toLowerCase()
            }
        },
        d = o.console;
    return c.htmlInit = function (l, u) {
        c.docReady(function () {
            var e = c.toDashed(u),
                r = "data-" + e,
                t = document.querySelectorAll("[" + r + "]"),
                n = document.querySelectorAll(".js-" + e),
                i = c.makeArray(t).concat(c.makeArray(n)),
                a = r + "-options",
                s = o.jQuery;
            i.forEach(function (e) {
                var t, n = e.getAttribute(r) || e.getAttribute(a);
                try {
                    t = n && JSON.parse(n)
                } catch (o) {
                    return void(d && d.error("Error parsing " + r + " on " + e.className + ": " + o))
                }
                var i = new l(e, t);
                s && s.data(e, u, i)
            })
        })
    }, c
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function factory(e, t) {
    "use strict";

    function i(e) {
        for (var t in e) return !1;
        return !null
    }

    function n(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        a = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [a],
        u = {
            transform: s,
            transition: a,
            transitionDuration: a + "Duration",
            transitionProperty: a + "Property",
            transitionDelay: a + "Delay"
        },
        c = n.prototype = Object.create(e.prototype);
    c.constructor = n, c._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, c.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.getSize = function () {
        this.size = t(this.element)
    }, c.css = function (e) {
        var t = this.element.style;
        for (var n in e) {
            t[u[n] || n] = e[n]
        }
    }, c.getPosition = function () {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            o = e[n ? "top" : "bottom"],
            r = this.layout.size,
            a = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.width : parseInt(i, 10),
            s = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        a = isNaN(a) ? 0 : a, s = isNaN(s) ? 0 : s, a -= t ? r.paddingLeft : r.paddingRight, s -= n ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = s
    }, c.layoutPosition = function () {
        var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = n ? "paddingLeft" : "paddingRight",
            r = n ? "left" : "right",
            a = n ? "right" : "left",
            s = this.position.x + e[o];
        t[r] = this.getXValue(s), t[a] = "";
        var l = i ? "paddingTop" : "paddingBottom",
            u = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            d = this.position.y + e[l];
        t[u] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this])
    }, c.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, c.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, c._transitionTo = function (e, t) {
        this.getPosition();
        var n = this.position.x,
            i = this.position.y,
            o = parseInt(e, 10),
            r = parseInt(t, 10),
            a = o === this.position.x && r === this.position.y;
        if (this.setPosition(e, t), !a || this.isTransitioning) {
            var s = e - n,
                l = t - i,
                u = {};
            u.transform = this.getTranslate(s, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, c.getTranslate = function (e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, c.goTo = function (e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function (e, t) {
        this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
    }, c._nonTransition = function (e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, c.transition = function (e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
            for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var d = "opacity," + o(s);
    c.enableTransition = function () {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, c.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e)
    }, c.onotransitionend = function (e) {
        this.ontransitionend(e)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function (e) {
        if (e.target === this.element) {
            var t = this._transn,
                n = f[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[n], i(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) t.onEnd[n].call(this), delete t.onEnd[n];
            this.emitEvent(
                "transitionEnd", [this])
        }
    }, c.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function (e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t)
    };
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return c.removeTransitionStyles = function () {
        this.css(h)
    }, c.stagger = function (e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, c.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, c.remove = function () {
        a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), this.hide()) : this.removeElem()
    }, c.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n
    }, c.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, c.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function (o, r) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (e, t, n, i) {
        return r(o, e, t, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function factory(e, t, o, r, i) {
    "use strict";

    function a(e, t) {
        var n = r.getQueryElement(e);
        if (n) {
            this.element = n, u && (this.$element = u(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(t);
            var i = ++d;
            this.element.outlayerGUID = i, (f[i] = this)._create(), this._getOption("initLayout") && this.layout()
        } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
    }

    function s(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t
    }

    function n(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            i = t && t[2];
        return n.length ? (n = parseFloat(n)) * (p[i] || 1) : 0
    }
    var l = e.console,
        u = e.jQuery,
        c = function () {},
        d = 0,
        f = {};
    a.namespace = "outlayer", a.Item = i, a.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = a.prototype;
    r.extend(h, t.prototype), h.option = function (e) {
        r.extend(this.options, e)
    }, h._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && this.options[t] !== undefined ? this.options[t] : this.options[e]
    }, a.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, h._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, h._itemize = function (e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
            var r = new n(t[o], this);
            i.push(r)
        }
        return i
    }, h._filterFindItemElements = function (e) {
        return r.filterFindElements(e, this.options.itemSelector)
    }, h.getItemElements = function () {
        return this.items.map(function (e) {
            return e.element
        })
    }, h.layout = function () {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = e !== undefined ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, h._init = h.layout, h._resetLayout = function () {
        this.getSize()
    }, h.getSize = function () {
        this.size = o(this.element)
    }, h._getMeasurement = function (e, t) {
        var n, i = this.options[e];
        i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[e] = n ? o(n)[t] : i) : this[e] = 0
    }, h.layoutItems = function (e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, h._getItemsForLayout = function (e) {
        return e.filter(function (e) {
            return !e.isIgnored
        })
    }, h._layoutItems = function (e, n) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach(function (e) {
                var t = this._getItemLayoutPosition(e);
                t.item = e, t.isInstant = n || e.isLayoutInstant, i.push(t)
            }, this), this._processLayoutQueue(i)
        }
    }, h._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, h._processLayoutQueue = function (e) {
        this.updateStagger(), e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, h.updateStagger = function () {
        var e = this.options.stagger;
        if (null !== e && e !== undefined) return this.stagger = n(e), this.stagger;
        this.stagger = 0
    }, h._positionItem = function (e, t, n, i, o) {
        i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
    }, h._postLayout = function () {
        this.resizeContainer()
    }, h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, h._getContainerSize = c, h._setContainerMeasure = function (e, t) {
        if (e !== undefined) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, h._emitCompleteOnItems = function (t, e) {
        function n() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function i() {
            ++a == r && n()
        }
        var o = this,
            r = e.length;
        if (e && r) {
            var a = 0;
            e.forEach(function (e) {
                e.once(t, i)
            })
        } else n()
    }, h.dispatchEvent = function (e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), u)
            if (this.$element = this.$element || u(this.element), t) {
                var o = u.Event(t);
                o.type = e, this.$element.trigger(o, n)
            } else this.$element.trigger(e, n)
    }, h.ignore = function (e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, h.unignore = function (e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, h.stamp = function (e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, h.unstamp = function (e) {
        (e = this._find(e)) && e.forEach(function (e) {
            r.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, h._find = function (e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = r.makeArray(e)
    }, h._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, h._manageStamp = c, h._getElementOffset = function (e) {
        var t = e.getBoundingClientRect(),
            n = this._boundingRect,
            i = o(e);
        return {
            left: t.left - n.left - i.marginLeft,
            top: t.top - n.top - i.marginTop,
            right: n.right - t.right - i.marginRight,
            bottom: n.bottom - t.bottom - i.marginBottom
        }
    }, h.handleEvent = r.handleEvent, h.bindResize = function () {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, h.unbindResize = function () {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, h.onresize = function () {
        this.resize()
    }, r.debounceMethod(a, "onresize", 100), h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
        var e = o(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, h.addItems = function (e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, h.appended = function (e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, h.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            var n = this.items.slice(0);
            this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
        }
    }, h.reveal = function (e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var n = this.updateStagger();
            e.forEach(function (e, t) {
                e.stagger(t * n), e.reveal()
            })
        }
    }, h.hide = function (e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var n = this.updateStagger();
            e.forEach(function (e, t) {
                e.stagger(t * n), e.hide()
            })
        }
    }, h.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, h.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t)
    }, h.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
            var n = this.items[t];
            if (n.element == e) return n
        }
    }, h.getItems = function (e) {
        e = r.makeArray(e);
        var n = [];
        return e.forEach(function (e) {
            var t = this.getItem(e);
            t && n.push(t)
        }, this), n
    }, h.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
            e.remove(), r.removeFrom(this.items, e)
        }, this)
    }, h.destroy = function () {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
            e.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete f[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, a.data = function (e) {
        var t = (e = r.getQueryElement(e)) && e.outlayerGUID;
        return t && f[t]
    }, a.create = function (e, t) {
        var n = s(a);
        return n.defaults = r.extend({}, a.defaults), r.extend(n.defaults, t), n.compatOptions = r.extend({}, a.compatOptions), n.namespace = e, n.data = a.data, n.Item = s(i), r.htmlInit(n, e), u && u.bridget && u.bridget(e, n), n
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return a.Item = i, a
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function factory(e, u) {
    var t = e.create("masonry");
    return t.compatOptions.fitWidth = "isFitWidth", t.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0
    }, t.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                t = e && e.element;
            this.columnWidth = t && u(t).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            i = this.containerWidth + this.gutter,
            o = i / n,
            r = n - i % n;
        o = Math[r && r < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
    }, t.prototype.getContainerWidth = function () {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            t = u(e);
        this.containerWidth = t && t.innerWidth
    }, t.prototype._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var i = this._getColGroup(n), o = Math.min.apply(Math, i), r = i.indexOf(o), a = {
                x: this.columnWidth * r,
                y: o
            }, s = o + e.size.outerHeight, l = this.cols + 1 - i.length, u = 0; u < l; u++) this.colYs[r + u] = s;
        return a
    }, t.prototype._getColGroup = function (e) {
        if (e < 2) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) {
            var o = this.colYs.slice(i, i + e);
            t[i] = Math.max.apply(Math, o)
        }
        return t
    }, t.prototype._manageStamp = function (e) {
        var t = u(e),
            n = this._getElementOffset(e),
            i = this._getOption("originLeft") ? n.left : n.right,
            o = i + t.outerWidth,
            r = Math.floor(i / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(o / this.columnWidth);
        a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var s = (this._getOption("originTop") ? n.top : n.bottom) + t.outerHeight, l = r; l <= a; l++) this.colYs[l] = Math.max(s, this.colYs[l])
    }, t.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, t.prototype._getContainerFitWidth = function () {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, t.prototype.needsResizeLayout = function () {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = 0,
                o = n[i];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var a = r && r[o];
                a && (this.off(e, o), delete r[o]), o.apply(this, t), o = n[i += a ? 0 : 1]
            }
            return this
        }
    }, e
}),
function (t, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (e) {
        return n(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(t, require("ev-emitter")) : t.imagesLoaded = n(t, t.EvEmitter)
}(window, function factory(t, e) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function o(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }

    function r(e, t, n) {
        if (!(this instanceof r)) return new r(e, t, n);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(function () {
            this.check()
        }.bind(this))
    }

    function n(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var s = t.jQuery,
        l = t.console;
    r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var o = n[i];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (i = 0; i < r.length; i++) {
                    var a = r[i];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var o = i && i[2];
                o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
            }
    }, r.prototype.addImage = function (e) {
        var t = new n(e);
        this.images.push(t)
    }, r.prototype.addBackground = function (e, t) {
        var n = new a(e, t);
        this.images.push(n)
    }, r.prototype.check = function () {
        function t(e, t, n) {
            setTimeout(function () {
                i.progress(e, t, n)
            })
        }
        var i = this;
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
            e.once("progress", t), e.check()
        }) : this.complete()
    }, r.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, e, t)
    }, r.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, n.prototype = Object.create(e.prototype), n.prototype.check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, n.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth !== undefined
    }, n.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, n.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, n.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, n.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(n.prototype), a.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, r.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && ((s = e).fn.imagesLoaded = function (e, t) {
            return new r(this, e, t).jqDeferred.promise(s(this))
        })
    }, r.makeJQueryPlugin(), r
}),
function (s) {
    function e(e) {
        return "object" == typeof e ? e : {
            top: e,
            left: e
        }
    }
    var g = s.scrollTo = function (e, t, n) {
        s(window).scrollTo(e, t, n)
    };
    g.defaults = {
        axis: "xy",
        duration: 1.3 <= parseFloat(s.fn.jquery) ? 0 : 1
    }, g.window = function () {
        return s(window)._scrollable()
    }, s.fn._scrollable = function () {
        return this.map(function () {
            var e = this;
            if (!(!e.nodeName || -1 != s.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))) return e;
            var t = (e.contentWindow || e).document || e.ownerDocument || e;
            return s.browser.safari || "BackCompat" == t.compatMode ? t.body : t.documentElement
        })
    }, s.fn.scrollTo = function (t, n, m) {
        return "object" == typeof n && (m = n, n = 0), "function" == typeof m && (m = {
            onAfter: m
        }), "max" == t && (t = 9e9), m = s.extend({}, g.defaults, m), n = n || m.speed || m.duration, m.queue = m.queue && 1 < m.axis.length, m.queue && (n /= 2), m.offset = e(m.offset), m.over = e(m.over), this._scrollable().each(function () {
            function l(e) {
                d.animate(h, n, m.easing, e && function () {
                    e.call(this, t, m)
                })
            }
            var u, c = this,
                d = s(c),
                f = t,
                h = {},
                p = d.is("html,body");
            switch (typeof f) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = e(f);
                        break
                    }
                    f = s(f, this);
                case "object":
                    (f.is || f.style) && (u = (f = s(f)).offset())
            }
            s.each(m.axis.split(""), function (e, t) {
                var n = "x" == t ? "Left" : "Top",
                    i = n.toLowerCase(),
                    o = "scroll" + n,
                    r = c[o],
                    a = g.max(c, t);
                if (u) h[o] = u[i] + (p ? 0 : r - d.offset()[i]), m.margin && (h[o] -= parseInt(f.css("margin" + n)) || 0, h[o] -= parseInt(f.css("border" + n + "Width")) || 0), h[o] += m.offset[i] || 0, m.over[i] && (h[o] += f["x" == t ? "width" : "height"]() * m.over[i]);
                else {
                    var s = f[i];
                    h[o] = s.slice && "%" == s.slice(-1) ? parseFloat(s) / 100 * a : s
                }
                /^\d+$/.test(h[o]) && (h[o] = h[o] <= 0 ? 0 : Math.min(h[o], a)), !e && m.queue && (r != h[o] && l(m.onAfterFirst), delete h[o])
            }), l(m.onAfter)
        }).end()
    }, g.max = function (e, t) {
        var n = "x" == t ? "Width" : "Height",
            i = "scroll" + n;
        if (!s(e).is("html,body")) return e[i] - s(e)[n.toLowerCase()]();
        var o = "client" + n,
            r = e.ownerDocument.documentElement,
            a = e.ownerDocument.body;
        return Math.max(r[i], a[i]) - Math.min(r[o], a[o])
    }
}(jQuery),
function (r, a, n) {
    var t = function (e, t) {
        this.elem = e, this.$elem = r(e), this.options = t, this.metadata = this.$elem.data("plugin-options"), this.$win = r(a), this.sections = {}, this.didScroll = !1, this.$doc = r(n), this.docHeight = this.$doc.height()
    };
    t.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function () {
            return this.config = r.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", r.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", r.proxy(this.getPositions, this)), this
        },
        adjustNav: function (e, t) {
            e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass), t.addClass(e.config.currentClass)
        },
        bindInterval: function () {
            var e, t = this;
            t.$win.on("scroll.onePageNav", function () {
                t.didScroll = !0
            }), t.t = setInterval(function () {
                e = t.$doc.height(), t.didScroll && (t.didScroll = !1, t.scrollChange()), e !== t.docHeight && (t.docHeight = e, t.getPositions())
            }, 250)
        },
        getHash: function (e) {
            return e.attr("href").split("#")[1]
        },
        getPositions: function () {
            var e, t, n, i = this;
            i.$nav.each(function () {
                e = i.getHash(r(this)), (n = r("#" + e)).length && (t = n.offset().top, i.sections[e] = Math.round(t))
            })
        },
        getSection: function (e) {
            var t = null,
                n = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var i in this.sections) this.sections[i] - n < e && (t = i);
            return t
        },
        handleClick: function (e) {
            var t = this,
                n = r(e.currentTarget),
                i = n.parent(),
                o = "#" + t.getHash(n);
            i.hasClass(t.config.currentClass) || (t.config.begin && t.config.begin(), t.adjustNav(t, i), t.unbindInterval(), t.scrollTo(o, function () {
                t.config.changeHash && (a.location.hash = o), t.bindInterval(), t.config.end && t.config.end()
            })), e.preventDefault()
        },
        scrollChange: function () {
            var e, t = this.$win.scrollTop(),
                n = this.getSection(t);
            null !== n && ((e = this.$elem.find('a[href$="#' + n + '"]').parent()).hasClass(this.config.currentClass) || (this.adjustNav(this, e), this.config.scrollChange && this.config.scrollChange(e)))
        },
        scrollTo: function (e, t) {
            var n = r(e).offset().top;
            r("html, body").animate({
                scrollTop: n
            }, this.config.scrollSpeed, this.config.easing, t)
        },
        unbindInterval: function () {
            clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
        }
    }, t.defaults = t.prototype.defaults, r.fn.onePageNav = function (e) {
        return this.each(function () {
            new t(this, e).init()
        })
    }
}(jQuery, window, document),
function (r) {
    var t = function (e, t) {
        this.elem = e, this.$elem = r(e), this.options = t, this.metadata = this.$elem.data("selectreplace-options")
    };
    t.prototype = {
        defaults: {
            focusClassName: "select-focus",
            valueClassName: "select-value",
            wrapperClassName: "select-wrapper"
        },
        init: function () {
            this.config = r.extend({}, this.defaults, this.options, this.metadata);
            var e = this,
                t = r('<span class="' + this.config.valueClassName + ' value" />').html(this.getCurrentValue()),
                n = r('<span class="' + this.config.wrapperClassName + ' id="' + this.$elem.attr("id") + '-wrapper" />'),
                i = r('<i class="ico" aria-hidden="true">t</i>'),
                o = {
                    "blur.selectReplace": function () {
                        e.$elem.parent().removeClass(e.config.focusClassName)
                    },
                    "change.selectReplace": function () {
                        t.html(e.getCurrentValue())
                    },
                    "focus.selectReplace": function () {
                        e.$elem.parent().addClass(e.config.focusClassName)
                    }
                };
            return this.$elem.wrap(n).before(t).after(i).on(o), this
        },
        getCurrentValue: function () {
            return this.$elem.find(":selected").html()
        }
    }, r.fn.selectReplace = function (e) {
        return this.each(function () {
            new t(this, e).init()
        })
    }
}(jQuery, window, document),
function (a, r) {
    var t = function (e, t) {
        this.elem = e, this.$elem = a(e), this.options = t, this.metadata = this.$elem.data("tabs-options"), this.$navTabs = this.$elem.find(".nav-tabs"), this.$tabs = this.$elem.find(".tabs")
    };
    t.prototype = {
        defaults: {},
        init: function () {
            var e = this;
            return e.$navTabs.on("click", "a", a.proxy(e.handleClick, e)), e.setInitial(), this
        },
        changeTabs: function (e, t) {
            var n = this;
            n.$navTabs.find(".current").removeClass("current"), e.addClass("current"), n.$tabs.find(".current").removeClass("current"), t.addClass("current")
        },
        handleClick: function (e) {
            var t = this,
                n = a(e.currentTarget),
                i = n.parent(),
                o = n.attr("href").split("#")[1],
                r = a("#" + o);
            r && !i.hasClass("current") && t.changeTabs(i, r), a(".card-group").equalHeight({
                find: "li"
            }), e.preventDefault()
        },
        setInitial: function () {
            var e, t, n, i = this,
                o = r.location.href.split("#")[1];
            o && (e = o.replace("tab-", ""), (t = i.$tabs.find("#" + e)).length && (n = i.$navTabs.find('a[href$="#' + e + '"]').parent()).length && i.changeTabs(n, t))
        }
    }, t.defaults = t.prototype.defaults, a.fn.tabs = function (e) {
        return this.each(function () {
            new t(this, e).init()
        })
    }
}(jQuery, window, document),
function (o) {
    o.fn.equalHeight = function (e) {
        var i = o.extend({}, o.fn.equalHeight.defaults, e);
        return this.each(function () {
            var e = o(this),
                t = o.meta ? o.extend({}, i, e.data()) : i,
                n = 0;
            e.find(t.find).each(function () {
                var e = o(this).height();
                n = n < e ? e : n
            }).css("min-height", n)
        })
    }, o.fn.equalHeight.defaults = {
        find: "li"
    }
}(jQuery),
function (a) {
    a.fn.placehold = function (o) {
        function r() {
            for (i = 0; i < arguments.length; i++) arguments[i].toggle()
        }
        o = o || "placeholder";
        return a.fn.placehold.is_supported() ? this : this.each(function () {
            var e = a(this),
                t = e.attr("placeholder");
            if (t) {
                if ("" !== e.val() && e.val() != t || e.addClass(o).val(t), e.is(":password")) {
                    var n = a("<input />", {
                        "class": e.attr("class") + " " + o,
                        value: t
                    });
                    n.bind("focus.placehold", function () {
                        r(e, n), e.focus()
                    }), e.bind("blur.placehold", function () {
                        "" === e.val() && r(e, n)
                    }), e.hide().after(n)
                }
                e.bind({
                    "focus.placehold": function () {
                        e.val() == t && e.removeClass(o).val("")
                    },
                    "blur.placehold": function () {
                        "" === e.val() && e.addClass(o).val(t)
                    }
                }), e.closest("form").bind("submit.placehold", function () {
                    return e.val() == t && e.val(""), !0
                })
            }
        })
    }, a.fn.placehold.is_supported = function () {
        return "placeholder" in document.createElement("input")
    }
}(jQuery),
function (f) {
    f.fn.mediaFilterer = function () {
        return this.each(function () {
            function e() {
                if (!d) {
                    var e = f(this);
                    t(function () {
                        e.is(l) && (o(u = e), n(u)), i(u), r()
                    })
                }
            }

            function t(e) {
                d = !0, e(), d = !1
            }

            function n(e) {
                l.not(e).each(function () {
                    f(this).find("option:first").attr("selected", !0).change()
                })
            }

            function i(e) {
                l.not(e).attr("disabled", !0)
            }

            function o(e) {
                l.each(function () {
                    f(this).parent().removeClass("current")
                }), e.parent().addClass("current")
            }

            function r() {
                a(), s.submit()
            }

            function a() {
                var e = f("<div />");
                s.css({
                    position: "relative"
                }), e.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: s.width() + "px",
                    height: s.height() + "px",
                    zIndex: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.5)"
                }), s.append(e)
            }
            var s = f(this),
                l = s.find("select"),
                u = l.filter(':has(option:selected[value!=""])'),
                c = s.find("input[type=radio]"),
                d = !1;
            o(u), l.change(e), c.change(e)
        })
    }
}(jQuery),
function (c, d, f) {
    "use strict";
    var t = {
            elements: [],
            minHeight: 0,
            percentage: !0,
            testing: !1
        },
        h = c(d),
        p = [];
    c.scrollDepth = function (r) {
        function o(e, t, n) {
            r.testing ? c("#console").html(e + ": " + t) : ("undefined" != typeof ga && (ga("send", "event", "Scroll Depth", e, t, 1, {
                nonInteraction: 1
            }), 2 < arguments.length && ga("send", "timing", "Scroll Depth", e, n, t)), "undefined" != typeof dataLayer && (dataLayer.push({
                event: "gtmEvent",
                gtmCategory: "Scroll Depth",
                gtmAction: e,
                gtmLabel: t,
                gtmValue: 1,
                gtmNonInteractive: !0
            }), 2 < arguments.length && dataLayer.push({
                event: "gtmTiming",
                gtmCategory: "Scroll Depth",
                gtmAction: e,
                gtmLabel: n,
                gtmValue: t,
                gtmNonInteractive: 100
            })))
        }

        function a(e) {
            return {
                "25%": parseInt(.25 * e, 10),
                "50%": parseInt(.5 * e, 10),
                "75%": parseInt(.75 * e, 10),
                "100%": e - 1
            }
        }

        function s(e, n, i) {
            c.each(e, function (e, t) {
                -1 === c.inArray(e, p) && t <= n && (o("Percentage", e, i), p.push(e))
            })
        }

        function l(e, n, i) {
            c.each(e, function (e, t) {
                -1 === c.inArray(t, p) && c(t).length && n >= c(t).offset().top && (o("Elements", t, i), p.push(t))
            })
        }

        function e(n, i) {
            var o, r, a, s = null,
                l = 0,
                u = function () {
                    l = new Date, s = null, a = n.apply(o, r)
                };
            return function () {
                var e = new Date;
                l || (l = e);
                var t = i - (e - l);
                return o = this, r = arguments, t <= 0 ? (clearTimeout(s), s = null, l = e, a = n.apply(o, r)) : s || (s = setTimeout(u, t)), a
            }
        }
        var u = +new Date;
        r = c.extend({}, t, r), c(f).height() < r.minHeight || (o("Percentage", "Baseline"), h.on("scroll.scrollDepth", e(function () {
            var e = c(f).height(),
                t = d.innerHeight ? d.innerHeight : h.height(),
                n = h.scrollTop() + t,
                i = a(e),
                o = +new Date - u;
            p.length >= 4 + r.elements.length ? h.off("scroll.scrollDepth") : (r.elements && l(r.elements, n, o), r.percentage && s(i, n, o))
        }, 500)))
    }
}(jQuery, window, document),
function (g) {
    gaAddLinkClickEvents = function () {
        var i = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
            o = "";
        g("base").attr("href") !== undefined && (o = g("base").attr("href"));
        var r = "",
            a = "",
            s = function (e) {
                var t = e.elEv;
                t.value = 0, t.category = window.WWF.vars.page_type, t.action = e.action, t.label = e.label, t.loc = e.loc !== undefined ? e.loc : this.href, t.non_i = e.non_i !== undefined && e.non_i
            },
            l = function (e, t, n, i, o) {
                if (t.match(i) || n) return o.hasClass("primary") ? s({
                    elEv: e,
                    action: "Primary Action Click",
                    label: o.text(),
                    non_i: !0
                }) : o.hasClass("btn") || o.hasClass("btn-simple") ? s({
                    elEv: e,
                    action: "Secondary Action Click",
                    label: o.text(),
                    non_i: !0
                }) : s({
                    elEv: e,
                    action: "Body Link Click",
                    label: o.text(),
                    non_i: !0
                }), !(a = !1)
            },
            u = function (e, t, n) {
                if ("#" == t.charAt(0)) return s({
                    elEv: e,
                    action: "Anchor Link Click",
                    label: n.text(),
                    non_i: !0
                }), !(a = !1)
            },
            c = function (e, t, n) {
                if (!/^http:\/\/|^javascript:/.test(t)) return s({
                    elEv: e,
                    action: "Body Link Click",
                    label: n.text(),
                    non_i: !0
                }), !(a = !1)
            },
            d = function (e, t) {
                if (t.match(i)) {
                    var n = /[.]/.exec(t) ? /[^.]+$/.exec(t) : undefined;
                    return s({
                        elEv: e,
                        action: "File Download - " + n[0],
                        label: t.replace(/ /g, "-"),
                        loc: o + t
                    }), !(a = !1)
                }
            },
            f = function (e, t) {
                if (t.match(/^mailto\:/i)) return s({
                    elEv: e,
                    action: "Mailto Click",
                    label: t.replace(/^mailto\:/i, "")
                }), a = !0
            },
            h = function (e, t, n) {
                if (t.match(/^https?\:/i) && !n) return s({
                    elEv: e,
                    action: "Outbound Link Click",
                    label: t.replace(/^https?\:\/\//i, ""),
                    non_i: !0
                }), !(a = !1)
            },
            e = function () {
                try {
                    ! function () {
                        var t = function () {
                            dataLayer.push({
                                event: "gtmEvent",
                                gtmCategory: "Print Intent",
                                gtmAction: document.location.pathname,
                                gtmLabel: ""
                            })
                        };
                        window.matchMedia && window.matchMedia("print").addListener(function (e) {
                            e.matches || t()
                        });
                        window.onafterprint = t
                    }()
                } catch (e) {}
            },
            p = function (e, t) {
                if (t.match(/^tel\:/i)) return s({
                    elEv: e,
                    action: "Telephone Number Click",
                    label: t.replace(/^tel\:/i, "")
                }), !(a = !1)
            },
            m = function (e, t, n) {
                if (t) {
                    var i = !0;
                    return "Outbound Link Click" !== e.action && "File Download -" !== e.action.substring(0, 15) || n.attr("target") !== undefined && "_blank" === n.attr("target").toLowerCase() ? dataLayer.push({
                        event: "gtmEvent",
                        gtmCategory: e.category,
                        gtmAction: e.action,
                        gtmLabel: e.label.toLowerCase(),
                        gtmValue: e.value,
                        gtmNonInteractive: e.non_i
                    }) : (r = e.loc, dataLayer.push({
                        event: "gtmEvent",
                        gtmCategory: e.category,
                        gtmAction: e.action,
                        gtmLabel: e.label.toLowerCase(),
                        gtmValue: e.value,
                        gtmNonInteractive: e.non_i
                    }), a && dataLayer.push({
                        event: "gtmSocial",
                        gtmCategory: "Email",
                        gtmAction: "Mailto",
                        gtmLabel: ""
                    }), i = !1), i
                }
            },
            t = function () {
                g("#content").on("click", "a", function () {
                    var e = g(this),
                        t = !0;
                    if (!e.attr("data-track-event") && "/" !== window.location.pathname && "/?" !== window.location.pathname.substr(0, 2)) {
                        var n = void 0 !== e.attr("href") ? e.attr("href").split("?")[0] : "",
                            i = n.match(document.domain.split(".").slice(-2).join(".")),
                            o = ["worldwildlife.org", "www.worldwildlife.org", "support.worldwildlife.org", "wwf.worldwildlife.org", "secure.worldwildlife.org", "apps.worldwildlife.org", "gifts.worldwildlife.org", "assets.worldwildlife.org", "content.worldwildlife.org", "fyia.worldwildlife.org"],
                            r = [];
                        if (f(r, n)) return m(r, t, e), !0;
                        if (d(r, n)) return m(r, t, e), !0;
                        if (h(r, n, i)) return m(r, t, e), !0;
                        if (l(r, n, i, o, e)) return m(r, t, e), !0;
                        if (u(r, n, e)) return m(r, t, e), !0;
                        if (c(r, n, e)) return m(r, t, e), !0;
                        if (p(r, n)) return m(r, t, e), !0;
                        a = t = !1
                    }
                })
            };
        return gaHitCallbackHandler = function () {
            window.location.href = r
        }, {
            init: function () {
                t(), e()
            }
        }
    }(), gaAddLinkClickEvents.init()
}($);
var keyboardMap = {
    8: "delete",
    9: "TAB",
    13: "ENTER",
    14: "ENTER_SPECIAL",
    16: "SHIFT",
    46: ".",
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
    96: 0,
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    144: "NUM_LOCK",
    190: "."
};
$(".single-hych__donation-input-other").keydown(function (e) {
    var t = $(this).val(),
        n = keyboardMap[e.which];
    return void 0 !== n && (!e.shiftKey && (-1 !== $.inArray(n, ["delete", "NUM_LOCK", "TAB", "ENTER", "ENTER_SPECIAL"]) || -1 !== (t + n).search(/^[0-9]+\,?(\,[0-9]+)?\.?(\.[0-9]{1,2})?$/)))
}).change(function () {
    var e = $(this).val().replace(/$/g, "");
    n = Number(e.replace(/,/g, "")), $(".single-hych__donation-input-button").val("Donate" + (0 < n ? " $" + e : ""))
}).keyup(function () {
    $(this).change()
}).on("blur input", function () {
    $(this).change()
});
var sliderDonationForm = $('form[name="process"]');
sliderDonationForm.submit(function () {
        var e = "https://support.worldwildlife.org/site/Donation2?",
            t = $(".single-hych__donation-input-other"),
            n = "df_id=12891&12891.donation=form1",
            i = "&set.DonationLevel=18396",
            o = "&s_src=",
            r = $(".hych-donate-container").data("source"),
            a = "#level_standardexpanded18396amount",
            s = t.val().replace(/\$+|\,+/, ""),
            l = "&set.Value=",
            u = 100;
        "" !== t.val() ? sliderDonationForm.attr("action", e + n + i + l + s * u + o + r + a) : sliderDonationForm.attr("action", e + n + o + r)
    }), window.WWF || (WWF = {}), WWF.isIE7 = $("html").hasClass("lte7"), WWF.init = function () {
        var e = WWF;
        e.vars = $.extend({}, e.vars, {
            $body: $("body"),
            $win: $(window),
            breakPoint: 640
        }), "undefined" == typeof window.innerWidth && document.documentElement.clientWidth && (e.util.updateWindowWidth(), e.vars.$win.on("resize", e.util.updateWindowWidth)), e.common.init()
    },
    function (h, f) {
        var u = WWF.features = {
            blockTracking: {
                init: function () {
                    var e = this;
                    $("[data-track-block]").on("click", "a", e.handleClick)
                },
                handleClick: function (e) {
                    var t = WWF.common.ga,
                        n = e.delegateTarget.dataset.trackBlock,
                        i = this.href.replace("|", "");
                    t.eventTrack(n + "|" + i), t.debug && e.preventDefault()
                }
            },
            cardGroup: {
                init: function () {
                    $(".card-group").equalHeight({
                        find: ".card"
                    })
                }
            },
            homepageGoals: {
                init: function () {
                    $(".goal-pillars").equalHeight({
                        find: ".goal-pillar"
                    })
                }
            },
            homepageSocial: {
                init: function () {
                    $(".homepage-social-group").equalHeight({
                        find: ".homepage-social-section"
                    })
                }
            },
            howToHelp: {
                init: function () {
                    $(".group-cta-items").equalHeight({
                        find: ".padded"
                    })
                }
            },
            carousel: {
                init: function () {
                    $(".carousel").carousel()
                }
            },
            storyTags: {
                init: function () {
                    var e = $("ul.list-pills"),
                        t = parseInt(e.data("show-limit"), 10),
                        n = e.find("li"),
                        i = n.slice(t),
                        o = $('<a href="#">Show All</a>');
                    n.size() > t && (e.append($('<li class="show-all">').append(o)), i.hide(), o.click(function (e) {
                        e.preventDefault(), o.parent().remove(), i.show()
                    }))
                }
            },
            fixedNav: {
                init: function () {
                    var e = this;
                    e.$nav = $(".nav-fixed"), e.$navContainer = e.$nav.parent(), e.offsetTop = e.$navContainer.offset().top, e.didScroll = !1, e.isFixed = !1, e.isFull = e.$nav.hasClass("nav-fixed-full"), e.originalWidth = e.isFull ? "100%" : e.$nav.width(), e.t = setTimeout(e.scroll, 10), WWF.vars.$win.on("scroll.fixedNav", function () {
                        e.didScroll = !0
                    }), WWF.vars.$win.on("resize.fixedNav", u.fixedNav.updateOffset);
                    var t, n, i = function () {
                            return $(f).height() - $(h).height()
                        },
                        o = function () {
                            return $(h).scrollTop()
                        },
                        r = $(".fixed-nav-progress-bar"),
                        a = i(),
                        s = function () {
                            return t = o(), n = t / a * 100, n += "%"
                        },
                        l = function () {
                            r.css({
                                width: s()
                            })
                        };
                    $(f).on("scroll", l), $(h).on("resize", function () {
                        a = i(), l()
                    })
                },
                scroll: function () {
                    var e = u.fixedNav;
                    e.didScroll && (e.didScroll = !1, WWF.vars.$win.scrollTop() >= e.offsetTop ? e.isFixed || (e.$nav.css({
                        left: "auto",
                        position: "fixed",
                        width: e.originalWidth
                    }), e.isFixed = !0) : e.isFixed && (e.$nav.css({
                        position: "static",
                        width: "auto"
                    }), e.isFixed = !1)), e.t = setTimeout(e.scroll, 10)
                },
                updateOffset: function () {
                    var e = u.fixedNav;
                    e.offsetTop = e.$navContainer.offset().top
                }
            },
            heroVideo: {
                init: function () {
                    this.$heroContainer = $(".hero-container"), this.$videoLink = this.$heroContainer.find("a.video-thumb"), this.$videoWrapper = this.$heroContainer.find(".hero-video-wrapper"), this.$close = this.$videoWrapper.find(".close"), this.$video = this.$videoWrapper.find(".video"), this.videoUrl = this.$video.data("video-src").replace("http:", "https:") + "&amp;autoplay=1", this.$iframe = $('<iframe src="' + this.videoUrl + '" frameborder="0" allowfullscreen height="600" width="1066" style="display: none;"></iframe>'), this.$videoLink.on("click", $.proxy(this.open, this)), this.$close.on("click", $.proxy(this.close, this))
                },
                close: function (e) {
                    this.$videoWrapper.animate({
                        opacity: 0
                    }, 250).css("visibility", "hidden"), this.$video.empty(), e.preventDefault()
                },
                open: function (e) {
                    var t = this;
                    t.$video.append(t.$iframe), t.$videoWrapper.css("visibility", "visible").animate({
                        opacity: 1
                    }, 500, function () {
                        t.$iframe.css("display", "block")
                    }), e.preventDefault()
                }
            },
            map: {
                init: function () {
                    var e = this,
                        t = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8emEmHd3DPtZ95Cz2NWE2SYhfL1q7tuE&callback=";
                    if (e.$map = $("#map"), e.$map.after('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADAQMAAACOOjyFAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAAtJREFUCB1jYAABAAAGAAEJaVcEAAAAAElFTkSuQmCC" alt="" class="shim" />'), e.$map.data("kml")) t += "WWF.features.map.kmlMap", WWF.util.loadScript(t);
                    else if ("object" == typeof markers && markers.length) {
                        var n = "https://fca7603378a4e3ebeab2-4e03b1ac88f27f7b20b4cf232f717383.ssl.cf1.rackcdn.com/js/infobubble-compiled.js";
                        t += "WWF.features.map.markerMap", WWF.util.loadScript(n, function () {
                            WWF.util.loadScript(t)
                        })
                    }
                },
                bindEvents: function (e, t, n) {
                    function i(e) {
                        c = !0, d = e.touches[0].pageY
                    }

                    function o() {
                        c = !1
                    }

                    function r(e) {
                        c && (f = e.touches[0].pageY, h.scrollBy(0, d - f))
                    }
                    var a = WWF.features.map,
                        s = WWF.common.ga,
                        l = a.$map.data("track-map"),
                        u = new InfoBubble({
                            arrowSize: 5,
                            borderRadius: 5,
                            content: '<div class="map-content">' + (n ? '<a href="' + n + '" data-track-event="' + l + "|" + t + '">' + t + "</a>" : t) + "</div>",
                            disableAutoPan: !0,
                            hideCloseButton: !0,
                            padding: 5,
                            disableAnimation: !0
                        });
                    if (Modernizr.touch) {
                        var c = !1,
                            d = 0,
                            f = 0;
                        a.mapElement.addEventListener("touchstart", i, !0), a.mapElement.addEventListener("touchend", o, !0), a.mapElement.addEventListener("touchmove", r, !0)
                    }
                    t && (google.maps.event.addListener(e, "mouseover", function () {
                        u.open(a.map, this)
                    }), google.maps.event.addListener(e, "mouseout", function () {
                        setTimeout(function () {
                            u.close()
                        }, 250)
                    })), n && google.maps.event.addListener(e, "click", function () {
                        l && s.eventTrack(l + "|" + t), s.debug || (h.location = n)
                    })
                },
                kmlMap: function () {
                    var e = this,
                        t = {
                            backgroundColor: "#cee1e9",
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            zoom: 0,
                            disableDefaultUI: !0,
                            draggable: !1,
                            disableDoubleClickZoom: !0,
                            keyboardShortcuts: !1,
                            scrollwheel: !1,
                            styles: e.styles
                        },
                        n = {
                            clickable: !1
                        };
                    e.setupMap(t), new google.maps.KmlLayer($("#map").data("kml") + "?" + (new Date).getTime(), n).setMap(e.map)
                },
                markerMap: function () {
                    var e = this,
                        t = new google.maps.LatLngBounds,
                        n = {
                            backgroundColor: "#cee1e9",
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            zoom: 1,
                            disableDefaultUI: !0,
                            draggable: !1,
                            disableDoubleClickZoom: !0,
                            keyboardShortcuts: !1,
                            scrollwheel: !1,
                            styles: e.styles
                        },
                        o = new google.maps.MarkerImage("/assets/structure/unique/marker.png", new google.maps.Size(30, 30));
                    for (e.setupMap(n), i = 0, numMarkers = markers.length; i < numMarkers; i++) {
                        var r = new google.maps.LatLng(markers[i].lat, markers[i].lng),
                            a = new google.maps.Marker({
                                icon: o,
                                position: r,
                                map: e.map
                            });
                        e.bindEvents(a, markers[i].content, markers[i].link), 1 < markers.length ? t.extend(r) : e.map.setCenter(r)
                    }
                    1 < markers.length && e.map.fitBounds(t)
                },
                setupMap: function (e) {
                    var t = this;
                    t.mapElement = f.getElementById("map"), t.map = new google.maps.Map(t.mapElement, e)
                },
                styles: [{
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ECE3DE"
                    }, {
                        saturation: "-85"
                    }, {
                        lightness: "15"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#cee1e9"
                    }]
                }]
            },
            masonry: {
                init: function () {
                    var e = this;
                    e.$masonry = $(".masonry"), e.$images = e.$masonry.find("img[data-full]"), e.isMasonried = !1, WWF.vars.$win.on("resize.masonryWWF", e.handleResize), e.masonrize()
                },
                handleResize: function () {
                    var e = u.masonry;
                    !0 === e.isMasonried && h.innerWidth < 1e3 ? e.unmasonrize() : !1 === e.isMasonried && 1e3 < h.innerWidth && e.$images.imagesLoaded(e.masonrize)
                },
                masonrize: function () {
                    var e = u.masonry;
                    1e3 <= h.innerWidth ? (e.$masonry.masonry({
                        itemSelector: "li.item"
                    }), e.isMasonried = !0) : e.unmasonrize()
                },
                unmasonrize: function () {
                    var e = u.masonry;
                    e.isMasonried && (e.$masonry.masonry("destroy").addClass("masonry"), e.isMasonried = !1)
                }
            },
            onePageNav: {
                init: function () {
                    var e = "device-dummy";
                    $("#one-page-nav").onePageNav({
                        scrollThreshold: .05,
                        filter: ":not(.external)",
                        begin: function () {
                            Modernizr.touch && WWF.vars.$body.append('<div id="' + e + '" style="height: 1px;"></div>')
                        },
                        end: function () {
                            Modernizr.touch && $("#" + e).remove()
                        }
                    })
                }
            },
            placesMap: {
                init: function () {
                    var e = this;
                    e.$map = $("#places-map"), e.$markers = $(".markers"), e.markerImageAdjustment = 15, e.mapTracking = e.$map.data("track-map"), markers.length && e.$map.imagesLoaded(function () {
                        for (e.mapDimensions = {
                                height: e.$map.height(),
                                width: e.$map.width()
                            }, e.shift = {
                                x: Math.round(0 - .032 * e.mapDimensions.width),
                                y: Math.round(.145 * e.mapDimensions.height)
                            }, i = 0, numMarkers = markers.length; i < numMarkers; i++) u.placesMap.positionMarker(markers[i])
                    })
                },
                getX: function (e) {
                    var t = this,
                        n = t.mapDimensions.width / 360;
                    return n = (n *= 180 + e.lng) - t.markerImageAdjustment + t.shift.x, Math.round(n) / t.mapDimensions.width * 100
                },
                getY: function (e) {
                    var t = this,
                        n = t.mapDimensions.height / 180;
                    return n = (n *= -1 * e.lat + 90) - t.markerImageAdjustment + t.shift.y, Math.round(n) / t.mapDimensions.height * 100
                },
                positionMarker: function (e) {
                    var t = this,
                        n = t.getX(e),
                        i = t.getY(e);
                    $('<a href="' + e.link + '" class="marker" style="display: none; left: ' + n + "%; top: " + i + '%;" data-track-event="' + t.mapTracking + "|" + e.content + '"><span class="place-name">' + e.content + "</span></a>").appendTo(t.$map).delay(250).fadeIn(250, t.positionTooltip)
                },
                positionTooltip: function () {
                    var e = $(this).find(".place-name"),
                        t = e.outerWidth() / 2;
                    e.css("margin-left", "-" + t + "px")
                }
            },
            selectRedirect: {
                init: function () {
                    $("select.select-redirect").on("change", u.selectRedirect.handleChange)
                },
                handleChange: function () {
                    var e = $(this),
                        t = e.val(),
                        n = e.find('option[value="' + t + '"]').text(),
                        i = WWF.common.ga;
                    n && i.eventTrack(e.data("track-event") + "|" + n), i.debug || (h.location = t)
                }
            },
            selectReplace: {
                init: function () {
                    $("select.select-replace").selectReplace()
                }
            },
            mediaFilterer: {
                init: function () {
                    $(".media-filterer").mediaFilterer()
                }
            },
            slider: {
                init: function () {
                    $(".slider").slider()
                }
            },
            socialShareDynamic: {
                init: function () {
                    var e, t, n, i, o, r, a, s, l, u, c, d = "es" === $("html").attr("lang");
                    h.twttr = (t = "script", n = "twitter-wjs", o = (e = f).getElementsByTagName(t)[0], r = h.twttr || {}, e.getElementById(n) || ((i = e.createElement(t)).id = n, i.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(i, o), r._e = [], r.ready = function (e) {
                        r._e.push(e)
                    }), r), twttr.ready(function (e) {
                        e.events.bind("click", function () {
                            WWF.common.ga.eventTrack(WWF.vars.page_type + "|Social Share Click|Twitter"), dataLayer.push({
                                event: "gtmSocial",
                                gtmCategory: "Twitter",
                                gtmAction: "Tweet",
                                gtmLabel: ""
                            })
                        })
                    }), h.fbAsyncInit = function () {
                        FB.init({
                            appId: "643916752395762",
                            xfbml: !0,
                            version: "v2.12"
                        }), FB.AppEvents.logPageView(), FB.Event.subscribe("edge.create", function () {
                            WWF.common.ga.eventTrack(WWF.vars.page_type + "|Social Share Click|Facebook"), dataLayer.push({
                                event: "gtmSocial",
                                gtmCategory: "Facebook",
                                gtmAction: "Share",
                                gtmLabel: ""
                            })
                        })
                    }, s = "script", l = "facebook-jssdk", c = (a = f).getElementsByTagName(s)[0], a.getElementById(l) || ((u = a.createElement(s)).id = l, u.src = d ? "//connect.facebook.net/en_LA/sdk.js" : "//connect.facebook.net/en_US/sdk.js", c.parentNode.insertBefore(u, c)), $(".social-sharing .tellfriend").on("click", function () {
                        dataLayer.push({
                            event: "gtmSocial",
                            gtmCategory: "Tell A Friend",
                            gtmAction: "Email",
                            gtmLabel: ""
                        })
                    })
                }
            },
            tabs: {
                init: function () {
                    $(".tab-group").tabs()
                }
            },
            tooltips: {
                init: function () {
                    if (Modernizr.touch) {
                        var e = this;
                        e.tooltips = $(".tooltips"), e.tooltips.on("click", ".tooltip-control", $.proxy(e.handleClick, e))
                    }
                },
                handleClick: function (e) {
                    var t = this,
                        n = $(e.currentTarget),
                        i = n.hasClass("hovered");
                    t.tooltips.find(".hovered").removeClass("hovered"), i || n.addClass("hovered"), e.preventDefault()
                }
            }
        }
    }(window, document),
    function (n) {
        var r = WWF.common = {
            init: function () {
                r.mobileNav.init(), r.photoAttribution.init(), r.placeHolder.init(), r.ga.init(), r.callsToAction.init(), r.togs.init(), r.tabz.init(), r.iPadCheck.init(), r.srchCat.init(), r.emailFooter.init(), r.videoAspectRatio.init()
            },
            srchCat: {
                init: function () {
                    for (categories = ["stories", "places", "species", "site"], x = 0; x < categories.length; x++)
                        if (-1 < n.location.href.indexOf(categories[x])) {
                            var e = '<input name="cat" value="' + categories[x] + '" type="hidden">';
                            $("#header .form-inline,#mobile-header .form-inline").append(e)
                        }
                }
            },
            iPadCheck: {
                init: function () {
                    onIpad = null != navigator.userAgent.match(/iPad/i)
                }
            },
            tabz: {
                init: function () {
                    $(".tabz_content").hide(), $(".tabContent").each(function () {
                        $(this).find(".tabz_content:first").show()
                    }), $(".myTabz").each(function () {
                        tabNumber = $(this).find("li").length, totalWidth = 100, tWidth = totalWidth / tabNumber, liWidth = tWidth + "%", tabLi = $(this).find("li"), tabLi.css("width", liWidth), $(".myTabz li").click(function () {
                            if (tabActive = $(this).hasClass("active"), !tabActive) {
                                var e = $(this).closest(".wrapper");
                                $(".myTabz li", e).removeClass("active"), $(this).addClass("active"), $(".tabz_content", e).hide();
                                var t = $(this).find("a").attr("href");
                                $(t).show()
                            }
                            return !1
                        })
                    })
                }
            },
            togs: {
                init: function () {
                    var e = $(".reveal");
                    $(".hiddenTog").hide(), e.each(function () {
                        $(this).click(function () {
                            var e = this.href,
                                t = e.substring(e.length - 6, e.length);
                            return $(t).toggle("fast"), !1
                        })
                    })
                }
            },
            callsToAction: {
                init: function () {
                    $("[data-c2a]").each(function () {
                        var t = $(this),
                            e = t.data("c2a");
                        e.original_url = n.location.href, $.get("/personalization", e, function (e) {
                            "" != e && (t.replaceWith(e), picturefill())
                        })
                    })
                }
            },
            ga: {
                init: function () {
                    this.debug = -1 !== n.location.href.indexOf("gadebug"), Math.floor(100 * Math.random()) < 8 && $.scrollDepth()
                },
                eventTrack: function (e, t) {
                    if (e) {
                        var n = "_trackSocial" === t ? "gtmSocial" : "gtmEvent",
                            i = e.split("|"),
                            o = {
                                event: n,
                                gtmCategory: i[0],
                                gtmAction: i[1],
                                gtmLabel: i[2],
                                gtmValue: i[3],
                                gtmNonInteraction: i[4] !== undefined && i[4]
                            };
                        dataLayer.push(o), r.ga.debug && console && console.log && console.log(o)
                    }
                }
            },
            mobileNav: {
                init: function () {
                    r.mobileNav.$header = $("#mobile-header"), r.mobileNav.$dropdown = r.mobileNav.$header.find("div.dropdown"), r.mobileNav.$control = r.mobileNav.$header.find(".control-expand"), r.mobileNav.$control.on("click", r.mobileNav.handleClick)
                },
                handleClick: function (e) {
                    r.mobileNav.$dropdown.toggleClass("dropdown-expanded"), r.mobileNav.$control.toggleClass("expanded"), e.preventDefault()
                }
            },
            photoAttribution: {
                init: function () {
                    $("[data-attribution]").each(function () {
                        var e = $(this),
                            t = e.data("attribution");
                        "" !== t && (t = '<span class="attribution">&copy; ' + t + "</span>", e.hasClass("figure") ? e.append(t) : e.after(t))
                    })
                }
            },
            placeHolder: {
                init: function () {
                    $("input").placehold("placeholder")
                }
            },
            emailFooter: {
                init: function () {
                    $(n).load(function () {
                        function t() {
                            var e = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                                t = $("#cons_email").val();
                            return !("" === t || !e.test(t)) || ($("#cons_email").before('<p class="ErrorMessage">Please supply a valid email address.</p>'), !1)
                        }

                        function n() {
                            $(".ErrorMessage").addClass("hide")
                        }
                        $("#convio_footer-email-signup").submit(function (e) {
                            n(), t() || e.preventDefault()
                        })
                    })
                }
            },
            videoAspectRatio: {
                init: function () {
                    $(function () {
                        function e() {
                            jQuery(".js__video-section").each(function () {
                                jQuery(this).css("height", 9 * jQuery(this).width() / 16)
                            })
                        }
                        e(), jQuery(n).resize(e)
                    })
                }
            }
        }
    }(window, document),
    function (n, r) {
        var a = WWF.util = {
            init: function () {
                a.features(), a.personalization.init(), Modernizr.touch && (a.viewportmeta = r.querySelector && r.querySelector('meta[name="viewport"]'), a.ua = navigator.userAgent, a.BODY_SCROLL_TOP = !1, a.scaleFix(), a.hideUrlBarOnLoad())
            },
            bodyFeatures: function (e) {
                var t = WWF,
                    n = t.vars.$body.data("features"),
                    i = new Array;
                if (n)
                    for (var o = 0, r = (i = n.split(" ")).length; o < r; o++) {
                        var a = i[o];
                        t.features[a] && "function" == typeof t.features[a][e] && t.features[a][e]()
                    }
            },
            features: function () {
                a.bodyFeatures("init")
            },
            gestureStart: function () {
                a.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
            },
            getScrollTop: function () {
                var e = r;
                return n.pageYOffset || "CSS1Compat" === e.compatMode && e.documentElement.scrollTop || e.body.scrollTop || 0
            },
            hideUrlBar: function () {
                var e = n;
                location.hash || !1 === a.BODY_SCROLL_TOP || e.scrollTo(0, 1 === a.BODY_SCROLL_TOP ? 0 : 1)
            },
            hideUrlBarOnLoad: function () {
                var e = n,
                    t = e.document;
                !location.hash && e.addEventListener && (n.scrollTo(0, 1), a.BODY_SCROLL_TOP = 1, bodycheck = setInterval(function () {
                    t.body && (clearInterval(bodycheck), a.BODY_SCROLL_TOP = a.getScrollTop(), a.hideUrlBar())
                }, 15), e.addEventListener("load", function () {
                    setTimeout(function () {
                        a.getScrollTop() < 20 && a.hideUrlBar()
                    }, 0)
                }))
            },
            loadScript: function (e, t) {
                var n = r.createElement("script");
                n.type = "text/javascript", n.readyState ? n.onreadystatechange = function () {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t && t())
                } : n.onload = function () {
                    t && t()
                }, n.src = e, r.getElementsByTagName("head")[0].appendChild(n)
            },
            personalization: {
                init: function () {
                    var t = this;
                    t.trackUser() && t.readCookie("don_days") && t.lastdonCookie(), $(r).on("click", "a[data-social-cookie]", function () {
                        var e = $(this).data("social-cookie");
                        t.socialCookie(e)
                    }), t.visitCookie()
                },
                createCookie: function (e, t, n) {
                    var i = "";
                    if (n) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()
                    }
                    r.cookie = e + "=" + t + i + "; domain=.worldwildlife.org; path=/"
                },
                eraseCookie: function (e) {
                    self.personalization.createCookie(e, "", -1)
                },
                visitCookie: function () {
                    var e = a.personalization;
                    visit = e.readCookie("visit"), now = new Date, visitTime = now.getTime() + 60 * now.getTimezoneOffset() * 1e3, visit ? visitTime >= parseInt(visit.split("-")[1]) + 864e5 && e.createCookie("visit", "Repeat", 365) : e.createCookie("visit", "New-" + visitTime.toString(), 365)
                },
                lastdonCookie: function () {
                    var e = a.personalization,
                        t = new Array(e.readCookie("partner"), e.readCookie("monthly"), e.readCookie("paperless"), e.readCookie("onetime"), e.readCookie("ogc")).filter(function (e) {
                            return "" != e && "undefined" != e && null != e
                        });
                    t.sort(function (e, t) {
                        return e - t
                    });
                    var n = t[t - 1];
                    if (n) {
                        var i = new Date;
                        n = new Date(n);
                        var o = parseInt(Math.ceil(i - n) / 864e5);
                        e.createCookie("don_days", o, 365)
                    }
                },
                readCookie: function (e) {
                    for (var t = e + "=", n = r.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var o = n[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
                    }
                    return null
                },
                socialCookie: function (e) {
                    var t = a.personalization,
                        n = t.readCookie("social");
                    n ? new RegExp(e, "gi").test(n) || (n = n + "," + e) : n = e;
                    t.createCookie("social", n, 365)
                },
                trackUser: function () {
                    return "yes" != n.navigator.doNotTrack
                }
            },
            scaleFix: function () {
                a.viewportmeta && /iPhone|iPad|iPod/.test(a.ua) && !/Opera Mini/.test(a.ua) && (a.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0", r.addEventListener("gesturestart", a.gestureStart, !1))
            },
            updateWindowWidth: function () {
                var e = r.documentElement.clientWidth;
                e && e !== n.innerWidth && (n.innerWidth = e)
            }
        }
    }(window, document), $(document).ready(WWF.init), $(window).load(WWF.util.init);