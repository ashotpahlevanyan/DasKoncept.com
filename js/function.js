$(document).ready(function() {

	/*
	* HOME
	*/

	$(window).load(function() {

		$("#home").addClass("animate");

		$('.btn_home').stop(true, true).delay(5930).animate({
			'margin-top': 30,
			'opacity': 1
		}, 2000, 'easeOutExpo');
		$('.tabhome').stop(true, true).delay(4370).animate({
			'left': 30,
			'opacity': 1
		}, 500, 'easeOutExpo');
		$('.tabwhat').stop(true, true).delay(4670).animate({
			'left': 30,
			'opacity': 1
		}, 500, 'easeOutExpo');
		$('.tabwe').stop(true, true).delay(4970).animate({
			'left': 30,
			'opacity': 1
		}, 500, 'easeOutExpo');
		$('.tabhow').stop(true, true).delay(5270).animate({
			'left': 30,
			'opacity': 1
		}, 500, 'easeOutExpo');
		$('.tabwhere').stop(true, true).delay(5570).animate({
			'left': 30,
			'opacity': 1
		}, 500, 'easeOutExpo');

		// $(".david").stop(true, true).css({
		// 	'opacity': 0
		// });

		$('#js-scene2 .items__layerD').stop(true, true).delay(2150).animate({
			'top': 790,
			'opacity': 1
		}, 800, 'easeOutExpo');


		$('#js-scene2 .items__layerA').stop(true, true).delay(2330).animate({
			'top': 480,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerS').stop(true, true).delay(2630).animate({
			'top': 330,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerK').stop(true, true).delay(2730).animate({
			'left': 530,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerO').stop(true, true).delay(2830).animate({
			'top': 720,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerN').stop(true, true).delay(3030).animate({
			'left': -1310,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerC').stop(true, true).delay(2430).animate({
			'left': 700,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerE').stop(true, true).delay(3430).animate({
			'top': -800,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerP').stop(true, true).delay(3630).animate({
			'left': 1100,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerT').stop(true, true).delay(3930).animate({
			'top': -500,
			'opacity': 1
		}, 800, 'easeOutExpo');
	});

	$('.home .categorie span').hover(function() {
		$('.hover', this).stop(true, true).animate({
			'bottom': -95,
			'opacity': 1
		}, 500, 'easeOutExpo');
	}, function() {
		$('.hover', this).stop(true, true).animate({
			'bottom': 0,
			'opacity': 0
		}, 500, 'easeOutExpo');
	});

	$(".items__layer.awards").click(function() {
		$(".slidenet").load('net.html');
	});

	$(".items_bauhaus").click(function() {
		$(".slidebau").load('bauhaus.html');
	});

/*
* RIPOSIZIONA OGGETTI ANIMATI IN HOW
* */

	$(".menu_home").click(function() {

	});
	$(".menu_servizi").click(function() {

	});

	$(".menu_we").click(function() {

		$('#js-scene3 .items__layerD').stop(true, true).delay(2150).animate({
			'margin-top': 400,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene3 .items__layerK').stop(true, true).delay(2550).animate({
			'margin-left': -1100,
			'opacity': 1
		}, 800, 'easeOutExpo');
	});

	$(".menu_contatti").click(function() {

		$("#contatti").addClass('animate');

		$('.munich-overlay').stop(true, true).delay(2000).animate({
			'border-width': 0,
		}, 5000, 'easeOutExpo');
		$('.milan-overlay').stop(true, true).delay(2000).animate({
			'border-width': 0,
		}, 5000, 'easeOutExpo');

	});

/*
* ANIMAZIONI OGGETTI AL CLICK SU HOW
* */
	var animationCount = 0;
	$(".menu_how").click(function() {
		if(animationCount == 1) {
			return;
		}
		animationCount = 1;
		$(".dcvWrapper").addClass('animate one');
		setTimeout(function() {
			$(".dcvWrapper").addClass('two');
			setTimeout(function() {
				$(".dcvWrapper").addClass('three');
				$(".davidWrapper").addClass("show");
				davidAnimate();
			}, 3000);
		}, 12000);
		var shift = 1000;
		function davidAnimate() {
			animationCount = 1;
			$('.davidWrapper .frame').stop(true, true).delay(1000).fadeTo(2500, 1);
			// $('.davidWrapper .frame').stop(true, true).delay(1000).animate({
			// 	'left': `-=${shift}`,
			// 	'opacity': 1
			// }, 1500, 'easeOutExpo');
			$('.davidWrapper .davidImage').stop(true, true).delay(500).animate({
				'left': `-=${shift}`,
				'opacity': 1
			}, 500, 'easeOutExpo');
			// $('.davidWrapper .youCan').stop(true, true).delay(1200).animate({
			// 	'left': "-=400",
			// 	'opacity': 1
			// }, 800, 'easeOutExpo');
			$('.davidWrapper .H').stop(true, true).delay(1600).animate({
				'left': `+=${shift}`,
				'opacity': 1
			}, 500, 'easeOutExpo');
			$('.davidWrapper .E').stop(true, true).delay(1800).animate({
				'right': `-=${shift}`,
				'opacity': 1
			}, 500, 'easeOutExpo');
			$('.davidWrapper .R').stop(true, true).delay(2000).animate({
				'left': `+=${shift}`,
				'opacity': 1
			}, 500, 'easeOutExpo');
			$('.davidWrapper .O').stop(true, true).delay(2200).animate({
				'right': `+=${shift}`,
				'opacity': 1
			}, 500, 'easeOutExpo');
			// $('.davidWrapper .justForever').stop(true, true).delay(2600).animate({
			// 	'right': "+=400",
			// 	'opacity': 1
			// }, 800, 'easeOutExpo');
			// $('.davidWrapper .ever').stop(true, true).delay(3000).animate({
			// 	'right': "+=400",
			// 	'opacity': 1
			// }, 800, 'easeOutExpo');

		}

	});

/*
* NEWS
* */

	/*$(".bxslider_news").bxSlider();*/

	$(".content_news").mCustomScrollbar({
		scrollButtons: {
			enable: false
		}
	});

	$('#bxslider_news').slidesjs({
		height: 600,
		pagination: {
			active: false
		}
	});

	$(".menu_news").click(function() {
		$('.net').stop(true, true).delay(450).animate({
			'opacity': 1
		}, 1000, 'easeOutExpo');
	});
});
