//Engine -> WOrld -> Bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world,ground;

var ball;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 engine =Engine.create();
 world= engine.world;

var options = {
isStatic : true
}
 ground= Bodies.rectangle(400,380,800,20,options);
 World.add(world,ground);
 console.log(ground)

var ball_options={
  restitution:3
}

 ball = Bodies.rectangle(200,200,30,30,ball_options)
 World.add(world,ball)

 // create Engine of Matter then create game's engine and world
 //synchronise game's engine with matter.Engine
// Create  object and add it to the World
//update engine in draw function also



}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}