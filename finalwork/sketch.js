// 一時保存

function setup(){
  createCanvas(windowWidth, windowHeight);
  draw1();
  fill(0);
  shikaku(4,100,100,90);
  draw2();
  fill(50,100,90);
  draw3();
  draw4();
}

function draw1(){
  background(220);

  fill(50,100,90);
  noStroke();
  ellipse(100,100,200);
  fill(100,200,180);
  noStroke();
  ellipse(100,100,180);
}

function shikaku(n, cx, cy, r){
  beginShape();
  for(let i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    endShape(CLOSE);
  }
}

function draw2(){
  fill(160,192,255);
  rect(37,37,126,126);
}

function draw3(){

  let x = random(42,121);
  let y = random(42,121);
  let vx = random(3,5);
  let vy = random(3,5);

  ellipse(x,y,10);

  x += vx;
  y += vy;

  if(x < 42 || x > 121){ vx = -1 * vx; }
  if(y < 42 || y > 121){ vy = -1 * vy; }
}
  
function draw4(){
  fill(0);
  textSize(18);
  textFont("serif");
  text("Department of", 42, 100);
  text("Grobal Cultures", 42, 115);
  fill(225,0,0);
  textSize(5);
  text("puroguraminngu ha muzukasii", 42, 125);
  textSize(20);
}