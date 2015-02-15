function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(200);
  var color1 = color(204, 101, 192, 127);
  var color2 = color(20, 10, 19, 127);

  // Set colors
  fill(color1)
  stroke(127, 63, 120);

  // A rectangle
  rect(40, 120, 120, 40);
  // An ellipse
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 320, 100, 310, 80);
   
  // A design for a simple flower
  translate(580, 200);
  noStroke();
  fill(color2);
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}