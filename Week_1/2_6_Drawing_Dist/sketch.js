//sketch from Getting Started in P5js Ex 5_7
function setup() {
  createCanvas(480, 480);
  stroke(0, 102);
}

function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
