$(document).ready( function() {
 var img = $('.welcome-image')
 // $(window).scroll( function() {
 //  if ($(window).scrollTop()<10) {
 //    img.stop(true, true).hide().fadeIn(5000);
 //  } else {
 //    img.stop(true, true).show().fadeOut(5000);
 //  }
 // })


 $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/475)
    });          
});

})