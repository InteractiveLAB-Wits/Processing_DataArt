// Sketch from Creative Coding
function setup() {
  createCanvas(400, 350);
  background(0);
  noStroke();
  noLoop();
}

function draw() {
  // No fourth argument means 100% opacity.
  // Blue Rectangle
fill(0,0,255);
rect(0,0,200,400);

// 255 means 100% opacity.
fill(255,0,0,255);
rect(0,50,400,40);

// 75% opacity.
fill(255,0,0,191);
rect(0,100,400,40);

// 55% opacity.
fill(255,0,0,127);
rect(0,150,400,40);

// 25% opacity.
fill(255,0,0,63);
rect(0,200,400,40);;

}
