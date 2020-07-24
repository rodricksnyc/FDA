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
		$("#switchImage").attr('src',"images/2.jpg")
		$("#switchText").html('can follow you into adulthood. Your')
		$('#name').html('Dr. Tina Richardson, M.D., FAAD*')
	}


	if ($('body').hasClass('ad3')) {
		$("#switchImage").attr('src',"images/3.jpg")
		$("#switchText").html('followed me into adulthood. My')
		$('#name').html('Tina Richardson, Graphic Designer*')
	}

	//switch instagram

	if ($('body').hasClass('gram2')) {
		$("#switchAvatar").attr('src',"images/face2.jpg")
		$("#switchGram").attr('src',"images/gram2.jpg")
		$("#switchParagraph").html("I found out I had endometriosis when I was 21. Endometriosis has beenone of the hardest things I’ve dealt with physically. If there were a pill I could take to help me manage my symptoms, I would try it. Well, I recently heard about this prescription medicine called Cerenys (cerozole 2.5 mg tablets). Cerenys is a pill you take once a day. It’s proven to relieve pain caused by endometriosis, including painful periods, pelvic pain in between periods, and pain with sex. If you struggle with endometriosis pain, ask your doctor if Cerenys is right for you. Don’t take Cerenys if you are pregnant or trying to become pregnant. The most serious side effects of Cerenys are bone loss, bone fractures, and high cholesterol levels. Common side effects include nausea, hot flashes, joint pain, headache, dizziness, and muscle pain.")
		$('.username').html('evakatalin26')
		$('#hashtag').html('#sponsored')
	}



})
