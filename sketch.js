let x;
let y;
let speedX;
let speedY;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
  speedX = 7;
  speedY = 3;
}

function draw() {
  background('pink');

  // Move the ball
  x += speedX;
  y += speedY;

  // Bounce off the edges
  if (x > width || x < 0) {
    speedX = -speedX;
  }
  if (y > height || y < 0) {
    speedY = -speedY;
  }

  
  fill(0,100,90);
  noStroke();
  ellipse(x, y, 100, 100);
}
