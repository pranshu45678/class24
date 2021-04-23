class Log{
  constructor (x,y,width,height,angle) {
    var option={
      restitution:0.8,density:1,friction:1
  }
   this.body=Matter.Bodies.rectangle(x,y,width,height,option)
   this.width=width
   this.height=height
   Matter.Body.setAngle(this.body,angle)
 Matter.World.add(world, this.body)
   
  }
  display(){
    push ()  
translate(this.body.position.x,this.body.position.y,)
rotate(this.body.angle);
rectMode(CENTER)
fill("yellow")
rect(0,0,this.width,this.height)






pop ()
  }

  

}

