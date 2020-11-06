
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper=new Paper(300,200,30);
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}



