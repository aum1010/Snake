class Snake 
{
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
     
      
      
     
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(1200,300, this.width, this.height);
      
    }
  }