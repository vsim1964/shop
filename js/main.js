$(function(){


   $('.promo-slider-list').slick({
      dots: true,
      prevArrow: '<button class="promo-slider-list-btn promo-slider-list-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="promo-slider-list-btn promo-slider-list-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
   });


   $('.search-tabs-item').on('click', function(e){
      e.preventDefault();

      $('.search-tabs-item').removeClass('search-tabs-item-active');
      $('.search-content-item').removeClass('search-content-item-active');

      $(this).addClass('search-tabs-item-active');
      $($(this).attr('href')).addClass('search-content-item-active')
});

});
