$(function() {
  'use strict';

  if ( $('.contact-page').length > 0 ) {
    $('.captcha-reload').on('click', function(event) {
      event.preventDefault();

      var newCaptcha = './securimage_show?sid=' + Math.random();

      $('#siimage').prop('src', newCaptcha);
    });
  }
});