$(function(){
    /** (참고) 
     * JS inckyde시 script 미작동 오류로 인해
     * body에서 이벤트를 발생시켜 자식요소에 이벤트 전달 
     * 따라서 실제 프로젝트 진행시 선택자 수정 必
     */

     
    /** 
	 * 아코디언(accordion) 기능
     * 공통 script
	 */
     $("body").on("click", ".accordion-title", function () {
		$(this).toggleClass('toggle');
		$(this).next().slideToggle('fast');
	});


    /** 
	 * 즐겨찾기 아이콘 on/off
	 */
    $('.add-quick, .add-quickon').click(function() {
        var addQuick = $(this).hasClass('add-quick');
        $(this).toggle();
        if (addQuick) {
            $('.add-quickon').show();
        } else {
            $('.add-quick').show();
        }
    });
});