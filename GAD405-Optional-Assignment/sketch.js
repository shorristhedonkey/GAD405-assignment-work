//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  textSize(32);
  //noLoop();
  }
  i = 00;
function draw() {
  background(0); //Set your background color to black (0)
  grid();
  mouseBox();

  	  i = i + 01;
	  if(i < 99){
	  fill(i + 100, 0, i + 100);
	  rect(boxWidth*boxesX[i], boxWidth*boxesY[i], boxWidth, boxWidth);				
	  }else{
		  i = 0;
	  }
  console.log(i);

  }
  
  boxesX = [];
  boxesY = [];
  //collidersX = [];
  //collidersY = []
  function grid(){
	boxWidth = width/10;
		for (let posX = 0; posX < 10; posX++) {	
			for (let posY = 0; posY < 10; posY++){
				 //drawing the rectangles in the grid
				 rect(boxWidth*posX, boxWidth*posY, boxWidth, boxWidth);
				 boxesX.push(posX);
				 boxesY.push(posY);
    			 /*drawing the colliders in the grid
				 collidePointRect(mouseX,mouseY,boxWidth*posX, boxWidth*posY, boxWidth, boxWidth);;
				 collidersX.push(posX);
				 collidersY.push(posY);
				 */
				  text(posX, boxWidth * posX, boxWidth * posY + 50); 
				  text(posY, boxWidth * posX + 15, boxWidth * posY + 50); 
				 
			}
		}
	}
  function mouseBox(){
	line(mouseX, 0, mouseX, height);
	line(0, mouseY, width, mouseY);	
	fill(255, 0, 0);
	text(round(mouseX) + " x", mouseX + 12, mouseY + 32);
	text(round(mouseY) + " y", mouseX + 12, mouseY + 64);
  }