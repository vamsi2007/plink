var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // divisions = new Divisions(20,100,k,750);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }

  //create 2nd row of plinko objects
  for (var j = 25; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,100));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150));
  }

  //create 2nd row of plinko objects
  for (var j = 25; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,200));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,250));
  }

  //create 2nd row of plinko objects
  for (var j = 25; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,300));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,350));
  }

  //create 2nd row of plinko objects
  for (var j = 25; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,400));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,450));
  }
  //create particle objects

  particle1 = new Particle(40,20,10);
}


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
 

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  particle1.display();
}