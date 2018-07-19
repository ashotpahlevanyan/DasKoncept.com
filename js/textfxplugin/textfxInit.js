var cjTextFxSettings = {

	/* The animation number, Options are 1-15 */
	animation: 13,

	/* Options are "in" and "out" */
	animationType: "in",

	/* start with the last letter, true/false */
	backwards: false,

	/* The easing type, case sensitive */
	easing: "easeOutQuint",

	/* The animation speed */
	speed: 1000,

	/* the delay for each letter that is animated */
	sequenceDelay: 100,

	/* The start delay for the animation */
	startDelay: 0,

	/* If the letters are broken apart, this is the offset x value */
	offsetX: 100,

	/* If the letters are broken apart, this is the offset y value */
	offsetY: 50,

	/* The font color */
	color: "#000",

	/* If the text should be hyperlinked, true/false */
	linked: false,

	/* If the text is hyperlinked, enter the url here, otherwise you can enter null */
	hyperlink: null,

	/* If the text is hyperlinked, enter the link target here, options are "_blank" or "_parent", otherwise you can enter null */
	linkTarget: null,

	/* A callback function once the animation has finished, enter null for no callback */
	onComplete: null,

	/* An array of parameters for the onComplete callback, enter null for no callback params */
	onCompleteParams: null,

	/* A function to fire when the animation starts, enter null for no onStart function */
	onStart: null,

	/* An array of params to be passed into the onStart function, enter null for no onStart params */
	onStartParams: null,

	/* Setting this to "false" is useful when changing the text value of the div before running a consecutive animation on the same div */
	/* See the "demo.html" file in the preview folder for a good example of using this parameter  */
	/* Options are true/false  */
	restoreHTML: false

};

jQuery(document).ready(function() {

	// The INIT function, must be called before running any animations, ONLY CALL ONCE!
	jQuery.cjTextFx(cjTextFxSettings);

	// Animates the selected div
	jQuery.cjTextFx.animate("#effect");

});

