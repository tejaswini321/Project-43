var hr,mn,sc;
var scAngle,mnAngle,hrAngle;


function setup() {
  createCanvas(600,400);
  angleMode(DEGREES);

}

function draw() {
  background(0); 
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,30,60,0,360);
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360) 

  fill(0);
  circle(300, 200, 250); 
  translate(300,200);
  rotate(-90);

  push();
  rotate(scAngle);
  stroke(rgb(249,1,1));
  strokeWeight(5);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(rgb(1,255,0));
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(rgb(0,1,249));
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  stroke(rgb(249,1,1));
  strokeWeight(7);
  noFill();
  arc(0,0,265,265,0,scAngle);

  stroke(rgb(1,255,0));
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,mnAngle);

  stroke(rgb(0,1,249));
  strokeWeight(7);
  noFill();
  arc(0,0,235,235,0,hrAngle);


  drawSprites();
}