//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405

let x;
let y;
let speedX;
let speedY;
let r;
let g;
let b;
function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  background(200, 0 , 0);
 x = (width/2);
 y = (height/2);
 speedX = random(-1., 5.);
 speedY = random(-1., 5.);
 textSize(16);
  }
 

function draw() {
background(200, 0 , 0);
	x += speedX;
	y += speedY;
if (x + 25>width) {
	speedX = speedX * -1;
    r = random(255);
    g = random(255);
    b = random(255);
	}
if (y + 25>height) {
	speedY = speedY * -1;
    r = random(255);
    g = random(255);
    b = random(255);
}
if (x - 25<00) {
	speedX = speedX * -1;
    r = random(255);
    g = random(255);
    b = random(255);
	}
if (y - 25<00) {
	speedY = speedY * -1;
    r = random(255);
    g = random(255);
    b = random(255);
	}
	push();
		fill(r, g, b);
		ellipse(x, y, 50, 50);
	pop();
text(round(x), x + 27, y - 3);
text(round(y), x + 27, y + 14);
	}
