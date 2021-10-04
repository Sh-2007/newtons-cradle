
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5,RoofObject,Rope1,Rope2,Rope3,Rope4,Rope5,world;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    RoofObject = new Roof(400,250,230,20);
	Bob1 = new Bob(320,575,40);
	Bob2 = new Bob(360,575,40);
	Bob3 = new Bob(400,575,40);
	Bob4 = new Bob(440,575,40);
	Bob5 = new Bob(480,575,40);
	Rope1 = new Rope(Bob1.body,RoofObject.body,-80,0);
	Rope2 = new Rope(Bob2.body,RoofObject.body,-40,0);
	Rope3 = new Rope(Bob3.body,RoofObject.body,0,0);
	Rope4 = new Rope(Bob4.body,RoofObject.body,40,0);
	Rope5 = new Rope(Bob5.body,RoofObject.body,80,0);


	Engine.run(engine);
  
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45})
}

}
function draw() {
  rectMode(CENTER);
  background(0);
  RoofObject.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
 
}



