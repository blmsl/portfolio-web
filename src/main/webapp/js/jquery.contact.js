(function($) {
	"use strict";
	jQuery(document).ready(function() {
		$('#cform').submit(function(e) {
			e.preventDefault();
			$("#result").slideUp(750, function() {
				$('#submit').before('<img src="images/ajax-loader.gif" class="contact-loader" />').attr('disabled','disabled');
				$.ajax({
					type: 'POST',
					url: '/send',
					data: {
						name : $('#name').val(),
						email : $('#email').val(),
						message : $('#message').val(),
						heuning: $('#heuning').val()
					},
					dataType: 'html'
				}).done(function(result) {
					$('#result').html(result);
					$('#result').slideDown('slow');
					$('#cform img.contact-loader').fadeOut('slow', function() {
						$(this).remove();
					});
					$('#submit').removeAttr('disabled');
					if (result.indexOf('success') != -1) {
						$('#cform').slideUp('slow');
					}
				});
			});
			return false;
		});
	});
}(jQuery));
