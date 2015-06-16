/*
  Empty example
 */

var mainCircle;
var x;
var y;

function preload() {

}

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);

	x = width/2;
	y = height/2;

	background(255);

	fill(0, 255, 0);
	stroke(50, 200, 50);
	strokeWeight(3);

	mainCircle = (x, y, 35, 35);

	for (i = 0; i < 40; i++){
		strokeWeight(1)
		if(i%3 == 0){
				fill(255, 154, 51);
				stroke(204, 102, 0);
				ellipse(Math.random() * width, Math.random() * height, 10, 10);
		}
		else if (i%2 == 0){
				fill(153, 51, 255);
				stroke(76, 0, 153);
				ellipse(Math.random() * width, Math.random() * height, 10, 10);
		}
		else{
				fill(102, 255, 255);
				stroke(0, 153, 153);
				ellipse(Math.random() * width, Math.random() * height, 10, 10);
		}
	}
}

function draw() {
	fill(255, 255, 255);
	stroke(255,255,255);
	strokeWeight(6);
	ellipse(x, y, 35, 35);

	x = newPosx();
	y = newPosy();



	fill(0, 255, 0);
	stroke(50, 200, 50);
	strokeWeight(3);

	mainCircle = ellipse(x, y, 35, 35);
}

function newPosx(){
	if((x - mouseX) < 0){
		return x + 1;
	}
	else{
		return x - 1;
	}
}

function newPosy(){
	if((y - mouseY) < 0){
		return y + 1;
	}
	else{
		return y - 1;
	}
}

