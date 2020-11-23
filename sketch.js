const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash, ground, side1, side2, side3;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trash = new Paper(200,670,20);
	ground = new Ground(400,690,800,20);
	side1 = new Dustbin(600,670,150,20);
	side2 = new Dustbin(515,580,20,200);
	side3 = new Dustbin(685,580,20,200);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
	
	console.log(mouseX , mouseY , frameCount);

	if(trash.body.position.y > 500 && trash.body.position.x < 400){
		yeet();
	}

	drawSprites();

	trash.display();
	ground.display();
	side1.display();
	side2.display();
	side3.display();
}

function yeet() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, trash.body.position,{x:0.55,y:-2});
	}
}