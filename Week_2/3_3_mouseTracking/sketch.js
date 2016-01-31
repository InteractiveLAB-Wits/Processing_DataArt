var x;
var offset = 10;

function setup() {
  createCanvas(400, 400);
  x = width/2;
}

function draw() {
  background(204);
  if (mouseX > x) {
    x += 0.5;
    offset = -10;
  }
  if (mouseX < x) {
    x -= 0.5;
    offset = 10;
  }
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);

// presenting the "data" as text
text("Offest: "+offset, width - 100, height-5);
text("X:"+mouseX, 60, height-5);
text("Y:"+mouseY, 20, height-5);

}
