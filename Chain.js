class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyB,
            bodyB:bodyB,
            length:30,
            stiffness:0.5
        }
        this.body=Matter.Constraint.create(options);
        World.add(world,this.body)
    }
    display(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.body.bodyB.position.x,this.body.bodyB.position.y)
    };

}