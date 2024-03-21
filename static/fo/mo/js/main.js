$(document).ready(function (){
    $('.main-slide').owlCarousel({
		items : 1, //화면에 표시 할 슬라이드 수
		nav : false,
		margin: 50, //사이 간격
		dots : true, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : true, // 무한 반복 여부
	});

    $('#flashdeal-slide').owlCarousel({
		items : 1, //화면에 표시 할 슬라이드 수
		animateOut : 'fadeOut', // 사라질때의 애니메이션
		nav : false,
		margin: 15, //사이 간격
		dots : true, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : true, // 무한 반복 여부
	});

    /* main product-tabs */
	let mainTabs = $(".product-tab .tab-sw li")
	let tabContents = $(".product-tab .tab-content .tab-pane")

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

    // product-tab 슬라이드
	$('.prod-tab-slide').slick({
        dots: true,
        arrows: false,
        slidesPerRow: 2,
        centerPadding: '10px',
        rows: 2,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                    nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                    infinite: true,
                    dots: true,
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    });

    $('.brand-slide').owlCarousel({
		items : 1, //화면에 표시 할 슬라이드 수
		nav : true,
		margin: 40, //사이 간격
		dots : false, // Pagination 표시 여부
		autoplay : false, // 자동 슬라이드 여부
		loop : true, // 무한 반복 여부
	});

});