// Sketch from Creative Coding 
function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
  noLoop();
}

function draw() {
  strokeWeight(10); // new "settings" functions - why not Attributes?
  background(0);

  // using Hue, Saturation and Brightness - shifting degree's and percentages of brightness and saturation
  // this is helpfull with dynamic coding, where you can phase through colors and stay within the same brightness or stauration range
  colorMode(HSB,360,100,100);
  stroke(0,99,99);
  fill(0,99,0);
  ellipse(250, 250, 250, 250);

  //shifting only on the 8 bit ranges of 0 to 255
  colorMode(RGB);
  stroke(255,0,0);
  fill(0,0,0);
  ellipse(250, 250, 150, 150);

//visit the Mozilla Dev Color Picker Tool --> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
}
