"use strict";

// Scroll Yakor
function scrollDownUp(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

; // Burger Menu

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
  });
});