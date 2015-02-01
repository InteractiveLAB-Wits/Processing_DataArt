/* 
*Base Code for CP3
*/

//global variables - always in the "main" program. 
String myDay = "Monday";
float myHours = 0;


void setup() {  
  size(800, 500);
}

void draw() {  
  background(255);
  
  
  // Draw Day and Hours
  myHours = map(mouseX, 0, 800, 0, 24);
  int Hours= int(myHours);
  noStroke();
  fill(#FCEC33);
  rect(0,10, 100, 40);
  fill(0);
  text("Day: "+myDay, 10, 25);
  text("Time: "+Hours+" hrs", 10, 40);
}

