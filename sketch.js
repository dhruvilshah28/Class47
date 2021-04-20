var bg;
var ground;


function preload()
{
  bg=loadImage("background.jpg"); 
}

function setup() 
{
  createCanvas(400,400);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",bg);
  ground.x = ground.width /2;
 
}

function draw() 
{
  background(255);
  
  ground.velocityX = -4;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

    drawSprites();
}