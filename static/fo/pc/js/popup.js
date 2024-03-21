$(function(){

    /** 
     * jQuery colorbox popup
     * 메인
     * mainSwiper 배너 리스트
     */ 
     $(".mainSwiper .open-pop").colorbox({
        href: "/views/layout/popup/main-eve-list.html",
        width:"960px",
        maxHeight: "700",
        fixed: true,
        scrolling: false
    });

    /** 
     * 상품정보 미리보기
     */ 
    $(".quick-view").colorbox({
        href: "/views/layout/popup/prod/quick-details.html",
        width:"960px",
        height:"645px",
        fixed: true,
        scrolling: true
    });


    /** 
     * 회원 > 약관 내용보기
     * 이용약관 동의
     */ 
    $(".open-terms").colorbox({
        href: "/views/layout/popup/agree/terms-popup.html",
        width:"1000px",
        height:"600px",
        fixed: true,
        scrolling: false
    });

    // 개인정보 처리방침
    $(".open-privacy").colorbox({
        href: "/views/layout/popup/agree/privacy-popup.html",
        width:"1000px",
        height:"600px",
        fixed: true,
        scrolling: false
    });

    // 마케팅 이용약관 동의
    $(".open-marketing").colorbox({
        href: "/views/layout/popup/agree/marketing-popup.html",
        width:"1000px",
        height:"600px",
        fixed: true,
        scrolling: false
    });


    /** 
     * 주문결제
     * 배송지관리, 수정 팝업
     */ 
     $(".select-addr").colorbox({
        href: "/views/layout/popup/order/select-address.html",
        width: "500px",
        height: "700px",
        fixed: true,
        scrolling: false,
        onComplete: function() {  // 팝업이 열린 후 작업을 수행할 수 있는 콜백 함수
            $(".edit-addr").click(function() {  // '수정' 버튼 클릭시 수정 팝업 화면으로 이동

                $.colorbox({
                    href: "/views/layout/popup/order/edit-address.html",
                    width: "500px",
                    height: "700px",
                    fixed: true,
                    scrolling: false,
                    onComplete: function() {
                        $(".close-pop").click(function () {
                            $.colorbox.close();
                        });
                    }
                });
                
            });
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

    // 주문결제 > 이용동의 관련(임시팝업)
    $(".agree-layer").colorbox({
        href: "/views/layout/popup/order/agree-layer.html",
        width:"440px",
        height:"600px",
        fixed: true,
        scrolling: false
    });

    /** 
     * 마이페이지
     * 취소/반품/교환 상세 정보
     */ 
    $(".case-detail").colorbox({
        href: "/views/layout/popup/mypage/case-detail.html",
        width:"440px",
        height:"540px",
        fixed: true,
        scrolling: false
    });

    // 주문취소 신청
    $(".cancel-order").colorbox({
        href: "/views/layout/popup/mypage/cancel-order.html",
        width:"440px",
        height:"575px",
        fixed: true,
        scrolling: false,
        onComplete: function() {
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

    // 교환,반품 신청
    $(".return-order").colorbox({
        href: "/views/layout/popup/mypage/return-order.html",
        width:"440px",
        height:"575px",
        fixed: true,
        scrolling: false,
        onComplete: function() {
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

    // 리뷰 등록
    $(".add-review").colorbox({
        href: "/views/layout/popup/review-insert.html",
        width:"440px",
        height:"615px",
        fixed: true,
        scrolling: false
    });

    // 배송지 관리 > 수정
    $(".edit-addr").colorbox({
        href: "/views/layout/popup/order/edit-address.html",
        width: "500px",
        height: "700px",
        fixed: true,
        scrolling: false,
        onComplete: function() {
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

    // 배송지 관리 > 새 배송지 추가
    $(".add-addr").colorbox({
        href: "/views/layout/popup/mypage/add-address.html",
        width: "500px",
        height: "700px",
        fixed: true,
        scrolling: false,
        onComplete: function() {  // 팝업이 열린 후 작업을 수행할 수 있는 콜백 함수
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

    // 고객센터(1:1문의하기) > 주문상품 검색
    $(".prod-search").colorbox({
        href: "/views/layout/popup/cscenter/orderProduct-search.html",
        width: "700px",
        height: "700px",
        fixed: true,
        scrolling: false,
        onComplete: function() {  // 팝업이 열린 후 작업을 수행할 수 있는 콜백 함수
            $(".close-pop").click(function () {
                $.colorbox.close();
            });
        }
    });

});