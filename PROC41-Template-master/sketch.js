 const Engine= Matter.Engine;
 const Bodies= Matter.Bodies;
 const World= Matter.World;
 var ball, ground, obstacle;
 var engine,world;
 var canvas;
 var ballanimation;
 var backgroundimg
 var npc;
 var previous=0,current;
 var canvas;
 var life=4
  function preload(){
    ballanimation= loadImage("transparentball.png")
    backgroundimg= loadImage("bg.png")
  }

 function setup(){
   // fill(rgb(0,0,0))
   canvas=createCanvas(displayWidth,displayHeight)
    
    engine= Engine.create()
    world= engine.world;
    ground= new Ground(displayWidth/2,1080,displayWidth*100,20)
    ballsprite= createSprite(800,300,10,10)
    ballsprite.addImage("ballanimation1",ballanimation)
    ballsprite.scale="1.4"
   // ground= createSprite(300,596,3200,20)
    //ground.debug=true;
    //ground.setCollider("rectangle",0,0,3200,20)
 
    ball= new Ball(200,ground.body.position.x-6,31,30)
    npc= new Nonplayer(1000,displayHeight-6,40,60)


    //previous = millis()
   
 }

 function draw(){
   background("red")
   //image(backgroundimg,0,0,displayWidth,displayHeight)
    Engine.update(engine)
    ground.display();
    ball.display()
    npc.display()
    //npc.moving()
    console.log(displayHeight, displayWidth)
   
    current = millis();
    console.log(npc.body.speed)
   
    ballsprite.x=ball.body.position.x;
    ballsprite.y=ball.body.position.y;
    //camera.position.x=displayWidth/2
   camera.position.x=ballsprite.x
   camera.position.y=ballsprite.y;
   // camera.position.y=ball.body.position.y;
    //console.log(npc)
    //isCollided()
    console.log(ball.body.position.x)
    console.log(life)
    //isColliding()
    //console.log("current: ", Math.floor(current/1000))
   // console.log("previous: ", Math.floor(previous/1000))

    //console.log(beforesecondspace)
    //ball.collide(ground)
    isTouching()
  //  keyPressed()
  drawSprites()
 }
 function keyPressed(){
    if(keyCode===32 && ball.body.position.y>1001){ //Space
      ball.upForce()
      ball.downForce()
      previous = current;
      //console.log("previous = current")
    }
    else{console.log("pressed multiple times")}
    if(keyCode === 65){
      ball.leftForce()
    }
    if(keyCode === 68){
      ball.rightForce()
    }


   
  }
function isTouching(){

  if(ball.x-npc.x<ball.radius+npc.radius){
    World.remove(world,npc.body)
    life-=1;

  }
}
//function isColliding(){
  //Matter.Detector.canCollide(ball,npc)
//}


