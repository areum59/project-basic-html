$(function (){

	/** 
	 * 고객센터
	 * FAQ
	 */
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
	
	// "파일 선택" button 클릭 시 input type="file" 요소를 클릭
	$(".file-btn").on("click", function () {
		$(this).siblings(".file-inp").click();
	});

	// 파일이 입력되면 실행되는 이벤트 핸들러
	$(".file-inp").on("change", function () {
		var file = $(this).get(0).files[0];
		if (file) {
		var reader = new FileReader();
		var previewImage = $(this).siblings(".file-image").find(".prev-image");  // 파일 미리보기를 표시할 요소

		reader.onload = function () {
			previewImage.attr("src", reader.result);  // 읽어온 파일의 데이터를 미리보기 이미지의 src 속성에 설정
			$(this).hide(); // 파일 선택 버튼 숨기기
		}.bind(this);

		reader.readAsDataURL(file);  // 파일을 Data URL 형식으로 읽어옴
		}
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