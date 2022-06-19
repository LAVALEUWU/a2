var bg,bgimg;
var p1,p2;
var heart;
var heartimg;

var p1stand,p1trow1,p1trow2;
var p2stand,p2trow1,p2trow2;

var ig;

function preload(){
  
  bgimg = loadImage("assets/bg.png")

  heartimg = loadImage("assets/Heart.png")

  p1stand = loadImage("assets/V1")
  p1trow1 = loadImage("assets/V2")
  p1trow2 = loadImage("assets/V3")

  p2stand = loadImage("assets/Y1")
  p2trow1 = loadImage("assets/Y2")
  p2trow2 = loadImage("assets/Y3")
 
}

function setup() {
  createCanvas(1300,600);

  bg = createSprite(1300/2-20,600/2,20,20)
  bg.addImage(bgimg)
  bg.scale = 0.5

  ig = createSprite(1300/2,550,1300,10)
  ig.visible = true;
  
  p1 = createSprite(100,600-100,50,50)
  p1.addImag(p1stand)
  p1.scale = 0.3
  p1.debug = true
  p1.setCollider("rectangle",0,0,200,200)
  
  p2 = createSprite(100,600-100,50,50)
  p2.addImag(p2stand)
  p2.scale = 0.3
  p2.debug = true
  p2.setCollider("rectangle",0,0,200,200)

  heart = createSprite(displayWidth-150,40,20,20)
  heart.visible = false
  heart.addImage("heart1",heartimg)
  heart.scale = 0.3
}

function draw() {
  if((keyDown("W")||touches.length>0)&& p1.y > 130){
    p1.velocityY = -12;
    console.log(p1.x,p1.y);
  }
  if((keyDown("S")||touches.length>0)&& p1.y < 860){
   p1.y = p1.y+30
   console.log(p1.x,p1.y);
  }
  
  if(keyDown("D")&& p1.x < 1660){
    p1.x = p1.x+30
    console.log(p1.x,p1.y);
   }
  
   if(keyDown("A")&& p1.x > 230){
    p1.x = p1.x-30
    console.log(p1.x,p1.y);
   }


   
   if((keyDown('UP_ARROW')||touches.length>0)&& p2.y > 130){
    p2.velocityY = -12;
    console.log(p2.x,p2.y);
  }
  if((keyDown('DOWN_ARROW')||touches.length>0)&& p2.y < 860){
   p2.y = p2.y+30
   console.log(p2.x,p2.y);
  }
  
  if(keyDown('RIGHT_ARROW')&& p2.x < 1660){
    p2.x = p2.x+30
    console.log(p2.x,p2.y);
   }
  
   if(keyDown('LEFT_ARROW')&& p2.x > 230){
    p2.x = p2.x-30
    console.log(p2.x,p2.y);
   }

   drawSprites();
}


