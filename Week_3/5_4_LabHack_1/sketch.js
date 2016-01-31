/*
 * Use this as a base for the Pattern Lab Hack
 *
 */
var x = 0;
var y = 25;
var mySize = 50;
var repeats = 0;
var myFill = 0;

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
     fill(myFill, 200, 220);
     ellipse(mySize/2+x, 0+y, mySize, mySize);

     fill(255-myFill, 200, myFill);
     ellipse(0+x, mySize/2+y, mySize, mySize);

     fill(255);
     ellipse(0+x, mySize/2+y, mySize*0.6, mySize*0.6);

      x = x + mySize;
    }
    //fill(check your x's and y's);
    y = y + mySize;
    x = 0;
    myFill = myFill + 24;

  }
  y = 0;
  myFill = 0;
}
