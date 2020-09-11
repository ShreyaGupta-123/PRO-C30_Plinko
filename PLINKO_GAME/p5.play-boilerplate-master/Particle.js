class Particle{
    constructor(x,y,r){
      
        this.r=10

        this.body=Bodies.circle(x,y,10);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
            var angle=this.body.angle;
            var position=this.body.position;
            push();
            translate(position.x,position.y);
            rotate(angle);
            noStroke();
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0,0,10);
            pop();
 
    }
  
    }

