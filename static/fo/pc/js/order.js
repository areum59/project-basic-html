$(function (){

	/** 
	 * 주문결제 정보
     * floating
     */
	var stickySidebar = $(".order-sidebar");

	if (stickySidebar.length > 0) {
		var stickyTop = stickySidebar.offset().top + 105;
		var sidebarHeight = stickySidebar.outerHeight();
		var wrap = $(".order-wrap");
		var wrapHeight = wrap.height();

		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			var sidebarBottom = stickyTop + sidebarHeight;
			var wrapBottom = wrap.offset().top + wrapHeight;

			if (scrollTop >= stickyTop && sidebarBottom <= wrapBottom) {
				stickySidebar.css("top", scrollTop - stickyTop);
			} else if (scrollTop < stickyTop) {
				stickySidebar.css("top", 0);
			} else {
				stickySidebar.css("top", wrapHeight - sidebarHeight);
			}
		});

		$(window).resize(function () {
			sidebarHeight = stickySidebar.outerHeight();
			wrapHeight = wrap.height();
		});
	}

	/** 
	 * 결제방법
     * radio 버튼 선택에 따른 페이지 전환
     */
	var paySelect = $('.payment-select input[name="payType"]');
	var paymentCont = $('.payment-detail .page-desc');
	var chkPayment = $('.payment-select input[name="payType"]:checked');
	
	function switchPage() {
		var selectedPage = $(this).val();
	
		paymentCont.each(function() {
			if ($(this).data('page') === selectedPage) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	}
	paySelect.change(switchPage);
	
	// 초기 페이지 설정
	if (chkPayment.length > 0) {
		switchPage.call(chkPayment);
	}
	

    // Checkout : open login box
	$(".js-showlogin").on('click', function() {
		$(".js-openlogin").slideToggle();
		$(this).toggleClass("active");
	});

	// Checkout : open coupon
	$(".js-showcp").on('click', function() {
		$(".js-opencp").slideToggle();
		$(this).toggleClass("active");
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