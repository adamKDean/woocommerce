(function($) {
$(document).ready(function() {

	// Hide review form - it will be in a lightbox
	$('#review_form_wrapper').hide();

	// Lightbox
	$("a.zoom").prettyPhoto({
		social_tools: false,
		theme: 'pp_woocommerce',
		horizontal_padding: 20,
		opacity: 0.2,
		deeplinking: false,
		changepicturecallback: function() {
			if (typeof wc_pp_zoom_open === "function") {
				// Launch a customized callback function first
				wc_pp_zoom_open();
			} else if (typeof wc_pp_open === "function") {
				// Default to a generic "PrettyPhoto Open" callback next
				wc_pp_open();
			}
		},
		callback: function() {
			if (typeof wc_pp_zoom_close === "function") {
				// Launch a customized close function
				wc_pp_zoom_close();
			} else if (typeof wc_pp_close === function) {
				// Default to a generic "PrettyPhoto Close" callback next
				wc_pp_close();
			}
		}
	});
	$("a.show_review_form").prettyPhoto({
		social_tools: false,
		theme: 'pp_woocommerce',
		horizontal_padding: 20,
		opacity: 0.2,
		deeplinking: false,
		changepicturecallback: function() {
			if (typeof wc_pp_review_open === "function") {
				wc_pp_review_open();
			} else if (typeof wc_pp_open === "function") {
				wc_pp_open();
			}
		},
		callback: function() {
			if (typeof wc_pp_review_close === "function") {
				wc_pp_review_close();
			} else if (typeof wc_pp_close === "function") {
				wc_pp_close();
			}
		}
	});
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
		theme: 'pp_woocommerce',
		horizontal_padding: 20,
		opacity: 0.2,
		deeplinking: false,
		changepicturecallback: function() {
			if (typeof wc_pp_photo_open === "function") {
				wc_pp_photo_open();
			} else if (typeof wc_pp_open === "function") {
				wc_pp_open();
			}
		},
		callback: function() {
			if (typeof wc_pp_photo_close === "function") {
				wc_pp_photo_close();
			} else if (typeof wc_pp_close === "function") {
				wc_pp_close();
			}
		}
	});

	// Open review form lightbox if accessed via anchor
	if( window.location.hash == '#review_form' ) {
		$('a.show_review_form').trigger('click');
	}

});
})(jQuery);
