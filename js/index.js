$(document).ready(function () {

	var flipThis = function() {

		$(".bigCard").toggleClass('flipped')
	}

	$('.flipIt').keypress(
		flipThis

	).click(
		flipThis
	);




	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')

		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	var high = $('.whiteBox').height() + 340


	$('.wrapper').css({
		'height' : high
	})

	if ($(document).height() >= 1100 && $(document).innerWidth() >= 1500) {
		var highest = $('.whiteBox').height() + 380
		$('.wrapper').css({
			'height' : highest
		})


	}


	if ($(document).innerWidth() <= 1078) {
		var higher = $('.whiteBox').height() + 450
		$('.wrapper').css({
			'height' : higher
		})

	}


})
