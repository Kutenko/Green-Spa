$().ready(function () {
  $('.pre_toform').on('touchend click', function (e) {
    e.preventDefault();
    var a = $('.js_submit'), b = a.closest('form');
    if ($('form#toform').length){
        a = $('#toform .js_submit');
        b = a.closest('form#toform');
    }
    $("html,body").animate({scrollTop: b.offset().top}, 1000);
  });
});

$(function() {
  $(window).on('load', function() {
    stepsSlider(),
      reviewSlider();
  })
})

function reviewSlider() {
  $('.screen-4-slider').bxSlider({
    adaptiveHeight: false,
    swipeThreshold: 40,
    controls: true,
    nextText: '',
    prevText: '',
    auto: true,
    pause: 7000,
    autoHover: true,
    slideSelector: '.screen-4-slider-item',
    slideMargin: 5,
  })
}

function stepsSlider() {
  $('.slider-reviews').bxSlider({
    adaptiveHeight: true,
    swipeThreshold: 40,
    controls: true,
    nextText: '>',
    prevText: '<',
    auto: true,
    pause: 7000,
    pager: false,
    autoHover: true,
    slideSelector: '.slider-item',
    slideMargin: 5,
    onSlideBefore: function() {
      $('.slider-item').removeClass('action');
    },
    onSlideAfter: function($elem) {
      $elem.addClass('action');
    }
  })
}
