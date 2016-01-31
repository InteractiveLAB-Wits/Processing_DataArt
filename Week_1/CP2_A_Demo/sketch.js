/*
 * by Indae Hwang and Jon McCormack
 * Copyright (c) 2014 Monash University
 *
 * This program extends the last by looking at how to make good use of the if/else statements
 * It additonally uses a switch / case statement which is a more stable way to
 * choose between a number of options.
 *
 * This program allows you to draw using the mouse.
 * Press 's' to save your drawing as an image.
 * Press 'r' to erase all your drawing and start with a blank screen
 *
 * Exercise 1: Draw Using the Code and Save some images
 * Exercise 2:
 * a) Create new rules for switch.
 * b) Change the relationship between targetCount and delayCount.
 * b) Add a new "keyIsPressed" statement to make something new happen in the drawing, this can be related to the above.
 * c) Produce 2 versions of the code In the new version add more color and change shapes.
 */

// variables to store the delay and target counts
var delayCount;
var targetCount;
var colorShiftStroke;
var colorShiftFill;

// setup function
function setup() {
  createCanvas(500, 500);
  background(255);

  delayCount = 0;
  targetCount = random(5, 50); // set target count to a random integer between 10 and 50
}

// draw function
function draw() {
  /* draw a rectangle on your mouse point while you pressing
   the left mouse button*/

  var style;

  delayCount++; // increment delay count (shorthand for delayCount = delayCount + 1)

  if (delayCount > targetCount) {

    style = random(4);
    targetCount = random(5, 20) ;
    delayCount = 0;
  }
  else {
    style = 0;
  }

  if (targetCount < 15) {
    colorShiftStroke = color(255, 0, 0);
  }
  else {
    colorShiftStroke = color(0);
  }

  if (targetCount > 5 && targetCount < 10) {
    colorShiftFill = color(0);
  }
  else if (targetCount > 18 && targetCount < 20) {
    colorShiftFill = color(255, 240, 10);
    colorShiftStroke = color(255);
  }
  else {
    colorShiftFill = color(255);
  }

  if (mouseIsPressed == true) {
//  print(style);

    stroke(colorShiftStroke);
    fill(colorShiftFill);

    // switch statement
    switch(round(style)) {
    case 0:
      // draw a point
      stroke(12);
      point(mouseX, mouseY);
      break;

    case 1:
      // draw a circle with random radius
      var esize = random(1, 40);
      ellipse(mouseX, mouseY, esize, esize);
      break;

    case 2:
      // draw a random sized rectangle
      var qsize = random(1, 30);
      quad(mouseX-qsize, mouseY, mouseX, mouseY-qsize, mouseX+qsize, mouseY, mouseX, mouseY+qsize   );
      break;

    case 3:
      // draw a triangle with random size
      var tsize = random(1, 20);
      triangle(mouseX-tsize, mouseY+tsize, mouseX, mouseY-tsize, mouseX+tsize, mouseY+tsize);
      break;
    } // end of switch statement
  }


  // save your drawing when you press keyboard 's'
  if (keyIsPressed == true && key=='s') {
    save('myCanvas.jpg');
  }

  // erase your drawing when you press keyboard 'r'
  if (keyIsPressed == true && key == 'r') {
    background(255);
  }

}
