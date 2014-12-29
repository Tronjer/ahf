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