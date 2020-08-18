class Nonplayer{
    constructor(x,y,radius){
        var options={
            friction:0.01
        }
        this.body= Bodies.circle(x,y,radius,options)
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        //Bodies.rectangle(x,y,width,height,options)
    }
    display(){
        //if(this.body.speed>4){
          //  World.remove(world,this.body)
          //  life-=1;
            
       //}
      
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
     moving(){
        this.body.position.x-=10
        if(this.body.position.x<752){
        this.body.position.x+=14;
        }
    }
    
     
}