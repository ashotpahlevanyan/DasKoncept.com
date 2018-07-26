
$(document).ready(function() {

	/*
	* Preload
	* */

	setTimeout(function() {
		$('.wrapper').addClass('loaded');

	}, 1500);

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


/*
* Demo.js =======================
*
* */

{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
}


/*
* Parallaxes ========================
* */
{
	var scene = document.getElementById('js-scene');
	var parallax = new Parallax(scene);

	var scene2 = document.getElementById('js-scene2');
	var parallax2 = new Parallax(scene2);

	var scene3 = document.getElementById('js-scene3');
	var parallax3 = new Parallax(scene3);

	var scene4 = document.getElementById('js-scene4');
	var parallax4 = new Parallax(scene4);
}


/*
*
* TextFX2 Settings =============================
* */


//var fx;

// jQuick(window).on('resize', function () {
//
// 	// just stop and restore
// 	// fx.cjFx('stop');
//
// 	// stop, restore, and reanimate
// 	fx.cjFx('stop').cjFx('animate');
//
// });


jQuick(document).ready(function () {
	var clicked = false;
	//var fx;
	$(".menu_we").click(function() {
		if(!clicked) {
			clicked = true;
			jQuick('#line1').cjFx('animate', {callback: runLine2});
		}
	});

}, ['Maven+Pro:700']);

// fires when the first animation is complete
function runLine2() {

	jQuick('#line2').cjFx('animate', {callback: runLine3});

}

function runLine3() {

	jQuick('#line3').cjFx('animate', {callback: runLine4});

}

function runLine4() {

	jQuick('#line4').cjFx('animate', {callback: runLine5});

}

function runLine5() {

	jQuick('#line5').cjFx('animate', {callback: runLine6});

}

function runLine6() {

	jQuick('#line6').cjFx('animate', {callback: runLine7});

}

function runLine7() {

	jQuick('#line7').cjFx('animate', {callback: runLine8});

}

function runLine8() {

	jQuick('#line8').cjFx('animate', {callback: runLine9});

}

function runLine9() {

	jQuick('#line9').cjFx('animate', {callback: runLine10});

}

function runLine10() {

	jQuick('#line10').cjFx('animate', {callback: runLine11});

}

function runLine11() {

	jQuick('#line11').cjFx('animate', {callback: runLine12});

}

function runLine12() {

	jQuick('#line12').cjFx('animate', {callback: runLine13});

}

function runLine13() {

	jQuick('#line13').cjFx('animate', {callback: runLine14});

}

function runLine14() {

	jQuick('#line14').cjFx('animate', {callback: runLine15});

}

function runLine15() {

	jQuick('#line15').cjFx('animate', {callback: runLine16});

}

function runLine16() {

	jQuick('#line16').cjFx('animate', {callback: runLine17});

}

function runLine17() {

	jQuick('#line17').cjFx('animate');

}


/*
* Sliders.js ================================
* */

jssor_1_slider_init = function(SliderId) {

	var jssor_1_SlideoTransitions = [
		[{b:0,d:600,y:-290,e:{y:27}}],
		[{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:125.00,t:-125.00}},{b:11000,d:500,c:{x:-125.00,t:125.00}}],
		[{b:0,d:600,x:535,e:{x:27}}],
		[{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
		[{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:800,c:{x:-250.0,t:250.0},e:{c:{x:7,t:7}}}],
		[{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
		[{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],
		[{b:0,d:1000,y:80,e:{y:24}},{b:1000,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],
		[{b:2000,d:600,rY:30}],
		[{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1000,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],
		[{b:0,d:1000,o:-0.4,rX:2,rY:1},{b:1000,d:1000,rY:1},{b:2000,d:1000,rX:-1},{b:3000,d:1000,rY:-1},{b:4000,d:1000,o:0.4,rX:-1,rY:-1}]
	];

	var jssor_1_options = {
		$AutoPlay: 1,
		$Idle: 2000,
		$SlideDuration : 1500,
		$SlideEasing: $Jease$.$OutQuad,
		$SlideSpacing: 20,
		//$FillMode: 5,
		$CaptionSliderOptions: {
			$Class: $JssorCaptionSlideo$,
			$Transitions: jssor_1_SlideoTransitions,
			$Breaks: [
				[{d:2000,b:1000}]
			]
		},
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$Orientation: 2,
			$SpacingX: 5,
			$SpacingY: 5
		}
	};

	var jssor_1_slider = new $JssorSlider$(SliderId, jssor_1_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 955;// 980;

	function ScaleSlider() {
		var containerElement = jssor_1_slider.$Elmt.parentNode;
		var containerWidth = containerElement.clientWidth;

		if (containerWidth) {

			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

			jssor_1_slider.$ScaleWidth(expectedWidth);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}

	ScaleSlider();

	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	/*#endregion responsive code end*/
	return jssor_1_slider;
};


var slidersIdList = [
	"jssor_awards",
	"jssor_globalance",
	"jssor_zds",
	"jssor_hugoboss",
	"jssor_nike",
	"jssor_picsart",
	"jssor_uae",
	"jssor_loft",
	"jssor_pen",
	"jssor_boomboomik",
	"jssor_bauhaus",
	"jssor_meybod",
];


