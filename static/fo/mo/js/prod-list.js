$(document).ready(function (){

    $('.prod-menu').owlCarousel({
		items : 4, //화면에 표시 할 슬라이드 수
		animateOut : 'fadeOut', // 사라질때의 애니메이션
		nav : false,
		margin: 0, //사이 간격
		dots : false, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : false, // 무한 반복 여부
	});

		/* sub product list
	 * tabs
	 */
		let listTabs = $(".filter-tabs li")
		let prodContents = $(".prod-grid")
	
		$(prodContents).hide();
		$(prodContents).eq(0).show();
	
		$(listTabs).click(function () {
			$(listTabs).removeClass("active");
			$(this).addClass("active");
			$(prodContents).hide()
	
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn()
		});

		$(".prod-menu li").click(function () {
			$(".prod-menu li").removeClass("active");
			$(this).addClass("active");
		});

});