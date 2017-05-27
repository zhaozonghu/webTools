!function () {
    function e() {
        var e = GLOBAL.Util.getQueryString("type"), a = e ? e : C.get("current_newstype");
        console.log(e)
        this.newsType = a ? a : "toutiao", this.vnewsType = C.get("vnewstype") || "vtuijian", this.pnewsType = C.get("pnewstype") || "pbolan", this.readUrl = "", this.userId = Cookies.get("user_id") || '', this.idx = 0, this.pgNum = 1, this.pulldown_pgNum = 0, this.pulldown_idx = 0, this.pulldown_num = 0, this.qid = GLOBAL.Util.getQueryString("qid") || Cookies.get("qid"), this.pullUpFlag = !0, this.startKey = {}, this.endKey = {}, this.osType = GLOBAL.Util.getOsType(), this.browserType = GLOBAL.Util.getBrowserType()
    }
    var a = "https://mini.eastday.com/toutiaoh5/data/channels.json",
        t = "https://toutiao.eastday.com/toutiao_h5/RefreshJP",
        s = "https://toutiao.eastday.com/toutiao_h5/pulldown",
        i = "https://toutiao.eastday.com/toutiao_h5/NextJP",
        n = "https://toutiao.eastday.com/toutiao_h5/videopool",
        r = "https://toutiao.eastday.com/toutiao_h5/videopool",
        l = "https://toutiao.eastday.com/toutiao_h5/videopool",
        o = "https://toutiao.eastday.com/toutiao_h5/picnewspool",
        c = "https://toutiao.eastday.com/toutiao_h5/picnewspool",
        d = "https://toutiao.eastday.com/toutiao_h5/picnewspool",
        p = "https://position.dftoutiao.com/position/get",
        u = "https://toutiao.eastday.com/pjson/zan",
        g = "https://toutiao.eastday.com/getwapdata/data",
        m = "https://ot.dftoutiao.com/online/online",
        h = "https://toutiao.eastday.com/getwapdata/advshow",
        w = "https://toutiao.eastday.com/getwapdata/partner",
        v = "",
        y = "https://softwords.dftoutiao.com/partner/banner",
        f = "https://softwords.dftoutiao.com/partner/list",
        _ = $("body"), T = [],
        L = $("#J_news_list"),
        U = $("#J_refresh"),
        j = $("#J_top_menu"),
        D = !0, N = 0, G = 0, S = !0, O = !1, B = !1, A = null, P = 150, F = null, C = new WebStorageCache, E = null, q = !0, J = !1;

    e.prototype={
        init:function(){
            function e(e, t, s) {
                var i = e.data("rowkey"), n = a.getPraiseTrampleStatus(i);
                return 1 === n ? void alert("您已经赞过了！") : n === -1 ? void alert("您已经踩过了！") : void(D && (D = !1, e.addClass("active").text(Number(e.text()) + 1), $.ajax({
                    url: u,
                    dataType: "jsonp",
                    data: {colname: t, rowkey: i, praisecnt: 1},
                    jsonp: "jsonpcallback",
                    success: function () {
                        a.cachePraiseTrampleRowkey(s, i), D = !0
                    },
                    error: function (e) {
                        console.error(e)
                    }
                })))
            }
            var a=this;
            a.userId || (a.userId = +new Date + Math.random().toString(10).substring(2, 6), Cookies.set("user_id", a.userId, {
                expires: 365,
                path: "/",
                domain: "eastday.com"
            })), a.readUrl = C.get("read_url_all"), a.readUrl || (a.readUrl = ""), a.initChannels(function () {
                var e = j.children("a");
                e.each(function () {
                    var e = $(this), a = e.data("type");
                    "meinv" !== a && "nuanwen" !== a || T.push(a)
                }), e.eq(e.length < 3 ? e.length : 2).after('<a data-type="shipin">视频</a>'), e.eq(e.length < 5 ? e.length : 4).after('<a data-type="tupian">图片</a>'), C.get("location") ? a.updateDomLocation(C.get("location")) : a.location(), j.children("a").each(function () {
                    var e = $(this);
                    if (e.data("type") === a.newsType)return setTimeout(function () {
                        a.scrollTo(e, !1)
                    }, 50), !1
                })
            }), a.refreshData(function () {
                a.highlightPraiseTrample()
            }), "1" !== Cookies.get("FROM_DETAILS_MORE_NEWS") && (Cookies.remove("FROM_DETAILS_MORE_NEWS", {
                path: "/",
                domain: "eastday.com"
            })), a.pullDown(), j.on("click", "a", function () {
                var e = $(this), t = e.data("type");
                e.hasClass("active") || (a.scrollTo(e, !1), C.set("prev_newstype", a.newsType, {exp: 2400}), C.set("current_newstype", t, {exp: 2400}), a.newsType = t, a.refreshData(function () {
                    a.highlightPraiseTrample()
                }))
            }), $(window).on("scroll", function () {
                var e = GLOBAL.Util.getScrollTop(), t = Number($("#J_loading").offset().top) - 100, s = GLOBAL.Util.getClientHeight(), i = null;
                i && clearTimeout(i), i = setTimeout(function () {
                    C.set("news_pos_" + a.newsType, e, {exp: 2400})
                }, 200), t >= s && e + s >= t && a.pullUpFlag && a.pullUpLoadData(), L.find("video").each(function () {
                    var e = $(this), a = e.offset().top, t = _.scrollTop();
                    (t >= a || a - t >= $(window).height() - e.height()) && (this.paused || this.pause())
                })
            }), U.on("click", function () {
                U.hasClass("active") || a.reloadData()
            }), _.on("click", ".J-read-position", function () {
                _.scrollTop(0), a.changeRefreshStatus(), a.pullDownLoadData()
            }), _.on("click", ".J-promote-news", function (e) {
                e.preventDefault();
                var t = $(this), s = t.attr("href"), i = t.attr("data-advid"), n = t.attr("data-adpgnum"), r = t.attr("data-adposition"), l = t.attr("data-clickbackurl"), o = t.attr("data-platform"), c = t.attr("data-accurateurl");
                a.sendPromoteNewslog({
                    advUrl: s,
                    advId: i,
                    accurateurl: c,
                    adpgnum: n,
                    adposition: r,
                    platform: o,
                    clickbackurl: l,
                    callback: function () {
                        window.location.href = s
                    }
                })
            }), L.on("click", ".J-good", function () {
                e($(this), "z0000", 1)
            }), L.on("click", ".J-bad", function () {
                e($(this), "zd0000", -1)
            })
        }, reloadData: function () {
            var e = this;
            e.changeRefreshStatus(), C["delete"]("news_pos_" + e.newsType), C["delete"]("news_" + e.newsType), C.set("pulldown_pgnum_" + e.newsType, 0, {exp: 86400}), e.refreshData(function () {
                e.highlightPraiseTrample()
            })
        }, initChannels: function (e) {
            var t = this, s = C.get("CUSTOM_CHANNELS_161222") ? C.get("news_channels") : null;
            s ? (t.generateChannelTabs(s), e && e()) : $.ajax({
                url: a, dataType: "json", success: function (a) {
                    t.generateChannelTabs(a.channels.up), e && e()
                }, error: function () {
                    console.error(arguments)
                }
            })
        }, generateChannelTabs: function (e) {
            if (e && e instanceof Array) {
                var a = "", t = 0;
                try {
                    if (!q)for (t = 0; t < e.length; t++)"shipin" === e[t].name && e.splice(t, 1)
                } catch (s) {
                    console.error(s)
                }
                for (t = 0; t < e.length; t++)a += 0 === t ? '<a class="active" data-type="' + e[t].name + '">' + e[t].value + "</a>" : '<a data-type="' + e[t].name + '">' + e[t].value + "</a>";
                j.html(a), C.get("CUSTOM_CHANNELS_161222") && C.set("news_channels", e)
            }
        }, highlightPraiseTrample: function () {
            var e = this;
            "meinv" == e.newsType && (L.find(".J-good").each(function () {
                var a = $(this);
                1 === e.getPraiseTrampleStatus(a.data("rowkey")) && a.addClass("active")
            }), L.find(".J-bad").each(function () {
                var a = $(this);
                e.getPraiseTrampleStatus(a.data("rowkey")) === -1 && a.addClass("active")
            }))
        }, getPraiseTrampleStatus: function (e) {
            var a = C.get("praise_rowkey"), t = C.get("trample_rowkey");
            return a && a.indexOf(e) !== -1 ? 1 : t && t.indexOf(e) !== -1 ? -1 : 0
        }, cachePraiseTrampleRowkey: function (e, a) {
            var t = C.get("praise_trample_rowkey"), s = C.get("praise_rowkey"), i = C.get("trample_rowkey");
            t ? t += "," + a : t = a, C.set("praise_trample_rowkey", t, {exp: 7200}), 1 === e ? (s ? s += "," + a : s = a, C.set("praise_rowkey", s, {exp: 7200})) : (i ? i += "," + a : i = a, C.set("trample_rowkey", i, {exp: 7200}))
        }, location: function () {
            //获取用户当前地区
            var e = this;
            $.ajax({
                url: p, dataType: "jsonp", jsonp: "jsonpcallback", success: function (a) {
                    try {
                        var t = a.position, s = e.getCityPinyin(t.provname), i = null;
                        s && (i = {
                            prov_id: t.pro_id,
                            prov_py: s,
                            prov_name: t.provname
                        }, e.updateDomLocation(i), C.set("location", i, {exp: 2592e3}))
                    } catch (n) {
                        console.error(n)
                    }
                }, error: function (e, a) {
                    console.error(a)
                }
            })
        }, updateDomLocation: function (e) {
            j.children("a").eq(1).after('<a data-type="' + e.prov_py + '">' + e.prov_name + "</a>")
        }, pullDown: function () {
            var e = this, a = 0;
            L.on("touchstart", function (e) {
                clearTimeout(F), N = e.touches[0].pageY, B = _.scrollTop() <= 0, A ? A.removeClass("active").css({
                    display: "block",
                    opacity: 0,
                    top: a,
                    transform: "translateY(0px)",
                    "-webkit-transform": "translateY(0px)"
                }) : (a = $("header").height() - 40, A = $('<svg id="J_svg" class="svg" style="top: ' + a + 'px"><g id="J_svg_g"><marker id="J_svg_marker" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,10 L5,5 L0,0" style="fill: #d43d3d;"></path></marker><path stroke-width="3.5" stroke-linecap="round" id="J_svg_path" marker-end="url(#J_svg_marker)" d="M20,9 A11,11 0 1,1 10.5,14.5" style="stroke: #d43d3d; fill: none;"></path><circle id="J_svg_circle" class="path" fill="none" stroke-width="3.5" stroke-linecap="round" cx="25" cy="25" r="11"></circle></g></svg>'))
            }), L.on("touchend", function () {
                O && (G >= P ? A.animate({top: a + P / 3 + "px"}, "fast", function () {
                    A && A.addClass("active"), clearTimeout(F), F = setTimeout(function () {
                        "meinv" === e.newsType ? A && A.remove() : (e.changeRefreshStatus(), e.pullDownLoadData(function () {
                            setTimeout(function () {
                                A && A.fadeOut("fast", function () {
                                    A.remove()
                                })
                            }, 500)
                        }))
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
            var a = this;
            try {
                a.getBannerData()
            } catch (t) {
                console.error(t)
            }
            a.pulldown_pgNum = Number(C.get("pulldown_pgnum_" + a.newsType)), C.set("pulldown_pgnum_" + a.newsType, --a.pulldown_pgNum, {exp: 86400}), a.pulldown_idx = Number(C.get("pulldown_idx_" + a.newsType)), a.pulldown_idx || (a.pulldown_idx = 0), "shipin" === a.newsType ? a.pullDownLoadVideoData(e) : "tupian" === a.newsType ? (a.pullDownLoadPicData(e)) : a.pullDownLoadNewsData(e)
        }, pullDownLoadNewsData: function (e) {
            var a = this;
            $.ajax({
                url: s,
                data: {
                    type: a.newsType,
                    startkey: C.get("startkey_" + a.newsType) ? C.get("startkey_" + a.newsType) : a.startKey[a.newsType],
                    lastkey: C.get("endkey_" + a.newsType) ? C.get("endkey_" + a.newsType) : a.endKey[a.newsType],
                    pgnum: a.pulldown_pgNum,
                    zdnews: a.getCacheStickNews("stick_news"),
                    idx: a.pulldown_idx,
                    readhistory: a.readUrl,
                    recgid: a.userId,
                    qid: a.qid,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                },
                success: function (e) {
                    a.generateDomForPulldown(e)
                },
                error: function (e) {
                    console.error(e)
                },
                complete: function () {
                    e && e()
                }
            })
        }, pullDownLoadVideoData: function (e) {
            var a = this;
            $.ajax({
                url: r,
                data: {
                    type: a.vnewsType,
                    startkey: C.get("startkey_" + a.newsType) ? C.get("startkey_" + a.newsType) : a.startKey[a.newsType],
                    lastkey: C.get("endkey_" + a.newsType) ? C.get("endkey_" + a.newsType) : a.endKey[a.newsType],
                    pgnum: a.pulldown_pgNum,
                    idx: a.pulldown_idx,
                    readhistory: a.readUrl,
                    recgid: a.userId,
                    qid: a.qid,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                },
                success: function (e) {
                    a.generateVideoDomForPulldown(e)
                },
                error: function (e) {
                    console.error(e)
                },
                complete: function () {
                    e && e()
                }
            })
        }, pullDownLoadPicData: function (e) {
            var a = this;
            $.ajax({
                url: c,
                data: {
                    type: a.pnewsType,
                    startkey: C.get("startkey_" + a.newsType) ? C.get("startkey_" + a.newsType) : a.startKey[a.newsType],
                    lastkey: C.get("endkey_" + a.newsType) ? C.get("endkey_" + a.newsType) : a.endKey[a.newsType],
                    pgnum: a.pulldown_pgNum,
                    idx: a.pulldown_idx,
                    readhistory: a.readUrl,
                    recgid: a.userId,
                    qid: a.qid,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                },
                success: function (e) {
                    a.generatePicDomForPulldown(e)
                },
                error: function (e) {
                    console.error(e)
                },
                complete: function () {
                    e && e()
                }
            })
        }, getCityPinyin: function (e) {
            switch (e) {
                case"上海":
                    return "shanghai";
                case"北京":
                    return "beijing";
                case"河南":
                    return "henan";
                case"广东":
                    return "guangdong";
                default:
                    return null
            }
        }, cacheStickNews: function (e, a) {
            var t = C.get(a), s = e;
            if (t) {
                t = t.split(",");
                var i = $.inArray(e, t);
                if (i > -1)return;
                for (; t.length >= 5;)t.shift();
                t.push(e), s = t.join(",")
            }
            C.set(a, s, {exp: 7200})
        }, getCacheStickNews: function (e) {
            var a = C.get(e);
            return a || (a = ""), a
        }, scrollTo: function (e, a) {
            var t = j.children("a"), s = $(window).width(), i = e[0].offsetLeft, n = e.width();
            t.removeClass("active"), e.addClass("active"), j.scrollLeft(i + n / 2 - s / 2)
        }, refreshData: function (e) {
            console.log('已有缓存数据，不重新请求');
            var a = this, t = C.get("news_" + a.newsType), s = C.get("news_pos_" + a.newsType);
            try {
                a.getBannerData()
            } catch (l) {
                console.error(l)
            }
            t ? (L.html(t),
            "number" == typeof s && _.scrollTop(s),
            e && e()) : (C.set("pgnum_" + a.newsType, 1, {exp: 2400}), a.pgNum = 1, "shipin" === a.newsType ? a.loadVideoData(e) : "tupian" === a.newsType ? a.loadPicData(e) : a.loadNewsData(e))
        }, changeRefreshStatus: function () {
            U.addClass("active"), setTimeout(function () {
                U.removeClass("active")
            }, 700)
        }, generateDomForPulldown: function (e) {
            var a = this, t = e && e.data, s = t.length;
            console.log(e.data)
            if (!t || !t.length)return !1;
            a.pulldown_num++, a.startKey[a.newsType] = e.endkey, C.set("startkey_" + a.newsType, e.endkey, {exp: 86400}), a.endKey[a.newsType] = e.newkey, C.set("endkey_" + a.newsType, e.newkey, {exp: 86400}), t.reverse(), _.find(".J-read-position").remove(), L.prepend('<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>');
            for (var i = 0; i < s; i++) {
                var n = t[i], r = n.url, l = n.date, o = n.topic, c = n.source, d = n.accurateurl, p = n.miniimg, u = n.recommendtype ? n.recommendtype : "-1", g = n.hotnews, m = n.ispicnews, h = n.videonews, w = n.videolist, v = n.isadv || "", y = n.adv_id || "", f = n.type, T = n.subtype, x = p.length, b = Number(n.hotnews), k = Number(n.isvideo), U = Number(n.isrecom), j = Number(n.isnxw), D = Number(n.issptopic), N = Number(n.comment_count), G = Number(n.urlpv), S = n.picnums, O = "", B = "", A = "", P = "";
                if ("1" == h) {
                    if (B = B.replace("阅读", "观看"), q) {
                        var E = n.lbimg[0] ? n.lbimg[0].src : "", J = $('<section class="news-item news-item-video"><div class="video-wrap"><h3>' + o + '</h3><div class="J-video-box video-box"><video controls="auto" data-type="' + f + '" data-idx="' + (a.idx + i + 1) + '" poster="' + E + '" autobuffer="true" preload="none"><source src="' + w[0].src + '" type="video/mp4">您的浏览器不支持该视频播放。</video></div><p class="tags clearfix"><em class="tag tag-video">视频</em><em class="tag tag-src">' + c + "</em>" + O + B + "</p></div></section>");
                        L.prepend(J)
                    }
                } else"2" == h ? (B = B.replace("阅读", "观看"), q && L.prepend('<section class="news-item news-item-video-link"><a ' + A + ' data-accurateurl="' + d + '" data-type="' + f + '" data-subtype="' + T + '" href="' + r + '"><div class="news-wrap clearfix"><div class="txt-wrap fl"><h3>' + o + '</h3><p class="tags clearfix"><em class="tag tag-video">视频</em><em class="tag tag-src">' + c + "</em>" + O + B + '</p></div><div class="img-wrap fr"><img class="lazy" src="' + p[0].src + '"><span class="play-btn"></span></div></div></a></section>')) : (l = a.getSpecialTime(l), "1" == m ? (p = n.lbimg, L.prepend('<section class="pull-down news-item news-item-s3"><a ' + A + ' data-accurateurl="' + d + '" data-type="' + f + '" data-subtype="' + T + '" href="' + r + '"><div class="news-wrap"><h3>' + o + '</h3><div class="img-wrap clearfix"><img class="lazy fl" src="' + p[0].src + '" alt="' + p[0].alt + '"></div><p class="tags clearfix"><em class="tag tag-time">' + (P ? P : l) + '</em><em class="tag tag-src">' + c + "</em>" + O + B + "</p></div></a></section>")) : "2" == m ? (p = n.lbimg, L.prepend('<section class="news-item news-item-pic-link-special"><a data-type="' + f + '" data-subtype="" href="' + r + '"><h3>' + o + '</h3><div class="img-wrap"><img src="' + p[0].src + '" alt=""><span class="num">' + S + '图</span></div><p class="tags clearfix"><em class="tag tag-time">' + (P ? P : l) + '</em><em class="tag tag-src">' + c + "</em>" + O + B + "</p></a></section>")) : "-1" == m ? L.prepend('<section class="news-item news-item-noimg"><a ' + A + ' data-accurateurl="' + d + '" data-type="' + f + '" data-subtype="' + T + '" href="' + r + '"><div class="news-wrap"><h3>' + o + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (P ? P : l) + '</em><em class="tag tag-src">' + c + "</em>" + O + B + "</p></div></a></section>") : "0" == m && (x >= 3 ? L.prepend('<section class="pull-down news-item news-item-s2"><a ' + A + ' data-accurateurl="' + d + '" data-type="' + f + '" data-subtype="' + T + '" href="' + r + '"><div class="news-wrap"><h3>' + o + '</h3><div class="img-wrap clearfix"><div class="img fl"><img class="lazy" src="' + p[0].src + '" alt="' + p[0].alt + '"></div><div class="img fl"><img class="lazy" src="' + p[1].src + '" alt="' + p[1].alt + '"></div><div class="img fl"><img class="lazy" src="' + p[2].src + '" alt="' + p[2].alt + '"></div></div><p class="tags clearfix"><em class="tag tag-time">' + (P ? P : l) + '</em><em class="tag tag-src">' + c + "</em>" + O + B + "</p></div></a></section>") : L.prepend('<section class="pull-down news-item news-item-s1"><a ' + A + ' data-accurateurl="' + d + '" data-type="' + f + '" data-subtype="' + T + '" href="' + r + '"><div class="news-wrap clearfix"><div class="txt-wrap fl"><h3>' + o + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (P ? P : l) + '</em><em class="tag tag-src">' + c + "</em>" + O + B + '</p></div><div class="img-wrap fr"><img data-lbimg="' + (n.lbimg[0] ? n.lbimg[0].src : "") + '" class="lazy" src="' + p[0].src + '" alt="' + p[0].alt + '"></div></div></a></section>')))
            }
            var R = $('<p id="J_recommend_news" class="recommend-news">为您推荐<span>' + s + "</span>条新闻</p>");
            if (R.appendTo("body"), setTimeout(function () {
                    R.animate({scale: 0, opacity: .5}, "600", function () {
                        R.remove()
                    })
                }, 1200), a.pulldown_num >= 20) {
                a.pulldown_num = 0;
                var I = L.children(), z = I.length;
                for (i = z - 1; i >= z - 20; i--)I[i].remove()
            }
            C.set("pulldown_idx_" + a.newsType, a.pulldown_idx - s, {exp: 2400}), setTimeout(function () {
                L.children().removeClass("pull-down"), C.set("news_" + a.newsType, L.html(), {exp: 2400})
            }, 400)
        }, generatePicDomForPulldown: function (e) {
            var a = this, t = e.data ? e.data : null, s = t ? t.length : 0, i = 0, n = 3, r = s;
            if (!t || !s)return !1;
            a.pulldown_num++, a.startKey[a.newsType] = e.endkey, C.set("startkey_" + a.newsType, e.endkey, {exp: 86400}), a.endKey[a.newsType] = e.newkey, C.set("endkey_" + a.newsType, e.newkey, {exp: 86400}), t.reverse(), _.find(".J-read-position").remove(), L.prepend('<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'), s > 4 && s < 8 ? (i = 0, n = 3) : s > 8 && (i = s - 8, n = s - 5), r = Math.floor((n - i + 1) * Math.random() + i);
            for (var l = 0; l < s; l++) {
                var o = t[l], c = o.lbimg, d = c[0], p = d.src, u = d.imgwidth, g = d.imgheight, m = o.picnums, h = o.hotnews, w = o.recommendtype ? o.recommendtype : "-1", v = o.date, y = o.type, f = o.topic, T = o.source, x = Number(o.urlpv), b = Number(o.hotnews), k = Number(o.isrecom), U = o.url + "?qid=" + a.qid + "&idx=" + (a.idx + l + 1) + "&recommendtype=" + w + "&ishot=" + h + "&fr=" + a.pnewsType + "&pgnum=" + a.pulldown_pgNum, j = "", D = "", N = "";
                b ? N = '<i class="tag tag-hot">热门</i>' : k && (N = '<i class="tag tag-rec">推荐</i>'), 0 !== x && (D = '<em class="tag tag-view">' + GLOBAL.Util.getSpecialCountStr(x) + "浏览</em>"), v = a.getSpecialTime(v), L.prepend('<section class="news-item news-item-pic-link"><a data-type="' + y + '" data-subtype="" href="' + U + '"><div class="img-wrap"><img src="' + p + '" alt="" data-width="' + u + '" data-height="' + g + '"><span class="num">' + m + "图</span></div><h3>" + f + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (N ? N : v) + "</em>" + j + D + '<em class="tag tag-src">' + T + "</em></p></a></section>")
            }
            var G = $('<p id="J_recommend_news" class="recommend-news">为您推荐<span>' + s + "</span>条更新</p>");
            if (G.appendTo("body"), setTimeout(function () {
                    G.animate({scale: 0, opacity: .5}, "600", function () {
                        G.remove()
                    })
                }, 1200), a.pulldown_num >= 20) {
                a.pulldown_num = 0;
                var S = L.children(), O = S.length;
                for (l = O - 1; l >= O - 20; l--)S[l].remove()
            }
            C.set("pulldown_idx_" + a.newsType, a.pulldown_idx - s, {exp: 2400}), setTimeout(function () {
                L.children().removeClass("pull-down"), C.set("news_" + a.newsType, L.html(), {exp: 2400})
            }, 400)
        }, generateVideoDomForPulldown: function (e) {
            var a = this, t = e.data ? e.data : null, s = !1, i = t ? t.length : 0;
            if (!t || !i)return !1;
            a.pulldown_num++, a.startKey[a.newsType] = e.endkey, C.set("startkey_" + a.newsType, e.endkey, {exp: 86400}), a.endKey[a.newsType] = e.newkey, C.set("endkey_" + a.newsType, e.newkey, {exp: 86400}), t.reverse(), _.find(".J-read-position").remove(), L.prepend('<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>');
            for (var n = 0; n < i; n++) {
                var r = t[n], l = r.miniimg, o = l[0], c = r.hotnews, d = r.recommendtype ? r.recommendtype : "-1", p = r.date, u = r.type, g = r.topic, m = r.source, h = o.src, w = o.imgwidth, v = o.imgheight, y = Number(r.comment_count), f = Number(r.urlpv), T = Number(r.hotnews), x = Number(r.isrecom), b = r.url + "?qid=" + a.qid + "&idx=" + (a.idx + n + 1) + "&recommendtype=" + d + "&ishot=" + c + "&fr=" + a.vnewsType + "&pgnum=" + a.pulldown_pgNum, k = [], U = "", j = "", D = "", N = "";
                T ? N = '<i class="tag tag-hot">热门</i>' : x && (N = '<i class="tag tag-rec">推荐</i>');
                0 !== f && (j = '<em class="tag tag-view">' + GLOBAL.Util.getSpecialCountStr(f) + "观看</em>", U = '<em class="tag tag-com">' + GLOBAL.Util.getSpecialCountStr(y) + "评论</em>"), p = a.getSpecialTime(p), L.prepend(['<section class="news-item news-img1 news-video">', '<div class="one-px-border"></div>', '<a data-type="' + u + '" href="' + b + '" class="news-link">', '<div class="info">', '<h3 class="title dotdot line3">' + g + "</h3>", '<p class="tags">', N ? '<em class="tag tag-time">' + N + "</em>" : p ? '<em class="tag tag-time">' + p + "</em>" : "", U, j, '<em class="tag tag-src">' + m + "</em>", "</p>", "</div>", '<div class="img img-bg"><img class="image" src="' + h + '" data-width="' + w + '" data-height="' + v + '"><span class="video-btn"></span></div>', "</a>", "</section>"].join("")), 0 === n || n % 1 !== 0 || s || (0 !== k.length && L.prepend('<section class="news-ctg"><div class="video-ctg-wrap"><div class="wrapper clearfix"><span class="fl">' + D + '</span><div class="link-wrap fl"><a class="J-video-ctg" data-type="' + k[0].value + '" href="javascript:;">' + k[0].name + '</a><a class="J-video-ctg" data-type="' + k[1].value + '" href="javascript:;">' + k[1].name + '</a><a class="J-video-ctg" data-type="' + k[2].value + '" href="javascript:;">' + k[2].name + '</a><a class="J-video-ctg" data-type="' + k[3].value + '" href="javascript:;">' + k[3].name + "</a></div></div></div></section>"), s = !0)
            }
            var S = $('<p id="J_recommend_news" class="recommend-news">为您推荐<span>' + i + "</span>条视频</p>");
            if (S.appendTo("body"), setTimeout(function () {
                    S.animate({scale: 0, opacity: .5}, "600", function () {
                        S.remove()
                    })
                }, 1200), a.pulldown_num >= 10) {
                a.pulldown_num = 0;
                var O = L.children(), B = O.length;
                for (n = B - 1; n >= B - 10; n--)O[n].remove()
            }
            C.set("pulldown_idx_" + a.newsType, a.pulldown_idx - i, {exp: 2400}), setTimeout(function () {
                L.children().removeClass("pull-down"), C.set("news_" + a.newsType, L.html(), {exp: 2400})
            }, 400)
        }, generateDom: function (e, a) {
            console.log('填充模板');
            var t = this, s = e && e.data;
            if (!s || !s.length)return !1;
            t.startKey[t.newsType] = e.endkey, C.set("startkey_" + t.newsType, e.endkey, {exp: 86400});
            for (var i = s.length, n = 0; n < i; n++) {
                var r = s[n], l = r.url, o = r.date, c = r.topic, d = r.source, p = r.accurateurl, u = r.miniimg, g = u.length, m = r.recommendtype ? r.recommendtype : "-1", h = r.hotnews, w = r.ispicnews, v = r.videonews, y = r.videolist, f = r.adv_id || "", _ = r.type, T = r.subtype, x = r.rowkey, b = r.isadv || "", k = r.zd || "", U = Number(r.hotnews), j = Number(r.isvideo), D = Number(r.isrecom), N = Number(r.isnxw), G = Number(r.issptopic), S = Number(r.comment_count), O = Number(r.urlpv), B = r.picnums, A = r.praisecnt, P = r.tramplecnt, F = "", E = "", J = "", R = "";
                if ("meinv" === t.newsType ? l += "?fr=meinv&#&gid=1&pid=1" : "1" != b && (l += "?idx=" + (t.idx + n + 1) + "&recommendtype=" + m + "&ishot=" + h + "&fr=" + t.newsType + "&pgnum=" + t.pgNum), "meinv" === t.newsType)L.append('<section class="news-item news-item-s4"><a data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap"><h3>' + c + '</h3><div class="img-wrap clearfix"><img class="lazy fl" src="' + u[0].src + '"></div></div></a><div class="options"><span class="num">' + B + ' 图</span><span class="view">' + GLOBAL.Util.getSpecialCountStr(O) + '</span><span class="split">|</span><span class="J-good good" data-rowkey="' + x + '">' + A + '</span><span class="J-bad bad" data-rowkey="' + x + '">' + P + "</span></div></section>"); else {
                    if (0 !== O && (E = '<em class="tag tag-view">' + GLOBAL.Util.getSpecialCountStr(O) + "阅读</em>", F = '<em class="tag tag-com">' + GLOBAL.Util.getSpecialCountStr(S) + "评论</em>"), "1" == v) {
                        if (E = E.replace("阅读", "观看"), q) {
                            var z = r.lbimg[0].src, V = $('<section class="news-item news-item-video"><div class="video-wrap"><h3>' + c + '</h3><div class="J-video-box video-box"><video controls="auto" data-type="' + _ + '" data-idx="' + (t.idx + n + 1) + '" poster="' + z + '" autobuffer="true" preload="none"><source src="' + y[0].src + '" type="video/mp4">您的浏览器不支持该视频播放。</video></div><p class="tags clearfix"><em class="time"><i class="video">视频</i></em><em class="src">' + d + "</em>" + F + E + "</p></div></section>");
                            L.append(V)
                        }
                    } else"2" == v ? (E = E.replace("阅读", "观看"), q && L.append('<section class="news-item news-item-video-link"><a ' + J + ' data-accurateurl="' + p + '" data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap clearfix"><div class="txt-wrap fl"><h3>' + c + '</h3><p class="tags clearfix"><em class="time"><i class="video">视频</i></em>' + F + E + '<em class="src">' + d + '</em></p></div><div class="img-wrap fr"><img class="lazy" src="' + u[0].src + '"><span class="play-btn"></span></div></div></a></section>')) : (o = t.getSpecialTime(o), "1" == w ? (u = r.lbimg, L.append('<section class="news-item news-item-s3"><a ' + J + ' data-accurateurl="' + p + '" data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap"><h3>' + c + '</h3><div class="img-wrap clearfix"><img class="lazy fl" src="' + u[0].src + '"></div><p class="tags clearfix"><em class="tag tag-time">' + (R ? R : o) + '</em><em class="tag tag-src">' + d + "</em>" + F + E + "</p></div></a></section>")) : "2" == w ? (u = r.lbimg, L.append('<section class="news-item news-item-pic-link-special"><a data-type="' + _ + '" data-subtype="" href="' + l + '"><h3>' + c + '</h3><div class="img-wrap"><img src="' + u[0].src + '" alt=""><span class="num">' + B + '图</span></div><p class="tags clearfix"><em class="tag tag-time">' + (R ? R : o) + '</em><em class="tag tag-src">' + d + "</em>" + F + E + "</p></a></section>")) : "-1" == w ? L.append('<section class="news-item news-item-noimg"><a ' + J + ' data-accurateurl="' + p + '" data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap"><h3>' + c + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (R ? R : o) + '</em><em class="tag tag-src">' + d + "</em>" + F + E + "</p></div></a></section>") : "0" == w && (g >= 3 ? L.append('<section class="news-item news-item-s2"><a ' + J + ' data-accurateurl="' + p + '" data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap"><h3>' + c + '</h3><div class="img-wrap clearfix"><div class="img fl"><img class="lazy" src="' + u[0].src + '"></div><div class="img fl"><img class="lazy" src="' + u[1].src + '"></div><div class="img fl"><img class="lazy" src="' + u[2].src + '"></div></div><p class="tags clearfix"><em class="tag tag-time">' + (R ? R : o) + '</em><em class="tag tag-src">' + d + "</em>" + F + E + "</p></div></a></section>") : g >= 1 && L.append('<section class="news-item news-item-s1"><a ' + J + ' data-accurateurl="' + p + '" data-type="' + _ + '" data-subtype="' + T + '" href="' + l + '"><div class="news-wrap clearfix"><div class="txt-wrap fl"><h3>' + c + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (R ? R : o) + '</em><em class="tag tag-src">' + d + "</em>" + F + E + '</p></div><div class="img-wrap fr"><img data-lbimg="' + (r.lbimg[0] ? r.lbimg[0].src : "") + '" class="lazy" src="' + u[0].src + '"></div></div></a></section>')));
                }
            }
            C.set("idx_" + t.newsType, t.idx + i, {exp: 2400}), setTimeout(function () {
                C.set("news_" + t.newsType, L.html(), {exp: 2400})
            }, 400)
        }, loadNewsData: function (e) {
            var a = this;
            $.ajax({
                url: t,
                data: {
                    type: a.newsType,
                    recgid: a.userId,
                    qid: a.qid,
                    picnewsnum: 1,
                    readhistory: a.readUrl,
                    zdnews: a.getCacheStickNews("stick_news"),
                    idx: 0,
                    pgnum: 1,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    L.html("")
                },
                success: function (e) {
                    a.idx = 0, J = !0,a.generateDom(e, t);
                    var s = C.get("news_pos_" + a.newsType);
                    s && _.scrollTop(s)
                },
                complete: function () {
                    e && e()
                }
            })
        }, loadVideoData: function (e) {
            var a = this;
            $.ajax({
                url: n,
                data: {
                    type: a.vnewsType,
                    startkey: "",
                    recgid: a.userId,
                    qid: a.qid,
                    domain: "eastday.com",
                    readhistory: a.readUrl,
                    idx: 0,
                    pgnum: 1,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    L.html("")
                },
                success: function (e) {
                    a.idx = 0, J = !0, a.generateVideoDom(e);
                    var t = C.get("news_pos_" + a.newsType);
                    t && _.scrollTop(t)
                },
                complete: function () {
                    e && e()
                }
            })
        }, loadPicData: function (e) {
            var a = this;
            $.ajax({
                url: o,
                data: {
                    type: a.pnewsType,
                    startkey: "",
                    recgid: a.userId,
                    qid: a.qid,
                    domain: "eastday.com",
                    readhistory: a.readUrl,
                    idx: 0,
                    pgnum: 1,
                    os: a.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    L.html(""), $("#J_loading").children(".spinner").show(), $("#J_loading").children(".txt").html("数据加载中")
                },
                success: function (e) {
                    a.idx = 0, a.generatePicDom(e);
                    var t = C.get("news_pos_" + a.newsType);
                    t && _.scrollTop(t)
                },
                complete: function () {
                    e && e()
                }
            })
        }, pullUpLoadData: function () {
            var e = this;
            e.pgNum = Number(C.get("pgnum_" + e.newsType)), C.set("pgnum_" + e.newsType, ++e.pgNum, {exp: 86400}), e.idx = Number(C.get("idx_" + e.newsType)), e.idx || (e.idx = 0), "shipin" === e.newsType ? e.pullUpLoadVideoData() : "tupian" === e.newsType ? e.pullUpLoadPicData() : e.pullUpLoadNewsData()
        }, pullUpLoadNewsData: function () {
            var e = this;
            $.ajax({
                url: i,
                data: {
                    type: e.newsType,
                    startkey: C.get("startkey_" + e.newsType) ? C.get("startkey_" + e.newsType) : e.startKey[e.newsType],
                    newsnum: "meinv" === e.newsType ? 10 : 20,
                    zdnews: e.getCacheStickNews("stick_news"),
                    qid: e.qid,
                    readhistory: e.readUrl,
                    idx: e.idx,
                    recgid: e.userId,
                    pgnum: e.pgNum,
                    os: e.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    console.log(1)
                    e.pullUpFlag = !1
                },
                success: function (a) {
                    J = !1,e.generateDom(a, t), e.pullUpFlag = !0
                },
                error: function (e, a) {
                    console.error(a)
                },
                complete: function () {
                }
            })
        }, pullUpLoadVideoData: function () {
            var e = this;
            $.ajax({
                url: l,
                data: {
                    type: e.vnewsType,
                    newsnum: 20,
                    idx: e.idx,
                    startkey: C.get("startkey_" + e.newsType) ? C.get("startkey_" + e.newsType) : e.startKey[e.newsType],
                    recgid: e.userId,
                    qid: e.qid,
                    domain: "eastday.com",
                    readhistory: e.readUrl,
                    pgnum: e.pgNum,
                    os: e.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    e.pullUpFlag = !1
                },
                success: function (a) {
                    J = !1, e.generateVideoDom(a)
                },
                error: function (e, a) {
                    console.error(a)
                },
                complete: function () {
                    e.pullUpFlag = !0
                }
            })
        }, pullUpLoadPicData: function () {
            var e = this;
            $.ajax({
                url: d,
                data: {
                    type: e.pnewsType,
                    newsnum: 20,
                    idx: e.idx,
                    startkey: C.get("startkey_" + e.newsType) ? C.get("startkey_" + e.newsType) : e.startKey[e.newsType],
                    recgid: e.userId,
                    qid: e.qid,
                    domain: "eastday.com",
                    readhistory: e.readUrl,
                    pgnum: e.pgNum,
                    os: e.osType
                },
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                beforeSend: function () {
                    e.pullUpFlag = !1, $("#J_loading").children(".spinner").show(), $("#J_loading").children(".txt").html("数据加载中")
                },
                success: function (a) {
                    e.generatePicDom(a)
                },
                error: function (e, a) {
                    console.error("pullUpLoadPicData: \n", a)
                },
                complete: function () {
                    e.pullUpFlag = !0
                }
            })
        }, getBannerData: function (e) {
            var a = this;
            $.ajax({
                url: y,
                data: {type: a.newsType, qid: a.qid, uid: a.userId, readhistory: a.readUrl, os: a.osType},
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 8e3,
                success: function (e) {
                    e.data && $.isPlainObject(e.data) && !$.isEmptyObject(e.data) ? a.loadBanner(e.data) : (v && v.remove(), v = null)
                },
                complete: function () {
                    e && e()
                }
            })
        }, generateVideoDom: function (e) {
            var a = this, t = e.data ? e.data : null, s = t ? t.length : 0;
            if (!t || !s)return !1;
            a.startKey[a.newsType] = e.endkey, C.set("startkey_" + a.newsType, e.endkey, {exp: 86400});
            for (var i = 0; i < s; i++) {
                var n = t[i], r = n.miniimg, l = r[0], o = n.date, c = n.type, d = n.topic, p = n.source, u = l.src, g = l.imgwidth, m = l.imgheight, h = n.recommendtype ? n.recommendtype : "-1", w = Number(n.comment_count), v = Number(n.urlpv), y = n.hotnews, f = Number(n.hotnews), _ = Number(n.isrecom), T = n.url + "?qid=" + a.qid + "&idx=" + (a.idx + i + 1) + "&recommendtype=" + h + "&ishot=" + y + "&fr=" + a.vnewsType + "&pgnum=" + a.pgNum, x = "", b = "", k = "", U = "", j = [];
                f ? k = '<i class="tag tag-hot">热门</i>' : _ && (k = '<i class="tag tag-rec">推荐</i>'), 0 !== v && (b = '<em class="tag tag-view">' + GLOBAL.Util.getSpecialCountStr(v) + "观看</em>", x = '<em class="tag tag-com">' + GLOBAL.Util.getSpecialCountStr(w) + "评论</em>"), o = a.getSpecialTime(o), L.append(['<section class="news-item news-img1 news-video">', '<div class="one-px-border"></div>', '<a data-type="' + c + '" href="' + T + '" class="news-link">', '<div class="info">', '<h3 class="title dotdot line3">' + d + "</h3>", '<p class="tags">', k ? '<em class="tag tag-time">' + k + "</em>" : o ? '<em class="tag tag-time">' + o + "</em>" : "", x, b, '<em class="tag tag-src">' + p + "</em>", "</p>", "</div>", '<div class="img img-bg"><img class="image" src="' + u + '" data-width="' + g + '" data-height="' + m + '"><span class="video-btn"></span></div>', "</a>", "</section>"].join(""));
                0 !== i && (i + 1) % 10 === 0 && ( 0 !== j.length && L.append('<section class="news-ctg"><div class="video-ctg-wrap"><div class="wrapper clearfix"><span class="fl">' + U + '</span><div class="link-wrap fl"><a class="J-video-ctg" data-type="' + j[0].value + '" href="javascript:;">' + j[0].name + '</a><a class="J-video-ctg" data-type="' + j[1].value + '" href="javascript:;">' + j[1].name + '</a><a class="J-video-ctg" data-type="' + j[2].value + '" href="javascript:;">' + j[2].name + '</a><a class="J-video-ctg" data-type="' + j[3].value + '" href="javascript:;">' + j[3].name + "</a></div></div></div></section>"))
            }
            C.set("news_" + a.newsType, L.html(), {exp: 2400})
        }, generatePicDom: function (e) {
            var a = this, t = e.data ? e.data : null, s = t ? t.length : 0;
            if (!t || !s)return $("#J_loading").children(".spinner").hide(), $("#J_loading").children(".txt").html("数据已经全部加载完！"), !1;
            a.startKey[a.newsType] = e.endkey, C.set("startkey_" + a.newsType, e.endkey, {exp: 86400});
            for (var i = 0; i < s; i++) {
                var n = t[i], r = n.lbimg, l = r[0], o = l.src, c = l.imgwidth, d = l.imgheight, p = n.date, u = n.type, g = n.topic, m = n.source, h = n.recommendtype ? n.recommendtype : "-1", w = Number(n.picnums), v = Number(n.urlpv), y = n.hotnews, f = Number(n.hotnews), _ = Number(n.isrecom), T = n.url + "?qid=" + a.qid + "&idx=" + (a.idx + i + 1) + "&recommendtype=" + h + "&ishot=" + y + "&fr=" + a.pnewsType + "&pgnum=" + a.pgNum, x = "", b = "", k = "";
                f ? k = '<i class="tag tag-hot">热门</i>' : _ && (k = '<i class="tag tag-rec">推荐</i>'), 0 !== v && (b = '<em class="tag tag-view">' + GLOBAL.Util.getSpecialCountStr(v) + "浏览</em>"), p = a.getSpecialTime(p), L.append('<section class="news-item news-item-pic-link"><a data-type="' + u + '" data-subtype="" href="' + T + '"><div class="img-wrap"><img src="' + o + '" alt="" data-width="' + c + '" data-height="' + d + '"><span class="num">' + w + "图</span></div><h3>" + g + '</h3><p class="tags clearfix"><em class="tag tag-time">' + (k ? k : p) + "</em>" + x + b + '<em class="tag tag-src">' + m + "</em></p></a></section>")
            }
            C.set("news_" + a.newsType, L.html(), {exp: 2400})
        }, loadBanner: function (e) {
            var a = this, t = e.lbimg[0].src, s = e.url, i = e.deliveryid, n = e.accurateurl;
            v ? (v.children(".banner").attr("href", s).attr("data-deliveryid", i).attr("data-accurateurl", n), v.find("img").attr("src", t)) : (v = $('<div class="act-banner"><a href="' + s + '" class="banner" data-deliveryid="' + i + '" data-accurateurl="' + n + '"><img src="' + t + '" alt=""></a><a href="javascript:;" class="close"></a></div>'), $("body").prepend(v), v.children(".banner").on("click", function (e) {
                e.preventDefault();
                var t = $(this), s = t.attr("data-deliveryid"), i = t.attr("data-accurateurl"), n = t.attr("href");
                a.sendPromoteNewslog({
                    advUrl: n, advId: s, accurateurl: i, callback: function () {
                        window.location.href = n
                    }
                })
            }), v.children(".close").on("click", function (e) {
                e.preventDefault(), v && v.remove(), v = null
            }))
        }, getSpecialTime: function (e) {
            var a = Date.parse(e.replace(/-/g, "/")), t = (new Date).getTime(), s = 288e5, i = Number(t - a), n = s - i, r = n > 0 ? GLOBAL.Util.getSpecialTimeStr(e) : "";
            return r
        }
    },$(function () {
        FastClick.attach(document.body);
        var a = new e;
        a.init();
    })
}();