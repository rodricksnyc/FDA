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


$('.flipIt').on('mouseenter', function() {
	$('.flipIt img').attr('src',"images/flip-hover.svg");
})


$('.flipIt').on('mouseleave', function() {
	$('.flipIt img').attr('src',"images/flip.svg");
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


	if ($(document).height() >= 1100 && $(document).innerWidth() >= 1200) {
		var more = $('.whiteBox').height() + 380
		$('.wrapper').css({
			'height' : more
		})

	}


	if ($(document).innerWidth() <= 1078) {
		var higher = $('.whiteBox').height() + 450
		$('.wrapper').css({
			'height' : higher
		})

	}


	//switch images and text

	if ($('body').hasClass('ad2')) {
		$("#switchImage").attr('src',"images/2.jpg");
		$("#switchText").html('can follow you into adulthood. Your')
		$('#name').html('Dr. Tina Richardson, M.D., FAAD*')
	}


	if ($('body').hasClass('ad3')) {
		$("#switchImage").attr('src',"images/3.jpg");
		$("#switchText").html('followed me into adulthood. My')
		$('#name').html('Tina Richardson, Graphic Designer*')
	}



})
