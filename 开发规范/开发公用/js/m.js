!function () {
    function e() {
        this.pullUpFlag = !0,this.pulldown_pgNum = 0;
    }
    var tmpUrl='tmp.html',
        _ = $("body"), T = [],
        L = $("#js_news_list"),
        U = $("#js_refresh"),
        j = $("#js_top_menu"),
        D = !0, N = 0, G = 0, S = !0, O = !1, B = !1, A = null, P = 150, F = null, C = new WebStorageCache,J = !1;
    e.prototype={
        init:function(){
            var a=this;
            j.children("a").each(function () {
                var e = $(this);
                if (e.hasClass('active'))return setTimeout(function () {
                    a.scrollTo(e, !1)
                }, 50), !1
            }), j.on("click", "a", function () {
                var e = $(this);
                e.hasClass("active") || a.scrollTo(e, !1);
            }), a.pullDown(), $(window).on("scroll", function () {
                var e = GLOBAL.Util.getScrollTop(), t = Number($("#J_loading").offset().top) - 100, s = GLOBAL.Util.getClientHeight(), i = null;
                i && clearTimeout(i), i = setTimeout(function () {
                    C.set("news_pos_" + a.newsType, e, {exp: 2400})
                }, 200), t >= s && e + s >= t && a.pullUpFlag && a.pullUpLoadData(), L.find("video").each(function () {
                    var e = $(this), a = e.offset().top, t = _.scrollTop();
                    (t >= a || a - t >= $(window).height() - e.height()) && (this.paused || this.pause())
                })
            }), U.on("click", function () {
                U.hasClass("active") || a.changeRefreshStatus()
            });
            //懒加载调用
            $('.lazy').lazyload();
            //幻灯调用
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 5e3
            });
        }, scrollTo: function (e, a) {
            var t = j.children("a"), s = $(window).width(), i = e[0].offsetLeft, n = e.width();
            t.removeClass("active"), e.addClass("active"), j.scrollLeft(i + n / 2 - s / 2)
        }, pullDown: function () {
            var e = this, a = 0;
            L.on("touchstart", function (e) {
                clearTimeout(F), N = e.touches[0].pageY, B = _.scrollTop() <= 0, A ? A.removeClass("active").css({
                    display: "block",
                    opacity: 0,
                    top: a,
                    transform: "translateY(0px)",
                    "-webkit-transform": "translateY(0px)"
                }) : (a = $("header").height() - 40, A = $('<svg id="J_svg" class="svg" style="top: ' + a + 'px"><g id="J_svg_g" style="transform: scale(2)"><marker id="J_svg_marker" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,10 L5,5 L0,0" style="fill: #d43d3d;"></path></marker><path stroke-width="3.5" stroke-linecap="round" id="J_svg_path" marker-end="url(#J_svg_marker)" d="M20,9 A11,11 0 1,1 10.5,14.5" style="stroke: #d43d3d; fill: none;"></path><circle id="J_svg_circle" class="path" fill="none" stroke-width="3.5" stroke-linecap="round" cx="25" cy="25" r="11"></circle></g></svg>'))
            }), L.on("touchend", function () {
                O && (G >= P ? A.animate({top: a + P / 3 + "px"}, "fast", function () {
                    A && A.addClass("active"), clearTimeout(F), F = setTimeout(function () {
                        e.changeRefreshStatus(), e.pullDownLoadData(function () {
                            setTimeout(function () {
                                A && A.fadeOut("fast", function () {
                                    A.remove()
                                })
                            }, 500)
                        })
                    }, 200)
                }) : A && A.animate({opacity: 0, top: a}, "fast", function () {
                    A.remove()
                })), S = !0, O = !1
            }), L.on("touchmove", function (e) {
                var t = e.touches[0].pageY;
                G = t - N, B && S && G > 0 && (O = !0, S = !1), B && O && (0 === _.find(".svg").length && A.appendTo("body"), G >= P ? (A.find("#J_svg_marker>path").attr("style", "fill:#2a90d7"), A.find("#J_svg_g>path").attr("style", "stroke:#2a90d7;fill:none"), G >= P + 80 && (G = P + 80)) : (A.find("#J_svg_marker>path").attr("style", "fill:#d43d3d"), A.find("#J_svg_g>path").attr("style", "stroke:#d43d3d;fill:none")), A.css({
                    opacity: G / P,
                    transform: "rotate(" + G / P * 720 + "deg)",
                    "-webkit-transform": "rotate(" + G / P * 720 + "deg)",
                    top: a + G / 3 + "px"
                }), e.preventDefault())
            })
        }, pullDownLoadData: function (e) {
            //下拉加载数据
            $.ajax({
                url: tmpUrl,
                dataType: "html",
                timeout: 8e3,
                beforeSend: function () {
                    console.log('下拉加载数据');
                },
                success: function (a) {
                    var R = $('<span><p class="refresh-tip">为你推荐了8篇文章</p></span>');
                    R.appendTo("body"), setTimeout(function () {
                        R.animate({scale: 0, opacity: .5}, "600", function () {
                            R.remove()
                        })
                    }, 1200);
                    J = !1, L.prepend(a)
                },
                error: function (e, a) {
                    console.error(a)
                },
                complete: function () {
                    e && e()
                }
            })
        }, pullUpLoadData: function () {
            //上拉加载更多
            var e = this;
            $.ajax({
                url: tmpUrl,
                dataType: "html",
                timeout: 8e3,
                beforeSend: function () {
                    console.log('上拉加载更多');
                    e.pullUpFlag = !1
                },
                success: function (a) {
                    J = !1, L.append(a), e.pullUpFlag = !0
                },
                error: function (e, a) {
                    console.error(a)
                },
                complete: function () {
                }
            })
        }, changeRefreshStatus: function () {
            U.addClass("rotate"), setTimeout(function () {
                U.removeClass("rotate")
            }, 700)
        }},$(function () {
        FastClick.attach(document.body);
        var a = new e;
        a.init();
    })
}();

//分享(QQ浏览器、UC浏览器)
!function () {
    if (!document.getElementsByClassName('share_wrapper')) {
        return false;
    }
    var qApiSrc = {
        lower: "//3gimg.qq.com/html5/js/qb.js",
        higher: "//jsapi.qq.com/get?api=app.share"
    };
    var bLevel = {
        qq: {forbid: 0, lower: 1, higher: 2},
        uc: {forbid: 0, allow: 1}
    };
    var UA = navigator.appVersion;
    var isqqBrowser = (UA.split("MQQBrowser/").length > 1) ? bLevel.qq.higher : bLevel.qq.forbid;
    var isucBrowser = (UA.split("UCBrowser/").length > 1) ? bLevel.uc.allow : bLevel.uc.forbid;
    var version = {
        uc: "",
        qq: ""
    };
    var isWeixin = false;

    var config = {};
    this.url = config.url || document.location.href || '';
    this.title = config.title || document.title || '';
    this.desc = config.desc || document.title || '';
    this.img = config.img || document.getElementsByTagName('img').length > 0 && document.getElementsByTagName('img')[0].src || '';
    this.img_title = config.img_title || document.title || '';
    this.from = config.from || window.location.host || '';
    this.ucAppList = {
        sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
        QZone: ['kQZone', 'QZone', '3', 'QQ空间']
    };
    this.share = function (to_app) {
        var title = this.title, url = this.url, desc = this.desc, img = this.img, img_title = this.img_title, from = this.from;
        if (isucBrowser) {
            to_app = to_app == '' ? '' : (platform_os == 'iPhone' ? this.ucAppList[to_app][0] : this.ucAppList[to_app][1]);
            if (to_app == 'QZone') {
                B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
                k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5E3);
            }
            if (typeof(ucweb) != "undefined") {
                ucweb.startRequest("shell.page_share", [title, title, url, to_app, "", "@" + from, ""])
            } else {
                if (typeof(ucbrowser) != "undefined") {
                    ucbrowser.web_share(title, title, url, to_app, "", "@" + from, '')
                } else {
                }
            }
        } else {
            if (isqqBrowser && !isWeixin) {
                to_app = to_app == '' ? '' : this.ucAppList[to_app][2];
                var ah = {
                    url: url,
                    title: title,
                    description: desc,
                    img_url: img,
                    img_title: img_title,
                    to_app: to_app,//微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
                    cus_txt: "请输入此时此刻想要分享的内容"
                };
                ah = to_app == '' ? '' : ah;
                if (typeof(browser) != "undefined") {
                    if (typeof(browser.app) != "undefined" && isqqBrowser == bLevel.qq.higher) {
                        browser.app.share(ah)
                    }
                } else {
                    if (typeof(window.qb) != "undefined" && isqqBrowser == bLevel.qq.lower) {
                        window.qb.share(ah)
                    } else {
                    }
                }
            } else {
            }
        }
    };
    this.isloadqqApi = function () {
        if (isqqBrowser) {
            var b = (version.qq < 5.4) ? qApiSrc.lower : qApiSrc.higher;
            var d = document.createElement("script");
            var a = document.getElementsByTagName("body")[0];
            d.setAttribute("src", b);
            a.appendChild(d)
        }
    };

    this.getPlantform = function () {
        ua = navigator.userAgent;
        if ((ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)) {
            return "iPhone"
        }
        return "Android"
    };

    this.is_weixin = function () {
        var a = UA.toLowerCase();
        if (a.match(/MicroMessenger/i) == "micromessenger") {
            return true
        } else {
            return false
        }
    };

    this.getVersion = function (c) {
        var a = c.split("."), b = parseFloat(a[0] + "." + a[1]);
        return b
    };

    this.init = function () {
        platform_os = this.getPlantform();
        version.qq = isqqBrowser ? this.getVersion(UA.split("MQQBrowser/")[1]) : 0;
        version.uc = isucBrowser ? this.getVersion(UA.split("UCBrowser/")[1]) : 0;
        isWeixin = this.is_weixin();
        if ((isqqBrowser && version.qq < 5.4 && platform_os == "iPhone") || (isqqBrowser && version.qq < 5.3 && platform_os == "Android")) {
            isqqBrowser = bLevel.qq.forbid
        } else {
            if (isqqBrowser && version.qq < 5.4 && platform_os == "Android") {
                isqqBrowser = bLevel.qq.lower
            } else {
                if (isucBrowser && ((version.uc < 10.2 && platform_os == "iPhone") || (version.uc < 9.7 && platform_os == "Android"))) {
                    isucBrowser = bLevel.uc.forbid
                }
            }
        }
        this.isloadqqApi();
        //if (isqqBrowser || isucBrowser) {
        //    //this.html();
        //} else {
        //    //document.write('目前该分享插件仅支持手机UC浏览器和QQ浏览器');
        //}
    };

    this.init();

    var share = this;
    var items = document.getElementsByClassName('sns');
    for (var i=0;i<items.length;i++) {
        items[i].onclick = function(){
            share.share(this.getAttribute('data-app'));
        }
    }
    return this;
}();