
var num = 0;
var x = 1;
var y = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

function draw() {
  num++;
  if(num>20){
     //circle(random()*1000, random()*1000, random()*100);
    fill(random()*255, random()*255, random()*255);
    circle(random()*window.innerWidth,y,random()*40);
    fill(random()*255, random()*255, random()*255);
}
 
  if(y < window.innerWidth){
    y++;
}

  

  
  

  
}