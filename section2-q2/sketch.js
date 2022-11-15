// チェッカー
function setup(){
  createCanvas(200,200);

fill(140);
let x = 0;
while(x < 140){
noStroke();
  rect(x + 20,x,20,20);
x = x + 20;
}
fill(140);
let y = 0;
while(y < 160){
noStroke();
  rect(y - 20,y,20,20);
y = y + 20;
}
fill(140);
let z = 0;
while(z < 160){
noStroke();
  rect(z - 60,z,20,20);
z = z + 20;
}
fill(140);
let a = 0;
while(a < 160){
noStroke();
  rect(a - 100,a,20,20);
a = a + 20;
}
fill(140);
let b = 0;
while(b < 160){
noStroke();
  rect(b - 140,b,20,20);
b = b + 20;
}
fill(140);
let c = 0;
while(c < 140){
noStroke();
  rect(c + 20,c - 40,20,20);
c = c + 20;
}
fill(140);
let d = 0;
while(d < 140){
noStroke();
  rect(d + 20,d - 80,20,20);
d = d + 20;
}
fill(140);
let e = 0;
while(e < 140){
noStroke();
  rect(e + 20,e - 120,20,20);
e = e + 20;
}
fill(0);
let f = 10;
while(f < 160){
ellipse(f,110,17);
ellipse(f + 20,130,17);
ellipse(f,150,17);
f = f + 40
}
fill(225,0,0);
let g = 10;
while(g < 160){
ellipse(g + 20,10,17);
ellipse(g,30,17);
ellipse(g + 20,50,17);
g = g + 40
}
}