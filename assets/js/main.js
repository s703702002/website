$(function() {
  $('.carousel').slick();

  $('.navigation a').on('click', function(e) {
    e.preventDefault();
    const target = $(this).data('target');
    $("html, body").animate({
      scrollTop: $('#' + target).offset().top - 100
    });
  });
});
