var __reflect = this && this.__reflect || function(e, t, r) {
    e.__class__ = t, r ? r.push(t) : r = [ t ], e.__types__ = e.__types__ ? r.concat(e.__types__) : r;
}, __extends = this && this.__extends || function(e, t) {
    function r() {
        this.constructor = e;
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    r.prototype = t.prototype, e.prototype = new r();
}, __awaiter = this && this.__awaiter || function(e, t, r, n) {
    return new (r || (r = Promise))(function(o, i) {
        function s(e) {
            try {
                l(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            try {
                l(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function l(e) {
            e.done ? o(e.value) : new r(function(t) {
                t(e.value);
            }).then(s, a);
        }
        l((n = n.apply(e, t || [])).next());
    });
}, __generator = this && this.__generator || function(e, t) {
    function r(e) {
        return function(t) {
            return n([ e, t ]);
        };
    }
    function n(r) {
        if (o) throw new TypeError("Generator is already executing.");
        for (;l; ) try {
            if (o = 1, i && (s = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(s = s.call(i, r[1])).done) return s;
            switch (i = 0, s && (r = [ 0, s.value ]), r[0]) {
              case 0:
              case 1:
                s = r;
                break;

              case 4:
                return l.label++, {
                    value: r[1],
                    done: !1
                };

              case 5:
                l.label++, i = r[1], r = [ 0 ];
                continue;

              case 7:
                r = l.ops.pop(), l.trys.pop();
                continue;

              default:
                if (s = l.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    l = 0;
                    continue;
                }
                if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                    l.label = r[1];
                    break;
                }
                if (6 === r[0] && l.label < s[1]) {
                    l.label = s[1], s = r;
                    break;
                }
                if (s && l.label < s[2]) {
                    l.label = s[2], l.ops.push(r);
                    break;
                }
                s[2] && l.ops.pop(), l.trys.pop();
                continue;
            }
            r = t.call(e, l);
        } catch (e) {
            r = [ 6, e ], i = 0;
        } finally {
            o = s = 0;
        }
        if (5 & r[0]) throw r[1];
        return {
            value: r[0] ? r[1] : void 0,
            done: !0
        };
    }
    var o, i, s, a, l = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: r(0),
        throw: r(1),
        return: r(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
}, AssetAdapter = function() {
    function e() {}
    return e.prototype.getAsset = function(e, t, r) {
        function n(n) {
            t.call(r, n, e);
        }
        if (RES.hasRes(e)) {
            var o = RES.getRes(e);
            o ? n(o) : RES.getResAsync(e, n, this);
        } else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE);
    }, e;
}();

__reflect(AssetAdapter.prototype, "AssetAdapter", [ "eui.IAssetAdapter" ]);

var LoadingUI = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return __extends(t, e), t.prototype.onProgress = function(e, t) {
        var r = Math.ceil(e / t * 100), n = document.getElementById("loading"), o = document.getElementById("music_wrp");
        100 == r && (n.style.display = "none", o.style.display = "block");
    }, t;
}(egret.Sprite);

__reflect(LoadingUI.prototype, "LoadingUI", [ "RES.PromiseTaskReporter" ]);

var Main = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.loadingView = new LoadingUI(), t.factory = new dragonBones.EgretFactory(), 
        t.scrollEvt = !0, t.timeScale = 3, t.frameFactor = 6, t.totalFrames = 1200, t.totalPrgress = t.totalFrames * t.frameFactor * t.timeScale, 
        t.endPageResLoaded = !1, t;
    }
    return __extends(t, e), t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this), RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onRESConfigComplete, this), 
        egret.lifecycle.addLifecycleListener(function(e) {}), egret.lifecycle.onPause = function() {
            egret.ticker.pause();
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume();
        };
        var t = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter()), 
        this.runGame().catch(function(e) {
            console.log(e);
        });
    }, t.prototype.onRESConfigComplete = function(e) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onRESConfigComplete, this), 
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), 
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), 
        RES.loadGroup("preload");
    }, t.prototype.onResourceLoadComplete = function(e) {
        if ("preload" == e.groupName) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), 
            this.stage.removeChild(this.loadingView), this.factory.parseDragonBonesData(RES.getRes("new_ytkc_ske_dbbin"));
            for (var t = 0; 12 >= t; t++) this.factory.parseTextureAtlasData(RES.getRes("new_ytkc_tex_" + t + "_json"), RES.getRes("new_ytkc_tex_" + t + "_png"));
            this.armature = this.factory.buildArmature("main"), this.armatureClip = this.armature.getDisplay(), 
            this.startPage(), console.info("loaded");
        }
    }, t.prototype.onResourceProgress = function(e) {
        "preload" == e.groupName && (document.getElementById("load-prg-num").style.width = e.itemsLoaded / e.itemsTotal * 100 + "%");
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4, this.loadResource() ];

                  case 1:
                    return e.sent(), [ 2 ];
                }
            });
        });
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    return t.trys.push([ 0, 3, , 4 ]), this.stage.addChild(this.loadingView), [ 4, RES.loadConfig("resource/default.res.json", "resource/") ];

                  case 1:
                    return t.sent(), [ 4, this.loadTheme() ];

                  case 2:
                    return t.sent(), [ 3, 4 ];

                  case 3:
                    return e = t.sent(), console.error(e), [ 3, 4 ];

                  case 4:
                    return [ 2 ];
                }
            });
        });
    }, t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, r) {
            new eui.Theme("resource/default.thm.json", e.stage).addEventListener(eui.UIEvent.COMPLETE, function() {
                t();
            }, e);
        });
    }, t.prototype.createBitmapByName = function(e) {
        var t = new egret.Bitmap(), r = RES.getRes(e);
        return t.texture = r, t;
    }, t.prototype.startPage = function() {
        var e = this;
        this.sound_plane = RES.getRes("sound_plane_mp3"), this.sound_wood = RES.getRes("sound_wood_mp3"), 
        this.sound_car = RES.getRes("sound_car_mp3"), this.sound_fall = RES.getRes("sound_falls_mp3"), 
        this.sound_photo = RES.getRes("sound_photo_mp3"), this.sound_sea = RES.getRes("sound_sea_mp3"), 
        this.sound_wind = RES.getRes("sound_wind_mp3");
        var t = RES.getRes("start_page_ske_json"), r = RES.getRes("start_page_tex_json"), n = RES.getRes("start_page_tex_png");
        this.factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(t)), 
        this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(n, r)), this.startArmature = this.factory.buildArmature("start_page"), 
        this.startArmatureClip = this.startArmature.getDisplay();
        var o = new egret.Shape();
        o.graphics.beginFill(16711680), o.graphics.drawRect(0, 0, 227, 88), o.graphics.endFill(), 
        o.x = 280, o.y = 914, o.alpha = 0, o.touchEnabled = !0, o.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            console.info("going to create scene"), e.startArmatureClip.visible = !1, e.createGameScene(), 
            o.touchEnabled = !1;
        }, this), dragonBones.WorldClock.clock.add(this.startArmature), egret.Ticker.getInstance().register(function(e) {
            dragonBones.WorldClock.clock.advanceTime(.02);
        }, this), this.startArmature.animation.gotoAndPlay("start_page", 0), this.addChild(this.startArmatureClip), 
        this.addChild(o);
    }, t.prototype.createGameScene = function() {
        this.armatureClip.x = 0, this.armatureClip.y = 0, this.armatureClip.scaleX = 1, 
        this.armatureClip.scaleY = 1, this.container = new eui.Group(), this.container.addChild(this.armatureClip), 
        this.addChild(this.container);
        var e = new eui.Group();
        this.scrollBar = e, this.scrollBar.width = this.stage.stageWidth, this.scrollBar.height = this.totalPrgress + this.stage.stageHeight;
        var t = new eui.Group();
        t.elementsContent = [ e ], this.scrollBarBox = t;
        var r = new eui.Scroller();
        r.bounces = !1, r.width = this.stage.stageWidth, r.viewport = this.scrollBarBox, 
        r.scrollPolicyH = "off", r.scrollPolicyV = "on", r.percentHeight = 100, r.throwSpeed = .5, 
        this.scroller = r, this.scroller.validateNow(), this.addChild(this.scroller), this.scroller.addEventListener(eui.UIEvent.CHANGE, this.scrollerChange, this), 
        dragonBones.WorldClock.clock.add(this.armature), egret.startTick(this.onTicker, this);
    }, t.prototype.animation_event = function(e) {
        console.info(e);
    }, t.prototype.onTicker = function(e) {
        this._time || (this._time = e);
        var t = e, r = t - this._time;
        return this._time = t, dragonBones.WorldClock.clock.advanceTime(r / 1e3), !1;
    }, t.prototype.setProgress = function(e) {
        this.armature && this.armature.animation.gotoAndStopByProgress("main", e), 1 == e && this.scrollEvt && (this.scrollEvt = !1, 
        this.endPage()), e > 0 && !this.endPageResLoaded && (this.endPageResLoaded = !0, 
        RES.loadGroup("endPageRes"));
        var t = Math.ceil(100 * e);
        if (t >= 3 && 8 >= t && !this.sound_plane.isPlay) {
            this.sound_plane.isPlay = !0;
            var r = this.sound_plane.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_plane.isPlay = !1;
            }, this);
        } else if (t > 23 && 24 >= t && !this.sound_photo.isPlay) {
            this.sound_photo.isPlay = !0;
            var r = this.sound_photo.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_photo.isPlay = !1;
            }, this);
        } else if (t >= 31 && 42 >= t && !this.sound_fall.isPlay) {
            this.sound_fall.isPlay = !0;
            var r = this.sound_fall.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_fall.isPlay = !1;
            }, this);
        } else if (t >= 44 && 55 >= t && !this.sound_sea.isPlay) {
            this.sound_sea.isPlay = !0;
            var r = this.sound_sea.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_sea.isPlay = !1;
            }, this);
        } else if (t >= 65 && 70 >= t && !this.sound_fall.isPlay) {
            this.sound_fall.isPlay = !0;
            var r = this.sound_fall.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_fall.isPlay = !1;
            }, this);
        } else if (t >= 76 && 85 >= t && !this.sound_wood.isPlay) {
            this.sound_wood.isPlay = !0;
            var r = this.sound_wood.play(0, 1);
            r.addEventListener(egret.Event.SOUND_COMPLETE, function() {
                this.sound_wood.isPlay = !1;
            }, this);
        }
    }, t.prototype.scrollerChange = function(e) {
        var t = this.scroller.viewport.scrollV, r = t / this.totalPrgress;
        this.setProgress(r);
    }, t.prototype.onTouch = function(e) {
        switch (e.stopPropagation(), e.type) {
          case egret.TouchEvent.TOUCH_BEGIN:
          case egret.TouchEvent.TOUCH_MOVE:
            break;

          case egret.TouchEvent.TOUCH_END:
        }
    }, t.prototype.endPage = function() {
        var e = this, t = RES.getRes("end_page_ske_json"), r = RES.getRes("end_page_tex_json"), n = RES.getRes("end_page_tex_png");
        this.factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(t)), 
        this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(n, r)), this.endArmature = this.factory.buildArmature("Armature"), 
        this.endArmatureClip = this.endArmature.getDisplay(), this.endArmatureClip.x = 0, 
        this.endArmatureClip.y = 0;
        var o = this.endArmature.getBones("nail");
        o[5].visible = !1, o[7].visible = !1, dragonBones.WorldClock.clock.add(this.endArmature), 
        egret.Ticker.getInstance().register(function(e) {
            dragonBones.WorldClock.clock.advanceTime(.02);
        }, this), this.endArmature.animation.play("fadeIn", 1), this.endArmature.animation.fadeIn("shake", 1, 0, 0, "endpage_animate"), 
        this.addChild(this.endArmatureClip);
        var i = new egret.Shape();
        i.graphics.beginFill(16711680), i.graphics.drawRect(0, 0, 250, 60), i.graphics.endFill(), 
        i.x = 145, i.y = 833, i.alpha = 0, i.touchEnabled = !0, this.addChild(i), i.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            e.scrollEvt = !0, e.removeChild(e.endArmatureClip), e.scroller.viewport.scrollV = 0, 
            e.setProgress(0);
        }, this);
        var s = new egret.Shape();
        s.graphics.beginFill(16711680), s.graphics.drawRect(0, 0, 250, 60), s.graphics.endFill(), 
        s.x = 145, s.y = 906, s.touchEnabled = !0, s.alpha = 0, this.addChild(s), s.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            document.getElementById("draw_wrp").style.display = "block", platform.gotoDraw();
        }, this);
        var a = new egret.Shape();
        a.graphics.beginFill(16711680), a.graphics.drawRect(0, 0, 250, 60), a.graphics.endFill(), 
        a.x = 175, a.y = 975, a.alpha = 0, a.touchEnabled = !0, this.addChild(a), a.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            o[7].visible = !1, o[5].visible = !0, o[8].visible = !1, document.getElementById("share").style.display = "block";
        }, this);
        var l = new egret.Shape();
        l.graphics.beginFill(16711680), l.graphics.drawRect(0, 0, 250, 60), l.graphics.endFill(), 
        l.x = 145, l.y = 1033, l.alpha = 0, l.touchEnabled = !0, this.addChild(l), l.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            o[7].visible = !0, o[5].visible = !1, o[8].visible = !1, window.location.href = "http://m.yutong.com/zhuanti/jqzyc/";
        }, this);
    }, t;
}(eui.UILayer);

__reflect(Main.prototype, "Main");

var DebugPlatform = function() {
    function e() {}
    return e.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [ 2, {
                    nickName: "username"
                } ];
            });
        });
    }, e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [ 2 ];
            });
        });
    }, e.prototype.showShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return document.title = "share me", egret.MainContext.instance.stage.getChildByName(""), 
                $("body").append("<h1>HUHA</h1>"), [ 2 ];
            });
        });
    }, e.prototype.gotoDraw = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return window.gotoDraw && window.gotoDraw(), [ 2 ];
            });
        });
    }, e.prototype.gotoFirstPage = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return document.title = "goto firstpage", [ 2 ];
            });
        });
    }, e;
}();

__reflect(DebugPlatform.prototype, "DebugPlatform", [ "Platform" ]), window.platform || (window.platform = new DebugPlatform());

var ThemeAdapter = function() {
    function e() {}
    return e.prototype.getTheme = function(e, t, r, n) {
        function o(e) {
            t.call(n, e);
        }
        function i(t) {
            t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i, null), 
            r.call(n));
        }
        var s = this;
        "undefined" != typeof generateEUI ? egret.callLater(function() {
            t.call(n, generateEUI);
        }, this) : "undefined" != typeof generateEUI2 ? RES.getResByUrl("resource/gameEui.json", function(e, r) {
            window.JSONParseClass.setData(e), egret.callLater(function() {
                t.call(n, generateEUI2);
            }, s);
        }, this, RES.ResourceItem.TYPE_JSON) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i, null), 
        RES.getResByUrl(e, o, this, RES.ResourceItem.TYPE_TEXT));
    }, e;
}();

__reflect(ThemeAdapter.prototype, "ThemeAdapter", [ "eui.IThemeAdapter" ]);