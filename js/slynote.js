$(document).ready(function(){
  $(".button-group button:first-child").addClass('button-group-leftmost');
  $(".button-group button:last-child").addClass('button-group-rightmost');
  $(".menu").click(function(){
    $('.mobile-menu').toggleClass('expand');
  });

  $('.dismiss').click(function(){
    $(this).parent().remove();
  });
});
