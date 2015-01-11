$(document).on('ready page:load', function() {

  var showNavMenu = function(event) {
    $('header .nav-menu').slideDown(100);
    $('header .dropdown .glyphicon').css('color', 'lightblue')
  }

  var hideNavMenu = function(event) {
    setTimeout( function() {
      $('header .nav-menu').slideUp(100);
      $('header .dropdown .glyphicon').css('color', 'black ')
    }, 2000);
  }

  $('header').on('mouseover', showNavMenu)
  $('header').on('mouseleave', hideNavMenu)

})

