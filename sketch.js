// Adapted from Learning Processing by Daniel Shiffman
// http://www.learningprocessing.com
// Example 1-1: stroke and fill
// With thanks to GoToLoop

new p5(p => {
	// Imports
	Ball = classes.Ball

	ballDef = new Ball(p)

	p.setup = () => {
  	p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
  	p.ortho(-p.width, p.width, p.height, -p.height, 0.1, 100)
	}

	p.draw = () => {
  	p.translate(ballDef.boxX,ballDef.boxY,ballDef.boxZ)
  	p.rotate(ballDef.boxRotation, [1,1,0])
  	ballDef.drawing(60)

  	ballDef.boxRotation = ballDef.boxRotation + .1
  	ballDef.boxX = ballDef.boxX - 1
  	ballDef.boxY = ballDef.boxY - 2
  	ballDef.boxZ = ballDef.boxZ - 1

	  // Position Resets
	  if (ballDef.boxY < -p.height) {
	    ballDef.boxY = p.height
		}
		if (ballDef.boxX < -p.width) {
	    ballDef.boxX = p.width
		}
		if (ballDef.boxZ < ballDef.zLimit) {
			ballDef.boxZ = -100
		}
	}
})