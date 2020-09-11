const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var world,engine,body;
var ground,division1,division2,division3,division4,division5,division6,division7,extradivision;
var plinkos=[];
var particles=[];
var canvas;
var plinko



function setup() {
  canvas=createCanvas(480,600);
  engine=Engine.create();
  world=engine.world;
  var width=canvas.width;

  ground=new Ground(240,600,480,40);

  division1=new Division(0,450,10,250);
  division2=new Division(80,450,10,250);
  division3=new Division(160,450,10,250);
  division4=new Division(240,450,10,250);
  division5=new Division(320,450,10,250);
  division6=new Division(400,450,10,250);
  division7=new Division(480,450,10,250);
  extradivision=new Division(240,580,480,10);

  for (var k = 40; k <= 460; k = k + 50) {
    plinkos.push(new Plinko(k, 75));}

    for (var k = 60; k <= 460; k = k + 50) {
      plinkos.push(new Plinko(k, 150));}

      for (var k = 40; k <= 460; k = k + 50) {
        plinkos.push(new Plinko(k, 225));}
    
  
  
}

function draw() {
  background(0); 
  Engine.update(engine) ;

  ground.display();
 
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  extradivision.display();

    for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
  }


  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 0,10));
}
for (var a = 0; a < particles.length; a++) {
    particles[a].display();;
}



  drawSprites();
}