/* 
*Looking at using math to create relational engagements 
*between shapes and data. 
*Our data is mouseX, mouseY
*introducing functions map() and constrain()
*/

//global variables - always in the "main" program. 
float circleAlpha = 50;
float strokeAlpha = 255;
float circleSize = 250;

void setup() {  
  size(500, 500);
}

void draw() {  
  background(255,255,255);
  
  // setting up the shifting data input
  circleAlpha = map(mouseX, 0, 500, 0, 255);
  strokeAlpha = map(mouseX, 0, 555, 255, 0);
  circleSize = constrain(mouseY, 20, 300);
  
  // drawing the shape
  fill(255,0,0, circleAlpha);
  strokeWeight(15); 
  stroke(255,0,0, strokeAlpha);
  ellipse(width/2, height/2, circleSize, circleSize);
  
  // presenting the "data" as text
  noStroke();
  fill(#80CDD3);
  rect(0,10, 100, 40);
  fill(0);
  text("X Data: "+mouseX, 10, 25);
  text("Y Data: "+mouseY, 10, 40);
  
}

