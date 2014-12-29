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
$(function() {

	'use strict';

	if ( $('body.profile-page').length > 0 ) {

		$('.flexslider').flexslider({
		    animation: 'slide',
		    animationLoop: true,
		    itemWidth: 210,
		    itemMargin: 0,
		    maxItems: 4
		  });
	}
});
$(function() {
  'use strict';

  var url = window.location.pathname,
      patt = /impressum/g;

  if ( patt.test(url) === true ) {
    $('p').hide();
    $('#leftcont').append('<div><img src="img/ahf_adresse.jpg" alt=""></div>');
  }
});
$(function() {
  'use strict';

  if ( $('.index-page').length > 0 ) {
    $('.top-5-tabs li:first-child').find('div').addClass('active-tab');

    $('.top-5-tabs').on('click', '.tab', function(event) {
      event.preventDefault();

      var tab = $(this).data('tab'),
          headline = $(this).data('name'),
          that = $(this);

      $('.catalog').find('h3').html(headline);
      $('.top-5-tabs li').find('div').removeClass('active-tab');

      $.ajax({
        url: 'bestof_block_2.php',
        type: 'POST',
        data: { tab: tab },
        success: function(result) {
          that.addClass('active-tab');
          $('.catalog-list').html(result);
        }
      });
    });
  }
});
$(function() {
  'use strict';

  $('.profile-detail-menu li').on('click', function() {
  	var detailContainer = $(this).data('profile-item');
  	

  	if (detailContainer === 'profile-detail-gallery') {
  		$('.profile-detail-gallery-slider, .link-slider').removeClass('gallery-hidden');
  	} else {
  		$('.profile-detail-gallery-slider, .link-slider').addClass('gallery-hidden');
  	}

  	$('.profile-detail-menu li').removeClass('profile-details-active');
  	$(this).addClass('profile-details-active');
  	$('.profile-detail-tab').hide();
  	$('.' + detailContainer).show();
  });

  $('.profile-detail-gallery-slider img').on('click', function() {
  	$('.profile-detail-gallery img').attr('src', $(this).attr('src'));
  });
});
$(function() {
  'use strict';

  $('.support-flyout').on('click', function(){
    $(this).toggleClass('support-flyout-small');
  });
});