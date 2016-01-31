
var rAngle = 0;

function setup() {
  createCanvas(500, 500);
  smooth();
  background(255);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(4);

  noFill();
  rectMode(CENTER);

for (var i = 0; i < 14; i++){
push();
translate(width/2, height/2);
rotate(rAngle);
rect(-50, 0, 80, 20);
pop();
var div = map(mouseX, 0.0, 500.0, 0.0, 0.5);
rAngle = rAngle + div;
}

strokeWeight(2);
fill(0,200,255,30);
for (var i = 0; i < 12; i++){
push();
translate(width/2, height/2);
rotate(rAngle);
rect(-50, 0, mouseY, 30);
pop();
var div = map(mouseX, 0.0, 500.0, 0.0, 0.8);
rAngle = rAngle + div;
}
rAngle = 0.0;

}
