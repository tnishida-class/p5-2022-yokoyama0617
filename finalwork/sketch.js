// 最終課題を制作しよう
// これまで一生懸命頑張って作ったのですが、どうやっても上手くいきませんでした。すみません。12時までなんとか粘ります。上手くいけば更新します。

let letters;

function setup(){
  createCanvas(windowWidth, windowHeight);
  letters = [];
  fill(0);
  shikakuTsukuruzo(4,100,100,90);
}

function draw(){
  fill(50,100,90);
  noStroke();
  ellipse(100,100,200);
  fill(100,200,150);
  noStroke();
  ellipse(100,100,180);
}
// ここでは枠付きの円を作りたかったんですが、一次はちゃんと顕現してくれていたものの、あるタイミングで突然消えてしまいました。

function shikakuTsukuruzo(n, cx, cy, r){
  beginShape();
  for(let i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
// 黒い四角(斜め45度)です。これを出力させた途端ほかのほとんどの関数が場から消えてしまいました。

function draw(){
  fill(160,192,255);
  rect(37,37,126,126);

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
// 当初は正方形と文字の出力を予定していました。枠付きの円と同じく、斜め四角顕現と同時に消えてしまいました。

let x = 80;
let y = 80;
let vx = 2;
let vy = 2;

function draw(){
  ellipse(x,y,10);

  x += vx;
  y += vy;

  if(x < 37 || x > 126){ vx = -1 * vx; }
  if(y < 37 || y > 126){ vy = -1 * vy; }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}
// 小さな円をいくつか、正方形の内側で自由に泳がせる予定でした。これは正直なところ、関数の正確さにあまり自信がありません。にょきっと生えてきます。

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}