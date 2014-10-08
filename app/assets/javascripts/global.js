$(document).on('ready page:load', function() {
 var img = $('.welcome-image')

  $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/500)
    });          
  });
})