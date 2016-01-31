/* Example Tegan Bristow 2015
 *Use your mouse data to change things in realtime.
 *expanding on the map() function
 *example from Processing examples
 */


function setup() {
  createCanvas(640, 360);
  noStroke();
  rectMode(CENTER);
}

//global variables - always in the "main" program.
  var v1 = 0;
  var v2 = 0;

function draw() {
  background(0);
  // setting up the shifting data input
  var v1 = map(mouseX, 0, width, 0, height);
  var v2 = height-v1;

  // drawing the shape
  noStroke();
  fill(v1);
  rect(width/2 + v1/2, height/2, v1, v1);
  fill(v2);
  rect(width/2 - v2/2, height/2, v2, v2);

  // presenting the "data" as text
  stroke(242,216,46);
  strokeWeight(10);
  fill(242,216,46);
  strokeJoin(ROUND);
  rect(width/2,height, 120, 32);
  fill(0);
  var V1 = int(v1);
  var V2 = int(v2);
  text("V1: "+V1, width/2 + 10, height-5);
  text("V2: "+V2, width/2 - 50, height-5);
}
