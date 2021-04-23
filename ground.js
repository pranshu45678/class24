class Ground{
    constructor(x,y,width,height){
        var a={isStatic:true,}
this.body=Matter.Bodies.rectangle(x, y, width, height,a);
this.width=width;
this.height=height;
Matter.World.add(world,this.body)
    }
    display(){
        push ();
        
        
        rectMode(CENTER)
        fill("green")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ();
    }
}