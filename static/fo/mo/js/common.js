$(document).ready(function (){

    // 메뉴 열기
    $("body").on("click", ".dropdown-menu > a", function(){
        $(this).siblings('.dropdown').toggleClass('open');
    });

        // Scroll to TOP
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll_top').fadeIn();
            } else {
                $('.scroll_top').fadeOut();
            }
        });
    
        $('.scroll_top').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        $("body").on("click", ".heart", function () {
            $(".cart-icon").children('.dropdown').removeClass('open');
            $(this).children('.dropdown').toggleClass('open');
        }); 
    
        $("body").on("click", ".cart-icon", function () {
            $(".heart").children('.dropdown').removeClass('open');
            $(this).children('.dropdown').toggleClass('open');
        }); 

        let ctgyOpen = $(".ctgy-layer")
        $("body").on("click", ".ctgy-btn", function(){
            $(ctgyOpen).addClass("ctgy-layer-open");
            $("body").addClass("push-left");
        });

        $("body").on("click", ".close-icon", function(){
            $(ctgyOpen).removeClass("ctgy-layer-open");
            $("body").removeClass("push-left");
        });

        // accordion
        $("body").on("click", ".accordion", function () {
            $(this).toggleClass("active");
            $(this).next().slideToggle(200);
        });

});