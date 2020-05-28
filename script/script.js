$('a').on('click', function() {
	var x = $(this).attr('href');
	var y = $(x).offset().top;

	$('html, body').animate({scrollTop: y}, 700);
	return false;
});

$(document).ready(function() {
	$('.header-slider__bg').slick({
		arrows:false,
		speed:1000,
		autoplay:true,
		autoplaySpeed:2500,
		easeing:'ease',
		infinite:true,
	}),
	$('.popup-link').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
	});
});

$('.menu-burger').on('click', function() {
	$('.menu-burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});
