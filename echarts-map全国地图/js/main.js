/*
 * @Author: Mr.zhao 
 * @Date: 2017-11-30 14:22:07 
 * @Last Modified by: Mr.zhao
 * @Last Modified time: 2017-11-30 18:19:12
 */

$(function() {
    var charts = [];
    //走势图-图表
    var optionByZst = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['新增', '预警', '意向']
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '新增',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [10, 12, 21, 54, 260, 830, 710, 300, 200, 52, 12, 13]
            },
            {
                name: '预警',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [30, 182, 434, 791, 390, 30, 10, 12, 56, 8, 5, 1]
            },
            {
                name: '意向',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [1320, 1132, 601, 234, 120, 90, 20, 5, 10, 23, 56, 55]
            }
        ]
    };
    if ($('#js_chartZst').length > 0) {
        var chartZst = echarts.init(document.getElementById('js_chartZst'), 'macarons');
        chartZst.setOption(optionByZst, true);
        charts.push(chartZst);
    }
    //最新报告-图表
    var optionByNew = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [{
            name: '最新动态',
            type: 'pie',
            radius: ['40%', '70%'],
            color: ['#0277de', '#27dd90'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [
                { value: 40, name: '不合格预警' },
                { value: 60, name: '最新更新' }
            ]
        }]
    };
    if ($('#js_chartNew').length > 0) {
        var chartNew = echarts.init(document.getElementById('js_chartNew'), 'macarons');
        chartNew.setOption(optionByNew, true);
        charts.push(chartNew);
    }

    //报告分析图-图表
    var optionByBgfx = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['正常', '预警']
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['2017-10-10', '2017-10-11', '2017-10-12', '2017-10-13', '2017-10-14', '2017-10-15', '2017-10-16'],
            axisLabel: {
                interval: 0
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '正常',
                type: 'line',
                data: [11, 22, 15, 13, 16, 30, 10]
            },
            {
                name: '预警',
                type: 'line',
                data: [1, 10, 2, 5, 26, 2, 5]
            }
        ]
    };
    if ($('#js_chartBgfx').length > 0) {
        var chartBgfx = echarts.init(document.getElementById('js_chartBgfx'), 'macarons');
        chartBgfx.setOption(optionByBgfx, true);
        charts.push(chartBgfx);
    }

    //全国抽检情况预警-图表
    var optionByQgyj = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预警量']
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '预警量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            },
            markLine: {
                data: [
                    { type: 'average', name: '预警线', yAxis: 100 }
                ]
            }
        }]
    };
    if ($('#js_chartQgyj').length > 0) {
        var chartQgyj = echarts.init(document.getElementById('js_chartQgyj'), 'macarons');
        chartQgyj.setOption(optionByQgyj, true);
        charts.push(chartQgyj);
    }

    //重置图表
    charts.length > 0 && (window.onresize = function() {
        for (var i = 0; i < charts.length; i++) {
            charts[i].resize();
        }
    });

    //时间插件  
    $('#searchDateRange').val(moment().subtract('days', 6).format('YYYY-MM-DD') + ' - ' + moment().format('YYYY-MM-DD'));
    $('#reportrange').daterangepicker({
        format: 'YYYY-MM-DD',
        endDate: new Date(),
        maxDate: new Date(),
        open: 'right',
        locale: {
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: '从',
            toLabel: '到',
            weekLabel: 'W',
            customRangeLabel: '选择时间',
            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        }
    }, function(start, end, label) {
        $('#searchDateRange').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
    });

    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'iradio_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
    
})