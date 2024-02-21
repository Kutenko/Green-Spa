$(function() {
  $(window).on('load', function() {
    stepsSlider(),
    reviewSlider();
  })
})
function reviewSlider() {
  $('.slider-steps').bxSlider({
    adaptiveHeight: true,
    swipeThreshold: 40,
    controls: true,
    nextText: '',
    prevText: '',
    auto: true,
    pause: 7000,
    autoHover: true,
    slideSelector: '.slider-item',
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
    onSlideBefore: function () {
    $('.slider-item').removeClass('action');
  },
  onSlideAfter: function ($elem) {
    $elem.addClass('action');
  }
  })
}
