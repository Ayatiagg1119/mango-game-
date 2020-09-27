
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var options = {
	isStatic:false,
	restitution:0,
	friction:1,
	density:1.2
	}	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
function detectCollision() {
	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



