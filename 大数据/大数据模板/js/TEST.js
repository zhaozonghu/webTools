function (e, t) {
    "use strict";

    function a(e, t) {
        t = parseFloat(t);
        var a = 0,
            o = 0,
            r = [];
        e.forEach(function (e) {
            a += parseFloat(e.value)
        });
        var l = e.filter(function (e) {
            return parseFloat(e.value) / a * 100 <= t ? (o += parseFloat(e.value), r.push(e), !1) : !0
        });
        return r.length && l.push(1 == r.length ? r[0] : {
            value: o,
            name: "其它"
        }), l
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = e("sugar:node_modules/tslib/tslib.js"),
        r = e("sugar:node_modules/react/index.js"),
        l = e("sugar:widgets/charts/chart-manager.tsx"),
        n = e("sugar:widgets/charts/pie/pie-ctrl.tsx"),
        i = e("sugar:widgets/charts/_hoc/echarts.tsx"),
        s = e("sugar:node_modules/react-mixin/index.js"),
        c = e("sugar:widgets/charts/_mixin/echarts.tsx"),
        u = e("sugar:widgets/charts/_hoc/debug/debug.tsx"),
        d = e("sugar:widgets/charts/_hoc/drillDown/drillDown.tsx"),
        h = e("sugar:widgets/charts/_hoc/toolbar/toolbar.tsx"),
        m = e("sugar:node_modules/lodash/cloneDeep.js"),
        p = e("sugar:utils/common-helper.ts"),
        f = e("sugar:utils/export-file/export-csv.ts"),
        g = e("sugar:utils/export-file/export-excel.ts"),
        S = 12,
        v = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o.__extends(t, e), t.prototype.getDrillDownParam = function (e) {
                return o.__assign({}, e.data, {
                    _sugar_dd_default_: e.data.name_sugar_origin || e.data.name
                })
            }, t.prototype.getDependenceParam = function (e) {
                return {
                    item: o.__assign({}, e.data, {
                        _sugar_dd_default_: e.data.name_sugar_origin || e.data.name
                    }),
                    state: {
                        seriesIndex: e.seriesIndex,
                        dataIndex: e.dataIndex
                    }
                }
            }, t.prototype.refresh = function (e) {
                var t, o, r = e.chartData,
                    l = e.chartConfig,
                    n = e.chart,
                    i = e.hub,
                    s = l.isPlay,
                    c = l.chartRing || s,
                    u = n.isDashChart ? "#ccc" : "#333";
                l.openCustomColor && (t = l.textColor, o = l.lineColor), t = t || u, o = o || u;
                var d = m(r),
                    h = this.chart,
                    f = l.unit || "",
                    g = null == l.minAngle ? 6 : l.minAngle;
                l.autoSort && d.sort(function (e, t) {
                    return parseFloat(e.value) > parseFloat(t.value) ? -1 : 1
                }), l.hideZero && (d = d.filter(function (e) {
                    return e.value > 0 ? !0 : !1
                })), l.mergeSmallItmes && (d = a(d, null != l.smallItmeStandard ? l.smallItmeStandard : 1));
                var v = [],
                    b = 0,
                    x = parseFloat(d[0].value),
                    w = 0;
                d.forEach(function (e) {
                    parseFloat(e.value) > b && (b = parseFloat(e.value)), parseFloat(e.value) < x && (x =
                        parseFloat(e.value)), w += parseFloat(e.value), v.push(e.name)
                });
                var C = x / w,
                    y = {
                        trigger: "item",
                        formatter: function (e) {
                            var t = e.name,
                                a = "",
                                o = "";
                            return l.tooltipPercent && (a = e.percent + "%"), l.tooltipNum && (o = p.formatStringOrNumber(
                                e.value, null, !0) + f, l.tooltipPercent && (o = "(" + o + ")")), t + (a ||
                                o ? ":" : "") + (a ? " " + a : "") + (o ? " " + o : "")
                        }
                    },
                    _ = {
                        normal: {
                            label: {
                                show: l.chartLabel,
                                textStyle: {
                                    fontSize: l.labelFontSize || S
                                },
                                formatter: function (e) {
                                    return "" + e.name + ("" + (l.labelShowPercent ? ": " + e.percent + "%" :
                                        "")) + (l.labelShowNum ? " (" + p.formatStringOrNumber(e.value,
                                        null, !0) + f + ")" : "")
                                }
                            }
                        }
                    };
                l.openCustomColor && l.textColor && (_.normal.label.color = l.textColor);
                var I = ["50%", "50%"],
                    F = !1,
                    L = "50%";
                if (l.chartLegend && (L = "45%", I = ["40%", "50%"], F = !0), C > .12 && !l.labelShowNum && !l.labelShowPercent &&
                    (_ = {
                        normal: {
                            label: {
                                show: l.chartLabel,
                                textStyle: {
                                    fontSize: l.labelFontSize || S
                                },
                                position: "inner",
                                formatter: "{d}%"
                            },
                            labelLine: {
                                show: !1
                            }
                        }
                    }, L = "60%", I = ["35%", "50%"], F = !0), c && (L = ["20%", "50%"], l.chartLegend && (L = [
                        "20%", "45%"]), C > .12 && !l.labelShowNum && !l.labelShowPercent && (L = ["25%", "68%"],
                        _.emphasis = {
                            label: {
                                show: l.chartLabel,
                                textStyle: {
                                    fontSize: l.labelFontSize || S
                                },
                                position: "inner",
                                formatter: "{d}%"
                            }
                        }), 2 !== d.length || s || (d.sort(function (e, t) {
                            return e.value > t.value ? -1 : 1
                        }), F = !1, I = ["50%", "50%"], L = ["50%", "80%"], _ = {
                            normal: {
                                label: {
                                    show: l.chartLabel
                                },
                                labelLine: {
                                    show: !1
                                }
                            }
                        }, d[0].label = {
                            show: l.chartLabel,
                            position: "center",
                            formatter: "{b}\n{d}%",
                            textStyle: {
                                fontSize: l.labelFontSize || 20,
                                fontWeight: "bold"
                            }
                        }, l.openCustomColor && l.textColor && (d[0].label.textStyle.color = l.textColor), d[0]
                        .labelLine = {
                            show: !1
                        })), l.forceNoLegend && (F = !1, I = ["50%", "50%"], L = "50%", c && (L = ["20%", "50%"])),
                    i.dependenceData.dependenceState) {
                    var D = i.dependenceData.dependenceState,
                        N = (D.seriesIndex, D.dataIndex);
                    d.forEach(function (e, t) {
                        e.itemStyle || (e.itemStyle = {}), e.itemStyle.opacity = t !== N ? .5 : 1
                    })
                }
                var P = {
                    tooltip: y,
                    legend: {
                        show: F,
                        x: "right",
                        data: v,
                        textStyle: {
                            color: t,
                            fontSize: l.legendFontSize || S
                        },
                        orient: "vertical"
                    },
                    series: [{
                        name: "",
                        type: "pie",
                        radius: L,
                        label: {
                            show: l.chartLabel
                        },
                        labelLine: {
                            show: l.chartLabel
                        },
                        roseType: l.chartRose ? "radius" : !1,
                        center: I,
                        minAngle: g,
                        data: d,
                        itemStyle: _
                    }]
                };
                if (s && (P.series[0].label = {
                            normal: {
                                show: !1,
                                position: "center",
                                formatter: function (e) {
                                    return (l.labelShowNum ? p.formatStringOrNumber(e.value, null, !0) + f +
                                            "\n" : "") + ("" + (l.labelShowPercent ? e.percent + "%\n" : "")) +
                                        ("" + e.name)
                                }
                            },
                            emphasis: {
                                show: !0,
                                textStyle: {
                                    fontSize: l.fontSize || 30,
                                    fontWeight: "bold"
                                }
                            }
                        }, P.series[0].avoidLabelOverlap = !1, P.series[0].radius = ["50%", "70%"], P.series[0].itemStyle
                        .normal = {}, P.series[0].itemStyle.emphasis = {}, P.series[0].hoverOffset = l.hoverOffset ||
                        10, l.openCustomColor && l.textColor && (P.series[0].label.emphasis.textStyle.color = l.textColor)
                    ), l.openCustomColor && l.lineColor && (P.series[0].labelLine = {
                        lineStyle: {
                            show: l.chartLabel,
                            color: l.lineColor
                        }
                    }), l.openCustomColor && l.customColors && l.customColors.length && (P.color = l.customColors.map(
                        function (e) {
                            return e.color
                        })), l.openCustomShadow && l.shadowBlur) {
                    var z = P.series[0].itemStyle.normal;
                    z.shadowBlur = l.shadowBlur, z.shadowColor = l.shadowColor || "rgba(0, 0, 0, 0.5)", z.shadowOffsetX =
                        l.shadowOffsetX || 0, z.shadowOffsetY = l.shadowOffsetY || 0
                }
                if (h.setOption(P), clearInterval(this.playFlag), s) {
                    var O = 0,
                        A = (!isNaN(l.playIntervel) && l.playIntervel) > 1 ? l.playIntervel : 1,
                        B = P.series[0].data.length;
                    h.dispatchAction({
                        type: "highlight",
                        seriesIndex: 0,
                        dataIndex: O
                    }), this.playFlag = setInterval(function () {
                        h.dispatchAction({
                            type: "downplay",
                            seriesIndex: 0,
                            dataIndex: O
                        }), O = (O + 1) % B, h.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: O
                        })
                    }, 1e3 * A)
                }
            }, t.displayName = "Pie", t = o.__decorate([d.default, u.default, h.default, i.default, s.decorate(c.default)],
                t)
        }(r.Component);
    t.default = v, t.mergeSmallItmes = a;
    var b = function (e, t) {
            if (!e || !e.length) return "无数据";
            for (var a = !0, o = 0; o < e.length; o++) {
                var r = e[o];
                if (!r) return "饼图的第" + (o + 1) + "项数据为空，格式不对";
                if (!r.name) return "第" + (o + 1) + "项数据中没有名称name字段";
                if (!p.isNumberic(r.value)) return "第" + (o + 1) + "项数据中value取值不是数字类型";
                r.value && 0 !== r.value && "0" !== r.value && (a = !1)
            }
            return a && t && t.hideZero ? "数据全为0，并且设置了不展示数据为零的项，所以无数据可展示" : !0
        },
        x = function (e, t) {
            C(e, t, !0)
        },
        w = function (e, t) {
            C(e, t)
        },
        C = function (e, t, a) {
            if (void 0 === a && (a = !1), e && e.data && e.data.length) {
                var o = [],
                    r = [];
                e.data.forEach(function (e) {
                    o.push(e.name), r.push(e.value)
                }), a ? g.exportExcelByColumns([o, r], "" + (t.name || "export")) : f.exportCsvByColumns([o, r], (t
                    .name || "export") + ".csv")
            }
        };
    l.register({
        kind: "commonChart",
        type: "pie",
        name: "饼图",
        iconClassName: "chart-pie",
        commonCustomShadow: !0,
        commonCustomColor: !0,
        variants: [{
            name: "环形饼图",
            iconClassName: "chart-ring",
            initialState: {
                config: {
                    chartRing: !0
                }
            },
            initialDashboardState: {
                config: {
                    color: "#ccc"
                }
            }
        }, {
            name: "玫瑰饼图",
            iconClassName: "chart-rose",
            initialState: {
                dataApiUrl: "$CUR_HOST/openapi/demo/chart?type=rosePie",
                config: {
                    chartRose: !0,
                    labelShowPercent: !0
                }
            }
        }, {
            name: "轮播饼图",
            iconClassName: "chart-pie-play",
            initialState: {
                config: {
                    isPlay: !0,
                    labelShowPercent: !0
                }
            },
            initialDashboardState: {
                height: 350,
                width: 350,
                config: {
                    openCustomColor: !0,
                    textColor: "#fff",
                    fontSize: 20
                }
            }
        }],
        initialState: {
            dataType: "api",
            dataApiUrl: n.chartDemoUrl,
            config: {
                minAngle: 6,
                fontSize: 16,
                smallItmeStandard: 1,
                chartLabel: !0,
                hoverOffset: 10,
                playIntervel: 5,
                tooltipPercent: !0,
                tooltipNum: !0
            },
            dataConfig: {
                bindMode: "row",
                colModeMultiRows: "sum"
            }
        },
        initialDashboardState: {
            config: {
                color: "#ccc",
                labelShowPercent: !0
            }
        },
        component: v,
        dataBindCtrl: n.dataBindCtrl,
        advancedCtrl: n.advancedCtrl,
        exportCSV: w,
        exportExcel: x,
        needDashboardAutoFresh: !0,
        validate: b,
        drillDownType: "single",
        drillDownLink: !0,
        canBeDrillChild: !0
    })
}