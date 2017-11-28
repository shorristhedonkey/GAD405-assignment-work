//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
let r = 255;
let g = 255;
let b = 255;

let speed = 3;
let diameter = 50;
let x1; 
let y1;
let x2;
let y2;
let a = 0;
function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  x1 = width/2;
  y1 = height/2;
  background(200, 0 , 0);
  }
 

function draw() {
	x1 += random(-speed, speed);
	y1 += random(-speed, speed);
	x1 = constrain(x1, 0, width);
	y1 = constrain(y1, 0, height);
	x2 = x1 - 500;
	y2 = y1 - 500;
	if(x2<0){
		x2 = x2 * -1;
	}
	if(y2<height){
		y2 = y2 * -1
	}
	console.log(x1 + "x1" + x2);
	if (mouseIsPressed) {
		/*r = random(255);
		g = random(255);
		b = random(255);
		*/
	a = a + 1;
	if(a>255){
		a = a - 255
	}
	r = random(a);
	g = random(a);
	b = random(a);
	}
	noStroke();
	fill(r, g, b, 120);
	ellipse(abs(x1),abs (y1), diameter, diameter);
	ellipse(abs(x2), abs(y1), diameter, diameter);
	ellipse(abs(x1), abs(y2), diameter, diameter);
	ellipse(abs(x2), abs(y2), diameter, diameter);
	}
