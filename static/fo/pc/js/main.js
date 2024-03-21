
$(function (){

	/**
	 * main
	 * swper slider setting
	*/
	var swiper = new Swiper(".mainSwiper", {
		loop: true,							// 반복 여부
		autoplay: {							// 자동으로 재생
			delay: 4000,					// 화면이 멈춰있는 시간
			disableOnInteraction: false, 	// 사용자 상호작용에도 계속 작동토록 함.
		},
		speed: 300,							// 슬라이드 전환 애니메이션의 속도
		slidesPerView: "auto",				// 한 번에 보여질 슬라이드 수
		spaceBetween: 20,					// 슬라이드 간격
		centeredSlides: true,				// 슬라이드를 가운데로 정렬하여 양 옆 슬라이드는 잘린 형태로 노출
		pagination: {
			el: ".swiper-pagination",
			type: "custom",					 // pagination 타입을 custom으로 설정
			renderCustom: function (swiper, current, total) {
				return current + " / " + total;  // 숫자 형태로 페이지 번호를 표시
			}
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});


	// 카테고리별 인기상품 tabs
	let popularTabs = $(".popular-items .tabs li")
	let popularContents = $(".popular-items .tab-cont .tab-pane")

	$(popularContents).hide();
	$(popularContents).eq(0).show();

	$(popularTabs).click(function () {
		$(popularTabs).removeClass("active");
		$(this).addClass("active");
		$(popularContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});


	// 베스트상품 slide
	var swiper = new Swiper(".bestSwiper", {
		slidesPerView: 4,		// 가로로 보이는 슬라이드 수
		slidesPerColumn: 2,		// 세로로 보이는 슬라이드 수 (행 수)
		spaceBetween: 20,		// 슬라이드 사이의 간격
  	});

	// 베스트상품 tabs
	let bestTabs = $(".best-items .tabs li")
	let bestContents = $(".best-items .tab-cont .tab-pane")

	$(bestContents).hide();
	$(bestContents).eq(0).show();

	$(bestTabs).click(function () {
		$(bestTabs).removeClass("active");
		$(this).addClass("active");
		$(bestContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});

});