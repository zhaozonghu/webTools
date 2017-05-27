var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : H[F.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function i(t) {
        return null != t && t == t.window
    }

    function n(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function o(e) {
        return "object" == t(e)
    }

    function r(t) {
        return o(t) && !i(t) && t.__proto__ == Object.prototype
    }

    function s(t) {
        return t instanceof Array
    }

    function a(t) {
        return "number" == typeof t.length
    }

    function c(t) {
        return P.call(t, function (t) {
            return null != t
        })
    }

    function l(t) {
        return t.length > 0 ? T.fn.concat.apply([], t) : t
    }

    function u(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function h(t) {
        return t in j ? j[t] : j[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function p(t, e) {
        return "number" != typeof e || $[u(t)] ? e : e + "px"
    }

    function d(t) {
        var e, i;
        return L[t] || (e = I.createElement(t), I.body.appendChild(e), i = M(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), L[t] = i), L[t]
    }

    function f(t) {
        return "children" in t ? C.call(t.children) : T.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function m(t, e, i) {
        for (S in e)i && (r(e[S]) || s(e[S])) ? (r(e[S]) && !r(t[S]) && (t[S] = {}), s(e[S]) && !s(t[S]) && (t[S] = []), m(t[S], e[S], i)) : e[S] !== b && (t[S] = e[S])
    }

    function g(t, e) {
        return e === b ? T(t) : T(t).filter(e)
    }

    function v(t, i, n, o) {
        return e(i) ? i.call(t, n, o) : i
    }

    function _(t, e, i) {
        null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
    }

    function y(t, e) {
        var i = t.className, n = i && i.baseVal !== b;
        return e === b ? n ? i.baseVal : i : void(n ? i.baseVal = e : t.className = e)
    }

    function w(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? T.parseJSON(t) : t : e) : t
        } catch (i) {
            return t
        }
    }

    function x(t, e) {
        e(t);
        for (var i in t.childNodes)x(t.childNodes[i], e)
    }

    var b, S, T, k, E, A, D = [], C = D.slice, P = D.filter, I = window.document, L = {}, j = {}, M = I.defaultView.getComputedStyle, $ = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, O = /^\s*<(\w+|!)[^>]*>/, U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, N = /^(?:body|html)$/i, z = ["val", "css", "html", "text", "data", "width", "height", "offset"], R = ["after", "prepend", "before", "append"], B = I.createElement("table"), Y = I.createElement("tr"), q = {
        tr: I.createElement("tbody"),
        tbody: B,
        thead: B,
        tfoot: B,
        td: Y,
        th: Y,
        "*": I.createElement("div")
    }, X = /complete|loaded|interactive/, W = /^\.([\w-]+)$/, V = /^#([\w-]*)$/, K = /^[\w-]+$/, H = {}, F = H.toString, J = {}, Q = I.createElement("div");
    return J.matches = function (t, e) {
        if (!t || 1 !== t.nodeType)return !1;
        var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (i)return i.call(t, e);
        var n, o = t.parentNode, r = !o;
        return r && (o = Q).appendChild(t), n = ~J.qsa(o, e).indexOf(t), r && Q.removeChild(t), n
    }, E = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, A = function (t) {
        return P.call(t, function (e, i) {
            return t.indexOf(e) == i
        })
    }, J.fragment = function (t, e, i) {
        t.replace && (t = t.replace(U, "<$1></$2>")), e === b && (e = O.test(t) && RegExp.$1), e in q || (e = "*");
        var n, o, s = q[e];
        return s.innerHTML = "" + t, o = T.each(C.call(s.childNodes), function () {
            s.removeChild(this)
        }), r(i) && (n = T(o), T.each(i, function (t, e) {
            z.indexOf(t) > -1 ? n[t](e) : n.attr(t, e)
        })), o
    }, J.Z = function (t, e) {
        return t = t || [], t.__proto__ = T.fn, t.selector = e || "", t
    }, J.isZ = function (t) {
        return t instanceof J.Z
    }, J.init = function (t, i) {
        if (t) {
            if (e(t))return T(I).ready(t);
            if (J.isZ(t))return t;
            var n;
            if (s(t))n = c(t); else if (o(t))n = [r(t) ? T.extend({}, t) : t], t = null; else if (O.test(t))n = J.fragment(t.trim(), RegExp.$1, i), t = null; else {
                if (i !== b)return T(i).find(t);
                n = J.qsa(I, t)
            }
            return J.Z(n, t)
        }
        return J.Z()
    }, T = function (t, e) {
        return J.init(t, e)
    }, T.extend = function (t) {
        var e, i = C.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function (i) {
            m(t, i, e)
        }), t
    }, J.qsa = function (t, e) {
        var i;
        return n(t) && V.test(e) ? (i = t.getElementById(RegExp.$1)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : C.call(W.test(e) ? t.getElementsByClassName(RegExp.$1) : K.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, T.contains = function (t, e) {
        return t !== e && t.contains(e)
    }, T.type = t, T.isFunction = e, T.isWindow = i, T.isArray = s, T.isPlainObject = r, T.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, T.inArray = function (t, e, i) {
        return D.indexOf.call(e, t, i)
    }, T.camelCase = E, T.trim = function (t) {
        return t.trim()
    }, T.uuid = 0, T.support = {}, T.expr = {}, T.map = function (t, e) {
        var i, n, o, r = [];
        if (a(t))for (n = 0; n < t.length; n++)i = e(t[n], n), null != i && r.push(i); else for (o in t)i = e(t[o], o), null != i && r.push(i);
        return l(r)
    }, T.each = function (t, e) {
        var i, n;
        if (a(t)) {
            for (i = 0; i < t.length; i++)if (e.call(t[i], i, t[i]) === !1)return t
        } else for (n in t)if (e.call(t[n], n, t[n]) === !1)return t;
        return t
    }, T.grep = function (t, e) {
        return P.call(t, e)
    }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        H["[object " + e + "]"] = e.toLowerCase()
    }), T.fn = {
        forEach: D.forEach,
        reduce: D.reduce,
        push: D.push,
        sort: D.sort,
        indexOf: D.indexOf,
        concat: D.concat,
        map: function (t) {
            return T(T.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return T(C.apply(this, arguments))
        },
        ready: function (t) {
            return X.test(I.readyState) ? t(T) : I.addEventListener("DOMContentLoaded", function () {
                t(T)
            }, !1), this
        },
        get: function (t) {
            return t === b ? C.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return D.every.call(this, function (e, i) {
                return t.call(e, i, e) !== !1
            }), this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : T(P.call(this, function (e) {
                return J.matches(e, t)
            }))
        },
        add: function (t, e) {
            return T(A(this.concat(T(t, e))))
        },
        is: function (t) {
            return this.length > 0 && J.matches(this[0], t)
        },
        not: function (t) {
            var i = [];
            if (e(t) && t.call !== b)this.each(function (e) {
                t.call(this, e) || i.push(this)
            }); else {
                var n = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? C.call(t) : T(t);
                this.forEach(function (t) {
                    n.indexOf(t) < 0 && i.push(t)
                })
            }
            return T(i)
        },
        has: function (t) {
            return this.filter(function () {
                return o(t) ? T.contains(this, t) : T(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !o(t) ? t : T(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !o(t) ? t : T(t)
        },
        find: function (t) {
            var e, i = this;
            return e = "object" == typeof t ? T(t).filter(function () {
                var t = this;
                return D.some.call(i, function (e) {
                    return T.contains(e, t)
                })
            }) : 1 == this.length ? T(J.qsa(this[0], t)) : this.map(function () {
                return J.qsa(this, t)
            })
        },
        closest: function (t, e) {
            var i = this[0], o = !1;
            for ("object" == typeof t && (o = T(t)); i && !(o ? o.indexOf(i) >= 0 : J.matches(i, t));)i = i !== e && !n(i) && i.parentNode;
            return T(i)
        },
        parents: function (t) {
            for (var e = [], i = this; i.length > 0;)i = T.map(i, function (t) {
                return (t = t.parentNode) && !n(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return g(e, t)
        },
        parent: function (t) {
            return g(A(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return g(this.map(function () {
                return f(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return C.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return g(this.map(function (t, e) {
                return P.call(f(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return T.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = null), "none" == M(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var i = e(t);
            if (this[0] && !i)var n = T(t).get(0), o = n.parentNode || this.length > 1;
            return this.each(function (e) {
                T(this).wrapAll(i ? t.call(this, e) : o ? n.cloneNode(!0) : n)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                T(this[0]).before(t = T(t));
                for (var e; (e = t.children()).length;)t = e.first();
                T(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var i = e(t);
            return this.each(function (e) {
                var n = T(this), o = n.contents(), r = i ? t.call(this, e) : t;
                o.length ? o.wrapAll(r) : n.append(r)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                T(this).replaceWith(T(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = T(this);
                (t === b ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return T(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return T(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return t === b ? this.length > 0 ? this[0].innerHTML : null : this.each(function (e) {
                var i = this.innerHTML;
                T(this).empty().append(v(this, t, e, i))
            })
        },
        text: function (t) {
            return t === b ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                this.textContent = t
            })
        },
        attr: function (t, e) {
            var i;
            return "string" == typeof t && e === b ? 0 == this.length || 1 !== this[0].nodeType ? b : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : this.each(function (i) {
                if (1 === this.nodeType)if (o(t))for (S in t)_(this, S, t[S]); else _(this, t, v(this, e, i, this.getAttribute(t)))
            })
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && _(this, t)
            })
        },
        prop: function (t, e) {
            return e === b ? this[0] && this[0][t] : this.each(function (i) {
                this[t] = v(this, e, i, this[t])
            })
        },
        data: function (t, e) {
            var i = this.attr("data-" + u(t), e);
            return null !== i ? w(i) : b
        },
        val: function (t) {
            return t === b ? this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function (t) {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function (e) {
                this.value = v(this, t, e, this.value)
            })
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var i = T(this), n = v(this, t, e, i.offset()), o = i.offsetParent().offset(), r = {
                    top: n.top - o.top,
                    left: n.left - o.left
                };
                "static" == i.css("position") && (r.position = "relative"), i.css(r)
            });
            if (0 == this.length)return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, i) {
            if (arguments.length < 2 && "string" == typeof e)return this[0] && (this[0].style[E(e)] || M(this[0], "").getPropertyValue(e));
            var n = "";
            if ("string" == t(e))i || 0 === i ? n = u(e) + ":" + p(e, i) : this.each(function () {
                this.style.removeProperty(u(e))
            }); else for (S in e)e[S] || 0 === e[S] ? n += u(S) + ":" + p(S, e[S]) + ";" : this.each(function () {
                this.style.removeProperty(u(S))
            });
            return this.each(function () {
                this.style.cssText += ";" + n
            })
        },
        index: function (t) {
            return t ? this.indexOf(T(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return D.some.call(this, function (t) {
                return this.test(y(t))
            }, h(t))
        },
        addClass: function (t) {
            return this.each(function (e) {
                k = [];
                var i = y(this), n = v(this, t, e, i);
                n.split(/\s+/g).forEach(function (t) {
                    T(this).hasClass(t) || k.push(t)
                }, this), k.length && y(this, i + (i ? " " : "") + k.join(" "))
            })
        },
        removeClass: function (t) {
            return this.each(function (e) {
                return t === b ? y(this, "") : (k = y(this), v(this, t, e, k).split(/\s+/g).forEach(function (t) {
                    k = k.replace(h(t), " ")
                }), void y(this, k.trim()))
            })
        },
        toggleClass: function (t, e) {
            return this.each(function (i) {
                var n = T(this), o = v(this, t, i, y(this));
                o.split(/\s+/g).forEach(function (t) {
                    (e === b ? !n.hasClass(t) : e) ? n.addClass(t) : n.removeClass(t)
                })
            })
        },
        scrollTop: function () {
            return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), i = this.offset(), n = N.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return i.top -= parseFloat(T(t).css("margin-top")) || 0, i.left -= parseFloat(T(t).css("margin-left")) || 0, n.top += parseFloat(T(e[0]).css("border-top-width")) || 0, n.left += parseFloat(T(e[0]).css("border-left-width")) || 0, {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || I.body; t && !N.test(t.nodeName) && "static" == T(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function (t) {
        T.fn[t] = function (e) {
            var o, r = this[0], s = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            return e === b ? i(r) ? r["inner" + s] : n(r) ? r.documentElement["offset" + s] : (o = this.offset()) && o[t] : this.each(function (i) {
                r = T(this), r.css(t, v(this, e, i, r[t]()))
            })
        }
    }), R.forEach(function (e, i) {
        var n = i % 2;
        T.fn[e] = function () {
            var e, o, r = T.map(arguments, function (i) {
                return e = t(i), "object" == e || "array" == e || null == i ? i : J.fragment(i)
            }), s = this.length > 1;
            return r.length < 1 ? this : this.each(function (t, e) {
                o = n ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null, r.forEach(function (t) {
                    if (s)t = t.cloneNode(!0); else if (!o)return T(t).remove();
                    x(o.insertBefore(t, e), function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, T.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
            return T(t)[e](this), this
        }
    }), J.Z.prototype = T.fn, J.uniq = A, J.deserializeValue = w, T.zepto = J, T
}();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto), function (t) {
    function e(t) {
        var e = this.os = {}, i = this.browser = {}, n = t.match(/WebKit\/([\d.]+)/), o = t.match(/(Android)\s+([\d.]+)/), r = t.match(/(iPad).*OS\s([\d_]+)/), s = !r && t.match(/(iPhone\sOS)\s([\d_]+)/), a = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), c = a && t.match(/TouchPad/), l = t.match(/Kindle\/([\d.]+)/), u = t.match(/Silk\/([\d._]+)/), h = t.match(/(BlackBerry).*Version\/([\d.]+)/), p = t.match(/(BB10).*Version\/([\d.]+)/), d = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/), f = t.match(/PlayBook/), m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/), g = t.match(/Firefox\/([\d.]+)/);
        (i.webkit = !!n) && (i.version = n[1]), o && (e.android = !0, e.version = o[2]), s && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), r && (e.ios = e.ipad = !0, e.version = r[2].replace(/_/g, ".")), a && (e.webos = !0, e.version = a[2]), c && (e.touchpad = !0), h && (e.blackberry = !0, e.version = h[2]), p && (e.bb10 = !0, e.version = p[2]), d && (e.rimtabletos = !0, e.version = d[2]), f && (i.playbook = !0), l && (e.kindle = !0, e.version = l[1]), u && (i.silk = !0, i.version = u[1]), !u && e.android && t.match(/Kindle Fire/) && (i.silk = !0), m && (i.chrome = !0, i.version = m[1]), g && (i.firefox = !0, i.version = g[1]), e.tablet = !!(r || f || o && !t.match(/Mobile/) || g && t.match(/Tablet/)), e.phone = !(e.tablet || !(o || s || a || h || p || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || g && t.match(/Mobile/)))
    }
    e.call(t, navigator.userAgent), t.__detect = e
}(Zepto),function (t) {
    function e(t) {
        return t._zid || (t._zid = d++)
    }

    function i(t, i, r, s) {
        if (i = n(i), i.ns)var a = o(i.ns);
        return (p[e(t)] || []).filter(function (t) {
            return t && (!i.e || t.e == i.e) && (!i.ns || a.test(t.ns)) && (!r || e(t.fn) === e(r)) && (!s || t.sel == s)
        })
    }

    function n(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function o(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function r(e, i, n) {
        "string" != t.type(e) ? t.each(e, n) : e.split(/\s/).forEach(function (t) {
            n(t, i)
        })
    }

    function s(t, e) {
        return t.del && ("focus" == t.e || "blur" == t.e) || !!e
    }

    function a(t) {
        return m[t] || t
    }

    function c(i, o, c, l, u, h) {
        var d = e(i), f = p[d] || (p[d] = []);
        r(o, c, function (e, o) {
            var r = n(e);
            r.fn = o, r.sel = l, r.e in m && (o = function (e) {
                var i = e.relatedTarget;
                return !i || i !== this && !t.contains(this, i) ? r.fn.apply(this, arguments) : void 0
            }), r.del = u && u(o, e);
            var c = r.del || o;
            r.proxy = function (t) {
                var e = c.apply(i, [t].concat(t.data));
                return e === !1 && (t.preventDefault(), t.stopPropagation()), e
            }, r.i = f.length, f.push(r), i.addEventListener(a(r.e), r.proxy, s(r, h))
        })
    }

    function l(t, n, o, c, l) {
        var u = e(t);
        r(n || "", o, function (e, n) {
            i(t, e, n, c).forEach(function (e) {
                delete p[u][e.i], t.removeEventListener(a(e.e), e.proxy, s(e, l))
            })
        })
    }

    function u(e) {
        var i, n = {originalEvent: e};
        for (i in e)_.test(i) || void 0 === e[i] || (n[i] = e[i]);
        return t.each(y, function (t, i) {
            n[t] = function () {
                return this[i] = g, e[t].apply(e, arguments)
            }, n[i] = v
        }), n
    }

    function h(t) {
        if (!("defaultPrevented" in t)) {
            t.defaultPrevented = !1;
            var e = t.preventDefault;
            t.preventDefault = function () {
                this.defaultPrevented = !0, e.call(this)
            }
        }
    }

    var p = (t.zepto.qsa, {}), d = 1, f = {}, m = {mouseenter: "mouseover", mouseleave: "mouseout"};
    f.click = f.mousedown = f.mouseup = f.mousemove = "MouseEvents", t.event = {
        add: c,
        remove: l
    }, t.proxy = function (i, n) {
        if (t.isFunction(i)) {
            var o = function () {
                return i.apply(n, arguments)
            };
            return o._zid = e(i), o
        }
        if ("string" == typeof n)return t.proxy(i[n], i);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e) {
        return this.each(function () {
            c(this, t, e)
        })
    }, t.fn.unbind = function (t, e) {
        return this.each(function () {
            l(this, t, e)
        })
    }, t.fn.one = function (t, e) {
        return this.each(function (i, n) {
            c(this, t, e, null, function (t, e) {
                return function () {
                    var i = t.apply(n, arguments);
                    return l(n, e, t), i
                }
            })
        })
    };
    var g = function () {
        return !0
    }, v = function () {
        return !1
    }, _ = /^([A-Z]|layer[XY]$)/, y = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (e, i, n) {
        return this.each(function (o, r) {
            c(r, i, n, e, function (i) {
                return function (n) {
                    var o, s = t(n.target).closest(e, r).get(0);
                    return s ? (o = t.extend(u(n), {
                        currentTarget: s,
                        liveFired: r
                    }), i.apply(s, [o].concat([].slice.call(arguments, 1)))) : void 0
                }
            })
        })
    }, t.fn.undelegate = function (t, e, i) {
        return this.each(function () {
            l(this, e, i, t)
        })
    }, t.fn.live = function (e, i) {
        return t(document.body).delegate(this.selector, e, i), this
    }, t.fn.die = function (e, i) {
        return t(document.body).undelegate(this.selector, e, i), this
    }, t.fn.on = function (e, i, n) {
        return !i || t.isFunction(i) ? this.bind(e, i || n) : this.delegate(i, e, n)
    }, t.fn.off = function (e, i, n) {
        return !i || t.isFunction(i) ? this.unbind(e, i || n) : this.undelegate(i, e, n)
    }, t.fn.trigger = function (e, i) {
        return ("string" == typeof e || t.isPlainObject(e)) && (e = t.Event(e)), h(e), e.data = i, this.each(function () {
            "dispatchEvent" in this && this.dispatchEvent(e)
        })
    }, t.fn.triggerHandler = function (e, n) {
        var o, r;
        return this.each(function (s, a) {
            o = u("string" == typeof e ? t.Event(e) : e), o.data = n, o.target = a, t.each(i(a, e.type || e), function (t, e) {
                return r = e.proxy(o), o.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), r
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }), ["focus", "blur"].forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.each(function () {
                try {
                    this[e]()
                } catch (t) {
                }
            }), this
        }
    }), t.Event = function (t, e) {
        "string" != typeof t && (e = t, t = e.type);
        var i = document.createEvent(f[t] || "Events"), n = !0;
        if (e)for (var o in e)"bubbles" == o ? n = !!e[o] : i[o] = e[o];
        return i.initEvent(t, n, !0, null, null, null, null, null, null, null, null, null, null, null, null), i.isDefaultPrevented = function () {
            return this.defaultPrevented
        }, i
    }
}(Zepto),function (t, e) {
    function i(t) {
        return n(t.replace(/([a-z])([A-Z])/, "$1-$2"))
    }
    function n(t) {
        return t.toLowerCase()
    }
    function o(t) {
        return r ? r + t : n(t)
    }
    var r, s, a, c, l, u, h, p, d = "", f = {
        Webkit: "webkit",
        Moz: "",
        O: "o",
        ms: "MS"
    }, m = window.document, g = m.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, _ = {};
    t.each(f, function (t, i) {
        return g.style[t + "TransitionProperty"] !== e ? (d = "-" + n(t) + "-", r = i, !1) : void 0
    }), s = d + "transform", _[a = d + "transition-property"] = _[c = d + "transition-duration"] = _[l = d + "transition-timing-function"] = _[u = d + "animation-name"] = _[h = d + "animation-duration"] = _[p = d + "animation-timing-function"] = "", t.fx = {
        off: r === e && g.style.transitionProperty === e,
        speeds: {_default: 400, fast: 200, slow: 600},
        cssPrefix: d,
        transitionEnd: o("TransitionEnd"),
        animationEnd: o("AnimationEnd")
    }, t.fn.animate = function (e, i, n, o) {
        return t.isPlainObject(i) && (n = i.easing, o = i.complete, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), this.anim(e, i, n, o)
    }, t.fn.anim = function (n, o, r, d) {
        var f, m, g, y = {}, w = "", x = this, b = t.fx.transitionEnd;
        if (o === e && (o = .4), t.fx.off && (o = 0), "string" == typeof n)y[u] = n, y[h] = o + "s", y[p] = r || "linear", b = t.fx.animationEnd; else {
            m = [];
            for (f in n)v.test(f) ? w += f + "(" + n[f] + ") " : (y[f] = n[f], m.push(i(f)));
            w && (y[s] = w, m.push(s)), o > 0 && "object" == typeof n && (y[a] = m.join(", "), y[c] = o + "s", y[l] = r || "linear")
        }
        return g = function (e) {
            if ("undefined" != typeof e) {
                if (e.target !== e.currentTarget)return;
                t(e.target).unbind(b, g)
            }
            t(this).css(_), d && d.call(this)
        }, o > 0 && this.bind(b, g), this.size() && this.get(0).clientLeft, this.css(y), 0 >= o && setTimeout(function () {
            x.each(function () {
                g.call(this)
            })
        }, 0), this
    }, g = null
}(Zepto);