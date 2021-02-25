var canvas;
var bg1,bg2;
var thief,thiefImg;
var laser1,laser2,laser3,laser4;
var laserImg1,laserImg2,laserImg3,laserImg4;
var key1,key2,key3,key4,keyImg;
var bricks, brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,
     brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22,brick23,brick24,brick25;
var bricksImg,bricksImg2,bricksImg3;
var police1,police2,police3,police4,police5;
var policeImg;
var goldbox;
var goldboxImg;
var siron1,sironImg;
var JST=1;
var START=2;
var END=3;
var score=0;
//var gameState=START;
var gameState=JST;
var sound1;
var gold1,gold2,dold3,gold4,gold5,goldImg;
var Gold=0;
var Key=0;
var live=3;
var diamond1,diamondImg;


function preload() {
    bg1=loadImage("sprites/bg2.jpg");
    thiefImg=loadImage("sprites/thief1.png");
    laserImg1=loadImage("sprites/laser 1.png");
    laserImg2=loadImage("sprites/laser 2.png");
    laserImg3=loadImage("sprites/laser 3.png");
    laserImg4=loadImage("sprites/laser 4.png");
    keyImg=loadImage("sprites/key.png");
    bricksImg=loadImage("sprites/bricks.png")
    bricksImg2=loadImage("sprites/bricks2.png")
    bricksImg3=loadImage("sprites/bricks3.png")
    policeImg=loadImage("sprites/police.png")
    sironImg=loadImage("sprites/siron.png")
    sound1 = loadSound("sound/soundwe.mp3")
    goldImg=loadImage("sprites/goldbar.png")
    diamondImg=loadImage("sprites/diamond.png")
    goldboxImg=loadImage("sprites/goldbox.png")
}

function setup(){
    canvas = createCanvas(1150,550);
    
    
      

    brick5=createSprite(690,520,20,20);
    brick5.shapeColor=("red")
    brick7=createSprite(530,520,20,20);
    brick7.shapeColor=("green")
    brick9=createSprite(500,460,20,20);
    brick9.shapeColor=("red")

    key1=createSprite(410,510,20,20);
    key1.addImage(keyImg)
    key1.scale=0.1;

    key2=createSprite(560,80,20,20);
    key2.addImage(keyImg)
    key2.scale=0.1;

    key3=createSprite(1050,420,20,20);
    key3.addImage(keyImg)
    key3.scale=0.1;

    key4=createSprite(280,480,20,20);
    key4.addImage(keyImg)
    key4.scale=0.1;

    
    
    thief=createSprite(1070,500,20,100);
    thief.addImage(thiefImg);
    thief.scale=0.17;
    //thief.debug=true;
    thief.setCollider("rectangle",0,0,300,430);

    police1=createSprite(900,510,20,20);
    police1.addImage(policeImg);
    police1.scale=0.35;
    //police1.velocityX=2;
    //police1.debug=true;
    police1.setCollider("rectangle",0,0,200,230);
    
    police2=createSprite(770,200,20,20);
    police2.addImage(policeImg);
    police2.scale=0.35;
    police2.velocityY=2;
    //police2.debug=true;
    police2.setCollider("rectangle",0,0,200,230);

    police3=createSprite(770,510,20,20);
    police3.addImage(policeImg);
    
    police3.scale=0.35;
    police3.visible=false;
    //police3.debug=true;
    police3.setCollider("rectangle",0,0,200,230);

    police4=createSprite(580,210,20,20);
    police4.addImage(policeImg);
    police4.scale=0.35;
    police4.velocityY=1;
    //police4.debug=true;
    police4.setCollider("rectangle",0,0,200,230);

    police5=createSprite(40,80,20,20);
    police5.addImage(policeImg);
    police5.scale=0.35;
    police5.velocityX=2;
    //police5.debug=true;

    laser1=createSprite(88,350,20,20)
    laser1.addImage(laserImg1);
    laser1.scale=0.475;
    //laser1.debug=true;
    laser1.setCollider("rectangle",0,10,400,20);

    laser2=createSprite(88,400,20,20)
    laser2.addImage(laserImg2);
    laser2.scale=0.4;
    //laser2.debug=true;
    laser2.setCollider("rectangle",0,10,500,20);
    
    laser3=createSprite(88,450,20,20)
    laser3.addImage(laserImg3);
    laser3.scale=0.35;
    //laser3.debug=true;
    laser3.setCollider("rectangle",0,10,500,20);
    //laser3.setCollider("rectangle",0,10,500,20);
    
    laser4=createSprite(1070,370,20,20)
    laser4.addImage(laserImg4);
    laser4.scale=0.3;
    //laser4.debug=true;
    laser4.setCollider("rectangle",0,10,500,20);

    bricks=createSprite(980,340,30,440);
    brick2=createSprite(590,5,1200,10);
    brick3=createSprite(890,390,150,30);
    brick4=createSprite(675,390,80,30);
    brick27=createSprite(280,420,150,30);
    brick6=createSprite(650,465,30,180);
    brick8=createSprite(470,480,30,180);
    brick20=createSprite(550,150,190,30)
    brick10=createSprite(350,480,30,180);
    brick11=createSprite(410,405,150,30);
    brick12=createSprite(650,193,30,366);
    brick13=createSprite(980,510,30,50);
    brick13.shapeColor="red";
    brick13.visible=false;
    brick14=createSprite(650,510,30,50);
    brick14.shapeColor="red";
    brick14.visible=false;
    brick15=createSprite(860,355,20,20);
    brick15.shapeColor="red";
    brick16=createSprite(770,390,110,30);
    brick17=createSprite(860,130,30,260);
    brick18=createSprite(470,370,30,50);
    brick19=createSprite(470,120,30,220)
    brick21=createSprite(510,190,20,20);
    brick21.shapeColor="red";
    brick22=createSprite(350,280,30,300)
    brick23=createSprite(190,340,30,420) 
    brick24=createSprite(101,140,208,30)
    brick25=createSprite(120,100,20,20);
    brick25.shapeColor="red";
    brick26=createSprite(280,370,20,20);
    brick26.shapeColor="red";
    brick28=createSprite(80,290,190,30);
    brick29=createSprite(140,250,20,20);
    brick29.shapeColor="red";

    gold1=createSprite(1060,150,20,20);
    gold1.addImage(goldImg);
    gold1.scale=0.1;

    gold2=createSprite(700,350,20,20);
    gold2.addImage(goldImg);
    gold2.scale=0.1;

    gold3=createSprite(700,450,20,20);
    gold3.addImage(goldImg);
    gold3.scale=0.1;

    gold4=createSprite(400,460,20,20);
    gold4.addImage(goldImg);
    gold4.scale=0.1;

    gold5=createSprite(520,70,20,20);
    gold5.addImage(goldImg);
    gold5.scale=0.1;

    gold6=createSprite(260,520,20,20);
    gold6.addImage(goldImg);
    gold6.scale=0.1;

    gold7=createSprite(270,530,20,20);
    gold7.addImage(goldImg);
    gold7.scale=0.1;

    gold8=createSprite(80,220,20,20);
    gold8.addImage(goldImg);
    gold8.scale=0.1;

    gold9=createSprite(80,230,20,20);
    gold9.addImage(goldImg);
    gold9.scale=0.1;

    diamond1=createSprite(80,520,20,20);
    diamond1.addImage(diamondImg);
    diamond1.scale=0.1;
}

function draw(){
    background(bg1)
    
      
    drawSprites();
    textSize (20);
    fill ("white")
    text("Score: "+ score, 700,30);
  
  text ("Keys: "+Key,950,30)
  text ("Gold: "+Gold,1050,30)
  
      text("Lives :"+live,850,30)
      if(gameState===JST){
        background("black")
        
        text("1) If you touch on red block the gate will open",400,270)
        text("2) If you touch on green block the gate will close",400,290)
        text("3) If you touch with police your life will decrease by 1",400,310)
        text("4) you have 3 life in the game",400,330)
        text("5) collect keys to open the lasers",400,350)
        text("6) If you touch on any laser your life will decrease by 1",400,370)
        textSize(40);
        fill("red")
        text("press Space to start the game",500,450)
        text("Instructions",500,240)
        stop();
        laser4.x=1070;
              }
      
      if(keyDown("space") && gameState === JST){
        gameState=START;
        
        reset();

      }
    
if(gameState===START){
console.log("hi");

  edges=createEdgeSprites();

  thief.bounceOff(edges)
  police1.bounceOff(bricks)
  police1.bounceOff(brick6)
  police1.bounceOff(brick8)
  police2.bounceOff(brick2)
  police2.bounceOff(brick16)
  police3.bounceOff(brick13)
  police3.bounceOff(brick14)
  police4.bounceOff(edges)
  police4.bounceOff(brick20)
  police5.bounceOff(edges)
  police5.bounceOff(brick19)
  thief.bounceOff(bricks)
  thief.bounceOff(brick2)
  thief.bounceOff(brick3)
  thief.bounceOff(brick4)
  thief.bounceOff(brick6)
  thief.bounceOff(brick8)
  thief.bounceOff(brick10)
  thief.bounceOff(brick11)
  thief.bounceOff(brick12)
  thief.bounceOff(brick16)
  thief.bounceOff(brick17)
  thief.bounceOff(brick18)
  thief.bounceOff(brick19)
  thief.bounceOff(brick20)
  thief.bounceOff(brick22)
  thief.bounceOff(brick23)
  thief.bounceOff(brick24)
  thief.bounceOff(brick28)

  score = score + Math.round(getFrameRate()/60)
  //touching bricks

  if(thief.isTouching(brick5)){
    brick6.x=1400;
}

if(thief.isTouching(brick7)){
    
    brick6.x=650;
}

if(thief.isTouching(brick9)){
   brick8.velocityY=10;
    brick9.x=1200;
}
if(thief.isTouching(brick15)){
  
  brick16.x=1400;
}
if(thief.isTouching(brick21)){
  
brick20.x=1400;
}
if(thief.isTouching(brick25)){
  
brick24.x=1400;
}
if(thief.isTouching(brick26)){
  
brick27.x=1400;
}
if(thief.isTouching(brick29)){
  
  brick28.x=1400;
  }

//Touching keys and gold

if(key1.isTouching(thief)){
  console.log("hello")
  police1.velocityX=3.1;
  police2.velocityY=3.1; 
  police3.velocityX=3.1; 
  police4.velocityY=2.1;
  police5.velocityX=3.1;

  laser1.velocityX=-3;
  key1.x=1200;
  Key=Key+1;
}
if(key2.isTouching(thief)){
  console.log("Yo")
  police1.velocityX=3.4;
  police2.velocityY=3.4; 
  police3.velocityX=3.4; 
  police4.velocityY=2.1;
  police5.velocityX=3.4;
  laser2.velocityX=-3;
  key2.x=1200;
  Key=Key+1;
}
if(key3.isTouching(thief)){
  console.log("key1")
  police1.velocityX=2.8;
  police2.velocityY=2.8; 
  police3.velocityX=2.8; 
  police4.velocityY=1.8;
  police5.velocityX=2.8;
  key3.x=1200;
  laser4.velocityX=3;
  Key=Key+1;
}
if(key4.isTouching(thief)){
  police1.velocityX=3.7;
  police2.velocityY=3.7; 
  police3.velocityX=3.7; 
  police4.velocityY=2.4;
  police5.velocityX=3.7;
  key4.x=1200;
  laser3.velocityX=-3;
  Key=Key+1;
}

if(diamond1.isTouching(thief)){
  gameState="win";
  
}

if(gold1.isTouching(thief)){
  gold1.x=1300;
  Gold=Gold+2;
}
if(gold2.isTouching(thief)){
  gold2.x=1300;
  Gold=Gold+2;
}
if(gold3.isTouching(thief)){
  gold3.x=1300;
  Gold=Gold+2;
}
if(gold4.isTouching(thief)){
  gold4.x=1300;
  Gold=Gold+2;
}
if(gold5.isTouching(thief)){
  gold5.x=1300;
  Gold=Gold+2;
}
if(gold6.isTouching(thief) || gold7.isTouching(thief)){
  gold6.x=1300;
  gold7.x=1300;
  Gold=Gold+4;
}
if(gold8.isTouching(thief) || gold9.isTouching(thief)){
  gold8.x=1300;
  gold9.x=1300;
  Gold=Gold+10;
}

//police 

 
 if(police2.isTouching(edges)){
   police2.x=1300;
   police3.visible=true;
   
   brick13.visible=false;
   brick14.visible=false;
   
   police3.velocityY=0;
   police3.velocityX=-2.5;

  }
 
  
 }

   if(live===0){
     
     
      gameState="over";
      stop();
   }

   
   
    

    
    if(keyDown("r")&& live!=0 && gameState!=START){
      
      gameState=JST;
      siron1.destroy();
      sound1.stop();
      
      reset();
    }
    if(keyDown("Esc")&& gameState==="over"){
      gameState=JST;
      live=3;
      siron1.destroy();
      sound1.stop();
      
      reset();
    }
    if(keyDown("Shift")&& gameState==="win"){
      gameState=JST;
      live=3;
      
      
      reset();
    }
  
    if(keyIsDown(UP_ARROW)&& gameState===START){
      thief.y=thief.y-8;
    }
    if(keyIsDown(DOWN_ARROW)&& gameState===START){
      thief.y=thief.y+8;
    }
    //if(keyIsDown(LEFT_ARROW)){
      //thief.x=thief.x-8;
    //}
    if(keyIsDown(RIGHT_ARROW)&& gameState===START){
      thief.x=thief.x+8;
    }
    if(keyIsDown(LEFT_ARROW)&& gameState===START ){
      
      thief.x=thief.x-8;
      
      
      
    }
 
 
    
    
      if(thief.isTouching(police1) || thief.isTouching(police2) ||  
      thief.isTouching(police4) || thief.isTouching(police5) || thief.isTouching(laser1) 
     || thief.isTouching(laser2) || thief.isTouching(laser3) || thief.isTouching(laser4)&& live>0){
      
      siron1=createSprite(600,250,20,20);
      siron1.addImage(sironImg)
      sound1.play();
      thief.x=1070;
      thief.y=500;
     gameState=END;
      
    live=live-1;
    

     }
     if(gameState===END){
      textSize(40);
      fill("white")
      text("Life Remaining :"+live,440,430)
      text("Press R to Start again ",440,130)
      stop();
  //gameState=START;
  
  }
  if(gameState==="over"){
    textSize(40);
     fill("white")
     text("Press Esc To Restart",440,480,)
     fill("yellow");
     text("Game Over",490,370)
     textSize(40);
    stop();
//gameState=START;

}
if(gameState==="win"){
  background(bg1)
  textSize(60);
  fill("yellow")
    text("You Win",440,300)
    stop();
    textSize(40);
    fill("white")
   text("Press Shift To Restart",400,480,)
   
}
    
  }
  function reset(){
  police1.x=900;
  police1.velocityX=2.5;
  police2.y=200;
  police2.velocityY=2.5;
  police3.visible=false;
  police3.x=770;
  police3.velocityX=2.5;
  police4.y=210;
  police4.velocityY=1.5;
  police5.x=40;
  police5.velocityX=2.5;

  thief.x=1070;
  thief.y=500;

  laser1.x=88;
  laser2.x=88;
  laser3.x=88;
  laser4.x=1070;
key1.x=410;
key2.x=560;
key3.x=1050;
key4.x=280;

gold1.x=1060;
gold2.x=700;
gold3.x=700;
gold4.x=400;
gold5.x=520;
gold6.x=260;
gold7.x=270;
gold8.x=80;
gold9.x=80;
police2.x=770;
police3.visible=false;
brick6.x=650;

brick7.x=530;
brick8.y=480;
brick8.velocityY=0;
brick9.x=500;
brick16.x=770;
brick20.x=550;
brick24.x=101;
brick27.x=280;
brick28.x=80;
Key=0;
Gold=0;
score=0;

  }

function stop(){
  police1.velocityX=0;
  police1.x=900;
  police2.velocityY=0;
  police2.y=200;
  police3.velocityX=0;
  police3.x=770;
  police4.velocityY=0;
  police4.y=210;
  police5.velocityX=0;
  police5.x=40;
  laser1.velocityX=0;
  laser2.velocityX=0;
  laser3.velocityX=0;
  laser4.velocityX=0;
}
    




