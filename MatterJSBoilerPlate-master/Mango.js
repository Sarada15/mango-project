class Mango {
    constructor(x,y,radius) {
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
            this.body = Bodies.circle(x,y,radius/2,options);
            this.radius = radius;

            this.image = loadImage("mango.png");

            World.add(world,this.body);
    }
        display() {
            var pos = this.body.position;

            push();
            imageMode(CENTER);
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            image(this.image,0,0,this.radius,this.radius);
            //fill("yellow");
            //ellipse(pos.x,pos.y,this.radius);
            pop();
        }
}