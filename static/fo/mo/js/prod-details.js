$(document).ready(function (){

    $('.thum-wrap').owlCarousel({
		items : 4, //화면에 표시 할 슬라이드 수
		animateOut : 'fadeOut', // 사라질때의 애니메이션
		nav : false,
		margin: 15, //사이 간격
		dots : false, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : false, // 무한 반복 여부
	});

        /* sub product view
	 * 상품 이미지 미리보기
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

    /* main product-tabs */
	let mainTabs = $(".detail-tabs li")
	let tabContents = $(".prod-detail-info .tab-content .tab-pane")

	$(tabContents).hide();
    $(tabContents).eq(0).show();
	$(mainTabs).eq(0).addClass("active");

	$(mainTabs).click(function () {
		$(mainTabs).removeClass("active");
		$(this).addClass("active");
		$(tabContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()

        $('.prod-tab-slide').slick('setPosition');
	});

});