// Example by Tegan Bristow 2015
// Finish Drawing the Car
// Then we will make a car function of our own
var carW = 200;
var carH = 60;
var carX = 20;
var carY = 100;

function setup() {
  createCanvas(400, 200);
  background(204);
  noStroke();
}

function draw() {
  //body
  rect(carX,carY, carW, carH);
  //wheels
  fill(0);
  ellipse(carX + carW*0.2, carY+carH, carW/4, carW/4);

}
