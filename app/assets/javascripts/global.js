// $(function() {
//   initPage();
// });
// $(window).bind('page:change', function() {
//   initPage();
// });
// function initPage() {
//   var img = $('#slide-1');

//   $(window).scroll(function() {
//     $(img).css({
//     'opacity' : 1-(($(this).scrollTop())/250)
//     });
//   });

//   $(window).scroll(function() {
//     $(img).css({
//     'opacity' : 1-(($(this).scrollTop())/450)
//     });
//   });


//     ( function( $ ) {
//       // Init Skrollr
//       var s = skrollr.init({
//           render: function(data) {
//               //Debugging - Log the current scroll position.
//               // console.log(data.curTop);
//           }
//       });
//   } )( jQuery );
// }

$(document).ready(function() {
 var img = $('#slide-1')

  $(window).scroll(function() {
    $(img).css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });
  });

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
  });
