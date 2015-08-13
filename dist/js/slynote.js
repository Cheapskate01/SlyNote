$(document).ready(function(){
  $(".menu").click(function(){
    $('.mobile-menu').toggleClass('expand');
  });

  $('.dismiss').click(function(){
    $(this).parent().remove();
  });
});
