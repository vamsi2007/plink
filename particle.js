class Particle {
    constructor(x,y,r,options){
        var options = {
            restitution: 1,
            friction: 0
        } 

        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.colour = bodies.colour(random(0,255),random(0,255),random(0,255));
        
        World.add(world, this.body);
    }

    display(){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}