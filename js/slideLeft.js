$(function(){
    var page = 1;
    var i = 3; //每版放3个图片
    //向后 按钮
    $(".next").click(function(){    //绑定click事件
        var picList = $("div.picList");
        var ul = $(".picList>ul");
        var v_width = picList.width();//获得ul父元素div的宽度
        var len = picList.find("li").length;
        console.log(len);
        var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
        if( !ul.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
            if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                ul.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
            }else{
                ul.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
            }
        }
    });
    //往前 按钮
    $(".prev").click(function(){
        var picList = $("div.picList");
        var ul = $(".picList>ul");
        var v_width = picList.width();
        var len = picList.find("li").length;
        var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
        if(!ul.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
            if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
                ul.animate({ left : '-='+v_width*(page_count-1) }, "slow");
                page = page_count;
            }else{
                ul.animate({ left : '+='+v_width }, "slow");
                page--;
            }
        }
    });
});