$(function() {
  $(".openbtn").click(function () {
    
    if ($('.openbtn').hasClass('open')) {
      $('.openbtn').removeClass('open');
    } else {
      $('.openbtn').addClass('open');
    }

    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });




});