'use strict';

// Code prevent form action
$(function () {
  $('form').submit(function (evt) {
    evt.preventDefault();
  });

  $('.carousel').carousel({ interval: 2000 });

  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('i').hasClass('fa-pause')) {
      $('.carousel').carousel('pause');
      // $('#carouselButton').children("i").removeClass("fa-pause");
      // $('#carouselButton').children("i").addClass("fa-play");

      $('#carouselButton').children('i').removeClass('fa-pause').addClass('fa-play');
    } else {
      $('.carousel').carousel('cycle');
      // $('#carouselButton').children("i").removeClass("fa-play");
      // $('#carouselButton').children("i").addClass("fa-pause");

      $('#carouselButton').children('i').removeClass('fa-play').addClass('fa-pause');
    }
  });
});
