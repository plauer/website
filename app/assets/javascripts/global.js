$(document).on('ready page:load', function() {
 var img = $('.welcome-image')

  $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/400)
    });        
  });


  ( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
} )( jQuery );
})
