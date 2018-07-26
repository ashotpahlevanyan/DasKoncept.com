jQuick(document).ready(function() {

	jQuick('#line1').cjFx('animate', {callback: runLine2});


	jQuick(window).on('resize', function() {

		// just stop and restore
		// fx.cjFx('stop');

		// stop, restore, and reanimate
		fx.cjFx('stop').cjFx('animate');

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