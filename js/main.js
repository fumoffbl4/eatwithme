// Scroll-top button

$(document).ready(function(){
    $('body').append('<a href="#" id="scroll-top" title="Вверх"><i class="fas fa-arrow-circle-up h1 text-primary"></i></a>');
});
  
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 500) {
			$('#scroll-top').show();
		} else {
			$('#scroll-top').hide();
		}
	});
 
	$('#scroll-top').click(function(){
		$('html, body').scrollTop( 0 );
		return false;
	});
});

// Carousel

$(function() {
    $('.carousel').carousel({
        interval: 4000
    });
});