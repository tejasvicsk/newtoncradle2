
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

	bob1 = new Bob(320,300,20);
	bob2 = new Bob(360,300,20);
	bob3 = new Bob(400,300,20);
	bob4 = new Bob(440,300,20);
	bob5 = new Bob(480,300,20);
	chain1 = new Chain(bob1.body,{x:320,y:100});
	
	chain2 = new Chain(bob2.body,{x:360,y:100});
	chain3 = new Chain(bob3.body,{x:400,y:100});
	chain4 = new Chain(bob4.body,{x:440,y:100});
	chain5 = new Chain(bob5.body,{x:480,y:100});




	Engine.run(engine);
  
}


function draw() {
  background("black");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-40});

}


}
