$(document).on('ready page:load', function() {
 var img = $('#slide-1')

  $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/450)
    });        
  });


  ( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            // console.log(data.curTop);
        }
    });
} )( jQuery );
})
