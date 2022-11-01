function setup(){
  createCanvas(400,400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20,100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let avarage, largest, smallest;{

    avarage = sum / 10;

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  stroke(0);
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    if(largest > scores[i]){largest = largest;}
    else{largest = scores[i];}}

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if(smallest < scores[i]){smallest = smallest;}
    else{smallest = scores[i];}}

 noStroke(0)
 for(let i = 0; i < scores.length; i++){

  if(scores[i] == largest){fill(225,0,0)}
  else if(scores[i] == smallest){fill(0,0,225)}
  else{fill(130)};

    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);}

  stroke(0,225,0);
  line(0, 400 - avarage * 4, 400, 400 - avarage * 4);

}}