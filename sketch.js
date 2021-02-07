
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	var options = {
        bodyA:stoneObj.body,
        bodyB:treeObj.body,
        length:40,
        stiffness:0.3
	}
    sling = Matter.Constraint.create(options)
    World.add(world,sling)
	sling1 = new Chain(box1.body,box2.body)

	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  line(stoneObj.body.position.x,stoneObj.body.position.y,
	treeObj.body.position.x,treeObj.body.position.y)
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
}
