!function (t, i) {
    t.extend(t, {
        toString: function (t) {
            return Object.prototype.toString.call(t)
        }, slice: function (t, i) {
            return Array.prototype.slice.call(t, i || 0)
        }, later: function (t, i, e, n, o) {
            return window["set" + (e ? "Interval" : "Timeout")](function () {
                t.apply(n, o)
            }, i || 0)
        }, throttle: function (e, n, o) {
            function s() {
                function t() {
                    a = Date.now(), n.apply(h, l)
                }
                function s() {
                    r = i
                }
                var h = this, c = Date.now() - a, l = arguments;
                o && !r && t(), r && clearTimeout(r), o === i && c > e ? t() : r = setTimeout(o ? s : t, o === i ? e - c : e)
            }
            var r, a = 0;
            return "function" != typeof n && (o = n, n = e, e = 250), s._zid = n._zid = n._zid || t.proxy(n)._zid, s
        }, debounce: function (e, n, o) {
            return n === i ? t.throttle(250, e, !1) : t.throttle(e, n, o === i ? !1 : o !== !1)
        }
    });
    var e = t.toString
}(Zepto), function (t) {
    function i() {
        t(window).on("scroll", t.debounce(80, function () {
            t(document).trigger("scrollStop")
        }, !1))
    }

    function e() {
        t(window).off("scroll"), i()
    }

    t.matchMedia = function () {
        var i = 0, e = "gmu-media-detect", n = t.fx.transitionEnd, o = t.fx.cssPrefix, s = t("<style></style>").append("." + e + "{" + o + "transition: width 0.001ms; width: 0; height: 0; position: relative; bottom: 0px;}\n").appendTo("head");
        return function (o) {
            var r, a = e + i++, h = t('<div class="' + e + '" id="' + a + '"></div>').appendTo("body"), c = [];
            return s.append("@media " + o + " { #" + a + " { width: 100px; } }\n"), h.on(n, function () {
                r.matches = 100 === h.width(), t.each(c, function (i, e) {
                    t.isFunction(e) && e.call(r, r)
                })
            }), r = {
                matches: 100 === h.width(), media: o, addListener: function (t) {
                    return c.push(t), this
                }, removeListener: function (t) {
                    var i = c.indexOf(t);
                    return ~i && c.splice(i, 1), this
                }
            }
        }
    }(), t(function () {
        var i = function (i) {
            e !== i.matches && (t(window).trigger("ortchange"), e = i.matches)
        }, e = !0;
        t.mediaQuery = {ortchange: "screen and (width: " + window.innerWidth + "px)"}, t.matchMedia(t.mediaQuery.ortchange).addListener(i)
    }), i(), t(window).on("pageshow", function (i) {
        i.persisted && t(document).off("touchstart", e).one("touchstart", e)
    })
}(Zepto),function (t) {
    var i;
    t.fn.imglazyload = function (e) {
        function n(t) {
            var i = c ? window : a.offset(), n = i[l.win[0]], o = i[l.win[1]];
            return n >= t[l.img[0]] - e.threshold - o && n <= t[l.img[0]] + t[l.img[1]]
        }

        function o(n) {
            var o, s = t(n);
            t.isFunction(e.startload) && e.startload.call(s);
            var r = s.attr(e.urlName);
            s.css("opacity", "0"), o = t("<img />").on("load", function () {
                s.css({"background-image": "url(" + r + ")"}).trigger("loadcomplete"), o.off("load"), s.attr(e.urlName, null), s.animate({opacity: 1})
            }).on("error", function () {
                var e = t.Event("error");
                s.trigger(e), e.defaultPrevented || i.push(n), o.off("error").remove()
            }).attr("src", r)
        }

        function s() {
            var e, s, a, h;
            for (e = i.length; e--;)s = t(h = i[e]), a = s.offset(), n(a) && (r.call(i, e, 1), o(h))
        }

        var r = Array.prototype.splice, e = t.extend({
            threshold: 0,
            container: window,
            urlName: "data-src",
            placeHolder: "",
            eventName: "scrollStop",
            refresh: !1,
            innerScroll: !1,
            isVertical: !0,
            startload: null
        }, e), a = t(e.container), h = e.isVertical, c = t.isWindow(a.get(0)), l = {
            win: [h ? "scrollY" : "scrollX", h ? "innerHeight" : "innerWidth"],
            img: [h ? "top" : "left", h ? "height" : "width"]
        };
        return !c && (l.win = l.img), i = t.slice(this).reverse(), e.refresh ? this : (t(document).ready(function () {
            e.placeHolder && t(i).append(e.placeHolder), s()
        }), !e.innerScroll && t(window).on(e.eventName + " ortchange", function () {
            s()
        }), t.fn.imglazyload.detect = s, this)
    }
}(Zepto);
$("i[data-src]").imglazyload();