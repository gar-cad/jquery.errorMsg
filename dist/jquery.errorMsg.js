 (function ($) {
    // jquery plugin to show bootstrap alert error message
    $.fn.errorMsg = function (options) {
		var settings = $.extend({
			color: 'danger',
			message: 'Error',
			closeBtn: true,
			location: 'append'
		}, options),
            close = settings.closeBtn ? "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" : "",
            msg = "<div class='alert alert-" + settings.color + " role='alert'>" + settings.message + close + "</div>";
		
		return this.each(function () {
			if (settings.location === 'prepend') {
				$(this).prepend(msg);
			} else {
				$(this).append(msg);
			}
		});
	};
}(jQuery));