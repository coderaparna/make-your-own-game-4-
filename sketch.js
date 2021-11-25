var bg;
var boyimg,boyrunning,boy;
var tiger,fox, trunning//, foxrunning,foxCollided,tigercollided,plantcollided;
var plant;
var animalgroup;
var gameState = "play";
var score = 0;
var invisiblegrd;


function preload(){
 bg = loadImage("background4.jpg");
boyimg = loadAnimation("boy1.png");
boyrunning = loadAnimation("boy1.png","boy2.png","boy3.png");
boycollided = loadAnimation("boy2.png");
tiger= loadAnimation("tiger1.png","tiger2.png","tiger3.png");
tigercollided = loadAnimation("tiger1.png");
fox = loadAnimation("fox1.png","fox2.png","fox3.png");
foxCollided = loadAnimation("fox1.png");
plant = loadAnimation("plant1.png","plant2.png","plant3.png");
plantCollided = loadAnimation("plant1.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight/2,width*2,height*2);
  ground.addImage(bg);
 ground.scale = 3.0;
  ground.velocityX = -2;

 
  
  boy = createSprite(110, height-250, 50, 60);
  boy.scale = 0.6;
 boy.addAnimation("running",boyrunning);
 boy.addAnimation("collided",boycollided);
  boy.debug = true;
  boy.setCollider("rectangle",0,0,30,boy.height);
  
  animalgroup = new Group();
  invisiblegrd = createSprite(windowWidth/2,height-140,width*2,3);
  invisiblegrd.visible = false;


}

function draw(){
  background("black"); 
 textSize(60);
 fill("red");
 text("SCORE = "+score,300,60);
 console.log(score);
 boy.collide(invisiblegrd);

  if(gameState==="play"){
    ground.velocityX = -(8+ score/500);
    if(ground.x<0){
      ground.x = windowWidth/2;
    }
    
   if(keyDown("space")){
     boy.velocityY = -10;
      
    }
   boy.velocityY = boy.velocityY + 1;
   score = score+ Math.round(getFrameRate()/60);
  

   animals();
    
   if(animalgroup.isTouching(boy)){
     gameState = "end";
   }
