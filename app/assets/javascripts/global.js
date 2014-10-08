$(document).ready( function() {
 var img = $('.welcome-image')

  $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/600)
    });          
  });
})