$(function () {


	$('.promo-slider-list').slick({
		dots: true,
		prevArrow: '<button class="promo-slider-list-btn promo-slider-list-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="promo-slider-list-btn promo-slider-list-btnnext"><img src="images/arrow-right.svg" alt=""></button>'
	});


	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab-active');
		$($(this).parent().siblings().find('div')).removeClass('tab-content-active');

		$(this).addClass('tab-active');
		$($(this).attr('href')).addClass('tab-content-active')
	});

	$('.love-add').on('click', function () {
		$('.love-add').toggleClass('love-add-active')
	});

	$('.popular-content-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
 prevArrow: '<button class="popular-slider-list-btn popular-slider-list-btnprev"><img src="images/black-left.svg" alt=""></button>',
nextArrow: '<button class="popular-slider-list-btn popular-slider-list-btnnext"><img src="images/black-right.svg" alt=""></button>'
	});


});
/* */