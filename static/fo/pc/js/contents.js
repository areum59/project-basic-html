$(function (){

	/** 
	 * 아코디언(accordion)
	 * 기능 공통 script
	 */
	$('.accordion-title').click(function() {
		$('.accordion-title').not(this).removeClass('open');
		$('.accordion-title').not(this).next().slideUp(300);
		$(this).toggleClass('open');
		$(this).next().slideToggle('300');
	});
	
});
