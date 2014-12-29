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