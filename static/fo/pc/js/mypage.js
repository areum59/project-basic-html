$(function (){

	/* 
	내가 쓴 게시물
	'작성 가능한 리뷰'와 '작성한 리뷰' 화면 전환
	*/
	$(".tab-area li:first-child").addClass("currt-panel");
	
	$(".tab-area li").click(function () {
		// 현재 선택된 탭에만 'currt-panel' 클래스 추가
		$(".tab-area li").removeClass("currt-panel");
		$(this).addClass("currt-panel");
	
		// 해당 화면 표시
		var screenNumber = $(this).index() + 1;
		showScreen(screenNumber);
	});
	
	// 화면 전환
	function showScreen(screenNumber) {
		let resWritable = $(".managing-reviews .result-area .writable")
		let resWrited = $(".managing-reviews .result-area .writed")
	
		if (screenNumber === 1) {
			$(resWritable).show();
			$(resWrited).hide();
		} else if (screenNumber === 2) {
			$(resWritable).hide();
			$(resWrited).show();
		}
	}

	//작성한 리뷰 toggle
    $(".writed .view-more").click(function(){
        $(".writed .hideen").stop().fadeIn("fast");
        $(".show-intro").css("display","none");
    });
    $(".writed .hide-more").click(function(){
        $(".writed .hideen").stop().hide();
        $(".show-intro").css("display","block");
    });

    /**
	 * 마이페이지 : 메인
	 * 최근 본 상품 slider
	 */ 
	
    $('.mypage-wrap .viewed-slide').owlCarousel({
		loop : false, // 무한 반복 여부
		items : 5, //화면에 표시 할 슬라이드 수
		nav : false,
		margin: 20, //사이 간격
		dots : true, // Pagination 표시 여부
		autoplay : false // 자동 슬라이드 여부
	});

});