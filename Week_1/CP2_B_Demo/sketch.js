/*
 * This program allows you to draw using the mouse.
 * Press 's' to save your drawing as an image to the file "yourName.jpg"
 * Press 'r' to erase your drawing and start with a blank screen
 *
 * Exercise 1: Draw Using the Code and Save some images
 * Exercise 2:
 * a) Write an else statement for something to happen when the mouse is not pressed.
 * b) Add a new "keyIsPressed" statement to make something new happen in the drawing.
 * c) Produce 2 versions of the code In the new version add more color and change shapes.
 */

function setup() {
  // set the display window to size 500 x 500 pixels
  createCanvas(500, 500);
  // set the background colour to white
  background(255);
  // set the rectangle mode to draw from the centre with a specified radius
  rectMode(RADIUS);
}

function draw() {
  var myWidth = random(6);
  var myHeight = random(50);
  /* draw a rectangle at your mouse point while you are pressing
   the left mouse button */

  if (mouseIsPressed) {
    // draw a rectangle with a small random variation in size
    stroke(0, 150); // set the stroke colour to a light grey
    fill(0, 50); // set the fill colour to black with transparency
    rect(mouseX, mouseY, myWidth, myHeight);
  }

  // save your drawing when you press keyboard 's'
  if (keyIsPressed == true && key=='s') {
    save("myCanvas.jpg");
  }

  // erase your drawing when you press keyboard 'r'
  if (keyIsPressed == true && key == 'r') {
    background(255);
  }
}
