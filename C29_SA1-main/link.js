class Link{
    constructor(bodyA,bodyB)
    {  
 var lastlink = bodyA.body.bodies.lenght-2;
 this.link = Constraint.create(
    {
   bodyA:bodyA.body.bodies[lastlink],
   pointA:{x:0,y:0},
   bodyB:bodyB,
   pointB:{X:0,y:0},
   lenght:-10,
   stiffness:0.01
   });
  World.add(engine.world,this.link)
    }
}