/**
 * Created by Administrator on 2017/5/24.
 */
!function (e) {
    function t(n) {
        if (i[n])return i[n].exports;
        var o = i[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t, i) {
    i(2);
},function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        var i = document.createElement("script"), n = document.getElementsByTagName("script")[0];
        i.src = e, i.type = "text/javascript", i.onload = i.onerror = i.onreadystatechange = function () {
            /loaded|complete|undefined/.test(i.readyState) && function () {
                i.onload = i.onerror = i.onreadystatechange = null, i.parentNode.removeChild(i), i = void 0, t && t()
            }()
        }, n.parentNode.insertBefore(i, n)
    }
},function(e,t,i){
    var l = i(1);
    var _ = $('body').find("._view_count");
    setTimeout(function () {
        l("js/odometer.min.js", function () {
            var e = 244880974, i = new window.Odometer({
                el: _[0],
                value: e,
                format: "(,ddd)",
                theme: "minimal"
            });
            setInterval(function () {
                i.update(e += Math.floor(3 * Math.random()));
            }, 2e3)
        })
    }, 3e3)
},function(e,t){
    //时间格式化
    t.commaNumber = function (e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }, t.formatNum = function (e) {
        if (e += "", !e)return 0;
        var t = e.split(""), i = (t.shift(), "");
        return e < 1e4 ? e : e >= 1e4 && e < 1e8 ? (e = parseInt(e / 1e3) + "", t = e.split(""), i = t.pop(), t.join("") + "." + (i ? i : "") + "万") : e >= 1e8 ? (e = parseInt(e / 1e7) + "", t = e.split(""), i = t.pop(), t.join("") + "." + (i ? i : "") + "亿") : void 0
    }
}]);