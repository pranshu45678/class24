class Pig {
    constructor(x,y,radius) {
      var option={
        restitution:0.8,density:1,friction:1
    }
this.body=Matter.Bodies.circle(x,y,radius,option);
this.x=x
this.y=y
this.radius=radius
Matter.World.add(world,this.body)



    } 
   display(){
       push ();
     translate (this.body.position.x,this.body.position.y)  
    rotate (this.body.angle);
    ellipseMode(RADIUS)
    fill("green")
    ellipse (0,0,this.radius,this.radius)





  pop ()

   }

}
