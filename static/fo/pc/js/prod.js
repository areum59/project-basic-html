$(function (){

	/**
	 * 상품 리뷰 작성
	 * 별점 선택
	 */ 
	 const stars = $(".add-rating .star");
	 let rating = 0;
 
	 for (let i = 0; i < stars.length; i++) {
		 stars[i].addEventListener("click", function () {
			 rating = this.dataset.value;
			 highlightStars();
		 });
		 stars[i].addEventListener("mouseover", highlightStars);
		 stars[i].addEventListener("mouseout", highlightStars);
	 }
 
	 function highlightStars() {
		 for (let i = 0; i < stars.length; i++) {
		 if (i < rating) {
			 stars[i].classList.add("filled");
		 } else {
			 stars[i].classList.remove("filled");
		 }
	 }
   }
 

    /**
	 * 상품목록
	 * 브랜드 필터 click : 더보기
	 */ 
	$('.brand-list li:lt(5)').removeClass('hidden'); // 초기에 5개의 리스트만 보이도록 설정
	
	// '더보기' 버튼 클릭 시 추가 리스트 보이기
	$('.show-more').click(function() {
		$('.brand-list li.hidden').removeClass('hidden');
		$(this).hide();
		$('.close-btn').show();
	});
	
	// '닫기' 버튼 클릭 시 추가 리스트 숨기기
	$('.close-btn').click(function() {
		$('.brand-list li:gt(4)').addClass('hidden');
		$(this).hide();
		$('.show-more').show();
	});
	

	// jQuery Range Slider
	$(function () {
		$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500000,
		values: [0, 500000],
		slide: function (event, ui) {
			$("#amount").val(ui.values[0].toLocaleString() + "원 - " + ui.values[1].toLocaleString()  + "원");
		}});
		$("#amount").val(
		$("#slider-range").slider("values", 0).toLocaleString() + "원 - "
		+ $("#slider-range").slider("values", 1).toLocaleString() + "원"
		);
	});

	// 좌측 인기상품 리스트 slider
	$('.popular-item .prod-list').owlCarousel({
		loop:false,			// 슬라이드 반복 여부
		items : 1,			//화면에 표시 할 슬라이드 수
		nav : false,		// 이전, 다음 버튼
		dots : true,		// Pagination 표시 여부
		margin: 0,			//사이 간격
		autoplay : false,	// 자동 슬라이드 여부
		autoHeight:true		// 높이를 내용에 맞게 자동으로 조정
	});

	// tabs : 상품목록 스타일 변환
	let listTabs = $(".prod-wrap .filter-tabs li")
	let prodContents = $(".prod-wrap .prod-list")

	$(prodContents).hide();
	$(prodContents).eq(0).show();

	$(listTabs).click(function () {
		$(listTabs).removeClass("active");
		$(this).addClass("active");
		$(prodContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});


	/* 상품 상세
	 * 상품 이미지(썸네일) 미리보기
	 */ 
	let bigPic = document.querySelector(".big");
	let smallPics = document.querySelectorAll(".small");

	for (var i = 0; i < smallPics.length; i++) {
		smallPics[i].addEventListener("click", chagePic);
	}
	function chagePic() {
		var newPic = this.src;
		bigPic.setAttribute("src", newPic);
	}

	// tab menu(상품정보 등) 클릭에 따른 화면 전환
	let detailTab = $(".detail-wrap .tabs > li")
	let details = $(".detail-wrap .tab-cont .tab-pane")

	$(details).hide();
	$(details).eq(0).show();

	// 화면전환
	$(detailTab).click(function () {
		$(detailTab).removeClass("active");
		$(this).addClass("active");
		$(details).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});

	// 추천상품 slider
	$('.recs-slide-wrap .recs-slide').owlCarousel({
		loop : false, // 무한 반복 여부
		items : 5, //화면에 표시 할 슬라이드 수
		nav : false,
		margin: 20, //사이 간격
		dots : true, // Pagination 표시 여부
		autoplay : false // 자동 슬라이드 여부
	});
	

	/** 
	 * jQuery Selectric
     * selectbox 라이브러리 실행
     */
    if ($(".selectric").length == 0) {
		$('select').selectric().on('selectric-init', function() {
			$('select').selectric();
		});
	}

});