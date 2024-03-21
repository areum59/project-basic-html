$(function (){

    /** (참고) 
     * JS inckyde시 script 미작동 오류로 인해
     * body에서 이벤트를 발생시켜 자식요소에 이벤트 전달 
     * 따라서 실제 프로젝트 진행시 선택자 수정 必
     */

    /*
     header
     Scroll TOP
    */
     $(window).scroll(function() {
        // 스크롤을 내리면 top이동 버튼 fadeIn/Out
        if ($(this).scrollTop() > 180) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }

        // header > nav : sticky
        if ($(window).scrollTop() >= 100) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // top 이동 클릭 이벤트 (0.6s에 걸쳐 스르륵)
    $("body").on("click", ".scroll-top", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // head top : 오프라인 매장 menu toggle
    $("body").on("click", "header .toggle-menu", function(){
        $(this).children('.toggle-box').toggleClass('open');
    });

    // 검색조건 셀렉트 박스 커스텀
    $("body").on("click", "header .default-option", function(){
        $(this).parent().toggleClass("active");
    });

    $("body").on("click", "header .select-ul li", function(){
        var currentele = $(this).html();
        $(".default-option li").html(currentele);
        $(this).parents(".ctgy-select").removeClass("active");

        if ($(this).parents().find("form").attr("id") == "prod-search-form") {
            let keywordType = $(this).find("div").attr("value");
            $(this).parents().find("form").find("input[name=keywordType]").val(keywordType);
        }
    });

    // user menu toggle
    $("body").on("click", "header .my-menu .toggle-menu", function () {
        $(this).siblings('.toggle-box').toggleClass('open');
    });

    /*
    GNB
    전체 카테고리 click 열기/닫기
    */
    $("body").on("click", "header .category .menu-all-btn", function () {
        if ($(this).siblings(".menu-all").is(":visible")) {
            $(this).siblings(".menu-all").fadeOut("fast");
        } else {
            $(this).siblings(".menu-all").fadeIn();
        }
    });
    

    /*
     radio button click event
     contents toggle
    */
     $('.toggle-radio').change(function() {
        $('.toggle-cont').hide();
        $(this).siblings('.toggle-label').next('.toggle-cont').show();
    });
    

    /*
     wishlist(관심상품 등록)
     button event
    */
    // 상품 위시리스트(찜) 버튼
    const wishCheckboxes = $('.wish-chk');

    $(wishCheckboxes).click(function() {
        $(this).toggleClass("chk-item");
    });


    // wishCheckboxes.forEach(item => {
    //     item.addEventListener('click', () => {
    //         item.classList.toggle('chk-item');
    //     });
    // });
});