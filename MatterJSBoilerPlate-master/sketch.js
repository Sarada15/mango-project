const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree,treeImg;
var stone;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5;
var constraint;

function preload()
{
	//treeImg = loadImage("tree.png"); 
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,698,800,2);
	tree = new Tree(640,510,10,10);
	//tree.setCollider("rectangle",640,510,150,200);
	
	stone = new Stone(100,650,25);

	boy = createSprite(100,650,10,60);
	boy.addImage(boyImg);
	boy.scale = 0.05;
	
	mango1 = new Mango(720,550,20);
	mango2 = new Mango(740,570,20);
	mango3 = new Mango(680,590,20);
	mango4 = new Mango(765,580,20);
	mango5 = new Mango(720,590,20);

	constraint = new Launcher(stone.body, {x:72,y:615});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	text(mouseX+","+mouseY,100,100);

	image(boyImg,100,650);

	ground.display();
 	tree.display();
	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	collision(stone,mango1);
	collision(stone,mango2);
	collision(stone,mango3);
	collision(stone,mango4);
	collision(stone,mango5);

	constraint.display();
	console.log(stone.body.position);
  drawSprites();
 
}

function collision(stone,mango) {
	mangoPos = mango.body.position;
	stonePos = stone.body.position;
	
		distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

			if (distance <= mango.radius + stone.radius) {
				Matter.Body.setStatic(mango.body,false);
			}

			/*stonePos = stone.body.position.x + stone.body.width;
			mangoPos = mango.body.position.x;
		  
			if (stonePos >= mangoPos){
			  Matter.Body.setStatic(mango.body,false)
			}*/
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	constraint.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:72, y:615});
		constraint.attach(stone.body);
	}
}