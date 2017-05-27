/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
;!function (g, f, j, i) {
    var h = g(f);
    g.fn.lazyload = function (e) {
        function d() {
            var k = 0;
            b.each(function () {
                var l = g(this);
                if (!a.skip_invisible || l.is(":visible")) {
                    if (g.abovethetop(this, a) || g.leftofbegin(this, a)) {
                    } else {
                        if (g.belowthefold(this, a) || g.rightoffold(this, a)) {
                            if (++k > a.failure_limit) {
                                return !1
                            }
                        } else {
                            l.trigger("appear"), k = 0
                        }
                    }
                }
            })
        }

        var c, b = this, a = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: f,
            data_attribute: "original",
            skip_invisible: false,
            appear: null,
            load: null,
            placeholder: "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEEyMjA3NUFCMDIxMUU2QTJERkMzOEE5MkZBQjQxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEEyMjA3NkFCMDIxMUU2QTJERkMzOEE5MkZBQjQxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE4QTIyMDczQUIwMjExRTZBMkRGQzM4QTkyRkFCNDE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE4QTIyMDc0QUIwMjExRTZBMkRGQzM4QTkyRkFCNDE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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"
        };
        return e && (i !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), i !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), g.extend(a, e)), c = a.container === i || a.container === f ? h : g(a.container), 0 === a.event.indexOf("scroll") && c.bind(a.event, function () {
            return d()
        }), this.each(function () {
            var k = this, l = g(k);
            k.loaded = !1, (l.attr("src") === i || l.attr("src") === !1) && l.is("img") && l.attr("src", a.placeholder), l.one("appear", function () {
                if (!this.loaded) {
                    if (a.appear) {
                        var m = b.length;
                        a.appear.call(k, m, a)
                    }
                    g("<img />").bind("load", function () {
                        var p = l.attr("data-" + a.data_attribute);
                        l.hide(), l.is("img") ? l.attr("src", p) : l.css("background-image", "url('" + p + "')"), l[a.effect](a.effect_speed), k.loaded = !0;
                        var o = g.grep(b, function (q) {
                            return !q.loaded
                        });
                        if (b = g(o), a.load) {
                            var n = b.length;
                            a.load.call(k, n, a)
                        }
                    }).attr("src", l.attr("data-" + a.data_attribute))
                }
            }), 0 !== a.event.indexOf("scroll") && l.bind(a.event, function () {
                k.loaded || l.trigger("appear")
            })
        }), h.bind("resize", function () {
            d()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && h.bind("pageshow", function (k) {
            k.originalEvent && k.originalEvent.persisted && b.each(function () {
                g(this).trigger("appear")
            })
        }), g(j).ready(function () {
            d()
        }), this
    }, g.belowthefold = function (d, b) {
        var a;
        return a = b.container === i || b.container === f ? (f.innerHeight ? f.innerHeight : h.height()) + h.scrollTop() : g(b.container).offset().top + g(b.container).height(), a <= g(d).offset().top - b.threshold
    }, g.rightoffold = function (d, b) {
        var a;
        return a = b.container === i || b.container === f ? h.width() + h.scrollLeft() : g(b.container).offset().left + g(b.container).width(), a <= g(d).offset().left - b.threshold
    }, g.abovethetop = function (d, b) {
        var a;
        return a = b.container === i || b.container === f ? h.scrollTop() : g(b.container).offset().top, a >= g(d).offset().top + b.threshold + g(d).height()
    }, g.leftofbegin = function (d, b) {
        var a;
        return a = b.container === i || b.container === f ? h.scrollLeft() : g(b.container).offset().left, a >= g(d).offset().left + b.threshold + g(d).width()
    }, g.inviewport = function (a, d) {
        return !(g.rightoffold(a, d) || g.leftofbegin(a, d) || g.belowthefold(a, d) || g.abovethetop(a, d))
    }, g.extend(g.expr[":"], {
        "below-the-fold": function (a) {
            return g.belowthefold(a, {threshold: 0})
        }, "above-the-top": function (a) {
            return !g.belowthefold(a, {threshold: 0})
        }, "right-of-screen": function (a) {
            return g.rightoffold(a, {threshold: 0})
        }, "left-of-screen": function (a) {
            return !g.rightoffold(a, {threshold: 0})
        }, "in-viewport": function (a) {
            return g.inviewport(a, {threshold: 0})
        }, "above-the-fold": function (a) {
            return !g.belowthefold(a, {threshold: 0})
        }, "right-of-fold": function (a) {
            return g.rightoffold(a, {threshold: 0})
        }, "left-of-fold": function (a) {
            return !g.rightoffold(a, {threshold: 0})
        }
    })
}(Zepto, window, document);
