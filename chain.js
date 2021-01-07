class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
       
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
            stroke("white")
            strokeWeight(3);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
        }
    }
    
