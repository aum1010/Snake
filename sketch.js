const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var s;

var aimage;
var a;
function preload() {
    aimage=loadImage("apple.jpg")
}

function setup()
{
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    s=new Snake(1200,600,50,50)
    if (keyDown(RIGHT_ARROW)){
        s.x=s.x+9
    }
    if (keyDown(DOWN_ARROW)){
        s.y=s.y-20
    }
    if (keyDown(LEFT_ARROW)){
        s.x=s.x -9
    }
    if (keyDown(UP_ARROW)){
        s.y=s.y -9
        
    }
}
function draw(){
    background("deeppink");
    Engine.update(engine);
    
    s.display();
}

