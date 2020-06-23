jQuery(function($){
	/*Menu JS*/
	$('.header_nav_hamburguer').click(function(){
		$('.header_nav_inner').addClass('open');
	});
	$('.header_nav_close').click(function(){
		$('.header_nav_inner').removeClass('open');
	});
	/*Dropdown JS*/
	$(".main_questions_middle_name").on('click', function() {
    $(this).toggleClass('is-active').next(".main_questions_middle_text").stop().slideToggle(500);
  });
});