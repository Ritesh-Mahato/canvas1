const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;



var line,i=0;
function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  line = new Line(600,200,1,1);
}
console.log(firebase);

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  if (mouseDragged){
    for(i=1;1>=1;i++){
      line.display();
    }
  }

  line.display();

  
}
function mouseDragged(){
   Matter.Body.setPosition(line.body, {x: mouseX , y: mouseY});
}
