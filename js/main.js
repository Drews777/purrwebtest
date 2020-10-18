// mobile menu
$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() > 767) {
      $('.header-mobile').removeClass('header-mobile--visible');
    }
  });

  $('.header__button').on('click', function e(e) {
    e.preventDefault();
    $('.header-mobile').addClass('header-mobile--visible');
  });

  $('.header__close').on('click', function e(e) {
    e.preventDefault();
    $('.header-mobile').removeClass('header-mobile--visible');
  });
});

