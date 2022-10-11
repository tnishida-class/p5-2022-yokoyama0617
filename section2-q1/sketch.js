function setup(){
stroke(225,0,0);
for (let x = 100; x > 50; x = x - 10)
ellipse(50,50,x);
stroke(0,0,225);
for (let x = 50; x > 0; x = x - 10)
ellipse(50,50,x)
}