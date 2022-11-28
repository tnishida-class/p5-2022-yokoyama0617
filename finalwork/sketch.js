// 最終課題を制作しよう
// 一度すべて消してやり直しましたが、この時点でshikakuの関数が表示されないようです。バグかもしれません。一瞬だけ顕現しますが即座に背景に揉み消されます。

function setup(){
  createCanvas(windowWidth, windowHeight);
  fill(0);
  shikaku(4,300,100,90);
}

function draw(){
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
  }
  endShape(CLOSE);
}