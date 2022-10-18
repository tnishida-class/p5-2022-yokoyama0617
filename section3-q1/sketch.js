let x, y;
let count, cycle;

function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width / 2;
  y = height / 2;
  count = 0;
  cycle = 90;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  background(160, 192, 225);

  count = (count + 1) % cycle;
  console.log(count);
  let size = 80 / count;
  ellipse(width / 2, height / 2, size + x);

  if(keyIsDown(ENTER)){
  count = (count + 1.5) % cycle;
  console.log(count);
  let size = 80 / count;
  ellipse(width / 2, height / 2, size + x);
}
}