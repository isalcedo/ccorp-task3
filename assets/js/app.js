/*
*
* PSD to HTML5 + CSS3 + jQuery
* By Ignacio Salcedo - ignacio@isalcedo.com / http://isalcedo.com - https://orucode.com
* Oct 2016.
* for CompuCorp - Task 3.
*
*/
$(document).foundation()

$(document).ready( function(){

	$('.cont-members-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});

	$('.cont-blog-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});

});
