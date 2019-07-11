//弹窗阻止背景滚动
var scroll = (function () {  
    var scrollTop;  
    return {  
        afterOpen: function () {  
            scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop;  
            document.body.classList.add('noScroll');  
            document.body.style.top = -scrollTop + 'px';  
        },  
        beforeClose: function () {  
            document.body.classList.remove('noScroll');  
            document.body.style.top = 0;
            document.scrollingElement.scrollTop = scrollTop;  
            document.body.scrollTop = scrollTop;  
        }  
    };  
})('scroll');
var bookLand = {
    iosSchema:'zhenyuexiaoshuo://',
    androidSchema:'qmzs://com.yr',
    params:'',
    iosParams:{},
    downUrl_AN:'',
    downUrl_IOS: 'https://itunes.apple.com/cn/app/id1460644037?mt=8',
    iosOffLine:true,
    qd:'',
    kfh:0,
    baseUrl:'http://bookapi.qmzhuishu.com:82/index.php?service=',
    pageNum:1,
    isEnd:false,
    bookID:0,
    bookName:'',
    bookCover:'',
    chapterList:[],
    curIndex:0,
    topHeight:0,
    os:0,
    init: function () {
        var that = this;
        that.kfh=that.getURLParameter('kfh')||0,that.bookID=that.getURLParameter('id')||0;
        //获取渠道号
        that.qd = that.getURLParameter('qd') || 'fx_cpa_1_zonghe';
        that.downUrl_AN = 'https://apk.466fdgsf.xyz:10442/direct/' + that.qd;
        
        if(that.sysTemInfo()=='android'){
            that.os=1;
        }else if(that.sysTemInfo()=='ios'){
            that.os=2;
        }

        that.showSubTit();
        that.getNovelDetail();
        that.bindEvent();
    },
    //获取书籍详情
    getNovelDetail: function(){
        var that = this;
            $.ajax({
                url: that.baseUrl + 'ShareV204.Novel.NovelInfo',
                data: {
                    id: that.bookID
                },
                success: function(res) {
                    if(res.data.info.novel_name){
                        that.bookName=res.data.info.novel_name;
                        that.bookCover=res.data.info.novel_cover;
                        $('#jsNovelInfo').html('<h1>'+res.data.info.novel_name+'</h1><span>'+res.data.info.novel_author+'</span>');
                        that.topHeight=$('#jsNovelInfo').height()+20;
                        that.getNovelChapterList();
                    }
                }
            });
    },
    //获取章节列表
    getNovelChapterList: function(){
        var that = this,_str='novel_id='+that.bookID+'&8Xe!YGE*%6q@hC1f',sign=$.md5(_str).toUpperCase();
            $.ajax({
                url: that.baseUrl + 'ShareV204.Chapter.ChapterList',
                data: {
                    novel_id: that.bookID,
                    sign:sign
                },
                success: function(res) {
                    if(res.data.length){
                        that.chapterList=res.data;
                        $('#jsChapterNums').html('共'+that.chapterList.length+'章');
                        var _tmp='';
                        $.each(res.data,function(i,o){
                            if(i<60){
                                _tmp+='<dd><a href="javascript:;" data-id="'+o.chapter_id+'" data-index="'+i+'" id="chapterItem_'+i+'" class="item">'+o.chapter_name+'</a></dd>'
                            }                            
                        });
                        _tmp+='<dd><a href="javascript:;" class="jsShowPop">更多章节...</a></dd>'
                        $('#jsChapterList').html(_tmp);
                        that.getNovelChapterInfo(that.chapterList[0].chapter_id,0);
                    }
                }
            });
    },
    //获取章节详情
    getNovelChapterInfo: function(chapterID,index){
        var that = this,_str='id='+chapterID+'&8Xe!YGE*%6q@hC1f',sign=$.md5(_str).toUpperCase();
            $.ajax({
                url: that.baseUrl + 'ShareV204.Chapter.WapChapterInfo',
                data: {
                    id: chapterID,
                    sign:sign
                },
                success: function(res) {
                    if(res.data){
                        $('#js_loadBox').hide();
                        $('#jsChapterTit,#jsFly').html(res.data.chapter_name);
                        $('#jsChapterCon').html(res.data.content.replace(/\n|\r\n/g,"<br/>"));
                        that.curIndex=parseInt(index);
                        that.chapterID=chapterID;
                        that.changeState();
                    }else{
                        $('#jsPop').fadeIn();
                    }
                }
            });
    },
    //改变选中状态
    changeState: function(){
        var that=this;
        //设置章节选中样式
        $('#jsChapterList dd a').removeClass('active');
        $('#chapterItem_'+that.curIndex).addClass('active');
        if(that.curIndex==0){
            $('#btnPrev').addClass('off');                    
        }
        if(that.curIndex>0){
            $('#btnPrev').removeClass('off');                    
        }
        $('html,body').animate({scrollTop: that.topHeight}, 200);
        //上报接口
        that.pushMsg();
    },
    //进度上报
    pushMsg: function(){
        var that = this,md = new MobileDetect(window.navigator.userAgent),_str='',_s='',_v='';
        var _t=Date.parse(new Date());
            that.os==1?(_v=md.version('Android')||0):(_v=md.version('iOS')||0);
            _str='chapter_index='+(parseInt(that.curIndex)+1)+'&novel_id='+that.bookID+'&os='+that.os+'&timestamp='+_t+'&version='+encodeURIComponent(_v.toFixed(1))+'&SAxGMYdGcyzz04kJPyfYR4b3I6TaLFH1'
            _s=$.md5(_str).toUpperCase()
            // _h='版本：'+_v.toFixed(1)+' 系统：'+that.os
            // $('.infos').html(_h)
            // return false;
            $.ajax({
                url:'http://wup.qmzhuishu.com:82/v1/wap-share/commit-novel-history',
                type:'post',
                data: {
                    chapter_index:parseInt(that.curIndex)+1,
                    novel_id:that.bookID,
                    os:that.os,
                    timestamp:_t,
                    version:_v.toFixed(1),
                    sign:_s
                },
                success: function(res) {
                    // console.log(res);
                }
            });
    },
    //显示浮动章节标题
    showSubTit: function(){
        var $fly =  $('#jsFly');
        $(window).scroll(function(){
            $(this).scrollTop() > 100 ? $fly.addClass('show') : $fly.removeClass('show');
        });
    },
    //浏览器禁止返回
    stopBack: function() {
        var that = this,_num=0;
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function() {
                _num++;
                if(Number(_num)<=that.kfh||that.kfh==0){
                    window.history.pushState('forward', null, document.URL);
                    window.history.forward(1);
                } else {
                    window.history.go(-1);
                }
            });
            window.history.pushState('forward', null, document.URL);
            window.history.forward(1);
        }
    },
    //设置窗口宽高
    setWindow: function () {
        var winH = $(window).height(),
            winW = $(window).width();
        $('body').height(winH).width(winW);
    },
    //重置窗口高度
    resize: function () {
        var that = this;
        $(window).on('resize', function () {
            that.setWindow();
        });
    },
    //判断系统是ios还是安卓
    sysTemInfo: function () {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            return 'android';
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            return 'ios';
        }
    },
    //判断是wx
    isWeChat: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    //微信系统内容处理
    weChatRes: function (n) {
        var that = this;
        var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
        $('body').append(html);
        $(document).on('click', '.js_btn_down', function () {
            $(this).attr('href', 'javascript:;');
            $(".wechat").css("height", $(window).height()).show();
        });
    },
    //系统判断后的处理
    down: function () {
        var that = this;
            that.params='?d='+that.bookID+'&i='+(parseInt(that.curIndex)+1);
            that.iosParams='?d='+that.bookID+'&i='+(parseInt(that.curIndex)+1)+'&n='+that.bookName+'&c='+that.bookCover;
        if (that.sysTemInfo() == 'android') { 
            window.location.href = that.androidSchema+that.params;
            window.setTimeout(function () {
                window.location.href = that.downUrl_AN;
            }, 500);            
        } else if (that.sysTemInfo() == 'ios') {
            window.location.href = that.iosSchema+encodeURI(that.iosParams);
            window.setTimeout(function () {
                window.location.href = that.downUrl_IOS;
            }, 500);
        } 
    },
    getURLParameter:function(i){
        return decodeURIComponent((new RegExp('[?|&]' + i + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    },
    getLocalStorge:function (i) {
		if (window.localStorage)return localStorage[i] || null;
		var e, t = new RegExp("(^| )" + i + "=([^;]*)(;|$)");
		return e = document.cookie.match(t), e ? window.unescape ? window.unescape(e[2]) : e[2] : null;
    },
    setLocalStorge:function (i, e) {
		if (window.localStorage)localStorage[i] = e; else {
			var t = new Date;
			t.setTime(t.getTime() + 2592e6), e = window.escape ? window.escape(e) : e, document.cookie = i + "=" + e + ";expires=" + t.toGMTString();
		}
    },
    delLocalStorge:function (i) {
		var e = t.getLocalStorge(i);
		void 0 !== e && (window.localStorage ? delete localStorage[i] : document.cookie = i + "=" + e + ";expires=" + new Date(0).toGMTString());
    },
    bindEvent:function(){
        var that=this;
        $(document).on('click','.jsDownApp',function(){
            that.down();
        });
        // 章节切换
        $('.toolBar .btn').click(function(){
            var _t=$(this).attr('data-type');
                if(_t=='prev'){
                    that.curIndex-=1;
                }else{
                    that.curIndex+=1;
                }
                if(that.curIndex<0){
                    that.curIndex=0;
                    return false;
                }
                that.getNovelChapterInfo(that.chapterList[that.curIndex].chapter_id,that.curIndex);
        });
        $(document).on('click','#jsChapterList dd .item',function(){
            var _id=$(this).attr('data-id'),_i=$(this).attr('data-index');
                that.getNovelChapterInfo(_id,_i);
        });
        //弹窗
        $(document).on('click','.jsClosePop',function(){
            $('#jsPop').fadeOut();
        });
        $(document).on('click','.jsShowPop',function(){
            $('#jsPop').fadeIn();
        });
        //显示章节列表
        $('.jsShowChapter').click(function(){
            $('#jsChapterBox').addClass('open');
            scroll.afterOpen();
            $('#jsMask').stop().delay(200).fadeIn();
        });
        //隐藏章节列表
        $('#jsChapterBox').click(function(){
            $(this).removeClass('open');
            scroll.beforeClose();
            $('#jsMask').stop().delay(200).fadeOut();
        });
    }
};

$(function () {
    bookLand.init();
});