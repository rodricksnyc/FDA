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

	var thing = $('.whiteBox').height() + 300

	console.log(thing)

	$('.wrapper').css({
		'height' : thing
	})


})
