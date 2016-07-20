
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


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
		$('nav').removeClass('navbar-no-bg');
		$(".navbar-inverse ul.navbar-nav li a").css("color", "black");
		$("#logo").attr("src","assets/img/Logo_Long/Regular/longreg.png");
		$('#buy').css("background-color", "#4dbea7");
		$('#buy').css("border-bottom", "2px #409d8a solid");
  }
  else {
		$('nav').addClass('navbar-no-bg');
		$("#logo").attr("src","assets/img/Logo_Long/White/longW.png");
		$(".navbar-inverse ul.navbar-nav li a").css("color", "white");
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
