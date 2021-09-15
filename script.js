var x, v;
function setup() {
  createCanvas(500, 400);
  x = 30;
  v = 5;
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
  background(120)
  circle(x,200,30);
  x = x + v;
  if (x < 30){
    v = 5;
  }

  if (x > 470){
    v = -5;
  }


  
}