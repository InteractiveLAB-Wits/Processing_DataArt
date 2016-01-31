/*
*Base Code for CP3
*/

//global variables - always in the "main" program.
var myDay = "Monday";
var myHours = 0;


function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(204,232,232);


  // Draw Day and Hours
  myHours = map(mouseX, 0, 800, 0, 24);
  var Hours= int(myHours);
  noStroke();
  fill(242,216,46);
  rect(0,10, 100, 40);
  fill(0);
  text("Day: "+myDay, 10, 25);
  text("Time: "+Hours+" hrs", 10, 40);
}
