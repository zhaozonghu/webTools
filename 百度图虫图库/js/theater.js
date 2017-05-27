$.fn.fullscreen = function (e) {
    return "onfullscreenchange" in document ? this.on("fullscreenchange", e) : "onwebkitfullscreenchange" in document ? this.on("webkitfullscreenchange", e) : "onmozfullscreenchange" in document && this.on("mozfullscreenchange", e), this
}, $.fn.requestFullScreen = function () {
    var e = this[0];
    return e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen && document.mozFullScreenEnabled ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen(), this
}, $.isFullscreen = function () {
    return "fullscreen" in document ? document.fullscreen : "webkitIsFullScreen" in document ? document.webkitIsFullScreen : "mozFullScreen" in document ? document.mozFullScreen : !1
}, $.exitFullscreen = function () {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
}, function (e) {
    e.fn.mousewheel = function (e) {
        var t = null, i = !1, n = function (e) {
            var t = 0;
            return void 0 !== e.originalEvent.deltaY ? t = e.originalEvent.deltaY : void 0 !== e.originalEvent.wheelDeltaY ? t = e.originalEvent.wheelDeltaY / -40 : void 0 !== e.originalEvent.wheelDelta ? t = e.originalEvent.wheelDelta / -40 : void 0 !== e.originalEvent.delta && (t = e.originalEvent.delta), t
        };
        return this.on("DOMMouseScroll mousewheel wheel", function (o) {
            o.preventDefault();
            var s = n(o);
            if (s != -0) {
                if (t && clearTimeout(t), t = setTimeout(function () {
                        i = !1
                    }, 150), i)return;
                i = !0, setTimeout(function () {
                    e(s)
                }, 150)
            }
        }), this
    }
}(jQuery), !function (e) {
    e.getCookie = function (e) {
        for (var t, i, n, o = " " + e + "=", s = document.cookie.split(";"), r = 0; r < s.length; r++)if (t = " " + s[r], i = t.indexOf(o), i >= 0 && i + o.length == (n = t.indexOf("=") + 1))return decodeURIComponent(t.substring(n, t.length));
        return void 0
    }, e.setCookie = function (e, t, i, n, o, s) {
        if ("number" == typeof i) {
            var r = i, a = i = new Date;
            a.setTime(+a + 864e5 * r)
        }
        document.cookie = [e, "=", escape(t), i ? "; expires=" + i.toUTCString() : "", n ? "; path=" + n : "", o ? "; domain=" + options.domain : "", s ? "; secure" : ""].join("")
    }
}(document), function (e) {
    var t = document.getCookie("webp_enabled"), i = "1" === t ? ".webp" : ".jpg", n = "//photo.tuchong.com/";
    e.imageSrc = function (e, t, o) {
        return o || (o = i), n + e.user_id + "/" + t + "/" + e.img_id + o
    }
}(window.Filter || (window.Filter = {})), define("theater-swiper", function () {
    var e = "<% for(var i=0,len=images.length;i < len;i++) { %>\n<% var image = images[i]; %>\n<div class=\"scene-item\">\n    <img src=\"<%==Filter.imageSrc(image,'f','.jpg')%>\">\n</div>\n<% } %>", t = '<% for(var i = 0,l = images.length; i < l; i++) { %>\n<% var image = images[i]; %>\n<a class="thumb-item" data-post-index="<%=post_index%>" data-image-index="<%=i%>" style="background-image: url(<%==Filter.imageSrc(image,\'m\')%>);"></a>\n<% } %>', i = Backbone.View.extend({
        el: ".theater-swiper",
        posts: [],
        curIndex: 0,
        nextIndex: 0,
        prevIndex: 0,
        hasPrev: !0,
        hasNext: !0,
        imageIndex: 0,
        curSlideIndex: 0,
        initThumbTrans: -66,
        renderScene: function () {
            var t = _.template(e);
            return function (e, i) {
                "next" == i ? $(t(e)).addClass("next-scene").appendTo(".scene-container-" + i) : $(t(e)).addClass("prev-scene").prependTo(".scene-container-" + i)
            }
        }(),
        renderThumb: function () {
            var e = _.template(t);
            return function (t, i) {
                "next" == i ? $(e(t)).appendTo(".thumb-container-" + i) : $(e(t)).prependTo(".thumb-container-" + i)
            }
        }(),
        initialize: function () {
            this.$prevSceneContainer = this.$el.find(".scene-container-prev"), this.$nextSceneContainer = this.$el.find(".scene-container-next"), this.$prevThumbContainer = this.$el.find(".thumb-container-prev"), this.$nextThumbContainer = this.$el.find(".thumb-container-next"), this._bindEvent()
        },
        events: {"click .thumb-item": "_goToThumb", "click .icon-arrow,.icon-2arrow": "_goToArrow"},
        reset: function (e) {
            this.posts = e.posts, this.nextIndex = this.prevIndex = this.curIndex = e.index, this.hasPrev = !0, this.hasNext = !0, this.imageIndex = e.imageIndex, this.curSlideIndex = 0, this.initThumbTrans = -66, this.$prevSceneContainer.html(""), this.$nextSceneContainer.html("");
            var t = {transform: "translateX(" + this.initThumbTrans + "px)"};
            this.$prevThumbContainer.html("").css(t), this.$nextThumbContainer.html("").css(t);
            var i = e.posts[e.index];
            i.post_index = e.index, this.renderScene(i, "next"), this.renderThumb(i, "next"), this.go(e.imageIndex)
        },
        _bindEvent: function () {
            var e = this;
            this.on("data", function (t) {
                return t.posts.length < 1 ? void("prev" == t.type ? e.hasPrev = !1 : e.hasNext = !1) : ("next" == t.type ? e.posts = e.posts.concat(t.posts) : (e.curIndex += t.posts.length, e.prevIndex += t.posts.length, e.nextIndex += t.posts.length, e.posts = t.posts.concat(e.posts)), void e._prepare(t.type))
            })
        },
        _prepare: function (e) {
            var t = this[e + "Index"];
            if (0 > t || t >= this.posts.length)return this.trigger("end", {type: e}), !1;
            var i = this.posts[t];
            return "multi-photo" != i.type ? ("next" == e ? this.nextIndex++ : this.prevIndex--, this._prepare(e), !1) : (i.post_index = t, this.renderScene(i, e), this.renderThumb(i, e), void this.needPrepare(e))
        },
        needPrepare: function (e) {
            var t = this.$prevThumbContainer.find(".thumb-item"), i = this.$nextThumbContainer.find(".thumb-item");
            "prev" == e && Math.abs(t.length + this.curSlideIndex) < 10 && (this.prevIndex--, this._prepare("prev")), "next" == e && Math.abs(i.length - this.curSlideIndex) < 10 && (this.nextIndex++, this._prepare("next"))
        },
        _goToThumb: function (e) {
            var t = $(e.target), i = parseInt(t.data("post-index"), 10) || 0, n = parseInt(t.data("image-index"), 10) || 0;
            this.forward(i, n)
        },
        _getDistance: function (e, t, i, n) {
            var o = 0;
            if (i == e)return n - t;
            o += this.posts[e].image_count - t;
            for (var s = e + 1; i - 1 >= s; s++)o += this.posts[s].image_count;
            return o += n
        },
        _goToArrow: function (e) {
            var t = $(e.target), i = parseInt(t.data("step"), 10) || 1;
            this.go(t.hasClass("switch-prev") ? this.curSlideIndex - i : this.curSlideIndex + i)
        },
        forward: function (e, t) {
            var i = 0;
            e >= this.curIndex ? (i = this._getDistance(this.curIndex, this.imageIndex, e, t), this.go(this.curSlideIndex + i)) : (i = this._getDistance(e, t, this.curIndex, this.imageIndex), this.go(this.curSlideIndex - i))
        },
        prev: function () {
            this.go(this.curSlideIndex - 1)
        },
        next: function () {
            console.log(this.curSlideIndex)
            this.go(this.curSlideIndex + 1)
        },
        go: function (e) {
            //if(e>15){alert('禁止访问！');return false}
            var t = this.$prevThumbContainer.find(".thumb-item"), i = this.$nextThumbContainer.find(".thumb-item");
            e < -t.length || e >= i.length || (this.slideScene(e), this.slideThumb(e), e <= this.curSlideIndex && this.needPrepare("prev"), e >= this.curSlideIndex && this.needPrepare("next"), this.curSlideIndex = e, $currentItem = e >= 0 ? i.eq(e) : t.eq(e + t.length), this.curIndex = parseInt($currentItem.data("post-index"), 10), this.imageIndex = parseInt($currentItem.data("image-index"), 10),
                this.trigger("slide", {
                index: this.curIndex,
                current: this.posts[this.curIndex],
                imageIndex: this.imageIndex
            }))
        },
        slideScene: function (e) {
            var t = e > this.curSlideIndex ? "prev-scene" : "next-scene", i = this.$prevSceneContainer.find(".scene-item"), n = this.$nextSceneContainer.find(".scene-item");
            this.curSlideIndex < 0 ? (i.eq(this.curSlideIndex + i.length).addClass(t), e > this.curSlideIndex ? (i.eq(Math.min(e, -1) + i.length).prevAll(".next-scene").removeClass("next-scene").addClass("prev-scene"), n.eq(Math.max(e, 0)).prevAll(".next-scene").removeClass("next-scene").addClass("prev-scene")) : i.eq(Math.min(e, -1) + i.length).nextAll(".prev-scene").removeClass("prev-scene").addClass("next-scene")) : (n.eq(this.curSlideIndex).addClass(t), e > this.curSlideIndex ? n.eq(e).prevAll(".next-scene").removeClass("next-scene").addClass("prev-scene") : (n.eq(Math.max(e, 0)).nextAll(".prev-scene").removeClass("prev-scene").addClass("next-scene"), i.eq(Math.min(e, -1) + i.length).nextAll(".prev-scene").removeClass("prev-scene").addClass("next-scene"))), e >= 0 ? n.eq(e).removeClass("prev-scene").removeClass("next-scene") : i.eq(e + i.length).removeClass("prev-scene").removeClass("next-scene")
        },
        slideThumb: function (e) {
            var t = 116, i = t * (this.curSlideIndex - e);
            this.initThumbTrans += i, this.$prevThumbContainer.css({transform: "translateX(" + this.initThumbTrans + "px)"}), this.$nextThumbContainer.css({transform: "translateX(" + this.initThumbTrans + "px)"}), this.$el.find(".current-thumb").removeClass("current-thumb");
            var n = this.$prevThumbContainer.find(".thumb-item"), o = this.$nextThumbContainer.find(".thumb-item");
            e >= 0 ? o.eq(e).addClass("current-thumb") : n.eq(e + n.length).addClass("current-thumb")
        }
    });
    return i
}), define("theater", ["theater-swiper"], function (t) {
    var i = window.TuchongApi,
        n = '<div class="widget-theater">\n    <div class="theater-main">\n        <div class="theater-handler">\n            <a class="theater-close icon-close" title="关闭"></a>\n            <span class="theater-indicator"></span>\n            <a class="theater-download icon-download" title="下载原图"></a>\n            <a class="theater-fullscreen icon-fullscreen" title="全屏展示"></a>\n        </div>\n        <div class="theater-swiper">\n            <div class="theater-scene">\n                <div class="scene-container-prev"></div>\n                <div class="scene-container-next"></div>\n                <a class="icon-arrow switch-prev" data-step="1" title="上一张"></a>\n                <a class="icon-arrow switch-next" data-step="1" title="下一张"></a>\n                <a class="theater-scene-mask"></a>\n            </div>\n            <div class="theater-thumb">\n                <div class="thumb-container-prev"></div>\n                <div class="thumb-container-next"></div>\n                <a class="icon-2arrow switch-prev" data-step="4" title="上4张"></a>\n                <a class="icon-2arrow switch-next" data-step="4" title="下4张"></a>\n            </div>\n        </div>\n    </div>\n  </div>', o = Backbone.View.extend({
        currentPost: {},
        curIndex: 0,
        imageIndex: 0,
        byHistory: !1,
        showing: !0,
        domain: location.origin || location.protocol + "//" + location.host,
        referer: "",
        initialize: function () {
            this.$el = $(n).css({height: window.innerHeight}).appendTo("body"), this.$notice = this.$el.find(".theater-notice"), this.$main = this.$el.find(".theater-main"), this.swiper = new t;
            var i = null, o = this;
            this.onKeyUp = function (e) {
                i && clearTimeout(i), i = setTimeout(function () {
                    if (o.showing)switch (e.which) {
                        case 37:
                        case 38:
                            return o.swiper.prev(), !1;
                        case 39:
                        case 40:
                            return o.swiper.next(), !1;
                        //case 27:
                        //    return o.close(), !1
                    }
                }, 300)
            }, this._bindEvent()
        },
        events: {
            "click .theater-close": "close",
            "click .theater-fullscreen,.theater-scene-mask": "_fullscreen"
        },
        show: function (e, t) {
            if (this.curIndex = e.index || 0, !(!e || e.posts.length < 1 || e.index < 0)) {
                this.currentPost = e.posts[e.index];
                this._init(e)
            }
        },
        close: function () {
            //return this.triggerState ? (this._pushState({}, this.triggerState.title, this.triggerState.url), void this._display("hide")) : void(location.href = this.currentPost.site.url)
            return void this._display("hide")
        },
        _init: function (e) {
            this._display("show"), this.imageIndex = this._findImageIndex(this.currentPost, parseInt(e.img_id, 10) || 0), this.swiper.reset({
                posts: e.posts,
                index: e.index,
                imageIndex: this.imageIndex
            }), this._setHistoryState(), this._setIndicator()
        },
        _display: function (e) {
            "show" == e ? (this.$el.show(), $("body").css({overflow: "hidden"}), this.showing = !0, $(document).on("keyup", this.onKeyUp), this.trigger("show")) : ($("body").css({overflow: "auto"}), this.$el.hide(), this.showing = !1, $(document).off("keyup", this.onKeyUp), this.trigger("close"))
        },
        _enabled: function () {
            var e = 1024;
            return window.screen.availWidth > e && $(window).width() > e
        },
        _bindEvent: function () {
            var e = this;
            $(window).on("resize", function () {
                e.$el.css({width: window.innerWidth, height: window.innerHeight})
            }).on("popstate", function (t) {
                var i = (t.originalEvent || t).state || {};
                return void 0 !== i.postIndex && void 0 !== i.imageIndex && e._enabled() ? (e.showing || (e._display("show"), e.currentPost.startTime = Date.now()), e.byHistory = !0, void e.swiper.forward(i.postIndex, i.imageIndex)) : void e._display("hide")
            }), this.$main.mousewheel(function (t) {
                e.swiper[t > 0 ? "next" : "prev"]()
            }).fullscreen(function () {
                var e = $.isFullscreen();
                $(this).css("right", e ? 0 : 0)[e ? "addClass" : "removeClass"]("fullscreen-main"), e ? $(".theater-fullscreen").addClass("icon-exit-fullscreen").removeClass("icon-fullscreen") : $(".theater-fullscreen").addClass("icon-fullscreen").removeClass("icon-exit-fullscreen")
            }).on("contextmenu", function (e) {
                window.visitor.isAdmin || e.preventDefault()
            }), this.on("data", function (t) {
                e.swiper.trigger("data", t)
            }), this.listenTo(this.swiper, "end", function (t) {
                e.trigger("end", t)
            }), this.listenTo(this.swiper, "slide", function (t) {
                if (e.byHistory = !1, t.index == e.curIndex) {
                    if (t.imageIndex == e.imageIndex)return;
                    e.imageIndex = t.imageIndex, e._setIndicator(), e._setHistoryState()
                }; e.curIndex = t.index, e.imageIndex = t.imageIndex, e.currentPost = t.current, e._setIndicator(),e._setHistoryState()
            })
        },
        _findImageIndex: function (e, t) {
            for (var i = 0, n = 0, o = e.images.length; o > n; n++)if (e.images[n].img_id == t) {
                i = n;
                break
            }
            return i
        },
        _getPostUrl: function (e, t) {
            var i;
            return i = this.domain, e.image_count > 1 && t > 0 && (i += "#image" + e.images[t || 0].img_id), i
        },
        _setIndicator: function () {
            var e = this.currentPost, t = e.images.length, i = this.imageIndex + 1;
            this.$el.find(".theater-indicator").text(i + "/" + t)
        },
        _setHistoryState: function () {
            var e = this.currentPost, t = this._getPostUrl(e, this.imageIndex), i = ["图虫网", "最好的摄影师都在这"];
            e.title && i.unshift(e.title), this._pushState({
                postIndex: this.curIndex,
                imageIndex: this.imageIndex
            }, i.join(" - "), t)
        },
        _pushState: function (e, t, i) {
            return this.byHistory ? !1 : void(history.pushState ? (history.pushState(e, t, i), document.title = t) : (this.states || (this.states = []), this.states.push(states)))
        },
        _fullscreen: function () {
            $.isFullscreen() ? $.exitFullscreen() : this.$main.requestFullScreen()
        }
    });
    return o
});