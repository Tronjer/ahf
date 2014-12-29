$(function() {
  'use strict';

  var url = window.location.pathname,
      patt = /impressum/g;

  if ( patt.test(url) === true ) {
    $('p').hide();
    $('#leftcont').append('<div><img src="img/ahf_adresse.jpg" alt=""></div>');
  }
});