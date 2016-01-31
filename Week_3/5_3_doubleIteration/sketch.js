/*
 * This program fills the display window with overlapping circles.
 * Incrementing each on the x and y axis based in the circle size.
 * This makes it easy to change the pattern by the circle size.
 * Which also changes the number of loops in 'repeats' variable.
 *
 */
var x = 0;
var y = 25;
var mySize = 90;
var repeats = 0;

function setup() {
  createCanvas(500, 500);
  smooth();
  background(255);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(3);
  ellipseMode(CENTER);

  repeats = width/mySize+1;

  for (var i = 0; i < repeats; i++) {
    for (var j = 0; j < repeats; j++) {
     ellipse(mySize/2+x, 0+y, mySize, mySize);
     ellipse(0+x, mySize/2+y, mySize, mySize);
      x = x + mySize;
    }
    //fill(check your x's and y's);
    y = y + mySize;
    x = 0;

  }
  y = 0;
}
