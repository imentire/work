// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = window.jQuery = require("jquery")
require('owl.carousel');
require('magnific-popup');

$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    navigation: true,
    pagination: true,
    items: 1
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Переключаем слайд вперед
  $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
  })
// Переключаем слад назад
  $('.owl-prev').click(function() {
    // Устанавливаем параметр скорости
    // Параметр должен быть заключен в кавдрадные скобки '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })
  $('.test-popup-link').magnificPopup({
    type: 'image'
  // other options
  });
  console.log('Welcome to Yeogurt!');
});
