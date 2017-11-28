//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405

let x;
let xReverse;
function setup() {
  createCanvas(500, 700); //Use this function to define the size of the output window
  background(200, 0 , 0);
  }
 

function draw() {
	background(255);
	
	x = mouseX;
	xReverse = map(mouseX, 0, width, width, 0);
	
	fill(200, 0, 0);
	rect(x, 0, 10,height/2);
	rect(xReverse, height/2, 10, height/2);
	
	text(round(x), x+20, 100);
	text(round(xReverse), xReverse+20, 300);
	}
