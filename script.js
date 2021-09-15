var ball1, ball2, ball3

class Ball{
  constructor(x, y, vx, vy, h, w, c){
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.h = h;
  this.w = w;
  this.c = c;
  }

  draw(){
    fill(this.color);
    ellipse(this.x,this.y,this.w,this.h)
    this.x = 
  }
}

function setup() {
  createCanvas(400, 300);

  ball1 = new Ball(30,200,50,50,5,5,"green")

  ball2 = new Ball(120,210,50,50,3,3,"black")

  ball3 = new Ball(200,120,50,50,1,1,"blue")

}

