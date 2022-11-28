
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);
  draw1();
  fill(0);
  shikaku(4,100,100,90);
  draw2();
}

function draw1(){
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
    let x1 = cx + cos(theta) * r;
    let y1 = cy + sin(theta) * r;
    vertex(x1,y1);
  }
  endShape(CLOSE);
}

function draw2(){
  fill(160,192,255);
  rect(37,37,126,126);
}
  
function draw(){
  if(mouseIsPressed){
    fill(22,225,0);
  }else{fill(0);}
  textSize(18);
  textFont("serif");
  text("Department of", 42, 100);
  text("Grobal Cultures", 42, 115);
  fill(225,0,0);
  textSize(5);
  text("puroguraminngu ha muzukasii", 42, 125);
  textSize(20);
}