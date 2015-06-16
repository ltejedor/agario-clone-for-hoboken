/*
  Empty example
 */

var mainCircle;
var x;
var y;

var rCol;
var gCol;
var bCol;

var points = 0;

function preload() {

}

function setup() {

	rCol = Math.random() * 255;
	gCol = Math.random() * 255;
	bCol = Math.random() * 255;

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
	if(rCol < 255 || bCol < 255 || gCol < 255){
		rCol++;
		bCol++;
		gCol++;
	}
	else{
		rCol = Math.random() * 255;
		gCol = Math.random() * 255;
		bCol = Math.random() * 255;
	}

	fill(rCol, gCol, bCol);
	stroke(rCol,gCol,bCol);
	strokeWeight(6);
	ellipse(x, y, 35, 35);

	x = newPosx();
	y = newPosy();



	fill(0, 255, 0);
	stroke(50, 200, 50);
	strokeWeight(3);

	mainCircle = ellipse(x, y, 35, 35);

	fill(0);
	stroke(255);

	points = checkPoints();

	text('Score: ' + points + ' / ' + height * width, 10, 30);
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

function checkPoints(){
	console.log (x + 'vs' + mouseX);
	if((Math.abs(x - mouseX) < 10) && (Math.abs(y - mouseY) < 10) ){
		return points;
	}
	else{
		points++;
		return points;
	}
}
