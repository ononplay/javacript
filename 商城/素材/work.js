$(function () {
    //让顶部导航栏有状态
    var topRight = $('.top-right1');
    console.log(topRight)
    for (i in topRight) {
        // console.log(i)
        topRight.eq(i).hover(function () {
            console.log(i)
            $(this).addClass('top-active')
        })
        topRight.eq(i).mouseout(function(){
            topRight.removeClass('top-active')
        })
    }
    //轮播图
    var img = $('.img a img'),
        span = $('.dots span'),
        bannermiddle = $('.banner-middle'),
        k = 0,
        len = img.length,
        timer = null,
        // btn = $('button'),
        prev = $('.prev'),
        next = $('.next');

    //切换图片函数
    function changeimg() {
        img.removeClass('img-active');
        span.removeClass('active');
        img.eq(k).addClass('img-active')
        span.eq(k).addClass('active')
    }
    //当鼠标移开时定时切换
    
    bannermiddle.mouseout(function () {
        timer = setInterval(function () {
            k++;
            console.log(k)
            if (k >= len) {
                k = 0
            }
            changeimg()
        }, 1000)
        
    })
    bannermiddle.mouseout();
    //当鼠标覆盖图片是解除定时。。
    //这边如果我用hover的话，会出错误，不知道为什么
    bannermiddle.mouseover(function () {
        console.log(1)
        if (timer)
            clearInterval(timer)
    })
    //点击按钮奇幻图片，上一张
    prev.on('click', function () {
        k--
        if (k < 0) {
            k = len - 1
        }
        changeimg()
    })
    //点击按钮奇幻图片，下一张
    next.on('click', function () {
        k++
        if (k >= len) {
            k = 0
        }
        changeimg()
    })
    //点击圆点切换图片
    for (var i = 0; i < len; i++) {
        span.eq(i).attr('id', i)
        console.log(typeof (span.eq(i).attr('id')))
        span.eq(i).on('click', function () {
            k = $(this).attr('id');
            console.log(k)
            changeimg();
        })
    }

    // 接下来是弹出层的解决
    var topLogin = $('.top-login')
 
    var cover = $('.cover')
    // 登陆框
    topLogin.click(function(){
        cover.show()
        $('.cover-show').show()
        console.log(1234)
        $('.submit').click(function () {
            var username = $("input[name='username']").val();
            console.log(username)
            var password = $("input[name='password']").val();
            if (isNaN(username)===false && username.length === 11) {
                $(".phone-error").html("");
            } else {
                $(".phone-error").html("请输入正确的手机号");
            }
            if (password.length < 16 && password.length > 6 && password !==' ') {
                $(".password-error").html("");
            } else {
                $(".password-error").html("请输入正确的mima");
            }
            if ($(".phone-error").html() == $(".password-error").html()){
                alert('登陆成功')
            }
        })
    })
    $('.cover-close').click(function(){
        cover.hide();
        $('.cover-show').hide()
        $('.cover-rel').hide()
        callback()
    })
// 组车款

    $('.top-rel').click(function(){
        cover.show()
        $('.cover-rel').show()
     
        $('.rel').click(function () {
            var username2 = $("input[name='username2']").val();
            console.log(username2)
            var yesorno = $("input[name='yesorno']").val();
            if (isNaN(username2) === false && username2.length === 11) {
                $(".phone-error2").html("");
            } else {
                $(".phone-error2").html("请输入正确的手机号");
            }
            if (yesorno==='gyyd') {
                $(".yesorno").html("");
            } else {
                $(".yesorno").html("请输入正确的验证码");
            }
            if ($(".phone-error2").html() == $(".yesorno").html()) {
                alert('登陆成功')
            }
        })
    })
    function callback(){
        $(".password-error").html("");
    }
    
    $('.rel').click(function(){
        
        var username = $("input[name='username']").val();
        var checkit = $("input[name='checkit']").val();
        console.log(username)
        if (username === 'imooc' && checkit === 'gyyd') {
            alert("登录成功");
        } else {
            $(".error").html("验证码输入错误");
        }
    })


    var bannerActive = $('.banner-active')
    var bannerbox = $('.banner-box')
    var bannerleft = $('.banner-left')
    var blpart = $('.bl-part');
    for(var j = 0;j<blpart.length;j++){
        blpart.eq(j).data('data-bl',j);
        
        blpart.eq(j).mouseover(function(){
            var blidx = $(this).data('data-bl')
            // bannerActive.css('display','block')
            bannerActive.eq(blidx).removeClass('banner-hide')
            for(var d = 0;d<blpart.length;d++){
                // console.log(d)
                bannerbox.eq(d).css('display','none');
                // bannerActive.addClass('banner-hide')
            }
            console.log(blidx)
            console.log(bannerbox.eq(blidx))
            bannerbox.eq(blidx).css('display','block')
            // bannerActive.removeClass('banner-hide')
            // console.log(blidx)
        })
    }
    bannerleft.mouseout(function(){
        bannerActive.addClass('banner-hide')
    })
        bannerActive.mouseover(function () {
            $(this).removeClass('banner-hide');
            });
            bannerActive.mouseout(function () {
                $(this).addClass('banner-hide')
            });
    // var blpartlen = blpart.length;
    // var ddd = blpart.eq(5);
    // // ddd.addClass('dkfjkd')
    // console.log(ddd)
    // var kkk = bannerActive.eq(5)
    // console.log(kkk)
    // var bannerLen =bannerActive.length;
    // for(var j = 0;j<blpartlen;j++){
    //     console.log(j)
    //     blpart.eq(j).hover(function(){
    //         console.log(bannerActive.eq(j))
    //             bannerActive.eq(j).removeClass('banner-hide')
    //     })
    // }
    // for(j in blpart){
    //     console.log(j)
    //     blpart.eq(j).hover(function(){
    //         bannerActive.show()
    //     })}

    //展示区的显现\
   
    //     var floorpart = $('.floor-part2 span');
    // console.log(floorpart)
    //     var floorimg = $('.floor-img')
    
    // for (var t = 0; t < floorpart.length; t++) {
    //     floorpart.eq(t).attr('fl-data', t);
    // floorpart.eq(t).click(function(){
    //     var numimg = $(this).attr('fl-data');
        
    //             for(var k = 0;k<floorpart.length;k++){
    //                 floorpart.eq(k).removeClass('active')
    //                 floorimg.eq(k).hide()
                    

    //     }
    //     $(this).addClass('active')
    //     floorimg.eq(numimg).show()}
    // )}
    var floorpart = $('.floor-part2 span')
    var floorimg = $('.floor-img');
        for (var t = 0; t < floorpart.length; t++) {
            console.log(t)
            floorpart.eq(t).attr('fl-data', t);
            floorpart.eq(t).click(function () {
                var numimg = $(this).attr('fl-data');

                // for (var k = 0; k < floorpart.length; k++) {

                    $(this).parents('.floor').children('.floor-img').hide()


                // }
                floorimg.eq(numimg).show()
               
                // $(this).parents('.floor').children('.floor-img').eq(numimg).show();
            }
            )
        }
    

})
