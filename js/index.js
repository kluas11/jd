
// var liObj=document.getElementById('cirOne').children;
// var fsObj=document.getElementById('fslogo');
// var imgObj=document.getElementById('fslogo').getElementsByTagName('img');
// var sum=0;//定时器
// // alert(imgObj.length);
//  // alert(cc.length);
// var arrowObj=document.getElementsByClassName('fs_arrow');
  //  alert(aa.length);
// alert(bb.length);
// 鼠标放上去事件
// for (var i = 0; i < liObj.length; i++)
// {
//   // var a =bb[i].getAttribute('class');
//   // alert(a);
//   liObj[i].setAttribute('index',i);
//   liObj[i].onmouseover=function(){
//     var index=this.getAttribute('index');
//     sum=index;
//     // alert(index);
//     for (var j = 0; j <liObj.length; j++){
//       liObj[j].setAttribute('class','');
//       imgObj[j].setAttribute('class','');
//     }
//     //this指的是把当前鼠标放到LI
//     this.setAttribute('class','on');
//     imgObj[index].setAttribute('class','show');
//   }
// }
// 鼠标进过显示两个箭头  还有点击换图片事件
//  fsObj.onmouseover=function() {
//   for (var i = 0; i < arrowObj.length; i++)
//   {
//     // arrowObj[i].style.display='block';
//     arrowObj[i].onclick=function() {
//
//       if(this.getAttribute('id')=='arrowleft'){
//         if (sum==0){
//           sum=liObj.length-1;
//         }else {
//           sum--;
//         }
//
//         for (var i = 0; i < liObj.length; i++) {
//           imgObj[i].className='';
//           liObj[i].className='';
//         }
//         liObj[sum].className='on';
//         imgObj[sum].className='show';
//       }else {
//         clock();
//       }
//     }
//   }
//   clearInterval(timeclock);
// }
 // fsObj.onmouseout=function() {
  // for (var i = 0; i < arrowObj.length; i++)
  // {
  //   arrowObj[i].style.display='none';
  // }
//   timeclock=setInterval(function() {
//     clock();
//   },2000);
// }
// // 设置定时器
// timeclock=setInterval(function() {
//   clock();
// },2000);
// //定时器函数
// function clock() {
//    sum++;
//   if (sum==liObj.length) {
//     sum=0;
//   }
//   for (var i = 0; i < liObj.length; i++) {
//     imgObj[i].className='';
//     liObj[i].className='';
//   }
//   liObj[sum].className='on';
//   imgObj[sum].className='show';
// }

// JQ写法
var timeclock='';
 var sum='';
$('#cirOne li').mouseover(function () {
    //给每一个li添加下表
    var index=$(this).index();
    sum=index;
    $(this).addClass('on').siblings().removeClass('on');
    // console.log(index);
    $('#fslogo img').eq(index).addClass('show').siblings('img').removeClass('show');
})
//两个箭头
$('.fs_logo').mouseenter(function () {
    $('.fs_arrow').show();


    clearInterval(timeclock);
})
//  菜单经过显示菜单
$('.menus_list li').hover(function () {
    var index =$(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.menus .image').show().find('li').eq(index).css('display','block');

},function () {
    $(this).removeClass('active')
    $('.menus .image li').css('display','none');
    $('.menus .image').hide()

})
$('.menus .image li').hover(function () {
    var lidex=$(this).index();
    $(this).show();
    $('.menus .image').show()
    $('.menus_list li').eq(lidex).addClass('active').siblings().removeClass('active')

},function () {
    $(this).hide()
    $('.menus_list li').removeClass('active');
    $('.menus .image').hide()
})





//箭头点击切换图片
$('.fs_arrow').click(function () {
    if($(this).attr('id')=='arrowright'){
        clock();
    }else{
        if(sum == 0){
            sum=$('#cirOne li').length;
        }
        sum--;
        $('#cirOne li').eq(sum).addClass('on').siblings().removeClass('on');
        $('#fslogo img').eq(sum).addClass('show').siblings().removeClass('show');
        console.log(sum);
    }
})
//离开div
$('.fs_logo').mouseleave(function () {
    $('.fs_arrow').hide();
    timeclock=setInterval(function () {
        clock();
    },2000);
})
//定时器
timeclock=setInterval(function () {
    clock();
},2000);
// 定时器函数
function clock() {
    sum++;
    if(sum == $('#cirOne li').length){
        sum=0;
    }
    $('#cirOne li').eq(sum).addClass('on').siblings().removeClass('on');
    $('#fslogo img').eq(sum).addClass('show').siblings().removeClass('show');

}




 function selet(obj1,obj2) {
    obj1.mouseover(function () {
        $(this).addClass('xian').siblings().show();
    })
     obj1.mouseout(function () {
         $(this).removeClass('xian').siblings().hide();
     })
    obj2.mouseover(function () {
        $(this).show().siblings().addClass('xian');
    })
     obj2.mouseout(function () {
         $(this).hide().siblings().removeClass('xian');
     })

}
 selet($('.address'),$('.down_list'));
selet($('.jd_down'),$('.down_layer'));
selet($('.client_ser'),$('.client_down'));

//中部工具栏

$('#right_toolbar div').mouseover(function () {
   $(this).addClass('toolbar_hover')
})
$('#right_toolbar div').mouseout(function () {
    $(this).removeClass('toolbar_hover')
})


//登陆 左右滑动 促销公告
$(".new_menus li:first,.new_menus li:nth-child(2)").mouseover(function () {
    var index =$(this).index();
    $(".bottom_line").stop().animate({
        left:index*44+'px'
    },300)
    if(index==1){

        $('.new_list2').show().prev('ul').hide();
    }else {
        $('.new_list').show().next('ul').hide();

    }
})



//定义计时器
var start=new Date("2017/06/11 13:20:30");
var end=new Date("2017/06/11 18:48:50");
var second=(end.getTime()-start.getTime())/1000;
// var time='';
//18000
// 把秒转化为天

time=setInterval(function () {
    if(second>=0) {
        var theday=Math.floor(second/3600/24);  //秒换算多少天  3600 1小时3600秒  1天24小时
        var thehour=Math.floor((second-(theday*24*3600))/3600);//秒换算为小时
        var theMinutes=Math.floor((second-(theday*24*3600)-(thehour*3600))/60);//秒换算为分钟
        var thesecond=(second-(thehour*3600))%60; //秒取余数 60秒自动换
        $('.spike_rtop .hour').text(parseInt(thehour)<10?'0'+thehour:thehour);
        $('.spike_rtop .minute').text(parseInt(theMinutes)<10?'0'+theMinutes:theMinutes);
        $('.spike_rtop .seconds').text(thesecond);
        second--;
    }else
    {
        clearInterval(time);
        alert('秒杀结束');
    }
},1000)



//滚动条显示搜索框

    $(window).scroll(function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;

        if(t>=500){
            $('#scroll_search ').stop().show().animate({
                height:60+'px'
            },300)
        }else{
            $('#scroll_search ').stop().css('height',0+'px').hide();
        }
    })



// 滑动滚动条
$("#scroll_navbar .nav_list li").nextUntil('.top').hover(function () {
    i=$(this).index();
    $(this).addClass('active');
},function () {

    $(this).removeClass('active');

})


//判断楼层
var num='';
$(window).scroll(function () {

    var lf=document.documentElement.scrollTop || document.body.scrollTop;
    // document.title=lf;
    if(lf>=700) {
        $('#scroll_navbar').fadeIn();
        $('#scroll_navbar .nav_list li').removeClass('active');
    }
    else {
        $('#scroll_navbar').fadeOut();
    }
    // 1f
    if(lf>=950&&lf<=1700){
        num=0;
    }
    // 2f
    if(lf>=1700&&lf<=2300){
        num=1;

    }
    // 3f
    if(lf>=2300&&lf<=2900){
        num=2;

    }
    // 4f
    if(lf>=2900&&lf<=3400){
        num=3;

    }
    // 5f
    if(lf>=3400&&lf<=3600){
        num=4;

    }
    //超出楼层
    if(lf>3600){
        $('#scroll_navbar .nav_list li').removeClass('active');
    }
    $('#scroll_navbar .nav_list li').eq(num).addClass('active').siblings().removeClass('active');

})
$('#scroll_navbar .nav_list li').hover(function () {
    i = $(this).index();
    $(this).addClass('active')
},function () {
    if(num==i){
        $(this).addClass('active')

    }else{
        $(this).removeClass('active')

    }

})




//锚链接 定位
//有过渡效果
$('a[href*=#],area[href*=#]').click(function () {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                     var $target = $(this.hash);
                     $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                     if ($target.length) {
                             var targetOffset = $target.offset().top;
                             $('html,body').animate({
                                         scrollTop: targetOffset
                               },
                                500);
                             return false;
                         }
                 }
         });
//scroll为0  没有过渡效果
// $("#scroll_navbar .na").click(function(){
//     $('body,html').animate({scrollTop:0},500);
// })



//无缝滚动

var linum=$('.spike_shop4 .list_box li').length;//统计li长度
var w=linum*200; //250每个li长度
$('.spike_shop4 .list_box ').css('width',w+'px')
$('.spike_shop4 .swap').html($('.spike_shop4 .main').html())



$('.list_arrow .prev, .list_arrow .next').hover(function () {
    $(this).fadeTo('fast',1)
},function () {
    $(this).fadeTo('fast',0.5)
})

//点击右箭头
$('.list_arrow .next').click(function () {
    //清除之前没执行完的动画
    if($('.spike_shop4 .main,.spike_shop4 .swap').is(':animated')){
        $('.spike_shop4 .swap,.spike_shop4 .main').stop(true,true)
    }
    //先判断li的个数
    if(linum>5){
        ml = parseInt($('.spike_shop4 .main').css('left'));
        sw = parseInt($('.spike_shop4 .swap').css('left'));

        //判断main可以移动的范围
        if(ml<=0 && ml > w*-1){
            //先把swap放在右边的位置等着
            $('.spike_shop4 .swap').css('left','1000px');
            $('.spike_shop4 .main').animate({
                left: (ml - 1000)+'px'
            },'slow')
            if(ml== (w-1000)*-1){
                $('.spike_shop4 .swap').animate({
                    left:'0px'
                },'slow')
            }
        }else{
            //先把mainlist放在右边的位置等着
            $('.spike_shop4 .main').css('left','1000px');
            $('.spike_shop4 .swap').animate({
                left:(sw - 1000) + 'px'
            },'slow');
            if(sw== (w-1000)*-1){
                $('.spike_shop4 .main').animate({
                    left:'0px'
                },'slow')
            }
        }
    }

})

//点击左箭头
$('.list_arrow .prev').click(function () {
    //清除没有执行完的动画
    if($('.spike_shop4 .main, .spike_shop4 .swap').is(':animated')){
        $('.spike_shop4 .main, .spike_shop4 .swap').stop(true,true);
    }

//    判断li的个数
    if(linum>5){
        ml=parseInt($('.spike_shop4 .main').css('left'));
        sw=parseInt($('.spike_shop4 .swap').css('left'));

        // 判断main移动范围
        if(ml<=0 && ml > w*-1){
            //先把swap放在右边的位置等着
            $('.spike_shop4 .swap').css('left',w*-1+'px');
            $('.spike_shop4 .main').animate({
                left: (ml+ 1000)+'px'
            },'slow')
            if(ml==0){
                $('.spike_shop4 .swap').animate({
                    left:(w-1000)*-1+'px'
                },'slow')
            }
        }else{
            //先把mainlist放在右边的位置等着
            $('.spike_shop4 .main').css('left',w*-1+'px');
            $('.spike_shop4 .swap').animate({
                left:(sw + 1000) + 'px'
            },'slow');
            if(sw== 0){
                $('.spike_shop4 .main').animate({
                    left:(w-1000)*-1+'px'
                },'slow')
            }
        }
    }
})


// 获取transform的值               匹配所有不在括号里面的字符  0-9 还有 -  替换成空  以逗号隔开成为一个数组
// $('.yourSelector').css('transform').replace(/[^0-9\-,]/g,'').split(',')
//排行榜 左右滑动
$('.r_box .r_listbox li').mouseover(function () {
   var index=$(this).index();

   var tr=index*74;
   // alert(tr);
   // var lf=index*73;
   // $('.r_box .underline').stop().animate({
   //     left:lf+"px"
   // },300)
    $('.r_box .underline').stop().css({
        transform:"translateX"+"("+tr+"px"+")"
    })
})
































// $('.spike_shop4 .list_box').css({
//     width:w+'px',
//     transform:'translateX(0px)',
//     'transition-property':'transform',
//     'transition-duration':'0.6s'
// })


//点击右边下一张
// $('.list_arrow .next').click(function () {
//     if(linum>5){
//         //查找transform的数值
//         var tr=($('.spike_shop4 .list_box').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4])
//         if(tr<=0 && tr > -(w-1250))
//         $('.spike_shop4 .list_box').css({
//             transform:"translateX"+"("+(tr-1000)+"px"+")"
//         })
//         else {
//             alert("到-5000");
//         }
//     }
// })
//
//
// //点击左边上一张
// $('.list_arrow .prev').click(function () {
//     var tr=($('.spike_shop4 .list_box').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4])
//     if(linum>5){
//         $('.spike_shop4 .list_box').css({
//             transform:"translateX"+"("+parseInt(parseInt(tr)+1000)+"px"+")"
//         })
//
//     }
//
// })
