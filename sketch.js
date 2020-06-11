var wall,thickness;
var bullet,speed, weight;
var damage;
function setup() {
  createCanvas(displayWidth,displayHeight);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 20);
  bullet .shapeColor="white";
  //bullet.debug=true;
  wall=createSprite(displayWidth-60,200,50,height/2);
  wall.shapeColor=rgb(80,80,80);
  //wall.debug=true;
}
function draw() {
  background("black");  
  bullet.velocityX = 12;
  
  if(bullet.x-wall.x<bullet.width/2+wall.width/2 && wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX = 0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>=10){
      bullet.shapeColor="red";
    }
    else if(damage<10){
      bullet.shapeColor="green";
    }
    
  }

  drawSprites();
}

