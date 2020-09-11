class Plinko{
    constructor(x,y){
        this.body=Bodies.circle(x,y,7,{isStatic:true});
        this.x=x
        this.y=y
        this.radius=7;
        World.add(world,this.body);
    }
    display(){
            var angle=this.body.angle;
            var position=this.body.position;
            push();
            translate(position.x,position.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill('white');
            ellipse(0,0,this.radius);
            pop();
 
    }
  
    }

