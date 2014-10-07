$(document).ready( function() {
 
  var showNavMenu = function(event) {
    $('header .nav-menu').slideDown(100);
    $('header .dropdown .glyphicon').css('color', 'lightblue')
  }

  var hideNavMenu = function(event) {
    setTimeout( function() {
      $('header .nav-menu').slideUp(100);
      $('header .dropdown .glyphicon').css('color', 'black')
    }, 1000);
  }

  $('header').on('mouseover', showNavMenu)
  $('header').on('mouseleave', hideNavMenu)


  // $('.glyphicon:first').on('mouseover', function() {
  //   console.log('hi');
  // });
})

