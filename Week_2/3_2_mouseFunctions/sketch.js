/*
 * Adpated from Indae Hwang and Jon McCormack
 * Copyright (c) 2014 Monash University
 *
 * This sketch shows how to do vareraction with the mouse.
 * Try pressing, releasing, clicking and dragging the mouse and observe the results.
 * When each event happens the sketch also prvars a message in the console.
 *
 */

var circleWidth;
var strokeWeightValue;
var backgroundValue;
var strokeColorValue;

function setup() {
  createCanvas(300, 300);
  circleWidth = 50;
  backgroundValue = 120;
  strokeWeightValue = 40;
  strokeColorValue = 80;
}


function draw() {
  background(backgroundValue);
  stroke(strokeColorValue);
  strokeWeight(strokeWeightValue);
  ellipse(150, 150, circleWidth, circleWidth);

  if(mousePressed){
     strokeColorValue = 50 + mouseY/5;
  }
  //END OF DRAW
}


function mousePressed() {
  println("The mouse button was pressed");
  circleWidth = 150;
}

function mouseReleased() {
  println("The mouse button was released");
  circleWidth = 50;
}

function mouseClicked() {
  println("The mouse button was clicked");
  if (backgroundValue == 120) {
    backgroundValue = 180;
  }else{
    backgroundValue = 120;
  }
}

function mouseDragged(){
  println("The mouse is being dragged");
  strokeWeightValue = mouseX/10;

  //Ensure that the value for stroke weight is never negative.
  if(strokeWeightValue < 0)
    strokeWeightValue = 0;
}
