// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var s = function( p ) {

	var boxX = 200;
	var boxY = 200;
	var boxZ = -100;
	var zLimit = -200;
	var boxRotation = 0;

	p.setup = function() {
  	p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  	p.ortho(-p.width, p.width, p.height, -p.height, 0.1, 100);
	};

	p.draw = function() {

  	p.translate(boxX,boxY,boxZ);
  	p.rotate(boxRotation, [1,1,0]);
  	p.box(60);

  	boxRotation = boxRotation + .1;
  	boxX = boxX - 1;
  	boxY = boxY - 2;
  	boxZ = boxZ - 1;
  	console.log(boxZ);

	  // Position Resets
	  if (boxY < -p.height) {
	    boxY = p.height;
		};
		if (boxX < -p.width) {
	    boxX = p.width;
		};
		if (boxZ < zLimit) {
			boxZ = -100;
		};

	};
};

var myp5 = new p5(s,'sketch0');
