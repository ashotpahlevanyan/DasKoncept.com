$(document).ready(function() {
	// var textElement = document.getElementById('designSVG');
	// textElement.textLength.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 345);

/*
* HOME
* */
	$(window).load(function() {
		var mWidth = $('.img-munich').css('width');
		var wTxt = $('.box_txt').width() - $('.title_news').width() - 15;
		$('.txt_news').animate({
			'width': wTxt,
			'left': $('.title_news').width() + 15
		}, 0, function() {
			$(this).fadeIn();
		});
		/*$('#news_menu').css({bottom : function(){
		 var imgH = parseInt( $('#news_menu').find('img').height() ) + 5;
		 return -imgH;
		 }, height: 'auto'});*/
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

		$(".david").stop(true, true).css({
			'opacity': 0
		});

		$('#js-scene2 .items__layerD').stop(true, true).delay(2150).animate({
			'margin-top': 730,
			'opacity': 1
		}, 800, 'easeOutExpo');


		$('#js-scene2 .items__layerA').stop(true, true).delay(2330).animate({
			'margin-top': 480,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerS').stop(true, true).delay(2630).animate({
			'margin-top': 300,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerK').stop(true, true).delay(2730).animate({
			'margin-left': 530,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerO').stop(true, true).delay(2830).animate({
			'margin-top': 720,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .items__layerN').stop(true, true).delay(3030).animate({
			'margin-left': -460,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerC').stop(true, true).delay(2430).animate({
			'margin-left': 700,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerE').stop(true, true).delay(3430).animate({
			'margin-top': -800,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerP').stop(true, true).delay(3630).animate({
			'margin-left': 1100,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .items__layerT').stop(true, true).delay(3930).animate({
			'margin-top': -500,
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .underline.create').stop(true, true).delay(2630).animate({
			'margin-left': 0,
			'opacity': 1
		}, 800, 'easeOutExpo');

		$('#js-scene2 .underline.dream').stop(true, true).delay(2630).animate({
			'margin-left': '-5px',
			'opacity': 1
		}, 800, 'easeOutExpo');
		$('#js-scene2 .underline.and').stop(true, true).delay(2630).animate({
			'margin-left': '-5px',
			'opacity': 1
		}, 800, 'easeOutExpo');
	});


	$(".d-letter").mouseover(function() {
		$('.d-frase').animate({
			'margin-left': 80,
			'opacity': 1
		}, 400, 'easeOutExpo');
	});
	$(".d-letter").mouseout(function() {
		$('.d-frase').animate({
			'margin-left': 0,
			'opacity': 0
		}, 400, 'easeOutExpo');
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

		$(".culture").stop(true, true).css({
			'margin-top': -275,
			'opacity': 0
		});
		$(".value").stop(true, true).css({
			'margin-left': 1205,
			'opacity': 0
		});
		$(".future").stop(true, true).css({
			'margin-top': 823,
			'opacity': 0
		});
		$(".david").stop(true, true).css({
			'opacity': 0
		});
		$(".cont-frasi").stop(true, true).css({
			'margin-left': 15
		});

	});
	$(".menu_servizi").click(function() {

		$(".culture").stop(true, true).css({
			'margin-top': -275,
			'opacity': 0
		});
		$(".value").stop(true, true).css({
			'margin-left': 1205,
			'opacity': 0
		});
		$(".future").stop(true, true).css({
			'margin-top': 823,
			'opacity': 0
		});
		$(".david").stop(true, true).css({
			'opacity': 0
		});
		$(".cont-frasi").stop(true, true).css({
			'margin-left': 15
		});

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

		$(".culture").stop(true, true).css({
			'margin-top': -275,
			'opacity': 0
		});
		$(".value").stop(true, true).css({
			'margin-left': 1205,
			'opacity': 0
		});
		$(".future").stop(true, true).css({
			'margin-top': 823,
			'opacity': 0
		});
		$(".david").stop(true, true).css({
			'opacity': 0
		});
		$(".cont-frasi").stop(true, true).css({
			'margin-left': 15
		});
		// $('#img-munich .underline').stop(true, true).delay(2000).animate({
		// 	'margin-left': 700,
		// }, 800, 'easeOutExpo');

	});

/*
* ANIMAZIONI OGGETTI AL CLICK SU HOW
* */

	$(".menu_private").click(function() {

		$(".dcv-wrapper").addClass('animate');

		// setTimeout(function () {
		// 	console.log('Inside');
		// 	let splitNode = $(".split");
		// 	let text = splitNode.text();
		// 	let split = text.split('');
		//
		// 	splitNode.empty();
		// 	for(let i = 0; i < split.length; i++) {
		// 		splitNode.append(`<span>${split[i]}</span>`);
		// 	}
		// 	let letters = splitNode.find('span');
		// 	setInterval(function() {
		// 		let i = Math.random() * letters.length | 0;
		// 		let settings = {
		// 			x: letters.eq(i).position().left + random(-500, 500),
		// 			y: letters.eq(i).position().top + random(-500, 500),
		// 			z: random(-500, 500),
		// 			duration: i * .02,
		// 			queue: false,
		// 			left: letters.eq(i).position().left,
		// 			top: letters.eq(i).position().top
		// 		};
		//
		// 		letters.eq(i).animate({
		// 			'opacity': '320'
		// 		}, {
		// 			step: function (now, fx) {
		// 				$(this).css({"transform": `translate3d(${settings.x}px, ${settings.y}px, ${settings.z}px) scale(${random(0,1).toFixed(2)})`});
		// 			},
		// 			duration : settings.duration,
		// 			easing : 'linear',
		// 			queue: settings.queue
		// 		},
		// 		{
		// 			step: function (now, fx) {
		// 				$(this).css({"transform": `translate3d(${settings.left}px, ${settings.top}px, ${0}px) scale(${1})`});
		// 			},
		// 			duration : settings.duration,
		// 			easing : 'linear',
		// 			queue: settings.queue
		// 		},'linear');
		// 	}, 50);
		//
		// 	function random(min, max){
		// 		return (Math.random() * (max - min)) + min;
		// 	}
		//
		// 	// $('.animate').animate({
		// 	// 	'opacity': '320'
		// 	// }, {
		// 	// 	step: function (now, fx) {
		// 	// 		$(this).css({"transform": "translate3d(0px, " + now + "px, 0px)"});
		// 	// 	},
		// 	// 	duration: i * .02,
		// 	// 	easing: 'linear',
		// 	// 	queue: false,
		// 	// 	complete: function () {
		// 	// 		alert('Animation is done');
		// 	// 	}
		// 	// }, 'linear');
		//
		// 	// console.log(TweenMax);
		// 	// $(split).each(function(i){
		// 	// 	window.TweenMax.from($(this), 2.5, {
		// 	// 		opacity: 0,
		// 	// 		x: random(-500, 500),
		// 	// 		y: random(-500, 500),
		// 	// 		z: random(-500, 500),
		// 	// 		scale: .1,
		// 	// 		delay: i * .02,
		// 	// 		yoyo: true,
		// 	// 		repeat: -1,
		// 	// 		repeatDelay: 10
		// 	// 	});
		// 	// });
		// }, 1000);



		$(".culture").stop(true, true).delay(430).animate({
			'margin-top': -45,
			'opacity': 1
		}, 1800, 'easeOutExpo');
		$(".value").stop(true, true).delay(1330).animate({
			'margin-left': 205,
			'opacity': 1
		}, 1800, 'easeOutExpo');
		$(".future").stop(true, true).delay(2030).animate({
			'margin-top': 315,
			'opacity': 1
		}, 1800, 'easeOutExpo');

		$(".david").stop(true, true).delay(1130).css({
			'opacity': 1
		});

		$(".cont-frasi").stop(true, true).delay(5630).animate({
			'margin-left': -1585,
			'opacity': 1
		}, 1200, 'easeOutExpo');

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
