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