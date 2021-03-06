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
		//$FillMode: 2,
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


//
// jssor_2_slider_init = function(SliderId) {
//
// 	var jssor_1_SlideoTransitions = [
// 		[{b:0,d:600,y:-290,e:{y:27}}],
// 		[{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:125.00,t:-125.00}},{b:11000,d:500,c:{x:-125.00,t:125.00}}],
// 		[{b:0,d:600,x:535,e:{x:27}}],
// 		[{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
// 		[{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:800,c:{x:-250.0,t:250.0},e:{c:{x:7,t:7}}}],
// 		[{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
// 		[{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],
// 		[{b:0,d:1000,y:80,e:{y:24}},{b:1000,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],
// 		[{b:2000,d:600,rY:30}],
// 		[{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1000,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],
// 		[{b:0,d:1000,o:-0.4,rX:2,rY:1},{b:1000,d:1000,rY:1},{b:2000,d:1000,rX:-1},{b:3000,d:1000,rY:-1},{b:4000,d:1000,o:0.4,rX:-1,rY:-1}]
// 	];
//
// 	var jssor_1_options = {
// 		$AutoPlay: 0,
// 		$Idle: 2000,
// 		$SlideDuration : 1500,
// 		$SlideEasing: $Jease$.$OutQuad,
// 		$SlideSpacing: 20,
// 		//$FillMode: 5,
// 		$CaptionSliderOptions: {
// 			$Class: $JssorCaptionSlideo$,
// 			$Transitions: jssor_1_SlideoTransitions,
// 			$Breaks: [
// 				[{d:2000,b:1000}]
// 			]
// 		},
// 		$ArrowNavigatorOptions: {
// 			$Class: $JssorArrowNavigator$
// 		},
// 		$BulletNavigatorOptions: {
// 			$Class: $JssorBulletNavigator$,
// 			$Orientation: 2,
// 			$SpacingX: 5,
// 			$SpacingY: 5
// 		}
// 	};
//
// 	var jssor_1_slider = new $JssorSlider$(SliderId, jssor_1_options);
//
// 	/*#region responsive code begin*/
//
// 	var MAX_WIDTH = 955;// 980;
//
// 	function ScaleSlider() {
// 		var containerElement = jssor_1_slider.$Elmt.parentNode;
// 		var containerWidth = containerElement.clientWidth;
//
// 		if (containerWidth) {
//
// 			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
//
// 			jssor_1_slider.$ScaleWidth(expectedWidth);
// 		}
// 		else {
// 			window.setTimeout(ScaleSlider, 30);
// 		}
// 	}
//
// 	ScaleSlider();
//
// 	$Jssor$.$AddEvent(window, "load", ScaleSlider);
// 	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
// 	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
// 	/*#endregion responsive code end*/
// 	return jssor_1_slider;
// };
//

// var slidersIdListAutoplay = [
// 	"jssor_awards",
// 	"jssor_globalance",
// 	"jssor_zds",
// 	"jssor_hugoboss",
// 	"jssor_nike",
// ];
// var slidersIdList = [
// 	"jssor_picsart",
// 	"jssor_uae",
// 	"jssor_loft",
// 	"jssor_pen",
// 	"jssor_boomboomik",
// 	"jssor_bauhaus",
// 	"jssor_meybod",
// ];

// for(var i = 0; i < slidersIdList.length; i++) {
// 	jssor_1_slider_init(slidersIdList[i]);
// }

// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");
// jssor_1_slider_init("jssor_1");