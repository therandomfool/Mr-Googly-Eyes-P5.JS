// initial values to feed the purlin noise
let xOffset = 0;
let yOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();

  // x/y positions for the pupils using perlin noise
  let eyballXPos1 = (noise(xOffset) * width) / 4 + width / 8;
  let eyballYPos1 = (noise(yOffset) * height) / 4 + height / 2.6;

  let eyballXPos2 = (noise(xOffset) * width) / 4 + (width * 5) / 8;
  let eyballYPos2 = (noise(yOffset) * height) / 4 + height / 2.6;

  // left eyeball
  fill(255);
  circle(width / 4, height / 2, width / 3);
  fill(0);
  stroke(225,0,0)
  strokeWeight(2.14)
  circle(eyballXPos1, eyballYPos1, width / 8);

  // right eyeball
  noStroke();
  fill(255);
  circle((width * 3) / 4, height / 2, width / 3);
  fill(0);
  stroke(225,0,0)
  strokeWeight(2.14)
  circle(eyballXPos2, eyballYPos2, width / 8);

  // increment the purlin noise seed
  xOffset += 0.01;
  yOffset += 0.012;
}