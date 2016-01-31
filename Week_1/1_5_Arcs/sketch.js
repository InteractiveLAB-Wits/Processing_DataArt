//sketch from Getting Started in P5js Ex 3-7
function setup() {
  createCanvas(480, 240);
  noLoop();
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, HALF_PI);
  arc(190, 60, 80, 80, 0, PI+HALF_PI);
  arc(290, 60, 80, 80, PI, TWO_PI+HALF_PI);
  arc(390, 60, 80, 80, QUARTER_PI, PI+QUARTER_PI);

  angleMode(DEGREES);
  fill(0,155,0)
  arc(90, 160, 80, 80, 0, 90);
  arc(190, 160, 80, 80, 0, 270);
  arc(290, 160, 80, 80, 180, 450);
  arc(390, 160, 80, 80, 45, 225);

}
