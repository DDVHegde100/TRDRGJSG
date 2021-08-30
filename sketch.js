var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var Cactus1, Cactus2, Cactus3, Cactus4, Cactus5, Cactus6;
var Score;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  Cactus1=loadImage("obstacle1.png");
  Cactus2=loadImage("obstacle2.png");
  Cactus3=loadImage("obstacle3.png");
  Cactus4=loadImage("obstacle4.png");
  Cactus5=loadImage("obstacle5.png");
  Cactus6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  Score=0;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCactus();
  drawSprites();
  
  text("Score:"+Score,500, 50);
  Score=Score+Math.round(getFrameRate()/60);
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
  }
function spawnCactus(){
   if(frameCount%60 === 0) {
  var Cactus=createSprite(600, 170, 30, 30);
  var Cacti=Math.round(random(1,6));
  Cactus.velocityX=-4;
  switch(Cacti){
    case 1: Cactus.addImage(Cactus1);
      break;
    case 2: Cactus.addImage(Cactus2);
      break;
      case 3: Cactus.addImage(Cactus3);
      break;
      case 4: Cactus.addImage(Cactus4);
      break;
      case 5: Cactus.addImage(Cactus5);
      break;
      case 6: Cactus.addImage(Cactus6);
      break;
      
      default: break;
      }
     Cactus.scale=0.5;
     Cactus.lifetime=150;
   } 
}

