var mr;
var fr;


function setup() {
  createCanvas(800,400);
 mr = createSprite(400, 200, 50, 50);
 fr = createSprite(400, 200, 50, 50);
 mr.shapeColor = "red";
 fr.shapeColor = "red";
 mr.debug = true;
 fr.debug = true;
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX;
  mr.y = mouseY;

  if((mr.x-fr.x<mr.width/2 + fr.width/2)&&
  (fr.x-mr.x<mr.width/2 + fr.width/2)&&
  (mr.y-fr.y<mr.height/2 + fr.height/2)&&
  (fr.y-mr.y<mr.height/2 + fr.height/2)){
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }
  else{
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  drawSprites();
}