!function e(t, r, n) {
    function i(a, s) {
        if (!r[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u)return u(a, !0);
                if (o)return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = r[a] = {exports: {}};
            t[a][0].call(l.exports, function (e) {
                var r = t[a][1][e];
                return i(r ? r : e)
            }, l, l.exports, e, t, r, n)
        }
        return r[a].exports
    }

    for (var o = "function" == typeof require && require, a = 0; a < n.length; a++)i(n[a]);
    return i
}({
    1: [function (e, t, r) {
        t.exports = function (e) {
            e.CSS3DObject = function (t) {
                e.Object3D.call(this), this.element = t, this.element.style.position = "absolute", this.addEventListener("removed", function (e) {
                    null !== this.element.parentNode && this.element.parentNode.removeChild(this.element)
                })
            }, e.CSS3DObject.prototype = Object.create(e.Object3D.prototype), e.CSS3DObject.prototype.constructor = e.CSS3DObject, e.CSS3DSprite = function (t) {
                e.CSS3DObject.call(this, t)
            }, e.CSS3DSprite.prototype = Object.create(e.CSS3DObject.prototype), e.CSS3DSprite.prototype.constructor = e.CSS3DSprite, e.CSS3DRenderer = function () {
                console.log("THREE.CSS3DRenderer", e.REVISION);
                var t, r, n, i, o = new e.Matrix4, a = {
                    camera: {fov: 0, style: ""},
                    objects: {}
                }, s = document.createElement("div");
                s.style.overflow = "hidden", s.style.WebkitTransformStyle = "preserve-3d", s.style.MozTransformStyle = "preserve-3d", s.style.oTransformStyle = "preserve-3d", s.style.transformStyle = "preserve-3d", this.domElement = s;
                var u = document.createElement("div");
                u.style.WebkitTransformStyle = "preserve-3d", u.style.MozTransformStyle = "preserve-3d", u.style.oTransformStyle = "preserve-3d", u.style.transformStyle = "preserve-3d", s.appendChild(u), this.setClearColor = function () {
                }, this.getSize = function () {
                    return {width: t, height: r}
                }, this.setSize = function (e, o) {
                    t = e, r = o, n = t / 2, i = r / 2, s.style.width = e + "px", s.style.height = o + "px", u.style.width = e + "px", u.style.height = o + "px"
                };
                var c = function (e) {
                    return Math.abs(e) < 1e-6 ? 0 : e
                }, l = function (e) {
                    var t = e.elements;
                    return "matrix3d(" + c(t[0]) + "," + c(-t[1]) + "," + c(t[2]) + "," + c(t[3]) + "," + c(t[4]) + "," + c(-t[5]) + "," + c(t[6]) + "," + c(t[7]) + "," + c(t[8]) + "," + c(-t[9]) + "," + c(t[10]) + "," + c(t[11]) + "," + c(t[12]) + "," + c(-t[13]) + "," + c(t[14]) + "," + c(t[15]) + ")"
                }, h = function (e) {
                    var t = e.elements;
                    return "translate3d(-50%,-50%,0) matrix3d(" + c(t[0]) + "," + c(t[1]) + "," + c(t[2]) + "," + c(t[3]) + "," + c(-t[4]) + "," + c(-t[5]) + "," + c(-t[6]) + "," + c(-t[7]) + "," + c(t[8]) + "," + c(t[9]) + "," + c(t[10]) + "," + c(t[11]) + "," + c(t[12]) + "," + c(t[13]) + "," + c(t[14]) + "," + c(t[15]) + ")"
                }, p = function (t, r) {
                    if (t instanceof e.CSS3DObject) {
                        var n;
                        t instanceof e.CSS3DSprite ? (o.copy(r.matrixWorldInverse), o.transpose(), o.copyPosition(t.matrixWorld), o.scale(t.scale), o.elements[3] = 0, o.elements[7] = 0, o.elements[11] = 0, o.elements[15] = 1, n = h(o)) : n = h(t.matrixWorld);
                        var i = t.element, s = a.objects[t.id];
                        (void 0 === s || s !== n) && (i.style.WebkitTransform = n, i.style.MozTransform = n, i.style.oTransform = n, i.style.transform = n, a.objects[t.id] = n), i.parentNode !== u && u.appendChild(i)
                    }
                    for (var c = 0, l = t.children.length; l > c; c++)p(t.children[c], r)
                };
                this.render = function (t, o) {
                    var c = .5 / Math.tan(e.Math.degToRad(.5 * o.fov)) * r;
                    a.camera.fov !== c && (s.style.WebkitPerspective = c + "px", s.style.MozPerspective = c + "px", s.style.oPerspective = c + "px", s.style.perspective = c + "px", a.camera.fov = c), t.updateMatrixWorld(), null === o.parent && o.updateMatrixWorld(), o.matrixWorldInverse.getInverse(o.matrixWorld);
                    var h = "translate3d(0,0," + c + "px)" + l(o.matrixWorldInverse) + " translate3d(" + n + "px," + i + "px, 0)";
                    a.camera.style !== h && (u.style.WebkitTransform = h, u.style.MozTransform = h, u.style.oTransform = h, u.style.transform = h, a.camera.style = h), p(t, o)
                }
            }
        }
    }, {}], 2: [function (e, t, r) {
        "use strict";
        window.$ = window.jQuery = e("jquery"), e("jquery-mousewheel")($);
        var o = e("./scene");
        window.onload = function () {
            function e() {
                if ("hidden" in document)return null;
                for (var e = ["moz", "ms", "o", "webkit"], t = 0; t < e.length; t++) {
                    var r = e[t] + "Hidden";
                    if (r in document)return e[t]
                }
                return null
            }

            function t(e) {
                !g && d != e && e >= 0 && p > e && (g = !0, f = d, d = e,o.setSection(d, function () {g = !1}))
            }

            var h = $("#sections-container section"), p = h.length, d = 0, f = 0, m = !1, g = !1,runing=0;
            var S = e();
            o.init($("#webgl-container"), $("#css3d-container"), function () {
                     $("#webgl-container").addClass("is-visible"),t(2);
            });
            $(document).on("mousewheel", function (e,delta) {
                var $this = $(this),
                    timeoutId = $this.data('timeoutId');
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    runing=0;
                }
                $this.data('timeoutId', setTimeout(function() {
                    $this.removeData('timeoutId');
                    $this = null;
                    runing=1;
                }, 200));
                if(runing){
                    console.log(delta)
                }
            })
        }
    }, {
        "./scene": 5,
        "./utils": 7,
        howler: 9,
        jquery: 11,
        "jquery-mousewheel": 10
    }], 3: [function (e, t, r) {
        "use strict";
        var n = e("three");
        t.exports = function () {
            this.obj = new n.Object3D;
            var e = !1;
            this.blastTween = 0;
            var t = 0, r = .05, i = 4, o = {x: -1.3, y: .1, z: 0};
            this.init = function (a) {
                var s = this, u = new n.TextureLoader(a);
                u.load("./assets/images/face.jpg", function (a) {})
            }
        }
    }, {three: 14}], 4: [function (e, t, r) {
        "use strict";
        var n = e("three");
        t.exports = function () {
            this.obj = new n.Object3D, this.blastTween = 0;
            var e = new n.Color(1, .7, .37), t = new n.Color(.49, .6, 1);
            this.starSize = 1, this.arms = {
                count: 4,
                stars: 1400,
                scale: .45,
                twist: .3,
                density: .25,
                spread: .3
            }, this.clouds = [{stars: 1500, radius: 4.5, height: .5, color: t}, {
                stars: 500,
                radius: 1,
                height: .4,
                color: e
            }, {
                stars: 3e3,
                radius: 3,
                height: .05,
                color: t
            }], this.glowMaterial = new n.SpriteMaterial({
                map: n.ImageUtils.loadTexture("assets/images/flare.png"),
                blending: n.AdditiveBlending,
                transparent: !0,
                opacity: 1
            }), this.starsMaterial = new n.PointsMaterial({
                size: this.starSize / 10,
                map: n.ImageUtils.loadTexture("assets/images/star.png"),
                blending: n.AdditiveBlending,
                vertexColors: !0,
                transparent: !0,
                depthTest: !1
            }), this.hazeMaterial = new n.PointsMaterial({
                size: .5,
                map: n.ImageUtils.loadTexture("assets/images/haze.png"),
                blending: n.AdditiveBlending,
                opacity: .04,
                vertexColors: !0,
                transparent: !0,
                depthTest: !1
            }), this.largeStarMaterial = new n.PointsMaterial({
                size: this.starSize / 4,
                map: n.ImageUtils.loadTexture("assets/images/star.png"),
                blending: n.AdditiveBlending,
                vertexColors: !0,
                transparent: !0,
                depthTest: !1
            }), this.draw = function () {
                return this.obj.remove(this.stars), this.obj.remove(this.haze), this.obj.remove(this.largeStars), this.obj.remove(this.glow), this.buildGeometry(), this.obj.add(this.stars), this.obj.add(this.haze), this.obj.add(this.largeStars), this.glow = new n.Sprite(this.glowMaterial), this.glow.scale.set(4, 4, 4), this.obj.add(this.glow), this.obj
            }, this.buildGeometry = function () {
                this.starsGeometry = new n.Geometry, this.starsMaterial.size = this.starSize / 10, this.buildPointSpiralGeometry(this.starsGeometry, this.arms.count, this.arms.stars, this.arms.scale, this.arms.twist, this.arms.density, this.arms.spread, this.getStarColor);
                for (var e = 0; e < this.clouds.length; e++)this.buildPointSphereGeometry(this.starsGeometry, this.clouds[e].stars, this.clouds[e].radius, this.clouds[e].height, this.clouds[e].color);
                this.hazeGeometry = new n.Geometry, this.buildPointSpiralGeometry(this.hazeGeometry, this.arms.count, this.arms.stars / 2, this.arms.scale, this.arms.twist, 2 * this.arms.density, this.arms.spread, this.getStarColor), this.buildPointSphereGeometry(this.hazeGeometry, 1600, this.clouds[2].radius, this.clouds[2].height, this.clouds[2].color), this.largeStarMaterial.size = this.starSize / 4, this.largeStarGeometry = new n.Geometry, this.buildPointSphereGeometry(this.largeStarGeometry, 100, this.clouds[2].radius, this.clouds[2].height, new n.Color(.9, .7, .8)), this.stars = new n.Points(this.starsGeometry, this.starsMaterial), this.haze = new n.Points(this.hazeGeometry, this.hazeMaterial), this.largeStars = new n.Points(this.largeStarGeometry, this.largeStarMaterial)
            }, this.buildPointSpiralGeometry = function (e, t, r, i, o, a, s, u) {
                for (var c = 0; r > c; c++)for (var l = n.Math.degToRad(c * a), h = 0; t > h; h++) {
                    var p = new n.Vector3;
                    p.x = i * Math.cos(l) * Math.pow(Math.E, o * l) + n.Math.randFloatSpread(s), p.y = n.Math.randFloatSpread(.7 * s), p.z = i * Math.sin(l) * Math.pow(Math.E, o * l) + n.Math.randFloatSpread(s);
                    var d = n.Math.degToRad(360 * c / t);
                    p.applyAxisAngle(new n.Vector3(0, 1, 0), d), e.vertices.push(p), e.colors.push(u(p))
                }
            }, this.buildPointSphereGeometry = function (e, t, r, i, o) {
                for (var a = 0; t > a; a++) {
                    var s = new n.Vector3, u = Math.random() * r, c = 360 * Math.random() - 180, l = 360 * Math.random() - 180;
                    s.x = u * Math.sin(c) * Math.cos(l), s.y = u * Math.cos(c) * i, s.z = u * Math.sin(c) * Math.sin(l), e.vertices.push(s), e.colors.push(o)
                }
            }, this.getStarColor = function (r) {
                var i = Math.sqrt(r.x * r.x + r.y * r.y + r.z * r.z), o = .3 / i;
                o > 1 && (o = 1);
                var a = new n.Color(e.r * o + t.r * (1 - o), e.g * o + t.g * (1 - o), e.b * o + t.b * (1 - o));
                return a
            }, this.updateBlast = function () {
                var e = this.blastTween, t = .5 > 1.5 * e ? 1.5 * e : .5 + e / 2, r = 1 > 3 * e ? 3 * e : 1;
                this.glow.scale.set(4 * r, 4 * r, 4 * r), this.largeStars.scale.set(t, t, t), this.haze.scale.set(e, e, e), this.stars.scale.set(e, e, e)
            }
        }
    }, {three: 14}], 5: [function (e, t, r) {
        "use strict";
        var n = e("jquery"), i = e("tween.js"), o = e("three"), a = e("three-orbit-controls")(o), s = e("./stars"), u = e("./galaxy"), c = e("./worlds"), l = e("./face");
       t.exports = new function () {
            this.init = function (e, t, r) {
                function h() {
                    if (m = e.width(), g = e.height(), T.aspect = m / g, T.updateProjectionMatrix(), S.setSize(m * w, g * w),v >= m && !y) {
                        y = !0;
                        B.positionOffset;
                        B.isMobileLayout = !0, B.setLayout()
                    } else m > v && y && (y = !1, B.isMobileLayout = !1, B.setLayout())
                }

                function p(e) {
                    b.x = e.clientX / window.innerWidth * 2 - 1, b.y = 2 * -(e.clientY / window.innerHeight) + 1
                }

                function d() {
                    E = {
                        starsPosition: new i.Tween(V.obj.position).easing(i.Easing.Quadratic.InOut),
                        galaxyBlast: new i.Tween(F),
                        galaxyPosition: new i.Tween(F.obj.position).easing(i.Easing.Quadratic.InOut)
                    }, F.draw(), F.obj.visible = !1, F.obj.rotation.x = .4, M.add(F.obj), V.size.height = 6 * P, M.add(V.draw()), B.obj.position.y = -P, M.add(B.obj), N.obj.visible = !1, N.obj.scale.set(.01, .01, .01), M.add(N.draw());

                    e.append(S.domElement),f(), h(), r && r()
                }

                function f() {
                    if (requestAnimationFrame(f), T.position.x += .05 * (.6 * b.x - T.position.x), T.position.y += .05 * (.6 * b.y - T.position.y), 2 == k) {
                        x.setFromCamera(b, T);
                    }
                    V.obj.rotation.y += 5e-4, F.obj.rotation.y += .001, 3 == k && N.rotate(.001), i.update(), _.update(), S.render(M, T)
                }

                var e = e, t = t, m = e.width(), g = e.height(), v = 800, y = !1, x = new o.Raycaster, b = new o.Vector2;
                b.set(.5, 0);
                var w = window.devicePixelRatio || 1, S = new o.WebGLRenderer({preserveDrawingBuffer: !0});
                S.setClearColor(1381398, 1), S.setSize(m * w, g * w);
                var M = new o.Scene, T = new o.PerspectiveCamera(50, m / g, .1, 1e3);
                T.position.z = 5;
                var _ = new a(T);
                _.enabled = !1;
                var E = [];
                var A = new o.Scene, L = new o.LoadingManager;
                L.onLoad = function () {
                    d(2)
                };
                var P = 4.5, k = 0, D = 0, R = 1800, O = 0, F = new u, V = new s, N = new c, B = new l;
                B.init(L), n(window).on("resize", h), n(document).on("mousemove", p), this.setSection = function (e, t) {
                    if (D = k, k = e, k > D)switch (k) {
                        case 1:
                            E.starsPosition.to({y: P}, R).start();
                            break;
                        case 2:
                            E.galaxyBlast.to({blastTween: 1}, R).delay(R / 4).easing(i.Easing.Quartic.Out).onStart(function () {
                                F.obj.visible = !0
                            }).onUpdate(function () {
                                this.updateBlast()
                            }).onComplete(t).start();
                            break;
                    }
                }
            }
        }
    }, {
        "./face": 3,
        "./galaxy": 4,
        "./stars": 6,
        "./worlds": 8,
        jquery: 11,
        three: 14,
        "three-orbit-controls": 13,
        "tween.js": 15
    }], 6: [function (e, t, r) {
        "use strict";
        var n = e("three");
        t.exports = function () {
            this.obj = new n.Object3D;
            var e = new n.Color(1, 1, 1);
            this.starCount = 2e3, this.size = {height: 15, radius: 3.5};
            var t = new n.PointsMaterial({
                size: .04,
                map: n.ImageUtils.loadTexture("assets/images/orb.png"),
                blending: n.AdditiveBlending,
                vertexColors: !0,
                transparent: !0,
                depthTest: !1,
                opacity: .6
            });
            this.draw = function () {
                for (var r = new n.Geometry, i = 0; i < this.starCount; i++) {
                    var o = new n.Vector3;
                    o.y = n.Math.randFloatSpread(this.size.height);
                    for (var a = this.size.radius; a >= this.size.radius;)o.x = n.Math.randFloatSpread(2 * this.size.radius), o.z = n.Math.randFloatSpread(2 * this.size.radius), a = Math.sqrt(o.x * o.x + o.z * o.z);
                    r.vertices.push(o), r.colors.push(e)
                }
                var s = new n.Points(r, t);
                return this.obj.add(s), this.obj
            }
        }
    }, {three: 14}], 7: [function (e, t, r) {
        "use strict";
        t.exports = new function () {
            this.debounce = function (e, t, r) {
                var n, i, o, a, s, u = Date.now || function () {
                        return (new Date).getTime()
                    }, c = function () {
                    var l = u() - a;
                    t > l && l >= 0 ? n = setTimeout(c, t - l) : (n = null, r || (s = e.apply(o, i), n || (o = i = null)))
                };
                return function () {
                    o = this, i = arguments, a = u();
                    var l = r && !n;
                    return n || (n = setTimeout(c, t)), l && (s = e.apply(o, i), o = i = null), s
                }
            }, this.delay = function (e, t) {
                var r = Array.prototype.slice.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, r)
                }, t)
            }
        }
    }, {}], 8: [function (e, t, r) {
        "use strict";
        var n = e("three");
        t.exports = function () {
            this.obj = new n.Object3D, this.worldCount = 9, this.worlds = [], this.blastTween = 0;
            var e = .1;
            this.worldOptions = {
                start: [new n.Vector3(.2, 0, e), new n.Vector3(1.3, .2, e), new n.Vector3(-1.2, -.6, e), new n.Vector3(-2, 1, e), new n.Vector3(2.2, -.4, e), new n.Vector3(-.7, .4, e), new n.Vector3(1, 1, e), new n.Vector3(1, -1.1, e), new n.Vector3(-.8, 1.5, e), new n.Vector3(1, 1, e)],
                end: [new n.Vector3(.2, e, 2.5), new n.Vector3(2.2, e, -.4), new n.Vector3(1, e, 1), new n.Vector3(-2, e, 1), new n.Vector3(-.4, e, -1.9), new n.Vector3(1.5, e, -2), new n.Vector3(-1.2, e, -.6), new n.Vector3(1.6, e, 1.7), new n.Vector3(-1, e, .9), new n.Vector3(0, e, 0)],
                colors: [new n.Color(15800652), new n.Color(9428735), new n.Color(9710079), new n.Color(16136512), new n.Color(15806374), new n.Color(16301824), new n.Color(4363775), new n.Color(16728597), new n.Color(15077965), new n.Color(16777215)]
            };
            for (var t = 0; t < this.worldCount; t++)this.worldOptions.end[t].applyAxisAngle(new n.Vector3(1, 0, 0), .4);
            var r = new n.SpriteMaterial({
                map: n.ImageUtils.loadTexture("assets/images/world.png"),
                blending: n.AdditiveBlending,
                transparent: !0,
                opacity: 1
            });
            this.draw = function () {
                for (var e = 0; e < this.worldCount; e++) {
                    this.worlds[e] = new n.Sprite(r.clone()), this.worlds[e].material.color = this.worldOptions.colors[e], this.worlds[e].scale.set(.5, .5, .5), this.worlds[e].position.copy(this.worldOptions.start[e]);
                    var t = new n.Sprite(r.clone());
                    t.scale.set(.5, .5, .5), this.worlds[e].add(t), this.worlds[e].name = "world" + e, this.obj.add(this.worlds[e])
                }
                return this.obj
            }, this.rotate = function (e) {
                for (var t = new n.Vector3(0, 1, 0).applyAxisAngle(new n.Vector3(1, 0, 0), .4), r = 0; r < this.worldCount; r++)this.worlds[r].position.applyAxisAngle(t, e), this.worldOptions.end[r].applyAxisAngle(t, e)
            }, this.updateBlast = function () {
                for (var e = 0; e < this.worldCount; e++)this.worlds[e].position.lerpVectors(this.worldOptions.start[e], this.worldOptions.end[e], this.blastTween)
            }
        }
    }, {three: 14}], 9: [function (e, t, r) {
        !function () {
            var e = {}, t = null, n = !0, i = !1;
            try {
                "undefined" != typeof AudioContext ? t = new AudioContext : "undefined" != typeof webkitAudioContext ? t = new webkitAudioContext : n = !1
            } catch (o) {
                n = !1
            }
            if (!n)if ("undefined" != typeof Audio)try {
                new Audio
            } catch (o) {
                i = !0
            } else i = !0;
            if (n) {
                var a = "undefined" == typeof t.createGain ? t.createGainNode() : t.createGain();
                a.gain.value = 1, a.connect(t.destination)
            }
            var s = function (e) {
                this._volume = 1, this._muted = !1, this.usingWebAudio = n, this.ctx = t, this.noAudio = i, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
            };
            s.prototype = {
                volume: function (e) {
                    var t = this;
                    if (e = parseFloat(e), e >= 0 && 1 >= e) {
                        t._volume = e, n && (a.gain.value = e);
                        for (var r in t._howls)if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)for (var i = 0; i < t._howls[r]._audioNode.length; i++)t._howls[r]._audioNode[i].volume = t._howls[r]._volume * t._volume;
                        return t
                    }
                    return n ? a.gain.value : t._volume
                }, mute: function () {
                    return this._setMuted(!0), this
                }, unmute: function () {
                    return this._setMuted(!1), this
                }, _setMuted: function (e) {
                    var t = this;
                    t._muted = e, n && (a.gain.value = e ? 0 : t._volume);
                    for (var r in t._howls)if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)for (var i = 0; i < t._howls[r]._audioNode.length; i++)t._howls[r]._audioNode[i].muted = e
                }, codecs: function (e) {
                    return this._codecs[e]
                }, _enableiOSAudio: function () {
                    var e = this;
                    if (!t || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                        e._iOSEnabled = !1;
                        var r = function () {
                            var n = t.createBuffer(1, 1, 22050), i = t.createBufferSource();
                            i.buffer = n, i.connect(t.destination), "undefined" == typeof i.start ? i.noteOn(0) : i.start(0), setTimeout(function () {
                                (i.playbackState === i.PLAYING_STATE || i.playbackState === i.FINISHED_STATE) && (e._iOSEnabled = !0, e.iOSAutoEnable = !1, window.removeEventListener("touchend", r, !1))
                            }, 0)
                        };
                        return window.addEventListener("touchend", r, !1), e
                    }
                }
            };
            var u = null, c = {};
            i || (u = new Audio, c = {
                mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
                m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            });
            var l = new s(c), h = function (e) {
                var r = this;
                r._autoplay = e.autoplay || !1, r._buffer = e.buffer || !1, r._duration = e.duration || 0, r._format = e.format || null, r._loop = e.loop || !1, r._loaded = !1, r._sprite = e.sprite || {}, r._src = e.src || "", r._pos3d = e.pos3d || [0, 0, -.5], r._volume = void 0 !== e.volume ? e.volume : 1, r._urls = e.urls || [], r._rate = e.rate || 1, r._model = e.model || null, r._onload = [e.onload || function () {
                }], r._onloaderror = [e.onloaderror || function () {
                }], r._onend = [e.onend || function () {
                }], r._onpause = [e.onpause || function () {
                }], r._onplay = [e.onplay || function () {
                }], r._onendTimer = [], r._webAudio = n && !r._buffer, r._audioNode = [], r._webAudio && r._setupAudioNode(), "undefined" != typeof t && t && l.iOSAutoEnable && l._enableiOSAudio(), l._howls.push(r), r.load()
            };
            if (h.prototype = {
                    load: function () {
                        var e = this, t = null;
                        if (i)return void e.on("loaderror");
                        for (var r = 0; r < e._urls.length; r++) {
                            var n, o;
                            if (e._format)n = e._format; else {
                                if (o = e._urls[r], n = /^data:audio\/([^;,]+);/i.exec(o), n || (n = /\.([^.]+)$/.exec(o.split("?", 1)[0])), !n)return void e.on("loaderror");
                                n = n[1].toLowerCase()
                            }
                            if (c[n]) {
                                t = e._urls[r];
                                break
                            }
                        }
                        if (!t)return void e.on("loaderror");
                        if (e._src = t, e._webAudio)p(e, t); else {
                            var a = new Audio;
                            a.addEventListener("error", function () {
                                a.error && 4 === a.error.code && (s.noAudio = !0), e.on("loaderror", {type: a.error ? a.error.code : 0})
                            }, !1), e._audioNode.push(a), a.src = t, a._pos = 0, a.preload = "auto", a.volume = l._muted ? 0 : e._volume * l.volume();
                            var u = function () {
                                e._duration = Math.ceil(10 * a.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {_default: [0, 1e3 * e._duration]}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), a.removeEventListener("canplaythrough", u, !1)
                            };
                            a.addEventListener("canplaythrough", u, !1), a.load()
                        }
                        return e
                    }, urls: function (e) {
                        var t = this;
                        return e ? (t.stop(), t._urls = "string" == typeof e ? [e] : e, t._loaded = !1, t.load(), t) : t._urls
                    }, play: function (e, r) {
                        var n = this;
                        return "function" == typeof e && (r = e), e && "function" != typeof e || (e = "_default"), n._loaded ? n._sprite[e] ? (n._inactiveNode(function (i) {
                            i._sprite = e;
                            var o = i._pos > 0 ? i._pos : n._sprite[e][0] / 1e3, a = 0;
                            n._webAudio ? (a = n._sprite[e][1] / 1e3 - i._pos, i._pos > 0 && (o = n._sprite[e][0] / 1e3 + o)) : a = n._sprite[e][1] / 1e3 - (o - n._sprite[e][0] / 1e3);
                            var s, u = !(!n._loop && !n._sprite[e][2]), c = "string" == typeof r ? r : Math.round(Date.now() * Math.random()) + "";
                            if (function () {
                                    var t = {id: c, sprite: e, loop: u};
                                    s = setTimeout(function () {
                                        !n._webAudio && u && n.stop(t.id).play(e, t.id), n._webAudio && !u && (n._nodeById(t.id).paused = !0, n._nodeById(t.id)._pos = 0, n._clearEndTimer(t.id)), n._webAudio || u || n.stop(t.id), n.on("end", c)
                                    }, 1e3 * a), n._onendTimer.push({timer: s, id: t.id})
                                }(), n._webAudio) {
                                var h = n._sprite[e][0] / 1e3, p = n._sprite[e][1] / 1e3;
                                i.id = c, i.paused = !1, m(n, [u, h, p], c), n._playStart = t.currentTime, i.gain.value = n._volume, "undefined" == typeof i.bufferSource.start ? u ? i.bufferSource.noteGrainOn(0, o, 86400) : i.bufferSource.noteGrainOn(0, o, a) : u ? i.bufferSource.start(0, o, 86400) : i.bufferSource.start(0, o, a)
                            } else {
                                if (4 !== i.readyState && (i.readyState || !navigator.isCocoonJS))return n._clearEndTimer(c), function () {
                                    var t = n, o = e, a = r, s = i, u = function () {
                                        t.play(o, a), s.removeEventListener("canplaythrough", u, !1)
                                    };
                                    s.addEventListener("canplaythrough", u, !1)
                                }(), n;
                                i.readyState = 4, i.id = c, i.currentTime = o, i.muted = l._muted || i.muted, i.volume = n._volume * l.volume(), setTimeout(function () {
                                    i.play()
                                }, 0)
                            }
                            return n.on("play"), "function" == typeof r && r(c), n
                        }), n) : ("function" == typeof r && r(), n) : (n.on("load", function () {
                            n.play(e, r)
                        }), n)
                    }, pause: function (e) {
                        var t = this;
                        if (!t._loaded)return t.on("play", function () {
                            t.pause(e)
                        }), t;
                        t._clearEndTimer(e);
                        var r = e ? t._nodeById(e) : t._activeNode();
                        if (r)if (r._pos = t.pos(null, e), t._webAudio) {
                            if (!r.bufferSource || r.paused)return t;
                            r.paused = !0, "undefined" == typeof r.bufferSource.stop ? r.bufferSource.noteOff(0) : r.bufferSource.stop(0)
                        } else r.pause();
                        return t.on("pause"), t
                    }, stop: function (e) {
                        var t = this;
                        if (!t._loaded)return t.on("play", function () {
                            t.stop(e)
                        }), t;
                        t._clearEndTimer(e);
                        var r = e ? t._nodeById(e) : t._activeNode();
                        if (r)if (r._pos = 0, t._webAudio) {
                            if (!r.bufferSource || r.paused)return t;
                            r.paused = !0, "undefined" == typeof r.bufferSource.stop ? r.bufferSource.noteOff(0) : r.bufferSource.stop(0)
                        } else isNaN(r.duration) || (r.pause(), r.currentTime = 0);
                        return t
                    }, mute: function (e) {
                        var t = this;
                        if (!t._loaded)return t.on("play", function () {
                            t.mute(e)
                        }), t;
                        var r = e ? t._nodeById(e) : t._activeNode();
                        return r && (t._webAudio ? r.gain.value = 0 : r.muted = !0), t
                    }, unmute: function (e) {
                        var t = this;
                        if (!t._loaded)return t.on("play", function () {
                            t.unmute(e)
                        }), t;
                        var r = e ? t._nodeById(e) : t._activeNode();
                        return r && (t._webAudio ? r.gain.value = t._volume : r.muted = !1), t
                    }, volume: function (e, t) {
                        var r = this;
                        if (e = parseFloat(e), e >= 0 && 1 >= e) {
                            if (r._volume = e, !r._loaded)return r.on("play", function () {
                                r.volume(e, t)
                            }), r;
                            var n = t ? r._nodeById(t) : r._activeNode();
                            return n && (r._webAudio ? n.gain.value = e : n.volume = e * l.volume()), r
                        }
                        return r._volume
                    }, loop: function (e) {
                        var t = this;
                        return "boolean" == typeof e ? (t._loop = e, t) : t._loop
                    }, sprite: function (e) {
                        var t = this;
                        return "object" == typeof e ? (t._sprite = e, t) : t._sprite
                    }, pos: function (e, r) {
                        var n = this;
                        if (!n._loaded)return n.on("load", function () {
                            n.pos(e)
                        }), "number" == typeof e ? n : n._pos || 0;
                        e = parseFloat(e);
                        var i = r ? n._nodeById(r) : n._activeNode();
                        if (i)return e >= 0 ? (n.pause(r), i._pos = e, n.play(i._sprite, r), n) : n._webAudio ? i._pos + (t.currentTime - n._playStart) : i.currentTime;
                        if (e >= 0)return n;
                        for (var o = 0; o < n._audioNode.length; o++)if (n._audioNode[o].paused && 4 === n._audioNode[o].readyState)return n._webAudio ? n._audioNode[o]._pos : n._audioNode[o].currentTime
                    }, pos3d: function (e, t, r, n) {
                        var i = this;
                        if (t = "undefined" != typeof t && t ? t : 0, r = "undefined" != typeof r && r ? r : -.5, !i._loaded)return i.on("play", function () {
                            i.pos3d(e, t, r, n)
                        }), i;
                        if (!(e >= 0 || 0 > e))return i._pos3d;
                        if (i._webAudio) {
                            var o = n ? i._nodeById(n) : i._activeNode();
                            o && (i._pos3d = [e, t, r], o.panner.setPosition(e, t, r), o.panner.panningModel = i._model || "HRTF")
                        }
                        return i
                    }, fade: function (e, t, r, n, i) {
                        var o = this, a = Math.abs(e - t), s = e > t ? "down" : "up", u = a / .01, c = r / u;
                        if (!o._loaded)return o.on("load", function () {
                            o.fade(e, t, r, n, i)
                        }), o;
                        o.volume(e, i);
                        for (var l = 1; u >= l; l++)!function () {
                            var e = o._volume + ("up" === s ? .01 : -.01) * l, r = Math.round(1e3 * e) / 1e3, a = t;
                            setTimeout(function () {
                                o.volume(r, i), r === a && n && n()
                            }, c * l)
                        }()
                    }, fadeIn: function (e, t, r) {
                        return this.volume(0).play().fade(0, e, t, r)
                    }, fadeOut: function (e, t, r, n) {
                        var i = this;
                        return i.fade(i._volume, e, t, function () {
                            r && r(), i.pause(n), i.on("end")
                        }, n)
                    }, _nodeById: function (e) {
                        for (var t = this, r = t._audioNode[0], n = 0; n < t._audioNode.length; n++)if (t._audioNode[n].id === e) {
                            r = t._audioNode[n];
                            break
                        }
                        return r
                    }, _activeNode: function () {
                        for (var e = this, t = null, r = 0; r < e._audioNode.length; r++)if (!e._audioNode[r].paused) {
                            t = e._audioNode[r];
                            break
                        }
                        return e._drainPool(), t
                    }, _inactiveNode: function (e) {
                        for (var t = this, r = null, n = 0; n < t._audioNode.length; n++)if (t._audioNode[n].paused && 4 === t._audioNode[n].readyState) {
                            e(t._audioNode[n]), r = !0;
                            break
                        }
                        if (t._drainPool(), !r) {
                            var i;
                            if (t._webAudio)i = t._setupAudioNode(), e(i); else {
                                t.load(), i = t._audioNode[t._audioNode.length - 1];
                                var o = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata", a = function () {
                                    i.removeEventListener(o, a, !1), e(i)
                                };
                                i.addEventListener(o, a, !1)
                            }
                        }
                    }, _drainPool: function () {
                        var e, t = this, r = 0;
                        for (e = 0; e < t._audioNode.length; e++)t._audioNode[e].paused && r++;
                        for (e = t._audioNode.length - 1; e >= 0 && !(5 >= r); e--)t._audioNode[e].paused && (t._webAudio && t._audioNode[e].disconnect(0), r--, t._audioNode.splice(e, 1))
                    }, _clearEndTimer: function (e) {
                        for (var t = this, r = 0, n = 0; n < t._onendTimer.length; n++)if (t._onendTimer[n].id === e) {
                            r = n;
                            break
                        }
                        var i = t._onendTimer[r];
                        i && (clearTimeout(i.timer), t._onendTimer.splice(r, 1))
                    }, _setupAudioNode: function () {
                        var e = this, r = e._audioNode, n = e._audioNode.length;
                        return r[n] = "undefined" == typeof t.createGain ? t.createGainNode() : t.createGain(), r[n].gain.value = e._volume, r[n].paused = !0, r[n]._pos = 0, r[n].readyState = 4, r[n].connect(a), r[n].panner = t.createPanner(), r[n].panner.panningModel = e._model || "equalpower", r[n].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), r[n].panner.connect(r[n]), r[n]
                    }, on: function (e, t) {
                        var r = this, n = r["_on" + e];
                        if ("function" == typeof t)n.push(t); else for (var i = 0; i < n.length; i++)t ? n[i].call(r, t) : n[i].call(r);
                        return r
                    }, off: function (e, t) {
                        var r = this, n = r["_on" + e], i = t ? t.toString() : null;
                        if (i) {
                            for (var o = 0; o < n.length; o++)if (i === n[o].toString()) {
                                n.splice(o, 1);
                                break
                            }
                        } else r["_on" + e] = [];
                        return r
                    }, unload: function () {
                        for (var t = this, r = t._audioNode, n = 0; n < t._audioNode.length; n++)r[n].paused || (t.stop(r[n].id), t.on("end", r[n].id)), t._webAudio ? r[n].disconnect(0) : r[n].src = "";
                        for (n = 0; n < t._onendTimer.length; n++)clearTimeout(t._onendTimer[n].timer);
                        var i = l._howls.indexOf(t);
                        null !== i && i >= 0 && l._howls.splice(i, 1), delete e[t._src], t = null
                    }
                }, n)var p = function (t, r) {
                if (r in e)return t._duration = e[r].duration, void f(t);
                if (/^data:[^;]+;base64,/.test(r)) {
                    for (var n = atob(r.split(",")[1]), i = new Uint8Array(n.length), o = 0; o < n.length; ++o)i[o] = n.charCodeAt(o);
                    d(i.buffer, t, r)
                } else {
                    var a = new XMLHttpRequest;
                    a.open("GET", r, !0), a.responseType = "arraybuffer", a.onload = function () {
                        d(a.response, t, r)
                    }, a.onerror = function () {
                        t._webAudio && (t._buffer = !0, t._webAudio = !1, t._audioNode = [], delete t._gainNode, delete e[r], t.load())
                    };
                    try {
                        a.send()
                    } catch (s) {
                        a.onerror()
                    }
                }
            }, d = function (r, n, i) {
                t.decodeAudioData(r, function (t) {
                    t && (e[i] = t, f(n, t))
                }, function (e) {
                    n.on("loaderror")
                })
            }, f = function (e, t) {
                e._duration = t ? t.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {_default: [0, 1e3 * e._duration]}), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
            }, m = function (r, n, i) {
                var o = r._nodeById(i);
                o.bufferSource = t.createBufferSource(), o.bufferSource.buffer = e[r._src], o.bufferSource.connect(o.panner), o.bufferSource.loop = n[0], n[0] && (o.bufferSource.loopStart = n[1], o.bufferSource.loopEnd = n[1] + n[2]), o.bufferSource.playbackRate.value = r._rate
            };
            "function" == typeof define && define.amd && define(function () {
                return {Howler: l, Howl: h}
            }), "undefined" != typeof r && (r.Howler = l, r.Howl = h), "undefined" != typeof window && (window.Howler = l, window.Howl = h)
        }()
    }, {}], 10: [function (e, t, r) {
        !function (e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof r ? t.exports = e : e(jQuery)
        }(function (e) {
            function t(t) {
                var a = t || window.event, s = u.call(arguments, 1), c = 0, h = 0, p = 0, d = 0, f = 0, m = 0;
                if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (p = -1 * a.detail), "wheelDelta" in a && (p = a.wheelDelta), "wheelDeltaY" in a && (p = a.wheelDeltaY), "wheelDeltaX" in a && (h = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (h = -1 * p, p = 0), c = 0 === p ? h : p, "deltaY" in a && (p = -1 * a.deltaY, c = p), "deltaX" in a && (h = a.deltaX, 0 === p && (c = -1 * h)), 0 !== p || 0 !== h) {
                    if (1 === a.deltaMode) {
                        var g = e.data(this, "mousewheel-line-height");
                        c *= g, p *= g, h *= g
                    } else if (2 === a.deltaMode) {
                        var v = e.data(this, "mousewheel-page-height");
                        c *= v, p *= v, h *= v
                    }
                    if (d = Math.max(Math.abs(p), Math.abs(h)), (!o || o > d) && (o = d, n(a, d) && (o /= 40)), n(a, d) && (c /= 40, h /= 40, p /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = t.clientX - y.left, m = t.clientY - y.top
                    }
                    return t.deltaX = h, t.deltaY = p, t.deltaFactor = o, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, s.unshift(t, c, h, p), i && clearTimeout(i), i = setTimeout(r, 200), (e.event.dispatch || e.event.handle).apply(this, s)
                }
            }

            function r() {
                o = null
            }

            function n(e, t) {
                return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
            }

            var i, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], u = Array.prototype.slice;
            if (e.event.fixHooks)for (var c = a.length; c;)e.event.fixHooks[a[--c]] = e.event.mouseHooks;
            var l = e.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener)for (var r = s.length; r;)this.addEventListener(s[--r], t, !1); else this.onmousewheel = t;
                    e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)for (var r = s.length; r;)this.removeEventListener(s[--r], t, !1); else this.onmousewheel = null;
                    e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (t) {
                    var r = e(t), n = r["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                    return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
                }, getPageHeight: function (t) {
                    return e(t).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            e.fn.extend({
                mousewheel: function (e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                }, unmousewheel: function (e) {
                    return this.unbind("mousewheel", e)
                }
            })
        })
    }, {}], 11: [function (e, t, r) {
        !function (e, r) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? r(e, !0) : function (e) {
                if (!e.document)throw new Error("jQuery requires a window with a document");
                return r(e)
            } : r(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function r(e) {
                var t = "length" in e && e.length, r = J.type(e);
                return "function" === r || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function n(e, t, r) {
                if (J.isFunction(t))return J.grep(e, function (e, n) {
                    return !!t.call(e, n, e) !== r
                });
                if (t.nodeType)return J.grep(e, function (e) {
                    return e === t !== r
                });
                if ("string" == typeof t) {
                    if (se.test(t))return J.filter(t, e, r);
                    t = J.filter(t, e)
                }
                return J.grep(e, function (e) {
                    return X.call(t, e) >= 0 !== r
                })
            }

            function i(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function o(e) {
                var t = fe[e] = {};
                return J.each(e.match(de) || [], function (e, r) {
                    t[r] = !0
                }), t
            }

            function a() {
                Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), J.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = J.expando + s.uid++
            }

            function u(e, t, r) {
                var n;
                if (void 0 === r && 1 === e.nodeType)if (n = "data-" + t.replace(be, "-$1").toLowerCase(), r = e.getAttribute(n), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : xe.test(r) ? J.parseJSON(r) : r
                    } catch (i) {
                    }
                    ye.set(e, t, r)
                } else r = void 0;
                return r
            }

            function c() {
                return !0
            }

            function l() {
                return !1
            }

            function h() {
                try {
                    return Q.activeElement
                } catch (e) {
                }
            }

            function p(e, t) {
                return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function d(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function f(e) {
                var t = Ve.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function m(e, t) {
                for (var r = 0, n = e.length; n > r; r++)ve.set(e[r], "globalEval", !t || ve.get(t[r], "globalEval"))
            }

            function g(e, t) {
                var r, n, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), c = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in c)for (r = 0, n = c[i].length; n > r; r++)J.event.add(t, i, c[i][r])
                    }
                    ye.hasData(e) && (s = ye.access(e), u = J.extend({}, s), ye.set(t, u))
                }
            }

            function v(e, t) {
                var r = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], r) : r
            }

            function y(e, t) {
                var r = t.nodeName.toLowerCase();
                "input" === r && Te.test(e.type) ? t.checked = e.checked : ("input" === r || "textarea" === r) && (t.defaultValue = e.defaultValue)
            }

            function x(t, r) {
                var n, i = J(r.createElement(t)).appendTo(r.body), o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(i[0])) ? n.display : J.css(i[0], "display");
                return i.detach(), o
            }

            function b(e) {
                var t = Q, r = Ue[e];
                return r || (r = x(e, t), "none" !== r && r || (Ie = (Ie || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ie[0].contentDocument, t.write(), t.close(), r = x(e, t), Ie.detach()), Ue[e] = r), r
            }

            function w(e, t, r) {
                var n, i, o, a, s = e.style;
                return r = r || je(e), r && (a = r.getPropertyValue(t) || r[t]), r && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), Ge.test(a) && ze.test(t) && (n = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = r.width, s.width = n, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function S(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function M(e, t) {
                if (t in e)return t;
                for (var r = t[0].toUpperCase() + t.slice(1), n = t, i = Ke.length; i--;)if (t = Ke[i] + r, t in e)return t;
                return n
            }

            function T(e, t, r) {
                var n = We.exec(t);
                return n ? Math.max(0, n[1] - (r || 0)) + (n[2] || "px") : t
            }

            function _(e, t, r, n, i) {
                for (var o = r === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === r && (a += J.css(e, r + Se[o], !0, i)), n ? ("content" === r && (a -= J.css(e, "padding" + Se[o], !0, i)), "margin" !== r && (a -= J.css(e, "border" + Se[o] + "Width", !0, i))) : (a += J.css(e, "padding" + Se[o], !0, i), "padding" !== r && (a += J.css(e, "border" + Se[o] + "Width", !0, i)));
                return a
            }

            function E(e, t, r) {
                var n = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = je(e), a = "border-box" === J.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ge.test(i))return i;
                    n = a && ($.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + _(e, t, r || (a ? "border" : "content"), n, o) + "px"
            }

            function C(e, t) {
                for (var r, n, i, o = [], a = 0, s = e.length; s > a; a++)n = e[a], n.style && (o[a] = ve.get(n, "olddisplay"), r = n.style.display, t ? (o[a] || "none" !== r || (n.style.display = ""), "" === n.style.display && Me(n) && (o[a] = ve.access(n, "olddisplay", b(n.nodeName)))) : (i = Me(n), "none" === r && i || ve.set(n, "olddisplay", i ? r : J.css(n, "display"))));
                for (a = 0; s > a; a++)n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function A(e, t, r, n, i) {
                return new A.prototype.init(e, t, r, n, i)
            }

            function L() {
                return setTimeout(function () {
                    $e = void 0
                }), $e = J.now()
            }

            function P(e, t) {
                var r, n = 0, i = {height: e};
                for (t = t ? 1 : 0; 4 > n; n += 2 - t)r = Se[n], i["margin" + r] = i["padding" + r] = e;
                return t && (i.opacity = i.width = e), i
            }

            function k(e, t, r) {
                for (var n, i = (rt[t] || []).concat(rt["*"]), o = 0, a = i.length; a > o; o++)if (n = i[o].call(r, t, e))return n
            }

            function D(e, t, r) {
                var n, i, o, a, s, u, c, l, h = this, p = {}, d = e.style, f = e.nodeType && Me(e), m = ve.get(e, "fxshow");
                r.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || u()
                }), s.unqueued++, h.always(function () {
                    h.always(function () {
                        s.unqueued--, J.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], c = J.css(e, "display"), l = "none" === c ? ve.get(e, "olddisplay") || b(e.nodeName) : c, "inline" === l && "none" === J.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", h.always(function () {
                    d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
                }));
                for (n in t)if (i = t[n], Ze.exec(i)) {
                    if (delete t[n], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[n])continue;
                        f = !0
                    }
                    p[n] = m && m[n] || J.style(e, n)
                } else c = void 0;
                if (J.isEmptyObject(p))"inline" === ("none" === c ? b(e.nodeName) : c) && (d.display = c); else {
                    m ? "hidden" in m && (f = m.hidden) : m = ve.access(e, "fxshow", {}), o && (m.hidden = !f), f ? J(e).show() : h.done(function () {
                        J(e).hide()
                    }), h.done(function () {
                        var t;
                        ve.remove(e, "fxshow");
                        for (t in p)J.style(e, t, p[t])
                    });
                    for (n in p)a = k(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
                }
            }

            function R(e, t) {
                var r, n, i, o, a;
                for (r in e)if (n = J.camelCase(r), i = t[n], o = e[r], J.isArray(o) && (i = o[1], o = e[r] = o[0]), r !== n && (e[n] = o, delete e[r]), a = J.cssHooks[n], a && "expand" in a) {
                    o = a.expand(o), delete e[n];
                    for (r in o)r in e || (e[r] = o[r], t[r] = i)
                } else t[n] = i
            }

            function O(e, t, r) {
                var n, i, o = 0, a = tt.length, s = J.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (i)return !1;
                    for (var t = $e || L(), r = Math.max(0, c.startTime + c.duration - t), n = r / c.duration || 0, o = 1 - n, a = 0, u = c.tweens.length; u > a; a++)c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, r]), 1 > o && u ? r : (s.resolveWith(e, [c]), !1)
                }, c = s.promise({
                    elem: e,
                    props: J.extend({}, t),
                    opts: J.extend(!0, {specialEasing: {}}, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: $e || L(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function (t, r) {
                        var n = J.Tween(e, c.opts, t, r, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function (t) {
                        var r = 0, n = t ? c.tweens.length : 0;
                        if (i)return this;
                        for (i = !0; n > r; r++)c.tweens[r].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }), l = c.props;
                for (R(l, c.opts.specialEasing); a > o; o++)if (n = tt[o].call(c, e, l, c.opts))return n;
                return J.map(l, k, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function F(e) {
                return function (t, r) {
                    "string" != typeof t && (r = t, t = "*");
                    var n, i = 0, o = t.toLowerCase().match(de) || [];
                    if (J.isFunction(r))for (; n = o[i++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(r)) : (e[n] = e[n] || []).push(r)
                }
            }

            function V(e, t, r, n) {
                function i(s) {
                    var u;
                    return o[s] = !0, J.each(e[s] || [], function (e, s) {
                        var c = s(t, r, n);
                        return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                    }), u
                }

                var o = {}, a = e === xt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function N(e, t) {
                var r, n, i = J.ajaxSettings.flatOptions || {};
                for (r in t)void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && J.extend(!0, e, n), e
            }

            function B(e, t, r) {
                for (var n, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)for (i in s)if (s[i] && s[i].test(n)) {
                    u.unshift(i);
                    break
                }
                if (u[0] in r)o = u[0]; else {
                    for (i in r) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                return o ? (o !== u[0] && u.unshift(o), r[o]) : void 0
            }

            function I(e, t, r, n) {
                var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
                if (l[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
                for (o = l.shift(); o;)if (e.responseFields[o] && (r[e.responseFields[o]] = t), !u && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
                    if (a = c[u + " " + o] || c["* " + o], !a)for (i in c)if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                        break
                    }
                    if (a !== !0)if (a && e["throws"])t = a(t); else try {
                        t = a(t)
                    } catch (h) {
                        return {state: "parsererror", error: a ? h : "No conversion from " + u + " to " + o}
                    }
                }
                return {state: "success", data: t}
            }

            function U(e, t, r, n) {
                var i;
                if (J.isArray(t))J.each(t, function (t, i) {
                    r || Tt.test(e) ? n(e, i) : U(e + "[" + ("object" == typeof i ? t : "") + "]", i, r, n)
                }); else if (r || "object" !== J.type(t))n(e, t); else for (i in t)U(e + "[" + i + "]", t[i], r, n)
            }

            function z(e) {
                return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var G = [], j = G.slice, H = G.concat, W = G.push, X = G.indexOf, q = {}, Y = q.toString, K = q.hasOwnProperty, $ = {}, Q = e.document, Z = "2.1.4", J = function (e, t) {
                return new J.fn.init(e, t)
            }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, re = /-([\da-z])/gi, ne = function (e, t) {
                return t.toUpperCase()
            };
            J.fn = J.prototype = {
                jquery: Z, constructor: J, selector: "", length: 0, toArray: function () {
                    return j.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : j.call(this)
                }, pushStack: function (e) {
                    var t = J.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e, t) {
                    return J.each(this, e, t)
                }, map: function (e) {
                    return this.pushStack(J.map(this, function (t, r) {
                        return e.call(t, r, t)
                    }))
                }, slice: function () {
                    return this.pushStack(j.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, r = +e + (0 > e ? t : 0);
                    return this.pushStack(r >= 0 && t > r ? [this[r]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: W, sort: G.sort, splice: G.splice
            }, J.extend = J.fn.extend = function () {
                var e, t, r, n, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (e = arguments[s]))for (t in e)r = a[t], n = e[t], a !== n && (c && n && (J.isPlainObject(n) || (i = J.isArray(n))) ? (i ? (i = !1, o = r && J.isArray(r) ? r : []) : o = r && J.isPlainObject(r) ? r : {}, a[t] = J.extend(c, o, n)) : void 0 !== n && (a[t] = n));
                return a
            }, J.extend({
                expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isFunction: function (e) {
                    return "function" === J.type(e)
                }, isArray: Array.isArray, isWindow: function (e) {
                    return null != e && e === e.window
                }, isNumeric: function (e) {
                    return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
                }, isPlainObject: function (e) {
                    return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e)return !1;
                    return !0
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[Y.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    var t, r = eval;
                    e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : r(e))
                }, camelCase: function (e) {
                    return e.replace(te, "ms-").replace(re, ne)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t, n) {
                    var i, o = 0, a = e.length, s = r(e);
                    if (n) {
                        if (s)for (; a > o && (i = t.apply(e[o], n), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], n), i === !1)break
                    } else if (s)for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
                    return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(ee, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? J.merge(n, "string" == typeof e ? [e] : e) : W.call(n, e)), n
                }, inArray: function (e, t, r) {
                    return null == t ? -1 : X.call(t, e, r)
                }, merge: function (e, t) {
                    for (var r = +t.length, n = 0, i = e.length; r > n; n++)e[i++] = t[n];
                    return e.length = i, e
                }, grep: function (e, t, r) {
                    for (var n, i = [], o = 0, a = e.length, s = !r; a > o; o++)n = !t(e[o], o), n !== s && i.push(e[o]);
                    return i
                }, map: function (e, t, n) {
                    var i, o = 0, a = e.length, s = r(e), u = [];
                    if (s)for (; a > o; o++)i = t(e[o], o, n), null != i && u.push(i); else for (o in e)i = t(e[o], o, n), null != i && u.push(i);
                    return H.apply([], u)
                }, guid: 1, proxy: function (e, t) {
                    var r, n, i;
                    return "string" == typeof t && (r = e[t], t = e, e = r), J.isFunction(e) ? (n = j.call(arguments, 2), i = function () {
                        return e.apply(t || this, n.concat(j.call(arguments)))
                    }, i.guid = e.guid = e.guid || J.guid++, i) : void 0
                }, now: Date.now, support: $
            }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                q["[object " + t + "]"] = t.toLowerCase()
            });
            var ie = function (e) {
                function t(e, t, r, n) {
                    var i, o, a, s, u, c, h, d, f, m;
                    if ((t ? t.ownerDocument || t : U) !== D && k(t), t = t || D, r = r || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return r;
                    if (!n && O) {
                        if (11 !== s && (i = ye.exec(e)))if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode)return r;
                                if (o.id === a)return r.push(o), r
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a)return r.push(o), r
                        } else {
                            if (i[2])return Z.apply(r, t.getElementsByTagName(e)), r;
                            if ((a = i[3]) && w.getElementsByClassName)return Z.apply(r, t.getElementsByClassName(a)), r
                        }
                        if (w.qsa && (!F || !F.test(e))) {
                            if (d = h = I, f = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = _(e), (h = t.getAttribute("id")) ? d = h.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;)c[u] = d + p(c[u]);
                                f = xe.test(e) && l(t.parentNode) || t, m = c.join(",")
                            }
                            if (m)try {
                                return Z.apply(r, f.querySelectorAll(m)), r
                            } catch (g) {
                            } finally {
                                h || t.removeAttribute("id")
                            }
                        }
                    }
                    return C(e.replace(ue, "$1"), t, r, n)
                }

                function r() {
                    function e(r, n) {
                        return t.push(r + " ") > S.cacheLength && delete e[t.shift()], e[r + " "] = n
                    }

                    var t = [];
                    return e
                }

                function n(e) {
                    return e[I] = !0, e
                }

                function i(e) {
                    var t = D.createElement("div");
                    try {
                        return !!e(t)
                    } catch (r) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var r = e.split("|"), n = e.length; n--;)S.attrHandle[r[n]] = t
                }

                function a(e, t) {
                    var r = t && e, n = r && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
                    if (n)return n;
                    if (r)for (; r = r.nextSibling;)if (r === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var r = t.nodeName.toLowerCase();
                        return "input" === r && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var r = t.nodeName.toLowerCase();
                        return ("input" === r || "button" === r) && t.type === e
                    }
                }

                function c(e) {
                    return n(function (t) {
                        return t = +t, n(function (r, n) {
                            for (var i, o = e([], r.length, t), a = o.length; a--;)r[i = o[a]] && (r[i] = !(n[i] = r[i]))
                        })
                    })
                }

                function l(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function h() {
                }

                function p(e) {
                    for (var t = 0, r = e.length, n = ""; r > t; t++)n += e[t].value;
                    return n
                }

                function d(e, t, r) {
                    var n = t.dir, i = r && "parentNode" === n, o = G++;
                    return t.first ? function (t, r, o) {
                        for (; t = t[n];)if (1 === t.nodeType || i)return e(t, r, o)
                    } : function (t, r, a) {
                        var s, u, c = [z, o];
                        if (a) {
                            for (; t = t[n];)if ((1 === t.nodeType || i) && e(t, r, a))return !0
                        } else for (; t = t[n];)if (1 === t.nodeType || i) {
                            if (u = t[I] || (t[I] = {}), (s = u[n]) && s[0] === z && s[1] === o)return c[2] = s[2];
                            if (u[n] = c, c[2] = e(t, r, a))return !0
                        }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function (t, r, n) {
                        for (var i = e.length; i--;)if (!e[i](t, r, n))return !1;
                        return !0
                    } : e[0]
                }

                function m(e, r, n) {
                    for (var i = 0, o = r.length; o > i; i++)t(e, r[i], n);
                    return n
                }

                function g(e, t, r, n, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(o = e[s]) && (!r || r(o, n, i)) && (a.push(o), c && t.push(s));
                    return a
                }

                function v(e, t, r, i, o, a) {
                    return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), n(function (n, a, s, u) {
                        var c, l, h, p = [], d = [], f = a.length, v = n || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !n && t ? v : g(v, p, e, s, u), x = r ? o || (n ? e : f || i) ? [] : a : y;
                        if (r && r(y, x, s, u), i)for (c = g(x, d), i(c, [], s, u), l = c.length; l--;)(h = c[l]) && (x[d[l]] = !(y[d[l]] = h));
                        if (n) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], l = x.length; l--;)(h = x[l]) && c.push(y[l] = h);
                                    o(null, x = [], c, u)
                                }
                                for (l = x.length; l--;)(h = x[l]) && (c = o ? ee(n, h) : p[l]) > -1 && (n[c] = !(a[c] = h))
                            }
                        } else x = g(x === a ? x.splice(f, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x)
                    })
                }

                function y(e) {
                    for (var t, r, n, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                        return e === t
                    }, a, !0), c = d(function (e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function (e, r, n) {
                        var i = !o && (n || r !== A) || ((t = r).nodeType ? u(e, r, n) : c(e, r, n));
                        return t = null, i
                    }]; i > s; s++)if (r = S.relative[e[s].type])l = [d(f(l), r)]; else {
                        if (r = S.filter[e[s].type].apply(null, e[s].matches), r[I]) {
                            for (n = ++s; i > n && !S.relative[e[n].type]; n++);
                            return v(s > 1 && f(l), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), r, n > s && y(e.slice(s, n)), i > n && y(e = e.slice(n)), i > n && p(e))
                        }
                        l.push(r)
                    }
                    return f(l)
                }

                function x(e, r) {
                    var i = r.length > 0, o = e.length > 0, a = function (n, a, s, u, c) {
                        var l, h, p, d = 0, f = "0", m = n && [], v = [], y = A, x = n || o && S.find.TAG("*", c), b = z += null == y ? 1 : Math.random() || .1, w = x.length;
                        for (c && (A = a !== D && a); f !== w && null != (l = x[f]); f++) {
                            if (o && l) {
                                for (h = 0; p = e[h++];)if (p(l, a, s)) {
                                    u.push(l);
                                    break
                                }
                                c && (z = b)
                            }
                            i && ((l = !p && l) && d--, n && m.push(l))
                        }
                        if (d += f, i && f !== d) {
                            for (h = 0; p = r[h++];)p(m, v, a, s);
                            if (n) {
                                if (d > 0)for (; f--;)m[f] || v[f] || (v[f] = $.call(u));
                                v = g(v)
                            }
                            Z.apply(u, v), c && !n && v.length > 0 && d + r.length > 1 && t.uniqueSort(u)
                        }
                        return c && (z = b, A = y), m
                    };
                    return i ? n(a) : a
                }

                var b, w, S, M, T, _, E, C, A, L, P, k, D, R, O, F, V, N, B, I = "sizzle" + 1 * new Date, U = e.document, z = 0, G = 0, j = r(), H = r(), W = r(), X = function (e, t) {
                    return e === t && (P = !0), 0
                }, q = 1 << 31, Y = {}.hasOwnProperty, K = [], $ = K.pop, Q = K.push, Z = K.push, J = K.slice, ee = function (e, t) {
                    for (var r = 0, n = e.length; n > r; r++)if (e[r] === t)return r;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = ne.replace("w", "w#"), oe = "\\[" + re + "*(" + ne + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]", ae = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(re + "+", "g"), ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"), ce = new RegExp("^" + re + "*," + re + "*"), le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), he = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"), pe = new RegExp(ae), de = new RegExp("^" + ie + "$"), fe = {
                    ID: new RegExp("^#(" + ne + ")"),
                    CLASS: new RegExp("^\\.(" + ne + ")"),
                    TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"), Se = function (e, t, r) {
                    var n = "0x" + t - 65536;
                    return n !== n || r ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                }, Me = function () {
                    k()
                };
                try {
                    Z.apply(K = J.call(U.childNodes), U.childNodes), K[U.childNodes.length].nodeType
                } catch (Te) {
                    Z = {
                        apply: K.length ? function (e, t) {
                            Q.apply(e, J.call(t))
                        } : function (e, t) {
                            for (var r = e.length, n = 0; e[r++] = t[n++];);
                            e.length = r - 1
                        }
                    }
                }
                w = t.support = {}, T = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = t.setDocument = function (e) {
                    var t, r, n = e ? e.ownerDocument || e : U;
                    return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, R = n.documentElement, r = n.defaultView, r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", Me, !1) : r.attachEvent && r.attachEvent("onunload", Me)), O = !T(n), w.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = i(function (e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = i(function (e) {
                        return R.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
                    }), w.getById ? (S.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && O) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    }, S.filter.ID = function (e) {
                        var t = e.replace(we, Se);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete S.find.ID, S.filter.ID = function (e) {
                        var t = e.replace(we, Se);
                        return function (e) {
                            var r = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return r && r.value === t
                        }
                    }), S.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var r, n = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; r = o[i++];)1 === r.nodeType && n.push(r);
                            return n
                        }
                        return o
                    }, S.find.CLASS = w.getElementsByClassName && function (e, t) {
                            return O ? t.getElementsByClassName(e) : void 0
                        }, V = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function (e) {
                        R.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
                    }), i(function (e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (w.matchesSelector = ve.test(N = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && i(function (e) {
                        w.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), V.push("!=", ae)
                    }), F = F.length && new RegExp(F.join("|")), V = V.length && new RegExp(V.join("|")), t = ve.test(R.compareDocumentPosition), B = t || ve.test(R.contains) ? function (e, t) {
                        var r = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, X = t ? function (e, t) {
                        if (e === t)return P = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === U && B(U, e) ? -1 : t === n || t.ownerDocument === U && B(U, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return P = !0, 0;
                        var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], c = [t];
                        if (!o || !s)return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                        if (o === s)return a(e, t);
                        for (r = e; r = r.parentNode;)u.unshift(r);
                        for (r = t; r = r.parentNode;)c.unshift(r);
                        for (; u[i] === c[i];)i++;
                        return i ? a(u[i], c[i]) : u[i] === U ? -1 : c[i] === U ? 1 : 0
                    }, n) : D
                }, t.matches = function (e, r) {
                    return t(e, null, null, r)
                }, t.matchesSelector = function (e, r) {
                    if ((e.ownerDocument || e) !== D && k(e), r = r.replace(he, "='$1']"), w.matchesSelector && O && (!V || !V.test(r)) && (!F || !F.test(r)))try {
                        var n = N.call(e, r);
                        if (n || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
                    } catch (i) {
                    }
                    return t(r, D, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== D && k(e), B(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== D && k(e);
                    var r = S.attrHandle[t.toLowerCase()], n = r && Y.call(S.attrHandle, t.toLowerCase()) ? r(e, t, !O) : void 0;
                    return void 0 !== n ? n : w.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, r = [], n = 0, i = 0;
                    if (P = !w.detectDuplicates, L = !w.sortStable && e.slice(0), e.sort(X), P) {
                        for (; t = e[i++];)t === e[i] && (n = r.push(i));
                        for (; n--;)e.splice(r[n], 1)
                    }
                    return L = null, e
                }, M = t.getText = function (e) {
                    var t, r = "", n = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)r += M(e)
                        } else if (3 === i || 4 === i)return e.nodeValue
                    } else for (; t = e[n++];)r += M(t);
                    return r
                }, S = t.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(we, Se), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, r = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : r && pe.test(r) && (t = _(r, !0)) && (t = r.indexOf(")", r.length - t) - r.length) && (e[0] = e[0].slice(0, t), e[2] = r.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(we, Se).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = j[e + " "];
                            return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && j(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, r, n) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === r : r ? (o += "", "=" === r ? o === n : "!=" === r ? o !== n : "^=" === r ? n && 0 === o.indexOf(n) : "*=" === r ? n && o.indexOf(n) > -1 : "$=" === r ? n && o.slice(-n.length) === n : "~=" === r ? (" " + o.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === r ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        }, CHILD: function (e, t, r, n, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === n && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, r, u) {
                                var c, l, h, p, d, f, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (h = t; h = h[m];)if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (l = g[I] || (g[I] = {}), c = l[e] || [], d = c[0] === z && c[1], p = c[0] === z && c[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (p = d = 0) || f.pop();)if (1 === h.nodeType && ++p && h === t) {
                                            l[e] = [z, d, p];
                                            break
                                        }
                                    } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === z)p = c[1]; else for (; (h = ++d && h && h[m] || (p = d = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (y && ((h[I] || (h[I] = {}))[e] = [z, p]), h !== t)););
                                    return p -= i, p === n || p % n === 0 && p / n >= 0
                                }
                            }
                        }, PSEUDO: function (e, r) {
                            var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[I] ? o(r) : o.length > 1 ? (i = [e, e, "", r], S.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                                for (var n, i = o(e, r), a = i.length; a--;)n = ee(e, i[a]), e[n] = !(t[n] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: n(function (e) {
                            var t = [], r = [], i = E(e.replace(ue, "$1"));
                            return i[I] ? n(function (e, t, r, n) {
                                for (var o, a = i(e, null, n, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, n, o) {
                                return t[0] = e, i(t, null, o, r), t[0] = null, !r.pop()
                            }
                        }), has: n(function (e) {
                            return function (r) {
                                return t(e, r).length > 0
                            }
                        }), contains: n(function (e) {
                            return e = e.replace(we, Se), function (t) {
                                return (t.textContent || t.innerText || M(t)).indexOf(e) > -1
                            }
                        }), lang: n(function (e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Se).toLowerCase(), function (t) {
                                var r;
                                do if (r = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return r = r.toLowerCase(), r === e || 0 === r.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var r = e.location && e.location.hash;
                            return r && r.slice(1) === t.id
                        }, root: function (e) {
                            return e === R
                        }, focus: function (e) {
                            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !S.pseudos.empty(e)
                        }, header: function (e) {
                            return ge.test(e.nodeName)
                        }, input: function (e) {
                            return me.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: c(function () {
                            return [0]
                        }), last: c(function (e, t) {
                            return [t - 1]
                        }), eq: c(function (e, t, r) {
                            return [0 > r ? r + t : r]
                        }), even: c(function (e, t) {
                            for (var r = 0; t > r; r += 2)e.push(r);
                            return e
                        }), odd: c(function (e, t) {
                            for (var r = 1; t > r; r += 2)e.push(r);
                            return e
                        }), lt: c(function (e, t, r) {
                            for (var n = 0 > r ? r + t : r; --n >= 0;)e.push(n);
                            return e
                        }), gt: c(function (e, t, r) {
                            for (var n = 0 > r ? r + t : r; ++n < t;)e.push(n);
                            return e
                        })
                    }
                }, S.pseudos.nth = S.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})S.pseudos[b] = s(b);
                for (b in{submit: !0, reset: !0})S.pseudos[b] = u(b);
                return h.prototype = S.filters = S.pseudos, S.setFilters = new h, _ = t.tokenize = function (e, r) {
                    var n, i, o, a, s, u, c, l = H[e + " "];
                    if (l)return r ? 0 : l.slice(0);
                    for (s = e, u = [], c = S.preFilter; s;) {
                        (!n || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(ue, " ")
                        }), s = s.slice(n.length));
                        for (a in S.filter)!(i = fe[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n)break
                    }
                    return r ? s.length : s ? t.error(e) : H(e, u).slice(0)
                }, E = t.compile = function (e, t) {
                    var r, n = [], i = [], o = W[e + " "];
                    if (!o) {
                        for (t || (t = _(e)), r = t.length; r--;)o = y(t[r]), o[I] ? n.push(o) : i.push(o);
                        o = W(e, x(i, n)), o.selector = e
                    }
                    return o
                }, C = t.select = function (e, t, r, n) {
                    var i, o, a, s, u, c = "function" == typeof e && e, h = !n && _(e = c.selector || e);
                    if (r = r || [], 1 === h.length) {
                        if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && O && S.relative[o[1].type]) {
                            if (t = (S.find.ID(a.matches[0].replace(we, Se), t) || [])[0], !t)return r;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);)if ((u = S.find[s]) && (n = u(a.matches[0].replace(we, Se), xe.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = n.length && p(o), !e)return Z.apply(r, n), r;
                            break
                        }
                    }
                    return (c || E(e, h))(n, t, !O, r, xe.test(e) && l(t.parentNode) || t), r
                }, w.sortStable = I.split("").sort(X).join("") === I, w.detectDuplicates = !!P, k(), w.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(D.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, r) {
                    return r ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, r) {
                    return r || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function (e, t, r) {
                    var n;
                    return r ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }), t
            }(e);
            J.find = ie, J.expr = ie.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ie.uniqueSort, J.text = ie.getText, J.isXMLDoc = ie.isXML, J.contains = ie.contains;
            var oe = J.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
            J.filter = function (e, t, r) {
                var n = t[0];
                return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? J.find.matchesSelector(n, e) ? [n] : [] : J.find.matches(e, J.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, J.fn.extend({
                find: function (e) {
                    var t, r = this.length, n = [], i = this;
                    if ("string" != typeof e)return this.pushStack(J(e).filter(function () {
                        for (t = 0; r > t; t++)if (J.contains(i[t], this))return !0
                    }));
                    for (t = 0; r > t; t++)J.find(e, i[t], n);
                    return n = this.pushStack(r > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                }, filter: function (e) {
                    return this.pushStack(n(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(n(this, e || [], !0))
                }, is: function (e) {
                    return !!n(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
                }
            });
            var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, le = J.fn.init = function (e, t) {
                var r, n;
                if (!e)return this;
                if ("string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(r[1]) && J.isPlainObject(t))for (r in t)J.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return n = Q.getElementById(r[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
            };
            le.prototype = J.fn, ue = J(Q);
            var he = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
            J.extend({
                dir: function (e, t, r) {
                    for (var n = [], i = void 0 !== r; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                        if (i && J(e).is(r))break;
                        n.push(e)
                    }
                    return n
                }, sibling: function (e, t) {
                    for (var r = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && r.push(e);
                    return r
                }
            }), J.fn.extend({
                has: function (e) {
                    var t = J(e, this), r = t.length;
                    return this.filter(function () {
                        for (var e = 0; r > e; e++)if (J.contains(this, t[e]))return !0
                    })
                }, closest: function (e, t) {
                    for (var r, n = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i > n; n++)for (r = this[n]; r && r !== t; r = r.parentNode)if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && J.find.matchesSelector(r, e))) {
                        o.push(r);
                        break
                    }
                    return this.pushStack(o.length > 1 ? J.unique(o) : o)
                }, index: function (e) {
                    return e ? "string" == typeof e ? X.call(J(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), J.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return J.dir(e, "parentNode")
                }, parentsUntil: function (e, t, r) {
                    return J.dir(e, "parentNode", r)
                }, next: function (e) {
                    return i(e, "nextSibling")
                }, prev: function (e) {
                    return i(e, "previousSibling")
                }, nextAll: function (e) {
                    return J.dir(e, "nextSibling")
                }, prevAll: function (e) {
                    return J.dir(e, "previousSibling")
                }, nextUntil: function (e, t, r) {
                    return J.dir(e, "nextSibling", r)
                }, prevUntil: function (e, t, r) {
                    return J.dir(e, "previousSibling", r)
                }, siblings: function (e) {
                    return J.sibling((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return J.sibling(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || J.merge([], e.childNodes)
                }
            }, function (e, t) {
                J.fn[e] = function (r, n) {
                    var i = J.map(this, t, r);
                    return "Until" !== e.slice(-5) && (n = r), n && "string" == typeof n && (i = J.filter(n, i)), this.length > 1 && (pe[e] || J.unique(i), he.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var de = /\S+/g, fe = {};
            J.Callbacks = function (e) {
                e = "string" == typeof e ? fe[e] || o(e) : J.extend({}, e);
                var t, r, n, i, a, s, u = [], c = !e.once && [], l = function (o) {
                    for (t = e.memory && o, r = !0, s = i || 0, i = 0, a = u.length, n = !0; u && a > s; s++)if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                    n = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : h.disable())
                }, h = {
                    add: function () {
                        if (u) {
                            var r = u.length;
                            !function o(t) {
                                J.each(t, function (t, r) {
                                    var n = J.type(r);
                                    "function" === n ? e.unique && h.has(r) || u.push(r) : r && r.length && "string" !== n && o(r)
                                })
                            }(arguments), n ? a = u.length : t && (i = r, l(t))
                        }
                        return this
                    }, remove: function () {
                        return u && J.each(arguments, function (e, t) {
                            for (var r; (r = J.inArray(t, u, r)) > -1;)u.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                        }), this
                    }, has: function (e) {
                        return e ? J.inArray(e, u) > -1 : !(!u || !u.length)
                    }, empty: function () {
                        return u = [], a = 0, this
                    }, disable: function () {
                        return u = c = t = void 0, this
                    }, disabled: function () {
                        return !u
                    }, lock: function () {
                        return c = void 0, t || h.disable(), this
                    }, locked: function () {
                        return !c
                    }, fireWith: function (e, t) {
                        return !u || r && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : l(t)), this
                    }, fire: function () {
                        return h.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!r
                    }
                };
                return h
            }, J.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], r = "pending", n = {
                        state: function () {
                            return r
                        }, always: function () {
                            return i.done(arguments).fail(arguments), this
                        }, then: function () {
                            var e = arguments;
                            return J.Deferred(function (r) {
                                J.each(t, function (t, o) {
                                    var a = J.isFunction(e[t]) && e[t];
                                    i[o[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && J.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o[0] + "With"](this === n ? r.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? J.extend(e, n) : n
                        }
                    }, i = {};
                    return n.pipe = n.then, J.each(t, function (e, o) {
                        var a = o[2], s = o[3];
                        n[o[1]] = a.add, s && a.add(function () {
                            r = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? n : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), n.promise(i), e && e.call(i, i), i
                }, when: function (e) {
                    var t, r, n, i = 0, o = j.call(arguments), a = o.length, s = 1 !== a || e && J.isFunction(e.promise) ? a : 0, u = 1 === s ? e : J.Deferred(), c = function (e, r, n) {
                        return function (i) {
                            r[e] = this, n[e] = arguments.length > 1 ? j.call(arguments) : i, n === t ? u.notifyWith(r, n) : --s || u.resolveWith(r, n)
                        }
                    };
                    if (a > 1)for (t = new Array(a), r = new Array(a), n = new Array(a); a > i; i++)o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(c(i, n, o)).fail(u.reject).progress(c(i, r, t)) : --s;
                    return s || u.resolveWith(n, o), u.promise()
                }
            });
            var me;
            J.fn.ready = function (e) {
                return J.ready.promise().done(e), this
            }, J.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? J.readyWait++ : J.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (me.resolveWith(Q, [J]), J.fn.triggerHandler && (J(Q).triggerHandler("ready"), J(Q).off("ready"))))
                }
            }), J.ready.promise = function (t) {
                return me || (me = J.Deferred(), "complete" === Q.readyState ? setTimeout(J.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
            }, J.ready.promise();
            var ge = J.access = function (e, t, r, n, i, o, a) {
                var s = 0, u = e.length, c = null == r;
                if ("object" === J.type(r)) {
                    i = !0;
                    for (s in r)J.access(e, t, s, r[s], !0, o, a)
                } else if (void 0 !== n && (i = !0, J.isFunction(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function (e, t, r) {
                        return c.call(J(e), r)
                    })), t))for (; u > s; s++)t(e[s], r, a ? n : n.call(e[s], s, t(e[s], r)));
                return i ? e : c ? t.call(e) : u ? t(e[0], r) : o
            };
            J.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
                key: function (e) {
                    if (!s.accepts(e))return 0;
                    var t = {}, r = e[this.expando];
                    if (!r) {
                        r = s.uid++;
                        try {
                            t[this.expando] = {value: r}, Object.defineProperties(e, t)
                        } catch (n) {
                            t[this.expando] = r, J.extend(e, t)
                        }
                    }
                    return this.cache[r] || (this.cache[r] = {}), r
                }, set: function (e, t, r) {
                    var n, i = this.key(e), o = this.cache[i];
                    if ("string" == typeof t)o[t] = r; else if (J.isEmptyObject(o))J.extend(this.cache[i], t); else for (n in t)o[n] = t[n];
                    return o
                }, get: function (e, t) {
                    var r = this.cache[this.key(e)];
                    return void 0 === t ? r : r[t]
                }, access: function (e, t, r) {
                    var n;
                    return void 0 === t || t && "string" == typeof t && void 0 === r ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, J.camelCase(t))) : (this.set(e, t, r), void 0 !== r ? r : t)
                }, remove: function (e, t) {
                    var r, n, i, o = this.key(e), a = this.cache[o];
                    if (void 0 === t)this.cache[o] = {}; else {
                        J.isArray(t) ? n = t.concat(t.map(J.camelCase)) : (i = J.camelCase(t), t in a ? n = [t, i] : (n = i, n = n in a ? [n] : n.match(de) || [])), r = n.length;
                        for (; r--;)delete a[n[r]]
                    }
                }, hasData: function (e) {
                    return !J.isEmptyObject(this.cache[e[this.expando]] || {})
                }, discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var ve = new s, ye = new s, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
            J.extend({
                hasData: function (e) {
                    return ye.hasData(e) || ve.hasData(e)
                }, data: function (e, t, r) {
                    return ye.access(e, t, r)
                }, removeData: function (e, t) {
                    ye.remove(e, t)
                }, _data: function (e, t, r) {
                    return ve.access(e, t, r)
                }, _removeData: function (e, t) {
                    ve.remove(e, t)
                }
            }), J.fn.extend({
                data: function (e, t) {
                    var r, n, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                            for (r = a.length; r--;)a[r] && (n = a[r].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), u(o, n, i[n])));
                            ve.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        ye.set(this, e)
                    }) : ge(this, function (t) {
                        var r, n = J.camelCase(e);
                        if (o && void 0 === t) {
                            if (r = ye.get(o, e), void 0 !== r)return r;
                            if (r = ye.get(o, n), void 0 !== r)return r;
                            if (r = u(o, n, void 0), void 0 !== r)return r
                        } else this.each(function () {
                            var r = ye.get(this, n);
                            ye.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== r && ye.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        ye.remove(this, e)
                    })
                }
            }), J.extend({
                queue: function (e, t, r) {
                    var n;
                    return e ? (t = (t || "fx") + "queue", n = ve.get(e, t), r && (!n || J.isArray(r) ? n = ve.access(e, t, J.makeArray(r)) : n.push(r)), n || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var r = J.queue(e, t), n = r.length, i = r.shift(), o = J._queueHooks(e, t), a = function () {
                        J.dequeue(e, t)
                    };
                    "inprogress" === i && (i = r.shift(), n--), i && ("fx" === t && r.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !n && o && o.empty.fire()
                }, _queueHooks: function (e, t) {
                    var r = t + "queueHooks";
                    return ve.get(e, r) || ve.access(e, r, {
                            empty: J.Callbacks("once memory").add(function () {
                                ve.remove(e, [t + "queue", r])
                            })
                        })
                }
            }), J.fn.extend({
                queue: function (e, t) {
                    var r = 2;
                    return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? J.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var r = J.queue(this, e, t);
                        J._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && J.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        J.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var r, n = 1, i = J.Deferred(), o = this, a = this.length, s = function () {
                        --n || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)r = ve.get(o[a], e + "queueHooks"), r && r.empty && (n++, r.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
                return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
            }, Te = /^(?:checkbox|radio)$/i;
            !function () {
                var e = Q.createDocumentFragment(), t = e.appendChild(Q.createElement("div")), r = Q.createElement("input");
                r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), $.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", $.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var _e = "undefined";
            $.focusinBubbles = "onfocusin" in e;
            var Ee = /^key/, Ce = /^(?:mouse|pointer|contextmenu)|click/, Ae = /^(?:focusinfocus|focusoutblur)$/, Le = /^([^.]*)(?:\.(.+)|)$/;
            J.event = {
                global: {},
                add: function (e, t, r, n, i) {
                    var o, a, s, u, c, l, h, p, d, f, m, g = ve.get(e);
                    if (g)for (r.handler && (o = r, r = o.handler, i = o.selector), r.guid || (r.guid = J.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                        return typeof J !== _e && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(de) || [""], c = t.length; c--;)s = Le.exec(t[c]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d && (h = J.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, h = J.event.special[d] || {}, l = J.extend({
                        type: d,
                        origType: m,
                        data: n,
                        handler: r,
                        guid: r.guid,
                        selector: i,
                        needsContext: i && J.expr.match.needsContext.test(i),
                        namespace: f.join(".")
                    }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, h.setup && h.setup.call(e, n, f, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), h.add && (h.add.call(e, l), l.handler.guid || (l.handler.guid = r.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), J.event.global[d] = !0)
                },
                remove: function (e, t, r, n, i) {
                    var o, a, s, u, c, l, h, p, d, f, m, g = ve.hasData(e) && ve.get(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(de) || [""], c = t.length; c--;)if (s = Le.exec(t[c]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d) {
                            for (h = J.event.special[d] || {}, d = (n ? h.delegateType : h.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;)l = p[o], !i && m !== l.origType || r && r.guid !== l.guid || s && !s.test(l.namespace) || n && n !== l.selector && ("**" !== n || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, h.remove && h.remove.call(e, l));
                            a && !p.length && (h.teardown && h.teardown.call(e, f, g.handle) !== !1 || J.removeEvent(e, d, g.handle), delete u[d])
                        } else for (d in u)J.event.remove(e, d + t[c], r, n, !0);
                        J.isEmptyObject(u) && (delete g.handle, ve.remove(e, "events"))
                    }
                },
                trigger: function (t, r, n, i) {
                    var o, a, s, u, c, l, h, p = [n || Q], d = K.call(t, "type") ? t.type : t, f = K.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[J.expando] ? t : new J.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), r = null == r ? [t] : J.makeArray(r, [t]), h = J.event.special[d] || {}, i || !h.trigger || h.trigger.apply(n, r) !== !1)) {
                        if (!i && !h.noBubble && !J.isWindow(n)) {
                            for (u = h.delegateType || d, Ae.test(u + d) || (a = a.parentNode); a; a = a.parentNode)p.push(a), s = a;
                            s === (n.ownerDocument || Q) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : h.bindType || d, l = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), l && l.apply(a, r), l = c && a[c], l && l.apply && J.acceptData(a) && (t.result = l.apply(a, r), t.result === !1 && t.preventDefault());
                        return t.type = d, i || t.isDefaultPrevented() || h._default && h._default.apply(p.pop(), r) !== !1 || !J.acceptData(n) || c && J.isFunction(n[d]) && !J.isWindow(n) && (s = n[c], s && (n[c] = null), J.event.triggered = d, n[d](), J.event.triggered = void 0, s && (n[c] = s)), t.result
                    }
                },
                dispatch: function (e) {
                    e = J.event.fix(e);
                    var t, r, n, i, o, a = [], s = j.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], c = J.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = J.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, r = 0; (o = i.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var r, n, i, o, a = [], s = t.delegateCount, u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type))for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
                        for (n = [], r = 0; s > r; r++)o = t[r], i = o.selector + " ", void 0 === n[i] && (n[i] = o.needsContext ? J(i, this).index(u) >= 0 : J.find(i, this, null, [u]).length), n[i] && n.push(o);
                        n.length && a.push({elem: u, handlers: n})
                    }
                    return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var r, n, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || Q, n = r.documentElement, i = r.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[J.expando])return e;
                    var t, r, n, i = e.type, o = e, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Ce.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(o), t = n.length; t--;)r = n[t], e[r] = o[r];
                    return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== h() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === h() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return J.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, r, n) {
                    var i = J.extend(new J.Event, r, {type: e, isSimulated: !0, originalEvent: {}});
                    n ? J.event.trigger(i, null, t) : J.event.dispatch.call(t, i), i.isDefaultPrevented() && r.preventDefault()
                }
            }, J.removeEvent = function (e, t, r) {
                e.removeEventListener && e.removeEventListener(t, r, !1)
            }, J.Event = function (e, t) {
                return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
            }, J.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, J.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                J.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var r, n = this, i = e.relatedTarget, o = e.handleObj;
                        return (!i || i !== n && !J.contains(n, i)) && (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
                    }
                }
            }), $.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var r = function (e) {
                    J.event.simulate(t, e.target, J.event.fix(e), !0)
                };
                J.event.special[t] = {
                    setup: function () {
                        var n = this.ownerDocument || this, i = ve.access(n, t);
                        i || n.addEventListener(e, r, !0), ve.access(n, t, (i || 0) + 1)
                    }, teardown: function () {
                        var n = this.ownerDocument || this, i = ve.access(n, t) - 1;
                        i ? ve.access(n, t, i) : (n.removeEventListener(e, r, !0), ve.remove(n, t))
                    }
                }
            }), J.fn.extend({
                on: function (e, t, r, n, i) {
                    var o, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (r = r || t, t = void 0);
                        for (a in e)this.on(a, t, r, e[a], i);
                        return this
                    }
                    if (null == r && null == n ? (n = t, r = t = void 0) : null == n && ("string" == typeof t ? (n = r, r = void 0) : (n = r, r = t, t = void 0)), n === !1)n = l; else if (!n)return this;
                    return 1 === i && (o = n, n = function (e) {
                        return J().off(e), o.apply(this, arguments)
                    }, n.guid = o.guid || (o.guid = J.guid++)), this.each(function () {
                        J.event.add(this, e, n, r, t)
                    })
                }, one: function (e, t, r, n) {
                    return this.on(e, t, r, n, 1)
                }, off: function (e, t, r) {
                    var n, i;
                    if (e && e.preventDefault && e.handleObj)return n = e.handleObj, J(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof e) {
                        for (i in e)this.off(i, t, e[i]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = l), this.each(function () {
                        J.event.remove(this, e, r, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        J.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var r = this[0];
                    return r ? J.event.trigger(e, t, r, !0) : void 0
                }
            });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ke = /<([\w:]+)/, De = /<|&#?\w+;/, Re = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^$|\/(?:java|ecma)script/i, Ve = /^true\/(.*)/, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Be = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, J.extend({
                clone: function (e, t, r) {
                    var n, i, o, a, s = e.cloneNode(!0), u = J.contains(e.ownerDocument, e);
                    if (!($.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))for (a = v(s), o = v(e), n = 0, i = o.length; i > n; n++)y(o[n], a[n]);
                    if (t)if (r)for (o = o || v(e), a = a || v(s), n = 0, i = o.length; i > n; n++)g(o[n], a[n]); else g(e, s);
                    return a = v(s, "script"), a.length > 0 && m(a, !u && v(e, "script")), s
                }, buildFragment: function (e, t, r, n) {
                    for (var i, o, a, s, u, c, l = t.createDocumentFragment(), h = [], p = 0, d = e.length; d > p; p++)if (i = e[p], i || 0 === i)if ("object" === J.type(i))J.merge(h, i.nodeType ? [i] : i); else if (De.test(i)) {
                        for (o = o || l.appendChild(t.createElement("div")), a = (ke.exec(i) || ["", ""])[1].toLowerCase(), s = Be[a] || Be._default, o.innerHTML = s[1] + i.replace(Pe, "<$1></$2>") + s[2], c = s[0]; c--;)o = o.lastChild;
                        J.merge(h, o.childNodes), o = l.firstChild, o.textContent = ""
                    } else h.push(t.createTextNode(i));
                    for (l.textContent = "", p = 0; i = h[p++];)if ((!n || -1 === J.inArray(i, n)) && (u = J.contains(i.ownerDocument, i), o = v(l.appendChild(i), "script"), u && m(o), r))for (c = 0; i = o[c++];)Fe.test(i.type || "") && r.push(i);
                    return l
                }, cleanData: function (e) {
                    for (var t, r, n, i, o = J.event.special, a = 0; void 0 !== (r = e[a]); a++) {
                        if (J.acceptData(r) && (i = r[ve.expando], i && (t = ve.cache[i]))) {
                            if (t.events)for (n in t.events)o[n] ? J.event.remove(r, n) : J.removeEvent(r, n, t.handle);
                            ve.cache[i] && delete ve.cache[i]
                        }
                        delete ye.cache[r[ye.expando]]
                    }
                }
            }), J.fn.extend({
                text: function (e) {
                    return ge(this, function (e) {
                        return void 0 === e ? J.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, remove: function (e, t) {
                    for (var r, n = e ? J.filter(e, this) : this, i = 0; null != (r = n[i]); i++)t || 1 !== r.nodeType || J.cleanData(v(r)), r.parentNode && (t && J.contains(r.ownerDocument, r) && m(v(r, "script")), r.parentNode.removeChild(r));
                    return this
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return J.clone(this, e, t)
                    })
                }, html: function (e) {
                    return ge(this, function (e) {
                        var t = this[0] || {}, r = 0, n = this.length;
                        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                        if ("string" == typeof e && !Re.test(e) && !Be[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(Pe, "<$1></$2>");
                            try {
                                for (; n > r; r++)t = this[r] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                }, detach: function (e) {
                    return this.remove(e, !0)
                }, domManip: function (e, t) {
                    e = H.apply([], e);
                    var r, n, i, o, a, s, u = 0, c = this.length, l = this, h = c - 1, p = e[0], m = J.isFunction(p);
                    if (m || c > 1 && "string" == typeof p && !$.checkClone && Oe.test(p))return this.each(function (r) {
                        var n = l.eq(r);
                        m && (e[0] = p.call(this, r, n.html())), n.domManip(e, t)
                    });
                    if (c && (r = J.buildFragment(e, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                        for (i = J.map(v(r, "script"), d), o = i.length; c > u; u++)a = r, u !== h && (a = J.clone(a, !0, !0), o && J.merge(i, v(a, "script"))), t.call(this[u], a, u);
                        if (o)for (s = i[i.length - 1].ownerDocument, J.map(i, f), u = 0; o > u; u++)a = i[u], Fe.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Ne, "")))
                    }
                    return this
                }
            }), J.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                J.fn[e] = function (e) {
                    for (var r, n = [], i = J(e), o = i.length - 1, a = 0; o >= a; a++)r = a === o ? this : this.clone(!0), J(i[a])[t](r), W.apply(n, r.get());
                    return this.pushStack(n)
                }
            });
            var Ie, Ue = {}, ze = /^margin/, Ge = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), je = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
            !function () {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                    var t = e.getComputedStyle(a, null);
                    r = "1%" !== t.top, n = "4px" === t.width, i.removeChild(o)
                }

                var r, n, i = Q.documentElement, o = Q.createElement("div"), a = Q.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", $.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && J.extend($, {
                    pixelPosition: function () {
                        return t(), r
                    }, boxSizingReliable: function () {
                        return null == n && t(), n
                    }, reliableMarginRight: function () {
                        var t, r = a.appendChild(Q.createElement("div"));
                        return r.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(r, null).marginRight), i.removeChild(o), a.removeChild(r), t
                    }
                }))
            }(), J.swap = function (e, t, r, n) {
                var i, o, a = {};
                for (o in t)a[o] = e.style[o], e.style[o] = t[o];
                i = r.apply(e, n || []);
                for (o in t)e.style[o] = a[o];
                return i
            };
            var He = /^(none|table(?!-c[ea]).+)/, We = new RegExp("^(" + we + ")(.*)$", "i"), Xe = new RegExp("^([+-])=(" + we + ")", "i"), qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Ye = {
                letterSpacing: "0",
                fontWeight: "400"
            }, Ke = ["Webkit", "O", "Moz", "ms"];
            J.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var r = w(e, "opacity");
                                return "" === r ? "1" : r
                            }
                        }
                    }
                },
                cssNumber: {
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
                cssProps: {"float": "cssFloat"},
                style: function (e, t, r, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = J.camelCase(t), u = e.style;
                        return t = J.cssProps[s] || (J.cssProps[s] = M(u, s)), a = J.cssHooks[t] || J.cssHooks[s], void 0 === r ? a && "get" in a && void 0 !== (i = a.get(e, !1, n)) ? i : u[t] : (o = typeof r, "string" === o && (i = Xe.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(J.css(e, t)), o = "number"), null != r && r === r && ("number" !== o || J.cssNumber[s] || (r += "px"), $.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (r = a.set(e, r, n)) || (u[t] = r)), void 0)
                    }
                },
                css: function (e, t, r, n) {
                    var i, o, a, s = J.camelCase(t);
                    return t = J.cssProps[s] || (J.cssProps[s] = M(e.style, s)), a = J.cssHooks[t] || J.cssHooks[s], a && "get" in a && (i = a.get(e, !0, r)), void 0 === i && (i = w(e, t, n)), "normal" === i && t in Ye && (i = Ye[t]), "" === r || r ? (o = parseFloat(i), r === !0 || J.isNumeric(o) ? o || 0 : i) : i
                }
            }), J.each(["height", "width"], function (e, t) {
                J.cssHooks[t] = {
                    get: function (e, r, n) {
                        return r ? He.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, qe, function () {
                            return E(e, t, n)
                        }) : E(e, t, n) : void 0
                    }, set: function (e, r, n) {
                        var i = n && je(e);
                        return T(e, r, n ? _(e, t, n, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), J.cssHooks.marginRight = S($.reliableMarginRight, function (e, t) {
                return t ? J.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
            }), J.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                J.cssHooks[e + t] = {
                    expand: function (r) {
                        for (var n = 0, i = {}, o = "string" == typeof r ? r.split(" ") : [r]; 4 > n; n++)i[e + Se[n] + t] = o[n] || o[n - 2] || o[0];
                        return i
                    }
                }, ze.test(e) || (J.cssHooks[e + t].set = T)
            }), J.fn.extend({
                css: function (e, t) {
                    return ge(this, function (e, t, r) {
                        var n, i, o = {}, a = 0;
                        if (J.isArray(t)) {
                            for (n = je(e), i = t.length; i > a; a++)o[t[a]] = J.css(e, t[a], !1, n);
                            return o
                        }
                        return void 0 !== r ? J.style(e, t, r) : J.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return C(this, !0)
                }, hide: function () {
                    return C(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Me(this) ? J(this).show() : J(this).hide()
                    })
                }
            }), J.Tween = A, A.prototype = {
                constructor: A, init: function (e, t, r, n, i, o) {
                    this.elem = e, this.prop = r, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[r] ? "" : "px")
                }, cur: function () {
                    var e = A.propHooks[this.prop];
                    return e && e.get ? e.get(this) : A.propHooks._default.get(this)
                }, run: function (e) {
                    var t, r = A.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : A.propHooks._default.set(this), this
                }
            }, A.prototype.init.prototype = A.prototype, A.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    }, set: function (e) {
                        J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, J.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, J.fx = A.prototype.init, J.fx.step = {};
            var $e, Qe, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [D], rt = {
                "*": [function (e, t) {
                    var r = this.createTween(e, t), n = r.cur(), i = Je.exec(t), o = i && i[3] || (J.cssNumber[e] ? "" : "px"), a = (J.cssNumber[e] || "px" !== o && +n) && Je.exec(J.css(r.elem, e)), s = 1, u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +n || 1;
                        do s = s || ".5", a /= s, J.style(r.elem, e, a + o); while (s !== (s = r.cur() / n) && 1 !== s && --u)
                    }
                    return i && (a = r.start = +a || +n || 0, r.unit = o, r.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), r
                }]
            };
            J.Animation = J.extend(O, {
                tweener: function (e, t) {
                    J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var r, n = 0, i = e.length; i > n; n++)r = e[n], rt[r] = rt[r] || [], rt[r].unshift(t)
                }, prefilter: function (e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), J.speed = function (e, t, r) {
                var n = e && "object" == typeof e ? J.extend({}, e) : {
                    complete: r || !r && t || J.isFunction(e) && e,
                    duration: e,
                    easing: r && t || t && !J.isFunction(t) && t
                };
                return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
                }, n
            }, J.fn.extend({
                fadeTo: function (e, t, r, n) {
                    return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, r, n)
                }, animate: function (e, t, r, n) {
                    var i = J.isEmptyObject(e), o = J.speed(t, r, n), a = function () {
                        var t = O(this, J.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (e, t, r) {
                    var n = function (e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, i = null != e && e + "queueHooks", o = J.timers, a = ve.get(this);
                        if (i)a[i] && a[i].stop && n(a[i]); else for (i in a)a[i] && a[i].stop && et.test(i) && n(a[i]);
                        for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(r), t = !1, o.splice(i, 1));
                        (t || !r) && J.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, r = ve.get(this), n = r[e + "queue"], i = r[e + "queueHooks"], o = J.timers, a = n ? n.length : 0;
                        for (r.finish = !0, J.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++)n[t] && n[t].finish && n[t].finish.call(this);
                        delete r.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function (e, t) {
                var r = J.fn[t];
                J.fn[t] = function (e, n, i) {
                    return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(P(t, !0), e, n, i)
                }
            }), J.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                J.fn[e] = function (e, r, n) {
                    return this.animate(t, e, r, n)
                }
            }), J.timers = [], J.fx.tick = function () {
                var e, t = 0, r = J.timers;
                for ($e = J.now(); t < r.length; t++)e = r[t], e() || r[t] !== e || r.splice(t--, 1);
                r.length || J.fx.stop(), $e = void 0
            }, J.fx.timer = function (e) {
                J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
            }, J.fx.interval = 13, J.fx.start = function () {
                Qe || (Qe = setInterval(J.fx.tick, J.fx.interval))
            }, J.fx.stop = function () {
                clearInterval(Qe), Qe = null
            }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (e, t) {
                return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
                    var n = setTimeout(t, e);
                    r.stop = function () {
                        clearTimeout(n)
                    }
                })
            }, function () {
                var e = Q.createElement("input"), t = Q.createElement("select"), r = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", $.checkOn = "" !== e.value, $.optSelected = r.selected, t.disabled = !0, $.optDisabled = !r.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", $.radioValue = "t" === e.value
            }();
            var nt, it, ot = J.expr.attrHandle;
            J.fn.extend({
                attr: function (e, t) {
                    return ge(this, J.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        J.removeAttr(this, e)
                    })
                }
            }), J.extend({
                attr: function (e, t, r) {
                    var n, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === _e ? J.prop(e, t, r) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), n = J.attrHooks[t] || (J.expr.match.bool.test(t) ? it : nt)), void 0 === r ? n && "get" in n && null !== (i = n.get(e, t)) ? i : (i = J.find.attr(e, t), null == i ? void 0 : i) : null !== r ? n && "set" in n && void 0 !== (i = n.set(e, r, t)) ? i : (e.setAttribute(t, r + ""), r) : void J.removeAttr(e, t))
                }, removeAttr: function (e, t) {
                    var r, n, i = 0, o = t && t.match(de);
                    if (o && 1 === e.nodeType)for (; r = o[i++];)n = J.propFix[r] || r, J.expr.match.bool.test(r) && (e[n] = !1), e.removeAttribute(r)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!$.radioValue && "radio" === t && J.nodeName(e, "input")) {
                                var r = e.value;
                                return e.setAttribute("type", t), r && (e.value = r), t
                            }
                        }
                    }
                }
            }), it = {
                set: function (e, t, r) {
                    return t === !1 ? J.removeAttr(e, r) : e.setAttribute(r, r), r
                }
            }, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var r = ot[t] || J.find.attr;
                ot[t] = function (e, t, n) {
                    var i, o;
                    return n || (o = ot[t], ot[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, ot[t] = o), i
                }
            });
            var at = /^(?:input|select|textarea|button)$/i;
            J.fn.extend({
                prop: function (e, t) {
                    return ge(this, J.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[J.propFix[e] || e]
                    })
                }
            }), J.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, r) {
                    var n, i, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, i = J.propHooks[t]), void 0 !== r ? i && "set" in i && void 0 !== (n = i.set(e, r, t)) ? n : e[t] = r : i && "get" in i && null !== (n = i.get(e, t)) ? n : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), $.optSelected || (J.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                J.propFix[this.toLowerCase()] = this
            });
            var st = /[\t\r\n\f]/g;
            J.fn.extend({
                addClass: function (e) {
                    var t, r, n, i, o, a, s = "string" == typeof e && e, u = 0, c = this.length;
                    if (J.isFunction(e))return this.each(function (t) {
                        J(this).addClass(e.call(this, t, this.className))
                    });
                    if (s)for (t = (e || "").match(de) || []; c > u; u++)if (r = this[u], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];)n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        a = J.trim(n), r.className !== a && (r.className = a)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, r, n, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, c = this.length;
                    if (J.isFunction(e))return this.each(function (t) {
                        J(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s)for (t = (e || "").match(de) || []; c > u; u++)if (r = this[u], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)for (; n.indexOf(" " + i + " ") >= 0;)n = n.replace(" " + i + " ", " ");
                        a = e ? J.trim(n) : "", r.className !== a && (r.className = a)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var r = typeof e;
                    return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function (r) {
                        J(this).toggleClass(e.call(this, r, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" === r)for (var t, n = 0, i = J(this), o = e.match(de) || []; t = o[n++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(r === _e || "boolean" === r) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                    })
                }, hasClass: function (e) {
                    for (var t = " " + e + " ", r = 0, n = this.length; n > r; r++)if (1 === this[r].nodeType && (" " + this[r].className + " ").replace(st, " ").indexOf(t) >= 0)return !0;
                    return !1
                }
            });
            var ut = /\r/g;
            J.fn.extend({
                val: function (e) {
                    var t, r, n, i = this[0];
                    {
                        if (arguments.length)return n = J.isFunction(e), this.each(function (r) {
                            var i;
                            1 === this.nodeType && (i = n ? e.call(this, r, J(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : J.isArray(i) && (i = J.map(i, function (e) {
                                return null == e ? "" : e + ""
                            })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i)return t = J.valHooks[i.type] || J.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(i, "value")) ? r : (r = i.value, "string" == typeof r ? r.replace(ut, "") : null == r ? "" : r)
                    }
                }
            }), J.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = J.find.attr(e, "value");
                            return null != t ? t : J.trim(J.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, r, n = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : n.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (r = n[u], (r.selected || u === i) && ($.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !J.nodeName(r.parentNode, "optgroup"))) {
                                if (t = J(r).val(), o)return t;
                                a.push(t)
                            }
                            return a
                        }, set: function (e, t) {
                            for (var r, n, i = e.options, o = J.makeArray(t), a = i.length; a--;)n = i[a], (n.selected = J.inArray(n.value, o) >= 0) && (r = !0);
                            return r || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), J.each(["radio", "checkbox"], function () {
                J.valHooks[this] = {
                    set: function (e, t) {
                        return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
                    }
                }, $.checkOn || (J.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                J.fn[t] = function (e, r) {
                    return arguments.length > 0 ? this.on(t, null, e, r) : this.trigger(t)
                }
            }), J.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }, bind: function (e, t, r) {
                    return this.on(e, null, t, r)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, r, n) {
                    return this.on(t, e, r, n)
                }, undelegate: function (e, t, r) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
                }
            });
            var ct = J.now(), lt = /\?/;
            J.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, J.parseXML = function (e) {
                var t, r;
                if (!e || "string" != typeof e)return null;
                try {
                    r = new DOMParser, t = r.parseFromString(e, "text/xml")
                } catch (n) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
            };
            var ht = /#.*$/, pt = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mt = /^(?:GET|HEAD)$/, gt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {}, bt = "*/".concat("*"), wt = e.location.href, St = vt.exec(wt.toLowerCase()) || [];
            J.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt,
                    type: "GET",
                    isLocal: ft.test(St[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": bt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? N(N(e, J.ajaxSettings), t) : N(J.ajaxSettings, e)
                },
                ajaxPrefilter: F(yt),
                ajaxTransport: F(xt),
                ajax: function (e, t) {
                    function r(e, t, r, a) {
                        var u, l, v, y, b, S = t;
                        2 !== x && (x = 2, s && clearTimeout(s), n = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, r && (y = B(h, w, r)), y = I(h, y, w, u), u ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (J.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (J.etag[i] = b)), 204 === e || "HEAD" === h.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, l = y.data, v = y.error, u = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || S) + "", u ? f.resolveWith(p, [l, S, w]) : f.rejectWith(p, [w, S, v]), w.statusCode(g), g = void 0, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, h, u ? l : v]), m.fireWith(p, [w, S]), c && (d.trigger("ajaxComplete", [w, h]), --J.active || J.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var n, i, o, a, s, u, c, l, h = J.ajaxSetup({}, t), p = h.context || h, d = h.context && (p.nodeType || p.jquery) ? J(p) : J.event, f = J.Deferred(), m = J.Callbacks("once memory"), g = h.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === x) {
                                if (!a)for (a = {}; t = dt.exec(o);)a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? o : null
                        },
                        setRequestHeader: function (e, t) {
                            var r = e.toLowerCase();
                            return x || (e = y[r] = y[r] || e, v[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return x || (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)if (2 > x)for (t in e)g[t] = [g[t], e[t]]; else w.always(e[w.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || b;
                            return n && n.abort(t), r(0, t), this
                        }
                    };
                    if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((e || h.url || wt) + "").replace(ht, "").replace(gt, St[1] + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = J.trim(h.dataType || "*").toLowerCase().match(de) || [""], null == h.crossDomain && (u = vt.exec(h.url.toLowerCase()), h.crossDomain = !(!u || u[1] === St[1] && u[2] === St[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), V(yt, h, t, w), 2 === x)return w;
                    c = J.event && h.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !mt.test(h.type), i = h.url, h.hasContent || (h.data && (i = h.url += (lt.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = pt.test(i) ? i.replace(pt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)), h.ifModified && (J.lastModified[i] && w.setRequestHeader("If-Modified-Since", J.lastModified[i]), J.etag[i] && w.setRequestHeader("If-None-Match", J.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : h.accepts["*"]);
                    for (l in h.headers)w.setRequestHeader(l, h.headers[l]);
                    if (h.beforeSend && (h.beforeSend.call(p, w, h) === !1 || 2 === x))return w.abort();
                    b = "abort";
                    for (l in{success: 1, error: 1, complete: 1})w[l](h[l]);
                    if (n = V(xt, h, t, w)) {
                        w.readyState = 1, c && d.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (s = setTimeout(function () {
                            w.abort("timeout")
                        }, h.timeout));
                        try {
                            x = 1, n.send(v, r)
                        } catch (S) {
                            if (!(2 > x))throw S;
                            r(-1, S)
                        }
                    } else r(-1, "No Transport");
                    return w
                },
                getJSON: function (e, t, r) {
                    return J.get(e, t, r, "json")
                },
                getScript: function (e, t) {
                    return J.get(e, void 0, t, "script")
                }
            }), J.each(["get", "post"], function (e, t) {
                J[t] = function (e, r, n, i) {
                    return J.isFunction(r) && (i = i || n, n = r, r = void 0), J.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: r,
                        success: n
                    })
                }
            }), J._evalUrl = function (e) {
                return J.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, J.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return J.isFunction(e) ? this.each(function (t) {
                        J(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                }, wrapInner: function (e) {
                    return J.isFunction(e) ? this.each(function (t) {
                        J(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = J(this), r = t.contents();
                        r.length ? r.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = J.isFunction(e);
                    return this.each(function (r) {
                        J(this).wrapAll(t ? e.call(this, r) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), J.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, J.expr.filters.visible = function (e) {
                return !J.expr.filters.hidden(e)
            };
            var Mt = /%20/g, Tt = /\[\]$/, _t = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i, Ct = /^(?:input|select|textarea|keygen)/i;
            J.param = function (e, t) {
                var r, n = [], i = function (e, t) {
                    t = J.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e))J.each(e, function () {
                    i(this.name, this.value)
                }); else for (r in e)U(r, e[r], t, i);
                return n.join("&").replace(Mt, "+")
            }, J.fn.extend({
                serialize: function () {
                    return J.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = J.prop(this, "elements");
                        return e ? J.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !J(this).is(":disabled") && Ct.test(this.nodeName) && !Et.test(e) && (this.checked || !Te.test(e))
                    }).map(function (e, t) {
                        var r = J(this).val();
                        return null == r ? null : J.isArray(r) ? J.map(r, function (e) {
                            return {name: t.name, value: e.replace(_t, "\r\n")}
                        }) : {name: t.name, value: r.replace(_t, "\r\n")}
                    }).get()
                }
            }), J.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {
                }
            };
            var At = 0, Lt = {}, Pt = {0: 200, 1223: 204}, kt = J.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function () {
                for (var e in Lt)Lt[e]()
            }), $.cors = !!kt && "withCredentials" in kt, $.ajax = kt = !!kt, J.ajaxTransport(function (e) {
                var t;
                return $.cors || kt && !e.crossDomain ? {
                    send: function (r, n) {
                        var i, o = e.xhr(), a = ++At;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (i in r)o.setRequestHeader(i, r[i]);
                        t = function (e) {
                            return function () {
                                t && (delete Lt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? n(o.status, o.statusText) : n(Pt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = Lt[a] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (s) {
                            if (t)throw s
                        }
                    }, abort: function () {
                        t && t()
                    }
                } : void 0
            }), J.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (e) {
                        return J.globalEval(e), e
                    }
                }
            }), J.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), J.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, r;
                    return {
                        send: function (n, i) {
                            t = J("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", r = function (e) {
                                t.remove(), r = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), Q.head.appendChild(t[0])
                        }, abort: function () {
                            r && r()
                        }
                    }
                }
            });
            var Dt = [], Rt = /(=)\?(?=&|$)|\?\?/;
            J.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Dt.pop() || J.expando + "_" + ct++;
                    return this[e] = !0, e
                }
            }), J.ajaxPrefilter("json jsonp", function (t, r, n) {
                var i, o, a, s = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Rt, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return a || J.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                    a = arguments
                }, n.always(function () {
                    e[i] = o, t[i] && (t.jsonpCallback = r.jsonpCallback, Dt.push(i)), a && J.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), J.parseHTML = function (e, t, r) {
                if (!e || "string" != typeof e)return null;
                "boolean" == typeof t && (r = t, t = !1), t = t || Q;
                var n = ae.exec(e), i = !r && [];
                return n ? [t.createElement(n[1])] : (n = J.buildFragment([e], t, i), i && i.length && J(i).remove(), J.merge([], n.childNodes))
            };
            var Ot = J.fn.load;
            J.fn.load = function (e, t, r) {
                if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
                var n, i, o, a = this, s = e.indexOf(" ");
                return s >= 0 && (n = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && J.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, a.html(n ? J("<div>").append(J.parseHTML(e)).find(n) : e)
                }).complete(r && function (e, t) {
                        a.each(r, o || [e.responseText, t, e])
                    }), this
            }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                J.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), J.expr.filters.animated = function (e) {
                return J.grep(J.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var Ft = e.document.documentElement;
            J.offset = {
                setOffset: function (e, t, r) {
                    var n, i, o, a, s, u, c, l = J.css(e, "position"), h = J(e), p = {};
                    "static" === l && (e.style.position = "relative"), s = h.offset(), o = J.css(e, "top"), u = J.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (n = h.position(), a = n.top, i = n.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), J.isFunction(t) && (t = t.call(e, r, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : h.css(p)
                }
            }, J.fn.extend({
                offset: function (e) {
                    if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                        J.offset.setOffset(this, e, t)
                    });
                    var t, r, n = this[0], i = {top: 0, left: 0}, o = n && n.ownerDocument;
                    if (o)return t = o.documentElement, J.contains(t, n) ? (typeof n.getBoundingClientRect !== _e && (i = n.getBoundingClientRect()), r = z(o), {
                        top: i.top + r.pageYOffset - t.clientTop,
                        left: i.left + r.pageXOffset - t.clientLeft
                    }) : i
                }, position: function () {
                    if (this[0]) {
                        var e, t, r = this[0], n = {top: 0, left: 0};
                        return "fixed" === J.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (n = e.offset()), n.top += J.css(e[0], "borderTopWidth", !0), n.left += J.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - J.css(r, "marginTop", !0),
                            left: t.left - n.left - J.css(r, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || Ft; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");)e = e.offsetParent;
                        return e || Ft
                    })
                }
            }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
                var n = "pageYOffset" === r;
                J.fn[t] = function (i) {
                    return ge(this, function (t, i, o) {
                        var a = z(t);
                        return void 0 === o ? a ? a[r] : t[i] : void(a ? a.scrollTo(n ? e.pageXOffset : o, n ? o : e.pageYOffset) : t[i] = o)
                    }, t, i, arguments.length, null)
                }
            }), J.each(["top", "left"], function (e, t) {
                J.cssHooks[t] = S($.pixelPosition, function (e, r) {
                    return r ? (r = w(e, t), Ge.test(r) ? J(e).position()[t] + "px" : r) : void 0
                })
            }), J.each({Height: "height", Width: "width"}, function (e, t) {
                J.each({padding: "inner" + e, content: t, "": "outer" + e}, function (r, n) {
                    J.fn[n] = function (n, i) {
                        var o = arguments.length && (r || "boolean" != typeof n), a = r || (n === !0 || i === !0 ? "margin" : "border");
                        return ge(this, function (t, r, n) {
                            var i;
                            return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === n ? J.css(t, r, a) : J.style(t, r, n, a)
                        }, t, o ? n : void 0, o, null)
                    }
                })
            }), J.fn.size = function () {
                return this.length
            }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return J
            });
            var Vt = e.jQuery, Nt = e.$;
            return J.noConflict = function (t) {
                return e.$ === J && (e.$ = Nt), t && e.jQuery === J && (e.jQuery = Vt), J
            }, typeof t === _e && (e.jQuery = e.$ = J), J
        })
    }, {}], 12: [function (e, t, r) {
        !function (t) {
            "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof r ? e("jquery") : window.jQuery || window.Zepto)
        }(function (e) {
            var t, r, n, i, o, a, s = "Close", u = "BeforeClose", c = "AfterClose", l = "BeforeAppend", h = "MarkupParse", p = "Open", d = "Change", f = "mfp", m = "." + f, g = "mfp-ready", v = "mfp-removing", y = "mfp-prevent-close", x = function () {
            }, b = !!window.jQuery, w = e(window), S = function (e, r) {
                t.ev.on(f + e + m, r)
            }, M = function (t, r, n, i) {
                var o = document.createElement("div");
                return o.className = "mfp-" + t, n && (o.innerHTML = n), i ? r && r.appendChild(o) : (o = e(o), r && o.appendTo(r)), o
            }, T = function (r, n) {
                t.ev.triggerHandler(f + r, n), t.st.callbacks && (r = r.charAt(0).toLowerCase() + r.slice(1), t.st.callbacks[r] && t.st.callbacks[r].apply(t, e.isArray(n) ? n : [n]))
            }, _ = function (r) {
                return r === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = r), t.currTemplate.closeBtn
            }, E = function () {
                e.magnificPopup.instance || (t = new x, t.init(), e.magnificPopup.instance = t)
            }, C = function () {
                var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)return !0;
                for (; t.length;)if (t.pop() + "Transition" in e)return !0;
                return !1
            };
            x.prototype = {
                constructor: x, init: function () {
                    var r = navigator.appVersion;
                    t.isIE7 = -1 !== r.indexOf("MSIE 7."), t.isIE8 = -1 !== r.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(r), t.isIOS = /iphone|ipad|ipod/gi.test(r), t.supportsTransition = C(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
                }, open: function (r) {
                    var i;
                    if (r.isObj === !1) {
                        t.items = r.items.toArray(), t.index = 0;
                        var a, s = r.items;
                        for (i = 0; i < s.length; i++)if (a = s[i], a.parsed && (a = a.el[0]), a === r.el[0]) {
                            t.index = i;
                            break
                        }
                    } else t.items = e.isArray(r.items) ? r.items : [r.items], t.index = r.index || 0;
                    if (t.isOpen)return void t.updateItemHTML();
                    t.types = [], o = "", r.mainEl && r.mainEl.length ? t.ev = r.mainEl.eq(0) : t.ev = n, r.key ? (t.popupsCache[r.key] || (t.popupsCache[r.key] = {}), t.currTemplate = t.popupsCache[r.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, r), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = M("bg").on("click" + m, function () {
                        t.close()
                    }), t.wrap = M("wrap").attr("tabindex", -1).on("click" + m, function (e) {
                        t._checkIfClose(e.target) && t.close()
                    }), t.container = M("container", t.wrap)), t.contentContainer = M("content"), t.st.preloader && (t.preloader = M("preloader", t.container, t.st.tLoading));
                    var u = e.magnificPopup.modules;
                    for (i = 0; i < u.length; i++) {
                        var c = u[i];
                        c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
                    }
                    T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (S(h, function (e, t, r, n) {
                        r.close_replaceWith = _(n.type)
                    }), o += " mfp-close-btn-in") : t.wrap.append(_())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: "hidden",
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: w.scrollTop(),
                        position: "absolute"
                    }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }), t.st.enableEscapeKey && n.on("keyup" + m, function (e) {
                        27 === e.keyCode && t.close()
                    }), w.on("resize" + m, function () {
                        t.updateSize()
                    }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
                    var l = t.wH = w.height(), d = {};
                    if (t.fixedContentPos && t._hasScrollBar(l)) {
                        var f = t._getScrollbarSize();
                        f && (d.marginRight = f)
                    }
                    t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : d.overflow = "hidden");
                    var v = t.st.mainClass;
                    return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), T("BuildControls"), e("html").css(d), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                        t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), n.on("focusin" + m, t._onFocusIn)
                    }, 16), t.isOpen = !0, t.updateSize(l), T(p), r
                }, close: function () {
                    t.isOpen && (T(u), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function () {
                        t._close()
                    }, t.st.removalDelay)) : t._close())
                }, _close: function () {
                    T(s);
                    var r = v + " " + g + " ";
                    if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (r += t.st.mainClass + " "), t._removeClassFromMFP(r), t.fixedContentPos) {
                        var i = {marginRight: ""};
                        t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
                    }
                    n.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(c)
                }, updateSize: function (e) {
                    if (t.isIOS) {
                        var r = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * r;
                        t.wrap.css("height", n), t.wH = n
                    } else t.wH = e || w.height();
                    t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
                }, updateItemHTML: function () {
                    var r = t.items[t.index];
                    t.contentContainer.detach(), t.content && t.content.detach(), r.parsed || (r = t.parseEl(t.index));
                    var n = r.type;
                    if (T("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = r, !t.currTemplate[n]) {
                        var o = t.st[n] ? t.st[n].markup : !1;
                        T("FirstMarkupParse", o), o ? t.currTemplate[n] = e(o) : t.currTemplate[n] = !0
                    }
                    i && i !== r.type && t.container.removeClass("mfp-" + i + "-holder");
                    var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](r, t.currTemplate[n]);
                    t.appendContent(a, n), r.preloaded = !0, T(d, r), i = r.type, t.container.prepend(t.contentContainer), T("AfterChange")
                }, appendContent: function (e, r) {
                    t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(_()) : t.content = e : t.content = "", T(l), t.container.addClass("mfp-" + r + "-holder"), t.contentContainer.append(t.content)
                }, parseEl: function (r) {
                    var n, i = t.items[r];
                    if (i.tagName ? i = {
                            el: e(i)
                        } : (n = i.type, i = {data: i, src: i.src}), i.el) {
                        for (var o = t.types, a = 0; a < o.length; a++)if (i.el.hasClass("mfp-" + o[a])) {
                            n = o[a];
                            break
                        }
                        i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
                    }
                    return i.type = n || t.st.type || "inline", i.index = r, i.parsed = !0, t.items[r] = i, T("ElementParse", i), t.items[r]
                }, addGroup: function (e, r) {
                    var n = function (n) {
                        n.mfpEl = this, t._openClick(n, e, r)
                    };
                    r || (r = {});
                    var i = "click.magnificPopup";
                    r.mainEl = e, r.items ? (r.isObj = !0, e.off(i).on(i, n)) : (r.isObj = !1, r.delegate ? e.off(i).on(i, r.delegate, n) : (r.items = e, e.off(i).on(i, n)))
                }, _openClick: function (r, n, i) {
                    var o = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
                    if (o || !(2 === r.which || r.ctrlKey || r.metaKey || r.altKey || r.shiftKey)) {
                        var a = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                        if (a)if (e.isFunction(a)) {
                            if (!a.call(t))return !0
                        } else if (w.width() < a)return !0;
                        r.type && (r.preventDefault(), t.isOpen && r.stopPropagation()), i.el = e(r.mfpEl), i.delegate && (i.items = n.find(i.delegate)), t.open(i)
                    }
                }, updateStatus: function (e, n) {
                    if (t.preloader) {
                        r !== e && t.container.removeClass("mfp-s-" + r), n || "loading" !== e || (n = t.st.tLoading);
                        var i = {status: e, text: n};
                        T("UpdateStatus", i), e = i.status, n = i.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
                            e.stopImmediatePropagation()
                        }), t.container.addClass("mfp-s-" + e), r = e
                    }
                }, _checkIfClose: function (r) {
                    if (!e(r).hasClass(y)) {
                        var n = t.st.closeOnContentClick, i = t.st.closeOnBgClick;
                        if (n && i)return !0;
                        if (!t.content || e(r).hasClass("mfp-close") || t.preloader && r === t.preloader[0])return !0;
                        if (r === t.content[0] || e.contains(t.content[0], r)) {
                            if (n)return !0
                        } else if (i && e.contains(document, r))return !0;
                        return !1
                    }
                }, _addClassToMFP: function (e) {
                    t.bgOverlay.addClass(e), t.wrap.addClass(e)
                }, _removeClassFromMFP: function (e) {
                    this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
                }, _hasScrollBar: function (e) {
                    return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || w.height())
                }, _setFocus: function () {
                    (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
                }, _onFocusIn: function (r) {
                    return r.target === t.wrap[0] || e.contains(t.wrap[0], r.target) ? void 0 : (t._setFocus(), !1)
                }, _parseMarkup: function (t, r, n) {
                    var i;
                    n.data && (r = e.extend(n.data, r)), T(h, [t, r, n]), e.each(r, function (e, r) {
                        if (void 0 === r || r === !1)return !0;
                        if (i = e.split("_"), i.length > 1) {
                            var n = t.find(m + "-" + i[0]);
                            if (n.length > 0) {
                                var o = i[1];
                                "replaceWith" === o ? n[0] !== r[0] && n.replaceWith(r) : "img" === o ? n.is("img") ? n.attr("src", r) : n.replaceWith('<img src="' + r + '" class="' + n.attr("class") + '" />') : n.attr(i[1], r)
                            }
                        } else t.find(m + "-" + e).html(r)
                    })
                }, _getScrollbarSize: function () {
                    if (void 0 === t.scrollbarSize) {
                        var e = document.createElement("div");
                        e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                    }
                    return t.scrollbarSize
                }
            }, e.magnificPopup = {
                instance: null,
                proto: x.prototype,
                modules: [],
                open: function (t, r) {
                    return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = r || 0, this.instance.open(t)
                },
                close: function () {
                    return e.magnificPopup.instance && e.magnificPopup.instance.close()
                },
                registerModule: function (t, r) {
                    r.options && (e.magnificPopup.defaults[t] = r.options), e.extend(this.proto, r.proto), this.modules.push(t)
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0
                }
            }, e.fn.magnificPopup = function (r) {
                E();
                var n = e(this);
                if ("string" == typeof r)if ("open" === r) {
                    var i, o = b ? n.data("magnificPopup") : n[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                    o.items ? i = o.items[a] : (i = n, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), t._openClick({mfpEl: i}, n, o)
                } else t.isOpen && t[r].apply(t, Array.prototype.slice.call(arguments, 1)); else r = e.extend(!0, {}, r), b ? n.data("magnificPopup", r) : n[0].magnificPopup = r, t.addGroup(n, r);
                return n
            };
            var A, L, P, k = "inline", D = function () {
                P && (L.after(P.addClass(A)).detach(), P = null)
            };
            e.magnificPopup.registerModule(k, {
                options: {
                    hiddenClass: "hide",
                    markup: "",
                    tNotFound: "Content not found"
                }, proto: {
                    initInline: function () {
                        t.types.push(k), S(s + "." + k, function () {
                            D()
                        })
                    }, getInline: function (r, n) {
                        if (D(), r.src) {
                            var i = t.st.inline, o = e(r.src);
                            if (o.length) {
                                var a = o[0].parentNode;
                                a && a.tagName && (L || (A = i.hiddenClass, L = M(A), A = "mfp-" + A), P = o.after(L).detach().removeClass(A)), t.updateStatus("ready")
                            } else t.updateStatus("error", i.tNotFound), o = e("<div>");
                            return r.inlineElement = o, o
                        }
                        return t.updateStatus("ready"), t._parseMarkup(n, {}, r), n
                    }
                }
            });
            var R, O = "ajax", F = function () {
                R && e(document.body).removeClass(R)
            }, V = function () {
                F(), t.req && t.req.abort()
            };
            e.magnificPopup.registerModule(O, {
                options: {
                    settings: null,
                    cursor: "mfp-ajax-cur",
                    tError: '<a href="%url%">The content</a> could not be loaded.'
                }, proto: {
                    initAjax: function () {
                        t.types.push(O), R = t.st.ajax.cursor, S(s + "." + O, V), S("BeforeChange." + O, V)
                    }, getAjax: function (r) {
                        R && e(document.body).addClass(R), t.updateStatus("loading");
                        var n = e.extend({
                            url: r.src, success: function (n, i, o) {
                                var a = {data: n, xhr: o};
                                T("ParseAjax", a), t.appendContent(e(a.data), O), r.finished = !0, F(), t._setFocus(), setTimeout(function () {
                                    t.wrap.addClass(g)
                                }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                            }, error: function () {
                                F(), r.finished = r.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                            }
                        }, t.st.ajax.settings);
                        return t.req = e.ajax(n), ""
                    }
                }
            });
            var N, B = function (r) {
                if (r.data && void 0 !== r.data.title)return r.data.title;
                var n = t.st.image.titleSrc;
                if (n) {
                    if (e.isFunction(n))return n.call(t, r);
                    if (r.el)return r.el.attr(n) || ""
                }
                return ""
            };
            e.magnificPopup.registerModule("image", {
                options: {
                    markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                    cursor: "mfp-zoom-out-cur",
                    titleSrc: "title",
                    verticalFit: !0,
                    tError: '<a href="%url%">The image</a> could not be loaded.'
                }, proto: {
                    initImage: function () {
                        var r = t.st.image, n = ".image";
                        t.types.push("image"), S(p + n, function () {
                            "image" === t.currItem.type && r.cursor && e(document.body).addClass(r.cursor)
                        }), S(s + n, function () {
                            r.cursor && e(document.body).removeClass(r.cursor), w.off("resize" + m)
                        }), S("Resize" + n, t.resizeImage), t.isLowIE && S("AfterChange", t.resizeImage)
                    }, resizeImage: function () {
                        var e = t.currItem;
                        if (e && e.img && t.st.image.verticalFit) {
                            var r = 0;
                            t.isLowIE && (r = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - r)
                        }
                    }, _onImageHasSize: function (e) {
                        e.img && (e.hasSize = !0, N && clearInterval(N), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                    }, findImageSize: function (e) {
                        var r = 0, n = e.img[0], i = function (o) {
                            N && clearInterval(N), N = setInterval(function () {
                                return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (r > 200 && clearInterval(N), r++, void(3 === r ? i(10) : 40 === r ? i(50) : 100 === r && i(500)))
                            }, o)
                        };
                        i(1)
                    }, getImage: function (r, n) {
                        var i = 0, o = function () {
                            r && (r.img[0].complete ? (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("ready")), r.hasSize = !0, r.loaded = !0, T("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(o, 100) : a()))
                        }, a = function () {
                            r && (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("error", s.tError.replace("%url%", r.src))), r.hasSize = !0, r.loaded = !0, r.loadError = !0)
                        }, s = t.st.image, u = n.find(".mfp-img");
                        if (u.length) {
                            var c = document.createElement("img");
                            c.className = "mfp-img", r.el && r.el.find("img").length && (c.alt = r.el.find("img").attr("alt")), r.img = e(c).on("load.mfploader", o).on("error.mfploader", a), c.src = r.src, u.is("img") && (r.img = r.img.clone()), c = r.img[0], c.naturalWidth > 0 ? r.hasSize = !0 : c.width || (r.hasSize = !1)
                        }
                        return t._parseMarkup(n, {
                            title: B(r),
                            img_replaceWith: r.img
                        }, r), t.resizeImage(), r.hasSize ? (N && clearInterval(N), r.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", r.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), r.loading = !0, r.hasSize || (r.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(r)), n)
                    }
                }
            });
            var I, U = function () {
                return void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I
            };
            e.magnificPopup.registerModule("zoom", {
                options: {
                    enabled: !1,
                    easing: "ease-in-out",
                    duration: 300,
                    opener: function (e) {
                        return e.is("img") ? e : e.find("img")
                    }
                }, proto: {
                    initZoom: function () {
                        var e, r = t.st.zoom, n = ".zoom";
                        if (r.enabled && t.supportsTransition) {
                            var i, o, a = r.duration, c = function (e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + r.duration / 1e3 + "s " + r.easing, i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                }, o = "transition";
                                return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n, t.css(i), t
                            }, l = function () {
                                t.content.css("visibility", "visible")
                            };
                            S("BuildControls" + n, function () {
                                if (t._allowZoom()) {
                                    if (clearTimeout(i), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e)return void l();
                                    o = c(e), o.css(t._getOffset()), t.wrap.append(o), i = setTimeout(function () {
                                        o.css(t._getOffset(!0)), i = setTimeout(function () {
                                            l(), setTimeout(function () {
                                                o.remove(), e = o = null, T("ZoomAnimationEnded")
                                            }, 16)
                                        }, a)
                                    }, 16)
                                }
                            }), S(u + n, function () {
                                if (t._allowZoom()) {
                                    if (clearTimeout(i), t.st.removalDelay = a, !e) {
                                        if (e = t._getItemToZoom(), !e)return;
                                        o = c(e)
                                    }
                                    o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
                                        o.css(t._getOffset())
                                    }, 16)
                                }
                            }), S(s + n, function () {
                                t._allowZoom() && (l(), o && o.remove(), e = null)
                            })
                        }
                    }, _allowZoom: function () {
                        return "image" === t.currItem.type
                    }, _getItemToZoom: function () {
                        return t.currItem.hasSize ? t.currItem.img : !1
                    }, _getOffset: function (r) {
                        var n;
                        n = r ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                        var i = n.offset(), o = parseInt(n.css("padding-top"), 10), a = parseInt(n.css("padding-bottom"), 10);
                        i.top -= e(window).scrollTop() - o;
                        var s = {width: n.width(), height: (b ? n.innerHeight() : n[0].offsetHeight) - a - o};
                        return U() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
                    }
                }
            });
            var z = "iframe", G = "//about:blank", j = function (e) {
                if (t.currTemplate[z]) {
                    var r = t.currTemplate[z].find("iframe");
                    r.length && (e || (r[0].src = G), t.isIE8 && r.css("display", e ? "block" : "none"))
                }
            };
            e.magnificPopup.registerModule(z, {
                options: {
                    markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                    srcAction: "iframe_src",
                    patterns: {
                        youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                        vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                        gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
                    }
                }, proto: {
                    initIframe: function () {
                        t.types.push(z), S("BeforeChange", function (e, t, r) {
                            t !== r && (t === z ? j() : r === z && j(!0))
                        }), S(s + "." + z, function () {
                            j()
                        })
                    }, getIframe: function (r, n) {
                        var i = r.src, o = t.st.iframe;
                        e.each(o.patterns, function () {
                            return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                        });
                        var a = {};
                        return o.srcAction && (a[o.srcAction] = i), t._parseMarkup(n, a, r), t.updateStatus("ready"), n
                    }
                }
            });
            var H = function (e) {
                var r = t.items.length;
                return e > r - 1 ? e - r : 0 > e ? r + e : e
            }, W = function (e, t, r) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, r)
            };
            e.magnificPopup.registerModule("gallery", {
                options: {
                    enabled: !1,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    preload: [0, 2],
                    navigateByImgClick: !0,
                    arrows: !0,
                    tPrev: "Previous (Left arrow key)",
                    tNext: "Next (Right arrow key)",
                    tCounter: "%curr% of %total%"
                }, proto: {
                    initGallery: function () {
                        var r = t.st.gallery, i = ".mfp-gallery", a = Boolean(e.fn.mfpFastClick);
                        return t.direction = !0, r && r.enabled ? (o += " mfp-gallery", S(p + i, function () {
                            r.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                                return t.items.length > 1 ? (t.next(), !1) : void 0
                            }), n.on("keydown" + i, function (e) {
                                37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                            })
                        }), S("UpdateStatus" + i, function (e, r) {
                            r.text && (r.text = W(r.text, t.currItem.index, t.items.length))
                        }), S(h + i, function (e, n, i, o) {
                            var a = t.items.length;
                            i.counter = a > 1 ? W(r.tCounter, o.index, a) : ""
                        }), S("BuildControls" + i, function () {
                            if (t.items.length > 1 && r.arrows && !t.arrowLeft) {
                                var n = r.arrowMarkup, i = t.arrowLeft = e(n.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(y), o = t.arrowRight = e(n.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(y), s = a ? "mfpFastClick" : "click";
                                i[s](function () {
                                    t.prev()
                                }), o[s](function () {
                                    t.next()
                                }), t.isIE7 && (M("b", i[0], !1, !0), M("a", i[0], !1, !0), M("b", o[0], !1, !0), M("a", o[0], !1, !0)), t.container.append(i.add(o))
                            }
                        }), S(d + i, function () {
                            t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                                t.preloadNearbyImages(), t._preloadTimeout = null
                            }, 16)
                        }), void S(s + i, function () {
                            n.off(i), t.wrap.off("click" + i), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                        })) : !1
                    }, next: function () {
                        t.direction = !0, t.index = H(t.index + 1), t.updateItemHTML()
                    }, prev: function () {
                        t.direction = !1, t.index = H(t.index - 1), t.updateItemHTML()
                    }, goTo: function (e) {
                        t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                    }, preloadNearbyImages: function () {
                        var e, r = t.st.gallery.preload, n = Math.min(r[0], t.items.length), i = Math.min(r[1], t.items.length);
                        for (e = 1; e <= (t.direction ? i : n); e++)t._preloadItem(t.index + e);
                        for (e = 1; e <= (t.direction ? n : i); e++)t._preloadItem(t.index - e)
                    }, _preloadItem: function (r) {
                        if (r = H(r), !t.items[r].preloaded) {
                            var n = t.items[r];
                            n.parsed || (n = t.parseEl(r)), T("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                                n.hasSize = !0
                            }).on("error.mfploader", function () {
                                n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
                            }).attr("src", n.src)), n.preloaded = !0
                        }
                    }
                }
            });
            var X = "retina";
            e.magnificPopup.registerModule(X, {
                options: {
                    replaceSrc: function (e) {
                        return e.src.replace(/\.\w+$/, function (e) {
                            return "@2x" + e
                        })
                    }, ratio: 1
                }, proto: {
                    initRetina: function () {
                        if (window.devicePixelRatio > 1) {
                            var e = t.st.retina, r = e.ratio;
                            r = isNaN(r) ? r() : r, r > 1 && (S("ImageHasSize." + X, function (e, t) {
                                t.img.css({"max-width": t.img[0].naturalWidth / r, width: "100%"})
                            }), S("ElementParse." + X, function (t, n) {
                                n.src = e.replaceSrc(n, r)
                            }))
                        }
                    }
                }
            }), function () {
                var t = 1e3, r = "ontouchstart" in window, n = function () {
                    w.off("touchmove" + o + " touchend" + o)
                }, i = "mfpFastClick", o = "." + i;
                e.fn.mfpFastClick = function (i) {
                    return e(this).each(function () {
                        var a, s = e(this);
                        if (r) {
                            var u, c, l, h, p, d;
                            s.on("touchstart" + o, function (e) {
                                h = !1, d = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, l = p.clientY, w.on("touchmove" + o, function (e) {
                                    p = e.originalEvent ? e.originalEvent.touches : e.touches, d = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - l) > 10) && (h = !0, n())
                                }).on("touchend" + o, function (e) {
                                    n(), h || d > 1 || (a = !0, e.preventDefault(), clearTimeout(u), u = setTimeout(function () {
                                        a = !1
                                    }, t), i())
                                })
                            })
                        }
                        s.on("click" + o, function () {
                            a || i()
                        })
                    })
                }, e.fn.destroyMfpFastClick = function () {
                    e(this).off("touchstart" + o + " click" + o), r && w.off("touchmove" + o + " touchend" + o)
                }
            }(), E()
        })
    }, {jquery: 11}], 13: [function (e, t, r) {
        t.exports = function (e) {
            function t(t) {
                this.object = t, this.target = new e.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25;
                var r, n, i = this, o = 1e-6, a = 0, s = 0, u = 1, c = new e.Vector3, l = !1;
                this.getPolarAngle = function () {
                    return n
                }, this.getAzimuthalAngle = function () {
                    return r
                }, this.rotateLeft = function (e) {
                    s -= e
                }, this.rotateUp = function (e) {
                    a -= e
                }, this.panLeft = function () {
                    var t = new e.Vector3;
                    return function (e) {
                        var r = this.object.matrix.elements;
                        t.set(r[0], r[1], r[2]), t.multiplyScalar(-e), c.add(t)
                    }
                }(), this.panUp = function () {
                    var t = new e.Vector3;
                    return function (e) {
                        var r = this.object.matrix.elements;
                        t.set(r[4], r[5], r[6]), t.multiplyScalar(e), c.add(t)
                    }
                }(), this.pan = function (t, r, n, o) {
                    if (i.object instanceof e.PerspectiveCamera) {
                        var a = i.object.position, s = a.clone().sub(i.target), u = s.length();
                        u *= Math.tan(i.object.fov / 2 * Math.PI / 180), i.panLeft(2 * t * u / o), i.panUp(2 * r * u / o)
                    } else i.object instanceof e.OrthographicCamera ? (i.panLeft(t * (i.object.right - i.object.left) / n), i.panUp(r * (i.object.top - i.object.bottom) / o)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
                }, this.dollyIn = function (t) {
                    i.object instanceof e.PerspectiveCamera ? u /= t : i.object instanceof e.OrthographicCamera ? (i.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)), i.object.updateProjectionMatrix(), l = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
                }, this.dollyOut = function (t) {
                    i.object instanceof e.PerspectiveCamera ? u *= t : i.object instanceof e.OrthographicCamera ? (i.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)), i.object.updateProjectionMatrix(), l = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
                }, this.update = function () {
                    var i = new e.Vector3, h = (new e.Quaternion).setFromUnitVectors(t.up, new e.Vector3(0, 1, 0)), p = h.clone().inverse(), d = new e.Vector3, f = new e.Quaternion;
                    return function () {
                        var e = this.object.position;
                        i.copy(e).sub(this.target), i.applyQuaternion(h), r = Math.atan2(i.x, i.z), n = Math.atan2(Math.sqrt(i.x * i.x + i.z * i.z), i.y), r += s, n += a, r = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, r)), n = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, n)), n = Math.max(o, Math.min(Math.PI - o, n));
                        var t = i.length() * u;
                        return t = Math.max(this.minDistance, Math.min(this.maxDistance, t)), this.target.add(c), i.x = t * Math.sin(n) * Math.sin(r), i.y = t * Math.cos(n), i.z = t * Math.sin(n) * Math.cos(r), i.applyQuaternion(p), e.copy(this.target).add(i), this.object.lookAt(this.target), this.enableDamping === !0 ? (s *= 1 - this.dampingFactor, a *= 1 - this.dampingFactor) : (s = 0, a = 0), u = 1, c.set(0, 0, 0), l || d.distanceToSquared(this.object.position) > o || 8 * (1 - f.dot(this.object.quaternion)) > o ? (d.copy(this.object.position), f.copy(this.object.quaternion), l = !1, !0) : !1
                    }
                }()
            }

            function r(r, n) {
                function i(e, t) {
                    var r = v.domElement === document ? v.domElement.body : v.domElement;
                    g.pan(e, t, r.clientWidth, r.clientHeight)
                }

                function o() {
                    return 2 * Math.PI / 60 / 60 * v.autoRotateSpeed
                }

                function a() {
                    return Math.pow(.95, v.zoomSpeed)
                }

                function s(e) {
                    if (v.enabled !== !1) {
                        if (e.preventDefault(), e.button === v.mouseButtons.ORBIT) {
                            if (v.enableRotate === !1)return;
                            A = C.ROTATE, y.set(e.clientX, e.clientY)
                        } else if (e.button === v.mouseButtons.ZOOM) {
                            if (v.enableZoom === !1)return;
                            A = C.DOLLY, T.set(e.clientX, e.clientY)
                        } else if (e.button === v.mouseButtons.PAN) {
                            if (v.enablePan === !1)return;
                            A = C.PAN, w.set(e.clientX, e.clientY)
                        }
                        A !== C.NONE && (document.addEventListener("mousemove", u, !1), document.addEventListener("mouseup", c, !1), v.dispatchEvent(P))
                    }
                }

                function u(e) {
                    if (v.enabled !== !1) {
                        e.preventDefault();
                        var t = v.domElement === document ? v.domElement.body : v.domElement;
                        if (A === C.ROTATE) {
                            if (v.enableRotate === !1)return;
                            x.set(e.clientX, e.clientY), b.subVectors(x, y), g.rotateLeft(2 * Math.PI * b.x / t.clientWidth * v.rotateSpeed), g.rotateUp(2 * Math.PI * b.y / t.clientHeight * v.rotateSpeed), y.copy(x)
                        } else if (A === C.DOLLY) {
                            if (v.enableZoom === !1)return;
                            _.set(e.clientX, e.clientY), E.subVectors(_, T), E.y > 0 ? g.dollyIn(a()) : E.y < 0 && g.dollyOut(a()), T.copy(_)
                        } else if (A === C.PAN) {
                            if (v.enablePan === !1)return;
                            S.set(e.clientX, e.clientY), M.subVectors(S, w), i(M.x, M.y), w.copy(S)
                        }
                        A !== C.NONE && v.update()
                    }
                }

                function c() {
                    v.enabled !== !1 && (document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", c, !1), v.dispatchEvent(k), A = C.NONE)
                }

                function l(e) {
                    if (v.enabled !== !1 && v.enableZoom !== !1 && A === C.NONE) {
                        e.preventDefault(), e.stopPropagation();
                        var t = 0;
                        void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.detail && (t = -e.detail), t > 0 ? g.dollyOut(a()) : 0 > t && g.dollyIn(a()), v.update(), v.dispatchEvent(P), v.dispatchEvent(k)
                    }
                }

                function h(e) {
                    if (v.enabled !== !1 && v.enableKeys !== !1 && v.enablePan !== !1)switch (e.keyCode) {
                        case v.keys.UP:
                            i(0, v.keyPanSpeed), v.update();
                            break;
                        case v.keys.BOTTOM:
                            i(0, -v.keyPanSpeed), v.update();
                            break;
                        case v.keys.LEFT:
                            i(v.keyPanSpeed, 0), v.update();
                            break;
                        case v.keys.RIGHT:
                            i(-v.keyPanSpeed, 0), v.update()
                    }
                }

                function p(e) {
                    if (v.enabled !== !1) {
                        switch (e.touches.length) {
                            case 1:
                                if (v.enableRotate === !1)return;
                                A = C.TOUCH_ROTATE, y.set(e.touches[0].pageX, e.touches[0].pageY);
                                break;
                            case 2:
                                if (v.enableZoom === !1)return;
                                A = C.TOUCH_DOLLY;
                                var t = e.touches[0].pageX - e.touches[1].pageX, r = e.touches[0].pageY - e.touches[1].pageY, n = Math.sqrt(t * t + r * r);
                                T.set(0, n);
                                break;
                            case 3:
                                if (v.enablePan === !1)return;
                                A = C.TOUCH_PAN, w.set(e.touches[0].pageX, e.touches[0].pageY);
                                break;
                            default:
                                A = C.NONE
                        }
                        A !== C.NONE && v.dispatchEvent(P)
                    }
                }

                function d(e) {
                    if (v.enabled !== !1) {
                        e.preventDefault(), e.stopPropagation();
                        var t = v.domElement === document ? v.domElement.body : v.domElement;
                        switch (e.touches.length) {
                            case 1:
                                if (v.enableRotate === !1)return;
                                if (A !== C.TOUCH_ROTATE)return;
                                x.set(e.touches[0].pageX, e.touches[0].pageY), b.subVectors(x, y), g.rotateLeft(2 * Math.PI * b.x / t.clientWidth * v.rotateSpeed), g.rotateUp(2 * Math.PI * b.y / t.clientHeight * v.rotateSpeed), y.copy(x), v.update();
                                break;
                            case 2:
                                if (v.enableZoom === !1)return;
                                if (A !== C.TOUCH_DOLLY)return;
                                var r = e.touches[0].pageX - e.touches[1].pageX, n = e.touches[0].pageY - e.touches[1].pageY, o = Math.sqrt(r * r + n * n);
                                _.set(0, o), E.subVectors(_, T), E.y > 0 ? g.dollyOut(a()) : E.y < 0 && g.dollyIn(a()), T.copy(_), v.update();
                                break;
                            case 3:
                                if (v.enablePan === !1)return;
                                if (A !== C.TOUCH_PAN)return;
                                S.set(e.touches[0].pageX, e.touches[0].pageY), M.subVectors(S, w), i(M.x, M.y), w.copy(S), v.update();
                                break;
                            default:
                                A = C.NONE
                        }
                    }
                }

                function f() {
                    v.enabled !== !1 && (v.dispatchEvent(k), A = C.NONE)
                }

                function m(e) {
                    e.preventDefault()
                }

                var g = new t(r);
                this.domElement = void 0 !== n ? n : document, Object.defineProperty(this, "constraint", {
                    get: function () {
                        return g
                    }
                }), this.getPolarAngle = function () {
                    return g.getPolarAngle()
                }, this.getAzimuthalAngle = function () {
                    return g.getAzimuthalAngle()
                }, this.enabled = !0, this.center = this.target, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    BOTTOM: 40
                }, this.mouseButtons = {ORBIT: e.MOUSE.LEFT, ZOOM: e.MOUSE.MIDDLE, PAN: e.MOUSE.RIGHT};
                var v = this, y = new e.Vector2, x = new e.Vector2, b = new e.Vector2, w = new e.Vector2, S = new e.Vector2, M = new e.Vector2, T = new e.Vector2, _ = new e.Vector2, E = new e.Vector2, C = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_DOLLY: 4,
                    TOUCH_PAN: 5
                }, A = C.NONE;
                this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom;
                var L = {type: "change"}, P = {type: "start"}, k = {type: "end"};
                this.update = function () {
                    this.autoRotate && A === C.NONE && g.rotateLeft(o()), g.update() === !0 && this.dispatchEvent(L)
                }, this.reset = function () {
                    A = C.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(L), this.update()
                }, this.dispose = function () {
                    this.domElement.removeEventListener("contextmenu", m, !1), this.domElement.removeEventListener("mousedown", s, !1), this.domElement.removeEventListener("mousewheel", l, !1), this.domElement.removeEventListener("MozMousePixelScroll", l, !1), this.domElement.removeEventListener("touchstart", p, !1), this.domElement.removeEventListener("touchend", f, !1), this.domElement.removeEventListener("touchmove", d, !1), document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", c, !1), window.removeEventListener("keydown", h, !1)
                }, this.domElement.addEventListener("contextmenu", m, !1), this.domElement.addEventListener("mousedown", s, !1), this.domElement.addEventListener("mousewheel", l, !1), this.domElement.addEventListener("MozMousePixelScroll", l, !1), this.domElement.addEventListener("touchstart", p, !1), this.domElement.addEventListener("touchend", f, !1), this.domElement.addEventListener("touchmove", d, !1), window.addEventListener("keydown", h, !1), this.update()
            }

            var n = e.MOUSE;
            return n || (n = {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            }), r.prototype = Object.create(e.EventDispatcher.prototype), r.prototype.constructor = r, Object.defineProperties(r.prototype, {
                object: {
                    get: function () {
                        return this.constraint.object
                    }
                }, target: {
                    get: function () {
                        return this.constraint.target
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."), this.constraint.target.copy(e)
                    }
                }, minDistance: {
                    get: function () {
                        return this.constraint.minDistance
                    }, set: function (e) {
                        this.constraint.minDistance = e
                    }
                }, maxDistance: {
                    get: function () {
                        return this.constraint.maxDistance
                    }, set: function (e) {
                        this.constraint.maxDistance = e
                    }
                }, minZoom: {
                    get: function () {
                        return this.constraint.minZoom
                    }, set: function (e) {
                        this.constraint.minZoom = e
                    }
                }, maxZoom: {
                    get: function () {
                        return this.constraint.maxZoom
                    }, set: function (e) {
                        this.constraint.maxZoom = e
                    }
                }, minPolarAngle: {
                    get: function () {
                        return this.constraint.minPolarAngle
                    }, set: function (e) {
                        this.constraint.minPolarAngle = e
                    }
                }, maxPolarAngle: {
                    get: function () {
                        return this.constraint.maxPolarAngle
                    }, set: function (e) {
                        this.constraint.maxPolarAngle = e
                    }
                }, minAzimuthAngle: {
                    get: function () {
                        return this.constraint.minAzimuthAngle
                    }, set: function (e) {
                        this.constraint.minAzimuthAngle = e
                    }
                }, maxAzimuthAngle: {
                    get: function () {
                        return this.constraint.maxAzimuthAngle
                    }, set: function (e) {
                        this.constraint.maxAzimuthAngle = e
                    }
                }, enableDamping: {
                    get: function () {
                        return this.constraint.enableDamping
                    }, set: function (e) {
                        this.constraint.enableDamping = e
                    }
                }, dampingFactor: {
                    get: function () {
                        return this.constraint.dampingFactor
                    }, set: function (e) {
                        this.constraint.dampingFactor = e
                    }
                }, noZoom: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
                    }
                }, noRotate: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
                    }
                }, noPan: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
                    }
                }, noKeys: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
                    }
                }, staticMoving: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.constraint.enableDamping
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.constraint.enableDamping = !e
                    }
                }, dynamicDampingFactor: {
                    get: function () {
                        return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor
                    }, set: function (e) {
                        console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor = e
                    }
                }
            }), r
        }
    }, {}], 14: [function (e, t, r) {
        var n = n || {}, i = {REVISION: "73"};
        "function" == typeof define && define.amd ? define("three", i) : "undefined" != typeof r && "undefined" != typeof t && (t.exports = i), (void 0 === n.requestAnimationFrame || void 0 === n.cancelAnimationFrame) && !function () {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !n.requestAnimationFrame; ++r)n.requestAnimationFrame = n[t[r] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[r] + "CancelAnimationFrame"] || n[t[r] + "CancelRequestAnimationFrame"];
            void 0 === n.requestAnimationFrame && void 0 !== n.setTimeout && (n.requestAnimationFrame = function (t) {
                var r = Date.now(), i = Math.max(0, 16 - (r - e)), o = n.setTimeout(function () {
                    t(r + i)
                }, i);
                return e = r + i, o
            }), void 0 === n.cancelAnimationFrame && void 0 !== n.clearTimeout && (n.cancelAnimationFrame = function (e) {
                n.clearTimeout(e)
            })
        }(), void 0 === n.performance && (n.performance = {}), void 0 === n.performance.now && !function () {
            var e = Date.now();
            n.performance.now = function () {
                return Date.now() - e
            }
        }(), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function (e) {
            return 0 > e ? -1 : e > 0 ? 1 : +e
        }), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
            get: function () {
                return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
            }
        }), i.MOUSE = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }, i.CullFaceNone = 0, i.CullFaceBack = 1, i.CullFaceFront = 2, i.CullFaceFrontBack = 3, i.FrontFaceDirectionCW = 0, i.FrontFaceDirectionCCW = 1, i.BasicShadowMap = 0, i.PCFShadowMap = 1, i.PCFSoftShadowMap = 2, i.FrontSide = 0, i.BackSide = 1, i.DoubleSide = 2, i.FlatShading = 1, i.SmoothShading = 2, i.NoColors = 0, i.FaceColors = 1, i.VertexColors = 2, i.NoBlending = 0, i.NormalBlending = 1, i.AdditiveBlending = 2, i.SubtractiveBlending = 3, i.MultiplyBlending = 4, i.CustomBlending = 5, i.AddEquation = 100, i.SubtractEquation = 101, i.ReverseSubtractEquation = 102, i.MinEquation = 103, i.MaxEquation = 104, i.ZeroFactor = 200, i.OneFactor = 201, i.SrcColorFactor = 202, i.OneMinusSrcColorFactor = 203, i.SrcAlphaFactor = 204, i.OneMinusSrcAlphaFactor = 205, i.DstAlphaFactor = 206, i.OneMinusDstAlphaFactor = 207, i.DstColorFactor = 208, i.OneMinusDstColorFactor = 209, i.SrcAlphaSaturateFactor = 210, i.NeverDepth = 0, i.AlwaysDepth = 1, i.LessDepth = 2, i.LessEqualDepth = 3, i.EqualDepth = 4, i.GreaterEqualDepth = 5, i.GreaterDepth = 6, i.NotEqualDepth = 7, i.MultiplyOperation = 0, i.MixOperation = 1, i.AddOperation = 2, i.UVMapping = 300, i.CubeReflectionMapping = 301, i.CubeRefractionMapping = 302, i.EquirectangularReflectionMapping = 303, i.EquirectangularRefractionMapping = 304, i.SphericalReflectionMapping = 305, i.RepeatWrapping = 1e3, i.ClampToEdgeWrapping = 1001, i.MirroredRepeatWrapping = 1002, i.NearestFilter = 1003, i.NearestMipMapNearestFilter = 1004, i.NearestMipMapLinearFilter = 1005, i.LinearFilter = 1006, i.LinearMipMapNearestFilter = 1007, i.LinearMipMapLinearFilter = 1008, i.UnsignedByteType = 1009, i.ByteType = 1010, i.ShortType = 1011, i.UnsignedShortType = 1012, i.IntType = 1013, i.UnsignedIntType = 1014, i.FloatType = 1015, i.HalfFloatType = 1025, i.UnsignedShort4444Type = 1016, i.UnsignedShort5551Type = 1017, i.UnsignedShort565Type = 1018, i.AlphaFormat = 1019, i.RGBFormat = 1020, i.RGBAFormat = 1021, i.LuminanceFormat = 1022, i.LuminanceAlphaFormat = 1023, i.RGBEFormat = i.RGBAFormat, i.RGB_S3TC_DXT1_Format = 2001, i.RGBA_S3TC_DXT1_Format = 2002, i.RGBA_S3TC_DXT3_Format = 2003, i.RGBA_S3TC_DXT5_Format = 2004, i.RGB_PVRTC_4BPPV1_Format = 2100, i.RGB_PVRTC_2BPPV1_Format = 2101, i.RGBA_PVRTC_4BPPV1_Format = 2102, i.RGBA_PVRTC_2BPPV1_Format = 2103, i.LoopOnce = 2200, i.LoopRepeat = 2201, i.LoopPingPong = 2202,i.Projector = function () {
            console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (e, t) {
                console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
            }, this.unprojectVector = function (e, t) {
                console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
            }, this.pickingRay = function (e, t) {
                console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
            }
        },i.CanvasRenderer = function () {
            console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function () {
            }, this.render = function () {
            }, this.setClearColor = function () {
            }, this.setSize = function () {
            }
        },i.Color = function (e) {
            return 3 === arguments.length ? this.fromArray(arguments) : this.set(e)
        },i.Color.prototype = {
            constructor: i.Color, r: 1, g: 1, b: 1, set: function (e) {
                return e instanceof i.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
            }, setHex: function (e) {
                return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
            }, setRGB: function (e, t, r) {
                return this.r = e, this.g = t, this.b = r, this
            }, setHSL: function () {
                function e(e, t, r) {
                    return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
                }

                return function (t, r, n) {
                    if (t = i.Math.euclideanModulo(t, 1), r = i.Math.clamp(r, 0, 1), n = i.Math.clamp(n, 0, 1), 0 === r)this.r = this.g = this.b = n; else {
                        var o = .5 >= n ? n * (1 + r) : n + r - n * r, a = 2 * n - o;
                        this.r = e(a, o, t + 1 / 3), this.g = e(a, o, t), this.b = e(a, o, t - 1 / 3)
                    }
                    return this;
                }
            }(), setStyle: function (e) {
                function t(t) {
                    void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                }

                var r;
                if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                    var n, o = r[1], a = r[2];
                    switch (o) {
                        case"rgb":
                        case"rgba":
                            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, t(n[5]), this;
                            if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, t(n[5]), this;
                            break;
                        case"hsl":
                        case"hsla":
                            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                                var s = parseFloat(n[1]) / 360, u = parseInt(n[2], 10) / 100, c = parseInt(n[3], 10) / 100;
                                return t(n[5]), this.setHSL(s, u, c)
                            }
                    }
                } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                    var l = r[1], h = l.length;
                    if (3 === h)return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
                    if (6 === h)return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
                }
                if (e && e.length > 0) {
                    var l = i.ColorKeywords[e];
                    void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e)
                }
                return this
            }, clone: function () {
                return new this.constructor(this.r, this.g, this.b)
            }, copy: function (e) {
                return this.r = e.r, this.g = e.g, this.b = e.b, this
            }, copyGammaToLinear: function (e, t) {
                return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
            }, copyLinearToGamma: function (e, t) {
                void 0 === t && (t = 2);
                var r = t > 0 ? 1 / t : 1;
                return this.r = Math.pow(e.r, r), this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
            }, convertGammaToLinear: function () {
                var e = this.r, t = this.g, r = this.b;
                return this.r = e * e, this.g = t * t, this.b = r * r, this
            }, convertLinearToGamma: function () {
                return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
            }, getHex: function () {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            }, getHexString: function () {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            }, getHSL: function (e) {
                var t, r, n = e || {
                        h: 0,
                        s: 0,
                        l: 0
                    }, i = this.r, o = this.g, a = this.b, s = Math.max(i, o, a), u = Math.min(i, o, a), c = (u + s) / 2;
                if (u === s)t = 0, r = 0; else {
                    var l = s - u;
                    switch (r = .5 >= c ? l / (s + u) : l / (2 - s - u), s) {
                        case i:
                            t = (o - a) / l + (a > o ? 6 : 0);
                            break;
                        case o:
                            t = (a - i) / l + 2;
                            break;
                        case a:
                            t = (i - o) / l + 4
                    }
                    t /= 6
                }
                return n.h = t, n.s = r, n.l = c, n
            }, getStyle: function () {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            }, offsetHSL: function (e, t, r) {
                var n = this.getHSL();
                return n.h += e, n.s += t, n.l += r, this.setHSL(n.h, n.s, n.l), this
            }, add: function (e) {
                return this.r += e.r, this.g += e.g, this.b += e.b, this
            }, addColors: function (e, t) {
                return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
            }, addScalar: function (e) {
                return this.r += e, this.g += e, this.b += e, this
            }, multiply: function (e) {
                return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
            }, multiplyScalar: function (e) {
                return this.r *= e, this.g *= e, this.b *= e, this
            }, lerp: function (e, t) {
                return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
            }, equals: function (e) {
                return e.r === this.r && e.g === this.g && e.b === this.b
            }, fromArray: function (e, t) {
                return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
            }
        },i.ColorKeywords = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        },i.Quaternion = function (e, t, r, n) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== n ? n : 1
        },i.Quaternion.prototype = {
            constructor: i.Quaternion, get x() {
                return this._x
            }, set x(e) {
                this._x = e, this.onChangeCallback()
            }, get y() {
                return this._y
            }, set y(e) {
                this._y = e, this.onChangeCallback()
            }, get z() {
                return this._z
            }, set z(e) {
                this._z = e, this.onChangeCallback()
            }, get w() {
                return this._w
            }, set w(e) {
                this._w = e, this.onChangeCallback()
            }, set: function (e, t, r, n) {
                return this._x = e, this._y = t, this._z = r, this._w = n, this.onChangeCallback(), this
            }, clone: function () {
                return new this.constructor(this._x, this._y, this._z, this._w)
            }, copy: function (e) {
                return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
            }, setFromEuler: function (e, t) {
                if (e instanceof i.Euler == !1)throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var r = Math.cos(e._x / 2), n = Math.cos(e._y / 2), o = Math.cos(e._z / 2), a = Math.sin(e._x / 2), s = Math.sin(e._y / 2), u = Math.sin(e._z / 2), c = e.order;
                return "XYZ" === c ? (this._x = a * n * o + r * s * u, this._y = r * s * o - a * n * u, this._z = r * n * u + a * s * o, this._w = r * n * o - a * s * u) : "YXZ" === c ? (this._x = a * n * o + r * s * u, this._y = r * s * o - a * n * u, this._z = r * n * u - a * s * o, this._w = r * n * o + a * s * u) : "ZXY" === c ? (this._x = a * n * o - r * s * u, this._y = r * s * o + a * n * u, this._z = r * n * u + a * s * o, this._w = r * n * o - a * s * u) : "ZYX" === c ? (this._x = a * n * o - r * s * u, this._y = r * s * o + a * n * u, this._z = r * n * u - a * s * o, this._w = r * n * o + a * s * u) : "YZX" === c ? (this._x = a * n * o + r * s * u, this._y = r * s * o + a * n * u, this._z = r * n * u - a * s * o, this._w = r * n * o - a * s * u) : "XZY" === c && (this._x = a * n * o - r * s * u, this._y = r * s * o - a * n * u, this._z = r * n * u + a * s * o, this._w = r * n * o + a * s * u), t !== !1 && this.onChangeCallback(), this
            }, setFromAxisAngle: function (e, t) {
                var r = t / 2, n = Math.sin(r);
                return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(r), this.onChangeCallback(), this
            }, setFromRotationMatrix: function (e) {
                var t, r = e.elements, n = r[0], i = r[4], o = r[8], a = r[1], s = r[5], u = r[9], c = r[2], l = r[6], h = r[10], p = n + s + h;
                return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (l - u) * t, this._y = (o - c) * t, this._z = (a - i) * t) : n > s && n > h ? (t = 2 * Math.sqrt(1 + n - s - h), this._w = (l - u) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (o + c) / t) : s > h ? (t = 2 * Math.sqrt(1 + s - n - h), this._w = (o - c) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (u + l) / t) : (t = 2 * Math.sqrt(1 + h - n - s), this._w = (a - i) / t, this._x = (o + c) / t, this._y = (u + l) / t, this._z = .25 * t), this.onChangeCallback(), this
            }, setFromUnitVectors: function () {
                var e, t, r = 1e-6;
                return function (n, o) {
                    return void 0 === e && (e = new i.Vector3), t = n.dot(o) + 1, r > t ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, o), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
                }
            }(), inverse: function () {
                return this.conjugate().normalize(), this
            }, conjugate: function () {
                return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
            }, dot: function (e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            }, lengthSq: function () {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }, length: function () {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }, normalize: function () {
                var e = this.length();
                return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
            }, multiply: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
            }, multiplyQuaternions: function (e, t) {
                var r = e._x, n = e._y, i = e._z, o = e._w, a = t._x, s = t._y, u = t._z, c = t._w;
                return this._x = r * c + o * a + n * u - i * s, this._y = n * c + o * s + i * a - r * u, this._z = i * c + o * u + r * s - n * a, this._w = o * c - r * a - n * s - i * u, this.onChangeCallback(), this
            }, multiplyVector3: function (e) {
                return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
            }, slerp: function (e, t) {
                if (0 === t)return this;
                if (1 === t)return this.copy(e);
                var r = this._x, n = this._y, i = this._z, o = this._w, a = o * e._w + r * e._x + n * e._y + i * e._z;
                if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)return this._w = o, this._x = r, this._y = n, this._z = i, this;
                var s = Math.acos(a), u = Math.sqrt(1 - a * a);
                if (Math.abs(u) < .001)return this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (n + this._y), this._z = .5 * (i + this._z), this;
                var c = Math.sin((1 - t) * s) / u, l = Math.sin(t * s) / u;
                return this._w = o * c + this._w * l, this._x = r * c + this._x * l, this._y = n * c + this._y * l, this._z = i * c + this._z * l, this.onChangeCallback(), this
            }, equals: function (e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            }, fromArray: function (e, t) {
                return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
            }, onChange: function (e) {
                return this.onChangeCallback = e, this
            }, onChangeCallback: function () {
            }
        },i.Quaternion.slerp = function (e, t, r, n) {
            return r.copy(e).slerp(t, n)
        },i.Vector2 = function (e, t) {
            this.x = e || 0, this.y = t || 0
        },i.Vector2.prototype = {
            constructor: i.Vector2, get width() {
                return this.x
            }, set width(e) {
                this.x = e
            }, get height() {
                return this.y
            }, set height(e) {
                this.y = e
            }, set: function (e, t) {
                return this.x = e, this.y = t, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, clone: function () {
                return new this.constructor(this.x, this.y)
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this
            }, addScaledVector: function (e, t) {
                return this.x += e.x * t, this.y += e.y * t, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
            }, subScalar: function (e) {
                return this.x -= e, this.y -= e, this
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this
            }, multiply: function (e) {
                return this.x *= e.x, this.y *= e.y, this
            }, multiplyScalar: function (e) {
                return isFinite(e) ? (this.x *= e, this.y *= e) : (this.x = 0, this.y = 0), this
            }, divide: function (e) {
                return this.x /= e.x, this.y /= e.y, this
            }, divideScalar: function (e) {
                return this.multiplyScalar(1 / e)
            }, min: function (e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
            }, max: function (e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
            }, clamp: function (e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
            }, clampScalar: function () {
                var e, t;
                return function (r, n) {
                    return void 0 === e && (e = new i.Vector2, t = new i.Vector2), e.set(r, r), t.set(n, n), this.clamp(e, t)
                }
            }(), clampLength: function (e, t) {
                var r = this.length();
                return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
            }, floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            }, negate: function () {
                return this.x = -this.x, this.y = -this.y, this
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, lengthManhattan: function () {
                return Math.abs(this.x) + Math.abs(this.y)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, distanceTo: function (e) {
                return Math.sqrt(this.distanceToSquared(e))
            }, distanceToSquared: function (e) {
                var t = this.x - e.x, r = this.y - e.y;
                return t * t + r * r
            }, setLength: function (e) {
                return this.multiplyScalar(e / this.length())
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
            }, lerpVectors: function (e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y
            }, fromArray: function (e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
            }, fromAttribute: function (e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
            }, rotateAround: function (e, t) {
                var r = Math.cos(t), n = Math.sin(t), i = this.x - e.x, o = this.y - e.y;
                return this.x = i * r - o * n + e.x, this.y = i * n + o * r + e.y, this
            }
        },i.Vector3 = function (e, t, r) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0
        },i.Vector3.prototype = {
            constructor: i.Vector3, set: function (e, t, r) {
                return this.x = e, this.y = t, this.z = r, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setZ: function (e) {
                return this.z = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, clone: function () {
                return new this.constructor(this.x, this.y, this.z)
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this.z += e, this
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
            }, addScaledVector: function (e, t) {
                return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
            }, subScalar: function (e) {
                return this.x -= e, this.y -= e, this.z -= e, this
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
            }, multiply: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
            }, multiplyScalar: function (e) {
                return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : (this.x = 0, this.y = 0, this.z = 0), this
            }, multiplyVectors: function (e, t) {
                return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
            }, applyEuler: function () {
                var e;
                return function (t) {
                    return t instanceof i.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new i.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
                }
            }(), applyAxisAngle: function () {
                var e;
                return function (t, r) {
                    return void 0 === e && (e = new i.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
                }
            }(), applyMatrix3: function (e) {
                var t = this.x, r = this.y, n = this.z, i = e.elements;
                return this.x = i[0] * t + i[3] * r + i[6] * n, this.y = i[1] * t + i[4] * r + i[7] * n, this.z = i[2] * t + i[5] * r + i[8] * n, this
            }, applyMatrix4: function (e) {
                var t = this.x, r = this.y, n = this.z, i = e.elements;
                return this.x = i[0] * t + i[4] * r + i[8] * n + i[12], this.y = i[1] * t + i[5] * r + i[9] * n + i[13], this.z = i[2] * t + i[6] * r + i[10] * n + i[14], this
            }, applyProjection: function (e) {
                var t = this.x, r = this.y, n = this.z, i = e.elements, o = 1 / (i[3] * t + i[7] * r + i[11] * n + i[15]);
                return this.x = (i[0] * t + i[4] * r + i[8] * n + i[12]) * o, this.y = (i[1] * t + i[5] * r + i[9] * n + i[13]) * o, this.z = (i[2] * t + i[6] * r + i[10] * n + i[14]) * o, this
            }, applyQuaternion: function (e) {
                var t = this.x, r = this.y, n = this.z, i = e.x, o = e.y, a = e.z, s = e.w, u = s * t + o * n - a * r, c = s * r + a * t - i * n, l = s * n + i * r - o * t, h = -i * t - o * r - a * n;
                return this.x = u * s + h * -i + c * -a - l * -o, this.y = c * s + h * -o + l * -i - u * -a, this.z = l * s + h * -a + u * -o - c * -i, this
            }, project: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
                }
            }(), unproject: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
                }
            }(), transformDirection: function (e) {
                var t = this.x, r = this.y, n = this.z, i = e.elements;
                return this.x = i[0] * t + i[4] * r + i[8] * n, this.y = i[1] * t + i[5] * r + i[9] * n, this.z = i[2] * t + i[6] * r + i[10] * n, this.normalize(), this
            }, divide: function (e) {
                return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
            }, divideScalar: function (e) {
                return this.multiplyScalar(1 / e)
            }, min: function (e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
            }, max: function (e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
            }, clamp: function (e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
            }, clampScalar: function () {
                var e, t;
                return function (r, n) {
                    return void 0 === e && (e = new i.Vector3, t = new i.Vector3), e.set(r, r, r), t.set(n, n, n), this.clamp(e, t)
                }
            }(), clampLength: function (e, t) {
                var r = this.length();
                return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
            }, floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            }, negate: function () {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }, lengthManhattan: function () {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, setLength: function (e) {
                return this.multiplyScalar(e / this.length())
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
            }, lerpVectors: function (e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            }, cross: function (e, t) {
                if (void 0 !== t)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
                var r = this.x, n = this.y, i = this.z;
                return this.x = n * e.z - i * e.y, this.y = i * e.x - r * e.z, this.z = r * e.y - n * e.x, this
            }, crossVectors: function (e, t) {
                var r = e.x, n = e.y, i = e.z, o = t.x, a = t.y, s = t.z;
                return this.x = n * s - i * a, this.y = i * o - r * s, this.z = r * a - n * o, this
            }, projectOnVector: function () {
                var e, t;
                return function (r) {
                    return void 0 === e && (e = new i.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
                }
            }(), projectOnPlane: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
                }
            }(), reflect: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
                }
            }(), angleTo: function (e) {
                var t = this.dot(e) / (this.length() * e.length());
                return Math.acos(i.Math.clamp(t, -1, 1))
            }, distanceTo: function (e) {
                return Math.sqrt(this.distanceToSquared(e))
            }, distanceToSquared: function (e) {
                var t = this.x - e.x, r = this.y - e.y, n = this.z - e.z;
                return t * t + r * r + n * n
            }, setEulerFromRotationMatrix: function (e, t) {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            }, setEulerFromQuaternion: function (e, t) {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            }, getPositionFromMatrix: function (e) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
            }, getScaleFromMatrix: function (e) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
            }, getColumnFromMatrix: function (e, t) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
            }, setFromMatrixPosition: function (e) {
                return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
            }, setFromMatrixScale: function (e) {
                var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(), r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(), n = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
                return this.x = t, this.y = r, this.z = n, this
            }, setFromMatrixColumn: function (e, t) {
                var r = 4 * e, n = t.elements;
                return this.x = n[r], this.y = n[r + 1], this.z = n[r + 2], this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            }, fromArray: function (e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
            }, fromAttribute: function (e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
            }
        },i.Vector4 = function (e, t, r, n) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== n ? n : 1
        },i.Vector4.prototype = {
            constructor: i.Vector4, set: function (e, t, r, n) {
                return this.x = e, this.y = t, this.z = r, this.w = n, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setZ: function (e) {
                return this.z = e, this
            }, setW: function (e) {
                return this.w = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    case 3:
                        this.w = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, clone: function () {
                return new this.constructor(this.x, this.y, this.z, this.w)
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this.z += e, this.w += e, this
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
            }, addScaledVector: function (e, t) {
                return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
            }, subScalar: function (e) {
                return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
            }, multiplyScalar: function (e) {
                return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
            }, applyMatrix4: function (e) {
                var t = this.x, r = this.y, n = this.z, i = this.w, o = e.elements;
                return this.x = o[0] * t + o[4] * r + o[8] * n + o[12] * i, this.y = o[1] * t + o[5] * r + o[9] * n + o[13] * i, this.z = o[2] * t + o[6] * r + o[10] * n + o[14] * i, this.w = o[3] * t + o[7] * r + o[11] * n + o[15] * i, this
            }, divideScalar: function (e) {
                return this.multiplyScalar(1 / e)
            }, setAxisAngleFromQuaternion: function (e) {
                this.w = 2 * Math.acos(e.w);
                var t = Math.sqrt(1 - e.w * e.w);
                return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
            }, setAxisAngleFromRotationMatrix: function (e) {
                var t, r, n, i, o = .01, a = .1, s = e.elements, u = s[0], c = s[4], l = s[8], h = s[1], p = s[5], d = s[9], f = s[2], m = s[6], g = s[10];
                if (Math.abs(c - h) < o && Math.abs(l - f) < o && Math.abs(d - m) < o) {
                    if (Math.abs(c + h) < a && Math.abs(l + f) < a && Math.abs(d + m) < a && Math.abs(u + p + g - 3) < a)return this.set(1, 0, 0, 0), this;
                    t = Math.PI;
                    var v = (u + 1) / 2, y = (p + 1) / 2, x = (g + 1) / 2, b = (c + h) / 4, w = (l + f) / 4, S = (d + m) / 4;
                    return v > y && v > x ? o > v ? (r = 0, n = .707106781, i = .707106781) : (r = Math.sqrt(v), n = b / r, i = w / r) : y > x ? o > y ? (r = .707106781, n = 0, i = .707106781) : (n = Math.sqrt(y), r = b / n, i = S / n) : o > x ? (r = .707106781, n = .707106781, i = 0) : (i = Math.sqrt(x), r = w / i, n = S / i), this.set(r, n, i, t), this
                }
                var M = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (h - c) * (h - c));
                return Math.abs(M) < .001 && (M = 1), this.x = (m - d) / M, this.y = (l - f) / M, this.z = (h - c) / M, this.w = Math.acos((u + p + g - 1) / 2), this
            }, min: function (e) {
                return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
            }, max: function (e) {
                return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
            }, clamp: function (e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
            }, clampScalar: function () {
                var e, t;
                return function (r, n) {
                    return void 0 === e && (e = new i.Vector4, t = new i.Vector4), e.set(r, r, r, r), t.set(n, n, n, n), this.clamp(e, t)
                }
            }(), floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            }, negate: function () {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }, lengthManhattan: function () {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, setLength: function (e) {
                return this.multiplyScalar(e / this.length())
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
            }, lerpVectors: function (e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            }, fromArray: function (e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
            }, fromAttribute: function (e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
            }
        },i.Euler = function (e, t, r, n) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = n || i.Euler.DefaultOrder
        },i.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],i.Euler.DefaultOrder = "XYZ",i.Euler.prototype = {
            constructor: i.Euler, get x() {
                return this._x
            }, set x(e) {
                this._x = e, this.onChangeCallback()
            }, get y() {
                return this._y
            }, set y(e) {
                this._y = e, this.onChangeCallback()
            }, get z() {
                return this._z
            }, set z(e) {
                this._z = e, this.onChangeCallback()
            }, get order() {
                return this._order
            }, set order(e) {
                this._order = e, this.onChangeCallback()
            }, set: function (e, t, r, n) {
                return this._x = e, this._y = t, this._z = r, this._order = n || this._order, this.onChangeCallback(), this
            }, clone: function () {
                return new this.constructor(this._x, this._y, this._z, this._order)
            }, copy: function (e) {
                return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
            }, setFromRotationMatrix: function (e, t, r) {
                var n = i.Math.clamp, o = e.elements, a = o[0], s = o[4], u = o[8], c = o[1], l = o[5], h = o[9], p = o[2], d = o[6], f = o[10];
                return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(d, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(h, -1, 1)), Math.abs(h) < .99999 ? (this._y = Math.atan2(u, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-p, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-p, f), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-n(p, -1, 1)), Math.abs(p) < .99999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, l))) : "YZX" === t ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-p, a)) : (this._x = 0, this._y = Math.atan2(u, f))) : "XZY" === t ? (this._z = Math.asin(-n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(u, a)) : (this._x = Math.atan2(-h, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, r !== !1 && this.onChangeCallback(), this
            }, setFromQuaternion: function () {
                var e;
                return function (t, r, n) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, n), this
                }
            }(), setFromVector3: function (e, t) {
                return this.set(e.x, e.y, e.z, t || this._order)
            }, reorder: function () {
                var e = new i.Quaternion;
                return function (t) {
                    e.setFromEuler(this), this.setFromQuaternion(e, t)
                }
            }(), equals: function (e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            }, fromArray: function (e) {
                return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
            }, toArray: function (e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
            }, toVector3: function (e) {
                return e ? e.set(this._x, this._y, this._z) : new i.Vector3(this._x, this._y, this._z)
            }, onChange: function (e) {
                return this.onChangeCallback = e, this
            }, onChangeCallback: function () {
            }
        },i.Line3 = function (e, t) {
            this.start = void 0 !== e ? e : new i.Vector3, this.end = void 0 !== t ? t : new i.Vector3
        },i.Line3.prototype = {
            constructor: i.Line3, set: function (e, t) {
                return this.start.copy(e), this.end.copy(t), this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.start.copy(e.start), this.end.copy(e.end), this
            }, center: function (e) {
                var t = e || new i.Vector3;
                return t.addVectors(this.start, this.end).multiplyScalar(.5)
            }, delta: function (e) {
                var t = e || new i.Vector3;
                return t.subVectors(this.end, this.start)
            }, distanceSq: function () {
                return this.start.distanceToSquared(this.end)
            }, distance: function () {
                return this.start.distanceTo(this.end)
            }, at: function (e, t) {
                var r = t || new i.Vector3;
                return this.delta(r).multiplyScalar(e).add(this.start)
            }, closestPointToPointParameter: function () {
                var e = new i.Vector3, t = new i.Vector3;
                return function (r, n) {
                    e.subVectors(r, this.start), t.subVectors(this.end, this.start);
                    var o = t.dot(t), a = t.dot(e), s = a / o;
                    return n && (s = i.Math.clamp(s, 0, 1)), s
                }
            }(), closestPointToPoint: function (e, t, r) {
                var n = this.closestPointToPointParameter(e, t), o = r || new i.Vector3;
                return this.delta(o).multiplyScalar(n).add(this.start)
            }, applyMatrix4: function (e) {
                return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
            }, equals: function (e) {
                return e.start.equals(this.start) && e.end.equals(this.end)
            }
        },i.Box2 = function (e, t) {
            this.min = void 0 !== e ? e : new i.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new i.Vector2(-(1 / 0), -(1 / 0))
        },i.Box2.prototype = {
            constructor: i.Box2, set: function (e, t) {
                return this.min.copy(e), this.max.copy(t), this
            }, setFromPoints: function (e) {
                this.makeEmpty();
                for (var t = 0, r = e.length; r > t; t++)this.expandByPoint(e[t]);
                return this
            }, setFromCenterAndSize: function () {
                var e = new i.Vector2;
                return function (t, r) {
                    var n = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
                }
            }(), clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }, makeEmpty: function () {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
            }, empty: function () {
                return this.max.x < this.min.x || this.max.y < this.min.y
            }, center: function (e) {
                var t = e || new i.Vector2;
                return t.addVectors(this.min, this.max).multiplyScalar(.5)
            }, size: function (e) {
                var t = e || new i.Vector2;
                return t.subVectors(this.max, this.min)
            }, expandByPoint: function (e) {
                return this.min.min(e), this.max.max(e), this
            }, expandByVector: function (e) {
                return this.min.sub(e), this.max.add(e), this
            }, expandByScalar: function (e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }, containsPoint: function (e) {
                return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
            }, containsBox: function (e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
            }, getParameter: function (e, t) {
                var r = t || new i.Vector2;
                return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
            }, isIntersectionBox: function (e) {
                return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
            }, clampPoint: function (e, t) {
                var r = t || new i.Vector2;
                return r.copy(e).clamp(this.min, this.max)
            }, distanceToPoint: function () {
                var e = new i.Vector2;
                return function (t) {
                    var r = e.copy(t).clamp(this.min, this.max);
                    return r.sub(t).length()
                }
            }(), intersect: function (e) {
                return this.min.max(e.min), this.max.min(e.max), this
            }, union: function (e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }, translate: function (e) {
                return this.min.add(e), this.max.add(e), this
            }, equals: function (e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        },i.Box3 = function (e, t) {
            this.min = void 0 !== e ? e : new i.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new i.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
        },i.Box3.prototype = {
            constructor: i.Box3, set: function (e, t) {
                return this.min.copy(e), this.max.copy(t), this
            }, setFromPoints: function (e) {
                this.makeEmpty();
                for (var t = 0, r = e.length; r > t; t++)this.expandByPoint(e[t]);
                return this
            }, setFromCenterAndSize: function () {
                var e = new i.Vector3;
                return function (t, r) {
                    var n = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
                }
            }(), setFromObject: function () {
                var e = new i.Vector3;
                return function (t) {
                    var r = this;
                    return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function (t) {
                        var n = t.geometry;
                        if (void 0 !== n)if (n instanceof i.Geometry)for (var o = n.vertices, a = 0, s = o.length; s > a; a++)e.copy(o[a]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e); else if (n instanceof i.BufferGeometry && void 0 !== n.attributes.position)for (var u = n.attributes.position.array, a = 0, s = u.length; s > a; a += 3)e.set(u[a], u[a + 1], u[a + 2]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e)
                    }), this
                }
            }(), clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }, makeEmpty: function () {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
            }, empty: function () {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }, center: function (e) {
                var t = e || new i.Vector3;
                return t.addVectors(this.min, this.max).multiplyScalar(.5)
            }, size: function (e) {
                var t = e || new i.Vector3;
                return t.subVectors(this.max, this.min)
            }, expandByPoint: function (e) {
                return this.min.min(e), this.max.max(e), this
            }, expandByVector: function (e) {
                return this.min.sub(e), this.max.add(e), this
            }, expandByScalar: function (e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }, containsPoint: function (e) {
                return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
            }, containsBox: function (e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
            }, getParameter: function (e, t) {
                var r = t || new i.Vector3;
                return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            }, isIntersectionBox: function (e) {
                return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
            }, clampPoint: function (e, t) {
                var r = t || new i.Vector3;
                return r.copy(e).clamp(this.min, this.max)
            }, distanceToPoint: function () {
                var e = new i.Vector3;
                return function (t) {
                    var r = e.copy(t).clamp(this.min, this.max);
                    return r.sub(t).length()
                }
            }(), getBoundingSphere: function () {
                var e = new i.Vector3;
                return function (t) {
                    var r = t || new i.Sphere;
                    return r.center = this.center(), r.radius = .5 * this.size(e).length(), r
                }
            }(), intersect: function (e) {
                return this.min.max(e.min), this.max.min(e.max), this
            }, union: function (e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }, applyMatrix4: function () {
                var e = [new i.Vector3, new i.Vector3, new i.Vector3, new i.Vector3, new i.Vector3, new i.Vector3, new i.Vector3, new i.Vector3];
                return function (t) {
                    return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
                }
            }(), translate: function (e) {
                return this.min.add(e), this.max.add(e), this
            }, equals: function (e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        },i.Matrix3 = function () {
            this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        },i.Matrix3.prototype = {
            constructor: i.Matrix3, set: function (e, t, r, n, i, o, a, s, u) {
                var c = this.elements;
                return c[0] = e, c[3] = t, c[6] = r, c[1] = n, c[4] = i, c[7] = o, c[2] = a, c[5] = s, c[8] = u, this
            }, identity: function () {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            }, clone: function () {
                return (new this.constructor).fromArray(this.elements)
            }, copy: function (e) {
                var t = e.elements;
                return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
            }, multiplyVector3: function (e) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
            }, multiplyVector3Array: function (e) {
                return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            }, applyToVector3Array: function () {
                var e;
                return function (t, r, n) {
                    void 0 === e && (e = new i.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
                    for (var o = 0, a = r; n > o; o += 3, a += 3)e.fromArray(t, a), e.applyMatrix3(this), e.toArray(t, a);
                    return t
                }
            }(), applyToBuffer: function () {
                var e;
                return function (t, r, n) {
                    void 0 === e && (e = new i.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
                    for (var o = 0, a = r; n > o; o++, a++)e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
                    return t
                }
            }(), multiplyScalar: function (e) {
                var t = this.elements;
                return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
            }, determinant: function () {
                var e = this.elements, t = e[0], r = e[1], n = e[2], i = e[3], o = e[4], a = e[5], s = e[6], u = e[7], c = e[8];
                return t * o * c - t * a * u - r * i * c + r * a * s + n * i * u - n * o * s
            }, getInverse: function (e, t) {
                var r = e.elements, n = this.elements;
                n[0] = r[10] * r[5] - r[6] * r[9], n[1] = -r[10] * r[1] + r[2] * r[9], n[2] = r[6] * r[1] - r[2] * r[5], n[3] = -r[10] * r[4] + r[6] * r[8], n[4] = r[10] * r[0] - r[2] * r[8], n[5] = -r[6] * r[0] + r[2] * r[4], n[6] = r[9] * r[4] - r[5] * r[8], n[7] = -r[9] * r[0] + r[1] * r[8], n[8] = r[5] * r[0] - r[1] * r[4];
                var i = r[0] * n[0] + r[1] * n[3] + r[2] * n[6];
                if (0 === i) {
                    var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
                    if (t)throw new Error(o);
                    return console.warn(o), this.identity(), this
                }
                return this.multiplyScalar(1 / i), this
            }, transpose: function () {
                var e, t = this.elements;
                return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
            }, flattenToArrayOffset: function (e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
            }, getNormalMatrix: function (e) {
                return this.getInverse(e).transpose(), this
            }, transposeIntoArray: function (e) {
                var t = this.elements;
                return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
            }, fromArray: function (e) {
                return this.elements.set(e), this
            }, toArray: function () {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
            }
        },i.Matrix4 = function () {
            this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        },i.Matrix4.prototype = {
            constructor: i.Matrix4,
            set: function (e, t, r, n, i, o, a, s, u, c, l, h, p, d, f, m) {
                var g = this.elements;
                return g[0] = e, g[4] = t, g[8] = r, g[12] = n, g[1] = i, g[5] = o, g[9] = a, g[13] = s, g[2] = u, g[6] = c, g[10] = l, g[14] = h, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
            },
            identity: function () {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            clone: function () {
                return (new i.Matrix4).fromArray(this.elements)
            },
            copy: function (e) {
                return this.elements.set(e.elements), this
            },
            extractPosition: function (e) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
            },
            copyPosition: function (e) {
                var t = this.elements, r = e.elements;
                return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
            },
            extractBasis: function (e, t, r) {
                var n = this.elements;
                return e.set(n[0], n[1], n[2]), t.set(n[4], n[5], n[6]), r.set(n[8], n[9], n[10]), this
            },
            makeBasis: function (e, t, r) {
                return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this
            },
            extractRotation: function () {
                var e;
                return function (t) {
                    void 0 === e && (e = new i.Vector3);
                    var r = this.elements, n = t.elements, o = 1 / e.set(n[0], n[1], n[2]).length(), a = 1 / e.set(n[4], n[5], n[6]).length(), s = 1 / e.set(n[8], n[9], n[10]).length();
                    return r[0] = n[0] * o, r[1] = n[1] * o, r[2] = n[2] * o, r[4] = n[4] * a, r[5] = n[5] * a, r[6] = n[6] * a, r[8] = n[8] * s, r[9] = n[9] * s, r[10] = n[10] * s, this
                }
            }(),
            makeRotationFromEuler: function (e) {
                e instanceof i.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var t = this.elements, r = e.x, n = e.y, o = e.z, a = Math.cos(r), s = Math.sin(r), u = Math.cos(n), c = Math.sin(n), l = Math.cos(o), h = Math.sin(o);
                if ("XYZ" === e.order) {
                    var p = a * l, d = a * h, f = s * l, m = s * h;
                    t[0] = u * l, t[4] = -u * h, t[8] = c, t[1] = d + f * c, t[5] = p - m * c, t[9] = -s * u, t[2] = m - p * c, t[6] = f + d * c, t[10] = a * u
                } else if ("YXZ" === e.order) {
                    var g = u * l, v = u * h, y = c * l, x = c * h;
                    t[0] = g + x * s, t[4] = y * s - v, t[8] = a * c, t[1] = a * h, t[5] = a * l, t[9] = -s, t[2] = v * s - y, t[6] = x + g * s, t[10] = a * u
                } else if ("ZXY" === e.order) {
                    var g = u * l, v = u * h, y = c * l, x = c * h;
                    t[0] = g - x * s, t[4] = -a * h, t[8] = y + v * s, t[1] = v + y * s, t[5] = a * l, t[9] = x - g * s, t[2] = -a * c, t[6] = s, t[10] = a * u
                } else if ("ZYX" === e.order) {
                    var p = a * l, d = a * h, f = s * l, m = s * h;
                    t[0] = u * l, t[4] = f * c - d, t[8] = p * c + m, t[1] = u * h, t[5] = m * c + p, t[9] = d * c - f, t[2] = -c, t[6] = s * u, t[10] = a * u
                } else if ("YZX" === e.order) {
                    var b = a * u, w = a * c, S = s * u, M = s * c;
                    t[0] = u * l, t[4] = M - b * h, t[8] = S * h + w, t[1] = h, t[5] = a * l, t[9] = -s * l, t[2] = -c * l, t[6] = w * h + S, t[10] = b - M * h
                } else if ("XZY" === e.order) {
                    var b = a * u, w = a * c, S = s * u, M = s * c;
                    t[0] = u * l, t[4] = -h, t[8] = c * l, t[1] = b * h + M, t[5] = a * l, t[9] = w * h - S, t[2] = S * h - w, t[6] = s * l, t[10] = M * h + b
                }
                return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            },
            setRotationFromQuaternion: function (e) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
            },
            makeRotationFromQuaternion: function (e) {
                var t = this.elements, r = e.x, n = e.y, i = e.z, o = e.w, a = r + r, s = n + n, u = i + i, c = r * a, l = r * s, h = r * u, p = n * s, d = n * u, f = i * u, m = o * a, g = o * s, v = o * u;
                return t[0] = 1 - (p + f), t[4] = l - v, t[8] = h + g, t[1] = l + v, t[5] = 1 - (c + f), t[9] = d - m, t[2] = h - g, t[6] = d + m, t[10] = 1 - (c + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            },
            lookAt: function () {
                var e, t, r;
                return function (n, o, a) {
                    void 0 === e && (e = new i.Vector3), void 0 === t && (t = new i.Vector3), void 0 === r && (r = new i.Vector3);
                    var s = this.elements;
                    return r.subVectors(n, o).normalize(), 0 === r.lengthSq() && (r.z = 1), e.crossVectors(a, r).normalize(), 0 === e.lengthSq() && (r.x += 1e-4, e.crossVectors(a, r).normalize()), t.crossVectors(r, e), s[0] = e.x, s[4] = t.x, s[8] = r.x, s[1] = e.y, s[5] = t.y, s[9] = r.y, s[2] = e.z, s[6] = t.z, s[10] = r.z, this
                }
            }(),
            multiply: function (e, t) {
                return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
            },
            multiplyMatrices: function (e, t) {
                var r = e.elements, n = t.elements, i = this.elements, o = r[0], a = r[4], s = r[8], u = r[12], c = r[1], l = r[5], h = r[9], p = r[13], d = r[2], f = r[6], m = r[10], g = r[14], v = r[3], y = r[7], x = r[11], b = r[15], w = n[0], S = n[4], M = n[8], T = n[12], _ = n[1], E = n[5], C = n[9], A = n[13], L = n[2], P = n[6], k = n[10], D = n[14], R = n[3], O = n[7], F = n[11], V = n[15];
                return i[0] = o * w + a * _ + s * L + u * R, i[4] = o * S + a * E + s * P + u * O, i[8] = o * M + a * C + s * k + u * F, i[12] = o * T + a * A + s * D + u * V, i[1] = c * w + l * _ + h * L + p * R, i[5] = c * S + l * E + h * P + p * O, i[9] = c * M + l * C + h * k + p * F, i[13] = c * T + l * A + h * D + p * V, i[2] = d * w + f * _ + m * L + g * R, i[6] = d * S + f * E + m * P + g * O, i[10] = d * M + f * C + m * k + g * F, i[14] = d * T + f * A + m * D + g * V, i[3] = v * w + y * _ + x * L + b * R, i[7] = v * S + y * E + x * P + b * O, i[11] = v * M + y * C + x * k + b * F, i[15] = v * T + y * A + x * D + b * V, this
            },
            multiplyToArray: function (e, t, r) {
                var n = this.elements;
                return this.multiplyMatrices(e, t), r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3], r[4] = n[4], r[5] = n[5], r[6] = n[6], r[7] = n[7], r[8] = n[8], r[9] = n[9], r[10] = n[10], r[11] = n[11], r[12] = n[12], r[13] = n[13], r[14] = n[14], r[15] = n[15], this
            },
            multiplyScalar: function (e) {
                var t = this.elements;
                return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
            },
            multiplyVector3: function (e) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
            },
            multiplyVector4: function (e) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            },
            multiplyVector3Array: function (e) {
                return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            },
            applyToVector3Array: function () {
                var e;
                return function (t, r, n) {
                    void 0 === e && (e = new i.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
                    for (var o = 0, a = r; n > o; o += 3, a += 3)e.fromArray(t, a), e.applyMatrix4(this), e.toArray(t, a);
                    return t
                }
            }(),
            applyToBuffer: function () {
                var e;
                return function (t, r, n) {
                    void 0 === e && (e = new i.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
                    for (var o = 0, a = r; n > o; o++, a++)e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
                    return t
                }
            }(),
            rotateAxis: function (e) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
            },
            crossVector: function (e) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            },
            determinant: function () {
                var e = this.elements, t = e[0], r = e[4], n = e[8], i = e[12], o = e[1], a = e[5], s = e[9], u = e[13], c = e[2], l = e[6], h = e[10], p = e[14], d = e[3], f = e[7], m = e[11], g = e[15];
                return d * (+i * s * l - n * u * l - i * a * h + r * u * h + n * a * p - r * s * p) + f * (+t * s * p - t * u * h + i * o * h - n * o * p + n * u * c - i * s * c) + m * (+t * u * l - t * a * p - i * o * l + r * o * p + i * a * c - r * u * c) + g * (-n * a * c - t * s * l + t * a * h + n * o * l - r * o * h + r * s * c)
            },
            transpose: function () {
                var e, t = this.elements;
                return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
            },
            flattenToArrayOffset: function (e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
            },
            getPosition: function () {
                var e;
                return function () {
                    void 0 === e && (e = new i.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                    var t = this.elements;
                    return e.set(t[12], t[13], t[14])
                }
            }(),
            setPosition: function (e) {
                var t = this.elements;
                return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
            },
            getInverse: function (e, t) {
                var r = this.elements, n = e.elements, i = n[0], o = n[4], a = n[8], s = n[12], u = n[1], c = n[5], l = n[9], h = n[13], p = n[2], d = n[6], f = n[10], m = n[14], g = n[3], v = n[7], y = n[11], x = n[15];
                r[0] = l * m * v - h * f * v + h * d * y - c * m * y - l * d * x + c * f * x, r[4] = s * f * v - a * m * v - s * d * y + o * m * y + a * d * x - o * f * x, r[8] = a * h * v - s * l * v + s * c * y - o * h * y - a * c * x + o * l * x, r[12] = s * l * d - a * h * d - s * c * f + o * h * f + a * c * m - o * l * m, r[1] = h * f * g - l * m * g - h * p * y + u * m * y + l * p * x - u * f * x, r[5] = a * m * g - s * f * g + s * p * y - i * m * y - a * p * x + i * f * x, r[9] = s * l * g - a * h * g - s * u * y + i * h * y + a * u * x - i * l * x, r[13] = a * h * p - s * l * p + s * u * f - i * h * f - a * u * m + i * l * m, r[2] = c * m * g - h * d * g + h * p * v - u * m * v - c * p * x + u * d * x, r[6] = s * d * g - o * m * g - s * p * v + i * m * v + o * p * x - i * d * x, r[10] = o * h * g - s * c * g + s * u * v - i * h * v - o * u * x + i * c * x, r[14] = s * c * p - o * h * p - s * u * d + i * h * d + o * u * m - i * c * m, r[3] = l * d * g - c * f * g - l * p * v + u * f * v + c * p * y - u * d * y, r[7] = o * f * g - a * d * g + a * p * v - i * f * v - o * p * y + i * d * y, r[11] = a * c * g - o * l * g - a * u * v + i * l * v + o * u * y - i * c * y, r[15] = o * l * p - a * c * p + a * u * d - i * l * d - o * u * f + i * c * f;
                var b = i * r[0] + u * r[4] + p * r[8] + g * r[12];
                if (0 === b) {
                    var w = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (t)throw new Error(w);
                    return console.warn(w), this.identity(), this
                }
                return this.multiplyScalar(1 / b), this
            },
            translate: function (e) {
                console.error("THREE.Matrix4: .translate() has been removed.")
            },
            rotateX: function (e) {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            },
            rotateY: function (e) {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            },
            rotateZ: function (e) {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            },
            rotateByAxis: function (e, t) {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            },
            scale: function (e) {
                var t = this.elements, r = e.x, n = e.y, i = e.z;
                return t[0] *= r, t[4] *= n, t[8] *= i, t[1] *= r, t[5] *= n, t[9] *= i, t[2] *= r, t[6] *= n, t[10] *= i, t[3] *= r, t[7] *= n, t[11] *= i, this
            },
            getMaxScaleOnAxis: function () {
                var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, r, n))
            },
            makeTranslation: function (e, t, r) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
            },
            makeRotationX: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
            },
            makeRotationY: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
            },
            makeRotationZ: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            makeRotationAxis: function (e, t) {
                var r = Math.cos(t), n = Math.sin(t), i = 1 - r, o = e.x, a = e.y, s = e.z, u = i * o, c = i * a;
                return this.set(u * o + r, u * a - n * s, u * s + n * a, 0, u * a + n * s, c * a + r, c * s - n * o, 0, u * s - n * a, c * s + n * o, i * s * s + r, 0, 0, 0, 0, 1), this
            },
            makeScale: function (e, t, r) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
            },
            compose: function (e, t, r) {
                return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
            },
            decompose: function () {
                var e, t;
                return function (r, n, o) {
                    void 0 === e && (e = new i.Vector3), void 0 === t && (t = new i.Matrix4);
                    var a = this.elements, s = e.set(a[0], a[1], a[2]).length(), u = e.set(a[4], a[5], a[6]).length(), c = e.set(a[8], a[9], a[10]).length(), l = this.determinant();
                    0 > l && (s = -s), r.x = a[12], r.y = a[13], r.z = a[14], t.elements.set(this.elements);
                    var h = 1 / s, p = 1 / u, d = 1 / c;
                    return t.elements[0] *= h, t.elements[1] *= h, t.elements[2] *= h, t.elements[4] *= p, t.elements[5] *= p, t.elements[6] *= p, t.elements[8] *= d, t.elements[9] *= d, t.elements[10] *= d, n.setFromRotationMatrix(t), o.x = s, o.y = u, o.z = c, this
                }
            }(),
            makeFrustum: function (e, t, r, n, i, o) {
                var a = this.elements, s = 2 * i / (t - e), u = 2 * i / (n - r), c = (t + e) / (t - e), l = (n + r) / (n - r), h = -(o + i) / (o - i), p = -2 * o * i / (o - i);
                return a[0] = s, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = u, a[9] = l, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = h, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
            },
            makePerspective: function (e, t, r, n) {
                var o = r * Math.tan(i.Math.degToRad(.5 * e)), a = -o, s = a * t, u = o * t;
                return this.makeFrustum(s, u, a, o, r, n)
            },
            makeOrthographic: function (e, t, r, n, i, o) {
                var a = this.elements, s = t - e, u = r - n, c = o - i, l = (t + e) / s, h = (r + n) / u, p = (o + i) / c;
                return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -l, a[1] = 0, a[5] = 2 / u, a[9] = 0, a[13] = -h, a[2] = 0, a[6] = 0, a[10] = -2 / c, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
            },
            equals: function (e) {
                for (var t = this.elements, r = e.elements, n = 0; 16 > n; n++)if (t[n] !== r[n])return !1;
                return !0
            },
            fromArray: function (e) {
                return this.elements.set(e), this
            },
            toArray: function () {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
            }
        },i.Ray = function (e, t) {
            this.origin = void 0 !== e ? e : new i.Vector3, this.direction = void 0 !== t ? t : new i.Vector3
        },i.Ray.prototype = {
            constructor: i.Ray, set: function (e, t) {
                return this.origin.copy(e), this.direction.copy(t), this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.origin.copy(e.origin), this.direction.copy(e.direction), this
            }, at: function (e, t) {
                var r = t || new i.Vector3;
                return r.copy(this.direction).multiplyScalar(e).add(this.origin)
            }, recast: function () {
                var e = new i.Vector3;
                return function (t) {
                    return this.origin.copy(this.at(t, e)), this
                }
            }(), closestPointToPoint: function (e, t) {
                var r = t || new i.Vector3;
                r.subVectors(e, this.origin);
                var n = r.dot(this.direction);
                return 0 > n ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
            }, distanceToPoint: function (e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }, distanceSqToPoint: function () {
                var e = new i.Vector3;
                return function (t) {
                    var r = e.subVectors(t, this.origin).dot(this.direction);
                    return 0 > r ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceToSquared(t))
                }
            }(), distanceSqToSegment: function () {
                var e = new i.Vector3, t = new i.Vector3, r = new i.Vector3;
                return function (n, i, o, a) {
                    e.copy(n).add(i).multiplyScalar(.5), t.copy(i).sub(n).normalize(), r.copy(this.origin).sub(e);
                    var s, u, c, l, h = .5 * n.distanceTo(i), p = -this.direction.dot(t), d = r.dot(this.direction), f = -r.dot(t), m = r.lengthSq(), g = Math.abs(1 - p * p);
                    if (g > 0)if (s = p * f - d, u = p * d - f, l = h * g, s >= 0)if (u >= -l)if (l >= u) {
                        var v = 1 / g;
                        s *= v, u *= v, c = s * (s + p * u + 2 * d) + u * (p * s + u + 2 * f) + m
                    } else u = h, s = Math.max(0, -(p * u + d)), c = -s * s + u * (u + 2 * f) + m; else u = -h, s = Math.max(0, -(p * u + d)), c = -s * s + u * (u + 2 * f) + m; else-l >= u ? (s = Math.max(0, -(-p * h + d)), u = s > 0 ? -h : Math.min(Math.max(-h, -f), h), c = -s * s + u * (u + 2 * f) + m) : l >= u ? (s = 0, u = Math.min(Math.max(-h, -f), h), c = u * (u + 2 * f) + m) : (s = Math.max(0, -(p * h + d)), u = s > 0 ? h : Math.min(Math.max(-h, -f), h), c = -s * s + u * (u + 2 * f) + m); else u = p > 0 ? -h : h, s = Math.max(0, -(p * u + d)), c = -s * s + u * (u + 2 * f) + m;
                    return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(t).multiplyScalar(u).add(e), c
                }
            }(), isIntersectionSphere: function (e) {
                return this.distanceToPoint(e.center) <= e.radius
            }, intersectSphere: function () {
                var e = new i.Vector3;
                return function (t, r) {
                    e.subVectors(t.center, this.origin);
                    var n = e.dot(this.direction), i = e.dot(e) - n * n, o = t.radius * t.radius;
                    if (i > o)return null;
                    var a = Math.sqrt(o - i), s = n - a, u = n + a;
                    return 0 > s && 0 > u ? null : 0 > s ? this.at(u, r) : this.at(s, r)
                }
            }(), isIntersectionPlane: function (e) {
                var t = e.distanceToPoint(this.origin);
                if (0 === t)return !0;
                var r = e.normal.dot(this.direction);
                return 0 > r * t ? !0 : !1
            }, distanceToPlane: function (e) {
                var t = e.normal.dot(this.direction);
                if (0 === t)return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                var r = -(this.origin.dot(e.normal) + e.constant) / t;
                return r >= 0 ? r : null
            }, intersectPlane: function (e, t) {
                var r = this.distanceToPlane(e);
                return null === r ? null : this.at(r, t)
            }, isIntersectionBox: function () {
                var e = new i.Vector3;
                return function (t) {
                    return null !== this.intersectBox(t, e)
                }
            }(), intersectBox: function (e, t) {
                var r, n, i, o, a, s, u = 1 / this.direction.x, c = 1 / this.direction.y, l = 1 / this.direction.z, h = this.origin;
                return u >= 0 ? (r = (e.min.x - h.x) * u, n = (e.max.x - h.x) * u) : (r = (e.max.x - h.x) * u, n = (e.min.x - h.x) * u), c >= 0 ? (i = (e.min.y - h.y) * c, o = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, o = (e.min.y - h.y) * c), r > o || i > n ? null : ((i > r || r !== r) && (r = i), (n > o || n !== n) && (n = o), l >= 0 ? (a = (e.min.z - h.z) * l, s = (e.max.z - h.z) * l) : (a = (e.max.z - h.z) * l, s = (e.min.z - h.z) * l), r > s || a > n ? null : ((a > r || r !== r) && (r = a), (n > s || n !== n) && (n = s), 0 > n ? null : this.at(r >= 0 ? r : n, t)))
            }, intersectTriangle: function () {
                var e = new i.Vector3, t = new i.Vector3, r = new i.Vector3, n = new i.Vector3;
                return function (i, o, a, s, u) {
                    t.subVectors(o, i), r.subVectors(a, i), n.crossVectors(t, r);
                    var c, l = this.direction.dot(n);
                    if (l > 0) {
                        if (s)return null;
                        c = 1
                    } else {
                        if (!(0 > l))return null;
                        c = -1, l = -l
                    }
                    e.subVectors(this.origin, i);
                    var h = c * this.direction.dot(r.crossVectors(e, r));
                    if (0 > h)return null;
                    var p = c * this.direction.dot(t.cross(e));
                    if (0 > p)return null;
                    if (h + p > l)return null;
                    var d = -c * e.dot(n);
                    return 0 > d ? null : this.at(d / l, u)
                }
            }(), applyMatrix4: function (e) {
                return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
            }, equals: function (e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }
        },i.Sphere = function (e, t) {
            this.center = void 0 !== e ? e : new i.Vector3, this.radius = void 0 !== t ? t : 0
        },i.Sphere.prototype = {
            constructor: i.Sphere, set: function (e, t) {
                return this.center.copy(e), this.radius = t, this
            }, setFromPoints: function () {
                var e = new i.Box3;
                return function (t, r) {
                    var n = this.center;
                    void 0 !== r ? n.copy(r) : e.setFromPoints(t).center(n);
                    for (var i = 0, o = 0, a = t.length; a > o; o++)i = Math.max(i, n.distanceToSquared(t[o]));
                    return this.radius = Math.sqrt(i), this
                }
            }(), clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.center.copy(e.center), this.radius = e.radius, this
            }, empty: function () {
                return this.radius <= 0
            }, containsPoint: function (e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            }, distanceToPoint: function (e) {
                return e.distanceTo(this.center) - this.radius
            }, intersectsSphere: function (e) {
                var t = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= t * t
            }, clampPoint: function (e, t) {
                var r = this.center.distanceToSquared(e), n = t || new i.Vector3;
                return n.copy(e), r > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
            }, getBoundingBox: function (e) {
                var t = e || new i.Box3;
                return t.set(this.center, this.center), t.expandByScalar(this.radius), t
            }, applyMatrix4: function (e) {
                return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
            }, translate: function (e) {
                return this.center.add(e), this
            }, equals: function (e) {
                return e.center.equals(this.center) && e.radius === this.radius
            }
        },i.Frustum = function (e, t, r, n, o, a) {
            this.planes = [void 0 !== e ? e : new i.Plane, void 0 !== t ? t : new i.Plane, void 0 !== r ? r : new i.Plane, void 0 !== n ? n : new i.Plane, void 0 !== o ? o : new i.Plane, void 0 !== a ? a : new i.Plane]
        },i.Frustum.prototype = {
            constructor: i.Frustum, set: function (e, t, r, n, i, o) {
                var a = this.planes;
                return a[0].copy(e), a[1].copy(t), a[2].copy(r), a[3].copy(n), a[4].copy(i), a[5].copy(o), this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                for (var t = this.planes, r = 0; 6 > r; r++)t[r].copy(e.planes[r]);
                return this
            }, setFromMatrix: function (e) {
                var t = this.planes, r = e.elements, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], u = r[5], c = r[6], l = r[7], h = r[8], p = r[9], d = r[10], f = r[11], m = r[12], g = r[13], v = r[14], y = r[15];
                return t[0].setComponents(a - n, l - s, f - h, y - m).normalize(), t[1].setComponents(a + n, l + s, f + h, y + m).normalize(), t[2].setComponents(a + i, l + u, f + p, y + g).normalize(), t[3].setComponents(a - i, l - u, f - p, y - g).normalize(), t[4].setComponents(a - o, l - c, f - d, y - v).normalize(), t[5].setComponents(a + o, l + c, f + d, y + v).normalize(), this
            }, intersectsObject: function () {
                var e = new i.Sphere;
                return function (t) {
                    var r = t.geometry;
                    return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
                }
            }(), intersectsSphere: function (e) {
                for (var t = this.planes, r = e.center, n = -e.radius, i = 0; 6 > i; i++) {
                    var o = t[i].distanceToPoint(r);
                    if (n > o)return !1
                }
                return !0
            }, intersectsBox: function () {
                var e = new i.Vector3, t = new i.Vector3;
                return function (r) {
                    for (var n = this.planes, i = 0; 6 > i; i++) {
                        var o = n[i];
                        e.x = o.normal.x > 0 ? r.min.x : r.max.x, t.x = o.normal.x > 0 ? r.max.x : r.min.x, e.y = o.normal.y > 0 ? r.min.y : r.max.y, t.y = o.normal.y > 0 ? r.max.y : r.min.y, e.z = o.normal.z > 0 ? r.min.z : r.max.z, t.z = o.normal.z > 0 ? r.max.z : r.min.z;
                        var a = o.distanceToPoint(e), s = o.distanceToPoint(t);
                        if (0 > a && 0 > s)return !1
                    }
                    return !0
                }
            }(), containsPoint: function (e) {
                for (var t = this.planes, r = 0; 6 > r; r++)if (t[r].distanceToPoint(e) < 0)return !1;
                return !0
            }
        },i.Plane = function (e, t) {
            this.normal = void 0 !== e ? e : new i.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
        },i.Plane.prototype = {
            constructor: i.Plane, set: function (e, t) {
                return this.normal.copy(e), this.constant = t, this
            }, setComponents: function (e, t, r, n) {
                return this.normal.set(e, t, r), this.constant = n, this
            }, setFromNormalAndCoplanarPoint: function (e, t) {
                return this.normal.copy(e), this.constant = -t.dot(this.normal), this
            }, setFromCoplanarPoints: function () {
                var e = new i.Vector3, t = new i.Vector3;
                return function (r, n, i) {
                    var o = e.subVectors(i, n).cross(t.subVectors(r, n)).normalize();
                    return this.setFromNormalAndCoplanarPoint(o, r), this
                }
            }(), clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.normal.copy(e.normal), this.constant = e.constant, this
            }, normalize: function () {
                var e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e), this.constant *= e, this
            }, negate: function () {
                return this.constant *= -1, this.normal.negate(), this
            }, distanceToPoint: function (e) {
                return this.normal.dot(e) + this.constant
            }, distanceToSphere: function (e) {
                return this.distanceToPoint(e.center) - e.radius
            }, projectPoint: function (e, t) {
                return this.orthoPoint(e, t).sub(e).negate()
            }, orthoPoint: function (e, t) {
                var r = this.distanceToPoint(e), n = t || new i.Vector3;
                return n.copy(this.normal).multiplyScalar(r)
            }, isIntersectionLine: function (e) {
                var t = this.distanceToPoint(e.start), r = this.distanceToPoint(e.end);
                return 0 > t && r > 0 || 0 > r && t > 0
            }, intersectLine: function () {
                var e = new i.Vector3;
                return function (t, r) {
                    var n = r || new i.Vector3, o = t.delta(e), a = this.normal.dot(o);
                    if (0 !== a) {
                        var s = -(t.start.dot(this.normal) + this.constant) / a;
                        if (!(0 > s || s > 1))return n.copy(o).multiplyScalar(s).add(t.start)
                    } else if (0 === this.distanceToPoint(t.start))return n.copy(t.start)
                }
            }(), coplanarPoint: function (e) {
                var t = e || new i.Vector3;
                return t.copy(this.normal).multiplyScalar(-this.constant)
            }, applyMatrix4: function () {
                var e = new i.Vector3, t = new i.Vector3, r = new i.Matrix3;
                return function (n, i) {
                    var o = i || r.getNormalMatrix(n), a = e.copy(this.normal).applyMatrix3(o), s = this.coplanarPoint(t);
                    return s.applyMatrix4(n), this.setFromNormalAndCoplanarPoint(a, s), this
                }
            }(), translate: function (e) {
                return this.constant = this.constant - e.dot(this.normal), this
            }, equals: function (e) {
                return e.normal.equals(this.normal) && e.constant === this.constant
            }
        },i.Math = {
            generateUUID: function () {
                var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), n = 0;
                return function () {
                    for (var i = 0; 36 > i; i++)8 === i || 13 === i || 18 === i || 23 === i ? r[i] = "-" : 14 === i ? r[i] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0), e = 15 & n, n >>= 4, r[i] = t[19 === i ? 3 & e | 8 : e]);
                    return r.join("");
                }
            }(), clamp: function (e, t, r) {
                return Math.max(t, Math.min(r, e))
            }, euclideanModulo: function (e, t) {
                return (e % t + t) % t
            }, mapLinear: function (e, t, r, n, i) {
                return n + (e - t) * (i - n) / (r - t)
            }, smoothstep: function (e, t, r) {
                return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
            }, smootherstep: function (e, t, r) {
                return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
            }, random16: function () {
                return (65280 * Math.random() + 255 * Math.random()) / 65535
            }, randInt: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }, randFloat: function (e, t) {
                return e + Math.random() * (t - e)
            }, randFloatSpread: function (e) {
                return e * (.5 - Math.random())
            }, degToRad: function () {
                var e = Math.PI / 180;
                return function (t) {
                    return t * e
                }
            }(), radToDeg: function () {
                var e = 180 / Math.PI;
                return function (t) {
                    return t * e
                }
            }(), isPowerOfTwo: function (e) {
                return 0 === (e & e - 1) && 0 !== e
            }, nearestPowerOfTwo: function (e) {
                return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
            }, nextPowerOfTwo: function (e) {
                return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
            }
        },i.Spline = function (e) {
            function t(e, t, r, n, i, o, a) {
                var s = .5 * (r - e), u = .5 * (n - t);
                return (2 * (t - r) + s + u) * a + (-3 * (t - r) - 2 * s - u) * o + s * i + t
            }

            this.points = e;
            var r, n, o, a, s, u, c, l, h, p = [], d = {x: 0, y: 0, z: 0};
            this.initFromArray = function (e) {
                this.points = [];
                for (var t = 0; t < e.length; t++)this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
            }, this.getPoint = function (e) {
                return r = (this.points.length - 1) * e, n = Math.floor(r), o = r - n, p[0] = 0 === n ? n : n - 1, p[1] = n, p[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1, p[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2, u = this.points[p[0]], c = this.points[p[1]], l = this.points[p[2]], h = this.points[p[3]], a = o * o, s = o * a, d.x = t(u.x, c.x, l.x, h.x, o, a, s), d.y = t(u.y, c.y, l.y, h.y, o, a, s), d.z = t(u.z, c.z, l.z, h.z, o, a, s), d
            }, this.getControlPointsArray = function () {
                var e, t, r = this.points.length, n = [];
                for (e = 0; r > e; e++)t = this.points[e], n[e] = [t.x, t.y, t.z];
                return n
            }, this.getLength = function (e) {
                var t, r, n, o, a = 0, s = 0, u = 0, c = new i.Vector3, l = new i.Vector3, h = [], p = 0;
                for (h[0] = 0, e || (e = 100), n = this.points.length * e, c.copy(this.points[0]), t = 1; n > t; t++)r = t / n, o = this.getPoint(r), l.copy(o), p += l.distanceTo(c), c.copy(o), a = (this.points.length - 1) * r, s = Math.floor(a), s !== u && (h[s] = p, u = s);
                return h[h.length] = p, {chunks: h, total: p}
            }, this.reparametrizeByArcLength = function (e) {
                var t, r, n, o, a, s, u, c, l = [], h = new i.Vector3, p = this.getLength();
                for (l.push(h.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                    for (s = p.chunks[t] - p.chunks[t - 1], u = Math.ceil(e * s / p.total), o = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), r = 1; u - 1 > r; r++)n = o + r * (1 / u) * (a - o), c = this.getPoint(n), l.push(h.copy(c).clone());
                    l.push(h.copy(this.points[t]).clone())
                }
                this.points = l
            }
        },i.Triangle = function (e, t, r) {
            this.a = void 0 !== e ? e : new i.Vector3, this.b = void 0 !== t ? t : new i.Vector3, this.c = void 0 !== r ? r : new i.Vector3
        },i.Triangle.normal = function () {
            var e = new i.Vector3;
            return function (t, r, n, o) {
                var a = o || new i.Vector3;
                a.subVectors(n, r), e.subVectors(t, r), a.cross(e);
                var s = a.lengthSq();
                return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0)
            }
        }(),i.Triangle.barycoordFromPoint = function () {
            var e = new i.Vector3, t = new i.Vector3, r = new i.Vector3;
            return function (n, o, a, s, u) {
                e.subVectors(s, o), t.subVectors(a, o), r.subVectors(n, o);
                var c = e.dot(e), l = e.dot(t), h = e.dot(r), p = t.dot(t), d = t.dot(r), f = c * p - l * l, m = u || new i.Vector3;
                if (0 === f)return m.set(-2, -1, -1);
                var g = 1 / f, v = (p * h - l * d) * g, y = (c * d - l * h) * g;
                return m.set(1 - v - y, y, v)
            }
        }(),i.Triangle.containsPoint = function () {
            var e = new i.Vector3;
            return function (t, r, n, o) {
                var a = i.Triangle.barycoordFromPoint(t, r, n, o, e);
                return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
            }
        }(),i.Triangle.prototype = {
            constructor: i.Triangle, set: function (e, t, r) {
                return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
            }, setFromPointsAndIndices: function (e, t, r, n) {
                return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[n]), this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
            }, area: function () {
                var e = new i.Vector3, t = new i.Vector3;
                return function () {
                    return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
                }
            }(), midpoint: function (e) {
                var t = e || new i.Vector3;
                return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }, normal: function (e) {
                return i.Triangle.normal(this.a, this.b, this.c, e)
            }, plane: function (e) {
                var t = e || new i.Plane;
                return t.setFromCoplanarPoints(this.a, this.b, this.c)
            }, barycoordFromPoint: function (e, t) {
                return i.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
            }, containsPoint: function (e) {
                return i.Triangle.containsPoint(e, this.a, this.b, this.c)
            }, equals: function (e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }
        },i.Channels = function () {
            this.mask = 1
        },i.Channels.prototype = {
            constructor: i.Channels, set: function (e) {
                this.mask = 1 << e
            }, enable: function (e) {
                this.mask |= 1 << e
            }, toggle: function (e) {
                this.mask ^= 1 << e
            }, disable: function (e) {
                this.mask &= ~(1 << e)
            }
        },i.Clock = function (e) {
            this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        },i.Clock.prototype = {
            constructor: i.Clock, start: function () {
                this.startTime = n.performance.now(), this.oldTime = this.startTime, this.running = !0
            }, stop: function () {
                this.getElapsedTime(), this.running = !1
            }, getElapsedTime: function () {
                return this.getDelta(), this.elapsedTime
            }, getDelta: function () {
                var e = 0;
                if (this.autoStart && !this.running && this.start(), this.running) {
                    var t = n.performance.now();
                    e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
                }
                return e
            }
        },i.EventDispatcher = function () {
        },i.EventDispatcher.prototype = {
            constructor: i.EventDispatcher, apply: function (e) {
                e.addEventListener = i.EventDispatcher.prototype.addEventListener, e.hasEventListener = i.EventDispatcher.prototype.hasEventListener, e.removeEventListener = i.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = i.EventDispatcher.prototype.dispatchEvent
            }, addEventListener: function (e, t) {
                void 0 === this._listeners && (this._listeners = {});
                var r = this._listeners;
                void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
            }, hasEventListener: function (e, t) {
                if (void 0 === this._listeners)return !1;
                var r = this._listeners;
                return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
            }, removeEventListener: function (e, t) {
                if (void 0 !== this._listeners) {
                    var r = this._listeners, n = r[e];
                    if (void 0 !== n) {
                        var i = n.indexOf(t);
                        -1 !== i && n.splice(i, 1)
                    }
                }
            }, dispatchEvent: function (e) {
                if (void 0 !== this._listeners) {
                    var t = this._listeners, r = t[e.type];
                    if (void 0 !== r) {
                        e.target = this;
                        for (var n = [], i = r.length, o = 0; i > o; o++)n[o] = r[o];
                        for (var o = 0; i > o; o++)n[o].call(this, e)
                    }
                }
            }
        },function (e) {
            function t(e, t) {
                return e.distance - t.distance
            }

            function r(e, t, n, i) {
                if (e.visible !== !1 && (e.raycast(t, n), i === !0))for (var o = e.children, a = 0, s = o.length; s > a; a++)r(o[a], t, n, !0)
            }

            e.Raycaster = function (t, r, n, i) {
                this.ray = new e.Ray(t, r), this.near = n || 0, this.far = i || 1 / 0, this.params = {
                    Mesh: {},
                    Line: {},
                    LOD: {},
                    Points: {threshold: 1},
                    Sprite: {}
                }, Object.defineProperties(this.params, {
                    PointCloud: {
                        get: function () {
                            return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                        }
                    }
                })
            }, e.Raycaster.prototype = {
                constructor: e.Raycaster, linePrecision: 1, set: function (e, t) {
                    this.ray.set(e, t)
                }, setFromCamera: function (t, r) {
                    r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
                }, intersectObject: function (e, n) {
                    var i = [];
                    return r(e, this, i, n), i.sort(t), i
                }, intersectObjects: function (e, n) {
                    var i = [];
                    if (Array.isArray(e) === !1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
                    for (var o = 0, a = e.length; a > o; o++)r(e[o], this, i, n);
                    return i.sort(t), i
                }
            }
        }(i),i.Object3D = function () {
            function e() {
                o.setFromEuler(n, !1)
            }

            function t() {
                n.setFromQuaternion(o, void 0, !1)
            }

            Object.defineProperty(this, "id", {value: i.Object3DIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.channels = new i.Channels, this.children = [], this.up = i.Object3D.DefaultUp.clone();
            var r = new i.Vector3, n = new i.Euler, o = new i.Quaternion, a = new i.Vector3(1, 1, 1);
            n.onChange(e), o.onChange(t), Object.defineProperties(this, {
                position: {enumerable: !0, value: r},
                rotation: {enumerable: !0, value: n},
                quaternion: {enumerable: !0, value: o},
                scale: {enumerable: !0, value: a},
                modelViewMatrix: {value: new i.Matrix4},
                normalMatrix: {value: new i.Matrix3}
            }), this.rotationAutoUpdate = !0, this.matrix = new i.Matrix4, this.matrixWorld = new i.Matrix4, this.matrixAutoUpdate = i.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
        },i.Object3D.DefaultUp = new i.Vector3(0, 1, 0),i.Object3D.DefaultMatrixAutoUpdate = !0,i.Object3D.prototype = {
            constructor: i.Object3D,
            get eulerOrder() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set eulerOrder(e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
            },
            get useQuaternion() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set useQuaternion(e) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set renderDepth(e) {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            },
            applyMatrix: function (e) {
                this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function (e, t) {
                this.quaternion.setFromAxisAngle(e, t)
            },
            setRotationFromEuler: function (e) {
                this.quaternion.setFromEuler(e, !0)
            },
            setRotationFromMatrix: function (e) {
                this.quaternion.setFromRotationMatrix(e)
            },
            setRotationFromQuaternion: function (e) {
                this.quaternion.copy(e)
            },
            rotateOnAxis: function () {
                var e = new i.Quaternion;
                return function (t, r) {
                    return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this
                }
            }(),
            rotateX: function () {
                var e = new i.Vector3(1, 0, 0);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            rotateY: function () {
                var e = new i.Vector3(0, 1, 0);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            rotateZ: function () {
                var e = new i.Vector3(0, 0, 1);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            translateOnAxis: function () {
                var e = new i.Vector3;
                return function (t, r) {
                    return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
                }
            }(),
            translate: function (e, t) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
            },
            translateX: function () {
                var e = new i.Vector3(1, 0, 0);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            translateY: function () {
                var e = new i.Vector3(0, 1, 0);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            translateZ: function () {
                var e = new i.Vector3(0, 0, 1);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            localToWorld: function (e) {
                return e.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function () {
                var e = new i.Matrix4;
                return function (t) {
                    return t.applyMatrix4(e.getInverse(this.matrixWorld))
                }
            }(),
            lookAt: function () {
                var e = new i.Matrix4;
                return function (t) {
                    e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
                }
            }(),
            add: function (e) {
                if (arguments.length > 1) {
                    for (var t = 0; t < arguments.length; t++)this.add(arguments[t]);
                    return this
                }
                return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof i.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
            },
            remove: function (e) {
                if (arguments.length > 1)for (var t = 0; t < arguments.length; t++)this.remove(arguments[t]);
                var r = this.children.indexOf(e);
                -1 !== r && (e.parent = null, e.dispatchEvent({type: "removed"}), this.children.splice(r, 1))
            },
            getChildByName: function (e) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
            },
            getObjectById: function (e) {
                return this.getObjectByProperty("id", e)
            },
            getObjectByName: function (e) {
                return this.getObjectByProperty("name", e)
            },
            getObjectByProperty: function (e, t) {
                if (this[e] === t)return this;
                for (var r = 0, n = this.children.length; n > r; r++) {
                    var i = this.children[r], o = i.getObjectByProperty(e, t);
                    if (void 0 !== o)return o
                }
            },
            getWorldPosition: function (e) {
                var t = e || new i.Vector3;
                return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function () {
                var e = new i.Vector3, t = new i.Vector3;
                return function (r) {
                    var n = r || new i.Quaternion;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, n, t), n
                }
            }(),
            getWorldRotation: function () {
                var e = new i.Quaternion;
                return function (t) {
                    var r = t || new i.Euler;
                    return this.getWorldQuaternion(e), r.setFromQuaternion(e, this.rotation.order, !1)
                }
            }(),
            getWorldScale: function () {
                var e = new i.Vector3, t = new i.Quaternion;
                return function (r) {
                    var n = r || new i.Vector3;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, n), n
                }
            }(),
            getWorldDirection: function () {
                var e = new i.Quaternion;
                return function (t) {
                    var r = t || new i.Vector3;
                    return this.getWorldQuaternion(e), r.set(0, 0, 1).applyQuaternion(e)
                }
            }(),
            raycast: function () {
            },
            traverse: function (e) {
                e(this);
                for (var t = this.children, r = 0, n = t.length; n > r; r++)t[r].traverse(e)
            },
            traverseVisible: function (e) {
                if (this.visible !== !1) {
                    e(this);
                    for (var t = this.children, r = 0, n = t.length; n > r; r++)t[r].traverseVisible(e)
                }
            },
            traverseAncestors: function (e) {
                var t = this.parent;
                null !== t && (e(t), t.traverseAncestors(e))
            },
            updateMatrix: function () {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function (e) {
                this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                for (var t = 0, r = this.children.length; r > t; t++)this.children[t].updateMatrixWorld(e)
            },
            toJSON: function (e) {
                function t(e) {
                    var t = [];
                    for (var r in e) {
                        var n = e[r];
                        delete n.metadata, t.push(n)
                    }
                    return t
                }

                var r = void 0 === e, n = {};
                r && (e = {geometries: {}, materials: {}, textures: {}, images: {}}, n.metadata = {
                    version: 4.4,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                var i = {};
                if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), i.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), i.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), i.material = this.material.uuid), this.children.length > 0) {
                    i.children = [];
                    for (var o = 0; o < this.children.length; o++)i.children.push(this.children[o].toJSON(e).object)
                }
                if (r) {
                    var a = t(e.geometries), s = t(e.materials), u = t(e.textures), c = t(e.images);
                    a.length > 0 && (n.geometries = a), s.length > 0 && (n.materials = s), u.length > 0 && (n.textures = u), c.length > 0 && (n.images = c)
                }
                return n.object = i, n
            },
            clone: function (e) {
                return (new this.constructor).copy(this, e)
            },
            copy: function (e, t) {
                if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.rotationAutoUpdate = e.rotationAutoUpdate, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)for (var r = 0; r < e.children.length; r++) {
                    var n = e.children[r];
                    this.add(n.clone())
                }
                return this
            }
        },i.EventDispatcher.prototype.apply(i.Object3D.prototype),i.Object3DIdCount = 0,i.Face3 = function (e, t, r, n, o, a) {
            this.a = e, this.b = t, this.c = r, this.normal = n instanceof i.Vector3 ? n : new i.Vector3, this.vertexNormals = Array.isArray(n) ? n : [], this.color = o instanceof i.Color ? o : new i.Color, this.vertexColors = Array.isArray(o) ? o : [], this.materialIndex = void 0 !== a ? a : 0
        },i.Face3.prototype = {
            constructor: i.Face3, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
                for (var t = 0, r = e.vertexNormals.length; r > t; t++)this.vertexNormals[t] = e.vertexNormals[t].clone();
                for (var t = 0, r = e.vertexColors.length; r > t; t++)this.vertexColors[t] = e.vertexColors[t].clone();
                return this
            }
        },i.Face4 = function (e, t, r, n, o, a, s) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new i.Face3(e, t, r, o, a, s)
        },i.BufferAttribute = function (e, t) {
            this.uuid = i.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        },i.BufferAttribute.prototype = {
            constructor: i.BufferAttribute, get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            }, get count() {
                return this.array.length / this.itemSize
            }, set needsUpdate(e) {
                e === !0 && this.version++
            }, setDynamic: function (e) {
                return this.dynamic = e, this
            }, copy: function (e) {
                return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
            }, copyAt: function (e, t, r) {
                e *= this.itemSize, r *= t.itemSize;
                for (var n = 0, i = this.itemSize; i > n; n++)this.array[e + n] = t.array[r + n];
                return this
            }, copyArray: function (e) {
                return this.array.set(e), this
            }, copyColorsArray: function (e) {
                for (var t = this.array, r = 0, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new i.Color), t[r++] = a.r, t[r++] = a.g, t[r++] = a.b
                }
                return this
            }, copyIndicesArray: function (e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    t[r++] = o.a, t[r++] = o.b, t[r++] = o.c
                }
                return this
            }, copyVector2sArray: function (e) {
                for (var t = this.array, r = 0, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new i.Vector2), t[r++] = a.x, t[r++] = a.y
                }
                return this
            }, copyVector3sArray: function (e) {
                for (var t = this.array, r = 0, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new i.Vector3), t[r++] = a.x, t[r++] = a.y, t[r++] = a.z
                }
                return this
            }, copyVector4sArray: function (e) {
                for (var t = this.array, r = 0, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new i.Vector4), t[r++] = a.x, t[r++] = a.y, t[r++] = a.z, t[r++] = a.w
                }
                return this
            }, set: function (e, t) {
                return void 0 === t && (t = 0), this.array.set(e, t), this
            }, getX: function (e) {
                return this.array[e * this.itemSize]
            }, setX: function (e, t) {
                return this.array[e * this.itemSize] = t, this
            }, getY: function (e) {
                return this.array[e * this.itemSize + 1]
            }, setY: function (e, t) {
                return this.array[e * this.itemSize + 1] = t, this
            }, getZ: function (e) {
                return this.array[e * this.itemSize + 2]
            }, setZ: function (e, t) {
                return this.array[e * this.itemSize + 2] = t, this
            }, getW: function (e) {
                return this.array[e * this.itemSize + 3]
            }, setW: function (e, t) {
                return this.array[e * this.itemSize + 3] = t, this
            }, setXY: function (e, t, r) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this
            }, setXYZ: function (e, t, r, n) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this
            }, setXYZW: function (e, t, r, n, i) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this.array[e + 3] = i, this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }
        },i.Int8Attribute = function (e, t) {
            return new i.BufferAttribute(new Int8Array(e), t)
        },i.Uint8Attribute = function (e, t) {
            return new i.BufferAttribute(new Uint8Array(e), t)
        },i.Uint8ClampedAttribute = function (e, t) {
            return new i.BufferAttribute(new Uint8ClampedArray(e), t)
        },i.Int16Attribute = function (e, t) {
            return new i.BufferAttribute(new Int16Array(e), t)
        },i.Uint16Attribute = function (e, t) {
            return new i.BufferAttribute(new Uint16Array(e), t)
        },i.Int32Attribute = function (e, t) {
            return new i.BufferAttribute(new Int32Array(e), t)
        },i.Uint32Attribute = function (e, t) {
            return new i.BufferAttribute(new Uint32Array(e), t)
        },i.Float32Attribute = function (e, t) {
            return new i.BufferAttribute(new Float32Array(e), t)
        },i.Float64Attribute = function (e, t) {
            return new i.BufferAttribute(new Float64Array(e), t)
        },i.DynamicBufferAttribute = function (e, t) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new i.BufferAttribute(e, t).setDynamic(!0)
        },i.InstancedBufferAttribute = function (e, t, r) {
            i.BufferAttribute.call(this, e, t), this.meshPerAttribute = r || 1
        },i.InstancedBufferAttribute.prototype = Object.create(i.BufferAttribute.prototype),i.InstancedBufferAttribute.prototype.constructor = i.InstancedBufferAttribute,i.InstancedBufferAttribute.prototype.copy = function (e) {
            return i.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        },i.InterleavedBuffer = function (e, t) {
            this.uuid = i.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        },i.InterleavedBuffer.prototype = {
            constructor: i.InterleavedBuffer, get length() {
                return this.array.length
            }, get count() {
                return this.array.length / this.stride
            }, set needsUpdate(e) {
                e === !0 && this.version++
            }, setDynamic: function (e) {
                return this.dynamic = e, this
            }, copy: function (e) {
                this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic
            }, copyAt: function (e, t, r) {
                e *= this.stride, r *= t.stride;
                for (var n = 0, i = this.stride; i > n; n++)this.array[e + n] = t.array[r + n];
                return this
            }, set: function (e, t) {
                return void 0 === t && (t = 0), this.array.set(e, t), this
            }, clone: function () {
                return (new this.constructor).copy(this)
            }
        },i.InstancedInterleavedBuffer = function (e, t, r) {
            i.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = r || 1
        },i.InstancedInterleavedBuffer.prototype = Object.create(i.InterleavedBuffer.prototype),i.InstancedInterleavedBuffer.prototype.constructor = i.InstancedInterleavedBuffer,i.InstancedInterleavedBuffer.prototype.copy = function (e) {
            return i.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        },i.InterleavedBufferAttribute = function (e, t, r) {
            this.uuid = i.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = r
        },i.InterleavedBufferAttribute.prototype = {
            constructor: i.InterleavedBufferAttribute, get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            }, get count() {
                return this.data.array.length / this.data.stride
            }, setX: function (e, t) {
                return this.data.array[e * this.data.stride + this.offset] = t, this
            }, setY: function (e, t) {
                return this.data.array[e * this.data.stride + this.offset + 1] = t, this
            }, setZ: function (e, t) {
                return this.data.array[e * this.data.stride + this.offset + 2] = t, this
            }, setW: function (e, t) {
                return this.data.array[e * this.data.stride + this.offset + 3] = t, this
            }, getX: function (e) {
                return this.data.array[e * this.data.stride + this.offset]
            }, getY: function (e) {
                return this.data.array[e * this.data.stride + this.offset + 1]
            }, getZ: function (e) {
                return this.data.array[e * this.data.stride + this.offset + 2]
            }, getW: function (e) {
                return this.data.array[e * this.data.stride + this.offset + 3]
            }, setXY: function (e, t, r) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this
            }, setXYZ: function (e, t, r, n) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this
            }, setXYZW: function (e, t, r, n, i) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this.data.array[e + 3] = i, this
            }
        },i.Geometry = function () {
            Object.defineProperty(this, "id", {value: i.GeometryIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
        },i.Geometry.prototype = {
            constructor: i.Geometry, applyMatrix: function (e) {
                for (var t = (new i.Matrix3).getNormalMatrix(e), r = 0, n = this.vertices.length; n > r; r++) {
                    var o = this.vertices[r];
                    o.applyMatrix4(e)
                }
                for (var r = 0, n = this.faces.length; n > r; r++) {
                    var a = this.faces[r];
                    a.normal.applyMatrix3(t).normalize();
                    for (var s = 0, u = a.vertexNormals.length; u > s; s++)a.vertexNormals[s].applyMatrix3(t).normalize()
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0
            }, rotateX: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
                }
            }(), rotateY: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
                }
            }(), rotateZ: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
                }
            }(), translate: function () {
                var e;
                return function (t, r, n) {
                    return void 0 === e && (e = new i.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
                }
            }(), scale: function () {
                var e;
                return function (t, r, n) {
                    return void 0 === e && (e = new i.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
                }
            }(), lookAt: function () {
                var e;
                return function (t) {
                    void 0 === e && (e = new i.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
                }
            }(), fromBufferGeometry: function (e) {
                function t(e, t, n) {
                    var o = void 0 !== s ? [h[e].clone(), h[t].clone(), h[n].clone()] : [], a = void 0 !== u ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[n].clone()] : [], f = new i.Face3(e, t, n, o, a);
                    r.faces.push(f), void 0 !== c && r.faceVertexUvs[0].push([p[e].clone(), p[t].clone(), p[n].clone()]), void 0 !== l && r.faceVertexUvs[1].push([d[e].clone(), d[t].clone(), d[n].clone()])
                }

                var r = this, n = null !== e.index ? e.index.array : void 0, o = e.attributes, a = o.position.array, s = void 0 !== o.normal ? o.normal.array : void 0, u = void 0 !== o.color ? o.color.array : void 0, c = void 0 !== o.uv ? o.uv.array : void 0, l = void 0 !== o.uv2 ? o.uv2.array : void 0;
                void 0 !== l && (this.faceVertexUvs[1] = []);
                for (var h = [], p = [], d = [], f = 0, m = 0, g = 0; f < a.length; f += 3, m += 2, g += 4)r.vertices.push(new i.Vector3(a[f], a[f + 1], a[f + 2])), void 0 !== s && h.push(new i.Vector3(s[f], s[f + 1], s[f + 2])), void 0 !== u && r.colors.push(new i.Color(u[f], u[f + 1], u[f + 2])), void 0 !== c && p.push(new i.Vector2(c[m], c[m + 1])), void 0 !== l && d.push(new i.Vector2(l[m], l[m + 1]));
                if (void 0 !== n) {
                    var v = e.groups;
                    if (v.length > 0)for (var f = 0; f < v.length; f++)for (var y = v[f], x = y.start, b = y.count, m = x, w = x + b; w > m; m += 3)t(n[m], n[m + 1], n[m + 2]); else for (var f = 0; f < n.length; f += 3)t(n[f], n[f + 1], n[f + 2])
                } else for (var f = 0; f < a.length / 3; f += 3)t(f, f + 1, f + 2);
                return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
            }, center: function () {
                this.computeBoundingBox();
                var e = this.boundingBox.center().negate();
                return this.translate(e.x, e.y, e.z), e
            }, normalize: function () {
                this.computeBoundingSphere();
                var e = this.boundingSphere.center, t = this.boundingSphere.radius, r = 0 === t ? 1 : 1 / t, n = new i.Matrix4;
                return n.set(r, 0, 0, -r * e.x, 0, r, 0, -r * e.y, 0, 0, r, -r * e.z, 0, 0, 0, 1), this.applyMatrix(n), this
            }, computeFaceNormals: function () {
                for (var e = new i.Vector3, t = new i.Vector3, r = 0, n = this.faces.length; n > r; r++) {
                    var o = this.faces[r], a = this.vertices[o.a], s = this.vertices[o.b], u = this.vertices[o.c];
                    e.subVectors(u, s), t.subVectors(a, s), e.cross(t), e.normalize(), o.normal.copy(e)
                }
            }, computeVertexNormals: function (e) {
                var t, r, n, o, a, s;
                for (s = new Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++)s[t] = new i.Vector3;
                if (e) {
                    var u, c, l, h = new i.Vector3, p = new i.Vector3;
                    for (n = 0, o = this.faces.length; o > n; n++)a = this.faces[n], u = this.vertices[a.a], c = this.vertices[a.b], l = this.vertices[a.c], h.subVectors(l, c), p.subVectors(u, c), h.cross(p), s[a.a].add(h), s[a.b].add(h), s[a.c].add(h)
                } else for (n = 0, o = this.faces.length; o > n; n++)a = this.faces[n], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
                for (t = 0, r = this.vertices.length; r > t; t++)s[t].normalize();
                for (n = 0, o = this.faces.length; o > n; n++) {
                    a = this.faces[n];
                    var d = a.vertexNormals;
                    3 === d.length ? (d[0].copy(s[a.a]), d[1].copy(s[a.b]), d[2].copy(s[a.c])) : (d[0] = s[a.a].clone(), d[1] = s[a.b].clone(), d[2] = s[a.c].clone())
                }
            }, computeMorphNormals: function () {
                var e, t, r, n, o;
                for (r = 0, n = this.faces.length; n > r; r++)for (o = this.faces[r], o.__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; t > e; e++)o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
                var a = new i.Geometry;
                for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                    if (!this.morphNormals[e]) {
                        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                        var s, u, c = this.morphNormals[e].faceNormals, l = this.morphNormals[e].vertexNormals;
                        for (r = 0, n = this.faces.length; n > r; r++)s = new i.Vector3, u = {
                            a: new i.Vector3,
                            b: new i.Vector3,
                            c: new i.Vector3
                        }, c.push(s), l.push(u)
                    }
                    var h = this.morphNormals[e];
                    a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                    var s, u;
                    for (r = 0, n = this.faces.length; n > r; r++)o = this.faces[r], s = h.faceNormals[r], u = h.vertexNormals[r], s.copy(o.normal), u.a.copy(o.vertexNormals[0]), u.b.copy(o.vertexNormals[1]), u.c.copy(o.vertexNormals[2])
                }
                for (r = 0, n = this.faces.length; n > r; r++)o = this.faces[r], o.normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals
            }, computeTangents: function () {
                console.warn("THREE.Geometry: .computeTangents() has been removed.")
            }, computeLineDistances: function () {
                for (var e = 0, t = this.vertices, r = 0, n = t.length; n > r; r++)r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
            }, computeBoundingBox: function () {
                null === this.boundingBox && (this.boundingBox = new i.Box3), this.boundingBox.setFromPoints(this.vertices)
            }, computeBoundingSphere: function () {
                null === this.boundingSphere && (this.boundingSphere = new i.Sphere), this.boundingSphere.setFromPoints(this.vertices)
            }, merge: function (e, t, r) {
                if (e instanceof i.Geometry == !1)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
                var n, o = this.vertices.length, a = this.vertices, s = e.vertices, u = this.faces, c = e.faces, l = this.faceVertexUvs[0], h = e.faceVertexUvs[0];
                void 0 === r && (r = 0), void 0 !== t && (n = (new i.Matrix3).getNormalMatrix(t));
                for (var p = 0, d = s.length; d > p; p++) {
                    var f = s[p], m = f.clone();
                    void 0 !== t && m.applyMatrix4(t), a.push(m)
                }
                for (p = 0, d = c.length; d > p; p++) {
                    var g, v, y, x = c[p], b = x.vertexNormals, w = x.vertexColors;
                    g = new i.Face3(x.a + o, x.b + o, x.c + o), g.normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
                    for (var S = 0, M = b.length; M > S; S++)v = b[S].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
                    g.color.copy(x.color);
                    for (var S = 0, M = w.length; M > S; S++)y = w[S], g.vertexColors.push(y.clone());
                    g.materialIndex = x.materialIndex + r, u.push(g)
                }
                for (p = 0, d = h.length; d > p; p++) {
                    var T = h[p], _ = [];
                    if (void 0 !== T) {
                        for (var S = 0, M = T.length; M > S; S++)_.push(T[S].clone());
                        l.push(_)
                    }
                }
            }, mergeMesh: function (e) {
                return e instanceof i.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix))
            }, mergeVertices: function () {
                var e, t, r, n, i, o, a, s, u = {}, c = [], l = [], h = 4, p = Math.pow(10, h);
                for (r = 0, n = this.vertices.length; n > r; r++)e = this.vertices[r], t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p), void 0 === u[t] ? (u[t] = r, c.push(this.vertices[r]), l[r] = c.length - 1) : l[r] = l[u[t]];
                var d = [];
                for (r = 0, n = this.faces.length; n > r; r++) {
                    i = this.faces[r], i.a = l[i.a], i.b = l[i.b], i.c = l[i.c], o = [i.a, i.b, i.c];
                    for (var f = -1, m = 0; 3 > m; m++)if (o[m] === o[(m + 1) % 3]) {
                        f = m, d.push(r);
                        break
                    }
                }
                for (r = d.length - 1; r >= 0; r--) {
                    var g = d[r];
                    for (this.faces.splice(g, 1), a = 0, s = this.faceVertexUvs.length; s > a; a++)this.faceVertexUvs[a].splice(g, 1)
                }
                var v = this.vertices.length - c.length;
                return this.vertices = c, v
            }, sortFacesByMaterialIndex: function () {
                function e(e, t) {
                    return e.materialIndex - t.materialIndex
                }

                for (var t = this.faces, r = t.length, n = 0; r > n; n++)t[n]._id = n;
                t.sort(e);
                var i, o, a = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
                a && a.length === r && (i = []), s && s.length === r && (o = []);
                for (var n = 0; r > n; n++) {
                    var u = t[n]._id;
                    i && i.push(a[u]), o && o.push(s[u])
                }
                i && (this.faceVertexUvs[0] = i), o && (this.faceVertexUvs[1] = o)
            }, toJSON: function () {
                function e(e, t, r) {
                    return r ? e | 1 << t : e & ~(1 << t)
                }

                function t(e) {
                    var t = e.x.toString() + e.y.toString() + e.z.toString();
                    return void 0 !== p[t] ? p[t] : (p[t] = h.length / 3, h.push(e.x, e.y, e.z), p[t])
                }

                function r(e) {
                    var t = e.r.toString() + e.g.toString() + e.b.toString();
                    return void 0 !== f[t] ? f[t] : (f[t] = d.length, d.push(e.getHex()), f[t])
                }

                function n(e) {
                    var t = e.x.toString() + e.y.toString();
                    return void 0 !== g[t] ? g[t] : (g[t] = m.length / 2, m.push(e.x, e.y), g[t])
                }

                var i = {metadata: {version: 4.4, type: "Geometry", generator: "Geometry.toJSON"}};
                if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
                    var o = this.parameters;
                    for (var a in o)void 0 !== o[a] && (i[a] = o[a]);
                    return i
                }
                for (var s = [], u = 0; u < this.vertices.length; u++) {
                    var c = this.vertices[u];
                    s.push(c.x, c.y, c.z)
                }
                for (var l = [], h = [], p = {}, d = [], f = {}, m = [], g = {}, u = 0; u < this.faces.length; u++) {
                    var v = this.faces[u], y = !1, x = !1, b = void 0 !== this.faceVertexUvs[0][u], w = v.normal.length() > 0, S = v.vertexNormals.length > 0, M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b, T = v.vertexColors.length > 0, _ = 0;
                    if (_ = e(_, 0, 0), _ = e(_, 1, y), _ = e(_, 2, x), _ = e(_, 3, b), _ = e(_, 4, w), _ = e(_, 5, S), _ = e(_, 6, M), _ = e(_, 7, T), l.push(_), l.push(v.a, v.b, v.c), b) {
                        var E = this.faceVertexUvs[0][u];
                        l.push(n(E[0]), n(E[1]), n(E[2]))
                    }
                    if (w && l.push(t(v.normal)), S) {
                        var C = v.vertexNormals;
                        l.push(t(C[0]), t(C[1]), t(C[2]))
                    }
                    if (M && l.push(r(v.color)), T) {
                        var A = v.vertexColors;
                        l.push(r(A[0]), r(A[1]), r(A[2]))
                    }
                }
                return i.data = {}, i.data.vertices = s, i.data.normals = h, d.length > 0 && (i.data.colors = d), m.length > 0 && (i.data.uvs = [m]), i.data.faces = l, i
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                this.vertices = [], this.faces = [], this.faceVertexUvs = [[]];
                for (var t = e.vertices, r = 0, n = t.length; n > r; r++)this.vertices.push(t[r].clone());
                for (var i = e.faces, r = 0, n = i.length; n > r; r++)this.faces.push(i[r].clone());
                for (var r = 0, n = e.faceVertexUvs.length; n > r; r++) {
                    var o = e.faceVertexUvs[r];
                    void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
                    for (var a = 0, s = o.length; s > a; a++) {
                        for (var u = o[a], c = [], l = 0, h = u.length; h > l; l++) {
                            var p = u[l];
                            c.push(p.clone())
                        }
                        this.faceVertexUvs[r].push(c)
                    }
                }
                return this
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },i.EventDispatcher.prototype.apply(i.Geometry.prototype),i.GeometryIdCount = 0,i.DirectGeometry = function () {
            Object.defineProperty(this, "id", {value: i.GeometryIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
        },i.DirectGeometry.prototype = {
            constructor: i.DirectGeometry,
            computeBoundingBox: i.Geometry.prototype.computeBoundingBox,
            computeBoundingSphere: i.Geometry.prototype.computeBoundingSphere,
            computeFaceNormals: function () {
                console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
            },
            computeVertexNormals: function () {
                console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
            },
            computeGroups: function (e) {
                for (var t, r, n = [], i = e.faces, o = 0; o < i.length; o++) {
                    var a = i[o];
                    a.materialIndex !== r && (r = a.materialIndex, void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), t = {
                        start: 3 * o,
                        materialIndex: r
                    })
                }
                void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), this.groups = n
            },
            fromGeometry: function (e) {
                var t = e.faces, r = e.vertices, n = e.faceVertexUvs, o = n[0] && n[0].length > 0, a = n[1] && n[1].length > 0, s = e.morphTargets, u = s.length;
                if (u > 0) {
                    for (var c = [], l = 0; u > l; l++)c[l] = [];
                    this.morphTargets.position = c
                }
                var h = e.morphNormals, p = h.length;
                if (p > 0) {
                    for (var d = [], l = 0; p > l; l++)d[l] = [];
                    this.morphTargets.normal = d
                }
                for (var f = e.skinIndices, m = e.skinWeights, g = f.length === r.length, v = m.length === r.length, l = 0; l < t.length; l++) {
                    var y = t[l];
                    this.vertices.push(r[y.a], r[y.b], r[y.c]);
                    var x = y.vertexNormals;
                    if (3 === x.length)this.normals.push(x[0], x[1], x[2]); else {
                        var b = y.normal;
                        this.normals.push(b, b, b)
                    }
                    var w = y.vertexColors;
                    if (3 === w.length)this.colors.push(w[0], w[1], w[2]); else {
                        var S = y.color;
                        this.colors.push(S, S, S)
                    }
                    if (o === !0) {
                        var M = n[0][l];
                        void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new i.Vector2, new i.Vector2, new i.Vector2))
                    }
                    if (a === !0) {
                        var M = n[1][l];
                        void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new i.Vector2, new i.Vector2, new i.Vector2))
                    }
                    for (var T = 0; u > T; T++) {
                        var _ = s[T].vertices;
                        c[T].push(_[y.a], _[y.b], _[y.c])
                    }
                    for (var T = 0; p > T; T++) {
                        var E = h[T].vertexNormals[l];
                        d[T].push(E.a, E.b, E.c)
                    }
                    g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
                }
                return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
            },
            dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },i.EventDispatcher.prototype.apply(i.DirectGeometry.prototype),i.BufferGeometry = function () {
            Object.defineProperty(this, "id", {value: i.GeometryIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        },i.BufferGeometry.prototype = {
            constructor: i.BufferGeometry, addIndex: function (e) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
            }, getIndex: function () {
                return this.index
            }, setIndex: function (e) {
                this.index = e
            }, addAttribute: function (e, t) {
                return t instanceof i.BufferAttribute == !1 && t instanceof i.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(e, new i.BufferAttribute(arguments[1], arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(t)) : void(this.attributes[e] = t)
            }, getAttribute: function (e) {
                return this.attributes[e]
            }, removeAttribute: function (e) {
                delete this.attributes[e]
            }, get drawcalls() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }, get offsets() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }, addDrawCall: function (e, t, r) {
                void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
            }, clearDrawCalls: function () {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            }, addGroup: function (e, t, r) {
                this.groups.push({start: e, count: t, materialIndex: void 0 !== r ? r : 0})
            }, clearGroups: function () {
                this.groups = []
            }, setDrawRange: function (e, t) {
                this.drawRange.start = e, this.drawRange.count = t
            }, applyMatrix: function (e) {
                var t = this.attributes.position;
                void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
                var r = this.attributes.normal;
                if (void 0 !== r) {
                    var n = (new i.Matrix3).getNormalMatrix(e);
                    n.applyToVector3Array(r.array), r.needsUpdate = !0
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
            }, rotateX: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
                }
            }(), rotateY: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
                }
            }(), rotateZ: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new i.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
                }
            }(), translate: function () {
                var e;
                return function (t, r, n) {
                    return void 0 === e && (e = new i.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
                }
            }(), scale: function () {
                var e;
                return function (t, r, n) {
                    return void 0 === e && (e = new i.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
                }
            }(), lookAt: function () {
                var e;
                return function (t) {
                    void 0 === e && (e = new i.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
                }
            }(), center: function () {
                this.computeBoundingBox();
                var e = this.boundingBox.center().negate();
                return this.translate(e.x, e.y, e.z), e
            }, setFromObject: function (e) {
                var t = e.geometry;
                if (e instanceof i.Points || e instanceof i.Line) {
                    var r = new i.Float32Attribute(3 * t.vertices.length, 3), n = new i.Float32Attribute(3 * t.colors.length, 3);
                    if (this.addAttribute("position", r.copyVector3sArray(t.vertices)), this.addAttribute("color", n.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
                        var o = new i.Float32Attribute(t.lineDistances.length, 1);
                        this.addAttribute("lineDistance", o.copyArray(t.lineDistances))
                    }
                    null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
                } else e instanceof i.Mesh && t instanceof i.Geometry && this.fromGeometry(t);
                return this
            }, updateFromObject: function (e) {
                var t = e.geometry;
                if (e instanceof i.Mesh) {
                    var r = t.__directGeometry;
                    if (void 0 === r)return this.fromGeometry(t);
                    r.verticesNeedUpdate = t.verticesNeedUpdate, r.normalsNeedUpdate = t.normalsNeedUpdate, r.colorsNeedUpdate = t.colorsNeedUpdate, r.uvsNeedUpdate = t.uvsNeedUpdate, r.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = r
                }
                if (t.verticesNeedUpdate === !0) {
                    var n = this.attributes.position;
                    void 0 !== n && (n.copyVector3sArray(t.vertices), n.needsUpdate = !0), t.verticesNeedUpdate = !1
                }
                if (t.normalsNeedUpdate === !0) {
                    var n = this.attributes.normal;
                    void 0 !== n && (n.copyVector3sArray(t.normals), n.needsUpdate = !0), t.normalsNeedUpdate = !1
                }
                if (t.colorsNeedUpdate === !0) {
                    var n = this.attributes.color;
                    void 0 !== n && (n.copyColorsArray(t.colors), n.needsUpdate = !0), t.colorsNeedUpdate = !1
                }
                if (t.uvsNeedUpdate) {
                    var n = this.attributes.uv;
                    void 0 !== n && (n.copyVector2sArray(t.uvs), n.needsUpdate = !0), t.uvsNeedUpdate = !1
                }
                if (t.lineDistancesNeedUpdate) {
                    var n = this.attributes.lineDistance;
                    void 0 !== n && (n.copyArray(t.lineDistances), n.needsUpdate = !0), t.lineDistancesNeedUpdate = !1
                }
                return t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
            }, fromGeometry: function (e) {
                return e.__directGeometry = (new i.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
            }, fromDirectGeometry: function (e) {
                var t = new Float32Array(3 * e.vertices.length);
                if (this.addAttribute("position", new i.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
                    var r = new Float32Array(3 * e.normals.length);
                    this.addAttribute("normal", new i.BufferAttribute(r, 3).copyVector3sArray(e.normals))
                }
                if (e.colors.length > 0) {
                    var n = new Float32Array(3 * e.colors.length);
                    this.addAttribute("color", new i.BufferAttribute(n, 3).copyColorsArray(e.colors))
                }
                if (e.uvs.length > 0) {
                    var o = new Float32Array(2 * e.uvs.length);
                    this.addAttribute("uv", new i.BufferAttribute(o, 2).copyVector2sArray(e.uvs))
                }
                if (e.uvs2.length > 0) {
                    var a = new Float32Array(2 * e.uvs2.length);
                    this.addAttribute("uv2", new i.BufferAttribute(a, 2).copyVector2sArray(e.uvs2))
                }
                if (e.indices.length > 0) {
                    var s = e.vertices.length > 65535 ? Uint32Array : Uint16Array, u = new s(3 * e.indices.length);
                    this.setIndex(new i.BufferAttribute(u, 1).copyIndicesArray(e.indices))
                }
                this.groups = e.groups;
                for (var c in e.morphTargets) {
                    for (var l = [], h = e.morphTargets[c], p = 0, d = h.length; d > p; p++) {
                        var f = h[p], m = new i.Float32Attribute(3 * f.length, 3);
                        l.push(m.copyVector3sArray(f))
                    }
                    this.morphAttributes[c] = l
                }
                if (e.skinIndices.length > 0) {
                    var g = new i.Float32Attribute(4 * e.skinIndices.length, 4);
                    this.addAttribute("skinIndex", g.copyVector4sArray(e.skinIndices))
                }
                if (e.skinWeights.length > 0) {
                    var v = new i.Float32Attribute(4 * e.skinWeights.length, 4);
                    this.addAttribute("skinWeight", v.copyVector4sArray(e.skinWeights))
                }
                return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
            }, computeBoundingBox: function () {
                var e = new i.Vector3;
                return function () {
                    null === this.boundingBox && (this.boundingBox = new i.Box3);
                    var t = this.attributes.position.array;
                    if (t) {
                        var r = this.boundingBox;
                        r.makeEmpty();
                        for (var n = 0, o = t.length; o > n; n += 3)e.fromArray(t, n), r.expandByPoint(e)
                    }
                    (void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
            }(), computeBoundingSphere: function () {
                var e = new i.Box3, t = new i.Vector3;
                return function () {
                    null === this.boundingSphere && (this.boundingSphere = new i.Sphere);
                    var r = this.attributes.position.array;
                    if (r) {
                        e.makeEmpty();
                        for (var n = this.boundingSphere.center, o = 0, a = r.length; a > o; o += 3)t.fromArray(r, o), e.expandByPoint(t);
                        e.center(n);
                        for (var s = 0, o = 0, a = r.length; a > o; o += 3)t.fromArray(r, o), s = Math.max(s, n.distanceToSquared(t));
                        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
            }(), computeFaceNormals: function () {
            }, computeVertexNormals: function () {
                var e = this.index, t = this.attributes, r = this.groups;
                if (t.position) {
                    var n = t.position.array;
                    if (void 0 === t.normal)this.addAttribute("normal", new i.BufferAttribute(new Float32Array(n.length), 3)); else for (var o = t.normal.array, a = 0, s = o.length; s > a; a++)o[a] = 0;
                    var u, c, l, o = t.normal.array, h = new i.Vector3, p = new i.Vector3, d = new i.Vector3, f = new i.Vector3, m = new i.Vector3;
                    if (e) {
                        var g = e.array;
                        0 === r.length && this.addGroup(0, g.length);
                        for (var v = 0, y = r.length; y > v; ++v)for (var x = r[v], b = x.start, w = x.count, a = b, s = b + w; s > a; a += 3)u = 3 * g[a + 0], c = 3 * g[a + 1], l = 3 * g[a + 2], h.fromArray(n, u), p.fromArray(n, c), d.fromArray(n, l), f.subVectors(d, p), m.subVectors(h, p), f.cross(m), o[u] += f.x, o[u + 1] += f.y, o[u + 2] += f.z, o[c] += f.x, o[c + 1] += f.y, o[c + 2] += f.z, o[l] += f.x, o[l + 1] += f.y, o[l + 2] += f.z
                    } else for (var a = 0, s = n.length; s > a; a += 9)h.fromArray(n, a), p.fromArray(n, a + 3), d.fromArray(n, a + 6), f.subVectors(d, p), m.subVectors(h, p), f.cross(m), o[a] = f.x, o[a + 1] = f.y, o[a + 2] = f.z, o[a + 3] = f.x, o[a + 4] = f.y, o[a + 5] = f.z, o[a + 6] = f.x, o[a + 7] = f.y, o[a + 8] = f.z;
                    this.normalizeNormals(), t.normal.needsUpdate = !0
                }
            }, computeTangents: function () {
                console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
            }, computeOffsets: function (e) {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            }, merge: function (e, t) {
                if (e instanceof i.BufferGeometry == !1)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                void 0 === t && (t = 0);
                var r = this.attributes;
                for (var n in r)if (void 0 !== e.attributes[n])for (var o = r[n], a = o.array, s = e.attributes[n], u = s.array, c = s.itemSize, l = 0, h = c * t; l < u.length; l++, h++)a[h] = u[l];
                return this
            }, normalizeNormals: function () {
                for (var e, t, r, n, i = this.attributes.normal.array, o = 0, a = i.length; a > o; o += 3)e = i[o], t = i[o + 1], r = i[o + 2], n = 1 / Math.sqrt(e * e + t * t + r * r), i[o] *= n, i[o + 1] *= n, i[o + 2] *= n
            }, toJSON: function () {
                var e = {metadata: {version: 4.4, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
                if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
                    var t = this.parameters;
                    for (var r in t)void 0 !== t[r] && (e[r] = t[r]);
                    return e
                }
                e.data = {attributes: {}};
                var n = this.index;
                if (null !== n) {
                    var i = Array.prototype.slice.call(n.array);
                    e.data.index = {type: n.array.constructor.name, array: i}
                }
                var o = this.attributes;
                for (var r in o) {
                    var a = o[r], i = Array.prototype.slice.call(a.array);
                    e.data.attributes[r] = {itemSize: a.itemSize, type: a.array.constructor.name, array: i}
                }
                var s = this.groups;
                s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
                var u = this.boundingSphere;
                return null !== u && (e.data.boundingSphere = {center: u.center.toArray(), radius: u.radius}), e
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                var t = e.index;
                null !== t && this.setIndex(t.clone());
                var r = e.attributes;
                for (var n in r) {
                    var i = r[n];
                    this.addAttribute(n, i.clone())
                }
                for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
                    var u = o[a];
                    this.addGroup(u.start, u.count)
                }
                return this
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },i.EventDispatcher.prototype.apply(i.BufferGeometry.prototype),i.BufferGeometry.MaxIndex = 65535,i.InstancedBufferGeometry = function () {
            i.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
        },i.InstancedBufferGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.InstancedBufferGeometry.prototype.constructor = i.InstancedBufferGeometry,i.InstancedBufferGeometry.prototype.addGroup = function (e, t, r) {
            this.groups.push({start: e, count: t, instances: r})
        },i.InstancedBufferGeometry.prototype.copy = function (e) {
            var t = e.index;
            null !== t && this.setIndex(t.clone());
            var r = e.attributes;
            for (var n in r) {
                var i = r[n];
                this.addAttribute(n, i.clone())
            }
            for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
                var u = o[a];
                this.addGroup(u.start, u.count, u.instances)
            }
            return this
        },i.EventDispatcher.prototype.apply(i.InstancedBufferGeometry.prototype),i.AnimationAction = function (e, t, r, n, o) {
            if (void 0 === e)throw new Error("clip is null");
            this.clip = e, this.localRoot = null, this.startTime = t || 0, this.timeScale = r || 1, this.weight = n || 1, this.loop = o || i.LoopRepeat, this.loopCount = 0, this.enabled = !0, this.actionTime = -this.startTime, this.clipTime = 0, this.propertyBindings = []
        },i.AnimationAction.prototype = {
            constructor: i.AnimationAction, setLocalRoot: function (e) {
                return this.localRoot = e, this
            }, updateTime: function (e) {
                var t = this.clipTime, r = this.loopCount, n = (this.actionTime, this.clip.duration);
                if (this.actionTime = this.actionTime + e, this.loop === i.LoopOnce)return this.loopCount = 0, this.clipTime = Math.min(Math.max(this.actionTime, 0), n), this.clipTime !== t && (this.clipTime === n ? this.mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 1
                }) : 0 === this.clipTime && this.mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: -1
                })), this.clipTime;
                this.loopCount = Math.floor(this.actionTime / n);
                var o = this.actionTime - this.loopCount * n;
                return o %= n, this.loop == i.LoopPingPong && 1 === Math.abs(this.loopCount % 2) && (o = n - o), this.clipTime = o, this.loopCount !== r && this.mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: this.loopCount - this.loopCount
                }), this.clipTime
            }, syncWith: function (e) {
                return this.actionTime = e.actionTime, this.timeScale = e.timeScale, this
            }, warpToDuration: function (e) {
                return this.timeScale = this.clip.duration / e, this
            }, init: function (e) {
                return this.clipTime = e - this.startTime, this
            }, update: function (e) {
                this.updateTime(e);
                var t = this.clip.getAt(this.clipTime);
                return t
            }, getTimeScaleAt: function (e) {
                return this.timeScale.getAt ? this.timeScale.getAt(e) : this.timeScale
            }, getWeightAt: function (e) {
                return this.weight.getAt ? this.weight.getAt(e) : this.weight
            }
        },i.AnimationClip = function (e, t, r) {
            if (this.name = e, this.tracks = r, this.duration = void 0 !== t ? t : -1, this.duration < 0)for (var n = 0; n < this.tracks.length; n++) {
                var i = this.tracks[n];
                this.duration = Math.max(i.keys[i.keys.length - 1].time)
            }
            this.trim(), this.optimize(), this.results = []
        },i.AnimationClip.prototype = {
            constructor: i.AnimationClip, getAt: function (e) {
                e = Math.max(0, Math.min(e, this.duration));
                for (var t = 0; t < this.tracks.length; t++) {
                    var r = this.tracks[t];
                    this.results[t] = r.getAt(e)
                }
                return this.results
            }, trim: function () {
                for (var e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration);
                return this
            }, optimize: function () {
                for (var e = 0; e < this.tracks.length; e++)this.tracks[e].optimize();
                return this
            }
        },i.AnimationClip.CreateFromMorphTargetSequence = function (e, t, r) {
            for (var n = t.length, o = [], a = 0; n > a; a++) {
                var s = [];
                s.push({time: (a + n - 1) % n, value: 0}), s.push({time: a, value: 1}), s.push({
                    time: (a + 1) % n,
                    value: 0
                }), s.sort(i.KeyframeTrack.keyComparer), 0 === s[0].time && s.push({
                    time: n,
                    value: s[0].value
                }), o.push(new i.NumberKeyframeTrack(".morphTargetInfluences[" + t[a].name + "]", s).scale(1 / r))
            }
            return new i.AnimationClip(e, -1, o)
        },i.AnimationClip.findByName = function (e, t) {
            for (var r = 0; r < e.length; r++)if (e[r].name === t)return e[r];
            return null
        },i.AnimationClip.CreateClipsFromMorphTargetSequences = function (e, t) {
            for (var r = {}, n = /^([\w-]*?)([\d]+)$/, o = 0, a = e.length; a > o; o++) {
                var s = e[o], u = s.name.match(n);
                if (u && u.length > 1) {
                    var c = u[1], l = r[c];
                    l || (r[c] = l = []), l.push(s)
                }
            }
            var h = [];
            for (var c in r)h.push(i.AnimationClip.CreateFromMorphTargetSequence(c, r[c], t));
            return h
        },i.AnimationClip.parse = function (e) {
            for (var t = [], r = 0; r < e.tracks.length; r++)t.push(i.KeyframeTrack.parse(e.tracks[r]).scale(1 / e.fps));
            return new i.AnimationClip(e.name, e.duration, t)
        },i.AnimationClip.parseAnimation = function (e, t, r) {
            if (!e)return console.error("  no animation in JSONLoader data"), null;
            for (var n = function (e, t, r, n, i) {
                for (var o = [], a = 0; a < t.length; a++) {
                    var s = t[a];
                    void 0 !== s[r] && o.push({time: s.time, value: i(s)})
                }
                return o.length > 0 ? new n(e, o) : null
            }, o = [], a = e.name || "default", s = e.length || -1, u = e.fps || 30, c = e.hierarchy || [], l = 0; l < c.length; l++) {
                var h = c[l].keys;
                if (h && 0 != h.length)if (h[0].morphTargets) {
                    for (var p = {}, d = 0; d < h.length; d++)if (h[d].morphTargets)for (var f = 0; f < h[d].morphTargets.length; f++)p[h[d].morphTargets[f]] = -1;
                    for (var m in p) {
                        for (var g = [], f = 0; f < h[d].morphTargets.length; f++) {
                            var v = h[d];
                            g.push({time: v.time, value: v.morphTarget === m ? 1 : 0})
                        }
                        o.push(new i.NumberKeyframeTrack(r + ".morphTargetInfluence[" + m + "]", g))
                    }
                    s = p.length * (u || 1)
                } else {
                    var y = r + ".bones[" + t[l].name + "]", x = n(y + ".position", h, "pos", i.VectorKeyframeTrack, function (e) {
                        return (new i.Vector3).fromArray(e.pos)
                    });
                    x && o.push(x);
                    var b = n(y + ".quaternion", h, "rot", i.QuaternionKeyframeTrack, function (e) {
                        return e.rot.slerp ? e.rot.clone() : (new i.Quaternion).fromArray(e.rot)
                    });
                    b && o.push(b);
                    var w = n(y + ".scale", h, "scl", i.VectorKeyframeTrack, function (e) {
                        return (new i.Vector3).fromArray(e.scl)
                    });
                    w && o.push(w)
                }
            }
            if (0 === o.length)return null;
            var S = new i.AnimationClip(a, s, o);
            return S
        },i.AnimationMixer = function (e) {
            this.root = e, this.time = 0, this.timeScale = 1, this.actions = [], this.propertyBindingMap = {}
        },i.AnimationMixer.prototype = {
            constructor: i.AnimationMixer, addAction: function (e) {
                this.actions.push(e), e.init(this.time), e.mixer = this;
                for (var t = e.clip.tracks, r = e.localRoot || this.root, n = 0; n < t.length; n++) {
                    var o = t[n], a = r.uuid + "-" + o.name, s = this.propertyBindingMap[a];
                    void 0 === s && (s = new i.PropertyBinding(r, o.name), this.propertyBindingMap[a] = s), e.propertyBindings.push(s), s.referenceCount += 1
                }
            }, removeAllActions: function () {
                for (var e = 0; e < this.actions.length; e++)this.actions[e].mixer = null;
                for (var t in this.propertyBindingMap)this.propertyBindingMap[t].unbind();
                return this.actions = [], this.propertyBindingMap = {}, this
            }, removeAction: function (e) {
                var t = this.actions.indexOf(e);
                -1 !== t && (this.actions.splice(t, 1), e.mixer = null);
                for (var r = e.localRoot || this.root, n = e.clip.tracks, i = 0; i < n.length; i++) {
                    var o = n[i], a = r.uuid + "-" + o.name, s = this.propertyBindingMap[a];
                    s.referenceCount -= 1, s.referenceCount <= 0 && (s.unbind(), delete this.propertyBindingMap[a])
                }
                return this
            }, findActionByName: function (e) {
                for (var t = 0; t < this.actions.length; t++)if (this.actions[t].name === e)return this.actions[t];
                return null
            }, play: function (e, t) {
                return e.startTime = this.time, this.addAction(e), this
            }, fadeOut: function (e, t) {
                var r = [];
                return r.push({time: this.time, value: 1}), r.push({
                    time: this.time + t,
                    value: 0
                }), e.weight = new i.NumberKeyframeTrack("weight", r), this
            }, fadeIn: function (e, t) {
                var r = [];
                return r.push({time: this.time, value: 0}), r.push({
                    time: this.time + t,
                    value: 1
                }), e.weight = new i.NumberKeyframeTrack("weight", r), this
            }, warp: function (e, t, r, n) {
                var o = [];
                return o.push({time: this.time, value: t}), o.push({
                    time: this.time + n,
                    value: r
                }), e.timeScale = new i.NumberKeyframeTrack("timeScale", o), this
            }, crossFade: function (e, t, r, n) {
                if (this.fadeOut(e, r), this.fadeIn(t, r), n) {
                    var i = e.clip.duration / t.clip.duration, o = 1 / i;
                    this.warp(e, 1, i, r), this.warp(t, o, 1, r)
                }
                return this
            }, update: function (e) {
                var t = e * this.timeScale;
                this.time += t;
                for (var r = 0; r < this.actions.length; r++) {
                    var n = this.actions[r], i = n.getWeightAt(this.time), o = n.getTimeScaleAt(this.time), a = t * o, s = n.update(a);
                    if (!(n.weight <= 0) && n.enabled)for (var u = 0; u < s.length; u++) {
                        n.clip.tracks[u].name;
                        n.propertyBindings[u].accumulate(s[u], i)
                    }
                }
                for (var c in this.propertyBindingMap)this.propertyBindingMap[c].apply();
                return this
            }
        },i.EventDispatcher.prototype.apply(i.AnimationMixer.prototype),i.AnimationUtils = {
            getEqualsFunc: function (e) {
                return e.equals ? function (e, t) {
                    return e.equals(t)
                } : function (e, t) {
                    return e === t
                }
            }, clone: function (e) {
                var t = typeof e;
                if ("object" === t) {
                    if (e.clone)return e.clone();
                    console.error("can not figure out how to copy exemplarValue", e)
                }
                return e
            }, lerp: function (e, t, r, n) {
                var o = i.AnimationUtils.getLerpFunc(e, n);
                return o(e, t, r)
            }, lerp_object: function (e, t, r) {
                return e.lerp(t, r)
            }, slerp_object: function (e, t, r) {
                return e.slerp(t, r)
            }, lerp_number: function (e, t, r) {
                return e * (1 - r) + t * r
            }, lerp_boolean: function (e, t, r) {
                return .5 > r ? e : t
            }, lerp_boolean_immediate: function (e, t, r) {
                return e
            }, lerp_string: function (e, t, r) {
                return .5 > r ? e : t
            }, lerp_string_immediate: function (e, t, r) {
                return e
            }, getLerpFunc: function (e, t) {
                if (void 0 === e || null === e)throw new Error("examplarValue is null");
                var r = typeof e;
                switch (r) {
                    case"object":
                        if (e.lerp)return i.AnimationUtils.lerp_object;
                        if (e.slerp)return i.AnimationUtils.slerp_object;
                        break;
                    case"number":
                        return i.AnimationUtils.lerp_number;
                    case"boolean":
                        return t ? i.AnimationUtils.lerp_boolean : i.AnimationUtils.lerp_boolean_immediate;
                    case"string":
                        return t ? i.AnimationUtils.lerp_string : i.AnimationUtils.lerp_string_immediate
                }
            }
        },i.KeyframeTrack = function (e, t) {
            if (void 0 === e)throw new Error("track name is undefined");
            if (void 0 === t || 0 === t.length)throw new Error("no keys in track named " + e);
            this.name = e, this.keys = t, this.lastIndex = 0, this.validate(), this.optimize()
        },i.KeyframeTrack.prototype = {
            constructor: i.KeyframeTrack, getAt: function (e) {
                for (; this.lastIndex < this.keys.length && e >= this.keys[this.lastIndex].time;)this.lastIndex++;
                for (; this.lastIndex > 0 && e < this.keys[this.lastIndex - 1].time;)this.lastIndex--;
                if (this.lastIndex >= this.keys.length)return this.setResult(this.keys[this.keys.length - 1].value), this.result;
                if (0 === this.lastIndex)return this.setResult(this.keys[0].value), this.result;
                var t = this.keys[this.lastIndex - 1];
                if (this.setResult(t.value), t.constantToNext)return this.result;
                var r = this.keys[this.lastIndex], n = (e - t.time) / (r.time - t.time);
                return this.result = this.lerpValues(this.result, r.value, n), this.result
            }, shift: function (e) {
                if (0 !== e)for (var t = 0; t < this.keys.length; t++)this.keys[t].time += e;
                return this
            }, scale: function (e) {
                if (1 !== e)for (var t = 0; t < this.keys.length; t++)this.keys[t].time *= e;
                return this
            }, trim: function (e, t) {
                for (var r = 0, n = 1; n < this.keys.length; n++)this.keys[n] <= e && r++;
                for (var i = 0, n = this.keys.length - 2; n > 0 && this.keys[n] >= t; n++)i++;
                return r + i > 0 && (this.keys = this.keys.splice(r, this.keys.length - i - r)), this
            }, validate: function () {
                var e = null;
                if (0 === this.keys.length)return void console.error("  track is empty, no keys", this);
                for (var t = 0; t < this.keys.length; t++) {
                    var r = this.keys[t];
                    if (!r)return void console.error("  key is null in track", this, t);
                    if ("number" != typeof r.time || isNaN(r.time))return void console.error("  key.time is not a valid number", this, t, r);
                    if (void 0 === r.value || null === r.value)return void console.error("  key.value is null in track", this, t, r);
                    if (e && e.time > r.time)return void console.error("  key.time is less than previous key time, out of order keys", this, t, r, e);
                    e = r
                }
                return this
            }, optimize: function () {
                var e = [], t = this.keys[0];
                e.push(t);
                for (var r = (i.AnimationUtils.getEqualsFunc(t.value), 1); r < this.keys.length - 1; r++) {
                    var n = this.keys[r], o = this.keys[r + 1];
                    t.time !== n.time && (this.compareValues(t.value, n.value) && this.compareValues(n.value, o.value) || (t.constantToNext = this.compareValues(t.value, n.value), e.push(n), t = n))
                }
                return e.push(this.keys[this.keys.length - 1]), this.keys = e, this
            }
        },i.KeyframeTrack.keyComparer = function (e, t) {
            return e.time - t.time
        },i.KeyframeTrack.parse = function (e) {
            if (void 0 === e.type)throw new Error("track type undefined, can not parse");
            var t = i.KeyframeTrack.GetTrackTypeForTypeName(e.type);
            return t.parse(e)
        },i.KeyframeTrack.GetTrackTypeForTypeName = function (e) {
            switch (e.toLowerCase()) {
                case"vector":
                case"vector2":
                case"vector3":
                case"vector4":
                    return i.VectorKeyframeTrack;
                case"quaternion":
                    return i.QuaternionKeyframeTrack;
                case"integer":
                case"scalar":
                case"double":
                case"float":
                case"number":
                    return i.NumberKeyframeTrack;
                case"bool":
                case"boolean":
                    return i.BooleanKeyframeTrack;
                case"string":
                    return i.StringKeyframeTrack
            }
            throw new Error("Unsupported typeName: " + e)
        },i.PropertyBinding = function (e, t) {
            this.rootNode = e, this.trackName = t, this.referenceCount = 0, this.originalValue = null;
            var r = i.PropertyBinding.parseTrackName(t);
            this.directoryName = r.directoryName, this.nodeName = r.nodeName, this.objectName = r.objectName, this.objectIndex = r.objectIndex, this.propertyName = r.propertyName, this.propertyIndex = r.propertyIndex, this.node = i.PropertyBinding.findNode(e, this.nodeName) || e, this.cumulativeValue = null, this.cumulativeWeight = 0
        },i.PropertyBinding.prototype = {
            constructor: i.PropertyBinding, reset: function () {
                this.cumulativeValue = null, this.cumulativeWeight = 0
            }, accumulate: function (e, t) {
                if (this.isBound || this.bind(), 0 === this.cumulativeWeight)t > 0 && (null === this.cumulativeValue && (this.cumulativeValue = i.AnimationUtils.clone(e)), this.cumulativeWeight = t); else {
                    var r = t / (this.cumulativeWeight + t);
                    this.cumulativeValue = this.lerpValue(this.cumulativeValue, e, r), this.cumulativeWeight += t
                }
            }, unbind: function () {
                this.isBound && (this.setValue(this.originalValue), this.setValue = null, this.getValue = null, this.lerpValue = null, this.equalsValue = null, this.triggerDirty = null, this.isBound = !1)
            }, bind: function () {
                if (!this.isBound) {
                    var e = this.node;
                    if (!e)return void console.error("  trying to update node for track: " + this.trackName + " but it wasn't found.");
                    if (this.objectName) {
                        if ("materials" === this.objectName) {
                            if (!e.material)return void console.error("  can not bind to material as node does not have a material", this);
                            if (!e.material.materials)return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                            e = e.material.materials
                        } else if ("bones" === this.objectName) {
                            if (!e.skeleton)return void console.error("  can not bind to bones as node does not have a skeleton", this);
                            e = e.skeleton.bones;
                            for (var t = 0; t < e.length; t++)if (e[t].name === this.objectIndex) {
                                this.objectIndex = t;
                                break
                            }
                        } else {
                            if (void 0 === e[this.objectName])return void console.error("  can not bind to objectName of node, undefined", this);
                            e = e[this.objectName]
                        }
                        if (void 0 !== this.objectIndex) {
                            if (void 0 === e[this.objectIndex])return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                            e = e[this.objectIndex]
                        }
                    }
                    var r = e[this.propertyName];
                    if (!r)return void console.error("  trying to update property for track: " + this.nodeName + "." + this.propertyName + " but it wasn't found.", e);
                    if (void 0 !== this.propertyIndex) {
                        if ("morphTargetInfluences" === this.propertyName) {
                            e.geometry || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this), e.geometry.morphTargets || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                            for (var t = 0; t < this.node.geometry.morphTargets.length; t++)if (e.geometry.morphTargets[t].name === this.propertyIndex) {
                                this.propertyIndex = t;
                                break
                            }
                        }
                        this.setValue = function (e) {
                            return this.equalsValue(r[this.propertyIndex], e) ? !1 : (r[this.propertyIndex] = e, !0)
                        }, this.getValue = function () {
                            return r[this.propertyIndex]
                        }
                    } else r.copy ? (this.setValue = function (e) {
                        return this.equalsValue(r, e) ? !1 : (r.copy(e), !0)
                    }, this.getValue = function () {
                        return r
                    }) : (this.setValue = function (t) {
                        return this.equalsValue(e[this.propertyName], t) ? !1 : (e[this.propertyName] = t, !0)
                    }, this.getValue = function () {
                        return e[this.propertyName]
                    });
                    void 0 !== e.needsUpdate ? this.triggerDirty = function () {
                        this.node.needsUpdate = !0
                    } : void 0 !== e.matrixWorldNeedsUpdate && (this.triggerDirty = function () {
                        e.matrixWorldNeedsUpdate = !0
                    }), this.originalValue = this.getValue(), this.equalsValue = i.AnimationUtils.getEqualsFunc(this.originalValue), this.lerpValue = i.AnimationUtils.getLerpFunc(this.originalValue, !0),
                        this.isBound = !0
                }
            }, apply: function () {
                if (this.isBound || this.bind(), this.cumulativeWeight > 0) {
                    if (this.cumulativeWeight < 1) {
                        var e = 1 - this.cumulativeWeight, t = e / (this.cumulativeWeight + e);
                        this.cumulativeValue = this.lerpValue(this.cumulativeValue, this.originalValue, t)
                    }
                    var r = this.setValue(this.cumulativeValue);
                    r && this.triggerDirty && this.triggerDirty(), this.cumulativeValue = null, this.cumulativeWeight = 0
                }
            }
        },i.PropertyBinding.parseTrackName = function (e) {
            var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_. ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/, r = t.exec(e);
            if (!r)throw new Error("cannot parse trackName at all: " + e);
            r.index === t.lastIndex && t.lastIndex++;
            var n = {
                directoryName: r[1],
                nodeName: r[3],
                objectName: r[5],
                objectIndex: r[7],
                propertyName: r[9],
                propertyIndex: r[11]
            };
            if (null === n.propertyName || 0 === n.propertyName.length)throw new Error("can not parse propertyName from trackName: " + e);
            return n
        },i.PropertyBinding.findNode = function (e, t) {
            function r(e) {
                for (var r = 0; r < e.bones.length; r++) {
                    var n = e.bones[r];
                    if (n.name === t)return n
                }
                return null
            }

            function n(e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (i.name === t || i.uuid === t)return i;
                    var o = n(i.children);
                    if (o)return o
                }
                return null
            }

            if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)return e;
            if (e.skeleton) {
                var i = r(e.skeleton);
                if (i)return i
            }
            if (e.children) {
                var o = n(e.children);
                if (o)return o
            }
            return null
        },i.VectorKeyframeTrack = function (e, t) {
            i.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value.clone()
        },i.VectorKeyframeTrack.prototype = Object.create(i.KeyframeTrack.prototype),i.VectorKeyframeTrack.prototype.constructor = i.VectorKeyframeTrack,i.VectorKeyframeTrack.prototype.setResult = function (e) {
            this.result.copy(e)
        },i.VectorKeyframeTrack.prototype.lerpValues = function (e, t, r) {
            return e.lerp(t, r)
        },i.VectorKeyframeTrack.prototype.compareValues = function (e, t) {
            return e.equals(t)
        },i.VectorKeyframeTrack.prototype.clone = function () {
            for (var e = [], t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                e.push({time: r.time, value: r.value.clone()})
            }
            return new i.VectorKeyframeTrack(this.name, e)
        },i.VectorKeyframeTrack.parse = function (e) {
            for (var t = e.keys[0].value.length, r = i["Vector" + t], n = [], o = 0; o < e.keys.length; o++) {
                var a = e.keys[o];
                n.push({value: (new r).fromArray(a.value), time: a.time})
            }
            return new i.VectorKeyframeTrack(e.name, n)
        },i.QuaternionKeyframeTrack = function (e, t) {
            i.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value.clone()
        },i.QuaternionKeyframeTrack.prototype = Object.create(i.KeyframeTrack.prototype),i.QuaternionKeyframeTrack.prototype.constructor = i.QuaternionKeyframeTrack,i.QuaternionKeyframeTrack.prototype.setResult = function (e) {
            this.result.copy(e)
        },i.QuaternionKeyframeTrack.prototype.lerpValues = function (e, t, r) {
            return e.slerp(t, r)
        },i.QuaternionKeyframeTrack.prototype.compareValues = function (e, t) {
            return e.equals(t)
        },i.QuaternionKeyframeTrack.prototype.multiply = function (e) {
            for (var t = 0; t < this.keys.length; t++)this.keys[t].value.multiply(e);
            return this
        },i.QuaternionKeyframeTrack.prototype.clone = function () {
            for (var e = [], t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                e.push({time: r.time, value: r.value.clone()})
            }
            return new i.QuaternionKeyframeTrack(this.name, e)
        },i.QuaternionKeyframeTrack.parse = function (e) {
            for (var t = [], r = 0; r < e.keys.length; r++) {
                var n = e.keys[r];
                t.push({value: (new i.Quaternion).fromArray(n.value), time: n.time})
            }
            return new i.QuaternionKeyframeTrack(e.name, t)
        },i.StringKeyframeTrack = function (e, t) {
            i.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
        },i.StringKeyframeTrack.prototype = Object.create(i.KeyframeTrack.prototype),i.StringKeyframeTrack.prototype.constructor = i.StringKeyframeTrack,i.StringKeyframeTrack.prototype.setResult = function (e) {
            this.result = e
        },i.StringKeyframeTrack.prototype.lerpValues = function (e, t, r) {
            return 1 > r ? e : t
        },i.StringKeyframeTrack.prototype.compareValues = function (e, t) {
            return e === t
        },i.StringKeyframeTrack.prototype.clone = function () {
            for (var e = [], t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                e.push({time: r.time, value: r.value})
            }
            return new i.StringKeyframeTrack(this.name, e)
        },i.StringKeyframeTrack.parse = function (e) {
            return new i.StringKeyframeTrack(e.name, e.keys)
        },i.BooleanKeyframeTrack = function (e, t) {
            i.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
        },i.BooleanKeyframeTrack.prototype = Object.create(i.KeyframeTrack.prototype),i.BooleanKeyframeTrack.prototype.constructor = i.BooleanKeyframeTrack,i.BooleanKeyframeTrack.prototype.setResult = function (e) {
            this.result = e
        },i.BooleanKeyframeTrack.prototype.lerpValues = function (e, t, r) {
            return 1 > r ? e : t
        },i.BooleanKeyframeTrack.prototype.compareValues = function (e, t) {
            return e === t
        },i.BooleanKeyframeTrack.prototype.clone = function () {
            for (var e = [], t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                e.push({time: r.time, value: r.value})
            }
            return new i.BooleanKeyframeTrack(this.name, e)
        },i.BooleanKeyframeTrack.parse = function (e) {
            return new i.BooleanKeyframeTrack(e.name, e.keys)
        },i.NumberKeyframeTrack = function (e, t) {
            i.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
        },i.NumberKeyframeTrack.prototype = Object.create(i.KeyframeTrack.prototype),i.NumberKeyframeTrack.prototype.constructor = i.NumberKeyframeTrack,i.NumberKeyframeTrack.prototype.setResult = function (e) {
            this.result = e
        },i.NumberKeyframeTrack.prototype.lerpValues = function (e, t, r) {
            return e * (1 - r) + t * r
        },i.NumberKeyframeTrack.prototype.compareValues = function (e, t) {
            return e === t
        },i.NumberKeyframeTrack.prototype.clone = function () {
            for (var e = [], t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                e.push({time: r.time, value: r.value})
            }
            return new i.NumberKeyframeTrack(this.name, e)
        },i.NumberKeyframeTrack.parse = function (e) {
            return new i.NumberKeyframeTrack(e.name, e.keys)
        },i.Camera = function () {
            i.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new i.Matrix4, this.projectionMatrix = new i.Matrix4
        },i.Camera.prototype = Object.create(i.Object3D.prototype),i.Camera.prototype.constructor = i.Camera,i.Camera.prototype.getWorldDirection = function () {
            var e = new i.Quaternion;
            return function (t) {
                var r = t || new i.Vector3;
                return this.getWorldQuaternion(e), r.set(0, 0, -1).applyQuaternion(e)
            }
        }(),i.Camera.prototype.lookAt = function () {
            var e = new i.Matrix4;
            return function (t) {
                e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(),i.Camera.prototype.clone = function () {
            return (new this.constructor).copy(this)
        },i.Camera.prototype.copy = function (e) {
            return i.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
        },i.CubeCamera = function (e, t, r) {
            i.Object3D.call(this), this.type = "CubeCamera";
            var n = 90, o = 1, a = new i.PerspectiveCamera(n, o, e, t);
            a.up.set(0, -1, 0), a.lookAt(new i.Vector3(1, 0, 0)), this.add(a);
            var s = new i.PerspectiveCamera(n, o, e, t);
            s.up.set(0, -1, 0), s.lookAt(new i.Vector3(-1, 0, 0)), this.add(s);
            var u = new i.PerspectiveCamera(n, o, e, t);
            u.up.set(0, 0, 1), u.lookAt(new i.Vector3(0, 1, 0)), this.add(u);
            var c = new i.PerspectiveCamera(n, o, e, t);
            c.up.set(0, 0, -1), c.lookAt(new i.Vector3(0, -1, 0)), this.add(c);
            var l = new i.PerspectiveCamera(n, o, e, t);
            l.up.set(0, -1, 0), l.lookAt(new i.Vector3(0, 0, 1)), this.add(l);
            var h = new i.PerspectiveCamera(n, o, e, t);
            h.up.set(0, -1, 0), h.lookAt(new i.Vector3(0, 0, -1)), this.add(h), this.renderTarget = new i.WebGLRenderTargetCube(r, r, {
                format: i.RGBFormat,
                magFilter: i.LinearFilter,
                minFilter: i.LinearFilter
            }), this.updateCubeMap = function (e, t) {
                null === this.parent && this.updateMatrixWorld();
                var r = this.renderTarget, n = r.texture.generateMipmaps;
                r.texture.generateMipmaps = !1, r.activeCubeFace = 0, e.render(t, a, r), r.activeCubeFace = 1, e.render(t, s, r), r.activeCubeFace = 2, e.render(t, u, r), r.activeCubeFace = 3, e.render(t, c, r), r.activeCubeFace = 4, e.render(t, l, r), r.texture.generateMipmaps = n, r.activeCubeFace = 5, e.render(t, h, r), e.setRenderTarget(null)
            }
        },i.CubeCamera.prototype = Object.create(i.Object3D.prototype),i.CubeCamera.prototype.constructor = i.CubeCamera,i.OrthographicCamera = function (e, t, r, n, o, a) {
            i.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = e, this.right = t, this.top = r, this.bottom = n, this.near = void 0 !== o ? o : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
        },i.OrthographicCamera.prototype = Object.create(i.Camera.prototype),i.OrthographicCamera.prototype.constructor = i.OrthographicCamera,i.OrthographicCamera.prototype.updateProjectionMatrix = function () {
            var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), r = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
            this.projectionMatrix.makeOrthographic(r - e, r + e, n + t, n - t, this.near, this.far)
        },i.OrthographicCamera.prototype.copy = function (e) {
            return i.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
        },i.OrthographicCamera.prototype.toJSON = function (e) {
            var t = i.Object3D.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, t
        },i.PerspectiveCamera = function (e, t, r, n) {
            i.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
        },i.PerspectiveCamera.prototype = Object.create(i.Camera.prototype),i.PerspectiveCamera.prototype.constructor = i.PerspectiveCamera,i.PerspectiveCamera.prototype.setLens = function (e, t) {
            void 0 === t && (t = 24), this.fov = 2 * i.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
        },i.PerspectiveCamera.prototype.setViewOffset = function (e, t, r, n, i, o) {
            this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = n, this.width = i, this.height = o, this.updateProjectionMatrix()
        },i.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
            var e = i.Math.radToDeg(2 * Math.atan(Math.tan(.5 * i.Math.degToRad(this.fov)) / this.zoom));
            if (this.fullWidth) {
                var t = this.fullWidth / this.fullHeight, r = Math.tan(i.Math.degToRad(.5 * e)) * this.near, n = -r, o = t * n, a = t * r, s = Math.abs(a - o), u = Math.abs(r - n);
                this.projectionMatrix.makeFrustum(o + this.x * s / this.fullWidth, o + (this.x + this.width) * s / this.fullWidth, r - (this.y + this.height) * u / this.fullHeight, r - this.y * u / this.fullHeight, this.near, this.far)
            } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
        },i.PerspectiveCamera.prototype.copy = function (e) {
            return i.Camera.prototype.copy.call(this, e), this.fov = e.fov, this.aspect = e.aspect, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
        },i.PerspectiveCamera.prototype.toJSON = function (e) {
            var t = i.Object3D.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.fov = this.fov, t.object.aspect = this.aspect, t.object.near = this.near, t.object.far = this.far, t
        },i.Light = function (e) {
            i.Object3D.call(this), this.type = "Light", this.color = new i.Color(e), this.receiveShadow = void 0
        },i.Light.prototype = Object.create(i.Object3D.prototype),i.Light.prototype.constructor = i.Light,Object.defineProperties(i.Light.prototype, {
            onlyShadow: {
                set: function (e) {
                    console.warn("THREE.Light: .onlyShadow has been removed.")
                }
            }, shadowCameraFov: {
                set: function (e) {
                    this.shadow.camera.fov = e
                }
            }, shadowCameraLeft: {
                set: function (e) {
                    this.shadow.camera.left = e
                }
            }, shadowCameraRight: {
                set: function (e) {
                    this.shadow.camera.right = e
                }
            }, shadowCameraTop: {
                set: function (e) {
                    this.shadow.camera.top = e
                }
            }, shadowCameraBottom: {
                set: function (e) {
                    this.shadow.camera.bottom = e
                }
            }, shadowCameraNear: {
                set: function (e) {
                    this.shadow.camera.near = e
                }
            }, shadowCameraFar: {
                set: function (e) {
                    this.shadow.camera.far = e
                }
            }, shadowCameraVisible: {
                set: function (e) {
                    console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow ) instead.")
                }
            }, shadowBias: {
                set: function (e) {
                    this.shadow.bias = e
                }
            }, shadowDarkness: {
                set: function (e) {
                    this.shadow.darkness = e
                }
            }, shadowMapWidth: {
                set: function (e) {
                    this.shadow.mapSize.width = e
                }
            }, shadowMapHeight: {
                set: function (e) {
                    this.shadow.mapSize.height = e
                }
            }
        }),i.Light.prototype.copy = function (e) {
            return i.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this
        },i.Light.prototype.toJSON = function (e) {
            var t = i.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.intensity && (t.object.intensity = this.intensity), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.exponent && (t.object.exponent = this.exponent), t
        },i.LightShadow = function (e) {
            this.camera = e, this.bias = 0, this.darkness = 1, this.mapSize = new i.Vector2(512, 512), this.map = null, this.matrix = null
        },i.LightShadow.prototype = {
            constructor: i.LightShadow, copy: function (e) {
                this.camera = e.camera.clone(), this.bias = e.bias, this.darkness = e.darkness, this.mapSize.copy(e.mapSize)
            }, clone: function () {
                return (new this.constructor).copy(this)
            }
        },i.AmbientLight = function (e) {
            i.Light.call(this, e), this.type = "AmbientLight", this.castShadow = void 0
        },i.AmbientLight.prototype = Object.create(i.Light.prototype),i.AmbientLight.prototype.constructor = i.AmbientLight,i.DirectionalLight = function (e, t) {
            i.Light.call(this, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new i.Object3D, this.intensity = void 0 !== t ? t : 1, this.shadow = new i.LightShadow(new i.OrthographicCamera(-500, 500, 500, -500, 50, 5e3))
        },i.DirectionalLight.prototype = Object.create(i.Light.prototype),i.DirectionalLight.prototype.constructor = i.DirectionalLight,i.DirectionalLight.prototype.copy = function (e) {
            return i.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        },i.HemisphereLight = function (e, t, r) {
            i.Light.call(this, e), this.type = "HemisphereLight", this.castShadow = void 0, this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new i.Color(t), this.intensity = void 0 !== r ? r : 1
        },i.HemisphereLight.prototype = Object.create(i.Light.prototype),i.HemisphereLight.prototype.constructor = i.HemisphereLight,i.HemisphereLight.prototype.copy = function (e) {
            return i.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this.intensity = e.intensity, this
        },i.PointLight = function (e, t, r, n) {
            i.Light.call(this, e), this.type = "PointLight", this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new i.LightShadow(new i.PerspectiveCamera(90, 1, 1, 500))
        },i.PointLight.prototype = Object.create(i.Light.prototype),i.PointLight.prototype.constructor = i.PointLight,i.PointLight.prototype.copy = function (e) {
            return i.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
        },i.SpotLight = function (e, t, r, n, o, a) {
            i.Light.call(this, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new i.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.decay = void 0 !== a ? a : 1, this.shadow = new i.LightShadow(new i.PerspectiveCamera(50, 1, 50, 5e3))
        },i.SpotLight.prototype = Object.create(i.Light.prototype),i.SpotLight.prototype.constructor = i.SpotLight,i.SpotLight.prototype.copy = function (e) {
            return i.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.angle = e.angle, this.exponent = e.exponent, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        },i.Cache = {
            enabled: !1, files: {}, add: function (e, t) {
                this.enabled !== !1 && (this.files[e] = t)
            }, get: function (e) {
                return this.enabled !== !1 ? this.files[e] : void 0
            }, remove: function (e) {
                delete this.files[e]
            }, clear: function () {
                this.files = {}
            }
        },i.Loader = function () {
            this.onLoadStart = function () {
            }, this.onLoadProgress = function () {
            }, this.onLoadComplete = function () {
            }
        },i.Loader.prototype = {
            constructor: i.Loader, crossOrigin: void 0, extractUrlBase: function (e) {
                var t = e.split("/");
                return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
            }, initMaterials: function (e, t, r) {
                for (var n = [], i = 0; i < e.length; ++i)n[i] = this.createMaterial(e[i], t, r);
                return n
            }, createMaterial: function () {
                var e, t, r;
                return function (n, o, a) {
                    function s(e, r, n, s, c) {
                        var l, h = o + e, p = i.Loader.Handlers.get(h);
                        null !== p ? l = p.load(h) : (t.setCrossOrigin(a), l = t.load(h)), void 0 !== r && (l.repeat.fromArray(r), 1 !== r[0] && (l.wrapS = i.RepeatWrapping), 1 !== r[1] && (l.wrapT = i.RepeatWrapping)), void 0 !== n && l.offset.fromArray(n), void 0 !== s && ("repeat" === s[0] && (l.wrapS = i.RepeatWrapping), "mirror" === s[0] && (l.wrapS = i.MirroredRepeatWrapping), "repeat" === s[1] && (l.wrapT = i.RepeatWrapping), "mirror" === s[1] && (l.wrapT = i.MirroredRepeatWrapping)), void 0 !== c && (l.anisotropy = c);
                        var d = i.Math.generateUUID();
                        return u[d] = l, d
                    }

                    void 0 === e && (e = new i.Color), void 0 === t && (t = new i.TextureLoader), void 0 === r && (r = new i.MaterialLoader);
                    var u = {}, c = {uuid: i.Math.generateUUID(), type: "MeshLambertMaterial"};
                    for (var l in n) {
                        var h = n[l];
                        switch (l) {
                            case"DbgColor":
                                c.color = h;
                                break;
                            case"DbgIndex":
                            case"opticalDensity":
                            case"illumination":
                                break;
                            case"DbgName":
                                c.name = h;
                                break;
                            case"blending":
                                c.blending = i[h];
                                break;
                            case"colorDiffuse":
                                c.color = e.fromArray(h).getHex();
                                break;
                            case"colorSpecular":
                                c.specular = e.fromArray(h).getHex();
                                break;
                            case"colorEmissive":
                                c.emissive = e.fromArray(h).getHex();
                                break;
                            case"specularCoef":
                                c.shininess = h;
                                break;
                            case"shading":
                                "basic" === h.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === h.toLowerCase() && (c.type = "MeshPhongMaterial");
                                break;
                            case"mapDiffuse":
                                c.map = s(h, n.mapDiffuseRepeat, n.mapDiffuseOffset, n.mapDiffuseWrap, n.mapDiffuseAnisotropy);
                                break;
                            case"mapDiffuseRepeat":
                            case"mapDiffuseOffset":
                            case"mapDiffuseWrap":
                            case"mapDiffuseAnisotropy":
                                break;
                            case"mapLight":
                                c.lightMap = s(h, n.mapLightRepeat, n.mapLightOffset, n.mapLightWrap, n.mapLightAnisotropy);
                                break;
                            case"mapLightRepeat":
                            case"mapLightOffset":
                            case"mapLightWrap":
                            case"mapLightAnisotropy":
                                break;
                            case"mapAO":
                                c.aoMap = s(h, n.mapAORepeat, n.mapAOOffset, n.mapAOWrap, n.mapAOAnisotropy);
                                break;
                            case"mapAORepeat":
                            case"mapAOOffset":
                            case"mapAOWrap":
                            case"mapAOAnisotropy":
                                break;
                            case"mapBump":
                                c.bumpMap = s(h, n.mapBumpRepeat, n.mapBumpOffset, n.mapBumpWrap, n.mapBumpAnisotropy);
                                break;
                            case"mapBumpScale":
                                c.bumpScale = h;
                                break;
                            case"mapBumpRepeat":
                            case"mapBumpOffset":
                            case"mapBumpWrap":
                            case"mapBumpAnisotropy":
                                break;
                            case"mapNormal":
                                c.normalMap = s(h, n.mapNormalRepeat, n.mapNormalOffset, n.mapNormalWrap, n.mapNormalAnisotropy);
                                break;
                            case"mapNormalFactor":
                                c.normalScale = [h, h];
                                break;
                            case"mapNormalRepeat":
                            case"mapNormalOffset":
                            case"mapNormalWrap":
                            case"mapNormalAnisotropy":
                                break;
                            case"mapSpecular":
                                c.specularMap = s(h, n.mapSpecularRepeat, n.mapSpecularOffset, n.mapSpecularWrap, n.mapSpecularAnisotropy);
                                break;
                            case"mapSpecularRepeat":
                            case"mapSpecularOffset":
                            case"mapSpecularWrap":
                            case"mapSpecularAnisotropy":
                                break;
                            case"mapAlpha":
                                c.alphaMap = s(h, n.mapAlphaRepeat, n.mapAlphaOffset, n.mapAlphaWrap, n.mapAlphaAnisotropy);
                                break;
                            case"mapAlphaRepeat":
                            case"mapAlphaOffset":
                            case"mapAlphaWrap":
                            case"mapAlphaAnisotropy":
                                break;
                            case"flipSided":
                                c.side = i.BackSide;
                                break;
                            case"doubleSided":
                                c.side = i.DoubleSide;
                                break;
                            case"transparency":
                                console.warn("THREE.Loader: transparency has been renamed to opacity"), c.opacity = h;
                                break;
                            case"opacity":
                            case"transparent":
                            case"depthTest":
                            case"depthWrite":
                            case"transparent":
                            case"visible":
                            case"wireframe":
                                c[l] = h;
                                break;
                            case"vertexColors":
                                h === !0 && (c.vertexColors = i.VertexColors), "face" === h && (c.vertexColors = i.FaceColors);
                                break;
                            default:
                                console.error("Loader.createMaterial: Unsupported", l, h)
                        }
                    }
                    return "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), r.setTextures(u), r.parse(c)
                }
            }()
        },i.Loader.Handlers = {
            handlers: [], add: function (e, t) {
                this.handlers.push(e, t)
            }, get: function (e) {
                for (var t = this.handlers, r = 0, n = t.length; n > r; r += 2) {
                    var i = t[r], o = t[r + 1];
                    if (i.test(e))return o
                }
                return null
            }
        },i.XHRLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager
        },i.XHRLoader.prototype = {
            constructor: i.XHRLoader, load: function (e, t, r, n) {
                var o = this, a = i.Cache.get(e);
                if (void 0 !== a)return t && setTimeout(function () {
                    t(a)
                }, 0), a;
                var s = new XMLHttpRequest;
                return s.open("GET", e, !0), s.addEventListener("load", function (r) {
                    var n = r.target.response;
                    i.Cache.add(e, n), t && t(n), o.manager.itemEnd(e)
                }, !1), void 0 !== r && s.addEventListener("progress", function (e) {
                    r(e)
                }, !1), s.addEventListener("error", function (t) {
                    n && n(t), o.manager.itemError(e)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.send(null), o.manager.itemStart(e), s
            }, setResponseType: function (e) {
                this.responseType = e
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, setWithCredentials: function (e) {
                this.withCredentials = e
            }
        },i.ImageLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager
        },i.ImageLoader.prototype = {
            constructor: i.ImageLoader, load: function (e, t, r, n) {
                var o = this, a = i.Cache.get(e);
                if (void 0 !== a)return o.manager.itemStart(e), t ? setTimeout(function () {
                    t(a), o.manager.itemEnd(e)
                }, 0) : o.manager.itemEnd(e), a;
                var s = document.createElement("img");
                return s.addEventListener("load", function (r) {
                    i.Cache.add(e, this), t && t(this), o.manager.itemEnd(e)
                }, !1), void 0 !== r && s.addEventListener("progress", function (e) {
                    r(e)
                }, !1), s.addEventListener("error", function (t) {
                    n && n(t), o.manager.itemError(e)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), o.manager.itemStart(e), s.src = e, s
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },i.JSONLoader = function (e) {
            "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : i.DefaultLoadingManager, this.withCredentials = !1
        },i.JSONLoader.prototype = {
            constructor: i.JSONLoader, get statusDomElement() {
                return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), console.warn("THREE.JSONLoader: .statusDomElement has been removed."), this._statusDomElement
            }, load: function (e, t, r, n) {
                var o = this, a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : i.Loader.prototype.extractUrlBase(e), s = new i.XHRLoader(this.manager);
                s.setCrossOrigin(this.crossOrigin), s.setWithCredentials(this.withCredentials), s.load(e, function (r) {
                    var n = JSON.parse(r), i = n.metadata;
                    if (void 0 !== i) {
                        if ("object" === i.type)return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === i.type)return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                    }
                    var s = o.parse(n, a);
                    t(s.geometry, s.materials)
                })
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, setTexturePath: function (e) {
                this.texturePath = e
            }, parse: function (e, t) {
                function r(t) {
                    function r(e, t) {
                        return e & 1 << t
                    }

                    var n, o, a, u, c, l, h, p, d, f, m, g, v, y, x, b, w, S, M, T, _, E, C, A, L, P, k, D = e.faces, R = e.vertices, O = e.normals, F = e.colors, V = 0;
                    if (void 0 !== e.uvs) {
                        for (n = 0; n < e.uvs.length; n++)e.uvs[n].length && V++;
                        for (n = 0; V > n; n++)s.faceVertexUvs[n] = []
                    }
                    for (u = 0, c = R.length; c > u;)S = new i.Vector3, S.x = R[u++] * t, S.y = R[u++] * t, S.z = R[u++] * t, s.vertices.push(S);
                    for (u = 0, c = D.length; c > u;)if (f = D[u++], m = r(f, 0), g = r(f, 1), v = r(f, 3), y = r(f, 4), x = r(f, 5), b = r(f, 6), w = r(f, 7), m) {
                        if (T = new i.Face3, T.a = D[u], T.b = D[u + 1], T.c = D[u + 3], _ = new i.Face3, _.a = D[u + 1], _.b = D[u + 2], _.c = D[u + 3], u += 4, g && (d = D[u++], T.materialIndex = d, _.materialIndex = d), a = s.faces.length, v)for (n = 0; V > n; n++)for (A = e.uvs[n], s.faceVertexUvs[n][a] = [], s.faceVertexUvs[n][a + 1] = [], o = 0; 4 > o; o++)p = D[u++], P = A[2 * p], k = A[2 * p + 1], L = new i.Vector2(P, k), 2 !== o && s.faceVertexUvs[n][a].push(L), 0 !== o && s.faceVertexUvs[n][a + 1].push(L);
                        if (y && (h = 3 * D[u++], T.normal.set(O[h++], O[h++], O[h]), _.normal.copy(T.normal)), x)for (n = 0; 4 > n; n++)h = 3 * D[u++], C = new i.Vector3(O[h++], O[h++], O[h]), 2 !== n && T.vertexNormals.push(C), 0 !== n && _.vertexNormals.push(C);
                        if (b && (l = D[u++], E = F[l], T.color.setHex(E), _.color.setHex(E)), w)for (n = 0; 4 > n; n++)l = D[u++], E = F[l], 2 !== n && T.vertexColors.push(new i.Color(E)), 0 !== n && _.vertexColors.push(new i.Color(E));
                        s.faces.push(T), s.faces.push(_)
                    } else {
                        if (M = new i.Face3, M.a = D[u++], M.b = D[u++], M.c = D[u++], g && (d = D[u++], M.materialIndex = d), a = s.faces.length, v)for (n = 0; V > n; n++)for (A = e.uvs[n], s.faceVertexUvs[n][a] = [], o = 0; 3 > o; o++)p = D[u++], P = A[2 * p], k = A[2 * p + 1], L = new i.Vector2(P, k), s.faceVertexUvs[n][a].push(L);
                        if (y && (h = 3 * D[u++], M.normal.set(O[h++], O[h++], O[h])), x)for (n = 0; 3 > n; n++)h = 3 * D[u++], C = new i.Vector3(O[h++], O[h++], O[h]), M.vertexNormals.push(C);
                        if (b && (l = D[u++], M.color.setHex(F[l])), w)for (n = 0; 3 > n; n++)l = D[u++], M.vertexColors.push(new i.Color(F[l]));
                        s.faces.push(M)
                    }
                }

                function n() {
                    var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                    if (e.skinWeights)for (var r = 0, n = e.skinWeights.length; n > r; r += t) {
                        var o = e.skinWeights[r], a = t > 1 ? e.skinWeights[r + 1] : 0, u = t > 2 ? e.skinWeights[r + 2] : 0, c = t > 3 ? e.skinWeights[r + 3] : 0;
                        s.skinWeights.push(new i.Vector4(o, a, u, c))
                    }
                    if (e.skinIndices)for (var r = 0, n = e.skinIndices.length; n > r; r += t) {
                        var l = e.skinIndices[r], h = t > 1 ? e.skinIndices[r + 1] : 0, p = t > 2 ? e.skinIndices[r + 2] : 0, d = t > 3 ? e.skinIndices[r + 3] : 0;
                        s.skinIndices.push(new i.Vector4(l, h, p, d))
                    }
                    s.bones = e.bones, s.bones && s.bones.length > 0 && (s.skinWeights.length !== s.skinIndices.length || s.skinIndices.length !== s.vertices.length) && console.warn("When skinning, number of vertices (" + s.vertices.length + "), skinIndices (" + s.skinIndices.length + "), and skinWeights (" + s.skinWeights.length + ") should match.")
                }

                function o(t) {
                    if (void 0 !== e.morphTargets)for (var r = 0, n = e.morphTargets.length; n > r; r++) {
                        s.morphTargets[r] = {}, s.morphTargets[r].name = e.morphTargets[r].name, s.morphTargets[r].vertices = [];
                        for (var o = s.morphTargets[r].vertices, a = e.morphTargets[r].vertices, u = 0, c = a.length; c > u; u += 3) {
                            var l = new i.Vector3;
                            l.x = a[u] * t, l.y = a[u + 1] * t, l.z = a[u + 2] * t, o.push(l)
                        }
                    }
                    if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                        console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                        for (var h = s.faces, p = e.morphColors[0].colors, r = 0, n = h.length; n > r; r++)h[r].color.fromArray(p, 3 * r)
                    }
                }

                function a() {
                    var t = [], r = [];
                    void 0 !== e.animation && r.push(e.animation), void 0 !== e.animations && (e.animations.length ? r = r.concat(e.animations) : r.push(e.animations));
                    for (var n = 0; n < r.length; n++) {
                        var o = i.AnimationClip.parseAnimation(r[n], s.bones);
                        o && t.push(o)
                    }
                    if (s.morphTargets) {
                        var a = i.AnimationClip.CreateClipsFromMorphTargetSequences(s.morphTargets, 10);
                        t = t.concat(a)
                    }
                    t.length > 0 && (s.animations = t)
                }

                var s = new i.Geometry, u = void 0 !== e.scale ? 1 / e.scale : 1;
                if (r(u), n(), o(u), a(), s.computeFaceNormals(), s.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length)return {geometry: s};
                var c = i.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
                return {geometry: s, materials: c}
            }
        },i.LoadingManager = function (e, t, r) {
            var n = this, i = !1, o = 0, a = 0;
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function (e) {
                a++, i === !1 && void 0 !== n.onStart && n.onStart(e, o, a), i = !0
            }, this.itemEnd = function (e) {
                o++, void 0 !== n.onProgress && n.onProgress(e, o, a), o === a && (i = !1, void 0 !== n.onLoad && n.onLoad())
            }, this.itemError = function (e) {
                void 0 !== n.onError && n.onError(e)
            }
        },i.DefaultLoadingManager = new i.LoadingManager,i.BufferGeometryLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager
        },i.BufferGeometryLoader.prototype = {
            constructor: i.BufferGeometryLoader, load: function (e, t, r, n) {
                var o = this, a = new i.XHRLoader(o.manager);
                a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
                    t(o.parse(JSON.parse(e)))
                }, r, n)
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, parse: function (e) {
                var t = new i.BufferGeometry, r = e.data.index;
                if (void 0 !== r) {
                    var o = new n[r.type](r.array);
                    t.setIndex(new i.BufferAttribute(o, 1))
                }
                var a = e.data.attributes;
                for (var s in a) {
                    var u = a[s], o = new n[u.type](u.array);
                    t.addAttribute(s, new i.BufferAttribute(o, u.itemSize))
                }
                var c = e.data.groups || e.data.drawcalls || e.data.offsets;
                if (void 0 !== c)for (var l = 0, h = c.length; l !== h; ++l) {
                    var p = c[l];
                    t.addGroup(p.start, p.count)
                }
                var d = e.data.boundingSphere;
                if (void 0 !== d) {
                    var f = new i.Vector3;
                    void 0 !== d.center && f.fromArray(d.center), t.boundingSphere = new i.Sphere(f, d.radius)
                }
                return t
            }
        },i.MaterialLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager, this.textures = {}
        },i.MaterialLoader.prototype = {
            constructor: i.MaterialLoader, load: function (e, t, r, n) {
                var o = this, a = new i.XHRLoader(o.manager);
                a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
                    t(o.parse(JSON.parse(e)))
                }, r, n)
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, setTextures: function (e) {
                this.textures = e
            }, getTexture: function (e) {
                var t = this.textures;
                return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
            }, parse: function (e) {
                var t = new i[e.type];
                if (t.uuid = e.uuid, void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), e.normalScale && (t.normalScale = new i.Vector2(e.normalScale, e.normalScale)), void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = i.MultiplyOperation), e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials)for (var r = 0, n = e.materials.length; n > r; r++)t.materials.push(this.parse(e.materials[r]));
                return t
            }
        },i.ObjectLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager, this.texturePath = ""
        },i.ObjectLoader.prototype = {
            constructor: i.ObjectLoader, load: function (e, t, r, n) {
                "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
                var o = this, a = new i.XHRLoader(o.manager);
                a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
                    o.parse(JSON.parse(e), t)
                }, r, n)
            }, setTexturePath: function (e) {
                this.texturePath = e
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, parse: function (e, t) {
                var r = this.parseGeometries(e.geometries), n = this.parseImages(e.images, function () {
                    void 0 !== t && t(a)
                }), i = this.parseTextures(e.textures, n), o = this.parseMaterials(e.materials, i), a = this.parseObject(e.object, r, o);
                return e.animations && (a.animations = this.parseAnimations(e.animations)), (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(a), a
            }, parseGeometries: function (e) {
                var t = {};
                if (void 0 !== e)for (var r = new i.JSONLoader, n = new i.BufferGeometryLoader, o = 0, a = e.length; a > o; o++) {
                    var s, u = e[o];
                    switch (u.type) {
                        case"PlaneGeometry":
                        case"PlaneBufferGeometry":
                            s = new i[u.type](u.width, u.height, u.widthSegments, u.heightSegments);
                            break;
                        case"BoxGeometry":
                        case"CubeGeometry":
                            s = new i.BoxGeometry(u.width, u.height, u.depth, u.widthSegments, u.heightSegments, u.depthSegments);
                            break;
                        case"CircleBufferGeometry":
                            s = new i.CircleBufferGeometry(u.radius, u.segments, u.thetaStart, u.thetaLength);
                            break;
                        case"CircleGeometry":
                            s = new i.CircleGeometry(u.radius, u.segments, u.thetaStart, u.thetaLength);
                            break;
                        case"CylinderGeometry":
                            s = new i.CylinderGeometry(u.radiusTop, u.radiusBottom, u.height, u.radialSegments, u.heightSegments, u.openEnded, u.thetaStart, u.thetaLength);
                            break;
                        case"SphereGeometry":
                            s = new i.SphereGeometry(u.radius, u.widthSegments, u.heightSegments, u.phiStart, u.phiLength, u.thetaStart, u.thetaLength);
                            break;
                        case"SphereBufferGeometry":
                            s = new i.SphereBufferGeometry(u.radius, u.widthSegments, u.heightSegments, u.phiStart, u.phiLength, u.thetaStart, u.thetaLength);
                            break;
                        case"DodecahedronGeometry":
                            s = new i.DodecahedronGeometry(u.radius, u.detail);
                            break;
                        case"IcosahedronGeometry":
                            s = new i.IcosahedronGeometry(u.radius, u.detail);
                            break;
                        case"OctahedronGeometry":
                            s = new i.OctahedronGeometry(u.radius, u.detail);
                            break;
                        case"TetrahedronGeometry":
                            s = new i.TetrahedronGeometry(u.radius, u.detail);
                            break;
                        case"RingGeometry":
                            s = new i.RingGeometry(u.innerRadius, u.outerRadius, u.thetaSegments, u.phiSegments, u.thetaStart, u.thetaLength);
                            break;
                        case"TorusGeometry":
                            s = new i.TorusGeometry(u.radius, u.tube, u.radialSegments, u.tubularSegments, u.arc);
                            break;
                        case"TorusKnotGeometry":
                            s = new i.TorusKnotGeometry(u.radius, u.tube, u.radialSegments, u.tubularSegments, u.p, u.q, u.heightScale);
                            break;
                        case"BufferGeometry":
                            s = n.parse(u);
                            break;
                        case"Geometry":
                            s = r.parse(u.data, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + u.type + '"');
                            continue
                    }
                    s.uuid = u.uuid, void 0 !== u.name && (s.name = u.name), t[u.uuid] = s
                }
                return t
            }, parseMaterials: function (e, t) {
                var r = {};
                if (void 0 !== e) {
                    var n = new i.MaterialLoader;
                    n.setTextures(t);
                    for (var o = 0, a = e.length; a > o; o++) {
                        var s = n.parse(e[o]);
                        r[s.uuid] = s
                    }
                }
                return r
            }, parseAnimations: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = i.AnimationClip.parse(e[r]);
                    t.push(n)
                }
                return t
            }, parseImages: function (e, t) {
                function r(e) {
                    return n.manager.itemStart(e), s.load(e, function () {
                        n.manager.itemEnd(e)
                    })
                }

                var n = this, o = {};
                if (void 0 !== e && e.length > 0) {
                    var a = new i.LoadingManager(t), s = new i.ImageLoader(a);
                    s.setCrossOrigin(this.crossOrigin);
                    for (var u = 0, c = e.length; c > u; u++) {
                        var l = e[u], h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.texturePath + l.url;
                        o[l.uuid] = r(h)
                    }
                }
                return o
            }, parseTextures: function (e, t) {
                function r(e) {
                    return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), i[e])
                }

                var n = {};
                if (void 0 !== e)for (var o = 0, a = e.length; a > o; o++) {
                    var s = e[o];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    var u = new i.Texture(t[s.image]);
                    u.needsUpdate = !0, u.uuid = s.uuid, void 0 !== s.name && (u.name = s.name), void 0 !== s.mapping && (u.mapping = r(s.mapping)), void 0 !== s.offset && (u.offset = new i.Vector2(s.offset[0], s.offset[1])), void 0 !== s.repeat && (u.repeat = new i.Vector2(s.repeat[0], s.repeat[1])), void 0 !== s.minFilter && (u.minFilter = r(s.minFilter)), void 0 !== s.magFilter && (u.magFilter = r(s.magFilter)), void 0 !== s.anisotropy && (u.anisotropy = s.anisotropy), Array.isArray(s.wrap) && (u.wrapS = r(s.wrap[0]), u.wrapT = r(s.wrap[1])), n[s.uuid] = u
                }
                return n
            }, parseObject: function () {
                var e = new i.Matrix4;
                return function (t, r, n) {
                    function o(e) {
                        return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), r[e]
                    }

                    function a(e) {
                        return void 0 !== e ? (void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]) : void 0
                    }

                    var s;
                    switch (t.type) {
                        case"Scene":
                            s = new i.Scene;
                            break;
                        case"PerspectiveCamera":
                            s = new i.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                            break;
                        case"OrthographicCamera":
                            s = new i.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                            break;
                        case"AmbientLight":
                            s = new i.AmbientLight(t.color);
                            break;
                        case"DirectionalLight":
                            s = new i.DirectionalLight(t.color, t.intensity);
                            break;
                        case"PointLight":
                            s = new i.PointLight(t.color, t.intensity, t.distance, t.decay);
                            break;
                        case"SpotLight":
                            s = new i.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
                            break;
                        case"HemisphereLight":
                            s = new i.HemisphereLight(t.color, t.groundColor, t.intensity);
                            break;
                        case"Mesh":
                            s = new i.Mesh(o(t.geometry), a(t.material));
                            break;
                        case"LOD":
                            s = new i.LOD;
                            break;
                        case"Line":
                            s = new i.Line(o(t.geometry), a(t.material), t.mode);
                            break;
                        case"PointCloud":
                        case"Points":
                            s = new i.Points(o(t.geometry), a(t.material));
                            break;
                        case"Sprite":
                            s = new i.Sprite(a(t.material));
                            break;
                        case"Group":
                            s = new i.Group;
                            break;
                        default:
                            s = new i.Object3D
                    }
                    if (s.uuid = t.uuid, void 0 !== t.name && (s.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t.position && s.position.fromArray(t.position), void 0 !== t.rotation && s.rotation.fromArray(t.rotation), void 0 !== t.scale && s.scale.fromArray(t.scale)), void 0 !== t.castShadow && (s.castShadow = t.castShadow), void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.children)for (var u in t.children)s.add(this.parseObject(t.children[u], r, n));
                    if ("LOD" === t.type)for (var c = t.levels, l = 0; l < c.length; l++) {
                        var h = c[l], u = s.getObjectByProperty("uuid", h.object);
                        void 0 !== u && s.addLevel(u, h.distance)
                    }
                    return s
                }
            }()
        },i.TextureLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager
        },i.TextureLoader.prototype = {
            constructor: i.TextureLoader, load: function (e, t, r, n) {
                var o = new i.Texture, a = new i.ImageLoader(this.manager);
                return a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
                    o.image = e, o.needsUpdate = !0, void 0 !== t && t(o)
                }, r, n), o
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },i.CubeTextureLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager
        },i.CubeTextureLoader.prototype = {
            constructor: i.CubeTextureLoader, load: function (e, t, r, n) {
                function o(r) {
                    s.load(e[r], function (e) {
                        a.images[r] = e, u++, 6 === u && (a.needsUpdate = !0, t && t(a))
                    }, void 0, n)
                }

                var a = new i.CubeTexture([]), s = new i.ImageLoader;
                s.setCrossOrigin(this.crossOrigin);
                for (var u = 0, c = 0; c < e.length; ++c)o(c);
                return a
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },i.DataTextureLoader = i.BinaryTextureLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager, this._parser = null
        },i.BinaryTextureLoader.prototype = {
            constructor: i.BinaryTextureLoader, load: function (e, t, r, n) {
                var o = this, a = new i.DataTexture, s = new i.XHRLoader(this.manager);
                return s.setCrossOrigin(this.crossOrigin), s.setResponseType("arraybuffer"), s.load(e, function (e) {
                    var r = o._parser(e);
                    r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : i.ClampToEdgeWrapping, a.wrapT = void 0 !== r.wrapT ? r.wrapT : i.ClampToEdgeWrapping, a.magFilter = void 0 !== r.magFilter ? r.magFilter : i.LinearFilter, a.minFilter = void 0 !== r.minFilter ? r.minFilter : i.LinearMipMapLinearFilter, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps), 1 === r.mipmapCount && (a.minFilter = i.LinearFilter), a.needsUpdate = !0, t && t(a, r))
                }, r, n), a
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },i.CompressedTextureLoader = function (e) {
            this.manager = void 0 !== e ? e : i.DefaultLoadingManager, this._parser = null
        },i.CompressedTextureLoader.prototype = {
            constructor: i.CompressedTextureLoader, load: function (e, t, r, n) {
                var o = this, a = [], s = new i.CompressedTexture;
                s.image = a;
                var u = new i.XHRLoader(this.manager);
                if (u.setCrossOrigin(this.crossOrigin), u.setResponseType("arraybuffer"), Array.isArray(e))for (var c = 0, l = function (l) {
                    u.load(e[l], function (e) {
                        var r = o._parser(e, !0);
                        a[l] = {
                            width: r.width,
                            height: r.height,
                            format: r.format,
                            mipmaps: r.mipmaps
                        }, c += 1, 6 === c && (1 === r.mipmapCount && (s.minFilter = i.LinearFilter), s.format = r.format, s.needsUpdate = !0, t && t(s))
                    }, r, n)
                }, h = 0, p = e.length; p > h; ++h)l(h); else u.load(e, function (e) {
                    var r = o._parser(e, !0);
                    if (r.isCubemap)for (var n = r.mipmaps.length / r.mipmapCount, u = 0; n > u; u++) {
                        a[u] = {mipmaps: []};
                        for (var c = 0; c < r.mipmapCount; c++)a[u].mipmaps.push(r.mipmaps[u * r.mipmapCount + c]), a[u].format = r.format, a[u].width = r.width, a[u].height = r.height
                    } else s.image.width = r.width, s.image.height = r.height, s.mipmaps = r.mipmaps;
                    1 === r.mipmapCount && (s.minFilter = i.LinearFilter), s.format = r.format, s.needsUpdate = !0, t && t(s)
                }, r, n);
                return s
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },i.Material = function () {
            Object.defineProperty(this, "id", {value: i.MaterialIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.type = "Material", this.side = i.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = i.NormalBlending, this.blendSrc = i.SrcAlphaFactor, this.blendDst = i.OneMinusSrcAlphaFactor, this.blendEquation = i.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = i.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
        },i.Material.prototype = {
            constructor: i.Material, get needsUpdate() {
                return this._needsUpdate
            }, set needsUpdate(e) {
                e === !0 && this.update(), this._needsUpdate = e
            }, setValues: function (e) {
                if (void 0 !== e)for (var t in e) {
                    var r = e[t];
                    if (void 0 !== r) {
                        var n = this[t];
                        void 0 !== n ? n instanceof i.Color ? n.set(r) : n instanceof i.Vector3 && r instanceof i.Vector3 ? n.copy(r) : "overdraw" === t ? this[t] = Number(r) : this[t] = r : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                    } else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                }
            }, toJSON: function (e) {
                var t = {metadata: {version: 4.4, type: "Material", generator: "Material.toJSON"}};
                return t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), this.color instanceof i.Color && (t.color = this.color.getHex()), this.emissive instanceof i.Color && (t.emissive = this.emissive.getHex()), this.specular instanceof i.Color && (t.specular = this.specular.getHex()), void 0 !== this.shininess && (t.shininess = this.shininess), this.map instanceof i.Texture && (t.map = this.map.toJSON(e).uuid), this.alphaMap instanceof i.Texture && (t.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof i.Texture && (t.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof i.Texture && (t.bumpMap = this.bumpMap.toJSON(e).uuid, t.bumpScale = this.bumpScale), this.normalMap instanceof i.Texture && (t.normalMap = this.normalMap.toJSON(e).uuid, t.normalScale = this.normalScale), this.displacementMap instanceof i.Texture && (t.displacementMap = this.displacementMap.toJSON(e).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.specularMap instanceof i.Texture && (t.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof i.Texture && (t.envMap = this.envMap.toJSON(e).uuid, t.reflectivity = this.reflectivity), void 0 !== this.size && (t.size = this.size), void 0 !== this.sizeAttenuation && (t.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== i.NoColors && (t.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== i.SmoothShading && (t.shading = this.shading), void 0 !== this.blending && this.blending !== i.NormalBlending && (t.blending = this.blending), void 0 !== this.side && this.side !== i.FrontSide && (t.side = this.side), this.opacity < 1 && (t.opacity = this.opacity), this.transparent === !0 && (t.transparent = this.transparent), this.alphaTest > 0 && (t.alphaTest = this.alphaTest), this.wireframe === !0 && (t.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (t.wireframeLinewidth = this.wireframeLinewidth), t
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.name = e.name, this.side = e.side, this.opacity = e.opacity, this.transparent = e.transparent, this.blending = e.blending, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.overdraw = e.overdraw, this.visible = e.visible, this
            }, update: function () {
                this.dispatchEvent({type: "update"})
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }, get wrapAround() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }, set wrapAround(e) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }, get wrapRGB() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new i.Color
            }
        },i.EventDispatcher.prototype.apply(i.Material.prototype),i.MaterialIdCount = 0,i.LineBasicMaterial = function (e) {
            i.Material.call(this), this.type = "LineBasicMaterial", this.color = new i.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = i.NoColors, this.fog = !0, this.setValues(e)
        },i.LineBasicMaterial.prototype = Object.create(i.Material.prototype),i.LineBasicMaterial.prototype.constructor = i.LineBasicMaterial,i.LineBasicMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        },i.LineDashedMaterial = function (e) {
            i.Material.call(this), this.type = "LineDashedMaterial", this.color = new i.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
        },i.LineDashedMaterial.prototype = Object.create(i.Material.prototype),i.LineDashedMaterial.prototype.constructor = i.LineDashedMaterial,i.LineDashedMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        },i.MeshBasicMaterial = function (e) {
            i.Material.call(this), this.type = "MeshBasicMaterial", this.color = new i.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = i.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = i.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = i.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
        },i.MeshBasicMaterial.prototype = Object.create(i.Material.prototype),i.MeshBasicMaterial.prototype.constructor = i.MeshBasicMaterial,i.MeshBasicMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
        },i.MeshLambertMaterial = function (e) {
            i.Material.call(this), this.type = "MeshLambertMaterial", this.color = new i.Color(16777215), this.emissive = new i.Color(0), this.map = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = i.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = i.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        },i.MeshLambertMaterial.prototype = Object.create(i.Material.prototype),i.MeshLambertMaterial.prototype.constructor = i.MeshLambertMaterial,i.MeshLambertMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.map = e.map, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
        },i.MeshPhongMaterial = function (e) {
            i.Material.call(this), this.type = "MeshPhongMaterial", this.color = new i.Color(16777215), this.emissive = new i.Color(0), this.specular = new i.Color(1118481), this.shininess = 30, this.metal = !1, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = i.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = i.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = i.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        },i.MeshPhongMaterial.prototype = Object.create(i.Material.prototype),i.MeshPhongMaterial.prototype.constructor = i.MeshPhongMaterial,i.MeshPhongMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.specular.copy(e.specular), this.shininess = e.shininess, this.metal = e.metal, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissiveMap = e.emissiveMap, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
        },i.MeshDepthMaterial = function (e) {
            i.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        },i.MeshDepthMaterial.prototype = Object.create(i.Material.prototype),i.MeshDepthMaterial.prototype.constructor = i.MeshDepthMaterial,i.MeshDepthMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        },i.MeshNormalMaterial = function (e) {
            i.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
        },i.MeshNormalMaterial.prototype = Object.create(i.Material.prototype),i.MeshNormalMaterial.prototype.constructor = i.MeshNormalMaterial,i.MeshNormalMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        },i.MultiMaterial = function (e) {
            this.uuid = i.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
        },i.MultiMaterial.prototype = {
            constructor: i.MultiMaterial, toJSON: function () {
                for (var e = {
                    metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
                    uuid: this.uuid,
                    type: this.type,
                    materials: []
                }, t = 0, r = this.materials.length; r > t; t++)e.materials.push(this.materials[t].toJSON());
                return e.visible = this.visible, e
            }, clone: function () {
                for (var e = new this.constructor, t = 0; t < this.materials.length; t++)e.materials.push(this.materials[t].clone());
                return e.visible = this.visible, e
            }
        },i.MeshFaceMaterial = i.MultiMaterial,i.PointsMaterial = function (e) {
            i.Material.call(this), this.type = "PointsMaterial", this.color = new i.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = i.NoColors, this.fog = !0, this.setValues(e)
        },i.PointsMaterial.prototype = Object.create(i.Material.prototype),i.PointsMaterial.prototype.constructor = i.PointsMaterial,i.PointsMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        },i.PointCloudMaterial = function (e) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new i.PointsMaterial(e)
        },i.ParticleBasicMaterial = function (e) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new i.PointsMaterial(e)
        },i.ParticleSystemMaterial = function (e) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new i.PointsMaterial(e)
        },i.ShaderMaterial = function (e) {
            i.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = i.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = i.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.derivatives = !1, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
        },i.ShaderMaterial.prototype = Object.create(i.Material.prototype),i.ShaderMaterial.prototype.constructor = i.ShaderMaterial,i.ShaderMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = i.UniformsUtils.clone(e.uniforms), this.attributes = e.attributes, this.defines = e.defines, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.derivatives = e.derivatives, this
        },i.ShaderMaterial.prototype.toJSON = function (e) {
            var t = i.Material.prototype.toJSON.call(this, e);
            return t.uniforms = this.uniforms, t.attributes = this.attributes, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
        },i.RawShaderMaterial = function (e) {
            i.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
        },i.RawShaderMaterial.prototype = Object.create(i.ShaderMaterial.prototype),i.RawShaderMaterial.prototype.constructor = i.RawShaderMaterial,i.SpriteMaterial = function (e) {
            i.Material.call(this), this.type = "SpriteMaterial", this.color = new i.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
        },i.SpriteMaterial.prototype = Object.create(i.Material.prototype),i.SpriteMaterial.prototype.constructor = i.SpriteMaterial,i.SpriteMaterial.prototype.copy = function (e) {
            return i.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.fog = e.fog, this
        },i.Texture = function (e, t, r, n, o, a, s, u, c) {
            Object.defineProperty(this, "id", {value: i.TextureIdCount++}), this.uuid = i.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== e ? e : i.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : i.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : i.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : i.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : i.LinearFilter, this.minFilter = void 0 !== a ? a : i.LinearMipMapLinearFilter, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== s ? s : i.RGBAFormat, this.type = void 0 !== u ? u : i.UnsignedByteType, this.offset = new i.Vector2(0, 0), this.repeat = new i.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.version = 0, this.onUpdate = null
        },i.Texture.DEFAULT_IMAGE = void 0,i.Texture.DEFAULT_MAPPING = i.UVMapping,i.Texture.prototype = {
            constructor: i.Texture,
            set needsUpdate(e) {
                e === !0 && this.version++
            },
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (e) {
                return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this
            },
            toJSON: function (e) {
                function t(e) {
                    var t;
                    return void 0 !== e.toDataURL ? t = e : (t = document.createElement("canvas"), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)), t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
                }

                if (void 0 !== e.textures[this.uuid])return e.textures[this.uuid];
                var r = {
                    metadata: {version: 4.4, type: "Texture", generator: "Texture.toJSON"},
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy
                };
                if (void 0 !== this.image) {
                    var n = this.image;
                    void 0 === n.uuid && (n.uuid = i.Math.generateUUID()), void 0 === e.images[n.uuid] && (e.images[n.uuid] = {
                        uuid: n.uuid,
                        url: t(n)
                    }), r.image = n.uuid
                }
                return e.textures[this.uuid] = r, r
            },
            dispose: function () {
                this.dispatchEvent({type: "dispose"})
            },
            transformUv: function (e) {
                if (this.mapping === i.UVMapping) {
                    if (e.multiply(this.repeat), e.add(this.offset), e.x < 0 || e.x > 1)switch (this.wrapS) {
                        case i.RepeatWrapping:
                            e.x = e.x - Math.floor(e.x);
                            break;
                        case i.ClampToEdgeWrapping:
                            e.x = e.x < 0 ? 0 : 1;
                            break;
                        case i.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                    }
                    if (e.y < 0 || e.y > 1)switch (this.wrapT) {
                        case i.RepeatWrapping:
                            e.y = e.y - Math.floor(e.y);
                            break;
                        case i.ClampToEdgeWrapping:
                            e.y = e.y < 0 ? 0 : 1;
                            break;
                        case i.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                    }
                    this.flipY && (e.y = 1 - e.y)
                }
            }
        },i.EventDispatcher.prototype.apply(i.Texture.prototype),i.TextureIdCount = 0,i.CanvasTexture = function (e, t, r, n, o, a, s, u, c) {
            i.Texture.call(this, e, t, r, n, o, a, s, u, c), this.needsUpdate = !0
        },i.CanvasTexture.prototype = Object.create(i.Texture.prototype),i.CanvasTexture.prototype.constructor = i.CanvasTexture,i.CubeTexture = function (e, t, r, n, o, a, s, u, c) {
            t = void 0 !== t ? t : i.CubeReflectionMapping, i.Texture.call(this, e, t, r, n, o, a, s, u, c), this.images = e, this.flipY = !1
        },i.CubeTexture.prototype = Object.create(i.Texture.prototype),i.CubeTexture.prototype.constructor = i.CubeTexture,i.CubeTexture.prototype.copy = function (e) {
            return i.Texture.prototype.copy.call(this, e), this.images = e.images, this
        },i.CompressedTexture = function (e, t, r, n, o, a, s, u, c, l, h) {
            i.Texture.call(this, null, a, s, u, c, l, n, o, h), this.image = {
                width: t,
                height: r
            }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
        },i.CompressedTexture.prototype = Object.create(i.Texture.prototype),i.CompressedTexture.prototype.constructor = i.CompressedTexture,i.DataTexture = function (e, t, r, n, o, a, s, u, c, l, h) {
            i.Texture.call(this, null, a, s, u, c, l, n, o, h), this.image = {
                data: e,
                width: t,
                height: r
            }, this.magFilter = void 0 !== c ? c : i.NearestFilter, this.minFilter = void 0 !== l ? l : i.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
        },i.DataTexture.prototype = Object.create(i.Texture.prototype),i.DataTexture.prototype.constructor = i.DataTexture,i.VideoTexture = function (e, t, r, n, o, a, s, u, c) {
            function l() {
                requestAnimationFrame(l), e.readyState === e.HAVE_ENOUGH_DATA && (h.needsUpdate = !0)
            }

            i.Texture.call(this, e, t, r, n, o, a, s, u, c), this.generateMipmaps = !1;
            var h = this;
            l()
        },i.VideoTexture.prototype = Object.create(i.Texture.prototype),i.VideoTexture.prototype.constructor = i.VideoTexture,i.Group = function () {
            i.Object3D.call(this), this.type = "Group"
        },i.Group.prototype = Object.create(i.Object3D.prototype),i.Group.prototype.constructor = i.Group,i.Points = function (e, t) {
            i.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new i.Geometry, this.material = void 0 !== t ? t : new i.PointsMaterial({color: 16777215 * Math.random()})
        },i.Points.prototype = Object.create(i.Object3D.prototype),i.Points.prototype.constructor = i.Points,i.Points.prototype.raycast = function () {
            var e = new i.Matrix4, t = new i.Ray;
            return function (r, n) {
                function o(e, i) {
                    var o = t.distanceSqToPoint(e);
                    if (l > o) {
                        var s = t.closestPointToPoint(e);
                        s.applyMatrix4(a.matrixWorld);
                        var u = r.ray.origin.distanceTo(s);
                        if (u < r.near || u > r.far)return;
                        n.push({
                            distance: u,
                            distanceToRay: Math.sqrt(o),
                            point: s.clone(),
                            index: i,
                            face: null,
                            object: a
                        })
                    }
                }

                var a = this, s = a.geometry, u = r.params.Points.threshold;
                if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === s.boundingBox || t.isIntersectionBox(s.boundingBox) !== !1) {
                    var c = u / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = c * c, h = new i.Vector3;
                    if (s instanceof i.BufferGeometry) {
                        var p = s.index, d = s.attributes, f = d.position.array;
                        if (null !== p)for (var m = p.array, g = 0, v = m.length; v > g; g++) {
                            var y = m[g];
                            h.fromArray(f, 3 * y), o(h, y)
                        } else for (var g = 0, x = f.length / 3; x > g; g++)h.fromArray(f, 3 * g), o(h, g)
                    } else for (var b = s.vertices, g = 0, x = b.length; x > g; g++)o(b[g], g)
                }
            }
        }(),i.Points.prototype.clone = function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        },i.PointCloud = function (e, t) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new i.Points(e, t)
        },i.ParticleSystem = function (e, t) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new i.Points(e, t)
        },i.Line = function (e, t, r) {
            return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new i.LineSegments(e, t)) : (i.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new i.Geometry, void(this.material = void 0 !== t ? t : new i.LineBasicMaterial({color: 16777215 * Math.random()})))
        },i.Line.prototype = Object.create(i.Object3D.prototype),i.Line.prototype.constructor = i.Line,i.Line.prototype.raycast = function () {
            var e = new i.Matrix4, t = new i.Ray, r = new i.Sphere;
            return function (n, o) {
                var a = n.linePrecision, s = a * a, u = this.geometry;
                if (null === u.boundingSphere && u.computeBoundingSphere(), r.copy(u.boundingSphere), r.applyMatrix4(this.matrixWorld), n.ray.isIntersectionSphere(r) !== !1) {
                    e.getInverse(this.matrixWorld), t.copy(n.ray).applyMatrix4(e);
                    var c = new i.Vector3, l = new i.Vector3, h = new i.Vector3, p = new i.Vector3, d = this instanceof i.LineSegments ? 2 : 1;
                    if (u instanceof i.BufferGeometry) {
                        var f = u.index, m = u.attributes;
                        if (null !== f)for (var g = f.array, v = m.position.array, y = 0, x = g.length - 1; x > y; y += d) {
                            var b = g[y], w = g[y + 1];
                            c.fromArray(v, 3 * b), l.fromArray(v, 3 * w);
                            var S = t.distanceSqToSegment(c, l, p, h);
                            if (!(S > s)) {
                                p.applyMatrix4(this.matrixWorld);
                                var M = n.ray.origin.distanceTo(p);
                                M < n.near || M > n.far || o.push({
                                    distance: M,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        } else for (var v = m.position.array, y = 0, x = v.length / 3 - 1; x > y; y += d) {
                            c.fromArray(v, 3 * y), l.fromArray(v, 3 * y + 3);
                            var S = t.distanceSqToSegment(c, l, p, h);
                            if (!(S > s)) {
                                p.applyMatrix4(this.matrixWorld);
                                var M = n.ray.origin.distanceTo(p);
                                M < n.near || M > n.far || o.push({
                                    distance: M,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    } else if (u instanceof i.Geometry)for (var T = u.vertices, _ = T.length, y = 0; _ - 1 > y; y += d) {
                        var S = t.distanceSqToSegment(T[y], T[y + 1], p, h);
                        if (!(S > s)) {
                            p.applyMatrix4(this.matrixWorld);
                            var M = n.ray.origin.distanceTo(p);
                            M < n.near || M > n.far || o.push({
                                distance: M,
                                point: h.clone().applyMatrix4(this.matrixWorld),
                                index: y,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
                }
            }
        }(),i.Line.prototype.clone = function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        },i.LineStrip = 0,i.LinePieces = 1,i.LineSegments = function (e, t) {
            i.Line.call(this, e, t), this.type = "LineSegments"
        },i.LineSegments.prototype = Object.create(i.Line.prototype),i.LineSegments.prototype.constructor = i.LineSegments,i.Mesh = function (e, t) {
            i.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new i.Geometry, this.material = void 0 !== t ? t : new i.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
        },i.Mesh.prototype = Object.create(i.Object3D.prototype),i.Mesh.prototype.constructor = i.Mesh,i.Mesh.prototype.updateMorphTargets = function () {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1,
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
            }
        },i.Mesh.prototype.getMorphTargetIndexByName = function (e) {
            return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
        },i.Mesh.prototype.raycast = function () {
            function e(e, t, r, n, o, a, s) {
                return i.Triangle.barycoordFromPoint(e, t, r, n, g), o.multiplyScalar(g.x), a.multiplyScalar(g.y), s.multiplyScalar(g.z), o.add(a).add(s), o.clone()
            }

            function t(e, t, r, n, o, a, s) {
                var u, c = e.material;
                if (u = c.side === i.BackSide ? r.intersectTriangle(a, o, n, !0, s) : r.intersectTriangle(n, o, a, c.side !== i.DoubleSide, s), null === u)return null;
                y.copy(s), y.applyMatrix4(e.matrixWorld);
                var l = t.ray.origin.distanceTo(y);
                return l < t.near || l > t.far ? null : {distance: l, point: y.clone(), object: e}
            }

            function r(r, n, o, a, l, h, p, g) {
                s.fromArray(a, 3 * h), u.fromArray(a, 3 * p), c.fromArray(a, 3 * g);
                var y = t(r, n, o, s, u, c, v);
                return y && (l && (d.fromArray(l, 2 * h), f.fromArray(l, 2 * p), m.fromArray(l, 2 * g), y.uv = e(v, s, u, c, d, f, m)), y.face = new i.Face3(h, p, g, i.Triangle.normal(s, u, c)), y.faceIndex = h), y
            }

            var n = new i.Matrix4, o = new i.Ray, a = new i.Sphere, s = new i.Vector3, u = new i.Vector3, c = new i.Vector3, l = new i.Vector3, h = new i.Vector3, p = new i.Vector3, d = new i.Vector2, f = new i.Vector2, m = new i.Vector2, g = new i.Vector3, v = new i.Vector3, y = new i.Vector3;
            return function (g, y) {
                var x = this.geometry, b = this.material;
                if (void 0 !== b) {
                    null === x.boundingSphere && x.computeBoundingSphere();
                    var w = this.matrixWorld;
                    if (a.copy(x.boundingSphere), a.applyMatrix4(w), g.ray.isIntersectionSphere(a) !== !1 && (n.getInverse(w), o.copy(g.ray).applyMatrix4(n), null === x.boundingBox || o.isIntersectionBox(x.boundingBox) !== !1)) {
                        var S, M;
                        if (x instanceof i.BufferGeometry) {
                            var T, _, E, C = x.index, A = x.attributes, L = A.position.array;
                            if (void 0 !== A.uv && (S = A.uv.array), null !== C)for (var P = C.array, k = 0, D = P.length; D > k; k += 3)T = P[k], _ = P[k + 1], E = P[k + 2], M = r(this, g, o, L, S, T, _, E), M && (M.faceIndex = Math.floor(k / 3), y.push(M)); else for (var k = 0, D = L.length; D > k; k += 9)T = k / 3, _ = T + 1, E = T + 2, M = r(this, g, o, L, S, T, _, E), M && (M.index = T, y.push(M))
                        } else if (x instanceof i.Geometry) {
                            var R, O, F, V = b instanceof i.MeshFaceMaterial, N = V === !0 ? b.materials : null, B = x.vertices, I = x.faces, U = x.faceVertexUvs[0];
                            U.length > 0 && (S = U);
                            for (var z = 0, G = I.length; G > z; z++) {
                                var j = I[z], H = V === !0 ? N[j.materialIndex] : b;
                                if (void 0 !== H) {
                                    if (R = B[j.a], O = B[j.b], F = B[j.c], H.morphTargets === !0) {
                                        var W = x.morphTargets, X = this.morphTargetInfluences;
                                        s.set(0, 0, 0), u.set(0, 0, 0), c.set(0, 0, 0);
                                        for (var q = 0, Y = W.length; Y > q; q++) {
                                            var K = X[q];
                                            if (0 !== K) {
                                                var $ = W[q].vertices;
                                                s.addScaledVector(l.subVectors($[j.a], R), K), u.addScaledVector(h.subVectors($[j.b], O), K), c.addScaledVector(p.subVectors($[j.c], F), K)
                                            }
                                        }
                                        s.add(R), u.add(O), c.add(F), R = s, O = u, F = c
                                    }
                                    if (M = t(this, g, o, R, O, F, v)) {
                                        if (S) {
                                            var Q = S[z];
                                            d.copy(Q[0]), f.copy(Q[1]), m.copy(Q[2]), M.uv = e(v, R, O, F, d, f, m)
                                        }
                                        M.face = j, M.faceIndex = z, y.push(M)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }(),i.Mesh.prototype.clone = function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        },i.Bone = function (e) {
            i.Object3D.call(this), this.type = "Bone", this.skin = e
        },i.Bone.prototype = Object.create(i.Object3D.prototype),i.Bone.prototype.constructor = i.Bone,i.Bone.prototype.copy = function (e) {
            return i.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
        },i.Skeleton = function (e, t, r) {
            if (this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new i.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
                var n = Math.sqrt(4 * this.bones.length);
                n = i.Math.nextPowerOfTwo(Math.ceil(n)), n = Math.max(n, 4), this.boneTextureWidth = n, this.boneTextureHeight = n, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new i.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, i.RGBAFormat, i.FloatType)
            } else this.boneMatrices = new Float32Array(16 * this.bones.length);
            if (void 0 === t)this.calculateInverses(); else if (this.bones.length === t.length)this.boneInverses = t.slice(0); else {
                console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
                for (var o = 0, a = this.bones.length; a > o; o++)this.boneInverses.push(new i.Matrix4)
            }
        },i.Skeleton.prototype.calculateInverses = function () {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; t > e; e++) {
                var r = new i.Matrix4;
                this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r)
            }
        },i.Skeleton.prototype.pose = function () {
            for (var e, t = 0, r = this.bones.length; r > t; t++)e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (var t = 0, r = this.bones.length; r > t; t++)e = this.bones[t], e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        },i.Skeleton.prototype.update = function () {
            var e = new i.Matrix4;
            return function () {
                for (var t = 0, r = this.bones.length; r > t; t++) {
                    var n = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
                    e.multiplyMatrices(n, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),i.Skeleton.prototype.clone = function () {
            return new i.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
        },i.SkinnedMesh = function (e, t, r) {
            i.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new i.Matrix4, this.bindMatrixInverse = new i.Matrix4;
            var n = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (var o, a, s = 0, u = this.geometry.bones.length; u > s; ++s)a = this.geometry.bones[s], o = new i.Bone(this), n.push(o), o.name = a.name, o.position.fromArray(a.pos), o.quaternion.fromArray(a.rotq), void 0 !== a.scl && o.scale.fromArray(a.scl);
                for (var s = 0, u = this.geometry.bones.length; u > s; ++s)a = this.geometry.bones[s], -1 !== a.parent && null !== a.parent ? n[a.parent].add(n[s]) : this.add(n[s])
            }
            this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new i.Skeleton(n, void 0, r), this.matrixWorld)
        },i.SkinnedMesh.prototype = Object.create(i.Mesh.prototype),i.SkinnedMesh.prototype.constructor = i.SkinnedMesh,i.SkinnedMesh.prototype.bind = function (e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        },i.SkinnedMesh.prototype.pose = function () {
            this.skeleton.pose()
        },i.SkinnedMesh.prototype.normalizeSkinWeights = function () {
            if (this.geometry instanceof i.Geometry)for (var e = 0; e < this.geometry.skinIndices.length; e++) {
                var t = this.geometry.skinWeights[e], r = 1 / t.lengthManhattan();
                r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
            }
        },i.SkinnedMesh.prototype.updateMatrixWorld = function (e) {
            i.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },i.SkinnedMesh.prototype.clone = function () {
            return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
        },i.LOD = function () {
            i.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                }, objects: {
                    get: function () {
                        return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
                    }
                }
            })
        },i.LOD.prototype = Object.create(i.Object3D.prototype),i.LOD.prototype.constructor = i.LOD,i.LOD.prototype.addLevel = function (e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var r = this.levels, n = 0; n < r.length && !(t < r[n].distance); n++);
            r.splice(n, 0, {distance: t, object: e}), this.add(e)
        },i.LOD.prototype.getObjectForDistance = function (e) {
            for (var t = this.levels, r = 1, n = t.length; n > r && !(e < t[r].distance); r++);
            return t[r - 1].object
        },i.LOD.prototype.raycast = function () {
            var e = new i.Vector3;
            return function (t, r) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(n).raycast(t, r)
            }
        }(),i.LOD.prototype.update = function () {
            var e = new i.Vector3, t = new i.Vector3;
            return function (r) {
                var n = this.levels;
                if (n.length > 1) {
                    e.setFromMatrixPosition(r.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                    var i = e.distanceTo(t);
                    n[0].object.visible = !0;
                    for (var o = 1, a = n.length; a > o && i >= n[o].distance; o++)n[o - 1].object.visible = !1, n[o].object.visible = !0;
                    for (; a > o; o++)n[o].object.visible = !1
                }
            }
        }(),i.LOD.prototype.copy = function (e) {
            i.Object3D.prototype.copy.call(this, e, !1);
            for (var t = e.levels, r = 0, n = t.length; n > r; r++) {
                var o = t[r];
                this.addLevel(o.object.clone(), o.distance)
            }
            return this
        },i.LOD.prototype.toJSON = function (e) {
            var t = i.Object3D.prototype.toJSON.call(this, e);
            t.object.levels = [];
            for (var r = this.levels, n = 0, o = r.length; o > n; n++) {
                var a = r[n];
                t.object.levels.push({object: a.object.uuid, distance: a.distance})
            }
            return t
        },i.Sprite = function () {
            var e = new Uint16Array([0, 1, 2, 0, 2, 3]), t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]), r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), n = new i.BufferGeometry;
            return n.setIndex(new i.BufferAttribute(e, 1)), n.addAttribute("position", new i.BufferAttribute(t, 3)), n.addAttribute("uv", new i.BufferAttribute(r, 2)), function (e) {
                i.Object3D.call(this), this.type = "Sprite", this.geometry = n, this.material = void 0 !== e ? e : new i.SpriteMaterial
            }
        }(),i.Sprite.prototype = Object.create(i.Object3D.prototype),i.Sprite.prototype.constructor = i.Sprite,i.Sprite.prototype.raycast = function () {
            var e = new i.Vector3;
            return function (t, r) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.distanceSqToPoint(e), i = this.scale.x * this.scale.y;
                n > i || r.push({distance: Math.sqrt(n), point: this.position, face: null, object: this})
            }
        }(),i.Sprite.prototype.clone = function () {
            return new this.constructor(this.material).copy(this)
        },i.Particle = i.Sprite,i.LensFlare = function (e, t, r, n, o) {
            i.Object3D.call(this), this.lensFlares = [], this.positionScreen = new i.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, n, o)
        },i.LensFlare.prototype = Object.create(i.Object3D.prototype),i.LensFlare.prototype.constructor = i.LensFlare,i.LensFlare.prototype.add = function (e, t, r, n, o, a) {
            void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === a && (a = 1), void 0 === o && (o = new i.Color(16777215)), void 0 === n && (n = i.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
                texture: e,
                size: t,
                distance: r,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: o,
                blending: n
            })
        },i.LensFlare.prototype.updateLensFlares = function () {
            var e, t, r = this.lensFlares.length, n = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
            for (e = 0; r > e; e++)t = this.lensFlares[e], t.x = this.positionScreen.x + n * t.distance, t.y = this.positionScreen.y + i * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
        },i.LensFlare.prototype.copy = function (e) {
            i.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, r = e.lensFlares.length; r > t; t++)this.lensFlares.push(e.lensFlares[t]);
            return this
        },i.Scene = function () {
            i.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
        },i.Scene.prototype = Object.create(i.Object3D.prototype),i.Scene.prototype.constructor = i.Scene,i.Scene.prototype.copy = function (e) {
            return i.Object3D.prototype.copy.call(this, e), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
        },i.Fog = function (e, t, r) {
            this.name = "", this.color = new i.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
        },i.Fog.prototype.clone = function () {
            return new i.Fog(this.color.getHex(), this.near, this.far)
        },i.FogExp2 = function (e, t) {
            this.name = "", this.color = new i.Color(e), this.density = void 0 !== t ? t : 25e-5
        },i.FogExp2.prototype.clone = function () {
            return new i.FogExp2(this.color.getHex(), this.density)
        },i.ShaderChunk = {},i.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",i.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n",i.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",i.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	totalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n",i.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif",i.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",i.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",i.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n",i.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif",i.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",i.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",i.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif",i.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n	if ( decayExponent > 0.0 ) {\n\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\n	float fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\n	return ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( lightDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n	#ifdef GAMMA_INPUT\n\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n	#ifdef GAMMA_OUTPUT\n\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n",i.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",i.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n",i.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n",i.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n	totalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n",i.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n",i.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n",i.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n",i.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n",i.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n",i.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif",i.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif",i.ShaderChunk.hemilight_fragment = "#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalAmbientLight += lightColor;\n\n	}\n\n#endif\n\n",i.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	totalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n",i.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif",i.ShaderChunk.lights_lambert_pars_vertex = "#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n",i.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n\n			float dotProduct = dot( normal, lightDir );\n\n			vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			float hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n",i.ShaderChunk.lights_phong_fragment = "vec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lightPosition = pointLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n\n			float cosineTerm = saturate( dot( normal, lightDir ) );\n\n			totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n			vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n			totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * cosineTerm;\n\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n	}\n\n#endif\n",i.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n",i.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\n#endif\n",i.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif\n",i.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n",i.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",i.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n",i.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",i.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif",i.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif\n",i.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",i.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n",i.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n",i.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n",i.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif",i.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n",i.ShaderChunk.normal_phong_fragment = "#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n",
        i.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",i.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",i.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	for ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		float texelSizeY =  1.0 / shadowMapSize[ i ].y;\n\n		float shadow = 0.0;\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n		bool isPointLight = shadowDarkness[ i ] < 0.0;\n\n		if ( isPointLight ) {\n\n			float realShadowDarkness = abs( shadowDarkness[ i ] );\n\n			vec3 lightToPosition = vShadowCoord[ i ].xyz;\n\n	#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n			vec3 bd3D = normalize( lightToPosition );\n			float dp = length( lightToPosition );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\n	#if defined( SHADOWMAP_TYPE_PCF )\n			const float Dr = 1.25;\n	#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			const float Dr = 2.25;\n	#endif\n\n			float os = Dr *  2.0 * texelSizeY;\n\n			const vec3 Gsd = vec3( - 1, 0, 1 );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			shadow *= realShadowDarkness * ( 1.0 / 21.0 );\n\n	#else \n			vec3 bd3D = normalize( lightToPosition );\n			float dp = length( lightToPosition );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			shadow *= realShadowDarkness;\n\n	#endif\n\n		} else {\n\n#endif \n			float texelSizeX =  1.0 / shadowMapSize[ i ].x;\n\n			vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\n			bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n			bool inFrustum = all( inFrustumVec );\n\n			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n			bool frustumTest = all( frustumTestVec );\n\n			if ( frustumTest ) {\n\n	#if defined( SHADOWMAP_TYPE_PCF )\n\n\n				/*\n					for ( float y = -1.25; y <= 1.25; y += 1.25 )\n						for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n							vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n							float fDepth = unpackDepth( rgbaDepth );\n							if ( fDepth < shadowCoord.z )\n								shadow += 1.0;\n					}\n					shadow /= 9.0;\n				*/\n\n				shadowCoord.z += shadowBias[ i ];\n\n				const float ShadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = texelSizeX;\n				float yPixelOffset = texelSizeY;\n\n				float dx0 = - 1.25 * xPixelOffset;\n				float dy0 = - 1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				float fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				shadow *= shadowDarkness[ i ];\n\n	#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\n				shadowCoord.z += shadowBias[ i ];\n\n				float xPixelOffset = texelSizeX;\n				float yPixelOffset = texelSizeY;\n\n				float dx0 = - 1.0 * xPixelOffset;\n				float dy0 = - 1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[ 0 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[ 0 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[ 0 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[ 1 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[ 1 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[ 1 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[ 2 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[ 2 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[ 2 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[ 0 ] = vec3( lessThan( depthKernel[ 0 ], shadowZ ) );\n				shadowKernel[ 0 ] *= vec3( 0.25 );\n\n				shadowKernel[ 1 ] = vec3( lessThan( depthKernel[ 1 ], shadowZ ) );\n				shadowKernel[ 1 ] *= vec3( 0.25 );\n\n				shadowKernel[ 2 ] = vec3( lessThan( depthKernel[ 2 ], shadowZ ) );\n				shadowKernel[ 2 ] *= vec3( 0.25 );\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[ i ].xy );\n\n				shadowKernel[ 0 ] = mix( shadowKernel[ 1 ], shadowKernel[ 0 ], fractionalCoord.x );\n				shadowKernel[ 1 ] = mix( shadowKernel[ 2 ], shadowKernel[ 1 ], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[ 0 ][ 1 ], shadowKernel[ 0 ][ 0 ], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[ 0 ][ 2 ], shadowKernel[ 0 ][ 1 ], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[ 1 ][ 1 ], shadowKernel[ 1 ][ 0 ], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[ 1 ][ 2 ], shadowKernel[ 1 ][ 1 ], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) ) * shadowDarkness[ i ];\n\n	#else \n				shadowCoord.z += shadowBias[ i ];\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n					shadow = shadowDarkness[ i ];\n\n	#endif\n\n			}\n\n#ifdef SHADOWMAP_DEBUG\n\n			if ( inFrustum ) {\n\n				if ( i == 0 ) {\n\n					outgoingLight *= vec3( 1.0, 0.5, 0.0 );\n\n				} else if ( i == 1 ) {\n\n					outgoingLight *= vec3( 0.0, 1.0, 0.8 );\n\n				} else {\n\n					outgoingLight *= vec3( 0.0, 0.5, 1.0 );\n\n				}\n\n			}\n\n#endif\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n		}\n\n#endif\n\n		shadowMask = shadowMask * vec3( 1.0 - shadow );\n\n	}\n\n#endif\n",i.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n	#if defined(POINT_LIGHT_SHADOWS)\n\n\n		void adjustShadowValue1K( const float testDepth, const vec4 textureData, const float bias, inout float shadowValue ) {\n\n			const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n			if ( testDepth >= dot( textureData, bitSh ) * 1000.0 + bias )\n				shadowValue += 1.0;\n\n		}\n\n\n		vec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\n			vec3 absV = abs( v );\n\n\n			float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n			absV *= scaleToCube;\n\n\n			v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\n\n			vec2 planar = v.xy;\n\n			float almostATexel = 1.5 * texelSizeY;\n			float almostOne = 1.0 - almostATexel;\n\n			if ( absV.z >= almostOne ) {\n\n				if ( v.z > 0.0 )\n					planar.x = 4.0 - v.x;\n\n			} else if ( absV.x >= almostOne ) {\n\n				float signX = sign( v.x );\n				planar.x = v.z * signX + 2.0 * signX;\n\n			} else if ( absV.y >= almostOne ) {\n\n				float signY = sign( v.y );\n				planar.x = v.x + 2.0 * signY + 2.0;\n				planar.y = v.z * signY - 2.0;\n\n			}\n\n\n			return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n		}\n\n	#endif\n\n#endif\n",i.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n#endif",i.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n			vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif",i.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",i.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",i.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",i.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n",i.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",i.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",i.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif",i.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif",i.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif",i.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n\n#endif",i.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",i.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",i.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n",i.UniformsUtils = {
            merge: function (e) {
                for (var t = {}, r = 0; r < e.length; r++) {
                    var n = this.clone(e[r]);
                    for (var i in n)t[i] = n[i]
                }
                return t
            }, clone: function (e) {
                var t = {};
                for (var r in e) {
                    t[r] = {};
                    for (var n in e[r]) {
                        var o = e[r][n];
                        o instanceof i.Color || o instanceof i.Vector2 || o instanceof i.Vector3 || o instanceof i.Vector4 || o instanceof i.Matrix3 || o instanceof i.Matrix4 || o instanceof i.Texture ? t[r][n] = o.clone() : Array.isArray(o) ? t[r][n] = o.slice() : t[r][n] = o
                    }
                }
                return t
            }
        },i.UniformsLib = {
            common: {
                diffuse: {type: "c", value: new i.Color(15658734)},
                opacity: {type: "f", value: 1},
                map: {type: "t", value: null},
                offsetRepeat: {type: "v4", value: new i.Vector4(0, 0, 1, 1)},
                specularMap: {type: "t", value: null},
                alphaMap: {type: "t", value: null},
                envMap: {type: "t", value: null},
                flipEnvMap: {type: "f", value: -1},
                reflectivity: {type: "f", value: 1},
                refractionRatio: {type: "f", value: .98}
            },
            aomap: {aoMap: {type: "t", value: null}, aoMapIntensity: {type: "f", value: 1}},
            lightmap: {lightMap: {type: "t", value: null}, lightMapIntensity: {type: "f", value: 1}},
            emissivemap: {emissiveMap: {type: "t", value: null}},
            bumpmap: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}},
            normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new i.Vector2(1, 1)}},
            displacementmap: {
                displacementMap: {type: "t", value: null},
                displacementScale: {type: "f", value: 1},
                displacementBias: {type: "f", value: 0}
            },
            fog: {
                fogDensity: {type: "f", value: 25e-5},
                fogNear: {type: "f", value: 1},
                fogFar: {type: "f", value: 2e3},
                fogColor: {type: "c", value: new i.Color(16777215)}
            },
            lights: {
                ambientLightColor: {type: "fv", value: []},
                directionalLightDirection: {type: "fv", value: []},
                directionalLightColor: {type: "fv", value: []},
                hemisphereLightDirection: {type: "fv", value: []},
                hemisphereLightSkyColor: {type: "fv", value: []},
                hemisphereLightGroundColor: {type: "fv", value: []},
                pointLightColor: {type: "fv", value: []},
                pointLightPosition: {type: "fv", value: []},
                pointLightDistance: {type: "fv1", value: []},
                pointLightDecay: {type: "fv1", value: []},
                spotLightColor: {type: "fv", value: []},
                spotLightPosition: {type: "fv", value: []},
                spotLightDirection: {type: "fv", value: []},
                spotLightDistance: {type: "fv1", value: []},
                spotLightAngleCos: {type: "fv1", value: []},
                spotLightExponent: {type: "fv1", value: []},
                spotLightDecay: {type: "fv1", value: []}
            },
            points: {
                psColor: {type: "c", value: new i.Color(15658734)},
                opacity: {type: "f", value: 1},
                size: {type: "f", value: 1},
                scale: {type: "f", value: 1},
                map: {type: "t", value: null},
                offsetRepeat: {type: "v4", value: new i.Vector4(0, 0, 1, 1)},
                fogDensity: {type: "f", value: 25e-5},
                fogNear: {type: "f", value: 1},
                fogFar: {type: "f", value: 2e3},
                fogColor: {type: "c", value: new i.Color(16777215)}
            },
            shadowmap: {
                shadowMap: {type: "tv", value: []},
                shadowMapSize: {type: "v2v", value: []},
                shadowBias: {type: "fv1", value: []},
                shadowDarkness: {type: "fv1", value: []},
                shadowMatrix: {type: "m4v", value: []}
            }
        },i.ShaderLib = {
            basic: {
                uniforms: i.UniformsUtils.merge([i.UniformsLib.common, i.UniformsLib.aomap, i.UniformsLib.fog, i.UniformsLib.shadowmap]),
                vertexShader: [i.ShaderChunk.common, i.ShaderChunk.uv_pars_vertex, i.ShaderChunk.uv2_pars_vertex, i.ShaderChunk.envmap_pars_vertex, i.ShaderChunk.color_pars_vertex, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.skinning_pars_vertex, i.ShaderChunk.shadowmap_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.uv_vertex, i.ShaderChunk.uv2_vertex, i.ShaderChunk.color_vertex, i.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", i.ShaderChunk.beginnormal_vertex, i.ShaderChunk.morphnormal_vertex, i.ShaderChunk.skinnormal_vertex, i.ShaderChunk.defaultnormal_vertex, "	#endif", i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.skinning_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, i.ShaderChunk.worldpos_vertex, i.ShaderChunk.envmap_vertex, i.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", i.ShaderChunk.common, i.ShaderChunk.color_pars_fragment, i.ShaderChunk.uv_pars_fragment, i.ShaderChunk.uv2_pars_fragment, i.ShaderChunk.map_pars_fragment, i.ShaderChunk.alphamap_pars_fragment, i.ShaderChunk.aomap_pars_fragment, i.ShaderChunk.envmap_pars_fragment, i.ShaderChunk.fog_pars_fragment, i.ShaderChunk.shadowmap_pars_fragment, i.ShaderChunk.specularmap_pars_fragment, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = vec3( 1.0 );", "	vec3 shadowMask = vec3( 1.0 );", i.ShaderChunk.logdepthbuf_fragment, i.ShaderChunk.map_fragment, i.ShaderChunk.color_fragment, i.ShaderChunk.alphamap_fragment, i.ShaderChunk.alphatest_fragment, i.ShaderChunk.specularmap_fragment, i.ShaderChunk.aomap_fragment, i.ShaderChunk.shadowmap_fragment, "	outgoingLight = diffuseColor.rgb * totalAmbientLight * shadowMask;", i.ShaderChunk.envmap_fragment, i.ShaderChunk.linear_to_gamma_fragment, i.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            lambert: {
                uniforms: i.UniformsUtils.merge([i.UniformsLib.common, i.UniformsLib.fog, i.UniformsLib.lights, i.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new i.Color(0)
                    }
                }]),
                vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", i.ShaderChunk.common, i.ShaderChunk.uv_pars_vertex, i.ShaderChunk.uv2_pars_vertex, i.ShaderChunk.envmap_pars_vertex, i.ShaderChunk.lights_lambert_pars_vertex, i.ShaderChunk.color_pars_vertex, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.skinning_pars_vertex, i.ShaderChunk.shadowmap_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.uv_vertex, i.ShaderChunk.uv2_vertex, i.ShaderChunk.color_vertex, i.ShaderChunk.beginnormal_vertex, i.ShaderChunk.morphnormal_vertex, i.ShaderChunk.skinbase_vertex, i.ShaderChunk.skinnormal_vertex, i.ShaderChunk.defaultnormal_vertex, i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.skinning_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, i.ShaderChunk.worldpos_vertex, i.ShaderChunk.envmap_vertex, i.ShaderChunk.lights_lambert_vertex, i.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float opacity;", "uniform vec3 ambientLightColor;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", i.ShaderChunk.common, i.ShaderChunk.color_pars_fragment, i.ShaderChunk.uv_pars_fragment, i.ShaderChunk.uv2_pars_fragment, i.ShaderChunk.map_pars_fragment, i.ShaderChunk.alphamap_pars_fragment, i.ShaderChunk.envmap_pars_fragment, i.ShaderChunk.fog_pars_fragment, i.ShaderChunk.shadowmap_pars_fragment, i.ShaderChunk.specularmap_pars_fragment, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = ambientLightColor;", "	vec3 shadowMask = vec3( 1.0 );", i.ShaderChunk.logdepthbuf_fragment, i.ShaderChunk.map_fragment, i.ShaderChunk.color_fragment, i.ShaderChunk.alphamap_fragment, i.ShaderChunk.alphatest_fragment, i.ShaderChunk.specularmap_fragment, i.ShaderChunk.shadowmap_fragment, "	#ifdef DOUBLE_SIDED", "		if ( gl_FrontFacing )", "			outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;", "		else", "			outgoingLight += diffuseColor.rgb * ( vLightBack * shadowMask + totalAmbientLight ) + emissive;", "	#else", "		outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;", "	#endif", i.ShaderChunk.envmap_fragment, i.ShaderChunk.linear_to_gamma_fragment, i.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            phong: {
                uniforms: i.UniformsUtils.merge([i.UniformsLib.common, i.UniformsLib.aomap, i.UniformsLib.lightmap, i.UniformsLib.emissivemap, i.UniformsLib.bumpmap, i.UniformsLib.normalmap, i.UniformsLib.displacementmap, i.UniformsLib.fog, i.UniformsLib.lights, i.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new i.Color(0)
                    }, specular: {type: "c", value: new i.Color(1118481)}, shininess: {type: "f", value: 30}
                }]),
                vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", i.ShaderChunk.common, i.ShaderChunk.uv_pars_vertex, i.ShaderChunk.uv2_pars_vertex, i.ShaderChunk.displacementmap_pars_vertex, i.ShaderChunk.envmap_pars_vertex, i.ShaderChunk.lights_phong_pars_vertex, i.ShaderChunk.color_pars_vertex, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.skinning_pars_vertex, i.ShaderChunk.shadowmap_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.uv_vertex, i.ShaderChunk.uv2_vertex, i.ShaderChunk.color_vertex, i.ShaderChunk.beginnormal_vertex, i.ShaderChunk.morphnormal_vertex, i.ShaderChunk.skinbase_vertex, i.ShaderChunk.skinnormal_vertex, i.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", i.ShaderChunk.begin_vertex, i.ShaderChunk.displacementmap_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.skinning_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", i.ShaderChunk.worldpos_vertex, i.ShaderChunk.envmap_vertex, i.ShaderChunk.lights_phong_vertex, i.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", i.ShaderChunk.common, i.ShaderChunk.color_pars_fragment, i.ShaderChunk.uv_pars_fragment, i.ShaderChunk.uv2_pars_fragment, i.ShaderChunk.map_pars_fragment, i.ShaderChunk.alphamap_pars_fragment, i.ShaderChunk.aomap_pars_fragment, i.ShaderChunk.lightmap_pars_fragment, i.ShaderChunk.emissivemap_pars_fragment, i.ShaderChunk.envmap_pars_fragment, i.ShaderChunk.fog_pars_fragment, i.ShaderChunk.lights_phong_pars_fragment, i.ShaderChunk.shadowmap_pars_fragment, i.ShaderChunk.bumpmap_pars_fragment, i.ShaderChunk.normalmap_pars_fragment, i.ShaderChunk.specularmap_pars_fragment, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = ambientLightColor;", "	vec3 totalEmissiveLight = emissive;", "	vec3 shadowMask = vec3( 1.0 );", i.ShaderChunk.logdepthbuf_fragment, i.ShaderChunk.map_fragment, i.ShaderChunk.color_fragment, i.ShaderChunk.alphamap_fragment, i.ShaderChunk.alphatest_fragment, i.ShaderChunk.specularmap_fragment, i.ShaderChunk.normal_phong_fragment, i.ShaderChunk.lightmap_fragment, i.ShaderChunk.hemilight_fragment, i.ShaderChunk.aomap_fragment, i.ShaderChunk.emissivemap_fragment, i.ShaderChunk.lights_phong_fragment, i.ShaderChunk.shadowmap_fragment, "totalDiffuseLight *= shadowMask;", "totalSpecularLight *= shadowMask;", "#ifdef METAL", "	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;", "#else", "	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;", "#endif", i.ShaderChunk.envmap_fragment, i.ShaderChunk.linear_to_gamma_fragment, i.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            points: {
                uniforms: i.UniformsUtils.merge([i.UniformsLib.points, i.UniformsLib.shadowmap]),
                vertexShader: ["uniform float size;", "uniform float scale;", i.ShaderChunk.common, i.ShaderChunk.color_pars_vertex, i.ShaderChunk.shadowmap_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "	#else", "		gl_PointSize = size;", "	#endif", "	gl_Position = projectionMatrix * mvPosition;", i.ShaderChunk.logdepthbuf_vertex, i.ShaderChunk.worldpos_vertex, i.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", i.ShaderChunk.common, i.ShaderChunk.color_pars_fragment, i.ShaderChunk.map_particle_pars_fragment, i.ShaderChunk.fog_pars_fragment, i.ShaderChunk.shadowmap_pars_fragment, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( psColor, opacity );", "	vec3 shadowMask = vec3( 1.0 );", i.ShaderChunk.logdepthbuf_fragment, i.ShaderChunk.map_particle_fragment, i.ShaderChunk.color_fragment, i.ShaderChunk.alphatest_fragment, i.ShaderChunk.shadowmap_fragment, "	outgoingLight = diffuseColor.rgb * shadowMask;", i.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            dashed: {
                uniforms: i.UniformsUtils.merge([i.UniformsLib.common, i.UniformsLib.fog, {
                    scale: {
                        type: "f",
                        value: 1
                    }, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}
                }]),
                vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", i.ShaderChunk.common, i.ShaderChunk.color_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", i.ShaderChunk.common, i.ShaderChunk.color_pars_fragment, i.ShaderChunk.fog_pars_fragment, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", i.ShaderChunk.logdepthbuf_fragment, i.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", i.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            depth: {
                uniforms: {
                    mNear: {type: "f", value: 1},
                    mFar: {type: "f", value: 2e3},
                    opacity: {type: "f", value: 1}
                },
                vertexShader: [i.ShaderChunk.common, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", i.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
            },
            normal: {
                uniforms: {opacity: {type: "f", value: 1}},
                vertexShader: ["varying vec3 vNormal;", i.ShaderChunk.common, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", i.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            cube: {
                uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
                vertexShader: ["varying vec3 vWorldPosition;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", i.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            equirect: {
                uniforms: {tEquirect: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
                vertexShader: ["varying vec3 vWorldPosition;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );", "sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", i.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            depthRGBA: {
                uniforms: {},
                vertexShader: [i.ShaderChunk.common, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.skinning_pars_vertex, i.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", i.ShaderChunk.skinbase_vertex, i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.skinning_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: [i.ShaderChunk.common, i.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", i.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
            },
            distanceRGBA: {
                uniforms: {lightPos: {type: "v3", value: new i.Vector3(0, 0, 0)}},
                vertexShader: ["varying vec4 vWorldPosition;", i.ShaderChunk.common, i.ShaderChunk.morphtarget_pars_vertex, i.ShaderChunk.skinning_pars_vertex, "void main() {", i.ShaderChunk.skinbase_vertex, i.ShaderChunk.begin_vertex, i.ShaderChunk.morphtarget_vertex, i.ShaderChunk.skinning_vertex, i.ShaderChunk.project_vertex, i.ShaderChunk.worldpos_vertex, "vWorldPosition = worldPosition;", "}"].join("\n"),
                fragmentShader: ["uniform vec3 lightPos;", "varying vec4 vWorldPosition;", i.ShaderChunk.common, "vec4 pack1K ( float depth ) {", "   depth /= 1000.0;", "   const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = fract( depth * bitSh );", "	res -= res.xxyz * bitMsk;", "	return res; ", "}", "float unpack1K ( vec4 color ) {", "	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "	return dot( color, bitSh ) * 1000.0;", "}", "void main () {", "	gl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );", "}"].join("\n")
            }
        },i.WebGLRenderer = function (e) {
            function t(e, t, r, n) {
                ae === !0 && (e *= n, t *= n, r *= n), Ie.clearColor(e, t, r, n)
            }

            function r() {
                He.init(), Ie.viewport(_e, Ee, Ce, Ae), t(ue.r, ue.g, ue.b, ce)
            }

            function n() {
                xe = null, Me = null, Se = "", we = -1, Fe = !0, He.reset()
            }

            function o(e) {
                e.preventDefault(), n(), r(), We.clear()
            }

            function a(e) {
                var t = e.target;
                t.removeEventListener("dispose", a), c(t), Ne.textures--
            }

            function s(e) {
                var t = e.target;
                t.removeEventListener("dispose", s), l(t), Ne.textures--
            }

            function u(e) {
                var t = e.target;
                t.removeEventListener("dispose", u), h(t)
            }

            function c(e) {
                var t = We.get(e);
                if (e.image && t.__image__webglTextureCube)Ie.deleteTexture(t.__image__webglTextureCube); else {
                    if (void 0 === t.__webglInit)return;
                    Ie.deleteTexture(t.__webglTexture)
                }
                We["delete"](e)
            }

            function l(e) {
                var t = We.get(e), r = We.get(e.texture);
                if (e && void 0 !== r.__webglTexture) {
                    if (Ie.deleteTexture(r.__webglTexture), e instanceof i.WebGLRenderTargetCube)for (var n = 0; 6 > n; n++)Ie.deleteFramebuffer(t.__webglFramebuffer[n]), Ie.deleteRenderbuffer(t.__webglRenderbuffer[n]); else Ie.deleteFramebuffer(t.__webglFramebuffer), Ie.deleteRenderbuffer(t.__webglRenderbuffer);
                    We["delete"](e.texture), We["delete"](e)
                }
            }

            function h(e) {
                p(e), We["delete"](e)
            }

            function p(e) {
                var t = We.get(e).program;
                e.program = void 0, void 0 !== t && qe.releaseProgram(t)
            }

            function d(e, t, r, n) {
                var o;
                if (r instanceof i.InstancedBufferGeometry && (o = Ge.get("ANGLE_instanced_arrays"), null === o))return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === n && (n = 0), He.initAttributes();
                var a = r.attributes, s = t.getAttributes(), u = e.defaultAttributeValues;
                for (var c in s) {
                    var l = s[c];
                    if (l >= 0) {
                        var h = a[c];
                        if (void 0 !== h) {
                            var p = h.itemSize, d = Xe.getAttributeBuffer(h);
                            if (h instanceof i.InterleavedBufferAttribute) {
                                var f = h.data, m = f.stride, g = h.offset;
                                f instanceof i.InstancedInterleavedBuffer ? (He.enableAttributeAndDivisor(l, f.meshPerAttribute, o), void 0 === r.maxInstancedCount && (r.maxInstancedCount = f.meshPerAttribute * f.count)) : He.enableAttribute(l), Ie.bindBuffer(Ie.ARRAY_BUFFER, d), Ie.vertexAttribPointer(l, p, Ie.FLOAT, !1, m * f.array.BYTES_PER_ELEMENT, (n * m + g) * f.array.BYTES_PER_ELEMENT)
                            } else h instanceof i.InstancedBufferAttribute ? (He.enableAttributeAndDivisor(l, h.meshPerAttribute, o), void 0 === r.maxInstancedCount && (r.maxInstancedCount = h.meshPerAttribute * h.count)) : He.enableAttribute(l), Ie.bindBuffer(Ie.ARRAY_BUFFER, d), Ie.vertexAttribPointer(l, p, Ie.FLOAT, !1, 0, n * p * 4)
                        } else if (void 0 !== u) {
                            var v = u[c];
                            if (void 0 !== v)switch (v.length) {
                                case 2:
                                    Ie.vertexAttrib2fv(l, v);
                                    break;
                                case 3:
                                    Ie.vertexAttrib3fv(l, v);
                                    break;
                                case 4:
                                    Ie.vertexAttrib4fv(l, v);
                                    break;
                                default:
                                    Ie.vertexAttrib1fv(l, v)
                            }
                        }
                    }
                }
                He.disableUnusedAttributes()
            }

            function f(e, t) {
                return t[0] - e[0]
            }

            function m(e, t) {
                return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
            }

            function g(e, t) {
                return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
            }

            function v(e, t, r, n, i) {
                var o, a;
                r.transparent ? (o = de, a = ++fe) : (o = he, a = ++pe);
                var s = o[a];
                void 0 !== s ? (s.id = e.id, s.object = e, s.geometry = t, s.material = r, s.z = Re.z, s.group = i) : (s = {
                    id: e.id,
                    object: e,
                    geometry: t,
                    material: r,
                    z: Re.z,
                    group: i
                }, o.push(s))
            }

            function y(e, t) {
                if (e.visible !== !1) {
                    if (0 !== (e.channels.mask & t.channels.mask))if (e instanceof i.Light)le.push(e); else if (e instanceof i.Sprite)ge.push(e); else if (e instanceof i.LensFlare)ve.push(e); else if (e instanceof i.ImmediateRenderObject)ye.sortObjects === !0 && (Re.setFromMatrixPosition(e.matrixWorld), Re.applyProjection(De)), v(e, null, e.material, Re.z, null); else if ((e instanceof i.Mesh || e instanceof i.Line || e instanceof i.Points) && (e instanceof i.SkinnedMesh && e.skeleton.update(), e.frustumCulled === !1 || ke.intersectsObject(e) === !0)) {
                        var r = e.material;
                        if (r.visible === !0) {
                            ye.sortObjects === !0 && (Re.setFromMatrixPosition(e.matrixWorld), Re.applyProjection(De));
                            var n = Xe.update(e);
                            if (r instanceof i.MeshFaceMaterial)for (var o = n.groups, a = r.materials, s = 0, u = o.length; u > s; s++) {
                                var c = o[s], l = a[c.materialIndex];
                                l.visible === !0 && v(e, n, l, Re.z, c)
                            } else v(e, n, r, Re.z, null)
                        }
                    }
                    for (var h = e.children, s = 0, u = h.length; u > s; s++)y(h[s], t)
                }
            }

            function x(e, t, r, n, o) {
                for (var a = 0, s = e.length; s > a; a++) {
                    var u = e[a], c = u.object, l = u.geometry, h = void 0 === o ? u.material : o, p = u.group;
                    if (c.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, c.matrixWorld), c.normalMatrix.getNormalMatrix(c.modelViewMatrix), c instanceof i.ImmediateRenderObject) {
                        w(h);
                        var d = M(t, r, n, h, c);
                        Se = "", c.render(function (e) {
                            ye.renderBufferImmediate(e, d, h)
                        })
                    } else ye.renderBufferDirect(t, r, n, l, h, c, p)
                }
            }

            function b(e, t, r, n) {
                var o = We.get(e), a = qe.getParameters(e, t, r, n), s = qe.getProgramCode(e, a), c = o.program, l = !0;
                if (void 0 === c)e.addEventListener("dispose", u); else if (c.code !== s)p(e); else {
                    if (void 0 !== a.shaderID)return;
                    l = !1
                }
                if (l) {
                    if (a.shaderID) {
                        var h = i.ShaderLib[a.shaderID];
                        o.__webglShader = {
                            name: e.type,
                            uniforms: i.UniformsUtils.clone(h.uniforms),
                            vertexShader: h.vertexShader,
                            fragmentShader: h.fragmentShader
                        }
                    } else o.__webglShader = {
                        name: e.type,
                        uniforms: e.uniforms,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader
                    };
                    e.__webglShader = o.__webglShader, c = qe.acquireProgram(e, a, s), o.program = c, e.program = c
                }
                var d = c.getAttributes();
                if (e.morphTargets) {
                    e.numSupportedMorphTargets = 0;
                    for (var f = 0; f < ye.maxMorphTargets; f++)d["morphTarget" + f] >= 0 && e.numSupportedMorphTargets++
                }
                if (e.morphNormals)for (e.numSupportedMorphNormals = 0, f = 0; f < ye.maxMorphNormals; f++)d["morphNormal" + f] >= 0 && e.numSupportedMorphNormals++;
                o.uniformsList = [];
                var m = o.program.getUniforms();
                for (var g in o.__webglShader.uniforms) {
                    var v = m[g];
                    v && o.uniformsList.push([o.__webglShader.uniforms[g], v])
                }
            }

            function w(e) {
                S(e), e.transparent === !0 ? He.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : He.setBlending(i.NoBlending), He.setDepthFunc(e.depthFunc), He.setDepthTest(e.depthTest), He.setDepthWrite(e.depthWrite), He.setColorWrite(e.colorWrite), He.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
            }

            function S(e) {
                e.side !== i.DoubleSide ? He.enable(Ie.CULL_FACE) : He.disable(Ie.CULL_FACE), He.setFlipSided(e.side === i.BackSide)
            }

            function M(e, t, r, n, o) {
                Te = 0;
                var a = We.get(n);
                (n.needsUpdate || !a.program) && (b(n, t, r, o), n.needsUpdate = !1);
                var s = !1, u = !1, c = !1, l = a.program, h = l.getUniforms(), p = a.__webglShader.uniforms;
                if (l.id !== xe && (Ie.useProgram(l.program), xe = l.id, s = !0, u = !0, c = !0), n.id !== we && (-1 === we && (c = !0), we = n.id, u = !0), (s || e !== Me) && (Ie.uniformMatrix4fv(h.projectionMatrix, !1, e.projectionMatrix.elements), je.logarithmicDepthBuffer && Ie.uniform1f(h.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== Me && (Me = e), (n instanceof i.ShaderMaterial || n instanceof i.MeshPhongMaterial || n.envMap) && void 0 !== h.cameraPosition && (Re.setFromMatrixPosition(e.matrixWorld), Ie.uniform3f(h.cameraPosition, Re.x, Re.y, Re.z)), (n instanceof i.MeshPhongMaterial || n instanceof i.MeshLambertMaterial || n instanceof i.MeshBasicMaterial || n instanceof i.ShaderMaterial || n.skinning) && void 0 !== h.viewMatrix && Ie.uniformMatrix4fv(h.viewMatrix, !1, e.matrixWorldInverse.elements)), n.skinning)if (o.bindMatrix && void 0 !== h.bindMatrix && Ie.uniformMatrix4fv(h.bindMatrix, !1, o.bindMatrix.elements), o.bindMatrixInverse && void 0 !== h.bindMatrixInverse && Ie.uniformMatrix4fv(h.bindMatrixInverse, !1, o.bindMatrixInverse.elements), je.floatVertexTextures && o.skeleton && o.skeleton.useVertexTexture) {
                    if (void 0 !== h.boneTexture) {
                        var d = O();
                        Ie.uniform1i(h.boneTexture, d), ye.setTexture(o.skeleton.boneTexture, d)
                    }
                    void 0 !== h.boneTextureWidth && Ie.uniform1i(h.boneTextureWidth, o.skeleton.boneTextureWidth), void 0 !== h.boneTextureHeight && Ie.uniform1i(h.boneTextureHeight, o.skeleton.boneTextureHeight)
                } else o.skeleton && o.skeleton.boneMatrices && void 0 !== h.boneGlobalMatrices && Ie.uniformMatrix4fv(h.boneGlobalMatrices, !1, o.skeleton.boneMatrices);
                return u && (r && n.fog && A(p, r), (n instanceof i.MeshPhongMaterial || n instanceof i.MeshLambertMaterial || n.lights) && (Fe && (c = !0, N(t, e), Fe = !1), c ? (P(p, Ve), k(p, !0)) : k(p, !1)), (n instanceof i.MeshBasicMaterial || n instanceof i.MeshLambertMaterial || n instanceof i.MeshPhongMaterial) && T(p, n), n instanceof i.LineBasicMaterial ? _(p, n) : n instanceof i.LineDashedMaterial ? (_(p, n), E(p, n)) : n instanceof i.PointsMaterial ? C(p, n) : n instanceof i.MeshPhongMaterial ? L(p, n) : n instanceof i.MeshDepthMaterial ? (p.mNear.value = e.near, p.mFar.value = e.far, p.opacity.value = n.opacity) : n instanceof i.MeshNormalMaterial && (p.opacity.value = n.opacity), o.receiveShadow && !n._shadowPass && D(p, t, e), F(a.uniformsList)), R(h, o), void 0 !== h.modelMatrix && Ie.uniformMatrix4fv(h.modelMatrix, !1, o.matrixWorld.elements), l
            }

            function T(e, t) {
                e.opacity.value = t.opacity, e.diffuse.value = t.color, t.emissive && (e.emissive.value = t.emissive), e.map.value = t.map, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity);
                var r;
                if (t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.displacementMap ? r = t.displacementMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.alphaMap ? r = t.alphaMap : t.emissiveMap && (r = t.emissiveMap), void 0 !== r) {
                    r instanceof i.WebGLRenderTarget && (r = r.texture);
                    var n = r.offset, o = r.repeat;
                    e.offsetRepeat.value.set(n.x, n.y, o.x, o.y)
                }
                e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof i.WebGLRenderTargetCube ? 1 : -1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio
            }

            function _(e, t) {
                e.diffuse.value = t.color, e.opacity.value = t.opacity
            }

            function E(e, t) {
                e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
            }

            function C(e, t) {
                if (e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = Q.height / 2, e.map.value = t.map, null !== t.map) {
                    var r = t.map.offset, n = t.map.repeat;
                    e.offsetRepeat.value.set(r.x, r.y, n.x, n.y)
                }
            }

            function A(e, t) {
                e.fogColor.value = t.color, t instanceof i.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof i.FogExp2 && (e.fogDensity.value = t.density)
            }

            function L(e, t) {
                e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
            }

            function P(e, t) {
                e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.pointLightDecay.value = t.point.decays, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.spotLightDecay.value = t.spot.decays, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions
            }

            function k(e, t) {
                e.ambientLightColor.needsUpdate = t, e.directionalLightColor.needsUpdate = t, e.directionalLightDirection.needsUpdate = t, e.pointLightColor.needsUpdate = t, e.pointLightPosition.needsUpdate = t, e.pointLightDistance.needsUpdate = t, e.pointLightDecay.needsUpdate = t, e.spotLightColor.needsUpdate = t, e.spotLightPosition.needsUpdate = t, e.spotLightDistance.needsUpdate = t, e.spotLightDirection.needsUpdate = t, e.spotLightAngleCos.needsUpdate = t, e.spotLightExponent.needsUpdate = t, e.spotLightDecay.needsUpdate = t, e.hemisphereLightSkyColor.needsUpdate = t, e.hemisphereLightGroundColor.needsUpdate = t, e.hemisphereLightDirection.needsUpdate = t
            }

            function D(e, t, r) {
                if (e.shadowMatrix)for (var n = 0, o = 0, a = t.length; a > o; o++) {
                    var s = t[o];
                    if (s.castShadow === !0 && (s instanceof i.PointLight || s instanceof i.SpotLight || s instanceof i.DirectionalLight)) {
                        var u = s.shadow;
                        s instanceof i.PointLight ? (Re.setFromMatrixPosition(s.matrixWorld).negate(), u.matrix.identity().setPosition(Re), e.shadowDarkness.value[n] = -u.darkness) : e.shadowDarkness.value[n] = u.darkness, e.shadowMatrix.value[n] = u.matrix, e.shadowMap.value[n] = u.map, e.shadowMapSize.value[n] = u.mapSize, e.shadowBias.value[n] = u.bias, n++
                    }
                }
            }

            function R(e, t) {
                Ie.uniformMatrix4fv(e.modelViewMatrix, !1, t.modelViewMatrix.elements), e.normalMatrix && Ie.uniformMatrix3fv(e.normalMatrix, !1, t.normalMatrix.elements)
            }

            function O() {
                var e = Te;
                return e >= je.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + je.maxTextures), Te += 1, e
            }

            function F(e) {
                for (var t, r, n = 0, o = e.length; o > n; n++) {
                    var a = e[n][0];
                    if (a.needsUpdate !== !1) {
                        var s = a.type, u = a.value, c = e[n][1];
                        switch (s) {
                            case"1i":
                                Ie.uniform1i(c, u);
                                break;
                            case"1f":
                                Ie.uniform1f(c, u);
                                break;
                            case"2f":
                                Ie.uniform2f(c, u[0], u[1]);
                                break;
                            case"3f":
                                Ie.uniform3f(c, u[0], u[1], u[2]);
                                break;
                            case"4f":
                                Ie.uniform4f(c, u[0], u[1], u[2], u[3]);
                                break;
                            case"1iv":
                                Ie.uniform1iv(c, u);
                                break;
                            case"3iv":
                                Ie.uniform3iv(c, u);
                                break;
                            case"1fv":
                                Ie.uniform1fv(c, u);
                                break;
                            case"2fv":
                                Ie.uniform2fv(c, u);
                                break;
                            case"3fv":
                                Ie.uniform3fv(c, u);
                                break;
                            case"4fv":
                                Ie.uniform4fv(c, u);
                                break;
                            case"Matrix3fv":
                                Ie.uniformMatrix3fv(c, !1, u);
                                break;
                            case"Matrix4fv":
                                Ie.uniformMatrix4fv(c, !1, u);
                                break;
                            case"i":
                                Ie.uniform1i(c, u);
                                break;
                            case"f":
                                Ie.uniform1f(c, u);
                                break;
                            case"v2":
                                Ie.uniform2f(c, u.x, u.y);
                                break;
                            case"v3":
                                Ie.uniform3f(c, u.x, u.y, u.z);
                                break;
                            case"v4":
                                Ie.uniform4f(c, u.x, u.y, u.z, u.w);
                                break;
                            case"c":
                                Ie.uniform3f(c, u.r, u.g, u.b);
                                break;
                            case"iv1":
                                Ie.uniform1iv(c, u);
                                break;
                            case"iv":
                                Ie.uniform3iv(c, u);
                                break;
                            case"fv1":
                                Ie.uniform1fv(c, u);
                                break;
                            case"fv":
                                Ie.uniform3fv(c, u);
                                break;
                            case"v2v":
                                void 0 === a._array && (a._array = new Float32Array(2 * u.length));
                                for (var l = 0, h = 0, p = u.length; p > l; l++, h += 2)a._array[h + 0] = u[l].x, a._array[h + 1] = u[l].y;
                                Ie.uniform2fv(c, a._array);
                                break;
                            case"v3v":
                                void 0 === a._array && (a._array = new Float32Array(3 * u.length));
                                for (var l = 0, d = 0, p = u.length; p > l; l++, d += 3)a._array[d + 0] = u[l].x, a._array[d + 1] = u[l].y, a._array[d + 2] = u[l].z;
                                Ie.uniform3fv(c, a._array);
                                break;
                            case"v4v":
                                void 0 === a._array && (a._array = new Float32Array(4 * u.length));
                                for (var l = 0, f = 0, p = u.length; p > l; l++, f += 4)a._array[f + 0] = u[l].x, a._array[f + 1] = u[l].y, a._array[f + 2] = u[l].z, a._array[f + 3] = u[l].w;
                                Ie.uniform4fv(c, a._array);
                                break;
                            case"m3":
                                Ie.uniformMatrix3fv(c, !1, u.elements);
                                break;
                            case"m3v":
                                void 0 === a._array && (a._array = new Float32Array(9 * u.length));
                                for (var l = 0, p = u.length; p > l; l++)u[l].flattenToArrayOffset(a._array, 9 * l);
                                Ie.uniformMatrix3fv(c, !1, a._array);
                                break;
                            case"m4":
                                Ie.uniformMatrix4fv(c, !1, u.elements);
                                break;
                            case"m4v":
                                void 0 === a._array && (a._array = new Float32Array(16 * u.length));
                                for (var l = 0, p = u.length; p > l; l++)u[l].flattenToArrayOffset(a._array, 16 * l);
                                Ie.uniformMatrix4fv(c, !1, a._array);
                                break;
                            case"t":
                                if (t = u, r = O(), Ie.uniform1i(c, r), !t)continue;
                                t instanceof i.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? H(t, r) : t instanceof i.WebGLRenderTargetCube ? W(t.texture, r) : t instanceof i.WebGLRenderTarget ? ye.setTexture(t.texture, r) : ye.setTexture(t, r);
                                break;
                            case"tv":
                                void 0 === a._array && (a._array = []);
                                for (var l = 0, p = a.value.length; p > l; l++)a._array[l] = O();
                                Ie.uniform1iv(c, a._array);
                                for (var l = 0, p = a.value.length; p > l; l++)t = a.value[l], r = a._array[l], t && (t instanceof i.CubeTexture || t.image instanceof Array && 6 === t.image.length ? H(t, r) : t instanceof i.WebGLRenderTarget ? ye.setTexture(t.texture, r) : t instanceof i.WebGLRenderTargetCube ? W(t.texture, r) : ye.setTexture(t, r));
                                break;
                            default:
                                console.warn("THREE.WebGLRenderer: Unknown uniform type: " + s)
                        }
                    }
                }
            }

            function V(e, t, r, n) {
                e[t + 0] = r.r * n, e[t + 1] = r.g * n, e[t + 2] = r.b * n
            }

            function N(e, t) {
                var r, n, o, a, s, u, c, l, h = 0, p = 0, d = 0, f = Ve, m = t.matrixWorldInverse, g = f.directional.colors, v = f.directional.positions, y = f.point.colors, x = f.point.positions, b = f.point.distances, w = f.point.decays, S = f.spot.colors, M = f.spot.positions, T = f.spot.distances, _ = f.spot.directions, E = f.spot.anglesCos, C = f.spot.exponents, A = f.spot.decays, L = f.hemi.skyColors, P = f.hemi.groundColors, k = f.hemi.positions, D = 0, R = 0, O = 0, F = 0, N = 0, B = 0, I = 0, U = 0, z = 0, G = 0, j = 0, H = 0;
                for (r = 0, n = e.length; n > r; r++)if (o = e[r], a = o.color, c = o.intensity, l = o.distance, o instanceof i.AmbientLight) {
                    if (!o.visible)continue;
                    h += a.r, p += a.g, d += a.b
                } else if (o instanceof i.DirectionalLight) {
                    if (N += 1, !o.visible)continue;
                    Oe.setFromMatrixPosition(o.matrixWorld), Re.setFromMatrixPosition(o.target.matrixWorld), Oe.sub(Re), Oe.transformDirection(m), z = 3 * D, v[z + 0] = Oe.x, v[z + 1] = Oe.y, v[z + 2] = Oe.z, V(g, z, a, c), D += 1
                } else if (o instanceof i.PointLight) {
                    if (B += 1, !o.visible)continue;
                    G = 3 * R, V(y, G, a, c), Re.setFromMatrixPosition(o.matrixWorld), Re.applyMatrix4(m), x[G + 0] = Re.x, x[G + 1] = Re.y, x[G + 2] = Re.z, b[R] = l, w[R] = 0 === o.distance ? 0 : o.decay, R += 1
                } else if (o instanceof i.SpotLight) {
                    if (I += 1, !o.visible)continue;
                    j = 3 * O, V(S, j, a, c), Oe.setFromMatrixPosition(o.matrixWorld), Re.copy(Oe).applyMatrix4(m), M[j + 0] = Re.x, M[j + 1] = Re.y, M[j + 2] = Re.z, T[O] = l, Re.setFromMatrixPosition(o.target.matrixWorld), Oe.sub(Re), Oe.transformDirection(m), _[j + 0] = Oe.x, _[j + 1] = Oe.y, _[j + 2] = Oe.z, E[O] = Math.cos(o.angle), C[O] = o.exponent, A[O] = 0 === o.distance ? 0 : o.decay, O += 1
                } else if (o instanceof i.HemisphereLight) {
                    if (U += 1, !o.visible)continue;
                    Oe.setFromMatrixPosition(o.matrixWorld), Oe.transformDirection(m), H = 3 * F, k[H + 0] = Oe.x, k[H + 1] = Oe.y, k[H + 2] = Oe.z, s = o.color, u = o.groundColor, V(L, H, s, c), V(P, H, u, c), F += 1
                }
                for (r = 3 * D, n = Math.max(g.length, 3 * N); n > r; r++)g[r] = 0;
                for (r = 3 * R, n = Math.max(y.length, 3 * B); n > r; r++)y[r] = 0;
                for (r = 3 * O, n = Math.max(S.length, 3 * I); n > r; r++)S[r] = 0;
                for (r = 3 * F, n = Math.max(L.length, 3 * U); n > r; r++)L[r] = 0;
                for (r = 3 * F, n = Math.max(P.length, 3 * U); n > r; r++)P[r] = 0;
                f.directional.length = D, f.point.length = R, f.spot.length = O, f.hemi.length = F, f.ambient[0] = h, f.ambient[1] = p, f.ambient[2] = d
            }

            function B(e, t, r) {
                var n;
                if (r ? (Ie.texParameteri(e, Ie.TEXTURE_WRAP_S, $(t.wrapS)), Ie.texParameteri(e, Ie.TEXTURE_WRAP_T, $(t.wrapT)), Ie.texParameteri(e, Ie.TEXTURE_MAG_FILTER, $(t.magFilter)), Ie.texParameteri(e, Ie.TEXTURE_MIN_FILTER, $(t.minFilter))) : (Ie.texParameteri(e, Ie.TEXTURE_WRAP_S, Ie.CLAMP_TO_EDGE), Ie.texParameteri(e, Ie.TEXTURE_WRAP_T, Ie.CLAMP_TO_EDGE), (t.wrapS !== i.ClampToEdgeWrapping || t.wrapT !== i.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", t), Ie.texParameteri(e, Ie.TEXTURE_MAG_FILTER, K(t.magFilter)), Ie.texParameteri(e, Ie.TEXTURE_MIN_FILTER, K(t.minFilter)), t.minFilter !== i.NearestFilter && t.minFilter !== i.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", t)), n = Ge.get("EXT_texture_filter_anisotropic")) {
                    if (t.type === i.FloatType && null === Ge.get("OES_texture_float_linear"))return;
                    if (t.type === i.HalfFloatType && null === Ge.get("OES_texture_half_float_linear"))return;
                    (t.anisotropy > 1 || We.get(t).__currentAnisotropy) && (Ie.texParameterf(e, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, ye.getMaxAnisotropy())), We.get(t).__currentAnisotropy = t.anisotropy)
                }
            }

            function I(e, t, r) {
                void 0 === e.__webglInit && (e.__webglInit = !0, t.addEventListener("dispose", a), e.__webglTexture = Ie.createTexture(), Ne.textures++), He.activeTexture(Ie.TEXTURE0 + r), He.bindTexture(Ie.TEXTURE_2D, e.__webglTexture), Ie.pixelStorei(Ie.UNPACK_FLIP_Y_WEBGL, t.flipY), Ie.pixelStorei(Ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), Ie.pixelStorei(Ie.UNPACK_ALIGNMENT, t.unpackAlignment), t.image = U(t.image, je.maxTextureSize), G(t) && z(t.image) === !1 && (t.image = j(t.image));
                var n = t.image, o = z(n), s = $(t.format), u = $(t.type);
                B(Ie.TEXTURE_2D, t, o);
                var c, l = t.mipmaps;
                if (t instanceof i.DataTexture)if (l.length > 0 && o) {
                    for (var h = 0, p = l.length; p > h; h++)c = l[h], He.texImage2D(Ie.TEXTURE_2D, h, s, c.width, c.height, 0, s, u, c.data);
                    t.generateMipmaps = !1
                } else He.texImage2D(Ie.TEXTURE_2D, 0, s, n.width, n.height, 0, s, u, n.data); else if (t instanceof i.CompressedTexture)for (var h = 0, p = l.length; p > h; h++)c = l[h], t.format !== i.RGBAFormat && t.format !== i.RGBFormat ? He.getCompressedTextureFormats().indexOf(s) > -1 ? He.compressedTexImage2D(Ie.TEXTURE_2D, h, s, c.width, c.height, 0, c.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : He.texImage2D(Ie.TEXTURE_2D, h, s, c.width, c.height, 0, s, u, c.data); else if (l.length > 0 && o) {
                    for (var h = 0, p = l.length; p > h; h++)c = l[h], He.texImage2D(Ie.TEXTURE_2D, h, s, s, u, c);
                    t.generateMipmaps = !1
                } else He.texImage2D(Ie.TEXTURE_2D, 0, s, s, u, t.image);
                t.generateMipmaps && o && Ie.generateMipmap(Ie.TEXTURE_2D), e.__version = t.version, t.onUpdate && t.onUpdate(t)
            }

            function U(e, t) {
                if (e.width > t || e.height > t) {
                    var r = t / Math.max(e.width, e.height), n = document.createElement("canvas");
                    n.width = Math.floor(e.width * r), n.height = Math.floor(e.height * r);
                    var i = n.getContext("2d");
                    return i.drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height, e), n
                }
                return e
            }

            function z(e) {
                return i.Math.isPowerOfTwo(e.width) && i.Math.isPowerOfTwo(e.height)
            }

            function G(e) {
                return e.wrapS !== i.ClampToEdgeWrapping || e.wrapT !== i.ClampToEdgeWrapping ? !0 : e.minFilter !== i.NearestFilter && e.minFilter !== i.LinearFilter ? !0 : !1
            }

            function j(e) {
                if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
                    var t = document.createElement("canvas");
                    t.width = i.Math.nearestPowerOfTwo(e.width), t.height = i.Math.nearestPowerOfTwo(e.height);
                    var r = t.getContext("2d");
                    return r.drawImage(e, 0, 0, t.width, t.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e), t
                }
                return e
            }

            function H(e, t) {
                var r = We.get(e);
                if (6 === e.image.length)if (e.version > 0 && r.__version !== e.version) {
                    r.__image__webglTextureCube || (e.addEventListener("dispose", a), r.__image__webglTextureCube = Ie.createTexture(), Ne.textures++), He.activeTexture(Ie.TEXTURE0 + t), He.bindTexture(Ie.TEXTURE_CUBE_MAP, r.__image__webglTextureCube), Ie.pixelStorei(Ie.UNPACK_FLIP_Y_WEBGL, e.flipY);
                    for (var n = e instanceof i.CompressedTexture, o = e.image[0] instanceof i.DataTexture, s = [], u = 0; 6 > u; u++)!ye.autoScaleCubemaps || n || o ? s[u] = o ? e.image[u].image : e.image[u] : s[u] = U(e.image[u], je.maxCubemapSize);
                    var c = s[0], l = z(c), h = $(e.format), p = $(e.type);
                    B(Ie.TEXTURE_CUBE_MAP, e, l);
                    for (var u = 0; 6 > u; u++)if (n)for (var d, f = s[u].mipmaps, m = 0, g = f.length; g > m; m++)d = f[m], e.format !== i.RGBAFormat && e.format !== i.RGBFormat ? He.getCompressedTextureFormats().indexOf(h) > -1 ? He.compressedTexImage2D(Ie.TEXTURE_CUBE_MAP_POSITIVE_X + u, m, h, d.width, d.height, 0, d.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : He.texImage2D(Ie.TEXTURE_CUBE_MAP_POSITIVE_X + u, m, h, d.width, d.height, 0, h, p, d.data); else o ? He.texImage2D(Ie.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, h, s[u].width, s[u].height, 0, h, p, s[u].data) : He.texImage2D(Ie.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, h, h, p, s[u]);
                    e.generateMipmaps && l && Ie.generateMipmap(Ie.TEXTURE_CUBE_MAP), r.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else He.activeTexture(Ie.TEXTURE0 + t), He.bindTexture(Ie.TEXTURE_CUBE_MAP, r.__image__webglTextureCube)
            }

            function W(e, t) {
                He.activeTexture(Ie.TEXTURE0 + t), He.bindTexture(Ie.TEXTURE_CUBE_MAP, We.get(e).__webglTexture)
            }

            function X(e, t, r) {
                Ie.bindFramebuffer(Ie.FRAMEBUFFER, e), Ie.framebufferTexture2D(Ie.FRAMEBUFFER, Ie.COLOR_ATTACHMENT0, r, We.get(t.texture).__webglTexture, 0)
            }

            function q(e, t) {
                Ie.bindRenderbuffer(Ie.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (Ie.renderbufferStorage(Ie.RENDERBUFFER, Ie.DEPTH_COMPONENT16, t.width, t.height), Ie.framebufferRenderbuffer(Ie.FRAMEBUFFER, Ie.DEPTH_ATTACHMENT, Ie.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (Ie.renderbufferStorage(Ie.RENDERBUFFER, Ie.DEPTH_STENCIL, t.width, t.height), Ie.framebufferRenderbuffer(Ie.FRAMEBUFFER, Ie.DEPTH_STENCIL_ATTACHMENT, Ie.RENDERBUFFER, e)) : Ie.renderbufferStorage(Ie.RENDERBUFFER, Ie.RGBA4, t.width, t.height)
            }

            function Y(e) {
                var t = e instanceof i.WebGLRenderTargetCube ? Ie.TEXTURE_CUBE_MAP : Ie.TEXTURE_2D, r = We.get(e.texture).__webglTexture;
                He.bindTexture(t, r), Ie.generateMipmap(t), He.bindTexture(t, null)
            }

            function K(e) {
                return e === i.NearestFilter || e === i.NearestMipMapNearestFilter || e === i.NearestMipMapLinearFilter ? Ie.NEAREST : Ie.LINEAR
            }

            function $(e) {
                var t;
                if (e === i.RepeatWrapping)return Ie.REPEAT;
                if (e === i.ClampToEdgeWrapping)return Ie.CLAMP_TO_EDGE;
                if (e === i.MirroredRepeatWrapping)return Ie.MIRRORED_REPEAT;
                if (e === i.NearestFilter)return Ie.NEAREST;
                if (e === i.NearestMipMapNearestFilter)return Ie.NEAREST_MIPMAP_NEAREST;
                if (e === i.NearestMipMapLinearFilter)return Ie.NEAREST_MIPMAP_LINEAR;
                if (e === i.LinearFilter)return Ie.LINEAR;
                if (e === i.LinearMipMapNearestFilter)return Ie.LINEAR_MIPMAP_NEAREST;
                if (e === i.LinearMipMapLinearFilter)return Ie.LINEAR_MIPMAP_LINEAR;
                if (e === i.UnsignedByteType)return Ie.UNSIGNED_BYTE;
                if (e === i.UnsignedShort4444Type)return Ie.UNSIGNED_SHORT_4_4_4_4;
                if (e === i.UnsignedShort5551Type)return Ie.UNSIGNED_SHORT_5_5_5_1;
                if (e === i.UnsignedShort565Type)return Ie.UNSIGNED_SHORT_5_6_5;
                if (e === i.ByteType)return Ie.BYTE;
                if (e === i.ShortType)return Ie.SHORT;
                if (e === i.UnsignedShortType)return Ie.UNSIGNED_SHORT;
                if (e === i.IntType)return Ie.INT;
                if (e === i.UnsignedIntType)return Ie.UNSIGNED_INT;
                if (e === i.FloatType)return Ie.FLOAT;
                if (t = Ge.get("OES_texture_half_float"), null !== t && e === i.HalfFloatType)return t.HALF_FLOAT_OES;
                if (e === i.AlphaFormat)return Ie.ALPHA;
                if (e === i.RGBFormat)return Ie.RGB;
                if (e === i.RGBAFormat)return Ie.RGBA;
                if (e === i.LuminanceFormat)return Ie.LUMINANCE;
                if (e === i.LuminanceAlphaFormat)return Ie.LUMINANCE_ALPHA;
                if (e === i.AddEquation)return Ie.FUNC_ADD;
                if (e === i.SubtractEquation)return Ie.FUNC_SUBTRACT;
                if (e === i.ReverseSubtractEquation)return Ie.FUNC_REVERSE_SUBTRACT;
                if (e === i.ZeroFactor)return Ie.ZERO;
                if (e === i.OneFactor)return Ie.ONE;
                if (e === i.SrcColorFactor)return Ie.SRC_COLOR;
                if (e === i.OneMinusSrcColorFactor)return Ie.ONE_MINUS_SRC_COLOR;
                if (e === i.SrcAlphaFactor)return Ie.SRC_ALPHA;
                if (e === i.OneMinusSrcAlphaFactor)return Ie.ONE_MINUS_SRC_ALPHA;
                if (e === i.DstAlphaFactor)return Ie.DST_ALPHA;
                if (e === i.OneMinusDstAlphaFactor)return Ie.ONE_MINUS_DST_ALPHA;
                if (e === i.DstColorFactor)return Ie.DST_COLOR;
                if (e === i.OneMinusDstColorFactor)return Ie.ONE_MINUS_DST_COLOR;
                if (e === i.SrcAlphaSaturateFactor)return Ie.SRC_ALPHA_SATURATE;
                if (t = Ge.get("WEBGL_compressed_texture_s3tc"), null !== t) {
                    if (e === i.RGB_S3TC_DXT1_Format)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (e === i.RGBA_S3TC_DXT1_Format)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (e === i.RGBA_S3TC_DXT3_Format)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (e === i.RGBA_S3TC_DXT5_Format)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (t = Ge.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
                    if (e === i.RGB_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (e === i.RGB_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (e === i.RGBA_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (e === i.RGBA_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (t = Ge.get("EXT_blend_minmax"), null !== t) {
                    if (e === i.MinEquation)return t.MIN_EXT;
                    if (e === i.MaxEquation)return t.MAX_EXT
                }
                return 0
            }

            console.log("THREE.WebGLRenderer", i.REVISION), e = e || {};
            var Q = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"), Z = void 0 !== e.context ? e.context : null, J = Q.width, ee = Q.height, te = 1, re = void 0 !== e.alpha ? e.alpha : !1, ne = void 0 !== e.depth ? e.depth : !0, ie = void 0 !== e.stencil ? e.stencil : !0, oe = void 0 !== e.antialias ? e.antialias : !1, ae = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0, se = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1, ue = new i.Color(0), ce = 0, le = [], he = [], pe = -1, de = [], fe = -1, me = new Float32Array(8), ge = [], ve = [];
            this.domElement = Q, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
            var ye = this, xe = null, be = null, we = -1, Se = "", Me = null, Te = 0, _e = 0, Ee = 0, Ce = Q.width, Ae = Q.height, Le = 0, Pe = 0, ke = new i.Frustum, De = new i.Matrix4, Re = new i.Vector3, Oe = new i.Vector3, Fe = !0, Ve = {
                ambient: [0, 0, 0],
                directional: {length: 0, colors: [], positions: []},
                point: {length: 0, colors: [], positions: [], distances: [], decays: []},
                spot: {
                    length: 0,
                    colors: [],
                    positions: [],
                    distances: [],
                    directions: [],
                    anglesCos: [],
                    exponents: [],
                    decays: []
                },
                hemi: {length: 0, skyColors: [], groundColors: [], positions: []}
            }, Ne = {geometries: 0, textures: 0}, Be = {calls: 0, vertices: 0, faces: 0, points: 0};
            this.info = {render: Be, memory: Ne, programs: null};
            var Ie;
            try {
                var Ue = {
                    alpha: re,
                    depth: ne,
                    stencil: ie,
                    antialias: oe,
                    premultipliedAlpha: ae,
                    preserveDrawingBuffer: se
                };
                if (Ie = Z || Q.getContext("webgl", Ue) || Q.getContext("experimental-webgl", Ue), null === Ie)throw null !== Q.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                Q.addEventListener("webglcontextlost", o, !1)
            } catch (ze) {
                console.error("THREE.WebGLRenderer: " + ze)
            }
            var Ge = new i.WebGLExtensions(Ie);
            Ge.get("OES_texture_float"), Ge.get("OES_texture_float_linear"), Ge.get("OES_texture_half_float"), Ge.get("OES_texture_half_float_linear"), Ge.get("OES_standard_derivatives"), Ge.get("ANGLE_instanced_arrays"), Ge.get("OES_element_index_uint") && (i.BufferGeometry.MaxIndex = 4294967296);
            var je = new i.WebGLCapabilities(Ie, Ge, e), He = new i.WebGLState(Ie, Ge, $), We = new i.WebGLProperties, Xe = new i.WebGLObjects(Ie, We, this.info), qe = new i.WebGLPrograms(this, je);
            this.info.programs = qe.programs;
            var Ye = new i.WebGLBufferRenderer(Ie, Ge, Be), Ke = new i.WebGLIndexedBufferRenderer(Ie, Ge, Be);
            r(), this.context = Ie, this.capabilities = je, this.extensions = Ge, this.state = He;
            var $e = new i.WebGLShadowMap(this, le, Xe);
            this.shadowMap = $e;
            var Qe = new i.SpritePlugin(this, ge), Ze = new i.LensFlarePlugin(this, ve);
            this.getContext = function () {
                return Ie
            }, this.getContextAttributes = function () {
                return Ie.getContextAttributes()
            }, this.forceContextLoss = function () {
                Ge.get("WEBGL_lose_context").loseContext()
            }, this.getMaxAnisotropy = function () {
                var e;
                return function () {
                    if (void 0 !== e)return e;
                    var t = Ge.get("EXT_texture_filter_anisotropic");
                    return e = null !== t ? Ie.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                }
            }(), this.getPrecision = function () {
                return je.precision
            }, this.getPixelRatio = function () {
                return te
            }, this.setPixelRatio = function (e) {
                void 0 !== e && (te = e)
            }, this.getSize = function () {
                return {width: J, height: ee}
            }, this.setSize = function (e, t, r) {
                J = e, ee = t, Q.width = e * te, Q.height = t * te, r !== !1 && (Q.style.width = e + "px", Q.style.height = t + "px"), this.setViewport(0, 0, e, t)
            }, this.setViewport = function (e, t, r, n) {
                _e = e * te, Ee = t * te, Ce = r * te, Ae = n * te, Ie.viewport(_e, Ee, Ce, Ae)
            }, this.getViewport = function (e) {
                e.x = _e / te, e.y = Ee / te, e.z = Ce / te, e.w = Ae / te
            }, this.setScissor = function (e, t, r, n) {
                Ie.scissor(e * te, t * te, r * te, n * te)
            }, this.enableScissorTest = function (e) {
                He.setScissorTest(e)
            }, this.getClearColor = function () {
                return ue
            }, this.setClearColor = function (e, r) {
                ue.set(e), ce = void 0 !== r ? r : 1, t(ue.r, ue.g, ue.b, ce)
            }, this.getClearAlpha = function () {
                return ce
            }, this.setClearAlpha = function (e) {
                ce = e, t(ue.r, ue.g, ue.b, ce)
            }, this.clear = function (e, t, r) {
                var n = 0;
                (void 0 === e || e) && (n |= Ie.COLOR_BUFFER_BIT), (void 0 === t || t) && (n |= Ie.DEPTH_BUFFER_BIT), (void 0 === r || r) && (n |= Ie.STENCIL_BUFFER_BIT), Ie.clear(n)
            }, this.clearColor = function () {
                Ie.clear(Ie.COLOR_BUFFER_BIT)
            }, this.clearDepth = function () {
                Ie.clear(Ie.DEPTH_BUFFER_BIT)
            }, this.clearStencil = function () {
                Ie.clear(Ie.STENCIL_BUFFER_BIT)
            }, this.clearTarget = function (e, t, r, n) {
                this.setRenderTarget(e), this.clear(t, r, n)
            }, this.resetGLState = n, this.dispose = function () {
                Q.removeEventListener("webglcontextlost", o, !1)
            }, this.renderBufferImmediate = function (e, t, r) {
                He.initAttributes();
                var n = We.get(e);
                e.hasPositions && !n.position && (n.position = Ie.createBuffer()), e.hasNormals && !n.normal && (n.normal = Ie.createBuffer()), e.hasUvs && !n.uv && (n.uv = Ie.createBuffer()), e.hasColors && !n.color && (n.color = Ie.createBuffer());
                var o = t.getAttributes();
                if (e.hasPositions && (Ie.bindBuffer(Ie.ARRAY_BUFFER, n.position), Ie.bufferData(Ie.ARRAY_BUFFER, e.positionArray, Ie.DYNAMIC_DRAW), He.enableAttribute(o.position), Ie.vertexAttribPointer(o.position, 3, Ie.FLOAT, !1, 0, 0)), e.hasNormals) {
                    if (Ie.bindBuffer(Ie.ARRAY_BUFFER, n.normal), "MeshPhongMaterial" !== r.type && r.shading === i.FlatShading)for (var a = 0, s = 3 * e.count; s > a; a += 9) {
                        var u = e.normalArray, c = (u[a + 0] + u[a + 3] + u[a + 6]) / 3, l = (u[a + 1] + u[a + 4] + u[a + 7]) / 3, h = (u[a + 2] + u[a + 5] + u[a + 8]) / 3;
                        u[a + 0] = c, u[a + 1] = l, u[a + 2] = h, u[a + 3] = c, u[a + 4] = l, u[a + 5] = h, u[a + 6] = c, u[a + 7] = l, u[a + 8] = h
                    }
                    Ie.bufferData(Ie.ARRAY_BUFFER, e.normalArray, Ie.DYNAMIC_DRAW), He.enableAttribute(o.normal), Ie.vertexAttribPointer(o.normal, 3, Ie.FLOAT, !1, 0, 0)
                }
                e.hasUvs && r.map && (Ie.bindBuffer(Ie.ARRAY_BUFFER, n.uv), Ie.bufferData(Ie.ARRAY_BUFFER, e.uvArray, Ie.DYNAMIC_DRAW), He.enableAttribute(o.uv), Ie.vertexAttribPointer(o.uv, 2, Ie.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== i.NoColors && (Ie.bindBuffer(Ie.ARRAY_BUFFER, n.color), Ie.bufferData(Ie.ARRAY_BUFFER, e.colorArray, Ie.DYNAMIC_DRAW), He.enableAttribute(o.color), Ie.vertexAttribPointer(o.color, 3, Ie.FLOAT, !1, 0, 0)), He.disableUnusedAttributes(), Ie.drawArrays(Ie.TRIANGLES, 0, e.count), e.count = 0
            }, this.renderBufferDirect = function (e, t, r, n, o, a, s) {
                w(o);
                var u = M(e, t, r, o, a), c = !1, l = n.id + "_" + u.id + "_" + o.wireframe;
                l !== Se && (Se = l, c = !0);
                var h = a.morphTargetInfluences;
                if (void 0 !== h) {
                    for (var p = [], m = 0, g = h.length; g > m; m++) {
                        var v = h[m];
                        p.push([v, m])
                    }
                    p.sort(f), p.length > 8 && (p.length = 8);
                    for (var y = n.morphAttributes, m = 0, g = p.length; g > m; m++) {
                        var v = p[m];
                        if (me[m] = v[0], 0 !== v[0]) {
                            var x = v[1];
                            o.morphTargets === !0 && y.position && n.addAttribute("morphTarget" + m, y.position[x]), o.morphNormals === !0 && y.normal && n.addAttribute("morphNormal" + m, y.normal[x])
                        } else o.morphTargets === !0 && n.removeAttribute("morphTarget" + m), o.morphNormals === !0 && n.removeAttribute("morphNormal" + m)
                    }
                    var b = u.getUniforms();
                    null !== b.morphTargetInfluences && Ie.uniform1fv(b.morphTargetInfluences, me), c = !0
                }
                var x = n.index, S = n.attributes.position;
                o.wireframe === !0 && (x = Xe.getWireframeAttribute(n));
                var T;
                null !== x ? (T = Ke, T.setIndex(x)) : T = Ye, c && (d(o, u, n), null !== x && Ie.bindBuffer(Ie.ELEMENT_ARRAY_BUFFER, Xe.getAttributeBuffer(x)));
                var _ = 0, E = 1 / 0;
                null !== x ? E = x.count : void 0 !== S && (E = S.count);
                var C = n.drawRange.start, A = n.drawRange.count, L = null !== s ? s.start : 0, P = null !== s ? s.count : 1 / 0, k = Math.max(_, C, L), D = Math.min(_ + E, C + A, L + P) - 1, R = Math.max(0, D - k + 1);
                if (a instanceof i.Mesh)o.wireframe === !0 ? (He.setLineWidth(o.wireframeLinewidth * te), T.setMode(Ie.LINES)) : T.setMode(Ie.TRIANGLES), n instanceof i.InstancedBufferGeometry && n.maxInstancedCount > 0 ? T.renderInstances(n) : T.render(k, R); else if (a instanceof i.Line) {
                    var O = o.linewidth;
                    void 0 === O && (O = 1), He.setLineWidth(O * te), a instanceof i.LineSegments ? T.setMode(Ie.LINES) : T.setMode(Ie.LINE_STRIP), T.render(k, R)
                } else a instanceof i.Points && (T.setMode(Ie.POINTS), T.render(k, R))
            }, this.render = function (e, t, r, n) {
                if (t instanceof i.Camera == !1)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                var o = e.fog;
                if (Se = "", we = -1, Me = null, Fe = !0, e.autoUpdate === !0 && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), De.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ke.setFromMatrix(De), le.length = 0, pe = -1, fe = -1, ge.length = 0, ve.length = 0, y(e, t), he.length = pe + 1, de.length = fe + 1, ye.sortObjects === !0 && (he.sort(m), de.sort(g)), $e.render(e), Be.calls = 0, Be.vertices = 0, Be.faces = 0, Be.points = 0, this.setRenderTarget(r), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), e.overrideMaterial) {
                    var a = e.overrideMaterial;
                    x(he, t, le, o, a), x(de, t, le, o, a)
                } else He.setBlending(i.NoBlending), x(he, t, le, o), x(de, t, le, o);
                if (Qe.render(e, t), Ze.render(e, t, Le, Pe), r) {
                    var s = r.texture, u = z(r);
                    s.generateMipmaps && u && s.minFilter !== i.NearestFilter && s.minFilter !== i.LinearFilter && Y(r)
                }
                He.setDepthTest(!0), He.setDepthWrite(!0), He.setColorWrite(!0)
            }, this.setFaceCulling = function (e, t) {
                e === i.CullFaceNone ? He.disable(Ie.CULL_FACE) : (t === i.FrontFaceDirectionCW ? Ie.frontFace(Ie.CW) : Ie.frontFace(Ie.CCW), e === i.CullFaceBack ? Ie.cullFace(Ie.BACK) : e === i.CullFaceFront ? Ie.cullFace(Ie.FRONT) : Ie.cullFace(Ie.FRONT_AND_BACK), He.enable(Ie.CULL_FACE))
            }, this.setTexture = function (e, t) {
                var r = We.get(e);
                if (e.version > 0 && r.__version !== e.version) {
                    var n = e.image;
                    return void 0 === n ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e) : n.complete === !1 ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e) : void I(r, e, t)
                }
                He.activeTexture(Ie.TEXTURE0 + t), He.bindTexture(Ie.TEXTURE_2D, r.__webglTexture)
            }, this.setRenderTarget = function (e) {
                var t = e instanceof i.WebGLRenderTargetCube;
                if (e && void 0 === We.get(e).__webglFramebuffer) {
                    var r = We.get(e), n = We.get(e.texture);
                    void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", s), n.__webglTexture = Ie.createTexture(), Ne.textures++;
                    var o = z(e), a = $(e.texture.format), u = $(e.texture.type);
                    if (t) {
                        r.__webglFramebuffer = [], r.__webglRenderbuffer = [], He.bindTexture(Ie.TEXTURE_CUBE_MAP, n.__webglTexture), B(Ie.TEXTURE_CUBE_MAP, e.texture, o);
                        for (var c = 0; 6 > c; c++)r.__webglFramebuffer[c] = Ie.createFramebuffer(), r.__webglRenderbuffer[c] = Ie.createRenderbuffer(), He.texImage2D(Ie.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, a, e.width, e.height, 0, a, u, null), X(r.__webglFramebuffer[c], e, Ie.TEXTURE_CUBE_MAP_POSITIVE_X + c), q(r.__webglRenderbuffer[c], e);
                        e.texture.generateMipmaps && o && Ie.generateMipmap(Ie.TEXTURE_CUBE_MAP)
                    } else r.__webglFramebuffer = Ie.createFramebuffer(), e.shareDepthFrom ? r.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : r.__webglRenderbuffer = Ie.createRenderbuffer(), He.bindTexture(Ie.TEXTURE_2D, n.__webglTexture), B(Ie.TEXTURE_2D, e.texture, o), He.texImage2D(Ie.TEXTURE_2D, 0, a, e.width, e.height, 0, a, u, null), X(r.__webglFramebuffer, e, Ie.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? Ie.framebufferRenderbuffer(Ie.FRAMEBUFFER, Ie.DEPTH_ATTACHMENT, Ie.RENDERBUFFER, r.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && Ie.framebufferRenderbuffer(Ie.FRAMEBUFFER, Ie.DEPTH_STENCIL_ATTACHMENT, Ie.RENDERBUFFER, r.__webglRenderbuffer) : q(r.__webglRenderbuffer, e), e.texture.generateMipmaps && o && Ie.generateMipmap(Ie.TEXTURE_2D);
                    t ? He.bindTexture(Ie.TEXTURE_CUBE_MAP, null) : He.bindTexture(Ie.TEXTURE_2D, null), Ie.bindRenderbuffer(Ie.RENDERBUFFER, null), Ie.bindFramebuffer(Ie.FRAMEBUFFER, null)
                }
                var l, h, p, d, f;
                if (e) {
                    var r = We.get(e);
                    l = t ? r.__webglFramebuffer[e.activeCubeFace] : r.__webglFramebuffer, h = e.width, p = e.height, d = 0, f = 0
                } else l = null, h = Ce, p = Ae, d = _e, f = Ee;
                if (l !== be && (Ie.bindFramebuffer(Ie.FRAMEBUFFER, l), Ie.viewport(d, f, h, p), be = l), t) {
                    var n = We.get(e.texture);
                    Ie.framebufferTexture2D(Ie.FRAMEBUFFER, Ie.COLOR_ATTACHMENT0, Ie.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, n.__webglTexture, 0)
                }
                Le = h, Pe = p
            }, this.readRenderTargetPixels = function (e, t, r, n, o, a) {
                if (e instanceof i.WebGLRenderTarget == !1)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                var s = We.get(e).__webglFramebuffer;
                if (s) {
                    var u = !1;
                    s !== be && (Ie.bindFramebuffer(Ie.FRAMEBUFFER, s), u = !0);
                    try {
                        var c = e.texture;
                        if (c.format !== i.RGBAFormat && $(c.format) !== Ie.getParameter(Ie.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(c.type === i.UnsignedByteType || $(c.type) === Ie.getParameter(Ie.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === i.FloatType && Ge.get("WEBGL_color_buffer_float") || c.type === i.HalfFloatType && Ge.get("EXT_color_buffer_half_float")))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        Ie.checkFramebufferStatus(Ie.FRAMEBUFFER) === Ie.FRAMEBUFFER_COMPLETE ? Ie.readPixels(t, r, n, o, $(c.format), $(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        u && Ie.bindFramebuffer(Ie.FRAMEBUFFER, be)
                    }
                }
            }, this.supportsFloatTextures = function () {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), Ge.get("OES_texture_float")
            }, this.supportsHalfFloatTextures = function () {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), Ge.get("OES_texture_half_float")
            }, this.supportsStandardDerivatives = function () {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), Ge.get("OES_standard_derivatives")
            }, this.supportsCompressedTextureS3TC = function () {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), Ge.get("WEBGL_compressed_texture_s3tc")
            }, this.supportsCompressedTexturePVRTC = function () {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), Ge.get("WEBGL_compressed_texture_pvrtc")
            }, this.supportsBlendMinMax = function () {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), Ge.get("EXT_blend_minmax")
            }, this.supportsVertexTextures = function () {
                return je.vertexTextures
            }, this.supportsInstancedArrays = function () {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), Ge.get("ANGLE_instanced_arrays")
            }, this.initMaterial = function () {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            }, this.addPrePlugin = function () {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            }, this.addPostPlugin = function () {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            }, this.updateShadowMap = function () {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }, Object.defineProperties(this, {
                shadowMapEnabled: {
                    get: function () {
                        return $e.enabled
                    }, set: function (e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), $e.enabled = e
                    }
                }, shadowMapType: {
                    get: function () {
                        return $e.type
                    }, set: function (e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), $e.type = e
                    }
                }, shadowMapCullFace: {
                    get: function () {
                        return $e.cullFace
                    }, set: function (e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), $e.cullFace = e
                    }
                }, shadowMapDebug: {
                    get: function () {
                        return $e.debug
                    }, set: function (e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug."), $e.debug = e
                    }
                }
            })
        },i.WebGLRenderTarget = function (e, t, r) {
            this.uuid = i.Math.generateUUID(), this.width = e, this.height = t, r = r || {}, void 0 === r.minFilter && (r.minFilter = i.LinearFilter), this.texture = new i.Texture(void 0, void 0, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy), this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0, this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
        },i.WebGLRenderTarget.prototype = {
            constructor: i.WebGLRenderTarget, get wrapS() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            }, set wrapS(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
            }, get wrapT() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            }, set wrapT(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
            }, get magFilter() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            }, set magFilter(e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
            }, get minFilter() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            }, set minFilter(e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
            }, get anisotropy() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            }, set anisotropy(e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
            }, get offset() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            }, set offset(e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
            }, get repeat() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            }, set repeat(e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
            }, get format() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            }, set format(e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
            }, get type() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            }, set type(e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
            }, get generateMipmaps() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            }, set generateMipmaps(e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
            }, setSize: function (e, t) {
                (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose())
            }, clone: function () {
                return (new this.constructor).copy(this)
            }, copy: function (e) {
                return this.width = e.width, this.height = e.height, this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.shareDepthFrom = e.shareDepthFrom, this
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },i.EventDispatcher.prototype.apply(i.WebGLRenderTarget.prototype),i.WebGLRenderTargetCube = function (e, t, r) {
            i.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0
        },i.WebGLRenderTargetCube.prototype = Object.create(i.WebGLRenderTarget.prototype),i.WebGLRenderTargetCube.prototype.constructor = i.WebGLRenderTargetCube,i.WebGLBufferRenderer = function (e, t, r) {
            function n(e) {
                s = e
            }

            function o(t, n) {
                e.drawArrays(s, t, n), r.calls++, r.vertices += n, s === e.TRIANGLES && (r.faces += n / 3)
            }

            function a(e) {
                var r = t.get("ANGLE_instanced_arrays");
                if (null === r)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var n = e.attributes.position;
                n instanceof i.InterleavedBufferAttribute ? r.drawArraysInstancedANGLE(s, 0, n.data.count, e.maxInstancedCount) : r.drawArraysInstancedANGLE(s, 0, n.count, e.maxInstancedCount)
            }

            var s;
            this.setMode = n, this.render = o, this.renderInstances = a
        },i.WebGLIndexedBufferRenderer = function (e, t, r) {
            function n(e) {
                s = e
            }

            function i(r) {
                r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (u = e.UNSIGNED_INT, c = 4) : (u = e.UNSIGNED_SHORT, c = 2)
            }

            function o(t, n) {
                e.drawElements(s, n, u, t * c), r.calls++, r.vertices += n, s === e.TRIANGLES && (r.faces += n / 3)
            }

            function a(e) {
                var r = t.get("ANGLE_instanced_arrays");
                if (null === r)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var n = e.index;
                r.drawElementsInstancedANGLE(s, n.array.length, u, 0, e.maxInstancedCount)
            }

            var s, u, c;
            this.setMode = n, this.setIndex = i, this.render = o, this.renderInstances = a
        },i.WebGLExtensions = function (e) {
            var t = {};
            this.get = function (r) {
                if (void 0 !== t[r])return t[r];
                var n;
                switch (r) {
                    case"EXT_texture_filter_anisotropic":
                        n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case"WEBGL_compressed_texture_s3tc":
                        n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case"WEBGL_compressed_texture_pvrtc":
                        n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        n = e.getExtension(r)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = n, n
            }
        },i.WebGLCapabilities = function (e, t, r) {
            function n(t) {
                if ("highp" === t) {
                    if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)return "highp";
                    t = "mediump"
                }
                return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }

            this.getMaxPrecision = n, this.precision = void 0 !== r.precision ? r.precision : "highp", this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer ? r.logarithmicDepthBuffer : !1, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
            var i = n(this.precision);
            i !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", i, "instead."), this.precision = i), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
        },i.WebGLGeometries = function (e, t, r) {
            function n(e) {
                var t = e.geometry;
                if (void 0 !== l[t.id])return l[t.id];
                t.addEventListener("dispose", o);
                var n;
                return t instanceof i.BufferGeometry ? n = t : t instanceof i.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new i.BufferGeometry).setFromObject(e)), n = t._bufferGeometry), l[t.id] = n, r.memory.geometries++, n
            }

            function o(e) {
                var n = e.target, i = l[n.id];
                u(i.attributes), n.removeEventListener("dispose", o), delete l[n.id];
                var a = t.get(n);
                a.wireframe && s(a.wireframe), r.memory.geometries--
            }

            function a(e) {
                return e instanceof i.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }

            function s(t) {
                var r = a(t);
                void 0 !== r && (e.deleteBuffer(r), c(t))
            }

            function u(e) {
                for (var t in e)s(e[t])
            }

            function c(e) {
                e instanceof i.InterleavedBufferAttribute ? t["delete"](e.data) : t["delete"](e)
            }

            var l = {};
            this.get = n
        },i.WebGLObjects = function (e, t, r) {
            function n(t) {
                var r = h.get(t);
                t.geometry instanceof i.Geometry && r.updateFromObject(t);
                var n = r.index, a = r.attributes;
                null !== n && o(n, e.ELEMENT_ARRAY_BUFFER);
                for (var s in a)o(a[s], e.ARRAY_BUFFER);
                var u = r.morphAttributes;
                for (var s in u)for (var c = u[s], l = 0, p = c.length; p > l; l++)o(c[l], e.ARRAY_BUFFER);
                return r
            }

            function o(e, r) {
                var n = e instanceof i.InterleavedBufferAttribute ? e.data : e, o = t.get(n);
                void 0 === o.__webglBuffer ? a(o, n, r) : o.version !== n.version && s(o, n, r)
            }

            function a(t, r, n) {
                t.__webglBuffer = e.createBuffer(), e.bindBuffer(n, t.__webglBuffer);
                var i = r.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
                e.bufferData(n, r.array, i), t.version = r.version
            }

            function s(t, r, n) {
                e.bindBuffer(n, t.__webglBuffer), r.dynamic === !1 || -1 === r.updateRange.count ? e.bufferSubData(n, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)), r.updateRange.count = 0), t.version = r.version
            }

            function u(e) {
                return e instanceof i.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }

            function c(r) {
                var n = t.get(r);
                if (void 0 !== n.wireframe)return n.wireframe;
                var a = [], s = r.index, u = r.attributes, c = u.position;
                if (null !== s)for (var h = {}, p = s.array, d = 0, f = p.length; f > d; d += 3) {
                    var m = p[d + 0], g = p[d + 1], v = p[d + 2];
                    l(h, m, g) && a.push(m, g), l(h, g, v) && a.push(g, v), l(h, v, m) && a.push(v, m)
                } else for (var p = u.position.array, d = 0, f = p.length / 3 - 1; f > d; d += 3) {
                    var m = d + 0, g = d + 1, v = d + 2;
                    a.push(m, g, g, v, v, m)
                }
                var y = c.count > 65535 ? Uint32Array : Uint16Array, x = new i.BufferAttribute(new y(a), 1);
                return o(x, e.ELEMENT_ARRAY_BUFFER), n.wireframe = x, x
            }

            function l(e, t, r) {
                if (t > r) {
                    var n = t;
                    t = r, r = n
                }
                var i = e[t];
                return void 0 === i ? (e[t] = [r], !0) : -1 === i.indexOf(r) ? (i.push(r), !0) : !1
            }

            var h = new i.WebGLGeometries(e, t, r);
            this.getAttributeBuffer = u, this.getWireframeAttribute = c, this.update = n
        },i.WebGLProgram = function () {
            function e(e) {
                var t = [];
                for (var r in e) {
                    var n = e[r];
                    n !== !1 && t.push("#define " + r + " " + n)
                }
                return t.join("\n")
            }

            function t(e, t, r) {
                for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), o = 0; i > o; o++) {
                    var a = e.getActiveUniform(t, o), s = a.name, u = e.getUniformLocation(t, s), c = s.lastIndexOf("[0]");
                    -1 !== c && c === s.length - 3 && (n[s.substr(0, c)] = u), n[s] = u
                }
                return n
            }

            function r(e, t, r) {
                for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; i > o; o++) {
                    var a = e.getActiveAttrib(t, o), s = a.name;
                    n[s] = e.getAttribLocation(t, s)
                }
                return n
            }

            function n(e) {
                return "" !== e
            }

            var o = 0;
            return function (a, s, u, c) {
                var l = a.context, h = u.defines, p = u.__webglShader.vertexShader, d = u.__webglShader.fragmentShader, f = "SHADOWMAP_TYPE_BASIC";
                c.shadowMapType === i.PCFShadowMap ? f = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === i.PCFSoftShadowMap && (f = "SHADOWMAP_TYPE_PCF_SOFT");
                var m = "ENVMAP_TYPE_CUBE", g = "ENVMAP_MODE_REFLECTION", v = "ENVMAP_BLENDING_MULTIPLY";
                if (c.envMap) {
                    switch (u.envMap.mapping) {
                        case i.CubeReflectionMapping:
                        case i.CubeRefractionMapping:
                            m = "ENVMAP_TYPE_CUBE";
                            break;
                        case i.EquirectangularReflectionMapping:
                        case i.EquirectangularRefractionMapping:
                            m = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case i.SphericalReflectionMapping:
                            m = "ENVMAP_TYPE_SPHERE"
                    }
                    switch (u.envMap.mapping) {
                        case i.CubeRefractionMapping:
                        case i.EquirectangularRefractionMapping:
                            g = "ENVMAP_MODE_REFRACTION"
                    }
                    switch (u.combine) {
                        case i.MultiplyOperation:
                            v = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case i.MixOperation:
                            v = "ENVMAP_BLENDING_MIX";
                            break;
                        case i.AddOperation:
                            v = "ENVMAP_BLENDING_ADD"
                    }
                }
                var y, x, b = a.gammaFactor > 0 ? a.gammaFactor : 1, w = e(h), S = l.createProgram();
                u instanceof i.RawShaderMaterial ? (y = "", x = "") : (y = ["precision " + c.precision + " float;", "precision " + c.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, w, c.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", a.gammaInput ? "#define GAMMA_INPUT" : "", a.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + b, "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + g : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.displacementMap && c.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals && c.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + f : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(n).join("\n"), x = [c.bumpMap || c.normalMap || c.flatShading || u.derivatives ? "#extension GL_OES_standard_derivatives : enable" : "", c.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", "precision " + c.precision + " float;", "precision " + c.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, w, "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", a.gammaInput ? "#define GAMMA_INPUT" : "", a.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + b, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + m : "", c.envMap ? "#define " + g : "", c.envMap ? "#define " + v : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.metal ? "#define METAL" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + f : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(n).join("\n"));
                var M = y + p, T = x + d, _ = i.WebGLShader(l, l.VERTEX_SHADER, M), E = i.WebGLShader(l, l.FRAGMENT_SHADER, T);
                l.attachShader(S, _), l.attachShader(S, E), void 0 !== u.index0AttributeName ? l.bindAttribLocation(S, 0, u.index0AttributeName) : c.morphTargets === !0 && l.bindAttribLocation(S, 0, "position"), l.linkProgram(S);
                var C = l.getProgramInfoLog(S), A = l.getShaderInfoLog(_), L = l.getShaderInfoLog(E), P = !0, k = !0;
                l.getProgramParameter(S, l.LINK_STATUS) === !1 ? (P = !1, console.error("THREE.WebGLProgram: shader error: ", l.getError(), "gl.VALIDATE_STATUS", l.getProgramParameter(S, l.VALIDATE_STATUS), "gl.getProgramInfoLog", C, A, L)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : ("" === A || "" === L) && (k = !1), k && (this.diagnostics = {
                    runnable: P,
                    material: u,
                    programLog: C,
                    vertexShader: {log: A, prefix: y},
                    fragmentShader: {log: L, prefix: x}
                }), l.deleteShader(_), l.deleteShader(E);
                var D;
                this.getUniforms = function () {
                    return void 0 === D && (D = t(l, S)), D
                };
                var R;
                return this.getAttributes = function () {
                    return void 0 === R && (R = r(l, S)), R
                }, this.destroy = function () {
                    l.deleteProgram(S), this.program = void 0
                }, Object.defineProperties(this, {
                    uniforms: {
                        get: function () {
                            return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                        }
                    }, attributes: {
                        get: function () {
                            return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                        }
                    }
                }), this.id = o++, this.code = s, this.usedTimes = 1, this.program = S, this.vertexShader = _, this.fragmentShader = E, this
            }
        }(),i.WebGLPrograms = function (e, t) {
            function r(e) {
                if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture)return 1024;
                var r = t.maxVertexUniforms, n = Math.floor((r - 20) / 4), o = n;
                return void 0 !== e && e instanceof i.SkinnedMesh && (o = Math.min(e.skeleton.bones.length, o), o < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + o + " (try OpenGL instead of ANGLE)")), o
            }

            function n(e) {
                for (var t = 0, r = 0, n = 0, o = 0, a = 0, s = e.length; s > a; a++) {
                    var u = e[a];
                    u.visible !== !1 && (u instanceof i.DirectionalLight && t++, u instanceof i.PointLight && r++, u instanceof i.SpotLight && n++, u instanceof i.HemisphereLight && o++)
                }
                return {directional: t, point: r, spot: n, hemi: o}
            }

            function o(e) {
                for (var t = 0, r = 0, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    a.castShadow && ((a instanceof i.SpotLight || a instanceof i.DirectionalLight) && t++, a instanceof i.PointLight && (t++, r++))
                }
                return {maxShadows: t, pointLightShadows: r}
            }

            var a = [], s = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            }, u = ["precision", "supportsVertexTextures", "map", "envMap", "envMapMode", "lightMap", "aoMap", "emissiveMap", "bumpMap", "normalMap", "displacementMap", "specularMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "maxDirLights", "maxPointLights", "maxSpotLights", "maxHemiLights", "maxShadows", "shadowMapEnabled", "pointLightShadows", "shadowMapType", "shadowMapDebug", "alphaTest", "metal", "doubleSided", "flipSided"];
            this.getParameters = function (a, u, c, l) {
                var h = s[a.type], p = n(u), d = o(u), f = r(l), m = e.getPrecision();
                null !== a.precision && (m = t.getMaxPrecision(a.precision), m !== a.precision && console.warn("THREE.WebGLRenderer.initMaterial:", a.precision, "not supported, using", m, "instead."));
                var g = {
                    shaderID: h,
                    precision: m,
                    supportsVertexTextures: t.vertexTextures,
                    map: !!a.map,
                    envMap: !!a.envMap,
                    envMapMode: a.envMap && a.envMap.mapping,
                    lightMap: !!a.lightMap,
                    aoMap: !!a.aoMap,
                    emissiveMap: !!a.emissiveMap,
                    bumpMap: !!a.bumpMap,
                    normalMap: !!a.normalMap,
                    displacementMap: !!a.displacementMap,
                    specularMap: !!a.specularMap,
                    alphaMap: !!a.alphaMap,
                    combine: a.combine,
                    vertexColors: a.vertexColors,
                    fog: c,
                    useFog: a.fog,
                    fogExp: c instanceof i.FogExp2,
                    flatShading: a.shading === i.FlatShading,
                    sizeAttenuation: a.sizeAttenuation,
                    logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                    skinning: a.skinning,
                    maxBones: f,
                    useVertexTexture: t.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
                    morphTargets: a.morphTargets,
                    morphNormals: a.morphNormals,
                    maxMorphTargets: e.maxMorphTargets,
                    maxMorphNormals: e.maxMorphNormals,
                    maxDirLights: p.directional,
                    maxPointLights: p.point,
                    maxSpotLights: p.spot,
                    maxHemiLights: p.hemi,
                    maxShadows: d.maxShadows,
                    pointLightShadows: d.pointLightShadows,
                    shadowMapEnabled: e.shadowMap.enabled && l.receiveShadow && d.maxShadows > 0,
                    shadowMapType: e.shadowMap.type,
                    shadowMapDebug: e.shadowMap.debug,
                    alphaTest: a.alphaTest,
                    metal: a.metal,
                    doubleSided: a.side === i.DoubleSide,
                    flipSided: a.side === i.BackSide
                };
                return g
            }, this.getProgramCode = function (e, t) {
                var r = [];
                if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines)for (var n in e.defines)r.push(n), r.push(e.defines[n]);
                for (var i = 0; i < u.length; i++) {
                    var o = u[i];
                    r.push(o), r.push(t[o])
                }
                return r.join()
            }, this.acquireProgram = function (t, r, n) {
                for (var o, s = 0, u = a.length; u > s; s++) {
                    var c = a[s];
                    if (c.code === n) {
                        o = c, ++o.usedTimes;
                        break
                    }
                }
                return void 0 === o && (o = new i.WebGLProgram(e, n, t, r), a.push(o)), o
            }, this.releaseProgram = function (e) {
                if (0 === --e.usedTimes) {
                    var t = a.indexOf(e);
                    a[t] = a[a.length - 1], a.pop(), e.destroy()
                }
            }, this.programs = a
        },i.WebGLProperties = function () {
            var e = {};
            this.get = function (t) {
                var r = t.uuid, n = e[r];
                return void 0 === n && (n = {}, e[r] = n), n
            }, this["delete"] = function (t) {
                delete e[t.uuid]
            }, this.clear = function () {
                e = {}
            }
        },i.WebGLShader = function () {
            function e(e) {
                for (var t = e.split("\n"), r = 0; r < t.length; r++)t[r] = r + 1 + ": " + t[r];
                return t.join("\n")
            }

            return function (t, r, n) {
                var i = t.createShader(r);
                return t.shaderSource(i, n), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), e(n)), i
            }
        }(),i.WebGLShadowMap = function (e, t, r) {
            function n(e, t, r, n) {
                var o = e.geometry, a = null, s = g, u = e.customDepthMaterial;
                if (r && (s = v, u = e.customDistanceMaterial), u)a = u; else {
                    var c = void 0 !== o.morphTargets && o.morphTargets.length > 0 && t.morphTargets, l = e instanceof i.SkinnedMesh && t.skinning, h = 0;
                    c && (h |= d), l && (h |= f), a = s[h]
                }
                return a.visible = t.visible, a.wireframe = t.wireframe, a.wireframeLinewidth = t.wireframeLinewidth, r && void 0 !== a.uniforms.lightPos && a.uniforms.lightPos.value.copy(n), a
            }

            function o(e, t) {
                if (e.visible !== !1) {
                    if ((e instanceof i.Mesh || e instanceof i.Line || e instanceof i.Points) && e.castShadow && (e.frustumCulled === !1 || u.intersectsObject(e) === !0)) {
                        var r = e.material;
                        r.visible === !0 && (e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), p.push(e))
                    }
                    for (var n = e.children, a = 0, s = n.length; s > a; a++)o(n[a], t)
                }
            }

            for (var a = e.context, s = e.state, u = new i.Frustum, c = new i.Matrix4, l = (new i.Vector3, new i.Vector3, new i.Vector3), h = new i.Vector3, p = [], d = 1, f = 2, m = (d | f) + 1, g = new Array(m), v = new Array(m), y = [new i.Vector3(1, 0, 0), new i.Vector3(-1, 0, 0), new i.Vector3(0, 0, 1), new i.Vector3(0, 0, -1), new i.Vector3(0, 1, 0), new i.Vector3(0, -1, 0)], x = [new i.Vector3(0, 1, 0), new i.Vector3(0, 1, 0), new i.Vector3(0, 1, 0), new i.Vector3(0, 1, 0), new i.Vector3(0, 0, 1), new i.Vector3(0, 0, -1)], b = [new i.Vector4, new i.Vector4, new i.Vector4, new i.Vector4, new i.Vector4, new i.Vector4], w = new i.Vector4, S = i.ShaderLib.depthRGBA, M = i.UniformsUtils.clone(S.uniforms), T = i.ShaderLib.distanceRGBA, _ = i.UniformsUtils.clone(T.uniforms), E = 0; E !== m; ++E) {
                var C = 0 !== (E & d), A = 0 !== (E & f), L = new i.ShaderMaterial({
                    uniforms: M,
                    vertexShader: S.vertexShader,
                    fragmentShader: S.fragmentShader,
                    morphTargets: C,
                    skinning: A
                });
                L._shadowPass = !0, g[E] = L;
                var P = new i.ShaderMaterial({
                    uniforms: _,
                    vertexShader: T.vertexShader,
                    fragmentShader: T.fragmentShader,
                    morphTargets: C,
                    skinning: A
                });
                P._shadowPass = !0, v[E] = P
            }
            var k = this;
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = i.PCFShadowMap, this.cullFace = i.CullFaceFront, this.render = function (d) {
                var f, m;
                if (k.enabled !== !1 && (k.autoUpdate !== !1 || k.needsUpdate !== !1)) {
                    a.clearColor(1, 1, 1, 1), s.disable(a.BLEND), s.enable(a.CULL_FACE), a.frontFace(a.CCW), a.cullFace(k.cullFace === i.CullFaceFront ? a.FRONT : a.BACK), s.setDepthTest(!0), e.getViewport(w);
                    for (var g = 0, v = t.length; v > g; g++) {
                        var S = t[g];
                        if (S.castShadow === !0) {
                            var M = S.shadow, T = M.camera, _ = M.mapSize;
                            if (S instanceof i.PointLight) {
                                f = 6, m = !0;
                                var E = _.x / 4, C = _.y / 2;
                                b[0].set(2 * E, C, E, C), b[1].set(0, C, E, C), b[2].set(3 * E, C, E, C), b[3].set(E, C, E, C), b[4].set(3 * E, 0, E, C), b[5].set(E, 0, E, C)
                            } else f = 1, m = !1;
                            if (null === M.map) {
                                var A = i.LinearFilter;
                                k.type === i.PCFSoftShadowMap && (A = i.NearestFilter);
                                var L = {minFilter: A, magFilter: A, format: i.RGBAFormat};
                                M.map = new i.WebGLRenderTarget(_.x, _.y, L), M.matrix = new i.Matrix4, S instanceof i.SpotLight && (T.aspect = _.x / _.y), T.updateProjectionMatrix()
                            }
                            var P = M.map, D = M.matrix;
                            h.setFromMatrixPosition(S.matrixWorld), T.position.copy(h), e.setRenderTarget(P), e.clear();
                            for (var R = 0; f > R; R++) {
                                if (m) {
                                    l.copy(T.position), l.add(y[R]), T.up.copy(x[R]), T.lookAt(l);
                                    var O = b[R];
                                    e.setViewport(O.x, O.y, O.z, O.w)
                                } else l.setFromMatrixPosition(S.target.matrixWorld), T.lookAt(l);
                                T.updateMatrixWorld(), T.matrixWorldInverse.getInverse(T.matrixWorld), D.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), D.multiply(T.projectionMatrix), D.multiply(T.matrixWorldInverse), c.multiplyMatrices(T.projectionMatrix, T.matrixWorldInverse), u.setFromMatrix(c), p.length = 0, o(d, T);
                                for (var F = 0, V = p.length; V > F; F++) {
                                    var N = p[F], B = r.update(N), I = N.material;
                                    if (I instanceof i.MeshFaceMaterial)for (var U = B.groups, z = I.materials, G = 0, j = U.length; j > G; G++) {
                                        var H = U[G], W = z[H.materialIndex];
                                        if (W.visible === !0) {
                                            var X = n(N, W, m, h);
                                            e.renderBufferDirect(T, t, null, B, X, N, H)
                                        }
                                    } else {
                                        var X = n(N, I, m, h);
                                        e.renderBufferDirect(T, t, null, B, X, N, null)
                                    }
                                }
                            }
                            e.resetGLState()
                        }
                    }
                    e.setViewport(w.x, w.y, w.z, w.w);
                    var q = e.getClearColor(), Y = e.getClearAlpha();
                    e.setClearColor(q, Y), s.enable(a.BLEND), k.cullFace === i.CullFaceFront && a.cullFace(a.BACK), e.resetGLState(), k.needsUpdate = !1
                }
            }
        },i.WebGLState = function (e, t, r) {
            var n = this, o = new Uint8Array(16), a = new Uint8Array(16), s = new Uint8Array(16), u = {}, c = null, l = null, h = null, p = null, d = null, f = null, m = null, g = null, v = null, y = null, x = null, b = null, w = null, S = null, M = null, T = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), _ = void 0, E = {};
            this.init = function () {
                e.clearColor(0, 0, 0, 1), e.clearDepth(1), e.clearStencil(0), this.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.frontFace(e.CCW), e.cullFace(e.BACK), this.enable(e.CULL_FACE), this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
            }, this.initAttributes = function () {
                for (var e = 0, t = o.length; t > e; e++)o[e] = 0
            }, this.enableAttribute = function (r) {
                if (o[r] = 1, 0 === a[r] && (e.enableVertexAttribArray(r), a[r] = 1), 0 !== s[r]) {
                    var n = t.get("ANGLE_instanced_arrays");
                    n.vertexAttribDivisorANGLE(r, 0), s[r] = 0
                }
            }, this.enableAttributeAndDivisor = function (t, r, n) {
                o[t] = 1, 0 === a[t] && (e.enableVertexAttribArray(t), a[t] = 1), s[t] !== r && (n.vertexAttribDivisorANGLE(t, r), s[t] = r)
            }, this.disableUnusedAttributes = function () {
                for (var t = 0, r = a.length; r > t; t++)a[t] !== o[t] && (e.disableVertexAttribArray(t), a[t] = 0)
            }, this.enable = function (t) {
                u[t] !== !0 && (e.enable(t), u[t] = !0)
            }, this.disable = function (t) {
                u[t] !== !1 && (e.disable(t), u[t] = !1)
            }, this.getCompressedTextureFormats = function () {
                if (null === c && (c = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc")))for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), n = 0; n < r.length; n++)c.push(r[n]);
                return c
            }, this.setBlending = function (t, n, o, a, s, u, c) {
                t !== l && (t === i.NoBlending ? this.disable(e.BLEND) : t === i.AdditiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === i.SubtractiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === i.MultiplyBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : t === i.CustomBlending ? this.enable(e.BLEND) : (this.enable(e.BLEND), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), l = t), t === i.CustomBlending ? (s = s || n, u = u || o, c = c || a, (n !== h || s !== f) && (e.blendEquationSeparate(r(n), r(s)), h = n, f = s), (o !== p || a !== d || u !== m || c !== g) && (e.blendFuncSeparate(r(o), r(a), r(u), r(c)), p = o, d = a, m = u, g = c)) : (h = null, p = null, d = null, f = null, m = null, g = null)
            }, this.setDepthFunc = function (t) {
                if (v !== t) {
                    if (t)switch (t) {
                        case i.NeverDepth:
                            e.depthFunc(e.NEVER);
                            break;
                        case i.AlwaysDepth:
                            e.depthFunc(e.ALWAYS);
                            break;
                        case i.LessDepth:
                            e.depthFunc(e.LESS);
                            break;
                        case i.LessEqualDepth:
                            e.depthFunc(e.LEQUAL);
                            break;
                        case i.EqualDepth:
                            e.depthFunc(e.EQUAL);
                            break;
                        case i.GreaterEqualDepth:
                            e.depthFunc(e.GEQUAL);
                            break;
                        case i.GreaterDepth:
                            e.depthFunc(e.GREATER);
                            break;
                        case i.NotEqualDepth:
                            e.depthFunc(e.NOTEQUAL);
                            break;
                        default:
                            e.depthFunc(e.LEQUAL)
                    } else e.depthFunc(e.LEQUAL);
                    v = t
                }
            }, this.setDepthTest = function (t) {
                t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
            }, this.setDepthWrite = function (t) {
                y !== t && (e.depthMask(t), y = t)
            }, this.setColorWrite = function (t) {
                x !== t && (e.colorMask(t, t, t, t), x = t)
            }, this.setFlipSided = function (t) {
                b !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), b = t)
            }, this.setLineWidth = function (t) {
                t !== w && (e.lineWidth(t), w = t)
            }, this.setPolygonOffset = function (t, r, n) {
                t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL), !t || S === r && M === n || (e.polygonOffset(r, n), S = r, M = n)
            }, this.setScissorTest = function (t) {
                t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
            }, this.activeTexture = function (t) {
                void 0 === t && (t = e.TEXTURE0 + T - 1), _ !== t && (e.activeTexture(t), _ = t)
            }, this.bindTexture = function (t, r) {
                void 0 === _ && n.activeTexture();
                var i = E[_];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, E[_] = i), (i.type !== t || i.texture !== r) && (e.bindTexture(t, r), i.type = t, i.texture = r)
            }, this.compressedTexImage2D = function () {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, this.texImage2D = function () {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, this.reset = function () {
                for (var t = 0; t < a.length; t++)1 === a[t] && (e.disableVertexAttribArray(t), a[t] = 0);
                u = {}, c = null, l = null, y = null, x = null, b = null
            }
        },i.LensFlarePlugin = function (e, t) {
            function r() {
                var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                o = d.createBuffer(), a = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, o), d.bufferData(d.ARRAY_BUFFER, e, d.STATIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a), d.bufferData(d.ELEMENT_ARRAY_BUFFER, t, d.STATIC_DRAW), h = d.createTexture(), p = d.createTexture(), f.bindTexture(d.TEXTURE_2D, h), d.texImage2D(d.TEXTURE_2D, 0, d.RGB, 16, 16, 0, d.RGB, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), f.bindTexture(d.TEXTURE_2D, p), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 16, 16, 0, d.RGBA, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), l = d.getParameter(d.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
                var r;
                r = l ? {
                    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                } : {
                    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                }, s = n(r), u = {
                    vertex: d.getAttribLocation(s, "position"),
                    uv: d.getAttribLocation(s, "uv")
                }, c = {
                    renderType: d.getUniformLocation(s, "renderType"),
                    map: d.getUniformLocation(s, "map"),
                    occlusionMap: d.getUniformLocation(s, "occlusionMap"),
                    opacity: d.getUniformLocation(s, "opacity"),
                    color: d.getUniformLocation(s, "color"),
                    scale: d.getUniformLocation(s, "scale"),
                    rotation: d.getUniformLocation(s, "rotation"),
                    screenPosition: d.getUniformLocation(s, "screenPosition")
                }
            }

            function n(t) {
                var r = d.createProgram(), n = d.createShader(d.FRAGMENT_SHADER), i = d.createShader(d.VERTEX_SHADER), o = "precision " + e.getPrecision() + " float;\n";
                return d.shaderSource(n, o + t.fragmentShader), d.shaderSource(i, o + t.vertexShader), d.compileShader(n), d.compileShader(i), d.attachShader(r, n), d.attachShader(r, i), d.linkProgram(r), r
            }

            var o, a, s, u, c, l, h, p, d = e.context, f = e.state;
            this.render = function (n, m, g, v) {
                if (0 !== t.length) {
                    var y = new i.Vector3, x = v / g, b = .5 * g, w = .5 * v, S = 16 / v, M = new i.Vector2(S * x, S), T = new i.Vector3(1, 1, 0), _ = new i.Vector2(1, 1);
                    void 0 === s && r(), d.useProgram(s), f.initAttributes(), f.enableAttribute(u.vertex), f.enableAttribute(u.uv), f.disableUnusedAttributes(), d.uniform1i(c.occlusionMap, 0), d.uniform1i(c.map, 1), d.bindBuffer(d.ARRAY_BUFFER, o), d.vertexAttribPointer(u.vertex, 2, d.FLOAT, !1, 16, 0), d.vertexAttribPointer(u.uv, 2, d.FLOAT, !1, 16, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a), f.disable(d.CULL_FACE), d.depthMask(!1);
                    for (var E = 0, C = t.length; C > E; E++) {
                        S = 16 / v, M.set(S * x, S);
                        var A = t[E];
                        if (y.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), y.applyMatrix4(m.matrixWorldInverse), y.applyProjection(m.projectionMatrix), T.copy(y), _.x = T.x * b + b, _.y = T.y * w + w, l || _.x > 0 && _.x < g && _.y > 0 && _.y < v) {
                            f.activeTexture(d.TEXTURE0), f.bindTexture(d.TEXTURE_2D, null), f.activeTexture(d.TEXTURE1), f.bindTexture(d.TEXTURE_2D, h), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGB, _.x - 8, _.y - 8, 16, 16, 0), d.uniform1i(c.renderType, 0), d.uniform2f(c.scale, M.x, M.y), d.uniform3f(c.screenPosition, T.x, T.y, T.z), f.disable(d.BLEND), f.enable(d.DEPTH_TEST), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), f.activeTexture(d.TEXTURE0), f.bindTexture(d.TEXTURE_2D, p), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGBA, _.x - 8, _.y - 8, 16, 16, 0), d.uniform1i(c.renderType, 1), f.disable(d.DEPTH_TEST), f.activeTexture(d.TEXTURE1), f.bindTexture(d.TEXTURE_2D, h), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), A.positionScreen.copy(T), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), d.uniform1i(c.renderType, 2), f.enable(d.BLEND);
                            for (var L = 0, P = A.lensFlares.length; P > L; L++) {
                                var k = A.lensFlares[L];
                                k.opacity > .001 && k.scale > .001 && (T.x = k.x, T.y = k.y, T.z = k.z, S = k.size * k.scale / v, M.x = S * x, M.y = S, d.uniform3f(c.screenPosition, T.x, T.y, T.z), d.uniform2f(c.scale, M.x, M.y), d.uniform1f(c.rotation, k.rotation), d.uniform1f(c.opacity, k.opacity), d.uniform3f(c.color, k.color.r, k.color.g, k.color.b), f.setBlending(k.blending, k.blendEquation, k.blendSrc, k.blendDst), e.setTexture(k.texture, 1), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0))
                            }
                        }
                    }
                    f.enable(d.CULL_FACE), f.enable(d.DEPTH_TEST), d.depthMask(!0), e.resetGLState()
                }
            }
        },i.SpritePlugin = function (e, t) {
            function r() {
                var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                a = p.createBuffer(), s = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, a), p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, s), p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW), u = n(), c = {
                    position: p.getAttribLocation(u, "position"),
                    uv: p.getAttribLocation(u, "uv")
                }, l = {
                    uvOffset: p.getUniformLocation(u, "uvOffset"),
                    uvScale: p.getUniformLocation(u, "uvScale"),
                    rotation: p.getUniformLocation(u, "rotation"),
                    scale: p.getUniformLocation(u, "scale"),
                    color: p.getUniformLocation(u, "color"),
                    map: p.getUniformLocation(u, "map"),
                    opacity: p.getUniformLocation(u, "opacity"),
                    modelViewMatrix: p.getUniformLocation(u, "modelViewMatrix"),
                    projectionMatrix: p.getUniformLocation(u, "projectionMatrix"),
                    fogType: p.getUniformLocation(u, "fogType"),
                    fogDensity: p.getUniformLocation(u, "fogDensity"),
                    fogNear: p.getUniformLocation(u, "fogNear"),
                    fogFar: p.getUniformLocation(u, "fogFar"),
                    fogColor: p.getUniformLocation(u, "fogColor"),
                    alphaTest: p.getUniformLocation(u, "alphaTest")
                };
                var r = document.createElement("canvas");
                r.width = 8, r.height = 8;
                var o = r.getContext("2d");
                o.fillStyle = "white", o.fillRect(0, 0, 8, 8), h = new i.Texture(r), h.needsUpdate = !0
            }

            function n() {
                var t = p.createProgram(), r = p.createShader(p.VERTEX_SHADER), n = p.createShader(p.FRAGMENT_SHADER);
                return p.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), p.shaderSource(n, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), p.compileShader(r), p.compileShader(n), p.attachShader(t, r), p.attachShader(t, n), p.linkProgram(t), t
            }

            function o(e, t) {
                return e.z !== t.z ? t.z - e.z : t.id - e.id
            }

            var a, s, u, c, l, h, p = e.context, d = e.state, f = new i.Vector3, m = new i.Quaternion, g = new i.Vector3;
            this.render = function (n, v) {
                if (0 !== t.length) {
                    void 0 === u && r(), p.useProgram(u), d.initAttributes(), d.enableAttribute(c.position), d.enableAttribute(c.uv), d.disableUnusedAttributes(), d.disable(p.CULL_FACE), d.enable(p.BLEND), p.bindBuffer(p.ARRAY_BUFFER, a), p.vertexAttribPointer(c.position, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(c.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, s), p.uniformMatrix4fv(l.projectionMatrix, !1, v.projectionMatrix.elements), d.activeTexture(p.TEXTURE0), p.uniform1i(l.map, 0);
                    var y = 0, x = 0, b = n.fog;
                    b ? (p.uniform3f(l.fogColor, b.color.r, b.color.g, b.color.b), b instanceof i.Fog ? (p.uniform1f(l.fogNear, b.near), p.uniform1f(l.fogFar, b.far), p.uniform1i(l.fogType, 1), y = 1, x = 1) : b instanceof i.FogExp2 && (p.uniform1f(l.fogDensity, b.density), p.uniform1i(l.fogType, 2), y = 2, x = 2)) : (p.uniform1i(l.fogType, 0), y = 0, x = 0);
                    for (var w = 0, S = t.length; S > w; w++) {
                        var M = t[w];
                        M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
                    }
                    t.sort(o);
                    for (var T = [], w = 0, S = t.length; S > w; w++) {
                        var M = t[w], _ = M.material;
                        p.uniform1f(l.alphaTest, _.alphaTest), p.uniformMatrix4fv(l.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(f, m, g), T[0] = g.x, T[1] = g.y;
                        var E = 0;
                        n.fog && _.fog && (E = x), y !== E && (p.uniform1i(l.fogType, E), y = E), null !== _.map ? (p.uniform2f(l.uvOffset, _.map.offset.x, _.map.offset.y), p.uniform2f(l.uvScale, _.map.repeat.x, _.map.repeat.y)) : (p.uniform2f(l.uvOffset, 0, 0), p.uniform2f(l.uvScale, 1, 1)), p.uniform1f(l.opacity, _.opacity), p.uniform3f(l.color, _.color.r, _.color.g, _.color.b), p.uniform1f(l.rotation, _.rotation), p.uniform2fv(l.scale, T), d.setBlending(_.blending, _.blendEquation, _.blendSrc, _.blendDst), d.setDepthTest(_.depthTest), d.setDepthWrite(_.depthWrite), _.map && _.map.image && _.map.image.width ? e.setTexture(_.map, 0) : e.setTexture(h, 0), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0)
                    }
                    d.enable(p.CULL_FACE), e.resetGLState()
                }
            }
        },i.CurveUtils = {
            tangentQuadraticBezier: function (e, t, r, n) {
                return 2 * (1 - e) * (r - t) + 2 * e * (n - r)
            }, tangentCubicBezier: function (e, t, r, n, i) {
                return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * n * (1 - e) - 3 * e * e * n + 3 * e * e * i
            }, tangentSpline: function (e, t, r, n, i) {
                var o = 6 * e * e - 6 * e, a = 3 * e * e - 4 * e + 1, s = -6 * e * e + 6 * e, u = 3 * e * e - 2 * e;
                return o + a + s + u
            }, interpolate: function (e, t, r, n, i) {
                var o = .5 * (r - e), a = .5 * (n - t), s = i * i, u = i * s;
                return (2 * t - 2 * r + o + a) * u + (-3 * t + 3 * r - 2 * o - a) * s + o * i + t
            }
        },i.GeometryUtils = {
            merge: function (e, t, r) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var n;
                t instanceof i.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), n = t.matrix, t = t.geometry), e.merge(t, n, r)
            }, center: function (e) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
            }
        },i.ImageUtils = {
            crossOrigin: void 0, loadTexture: function (e, t, r, n) {
                console.warn("THREE.ImageUtils.loadTexture is being deprecated. Use THREE.TextureLoader() instead.");
                var o = new i.TextureLoader;
                o.setCrossOrigin(this.crossOrigin);
                var a = o.load(e, r, void 0, n);
                return t && (a.mapping = t), a
            }, loadTextureCube: function (e, t, r, n) {
                console.warn("THREE.ImageUtils.loadTextureCube is being deprecated. Use THREE.CubeTextureLoader() instead.");
                var o = new i.CubeTextureLoader;
                o.setCrossOrigin(this.crossOrigin);
                var a = o.load(e, r, void 0, n);
                return t && (a.mapping = t), a
            }, loadCompressedTexture: function () {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            }, loadCompressedTextureCube: function () {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }
        },i.SceneUtils = {
            createMultiMaterialObject: function (e, t) {
                for (var r = new i.Group, n = 0, o = t.length; o > n; n++)r.add(new i.Mesh(e, t[n]));
                return r
            }, detach: function (e, t, r) {
                e.applyMatrix(t.matrixWorld), t.remove(e), r.add(e)
            }, attach: function (e, t, r) {
                var n = new i.Matrix4;
                n.getInverse(r.matrixWorld), e.applyMatrix(n), t.remove(e), r.add(e)
            }
        },i.ShapeUtils = {
            area: function (e) {
                for (var t = e.length, r = 0, n = t - 1, i = 0; t > i; n = i++)r += e[n].x * e[i].y - e[i].x * e[n].y;
                return .5 * r
            }, triangulate: function () {
                function e(e, t, r, n, i, o) {
                    var a, s, u, c, l, h, p, d, f;
                    if (s = e[o[t]].x, u = e[o[t]].y, c = e[o[r]].x, l = e[o[r]].y, h = e[o[n]].x, p = e[o[n]].y, Number.EPSILON > (c - s) * (p - u) - (l - u) * (h - s))return !1;
                    var m, g, v, y, x, b, w, S, M, T, _, E, C, A, L;
                    for (m = h - c, g = p - l, v = s - h, y = u - p, x = c - s, b = l - u, a = 0; i > a; a++)if (d = e[o[a]].x, f = e[o[a]].y, !(d === s && f === u || d === c && f === l || d === h && f === p) && (w = d - s, S = f - u, M = d - c, T = f - l, _ = d - h, E = f - p, L = m * T - g * M, C = x * S - b * w, A = v * E - y * _, L >= -Number.EPSILON && A >= -Number.EPSILON && C >= -Number.EPSILON))return !1;
                    return !0
                }

                return function (t, r) {
                    var n = t.length;
                    if (3 > n)return null;
                    var o, a, s, u = [], c = [], l = [];
                    if (i.ShapeUtils.area(t) > 0)for (a = 0; n > a; a++)c[a] = a; else for (a = 0; n > a; a++)c[a] = n - 1 - a;
                    var h = n, p = 2 * h;
                    for (a = h - 1; h > 2;) {
                        if (p-- <= 0)return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), r ? l : u;
                        if (o = a, o >= h && (o = 0), a = o + 1, a >= h && (a = 0), s = a + 1, s >= h && (s = 0), e(t, o, a, s, h, c)) {
                            var d, f, m, g, v;
                            for (d = c[o], f = c[a], m = c[s], u.push([t[d], t[f], t[m]]), l.push([c[o], c[a], c[s]]), g = a, v = a + 1; h > v; g++, v++)c[g] = c[v];
                            h--, p = 2 * h
                        }
                    }
                    return r ? l : u
                }
            }(), triangulateShape: function (e, t) {
                function r(e, t, r) {
                    return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y
                }

                function n(e, t, n, i, o) {
                    var a = t.x - e.x, s = t.y - e.y, u = i.x - n.x, c = i.y - n.y, l = e.x - n.x, h = e.y - n.y, p = s * u - a * c, d = s * l - a * h;
                    if (Math.abs(p) > Number.EPSILON) {
                        var f;
                        if (p > 0) {
                            if (0 > d || d > p)return [];
                            if (f = c * l - u * h, 0 > f || f > p)return []
                        } else {
                            if (d > 0 || p > d)return [];
                            if (f = c * l - u * h, f > 0 || p > f)return []
                        }
                        if (0 === f)return !o || 0 !== d && d !== p ? [e] : [];
                        if (f === p)return !o || 0 !== d && d !== p ? [t] : [];
                        if (0 === d)return [n];
                        if (d === p)return [i];
                        var m = f / p;
                        return [{x: e.x + m * a, y: e.y + m * s}]
                    }
                    if (0 !== d || c * l !== u * h)return [];
                    var g = 0 === a && 0 === s, v = 0 === u && 0 === c;
                    if (g && v)return e.x !== n.x || e.y !== n.y ? [] : [e];
                    if (g)return r(n, i, e) ? [e] : [];
                    if (v)return r(e, t, n) ? [n] : [];
                    var y, x, b, w, S, M, T, _;
                    return 0 !== a ? (e.x < t.x ? (y = e, b = e.x, x = t, w = t.x) : (y = t, b = t.x, x = e, w = e.x), n.x < i.x ? (S = n, T = n.x, M = i, _ = i.x) : (S = i, T = i.x, M = n, _ = n.x)) : (e.y < t.y ? (y = e, b = e.y, x = t, w = t.y) : (y = t, b = t.y, x = e, w = e.y), n.y < i.y ? (S = n, T = n.y, M = i, _ = i.y) : (S = i, T = i.y, M = n, _ = n.y)), T >= b ? T > w ? [] : w === T ? o ? [] : [S] : _ >= w ? [S, x] : [S, M] : b > _ ? [] : b === _ ? o ? [] : [y] : _ >= w ? [y, x] : [y, M]
                }

                function o(e, t, r, n) {
                    var i = t.x - e.x, o = t.y - e.y, a = r.x - e.x, s = r.y - e.y, u = n.x - e.x, c = n.y - e.y, l = i * s - o * a, h = i * c - o * u;
                    if (Math.abs(l) > Number.EPSILON) {
                        var p = u * s - c * a;
                        return l > 0 ? h >= 0 && p >= 0 : h >= 0 || p >= 0
                    }
                    return h > 0
                }

                function a(e, t) {
                    function r(e, t) {
                        var r = y.length - 1, n = e - 1;
                        0 > n && (n = r);
                        var i = e + 1;
                        i > r && (i = 0);
                        var a = o(y[e], y[n], y[i], s[t]);
                        if (!a)return !1;
                        var u = s.length - 1, c = t - 1;
                        0 > c && (c = u);
                        var l = t + 1;
                        return l > u && (l = 0), a = o(s[t], s[c], s[l], y[e]), a ? !0 : !1
                    }

                    function i(e, t) {
                        var r, i, o;
                        for (r = 0; r < y.length; r++)if (i = r + 1, i %= y.length, o = n(e, t, y[r], y[i], !0), o.length > 0)return !0;
                        return !1
                    }

                    function a(e, r) {
                        var i, o, a, s, u;
                        for (i = 0; i < x.length; i++)for (o = t[x[i]], a = 0; a < o.length; a++)if (s = a + 1, s %= o.length, u = n(e, r, o[a], o[s], !0), u.length > 0)return !0;
                        return !1
                    }

                    for (var s, u, c, l, h, p, d, f, m, g, v, y = e.concat(), x = [], b = [], w = 0, S = t.length; S > w; w++)x.push(w);
                    for (var M = 0, T = 2 * x.length; x.length > 0;) {
                        if (T--, 0 > T) {
                            console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                            break
                        }
                        for (c = M; c < y.length; c++) {
                            l = y[c], u = -1;
                            for (var w = 0; w < x.length; w++)if (p = x[w], d = l.x + ":" + l.y + ":" + p, void 0 === b[d]) {
                                s = t[p];
                                for (var _ = 0; _ < s.length; _++)if (h = s[_], r(c, _) && !i(l, h) && !a(l, h)) {
                                    u = _, x.splice(w, 1), f = y.slice(0, c + 1), m = y.slice(c), g = s.slice(u), v = s.slice(0, u + 1), y = f.concat(g).concat(v).concat(m), M = c;
                                    break
                                }
                                if (u >= 0)break;
                                b[d] = !0
                            }
                            if (u >= 0)break
                        }
                    }
                    return y
                }

                for (var s, u, c, l, h, p, d = {}, f = e.concat(), m = 0, g = t.length; g > m; m++)Array.prototype.push.apply(f, t[m]);
                for (s = 0, u = f.length; u > s; s++)h = f[s].x + ":" + f[s].y, void 0 !== d[h] && console.warn("THREE.Shape: Duplicate point", h), d[h] = s;
                var v = a(e, t), y = i.ShapeUtils.triangulate(v, !1);
                for (s = 0, u = y.length; u > s; s++)for (l = y[s], c = 0; 3 > c; c++)h = l[c].x + ":" + l[c].y, p = d[h], void 0 !== p && (l[c] = p);
                return y.concat()
            }, isClockWise: function (e) {
                return i.ShapeUtils.area(e) < 0
            }, b2: function () {
                function e(e, t) {
                    var r = 1 - e;
                    return r * r * t
                }

                function t(e, t) {
                    return 2 * (1 - e) * e * t
                }

                function r(e, t) {
                    return e * e * t
                }

                return function (n, i, o, a) {
                    return e(n, i) + t(n, o) + r(n, a)
                }
            }(), b3: function () {
                function e(e, t) {
                    var r = 1 - e;
                    return r * r * r * t
                }

                function t(e, t) {
                    var r = 1 - e;
                    return 3 * r * r * e * t
                }

                function r(e, t) {
                    var r = 1 - e;
                    return 3 * r * e * e * t
                }

                function n(e, t) {
                    return e * e * e * t
                }

                return function (i, o, a, s, u) {
                    return e(i, o) + t(i, a) + r(i, s) + n(i, u)
                }
            }()
        },i.Audio = function (e) {
            i.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1
        },i.Audio.prototype = Object.create(i.Object3D.prototype),i.Audio.prototype.constructor = i.Audio,i.Audio.prototype.load = function (e) {
            var t = this, r = new XMLHttpRequest;
            return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function (e) {
                t.context.decodeAudioData(this.response, function (e) {
                    t.source.buffer = e, t.autoplay && t.play()
                })
            }, r.send(), this
        },i.Audio.prototype.play = function () {
            if (this.isPlaying === !0)return void console.warn("THREE.Audio: Audio is already playing.");
            var e = this.context.createBufferSource();
            e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
        },i.Audio.prototype.pause = function () {
            this.source.stop(), this.startTime = this.context.currentTime
        },i.Audio.prototype.stop = function () {
            this.source.stop(), this.startTime = 0
        },i.Audio.prototype.connect = function () {
            void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner)
        },i.Audio.prototype.disconnect = function () {
            void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner)
        },i.Audio.prototype.setFilter = function (e) {
            this.isPlaying === !0 ? (this.disconnect(), this.filter = e, this.connect()) : this.filter = e
        },i.Audio.prototype.getFilter = function () {
            return this.filter
        },i.Audio.prototype.setPlaybackRate = function (e) {
            this.playbackRate = e, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate)
        },i.Audio.prototype.getPlaybackRate = function () {
            return this.playbackRate
        },i.Audio.prototype.onEnded = function () {
            this.isPlaying = !1
        },i.Audio.prototype.setLoop = function (e) {
            this.source.loop = e
        },i.Audio.prototype.getLoop = function () {
            return this.source.loop
        },i.Audio.prototype.setRefDistance = function (e) {
            this.panner.refDistance = e
        },i.Audio.prototype.getRefDistance = function () {
            return this.panner.refDistance
        },i.Audio.prototype.setRolloffFactor = function (e) {
            this.panner.rolloffFactor = e
        },i.Audio.prototype.getRolloffFactor = function () {
            return this.panner.rolloffFactor
        },i.Audio.prototype.setVolume = function (e) {
            this.gain.gain.value = e
        },i.Audio.prototype.getVolume = function () {
            return this.gain.gain.value
        },i.Audio.prototype.updateMatrixWorld = function () {
            var e = new i.Vector3;
            return function (t) {
                i.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
            }
        }(),i.AudioListener = function () {
            i.Object3D.call(this), this.type = "AudioListener", this.context = new (window.AudioContext || window.webkitAudioContext)
        },i.AudioListener.prototype = Object.create(i.Object3D.prototype),i.AudioListener.prototype.constructor = i.AudioListener,i.AudioListener.prototype.updateMatrixWorld = function () {
            var e = new i.Vector3, t = new i.Quaternion, r = new i.Vector3, n = new i.Vector3;
            return function (o) {
                i.Object3D.prototype.updateMatrixWorld.call(this, o);
                var a = this.context.listener, s = this.up;
                this.matrixWorld.decompose(e, t, r), n.set(0, 0, -1).applyQuaternion(t), a.setPosition(e.x, e.y, e.z), a.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z)
            }
        }(),i.Curve = function () {
        },i.Curve.prototype = {
            constructor: i.Curve, getPoint: function (e) {
                return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
            }, getPointAt: function (e) {
                var t = this.getUtoTmapping(e);
                return this.getPoint(t)
            }, getPoints: function (e) {
                e || (e = 5);
                var t, r = [];
                for (t = 0; e >= t; t++)r.push(this.getPoint(t / e));
                return r
            }, getSpacedPoints: function (e) {
                e || (e = 5);
                var t, r = [];
                for (t = 0; e >= t; t++)r.push(this.getPointAt(t / e));
                return r
            }, getLength: function () {
                var e = this.getLengths();
                return e[e.length - 1]
            }, getLengths: function (e) {
                if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)return this.cacheArcLengths;
                this.needsUpdate = !1;
                var t, r, n = [], i = this.getPoint(0), o = 0;
                for (n.push(0), r = 1; e >= r; r++)t = this.getPoint(r / e), o += t.distanceTo(i), n.push(o), i = t;
                return this.cacheArcLengths = n, n
            }, updateArcLengths: function () {
                this.needsUpdate = !0, this.getLengths()
            }, getUtoTmapping: function (e, t) {
                var r, n = this.getLengths(), i = 0, o = n.length;
                r = t ? t : e * n[o - 1];
                for (var a, s = 0, u = o - 1; u >= s;)if (i = Math.floor(s + (u - s) / 2), a = n[i] - r, 0 > a)s = i + 1; else {
                    if (!(a > 0)) {
                        u = i;
                        break
                    }
                    u = i - 1
                }
                if (i = u, n[i] === r) {
                    var c = i / (o - 1);
                    return c
                }
                var l = n[i], h = n[i + 1], p = h - l, d = (r - l) / p, c = (i + d) / (o - 1);
                return c
            }, getTangent: function (e) {
                var t = 1e-4, r = e - t, n = e + t;
                0 > r && (r = 0), n > 1 && (n = 1);
                var i = this.getPoint(r), o = this.getPoint(n), a = o.clone().sub(i);
                return a.normalize()
            }, getTangentAt: function (e) {
                var t = this.getUtoTmapping(e);
                return this.getTangent(t)
            }
        },i.Curve.Utils = i.CurveUtils,i.Curve.create = function (e, t) {
            return e.prototype = Object.create(i.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
        },i.CurvePath = function () {
            this.curves = [], this.autoClose = !1
        },i.CurvePath.prototype = Object.create(i.Curve.prototype),i.CurvePath.prototype.constructor = i.CurvePath,i.CurvePath.prototype.add = function (e) {
            this.curves.push(e)
        },i.CurvePath.prototype.closePath = function () {
            var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new i.LineCurve(t, e))
        },i.CurvePath.prototype.getPoint = function (e) {
            for (var t = e * this.getLength(), r = this.getCurveLengths(), n = 0; n < r.length;) {
                if (r[n] >= t) {
                    var i = r[n] - t, o = this.curves[n], a = 1 - i / o.getLength();
                    return o.getPointAt(a)
                }
                n++
            }
            return null
        },i.CurvePath.prototype.getLength = function () {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        },i.CurvePath.prototype.getCurveLengths = function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)return this.cacheLengths;
            for (var e = [], t = 0, r = 0, n = this.curves.length; n > r; r++)t += this.curves[r].getLength(), e.push(t);
            return this.cacheLengths = e, e
        },i.CurvePath.prototype.createPointsGeometry = function (e) {
            var t = this.getPoints(e, !0);
            return this.createGeometry(t)
        },i.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
            var t = this.getSpacedPoints(e, !0);
            return this.createGeometry(t)
        },i.CurvePath.prototype.createGeometry = function (e) {
            for (var t = new i.Geometry, r = 0, n = e.length; n > r; r++) {
                var o = e[r];
                t.vertices.push(new i.Vector3(o.x, o.y, o.z || 0))
            }
            return t
        },i.Path = function (e) {
            i.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
        },i.Path.prototype = Object.create(i.CurvePath.prototype),i.Path.prototype.constructor = i.Path,i.Path.prototype.fromPoints = function (e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, r = e.length; r > t; t++)this.lineTo(e[t].x, e[t].y)
        },i.Path.prototype.moveTo = function (e, t) {
            this.actions.push({action: "moveTo", args: [e, t]})
        },i.Path.prototype.lineTo = function (e, t) {
            var r = this.actions[this.actions.length - 1].args, n = r[r.length - 2], o = r[r.length - 1], a = new i.LineCurve(new i.Vector2(n, o), new i.Vector2(e, t));
            this.curves.push(a), this.actions.push({action: "lineTo", args: [e, t]})
        },i.Path.prototype.quadraticCurveTo = function (e, t, r, n) {
            var o = this.actions[this.actions.length - 1].args, a = o[o.length - 2], s = o[o.length - 1], u = new i.QuadraticBezierCurve(new i.Vector2(a, s), new i.Vector2(e, t), new i.Vector2(r, n));
            this.curves.push(u), this.actions.push({action: "quadraticCurveTo", args: [e, t, r, n]})
        },i.Path.prototype.bezierCurveTo = function (e, t, r, n, o, a) {
            var s = this.actions[this.actions.length - 1].args, u = s[s.length - 2], c = s[s.length - 1], l = new i.CubicBezierCurve(new i.Vector2(u, c), new i.Vector2(e, t), new i.Vector2(r, n), new i.Vector2(o, a));
            this.curves.push(l), this.actions.push({action: "bezierCurveTo", args: [e, t, r, n, o, a]})
        },i.Path.prototype.splineThru = function (e) {
            var t = Array.prototype.slice.call(arguments), r = this.actions[this.actions.length - 1].args, n = r[r.length - 2], o = r[r.length - 1], a = [new i.Vector2(n, o)];
            Array.prototype.push.apply(a, e);
            var s = new i.SplineCurve(a);
            this.curves.push(s), this.actions.push({action: "splineThru", args: t})
        },i.Path.prototype.arc = function (e, t, r, n, i, o) {
            var a = this.actions[this.actions.length - 1].args, s = a[a.length - 2], u = a[a.length - 1];
            this.absarc(e + s, t + u, r, n, i, o)
        },i.Path.prototype.absarc = function (e, t, r, n, i, o) {
            this.absellipse(e, t, r, r, n, i, o)
        },i.Path.prototype.ellipse = function (e, t, r, n, i, o, a, s) {
            var u = this.actions[this.actions.length - 1].args, c = u[u.length - 2], l = u[u.length - 1];
            this.absellipse(e + c, t + l, r, n, i, o, a, s)
        },i.Path.prototype.absellipse = function (e, t, r, n, o, a, s, u) {
            var c = [e, t, r, n, o, a, s, u || 0], l = new i.EllipseCurve(e, t, r, n, o, a, s, u);
            this.curves.push(l);
            var h = l.getPoint(1);
            c.push(h.x), c.push(h.y), this.actions.push({action: "ellipse", args: c})
        },i.Path.prototype.getSpacedPoints = function (e, t) {
            e || (e = 40);
            for (var r = [], n = 0; e > n; n++)r.push(this.getPoint(n / e));
            return r
        },i.Path.prototype.getPoints = function (e, t) {
            e = e || 12;
            for (var r, n, o, a, s, u, c, l, h, p, d, f = i.ShapeUtils.b2, m = i.ShapeUtils.b3, g = [], v = 0, y = this.actions.length; y > v; v++) {
                var x = this.actions[v], b = x.action, w = x.args;
                switch (b) {
                    case"moveTo":
                        g.push(new i.Vector2(w[0], w[1]));
                        break;
                    case"lineTo":
                        g.push(new i.Vector2(w[0], w[1]));
                        break;
                    case"quadraticCurveTo":
                        r = w[2], n = w[3], s = w[0], u = w[1], g.length > 0 ? (h = g[g.length - 1], c = h.x, l = h.y) : (h = this.actions[v - 1].args, c = h[h.length - 2], l = h[h.length - 1]);
                        for (var S = 1; e >= S; S++) {
                            var M = S / e;
                            p = f(M, c, s, r), d = f(M, l, u, n), g.push(new i.Vector2(p, d))
                        }
                        break;
                    case"bezierCurveTo":
                        r = w[4], n = w[5], s = w[0], u = w[1], o = w[2], a = w[3], g.length > 0 ? (h = g[g.length - 1], c = h.x, l = h.y) : (h = this.actions[v - 1].args, c = h[h.length - 2], l = h[h.length - 1]);
                        for (var S = 1; e >= S; S++) {
                            var M = S / e;
                            p = m(M, c, s, o, r), d = m(M, l, u, a, n), g.push(new i.Vector2(p, d))
                        }
                        break;
                    case"splineThru":
                        h = this.actions[v - 1].args;
                        var T = new i.Vector2(h[h.length - 2], h[h.length - 1]), _ = [T], E = e * w[0].length;
                        _ = _.concat(w[0]);
                        for (var C = new i.SplineCurve(_), S = 1; E >= S; S++)g.push(C.getPointAt(S / E));
                        break;
                    case"arc":
                        for (var A, L = w[0], P = w[1], k = w[2], D = w[3], R = w[4], O = !!w[5], F = R - D, V = 2 * e, S = 1; V >= S; S++) {
                            var M = S / V;
                            O || (M = 1 - M), A = D + M * F, p = L + k * Math.cos(A), d = P + k * Math.sin(A), g.push(new i.Vector2(p, d))
                        }
                        break;
                    case"ellipse":
                        var A, N, B, L = w[0], P = w[1], I = w[2], U = w[3], D = w[4], R = w[5], O = !!w[6], z = w[7], F = R - D, V = 2 * e;
                        0 !== z && (N = Math.cos(z), B = Math.sin(z));
                        for (var S = 1; V >= S; S++) {
                            var M = S / V;
                            if (O || (M = 1 - M), A = D + M * F, p = L + I * Math.cos(A), d = P + U * Math.sin(A), 0 !== z) {
                                var G = p, j = d;
                                p = (G - L) * N - (j - P) * B + L, d = (G - L) * B + (j - P) * N + P
                            }
                            g.push(new i.Vector2(p, d))
                        }
                }
            }
            var H = g[g.length - 1];
            return Math.abs(H.x - g[0].x) < Number.EPSILON && Math.abs(H.y - g[0].y) < Number.EPSILON && g.splice(g.length - 1, 1), t && g.push(g[0]), g
        },i.Path.prototype.toShapes = function (e, t) {
            function r(e) {
                for (var t = [], r = new i.Path, n = 0, o = e.length; o > n; n++) {
                    var a = e[n], s = a.args, u = a.action;
                    "moveTo" === u && 0 !== r.actions.length && (t.push(r), r = new i.Path), r[u].apply(r, s)
                }
                return 0 !== r.actions.length && t.push(r), t
            }

            function n(e) {
                for (var t = [], r = 0, n = e.length; n > r; r++) {
                    var o = e[r], a = new i.Shape;
                    a.actions = o.actions, a.curves = o.curves, t.push(a)
                }
                return t
            }

            function o(e, t) {
                for (var r = t.length, n = !1, i = r - 1, o = 0; r > o; i = o++) {
                    var a = t[i], s = t[o], u = s.x - a.x, c = s.y - a.y;
                    if (Math.abs(c) > Number.EPSILON) {
                        if (0 > c && (a = t[o], u = -u, s = t[i], c = -c), e.y < a.y || e.y > s.y)continue;
                        if (e.y === a.y) {
                            if (e.x === a.x)return !0
                        } else {
                            var l = c * (e.x - a.x) - u * (e.y - a.y);
                            if (0 === l)return !0;
                            if (0 > l)continue;
                            n = !n
                        }
                    } else {
                        if (e.y !== a.y)continue;
                        if (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x)return !0
                    }
                }
                return n
            }

            var a = i.ShapeUtils.isClockWise, s = r(this.actions);
            if (0 === s.length)return [];
            if (t === !0)return n(s);
            var u, c, l, h = [];
            if (1 === s.length)return c = s[0], l = new i.Shape, l.actions = c.actions, l.curves = c.curves, h.push(l), h;
            var p = !a(s[0].getPoints());
            p = e ? !p : p;
            var d, f = [], m = [], g = [], v = 0;
            m[v] = void 0, g[v] = [];
            for (var y = 0, x = s.length; x > y; y++)c = s[y], d = c.getPoints(), u = a(d), u = e ? !u : u, u ? (!p && m[v] && v++, m[v] = {
                s: new i.Shape,
                p: d
            }, m[v].s.actions = c.actions, m[v].s.curves = c.curves, p && v++, g[v] = []) : g[v].push({h: c, p: d[0]});
            if (!m[0])return n(s);
            if (m.length > 1) {
                for (var b = !1, w = [], S = 0, M = m.length; M > S; S++)f[S] = [];
                for (var S = 0, M = m.length; M > S; S++)for (var T = g[S], _ = 0; _ < T.length; _++) {
                    for (var E = T[_], C = !0, A = 0; A < m.length; A++)o(E.p, m[A].p) && (S !== A && w.push({
                        froms: S,
                        tos: A,
                        hole: _
                    }), C ? (C = !1, f[A].push(E)) : b = !0);
                    C && f[S].push(E)
                }
                w.length > 0 && (b || (g = f))
            }
            for (var L, y = 0, P = m.length; P > y; y++) {
                l = m[y].s, h.push(l), L = g[y];
                for (var k = 0, D = L.length; D > k; k++)l.holes.push(L[k].h)
            }
            return h
        },i.Shape = function () {
            i.Path.apply(this, arguments), this.holes = []
        },i.Shape.prototype = Object.create(i.Path.prototype),i.Shape.prototype.constructor = i.Shape,i.Shape.prototype.extrude = function (e) {
            return new i.ExtrudeGeometry(this, e)
        },i.Shape.prototype.makeGeometry = function (e) {
            return new i.ShapeGeometry(this, e)
        },i.Shape.prototype.getPointsHoles = function (e) {
            for (var t = [], r = 0, n = this.holes.length; n > r; r++)t[r] = this.holes[r].getPoints(e);
            return t
        },i.Shape.prototype.extractAllPoints = function (e) {
            return {shape: this.getPoints(e), holes: this.getPointsHoles(e)}
        },i.Shape.prototype.extractPoints = function (e) {
            return this.extractAllPoints(e)
        },i.Shape.Utils = i.ShapeUtils,i.LineCurve = function (e, t) {
            this.v1 = e, this.v2 = t
        },i.LineCurve.prototype = Object.create(i.Curve.prototype),i.LineCurve.prototype.constructor = i.LineCurve,i.LineCurve.prototype.getPoint = function (e) {
            var t = this.v2.clone().sub(this.v1);
            return t.multiplyScalar(e).add(this.v1), t
        },i.LineCurve.prototype.getPointAt = function (e) {
            return this.getPoint(e)
        },i.LineCurve.prototype.getTangent = function (e) {
            var t = this.v2.clone().sub(this.v1);
            return t.normalize()
        },i.QuadraticBezierCurve = function (e, t, r) {
            this.v0 = e, this.v1 = t, this.v2 = r
        },i.QuadraticBezierCurve.prototype = Object.create(i.Curve.prototype),i.QuadraticBezierCurve.prototype.constructor = i.QuadraticBezierCurve,i.QuadraticBezierCurve.prototype.getPoint = function (e) {
            var t = i.ShapeUtils.b2;
            return new i.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
        },i.QuadraticBezierCurve.prototype.getTangent = function (e) {
            var t = i.CurveUtils.tangentQuadraticBezier;
            return new i.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
        },i.CubicBezierCurve = function (e, t, r, n) {
            this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
        },i.CubicBezierCurve.prototype = Object.create(i.Curve.prototype),i.CubicBezierCurve.prototype.constructor = i.CubicBezierCurve,i.CubicBezierCurve.prototype.getPoint = function (e) {
            var t = i.ShapeUtils.b3;
            return new i.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
        },i.CubicBezierCurve.prototype.getTangent = function (e) {
            var t = i.CurveUtils.tangentCubicBezier;
            return new i.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
        },i.SplineCurve = function (e) {
            this.points = void 0 == e ? [] : e
        },i.SplineCurve.prototype = Object.create(i.Curve.prototype),i.SplineCurve.prototype.constructor = i.SplineCurve,i.SplineCurve.prototype.getPoint = function (e) {
            var t = this.points, r = (t.length - 1) * e, n = Math.floor(r), o = r - n, a = t[0 === n ? n : n - 1], s = t[n], u = t[n > t.length - 2 ? t.length - 1 : n + 1], c = t[n > t.length - 3 ? t.length - 1 : n + 2], l = i.CurveUtils.interpolate;
            return new i.Vector2(l(a.x, s.x, u.x, c.x, o), l(a.y, s.y, u.y, c.y, o))
        },i.EllipseCurve = function (e, t, r, n, i, o, a, s) {
            this.aX = e, this.aY = t, this.xRadius = r, this.yRadius = n, this.aStartAngle = i, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
        },i.EllipseCurve.prototype = Object.create(i.Curve.prototype),i.EllipseCurve.prototype.constructor = i.EllipseCurve,i.EllipseCurve.prototype.getPoint = function (e) {
            var t = this.aEndAngle - this.aStartAngle;
            0 > t && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI);
            var r;
            r = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
            var n = this.aX + this.xRadius * Math.cos(r), o = this.aY + this.yRadius * Math.sin(r);
            if (0 !== this.aRotation) {
                var a = Math.cos(this.aRotation), s = Math.sin(this.aRotation), u = n, c = o;
                n = (u - this.aX) * a - (c - this.aY) * s + this.aX, o = (u - this.aX) * s + (c - this.aY) * a + this.aY
            }
            return new i.Vector2(n, o)
        },i.ArcCurve = function (e, t, r, n, o, a) {
            i.EllipseCurve.call(this, e, t, r, r, n, o, a)
        },i.ArcCurve.prototype = Object.create(i.EllipseCurve.prototype),i.ArcCurve.prototype.constructor = i.ArcCurve,i.LineCurve3 = i.Curve.create(function (e, t) {
            this.v1 = e, this.v2 = t
        }, function (e) {
            var t = new i.Vector3;
            return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
        }),i.QuadraticBezierCurve3 = i.Curve.create(function (e, t, r) {
            this.v0 = e, this.v1 = t, this.v2 = r
        }, function (e) {
            var t = i.ShapeUtils.b2;
            return new i.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
        }),i.CubicBezierCurve3 = i.Curve.create(function (e, t, r, n) {
            this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
        }, function (e) {
            var t = i.ShapeUtils.b3;
            return new i.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
        }),i.SplineCurve3 = i.Curve.create(function (e) {
            console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
        }, function (e) {
            var t = this.points, r = (t.length - 1) * e, n = Math.floor(r), o = r - n, a = t[0 == n ? n : n - 1], s = t[n], u = t[n > t.length - 2 ? t.length - 1 : n + 1], c = t[n > t.length - 3 ? t.length - 1 : n + 2], l = i.CurveUtils.interpolate;
            return new i.Vector3(l(a.x, s.x, u.x, c.x, o), l(a.y, s.y, u.y, c.y, o), l(a.z, s.z, u.z, c.z, o))
        }),i.CatmullRomCurve3 = function () {
            function e() {
            }

            var t = new i.Vector3, r = new e, n = new e, o = new e;
            return e.prototype.init = function (e, t, r, n) {
                this.c0 = e, this.c1 = r, this.c2 = -3 * e + 3 * t - 2 * r - n, this.c3 = 2 * e - 2 * t + r + n
            }, e.prototype.initNonuniformCatmullRom = function (e, t, r, n, i, o, a) {
                var s = (t - e) / i - (r - e) / (i + o) + (r - t) / o, u = (r - t) / o - (n - t) / (o + a) + (n - r) / a;
                s *= o, u *= o, this.init(t, r, s, u)
            }, e.prototype.initCatmullRom = function (e, t, r, n, i) {
                this.init(t, r, i * (r - e), i * (n - t))
            }, e.prototype.calc = function (e) {
                var t = e * e, r = t * e;
                return this.c0 + this.c1 * e + this.c2 * t + this.c3 * r
            }, i.Curve.create(function (e) {
                this.points = e || []
            }, function (e) {
                var a, s, u, c, l = this.points;
                c = l.length, 2 > c && console.log("duh, you need at least 2 points"), a = (c - 1) * e, s = Math.floor(a), u = a - s, 0 === u && s === c - 1 && (s = c - 2, u = 1);
                var h, p, d, f;
                if (0 === s ? (t.subVectors(l[0], l[1]).add(l[0]), h = t) : h = l[s - 1], p = l[s], d = l[s + 1], c > s + 2 ? f = l[s + 2] : (t.subVectors(l[c - 1], l[c - 2]).add(l[c - 2]), f = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                    var m = "chordal" === this.type ? .5 : .25, g = Math.pow(h.distanceToSquared(p), m), v = Math.pow(p.distanceToSquared(d), m), y = Math.pow(d.distanceToSquared(f), m);
                    1e-4 > v && (v = 1), 1e-4 > g && (g = v), 1e-4 > y && (y = v), r.initNonuniformCatmullRom(h.x, p.x, d.x, f.x, g, v, y), n.initNonuniformCatmullRom(h.y, p.y, d.y, f.y, g, v, y), o.initNonuniformCatmullRom(h.z, p.z, d.z, f.z, g, v, y)
                } else if ("catmullrom" === this.type) {
                    var x = void 0 !== this.tension ? this.tension : .5;
                    r.initCatmullRom(h.x, p.x, d.x, f.x, x), n.initCatmullRom(h.y, p.y, d.y, f.y, x), o.initCatmullRom(h.z, p.z, d.z, f.z, x)
                }
                var b = new i.Vector3(r.calc(u), n.calc(u), o.calc(u));
                return b
            })
        }(),i.ClosedSplineCurve3 = i.Curve.create(function (e) {
            this.points = void 0 == e ? [] : e
        }, function (e) {
            var t = this.points, r = (t.length - 0) * e, n = Math.floor(r), o = r - n;
            n += n > 0 ? 0 : (Math.floor(Math.abs(n) / t.length) + 1) * t.length;
            var a = t[(n - 1) % t.length], s = t[n % t.length], u = t[(n + 1) % t.length], c = t[(n + 2) % t.length], l = i.CurveUtils.interpolate;
            return new i.Vector3(l(a.x, s.x, u.x, c.x, o), l(a.y, s.y, u.y, c.y, o), l(a.z, s.z, u.z, c.z, o))
        }),i.BoxGeometry = function (e, t, r, n, o, a) {
            function s(e, t, r, n, o, a, s, c) {
                var l, h, p, d = u.widthSegments, f = u.heightSegments, m = o / 2, g = a / 2, v = u.vertices.length;
                "x" === e && "y" === t || "y" === e && "x" === t ? l = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (l = "y", f = u.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (l = "x", d = u.depthSegments);
                var y = d + 1, x = f + 1, b = o / d, w = a / f, S = new i.Vector3;
                for (S[l] = s > 0 ? 1 : -1, p = 0; x > p; p++)for (h = 0; y > h; h++) {
                    var M = new i.Vector3;
                    M[e] = (h * b - m) * r, M[t] = (p * w - g) * n, M[l] = s, u.vertices.push(M)
                }
                for (p = 0; f > p; p++)for (h = 0; d > h; h++) {
                    var T = h + y * p, _ = h + y * (p + 1), E = h + 1 + y * (p + 1), C = h + 1 + y * p, A = new i.Vector2(h / d, 1 - p / f), L = new i.Vector2(h / d, 1 - (p + 1) / f), P = new i.Vector2((h + 1) / d, 1 - (p + 1) / f), k = new i.Vector2((h + 1) / d, 1 - p / f), D = new i.Face3(T + v, _ + v, C + v);
                    D.normal.copy(S), D.vertexNormals.push(S.clone(), S.clone(), S.clone()), D.materialIndex = c, u.faces.push(D), u.faceVertexUvs[0].push([A, L, k]), D = new i.Face3(_ + v, E + v, C + v), D.normal.copy(S), D.vertexNormals.push(S.clone(), S.clone(), S.clone()), D.materialIndex = c, u.faces.push(D), u.faceVertexUvs[0].push([L.clone(), P, k.clone()])
                }
            }

            i.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
                width: e,
                height: t,
                depth: r,
                widthSegments: n,
                heightSegments: o,
                depthSegments: a
            }, this.widthSegments = n || 1, this.heightSegments = o || 1, this.depthSegments = a || 1;
            var u = this, c = e / 2, l = t / 2, h = r / 2;
            s("z", "y", -1, -1, r, t, c, 0), s("z", "y", 1, -1, r, t, -c, 1), s("x", "z", 1, 1, e, r, l, 2), s("x", "z", 1, -1, e, r, -l, 3), s("x", "y", 1, -1, e, t, h, 4), s("x", "y", -1, -1, e, t, -h, 5), this.mergeVertices()
        },i.BoxGeometry.prototype = Object.create(i.Geometry.prototype),i.BoxGeometry.prototype.constructor = i.BoxGeometry,i.BoxGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.BoxGeometry(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
        },i.CubeGeometry = i.BoxGeometry,i.CircleGeometry = function (e, t, r, n) {
            i.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
                radius: e,
                segments: t,
                thetaStart: r,
                thetaLength: n
            }, this.fromBufferGeometry(new i.CircleBufferGeometry(e, t, r, n))
        },i.CircleGeometry.prototype = Object.create(i.Geometry.prototype),i.CircleGeometry.prototype.constructor = i.CircleGeometry,i.CircleGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.CircleGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
        },i.CircleBufferGeometry = function (e, t, r, n) {
            i.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                radius: e,
                segments: t,
                thetaStart: r,
                thetaLength: n
            }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
            var o = t + 2, a = new Float32Array(3 * o), s = new Float32Array(3 * o), u = new Float32Array(2 * o);
            s[2] = 1, u[0] = .5, u[1] = .5;
            for (var c = 0, l = 3, h = 2; t >= c; c++, l += 3, h += 2) {
                var p = r + c / t * n;
                a[l] = e * Math.cos(p), a[l + 1] = e * Math.sin(p), s[l + 2] = 1, u[h] = (a[l] / e + 1) / 2, u[h + 1] = (a[l + 1] / e + 1) / 2
            }
            for (var d = [], l = 1; t >= l; l++)d.push(l, l + 1, 0);
            this.setIndex(new i.BufferAttribute(new Uint16Array(d), 1)), this.addAttribute("position", new i.BufferAttribute(a, 3)), this.addAttribute("normal", new i.BufferAttribute(s, 3)), this.addAttribute("uv", new i.BufferAttribute(u, 2)), this.boundingSphere = new i.Sphere(new i.Vector3, e)
        },i.CircleBufferGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.CircleBufferGeometry.prototype.constructor = i.CircleBufferGeometry,i.CircleBufferGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.CircleBufferGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
        },i.CylinderGeometry = function (e, t, r, n, o, a, s, u) {
            i.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: e,
                radiusBottom: t,
                height: r,
                radialSegments: n,
                heightSegments: o,
                openEnded: a,
                thetaStart: s,
                thetaLength: u
            }, e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, n = n || 8, o = o || 1, a = void 0 !== a ? a : !1, s = void 0 !== s ? s : 0, u = void 0 !== u ? u : 2 * Math.PI;
            var c, l, h = r / 2, p = [], d = [];
            for (l = 0; o >= l; l++) {
                var f = [], m = [], g = l / o, v = g * (t - e) + e;
                for (c = 0; n >= c; c++) {
                    var y = c / n, x = new i.Vector3;
                    x.x = v * Math.sin(y * u + s), x.y = -g * r + h, x.z = v * Math.cos(y * u + s), this.vertices.push(x), f.push(this.vertices.length - 1), m.push(new i.Vector2(y, 1 - g))
                }
                p.push(f), d.push(m)
            }
            var b, w, S = (t - e) / r;
            for (c = 0; n > c; c++)for (0 !== e ? (b = this.vertices[p[0][c]].clone(), w = this.vertices[p[0][c + 1]].clone()) : (b = this.vertices[p[1][c]].clone(), w = this.vertices[p[1][c + 1]].clone()), b.setY(Math.sqrt(b.x * b.x + b.z * b.z) * S).normalize(), w.setY(Math.sqrt(w.x * w.x + w.z * w.z) * S).normalize(), l = 0; o > l; l++) {
                var M = p[l][c], T = p[l + 1][c], _ = p[l + 1][c + 1], E = p[l][c + 1], C = b.clone(), A = b.clone(), L = w.clone(), P = w.clone(), k = d[l][c].clone(), D = d[l + 1][c].clone(), R = d[l + 1][c + 1].clone(), O = d[l][c + 1].clone();
                this.faces.push(new i.Face3(M, T, E, [C, A, P])), this.faceVertexUvs[0].push([k, D, O]), this.faces.push(new i.Face3(T, _, E, [A.clone(), L, P.clone()])), this.faceVertexUvs[0].push([D.clone(), R, O.clone()])
            }
            if (a === !1 && e > 0)for (this.vertices.push(new i.Vector3(0, h, 0)), c = 0; n > c; c++) {
                var M = p[0][c], T = p[0][c + 1], _ = this.vertices.length - 1, C = new i.Vector3(0, 1, 0), A = new i.Vector3(0, 1, 0), L = new i.Vector3(0, 1, 0), k = d[0][c].clone(), D = d[0][c + 1].clone(), R = new i.Vector2(D.x, 0);
                this.faces.push(new i.Face3(M, T, _, [C, A, L], void 0, 1)), this.faceVertexUvs[0].push([k, D, R])
            }
            if (a === !1 && t > 0)for (this.vertices.push(new i.Vector3(0, -h, 0)), c = 0; n > c; c++) {
                var M = p[o][c + 1], T = p[o][c], _ = this.vertices.length - 1, C = new i.Vector3(0, -1, 0), A = new i.Vector3(0, -1, 0), L = new i.Vector3(0, -1, 0), k = d[o][c + 1].clone(), D = d[o][c].clone(), R = new i.Vector2(D.x, 1);
                this.faces.push(new i.Face3(M, T, _, [C, A, L], void 0, 2)), this.faceVertexUvs[0].push([k, D, R])
            }
            this.computeFaceNormals()
        },i.CylinderGeometry.prototype = Object.create(i.Geometry.prototype),i.CylinderGeometry.prototype.constructor = i.CylinderGeometry,i.CylinderGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.CylinderGeometry(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
        },i.EdgesGeometry = function (e, t) {
            function r(e, t) {
                return e - t
            }

            i.BufferGeometry.call(this), t = void 0 !== t ? t : 1;
            var n, o = Math.cos(i.Math.degToRad(t)), a = [0, 0], s = {}, u = ["a", "b", "c"];
            e instanceof i.BufferGeometry ? (n = new i.Geometry, n.fromBufferGeometry(e)) : n = e.clone(), n.mergeVertices(), n.computeFaceNormals();
            for (var c = n.vertices, l = n.faces, h = 0, p = l.length; p > h; h++)for (var d = l[h], f = 0; 3 > f; f++) {
                a[0] = d[u[f]], a[1] = d[u[(f + 1) % 3]], a.sort(r);
                var m = a.toString();
                void 0 === s[m] ? s[m] = {vert1: a[0], vert2: a[1], face1: h, face2: void 0} : s[m].face2 = h
            }
            var g = [];
            for (var m in s) {
                var v = s[m];
                if (void 0 === v.face2 || l[v.face1].normal.dot(l[v.face2].normal) <= o) {
                    var y = c[v.vert1];
                    g.push(y.x), g.push(y.y), g.push(y.z), y = c[v.vert2], g.push(y.x), g.push(y.y), g.push(y.z)
                }
            }
            this.addAttribute("position", new i.BufferAttribute(new Float32Array(g), 3))
        },i.EdgesGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.EdgesGeometry.prototype.constructor = i.EdgesGeometry,i.ExtrudeGeometry = function (e, t) {
            return "undefined" == typeof e ? void(e = []) : (i.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), void this.computeFaceNormals())
        },i.ExtrudeGeometry.prototype = Object.create(i.Geometry.prototype),i.ExtrudeGeometry.prototype.constructor = i.ExtrudeGeometry,i.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
            for (var r = e.length, n = 0; r > n; n++) {
                var i = e[n];
                this.addShape(i, t)
            }
        },i.ExtrudeGeometry.prototype.addShape = function (e, t) {
            function r(e, t, r) {
                return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(r).add(e)
            }

            function n(e, t, r) {
                var n, o, a = 1, s = e.x - t.x, u = e.y - t.y, c = r.x - e.x, l = r.y - e.y, h = s * s + u * u, p = s * l - u * c;
                if (Math.abs(p) > Number.EPSILON) {
                    var d = Math.sqrt(h), f = Math.sqrt(c * c + l * l), m = t.x - u / d, g = t.y + s / d, v = r.x - l / f, y = r.y + c / f, x = ((v - m) * l - (y - g) * c) / (s * l - u * c);
                    n = m + s * x - e.x, o = g + u * x - e.y;
                    var b = n * n + o * o;
                    if (2 >= b)return new i.Vector2(n, o);
                    a = Math.sqrt(b / 2)
                } else {
                    var w = !1;
                    s > Number.EPSILON ? c > Number.EPSILON && (w = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (w = !0) : Math.sign(u) === Math.sign(l) && (w = !0), w ? (n = -u, o = s, a = Math.sqrt(h)) : (n = s, o = u, a = Math.sqrt(h / 2))
                }
                return new i.Vector2(n / a, o / a)
            }

            function o() {
                if (b) {
                    var e = 0, t = j * e;
                    for (X = 0; H > X; X++)G = F[X], c(G[2] + t, G[1] + t, G[0] + t);
                    for (e = S + 2 * x, t = j * e, X = 0; H > X; X++)G = F[X], c(G[0] + t, G[1] + t, G[2] + t)
                } else {
                    for (X = 0; H > X; X++)G = F[X], c(G[2], G[1], G[0]);
                    for (X = 0; H > X; X++)G = F[X], c(G[0] + j * S, G[1] + j * S, G[2] + j * S)
                }
            }

            function a() {
                var e = 0;
                for (s(V, e), e += V.length, C = 0, A = R.length; A > C; C++)E = R[C], s(E, e), e += E.length
            }

            function s(e, t) {
                var r, n;
                for (X = e.length; --X >= 0;) {
                    r = X, n = X - 1, 0 > n && (n = e.length - 1);
                    var i = 0, o = S + 2 * x;
                    for (i = 0; o > i; i++) {
                        var a = j * i, s = j * (i + 1), u = t + r + a, c = t + n + a, h = t + n + s, p = t + r + s;
                        l(u, c, h, p, e, i, o, r, n)
                    }
                }
            }

            function u(e, t, r) {
                L.vertices.push(new i.Vector3(e, t, r))
            }

            function c(e, t, r) {
                e += P, t += P, r += P, L.faces.push(new i.Face3(e, t, r, null, null, 0));
                var n = _.generateTopUV(L, e, t, r);
                L.faceVertexUvs[0].push(n)
            }

            function l(e, t, r, n, o, a, s, u, c) {
                e += P, t += P, r += P, n += P, L.faces.push(new i.Face3(e, t, n, null, null, 1)), L.faces.push(new i.Face3(t, r, n, null, null, 1));
                var l = _.generateSideWallUV(L, e, t, r, n);
                L.faceVertexUvs[0].push([l[0], l[1], l[3]]), L.faceVertexUvs[0].push([l[1], l[2], l[3]])
            }

            var h, p, d, f, m, g = void 0 !== t.amount ? t.amount : 100, v = void 0 !== t.bevelThickness ? t.bevelThickness : 6, y = void 0 !== t.bevelSize ? t.bevelSize : v - 2, x = void 0 !== t.bevelSegments ? t.bevelSegments : 3, b = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0, w = void 0 !== t.curveSegments ? t.curveSegments : 12, S = void 0 !== t.steps ? t.steps : 1, M = t.extrudePath, T = !1, _ = void 0 !== t.UVGenerator ? t.UVGenerator : i.ExtrudeGeometry.WorldUVGenerator;
            M && (h = M.getSpacedPoints(S), T = !0, b = !1, p = void 0 !== t.frames ? t.frames : new i.TubeGeometry.FrenetFrames(M, S, !1), d = new i.Vector3, f = new i.Vector3, m = new i.Vector3), b || (x = 0, v = 0, y = 0);
            var E, C, A, L = this, P = this.vertices.length, k = e.extractPoints(w), D = k.shape, R = k.holes, O = !i.ShapeUtils.isClockWise(D);
            if (O) {
                for (D = D.reverse(), C = 0, A = R.length; A > C; C++)E = R[C], i.ShapeUtils.isClockWise(E) && (R[C] = E.reverse());
                O = !1
            }
            var F = i.ShapeUtils.triangulateShape(D, R), V = D;
            for (C = 0, A = R.length; A > C; C++)E = R[C], D = D.concat(E);
            for (var N, B, I, U, z, G, j = D.length, H = F.length, W = [], X = 0, q = V.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++)Y === q && (Y = 0), K === q && (K = 0), W[X] = n(V[X], V[Y], V[K]);
            var $, Q = [], Z = W.concat();
            for (C = 0, A = R.length; A > C; C++) {
                for (E = R[C], $ = [], X = 0, q = E.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++)Y === q && (Y = 0), K === q && (K = 0), $[X] = n(E[X], E[Y], E[K]);
                Q.push($), Z = Z.concat($)
            }
            for (N = 0; x > N; N++) {
                for (I = N / x, U = v * (1 - I), B = y * Math.sin(I * Math.PI / 2), X = 0, q = V.length; q > X; X++)z = r(V[X], W[X], B), u(z.x, z.y, -U);
                for (C = 0, A = R.length; A > C; C++)for (E = R[C], $ = Q[C], X = 0, q = E.length; q > X; X++)z = r(E[X], $[X], B), u(z.x, z.y, -U)
            }
            for (B = y, X = 0; j > X; X++)z = b ? r(D[X], Z[X], B) : D[X], T ? (f.copy(p.normals[0]).multiplyScalar(z.x), d.copy(p.binormals[0]).multiplyScalar(z.y), m.copy(h[0]).add(f).add(d), u(m.x, m.y, m.z)) : u(z.x, z.y, 0);
            var J;
            for (J = 1; S >= J; J++)for (X = 0; j > X; X++)z = b ? r(D[X], Z[X], B) : D[X], T ? (f.copy(p.normals[J]).multiplyScalar(z.x), d.copy(p.binormals[J]).multiplyScalar(z.y), m.copy(h[J]).add(f).add(d), u(m.x, m.y, m.z)) : u(z.x, z.y, g / S * J);
            for (N = x - 1; N >= 0; N--) {
                for (I = N / x, U = v * (1 - I), B = y * Math.sin(I * Math.PI / 2), X = 0, q = V.length; q > X; X++)z = r(V[X], W[X], B), u(z.x, z.y, g + U);
                for (C = 0, A = R.length; A > C; C++)for (E = R[C], $ = Q[C], X = 0, q = E.length; q > X; X++)z = r(E[X], $[X], B), T ? u(z.x, z.y + h[S - 1].y, h[S - 1].x + U) : u(z.x, z.y, g + U)
            }
            o(), a()
        },i.ExtrudeGeometry.WorldUVGenerator = {
            generateTopUV: function (e, t, r, n) {
                var o = e.vertices, a = o[t], s = o[r], u = o[n];
                return [new i.Vector2(a.x, a.y), new i.Vector2(s.x, s.y), new i.Vector2(u.x, u.y)]
            }, generateSideWallUV: function (e, t, r, n, o) {
                var a = e.vertices, s = a[t], u = a[r], c = a[n], l = a[o];
                return Math.abs(s.y - u.y) < .01 ? [new i.Vector2(s.x, 1 - s.z), new i.Vector2(u.x, 1 - u.z), new i.Vector2(c.x, 1 - c.z), new i.Vector2(l.x, 1 - l.z)] : [new i.Vector2(s.y, 1 - s.z), new i.Vector2(u.y, 1 - u.z), new i.Vector2(c.y, 1 - c.z), new i.Vector2(l.y, 1 - l.z)]
            }
        },i.ShapeGeometry = function (e, t) {
            i.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(e) === !1 && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
        },i.ShapeGeometry.prototype = Object.create(i.Geometry.prototype),i.ShapeGeometry.prototype.constructor = i.ShapeGeometry,i.ShapeGeometry.prototype.addShapeList = function (e, t) {
            for (var r = 0, n = e.length; n > r; r++)this.addShape(e[r], t);
            return this
        },i.ShapeGeometry.prototype.addShape = function (e, t) {
            void 0 === t && (t = {});
            var r, n, o, a = void 0 !== t.curveSegments ? t.curveSegments : 12, s = t.material, u = void 0 === t.UVGenerator ? i.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator, c = this.vertices.length, l = e.extractPoints(a), h = l.shape, p = l.holes, d = !i.ShapeUtils.isClockWise(h);
            if (d) {
                for (h = h.reverse(), r = 0, n = p.length; n > r; r++)o = p[r], i.ShapeUtils.isClockWise(o) && (p[r] = o.reverse());
                d = !1
            }
            var f = i.ShapeUtils.triangulateShape(h, p);
            for (r = 0, n = p.length; n > r; r++)o = p[r], h = h.concat(o);
            var m, g, v = h.length, y = f.length;
            for (r = 0; v > r; r++)m = h[r], this.vertices.push(new i.Vector3(m.x, m.y, 0));
            for (r = 0; y > r; r++) {
                g = f[r];
                var x = g[0] + c, b = g[1] + c, w = g[2] + c;
                this.faces.push(new i.Face3(x, b, w, null, null, s)), this.faceVertexUvs[0].push(u.generateTopUV(this, x, b, w))
            }
        },i.LatheGeometry = function (e, t, r, n) {
            i.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
                points: e,
                segments: t,
                phiStart: r,
                phiLength: n
            }, t = t || 12, r = r || 0, n = n || 2 * Math.PI;
            for (var o = 1 / (e.length - 1), a = 1 / t, s = 0, u = t; u >= s; s++)for (var c = r + s * a * n, l = Math.cos(c), h = Math.sin(c), p = 0, d = e.length; d > p; p++) {
                var f = e[p], m = new i.Vector3;
                m.x = l * f.x - h * f.y, m.y = h * f.x + l * f.y, m.z = f.z, this.vertices.push(m)
            }
            for (var g = e.length, s = 0, u = t; u > s; s++)for (var p = 0, d = e.length - 1; d > p; p++) {
                var v = p + g * s, y = v, x = v + g, l = v + 1 + g, b = v + 1, w = s * a, S = p * o, M = w + a, T = S + o;
                this.faces.push(new i.Face3(y, x, b)), this.faceVertexUvs[0].push([new i.Vector2(w, S), new i.Vector2(M, S), new i.Vector2(w, T)]), this.faces.push(new i.Face3(x, l, b)), this.faceVertexUvs[0].push([new i.Vector2(M, S), new i.Vector2(M, T), new i.Vector2(w, T)])
            }
            this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
        },i.LatheGeometry.prototype = Object.create(i.Geometry.prototype),i.LatheGeometry.prototype.constructor = i.LatheGeometry,i.PlaneGeometry = function (e, t, r, n) {
            i.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: r,
                heightSegments: n
            }, this.fromBufferGeometry(new i.PlaneBufferGeometry(e, t, r, n))
        },i.PlaneGeometry.prototype = Object.create(i.Geometry.prototype),i.PlaneGeometry.prototype.constructor = i.PlaneGeometry,i.PlaneGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.PlaneGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
        },i.PlaneBufferGeometry = function (e, t, r, n) {
            i.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: r,
                heightSegments: n
            };
            for (var o = e / 2, a = t / 2, s = Math.floor(r) || 1, u = Math.floor(n) || 1, c = s + 1, l = u + 1, h = e / s, p = t / u, d = new Float32Array(c * l * 3), f = new Float32Array(c * l * 3), m = new Float32Array(c * l * 2), g = 0, v = 0, y = 0; l > y; y++)for (var x = y * p - a, b = 0; c > b; b++) {
                var w = b * h - o;
                d[g] = w, d[g + 1] = -x, f[g + 2] = 1, m[v] = b / s, m[v + 1] = 1 - y / u, g += 3, v += 2
            }
            g = 0;
            for (var S = new (d.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * u * 6), y = 0; u > y; y++)for (var b = 0; s > b; b++) {
                var M = b + c * y, T = b + c * (y + 1), _ = b + 1 + c * (y + 1), E = b + 1 + c * y;
                S[g] = M, S[g + 1] = T, S[g + 2] = E, S[g + 3] = T, S[g + 4] = _, S[g + 5] = E, g += 6
            }
            this.setIndex(new i.BufferAttribute(S, 1)), this.addAttribute("position", new i.BufferAttribute(d, 3)), this.addAttribute("normal", new i.BufferAttribute(f, 3)), this.addAttribute("uv", new i.BufferAttribute(m, 2))
        },i.PlaneBufferGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.PlaneBufferGeometry.prototype.constructor = i.PlaneBufferGeometry,i.PlaneBufferGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.PlaneBufferGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
        },i.RingGeometry = function (e, t, r, n, o, a) {
            i.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
                innerRadius: e,
                outerRadius: t,
                thetaSegments: r,
                phiSegments: n,
                thetaStart: o,
                thetaLength: a
            }, e = e || 0, t = t || 50, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, n = void 0 !== n ? Math.max(1, n) : 8;
            var s, u, c = [], l = e, h = (t - e) / n;
            for (s = 0; n + 1 > s; s++) {
                for (u = 0; r + 1 > u; u++) {
                    var p = new i.Vector3, d = o + u / r * a;
                    p.x = l * Math.cos(d), p.y = l * Math.sin(d), this.vertices.push(p), c.push(new i.Vector2((p.x / t + 1) / 2, (p.y / t + 1) / 2))
                }
                l += h
            }
            var f = new i.Vector3(0, 0, 1);
            for (s = 0; n > s; s++) {
                var m = s * (r + 1);
                for (u = 0; r > u; u++) {
                    var d = u + m, g = d, v = d + r + 1, y = d + r + 2;
                    this.faces.push(new i.Face3(g, v, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([c[g].clone(), c[v].clone(), c[y].clone()]),
                        g = d, v = d + r + 2, y = d + 1, this.faces.push(new i.Face3(g, v, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([c[g].clone(), c[v].clone(), c[y].clone()])
                }
            }
            this.computeFaceNormals(), this.boundingSphere = new i.Sphere(new i.Vector3, l)
        },i.RingGeometry.prototype = Object.create(i.Geometry.prototype),i.RingGeometry.prototype.constructor = i.RingGeometry,i.RingGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.RingGeometry(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength)
        },i.SphereGeometry = function (e, t, r, n, o, a, s) {
            i.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: r,
                phiStart: n,
                phiLength: o,
                thetaStart: a,
                thetaLength: s
            }, this.fromBufferGeometry(new i.SphereBufferGeometry(e, t, r, n, o, a, s))
        },i.SphereGeometry.prototype = Object.create(i.Geometry.prototype),i.SphereGeometry.prototype.constructor = i.SphereGeometry,i.SphereGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.SphereGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
        },i.SphereBufferGeometry = function (e, t, r, n, o, a, s) {
            i.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: r,
                phiStart: n,
                phiLength: o,
                thetaStart: a,
                thetaLength: s
            }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), n = void 0 !== n ? n : 0, o = void 0 !== o ? o : 2 * Math.PI, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : Math.PI;
            for (var u = a + s, c = (t + 1) * (r + 1), l = new i.BufferAttribute(new Float32Array(3 * c), 3), h = new i.BufferAttribute(new Float32Array(3 * c), 3), p = new i.BufferAttribute(new Float32Array(2 * c), 2), d = 0, f = [], m = new i.Vector3, g = 0; r >= g; g++) {
                for (var v = [], y = g / r, x = 0; t >= x; x++) {
                    var b = x / t, w = -e * Math.cos(n + b * o) * Math.sin(a + y * s), S = e * Math.cos(a + y * s), M = e * Math.sin(n + b * o) * Math.sin(a + y * s);
                    m.set(w, S, M).normalize(), l.setXYZ(d, w, S, M), h.setXYZ(d, m.x, m.y, m.z), p.setXY(d, b, 1 - y), v.push(d), d++
                }
                f.push(v)
            }
            for (var T = [], g = 0; r > g; g++)for (var x = 0; t > x; x++) {
                var _ = f[g][x + 1], E = f[g][x], C = f[g + 1][x], A = f[g + 1][x + 1];
                (0 !== g || a > 0) && T.push(_, E, A), (g !== r - 1 || u < Math.PI) && T.push(E, C, A)
            }
            this.setIndex(new (l.count > 65535 ? i.Uint32Attribute : i.Uint16Attribute)(T, 1)), this.addAttribute("position", l), this.addAttribute("normal", h), this.addAttribute("uv", p), this.boundingSphere = new i.Sphere(new i.Vector3, e)
        },i.SphereBufferGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.SphereBufferGeometry.prototype.constructor = i.SphereBufferGeometry,i.SphereBufferGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.SphereBufferGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
        },i.TorusGeometry = function (e, t, r, n, o) {
            i.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
                radius: e,
                tube: t,
                radialSegments: r,
                tubularSegments: n,
                arc: o
            }, e = e || 100, t = t || 40, r = r || 8, n = n || 6, o = o || 2 * Math.PI;
            for (var a = new i.Vector3, s = [], u = [], c = 0; r >= c; c++)for (var l = 0; n >= l; l++) {
                var h = l / n * o, p = c / r * Math.PI * 2;
                a.x = e * Math.cos(h), a.y = e * Math.sin(h);
                var d = new i.Vector3;
                d.x = (e + t * Math.cos(p)) * Math.cos(h), d.y = (e + t * Math.cos(p)) * Math.sin(h), d.z = t * Math.sin(p), this.vertices.push(d), s.push(new i.Vector2(l / n, c / r)), u.push(d.clone().sub(a).normalize())
            }
            for (var c = 1; r >= c; c++)for (var l = 1; n >= l; l++) {
                var f = (n + 1) * c + l - 1, m = (n + 1) * (c - 1) + l - 1, g = (n + 1) * (c - 1) + l, v = (n + 1) * c + l, y = new i.Face3(f, m, v, [u[f].clone(), u[m].clone(), u[v].clone()]);
                this.faces.push(y), this.faceVertexUvs[0].push([s[f].clone(), s[m].clone(), s[v].clone()]), y = new i.Face3(m, g, v, [u[m].clone(), u[g].clone(), u[v].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[g].clone(), s[v].clone()])
            }
            this.computeFaceNormals()
        },i.TorusGeometry.prototype = Object.create(i.Geometry.prototype),i.TorusGeometry.prototype.constructor = i.TorusGeometry,i.TorusGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.TorusGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc)
        },i.TorusKnotGeometry = function (e, t, r, n, o, a, s) {
            function u(e, t, r, n, o) {
                var a = Math.cos(e), s = Math.sin(e), u = t / r * e, c = Math.cos(u), l = n * (2 + c) * .5 * a, h = n * (2 + c) * s * .5, p = o * n * Math.sin(u) * .5;
                return new i.Vector3(l, h, p)
            }

            i.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                radius: e,
                tube: t,
                radialSegments: r,
                tubularSegments: n,
                p: o,
                q: a,
                heightScale: s
            }, e = e || 100, t = t || 40, r = r || 64, n = n || 8, o = o || 2, a = a || 3, s = s || 1;
            for (var c = new Array(r), l = new i.Vector3, h = new i.Vector3, p = new i.Vector3, d = 0; r > d; ++d) {
                c[d] = new Array(n);
                var f = d / r * 2 * o * Math.PI, m = u(f, a, o, e, s), g = u(f + .01, a, o, e, s);
                l.subVectors(g, m), h.addVectors(g, m), p.crossVectors(l, h), h.crossVectors(p, l), p.normalize(), h.normalize();
                for (var v = 0; n > v; ++v) {
                    var y = v / n * 2 * Math.PI, x = -t * Math.cos(y), b = t * Math.sin(y), w = new i.Vector3;
                    w.x = m.x + x * h.x + b * p.x, w.y = m.y + x * h.y + b * p.y, w.z = m.z + x * h.z + b * p.z, c[d][v] = this.vertices.push(w) - 1
                }
            }
            for (var d = 0; r > d; ++d)for (var v = 0; n > v; ++v) {
                var S = (d + 1) % r, M = (v + 1) % n, T = c[d][v], _ = c[S][v], E = c[S][M], C = c[d][M], A = new i.Vector2(d / r, v / n), L = new i.Vector2((d + 1) / r, v / n), P = new i.Vector2((d + 1) / r, (v + 1) / n), k = new i.Vector2(d / r, (v + 1) / n);
                this.faces.push(new i.Face3(T, _, C)), this.faceVertexUvs[0].push([A, L, k]), this.faces.push(new i.Face3(_, E, C)), this.faceVertexUvs[0].push([L.clone(), P, k.clone()])
            }
            this.computeFaceNormals(), this.computeVertexNormals()
        },i.TorusKnotGeometry.prototype = Object.create(i.Geometry.prototype),i.TorusKnotGeometry.prototype.constructor = i.TorusKnotGeometry,i.TorusKnotGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.TorusKnotGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.p, e.q, e.heightScale)
        },i.TubeGeometry = function (e, t, r, n, o, a) {
            function s(e, t, r) {
                return P.vertices.push(new i.Vector3(e, t, r)) - 1
            }

            i.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
                path: e,
                segments: t,
                radius: r,
                radialSegments: n,
                closed: o,
                taper: a
            }, t = t || 64, r = r || 1, n = n || 8, o = o || !1, a = a || i.TubeGeometry.NoTaper;
            var u, c, l, h, p, d, f, m, g, v, y, x, b, w, S, M, T, _, E, C, A, L = [], P = this, k = t + 1, D = new i.Vector3, R = new i.TubeGeometry.FrenetFrames(e, t, o), O = R.tangents, F = R.normals, V = R.binormals;
            for (this.tangents = O, this.normals = F, this.binormals = V, v = 0; k > v; v++)for (L[v] = [], h = v / (k - 1), g = e.getPointAt(h), u = O[v], c = F[v], l = V[v], d = r * a(h), y = 0; n > y; y++)p = y / n * 2 * Math.PI, f = -d * Math.cos(p), m = d * Math.sin(p), D.copy(g), D.x += f * c.x + m * l.x, D.y += f * c.y + m * l.y, D.z += f * c.z + m * l.z, L[v][y] = s(D.x, D.y, D.z);
            for (v = 0; t > v; v++)for (y = 0; n > y; y++)x = o ? (v + 1) % t : v + 1, b = (y + 1) % n, w = L[v][y], S = L[x][y], M = L[x][b], T = L[v][b], _ = new i.Vector2(v / t, y / n), E = new i.Vector2((v + 1) / t, y / n), C = new i.Vector2((v + 1) / t, (y + 1) / n), A = new i.Vector2(v / t, (y + 1) / n), this.faces.push(new i.Face3(w, S, T)), this.faceVertexUvs[0].push([_, E, A]), this.faces.push(new i.Face3(S, M, T)), this.faceVertexUvs[0].push([E.clone(), C, A.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        },i.TubeGeometry.prototype = Object.create(i.Geometry.prototype),i.TubeGeometry.prototype.constructor = i.TubeGeometry,i.TubeGeometry.prototype.clone = function () {
            return new this.constructor(this.parameters.path, this.parameters.segments, this.parameters.radius, this.parameters.radialSegments, this.parameters.closed, this.parameters.taper)
        },i.TubeGeometry.NoTaper = function (e) {
            return 1
        },i.TubeGeometry.SinusoidalTaper = function (e) {
            return Math.sin(Math.PI * e)
        },i.TubeGeometry.FrenetFrames = function (e, t, r) {
            function n() {
                f[0] = new i.Vector3, m[0] = new i.Vector3, a = Number.MAX_VALUE, s = Math.abs(d[0].x), u = Math.abs(d[0].y), c = Math.abs(d[0].z), a >= s && (a = s, p.set(1, 0, 0)), a >= u && (a = u, p.set(0, 1, 0)), a >= c && p.set(0, 0, 1), g.crossVectors(d[0], p).normalize(), f[0].crossVectors(d[0], g), m[0].crossVectors(d[0], f[0])
            }

            var o, a, s, u, c, l, h, p = new i.Vector3, d = [], f = [], m = [], g = new i.Vector3, v = new i.Matrix4, y = t + 1;
            for (this.tangents = d, this.normals = f, this.binormals = m, l = 0; y > l; l++)h = l / (y - 1), d[l] = e.getTangentAt(h), d[l].normalize();
            for (n(), l = 1; y > l; l++)f[l] = f[l - 1].clone(), m[l] = m[l - 1].clone(), g.crossVectors(d[l - 1], d[l]), g.length() > Number.EPSILON && (g.normalize(), o = Math.acos(i.Math.clamp(d[l - 1].dot(d[l]), -1, 1)), f[l].applyMatrix4(v.makeRotationAxis(g, o))), m[l].crossVectors(d[l], f[l]);
            if (r)for (o = Math.acos(i.Math.clamp(f[0].dot(f[y - 1]), -1, 1)), o /= y - 1, d[0].dot(g.crossVectors(f[0], f[y - 1])) > 0 && (o = -o), l = 1; y > l; l++)f[l].applyMatrix4(v.makeRotationAxis(d[l], o * l)), m[l].crossVectors(d[l], f[l])
        },i.PolyhedronGeometry = function (e, t, r, n) {
            function o(e) {
                var t = e.normalize().clone();
                t.index = h.vertices.push(t) - 1;
                var r = u(e) / 2 / Math.PI + .5, n = c(e) / Math.PI + .5;
                return t.uv = new i.Vector2(r, 1 - n), t
            }

            function a(e, t, r, n) {
                var o = new i.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()], void 0, n);
                h.faces.push(o), b.copy(e).add(t).add(r).divideScalar(3);
                var a = u(b);
                h.faceVertexUvs[0].push([l(e.uv, e, a), l(t.uv, t, a), l(r.uv, r, a)])
            }

            function s(e, t) {
                for (var r = Math.pow(2, t), n = o(h.vertices[e.a]), i = o(h.vertices[e.b]), s = o(h.vertices[e.c]), u = [], c = e.materialIndex, l = 0; r >= l; l++) {
                    u[l] = [];
                    for (var p = o(n.clone().lerp(s, l / r)), d = o(i.clone().lerp(s, l / r)), f = r - l, m = 0; f >= m; m++)0 === m && l === r ? u[l][m] = p : u[l][m] = o(p.clone().lerp(d, m / f))
                }
                for (var l = 0; r > l; l++)for (var m = 0; 2 * (r - l) - 1 > m; m++) {
                    var g = Math.floor(m / 2);
                    m % 2 === 0 ? a(u[l][g + 1], u[l + 1][g], u[l][g], c) : a(u[l][g + 1], u[l + 1][g + 1], u[l + 1][g], c)
                }
            }

            function u(e) {
                return Math.atan2(e.z, -e.x)
            }

            function c(e) {
                return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
            }

            function l(e, t, r) {
                return 0 > r && 1 === e.x && (e = new i.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new i.Vector2(r / 2 / Math.PI + .5, e.y)), e.clone()
            }

            i.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: e,
                indices: t,
                radius: r,
                detail: n
            }, r = r || 1, n = n || 0;
            for (var h = this, p = 0, d = e.length; d > p; p += 3)o(new i.Vector3(e[p], e[p + 1], e[p + 2]));
            for (var f = this.vertices, m = [], p = 0, g = 0, d = t.length; d > p; p += 3, g++) {
                var v = f[t[p]], y = f[t[p + 1]], x = f[t[p + 2]];
                m[g] = new i.Face3(v.index, y.index, x.index, [v.clone(), y.clone(), x.clone()], void 0, g)
            }
            for (var b = new i.Vector3, p = 0, d = m.length; d > p; p++)s(m[p], n);
            for (var p = 0, d = this.faceVertexUvs[0].length; d > p; p++) {
                var w = this.faceVertexUvs[0][p], S = w[0].x, M = w[1].x, T = w[2].x, _ = Math.max(S, M, T), E = Math.min(S, M, T);
                _ > .9 && .1 > E && (.2 > S && (w[0].x += 1), .2 > M && (w[1].x += 1), .2 > T && (w[2].x += 1))
            }
            for (var p = 0, d = this.vertices.length; d > p; p++)this.vertices[p].multiplyScalar(r);
            this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new i.Sphere(new i.Vector3, r)
        },i.PolyhedronGeometry.prototype = Object.create(i.Geometry.prototype),i.PolyhedronGeometry.prototype.constructor = i.PolyhedronGeometry,i.PolyhedronGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.PolyhedronGeometry(e.vertices, e.indices, e.radius, e.detail)
        },i.DodecahedronGeometry = function (e, t) {
            var r = (1 + Math.sqrt(5)) / 2, n = 1 / r, o = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
            i.PolyhedronGeometry.call(this, o, a, e, t), this.type = "DodecahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        },i.DodecahedronGeometry.prototype = Object.create(i.PolyhedronGeometry.prototype),i.DodecahedronGeometry.prototype.constructor = i.DodecahedronGeometry,i.DodecahedronGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.DodecahedronGeometry(e.radius, e.detail)
        },i.IcosahedronGeometry = function (e, t) {
            var r = (1 + Math.sqrt(5)) / 2, n = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1], o = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
            i.PolyhedronGeometry.call(this, n, o, e, t), this.type = "IcosahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        },i.IcosahedronGeometry.prototype = Object.create(i.PolyhedronGeometry.prototype),i.IcosahedronGeometry.prototype.constructor = i.IcosahedronGeometry,i.IcosahedronGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.IcosahedronGeometry(e.radius, e.detail)
        },i.OctahedronGeometry = function (e, t) {
            var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
            i.PolyhedronGeometry.call(this, r, n, e, t), this.type = "OctahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        },i.OctahedronGeometry.prototype = Object.create(i.PolyhedronGeometry.prototype),i.OctahedronGeometry.prototype.constructor = i.OctahedronGeometry,i.OctahedronGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.OctahedronGeometry(e.radius, e.detail)
        },i.TetrahedronGeometry = function (e, t) {
            var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
            i.PolyhedronGeometry.call(this, r, n, e, t), this.type = "TetrahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        },i.TetrahedronGeometry.prototype = Object.create(i.PolyhedronGeometry.prototype),i.TetrahedronGeometry.prototype.constructor = i.TetrahedronGeometry,i.TetrahedronGeometry.prototype.clone = function () {
            var e = this.parameters;
            return new i.TetrahedronGeometry(e.radius, e.detail)
        },i.ParametricGeometry = function (e, t, r) {
            i.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {func: e, slices: t, stacks: r};
            var n, o, a, s, u, c = this.vertices, l = this.faces, h = this.faceVertexUvs[0], p = t + 1;
            for (n = 0; r >= n; n++)for (u = n / r, o = 0; t >= o; o++)s = o / t, a = e(s, u), c.push(a);
            var d, f, m, g, v, y, x, b;
            for (n = 0; r > n; n++)for (o = 0; t > o; o++)d = n * p + o, f = n * p + o + 1, m = (n + 1) * p + o + 1, g = (n + 1) * p + o, v = new i.Vector2(o / t, n / r), y = new i.Vector2((o + 1) / t, n / r), x = new i.Vector2((o + 1) / t, (n + 1) / r), b = new i.Vector2(o / t, (n + 1) / r), l.push(new i.Face3(d, f, g)), h.push([v, y, b]), l.push(new i.Face3(f, m, g)), h.push([y.clone(), x, b.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        },i.ParametricGeometry.prototype = Object.create(i.Geometry.prototype),i.ParametricGeometry.prototype.constructor = i.ParametricGeometry,i.WireframeGeometry = function (e) {
            function t(e, t) {
                return e - t
            }

            i.BufferGeometry.call(this);
            var r = [0, 0], n = {}, o = ["a", "b", "c"];
            if (e instanceof i.Geometry) {
                for (var a = e.vertices, s = e.faces, u = 0, c = new Uint32Array(6 * s.length), l = 0, h = s.length; h > l; l++)for (var p = s[l], d = 0; 3 > d; d++) {
                    r[0] = p[o[d]], r[1] = p[o[(d + 1) % 3]], r.sort(t);
                    var f = r.toString();
                    void 0 === n[f] && (c[2 * u] = r[0], c[2 * u + 1] = r[1], n[f] = !0, u++)
                }
                for (var m = new Float32Array(2 * u * 3), l = 0, h = u; h > l; l++)for (var d = 0; 2 > d; d++) {
                    var g = a[c[2 * l + d]], v = 6 * l + 3 * d;
                    m[v + 0] = g.x, m[v + 1] = g.y, m[v + 2] = g.z
                }
                this.addAttribute("position", new i.BufferAttribute(m, 3))
            } else if (e instanceof i.BufferGeometry)if (null !== e.index) {
                var y = e.index.array, a = e.attributes.position, x = e.drawcalls, u = 0;
                0 === x.length && e.addGroup(0, y.length);
                for (var c = new Uint32Array(2 * y.length), b = 0, w = x.length; w > b; ++b)for (var S = x[b], M = S.start, T = S.count, l = M, _ = M + T; _ > l; l += 3)for (var d = 0; 3 > d; d++) {
                    r[0] = y[l + d], r[1] = y[l + (d + 1) % 3], r.sort(t);
                    var f = r.toString();
                    void 0 === n[f] && (c[2 * u] = r[0], c[2 * u + 1] = r[1], n[f] = !0, u++)
                }
                for (var m = new Float32Array(2 * u * 3), l = 0, h = u; h > l; l++)for (var d = 0; 2 > d; d++) {
                    var v = 6 * l + 3 * d, E = c[2 * l + d];
                    m[v + 0] = a.getX(E), m[v + 1] = a.getY(E), m[v + 2] = a.getZ(E)
                }
                this.addAttribute("position", new i.BufferAttribute(m, 3))
            } else {
                for (var a = e.attributes.position.array, u = a.length / 3, C = u / 3, m = new Float32Array(2 * u * 3), l = 0, h = C; h > l; l++)for (var d = 0; 3 > d; d++) {
                    var v = 18 * l + 6 * d, A = 9 * l + 3 * d;
                    m[v + 0] = a[A], m[v + 1] = a[A + 1], m[v + 2] = a[A + 2];
                    var E = 9 * l + 3 * ((d + 1) % 3);
                    m[v + 3] = a[E], m[v + 4] = a[E + 1], m[v + 5] = a[E + 2]
                }
                this.addAttribute("position", new i.BufferAttribute(m, 3))
            }
        },i.WireframeGeometry.prototype = Object.create(i.BufferGeometry.prototype),i.WireframeGeometry.prototype.constructor = i.WireframeGeometry,i.AxisHelper = function (e) {
            e = e || 1;
            var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]), r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]), n = new i.BufferGeometry;
            n.addAttribute("position", new i.BufferAttribute(t, 3)), n.addAttribute("color", new i.BufferAttribute(r, 3));
            var o = new i.LineBasicMaterial({vertexColors: i.VertexColors});
            i.LineSegments.call(this, n, o)
        },i.AxisHelper.prototype = Object.create(i.LineSegments.prototype),i.AxisHelper.prototype.constructor = i.AxisHelper,i.ArrowHelper = function () {
            var e = new i.Geometry;
            e.vertices.push(new i.Vector3(0, 0, 0), new i.Vector3(0, 1, 0));
            var t = new i.CylinderGeometry(0, .5, 1, 5, 1);
            return t.translate(0, -.5, 0), function (r, n, o, a, s, u) {
                i.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === o && (o = 1), void 0 === s && (s = .2 * o), void 0 === u && (u = .2 * s), this.position.copy(n), o > s && (this.line = new i.Line(e, new i.LineBasicMaterial({color: a})), this.line.matrixAutoUpdate = !1, this.add(this.line)), this.cone = new i.Mesh(t, new i.MeshBasicMaterial({color: a})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(o, s, u)
            }
        }(),i.ArrowHelper.prototype = Object.create(i.Object3D.prototype),i.ArrowHelper.prototype.constructor = i.ArrowHelper,i.ArrowHelper.prototype.setDirection = function () {
            var e, t = new i.Vector3;
            return function (r) {
                r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e))
            }
        }(),i.ArrowHelper.prototype.setLength = function (e, t, r) {
            void 0 === t && (t = .2 * e), void 0 === r && (r = .2 * t), e > t && (this.line.scale.set(1, e - t, 1), this.line.updateMatrix()), this.cone.scale.set(r, t, r), this.cone.position.y = e, this.cone.updateMatrix()
        },i.ArrowHelper.prototype.setColor = function (e) {
            void 0 !== this.line && this.line.material.color.set(e), this.cone.material.color.set(e)
        },i.BoxHelper = function (e) {
            var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(24), n = new i.BufferGeometry;
            n.setIndex(new i.BufferAttribute(t, 1)), n.addAttribute("position", new i.BufferAttribute(r, 3)), i.LineSegments.call(this, n, new i.LineBasicMaterial({color: 16776960})), void 0 !== e && this.update(e)
        },i.BoxHelper.prototype = Object.create(i.LineSegments.prototype),i.BoxHelper.prototype.constructor = i.BoxHelper,i.BoxHelper.prototype.update = function () {
            var e = new i.Box3;
            return function (t) {
                if (e.setFromObject(t), !e.empty()) {
                    var r = e.min, n = e.max, i = this.geometry.attributes.position, o = i.array;
                    o[0] = n.x, o[1] = n.y, o[2] = n.z, o[3] = r.x, o[4] = n.y, o[5] = n.z, o[6] = r.x, o[7] = r.y, o[8] = n.z, o[9] = n.x, o[10] = r.y, o[11] = n.z, o[12] = n.x, o[13] = n.y, o[14] = r.z, o[15] = r.x, o[16] = n.y, o[17] = r.z, o[18] = r.x, o[19] = r.y, o[20] = r.z, o[21] = n.x, o[22] = r.y, o[23] = r.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }
        }(),i.BoundingBoxHelper = function (e, t) {
            var r = void 0 !== t ? t : 8947848;
            this.object = e, this.box = new i.Box3, i.Mesh.call(this, new i.BoxGeometry(1, 1, 1), new i.MeshBasicMaterial({
                color: r,
                wireframe: !0
            }))
        },i.BoundingBoxHelper.prototype = Object.create(i.Mesh.prototype),i.BoundingBoxHelper.prototype.constructor = i.BoundingBoxHelper,i.BoundingBoxHelper.prototype.update = function () {
            this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
        },i.CameraHelper = function (e) {
            function t(e, t, n) {
                r(e, n), r(t, n)
            }

            function r(e, t) {
                n.vertices.push(new i.Vector3), n.colors.push(new i.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(n.vertices.length - 1)
            }

            var n = new i.Geometry, o = new i.LineBasicMaterial({
                color: 16777215,
                vertexColors: i.FaceColors
            }), a = {}, s = 16755200, u = 16711680, c = 43775, l = 16777215, h = 3355443;
            t("n1", "n2", s), t("n2", "n4", s), t("n4", "n3", s), t("n3", "n1", s), t("f1", "f2", s), t("f2", "f4", s), t("f4", "f3", s), t("f3", "f1", s), t("n1", "f1", s), t("n2", "f2", s), t("n3", "f3", s), t("n4", "f4", s), t("p", "n1", u), t("p", "n2", u), t("p", "n3", u), t("p", "n4", u), t("u1", "u2", c), t("u2", "u3", c), t("u3", "u1", c), t("c", "t", l), t("p", "c", h), t("cn1", "cn2", h), t("cn3", "cn4", h), t("cf1", "cf2", h), t("cf3", "cf4", h), i.LineSegments.call(this, n, o), this.camera = e, this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
        },i.CameraHelper.prototype = Object.create(i.LineSegments.prototype),i.CameraHelper.prototype.constructor = i.CameraHelper,i.CameraHelper.prototype.update = function () {
            function e(e, i, a, s) {
                n.set(i, a, s).unproject(o);
                var u = r[e];
                if (void 0 !== u)for (var c = 0, l = u.length; l > c; c++)t.vertices[u[c]].copy(n)
            }

            var t, r, n = new i.Vector3, o = new i.Camera;
            return function () {
                t = this.geometry, r = this.pointMap;
                var n = 1, i = 1;
                o.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -n, -i, -1), e("n2", n, -i, -1), e("n3", -n, i, -1), e("n4", n, i, -1), e("f1", -n, -i, 1), e("f2", n, -i, 1), e("f3", -n, i, 1), e("f4", n, i, 1), e("u1", .7 * n, 1.1 * i, -1), e("u2", .7 * -n, 1.1 * i, -1), e("u3", 0, 2 * i, -1), e("cf1", -n, 0, 1), e("cf2", n, 0, 1), e("cf3", 0, -i, 1), e("cf4", 0, i, 1), e("cn1", -n, 0, -1), e("cn2", n, 0, -1), e("cn3", 0, -i, -1), e("cn4", 0, i, -1), t.verticesNeedUpdate = !0
            }
        }(),i.DirectionalLightHelper = function (e, t) {
            i.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
            var r = new i.Geometry;
            r.vertices.push(new i.Vector3(-t, t, 0), new i.Vector3(t, t, 0), new i.Vector3(t, -t, 0), new i.Vector3(-t, -t, 0), new i.Vector3(-t, t, 0));
            var n = new i.LineBasicMaterial({fog: !1});
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new i.Line(r, n), this.add(this.lightPlane), r = new i.Geometry, r.vertices.push(new i.Vector3, new i.Vector3), n = new i.LineBasicMaterial({fog: !1}), n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new i.Line(r, n), this.add(this.targetLine), this.update()
        },i.DirectionalLightHelper.prototype = Object.create(i.Object3D.prototype),i.DirectionalLightHelper.prototype.constructor = i.DirectionalLightHelper,i.DirectionalLightHelper.prototype.dispose = function () {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        },i.DirectionalLightHelper.prototype.update = function () {
            var e = new i.Vector3, t = new i.Vector3, r = new i.Vector3;
            return function () {
                e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(t, e), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
            }
        }(),i.EdgesHelper = function (e, t, r) {
            var n = void 0 !== t ? t : 16777215;
            i.LineSegments.call(this, new i.EdgesGeometry(e.geometry, r), new i.LineBasicMaterial({color: n})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
        },i.EdgesHelper.prototype = Object.create(i.LineSegments.prototype),i.EdgesHelper.prototype.constructor = i.EdgesHelper,i.FaceNormalsHelper = function (e, t, r, n) {
            this.object = e, this.size = void 0 !== t ? t : 1;
            var o = void 0 !== r ? r : 16776960, a = void 0 !== n ? n : 1, s = 0, u = this.object.geometry;
            u instanceof i.Geometry ? s = u.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
            var c = new i.BufferGeometry, l = new i.Float32Attribute(2 * s * 3, 3);
            c.addAttribute("position", l), i.LineSegments.call(this, c, new i.LineBasicMaterial({
                color: o,
                linewidth: a
            })), this.matrixAutoUpdate = !1, this.update()
        },i.FaceNormalsHelper.prototype = Object.create(i.LineSegments.prototype),i.FaceNormalsHelper.prototype.constructor = i.FaceNormalsHelper,i.FaceNormalsHelper.prototype.update = function () {
            var e = new i.Vector3, t = new i.Vector3, r = new i.Matrix3;
            return function () {
                this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
                for (var n = this.object.matrixWorld, i = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, u = 0, c = 0, l = s.length; l > c; c++) {
                    var h = s[c], p = h.normal;
                    e.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(n), t.copy(p).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), i.setXYZ(u, e.x, e.y, e.z), u += 1, i.setXYZ(u, t.x, t.y, t.z), u += 1
                }
                return i.needsUpdate = !0, this
            }
        }(),i.GridHelper = function (e, t) {
            var r = new i.Geometry, n = new i.LineBasicMaterial({vertexColors: i.VertexColors});
            this.color1 = new i.Color(4473924), this.color2 = new i.Color(8947848);
            for (var o = -e; e >= o; o += t) {
                r.vertices.push(new i.Vector3(-e, 0, o), new i.Vector3(e, 0, o), new i.Vector3(o, 0, -e), new i.Vector3(o, 0, e));
                var a = 0 === o ? this.color1 : this.color2;
                r.colors.push(a, a, a, a)
            }
            i.LineSegments.call(this, r, n)
        },i.GridHelper.prototype = Object.create(i.LineSegments.prototype),i.GridHelper.prototype.constructor = i.GridHelper,i.GridHelper.prototype.setColors = function (e, t) {
            this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
        },i.HemisphereLightHelper = function (e, t) {
            i.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new i.Color, new i.Color];
            var r = new i.SphereGeometry(t, 4, 2);
            r.rotateX(-Math.PI / 2);
            for (var n = 0, o = 8; o > n; n++)r.faces[n].color = this.colors[4 > n ? 0 : 1];
            var a = new i.MeshBasicMaterial({vertexColors: i.FaceColors, wireframe: !0});
            this.lightSphere = new i.Mesh(r, a), this.add(this.lightSphere), this.update()
        },i.HemisphereLightHelper.prototype = Object.create(i.Object3D.prototype),i.HemisphereLightHelper.prototype.constructor = i.HemisphereLightHelper,i.HemisphereLightHelper.prototype.dispose = function () {
            this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
        },i.HemisphereLightHelper.prototype.update = function () {
            var e = new i.Vector3;
            return function () {
                this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
            }
        }(),i.PointLightHelper = function (e, t) {
            this.light = e, this.light.updateMatrixWorld();
            var r = new i.SphereGeometry(t, 4, 2), n = new i.MeshBasicMaterial({wireframe: !0, fog: !1});
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), i.Mesh.call(this, r, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
        },i.PointLightHelper.prototype = Object.create(i.Mesh.prototype),i.PointLightHelper.prototype.constructor = i.PointLightHelper,i.PointLightHelper.prototype.dispose = function () {
            this.geometry.dispose(), this.material.dispose()
        },i.PointLightHelper.prototype.update = function () {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        },i.SkeletonHelper = function (e) {
            this.bones = this.getBoneList(e);
            for (var t = new i.Geometry, r = 0; r < this.bones.length; r++) {
                var n = this.bones[r];
                n.parent instanceof i.Bone && (t.vertices.push(new i.Vector3), t.vertices.push(new i.Vector3), t.colors.push(new i.Color(0, 0, 1)), t.colors.push(new i.Color(0, 1, 0)))
            }
            t.dynamic = !0;
            var o = new i.LineBasicMaterial({
                vertexColors: i.VertexColors,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            i.LineSegments.call(this, t, o), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        },i.SkeletonHelper.prototype = Object.create(i.LineSegments.prototype),i.SkeletonHelper.prototype.constructor = i.SkeletonHelper,i.SkeletonHelper.prototype.getBoneList = function (e) {
            var t = [];
            e instanceof i.Bone && t.push(e);
            for (var r = 0; r < e.children.length; r++)t.push.apply(t, this.getBoneList(e.children[r]));
            return t
        },i.SkeletonHelper.prototype.update = function () {
            for (var e = this.geometry, t = (new i.Matrix4).getInverse(this.root.matrixWorld), r = new i.Matrix4, n = 0, o = 0; o < this.bones.length; o++) {
                var a = this.bones[o];
                a.parent instanceof i.Bone && (r.multiplyMatrices(t, a.matrixWorld), e.vertices[n].setFromMatrixPosition(r), r.multiplyMatrices(t, a.parent.matrixWorld), e.vertices[n + 1].setFromMatrixPosition(r), n += 2)
            }
            e.verticesNeedUpdate = !0, e.computeBoundingSphere()
        },i.SpotLightHelper = function (e) {
            i.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
            var t = new i.CylinderGeometry(0, 1, 1, 8, 1, !0);
            t.translate(0, -.5, 0), t.rotateX(-Math.PI / 2);
            var r = new i.MeshBasicMaterial({wireframe: !0, fog: !1});
            this.cone = new i.Mesh(t, r), this.add(this.cone), this.update()
        },i.SpotLightHelper.prototype = Object.create(i.Object3D.prototype),i.SpotLightHelper.prototype.constructor = i.SpotLightHelper,i.SpotLightHelper.prototype.dispose = function () {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        },i.SpotLightHelper.prototype.update = function () {
            var e = new i.Vector3, t = new i.Vector3;
            return function () {
                var r = this.light.distance ? this.light.distance : 1e4, n = r * Math.tan(this.light.angle);
                this.cone.scale.set(n, n, r), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
            }
        }(),i.VertexNormalsHelper = function (e, t, r, n) {
            this.object = e, this.size = void 0 !== t ? t : 1;
            var o = void 0 !== r ? r : 16711680, a = void 0 !== n ? n : 1, s = 0, u = this.object.geometry;
            u instanceof i.Geometry ? s = 3 * u.faces.length : u instanceof i.BufferGeometry && (s = u.attributes.normal.count);
            var c = new i.BufferGeometry, l = new i.Float32Attribute(2 * s * 3, 3);
            c.addAttribute("position", l), i.LineSegments.call(this, c, new i.LineBasicMaterial({
                color: o,
                linewidth: a
            })), this.matrixAutoUpdate = !1, this.update()
        },i.VertexNormalsHelper.prototype = Object.create(i.LineSegments.prototype),i.VertexNormalsHelper.prototype.constructor = i.VertexNormalsHelper,i.VertexNormalsHelper.prototype.update = function () {
            var e = new i.Vector3, t = new i.Vector3, r = new i.Matrix3;
            return function () {
                var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
                var o = this.object.matrixWorld, a = this.geometry.attributes.position, s = this.object.geometry;
                if (s instanceof i.Geometry)for (var u = s.vertices, c = s.faces, l = 0, h = 0, p = c.length; p > h; h++)for (var d = c[h], f = 0, m = d.vertexNormals.length; m > f; f++) {
                    var g = u[d[n[f]]], v = d.vertexNormals[f];
                    e.copy(g).applyMatrix4(o), t.copy(v).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), a.setXYZ(l, e.x, e.y, e.z), l += 1, a.setXYZ(l, t.x, t.y, t.z), l += 1
                } else if (s instanceof i.BufferGeometry)for (var y = s.attributes.position, x = s.attributes.normal, l = 0, f = 0, m = y.count; m > f; f++)e.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(o), t.set(x.getX(f), x.getY(f), x.getZ(f)), t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), a.setXYZ(l, e.x, e.y, e.z), l += 1, a.setXYZ(l, t.x, t.y, t.z), l += 1;
                return a.needsUpdate = !0, this
            }
        }(),i.WireframeHelper = function (e, t) {
            var r = void 0 !== t ? t : 16777215;
            i.LineSegments.call(this, new i.WireframeGeometry(e.geometry), new i.LineBasicMaterial({color: r})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
        },i.WireframeHelper.prototype = Object.create(i.LineSegments.prototype),i.WireframeHelper.prototype.constructor = i.WireframeHelper,i.ImmediateRenderObject = function (e) {
            i.Object3D.call(this), this.material = e, this.render = function (e) {
            }
        },i.ImmediateRenderObject.prototype = Object.create(i.Object3D.prototype),i.ImmediateRenderObject.prototype.constructor = i.ImmediateRenderObject,i.MorphBlendMesh = function (e, t) {
            i.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
            var r = this.geometry.morphTargets.length, n = "__default", o = 0, a = r - 1, s = r / 1;
            this.createAnimation(n, o, a, s), this.setAnimationWeight(n, 1)
        },i.MorphBlendMesh.prototype = Object.create(i.Mesh.prototype),i.MorphBlendMesh.prototype.constructor = i.MorphBlendMesh,i.MorphBlendMesh.prototype.createAnimation = function (e, t, r, n) {
            var i = {
                start: t,
                end: r,
                length: r - t + 1,
                fps: n,
                duration: (r - t) / n,
                lastFrame: 0,
                currentFrame: 0,
                active: !1,
                time: 0,
                direction: 1,
                weight: 1,
                directionBackwards: !1,
                mirroredLoop: !1
            };
            this.animationsMap[e] = i, this.animationsList.push(i)
        },i.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
            for (var t, r = /([a-z]+)_?(\d+)/, n = {}, i = this.geometry, o = 0, a = i.morphTargets.length; a > o; o++) {
                var s = i.morphTargets[o], u = s.name.match(r);
                if (u && u.length > 1) {
                    var c = u[1];
                    n[c] || (n[c] = {start: 1 / 0, end: -(1 / 0)});
                    var l = n[c];
                    o < l.start && (l.start = o), o > l.end && (l.end = o), t || (t = c)
                }
            }
            for (var c in n) {
                var l = n[c];
                this.createAnimation(c, l.start, l.end, e)
            }
            this.firstAnimation = t
        },i.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
            var t = this.animationsMap[e];
            t && (t.direction = 1, t.directionBackwards = !1)
        },i.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
            var t = this.animationsMap[e];
            t && (t.direction = -1, t.directionBackwards = !0)
        },i.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
            var r = this.animationsMap[e];
            r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
        },i.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
            var r = this.animationsMap[e];
            r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
        },i.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
            var r = this.animationsMap[e];
            r && (r.weight = t)
        },i.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
            var r = this.animationsMap[e];
            r && (r.time = t)
        },i.MorphBlendMesh.prototype.getAnimationTime = function (e) {
            var t = 0, r = this.animationsMap[e];
            return r && (t = r.time), t
        },i.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
            var t = -1, r = this.animationsMap[e];
            return r && (t = r.duration), t
        },i.MorphBlendMesh.prototype.playAnimation = function (e) {
            var t = this.animationsMap[e];
            t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
        },i.MorphBlendMesh.prototype.stopAnimation = function (e) {
            var t = this.animationsMap[e];
            t && (t.active = !1)
        },i.MorphBlendMesh.prototype.update = function (e) {
            for (var t = 0, r = this.animationsList.length; r > t; t++) {
                var n = this.animationsList[t];
                if (n.active) {
                    var o = n.duration / n.length;
                    n.time += n.direction * e, n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), n.time < 0 && (n.time = 0, n.directionBackwards = !1)) : (n.time = n.time % n.duration, n.time < 0 && (n.time += n.duration));
                    var a = n.start + i.Math.clamp(Math.floor(n.time / o), 0, n.length - 1), s = n.weight;
                    a !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * s, this.morphTargetInfluences[a] = 0, n.lastFrame = n.currentFrame, n.currentFrame = a);
                    var u = n.time % o / o;
                    n.directionBackwards && (u = 1 - u), n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = u * s, this.morphTargetInfluences[n.lastFrame] = (1 - u) * s) : this.morphTargetInfluences[n.currentFrame] = s
                }
            }
        },"undefined" != typeof r ? ("undefined" != typeof t && t.exports && (r = t.exports = i), r.THREE = i) : this.THREE = i
    }, {}], 15: [function (e, t, r) {
        !function () {
            if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function () {
                        return (new Date).getTime()
                    }, "now" in window.performance == !1) {
                var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
                window.performance.now = function () {
                    return Date.now() - e
                }
            }
        }();
        var n = n || function () {
                var e = [];
                return {
                    getAll: function () {
                        return e
                    }, removeAll: function () {
                        e = []
                    }, add: function (t) {
                        e.push(t)
                    }, remove: function (t) {
                        var r = e.indexOf(t);
                        -1 !== r && e.splice(r, 1)
                    }, update: function (t) {
                        if (0 === e.length)return !1;
                        var r = 0;
                        for (t = void 0 !== t ? t : window.performance.now(); r < e.length;)e[r].update(t) ? r++ : e.splice(r, 1);
                        return !0
                    }
                }
            }();
        n.Tween = function (e) {
            var t = e, r = {}, i = {}, o = {}, a = 1e3, s = 0, u = !1, c = !1, l = !1, h = 0, p = null, d = n.Easing.Linear.None, f = n.Interpolation.Linear, m = [], g = null, v = !1, y = null, x = null, b = null;
            for (var w in e)r[w] = parseFloat(e[w], 10);
            this.to = function (e, t) {
                return void 0 !== t && (a = t), i = e, this
            }, this.start = function (e) {
                n.add(this), c = !0, v = !1, p = void 0 !== e ? e : window.performance.now(), p += h;
                for (var a in i) {
                    if (i[a] instanceof Array) {
                        if (0 === i[a].length)continue;
                        i[a] = [t[a]].concat(i[a])
                    }
                    r[a] = t[a], r[a] instanceof Array == !1 && (r[a] *= 1), o[a] = r[a] || 0
                }
                return this
            }, this.stop = function () {
                return c ? (n.remove(this), c = !1, null !== b && b.call(t), this.stopChainedTweens(), this) : this
            }, this.stopChainedTweens = function () {
                for (var e = 0, t = m.length; t > e; e++)m[e].stop()
            }, this.delay = function (e) {
                return h = e, this
            }, this.repeat = function (e) {
                return s = e, this
            }, this.yoyo = function (e) {
                return u = e, this
            }, this.easing = function (e) {
                return d = e, this
            }, this.interpolation = function (e) {
                return f = e, this
            }, this.chain = function () {
                return m = arguments, this
            }, this.onStart = function (e) {
                return g = e, this
            }, this.onUpdate = function (e) {
                return y = e, this
            }, this.onComplete = function (e) {
                return x = e, this
            }, this.onStop = function (e) {
                return b = e, this
            }, this.update = function (e) {
                var n, c, b;
                if (p > e)return !0;
                v === !1 && (null !== g && g.call(t), v = !0), c = (e - p) / a, c = c > 1 ? 1 : c, b = d(c);
                for (n in i) {
                    var w = r[n] || 0, S = i[n];
                    S instanceof Array ? t[n] = f(S, b) : ("string" == typeof S && (S = w + parseFloat(S, 10)), "number" == typeof S && (t[n] = w + (S - w) * b))
                }
                if (null !== y && y.call(t, b), 1 === c) {
                    if (s > 0) {
                        isFinite(s) && s--;
                        for (n in o) {
                            if ("string" == typeof i[n] && (o[n] = o[n] + parseFloat(i[n], 10)), u) {
                                var M = o[n];
                                o[n] = i[n], i[n] = M
                            }
                            r[n] = o[n]
                        }
                        return u && (l = !l), p = e + h, !0
                    }
                    null !== x && x.call(t);
                    for (var T = 0, _ = m.length; _ > T; T++)m[T].start(p + a);
                    return !1
                }
                return !0
            }
        }, n.Easing = {
            Linear: {
                None: function (e) {
                    return e
                }
            }, Quadratic: {
                In: function (e) {
                    return e * e
                }, Out: function (e) {
                    return e * (2 - e)
                }, InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }
            }, Cubic: {
                In: function (e) {
                    return e * e * e
                }, Out: function (e) {
                    return --e * e * e + 1
                }, InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            }, Quartic: {
                In: function (e) {
                    return e * e * e * e
                }, Out: function (e) {
                    return 1 - --e * e * e * e
                }, InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }
            }, Quintic: {
                In: function (e) {
                    return e * e * e * e * e
                }, Out: function (e) {
                    return --e * e * e * e * e + 1
                }, InOut: function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            }, Sinusoidal: {
                In: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }, Out: function (e) {
                    return Math.sin(e * Math.PI / 2)
                }, InOut: function (e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            }, Exponential: {
                In: function (e) {
                    return 0 === e ? 0 : Math.pow(1024, e - 1)
                }, Out: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                }, InOut: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
                }
            }, Circular: {
                In: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                }, Out: function (e) {
                    return Math.sqrt(1 - --e * e)
                }, InOut: function (e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            }, Elastic: {
                In: function (e) {
                    var t, r = .1, n = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
                }, Out: function (e) {
                    var t, r = .1, n = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                }, InOut: function (e) {
                    var t, r = .1, n = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                }
            }, Back: {
                In: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                }, Out: function (e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                }, InOut: function (e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            }, Bounce: {
                In: function (e) {
                    return 1 - n.Easing.Bounce.Out(1 - e)
                }, Out: function (e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }, InOut: function (e) {
                    return .5 > e ? .5 * n.Easing.Bounce.In(2 * e) : .5 * n.Easing.Bounce.Out(2 * e - 1) + .5
                }
            }
        }, n.Interpolation = {
            Linear: function (e, t) {
                var r = e.length - 1, i = r * t, o = Math.floor(i), a = n.Interpolation.Utils.Linear;
                return 0 > t ? a(e[0], e[1], i) : t > 1 ? a(e[r], e[r - 1], r - i) : a(e[o], e[o + 1 > r ? r : o + 1], i - o)
            }, Bezier: function (e, t) {
                for (var r = 0, i = e.length - 1, o = Math.pow, a = n.Interpolation.Utils.Bernstein, s = 0; i >= s; s++)r += o(1 - t, i - s) * o(t, s) * e[s] * a(i, s);
                return r
            }, CatmullRom: function (e, t) {
                var r = e.length - 1, i = r * t, o = Math.floor(i), a = n.Interpolation.Utils.CatmullRom;
                return e[0] === e[r] ? (0 > t && (o = Math.floor(i = r * (1 + t))), a(e[(o - 1 + r) % r], e[o], e[(o + 1) % r], e[(o + 2) % r], i - o)) : 0 > t ? e[0] - (a(e[0], e[0], e[1], e[1], -i) - e[0]) : t > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], i - r) - e[r]) : a(e[o ? o - 1 : 0], e[o], e[o + 1 > r ? r : o + 1], e[o + 2 > r ? r : o + 2], i - o)
            }, Utils: {
                Linear: function (e, t, r) {
                    return (t - e) * r + e
                }, Bernstein: function (e, t) {
                    var r = n.Interpolation.Utils.Factorial;
                    return r(e) / r(t) / r(e - t)
                }, Factorial: function () {
                    var e = [1];
                    return function (t) {
                        var r = 1;
                        if (e[t])return e[t];
                        for (var n = t; n > 1; n--)r *= n;
                        return e[t] = r, r
                    }
                }(), CatmullRom: function (e, t, r, n, i) {
                    var o = .5 * (r - e), a = .5 * (n - t), s = i * i, u = i * s;
                    return (2 * t - 2 * r + o + a) * u + (-3 * t + 3 * r - 2 * o - a) * s + o * i + t
                }
            }
        }, function (e) {
            "function" == typeof define && define.amd ? define([], function () {
                return n
            }) : "object" == typeof r ? t.exports = n : e.TWEEN = n
        }(this)
    }, {}], 16: [function (e, t, r) {
        !function (e) {
            function t(e) {
                var t = e.length, n = r.type(e);
                return "function" === n || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            if (!e.jQuery) {
                var r = function (e, t) {
                    return new r.fn.init(e, t)
                };
                r.isWindow = function (e) {
                    return null != e && e == e.window
                }, r.type = function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
                }, r.isArray = Array.isArray || function (e) {
                        return "array" === r.type(e)
                    }, r.isPlainObject = function (e) {
                    var t;
                    if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))return !1;
                    try {
                        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf"))return !1
                    } catch (n) {
                        return !1
                    }
                    for (t in e);
                    return void 0 === t || o.call(e, t)
                }, r.each = function (e, r, n) {
                    var i, o = 0, a = e.length, s = t(e);
                    if (n) {
                        if (s)for (; a > o && (i = r.apply(e[o], n), i !== !1); o++); else for (o in e)if (i = r.apply(e[o], n), i === !1)break
                    } else if (s)for (; a > o && (i = r.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = r.call(e[o], o, e[o]), i === !1)break;
                    return e
                }, r.data = function (e, t, i) {
                    if (void 0 === i) {
                        var o = e[r.expando], a = o && n[o];
                        if (void 0 === t)return a;
                        if (a && t in a)return a[t]
                    } else if (void 0 !== t) {
                        var o = e[r.expando] || (e[r.expando] = ++r.uuid);
                        return n[o] = n[o] || {}, n[o][t] = i, i
                    }
                }, r.removeData = function (e, t) {
                    var i = e[r.expando], o = i && n[i];
                    o && r.each(t, function (e, t) {
                        delete o[t]
                    })
                }, r.extend = function () {
                    var e, t, n, i, o, a, s = arguments[0] || {}, u = 1, c = arguments.length, l = !1;
                    for ("boolean" == typeof s && (l = s, s = arguments[u] || {}, u++), "object" != typeof s && "function" !== r.type(s) && (s = {}), u === c && (s = this, u--); c > u; u++)if (null != (o = arguments[u]))for (i in o)e = s[i], n = o[i], s !== n && (l && n && (r.isPlainObject(n) || (t = r.isArray(n))) ? (t ? (t = !1, a = e && r.isArray(e) ? e : []) : a = e && r.isPlainObject(e) ? e : {}, s[i] = r.extend(l, a, n)) : void 0 !== n && (s[i] = n));
                    return s
                }, r.queue = function (e, n, i) {
                    function o(e, r) {
                        var n = r || [];
                        return null != e && (t(Object(e)) ? !function (e, t) {
                            for (var r = +t.length, n = 0, i = e.length; r > n;)e[i++] = t[n++];
                            if (r !== r)for (; void 0 !== t[n];)e[i++] = t[n++];
                            return e.length = i, e
                        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                    }

                    if (e) {
                        n = (n || "fx") + "queue";
                        var a = r.data(e, n);
                        return i ? (!a || r.isArray(i) ? a = r.data(e, n, o(i)) : a.push(i), a) : a || []
                    }
                }, r.dequeue = function (e, t) {
                    r.each(e.nodeType ? [e] : e, function (e, n) {
                        t = t || "fx";
                        var i = r.queue(n, t), o = i.shift();
                        "inprogress" === o && (o = i.shift()), o && ("fx" === t && i.unshift("inprogress"), o.call(n, function () {
                            r.dequeue(n, t)
                        }))
                    })
                }, r.fn = r.prototype = {
                    init: function (e) {
                        if (e.nodeType)return this[0] = e, this;
                        throw new Error("Not a DOM node.")
                    }, offset: function () {
                        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                        return {
                            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    }, position: function () {
                        function e() {
                            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;)e = e.offsetParent;
                            return e || document
                        }

                        var t = this[0], e = e.apply(t), n = this.offset(), i = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : r(e).offset();
                        return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
                            top: n.top - i.top,
                            left: n.left - i.left
                        }
                    }
                };
                var n = {};
                r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
                for (var i = {}, o = i.hasOwnProperty, a = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < s.length; u++)i["[object " + s[u] + "]"] = s[u].toLowerCase();
                r.fn.init.prototype = r.fn, e.Velocity = {Utilities: r}
            }
        }(window), function (e) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
        }(function () {
            return function (e, t, r, n) {
                function i(e) {
                    for (var t = -1, r = e ? e.length : 0, n = []; ++t < r;) {
                        var i = e[t];
                        i && n.push(i)
                    }
                    return n
                }

                function o(e) {
                    return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
                }

                function a(e) {
                    var t = p.data(e, "velocity");
                    return null === t ? n : t
                }

                function s(e) {
                    return function (t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }

                function u(e, r, n, i) {
                    function o(e, t) {
                        return 1 - 3 * t + 3 * e
                    }

                    function a(e, t) {
                        return 3 * t - 6 * e
                    }

                    function s(e) {
                        return 3 * e
                    }

                    function u(e, t, r) {
                        return ((o(t, r) * e + a(t, r)) * e + s(t)) * e
                    }

                    function c(e, t, r) {
                        return 3 * o(t, r) * e * e + 2 * a(t, r) * e + s(t)
                    }

                    function l(t, r) {
                        for (var i = 0; m > i; ++i) {
                            var o = c(r, e, n);
                            if (0 === o)return r;
                            var a = u(r, e, n) - t;
                            r -= a / o
                        }
                        return r
                    }

                    function h() {
                        for (var t = 0; x > t; ++t)M[t] = u(t * b, e, n)
                    }

                    function p(t, r, i) {
                        var o, a, s = 0;
                        do a = r + (i - r) / 2, o = u(a, e, n) - t, o > 0 ? i = a : r = a; while (Math.abs(o) > v && ++s < y);
                        return a
                    }

                    function d(t) {
                        for (var r = 0, i = 1, o = x - 1; i != o && M[i] <= t; ++i)r += b;
                        --i;
                        var a = (t - M[i]) / (M[i + 1] - M[i]), s = r + a * b, u = c(s, e, n);
                        return u >= g ? l(t, s) : 0 == u ? s : p(t, r, r + b)
                    }

                    function f() {
                        T = !0, (e != r || n != i) && h()
                    }

                    var m = 4, g = .001, v = 1e-7, y = 10, x = 11, b = 1 / (x - 1), w = "Float32Array" in t;
                    if (4 !== arguments.length)return !1;
                    for (var S = 0; 4 > S; ++S)if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S]))return !1;
                    e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                    var M = w ? new Float32Array(x) : new Array(x), T = !1, _ = function (t) {
                        return T || f(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : u(d(t), r, i)
                    };
                    _.getControlPoints = function () {
                        return [{x: e, y: r}, {x: n, y: i}]
                    };
                    var E = "generateBezier(" + [e, r, n, i] + ")";
                    return _.toString = function () {
                        return E
                    }, _
                }

                function c(e, t) {
                    var r = e;
                    return m.isString(e) ? x.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? u.apply(null, e) : !1, r === !1 && (r = x.Easings[x.defaults.easing] ? x.defaults.easing : y), r
                }

                function l(e) {
                    if (e) {
                        var t = (new Date).getTime(), r = x.State.calls.length;
                        r > 1e4 && (x.State.calls = i(x.State.calls));
                        for (var o = 0; r > o; o++)if (x.State.calls[o]) {
                            var s = x.State.calls[o], u = s[0], c = s[2], d = s[3], f = !!d, g = null;
                            d || (d = x.State.calls[o][3] = t - 16);
                            for (var v = Math.min((t - d) / c.duration, 1), y = 0, b = u.length; b > y; y++) {
                                var S = u[y], T = S.element;
                                if (a(T)) {
                                    var _ = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(E, function (e, t) {
                                                w.setPropertyValue(T, "display", t)
                                            })
                                        }
                                        w.setPropertyValue(T, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(T, "visibility", c.visibility);
                                    for (var C in S)if ("element" !== C) {
                                        var A, L = S[C], P = m.isString(L.easing) ? x.Easings[L.easing] : L.easing;
                                        if (1 === v)A = L.endValue; else {
                                            var k = L.endValue - L.startValue;
                                            if (A = L.startValue + k * P(v, c, k), !f && A === L.currentValue)continue
                                        }
                                        if (L.currentValue = A, "tween" === C)g = A; else {
                                            if (w.Hooks.registered[C]) {
                                                var D = w.Hooks.getRoot(C), R = a(T).rootPropertyValueCache[D];
                                                R && (L.rootPropertyValue = R)
                                            }
                                            var O = w.setPropertyValue(T, C, L.currentValue + (0 === parseFloat(A) ? "" : L.unitType), L.rootPropertyValue, L.scrollData);
                                            w.Hooks.registered[C] && (w.Normalizations.registered[D] ? a(T).rootPropertyValueCache[D] = w.Normalizations.registered[D]("extract", null, O[1]) : a(T).rootPropertyValueCache[D] = O[1]), "transform" === O[0] && (_ = !0)
                                        }
                                    }
                                    c.mobileHA && a(T).transformCache.translate3d === n && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && w.flushTransformCache(T)
                                }
                            }
                            c.display !== n && "none" !== c.display && (x.State.calls[o][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (x.State.calls[o][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], v, Math.max(0, d + c.duration - t), d, g), 1 === v && h(o)
                        }
                    }
                    x.State.isTicking && M(l)
                }

                function h(e, t) {
                    if (!x.State.calls[e])return !1;
                    for (var r = x.State.calls[e][0], i = x.State.calls[e][1], o = x.State.calls[e][2], s = x.State.calls[e][4], u = !1, c = 0, l = r.length; l > c; c++) {
                        var h = r[c].element;
                        if (t || o.loop || ("none" === o.display && w.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(h, "visibility", o.visibility)), o.loop !== !0 && (p.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(h)[1])) && a(h)) {
                            a(h).isAnimating = !1, a(h).rootPropertyValueCache = {};
                            var d = !1;
                            p.each(w.Lists.transforms3D, function (e, t) {
                                var r = /^scale/.test(t) ? 1 : 0, i = a(h).transformCache[t];
                                a(h).transformCache[t] !== n && new RegExp("^\\(" + r + "[^.]").test(i) && (d = !0, delete a(h).transformCache[t])
                            }), o.mobileHA && (d = !0, delete a(h).transformCache.translate3d), d && w.flushTransformCache(h), w.Values.removeClass(h, "velocity-animating")
                        }
                        if (!t && o.complete && !o.loop && c === l - 1)try {
                            o.complete.call(i, i)
                        } catch (f) {
                            setTimeout(function () {
                                throw f
                            }, 1)
                        }
                        s && o.loop !== !0 && s(i), a(h) && o.loop === !0 && !t && (p.each(a(h).tweensContainer, function (e, t) {
                            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                        }), x(h, "reverse", {loop: !0, delay: o.delay})), o.queue !== !1 && p.dequeue(h, o.queue)
                    }
                    x.State.calls[e] = !1;
                    for (var m = 0, g = x.State.calls.length; g > m; m++)if (x.State.calls[m] !== !1) {
                        u = !0;
                        break
                    }
                    u === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
                }

                var p, d = function () {
                    if (r.documentMode)return r.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = r.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)return t = null, e
                    }
                    return n
                }(), f = function () {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                            var r, n = (new Date).getTime();
                            return r = Math.max(0, 16 - (n - e)), e = n + r, setTimeout(function () {
                                t(n + r)
                            }, r)
                        }
                }(), m = {
                    isString: function (e) {
                        return "string" == typeof e
                    }, isArray: Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    }, isNode: function (e) {
                        return e && e.nodeType
                    }, isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    }, isWrapped: function (e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    }, isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    }, isEmptyObject: function (e) {
                        for (var t in e)return !1;
                        return !0
                    }
                }, g = !1;
                if (e.fn && e.fn.jquery ? (p = e, g = !0) : p = t.Velocity.Utilities, 8 >= d && !g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (7 >= d)return void(jQuery.fn.velocity = jQuery.fn.animate);
                var v = 400, y = "swing", x = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: r.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: v,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function (e) {
                        p.data(e, "velocity", {
                            isSVG: m.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {major: 1, minor: 2, patch: 2},
                    debug: !1
                };
                t.pageYOffset !== n ? (x.State.scrollAnchor = t, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
                var b = function () {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, r, n) {
                        var i = {x: t.x + n.dx * r, v: t.v + n.dv * r, tension: t.tension, friction: t.friction};
                        return {dx: i.v, dv: e(i)}
                    }

                    function r(r, n) {
                        var i = {
                            dx: r.v,
                            dv: e(r)
                        }, o = t(r, .5 * n, i), a = t(r, .5 * n, o), s = t(r, n, a), u = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx), c = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
                        return r.x = r.x + u * n, r.v = r.v + c * n, r
                    }

                    return function n(e, t, i) {
                        var o, a, s, u = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        }, c = [0], l = 0, h = 1e-4, p = .016;
                        for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, u.tension = e, u.friction = t, o = null !== i, o ? (l = n(e, t), a = l / i * p) : a = p; ;)if (s = r(s || u, a), c.push(1 + s.x), l += 16, !(Math.abs(s.x) > h && Math.abs(s.v) > h))break;
                        return o ? function (e) {
                            return c[e * (c.length - 1) | 0]
                        } : l
                    }
                }();
                x.Easings = {
                    linear: function (e) {
                        return e
                    }, swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    }, spring: function (e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
                    x.Easings[t[0]] = u.apply(null, t[1])
                });
                var w = x.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        }, registered: {}, register: function () {
                            for (var e = 0; e < w.Lists.colors.length; e++) {
                                var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var r, n, i;
                            if (d)for (r in w.Hooks.templates) {
                                n = w.Hooks.templates[r], i = n[0].split(" ");
                                var o = n[1].match(w.RegEx.valueSplit);
                                "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[r] = [i.join(" "), o.join(" ")])
                            }
                            for (r in w.Hooks.templates) {
                                n = w.Hooks.templates[r], i = n[0].split(" ");
                                for (var e in i) {
                                    var a = r + i[e], s = e;
                                    w.Hooks.registered[a] = [r, s]
                                }
                            }
                        }, getRoot: function (e) {
                            var t = w.Hooks.registered[e];
                            return t ? t[0] : e
                        }, cleanRootPropertyValue: function (e, t) {
                            return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                        }, extractValue: function (e, t) {
                            var r = w.Hooks.registered[e];
                            if (r) {
                                var n = r[0], i = r[1];
                                return t = w.Hooks.cleanRootPropertyValue(n, t), t.toString().match(w.RegEx.valueSplit)[i]
                            }
                            return t
                        }, injectValue: function (e, t, r) {
                            var n = w.Hooks.registered[e];
                            if (n) {
                                var i, o, a = n[0], s = n[1];
                                return r = w.Hooks.cleanRootPropertyValue(a, r), i = r.toString().match(w.RegEx.valueSplit), i[s] = t, o = i.join(" ")
                            }
                            return r
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function (e, t, r) {
                                switch (e) {
                                    case"name":
                                        return "clip";
                                    case"extract":
                                        var n;
                                        return w.RegEx.wrappedValueAlreadyExtracted.test(r) ? n = r : (n = r.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : r), n;
                                    case"inject":
                                        return "rect(" + r + ")"
                                }
                            }, blur: function (e, t, r) {
                                switch (e) {
                                    case"name":
                                        return x.State.isFirefox ? "filter" : "-webkit-filter";
                                    case"extract":
                                        var n = parseFloat(r);
                                        if (!n && 0 !== n) {
                                            var i = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = i ? i[1] : 0
                                        }
                                        return n;
                                    case"inject":
                                        return parseFloat(r) ? "blur(" + r + ")" : "none"
                                }
                            }, opacity: function (e, t, r) {
                                if (8 >= d)switch (e) {
                                    case"name":
                                        return "filter";
                                    case"extract":
                                        var n = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return r = n ? n[1] / 100 : 1;
                                    case"inject":
                                        return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                                } else switch (e) {
                                    case"name":
                                        return "opacity";
                                    case"extract":
                                        return r;
                                    case"inject":
                                        return r
                                }
                            }
                        }, register: function () {
                            9 >= d || x.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                            for (var e = 0; e < w.Lists.transformsBase.length; e++)!function () {
                                var t = w.Lists.transformsBase[e];
                                w.Normalizations.registered[t] = function (e, r, i) {
                                    switch (e) {
                                        case"name":
                                            return "transform";
                                        case"extract":
                                            return a(r) === n || a(r).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(r).transformCache[t].replace(/[()]/g, "");
                                        case"inject":
                                            var o = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case"translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                    break;
                                                case"scal":
                                                case"scale":
                                                    x.State.isAndroid && a(r).transformCache[t] === n && 1 > i && (i = 1), o = !/(\d)$/i.test(i);
                                                    break;
                                                case"skew":
                                                    o = !/(deg|\d)$/i.test(i);
                                                    break;
                                                case"rotate":
                                                    o = !/(deg|\d)$/i.test(i)
                                            }
                                            return o || (a(r).transformCache[t] = "(" + i + ")"), a(r).transformCache[t]
                                    }
                                }
                            }();
                            for (var e = 0; e < w.Lists.colors.length; e++)!function () {
                                var t = w.Lists.colors[e];
                                w.Normalizations.registered[t] = function (e, r, i) {
                                    switch (e) {
                                        case"name":
                                            return t;
                                        case"extract":
                                            var o;
                                            if (w.RegEx.wrappedValueAlreadyExtracted.test(i))o = i; else {
                                                var a, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(i) ? a = s[i] !== n ? s[i] : s.black : w.RegEx.isHex.test(i) ? a = "rgb(" + w.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
                                        case"inject":
                                            return 8 >= d ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function (e) {
                            return e.replace(/-(\w)/g, function (e, t) {
                                return t.toUpperCase()
                            })
                        }, SVGAttribute: function (e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || x.State.isAndroid && !x.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        }, prefixCheck: function (e) {
                            if (x.State.prefixMatches[e])return [x.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, n = t.length; n > r; r++) {
                                var i;
                                if (i = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                        return e.toUpperCase()
                                    }), m.isString(x.State.prefixElement.style[i]))return x.State.prefixMatches[e] = i, [i, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function (e) {
                            var t, r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                            return e = e.replace(r, function (e, t, r, n) {
                                return t + t + r + r + n + n
                            }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        }, isCSSNullValue: function (e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        }, getUnitType: function (e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        }, getDisplayType: function (e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        }, addClass: function (e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        }, removeClass: function (e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function (e, r, i, o) {
                        function s(e, r) {
                            function i() {
                                c && w.setPropertyValue(e, "display", "none")
                            }

                            var u = 0;
                            if (8 >= d)u = p.css(e, r); else {
                                var c = !1;
                                if (/^(width|height)$/.test(r) && 0 === w.getPropertyValue(e, "display") && (c = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !o) {
                                    if ("height" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var l = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                        return i(), l
                                    }
                                    if ("width" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                        return i(), h
                                    }
                                }
                                var f;
                                f = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), u = 9 === d && "filter" === r ? f.getPropertyValue(r) : f[r], ("" === u || null === u) && (u = e.style[r]), i()
                            }
                            if ("auto" === u && /^(top|right|bottom|left)$/i.test(r)) {
                                var m = s(e, "position");
                                ("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (u = p(e).position()[r] + "px")
                            }
                            return u
                        }

                        var u;
                        if (w.Hooks.registered[r]) {
                            var c = r, l = w.Hooks.getRoot(c);
                            i === n && (i = w.getPropertyValue(e, w.Names.prefixCheck(l)[0])), w.Normalizations.registered[l] && (i = w.Normalizations.registered[l]("extract", e, i)), u = w.Hooks.extractValue(c, i)
                        } else if (w.Normalizations.registered[r]) {
                            var h, f;
                            h = w.Normalizations.registered[r]("name", e), "transform" !== h && (f = s(e, w.Names.prefixCheck(h)[0]), w.Values.isCSSNullValue(f) && w.Hooks.templates[r] && (f = w.Hooks.templates[r][1])), u = w.Normalizations.registered[r]("extract", e, f)
                        }
                        if (!/^[\d-]/.test(u))if (a(e) && a(e).isSVG && w.Names.SVGAttribute(r))if (/^(height|width)$/i.test(r))try {
                            u = e.getBBox()[r]
                        } catch (m) {
                            u = 0
                        } else u = e.getAttribute(r); else u = s(e, w.Names.prefixCheck(r)[0]);
                        return w.Values.isCSSNullValue(u) && (u = 0), x.debug >= 2 && console.log("Get " + r + ": " + u), u
                    },
                    setPropertyValue: function (e, r, n, i, o) {
                        var s = r;
                        if ("scroll" === r)o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? t.scrollTo(n, o.alternateValue) : t.scrollTo(o.alternateValue, n); else if (w.Normalizations.registered[r] && "transform" === w.Normalizations.registered[r]("name", e))w.Normalizations.registered[r]("inject", e, n), s = "transform", n = a(e).transformCache[r]; else {
                            if (w.Hooks.registered[r]) {
                                var u = r, c = w.Hooks.getRoot(r);
                                i = i || w.getPropertyValue(e, c), n = w.Hooks.injectValue(u, n, i), r = c
                            }
                            if (w.Normalizations.registered[r] && (n = w.Normalizations.registered[r]("inject", e, n), r = w.Normalizations.registered[r]("name", e)), s = w.Names.prefixCheck(r)[0], 8 >= d)try {
                                e.style[s] = n
                            } catch (l) {
                                x.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            } else a(e) && a(e).isSVG && w.Names.SVGAttribute(r) ? e.setAttribute(r, n) : e.style[s] = n;
                            x.debug >= 2 && console.log("Set " + r + " (" + s + "): " + n)
                        }
                        return [s, n]
                    },
                    flushTransformCache: function (e) {
                        function t(t) {
                            return parseFloat(w.getPropertyValue(e, t))
                        }

                        var r = "";
                        if ((d || x.State.isAndroid && !x.State.isChrome) && a(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            p.each(a(e).transformCache, function (e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (r += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            })
                        } else {
                            var i, o;
                            p.each(a(e).transformCache, function (t) {
                                return i = a(e).transformCache[t], "transformPerspective" === t ? (o = i, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(r += t + i + " "))
                            }), o && (r = "perspective" + o + " " + r)
                        }
                        w.setPropertyValue(e, "transform", r)
                    }
                };
                w.Hooks.register(), w.Normalizations.register(), x.hook = function (e, t, r) {
                    var i = n;
                    return e = o(e), p.each(e, function (e, o) {
                        if (a(o) === n && x.init(o), r === n)i === n && (i = x.CSS.getPropertyValue(o, t)); else {
                            var s = x.CSS.setPropertyValue(o, t, r);
                            "transform" === s[0] && x.CSS.flushTransformCache(o), i = s
                        }
                    }), i
                };
                var S = function () {
                    function e() {
                        return s ? C.promise || null : u
                    }

                    function i() {
                        function e(e) {
                            function h(e, t) {
                                var r = n, i = n, a = n;
                                return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (m.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (i = t ? e[1] : c(e[1], s.duration), e[2] !== n && (a = e[2]))) : r = e, t || (i = i || s.easing), m.isFunction(r) && (r = r.call(o, T, M)), m.isFunction(a) && (a = a.call(o, T, M)), [r || 0, i, a]
                            }

                            function d(e, t) {
                                var r, n;
                                return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                    return r = e, ""
                                }), r || (r = w.Values.getUnitType(e)), [n, r]
                            }

                            function v() {
                                var e = {
                                    myParent: o.parentNode || r.body,
                                    position: w.getPropertyValue(o, "position"),
                                    fontSize: w.getPropertyValue(o, "fontSize")
                                }, n = e.position === O.lastPosition && e.myParent === O.lastParent, i = e.fontSize === O.lastFontSize;
                                O.lastParent = e.myParent, O.lastPosition = e.position, O.lastFontSize = e.fontSize;
                                var s = 100, u = {};
                                if (i && n)u.emToPx = O.lastEmToPx, u.percentToPxWidth = O.lastPercentToPxWidth, u.percentToPxHeight = O.lastPercentToPxHeight; else {
                                    var c = a(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                    x.init(c), e.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                        x.CSS.setPropertyValue(c, t, "hidden")
                                    }), x.CSS.setPropertyValue(c, "position", e.position), x.CSS.setPropertyValue(c, "fontSize", e.fontSize), x.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                        x.CSS.setPropertyValue(c, t, s + "%")
                                    }), x.CSS.setPropertyValue(c, "paddingLeft", s + "em"), u.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s,
                                        u.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s, u.emToPx = O.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                }
                                return null === O.remToPx && (O.remToPx = parseFloat(w.getPropertyValue(r.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(t.innerWidth) / 100, O.vhToPx = parseFloat(t.innerHeight) / 100), u.remToPx = O.remToPx, u.vwToPx = O.vwToPx, u.vhToPx = O.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(u), o), u
                            }

                            if (s.begin && 0 === T)try {
                                s.begin.call(f, f)
                            } catch (b) {
                                setTimeout(function () {
                                    throw b
                                }, 1)
                            }
                            if ("scroll" === A) {
                                var S, _, E, L = /^x$/i.test(s.axis) ? "Left" : "Top", P = parseFloat(s.offset) || 0;
                                s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, S = s.container["scroll" + L], E = S + p(o).position()[L.toLowerCase()] + P) : s.container = null : (S = x.State.scrollAnchor[x.State["scrollProperty" + L]], _ = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === L ? "Top" : "Left")]], E = p(o).offset()[L.toLowerCase()] + P), u = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: S,
                                        currentValue: S,
                                        endValue: E,
                                        unitType: "",
                                        easing: s.easing,
                                        scrollData: {container: s.container, direction: L, alternateValue: _}
                                    }, element: o
                                }, x.debug && console.log("tweensContainer (scroll): ", u.scroll, o)
                            } else if ("reverse" === A) {
                                if (!a(o).tweensContainer)return void p.dequeue(o, s.queue);
                                "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, a(o).opts, s);
                                var k = p.extend(!0, {}, a(o).tweensContainer);
                                for (var D in k)if ("element" !== D) {
                                    var R = k[D].startValue;
                                    k[D].startValue = k[D].currentValue = k[D].endValue, k[D].endValue = R, m.isEmptyObject(y) || (k[D].easing = s.easing), x.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(k[D]), o)
                                }
                                u = k
                            } else if ("start" === A) {
                                var k;
                                a(o).tweensContainer && a(o).isAnimating === !0 && (k = a(o).tweensContainer), p.each(g, function (e, t) {
                                    if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                        var r = h(t, !0), i = r[0], o = r[1], a = r[2];
                                        if (w.RegEx.isHex.test(i)) {
                                            for (var s = ["Red", "Green", "Blue"], u = w.Values.hexToRgb(i), c = a ? w.Values.hexToRgb(a) : n, l = 0; l < s.length; l++) {
                                                var p = [u[l]];
                                                o && p.push(o), c !== n && p.push(c[l]), g[e + s[l]] = p
                                            }
                                            delete g[e]
                                        }
                                    }
                                });
                                for (var V in g) {
                                    var N = h(g[V]), B = N[0], I = N[1], U = N[2];
                                    V = w.Names.camelCase(V);
                                    var z = w.Hooks.getRoot(V), G = !1;
                                    if (a(o).isSVG || "tween" === z || w.Names.prefixCheck(z)[1] !== !1 || w.Normalizations.registered[z] !== n) {
                                        (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(V) && !U && 0 !== B && (U = 0), s._cacheValues && k && k[V] ? (U === n && (U = k[V].endValue + k[V].unitType), G = a(o).rootPropertyValueCache[z]) : w.Hooks.registered[V] ? U === n ? (G = w.getPropertyValue(o, z), U = w.getPropertyValue(o, V, G)) : G = w.Hooks.templates[z][1] : U === n && (U = w.getPropertyValue(o, V));
                                        var j, H, W, X = !1;
                                        if (j = d(V, U), U = j[0], W = j[1], j = d(V, B), B = j[0].replace(/^([+-\/*])=/, function (e, t) {
                                                return X = t, ""
                                            }), H = j[1], U = parseFloat(U) || 0, B = parseFloat(B) || 0, "%" === H && (/^(fontSize|lineHeight)$/.test(V) ? (B /= 100, H = "em") : /^scale/.test(V) ? (B /= 100, H = "") : /(Red|Green|Blue)$/i.test(V) && (B = B / 100 * 255, H = "")), /[\/*]/.test(X))H = W; else if (W !== H && 0 !== U)if (0 === B)H = W; else {
                                            i = i || v();
                                            var q = /margin|padding|left|right|width|text|word|letter/i.test(V) || /X$/.test(V) || "x" === V ? "x" : "y";
                                            switch (W) {
                                                case"%":
                                                    U *= "x" === q ? i.percentToPxWidth : i.percentToPxHeight;
                                                    break;
                                                case"px":
                                                    break;
                                                default:
                                                    U *= i[W + "ToPx"]
                                            }
                                            switch (H) {
                                                case"%":
                                                    U *= 1 / ("x" === q ? i.percentToPxWidth : i.percentToPxHeight);
                                                    break;
                                                case"px":
                                                    break;
                                                default:
                                                    U *= 1 / i[H + "ToPx"]
                                            }
                                        }
                                        switch (X) {
                                            case"+":
                                                B = U + B;
                                                break;
                                            case"-":
                                                B = U - B;
                                                break;
                                            case"*":
                                                B = U * B;
                                                break;
                                            case"/":
                                                B = U / B
                                        }
                                        u[V] = {
                                            rootPropertyValue: G,
                                            startValue: U,
                                            currentValue: U,
                                            endValue: B,
                                            unitType: H,
                                            easing: I
                                        }, x.debug && console.log("tweensContainer (" + V + "): " + JSON.stringify(u[V]), o)
                                    } else x.debug && console.log("Skipping [" + z + "] due to a lack of browser support.")
                                }
                                u.element = o
                            }
                            u.element && (w.Values.addClass(o, "velocity-animating"), F.push(u), "" === s.queue && (a(o).tweensContainer = u, a(o).opts = s), a(o).isAnimating = !0, T === M - 1 ? (x.State.calls.push([F, f, s, null, C.resolver]), x.State.isTicking === !1 && (x.State.isTicking = !0, l())) : T++)
                        }

                        var i, o = this, s = p.extend({}, x.defaults, y), u = {};
                        switch (a(o) === n && x.init(o), parseFloat(s.delay) && s.queue !== !1 && p.queue(o, s.queue, function (e) {
                            x.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(s.delay)),
                                next: e
                            }
                        }), s.duration.toString().toLowerCase()) {
                            case"fast":
                                s.duration = 200;
                                break;
                            case"normal":
                                s.duration = v;
                                break;
                            case"slow":
                                s.duration = 600;
                                break;
                            default:
                                s.duration = parseFloat(s.duration) || 1
                        }
                        x.mock !== !1 && (x.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(x.mock) || 1, s.delay *= parseFloat(x.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = x.CSS.Values.getDisplayType(o))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && x.State.isMobile && !x.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(o, s.queue, function (t, r) {
                            return r === !0 ? (C.promise && C.resolver(f), !0) : (x.velocityQueueEntryFlag = !0, void e(t))
                        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o)
                    }

                    var s, u, d, f, g, y, b = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                    if (m.isWrapped(this) ? (s = !1, d = 0, f = this, u = this) : (s = !0, d = 1, f = b ? arguments[0].elements || arguments[0].e : arguments[0]), f = o(f)) {
                        b ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[d], y = arguments[d + 1]);
                        var M = f.length, T = 0;
                        if (!/^(stop|finish|finishAll)$/i.test(g) && !p.isPlainObject(y)) {
                            var _ = d + 1;
                            y = {};
                            for (var E = _; E < arguments.length; E++)m.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? m.isString(arguments[E]) || m.isArray(arguments[E]) ? y.easing = arguments[E] : m.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                        }
                        var C = {promise: null, resolver: null, rejecter: null};
                        s && x.Promise && (C.promise = new x.Promise(function (e, t) {
                            C.resolver = e, C.rejecter = t
                        }));
                        var A;
                        switch (g) {
                            case"scroll":
                                A = "scroll";
                                break;
                            case"reverse":
                                A = "reverse";
                                break;
                            case"finish":
                            case"finishAll":
                            case"stop":
                                p.each(f, function (e, t) {
                                    a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer), "finishAll" !== g || y !== !0 && !m.isString(y) || (p.each(p.queue(t, m.isString(y) ? y : ""), function (e, t) {
                                        m.isFunction(t) && t()
                                    }), p.queue(t, m.isString(y) ? y : "", []))
                                });
                                var L = [];
                                return p.each(x.State.calls, function (e, t) {
                                    t && p.each(t[1], function (r, i) {
                                        var o = y === n ? "" : y;
                                        return o === !0 || t[2].queue === o || y === n && t[2].queue === !1 ? void p.each(f, function (r, n) {
                                            n === i && ((y === !0 || m.isString(y)) && (p.each(p.queue(n, m.isString(y) ? y : ""), function (e, t) {
                                                m.isFunction(t) && t(null, !0)
                                            }), p.queue(n, m.isString(y) ? y : "", [])), "stop" === g ? (a(n) && a(n).tweensContainer && o !== !1 && p.each(a(n).tweensContainer, function (e, t) {
                                                t.endValue = t.currentValue
                                            }), L.push(e)) : ("finish" === g || "finishAll" === g) && (t[2].duration = 1))
                                        }) : !0
                                    })
                                }), "stop" === g && (p.each(L, function (e, t) {
                                    h(t, !0)
                                }), C.promise && C.resolver(f)), e();
                            default:
                                if (!p.isPlainObject(g) || m.isEmptyObject(g)) {
                                    if (m.isString(g) && x.Redirects[g]) {
                                        var P = p.extend({}, y), k = P.duration, D = P.delay || 0;
                                        return P.backwards === !0 && (f = p.extend(!0, [], f).reverse()), p.each(f, function (e, t) {
                                            parseFloat(P.stagger) ? P.delay = D + parseFloat(P.stagger) * e : m.isFunction(P.stagger) && (P.delay = D + P.stagger.call(t, e, M)), P.drag && (P.duration = parseFloat(k) || (/^(callout|transition)/.test(g) ? 1e3 : v), P.duration = Math.max(P.duration * (P.backwards ? 1 - e / M : (e + 1) / M), .75 * P.duration, 200)), x.Redirects[g].call(t, t, P || {}, e, M, f, C.promise ? C : n)
                                        }), e()
                                    }
                                    var R = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return C.promise ? C.rejecter(new Error(R)) : console.log(R), e()
                                }
                                A = "start"
                        }
                        var O = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        }, F = [];
                        p.each(f, function (e, t) {
                            m.isNode(t) && i.call(t)
                        });
                        var V, P = p.extend({}, x.defaults, y);
                        if (P.loop = parseInt(P.loop), V = 2 * P.loop - 1, P.loop)for (var N = 0; V > N; N++) {
                            var B = {delay: P.delay, progress: P.progress};
                            N === V - 1 && (B.display = P.display, B.visibility = P.visibility, B.complete = P.complete), S(f, "reverse", B)
                        }
                        return e()
                    }
                };
                x = p.extend(S, x), x.animate = S;
                var M = t.requestAnimationFrame || f;
                return x.State.isMobile || r.hidden === n || r.addEventListener("visibilitychange", function () {
                    r.hidden ? (M = function (e) {
                        return setTimeout(function () {
                            e(!0)
                        }, 16)
                    }, l()) : M = t.requestAnimationFrame || f
                }), e.Velocity = x, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = x.defaults), p.each(["Down", "Up"], function (e, t) {
                    x.Redirects["slide" + t] = function (e, r, i, o, a, s) {
                        var u = p.extend({}, r), c = u.begin, l = u.complete, h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        }, d = {};
                        u.display === n && (u.display = "Down" === t ? "inline" === x.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), u.begin = function () {
                            c && c.call(a, a);
                            for (var r in h) {
                                d[r] = e.style[r];
                                var n = x.CSS.getPropertyValue(e, r);
                                h[r] = "Down" === t ? [n, 0] : [0, n]
                            }
                            d.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, u.complete = function () {
                            for (var t in d)e.style[t] = d[t];
                            l && l.call(a, a), s && s.resolver(a)
                        }, x(e, h, u)
                    }
                }), p.each(["In", "Out"], function (e, t) {
                    x.Redirects["fade" + t] = function (e, r, i, o, a, s) {
                        var u = p.extend({}, r), c = {opacity: "In" === t ? 1 : 0}, l = u.complete;
                        i !== o - 1 ? u.complete = u.begin = null : u.complete = function () {
                            l && l.call(a, a), s && s.resolver(a)
                        }, u.display === n && (u.display = "In" === t ? "auto" : "none"), x(this, c, u)
                    }
                }), x
            }(window.jQuery || window.Zepto || window, window, document)
        })
    }, {}]
}, {}, [2]);