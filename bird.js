class Bird {
    constructor(x,y ,width,height){
     var option={
         restitution:0.5,density:1.5,friction:1
     }
         
        this.body=Matter.Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
          Matter.World.add(world, this.body)
    }
display (){
this.body.position.x=mouseX;
this.body.position.y=mouseY;


push ()
translate(this.body.position.x,this.body.position.y,)
rotate(this.body.angle);
rectMode(CENTER)
fill("red")
rect(0,0,this.width,this.height)







pop()

}
}
















