$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

$('.top-content .text').waypoint(function(direction) {
  if (direction === 'down') {
$("#logo").attr("src","assets/img/Logo_Long/Regular/longreg.png");
		$('#buy').css("background-color", "#4dbea7");
		$('#buy').css("border-bottom", "2px #409d8a solid");
  }
  else {
		$('#buy').css("background-color", "RGB(249, 157, 30)");
		$('#buy').css("border-bottom", "2px #b67316 solid");
  }
});


    /*
        Background slideshow
    */


    /*
        Wow
    */
    new WOW().init();

    /*
	    Subscription form
	*/
	$('.success-message, .error-message').hide();

	$('.subscribe form').submit(function(e) {
		e.preventDefault();
	    var postdata = $('.subscribe form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/subscribe.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.valid == 0) {
	            	$('.success-message, .error-message').hide();
	                $('.error-message').html(json.message).fadeIn();
	            }
	            else {
	                $('.success-message, .error-message, .subscribe form').hide();
	                $('.success-message').html(json.message).fadeIn();
	            }
	        }
	    });
	});


});

	$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});

jQuery(window).load(function() {

	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoHeight: true
		});
	};



