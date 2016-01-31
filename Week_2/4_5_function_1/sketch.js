// Example by Tegan Bristow 2015
function setup() {
  createCanvas(400, 100);
  background(204);
  noStroke();
}


function draw() {
var c = randTwoPlus(10,12);
  print("C:"+c);
}

// we can also use functions to perform a very specific calculation that we use often,
function randTwoPlus(n1, n2){
  var a = random(n1);
  var b = a + n2;
  return b;
}
