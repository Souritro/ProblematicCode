class Ball{
    constructor(x,y,radius) {
        var options = {
            //isStatic: false,
            restitution:0.1,
           //density:0.3,
          friction:0.02
            
       }
        this.body = Bodies.circle(x,y,radius,options)
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.downvel=1.2;
        this.rightvel=-0.98;
        this.leftvel=0.98;
        World.add(world, this.body);
      }
      display(){
        var pos1 =this.body.position;
        var testangle= this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        //angleMode(DEGREES)
        rotate(testangle)
        ellipseMode(RADIUS);
       // fill("brown");
      ellipse(ballanimation,0,0, this.radius, this.radius);

       pop()
      }
      upForce(){
       // if(keyCode===32){
          Matter.Body.applyForce(this.body, this.body.position,{x:0,y:-0.1})
      //  }
      }
      downForce(){
        this.body.position.y += this.downvel;
      }
      leftForce(){
        //if(keyCode === LEFT_ARROW){
          Matter.Body.applyForce(this.body, this.body.position,{x:-0.09,y:0})
         // this.body.position.x+=this.leftvel
       // }
      }
      rightForce(){
       // if(keyCode === RIGHT_ARROW){
          Matter.Body.applyForce(this.body, this.body.position,{x:0.09,y:0})
          //this.body.position.x+=this.rightvel
       // }
      }

}