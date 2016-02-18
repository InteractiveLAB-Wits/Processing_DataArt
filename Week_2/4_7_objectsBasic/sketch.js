// Example by Tegan Bristow 2015
// Car Object vs function

// What do we do if we want to access the speed variable from move rather than the constructor?


function setup() {
  createCanvas(800, 200);
  background(204);
  noStroke();
  slowCar = new carObj(50,50, 100, 1);
}

function draw() {
  background(127);
  slowCar.display();
  slowCar.move();

}

function carObj(tempX, tempY, tempW, tempSpeed){
  this.carW = tempW;
  this.carH = tempW*0.3;
  this.carX = tempX;
  this.carY = tempY;
  this.carSpeed = tempSpeed;

  this.display = function(){
    //body
    rect(this.carX,this.carY, this.carW, this.carH);
    //wheels
    fill(0);
    ellipse(this.carX + this.carW*0.2, this.carY+this.carH, this.carW/4, this.carW/4);
    ellipse(this.carX + this.carW*0.8, this.carY+this.carH, this.carW/4, this.carW/4);
  }

  this.move = function(){
    this.carX += this.carSpeed;
    if (this.carX > width) {
      this.carX = 0;
    }
  }


}
