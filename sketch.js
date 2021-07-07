var tom,tom1,tom2,tom3;
var jerry,jerry1,jerry2,jerry3;
var bg;
function preload() {
   bg=loadImage("images/garden.png");
   tom1=loadAnimation("images/cat1.png");
   tom2=loadAnimation("images/cat2.png","images/cat3.png");
   tom3=loadAnimation("images/cat4.png");
   jerry1=loadAnimation("images/mouse1.png");
   jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
   jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
  tom=createSprite(870,600);
  tom.addAnimation("standing",tom1);
  tom.addAnimation("running",tom2);
  tom.addAnimation("collided",tom3);
 tom.scale=0.2;
 jerry=createSprite(200,600);
jerry.addAnimation("standing",jerry1);
  jerry.addAnimation("running",jerry2);
  jerry.addAnimation("collided",jerry3);
jerry.scale=0.2;
}

function draw() {

    background(bg);
    if(tom.x-jerry.x<tom.width/2+jerry.width/2){
        tom.velocityX=0;
       // tom.x=300;
        tom.changeAnimation("collided");
        jerry.changeAnimation("collided");
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.changeAnimation("running");
     jerry.changeAnimation("running");
 }


}
