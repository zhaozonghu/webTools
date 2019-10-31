$(function () {
    $("#IsFollow").click(function () {
        $.get("/ddhtml/luckdraw/IsFollow", function (data) {
            alert(data.message);
        });
    });
    $("#IsLuck").click(function () {
        $.get("/ddhtml/luckdraw/IsLuck", function (data) {
            if (data.success) {
                alert("未抽奖,可以抽奖！");
            } else {
                if (!data.success) {
                    if (data.type === 5) {
                        alert("您已经抽过奖了，很遗憾没有中奖！");
                    }
                    else {
                        alert("您已经抽过奖了，恭喜您中奖了:中奖金额为：" + data.money);
                    }
                }
            }
        });
    });
    $("#Luck").click(function () {
        $.get("/ddhtml/luckdraw/Luck", function (data) {
            if (data.success) {
                if (data.type === 5) {
                    alert("谢谢参与，您没有中奖！");
                }
                else if (data.type === 6) {
                    alert("恭喜您中奖了:中奖金额为：" + data.money);
                }
            } else {
                if (data.type === 4) {
                    alert("未获取用户信息，请重试！");
                }
                else if (data.type === 0) {
                    alert("未关注公众号，请关注之后再抽奖！");
                }
                if (data.type === 5) {
                    alert("您已参加过活动:谢谢参与，您没有中奖！");
                }
                else if (data.type === 6) {
                    alert("您已参加过活动:恭喜您中奖了:中奖金额为：" + data.money);
                }
            };
        });
    });
});