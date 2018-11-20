
//为什么我快速点击左右滑动按钮的时候,日期滑动距离会出错




$.fn.btnclick = function(){
    var ui = $(this)
  $('.first',ui).on('click',function(){
        $('.first-list').show()
        return false
    })
    $('.first-list div').on('click',function(){
        $('.first').text($(this).text())
        $('.first-list').hide()
    })
    $('body').on('click',function(){
        $('.first-list').hide()

    })
}
$.fn.changeclick =function(){
    var sec = $(this)
    $('.section-top-span',sec).on('click',function(){
        $('.section-top-span').removeClass('section-active')
        $(this).addClass('section-active')
        var k = $(this).index()
        $('.sp-left').removeClass('sp-left-active')
        $('.sp-left').eq(k).addClass('sp-left-active')
    })
    $('.sp-left','section-part').on('click',function(){
        
    })
}
function changetime(){
    
        // week = today.getday(),
        weeks = ['天','一','二','三','四','五','六']
      
    for (let index = 0; index < 48; index++) {
        var today = new Date()
        var year = today.getFullYear(),
            month = today.getMonth() + 1,
            date = today.getDate();
        var mydate = new Date(year, month, date + index)
        var getdate = mydate.getFullYear()+'-'+mydate.getMonth()+'-'+mydate.getDate()
        var getweek = '星期'+weeks[mydate.getDay()]
        var date = document.createElement('div')
        date.className = 'sptm-date';
        date.innerHTML = `<div class="sptm-date">
                            <div class="sptmd-time">
                                <span>${getweek}</span>
                                <span>${getdate}</span>
                            </div>
                            <div class="sptmd-morning"></div>
                            <div class="sptmd-afternoon sptmd-have">约满</div>
                            <div class="sptmd-evening"></div>
                        
                        
                        </div>`
        $('.spt-infinite').append(date)
    }
}
$.fn.timeleft = function(){
    var sevenwidth = $('.spt-middle').width()
    $(this).on('click',function(){
        if($('.spt-infinite').css('left') === '0px'){
            console.log(1)
            return 
        }else{
            $('.spt-infinite').animate({'left': parseInt($('.spt-infinite').css('left')) + sevenwidth})

        }
    })
}
$.fn.timeright = function () {
    var sevenwidth = $('.spt-middle').width()
    $(this).on('click', function () {
        if ($('.spt-infinite').css('left') === (-sevenwidth*6+'px')) {
            return
           
        } else {
            $('.spt-infinite').animate({ 'left': parseInt($('.spt-infinite').css('left')) - sevenwidth })
        }
    })
}
$(function(){

    
    changetime()
    //医院按钮
    $('.form').btnclick()
    //消息切换
    $('.section-top').changeclick()
    //左滑动日期
    $('.spt-toleft').timeleft()
    //👉滑动日期
    $('.spt-toright').timeright()
})


