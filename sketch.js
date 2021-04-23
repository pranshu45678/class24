const Engine=Matter.Engine;
















var engine,world
var ground,box1,box2,box3,box4,box5;
var pig1,pig2
var log1
function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world;
  ground=new Ground(600,380,1200,20)
  box1=new Box(700,320,70,70)
  pig1=new Pig(810,350,30)
  box2=new Box(920,320,70,70)
  log1=new Log(810,260,20,300,PI/2)
  box3=new Box(920,240,70,70)
  box4=new Box(700,240,70,70)
  bird=new Bird(200,150,50,50)
  log2=new Log(810,180,20,300,PI/2)
  pig2=new Pig(810,220,30)
  box5=new Box(818,160,70,70)
  log3=new Log(760,120,20,150,-PI/7)
  log4=new Log(870,120,20,150,-PI/7)
}

function draw() {
  background(255,255,255); 
  Matter.Engine.update(engine)
  ground.display();
  box1.display()
  pig1.display()
  box2.display()
  log1.display()
  box3.display()
  box4.display()
  bird.display()
  log2.display()
  pig2.display()
  box5.display()
  log3.display(
   log4.display()
  )

}