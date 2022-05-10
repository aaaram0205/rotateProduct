
$(document).ready(function() {     


    //product__thumb
    $('.product__thumb li').on('click',function(){
        $('.product__thumb li').removeClass('on');
        $(this).addClass('on');
    });

    $(window).scroll(function(){



        // FIXED LEFT AREA WHEN SCROLL
        const win_scroll = $(this).scrollTop();
        const scroll_on = $('.lnb__depth3').offset().top;
        const wid_height = $(this).innerHeight();
        const footer_offset = $('footer').offset().top;

        
        //HEADER SCROLL    
        if (0 < win_scroll){
            $("header").addClass("scroll_on");

        } else {
            $("header").removeClass("scroll_on");

        }

        if (scroll_on < win_scroll){
            $(".sub-contents--product").addClass("fixed");
        } else {
            $(".sub-contents--product").removeClass("fixed");

        }

        if (win_scroll >= footer_offset - wid_height) {
            $('.product__left').addClass('btm-fixed');
        } else {
            $('.product__left').removeClass('btm-fixed');
        }
    
    });



});