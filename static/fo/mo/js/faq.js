$(document).ready(function (){
    $('.tab-sw').owlCarousel({
		items : 3, //화면에 표시 할 슬라이드 수
		nav : false,
		margin: -15, //사이 간격
		dots : false, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : false, // 무한 반복 여부
	});

	/* faq answer */
	var accordion_tab = $('.qa-quest'), accordion_content = $('.qa-answer');
	//accordion p tag click
	accordion_tab.on('click', function(e){
		//tab link 비활성화
		e.preventDefault();
		//활성화 된 class 제거
		accordion_tab.removeClass('active');
		$('.fa-plus').addClass('active');
		$('.fa-minus').removeClass('active');
		//accordion div 내용 숨기기
		accordion_content.slideUp('normal');
		//tab이 숨겨져 있으면 활성화 시키고 div 내용 펼치기
		if($(this).siblings('.qa-answer').is(':hidden') == true) {
			$(this).find('.fa-plus').removeClass('active');
			$(this).find('.fa-minus').addClass('active');
			$(this).next().slideDown('normal');
		} 			  
	});

	// faq tab
	let mainTabs = $(".faq-cont-wrap .tab-sw li")
	let tabContents = $(".faq-cont-wrap .tab-pane")

	$(tabContents).hide();
	$(tabContents).eq(0).show();

	$(mainTabs).click(function () {
		$(mainTabs).removeClass("active");
		$(this).addClass("active");
		$(tabContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()

		$('.prod-tab-slide').slick('setPosition');
	});
});