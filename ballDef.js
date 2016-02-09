var classes
(c => {
	"use strict"

	class Ball {
		constructor (sketch) {
			this.p = sketch
			this.boxX = 200
			this.boxY = 200
			this.boxZ = -100
			this.zLimit = -200
			this.boxRotation = 0
			this.drawing = function(size) {
				this.p.box(size)
			}
		}
	}

	c.Ball = Ball
})(classes || (classes = {}))

